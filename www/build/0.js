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
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\edot3\Desktop\Paperdocks\Paperdocks\src\pages\dashboard\dashboard.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons left>\n\n      <button ion-button menuToggle>\n\n        <ion-icon slot="start" name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title class="font-poirot fw-800">\n\n      Paperdocks\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <img src="../../assets/imgs/search.svg" style="height: 85% !important" />\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n\n\n\n\n  <div>\n\n    <ion-segment [(ngModel)]="dashboardPageNames">\n\n      <ion-segment-button value="home">\n\n        Home\n\n      </ion-segment-button>\n\n      <ion-segment-button value="cards">\n\n        Cards\n\n      </ion-segment-button>\n\n      <ion-segment-button value="posters">\n\n        Posters\n\n      </ion-segment-button>\n\n      <ion-segment-button value="contactus">\n\n        Contact Us\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n  <div [ngSwitch]="dashboardPageNames">\n\n    <ion-list *ngSwitchCase="\'home\'">\n\n\n\n      <!--Banner starts-->\n\n      <img src="../../assets/imgs/no-image.png" style="height:auto; width: 100% !important;" />\n\n      <!--Banner ends-->\n\n\n\n      <!-- Label starts-->\n\n      <ion-title class="font-poirot mt-10">Shop for</ion-title>\n\n      <!-- Label ends-->\n\n\n\n\n\n      <!-- Grid Starts -->      \n\n      <ion-row>\n\n        <ion-col class="image-container">\n\n          <ion-card>\n\n            <ion-card-header>\n\n              <ion-title class="font-poirot">Birthday Cards</ion-title>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              <img src="../../assets/imgs/no-image.png" />\n\n              <ion-note class="mt-20 text-justify">\n\n                This is the birthday cards you always want to send your friends, family, loved ones.\n\n              </ion-note>\n\n              <br/>\n\n              <button ion-button clear class="captalize font-poirot">Spread the love</button>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col class="image-container">\n\n          <ion-card >\n\n            <ion-card-header>\n\n              <ion-title class="font-poirot">Thank You Cards</ion-title>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              <img src="../../assets/imgs/no-image.png" />\n\n              <ion-note class="mt-20 text-justify">\n\n                This is the thank you cards you always want to send your friends, family, loved ones.\n\n              </ion-note>\n\n              <br/>\n\n              <button ion-button clear class="captalize font-poirot">Spread the love</button>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col class="image-container">\n\n          <ion-card >\n\n            <ion-card-header>\n\n              <ion-title class="font-poirot">Special Occassions Cards</ion-title>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              <img src="../../assets/imgs/no-image.png" />\n\n              <ion-note class="mt-20 text-justify">\n\n                This is the occassional cards you always want to send your friends, family, loved ones.\n\n              </ion-note>\n\n              <br/>\n\n              <button ion-button clear class="captalize font-poirot">Spread the love</button>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col class="image-container">\n\n          <ion-card >\n\n            <ion-card-header>\n\n              <ion-title class="font-poirot">Wall Posters</ion-title>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              <img src="../../assets/imgs/no-image.png" />\n\n              <ion-note class="mt-20 text-justify">\n\n                Make your walls speak out to your friends, family and loved ones\n\n              </ion-note>\n\n              <br/>\n\n              <button ion-button clear class="captalize font-poirot">Spread the love</button>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col class="image-container">\n\n          <ion-card >\n\n            <ion-card-header>\n\n              <ion-title class="font-poirot">Square Posters</ion-title>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              <img src="../../assets/imgs/no-image.png" />\n\n              <ion-note class="mt-20 text-justify">\n\n                Make your walls speak out to your friends, family and loved ones\n\n              </ion-note>\n\n              <br/>\n\n              <button ion-button clear class="captalize font-poirot">Spread the love</button>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col class="image-container">\n\n          <ion-card >\n\n            <ion-card-header>\n\n              <ion-title class="font-poirot">Frames</ion-title>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              <img src="../../assets/imgs/no-image.png" />\n\n              <ion-note class="mt-20 text-justify">\n\n                Make those colourless walls speak out to your family,friends and relatives\n\n              </ion-note>\n\n              <br/>\n\n              <button ion-button clear class="captalize font-poirot">Spread the love</button>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col class="image-container">\n\n          <ion-card >\n\n            <ion-card-header>\n\n              <ion-title class="font-poirot">Multiple Frames</ion-title>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              <img src="../../assets/imgs/no-image.png" />\n\n              <ion-note class="mt-20 text-justify">\n\n                Make those colourless walls speak out to your family,friends and relatives\n\n              </ion-note>\n\n              <br/>\n\n              <button ion-button clear class="captalize font-poirot">Spread the love</button>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col class="image-container">\n\n          <ion-card >\n\n            <ion-card-header>\n\n              <ion-title class="font-poirot">Minimalism</ion-title>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              <img src="../../assets/imgs/no-image.png" />\n\n              <ion-note class="mt-20 text-justify">\n\n                Make those colourless walls speak out to your family,friends and relatives\n\n              </ion-note>\n\n              <br/>\n\n              <button ion-button clear class="captalize font-poirot">Spread the love</button>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n      <!-- Grid Endss -->\n\n\n\n\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'cards\'">\n\n      \n\n\n\n      <ion-item class="m-20">\n\n        <ion-label floating class="font-poirot fw-800">Your favourite cards ...</ion-label>\n\n        <ion-input></ion-input>\n\n      </ion-item>\n\n  \n\n      \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'posters\'">\n\n      Posters\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'contactus\'">\n\n      Contact Us\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n\n\n\n\n\n\n</ion-footer>'/*ion-inline-end:"C:\Users\edot3\Desktop\Paperdocks\Paperdocks\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

});
//# sourceMappingURL=0.js.map