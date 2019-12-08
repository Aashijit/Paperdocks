webpackJsonp([0],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostPageModule", function() { return BlogPostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_post__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_safe_html_safe_html__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BlogPostPageModule = /** @class */ (function () {
    function BlogPostPageModule() {
    }
    BlogPostPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__blog_post__["a" /* BlogPostPage */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_safe_html_safe_html__["a" /* SafeHtmlPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__blog_post__["a" /* BlogPostPage */]),
            ],
        })
    ], BlogPostPageModule);
    return BlogPostPageModule;
}());

//# sourceMappingURL=blog-post.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPostPage; });
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
 * Generated class for the BlogPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BlogPostPage = /** @class */ (function () {
    function BlogPostPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.text = "<h1>Hello</h1> <sup>world</sup> <p style='color: white; background:red;'>This is it bro !!!</p>";
    }
    BlogPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BlogPostPage');
    };
    BlogPostPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    BlogPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blog-post',template:/*ion-inline-start:"/home/aashijit/Paperdocks/src/pages/blog-post/blog-post.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button clear (click)="goBack()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="font-poirot fw-800">\n      The Paperdocks Blog\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <img src="../../assets/imgs/search.svg" style="height: 85% !important" />\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [innerHTML]="text | safeHtml" class="font-poirot"></div>\n\n\n   <!-- Footer Starts-->\n   <ion-grid class="back-primary-light footer-tab">\n      <ion-label class="text-black fw-800 font-poirot text-center text-capitalize">Get in touch for customised\n        products or services</ion-label>\n      <button ion-button round class="text-capitalize back-primary margin-left-right">Let\'s work together</button>\n  \n      <ion-row class="font-poirot">\n        <ion-col>\n          <ion-title>Paper Docks</ion-title>\n          <ion-label>About</ion-label>\n          <ion-label>FAQ\'s</ion-label>\n          <ion-label>Contact</ion-label>\n          <ion-label>Terms & Conditions</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-title>Connect</ion-title>\n          <button ion-button clear class="nopadding"><img src="../../assets/imgs/facebook.svg"\n              class="social-icons" /></button>\n          <button ion-button clear class="nopadding"><img src="../../assets/imgs/instagram.svg"\n              class="social-icons" /></button>\n          <button ion-button clear class="nopadding"><img src="../../assets/imgs/whatsapp.svg"\n              class="social-icons" /></button>\n        </ion-col>\n        <ion-col>\n          <ion-title>Newsletter</ion-title>\n          <ion-label>Sign up for updates, freebies and more</ion-label>\n          <ion-input placeholder="Email Id" class="input-box"></ion-input>\n          <button ion-button round class="back-primary mt-10"><strong>Subscribe</strong></button>\n        </ion-col>\n      </ion-row>\n  \n      <ion-note class="fw-800 font-poirot text-center">&copy; Paperdocks @ 2019</ion-note>\n    </ion-grid>\n    <!-- Footer Ends-->\n  \n</ion-content>'/*ion-inline-end:"/home/aashijit/Paperdocks/src/pages/blog-post/blog-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BlogPostPage);
    return BlogPostPage;
}());

//# sourceMappingURL=blog-post.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
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
 * Generated class for the SafeHtmlPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'safeHtml',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());

//# sourceMappingURL=safe-html.js.map

/***/ })

});
//# sourceMappingURL=0.js.map