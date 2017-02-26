import { async, fakeAsync, tick, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { } from 'jasmine';

import { AppComponent } from './app.component';
import { RouterOutletStubComponent, RouterLinkStubDirective } from './testing/routing.stubs';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture : ComponentFixture<AppComponent>;
  let debugEl : DebugElement;
  let linkDebugEls: DebugElement[];
  let links: RouterLinkStubDirective[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      debugEl = fixture.debugElement;
    })
  }));

  beforeEach(() => {
    // trigger initial data binding
    fixture.detectChanges();
    // find DebugElements with an attached RouterLinkStubDirective
    linkDebugEls = debugEl.queryAll(By.directive(RouterLinkStubDirective));
    // get the attached link directive instances using the DebugElement injectors
    links = linkDebugEls.map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('should be initialized', () => {
    expect(component).toBeTruthy('component initialization');
  });

  it('should show routing links in menu', () => {
    expect(links.length).toBe(2, 'should have 2 links');
    expect(links[0].linkParams).toBe('/', '1st should redirect to "Dashboard" page');
    expect(links[1].linkParams).toBe('/add', '2nd should redirect to "Add Holop" page');
  });

  it('should redirect to "Add Holop" page', () => {
    let addLink = links[1];
    let addLinkDebugEl = linkDebugEls[1];

    expect(addLink.navigateTo).toBeNull('link shoud not have navigated yet');

    addLinkDebugEl.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(addLink.navigateTo).toBe('/add', 'link should have clicked');
  });
});
