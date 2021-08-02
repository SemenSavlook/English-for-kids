import { BaseComponent } from "../../basic-components/BaseComponent";
import { StateInterface } from "../intrefaces/StateInterface";

// -------------- Create switch container -----------------
const switchContainerLabel = new BaseComponent('label', ['switch']);

switchContainerLabel.element.innerHTML = `
  <span class="switch-label" data-on="Train" data-off="Play"></span>
  <span class="switch-handle">
    <span class="switch-handle--color"></span>
  </span>
`;

const switchContainerCheckBox = new BaseComponent('input', ['switch-input']);
switchContainerCheckBox.element.setAttribute('type', 'checkbox');

const ul = document.createElement('ul');
ul.classList.add('navigation-ul')
const firstLi = document.createElement('li');
firstLi.textContent = 'Main page';
firstLi.classList.add('active-item');
firstLi.id = 'Main page';
ul.appendChild(firstLi);


export class Header {

  header = document.createElement('header');

  navContainer = new BaseComponent('nav', ['navigation']);

  navigationCloseBtn = new BaseComponent('div', ['navigation-close']);

  navigationWrapper = new BaseComponent('div', ['navigation-wrapper']);

  navBurger = new BaseComponent('div', ['navigation-burger']);

  navSwitchContainer = new BaseComponent('div', ['switch-container']);

  switchContainerCheckBox = switchContainerCheckBox;

  controlsButtonsContainer = new BaseComponent('div', ['header-btns--container']);

  playButton = new BaseComponent('button', ['play-button', 'green-btn', 'none']);

  replayButton = new BaseComponent('button', ['restart-button', 'orange-btn']);

  constructor(arrayOfWords:StoreInterface, STATE:StateInterface) {
    this.initHeader();
    this.initNav(arrayOfWords, STATE);
    this.addCloseHandlers();
  }

  // -------------- Create header component -----------------
  initHeader(): void {
    this.header.appendChild(this.navContainer.element);
    this.header.appendChild(this.navBurger.element);

    this.controlsButtonsContainer.element.appendChild(this.playButton.element);
    this.playButton.element.textContent = 'Play game';
    this.controlsButtonsContainer.element.appendChild(this.replayButton.element);
    this.replayButton.element.textContent = 'Replay sound';
    this.header.appendChild(this.controlsButtonsContainer.element);

    switchContainerLabel.element.prepend(switchContainerCheckBox.element);
    this.navSwitchContainer.element.appendChild(switchContainerLabel.element);
    this.header.appendChild(this.navSwitchContainer.element);
  }

  // -------------- Create navigation list -----------------
  initNav(storeArray: StoreInterface, STATE: StateInterface):void {
    this.navContainer.element.appendChild(this.navigationWrapper.element);
    this.navigationWrapper.element.appendChild(this.navigationCloseBtn.element);
    this.navigationCloseBtn.element.textContent = 'x';

    for (let i = 0; i < storeArray.length; i++) {
      const li = document.createElement('li');
      const liContent = Object.keys(storeArray[i])[0]
      li.textContent = liContent;
      li.id = liContent;
      ul.appendChild(li);
    }

    const ulElements = Array.from(ul.children);

    ulElements.forEach((el) => {
      el.addEventListener('click', () => {
        ulElements.forEach((elem) => {
          elem.classList.remove('active-item');
        })
        el.classList.add('active-item');
        window.location.hash = el.id;
      });
    });

    ul.addEventListener('click', (e) => {

      if ((e.target as Element).textContent && (e.target as Element).tagName === 'LI') {
        STATE.category = String((e.target as Element).textContent);
      }
    });

    this.navigationWrapper.element.appendChild(ul);
  }

  addCloseHandlers():void {
    window.addEventListener('click', (e) => {

      if (!(e.target as Element).classList.contains('navigation-burger')) {
        if (!(e.target as Element).classList.contains('navigation-ul') &&
          !(e.target as Element).classList.contains('navigation-wrapper')
        ) {
          this.navContainer.element.classList.remove('active');
        }
      }
    })

    this.navBurger.element.addEventListener('click', () => {
      this.navContainer.element.classList.toggle('active');
    });

    this.navigationCloseBtn.element.addEventListener('click', () => {
      this.navContainer.element.classList.toggle('active');
    })

  }

  // -------------- Change aplication mode Train or Game -----------------
  switherHandler(state:StateInterface):void {
    this.switchContainerCheckBox.element.addEventListener('input', (ev) => {

      document.body.classList.toggle('game');
      if ((ev.target as HTMLInputElement).checked) {
        state.mode = 'Game';
        this.playButton.element.classList.remove('none');
        setTimeout(() => {
          this.playButton.element.style.opacity = '1';
        }, 20);
      } else {
        state.mode = 'Train';
        this.playButton.element.style.opacity = '0';
        setTimeout(() => {
          this.playButton.element.classList.add('none');
        }, 400);
      }
    })
  }

}
