webpackHotUpdate_N_E("pages/auth/account/cart",{

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



var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\UserCart\\index.js",
    _this = undefined,
    _s = $RefreshSig$();








var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserCart__Wrapper",
  componentId: "sc-128cs23-0"
})(["display:flex;align-items:center;justify-content:center;width:100%;padding-top:15%;@media (min-width:960px){padding-top:5%;}"]);
_c = Wrapper;
var UserBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserCart__UserBox",
  componentId: "sc-128cs23-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:2px 2px 8px 0 rgb(0 0 0 / 60%);background-color:rgba(0,0,0,0.05);padding:10px;@media (min-width:960px){width:30%;}"]);
_c2 = UserBox;
var UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserCart__UserAvatar",
  componentId: "sc-128cs23-2"
})(["width:100px;height:100px;border-radius:50%;img{width:100%;height:auto;border-radius:50%;box-shadow:2px 2px 8px 0 rgb(0 0 0 / 60%);}@media (min-width:960px){width:200px;height:200px;}"]);
_c3 = UserAvatar;
var UserDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserCart__UserDescription",
  componentId: "sc-128cs23-3"
})(["display:flex;justify-content:space-between;align-items:center;padding:10px;font-family:\"Roboto\";width:60%;@media (min-width:960px){padding:20px;}div{display:flex;align-items:center;font-size:1.2em;@media (min-width:960px){font-size:1.4em;}}p{display:flex;justify-content:center;margin:5px;}"]);
_c4 = UserDescription;

var UserCart = function UserCart() {
  _s();

  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_Reducers_userSlice_js__WEBPACK_IMPORTED_MODULE_5__["selectUser"]);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (user.user === null) {
      router.push("/");
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: user.user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserAvatar, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "http://localhost:8080/".concat(user.user.avatar),
            alt: user.user.firstName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserDescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [" ", user.user.firstName, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: user.user.lastName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserDescription, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: user.user.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
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
        lineNumber: 93,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyQ2FydC9pbmRleC5qcyJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiVXNlckJveCIsIlVzZXJBdmF0YXIiLCJVc2VyRGVzY3JpcHRpb24iLCJVc2VyQ2FydCIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInNlbGVjdFVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJwdXNoIiwiYXZhdGFyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1JQUFiO0tBQU1GLE87QUFZTixJQUFNRyxPQUFPLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa05BQWI7TUFBTUMsTztBQWNOLElBQU1DLFVBQVUsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4TEFBaEI7TUFBTUUsVTtBQWlCTixJQUFNQyxlQUFlLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNFNBQXJCO01BQU1HLGU7O0FBNkJOLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDQyxpRUFBRCxDQUF4QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUwsSUFBSSxDQUFDQSxJQUFMLEtBQWMsSUFBbEIsRUFBd0I7QUFDdEJHLFlBQU0sQ0FBQ0csSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFLQSxzQkFDRTtBQUFBLGNBQ0dOLElBQUksQ0FBQ0EsSUFBTCxpQkFDQyxxRUFBQyxPQUFEO0FBQUEsNkJBQ0UscUVBQUMsT0FBRDtBQUFBLGdDQUNFLHFFQUFDLFVBQUQ7QUFBQSxpQ0FDRTtBQUNFLGVBQUcsa0NBQTJCQSxJQUFJLENBQUNBLElBQUwsQ0FBVU8sTUFBckMsQ0FETDtBQUVFLGVBQUcsRUFBRVAsSUFBSSxDQUFDQSxJQUFMLENBQVVRO0FBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0UscUVBQUMsZUFBRDtBQUFBLGlDQUNFO0FBQUEsb0NBQ0U7QUFBQSxxQ0FDRSxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQUEsOEJBQUtSLElBQUksQ0FBQ0EsSUFBTCxDQUFVUSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQUtFO0FBQUEsd0JBQUlSLElBQUksQ0FBQ0EsSUFBTCxDQUFVUztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQWdCRSxxRUFBQyxlQUFEO0FBQUEsaUNBQ0U7QUFBQSxvQ0FDRTtBQUFBLHFDQUNFLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUU7QUFBQSx3QkFBSVQsSUFBSSxDQUFDQSxJQUFMLENBQVVVO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkosbUJBREY7QUFpQ0QsQ0F6Q0Q7O0dBQU1YLFE7VUFDU0UsdUQsRUFDRUcscUQ7OztNQUZYTCxRO0FBMkNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL2FjY291bnQvY2FydC40MzQ0OWFjYzUzN2VlZjVhZDc5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0VXNlciB9IGZyb20gXCIuLi8uLi9SZWR1Y2Vycy91c2VyU2xpY2UuanNcIjtcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZVwiO1xyXG5pbXBvcnQgRW1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRW1haWxcIjtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTUlO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVc2VyQm94ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAwIHJnYigwIDAgMCAvIDYwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVXNlckF2YXRhciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IDAgcmdiKDAgMCAwIC8gNjAlKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVc2VyRGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICB3aWR0aDogNjAlO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVc2VyQ2FydCA9ICgpID0+IHtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlcik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyLnVzZXIgPT09IG51bGwpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3VzZXIudXNlciAmJiAoXHJcbiAgICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgICA8VXNlckJveD5cclxuICAgICAgICAgICAgPFVzZXJBdmF0YXI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDo4MDgwLyR7dXNlci51c2VyLmF2YXRhcn1gfVxyXG4gICAgICAgICAgICAgICAgYWx0PXt1c2VyLnVzZXIuZmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvVXNlckF2YXRhcj5cclxuICAgICAgICAgICAgPFVzZXJEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIDxBY2NvdW50Q2lyY2xlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+IHt1c2VyLnVzZXIuZmlyc3ROYW1lfSA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD57dXNlci51c2VyLmxhc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Vc2VyRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDxVc2VyRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8RW1haWxJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD57dXNlci51c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Vc2VyRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8L1VzZXJCb3g+XHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDYXJ0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9