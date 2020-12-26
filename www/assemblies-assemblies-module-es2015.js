(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assemblies-assemblies-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assemblies/assemblies.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assemblies/assemblies.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button href=\"home\">\n    General\n  </ion-button>\n  <ion-button href=\"production\">\n    Production\n  </ion-button>\n  <ion-button href=\"pricing\">\n    Pricing\n  </ion-button>\n  <ion-button href=\"deliviries\">\n    Deliviries\n  </ion-button>\n  <ion-button href=\"routing\">\n    Routing\n  </ion-button>\n  <ion-button href=\"material\">\n    Material\n  </ion-button>\n  <ion-button href=\"assemblies\">\n    Assemblies\n  </ion-button>\n  <ion-button href=\"releases\">\n    Releases\n  </ion-button>\n  <ion-button href=\"custom\">\n    Custom\n  </ion-button>\n  \n  <ion-card>\n    <ion-card-content>\n      <ion-label position=\"stacked\">Assembly Job ID</ion-label>\n      <ion-input></ion-input>      \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/assemblies/assemblies-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/assemblies/assemblies-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AssembliesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssembliesPageRoutingModule", function() { return AssembliesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _assemblies_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assemblies.page */ "./src/app/assemblies/assemblies.page.ts");




const routes = [
    {
        path: '',
        component: _assemblies_page__WEBPACK_IMPORTED_MODULE_3__["AssembliesPage"]
    }
];
let AssembliesPageRoutingModule = class AssembliesPageRoutingModule {
};
AssembliesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssembliesPageRoutingModule);



/***/ }),

/***/ "./src/app/assemblies/assemblies.module.ts":
/*!*************************************************!*\
  !*** ./src/app/assemblies/assemblies.module.ts ***!
  \*************************************************/
/*! exports provided: AssembliesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssembliesPageModule", function() { return AssembliesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _assemblies_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assemblies-routing.module */ "./src/app/assemblies/assemblies-routing.module.ts");
/* harmony import */ var _assemblies_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assemblies.page */ "./src/app/assemblies/assemblies.page.ts");







let AssembliesPageModule = class AssembliesPageModule {
};
AssembliesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _assemblies_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssembliesPageRoutingModule"]
        ],
        declarations: [_assemblies_page__WEBPACK_IMPORTED_MODULE_6__["AssembliesPage"]]
    })
], AssembliesPageModule);



/***/ }),

/***/ "./src/app/assemblies/assemblies.page.scss":
/*!*************************************************!*\
  !*** ./src/app/assemblies/assemblies.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2VtYmxpZXMvYXNzZW1ibGllcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/assemblies/assemblies.page.ts":
/*!***********************************************!*\
  !*** ./src/app/assemblies/assemblies.page.ts ***!
  \***********************************************/
/*! exports provided: AssembliesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssembliesPage", function() { return AssembliesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AssembliesPage = class AssembliesPage {
    constructor() { }
    ngOnInit() {
    }
};
AssembliesPage.ctorParameters = () => [];
AssembliesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assemblies',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assemblies.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assemblies/assemblies.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./assemblies.page.scss */ "./src/app/assemblies/assemblies.page.scss")).default]
    })
], AssembliesPage);



/***/ })

}]);
//# sourceMappingURL=assemblies-assemblies-module-es2015.js.map