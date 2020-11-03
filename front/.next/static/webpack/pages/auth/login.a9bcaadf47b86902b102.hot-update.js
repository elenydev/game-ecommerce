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

  var loginUser = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, event) {
      var send, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              console.log(data);
              _context.prev = 2;
              _context.next = 5;
              return fetch("http://localhost:8080/signIn", {
                body: JSON.stringify(data)
              });

            case 5:
              send = _context.sent;
              _context.next = 8;
              return send.json();

            case 8:
              response = _context.sent;
              console.log(response);

              if (response) {
                setResponseType(response);

                if (response.user) {
                  reset();
                }
              }

              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);
              setResponseType({
                message: "Some error occured, try again"
              });

            case 17:
              clearAlert();

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 13]]);
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
      lineNumber: 117,
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
              message: "You have to a email"
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, _this), errors.email && errors.email.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 11
      }, _this), errors.email && errors.email.type === "pattern" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a correct email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
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
          lineNumber: 147,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, _this), errors.password && errors.password.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        type: "submit",
        variant: "contained",
        color: "secondary",
        children: "Sign in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, _this), responseType && responseType.user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Alert_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
      message: "User succesfully created",
      shouldOpen: true,
      variant: "success"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }, _this) || responseType && responseType.message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Alert_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
      message: responseType.message,
      shouldOpen: true,
      variant: "error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 5
  }, _this);
};

_s(Login, "oenydzVqxXicOmVDOj/haTvpm+E=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL2luZGV4LmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIkVycm9yU3BhbiIsInNwYW4iLCJIZWFkZXIiLCJoMiIsIklucHV0RWxlbWVudCIsIklucHV0IiwiZGVmYXVsdFZhbHVlcyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImF2YXRhciIsInBvbGljeSIsIkxvZ2luIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwic2V0RXJyb3IiLCJyZXNldCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwicmVzcG9uc2VUeXBlIiwic2V0UmVzcG9uc2VUeXBlIiwiY2xlYXJBbGVydCIsInNldFRpbWVvdXQiLCJsb2dpblVzZXIiLCJkYXRhIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZCIsImpzb24iLCJyZXNwb25zZSIsInVzZXIiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwidmFsdWUiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtOQUFiO0tBQU1GLE87QUFhTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7QUFBQTtBQUFBO0FBQUEsK1dBQVY7TUFBTUQsSTtBQStCTixJQUFNRSxTQUFTLEdBQUdKLHlEQUFNLENBQUNLLElBQVY7QUFBQTtBQUFBO0FBQUEscUNBQWY7TUFBTUQsUztBQUtOLElBQU1F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LFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBQyxXQUE5QjtBQUEwQyxhQUFLLEVBQUMsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsRUFxREl0QixZQUFZLElBQUlBLFlBQVksQ0FBQ2lCLElBQTdCLGlCQUNBLHFFQUFDLHFEQUFEO0FBQ0UsYUFBTyxFQUFDLDBCQURWO0FBRUUsZ0JBQVUsRUFBRSxJQUZkO0FBR0UsYUFBTyxFQUFDO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELElBT0VqQixZQUFZLElBQUlBLFlBQVksQ0FBQ2tCLE9BQTdCLGlCQUNDLHFFQUFDLHFEQUFEO0FBQ0UsYUFBTyxFQUFFbEIsWUFBWSxDQUFDa0IsT0FEeEI7QUFFRSxnQkFBVSxFQUFFLElBRmQ7QUFHRSxhQUFPLEVBQUM7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0ROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0VELENBckdEOztHQUFNNUIsSztVQUN3REMsdUQsRUFJN0NPLHFEOzs7TUFMWFIsSztBQXVHU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9sb2dpbi5hOWJjYWFkZjQ3Yjg2OTAyYjEwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0XCI7XHJcbmltcG9ydCB7IEZvcm1MYWJlbCwgQnV0dG9uLCBDaGVja2JveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwiLi4vQWxlcnQvaW5kZXhcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IFBob3RvQ2FtZXJhIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvdG9DYW1lcmFcIjtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtaW4td2lkdGg6IDM1dnc7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAwIHJnYigwIDAgMCAvIDYwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmID4gLk11aUJ1dHRvbi1jb250YWluZWRTZWNvbmRhcnkge1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I3M2QxY2JmO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNjAwYmY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLk11aUZvcm1MYWJlbC1yb290IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gICYgPiAuaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmID4gbGFiZWwgPiAuTXVpSWNvbkJ1dHRvbi1jb2xvclByaW1hcnkge1xyXG4gICAgY29sb3I6ICNmZjM2MDBiZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEVycm9yU3BhbiA9IHN0eWxlZC5zcGFuYFxyXG4gIGNvbG9yOiAjZmY1YTVhO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oMmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dEVsZW1lbnQgPSBzdHlsZWQoSW5wdXQpYFxyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmID4gLk11aUlucHV0QmFzZS1pbnB1dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcclxuICBmaXJzdE5hbWU6IG51bGwsXHJcbiAgbGFzdE5hbWU6IG51bGwsXHJcbiAgZW1haWw6IG51bGwsXHJcbiAgcGFzc3dvcmQ6IG51bGwsXHJcbiAgYXZhdGFyOiBudWxsLFxyXG4gIHBvbGljeTogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzLCBzZXRFcnJvciwgcmVzZXQgfSA9IHVzZUZvcm0oe1xyXG4gICAgZGVmYXVsdFZhbHVlcyxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3Jlc3BvbnNlVHlwZSwgc2V0UmVzcG9uc2VUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGNsZWFyQWxlcnQgPSAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHNldFJlc3BvbnNlVHlwZShudWxsKSwgOTk5KTtcclxuXHJcbiAgY29uc3QgbG9naW5Vc2VyID0gYXN5bmMgKGRhdGEsIGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc2VuZCA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3NpZ25JblwiLCB7XHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNlbmQuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgc2V0UmVzcG9uc2VUeXBlKHJlc3BvbnNlKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UudXNlcikge1xyXG4gICAgICAgICAgcmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIHNldFJlc3BvbnNlVHlwZSh7IG1lc3NhZ2U6IFwiU29tZSBlcnJvciBvY2N1cmVkLCB0cnkgYWdhaW5cIiB9KTtcclxuICAgIH1cclxuICAgIGNsZWFyQWxlcnQoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxIZWFkZXI+U2lnbiBpbjwvSGVhZGVyPlxyXG5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChsb2dpblVzZXIpfT5cclxuICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0RWxlbWVudFxyXG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIGVtYWlsJ1xyXG4gICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHBhdHRlcm46IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJpbnZhbGlkIGVtYWlsIGFkZHJlc3NcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihcImVtYWlsXCIsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWFudWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIGEgZW1haWxcIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5lbWFpbCAmJiBlcnJvcnMuZW1haWwudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBlbWFpbDwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Vycm9ycy5lbWFpbCAmJiBlcnJvcnMuZW1haWwudHlwZSA9PT0gXCJwYXR0ZXJuXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIGNvcnJlY3QgZW1haWw8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIFBhc3N3b3JkJ1xyXG4gICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihcInBhc3N3b3JkXCIsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWFudWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIHByb3ZpZGUgYSBwYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZC50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIHBhc3N3b3JkPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeSc+XHJcbiAgICAgICAgICBTaWduIGluXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgIHsocmVzcG9uc2VUeXBlICYmIHJlc3BvbnNlVHlwZS51c2VyICYmIChcclxuICAgICAgICA8QWxlcnRcclxuICAgICAgICAgIG1lc3NhZ2U9J1VzZXIgc3VjY2VzZnVsbHkgY3JlYXRlZCdcclxuICAgICAgICAgIHNob3VsZE9wZW49e3RydWV9XHJcbiAgICAgICAgICB2YXJpYW50PSdzdWNjZXNzJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICkpIHx8XHJcbiAgICAgICAgKHJlc3BvbnNlVHlwZSAmJiByZXNwb25zZVR5cGUubWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgbWVzc2FnZT17cmVzcG9uc2VUeXBlLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIHNob3VsZE9wZW49e3RydWV9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9J2Vycm9yJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=