"use strict";
var protractor_1 = require("protractor");
describe('Details Page', function () {
    var nameInput = protractor_1.element(protractor_1.by.id('holopName'));
    beforeEach(function () {
        protractor_1.browser.get('/edit/1');
    });
    it('should be prepopulated with info for Holop with id = 1', function () {
        var idField = protractor_1.element(protractor_1.by.id('holopId'));
        expect(idField.getText()).toBe('1');
        expect(nameInput.getAttribute('value')).toBe('Uasya');
    });
    it('should save Holop with changed name', function () {
        nameInput.clear();
        nameInput.sendKeys('Petr');
        var saveButton = protractor_1.element(protractor_1.by.id('save'));
        saveButton.click();
        var holops = protractor_1.element.all(protractor_1.by.css('.holop'));
        expect(holops.count()).toBe(3);
        var changedHolop = holops.first();
        expect(changedHolop.getText()).toContain('PeTr');
    });
});
//# sourceMappingURL=edit.details.e2e-spec.js.map