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
      var data = state.products.data;
      ;
      ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vUmVkdWNlcnMvcHJvZHVjdHNTbGljZS5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0c1NsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicHJvZHVjdHMiLCJyZWR1Y2VycyIsImluY3JlYXNlQW1vdW50Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYW1vdW50IiwiYXZhaWxhYmxlQW1vdW50IiwiZGVjcmVhc2VBbW91bnQiLCJzcGxpY2UiLCJhZGRQcm9kdWN0VG9DYXJ0IiwiZGF0YSIsInB1c2giLCJjbGVhckNhcnQiLCJhY3Rpb25zIiwic2VsZWN0UHJvZHVjdHMiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsYUFBYSxHQUFHQyxvRUFBVyxDQUFDO0FBQ3ZDQyxNQUFJLEVBQUUsVUFEaUM7QUFFdkNDLGNBQVksRUFBRTtBQUNaQyxZQUFRLEVBQUU7QUFERSxHQUZ5QjtBQUt2Q0MsVUFBUSxFQUFFO0FBQ1JDLGtCQUFjLEVBQUUsd0JBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQyxVQUNFRCxLQUFLLENBQUNILFFBQU4sQ0FBZUksTUFBTSxDQUFDQyxPQUF0QixFQUErQkMsTUFBL0IsSUFDQUgsS0FBSyxDQUFDSCxRQUFOLENBQWVJLE1BQU0sQ0FBQ0MsT0FBdEIsRUFBK0JFLGVBRmpDLEVBR0U7QUFDQUosYUFBSyxDQUFDSCxRQUFOLENBQWVJLE1BQU0sQ0FBQ0MsT0FBdEIsRUFBK0JDLE1BQS9CLEdBQ0VILEtBQUssQ0FBQ0gsUUFBTixDQUFlSSxNQUFNLENBQUNDLE9BQXRCLEVBQStCQyxNQUEvQixHQUF3QyxDQUQxQztBQUVEO0FBQ0YsS0FUTztBQVVSRSxrQkFBYyxFQUFFLHdCQUFDTCxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDakMsVUFBSUQsS0FBSyxDQUFDSCxRQUFOLENBQWVJLE1BQU0sQ0FBQ0MsT0FBdEIsRUFBK0JDLE1BQS9CLEdBQXdDLENBQTVDLEVBQStDO0FBQzdDSCxhQUFLLENBQUNILFFBQU4sQ0FBZUksTUFBTSxDQUFDQyxPQUF0QixFQUErQkMsTUFBL0IsR0FDRUgsS0FBSyxDQUFDSCxRQUFOLENBQWVJLE1BQU0sQ0FBQ0MsT0FBdEIsRUFBK0JDLE1BQS9CLEdBQXdDLENBRDFDO0FBRUQsT0FIRCxNQUdPLElBQUtILEtBQUssQ0FBQ0gsUUFBTixDQUFlSSxNQUFNLENBQUNDLE9BQXRCLEVBQStCQyxNQUEvQixHQUF3QyxDQUE3QyxFQUFpRDtBQUN0REgsYUFBSyxDQUFDSCxRQUFOLENBQWVTLE1BQWYsQ0FBc0JMLE1BQU0sQ0FBQ0MsT0FBN0IsRUFBc0MsQ0FBdEM7QUFDRDtBQUNGLEtBakJPO0FBa0JSSyxvQkFBZ0IsRUFBRSwwQkFBQ1AsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQUEsVUFDekJPLElBRHlCLEdBQ2RSLEtBQUssQ0FBQ0gsUUFEUSxDQUN6QlcsSUFEeUI7QUFDQztBQUFDO0FBQ3JDUixXQUFLLENBQUNILFFBQU4sQ0FBZVksSUFBZixDQUFvQlIsTUFBTSxDQUFDQyxPQUEzQjtBQUNELEtBckJPO0FBc0JSUSxhQUFTLEVBQUUsbUJBQUNWLEtBQUQsRUFBVztBQUNwQkEsV0FBSyxDQUFDSCxRQUFOLEdBQWlCLEVBQWpCO0FBQ0Q7QUF4Qk87QUFMNkIsQ0FBRCxDQUFqQzs0QkFzQ0hKLGFBQWEsQ0FBQ2tCLE87SUFKaEJaLGMseUJBQUFBLGM7SUFDQU0sYyx5QkFBQUEsYztJQUNBRSxnQix5QkFBQUEsZ0I7SUFDQUcsUyx5QkFBQUEsUzs7QUFHSyxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNaLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNILFFBQWpCO0FBQUEsQ0FBdkI7QUFFUUosNEVBQWEsQ0FBQ29CLE9BQTdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEzMTQwNjJhZmNkYzhjYWJlNTQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInByb2R1Y3RzXCIsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICBwcm9kdWN0czogW10sXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgaW5jcmVhc2VBbW91bnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBzdGF0ZS5wcm9kdWN0c1thY3Rpb24ucGF5bG9hZF0uYW1vdW50IDw9XHJcbiAgICAgICAgc3RhdGUucHJvZHVjdHNbYWN0aW9uLnBheWxvYWRdLmF2YWlsYWJsZUFtb3VudFxyXG4gICAgICApIHtcclxuICAgICAgICBzdGF0ZS5wcm9kdWN0c1thY3Rpb24ucGF5bG9hZF0uYW1vdW50ID1cclxuICAgICAgICAgIHN0YXRlLnByb2R1Y3RzW2FjdGlvbi5wYXlsb2FkXS5hbW91bnQgKyAxO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGVjcmVhc2VBbW91bnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGlmIChzdGF0ZS5wcm9kdWN0c1thY3Rpb24ucGF5bG9hZF0uYW1vdW50ID4gMSkge1xyXG4gICAgICAgIHN0YXRlLnByb2R1Y3RzW2FjdGlvbi5wYXlsb2FkXS5hbW91bnQgPVxyXG4gICAgICAgICAgc3RhdGUucHJvZHVjdHNbYWN0aW9uLnBheWxvYWRdLmFtb3VudCAtIDE7XHJcbiAgICAgIH0gZWxzZSBpZiAoKHN0YXRlLnByb2R1Y3RzW2FjdGlvbi5wYXlsb2FkXS5hbW91bnQgPSAxKSkge1xyXG4gICAgICAgIHN0YXRlLnByb2R1Y3RzLnNwbGljZShhY3Rpb24ucGF5bG9hZCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRQcm9kdWN0VG9DYXJ0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7ICAgZGF0YSAgIH0gPSBzdGF0ZS5wcm9kdWN0czs7O1xyXG4gICAgICBzdGF0ZS5wcm9kdWN0cy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIH0sXHJcbiAgICBjbGVhckNhcnQ6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5wcm9kdWN0cyA9IFtdO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgaW5jcmVhc2VBbW91bnQsXHJcbiAgZGVjcmVhc2VBbW91bnQsXHJcbiAgYWRkUHJvZHVjdFRvQ2FydCxcclxuICBjbGVhckNhcnQsXHJcbn0gPSBwcm9kdWN0c1NsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0UHJvZHVjdHMgPSAoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHNTbGljZS5yZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9