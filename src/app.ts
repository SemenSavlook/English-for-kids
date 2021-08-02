import './common-styles/normalize&zero.css';
import './common-styles/style.css';
import { Footer } from './components/Footer/Footer';
import { EndWindow } from './components/game-field/EndWindow';
import { GameField } from './components/game-field/GameField';
import { Header } from './components/header/Header';
import { StateInterface } from './components/intrefaces/StateInterface';

function arrayShuffler(arr: string[] | unknown): string[] {

  if (Array.isArray(arr)) {
    const newArr = arr.slice();
    return newArr.sort(() => Math.random() - 0.5);
  }
  return [];
}

export class App {
  headerComponent: Header;

  GameField: GameField;

  playSessionCurrentSound = document.createElement('audio');

  endWindow = new EndWindow();

  startListenerFn: () => void;

  gameIntellectFn!: () => void;

  constructor(readonly rootElement: HTMLElement, arrayOfWords: StoreInterface, STATE: StateInterface) {
    this.headerComponent = new Header(arrayOfWords, STATE);
    rootElement.appendChild(this.headerComponent.header);

    this.GameField = new GameField(arrayOfWords, STATE);
    rootElement.appendChild(this.GameField.element);

    rootElement.after((new Footer()).element);

    this.startListenerFn = this.startListener.bind(this, STATE, arrayOfWords);

    this.headerComponent.replayButton.element.addEventListener('click', () => {
      if (STATE.currentSound) {
        this.playSessionCurrentSound.src = STATE.currentSound;
        this.playSessionCurrentSound.play();
      }
    })
  }

  startPlayGame(STATE: StateInterface): void {
    STATE.errors = 0;
    if (STATE.category === 'Main page') {
      this.headerComponent.playButton.element.setAttribute('disabled', 'true');
    }

    this.headerComponent.playButton.element.addEventListener('click', this.startListenerFn)
  }

  startListener(STATE: StateInterface, arr: StoreInterface): void {

    this.GameField.resetStatusContainer();
    this.headerComponent.replayButton.element.removeAttribute('disabled');
    document.querySelectorAll('.done')?.forEach((el) => el.classList.remove('done'));

    this.headerComponent.controlsButtonsContainer.element.classList.add('play');
    const prepareCategory = (Object.values(arr)).filter((el) => Object.keys(el)[0] === STATE.category);
    const readyCategory = Object.values(prepareCategory[0])[0];

    const shuffledArray = arrayShuffler(readyCategory);

    STATE.currentSound = `audio/${shuffledArray[shuffledArray.length - 1][3]}`;

    setTimeout(() => {
      this.playSessionCurrentSound.src = STATE.currentSound;
      this.playSessionCurrentSound.play();
    }, 500);

    // ----------- Add game Intellect ----------

    function gameIntellect(this: App) {
      // eslint-disable-next-line prefer-rest-params
      const ev = arguments[0];

      if ((ev.target as HTMLImageElement).currentSrc && shuffledArray.length > 0) {
        const str = (ev.target as HTMLImageElement).currentSrc.replace(/.*\/+/i, '');

        if (str === shuffledArray[shuffledArray.length - 1][2]) {
          this.GameField.addCorrectStar();
          this.GameField.statusContainer.correctSound.play();
          (ev.target as Element).parentElement?.parentElement?.classList.add('done');

          shuffledArray.pop();

          if (shuffledArray.length > 0) {
            STATE.currentSound = `audio/${shuffledArray[shuffledArray.length - 1][3]}`;

            this.playSessionCurrentSound.src = `audio/${shuffledArray[shuffledArray.length - 1][3]}`;
            setTimeout(() => {
              this.playSessionCurrentSound.play();
            }, 500);

          } else {
            STATE.currentSound = '';

            this.endWindow.endWindowRender(STATE.errors);

            this.headerComponent.replayButton.element.setAttribute('disabled', 'true');

            setTimeout(() => {
              STATE.category = 'Main page';
              window.location.hash = 'Main page';
              document.querySelectorAll('ul.navigation-ul li').forEach((el) => el.classList.remove('active-item'));
              document.getElementById(STATE.category)?.classList.add('active-item');
            }, 3600);
          }

        } else {
          this.GameField.addErrorStar();
          this.GameField.statusContainer.errorSound.play();
          STATE.errors += 1;
        }

      }
    }

    this.gameIntellectFn = gameIntellect.bind(this);
    this.GameField.element.addEventListener('click', this.gameIntellectFn);
  }

  removeListeners(): void {
    this.headerComponent.playButton.element.removeEventListener('click', this.startListenerFn);
    this.GameField.element.removeEventListener('click', this.gameIntellectFn);
  }
}

