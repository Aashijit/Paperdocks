webpackJsonp([1],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartPageModule", function() { return ShoppingCartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_cart__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShoppingCartPageModule = /** @class */ (function () {
    function ShoppingCartPageModule() {
    }
    ShoppingCartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shopping_cart__["a" /* ShoppingCartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shopping_cart__["a" /* ShoppingCartPage */]),
            ],
        })
    ], ShoppingCartPageModule);
    return ShoppingCartPageModule;
}());

//# sourceMappingURL=shopping-cart.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartPage; });
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


var ShoppingCartPage = /** @class */ (function () {
    function ShoppingCartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShoppingCartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShoppingCartPage');
    };
    ShoppingCartPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ShoppingCartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shopping-cart',template:/*ion-inline-start:"/home/aashijit/Paperdocks/src/pages/shopping-cart/shopping-cart.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button clear (click)="goBack()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="font-poirot fw-800">\n      Paperdocks\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <img src="../../assets/imgs/shopping-bag.svg" style="height: 75% !important" />\n      </button>\n      <button ion-button icon-only>\n        <img src="../../assets/imgs/search.svg" style="height: 85% !important" />\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!-- <h1 class="font-poirot mlp-5">Your Cart</h1> -->\n\n  <!--Grid Starts-->\n  <ion-grid>\n    <ion-row>\n      <ion-col class="container">\n        <ion-card>\n          <img src="../../assets/imgs/no-image.png" />\n        </ion-card>\n      </ion-col>\n      <ion-col class="container pt-20">\n        <h1 class="font-poirot font-30 mlp-5 nomargin"><strong>Thank You Card</strong></h1>\n        <button ion-button clear class="font-poirot text-info captalize">Remove</button>\n      </ion-col>\n      <ion-col class="container pt-20">\n        <ion-note class="font-poirot font-30 mlp-5"><strong>Rs 120</strong></ion-note>\n      </ion-col>\n      <ion-col class="container pt-20">\n        <ion-badge class="font-poirot font-18 mlp-5">Quantity: 1</ion-badge>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!--Grid Ends-->\n\n  <!-- Footer Starts-->\n  <ion-grid class="back-primary-light footer-tab">\n    <ion-label class="text-black fw-800 font-poirot text-center text-capitalize">Get in touch for customised\n      products or services</ion-label>\n    <button ion-button round class="text-capitalize back-primary margin-left-right">Let\'s work together</button>\n\n    <ion-row class="font-poirot">\n      <ion-col>\n        <p class="title-footer">Paper Docks</p>\n        <ion-label>About</ion-label>\n        <ion-label>FAQ\'s</ion-label>\n        <ion-label>Contact</ion-label>\n        <ion-label>Terms & Conditions</ion-label>\n      </ion-col>\n      <ion-col>\n        <p class="title-footer">Connect</p>\n        <button ion-button clear class="nopadding"><img src="../../assets/imgs/facebook.svg"\n            class="social-icons" /></button>\n        <button ion-button clear class="nopadding"><img src="../../assets/imgs/instagram.svg"\n            class="social-icons" /></button>\n        <button ion-button clear class="nopadding"><img src="../../assets/imgs/whatsapp.svg"\n            class="social-icons" /></button>\n      </ion-col>\n      <ion-col>\n        <p class="title-footer">Newsletter</p>\n        <ion-label>Sign up for updates, freebies and more</ion-label>\n        <ion-input placeholder="Email Id" class="input-box"></ion-input>\n        <button ion-button round class="back-primary mt-10"><strong>Subscribe</strong></button>\n      </ion-col>\n    </ion-row>\n\n    <ion-note class="fw-800 font-poirot text-center">&copy; Paperdocks @ 2019</ion-note>\n  </ion-grid>\n  <!-- Footer Ends-->\n</ion-content>'/*ion-inline-end:"/home/aashijit/Paperdocks/src/pages/shopping-cart/shopping-cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ShoppingCartPage);
    return ShoppingCartPage;
}());

//# sourceMappingURL=shopping-cart.js.map

/***/ })

});
//# sourceMappingURL=1.js.map