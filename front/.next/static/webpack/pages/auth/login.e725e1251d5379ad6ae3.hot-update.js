webpackHotUpdate_N_E("pages/auth/login",{

/***/ "./components/Auth/index.js":
/*!**********************************!*\
  !*** ./components/Auth/index.js ***!
  \**********************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Alert_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Alert/index */ "./components/Alert/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Reducers_userSlice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Reducers/userSlice.js */ "./Reducers/userSlice.js");




var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\Auth\\index.js",
    _this = undefined,
    _s = $RefreshSig$();













var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Auth__Wrapper",
  componentId: "d3fcbm-0"
})(["display:flex;align-items:center;flex-direction:column;justify-content:space-between;min-width:35vw;max-width:500px;padding:10px;color:white;box-shadow:2px 2px 8px 0 rgb(0 0 0 / 60%);background-color:rgba(0,0,0,0.3);"]);
_c = Wrapper;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].form.withConfig({
  displayName: "Auth__Form",
  componentId: "d3fcbm-1"
})(["display:flex;width:100%;height:100%;flex-direction:column;justify-content:space-between;align-items:center;color:white;& > .MuiButton-containedSecondary{margin:15px;background-color:#b73d1cbf;&:hover{background-color:#ff3600bf;}}& > .MuiFormLabel-root{color:white;}& > .hidden{display:none;}& > label > .MuiIconButton-colorPrimary{color:#ff3600bf !important;}"]);
_c2 = Form;
var ErrorSpan = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].span.withConfig({
  displayName: "Auth__ErrorSpan",
  componentId: "d3fcbm-2"
})(["color:#ff5a5a;font-size:12px;"]);
_c3 = ErrorSpan;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h2.withConfig({
  displayName: "Auth__Header",
  componentId: "d3fcbm-3"
})(["display:flex;font-weight:700;"]);
_c4 = Header;
var InputElement = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "Auth__InputElement",
  componentId: "d3fcbm-4"
})(["margin:8px 0;color:white;& > .MuiInputBase-input{color:white;}"]);
_c5 = InputElement;
var defaultValues = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  avatar: null,
  policy: null
};

var Login = function Login() {
  _s();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])({
    defaultValues: defaultValues
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors,
      setError = _useForm.setError,
      reset = _useForm.reset;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      responseType = _useState[0],
      setResponseType = _useState[1];

  var clearAlert = function clearAlert() {
    return setTimeout(function () {
      return setResponseType(null);
    }, 999);
  };

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useDispatch"])();

  var loginUser = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, event) {
      var send, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.prev = 1;
              _context.next = 4;
              return fetch("http://localhost:8080/signIn", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 4:
              send = _context.sent;
              _context.next = 7;
              return send.json();

            case 7:
              response = _context.sent;
              console.log(response);

              if (response) {
                setResponseType(response);

                if (response.user) {
                  setTimeout(function () {
                    dispatch(Object(_Reducers_userSlice_js__WEBPACK_IMPORTED_MODULE_14__["setUser"])(response.user));
                    reset();
                    router.push("/auth/account/cart");
                  }, 600);
                }
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              setResponseType({
                message: "Some error occured, try again"
              });

            case 15:
              clearAlert();

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    }));

    return function loginUser(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Wrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Header, {
      children: "Sign in"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Form, {
      onSubmit: handleSubmit(loginUser),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormLabel"], {
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
              message: "You have to provide a email"
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, _this), errors.email && errors.email.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }, _this), errors.email && errors.email.type === "pattern" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a correct email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormLabel"], {
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
          lineNumber: 156,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, _this), errors.password && errors.password.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        type: "submit",
        variant: "contained",
        color: "secondary",
        children: "Sign in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, _this), responseType && responseType.user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Alert_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
      message: "You are succesfully logged in",
      shouldOpen: true,
      variant: "success"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }, _this) || responseType && responseType.message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Alert_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
      message: responseType.message,
      shouldOpen: true,
      variant: "error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 5
  }, _this);
};

_s(Login, "hPCw1x3hWIoMrKn62A1ZJNlMvl0=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_13__["useDispatch"]];
});

_c6 = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "ErrorSpan");
$RefreshReg$(_c4, "Header");
$RefreshReg$(_c5, "InputElement");
$RefreshReg$(_c6, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL2luZGV4LmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIkVycm9yU3BhbiIsInNwYW4iLCJIZWFkZXIiLCJoMiIsIklucHV0RWxlbWVudCIsIklucHV0IiwiZGVmYXVsdFZhbHVlcyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImF2YXRhciIsInBvbGljeSIsIkxvZ2luIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwic2V0RXJyb3IiLCJyZXNldCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwicmVzcG9uc2VUeXBlIiwic2V0UmVzcG9uc2VUeXBlIiwiY2xlYXJBbGVydCIsInNldFRpbWVvdXQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibG9naW5Vc2VyIiwiZGF0YSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInNlbmQiLCJqc29uIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwidXNlciIsInNldFVzZXIiLCJwdXNoIiwibWVzc2FnZSIsInJlcXVpcmVkIiwicGF0dGVybiIsInZhbHVlIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrTkFBYjtLQUFNRixPO0FBYU4sSUFBTUcsSUFBSSxHQUFHRix5REFBTSxDQUFDRyxJQUFWO0FBQUE7QUFBQTtBQUFBLCtXQUFWO01BQU1ELEk7QUErQk4s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aUMsa0JBQUksRUFBRSxRQURhO0FBRW5CSixxQkFBTyxFQUFFO0FBRlUsYUFBYixDQUFSO0FBSUQ7QUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTNCRixFQXlDRzlCLE1BQU0sQ0FBQ1AsUUFBUCxJQUFtQk8sTUFBTSxDQUFDUCxRQUFQLENBQWdCeUMsSUFBaEIsS0FBeUIsVUFBNUMsaUJBQ0MscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFDSixlQTZDRSxxRUFBQyx3REFBRDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBQyxXQUE5QjtBQUEwQyxhQUFLLEVBQUMsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsRUFxREk1QixZQUFZLElBQUlBLFlBQVksQ0FBQ3FCLElBQTdCLGlCQUNBLHFFQUFDLHFEQUFEO0FBQ0UsYUFBTyxFQUFDLCtCQURWO0FBRUUsZ0JBQVUsRUFBRSxJQUZkO0FBR0UsYUFBTyxFQUFDO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELElBT0VyQixZQUFZLElBQUlBLFlBQVksQ0FBQ3dCLE9BQTdCLGlCQUNDLHFFQUFDLHFEQUFEO0FBQ0UsYUFBTyxFQUFFeEIsWUFBWSxDQUFDd0IsT0FEeEI7QUFFRSxnQkFBVSxFQUFFLElBRmQ7QUFHRSxhQUFPLEVBQUM7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0ROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0VELENBNUdEOztHQUFNbEMsSztVQUN3REMsdUQsRUFJN0NPLHFELEVBR0VPLHdEOzs7TUFSYmYsSztBQThHU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9sb2dpbi5lNzI1ZTEyNTFkNTM3OWFkNmFlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0XCI7XHJcbmltcG9ydCB7IEZvcm1MYWJlbCwgQnV0dG9uLCBDaGVja2JveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwiLi4vQWxlcnQvaW5kZXhcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IFBob3RvQ2FtZXJhIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvdG9DYW1lcmFcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2V0VXNlciB9IGZyb20gXCIuLi8uLi9SZWR1Y2Vycy91c2VyU2xpY2UuanNcIjtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtaW4td2lkdGg6IDM1dnc7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAwIHJnYigwIDAgMCAvIDYwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmID4gLk11aUJ1dHRvbi1jb250YWluZWRTZWNvbmRhcnkge1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I3M2QxY2JmO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNjAwYmY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLk11aUZvcm1MYWJlbC1yb290IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gICYgPiAuaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmID4gbGFiZWwgPiAuTXVpSWNvbkJ1dHRvbi1jb2xvclByaW1hcnkge1xyXG4gICAgY29sb3I6ICNmZjM2MDBiZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEVycm9yU3BhbiA9IHN0eWxlZC5zcGFuYFxyXG4gIGNvbG9yOiAjZmY1YTVhO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oMmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dEVsZW1lbnQgPSBzdHlsZWQoSW5wdXQpYFxyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmID4gLk11aUlucHV0QmFzZS1pbnB1dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcclxuICBmaXJzdE5hbWU6IG51bGwsXHJcbiAgbGFzdE5hbWU6IG51bGwsXHJcbiAgZW1haWw6IG51bGwsXHJcbiAgcGFzc3dvcmQ6IG51bGwsXHJcbiAgYXZhdGFyOiBudWxsLFxyXG4gIHBvbGljeTogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzLCBzZXRFcnJvciwgcmVzZXQgfSA9IHVzZUZvcm0oe1xyXG4gICAgZGVmYXVsdFZhbHVlcyxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3Jlc3BvbnNlVHlwZSwgc2V0UmVzcG9uc2VUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGNsZWFyQWxlcnQgPSAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHNldFJlc3BvbnNlVHlwZShudWxsKSwgOTk5KTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jIChkYXRhLCBldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNlbmQgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9zaWduSW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2VuZC5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgc2V0UmVzcG9uc2VUeXBlKHJlc3BvbnNlKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UudXNlcikge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIocmVzcG9uc2UudXNlcikpO1xyXG4gICAgICAgICAgICByZXNldCgpO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hdXRoL2FjY291bnQvY2FydFwiKTtcclxuICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0UmVzcG9uc2VUeXBlKHsgbWVzc2FnZTogXCJTb21lIGVycm9yIG9jY3VyZWQsIHRyeSBhZ2FpblwiIH0pO1xyXG4gICAgfVxyXG4gICAgY2xlYXJBbGVydCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPEhlYWRlcj5TaWduIGluPC9IZWFkZXI+XHJcblxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KGxvZ2luVXNlcil9PlxyXG4gICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgZW1haWwnXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgcGF0dGVybjoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2ksXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcImludmFsaWQgZW1haWwgYWRkcmVzc1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVycm9yKFwiZW1haWxcIiwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgdG8gcHJvdmlkZSBhIGVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIHtlcnJvcnMuZW1haWwgJiYgZXJyb3JzLmVtYWlsLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGEgZW1haWw8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtlcnJvcnMuZW1haWwgJiYgZXJyb3JzLmVtYWlsLnR5cGUgPT09IFwicGF0dGVyblwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBjb3JyZWN0IGVtYWlsPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0RWxlbWVudFxyXG4gICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBQYXNzd29yZCdcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJwYXNzd29yZFwiLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSB0byBwcm92aWRlIGEgcGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmQudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBwYXNzd29yZDwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknPlxyXG4gICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICB7KHJlc3BvbnNlVHlwZSAmJiByZXNwb25zZVR5cGUudXNlciAmJiAoXHJcbiAgICAgICAgPEFsZXJ0XHJcbiAgICAgICAgICBtZXNzYWdlPSdZb3UgYXJlIHN1Y2Nlc2Z1bGx5IGxvZ2dlZCBpbidcclxuICAgICAgICAgIHNob3VsZE9wZW49e3RydWV9XHJcbiAgICAgICAgICB2YXJpYW50PSdzdWNjZXNzJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICkpIHx8XHJcbiAgICAgICAgKHJlc3BvbnNlVHlwZSAmJiByZXNwb25zZVR5cGUubWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgbWVzc2FnZT17cmVzcG9uc2VUeXBlLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIHNob3VsZE9wZW49e3RydWV9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9J2Vycm9yJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=