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
var router_1 = require("@angular/router");
var holop_service_1 = require("./holop.service");
var common_1 = require("@angular/common");
var DetailsComponent = (function () {
    function DetailsComponent(activeRoute, holopService, location) {
        this.activeRoute = activeRoute;
        this.holopService = holopService;
        this.location = location;
        this.holop = new holop_1.Holop();
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.forEach(function (params) {
            var id = +params['id'];
            if (isNaN(id)) {
                return;
            }
            _this.holopService.get(id)
                .subscribe(function (data) {
                return _this.holop = data;
            });
        });
    };
    DetailsComponent.prototype.save = function () {
        var _this = this;
        this.holopService.save(this.holop)
            .subscribe(function (data) { return _this.location.back(); });
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    core_1.Component({
        selector: 'holop-details',
        templateUrl: './templates/details.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        holop_service_1.HolopService,
        common_1.Location])
], DetailsComponent);
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map