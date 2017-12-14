webpackJsonp([1,5],{

/***/ 375:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 375;


/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(532);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            console.log('here', $('#loader'));
            $('#loader').delay(1000).fadeOut('slow');
        });
    };
    AboutUsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__(627),
            styles: [__webpack_require__(591)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/about-us.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(628),
            styles: [__webpack_require__(592)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/app.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_page_home_page_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_us_about_us_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cmp_services_custom_web_development_custom_web_development_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cmp_services_web_design_web_design_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cmp_services_testing_qa_testing_qa_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cmp_services_support_service_support_service_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cmp_services_internet_marketing_internet_marketing_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__client_experience_client_experience_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_us_contact_us_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__career_career_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__cmp_services_custom_web_development_custom_php_development_custom_php_development_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__cmp_services_custom_web_development_custom_web_development_home_custom_web_development_home_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__cmp_services_custom_web_development_e_commerce_e_commerce_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__cmp_services_custom_web_development_cms_customisation_cms_customisation_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__cmp_services_web_design_web_design_home_web_design_home_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__cmp_services_web_design_web_development_web_development_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__cmp_services_web_design_graphics_design_graphics_design_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__cmp_services_web_design_psd_to_html_psd_to_html_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_service_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__team_team_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__blog_blog_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__portfolio_portfolio_component__ = __webpack_require__(529);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'about-us', component: __WEBPACK_IMPORTED_MODULE_7__about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: 'service', component: __WEBPACK_IMPORTED_MODULE_24__service_service_component__["a" /* ServiceComponent */] },
    { path: 'services', children: [
            { path: 'custom_web_development', component: __WEBPACK_IMPORTED_MODULE_8__cmp_services_custom_web_development_custom_web_development_component__["a" /* CustomWebDevelopmentComponent */], children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_17__cmp_services_custom_web_development_custom_web_development_home_custom_web_development_home_component__["a" /* CustomWebDevelopmentHomeComponent */] },
                    { path: 'custom_php_development', component: __WEBPACK_IMPORTED_MODULE_16__cmp_services_custom_web_development_custom_php_development_custom_php_development_component__["a" /* CustomPhpDevelopmentComponent */] },
                    { path: 'e-commerce', component: __WEBPACK_IMPORTED_MODULE_18__cmp_services_custom_web_development_e_commerce_e_commerce_component__["a" /* ECommerceComponent */] },
                    { path: 'cms-customisation', component: __WEBPACK_IMPORTED_MODULE_19__cmp_services_custom_web_development_cms_customisation_cms_customisation_component__["a" /* CmsCustomisationComponent */] }
                ] },
            { path: 'web_design', component: __WEBPACK_IMPORTED_MODULE_9__cmp_services_web_design_web_design_component__["a" /* WebDesignComponent */], children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_20__cmp_services_web_design_web_design_home_web_design_home_component__["a" /* WebDesignHomeComponent */] },
                    { path: 'web_development', component: __WEBPACK_IMPORTED_MODULE_21__cmp_services_web_design_web_development_web_development_component__["a" /* WebDevelopmentComponent */] },
                    { path: 'graphics_design', component: __WEBPACK_IMPORTED_MODULE_22__cmp_services_web_design_graphics_design_graphics_design_component__["a" /* GraphicsDesignComponent */] },
                    { path: 'psd_to_html', component: __WEBPACK_IMPORTED_MODULE_23__cmp_services_web_design_psd_to_html_psd_to_html_component__["a" /* PsdToHtmlComponent */] }
                ] },
            { path: 'testing_qa', component: __WEBPACK_IMPORTED_MODULE_10__cmp_services_testing_qa_testing_qa_component__["a" /* TestingQaComponent */] },
            { path: 'support_service', component: __WEBPACK_IMPORTED_MODULE_11__cmp_services_support_service_support_service_component__["a" /* SupportServiceComponent */] },
            { path: 'internet_marketing', component: __WEBPACK_IMPORTED_MODULE_12__cmp_services_internet_marketing_internet_marketing_component__["a" /* InternetMarketingComponent */] }
        ] },
    { path: 'career', component: __WEBPACK_IMPORTED_MODULE_15__career_career_component__["a" /* CareerComponent */] },
    { path: 'client-experience', component: __WEBPACK_IMPORTED_MODULE_13__client_experience_client_experience_component__["a" /* ClientExperienceComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_27__portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'team', component: __WEBPACK_IMPORTED_MODULE_25__team_team_component__["a" /* TeamComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_26__blog_blog_component__["a" /* BlogComponent */] },
    { path: 'contact-us', component: __WEBPACK_IMPORTED_MODULE_14__contact_us_contact_us_component__["a" /* ContactUsComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__cmp_services_custom_web_development_custom_web_development_component__["a" /* CustomWebDevelopmentComponent */],
                __WEBPACK_IMPORTED_MODULE_9__cmp_services_web_design_web_design_component__["a" /* WebDesignComponent */],
                __WEBPACK_IMPORTED_MODULE_10__cmp_services_testing_qa_testing_qa_component__["a" /* TestingQaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__cmp_services_support_service_support_service_component__["a" /* SupportServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_12__cmp_services_internet_marketing_internet_marketing_component__["a" /* InternetMarketingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__client_experience_client_experience_component__["a" /* ClientExperienceComponent */],
                __WEBPACK_IMPORTED_MODULE_14__contact_us_contact_us_component__["a" /* ContactUsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__career_career_component__["a" /* CareerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__cmp_services_custom_web_development_custom_php_development_custom_php_development_component__["a" /* CustomPhpDevelopmentComponent */],
                __WEBPACK_IMPORTED_MODULE_17__cmp_services_custom_web_development_custom_web_development_home_custom_web_development_home_component__["a" /* CustomWebDevelopmentHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__cmp_services_custom_web_development_e_commerce_e_commerce_component__["a" /* ECommerceComponent */],
                __WEBPACK_IMPORTED_MODULE_19__cmp_services_custom_web_development_cms_customisation_cms_customisation_component__["a" /* CmsCustomisationComponent */],
                __WEBPACK_IMPORTED_MODULE_20__cmp_services_web_design_web_design_home_web_design_home_component__["a" /* WebDesignHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_21__cmp_services_web_design_web_development_web_development_component__["a" /* WebDevelopmentComponent */],
                __WEBPACK_IMPORTED_MODULE_22__cmp_services_web_design_graphics_design_graphics_design_component__["a" /* GraphicsDesignComponent */],
                __WEBPACK_IMPORTED_MODULE_23__cmp_services_web_design_psd_to_html_psd_to_html_component__["a" /* PsdToHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_24__service_service_component__["a" /* ServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_25__team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_26__blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_27__portfolio_portfolio_component__["a" /* PortfolioComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/app.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            console.log('here', $('#loader'));
            $('#loader').delay(1000).fadeOut('slow');
        });
    };
    BlogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-blog',
            template: __webpack_require__(629),
            styles: [__webpack_require__(593)]
        }), 
        __metadata('design:paramtypes', [])
    ], BlogComponent);
    return BlogComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/blog.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CareerComponent = (function () {
    function CareerComponent() {
        this.tabs = ['Career and Development', 'Innovative Technology stack', 'Freedom to learn new technology',
            'Work Life Balance', 'Reward and Recognition', 'Value and Leadership'];
        this.selectedTab = 0;
    }
    CareerComponent.prototype.changeSelectedTab = function (tab) {
        this.selectedTab = tab;
    };
    CareerComponent.prototype.ngOnInit = function () {
    };
    CareerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-career',
            template: __webpack_require__(630),
            styles: [__webpack_require__(594)]
        }), 
        __metadata('design:paramtypes', [])
    ], CareerComponent);
    return CareerComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/career.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientExperienceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientExperienceComponent = (function () {
    function ClientExperienceComponent() {
    }
    ClientExperienceComponent.prototype.ngOnInit = function () {
    };
    ClientExperienceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-client-experience',
            template: __webpack_require__(631),
            styles: [__webpack_require__(595)]
        }), 
        __metadata('design:paramtypes', [])
    ], ClientExperienceComponent);
    return ClientExperienceComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/client-experience.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmsCustomisationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CmsCustomisationComponent = (function () {
    function CmsCustomisationComponent() {
    }
    CmsCustomisationComponent.prototype.ngOnInit = function () {
    };
    CmsCustomisationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-cms-customisation',
            template: __webpack_require__(632),
            styles: [__webpack_require__(596)]
        }), 
        __metadata('design:paramtypes', [])
    ], CmsCustomisationComponent);
    return CmsCustomisationComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/cms-customisation.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPhpDevelopmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomPhpDevelopmentComponent = (function () {
    function CustomPhpDevelopmentComponent() {
    }
    CustomPhpDevelopmentComponent.prototype.ngOnInit = function () {
    };
    CustomPhpDevelopmentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-custom-php-development',
            template: __webpack_require__(633),
            styles: [__webpack_require__(597)]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomPhpDevelopmentComponent);
    return CustomPhpDevelopmentComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/custom-php-development.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomWebDevelopmentHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomWebDevelopmentHomeComponent = (function () {
    function CustomWebDevelopmentHomeComponent() {
    }
    CustomWebDevelopmentHomeComponent.prototype.ngOnInit = function () {
    };
    CustomWebDevelopmentHomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-custom-web-development-home',
            template: __webpack_require__(634),
            styles: [__webpack_require__(598)]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomWebDevelopmentHomeComponent);
    return CustomWebDevelopmentHomeComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/custom-web-development-home.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomWebDevelopmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomWebDevelopmentComponent = (function () {
    function CustomWebDevelopmentComponent() {
    }
    CustomWebDevelopmentComponent.prototype.ngOnInit = function () {
    };
    CustomWebDevelopmentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-custom-web-development',
            template: __webpack_require__(635),
            styles: [__webpack_require__(599)]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomWebDevelopmentComponent);
    return CustomWebDevelopmentComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/custom-web-development.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ECommerceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ECommerceComponent = (function () {
    function ECommerceComponent() {
    }
    ECommerceComponent.prototype.ngOnInit = function () {
    };
    ECommerceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-e-commerce',
            template: __webpack_require__(636),
            styles: [__webpack_require__(600)]
        }), 
        __metadata('design:paramtypes', [])
    ], ECommerceComponent);
    return ECommerceComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/e-commerce.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternetMarketingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InternetMarketingComponent = (function () {
    function InternetMarketingComponent() {
    }
    InternetMarketingComponent.prototype.ngOnInit = function () {
    };
    InternetMarketingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-internet-marketing',
            template: __webpack_require__(637),
            styles: [__webpack_require__(601)]
        }), 
        __metadata('design:paramtypes', [])
    ], InternetMarketingComponent);
    return InternetMarketingComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/internet-marketing.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportServiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupportServiceComponent = (function () {
    function SupportServiceComponent() {
    }
    SupportServiceComponent.prototype.ngOnInit = function () {
    };
    SupportServiceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-support-service',
            template: __webpack_require__(638),
            styles: [__webpack_require__(602)]
        }), 
        __metadata('design:paramtypes', [])
    ], SupportServiceComponent);
    return SupportServiceComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/support-service.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestingQaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestingQaComponent = (function () {
    function TestingQaComponent() {
    }
    TestingQaComponent.prototype.ngOnInit = function () {
    };
    TestingQaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-testing-qa',
            template: __webpack_require__(639),
            styles: [__webpack_require__(603)]
        }), 
        __metadata('design:paramtypes', [])
    ], TestingQaComponent);
    return TestingQaComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/testing-qa.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphicsDesignComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GraphicsDesignComponent = (function () {
    function GraphicsDesignComponent() {
    }
    GraphicsDesignComponent.prototype.ngOnInit = function () {
    };
    GraphicsDesignComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-graphics-design',
            template: __webpack_require__(640),
            styles: [__webpack_require__(604)]
        }), 
        __metadata('design:paramtypes', [])
    ], GraphicsDesignComponent);
    return GraphicsDesignComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/graphics-design.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PsdToHtmlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PsdToHtmlComponent = (function () {
    function PsdToHtmlComponent() {
    }
    PsdToHtmlComponent.prototype.ngOnInit = function () {
    };
    PsdToHtmlComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-psd-to-html',
            template: __webpack_require__(641),
            styles: [__webpack_require__(605)]
        }), 
        __metadata('design:paramtypes', [])
    ], PsdToHtmlComponent);
    return PsdToHtmlComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/psd-to-html.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebDesignHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebDesignHomeComponent = (function () {
    function WebDesignHomeComponent() {
    }
    WebDesignHomeComponent.prototype.ngOnInit = function () {
    };
    WebDesignHomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-web-design-home',
            template: __webpack_require__(642),
            styles: [__webpack_require__(606)]
        }), 
        __metadata('design:paramtypes', [])
    ], WebDesignHomeComponent);
    return WebDesignHomeComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/web-design-home.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebDesignComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebDesignComponent = (function () {
    function WebDesignComponent() {
    }
    WebDesignComponent.prototype.ngOnInit = function () {
    };
    WebDesignComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-web-design',
            template: __webpack_require__(643),
            styles: [__webpack_require__(607)]
        }), 
        __metadata('design:paramtypes', [])
    ], WebDesignComponent);
    return WebDesignComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/web-design.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebDevelopmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebDevelopmentComponent = (function () {
    function WebDevelopmentComponent() {
    }
    WebDevelopmentComponent.prototype.ngOnInit = function () {
    };
    WebDevelopmentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-web-development',
            template: __webpack_require__(644),
            styles: [__webpack_require__(608)]
        }), 
        __metadata('design:paramtypes', [])
    ], WebDevelopmentComponent);
    return WebDevelopmentComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/web-development.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_us__ = __webpack_require__(527);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactUsComponent = (function () {
    function ContactUsComponent(http) {
        this.http = http;
        this.model = new __WEBPACK_IMPORTED_MODULE_4__contact_us__["a" /* ContactUs */]('', '', '', '');
        this.contactUsUrl = '/api/v1/contactUs';
        this.showLabel = false;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent.prototype.dismissLabel = function () {
        this.showLabel = false;
    };
    ContactUsComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            console.log('here', $('#loader'));
            $('#loader').delay(1000).fadeOut('slow');
        });
    };
    ContactUsComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.model);
        var bodyString = JSON.stringify(this.model); // Stringify payload
        console.log(bodyString);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.contactUsUrl, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); }) //...errors if any
            .subscribe(function (res) {
            console.log(res);
            if (res === 'success') {
                _this.showLabel = true;
                _this.model = new __WEBPACK_IMPORTED_MODULE_4__contact_us__["a" /* ContactUs */]('', '', '', '');
            }
        }, function (err) {
            console.log(err);
        });
    };
    ContactUsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-contact-us',
            template: __webpack_require__(645),
            styles: [__webpack_require__(609)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], ContactUsComponent);
    return ContactUsComponent;
    var _a;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/contact-us.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUs; });
var ContactUs = (function () {
    function ContactUs(name, email, telephone, notes) {
        this.name = name;
        this.email = email;
        this.telephone = telephone;
        this.notes = notes;
    }
    return ContactUs;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/contact-us.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            console.log('here', $('#loader'));
            $('#loader').delay(1000).fadeOut('slow');
            $('.slider-active').owlCarousel({
                autoPlay: 800000000,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                items: 1,
                dots: true,
                slideSpeed: 500,
                pagination: true,
                navigation: false,
                loop: true,
                mouseDrag: true,
                singleItem: true,
                transitionStyle: "fade",
                addClassActive: true,
            });
        });
    };
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__(646),
            styles: [__webpack_require__(610)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomePageComponent);
    return HomePageComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/home-page.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            console.log('here', $('#loader'));
            $('#loader').delay(1000).fadeOut('slow');
            var $imagePopup = $('[data-image-popup]');
            /*Image*/
            $imagePopup.magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                },
            });
        });
    };
    PortfolioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__(647),
            styles: [__webpack_require__(611)]
        }), 
        __metadata('design:paramtypes', [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/portfolio.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceComponent = (function () {
    function ServiceComponent() {
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            console.log('here', $('#loader'));
            $('#loader').delay(1000).fadeOut('slow');
        });
    };
    ServiceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-service',
            template: __webpack_require__(648),
            styles: [__webpack_require__(612)]
        }), 
        __metadata('design:paramtypes', [])
    ], ServiceComponent);
    return ServiceComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/service.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            console.log('here', $('#loader'));
            $('#loader').delay(1000).fadeOut('slow');
        });
    };
    TeamComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-team',
            template: __webpack_require__(649),
            styles: [__webpack_require__(613)]
        }), 
        __metadata('design:paramtypes', [])
    ], TeamComponent);
    return TeamComponent;
}());
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/team.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=E:/Work/Web/xwhizz/xwhizz-ui/src/environment.js.map

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".carousel {\n    margin-bottom: 0rem;\n}\n\n.jumbotron {\n    text-align: center;\n}\n\n.about-us {\n  margin-top: 2rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "/* Move down content because we have a fixed navbar that is 50px tall */\nbody {\n  padding-top: 2rem;\n}\n\n.card-extra {\n  text-align: center;\n  padding-top: 5px;\n}\n\n\n/* GLOBAL STYLES\n-------------------------------------------------- */\n/* Padding below the footer and lighter body text */\n/* GLOBAL STYLES\n-------------------------------------------------- */\n/* Padding below the footer and lighter body text */\n\nbody {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  color: #5a5a5a;\n}\n\n.jumbotron {\n    text-align: center;\n}\n\n\n/* Featurettes\n------------------------- */\n\n.featurette-divider {\n  margin: 5rem 0; /* Space out the Bootstrap <hr> more */\n}\n\n/* Thin out the marketing headings */\n.featurette-heading {\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: -.05rem;\n}\n\n\n/* RESPONSIVE CSS\n-------------------------------------------------- */\n\n@media (min-width: 40em) {\n  /* Bump up size of carousel content */\n  .carousel-caption p {\n    margin-bottom: 1.25rem;\n    font-size: 1.25rem;\n    line-height: 1.4;\n  }\n\n  .featurette-heading {\n    font-size: 50px;\n  }\n}\n\n@media (min-width: 62em) {\n  .featurette-heading {\n    margin-top: 7rem;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".carousel {\r\n    margin-bottom: 0rem;\r\n}\r\n\r\n.jumbotron {\r\n    text-align: center;\r\n}\r\n\r\n.career {\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n\r\ndiv.tab {\r\n    float: left;\r\n    border: 1px solid #ccc;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n/* Style the buttons inside the tab */\r\ndiv.tab button {\r\n    display: block;\r\n    background-color: inherit;\r\n    color: black;\r\n    padding: 22px 16px;\r\n    width: 100%;\r\n    border: none;\r\n    outline: none;\r\n    text-align: left;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n}\r\n\r\n/* Change background color of buttons on hover */\r\ndiv.tab button:hover {\r\n    background-color: #ddd;\r\n}\r\n\r\n/* Create an active/current \"tab button\" class */\r\ndiv.tab button.active {\r\n    background-color: #ccc;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".carousel {\n    margin-bottom: 0rem;\n}\n\n.jumbotron {\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".carousel {\r\n    margin-bottom: 0rem;\r\n    margin-top: 7rem;\r\n    height: 160px;\r\n}\r\n\r\n.container {\r\n    margin-top: 2rem;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".carousel {\r\n    margin-bottom: 0rem;\r\n    margin-top: 7rem;\r\n}\r\n\r\n.container {\r\n    margin-top: 2rem;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".carousel {\r\n    margin-bottom: 0rem;\r\n    margin-top: 7rem;\r\n}\r\n\r\n.jumbotron {\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".carousel {\r\n    margin-bottom: 0rem;\r\n}\r\n\r\n.jumbotron {\r\n    text-align: center;\r\n}\r\n\r\n.fixed-top {\r\n  top: 65px;\r\n  z-index: 999;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".carousel {\r\n    margin-bottom: 0rem;\r\n    margin-top: 7rem;\r\n}\r\n\r\n.container {\r\n    margin-top: 2rem;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".carousel {\n    margin-bottom: 0rem;\n}\n\n.jumbotron {\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".carousel {\n    margin-bottom: 0rem;\n}\n\n.jumbotron {\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".carousel {\n    margin-bottom: 0rem;\n}\n\n.jumbotron {\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".carousel {\r\n    margin-bottom: 0rem;\r\n    margin-top: 7rem;\r\n    height: 160px;\r\n}\r\n\r\n.container {\r\n    margin-top: 2rem;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".carousel {\r\n    margin-bottom: 0rem;\r\n    margin-top: 7rem;\r\n    height: 160px;\r\n}\r\n\r\n.container {\r\n    margin-top: 2rem;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".carousel {\r\n    margin-bottom: 0rem;\r\n    margin-top: 7rem;\r\n}\r\n\r\n.jumbotron {\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".carousel {\r\n    margin-bottom: 0rem;\r\n}\r\n\r\n.jumbotron {\r\n    text-align: center;\r\n}\r\n\r\n.fixed-top {\r\n  top: 65px;\r\n  z-index: 999;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".carousel {\r\n    margin-bottom: 0rem;\r\n    margin-top: 7rem;\r\n}\r\n\r\n.container {\r\n    margin-top: 2rem;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".carousel {\n    margin-bottom: 0rem;\n}\n\n.jumbotron {\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = "<div id=\"loader\" class=\"pageload-overlay\" data-opening=\"M 40,-65 145,80 -65,80 40,-65\" data-closing=\"m 40,-65 0,0 L -65,80 40,-65\">\n  <svg  width=\"100%\" height=\"100%\" viewBox=\"0 0 80 60\" preserveAspectRatio=\"none\">\n    <path d=\"M 40,-65 145,80 40,-65\"/>\n  </svg>\n</div>\n<!-- /pageload-overlay -->\n  <div class=\"breadcrumbs image-space overlay-theme-col\" style=\"background-image: url(assets/images/section-banner.jpeg)\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"breadcrumbs-inner\">\n            <div class=\"breadcrumbs-title\">\n              <h1>About us</h1>\n            </div>\n            <div class=\"breadcrumbs-menu\">\n              <ul class=\"list-inline\">\n                <li><a href=\"index.html\">Home /</a></li>\n                <li>About us</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <section  class=\"about-section-one white-bg\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"m-text-head text-center\">\n            <h2 class=\"m-text-title\">About us</h2>\n            <p><b>Xwhizz</b> is a professional software, website development company based in india that endeavor on highly proficient, timely delivered and cost effective software, website development services. We are <b>highly experienced</b> in offering offshore software development and project management.</p>\n          </div>\n\n          <div class=\"page-header-image\">\n            <img src=\"assets/images/about-full-image.jpeg\" class=\"img-responsive\" alt=\"About\">\n          </div>\n          <div class=\"info-page-content-wrapper\">\n            <div class=\"info-page-content-wrapper-inner\">\n              <p>Some of our services include <b>Strategic Technology Consulting, System Integration & Software Development, </b>Enterprise Resource Planning (ERP), Client server application, E-commerce software development, Content management development, E-governance software, Web application development, Database application development.</p>\n              <p>In a short span of time Xwhizz technology has developed business relationship with a reputed clientele all over the india and outside india. Today, we provide services, support and solutions to clients in various industry verticals.</p>\n              <p>Our key to success is the durability and long term relation with our customer build by rich IT expertise hard work and systematic approach to every task.</p>\n              <p>A few from the industry verticals that we work closely are cutting edge technology companies, renown hospitality institutions, retail coupon redemption services, financial sectors.</p>\n              <p><strong>Our work style</strong></p>\n              <p><b>Personal Approach.</b> We thoroughly examine each customer’s case. Depending on the project requirements, we engage a dedicated team of business analysts to analyze and understand clients' specific objectives and needs to find a solution that meets them.</p>\n              <p><b>Dedicated teams.</b> We ensure our customer for excellent result by assigning dedicated team of various expert through out project development.</p>\n              <p><b>Procedure oriented.</b> We follow effective procedure for development process, quality management and communication system.</p>\n              <div class=\"clearfix\"></div>\n\n              <!--<div class=\"counter-wrapper\">\n                  <div class=\"row text-center\">\n                      <div class=\"col-md-3 col-sm-3 col-xs-12 width-set-50\">\n                          <div class=\"information\">\n                              <i class=\"fa fa-thumbs-o-up\"></i>\n                              <h2 class='counter' data-slno='1' data-min='0' data-max='275' data-delay='.9' data-increment=1>275</h2>\n                              <h5>project done</h5>\n                          </div>\n                      </div>\n                      <div class=\"col-md-3 col-sm-3 col-xs-12 width-set-50\">\n                          <div class=\"information\">\n                              <i class=\"fa fa-coffee\"></i>\n                              <h2 class='counter' data-slno='1' data-min='0' data-max='153' data-delay='.1' data-increment=1>153</h2>\n                              <h5>cup of coffee</h5>\n                          </div>\n                      </div>\n                      <div class=\"col-md-3 col-sm-3 col-xs-12 width-set-50\">\n                          <div class=\"information\">\n                              <i class=\"fa fa-trophy\"></i>\n                              <h2 class='counter' data-slno='1' data-min='0' data-max='50' data-delay='.8' data-increment=1>50</h2>\n                              <h5>awards won</h5>\n                          </div>\n                      </div>\n                      <div class=\"col-md-3 col-sm-3 col-xs-12 width-set-50\">\n                          <div class=\"information\">\n                              <i class=\"fa fa-smile-o\"></i>\n                              <h2 class='counter' data-slno='1' data-min='0' data-max='3525' data-delay='.9' data-increment=1>3525</h2>\n                              <h5>happy clients</h5>\n                          </div>\n                      </div>\n\n                  </div>\n                  <script>\n                      jQuery(document).ready(function ($) {\n                          $('.counter').counterUp({\n                              delay: 10,\n                              time: 1000\n                          });\n                      });\n                  </script>\n              </div>-->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!--<section  class=\"about-section-two white-bg\" id=\"testimonial\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"m-text-head text-center\">\n          <h2 class=\"m-text-title\">Testimonial</h2>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt suscipit, quibusdam aliquid voluptates, blanditiis quis quae.</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col col-md-6\">\n          <div class=\"media\">\n            <div class=\"media-left\">\n              <a href=\"#\">\n                <img src=\"assets/images/test-image.png\" alt=\"testimonial-image\">\n              </a>\n            </div>\n            <div class=\"media-body\">\n              <a href=\"#\"><h4 class=\"media-heading\">Jonathon Andrew</h4></a>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col col-md-6\">\n          <div class=\"media\">\n            <div class=\"media-left\">\n              <a href=\"#\">\n                <img src=\"assets/images/test-image.png\" alt=\"testimonial-image\">\n              </a>\n            </div>\n            <div class=\"media-body\">\n              <a href=\"#\"><h4 class=\"media-heading\">Jonathon Andrew</h4></a>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col col-md-6\">\n          <div class=\"media\">\n            <div class=\"media-left\">\n              <a href=\"#\">\n                <img src=\"assets/images/test-image.png\" alt=\"testimonial-image\">\n              </a>\n            </div>\n            <div class=\"media-body\">\n              <a href=\"#\"><h4 class=\"media-heading\">Jonathon Andrew</h4></a>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col col-md-6\">\n          <div class=\"media\">\n            <div class=\"media-left\">\n              <a href=\"#\">\n                <img src=\"assets/images/test-image.png\" alt=\"testimonial-image\">\n              </a>\n            </div>\n            <div class=\"media-body\">\n              <a href=\"#\"><h4 class=\"media-heading\">Jonathon Andrew</h4></a>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n-->\n"

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\r\n  <!--<div id=\"loader\" class=\"pageload-overlay\" data-opening=\"M 40,-65 145,80 -65,80 40,-65\" data-closing=\"m 40,-65 0,0 L -65,80 40,-65\">\r\n    <svg  width=\"100%\" height=\"100%\" viewBox=\"0 0 80 60\" preserveAspectRatio=\"none\">\r\n      <path d=\"M 40,-65 145,80 40,-65\"/>\r\n    </svg>\r\n  </div>--><!-- /pageload-overlay -->\r\n\r\n  <!--------------Header---------------->\r\n  <header>\r\n    <div class=\"menu-area-fix navbar-fixed-top\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n          <!-- Navigation starts -->\r\n          <div class=\"col-md-12\">\r\n            <div class=\"main-menu\">\r\n              <div class=\"navbar\">\r\n                <div class=\"navbar-header\">\r\n                  <a class=\"navbar-logo\" href=\"#\"><img src=\"assets/images/brand_logo.png\" class=\"img-responsive\" alt=\"logo\"></a>\r\n                  <button  id=\"tog-btn\" type=\"button\" class=\"navbar-toggle menu-toggle-btn\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n                    <span></span>\r\n                    <span></span>\r\n                    <span></span>\r\n                    <span></span>\r\n                    <span></span>\r\n                    <span></span>\r\n                  </button>\r\n\r\n                </div>\r\n\r\n                <div class=\"navbar-collapse collapse\">\r\n                  <nav>\r\n                    <ul class=\"nav navbar-nav navbar-right\">\r\n                      <!--<li class=\"active\"><a href=\"#slider\">Home</a></li>-->\r\n                      <li><a routerLink=\"/\" routerLinkActive=\"active\">Home</a></li>\r\n                      <li><a routerLink=\"/about-us\" routerLinkActive=\"active\">About</a></li>\r\n                      <li><a routerLink=\"/service\" routerLinkActive=\"active\">services</a></li>\r\n                      <li><a routerLink=\"/portfolio\" routerLinkActive=\"active\">portfolio</a></li>\r\n                      <li><a routerLink=\"/team\" routerLinkActive=\"active\">team</a></li>\r\n                      <li><a routerLink=\"/blog\" routerLinkActive=\"active\">blog</a></li>\r\n                      <li><a routerLink=\"/contact-us\" routerLinkActive=\"active\">contact</a></li>\r\n                      <li class=\"button-block\">\r\n                        <a class=\"header-button\" href=\"#\">Get a free quote</a>\r\n                      </li>\r\n                      <!--<li> <a href=\"#\">ru</a></li>-->\r\n                    </ul>\r\n                  </nav>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Navigation ends -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <!-----------------End Header------------------------->\r\n\r\n\r\n  <!------------------Middle-content--------------------->\r\n  <div id=\"main-content\" class=\"middle-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <!-----------------END-------------->\r\n\r\n\r\n  <!----------------Footer------------->\r\n  <footer style=\"margin-top: 100px;\">\r\n    <div class=\"footer-inner footer-bg footer-padd-80\">\r\n      <div class=\"footer-social-links\">\r\n        <div class=\"container\">\r\n          <ul class=\"list-unstyled footer-social-links-inner\">\r\n            <li> <a class=\"facebook\" href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n            <li><a class=\"twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r\n            <li><a class=\"gplus\" href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n            <li><a class=\"pinterest\" href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"container\">\r\n        <div class=\"row footer-list\">\r\n          <div class=\"col-sm-2 col-xs-12\">\r\n            <div class=\"footer-logo\">\r\n              <a href=\"#\"><img src=\"assets/images/brand_logo.png\" class=\"img-responsive\" alt=\"logo\"></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2 col-xs-12\">\r\n            <div class=\"footer-link\">\r\n              <h4>Links</h4>\r\n              <ul class=\"list-unstyled\">\r\n                <li><a routerLink=\"/\" routerLinkActive=\"active\">Company</a></li>\r\n                <li><a routerLink=\"/about-us\" routerLinkActive=\"active\">About</a></li>\r\n                <li><a routerLink=\"/service\" routerLinkActive=\"active\">Services</a></li>\r\n                <li><a routerLink=\"/portfolio\" routerLinkActive=\"active\">Portfolio</a></li>\r\n                <li><a routerLink=\"/team\" routerLinkActive=\"active\">Team</a></li>\r\n                <li><a routerLink=\"/blog\" routerLinkActive=\"active\">Blog</a></li>\r\n                <li><a routerLink=\"/contact-us\" routerLinkActive=\"active\">Contact</a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-3 col-xs-12\">\r\n            <div class=\"footer-link\">\r\n              <h4>Tools</h4>\r\n              <ul class=\"list-unstyled\">\r\n                <!--<li><a href=\"#\">Business name generator</a></li>\r\n                <li><a href=\"#\">App cost calculator | Beta</a></li>-->\r\n                <li><a href=\"#\">Comming Soon</a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-3 col-xs-12\">\r\n            <div class=\"footer-contacts\">\r\n              <h4>Contact Us</h4>\r\n              <ul class=\"list-unstyled\">\r\n                <li> <span class=\"contacts-label\">Phone:</span> <a href=\"tel:+91 (972) 793-0925\"> +91 (972) 793-0925</a></li>\r\n                <li> <span class=\"contacts-label\">Skype:</span> <a href=\"skype:xwhizz.sales\"> xwhizz.sales</a></li>\r\n                <li> <span class=\"contacts-label\">Email:</span> <a href=\"mailto:sales@xwhizz.com\"> sales@xwhizz.com</a></li>\r\n                <li class=\"contact-highlight\"><span class=\"contacts-label\">Or use the</span> <a  routerLink=\"/contact-us\" routerLinkActive=\"active\"> contact form</a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2 col-xs-12\">\r\n            <div class=\"footer-badge\">\r\n              <a href=\"#\">\r\n                <img src=\"assets/images/achievements-badge.png\" alt=\"Achievements\" class=\"achievements-logo\">\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n  <!---------------END----------------->\r\n\r\n  <a href=\"#\" id=\"back-to-top\" class=\"back-to-top fa fa-chevron-up\"></a>\r\n</div>\r\n"

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = "<div id=\"loader\" class=\"pageload-overlay\" data-opening=\"M 40,-65 145,80 -65,80 40,-65\" data-closing=\"m 40,-65 0,0 L -65,80 40,-65\">\n  <svg  width=\"100%\" height=\"100%\" viewBox=\"0 0 80 60\" preserveAspectRatio=\"none\">\n    <path d=\"M 40,-65 145,80 40,-65\"/>\n  </svg>\n</div>\n<!-- /pageload-overlay -->\n<div class=\"breadcrumbs image-space overlay-theme-col\" style=\"background-image: url(assets/images/section-banner.jpeg)\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"breadcrumbs-inner\">\n            <div class=\"breadcrumbs-title\">\n              <h1>BLOG</h1>\n            </div>\n            <div class=\"breadcrumbs-menu\">\n              <ul class=\"list-inline\">\n                <li><a href=\"index.html\">Home /</a></li>\n                <li>Blog</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <section class=\"blog-posts\">\n    <div class=\"blog-posts-inner\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"col-inner\">\n              <div class=\"title-head\">\n                <h2>Latest blog posts</h2>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"projects-list offspace-15\">\n              <div class=\"row\">\n                <div class=\"col-sm-4 width-50\">\n                  <div class=\"col-inner\">\n                    <div class=\"image-hover-effect-01\">\n                      <div class=\"blog-image\">\n                        <a href=\"#\"><img src=\"assets/images/b1.jpg\" class=\"img-responsive\" alt=\"blog-image\"></a>\n                      </div>\n                      <div class=\"blog-image-back\">\n                        <div class=\"blog-image-arrow\">\n                          <div class=\"blog-image-inner\">\n                            <div class=\"blog-port-action\">\n                              <a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <h2 class=\"blog-title\"><a href=\"#\">We have replaced by new design</a></h2>\n                    <span class=\"blog-date\">feb 17, 2016</span>\n                    <p class=\"blog-description\">Eu ferri brute mentitum vel. Pro oporteat persequeris ex, menandri deterruisset ei mei. An omnium fuisset pro oporteat...........</p>\n                    <div class=\"ref-link\"><a>Read more...</a></div>\n                  </div>\n                </div>\n                <div class=\"col-sm-4 width-50\">\n                  <div class=\"col-inner\">\n                    <div class=\"image-hover-effect-01\">\n                      <div class=\"blog-image\">\n                        <a href=\"#\"><img src=\"assets/images/b2.jpg\" class=\"img-responsive\" alt=\"blog-image\"></a>\n                      </div>\n                      <div class=\"blog-image-back\">\n                        <div class=\"blog-image-arrow\">\n                          <div class=\"blog-image-inner\">\n                            <div class=\"blog-port-action\">\n                              <a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <h2 class=\"blog-title\"><a href=\"#\">How to Optimize Your Emails</a></h2>\n                    <span class=\"blog-date\">feb 17, 2016</span>\n                    <p class=\"blog-description\">Eu ferri brute mentitum vel. Pro oporteat persequeris ex, menandri deterruisset ei mei. An omnium fuisset pro oporteat...........</p>\n                    <div class=\"ref-link\"><a>Read more...</a></div>\n                  </div>\n                </div>\n                <div class=\"col-sm-4 width-50\">\n                  <div class=\"col-inner\">\n                    <div class=\"image-hover-effect-01\">\n                      <div class=\"blog-image\">\n                        <a href=\"#\"><img src=\"assets/images/b3.jpg\" class=\"img-responsive\" alt=\"blog-image\"></a>\n                      </div>\n                      <div class=\"blog-image-back\">\n                        <div class=\"blog-image-arrow\">\n                          <div class=\"blog-image-inner\">\n                            <div class=\"blog-port-action\">\n                              <a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <h2 class=\"blog-title\"><a href=\"#\">We have replaced by new design</a></h2>\n                    <span class=\"blog-date\">feb 17, 2016</span>\n                    <p class=\"blog-description\">Eu ferri brute mentitum vel. Pro oporteat persequeris ex, menandri deterruisset ei mei. An omnium fuisset pro oporteat...........</p>\n                    <div class=\"ref-link\"><a>Read more...</a></div>\n                  </div>\n                </div>\n                <div class=\"col-sm-4 width-50\">\n                  <div class=\"col-inner\">\n                    <div class=\"image-hover-effect-01\">\n                      <div class=\"blog-image\">\n                        <a href=\"#\"><img src=\"assets/images/b3.jpg\" class=\"img-responsive\" alt=\"blog-image\"></a>\n                      </div>\n                      <div class=\"blog-image-back\">\n                        <div class=\"blog-image-arrow\">\n                          <div class=\"blog-image-inner\">\n                            <div class=\"blog-port-action\">\n                              <a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <h2 class=\"blog-title\"><a href=\"#\">We have replaced by new design</a></h2>\n                    <span class=\"blog-date\">feb 17, 2016</span>\n                    <p class=\"blog-description\">Eu ferri brute mentitum vel. Pro oporteat persequeris ex, menandri deterruisset ei mei. An omnium fuisset pro oporteat...........</p>\n                    <div class=\"ref-link\"><a>Read more...</a></div>\n                  </div>\n                </div>\n                <div class=\"col-sm-4 width-50\">\n                  <div class=\"col-inner\">\n                    <div class=\"image-hover-effect-01\">\n                      <div class=\"blog-image\">\n                        <a href=\"#\"><img src=\"assets/images/b1.jpg\" class=\"img-responsive\" alt=\"blog-image\"></a>\n                      </div>\n                      <div class=\"blog-image-back\">\n                        <div class=\"blog-image-arrow\">\n                          <div class=\"blog-image-inner\">\n                            <div class=\"blog-port-action\">\n                              <a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <h2 class=\"blog-title\"><a href=\"#\">We have replaced by new design</a></h2>\n                    <span class=\"blog-date\">feb 17, 2016</span>\n                    <p class=\"blog-description\">Eu ferri brute mentitum vel. Pro oporteat persequeris ex, menandri deterruisset ei mei. An omnium fuisset pro oporteat...........</p>\n                    <div class=\"ref-link\"><a>Read more...</a></div>\n                  </div>\n                </div>\n                <div class=\"col-sm-4 width-50\">\n                  <div class=\"col-inner\">\n                    <div class=\"image-hover-effect-01\">\n                      <div class=\"blog-image\">\n                        <a href=\"#\"><img src=\"assets/images/b2.jpg\" class=\"img-responsive\" alt=\"blog-image\"></a>\n                      </div>\n                      <div class=\"blog-image-back\">\n                        <div class=\"blog-image-arrow\">\n                          <div class=\"blog-image-inner\">\n                            <div class=\"blog-port-action\">\n                              <a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <h2 class=\"blog-title\"><a href=\"#\">How to Optimize Your Emails</a></h2>\n                    <span class=\"blog-date\">feb 17, 2016</span>\n                    <p class=\"blog-description\">Eu ferri brute mentitum vel. Pro oporteat persequeris ex, menandri deterruisset ei mei. An omnium fuisset pro oporteat...........</p>\n                    <div class=\"ref-link\"><a>Read more...</a></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n"

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    <div class=\"carousel-item active\">\r\n      <img class=\"first-slide\" src=\"assets/images/career-banner.jpg\" alt=\"First slide\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption d-none d-md-block text-left\">\r\n          <h1>Careers</h1>\r\n          <!--<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"container career\">\r\n  <div class=\"blog-header\">\r\n    <div class=\"container\">\r\n      <h1 class=\"blog-title\">Careers</h1>\r\n      <p class=\"lead blog-description\">As per the Xwhizz culture, we encourage our employees to believe in their abilities and their freedom of expression. They are taught to take up challenges and produce quality output.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8 blog-main\">\r\n        <div class=\"blog-post\">\r\n          <h2 class=\"blog-post-title\">Why works with us</h2>\r\n          <p>Xwhizz deliver services to various domain client with there excellence in execution team.\r\n            Xwhizz works on multiple approaches like Agile, Waterfall, Collaborative approach for custom application development.\r\n            We are currently located at Gandhinagar city in Gujarat known as IT hub for Gujarat.</p>\r\n          <hr>\r\n          <h3>Why Xwhizz</h3>\r\n          <p></p>\r\n        </div><!-- /.blog-sidebar -->\r\n      </div><!-- /.row -->\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"tab\">\r\n          <button class=\"tablinks\" [ngClass]=\"{active: selectedTab == 0}\" (click)=\"changeSelectedTab(0)\">Career and Development</button>\r\n          <button class=\"tablinks\" [ngClass]=\"{active: selectedTab == 1}\" (click)=\"changeSelectedTab(1)\">Innovative Technology stack</button>\r\n          <button class=\"tablinks\" [ngClass]=\"{active: selectedTab == 2}\" (click)=\"changeSelectedTab(2)\">Freedom to learn new technology</button>\r\n          <button class=\"tablinks\" [ngClass]=\"{active: selectedTab == 3}\" (click)=\"changeSelectedTab(3)\">Work Life Balance</button>\r\n          <button class=\"tablinks\" [ngClass]=\"{active: selectedTab == 4}\" (click)=\"changeSelectedTab(4)\">Reward and Recognition</button>\r\n          <button class=\"tablinks\" [ngClass]=\"{active: selectedTab == 5}\" (click)=\"changeSelectedTab(5)\">Value and Leadership</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <div id=\"career\" class=\"blog-post\" *ngIf=\"selectedTab == 0\">\r\n          <h3 class=\"blog-post-title\">Career and Development</h3>\r\n          <p>London is the capital city of England.</p>\r\n        </div>\r\n\r\n        <div id=\"innovative\" *ngIf=\"selectedTab == 1\">\r\n          <h3>Innovative Technology stack</h3>\r\n          <p>Paris is the capital of France.</p>\r\n        </div>\r\n\r\n        <div id=\"technology\" *ngIf=\"selectedTab == 2\">\r\n          <h3>Freedom to learn new technology</h3>\r\n          <p>Tokyo is the capital of Japan.</p>\r\n        </div>\r\n\r\n        <div id=\"balance\" *ngIf=\"selectedTab == 3\">\r\n          <h3>Work Life Balance</h3>\r\n          <p>Tokyo is the capital of Japan.</p>\r\n        </div>\r\n\r\n        <div id=\"rewards\" *ngIf=\"selectedTab == 4\">\r\n          <h3>Reward and Recognition</h3>\r\n          <p>Tokyo is the capital of Japan.</p>\r\n        </div>\r\n\r\n        <div id=\"value\" *ngIf=\"selectedTab == 5\">\r\n          <h3>Value and Leadership</h3>\r\n          <p>Tokyo is the capital of Japan.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"carousel-item active\">\n      <img class=\"first-slide\" src=\"assets/images/banner-web-development.png\" alt=\"First slide\">\n      <div class=\"container\">\n        <div class=\"carousel-caption d-none d-md-block text-left\">\n          <!--<h1>Example headline.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>-->\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<div class=\"jumbotron\">\n  <h1>Custom Web Development</h1>\n  <p class=\"lead\">Whether revenue driving online business or personal web portal, the team of expert programmers code </p>\n  <p class=\"lead\">websites in the open source environment that is easily interpreted by intended audience.</p>\n</div>\n\n<!-- Marketing messaging and featurettes\n    ================================================== -->\n<!-- Wrap the rest of the page in another container to center all the content. -->\n\n<div class=\"container marketing\">\n  <!-- Three columns of text below the carousel -->\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/coding.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Custom PHP Web Development</h2>\n      <p>We deliver responsive and custom php solutions as per your unique needs that deliver the mark of excellence in the web industry.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/ecommerce.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>E-commerce Solutions</h2>\n      <p>We build e-commerce webstores that make buying process as easy and enjoyable as possible for your customers. Our e-commerce solutions assure to generate the utmost outcomes.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/cms.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>CMS Customization </h2>\n      <p>With CMS we specialize in developing highly stable and content rich website to match trending aspects. We customize open source CMS applications where you have superior control over the content of your website.</p>\n    </div><!-- /.col-lg-4 -->\n  </div><!-- /.row -->\n</div>\n"

/***/ }),

/***/ 632:
/***/ (function(module, exports) {

module.exports = "<div class=\"img-inner-top\">\r\n  <img src=\"assets/images/cms_inner_banner.png\">\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6 col-lg-4\">\r\n      <h2>Heading</h2>\r\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n    </div><!--/span-->\r\n    <div class=\"col-6 col-lg-4\">\r\n      <h2>Heading</h2>\r\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n    </div><!--/span-->\r\n    <div class=\"col-6 col-lg-4\">\r\n      <h2>Heading</h2>\r\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n    </div><!--/span-->\r\n    <div class=\"col-6 col-lg-4\">\r\n      <h2>Heading</h2>\r\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n    </div><!--/span-->\r\n    <div class=\"col-6 col-lg-4\">\r\n      <h2>Heading</h2>\r\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n    </div><!--/span-->\r\n    <div class=\"col-6 col-lg-4\">\r\n      <h2>Heading</h2>\r\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n    </div><!--/span-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 633:
/***/ (function(module, exports) {

module.exports = "<div class=\"img-inner-top\">\r\n  <img src=\"assets/images/php_inner_banner.png\">\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <h2 class=\"display-4\">Loreum epsum</h2>\r\n  <p class=\"lead\">\r\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum dolor, nec dictum lorem. Aenean malesuada id leo a suscipit. Quisque egestas nulla a accumsan tincidunt. Mauris scelerisque sapien quis nulla aliquam, quis egestas urna tincidunt. Etiam mollis felis ut urna laoreet varius. Etiam ac dignissim risus. Vestibulum imperdiet odio eu vehicula tempus. Integer at ipsum sapien. Quisque placerat dictum turpis, in posuere augue lobortis vitae.\r\n  </p>\r\n  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>\r\n  <ul>\r\n    <li>Experience in designing and implementing test automation frameworks (modular, data-driven, keyword-driven, hybrid, and descriptive).</li>\r\n    <li>Technology expertise in implementing custom automation harness and utilities in various languages such as C#, Java, Perl, Ruby, and Python.</li>\r\n    <li>Proven expertise in industry’s leading testing tools such as HP QuickTest Pro, IBM Rational Robot, MS Visual Studio, TestComplete, SilkTest, and eggPlant.</li>\r\n    <li>Strong capabilities in emerging open-source testing tools such as Selenium, Watir, Sahi.</li>\r\n    <li>Strong competencies in technologies such as BDD (Cucumber, RSpec, SpecFlow), JavaScript testing (Jasmine, Mocha, Karma, and Protractor).</li>\r\n    <li>Extensive skills in mobile test automation using both licensed and open-source solutions such as Robotium, Appium, Calabash, and MonkeyTalk.</li>\r\n    <li>Expertise in integration of test automation with continuous integration (CI) tools (Jenkins, TFS, and TeamCity).</li>\r\n    <li>Strong technology leadership and consultancy by QA industry veterans.</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ 634:
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    <div class=\"carousel-item active\">\r\n      <img class=\"first-slide\" src=\"assets/images/banner-web-development.png\" alt=\"First slide\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption d-none d-md-block text-left\">\r\n          <!--<h1>Example headline.</h1>\r\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"jumbotron\">\r\n  <h1>Custom Web Development</h1>\r\n  <p class=\"lead\">Whether revenue driving online business or personal web portal, the team of expert programmers code </p>\r\n  <p class=\"lead\">websites in the open source environment that is easily interpreted by intended audience.</p>\r\n</div>\r\n\r\n<!-- Marketing messaging and featurettes\r\n    ================================================== -->\r\n<!-- Wrap the rest of the page in another container to center all the content. -->\r\n\r\n<div class=\"container marketing\">\r\n  <!-- Three columns of text below the carousel -->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <a routerLink=\"custom_php_development\" routerLinkActive=\"active\"><img class=\"rounded-circle\" src=\"assets/images/coding.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n        <h2>Custom PHP Web Development</h2></a>\r\n      <p>We deliver responsive and custom php solutions as per your unique needs that deliver the mark of excellence in the web industry.</p>\r\n    </div><!-- /.col-lg-4 -->\r\n    <div class=\"col-lg-4\">\r\n      <a routerLink=\"e-commerce\" routerLinkActive=\"active\"><img class=\"rounded-circle\" src=\"assets/images/ecommerce.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n        <h2>E-commerce Solutions</h2></a>\r\n      <p>We build e-commerce webstores that make buying process as easy and enjoyable as possible for your customers. Our e-commerce solutions assure to generate the utmost outcomes.</p>\r\n    </div><!-- /.col-lg-4 -->\r\n    <div class=\"col-lg-4\">\r\n      <a routerLink=\"cms-customisation\" routerLinkActive=\"active\"><img class=\"rounded-circle\" src=\"assets/images/cms.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n        <h2>CMS Customization </h2></a>\r\n      <p>With CMS we specialize in developing highly stable and content rich website to match trending aspects. We customize open source CMS applications where you have superior control over the content of your website.</p>\r\n    </div><!-- /.col-lg-4 -->\r\n  </div><!-- /.row -->\r\n</div>\r\n"

/***/ }),

/***/ 635:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <nav class=\"navbar navbar-toggleable-md navbar-light fixed-top bg-faded\">\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <a routerLink=\"/services/custom_web_development\" routerLinkActive=\"active\"><img src=\"/assets/images/service-car-icon-png-2430.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\r\n      Web Development</a>\r\n    </a>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"custom_php_development\" routerLinkActive=\"active\">PhP <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"e-commerce\" routerLinkActive=\"active\">E-Commerce <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"cms-customisation\" routerLinkActive=\"active\">CMS <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</div>\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

module.exports = "<div class=\"img-inner-top\">\r\n  <img src=\"assets/images/ecommars-inner-banner.png\">\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"blog-header\">\r\n    <div class=\"container\">\r\n      <h1 class=\"blog-title\">The Bootstrap Blog</h1>\r\n      <p class=\"lead blog-description\">An example blog template built with Bootstrap.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8 blog-main\">\r\n        <div class=\"blog-post\">\r\n          <h2 class=\"blog-post-title\">Sample blog post</h2>\r\n          <p class=\"blog-post-meta\">January 1, 2014 by <a href=\"#\">Mark</a></p>\r\n\r\n          <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>\r\n          <hr>\r\n          <p>Cum sociis natoque penatibus et magnis <a href=\"#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>\r\n          <blockquote>\r\n            <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n          </blockquote>\r\n          <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>\r\n          <h2>Heading</h2>\r\n          <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\r\n          <h3>Sub-heading</h3>\r\n          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\r\n          <pre><code>Example code block</code></pre>\r\n          <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>\r\n          <h3>Sub-heading</h3>\r\n          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\r\n          <ul>\r\n            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>\r\n            <li>Donec id elit non mi porta gravida at eget metus.</li>\r\n            <li>Nulla vitae elit libero, a pharetra augue.</li>\r\n          </ul>\r\n          <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>\r\n          <ol>\r\n            <li>Vestibulum id ligula porta felis euismod semper.</li>\r\n            <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\r\n            <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>\r\n          </ol>\r\n          <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>\r\n        </div><!-- /.blog-post -->\r\n\r\n        <div class=\"blog-post\">\r\n          <h2 class=\"blog-post-title\">Another blog post</h2>\r\n          <p class=\"blog-post-meta\">December 23, 2013 by <a href=\"#\">Jacob</a></p>\r\n\r\n          <p>Cum sociis natoque penatibus et magnis <a href=\"#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>\r\n          <blockquote>\r\n            <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n          </blockquote>\r\n          <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>\r\n          <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\r\n        </div><!-- /.blog-post -->\r\n\r\n        <div class=\"blog-post\">\r\n          <h2 class=\"blog-post-title\">New feature</h2>\r\n          <p class=\"blog-post-meta\">December 14, 2013 by <a href=\"#\">Chris</a></p>\r\n\r\n          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\r\n          <ul>\r\n            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>\r\n            <li>Donec id elit non mi porta gravida at eget metus.</li>\r\n            <li>Nulla vitae elit libero, a pharetra augue.</li>\r\n          </ul>\r\n          <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>\r\n          <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>\r\n        </div><!-- /.blog-post -->\r\n\r\n        <nav class=\"blog-pagination\">\r\n          <a class=\"btn btn-outline-primary\" href=\"#\">Older</a>\r\n          <a class=\"btn btn-outline-secondary disabled\" href=\"#\">Newer</a>\r\n        </nav>\r\n\r\n      </div><!-- /.blog-main -->\r\n\r\n      <div class=\"col-sm-3 offset-sm-1 blog-sidebar\">\r\n        <div class=\"sidebar-module sidebar-module-inset\">\r\n          <h4>About</h4>\r\n          <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>\r\n        </div>\r\n        <div class=\"sidebar-module\">\r\n          <h4>Archives</h4>\r\n          <ol class=\"list-unstyled\">\r\n            <li><a href=\"#\">March 2014</a></li>\r\n            <li><a href=\"#\">February 2014</a></li>\r\n            <li><a href=\"#\">January 2014</a></li>\r\n            <li><a href=\"#\">December 2013</a></li>\r\n            <li><a href=\"#\">November 2013</a></li>\r\n            <li><a href=\"#\">October 2013</a></li>\r\n            <li><a href=\"#\">September 2013</a></li>\r\n            <li><a href=\"#\">August 2013</a></li>\r\n            <li><a href=\"#\">July 2013</a></li>\r\n            <li><a href=\"#\">June 2013</a></li>\r\n            <li><a href=\"#\">May 2013</a></li>\r\n            <li><a href=\"#\">April 2013</a></li>\r\n          </ol>\r\n        </div>\r\n        <div class=\"sidebar-module\">\r\n          <h4>Elsewhere</h4>\r\n          <ol class=\"list-unstyled\">\r\n            <li><a href=\"#\">GitHub</a></li>\r\n            <li><a href=\"#\">Twitter</a></li>\r\n            <li><a href=\"#\">Facebook</a></li>\r\n          </ol>\r\n        </div>\r\n      </div><!-- /.blog-sidebar -->\r\n\r\n    </div><!-- /.row -->\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 637:
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"carousel-item active\">\n      <img class=\"first-slide\" src=\"assets/images/banner-seo.png\" alt=\"First slide\">\n      <div class=\"container\">\n        <div class=\"carousel-caption d-none d-md-block text-left\">\n          <!--<h1>Example headline.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>-->\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<div class=\"jumbotron\">\n  <h1>Internet Marketing</h1>\n  <p class=\"lead\">Refers to advertising/marketing. We lead you to Top and make you Visible, you gain the Traffic and Convert to customers.</p>\n</div>\n\n<!-- Marketing messaging and featurettes\n    ================================================== -->\n<!-- Wrap the rest of the page in another container to center all the content. -->\n\n<div class=\"container marketing\">\n  <!-- Three columns of text below the carousel -->\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/seo.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>SEO Internet Marketing Services</h2>\n      <p>We plan and cater white-hat SEO techniques to optmize your online presence on the web and turn visitors to customers.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/optimization.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Social Media Optimization</h2>\n      <p>We socialize your visibility on different social platforms and help build awareness of your brand and its product/services.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/ppc.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Pay Per Click Advertising</h2>\n      <p>We help you in getting your PPC campaign cost effective which in turn gives you maximum clicks and expected results.</p>\n    </div><!-- /.col-lg-4 -->\n  </div><!-- /.row -->\n</div>\n"

/***/ }),

/***/ 638:
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"carousel-item active\">\n      <img class=\"first-slide\" src=\"assets/images/banner-web-design.png\" alt=\"First slide\">\n      <div class=\"container\">\n        <div class=\"carousel-caption d-none d-md-block text-left\">\n          <!--<h1>Example headline.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>-->\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<div class=\"jumbotron\">\n  <h1>Custom Web Development</h1>\n  <p class=\"lead\">Whether revenue driving online business or personal web portal, the team of expert programmers code </p>\n  <p class=\"lead\">websites in the open source environment that is easily interpreted by intended audience.</p>\n</div>\n\n<!-- Marketing messaging and featurettes\n    ================================================== -->\n<!-- Wrap the rest of the page in another container to center all the content. -->\n\n<div class=\"container marketing\">\n  <!-- Three columns of text below the carousel -->\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/software-architecture.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Custom PHP Web Development</h2>\n      <p>We deliver responsive and custom php solutions as per your unique needs that deliver the mark of excellence in the web industry.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/ux.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>E-commerce Solutions</h2>\n      <p>We build e-commerce webstores that make buying process as easy and enjoyable as possible for your customers. Our e-commerce solutions assure to generate the utmost outcomes.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/qa.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>CMS Customization </h2>\n      <p>With CMS we specialize in developing highly stable and content rich website to match trending aspects. We customize open source CMS applications where you have superior control over the content of your website.</p>\n    </div><!-- /.col-lg-4 -->\n  </div><!-- /.row -->\n</div>\n"

/***/ }),

/***/ 639:
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"carousel-item active\">\n      <img class=\"first-slide\" src=\"assets/images/banner-web-design.png\" alt=\"First slide\">\n      <div class=\"container\">\n        <div class=\"carousel-caption d-none d-md-block text-left\">\n          <!--<h1>Example headline.</h1>\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>-->\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<div class=\"jumbotron\">\n  <h1>Testing & QA</h1>\n  <p class=\"lead\">Whether revenue driving online business or personal web portal, the team of expert programmers code </p>\n  <p class=\"lead\">websites in the open source environment that is easily interpreted by intended audience.</p>\n</div>\n\n<!-- Marketing messaging and featurettes\n    ================================================== -->\n<!-- Wrap the rest of the page in another container to center all the content. -->\n\n<div class=\"container marketing\">\n  <!-- Three columns of text below the carousel -->\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/software-architecture.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>Custom PHP Web Development</h2>\n      <p>We deliver responsive and custom php solutions as per your unique needs that deliver the mark of excellence in the web industry.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/ux.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>E-commerce Solutions</h2>\n      <p>We build e-commerce webstores that make buying process as easy and enjoyable as possible for your customers. Our e-commerce solutions assure to generate the utmost outcomes.</p>\n    </div><!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <img class=\"rounded-circle\" src=\"assets/images/qa.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <h2>CMS Customization </h2>\n      <p>With CMS we specialize in developing highly stable and content rich website to match trending aspects. We customize open source CMS applications where you have superior control over the content of your website.</p>\n    </div><!-- /.col-lg-4 -->\n  </div><!-- /.row -->\n</div>\n"

/***/ }),

/***/ 640:
/***/ (function(module, exports) {

module.exports = "<div class=\"img-inner-top\">\r\n  <img src=\"assets/images/graphics-design-inner-banner.jpg\">\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6 col-lg-4\">\r\n      <h2>Heading</h2>\r\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n    </div><!--/span-->\r\n    <div class=\"col-6 col-lg-4\">\r\n      <h2>Heading</h2>\r\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n    </div><!--/span-->\r\n    <div class=\"col-6 col-lg-4\">\r\n      <h2>Heading</h2>\r\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n    </div><!--/span-->\r\n    <div class=\"col-6 col-lg-4\">\r\n      <h2>Heading</h2>\r\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n    </div><!--/span-->\r\n    <div class=\"col-6 col-lg-4\">\r\n      <h2>Heading</h2>\r\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n    </div><!--/span-->\r\n    <div class=\"col-6 col-lg-4\">\r\n      <h2>Heading</h2>\r\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n    </div><!--/span-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 641:
/***/ (function(module, exports) {

module.exports = "<div class=\"img-inner-top\">\r\n  <img src=\"assets/images/psd-html-inner-banner.jpg\">\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <h2 class=\"display-4\">Loreum epsum</h2>\r\n  <p class=\"lead\">\r\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum dolor, nec dictum lorem. Aenean malesuada id leo a suscipit. Quisque egestas nulla a accumsan tincidunt. Mauris scelerisque sapien quis nulla aliquam, quis egestas urna tincidunt. Etiam mollis felis ut urna laoreet varius. Etiam ac dignissim risus. Vestibulum imperdiet odio eu vehicula tempus. Integer at ipsum sapien. Quisque placerat dictum turpis, in posuere augue lobortis vitae.\r\n  </p>\r\n  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>\r\n  <ul>\r\n    <li>Experience in designing and implementing test automation frameworks (modular, data-driven, keyword-driven, hybrid, and descriptive).</li>\r\n    <li>Technology expertise in implementing custom automation harness and utilities in various languages such as C#, Java, Perl, Ruby, and Python.</li>\r\n    <li>Proven expertise in industry’s leading testing tools such as HP QuickTest Pro, IBM Rational Robot, MS Visual Studio, TestComplete, SilkTest, and eggPlant.</li>\r\n    <li>Strong capabilities in emerging open-source testing tools such as Selenium, Watir, Sahi.</li>\r\n    <li>Strong competencies in technologies such as BDD (Cucumber, RSpec, SpecFlow), JavaScript testing (Jasmine, Mocha, Karma, and Protractor).</li>\r\n    <li>Extensive skills in mobile test automation using both licensed and open-source solutions such as Robotium, Appium, Calabash, and MonkeyTalk.</li>\r\n    <li>Expertise in integration of test automation with continuous integration (CI) tools (Jenkins, TFS, and TeamCity).</li>\r\n    <li>Strong technology leadership and consultancy by QA industry veterans.</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ 642:
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    <div class=\"carousel-item active\">\r\n      <img class=\"first-slide\" src=\"assets/images/banner-web-design.png\" alt=\"First slide\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption d-none d-md-block text-left\">\r\n          <!--<h1>Example headline.</h1>\r\n          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n          <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"jumbotron\">\r\n  <h1>Web Design</h1>\r\n  <p class=\"lead\">Great web design without functionality is like a sports car with no engine” We are capable of providing captivating design solutions and hold expertise in delivering a flawless and memorable user experience across multiple devices.</p>\r\n</div>\r\n\r\n<!-- Marketing messaging and featurettes\r\n    ================================================== -->\r\n<!-- Wrap the rest of the page in another container to center all the content. -->\r\n\r\n<div class=\"container marketing\">\r\n  <!-- Three columns of text below the carousel -->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <a routerLink=\"web_development\" routerLinkActive=\"active\"><img class=\"rounded-circle\" src=\"assets/images/webd.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n      <h2>Web Design</h2></a>\r\n      <p>We design by blending innovation, user-friendly, responsive and customized as per the requirements of the clients. We craft affordable web design services solutions that are not platform specific and attracts targeted users.</p>\r\n    </div><!-- /.col-lg-4 -->\r\n    <div class=\"col-lg-4\">\r\n      <a routerLink=\"graphics_design\" routerLinkActive=\"active\"><img class=\"rounded-circle\" src=\"assets/images/UX-Design-.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n        <h2>Graphic Design</h2></a>\r\n      <p>Visually stunning and good appearance matters a lot for engaging your customers thus, we deliver graphic design services that increase conversions and grow your business.</p>\r\n    </div><!-- /.col-lg-4 -->\r\n    <div class=\"col-lg-4\">\r\n      <a routerLink=\"psd_to_html\" routerLinkActive=\"active\"><img class=\"rounded-circle\" src=\"assets/images/p-to-html.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n        <h2>PSD to HTML</h2></a>\r\n      <p>We convert the Photoshop designs to responsive HTML codes according to the clients requirements and assure to reach to wider audience</p>\r\n    </div><!-- /.col-lg-4 -->\r\n  </div><!-- /.row -->\r\n</div>\r\n"

/***/ }),

/***/ 643:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <nav class=\"navbar navbar-toggleable-md navbar-light fixed-top bg-faded\">\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <a routerLink=\"/services/web_design\" routerLinkActive=\"active\"><img src=\"/assets/images/web_design_icon.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\r\n        Web Design</a>\r\n    </a>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"web_development\" routerLinkActive=\"active\">Web <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"graphics_design\" routerLinkActive=\"active\">Graphics <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"psd_to_html\" routerLinkActive=\"active\">PSD-HTML <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</div>\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ 644:
/***/ (function(module, exports) {

module.exports = "<div class=\"img-inner-top\">\r\n  <img src=\"assets/images/banner-responsive-inner.png\">\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"blog-header\">\r\n    <div class=\"container\">\r\n      <h1 class=\"blog-title\">The Bootstrap Blog</h1>\r\n      <p class=\"lead blog-description\">An example blog template built with Bootstrap.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8 blog-main\">\r\n        <div class=\"blog-post\">\r\n          <h2 class=\"blog-post-title\">Sample blog post</h2>\r\n          <p class=\"blog-post-meta\">January 1, 2014 by <a href=\"#\">Mark</a></p>\r\n\r\n          <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>\r\n          <hr>\r\n          <p>Cum sociis natoque penatibus et magnis <a href=\"#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>\r\n          <blockquote>\r\n            <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n          </blockquote>\r\n          <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>\r\n          <h2>Heading</h2>\r\n          <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\r\n          <h3>Sub-heading</h3>\r\n          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\r\n          <pre><code>Example code block</code></pre>\r\n          <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>\r\n          <h3>Sub-heading</h3>\r\n          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\r\n          <ul>\r\n            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>\r\n            <li>Donec id elit non mi porta gravida at eget metus.</li>\r\n            <li>Nulla vitae elit libero, a pharetra augue.</li>\r\n          </ul>\r\n          <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>\r\n          <ol>\r\n            <li>Vestibulum id ligula porta felis euismod semper.</li>\r\n            <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\r\n            <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>\r\n          </ol>\r\n          <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>\r\n        </div><!-- /.blog-post -->\r\n\r\n        <div class=\"blog-post\">\r\n          <h2 class=\"blog-post-title\">Another blog post</h2>\r\n          <p class=\"blog-post-meta\">December 23, 2013 by <a href=\"#\">Jacob</a></p>\r\n\r\n          <p>Cum sociis natoque penatibus et magnis <a href=\"#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>\r\n          <blockquote>\r\n            <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n          </blockquote>\r\n          <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>\r\n          <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\r\n        </div><!-- /.blog-post -->\r\n\r\n        <div class=\"blog-post\">\r\n          <h2 class=\"blog-post-title\">New feature</h2>\r\n          <p class=\"blog-post-meta\">December 14, 2013 by <a href=\"#\">Chris</a></p>\r\n\r\n          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\r\n          <ul>\r\n            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>\r\n            <li>Donec id elit non mi porta gravida at eget metus.</li>\r\n            <li>Nulla vitae elit libero, a pharetra augue.</li>\r\n          </ul>\r\n          <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>\r\n          <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>\r\n        </div><!-- /.blog-post -->\r\n\r\n        <nav class=\"blog-pagination\">\r\n          <a class=\"btn btn-outline-primary\" href=\"#\">Older</a>\r\n          <a class=\"btn btn-outline-secondary disabled\" href=\"#\">Newer</a>\r\n        </nav>\r\n\r\n      </div><!-- /.blog-main -->\r\n\r\n      <div class=\"col-sm-3 offset-sm-1 blog-sidebar\">\r\n        <div class=\"sidebar-module sidebar-module-inset\">\r\n          <h4>About</h4>\r\n          <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>\r\n        </div>\r\n        <div class=\"sidebar-module\">\r\n          <h4>Archives</h4>\r\n          <ol class=\"list-unstyled\">\r\n            <li><a href=\"#\">March 2014</a></li>\r\n            <li><a href=\"#\">February 2014</a></li>\r\n            <li><a href=\"#\">January 2014</a></li>\r\n            <li><a href=\"#\">December 2013</a></li>\r\n            <li><a href=\"#\">November 2013</a></li>\r\n            <li><a href=\"#\">October 2013</a></li>\r\n            <li><a href=\"#\">September 2013</a></li>\r\n            <li><a href=\"#\">August 2013</a></li>\r\n            <li><a href=\"#\">July 2013</a></li>\r\n            <li><a href=\"#\">June 2013</a></li>\r\n            <li><a href=\"#\">May 2013</a></li>\r\n            <li><a href=\"#\">April 2013</a></li>\r\n          </ol>\r\n        </div>\r\n        <div class=\"sidebar-module\">\r\n          <h4>Elsewhere</h4>\r\n          <ol class=\"list-unstyled\">\r\n            <li><a href=\"#\">GitHub</a></li>\r\n            <li><a href=\"#\">Twitter</a></li>\r\n            <li><a href=\"#\">Facebook</a></li>\r\n          </ol>\r\n        </div>\r\n      </div><!-- /.blog-sidebar -->\r\n\r\n    </div><!-- /.row -->\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 645:
/***/ (function(module, exports) {

module.exports = "<div id=\"loader\" class=\"pageload-overlay\" data-opening=\"M 40,-65 145,80 -65,80 40,-65\" data-closing=\"m 40,-65 0,0 L -65,80 40,-65\">\n  <svg  width=\"100%\" height=\"100%\" viewBox=\"0 0 80 60\" preserveAspectRatio=\"none\">\n    <path d=\"M 40,-65 145,80 40,-65\"/>\n  </svg>\n</div>\n<!-- /pageload-overlay -->\n  <div class=\"breadcrumbs image-space overlay-theme-col\" style=\"background-image: url(assets/images/section-banner.jpeg)\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"breadcrumbs-inner\">\n            <div class=\"breadcrumbs-title\">\n              <h1>Contact us</h1>\n            </div>\n            <div class=\"breadcrumbs-menu\">\n              <ul class=\"list-inline\">\n                <li><a href=\"index.html\">Home /</a></li>\n                <li>Contact Us</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<section class=\"contact-wrapper\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        <div class=\"contact-head\">\n          <h2 class=\"small-text\">Get in Touch</h2>\n        </div>\n        <ul class=\"list-creative\">\n          <li>\n            <dl class=\"list-terms-medium list-terms-medium_secondary\">\n              <dt>Address</dt>\n              <dd><a href=\"#\">D-301, Vaidehi Residency, Gandhinagar, Gujarat-382016</a></dd>\n            </dl>\n          </li>\n          <li>\n            <dl class=\"list-terms-medium\">\n              <dt>Phones</dt>\n              <dd>\n                <ul class=\"list-comma\">\n                  <li><a href=\"callto:#\">+91-972-793-0925 </a></li>\n                  <li><a href=\"callto:#\">+1-973-615-3497</a></li>\n                </ul>\n              </dd>\n            </dl>\n          </li>\n          <li>\n            <dl class=\"list-terms-medium list-terms-medium_tertiary\">\n              <dt>E-mail</dt>\n              <dd>\n                <ul class=\"list-comma\">\n                  <li><a href=\"mailto:#\">mail@xwhizz.com</a></li>\n                  <li><a href=\"mailto:#\">info@xwhizz.com</a></li>\n                </ul>\n              </dd>\n            </dl>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-md-7\">\n        <div class=\"contact-head\">\n          <h2 class=\"small-text\">Contact Form</h2>\n        </div>\n        <div class=\"alert alert-success alert-dismissible\" role=\"alert\" [hidden]=\"!showLabel\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" click=\"dismissLabel()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <strong>Well done! You successfully submitted request.</strong>\n        </div>\n        <form class=\"contact-form\" #contactUsForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"range range-sm-bottom range-20\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-wrap\">\n                <input class=\"form-control form-control-has-validation\" placeholder=\"Name\" id=\"name\" [(ngModel)]=\"model.name\" name=\"name\"\n                       #name=\"ngModel\" name=\"name\" required=\"\" type=\"text\"><span class=\"form-validation\">The text field is required.</span>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-wrap\">\n                <input class=\"form-control form-control-has-validation\" placeholder=\"Phone\" id=\"telephone\" [(ngModel)]=\"model.telephone\" name=\"telephone\" #telephone=\"ngModel\" required=\"\" type=\"text\"><span class=\"form-validation\">Only numbers are required</span>\n              </div>\n            </div>\n            <div class=\"col-xs-12\">\n              <div class=\"form-wrap\">\n                <textarea class=\"form-control form-control-has-validation\" placeholder=\"Message\" required=\"\" id=\"notes\" [(ngModel)]=\"model.notes\" name=\"notes\" #notes=\"ngModel\"></textarea><span class=\"form-validation\">The text field is required.</span>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-wrap\">\n                <input class=\"form-control form-control-has-validation\" placeholder=\"Email\" id=\"email\" placeholder=\"Email Address\" required\n                       [(ngModel)]=\"model.email\" name=\"email\" #email=\"ngModel\" required=\"\" type=\"email\"><span class=\"form-validation\">The text field is required.</span>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <button class=\"button btn-block button-secondary\" type=\"submit\" [disabled]=\"!contactUsForm.form.valid\">Send Message</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 646:
/***/ (function(module, exports) {

module.exports = "<div id=\"loader\" class=\"pageload-overlay\" data-opening=\"M 40,-65 145,80 -65,80 40,-65\" data-closing=\"m 40,-65 0,0 L -65,80 40,-65\">\r\n  <svg  width=\"100%\" height=\"100%\" viewBox=\"0 0 80 60\" preserveAspectRatio=\"none\">\r\n    <path d=\"M 40,-65 145,80 40,-65\"/>\r\n  </svg>\r\n</div>\r\n<!-- /pageload-overlay -->\r\n<div class=\"slider-active owl-carousel owl-theme\">\r\n  <div style=\"background-image: url(assets/images/bg-1.png);\" class=\"sliders-responsive main-slider-area bg-oapcity-40 slider-active-fix\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"home-sliders clearfix mid-mrg\">\r\n          <div class=\"col-md-8 col-sm-9\">\r\n            <div class=\"top-text pt-65 mid-mrg\">\r\n              <div class=\"slider-text\">\r\n                <p>We combine innovative ideas with</p>\r\n                <h2>Global Technology</h2>\r\n                <p>At Xwhizz Technology we provide business solutions to move faster</p>\r\n                <!--<div class=\"button-set\">\r\n                  <a href=\"#\" class=\"button\">\r\n                    DOWNLOAD\r\n                  </a>\r\n                  <a href=\"#\" class=\"button default\">\r\n                    learn more\r\n                  </a>\r\n                </div>-->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 col-sm-3\">\r\n            <div class=\"slider-img\">\r\n              <img class=\"img-responsive\" alt=\"phone-image\" src=\"assets/images/phone-image.png\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"background-image: url(assets/images/bg-2.png)\" class=\"sliders-responsive main-slider-area bg-oapcity-40 slider-active-fix\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"home-sliders clearfix mid-mrg\">\r\n          <div class=\"col-md-8 col-sm-9\">\r\n            <div class=\"top-text pt-65 mid-mrg\">\r\n              <div class=\"slider-text\">\r\n                <p>Build Faster</p>\r\n                <h2>Better Software</h2>\r\n                <p>At Xwhizz Technology We Live To Solve Problems With Software.</p>\r\n                <!--<div class=\"button-set\">\r\n                  <a href=\"#\" class=\"button\">\r\n                    DOWNLOAD\r\n                  </a>\r\n                  <a href=\"#\" class=\"button default\">\r\n                    learn more\r\n                  </a>\r\n                </div>-->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 col-sm-3\">\r\n            <div class=\"slider-img\">\r\n              <img class=\"img-responsive\" alt=\"phone-image\" src=\"assets/images/phone-image.png\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"background-image: url(assets/images/bg-3.png);\" class=\"sliders-responsive main-slider-area bg-oapcity-40 slider-active-fix\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"home-sliders clearfix mid-mrg\">\r\n          <div class=\"col-md-8 col-sm-9\">\r\n            <div class=\"top-text pt-65 mid-mrg\">\r\n              <div class=\"slider-text\">\r\n                <p>SIMPLE SOLUTIONS TO</p>\r\n                <h2>Complex Problems</h2>\r\n                <p>We help great companies design, build, and run amazing software products and services</p>\r\n                <!--<div class=\"button-set\">\r\n                  <a href=\"#\" class=\"button\">\r\n                    DOWNLOAD\r\n                  </a>\r\n                  <a href=\"#\" class=\"button default\">\r\n                    learn more\r\n                  </a>\r\n                </div>-->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 col-sm-3\">\r\n            <div class=\"slider-img\">\r\n              <img class=\"img-responsive\" alt=\"phone-image\" src=\"assets/images/phone-image.png\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--<div class=\"scroll-down\">\r\n  <div class=\"slide-down-btn hidden-xs\">\r\n    <a href=\"\" onclick=\"$('body,html').animate({scrollTop: $('#latest-event').offset().top}, 800);\r\n                           return false;\"><i class=\"fa fa-long-arrow-down\" aria-hidden=\"true\"></i></a>\r\n  </div>\r\n</div>-->\r\n\r\n<!--<section class=\"latest-event-block\" id=\"latest-event\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 col-sm-7\">\r\n        <div class=\"col-inner\">\r\n          <div class=\"code-review\">\r\n            <p> Need an expert code audit or in-depth security analysis for your website or mobile app? Try our source code review service. It's free and performed by our best engineers!\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-5\">\r\n        <div class=\"col-inner\">\r\n          <div class=\"action-btn offspace-10 pull-right\">\r\n            <a class=\"flat-button\" href=\"#\">Request a free code review</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>-->\r\n\r\n<section class=\"about-section-two white-bg\" id=\"testimonial\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"m-text-head text-center\">\r\n        <h2 class=\"m-text-title\">We Serve What is Best for your Business</h2>\r\n        <p>Xwhizz is an software solution company dedicated in delivering subtle Website Development, CMS Development, Ecommerce Web Development, Web Design, Mobile Application and Internet Marketing Solutions.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"feature-project\">\r\n  <div class=\"feature-project-inner\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"col-inner\">\r\n            <div class=\"title-head\">\r\n              <h2>Our Expertise</h2>\r\n              <!--<div class=\"row\">\r\n                <div class=\"col-sm-8\">\r\n                  <div class=\"col-inner\">\r\n                    <p>\r\n                      Xwhizz is a software development company with an ample portfolio of custom websites and mobile apps. See our latest works:\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"col-inner pull-right\">\r\n                    <a class=\"flat-button\" href=\"#\">All projects</a>\r\n                  </div>\r\n                </div>\r\n              </div>-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"projects-list offspace-15\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-3 width-50\">\r\n                <div class=\"col-inner\">\r\n                  <div class=\"image-hover-effect-01\">\r\n                    <div class=\"project-image\">\r\n                      <a href=\"#\"><img src=\"assets/images/s1.jpeg\" class=\"img-responsive\" alt=\"service-image\"></a>\r\n                    </div>\r\n                    <!--<div class=\"project-image-back\">\r\n                      <div class=\"project-image-arrow\">\r\n                        <div class=\"project-image-inner\">\r\n                          <div class=\"project-port-action\">\r\n                            <a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>-->\r\n                  </div>\r\n                  <h2 class=\"project-title\"><a href=\"#\">Web And UI Design</a></h2>\r\n                  <div class=\"project-category\">Inventing Design</div>\r\n                  <div class=\"project-description\">\r\n                    The visitor’s first impression to your website. A well executed website needs innovative designing with compelling UX and UI design.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-3 width-50\">\r\n                <div class=\"col-inner\">\r\n                  <div class=\"image-hover-effect-01\">\r\n                    <div class=\"project-image\">\r\n                      <a href=\"#\"><img src=\"assets/images/s2.jpeg\" class=\"img-responsive\" alt=\"service-image\"></a>\r\n                    </div>\r\n                    <!--<div class=\"project-image-back\">\r\n                      <div class=\"project-image-arrow\">\r\n                        <div class=\"project-image-inner\">\r\n                          <div class=\"project-port-action\">\r\n                            <a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>-->\r\n                  </div>\r\n                  <h2 class=\"project-title\"><a href=\"#\">Web Development</a></h2>\r\n                  <div class=\"project-category\">Conversion of Ideas into Easy-to-use Solutions</div>\r\n                  <div class=\"project-description\">\r\n                    We build websites with modern technologies and open source tools, that generates revenue and adhere to your needs.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-3 width-50\">\r\n                <div class=\"col-inner\">\r\n                  <div class=\"image-hover-effect-01\">\r\n                    <div class=\"project-image\">\r\n                      <a href=\"#\"><img src=\"assets/images/s1.jpeg\" class=\"img-responsive\" alt=\"service-image\"></a>\r\n                    </div>\r\n                    <!--<div class=\"project-image-back\">\r\n                      <div class=\"project-image-arrow\">\r\n                        <div class=\"project-image-inner\">\r\n                          <div class=\"project-port-action\">\r\n                            <a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>-->\r\n                  </div>\r\n                  <h2 class=\"project-title\"><a href=\"#\">Internet Marketing</a></h2>\r\n                  <div class=\"project-category\">Optimizing leads to success</div>\r\n                  <div class=\"project-description\">\r\n                    To establish your presence, build visibility and generate sales for your business.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-3 width-50\">\r\n                <div class=\"col-inner\">\r\n                  <div class=\"image-hover-effect-01\">\r\n                    <div class=\"project-image\">\r\n                      <a href=\"#\"><img src=\"assets/images/s2.jpeg\" class=\"img-responsive\" alt=\"service-image\"></a>\r\n                    </div>\r\n                    <!--<div class=\"project-image-back\">\r\n                      <div class=\"project-image-arrow\">\r\n                        <div class=\"project-image-inner\">\r\n                          <div class=\"project-port-action\">\r\n                            <a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>-->\r\n                  </div>\r\n                  <h2 class=\"project-title\"><a href=\"#\">Grapic Design</a></h2>\r\n                  <div class=\"project-category\">Inventing Design</div>\r\n                  <div class=\"project-description\">\r\n                    We create logos, brochures, banners, and advertisement that makes your business stand out among your competition.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"blog-posts\">\r\n  <div class=\"blog-posts-inner\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"col-inner\">\r\n            <div class=\"title-head\">\r\n              <h2>Why work with us</h2>\r\n              <!--<div class=\"row\">\r\n                <div class=\"col-sm-8\">\r\n                  <div class=\"col-inner\">\r\n                    <p>Check our blog where we talk about technologies, custom software development, trends in IT outsourcing services, managing offshore agile teams and bespoke projects we work on.  </p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"col-inner pull-right\">\r\n                    <a class=\"flat-button\" href=\"#\">All blog posts</a>\r\n                  </div>\r\n                </div>\r\n              </div>-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"projects-list offspace-15\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4 width-50\">\r\n                <div class=\"col-inner\">\r\n                  <div class=\"image-hover-effect-01\">\r\n                    <div class=\"blog-image\">\r\n                      <a href=\"#\"><img src=\"assets/images/b1.jpg\" class=\"img-responsive\" alt=\"blog-image\"></a>\r\n                    </div>\r\n                    <!--<div class=\"blog-image-back\">\r\n                      <div class=\"blog-image-arrow\">\r\n                        <div class=\"blog-image-inner\">\r\n                          <div class=\"blog-port-action\">\r\n                            <a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>-->\r\n                  </div>\r\n                  <h2 class=\"blog-title\"><a href=\"#\">Supreme Satisfaction</a></h2>\r\n                  <!--<span class=\"blog-date\">feb 17, 2016</span>-->\r\n                  <p class=\"blog-description\">We satisfy customers with top-notch quality work and result driven work approach. We make best efforts to satisfy our valuable clients which leads to have a long term relationship with them.</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4 width-50\">\r\n                <div class=\"col-inner\">\r\n                  <div class=\"image-hover-effect-01\">\r\n                    <div class=\"blog-image\">\r\n                      <a href=\"#\"><img src=\"assets/images/b2.jpg\" class=\"img-responsive\" alt=\"blog-image\"></a>\r\n                    </div>\r\n                    <!--<div class=\"blog-image-back\">\r\n                      <div class=\"blog-image-arrow\">\r\n                        <div class=\"blog-image-inner\">\r\n                          <div class=\"blog-port-action\">\r\n                            <a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>-->\r\n                  </div>\r\n                  <h2 class=\"blog-title\"><a href=\"#\">On time assistance</a></h2>\r\n                  <!--<span class=\"blog-date\">feb 17, 2016</span>-->\r\n                  <p class=\"blog-description\">We have adopt rapid development methodology and strategies to deliver work rapidly on accomplish time yet keeping quality work high credential.</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4 width-50\">\r\n                <div class=\"col-inner\">\r\n                  <div class=\"image-hover-effect-01\">\r\n                    <div class=\"blog-image\">\r\n                      <a href=\"#\"><img src=\"assets/images/b3.jpg\" class=\"img-responsive\" alt=\"blog-image\"></a>\r\n                    </div>\r\n                    <!--<div class=\"blog-image-back\">\r\n                      <div class=\"blog-image-arrow\">\r\n                        <div class=\"blog-image-inner\">\r\n                          <div class=\"blog-port-action\">\r\n                            <a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>-->\r\n                  </div>\r\n                  <h2 class=\"blog-title\"><a href=\"#\">Project Payment</a></h2>\r\n                  <!--<span class=\"blog-date\">feb 17, 2016</span>-->\r\n                  <p class=\"blog-description\">We deliver projects with flexible pricing policy at affordable rates. Our transparent pricing policy revolves on factors and are compatible with the industry standards.</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ 647:
/***/ (function(module, exports) {

module.exports = "<div id=\"loader\" class=\"pageload-overlay\" data-opening=\"M 40,-65 145,80 -65,80 40,-65\" data-closing=\"m 40,-65 0,0 L -65,80 40,-65\">\n  <svg  width=\"100%\" height=\"100%\" viewBox=\"0 0 80 60\" preserveAspectRatio=\"none\">\n    <path d=\"M 40,-65 145,80 40,-65\"/>\n  </svg>\n</div>\n<!-- /pageload-overlay -->\n  <div class=\"breadcrumbs image-space overlay-theme-col\" style=\"background-image: url(assets/images/section-banner.jpeg)\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"breadcrumbs-inner\">\n            <div class=\"breadcrumbs-title\">\n              <h1>Portfolio</h1>\n            </div>\n            <div class=\"breadcrumbs-menu\">\n              <ul class=\"list-inline\">\n                <li><a href=\"index.html\">Home /</a></li>\n                <li>Portfolio</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!------------------portfolio----------------------->\n  <section id=\"portfolio\" class=\"white-bg\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"m-text-head text-center\">\n            <h2 class=\"m-text-title\">Portfolio</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt suscipit, quibusdam aliquid voluptates, blanditiis quis quae. Maiores, quam tenetur vero.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"filter-wrapper col-xs-12 text-center mb-30\">\n          <div class=\"portfolio-filter filter-options\">\n            <button class=\"active\" data-group=\"all\">all</button>\n            <button data-group=\"web\">web design</button>\n            <button data-filter=\".uiux\" data-group=\"uiux\">UI &amp; UX</button>\n            <button data-group=\"branding\">branding</button>\n            <button data-group=\"print\">print</button>\n          </div>\n        </div>\n        <div id=\"grid\" class=\"portfolio-grid  my-shuffle-container my-shuffle\">\n          <div class=\"item web picture-item  col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-30\" data-groups='[\"web\"]'>\n            <a href=\"assets/images/port1.jpg\" data-image-popup=\"\" class=\"single-portfolio\">\n              <img src=\"assets/images/port1.jpg\" alt=\"\">\n              <div class=\"content\">\n                <h4 class=\"title\">Lorem Ipsum</h4>\n                <span class=\"cat\">Web Design</span>\n              </div>\n            </a>\n          </div>\n          <div class=\"item uiux picture-item  col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-30\" data-groups='[\"uiux\"]'>\n            <a href=\"assets/images/port2.jpg\" data-image-popup=\"\" class=\"single-portfolio\">\n              <img src=\"assets/images/port2.jpg\" alt=\"\">\n              <div class=\"content\">\n                <h4 class=\"title\">Lorem Ipsum</h4>\n                <span class=\"cat\">Web Design</span>\n              </div>\n            </a>\n          </div>\n          <div class=\"item branding picture-item col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-30\" data-groups='[\"branding\"]'>\n            <a href=\"assets/images/port3.jpg\" data-image-popup=\"\" class=\"single-portfolio\">\n              <img src=\"assets/images/port3.jpg\" alt=\"\">\n              <div class=\"content\">\n                <h4 class=\"title\">Lorem Ipsum</h4>\n                <span class=\"cat\">Web Design</span>\n              </div>\n            </a>\n          </div>\n          <div class=\"item uiux picture-item col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-30\" data-groups='[\"uiux\"]'>\n            <a href=\"assets/images/port4.jpg\" data-image-popup=\"\" class=\"single-portfolio\">\n              <img src=\"assets/images/port4.jpg\" alt=\"\">\n              <div class=\"content\">\n                <h4 class=\"title\">Lorem Ipsum</h4>\n                <span class=\"cat\">Web Design</span>\n              </div>\n            </a>\n          </div>\n          <div class=\"item web picture-item col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-30\" data-groups='[\"web\"]'>\n            <a href=\"assets/images/port5.jpg\" data-image-popup=\"\" class=\"single-portfolio\">\n              <img src=\"assets/images/port5.jpg\" alt=\"\">\n              <div class=\"content\">\n                <h4 class=\"title\">Lorem Ipsum</h4>\n                <span class=\"cat\">Web Design</span>\n              </div>\n            </a>\n          </div>\n          <div class=\"item print picture-item col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-30\" data-groups='[\"print\"]'>\n            <a href=\"assets/images/port6.jpg\" data-image-popup=\"\" class=\"single-portfolio\">\n              <img src=\"assets/images/port6.jpg\" alt=\"\">\n              <div class=\"content\">\n                <h4 class=\"title\">Lorem Ipsum</h4>\n                <span class=\"cat\">Web Design</span>\n              </div>\n            </a>\n          </div>\n          <div class=\"item branding picture-item col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-30\" data-groups='[\"branding\"]'>\n            <a href=\"assets/images/port7.jpg\" data-image-popup=\"\" class=\"single-portfolio\">\n              <img src=\"assets/images/port7.jpg\" alt=\"\">\n              <div class=\"content\">\n                <h4 class=\"title\">Lorem Ipsum</h4>\n                <span class=\"cat\">Web Design</span>\n              </div>\n            </a>\n          </div>\n          <div class=\"item web picture-item col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-30\" data-groups='[\"web\"]'>\n            <a href=\"assets/images/port8.jpg\" data-image-popup=\"\" class=\"single-portfolio\">\n              <img src=\"assets/images/port8.jpg\" alt=\"\">\n              <div class=\"content\">\n                <h4 class=\"title\">Lorem Ipsum</h4>\n                <span class=\"cat\">Web Design</span>\n              </div>\n            </a>\n          </div>\n          <div class=\"item print picture-item col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-30\" data-groups='[\"print\"]'>\n            <a href=\"assets/images/port9.jpg\" data-image-popup=\"\" class=\"single-portfolio\">\n              <img src=\"assets/images/port9.jpg\" alt=\"\">\n              <div class=\"content\">\n                <h4 class=\"title\">Lorem Ipsum</h4>\n                <span class=\"cat\">Web Design</span>\n              </div>\n            </a>\n          </div>\n          <div class=\"item uiux picture-item col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-30\" data-groups='[\"uiux\"]'>\n            <a href=\"assets/images/port10.jpg\" data-image-popup=\"\" class=\"single-portfolio\">\n              <img src=\"assets/images/port10.jpg\" alt=\"\">\n              <div class=\"content\">\n                <h4 class=\"title\">Lorem Ipsum</h4>\n                <span class=\"cat\">Web Design</span>\n              </div>\n            </a>\n          </div>\n          <div class=\"item branding picture-item col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-30\" data-groups='[\"branding\"]'>\n            <a href=\"assets/images/port11.jpg\" data-image-popup=\"\" class=\"single-portfolio\">\n              <img src=\"assets/images/port11.jpg\" alt=\"\">\n              <div class=\"content\">\n                <h4 class=\"title\">Lorem Ipsum</h4>\n                <span class=\"cat\">Web Design</span>\n              </div>\n            </a>\n          </div>\n          <div class=\"item print picture-item col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-30\" data-groups='[\"print\"]'>\n            <a href=\"assets/images/port12.jpg\" data-image-popup=\"\" class=\"single-portfolio\">\n              <img src=\"assets/images/port12.jpg\" alt=\"\">\n              <div class=\"content\">\n                <h4 class=\"title\">Lorem Ipsum</h4>\n                <span class=\"cat\">Web Design</span>\n              </div>\n            </a>\n          </div>\n          <!--<div class=\"my-sizer-element\"></div>-->\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section id=\"call-to-action\">\n    <div class=\"theme-bg tb-padd-80 white-text text-center\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"block\">\n              <h2 class=\"title\">SO WHAT YOU THINK ?</h2>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,<br>possimus commodi, fugiat magnam temporibus vero magni recusandae? Dolore, maxime praesentium.</p>\n              <a href=\"contact.html\" class=\"btn btn-default btn-contact\">Contact With Me</a>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </section>\n"

/***/ }),

/***/ 648:
/***/ (function(module, exports) {

module.exports = "<div id=\"loader\" class=\"pageload-overlay\" data-opening=\"M 40,-65 145,80 -65,80 40,-65\" data-closing=\"m 40,-65 0,0 L -65,80 40,-65\">\n  <svg  width=\"100%\" height=\"100%\" viewBox=\"0 0 80 60\" preserveAspectRatio=\"none\">\n    <path d=\"M 40,-65 145,80 40,-65\"/>\n  </svg>\n</div>\n<!-- /pageload-overlay -->\n  <div class=\"breadcrumbs image-space overlay-theme-col\" style=\"background-image: url(assets/images/section-banner.jpeg)\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"breadcrumbs-inner\">\n            <div class=\"breadcrumbs-title\">\n              <h1>SERVICES</h1>\n            </div>\n            <div class=\"breadcrumbs-menu\">\n              <ul class=\"list-inline\">\n                <li><a href=\"index.html\">Home /</a></li>\n                <li>About us</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <section class=\"cta-block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 col-sm-7\">\n          <div class=\"col-inner\">\n            <div class=\"code-review\">\n              <p>Have a project in mind? We would love to hear from you! </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4 col-sm-5\">\n          <div class=\"col-inner\">\n            <div class=\"action-btn offspace-10 pull-right\">\n              <a class=\"flat-button\" routerLink=\"/contact-us\" routerLinkActive=\"active\">Get in touch with us</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"quality-area\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-7 col-sm-6 col-xs-12\">\n          <div class=\"title-head\">\n            <h2>WE PROVIDE QUALITY</h2>\n          </div>\n          <p>We provide custom business software solutions for mutliple domain industries. It includes complete SDLC through analysis of the requirement, architecture design, implementation, testing and deployment. Our team is specialized in custom development of web and mobile applications for business. We also provide service in the multi-dimensional data management services through our experts advance skills of data analytics. </p>\n          <p class=\"hidden-sm\">In todays era of smart phone, our expertise in mobile development provide unique entrprise solution based on individual need. Let us guide you through various area where our expertise can help you to achieve successful solution that add-on value to your business based on your requirement.</p>\n          <!--<div class=\"quality-detail\">\n              <h2 class=\"q-name\">remon D,cruz</h2>\n              <h4 class=\"q-post\">CEO OF COMPANY</h4>\n          </div>-->\n        </div>\n        <div class=\"col-md-5 col-lg-offset-1 col-lg-4 col-sm-6 col-xs-12\">\n          <div class=\"quality-content\">\n            <div class=\"quality-img\">\n              <img src=\"assets/images/qi.jpg\" alt=\"quality-image\" class=\"img-responsive\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"tv-white-bg service-area\">\n    <div class=\"container\">\n      <!--<div class=\"row\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"m-text-head text-center\">\n                  <h2 class=\"m-text-title\">Our Services</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt suscipit, quibusdam aliquid voluptates, blanditiis quis quae. Maiores, quam tenetur vero.</p>\n              </div>\n          </div>\n      </div>-->\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-6\">\n          <div class=\"tv-service-block\">\n            <div class=\"tv-service-top-head\">\n              <i class=\"icon-linegraph\"></i>\n              <h2><a href=\"web-development.html\">Web development</a></h2>\n            </div>\n            <p>Xwhizz provide reliable, elegant, scalable custom web solution for wide range of business outcomes you deserve.</p>\n          </div>\n        </div>\n        <div class=\"col-md-4 col-sm-6\">\n          <div class=\"tv-service-block\">\n            <div class=\"tv-service-top-head\">\n              <i class=\"icon-browser\"></i>\n              <h2>Web and UI Design</h2>\n            </div>\n            <p>We create optimise website design for effective use and GUI interface compatible, scalable and flexible with differnet browsers and platforms.</p>\n          </div>\n        </div>\n        <div class=\"col-md-4 col-sm-6\">\n          <div class=\"tv-service-block\">\n            <div class=\"tv-service-top-head\">\n              <i class=\"icon-briefcase\"></i>\n              <h2>Quality Assurance</h2>\n            </div>\n            <p>Hands on QA expertise dedicated team through out entire development cycle.We perfom testing for windows, web and mobile application includes front end GUI testing, functional testing, integration testing and </p>\n          </div>\n        </div>\n        <div class=\"col-md-4 col-sm-6\">\n          <div class=\"tv-service-block\">\n            <div class=\"tv-service-top-head\">\n              <i class=\"icon-desktop\"></i>\n              <h2>Grapic Design</h2>\n            </div>\n            <p>We create logos, brochures, banners, and advertisement that makes your business stand out among your competition.</p>\n          </div>\n        </div>\n        <div class=\"col-md-4 col-sm-6\">\n          <div class=\"tv-service-block\">\n            <div class=\"tv-service-top-head\">\n              <i class=\"icon-mobile\"></i>\n              <h2>Mobile App Development and Design</h2>\n            </div>\n            <p>Custom End-to-end development of mobile applications based on individual requirement for consumer-facing or corporate. We develop and design the iOS and Android mobile clients application.</p>\n          </div>\n        </div>\n        <div class=\"col-md-4 col-sm-6\">\n          <div class=\"tv-service-block\">\n            <div class=\"tv-service-top-head\">\n              <i class=\"icon-briefcase\"></i>\n              <h2>Custom software development</h2>\n            </div>\n            <p>Our expertise in various technologies and domain provide reliable, engaging and productive custom software solutions include integration of different aspects of business with streamlining the various operations.</p>\n          </div>\n        </div>\n\n        <!--<div class=\"col-md-4 col-sm-6\">\n            <div class=\"tv-service-block\">\n                <div class=\"tv-service-top-head\">\n                    <i class=\"icon-camera\"></i>\n                    <h2>Server Administrator and maintenance</h2>\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor a lectus at gravida. Aliquam pharetra, risus et tempor aliquam</p>\n            </div>\n        </div>-->\n      </div>\n    </div>\n  </section>\n  <section id=\"call-to-action\">\n    <div class=\"theme-bg tb-padd-80 white-text text-center\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"block\">\n              <h2 class=\"title\">SO WHAT YOU THINK ?</h2>\n              <p>Let’s do planning for Development, Designing and Marketing together</p>\n              <a routerLink=\"/contact-us\" routerLinkActive=\"active\" class=\"btn btn-default btn-contact\">Contact With Me</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n"

/***/ }),

/***/ 649:
/***/ (function(module, exports) {

module.exports = "<div id=\"loader\" class=\"pageload-overlay\" data-opening=\"M 40,-65 145,80 -65,80 40,-65\" data-closing=\"m 40,-65 0,0 L -65,80 40,-65\">\n  <svg  width=\"100%\" height=\"100%\" viewBox=\"0 0 80 60\" preserveAspectRatio=\"none\">\n    <path d=\"M 40,-65 145,80 40,-65\"/>\n  </svg>\n</div>\n<!-- /pageload-overlay -->\n  <div class=\"breadcrumbs image-space overlay-theme-col\" style=\"background-image: url(assets/images/section-banner.jpeg)\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"breadcrumbs-inner\">\n            <div class=\"breadcrumbs-title\">\n              <h1>OUR TEAM</h1>\n            </div>\n            <div class=\"breadcrumbs-menu\">\n              <ul class=\"list-inline\">\n                <li><a href=\"index.html\">Home /</a></li>\n                <li>Our team</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <section class=\"quality-area\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-7 col-sm-6 col-xs-12\" >\n          <div class=\"title-head\">\n            <h2>RABERT DONATHAN</h2>\n            <h5 class=\"team-post\">graphic designer</h5>\n          </div>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe debitis dignissimos reprehenderit officia porro cum odio ipsum veritatis provident magni in culpa a eum dolores magnam est, unde voluptatem eligendi aperiam. Temporibus dolore, in excepturi repellat odit aut veritatis, obcaecati id sint recusandae suscipit ullam reprehenderit assumenda nobis distinctio iste vero repellendus quas atque facere consequuntur. Error harum, ex quisquam!</p>\n          <p class=\"hidden-sm\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati iusto fugit magni repellendus porro voluptates totam laboriosam officiis nobis aut odio molestiae asperiores, alias, adipisci dolorum debitis ex earum quas.</p>\n        </div>\n        <div class=\"col-md-5 col-lg-offset-1 col-lg-4 col-sm-6 col-xs-12\">\n          <div class=\"quality-content\">\n            <div class=\"quality-img\">\n              <img src=\"assets/images/qi.jpg\" alt=\"quality-image\" class=\"img-responsive\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"tv-white-bg service-area\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"m-text-head text-center\">\n            <h2 class=\"m-text-title\">MEET OUR TEAM</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt suscipit, quibusdam aliquid voluptates, blanditiis quis quae. Maiores, quam tenetur vero.</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"team-wrap clearfix\">\n          <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-12\">\n            <div class=\"single-team\">\n              <div class=\"team-front\">\n                <div class=\"team-thumb\">\n                  <img src=\"assets/images/team1.jpg\" alt=\"team-image\" class=\"img-responsive\">\n                </div>\n                <div class=\"team-front-title\">\n                  <h4><a href=\"#\">Emilia Harison</a></h4>\n                  <p>Email Writer</p>\n                </div>\n              </div>\n              <div class=\"team-back\">\n                <div class=\"team-back-inner\">\n                  <div class=\"global-table\">\n                    <div class=\"global-cell\">\n                      <div class=\"team-back-title\">\n                        <h4><a href=\"#\">Emilia Harison</a></h4>\n                        <p>Email Writer</p>\n                      </div>\n                      <div class=\"team-social\">\n                        <ul>\n                          <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-behance\"></i></a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-12\">\n            <div class=\"single-team\">\n              <div class=\"team-front\">\n                <div class=\"team-thumb\">\n                  <img src=\"assets/images/team2.jpg\" alt=\"team-image\" class=\"img-responsive\">\n                </div>\n                <div class=\"team-front-title\">\n                  <h4><a href=\"#\">Emilia Harison</a></h4>\n                  <p>Email Writer</p>\n                </div>\n              </div>\n              <div class=\"team-back\">\n                <div class=\"team-back-inner\">\n                  <div class=\"global-table\">\n                    <div class=\"global-cell\">\n                      <div class=\"team-back-title\">\n                        <h4><a href=\"#\">Emilia Harison</a></h4>\n                        <p>Email Writer</p>\n                      </div>\n                      <div class=\"team-social\">\n                        <ul>\n                          <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-behance\"></i></a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-12\">\n            <div class=\"single-team\">\n              <div class=\"team-front\">\n                <div class=\"team-thumb\">\n                  <img src=\"assets/images/team3.jpg\" alt=\"team-image\" class=\"img-responsive\">\n                </div>\n                <div class=\"team-front-title\">\n                  <h4><a href=\"#\">Emilia Harison</a></h4>\n                  <p>Email Writer</p>\n                </div>\n              </div>\n              <div class=\"team-back\">\n                <div class=\"team-back-inner\">\n                  <div class=\"global-table\">\n                    <div class=\"global-cell\">\n                      <div class=\"team-back-title\">\n                        <h4><a href=\"#\">Emilia Harison</a></h4>\n                        <p>Email Writer</p>\n                      </div>\n                      <div class=\"team-social\">\n                        <ul>\n                          <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-behance\"></i></a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-12\">\n            <div class=\"single-team\">\n              <div class=\"team-front\">\n                <div class=\"team-thumb\">\n                  <img src=\"assets/images/team4.jpg\" alt=\"team-image\" class=\"img-responsive\">\n                </div>\n                <div class=\"team-front-title\">\n                  <h4><a href=\"#\">Emilia Harison</a></h4>\n                  <p>Email Writer</p>\n                </div>\n              </div>\n              <div class=\"team-back\">\n                <div class=\"team-back-inner\">\n                  <div class=\"global-table\">\n                    <div class=\"global-cell\">\n                      <div class=\"team-back-title\">\n                        <h4><a href=\"#\">Emilia Harison</a></h4>\n                        <p>Email Writer</p>\n                      </div>\n                      <div class=\"team-social\">\n                        <ul>\n                          <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-behance\"></i></a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </section>\n\n  <section id=\"call-to-action\">\n    <div class=\"theme-bg tb-padd-80 white-text text-center\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"block\">\n              <h2 class=\"title\">SO WHAT YOU THINK ?</h2>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,<br>possimus commodi, fugiat magnam temporibus vero magni recusandae? Dolore, maxime praesentium.</p>\n              <a href=\"contact.html\" class=\"btn btn-default btn-contact\">Contact With Me</a>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </section>\n"

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(376);


/***/ })

},[929]);
//# sourceMappingURL=main.bundle.js.map