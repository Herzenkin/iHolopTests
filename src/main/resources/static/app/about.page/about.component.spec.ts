import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {

  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
  });

  it('should to be initialized', () => {
    expect(component).toBeTruthy('component initialization');
  });

  it('should inner porperty "description" to be pre-populated', () => {
    expect(component.description).toContain('demonstration');
  });

  it('should render info on About Page', () => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      let infoEl: DebugElement = fixture.debugElement.query(By.css('article'));

      expect(infoEl.nativeElement.textContent).toContain('demonstration');
    })
  });
});
