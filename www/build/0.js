webpackJsonp([0],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartPageModule", function() { return ShoppingCartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_cart__ = __webpack_require__(272);
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

/***/ 272:
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
            selector: 'page-shopping-cart',template:/*ion-inline-start:"C:\Users\edot3\Desktop\Paperdocks\Paperdocks\src\pages\shopping-cart\shopping-cart.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n      <ion-buttons left>\n\n        <button ion-button clear (click)="goBack()">\n\n          <ion-icon name="arrow-round-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title class="font-poirot fw-800">\n\n        Paperdocks\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only>\n\n          <img src="../../assets/imgs/shopping-bag.svg" style="height: 75% !important" />\n\n        </button>\n\n        <button ion-button icon-only>\n\n          <img src="../../assets/imgs/search.svg" style="height: 85% !important" />\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  \n\n\n\n<ion-content>\n\n  <!-- <h1 class="font-poirot mlp-5">Your Cart</h1> -->\n\n\n\n  <!--Grid Starts-->\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col class="container">\n\n        <ion-card>\n\n          <img src="../../assets/imgs/no-image.png" />\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col class="container pt-20">\n\n        <h1 class="font-poirot font-30 mlp-5 nomargin"><strong>Thank You Card</strong></h1>\n\n        <button ion-button clear class="font-poirot text-info captalize">Remove</button>\n\n      </ion-col>\n\n      <ion-col class="container pt-20">\n\n          <ion-note class="font-poirot font-30 mlp-5"><strong>Rs 120</strong></ion-note>\n\n      </ion-col>\n\n      <ion-col class="container pt-20">\n\n          <ion-badge class="font-poirot font-18 mlp-5">Quantity: 1</ion-badge>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <!--Grid Ends-->\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\edot3\Desktop\Paperdocks\Paperdocks\src\pages\shopping-cart\shopping-cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ShoppingCartPage);
    return ShoppingCartPage;
}());

//# sourceMappingURL=shopping-cart.js.map

/***/ })

});
//# sourceMappingURL=0.js.map