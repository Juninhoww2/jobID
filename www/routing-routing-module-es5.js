(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routing-routing-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/routing/routing.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routing/routing.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRoutingRoutingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button href=\"home\">\n    General\n  </ion-button>\n  <ion-button href=\"production\">\n    Production\n  </ion-button>\n  <ion-button href=\"pricing\">\n    Pricing\n  </ion-button>\n  <ion-button href=\"deliviries\">\n    Deliviries\n  </ion-button>\n  <ion-button href=\"routing\">\n    Routing\n  </ion-button>\n  <ion-button href=\"material\">\n    Material\n  </ion-button>\n  <ion-button href=\"assemblies\">\n    Assemblies\n  </ion-button>\n  <ion-button href=\"releases\">\n    Releases\n  </ion-button>\n  <ion-button href=\"custom\">\n    Custom\n  </ion-button>\n  \n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n         <ion-col col-3>\n          <div>\n            <ion-item>\n             <ion-label>Inside</ion-label>\n             <ion-checkbox></ion-checkbox>\n             </ion-item>\n          </div>\n         </ion-col>\n         <ion-col col-3>\n          <div>\n            <ion-item>\n              <ion-label>Outside</ion-label>\n              <ion-checkbox></ion-checkbox>\n            </ion-item>\n          </div>  \n         </ion-col>\n         <ion-col col-3>\n           <div>\n              <ion-item>\n               <ion-label position=\"stacked\">Status</ion-label>\n               <ion-input></ion-input>\n              </ion-item>\n           </div> \n          </ion-col>\n         <ion-col size=\"2\" col-3>\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Work Center ID</ion-label>\n              <ion-input></ion-input>\n            </ion-item>\n          </div>\n         </ion-col>\n       </ion-row>\n      </ion-grid>  \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">\n            <div>\n              <ion-item>\n                <ion-label position=\"stacked\">Operation ID</ion-label>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"1\">\n            <div>\n              <ion-item>\n                <ion-button>\n                  <ion-icon name=\"search-outline\"></ion-icon>\n                </ion-button>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid> \n      <ion-grid>\n        <ion-row>\n          <ion-col size='2'>\n            <div>\n              <ion-item>\n                <ion-label position=\"stacked\">\n                  Description\n                </ion-label>\n                <ion-input></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>   \n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-title>Labor</ion-card-title>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\" col-3>\n            <div>\n              <ion-item>\n                <ion-label position=\"stacked\">Setup Hrs</ion-label>\n                <ion-input></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"2\" col-3>\n            <div>\n              <ion-item>\n                <ion-label position=\"stacked\">Run Rate</ion-label>\n                <ion-input></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col  size=\"2\" col-3>\n            <div>\n              <ion-item>\n                <ion-label position=\"stacked\">Run Rate Type</ion-label>\n                <ion-input></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\" col-3>\n            <div>\n              <ion-item>\n                <ion-label position=\"stacked\">Efficiency %</ion-label>\n                <ion-input></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col  size=\"2\" col-3>\n            <div>\n              <ion-item>\n                <ion-label position=\"stacked\">Attended %</ion-label>\n                <ion-input></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"2\" col-3>\n            <div>\n              <ion-item>\n                <ion-label position=\"stacked\">Total line Hrs</ion-label>\n                <ion-input></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"2\" col-3>\n            <div>\n              <ion-item>\n                <ion-label position=\"stacked\">Total Job Hrs</ion-label>\n                <ion-input placeholder=\"0.00\"></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid> \n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        Scheduling\n      </ion-card-title>\n        <ion-grid>\n          <ion-row>\n            <ion-col  size=\"2\" col-3>\n              <div>\n                <ion-item>\n                  <ion-label posistion=\"stacked\">Queue Hrs</ion-label>\n                  <ion-input></ion-input>\n                </ion-item>\n              </div>\n            </ion-col>\n            <ion-col  size=\"2\" col-3>\n              <div>\n                <ion-item>\n                  <ion-label position=\"stacked\">Lag Hrs</ion-label>\n                  <ion-input></ion-input>\n                </ion-item>\n              </div>\n            </ion-col>\n            <ion-col size=\"2\" col-3>\n              <div>\n                <ion-item>\n                  <ion-label position=\"stacked\">Resources Assigned</ion-label>\n                  <ion-input></ion-input>\n                </ion-item>\n              </div>\n            </ion-col>\n            <ion-col size=\"2\" col-3>\n              <div>\n                <ion-item>\n                  <ion-label position=\"stacked\">Overlap</ion-label>\n                  <ion-input></ion-input>\n                </ion-item>\n              </div>\n            </ion-col>\n            <ion-col col-3>\n              <div>\n                <ion-item>\n                  <ion-label position=\"stacked\">Overlap Type</ion-label>\n                  <ion-input></ion-input>\n                </ion-item>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/routing/routing-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/routing/routing-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: RoutingPageRoutingModule */

    /***/
    function srcAppRoutingRoutingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoutingPageRoutingModule", function () {
        return RoutingPageRoutingModule;
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


      var _routing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./routing.page */
      "./src/app/routing/routing.page.ts");

      var routes = [{
        path: '',
        component: _routing_page__WEBPACK_IMPORTED_MODULE_3__["RoutingPage"]
      }];

      var RoutingPageRoutingModule = function RoutingPageRoutingModule() {
        _classCallCheck(this, RoutingPageRoutingModule);
      };

      RoutingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RoutingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/routing/routing.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/routing/routing.module.ts ***!
      \*******************************************/

    /*! exports provided: RoutingPageModule */

    /***/
    function srcAppRoutingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoutingPageModule", function () {
        return RoutingPageModule;
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


      var _routing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./routing-routing.module */
      "./src/app/routing/routing-routing.module.ts");
      /* harmony import */


      var _routing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./routing.page */
      "./src/app/routing/routing.page.ts");

      var RoutingPageModule = function RoutingPageModule() {
        _classCallCheck(this, RoutingPageModule);
      };

      RoutingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _routing_routing_module__WEBPACK_IMPORTED_MODULE_5__["RoutingPageRoutingModule"]],
        declarations: [_routing_page__WEBPACK_IMPORTED_MODULE_6__["RoutingPage"]]
      })], RoutingPageModule);
      /***/
    },

    /***/
    "./src/app/routing/routing.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/routing/routing.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppRoutingRoutingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRpbmcvcm91dGluZy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/routing/routing.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/routing/routing.page.ts ***!
      \*****************************************/

    /*! exports provided: RoutingPage */

    /***/
    function srcAppRoutingRoutingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoutingPage", function () {
        return RoutingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RoutingPage = /*#__PURE__*/function () {
        function RoutingPage() {
          _classCallCheck(this, RoutingPage);
        }

        _createClass(RoutingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RoutingPage;
      }();

      RoutingPage.ctorParameters = function () {
        return [];
      };

      RoutingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-routing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./routing.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/routing/routing.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./routing.page.scss */
        "./src/app/routing/routing.page.scss"))["default"]]
      })], RoutingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=routing-routing-module-es5.js.map