import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { DetailsComponent } from './details.component';
import { HolopService } from '../service/holop.service';
import { Holop } from '../service/holop';
import { ActivateRouteStub } from '../testing/routing.stubs';

describe('DetailsComponent', () => {

  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let debugEl: DebugElement;
  let activatedRoute: ActivateRouteStub;
  let holopService: HolopService;
  let router: Router;

  const stubbedHolop: Holop = new Holop(1, 'Holop', 'Master', '2016-10-10', '2016-11-11');

  // async beforeEach
  beforeEach(async(() => {
    let holopServiceStub = {
      get(id: number): Observable<Holop> {
        if (id === stubbedHolop.id) {
          return Observable.of(stubbedHolop);
        } else {
          return Observable.of({});
        }
      },
      save(savingHolop: Holop): Observable<Holop> {
        return Observable.of(savingHolop);
      }
    };
    let routerStub = {
      navigate(url: string): string {
        return url;
      }
    };

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [DetailsComponent],
      providers: [
        { provide: HolopService, useValue: holopServiceStub },
        { provide: ActivatedRoute, useClass: ActivateRouteStub },
        { provide: Router, useValue: routerStub }
      ]
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    activatedRoute = debugEl.injector.get(ActivatedRoute);
    holopService = debugEl.injector.get(HolopService);
    router = debugEl.injector.get(Router);
  });

  it('should be initialized', () => {
    expect(component).toBeTruthy('component initialization');
  });

  it('should show empty form for adding new holop', async(() => {
    activatedRoute.testParams = { 'id': null };
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let idField = debugEl.query(By.css('#holopId'));
      expect(idField).toBeNull('non-existing id');

      let nameInput = debugEl.query(By.css('#holopName')).nativeElement;
      expect(nameInput.textContent).toBeFalsy('form is empty');
    });
  }));

  it('should save new holop and redirect to List page', async(() => {
    fixture.detectChanges();

    let spyHolopService = spyOn(holopService, 'save').and.callThrough();
    let spyRouter = spyOn(router, 'navigate');

    let nameInput = debugEl.query(By.css('#holopName')).nativeElement;
    nameInput.value = 'Padavan';
    nameInput.dispatchEvent(new Event('input'));

    let masterInput = debugEl.query(By.css('#master')).nativeElement;
    masterInput.value = 'Yoda';
    masterInput.dispatchEvent(new Event('input'));

    let dateFromInput = debugEl.query(By.css('#dateFrom')).nativeElement;
    dateFromInput.value = '2016-10-10';
    dateFromInput.dispatchEvent(new Event('input'));

    let dateToInput = debugEl.query(By.css('#dateTo')).nativeElement;
    dateToInput.value = '2016-11-11';
    dateToInput.dispatchEvent(new Event('input'));

    let saveButton = debugEl.query(By.css('#save')).nativeElement;
    saveButton.click();

    fixture.whenStable().then(() => {
      const savingHolop = spyHolopService.calls.first().args[0];
      expect(savingHolop.id).toBeFalsy('new holop doesn\'t have id');
      expect(savingHolop.holopName).toBe('Padavan', 'saving holop\'s name');
      expect(savingHolop.master).toBe('Yoda', 'saving holop\'s master');
      expect(savingHolop.dateFrom).toBe('2016-10-10', 'saving holop\'s dateFrom');
      expect(savingHolop.dateTo).toBe('2016-11-11', 'saving holop\'s dateFrom');

      expect(router.navigate).toHaveBeenCalled();
      const navigationArgs = spyRouter.calls.first().args[0]; // Args passed to Router.navigate()
      expect(navigationArgs).toEqual(['/'], 'parameter of "Router.navigate()"');
    })
  }));

  it('should show details form for existing holop', async(() => {
    activatedRoute.testParams = { 'id': 1 };

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      let idField = debugEl.query(By.css('#holopId')).nativeElement;
      expect(idField.textContent).toBe('1', 'holop\'s id');

      let nameInput = debugEl.query(By.css('#holopName')).nativeElement;
      expect(nameInput.value).toBe(stubbedHolop.holopName, 'holop\'s name');
    });
  }));

  it('should show empty details form for non-numerical id', async(() => {
    activatedRoute.testParams = { 'id': 'empty' };
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let idField = debugEl.query(By.css('#holopId'));
      expect(idField).toBeNull('non-existing id');

      let nameInput = debugEl.query(By.css('#holopName')).nativeElement;
      expect(nameInput.textContent).toBeFalsy('form is empty');
    });
  }));

  it('should redirect back to list component', () => {
    fixture.detectChanges();

    let spyRouter = spyOn(router, 'navigate');

    let backButton = debugEl.query(By.css('#back')).nativeElement;
    backButton.click();

    expect(router.navigate).toHaveBeenCalled();
    const navigationArgs = spyRouter.calls.first().args[0]; // Args passed to Router.navigate()
    expect(navigationArgs).toEqual(['/'], 'parameter of "Router.navigate()"');
  });
});
