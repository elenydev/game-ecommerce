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
})(["display:flex;align-items:center;flex-direction:column;justify-content:space-between;min-width:35vw;max-width:500px;padding:10px;color:white;box-shadow:2px 2px 8px 0 rgb(0 0 0 / 60%);background-color:rgba(0,0,0,0.3);"]);
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
      lineNumber: 112,
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
          lineNumber: 116,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, _this), errors.email && errors.email.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 11
      }, _this), errors.email && errors.email.type === "pattern" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a correct email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
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
          lineNumber: 142,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this), errors.password && errors.password.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        type: "submit",
        variant: "contained",
        color: "secondary",
        children: "Sign in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL2luZGV4LmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIkVycm9yU3BhbiIsInNwYW4iLCJIZWFkZXIiLCJoMiIsIklucHV0RWxlbWVudCIsIklucHV0IiwiQ2hlY2tCb3giLCJGb3JtTGFiZWwiLCJkZWZhdWx0VmFsdWVzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXZhdGFyIiwicG9saWN5IiwiUmVnaXN0ZXJGb3JtIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwic2V0RXJyb3IiLCJyZXNldCIsInJlZ2lzdGVyVXNlciIsImRhdGEiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlcXVpcmVkIiwicGF0dGVybiIsInZhbHVlIiwibWVzc2FnZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK05BQWI7S0FBTUYsTztBQWFOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtBQUFBO0FBQUE7QUFBQSwrV0FBVjtNQUFNRCxJO0FBK0JOLElBQU1FLFNBQVMsR0FBR0oseURBQU0sQ0FBQ0ssSUFBVjtBQUFBO0FBQUE7QUFBQSxpQ0FBZjtNQUFNRCxTO0FBS04sSUFBTUUsTUFBTSxHQUFHTix5REFBTSxDQUFDTyxFQUFWO0FBQUE7QUFBQTtBQUFBLHFDQUFaO01BQU1ELE07QUFLTixJQUFNRSxZQUFZLEdBQUdSLGlFQUFNLENBQUNTLCtEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsc0VBQWxCO01BQU1ELFk7QUFT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QUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFDSixlQTZDRSxxRUFBQyx3REFBRDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBQyxXQUE5QjtBQUEwQyxhQUFLLEVBQUMsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1REQsQ0FsRUQ7O0dBQU1qQixZO1VBQ3dEQyx1RDs7O01BRHhERCxZO0FBb0VTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL2xvZ2luLjA0M2M4MjUyMmUyYmFiOGU0NDUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIjtcclxuaW1wb3J0IHsgRm9ybUxhYmVsLCBCdXR0b24sIENoZWNrYm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLi9BbGVydC9pbmRleFwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgUGhvdG9DYW1lcmEgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYVwiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1pbi13aWR0aDogMzV2dztcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IDAgcmdiKDAgMCAwIC8gNjAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICYgPiAuTXVpQnV0dG9uLWNvbnRhaW5lZFNlY29uZGFyeSB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjczZDFjYmY7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM2MDBiZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuTXVpRm9ybUxhYmVsLXJvb3Qge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJiA+IC5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICYgPiBsYWJlbCA+IC5NdWlJY29uQnV0dG9uLWNvbG9yUHJpbWFyeSB7XHJcbiAgICBjb2xvcjogI2ZmMzYwMGJmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRXJyb3JTcGFuID0gc3R5bGVkLnNwYW5gXHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaDJgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXRFbGVtZW50ID0gc3R5bGVkKElucHV0KWBcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgJiA+IC5NdWlJbnB1dEJhc2UtaW5wdXQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENoZWNrQm94ID0gc3R5bGVkKEZvcm1MYWJlbClgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcblxyXG4gICYgPiAuTXVpQ2hlY2tib3gtcm9vdCB7XHJcbiAgICBjb2xvcjogI2I3M2QxY2JmO1xyXG4gIH1cclxuXHJcbiAgJiA+IC5NdWlDaGVja2JveC1jb2xvclNlY29uZGFyeS5NdWktY2hlY2tlZCB7XHJcbiAgICBjb2xvcjogI2I3M2QxY2JmO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGRlZmF1bHRWYWx1ZXMgPSB7XHJcbiAgZmlyc3ROYW1lOiBudWxsLFxyXG4gIGxhc3ROYW1lOiBudWxsLFxyXG4gIGVtYWlsOiBudWxsLFxyXG4gIHBhc3N3b3JkOiBudWxsLFxyXG4gIGF2YXRhcjogbnVsbCxcclxuICBwb2xpY3k6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBSZWdpc3RlckZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMsIHNldEVycm9yLCByZXNldCB9ID0gdXNlRm9ybSh7XHJcbiAgICBkZWZhdWx0VmFsdWVzLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCByZWdpc3RlclVzZXIgPSAoZGF0YSwgZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIC8vIHJlc2V0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8SGVhZGVyPlNpZ24gaW48L0hlYWRlcj5cclxuXHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQocmVnaXN0ZXJVc2VyKX0+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBlbWFpbCdcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBwYXR0ZXJuOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiaW52YWxpZCBlbWFpbCBhZGRyZXNzXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJlbWFpbFwiLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSB0byBhIGVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIHtlcnJvcnMuZW1haWwgJiYgZXJyb3JzLmVtYWlsLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGEgZW1haWw8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtlcnJvcnMuZW1haWwgJiYgZXJyb3JzLmVtYWlsLnR5cGUgPT09IFwicGF0dGVyblwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBjb3JyZWN0IGVtYWlsPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0RWxlbWVudFxyXG4gICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBQYXNzd29yZCdcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJwYXNzd29yZFwiLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSB0byBwcm92aWRlIGEgcGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmQudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBwYXNzd29yZDwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknPlxyXG4gICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==