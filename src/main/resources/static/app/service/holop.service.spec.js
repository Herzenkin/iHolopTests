"use strict";
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/http/testing");
var http_1 = require("@angular/http");
require("rxjs/add/observable/of");
var holop_service_1 = require("./holop.service");
var holop_1 = require("./holop");
describe('HolopService', function () {
    var stubbedHolops = [
        new holop_1.Holop(1, 'Holop', 'Master', '2016-10-10', '2017-10-10'),
        new holop_1.Holop(1, 'Padavan', 'Master Jedi', '2116-10-10', '2117-10-10')
    ];
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                holop_service_1.HolopService,
                testing_2.MockBackend,
                http_1.BaseRequestOptions,
                {
                    provide: http_1.Http,
                    deps: [testing_2.MockBackend, http_1.BaseRequestOptions],
                    useFactory: function (backend, options) {
                        return new http_1.Http(backend, options);
                    }
                }
            ],
            imports: [http_1.HttpModule]
        });
    });
    it('should return all Holops', testing_1.inject([holop_service_1.HolopService, testing_2.MockBackend], function (holopService, mockBackend) {
        mockBackend.connections.subscribe(function (connection) {
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                body: JSON.stringify(stubbedHolops)
            })));
        });
        holopService.getAll().subscribe(function (holops) {
            expect(holops.length).toBe(stubbedHolops.length, 'size should be equals with stubbed array');
            expect(holops[0].holopName).toBe(stubbedHolops[0].holopName, 'first objects\' names to be equal');
            expect(holops[1].holopName).toBe(stubbedHolops[1].holopName, 'second objects\' names to be equal');
        });
    }));
    it('should return Holop with id = 2', testing_1.inject([holop_service_1.HolopService, testing_2.MockBackend], function (holopService, mockBackend) {
        mockBackend.connections.subscribe(function (connection) {
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                body: JSON.stringify(stubbedHolops[1])
            })));
        });
        holopService.get(2).subscribe(function (holop) {
            expect(holop.holopName).toBe(stubbedHolops[1].holopName, 'holop names to be equal');
            expect(holop.master).toBe(stubbedHolops[1].master, 'holop masters to be equal');
            expect(holop.dateFrom).toBe(stubbedHolops[1].dateFrom, 'dateFrom to be equal');
            expect(holop.dateTo).toBe(stubbedHolops[1].dateTo, 'dateTo to be equal');
        });
    }));
    it('should save new Holop', testing_1.inject([holop_service_1.HolopService, testing_2.MockBackend], function (holopService, mockBackend) {
        var storedHolop = new holop_1.Holop(3, 'Dopa', 'Gepa', '2007-10-02', '2016-05-30');
        mockBackend.connections.subscribe(function (connection) {
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                body: JSON.stringify(storedHolop)
            })));
        });
        var newHolop = new holop_1.Holop(null, 'Dopa', 'Gepa', '2007-10-02', '2016-05-30');
        holopService.save(newHolop).subscribe(function (holop) {
            expect(holop.id).toBe(storedHolop.id, 'holop ids to be equal');
            expect(holop.holopName).toBe(newHolop.holopName, 'holop names to be equal');
            expect(holop.master).toBe(newHolop.master, 'holop masters to be equal');
            expect(holop.dateFrom).toBe(newHolop.dateFrom, 'dateFrom to be equal');
            expect(holop.dateTo).toBe(newHolop.dateTo, 'dateTo to be equal');
        });
    }));
    it('should delete Holop with id = 1', testing_1.inject([holop_service_1.HolopService, testing_2.MockBackend], function (holopService, mockBackend) {
        mockBackend.connections.subscribe(function (connection) {
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                body: JSON.stringify(1)
            })));
        });
        holopService.delete(stubbedHolops[0].id).subscribe(function (deletedHolopId) {
            expect(deletedHolopId).toBe(stubbedHolops[0].id, 'id of deleted holop');
        });
    }));
});
//# sourceMappingURL=holop.service.spec.js.map