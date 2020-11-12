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
})(["display:flex;flex-direction:column;align-items:flex-start;width:100%;& > .MuiFormLabel-root{margin:10px 0;color:rgba(255,255,255,0.5);}& > .MuiInputBase-root{color:#ff3600bf !important;}"]);
_c5 = SelectBox;
var defaultValues = {
  productName: null,
  productDescription: null,
  gameType: "Wargame",
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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Wargame"),
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
      lineNumber: 164,
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
          lineNumber: 167,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, _this), errors.productName && errors.productName.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a product name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
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
          lineNumber: 185,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, _this), errors.productDescription && errors.productDescription.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a product description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SelectBox, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "Select game type"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
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
                lineNumber: 209,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Racing",
                children: "Racing"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "MMO",
                children: "MMO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "RPG",
                children: "RPG"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "RP",
                children: "RP"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Simulation",
                children: "Simulation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Strategy",
                children: "Strategy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Sports",
                children: "Sports"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Survival",
                children: "Survival"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Battle Royale",
                children: "Battle Royale"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 17
            }, _this),
            name: "gameType",
            rules: {
              required: true
            },
            control: control
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }, _this), errors.gameType && errors.gameType.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a game type"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
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
          lineNumber: 232,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 9
      }, _this), errors.prize && errors.prize.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a prize"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
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
          lineNumber: 250,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 9
      }, _this), errors.availableAmount && errors.availableAmount.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a amount of products"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 265,
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
        lineNumber: 268,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "productImg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
          color: "primary",
          "aria-label": "upload picture",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 9
      }, _this), errors.productImg && errors.productImg.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a product image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SelectBox, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "Select device"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 296,
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
                lineNumber: 300,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Playstation",
                children: "Playstation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 301,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Xbox",
                children: "Xbox"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 17
            }, _this),
            name: "device",
            rules: {
              required: true
            },
            control: control
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 9
      }, _this), errors.device && errors.device.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a device"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        type: "submit",
        variant: "contained",
        color: "secondary",
        children: "Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, _this), responseType && responseType.product && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Alert_index_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      message: "Product succesfully added to offer",
      shouldOpen: true,
      variant: "success"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 9
    }, _this) || responseType && responseType.message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Alert_index_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      message: responseType.message,
      shouldOpen: true,
      variant: "error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 163,
    columnNumber: 5
  }, _this);
};

_s(AddProductForm, "2t1FhYsBE0Hfw+kmBAiCN2xs46Q=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRQcm9kdWN0Rm9ybS9pbmRleC5qcyJdLCJuYW1lcyI6WyJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIkVycm9yU3BhbiIsInNwYW4iLCJIZWFkZXIiLCJoMiIsIklucHV0RWxlbWVudCIsIklucHV0IiwiU2VsZWN0Qm94IiwiZGl2IiwiZGVmYXVsdFZhbHVlcyIsInByb2R1Y3ROYW1lIiwicHJvZHVjdERlc2NyaXB0aW9uIiwiZ2FtZVR5cGUiLCJwcml6ZSIsImF2YWlsYWJsZUFtb3VudCIsInByb2R1Y3RJbWFnZSIsImRldmljZSIsIkFkZFByb2R1Y3RGb3JtIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwic2V0RXJyb3IiLCJyZXNldCIsImNvbnRyb2wiLCJ1c2VTdGF0ZSIsInJlc3BvbnNlVHlwZSIsInNldFJlc3BvbnNlVHlwZSIsInNldEdhbWVUeXBlIiwic2V0RGV2aWNlIiwiY2xlYXJBbGVydCIsInNldFRpbWVvdXQiLCJoYW5kbGVDaGFuZ2VHYW1lVHlwZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VEZXZpY2UiLCJlIiwicmVnaXN0ZXJQcm9kdWN0IiwiZGF0YSIsInByZXZlbnREZWZhdWx0IiwicHJvZHVjdEltZyIsInByb2R1Y3QiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInNlbmQiLCJqc29uIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInJlcXVpcmVkIiwidHlwZSIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsaWNBQVY7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Q0FBQ0wsTUFBUCxJQUFpQkssTUFBTSxDQUFDTCxNQUFQLENBQWN1QyxJQUFkLEtBQXVCLFVBQXhDLGlCQUNDLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuSkosZUFzSkUscUVBQUMsd0RBQUQ7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUMsV0FBOUI7QUFBMEMsYUFBSyxFQUFDLFdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLEVBNEpJN0IsWUFBWSxJQUFJQSxZQUFZLENBQUNnQixPQUE3QixpQkFDQSxxRUFBQyxtRUFBRDtBQUNFLGFBQU8sRUFBQyxvQ0FEVjtBQUVFLGdCQUFVLEVBQUUsSUFGZDtBQUdFLGFBQU8sRUFBQztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxJQU9FaEIsWUFBWSxJQUFJQSxZQUFZLENBQUMyQixPQUE3QixpQkFDQyxxRUFBQyxtRUFBRDtBQUNFLGFBQU8sRUFBRTNCLFlBQVksQ0FBQzJCLE9BRHhCO0FBRUUsZ0JBQVUsRUFBRSxJQUZkO0FBR0UsYUFBTyxFQUFDO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBLTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZLRCxDQXZPRDs7R0FBTXBDLGM7VUFDaUVDLHVEOzs7TUFEakVELGM7QUF5T1NBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvYWNjb3VudC9jYXJ0LjViNzVhYTE4ZGZhOThiMDdmZjUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dFwiO1xyXG5pbXBvcnQgeyBGb3JtTGFiZWwsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IFBob3RvQ2FtZXJhIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvdG9DYW1lcmFcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCI7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FsZXJ0L2luZGV4LmpzXCI7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmID4gLk11aUJ1dHRvbi1jb250YWluZWRTZWNvbmRhcnkge1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I3M2QxY2JmO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNjAwYmY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLk11aUZvcm1MYWJlbC1yb290IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gICYgPiAuaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmID4gbGFiZWwgPiAuTXVpSWNvbkJ1dHRvbi1jb2xvclByaW1hcnkge1xyXG4gICAgY29sb3I6ICNmZjM2MDBiZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJiA+IC5NdWlJbnB1dEJhc2Utcm9vdCB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuXHJcbiAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFcnJvclNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogI2ZmNWE1YTtcclxuICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaDJgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYigyNTUgOTAgOTAgLzYwJSk7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dEVsZW1lbnQgPSBzdHlsZWQoSW5wdXQpYFxyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmID4gLk11aUlucHV0QmFzZS1pbnB1dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2VsZWN0Qm94ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICYgPiAuTXVpRm9ybUxhYmVsLXJvb3Qge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgJiA+IC5NdWlJbnB1dEJhc2Utcm9vdCB7XHJcbiAgICBjb2xvcjogI2ZmMzYwMGJmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcclxuICBwcm9kdWN0TmFtZTogbnVsbCxcclxuICBwcm9kdWN0RGVzY3JpcHRpb246IG51bGwsXHJcbiAgZ2FtZVR5cGU6IFwiV2FyZ2FtZVwiLFxyXG4gIHByaXplOiBudWxsLFxyXG4gIGF2YWlsYWJsZUFtb3VudDogbnVsbCxcclxuICBwcm9kdWN0SW1hZ2U6IG51bGwsXHJcbiAgZGV2aWNlOiBcIkRlc2t0b3BcIixcclxufTtcclxuXHJcbmNvbnN0IEFkZFByb2R1Y3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzLCBzZXRFcnJvciwgcmVzZXQsIGNvbnRyb2wgfSA9IHVzZUZvcm0oe1xyXG4gICAgZGVmYXVsdFZhbHVlcyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3Jlc3BvbnNlVHlwZSwgc2V0UmVzcG9uc2VUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtnYW1lVHlwZSwgc2V0R2FtZVR5cGVdID0gdXNlU3RhdGUoXCJXYXJnYW1lXCIpO1xyXG4gIGNvbnN0IFtkZXZpY2UsIHNldERldmljZV0gPSB1c2VTdGF0ZShcIkRlc2t0b3BcIik7XHJcbiAgY29uc3QgY2xlYXJBbGVydCA9ICgpID0+IHNldFRpbWVvdXQoKCkgPT4gc2V0UmVzcG9uc2VUeXBlKG51bGwpLCA5OTkpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VHYW1lVHlwZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0R2FtZVR5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VEZXZpY2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldERldmljZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJQcm9kdWN0ID0gYXN5bmMgKGRhdGEsIGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBwcm9kdWN0TmFtZSxcclxuICAgICAgcHJvZHVjdERlc2NyaXB0aW9uLFxyXG4gICAgICBnYW1lVHlwZSxcclxuICAgICAgcHJpemUsXHJcbiAgICAgIGF2YWlsYWJsZUFtb3VudCxcclxuICAgICAgcHJvZHVjdEltZyxcclxuICAgICAgZGV2aWNlLFxyXG4gICAgfSA9IGRhdGE7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdCA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgcHJvZHVjdC5hcHBlbmQoXCJwcm9kdWN0TmFtZVwiLCBwcm9kdWN0TmFtZSk7XHJcbiAgICBwcm9kdWN0LmFwcGVuZChcInByb2R1Y3REZXNjcmlwdGlvblwiLCBwcm9kdWN0RGVzY3JpcHRpb24pO1xyXG4gICAgcHJvZHVjdC5hcHBlbmQoXCJnYW1lVHlwZVwiLCBnYW1lVHlwZSk7XHJcbiAgICBwcm9kdWN0LmFwcGVuZChcInByaXplXCIsIHByaXplKTtcclxuICAgIHByb2R1Y3QuYXBwZW5kKFwiYXZhaWxhYmxlQW1vdW50XCIsIGF2YWlsYWJsZUFtb3VudCk7XHJcbiAgICBwcm9kdWN0LmFwcGVuZChcInByb2R1Y3RJbWdcIiwgcHJvZHVjdEltZ1swXSk7XHJcbiAgICBwcm9kdWN0LmFwcGVuZChcImRldmljZVwiLCBkZXZpY2UpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNlbmQgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hZGRQcm9kdWN0XCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IHByb2R1Y3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNlbmQuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgIHNldFJlc3BvbnNlVHlwZShyZXNwb25zZSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnByb2R1Y3QpIHtcclxuICAgICAgICAgIHJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0UmVzcG9uc2VUeXBlKHsgbWVzc2FnZTogXCJTb21lIGVycm9yIG9jY3VyZWQsIHRyeSBhZ2FpblwiIH0pO1xyXG4gICAgfVxyXG4gICAgY2xlYXJBbGVydCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyPkFkZCBwcm9kdWN0PC9IZWFkZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQocmVnaXN0ZXJQcm9kdWN0KX0gZW5jVHlwZT0nJz5cclxuICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0RWxlbWVudFxyXG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICBuYW1lPSdwcm9kdWN0TmFtZSdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Byb2R1Y3QgTmFtZSdcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJwcm9kdWN0TmFtZVwiLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSB0byBwcm92aWRlIGEgcHJvZHVjdCBuYW1lXCIsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIHtlcnJvcnMucHJvZHVjdE5hbWUgJiYgZXJyb3JzLnByb2R1Y3ROYW1lLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGEgcHJvZHVjdCBuYW1lPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgbmFtZT0ncHJvZHVjdERlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nUHJvZHVjdCBEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJwcm9kdWN0RGVzY3JpcHRpb25cIiwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgdG8gcHJvdmlkZSBhIHByb2R1Y3QgZGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5wcm9kdWN0RGVzY3JpcHRpb24gJiZcclxuICAgICAgICAgIGVycm9ycy5wcm9kdWN0RGVzY3JpcHRpb24udHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIHByb2R1Y3QgZGVzY3JpcHRpb248L0Vycm9yU3Bhbj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgIDxTZWxlY3RCb3g+XHJcbiAgICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgICA8cD5TZWxlY3QgZ2FtZSB0eXBlPC9wPlxyXG4gICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgIGFzPXtcclxuICAgICAgICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e2dhbWVUeXBlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlR2FtZVR5cGV9PlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J1dhcmdhbWUnPldhcmdhbWU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J1JhY2luZyc+UmFjaW5nPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdNTU8nPk1NTzwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nUlBHJz5SUEc8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J1JQJz5SUDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nU2ltdWxhdGlvbic+U2ltdWxhdGlvbjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nU3RyYXRlZ3knPlN0cmF0ZWd5PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdTcG9ydHMnPlNwb3J0czwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nU3Vydml2YWwnPlN1cnZpdmFsPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdCYXR0bGUgUm95YWxlJz5CYXR0bGUgUm95YWxlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBuYW1lPSdnYW1lVHlwZSdcclxuICAgICAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogdHJ1ZSB9fVxyXG4gICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8L1NlbGVjdEJveD5cclxuICAgICAgICB7ZXJyb3JzLmdhbWVUeXBlICYmIGVycm9ycy5nYW1lVHlwZS50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIGdhbWUgdHlwZTwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgbmFtZT0ncHJpemUnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBwcml6ZSdcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUsIG1pbjogMSB9KX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihcInByaXplXCIsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWFudWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIHByb3ZpZGUgYSBwcml6ZVwiLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICB7ZXJyb3JzLnByaXplICYmIGVycm9ycy5wcml6ZS50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIHByaXplPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICBuYW1lPSdhdmFpbGFibGVBbW91bnQnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBhbW91bnQgb2YgcHJvZHVjdHMgJ1xyXG4gICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSwgbWluOiAxIH0pfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVycm9yKFwiYXZhaWxhYmxlQW1vdW50XCIsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXZhaWxhYmxlQW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIHByb3ZpZGUgYW1vdW50IG9mIHByb2R1Y3RzXCIsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIHtlcnJvcnMuYXZhaWxhYmxlQW1vdW50ICYmXHJcbiAgICAgICAgICBlcnJvcnMuYXZhaWxhYmxlQW1vdW50LnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBhbW91bnQgb2YgcHJvZHVjdHM8L0Vycm9yU3Bhbj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgbmFtZT0ncHJvZHVjdEltZydcclxuICAgICAgICAgIHR5cGU9J2ZpbGUnXHJcbiAgICAgICAgICBhY2NlcHQ9Jy5wbmcsIC5qcGcsIC5qcGVnJ1xyXG4gICAgICAgICAgaWQ9J3Byb2R1Y3RJbWcnXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2hpZGRlbidcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRFcnJvcihcInByb2R1Y3RJbWdcIiwge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwibWFudWFsXCIsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSB0byBwcm92aWRlIGFuIHByb2R1Y3QgaW1hZ2VcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3Byb2R1Y3RJbWcnPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9J3VwbG9hZCBwaWN0dXJlJ1xyXG4gICAgICAgICAgICBjb21wb25lbnQ9J3NwYW4nXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQaG90b0NhbWVyYSAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5wcm9kdWN0SW1nICYmIGVycm9ycy5wcm9kdWN0SW1nLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGEgcHJvZHVjdCBpbWFnZTwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPFNlbGVjdEJveD5cclxuICAgICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICAgIDxwPlNlbGVjdCBkZXZpY2U8L3A+XHJcbiAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgYXM9e1xyXG4gICAgICAgICAgICAgICAgPFNlbGVjdCB2YWx1ZT17ZGV2aWNlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRGV2aWNlfT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdEZXNrdG9wJz5EZXNrdG9wPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdQbGF5c3RhdGlvbic+UGxheXN0YXRpb248L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J1hib3gnPlhib3g8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG5hbWU9J2RldmljZSdcclxuICAgICAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogdHJ1ZSB9fVxyXG4gICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8L1NlbGVjdEJveD5cclxuICAgICAgICB7ZXJyb3JzLmRldmljZSAmJiBlcnJvcnMuZGV2aWNlLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGEgZGV2aWNlPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeSc+XHJcbiAgICAgICAgICBBZGQgUHJvZHVjdFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIHsocmVzcG9uc2VUeXBlICYmIHJlc3BvbnNlVHlwZS5wcm9kdWN0ICYmIChcclxuICAgICAgICA8QWxlcnRcclxuICAgICAgICAgIG1lc3NhZ2U9J1Byb2R1Y3Qgc3VjY2VzZnVsbHkgYWRkZWQgdG8gb2ZmZXInXHJcbiAgICAgICAgICBzaG91bGRPcGVuPXt0cnVlfVxyXG4gICAgICAgICAgdmFyaWFudD0nc3VjY2VzcydcclxuICAgICAgICAvPlxyXG4gICAgICApKSB8fFxyXG4gICAgICAgIChyZXNwb25zZVR5cGUgJiYgcmVzcG9uc2VUeXBlLm1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgPEFsZXJ0XHJcbiAgICAgICAgICAgIG1lc3NhZ2U9e3Jlc3BvbnNlVHlwZS5tZXNzYWdlfVxyXG4gICAgICAgICAgICBzaG91bGRPcGVuPXt0cnVlfVxyXG4gICAgICAgICAgICB2YXJpYW50PSdlcnJvcidcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkUHJvZHVjdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=