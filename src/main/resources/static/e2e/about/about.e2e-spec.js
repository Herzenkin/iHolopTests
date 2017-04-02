"use strict";
var protractor_1 = require("protractor");
describe('About Page', function () {
    beforeEach(function () {
        protractor_1.browser.get('/about');
    });
    it('should content correct info', function () {
        var description = protractor_1.element(protractor_1.by.css('article'));
        expect(description.getText()).toContain('demonstration');
    });
});
//# sourceMappingURL=about.e2e-spec.js.map