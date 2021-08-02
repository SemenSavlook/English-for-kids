import { BaseComponent } from "../../basic-components/BaseComponent";

export class CardComponentForMain extends BaseComponent {

  constructor(cardTitle: string, imagePath: string) {
    super('a', ['card-item--main']);

    this.cardMainInit(cardTitle, imagePath);
  }

  cardMainInit(title: string, imagePath:string):void {
    const image = document.createElement('img');
    image.src = `images/${imagePath}`;

    this.element.appendChild(image);
    this.element.appendChild(document.createTextNode(title));
  }
}
