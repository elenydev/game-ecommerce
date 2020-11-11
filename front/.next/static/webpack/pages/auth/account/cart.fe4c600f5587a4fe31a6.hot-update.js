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
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Heading, {
      children: "No products in cart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0NhcnQvaW5kZXguanMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIk9yZGVyQm94IiwiSGVhZGluZyIsImgxIiwiVG90YWxQcml6ZSIsInAiLCJQcm9kdWN0c0NhcnQiLCJ1c2VTZWxlY3RvciIsInNlbGVjdFByb2R1Y3RzIiwicHJvZHVjdHMiLCJzZWxlY3RVc2VyIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbCIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3QiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlFQUFiO0tBQU1GLE87QUFPTixJQUFNRyxRQUFRLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMExBQWQ7TUFBTUMsUTtBQWdCTixJQUFNQyxPQUFPLEdBQUdILHlEQUFNLENBQUNJLEVBQVY7QUFBQTtBQUFBO0FBQUEsNEVBQWI7TUFBTUQsTztBQU9OLElBQU1FLFVBQVUsR0FBR0wseURBQU0sQ0FBQ00sQ0FBVjtBQUFBO0FBQUE7QUFBQSw2SEFBaEI7TUFBTUQsVTs7QUFXTixJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEscUJBQ0pDLCtEQUFXLENBQUNDLHlFQUFELENBRFA7QUFBQSxNQUNqQkMsUUFEaUIsZ0JBQ2pCQSxRQURpQjs7QUFBQSxzQkFFUkYsK0RBQVcsQ0FBQ0csaUVBQUQsQ0FGSDtBQUFBLE1BRWpCQyxJQUZpQixpQkFFakJBLElBRmlCOztBQUd6QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csS0FBakI7QUFFQSxzQkFDRSxxRUFBQyxPQUFEO0FBQUEsZUFDR0gsSUFBSSxDQUFDRyxLQUFMLEtBQWUsaUJBQWYsaUJBQW9DLHFFQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEdkMsRUFFR0gsSUFBSSxDQUFDRyxLQUFMLEtBQWUsaUJBQWYsSUFBb0NMLFFBQVEsQ0FBQ00sTUFBVCxJQUFtQixDQUF2RCxnQkFDQztBQUFBLGlCQUNHTixRQUFRLENBQUNPLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSw0QkFDWixxRUFBQyx5REFBRDtBQUFxQixpQkFBTyxFQUFFRCxPQUE5QjtBQUF1QyxzQkFBWSxFQUFFQztBQUFyRCxXQUFjQSxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFk7QUFBQSxPQUFiLENBREgsZUFJRSxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQSxvQkFERCxnQkFRQyxxRUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkosZUFhRTtBQUFBLGdCQUNHUCxJQUFJLENBQUNHLEtBQUwsS0FBZSxpQkFBZixpQkFDQyxxRUFBQyxRQUFEO0FBQUEsK0JBQ0UscUVBQUMsd0RBQUQ7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLGlCQUFPLEVBQUMsV0FGVjtBQUdFLGVBQUssRUFBQyxXQUhSO0FBSUUsa0JBQVEsRUFBRUwsUUFBUSxDQUFDTSxNQUFULEdBQWtCLENBQWxCLElBQXVCLElBSm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLHFCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBbkNEOztHQUFNVCxZO1VBQ2lCQyx1RCxFQUNKQSx1RDs7O01BRmJELFk7QUFxQ1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvYWNjb3VudC9jYXJ0LmZlNGM2MDBmNTU4N2E0ZmUzMWE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi9Qcm9kdWN0L2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgc2VsZWN0UHJvZHVjdHMgfSBmcm9tIFwiLi4vLi4vUmVkdWNlcnMvcHJvZHVjdHNTbGljZS5qc1wiO1xyXG5pbXBvcnQgeyBzZWxlY3RVc2VyIH0gZnJvbSBcIi4uLy4uL1JlZHVjZXJzL3VzZXJTbGljZS5qc1wiO1xyXG5pbXBvcnQgQWRkUHJvZHVjdEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWRkUHJvZHVjdEZvcm0vaW5kZXguanNcIjtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgT3JkZXJCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICAmID4gLk11aUJ1dHRvbi1jb250YWluZWRTZWNvbmRhcnkge1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I3M2QxY2JmO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNjAwYmY7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSGVhZGluZyA9IHN0eWxlZC5oMWBcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBjb2xvcjogcmdiKDI1NSA5MCA5MCAvOTAlKTtcclxuYDtcclxuXHJcbmNvbnN0IFRvdGFsUHJpemUgPSBzdHlsZWQucGBcclxuICBjb2xvcjogcmdiKDI1NSA5MCA5MCAvOTAlKTtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIG1hcmdpbjogMjBweDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBtYXJnaW46IDIwcHggNDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0c0NhcnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9kdWN0cyB9ID0gdXNlU2VsZWN0b3Ioc2VsZWN0UHJvZHVjdHMpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlcik7XHJcbiAgY29uc29sZS5sb2codXNlci5lbWFpbCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAge3VzZXIuZW1haWwgPT09IFwiYWRtaW5AYWRtaW4uY29tXCIgJiYgPEFkZFByb2R1Y3RGb3JtIC8+fVxyXG4gICAgICB7dXNlci5lbWFpbCAhPT0gXCJhZG1pbkBhZG1pbi5jb21cIiAmJiBwcm9kdWN0cy5sZW5ndGggPj0gMSAgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxQcm9kdWN0IGtleT17aW5kZXh9IHByb2R1Y3Q9e3Byb2R1Y3R9IHByb2R1Y3RJbmRleD17aW5kZXh9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxUb3RhbFByaXplPlRvdGFsIHByaXplOiAxMiQ8L1RvdGFsUHJpemU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEhlYWRpbmc+Tm8gcHJvZHVjdHMgaW4gY2FydDwvSGVhZGluZz5cclxuICAgICAgKX1cclxuICAgICBcclxuICAgICAgPD5cclxuICAgICAgICB7dXNlci5lbWFpbCAhPT0gXCJhZG1pbkBhZG1pbi5jb21cIiAmJiAoXHJcbiAgICAgICAgICA8T3JkZXJCb3g+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgIGNvbG9yPSdzZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb2R1Y3RzLmxlbmd0aCA8IDEgJiYgdHJ1ZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENsaWNrIHRvIG9yZGVyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9PcmRlckJveD5cclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNDYXJ0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9