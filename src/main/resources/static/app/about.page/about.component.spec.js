"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var about_component_1 = require("./about.component");
describe('AboutComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                about_component_1.AboutComponent
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(about_component_1.AboutComponent);
        component = fixture.componentInstance;
    });
    it('should to be initialized', function () {
        expect(component).toBeTruthy('component initialization');
    });
    it('should inner porperty "description" to be pre-populated', function () {
        expect(component.description).toContain('demonstration');
    });
    it('should render info on About Page', function () {
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            var infoEl = fixture.debugElement.query(platform_browser_1.By.css('article'));
            expect(infoEl.nativeElement.textContent).toContain('demonstration');
        });
    });
});
//# sourceMappingURL=about.component.spec.js.map