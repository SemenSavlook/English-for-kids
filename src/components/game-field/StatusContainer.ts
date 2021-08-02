import { BaseComponent } from "../../basic-components/BaseComponent";

export class StatusContainer extends BaseComponent {
  correctSound = document.createElement('audio');

  errorSound = document.createElement('audio');

  constructor() {
    super('div', ['status-container']);
    this.correctSound.src = 'audio/correct.mp3'
    this.errorSound.src = 'audio/error.mp3'
  }
}
