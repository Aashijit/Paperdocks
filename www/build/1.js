webpackJsonp([1],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDetailsPageModule", function() { return CardDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_details__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardDetailsPageModule = /** @class */ (function () {
    function CardDetailsPageModule() {
    }
    CardDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__card_details__["a" /* CardDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__card_details__["a" /* CardDetailsPage */]),
            ],
        })
    ], CardDetailsPageModule);
    return CardDetailsPageModule;
}());

//# sourceMappingURL=card-details.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDetailsPage; });
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


/**
 * Generated class for the CardDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardDetailsPage = /** @class */ (function () {
    function CardDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CardDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardDetailsPage');
    };
    CardDetailsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    CardDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-card-details',template:/*ion-inline-start:"/home/aashijit/webApp/Paperdocks/src/pages/card-details/card-details.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button clear (click)="goBack()">\n          <ion-icon name="arrow-round-back" ></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="font-poirot fw-800">\n      Paperdocks\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <img src="../../assets/imgs/shopping-bag.svg" style="height: 75% !important" />\n      </button>\n      <button ion-button icon-only>\n        <img src="../../assets/imgs/search.svg" style="height: 85% !important" />\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!--Grid Starts-->\n  <ion-grid>\n    <ion-row>\n      <ion-col class="container">\n        <ion-card>\n          <img src="../../assets/imgs/no-image.png" />\n        </ion-card>\n      </ion-col>\n      <ion-col>\n          <ion-list style="margin-left:5% !important">\n            <h1 class="font-poirot"><strong>Thank You Card</strong></h1>\n            <h2 class="font-poirot">Rs 120</h2>\n            <h3 class="font-poirot">Quantity: 1</h3> \n            <ion-note class="font-poirot text-primary">\n              <strong>A thank you card for that person who who’s been the most awesome\n              person in your life! The card is empty on the inside which gives you\n              enough space to pour your heart out!</strong>\n            </ion-note>\n\n            <ion-label class="font-poirot">Size: A6: <strong>4.1" x 5.8"</strong></ion-label>\n            <ion-label class="font-poirot">Paper Type: <strong>Lightly textured</strong></ion-label>\n            <ion-label class="font-poirot">Paper Weight: <strong>300 GSM</strong></ion-label>\n            <ion-label class="font-poirot">Shipping: <strong>7-10 days</strong></ion-label>\n\n            <h4 class="font-poirot">Question & Answers</h4>\n\n            <ion-grid class="back-primary-light">\n              <ion-row>\n                <ion-col style="margin-top:1.5% !important">\n                  <ion-note class="font-poirot text-black">Have a question about this product? Post it here</ion-note>\n                </ion-col>\n                <ion-col>\n                    <button ion-button full class="font-poirot back-primary text-black">Ask a question</button>\n                  </ion-col>\n              </ion-row>\n            </ion-grid>\n\n          </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!--Grid Ends-->\n\n\n</ion-content>\n'/*ion-inline-end:"/home/aashijit/webApp/Paperdocks/src/pages/card-details/card-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CardDetailsPage);
    return CardDetailsPage;
}());

//# sourceMappingURL=card-details.js.map

/***/ })

});
//# sourceMappingURL=1.js.map