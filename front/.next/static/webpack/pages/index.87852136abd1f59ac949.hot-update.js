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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      shouldOpen = _useState2[0],
      setShouldOpen = _useState2[1];

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
        lineNumber: 165,
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
      lineNumber: 163,
      columnNumber: 7
    }, _this)
  }, void 0, false);
}, "3N6qEVgeWUSoMZFyhpoZTRN00sg=", false, function () {
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

/***/ }),

/***/ "./components/ProductsComponent/index.js":
/*!***********************************************!*\
  !*** ./components/ProductsComponent/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _OfferProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../OfferProduct */ "./components/OfferProduct/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Reducers_userSlice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Reducers/userSlice.js */ "./Reducers/userSlice.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "./node_modules/@material-ui/icons/KeyboardArrowRight.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowLeft */ "./node_modules/@material-ui/icons/KeyboardArrowLeft.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./productsComponent.styles.js */ "./components/ProductsComponent/productsComponent.styles.js");




var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\ProductsComponent\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var ProductsComponent = function ProductsComponent() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      products = _useState[0],
      setProducts = _useState[1];

  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(_Reducers_userSlice_js__WEBPACK_IMPORTED_MODULE_7__["selectUser"]);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Desktop"),
      categoryDisplayed = _useState2[0],
      setCategoryDisplayed = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(5),
      visibleTasks = _useState3[0],
      setVisibleTasks = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      startRange = _useState4[0],
      setStartRange = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(visibleTasks),
      endRange = _useState5[0],
      setEndRange = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      message = _useState6[0],
      setMessage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      variant = _useState7[0],
      setVariant = _useState7[1];

  var arrayLength = 0;

  var fetchProducts = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var query, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("http://localhost:8080/getProducts");

            case 2:
              query = _context.sent;
              _context.next = 5;
              return query.json();

            case 5:
              response = _context.sent;
              setProducts(response.products);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchProducts() {
      return _ref.apply(this, arguments);
    };
  }();

  var incrementRange = function incrementRange() {
    if (endRange >= arrayLength) return;
    setStartRange(startRange + visibleTasks);
    setEndRange(endRange + visibleTasks);
  };

  var handleArrayRange = function handleArrayRange(arr) {
    var array = arr.filter(function (product) {
      return product.device === categoryDisplayed && product.availableAmount > 0;
    });
    arrayLength = array.length;
    return array.slice(startRange - 1, endRange);
  };

  var decrementRange = function decrementRange() {
    if (startRange <= 1 || startRange - visibleTasks <= 0) return;
    setStartRange(startRange - visibleTasks);
    setEndRange(endRange - visibleTasks);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchProducts();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setStartRange(1);
    setEndRange(visibleTasks);
  }, [visibleTasks]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Wrapper"], {
    id: "games",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Header"], {
      children: "Our offer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["ItemsContainer"], {
      children: handleArrayRange(products).map(function (product, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_OfferProduct__WEBPACK_IMPORTED_MODULE_5__["default"], {
          product: product,
          user: user
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Footer"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["FooterContent"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["FooterRows"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Paragraph"], {
            children: "Products displayed:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Paragraph"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("select", {
              onChange: function onChange(e) {
                setVisibleTasks(parseInt(e.target.value));
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                value: 5,
                children: "5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                value: 10,
                children: "10"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                value: 15,
                children: "15"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Paragraph"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: startRange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: "-"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: endRange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: "of"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: [" ", arrayLength, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Paragraph"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_9___default.a, {
                onClick: function onClick() {
                  return decrementRange();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8___default.a, {
                onClick: function onClick() {
                  return incrementRange();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["FooterContent"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["FooterRows"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Paragraph"], {
            children: "Device:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Paragraph"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("select", {
              onChange: function onChange(e) {
                setCategoryDisplayed(e.target.value);
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                value: "Desktop",
                children: "Desktop"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                value: "Playstation",
                children: "Playstation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                value: "Xbox",
                children: "Xbox"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, _this);
};

_s(ProductsComponent, "pA+Tiz8q9OriZlAYfzLIYP3Lweo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c = ProductsComponent;
/* harmony default export */ __webpack_exports__["default"] = (ProductsComponent);

var _c;

$RefreshReg$(_c, "ProductsComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PZmZlclByb2R1Y3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdHNDb21wb25lbnQvaW5kZXguanMiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsIkNhcmRJbWFnZSIsIkNhcmRDb250ZW50Q29udGFpbmVyIiwiQ2FyZENvbnRlbnRIZWFkZXIiLCJoNCIsIkNhcmRDb250ZW50RGVzY3JpcHRpb24iLCJwIiwiQ2FyZENvbnRlbnRJbmZvV3JhcHBlciIsIkNhcmRDb250ZW50VHlwZSIsIkNhcmRDb250ZW50UHJpemUiLCJPZmZlclByb2R1Y3QiLCJSZWFjdCIsIm1lbW8iLCJwcm9kdWN0IiwidXNlciIsInNldFZhcmlhbnQiLCJzZXRNZXNzYWdlIiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJnYW1lVHlwZSIsInByaXplIiwicHJvZHVjdEltZyIsInVzZVN0YXRlIiwiYnV0dG9uRGlzYWJsZWQiLCJzZXRCdXR0b25EaXNhYmxlZCIsInNob3VsZE9wZW4iLCJzZXRTaG91bGRPcGVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNhcmRQcm9kdWN0cyIsInVzZVNlbGVjdG9yIiwic2VsZWN0UHJvZHVjdHMiLCJwcm9kdWN0cyIsInVzZUVmZmVjdCIsImFkZFByb2R1Y3QiLCJpbmNsdWRlcyIsImFkZFByb2R1Y3RUb0NhcnQiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsIm1lc3NhZ2UiLCJ2YXJpYW50IiwiUHJvZHVjdHNDb21wb25lbnQiLCJzZXRQcm9kdWN0cyIsInNlbGVjdFVzZXIiLCJjYXRlZ29yeURpc3BsYXllZCIsInNldENhdGVnb3J5RGlzcGxheWVkIiwidmlzaWJsZVRhc2tzIiwic2V0VmlzaWJsZVRhc2tzIiwic3RhcnRSYW5nZSIsInNldFN0YXJ0UmFuZ2UiLCJlbmRSYW5nZSIsInNldEVuZFJhbmdlIiwiYXJyYXlMZW5ndGgiLCJmZXRjaFByb2R1Y3RzIiwiZmV0Y2giLCJxdWVyeSIsImpzb24iLCJyZXNwb25zZSIsImluY3JlbWVudFJhbmdlIiwiaGFuZGxlQXJyYXlSYW5nZSIsImFyciIsImFycmF5IiwiZmlsdGVyIiwiZGV2aWNlIiwiYXZhaWxhYmxlQW1vdW50IiwibGVuZ3RoIiwic2xpY2UiLCJkZWNyZW1lbnRSYW5nZSIsIm1hcCIsImluZGV4IiwiZSIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3bUJBQVY7S0FBTUYsSTtBQTBDTixJQUFNRyxTQUFTLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkhBQWY7TUFBTUMsUztBQWlCTixJQUFNQyxvQkFBb0IsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzTEFBMUI7TUFBTUUsb0I7QUFhTixJQUFNQyxpQkFBaUIsR0FBR0oseURBQU0sQ0FBQ0ssRUFBVjtBQUFBO0FBQUE7QUFBQSx1R0FBdkI7TUFBTUQsaUI7QUFRTixJQUFNRSxzQkFBc0IsR0FBR04seURBQU0sQ0FBQ08sQ0FBVjtBQUFBO0FBQUE7QUFBQSwySEFBNUI7TUFBTUQsc0I7QUFTTixJQUFNRSxzQkFBc0IsR0FBR1IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtSEFBNUI7TUFBTU8sc0I7QUFTTixJQUFNQyxlQUFlLEdBQUdULHlEQUFNLENBQUNPLENBQVY7QUFBQTtBQUFBO0FBQUEsK0JBQXJCO01BQU1FLGU7QUFLTixJQUFNQyxnQkFBZ0IsR0FBR1YseURBQU0sQ0FBQ08sQ0FBVjtBQUFBO0FBQUE7QUFBQSx3REFBdEI7TUFBTUcsZ0I7QUFNTixJQUFNQyxZQUFZLGdCQUFHQyw0Q0FBSyxD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QUFBQSxlQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJERCxDQTFHRDs7R0FBTWhDLGlCO1VBR1NaLHVEOzs7S0FIVFksaUI7QUE0R1NBLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg3ODUyMTM2YWJkMWY1OWFjOTQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgYWRkUHJvZHVjdFRvQ2FydCxcclxuICBzZWxlY3RQcm9kdWN0cyxcclxufSBmcm9tIFwiLi4vLi4vUmVkdWNlcnMvcHJvZHVjdHNTbGljZS5qc1wiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcIi4uL0FsZXJ0L2luZGV4LmpzXCI7XHJcblxyXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMCByZ2IoMCAwIDAgLyA2MCUpO1xyXG4gIGJhY2tncm91bmQ6ICMyNDI3MmU7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGwgbGluZWFyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cclxuICAmID4gc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJiA+IHNwYW4gPiAuTXVpQnV0dG9uLWNvbnRhaW5lZFNlY29uZGFyeSB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJiMmZjO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGwgbGluZWFyO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzYwMGJmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IHNwYW4gPiAuTXVpQnV0dG9uLWNvbnRhaW5lZC5NdWktZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMzU1ODtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY1YTVhO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmRJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogYXV0bztcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgZmxleDogMTtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRIZWFkZXIgPSBzdHlsZWQuaDRgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBmb250LWZhbWlseTogXCJCbGFjayBPcHMgT25lXCIsIG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuYDtcclxuXHJcbmNvbnN0IENhcmRDb250ZW50RGVzY3JpcHRpb24gPSBzdHlsZWQucGBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDhweCAwcHg7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogXCJCbGFjayBPcHMgT25lXCIsIG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnRJbmZvV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJsYWNrIE9wcyBPbmVcIiwgbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkQ29udGVudFR5cGUgPSBzdHlsZWQucGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA2NSU7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkQ29udGVudFByaXplID0gc3R5bGVkLnBgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMzUlO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbmA7XHJcblxyXG5jb25zdCBPZmZlclByb2R1Y3QgPSBSZWFjdC5tZW1vKCh7IHByb2R1Y3QsIHVzZXIsIHNldFZhcmlhbnQsIHNldE1lc3NhZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHByb2R1Y3ROYW1lLFxyXG4gICAgcHJvZHVjdERlc2NyaXB0aW9uLFxyXG4gICAgZ2FtZVR5cGUsXHJcbiAgICBwcml6ZSxcclxuICAgIHByb2R1Y3RJbWcsXHJcbiAgfSA9IHByb2R1Y3Q7XHJcblxyXG4gIGNvbnN0IFtidXR0b25EaXNhYmxlZCwgc2V0QnV0dG9uRGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3Nob3VsZE9wZW4sIHNldFNob3VsZE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgY2FyZFByb2R1Y3RzID0gdXNlU2VsZWN0b3Ioc2VsZWN0UHJvZHVjdHMpLnByb2R1Y3RzO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIudXNlciAhPT0gbnVsbCkge1xyXG4gICAgICBzZXRCdXR0b25EaXNhYmxlZChmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRCdXR0b25EaXNhYmxlZCh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICBjb25zdCBhZGRQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgaWYgKCFjYXJkUHJvZHVjdHMuaW5jbHVkZXMocHJvZHVjdCkpIHtcclxuICAgICAgc2V0TWVzc2FnZShcIlByb2R1Y3QgYWRkZWQgdG8gY2FydFwiKTtcclxuICAgICAgc2V0VmFyaWFudChcInN1Y2Nlc3NcIik7XHJcbiAgICAgIGRpc3BhdGNoKGFkZFByb2R1Y3RUb0NhcnQocHJvZHVjdCkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRNZXNzYWdlKFwiUHJvZHVjdCBhbHJlYWR5IGluIGNhcmRcIik7XHJcbiAgICBzZXRWYXJpYW50KFwiZXJyb3JcIik7XHJcbiAgICBjb25zb2xlLmxvZyhjYXJkUHJvZHVjdHMuaW5jbHVkZXMocHJvZHVjdCkpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRNZXNzYWdlKG51bGwpO1xyXG4gICAgICBzZXRWYXJpYW50KG51bGwpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIHttZXNzYWdlICYmIChcclxuICAgICAgICAgIDxBbGVydCB2YXJpYW50PXt2YXJpYW50fSBzaG91bGRPcGVuPXt0cnVlfSBtZXNzYWdlPXttZXNzYWdlfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPENhcmRJbWFnZT5cclxuICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDo4MDgwLyR7cHJvZHVjdEltZ31gfSBhbHQ9e3Byb2R1Y3ROYW1lfSAvPlxyXG4gICAgICAgIDwvQ2FyZEltYWdlPlxyXG4gICAgICAgIDxDYXJkQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgICAgIDxDYXJkQ29udGVudEhlYWRlcj57cHJvZHVjdE5hbWV9PC9DYXJkQ29udGVudEhlYWRlcj5cclxuICAgICAgICAgIDxDYXJkQ29udGVudERlc2NyaXB0aW9uPntwcm9kdWN0RGVzY3JpcHRpb259PC9DYXJkQ29udGVudERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50SW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudFR5cGU+e2dhbWVUeXBlfTwvQ2FyZENvbnRlbnRUeXBlPlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnRQcml6ZT57cHJpemV9ICQ8L0NhcmRDb250ZW50UHJpemU+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50SW5mb1dyYXBwZXI+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17YnV0dG9uRGlzYWJsZWQgPyBcIlNpbmcgaW4gdG8gYnV5IHByb2R1Y3RcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgY29sb3I9J3NlY29uZGFyeSdcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17YnV0dG9uRGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17YWRkUHJvZHVjdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2ZmZXJQcm9kdWN0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgT2ZmZXJQcm9kdWN0IGZyb20gXCIuLi9PZmZlclByb2R1Y3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0VXNlciB9IGZyb20gXCIuLi8uLi9SZWR1Y2Vycy91c2VyU2xpY2UuanNcIjtcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dSaWdodEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93UmlnaHRcIjtcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dMZWZ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dMZWZ0XCI7XHJcbmltcG9ydCB7XHJcbiAgV3JhcHBlcixcclxuICBIZWFkZXIsXHJcbiAgUGFyYWdyYXBoLFxyXG4gIEl0ZW1zQ29udGFpbmVyLFxyXG4gIEZvb3RlcixcclxuICBGb290ZXJDb250ZW50LFxyXG4gIEZvb3RlclJvd3MsXHJcbiAgU3BhbixcclxufSBmcm9tIFwiLi9wcm9kdWN0c0NvbXBvbmVudC5zdHlsZXMuanNcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RzQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyKTtcclxuICBjb25zdCBbY2F0ZWdvcnlEaXNwbGF5ZWQsIHNldENhdGVnb3J5RGlzcGxheWVkXSA9IHVzZVN0YXRlKFwiRGVza3RvcFwiKTtcclxuICBjb25zdCBbdmlzaWJsZVRhc2tzLCBzZXRWaXNpYmxlVGFza3NdID0gdXNlU3RhdGUoNSk7XHJcbiAgY29uc3QgW3N0YXJ0UmFuZ2UsIHNldFN0YXJ0UmFuZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2VuZFJhbmdlLCBzZXRFbmRSYW5nZV0gPSB1c2VTdGF0ZSh2aXNpYmxlVGFza3MpO1xyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdmFyaWFudCwgc2V0VmFyaWFudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBsZXQgYXJyYXlMZW5ndGggPSAwO1xyXG5cclxuICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcXVlcnkgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9nZXRQcm9kdWN0c1wiKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnkuanNvbigpO1xyXG4gICAgc2V0UHJvZHVjdHMocmVzcG9uc2UucHJvZHVjdHMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluY3JlbWVudFJhbmdlID0gKCkgPT4ge1xyXG4gICAgaWYgKGVuZFJhbmdlID49IGFycmF5TGVuZ3RoKSByZXR1cm47XHJcbiAgICBzZXRTdGFydFJhbmdlKHN0YXJ0UmFuZ2UgKyB2aXNpYmxlVGFza3MpO1xyXG4gICAgc2V0RW5kUmFuZ2UoZW5kUmFuZ2UgKyB2aXNpYmxlVGFza3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFycmF5UmFuZ2UgPSAoYXJyKSA9PiB7XHJcbiAgICBjb25zdCBhcnJheSA9IGFyci5maWx0ZXIoXHJcbiAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmRldmljZSA9PT0gY2F0ZWdvcnlEaXNwbGF5ZWQgJiYgcHJvZHVjdC5hdmFpbGFibGVBbW91bnQgPiAwXHJcbiAgICApO1xyXG4gICAgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XHJcbiAgICByZXR1cm4gYXJyYXkuc2xpY2Uoc3RhcnRSYW5nZSAtIDEsIGVuZFJhbmdlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWNyZW1lbnRSYW5nZSA9ICgpID0+IHtcclxuICAgIGlmIChzdGFydFJhbmdlIDw9IDEgfHwgc3RhcnRSYW5nZSAtIHZpc2libGVUYXNrcyA8PSAwKSByZXR1cm47XHJcbiAgICBzZXRTdGFydFJhbmdlKHN0YXJ0UmFuZ2UgLSB2aXNpYmxlVGFza3MpO1xyXG4gICAgc2V0RW5kUmFuZ2UoZW5kUmFuZ2UgLSB2aXNpYmxlVGFza3MpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PntcclxuICAgIGZldGNoUHJvZHVjdHMoKVxyXG4gIH0sW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTdGFydFJhbmdlKDEpO1xyXG4gICAgc2V0RW5kUmFuZ2UodmlzaWJsZVRhc2tzKTtcclxuICB9LCBbdmlzaWJsZVRhc2tzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlciBpZD1cImdhbWVzXCI+XHJcbiAgICAgIDxIZWFkZXI+T3VyIG9mZmVyPC9IZWFkZXI+XHJcbiAgICAgIDxJdGVtc0NvbnRhaW5lcj5cclxuICAgICAgICB7aGFuZGxlQXJyYXlSYW5nZShwcm9kdWN0cykubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPE9mZmVyUHJvZHVjdCBrZXk9e2luZGV4fSBwcm9kdWN0PXtwcm9kdWN0fSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0l0ZW1zQ29udGFpbmVyPlxyXG4gICAgICA8Rm9vdGVyPlxyXG4gICAgICAgIDxGb290ZXJDb250ZW50PlxyXG4gICAgICAgICAgPEZvb3RlclJvd3M+XHJcbiAgICAgICAgICAgIDxQYXJhZ3JhcGg+UHJvZHVjdHMgZGlzcGxheWVkOjwvUGFyYWdyYXBoPlxyXG4gICAgICAgICAgICA8UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlVGFza3MocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17NX0+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MTB9PjEwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxNX0+MTU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgIDxQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgICAgPFNwYW4+e3N0YXJ0UmFuZ2V9PC9TcGFuPlxyXG4gICAgICAgICAgICAgIDxTcGFuPi08L1NwYW4+XHJcbiAgICAgICAgICAgICAgPFNwYW4+e2VuZFJhbmdlfTwvU3Bhbj5cclxuICAgICAgICAgICAgICA8U3Bhbj5vZjwvU3Bhbj5cclxuICAgICAgICAgICAgICA8U3Bhbj4ge2FycmF5TGVuZ3RofSA8L1NwYW4+XHJcbiAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxyXG4gICAgICAgICAgICA8UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgIDxTcGFuPlxyXG4gICAgICAgICAgICAgICAgPEtleWJvYXJkQXJyb3dMZWZ0SWNvbiBvbkNsaWNrPXsoKSA9PiBkZWNyZW1lbnRSYW5nZSgpfSAvPlxyXG4gICAgICAgICAgICAgIDwvU3Bhbj5cclxuICAgICAgICAgICAgICA8U3Bhbj5cclxuICAgICAgICAgICAgICAgIDxLZXlib2FyZEFycm93UmlnaHRJY29uIG9uQ2xpY2s9eygpID0+IGluY3JlbWVudFJhbmdlKCl9IC8+XHJcbiAgICAgICAgICAgICAgPC9TcGFuPlxyXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cclxuICAgICAgICAgIDwvRm9vdGVyUm93cz5cclxuICAgICAgICA8L0Zvb3RlckNvbnRlbnQ+XHJcbiAgICAgICAgPEZvb3RlckNvbnRlbnQ+XHJcbiAgICAgICAgICA8Rm9vdGVyUm93cz5cclxuICAgICAgICAgICAgPFBhcmFncmFwaD5EZXZpY2U6PC9QYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgIDxQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5RGlzcGxheWVkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nRGVza3RvcCc+RGVza3RvcDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nUGxheXN0YXRpb24nPlBsYXlzdGF0aW9uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdYYm94Jz5YYm94PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxyXG4gICAgICAgICAgPC9Gb290ZXJSb3dzPlxyXG4gICAgICAgIDwvRm9vdGVyQ29udGVudD5cclxuICAgICAgPC9Gb290ZXI+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzQ29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9