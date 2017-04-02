"use strict";
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var details_component_1 = require("./details.component");
var holop_service_1 = require("../service/holop.service");
var holop_1 = require("../service/holop");
var routing_stubs_1 = require("../testing/routing.stubs");
describe('DetailsComponent', function () {
    var component;
    var fixture;
    var debugEl;
    var activatedRoute;
    var holopService;
    var router;
    var stubbedHolop = new holop_1.Holop(1, 'Holop', 'Master', '2016-10-10', '2016-11-11');
    // async beforeEach
    beforeEach(testing_1.async(function () {
        var holopServiceStub = {
            get: function (id) {
                if (id === stubbedHolop.id) {
                    return Observable_1.Observable.of(stubbedHolop);
                }
                else {
                    return Observable_1.Observable.of({});
                }
            },
            save: function (savingHolop) {
                return Observable_1.Observable.of(savingHolop);
            }
        };
        var routerStub = {
            navigate: function (url) {
                return url;
            }
        };
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule],
            declarations: [details_component_1.DetailsComponent],
            providers: [
                { provide: holop_service_1.HolopService, useValue: holopServiceStub },
                { provide: router_1.ActivatedRoute, useClass: routing_stubs_1.ActivateRouteStub },
                { provide: router_1.Router, useValue: routerStub }
            ]
        }).compileComponents();
    }));
    // synchronous beforeEach
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(details_component_1.DetailsComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        activatedRoute = debugEl.injector.get(router_1.ActivatedRoute);
        holopService = debugEl.injector.get(holop_service_1.HolopService);
        router = debugEl.injector.get(router_1.Router);
    });
    it('should be initialized', function () {
        expect(component).toBeTruthy('component initialization');
    });
    it('should show empty form for adding new holop', testing_1.async(function () {
        activatedRoute.testParams = { 'id': null };
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            fixture.detectChanges();
            var idField = debugEl.query(platform_browser_1.By.css('#holopId'));
            expect(idField).toBeNull('non-existing id');
            var nameInput = debugEl.query(platform_browser_1.By.css('#holopName')).nativeElement;
            expect(nameInput.textContent).toBeFalsy('form is empty');
        });
    }));
    it('should save new holop and redirect to List page', testing_1.async(function () {
        fixture.detectChanges();
        var spyHolopService = spyOn(holopService, 'save').and.callThrough();
        var spyRouter = spyOn(router, 'navigate');
        var nameInput = debugEl.query(platform_browser_1.By.css('#holopName')).nativeElement;
        nameInput.value = 'Padavan';
        nameInput.dispatchEvent(new Event('input'));
        var masterInput = debugEl.query(platform_browser_1.By.css('#master')).nativeElement;
        masterInput.value = 'Yoda';
        masterInput.dispatchEvent(new Event('input'));
        var dateFromInput = debugEl.query(platform_browser_1.By.css('#dateFrom')).nativeElement;
        dateFromInput.value = '2016-10-10';
        dateFromInput.dispatchEvent(new Event('input'));
        var dateToInput = debugEl.query(platform_browser_1.By.css('#dateTo')).nativeElement;
        dateToInput.value = '2016-11-11';
        dateToInput.dispatchEvent(new Event('input'));
        var saveButton = debugEl.query(platform_browser_1.By.css('#save')).nativeElement;
        saveButton.click();
        fixture.whenStable().then(function () {
            var savingHolop = spyHolopService.calls.first().args[0];
            expect(savingHolop.id).toBeFalsy('new holop doesn\'t have id');
            expect(savingHolop.holopName).toBe('Padavan', 'saving holop\'s name');
            expect(savingHolop.master).toBe('Yoda', 'saving holop\'s master');
            expect(savingHolop.dateFrom).toBe('2016-10-10', 'saving holop\'s dateFrom');
            expect(savingHolop.dateTo).toBe('2016-11-11', 'saving holop\'s dateFrom');
            expect(router.navigate).toHaveBeenCalled();
            var navigationArgs = spyRouter.calls.first().args[0]; // Args passed to Router.navigate()
            expect(navigationArgs).toEqual(['/'], 'parameter of "Router.navigate()"');
        });
    }));
    it('should show details form for existing holop', testing_1.async(function () {
        activatedRoute.testParams = { 'id': 1 };
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            var idField = debugEl.query(platform_browser_1.By.css('#holopId')).nativeElement;
            expect(idField.textContent).toBe('1', 'holop\'s id');
            var nameInput = debugEl.query(platform_browser_1.By.css('#holopName')).nativeElement;
            expect(nameInput.value).toBe(stubbedHolop.holopName, 'holop\'s name');
        });
    }));
    it('should show empty details form for non-numerical id', testing_1.async(function () {
        activatedRoute.testParams = { 'id': 'empty' };
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            fixture.detectChanges();
            var idField = debugEl.query(platform_browser_1.By.css('#holopId'));
            expect(idField).toBeNull('non-existing id');
            var nameInput = debugEl.query(platform_browser_1.By.css('#holopName')).nativeElement;
            expect(nameInput.textContent).toBeFalsy('form is empty');
        });
    }));
    it('should redirect back to list component', function () {
        fixture.detectChanges();
        var spyRouter = spyOn(router, 'navigate');
        var backButton = debugEl.query(platform_browser_1.By.css('#back')).nativeElement;
        backButton.click();
        expect(router.navigate).toHaveBeenCalled();
        var navigationArgs = spyRouter.calls.first().args[0]; // Args passed to Router.navigate()
        expect(navigationArgs).toEqual(['/'], 'parameter of "Router.navigate()"');
    });
});
//# sourceMappingURL=details.component.spec.js.map