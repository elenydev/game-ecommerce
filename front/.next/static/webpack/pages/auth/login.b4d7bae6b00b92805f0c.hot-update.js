webpackHotUpdate_N_E("pages/auth/login",{

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
      console.log(state.products);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vUmVkdWNlcnMvcHJvZHVjdHNTbGljZS5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0c1NsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicHJvZHVjdHMiLCJyZWR1Y2VycyIsImluY3JlYXNlQW1vdW50Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYW1vdW50IiwiYXZhaWxhYmxlQW1vdW50IiwiZGVjcmVhc2VBbW91bnQiLCJzcGxpY2UiLCJhZGRQcm9kdWN0VG9DYXJ0IiwidXNlU2VsZWN0b3IiLCJzZWxlY3RQcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiY2xlYXJDYXJ0IiwiYWN0aW9ucyIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxhQUFhLEdBQUdDLG9FQUFXLENBQUM7QUFDdkNDLE1BQUksRUFBRSxVQURpQztBQUV2Q0MsY0FBWSxFQUFFO0FBQ1pDLFlBQVEsRUFBRTtBQURFLEdBRnlCO0FBS3ZDQyxVQUFRLEVBQUU7QUFDUkMsa0JBQWMsRUFBRSx3QkFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2pDLFVBQ0VELEtBQUssQ0FBQ0gsUUFBTixDQUFlSSxNQUFNLENBQUNDLE9BQXRCLEVBQStCQyxNQUEvQixJQUNBSCxLQUFLLENBQUNILFFBQU4sQ0FBZUksTUFBTSxDQUFDQyxPQUF0QixFQUErQkUsZUFGakMsRUFHRTtBQUNBSixhQUFLLENBQUNILFFBQU4sQ0FBZUksTUFBTSxDQUFDQyxPQUF0QixFQUErQkMsTUFBL0IsR0FDRUgsS0FBSyxDQUFDSCxRQUFOLENBQWVJLE1BQU0sQ0FBQ0MsT0FBdEIsRUFBK0JDLE1BQS9CLEdBQXdDLENBRDFDO0FBRUQ7QUFDRixLQVRPO0FBVVJFLGtCQUFjLEVBQUUsd0JBQUNMLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQyxVQUFJRCxLQUFLLENBQUNILFFBQU4sQ0FBZUksTUFBTSxDQUFDQyxPQUF0QixFQUErQkMsTUFBL0IsR0FBd0MsQ0FBNUMsRUFBK0M7QUFDN0NILGFBQUssQ0FBQ0gsUUFBTixDQUFlSSxNQUFNLENBQUNDLE9BQXRCLEVBQStCQyxNQUEvQixHQUNFSCxLQUFLLENBQUNILFFBQU4sQ0FBZUksTUFBTSxDQUFDQyxPQUF0QixFQUErQkMsTUFBL0IsR0FBd0MsQ0FEMUM7QUFFRCxPQUhELE1BR08sSUFBS0gsS0FBSyxDQUFDSCxRQUFOLENBQWVJLE1BQU0sQ0FBQ0MsT0FBdEIsRUFBK0JDLE1BQS9CLEdBQXdDLENBQTdDLEVBQWlEO0FBQ3RESCxhQUFLLENBQUNILFFBQU4sQ0FBZVMsTUFBZixDQUFzQkwsTUFBTSxDQUFDQyxPQUE3QixFQUFzQyxDQUF0QztBQUNEO0FBQ0YsS0FqQk87QUFrQlJLLG9CQUFnQixLQUFFLDBCQUFDUCxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFBQTs7QUFDbkMsVUFBTUosUUFBUSxHQUFHVywrREFBVyxDQUFDQyxjQUFELENBQTVCO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZWCxLQUFLLENBQUNILFFBQWxCO0FBQTRCO0FBRTVCRyxXQUFLLENBQUNILFFBQU4sQ0FBZWUsSUFBZixDQUFvQlgsTUFBTSxDQUFDQyxPQUEzQjtBQUNELEtBTGU7QUFBQSxjQUNHTSx1REFESDtBQUFBLE1BbEJSO0FBd0JSSyxhQUFTLEVBQUUsbUJBQUNiLEtBQUQsRUFBVztBQUNwQkEsV0FBSyxDQUFDSCxRQUFOLEdBQWlCLEVBQWpCO0FBQ0Q7QUExQk87QUFMNkIsQ0FBRCxDQUFqQzs0QkF3Q0hKLGFBQWEsQ0FBQ3FCLE87SUFKaEJmLGMseUJBQUFBLGM7SUFDQU0sYyx5QkFBQUEsYztJQUNBRSxnQix5QkFBQUEsZ0I7SUFDQU0sUyx5QkFBQUEsUzs7QUFHSyxJQUFNSixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNULEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNILFFBQWpCO0FBQUEsQ0FBdkI7QUFFUUosNEVBQWEsQ0FBQ3NCLE9BQTdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvbG9naW4uYjRkN2JhZTZiMDBiOTI4MDVmMGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwicHJvZHVjdHNcIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHByb2R1Y3RzOiBbXSxcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBpbmNyZWFzZUFtb3VudDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHN0YXRlLnByb2R1Y3RzW2FjdGlvbi5wYXlsb2FkXS5hbW91bnQgPD1cclxuICAgICAgICBzdGF0ZS5wcm9kdWN0c1thY3Rpb24ucGF5bG9hZF0uYXZhaWxhYmxlQW1vdW50XHJcbiAgICAgICkge1xyXG4gICAgICAgIHN0YXRlLnByb2R1Y3RzW2FjdGlvbi5wYXlsb2FkXS5hbW91bnQgPVxyXG4gICAgICAgICAgc3RhdGUucHJvZHVjdHNbYWN0aW9uLnBheWxvYWRdLmFtb3VudCArIDE7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZWNyZWFzZUFtb3VudDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgaWYgKHN0YXRlLnByb2R1Y3RzW2FjdGlvbi5wYXlsb2FkXS5hbW91bnQgPiAxKSB7XHJcbiAgICAgICAgc3RhdGUucHJvZHVjdHNbYWN0aW9uLnBheWxvYWRdLmFtb3VudCA9XHJcbiAgICAgICAgICBzdGF0ZS5wcm9kdWN0c1thY3Rpb24ucGF5bG9hZF0uYW1vdW50IC0gMTtcclxuICAgICAgfSBlbHNlIGlmICgoc3RhdGUucHJvZHVjdHNbYWN0aW9uLnBheWxvYWRdLmFtb3VudCA9IDEpKSB7XHJcbiAgICAgICAgc3RhdGUucHJvZHVjdHMuc3BsaWNlKGFjdGlvbi5wYXlsb2FkLCAxKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFkZFByb2R1Y3RUb0NhcnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gdXNlU2VsZWN0b3Ioc2VsZWN0UHJvZHVjdHMpXHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnByb2R1Y3RzKTs7XHJcblxyXG4gICAgICBzdGF0ZS5wcm9kdWN0cy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIH0sXHJcbiAgICBjbGVhckNhcnQ6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5wcm9kdWN0cyA9IFtdO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgaW5jcmVhc2VBbW91bnQsXHJcbiAgZGVjcmVhc2VBbW91bnQsXHJcbiAgYWRkUHJvZHVjdFRvQ2FydCxcclxuICBjbGVhckNhcnQsXHJcbn0gPSBwcm9kdWN0c1NsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0UHJvZHVjdHMgPSAoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHNTbGljZS5yZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9