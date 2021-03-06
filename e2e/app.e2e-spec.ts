import { AppPage } from './app.po';

describe('nyrr-rfp App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a header', () => {
    page.navigateTo();
    expect(page.getMenu().isDisplayed()).toBe(true);
  });
  it('Should have a logo', ()=> {
    page.navigateTo();
    expect(page.getLogo().isDisplayed()).toBe(true);
  });
});
