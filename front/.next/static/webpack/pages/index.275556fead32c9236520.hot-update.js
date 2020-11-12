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
      children: [message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Alert_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: variant,
        shouldOpen: true,
        message: message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardImage, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "http://localhost:8080/".concat(productImg),
          alt: productName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentHeader, {
          children: productName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentDescription, {
          children: productDescription
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentInfoWrapper, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentType, {
            children: gameType
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContentPrize, {
            children: [prize, " $"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
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
            lineNumber: 178,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PZmZlclByb2R1Y3QvaW5kZXguanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkNhcmRJbWFnZSIsIkNhcmRDb250ZW50Q29udGFpbmVyIiwiQ2FyZENvbnRlbnRIZWFkZXIiLCJoNCIsIkNhcmRDb250ZW50RGVzY3JpcHRpb24iLCJwIiwiQ2FyZENvbnRlbnRJbmZvV3JhcHBlciIsIkNhcmRDb250ZW50VHlwZSIsIkNhcmRDb250ZW50UHJpemUiLCJPZmZlclByb2R1Y3QiLCJSZWFjdCIsIm1lbW8iLCJwcm9kdWN0IiwidXNlciIsInNldFZhcmlhbnQiLCJzZXRNZXNzYWdlIiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJnYW1lVHlwZSIsInByaXplIiwicHJvZHVjdEltZyIsInVzZVN0YXRlIiwiYnV0dG9uRGlzYWJsZWQiLCJzZXRCdXR0b25EaXNhYmxlZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjYXJkUHJvZHVjdHMiLCJ1c2VTZWxlY3RvciIsInNlbGVjdFByb2R1Y3RzIiwicHJvZHVjdHMiLCJ1c2VFZmZlY3QiLCJhZGRQcm9kdWN0IiwiaW5jbHVkZXMiLCJhZGRQcm9kdWN0VG9DYXJ0IiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJtZXNzYWdlIiwidmFyaWFudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdtQkFBVjtLQUFNRixJO0FBMENOLElBQU1HLFNBQVMsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwySEFBZjtNQUFNQyxTO0FBaUJOLElBQU1DLG9CQUFvQixHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtB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RyxFQUFFSjtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBT0UscUVBQUMsb0JBQUQ7QUFBQSxnQ0FDRSxxRUFBQyxpQkFBRDtBQUFBLG9CQUFvQkE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLHNCQUFEO0FBQUEsb0JBQXlCQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0UscUVBQUMsc0JBQUQ7QUFBQSxrQ0FDRSxxRUFBQyxlQUFEO0FBQUEsc0JBQWtCQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUscUVBQUMsZ0JBQUQ7QUFBQSx1QkFBbUJDLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFlRSxxRUFBQyxpRUFBRDtBQUFTLGFBQUssRUFBRUcsY0FBYyxHQUFHLHdCQUFILEdBQThCLEVBQTVEO0FBQUEsK0JBQ0U7QUFBQSxpQ0FDRSxxRUFBQyx3REFBRDtBQUNFLG1CQUFPLEVBQUMsV0FEVjtBQUVFLGlCQUFLLEVBQUMsV0FGUjtBQUdFLG9CQUFRLEVBQUVBLGNBSFo7QUFJRSxtQkFBTyxFQUFFUyxVQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWdDRCxDQXRFb0I7QUFBQSxVQVVGTix1REFWRSxFQVdFRSx1REFYRjtBQUFBLEdBQXJCO09BQU1sQixZO0FBd0VTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNzU1NTZmZWFkMzJjOTIzNjUyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIGFkZFByb2R1Y3RUb0NhcnQsXHJcbiAgc2VsZWN0UHJvZHVjdHMsXHJcbn0gZnJvbSBcIi4uLy4uL1JlZHVjZXJzL3Byb2R1Y3RzU2xpY2UuanNcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLi9BbGVydC9pbmRleC5qc1wiO1xyXG5cclxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IDAgcmdiKDAgMCAwIC8gNjAlKTtcclxuICBiYWNrZ3JvdW5kOiAjMjQyNzJlO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgYWxsIGxpbmVhcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHJcbiAgJiA+IHNwYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICYgPiBzcGFuID4gLk11aUJ1dHRvbi1jb250YWluZWRTZWNvbmRhcnkge1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViYjJmYztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGxpbmVhcjtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM2MDBiZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiBzcGFuID4gLk11aUJ1dHRvbi1jb250YWluZWQuTXVpLWRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjM1NTg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmNWE1YTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkSW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmRDb250ZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gIGZsZXg6IDE7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmRDb250ZW50SGVhZGVyID0gc3R5bGVkLmg0YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiQmxhY2sgT3BzIE9uZVwiLCBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkQ29udGVudERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA4cHggMHB4O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiQmxhY2sgT3BzIE9uZVwiLCBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuYDtcclxuXHJcbmNvbnN0IENhcmRDb250ZW50SW5mb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICBmb250LWZhbWlseTogXCJCbGFjayBPcHMgT25lXCIsIG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRUeXBlID0gc3R5bGVkLnBgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNjUlO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRQcml6ZSA9IHN0eWxlZC5wYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5gO1xyXG5cclxuY29uc3QgT2ZmZXJQcm9kdWN0ID0gUmVhY3QubWVtbygoeyBwcm9kdWN0LCB1c2VyLCBzZXRWYXJpYW50LCBzZXRNZXNzYWdlIH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBwcm9kdWN0TmFtZSxcclxuICAgIHByb2R1Y3REZXNjcmlwdGlvbixcclxuICAgIGdhbWVUeXBlLFxyXG4gICAgcHJpemUsXHJcbiAgICBwcm9kdWN0SW1nLFxyXG4gIH0gPSBwcm9kdWN0O1xyXG5cclxuICBjb25zdCBbYnV0dG9uRGlzYWJsZWQsIHNldEJ1dHRvbkRpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBjYXJkUHJvZHVjdHMgPSB1c2VTZWxlY3RvcihzZWxlY3RQcm9kdWN0cykucHJvZHVjdHM7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlci51c2VyICE9PSBudWxsKSB7XHJcbiAgICAgIHNldEJ1dHRvbkRpc2FibGVkKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEJ1dHRvbkRpc2FibGVkKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIGNvbnN0IGFkZFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWNhcmRQcm9kdWN0cy5pbmNsdWRlcyhwcm9kdWN0KSkge1xyXG4gICAgICBzZXRNZXNzYWdlKFwiUHJvZHVjdCBhZGRlZCB0byBjYXJ0XCIpO1xyXG4gICAgICBzZXRWYXJpYW50KFwic3VjY2Vzc1wiKTtcclxuICAgICAgZGlzcGF0Y2goYWRkUHJvZHVjdFRvQ2FydChwcm9kdWN0KSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldE1lc3NhZ2UoXCJQcm9kdWN0IGFscmVhZHkgaW4gY2FyZFwiKTtcclxuICAgIHNldFZhcmlhbnQoXCJlcnJvclwiKTtcclxuICAgIGNvbnNvbGUubG9nKGNhcmRQcm9kdWN0cy5pbmNsdWRlcyhwcm9kdWN0KSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldE1lc3NhZ2UobnVsbCk7XHJcbiAgICAgIHNldFZhcmlhbnQobnVsbCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAge21lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9e3ZhcmlhbnR9IHNob3VsZE9wZW49e3RydWV9IG1lc3NhZ2U9e21lc3NhZ2V9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Q2FyZEltYWdlPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjgwODAvJHtwcm9kdWN0SW1nfWB9IGFsdD17cHJvZHVjdE5hbWV9IC8+XHJcbiAgICAgICAgPC9DYXJkSW1hZ2U+XHJcbiAgICAgICAgPENhcmRDb250ZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50SGVhZGVyPntwcm9kdWN0TmFtZX08L0NhcmRDb250ZW50SGVhZGVyPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50RGVzY3JpcHRpb24+e3Byb2R1Y3REZXNjcmlwdGlvbn08L0NhcmRDb250ZW50RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8Q2FyZENvbnRlbnRJbmZvV3JhcHBlcj5cclxuICAgICAgICAgICAgPENhcmRDb250ZW50VHlwZT57Z2FtZVR5cGV9PC9DYXJkQ29udGVudFR5cGU+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudFByaXplPntwcml6ZX0gJDwvQ2FyZENvbnRlbnRQcml6ZT5cclxuICAgICAgICAgIDwvQ2FyZENvbnRlbnRJbmZvV3JhcHBlcj5cclxuICAgICAgICA8L0NhcmRDb250ZW50Q29udGFpbmVyPlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPXtidXR0b25EaXNhYmxlZCA/IFwiU2luZyBpbiB0byBidXkgcHJvZHVjdFwiIDogXCJcIn0+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICBjb2xvcj0nc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtidXR0b25EaXNhYmxlZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXthZGRQcm9kdWN0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPZmZlclByb2R1Y3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=