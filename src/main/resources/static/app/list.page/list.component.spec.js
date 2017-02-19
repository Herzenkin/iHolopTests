"use strict";
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var list_component_js_1 = require("./list.component.js");
var updown_pipe_1 = require("./../commons/updown.pipe");
var holop_service_1 = require("../service/holop.service");
describe('ListComponent', function () {
    var сomponent;
    var fixture;
    var holops = [
        {
            id: 1,
            holopName: 'Holop',
            master: 'Master',
            dateFrom: '2016-10-10',
            dateTo: '2019-15-15'
        },
        {
            id: 2,
            holopName: 'Holop Padavan',
            master: 'Master Yoda',
            dateFrom: '2016-10-10',
            dateTo: '2019-15-15'
        }
    ];
    var routerStub = {};
    beforeEach(testing_1.async(function () {
        var holopServiceStub = {
            getAll: function () {
                return Observable_1.Observable.of(holops);
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
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(list_component_js_1.ListComponent);
        сomponent = fixture.componentInstance;
    });
    it('should be initialized', function () {
        expect(сomponent).toBeTruthy();
    });
    it('should show list with one holop', testing_1.async(function () {
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            var debugElements = fixture.debugElement.queryAll(platform_browser_1.By.css('tr'));
            expect(debugElements.length).toBe(3);
            var elementOne = debugElements[1].nativeElement;
            expect(elementOne.textContent).toContain('HoLoP');
            expect(elementOne.textContent).toContain('Mar 15, 2020');
            var elementTwo = debugElements[2].nativeElement;
            expect(elementTwo.textContent).toContain('HoLoP PaDaVaN');
            expect(elementTwo.textContent).toContain('Master Yoda');
        });
    }));
});
//# sourceMappingURL=list.component.spec.js.map