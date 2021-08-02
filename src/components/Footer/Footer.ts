import './footer.css';
import gh from '../assets/github.svg';
import rss from '../assets/rss.svg';
import { BaseComponent } from '../../basic-components/BaseComponent';


const footer = `
    <div class="footer-center-section center-section ds__f--ai_c--jc__sb">
      <a href="https://github.com/SemenSavlook" target="_blank" class="ds__f">
        <img src="${gh}" alt="">
        <span class="footer-span">@SemenSavlook</span>
      </a>
      <div class="footer-text footer-span">
        Rolling scopes JSFE2021Q1 «English for kids» task by Semen Savluk
      </div>
      <a href="https://rs.school/js/" target="_blank" class="ds__f">
        <img src="${rss}" alt="" class="rss">
      </a>
    </div>
`;

export class Footer extends BaseComponent {
  constructor() {
    super('footer', ['ds__f--ai__c--jc__c']);
    this.element.innerHTML = footer;
  }
}
