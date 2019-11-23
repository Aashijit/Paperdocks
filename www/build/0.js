webpackJsonp([0],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(270);
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

/***/ 270:
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
        this.browseBy = {
            title: 'Browse by',
            subTitle: 'Please select one of the categories',
            mode: 'ios',
            interface: 'popover'
        };
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.buyCard = function () {
        this.navCtrl.push('CardDetailsPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/aashijit/webApp/Paperdocks/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon slot="start" name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="font-poirot fw-800">\n      Paperdocks\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <img src="../../assets/imgs/shopping-bag.svg" style="height: 75% !important" />\n      </button>\n      <button ion-button icon-only>\n        <img src="../../assets/imgs/search.svg" style="height: 85% !important" />\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n  <div>\n    <ion-segment [(ngModel)]="dashboardPageNames">\n      <ion-segment-button value="home">\n        Home\n      </ion-segment-button>\n      <ion-segment-button value="cards">\n        Cards\n      </ion-segment-button>\n      <ion-segment-button value="posters">\n        Posters\n      </ion-segment-button>\n      <ion-segment-button value="contactus">\n        Contact Us\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n<ion-content>\n\n\n  <div [ngSwitch]="dashboardPageNames">\n    <ion-list *ngSwitchCase="\'home\'">\n\n      <!--Banner starts-->\n      <img src="../../assets/imgs/no-image.png" style="height:auto; width: 100% !important;" />\n      <!--Banner ends-->\n\n      <!-- Label starts-->\n      <ion-title class="font-poirot mt-10">Shop for</ion-title>\n      <!-- Label ends-->\n\n\n      <!-- Grid Starts -->\n      <ion-row>\n        <ion-col class="image-container">\n          <ion-card>\n            <ion-card-header>\n              <ion-title class="font-poirot">Birthday Cards</ion-title>\n            </ion-card-header>\n            <ion-card-content>\n              <img src="../../assets/imgs/no-image.png" />\n              <ion-note class="mt-20 text-justify">\n                This is the birthday cards you always want to send your friends, family, loved ones.\n              </ion-note>\n              <br />\n              <button ion-button clear class="captalize font-poirot">Spread the love</button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col class="image-container">\n          <ion-card>\n            <ion-card-header>\n              <ion-title class="font-poirot">Thank You Cards</ion-title>\n            </ion-card-header>\n            <ion-card-content>\n              <img src="../../assets/imgs/no-image.png" />\n              <ion-note class="mt-20 text-justify">\n                This is the thank you cards you always want to send your friends, family, loved ones.\n              </ion-note>\n              <br />\n              <button ion-button clear class="captalize font-poirot">Spread the love</button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col class="image-container">\n          <ion-card>\n            <ion-card-header>\n              <ion-title class="font-poirot">Special Occassions Cards</ion-title>\n            </ion-card-header>\n            <ion-card-content>\n              <img src="../../assets/imgs/no-image.png" />\n              <ion-note class="mt-20 text-justify">\n                This is the occassional cards you always want to send your friends, family, loved ones.\n              </ion-note>\n              <br />\n              <button ion-button clear class="captalize font-poirot">Spread the love</button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col class="image-container">\n          <ion-card>\n            <ion-card-header>\n              <ion-title class="font-poirot">Wall Posters</ion-title>\n            </ion-card-header>\n            <ion-card-content>\n              <img src="../../assets/imgs/no-image.png" />\n              <ion-note class="mt-20 text-justify">\n                Make your walls speak out to your friends, family and loved ones\n              </ion-note>\n              <br />\n              <button ion-button clear class="captalize font-poirot">Spread the love</button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col class="image-container">\n          <ion-card>\n            <ion-card-header>\n              <ion-title class="font-poirot">Square Posters</ion-title>\n            </ion-card-header>\n            <ion-card-content>\n              <img src="../../assets/imgs/no-image.png" />\n              <ion-note class="mt-20 text-justify">\n                Make your walls speak out to your friends, family and loved ones\n              </ion-note>\n              <br />\n              <button ion-button clear class="captalize font-poirot">Spread the love</button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col class="image-container">\n          <ion-card>\n            <ion-card-header>\n              <ion-title class="font-poirot">Frames</ion-title>\n            </ion-card-header>\n            <ion-card-content>\n              <img src="../../assets/imgs/no-image.png" />\n              <ion-note class="mt-20 text-justify">\n                Make those colourless walls speak out to your family,friends and relatives\n              </ion-note>\n              <br />\n              <button ion-button clear class="captalize font-poirot">Spread the love</button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col class="image-container">\n          <ion-card>\n            <ion-card-header>\n              <ion-title class="font-poirot">Multiple Frames</ion-title>\n            </ion-card-header>\n            <ion-card-content>\n              <img src="../../assets/imgs/no-image.png" />\n              <ion-note class="mt-20 text-justify">\n                Make those colourless walls speak out to your family,friends and relatives\n              </ion-note>\n              <br />\n              <button ion-button clear class="captalize font-poirot">Spread the love</button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col class="image-container">\n          <ion-card>\n            <ion-card-header>\n              <ion-title class="font-poirot">Minimalism</ion-title>\n            </ion-card-header>\n            <ion-card-content>\n              <img src="../../assets/imgs/no-image.png" />\n              <ion-note class="mt-20 text-justify">\n                Make those colourless walls speak out to your family,friends and relatives\n              </ion-note>\n              <br />\n              <button ion-button clear class="captalize font-poirot">Spread the love</button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <!-- Grid Ends -->\n\n      <!-- Footer Starts-->\n      <ion-grid class="back-primary">\n        <ion-note class="text-black fw-800 font-poirot text-center">&copy; Paperdocks @ 2019</ion-note>\n      </ion-grid>\n      <!-- Footer Ends-->\n    </ion-list>\n    <ion-list *ngSwitchCase="\'cards\'">\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label class="font-poirot" floating>Browse By</ion-label>\n            <ion-select [selectOptions]="browseBy">\n              <ion-option value="c1" class="font-poirot">Category 1</ion-option>\n              <ion-option value="c2" class="font-poirot">Category 2</ion-option>\n              <ion-option value="c3" class="font-poirot">Category 3</ion-option>\n              <ion-option value="c4" class="font-poirot">Category 4</ion-option>\n              <ion-option value="c5" class="font-poirot">Category 5</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label class="font-poirot" floating>Sort By</ion-label>\n            <ion-select [selectOptions]="browseBy">\n              <ion-option value="sbn" class="font-poirot">Sort by name</ion-option>\n              <ion-option value="sbp" class="font-poirot">Sort by price</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="image-container">\n          <ion-card>\n            <img src="../../assets/imgs/no-image.png" />\n            <ion-card-header>\n              <ion-title class="font-poirot">Valentine\'s Day Card</ion-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-note class="mt-20 text-justify">\n                Make those colourless walls speak out to your family,friends and relatives\n              </ion-note>\n              <br />\n              <button ion-button clear class="captalize font-poirot" (click)="buyCard()">Rs 120 /-</button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col class="image-container">\n          <ion-card>\n            <img src="../../assets/imgs/no-image.png" />\n            <ion-card-header>\n              <ion-title class="font-poirot">I love you Card</ion-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-note class="mt-20 text-justify">\n                Make those colourless walls speak out to your family,friends and relatives\n              </ion-note>\n              <br />\n              <button ion-button clear class="captalize font-poirot">Rs 120 /-</button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n\n        <!-- Footer Starts-->\n        <ion-grid class="back-primary">\n          <ion-note class="text-black fw-800 font-poirot text-center">&copy; Paperdocks @ 2019</ion-note>\n        </ion-grid>\n        <!-- Footer Ends-->\n\n\n      </ion-row>\n\n    </ion-list>\n    <ion-list *ngSwitchCase="\'posters\'">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label class="font-poirot" floating>Browse By</ion-label>\n            <ion-select [selectOptions]="browseBy">\n              <ion-option value="c1" class="font-poirot">Category 1</ion-option>\n              <ion-option value="c2" class="font-poirot">Category 2</ion-option>\n              <ion-option value="c3" class="font-poirot">Category 3</ion-option>\n              <ion-option value="c4" class="font-poirot">Category 4</ion-option>\n              <ion-option value="c5" class="font-poirot">Category 5</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label class="font-poirot" floating>Sort By</ion-label>\n            <ion-select [selectOptions]="browseBy">\n              <ion-option value="sbn" class="font-poirot">Sort by name</ion-option>\n              <ion-option value="sbp" class="font-poirot">Sort by price</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="image-container">\n          <ion-card>\n            <img src="../../assets/imgs/no-image.png" />\n            <ion-card-header>\n              <ion-title class="font-poirot">Valentine\'s Day Card</ion-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-note class="mt-20 text-justify">\n                Make those colourless walls speak out to your family,friends and relatives\n              </ion-note>\n              <br />\n              <button ion-button clear class="captalize font-poirot">Rs 120 /-</button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col class="image-container">\n          <ion-card>\n            <img src="../../assets/imgs/no-image.png" />\n            <ion-card-header>\n              <ion-title class="font-poirot">I love you Card</ion-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-note class="mt-20 text-justify">\n                Make those colourless walls speak out to your family,friends and relatives\n              </ion-note>\n              <br />\n              <button ion-button clear class="captalize font-poirot">Rs 120 /-</button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n\n        <!-- Footer Starts-->\n        <ion-grid class="back-primary">\n          <ion-note class="text-black fw-800 font-poirot text-center">&copy; Paperdocks @ 2019</ion-note>\n        </ion-grid>\n        <!-- Footer Ends-->\n      </ion-row>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'contactus\'" class="center-align contact-us-background">\n      <ion-item>\n        <ion-label floating class="font-poirot">Your Name <sup class="text-danger">*</sup></ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating class="font-poirot">Your Email <sup class="text-danger">*</sup></ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating class="font-poirot">Your Mobile Number <sup class="text-danger">*</sup></ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating class="font-poirot">Your Message <sup class="text-danger">*</sup></ion-label>\n        <ion-textarea></ion-textarea>\n      </ion-item>\n      <button ion-button round full class="back-primary" style="margin-top: 20px !important">Send Message</button>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n</ion-footer>'/*ion-inline-end:"/home/aashijit/webApp/Paperdocks/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

});
//# sourceMappingURL=0.js.map