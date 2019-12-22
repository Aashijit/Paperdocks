webpackJsonp([5],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/blog-post/blog-post.module": [
		267,
		0
	],
	"../pages/blog/blog.module": [
		268,
		4
	],
	"../pages/card-details/card-details.module": [
		270,
		3
	],
	"../pages/dashboard/dashboard.module": [
		269,
		2
	],
	"../pages/shopping-cart/shopping-cart.module": [
		271,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/blog-post/blog-post.module#BlogPostPageModule', name: 'BlogPostPage', segment: 'blog-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blog/blog.module#BlogPageModule', name: 'BlogPage', segment: 'blog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/card-details/card-details.module#CardDetailsPageModule', name: 'CardDetailsPage', segment: 'card-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopping-cart/shopping-cart.module#ShoppingCartPageModule', name: 'ShoppingCartPage', segment: 'shopping-cart', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'DashboardPage';
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: 'DashboardPage' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.goToBlog = function () {
        this.nav.setRoot('BlogPage');
    };
    MyApp.prototype.goToDashboard = function () {
        this.nav.setRoot('DashboardPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/aashijit/Paperdocks/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <img src="../../assets/imgs/logo.png" style="width:76px; height:61px; margin-left : 35% !important;" />\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item menuClose (click)="goToDashboard()"><img src="../assets/imgs/home.svg" style="height:20px!important" />\n        <ion-note style="margin-left: 15%;\n        font-size: 20px;" class="font-poirot text-black">Dashboard</ion-note>\n      </button>\n      <button ion-item menuClose><img src="../assets/imgs/shopping-bag.svg" style="height:20px!important" />\n        <ion-note style="margin-left: 15%;\n          font-size: 20px;" class="font-poirot text-black">Shopping Cart</ion-note>\n      </button>\n      <button ion-item menuClose><img src="../assets/imgs/delivery-truck.svg" style="height:20px!important" />\n        <ion-note style="margin-left: 15%;\n          font-size: 20px;" class="font-poirot text-black">Track Order</ion-note>\n      </button>\n      <button ion-item menuClose><img src="../assets/imgs/contact.svg" style="height:20px!important" />\n        <ion-note style="margin-left: 15%;\n        font-size: 20px;" class="font-poirot text-black">Contact Us</ion-note>\n      </button>\n      <button ion-item menuClose><img src="../assets/imgs/about-us.svg" style="height:20px!important" />\n        <ion-note style="margin-left: 15%;\n          font-size: 20px;" class="font-poirot text-black">About Us</ion-note>\n      </button>\n      <button ion-item menuClose (click)="goToBlog()"><img src="../assets/imgs/digital-marketing.svg" style="height:20px!important" />\n        <ion-note style="margin-left: 15%;\n          font-size: 20px;" class="font-poirot text-black">Blog</ion-note>\n      </button>\n      <button ion-item menuClose><img src="../assets/imgs/help.svg" style="height:20px!important" />\n        <ion-note style="margin-left: 15%;\n            font-size: 20px;" class="font-poirot text-black">FAQs</ion-note>\n      </button>\n      <button ion-item menuClose><img src="../assets/imgs/terms-and-conditions.svg" style="height:20px!important" />\n        <ion-note style="margin-left: 15%;\n              font-size: 20px;" class="font-poirot text-black">Terms & Conditions</ion-note>\n      </button>\n      <button ion-item menuClose><img src="../assets/imgs/privacy-policy.svg" style="height:20px!important" />\n        <ion-note style="margin-left: 15%;\n              font-size: 20px;" class="font-poirot text-black">Privacy Policy</ion-note>\n      </button>\n      <button ion-item menuClose><img src="../assets/imgs/rss.svg" style="height:20px!important" />\n        <ion-note style="margin-left: 15%;\n              font-size: 20px;" class="font-poirot text-black">Subscribe</ion-note>\n      </button>\n    </ion-list>\n  </ion-content>\n\n  <ion-footer class="back-primary">\n    <button ion-button clear>\n      <ion-icon name="logo-facebook" class="text-peach"></ion-icon>\n    </button>\n    <button ion-button clear>\n      <ion-icon name="logo-instagram" class="text-peach"></ion-icon>\n    </button>\n    <button ion-button clear>\n      <ion-icon name="mail" class="text-peach"></ion-icon>\n    </button>\n  </ion-footer>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/aashijit/Paperdocks/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map