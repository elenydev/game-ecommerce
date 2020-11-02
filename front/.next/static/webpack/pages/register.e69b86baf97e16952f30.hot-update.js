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

  var registerUser = function registerUser(data, event) {
    event.preventDefault();
    var storageRef = app.storageRef().ref();
    console.log(data);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
      children: "Create an account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
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
          lineNumber: 118,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, _this), errors.firstName && errors.firstName.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a first name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
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
          lineNumber: 135,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this), errors.lastName && errors.lastName.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a last name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
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
          lineNumber: 152,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, _this), errors.email && errors.email.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 11
      }, _this), errors.email && errors.email.type === "pattern" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a correct email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
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
          lineNumber: 178,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, _this), errors.password && errors.password.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        name: "avatar",
        id: "avatar",
        accept: "image/*",
        className: "hidden",
        ref: register,
        required: true,
        onChange: function onChange(e) {
          setError("picture", {
            type: "manual",
            message: "You have to provide an avatar"
          });
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "avatar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
          color: "primary",
          "aria-label": "upload picture",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 9
      }, _this), errors.avatar && errors.avatar.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide an avatar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CheckBox, {
        children: [" ", "You have to accept our", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/privacy",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "Privacy Policy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
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
          lineNumber: 227,
          columnNumber: 11
        }, _this), errors.policy && errors.policy.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
          children: "Please accept our privacy policy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        type: "submit",
        variant: "contained",
        color: "secondary",
        children: "Create"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }, _this);
};

_s(RegisterForm, "VfD5fQQClLmpmB0QDJLztbQYVL4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3RlckZvcm0vaW5kZXguanMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZvcm0iLCJmb3JtIiwiRXJyb3JTcGFuIiwic3BhbiIsIkhlYWRlciIsImgyIiwiSW5wdXRFbGVtZW50IiwiSW5wdXQiLCJDaGVja0JveCIsIkZvcm1MYWJlbCIsImRlZmF1bHRWYWx1ZXMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwb2xpY3kiLCJhdmF0YXIiLCJSZWdpc3RlckZvcm0iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJzZXRFcnJvciIsInJlc2V0IiwicmVnaXN0ZXJVc2VyIiwiZGF0YSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9yYWdlUmVmIiwiYXBwIiwicmVmIiwiY29uc29sZSIsImxvZyIsInJlcXVpcmVkIiwidHlwZSIsIm1lc3NhZ2UiLCJwYXR0ZXJuIiwidmFsdWUiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtPQUFiO0tBQU1GLE87QUFjTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7QUFBQTtBQUFBO0FBQUEsK1dBQVY7TUFBTUQsSTtBQStCTixJQUFNRSxTQUFTLEdBQUdKLHlEQUFNLENBQUNLLElBQVY7QUFBQTtBQUFBO0FBQUEsaUNBQWY7TUFBTUQsUztBQUtOLElBQU1FLE1BQU0sR0FBR04seURBQU0sQ0FBQ08sRUFBVjtBQUFBO0FBQUE7QUFBQSxxQ0FBWjtNQUFNRCxNO0FBS04sSUFBTUUsWUFBWSxHQUFHUixpRUFBTSxDQUFDUywrREFBRCxD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QUE7QUFBQTtBQUFBLGlCQUhGLGVBTUUscUVBQUMsMERBQUQ7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLGtCQUFRLEVBQUVmLFFBQVEsQ0FBQztBQUFFYyxvQkFBUSxFQUFFO0FBQVosV0FBRCxDQUZwQjtBQUdFLGtCQUFRLEVBQUUsb0JBQU07QUFDZFgsb0JBQVEsQ0FBQyxRQUFELEVBQVc7QUFDakJZLGtCQUFJLEVBQUUsUUFEVztBQUVqQkMscUJBQU8sRUFBRTtBQUZRLGFBQVgsQ0FBUjtBQUlEO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixFQWdCR2QsTUFBTSxDQUFDTixNQUFQLElBQWlCTSxNQUFNLENBQUNOLE1BQVAsQ0FBY21CLElBQWQsS0FBdUIsVUFBeEMsaUJBQ0MscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekdGLGVBOEhFLHFFQUFDLHdEQUFEO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFDLFdBQTlCO0FBQTBDLGFBQUssRUFBQyxXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdJRCxDQXBKRDs7R0FBTWpCLFk7VUFDd0RDLHVEOzs7TUFEeERELFk7QUFzSlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLmU2OWI4NmJhZjk3ZTE2OTUyZjMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIjtcclxuaW1wb3J0IHsgRm9ybUxhYmVsLCBCdXR0b24sIENoZWNrYm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLi9BbGVydC9pbmRleFwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgUGhvdG9DYW1lcmEgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYVwiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1pbi13aWR0aDogMzV2dztcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwdmg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMCByZ2IoMCAwIDAgLyA2MCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgJiA+IC5NdWlCdXR0b24tY29udGFpbmVkU2Vjb25kYXJ5IHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNzNkMWNiZjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzYwMGJmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IC5NdWlGb3JtTGFiZWwtcm9vdCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAmID4gLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJiA+IGxhYmVsID4gLk11aUljb25CdXR0b24tY29sb3JQcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjZmYzNjAwYmYgIWltcG9ydGFudDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFcnJvclNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oMmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dEVsZW1lbnQgPSBzdHlsZWQoSW5wdXQpYFxyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmID4gLk11aUlucHV0QmFzZS1pbnB1dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2hlY2tCb3ggPSBzdHlsZWQoRm9ybUxhYmVsKWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDE1cHggMDtcclxuXHJcbiAgJiA+IC5NdWlDaGVja2JveC1yb290IHtcclxuICAgIGNvbG9yOiAjYjczZDFjYmY7XHJcbiAgfVxyXG5cclxuICAmID4gLk11aUNoZWNrYm94LWNvbG9yU2Vjb25kYXJ5Lk11aS1jaGVja2VkIHtcclxuICAgIGNvbG9yOiAjYjczZDFjYmY7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcclxuICBmaXJzdE5hbWU6IG51bGwsXHJcbiAgbGFzdE5hbWU6IG51bGwsXHJcbiAgZW1haWw6IG51bGwsXHJcbiAgcGFzc3dvcmQ6IG51bGwsXHJcbiAgcG9saWN5OiBmYWxzZSxcclxuICBhdmF0YXI6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBSZWdpc3RlckZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMsIHNldEVycm9yLCByZXNldCB9ID0gdXNlRm9ybSh7XHJcbiAgICBkZWZhdWx0VmFsdWVzLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCByZWdpc3RlclVzZXIgPSAoZGF0YSwgZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBzdG9yYWdlUmVmID0gYXBwLnN0b3JhZ2VSZWYoKS5yZWYoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxIZWFkZXI+Q3JlYXRlIGFuIGFjY291bnQ8L0hlYWRlcj5cclxuXHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQocmVnaXN0ZXJVc2VyKX0+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgbmFtZT0nZmlyc3ROYW1lJ1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRmlyc3QgTmFtZSdcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJmaXJzdE5hbWVcIiwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgdG8gcHJvdmlkZSBhIGZpcnN0IG5hbWVcIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5maXJzdE5hbWUgJiYgZXJyb3JzLmZpcnN0TmFtZS50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIGZpcnN0IG5hbWU8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgIG5hbWU9J2xhc3ROYW1lJ1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nTGFzdCBOYW1lJ1xyXG4gICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihcImxhc3ROYW1lXCIsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWFudWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIHByb3ZpZGUgYSBsYXN0IG5hbWVcIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5sYXN0TmFtZSAmJiBlcnJvcnMubGFzdE5hbWUudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBsYXN0IG5hbWU8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgZW1haWwnXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgcGF0dGVybjoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2ksXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcImludmFsaWQgZW1haWwgYWRkcmVzc1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVycm9yKFwiZW1haWxcIiwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgdG8gYSBlbWFpbFwiLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIGVycm9ycy5lbWFpbC50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIGVtYWlsPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIGVycm9ycy5lbWFpbC50eXBlID09PSBcInBhdHRlcm5cIiAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGEgY29ycmVjdCBlbWFpbDwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgUGFzc3dvcmQnXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVycm9yKFwicGFzc3dvcmRcIiwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgdG8gcHJvdmlkZSBhIHBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGEgcGFzc3dvcmQ8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT0nZmlsZSdcclxuICAgICAgICAgIG5hbWU9J2F2YXRhcidcclxuICAgICAgICAgIGlkPSdhdmF0YXInXHJcbiAgICAgICAgICBhY2NlcHQ9J2ltYWdlLyonXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2hpZGRlbidcclxuICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKFwicGljdHVyZVwiLCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIHByb3ZpZGUgYW4gYXZhdGFyXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdhdmF0YXInPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9J3VwbG9hZCBwaWN0dXJlJ1xyXG4gICAgICAgICAgICBjb21wb25lbnQ9J3NwYW4nXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQaG90b0NhbWVyYSAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5hdmF0YXIgJiYgZXJyb3JzLmF2YXRhci50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhbiBhdmF0YXI8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxDaGVja0JveD5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIFlvdSBoYXZlIHRvIGFjY2VwdCBvdXJ7XCIgXCJ9XHJcbiAgICAgICAgICA8TGluayBocmVmPScvcHJpdmFjeSc+XHJcbiAgICAgICAgICAgIDxhPlByaXZhY3kgUG9saWN5PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgIG5hbWU9J3BvbGljeSdcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJwb2xpY3lcIiwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgYWNjZXB0IG91ciBwcml2YWN5IHBvbGljeSBcIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7ZXJyb3JzLnBvbGljeSAmJiBlcnJvcnMucG9saWN5LnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIGFjY2VwdCBvdXIgcHJpdmFjeSBwb2xpY3k8L0Vycm9yU3Bhbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9DaGVja0JveD5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeSc+XHJcbiAgICAgICAgICBDcmVhdGVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlckZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=