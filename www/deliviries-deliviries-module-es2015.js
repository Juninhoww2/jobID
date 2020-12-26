(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deliviries-deliviries-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliviries/deliviries.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deliviries/deliviries.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button href=\"home\">\n    General\n  </ion-button>\n  <ion-button href=\"production\">\n    Production\n  </ion-button>\n  <ion-button href=\"pricing\">\n    Pricing\n  </ion-button>\n  <ion-button href=\"deliviries\">\n    Deliviries\n  </ion-button>\n  <ion-button href=\"routing\">\n    Routing\n  </ion-button>\n  <ion-button href=\"material\">\n    Material\n  </ion-button>\n  <ion-button href=\"assemblies\">\n    Assemblies\n  </ion-button>\n  <ion-button href=\"releases\">\n    Releases\n  </ion-button>\n  <ion-button href=\"custom\">\n    Custom\n  </ion-button>\n  \n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Address ID\n            </ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Address</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Shipment Method</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\"></ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Lead Days</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Committed Qty</ion-label>\n            <ion-input placeholder=\"0\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/deliviries/deliviries-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/deliviries/deliviries-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DeliviriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliviriesPageRoutingModule", function() { return DeliviriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _deliviries_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deliviries.page */ "./src/app/deliviries/deliviries.page.ts");




const routes = [
    {
        path: '',
        component: _deliviries_page__WEBPACK_IMPORTED_MODULE_3__["DeliviriesPage"]
    }
];
let DeliviriesPageRoutingModule = class DeliviriesPageRoutingModule {
};
DeliviriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeliviriesPageRoutingModule);



/***/ }),

/***/ "./src/app/deliviries/deliviries.module.ts":
/*!*************************************************!*\
  !*** ./src/app/deliviries/deliviries.module.ts ***!
  \*************************************************/
/*! exports provided: DeliviriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliviriesPageModule", function() { return DeliviriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _deliviries_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deliviries-routing.module */ "./src/app/deliviries/deliviries-routing.module.ts");
/* harmony import */ var _deliviries_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deliviries.page */ "./src/app/deliviries/deliviries.page.ts");







let DeliviriesPageModule = class DeliviriesPageModule {
};
DeliviriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _deliviries_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeliviriesPageRoutingModule"]
        ],
        declarations: [_deliviries_page__WEBPACK_IMPORTED_MODULE_6__["DeliviriesPage"]]
    })
], DeliviriesPageModule);



/***/ }),

/***/ "./src/app/deliviries/deliviries.page.scss":
/*!*************************************************!*\
  !*** ./src/app/deliviries/deliviries.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGl2aXJpZXMvZGVsaXZpcmllcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/deliviries/deliviries.page.ts":
/*!***********************************************!*\
  !*** ./src/app/deliviries/deliviries.page.ts ***!
  \***********************************************/
/*! exports provided: DeliviriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliviriesPage", function() { return DeliviriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DeliviriesPage = class DeliviriesPage {
    constructor() { }
    ngOnInit() {
    }
};
DeliviriesPage.ctorParameters = () => [];
DeliviriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deliviries',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./deliviries.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliviries/deliviries.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./deliviries.page.scss */ "./src/app/deliviries/deliviries.page.scss")).default]
    })
], DeliviriesPage);



/***/ })

}]);
//# sourceMappingURL=deliviries-deliviries-module-es2015.js.map