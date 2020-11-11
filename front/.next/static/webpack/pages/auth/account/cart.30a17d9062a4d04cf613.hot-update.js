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
  productImage: null,
  device: "Dekstop"
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
      var productName, productDescription, gameType, prize, amount, productImg, device, product, send, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              productName = data.productName, productDescription = data.productDescription, gameType = data.gameType, prize = data.prize, amount = data.amount, productImg = data.productImg, device = data.device;
              product = new FormData();
              product.append("productName", productName);
              product.append("productDescription", productDescription);
              product.append("gameType", gameType);
              product.append("prize", prize);
              product.append("amount", amount);
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
          lineNumber: 246,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 9
      }, _this), errors.amount && errors.amount.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a amount of products"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 260,
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
        lineNumber: 263,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "productImg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
          color: "primary",
          "aria-label": "upload picture",
          component: "span",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 9
      }, _this), errors.productImg && errors.productImg.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a product image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SelectBox, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormLabel"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "Select device"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
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
                lineNumber: 295,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Playstation",
                children: "Playstation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 296,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: "Xbox",
                children: "Xbox"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 297,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 17
            }, _this),
            name: "device",
            rules: {
              required: true
            },
            control: control
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 9
      }, _this), errors.device && errors.device.type === "required" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorSpan, {
        children: "Please provide a device"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        type: "submit",
        variant: "contained",
        color: "secondary",
        children: "Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 310,
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
      lineNumber: 315,
      columnNumber: 9
    }, _this) || responseType && responseType.message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Alert_index_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      message: responseType.message,
      shouldOpen: true,
      variant: "error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 322,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRQcm9kdWN0Rm9ybS9pbmRleC5qcyJdLCJuYW1lcyI6WyJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIkVycm9yU3BhbiIsInNwYW4iLCJIZWFkZXIiLCJoMiIsIklucHV0RWxlbWVudCIsIklucHV0IiwiU2VsZWN0Qm94IiwiZGl2IiwiZGVmYXVsdFZhbHVlcyIsInByb2R1Y3ROYW1lIiwicHJvZHVjdERlc2NyaXB0aW9uIiwiZ2FtZVR5cGUiLCJwcml6ZSIsImFtb3VudCIsInByb2R1Y3RJbWFnZSIsImRldmljZSIsIkFkZFByb2R1Y3RGb3JtIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwic2V0RXJyb3IiLCJyZXNldCIsImNvbnRyb2wiLCJ1c2VTdGF0ZSIsInJlc3BvbnNlVHlwZSIsInNldFJlc3BvbnNlVHlwZSIsInNldEdhbWVUeXBlIiwic2V0RGV2aWNlIiwiY2xlYXJBbGVydCIsInNldFRpbWVvdXQiLCJoYW5kbGVDaGFuZ2VHYW1lVHlwZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VEZXZpY2UiLCJlIiwicmVnaXN0ZXJQcm9kdWN0IiwiZGF0YSIsInByZXZlbnREZWZhdWx0IiwicHJvZHVjdEltZyIsInByb2R1Y3QiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInNlbmQiLCJqc29uIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInJlcXVpcmVkIiwidHlwZSIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsaWNBQVY7S0FBTUYsSTtB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QU0sQ0FBQ0wsTUFBUCxDQUFjdUMsSUFBZCxLQUF1QixVQUF4QyxpQkFDQyxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbEpKLGVBcUpFLHFFQUFDLHdEQUFEO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFDLFdBQTlCO0FBQTBDLGFBQUssRUFBQyxXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQTJKSTdCLFlBQVksSUFBSUEsWUFBWSxDQUFDZ0IsT0FBN0IsaUJBQ0EscUVBQUMsbUVBQUQ7QUFDRSxhQUFPLEVBQUMsb0NBRFY7QUFFRSxnQkFBVSxFQUFFLElBRmQ7QUFHRSxhQUFPLEVBQUM7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsSUFPRWhCLFlBQVksSUFBSUEsWUFBWSxDQUFDMkIsT0FBN0IsaUJBQ0MscUVBQUMsbUVBQUQ7QUFDRSxhQUFPLEVBQUUzQixZQUFZLENBQUMyQixPQUR4QjtBQUVFLGdCQUFVLEVBQUUsSUFGZDtBQUdFLGFBQU8sRUFBQztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuS047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0S0QsQ0F0T0Q7O0dBQU1wQyxjO1VBQ2lFQyx1RDs7O01BRGpFRCxjO0FBd09TQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL2FjY291bnQvY2FydC4zMGExN2Q5MDYyYTRkMDRjZjYxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIjtcclxuaW1wb3J0IHsgRm9ybUxhYmVsLCBCdXR0b24sIENoZWNrYm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBQaG90b0NhbWVyYSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob3RvQ2FtZXJhXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BbGVydC9pbmRleC5qc1wiO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgJiA+IC5NdWlCdXR0b24tY29udGFpbmVkU2Vjb25kYXJ5IHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNzNkMWNiZjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzYwMGJmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IC5NdWlGb3JtTGFiZWwtcm9vdCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAmID4gLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJiA+IGxhYmVsID4gLk11aUljb25CdXR0b24tY29sb3JQcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjZmYzNjAwYmYgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICYgPiAuTXVpSW5wdXRCYXNlLXJvb3Qge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRXJyb3JTcGFuID0gc3R5bGVkLnNwYW5gXHJcbiAgY29sb3I6ICNmZjVhNWE7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAmID4gYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmgyYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoMjU1IDkwIDkwIC82MCUpO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXRFbGVtZW50ID0gc3R5bGVkKElucHV0KWBcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgJiA+IC5NdWlJbnB1dEJhc2UtaW5wdXQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNlbGVjdEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmID4gLk11aUZvcm1MYWJlbC1yb290IHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBkZWZhdWx0VmFsdWVzID0ge1xyXG4gIHByb2R1Y3ROYW1lOiBudWxsLFxyXG4gIHByb2R1Y3REZXNjcmlwdGlvbjogbnVsbCxcclxuICBnYW1lVHlwZTogXCJXYXJcIixcclxuICBwcml6ZTogbnVsbCxcclxuICBhbW91bnQ6IG51bGwsXHJcbiAgcHJvZHVjdEltYWdlOiBudWxsLFxyXG4gIGRldmljZTogXCJEZWtzdG9wXCIsXHJcbn07XHJcblxyXG5jb25zdCBBZGRQcm9kdWN0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycywgc2V0RXJyb3IsIHJlc2V0LCBjb250cm9sIH0gPSB1c2VGb3JtKHtcclxuICAgIGRlZmF1bHRWYWx1ZXMsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtyZXNwb25zZVR5cGUsIHNldFJlc3BvbnNlVHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZ2FtZVR5cGUsIHNldEdhbWVUeXBlXSA9IHVzZVN0YXRlKFwiV2FyXCIpO1xyXG4gIGNvbnN0IFtkZXZpY2UsIHNldERldmljZV0gPSB1c2VTdGF0ZShcIkRlc2t0b3BcIik7XHJcbiAgY29uc3QgY2xlYXJBbGVydCA9ICgpID0+IHNldFRpbWVvdXQoKCkgPT4gc2V0UmVzcG9uc2VUeXBlKG51bGwpLCA5OTkpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VHYW1lVHlwZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0R2FtZVR5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VEZXZpY2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldERldmljZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJQcm9kdWN0ID0gYXN5bmMgKGRhdGEsIGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBwcm9kdWN0TmFtZSxcclxuICAgICAgcHJvZHVjdERlc2NyaXB0aW9uLFxyXG4gICAgICBnYW1lVHlwZSxcclxuICAgICAgcHJpemUsXHJcbiAgICAgIGFtb3VudCxcclxuICAgICAgcHJvZHVjdEltZyxcclxuICAgICAgZGV2aWNlLFxyXG4gICAgfSA9IGRhdGE7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdCA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgcHJvZHVjdC5hcHBlbmQoXCJwcm9kdWN0TmFtZVwiLCBwcm9kdWN0TmFtZSk7XHJcbiAgICBwcm9kdWN0LmFwcGVuZChcInByb2R1Y3REZXNjcmlwdGlvblwiLCBwcm9kdWN0RGVzY3JpcHRpb24pO1xyXG4gICAgcHJvZHVjdC5hcHBlbmQoXCJnYW1lVHlwZVwiLCBnYW1lVHlwZSk7XHJcbiAgICBwcm9kdWN0LmFwcGVuZChcInByaXplXCIsIHByaXplKTtcclxuICAgIHByb2R1Y3QuYXBwZW5kKFwiYW1vdW50XCIsIGFtb3VudCk7XHJcbiAgICBwcm9kdWN0LmFwcGVuZChcInByb2R1Y3RJbWdcIiwgcHJvZHVjdEltZ1swXSk7XHJcbiAgICBwcm9kdWN0LmFwcGVuZChcImRldmljZVwiLCBkZXZpY2UpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNlbmQgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hZGRQcm9kdWN0XCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IHByb2R1Y3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNlbmQuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgIHNldFJlc3BvbnNlVHlwZShyZXNwb25zZSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnByb2R1Y3QpIHtcclxuICAgICAgICAgIHJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0UmVzcG9uc2VUeXBlKHsgbWVzc2FnZTogXCJTb21lIGVycm9yIG9jY3VyZWQsIHRyeSBhZ2FpblwiIH0pO1xyXG4gICAgfVxyXG4gICAgY2xlYXJBbGVydCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyPkFkZCBwcm9kdWN0PC9IZWFkZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQocmVnaXN0ZXJQcm9kdWN0KX0gZW5jVHlwZT0nJz5cclxuICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0RWxlbWVudFxyXG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICBuYW1lPSdwcm9kdWN0TmFtZSdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Byb2R1Y3QgTmFtZSdcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJwcm9kdWN0TmFtZVwiLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSB0byBwcm92aWRlIGEgcHJvZHVjdCBuYW1lXCIsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIHtlcnJvcnMucHJvZHVjdE5hbWUgJiYgZXJyb3JzLnByb2R1Y3ROYW1lLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JTcGFuPlBsZWFzZSBwcm92aWRlIGEgcHJvZHVjdCBuYW1lPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgbmFtZT0ncHJvZHVjdERlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nUHJvZHVjdCBEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoXCJwcm9kdWN0RGVzY3JpcHRpb25cIiwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgdG8gcHJvdmlkZSBhIHByb2R1Y3QgZGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAge2Vycm9ycy5wcm9kdWN0RGVzY3JpcHRpb24gJiZcclxuICAgICAgICAgIGVycm9ycy5wcm9kdWN0RGVzY3JpcHRpb24udHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIHByb2R1Y3QgZGVzY3JpcHRpb248L0Vycm9yU3Bhbj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgIDxTZWxlY3RCb3g+XHJcbiAgICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgICA8cD5TZWxlY3QgZ2FtZSB0eXBlPC9wPlxyXG4gICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgIGFzPXtcclxuICAgICAgICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e2dhbWVUeXBlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlR2FtZVR5cGV9PlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J1dhcmdhbWUnPldhcmdhbWU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J1JhY2luZyc+UmFjaW5nPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdNTU8nPk1NTzwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nUlBHJz5SUEc8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J1JQJz5SUDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nU2ltdWxhdGlvbic+U2ltdWxhdGlvbjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nU3RyYXRlZ3knPlN0cmF0ZWd5PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdTcG9ydHMnPlNwb3J0czwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nU3Vydml2YWwnPlN1cnZpdmFsPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdCYXR0bGUgUm95YWxlJz5CYXR0bGUgUm95YWxlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBuYW1lPSdnYW1lVHlwZSdcclxuICAgICAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogdHJ1ZSB9fVxyXG4gICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8L1NlbGVjdEJveD5cclxuICAgICAgICB7ZXJyb3JzLmdhbWVUeXBlICYmIGVycm9ycy5nYW1lVHlwZS50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIGdhbWUgdHlwZTwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxGb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgbmFtZT0ncHJpemUnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBwcml6ZSdcclxuICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUsIG1pbjogMSB9KX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihcInByaXplXCIsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWFudWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIHByb3ZpZGUgYSBwcml6ZVwiLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICB7ZXJyb3JzLnByaXplICYmIGVycm9ycy5wcml6ZS50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIHByaXplPC9FcnJvclNwYW4+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPEZvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICBuYW1lPSdhbW91bnQnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBhbW91bnQgb2YgcHJvZHVjdHMgJ1xyXG4gICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSwgbWluOiAxIH0pfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVycm9yKFwiYW1vdW50XCIsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibWFudWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBoYXZlIHRvIHByb3ZpZGUgYW1vdW50IG9mIHByb2R1Y3RzXCIsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIHtlcnJvcnMuYW1vdW50ICYmIGVycm9ycy5hbW91bnQudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgIDxFcnJvclNwYW4+UGxlYXNlIHByb3ZpZGUgYSBhbW91bnQgb2YgcHJvZHVjdHM8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgIG5hbWU9J3Byb2R1Y3RJbWcnXHJcbiAgICAgICAgICB0eXBlPSdmaWxlJ1xyXG4gICAgICAgICAgYWNjZXB0PScucG5nLCAuanBnLCAuanBlZydcclxuICAgICAgICAgIGlkPSdwcm9kdWN0SW1nJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdoaWRkZW4nXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoXCJwcm9kdWN0SW1nXCIsIHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIm1hbnVhbFwiLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgdG8gcHJvdmlkZSBhbiBwcm9kdWN0IGltYWdlXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdwcm9kdWN0SW1nJz5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPSd1cGxvYWQgcGljdHVyZSdcclxuICAgICAgICAgICAgY29tcG9uZW50PSdzcGFuJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGhvdG9DYW1lcmEgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIHtlcnJvcnMucHJvZHVjdEltZyAmJiBlcnJvcnMucHJvZHVjdEltZy50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIHByb2R1Y3QgaW1hZ2U8L0Vycm9yU3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxTZWxlY3RCb3g+XHJcbiAgICAgICAgICA8Rm9ybUxhYmVsPlxyXG4gICAgICAgICAgICA8cD5TZWxlY3QgZGV2aWNlPC9wPlxyXG4gICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgIGFzPXtcclxuICAgICAgICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e2RldmljZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZURldmljZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nRGVza3RvcCc+RGVza3RvcDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nUGxheXN0YXRpb24nPlBsYXlzdGF0aW9uPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdYYm94Jz5YYm94PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBuYW1lPSdkZXZpY2UnXHJcbiAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6IHRydWUgfX1cclxuICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPC9TZWxlY3RCb3g+XHJcbiAgICAgICAge2Vycm9ycy5kZXZpY2UgJiYgZXJyb3JzLmRldmljZS50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgPEVycm9yU3Bhbj5QbGVhc2UgcHJvdmlkZSBhIGRldmljZTwvRXJyb3JTcGFuPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknPlxyXG4gICAgICAgICAgQWRkIFByb2R1Y3RcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICB7KHJlc3BvbnNlVHlwZSAmJiByZXNwb25zZVR5cGUucHJvZHVjdCAmJiAoXHJcbiAgICAgICAgPEFsZXJ0XHJcbiAgICAgICAgICBtZXNzYWdlPSdQcm9kdWN0IHN1Y2Nlc2Z1bGx5IGFkZGVkIHRvIG9mZmVyJ1xyXG4gICAgICAgICAgc2hvdWxkT3Blbj17dHJ1ZX1cclxuICAgICAgICAgIHZhcmlhbnQ9J3N1Y2Nlc3MnXHJcbiAgICAgICAgLz5cclxuICAgICAgKSkgfHxcclxuICAgICAgICAocmVzcG9uc2VUeXBlICYmIHJlc3BvbnNlVHlwZS5tZXNzYWdlICYmIChcclxuICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgICBtZXNzYWdlPXtyZXNwb25zZVR5cGUubWVzc2FnZX1cclxuICAgICAgICAgICAgc2hvdWxkT3Blbj17dHJ1ZX1cclxuICAgICAgICAgICAgdmFyaWFudD0nZXJyb3InXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFByb2R1Y3RGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9