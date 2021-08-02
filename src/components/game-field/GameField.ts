import { BaseComponent } from "../../basic-components/BaseComponent";
import { StateInterface } from "../intrefaces/StateInterface";
import { CardComponent } from "./CardComponent";
import { CardComponentForMain } from "./CardComponentForMain";
import { StatusContainer } from "./StatusContainer";

export class GameField extends BaseComponent {
  statusContainer = new StatusContainer;

  gameField = new BaseComponent('div', ['game-field-container']);

  audio = document.createElement('audio');

  constructor(arrayOfWords: StoreInterface, STATE: StateInterface) {
    super('main', ['main-container']);
    this.element.appendChild(this.statusContainer.element);
    this.element.appendChild(this.gameField.element);

    this.gameFieldInit(arrayOfWords, STATE);
  }

  gameFieldInit(arr: StoreInterface, STATE: StateInterface):void {
    this.gameField.element.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
      const cardTitle = (Object.keys(arr[i]))[0];
      const array = Object.values(arr[i])[0];

      if (Array.isArray(array)) {
        const path = array[0];
        const mainCard = new CardComponentForMain(cardTitle, path[2]).element;

        mainCard.addEventListener('click', () => {
          STATE.category = cardTitle;
          window.location.hash = cardTitle;

          document.querySelectorAll('ul.navigation-ul li').forEach((el) => el.classList.remove('active-item'));
          document.getElementById(STATE.category)?.classList.add('active-item');
        })
        this.gameField.element.appendChild(mainCard);
      }
    }
  }

  gameFieldRender(arr: StoreInterface, STATE: StateInterface):void {
    this.gameField.element.innerHTML ='';

    const prepareCategory = (Object.values(arr)).filter((el) => Object.keys(el)[0] === STATE.category);

    const readyCategory = Object.values(prepareCategory[0])[0];

    if (Array.isArray(readyCategory) && readyCategory.length > 0) {
      for (let i = 0; i < readyCategory.length; i++) {
        const card = new CardComponent(readyCategory[i]);

        card.element.addEventListener('click', (ev) => {

          if (ev.target !== card.rotateBtn.element && !document.body.classList.contains('game')) {
            this.audio.src = `audio/${readyCategory[i][3]}`;
            this.audio.play();
          }
        })

        this.gameField.element.appendChild(card.element);
      }

    } else {
      this.gameFieldInit(arr, STATE);
    }

    this.element.appendChild(this.audio)
  }

  // -------------- Status container handlers -----------------
  addCorrectStar():void {
    this.statusContainer.correctSound.play();
    this.statusContainer.element.appendChild((new BaseComponent('div', ['correct-star'])).element);
  }

  addErrorStar():void {
    this.statusContainer.errorSound.play();
    this.statusContainer.element.appendChild((new BaseComponent('div', ['error-star'])).element)
  }

  resetStatusContainer(): void {
    this.statusContainer.element.innerHTML = '';
  }
}
