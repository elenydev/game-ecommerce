webpackHotUpdate_N_E("pages/auth/account/emails",{

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
      lineNumber: 98,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Heading, {
        children: "Emails: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }, _this), emails.map(function (email, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(EmailWrapper, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Email_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
            emailMessage: email,
            index: index
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(DeleteWrapper, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
              onClick: function onClick() {
                return deleteEmailFromDatabase(email);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 15
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }, _this);
      })]
    }, void 0, true), message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Alert_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      shouldOpen: true,
      variant: variant,
      message: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FbWFpbHNDYXJ0L2luZGV4LmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJIZWFkaW5nIiwiaDEiLCJFbWFpbFdyYXBwZXIiLCJEZWxldGVXcmFwcGVyIiwiRW1haWxzQ2FydCIsInVzZVN0YXRlIiwiZW1haWxzIiwic2V0RW1haWxzIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ2YXJpYW50Iiwic2V0VmFyaWFudCIsImZldGNoRW1haWxzIiwiZmV0Y2giLCJxdWVyeSIsImpzb24iLCJyZXNwb25zZSIsInJldmVyc2UiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlRW1haWxGcm9tRGF0YWJhc2UiLCJlbWFpbCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlcXVlc3QiLCJ1c2VFZmZlY3QiLCJpc01vdW50ZWQiLCJsZW5ndGgiLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdIQUFiO0tBQU1GLE87QUFTTixJQUFNRyxPQUFPLEdBQUdGLHlEQUFNLENBQUNHLEVBQVY7QUFBQTtBQUFBO0FBQUEsNEVBQWI7TUFBTUQsTztBQU9OLElBQU1FLFlBQVksR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyS0FBbEI7TUFBTUcsWTtBQWFOLElBQU1DLGFBQWEsR0FBR0wseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5SUFBbkI7TUFBTUksYTs7QUFVTixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDaEJDLE1BRGdC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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsV0FBbUJXLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFYLENBRkg7QUFBQSxvQkFKSixFQWtCR3hCLE9BQU8saUJBQ04scUVBQUMsdURBQUQ7QUFBTyxnQkFBVSxFQUFFLElBQW5CO0FBQXlCLGFBQU8sRUFBRUUsT0FBbEM7QUFBMkMsYUFBTyxFQUFFRjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0JELENBeEVEOztHQUFNSixVOztNQUFBQSxVO0FBMEVTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL2FjY291bnQvZW1haWxzLjM4NWU1MzhlMWExNTUyYWNlNmVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgRW1haWwgZnJvbSBcIi4uL0VtYWlsL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IERlbGV0ZUZvcmV2ZXJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlRm9yZXZlclwiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcIi4uL0FsZXJ0L2luZGV4LmpzXCI7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkaW5nID0gc3R5bGVkLmgxYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGNvbG9yOiByZ2IoMjU1IDkwIDkwIC85MCUpO1xyXG5gO1xyXG5cclxuY29uc3QgRW1haWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSA5MCA5MCAvNjAlKTtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEZWxldGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICYgPiAuTXVpSWNvbkJ1dHRvbi1yb290IHtcclxuICAgIGNvbG9yOiByZ2IoMjU1IDkwIDkwIC85MCUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRW1haWxzQ2FydCA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWxzLCBzZXRFbWFpbHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt2YXJpYW50LCBzZXRWYXJpYW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBmZXRjaEVtYWlscyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZ2V0RW1haWxzXCIpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5Lmpzb24oKTtcclxuICAgICAgc2V0RW1haWxzKHJlc3BvbnNlLmVtYWlscy5yZXZlcnNlKCkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlRW1haWxGcm9tRGF0YWJhc2UgPSBhc3luYyAoZW1haWwpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZW1vdmVFbWFpbFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlbWFpbCksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICAgIGlmICghcmVzcG9uc2UuZW1haWwpIHtcclxuICAgICAgICBzZXRWYXJpYW50KFwiZXJyb3JcIik7XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIlNvbWV0aGluZyB3ZW50IHdyb25nLCB0cnkgYWdhaW5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFZhcmlhbnQoXCJzdWNjZXNzXCIpO1xyXG4gICAgICBzZXRNZXNzYWdlKFwiRW1haWwgZGVsZXRlZFwiKTtcclxuICAgICAgZmV0Y2hFbWFpbHMoKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRWYXJpYW50KFwiZXJyb3JcIik7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJTb21ldGhpbmcgd2VudCB3cm9uZywgdHJ5IGFnYWluXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZTtcclxuXHJcbiAgICBmZXRjaEVtYWlscygpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICB7ZW1haWxzICYmIGVtYWlscy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgPEhlYWRpbmc+V2UgZG9uJ3QgaGF2ZSBhbnkgZW1haWxzPC9IZWFkaW5nPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8SGVhZGluZz5FbWFpbHM6IDwvSGVhZGluZz5cclxuICAgICAgICAgIHtlbWFpbHMubWFwKChlbWFpbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPEVtYWlsV3JhcHBlciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8RW1haWwgZW1haWxNZXNzYWdlPXtlbWFpbH0gaW5kZXg9e2luZGV4fSAvPlxyXG4gICAgICAgICAgICAgIDxEZWxldGVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlRW1haWxGcm9tRGF0YWJhc2UoZW1haWwpfT5cclxuICAgICAgICAgICAgICAgICAgPERlbGV0ZUZvcmV2ZXJJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9EZWxldGVXcmFwcGVyPlxyXG4gICAgICAgICAgICA8L0VtYWlsV3JhcHBlcj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICB7bWVzc2FnZSAmJiAoXHJcbiAgICAgICAgPEFsZXJ0IHNob3VsZE9wZW49e3RydWV9IHZhcmlhbnQ9e3ZhcmlhbnR9IG1lc3NhZ2U9e21lc3NhZ2V9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsc0NhcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=