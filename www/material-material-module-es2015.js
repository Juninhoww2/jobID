(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["material-material-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/material/material.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/material/material.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button href=\"home\">\n    General\n  </ion-button>\n  <ion-button href=\"production\">\n    Production\n  </ion-button>\n  <ion-button href=\"pricing\">\n    Pricing\n  </ion-button>\n  <ion-button href=\"deliviries\">\n    Deliviries\n  </ion-button>\n  <ion-button href=\"routing\">\n    Routing\n  </ion-button>\n  <ion-button href=\"material\">\n    Material\n  </ion-button>\n  <ion-button href=\"assemblies\">\n    Assemblies\n  </ion-button>\n  <ion-button href=\"releases\">\n    Releases\n  </ion-button>\n  <ion-button href=\"custom\">\n    Custom\n  </ion-button>\n  \n  <ion-card>\n    <ion-card-content>\n      \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/material/material-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/material/material-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialPageRoutingModule", function() { return MaterialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _material_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.page */ "./src/app/material/material.page.ts");




const routes = [
    {
        path: '',
        component: _material_page__WEBPACK_IMPORTED_MODULE_3__["MaterialPage"]
    }
];
let MaterialPageRoutingModule = class MaterialPageRoutingModule {
};
MaterialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MaterialPageRoutingModule);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialPageModule", function() { return MaterialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _material_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material-routing.module */ "./src/app/material/material-routing.module.ts");
/* harmony import */ var _material_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.page */ "./src/app/material/material.page.ts");







let MaterialPageModule = class MaterialPageModule {
};
MaterialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _material_routing_module__WEBPACK_IMPORTED_MODULE_5__["MaterialPageRoutingModule"]
        ],
        declarations: [_material_page__WEBPACK_IMPORTED_MODULE_6__["MaterialPage"]]
    })
], MaterialPageModule);



/***/ }),

/***/ "./src/app/material/material.page.scss":
/*!*********************************************!*\
  !*** ./src/app/material/material.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsL21hdGVyaWFsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/material/material.page.ts":
/*!*******************************************!*\
  !*** ./src/app/material/material.page.ts ***!
  \*******************************************/
/*! exports provided: MaterialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialPage", function() { return MaterialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MaterialPage = class MaterialPage {
    constructor() { }
    ngOnInit() {
    }
};
MaterialPage.ctorParameters = () => [];
MaterialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-material',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./material.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/material/material.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./material.page.scss */ "./src/app/material/material.page.scss")).default]
    })
], MaterialPage);



/***/ })

}]);
//# sourceMappingURL=material-material-module-es2015.js.map