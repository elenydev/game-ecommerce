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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Reducers_userSlice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Reducers/userSlice.js */ "./Reducers/userSlice.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");


var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\OfferProduct\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







var Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "OfferProduct__Card",
  componentId: "sc-1juzz0q-0"
})(["display:flex;flex-direction:column;box-shadow:2px 2px 8px 0 rgb(0 0 0 / 60%);background:#24272e;transition:0.2s all linear;& > .MuiButton-containedSecondary{margin:15px;background-color:#5bb2fc;width:fit-content;align-self:center;transition:0.5s all linear;margin-top:auto;&:hover{background-color:#ff3600bf;}}&.MuiButton-contained.Mui-disabled{background-color:#0b3558;color:rgba(255,255,255,0.6);}@media (min-width:960px){max-width:300px;}&:hover{transform:scale(1.05);}"]);
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
  _s();

  var product = _ref.product;
  var productName = product.productName,
      productDescription = product.productDescription,
      gameType = product.gameType,
      prize = product.prize,
      amount = product.amount,
      productImg = product.productImg;
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_Reducers_userSlice_js__WEBPACK_IMPORTED_MODULE_5__["selectUser"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      buttonDisabled = _useState[0],
      setButtonDisabled = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (user.user !== null) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardImage, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "http://localhost:8080/".concat(productImg),
        alt: productName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentHeader, {
        children: productName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentDescription, {
        children: productDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentInfoWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentType, {
          children: gameType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentPrize, {
          children: [prize, " $"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Sign in to buy a product",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          variant: "contained",
          color: "secondary",
          disabled: buttonDisabled,
          children: "Add"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 5
  }, _this);
};

_s(OfferProduct, "EKmXppUMZQyEwnm9Cb3antFnL64=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PZmZlclByb2R1Y3QvaW5kZXguanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkNhcmRJbWFnZSIsIkNhcmRDb250ZW50Q29udGFpbmVyIiwiQ2FyZENvbnRlbnRIZWFkZXIiLCJoNCIsIkNhcmRDb250ZW50RGVzY3JpcHRpb24iLCJwIiwiQ2FyZENvbnRlbnRJbmZvV3JhcHBlciIsIkNhcmRDb250ZW50VHlwZSIsIkNhcmRDb250ZW50UHJpemUiLCJPZmZlclByb2R1Y3QiLCJwcm9kdWN0IiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJnYW1lVHlwZSIsInByaXplIiwiYW1vdW50IiwicHJvZHVjdEltZyIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInNlbGVjdFVzZXIiLCJ1c2VTdGF0ZSIsImJ1dHRvbkRpc2FibGVkIiwic2V0QnV0dG9uRGlzYWJsZWQiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdlQUFWO0tBQU1GLEk7QUFtQ04sSUFBTUcsU0FBUyxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJIQUFmO01BQU1DLFM7QUFpQk4sSUFBTUMsb0JBQW9CLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0xBQTFCO01BQU1FLG9CO0FBYU4sSUFBTUMsaUJBQWlCLEdBQUdKLHlEQUFNLENBQUNLLEVBQVY7QUFBQTtBQUFBO0FBQUEsdUdBQXZCO01BQU1ELGlCO0FBUU4sSUFBTUUsc0JBQXNCLEdBQUdOLHlEQUFNLENBQUNPLENBQVY7QUFBQTtBQUFBO0FBQUEsc0VBQTVCO01BQU1ELHNCO0FBT04sSUFBTUUsc0JBQXNCLEdBQUdSLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOERBQTVCO01BQU1PLHNCO0FBT04sSUFBTUMsZUFBZSxHQUFHVCx5REFBTSxDQUFDTyxDQUFWO0FBQUE7QUFBQTtBQUFBLCtCQUFyQjtNQUFNRSxlO0FBS04sSUFBTUMsZ0JBQWdCLEdBQUdWLHlEQUFNLENBQUNPLENBQVY7QUFBQTtBQUFBO0FBQUEsd0RBQXRCO01BQU1HLGdCOztBQU1OLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQUEsTUFFbENDLFdBRmtDLEdBUWhDRCxPQVJnQyxDQUVsQ0MsV0FGa0M7QUFBQSxNQUdsQ0Msa0JBSGtDLEdBUWhDRixPQVJnQyxDQUdsQ0Usa0JBSGtDO0FBQUEsTUFJbENDLFFBSmtDLEdBUWhDSCxPQVJnQyxDQUlsQ0csUUFKa0M7QUFBQSxNQUtsQ0MsS0FMa0MsR0FRaENKLE9BUmdDLENBS2xDSSxLQUxrQztBQUFBLE1BTWxDQyxNQU5rQyxHQVFoQ0wsT0FSZ0MsQ0FNbENLLE1BTmtDO0FBQUEsTUFPbENDLFVBUGtDLEdBUWhDTixPQVJnQyxDQU9sQ00sVUFQa0M7QUFTcEMsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDQyxpRUFBRCxDQUF4Qjs7QUFUb0Msa0JBV1FDLHNEQUFRLENBQUMsSUFBRCxDQVhoQjtBQUFBLE1BVzdCQyxjQVg2QjtBQUFBLE1BV2JDLGlCQVhhOztBQWFwQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSU4sSUFBSSxDQUFDQSxJQUFMLEtBQWMsSUFBbEIsRUFBd0I7QUFDdEJLLHVCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDRCxLQUZELE1BRU87QUFDTEEsdUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNEO0FBQ0YsR0FOUSxFQU1OLENBQUNMLElBQUQsQ0FOTSxDQUFUO0FBUUEsc0JBQ0UscUVBQUMsSUFBRDtBQUFBLDRCQUNFLHFFQUFDLFNBQUQ7QUFBQSw2QkFDRTtBQUFLLFdBQUcsa0NBQTJCRCxVQUEzQixDQUFSO0FBQWlELFdBQUcsRUFBRUw7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLHFFQUFDLG9CQUFEO0FBQUEsOEJBQ0UscUVBQUMsaUJBQUQ7QUFBQSxrQkFBb0JBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLHNCQUFEO0FBQUEsa0JBQXlCQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSxxRUFBQyxzQkFBRDtBQUFBLGdDQUNFLHFFQUFDLGVBQUQ7QUFBQSxvQkFBa0JDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxnQkFBRDtBQUFBLHFCQUFtQkMsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBWUUscUVBQUMsaUVBQUQ7QUFBUyxXQUFLLEVBQUMsMEJBQWY7QUFBQSw2QkFDRTtBQUFBLCtCQUNFLHFFQUFDLHdEQUFEO0FBQ0UsaUJBQU8sRUFBQyxXQURWO0FBRUUsZUFBSyxFQUFDLFdBRlI7QUFHRSxrQkFBUSxFQUFFTyxjQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQS9DRDs7R0FBTVosWTtVQVNTUyx1RDs7O01BVFRULFk7QUFpRFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY1ZmI5ZTQ0ODE4ZDIwM2NkYWIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0VXNlciB9IGZyb20gXCIuLi8uLi9SZWR1Y2Vycy91c2VyU2xpY2UuanNcIjtcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIjtcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAwIHJnYigwIDAgMCAvIDYwJSk7XHJcbiAgYmFja2dyb3VuZDogIzI0MjcyZTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBsaW5lYXI7XHJcblxyXG4gICYgPiAuTXVpQnV0dG9uLWNvbnRhaW5lZFNlY29uZGFyeSB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJiMmZjO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGwgbGluZWFyO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzYwMGJmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5NdWlCdXR0b24tY29udGFpbmVkLk11aS1kaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIzNTU4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICB9XHJcbmA7XHJcblxyXG5cclxuY29uc3QgQ2FyZEltYWdlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkQ29udGVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICBmbGV4OiAxO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkQ29udGVudEhlYWRlciA9IHN0eWxlZC5oNGBcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJsYWNrIE9wcyBPbmVcIiwgbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnREZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogOHB4IDBweDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRJbmZvV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRUeXBlID0gc3R5bGVkLnBgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNjUlO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRQcml6ZSA9IHN0eWxlZC5wYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5gO1xyXG5cclxuY29uc3QgT2ZmZXJQcm9kdWN0ID0gKHsgcHJvZHVjdCB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcHJvZHVjdE5hbWUsXHJcbiAgICBwcm9kdWN0RGVzY3JpcHRpb24sXHJcbiAgICBnYW1lVHlwZSxcclxuICAgIHByaXplLFxyXG4gICAgYW1vdW50LFxyXG4gICAgcHJvZHVjdEltZyxcclxuICB9ID0gcHJvZHVjdDtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlcik7XHJcblxyXG4gIGNvbnN0IFtidXR0b25EaXNhYmxlZCwgc2V0QnV0dG9uRGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlci51c2VyICE9PSBudWxsKSB7XHJcbiAgICAgIHNldEJ1dHRvbkRpc2FibGVkKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEJ1dHRvbkRpc2FibGVkKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPENhcmRJbWFnZT5cclxuICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8ke3Byb2R1Y3RJbWd9YH0gYWx0PXtwcm9kdWN0TmFtZX0gLz5cclxuICAgICAgPC9DYXJkSW1hZ2U+XHJcbiAgICAgIDxDYXJkQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgICA8Q2FyZENvbnRlbnRIZWFkZXI+e3Byb2R1Y3ROYW1lfTwvQ2FyZENvbnRlbnRIZWFkZXI+XHJcbiAgICAgICAgPENhcmRDb250ZW50RGVzY3JpcHRpb24+e3Byb2R1Y3REZXNjcmlwdGlvbn08L0NhcmRDb250ZW50RGVzY3JpcHRpb24+XHJcbiAgICAgICAgPENhcmRDb250ZW50SW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICA8Q2FyZENvbnRlbnRUeXBlPntnYW1lVHlwZX08L0NhcmRDb250ZW50VHlwZT5cclxuICAgICAgICAgIDxDYXJkQ29udGVudFByaXplPntwcml6ZX0gJDwvQ2FyZENvbnRlbnRQcml6ZT5cclxuICAgICAgICA8L0NhcmRDb250ZW50SW5mb1dyYXBwZXI+XHJcbiAgICAgIDwvQ2FyZENvbnRlbnRDb250YWluZXI+XHJcbiAgICAgIDxUb29sdGlwIHRpdGxlPSdTaWduIGluIHRvIGJ1eSBhIHByb2R1Y3QnPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgIGNvbG9yPSdzZWNvbmRhcnknXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtidXR0b25EaXNhYmxlZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvVG9vbHRpcD5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2ZmZXJQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9