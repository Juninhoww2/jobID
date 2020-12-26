(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["production-production-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/production/production.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/production/production.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProductionProductionPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col col-3>\n      <ion-button href=\"home\">\n        General\n      </ion-button>\n      <ion-button href=\"production\">\n        Production\n      </ion-button>\n      <ion-button href=\"pricing\">\n        Pricing\n      </ion-button>\n      <ion-button href=\"deliviries\">\n        Deliviries\n      </ion-button>\n      <ion-button href=\"routing\">\n        Routing\n      </ion-button>\n      <ion-button href=\"material\">\n        Material\n      </ion-button>\n      <ion-button href=\"assemblies\">\n        Assemblies\n      </ion-button>\n      <ion-button href=\"releases\">\n        Releases\n      </ion-button>\n      <ion-button href=\"custom\">\n        Custom\n      </ion-button>\n    </ion-col> \n  </ion-row>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"stacked\">Scrap%</ion-label>\n        <ion-input placeholder=\"0.00%\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Extra Qty</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-row>\n        <ion-col col-3>\n        <ion-item>\n          <ion-label position=\"stacked\">Pick Qty</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n      </ion-col>\n       <ion-col col-3>\n         <ion-item>\n           <ion-button>\n            <ion-icon name=\"list\"></ion-icon>\n           </ion-button>\n         </ion-item>\n       </ion-col>\n      </ion-row>\n      <ion-item>\n        <ion-label position=\"stacked\">Make Qty</ion-label>\n        <ion-input placeholder=\"1\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-button shape=\"round\" fiil=\"outline\">Serialization</ion-button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/production/production-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/production/production-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProductionPageRoutingModule */

    /***/
    function srcAppProductionProductionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductionPageRoutingModule", function () {
        return ProductionPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _production_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./production.page */
      "./src/app/production/production.page.ts");

      var routes = [{
        path: '',
        component: _production_page__WEBPACK_IMPORTED_MODULE_3__["ProductionPage"]
      }];

      var ProductionPageRoutingModule = function ProductionPageRoutingModule() {
        _classCallCheck(this, ProductionPageRoutingModule);
      };

      ProductionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProductionPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/production/production.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/production/production.module.ts ***!
      \*************************************************/

    /*! exports provided: ProductionPageModule */

    /***/
    function srcAppProductionProductionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductionPageModule", function () {
        return ProductionPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _production_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./production-routing.module */
      "./src/app/production/production-routing.module.ts");
      /* harmony import */


      var _production_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./production.page */
      "./src/app/production/production.page.ts");

      var ProductionPageModule = function ProductionPageModule() {
        _classCallCheck(this, ProductionPageModule);
      };

      ProductionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _production_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductionPageRoutingModule"]],
        declarations: [_production_page__WEBPACK_IMPORTED_MODULE_6__["ProductionPage"]]
      })], ProductionPageModule);
      /***/
    },

    /***/
    "./src/app/production/production.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/production/production.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppProductionProductionPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/production/production.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/production/production.page.ts ***!
      \***********************************************/

    /*! exports provided: ProductionPage */

    /***/
    function srcAppProductionProductionPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductionPage", function () {
        return ProductionPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ProductionPage = /*#__PURE__*/function () {
        function ProductionPage() {
          _classCallCheck(this, ProductionPage);
        }

        _createClass(ProductionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductionPage;
      }();

      ProductionPage.ctorParameters = function () {
        return [];
      };

      ProductionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-production',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./production.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/production/production.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./production.page.scss */
        "./src/app/production/production.page.scss"))["default"]]
      })], ProductionPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=production-production-module-es5.js.map