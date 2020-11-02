webpackHotUpdate_N_E("pages/auth/login",{

/***/ "./components/Auth/index.js":
/*!**********************************!*\
  !*** ./components/Auth/index.js ***!
  \**********************************/
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
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Alert_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Alert/index */ "./components/Alert/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\Auth\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Auth__Wrapper",
  componentId: "d3fcbm-0"
})(["display:flex;align-items:center;flex-direction:column;justify-content:space-between;min-width:35vw;max-width:500px;min-height:40vh;padding:10px;color:white;box-shadow:2px 2px 8px 0 rgb(0 0 0 / 60%);background-color:rgba(0,0,0,0.3);"]);
_c = Wrapper;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "Auth__Form",
  componentId: "d3fcbm-1"
})(["display:flex;width:100%;height:100%;flex-direction:column;justify-content:space-between;align-items:center;color:white;& > .MuiButton-containedSecondary{margin:15px;background-color:#b73d1cbf;&:hover{background-color:#ff3600bf;}}& > .MuiFormLabel-root{color:white;}& > .hidden{display:none;}& > label > .MuiIconButton-colorPrimary{color:#ff3600bf !important;}"]);
_c2 = Form;
var ErrorSpan = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Auth__ErrorSpan",
  componentId: "d3fcbm-2"
})(["color:red;font-size:12px;"]);
_c3 = ErrorSpan;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "Auth__Header",
  componentId: "d3fcbm-3"
})(["display:flex;font-weight:700;"]);
_c4 = Header;
var InputElement = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "Auth__InputElement",
  componentId: "d3fcbm-4"
})(["margin:8px 0;color:white;& > .MuiInputBase-input{color:white;}"]);
_c5 = InputElement;
var CheckBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormLabel"]).withConfig({
  displayName: "Auth__CheckBox",
  componentId: "d3fcbm-5"
})(["display:flex;align-items:center;justify-content:center;flex-direction:column;margin:15px 0;& > .MuiCheckbox-root{color:#b73d1cbf;}& > .MuiCheckbox-colorSecondary.Mui-checked{color:#b73d1cbf;}"]);
var defaultValues = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  avatar: null,
  policy: null
};

var RegisterForm = function RegisterForm() {
  _s();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])({
    defaultValues: defaultValues
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors,
      setError = _useForm.setError,
      reset = _useForm.reset;

  var registerUser = function registerUser(data, event) {
    event.preventDefault();
    console.log(data); // reset();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
      children: "Sign in"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {
      onSubmit: handleSubmit(registerUser),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormLabel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputElement, {
          type: "text",
          name: "email",
          placeholder: "Enter email",
          inputRef: register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          }),
          onChange: function onChange() {
            setError("email", {
              type: "manual",
              message: "You have to a email"
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, _this), errors.email && errors.email.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }, _this), errors.email && errors.email.type === "pattern" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a correct email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormLabel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputElement, {
          type: "password",
          name: "password",
          placeholder: "Enter Password",
          inputRef: register({
            required: true
          }),
          onChange: function onChange() {
            setError("password", {
              type: "manual",
              message: "You have to provide a password"
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, _this), errors.password && errors.password.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        type: "submit",
        variant: "contained",
        color: "secondary",
        children: "Sign in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }, _this);
};

_s(RegisterForm, "VfD5fQQClLmpmB0QDJLztbQYVL4=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"]];
});

_c6 = RegisterForm;
/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "ErrorSpan");
$RefreshReg$(_c4, "Header");
$RefreshReg$(_c5, "InputElement");
$RefreshReg$(_c6, "RegisterForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL2luZGV4LmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIkVycm9yU3BhbiIsInNwYW4iLCJIZWFkZXIiLCJoMiIsIklucHV0RWxlbWVudCIsIklucHV0IiwiQ2hlY2tCb3giLCJGb3JtTGFiZWwiLCJkZWZhdWx0VmFsdWVzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXZhdGFyIiwicG9saWN5IiwiUmVnaXN0ZXJGb3JtIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwic2V0RXJyb3IiLCJyZXNldCIsInJlZ2lzdGVyVXNlciIsImRhdGEiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlcXVpcmVkIiwicGF0dGVybiIsInZhbHVlIiwibWVzc2FnZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK09BQWI7S0FBTUYsTztBQWNOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtBQUFBO0FBQUE7QUFBQSwrV0FBVjtNQUFNRCxJO0FBK0JOLElBQU1FLFNBQVMsR0FBR0oseURBQU0sQ0FBQ0ssSUFBVjtBQUFBO0FBQUE7QUFBQSxpQ0FBZjtNQUFNRCxTO0FBS04sSUFBTUUsTUFBTSxHQUFHTix5REFBTSxDQUFDTyxFQUFWO0FBQUE7QUFBQTtBQUFBLHFDQUFaO01BQU1ELE07QUFLTixJQUFNRSxZQUFZLEdBQUdSLGlFQUFNLENBQUNTLCtEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsc0VBQWxCO01BQU1ELFk7QUFT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QUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFDSixlQTZDRSxxRUFBQyx3REFBRDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBQyxXQUE5QjtBQUEwQyxhQUFLLEVBQUMsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1REQsQ0FsRUQ7O0dBQU1qQixZO1VBQ3dEQyx1RDs7O01BRHhERCxZO0FBb0VTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL2xvZ2luLmMxYjZhYTJhNTJlMjIyY2E0NTcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIjtcclxuaW1wb3J0IHsgRm9ybUxhYmVsLCBCdXR0b24sIENoZWNrYm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLi9BbGVydC9pbmRleFwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgUGhvdG9DYW1lcmEgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYVwiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1pbi13aWR0aDogMzV2dztcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwdmg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMCByZ2IoMCAwIDAgLyA2MCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgJiA+IC5NdWlCdXR0b24tY29udGFpbmVkU2Vjb25kYXJ5IHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNzNkMWNiZjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzYwMGJmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IC5NdWlGb3JtTGFiZWwtcm9vdCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAmID4gLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJiA+IGxhYmVsID4gLk11aUljb25CdXR0b24tY29sb3JQcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjZmYzNjAwYmYgIWltcG9ydGFudDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFcnJvclNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oMmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dEVsZW1lbnQgPSBzdHlsZWQoSW5wdXQpYFxyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmID4gLk11aUlucHV0QmFzZS1pbnB1dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2hlY2tCb3ggPSBzdHlsZWQoRm9ybUxhYmVsKWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDE1cHggMDtcclxuXHJcbiAgJiA+IC5NdWlDaGVja2JveC1yb290IHtcclxuICAgIGNvbG9yOiAjYjczZDFjYmY7XHJcbiAgfVxyXG5cclxuICAmID4gLk11aUNoZWNrYm94LWNvbG9yU2Vjb25kYXJ5Lk11aS1jaGVja2VkIHtcclxuICAgIGNvbG9yOiAjYjczZDFjYmY7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcclxuICBmaXJzdE5hbWU6IG51bGwsXHJcbiAgbGFzdE5hbWU6IG51bGwsXHJcbiAgZW1haWw6IG51bGwsXHJcbiAgcGFzc3dvcmQ6IG51bGwsXHJcbiAgYXZhdGFyOiBudWxsLFxyXG4gIHBvbGljeTogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycywgc2V0RXJyb3IsIHJlc2V0IH0gPSB1c2VGb3JtKHtcclxuICAgIGRlZmF1bHRWYWx1ZXMsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlZ2lzdGVyVXNlciA9IChkYXRhLCBldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy8gcmVzZXQoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxIZWFkZXI+U2lnbiBpbjwvSGVhZGVyPlxyXG5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChyZWdpc3RlclVzZXIpfT5cclxuICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0RWxlbWVudFxyXG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIGVtYWlsJ1xyXG4gICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHBhdHRlcm46IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJpbnZhbGlkIGVtYWlsIGFkZHJlc3NcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihcImVtYWlsXCIsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWFudWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIGEgZW1haWxcIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5lbWFpbCAmJiBlcnJvcnMuZW1haWwudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBlbWFpbDwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Vycm9ycy5lbWFpbCAmJiBlcnJvcnMuZW1haWwudHlwZSA9PT0gXCJwYXR0ZXJuXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIGNvcnJlY3QgZW1haWw8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIFBhc3N3b3JkJ1xyXG4gICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihcInBhc3N3b3JkXCIsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWFudWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIHByb3ZpZGUgYSBwYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZC50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIHBhc3N3b3JkPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeSc+XHJcbiAgICAgICAgICBTaWduIGluXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9