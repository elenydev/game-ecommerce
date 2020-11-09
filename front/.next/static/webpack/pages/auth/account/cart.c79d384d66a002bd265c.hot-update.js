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
var UserName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserCart__UserName",
  componentId: "sc-128cs23-3"
})(["display:flex;justify-content:center;align-items:center;padding:10px;font-family:\"Roboto\";@media (min-width:960px){padding:20px;}p{display:flex;}"]);
_c4 = UserName;

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
            lineNumber: 80,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserName, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", user.user.firstName, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17
            }, _this), user.user.lastName]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
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
$RefreshReg$(_c4, "UserName");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyQ2FydC9pbmRleC5qcyJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiVXNlckJveCIsIlVzZXJBdmF0YXIiLCJVc2VyTmFtZSIsIlVzZXJDYXJ0IiwidXNlciIsInVzZVNlbGVjdG9yIiwic2VsZWN0VXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInB1c2giLCJhdmF0YXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUlBQWI7S0FBTUYsTztBQVlOLElBQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxrTkFBYjtNQUFNQyxPO0FBY04sSUFBTUMsVUFBVSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhMQUFoQjtNQUFNRSxVO0FBaUJOLElBQU1DLFFBQVEsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwSkFBZDtNQUFNRyxROztBQWVOLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDQyxpRUFBRCxDQUF4QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUwsSUFBSSxDQUFDQSxJQUFMLEtBQWMsSUFBbEIsRUFBd0I7QUFDdEJHLFlBQU0sQ0FBQ0csSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFLQSxzQkFDRTtBQUFBLGNBQ0dOLElBQUksQ0FBQ0EsSUFBTCxpQkFDQyxxRUFBQyxPQUFEO0FBQUEsNkJBQ0UscUVBQUMsT0FBRDtBQUFBLGdDQUNFLHFFQUFDLFVBQUQ7QUFBQSxpQ0FDRTtBQUNFLGVBQUcsa0NBQTJCQSxJQUFJLENBQUNBLElBQUwsQ0FBVU8sTUFBckMsQ0FETDtBQUVFLGVBQUcsRUFBRVAsSUFBSSxDQUFDQSxJQUFMLENBQVVRO0FBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0UscUVBQUMsUUFBRDtBQUFBLGlDQUNFO0FBQUEsb0NBQ0UscUVBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsOEJBQVFSLElBQUksQ0FBQ0EsSUFBTCxDQUFVUSxTQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsRUFHR1IsSUFBSSxDQUFDQSxJQUFMLENBQVVTLFFBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkosbUJBREY7QUF1QkQsQ0EvQkQ7O0dBQU1WLFE7VUFDU0UsdUQsRUFDRUcscUQ7OztNQUZYTCxRO0FBaUNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL2FjY291bnQvY2FydC5jNzlkMzg0ZDY2YTAwMmJkMjY1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0VXNlciB9IGZyb20gXCIuLi8uLi9SZWR1Y2Vycy91c2VyU2xpY2UuanNcIjtcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZVwiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxNSU7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFVzZXJCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IDAgcmdiKDAgMCAwIC8gNjAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVc2VyQXZhdGFyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMCByZ2IoMCAwIDAgLyA2MCUpO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFVzZXJOYW1lID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVXNlckNhcnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlci51c2VyID09PSBudWxsKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt1c2VyLnVzZXIgJiYgKFxyXG4gICAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgICAgPFVzZXJCb3g+XHJcbiAgICAgICAgICAgIDxVc2VyQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8ke3VzZXIudXNlci5hdmF0YXJ9YH1cclxuICAgICAgICAgICAgICAgIGFsdD17dXNlci51c2VyLmZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1VzZXJBdmF0YXI+XHJcbiAgICAgICAgICAgIDxVc2VyTmFtZT5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxBY2NvdW50Q2lyY2xlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+IHt1c2VyLnVzZXIuZmlyc3ROYW1lfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7dXNlci51c2VyLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9Vc2VyTmFtZT5cclxuICAgICAgICAgIDwvVXNlckJveD5cclxuICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNhcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=