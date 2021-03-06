import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getMenu() {
    return element(by.tagName('Header'));
  }
  getLogo() {
    return element(by.className('nyrr-logo'));
  }
}
