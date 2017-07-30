import { Refer2Page } from './app.po';

describe('refer2 App', function() {
  let page: Refer2Page;

  beforeEach(() => {
    page = new Refer2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
