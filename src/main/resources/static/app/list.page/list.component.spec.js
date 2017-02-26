"use strict";
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var list_component_js_1 = require("./list.component.js");
var updown_pipe_1 = require("./../commons/updown.pipe");
var holop_service_1 = require("../service/holop.service");
var holop_1 = require("../service/holop");
describe('ListComponent', function () {
    var сomponent;
    var fixture;
    var holops = [
        new holop_1.Holop(1, 'Holop', 'Master', '2016-10-10', '2019-15-15'),
        new holop_1.Holop(2, 'Holop Padavan', 'Master Yoda', '2016-10-10', '2019-15-15')
    ];
    var eventObject = {
        stopPropagation: function () { }
    };
    var routerStub = {
        navigate: function (url) {
            return url;
        }
    };
    // async beforeEach
    beforeEach(testing_1.async(function () {
        var holopServiceStub = {
            getAll: function () {
                return Observable_1.Observable.of(holops);
            },
            delete: function (id) {
                return Observable_1.Observable.of(id);
            }
        };
        testing_1.TestBed.configureTestingModule({
            declarations: [
                list_component_js_1.ListComponent,
                updown_pipe_1.UpDownPipe
            ],
            providers: [
                { provide: holop_service_1.HolopService, useValue: holopServiceStub },
                { provide: router_1.Router, useValue: routerStub }
            ]
        }).compileComponents();
    }));
    // synchronous beforeEach
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(list_component_js_1.ListComponent);
        сomponent = fixture.componentInstance;
    });
    it('should be initialized', function () {
        expect(сomponent).toBeTruthy('check if component initialized');
    });
    it('should show list with one holop', testing_1.async(function () {
        fixture.detectChanges(); // trigger initial data binding
        fixture.whenStable().then(function () {
            var debugElements = fixture.debugElement.queryAll(platform_browser_1.By.css('.holop'));
            expect(debugElements.length).toBe(2, 'number of rows after initialization');
            var elementOne = debugElements[0].nativeElement;
            expect(elementOne.textContent).toContain('HoLoP', 'check for first holop name');
            expect(elementOne.textContent).toContain('Mar 15, 2020', 'check for first holop date');
            var elementTwo = debugElements[1].nativeElement;
            expect(elementTwo.textContent).toContain('HoLoP PaDaVaN', 'check for second holop name');
            expect(elementTwo.textContent).toContain('Master Yoda', 'check for second holop date');
        });
    }));
    it('should delete first holop from the list', testing_1.fakeAsync(function () {
        fixture.detectChanges(); // trigger initial data binding
        var debugElements = fixture.debugElement.queryAll(platform_browser_1.By.css('.holop'));
        expect(debugElements.length).toBe(2, 'initial number of rows');
        var deleteButton = debugElements[0].query(platform_browser_1.By.css('button'));
        deleteButton.triggerEventHandler('click', eventObject);
        testing_1.tick();
        fixture.detectChanges(); // trigger re-rendering after delete
        debugElements = fixture.debugElement.queryAll(platform_browser_1.By.css('.holop'));
        expect(debugElements.length).toBe(1, 'number of rows after deletion');
        var elementTwo = debugElements[0].nativeElement;
        expect(elementTwo.textContent).toContain('HoLoP PaDaVaN', 'check holop for name');
    }));
    it('should navigate to "Add holop" page', testing_1.inject([router_1.Router], function (router) {
        fixture.detectChanges(); // trigger initial data binding
        var spy = spyOn(router, 'navigate');
        var addButton = fixture.debugElement.query(platform_browser_1.By.css('#addButton'));
        addButton.triggerEventHandler('click', null);
        var navigationArgs = spy.calls.first().args[0]; // Args passed to Router.navigate()
        expect(navigationArgs).toEqual(['/add'], 'parameter of "Router.navigate()"');
    }));
    it('should navigate to "Edit holop" page for second holop', testing_1.inject([router_1.Router], function (router) {
        fixture.detectChanges(); // trigger initial data binding
        var spy = spyOn(router, 'navigate');
        var secondHolopDebugEl = fixture.debugElement.queryAll(platform_browser_1.By.css('.holop'))[1];
        secondHolopDebugEl.triggerEventHandler('click', null);
        var navigationArgs = spy.calls.first().args[0]; // Args passed to Router.navigate()
        var selectedHolop = сomponent.holops[1];
        expect(navigationArgs).toEqual(['/edit', selectedHolop.id], 'parameter of "Router.navigate()" with id');
    }));
});
//# sourceMappingURL=list.component.spec.js.map