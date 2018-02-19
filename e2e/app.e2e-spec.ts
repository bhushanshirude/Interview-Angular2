import { PagePage } from './app.po';

describe('page App', function() {
  let page: PagePage;

  beforeEach(() => {
    page = new PagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
