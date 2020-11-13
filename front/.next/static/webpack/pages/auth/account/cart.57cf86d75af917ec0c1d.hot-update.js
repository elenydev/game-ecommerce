webpackHotUpdate_N_E("pages/auth/account/cart",{

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
})(["display:flex;margin:10px 0;justify-content:center;text-align:center;font-size:1em;@media (min-width:960px){justify-content:flex-start;font-size:1.4em;}"]);
_c4 = CustomerEmail;
var EmailCustomerName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Email__EmailCustomerName",
  componentId: "sc-1lk4mh3-4"
})(["display:flex;font-size:0.9em;justify-content:center;word-break:break-word;@media (min-width:960px){justify-content:flex-start;margin-bottom:10px;}"]);
_c5 = EmailCustomerName;
var EmailMessage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Email__EmailMessage",
  componentId: "sc-1lk4mh3-5"
})(["display:flex;align-items:center;color:rgb(255 90 90 /90%);margin:10px 0;@media (min-width:960px){}"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FbWFpbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiRW1haWxDb250YWluZXIiLCJFbWFpbERlc2NyaXB0aW9uQm94IiwiQ3VzdG9tZXJFbWFpbCIsImgyIiwiRW1haWxDdXN0b21lck5hbWUiLCJwIiwiRW1haWxNZXNzYWdlIiwiQWN0aW9uc0JveCIsIkVtYWlsIiwiZW1haWxNZXNzYWdlIiwiaW5kZXgiLCJjdXN0b21lck5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFIQUFiO0tBQU1GLE87QUFZTixJQUFNRyxjQUFjLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNktBQXBCO01BQU1DLGM7QUFhTixJQUFNQyxtQkFBbUIsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0SUFBekI7TUFBTUUsbUI7QUFhTixJQUFNQyxhQUFhLEdBQUdKLHlEQUFNLENBQUNLLEVBQVY7QUFBQTtBQUFBO0FBQUEsK0pBQW5CO01BQU1ELGE7QUFhTixJQUFNRSxpQkFBaUIsR0FBR04seURBQU0sQ0FBQ08sQ0FBVjtBQUFBO0FBQUE7QUFBQSwwSkFBdkI7TUFBTUQsaUI7QUFZTixJQUFNRSxZQUFZLEdBQUdSLHlEQUFNLENBQUNPLENBQVY7QUFBQTtBQUFBO0FBQUEsMEdBQWxCO01BQU1DLFk7QUFVTixJQUFNQyxVQUFVLEdBQUdULHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkhBQWhCOztBQVlBLElBQU1TLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQTZCO0FBQUEsTUFBMUJDLFlBQTBCLFFBQTFCQSxZQUEwQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUFBLE1BQ2pDQyxZQURpQyxHQUNNRixZQUROLENBQ2pDRSxZQURpQztBQUFBLE1BQ25CQyxLQURtQixHQUNNSCxZQUROLENBQ25CRyxLQURtQjtBQUFBLE1BQ1pDLE9BRFksR0FDTUosWUFETixDQUNaSSxPQURZO0FBQUEsTUFDSEMsSUFERyxHQUNNTCxZQUROLENBQ0hLLElBREc7QUFFekMsc0JBQ0UscUVBQUMsT0FBRDtBQUFBLDJCQUNFLHFFQUFDLGNBQUQ7QUFBQSw2QkFDRSxxRUFBQyxtQkFBRDtBQUFBLGdDQUNFLHFFQUFDLGFBQUQ7QUFBQSxvQkFBZ0JGO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxpQkFBRDtBQUFBLHFCQUNHRCxZQURILE9BQ2tCRyxJQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFLRSxxRUFBQyxZQUFEO0FBQUEsb0JBQWVEO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FmRDs7TUFBTUwsSztBQWlCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9hY2NvdW50L2NhcnQuNTdjZjg2ZDc1YWY5MTdlYzBjMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFbWFpbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSA5MCA5MCAvNjAlKTtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFbWFpbERlc2NyaXB0aW9uQm94ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogIzViYjJmYztcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBtYXJnaW46IDAgMjVweDtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ3VzdG9tZXJFbWFpbCA9IHN0eWxlZC5oMmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDFlbTtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEVtYWlsQ3VzdG9tZXJOYW1lID0gc3R5bGVkLnBgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFbWFpbE1lc3NhZ2UgPSBzdHlsZWQucGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYigyNTUgOTAgOTAgLzkwJSk7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEFjdGlvbnNCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGNvbG9yOiByZ2IoMjU1IDkwIDkwIC84MCUpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEVtYWlsID0gKHsgZW1haWxNZXNzYWdlLCBpbmRleCB9KSA9PiB7XHJcbiAgY29uc3QgeyBjdXN0b21lck5hbWUsIGVtYWlsLCBtZXNzYWdlLCBkYXRlIH0gPSBlbWFpbE1lc3NhZ2U7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8RW1haWxDb250YWluZXI+XHJcbiAgICAgICAgPEVtYWlsRGVzY3JpcHRpb25Cb3g+XHJcbiAgICAgICAgICA8Q3VzdG9tZXJFbWFpbD57ZW1haWx9PC9DdXN0b21lckVtYWlsPlxyXG4gICAgICAgICAgPEVtYWlsQ3VzdG9tZXJOYW1lPlxyXG4gICAgICAgICAgICB7Y3VzdG9tZXJOYW1lfSB7ZGF0ZX1cclxuICAgICAgICAgIDwvRW1haWxDdXN0b21lck5hbWU+XHJcbiAgICAgICAgICA8RW1haWxNZXNzYWdlPnttZXNzYWdlfTwvRW1haWxNZXNzYWdlPlxyXG4gICAgICAgIDwvRW1haWxEZXNjcmlwdGlvbkJveD5cclxuICAgICAgPC9FbWFpbENvbnRhaW5lcj5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1haWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=