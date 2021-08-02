import { BaseComponent } from "./BaseComponent";

export class ButtonComponent extends BaseComponent {

  constructor(
    styles: string[] = [],
    id: string,
    title: string
  ) {
    super('button', styles);
    this.element.id = id;
    this.element.textContent = title;
  }
}
