webpackHotUpdate_N_E("pages/auth/account/cart",{

/***/ "./components/ProductsCart/index.js":
/*!******************************************!*\
  !*** ./components/ProductsCart/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Product_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Product/index.js */ "./components/Product/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Reducers_productsSlice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Reducers/productsSlice.js */ "./Reducers/productsSlice.js");
/* harmony import */ var _Reducers_userSlice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Reducers/userSlice.js */ "./Reducers/userSlice.js");
/* harmony import */ var _components_AddProductForm_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/AddProductForm/index.js */ "./components/AddProductForm/index.js");



var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\ProductsCart\\index.js",
    _this = undefined,
    _s = $RefreshSig$();









var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ProductsCart__Wrapper",
  componentId: "sc-1wiehr-0"
})(["display:flex;flex-direction:column;width:100%;align-items:center;"]);
_c = Wrapper;
var OrderBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ProductsCart__OrderBox",
  componentId: "sc-1wiehr-1"
})(["display:flex;align-items:center;justify-content:center;padding:15px;& > .MuiButton-containedSecondary{margin:15px;background-color:#b73d1cbf;&:hover{background-color:#ff3600bf;}}"]);
_c2 = OrderBox;
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "ProductsCart__Heading",
  componentId: "sc-1wiehr-2"
})(["width:100%;text-align:center;padding:40px;color:rgb(255 90 90 /90%);"]);
_c3 = Heading;
var TotalPrize = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "ProductsCart__TotalPrize",
  componentId: "sc-1wiehr-3"
})(["color:rgb(255 90 90 /90%);align-self:flex-end;font-size:1.2em;margin:20px;@media (min-width:960px){margin:20px 40px;}"]);
_c4 = TotalPrize;

var ProductsCart = function ProductsCart() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_Reducers_productsSlice_js__WEBPACK_IMPORTED_MODULE_6__["selectProducts"]),
      products = _useSelector.products;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_Reducers_userSlice_js__WEBPACK_IMPORTED_MODULE_7__["selectUser"]),
      user = _useSelector2.user;

  console.log(user.email);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
    children: [user.email === "admin@admin.com" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AddProductForm_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 44
    }, _this), user.email !== "admin@admin.com" && products.length >= 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [products.map(function (product, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
          product: product,
          productIndex: index
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TotalPrize, {
        children: "Total prize: 12$"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, _this)]
    }, void 0, true) : user.email !== "admin@admin.com" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Heading, {
      children: "No products in cart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 44
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: user.email !== "admin@admin.com" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(OrderBox, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          type: "submit",
          variant: "contained",
          color: "secondary",
          disabled: products.length < 1 && true,
          children: "Click to order"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }, _this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, _this);
};

_s(ProductsCart, "77LjXvl+FNGwb3N9/E0u6K9Jve4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c5 = ProductsCart;
/* harmony default export */ __webpack_exports__["default"] = (ProductsCart);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "OrderBox");
$RefreshReg$(_c3, "Heading");
$RefreshReg$(_c4, "TotalPrize");
$RefreshReg$(_c5, "ProductsCart");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0NhcnQvaW5kZXguanMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIk9yZGVyQm94IiwiSGVhZGluZyIsImgxIiwiVG90YWxQcml6ZSIsInAiLCJQcm9kdWN0c0NhcnQiLCJ1c2VTZWxlY3RvciIsInNlbGVjdFByb2R1Y3RzIiwicHJvZHVjdHMiLCJzZWxlY3RVc2VyIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbCIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3QiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlFQUFiO0tBQU1GLE87QUFPTixJQUFNRyxRQUFRLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMExBQWQ7TUFBTUMsUTtBQWdCTixJQUFNQyxPQUFPLEdBQUdILHlEQUFNLENBQUNJLEVBQVY7QUFBQTtBQUFBO0FBQUEsNEVBQWI7TUFBTUQsTztBQU9OLElBQU1FLFVBQVUsR0FBR0wseURBQU0sQ0FBQ00sQ0FBVjtBQUFBO0FBQUE7QUFBQSw2SEFBaEI7TUFBTUQsVTs7QUFXTixJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEscUJBQ0pDLCtEQUFXLENBQUNDLHlFQUFELENBRFA7QUFBQSxNQUNqQkMsUUFEaUIsZ0JBQ2pCQSxRQURpQjs7QUFBQSxzQkFFUkYsK0RBQVcsQ0FBQ0csaUVBQUQsQ0FGSDtBQUFBLE1BRWpCQyxJQUZpQixpQkFFakJBLElBRmlCOztBQUd6QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csS0FBakI7QUFFQSxzQkFDRSxxRUFBQyxPQUFEO0FBQUEsZUFDR0gsSUFBSSxDQUFDRyxLQUFMLEtBQWUsaUJBQWYsaUJBQW9DLHFFQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEdkMsRUFFR0gsSUFBSSxDQUFDRyxLQUFMLEtBQWUsaUJBQWYsSUFBb0NMLFFBQVEsQ0FBQ00sTUFBVCxJQUFtQixDQUF2RCxnQkFDQztBQUFBLGlCQUNHTixRQUFRLENBQUNPLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSw0QkFDWixxRUFBQyx5REFBRDtBQUFxQixpQkFBTyxFQUFFRCxPQUE5QjtBQUF1QyxzQkFBWSxFQUFFQztBQUFyRCxXQUFjQSxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFk7QUFBQSxPQUFiLENBREgsZUFJRSxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQSxvQkFERCxHQVFDUCxJQUFJLENBQUNHLEtBQUwsS0FBYyxpQkFBZCxpQkFBbUMscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZ2QyxlQWFFO0FBQUEsZ0JBQ0dILElBQUksQ0FBQ0csS0FBTCxLQUFlLGlCQUFmLGlCQUNDLHFFQUFDLFFBQUQ7QUFBQSwrQkFDRSxxRUFBQyx3REFBRDtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsaUJBQU8sRUFBQyxXQUZWO0FBR0UsZUFBSyxFQUFDLFdBSFI7QUFJRSxrQkFBUSxFQUFFTCxRQUFRLENBQUNNLE1BQVQsR0FBa0IsQ0FBbEIsSUFBdUIsSUFKbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkoscUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4QkQsQ0FuQ0Q7O0dBQU1ULFk7VUFDaUJDLHVELEVBQ0pBLHVEOzs7TUFGYkQsWTtBQXFDU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9hY2NvdW50L2NhcnQuNTU5YzU2ZmY1MDg4OWIyZGVlMjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uL1Byb2R1Y3QvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBzZWxlY3RQcm9kdWN0cyB9IGZyb20gXCIuLi8uLi9SZWR1Y2Vycy9wcm9kdWN0c1NsaWNlLmpzXCI7XHJcbmltcG9ydCB7IHNlbGVjdFVzZXIgfSBmcm9tIFwiLi4vLi4vUmVkdWNlcnMvdXNlclNsaWNlLmpzXCI7XHJcbmltcG9ydCBBZGRQcm9kdWN0Rm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BZGRQcm9kdWN0Rm9ybS9pbmRleC5qc1wiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBPcmRlckJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gICYgPiAuTXVpQnV0dG9uLWNvbnRhaW5lZFNlY29uZGFyeSB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjczZDFjYmY7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM2MDBiZjtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkaW5nID0gc3R5bGVkLmgxYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGNvbG9yOiByZ2IoMjU1IDkwIDkwIC85MCUpO1xyXG5gO1xyXG5cclxuY29uc3QgVG90YWxQcml6ZSA9IHN0eWxlZC5wYFxyXG4gIGNvbG9yOiByZ2IoMjU1IDkwIDkwIC85MCUpO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIG1hcmdpbjogMjBweCA0MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3RzQ2FydCA9ICgpID0+IHtcclxuICBjb25zdCB7IHByb2R1Y3RzIH0gPSB1c2VTZWxlY3RvcihzZWxlY3RQcm9kdWN0cyk7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyKTtcclxuICBjb25zb2xlLmxvZyh1c2VyLmVtYWlsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICB7dXNlci5lbWFpbCA9PT0gXCJhZG1pbkBhZG1pbi5jb21cIiAmJiA8QWRkUHJvZHVjdEZvcm0gLz59XHJcbiAgICAgIHt1c2VyLmVtYWlsICE9PSBcImFkbWluQGFkbWluLmNvbVwiICYmIHByb2R1Y3RzLmxlbmd0aCA+PSAxICA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFByb2R1Y3Qga2V5PXtpbmRleH0gcHJvZHVjdD17cHJvZHVjdH0gcHJvZHVjdEluZGV4PXtpbmRleH0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPFRvdGFsUHJpemU+VG90YWwgcHJpemU6IDEyJDwvVG90YWxQcml6ZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICB1c2VyLmVtYWlsICE9PVwiYWRtaW5AYWRtaW4uY29tXCIgJiYgPEhlYWRpbmc+Tm8gcHJvZHVjdHMgaW4gY2FydDwvSGVhZGluZz5cclxuICAgICAgKX1cclxuICAgICBcclxuICAgICAgPD5cclxuICAgICAgICB7dXNlci5lbWFpbCAhPT0gXCJhZG1pbkBhZG1pbi5jb21cIiAmJiAoXHJcbiAgICAgICAgICA8T3JkZXJCb3g+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgIGNvbG9yPSdzZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb2R1Y3RzLmxlbmd0aCA8IDEgJiYgdHJ1ZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENsaWNrIHRvIG9yZGVyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9PcmRlckJveD5cclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNDYXJ0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9