(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_check_network_spoil00010_error_network-error-access-ten_module_ts"],{

/***/ 84884:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/check_network_spoil00010_error/network-error-access-ten-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkErrorAccessTenPageRoutingModule": () => (/* binding */ NetworkErrorAccessTenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _network_error_access_ten_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-error-access-ten.page */ 80305);




const routes = [
    {
        path: '',
        component: _network_error_access_ten_page__WEBPACK_IMPORTED_MODULE_0__.NetworkErrorAccessTenPage
    }
];
let NetworkErrorAccessTenPageRoutingModule = class NetworkErrorAccessTenPageRoutingModule {
};
NetworkErrorAccessTenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NetworkErrorAccessTenPageRoutingModule);



/***/ }),

/***/ 56289:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/check_network_spoil00010_error/network-error-access-ten.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkErrorAccessTenPageModule": () => (/* binding */ NetworkErrorAccessTenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _network_error_access_ten_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-error-access-ten-routing.module */ 84884);
/* harmony import */ var _network_error_access_ten_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network-error-access-ten.page */ 80305);







let NetworkErrorAccessTenPageModule = class NetworkErrorAccessTenPageModule {
};
NetworkErrorAccessTenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _network_error_access_ten_routing_module__WEBPACK_IMPORTED_MODULE_0__.NetworkErrorAccessTenPageRoutingModule
        ],
        declarations: [_network_error_access_ten_page__WEBPACK_IMPORTED_MODULE_1__.NetworkErrorAccessTenPage]
    })
], NetworkErrorAccessTenPageModule);



/***/ }),

/***/ 80305:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/check_network_spoil00010_error/network-error-access-ten.page.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkErrorAccessTenPage": () => (/* binding */ NetworkErrorAccessTenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_network_error_access_ten_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./network-error-access-ten.page.html */ 45818);
/* harmony import */ var _network_error_access_ten_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network-error-access-ten.page.scss */ 16056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let NetworkErrorAccessTenPage = class NetworkErrorAccessTenPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['check_network_spoil00010_error'];
        });
    }
    confirm() {
        this.route.navigate(['/access-code', {
                t: new Date().getTime()
            }]);
    }
    rpbtn() {
        this.route.navigate(['/tobecontinue']);
    }
    printbtn() {
        this.route.navigate(['/print-return']);
    }
};
NetworkErrorAccessTenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NetworkErrorAccessTenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-network-error-access-ten',
        template: _raw_loader_network_error_access_ten_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_network_error_access_ten_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NetworkErrorAccessTenPage);



/***/ }),

/***/ 16056:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/check_network_spoil00010_error/network-error-access-ten.page.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.next-btn {\n  text-align: end;\n}\n\np {\n  font-size: 24px;\n  font-weight: 700;\n  color: #000000;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldHdvcmstZXJyb3ItYWNjZXNzLXRlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNGIiwiZmlsZSI6Im5ldHdvcmstZXJyb3ItYWNjZXNzLXRlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmxpc3QtcXVlc3Rpb24ge1xyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbn1cclxuXHJcbi5uZXh0LWJ0biB7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 45818:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check_network_spoil00010_error/network-error-access-ten.page.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <p>{{results.first_para}}</p>\r\n  <p>{{results.sec_para}}</p>\r\n  <ion-button color=\"dark\" (click)=\"rpbtn()\">\r\n    {{results.rbtn}}\r\n    <ion-icon slot=\"end\" name=\"help-outline\"></ion-icon>\r\n  </ion-button>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\">\r\n        <ion-button color=\"dark\" (click)=\"confirm()\">\r\n          {{results.try_again}}\r\n          <ion-icon slot=\"end\" name=\"sync-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"printbtn   ()\">\r\n          {{results.print}}\r\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_check_network_spoil00010_error_network-error-access-ten_module_ts.js.map