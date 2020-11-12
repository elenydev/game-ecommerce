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
  var cardProducts = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_Reducers_productsSlice_js__WEBPACK_IMPORTED_MODULE_6__["selectProducts"]);
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
        lineNumber: 161,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardImage, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "http://localhost:8080/".concat(productImg),
          alt: productName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentHeader, {
          children: productName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentDescription, {
          children: productDescription
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentInfoWrapper, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentType, {
            children: gameType
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentPrize, {
            children: [prize, " $"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
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
            lineNumber: 180,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, _this)
  }, void 0, false);
}, "sA/7MI1wnMQTlAGjzBFpj6wALgI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PZmZlclByb2R1Y3QvaW5kZXguanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkNhcmRJbWFnZSIsIkNhcmRDb250ZW50Q29udGFpbmVyIiwiQ2FyZENvbnRlbnRIZWFkZXIiLCJoNCIsIkNhcmRDb250ZW50RGVzY3JpcHRpb24iLCJwIiwiQ2FyZENvbnRlbnRJbmZvV3JhcHBlciIsIkNhcmRDb250ZW50VHlwZSIsIkNhcmRDb250ZW50UHJpemUiLCJPZmZlclByb2R1Y3QiLCJSZWFjdCIsIm1lbW8iLCJwcm9kdWN0IiwidXNlciIsInByb2R1Y3ROYW1lIiwicHJvZHVjdERlc2NyaXB0aW9uIiwiZ2FtZVR5cGUiLCJwcml6ZSIsInByb2R1Y3RJbWciLCJ1c2VTdGF0ZSIsImJ1dHRvbkRpc2FibGVkIiwic2V0QnV0dG9uRGlzYWJsZWQiLCJzaG91bGRPcGVuIiwic2V0U2hvdWxkT3BlbiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidmFyaWFudCIsInNldFZhcmlhbnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY2FyZFByb2R1Y3RzIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RQcm9kdWN0cyIsInVzZUVmZmVjdCIsImFkZFByb2R1Y3QiLCJpbmNsdWRlcyIsImFkZFByb2R1Y3RUb0NhcnQiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd21CQUFWO0tBQU1GLEk7QUEwQ04sSUFBTUcsU0FBUyxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJIQUFmO01BQU1DLFM7QUFpQk4sSUFBTUMsb0JBQW9CLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFB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MWU5NDNhMTZiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBhZGRQcm9kdWN0VG9DYXJ0LCBzZWxlY3RQcm9kdWN0cyB9IGZyb20gXCIuLi8uLi9SZWR1Y2Vycy9wcm9kdWN0c1NsaWNlLmpzXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwiLi4vQWxlcnQvaW5kZXguanNcIjtcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAwIHJnYigwIDAgMCAvIDYwJSk7XHJcbiAgYmFja2dyb3VuZDogIzI0MjcyZTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBsaW5lYXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblxyXG4gICYgPiBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmID4gc3BhbiA+IC5NdWlCdXR0b24tY29udGFpbmVkU2Vjb25kYXJ5IHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YmIyZmM7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBsaW5lYXI7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNjAwYmY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gc3BhbiA+IC5NdWlCdXR0b24tY29udGFpbmVkLk11aS1kaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIzNTU4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjVhNWE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZEltYWdlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkQ29udGVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICBmbGV4OiAxO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkQ29udGVudEhlYWRlciA9IHN0eWxlZC5oNGBcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJsYWNrIE9wcyBPbmVcIiwgbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnREZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogOHB4IDBweDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJsYWNrIE9wcyBPbmVcIiwgbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkQ29udGVudEluZm9XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiQmxhY2sgT3BzIE9uZVwiLCBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuYDtcclxuXHJcbmNvbnN0IENhcmRDb250ZW50VHlwZSA9IHN0eWxlZC5wYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDY1JTtcclxuYDtcclxuXHJcbmNvbnN0IENhcmRDb250ZW50UHJpemUgPSBzdHlsZWQucGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuYDtcclxuXHJcbmNvbnN0IE9mZmVyUHJvZHVjdCA9IFJlYWN0Lm1lbW8oKHsgcHJvZHVjdCwgdXNlciB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcHJvZHVjdE5hbWUsXHJcbiAgICBwcm9kdWN0RGVzY3JpcHRpb24sXHJcbiAgICBnYW1lVHlwZSxcclxuICAgIHByaXplLFxyXG4gICAgcHJvZHVjdEltZyxcclxuICB9ID0gcHJvZHVjdDtcclxuXHJcbiAgY29uc3QgW2J1dHRvbkRpc2FibGVkLCBzZXRCdXR0b25EaXNhYmxlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc2hvdWxkT3Blbiwgc2V0U2hvdWxkT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ZhcmlhbnQsIHNldFZhcmlhbnRdID0gdXNlU3RhdGUoXCJlcnJvclwiKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgY2FyZFByb2R1Y3RzID0gdXNlU2VsZWN0b3Ioc2VsZWN0UHJvZHVjdHMpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlci51c2VyICE9PSBudWxsKSB7XHJcbiAgICAgIHNldEJ1dHRvbkRpc2FibGVkKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEJ1dHRvbkRpc2FibGVkKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIGNvbnN0IGFkZFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICBpZihjYXJkUHJvZHVjdHMuaW5jbHVkZXMocHJvZHVjdCkpe1xyXG4gICAgICBzZXRNZXNzYWdlKCdQcm9kdWN0IGFscmVhZHkgaW4gY2FyZCcpXHJcbiAgICAgIHNldFZhcmlhbnQoJ2Vycm9yJylcclxuICAgIH1cclxuICAgIHNldE1lc3NhZ2UoJ1Byb2R1Y3QgYWRkZWQgdG8gY2FydCcpXHJcbiAgICBzZXRWYXJpYW50KCdzdWNjZXNzJylcclxuICAgIGRpc3BhdGNoKGFkZFByb2R1Y3RUb0NhcnQocHJvZHVjdCkpO1xyXG4gICAgc2V0U2hvdWxkT3Blbih0cnVlKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0U2hvdWxkT3BlbihmYWxzZSk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAge3Nob3VsZE9wZW4gJiYgKFxyXG4gICAgICAgICAgPEFsZXJ0XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9e3ZhcmlhbnR9XHJcbiAgICAgICAgICAgIHNob3VsZE9wZW49e3Nob3VsZE9wZW59XHJcbiAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPENhcmRJbWFnZT5cclxuICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDo4MDgwLyR7cHJvZHVjdEltZ31gfSBhbHQ9e3Byb2R1Y3ROYW1lfSAvPlxyXG4gICAgICAgIDwvQ2FyZEltYWdlPlxyXG4gICAgICAgIDxDYXJkQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgICAgIDxDYXJkQ29udGVudEhlYWRlcj57cHJvZHVjdE5hbWV9PC9DYXJkQ29udGVudEhlYWRlcj5cclxuICAgICAgICAgIDxDYXJkQ29udGVudERlc2NyaXB0aW9uPntwcm9kdWN0RGVzY3JpcHRpb259PC9DYXJkQ29udGVudERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50SW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudFR5cGU+e2dhbWVUeXBlfTwvQ2FyZENvbnRlbnRUeXBlPlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnRQcml6ZT57cHJpemV9ICQ8L0NhcmRDb250ZW50UHJpemU+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50SW5mb1dyYXBwZXI+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17YnV0dG9uRGlzYWJsZWQgPyBcIlNpbmcgaW4gdG8gYnV5IHByb2R1Y3RcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgY29sb3I9J3NlY29uZGFyeSdcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17YnV0dG9uRGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17YWRkUHJvZHVjdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2ZmZXJQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9