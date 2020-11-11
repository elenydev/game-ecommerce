webpackHotUpdate_N_E("pages/auth/account/cart",{

/***/ "./components/AddProductForm/index.js":
/*!********************************************!*\
  !*** ./components/AddProductForm/index.js ***!
  \********************************************/
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
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _components_Alert_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Alert/index.js */ "./components/Alert/index.js");




var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\AddProductForm\\index.js",
    _this = undefined,
    _s = $RefreshSig$();











var Form = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].form.withConfig({
  displayName: "AddProductForm__Form",
  componentId: "sc-108fhvp-0"
})(["display:flex;width:fit-content;height:100%;flex-direction:column;justify-content:space-between;align-items:center;color:white;& > .MuiButton-containedSecondary{margin:15px;background-color:#b73d1cbf;&:hover{background-color:#ff3600bf;}}& > .MuiFormLabel-root{color:white;}& > .hidden{display:none;}& > label > .MuiIconButton-colorPrimary{color:#ff3600bf !important;}& > .MuiInputBase-root{color:white !important;&::placeholder{color:white;}}"]);
_c = Form;
var ErrorSpan = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({
  displayName: "AddProductForm__ErrorSpan",
  componentId: "sc-108fhvp-1"
})(["color:#ff5a5a;font-size:12px;& > a{cursor:pointer;}"]);
_c2 = ErrorSpan;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h2.withConfig({
  displayName: "AddProductForm__Header",
  componentId: "sc-108fhvp-2"
})(["display:flex;font-weight:700;width:100%;padding:10px;justify-content:center;color:rgb(255 90 90 /60%);"]);
_c3 = Header;
var InputElement = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "AddProductForm__InputElement",
  componentId: "sc-108fhvp-3"
})(["margin:8px 0;color:white;& > .MuiInputBase-input{color:white;}"]);
_c4 = InputElement;
var SelectBox = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "AddProductForm__SelectBox",
  componentId: "sc-108fhvp-4"
})(["display:flex;flex-direction:column;align-items:flex-start;width:100%;& > .MuiFormLabel-root{margin:10px 0;color:rgba(255,255,255,0.5);}"]);
_c5 = SelectBox;
var defaultValues = {
  productName: null,
  productDescription: null,
  gameType: "War",
  prize: null,
  amount: null,
  productImage: null
};

var AddProductForm = function AddProductForm() {
  _s();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])({
    defaultValues: defaultValues
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors,
      setError = _useForm.setError,
      reset = _useForm.reset,
      control = _useForm.control;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      responseType = _useState[0],
      setResponseType = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("War"),
      gameType = _useState2[0],
      setGameType = _useState2[1];

  var clearAlert = function clearAlert() {
    return setTimeout(function () {
      return setResponseType(null);
    }, 999);
  };

  var handleChange = function handleChange(event) {
    setGameType(event.target.value);
  };

  var registerProduct = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, event) {
      var productName, productDescription, gameType, prize, amount, productImg, product, send, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              productName = data.productName, productDescription = data.productDescription, gameType = data.gameType, prize = data.prize, amount = data.amount, productImg = data.productImg;
              product = new FormData();
              product.append("productName", productName);
              product.append("productDescription", productDescription);
              product.append("gameType", gameType);
              product.append("prize", prize);
              product.append("amount", amount);
              product.append("productImg", productImg[0]);
              _context.prev = 9;
              _context.next = 12;
              return fetch("http://localhost:8080/addProduct", {
                method: "POST",
                body: product
              });

            case 12:
              send = _context.sent;
              _context.next = 15;
              return send.json();

            case 15:
              response = _context.sent;
              console.log(response);

              if (response) {
                setResponseType(response);

                if (response.product) {
                  reset();
                }
              }

              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](9);
              setResponseType({
                message: "Some error occured, try again"
              });

            case 23:
              clearAlert();

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[9, 20]]);
    }));

    return function registerProduct(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Header, {
      children: "Add product"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Form, {
      onSubmit: handleSubmit(registerProduct),
      encType: "",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InputElement, {
          type: "text",
          name: "productName",
          placeholder: "Product Name",
          inputRef: register({
            required: true
          }),
          onChange: function onChange() {
            setError("productName", {
              type: "manual",
              message: "You have to provide a product name"
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
      }, _this), errors.productName && errors.productName.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a product name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InputElement, {
          type: "text",
          name: "productDescription",
          placeholder: "Product Description",
          inputRef: register({
            required: true
          }),
          onChange: function onChange() {
            setError("productDescription", {
              type: "manual",
              message: "You have to provide a product description"
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, _this), errors.productDescription && errors.productDescription.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a product description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SelectBox, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "Select game type"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["Controller"], {
            as: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
              value: gameType,
              onChange: handleChange,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Wargame",
                children: "Wargame"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Racing",
                children: "Racing"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "MMO",
                children: "MMO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "RPG",
                children: "RPG"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "RP",
                children: "RP"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Simulation",
                children: "Simulation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Strategy",
                children: "Strategy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Sports",
                children: "Sports"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Survival",
                children: "Survival"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Battle Royale",
                children: "Battle Royale"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 17
            }, _this),
            name: "gameType",
            rules: {
              required: true
            },
            control: control
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, _this), errors.gameType && errors.gameType.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a game type"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InputElement, {
          type: "number",
          name: "prize",
          placeholder: "Enter prize",
          inputRef: register({
            required: true,
            min: 1
          }),
          onChange: function onChange() {
            setError("prize", {
              type: "manual",
              message: "You have to provide a prize"
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }, _this), errors.prize && errors.prize.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a prize"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InputElement, {
          type: "number",
          name: "amount",
          placeholder: "Enter amount of products ",
          inputRef: register({
            required: true,
            min: 1
          }),
          onChange: function onChange() {
            setError("amount", {
              type: "manual",
              message: "You have to provide amount of products"
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }, _this), errors.amount && errors.amount.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a amount of products"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        ref: register({
          required: true
        }),
        name: "productImg",
        type: "file",
        accept: ".png, .jpg, .jpeg",
        id: "productImg",
        className: "hidden",
        onChange: function onChange(e) {
          setError("productImg", {
            type: "manual",
            message: "You have to provide an product image"
          });
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "productImg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
          color: "primary",
          "aria-label": "upload picture",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 9
      }, _this), errors.productImg && errors.productImg.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a product image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SelectBox, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "Select device"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["Controller"], {
            as: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
              value: device,
              onChange: handleChange,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Desktop",
                children: "Desktop"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Playstation",
                children: "Playstation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 288,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Xbox",
                children: "Xbox"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 17
            }, _this),
            name: "device",
            rules: {
              required: true
            },
            control: control
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 9
      }, _this), errors.device && errors.device.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a device"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        type: "submit",
        variant: "contained",
        color: "secondary",
        children: "Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }, _this), responseType && responseType.product && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Alert_index_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      message: "Product succesfully added to offer",
      shouldOpen: true,
      variant: "success"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 9
    }, _this) || responseType && responseType.message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Alert_index_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      message: responseType.message,
      shouldOpen: true,
      variant: "error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 5
  }, _this);
};

_s(AddProductForm, "IPM6EE5p4ECfSjeXsL7rAMydbZA=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"]];
});

_c6 = AddProductForm;
/* harmony default export */ __webpack_exports__["default"] = (AddProductForm);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Form");
$RefreshReg$(_c2, "ErrorSpan");
$RefreshReg$(_c3, "Header");
$RefreshReg$(_c4, "InputElement");
$RefreshReg$(_c5, "SelectBox");
$RefreshReg$(_c6, "AddProductForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRQcm9kdWN0Rm9ybS9pbmRleC5qcyJdLCJuYW1lcyI6WyJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIkVycm9yU3BhbiIsInNwYW4iLCJIZWFkZXIiLCJoMiIsIklucHV0RWxlbWVudCIsIklucHV0IiwiU2VsZWN0Qm94IiwiZGl2IiwiZGVmYXVsdFZhbHVlcyIsInByb2R1Y3ROYW1lIiwicHJvZHVjdERlc2NyaXB0aW9uIiwiZ2FtZVR5cGUiLCJwcml6ZSIsImFtb3VudCIsInByb2R1Y3RJbWFnZSIsIkFkZFByb2R1Y3RGb3JtIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwic2V0RXJyb3IiLCJyZXNldCIsImNvbnRyb2wiLCJ1c2VTdGF0ZSIsInJlc3BvbnNlVHlwZSIsInNldFJlc3BvbnNlVHlwZSIsInNldEdhbWVUeXBlIiwiY2xlYXJBbGVydCIsInNldFRpbWVvdXQiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicmVnaXN0ZXJQcm9kdWN0IiwiZGF0YSIsInByZXZlbnREZWZhdWx0IiwicHJvZHVjdEltZyIsInByb2R1Y3QiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInNlbmQiLCJqc29uIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInJlcXVpcmVkIiwidHlwZSIsIm1pbiIsImUiLCJkZXZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLGljQUFWO0tBQU1GLEk7QUF1Q04sSUFBTUcsU0FBUyxHQUFHRix5REFBTSxDQUFDRyxJQUFWO0FB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RUFBQztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxJQU9FYixZQUFZLElBQUlBLFlBQVksQ0FBQ3dCLE9BQTdCLGlCQUNDLHFFQUFDLG1FQUFEO0FBQ0UsYUFBTyxFQUFFeEIsWUFBWSxDQUFDd0IsT0FEeEI7QUFFRSxnQkFBVSxFQUFFLElBRmQ7QUFHRSxhQUFPLEVBQUM7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbktOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEtELENBL05EOztHQUFNakMsYztVQUNpRUMsdUQ7OztNQURqRUQsYztBQWlPU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9hY2NvdW50L2NhcnQuMDYwNGU4MDkwNzFiODM5YzZjMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0XCI7XHJcbmltcG9ydCB7IEZvcm1MYWJlbCwgQnV0dG9uLCBDaGVja2JveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgUGhvdG9DYW1lcmEgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYVwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWxlcnQvaW5kZXguanNcIjtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICYgPiAuTXVpQnV0dG9uLWNvbnRhaW5lZFNlY29uZGFyeSB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjczZDFjYmY7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM2MDBiZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuTXVpRm9ybUxhYmVsLXJvb3Qge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJiA+IC5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICYgPiBsYWJlbCA+IC5NdWlJY29uQnV0dG9uLWNvbG9yUHJpbWFyeSB7XHJcbiAgICBjb2xvcjogI2ZmMzYwMGJmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmID4gLk11aUlucHV0QmFzZS1yb290IHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG5cclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEVycm9yU3BhbiA9IHN0eWxlZC5zcGFuYFxyXG4gIGNvbG9yOiAjZmY1YTVhO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgJiA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oMmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogcmdiKDI1NSA5MCA5MCAvNjAlKTtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0RWxlbWVudCA9IHN0eWxlZChJbnB1dClgXHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICYgPiAuTXVpSW5wdXRCYXNlLWlucHV0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWxlY3RCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJiA+IC5NdWlGb3JtTGFiZWwtcm9vdCB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcclxuICBwcm9kdWN0TmFtZTogbnVsbCxcclxuICBwcm9kdWN0RGVzY3JpcHRpb246IG51bGwsXHJcbiAgZ2FtZVR5cGU6IFwiV2FyXCIsXHJcbiAgcHJpemU6IG51bGwsXHJcbiAgYW1vdW50OiBudWxsLFxyXG4gIHByb2R1Y3RJbWFnZTogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IEFkZFByb2R1Y3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzLCBzZXRFcnJvciwgcmVzZXQsIGNvbnRyb2wgfSA9IHVzZUZvcm0oe1xyXG4gICAgZGVmYXVsdFZhbHVlcyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3Jlc3BvbnNlVHlwZSwgc2V0UmVzcG9uc2VUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtnYW1lVHlwZSwgc2V0R2FtZVR5cGVdID0gdXNlU3RhdGUoXCJXYXJcIik7XHJcbiAgY29uc3QgY2xlYXJBbGVydCA9ICgpID0+IHNldFRpbWVvdXQoKCkgPT4gc2V0UmVzcG9uc2VUeXBlKG51bGwpLCA5OTkpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEdhbWVUeXBlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJQcm9kdWN0ID0gYXN5bmMgKGRhdGEsIGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBwcm9kdWN0TmFtZSxcclxuICAgICAgcHJvZHVjdERlc2NyaXB0aW9uLFxyXG4gICAgICBnYW1lVHlwZSxcclxuICAgICAgcHJpemUsXHJcbiAgICAgIGFtb3VudCxcclxuICAgICAgcHJvZHVjdEltZyxcclxuICAgIH0gPSBkYXRhO1xyXG5cclxuICAgIGNvbnN0IHByb2R1Y3QgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHByb2R1Y3QuYXBwZW5kKFwicHJvZHVjdE5hbWVcIiwgcHJvZHVjdE5hbWUpO1xyXG4gICAgcHJvZHVjdC5hcHBlbmQoXCJwcm9kdWN0RGVzY3JpcHRpb25cIiwgcHJvZHVjdERlc2NyaXB0aW9uKTtcclxuICAgIHByb2R1Y3QuYXBwZW5kKFwiZ2FtZVR5cGVcIiwgZ2FtZVR5cGUpO1xyXG4gICAgcHJvZHVjdC5hcHBlbmQoXCJwcml6ZVwiLCBwcml6ZSk7XHJcbiAgICBwcm9kdWN0LmFwcGVuZChcImFtb3VudFwiLCBhbW91bnQpO1xyXG4gICAgcHJvZHVjdC5hcHBlbmQoXCJwcm9kdWN0SW1nXCIsIHByb2R1Y3RJbWdbMF0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNlbmQgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hZGRQcm9kdWN0XCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IHByb2R1Y3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNlbmQuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgIHNldFJlc3BvbnNlVHlwZShyZXNwb25zZSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnByb2R1Y3QpIHtcclxuICAgICAgICAgIHJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0UmVzcG9uc2VUeXBlKHsgbWVzc2FnZTogXCJTb21lIGVycm9yIG9jY3VyZWQsIHRyeSBhZ2FpblwiIH0pO1xyXG4gICAgfVxyXG4gICAgY2xlYXJBbGVydCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyPkFkZCBwcm9kdWN0PC9IZWFkZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQocmVnaXN0ZXJQcm9kdWN0KX0gZW5jVHlwZT0nJz5cclxuICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0RWxlbWVudFxyXG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICBuYW1lPSdwcm9kdWN0TmFtZSdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Byb2R1Y3QgTmFtZSdcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJwcm9kdWN0TmFtZVwiLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSB0byBwcm92aWRlIGEgcHJvZHVjdCBuYW1lXCIsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIHtlcnJvcnMucHJvZHVjdE5hbWUgJiYgZXJyb3JzLnByb2R1Y3ROYW1lLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGEgcHJvZHVjdCBuYW1lPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgbmFtZT0ncHJvZHVjdERlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nUHJvZHVjdCBEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJwcm9kdWN0RGVzY3JpcHRpb25cIiwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgdG8gcHJvdmlkZSBhIHByb2R1Y3QgZGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5wcm9kdWN0RGVzY3JpcHRpb24gJiZcclxuICAgICAgICAgIGVycm9ycy5wcm9kdWN0RGVzY3JpcHRpb24udHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIHByb2R1Y3QgZGVzY3JpcHRpb248L0Vycm9yU3Bhbj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgIDxTZWxlY3RCb3g+XHJcbiAgICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgICA8cD5TZWxlY3QgZ2FtZSB0eXBlPC9wPlxyXG4gICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgIGFzPXtcclxuICAgICAgICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e2dhbWVUeXBlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdXYXJnYW1lJz5XYXJnYW1lPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdSYWNpbmcnPlJhY2luZzwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nTU1PJz5NTU88L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J1JQRyc+UlBHPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdSUCc+UlA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J1NpbXVsYXRpb24nPlNpbXVsYXRpb248L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J1N0cmF0ZWd5Jz5TdHJhdGVneTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nU3BvcnRzJz5TcG9ydHM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J1N1cnZpdmFsJz5TdXJ2aXZhbDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nQmF0dGxlIFJveWFsZSc+QmF0dGxlIFJveWFsZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbmFtZT0nZ2FtZVR5cGUnXHJcbiAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6IHRydWUgfX1cclxuICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPC9TZWxlY3RCb3g+XHJcbiAgICAgICAge2Vycm9ycy5nYW1lVHlwZSAmJiBlcnJvcnMuZ2FtZVR5cGUudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBnYW1lIHR5cGU8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0RWxlbWVudFxyXG4gICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgIG5hbWU9J3ByaXplJ1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgcHJpemUnXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlLCBtaW46IDEgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJwcml6ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSB0byBwcm92aWRlIGEgcHJpemVcIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5wcml6ZSAmJiBlcnJvcnMucHJpemUudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBwcml6ZTwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgbmFtZT0nYW1vdW50J1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgYW1vdW50IG9mIHByb2R1Y3RzICdcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUsIG1pbjogMSB9KX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihcImFtb3VudFwiLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSB0byBwcm92aWRlIGFtb3VudCBvZiBwcm9kdWN0c1wiLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICB7ZXJyb3JzLmFtb3VudCAmJiBlcnJvcnMuYW1vdW50LnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGEgYW1vdW50IG9mIHByb2R1Y3RzPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICBuYW1lPSdwcm9kdWN0SW1nJ1xyXG4gICAgICAgICAgdHlwZT0nZmlsZSdcclxuICAgICAgICAgIGFjY2VwdD0nLnBuZywgLmpwZywgLmpwZWcnXHJcbiAgICAgICAgICBpZD0ncHJvZHVjdEltZydcclxuICAgICAgICAgIGNsYXNzTmFtZT0naGlkZGVuJ1xyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKFwicHJvZHVjdEltZ1wiLCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIHByb3ZpZGUgYW4gcHJvZHVjdCBpbWFnZVwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncHJvZHVjdEltZyc+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD0ndXBsb2FkIHBpY3R1cmUnXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD0nc3BhbidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBob3RvQ2FtZXJhIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICB7ZXJyb3JzLnByb2R1Y3RJbWcgJiYgZXJyb3JzLnByb2R1Y3RJbWcudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBwcm9kdWN0IGltYWdlPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8U2VsZWN0Qm94PlxyXG4gICAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgICAgPHA+U2VsZWN0IGRldmljZTwvcD5cclxuICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICBhcz17XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0IHZhbHVlPXtkZXZpY2V9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J0Rlc2t0b3AnPkRlc2t0b3A8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J1BsYXlzdGF0aW9uJz5QbGF5c3RhdGlvbjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nWGJveCc+WGJveDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbmFtZT0nZGV2aWNlJ1xyXG4gICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB0cnVlIH19XHJcbiAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDwvU2VsZWN0Qm94PlxyXG4gICAgICAgIHtlcnJvcnMuZGV2aWNlICYmIGVycm9ycy5kZXZpY2UudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBkZXZpY2U8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5Jz5cclxuICAgICAgICAgIEFkZCBQcm9kdWN0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgeyhyZXNwb25zZVR5cGUgJiYgcmVzcG9uc2VUeXBlLnByb2R1Y3QgJiYgKFxyXG4gICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgbWVzc2FnZT0nUHJvZHVjdCBzdWNjZXNmdWxseSBhZGRlZCB0byBvZmZlcidcclxuICAgICAgICAgIHNob3VsZE9wZW49e3RydWV9XHJcbiAgICAgICAgICB2YXJpYW50PSdzdWNjZXNzJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICkpIHx8XHJcbiAgICAgICAgKHJlc3BvbnNlVHlwZSAmJiByZXNwb25zZVR5cGUubWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgbWVzc2FnZT17cmVzcG9uc2VUeXBlLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIHNob3VsZE9wZW49e3RydWV9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9J2Vycm9yJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRQcm9kdWN0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==