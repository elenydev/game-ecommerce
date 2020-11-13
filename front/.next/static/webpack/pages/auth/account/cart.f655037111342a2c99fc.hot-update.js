webpackHotUpdate_N_E("pages/auth/account/cart",{

/***/ "./components/EmailsCart/index.js":
/*!****************************************!*\
  !*** ./components/EmailsCart/index.js ***!
  \****************************************/
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
/* harmony import */ var _Email_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Email/index.js */ "./components/Email/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/DeleteForever */ "./node_modules/@material-ui/icons/DeleteForever.js");
/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Alert_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Alert/index.js */ "./components/Alert/index.js");





var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\EmailsCart\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "EmailsCart__Wrapper",
  componentId: "sc-1t13f0h-0"
})(["display:flex;flex-direction:column;width:100%;min-height:100%;align-items:flex-start;justify-content:flex-start;"]);
_c = Wrapper;
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1.withConfig({
  displayName: "EmailsCart__Heading",
  componentId: "sc-1t13f0h-1"
})(["width:100%;text-align:center;padding:40px;color:rgb(255 90 90 /90%);"]);
_c2 = Heading;
var EmailWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "EmailsCart__EmailWrapper",
  componentId: "sc-1t13f0h-2"
})(["display:flex;flex-direction:column;width:100%;border:1px solid rgb(255 90 90 /60%);border-right:none;border-left:none;@media (min-width:960px){flex-direction:row;}"]);
_c3 = EmailWrapper;
var DeleteWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "EmailsCart__DeleteWrapper",
  componentId: "sc-1t13f0h-3"
})(["padding:4px;display:flex;align-items:center;justify-content:center;& > .MuiIconButton-root{color:rgb(255 90 90 /90%) !important;}"]);
_c4 = DeleteWrapper;

var EmailsCart = function EmailsCart() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      emails = _useState[0],
      setEmails = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      variant = _useState3[0],
      setVariant = _useState3[1];

  var fetchEmails = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var query, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("http://localhost:8080/getEmails");

            case 3:
              query = _context.sent;
              _context.next = 6;
              return query.json();

            case 6:
              response = _context.sent;
              setEmails(response.emails.reverse());
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function fetchEmails() {
      return _ref.apply(this, arguments);
    };
  }();

  var deleteEmailFromDatabase = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email) {
      var request, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetch("http://localhost:8080/removeEmail", {
                method: "POST",
                body: JSON.stringify(email),
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 3:
              request = _context2.sent;
              _context2.next = 6;
              return request.json();

            case 6:
              response = _context2.sent;

              if (response.email) {
                _context2.next = 11;
                break;
              }

              setVariant("error");
              setMessage("Something went wrong, try again");
              return _context2.abrupt("return");

            case 11:
              setVariant("success");
              setMessage("Email deleted");
              fetchEmails();
              _context2.next = 20;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](0);
              setVariant("error");
              setMessage("Something went wrong, try again");

            case 20:
              clearMessage();

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 16]]);
    }));

    return function deleteEmailFromDatabase(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var clearMessage = function clearMessage() {
    setTimeout(function () {
      setMessage(null);
      setVariant(null);
    }, 2000);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var isMounted = true;
    fetchEmails();
    return function () {
      isMounted = false;
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Wrapper, {
    children: [emails && emails.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Heading, {
      children: "We don't have any emails"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Heading, {
        children: "Emails: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }, _this), emails.map(function (email, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(EmailWrapper, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Email_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
            emailMessage: email,
            index: index
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(DeleteWrapper, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
              onClick: function onClick() {
                return deleteEmailFromDatabase(email);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }, _this);
      })]
    }, void 0, true), message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Alert_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      shouldOpen: true,
      variant: variant,
      message: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }, _this);
};

_s(EmailsCart, "yI5YaTjOAEU50pqerBn8Pg+/K68=");

_c5 = EmailsCart;
/* harmony default export */ __webpack_exports__["default"] = (EmailsCart);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "Heading");
$RefreshReg$(_c3, "EmailWrapper");
$RefreshReg$(_c4, "DeleteWrapper");
$RefreshReg$(_c5, "EmailsCart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FbWFpbHNDYXJ0L2luZGV4LmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJIZWFkaW5nIiwiaDEiLCJFbWFpbFdyYXBwZXIiLCJEZWxldGVXcmFwcGVyIiwiRW1haWxzQ2FydCIsInVzZVN0YXRlIiwiZW1haWxzIiwic2V0RW1haWxzIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ2YXJpYW50Iiwic2V0VmFyaWFudCIsImZldGNoRW1haWxzIiwiZmV0Y2giLCJxdWVyeSIsImpzb24iLCJyZXNwb25zZSIsInJldmVyc2UiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlRW1haWxGcm9tRGF0YWJhc2UiLCJlbWFpbCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlcXVlc3QiLCJjbGVhck1lc3NhZ2UiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiaXNNb3VudGVkIiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3SEFBYjtLQUFNRixPO0FBU04sSUFBTUcsT0FBTyxHQUFHRix5REFBTSxDQUFDRyxFQUFWO0FBQUE7QUFBQTtBQUFBLDRFQUFiO01BQU1ELE87QUFPTixJQUFNRSxZQUFZLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMktBQWxCO01BQU1HLFk7QUFhTixJQUFNQyxhQUFhLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUlBQW5CO01BQU1JLGE7O0FBVU4sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFD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QUFEO0FBQU8sd0JBQVksRUFBRWIsS0FBckI7QUFBNEIsaUJBQUssRUFBRWE7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLGFBQUQ7QUFBQSxtQ0FDRSxxRUFBQyw0REFBRDtBQUFZLHFCQUFPLEVBQUU7QUFBQSx1QkFBTWQsdUJBQXVCLENBQUNDLEtBQUQsQ0FBN0I7QUFBQSxlQUFyQjtBQUFBLHFDQUNFLHFFQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLFdBQW1CYSxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBWCxDQUZIO0FBQUEsb0JBSkosRUFrQkcxQixPQUFPLGlCQUNOLHFFQUFDLHVEQUFEO0FBQU8sZ0JBQVUsRUFBRSxJQUFuQjtBQUF5QixhQUFPLEVBQUVFLE9BQWxDO0FBQTJDLGFBQU8sRUFBRUY7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCRCxDQWpGRDs7R0FBTUosVTs7TUFBQUEsVTtBQW1GU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9hY2NvdW50L2NhcnQuZjY1NTAzNzExMTM0MmEyYzk5ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBFbWFpbCBmcm9tIFwiLi4vRW1haWwvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgRGVsZXRlRm9yZXZlckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVGb3JldmVyXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwiLi4vQWxlcnQvaW5kZXguanNcIjtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRpbmcgPSBzdHlsZWQuaDFgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgY29sb3I6IHJnYigyNTUgOTAgOTAgLzkwJSk7XHJcbmA7XHJcblxyXG5jb25zdCBFbWFpbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1IDkwIDkwIC82MCUpO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IERlbGV0ZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgJiA+IC5NdWlJY29uQnV0dG9uLXJvb3Qge1xyXG4gICAgY29sb3I6IHJnYigyNTUgOTAgOTAgLzkwJSkgIWltcG9ydGFudDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFbWFpbHNDYXJ0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbHMsIHNldEVtYWlsc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3ZhcmlhbnQsIHNldFZhcmlhbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGZldGNoRW1haWxzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcXVlcnkgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9nZXRFbWFpbHNcIik7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnkuanNvbigpO1xyXG4gICAgICBzZXRFbWFpbHMocmVzcG9uc2UuZW1haWxzLnJldmVyc2UoKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVFbWFpbEZyb21EYXRhYmFzZSA9IGFzeW5jIChlbWFpbCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlbW92ZUVtYWlsXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVtYWlsKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5lbWFpbCkge1xyXG4gICAgICAgIHNldFZhcmlhbnQoXCJlcnJvclwiKTtcclxuICAgICAgICBzZXRNZXNzYWdlKFwiU29tZXRoaW5nIHdlbnQgd3JvbmcsIHRyeSBhZ2FpblwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc2V0VmFyaWFudChcInN1Y2Nlc3NcIik7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJFbWFpbCBkZWxldGVkXCIpO1xyXG4gICAgICBmZXRjaEVtYWlscygpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldFZhcmlhbnQoXCJlcnJvclwiKTtcclxuICAgICAgc2V0TWVzc2FnZShcIlNvbWV0aGluZyB3ZW50IHdyb25nLCB0cnkgYWdhaW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJNZXNzYWdlKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xlYXJNZXNzYWdlID0gKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldE1lc3NhZ2UobnVsbCk7XHJcbiAgICAgIHNldFZhcmlhbnQobnVsbCk7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XHJcblxyXG4gICAgZmV0Y2hFbWFpbHMoKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAge2VtYWlscyAmJiBlbWFpbHMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgIDxIZWFkaW5nPldlIGRvbid0IGhhdmUgYW55IGVtYWlsczwvSGVhZGluZz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEhlYWRpbmc+RW1haWxzOiA8L0hlYWRpbmc+XHJcbiAgICAgICAgICB7ZW1haWxzLm1hcCgoZW1haWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxFbWFpbFdyYXBwZXIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPEVtYWlsIGVtYWlsTWVzc2FnZT17ZW1haWx9IGluZGV4PXtpbmRleH0gLz5cclxuICAgICAgICAgICAgICA8RGVsZXRlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUVtYWlsRnJvbURhdGFiYXNlKGVtYWlsKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxEZWxldGVGb3JldmVySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvRGVsZXRlV3JhcHBlcj5cclxuICAgICAgICAgICAgPC9FbWFpbFdyYXBwZXI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgICAge21lc3NhZ2UgJiYgKFxyXG4gICAgICAgIDxBbGVydCBzaG91bGRPcGVuPXt0cnVlfSB2YXJpYW50PXt2YXJpYW50fSBtZXNzYWdlPXttZXNzYWdlfSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbWFpbHNDYXJ0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9