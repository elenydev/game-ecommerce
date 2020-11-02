webpackHotUpdate_N_E("pages/register",{

/***/ "./components/RegisterForm/index.js":
/*!******************************************!*\
  !*** ./components/RegisterForm/index.js ***!
  \******************************************/
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


var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\RegisterForm\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "RegisterForm__Wrapper",
  componentId: "sc-1ngtmd-0"
})(["display:flex;align-items:center;flex-direction:column;justify-content:space-between;min-width:35vw;max-width:500px;min-height:40vh;padding:10px;color:white;box-shadow:2px 2px 8px 0 rgb(0 0 0 / 60%);background-color:rgba(0,0,0,0.3);"]);
_c = Wrapper;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "RegisterForm__Form",
  componentId: "sc-1ngtmd-1"
})(["display:flex;width:100%;height:100%;flex-direction:column;justify-content:space-between;align-items:center;color:white;& > .MuiButton-containedSecondary{margin:15px;background-color:#b73d1cbf;&:hover{background-color:#ff3600bf;}}& > .MuiFormLabel-root{color:white;}& > .hidden{display:none;}& > label > .MuiIconButton-colorPrimary{color:#ff3600bf !important;}"]);
_c2 = Form;
var ErrorSpan = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "RegisterForm__ErrorSpan",
  componentId: "sc-1ngtmd-2"
})(["color:red;font-size:12px;"]);
_c3 = ErrorSpan;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "RegisterForm__Header",
  componentId: "sc-1ngtmd-3"
})(["display:flex;font-weight:700;"]);
_c4 = Header;
var InputElement = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "RegisterForm__InputElement",
  componentId: "sc-1ngtmd-4"
})(["margin:8px 0;color:white;& > .MuiInputBase-input{color:white;}"]);
_c5 = InputElement;
var CheckBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormLabel"]).withConfig({
  displayName: "RegisterForm__CheckBox",
  componentId: "sc-1ngtmd-5"
})(["display:flex;align-items:center;justify-content:center;flex-direction:column;margin:15px 0;& > .MuiCheckbox-root{color:#b73d1cbf;}& > .MuiCheckbox-colorSecondary.Mui-checked{color:#b73d1cbf;}"]);
_c6 = CheckBox;
var defaultValues = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  policy: false,
  avatar: null
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      file = _useState[0],
      setFile = _useState[1];

  var registerUser = function registerUser(data, event) {
    event.preventDefault();
    var formData = new FormData();
    console.log(data);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
      children: "Create an account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {
      onSubmit: handleSubmit(registerUser),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormLabel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputElement, {
          type: "text",
          name: "firstName",
          placeholder: "First Name",
          inputRef: register({
            required: true
          }),
          onChange: function onChange() {
            setError("firstName", {
              type: "manual",
              message: "You have to provide a first name"
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, _this), errors.firstName && errors.firstName.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a first name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormLabel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputElement, {
          type: "text",
          name: "lastName",
          placeholder: "Last Name",
          inputRef: register({
            required: true
          }),
          onChange: function onChange() {
            setError("lastName", {
              type: "manual",
              message: "You have to provide a last name"
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, _this), errors.lastName && errors.lastName.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a last name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormLabel"], {
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
          lineNumber: 153,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, _this), errors.email && errors.email.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 11
      }, _this), errors.email && errors.email.type === "pattern" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a correct email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
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
          lineNumber: 179,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, _this), errors.password && errors.password.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputElement, {
        type: "file",
        name: "avatar",
        id: "avatar",
        accept: "image/*",
        className: "hidden",
        inputRef: register({
          required: true
        }),
        onChange: function onChange(e) {
          setError("picture", {
            type: "manual",
            message: "You have to provide an avatar"
          });
          setFile(e.target.files[0]);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "avatar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
          color: "primary",
          "aria-label": "upload picture",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }, _this), errors.avatar && errors.avatar.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide an avatar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CheckBox, {
        children: [" ", "You have to accept our", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/privacy",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "Privacy Policy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
          name: "policy",
          inputRef: register({
            required: true
          }),
          onChange: function onChange() {
            setError("policy", {
              type: "manual",
              message: "You have accept our privacy policy "
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 11
        }, _this), errors.policy && errors.policy.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
          children: "Please accept our privacy policy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        type: "submit",
        variant: "contained",
        color: "secondary",
        children: "Create"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 5
  }, _this);
};

_s(RegisterForm, "0eHc5cwoQ2mL2Wkfe9k7zBfkS6g=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"]];
});

_c7 = RegisterForm;
/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "ErrorSpan");
$RefreshReg$(_c4, "Header");
$RefreshReg$(_c5, "InputElement");
$RefreshReg$(_c6, "CheckBox");
$RefreshReg$(_c7, "RegisterForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3RlckZvcm0vaW5kZXguanMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZvcm0iLCJmb3JtIiwiRXJyb3JTcGFuIiwic3BhbiIsIkhlYWRlciIsImgyIiwiSW5wdXRFbGVtZW50IiwiSW5wdXQiLCJDaGVja0JveCIsIkZvcm1MYWJlbCIsImRlZmF1bHRWYWx1ZXMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwb2xpY3kiLCJhdmF0YXIiLCJSZWdpc3RlckZvcm0iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJzZXRFcnJvciIsInJlc2V0IiwidXNlU3RhdGUiLCJmaWxlIiwic2V0RmlsZSIsInJlZ2lzdGVyVXNlciIsImRhdGEiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1aXJlZCIsInR5cGUiLCJtZXNzYWdlIiwicGF0dGVybiIsInZhbHVlIiwiZSIsInRhcmdldCIsImZpbGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtPQUFiO0tBQU1GLE87QUFjTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7QUFBQTtBQUFBO0FBQUEsK1dBQVY7TUFBTUQsSTtBQStCTixJQUFNRSxTQUFTLEdBQUdKLHlEQUFNLENBQUNLLElBQVY7QUFBQTtBQUFBO0FBQUEsaUNBQWY7TUFBTUQsUztBQUtOLElBQU1FLE1BQU0sR0FBR04seURBQU0sQ0FBQ08sRUFBVjtBQUFBO0FBQUE7QUFBQSxxQ0FBWjtNQUFNRCxN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ZGZiODU3ODdkZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0XCI7XHJcbmltcG9ydCB7IEZvcm1MYWJlbCwgQnV0dG9uLCBDaGVja2JveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwiLi4vQWxlcnQvaW5kZXhcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IFBob3RvQ2FtZXJhIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvdG9DYW1lcmFcIjtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtaW4td2lkdGg6IDM1dnc7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtaW4taGVpZ2h0OiA0MHZoO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IDAgcmdiKDAgMCAwIC8gNjAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICYgPiAuTXVpQnV0dG9uLWNvbnRhaW5lZFNlY29uZGFyeSB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjczZDFjYmY7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM2MDBiZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuTXVpRm9ybUxhYmVsLXJvb3Qge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJiA+IC5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICYgPiBsYWJlbCA+IC5NdWlJY29uQnV0dG9uLWNvbG9yUHJpbWFyeSB7XHJcbiAgICBjb2xvcjogI2ZmMzYwMGJmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRXJyb3JTcGFuID0gc3R5bGVkLnNwYW5gXHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaDJgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXRFbGVtZW50ID0gc3R5bGVkKElucHV0KWBcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgJiA+IC5NdWlJbnB1dEJhc2UtaW5wdXQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENoZWNrQm94ID0gc3R5bGVkKEZvcm1MYWJlbClgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcblxyXG4gICYgPiAuTXVpQ2hlY2tib3gtcm9vdCB7XHJcbiAgICBjb2xvcjogI2I3M2QxY2JmO1xyXG4gIH1cclxuXHJcbiAgJiA+IC5NdWlDaGVja2JveC1jb2xvclNlY29uZGFyeS5NdWktY2hlY2tlZCB7XHJcbiAgICBjb2xvcjogI2I3M2QxY2JmO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGRlZmF1bHRWYWx1ZXMgPSB7XHJcbiAgZmlyc3ROYW1lOiBudWxsLFxyXG4gIGxhc3ROYW1lOiBudWxsLFxyXG4gIGVtYWlsOiBudWxsLFxyXG4gIHBhc3N3b3JkOiBudWxsLFxyXG4gIHBvbGljeTogZmFsc2UsXHJcbiAgYXZhdGFyOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgUmVnaXN0ZXJGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzLCBzZXRFcnJvciwgcmVzZXQgfSA9IHVzZUZvcm0oe1xyXG4gICAgZGVmYXVsdFZhbHVlcyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IHJlZ2lzdGVyVXNlciA9IChkYXRhLCBldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxIZWFkZXI+Q3JlYXRlIGFuIGFjY291bnQ8L0hlYWRlcj5cclxuXHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQocmVnaXN0ZXJVc2VyKX0+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgbmFtZT0nZmlyc3ROYW1lJ1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRmlyc3QgTmFtZSdcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJmaXJzdE5hbWVcIiwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgdG8gcHJvdmlkZSBhIGZpcnN0IG5hbWVcIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5maXJzdE5hbWUgJiYgZXJyb3JzLmZpcnN0TmFtZS50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIGZpcnN0IG5hbWU8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgIG5hbWU9J2xhc3ROYW1lJ1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nTGFzdCBOYW1lJ1xyXG4gICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihcImxhc3ROYW1lXCIsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWFudWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIHByb3ZpZGUgYSBsYXN0IG5hbWVcIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5sYXN0TmFtZSAmJiBlcnJvcnMubGFzdE5hbWUudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBsYXN0IG5hbWU8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgZW1haWwnXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgcGF0dGVybjoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2ksXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcImludmFsaWQgZW1haWwgYWRkcmVzc1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVycm9yKFwiZW1haWxcIiwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgdG8gYSBlbWFpbFwiLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIGVycm9ycy5lbWFpbC50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIGVtYWlsPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIGVycm9ycy5lbWFpbC50eXBlID09PSBcInBhdHRlcm5cIiAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGEgY29ycmVjdCBlbWFpbDwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgUGFzc3dvcmQnXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVycm9yKFwicGFzc3dvcmRcIiwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgdG8gcHJvdmlkZSBhIHBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGEgcGFzc3dvcmQ8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgIHR5cGU9J2ZpbGUnXHJcbiAgICAgICAgICBuYW1lPSdhdmF0YXInXHJcbiAgICAgICAgICBpZD0nYXZhdGFyJ1xyXG4gICAgICAgICAgYWNjZXB0PSdpbWFnZS8qJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdoaWRkZW4nXHJcbiAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRFcnJvcihcInBpY3R1cmVcIiwge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwibWFudWFsXCIsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSB0byBwcm92aWRlIGFuIGF2YXRhclwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0RmlsZShlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2F2YXRhcic+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD0ndXBsb2FkIHBpY3R1cmUnXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD0nc3BhbidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBob3RvQ2FtZXJhIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICB7ZXJyb3JzLmF2YXRhciAmJiBlcnJvcnMuYXZhdGFyLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGFuIGF2YXRhcjwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPENoZWNrQm94PlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgWW91IGhhdmUgdG8gYWNjZXB0IG91cntcIiBcIn1cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wcml2YWN5Jz5cclxuICAgICAgICAgICAgPGE+UHJpdmFjeSBQb2xpY3k8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgbmFtZT0ncG9saWN5J1xyXG4gICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihcInBvbGljeVwiLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSBhY2NlcHQgb3VyIHByaXZhY3kgcG9saWN5IFwiLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtlcnJvcnMucG9saWN5ICYmIGVycm9ycy5wb2xpY3kudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgYWNjZXB0IG91ciBwcml2YWN5IHBvbGljeTwvRXJyb3JTcGFuPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0NoZWNrQm94PlxyXG5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5Jz5cclxuICAgICAgICAgIENyZWF0ZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==