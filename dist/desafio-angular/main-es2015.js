(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">Marvel Heros</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#conteudoNavbarSuportado\"\n            aria-controls=\"conteudoNavbarSuportado\" aria-expanded=\"false\" aria-label=\"Alterna navegação\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"conteudoNavbarSuportado\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Heros</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"container block-router\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/heros/detail/detail.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/heros/detail/detail.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row block-detail\" *ngIf=\"heroObject\">\n  <div class=\"col-lg-6 block-image\">\n    <img class=\"card-img\" src=\"{{heroObject?.thumbnail.path}}.{{heroObject?.thumbnail.extension}}\" alt=\"{{heroObject?.name}}\">\n  </div>\n  <div class=\"col-lg-5 d-flex align-items-start flex-column justify-content-center\">\n\n    <h2>{{heroObject?.name}}</h2>\n    <p>{{heroObject?.description}}</p>\n\n    <div class=\"buttons-redirect\">\n      <a href=\"{{heroObject?.urls[0].url}}\" class=\"btn btn-primary\" target=\"_blank\">See on Marvel's page</a>\n    </div>\n\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"heroObject === false\">\n   <div class=\"col-md-12\">\n     <h4 class=\"text-center\">We cannot find this hero, please <a [routerLink]=\"['/heros']\">come back</a> to the home page</h4>\n   </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/heros/heros.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/heros/heros.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-12\">\n    <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"Search something\" name=\"search\" [(ngModel)]=\"searchParams\" (ngModelChange)=\"searchHeroes($event)\">\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-3 col-md-4\" *ngFor=\"let hero of herosList\">\n    <a [routerLink]=\"['/heros', hero.id]\">\n      <div class=\"card card-hero\">\n        <img class=\"card-img\" src=\"{{hero.thumbnail.path}}.{{hero.thumbnail.extension}}\" alt=\"{{hero.name}}\">\n        <h5 class=\"card-title\">{{hero.name}}</h5>\n      </div>\n    </a>\n  </div>\n</div>\n<app-load-animation *ngIf=\"loadingList\"></app-load-animation>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/load-animation/load-animation.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/load-animation/load-animation.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"block-bars w-100 d-flex justify-content-center align-items-center\">\n  <div class=\"bar\"></div>\n  <div class=\"bar\"></div>\n  <div class=\"bar\"></div>\n  <div class=\"bar\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _heros_heros_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heros/heros.component */ "./src/app/heros/heros.component.ts");
/* harmony import */ var _heros_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heros/detail/detail.component */ "./src/app/heros/detail/detail.component.ts");





const routes = [
    { path: 'heros', component: _heros_heros_component__WEBPACK_IMPORTED_MODULE_3__["HerosComponent"] },
    { path: 'heros/:id', component: _heros_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"] },
    { path: '**', redirectTo: 'heros', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".block-router {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHhhbXBwXFxodGRvY3NcXGFuZ3VsYXItYXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2stcm91dGVye1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbiIsIi5ibG9jay1yb3V0ZXIge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _heros_heros_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./heros/heros.component */ "./src/app/heros/heros.component.ts");
/* harmony import */ var _heros_detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./heros/detail/detail.component */ "./src/app/heros/detail/detail.component.ts");
/* harmony import */ var _load_animation_load_animation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./load-animation/load-animation.component */ "./src/app/load-animation/load-animation.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _heros_heros_component__WEBPACK_IMPORTED_MODULE_6__["HerosComponent"],
            _heros_detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"],
            _load_animation_load_animation_component__WEBPACK_IMPORTED_MODULE_8__["LoadAnimationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




/*PARAMETROS DE CONFIGURACAO DE AUTH*/
const API_BASE_URL = 'http://gateway.marvel.com/v1/public';
const PUBLIC_KEY = 'c0489a3d02c0467470ef1a5d3a181105';
const PRIVATE_KEY = 'cec823ee9111b54486cf681dc64290637eca2077';
let AppService = class AppService {
    constructor(http) {
        this.http = http;
    }
    /*MONTA O PEDACO DA URL QUE GERA AUTENTICACAO*/
    get urlAuth() {
        const time = new Date().getTime();
        return `?ts=${time}&apikey=${PUBLIC_KEY}&hash=${ts_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"].hashStr(time + PRIVATE_KEY + PUBLIC_KEY)}`;
    }
    /*BUSCA A LISTA DOS HEROIS NA API DE ACORDO COM A PAGINA, LIMITE E PARAMETROS DE BUSCA*/
    getHerosList(limit, page, search = null) {
        let searchName = search ? `&nameStartsWith=${search}` : '';
        return this.http.get(`${API_BASE_URL}/characters${this.urlAuth}&limit=${limit}&offset=${page * limit}${searchName}`);
    }
    /*BUSCA OS DETALHES DO HEROI PELO ID NA API*/
    getHeroById(id) {
        return this.http.get(`${API_BASE_URL}/characters/${id}${this.urlAuth}`);
    }
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ "./src/app/heros/detail/detail.component.scss":
/*!****************************************************!*\
  !*** ./src/app/heros/detail/detail.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".block-detail {\n  padding-bottom: 10px;\n}\n\n.block-image {\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb3MvZGV0YWlsL0Q6XFx4YW1wcFxcaHRkb2NzXFxhbmd1bGFyLWFwcC9zcmNcXGFwcFxcaGVyb3NcXGRldGFpbFxcZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZXJvcy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hlcm9zL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2stZGV0YWlse1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYmxvY2staW1hZ2V7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiIsIi5ibG9jay1kZXRhaWwge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmJsb2NrLWltYWdlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/heros/detail/detail.component.ts":
/*!**************************************************!*\
  !*** ./src/app/heros/detail/detail.component.ts ***!
  \**************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");




let DetailComponent = class DetailComponent {
    constructor(activatedRoute, service) {
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.heroObject = null;
        this.activatedRoute.params.subscribe(params => {
            this.heroId = params['id'];
        });
    }
    ngOnInit() {
        this.getHeroObject(this.heroId);
    }
    /*BUSCA OS DETALHES DO HEROI CHAMANDO O METODO DO SERVICO*/
    getHeroObject(id) {
        this.service.getHeroById(id).subscribe((res) => {
            this.heroObject = res.data.results[0];
        }, err => this.heroObject = false);
    }
};
DetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
];
DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/heros/detail/detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail.component.scss */ "./src/app/heros/detail/detail.component.scss")).default]
    })
], DetailComponent);



/***/ }),

/***/ "./src/app/heros/heros.component.scss":
/*!********************************************!*\
  !*** ./src/app/heros/heros.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-hero {\n  margin: 10px 0;\n  height: 350px;\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  cursor: pointer;\n  overflow: hidden;\n}\n.card-hero img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center center;\n     object-position: center center;\n  width: 100%;\n  height: 100%;\n  transition: transform 300ms;\n}\n.card-hero h5 {\n  position: absolute;\n  color: #fff;\n  padding: 15px;\n  z-index: 2;\n}\n.card-hero::before {\n  content: \"\";\n  z-index: 1;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 80%;\n  background: linear-gradient(transparent, #000);\n}\n.card-hero:hover img {\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb3MvRDpcXHhhbXBwXFxodGRvY3NcXGFuZ3VsYXItYXBwL3NyY1xcYXBwXFxoZXJvc1xcaGVyb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlcm9zL2hlcm9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUY7QURFRTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxpQ0FBQTtLQUFBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0RKO0FESUU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDhDQUFBO0FDRko7QURNSTtFQUNFLHFCQUFBO0FDSk4iLCJmaWxlIjoic3JjL2FwcC9oZXJvcy9oZXJvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlcm8ge1xyXG5cclxuICBtYXJnaW46IDEwcHggMDtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIGltZ3tcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XHJcbiAgfVxyXG5cclxuICBoNXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5cclxuICAmOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgIzAwMCk7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVye1xyXG4gICAgaW1ne1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbiIsIi5jYXJkLWhlcm8ge1xuICBtYXJnaW46IDEwcHggMDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmQtaGVybyBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XG59XG4uY2FyZC1oZXJvIGg1IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweDtcbiAgei1pbmRleDogMjtcbn1cbi5jYXJkLWhlcm86OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgIzAwMCk7XG59XG4uY2FyZC1oZXJvOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/heros/heros.component.ts":
/*!******************************************!*\
  !*** ./src/app/heros/heros.component.ts ***!
  \******************************************/
/*! exports provided: HerosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HerosComponent", function() { return HerosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);





let HerosComponent = class HerosComponent {
    constructor(service) {
        this.service = service;
        this.herosList = [];
        this.searchParams = '';
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.actualPage = 0;
        this.limit = 8;
        this.loadingList = false;
        this.maxLengh = 0;
        /* CONFIGURACAO DO TIMEOUT APOS DIGITAR NO INPUT DE SEARCH */
        this.searchSubject.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(val => {
            this.searchParams = val;
            this.actualPage = 0;
            this.herosList = [];
            this.getHerosListFromService(this.limit, this.actualPage, this.searchParams);
        });
    }
    /* LISTENER DE SCROLL PARA O INFINITE SCROLL */
    onScroll() {
        this.verifyScrollPosision();
    }
    ngOnInit() {
        this.getHerosListFromService(this.limit, this.actualPage, this.searchParams);
    }
    /* BUSCA OS HEROIS CHAMANDO O METODO DE BUSCA DO SERVICO, USANDO AS VARIAVEIS DO COMPONENTE COMO PARAMETROS */
    getHerosListFromService(limit, page, search) {
        if (!this.loadingList) {
            this.loadingList = true;
            this.service.getHerosList(limit, page, search).subscribe((res) => {
                this.herosList = this.herosList.concat(res.data.results);
                this.maxLengh = res.data.total;
            }, err => {
            }, () => {
                this.loadingList = false;
                this.verifyScrollPosision();
            });
        }
    }
    /* VERIFICA A POSICAO DO SCROLL PARA INCREMENTAR UMA PAGINA E BUSCA MAIS HEROIS*/
    verifyScrollPosision() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && this.actualPage * this.limit <= this.maxLengh) {
            this.actualPage++;
            this.getHerosListFromService(this.limit, this.actualPage, this.searchParams);
        }
    }
    /* EVENTO DE BIND NO SUBJECT QUANDO O MODEL DE SEARCH MUDA DE VALOR */
    searchHeroes(event) {
        this.searchSubject.next(event);
    }
};
HerosComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', [])
], HerosComponent.prototype, "onScroll", null);
HerosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-heros',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./heros.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/heros/heros.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./heros.component.scss */ "./src/app/heros/heros.component.scss")).default]
    })
], HerosComponent);



/***/ }),

/***/ "./src/app/load-animation/load-animation.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/load-animation/load-animation.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".block-bars {\n  padding: 10px 0;\n}\n.block-bars .bar {\n  width: 10px;\n  height: 50px;\n  margin: 0 2.3px;\n  background: #343a40;\n  -webkit-animation: animateBar 700ms infinite;\n          animation: animateBar 700ms infinite;\n}\n.block-bars .bar:nth-child(2) {\n  -webkit-animation-delay: 100ms;\n          animation-delay: 100ms;\n}\n.block-bars .bar:nth-child(3) {\n  -webkit-animation-delay: 200ms;\n          animation-delay: 200ms;\n}\n.block-bars .bar:nth-child(4) {\n  -webkit-animation-delay: 300ms;\n          animation-delay: 300ms;\n}\n@-webkit-keyframes animateBar {\n  0%, 100% {\n    transform: scaleY(1);\n  }\n  50% {\n    transform: scaleY(0.5);\n  }\n}\n@keyframes animateBar {\n  0%, 100% {\n    transform: scaleY(1);\n  }\n  50% {\n    transform: scaleY(0.5);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZC1hbmltYXRpb24vRDpcXHhhbXBwXFxodGRvY3NcXGFuZ3VsYXItYXBwL3NyY1xcYXBwXFxsb2FkLWFuaW1hdGlvblxcbG9hZC1hbmltYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvYWQtYW5pbWF0aW9uL2xvYWQtYW5pbWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsZUFBQTtBQ0FGO0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7QUNBSjtBREVJO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBQ0FOO0FER0k7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDRE47QURJSTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QUNGTjtBRFVBO0VBQ0U7SUFDRSxvQkFBQTtFQ1BGO0VEU0E7SUFDRSxzQkFBQTtFQ1BGO0FBQ0Y7QURDQTtFQUNFO0lBQ0Usb0JBQUE7RUNQRjtFRFNBO0lBQ0Usc0JBQUE7RUNQRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9hZC1hbmltYXRpb24vbG9hZC1hbmltYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2stYmFycyB7XHJcblxyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbiAgLmJhciB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMCAyLjNweDtcclxuICAgIGJhY2tncm91bmQ6ICMzNDNhNDA7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGVCYXIgNzAwbXMgaW5maW5pdGU7XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMil7XHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMTAwbXM7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMyl7XHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMjAwbXM7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoNCl7XHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMzAwbXM7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGVCYXIge1xyXG4gIDAlLCAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcclxuICB9XHJcbn1cclxuIiwiLmJsb2NrLWJhcnMge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uYmxvY2stYmFycyAuYmFyIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAwIDIuM3B4O1xuICBiYWNrZ3JvdW5kOiAjMzQzYTQwO1xuICBhbmltYXRpb246IGFuaW1hdGVCYXIgNzAwbXMgaW5maW5pdGU7XG59XG4uYmxvY2stYmFycyAuYmFyOm50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMTAwbXM7XG59XG4uYmxvY2stYmFycyAuYmFyOm50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMjAwbXM7XG59XG4uYmxvY2stYmFycyAuYmFyOm50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMzAwbXM7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZUJhciB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/load-animation/load-animation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/load-animation/load-animation.component.ts ***!
  \************************************************************/
/*! exports provided: LoadAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAnimationComponent", function() { return LoadAnimationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoadAnimationComponent = class LoadAnimationComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoadAnimationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-load-animation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./load-animation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/load-animation/load-animation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./load-animation.component.scss */ "./src/app/load-animation/load-animation.component.scss")).default]
    })
], LoadAnimationComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\xampp\htdocs\angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map