import { SrvupPage } from './app.po';

describe('srvup App', () => {
  let page: SrvupPage;

  beforeEach(() => {
    page = new SrvupPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
