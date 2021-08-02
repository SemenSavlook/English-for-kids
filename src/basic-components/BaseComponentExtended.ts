import { BaseComponent } from "./BaseComponent";

export class BaseComponentExtended extends BaseComponent {

  constructor(
    tag: keyof HTMLElementTagNameMap,
    styles: string[] = [],
    id: string,
  )
  {
    super(tag, styles);
    this.element.id = id;
  }

}
