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
    if (!cardProducts.includes(product)) {
      setMessage("Product added to cart");
      setVariant("success");
      dispatch(Object(_Reducers_productsSlice_js__WEBPACK_IMPORTED_MODULE_6__["addProductToCart"])(product));
      setShouldOpen(true);
      return;
    }

    setMessage("Product already in card");
    setVariant("error");
    console.log(cardProducts.includes(product));
    setShouldOpen(true);
    setTimeout(function () {
      setShouldOpen(false);
      setMessage("");
      setVariant("");
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
        lineNumber: 169,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardImage, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "http://localhost:8080/".concat(productImg),
          alt: productName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentHeader, {
          children: productName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentDescription, {
          children: productDescription
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentInfoWrapper, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentType, {
            children: gameType
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentPrize, {
            children: [prize, " $"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
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
            lineNumber: 184,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PZmZlclByb2R1Y3QvaW5kZXguanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkNhcmRJbWFnZSIsIkNhcmRDb250ZW50Q29udGFpbmVyIiwiQ2FyZENvbnRlbnRIZWFkZXIiLCJoNCIsIkNhcmRDb250ZW50RGVzY3JpcHRpb24iLCJwIiwiQ2FyZENvbnRlbnRJbmZvV3JhcHBlciIsIkNhcmRDb250ZW50VHlwZSIsIkNhcmRDb250ZW50UHJpemUiLCJPZmZlclByb2R1Y3QiLCJSZWFjdCIsIm1lbW8iLCJwcm9kdWN0IiwidXNlciIsInByb2R1Y3ROYW1lIiwicHJvZHVjdERlc2NyaXB0aW9uIiwiZ2FtZVR5cGUiLCJwcml6ZSIsInByb2R1Y3RJbWciLCJ1c2VTdGF0ZSIsImJ1dHRvbkRpc2FibGVkIiwic2V0QnV0dG9uRGlzYWJsZWQiLCJzaG91bGRPcGVuIiwic2V0U2hvdWxkT3BlbiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidmFyaWFudCIsInNldFZhcmlhbnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY2FyZFByb2R1Y3RzIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RQcm9kdWN0cyIsInByb2R1Y3RzIiwidXNlRWZmZWN0IiwiYWRkUHJvZHVjdCIsImluY2x1ZGVzIiwiYWRkUHJvZHVjdFRvQ2FydCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd21CQUFWO0tBQU1GLEk7QUEwQ04sSUFBTUcsU0FBUyxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJIQUFmO01BQU1DLFM7QUFpQk4sSUFBTUMsb0JBQW9CLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0xBQTFCO01BQU1FLG9CO0FBYU4sSUFBTUMsaUJBQWlCLEdBQUdKLHlEQUFNLENBQUNLLEVBQVY7QUFBQTtBQUFBO0FBQUEsdUdBQXZCO01BQU1ELGlCO0FBUU4sSUFBTUUsc0JBQXNCLEdBQUdOLHlEQUFNLENBQUNPLENBQVY7QUFBQTtBQUFBO0FBQUEsMkhBQTVCO01BQU1ELHNCO0FBU04sSUFBTUUsc0JBQXNCLEdBQUdSLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUhBQTVCO01BQU1PLHNCO0FBU04sSUFBTUMsZUFBZSxHQUFHVCx5REFBTSxDQUFDTyxDQUFWO0FBQUE7QUFBQTtBQUFBLCtCQUFyQjtNQUFNRSxlO0FBS04sSUFBTUMsZ0JBQWdCLEdBQUdWLHlEQUFNLENBQUNPLENBQVY7QUFBQTtBQUFBO0FBQUEsd0RBQXRCO01BQU1HLGdCO0FBTU4sSUFBTUMsWUFBWSxnQkFBR0MsNENBQUssQ0FBQ0MsSUFBTixVQUFXLGdCQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFBQSxNQUVuREMsV0FGbUQsR0FPakRGLE9BUGlELENBRW5ERSxXQUZtRDtBQUFBLE1BR25EQyxrQkFIbUQsR0FPakRILE9BUGlELENBR25ERyxrQkFIbUQ7QUFBQSxNQUluREMsUUFKbUQsR0FPakRKLE9BUGlELENBSW5ESSxRQUptRDtBQUFBLE1BS25EQyxLQUxtRCxHQU9qREwsT0FQaUQsQ0FLbkRLLEtBTG1EO0FBQUEsTUFNbkRDLFVBTm1ELEdBT2pETixPQVBpRCxDQU1uRE0sVUFObUQ7O0FBQUEsa0JBU1RDLHNEQUFRLENBQUMsSUFBRCxDQVRDO0FBQUEsTUFTOUNDLGNBVDhDO0FBQUEsTUFTOUJDLGlCQVQ4Qjs7QUFBQSxtQkFVakJGLHNEQUFRLENBQUMsS0FBRCxDQVZTO0FBQUEsTUFVOUNHLFVBVjhDO0FBQUEsTUFVbENDLGFBVmtDOztBQUFBLG1CQVd2Qkosc0RBQVEsQ0FBQyxFQUFELENBWGU7QUFBQSxNQVc5Q0ssT0FYOEM7QUFBQSxNQVdyQ0MsVUFYcUM7O0FBQUEsbUJBWXZCTixzREFBUSxDQUFDLE9BQUQsQ0FaZTtBQUFBLE1BWTlDTyxPQVo4QztBQUFBLE1BWXJDQyxVQVpxQzs7QUFhckQsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFlBQVksR0FBR0MsK0RBQVcsQ0FBQ0MseUVBQUQsQ0FBWCxDQUE0QkMsUUFBakQ7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSXJCLElBQUksQ0FBQ0EsSUFBTCxLQUFjLElBQWxCLEVBQXdCO0FBQ3RCUSx1QkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLHVCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDRDtBQUNGLEdBTlEsRUFNTixDQUFDUixJQUFELENBTk0sQ0FBVDs7QUFRQSxNQUFNc0IsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixRQUFJLENBQUNMLFlBQVksQ0FBQ00sUUFBYixDQUFzQnhCLE9BQXRCLENBQUwsRUFBcUM7QUFDbkNhLGdCQUFVLENBQUMsdUJBQUQsQ0FBVjtBQUNBRSxnQkFBVSxDQUFDLFNBQUQsQ0FBVjtBQUNBQyxjQUFRLENBQUNTLG1GQUFnQixDQUFDekIsT0FBRCxDQUFqQixDQUFSO0FBQ0FXLG1CQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0E7QUFDRDs7QUFDREUsY0FBVSxDQUFDLHlCQUFELENBQVY7QUFDQUUsY0FBVSxDQUFDLE9BQUQsQ0FBVjtBQUNBVyxXQUFPLENBQUNDLEdBQVIsQ0FBWVQsWUFBWSxDQUFDTSxRQUFiLENBQXNCeEIsT0FBdEIsQ0FBWjtBQUNBVyxpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUVBaUIsY0FBVSxDQUFDLFlBQU07QUFDZmpCLG1CQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0FFLGdCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FFLGdCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0QsS0FKUyxFQUlQLElBSk8sQ0FBVjtBQUtELEdBbEJEOztBQW9CQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLElBQUQ7QUFBQSxpQkFDR0wsVUFBVSxpQkFDVCxxRUFBQyx1REFBRDtBQUFPLGVBQU8sRUFBRUksT0FBaEI7QUFBeUIsa0JBQVUsRUFBRUosVUFBckM7QUFBaUQsZUFBTyxFQUFFRTtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFJRSxxRUFBQyxTQUFEO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLGtDQUEyQk4sVUFBM0IsQ0FBUjtBQUFpRCxhQUFHLEVBQUVKO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFPRSxxRUFBQyxvQkFBRDtBQUFBLGdDQUNFLHFFQUFDLGlCQUFEO0FBQUEsb0JBQW9CQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsc0JBQUQ7QUFBQSxvQkFBeUJDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSxxRUFBQyxzQkFBRDtBQUFBLGtDQUNFLHFFQUFDLGVBQUQ7QUFBQSxzQkFBa0JDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQyxnQkFBRDtBQUFBLHVCQUFtQkMsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixlQWVFLHFFQUFDLGlFQUFEO0FBQVMsYUFBSyxFQUFFRyxjQUFjLEdBQUcsd0JBQUgsR0FBOEIsRUFBNUQ7QUFBQSwrQkFDRTtBQUFBLGlDQUNFLHFFQUFDLHdEQUFEO0FBQ0UsbUJBQU8sRUFBQyxXQURWO0FBRUUsaUJBQUssRUFBQyxXQUZSO0FBR0Usb0JBQVEsRUFBRUEsY0FIWjtBQUlFLG1CQUFPLEVBQUVlLFVBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBZ0NELENBNUVvQjtBQUFBLFVBYUZOLHVEQWJFLEVBY0VFLHVEQWRGO0FBQUEsR0FBckI7T0FBTXRCLFk7QUE4RVNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgzNGYyMjY4NDFiMWVlNzljNTE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgYWRkUHJvZHVjdFRvQ2FydCxcclxuICBzZWxlY3RQcm9kdWN0cyxcclxufSBmcm9tIFwiLi4vLi4vUmVkdWNlcnMvcHJvZHVjdHNTbGljZS5qc1wiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcIi4uL0FsZXJ0L2luZGV4LmpzXCI7XHJcblxyXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMCByZ2IoMCAwIDAgLyA2MCUpO1xyXG4gIGJhY2tncm91bmQ6ICMyNDI3MmU7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGwgbGluZWFyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cclxuICAmID4gc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJiA+IHNwYW4gPiAuTXVpQnV0dG9uLWNvbnRhaW5lZFNlY29uZGFyeSB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJiMmZjO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGwgbGluZWFyO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzYwMGJmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IHNwYW4gPiAuTXVpQnV0dG9uLWNvbnRhaW5lZC5NdWktZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMzU1ODtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY1YTVhO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmRJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogYXV0bztcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgZmxleDogMTtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRIZWFkZXIgPSBzdHlsZWQuaDRgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBmb250LWZhbWlseTogXCJCbGFjayBPcHMgT25lXCIsIG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuYDtcclxuXHJcbmNvbnN0IENhcmRDb250ZW50RGVzY3JpcHRpb24gPSBzdHlsZWQucGBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDhweCAwcHg7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogXCJCbGFjayBPcHMgT25lXCIsIG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRJbmZvV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJsYWNrIE9wcyBPbmVcIiwgbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkQ29udGVudFR5cGUgPSBzdHlsZWQucGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA2NSU7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkQ29udGVudFByaXplID0gc3R5bGVkLnBgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMzUlO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbmA7XHJcblxyXG5jb25zdCBPZmZlclByb2R1Y3QgPSBSZWFjdC5tZW1vKCh7IHByb2R1Y3QsIHVzZXIgfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHByb2R1Y3ROYW1lLFxyXG4gICAgcHJvZHVjdERlc2NyaXB0aW9uLFxyXG4gICAgZ2FtZVR5cGUsXHJcbiAgICBwcml6ZSxcclxuICAgIHByb2R1Y3RJbWcsXHJcbiAgfSA9IHByb2R1Y3Q7XHJcblxyXG4gIGNvbnN0IFtidXR0b25EaXNhYmxlZCwgc2V0QnV0dG9uRGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3Nob3VsZE9wZW4sIHNldFNob3VsZE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt2YXJpYW50LCBzZXRWYXJpYW50XSA9IHVzZVN0YXRlKFwiZXJyb3JcIik7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGNhcmRQcm9kdWN0cyA9IHVzZVNlbGVjdG9yKHNlbGVjdFByb2R1Y3RzKS5wcm9kdWN0cztcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyLnVzZXIgIT09IG51bGwpIHtcclxuICAgICAgc2V0QnV0dG9uRGlzYWJsZWQoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0QnV0dG9uRGlzYWJsZWQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgY29uc3QgYWRkUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGlmICghY2FyZFByb2R1Y3RzLmluY2x1ZGVzKHByb2R1Y3QpKSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJQcm9kdWN0IGFkZGVkIHRvIGNhcnRcIik7XHJcbiAgICAgIHNldFZhcmlhbnQoXCJzdWNjZXNzXCIpO1xyXG4gICAgICBkaXNwYXRjaChhZGRQcm9kdWN0VG9DYXJ0KHByb2R1Y3QpKTtcclxuICAgICAgc2V0U2hvdWxkT3Blbih0cnVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0TWVzc2FnZShcIlByb2R1Y3QgYWxyZWFkeSBpbiBjYXJkXCIpO1xyXG4gICAgc2V0VmFyaWFudChcImVycm9yXCIpO1xyXG4gICAgY29uc29sZS5sb2coY2FyZFByb2R1Y3RzLmluY2x1ZGVzKHByb2R1Y3QpKTtcclxuICAgIHNldFNob3VsZE9wZW4odHJ1ZSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldFNob3VsZE9wZW4oZmFsc2UpO1xyXG4gICAgICBzZXRNZXNzYWdlKFwiXCIpO1xyXG4gICAgICBzZXRWYXJpYW50KFwiXCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIHtzaG91bGRPcGVuICYmIChcclxuICAgICAgICAgIDxBbGVydCB2YXJpYW50PXt2YXJpYW50fSBzaG91bGRPcGVuPXtzaG91bGRPcGVufSBtZXNzYWdlPXttZXNzYWdlfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPENhcmRJbWFnZT5cclxuICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDo4MDgwLyR7cHJvZHVjdEltZ31gfSBhbHQ9e3Byb2R1Y3ROYW1lfSAvPlxyXG4gICAgICAgIDwvQ2FyZEltYWdlPlxyXG4gICAgICAgIDxDYXJkQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgICAgIDxDYXJkQ29udGVudEhlYWRlcj57cHJvZHVjdE5hbWV9PC9DYXJkQ29udGVudEhlYWRlcj5cclxuICAgICAgICAgIDxDYXJkQ29udGVudERlc2NyaXB0aW9uPntwcm9kdWN0RGVzY3JpcHRpb259PC9DYXJkQ29udGVudERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50SW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudFR5cGU+e2dhbWVUeXBlfTwvQ2FyZENvbnRlbnRUeXBlPlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnRQcml6ZT57cHJpemV9ICQ8L0NhcmRDb250ZW50UHJpemU+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50SW5mb1dyYXBwZXI+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17YnV0dG9uRGlzYWJsZWQgPyBcIlNpbmcgaW4gdG8gYnV5IHByb2R1Y3RcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgY29sb3I9J3NlY29uZGFyeSdcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17YnV0dG9uRGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17YWRkUHJvZHVjdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2ZmZXJQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9