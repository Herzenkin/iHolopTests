import {browser, element, by } from 'protractor';

describe('Details Page', () => {

  let holops = element.all(by.css('.holop'));

  beforeEach(() => {
    browser.get('/add');
  });

  it('should show correct headers', () => {
    let mainHeader = element(by.css('h1'));
    expect(mainHeader.getText()).toContain('iHolop');

    let pageHeader = element(by.css('h4'));
    expect(pageHeader.getText()).toBe('Holop Details');
  });

  it('should navigate to Dashboard after clicking "Back" button', () => {
    let backButton = element(by.id('back'));
    backButton.click();

    expect(holops.count()).toBe(2);
  });

  it('should populate form for new Holop and submit', () => {
    let nameInput = element(by.id('holopName'));
    nameInput.sendKeys('Padavan');
    let masterInput = element(by.id('master'));
    masterInput.sendKeys('Master Yoda');
    let dateFromInput = element(by.id('dateFrom'));
    dateFromInput.sendKeys('2017-02-02');
    let dateToInput = element(by.id('dateTo'));
    dateToInput.sendKeys('2129-12-12');

    let saveButton = element(by.id('save'));
    saveButton.click();

    expect(holops.count()).toBe(3);

    let addedHolop = holops.last();
    expect(addedHolop.getText()).toContain('PaDaVaN');
  });
});
