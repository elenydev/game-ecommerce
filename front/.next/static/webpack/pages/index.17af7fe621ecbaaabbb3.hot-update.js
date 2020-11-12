webpackHotUpdate_N_E("pages/index",{

/***/ "./Reducers/productsSlice.js":
/*!***********************************!*\
  !*** ./Reducers/productsSlice.js ***!
  \***********************************/
/*! exports provided: productsSlice, increaseAmount, decreaseAmount, addProductToCart, clearCart, selectProducts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsSlice", function() { return productsSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseAmount", function() { return increaseAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseAmount", function() { return decreaseAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductToCart", function() { return addProductToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCart", function() { return clearCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProducts", function() { return selectProducts; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _s = $RefreshSig$();



var productsSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "products",
  initialState: {
    products: []
  },
  reducers: {
    increaseAmount: function increaseAmount(state, action) {
      if (state.products[action.payload].amount <= state.products[action.payload].availableAmount) {
        state.products[action.payload].amount = state.products[action.payload].amount + 1;
      }
    },
    decreaseAmount: function decreaseAmount(state, action) {
      if (state.products[action.payload].amount > 1) {
        state.products[action.payload].amount = state.products[action.payload].amount - 1;
      } else if (state.products[action.payload].amount = 1) {
        state.products.splice(action.payload, 1);
      }
    },
    addProductToCart: _s(function addProductToCart(state, action) {
      _s();

      var products = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(selectProducts);
      console.log(products);
      ;
      state.products.push(action.payload);
    }, "LHHiTPAlk+gTfGHSFrm+oO4oO3A=", false, function () {
      return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
    }),
    clearCart: function clearCart(state) {
      state.products = [];
    }
  }
});
var _productsSlice$action = productsSlice.actions,
    increaseAmount = _productsSlice$action.increaseAmount,
    decreaseAmount = _productsSlice$action.decreaseAmount,
    addProductToCart = _productsSlice$action.addProductToCart,
    clearCart = _productsSlice$action.clearCart;

var selectProducts = function selectProducts(state) {
  return state.products;
};
/* harmony default export */ __webpack_exports__["default"] = (productsSlice.reducer);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vUmVkdWNlcnMvcHJvZHVjdHNTbGljZS5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0c1NsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicHJvZHVjdHMiLCJyZWR1Y2VycyIsImluY3JlYXNlQW1vdW50Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYW1vdW50IiwiYXZhaWxhYmxlQW1vdW50IiwiZGVjcmVhc2VBbW91bnQiLCJzcGxpY2UiLCJhZGRQcm9kdWN0VG9DYXJ0IiwidXNlU2VsZWN0b3IiLCJzZWxlY3RQcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiY2xlYXJDYXJ0IiwiYWN0aW9ucyIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxhQUFhLEdBQUdDLG9FQUFXLENBQUM7QUFDdkNDLE1BQUksRUFBRSxVQURpQztBQUV2Q0MsY0FBWSxFQUFFO0FBQ1pDLFlBQVEsRUFBRTtBQURFLEdBRnlCO0FBS3ZDQyxVQUFRLEVBQUU7QUFDUkMsa0JBQWMsRUFBRSx3QkFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2pDLFVBQ0VELEtBQUssQ0FBQ0gsUUFBTixDQUFlSSxNQUFNLENBQUNDLE9BQXRCLEVBQStCQyxNQUEvQixJQUNBSCxLQUFLLENBQUNILFFBQU4sQ0FBZUksTUFBTSxDQUFDQyxPQUF0QixFQUErQkUsZUFGakMsRUFHRTtBQUNBSixhQUFLLENBQUNILFFBQU4sQ0FBZUksTUFBTSxDQUFDQyxPQUF0QixFQUErQkMsTUFBL0IsR0FDRUgsS0FBSyxDQUFDSCxRQUFOLENBQWVJLE1BQU0sQ0FBQ0MsT0FBdEIsRUFBK0JDLE1BQS9CLEdBQXdDLENBRDFDO0FBRUQ7QUFDRixLQVRPO0FBVVJFLGtCQUFjLEVBQUUsd0JBQUNMLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQyxVQUFJRCxLQUFLLENBQUNILFFBQU4sQ0FBZUksTUFBTSxDQUFDQyxPQUF0QixFQUErQkMsTUFBL0IsR0FBd0MsQ0FBNUMsRUFBK0M7QUFDN0NILGFBQUssQ0FBQ0gsUUFBTixDQUFlSSxNQUFNLENBQUNDLE9BQXRCLEVBQStCQyxNQUEvQixHQUNFSCxLQUFLLENBQUNILFFBQU4sQ0FBZUksTUFBTSxDQUFDQyxPQUF0QixFQUErQkMsTUFBL0IsR0FBd0MsQ0FEMUM7QUFFRCxPQUhELE1BR08sSUFBS0gsS0FBSyxDQUFDSCxRQUFOLENBQWVJLE1BQU0sQ0FBQ0MsT0FBdEIsRUFBK0JDLE1BQS9CLEdBQXdDLENBQTdDLEVBQWlEO0FBQ3RESCxhQUFLLENBQUNILFFBQU4sQ0FBZVMsTUFBZixDQUFzQkwsTUFBTSxDQUFDQyxPQUE3QixFQUFzQyxDQUF0QztBQUNEO0FBQ0YsS0FqQk87QUFrQlJLLG9CQUFnQixLQUFFLDBCQUFDUCxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFBQTs7QUFDbkMsVUFBTUosUUFBUSxHQUFHVywrREFBVyxDQUFDQyxjQUFELENBQTVCO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZZCxRQUFaO0FBQXNCO0FBRXRCRyxXQUFLLENBQUNILFFBQU4sQ0FBZWUsSUFBZixDQUFvQlgsTUFBTSxDQUFDQyxPQUEzQjtBQUNELEtBTGU7QUFBQSxjQUNHTSx1REFESDtBQUFBLE1BbEJSO0FBd0JSSyxhQUFTLEVBQUUsbUJBQUNiLEtBQUQsRUFBVztBQUNwQkEsV0FBSyxDQUFDSCxRQUFOLEdBQWlCLEVBQWpCO0FBQ0Q7QUExQk87QUFMNkIsQ0FBRCxDQUFqQzs0QkF3Q0hKLGFBQWEsQ0FBQ3FCLE87SUFKaEJmLGMseUJBQUFBLGM7SUFDQU0sYyx5QkFBQUEsYztJQUNBRSxnQix5QkFBQUEsZ0I7SUFDQU0sUyx5QkFBQUEsUzs7QUFHSyxJQUFNSixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNULEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNILFFBQWpCO0FBQUEsQ0FBdkI7QUFFUUosNEVBQWEsQ0FBQ3NCLE9BQTdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE3YWY3ZmU2MjFlY2JhYWFiYmIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInByb2R1Y3RzXCIsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICBwcm9kdWN0czogW10sXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgaW5jcmVhc2VBbW91bnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBzdGF0ZS5wcm9kdWN0c1thY3Rpb24ucGF5bG9hZF0uYW1vdW50IDw9XHJcbiAgICAgICAgc3RhdGUucHJvZHVjdHNbYWN0aW9uLnBheWxvYWRdLmF2YWlsYWJsZUFtb3VudFxyXG4gICAgICApIHtcclxuICAgICAgICBzdGF0ZS5wcm9kdWN0c1thY3Rpb24ucGF5bG9hZF0uYW1vdW50ID1cclxuICAgICAgICAgIHN0YXRlLnByb2R1Y3RzW2FjdGlvbi5wYXlsb2FkXS5hbW91bnQgKyAxO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGVjcmVhc2VBbW91bnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGlmIChzdGF0ZS5wcm9kdWN0c1thY3Rpb24ucGF5bG9hZF0uYW1vdW50ID4gMSkge1xyXG4gICAgICAgIHN0YXRlLnByb2R1Y3RzW2FjdGlvbi5wYXlsb2FkXS5hbW91bnQgPVxyXG4gICAgICAgICAgc3RhdGUucHJvZHVjdHNbYWN0aW9uLnBheWxvYWRdLmFtb3VudCAtIDE7XHJcbiAgICAgIH0gZWxzZSBpZiAoKHN0YXRlLnByb2R1Y3RzW2FjdGlvbi5wYXlsb2FkXS5hbW91bnQgPSAxKSkge1xyXG4gICAgICAgIHN0YXRlLnByb2R1Y3RzLnNwbGljZShhY3Rpb24ucGF5bG9hZCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRQcm9kdWN0VG9DYXJ0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBwcm9kdWN0cyA9IHVzZVNlbGVjdG9yKHNlbGVjdFByb2R1Y3RzKVxyXG4gICAgICBjb25zb2xlLmxvZyhwcm9kdWN0cyk7O1xyXG5cclxuICAgICAgc3RhdGUucHJvZHVjdHMucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJDYXJ0OiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUucHJvZHVjdHMgPSBbXTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gIGluY3JlYXNlQW1vdW50LFxyXG4gIGRlY3JlYXNlQW1vdW50LFxyXG4gIGFkZFByb2R1Y3RUb0NhcnQsXHJcbiAgY2xlYXJDYXJ0LFxyXG59ID0gcHJvZHVjdHNTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFByb2R1Y3RzID0gKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzU2xpY2UucmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==