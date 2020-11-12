webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _Alert_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Alert/index.js */ "./components/Alert/index.js");




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
      lineNumber: 70,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["ItemsContainer"], {
      children: handleArrayRange(products).map(function (product, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_OfferProduct__WEBPACK_IMPORTED_MODULE_5__["default"], {
          product: product,
          user: user,
          setVariant: setVariant,
          setMessage: setMessage
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Footer"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["FooterContent"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["FooterRows"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Paragraph"], {
            children: "Products displayed:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
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
                lineNumber: 92,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                value: 10,
                children: "10"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                value: 15,
                children: "15"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Paragraph"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: startRange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: "-"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: endRange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: "of"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: [" ", arrayLength, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Paragraph"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_9___default.a, {
                onClick: function onClick() {
                  return decrementRange();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8___default.a, {
                onClick: function onClick() {
                  return incrementRange();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["FooterContent"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["FooterRows"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Paragraph"], {
            children: "Device:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
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
                lineNumber: 123,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                value: "Playstation",
                children: "Playstation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                value: "Xbox",
                children: "Xbox"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, _this), message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Alert_index_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      variant: variant,
      shouldOpen: true,
      message: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0NvbXBvbmVudC9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0c0NvbXBvbmVudCIsInVzZVN0YXRlIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInNlbGVjdFVzZXIiLCJjYXRlZ29yeURpc3BsYXllZCIsInNldENhdGVnb3J5RGlzcGxheWVkIiwidmlzaWJsZVRhc2tzIiwic2V0VmlzaWJsZVRhc2tzIiwic3RhcnRSYW5nZSIsInNldFN0YXJ0UmFuZ2UiLCJlbmRSYW5nZSIsInNldEVuZFJhbmdlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ2YXJpYW50Iiwic2V0VmFyaWFudCIsImFycmF5TGVuZ3RoIiwiZmV0Y2hQcm9kdWN0cyIsImZldGNoIiwicXVlcnkiLCJqc29uIiwicmVzcG9uc2UiLCJpbmNyZW1lbnRSYW5nZSIsImhhbmRsZUFycmF5UmFuZ2UiLCJhcnIiLCJhcnJheSIsImZpbHRlciIsInByb2R1Y3QiLCJkZXZpY2UiLCJhdmFpbGFibGVBbW91bnQiLCJsZW5ndGgiLCJzbGljZSIsImRlY3JlbWVudFJhbmdlIiwidXNlRWZmZWN0IiwibWFwIiwiaW5kZXgiLCJlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBOztBQUdBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBOztBQUFBLGtCQUVFQyxzREFBUSxDQUFDLEVBQUQsQ0FGVjtBQUFBLE1BRXZCQyxRQUZ1QjtBQUFBLE1BRWJDLFdBRmE7O0FBRzlCLE1BQU1DLElBQUksR0FBR0MsK0RBQVcsQ0FBQ0MsaUVBQUQsQ0FBeEI7O0FBSDhCLG1CQUlvQkwsc0RBQVEsQ0FBQyxTQUFELENB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O0FBQUEsdUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLEVBOERHM0IsT0FBTyxpQkFDTixxRUFBQyx3REFBRDtBQUFPLGFBQU8sRUFBRUUsT0FBaEI7QUFBeUIsZ0JBQVUsRUFBRSxJQUFyQztBQUEyQyxhQUFPLEVBQUVGO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvRUQsQ0FuSEQ7O0dBQU1mLGlCO1VBR1NLLHVEOzs7S0FIVEwsaUI7QUFxSFNBLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNjYTYxMzVmNjZjODUyYTk1N2MzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgT2ZmZXJQcm9kdWN0IGZyb20gXCIuLi9PZmZlclByb2R1Y3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0VXNlciB9IGZyb20gXCIuLi8uLi9SZWR1Y2Vycy91c2VyU2xpY2UuanNcIjtcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dSaWdodEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93UmlnaHRcIjtcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dMZWZ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dMZWZ0XCI7XHJcbmltcG9ydCB7XHJcbiAgV3JhcHBlcixcclxuICBIZWFkZXIsXHJcbiAgUGFyYWdyYXBoLFxyXG4gIEl0ZW1zQ29udGFpbmVyLFxyXG4gIEZvb3RlcixcclxuICBGb290ZXJDb250ZW50LFxyXG4gIEZvb3RlclJvd3MsXHJcbiAgU3BhbixcclxufSBmcm9tIFwiLi9wcm9kdWN0c0NvbXBvbmVudC5zdHlsZXMuanNcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLi9BbGVydC9pbmRleC5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3RzQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyKTtcclxuICBjb25zdCBbY2F0ZWdvcnlEaXNwbGF5ZWQsIHNldENhdGVnb3J5RGlzcGxheWVkXSA9IHVzZVN0YXRlKFwiRGVza3RvcFwiKTtcclxuICBjb25zdCBbdmlzaWJsZVRhc2tzLCBzZXRWaXNpYmxlVGFza3NdID0gdXNlU3RhdGUoNSk7XHJcbiAgY29uc3QgW3N0YXJ0UmFuZ2UsIHNldFN0YXJ0UmFuZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2VuZFJhbmdlLCBzZXRFbmRSYW5nZV0gPSB1c2VTdGF0ZSh2aXNpYmxlVGFza3MpO1xyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdmFyaWFudCwgc2V0VmFyaWFudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBsZXQgYXJyYXlMZW5ndGggPSAwO1xyXG5cclxuICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcXVlcnkgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9nZXRQcm9kdWN0c1wiKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnkuanNvbigpO1xyXG4gICAgc2V0UHJvZHVjdHMocmVzcG9uc2UucHJvZHVjdHMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluY3JlbWVudFJhbmdlID0gKCkgPT4ge1xyXG4gICAgaWYgKGVuZFJhbmdlID49IGFycmF5TGVuZ3RoKSByZXR1cm47XHJcbiAgICBzZXRTdGFydFJhbmdlKHN0YXJ0UmFuZ2UgKyB2aXNpYmxlVGFza3MpO1xyXG4gICAgc2V0RW5kUmFuZ2UoZW5kUmFuZ2UgKyB2aXNpYmxlVGFza3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFycmF5UmFuZ2UgPSAoYXJyKSA9PiB7XHJcbiAgICBjb25zdCBhcnJheSA9IGFyci5maWx0ZXIoXHJcbiAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmRldmljZSA9PT0gY2F0ZWdvcnlEaXNwbGF5ZWQgJiYgcHJvZHVjdC5hdmFpbGFibGVBbW91bnQgPiAwXHJcbiAgICApO1xyXG4gICAgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XHJcbiAgICByZXR1cm4gYXJyYXkuc2xpY2Uoc3RhcnRSYW5nZSAtIDEsIGVuZFJhbmdlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWNyZW1lbnRSYW5nZSA9ICgpID0+IHtcclxuICAgIGlmIChzdGFydFJhbmdlIDw9IDEgfHwgc3RhcnRSYW5nZSAtIHZpc2libGVUYXNrcyA8PSAwKSByZXR1cm47XHJcbiAgICBzZXRTdGFydFJhbmdlKHN0YXJ0UmFuZ2UgLSB2aXNpYmxlVGFza3MpO1xyXG4gICAgc2V0RW5kUmFuZ2UoZW5kUmFuZ2UgLSB2aXNpYmxlVGFza3MpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PntcclxuICAgIGZldGNoUHJvZHVjdHMoKVxyXG4gIH0sW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTdGFydFJhbmdlKDEpO1xyXG4gICAgc2V0RW5kUmFuZ2UodmlzaWJsZVRhc2tzKTtcclxuICB9LCBbdmlzaWJsZVRhc2tzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlciBpZD0nZ2FtZXMnPlxyXG4gICAgICA8SGVhZGVyPk91ciBvZmZlcjwvSGVhZGVyPlxyXG4gICAgICA8SXRlbXNDb250YWluZXI+XHJcbiAgICAgICAge2hhbmRsZUFycmF5UmFuZ2UocHJvZHVjdHMpLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxPZmZlclByb2R1Y3RcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cclxuICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgc2V0VmFyaWFudD17c2V0VmFyaWFudH1cclxuICAgICAgICAgICAgc2V0TWVzc2FnZT17c2V0TWVzc2FnZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvSXRlbXNDb250YWluZXI+XHJcbiAgICAgIDxGb290ZXI+XHJcbiAgICAgICAgPEZvb3RlckNvbnRlbnQ+XHJcbiAgICAgICAgICA8Rm9vdGVyUm93cz5cclxuICAgICAgICAgICAgPFBhcmFncmFwaD5Qcm9kdWN0cyBkaXNwbGF5ZWQ6PC9QYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgIDxQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFZpc2libGVUYXNrcyhwYXJzZUludChlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXs1fT41PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxMH0+MTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezE1fT4xNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cclxuICAgICAgICAgICAgPFBhcmFncmFwaD5cclxuICAgICAgICAgICAgICA8U3Bhbj57c3RhcnRSYW5nZX08L1NwYW4+XHJcbiAgICAgICAgICAgICAgPFNwYW4+LTwvU3Bhbj5cclxuICAgICAgICAgICAgICA8U3Bhbj57ZW5kUmFuZ2V9PC9TcGFuPlxyXG4gICAgICAgICAgICAgIDxTcGFuPm9mPC9TcGFuPlxyXG4gICAgICAgICAgICAgIDxTcGFuPiB7YXJyYXlMZW5ndGh9IDwvU3Bhbj5cclxuICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgIDxQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgICAgPFNwYW4+XHJcbiAgICAgICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd0xlZnRJY29uIG9uQ2xpY2s9eygpID0+IGRlY3JlbWVudFJhbmdlKCl9IC8+XHJcbiAgICAgICAgICAgICAgPC9TcGFuPlxyXG4gICAgICAgICAgICAgIDxTcGFuPlxyXG4gICAgICAgICAgICAgICAgPEtleWJvYXJkQXJyb3dSaWdodEljb24gb25DbGljaz17KCkgPT4gaW5jcmVtZW50UmFuZ2UoKX0gLz5cclxuICAgICAgICAgICAgICA8L1NwYW4+XHJcbiAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxyXG4gICAgICAgICAgPC9Gb290ZXJSb3dzPlxyXG4gICAgICAgIDwvRm9vdGVyQ29udGVudD5cclxuICAgICAgICA8Rm9vdGVyQ29udGVudD5cclxuICAgICAgICAgIDxGb290ZXJSb3dzPlxyXG4gICAgICAgICAgICA8UGFyYWdyYXBoPkRldmljZTo8L1BhcmFncmFwaD5cclxuICAgICAgICAgICAgPFBhcmFncmFwaD5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnlEaXNwbGF5ZWQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdEZXNrdG9wJz5EZXNrdG9wPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdQbGF5c3RhdGlvbic+UGxheXN0YXRpb248L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1hib3gnPlhib3g8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XHJcbiAgICAgICAgICA8L0Zvb3RlclJvd3M+XHJcbiAgICAgICAgPC9Gb290ZXJDb250ZW50PlxyXG4gICAgICA8L0Zvb3Rlcj5cclxuICAgICAge21lc3NhZ2UgJiYgKFxyXG4gICAgICAgIDxBbGVydCB2YXJpYW50PXt2YXJpYW50fSBzaG91bGRPcGVuPXt0cnVlfSBtZXNzYWdlPXttZXNzYWdlfSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c0NvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==