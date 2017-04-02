"use strict";
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var routing_stubs_1 = require("./testing/routing.stubs");
describe('AppComponent', function () {
    var component;
    var fixture;
    var debugEl;
    var linkDebugEls;
    var links;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent,
                routing_stubs_1.RouterLinkStubDirective,
                routing_stubs_1.RouterOutletStubComponent
            ]
        }).compileComponents().then(function () {
            fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
            component = fixture.componentInstance;
            debugEl = fixture.debugElement;
        });
    }));
    beforeEach(function () {
        // trigger initial data binding
        fixture.detectChanges();
        // find DebugElements with an attached RouterLinkStubDirective
        linkDebugEls = debugEl.queryAll(platform_browser_1.By.directive(routing_stubs_1.RouterLinkStubDirective));
        // get the attached link directive instances using the DebugElement injectors
        links = linkDebugEls.map(function (de) { return de.injector.get(routing_stubs_1.RouterLinkStubDirective); });
    });
    it('should be initialized', function () {
        expect(component).toBeTruthy('component initialization');
    });
    it('should show routing links in menu', function () {
        expect(links.length).toBe(3, 'should have 2 links');
        expect(links[0].linkParams).toBe('/', '1st should redirect to "Dashboard" page');
        expect(links[1].linkParams).toBe('/add', '2nd should redirect to "Add Holop" page');
        expect(links[2].linkParams).toBe('/about', '3nd should redirect to "About" page');
    });
    it('should redirect to "Add Holop" page', function () {
        var addLink = links[1];
        var addLinkDebugEl = linkDebugEls[1];
        expect(addLink.navigateTo).toBeNull('link shoud not have navigated yet');
        addLinkDebugEl.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(addLink.navigateTo).toBe('/add', 'link should have clicked');
    });
});
//# sourceMappingURL=app.component.spec.js.map