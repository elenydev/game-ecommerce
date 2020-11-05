webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ContactForm/index.js":
/*!*****************************************!*\
  !*** ./components/ContactForm/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\ContactForm\\index.js",
    _this = undefined,
    _s = $RefreshSig$();





var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ContactForm__Wrapper",
  componentId: "sc-1pug6mx-0"
})(["display:flex;justify-content:center;align-items:center;font-family:\"Roboto\";padding:5% 0px;@media (min-width:960px){padding:5% 0px;}"]);
_c = Wrapper;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "ContactForm__Form",
  componentId: "sc-1pug6mx-1"
})(["display:flex;flex-direction:column;background-color:#24272e;padding:15px;border:0.5px solid (255,255,255,0.8);box-shadow:2px 2px 8px 0 rgb(0 0 0 / 60%);width:100%;height:100%;@media (min-width:960px){padding:40px;min-width:40vw;max-width:500px;}"]);
_c2 = Form;
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "ContactForm__Heading",
  componentId: "sc-1pug6mx-2"
})(["display:block;letter-spacing:2px;color:#5bb2fc;font-family:\"Black Ops One\",normal;font-weight:500;margin:10px 0;width:100%;text-align:center;"]);
_c3 = Heading;
var Input = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "ContactForm__Input",
  componentId: "sc-1pug6mx-3"
})(["border:none;border-bottom:2px solid white;outline:none;background-color:transparent;color:rgba(255,255,255,0.9);padding:5px;font-size:1em;margin:5px;width:100%;&::placeholder{color:white;}&:focus{outline:1px solid white;}@media (min-width:960px){padding:12px;}"]);
_c4 = Input;
var TextInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].textarea.withConfig({
  displayName: "ContactForm__TextInput",
  componentId: "sc-1pug6mx-4"
})(["border:none;border-bottom:2px solid white;outline:none;background-color:transparent;color:rgba(255,255,255,0.9);padding:5px;font-size:1em;text-decoration:none;font-family:\"Roboto\";margin:10px 0px;width:100%;resize:none;&::placeholder{color:white;}&:focus{outline:1px solid white;}@media (min-width:960px){padding:12px;min-height:150px;}"]);
_c5 = TextInput;
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "ContactForm__Button",
  componentId: "sc-1pug6mx-5"
})(["padding:5px 8px;color:white;background-color:transparent;height:100%;border:2px solid white;outline:none;font-size:1em;cursor:pointer;transition:0.5s all linear;@media (min-width:960px){padding:12px;}&:hover,&:focus{background-color:#ff5a5a;}"]);
_c6 = Button;

var ContactForm = function ContactForm() {
  _s();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.errors;

  var handleSendEmail = function handleSendEmail(data, event) {
    event.preventDefault();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {
      onSubmit: handleSendEmail,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Heading, {
        children: "Have question?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
          type: "text",
          name: "name",
          placeholder: "Your name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
          type: "email",
          name: "email",
          placeholder: "Your e-mail"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextInput, {
          placeholder: "Your message...",
          name: "message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
        type: "submit",
        children: "Send"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 5
  }, _this);
};

_s(ContactForm, "+Nrz0BYUZDnkIuhmBbPsJSfSlWM=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"]];
});

_c7 = ContactForm;
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "Heading");
$RefreshReg$(_c4, "Input");
$RefreshReg$(_c5, "TextInput");
$RefreshReg$(_c6, "Button");
$RefreshReg$(_c7, "ContactForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybS9pbmRleC5qcyJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiRm9ybSIsImZvcm0iLCJIZWFkaW5nIiwiaDMiLCJJbnB1dCIsImlucHV0IiwiVGV4dElucHV0IiwidGV4dGFyZWEiLCJCdXR0b24iLCJidXR0b24iLCJDb250YWN0Rm9ybSIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZXJyb3JzIiwiaGFuZGxlU2VuZEVtYWlsIiwiZGF0YSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhJQUFiO0tBQU1GLE87QUFZTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7QUFBQTtBQUFBO0FBQUEsNlBBQVY7TUFBTUQsSTtBQWlCTixJQUFNRSxPQUFPLEdBQUdKLHlEQUFNLENBQUNLLEVBQVY7QUFBQTtBQUFBO0FBQUEsdUpBQWI7TUFBTUQsTztBQVdOLElBQU1FLEtBQUssR0FBR04seURBQU0sQ0FBQ08sS0FBVjtBQUFBO0FBQUE7QUFBQSw0UUFBWDtNQUFNRCxLO0FBd0JOLElBQU1FLFNBQVMsR0FBR1IseURBQU0sQ0FBQ1MsUUFBVjtBQUFBO0FBQUE7QUFBQSwwVkFBZjtNQUFNRCxTO0FBNEJOLElBQU1FLE1BQU0sR0FBR1YseURBQU0sQ0FBQ1csTUFBVjtBQUFBO0FBQUE7QUFBQSwwUEFBWjtNQUFNRCxNOztBQXFCTixJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsaUJBQzBCQywrREFBTyxFQURqQztBQUFBLE1BQ2hCQyxRQURnQixZQUNoQkEsUUFEZ0I7QUFBQSxNQUNOQyxZQURNLFlBQ05BLFlBRE07QUFBQSxNQUNRQyxLQURSLFlBQ1FBLEtBRFI7QUFBQSxNQUNlQyxNQURmLFlBQ2VBLE1BRGY7O0FBR3hCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3ZDQSxTQUFLLENBQUNDLGNBQU47QUFDRCxHQUZEOztBQUlBLHNCQUNFLHFFQUFDLE9BQUQ7QUFBQSwyQkFDRSxxRUFBQyxJQUFEO0FBQU0sY0FBUSxFQUFFSCxlQUFoQjtBQUFBLDhCQUNFLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLDJEQUFEO0FBQUEsK0JBQ0UscUVBQUMsS0FBRDtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLGNBQUksRUFBQyxNQUF4QjtBQUErQixxQkFBVyxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFLRSxxRUFBQywyREFBRDtBQUFBLCtCQUNFLHFFQUFDLEtBQUQ7QUFBTyxjQUFJLEVBQUMsT0FBWjtBQUFvQixjQUFJLEVBQUMsT0FBekI7QUFBaUMscUJBQVcsRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBUUUscUVBQUMsMkRBQUQ7QUFBQSwrQkFDRSxxRUFBQyxTQUFEO0FBQVcscUJBQVcsRUFBQyxpQkFBdkI7QUFBeUMsY0FBSSxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsZUFXRSxxRUFBQyxNQUFEO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0F4QkQ7O0dBQU1OLFc7VUFDOENDLHVEOzs7TUFEOUNELFc7QUEwQlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYyNzNiMDkwYjVhYzZiZmRiODQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB7IEZvcm1MYWJlbCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gIHBhZGRpbmc6IDUlIDBweDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBwYWRkaW5nOiA1JSAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNzJlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAwIHJnYigwIDAgMCAvIDYwJSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBtaW4td2lkdGg6IDQwdnc7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRpbmcgPSBzdHlsZWQuaDNgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBjb2xvcjogIzViYjJmYztcclxuICBmb250LWZhbWlseTogXCJCbGFjayBPcHMgT25lXCIsIG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGV4dElucHV0ID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgbWFyZ2luOiAxMHB4IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICByZXNpemU6IG5vbmU7XHJcblxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBwYWRkaW5nOiA1cHggOHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBhbGwgbGluZWFyO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNWE1YTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHdhdGNoLCBlcnJvcnMgfSA9IHVzZUZvcm0oKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VuZEVtYWlsID0gKGRhdGEsIGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVNlbmRFbWFpbH0+XHJcbiAgICAgICAgPEhlYWRpbmc+SGF2ZSBxdWVzdGlvbj88L0hlYWRpbmc+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSduYW1lJyBwbGFjZWhvbGRlcj0nWW91ciBuYW1lJyAvPlxyXG4gICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXQgdHlwZT0nZW1haWwnIG5hbWU9J2VtYWlsJyBwbGFjZWhvbGRlcj0nWW91ciBlLW1haWwnIC8+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgIDxUZXh0SW5wdXQgcGxhY2Vob2xkZXI9J1lvdXIgbWVzc2FnZS4uLicgbmFtZT0nbWVzc2FnZSc+PC9UZXh0SW5wdXQ+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnPlNlbmQ8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==