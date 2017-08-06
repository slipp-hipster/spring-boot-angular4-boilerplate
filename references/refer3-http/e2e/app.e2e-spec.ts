import { Refer3HttpPage } from './app.po';

describe('refer3-http App', () => {
  let page: Refer3HttpPage;

  beforeEach(() => {
    page = new Refer3HttpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
