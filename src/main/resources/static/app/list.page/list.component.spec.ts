import { async, fakeAsync, tick, inject, TestBed, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ListComponent } from './list.component.js';
import { UpDownPipe } from './../commons/updown.pipe';
import { HolopService } from '../service/holop.service';
import { Holop } from '../service/holop';

describe('ListComponent', () => {

  let сomponent: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let holops: Holop[] = [
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

  let eventObject = {
    stopPropagation() {}
  };

  let routerStub = {
    navigate(url: string): string {
      return url;
    }
  };

  // async beforeEach
  beforeEach(async(() => {
    let holopServiceStub = {
      getAll(): Observable<Holop[]> {
        return Observable.of(holops);
      },

      delete(id: number): Observable<number> {
        return Observable.of(id);
      }
    };

    TestBed.configureTestingModule({
      declarations: [
        ListComponent,
        UpDownPipe
      ],
      providers: [
        { provide: HolopService, useValue: holopServiceStub },
        { provide: Router, useValue: routerStub }
      ]
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    сomponent = fixture.componentInstance;
  });

  it('should be initialized', () => {
    expect(сomponent).toBeTruthy('check if component initialized');
  });

  it('should show list with one holop', async(() => {
    fixture.detectChanges(); // trigger initial data binding

    fixture.whenStable().then(() => {
      let debugElements = fixture.debugElement.queryAll(By.css('.holop'));
      expect(debugElements.length).toBe(2, 'number of rows after initialization');

      let elementOne = debugElements[0].nativeElement;
      expect(elementOne.textContent).toContain('HoLoP', 'check for first holop name');
      expect(elementOne.textContent).toContain('Mar 15, 2020', 'check for first holop date');

      let elementTwo = debugElements[1].nativeElement;
      expect(elementTwo.textContent).toContain('HoLoP PaDaVaN', 'check for second holop name');
      expect(elementTwo.textContent).toContain('Master Yoda', 'check for second holop date');
    });
  }));

  it('should delete first holop from the list', fakeAsync(() => {
    fixture.detectChanges(); // trigger initial data binding

    let debugElements = fixture.debugElement.queryAll(By.css('.holop'));
    expect(debugElements.length).toBe(2, 'initial number of rows');

    let deleteButton = debugElements[0].query(By.css('button'));
    deleteButton.triggerEventHandler('click', eventObject);
    tick();

    fixture.detectChanges(); // trigger re-rendering after delete

    debugElements = fixture.debugElement.queryAll(By.css('.holop'));
    expect(debugElements.length).toBe(1, 'number of rows after deletion');

    let elementTwo = debugElements[0].nativeElement;
    expect(elementTwo.textContent).toContain('HoLoP PaDaVaN', 'check holop for name');
  }));

  it('should navigate to "Add holop" page', inject([Router], (router: Router) => {
    fixture.detectChanges(); // trigger initial data binding

    const spy = spyOn(router, 'navigate');

    let addButton = fixture.debugElement.query(By.css('#addButton'));
    addButton.triggerEventHandler('click', null);

    const navigationArgs = spy.calls.first().args[0]; // Args passed to Router.navigate()

    expect(navigationArgs).toEqual(['/add'], 'parameter of "Router.navigate()"');
  }));

  it('should navigate to "Edit holop" page for second holop', inject([Router], (router: Router) => {
    fixture.detectChanges(); // trigger initial data binding

    const spy = spyOn(router, 'navigate');

    let secondHolopDebugEl = fixture.debugElement.queryAll(By.css('.holop'))[1];
    secondHolopDebugEl.triggerEventHandler('click', null);

    const navigationArgs = spy.calls.first().args[0]; // Args passed to Router.navigate()
    const selectedHolop: Holop = сomponent.holops[1];

    expect(navigationArgs).toEqual(['/edit', selectedHolop.id], 'parameter of "Router.navigate()" with id');
  }));
});
