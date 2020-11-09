webpackHotUpdate_N_E("pages/auth/account/cart",{

/***/ "./components/Product/index.js":
/*!*************************************!*\
  !*** ./components/Product/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\Product\\index.js",
    _this = undefined;



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Product__Wrapper",
  componentId: "sc-1tgzcz3-0"
})(["display:flex;flex-direction:column;width:100%;height:100%;"]);
_c = Wrapper;
var ProductContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Product__ProductContainer",
  componentId: "sc-1tgzcz3-1"
})(["display:flex;flex-direction:column;@media (min-width:960px){flex-direction:row;}"]);
_c2 = ProductContainer;
var ProductImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Product__ProductImage",
  componentId: "sc-1tgzcz3-2"
})(["display:flex;height:60px;width:60px;@media (min-width:960px){height:120px;width:120px;}img{width:100%;height:auto;}"]);
_c3 = ProductImage;

var Product = function Product(_ref) {
  var product = _ref.product,
      productIndex = _ref.productIndex;
  var productImg = product.productImg,
      productName = product.productName,
      price = product.price,
      productDescription = product.productDescription,
      gameType = product.gameType,
      amount = product.amount;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProductContainer, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProductImage, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: productImg,
          alt: productName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_c4 = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "ProductContainer");
$RefreshReg$(_c3, "ProductImage");
$RefreshReg$(_c4, "Product");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJQcm9kdWN0Q29udGFpbmVyIiwiUHJvZHVjdEltYWdlIiwiUHJvZHVjdCIsInByb2R1Y3QiLCJwcm9kdWN0SW5kZXgiLCJwcm9kdWN0SW1nIiwicHJvZHVjdE5hbWUiLCJwcmljZSIsInByb2R1Y3REZXNjcmlwdGlvbiIsImdhbWVUeXBlIiwiYW1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFiO0tBQU1GLE87QUFPTixJQUFNRyxnQkFBZ0IsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3RkFBdEI7TUFBTUMsZ0I7QUFTTixJQUFNQyxZQUFZLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkhBQWxCO01BQU1FLFk7O0FBZ0JOLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQStCO0FBQUEsTUFBNUJDLE9BQTRCLFFBQTVCQSxPQUE0QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFBQSxNQUUzQ0MsVUFGMkMsR0FRekNGLE9BUnlDLENBRTNDRSxVQUYyQztBQUFBLE1BRzNDQyxXQUgyQyxHQVF6Q0gsT0FSeUMsQ0FHM0NHLFdBSDJDO0FBQUEsTUFJM0NDLEtBSjJDLEdBUXpDSixPQVJ5QyxDQUkzQ0ksS0FKMkM7QUFBQSxNQUszQ0Msa0JBTDJDLEdBUXpDTCxPQVJ5QyxDQUszQ0ssa0JBTDJDO0FBQUEsTUFNM0NDLFFBTjJDLEdBUXpDTixPQVJ5QyxDQU0zQ00sUUFOMkM7QUFBQSxNQU8zQ0MsTUFQMkMsR0FRekNQLE9BUnlDLENBTzNDTyxNQVAyQztBQVM3QyxzQkFDRSxxRUFBQyxPQUFEO0FBQUEsMkJBQ0UscUVBQUMsZ0JBQUQ7QUFBQSw2QkFDRSxxRUFBQyxZQUFEO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUVMLFVBQVY7QUFBc0IsYUFBRyxFQUFFQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQWxCRDs7TUFBTUosTztBQW9CU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9hY2NvdW50L2NhcnQuZDg0NjBiMmRjNzA4YmI1MzA4NmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0SW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdCA9ICh7IHByb2R1Y3QsIHByb2R1Y3RJbmRleCB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcHJvZHVjdEltZyxcclxuICAgIHByb2R1Y3ROYW1lLFxyXG4gICAgcHJpY2UsXHJcbiAgICBwcm9kdWN0RGVzY3JpcHRpb24sXHJcbiAgICBnYW1lVHlwZSxcclxuICAgIGFtb3VudCxcclxuICB9ID0gcHJvZHVjdDtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxQcm9kdWN0Q29udGFpbmVyPlxyXG4gICAgICAgIDxQcm9kdWN0SW1hZ2U+XHJcbiAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdEltZ30gYWx0PXtwcm9kdWN0TmFtZX0gLz5cclxuICAgICAgICA8L1Byb2R1Y3RJbWFnZT5cclxuICAgICAgPC9Qcm9kdWN0Q29udGFpbmVyPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9