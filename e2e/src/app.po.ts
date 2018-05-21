import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-home h1')).getText();
  }

  goDemos() {
     return element(by.css('app-menu a[textContent="Demos"]')).click();
  }
}
