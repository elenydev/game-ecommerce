webpackHotUpdate_N_E("pages/index",{

/***/ "./components/OfferProduct/index.js":
/*!******************************************!*\
  !*** ./components/OfferProduct/index.js ***!
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
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\OfferProduct\\index.js",
    _this = undefined;





var Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "OfferProduct__Card",
  componentId: "sc-1juzz0q-0"
})(["display:flex;flex-direction:column;box-shadow:2px 2px 8px 0 rgb(0 0 0 / 60%);background:#24272e;transition:0.2s all linear;& > .MuiButton-containedSecondary{margin:15px;background-color:#5bb2fc;width:fit-content;align-self:center;transition:0.5s all linear;margin-top:auto;&:hover{background-color:#ff3600bf;}&:disabled{background-color:#0b3558;}}@media (min-width:960px){max-width:300px;}&:hover{transform:scale(1.05);}"]);
_c = Card;
var CardImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "OfferProduct__CardImage",
  componentId: "sc-1juzz0q-1"
})(["display:flex;height:200px;width:auto;img{width:100%;height:auto;}@media (min-width:960px){height:280px;width:auto;}"]);
_c2 = CardImage;
var CardContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "OfferProduct__CardContentContainer",
  componentId: "sc-1juzz0q-2"
})(["display:flex;flex-direction:column;padding:7px;color:rgba(255,255,255,0.8);justify-content:space-between;font-family:\"Roboto\";flex:1;@media (min-width:960px){padding:12px;}"]);
_c3 = CardContentContainer;
var CardContentHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h4.withConfig({
  displayName: "OfferProduct__CardContentHeader",
  componentId: "sc-1juzz0q-3"
})(["width:100%;font-size:1.4em;font-family:\"Black Ops One\",normal;font-weight:500;margin-top:5px;"]);
_c4 = CardContentHeader;
var CardContentDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "OfferProduct__CardContentDescription",
  componentId: "sc-1juzz0q-4"
})(["display:block;width:100%;margin:8px 0px;word-break:break-word;"]);
_c5 = CardContentDescription;
var CardContentInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "OfferProduct__CardContentInfoWrapper",
  componentId: "sc-1juzz0q-5"
})(["display:flex;width:100%;margin:10px 0;font-size:1.3em;"]);
_c6 = CardContentInfoWrapper;
var CardContentType = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "OfferProduct__CardContentType",
  componentId: "sc-1juzz0q-6"
})(["display:flex;width:65%;"]);
_c7 = CardContentType;
var CardContentPrize = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "OfferProduct__CardContentPrize",
  componentId: "sc-1juzz0q-7"
})(["display:flex;width:35%;justify-content:flex-end;"]);
_c8 = CardContentPrize;

var OfferProduct = function OfferProduct(_ref) {
  var product = _ref.product;
  var productName = product.productName,
      productDescription = product.productDescription,
      gameType = product.gameType,
      prize = product.prize,
      amount = product.amount,
      productImg = product.productImg;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardImage, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "http://localhost:8080/".concat(productImg),
        alt: productName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentHeader, {
        children: productName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentDescription, {
        children: productDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentInfoWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentType, {
          children: gameType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentPrize, {
          children: [prize, " $"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "contained",
      color: "secondary",
      children: "Add"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }, _this);
};

_c9 = OfferProduct;
/* harmony default export */ __webpack_exports__["default"] = (OfferProduct);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "Card");
$RefreshReg$(_c2, "CardImage");
$RefreshReg$(_c3, "CardContentContainer");
$RefreshReg$(_c4, "CardContentHeader");
$RefreshReg$(_c5, "CardContentDescription");
$RefreshReg$(_c6, "CardContentInfoWrapper");
$RefreshReg$(_c7, "CardContentType");
$RefreshReg$(_c8, "CardContentPrize");
$RefreshReg$(_c9, "OfferProduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PZmZlclByb2R1Y3QvaW5kZXguanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkNhcmRJbWFnZSIsIkNhcmRDb250ZW50Q29udGFpbmVyIiwiQ2FyZENvbnRlbnRIZWFkZXIiLCJoNCIsIkNhcmRDb250ZW50RGVzY3JpcHRpb24iLCJwIiwiQ2FyZENvbnRlbnRJbmZvV3JhcHBlciIsIkNhcmRDb250ZW50VHlwZSIsIkNhcmRDb250ZW50UHJpemUiLCJPZmZlclByb2R1Y3QiLCJwcm9kdWN0IiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJnYW1lVHlwZSIsInByaXplIiwiYW1vdW50IiwicHJvZHVjdEltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0YUFBVjtLQUFNRixJO0FBaUNOLElBQU1HLFNBQVMsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwySEFBZjtNQUFNQyxTO0FBaUJOLElBQU1DLG9CQUFvQixHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNMQUExQjtNQUFNRSxvQjtBQWFOLElBQU1DLGlCQUFpQixHQUFHSix5REFBTSxDQUFDSyxFQUFWO0FBQUE7QUFBQTtBQUFBLHVHQUF2QjtNQUFNRCxpQjtBQVFOLElBQU1FLHNCQUFzQixHQUFHTix5REFBTSxDQUFDTyxDQUFWO0FBQUE7QUFBQTtBQUFBLHNFQUE1QjtNQUFNRCxzQjtBQU9OLElBQU1FLHNCQUFzQixHQUFHUix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhEQUE1QjtNQUFNTyxzQjtBQU9OLElBQU1DLGVBQWUsR0FBR1QseURBQU0sQ0FBQ08sQ0FBVjtBQUFBO0FBQUE7QUFBQSwrQkFBckI7TUFBTUUsZTtBQUtOLElBQU1DLGdCQUFnQixHQUFHVix5REFBTSxDQUFDTyxDQUFWO0FBQUE7QUFBQTtBQUFBLHdEQUF0QjtNQUFNRyxnQjs7QUFNTixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUFBLE1BRWxDQyxXQUZrQyxHQVFoQ0QsT0FSZ0MsQ0FFbENDLFdBRmtDO0FBQUEsTUFHbENDLGtCQUhrQyxHQVFoQ0YsT0FSZ0MsQ0FHbENFLGtCQUhrQztBQUFBLE1BSWxDQyxRQUprQyxHQVFoQ0gsT0FSZ0MsQ0FJbENHLFFBSmtDO0FBQUEsTUFLbENDLEtBTGtDLEdBUWhDSixPQVJnQyxDQUtsQ0ksS0FMa0M7QUFBQSxNQU1sQ0MsTUFOa0MsR0FRaENMLE9BUmdDLENBTWxDSyxNQU5rQztBQUFBLE1BT2xDQyxVQVBrQyxHQVFoQ04sT0FSZ0MsQ0FPbENNLFVBUGtDO0FBU3BDLHNCQUNFLHFFQUFDLElBQUQ7QUFBQSw0QkFDRSxxRUFBQyxTQUFEO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLGtDQUEyQkEsVUFBM0IsQ0FBUjtBQUFpRCxXQUFHLEVBQUVMO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSxxRUFBQyxvQkFBRDtBQUFBLDhCQUNFLHFFQUFDLGlCQUFEO0FBQUEsa0JBQW9CQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyxzQkFBRDtBQUFBLGtCQUF5QkM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0UscUVBQUMsc0JBQUQ7QUFBQSxnQ0FDRSxxRUFBQyxlQUFEO0FBQUEsb0JBQWtCQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsZ0JBQUQ7QUFBQSxxQkFBbUJDLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQVlFLHFFQUFDLHdEQUFEO0FBQVEsYUFBTyxFQUFDLFdBQWhCO0FBQTRCLFdBQUssRUFBQyxXQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBM0JEOztNQUFNTCxZO0FBNkJTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mOGRhN2RlMWE5MDNlYzQyODRiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAwIHJnYigwIDAgMCAvIDYwJSk7XHJcbiAgYmFja2dyb3VuZDogIzI0MjcyZTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBsaW5lYXI7XHJcblxyXG4gICYgPiAuTXVpQnV0dG9uLWNvbnRhaW5lZFNlY29uZGFyeSB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJiMmZjO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGwgbGluZWFyO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzYwMGJmO1xyXG4gICAgfVxyXG5cclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIzNTU4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmRJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogYXV0bztcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgZmxleDoxIDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRIZWFkZXIgPSBzdHlsZWQuaDRgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBmb250LWZhbWlseTogXCJCbGFjayBPcHMgT25lXCIsIG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuYDtcclxuXHJcbmNvbnN0IENhcmRDb250ZW50RGVzY3JpcHRpb24gPSBzdHlsZWQucGBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDhweCAwcHg7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuYDtcclxuXHJcbmNvbnN0IENhcmRDb250ZW50SW5mb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuYDtcclxuXHJcbmNvbnN0IENhcmRDb250ZW50VHlwZSA9IHN0eWxlZC5wYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDY1JTtcclxuYDtcclxuXHJcbmNvbnN0IENhcmRDb250ZW50UHJpemUgPSBzdHlsZWQucGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuYDtcclxuXHJcbmNvbnN0IE9mZmVyUHJvZHVjdCA9ICh7IHByb2R1Y3QgfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHByb2R1Y3ROYW1lLFxyXG4gICAgcHJvZHVjdERlc2NyaXB0aW9uLFxyXG4gICAgZ2FtZVR5cGUsXHJcbiAgICBwcml6ZSxcclxuICAgIGFtb3VudCxcclxuICAgIHByb2R1Y3RJbWcsXHJcbiAgfSA9IHByb2R1Y3Q7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkPlxyXG4gICAgICA8Q2FyZEltYWdlPlxyXG4gICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDo4MDgwLyR7cHJvZHVjdEltZ31gfSBhbHQ9e3Byb2R1Y3ROYW1lfSAvPlxyXG4gICAgICA8L0NhcmRJbWFnZT5cclxuICAgICAgPENhcmRDb250ZW50Q29udGFpbmVyPlxyXG4gICAgICAgIDxDYXJkQ29udGVudEhlYWRlcj57cHJvZHVjdE5hbWV9PC9DYXJkQ29udGVudEhlYWRlcj5cclxuICAgICAgICA8Q2FyZENvbnRlbnREZXNjcmlwdGlvbj57cHJvZHVjdERlc2NyaXB0aW9ufTwvQ2FyZENvbnRlbnREZXNjcmlwdGlvbj5cclxuICAgICAgICA8Q2FyZENvbnRlbnRJbmZvV3JhcHBlcj5cclxuICAgICAgICAgIDxDYXJkQ29udGVudFR5cGU+e2dhbWVUeXBlfTwvQ2FyZENvbnRlbnRUeXBlPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50UHJpemU+e3ByaXplfSAkPC9DYXJkQ29udGVudFByaXplPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnRJbmZvV3JhcHBlcj5cclxuICAgICAgPC9DYXJkQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknPlxyXG4gICAgICAgIEFkZFxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2ZmZXJQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9