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
    console.log(cardProducts.includes(product));
    setTimeout(function () {
      setMessage(null);
      setVariant(null);
    }, 1000);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardImage, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "http://localhost:8080/".concat(productImg),
          alt: productName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentHeader, {
          children: productName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentDescription, {
          children: productDescription
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentInfoWrapper, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentType, {
            children: gameType
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentPrize, {
            children: [prize, " $"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
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
            lineNumber: 175,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 160,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PZmZlclByb2R1Y3QvaW5kZXguanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkNhcmRJbWFnZSIsIkNhcmRDb250ZW50Q29udGFpbmVyIiwiQ2FyZENvbnRlbnRIZWFkZXIiLCJoNCIsIkNhcmRDb250ZW50RGVzY3JpcHRpb24iLCJwIiwiQ2FyZENvbnRlbnRJbmZvV3JhcHBlciIsIkNhcmRDb250ZW50VHlwZSIsIkNhcmRDb250ZW50UHJpemUiLCJPZmZlclByb2R1Y3QiLCJSZWFjdCIsIm1lbW8iLCJwcm9kdWN0IiwidXNlciIsInNldFZhcmlhbnQiLCJzZXRNZXNzYWdlIiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJnYW1lVHlwZSIsInByaXplIiwicHJvZHVjdEltZyIsInVzZVN0YXRlIiwiYnV0dG9uRGlzYWJsZWQiLCJzZXRCdXR0b25EaXNhYmxlZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjYXJkUHJvZHVjdHMiLCJ1c2VTZWxlY3RvciIsInNlbGVjdFByb2R1Y3RzIiwicHJvZHVjdHMiLCJ1c2VFZmZlY3QiLCJhZGRQcm9kdWN0IiwiaW5jbHVkZXMiLCJhZGRQcm9kdWN0VG9DYXJ0IiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3bUJBQVY7S0FBTUYsSTtBQTBDTixJQUFNRyxTQUFTLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkhBQWY7TUFBTUMsUztBQWlCTixJQUFNQyxvQkFBb0IsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzTEFBMUI7TUFBTUUsb0I7QUFhTixJ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QUVFLHFFQUFDLHNCQUFEO0FBQUEsb0JBQXlCQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0UscUVBQUMsc0JBQUQ7QUFBQSxrQ0FDRSxxRUFBQyxlQUFEO0FBQUEsc0JBQWtCQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUscUVBQUMsZ0JBQUQ7QUFBQSx1QkFBbUJDLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFhRSxxRUFBQyxpRUFBRDtBQUFTLGFBQUssRUFBRUcsY0FBYyxHQUFHLHdCQUFILEdBQThCLEVBQTVEO0FBQUEsK0JBQ0U7QUFBQSxpQ0FDRSxxRUFBQyx3REFBRDtBQUNFLG1CQUFPLEVBQUMsV0FEVjtBQUVFLGlCQUFLLEVBQUMsV0FGUjtBQUdFLG9CQUFRLEVBQUVBLGNBSFo7QUFJRSxtQkFBTyxFQUFFUyxVQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQThCRCxDQXBFb0I7QUFBQSxVQVVGTix1REFWRSxFQVdFRSx1REFYRjtBQUFBLEdBQXJCO09BQU1sQixZO0FBc0VTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MmVhN2RlZTA0NzllMWIwNGFlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIGFkZFByb2R1Y3RUb0NhcnQsXHJcbiAgc2VsZWN0UHJvZHVjdHMsXHJcbn0gZnJvbSBcIi4uLy4uL1JlZHVjZXJzL3Byb2R1Y3RzU2xpY2UuanNcIjtcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAwIHJnYigwIDAgMCAvIDYwJSk7XHJcbiAgYmFja2dyb3VuZDogIzI0MjcyZTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBsaW5lYXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblxyXG4gICYgPiBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmID4gc3BhbiA+IC5NdWlCdXR0b24tY29udGFpbmVkU2Vjb25kYXJ5IHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YmIyZmM7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBsaW5lYXI7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNjAwYmY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gc3BhbiA+IC5NdWlCdXR0b24tY29udGFpbmVkLk11aS1kaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIzNTU4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjVhNWE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZEltYWdlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkQ29udGVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICBmbGV4OiAxO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkQ29udGVudEhlYWRlciA9IHN0eWxlZC5oNGBcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJsYWNrIE9wcyBPbmVcIiwgbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnREZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogOHB4IDBweDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJsYWNrIE9wcyBPbmVcIiwgbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkQ29udGVudEluZm9XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiQmxhY2sgT3BzIE9uZVwiLCBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuYDtcclxuXHJcbmNvbnN0IENhcmRDb250ZW50VHlwZSA9IHN0eWxlZC5wYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDY1JTtcclxuYDtcclxuXHJcbmNvbnN0IENhcmRDb250ZW50UHJpemUgPSBzdHlsZWQucGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuYDtcclxuXHJcbmNvbnN0IE9mZmVyUHJvZHVjdCA9IFJlYWN0Lm1lbW8oKHsgcHJvZHVjdCwgdXNlciwgc2V0VmFyaWFudCwgc2V0TWVzc2FnZSB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcHJvZHVjdE5hbWUsXHJcbiAgICBwcm9kdWN0RGVzY3JpcHRpb24sXHJcbiAgICBnYW1lVHlwZSxcclxuICAgIHByaXplLFxyXG4gICAgcHJvZHVjdEltZyxcclxuICB9ID0gcHJvZHVjdDtcclxuXHJcbiAgY29uc3QgW2J1dHRvbkRpc2FibGVkLCBzZXRCdXR0b25EaXNhYmxlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgY2FyZFByb2R1Y3RzID0gdXNlU2VsZWN0b3Ioc2VsZWN0UHJvZHVjdHMpLnByb2R1Y3RzO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIudXNlciAhPT0gbnVsbCkge1xyXG4gICAgICBzZXRCdXR0b25EaXNhYmxlZChmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRCdXR0b25EaXNhYmxlZCh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICBjb25zdCBhZGRQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgaWYgKCFjYXJkUHJvZHVjdHMuaW5jbHVkZXMocHJvZHVjdCkpIHtcclxuICAgICAgc2V0TWVzc2FnZShcIlByb2R1Y3QgYWRkZWQgdG8gY2FydFwiKTtcclxuICAgICAgc2V0VmFyaWFudChcInN1Y2Nlc3NcIik7XHJcbiAgICAgIGRpc3BhdGNoKGFkZFByb2R1Y3RUb0NhcnQocHJvZHVjdCkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRNZXNzYWdlKFwiUHJvZHVjdCBhbHJlYWR5IGluIGNhcmRcIik7XHJcbiAgICBzZXRWYXJpYW50KFwiZXJyb3JcIik7XHJcbiAgICBjb25zb2xlLmxvZyhjYXJkUHJvZHVjdHMuaW5jbHVkZXMocHJvZHVjdCkpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRNZXNzYWdlKG51bGwpO1xyXG4gICAgICBzZXRWYXJpYW50KG51bGwpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICBcclxuICAgICAgICA8Q2FyZEltYWdlPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjgwODAvJHtwcm9kdWN0SW1nfWB9IGFsdD17cHJvZHVjdE5hbWV9IC8+XHJcbiAgICAgICAgPC9DYXJkSW1hZ2U+XHJcbiAgICAgICAgPENhcmRDb250ZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50SGVhZGVyPntwcm9kdWN0TmFtZX08L0NhcmRDb250ZW50SGVhZGVyPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50RGVzY3JpcHRpb24+e3Byb2R1Y3REZXNjcmlwdGlvbn08L0NhcmRDb250ZW50RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8Q2FyZENvbnRlbnRJbmZvV3JhcHBlcj5cclxuICAgICAgICAgICAgPENhcmRDb250ZW50VHlwZT57Z2FtZVR5cGV9PC9DYXJkQ29udGVudFR5cGU+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudFByaXplPntwcml6ZX0gJDwvQ2FyZENvbnRlbnRQcml6ZT5cclxuICAgICAgICAgIDwvQ2FyZENvbnRlbnRJbmZvV3JhcHBlcj5cclxuICAgICAgICA8L0NhcmRDb250ZW50Q29udGFpbmVyPlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPXtidXR0b25EaXNhYmxlZCA/IFwiU2luZyBpbiB0byBidXkgcHJvZHVjdFwiIDogXCJcIn0+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICBjb2xvcj0nc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtidXR0b25EaXNhYmxlZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXthZGRQcm9kdWN0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPZmZlclByb2R1Y3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=