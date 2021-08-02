import { BaseComponent } from "../../basic-components/BaseComponent";

const endAudio = document.createElement('audio');
const mistakesBlock = document.createElement('div');
mistakesBlock.classList.add('mistakes-block');

export class EndWindow extends BaseComponent {
  constructor() {
    super('div', ['end-window']);
  }

  endWindowRender(er:number):void {
    document.body.prepend(this.element);
    const endImg = document.createElement('div');

    if (er > 0) {
      endImg.classList.add('failure');
      this.element.appendChild(endImg);
      this.element.appendChild(mistakesBlock);
      mistakesBlock.textContent = `Number of mistakes: ${er}`;

      endAudio.src = 'audio/failure.mp3';
      endAudio.play();

    } else {
      endImg.classList.add('success')
      this.element.appendChild(endImg);
      endAudio.src = 'audio/success.mp3';
      endAudio.play();
    }

    this.element.style.opacity = '1';

    setTimeout(() => {
      if (this.element) {
        this.element.style.opacity = '0';
        this.element.innerHTML = '';
      }
    }, 2000);

    setTimeout(() => {
      if (this.element) {
        document.body.removeChild(this.element);
      }
    }, 3500);
  }
}
