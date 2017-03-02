// import { TestBed, inject } from '@angular/core/testing';
// import { FakeBackend } from 'ngx-http-test';
//
// import { HolopService } from "./holop.service";
// import { Holop } from "./holop";
//
// describe('HolopService', () => {
//
//   let service: HolopService;
//   let backend: FakeBackend;
//
//   const serviceUrl = '/rest/holops';
//
//   let stubbedHolops: Holop[] = [
//     new Holop(1, 'Holop', 'Master', '2016-10-10', '2017-10-10'),
//     new Holop(1, 'Padavan', 'Master Jedi', '2116-10-10', '2117-10-10')
//   ];
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         HolopService,
//         FakeBackend.getProviders()
//       ]
//     });
//   });
//
//   beforeEach(inject([HolopService, FakeBackend], (holopService: HolopService, fakeBackend: FakeBackend) => {
//     service = holopService;
//     backend = fakeBackend;
//   }));
//
//   afterEach(() => {
//     backend.verifyNoPendingRequests();
//   });
//
//   it('should return all Holops', () => {
//     backend
//         .expectGet(serviceUrl)
//         .respond(stubbedHolops);
//
//     service.getAll().subscribe((holops: Holop[]) => {
//       expect(holops.length).toBe(stubbedHolops.length, 'size should be equals with stubbed array');
//       expect(holops[0].holopName).toBe(stubbedHolops[0].holopName, 'first objects\' names to be equal');
//       expect(holops[1].holopName).toBe(stubbedHolops[1].holopName, 'second objects\' names to be equal');
//     });
//   });
// });