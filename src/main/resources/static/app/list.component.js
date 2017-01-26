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
var holop_1 = require("./holop");
var holop_service_1 = require("./holop.service");
var router_1 = require("@angular/router");
var ListComponent = (function () {
    function ListComponent(holopService, router) {
        this.holopService = holopService;
        this.router = router;
        this.holops = [];
        this.singleHolop = new holop_1.Holop();
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.holopService.getAll()
            .subscribe(function (data) { return _this.holops = data; });
    };
    ListComponent.prototype.save = function (holop) {
        this.holops.push(holop);
    };
    ListComponent.prototype.edit = function (holop) {
        this.router.navigate(['/edit', holop.id]);
    };
    ListComponent.prototype.delete = function (holop) {
        var _this = this;
        this.holopService.delete(holop.id)
            .subscribe(function (data) { return _this.holops = _this.holops.filter(function (h) { return h !== holop; }); });
    };
    ListComponent.prototype.add = function () {
        this.router.navigate(['/add']);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: 'holops',
        templateUrl: './../templates/list.component.html'
    }),
    __metadata("design:paramtypes", [holop_service_1.HolopService,
        router_1.Router])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map