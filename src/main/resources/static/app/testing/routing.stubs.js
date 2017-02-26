"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var RouterOutletStubComponent = (function () {
    function RouterOutletStubComponent() {
    }
    return RouterOutletStubComponent;
}());
RouterOutletStubComponent = __decorate([
    core_1.Component({
        selector: 'router-outlet',
        template: ''
    })
], RouterOutletStubComponent);
exports.RouterOutletStubComponent = RouterOutletStubComponent;
var RouterLinkStubDirective = (function () {
    function RouterLinkStubDirective() {
        this.navigateTo = null;
    }
    RouterLinkStubDirective.prototype.onClick = function () {
        this.navigateTo = this.linkParams;
    };
    return RouterLinkStubDirective;
}());
__decorate([
    core_1.Input('routerLink'),
    __metadata("design:type", Object)
], RouterLinkStubDirective.prototype, "linkParams", void 0);
RouterLinkStubDirective = __decorate([
    core_1.Directive({
        selector: '[routerLink]',
        host: {
            '(click)': 'onClick()'
        }
    })
], RouterLinkStubDirective);
exports.RouterLinkStubDirective = RouterLinkStubDirective;
var ActivateRouteStub = (function () {
    function ActivateRouteStub() {
        this.subject = new BehaviorSubject_1.BehaviorSubject(this.testParams);
        this.params = this.subject.asObservable();
    }
    Object.defineProperty(ActivateRouteStub.prototype, "testParams", {
        get: function () {
            return this._testParams;
        },
        set: function (params) {
            this._testParams = params;
            this.subject.next(params);
        },
        enumerable: true,
        configurable: true
    });
    return ActivateRouteStub;
}());
ActivateRouteStub = __decorate([
    core_1.Injectable()
], ActivateRouteStub);
exports.ActivateRouteStub = ActivateRouteStub;
//# sourceMappingURL=routing.stubs.js.map