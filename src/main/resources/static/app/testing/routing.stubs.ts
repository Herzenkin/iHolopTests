import { Component, Directive, Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'router-outlet',
  template: ''
})
export class RouterOutletStubComponent { }

@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigateTo: any = null;

  onClick() {
    this.navigateTo = this.linkParams;
  }
}

@Injectable()
export class ActivateRouteStub {

  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  private _testParams: {};
  get testParams() {
    return this._testParams;
  }
  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }
}
