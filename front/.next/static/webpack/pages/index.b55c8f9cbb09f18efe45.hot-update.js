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
    addProductToCart: function addProductToCart(state, action) {
      if (state.products.includes(action.payload)) {
        var existingProduct = state.products.find(function (product) {
          return product === action.payload;
        });
      }

      state.products.push(action.payload);
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vUmVkdWNlcnMvcHJvZHVjdHNTbGljZS5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0c1NsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicHJvZHVjdHMiLCJyZWR1Y2VycyIsImluY3JlYXNlQW1vdW50Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYW1vdW50IiwiYXZhaWxhYmxlQW1vdW50IiwiZGVjcmVhc2VBbW91bnQiLCJzcGxpY2UiLCJhZGRQcm9kdWN0VG9DYXJ0IiwiaW5jbHVkZXMiLCJleGlzdGluZ1Byb2R1Y3QiLCJmaW5kIiwicHJvZHVjdCIsInB1c2giLCJjbGVhckNhcnQiLCJhY3Rpb25zIiwic2VsZWN0UHJvZHVjdHMiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsYUFBYSxHQUFHQyxvRUFBVyxDQUFDO0FBQ3ZDQyxNQUFJLEVBQUUsVUFEaUM7QUFFdkNDLGNBQVksRUFBRTtBQUNaQyxZQUFRLEVBQUU7QUFERSxHQUZ5QjtBQUt2Q0MsVUFBUSxFQUFFO0FBQ1JDLGtCQUFjLEVBQUUsd0JBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQyxVQUNFRCxLQUFLLENBQUNILFFBQU4sQ0FBZUksTUFBTSxDQUFDQyxPQUF0QixFQUErQkMsTUFBL0IsSUFDQUgsS0FBSyxDQUFDSCxRQUFOLENBQWVJLE1BQU0sQ0FBQ0MsT0FBdEIsRUFBK0JFLGVBRmpDLEVBR0U7QUFDQUosYUFBSyxDQUFDSCxRQUFOLENBQWVJLE1BQU0sQ0FBQ0MsT0FBdEIsRUFBK0JDLE1BQS9CLEdBQ0VILEtBQUssQ0FBQ0gsUUFBTixDQUFlSSxNQUFNLENBQUNDLE9BQXRCLEVBQStCQyxNQUEvQixHQUF3QyxDQUQxQztBQUVEO0FBQ0YsS0FUTztBQVVSRSxrQkFBYyxFQUFFLHdCQUFDTCxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDakMsVUFBSUQsS0FBSyxDQUFDSCxRQUFOLENBQWVJLE1BQU0sQ0FBQ0MsT0FBdEIsRUFBK0JDLE1BQS9CLEdBQXdDLENBQTVDLEVBQStDO0FBQzdDSCxhQUFLLENBQUNILFFBQU4sQ0FBZUksTUFBTSxDQUFDQyxPQUF0QixFQUErQkMsTUFBL0IsR0FDRUgsS0FBSyxDQUFDSCxRQUFOLENBQWVJLE1BQU0sQ0FBQ0MsT0FBdEIsRUFBK0JDLE1BQS9CLEdBQXdDLENBRDFDO0FBRUQsT0FIRCxNQUdPLElBQUtILEtBQUssQ0FBQ0gsUUFBTixDQUFlSSxNQUFNLENBQUNDLE9BQXRCLEVBQStCQyxNQUEvQixHQUF3QyxDQUE3QyxFQUFpRDtBQUN0REgsYUFBSyxDQUFDSCxRQUFOLENBQWVTLE1BQWYsQ0FBc0JMLE1BQU0sQ0FBQ0MsT0FBN0IsRUFBc0MsQ0FBdEM7QUFDRDtBQUNGLEtBakJPO0FBa0JSSyxvQkFBZ0IsRUFBRSwwQkFBQ1AsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ25DLFVBQU1ELEtBQUssQ0FBQ0gsUUFBTixDQUFlVyxRQUFmLENBQXdCUCxNQUFNLENBQUNDLE9BQS9CLENBQU4sRUFBOEM7QUFDNUMsWUFBTU8sZUFBZSxHQUFHVCxLQUFLLENBQUNILFFBQU4sQ0FBZWEsSUFBZixDQUFvQixVQUFBQyxPQUFPO0FBQUEsaUJBQUlBLE9BQU8sS0FBS1YsTUFBTSxDQUFDQyxPQUF2QjtBQUFBLFNBQTNCLENBQXhCO0FBRUQ7O0FBQ0tGLFdBQUssQ0FBQ0gsUUFBTixDQUFlZSxJQUFmLENBQW9CWCxNQUFNLENBQUNDLE9BQTNCO0FBQ1AsS0F4Qk87QUF5QlJXLGFBQVMsRUFBRSxtQkFBQ2IsS0FBRCxFQUFXO0FBQ3BCQSxXQUFLLENBQUNILFFBQU4sR0FBaUIsRUFBakI7QUFDRDtBQTNCTztBQUw2QixDQUFELENBQWpDOzRCQXlDSEosYUFBYSxDQUFDcUIsTztJQUpoQmYsYyx5QkFBQUEsYztJQUNBTSxjLHlCQUFBQSxjO0lBQ0FFLGdCLHlCQUFBQSxnQjtJQUNBTSxTLHlCQUFBQSxTOztBQUdLLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ2YsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0gsUUFBakI7QUFBQSxDQUF2QjtBQUVRSiw0RUFBYSxDQUFDdUIsT0FBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjU1YzhmOWNiYjA5ZjE4ZWZlNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwicHJvZHVjdHNcIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHByb2R1Y3RzOiBbXSxcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBpbmNyZWFzZUFtb3VudDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHN0YXRlLnByb2R1Y3RzW2FjdGlvbi5wYXlsb2FkXS5hbW91bnQgPD1cclxuICAgICAgICBzdGF0ZS5wcm9kdWN0c1thY3Rpb24ucGF5bG9hZF0uYXZhaWxhYmxlQW1vdW50XHJcbiAgICAgICkge1xyXG4gICAgICAgIHN0YXRlLnByb2R1Y3RzW2FjdGlvbi5wYXlsb2FkXS5hbW91bnQgPVxyXG4gICAgICAgICAgc3RhdGUucHJvZHVjdHNbYWN0aW9uLnBheWxvYWRdLmFtb3VudCArIDE7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZWNyZWFzZUFtb3VudDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgaWYgKHN0YXRlLnByb2R1Y3RzW2FjdGlvbi5wYXlsb2FkXS5hbW91bnQgPiAxKSB7XHJcbiAgICAgICAgc3RhdGUucHJvZHVjdHNbYWN0aW9uLnBheWxvYWRdLmFtb3VudCA9XHJcbiAgICAgICAgICBzdGF0ZS5wcm9kdWN0c1thY3Rpb24ucGF5bG9hZF0uYW1vdW50IC0gMTtcclxuICAgICAgfSBlbHNlIGlmICgoc3RhdGUucHJvZHVjdHNbYWN0aW9uLnBheWxvYWRdLmFtb3VudCA9IDEpKSB7XHJcbiAgICAgICAgc3RhdGUucHJvZHVjdHMuc3BsaWNlKGFjdGlvbi5wYXlsb2FkLCAxKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFkZFByb2R1Y3RUb0NhcnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGlmICAgKHN0YXRlLnByb2R1Y3RzLmluY2x1ZGVzKGFjdGlvbi5wYXlsb2FkKSl7XHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdQcm9kdWN0ID0gc3RhdGUucHJvZHVjdHMuZmluZChwcm9kdWN0ID0+IHByb2R1Y3QgPT09IGFjdGlvbi5wYXlsb2FkKVxyXG5cclxuICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5wcm9kdWN0cy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIH0sXHJcbiAgICBjbGVhckNhcnQ6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5wcm9kdWN0cyA9IFtdO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgaW5jcmVhc2VBbW91bnQsXHJcbiAgZGVjcmVhc2VBbW91bnQsXHJcbiAgYWRkUHJvZHVjdFRvQ2FydCxcclxuICBjbGVhckNhcnQsXHJcbn0gPSBwcm9kdWN0c1NsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0UHJvZHVjdHMgPSAoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHNTbGljZS5yZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9