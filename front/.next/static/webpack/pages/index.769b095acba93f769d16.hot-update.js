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
})(["display:flex;position:fixed;align-items:center;top:0;background-color:white;z-index:99;width:100%;left:50%;right:50%;height:100vh;transform:translateX(100%);box-shadow:0px 3px 11px -9px rgba(0,0,0,0.75);transition:transform 0.3s 0.1s ease-in-out;", "{transform:translateX(-50%);height:fit-content;}&.active{transform:translateX(-50%) !important;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.mq.md;
});
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
})(["font-weight:", ";margin:10px 0;", "{margin:0 10px;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.font.weight.medium;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.mq.md;
});
var NavActions = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "navigationstyles__NavActions",
  componentId: "tquz7z-5"
})(["display:flex;justify-content:center;"]);
var PrimaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "navigationstyles__PrimaryBtn",
  componentId: "tquz7z-6"
})(["background-color:", ";color:", ";border:none;border-radius:7px;padding:10px 20px;margin-left:5px;cursor:pointer;outline:none;border:1px solid transparent;font-size:", ";transition:0.3s all linear;&:active,&:hover{border:1px solid #2575e6;color:#2575e6;background-color:#fff;}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.royalBlue;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.white;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.font.size.xxs;
});
var SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "navigationstyles__SecondaryBtn",
  componentId: "tquz7z-7"
})(["background-color:", ";color:", ";border:none;border:1px solid transparent;border-radius:7px;padding:10px 20px;margin-right:5px;cursor:pointer;outline:none;font-size:", ";transition:0.3s all linear;&:hover,&:active{border:1px solid ", ";}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.white;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.black;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.font.size.xxs;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.black;
});
var Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "navigationstyles__Hamburger",
  componentId: "tquz7z-8"
})(["position:fixed;top:10px;right:10px;padding:10px;display:inline-block;cursor:pointer;background-color:transparent;z-index:100;border:0;margin:0;transition:transform 0.3s 0.1s ease-in-out;", "{display:none;}"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.mq.md;
});
var HamburgerBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "navigationstyles__HamburgerBox",
  componentId: "tquz7z-9"
})(["width:35px;height:24px;display:inline-block;position:relative;"]);
var HamburgerInner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "navigationstyles__HamburgerInner",
  componentId: "tquz7z-10"
})(["width:100%;height:3px;background-color:", ";position:absolute;left:0;top:50%;transform:translateY(-50%);transition:background-color 0.1s 0.2s ease-in-out;&:before{content:\"\";left:0;transition:transform 0.2s 0.2s ease-in-out;width:100%;height:3px;background-color:", ";position:absolute;}&:after{content:\"\";left:0;transition:transform 0.2s 0.2s ease-in-out;width:100%;height:3px;background-color:", ";position:absolute;}&:before{top:-10px;}&:after{top:10px;}&.hamburger--active{background-color:transparent;&:after{transform:translateY(-10px) rotate(-45deg);}&:before{transform:translateY(10px) rotate(45deg);}}"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.black;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.black;
}, function (_ref14) {
  var theme = _ref14.theme;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL25hdmlnYXRpb24uc3R5bGVzLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsIm1xIiwibWQiLCJOYXYiLCJuYXYiLCJOYXZMb2dvIiwiTmF2TGlzdCIsInVsIiwiTmF2TGlzdEl0ZW0iLCJsaSIsImZvbnQiLCJ3ZWlnaHQiLCJtZWRpdW0iLCJOYXZBY3Rpb25zIiwiUHJpbWFyeUJ0biIsImJ1dHRvbiIsImNvbG9ycyIsInJveWFsQmx1ZSIsIndoaXRlIiwic2l6ZSIsInh4cyIsIlNlY29uZGFyeUJ0biIsImJsYWNrIiwiSGFtYnVyZ2VyIiwiSGFtYnVyZ2VyQm94Iiwic3BhbiIsIkhhbWJ1cmdlcklubmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtV0FjaEI7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLEVBQU4sQ0FBU0MsRUFBeEI7QUFBQSxDQWRnQixDQUFiO0FBc0JBLElBQU1DLEdBQUcsR0FBR0wseURBQU0sQ0FBQ00sR0FBVjtBQUFBO0FBQUE7QUFBQSx1UkFBVDtBQTJCQSxJQUFNQyxPQUFPLEdBQUdQLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0JBQWI7QUFHQSxJQUFNTyxPQUFPLEdBQUdSLHlEQUFNLENBQUNTLEVBQVY7QUFBQTtBQUFBO0FBQUEsMEdBQWI7QUFRQSxJQUFNQyxXQUFXLEdBQUdWLHlEQUFNLENBQUNXLEVBQVY7QUFBQTtBQUFBO0FBQUEsNERBQ1A7QUFBQSxNQUFHVCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNVLElBQU4sQ0FBV0MsTUFBWCxDQUFrQkMsTUFBakM7QUFBQSxDQURPLEVBR3BCO0FBQUEsTUFBR1osS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxFQUFOLENBQVNDLEVBQXhCO0FBQUEsQ0FIb0IsQ0FBakI7QUFRQSxJQUFNVyxVQUFVLEdBQUdmLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNENBQWhCO0FBS0EsSUFBTWUsVUFBVSxHQUFHaEIseURBQU0sQ0FBQ2lCLE1BQVY7QUFBQTtBQUFBO0FBQUEsNFJBQ0Q7QUFBQSxNQUFHZixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNnQixNQUFOLENBQWFDLFNBQTVCO0FBQUEsQ0FEQyxFQUVaO0FBQUEsTUFBR2pCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ2dCLE1BQU4sQ0FBYUUsS0FBNUI7QUFBQSxDQUZZLEVBVVI7QUFBQSxNQUFHbEIsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDVSxJQUFOLENBQVdTLElBQVgsQ0FBZ0JDLEdBQS9CO0FBQUEsQ0FWUSxDQUFoQjtBQW9CQSxJQUFNQyxZQUFZLEdBQUd2Qix5REFBTSxDQUFDaUIsTUFBVjtBQUFBO0FBQUE7QUFBQSxzUEFDSDtBQUFBLE1BQUdmLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ2dCLE1BQU4sQ0FBYUUsS0FBNUI7QUFBQSxDQURHLEVBRWQ7QUFBQSxNQUFHbEIsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDZ0IsTUFBTixDQUFhTSxLQUE1QjtBQUFBLENBRmMsRUFVVjtBQUFBLE1BQUd0QixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNVLElBQU4sQ0FBV1MsSUFBWCxDQUFnQkMsR0FBL0I7QUFBQSxDQVZVLEVBY0Q7QUFBQSxNQUFHcEIsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDZ0IsTUFBTixDQUFhTSxLQUE1QjtBQUFBLENBZEMsQ0FBbEI7QUFrQkEsSUFBTUMsU0FBUyxHQUFHekIseURBQU0sQ0FBQ2lCLE1BQVY7QUFBQTtBQUFBO0FBQUEsc05BWWxCO0FBQUEsTUFBR2YsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxFQUFOLENBQVNDLEVBQXhCO0FBQUEsQ0Faa0IsQ0FBZjtBQWlCQSxJQUFNc0IsWUFBWSxHQUFHMUIseURBQU0sQ0FBQzJCLElBQVY7QUFBQTtBQUFBO0FBQUEsc0VBQWxCO0FBT0EsSUFBTUMsY0FBYyxHQUFHNUIseURBQU0sQ0FBQzJCLElBQVY7QUFBQTtBQUFBO0FBQUEsK21CQUdMO0FBQUEsTUFBR3pCLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ2dCLE1BQU4sQ0FBYU0sS0FBNUI7QUFBQSxDQUhLLEVBZUg7QUFBQSxNQUFHdEIsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDZ0IsTUFBTixDQUFhTSxLQUE1QjtBQUFBLENBZkcsRUF3Qkg7QUFBQSxNQUFHdEIsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDZ0IsTUFBTixDQUFhTSxLQUE1QjtBQUFBLENBeEJHLENBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc2OWIwOTVhY2JhOTNmNzY5ZDE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICByaWdodDogNTAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTFweCAtOXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgMC4xcyBlYXNlLWluLW91dDtcclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1kfSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIH1cclxuICAmLmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgIWltcG9ydGFudDtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBOYXYgPSBzdHlsZWQubmF2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZGl2LFxyXG4gIHVsLFxyXG4gIGxpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGRpdixcclxuICAgIHVsLFxyXG4gICAgbGkge1xyXG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2TG9nbyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBOYXZMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZMaXN0SXRlbSA9IHN0eWxlZC5saWBcclxuICBmb250LXdlaWdodDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250LndlaWdodC5tZWRpdW19O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubXEubWR9IHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZBY3Rpb25zID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByaW1hcnlCdG4gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnJveWFsQmx1ZX07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250LnNpemUueHhzfTtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBsaW5lYXI7XHJcbiAgJjphY3RpdmUsXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjU3NWU2O1xyXG4gICAgY29sb3I6ICMyNTc1ZTY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWNvbmRhcnlCdG4gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmxhY2t9O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250LnNpemUueHhzfTtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBsaW5lYXI7XHJcbiAgJjpob3ZlcixcclxuICAmOmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhhbWJ1cmdlciA9IHN0eWxlZC5idXR0b25gXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgMC4xcyBlYXNlLWluLW91dDtcclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1xLm1kfSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIYW1idXJnZXJCb3ggPSBzdHlsZWQuc3BhbmBcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIYW1idXJnZXJJbm5lciA9IHN0eWxlZC5zcGFuYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJsYWNrfTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJsYWNrfTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmxhY2t9O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICAmOmJlZm9yZSB7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIHRvcDogMTBweDtcclxuICB9XHJcbiAgJi5oYW1idXJnZXItLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=