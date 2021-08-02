import { BaseComponent } from "../../basic-components/BaseComponent";

function createTranslateBlock(title:string):Element {
  const translateBlock = new BaseComponent('div', ['card-item--text-block']);
  translateBlock.element.textContent = title;
  return translateBlock.element;
}

export class CardComponent extends BaseComponent {
  cardItem = new BaseComponent('div', ['card-item']);

  cardItemFront = new BaseComponent('div', ['card-item--front']);

  cardItemBack = new BaseComponent('div', ['card-item--back']);

  rotateBtn = new BaseComponent('div', ['card-item--rotate']);

  constructor(cardProp: string[] ) {
    super('div', ['card-container']);
    this.cardItem.element.appendChild(this.cardItemFront.element);
    this.cardItem.element.appendChild(this.cardItemBack.element);
    this.element.appendChild(this.cardItem.element);
    this.oneCardRender(cardProp);

  }

  oneCardRender(arrayWithProperties: string[]):void {
    const image = document.createElement('img');
    image.src = `images/${arrayWithProperties[2]}`;

    this.cardItemFront.element.appendChild(image);
    this.cardItemFront.element.appendChild(createTranslateBlock(arrayWithProperties[0]));
    this.cardItemFront.element.appendChild(this.rotateBtn.element);

    this.cardItemBack.element.appendChild(image.cloneNode(true));
    this.cardItemBack.element.appendChild(createTranslateBlock(arrayWithProperties[1]));

    this.rotateBtn.element.addEventListener('click', () => {
      this.element.classList.add('translate');
    });

    this.cardItem.element.addEventListener('mouseleave', () => {
      this.element.classList.remove('translate');
    })
  }

}
