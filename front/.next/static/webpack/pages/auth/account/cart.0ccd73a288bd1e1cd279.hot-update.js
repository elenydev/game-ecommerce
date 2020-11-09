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
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:2px 2px 8px 0 rgb(0 0 0 / 60%);background-color:rgba(0,0,0,0.1);padding:10px;@media (min-width:960px){width:30%;}"]);
_c2 = UserBox;
var UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserCart__UserAvatar",
  componentId: "sc-128cs23-2"
})(["width:100px;height:100px;border-radius:50%;img{width:100%;height:auto;border-radius:50%;}@media (min-width:960px){max-width:250px;max-height:250px;}"]);
_c3 = UserAvatar;

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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserAvatar, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "http://localhost:8080/".concat(user.user.avatar),
            alt: user.user.firstName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_s(UserCart, "QdCw72MRKOVKG0pFpSFYI/hF01A=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c4 = UserCart;
/* harmony default export */ __webpack_exports__["default"] = (UserCart);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "UserBox");
$RefreshReg$(_c3, "UserAvatar");
$RefreshReg$(_c4, "UserCart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyQ2FydC9pbmRleC5qcyJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiVXNlckJveCIsIlVzZXJBdmF0YXIiLCJVc2VyQ2FydCIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInNlbGVjdFVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJwdXNoIiwiYXZhdGFyIiwiZmlyc3ROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1JQUFiO0tBQU1GLE87QUFZTixJQUFNRyxPQUFPLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaU5BQWI7TUFBTUMsTztBQWNOLElBQU1DLFVBQVUsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0SkFBaEI7TUFBTUUsVTs7QUFnQk4sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxJQUFJLEdBQUdDLCtEQUFXLENBQUNDLGlFQUFELENBQXhCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTCxJQUFJLENBQUNBLElBQUwsS0FBYyxJQUFsQixFQUF3QjtBQUN0QkcsWUFBTSxDQUFDRyxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0YsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQUtBLHNCQUNFO0FBQUEsY0FDR04sSUFBSSxDQUFDQSxJQUFMLGlCQUNDLHFFQUFDLE9BQUQ7QUFBQSw2QkFDRSxxRUFBQyxPQUFEO0FBQUEsK0JBQ0UscUVBQUMsVUFBRDtBQUFBLGlDQUNFO0FBQ0UsZUFBRyxrQ0FBMkJBLElBQUksQ0FBQ0EsSUFBTCxDQUFVTyxNQUFyQyxDQURMO0FBRUUsZUFBRyxFQUFFUCxJQUFJLENBQUNBLElBQUwsQ0FBVVE7QUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLG1CQURGO0FBZ0JELENBeEJEOztHQUFNVCxRO1VBQ1NFLHVELEVBQ0VHLHFEOzs7TUFGWEwsUTtBQTBCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9hY2NvdW50L2NhcnQuMGNjZDczYTI4OGJkMWUxY2QyNzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdFVzZXIgfSBmcm9tIFwiLi4vLi4vUmVkdWNlcnMvdXNlclNsaWNlLmpzXCI7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDE1JTtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVXNlckJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMCByZ2IoMCAwIDAgLyA2MCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVXNlckF2YXRhciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFVzZXJDYXJ0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIudXNlciA9PT0gbnVsbCkge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7dXNlci51c2VyICYmIChcclxuICAgICAgICA8V3JhcHBlcj5cclxuICAgICAgICAgIDxVc2VyQm94PlxyXG4gICAgICAgICAgICA8VXNlckF2YXRhcj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjgwODAvJHt1c2VyLnVzZXIuYXZhdGFyfWB9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e3VzZXIudXNlci5maXJzdE5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Vc2VyQXZhdGFyPlxyXG4gICAgICAgICAgPC9Vc2VyQm94PlxyXG4gICAgICAgIDwvV3JhcHBlcj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ2FydDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==