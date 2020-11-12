module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Reducers/productsSlice.js":
/*!***********************************!*\
  !*** ./Reducers/productsSlice.js ***!
  \***********************************/
/*! exports provided: productsSlice, increaseAmount, decreaseAmount, addProductToCart, clearCart, selectProducts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsSlice", function() { return productsSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseAmount", function() { return increaseAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseAmount", function() { return decreaseAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductToCart", function() { return addProductToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCart", function() { return clearCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProducts", function() { return selectProducts; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const productsSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "products",
  initialState: {
    products: []
  },
  reducers: {
    increaseAmount: (state, action) => {
      if (state.products[action.payload].amount <= state.products[action.payload].availableAmount) {
        state.products[action.payload].amount = state.products[action.payload].amount + 1;
      }
    },
    decreaseAmount: (state, action) => {
      if (state.products[action.payload].amount > 1) {
        state.products[action.payload].amount = state.products[action.payload].amount - 1;
      } else if (state.products[action.payload].amount = 1) {
        state.products.splice(action.payload, 1);
      }
    },
    addProductToCart: (state, action) => {
      state.products.push(action.payload);
    },
    clearCart: state => {
      state.products = [];
    }
  }
});
const {
  increaseAmount,
  decreaseAmount,
  addProductToCart,
  clearCart
} = productsSlice.actions;
const selectProducts = state => state.products;
/* harmony default export */ __webpack_exports__["default"] = (productsSlice.reducer);

/***/ }),

/***/ "./Reducers/userSlice.js":
/*!*******************************!*\
  !*** ./Reducers/userSlice.js ***!
  \*******************************/
/*! exports provided: userSlice, setUser, deleteUser, selectUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSlice", function() { return userSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUser", function() { return selectUser; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const userSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "photos",
  initialState: {
    user: null
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: (state, action) => {
      state.user = null;
    }
  }
});
const {
  setUser,
  deleteUser
} = userSlice.actions;
const selectUser = state => state.user;
/* harmony default export */ __webpack_exports__["default"] = (userSlice.reducer);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store.js */ "./store/store.js");

var _jsxFileName = "D:\\projekty\\ecommerce\\front\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _store_store_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Reducers_userSlice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Reducers/userSlice.js */ "./Reducers/userSlice.js");
/* harmony import */ var _Reducers_productsSlice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Reducers/productsSlice.js */ "./Reducers/productsSlice.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
  reducer: {
    user: _Reducers_userSlice_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    products: _Reducers_productsSlice_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
}));

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUmVkdWNlcnMvcHJvZHVjdHNTbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9SZWR1Y2Vycy91c2VyU2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJwcm9kdWN0c1NsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicHJvZHVjdHMiLCJyZWR1Y2VycyIsImluY3JlYXNlQW1vdW50Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYW1vdW50IiwiYXZhaWxhYmxlQW1vdW50IiwiZGVjcmVhc2VBbW91bnQiLCJzcGxpY2UiLCJhZGRQcm9kdWN0VG9DYXJ0IiwicHVzaCIsImNsZWFyQ2FydCIsImFjdGlvbnMiLCJzZWxlY3RQcm9kdWN0cyIsInJlZHVjZXIiLCJ1c2VyU2xpY2UiLCJ1c2VyIiwic2V0VXNlciIsImRlbGV0ZVVzZXIiLCJzZWxlY3RVc2VyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwidXNlclJlZHVjZXIiLCJwcm9kdWN0c1JlZHVjZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtR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YWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJwcm9kdWN0c1wiLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgcHJvZHVjdHM6IFtdLFxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGluY3JlYXNlQW1vdW50OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgc3RhdGUucHJvZHVjdHNbYWN0aW9uLnBheWxvYWRdLmFtb3VudCA8PVxyXG4gICAgICAgIHN0YXRlLnByb2R1Y3RzW2FjdGlvbi5wYXlsb2FkXS5hdmFpbGFibGVBbW91bnRcclxuICAgICAgKSB7XHJcbiAgICAgICAgc3RhdGUucHJvZHVjdHNbYWN0aW9uLnBheWxvYWRdLmFtb3VudCA9XHJcbiAgICAgICAgICBzdGF0ZS5wcm9kdWN0c1thY3Rpb24ucGF5bG9hZF0uYW1vdW50ICsgMTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRlY3JlYXNlQW1vdW50OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBpZiAoc3RhdGUucHJvZHVjdHNbYWN0aW9uLnBheWxvYWRdLmFtb3VudCA+IDEpIHtcclxuICAgICAgICBzdGF0ZS5wcm9kdWN0c1thY3Rpb24ucGF5bG9hZF0uYW1vdW50ID1cclxuICAgICAgICAgIHN0YXRlLnByb2R1Y3RzW2FjdGlvbi5wYXlsb2FkXS5hbW91bnQgLSAxO1xyXG4gICAgICB9IGVsc2UgaWYgKChzdGF0ZS5wcm9kdWN0c1thY3Rpb24ucGF5bG9hZF0uYW1vdW50ID0gMSkpIHtcclxuICAgICAgICBzdGF0ZS5wcm9kdWN0cy5zcGxpY2UoYWN0aW9uLnBheWxvYWQsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWRkUHJvZHVjdFRvQ2FydDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUucHJvZHVjdHMucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJDYXJ0OiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUucHJvZHVjdHMgPSBbXTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gIGluY3JlYXNlQW1vdW50LFxyXG4gIGRlY3JlYXNlQW1vdW50LFxyXG4gIGFkZFByb2R1Y3RUb0NhcnQsXHJcbiAgY2xlYXJDYXJ0LFxyXG59ID0gcHJvZHVjdHNTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFByb2R1Y3RzID0gKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzU2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInBob3Rvc1wiLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgdXNlcjogbnVsbCxcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRVc2VyOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlVXNlcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IG51bGw7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0VXNlciwgZGVsZXRlVXNlciB9ID0gdXNlclNsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlciA9IChzdGF0ZSkgPT4gc3RhdGUudXNlcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJTbGljZS5yZWR1Y2VyO1xyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3N0b3JlL3N0b3JlLmpzXCI7XG5cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gXCIuLi9SZWR1Y2Vycy91c2VyU2xpY2UuanNcIjtcclxuaW1wb3J0IHByb2R1Y3RzUmVkdWNlciBmcm9tIFwiLi4vUmVkdWNlcnMvcHJvZHVjdHNTbGljZS5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgdXNlcjogdXNlclJlZHVjZXIsXHJcbiAgICBwcm9kdWN0czogcHJvZHVjdHNSZWR1Y2VyLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9