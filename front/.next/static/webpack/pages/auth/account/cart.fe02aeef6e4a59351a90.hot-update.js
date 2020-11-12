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
  availableAmount: null,
  productImage: null,
  device: "Desktop"
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Desktop"),
      device = _useState3[0],
      setDevice = _useState3[1];

  var clearAlert = function clearAlert() {
    return setTimeout(function () {
      return setResponseType(null);
    }, 999);
  };

  var handleChangeGameType = function handleChangeGameType(event) {
    setGameType(event.target.value);
  };

  var handleChangeDevice = function handleChangeDevice(event) {
    setDevice(e.target.value);
  };

  var registerProduct = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, event) {
      var productName, productDescription, gameType, prize, availableAmount, productImg, device, product, send, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              productName = data.productName, productDescription = data.productDescription, gameType = data.gameType, prize = data.prize, availableAmount = data.availableAmount, productImg = data.productImg, device = data.device;
              product = new FormData();
              product.append("productName", productName);
              product.append("productDescription", productDescription);
              product.append("gameType", gameType);
              product.append("prize", prize);
              product.append("availableAmount", availableAmount);
              product.append("productImg", productImg[0]);
              product.append("device", device);
              _context.prev = 10;
              _context.next = 13;
              return fetch("http://localhost:8080/addProduct", {
                method: "POST",
                body: product
              });

            case 13:
              send = _context.sent;
              _context.next = 16;
              return send.json();

            case 16:
              response = _context.sent;
              console.log(response);

              if (response) {
                setResponseType(response);

                if (response.product) {
                  reset();
                }
              }

              _context.next = 24;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](10);
              setResponseType({
                message: "Some error occured, try again"
              });

            case 24:
              clearAlert();

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[10, 21]]);
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
      lineNumber: 160,
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
          lineNumber: 163,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, _this), errors.productName && errors.productName.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a product name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
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
          lineNumber: 181,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, _this), errors.productDescription && errors.productDescription.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a product description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SelectBox, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "Select game type"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["Controller"], {
            as: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
              value: gameType,
              onChange: handleChangeGameType,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Wargame",
                children: "Wargame"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Racing",
                children: "Racing"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "MMO",
                children: "MMO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "RPG",
                children: "RPG"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "RP",
                children: "RP"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Simulation",
                children: "Simulation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Strategy",
                children: "Strategy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Sports",
                children: "Sports"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Survival",
                children: "Survival"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Battle Royale",
                children: "Battle Royale"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 17
            }, _this),
            name: "gameType",
            rules: {
              required: true
            },
            control: control
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, _this), errors.gameType && errors.gameType.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a game type"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
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
          lineNumber: 228,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 9
      }, _this), errors.prize && errors.prize.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a prize"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InputElement, {
          type: "number",
          name: "availableAmount",
          placeholder: "Enter amount of products ",
          inputRef: register({
            required: true,
            min: 1
          }),
          onChange: function onChange() {
            setError("availableAmount", {
              type: "availableAmount",
              message: "You have to provide amount of products"
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 9
      }, _this), errors.availableAmount && errors.availableAmount.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a amount of products"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 13
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
        lineNumber: 264,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "productImg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
          color: "primary",
          "aria-label": "upload picture",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 9
      }, _this), errors.productImg && errors.productImg.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a product image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SelectBox, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "Select device"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["Controller"], {
            as: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
              value: device,
              onChange: handleChangeDevice,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Desktop",
                children: "Desktop"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 296,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Playstation",
                children: "Playstation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 297,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Xbox",
                children: "Xbox"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 17
            }, _this),
            name: "device",
            rules: {
              required: true
            },
            control: control
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 9
      }, _this), errors.device && errors.device.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a device"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        type: "submit",
        variant: "contained",
        color: "secondary",
        children: "Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }, _this), responseType && responseType.product && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Alert_index_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      message: "Product succesfully added to offer",
      shouldOpen: true,
      variant: "success"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 9
    }, _this) || responseType && responseType.message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Alert_index_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      message: responseType.message,
      shouldOpen: true,
      variant: "error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 5
  }, _this);
};

_s(AddProductForm, "5HVA+s0mNWrRy62+KAXP4PLWx1I=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRQcm9kdWN0Rm9ybS9pbmRleC5qcyJdLCJuYW1lcyI6WyJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIkVycm9yU3BhbiIsInNwYW4iLCJIZWFkZXIiLCJoMiIsIklucHV0RWxlbWVudCIsIklucHV0IiwiU2VsZWN0Qm94IiwiZGl2IiwiZGVmYXVsdFZhbHVlcyIsInByb2R1Y3ROYW1lIiwicHJvZHVjdERlc2NyaXB0aW9uIiwiZ2FtZVR5cGUiLCJwcml6ZSIsImF2YWlsYWJsZUFtb3VudCIsInByb2R1Y3RJbWFnZSIsImRldmljZSIsIkFkZFByb2R1Y3RGb3JtIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwic2V0RXJyb3IiLCJyZXNldCIsImNvbnRyb2wiLCJ1c2VTdGF0ZSIsInJlc3BvbnNlVHlwZSIsInNldFJlc3BvbnNlVHlwZSIsInNldEdhbWVUeXBlIiwic2V0RGV2aWNlIiwiY2xlYXJBbGVydCIsInNldFRpbWVvdXQiLCJoYW5kbGVDaGFuZ2VHYW1lVHlwZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VEZXZpY2UiLCJlIiwicmVnaXN0ZXJQcm9kdWN0IiwiZGF0YSIsInByZXZlbnREZWZhdWx0IiwicHJvZHVjdEltZyIsInByb2R1Y3QiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInNlbmQiLCJqc29uIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInJlcXVpcmVkIiwidHlwZSIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsaWNBQVY7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QUFDTCxNQUFQLElBQWlCSyxNQUFNLENBQUNMLE1BQVAsQ0FBY3VDLElBQWQsS0FBdUIsVUFBeEMsaUJBQ0MscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5KSixlQXNKRSxxRUFBQyx3REFBRDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBQyxXQUE5QjtBQUEwQyxhQUFLLEVBQUMsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0SkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsRUE0Skk3QixZQUFZLElBQUlBLFlBQVksQ0FBQ2dCLE9BQTdCLGlCQUNBLHFFQUFDLG1FQUFEO0FBQ0UsYUFBTyxFQUFDLG9DQURWO0FBRUUsZ0JBQVUsRUFBRSxJQUZkO0FBR0UsYUFBTyxFQUFDO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELElBT0VoQixZQUFZLElBQUlBLFlBQVksQ0FBQzJCLE9BQTdCLGlCQUNDLHFFQUFDLG1FQUFEO0FBQ0UsYUFBTyxFQUFFM0IsWUFBWSxDQUFDMkIsT0FEeEI7QUFFRSxnQkFBVSxFQUFFLElBRmQ7QUFHRSxhQUFPLEVBQUM7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEtOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNktELENBdk9EOztHQUFNcEMsYztVQUNpRUMsdUQ7OztNQURqRUQsYztBQXlPU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9hY2NvdW50L2NhcnQuZmUwMmFlZWY2ZTRhNTkzNTFhOTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0XCI7XHJcbmltcG9ydCB7IEZvcm1MYWJlbCwgQnV0dG9uLCBDaGVja2JveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgUGhvdG9DYW1lcmEgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYVwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWxlcnQvaW5kZXguanNcIjtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICYgPiAuTXVpQnV0dG9uLWNvbnRhaW5lZFNlY29uZGFyeSB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjczZDFjYmY7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM2MDBiZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuTXVpRm9ybUxhYmVsLXJvb3Qge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJiA+IC5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICYgPiBsYWJlbCA+IC5NdWlJY29uQnV0dG9uLWNvbG9yUHJpbWFyeSB7XHJcbiAgICBjb2xvcjogI2ZmMzYwMGJmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmID4gLk11aUlucHV0QmFzZS1yb290IHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG5cclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEVycm9yU3BhbiA9IHN0eWxlZC5zcGFuYFxyXG4gIGNvbG9yOiAjZmY1YTVhO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgJiA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oMmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogcmdiKDI1NSA5MCA5MCAvNjAlKTtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0RWxlbWVudCA9IHN0eWxlZChJbnB1dClgXHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICYgPiAuTXVpSW5wdXRCYXNlLWlucHV0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWxlY3RCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJiA+IC5NdWlGb3JtTGFiZWwtcm9vdCB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcclxuICBwcm9kdWN0TmFtZTogbnVsbCxcclxuICBwcm9kdWN0RGVzY3JpcHRpb246IG51bGwsXHJcbiAgZ2FtZVR5cGU6IFwiV2FyXCIsXHJcbiAgcHJpemU6IG51bGwsXHJcbiAgYXZhaWxhYmxlQW1vdW50OiBudWxsLFxyXG4gIHByb2R1Y3RJbWFnZTogbnVsbCxcclxuICBkZXZpY2U6IFwiRGVza3RvcFwiLFxyXG59O1xyXG5cclxuY29uc3QgQWRkUHJvZHVjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMsIHNldEVycm9yLCByZXNldCwgY29udHJvbCB9ID0gdXNlRm9ybSh7XHJcbiAgICBkZWZhdWx0VmFsdWVzLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbcmVzcG9uc2VUeXBlLCBzZXRSZXNwb25zZVR5cGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2dhbWVUeXBlLCBzZXRHYW1lVHlwZV0gPSB1c2VTdGF0ZShcIldhclwiKTtcclxuICBjb25zdCBbZGV2aWNlLCBzZXREZXZpY2VdID0gdXNlU3RhdGUoXCJEZXNrdG9wXCIpO1xyXG4gIGNvbnN0IGNsZWFyQWxlcnQgPSAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHNldFJlc3BvbnNlVHlwZShudWxsKSwgOTk5KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlR2FtZVR5cGUgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEdhbWVUeXBlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRGV2aWNlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXREZXZpY2UoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlZ2lzdGVyUHJvZHVjdCA9IGFzeW5jIChkYXRhLCBldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgcHJvZHVjdE5hbWUsXHJcbiAgICAgIHByb2R1Y3REZXNjcmlwdGlvbixcclxuICAgICAgZ2FtZVR5cGUsXHJcbiAgICAgIHByaXplLFxyXG4gICAgICBhdmFpbGFibGVBbW91bnQsXHJcbiAgICAgIHByb2R1Y3RJbWcsXHJcbiAgICAgIGRldmljZSxcclxuICAgIH0gPSBkYXRhO1xyXG5cclxuICAgIGNvbnN0IHByb2R1Y3QgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHByb2R1Y3QuYXBwZW5kKFwicHJvZHVjdE5hbWVcIiwgcHJvZHVjdE5hbWUpO1xyXG4gICAgcHJvZHVjdC5hcHBlbmQoXCJwcm9kdWN0RGVzY3JpcHRpb25cIiwgcHJvZHVjdERlc2NyaXB0aW9uKTtcclxuICAgIHByb2R1Y3QuYXBwZW5kKFwiZ2FtZVR5cGVcIiwgZ2FtZVR5cGUpO1xyXG4gICAgcHJvZHVjdC5hcHBlbmQoXCJwcml6ZVwiLCBwcml6ZSk7XHJcbiAgICBwcm9kdWN0LmFwcGVuZChcImF2YWlsYWJsZUFtb3VudFwiLCBhdmFpbGFibGVBbW91bnQpO1xyXG4gICAgcHJvZHVjdC5hcHBlbmQoXCJwcm9kdWN0SW1nXCIsIHByb2R1Y3RJbWdbMF0pO1xyXG4gICAgcHJvZHVjdC5hcHBlbmQoXCJkZXZpY2VcIiwgZGV2aWNlKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzZW5kID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYWRkUHJvZHVjdFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBwcm9kdWN0LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzZW5kLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICBzZXRSZXNwb25zZVR5cGUocmVzcG9uc2UpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5wcm9kdWN0KSB7XHJcbiAgICAgICAgICByZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldFJlc3BvbnNlVHlwZSh7IG1lc3NhZ2U6IFwiU29tZSBlcnJvciBvY2N1cmVkLCB0cnkgYWdhaW5cIiB9KTtcclxuICAgIH1cclxuICAgIGNsZWFyQWxlcnQoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlcj5BZGQgcHJvZHVjdDwvSGVhZGVyPlxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHJlZ2lzdGVyUHJvZHVjdCl9IGVuY1R5cGU9Jyc+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgbmFtZT0ncHJvZHVjdE5hbWUnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQcm9kdWN0IE5hbWUnXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVycm9yKFwicHJvZHVjdE5hbWVcIiwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgdG8gcHJvdmlkZSBhIHByb2R1Y3QgbmFtZVwiLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICB7ZXJyb3JzLnByb2R1Y3ROYW1lICYmIGVycm9ycy5wcm9kdWN0TmFtZS50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIHByb2R1Y3QgbmFtZTwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgIG5hbWU9J3Byb2R1Y3REZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Byb2R1Y3QgRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVycm9yKFwicHJvZHVjdERlc2NyaXB0aW9uXCIsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWFudWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIHByb3ZpZGUgYSBwcm9kdWN0IGRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIHtlcnJvcnMucHJvZHVjdERlc2NyaXB0aW9uICYmXHJcbiAgICAgICAgICBlcnJvcnMucHJvZHVjdERlc2NyaXB0aW9uLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBwcm9kdWN0IGRlc2NyaXB0aW9uPC9FcnJvclNwYW4+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICA8U2VsZWN0Qm94PlxyXG4gICAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgICAgPHA+U2VsZWN0IGdhbWUgdHlwZTwvcD5cclxuICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICBhcz17XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0IHZhbHVlPXtnYW1lVHlwZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUdhbWVUeXBlfT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdXYXJnYW1lJz5XYXJnYW1lPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdSYWNpbmcnPlJhY2luZzwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nTU1PJz5NTU88L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J1JQRyc+UlBHPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdSUCc+UlA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J1NpbXVsYXRpb24nPlNpbXVsYXRpb248L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J1N0cmF0ZWd5Jz5TdHJhdGVneTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nU3BvcnRzJz5TcG9ydHM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J1N1cnZpdmFsJz5TdXJ2aXZhbDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nQmF0dGxlIFJveWFsZSc+QmF0dGxlIFJveWFsZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbmFtZT0nZ2FtZVR5cGUnXHJcbiAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6IHRydWUgfX1cclxuICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPC9TZWxlY3RCb3g+XHJcbiAgICAgICAge2Vycm9ycy5nYW1lVHlwZSAmJiBlcnJvcnMuZ2FtZVR5cGUudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBnYW1lIHR5cGU8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0RWxlbWVudFxyXG4gICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgIG5hbWU9J3ByaXplJ1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgcHJpemUnXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlLCBtaW46IDEgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJwcml6ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSB0byBwcm92aWRlIGEgcHJpemVcIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5wcml6ZSAmJiBlcnJvcnMucHJpemUudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBwcml6ZTwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgbmFtZT0nYXZhaWxhYmxlQW1vdW50J1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgYW1vdW50IG9mIHByb2R1Y3RzICdcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUsIG1pbjogMSB9KX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihcImF2YWlsYWJsZUFtb3VudFwiLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImF2YWlsYWJsZUFtb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSB0byBwcm92aWRlIGFtb3VudCBvZiBwcm9kdWN0c1wiLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICB7ZXJyb3JzLmF2YWlsYWJsZUFtb3VudCAmJlxyXG4gICAgICAgICAgZXJyb3JzLmF2YWlsYWJsZUFtb3VudC50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGEgYW1vdW50IG9mIHByb2R1Y3RzPC9FcnJvclNwYW4+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgIG5hbWU9J3Byb2R1Y3RJbWcnXHJcbiAgICAgICAgICB0eXBlPSdmaWxlJ1xyXG4gICAgICAgICAgYWNjZXB0PScucG5nLCAuanBnLCAuanBlZydcclxuICAgICAgICAgIGlkPSdwcm9kdWN0SW1nJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdoaWRkZW4nXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoXCJwcm9kdWN0SW1nXCIsIHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgdG8gcHJvdmlkZSBhbiBwcm9kdWN0IGltYWdlXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdwcm9kdWN0SW1nJz5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPSd1cGxvYWQgcGljdHVyZSdcclxuICAgICAgICAgICAgY29tcG9uZW50PSdzcGFuJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGhvdG9DYW1lcmEgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIHtlcnJvcnMucHJvZHVjdEltZyAmJiBlcnJvcnMucHJvZHVjdEltZy50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIHByb2R1Y3QgaW1hZ2U8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxTZWxlY3RCb3g+XHJcbiAgICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgICA8cD5TZWxlY3QgZGV2aWNlPC9wPlxyXG4gICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgIGFzPXtcclxuICAgICAgICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e2RldmljZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZURldmljZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nRGVza3RvcCc+RGVza3RvcDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nUGxheXN0YXRpb24nPlBsYXlzdGF0aW9uPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdYYm94Jz5YYm94PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBuYW1lPSdkZXZpY2UnXHJcbiAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6IHRydWUgfX1cclxuICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPC9TZWxlY3RCb3g+XHJcbiAgICAgICAge2Vycm9ycy5kZXZpY2UgJiYgZXJyb3JzLmRldmljZS50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIGRldmljZTwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknPlxyXG4gICAgICAgICAgQWRkIFByb2R1Y3RcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICB7KHJlc3BvbnNlVHlwZSAmJiByZXNwb25zZVR5cGUucHJvZHVjdCAmJiAoXHJcbiAgICAgICAgPEFsZXJ0XHJcbiAgICAgICAgICBtZXNzYWdlPSdQcm9kdWN0IHN1Y2Nlc2Z1bGx5IGFkZGVkIHRvIG9mZmVyJ1xyXG4gICAgICAgICAgc2hvdWxkT3Blbj17dHJ1ZX1cclxuICAgICAgICAgIHZhcmlhbnQ9J3N1Y2Nlc3MnXHJcbiAgICAgICAgLz5cclxuICAgICAgKSkgfHxcclxuICAgICAgICAocmVzcG9uc2VUeXBlICYmIHJlc3BvbnNlVHlwZS5tZXNzYWdlICYmIChcclxuICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgICBtZXNzYWdlPXtyZXNwb25zZVR5cGUubWVzc2FnZX1cclxuICAgICAgICAgICAgc2hvdWxkT3Blbj17dHJ1ZX1cclxuICAgICAgICAgICAgdmFyaWFudD0nZXJyb3InXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFByb2R1Y3RGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9