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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var HolopService = (function () {
    function HolopService(http) {
        this.http = http;
        this.url = '/rest/holops';
    }
    HolopService.prototype.getAll = function () {
        return this.http.get(this.url)
            .map(function (resp) { return resp.json(); });
    };
    HolopService.prototype.get = function (id) {
        return this.http.get(this.url + '/' + id)
            .map(function (resp) { return resp.json(); });
    };
    HolopService.prototype.save = function (holop) {
        return this.http.post(this.url + '/' + holop.id, holop)
            .map(function (resp) { return resp.json(); });
    };
    HolopService.prototype.delete = function (id) {
        return this.http.delete(this.url + '/' + id)
            .map(function (resp) { return resp.json(); });
    };
    return HolopService;
}());
HolopService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HolopService);
exports.HolopService = HolopService;
//# sourceMappingURL=holop.service.js.map