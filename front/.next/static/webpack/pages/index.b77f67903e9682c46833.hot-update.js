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
          user: user,
          setVariant: setVariant,
          setMessage: setMessage
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
            lineNumber: 83,
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
                lineNumber: 90,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                value: 10,
                children: "10"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                value: 15,
                children: "15"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Paragraph"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: startRange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: "-"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: endRange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: "of"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: [" ", arrayLength, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Paragraph"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_9___default.a, {
                onClick: function onClick() {
                  return decrementRange();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Span"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8___default.a, {
                onClick: function onClick() {
                  return incrementRange();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["FooterContent"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["FooterRows"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_productsComponent_styles_js__WEBPACK_IMPORTED_MODULE_10__["Paragraph"], {
            children: "Device:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
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
                lineNumber: 121,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                value: "Playstation",
                children: "Playstation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                value: "Xbox",
                children: "Xbox"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0NvbXBvbmVudC9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0c0NvbXBvbmVudCIsInVzZVN0YXRlIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInNlbGVjdFVzZXIiLCJjYXRlZ29yeURpc3BsYXllZCIsInNldENhdGVnb3J5RGlzcGxheWVkIiwidmlzaWJsZVRhc2tzIiwic2V0VmlzaWJsZVRhc2tzIiwic3RhcnRSYW5nZSIsInNldFN0YXJ0UmFuZ2UiLCJlbmRSYW5nZSIsInNldEVuZFJhbmdlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ2YXJpYW50Iiwic2V0VmFyaWFudCIsImFycmF5TGVuZ3RoIiwiZmV0Y2hQcm9kdWN0cyIsImZldGNoIiwicXVlcnkiLCJqc29uIiwicmVzcG9uc2UiLCJpbmNyZW1lbnRSYW5nZSIsImhhbmRsZUFycmF5UmFuZ2UiLCJhcnIiLCJhcnJheSIsImZpbHRlciIsInByb2R1Y3QiLCJkZXZpY2UiLCJhdmFpbGFibGVBbW91bnQiLCJsZW5ndGgiLCJzbGljZSIsImRlY3JlbWVudFJhbmdlIiwidXNlRWZmZWN0IiwibWFwIiwiaW5kZXgiLCJlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVdBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBOztBQUFBLGtCQUVFQyxzREFBUSxDQUFDLEVBQUQsQ0FGVjtBQUFBLE1BRXZCQyxRQUZ1QjtBQUFBLE1BRWJDLFdBRmE7O0FBRzlCLE1BQU1DLElBQUksR0FBR0MsK0RBQVcsQ0FBQ0MsaUVBQUQsQ0FBeEI7O0FBSDhCLG1CQUlvQkwsc0RBQVEsQ0FBQyxTQUFELENBSjVCO0FB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dUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUVELENBaEhEOztHQUFNMUMsaUI7VUFHU0ssdUQ7OztLQUhUTCxpQjtBQWtIU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjc3ZjY3OTAzZTk2ODJjNDY4MzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBPZmZlclByb2R1Y3QgZnJvbSBcIi4uL09mZmVyUHJvZHVjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RVc2VyIH0gZnJvbSBcIi4uLy4uL1JlZHVjZXJzL3VzZXJTbGljZS5qc1wiO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1JpZ2h0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dSaWdodFwiO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0xlZnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd0xlZnRcIjtcclxuaW1wb3J0IHtcclxuICBXcmFwcGVyLFxyXG4gIEhlYWRlcixcclxuICBQYXJhZ3JhcGgsXHJcbiAgSXRlbXNDb250YWluZXIsXHJcbiAgRm9vdGVyLFxyXG4gIEZvb3RlckNvbnRlbnQsXHJcbiAgRm9vdGVyUm93cyxcclxuICBTcGFuLFxyXG59IGZyb20gXCIuL3Byb2R1Y3RzQ29tcG9uZW50LnN0eWxlcy5qc1wiO1xyXG5cclxuY29uc3QgUHJvZHVjdHNDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgXHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXIpO1xyXG4gIGNvbnN0IFtjYXRlZ29yeURpc3BsYXllZCwgc2V0Q2F0ZWdvcnlEaXNwbGF5ZWRdID0gdXNlU3RhdGUoXCJEZXNrdG9wXCIpO1xyXG4gIGNvbnN0IFt2aXNpYmxlVGFza3MsIHNldFZpc2libGVUYXNrc10gPSB1c2VTdGF0ZSg1KTtcclxuICBjb25zdCBbc3RhcnRSYW5nZSwgc2V0U3RhcnRSYW5nZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbZW5kUmFuZ2UsIHNldEVuZFJhbmdlXSA9IHVzZVN0YXRlKHZpc2libGVUYXNrcyk7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt2YXJpYW50LCBzZXRWYXJpYW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGxldCBhcnJheUxlbmd0aCA9IDA7XHJcblxyXG4gIGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBxdWVyeSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2dldFByb2R1Y3RzXCIpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeS5qc29uKCk7XHJcbiAgICBzZXRQcm9kdWN0cyhyZXNwb25zZS5wcm9kdWN0cyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5jcmVtZW50UmFuZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAoZW5kUmFuZ2UgPj0gYXJyYXlMZW5ndGgpIHJldHVybjtcclxuICAgIHNldFN0YXJ0UmFuZ2Uoc3RhcnRSYW5nZSArIHZpc2libGVUYXNrcyk7XHJcbiAgICBzZXRFbmRSYW5nZShlbmRSYW5nZSArIHZpc2libGVUYXNrcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQXJyYXlSYW5nZSA9IChhcnIpID0+IHtcclxuICAgIGNvbnN0IGFycmF5ID0gYXJyLmZpbHRlcihcclxuICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuZGV2aWNlID09PSBjYXRlZ29yeURpc3BsYXllZCAmJiBwcm9kdWN0LmF2YWlsYWJsZUFtb3VudCA+IDBcclxuICAgICk7XHJcbiAgICBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcclxuICAgIHJldHVybiBhcnJheS5zbGljZShzdGFydFJhbmdlIC0gMSwgZW5kUmFuZ2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlY3JlbWVudFJhbmdlID0gKCkgPT4ge1xyXG4gICAgaWYgKHN0YXJ0UmFuZ2UgPD0gMSB8fCBzdGFydFJhbmdlIC0gdmlzaWJsZVRhc2tzIDw9IDApIHJldHVybjtcclxuICAgIHNldFN0YXJ0UmFuZ2Uoc3RhcnRSYW5nZSAtIHZpc2libGVUYXNrcyk7XHJcbiAgICBzZXRFbmRSYW5nZShlbmRSYW5nZSAtIHZpc2libGVUYXNrcyk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgZmV0Y2hQcm9kdWN0cygpXHJcbiAgfSxbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFN0YXJ0UmFuZ2UoMSk7XHJcbiAgICBzZXRFbmRSYW5nZSh2aXNpYmxlVGFza3MpO1xyXG4gIH0sIFt2aXNpYmxlVGFza3NdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyIGlkPSdnYW1lcyc+XHJcbiAgICAgIDxIZWFkZXI+T3VyIG9mZmVyPC9IZWFkZXI+XHJcbiAgICAgIDxJdGVtc0NvbnRhaW5lcj5cclxuICAgICAgICB7aGFuZGxlQXJyYXlSYW5nZShwcm9kdWN0cykubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPE9mZmVyUHJvZHVjdFxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxyXG4gICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICBzZXRWYXJpYW50PXtzZXRWYXJpYW50fVxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlPXtzZXRNZXNzYWdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9JdGVtc0NvbnRhaW5lcj5cclxuICAgICAgPEZvb3Rlcj5cclxuICAgICAgICA8Rm9vdGVyQ29udGVudD5cclxuICAgICAgICAgIDxGb290ZXJSb3dzPlxyXG4gICAgICAgICAgICA8UGFyYWdyYXBoPlByb2R1Y3RzIGRpc3BsYXllZDo8L1BhcmFncmFwaD5cclxuICAgICAgICAgICAgPFBhcmFncmFwaD5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZVRhc2tzKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezV9PjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezEwfT4xMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MTV9PjE1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxyXG4gICAgICAgICAgICA8UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgIDxTcGFuPntzdGFydFJhbmdlfTwvU3Bhbj5cclxuICAgICAgICAgICAgICA8U3Bhbj4tPC9TcGFuPlxyXG4gICAgICAgICAgICAgIDxTcGFuPntlbmRSYW5nZX08L1NwYW4+XHJcbiAgICAgICAgICAgICAgPFNwYW4+b2Y8L1NwYW4+XHJcbiAgICAgICAgICAgICAgPFNwYW4+IHthcnJheUxlbmd0aH0gPC9TcGFuPlxyXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cclxuICAgICAgICAgICAgPFBhcmFncmFwaD5cclxuICAgICAgICAgICAgICA8U3Bhbj5cclxuICAgICAgICAgICAgICAgIDxLZXlib2FyZEFycm93TGVmdEljb24gb25DbGljaz17KCkgPT4gZGVjcmVtZW50UmFuZ2UoKX0gLz5cclxuICAgICAgICAgICAgICA8L1NwYW4+XHJcbiAgICAgICAgICAgICAgPFNwYW4+XHJcbiAgICAgICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd1JpZ2h0SWNvbiBvbkNsaWNrPXsoKSA9PiBpbmNyZW1lbnRSYW5nZSgpfSAvPlxyXG4gICAgICAgICAgICAgIDwvU3Bhbj5cclxuICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XHJcbiAgICAgICAgICA8L0Zvb3RlclJvd3M+XHJcbiAgICAgICAgPC9Gb290ZXJDb250ZW50PlxyXG4gICAgICAgIDxGb290ZXJDb250ZW50PlxyXG4gICAgICAgICAgPEZvb3RlclJvd3M+XHJcbiAgICAgICAgICAgIDxQYXJhZ3JhcGg+RGV2aWNlOjwvUGFyYWdyYXBoPlxyXG4gICAgICAgICAgICA8UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeURpc3BsYXllZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0Rlc2t0b3AnPkRlc2t0b3A8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1BsYXlzdGF0aW9uJz5QbGF5c3RhdGlvbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nWGJveCc+WGJveDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cclxuICAgICAgICAgIDwvRm9vdGVyUm93cz5cclxuICAgICAgICA8L0Zvb3RlckNvbnRlbnQ+XHJcbiAgICAgIDwvRm9vdGVyPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c0NvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==