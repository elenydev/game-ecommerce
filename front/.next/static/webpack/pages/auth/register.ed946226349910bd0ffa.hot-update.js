webpackHotUpdate_N_E("pages/auth/register",{

/***/ "./components/RegisterForm/index.js":
/*!******************************************!*\
  !*** ./components/RegisterForm/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Alert_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Alert/index */ "./components/Alert/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_11__);




var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\RegisterForm\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "RegisterForm__Wrapper",
  componentId: "sc-1ngtmd-0"
})(["display:flex;align-items:center;flex-direction:column;justify-content:space-between;min-width:35vw;max-width:500px;padding:10px;color:white;box-shadow:2px 2px 8px 0 rgb(0 0 0 / 60%);background-color:rgba(0,0,0,0.3);"]);
_c = Wrapper;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].form.withConfig({
  displayName: "RegisterForm__Form",
  componentId: "sc-1ngtmd-1"
})(["display:flex;width:100%;height:100%;flex-direction:column;justify-content:space-between;align-items:center;color:white;& > .MuiButton-containedSecondary{margin:15px;background-color:#b73d1cbf;&:hover{background-color:#ff3600bf;}}& > .MuiFormLabel-root{color:white;}& > .hidden{display:none;}& > label > .MuiIconButton-colorPrimary{color:#ff3600bf !important;}"]);
_c2 = Form;
var LoginDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "RegisterForm__LoginDiv",
  componentId: "sc-1ngtmd-2"
})(["text-align:center;margin:5px 0;transition:0.3s ease-in-out;position:relative;&:before{bottom:0;width:100%;background-color:white;content:\"\";position:absolute;transition:border-bottom-color 200ms cubic-bezier(0.4,0,0.2,1) 0ms;border-bottom:1px solid rgba(0,0,0,0.5);pointer-events:none;}&:hover::before{border-bottom:1px solid white;}"]);
_c3 = LoginDiv;
var ErrorSpan = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({
  displayName: "RegisterForm__ErrorSpan",
  componentId: "sc-1ngtmd-3"
})(["color:#ff5a5a;font-size:12px;& > a{cursor:pointer;}"]);
_c4 = ErrorSpan;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h2.withConfig({
  displayName: "RegisterForm__Header",
  componentId: "sc-1ngtmd-4"
})(["display:flex;font-weight:700;"]);
_c5 = Header;
var InputElement = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "RegisterForm__InputElement",
  componentId: "sc-1ngtmd-5"
})(["margin:8px 0;color:white;& > .MuiInputBase-input{color:white;}"]);
_c6 = InputElement;
var CheckBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormLabel"]).withConfig({
  displayName: "RegisterForm__CheckBox",
  componentId: "sc-1ngtmd-6"
})(["display:flex;align-items:center;justify-content:center;flex-direction:column;margin:15px 0;& > .MuiCheckbox-root{color:#b73d1cbf;}& > .MuiCheckbox-colorSecondary.Mui-checked{color:#b73d1cbf;}"]);
_c7 = CheckBox;
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

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])({
    defaultValues: defaultValues
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors,
      setError = _useForm.setError,
      reset = _useForm.reset;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      responseType = _useState[0],
      setResponseType = _useState[1];

  var registerUser = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, event) {
      var firstName, lastName, email, password, avatar, policy, user, send, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              firstName = data.firstName, lastName = data.lastName, email = data.email, password = data.password, avatar = data.avatar, policy = data.policy;
              user = new FormData();
              user.append("firstName", firstName);
              user.append("lastName", lastName);
              user.append("email", email);
              user.append("password", password);
              user.append("avatar", avatar[0]);
              user.append("policy", policy);
              _context.prev = 9;
              _context.next = 12;
              return fetch("http://localhost:8080/signUp", {
                method: "POST",
                body: user
              });

            case 12:
              send = _context.sent;
              _context.next = 15;
              return send.json();

            case 15:
              response = _context.sent;
              console.log(response);

              if (response.user) {
                setResponseType(response.user);
              } else if (response.message) {
                setResponseType(response.message);
              }

              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](9);
              console.log(_context.t0);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[9, 20]]);
    }));

    return function registerUser(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Wrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Header, {
      children: "Create an account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Form, {
      onSubmit: handleSubmit(registerUser),
      encType: "",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InputElement, {
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
          lineNumber: 167,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, _this), errors.firstName && errors.firstName.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a first name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InputElement, {
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
          lineNumber: 184,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, _this), errors.lastName && errors.lastName.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a last name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InputElement, {
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
          lineNumber: 201,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }, _this), errors.email && errors.email.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 11
      }, _this), errors.email && errors.email.type === "pattern" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a correct email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InputElement, {
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
          lineNumber: 227,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 9
      }, _this), errors.password && errors.password.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        ref: register({
          required: true
        }),
        name: "avatar",
        type: "file",
        accept: ".png, .jpg, .jpeg",
        id: "avatar",
        className: "hidden",
        onChange: function onChange(e) {
          setError("avatar", {
            type: "manual",
            message: "You have to provide an avatar"
          });
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "avatar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          color: "primary",
          "aria-label": "upload picture",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 9
      }, _this), errors.avatar && errors.avatar.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide an avatar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CheckBox, {
        children: [" ", "You have to accept our", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/privacy",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              children: "Privacy Policy"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], {
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
          lineNumber: 277,
          columnNumber: 11
        }, _this), errors.policy && errors.policy.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
          children: "Please accept our privacy policy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        type: "submit",
        variant: "contained",
        color: "secondary",
        children: "Create"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(LoginDiv, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/auth/login",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          children: "Or switch to sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 7
    }, _this), responseType && responseType.user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Alert_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
      message: "User succesfully created",
      shouldOpen: true,
      variant: "success"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 9
    }, _this) || reponseType && responseType.message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Alert_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
      message: responseType.message,
      shouldOpen: true,
      variant: "error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 5
  }, _this);
};

_s(RegisterForm, "mJUUbHIGc/XJMj+vjYWN5OsfeUc=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"]];
});

_c8 = RegisterForm;
/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "LoginDiv");
$RefreshReg$(_c4, "ErrorSpan");
$RefreshReg$(_c5, "Header");
$RefreshReg$(_c6, "InputElement");
$RefreshReg$(_c7, "CheckBox");
$RefreshReg$(_c8, "RegisterForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3RlckZvcm0vaW5kZXguanMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZvcm0iLCJmb3JtIiwiTG9naW5EaXYiLCJFcnJvclNwYW4iLCJzcGFuIiwiSGVhZGVyIiwiaDIiLCJJbnB1dEVsZW1lbnQiLCJJbnB1dCIsIkNoZWNrQm94IiwiRm9ybUxhYmVsIiwiZGVmYXVsdFZhbHVlcyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImF2YXRhciIsInBvbGljeSIsIlJlZ2lzdGVyRm9ybSIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInNldEVycm9yIiwicmVzZXQiLCJ1c2VTdGF0ZSIsInJlc3BvbnNlVHlwZSIsInNldFJlc3BvbnNlVHlwZSIsInJlZ2lzdGVyVXNlciIsImRhdGEiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXNlciIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwic2VuZCIsImpzb24iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJ0eXBlIiwicGF0dGVybiIsInZhbHVlIiwiZSIsInJlcG9uc2VUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK05BQWI7S0FBTUYsTztBQWFOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtBQUFBO0FBQUE7QUFBQSwrV0FBVjtNQUFNRCxJO0FBK0JOLElBQU1FLFFBQVEsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFB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LHFFQUFDLHdEQUFEO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFDLFdBQTlCO0FBQTBDLGFBQUssRUFBQyxXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQXFJRSxxRUFBQyxRQUFEO0FBQUEsNkJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFySUYsRUEwSUduQixZQUFZLElBQUlBLFlBQVksQ0FBQ00sSUFBN0IsaUJBQ0MscUVBQUMsb0RBQUQ7QUFDRSxhQUFPLEVBQUMsMEJBRFY7QUFFRSxnQkFBVSxFQUFFLElBRmQ7QUFHRSxhQUFPLEVBQUM7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsSUFPRWlCLFdBQVcsSUFBSXZCLFlBQVksQ0FBQ2lCLE9BQTVCLGlCQUNDLHFFQUFDLG9EQUFEO0FBRUUsYUFBTyxFQUFFakIsWUFBWSxDQUFDaUIsT0FGeEI7QUFJRyxnQkFBVSxFQUFFLElBSmY7QUFNRyxhQUFPLEVBQUM7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0pELENBbk1EOztHQUFNekIsWTtVQUN3REMsdUQ7OztNQUR4REQsWTtBQXFNU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9yZWdpc3Rlci5lZDk0NjIyNjM0OTkxMGJkMGZmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIjtcclxuaW1wb3J0IHsgRm9ybUxhYmVsLCBCdXR0b24sIENoZWNrYm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLi9BbGVydC9pbmRleFwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgUGhvdG9DYW1lcmEgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYVwiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1pbi13aWR0aDogMzV2dztcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IDAgcmdiKDAgMCAwIC8gNjAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICYgPiAuTXVpQnV0dG9uLWNvbnRhaW5lZFNlY29uZGFyeSB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjczZDFjYmY7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM2MDBiZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuTXVpRm9ybUxhYmVsLXJvb3Qge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJiA+IC5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICYgPiBsYWJlbCA+IC5NdWlJY29uQnV0dG9uLWNvbG9yUHJpbWFyeSB7XHJcbiAgICBjb2xvcjogI2ZmMzYwMGJmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTG9naW5EaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDVweCAwO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMjAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEVycm9yU3BhbiA9IHN0eWxlZC5zcGFuYFxyXG4gIGNvbG9yOiAjZmY1YTVhO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgJiA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oMmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dEVsZW1lbnQgPSBzdHlsZWQoSW5wdXQpYFxyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmID4gLk11aUlucHV0QmFzZS1pbnB1dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2hlY2tCb3ggPSBzdHlsZWQoRm9ybUxhYmVsKWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDE1cHggMDtcclxuXHJcbiAgJiA+IC5NdWlDaGVja2JveC1yb290IHtcclxuICAgIGNvbG9yOiAjYjczZDFjYmY7XHJcbiAgfVxyXG5cclxuICAmID4gLk11aUNoZWNrYm94LWNvbG9yU2Vjb25kYXJ5Lk11aS1jaGVja2VkIHtcclxuICAgIGNvbG9yOiAjYjczZDFjYmY7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcclxuICBmaXJzdE5hbWU6IG51bGwsXHJcbiAgbGFzdE5hbWU6IG51bGwsXHJcbiAgZW1haWw6IG51bGwsXHJcbiAgcGFzc3dvcmQ6IG51bGwsXHJcbiAgYXZhdGFyOiBudWxsLFxyXG4gIHBvbGljeTogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycywgc2V0RXJyb3IsIHJlc2V0IH0gPSB1c2VGb3JtKHtcclxuICAgIGRlZmF1bHRWYWx1ZXMsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtyZXNwb25zZVR5cGUsIHNldFJlc3BvbnNlVHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKGRhdGEsIGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGF2YXRhciwgcG9saWN5IH0gPSBkYXRhO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHVzZXIuYXBwZW5kKFwiZmlyc3ROYW1lXCIsIGZpcnN0TmFtZSk7XHJcbiAgICB1c2VyLmFwcGVuZChcImxhc3ROYW1lXCIsIGxhc3ROYW1lKTtcclxuICAgIHVzZXIuYXBwZW5kKFwiZW1haWxcIiwgZW1haWwpO1xyXG4gICAgdXNlci5hcHBlbmQoXCJwYXNzd29yZFwiLCBwYXNzd29yZCk7XHJcbiAgICB1c2VyLmFwcGVuZChcImF2YXRhclwiLCBhdmF0YXJbMF0pO1xyXG4gICAgdXNlci5hcHBlbmQoXCJwb2xpY3lcIiwgcG9saWN5KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzZW5kID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvc2lnblVwXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IHVzZXIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNlbmQuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS51c2VyKSB7XHJcbiAgICAgICAgc2V0UmVzcG9uc2VUeXBlKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLm1lc3NhZ2UpIHtcclxuICAgICAgICBzZXRSZXNwb25zZVR5cGUocmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPEhlYWRlcj5DcmVhdGUgYW4gYWNjb3VudDwvSGVhZGVyPlxyXG5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChyZWdpc3RlclVzZXIpfSBlbmNUeXBlPScnPlxyXG4gICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgIG5hbWU9J2ZpcnN0TmFtZSdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0ZpcnN0IE5hbWUnXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVycm9yKFwiZmlyc3ROYW1lXCIsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWFudWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIHByb3ZpZGUgYSBmaXJzdCBuYW1lXCIsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIHtlcnJvcnMuZmlyc3ROYW1lICYmIGVycm9ycy5maXJzdE5hbWUudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBmaXJzdCBuYW1lPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0RWxlbWVudFxyXG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICBuYW1lPSdsYXN0TmFtZSdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0xhc3QgTmFtZSdcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJsYXN0TmFtZVwiLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSB0byBwcm92aWRlIGEgbGFzdCBuYW1lXCIsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIHtlcnJvcnMubGFzdE5hbWUgJiYgZXJyb3JzLmxhc3ROYW1lLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGEgbGFzdCBuYW1lPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0RWxlbWVudFxyXG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIGVtYWlsJ1xyXG4gICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHBhdHRlcm46IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJpbnZhbGlkIGVtYWlsIGFkZHJlc3NcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihcImVtYWlsXCIsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWFudWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIGEgZW1haWxcIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5lbWFpbCAmJiBlcnJvcnMuZW1haWwudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBlbWFpbDwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Vycm9ycy5lbWFpbCAmJiBlcnJvcnMuZW1haWwudHlwZSA9PT0gXCJwYXR0ZXJuXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIGNvcnJlY3QgZW1haWw8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIFBhc3N3b3JkJ1xyXG4gICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihcInBhc3N3b3JkXCIsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWFudWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIHByb3ZpZGUgYSBwYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZC50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIHBhc3N3b3JkPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgIG5hbWU9J2F2YXRhcidcclxuICAgICAgICAgIHR5cGU9J2ZpbGUnXHJcbiAgICAgICAgICBhY2NlcHQ9Jy5wbmcsIC5qcGcsIC5qcGVnJ1xyXG4gICAgICAgICAgaWQ9J2F2YXRhcidcclxuICAgICAgICAgIGNsYXNzTmFtZT0naGlkZGVuJ1xyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKFwiYXZhdGFyXCIsIHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgdG8gcHJvdmlkZSBhbiBhdmF0YXJcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2F2YXRhcic+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD0ndXBsb2FkIHBpY3R1cmUnXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD0nc3BhbidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBob3RvQ2FtZXJhIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICB7ZXJyb3JzLmF2YXRhciAmJiBlcnJvcnMuYXZhdGFyLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGFuIGF2YXRhcjwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPENoZWNrQm94PlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgWW91IGhhdmUgdG8gYWNjZXB0IG91cntcIiBcIn1cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wcml2YWN5Jz5cclxuICAgICAgICAgICAgPEVycm9yU3Bhbj5cclxuICAgICAgICAgICAgICA8YT5Qcml2YWN5IFBvbGljeTwvYT5cclxuICAgICAgICAgICAgPC9FcnJvclNwYW4+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgbmFtZT0ncG9saWN5J1xyXG4gICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihcInBvbGljeVwiLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSBhY2NlcHQgb3VyIHByaXZhY3kgcG9saWN5IFwiLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtlcnJvcnMucG9saWN5ICYmIGVycm9ycy5wb2xpY3kudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgYWNjZXB0IG91ciBwcml2YWN5IHBvbGljeTwvRXJyb3JTcGFuPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0NoZWNrQm94PlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknPlxyXG4gICAgICAgICAgQ3JlYXRlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPExvZ2luRGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy9hdXRoL2xvZ2luJz5cclxuICAgICAgICAgIDxhPk9yIHN3aXRjaCB0byBzaWduIGluPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9Mb2dpbkRpdj5cclxuICAgICAge3Jlc3BvbnNlVHlwZSAmJiByZXNwb25zZVR5cGUudXNlciAmJiAoXHJcbiAgICAgICAgPEFsZXJ0XHJcbiAgICAgICAgICBtZXNzYWdlPSdVc2VyIHN1Y2Nlc2Z1bGx5IGNyZWF0ZWQnXHJcbiAgICAgICAgICBzaG91bGRPcGVuPXt0cnVlfVxyXG4gICAgICAgICAgdmFyaWFudD0nc3VjY2VzcydcclxuICAgICAgICAvPlxyXG4gICAgICApIHx8XHJcbiAgICAgICAgKHJlcG9uc2VUeXBlICYmIHJlc3BvbnNlVHlwZS5tZXNzYWdlICYmIChcclxuICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBtZXNzYWdlPXtyZXNwb25zZVR5cGUubWVzc2FnZX1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgc2hvdWxkT3Blbj17dHJ1ZX1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgdmFyaWFudD0nZXJyb3InXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9