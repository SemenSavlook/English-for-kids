/* eslint-disable no-console */
import { App } from './app';
import { StateInterface } from './components/intrefaces/StateInterface';
import { arrayOfWords } from './Store';

const STATE: StateInterface = {
  mode: 'Train',
  category: 'Main page',
  errors: 0,
  currentSound: ''
}

window.onload = () => {
  window.location.hash = '';
  const appElement = document.getElementById('app-container');
  if (!appElement) throw Error('App root element not found');

  const start = new App(appElement, arrayOfWords, STATE);

  window.addEventListener('hashchange', () => {

    // ------------ Render Index Page -----------

    if (STATE.category === 'Main page') {
      start.GameField.resetStatusContainer();
      start.headerComponent.playButton.element.setAttribute('disabled', 'true');
      start.GameField.gameFieldInit(arrayOfWords, STATE);
      start.headerComponent.controlsButtonsContainer.element.classList.remove('play');
      return;
    }

    // ------------ Render Page depending on category -----------
    start.removeListeners();
    start.headerComponent.playButton.element.removeAttribute('disabled');
    start.GameField.gameFieldRender(arrayOfWords, STATE);
    start.startPlayGame(STATE);

    start.headerComponent.controlsButtonsContainer.element.classList.remove('play');

    start.GameField.resetStatusContainer();
    STATE.currentSound = '';

  })

  // ------------ Swither listeners Handlers-----------
  start.headerComponent.switchContainerCheckBox.element.addEventListener('input', () => {
    start.headerComponent.controlsButtonsContainer.element.classList.remove('play');
    start.GameField.resetStatusContainer();

    document.querySelectorAll('.done')?.forEach((el) => el.classList.remove('done'));
    STATE.errors = 0;
    STATE.currentSound = '';
    start.removeListeners();
    start.startPlayGame(STATE);
  });

  start.headerComponent.switherHandler(STATE);
};
