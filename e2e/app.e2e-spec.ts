import { Learn3Page } from './app.po';

describe('learn3 App', function() {
  let page: Learn3Page;

  beforeEach(() => {
    page = new Learn3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
