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
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Reducers_productsSlice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Reducers/productsSlice.js */ "./Reducers/productsSlice.js");
/* harmony import */ var _Alert_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Alert/index.js */ "./components/Alert/index.js");



var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\OfferProduct\\index.js",
    _this = undefined,
    _s = $RefreshSig$();








var Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "OfferProduct__Card",
  componentId: "sc-1juzz0q-0"
})(["display:flex;flex-direction:column;box-shadow:2px 2px 8px 0 rgb(0 0 0 / 60%);background:#24272e;transition:0.2s all linear;border:1px solid transparent;& > span{display:flex;align-items:center;justify-content:center;}& > span > .MuiButton-containedSecondary{margin:15px;background-color:#5bb2fc;width:fit-content;align-self:center;transition:0.5s all linear;margin-top:auto;&:hover{background-color:#ff3600bf;}}& > span > .MuiButton-contained.Mui-disabled{background-color:#0b3558;color:rgba(255,255,255,0.6);}@media (min-width:960px){max-width:300px;}&:hover{transform:scale(1.05);border:1px solid #ff5a5a;}"]);
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
})(["display:block;width:100%;margin:8px 0px;word-break:break-word;font-family:\"Black Ops One\",normal;font-weight:500;"]);
_c5 = CardContentDescription;
var CardContentInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "OfferProduct__CardContentInfoWrapper",
  componentId: "sc-1juzz0q-5"
})(["display:flex;width:100%;margin:10px 0;font-size:1.3em;font-family:\"Black Ops One\",normal;font-weight:500;"]);
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
var OfferProduct = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_c9 = _s(function (_ref) {
  _s();

  var product = _ref.product,
      user = _ref.user;
  var productName = product.productName,
      productDescription = product.productDescription,
      gameType = product.gameType,
      prize = product.prize,
      productImg = product.productImg;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      buttonDisabled = _useState[0],
      setButtonDisabled = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      shouldOpen = _useState2[0],
      setShouldOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      message = _useState3[0],
      setMessage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("error"),
      variant = _useState4[0],
      setVariant = _useState4[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var cardProducts = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_Reducers_productsSlice_js__WEBPACK_IMPORTED_MODULE_6__["selectProducts"]).products;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (user.user !== null) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  var addProduct = function addProduct() {
    if (cardProducts.includes(product)) {
      setMessage('Product already in card');
      setVariant('error');
      return;
    }

    setMessage('Product added to cart');
    setVariant('success');
    dispatch(Object(_Reducers_productsSlice_js__WEBPACK_IMPORTED_MODULE_6__["addProductToCart"])(product));
    setShouldOpen(true);
    setTimeout(function () {
      setShouldOpen(false);
    }, 1000);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
      children: [shouldOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Alert_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: variant,
        shouldOpen: shouldOpen,
        message: message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardImage, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "http://localhost:8080/".concat(productImg),
          alt: productName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentHeader, {
          children: productName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentDescription, {
          children: productDescription
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentInfoWrapper, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentType, {
            children: gameType
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentPrize, {
            children: [prize, " $"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: buttonDisabled ? "Sing in to buy product" : "",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            variant: "contained",
            color: "secondary",
            disabled: buttonDisabled,
            onClick: addProduct,
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }, _this)
  }, void 0, false);
}, "czlj0BJgkHQHP8azvAZj4m1Yg64=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
}));
_c10 = OfferProduct;
/* harmony default export */ __webpack_exports__["default"] = (OfferProduct);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "Card");
$RefreshReg$(_c2, "CardImage");
$RefreshReg$(_c3, "CardContentContainer");
$RefreshReg$(_c4, "CardContentHeader");
$RefreshReg$(_c5, "CardContentDescription");
$RefreshReg$(_c6, "CardContentInfoWrapper");
$RefreshReg$(_c7, "CardContentType");
$RefreshReg$(_c8, "CardContentPrize");
$RefreshReg$(_c9, "OfferProduct$React.memo");
$RefreshReg$(_c10, "OfferProduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PZmZlclByb2R1Y3QvaW5kZXguanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkNhcmRJbWFnZSIsIkNhcmRDb250ZW50Q29udGFpbmVyIiwiQ2FyZENvbnRlbnRIZWFkZXIiLCJoNCIsIkNhcmRDb250ZW50RGVzY3JpcHRpb24iLCJwIiwiQ2FyZENvbnRlbnRJbmZvV3JhcHBlciIsIkNhcmRDb250ZW50VHlwZSIsIkNhcmRDb250ZW50UHJpemUiLCJPZmZlclByb2R1Y3QiLCJSZWFjdCIsIm1lbW8iLCJwcm9kdWN0IiwidXNlciIsInByb2R1Y3ROYW1lIiwicHJvZHVjdERlc2NyaXB0aW9uIiwiZ2FtZVR5cGUiLCJwcml6ZSIsInByb2R1Y3RJbWciLCJ1c2VTdGF0ZSIsImJ1dHRvbkRpc2FibGVkIiwic2V0QnV0dG9uRGlzYWJsZWQiLCJzaG91bGRPcGVuIiwic2V0U2hvdWxkT3BlbiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidmFyaWFudCIsInNldFZhcmlhbnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY2FyZFByb2R1Y3RzIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RQcm9kdWN0cyIsInByb2R1Y3RzIiwidXNlRWZmZWN0IiwiYWRkUHJvZHVjdCIsImluY2x1ZGVzIiwiYWRkUHJvZHVjdFRvQ2FydCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3bUJBQVY7S0FBTUYsSTtBQTBDTixJQUFNRyxTQUFTLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkhBQWY7TUFBTUMsUztBQWlCTixJQUFNQyxvQkFBb0IsR0FBR0gseURBQU0sQ0FBQ0MsR0FB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ZWJwYWNrL3BhZ2VzL2luZGV4LmUwZGY5NzAxNjM0OTZmNWIzZThlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFkZFByb2R1Y3RUb0NhcnQsIHNlbGVjdFByb2R1Y3RzIH0gZnJvbSBcIi4uLy4uL1JlZHVjZXJzL3Byb2R1Y3RzU2xpY2UuanNcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLi9BbGVydC9pbmRleC5qc1wiO1xyXG5cclxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IDAgcmdiKDAgMCAwIC8gNjAlKTtcclxuICBiYWNrZ3JvdW5kOiAjMjQyNzJlO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgYWxsIGxpbmVhcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHJcbiAgJiA+IHNwYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICYgPiBzcGFuID4gLk11aUJ1dHRvbi1jb250YWluZWRTZWNvbmRhcnkge1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViYjJmYztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGxpbmVhcjtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM2MDBiZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiBzcGFuID4gLk11aUJ1dHRvbi1jb250YWluZWQuTXVpLWRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjM1NTg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmNWE1YTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkSW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmRDb250ZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gIGZsZXg6IDE7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmRDb250ZW50SGVhZGVyID0gc3R5bGVkLmg0YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiQmxhY2sgT3BzIE9uZVwiLCBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkQ29udGVudERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA4cHggMHB4O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiQmxhY2sgT3BzIE9uZVwiLCBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuYDtcclxuXHJcbmNvbnN0IENhcmRDb250ZW50SW5mb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICBmb250LWZhbWlseTogXCJCbGFjayBPcHMgT25lXCIsIG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRUeXBlID0gc3R5bGVkLnBgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNjUlO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRQcml6ZSA9IHN0eWxlZC5wYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5gO1xyXG5cclxuY29uc3QgT2ZmZXJQcm9kdWN0ID0gUmVhY3QubWVtbygoeyBwcm9kdWN0LCB1c2VyIH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBwcm9kdWN0TmFtZSxcclxuICAgIHByb2R1Y3REZXNjcmlwdGlvbixcclxuICAgIGdhbWVUeXBlLFxyXG4gICAgcHJpemUsXHJcbiAgICBwcm9kdWN0SW1nLFxyXG4gIH0gPSBwcm9kdWN0O1xyXG5cclxuICBjb25zdCBbYnV0dG9uRGlzYWJsZWQsIHNldEJ1dHRvbkRpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzaG91bGRPcGVuLCBzZXRTaG91bGRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdmFyaWFudCwgc2V0VmFyaWFudF0gPSB1c2VTdGF0ZShcImVycm9yXCIpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBjYXJkUHJvZHVjdHMgPSB1c2VTZWxlY3RvcihzZWxlY3RQcm9kdWN0cykucHJvZHVjdHNcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyLnVzZXIgIT09IG51bGwpIHtcclxuICAgICAgc2V0QnV0dG9uRGlzYWJsZWQoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0QnV0dG9uRGlzYWJsZWQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgY29uc3QgYWRkUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGlmKGNhcmRQcm9kdWN0cy5pbmNsdWRlcyhwcm9kdWN0KSl7XHJcbiAgICAgIHNldE1lc3NhZ2UoJ1Byb2R1Y3QgYWxyZWFkeSBpbiBjYXJkJylcclxuICAgICAgc2V0VmFyaWFudCgnZXJyb3InKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHNldE1lc3NhZ2UoJ1Byb2R1Y3QgYWRkZWQgdG8gY2FydCcpXHJcbiAgICBzZXRWYXJpYW50KCdzdWNjZXNzJylcclxuICAgIGRpc3BhdGNoKGFkZFByb2R1Y3RUb0NhcnQocHJvZHVjdCkpO1xyXG4gICAgc2V0U2hvdWxkT3Blbih0cnVlKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0U2hvdWxkT3BlbihmYWxzZSk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAge3Nob3VsZE9wZW4gJiYgKFxyXG4gICAgICAgICAgPEFsZXJ0XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9e3ZhcmlhbnR9XHJcbiAgICAgICAgICAgIHNob3VsZE9wZW49e3Nob3VsZE9wZW59XHJcbiAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPENhcmRJbWFnZT5cclxuICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDo4MDgwLyR7cHJvZHVjdEltZ31gfSBhbHQ9e3Byb2R1Y3ROYW1lfSAvPlxyXG4gICAgICAgIDwvQ2FyZEltYWdlPlxyXG4gICAgICAgIDxDYXJkQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgICAgIDxDYXJkQ29udGVudEhlYWRlcj57cHJvZHVjdE5hbWV9PC9DYXJkQ29udGVudEhlYWRlcj5cclxuICAgICAgICAgIDxDYXJkQ29udGVudERlc2NyaXB0aW9uPntwcm9kdWN0RGVzY3JpcHRpb259PC9DYXJkQ29udGVudERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50SW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudFR5cGU+e2dhbWVUeXBlfTwvQ2FyZENvbnRlbnRUeXBlPlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnRQcml6ZT57cHJpemV9ICQ8L0NhcmRDb250ZW50UHJpemU+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50SW5mb1dyYXBwZXI+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17YnV0dG9uRGlzYWJsZWQgPyBcIlNpbmcgaW4gdG8gYnV5IHByb2R1Y3RcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgY29sb3I9J3NlY29uZGFyeSdcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17YnV0dG9uRGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17YWRkUHJvZHVjdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2ZmZXJQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9