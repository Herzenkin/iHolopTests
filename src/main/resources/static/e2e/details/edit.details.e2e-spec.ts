import { browser, element, by } from 'protractor';

describe('Details Page', () => {

  let nameInput = element(by.id('holopName'));

  beforeEach(() => {
    browser.get('/edit/1');
  });

  it('should be prepopulated with info for Holop with id = 1', () => {
    let idField = element(by.id('holopId'));
    expect(idField.getText()).toBe('1');
    
    expect(nameInput.getAttribute('value')).toBe('Uasya');
  });

  it('should save Holop with changed name', () => {
    nameInput.clear();
    nameInput.sendKeys('Petr');

    let saveButton = element(by.id('save'));
    saveButton.click();

    let holops = element.all(by.css('.holop'));
    expect(holops.count()).toBe(3);

    let changedHolop = holops.first();
    expect(changedHolop.getText()).toContain('PeTr');
  });
});
