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
      var request;
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
              _context2.next = 9;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 6]]);
    }));

    return function deleteEmailFromDatabase(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleDelete = function handleDelete(index) {
    console.log(index);
    setEmails(emails.splice(index, 1));
  };

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
      lineNumber: 90,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Heading, {
        children: "Emails: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, _this), emails.map(function (email, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(EmailWrapper, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Email_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
            emailMessage: email,
            index: index
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(DeleteWrapper, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
              onClick: function onClick() {
                return deleteEmailFromDatabase(email);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 15
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }, _this);
      })]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FbWFpbHNDYXJ0L2luZGV4LmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJIZWFkaW5nIiwiaDEiLCJFbWFpbFdyYXBwZXIiLCJEZWxldGVXcmFwcGVyIiwiRW1haWxzQ2FydCIsInVzZVN0YXRlIiwiZW1haWxzIiwic2V0RW1haWxzIiwiZmV0Y2hFbWFpbHMiLCJmZXRjaCIsInF1ZXJ5IiwianNvbiIsInJlc3BvbnNlIiwicmV2ZXJzZSIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVFbWFpbEZyb21EYXRhYmFzZSIsImVtYWlsIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVxdWVzdCIsImhhbmRsZURlbGV0ZSIsImluZGV4Iiwic3BsaWNlIiwidXNlRWZmZWN0IiwiaXNNb3VudGVkIiwibGVuZ3RoIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0hBQWI7S0FBTUYsTztBQVNOLElBQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0csRUFBVjtBQUFBO0FBQUE7QUFBQSw0RUFBYjtNQUFNRCxPO0FBT04sSUFBTUUsWUFBWSxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJLQUFsQjtNQUFNRyxZO0FBYU4sSUFBTUMsYUFBYSxHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlJQUFuQjtNQUFNSSxhOztBQVVOLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUNoQkMsTUFEZ0I7QUFBQSxNQUNSQyxTQURROztBQUd2QixNQUFN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MTZlODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBFbWFpbCBmcm9tIFwiLi4vRW1haWwvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgRGVsZXRlRm9yZXZlckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVGb3JldmVyXCI7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkaW5nID0gc3R5bGVkLmgxYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGNvbG9yOiByZ2IoMjU1IDkwIDkwIC85MCUpO1xyXG5gO1xyXG5cclxuY29uc3QgRW1haWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSA5MCA5MCAvNjAlKTtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEZWxldGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICYgPiAuTXVpSWNvbkJ1dHRvbi1yb290IHtcclxuICAgIGNvbG9yOiByZ2IoMjU1IDkwIDkwIC85MCUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRW1haWxzQ2FydCA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWxzLCBzZXRFbWFpbHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBmZXRjaEVtYWlscyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZ2V0RW1haWxzXCIpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5Lmpzb24oKTtcclxuICAgICAgc2V0RW1haWxzKHJlc3BvbnNlLmVtYWlscy5yZXZlcnNlKCkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlRW1haWxGcm9tRGF0YWJhc2UgPSBhc3luYyAoZW1haWwpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZW1vdmVFbWFpbFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlbWFpbCksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgIHNldEVtYWlscyhlbWFpbHMuc3BsaWNlKGluZGV4LCAxKSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlO1xyXG5cclxuICAgIGZldGNoRW1haWxzKCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIHtlbWFpbHMgJiYgZW1haWxzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICA8SGVhZGluZz5XZSBkb24ndCBoYXZlIGFueSBlbWFpbHM8L0hlYWRpbmc+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxIZWFkaW5nPkVtYWlsczogPC9IZWFkaW5nPlxyXG4gICAgICAgICAge2VtYWlscy5tYXAoKGVtYWlsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8RW1haWxXcmFwcGVyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxFbWFpbCBlbWFpbE1lc3NhZ2U9e2VtYWlsfSBpbmRleD17aW5kZXh9IC8+XHJcbiAgICAgICAgICAgICAgPERlbGV0ZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVFbWFpbEZyb21EYXRhYmFzZShlbWFpbCl9PlxyXG4gICAgICAgICAgICAgICAgICA8RGVsZXRlRm9yZXZlckljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L0RlbGV0ZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvRW1haWxXcmFwcGVyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsc0NhcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=