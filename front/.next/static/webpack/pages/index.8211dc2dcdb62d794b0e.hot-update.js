webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navigation/index.js":
/*!****************************************!*\
  !*** ./components/Navigation/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _navigation_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.styles.js */ "./components/Navigation/navigation.styles.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\Navigation\\index.js",
    _this = undefined,
    _s = $RefreshSig$();


 // import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";



var Navigation = function Navigation() {
  _s();

  var _useState = useState(null),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var handleClick = function handleClick() {
    var hamburger = document.querySelector(".hamburger__inner");
    var nav = document.querySelector(".nav");
    hamburger.classList.toggle("hamburger--active");
    nav.classList.toggle("active");
    console.log(hamburger);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_navigation_styles_js__WEBPACK_IMPORTED_MODULE_3__["Hamburger"], {
      className: "hamburger",
      onClick: function onClick() {
        return handleClick();
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_navigation_styles_js__WEBPACK_IMPORTED_MODULE_3__["HamburgerBox"], {
        className: "hamburger__box",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_navigation_styles_js__WEBPACK_IMPORTED_MODULE_3__["HamburgerInner"], {
          className: "hamburger__inner"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_navigation_styles_js__WEBPACK_IMPORTED_MODULE_3__["Wrapper"], {
      className: "nav",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_navigation_styles_js__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_navigation_styles_js__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_navigation_styles_js__WEBPACK_IMPORTED_MODULE_3__["NavLogo"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                  src: "/images/logo2.png",
                  alt: "logo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_navigation_styles_js__WEBPACK_IMPORTED_MODULE_3__["NavList"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_navigation_styles_js__WEBPACK_IMPORTED_MODULE_3__["NavListItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  children: "Home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_navigation_styles_js__WEBPACK_IMPORTED_MODULE_3__["NavListItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: "#",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  children: "Games"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_navigation_styles_js__WEBPACK_IMPORTED_MODULE_3__["NavListItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: "#",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  children: "Team"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_navigation_styles_js__WEBPACK_IMPORTED_MODULE_3__["NavListItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: "#",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  children: "Contact"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_navigation_styles_js__WEBPACK_IMPORTED_MODULE_3__["NavListItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: "/auth/register",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  children: "Join us"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, _this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_navigation_styles_js__WEBPACK_IMPORTED_MODULE_3__["NavListItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: "/auth/register",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  children: "Join us"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_navigation_styles_js__WEBPACK_IMPORTED_MODULE_3__["NavActions"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Navigation, "Iei9RGtZU29Y1RhBe1sbfh/MntA=");

_c = Navigation;
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

var _c;

$RefreshReg$(_c, "Navigation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiaGFuZGxlQ2xpY2siLCJoYW1idXJnZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuYXYiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQWFBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDQ0MsUUFBUSxDQUFDLElBQUQsQ0FEVDtBQUFBO0FBQUEsTUFDaEJDLElBRGdCO0FBQUEsTUFDVkMsT0FEVTs7QUFFdkIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBbEI7QUFDQSxRQUFNQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFaO0FBQ0FGLGFBQVMsQ0FBQ0ksU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIsbUJBQTNCO0FBQ0FGLE9BQUcsQ0FBQ0MsU0FBSixDQUFjQyxNQUFkLENBQXFCLFFBQXJCO0FBRUFDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxTQUFaO0FBQ0QsR0FQRDs7QUFTQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLCtEQUFEO0FBQVcsZUFBUyxFQUFDLFdBQXJCO0FBQWlDLGFBQU8sRUFBRTtBQUFBLGVBQU1ELFdBQVcsRUFBakI7QUFBQSxPQUExQztBQUFBLDZCQUNFLHFFQUFDLGtFQUFEO0FBQWMsaUJBQVMsRUFBQyxnQkFBeEI7QUFBQSwrQkFDRSxxRUFBQyxvRUFBRDtBQUFnQixtQkFBUyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUUscUVBQUMsNkRBQUQ7QUFBUyxlQUFTLEVBQUMsS0FBbkI7QUFBQSw2QkFDRSxxRUFBQywrREFBRDtBQUFBLCtCQUNFLHFFQUFDLHlEQUFEO0FBQUEsa0NBQ0UscUVBQUMsNkRBQUQ7QUFBQSxtQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsR0FBWDtBQUFBLHFDQUNFO0FBQUEsdUNBQ0U7QUFBSyxxQkFBRyxFQUFDLG1CQUFUO0FBQTZCLHFCQUFHLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVNFLHFFQUFDLDZEQUFEO0FBQUEsb0NBQ0UscUVBQUMsaUVBQUQ7QUFBQSxxQ0FDRSxxRUFBQyxnREFBRDtBQUFNLG9CQUFJLEVBQUMsR0FBWDtBQUFBLHVDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFPRSxxRUFBQyxpRUFBRDtBQUFBLHFDQUNFLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksRUFBQyxHQUFYO0FBQUEsdUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQVlFLHFFQUFDLGlFQUFEO0FBQUEscUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxvQkFBSSxFQUFDLEdBQVg7QUFBQSx1Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpGLGVBaUJFLHFFQUFDLGlFQUFEO0FBQUEscUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxvQkFBSSxFQUFDLEdBQVg7QUFBQSx1Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpCRixlQXNCRSxxRUFBQyxpRUFBRDtBQUFBLHFDQUNFLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksRUFBQyxnQkFBWDtBQUFBLHVDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdEJGLEVBMkJHRixJQUFJLGlCQUNILHFFQUFDLGlFQUFEO0FBQUEscUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxvQkFBSSxFQUFDLGdCQUFYO0FBQUEsdUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGLGVBNENFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQSxrQkFERjtBQTJERCxDQXRFRDs7R0FBTUYsVTs7S0FBQUEsVTtBQXdFU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODIxMWRjMmRjZGI2MmQ3OTRiMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBXcmFwcGVyLFxyXG4gIENvbnRhaW5lcixcclxuICBOYXYsXHJcbiAgTmF2TG9nbyxcclxuICBOYXZMaXN0LFxyXG4gIE5hdkxpc3RJdGVtLFxyXG4gIE5hdkFjdGlvbnMsXHJcbiAgSGFtYnVyZ2VyLFxyXG4gIEhhbWJ1cmdlckJveCxcclxuICBIYW1idXJnZXJJbm5lcixcclxufSBmcm9tIFwiLi9uYXZpZ2F0aW9uLnN0eWxlcy5qc1wiO1xyXG4vLyBpbXBvcnQgU2hvcHBpbmdDYXJ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJfX2lubmVyXCIpO1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XHJcbiAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhhbWJ1cmdlci0tYWN0aXZlXCIpO1xyXG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgY29uc29sZS5sb2coaGFtYnVyZ2VyKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhhbWJ1cmdlciBjbGFzc05hbWU9J2hhbWJ1cmdlcicgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soKX0+XHJcbiAgICAgICAgPEhhbWJ1cmdlckJveCBjbGFzc05hbWU9J2hhbWJ1cmdlcl9fYm94Jz5cclxuICAgICAgICAgIDxIYW1idXJnZXJJbm5lciBjbGFzc05hbWU9J2hhbWJ1cmdlcl9faW5uZXInPjwvSGFtYnVyZ2VySW5uZXI+XHJcbiAgICAgICAgPC9IYW1idXJnZXJCb3g+XHJcbiAgICAgIDwvSGFtYnVyZ2VyPlxyXG4gICAgICA8V3JhcHBlciBjbGFzc05hbWU9J25hdic+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgIDxOYXZMb2dvPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvaW1hZ2VzL2xvZ28yLnBuZycgYWx0PSdsb2dvJyAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9OYXZMb2dvPlxyXG5cclxuICAgICAgICAgICAgPE5hdkxpc3Q+XHJcbiAgICAgICAgICAgICAgPE5hdkxpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaXN0SXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPE5hdkxpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nIyc+XHJcbiAgICAgICAgICAgICAgICAgIDxhPkdhbWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nIyc+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlRlYW08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScjJz5cclxuICAgICAgICAgICAgICAgICAgPGE+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L05hdkxpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hdXRoL3JlZ2lzdGVyJz5cclxuICAgICAgICAgICAgICAgICAgPGE+Sm9pbiB1czwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L05hdkxpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIHt1c2VyICYmIChcclxuICAgICAgICAgICAgICAgIDxOYXZMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2F1dGgvcmVnaXN0ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkpvaW4gdXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTmF2TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9OYXZMaXN0PlxyXG4gICAgICAgICAgICA8TmF2QWN0aW9ucz48L05hdkFjdGlvbnM+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9XcmFwcGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=