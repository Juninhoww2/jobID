(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-custom-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/custom/custom.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custom/custom.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button href=\"home\">\n    General\n  </ion-button>\n  <ion-button href=\"production\">\n    Production\n  </ion-button>\n  <ion-button href=\"pricing\">\n    Pricing\n  </ion-button>\n  <ion-button href=\"deliviries\">\n    Deliviries\n  </ion-button>\n  <ion-button href=\"routing\">\n    Routing\n  </ion-button>\n  <ion-button href=\"material\">\n    Material\n  </ion-button>\n  <ion-button href=\"assemblies\">\n    Assemblies\n  </ion-button>\n  <ion-button href=\"releases\">\n    Releases\n  </ion-button>\n  <ion-button href=\"custom\">\n    Custom\n  </ion-button>\n  \n    <ion-card>\n      <ion-card-content>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"2\" col-3>\n                  <ion-item>\n                    <ion-label position=\"stacked\">Print Date</ion-label>\n                    <ion-input></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"2\" col-3>\n                  <ion-item>\n                    <ion-label position=\"stacked\">Amount 1</ion-label>\n                    <ion-input placeholder=\"$ 0.00\"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"2\" col-3>\n                 <ion-item>\n                    <ion-label position=\"stacked\">Date 2</ion-label>\n                   <ion-input placeholder=\"/ /\"></ion-input>\n                 </ion-item>  \n               </ion-col>\n               <ion-col size=\"2\" col-3>\n                 <ion-item>\n                   <ion-label position=\"stacked\">Amount 2</ion-label>\n                   <ion-input placeholder=\"$ 0.00\"></ion-input>\n                 </ion-item>\n               </ion-col>\n              </ion-row>   \n            </ion-grid>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"2\" col-3>\n               <ion-item>\n                  <ion-label position=\"stacked\">Sales Rep #2</ion-label>\n                 <ion-input></ion-input>\n               </ion-item>  \n             </ion-col>\n             <ion-col size=\"2\" col-3>\n               <ion-item>\n                 <ion-label position=\"stacked\">Sales Comm</ion-label>\n                 <ion-input placeholder=\"0.000000\"></ion-input>\n               </ion-item>\n             </ion-col>\n            </ion-row>   \n          </ion-grid>\n         <ion-grid> \n          <ion-row>\n            <ion-col size=\"2\" col-3>\n             <ion-item>\n                <ion-label position=\"stacked\">Project Mjr</ion-label>\n               <ion-input></ion-input>\n             </ion-item>  \n           </ion-col>\n           <ion-col size=\"2\" col-3>\n             <ion-item>\n               <ion-label position=\"stacked\">Numeric 2 </ion-label>\n               <ion-input placeholder=\"0.0000000\"></ion-input>\n             </ion-item>\n           </ion-col>\n          </ion-row>   \n        </ion-grid>\n      <ion-grid> \n        <ion-row>\n          <ion-col size=\"2\" col-3>\n           <ion-item>\n              <ion-label position=\"stacked\">R D Tax?</ion-label>\n             <ion-input></ion-input>\n           </ion-item>  \n         </ion-col>\n         <ion-col size=\"2\" col-3>\n           <ion-item>\n             <ion-label position=\"stacked\">Decimal 1</ion-label>\n             <ion-input placeholder=\"0\"></ion-input>\n           </ion-item>\n         </ion-col>\n        </ion-row>   \n      </ion-grid>\n    <ion-grid> \n      <ion-row>\n        <ion-col size=\"2\" col-3>\n         <ion-item>\n            <ion-label position=\"stacked\">Serial #</ion-label>\n           <ion-input></ion-input>\n         </ion-item>  \n       </ion-col>\n       <ion-col size=\"2\">\n         <ion-item>\n           <ion-button>\n             <ion-icon name=\"document\"></ion-icon>\n           </ion-button>\n         </ion-item>\n       </ion-col>\n       <ion-col size=\"2\" col-3>\n         <ion-item>\n           <ion-label position=\"stacked\">Text 5</ion-label>\n           <ion-input></ion-input>\n         </ion-item>\n       </ion-col>\n      </ion-row>   \n    </ion-grid>\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/custom/custom-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/custom/custom-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CustomPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPageRoutingModule", function() { return CustomPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _custom_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom.page */ "./src/app/custom/custom.page.ts");




const routes = [
    {
        path: '',
        component: _custom_page__WEBPACK_IMPORTED_MODULE_3__["CustomPage"]
    }
];
let CustomPageRoutingModule = class CustomPageRoutingModule {
};
CustomPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomPageRoutingModule);



/***/ }),

/***/ "./src/app/custom/custom.module.ts":
/*!*****************************************!*\
  !*** ./src/app/custom/custom.module.ts ***!
  \*****************************************/
/*! exports provided: CustomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPageModule", function() { return CustomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _custom_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-routing.module */ "./src/app/custom/custom-routing.module.ts");
/* harmony import */ var _custom_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom.page */ "./src/app/custom/custom.page.ts");







let CustomPageModule = class CustomPageModule {
};
CustomPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _custom_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomPageRoutingModule"]
        ],
        declarations: [_custom_page__WEBPACK_IMPORTED_MODULE_6__["CustomPage"]]
    })
], CustomPageModule);



/***/ }),

/***/ "./src/app/custom/custom.page.scss":
/*!*****************************************!*\
  !*** ./src/app/custom/custom.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS9jdXN0b20ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/custom/custom.page.ts":
/*!***************************************!*\
  !*** ./src/app/custom/custom.page.ts ***!
  \***************************************/
/*! exports provided: CustomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPage", function() { return CustomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CustomPage = class CustomPage {
    constructor() { }
    ngOnInit() {
    }
};
CustomPage.ctorParameters = () => [];
CustomPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./custom.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/custom/custom.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./custom.page.scss */ "./src/app/custom/custom.page.scss")).default]
    })
], CustomPage);



/***/ })

}]);
//# sourceMappingURL=custom-custom-module-es2015.js.map