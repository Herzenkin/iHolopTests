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
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var details_component_1 = require("./details.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var holop_service_1 = require("./holop.service");
var list_component_1 = require("./list.component");
var error_component_1 = require("./error.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            // InMemoryWebApiModule.forRoot(InMemoryService),
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    component: list_component_1.ListComponent
                },
                {
                    path: 'add',
                    component: details_component_1.DetailsComponent
                },
                {
                    path: 'edit/:id',
                    component: details_component_1.DetailsComponent
                },
                {
                    path: '**',
                    component: error_component_1.ErrorComponent
                }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            details_component_1.DetailsComponent,
            list_component_1.ListComponent,
            error_component_1.ErrorComponent
        ],
        providers: [
            holop_service_1.HolopService
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
