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
})(["display:flex;flex-direction:column;width:100%;border:1px solid rgb(255 90 90 /60%);border-right:none;border-left:none;& > .MuiIconButton-root{color:rgb(255 90 90 /90%) !important;}@media (min-width:960px){flex-direction:row;}"]);
_c3 = EmailWrapper;
var DeleteWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "EmailsCart__DeleteWrapper",
  componentId: "sc-1t13f0h-3"
})(["padding:4px;display:flex;align-items:center;justify-content:center;"]);
_c4 = DeleteWrapper;

var EmailsCart = function EmailsCart() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      emails = _useState[0],
      setEmails = _useState[1];

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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var isMounted = true;
    fetchEmails();
    return function () {
      isMounted = false;
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Wrapper, {
    children: emails && emails.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Heading, {
      children: "We don't have any emails"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Heading, {
        children: "Emails: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, _this), emails.map(function (email, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(EmailWrapper, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Email_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
            emailMessage: email,
            index: index
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(DeleteWrapper, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, _this);
      })]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, _this);
};

_s(EmailsCart, "Pz1emXvf1o2teMcG4tW42BuWti4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FbWFpbHNDYXJ0L2luZGV4LmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJIZWFkaW5nIiwiaDEiLCJFbWFpbFdyYXBwZXIiLCJEZWxldGVXcmFwcGVyIiwiRW1haWxzQ2FydCIsInVzZVN0YXRlIiwiZW1haWxzIiwic2V0RW1haWxzIiwiZmV0Y2hFbWFpbHMiLCJmZXRjaCIsInF1ZXJ5IiwianNvbiIsInJlc3BvbnNlIiwicmV2ZXJzZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJpc01vdW50ZWQiLCJsZW5ndGgiLCJtYXAiLCJlbWFpbCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0hBQWI7S0FBTUYsTztBQVNOLElBQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0csRUFBVjtBQUFBO0FBQUE7QUFBQSw0RUFBYjtNQUFNRCxPO0FBT04sSUFBTUUsWUFBWSxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlPQUFsQjtNQUFNRyxZO0FBaUJOLElBQU1DLGFBQWEsR0FBR0wseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyRUFBbkI7TUFBTUksYTs7QUFPTixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDaEJDLE1BRGdCO0FBQUEsTUFDUkMsU0FEUTs7QUFHdkIsTUFBTUMsV0FBVztBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFSUMsS0FBSyxDQUFDLGlDQUFELENBRlQ7O0FBQUE7QUFFVkMsbUJBRlU7QUFBQTtBQUFBLHFCQUdPQSxLQUFLLENBQUNDLElBQU4sRUFIUDs7QUFBQTtBQUdWQyxzQkFIVTtBQUloQkwsdUJBQVMsQ0FBQ0ssUUFBUSxDQUFDTixNQUFULENBQWdCTyxPQUFoQixFQUFELENBQVQ7QUFKZ0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFNaEJDLHFCQUFPLENBQUNDLEdBQVI7O0FBTmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhQLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBVUFRLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLFNBQVMsR0FBRyxJQUFoQjtBQUVBVCxlQUFXO0FBQ1gsV0FBTyxZQUFNO0FBQ1hTLGVBQVMsR0FBRyxLQUFaO0FBQ0QsS0FGRDtBQUdELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxzQkFDRSxxRUFBQyxPQUFEO0FBQUEsY0FDR1gsTUFBTSxJQUFJQSxNQUFNLENBQUNZLE1BQVAsS0FBa0IsQ0FBNUIsZ0JBQ0MscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGdCQUdDO0FBQUEsOEJBQ0UscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUdaLE1BQU0sQ0FBQ2EsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLDRCQUNWLHFFQUFDLFlBQUQ7QUFBQSxrQ0FDRSxxRUFBQyx1REFBRDtBQUFPLHdCQUFZLEVBQUVELEtBQXJCO0FBQTRCLGlCQUFLLEVBQUVDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQyxhQUFEO0FBQUEsbUNBQ0UscUVBQUMsNERBQUQ7QUFBQSxxQ0FDRSxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBWCxDQUZIO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0EzQ0Q7O0dBQU1qQixVOztNQUFBQSxVO0FBNkNTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL2FjY291bnQvZW1haWxzLjZjZWZlZWJhZDBjYmY4NjlhNTVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgRW1haWwgZnJvbSBcIi4uL0VtYWlsL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IERlbGV0ZUZvcmV2ZXJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlRm9yZXZlclwiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGluZyA9IHN0eWxlZC5oMWBcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBjb2xvcjogcmdiKDI1NSA5MCA5MCAvOTAlKTtcclxuYDtcclxuXHJcbmNvbnN0IEVtYWlsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUgOTAgOTAgLzYwJSk7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG5cclxuICAmID4gLk11aUljb25CdXR0b24tcm9vdCB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSA5MCA5MCAvOTAlKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IERlbGV0ZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBFbWFpbHNDYXJ0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbHMsIHNldEVtYWlsc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoRW1haWxzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcXVlcnkgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9nZXRFbWFpbHNcIik7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnkuanNvbigpO1xyXG4gICAgICBzZXRFbWFpbHMocmVzcG9uc2UuZW1haWxzLnJldmVyc2UoKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XHJcblxyXG4gICAgZmV0Y2hFbWFpbHMoKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAge2VtYWlscyAmJiBlbWFpbHMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgIDxIZWFkaW5nPldlIGRvbid0IGhhdmUgYW55IGVtYWlsczwvSGVhZGluZz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEhlYWRpbmc+RW1haWxzOiA8L0hlYWRpbmc+XHJcbiAgICAgICAgICB7ZW1haWxzLm1hcCgoZW1haWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxFbWFpbFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPEVtYWlsIGVtYWlsTWVzc2FnZT17ZW1haWx9IGluZGV4PXtpbmRleH0gLz5cclxuICAgICAgICAgICAgICA8RGVsZXRlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8RGVsZXRlRm9yZXZlckljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L0RlbGV0ZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvRW1haWxXcmFwcGVyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsc0NhcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=