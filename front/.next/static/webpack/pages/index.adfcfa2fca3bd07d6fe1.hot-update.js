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
})(["display:flex;position:fixed;align-items:center;justify-content:center;top:0;background-color:#222;font-family:\"Roboto\";z-index:99;width:100%;left:50%;right:50%;height:100vh;transform:translateX(100%);box-shadow:0px 3px 11px -9px rgba(0,0,0,0.75);transition:transform 0.3s 0.1s ease-in-out;@media (min-width:960px){transform:translateX(-50%);height:fit-content;}&.active{transform:translateX(-50%) !important;}"]);
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
})(["margin-left:auto;display:flex;align-items:center;justify-content:space-between;list-style-type:none;flex-wrap:wrap;padding:0;"]);
var NavListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "navigationstyles__NavListItem",
  componentId: "tquz7z-4"
})(["font-weight:500;font-size:1.1em;margin:10px 0;cursor:pointer;@media (min-width:960px){margin:0 20px;}"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL25hdmlnYXRpb24uc3R5bGVzLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJOYXYiLCJuYXYiLCJOYXZMb2dvIiwiTmF2TGlzdCIsInVsIiwiTmF2TGlzdEl0ZW0iLCJsaSIsIk5hdkFjdGlvbnMiLCJDb250YWluZXIiLCJIYW1idXJnZXIiLCJidXR0b24iLCJIYW1idXJnZXJCb3giLCJzcGFuIiwiSGFtYnVyZ2VySW5uZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtYUFBYjtBQXdCQSxJQUFNQyxHQUFHLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsbVNBQVQ7QUE0QkEsSUFBTUMsT0FBTyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFiO0FBTUEsSUFBTUksT0FBTyxHQUFHTCx5REFBTSxDQUFDTSxFQUFWO0FBQUE7QUFBQTtBQUFBLHFJQUFiO0FBVUEsSUFBTUMsV0FBVyxHQUFHUCx5REFBTSxDQUFDUSxFQUFWO0FBQUE7QUFBQTtBQUFBLDZHQUFqQjtBQVVBLElBQU1DLFVBQVUsR0FBR1QseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0Q0FBaEI7QUFLQSxJQUFNUyxTQUFTLEdBQUdWLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUdBQWY7QUFhQSxJQUFNVSxTQUFTLEdBQUdYLHlEQUFNLENBQUNZLE1BQVY7QUFBQTtBQUFBO0FBQUEseU9BQWY7QUFpQkEsSUFBTUMsWUFBWSxHQUFHYix5REFBTSxDQUFDYyxJQUFWO0FBQUE7QUFBQTtBQUFBLHNFQUFsQjtBQU9BLElBQU1DLGNBQWMsR0FBR2YseURBQU0sQ0FBQ2MsSUFBVjtBQUFBO0FBQUE7QUFBQSxpbkJBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFkZmNmYTJmY2EzYmQwN2Q2ZmUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMXB4IC05cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICB9XHJcbiAgJi5hY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICB6LWluZGV4OiA5OTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXYsXHJcbiAgdWwsXHJcbiAgbGkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgZGl2LFxyXG4gICAgdWwsXHJcbiAgICBsaSB7XHJcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZMb2dvID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2TGlzdCA9IHN0eWxlZC51bGBcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZzogMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZMaXN0SXRlbSA9IHN0eWxlZC5saWBcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkFjdGlvbnMgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIYW1idXJnZXIgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIYW1idXJnZXJCb3ggPSBzdHlsZWQuc3BhbmBcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIYW1idXJnZXJJbm5lciA9IHN0eWxlZC5zcGFuYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgMC4ycyBlYXNlLWluLW91dDtcclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICAmOmJlZm9yZSB7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIHRvcDogMTBweDtcclxuICB9XHJcbiAgJi5oYW1idXJnZXItLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=