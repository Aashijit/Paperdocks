webpackJsonp([0],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dashboardPageNames = "home";
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/aashijit/Documents/Paperdocks/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon slot="start" name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="font-poirot fw-800">\n      Paperdocks\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <img src="../../assets/imgs/search.svg" style="height: 85% !important" />\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n  <div>\n    <ion-segment [(ngModel)]="dashboardPageNames">\n      <ion-segment-button value="home">\n        Home\n      </ion-segment-button>\n      <ion-segment-button value="cards">\n        Cards\n      </ion-segment-button>\n      <ion-segment-button value="posters">\n        Posters\n      </ion-segment-button>\n      <ion-segment-button value="contactus">\n        Contact Us\n      </ion-segment-button>\n      <ion-segment-button value="blog">\n        Blog\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n<ion-content>\n\n\n  <div [ngSwitch]="dashboardPageNames">\n    <ion-list *ngSwitchCase="\'home\'">\n\n      <!--Banner starts-->\n      <img src="../../assets/imgs/no-image.png" style="height:20% !important; box-sizing: content-box !important;" />\n      <!--Banner ends-->\n\n      <!-- Label starts-->\n      <ion-title class="font-poirot mt-10">Shop for</ion-title>\n      <!-- Label ends-->\n\n\n      <!-- Grid Starts -->\n      <div class = "row responsive-sm">\n        <div class = "col col-25">\n          <img src="../../assets/imgs/no-image.png" class="image-container"/>\n        </div>\n        <div class = "col">\n          <img src="../../assets/imgs/no-image.png" class="image-container"/>\n        </div>\n        <div class = "col">\n          <img src="../../assets/imgs/no-image.png" class="image-container"/>\n        </div>\n        \n        <div class = "col">\n          <img src="../../assets/imgs/no-image.png" class="image-container"/>\n        </div>\n        <div class = "col">\n          <img src="../../assets/imgs/no-image.png" class="image-container"/>\n        </div>\n     </div>\n     \n     <div class = "row responsive-sm">\n      <div class = "col">\n        <img src="../../assets/imgs/no-image.png" class="image-container"/>\n      </div>\n      <div class = "col">\n        <img src="../../assets/imgs/no-image.png" class="image-container"/>\n      </div>\n      <div class = "col">\n        <img src="../../assets/imgs/no-image.png" />\n      </div>\n     </div>\n\n\n\n    </ion-list>\n    <ion-list *ngSwitchCase="\'cards\'">\n      Cards\n    </ion-list>\n    <ion-list *ngSwitchCase="\'posters\'">\n      Posters\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'contactus\'">\n      Contact Us\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'blog\'">\n      Blog\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n\n\n\n</ion-footer>'/*ion-inline-end:"/home/aashijit/Documents/Paperdocks/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

});
//# sourceMappingURL=0.js.map