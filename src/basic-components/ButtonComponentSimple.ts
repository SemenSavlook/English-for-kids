import { BaseComponent } from "./BaseComponent";

export class ButtonComponentSimple extends BaseComponent {

  constructor(
    styles: string[] = [],
    title: string
  ) {
    super('button', styles);
    this.element.textContent = title;
  }
}
