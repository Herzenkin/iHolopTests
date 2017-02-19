import { async, TestBed, ComponentFixture } from '@angular/core/testing';
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

  let routerStub = {};

  beforeEach(async(() => {
    let holopServiceStub = {
      getAll(): Observable<Holop[]> {
        return Observable.of(holops);
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

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    сomponent = fixture.componentInstance;
  });

  it('should be initialized', () => {
    expect(сomponent).toBeTruthy();
  });

  it('should show list with one holop', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      let debugElements = fixture.debugElement.queryAll(By.css('tr'));
      expect(debugElements.length).toBe(3);

      let elementOne = debugElements[1].nativeElement;
      expect(elementOne.textContent).toContain('HoLoP');
      expect(elementOne.textContent).toContain('Mar 15, 2020');

      let elementTwo = debugElements[2].nativeElement;
      expect(elementTwo.textContent).toContain('HoLoP PaDaVaN');
      expect(elementTwo.textContent).toContain('Master Yoda');
    });
  }));
});
