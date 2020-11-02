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
    console.log(data);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
      children: "Create an account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
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
          lineNumber: 116,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, _this), errors.firstName && errors.firstName.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a first name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
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
          lineNumber: 133,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, _this), errors.lastName && errors.lastName.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a last name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
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
          lineNumber: 150,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, _this), errors.email && errors.email.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 11
      }, _this), errors.email && errors.email.type === "pattern" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a correct email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
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
          lineNumber: 176,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, _this), errors.password && errors.password.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
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
        lineNumber: 192,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "avatar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
          color: "primary",
          "aria-label": "upload picture",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, _this), errors.avatar && errors.avatar.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
        children: "Please provide an avatar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CheckBox, {
        children: [" ", "You have to accept our", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/privacy",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "Privacy Policy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
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
          lineNumber: 225,
          columnNumber: 11
        }, _this), errors.policy && errors.policy.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorSpan, {
          children: "Please accept our privacy policy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        type: "submit",
        variant: "contained",
        color: "secondary",
        children: "Create"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3RlckZvcm0vaW5kZXguanMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZvcm0iLCJmb3JtIiwiRXJyb3JTcGFuIiwic3BhbiIsIkhlYWRlciIsImgyIiwiSW5wdXRFbGVtZW50IiwiSW5wdXQiLCJDaGVja0JveCIsIkZvcm1MYWJlbCIsImRlZmF1bHRWYWx1ZXMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwb2xpY3kiLCJhdmF0YXIiLCJSZWdpc3RlckZvcm0iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJzZXRFcnJvciIsInJlc2V0IiwicmVnaXN0ZXJVc2VyIiwiZGF0YSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicmVxdWlyZWQiLCJ0eXBlIiwibWVzc2FnZSIsInBhdHRlcm4iLCJ2YWx1ZSIsImUiLCJzZXRGaWxlIiwidGFyZ2V0IiwiZmlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK09BQWI7S0FBTUYsTztBQWNOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtBQUFBO0FBQUE7QUFBQSwrV0FBVjtNQUFNRCxJO0FBK0JOLElBQU1FLFNBQVMsR0FBR0oseURBQU0sQ0FBQ0ssSUFBVjtBQUFBO0FBQUE7QUFBQSxpQ0FBZjtNQUFNRCxTO0FBS04sSUFBTUUsTUFBTSxHQUFHTix5REFBTSxDQUFDTyxFQUFWO0FBQUE7QUFBQTtBQUFBLHFDQUFaO01BQU1ELE07QUFLTixJQUFNRSxZQUFZLEdBQUdSLGlFQUFNLENBQUNTLCtEQUFE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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBTUUscUVBQUMsMERBQUQ7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLGtCQUFRLEVBQUVaLFFBQVEsQ0FBQztBQUFFVyxvQkFBUSxFQUFFO0FBQVosV0FBRCxDQUZwQjtBQUdFLGtCQUFRLEVBQUUsb0JBQU07QUFDZFIsb0JBQVEsQ0FBQyxRQUFELEVBQVc7QUFDakJTLGtCQUFJLEVBQUUsUUFEVztBQUVqQkMscUJBQU8sRUFBRTtBQUZRLGFBQVgsQ0FBUjtBQUlEO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixFQWdCR1gsTUFBTSxDQUFDTixNQUFQLElBQWlCTSxNQUFNLENBQUNOLE1BQVAsQ0FBY2dCLElBQWQsS0FBdUIsVUFBeEMsaUJBQ0MscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekdGLGVBOEhFLHFFQUFDLHdEQUFEO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFDLFdBQTlCO0FBQTBDLGFBQUssRUFBQyxXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdJRCxDQWxKRDs7R0FBTWQsWTtVQUN3REMsdUQ7OztNQUR4REQsWTtBQW9KU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuMDk0MWRiMGZmNmViMDYzYWNlZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dFwiO1xyXG5pbXBvcnQgeyBGb3JtTGFiZWwsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcIi4uL0FsZXJ0L2luZGV4XCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBQaG90b0NhbWVyYSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob3RvQ2FtZXJhXCI7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWluLXdpZHRoOiAzNXZ3O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWluLWhlaWdodDogNDB2aDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAwIHJnYigwIDAgMCAvIDYwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmID4gLk11aUJ1dHRvbi1jb250YWluZWRTZWNvbmRhcnkge1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I3M2QxY2JmO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNjAwYmY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLk11aUZvcm1MYWJlbC1yb290IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gICYgPiAuaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmID4gbGFiZWwgPiAuTXVpSWNvbkJ1dHRvbi1jb2xvclByaW1hcnkge1xyXG4gICAgY29sb3I6ICNmZjM2MDBiZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEVycm9yU3BhbiA9IHN0eWxlZC5zcGFuYFxyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmgyYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0RWxlbWVudCA9IHN0eWxlZChJbnB1dClgXHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICYgPiAuTXVpSW5wdXRCYXNlLWlucHV0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDaGVja0JveCA9IHN0eWxlZChGb3JtTGFiZWwpYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG5cclxuICAmID4gLk11aUNoZWNrYm94LXJvb3Qge1xyXG4gICAgY29sb3I6ICNiNzNkMWNiZjtcclxuICB9XHJcblxyXG4gICYgPiAuTXVpQ2hlY2tib3gtY29sb3JTZWNvbmRhcnkuTXVpLWNoZWNrZWQge1xyXG4gICAgY29sb3I6ICNiNzNkMWNiZjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBkZWZhdWx0VmFsdWVzID0ge1xyXG4gIGZpcnN0TmFtZTogbnVsbCxcclxuICBsYXN0TmFtZTogbnVsbCxcclxuICBlbWFpbDogbnVsbCxcclxuICBwYXNzd29yZDogbnVsbCxcclxuICBwb2xpY3k6IGZhbHNlLFxyXG4gIGF2YXRhcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycywgc2V0RXJyb3IsIHJlc2V0IH0gPSB1c2VGb3JtKHtcclxuICAgIGRlZmF1bHRWYWx1ZXMsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlZ2lzdGVyVXNlciA9IChkYXRhLCBldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPEhlYWRlcj5DcmVhdGUgYW4gYWNjb3VudDwvSGVhZGVyPlxyXG5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChyZWdpc3RlclVzZXIpfT5cclxuICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0RWxlbWVudFxyXG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICBuYW1lPSdmaXJzdE5hbWUnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdGaXJzdCBOYW1lJ1xyXG4gICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihcImZpcnN0TmFtZVwiLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSB0byBwcm92aWRlIGEgZmlyc3QgbmFtZVwiLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICB7ZXJyb3JzLmZpcnN0TmFtZSAmJiBlcnJvcnMuZmlyc3ROYW1lLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGEgZmlyc3QgbmFtZTwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgbmFtZT0nbGFzdE5hbWUnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdMYXN0IE5hbWUnXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVycm9yKFwibGFzdE5hbWVcIiwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgdG8gcHJvdmlkZSBhIGxhc3QgbmFtZVwiLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICB7ZXJyb3JzLmxhc3ROYW1lICYmIGVycm9ycy5sYXN0TmFtZS50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIGxhc3QgbmFtZTwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBlbWFpbCdcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBwYXR0ZXJuOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiaW52YWxpZCBlbWFpbCBhZGRyZXNzXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJlbWFpbFwiLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSB0byBhIGVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIHtlcnJvcnMuZW1haWwgJiYgZXJyb3JzLmVtYWlsLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGEgZW1haWw8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtlcnJvcnMuZW1haWwgJiYgZXJyb3JzLmVtYWlsLnR5cGUgPT09IFwicGF0dGVyblwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBjb3JyZWN0IGVtYWlsPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0RWxlbWVudFxyXG4gICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBQYXNzd29yZCdcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJwYXNzd29yZFwiLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSB0byBwcm92aWRlIGEgcGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmQudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBwYXNzd29yZDwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPElucHV0RWxlbWVudFxyXG4gICAgICAgICAgdHlwZT0nZmlsZSdcclxuICAgICAgICAgIG5hbWU9J2F2YXRhcidcclxuICAgICAgICAgIGlkPSdhdmF0YXInXHJcbiAgICAgICAgICBhY2NlcHQ9J2ltYWdlLyonXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2hpZGRlbidcclxuICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKFwicGljdHVyZVwiLCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIHByb3ZpZGUgYW4gYXZhdGFyXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRGaWxlKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nYXZhdGFyJz5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPSd1cGxvYWQgcGljdHVyZSdcclxuICAgICAgICAgICAgY29tcG9uZW50PSdzcGFuJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGhvdG9DYW1lcmEgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIHtlcnJvcnMuYXZhdGFyICYmIGVycm9ycy5hdmF0YXIudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYW4gYXZhdGFyPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Q2hlY2tCb3g+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICBZb3UgaGF2ZSB0byBhY2NlcHQgb3Vye1wiIFwifVxyXG4gICAgICAgICAgPExpbmsgaHJlZj0nL3ByaXZhY3knPlxyXG4gICAgICAgICAgICA8YT5Qcml2YWN5IFBvbGljeTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICBuYW1lPSdwb2xpY3knXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVycm9yKFwicG9saWN5XCIsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWFudWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIGFjY2VwdCBvdXIgcHJpdmFjeSBwb2xpY3kgXCIsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2Vycm9ycy5wb2xpY3kgJiYgZXJyb3JzLnBvbGljeS50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBhY2NlcHQgb3VyIHByaXZhY3kgcG9saWN5PC9FcnJvclNwYW4+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ2hlY2tCb3g+XHJcblxyXG4gICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknPlxyXG4gICAgICAgICAgQ3JlYXRlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9