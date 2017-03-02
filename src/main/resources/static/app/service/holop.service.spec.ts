import { inject, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from "@angular/http";
import 'rxjs/add/observable/of';

import { HolopService } from './holop.service';
import { Holop } from "./holop";

describe('HolopService', function () {

  let stubbedHolops: Holop[] = [
    new Holop(1, 'Holop', 'Master', '2016-10-10', '2017-10-10'),
    new Holop(1, 'Padavan', 'Master Jedi', '2116-10-10', '2117-10-10')
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HolopService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
            return new Http(backend, options)
          }
        }
      ],
      imports: [HttpModule]
    });
  });

  it('should return all Holops', inject([HolopService, MockBackend], (holopService: HolopService, mockBackend: MockBackend) => {

    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(stubbedHolops)
      })));
    });

    holopService.getAll().subscribe((holops) => {
      expect(holops.length).toBe(stubbedHolops.length, 'size should be equals with stubbed array');
      expect(holops[0].holopName).toBe(stubbedHolops[0].holopName, 'first objects\' names to be equal');
      expect(holops[1].holopName).toBe(stubbedHolops[1].holopName, 'second objects\' names to be equal');
    });
  }));

  it('should return Holop with id = 2', inject([HolopService, MockBackend], (holopService: HolopService, mockBackend: MockBackend) => {

    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(stubbedHolops[1])
      })));
    });

    holopService.get(2).subscribe((holop) => {
      expect(holop.holopName).toBe(stubbedHolops[1].holopName, 'holop names to be equal');
      expect(holop.master).toBe(stubbedHolops[1].master, 'holop masters to be equal');
      expect(holop.dateFrom).toBe(stubbedHolops[1].dateFrom, 'dateFrom to be equal');
      expect(holop.dateTo).toBe(stubbedHolops[1].dateTo, 'dateTo to be equal');
    });
  }));

  it('should save new Holop', inject([HolopService, MockBackend], (holopService: HolopService, mockBackend: MockBackend) => {

    let storedHolop: Holop = new Holop(3, 'Dopa', 'Gepa', '2007-10-02', '2016-05-30');

    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(storedHolop)
      })));
    });

    let newHolop: Holop = new Holop(null, 'Dopa', 'Gepa', '2007-10-02', '2016-05-30');

    holopService.save(newHolop).subscribe((holop) => {
      expect(holop.id).toBe(storedHolop.id, 'holop ids to be equal');
      expect(holop.holopName).toBe(newHolop.holopName, 'holop names to be equal');
      expect(holop.master).toBe(newHolop.master, 'holop masters to be equal');
      expect(holop.dateFrom).toBe(newHolop.dateFrom, 'dateFrom to be equal');
      expect(holop.dateTo).toBe(newHolop.dateTo, 'dateTo to be equal');
    });
  }));

  it('should delete Holop with id = 1', inject([HolopService, MockBackend], (holopService: HolopService, mockBackend: MockBackend) => {

    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(1)
      })));
    });

    holopService.delete(stubbedHolops[0].id).subscribe((deletedHolopId) => {
      expect(deletedHolopId).toBe(stubbedHolops[0].id, 'id of deleted holop');
    });
  }));
});
