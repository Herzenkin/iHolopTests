import { browser, element, by } from 'protractor';
import {} from 'jasmine';

describe('Dashboard Page', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should display correct header', () =>{
    let header = element(by.css('h1'));
    expect(header.getText()).toBe('iHolop. All holops belong to us!');
  });

  it('should display list with 3 Holops', () => {
    let holops = element.all(by.css('.holop'));
    expect(holops.count()).toBe(3);
    expect(holops.first().getText()).toContain('UaSyA');
    expect(holops.get(1).getText()).toContain('PrOhOr');
    expect(holops.last().getText()).toContain('DjAnGo');
  });

  it('should navigate to Add Holop after clicking "Add" button', () => {
    let addButton = element(by.id('addButton'));
    addButton.click();

    let detailsPageHeader = element(by.css('h4'));
    expect(detailsPageHeader.getText()).toBe('Holop Details');
  });

  it('should navigate to Add Holop after clicking "Add New Holop" link', () => {
    let addLink = element(by.tagName('ul')).element(by.id('addHolop'));
    addLink.click();

    let detailsPageHeader = element(by.css('h4'));
    expect(detailsPageHeader.getText()).toBe('Holop Details');
  });

  it('should show two Holops after clicking "X" button on second Holop', () => {
    let holops = element.all(by.css('.holop'));
    expect(holops.count()).toBe(3, 'initial number of holops');

    let deleteButton = holops.get(1).element(by.css('button'));
    deleteButton.click();

    let remainingHolops = element.all(by.css('.holop'));
    expect(remainingHolops.count()).toBe(2, 'number of holops after deletion');
    expect(remainingHolops.first().getText()).toContain('UaSyA');
    expect(remainingHolops.last().getText()).toContain('DjAnGo');
  });
});
