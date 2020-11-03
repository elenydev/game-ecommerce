webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navigation/navigation.styles.js":
/*!****************************************************!*\
  !*** ./components/Navigation/navigation.styles.js ***!
  \****************************************************/
/*! exports provided: Wrapper, Nav, NavLogo, NavList, NavListItem, NavActions, Container, Hamburger, HamburgerBox, HamburgerInner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLogo", function() { return NavLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavList", function() { return NavList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavListItem", function() { return NavListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavActions", function() { return NavActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hamburger", function() { return Hamburger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburgerBox", function() { return HamburgerBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburgerInner", function() { return HamburgerInner; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "navigationstyles__Wrapper",
  componentId: "tquz7z-0"
})(["display:flex;position:fixed;align-items:center;justify-content:center;top:0;background-color:black;font-family:\"Roboto\";z-index:99;width:100%;left:50%;right:50%;height:100vh;transform:translateX(100%);box-shadow:0px 3px 11px -9px rgba(0,0,0,0.75);transition:transform 0.3s 0.1s ease-in-out;@media (min-width:960px){transform:translateX(-50%);height:fit-content;}&.active{transform:translateX(-50%) !important;}"]);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "navigationstyles__Nav",
  componentId: "tquz7z-1"
})(["display:flex;width:100%;margin:0 auto;align-items:center;justify-content:space-between;padding:15px 0;z-index:99;height:100%;flex-wrap:wrap;color:white;div,ul,li{width:100%;text-align:center;}@media (min-width:1000px){flex-wrap:nowrap;div,ul,li{width:fit-content;text-align:center;}}"]);
var NavLogo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "navigationstyles__NavLogo",
  componentId: "tquz7z-2"
})(["display:block;background-color:transparent;cursor:pointer;"]);
var NavList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "navigationstyles__NavList",
  componentId: "tquz7z-3"
})(["display:flex;align-items:center;justify-content:space-between;list-style-type:none;flex-wrap:wrap;padding:0;"]);
var NavListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "navigationstyles__NavListItem",
  componentId: "tquz7z-4"
})(["font-weight:500;font-size:1.1em;margin:10px 0;@media (min-width:960px){margin:0 10px;}"]);
var NavActions = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "navigationstyles__NavActions",
  componentId: "tquz7z-5"
})(["display:flex;justify-content:center;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "navigationstyles__Container",
  componentId: "tquz7z-6"
})(["display:flex;width:100%;@media (min-width:960px){width:90%;}@media (min-width:1280px){width:80%;}"]);
var Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "navigationstyles__Hamburger",
  componentId: "tquz7z-7"
})(["position:fixed;top:10px;right:10px;padding:10px;display:inline-block;cursor:pointer;background-color:transparent;z-index:100;border:0;margin:0;transition:transform 0.3s 0.1s ease-in-out;@media (min-width:960px){display:none;}"]);
var HamburgerBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "navigationstyles__HamburgerBox",
  componentId: "tquz7z-8"
})(["width:35px;height:24px;display:inline-block;position:relative;"]);
var HamburgerInner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "navigationstyles__HamburgerInner",
  componentId: "tquz7z-9"
})(["width:100%;height:3px;background-color:black;position:absolute;left:0;top:50%;transform:translateY(-50%);transition:background-color 0.1s 0.2s ease-in-out;&:before{content:\"\";left:0;transition:transform 0.2s 0.2s ease-in-out;width:100%;height:3px;background-color:black;position:absolute;}&:after{content:\"\";left:0;transition:transform 0.2s 0.2s ease-in-out;width:100%;height:3px;background-color:black;position:absolute;}&:before{top:-10px;}&:after{top:10px;}&.hamburger--active{background-color:transparent;&:after{transform:translateY(-10px) rotate(-45deg);}&:before{transform:translateY(10px) rotate(45deg);}}"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL25hdmlnYXRpb24uc3R5bGVzLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJOYXYiLCJuYXYiLCJOYXZMb2dvIiwiTmF2TGlzdCIsInVsIiwiTmF2TGlzdEl0ZW0iLCJsaSIsIk5hdkFjdGlvbnMiLCJDb250YWluZXIiLCJIYW1idXJnZXIiLCJidXR0b24iLCJIYW1idXJnZXJCb3giLCJzcGFuIiwiSGFtYnVyZ2VySW5uZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvYUFBYjtBQXdCQSxJQUFNQyxHQUFHLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsbVNBQVQ7QUE0QkEsSUFBTUMsT0FBTyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFiO0FBS0EsSUFBTUksT0FBTyxHQUFHTCx5REFBTSxDQUFDTSxFQUFWO0FBQUE7QUFBQTtBQUFBLG9IQUFiO0FBU0EsSUFBTUMsV0FBVyxHQUFHUCx5REFBTSxDQUFDUSxFQUFWO0FBQUE7QUFBQTtBQUFBLDhGQUFqQjtBQVNBLElBQU1DLFVBQVUsR0FBR1QseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0Q0FBaEI7QUFLQSxJQUFNUyxTQUFTLEdBQUdWLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUdBQWY7QUFhQSxJQUFNVSxTQUFTLEdBQUdYLHlEQUFNLENBQUNZLE1BQVY7QUFBQTtBQUFBO0FBQUEseU9BQWY7QUFpQkEsSUFBTUMsWUFBWSxHQUFHYix5REFBTSxDQUFDYyxJQUFWO0FBQUE7QUFBQTtBQUFBLHNFQUFsQjtBQU9BLElBQU1DLGNBQWMsR0FBR2YseURBQU0sQ0FBQ2MsSUFBVjtBQUFBO0FBQUE7QUFBQSxpbkJBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc5ZDQ0ZWE1MDlkMzQ0NDhmMjk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICByaWdodDogNTAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTFweCAtOXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgMC4xcyBlYXNlLWluLW91dDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgfVxyXG4gICYuYWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IE5hdiA9IHN0eWxlZC5uYXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGl2LFxyXG4gIHVsLFxyXG4gIGxpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGRpdixcclxuICAgIHVsLFxyXG4gICAgbGkge1xyXG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2TG9nbyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgTmF2TGlzdCA9IHN0eWxlZC51bGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZzogMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZMaXN0SXRlbSA9IHN0eWxlZC5saWBcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2QWN0aW9ucyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhhbWJ1cmdlciA9IHN0eWxlZC5idXR0b25gXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgMC4xcyBlYXNlLWluLW91dDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhhbWJ1cmdlckJveCA9IHN0eWxlZC5zcGFuYFxyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhhbWJ1cmdlcklubmVyID0gc3R5bGVkLnNwYW5gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcyAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gICY6YmVmb3JlIHtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gIH1cclxuICAmLmhhbWJ1cmdlci0tYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KSByb3RhdGUoNDVkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==