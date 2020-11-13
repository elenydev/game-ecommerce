webpackHotUpdate_N_E("pages/auth/account/emails",{

/***/ "./components/UserCart/index.js":
/*!**************************************!*\
  !*** ./components/UserCart/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Reducers_userSlice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Reducers/userSlice.js */ "./Reducers/userSlice.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ProductsCart_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ProductsCart/index.js */ "./components/ProductsCart/index.js");
/* harmony import */ var _Sidebar_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Sidebar/index.js */ "./components/Sidebar/index.js");
/* harmony import */ var _EmailsCart_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../EmailsCart/index.js */ "./components/EmailsCart/index.js");



var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\UserCart\\index.js",
    _this = undefined,
    _s = $RefreshSig$();











var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserCart__Wrapper",
  componentId: "sc-128cs23-0"
})(["display:flex;align-items:center;justify-content:flex-start;flex-direction:column;padding:5%;width:90%;background-color:rgba(0,0,0,0.05);box-shadow:2px 2px 8px 0 rgb(255 90 90 /60%);padding-top:15%;@media (min-width:960px){flex-direction:row;padding-top:5%;width:98%;}& > .MuiButton-containedSecondary{margin:15px;background-color:#b73d1cbf;&:hover{background-color:#ff3600bf;}}"]);
_c = Wrapper;
var UserBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserCart__UserBox",
  componentId: "sc-128cs23-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px;height:100%;margin-bottom:40px;@media (min-width:960px){width:30%;margin-right:50px;margin-bottom:0px;}"]);
_c2 = UserBox;
var UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserCart__UserAvatar",
  componentId: "sc-128cs23-2"
})(["width:100px;height:100px;border-radius:50%;img{width:100%;height:auto;border-radius:50%;box-shadow:0px 0px 17px 7px rgb(255 90 90 /60%);}@media (min-width:960px){width:200px;height:200px;}"]);
_c3 = UserAvatar;
var UserDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserCart__UserDescription",
  componentId: "sc-128cs23-3"
})(["display:flex;justify-content:space-between;align-items:center;padding:10px;font-family:\"Roboto\";width:100%;color:#5bb2fc;@media (min-width:960px){padding:20px;}div{display:flex;align-items:center;font-size:1.2em;justify-content:center;width:100%;@media (min-width:960px){font-size:1.4em;}}p{display:flex;justify-content:center;margin:5px;}"]);
_c4 = UserDescription;

var UserCart = function UserCart() {
  _s();

  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_Reducers_userSlice_js__WEBPACK_IMPORTED_MODULE_5__["selectUser"]);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var isMounted = true;

    if (user.user === null) {
      router.push("/");
    }

    return function () {
      isMounted = false;
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: user.user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserAvatar, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "http://localhost:8080/".concat(user.user.avatar),
            alt: user.user.firstName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserDescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [" ", user.user.firstName, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: user.user.lastName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserDescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: user.user.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 13
        }, _this), user.user.email === "admin@admin.com" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Sidebar_index_js__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 55
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 11
      }, _this), router.pathName === "/auth/account/cart" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductsCart_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 56
      }, _this), router.pathName === "/auth/account/emails" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_EmailsCart_index_js__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 58
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_s(UserCart, "QdCw72MRKOVKG0pFpSFYI/hF01A=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c5 = UserCart;
/* harmony default export */ __webpack_exports__["default"] = (UserCart);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "UserBox");
$RefreshReg$(_c3, "UserAvatar");
$RefreshReg$(_c4, "UserDescription");
$RefreshReg$(_c5, "UserCart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyQ2FydC9pbmRleC5qcyJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiVXNlckJveCIsIlVzZXJBdmF0YXIiLCJVc2VyRGVzY3JpcHRpb24iLCJVc2VyQ2FydCIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInNlbGVjdFVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJpc01vdW50ZWQiLCJwdXNoIiwiYXZhdGFyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBhdGhOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaVlBQWI7S0FBTUYsTztBQTBCTixJQUFNRyxPQUFPLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseU1BQWI7TUFBTUMsTztBQWdCTixJQUFNQyxVQUFVLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb01BQWhCO01BQU1FLFU7QUFpQk4sSUFBTUMsZUFBZSxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZWQUFyQjtNQUFNRyxlOztBQWtDTixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCLE1BQU1DLElBQUksR0FBR0MsK0RBQVcsQ0FBQ0MsaUVBQUQsQ0FBeEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLFNBQVMsR0FBRyxJQUFoQjs7QUFDQSxRQUFJTixJQUFJLENBQUNBLElBQUwsS0FBYyxJQUFsQixFQUF3QjtBQUN0QkcsWUFBTSxDQUFDSSxJQUFQLENBQVksR0FBWjtBQUNEOztBQUNELFdBQU8sWUFBTTtBQUNYRCxlQUFTLEdBQUcsS0FBWjtBQUNELEtBRkQ7QUFHRCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsc0JBQ0U7QUFBQSxjQUNHTixJQUFJLENBQUNBLElBQUwsaUJBQ0MscUVBQUMsT0FBRDtBQUFBLDhCQUNFLHFFQUFDLE9BQUQ7QUFBQSxnQ0FDRSxxRUFBQyxVQUFEO0FBQUEsaUNBQ0U7QUFDRSxlQUFHLGtDQUEyQkEsSUFBSSxDQUFDQSxJQUFMLENBQVVRLE1BQXJDLENBREw7QUFFRSxlQUFHLEVBQUVSLElBQUksQ0FBQ0EsSUFBTCxDQUFVUztBQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FLHFFQUFDLGVBQUQ7QUFBQSxpQ0FDRTtBQUFBLG9DQUNFO0FBQUEscUNBQ0UscUVBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFBLDhCQUFLVCxJQUFJLENBQUNBLElBQUwsQ0FBVVMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFLRTtBQUFBLHdCQUFJVCxJQUFJLENBQUNBLElBQUwsQ0FBVVU7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFnQkUscUVBQUMsZUFBRDtBQUFBLGlDQUNFO0FBQUEsb0NBQ0U7QUFBQSxxQ0FDRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQUEsd0JBQUlWLElBQUksQ0FBQ0EsSUFBTCxDQUFVVztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkYsRUF3QkdYLElBQUksQ0FBQ0EsSUFBTCxDQUFVVyxLQUFWLEtBQW9CLGlCQUFwQixpQkFBeUMscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4QjVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBMkJHUixNQUFNLENBQUNTLFFBQVAsS0FBb0Isb0JBQXBCLGlCQUE0QyxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0IvQyxFQTRCR1QsTUFBTSxDQUFDUyxRQUFQLEtBQW9CLHNCQUFwQixpQkFBOEMscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVCakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkosbUJBREY7QUFvQ0QsQ0FsREQ7O0dBQU1iLFE7VUFDU0UsdUQsRUFDRUcscUQ7OztNQUZYTCxRO0FBb0RTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL2FjY291bnQvZW1haWxzLjIwZTJiZTFlNzM3YjVjZTI1YzMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RVc2VyIH0gZnJvbSBcIi4uLy4uL1JlZHVjZXJzL3VzZXJTbGljZS5qc1wiO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlXCI7XHJcbmltcG9ydCBFbWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FbWFpbFwiO1xyXG5pbXBvcnQgUHJvZHVjdHNDYXJ0IGZyb20gXCIuLi9Qcm9kdWN0c0NhcnQvaW5kZXguanNcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL1NpZGViYXIvaW5kZXguanNcIjtcclxuaW1wb3J0IEVtYWlsc0NhcnQgZnJvbSBcIi4uL0VtYWlsc0NhcnQvaW5kZXguanNcIjtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiA1JTtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMCByZ2IoMjU1IDkwIDkwIC82MCUpO1xyXG4gIHBhZGRpbmctdG9wOiAxNSU7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICB9XHJcblxyXG4gICYgPiAuTXVpQnV0dG9uLWNvbnRhaW5lZFNlY29uZGFyeSB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjczZDFjYmY7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM2MDBiZjtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVc2VyQm94ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVXNlckF2YXRhciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTdweCA3cHggcmdiKDI1NSA5MCA5MCAvNjAlKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVc2VyRGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogIzViYjJmYztcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgVXNlckNhcnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZTtcclxuICAgIGlmICh1c2VyLnVzZXIgPT09IG51bGwpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt1c2VyLnVzZXIgJiYgKFxyXG4gICAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgICAgPFVzZXJCb3g+XHJcbiAgICAgICAgICAgIDxVc2VyQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8ke3VzZXIudXNlci5hdmF0YXJ9YH1cclxuICAgICAgICAgICAgICAgIGFsdD17dXNlci51c2VyLmZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1VzZXJBdmF0YXI+XHJcbiAgICAgICAgICAgIDxVc2VyRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8QWNjb3VudENpcmNsZUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiB7dXNlci51c2VyLmZpcnN0TmFtZX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e3VzZXIudXNlci5sYXN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVXNlckRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8VXNlckRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgPEVtYWlsSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e3VzZXIudXNlci5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVXNlckRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICB7dXNlci51c2VyLmVtYWlsID09PSBcImFkbWluQGFkbWluLmNvbVwiICYmIDxTaWRlYmFyIC8+fVxyXG4gICAgICAgICAgPC9Vc2VyQm94PlxyXG4gICAgICAgICAge3JvdXRlci5wYXRoTmFtZSA9PT0gXCIvYXV0aC9hY2NvdW50L2NhcnRcIiAmJiA8UHJvZHVjdHNDYXJ0IC8+fVxyXG4gICAgICAgICAge3JvdXRlci5wYXRoTmFtZSA9PT0gXCIvYXV0aC9hY2NvdW50L2VtYWlsc1wiICYmIDxFbWFpbHNDYXJ0IC8+fVxyXG4gICAgICAgIDwvV3JhcHBlcj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ2FydDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==