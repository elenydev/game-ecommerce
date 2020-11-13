webpackHotUpdate_N_E("pages/auth/account/emails",{

/***/ "./components/Email/index.js":
/*!***********************************!*\
  !*** ./components/Email/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\Email\\index.js",
    _this = undefined;




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Email__Wrapper",
  componentId: "sc-1lk4mh3-0"
})(["display:flex;flex-direction:column;width:100%;height:100%;margin-top:50px;@media (min-width:960px){margin:0;}"]);
_c = Wrapper;
var EmailContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Email__EmailContainer",
  componentId: "sc-1lk4mh3-1"
})(["display:flex;padding:15px;flex-direction:column;border:1px solid rgb(255 90 90 /60%);border-right:none;border-left:none;@media (min-width:960px){flex-direction:row;}"]);
_c2 = EmailContainer;
var EmailDescriptionBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Email__EmailDescriptionBox",
  componentId: "sc-1lk4mh3-2"
})(["display:flex;flex-direction:column;min-height:100%;width:100%;color:#5bb2fc;@media (min-width:960px){margin:0 25px;max-width:450px;}"]);
_c3 = EmailDescriptionBox;
var CustomerEmail = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "Email__CustomerEmail",
  componentId: "sc-1lk4mh3-3"
})(["display:flex;margin:10px 0;justify-content:center;text-align:center;font-size:1em;@media (min-width:960px){justify-content:flex-start;font-size:1.1.em;}"]);
_c4 = CustomerEmail;
var EmailCustomerName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Email__EmailCustomerName",
  componentId: "sc-1lk4mh3-4"
})(["display:flex;font-size:0.9em;justify-content:center;word-break:break-word;@media (min-width:960px){justify-content:flex-start;margin-bottom:10px;}"]);
_c5 = EmailCustomerName;
var EmailMessage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Email__EmailMessage",
  componentId: "sc-1lk4mh3-5"
})(["display:flex;align-items:center;color:rgb(255 90 90 /90%);@media (min-width:960px){margin:10px 0;}"]);
_c6 = EmailMessage;
var ActionsBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Email__ActionsBox",
  componentId: "sc-1lk4mh3-6"
})(["display:flex;flex-direction:column;align-items:center;margin-left:5px;span{display:flex;color:rgb(255 90 90 /80%);}"]);

var Email = function Email(_ref) {
  var emailMessage = _ref.emailMessage,
      index = _ref.index;
  var customerName = emailMessage.customerName,
      email = emailMessage.email,
      message = emailMessage.message,
      date = emailMessage.date;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmailContainer, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmailDescriptionBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CustomerEmail, {
          children: email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmailCustomerName, {
          children: [customerName, " ", date]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EmailMessage, {
          children: message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, _this);
};

_c7 = Email;
/* harmony default export */ __webpack_exports__["default"] = (Email);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "EmailContainer");
$RefreshReg$(_c3, "EmailDescriptionBox");
$RefreshReg$(_c4, "CustomerEmail");
$RefreshReg$(_c5, "EmailCustomerName");
$RefreshReg$(_c6, "EmailMessage");
$RefreshReg$(_c7, "Email");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FbWFpbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiRW1haWxDb250YWluZXIiLCJFbWFpbERlc2NyaXB0aW9uQm94IiwiQ3VzdG9tZXJFbWFpbCIsImgyIiwiRW1haWxDdXN0b21lck5hbWUiLCJwIiwiRW1haWxNZXNzYWdlIiwiQWN0aW9uc0JveCIsIkVtYWlsIiwiZW1haWxNZXNzYWdlIiwiaW5kZXgiLCJjdXN0b21lck5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFIQUFiO0tBQU1GLE87QUFZTixJQUFNRyxjQUFjLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNktBQXBCO01BQU1DLGM7QUFhTixJQUFNQyxtQkFBbUIsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0SUFBekI7TUFBTUUsbUI7QUFhTixJQUFNQyxhQUFhLEdBQUdKLHlEQUFNLENBQUNLLEVBQVY7QUFBQTtBQUFBO0FBQUEsZ0tBQW5CO01BQU1ELGE7QUFhTixJQUFNRSxpQkFBaUIsR0FBR04seURBQU0sQ0FBQ08sQ0FBVjtBQUFBO0FBQUE7QUFBQSwwSkFBdkI7TUFBTUQsaUI7QUFZTixJQUFNRSxZQUFZLEdBQUdSLHlEQUFNLENBQUNPLENBQVY7QUFBQTtBQUFBO0FBQUEsMEdBQWxCO01BQU1DLFk7QUFVTixJQUFNQyxVQUFVLEdBQUdULHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkhBQWhCOztBQVlBLElBQU1TLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQTZCO0FBQUEsTUFBMUJDLFlBQTBCLFFBQTFCQSxZQUEwQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUFBLE1BQ2pDQyxZQURpQyxHQUNNRixZQUROLENBQ2pDRSxZQURpQztBQUFBLE1BQ25CQyxLQURtQixHQUNNSCxZQUROLENBQ25CRyxLQURtQjtBQUFBLE1BQ1pDLE9BRFksR0FDTUosWUFETixDQUNaSSxPQURZO0FBQUEsTUFDSEMsSUFERyxHQUNNTCxZQUROLENBQ0hLLElBREc7QUFFekMsc0JBQ0UscUVBQUMsT0FBRDtBQUFBLDJCQUNFLHFFQUFDLGNBQUQ7QUFBQSw2QkFDRSxxRUFBQyxtQkFBRDtBQUFBLGdDQUNFLHFFQUFDLGFBQUQ7QUFBQSxvQkFBZ0JGO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxpQkFBRDtBQUFBLHFCQUNHRCxZQURILE9BQ2tCRyxJQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFLRSxxRUFBQyxZQUFEO0FBQUEsb0JBQWVEO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FmRDs7TUFBTUwsSztBQWlCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9hY2NvdW50L2VtYWlscy5kOTdkYWY0YjY3ZmQ0NGZhOTNlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEVtYWlsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1IDkwIDkwIC82MCUpO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEVtYWlsRGVzY3JpcHRpb25Cb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAjNWJiMmZjO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIG1hcmdpbjogMCAyNXB4O1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDdXN0b21lckVtYWlsID0gc3R5bGVkLmgyYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZvbnQtc2l6ZTogMS4xLmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEVtYWlsQ3VzdG9tZXJOYW1lID0gc3R5bGVkLnBgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFbWFpbE1lc3NhZ2UgPSBzdHlsZWQucGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYigyNTUgOTAgOTAgLzkwJSk7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQWN0aW9uc0JveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sb3I6IHJnYigyNTUgOTAgOTAgLzgwJSk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRW1haWwgPSAoeyBlbWFpbE1lc3NhZ2UsIGluZGV4IH0pID0+IHtcclxuICBjb25zdCB7IGN1c3RvbWVyTmFtZSwgZW1haWwsIG1lc3NhZ2UsIGRhdGUgfSA9IGVtYWlsTWVzc2FnZTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxFbWFpbENvbnRhaW5lcj5cclxuICAgICAgICA8RW1haWxEZXNjcmlwdGlvbkJveD5cclxuICAgICAgICAgIDxDdXN0b21lckVtYWlsPntlbWFpbH08L0N1c3RvbWVyRW1haWw+XHJcbiAgICAgICAgICA8RW1haWxDdXN0b21lck5hbWU+XHJcbiAgICAgICAgICAgIHtjdXN0b21lck5hbWV9IHtkYXRlfVxyXG4gICAgICAgICAgPC9FbWFpbEN1c3RvbWVyTmFtZT5cclxuICAgICAgICAgIDxFbWFpbE1lc3NhZ2U+e21lc3NhZ2V9PC9FbWFpbE1lc3NhZ2U+XHJcbiAgICAgICAgPC9FbWFpbERlc2NyaXB0aW9uQm94PlxyXG4gICAgICA8L0VtYWlsQ29udGFpbmVyPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbWFpbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==