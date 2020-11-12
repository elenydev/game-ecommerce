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
      user = _ref.user,
      setVariant = _ref.setVariant,
      setMessage = _ref.setMessage;
  var productName = product.productName,
      productDescription = product.productDescription,
      gameType = product.gameType,
      prize = product.prize,
      productImg = product.productImg;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      buttonDisabled = _useState[0],
      setButtonDisabled = _useState[1];

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
    if (!cardProducts.includes(product)) {
      setMessage("Product added to cart");
      setVariant("success");
      dispatch(Object(_Reducers_productsSlice_js__WEBPACK_IMPORTED_MODULE_6__["addProductToCart"])(product));
      return;
    }

    setMessage("Product already in card");
    setVariant("error");
    setTimeout(function () {
      setMessage(null);
      setVariant(null);
    }, 1000);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
      children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardImage, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "http://localhost:8080/".concat(productImg),
          alt: productName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentHeader, {
          children: productName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentDescription, {
          children: productDescription
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentInfoWrapper, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentType, {
            children: gameType
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentPrize, {
            children: [prize, " $"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
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
            lineNumber: 172,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, _this)
  }, void 0, false);
}, "3OQAZlDXxMnkHae6h61b+5fs114=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PZmZlclByb2R1Y3QvaW5kZXguanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkNhcmRJbWFnZSIsIkNhcmRDb250ZW50Q29udGFpbmVyIiwiQ2FyZENvbnRlbnRIZWFkZXIiLCJoNCIsIkNhcmRDb250ZW50RGVzY3JpcHRpb24iLCJwIiwiQ2FyZENvbnRlbnRJbmZvV3JhcHBlciIsIkNhcmRDb250ZW50VHlwZSIsIkNhcmRDb250ZW50UHJpemUiLCJPZmZlclByb2R1Y3QiLCJSZWFjdCIsIm1lbW8iLCJwcm9kdWN0IiwidXNlciIsInNldFZhcmlhbnQiLCJzZXRNZXNzYWdlIiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJnYW1lVHlwZSIsInByaXplIiwicHJvZHVjdEltZyIsInVzZVN0YXRlIiwiYnV0dG9uRGlzYWJsZWQiLCJzZXRCdXR0b25EaXNhYmxlZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjYXJkUHJvZHVjdHMiLCJ1c2VTZWxlY3RvciIsInNlbGVjdFByb2R1Y3RzIiwicHJvZHVjdHMiLCJ1c2VFZmZlY3QiLCJhZGRQcm9kdWN0IiwiaW5jbHVkZXMiLCJhZGRQcm9kdWN0VG9DYXJ0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdtQkFBVjtLQUFNRixJO0FBMENOLElBQU1HLFNBQVMsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwySEFBZjtNQUFNQyxTO0FBaUJOLElBQU1DLG9CQUFvQixHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNMQUExQjtNQUFNRSxvQjtBQWFOLElBQU1DLGlCQUFpQixHQUFH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QUEsa0NBQ0UscUVBQUMsZUFBRDtBQUFBLHNCQUFrQkM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLGdCQUFEO0FBQUEsdUJBQW1CQyxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBV0UscUVBQUMsaUVBQUQ7QUFBUyxhQUFLLEVBQUVHLGNBQWMsR0FBRyx3QkFBSCxHQUE4QixFQUE1RDtBQUFBLCtCQUNFO0FBQUEsaUNBQ0UscUVBQUMsd0RBQUQ7QUFDRSxtQkFBTyxFQUFDLFdBRFY7QUFFRSxpQkFBSyxFQUFDLFdBRlI7QUFHRSxvQkFBUSxFQUFFQSxjQUhaO0FBSUUsbUJBQU8sRUFBRVMsVUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUE0QkQsQ0FqRW9CO0FBQUEsVUFVRk4sdURBVkUsRUFXRUUsdURBWEY7QUFBQSxHQUFyQjtPQUFNbEIsWTtBQW1FU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmY0ZWU2ZGYxYjlmYzUxYzBmNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuICBhZGRQcm9kdWN0VG9DYXJ0LFxyXG4gIHNlbGVjdFByb2R1Y3RzLFxyXG59IGZyb20gXCIuLi8uLi9SZWR1Y2Vycy9wcm9kdWN0c1NsaWNlLmpzXCI7XHJcblxyXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMCByZ2IoMCAwIDAgLyA2MCUpO1xyXG4gIGJhY2tncm91bmQ6ICMyNDI3MmU7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGwgbGluZWFyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cclxuICAmID4gc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJiA+IHNwYW4gPiAuTXVpQnV0dG9uLWNvbnRhaW5lZFNlY29uZGFyeSB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJiMmZjO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGwgbGluZWFyO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzYwMGJmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IHNwYW4gPiAuTXVpQnV0dG9uLWNvbnRhaW5lZC5NdWktZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMzU1ODtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY1YTVhO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmRJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogYXV0bztcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgZmxleDogMTtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRIZWFkZXIgPSBzdHlsZWQuaDRgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBmb250LWZhbWlseTogXCJCbGFjayBPcHMgT25lXCIsIG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuYDtcclxuXHJcbmNvbnN0IENhcmRDb250ZW50RGVzY3JpcHRpb24gPSBzdHlsZWQucGBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDhweCAwcHg7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogXCJCbGFjayBPcHMgT25lXCIsIG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRJbmZvV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJsYWNrIE9wcyBPbmVcIiwgbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkQ29udGVudFR5cGUgPSBzdHlsZWQucGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA2NSU7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkQ29udGVudFByaXplID0gc3R5bGVkLnBgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMzUlO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbmA7XHJcblxyXG5jb25zdCBPZmZlclByb2R1Y3QgPSBSZWFjdC5tZW1vKCh7IHByb2R1Y3QsIHVzZXIsIHNldFZhcmlhbnQsIHNldE1lc3NhZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHByb2R1Y3ROYW1lLFxyXG4gICAgcHJvZHVjdERlc2NyaXB0aW9uLFxyXG4gICAgZ2FtZVR5cGUsXHJcbiAgICBwcml6ZSxcclxuICAgIHByb2R1Y3RJbWcsXHJcbiAgfSA9IHByb2R1Y3Q7XHJcblxyXG4gIGNvbnN0IFtidXR0b25EaXNhYmxlZCwgc2V0QnV0dG9uRGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGNhcmRQcm9kdWN0cyA9IHVzZVNlbGVjdG9yKHNlbGVjdFByb2R1Y3RzKS5wcm9kdWN0cztcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyLnVzZXIgIT09IG51bGwpIHtcclxuICAgICAgc2V0QnV0dG9uRGlzYWJsZWQoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0QnV0dG9uRGlzYWJsZWQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgY29uc3QgYWRkUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGlmICghY2FyZFByb2R1Y3RzLmluY2x1ZGVzKHByb2R1Y3QpKSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJQcm9kdWN0IGFkZGVkIHRvIGNhcnRcIik7XHJcbiAgICAgIHNldFZhcmlhbnQoXCJzdWNjZXNzXCIpO1xyXG4gICAgICBkaXNwYXRjaChhZGRQcm9kdWN0VG9DYXJ0KHByb2R1Y3QpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0TWVzc2FnZShcIlByb2R1Y3QgYWxyZWFkeSBpbiBjYXJkXCIpO1xyXG4gICAgc2V0VmFyaWFudChcImVycm9yXCIpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRNZXNzYWdlKG51bGwpO1xyXG4gICAgICBzZXRWYXJpYW50KG51bGwpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDYXJkPiAgPENhcmRJbWFnZT5cclxuICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDo4MDgwLyR7cHJvZHVjdEltZ31gfSBhbHQ9e3Byb2R1Y3ROYW1lfSAvPlxyXG4gICAgICAgIDwvQ2FyZEltYWdlPlxyXG4gICAgICAgIDxDYXJkQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgICAgIDxDYXJkQ29udGVudEhlYWRlcj57cHJvZHVjdE5hbWV9PC9DYXJkQ29udGVudEhlYWRlcj5cclxuICAgICAgICAgIDxDYXJkQ29udGVudERlc2NyaXB0aW9uPntwcm9kdWN0RGVzY3JpcHRpb259PC9DYXJkQ29udGVudERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50SW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudFR5cGU+e2dhbWVUeXBlfTwvQ2FyZENvbnRlbnRUeXBlPlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnRQcml6ZT57cHJpemV9ICQ8L0NhcmRDb250ZW50UHJpemU+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50SW5mb1dyYXBwZXI+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17YnV0dG9uRGlzYWJsZWQgPyBcIlNpbmcgaW4gdG8gYnV5IHByb2R1Y3RcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgY29sb3I9J3NlY29uZGFyeSdcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17YnV0dG9uRGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17YWRkUHJvZHVjdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2ZmZXJQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9