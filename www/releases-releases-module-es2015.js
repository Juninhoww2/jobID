(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["releases-releases-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/releases/releases.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/releases/releases.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button href=\"home\">\n    General\n  </ion-button>\n  <ion-button href=\"production\">\n    Production\n  </ion-button>\n  <ion-button href=\"pricing\">\n    Pricing\n  </ion-button>\n  <ion-button href=\"deliviries\">\n    Deliviries\n  </ion-button>\n  <ion-button href=\"routing\">\n    Routing\n  </ion-button>\n  <ion-button href=\"material\">\n    Material\n  </ion-button>\n  <ion-button href=\"assemblies\">\n    Assemblies\n  </ion-button>\n  <ion-button href=\"releases\">\n    Releases\n  </ion-button>\n  <ion-button href=\"custom\">\n    Custom\n  </ion-button>\n  \n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Release Job ID</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Release Qty</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Scrap %</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"Extra Qty\"></ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Make Qty</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-button>\n              <ion-icon name=\"timer-outline\"></ion-icon>\n            </ion-button>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Status</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">PO Line</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/releases/releases-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/releases/releases-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ReleasesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesPageRoutingModule", function() { return ReleasesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _releases_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./releases.page */ "./src/app/releases/releases.page.ts");




const routes = [
    {
        path: '',
        component: _releases_page__WEBPACK_IMPORTED_MODULE_3__["ReleasesPage"]
    }
];
let ReleasesPageRoutingModule = class ReleasesPageRoutingModule {
};
ReleasesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReleasesPageRoutingModule);



/***/ }),

/***/ "./src/app/releases/releases.module.ts":
/*!*********************************************!*\
  !*** ./src/app/releases/releases.module.ts ***!
  \*********************************************/
/*! exports provided: ReleasesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesPageModule", function() { return ReleasesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _releases_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./releases-routing.module */ "./src/app/releases/releases-routing.module.ts");
/* harmony import */ var _releases_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./releases.page */ "./src/app/releases/releases.page.ts");







let ReleasesPageModule = class ReleasesPageModule {
};
ReleasesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _releases_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReleasesPageRoutingModule"]
        ],
        declarations: [_releases_page__WEBPACK_IMPORTED_MODULE_6__["ReleasesPage"]]
    })
], ReleasesPageModule);



/***/ }),

/***/ "./src/app/releases/releases.page.scss":
/*!*********************************************!*\
  !*** ./src/app/releases/releases.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbGVhc2VzL3JlbGVhc2VzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/releases/releases.page.ts":
/*!*******************************************!*\
  !*** ./src/app/releases/releases.page.ts ***!
  \*******************************************/
/*! exports provided: ReleasesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesPage", function() { return ReleasesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ReleasesPage = class ReleasesPage {
    constructor() { }
    ngOnInit() {
    }
};
ReleasesPage.ctorParameters = () => [];
ReleasesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-releases',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./releases.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/releases/releases.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./releases.page.scss */ "./src/app/releases/releases.page.scss")).default]
    })
], ReleasesPage);



/***/ })

}]);
//# sourceMappingURL=releases-releases-module-es2015.js.map