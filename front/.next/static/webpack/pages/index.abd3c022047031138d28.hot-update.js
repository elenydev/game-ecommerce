webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navigation/navigation.styles.js":
/*!****************************************************!*\
  !*** ./components/Navigation/navigation.styles.js ***!
  \****************************************************/
/*! exports provided: Wrapper, Nav, NavLogo, NavList, NavListItem, NavActions, PrimaryBtn, SecondaryBtn, Hamburger, HamburgerBox, HamburgerInner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLogo", function() { return NavLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavList", function() { return NavList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavListItem", function() { return NavListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavActions", function() { return NavActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryBtn", function() { return PrimaryBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryBtn", function() { return SecondaryBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hamburger", function() { return Hamburger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburgerBox", function() { return HamburgerBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburgerInner", function() { return HamburgerInner; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "navigationstyles__Wrapper",
  componentId: "tquz7z-0"
})(["display:flex;position:fixed;align-items:center;top:0;background-color:white;z-index:99;width:100%;left:50%;right:50%;height:100vh;transform:translateX(100%);box-shadow:0px 3px 11px -9px rgba(0,0,0,0.75);transition:transform 0.3s 0.1s ease-in-out;@media (min-width:960px){transform:translateX(-50%);height:fit-content;}&.active{transform:translateX(-50%) !important;}"]);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "navigationstyles__Nav",
  componentId: "tquz7z-1"
})(["display:flex;width:100%;margin:0 auto;align-items:center;justify-content:space-between;padding:15px 0;z-index:99;height:100%;flex-wrap:wrap;div,ul,li{width:100%;text-align:center;}@media (min-width:1000px){flex-wrap:nowrap;div,ul,li{width:fit-content;text-align:center;}}"]);
var NavLogo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "navigationstyles__NavLogo",
  componentId: "tquz7z-2"
})(["display:block;"]);
var NavList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "navigationstyles__NavList",
  componentId: "tquz7z-3"
})(["display:flex;align-items:center;justify-content:space-between;list-style-type:none;flex-wrap:wrap;"]);
var NavListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "navigationstyles__NavListItem",
  componentId: "tquz7z-4"
})(["font-weight:600;margin:10px 0;", "{margin:0 10px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.mq.md;
});
var NavActions = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "navigationstyles__NavActions",
  componentId: "tquz7z-5"
})(["display:flex;justify-content:center;"]);
var PrimaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "navigationstyles__PrimaryBtn",
  componentId: "tquz7z-6"
})(["background-color:", ";color:", ";border:none;border-radius:7px;padding:10px 20px;margin-left:5px;cursor:pointer;outline:none;border:1px solid transparent;font-size:", ";transition:0.3s all linear;&:active,&:hover{border:1px solid #2575e6;color:#2575e6;background-color:#fff;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.royalBlue;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.white;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.font.size.xxs;
});
var SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "navigationstyles__SecondaryBtn",
  componentId: "tquz7z-7"
})(["background-color:", ";color:", ";border:none;border:1px solid transparent;border-radius:7px;padding:10px 20px;margin-right:5px;cursor:pointer;outline:none;font-size:", ";transition:0.3s all linear;&:hover,&:active{border:1px solid ", ";}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.white;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.black;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.font.size.xxs;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.black;
});
var Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "navigationstyles__Hamburger",
  componentId: "tquz7z-8"
})(["position:fixed;top:10px;right:10px;padding:10px;display:inline-block;cursor:pointer;background-color:transparent;z-index:100;border:0;margin:0;transition:transform 0.3s 0.1s ease-in-out;", "{display:none;}"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.mq.md;
});
var HamburgerBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "navigationstyles__HamburgerBox",
  componentId: "tquz7z-9"
})(["width:35px;height:24px;display:inline-block;position:relative;"]);
var HamburgerInner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "navigationstyles__HamburgerInner",
  componentId: "tquz7z-10"
})(["width:100%;height:3px;background-color:", ";position:absolute;left:0;top:50%;transform:translateY(-50%);transition:background-color 0.1s 0.2s ease-in-out;&:before{content:\"\";left:0;transition:transform 0.2s 0.2s ease-in-out;width:100%;height:3px;background-color:", ";position:absolute;}&:after{content:\"\";left:0;transition:transform 0.2s 0.2s ease-in-out;width:100%;height:3px;background-color:", ";position:absolute;}&:before{top:-10px;}&:after{top:10px;}&.hamburger--active{background-color:transparent;&:after{transform:translateY(-10px) rotate(-45deg);}&:before{transform:translateY(10px) rotate(45deg);}}"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.black;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.black;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.black;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL25hdmlnYXRpb24uc3R5bGVzLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJOYXYiLCJuYXYiLCJOYXZMb2dvIiwiTmF2TGlzdCIsInVsIiwiTmF2TGlzdEl0ZW0iLCJsaSIsInRoZW1lIiwibXEiLCJtZCIsIk5hdkFjdGlvbnMiLCJQcmltYXJ5QnRuIiwiYnV0dG9uIiwiY29sb3JzIiwicm95YWxCbHVlIiwid2hpdGUiLCJmb250Iiwic2l6ZSIsInh4cyIsIlNlY29uZGFyeUJ0biIsImJsYWNrIiwiSGFtYnVyZ2VyIiwiSGFtYnVyZ2VyQm94Iiwic3BhbiIsIkhhbWJ1cmdlcklubmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzWEFBYjtBQXNCQSxJQUFNQyxHQUFHLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsdVJBQVQ7QUEyQkEsSUFBTUMsT0FBTyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNCQUFiO0FBR0EsSUFBTUksT0FBTyxHQUFHTCx5REFBTSxDQUFDTSxFQUFWO0FBQUE7QUFBQTtBQUFBLDBHQUFiO0FBUUEsSUFBTUMsV0FBVyxHQUFHUCx5REFBTSxDQUFDUSxFQUFWO0FBQUE7QUFBQTtBQUFBLDJEQUdwQjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsRUFBTixDQUFTQyxFQUF4QjtBQUFBLENBSG9CLENBQWpCO0FBUUEsSUFBTUMsVUFBVSxHQUFHWix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDRDQUFoQjtBQUtBLElBQU1ZLFVBQVUsR0FBR2IseURBQU0sQ0FBQ2MsTUFBVjtBQUFBO0FBQUE7QUFBQSw0UkFDRDtBQUFBLE1BQUdMLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxTQUE1QjtBQUFBLENBREMsRUFFWjtBQUFBLE1BQUdQLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ00sTUFBTixDQUFhRSxLQUE1QjtBQUFBLENBRlksRUFVUjtBQUFBLE1BQUdSLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1MsSUFBTixDQUFXQyxJQUFYLENBQWdCQyxHQUEvQjtBQUFBLENBVlEsQ0FBaEI7QUFvQkEsSUFBTUMsWUFBWSxHQUFHckIseURBQU0sQ0FBQ2MsTUFBVjtBQUFBO0FBQUE7QUFBQSxzUEFDSDtBQUFBLE1BQUdMLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ00sTUFBTixDQUFhRSxLQUE1QjtBQUFBLENBREcsRUFFZDtBQUFBLE1BQUdSLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ00sTUFBTixDQUFhTyxLQUE1QjtBQUFBLENBRmMsRUFVVjtBQUFBLE1BQUdiLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1MsSUFBTixDQUFXQyxJQUFYLENBQWdCQyxHQUEvQjtBQUFBLENBVlUsRUFjRDtBQUFBLE1BQUdYLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ00sTUFBTixDQUFhTyxLQUE1QjtBQUFBLENBZEMsQ0FBbEI7QUFrQkEsSUFBTUMsU0FBUyxHQUFHdkIseURBQU0sQ0FBQ2MsTUFBVjtBQUFBO0FBQUE7QUFBQSxzTkFZbEI7QUFBQSxNQUFHTCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLEVBQU4sQ0FBU0MsRUFBeEI7QUFBQSxDQVprQixDQUFmO0FBaUJBLElBQU1hLFlBQVksR0FBR3hCLHlEQUFNLENBQUN5QixJQUFWO0FBQUE7QUFBQTtBQUFBLHNFQUFsQjtBQU9BLElBQU1DLGNBQWMsR0FBRzFCLHlEQUFNLENBQUN5QixJQUFWO0FBQUE7QUFBQTtBQUFBLCttQkFHTDtBQUFBLE1BQUdoQixLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNNLE1BQU4sQ0FBYU8sS0FBNUI7QUFBQSxDQUhLLEVBZUg7QUFBQSxNQUFHYixLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNNLE1BQU4sQ0FBYU8sS0FBNUI7QUFBQSxDQWZHLEVBd0JIO0FBQUEsTUFBR2IsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTSxNQUFOLENBQWFPLEtBQTVCO0FBQUEsQ0F4QkcsQ0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWJkM2MwMjIwNDcwMzExMzhkMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMXB4IC05cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICB9XHJcbiAgJi5hY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICB6LWluZGV4OiA5OTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGRpdixcclxuICB1bCxcclxuICBsaSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBkaXYsXHJcbiAgICB1bCxcclxuICAgIGxpIHtcclxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkxvZ28gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgTmF2TGlzdCA9IHN0eWxlZC51bGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2TGlzdEl0ZW0gPSBzdHlsZWQubGlgXHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1kfSB7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2QWN0aW9ucyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmltYXJ5QnRuID0gc3R5bGVkLmJ1dHRvbmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5yb3lhbEJsdWV9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udC5zaXplLnh4c307XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgbGluZWFyO1xyXG4gICY6YWN0aXZlLFxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI1NzVlNjtcclxuICAgIGNvbG9yOiAjMjU3NWU2O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5QnRuID0gc3R5bGVkLmJ1dHRvbmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJsYWNrfTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udC5zaXplLnh4c307XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgbGluZWFyO1xyXG4gICY6aG92ZXIsXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmxhY2t9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIYW1idXJnZXIgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tcS5tZH0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGFtYnVyZ2VyQm94ID0gc3R5bGVkLnNwYW5gXHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGFtYnVyZ2VySW5uZXIgPSBzdHlsZWQuc3BhbmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcyAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJsYWNrfTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgdG9wOiAtMTBweDtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgfVxyXG4gICYuaGFtYnVyZ2VyLS1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIH1cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9