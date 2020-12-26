(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pricing-pricing-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pricing/pricing.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pricing/pricing.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPricingPricingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button href=\"home\">\n    General\n  </ion-button>\n  <ion-button href=\"production\">\n    Production\n  </ion-button>\n  <ion-button href=\"pricing\">\n    Pricing\n  </ion-button>\n  <ion-button href=\"deliviries\">\n    Deliviries\n  </ion-button>\n  <ion-button href=\"routing\">\n    Routing\n  </ion-button>\n  <ion-button href=\"material\">\n    Material\n  </ion-button>\n  <ion-button href=\"assemblies\">\n    Assemblies\n  </ion-button>\n  <ion-button href=\"releases\">\n    Releases\n  </ion-button>\n  <ion-button href=\"custom\">\n    Custom\n  </ion-button>\n  \n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Unity Price</ion-label>\n            <ion-input placeholder=\"$0.00000\"></ion-input>  \n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Price VolM</ion-label>\n            <ion-input placeholder=\"ea\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Conversion Factor</ion-label>\n            <ion-input placeholder=\"1\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Total Price</ion-label>\n            <ion-input placeholder=\"$ 0.00\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Payment Terms</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Sales Rep ID</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-button>\n              <ion-icon name=\"search\"></ion-icon>\n            </ion-button>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Commission %</ion-label>\n            <ion-input placeholder=\"0.00%\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Commission Included in Price</ion-label> \n            <ion-checkbox></ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Sales Code</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Tax Code</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-button>\n              <ion-icon name=\"search-circle\"></ion-icon>\n            </ion-button>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-input placeholder=\"0%\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label position=\"stacked\">Tax Amount</ion-label>\n            <ion-input placeholder=\"% 0.00\"></ion-input>\n          </ion-item>\n        </ion-col> \n        <ion-col col-3>\n          <ion-item>\n            <ion-button>\n              <ion-icon name=\"cash-outline\"></ion-icon>\n            </ion-button>\n          </ion-item>\n          <ion-item>\n            <ion-button>\n              <ion-icon name=\"wallet-outline\"></ion-icon>\n            </ion-button>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pricing/pricing-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pricing/pricing-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: PricingPageRoutingModule */

    /***/
    function srcAppPricingPricingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PricingPageRoutingModule", function () {
        return PricingPageRoutingModule;
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


      var _pricing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pricing.page */
      "./src/app/pricing/pricing.page.ts");

      var routes = [{
        path: '',
        component: _pricing_page__WEBPACK_IMPORTED_MODULE_3__["PricingPage"]
      }];

      var PricingPageRoutingModule = function PricingPageRoutingModule() {
        _classCallCheck(this, PricingPageRoutingModule);
      };

      PricingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PricingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pricing/pricing.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pricing/pricing.module.ts ***!
      \*******************************************/

    /*! exports provided: PricingPageModule */

    /***/
    function srcAppPricingPricingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PricingPageModule", function () {
        return PricingPageModule;
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


      var _pricing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pricing-routing.module */
      "./src/app/pricing/pricing-routing.module.ts");
      /* harmony import */


      var _pricing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pricing.page */
      "./src/app/pricing/pricing.page.ts");

      var PricingPageModule = function PricingPageModule() {
        _classCallCheck(this, PricingPageModule);
      };

      PricingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pricing_routing_module__WEBPACK_IMPORTED_MODULE_5__["PricingPageRoutingModule"]],
        declarations: [_pricing_page__WEBPACK_IMPORTED_MODULE_6__["PricingPage"]]
      })], PricingPageModule);
      /***/
    },

    /***/
    "./src/app/pricing/pricing.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pricing/pricing.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPricingPricingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNpbmcvcHJpY2luZy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pricing/pricing.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pricing/pricing.page.ts ***!
      \*****************************************/

    /*! exports provided: PricingPage */

    /***/
    function srcAppPricingPricingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PricingPage", function () {
        return PricingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PricingPage = /*#__PURE__*/function () {
        function PricingPage() {
          _classCallCheck(this, PricingPage);
        }

        _createClass(PricingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PricingPage;
      }();

      PricingPage.ctorParameters = function () {
        return [];
      };

      PricingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pricing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./pricing.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pricing/pricing.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./pricing.page.scss */
        "./src/app/pricing/pricing.page.scss"))["default"]]
      })], PricingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pricing-pricing-module-es5.js.map