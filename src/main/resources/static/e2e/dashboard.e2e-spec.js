"use strict";
var protractor_1 = require("protractor");
describe('Dashboard Page', function () {
    beforeEach(function () {
        protractor_1.browser.get('');
    });
    it('should display correct header', function () {
        var header = protractor_1.element(protractor_1.by.css('h1'));
        expect(header.getText()).toBe('iHolop. All holops belong to us!');
    });
    it('should display list with 3 Holops', function () {
        var holops = protractor_1.element.all(protractor_1.by.css('.holop'));
        expect(holops.count()).toBe(3);
        expect(holops.first().getText()).toContain('UaSyA');
        expect(holops.get(1).getText()).toContain('PrOhOr');
        expect(holops.last().getText()).toContain('DjAnGo');
    });
    it('should navigate to "Add Holop" page after clicking "Add" button', function () {
        var addButton = protractor_1.element(protractor_1.by.id('addButton'));
        addButton.click();
        var detailsPageHeader = protractor_1.element(protractor_1.by.css('h4'));
        expect(detailsPageHeader.getText()).toBe('Holop Details');
    });
    it('should navigate to "Add Holop" page after clicking "Add New Holop" link', function () {
        var addLink = protractor_1.element(protractor_1.by.tagName('ul')).element(protractor_1.by.id('addHolop'));
        addLink.click();
        var detailsPageHeader = protractor_1.element(protractor_1.by.css('h4'));
        expect(detailsPageHeader.getText()).toBe('Holop Details');
    });
    it('should navigate to About page after clicking "About" link', function () {
        var aboutLink = protractor_1.element(protractor_1.by.tagName('ul')).element(protractor_1.by.id('about'));
        aboutLink.click();
        var aboutPageHeader = protractor_1.element(protractor_1.by.css('h2'));
        expect(aboutPageHeader.getText()).toBe('About Info');
    });
    it('should show two Holops after clicking "X" button on second Holop', function () {
        var holops = protractor_1.element.all(protractor_1.by.css('.holop'));
        expect(holops.count()).toBe(3, 'initial number of holops');
        var deleteButton = holops.get(1).element(protractor_1.by.css('button'));
        deleteButton.click();
        var remainingHolops = protractor_1.element.all(protractor_1.by.css('.holop'));
        expect(remainingHolops.count()).toBe(2, 'number of holops after deletion');
        expect(remainingHolops.first().getText()).toContain('UaSyA');
        expect(remainingHolops.last().getText()).toContain('DjAnGo');
    });
});
//# sourceMappingURL=dashboard.e2e-spec.js.map