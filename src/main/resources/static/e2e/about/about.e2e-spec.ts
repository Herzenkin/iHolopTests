import { browser, element, by } from 'protractor';

describe('About Page', () => {

  beforeEach(() => {
    browser.get('/about');
  });

  it('should content correct info', () => {
    let description = element(by.css('article'));

    expect(description.getText()).toContain('demonstration');
  });
});
