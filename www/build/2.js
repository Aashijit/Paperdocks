webpackJsonp([2],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDetailsPageModule", function() { return CardDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_details__ = __webpack_require__(270);
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

/***/ 270:
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
    CardDetailsPage.prototype.orderProduct = function () {
        this.navCtrl.push('ShoppingCartPage');
    };
    CardDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-card-details',template:/*ion-inline-start:"C:\Users\edot3\Desktop\Paperdocks\Paperdocks\src\pages\card-details\card-details.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons left>\n\n      <button ion-button clear (click)="goBack()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title class="font-poirot fw-800">\n\n      Paperdocks\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <img src="../../assets/imgs/shopping-bag.svg" style="height: 75% !important" />\n\n      </button>\n\n      <button ion-button icon-only>\n\n        <img src="../../assets/imgs/search.svg" style="height: 85% !important" />\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    \n\n  <!--Grid Starts-->\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col class="container">\n\n        <ion-row>\n\n          <ion-card>\n\n            <img src="../../assets/imgs/no-image.png" />\n\n          </ion-card>\n\n        </ion-row>\n\n        <!--More Images of this Product-->\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-card>\n\n              <img src="../../assets/imgs/no-image.png" />\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-card>\n\n              <img src="../../assets/imgs/no-image.png" />\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-card>\n\n              <img src="../../assets/imgs/no-image.png" />\n\n            </ion-card>\n\n          </ion-col>\n\n          <ion-col>\n\n              <ion-card>\n\n                <img src="../../assets/imgs/no-image.png" />\n\n              </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n        <!--More Images of this Product-->\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-list style="margin-left:5% !important">\n\n          <h1 class="font-poirot"><strong>Thank You Card</strong></h1>\n\n          <ion-note class="font-poirot text-primary font-12">\n\n            <strong>A thank you card for that person who who’s been the most awesome\n\n              person in your life! The card is empty on the inside which gives you\n\n              enough space to pour your heart out!</strong>\n\n          </ion-note>\n\n          <h2 class="font-poirot">Rs 120</h2>\n\n          <h3 class="font-poirot">Quantity: 1</h3>\n\n          \n\n\n\n          <ion-row>\n\n            <ion-col class="button-container"><button ion-button full round  class="font-poirot back-primary text-black captalize font-18" (click)="orderProduct()">Order Now</button></ion-col>\n\n            <ion-col class="button-container"><button ion-button full round class="font-poirot back-primary text-black captalize font-18">Add to Cart</button></ion-col>\n\n          </ion-row>\n\n          \n\n\n\n          <ion-label class="font-poirot">Size: A6: <strong>4.1" x 5.8"</strong></ion-label>\n\n          <ion-label class="font-poirot">Paper Type: <strong>Lightly textured</strong></ion-label>\n\n          <ion-label class="font-poirot">Paper Weight: <strong>300 GSM</strong></ion-label>\n\n          <ion-label class="font-poirot">Shipping: <strong>7-10 days</strong></ion-label>\n\n\n\n          <h4 class="font-poirot"><strong>Question & Answers</strong></h4>\n\n\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col style="margin-top:1.5% !important">\n\n                <ion-note class="font-poirot text-black">Have a question about this product? Post it here</ion-note>\n\n              </ion-col>\n\n              <ion-col>\n\n                <button ion-button full round class="font-poirot back-primary text-black">Ask a question</button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n\n\n          <h4 class="font-poirot mb-0">Share this product</h4>\n\n          <ion-row>\n\n            <ion-col col-1 class="nopadding"><button ion-button clear class="nopadding"><img\n\n                  src="../../assets/imgs/facebook.svg" style="width:20px !important" /></button></ion-col>\n\n            <ion-col col-1 class="nopadding"><button ion-button clear class="nopadding"><img\n\n                  src="../../assets/imgs/instagram.svg" style="width:20px !important" /></button></ion-col>\n\n            <ion-col col-1 class="nopadding"><button ion-button clear class="nopadding"><img\n\n                  src="../../assets/imgs/whatsapp.svg" style="width:20px !important" /></button></ion-col>\n\n          </ion-row>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <!--Grid Ends-->\n\n<!-- 7607003243 -->\n\n  <!--More from this section-->\n\n  <h2 class="font-poirot mlp-5 mt-0"><strong>More from this collection</strong></h2>\n\n  <ion-row>  \n\n    <ion-col class="more-container">\n\n      <ion-card>\n\n        <img src="../../assets/imgs/no-image.png" />\n\n        <ion-card-title class="font-poirot text-center">Thank You Card</ion-card-title>\n\n        <ion-card-content class="font-poirot text-center nopadding">Rs 135</ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col class="more-container">\n\n      <ion-card>\n\n        <img src="../../assets/imgs/no-image.png" />\n\n        <ion-card-title class="font-poirot text-center">I hate You Card</ion-card-title>\n\n        <ion-card-content class="font-poirot text-center nopadding">Rs 105</ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col class="more-container">\n\n      <ion-card>\n\n        <img src="../../assets/imgs/no-image.png" />\n\n        <ion-card-title class="font-poirot text-center">I Miss You Card</ion-card-title>\n\n        <ion-card-content class="font-poirot text-center nopadding">Rs 135</ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col class="more-container">\n\n      <ion-card>\n\n        <img src="../../assets/imgs/no-image.png" />\n\n        <ion-card-title class="font-poirot text-center">Get Well Soon Card</ion-card-title>\n\n        <ion-card-content class="font-poirot text-center nopadding">Rs 135</ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n<!--More from this section-->\n\n\n\n<ion-grid class="back-primary-light">\n\n<!-- <button ion-button full round class="font-poirot back-primary text-black">For orders in bulk</button> -->\n\n<ion-note class="text-black fw-800 font-poirot text-center">&copy; Paperdocks @ 2019</ion-note>\n\n</ion-grid>\n\n\n\n</ion-content>\n\n\n\n<!-- <ion-footer text-center no-border transparent>\n\n      <button ion-button  outline class="font-poirot back-primary-light">Order Now</button>\n\n      <button ion-button outline class="font-poirot back-primary-light">Add to Cart</button>\n\n</ion-footer> -->'/*ion-inline-end:"C:\Users\edot3\Desktop\Paperdocks\Paperdocks\src\pages\card-details\card-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CardDetailsPage);
    return CardDetailsPage;
}());

//# sourceMappingURL=card-details.js.map

/***/ })

});
//# sourceMappingURL=2.js.map