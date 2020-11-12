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
        console.log('jest');
        var existingProduct = state.products.find(function (product) {
          return product === action.payload;
        });
        console.log(existingProduct);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vUmVkdWNlcnMvcHJvZHVjdHNTbGljZS5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0c1NsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicHJvZHVjdHMiLCJyZWR1Y2VycyIsImluY3JlYXNlQW1vdW50Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYW1vdW50IiwiYXZhaWxhYmxlQW1vdW50IiwiZGVjcmVhc2VBbW91bnQiLCJzcGxpY2UiLCJhZGRQcm9kdWN0VG9DYXJ0IiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwiZXhpc3RpbmdQcm9kdWN0IiwiZmluZCIsInByb2R1Y3QiLCJwdXNoIiwiY2xlYXJDYXJ0IiwiYWN0aW9ucyIsInNlbGVjdFByb2R1Y3RzIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLGFBQWEsR0FBR0Msb0VBQVcsQ0FBQztBQUN2Q0MsTUFBSSxFQUFFLFVBRGlDO0FBRXZDQyxjQUFZLEVBQUU7QUFDWkMsWUFBUSxFQUFFO0FBREUsR0FGeUI7QUFLdkNDLFVBQVEsRUFBRTtBQUNSQyxrQkFBYyxFQUFFLHdCQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDakMsVUFDRUQsS0FBSyxDQUFDSCxRQUFOLENBQWVJLE1BQU0sQ0FBQ0MsT0FBdEIsRUFBK0JDLE1BQS9CLElBQ0FILEtBQUssQ0FBQ0gsUUFBTixDQUFlSSxNQUFNLENBQUNDLE9BQXRCLEVBQStCRSxlQUZqQyxFQUdFO0FBQ0FKLGFBQUssQ0FBQ0gsUUFBTixDQUFlSSxNQUFNLENBQUNDLE9BQXRCLEVBQStCQyxNQUEvQixHQUNFSCxLQUFLLENBQUNILFFBQU4sQ0FBZUksTUFBTSxDQUFDQyxPQUF0QixFQUErQkMsTUFBL0IsR0FBd0MsQ0FEMUM7QUFFRDtBQUNGLEtBVE87QUFVUkUsa0JBQWMsRUFBRSx3QkFBQ0wsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2pDLFVBQUlELEtBQUssQ0FBQ0gsUUFBTixDQUFlSSxNQUFNLENBQUNDLE9BQXRCLEVBQStCQyxNQUEvQixHQUF3QyxDQUE1QyxFQUErQztBQUM3Q0gsYUFBSyxDQUFDSCxRQUFOLENBQWVJLE1BQU0sQ0FBQ0MsT0FBdEIsRUFBK0JDLE1BQS9CLEdBQ0VILEtBQUssQ0FBQ0gsUUFBTixDQUFlSSxNQUFNLENBQUNDLE9BQXRCLEVBQStCQyxNQUEvQixHQUF3QyxDQUQxQztBQUVELE9BSEQsTUFHTyxJQUFLSCxLQUFLLENBQUNILFFBQU4sQ0FBZUksTUFBTSxDQUFDQyxPQUF0QixFQUErQkMsTUFBL0IsR0FBd0MsQ0FBN0MsRUFBaUQ7QUFDdERILGFBQUssQ0FBQ0gsUUFBTixDQUFlUyxNQUFmLENBQXNCTCxNQUFNLENBQUNDLE9BQTdCLEVBQXNDLENBQXRDO0FBQ0Q7QUFDRixLQWpCTztBQWtCUkssb0JBQWdCLEVBQUUsMEJBQUNQLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNuQyxVQUFHRCxLQUFLLENBQUNILFFBQU4sQ0FBZVcsUUFBZixDQUF3QlAsTUFBTSxDQUFDQyxPQUEvQixDQUFILEVBQTJDO0FBQ3pDTyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsWUFBTUMsZUFBZSxHQUFHWCxLQUFLLENBQUNILFFBQU4sQ0FBZWUsSUFBZixDQUFvQixVQUFBQyxPQUFPO0FBQUEsaUJBQUlBLE9BQU8sS0FBS1osTUFBTSxDQUFDQyxPQUF2QjtBQUFBLFNBQTNCLENBQXhCO0FBQ0FPLGVBQU8sQ0FBQ0MsR0FBUixDQUFZQyxlQUFaO0FBQ0Q7O0FBQ0tYLFdBQUssQ0FBQ0gsUUFBTixDQUFlaUIsSUFBZixDQUFvQmIsTUFBTSxDQUFDQyxPQUEzQjtBQUNQLEtBekJPO0FBMEJSYSxhQUFTLEVBQUUsbUJBQUNmLEtBQUQsRUFBVztBQUNwQkEsV0FBSyxDQUFDSCxRQUFOLEdBQWlCLEVBQWpCO0FBQ0Q7QUE1Qk87QUFMNkIsQ0FBRCxDQUFqQzs0QkEwQ0hKLGFBQWEsQ0FBQ3VCLE87SUFKaEJqQixjLHlCQUFBQSxjO0lBQ0FNLGMseUJBQUFBLGM7SUFDQUUsZ0IseUJBQUFBLGdCO0lBQ0FRLFMseUJBQUFBLFM7O0FBR0ssSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDakIsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0gsUUFBakI7QUFBQSxDQUF2QjtBQUVRSiw0RUFBYSxDQUFDeUIsT0FBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmMxMWQxOGY4OGRlODNjMTg3MTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwicHJvZHVjdHNcIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHByb2R1Y3RzOiBbXSxcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBpbmNyZWFzZUFtb3VudDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHN0YXRlLnByb2R1Y3RzW2FjdGlvbi5wYXlsb2FkXS5hbW91bnQgPD1cclxuICAgICAgICBzdGF0ZS5wcm9kdWN0c1thY3Rpb24ucGF5bG9hZF0uYXZhaWxhYmxlQW1vdW50XHJcbiAgICAgICkge1xyXG4gICAgICAgIHN0YXRlLnByb2R1Y3RzW2FjdGlvbi5wYXlsb2FkXS5hbW91bnQgPVxyXG4gICAgICAgICAgc3RhdGUucHJvZHVjdHNbYWN0aW9uLnBheWxvYWRdLmFtb3VudCArIDE7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZWNyZWFzZUFtb3VudDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgaWYgKHN0YXRlLnByb2R1Y3RzW2FjdGlvbi5wYXlsb2FkXS5hbW91bnQgPiAxKSB7XHJcbiAgICAgICAgc3RhdGUucHJvZHVjdHNbYWN0aW9uLnBheWxvYWRdLmFtb3VudCA9XHJcbiAgICAgICAgICBzdGF0ZS5wcm9kdWN0c1thY3Rpb24ucGF5bG9hZF0uYW1vdW50IC0gMTtcclxuICAgICAgfSBlbHNlIGlmICgoc3RhdGUucHJvZHVjdHNbYWN0aW9uLnBheWxvYWRdLmFtb3VudCA9IDEpKSB7XHJcbiAgICAgICAgc3RhdGUucHJvZHVjdHMuc3BsaWNlKGFjdGlvbi5wYXlsb2FkLCAxKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFkZFByb2R1Y3RUb0NhcnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGlmKHN0YXRlLnByb2R1Y3RzLmluY2x1ZGVzKGFjdGlvbi5wYXlsb2FkKSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2plc3QnKVxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nUHJvZHVjdCA9IHN0YXRlLnByb2R1Y3RzLmZpbmQocHJvZHVjdCA9PiBwcm9kdWN0ID09PSBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICBjb25zb2xlLmxvZyhleGlzdGluZ1Byb2R1Y3QpXHJcbiAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUucHJvZHVjdHMucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJDYXJ0OiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUucHJvZHVjdHMgPSBbXTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gIGluY3JlYXNlQW1vdW50LFxyXG4gIGRlY3JlYXNlQW1vdW50LFxyXG4gIGFkZFByb2R1Y3RUb0NhcnQsXHJcbiAgY2xlYXJDYXJ0LFxyXG59ID0gcHJvZHVjdHNTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFByb2R1Y3RzID0gKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzU2xpY2UucmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==