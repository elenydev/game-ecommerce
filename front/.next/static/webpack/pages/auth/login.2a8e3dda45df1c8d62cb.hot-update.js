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

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              setResponseType({
                message: "Some error occured, try again"
              });

            case 14:
              clearAlert();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
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
      lineNumber: 125,
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
          lineNumber: 129,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, _this), errors.email && errors.email.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 11
      }, _this), errors.email && errors.email.type === "pattern" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a correct email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
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
          lineNumber: 155,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, _this), errors.password && errors.password.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        type: "submit",
        variant: "contained",
        color: "secondary",
        children: "Sign in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, _this), responseType && responseType.user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Alert_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
      message: "You are succesfully logged in",
      shouldOpen: true,
      variant: "success"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }, _this) || responseType && responseType.message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Alert_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
      message: responseType.message,
      shouldOpen: true,
      variant: "error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL2luZGV4LmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIkVycm9yU3BhbiIsInNwYW4iLCJIZWFkZXIiLCJoMiIsIklucHV0RWxlbWVudCIsIklucHV0IiwiZGVmYXVsdFZhbHVlcyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImF2YXRhciIsInBvbGljeSIsIkxvZ2luIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwic2V0RXJyb3IiLCJyZXNldCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwicmVzcG9uc2VUeXBlIiwic2V0UmVzcG9uc2VUeXBlIiwiY2xlYXJBbGVydCIsInNldFRpbWVvdXQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibG9naW5Vc2VyIiwiZGF0YSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInNlbmQiLCJqc29uIiwicmVzcG9uc2UiLCJ1c2VyIiwic2V0VXNlciIsInB1c2giLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwidmFsdWUiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtOQUFiO0tBQU1GLE87QUFhTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7QUFBQTtBQUFBO0FBQUEsK1dBQVY7TUFBTUQsSTtBQStCTixJQUFNRSxTQUFTLEdBQUdKLHlEQUFNLENBQUNLLElBQVY7QUFBQTtBQUFBO0FBQUEscUNBQWY7TUFBTUQsUztBQUtOLElBQU1FLE1BQU0sR0FBR04seURBQU0sQ0FBQ08sRUFBVjtBQUFBO0FBQUE7QUFBQSxxQ0FBWjtNQUFNRCxNO0FBS04sSUFBTUUsWUFBWSxHQUFHUixpRUFBTSxDQUFDUywrREFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHNFQUFsQjtNQUFNRCxZO0FBU04sSUFBTUUsYUFBYSxHQUFHO0FBQ3BCQyxXQUFTLEVBQUUsSUFEUztBQUVwQkMsVUFBUSxFQUFFLElBRlU7QUFHcEJDLE9BQUssRUFBRSxJQUhhO0FBSXBCQyxVQUFRLEVBQUUsSUFKVTtBQUtwQkMsUUFBTSxFQUFFLElBTFk7QUFNcEJDLFFBQU0sRUFBRTtBQU5ZLENBQXRCOztBQVNBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxpQkFDMENDLCtEQUFPLENBQUM7QUFDbEVSLGlCQUFhLEVBQWJBO0FBRGtFLEdBQUQsQ0FEakQ7QUFBQSxNQUNWUyxRQURVLFlBQ1ZBLFFBRFU7QUFBQSxNQUNBQyxZQURBLFlBQ0FBLFlBREE7QUFBQSxNQUNjQyxNQURkLFlBQ2NBLE1BRGQ7QUFBQSxNQUNzQkMsUUFEdEIsWUFDc0JBLFFBRHRCO0FBQUEsTUFDZ0NDLEtBRGhDLFlBQ2dDQSxLQURoQzs7QUFLbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFMa0Isa0JBTXNCQyxzREFBUSxDQUFDLElBQUQsQ0FOOUI7QUFBQSxNQU1YQyxZQU5XO0FBQUEsTUFNR0MsZUFOSDs7QUFPbEIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxXQUFNQyxVQUFVLENBQUM7QUFBQSxhQUFNRixlQUFlLENBQUMsSUFBRCxDQUFyQjtBQUFBLEtBQUQsRUFBOEIsR0FBOUIsQ0FBaEI7QUFBQSxHQUFuQjs7QUFDQSxNQUFNRyxRQUFRLEdBQUdDLGdFQUFXLEVBQTVCOztBQUVBLE1BQU1DLFNBQVM7QUFBQSxnTUFBRyxpQkFBT0MsSUFBUCxFQUFhQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQkEsbUJBQUssQ0FBQ0MsY0FBTjtBQURnQjtBQUFBO0FBQUEscUJBR0tDLEtBQUssQ0FBQyw4QkFBRCxFQUFpQztBQUN2REMsc0JBQU0sRUFBRSxNQUQrQztBQUV2REMsb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWYsQ0FGaUQ7QUFHdkRRLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVDtBQUg4QyxlQUFqQyxDQUhWOztBQUFBO0FBR1JDLGtCQUhRO0FBQUE7QUFBQSxxQkFVU0EsSUFBSSxDQUFDQyxJQUFMLEVBVlQ7O0FBQUE7QUFVUkMsc0JBVlE7O0FBV2Qsa0JBQUlBLFFBQUosRUFBYztBQUNaakIsK0JBQWUsQ0FBQ2lCLFFBQUQsQ0FBZjs7QUFDQSxvQkFBSUEsUUFBUSxDQUFDQyxJQUFiLEVBQW1CO0FBQ2pCaEIsNEJBQVUsQ0FBQyxZQUFNO0FBQ2ZDLDRCQUFRLENBQUNnQix1RUFBTyxDQUFDRixRQUFRLENBQUNDLElBQVYsQ0FBUixDQUFSO0FBQ0F2Qix5QkFBSztBQUNMQywwQkFBTSxDQUFDd0IsSUFBUCxDQUFZLG9CQUFaO0FBQ0QsbUJBSlMsRUFJUCxHQUpPLENBQVY7QUFLRDtBQUNGOztBQXBCYTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXNCZHBCLDZCQUFlLENBQUM7QUFBRXFCLHVCQUFPLEVBQUU7QUFBWCxlQUFELENBQWY7O0FBdEJjO0FBd0JoQnBCLHdCQUFVOztBQXhCTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFUSSxTQUFTO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBMkJBLHNCQUNFLHFFQUFDLE9BQUQ7QUFBQSw0QkFDRSxxRUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFHRSxxRUFBQyxJQUFEO0FBQU0sY0FBUSxFQUFFYixZQUFZLENBQUNhLFNBQUQsQ0FBNUI7QUFBQSw4QkFDRSxxRUFBQywyREFBRDtBQUFBLCtCQUNFLHFFQUFDLFlBQUQ7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLGNBQUksRUFBQyxPQUZQO0FBR0UscUJBQVcsRUFBQyxhQUhkO0FBSUUsa0JBQVEsRUFBRWQsUUFBUSxDQUFDO0FBQ2pCK0Isb0JBQVEsRUFBRSxJQURPO0FBRWpCQyxtQkFBTyxFQUFFO0FBQ1BDLG1CQUFLLEVBQUUsMENBREE7QUFFUEgscUJBQU8sRUFBRTtBQUZGO0FBRlEsV0FBRCxDQUpwQjtBQVdFLGtCQUFRLEVBQUUsb0JBQU07QUFDZDNCLG9CQUFRLENBQUMsT0FBRCxFQUFVO0FBQ2hCK0Isa0JBQUksRUFBRSxRQURVO0FBRWhCSixxQkFBTyxFQUFFO0FBRk8sYUFBVixDQUFSO0FBSUQ7QUFoQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQXFCRzVCLE1BQU0sQ0FBQ1IsS0FBUCxJQUFnQlEsTUFBTSxDQUFDUixLQUFQLENBQWF3QyxJQUFiLEtBQXNCLFVBQXRDLGlCQUNDLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkosRUF3QkdoQyxNQUFNLENBQUNSLEtBQVAsSUFBZ0JRLE1BQU0sQ0FBQ1IsS0FBUCxDQUFhd0MsSUFBYixLQUFzQixTQUF0QyxpQkFDQyxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekJKLGVBMkJFLHFFQUFDLDJEQUFEO0FBQUEsK0JBQ0UscUVBQUMsWUFBRDtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxxQkFBVyxFQUFDLGdCQUhkO0FBSUUsa0JBQVEsRUFBRWxDLFFBQVEsQ0FBQztBQUFFK0Isb0JBQVEsRUFBRTtBQUFaLFdBQUQsQ0FKcEI7QUFLRSxrQkFBUSxFQUFFLG9CQUFNO0FBQ2Q1QixvQkFBUSxDQUFDLFVBQUQsRUFBYTtBQUNuQitCLGtCQUFJLEVBQUUsUUFEYTtBQUVuQkoscUJBQU8sRUFBRTtBQUZVLGFBQWIsQ0FBUjtBQUlEO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzQkYsRUF5Q0c1QixNQUFNLENBQUNQLFFBQVAsSUFBbUJPLE1BQU0sQ0FBQ1AsUUFBUCxDQUFnQnVDLElBQWhCLEtBQXlCLFVBQTVDLGlCQUNDLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQ0osZUE2Q0UscUVBQUMsd0RBQUQ7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUMsV0FBOUI7QUFBMEMsYUFBSyxFQUFDLFdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLEVBcURJMUIsWUFBWSxJQUFJQSxZQUFZLENBQUNtQixJQUE3QixpQkFDQSxxRUFBQyxxREFBRDtBQUNFLGFBQU8sRUFBQywrQkFEVjtBQUVFLGdCQUFVLEVBQUUsSUFGZDtBQUdFLGFBQU8sRUFBQztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxJQU9FbkIsWUFBWSxJQUFJQSxZQUFZLENBQUNzQixPQUE3QixpQkFDQyxxRUFBQyxxREFBRDtBQUNFLGFBQU8sRUFBRXRCLFlBQVksQ0FBQ3NCLE9BRHhCO0FBRUUsZ0JBQVUsRUFBRSxJQUZkO0FBR0UsYUFBTyxFQUFDO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNFRCxDQTNHRDs7R0FBTWhDLEs7VUFDd0RDLHVELEVBSTdDTyxxRCxFQUdFTyx3RDs7O01BUmJmLEs7QUE2R1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvbG9naW4uMmE4ZTNkZGE0NWRmMWM4ZDYyY2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dFwiO1xyXG5pbXBvcnQgeyBGb3JtTGFiZWwsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcIi4uL0FsZXJ0L2luZGV4XCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBQaG90b0NhbWVyYSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob3RvQ2FtZXJhXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNldFVzZXIgfSBmcm9tIFwiLi4vLi4vUmVkdWNlcnMvdXNlclNsaWNlLmpzXCI7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWluLXdpZHRoOiAzNXZ3O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMCByZ2IoMCAwIDAgLyA2MCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgJiA+IC5NdWlCdXR0b24tY29udGFpbmVkU2Vjb25kYXJ5IHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNzNkMWNiZjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzYwMGJmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IC5NdWlGb3JtTGFiZWwtcm9vdCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAmID4gLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJiA+IGxhYmVsID4gLk11aUljb25CdXR0b24tY29sb3JQcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjZmYzNjAwYmYgIWltcG9ydGFudDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFcnJvclNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogI2ZmNWE1YTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaDJgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXRFbGVtZW50ID0gc3R5bGVkKElucHV0KWBcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgJiA+IC5NdWlJbnB1dEJhc2UtaW5wdXQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGRlZmF1bHRWYWx1ZXMgPSB7XHJcbiAgZmlyc3ROYW1lOiBudWxsLFxyXG4gIGxhc3ROYW1lOiBudWxsLFxyXG4gIGVtYWlsOiBudWxsLFxyXG4gIHBhc3N3b3JkOiBudWxsLFxyXG4gIGF2YXRhcjogbnVsbCxcclxuICBwb2xpY3k6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycywgc2V0RXJyb3IsIHJlc2V0IH0gPSB1c2VGb3JtKHtcclxuICAgIGRlZmF1bHRWYWx1ZXMsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtyZXNwb25zZVR5cGUsIHNldFJlc3BvbnNlVHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBjbGVhckFsZXJ0ID0gKCkgPT4gc2V0VGltZW91dCgoKSA9PiBzZXRSZXNwb25zZVR5cGUobnVsbCksIDk5OSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAoZGF0YSwgZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzZW5kID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvc2lnbkluXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNlbmQuanNvbigpO1xyXG4gICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICBzZXRSZXNwb25zZVR5cGUocmVzcG9uc2UpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS51c2VyKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcihyZXNwb25zZS51c2VyKSk7XHJcbiAgICAgICAgICAgIHJlc2V0KCk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2F1dGgvYWNjb3VudC9jYXJ0XCIpO1xyXG4gICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRSZXNwb25zZVR5cGUoeyBtZXNzYWdlOiBcIlNvbWUgZXJyb3Igb2NjdXJlZCwgdHJ5IGFnYWluXCIgfSk7XHJcbiAgICB9XHJcbiAgICBjbGVhckFsZXJ0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8SGVhZGVyPlNpZ24gaW48L0hlYWRlcj5cclxuXHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQobG9naW5Vc2VyKX0+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBlbWFpbCdcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBwYXR0ZXJuOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiaW52YWxpZCBlbWFpbCBhZGRyZXNzXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJlbWFpbFwiLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSB0byBwcm92aWRlIGEgZW1haWxcIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5lbWFpbCAmJiBlcnJvcnMuZW1haWwudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBlbWFpbDwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Vycm9ycy5lbWFpbCAmJiBlcnJvcnMuZW1haWwudHlwZSA9PT0gXCJwYXR0ZXJuXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIGNvcnJlY3QgZW1haWw8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIFBhc3N3b3JkJ1xyXG4gICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihcInBhc3N3b3JkXCIsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWFudWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIHByb3ZpZGUgYSBwYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZC50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIHBhc3N3b3JkPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeSc+XHJcbiAgICAgICAgICBTaWduIGluXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgIHsocmVzcG9uc2VUeXBlICYmIHJlc3BvbnNlVHlwZS51c2VyICYmIChcclxuICAgICAgICA8QWxlcnRcclxuICAgICAgICAgIG1lc3NhZ2U9J1lvdSBhcmUgc3VjY2VzZnVsbHkgbG9nZ2VkIGluJ1xyXG4gICAgICAgICAgc2hvdWxkT3Blbj17dHJ1ZX1cclxuICAgICAgICAgIHZhcmlhbnQ9J3N1Y2Nlc3MnXHJcbiAgICAgICAgLz5cclxuICAgICAgKSkgfHxcclxuICAgICAgICAocmVzcG9uc2VUeXBlICYmIHJlc3BvbnNlVHlwZS5tZXNzYWdlICYmIChcclxuICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgICBtZXNzYWdlPXtyZXNwb25zZVR5cGUubWVzc2FnZX1cclxuICAgICAgICAgICAgc2hvdWxkT3Blbj17dHJ1ZX1cclxuICAgICAgICAgICAgdmFyaWFudD0nZXJyb3InXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==