import { Angular2MdPlaygroundPage } from './app.po';

describe('angular2-md-playground App', function() {
  let page: Angular2MdPlaygroundPage;

  beforeEach(() => {
    page = new Angular2MdPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
