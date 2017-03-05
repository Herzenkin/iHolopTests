"use strict";
var protractor_1 = require("protractor");
describe('Details Page', function () {
    var holops = protractor_1.element.all(protractor_1.by.css('.holop'));
    beforeEach(function () {
        protractor_1.browser.get('/add');
    });
    it('should show correct headers', function () {
        var mainHeader = protractor_1.element(protractor_1.by.css('h1'));
        expect(mainHeader.getText()).toContain('iHolop');
        var pageHeader = protractor_1.element(protractor_1.by.css('h4'));
        expect(pageHeader.getText()).toBe('Holop Details');
    });
    it('should navigate to Dashboard after clicking "Back" button', function () {
        var backButton = protractor_1.element(protractor_1.by.id('back'));
        backButton.click();
        expect(holops.count()).toBe(2);
    });
    it('should populate form for new Holop and submit', function () {
        var nameInput = protractor_1.element(protractor_1.by.id('holopName'));
        nameInput.sendKeys('Padavan');
        var masterInput = protractor_1.element(protractor_1.by.id('master'));
        masterInput.sendKeys('Master Yoda');
        var dateFromInput = protractor_1.element(protractor_1.by.id('dateFrom'));
        dateFromInput.sendKeys('2017-02-02');
        var dateToInput = protractor_1.element(protractor_1.by.id('dateTo'));
        dateToInput.sendKeys('2129-12-12');
        var saveButton = protractor_1.element(protractor_1.by.id('save'));
        saveButton.click();
        expect(holops.count()).toBe(3);
        var addedHolop = holops.last();
        expect(addedHolop.getText()).toContain('PaDaVaN');
    });
});
//# sourceMappingURL=add.details.e2e-spec.js.map