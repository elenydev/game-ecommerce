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
})(["display:flex;flex-direction:column;width:100%;height:100%;margin-top:50px;box-shadow:2px 2px 8px 0 rgb(255 90 90 /60%);background-color:rgba(0,0,0,0.05);@media (min-width:960px){margin:0;}"]);
_c = Wrapper;
var ProductContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Product__ProductContainer",
  componentId: "sc-1tgzcz3-1"
})(["display:flex;padding:15px;flex-direction:column;@media (min-width:960px){flex-direction:row;}"]);
_c2 = ProductContainer;
var ProductImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Product__ProductImage",
  componentId: "sc-1tgzcz3-2"
})(["display:flex;height:80px;width:80px;align-self:center;@media (min-width:960px){height:100px;width:100pxx;}img{width:100%;height:auto;}"]);
_c3 = ProductImage;
var ProductDescriptionBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Product__ProductDescriptionBox",
  componentId: "sc-1tgzcz3-3"
})(["display:flex;flex-direction:column;"]);

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
          lineNumber: 62,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJQcm9kdWN0Q29udGFpbmVyIiwiUHJvZHVjdEltYWdlIiwiUHJvZHVjdERlc2NyaXB0aW9uQm94IiwicCIsIlByb2R1Y3QiLCJwcm9kdWN0IiwicHJvZHVjdEluZGV4IiwicHJvZHVjdEltZyIsInByb2R1Y3ROYW1lIiwicHJpY2UiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJnYW1lVHlwZSIsImFtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvTUFBYjtLQUFNRixPO0FBYU4sSUFBTUcsZ0JBQWdCLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscUdBQXRCO01BQU1DLGdCO0FBVU4sSUFBTUMsWUFBWSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhJQUFsQjtNQUFNRSxZO0FBaUJOLElBQU1DLHFCQUFxQixHQUFHSix5REFBTSxDQUFDSyxDQUFWO0FBQUE7QUFBQTtBQUFBLDJDQUEzQjs7QUFLQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUErQjtBQUFBLE1BQTVCQyxPQUE0QixRQUE1QkEsT0FBNEI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1CO0FBQUEsTUFFM0NDLFVBRjJDLEdBUXpDRixPQVJ5QyxDQUUzQ0UsVUFGMkM7QUFBQSxNQUczQ0MsV0FIMkMsR0FRekNILE9BUnlDLENBRzNDRyxXQUgyQztBQUFBLE1BSTNDQyxLQUoyQyxHQVF6Q0osT0FSeUMsQ0FJM0NJLEtBSjJDO0FBQUEsTUFLM0NDLGtCQUwyQyxHQVF6Q0wsT0FSeUMsQ0FLM0NLLGtCQUwyQztBQUFBLE1BTTNDQyxRQU4yQyxHQVF6Q04sT0FSeUMsQ0FNM0NNLFFBTjJDO0FBQUEsTUFPM0NDLE1BUDJDLEdBUXpDUCxPQVJ5QyxDQU8zQ08sTUFQMkM7QUFTN0Msc0JBQ0UscUVBQUMsT0FBRDtBQUFBLDJCQUNFLHFFQUFDLGdCQUFEO0FBQUEsNkJBQ0UscUVBQUMsWUFBRDtBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFFTCxVQUFWO0FBQXNCLGFBQUcsRUFBRUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FsQkQ7O01BQU1KLE87QUFvQlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvYWNjb3VudC9jYXJ0LjQ0ZWQ0MmQ3NWFiMzU4YzY4NDlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMCByZ2IoMjU1IDkwIDkwIC82MCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0SW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4eDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0RGVzY3JpcHRpb25Cb3ggPSBzdHlsZWQucGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0ID0gKHsgcHJvZHVjdCwgcHJvZHVjdEluZGV4IH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBwcm9kdWN0SW1nLFxyXG4gICAgcHJvZHVjdE5hbWUsXHJcbiAgICBwcmljZSxcclxuICAgIHByb2R1Y3REZXNjcmlwdGlvbixcclxuICAgIGdhbWVUeXBlLFxyXG4gICAgYW1vdW50LFxyXG4gIH0gPSBwcm9kdWN0O1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPFByb2R1Y3RDb250YWluZXI+XHJcbiAgICAgICAgPFByb2R1Y3RJbWFnZT5cclxuICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0SW1nfSBhbHQ9e3Byb2R1Y3ROYW1lfSAvPlxyXG4gICAgICAgIDwvUHJvZHVjdEltYWdlPlxyXG4gICAgICA8L1Byb2R1Y3RDb250YWluZXI+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=