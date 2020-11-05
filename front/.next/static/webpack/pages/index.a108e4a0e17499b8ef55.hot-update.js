webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ContactForm/index.js":
/*!*****************************************!*\
  !*** ./components/ContactForm/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");


var _jsxFileName = "D:\\projekty\\ecommerce\\front\\components\\ContactForm\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ContactForm__Wrapper",
  componentId: "sc-1pug6mx-0"
})(["display:flex;justify-content:center;align-items:center;"]);
_c = Wrapper;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "ContactForm__Form",
  componentId: "sc-1pug6mx-1"
})(["display:flex;flex-direction:column;background-color:#24272e;"]);
_c2 = Form;
var Input = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "ContactForm__Input",
  componentId: "sc-1pug6mx-2"
})(["border:none;border-bottom:2px solid white;outline:none;background-color:transparent;color:rgba(255,255,255,0.9);padding:5px;font-size:1em;margin-right:4px;width:100%;&::placeholder{color:white;}&:focus{outline:1px solid white;}@media (min-width:960px){padding:12px;}"]);
_c3 = Input;

var ContactForm = function ContactForm() {
  _s();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.errors;

  var handleSendEmail = function handleSendEmail(data, event) {
    event.preventDefault();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {
      onSubmit: handleSendEmail,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
        type: "text",
        name: "name",
        placeholder: "Your name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
        type: "email",
        name: "email",
        placeholder: "Your e-mail"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, _this);
};

_s(ContactForm, "+Nrz0BYUZDnkIuhmBbPsJSfSlWM=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"]];
});

_c4 = ContactForm;
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "Input");
$RefreshReg$(_c4, "ContactForm");

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

/***/ }),

/***/ "./node_modules/react-hook-form/dist/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/react-hook-form/dist/index.esm.js ***!
  \********************************************************/
/*! exports provided: Controller, FormProvider, appendErrors, get, transformToNestObject, useFieldArray, useForm, useFormContext, useWatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProvider", function() { return FormProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendErrors", function() { return appendErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformToNestObject", function() { return transformToNestObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFieldArray", function() { return useFieldArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return useForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormContext", function() { return useFormContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWatch", function() { return useWatch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var isHTMLElement = (value) => value instanceof HTMLElement;

const EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
    INPUT: 'input',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const VALUE = 'value';
const SELECT = 'select';
const UNDEFINED = 'undefined';
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

function attachEventListeners({ ref }, shouldAttachChangeEvent, handleChange) {
    if (isHTMLElement(ref) && handleChange) {
        ref.addEventListener(shouldAttachChangeEvent ? EVENTS.CHANGE : EVENTS.INPUT, handleChange);
        ref.addEventListener(EVENTS.BLUR, handleChange);
    }
}

var isNullOrUndefined = (value) => value == null;

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !Array.isArray(value) &&
    isObjectType(value) &&
    !(value instanceof Date);

var isKey = (value) => !Array.isArray(value) &&
    (/^\w*$/.test(value) ||
        !/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/.test(value));

var compact = (value) => value.filter(Boolean);

var stringToPath = (input) => compact(input
    .replace(/["|']/g, '')
    .replace(/\[/g, '.')
    .replace(/\]/g, '')
    .split('.'));

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

var transformToNestObject = (data, value = {}) => {
    for (const key in data) {
        !isKey(key) ? set(value, key, data[key]) : (value[key] = data[key]);
    }
    return value;
};

var isUndefined = (val) => val === undefined;

var get = (obj, path, defaultValue) => {
    const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
    return isUndefined(result) || result === obj
        ? isUndefined(obj[path])
            ? defaultValue
            : obj[path]
        : result;
};

var focusOnErrorField = (fields, fieldErrors) => {
    for (const key in fields) {
        if (get(fieldErrors, key)) {
            const field = fields[key];
            if (field) {
                if (field.ref.focus) {
                    if (isUndefined(field.ref.focus())) {
                        break;
                    }
                }
                else if (field.options) {
                    field.options[0].ref.focus();
                    break;
                }
            }
        }
    }
};

var removeAllEventListeners = (ref, validateWithStateUpdate) => {
    if (isHTMLElement(ref) && ref.removeEventListener) {
        ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
    }
};

const defaultReturn = {
    isValid: false,
    value: '',
};
var getRadioValue = (options) => Array.isArray(options)
    ? options.reduce((previous, option) => option && option.ref.checked
        ? {
            isValid: true,
            value: option.ref.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

var isRadioInput = (element) => element.type === 'radio';

var isFileInput = (element) => element.type === 'file';

var isCheckBoxInput = (element) => element.type === 'checkbox';

var isMultipleSelect = (element) => element.type === `${SELECT}-multiple`;

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.ref.checked)
                .map(({ ref: { value } }) => value);
            return { value: values, isValid: !!values.length };
        }
        const { checked, value, attributes } = options[0].ref;
        return checked
            ? attributes && !isUndefined(attributes.value)
                ? isUndefined(value) || value === ''
                    ? validResult
                    : { value: value, isValid: true }
                : validResult
            : defaultResult;
    }
    return defaultResult;
};

function getFieldValue(fieldsRef, name, shallowFieldsStateRef, excludeDisabled) {
    const field = fieldsRef.current[name];
    if (field) {
        const { ref: { value, disabled }, ref, } = field;
        if (disabled && excludeDisabled) {
            return;
        }
        if (isFileInput(ref)) {
            return ref.files;
        }
        if (isRadioInput(ref)) {
            return getRadioValue(field.options).value;
        }
        if (isMultipleSelect(ref)) {
            return getMultipleSelectValue(ref.options);
        }
        if (isCheckBoxInput(ref)) {
            return getCheckboxValue(field.options).value;
        }
        return value;
    }
    if (shallowFieldsStateRef) {
        return get(shallowFieldsStateRef.current, name);
    }
}

function isDetached(element) {
    if (!element) {
        return true;
    }
    if (!(element instanceof HTMLElement) ||
        element.nodeType === Node.DOCUMENT_NODE) {
        return false;
    }
    return isDetached(element.parentNode);
}

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var isBoolean = (value) => typeof value === 'boolean';

function baseGet(object, updatePath) {
    const path = updatePath.slice(0, -1);
    const length = path.length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function unset(object, path) {
    const updatePath = isKey(path) ? [path] : stringToPath(path);
    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef = undefined;
    if (childObject) {
        delete childObject[key];
    }
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef = undefined;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index &&
                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (Array.isArray(objectRef) &&
                        !objectRef.filter((data) => (isObject(data) && !isEmptyObject(data)) || isBoolean(data)).length))) {
                previousObjRef ? delete previousObjRef[item] : delete object[item];
            }
            previousObjRef = objectRef;
        }
    }
    return object;
}

const isSameRef = (fieldValue, ref) => fieldValue && fieldValue.ref === ref;
function findRemovedFieldAndRemoveListener(fieldsRef, handleChange, field, shallowFieldsStateRef, shouldUnregister, forceDelete) {
    const { ref, ref: { name, type }, } = field;
    const fieldRef = fieldsRef.current[name];
    if (!shouldUnregister) {
        const value = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
        if (!isUndefined(value)) {
            set(shallowFieldsStateRef.current, name, value);
        }
    }
    if (!type) {
        delete fieldsRef.current[name];
        return;
    }
    if ((isRadioInput(ref) || isCheckBoxInput(ref)) && fieldRef) {
        const { options } = fieldRef;
        if (Array.isArray(options) && options.length) {
            compact(options).forEach((option, index) => {
                const { ref } = option;
                if ((ref && isDetached(ref) && isSameRef(option, ref)) || forceDelete) {
                    removeAllEventListeners(ref, handleChange);
                    unset(options, `[${index}]`);
                }
            });
            if (options && !compact(options).length) {
                delete fieldsRef.current[name];
            }
        }
        else {
            delete fieldsRef.current[name];
        }
    }
    else if ((isDetached(ref) && isSameRef(fieldRef, ref)) || forceDelete) {
        removeAllEventListeners(ref, handleChange);
        delete fieldsRef.current[name];
    }
}

function setFieldArrayDirtyFields(values, defaultValues, dirtyFields, parentNode, parentName) {
    let index = -1;
    while (++index < values.length) {
        for (const key in values[index]) {
            if (Array.isArray(values[index][key])) {
                !dirtyFields[index] && (dirtyFields[index] = {});
                dirtyFields[index][key] = [];
                setFieldArrayDirtyFields(values[index][key], get(defaultValues[index] || {}, key, []), dirtyFields[index][key], dirtyFields[index], key);
            }
            else {
                get(defaultValues[index] || {}, key) === values[index][key]
                    ? set(dirtyFields[index] || {}, key)
                    : (dirtyFields[index] = Object.assign(Object.assign({}, dirtyFields[index]), { [key]: true }));
            }
        }
        !dirtyFields.length &&
            parentNode &&
            delete parentNode[parentName];
    }
    return dirtyFields.length ? dirtyFields : undefined;
}

var isString = (value) => typeof value === 'string';

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepMerge(target, source) {
    if (isPrimitive(target) || isPrimitive(source)) {
        return source;
    }
    for (const key in source) {
        const targetValue = target[key];
        const sourceValue = source[key];
        try {
            target[key] =
                (isObject(targetValue) && isObject(sourceValue)) ||
                    (Array.isArray(targetValue) && Array.isArray(sourceValue))
                    ? deepMerge(targetValue, sourceValue)
                    : sourceValue;
        }
        catch (_a) { }
    }
    return target;
}

var getFieldsValues = (fieldsRef, shallowFieldsStateRef, excludeDisabled, search) => {
    const output = {};
    for (const name in fieldsRef.current) {
        if (isUndefined(search) ||
            (isString(search)
                ? name.startsWith(search)
                : Array.isArray(search) && search.find((data) => name.startsWith(data)))) {
            output[name] = getFieldValue(fieldsRef, name, undefined, excludeDisabled);
        }
    }
    return deepMerge(transformToNestObject(Object.assign({}, ((shallowFieldsStateRef || {}).current || {}))), transformToNestObject(output));
};

function deepEqual(object1, object2, isErrorObject) {
    if (isPrimitive(object1) || isPrimitive(object2)) {
        return object1 === object2;
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        if (!(isErrorObject && ['ref', 'context'].includes(key))) {
            const val1 = object1[key];
            const val2 = object2[key];
            if ((isObject(val1) || Array.isArray(val1)) &&
                (isObject(val2) || Array.isArray(val2))
                ? !deepEqual(val1, val2, isErrorObject)
                : val1 !== val2) {
                return false;
            }
        }
    }
    return true;
}

function isErrorStateChanged({ errors, name, error, validFields, fieldsWithValidation, }) {
    const isValid = isUndefined(error);
    const previousError = get(errors, name);
    return ((isValid && !!previousError) ||
        (!isValid && !deepEqual(previousError, error, true)) ||
        (isValid && get(fieldsWithValidation, name) && !get(validFields, name)));
}

var isRegex = (value) => value instanceof RegExp;

const isValueMessage = (value) => isObject(value) && !isRegex(value);
var getValueAndMessage = (validationData) => isValueMessage(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var isFunction = (value) => typeof value === 'function';

var isMessage = (value) => isString(value) || (isObject(value) && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(value));

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) || (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => {
    if (validateAllFieldCriteria) {
        const error = errors[name];
        return Object.assign(Object.assign({}, error), { types: Object.assign(Object.assign({}, (error && error.types ? error.types : {})), { [type]: message || true }) });
    }
    return {};
};

var validateField = async (fieldsRef, validateAllFieldCriteria, { ref, ref: { type, value }, options, required, maxLength, minLength, min, max, pattern, validate, }, shallowFieldsStateRef) => {
    const fields = fieldsRef.current;
    const name = ref.name;
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = value === '';
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
            ref }, (exceedMax
            ? appendErrorsCurry(maxType, message)
            : appendErrorsCurry(minType, message)));
    };
    if (required &&
        ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(value))) ||
            (isBoolean(value) && !value) ||
            (isCheckBox && !getCheckboxValue(options).isValid) ||
            (isRadio && !getRadioValue(options).isValid))) {
        const { value: requiredValue, message: requiredMessage } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (requiredValue) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message: requiredMessage, ref: isRadioOrCheckbox
                    ? ((fields[name].options || [])[0] || {}).ref
                    : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, requiredMessage));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (!isNullOrUndefined(min) || !isNullOrUndefined(max)) {
        let exceedMax;
        let exceedMin;
        const { value: maxValue, message: maxMessage } = getValueAndMessage(max);
        const { value: minValue, message: minMessage } = getValueAndMessage(min);
        if (type === 'number' || (!type && !isNaN(value))) {
            const valueNumber = ref.valueAsNumber || parseFloat(value);
            if (!isNullOrUndefined(maxValue)) {
                exceedMax = valueNumber > maxValue;
            }
            if (!isNullOrUndefined(minValue)) {
                exceedMin = valueNumber < minValue;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(value);
            if (isString(maxValue)) {
                exceedMax = valueDate > new Date(maxValue);
            }
            if (isString(minValue)) {
                exceedMin = valueDate < new Date(minValue);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxMessage, minMessage, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(value) && !isEmpty && (maxLength || minLength)) {
        const { value: maxLengthValue, message: maxLengthMessage, } = getValueAndMessage(maxLength);
        const { value: minLengthValue, message: minLengthMessage, } = getValueAndMessage(minLength);
        const inputLength = value.toString().length;
        const exceedMax = !isNullOrUndefined(maxLengthValue) && inputLength > maxLengthValue;
        const exceedMin = !isNullOrUndefined(minLengthValue) && inputLength < minLengthValue;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxLengthMessage, minLengthMessage);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (pattern && !isEmpty) {
        const { value: patternValue, message: patternMessage } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !patternValue.test(value)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message: patternMessage, ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, patternMessage));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (validate) {
        const fieldValue = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
        const validateRef = isRadioOrCheckbox && options ? options[0].ref : ref;
        if (isFunction(validate)) {
            const result = await validate(fieldValue);
            const validateError = getValidateError(result, validateRef);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const [key, validateFunction] of Object.entries(validate)) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateResult = await validateFunction(fieldValue);
                const validateError = getValidateError(validateResult, validateRef, key);
                if (validateError) {
                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: validateRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    return error;
};

const getPath = (path, values) => {
    const getInnerPath = (key, value, isObject) => {
        const pathWithIndex = isObject ? `${path}.${key}` : `${path}[${key}]`;
        return isPrimitive(value) ? pathWithIndex : getPath(pathWithIndex, value);
    };
    return Object.entries(values)
        .map(([key, value]) => getInnerPath(key, value, isObject(values)))
        .flat(Infinity);
};

var assignWatchFields = (fieldValues, fieldName, watchFields, inputValue, isSingleField) => {
    let value;
    watchFields.add(fieldName);
    if (isEmptyObject(fieldValues)) {
        value = undefined;
    }
    else {
        value = get(fieldValues, fieldName);
        if (isObject(value) || Array.isArray(value)) {
            getPath(fieldName, value).forEach((name) => watchFields.add(name));
        }
    }
    return isUndefined(value)
        ? isSingleField
            ? inputValue
            : get(inputValue, fieldName)
        : value;
};

var skipValidation = ({ isOnBlur, isOnChange, isOnTouch, isTouched, isReValidateOnBlur, isReValidateOnChange, isBlurEvent, isSubmitted, isOnAll, }) => {
    if (isOnAll) {
        return false;
    }
    else if (!isSubmitted && isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? isReValidateOnBlur : isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? isReValidateOnChange : isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var getFieldArrayParentName = (name) => name.substring(0, name.indexOf('['));

const isMatchFieldArrayName = (name, searchName) => RegExp(`^${searchName}[\\d+]`.replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(name);
var isNameInFieldArray = (names, name) => [...names].some((current) => isMatchFieldArrayName(name, current));

var isSelectInput = (element) => element.type === `${SELECT}-one`;

function onDomRemove(fieldsRef, removeFieldEventListenerAndRef) {
    const observer = new MutationObserver(() => {
        for (const field of Object.values(fieldsRef.current)) {
            if (field && field.options) {
                for (const option of field.options) {
                    if (option && option.ref && isDetached(option.ref)) {
                        removeFieldEventListenerAndRef(field);
                    }
                }
            }
            else if (field && isDetached(field.ref)) {
                removeFieldEventListenerAndRef(field);
            }
        }
    });
    observer.observe(window.document, {
        childList: true,
        subtree: true,
    });
    return observer;
}

function cloneObject(data, isWeb) {
    let copy;
    if (isPrimitive(data) || (isWeb && data instanceof File)) {
        return data;
    }
    if (data instanceof Date) {
        copy = new Date(data.getTime());
        return copy;
    }
    if (data instanceof Set) {
        copy = new Set();
        for (const item of data) {
            copy.add(item);
        }
        return copy;
    }
    if (data instanceof Map) {
        copy = new Map();
        for (const key of data.keys()) {
            copy.set(key, cloneObject(data.get(key), isWeb));
        }
        return copy;
    }
    copy = Array.isArray(data) ? [] : {};
    for (const key in data) {
        copy[key] = cloneObject(data[key], isWeb);
    }
    return copy;
}

var modeChecker = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

const isWindowUndefined = typeof window === UNDEFINED;
const isWeb = typeof document !== UNDEFINED &&
    !isWindowUndefined &&
    !isUndefined(window.HTMLElement);
const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== UNDEFINED;
function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, resolver, context, defaultValues = {}, shouldFocusError = true, shouldUnregister = true, criteriaMode, } = {}) {
    const fieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const fieldArrayDefaultValuesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const watchFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const useWatchFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const useWatchRenderFunctionsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const fieldsWithValidationRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const validFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const defaultValuesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(defaultValues);
    const defaultValuesAtRenderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const isUnMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const isWatchAllRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const handleChangeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const shallowFieldsStateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(shouldUnregister ? {} : cloneObject(defaultValues, isWeb));
    const resetFieldArrayFunctionRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const contextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(context);
    const resolverRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(resolver);
    const fieldArrayNamesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const modeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(modeChecker(mode));
    const { isOnSubmit, isOnTouch } = modeRef.current;
    const isValidateAllFieldCriteria = criteriaMode === VALIDATION_MODE.all;
    const [formState, setFormState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
        isDirty: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touched: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: !isOnSubmit,
        errors: {},
    });
    const readFormStateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        isDirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        touched: !isProxyEnabled || isOnTouch,
        isSubmitting: !isProxyEnabled,
        isValid: !isProxyEnabled,
    });
    const formStateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(formState);
    const observerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const { isOnBlur: isReValidateOnBlur, isOnChange: isReValidateOnChange, } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(modeChecker(reValidateMode)).current;
    contextRef.current = context;
    resolverRef.current = resolver;
    formStateRef.current = formState;
    const updateFormState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((state = {}) => !isUnMount.current &&
        setFormState(Object.assign(Object.assign({}, formStateRef.current), state)), []);
    const shouldRenderBaseOnError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, error, shouldRender = false, state = {}, isValid) => {
        let shouldReRender = shouldRender ||
            isErrorStateChanged({
                errors: formStateRef.current.errors,
                error,
                name,
                validFields: validFieldsRef.current,
                fieldsWithValidation: fieldsWithValidationRef.current,
            });
        const previousError = get(formStateRef.current.errors, name);
        if (error) {
            unset(validFieldsRef.current, name);
            shouldReRender =
                shouldReRender ||
                    !previousError ||
                    !deepEqual(previousError, error, true);
            set(formStateRef.current.errors, name, error);
        }
        else {
            if (get(fieldsWithValidationRef.current, name) || resolverRef.current) {
                set(validFieldsRef.current, name, true);
                shouldReRender = shouldReRender || previousError;
            }
            unset(formStateRef.current.errors, name);
        }
        if ((shouldReRender && !isNullOrUndefined(shouldRender)) ||
            !isEmptyObject(state)) {
            updateFormState(Object.assign(Object.assign(Object.assign({}, state), { errors: formStateRef.current.errors }), (resolverRef.current ? { isValid: !!isValid } : {})));
        }
    }, []);
    const setFieldValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, rawValue) => {
        const { ref, options } = fieldsRef.current[name];
        const value = isWeb && isHTMLElement(ref) && isNullOrUndefined(rawValue)
            ? ''
            : rawValue;
        if (isRadioInput(ref) && options) {
            options.forEach(({ ref: radioRef }) => (radioRef.checked = radioRef.value === value));
        }
        else if (isFileInput(ref) && !isString(value)) {
            ref.files = value;
        }
        else if (isMultipleSelect(ref)) {
            [...ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
        }
        else if (isCheckBoxInput(ref) && options) {
            options.length > 1
                ? options.forEach(({ ref: checkboxRef }) => (checkboxRef.checked = Array.isArray(value)
                    ? !!value.find((data) => data === checkboxRef.value)
                    : value === checkboxRef.value))
                : (options[0].ref.checked = !!value);
        }
        else {
            ref.value = value;
        }
    }, []);
    const isFormDirty = () => !deepEqual(getValues(), isEmptyObject(defaultValuesRef.current)
        ? defaultValuesAtRenderRef.current
        : defaultValuesRef.current) || !isEmptyObject(formStateRef.current.dirtyFields);
    const updateAndGetDirtyState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, shouldRender = true) => {
        if (readFormStateRef.current.isDirty ||
            readFormStateRef.current.dirtyFields) {
            const isFieldDirty = !deepEqual(get(defaultValuesAtRenderRef.current, name), getFieldValue(fieldsRef, name, shallowFieldsStateRef));
            const isDirtyFieldExist = get(formStateRef.current.dirtyFields, name);
            const previousIsDirty = formStateRef.current.isDirty;
            isFieldDirty
                ? set(formStateRef.current.dirtyFields, name, true)
                : unset(formStateRef.current.dirtyFields, name);
            const state = {
                isDirty: isFormDirty(),
                dirtyFields: formStateRef.current.dirtyFields,
            };
            const isChanged = (readFormStateRef.current.isDirty &&
                previousIsDirty !== state.isDirty) ||
                (readFormStateRef.current.dirtyFields &&
                    isDirtyFieldExist !== get(formStateRef.current.dirtyFields, name));
            if (isChanged && shouldRender) {
                formStateRef.current = Object.assign(Object.assign({}, formStateRef.current), state);
                updateFormState(Object.assign({}, state));
            }
            return isChanged ? state : {};
        }
        return {};
    }, []);
    const executeValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (name, skipReRender) => {
        if (fieldsRef.current[name]) {
            const error = (await validateField(fieldsRef, isValidateAllFieldCriteria, fieldsRef.current[name], shallowFieldsStateRef))[name];
            shouldRenderBaseOnError(name, error, skipReRender);
            return isUndefined(error);
        }
        return false;
    }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
    const executeSchemaOrResolverValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (names) => {
        const { errors } = await resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria);
        const previousFormIsValid = formStateRef.current.isValid;
        if (Array.isArray(names)) {
            const isInputsValid = names
                .map((name) => {
                const error = get(errors, name);
                error
                    ? set(formStateRef.current.errors, name, error)
                    : unset(formStateRef.current.errors, name);
                return !error;
            })
                .every(Boolean);
            updateFormState({
                isValid: isEmptyObject(errors),
                errors: formStateRef.current.errors,
            });
            return isInputsValid;
        }
        else {
            const error = get(errors, names);
            shouldRenderBaseOnError(names, error, previousFormIsValid !== isEmptyObject(errors), {}, isEmptyObject(errors));
            return !error;
        }
    }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
    const trigger = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (name) => {
        const fields = name || Object.keys(fieldsRef.current);
        if (resolverRef.current) {
            return executeSchemaOrResolverValidation(fields);
        }
        if (Array.isArray(fields)) {
            !name && (formStateRef.current.errors = {});
            const result = await Promise.all(fields.map(async (data) => await executeValidation(data, null)));
            updateFormState();
            return result.every(Boolean);
        }
        return await executeValidation(fields, readFormStateRef.current.isValid);
    }, [executeSchemaOrResolverValidation, executeValidation]);
    const setInternalValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, value, { shouldDirty, shouldValidate }) => {
        const data = {};
        set(data, name, value);
        for (const fieldName of getPath(name, value)) {
            if (fieldsRef.current[fieldName]) {
                setFieldValue(fieldName, get(data, fieldName));
                shouldDirty && updateAndGetDirtyState(fieldName);
                shouldValidate && trigger(fieldName);
            }
        }
    }, [trigger, setFieldValue, updateAndGetDirtyState]);
    const setInternalValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, value, config = {}) => {
        if (fieldsRef.current[name]) {
            setFieldValue(name, value);
            config.shouldDirty && updateAndGetDirtyState(name);
        }
        else if (!isPrimitive(value)) {
            setInternalValues(name, value, config);
            if (fieldArrayNamesRef.current.has(name)) {
                fieldArrayDefaultValuesRef.current[name] = value;
                resetFieldArrayFunctionRef.current[name]({
                    [name]: value,
                });
                if ((readFormStateRef.current.isDirty ||
                    readFormStateRef.current.dirtyFields) &&
                    config.shouldDirty) {
                    set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(value, get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
                    updateFormState({
                        isDirty: !deepEqual(Object.assign(Object.assign({}, getValues()), { [name]: value }), defaultValuesRef.current),
                        dirtyFields: formStateRef.current.dirtyFields,
                    });
                }
            }
        }
        !shouldUnregister && set(shallowFieldsStateRef.current, name, value);
    }, [updateAndGetDirtyState, setFieldValue, setInternalValues]);
    const isFieldWatched = (name) => isWatchAllRef.current ||
        watchFieldsRef.current.has(name) ||
        watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
    const renderWatchedInputs = (name, found = true) => {
        if (!isEmptyObject(useWatchFieldsRef.current)) {
            for (const key in useWatchFieldsRef.current) {
                if (!name ||
                    !useWatchFieldsRef.current[key].size ||
                    useWatchFieldsRef.current[key].has(name) ||
                    useWatchFieldsRef.current[key].has(getFieldArrayParentName(name))) {
                    useWatchRenderFunctionsRef.current[key]();
                    found = false;
                }
            }
        }
        return found;
    };
    function setValue(name, value, config) {
        setInternalValue(name, value, config);
        isFieldWatched(name) && updateFormState();
        renderWatchedInputs(name);
        (config || {}).shouldValidate && trigger(name);
    }
    handleChangeRef.current = handleChangeRef.current
        ? handleChangeRef.current
        : async ({ type, target }) => {
            let name = target.name;
            const field = fieldsRef.current[name];
            let error;
            let isValid;
            if (field) {
                const isBlurEvent = type === EVENTS.BLUR;
                const shouldSkipValidation = skipValidation(Object.assign({ isBlurEvent,
                    isReValidateOnChange,
                    isReValidateOnBlur, isTouched: !!get(formStateRef.current.touched, name), isSubmitted: formStateRef.current.isSubmitted }, modeRef.current));
                let state = updateAndGetDirtyState(name, false);
                let shouldRender = !isEmptyObject(state) || isFieldWatched(name);
                if (isBlurEvent &&
                    !get(formStateRef.current.touched, name) &&
                    readFormStateRef.current.touched) {
                    set(formStateRef.current.touched, name, true);
                    state = Object.assign(Object.assign({}, state), { touched: formStateRef.current.touched });
                }
                if (shouldSkipValidation) {
                    renderWatchedInputs(name);
                    return ((!isEmptyObject(state) ||
                        (shouldRender && isEmptyObject(state))) &&
                        updateFormState(state));
                }
                if (resolverRef.current) {
                    const { errors } = await resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria);
                    const previousFormIsValid = formStateRef.current.isValid;
                    error = get(errors, name);
                    if (!error && resolverRef.current) {
                        const parentNodeName = name.substring(0, name.lastIndexOf('.') > name.lastIndexOf('[')
                            ? name.lastIndexOf('.')
                            : name.lastIndexOf('['));
                        const currentError = get(errors, parentNodeName, {});
                        currentError.type &&
                            currentError.message &&
                            (error = currentError);
                        if (parentNodeName &&
                            (currentError ||
                                get(formStateRef.current.errors, parentNodeName))) {
                            name = parentNodeName;
                        }
                    }
                    isValid = isEmptyObject(errors);
                    if (previousFormIsValid !== isValid) {
                        shouldRender = true;
                    }
                }
                else {
                    error = (await validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef))[name];
                }
                renderWatchedInputs(name);
                shouldRenderBaseOnError(name, error, shouldRender, state, isValid);
            }
        };
    function setFieldArrayDefaultValues(data) {
        if (!shouldUnregister) {
            let copy = cloneObject(data, isWeb);
            for (const value of fieldArrayNamesRef.current) {
                if (isKey(value) && !copy[value]) {
                    copy = Object.assign(Object.assign({}, copy), { [value]: [] });
                }
            }
            return copy;
        }
        return data;
    }
    function getValues(payload) {
        if (isString(payload)) {
            return getFieldValue(fieldsRef, payload, shallowFieldsStateRef);
        }
        if (Array.isArray(payload)) {
            const data = {};
            for (const name of payload) {
                set(data, name, getFieldValue(fieldsRef, name, shallowFieldsStateRef));
            }
            return data;
        }
        return setFieldArrayDefaultValues(getFieldsValues(fieldsRef, shallowFieldsStateRef));
    }
    const validateResolver = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (values = {}) => {
        const { errors } = await resolverRef.current(Object.assign(Object.assign(Object.assign({}, defaultValuesRef.current), getValues()), values), contextRef.current, isValidateAllFieldCriteria);
        const isValid = isEmptyObject(errors);
        formStateRef.current.isValid !== isValid &&
            updateFormState({
                isValid,
            });
    }, [isValidateAllFieldCriteria]);
    const removeFieldEventListener = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((field, forceDelete) => findRemovedFieldAndRemoveListener(fieldsRef, handleChangeRef.current, field, shallowFieldsStateRef, shouldUnregister, forceDelete), [shouldUnregister]);
    const updateWatchedValue = (name) => {
        if (isWatchAllRef.current) {
            updateFormState();
        }
        else if (watchFieldsRef) {
            let shouldRenderUseWatch = true;
            for (const watchField of watchFieldsRef.current) {
                if (watchField.startsWith(name)) {
                    updateFormState();
                    shouldRenderUseWatch = false;
                    break;
                }
            }
            shouldRenderUseWatch && renderWatchedInputs(name);
        }
    };
    const removeFieldEventListenerAndRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((field, forceDelete) => {
        if (field) {
            removeFieldEventListener(field, forceDelete);
            if (shouldUnregister && !compact(field.options || []).length) {
                unset(defaultValuesAtRenderRef.current, field.ref.name);
                unset(validFieldsRef.current, field.ref.name);
                unset(fieldsWithValidationRef.current, field.ref.name);
                unset(formStateRef.current.errors, field.ref.name);
                set(formStateRef.current.dirtyFields, field.ref.name, true);
                updateFormState({
                    errors: formStateRef.current.errors,
                    isDirty: isFormDirty(),
                    dirtyFields: formStateRef.current.dirtyFields,
                });
                readFormStateRef.current.isValid &&
                    resolverRef.current &&
                    validateResolver();
                updateWatchedValue(field.ref.name);
            }
        }
    }, [validateResolver, removeFieldEventListener]);
    function clearErrors(name) {
        name &&
            (Array.isArray(name) ? name : [name]).forEach((inputName) => fieldsRef.current[inputName]
                ? isKey(inputName)
                    ? delete formStateRef.current.errors[inputName]
                    : set(formStateRef.current.errors, inputName, undefined)
                : unset(formStateRef.current.errors, inputName));
        updateFormState({
            errors: name ? formStateRef.current.errors : {},
        });
    }
    function setError(name, error) {
        const ref = (fieldsRef.current[name] || {}).ref;
        set(formStateRef.current.errors, name, Object.assign(Object.assign({}, error), { ref }));
        updateFormState({
            isValid: false,
            errors: formStateRef.current.errors,
        });
        error.shouldFocus && ref && ref.focus && ref.focus();
    }
    const watchInternal = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((fieldNames, defaultValue, watchId) => {
        const watchFields = watchId
            ? useWatchFieldsRef.current[watchId]
            : watchFieldsRef.current;
        const combinedDefaultValues = isUndefined(defaultValue)
            ? defaultValuesRef.current
            : defaultValue;
        const fieldValues = getFieldsValues(fieldsRef, shallowFieldsStateRef, false, fieldNames);
        if (isString(fieldNames)) {
            return assignWatchFields(fieldValues, fieldNames, watchFields, isUndefined(defaultValue)
                ? get(combinedDefaultValues, fieldNames)
                : defaultValue, true);
        }
        if (Array.isArray(fieldNames)) {
            return fieldNames.reduce((previous, name) => (Object.assign(Object.assign({}, previous), { [name]: assignWatchFields(fieldValues, name, watchFields, combinedDefaultValues) })), {});
        }
        isWatchAllRef.current = isUndefined(watchId);
        return transformToNestObject((!isEmptyObject(fieldValues) && fieldValues) ||
            combinedDefaultValues);
    }, []);
    function watch(fieldNames, defaultValue) {
        return watchInternal(fieldNames, defaultValue);
    }
    function unregister(name) {
        for (const fieldName of Array.isArray(name) ? name : [name]) {
            removeFieldEventListenerAndRef(fieldsRef.current[fieldName], true);
        }
    }
    function registerFieldRef(ref, validateOptions = {}) {
        if (true) {
            if (!ref.name) {
                return console.warn('📋 Field is missing `name` attribute', ref, `https://react-hook-form.com/api#useForm`);
            }
            if (fieldArrayNamesRef.current.has(ref.name.split(/\[\d+\]$/)[0]) &&
                !RegExp(`^${ref.name.split(/\[\d+\]$/)[0]}[\\d+].\\w+`
                    .replace(/\[/g, '\\[')
                    .replace(/\]/g, '\\]')).test(ref.name)) {
                return console.warn('📋 `name` prop should be in object shape: name="test[index].name"', ref, 'https://react-hook-form.com/api#useFieldArray');
            }
        }
        const { name, type, value } = ref;
        const fieldRefAndValidationOptions = Object.assign({ ref }, validateOptions);
        const fields = fieldsRef.current;
        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        const isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
        const compareRef = (currentRef) => isWeb && (!isHTMLElement(ref) || currentRef === ref);
        let field = fields[name];
        let isEmptyDefaultValue = true;
        let defaultValue;
        if (field &&
            (isRadioOrCheckbox
                ? Array.isArray(field.options) &&
                    compact(field.options).find((option) => {
                        return value === option.ref.value && compareRef(option.ref);
                    })
                : compareRef(field.ref))) {
            fields[name] = Object.assign(Object.assign({}, field), validateOptions);
            return;
        }
        if (type) {
            field = isRadioOrCheckbox
                ? Object.assign({ options: [
                        ...compact((field && field.options) || []),
                        {
                            ref,
                        },
                    ], ref: { type, name } }, validateOptions) : Object.assign({}, fieldRefAndValidationOptions);
        }
        else {
            field = fieldRefAndValidationOptions;
        }
        fields[name] = field;
        const isEmptyUnmountFields = isUndefined(get(shallowFieldsStateRef.current, name));
        if (!isEmptyObject(defaultValuesRef.current) || !isEmptyUnmountFields) {
            defaultValue = get(isEmptyUnmountFields
                ? defaultValuesRef.current
                : shallowFieldsStateRef.current, name);
            isEmptyDefaultValue = isUndefined(defaultValue);
            if (!isEmptyDefaultValue && !isFieldArray) {
                setFieldValue(name, defaultValue);
            }
        }
        if (!isEmptyObject(validateOptions)) {
            set(fieldsWithValidationRef.current, name, true);
            if (!isOnSubmit && readFormStateRef.current.isValid) {
                validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef).then((error) => {
                    const previousFormIsValid = formStateRef.current.isValid;
                    isEmptyObject(error)
                        ? set(validFieldsRef.current, name, true)
                        : unset(validFieldsRef.current, name);
                    if (previousFormIsValid !== isEmptyObject(error)) {
                        updateFormState();
                    }
                });
            }
        }
        if (!defaultValuesAtRenderRef.current[name] &&
            !(isFieldArray && isEmptyDefaultValue)) {
            const fieldValue = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
            set(defaultValuesAtRenderRef.current, name, isEmptyDefaultValue
                ? isObject(fieldValue)
                    ? Object.assign({}, fieldValue) : fieldValue
                : defaultValue);
            !isFieldArray && unset(formStateRef.current.dirtyFields, name);
        }
        if (type) {
            attachEventListeners(isRadioOrCheckbox && field.options
                ? field.options[field.options.length - 1]
                : field, isRadioOrCheckbox || isSelectInput(ref), handleChangeRef.current);
        }
    }
    function register(refOrValidationOptions, rules) {
        if (!isWindowUndefined) {
            if (isString(refOrValidationOptions)) {
                registerFieldRef({ name: refOrValidationOptions }, rules);
            }
            else if (isObject(refOrValidationOptions) &&
                'name' in refOrValidationOptions) {
                registerFieldRef(refOrValidationOptions, rules);
            }
            else {
                return (ref) => ref && registerFieldRef(ref, refOrValidationOptions);
            }
        }
    }
    const handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((onValid, onInvalid) => async (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
            e.persist();
        }
        let fieldErrors = {};
        let fieldValues = setFieldArrayDefaultValues(getFieldsValues(fieldsRef, shallowFieldsStateRef, true));
        readFormStateRef.current.isSubmitting &&
            updateFormState({
                isSubmitting: true,
            });
        try {
            if (resolverRef.current) {
                const { errors, values } = await resolverRef.current(fieldValues, contextRef.current, isValidateAllFieldCriteria);
                formStateRef.current.errors = fieldErrors = errors;
                fieldValues = values;
            }
            else {
                for (const field of Object.values(fieldsRef.current)) {
                    if (field) {
                        const { ref: { name }, } = field;
                        const fieldError = await validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef);
                        if (fieldError[name]) {
                            set(fieldErrors, name, fieldError[name]);
                            unset(validFieldsRef.current, name);
                        }
                        else if (get(fieldsWithValidationRef.current, name)) {
                            unset(formStateRef.current.errors, name);
                            set(validFieldsRef.current, name, true);
                        }
                    }
                }
            }
            if (isEmptyObject(fieldErrors) &&
                Object.keys(formStateRef.current.errors).every((name) => name in fieldsRef.current)) {
                updateFormState({
                    errors: {},
                    isSubmitting: true,
                });
                await onValid(fieldValues, e);
            }
            else {
                formStateRef.current.errors = Object.assign(Object.assign({}, formStateRef.current.errors), fieldErrors);
                onInvalid && (await onInvalid(formStateRef.current.errors, e));
                shouldFocusError &&
                    focusOnErrorField(fieldsRef.current, formStateRef.current.errors);
            }
        }
        finally {
            updateFormState({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(formStateRef.current.errors),
                errors: formStateRef.current.errors,
                submitCount: formStateRef.current.submitCount + 1,
            });
        }
    }, [shouldFocusError, isValidateAllFieldCriteria]);
    const resetRefs = ({ errors, isDirty, isSubmitted, touched, isValid, submitCount, dirtyFields, }) => {
        if (!isValid) {
            validFieldsRef.current = {};
            fieldsWithValidationRef.current = {};
        }
        defaultValuesAtRenderRef.current = {};
        fieldArrayDefaultValuesRef.current = {};
        watchFieldsRef.current = new Set();
        isWatchAllRef.current = false;
        updateFormState({
            submitCount: submitCount ? formStateRef.current.submitCount : 0,
            isDirty: isDirty ? formStateRef.current.isDirty : false,
            isSubmitted: isSubmitted ? formStateRef.current.isSubmitted : false,
            isValid: isValid ? formStateRef.current.isValid : false,
            dirtyFields: dirtyFields ? formStateRef.current.dirtyFields : {},
            touched: touched ? formStateRef.current.touched : {},
            errors: errors ? formStateRef.current.errors : {},
            isSubmitting: false,
            isSubmitSuccessful: false,
        });
    };
    const reset = (values, omitResetState = {}) => {
        if (isWeb) {
            for (const field of Object.values(fieldsRef.current)) {
                if (field) {
                    const { ref, options } = field;
                    const inputRef = isRadioOrCheckboxFunction(ref) && Array.isArray(options)
                        ? options[0].ref
                        : ref;
                    if (isHTMLElement(inputRef)) {
                        try {
                            inputRef.closest('form').reset();
                            break;
                        }
                        catch (_a) { }
                    }
                }
            }
        }
        fieldsRef.current = {};
        defaultValuesRef.current = cloneObject(values || defaultValuesRef.current, isWeb);
        values && renderWatchedInputs('');
        Object.values(resetFieldArrayFunctionRef.current).forEach((resetFieldArray) => isFunction(resetFieldArray) && resetFieldArray());
        shallowFieldsStateRef.current = shouldUnregister
            ? {}
            : cloneObject(values, isWeb) || {};
        resetRefs(omitResetState);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        isUnMount.current = false;
        resolver && readFormStateRef.current.isValid && validateResolver();
        observerRef.current =
            observerRef.current || !isWeb
                ? observerRef.current
                : onDomRemove(fieldsRef, removeFieldEventListenerAndRef);
        return () => {
            isUnMount.current = true;
            observerRef.current && observerRef.current.disconnect();
            shallowFieldsStateRef.current = {};
            if (true) {
                return;
            }
            Object.values(fieldsRef.current).forEach((field) => removeFieldEventListenerAndRef(field, true));
        };
    }, [removeFieldEventListenerAndRef]);
    if (!resolver && readFormStateRef.current.isValid) {
        formState.isValid =
            deepEqual(validFieldsRef.current, fieldsWithValidationRef.current) &&
                isEmptyObject(formStateRef.current.errors);
    }
    const commonProps = {
        trigger,
        setValue: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(setValue, [setInternalValue, trigger]),
        getValues: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(getValues, []),
        register: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(register, [defaultValuesRef.current]),
        unregister: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(unregister, []),
    };
    const control = Object.assign({ updateWatchedValue,
        shouldUnregister,
        removeFieldEventListener,
        watchInternal, mode: modeRef.current, reValidateMode: {
            isReValidateOnBlur,
            isReValidateOnChange,
        }, fieldsRef,
        resetFieldArrayFunctionRef,
        useWatchFieldsRef,
        useWatchRenderFunctionsRef,
        fieldArrayDefaultValuesRef,
        validFieldsRef,
        fieldsWithValidationRef,
        fieldArrayNamesRef,
        readFormStateRef,
        formStateRef,
        defaultValuesRef,
        shallowFieldsStateRef,
        updateFormState, validateResolver: resolver ? validateResolver : undefined }, commonProps);
    return Object.assign({ watch,
        control, formState: isProxyEnabled
            ? new Proxy(formState, {
                get: (obj, prop) => {
                    if (true) {
                        if (prop === 'isValid' && isOnSubmit) {
                            console.warn('📋 `formState.isValid` is applicable with `onTouched`, `onChange` or `onBlur` mode. https://react-hook-form.com/api#formState');
                        }
                    }
                    if (prop in obj) {
                        readFormStateRef.current[prop] = true;
                        return obj[prop];
                    }
                    return undefined;
                },
            })
            : formState, handleSubmit, reset: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(reset, []), clearErrors: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(clearErrors, []), setError: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(setError, []), errors: formState.errors }, commonProps);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const FormContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
FormContext.displayName = 'RHFContext';
const useFormContext = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(FormContext);
const FormProvider = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormContext.Provider, { value: Object.assign({}, props) }, children));
};

var generateId = () => {
    const d = typeof performance === UNDEFINED ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

const removeAt = (data, index) => [
    ...data.slice(0, index),
    ...data.slice(index + 1),
];
function removeAtIndexes(data, index) {
    let k = -1;
    while (++k < data.length) {
        if (index.indexOf(k) >= 0) {
            delete data[k];
        }
    }
    return compact(data);
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : Array.isArray(index)
        ? removeAtIndexes(data, index)
        : removeAt(data, index);

var moveArrayAt = (data, from, to) => {
    if (Array.isArray(data)) {
        if (isUndefined(data[to])) {
            data[to] = undefined;
        }
        data.splice(to, 0, data.splice(from, 1)[0]);
        return data;
    }
    return [];
};

var swapArrayAt = (data, indexA, indexB) => {
    const temp = [data[indexB], data[indexA]];
    data[indexA] = temp[0];
    data[indexB] = temp[1];
};

function prepend(data, value) {
    return [...(Array.isArray(value) ? value : [value || undefined]), ...data];
}

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...(Array.isArray(value) ? value : [value || undefined]),
        ...data.slice(index),
    ];
}

var fillEmptyArray = (value) => Array.isArray(value) ? Array(value.length).fill(undefined) : undefined;

function mapValueToBoolean(value) {
    if (isObject(value)) {
        const object = {};
        for (const key in value) {
            object[key] = true;
        }
        return [object];
    }
    return [true];
}
var fillBooleanArray = (value) => (Array.isArray(value) ? value : [value])
    .map(mapValueToBoolean)
    .flat();

const mapIds = (values = [], keyName) => {
    if (true) {
        for (const value of values) {
            if (keyName in value) {
                console.warn(`📋 useFieldArray fieldValues contain the keyName \`${keyName}\` which is reserved for use by useFieldArray. https://react-hook-form.com/api#useFieldArray`);
                break;
            }
        }
    }
    return values.map((value) => (Object.assign({ [keyName]: generateId() }, value)));
};
const useFieldArray = ({ control, name, keyName = 'id', }) => {
    const methods = useFormContext();
    if (true) {
        if (!control && !methods) {
            throw new Error('📋 useFieldArray is missing `control` prop. https://react-hook-form.com/api#useFieldArray');
        }
    }
    const focusIndexRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(-1);
    const { updateWatchedValue, resetFieldArrayFunctionRef, fieldArrayNamesRef, fieldsRef, defaultValuesRef, removeFieldEventListener, formStateRef, shallowFieldsStateRef, updateFormState, readFormStateRef, validFieldsRef, fieldsWithValidationRef, fieldArrayDefaultValuesRef, validateResolver, getValues, shouldUnregister, } = control || methods.control;
    const fieldArrayParentName = getFieldArrayParentName(name);
    const memoizedDefaultValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([
        ...(get(fieldArrayDefaultValuesRef.current, fieldArrayParentName)
            ? get(fieldArrayDefaultValuesRef.current, name, [])
            : get(shouldUnregister
                ? defaultValuesRef.current
                : shallowFieldsStateRef.current, name, [])),
    ]);
    const [fields, setFields] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(mapIds(memoizedDefaultValues.current, keyName));
    const allFields = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(fields);
    const getCurrentFieldsValues = () => get(getValues(), name, allFields.current).map((item, index) => (Object.assign(Object.assign({}, allFields.current[index]), item)));
    allFields.current = fields;
    fieldArrayNamesRef.current.add(name);
    if (!get(fieldArrayDefaultValuesRef.current, fieldArrayParentName)) {
        set(fieldArrayDefaultValuesRef.current, fieldArrayParentName, get(defaultValuesRef.current, fieldArrayParentName));
    }
    const setFieldAndValidState = (fieldsValues) => {
        setFields(fieldsValues);
        if (readFormStateRef.current.isValid && validateResolver) {
            const values = getValues();
            set(values, name, fieldsValues);
            validateResolver(values);
        }
    };
    const getIsDirtyState = (flagOrFields) => (readFormStateRef.current.isDirty ||
        readFormStateRef.current.dirtyFields) &&
        (isUndefined(flagOrFields) ||
            !deepEqual(flagOrFields.map((_a = {}) => {
                var _b = keyName, omitted = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                return rest;
            }), get(defaultValuesRef.current, name, [])));
    const resetFields = () => {
        for (const key in fieldsRef.current) {
            isMatchFieldArrayName(key, name) &&
                removeFieldEventListener(fieldsRef.current[key], true);
        }
    };
    const cleanup = (ref) => !compact(get(ref, name, [])).length && unset(ref, name);
    const updateDirtyFieldsWithDefaultValues = (updatedFieldArrayValues) => {
        const defaultFieldArrayValues = get(defaultValuesRef.current, name, []);
        const updateDirtyFieldsBaseOnDefaultValues = (base, target) => {
            for (const key in base) {
                for (const innerKey in base[key]) {
                    if (innerKey !== keyName &&
                        (!target[key] ||
                            !base[key] ||
                            base[key][innerKey] !== target[key][innerKey])) {
                        set(formStateRef.current.dirtyFields, `${name}[${key}]`, Object.assign(Object.assign({}, get(formStateRef.current.dirtyFields, `${name}[${key}]`, {})), { [innerKey]: true }));
                    }
                }
            }
        };
        if (updatedFieldArrayValues) {
            updateDirtyFieldsBaseOnDefaultValues(defaultFieldArrayValues, updatedFieldArrayValues);
            updateDirtyFieldsBaseOnDefaultValues(updatedFieldArrayValues, defaultFieldArrayValues);
        }
    };
    const batchStateUpdate = (method, args, updatedFieldValues, isDirty = true, shouldSet = true, shouldUpdateValid = false) => {
        if (get(shallowFieldsStateRef.current, name)) {
            const output = method(get(shallowFieldsStateRef.current, name), args.argA, args.argB);
            shouldSet && set(shallowFieldsStateRef.current, name, output);
        }
        if (get(fieldArrayDefaultValuesRef.current, name)) {
            const output = method(get(fieldArrayDefaultValuesRef.current, name), args.argA, args.argB);
            shouldSet && set(fieldArrayDefaultValuesRef.current, name, output);
            cleanup(fieldArrayDefaultValuesRef.current);
        }
        if (Array.isArray(get(formStateRef.current.errors, name))) {
            const output = method(get(formStateRef.current.errors, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.errors, name, output);
            cleanup(formStateRef.current.errors);
        }
        if (readFormStateRef.current.touched &&
            get(formStateRef.current.touched, name)) {
            const output = method(get(formStateRef.current.touched, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.touched, name, output);
            cleanup(formStateRef.current.touched);
        }
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            const output = method(get(formStateRef.current.dirtyFields, name, []), args.argC, args.argD);
            shouldSet && set(formStateRef.current.dirtyFields, name, output);
            updateDirtyFieldsWithDefaultValues(updatedFieldValues);
            cleanup(formStateRef.current.dirtyFields);
        }
        if (shouldUpdateValid &&
            readFormStateRef.current.isValid &&
            !validateResolver) {
            set(validFieldsRef.current, name, method(get(validFieldsRef.current, name, []), args.argA));
            cleanup(validFieldsRef.current);
            set(fieldsWithValidationRef.current, name, method(get(fieldsWithValidationRef.current, name, []), args.argA));
            cleanup(fieldsWithValidationRef.current);
        }
        updateFormState({
            errors: formStateRef.current.errors,
            dirtyFields: formStateRef.current.dirtyFields,
            isDirty,
            touched: formStateRef.current.touched,
        });
    };
    const append = (value, shouldFocus = true) => {
        const updateFormValues = [
            ...allFields.current,
            ...mapIds(Array.isArray(value) ? value : [value], keyName),
        ];
        setFieldAndValidState(updateFormValues);
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            updateDirtyFieldsWithDefaultValues(updateFormValues);
            updateFormState({
                isDirty: true,
                dirtyFields: formStateRef.current.dirtyFields,
            });
        }
        !shouldUnregister &&
            set(shallowFieldsStateRef.current, name, [
                ...(shallowFieldsStateRef.current[name] || []),
                value,
            ]);
        focusIndexRef.current = shouldFocus ? allFields.current.length : -1;
    };
    const prepend$1 = (value, shouldFocus = true) => {
        const emptyArray = fillEmptyArray(value);
        const updatedFieldArrayValues = prepend(getCurrentFieldsValues(), mapIds(Array.isArray(value) ? value : [value], keyName));
        setFieldAndValidState(updatedFieldArrayValues);
        resetFields();
        batchStateUpdate(prepend, {
            argA: emptyArray,
            argC: fillBooleanArray(value),
        }, updatedFieldArrayValues);
        focusIndexRef.current = shouldFocus ? 0 : -1;
    };
    const remove = (index) => {
        const fieldValues = getCurrentFieldsValues();
        const updatedFieldValues = removeArrayAt(fieldValues, index);
        setFieldAndValidState(updatedFieldValues);
        resetFields();
        batchStateUpdate(removeArrayAt, {
            argA: index,
            argC: index,
        }, updatedFieldValues, getIsDirtyState(removeArrayAt(fieldValues, index)), true, true);
    };
    const insert$1 = (index, value, shouldFocus = true) => {
        const emptyArray = fillEmptyArray(value);
        const fieldValues = getCurrentFieldsValues();
        const updatedFieldArrayValues = insert(fieldValues, index, mapIds(Array.isArray(value) ? value : [value], keyName));
        setFieldAndValidState(updatedFieldArrayValues);
        resetFields();
        batchStateUpdate(insert, {
            argA: index,
            argB: emptyArray,
            argC: index,
            argD: fillBooleanArray(value),
        }, updatedFieldArrayValues, getIsDirtyState(insert(fieldValues, index)));
        focusIndexRef.current = shouldFocus ? index : -1;
    };
    const swap = (indexA, indexB) => {
        const fieldValues = getCurrentFieldsValues();
        swapArrayAt(fieldValues, indexA, indexB);
        resetFields();
        setFieldAndValidState([...fieldValues]);
        batchStateUpdate(swapArrayAt, {
            argA: indexA,
            argB: indexB,
            argC: indexA,
            argD: indexB,
        }, undefined, getIsDirtyState(fieldValues), false);
    };
    const move = (from, to) => {
        const fieldValues = getCurrentFieldsValues();
        moveArrayAt(fieldValues, from, to);
        resetFields();
        setFieldAndValidState([...fieldValues]);
        batchStateUpdate(moveArrayAt, {
            argA: from,
            argB: to,
            argC: from,
            argD: to,
        }, undefined, getIsDirtyState(fieldValues), false);
    };
    const reset = (data) => {
        resetFields();
        !data && unset(fieldArrayDefaultValuesRef.current, name);
        unset(shallowFieldsStateRef.current, name);
        memoizedDefaultValues.current = get(data || defaultValuesRef.current, name);
        setFields(mapIds(memoizedDefaultValues.current, keyName));
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (true) {
            if (!name) {
                console.warn('📋 useFieldArray is missing `name` attribute. https://react-hook-form.com/api#useFieldArray');
            }
        }
        const defaultValues = get(fieldArrayDefaultValuesRef.current, name);
        if (defaultValues && fields.length < defaultValues.length) {
            defaultValues.pop();
            set(fieldArrayDefaultValuesRef.current, name, defaultValues);
        }
        updateWatchedValue(name);
        if (focusIndexRef.current > -1) {
            for (const key in fieldsRef.current) {
                const field = fieldsRef.current[key];
                if (key.startsWith(`${name}[${focusIndexRef.current}]`) &&
                    field.ref.focus) {
                    field.ref.focus();
                    break;
                }
            }
        }
        focusIndexRef.current = -1;
    }, [fields, name]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        const resetFunctions = resetFieldArrayFunctionRef.current;
        const fieldArrayNames = fieldArrayNamesRef.current;
        if (!getFieldArrayParentName(name)) {
            resetFunctions[name] = reset;
        }
        return () => {
            resetFields();
            delete resetFunctions[name];
            fieldArrayNames.delete(name);
        };
    }, []);
    return {
        swap: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(swap, [name]),
        move: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(move, [name]),
        prepend: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(prepend$1, [name]),
        append: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(append, [name]),
        remove: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(remove, [name]),
        insert: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(insert$1, [name]),
        fields,
    };
};

function useWatch({ control, name, defaultValue, }) {
    const methods = useFormContext();
    if (true) {
        if (!control && !methods) {
            throw new Error('📋 useWatch is missing `control` prop. https://react-hook-form.com/api#useWatch');
        }
    }
    const { useWatchFieldsRef, useWatchRenderFunctionsRef, watchInternal, defaultValuesRef, } = control || methods.control;
    const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isUndefined(defaultValue)
        ? isString(name)
            ? get(defaultValuesRef.current, name)
            : Array.isArray(name)
                ? name.reduce((previous, inputName) => (Object.assign(Object.assign({}, previous), { [inputName]: get(defaultValuesRef.current, inputName) })), {})
                : defaultValuesRef.current
        : defaultValue);
    const idRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const defaultValueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(defaultValue);
    const updateWatchValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        const value = watchInternal(name, defaultValueRef.current, idRef.current);
        setValue(isObject(value)
            ? Object.assign({}, value) : Array.isArray(value)
            ? [...value]
            : value);
    }, [setValue, watchInternal, defaultValueRef, name, idRef]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (true) {
            if (name === '') {
                console.warn('📋 useWatch is missing `name` attribute. https://react-hook-form.com/api#useWatch');
            }
        }
        const id = (idRef.current = generateId());
        const watchFieldsHookRender = useWatchRenderFunctionsRef.current;
        const watchFieldsHook = useWatchFieldsRef.current;
        watchFieldsHook[id] = new Set();
        watchFieldsHookRender[id] = updateWatchValue;
        watchInternal(name, defaultValueRef.current, id);
        return () => {
            delete watchFieldsHook[id];
            delete watchFieldsHookRender[id];
        };
    }, [
        name,
        updateWatchValue,
        useWatchRenderFunctionsRef,
        useWatchFieldsRef,
        watchInternal,
        defaultValueRef,
    ]);
    return (isUndefined(value) ? defaultValue : value);
}

var getInputValue = (event) => isPrimitive(event) ||
    !isObject(event.target) ||
    (isObject(event.target) && !event.type)
    ? event
    : isUndefined(event.target.value)
        ? event.target.checked
        : event.target.value;

const Controller = (_a) => {
    var { name, rules, as, render, defaultValue, control, onFocus } = _a, rest = __rest(_a, ["name", "rules", "as", "render", "defaultValue", "control", "onFocus"]);
    const methods = useFormContext();
    if (true) {
        if (!control && !methods) {
            throw new Error('📋 Controller is missing `control` prop. https://react-hook-form.com/api#Controller');
        }
    }
    const { defaultValuesRef, setValue, register, unregister, trigger, mode, reValidateMode: { isReValidateOnBlur, isReValidateOnChange }, formStateRef: { current: { isSubmitted, touched }, }, updateFormState, readFormStateRef, fieldsRef, fieldArrayNamesRef, shallowFieldsStateRef, } = control || methods.control;
    const isNotFieldArray = !isNameInFieldArray(fieldArrayNamesRef.current, name);
    const getInitialValue = () => !isUndefined(get(shallowFieldsStateRef.current, name)) && isNotFieldArray
        ? get(shallowFieldsStateRef.current, name)
        : isUndefined(defaultValue)
            ? get(defaultValuesRef.current, name)
            : defaultValue;
    const [value, setInputStateValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getInitialValue());
    const valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        focus: () => null,
    });
    const onFocusRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(onFocus || (() => ref.current.focus()));
    const shouldValidate = (isBlurEvent) => !skipValidation(Object.assign({ isBlurEvent,
        isReValidateOnBlur,
        isReValidateOnChange,
        isSubmitted, isTouched: !!get(touched, name) }, mode));
    const commonTask = ([event]) => {
        const data = getInputValue(event);
        setInputStateValue(data);
        valueRef.current = data;
        return data;
    };
    const registerField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        if ( true && !name) {
            return console.warn('📋 Field is missing `name` prop. https://react-hook-form.com/api#Controller');
        }
        if (fieldsRef.current[name]) {
            fieldsRef.current[name] = Object.assign({ ref: fieldsRef.current[name].ref }, rules);
        }
        else {
            register(Object.defineProperty({
                name,
                focus: onFocusRef.current,
            }, VALUE, {
                set(data) {
                    setInputStateValue(data);
                    valueRef.current = data;
                },
                get() {
                    return valueRef.current;
                },
            }), rules);
            if (isNotFieldArray && !get(defaultValuesRef.current, name)) {
                setInputStateValue(getInitialValue());
            }
        }
    }, [rules, name, register]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => unregister(name), [unregister, name]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (true) {
            if (isUndefined(value)) {
                console.warn(`📋 ${name} is missing in the 'defaultValue' prop of either its Controller (https://react-hook-form.com/api#Controller) or useForm (https://react-hook-form.com/api#useForm)`);
            }
            if ((!as && !render) || (as && render)) {
                console.warn(`📋 ${name} Controller should use either the 'as' or 'render' prop, not both. https://react-hook-form.com/api#Controller`);
            }
            if (!isNotFieldArray && isUndefined(defaultValue)) {
                console.warn('📋 Controller is missing `defaultValue` prop when using `useFieldArray`. https://react-hook-form.com/api#Controller');
            }
        }
        registerField();
    }, [registerField]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (!fieldsRef.current[name]) {
            registerField();
            if (isNotFieldArray) {
                setInputStateValue(getInitialValue());
            }
        }
    });
    const onBlur = () => {
        if (readFormStateRef.current.touched && !get(touched, name)) {
            set(touched, name, true);
            updateFormState({
                touched,
            });
        }
        if (shouldValidate(true)) {
            trigger(name);
        }
    };
    const onChange = (...event) => setValue(name, commonTask(event), {
        shouldValidate: shouldValidate(),
        shouldDirty: true,
    });
    const commonProps = {
        onChange,
        onBlur,
        name,
        value,
        ref,
    };
    const props = Object.assign(Object.assign({}, rest), commonProps);
    return as
        ? Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(as)
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(as, props)
            : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(as, props)
        : render
            ? render(commonProps)
            : null;
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navigation_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigation/index.js */ "./components/Navigation/index.js");
/* harmony import */ var _components_Hero_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero/index.js */ "./components/Hero/index.js");
/* harmony import */ var _components_GameTypes_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GameTypes/index.js */ "./components/GameTypes/index.js");
/* harmony import */ var _components_Devices_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Devices/index.js */ "./components/Devices/index.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_OurTeam_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/OurTeam/index.js */ "./components/OurTeam/index.js");
/* harmony import */ var _components_Footer_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer/index.js */ "./components/Footer/index.js");
/* harmony import */ var _components_ContactForm_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ContactForm/index.js */ "./components/ContactForm/index.js");


var _jsxFileName = "D:\\projekty\\ecommerce\\front\\pages\\index.js";









function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("body", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navigation_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Hero_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_GameTypes_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Devices_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_OurTeam_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContactForm_index_js__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWhvb2stZm9ybS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZvcm0iLCJmb3JtIiwiSW5wdXQiLCJpbnB1dCIsIkNvbnRhY3RGb3JtIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJlcnJvcnMiLCJoYW5kbGVTZW5kRW1haWwiLCJkYXRhIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtEQUFiO0tBQU1GLE87QUFNTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7QUFBQTtBQUFBO0FBQUEsb0VBQVY7TUFBTUQsSTtBQU1OLElBQU1FLEtBQUssR0FBR0oseURBQU0sQ0FBQ0ssS0FBVjtBQUFBO0FBQUE7QUFBQSxrUkFBWDtNQUFNRCxLOztBQXdCTixJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsaUJBQzBCQywrREFBTyxFQURqQztBQUFBLE1BQ2hCQyxRQURnQixZQUNoQkEsUUFEZ0I7QUFBQSxNQUNOQyxZQURNLFlBQ05BLFlBRE07QUFBQSxNQUNRQyxLQURSLFlBQ1FBLEtBRFI7QUFBQSxNQUNlQyxNQURmLFlBQ2VBLE1BRGY7O0FBR3hCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3ZDQSxTQUFLLENBQUNDLGNBQU47QUFDRCxHQUZEOztBQUlBLHNCQUNFLHFFQUFDLE9BQUQ7QUFBQSwyQkFDRSxxRUFBQyxJQUFEO0FBQU0sY0FBUSxFQUFFSCxlQUFoQjtBQUFBLDhCQUNFLHFFQUFDLEtBQUQ7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFJLEVBQUMsTUFBeEI7QUFBK0IsbUJBQVcsRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyxLQUFEO0FBQU8sWUFBSSxFQUFDLE9BQVo7QUFBb0IsWUFBSSxFQUFDLE9BQXpCO0FBQWlDLG1CQUFXLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBZkQ7O0dBQU1OLFc7VUFDOENDLHVEOzs7TUFEOUNELFc7QUFpQlNBLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5STs7QUFFekk7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLFdBQVc7QUFDekIsV0FBVyxRQUFROztBQUVuQjs7QUFFQTs7QUFFQTs7QUFFQSx3REFBd0QsT0FBTzs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPLFFBQVEsRUFBRTtBQUN4QyxvQkFBb0I7QUFDcEI7QUFDQSxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTyxrQkFBa0IsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvQ0FBb0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFlBQVksYUFBYSxHQUFHO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0I7QUFDQTtBQUNBLHVDQUF1QyxNQUFNO0FBQzdDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQSwyRkFBMkY7QUFDM0Y7QUFDQTtBQUNBLDhDQUE4QztBQUM5QyxrREFBa0Q7QUFDbEQsMEVBQTBFLHdCQUF3QixjQUFjO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsK0JBQStCLGVBQWU7QUFDekc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsMERBQTBEO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrRUFBa0UsNERBQWM7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsV0FBVyxzQ0FBc0MsMENBQTBDLEtBQUssMEJBQTBCLEdBQUc7QUFDMUs7QUFDQTtBQUNBOztBQUVBLGlFQUFpRSxZQUFZLGNBQWMseUVBQXlFO0FBQ3BLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBaUQ7QUFDaEUsZUFBZTtBQUNmO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMsNERBQTREO0FBQzVELDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1Q0FBdUM7QUFDdEQsZUFBZSx1Q0FBdUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0RBQW9EO0FBQ25FLGVBQWUsb0RBQW9EO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtDQUErQztBQUM5RDtBQUNBLHlDQUF5QyxxRUFBcUU7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLG1CQUFtQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMsS0FBSyxHQUFHLElBQUksT0FBTyxLQUFLLEdBQUcsSUFBSTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QiwySEFBMkg7QUFDbEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrREFBK0QsV0FBVztBQUMxRTs7QUFFQSxxREFBcUQsT0FBTzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrSEFBa0gsbUVBQW1FLEtBQUs7QUFDNU0sc0JBQXNCLG9EQUFNLEdBQUc7QUFDL0IsdUNBQXVDLG9EQUFNLEdBQUc7QUFDaEQsMkJBQTJCLG9EQUFNO0FBQ2pDLDhCQUE4QixvREFBTSxHQUFHO0FBQ3ZDLHVDQUF1QyxvREFBTSxHQUFHO0FBQ2hELG9DQUFvQyxvREFBTSxHQUFHO0FBQzdDLDJCQUEyQixvREFBTSxHQUFHO0FBQ3BDLDZCQUE2QixvREFBTTtBQUNuQyxxQ0FBcUMsb0RBQU0sR0FBRztBQUM5QyxzQkFBc0Isb0RBQU07QUFDNUIsMEJBQTBCLG9EQUFNO0FBQ2hDLDRCQUE0QixvREFBTTtBQUNsQyxrQ0FBa0Msb0RBQU0sc0JBQXNCO0FBQzlELHVDQUF1QyxvREFBTSxHQUFHO0FBQ2hELHVCQUF1QixvREFBTTtBQUM3Qix3QkFBd0Isb0RBQU07QUFDOUIsK0JBQStCLG9EQUFNO0FBQ3JDLG9CQUFvQixvREFBTTtBQUMxQixXQUFXLHdCQUF3QjtBQUNuQztBQUNBLHNDQUFzQyxzREFBUTtBQUM5QztBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixLQUFLO0FBQ0wsNkJBQTZCLG9EQUFNO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wseUJBQXlCLG9EQUFNO0FBQy9CLHdCQUF3QixvREFBTTtBQUM5QixXQUFXLGtFQUFrRSxHQUFHLG9EQUFNO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5REFBVyxZQUFZO0FBQ25ELG1EQUFtRDtBQUNuRCxvQ0FBb0MseURBQVcsK0NBQStDO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSxXQUFXLHNDQUFzQywyQkFBMkIscUJBQXFCLEtBQUs7QUFDOUs7QUFDQSxLQUFLO0FBQ0wsMEJBQTBCLHlEQUFXO0FBQ3JDLGVBQWUsZUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnQkFBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFtQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMseURBQVc7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsOEJBQThCLHlEQUFXO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw4Q0FBOEMseURBQVc7QUFDekQsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRztBQUNuRztBQUNBO0FBQ0EsS0FBSztBQUNMLG9CQUFvQix5REFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsOEJBQThCLHlEQUFXLGdCQUFnQiw4QkFBOEI7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDZCQUE2Qix5REFBVywwQkFBMEI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxpQkFBaUIsZ0JBQWdCO0FBQzNHO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZUFBZTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSw2SUFBNkk7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELFdBQVcsd0NBQXdDO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxVQUFVLGNBQWM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIseURBQVcsbUJBQW1CO0FBQzNELGVBQWUsU0FBUyx5RUFBeUU7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsS0FBSztBQUNMLHFDQUFxQyx5REFBVztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx5REFBVztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0QsU0FBUztBQUNUO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQsNkVBQTZFLFdBQVcsTUFBTTtBQUM5RjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDBCQUEwQix5REFBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdGQUF3RixjQUFjLG1GQUFtRixNQUFNO0FBQy9MO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQsWUFBWSxJQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw4QkFBOEI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0JBQW9CO0FBQ25DLDREQUE0RCxNQUFNO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsNkJBQTZCLGFBQWEsRUFBRSxxQ0FBcUM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsK0JBQStCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlEQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTyxPQUFPLEdBQUc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0wsd0JBQXdCLDRFQUE0RTtBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RSxnRUFBZ0U7QUFDaEUsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFxQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5REFBVztBQUM3QixtQkFBbUIseURBQVc7QUFDOUIsa0JBQWtCLHlEQUFXO0FBQzdCLG9CQUFvQix5REFBVztBQUMvQjtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0Y7QUFDcEYsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixJQUFxQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLDhDQUE4Qyx5REFBVywwQkFBMEIseURBQVcsNkJBQTZCLHlEQUFXLDBDQUEwQztBQUNoTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGNBQWM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsMkRBQWE7QUFDakM7QUFDQSw2QkFBNkIsd0RBQVU7QUFDdkM7QUFDQSxTQUFTLFdBQVc7QUFDcEIsWUFBWSwyREFBYSx3QkFBd0Isd0JBQXdCLFVBQVU7QUFDbkY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQSxtRkFBbUYsUUFBUTtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwwQkFBMEI7QUFDM0U7QUFDQSx3QkFBd0IsaUNBQWlDO0FBQ3pEO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvREFBTTtBQUNoQyxXQUFXLHlUQUF5VDtBQUNwVTtBQUNBLGtDQUFrQyxvREFBTTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0RBQVE7QUFDeEMsc0JBQXNCLG9EQUFNO0FBQzVCLHVJQUF1STtBQUN2STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLEtBQUssR0FBRyxJQUFJLGtDQUFrQywyQ0FBMkMsS0FBSyxHQUFHLElBQUksTUFBTSxLQUFLLG1CQUFtQjtBQUNwTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBUztBQUNiLFlBQVksSUFBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsS0FBSyxHQUFHLHNCQUFzQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxjQUFjLHlEQUFXO0FBQ3pCLGNBQWMseURBQVc7QUFDekIsaUJBQWlCLHlEQUFXO0FBQzVCLGdCQUFnQix5REFBVztBQUMzQixnQkFBZ0IseURBQVc7QUFDM0IsZ0JBQWdCLHlEQUFXO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsK0JBQStCO0FBQ2xEO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0ZBQWtGO0FBQzdGLDhCQUE4QixzREFBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsY0FBYyx3REFBd0QsTUFBTTtBQUNsSztBQUNBO0FBQ0Esa0JBQWtCLG9EQUFNO0FBQ3hCLDRCQUE0QixvREFBTTtBQUNsQyw2QkFBNkIseURBQVc7QUFDeEM7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksdURBQVM7QUFDYixZQUFZLElBQXFDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUywwREFBMEQ7QUFDbkU7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtRkFBbUYsMkNBQTJDLGlCQUFpQixXQUFXLHVCQUF1QixHQUFHLDRGQUE0RjtBQUMzUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msc0RBQVE7QUFDaEQscUJBQXFCLG9EQUFNO0FBQzNCLGdCQUFnQixvREFBTTtBQUN0QjtBQUNBLEtBQUs7QUFDTCx1QkFBdUIsb0RBQU07QUFDN0IsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlEQUFXO0FBQ3JDLFlBQVksS0FBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0EscURBQXFELG1DQUFtQztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLHVEQUFTO0FBQ2IsSUFBSSx1REFBUztBQUNiLFlBQVksSUFBcUM7QUFDakQ7QUFDQSxtQ0FBbUMsS0FBSztBQUN4QztBQUNBO0FBQ0EsbUNBQW1DLEtBQUs7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0EsVUFBVSw0REFBYztBQUN4QixjQUFjLDBEQUFZO0FBQzFCLGNBQWMsMkRBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRWdJO0FBQ2hJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOTBEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTVSxJQUFULEdBQWdCO0FBQzdCLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFDRSxZQUFJLEVBQUMscUVBRFA7QUFFRSxXQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFTRTtBQUFBLDhCQUNFLHFFQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLHFFQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FLHFFQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBLGtCQURGO0FBcUJEO0tBdEJ1QkEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMTA4ZTRhMGUxNzQ5OWI4ZWY1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNzJlO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHdhdGNoLCBlcnJvcnMgfSA9IHVzZUZvcm0oKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VuZEVtYWlsID0gKGRhdGEsIGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVNlbmRFbWFpbH0+XHJcbiAgICAgICAgPElucHV0IHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIHBsYWNlaG9sZGVyPSdZb3VyIG5hbWUnIC8+XHJcbiAgICAgICAgPElucHV0IHR5cGU9J2VtYWlsJyBuYW1lPSdlbWFpbCcgcGxhY2Vob2xkZXI9J1lvdXIgZS1tYWlsJyAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtO1xyXG4iLCJpbXBvcnQgeyBpc1ZhbGlkRWxlbWVudCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgY3JlYXRlRWxlbWVudCwgY2xvbmVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG52YXIgaXNIVE1MRWxlbWVudCA9ICh2YWx1ZSkgPT4gdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcblxuY29uc3QgRVZFTlRTID0ge1xyXG4gICAgQkxVUjogJ2JsdXInLFxyXG4gICAgQ0hBTkdFOiAnY2hhbmdlJyxcclxuICAgIElOUFVUOiAnaW5wdXQnLFxyXG59O1xyXG5jb25zdCBWQUxJREFUSU9OX01PREUgPSB7XHJcbiAgICBvbkJsdXI6ICdvbkJsdXInLFxyXG4gICAgb25DaGFuZ2U6ICdvbkNoYW5nZScsXHJcbiAgICBvblN1Ym1pdDogJ29uU3VibWl0JyxcclxuICAgIG9uVG91Y2hlZDogJ29uVG91Y2hlZCcsXHJcbiAgICBhbGw6ICdhbGwnLFxyXG59O1xyXG5jb25zdCBWQUxVRSA9ICd2YWx1ZSc7XHJcbmNvbnN0IFNFTEVDVCA9ICdzZWxlY3QnO1xyXG5jb25zdCBVTkRFRklORUQgPSAndW5kZWZpbmVkJztcclxuY29uc3QgSU5QVVRfVkFMSURBVElPTl9SVUxFUyA9IHtcclxuICAgIG1heDogJ21heCcsXHJcbiAgICBtaW46ICdtaW4nLFxyXG4gICAgbWF4TGVuZ3RoOiAnbWF4TGVuZ3RoJyxcclxuICAgIG1pbkxlbmd0aDogJ21pbkxlbmd0aCcsXHJcbiAgICBwYXR0ZXJuOiAncGF0dGVybicsXHJcbiAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcclxuICAgIHZhbGlkYXRlOiAndmFsaWRhdGUnLFxyXG59O1xuXG5mdW5jdGlvbiBhdHRhY2hFdmVudExpc3RlbmVycyh7IHJlZiB9LCBzaG91bGRBdHRhY2hDaGFuZ2VFdmVudCwgaGFuZGxlQ2hhbmdlKSB7XHJcbiAgICBpZiAoaXNIVE1MRWxlbWVudChyZWYpICYmIGhhbmRsZUNoYW5nZSkge1xyXG4gICAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKHNob3VsZEF0dGFjaENoYW5nZUV2ZW50ID8gRVZFTlRTLkNIQU5HRSA6IEVWRU5UUy5JTlBVVCwgaGFuZGxlQ2hhbmdlKTtcclxuICAgICAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVFMuQkxVUiwgaGFuZGxlQ2hhbmdlKTtcclxuICAgIH1cclxufVxuXG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSAodmFsdWUpID0+IHZhbHVlID09IG51bGw7XG5cbmNvbnN0IGlzT2JqZWN0VHlwZSA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JztcclxudmFyIGlzT2JqZWN0ID0gKHZhbHVlKSA9PiAhaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpICYmXHJcbiAgICAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiZcclxuICAgIGlzT2JqZWN0VHlwZSh2YWx1ZSkgJiZcclxuICAgICEodmFsdWUgaW5zdGFuY2VvZiBEYXRlKTtcblxudmFyIGlzS2V5ID0gKHZhbHVlKSA9PiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiZcclxuICAgICgvXlxcdyokLy50ZXN0KHZhbHVlKSB8fFxyXG4gICAgICAgICEvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLnRlc3QodmFsdWUpKTtcblxudmFyIGNvbXBhY3QgPSAodmFsdWUpID0+IHZhbHVlLmZpbHRlcihCb29sZWFuKTtcblxudmFyIHN0cmluZ1RvUGF0aCA9IChpbnB1dCkgPT4gY29tcGFjdChpbnB1dFxyXG4gICAgLnJlcGxhY2UoL1tcInwnXS9nLCAnJylcclxuICAgIC5yZXBsYWNlKC9cXFsvZywgJy4nKVxyXG4gICAgLnJlcGxhY2UoL1xcXS9nLCAnJylcclxuICAgIC5zcGxpdCgnLicpKTtcblxuZnVuY3Rpb24gc2V0KG9iamVjdCwgcGF0aCwgdmFsdWUpIHtcclxuICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgY29uc3QgdGVtcFBhdGggPSBpc0tleShwYXRoKSA/IFtwYXRoXSA6IHN0cmluZ1RvUGF0aChwYXRoKTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRlbXBQYXRoLmxlbmd0aDtcclxuICAgIGNvbnN0IGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XHJcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRlbXBQYXRoW2luZGV4XTtcclxuICAgICAgICBsZXQgbmV3VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IGxhc3RJbmRleCkge1xyXG4gICAgICAgICAgICBjb25zdCBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9XHJcbiAgICAgICAgICAgICAgICBpc09iamVjdChvYmpWYWx1ZSkgfHwgQXJyYXkuaXNBcnJheShvYmpWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA/IG9ialZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiAhaXNOYU4oK3RlbXBQYXRoW2luZGV4ICsgMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqZWN0W2tleV0gPSBuZXdWYWx1ZTtcclxuICAgICAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cblxudmFyIHRyYW5zZm9ybVRvTmVzdE9iamVjdCA9IChkYXRhLCB2YWx1ZSA9IHt9KSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgIWlzS2V5KGtleSkgPyBzZXQodmFsdWUsIGtleSwgZGF0YVtrZXldKSA6ICh2YWx1ZVtrZXldID0gZGF0YVtrZXldKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufTtcblxudmFyIGlzVW5kZWZpbmVkID0gKHZhbCkgPT4gdmFsID09PSB1bmRlZmluZWQ7XG5cbnZhciBnZXQgPSAob2JqLCBwYXRoLCBkZWZhdWx0VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGNvbXBhY3QocGF0aC5zcGxpdCgvWyxbXFxdLl0rPy8pKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiAoaXNOdWxsT3JVbmRlZmluZWQocmVzdWx0KSA/IHJlc3VsdCA6IHJlc3VsdFtrZXldKSwgb2JqKTtcclxuICAgIHJldHVybiBpc1VuZGVmaW5lZChyZXN1bHQpIHx8IHJlc3VsdCA9PT0gb2JqXHJcbiAgICAgICAgPyBpc1VuZGVmaW5lZChvYmpbcGF0aF0pXHJcbiAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgICAgIDogb2JqW3BhdGhdXHJcbiAgICAgICAgOiByZXN1bHQ7XHJcbn07XG5cbnZhciBmb2N1c09uRXJyb3JGaWVsZCA9IChmaWVsZHMsIGZpZWxkRXJyb3JzKSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWVsZHMpIHtcclxuICAgICAgICBpZiAoZ2V0KGZpZWxkRXJyb3JzLCBrZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2tleV07XHJcbiAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnJlZi5mb2N1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1VuZGVmaW5lZChmaWVsZC5yZWYuZm9jdXMoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGQub3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLm9wdGlvbnNbMF0ucmVmLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cbnZhciByZW1vdmVBbGxFdmVudExpc3RlbmVycyA9IChyZWYsIHZhbGlkYXRlV2l0aFN0YXRlVXBkYXRlKSA9PiB7XHJcbiAgICBpZiAoaXNIVE1MRWxlbWVudChyZWYpICYmIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoRVZFTlRTLklOUFVULCB2YWxpZGF0ZVdpdGhTdGF0ZVVwZGF0ZSk7XHJcbiAgICAgICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoRVZFTlRTLkNIQU5HRSwgdmFsaWRhdGVXaXRoU3RhdGVVcGRhdGUpO1xyXG4gICAgICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKEVWRU5UUy5CTFVSLCB2YWxpZGF0ZVdpdGhTdGF0ZVVwZGF0ZSk7XHJcbiAgICB9XHJcbn07XG5cbmNvbnN0IGRlZmF1bHRSZXR1cm4gPSB7XHJcbiAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgIHZhbHVlOiAnJyxcclxufTtcclxudmFyIGdldFJhZGlvVmFsdWUgPSAob3B0aW9ucykgPT4gQXJyYXkuaXNBcnJheShvcHRpb25zKVxyXG4gICAgPyBvcHRpb25zLnJlZHVjZSgocHJldmlvdXMsIG9wdGlvbikgPT4gb3B0aW9uICYmIG9wdGlvbi5yZWYuY2hlY2tlZFxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICBpc1ZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnJlZi52YWx1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgOiBwcmV2aW91cywgZGVmYXVsdFJldHVybilcclxuICAgIDogZGVmYXVsdFJldHVybjtcblxudmFyIGdldE11bHRpcGxlU2VsZWN0VmFsdWUgPSAob3B0aW9ucykgPT4gWy4uLm9wdGlvbnNdXHJcbiAgICAuZmlsdGVyKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKVxyXG4gICAgLm1hcCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7XG5cbnZhciBpc1JhZGlvSW5wdXQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSAncmFkaW8nO1xuXG52YXIgaXNGaWxlSW5wdXQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSAnZmlsZSc7XG5cbnZhciBpc0NoZWNrQm94SW5wdXQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSAnY2hlY2tib3gnO1xuXG52YXIgaXNNdWx0aXBsZVNlbGVjdCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09IGAke1NFTEVDVH0tbXVsdGlwbGVgO1xuXG5jb25zdCBkZWZhdWx0UmVzdWx0ID0ge1xyXG4gICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgaXNWYWxpZDogZmFsc2UsXHJcbn07XHJcbmNvbnN0IHZhbGlkUmVzdWx0ID0geyB2YWx1ZTogdHJ1ZSwgaXNWYWxpZDogdHJ1ZSB9O1xyXG52YXIgZ2V0Q2hlY2tib3hWYWx1ZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xyXG4gICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24gJiYgb3B0aW9uLnJlZi5jaGVja2VkKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoeyByZWY6IHsgdmFsdWUgfSB9KSA9PiB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZXMsIGlzVmFsaWQ6ICEhdmFsdWVzLmxlbmd0aCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IGNoZWNrZWQsIHZhbHVlLCBhdHRyaWJ1dGVzIH0gPSBvcHRpb25zWzBdLnJlZjtcclxuICAgICAgICByZXR1cm4gY2hlY2tlZFxyXG4gICAgICAgICAgICA/IGF0dHJpYnV0ZXMgJiYgIWlzVW5kZWZpbmVkKGF0dHJpYnV0ZXMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICA/IGlzVW5kZWZpbmVkKHZhbHVlKSB8fCB2YWx1ZSA9PT0gJydcclxuICAgICAgICAgICAgICAgICAgICA/IHZhbGlkUmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7IHZhbHVlOiB2YWx1ZSwgaXNWYWxpZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICA6IHZhbGlkUmVzdWx0XHJcbiAgICAgICAgICAgIDogZGVmYXVsdFJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWZhdWx0UmVzdWx0O1xyXG59O1xuXG5mdW5jdGlvbiBnZXRGaWVsZFZhbHVlKGZpZWxkc1JlZiwgbmFtZSwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLCBleGNsdWRlRGlzYWJsZWQpIHtcclxuICAgIGNvbnN0IGZpZWxkID0gZmllbGRzUmVmLmN1cnJlbnRbbmFtZV07XHJcbiAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICBjb25zdCB7IHJlZjogeyB2YWx1ZSwgZGlzYWJsZWQgfSwgcmVmLCB9ID0gZmllbGQ7XHJcbiAgICAgICAgaWYgKGRpc2FibGVkICYmIGV4Y2x1ZGVEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0ZpbGVJbnB1dChyZWYpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWYuZmlsZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1JhZGlvSW5wdXQocmVmKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0UmFkaW9WYWx1ZShmaWVsZC5vcHRpb25zKS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTXVsdGlwbGVTZWxlY3QocmVmKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0TXVsdGlwbGVTZWxlY3RWYWx1ZShyZWYub3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0NoZWNrQm94SW5wdXQocmVmKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0Q2hlY2tib3hWYWx1ZShmaWVsZC5vcHRpb25zKS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNoYWxsb3dGaWVsZHNTdGF0ZVJlZikge1xyXG4gICAgICAgIHJldHVybiBnZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIGlzRGV0YWNoZWQoZWxlbWVudCkge1xyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8XHJcbiAgICAgICAgZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzRGV0YWNoZWQoZWxlbWVudC5wYXJlbnROb2RlKTtcclxufVxuXG52YXIgaXNFbXB0eU9iamVjdCA9ICh2YWx1ZSkgPT4gaXNPYmplY3QodmFsdWUpICYmICFPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoO1xuXG52YXIgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcblxuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHVwZGF0ZVBhdGgpIHtcclxuICAgIGNvbnN0IHBhdGggPSB1cGRhdGVQYXRoLnNsaWNlKDAsIC0xKTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgICAgIG9iamVjdCA9IGlzVW5kZWZpbmVkKG9iamVjdCkgPyBpbmRleCsrIDogb2JqZWN0W3VwZGF0ZVBhdGhbaW5kZXgrK11dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdDtcclxufVxyXG5mdW5jdGlvbiB1bnNldChvYmplY3QsIHBhdGgpIHtcclxuICAgIGNvbnN0IHVwZGF0ZVBhdGggPSBpc0tleShwYXRoKSA/IFtwYXRoXSA6IHN0cmluZ1RvUGF0aChwYXRoKTtcclxuICAgIGNvbnN0IGNoaWxkT2JqZWN0ID0gdXBkYXRlUGF0aC5sZW5ndGggPT0gMSA/IG9iamVjdCA6IGJhc2VHZXQob2JqZWN0LCB1cGRhdGVQYXRoKTtcclxuICAgIGNvbnN0IGtleSA9IHVwZGF0ZVBhdGhbdXBkYXRlUGF0aC5sZW5ndGggLSAxXTtcclxuICAgIGxldCBwcmV2aW91c09ialJlZiA9IHVuZGVmaW5lZDtcclxuICAgIGlmIChjaGlsZE9iamVjdCkge1xyXG4gICAgICAgIGRlbGV0ZSBjaGlsZE9iamVjdFtrZXldO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCB1cGRhdGVQYXRoLnNsaWNlKDAsIC0xKS5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICAgIGxldCBvYmplY3RSZWYgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGhzID0gdXBkYXRlUGF0aC5zbGljZSgwLCAtKGsgKyAxKSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGhzTGVuZ3RoID0gY3VycmVudFBhdGhzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgaWYgKGsgPiAwKSB7XHJcbiAgICAgICAgICAgIHByZXZpb3VzT2JqUmVmID0gb2JqZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoKytpbmRleCA8IGN1cnJlbnRQYXRocy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGN1cnJlbnRQYXRoc1tpbmRleF07XHJcbiAgICAgICAgICAgIG9iamVjdFJlZiA9IG9iamVjdFJlZiA/IG9iamVjdFJlZltpdGVtXSA6IG9iamVjdFtpdGVtXTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYXRoc0xlbmd0aCA9PT0gaW5kZXggJiZcclxuICAgICAgICAgICAgICAgICgoaXNPYmplY3Qob2JqZWN0UmVmKSAmJiBpc0VtcHR5T2JqZWN0KG9iamVjdFJlZikpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkob2JqZWN0UmVmKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhb2JqZWN0UmVmLmZpbHRlcigoZGF0YSkgPT4gKGlzT2JqZWN0KGRhdGEpICYmICFpc0VtcHR5T2JqZWN0KGRhdGEpKSB8fCBpc0Jvb2xlYW4oZGF0YSkpLmxlbmd0aCkpKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c09ialJlZiA/IGRlbGV0ZSBwcmV2aW91c09ialJlZltpdGVtXSA6IGRlbGV0ZSBvYmplY3RbaXRlbV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJldmlvdXNPYmpSZWYgPSBvYmplY3RSZWY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdDtcclxufVxuXG5jb25zdCBpc1NhbWVSZWYgPSAoZmllbGRWYWx1ZSwgcmVmKSA9PiBmaWVsZFZhbHVlICYmIGZpZWxkVmFsdWUucmVmID09PSByZWY7XHJcbmZ1bmN0aW9uIGZpbmRSZW1vdmVkRmllbGRBbmRSZW1vdmVMaXN0ZW5lcihmaWVsZHNSZWYsIGhhbmRsZUNoYW5nZSwgZmllbGQsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZiwgc2hvdWxkVW5yZWdpc3RlciwgZm9yY2VEZWxldGUpIHtcclxuICAgIGNvbnN0IHsgcmVmLCByZWY6IHsgbmFtZSwgdHlwZSB9LCB9ID0gZmllbGQ7XHJcbiAgICBjb25zdCBmaWVsZFJlZiA9IGZpZWxkc1JlZi5jdXJyZW50W25hbWVdO1xyXG4gICAgaWYgKCFzaG91bGRVbnJlZ2lzdGVyKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRGaWVsZFZhbHVlKGZpZWxkc1JlZiwgbmFtZSwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmKTtcclxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBzZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgICBkZWxldGUgZmllbGRzUmVmLmN1cnJlbnRbbmFtZV07XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKChpc1JhZGlvSW5wdXQocmVmKSB8fCBpc0NoZWNrQm94SW5wdXQocmVmKSkgJiYgZmllbGRSZWYpIHtcclxuICAgICAgICBjb25zdCB7IG9wdGlvbnMgfSA9IGZpZWxkUmVmO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpICYmIG9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbXBhY3Qob3B0aW9ucykuZm9yRWFjaCgob3B0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyByZWYgfSA9IG9wdGlvbjtcclxuICAgICAgICAgICAgICAgIGlmICgocmVmICYmIGlzRGV0YWNoZWQocmVmKSAmJiBpc1NhbWVSZWYob3B0aW9uLCByZWYpKSB8fCBmb3JjZURlbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzKHJlZiwgaGFuZGxlQ2hhbmdlKTtcclxuICAgICAgICAgICAgICAgICAgICB1bnNldChvcHRpb25zLCBgWyR7aW5kZXh9XWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgIWNvbXBhY3Qob3B0aW9ucykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgZmllbGRzUmVmLmN1cnJlbnRbbmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoaXNEZXRhY2hlZChyZWYpICYmIGlzU2FtZVJlZihmaWVsZFJlZiwgcmVmKSkgfHwgZm9yY2VEZWxldGUpIHtcclxuICAgICAgICByZW1vdmVBbGxFdmVudExpc3RlbmVycyhyZWYsIGhhbmRsZUNoYW5nZSk7XHJcbiAgICAgICAgZGVsZXRlIGZpZWxkc1JlZi5jdXJyZW50W25hbWVdO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIHNldEZpZWxkQXJyYXlEaXJ0eUZpZWxkcyh2YWx1ZXMsIGRlZmF1bHRWYWx1ZXMsIGRpcnR5RmllbGRzLCBwYXJlbnROb2RlLCBwYXJlbnROYW1lKSB7XHJcbiAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgIHdoaWxlICgrK2luZGV4IDwgdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlc1tpbmRleF0pIHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzW2luZGV4XVtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgIWRpcnR5RmllbGRzW2luZGV4XSAmJiAoZGlydHlGaWVsZHNbaW5kZXhdID0ge30pO1xyXG4gICAgICAgICAgICAgICAgZGlydHlGaWVsZHNbaW5kZXhdW2tleV0gPSBbXTtcclxuICAgICAgICAgICAgICAgIHNldEZpZWxkQXJyYXlEaXJ0eUZpZWxkcyh2YWx1ZXNbaW5kZXhdW2tleV0sIGdldChkZWZhdWx0VmFsdWVzW2luZGV4XSB8fCB7fSwga2V5LCBbXSksIGRpcnR5RmllbGRzW2luZGV4XVtrZXldLCBkaXJ0eUZpZWxkc1tpbmRleF0sIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnZXQoZGVmYXVsdFZhbHVlc1tpbmRleF0gfHwge30sIGtleSkgPT09IHZhbHVlc1tpbmRleF1ba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgID8gc2V0KGRpcnR5RmllbGRzW2luZGV4XSB8fCB7fSwga2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIDogKGRpcnR5RmllbGRzW2luZGV4XSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGlydHlGaWVsZHNbaW5kZXhdKSwgeyBba2V5XTogdHJ1ZSB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgIWRpcnR5RmllbGRzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBwYXJlbnROb2RlICYmXHJcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJlbnROb2RlW3BhcmVudE5hbWVdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpcnR5RmllbGRzLmxlbmd0aCA/IGRpcnR5RmllbGRzIDogdW5kZWZpbmVkO1xyXG59XG5cbnZhciBpc1N0cmluZyA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcblxudmFyIGlzUHJpbWl0aXZlID0gKHZhbHVlKSA9PiBpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkgfHwgIWlzT2JqZWN0VHlwZSh2YWx1ZSk7XG5cbmZ1bmN0aW9uIGRlZXBNZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xyXG4gICAgaWYgKGlzUHJpbWl0aXZlKHRhcmdldCkgfHwgaXNQcmltaXRpdmUoc291cmNlKSkge1xyXG4gICAgICAgIHJldHVybiBzb3VyY2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IHRhcmdldFtrZXldO1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZVZhbHVlID0gc291cmNlW2tleV07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPVxyXG4gICAgICAgICAgICAgICAgKGlzT2JqZWN0KHRhcmdldFZhbHVlKSAmJiBpc09iamVjdChzb3VyY2VWYWx1ZSkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkodGFyZ2V0VmFsdWUpICYmIEFycmF5LmlzQXJyYXkoc291cmNlVmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgICAgID8gZGVlcE1lcmdlKHRhcmdldFZhbHVlLCBzb3VyY2VWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA6IHNvdXJjZVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoX2EpIHsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxuXG52YXIgZ2V0RmllbGRzVmFsdWVzID0gKGZpZWxkc1JlZiwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLCBleGNsdWRlRGlzYWJsZWQsIHNlYXJjaCkgPT4ge1xyXG4gICAgY29uc3Qgb3V0cHV0ID0ge307XHJcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gZmllbGRzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBpZiAoaXNVbmRlZmluZWQoc2VhcmNoKSB8fFxyXG4gICAgICAgICAgICAoaXNTdHJpbmcoc2VhcmNoKVxyXG4gICAgICAgICAgICAgICAgPyBuYW1lLnN0YXJ0c1dpdGgoc2VhcmNoKVxyXG4gICAgICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KHNlYXJjaCkgJiYgc2VhcmNoLmZpbmQoKGRhdGEpID0+IG5hbWUuc3RhcnRzV2l0aChkYXRhKSkpKSB7XHJcbiAgICAgICAgICAgIG91dHB1dFtuYW1lXSA9IGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLCBuYW1lLCB1bmRlZmluZWQsIGV4Y2x1ZGVEaXNhYmxlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlZXBNZXJnZSh0cmFuc2Zvcm1Ub05lc3RPYmplY3QoT2JqZWN0LmFzc2lnbih7fSwgKChzaGFsbG93RmllbGRzU3RhdGVSZWYgfHwge30pLmN1cnJlbnQgfHwge30pKSksIHRyYW5zZm9ybVRvTmVzdE9iamVjdChvdXRwdXQpKTtcclxufTtcblxuZnVuY3Rpb24gZGVlcEVxdWFsKG9iamVjdDEsIG9iamVjdDIsIGlzRXJyb3JPYmplY3QpIHtcclxuICAgIGlmIChpc1ByaW1pdGl2ZShvYmplY3QxKSB8fCBpc1ByaW1pdGl2ZShvYmplY3QyKSkge1xyXG4gICAgICAgIHJldHVybiBvYmplY3QxID09PSBvYmplY3QyO1xyXG4gICAgfVxyXG4gICAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhvYmplY3QxKTtcclxuICAgIGNvbnN0IGtleXMyID0gT2JqZWN0LmtleXMob2JqZWN0Mik7XHJcbiAgICBpZiAoa2V5czEubGVuZ3RoICE9PSBrZXlzMi5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzMSkge1xyXG4gICAgICAgIGlmICghKGlzRXJyb3JPYmplY3QgJiYgWydyZWYnLCAnY29udGV4dCddLmluY2x1ZGVzKGtleSkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbDEgPSBvYmplY3QxW2tleV07XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbDIgPSBvYmplY3QyW2tleV07XHJcbiAgICAgICAgICAgIGlmICgoaXNPYmplY3QodmFsMSkgfHwgQXJyYXkuaXNBcnJheSh2YWwxKSkgJiZcclxuICAgICAgICAgICAgICAgIChpc09iamVjdCh2YWwyKSB8fCBBcnJheS5pc0FycmF5KHZhbDIpKVxyXG4gICAgICAgICAgICAgICAgPyAhZGVlcEVxdWFsKHZhbDEsIHZhbDIsIGlzRXJyb3JPYmplY3QpXHJcbiAgICAgICAgICAgICAgICA6IHZhbDEgIT09IHZhbDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XG5cbmZ1bmN0aW9uIGlzRXJyb3JTdGF0ZUNoYW5nZWQoeyBlcnJvcnMsIG5hbWUsIGVycm9yLCB2YWxpZEZpZWxkcywgZmllbGRzV2l0aFZhbGlkYXRpb24sIH0pIHtcclxuICAgIGNvbnN0IGlzVmFsaWQgPSBpc1VuZGVmaW5lZChlcnJvcik7XHJcbiAgICBjb25zdCBwcmV2aW91c0Vycm9yID0gZ2V0KGVycm9ycywgbmFtZSk7XHJcbiAgICByZXR1cm4gKChpc1ZhbGlkICYmICEhcHJldmlvdXNFcnJvcikgfHxcclxuICAgICAgICAoIWlzVmFsaWQgJiYgIWRlZXBFcXVhbChwcmV2aW91c0Vycm9yLCBlcnJvciwgdHJ1ZSkpIHx8XHJcbiAgICAgICAgKGlzVmFsaWQgJiYgZ2V0KGZpZWxkc1dpdGhWYWxpZGF0aW9uLCBuYW1lKSAmJiAhZ2V0KHZhbGlkRmllbGRzLCBuYW1lKSkpO1xyXG59XG5cbnZhciBpc1JlZ2V4ID0gKHZhbHVlKSA9PiB2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cDtcblxuY29uc3QgaXNWYWx1ZU1lc3NhZ2UgPSAodmFsdWUpID0+IGlzT2JqZWN0KHZhbHVlKSAmJiAhaXNSZWdleCh2YWx1ZSk7XHJcbnZhciBnZXRWYWx1ZUFuZE1lc3NhZ2UgPSAodmFsaWRhdGlvbkRhdGEpID0+IGlzVmFsdWVNZXNzYWdlKHZhbGlkYXRpb25EYXRhKVxyXG4gICAgPyB2YWxpZGF0aW9uRGF0YVxyXG4gICAgOiB7XHJcbiAgICAgICAgdmFsdWU6IHZhbGlkYXRpb25EYXRhLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgfTtcblxudmFyIGlzRnVuY3Rpb24gPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcblxudmFyIGlzTWVzc2FnZSA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpIHx8IChpc09iamVjdCh2YWx1ZSkgJiYgaXNWYWxpZEVsZW1lbnQodmFsdWUpKTtcblxuZnVuY3Rpb24gZ2V0VmFsaWRhdGVFcnJvcihyZXN1bHQsIHJlZiwgdHlwZSA9ICd2YWxpZGF0ZScpIHtcclxuICAgIGlmIChpc01lc3NhZ2UocmVzdWx0KSB8fCAoaXNCb29sZWFuKHJlc3VsdCkgJiYgIXJlc3VsdCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBpc01lc3NhZ2UocmVzdWx0KSA/IHJlc3VsdCA6ICcnLFxyXG4gICAgICAgICAgICByZWYsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxuXG52YXIgYXBwZW5kRXJyb3JzID0gKG5hbWUsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZXJyb3JzLCB0eXBlLCBtZXNzYWdlKSA9PiB7XHJcbiAgICBpZiAodmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBlcnJvcnNbbmFtZV07XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IpLCB7IHR5cGVzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIChlcnJvciAmJiBlcnJvci50eXBlcyA/IGVycm9yLnR5cGVzIDoge30pKSwgeyBbdHlwZV06IG1lc3NhZ2UgfHwgdHJ1ZSB9KSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7fTtcclxufTtcblxudmFyIHZhbGlkYXRlRmllbGQgPSBhc3luYyAoZmllbGRzUmVmLCB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIHsgcmVmLCByZWY6IHsgdHlwZSwgdmFsdWUgfSwgb3B0aW9ucywgcmVxdWlyZWQsIG1heExlbmd0aCwgbWluTGVuZ3RoLCBtaW4sIG1heCwgcGF0dGVybiwgdmFsaWRhdGUsIH0sIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZikgPT4ge1xyXG4gICAgY29uc3QgZmllbGRzID0gZmllbGRzUmVmLmN1cnJlbnQ7XHJcbiAgICBjb25zdCBuYW1lID0gcmVmLm5hbWU7XHJcbiAgICBjb25zdCBlcnJvciA9IHt9O1xyXG4gICAgY29uc3QgaXNSYWRpbyA9IGlzUmFkaW9JbnB1dChyZWYpO1xyXG4gICAgY29uc3QgaXNDaGVja0JveCA9IGlzQ2hlY2tCb3hJbnB1dChyZWYpO1xyXG4gICAgY29uc3QgaXNSYWRpb09yQ2hlY2tib3ggPSBpc1JhZGlvIHx8IGlzQ2hlY2tCb3g7XHJcbiAgICBjb25zdCBpc0VtcHR5ID0gdmFsdWUgPT09ICcnO1xyXG4gICAgY29uc3QgYXBwZW5kRXJyb3JzQ3VycnkgPSBhcHBlbmRFcnJvcnMuYmluZChudWxsLCBuYW1lLCB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIGVycm9yKTtcclxuICAgIGNvbnN0IGdldE1pbk1heE1lc3NhZ2UgPSAoZXhjZWVkTWF4LCBtYXhMZW5ndGhNZXNzYWdlLCBtaW5MZW5ndGhNZXNzYWdlLCBtYXhUeXBlID0gSU5QVVRfVkFMSURBVElPTl9SVUxFUy5tYXhMZW5ndGgsIG1pblR5cGUgPSBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1pbkxlbmd0aCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBleGNlZWRNYXggPyBtYXhMZW5ndGhNZXNzYWdlIDogbWluTGVuZ3RoTWVzc2FnZTtcclxuICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyB0eXBlOiBleGNlZWRNYXggPyBtYXhUeXBlIDogbWluVHlwZSwgbWVzc2FnZSxcclxuICAgICAgICAgICAgcmVmIH0sIChleGNlZWRNYXhcclxuICAgICAgICAgICAgPyBhcHBlbmRFcnJvcnNDdXJyeShtYXhUeXBlLCBtZXNzYWdlKVxyXG4gICAgICAgICAgICA6IGFwcGVuZEVycm9yc0N1cnJ5KG1pblR5cGUsIG1lc3NhZ2UpKSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHJlcXVpcmVkICYmXHJcbiAgICAgICAgKCghaXNSYWRpbyAmJiAhaXNDaGVja0JveCAmJiAoaXNFbXB0eSB8fCBpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkpKSB8fFxyXG4gICAgICAgICAgICAoaXNCb29sZWFuKHZhbHVlKSAmJiAhdmFsdWUpIHx8XHJcbiAgICAgICAgICAgIChpc0NoZWNrQm94ICYmICFnZXRDaGVja2JveFZhbHVlKG9wdGlvbnMpLmlzVmFsaWQpIHx8XHJcbiAgICAgICAgICAgIChpc1JhZGlvICYmICFnZXRSYWRpb1ZhbHVlKG9wdGlvbnMpLmlzVmFsaWQpKSkge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IHJlcXVpcmVkVmFsdWUsIG1lc3NhZ2U6IHJlcXVpcmVkTWVzc2FnZSB9ID0gaXNNZXNzYWdlKHJlcXVpcmVkKVxyXG4gICAgICAgICAgICA/IHsgdmFsdWU6ICEhcmVxdWlyZWQsIG1lc3NhZ2U6IHJlcXVpcmVkIH1cclxuICAgICAgICAgICAgOiBnZXRWYWx1ZUFuZE1lc3NhZ2UocmVxdWlyZWQpO1xyXG4gICAgICAgIGlmIChyZXF1aXJlZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHR5cGU6IElOUFVUX1ZBTElEQVRJT05fUlVMRVMucmVxdWlyZWQsIG1lc3NhZ2U6IHJlcXVpcmVkTWVzc2FnZSwgcmVmOiBpc1JhZGlvT3JDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgID8gKChmaWVsZHNbbmFtZV0ub3B0aW9ucyB8fCBbXSlbMF0gfHwge30pLnJlZlxyXG4gICAgICAgICAgICAgICAgICAgIDogcmVmIH0sIGFwcGVuZEVycm9yc0N1cnJ5KElOUFVUX1ZBTElEQVRJT05fUlVMRVMucmVxdWlyZWQsIHJlcXVpcmVkTWVzc2FnZSkpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChtaW4pIHx8ICFpc051bGxPclVuZGVmaW5lZChtYXgpKSB7XHJcbiAgICAgICAgbGV0IGV4Y2VlZE1heDtcclxuICAgICAgICBsZXQgZXhjZWVkTWluO1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IG1heFZhbHVlLCBtZXNzYWdlOiBtYXhNZXNzYWdlIH0gPSBnZXRWYWx1ZUFuZE1lc3NhZ2UobWF4KTtcclxuICAgICAgICBjb25zdCB7IHZhbHVlOiBtaW5WYWx1ZSwgbWVzc2FnZTogbWluTWVzc2FnZSB9ID0gZ2V0VmFsdWVBbmRNZXNzYWdlKG1pbik7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdudW1iZXInIHx8ICghdHlwZSAmJiAhaXNOYU4odmFsdWUpKSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZU51bWJlciA9IHJlZi52YWx1ZUFzTnVtYmVyIHx8IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKG1heFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWF4ID0gdmFsdWVOdW1iZXIgPiBtYXhWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKG1pblZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWluID0gdmFsdWVOdW1iZXIgPCBtaW5WYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVEYXRlID0gcmVmLnZhbHVlQXNEYXRlIHx8IG5ldyBEYXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKG1heFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWF4ID0gdmFsdWVEYXRlID4gbmV3IERhdGUobWF4VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyhtaW5WYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VlZE1pbiA9IHZhbHVlRGF0ZSA8IG5ldyBEYXRlKG1pblZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXhjZWVkTWF4IHx8IGV4Y2VlZE1pbikge1xyXG4gICAgICAgICAgICBnZXRNaW5NYXhNZXNzYWdlKCEhZXhjZWVkTWF4LCBtYXhNZXNzYWdlLCBtaW5NZXNzYWdlLCBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1heCwgSU5QVVRfVkFMSURBVElPTl9SVUxFUy5taW4pO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiAhaXNFbXB0eSAmJiAobWF4TGVuZ3RoIHx8IG1pbkxlbmd0aCkpIHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlOiBtYXhMZW5ndGhWYWx1ZSwgbWVzc2FnZTogbWF4TGVuZ3RoTWVzc2FnZSwgfSA9IGdldFZhbHVlQW5kTWVzc2FnZShtYXhMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IG1pbkxlbmd0aFZhbHVlLCBtZXNzYWdlOiBtaW5MZW5ndGhNZXNzYWdlLCB9ID0gZ2V0VmFsdWVBbmRNZXNzYWdlKG1pbkxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRMZW5ndGggPSB2YWx1ZS50b1N0cmluZygpLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBleGNlZWRNYXggPSAhaXNOdWxsT3JVbmRlZmluZWQobWF4TGVuZ3RoVmFsdWUpICYmIGlucHV0TGVuZ3RoID4gbWF4TGVuZ3RoVmFsdWU7XHJcbiAgICAgICAgY29uc3QgZXhjZWVkTWluID0gIWlzTnVsbE9yVW5kZWZpbmVkKG1pbkxlbmd0aFZhbHVlKSAmJiBpbnB1dExlbmd0aCA8IG1pbkxlbmd0aFZhbHVlO1xyXG4gICAgICAgIGlmIChleGNlZWRNYXggfHwgZXhjZWVkTWluKSB7XHJcbiAgICAgICAgICAgIGdldE1pbk1heE1lc3NhZ2UoISFleGNlZWRNYXgsIG1heExlbmd0aE1lc3NhZ2UsIG1pbkxlbmd0aE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHBhdHRlcm4gJiYgIWlzRW1wdHkpIHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlOiBwYXR0ZXJuVmFsdWUsIG1lc3NhZ2U6IHBhdHRlcm5NZXNzYWdlIH0gPSBnZXRWYWx1ZUFuZE1lc3NhZ2UocGF0dGVybik7XHJcbiAgICAgICAgaWYgKGlzUmVnZXgocGF0dGVyblZhbHVlKSAmJiAhcGF0dGVyblZhbHVlLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHR5cGU6IElOUFVUX1ZBTElEQVRJT05fUlVMRVMucGF0dGVybiwgbWVzc2FnZTogcGF0dGVybk1lc3NhZ2UsIHJlZiB9LCBhcHBlbmRFcnJvcnNDdXJyeShJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnBhdHRlcm4sIHBhdHRlcm5NZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodmFsaWRhdGUpIHtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gZ2V0RmllbGRWYWx1ZShmaWVsZHNSZWYsIG5hbWUsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZik7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGVSZWYgPSBpc1JhZGlvT3JDaGVja2JveCAmJiBvcHRpb25zID8gb3B0aW9uc1swXS5yZWYgOiByZWY7XHJcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odmFsaWRhdGUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHZhbGlkYXRlKGZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZUVycm9yID0gZ2V0VmFsaWRhdGVFcnJvcihyZXN1bHQsIHZhbGlkYXRlUmVmKTtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB2YWxpZGF0ZUVycm9yKSwgYXBwZW5kRXJyb3JzQ3VycnkoSU5QVVRfVkFMSURBVElPTl9SVUxFUy52YWxpZGF0ZSwgdmFsaWRhdGVFcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc09iamVjdCh2YWxpZGF0ZSkpIHtcclxuICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25SZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxpZGF0ZUZ1bmN0aW9uXSBvZiBPYmplY3QuZW50cmllcyh2YWxpZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaXNFbXB0eU9iamVjdCh2YWxpZGF0aW9uUmVzdWx0KSAmJiAhdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0ZVJlc3VsdCA9IGF3YWl0IHZhbGlkYXRlRnVuY3Rpb24oZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0ZUVycm9yID0gZ2V0VmFsaWRhdGVFcnJvcih2YWxpZGF0ZVJlc3VsdCwgdmFsaWRhdGVSZWYsIGtleSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHZhbGlkYXRlRXJyb3IpLCBhcHBlbmRFcnJvcnNDdXJyeShrZXksIHZhbGlkYXRlRXJyb3IubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JbbmFtZV0gPSB2YWxpZGF0aW9uUmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzRW1wdHlPYmplY3QodmFsaWRhdGlvblJlc3VsdCkpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHJlZjogdmFsaWRhdGVSZWYgfSwgdmFsaWRhdGlvblJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcjtcclxufTtcblxuY29uc3QgZ2V0UGF0aCA9IChwYXRoLCB2YWx1ZXMpID0+IHtcclxuICAgIGNvbnN0IGdldElubmVyUGF0aCA9IChrZXksIHZhbHVlLCBpc09iamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhdGhXaXRoSW5kZXggPSBpc09iamVjdCA/IGAke3BhdGh9LiR7a2V5fWAgOiBgJHtwYXRofVske2tleX1dYDtcclxuICAgICAgICByZXR1cm4gaXNQcmltaXRpdmUodmFsdWUpID8gcGF0aFdpdGhJbmRleCA6IGdldFBhdGgocGF0aFdpdGhJbmRleCwgdmFsdWUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh2YWx1ZXMpXHJcbiAgICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBnZXRJbm5lclBhdGgoa2V5LCB2YWx1ZSwgaXNPYmplY3QodmFsdWVzKSkpXHJcbiAgICAgICAgLmZsYXQoSW5maW5pdHkpO1xyXG59O1xuXG52YXIgYXNzaWduV2F0Y2hGaWVsZHMgPSAoZmllbGRWYWx1ZXMsIGZpZWxkTmFtZSwgd2F0Y2hGaWVsZHMsIGlucHV0VmFsdWUsIGlzU2luZ2xlRmllbGQpID0+IHtcclxuICAgIGxldCB2YWx1ZTtcclxuICAgIHdhdGNoRmllbGRzLmFkZChmaWVsZE5hbWUpO1xyXG4gICAgaWYgKGlzRW1wdHlPYmplY3QoZmllbGRWYWx1ZXMpKSB7XHJcbiAgICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YWx1ZSA9IGdldChmaWVsZFZhbHVlcywgZmllbGROYW1lKTtcclxuICAgICAgICBpZiAoaXNPYmplY3QodmFsdWUpIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGdldFBhdGgoZmllbGROYW1lLCB2YWx1ZSkuZm9yRWFjaCgobmFtZSkgPT4gd2F0Y2hGaWVsZHMuYWRkKG5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNVbmRlZmluZWQodmFsdWUpXHJcbiAgICAgICAgPyBpc1NpbmdsZUZpZWxkXHJcbiAgICAgICAgICAgID8gaW5wdXRWYWx1ZVxyXG4gICAgICAgICAgICA6IGdldChpbnB1dFZhbHVlLCBmaWVsZE5hbWUpXHJcbiAgICAgICAgOiB2YWx1ZTtcclxufTtcblxudmFyIHNraXBWYWxpZGF0aW9uID0gKHsgaXNPbkJsdXIsIGlzT25DaGFuZ2UsIGlzT25Ub3VjaCwgaXNUb3VjaGVkLCBpc1JlVmFsaWRhdGVPbkJsdXIsIGlzUmVWYWxpZGF0ZU9uQ2hhbmdlLCBpc0JsdXJFdmVudCwgaXNTdWJtaXR0ZWQsIGlzT25BbGwsIH0pID0+IHtcclxuICAgIGlmIChpc09uQWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIWlzU3VibWl0dGVkICYmIGlzT25Ub3VjaCkge1xyXG4gICAgICAgIHJldHVybiAhKGlzVG91Y2hlZCB8fCBpc0JsdXJFdmVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc1N1Ym1pdHRlZCA/IGlzUmVWYWxpZGF0ZU9uQmx1ciA6IGlzT25CbHVyKSB7XHJcbiAgICAgICAgcmV0dXJuICFpc0JsdXJFdmVudDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzU3VibWl0dGVkID8gaXNSZVZhbGlkYXRlT25DaGFuZ2UgOiBpc09uQ2hhbmdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzQmx1ckV2ZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XG5cbnZhciBnZXRGaWVsZEFycmF5UGFyZW50TmFtZSA9IChuYW1lKSA9PiBuYW1lLnN1YnN0cmluZygwLCBuYW1lLmluZGV4T2YoJ1snKSk7XG5cbmNvbnN0IGlzTWF0Y2hGaWVsZEFycmF5TmFtZSA9IChuYW1lLCBzZWFyY2hOYW1lKSA9PiBSZWdFeHAoYF4ke3NlYXJjaE5hbWV9W1xcXFxkK11gLnJlcGxhY2UoL1xcWy9nLCAnXFxcXFsnKS5yZXBsYWNlKC9cXF0vZywgJ1xcXFxdJykpLnRlc3QobmFtZSk7XHJcbnZhciBpc05hbWVJbkZpZWxkQXJyYXkgPSAobmFtZXMsIG5hbWUpID0+IFsuLi5uYW1lc10uc29tZSgoY3VycmVudCkgPT4gaXNNYXRjaEZpZWxkQXJyYXlOYW1lKG5hbWUsIGN1cnJlbnQpKTtcblxudmFyIGlzU2VsZWN0SW5wdXQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSBgJHtTRUxFQ1R9LW9uZWA7XG5cbmZ1bmN0aW9uIG9uRG9tUmVtb3ZlKGZpZWxkc1JlZiwgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmKSB7XHJcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIE9iamVjdC52YWx1ZXMoZmllbGRzUmVmLmN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZCAmJiBmaWVsZC5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBmaWVsZC5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24ucmVmICYmIGlzRGV0YWNoZWQob3B0aW9uLnJlZikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmKGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZmllbGQgJiYgaXNEZXRhY2hlZChmaWVsZC5yZWYpKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJBbmRSZWYoZmllbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKHdpbmRvdy5kb2N1bWVudCwge1xyXG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JzZXJ2ZXI7XHJcbn1cblxuZnVuY3Rpb24gY2xvbmVPYmplY3QoZGF0YSwgaXNXZWIpIHtcclxuICAgIGxldCBjb3B5O1xyXG4gICAgaWYgKGlzUHJpbWl0aXZlKGRhdGEpIHx8IChpc1dlYiAmJiBkYXRhIGluc3RhbmNlb2YgRmlsZSkpIHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIGNvcHkgPSBuZXcgRGF0ZShkYXRhLmdldFRpbWUoKSk7XHJcbiAgICAgICAgcmV0dXJuIGNvcHk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIFNldCkge1xyXG4gICAgICAgIGNvcHkgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgY29weS5hZGQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb3B5O1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBNYXApIHtcclxuICAgICAgICBjb3B5ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGRhdGEua2V5cygpKSB7XHJcbiAgICAgICAgICAgIGNvcHkuc2V0KGtleSwgY2xvbmVPYmplY3QoZGF0YS5nZXQoa2V5KSwgaXNXZWIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvcHk7XHJcbiAgICB9XHJcbiAgICBjb3B5ID0gQXJyYXkuaXNBcnJheShkYXRhKSA/IFtdIDoge307XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgY29weVtrZXldID0gY2xvbmVPYmplY3QoZGF0YVtrZXldLCBpc1dlYik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29weTtcclxufVxuXG52YXIgbW9kZUNoZWNrZXIgPSAobW9kZSkgPT4gKHtcclxuICAgIGlzT25TdWJtaXQ6ICFtb2RlIHx8IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5vblN1Ym1pdCxcclxuICAgIGlzT25CbHVyOiBtb2RlID09PSBWQUxJREFUSU9OX01PREUub25CbHVyLFxyXG4gICAgaXNPbkNoYW5nZTogbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLm9uQ2hhbmdlLFxyXG4gICAgaXNPbkFsbDogbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLmFsbCxcclxuICAgIGlzT25Ub3VjaDogbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLm9uVG91Y2hlZCxcclxufSk7XG5cbnZhciBpc1JhZGlvT3JDaGVja2JveEZ1bmN0aW9uID0gKHJlZikgPT4gaXNSYWRpb0lucHV0KHJlZikgfHwgaXNDaGVja0JveElucHV0KHJlZik7XG5cbmNvbnN0IGlzV2luZG93VW5kZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gVU5ERUZJTkVEO1xyXG5jb25zdCBpc1dlYiA9IHR5cGVvZiBkb2N1bWVudCAhPT0gVU5ERUZJTkVEICYmXHJcbiAgICAhaXNXaW5kb3dVbmRlZmluZWQgJiZcclxuICAgICFpc1VuZGVmaW5lZCh3aW5kb3cuSFRNTEVsZW1lbnQpO1xyXG5jb25zdCBpc1Byb3h5RW5hYmxlZCA9IGlzV2ViID8gJ1Byb3h5JyBpbiB3aW5kb3cgOiB0eXBlb2YgUHJveHkgIT09IFVOREVGSU5FRDtcclxuZnVuY3Rpb24gdXNlRm9ybSh7IG1vZGUgPSBWQUxJREFUSU9OX01PREUub25TdWJtaXQsIHJlVmFsaWRhdGVNb2RlID0gVkFMSURBVElPTl9NT0RFLm9uQ2hhbmdlLCByZXNvbHZlciwgY29udGV4dCwgZGVmYXVsdFZhbHVlcyA9IHt9LCBzaG91bGRGb2N1c0Vycm9yID0gdHJ1ZSwgc2hvdWxkVW5yZWdpc3RlciA9IHRydWUsIGNyaXRlcmlhTW9kZSwgfSA9IHt9KSB7XHJcbiAgICBjb25zdCBmaWVsZHNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3Qgd2F0Y2hGaWVsZHNSZWYgPSB1c2VSZWYobmV3IFNldCgpKTtcclxuICAgIGNvbnN0IHVzZVdhdGNoRmllbGRzUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IHVzZVdhdGNoUmVuZGVyRnVuY3Rpb25zUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IHZhbGlkRmllbGRzUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZXNSZWYgPSB1c2VSZWYoZGVmYXVsdFZhbHVlcyk7XHJcbiAgICBjb25zdCBkZWZhdWx0VmFsdWVzQXRSZW5kZXJSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgaXNVbk1vdW50ID0gdXNlUmVmKGZhbHNlKTtcclxuICAgIGNvbnN0IGlzV2F0Y2hBbGxSZWYgPSB1c2VSZWYoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBzaGFsbG93RmllbGRzU3RhdGVSZWYgPSB1c2VSZWYoc2hvdWxkVW5yZWdpc3RlciA/IHt9IDogY2xvbmVPYmplY3QoZGVmYXVsdFZhbHVlcywgaXNXZWIpKTtcclxuICAgIGNvbnN0IHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IGNvbnRleHRSZWYgPSB1c2VSZWYoY29udGV4dCk7XHJcbiAgICBjb25zdCByZXNvbHZlclJlZiA9IHVzZVJlZihyZXNvbHZlcik7XHJcbiAgICBjb25zdCBmaWVsZEFycmF5TmFtZXNSZWYgPSB1c2VSZWYobmV3IFNldCgpKTtcclxuICAgIGNvbnN0IG1vZGVSZWYgPSB1c2VSZWYobW9kZUNoZWNrZXIobW9kZSkpO1xyXG4gICAgY29uc3QgeyBpc09uU3VibWl0LCBpc09uVG91Y2ggfSA9IG1vZGVSZWYuY3VycmVudDtcclxuICAgIGNvbnN0IGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhID0gY3JpdGVyaWFNb2RlID09PSBWQUxJREFUSU9OX01PREUuYWxsO1xyXG4gICAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBpc0RpcnR5OiBmYWxzZSxcclxuICAgICAgICBkaXJ0eUZpZWxkczoge30sXHJcbiAgICAgICAgaXNTdWJtaXR0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHN1Ym1pdENvdW50OiAwLFxyXG4gICAgICAgIHRvdWNoZWQ6IHt9LFxyXG4gICAgICAgIGlzU3VibWl0dGluZzogZmFsc2UsXHJcbiAgICAgICAgaXNTdWJtaXRTdWNjZXNzZnVsOiBmYWxzZSxcclxuICAgICAgICBpc1ZhbGlkOiAhaXNPblN1Ym1pdCxcclxuICAgICAgICBlcnJvcnM6IHt9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZWFkRm9ybVN0YXRlUmVmID0gdXNlUmVmKHtcclxuICAgICAgICBpc0RpcnR5OiAhaXNQcm94eUVuYWJsZWQsXHJcbiAgICAgICAgZGlydHlGaWVsZHM6ICFpc1Byb3h5RW5hYmxlZCxcclxuICAgICAgICB0b3VjaGVkOiAhaXNQcm94eUVuYWJsZWQgfHwgaXNPblRvdWNoLFxyXG4gICAgICAgIGlzU3VibWl0dGluZzogIWlzUHJveHlFbmFibGVkLFxyXG4gICAgICAgIGlzVmFsaWQ6ICFpc1Byb3h5RW5hYmxlZCxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZm9ybVN0YXRlUmVmID0gdXNlUmVmKGZvcm1TdGF0ZSk7XHJcbiAgICBjb25zdCBvYnNlcnZlclJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgeyBpc09uQmx1cjogaXNSZVZhbGlkYXRlT25CbHVyLCBpc09uQ2hhbmdlOiBpc1JlVmFsaWRhdGVPbkNoYW5nZSwgfSA9IHVzZVJlZihtb2RlQ2hlY2tlcihyZVZhbGlkYXRlTW9kZSkpLmN1cnJlbnQ7XHJcbiAgICBjb250ZXh0UmVmLmN1cnJlbnQgPSBjb250ZXh0O1xyXG4gICAgcmVzb2x2ZXJSZWYuY3VycmVudCA9IHJlc29sdmVyO1xyXG4gICAgZm9ybVN0YXRlUmVmLmN1cnJlbnQgPSBmb3JtU3RhdGU7XHJcbiAgICBjb25zdCB1cGRhdGVGb3JtU3RhdGUgPSB1c2VDYWxsYmFjaygoc3RhdGUgPSB7fSkgPT4gIWlzVW5Nb3VudC5jdXJyZW50ICYmXHJcbiAgICAgICAgc2V0Rm9ybVN0YXRlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZm9ybVN0YXRlUmVmLmN1cnJlbnQpLCBzdGF0ZSkpLCBbXSk7XHJcbiAgICBjb25zdCBzaG91bGRSZW5kZXJCYXNlT25FcnJvciA9IHVzZUNhbGxiYWNrKChuYW1lLCBlcnJvciwgc2hvdWxkUmVuZGVyID0gZmFsc2UsIHN0YXRlID0ge30sIGlzVmFsaWQpID0+IHtcclxuICAgICAgICBsZXQgc2hvdWxkUmVSZW5kZXIgPSBzaG91bGRSZW5kZXIgfHxcclxuICAgICAgICAgICAgaXNFcnJvclN0YXRlQ2hhbmdlZCh7XHJcbiAgICAgICAgICAgICAgICBlcnJvcnM6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyxcclxuICAgICAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbGlkRmllbGRzOiB2YWxpZEZpZWxkc1JlZi5jdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgZmllbGRzV2l0aFZhbGlkYXRpb246IGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzRXJyb3IgPSBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdW5zZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgIHNob3VsZFJlUmVuZGVyID1cclxuICAgICAgICAgICAgICAgIHNob3VsZFJlUmVuZGVyIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgIXByZXZpb3VzRXJyb3IgfHxcclxuICAgICAgICAgICAgICAgICAgICAhZGVlcEVxdWFsKHByZXZpb3VzRXJyb3IsIGVycm9yLCB0cnVlKTtcclxuICAgICAgICAgICAgc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSwgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGdldChmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LCBuYW1lKSB8fCByZXNvbHZlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRSZVJlbmRlciA9IHNob3VsZFJlUmVuZGVyIHx8IHByZXZpb3VzRXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdW5zZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChzaG91bGRSZVJlbmRlciAmJiAhaXNOdWxsT3JVbmRlZmluZWQoc2hvdWxkUmVuZGVyKSkgfHxcclxuICAgICAgICAgICAgIWlzRW1wdHlPYmplY3Qoc3RhdGUpKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7IGVycm9yczogZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzIH0pLCAocmVzb2x2ZXJSZWYuY3VycmVudCA/IHsgaXNWYWxpZDogISFpc1ZhbGlkIH0gOiB7fSkpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBzZXRGaWVsZFZhbHVlID0gdXNlQ2FsbGJhY2soKG5hbWUsIHJhd1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyByZWYsIG9wdGlvbnMgfSA9IGZpZWxkc1JlZi5jdXJyZW50W25hbWVdO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXNXZWIgJiYgaXNIVE1MRWxlbWVudChyZWYpICYmIGlzTnVsbE9yVW5kZWZpbmVkKHJhd1ZhbHVlKVxyXG4gICAgICAgICAgICA/ICcnXHJcbiAgICAgICAgICAgIDogcmF3VmFsdWU7XHJcbiAgICAgICAgaWYgKGlzUmFkaW9JbnB1dChyZWYpICYmIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5mb3JFYWNoKCh7IHJlZjogcmFkaW9SZWYgfSkgPT4gKHJhZGlvUmVmLmNoZWNrZWQgPSByYWRpb1JlZi52YWx1ZSA9PT0gdmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNGaWxlSW5wdXQocmVmKSAmJiAhaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJlZi5maWxlcyA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc011bHRpcGxlU2VsZWN0KHJlZikpIHtcclxuICAgICAgICAgICAgWy4uLnJlZi5vcHRpb25zXS5mb3JFYWNoKChzZWxlY3RSZWYpID0+IChzZWxlY3RSZWYuc2VsZWN0ZWQgPSB2YWx1ZS5pbmNsdWRlcyhzZWxlY3RSZWYudmFsdWUpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzQ2hlY2tCb3hJbnB1dChyZWYpICYmIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5sZW5ndGggPiAxXHJcbiAgICAgICAgICAgICAgICA/IG9wdGlvbnMuZm9yRWFjaCgoeyByZWY6IGNoZWNrYm94UmVmIH0pID0+IChjaGVja2JveFJlZi5jaGVja2VkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA/ICEhdmFsdWUuZmluZCgoZGF0YSkgPT4gZGF0YSA9PT0gY2hlY2tib3hSZWYudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZSA9PT0gY2hlY2tib3hSZWYudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgOiAob3B0aW9uc1swXS5yZWYuY2hlY2tlZCA9ICEhdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVmLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgaXNGb3JtRGlydHkgPSAoKSA9PiAhZGVlcEVxdWFsKGdldFZhbHVlcygpLCBpc0VtcHR5T2JqZWN0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudClcclxuICAgICAgICA/IGRlZmF1bHRWYWx1ZXNBdFJlbmRlclJlZi5jdXJyZW50XHJcbiAgICAgICAgOiBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQpIHx8ICFpc0VtcHR5T2JqZWN0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzKTtcclxuICAgIGNvbnN0IHVwZGF0ZUFuZEdldERpcnR5U3RhdGUgPSB1c2VDYWxsYmFjaygobmFtZSwgc2hvdWxkUmVuZGVyID0gdHJ1ZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNEaXJ0eSB8fFxyXG4gICAgICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNGaWVsZERpcnR5ID0gIWRlZXBFcXVhbChnZXQoZGVmYXVsdFZhbHVlc0F0UmVuZGVyUmVmLmN1cnJlbnQsIG5hbWUpLCBnZXRGaWVsZFZhbHVlKGZpZWxkc1JlZiwgbmFtZSwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRGlydHlGaWVsZEV4aXN0ID0gZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBuYW1lKTtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNJc0RpcnR5ID0gZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNEaXJ0eTtcclxuICAgICAgICAgICAgaXNGaWVsZERpcnR5XHJcbiAgICAgICAgICAgICAgICA/IHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIDogdW5zZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIGlzRGlydHk6IGlzRm9ybURpcnR5KCksXHJcbiAgICAgICAgICAgICAgICBkaXJ0eUZpZWxkczogZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ2hhbmdlZCA9IChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNEaXJ0eSAmJlxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNJc0RpcnR5ICE9PSBzdGF0ZS5pc0RpcnR5KSB8fFxyXG4gICAgICAgICAgICAgICAgKHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGlydHlGaWVsZEV4aXN0ICE9PSBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUpKTtcclxuICAgICAgICAgICAgaWYgKGlzQ2hhbmdlZCAmJiBzaG91bGRSZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1TdGF0ZVJlZi5jdXJyZW50ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmb3JtU3RhdGVSZWYuY3VycmVudCksIHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZShPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpc0NoYW5nZWQgPyBzdGF0ZSA6IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBleGVjdXRlVmFsaWRhdGlvbiA9IHVzZUNhbGxiYWNrKGFzeW5jIChuYW1lLCBza2lwUmVSZW5kZXIpID0+IHtcclxuICAgICAgICBpZiAoZmllbGRzUmVmLmN1cnJlbnRbbmFtZV0pIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSAoYXdhaXQgdmFsaWRhdGVGaWVsZChmaWVsZHNSZWYsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBmaWVsZHNSZWYuY3VycmVudFtuYW1lXSwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmKSlbbmFtZV07XHJcbiAgICAgICAgICAgIHNob3VsZFJlbmRlckJhc2VPbkVycm9yKG5hbWUsIGVycm9yLCBza2lwUmVSZW5kZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gaXNVbmRlZmluZWQoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LCBbc2hvdWxkUmVuZGVyQmFzZU9uRXJyb3IsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhXSk7XHJcbiAgICBjb25zdCBleGVjdXRlU2NoZW1hT3JSZXNvbHZlclZhbGlkYXRpb24gPSB1c2VDYWxsYmFjayhhc3luYyAobmFtZXMpID0+IHtcclxuICAgICAgICBjb25zdCB7IGVycm9ycyB9ID0gYXdhaXQgcmVzb2x2ZXJSZWYuY3VycmVudChnZXRWYWx1ZXMoKSwgY29udGV4dFJlZi5jdXJyZW50LCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSk7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNGb3JtSXNWYWxpZCA9IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQ7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmFtZXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzSW5wdXRzVmFsaWQgPSBuYW1lc1xyXG4gICAgICAgICAgICAgICAgLm1hcCgobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBnZXQoZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lLCBlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICA6IHVuc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIWVycm9yO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmV2ZXJ5KEJvb2xlYW4pO1xyXG4gICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZDogaXNFbXB0eU9iamVjdChlcnJvcnMpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JzOiBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gaXNJbnB1dHNWYWxpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gZ2V0KGVycm9ycywgbmFtZXMpO1xyXG4gICAgICAgICAgICBzaG91bGRSZW5kZXJCYXNlT25FcnJvcihuYW1lcywgZXJyb3IsIHByZXZpb3VzRm9ybUlzVmFsaWQgIT09IGlzRW1wdHlPYmplY3QoZXJyb3JzKSwge30sIGlzRW1wdHlPYmplY3QoZXJyb3JzKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAhZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Nob3VsZFJlbmRlckJhc2VPbkVycm9yLCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYV0pO1xyXG4gICAgY29uc3QgdHJpZ2dlciA9IHVzZUNhbGxiYWNrKGFzeW5jIChuYW1lKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRzID0gbmFtZSB8fCBPYmplY3Qua2V5cyhmaWVsZHNSZWYuY3VycmVudCk7XHJcbiAgICAgICAgaWYgKHJlc29sdmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4ZWN1dGVTY2hlbWFPclJlc29sdmVyVmFsaWRhdGlvbihmaWVsZHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZHMpKSB7XHJcbiAgICAgICAgICAgICFuYW1lICYmIChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMgPSB7fSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKGZpZWxkcy5tYXAoYXN5bmMgKGRhdGEpID0+IGF3YWl0IGV4ZWN1dGVWYWxpZGF0aW9uKGRhdGEsIG51bGwpKSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmV2ZXJ5KEJvb2xlYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXdhaXQgZXhlY3V0ZVZhbGlkYXRpb24oZmllbGRzLCByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCk7XHJcbiAgICB9LCBbZXhlY3V0ZVNjaGVtYU9yUmVzb2x2ZXJWYWxpZGF0aW9uLCBleGVjdXRlVmFsaWRhdGlvbl0pO1xyXG4gICAgY29uc3Qgc2V0SW50ZXJuYWxWYWx1ZXMgPSB1c2VDYWxsYmFjaygobmFtZSwgdmFsdWUsIHsgc2hvdWxkRGlydHksIHNob3VsZFZhbGlkYXRlIH0pID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICAgICAgc2V0KGRhdGEsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkTmFtZSBvZiBnZXRQYXRoKG5hbWUsIHZhbHVlKSkge1xyXG4gICAgICAgICAgICBpZiAoZmllbGRzUmVmLmN1cnJlbnRbZmllbGROYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZShmaWVsZE5hbWUsIGdldChkYXRhLCBmaWVsZE5hbWUpKTtcclxuICAgICAgICAgICAgICAgIHNob3VsZERpcnR5ICYmIHVwZGF0ZUFuZEdldERpcnR5U3RhdGUoZmllbGROYW1lKTtcclxuICAgICAgICAgICAgICAgIHNob3VsZFZhbGlkYXRlICYmIHRyaWdnZXIoZmllbGROYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFt0cmlnZ2VyLCBzZXRGaWVsZFZhbHVlLCB1cGRhdGVBbmRHZXREaXJ0eVN0YXRlXSk7XHJcbiAgICBjb25zdCBzZXRJbnRlcm5hbFZhbHVlID0gdXNlQ2FsbGJhY2soKG5hbWUsIHZhbHVlLCBjb25maWcgPSB7fSkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZHNSZWYuY3VycmVudFtuYW1lXSkge1xyXG4gICAgICAgICAgICBzZXRGaWVsZFZhbHVlKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgY29uZmlnLnNob3VsZERpcnR5ICYmIHVwZGF0ZUFuZEdldERpcnR5U3RhdGUobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgc2V0SW50ZXJuYWxWYWx1ZXMobmFtZSwgdmFsdWUsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZEFycmF5TmFtZXNSZWYuY3VycmVudC5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnRbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLmN1cnJlbnRbbmFtZV0oe1xyXG4gICAgICAgICAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICgocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHkgfHxcclxuICAgICAgICAgICAgICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnNob3VsZERpcnR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBuYW1lLCBzZXRGaWVsZEFycmF5RGlydHlGaWVsZHModmFsdWUsIGdldChkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUsIFtdKSwgZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBuYW1lLCBbXSkpKTtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RpcnR5OiAhZGVlcEVxdWFsKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2V0VmFsdWVzKCkpLCB7IFtuYW1lXTogdmFsdWUgfSksIGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcnR5RmllbGRzOiBmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAhc2hvdWxkVW5yZWdpc3RlciAmJiBzZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUsIHZhbHVlKTtcclxuICAgIH0sIFt1cGRhdGVBbmRHZXREaXJ0eVN0YXRlLCBzZXRGaWVsZFZhbHVlLCBzZXRJbnRlcm5hbFZhbHVlc10pO1xyXG4gICAgY29uc3QgaXNGaWVsZFdhdGNoZWQgPSAobmFtZSkgPT4gaXNXYXRjaEFsbFJlZi5jdXJyZW50IHx8XHJcbiAgICAgICAgd2F0Y2hGaWVsZHNSZWYuY3VycmVudC5oYXMobmFtZSkgfHxcclxuICAgICAgICB3YXRjaEZpZWxkc1JlZi5jdXJyZW50LmhhcygobmFtZS5tYXRjaCgvXFx3Ky8pIHx8IFtdKVswXSk7XHJcbiAgICBjb25zdCByZW5kZXJXYXRjaGVkSW5wdXRzID0gKG5hbWUsIGZvdW5kID0gdHJ1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghaXNFbXB0eU9iamVjdCh1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW5hbWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAhdXNlV2F0Y2hGaWVsZHNSZWYuY3VycmVudFtrZXldLnNpemUgfHxcclxuICAgICAgICAgICAgICAgICAgICB1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50W2tleV0uaGFzKG5hbWUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlV2F0Y2hGaWVsZHNSZWYuY3VycmVudFtrZXldLmhhcyhnZXRGaWVsZEFycmF5UGFyZW50TmFtZShuYW1lKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VXYXRjaFJlbmRlckZ1bmN0aW9uc1JlZi5jdXJyZW50W2tleV0oKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBzZXRWYWx1ZShuYW1lLCB2YWx1ZSwgY29uZmlnKSB7XHJcbiAgICAgICAgc2V0SW50ZXJuYWxWYWx1ZShuYW1lLCB2YWx1ZSwgY29uZmlnKTtcclxuICAgICAgICBpc0ZpZWxkV2F0Y2hlZChuYW1lKSAmJiB1cGRhdGVGb3JtU3RhdGUoKTtcclxuICAgICAgICByZW5kZXJXYXRjaGVkSW5wdXRzKG5hbWUpO1xyXG4gICAgICAgIChjb25maWcgfHwge30pLnNob3VsZFZhbGlkYXRlICYmIHRyaWdnZXIobmFtZSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudCA9IGhhbmRsZUNoYW5nZVJlZi5jdXJyZW50XHJcbiAgICAgICAgPyBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudFxyXG4gICAgICAgIDogYXN5bmMgKHsgdHlwZSwgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSB0YXJnZXQubmFtZTtcclxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgICAgICAgICAgbGV0IGVycm9yO1xyXG4gICAgICAgICAgICBsZXQgaXNWYWxpZDtcclxuICAgICAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0JsdXJFdmVudCA9IHR5cGUgPT09IEVWRU5UUy5CTFVSO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2tpcFZhbGlkYXRpb24gPSBza2lwVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHsgaXNCbHVyRXZlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZVZhbGlkYXRlT25DaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZVZhbGlkYXRlT25CbHVyLCBpc1RvdWNoZWQ6ICEhZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQsIG5hbWUpLCBpc1N1Ym1pdHRlZDogZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNTdWJtaXR0ZWQgfSwgbW9kZVJlZi5jdXJyZW50KSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGUgPSB1cGRhdGVBbmRHZXREaXJ0eVN0YXRlKG5hbWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGxldCBzaG91bGRSZW5kZXIgPSAhaXNFbXB0eU9iamVjdChzdGF0ZSkgfHwgaXNGaWVsZFdhdGNoZWQobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNCbHVyRXZlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAhZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQsIG5hbWUpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCwgbmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyB0b3VjaGVkOiBmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFNraXBWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyV2F0Y2hlZElucHV0cyhuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCghaXNFbXB0eU9iamVjdChzdGF0ZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNob3VsZFJlbmRlciAmJiBpc0VtcHR5T2JqZWN0KHN0YXRlKSkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZShzdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9ycyB9ID0gYXdhaXQgcmVzb2x2ZXJSZWYuY3VycmVudChnZXRWYWx1ZXMoKSwgY29udGV4dFJlZi5jdXJyZW50LCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNGb3JtSXNWYWxpZCA9IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBnZXQoZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVycm9yICYmIHJlc29sdmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZU5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCBuYW1lLmxhc3RJbmRleE9mKCcuJykgPiBuYW1lLmxhc3RJbmRleE9mKCdbJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbmFtZS5sYXN0SW5kZXhPZignLicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5hbWUubGFzdEluZGV4T2YoJ1snKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRFcnJvciA9IGdldChlcnJvcnMsIHBhcmVudE5vZGVOYW1lLCB7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvci50eXBlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RXJyb3IubWVzc2FnZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yID0gY3VycmVudEVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGVOYW1lICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3VycmVudEVycm9yIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgcGFyZW50Tm9kZU5hbWUpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IHBhcmVudE5vZGVOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc0VtcHR5T2JqZWN0KGVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzRm9ybUlzVmFsaWQgIT09IGlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkUmVuZGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IChhd2FpdCB2YWxpZGF0ZUZpZWxkKGZpZWxkc1JlZiwgaXNWYWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIGZpZWxkLCBzaGFsbG93RmllbGRzU3RhdGVSZWYpKVtuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlbmRlcldhdGNoZWRJbnB1dHMobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRSZW5kZXJCYXNlT25FcnJvcihuYW1lLCBlcnJvciwgc2hvdWxkUmVuZGVyLCBzdGF0ZSwgaXNWYWxpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgZnVuY3Rpb24gc2V0RmllbGRBcnJheURlZmF1bHRWYWx1ZXMoZGF0YSkge1xyXG4gICAgICAgIGlmICghc2hvdWxkVW5yZWdpc3Rlcikge1xyXG4gICAgICAgICAgICBsZXQgY29weSA9IGNsb25lT2JqZWN0KGRhdGEsIGlzV2ViKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBmaWVsZEFycmF5TmFtZXNSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzS2V5KHZhbHVlKSAmJiAhY29weVt2YWx1ZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3B5ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb3B5KSwgeyBbdmFsdWVdOiBbXSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29weTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRWYWx1ZXMocGF5bG9hZCkge1xyXG4gICAgICAgIGlmIChpc1N0cmluZyhwYXlsb2FkKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0RmllbGRWYWx1ZShmaWVsZHNSZWYsIHBheWxvYWQsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBheWxvYWQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIHBheWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIHNldChkYXRhLCBuYW1lLCBnZXRGaWVsZFZhbHVlKGZpZWxkc1JlZiwgbmFtZSwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZXRGaWVsZEFycmF5RGVmYXVsdFZhbHVlcyhnZXRGaWVsZHNWYWx1ZXMoZmllbGRzUmVmLCBzaGFsbG93RmllbGRzU3RhdGVSZWYpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHZhbGlkYXRlUmVzb2x2ZXIgPSB1c2VDYWxsYmFjayhhc3luYyAodmFsdWVzID0ge30pID0+IHtcclxuICAgICAgICBjb25zdCB7IGVycm9ycyB9ID0gYXdhaXQgcmVzb2x2ZXJSZWYuY3VycmVudChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50KSwgZ2V0VmFsdWVzKCkpLCB2YWx1ZXMpLCBjb250ZXh0UmVmLmN1cnJlbnQsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gaXNFbXB0eU9iamVjdChlcnJvcnMpO1xyXG4gICAgICAgIGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQgIT09IGlzVmFsaWQgJiZcclxuICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW2lzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhXSk7XHJcbiAgICBjb25zdCByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXIgPSB1c2VDYWxsYmFjaygoZmllbGQsIGZvcmNlRGVsZXRlKSA9PiBmaW5kUmVtb3ZlZEZpZWxkQW5kUmVtb3ZlTGlzdGVuZXIoZmllbGRzUmVmLCBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudCwgZmllbGQsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZiwgc2hvdWxkVW5yZWdpc3RlciwgZm9yY2VEZWxldGUpLCBbc2hvdWxkVW5yZWdpc3Rlcl0pO1xyXG4gICAgY29uc3QgdXBkYXRlV2F0Y2hlZFZhbHVlID0gKG5hbWUpID0+IHtcclxuICAgICAgICBpZiAoaXNXYXRjaEFsbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh3YXRjaEZpZWxkc1JlZikge1xyXG4gICAgICAgICAgICBsZXQgc2hvdWxkUmVuZGVyVXNlV2F0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHdhdGNoRmllbGQgb2Ygd2F0Y2hGaWVsZHNSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdhdGNoRmllbGQuc3RhcnRzV2l0aChuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFJlbmRlclVzZVdhdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2hvdWxkUmVuZGVyVXNlV2F0Y2ggJiYgcmVuZGVyV2F0Y2hlZElucHV0cyhuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmID0gdXNlQ2FsbGJhY2soKGZpZWxkLCBmb3JjZURlbGV0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXIoZmllbGQsIGZvcmNlRGVsZXRlKTtcclxuICAgICAgICAgICAgaWYgKHNob3VsZFVucmVnaXN0ZXIgJiYgIWNvbXBhY3QoZmllbGQub3B0aW9ucyB8fCBbXSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNldChkZWZhdWx0VmFsdWVzQXRSZW5kZXJSZWYuY3VycmVudCwgZmllbGQucmVmLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdW5zZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgZmllbGQucmVmLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdW5zZXQoZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudCwgZmllbGQucmVmLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdW5zZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBmaWVsZC5yZWYubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIGZpZWxkLnJlZi5uYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNEaXJ0eTogaXNGb3JtRGlydHkoKSxcclxuICAgICAgICAgICAgICAgICAgICBkaXJ0eUZpZWxkczogZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXJSZWYuY3VycmVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlUmVzb2x2ZXIoKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVdhdGNoZWRWYWx1ZShmaWVsZC5yZWYubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbdmFsaWRhdGVSZXNvbHZlciwgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyXSk7XHJcbiAgICBmdW5jdGlvbiBjbGVhckVycm9ycyhuYW1lKSB7XHJcbiAgICAgICAgbmFtZSAmJlxyXG4gICAgICAgICAgICAoQXJyYXkuaXNBcnJheShuYW1lKSA/IG5hbWUgOiBbbmFtZV0pLmZvckVhY2goKGlucHV0TmFtZSkgPT4gZmllbGRzUmVmLmN1cnJlbnRbaW5wdXROYW1lXVxyXG4gICAgICAgICAgICAgICAgPyBpc0tleShpbnB1dE5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBkZWxldGUgZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzW2lucHV0TmFtZV1cclxuICAgICAgICAgICAgICAgICAgICA6IHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIGlucHV0TmFtZSwgdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgOiB1bnNldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIGlucHV0TmFtZSkpO1xyXG4gICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgIGVycm9yczogbmFtZSA/IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyA6IHt9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0RXJyb3IobmFtZSwgZXJyb3IpIHtcclxuICAgICAgICBjb25zdCByZWYgPSAoZmllbGRzUmVmLmN1cnJlbnRbbmFtZV0gfHwge30pLnJlZjtcclxuICAgICAgICBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGVycm9yKSwgeyByZWYgfSkpO1xyXG4gICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcnM6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlcnJvci5zaG91bGRGb2N1cyAmJiByZWYgJiYgcmVmLmZvY3VzICYmIHJlZi5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd2F0Y2hJbnRlcm5hbCA9IHVzZUNhbGxiYWNrKChmaWVsZE5hbWVzLCBkZWZhdWx0VmFsdWUsIHdhdGNoSWQpID0+IHtcclxuICAgICAgICBjb25zdCB3YXRjaEZpZWxkcyA9IHdhdGNoSWRcclxuICAgICAgICAgICAgPyB1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50W3dhdGNoSWRdXHJcbiAgICAgICAgICAgIDogd2F0Y2hGaWVsZHNSZWYuY3VycmVudDtcclxuICAgICAgICBjb25zdCBjb21iaW5lZERlZmF1bHRWYWx1ZXMgPSBpc1VuZGVmaW5lZChkZWZhdWx0VmFsdWUpXHJcbiAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50XHJcbiAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWVzID0gZ2V0RmllbGRzVmFsdWVzKGZpZWxkc1JlZiwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLCBmYWxzZSwgZmllbGROYW1lcyk7XHJcbiAgICAgICAgaWYgKGlzU3RyaW5nKGZpZWxkTmFtZXMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhc3NpZ25XYXRjaEZpZWxkcyhmaWVsZFZhbHVlcywgZmllbGROYW1lcywgd2F0Y2hGaWVsZHMsIGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICAgICAgICAgID8gZ2V0KGNvbWJpbmVkRGVmYXVsdFZhbHVlcywgZmllbGROYW1lcylcclxuICAgICAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGROYW1lcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkTmFtZXMucmVkdWNlKChwcmV2aW91cywgbmFtZSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXMpLCB7IFtuYW1lXTogYXNzaWduV2F0Y2hGaWVsZHMoZmllbGRWYWx1ZXMsIG5hbWUsIHdhdGNoRmllbGRzLCBjb21iaW5lZERlZmF1bHRWYWx1ZXMpIH0pKSwge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc1dhdGNoQWxsUmVmLmN1cnJlbnQgPSBpc1VuZGVmaW5lZCh3YXRjaElkKTtcclxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtVG9OZXN0T2JqZWN0KCghaXNFbXB0eU9iamVjdChmaWVsZFZhbHVlcykgJiYgZmllbGRWYWx1ZXMpIHx8XHJcbiAgICAgICAgICAgIGNvbWJpbmVkRGVmYXVsdFZhbHVlcyk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBmdW5jdGlvbiB3YXRjaChmaWVsZE5hbWVzLCBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gd2F0Y2hJbnRlcm5hbChmaWVsZE5hbWVzLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdW5yZWdpc3RlcihuYW1lKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZE5hbWUgb2YgQXJyYXkuaXNBcnJheShuYW1lKSA/IG5hbWUgOiBbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmKGZpZWxkc1JlZi5jdXJyZW50W2ZpZWxkTmFtZV0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGRSZWYocmVmLCB2YWxpZGF0ZU9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICghcmVmLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oJ/Cfk4sgRmllbGQgaXMgbWlzc2luZyBgbmFtZWAgYXR0cmlidXRlJywgcmVmLCBgaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSN1c2VGb3JtYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50LmhhcyhyZWYubmFtZS5zcGxpdCgvXFxbXFxkK1xcXSQvKVswXSkgJiZcclxuICAgICAgICAgICAgICAgICFSZWdFeHAoYF4ke3JlZi5uYW1lLnNwbGl0KC9cXFtcXGQrXFxdJC8pWzBdfVtcXFxcZCtdLlxcXFx3K2BcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxbL2csICdcXFxcWycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXS9nLCAnXFxcXF0nKSkudGVzdChyZWYubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oJ/Cfk4sgYG5hbWVgIHByb3Agc2hvdWxkIGJlIGluIG9iamVjdCBzaGFwZTogbmFtZT1cInRlc3RbaW5kZXhdLm5hbWVcIicsIHJlZiwgJ2h0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlRmllbGRBcnJheScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdHlwZSwgdmFsdWUgfSA9IHJlZjtcclxuICAgICAgICBjb25zdCBmaWVsZFJlZkFuZFZhbGlkYXRpb25PcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IHJlZiB9LCB2YWxpZGF0ZU9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IGZpZWxkc1JlZi5jdXJyZW50O1xyXG4gICAgICAgIGNvbnN0IGlzUmFkaW9PckNoZWNrYm94ID0gaXNSYWRpb09yQ2hlY2tib3hGdW5jdGlvbihyZWYpO1xyXG4gICAgICAgIGNvbnN0IGlzRmllbGRBcnJheSA9IGlzTmFtZUluRmllbGRBcnJheShmaWVsZEFycmF5TmFtZXNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgY29uc3QgY29tcGFyZVJlZiA9IChjdXJyZW50UmVmKSA9PiBpc1dlYiAmJiAoIWlzSFRNTEVsZW1lbnQocmVmKSB8fCBjdXJyZW50UmVmID09PSByZWYpO1xyXG4gICAgICAgIGxldCBmaWVsZCA9IGZpZWxkc1tuYW1lXTtcclxuICAgICAgICBsZXQgaXNFbXB0eURlZmF1bHRWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICBpZiAoZmllbGQgJiZcclxuICAgICAgICAgICAgKGlzUmFkaW9PckNoZWNrYm94XHJcbiAgICAgICAgICAgICAgICA/IEFycmF5LmlzQXJyYXkoZmllbGQub3B0aW9ucykgJiZcclxuICAgICAgICAgICAgICAgICAgICBjb21wYWN0KGZpZWxkLm9wdGlvbnMpLmZpbmQoKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IG9wdGlvbi5yZWYudmFsdWUgJiYgY29tcGFyZVJlZihvcHRpb24ucmVmKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgOiBjb21wYXJlUmVmKGZpZWxkLnJlZikpKSB7XHJcbiAgICAgICAgICAgIGZpZWxkc1tuYW1lXSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmllbGQpLCB2YWxpZGF0ZU9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGZpZWxkID0gaXNSYWRpb09yQ2hlY2tib3hcclxuICAgICAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih7IG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29tcGFjdCgoZmllbGQgJiYgZmllbGQub3B0aW9ucykgfHwgW10pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSwgcmVmOiB7IHR5cGUsIG5hbWUgfSB9LCB2YWxpZGF0ZU9wdGlvbnMpIDogT2JqZWN0LmFzc2lnbih7fSwgZmllbGRSZWZBbmRWYWxpZGF0aW9uT3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaWVsZCA9IGZpZWxkUmVmQW5kVmFsaWRhdGlvbk9wdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZWxkc1tuYW1lXSA9IGZpZWxkO1xyXG4gICAgICAgIGNvbnN0IGlzRW1wdHlVbm1vdW50RmllbGRzID0gaXNVbmRlZmluZWQoZ2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lKSk7XHJcbiAgICAgICAgaWYgKCFpc0VtcHR5T2JqZWN0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCkgfHwgIWlzRW1wdHlVbm1vdW50RmllbGRzKSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IGdldChpc0VtcHR5VW5tb3VudEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgPyBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnRcclxuICAgICAgICAgICAgICAgIDogc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgICAgICBpc0VtcHR5RGVmYXVsdFZhbHVlID0gaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKCFpc0VtcHR5RGVmYXVsdFZhbHVlICYmICFpc0ZpZWxkQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUobmFtZSwgZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzRW1wdHlPYmplY3QodmFsaWRhdGVPcHRpb25zKSkge1xyXG4gICAgICAgICAgICBzZXQoZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudCwgbmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmICghaXNPblN1Ym1pdCAmJiByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGaWVsZChmaWVsZHNSZWYsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBmaWVsZCwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmKS50aGVuKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzRm9ybUlzVmFsaWQgPSBmb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRW1wdHlPYmplY3QoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2V0KHZhbGlkRmllbGRzUmVmLmN1cnJlbnQsIG5hbWUsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdW5zZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzRm9ybUlzVmFsaWQgIT09IGlzRW1wdHlPYmplY3QoZXJyb3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGVmYXVsdFZhbHVlc0F0UmVuZGVyUmVmLmN1cnJlbnRbbmFtZV0gJiZcclxuICAgICAgICAgICAgIShpc0ZpZWxkQXJyYXkgJiYgaXNFbXB0eURlZmF1bHRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLCBuYW1lLCBzaGFsbG93RmllbGRzU3RhdGVSZWYpO1xyXG4gICAgICAgICAgICBzZXQoZGVmYXVsdFZhbHVlc0F0UmVuZGVyUmVmLmN1cnJlbnQsIG5hbWUsIGlzRW1wdHlEZWZhdWx0VmFsdWVcclxuICAgICAgICAgICAgICAgID8gaXNPYmplY3QoZmllbGRWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIGZpZWxkVmFsdWUpIDogZmllbGRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgICAgICAhaXNGaWVsZEFycmF5ICYmIHVuc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUpIHtcclxuICAgICAgICAgICAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoaXNSYWRpb09yQ2hlY2tib3ggJiYgZmllbGQub3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgPyBmaWVsZC5vcHRpb25zW2ZpZWxkLm9wdGlvbnMubGVuZ3RoIC0gMV1cclxuICAgICAgICAgICAgICAgIDogZmllbGQsIGlzUmFkaW9PckNoZWNrYm94IHx8IGlzU2VsZWN0SW5wdXQocmVmKSwgaGFuZGxlQ2hhbmdlUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyKHJlZk9yVmFsaWRhdGlvbk9wdGlvbnMsIHJ1bGVzKSB7XHJcbiAgICAgICAgaWYgKCFpc1dpbmRvd1VuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcocmVmT3JWYWxpZGF0aW9uT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRmllbGRSZWYoeyBuYW1lOiByZWZPclZhbGlkYXRpb25PcHRpb25zIH0sIHJ1bGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChyZWZPclZhbGlkYXRpb25PcHRpb25zKSAmJlxyXG4gICAgICAgICAgICAgICAgJ25hbWUnIGluIHJlZk9yVmFsaWRhdGlvbk9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRmllbGRSZWYocmVmT3JWYWxpZGF0aW9uT3B0aW9ucywgcnVsZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZWYpID0+IHJlZiAmJiByZWdpc3RlckZpZWxkUmVmKHJlZiwgcmVmT3JWYWxpZGF0aW9uT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSB1c2VDYWxsYmFjaygob25WYWxpZCwgb25JbnZhbGlkKSA9PiBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlICYmIGUucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZpZWxkRXJyb3JzID0ge307XHJcbiAgICAgICAgbGV0IGZpZWxkVmFsdWVzID0gc2V0RmllbGRBcnJheURlZmF1bHRWYWx1ZXMoZ2V0RmllbGRzVmFsdWVzKGZpZWxkc1JlZiwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLCB0cnVlKSk7XHJcbiAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzU3VibWl0dGluZyAmJlxyXG4gICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAocmVzb2x2ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvcnMsIHZhbHVlcyB9ID0gYXdhaXQgcmVzb2x2ZXJSZWYuY3VycmVudChmaWVsZFZhbHVlcywgY29udGV4dFJlZi5jdXJyZW50LCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMgPSBmaWVsZEVycm9ycyA9IGVycm9ycztcclxuICAgICAgICAgICAgICAgIGZpZWxkVmFsdWVzID0gdmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBPYmplY3QudmFsdWVzKGZpZWxkc1JlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHJlZjogeyBuYW1lIH0sIH0gPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRFcnJvciA9IGF3YWl0IHZhbGlkYXRlRmllbGQoZmllbGRzUmVmLCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZmllbGQsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZEVycm9yW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQoZmllbGRFcnJvcnMsIG5hbWUsIGZpZWxkRXJyb3JbbmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5zZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZ2V0KGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0KHZhbGlkRmllbGRzUmVmLmN1cnJlbnQsIG5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc0VtcHR5T2JqZWN0KGZpZWxkRXJyb3JzKSAmJlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzKS5ldmVyeSgobmFtZSkgPT4gbmFtZSBpbiBmaWVsZHNSZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IG9uVmFsaWQoZmllbGRWYWx1ZXMsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMpLCBmaWVsZEVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICBvbkludmFsaWQgJiYgKGF3YWl0IG9uSW52YWxpZChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIGUpKTtcclxuICAgICAgICAgICAgICAgIHNob3VsZEZvY3VzRXJyb3IgJiZcclxuICAgICAgICAgICAgICAgICAgICBmb2N1c09uRXJyb3JGaWVsZChmaWVsZHNSZWYuY3VycmVudCwgZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0U3VjY2Vzc2Z1bDogaXNFbXB0eU9iamVjdChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JzOiBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsXHJcbiAgICAgICAgICAgICAgICBzdWJtaXRDb3VudDogZm9ybVN0YXRlUmVmLmN1cnJlbnQuc3VibWl0Q291bnQgKyAxLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2hvdWxkRm9jdXNFcnJvciwgaXNWYWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWFdKTtcclxuICAgIGNvbnN0IHJlc2V0UmVmcyA9ICh7IGVycm9ycywgaXNEaXJ0eSwgaXNTdWJtaXR0ZWQsIHRvdWNoZWQsIGlzVmFsaWQsIHN1Ym1pdENvdW50LCBkaXJ0eUZpZWxkcywgfSkgPT4ge1xyXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB2YWxpZEZpZWxkc1JlZi5jdXJyZW50ID0ge307XHJcbiAgICAgICAgICAgIGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlc0F0UmVuZGVyUmVmLmN1cnJlbnQgPSB7fTtcclxuICAgICAgICBmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50ID0ge307XHJcbiAgICAgICAgd2F0Y2hGaWVsZHNSZWYuY3VycmVudCA9IG5ldyBTZXQoKTtcclxuICAgICAgICBpc1dhdGNoQWxsUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICBzdWJtaXRDb3VudDogc3VibWl0Q291bnQgPyBmb3JtU3RhdGVSZWYuY3VycmVudC5zdWJtaXRDb3VudCA6IDAsXHJcbiAgICAgICAgICAgIGlzRGlydHk6IGlzRGlydHkgPyBmb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5IDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzU3VibWl0dGVkOiBpc1N1Ym1pdHRlZCA/IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzU3VibWl0dGVkIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzVmFsaWQ6IGlzVmFsaWQgPyBmb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpcnR5RmllbGRzOiBkaXJ0eUZpZWxkcyA/IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzIDoge30sXHJcbiAgICAgICAgICAgIHRvdWNoZWQ6IHRvdWNoZWQgPyBmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkIDoge30sXHJcbiAgICAgICAgICAgIGVycm9yczogZXJyb3JzID8gZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzIDoge30sXHJcbiAgICAgICAgICAgIGlzU3VibWl0dGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzU3VibWl0U3VjY2Vzc2Z1bDogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzZXQgPSAodmFsdWVzLCBvbWl0UmVzZXRTdGF0ZSA9IHt9KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzV2ViKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LnZhbHVlcyhmaWVsZHNSZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVmLCBvcHRpb25zIH0gPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFJlZiA9IGlzUmFkaW9PckNoZWNrYm94RnVuY3Rpb24ocmVmKSAmJiBBcnJheS5pc0FycmF5KG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gb3B0aW9uc1swXS5yZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiByZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSFRNTEVsZW1lbnQoaW5wdXRSZWYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFJlZi5jbG9zZXN0KCdmb3JtJykucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChfYSkgeyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZWxkc1JlZi5jdXJyZW50ID0ge307XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50ID0gY2xvbmVPYmplY3QodmFsdWVzIHx8IGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgaXNXZWIpO1xyXG4gICAgICAgIHZhbHVlcyAmJiByZW5kZXJXYXRjaGVkSW5wdXRzKCcnKTtcclxuICAgICAgICBPYmplY3QudmFsdWVzKHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLmN1cnJlbnQpLmZvckVhY2goKHJlc2V0RmllbGRBcnJheSkgPT4gaXNGdW5jdGlvbihyZXNldEZpZWxkQXJyYXkpICYmIHJlc2V0RmllbGRBcnJheSgpKTtcclxuICAgICAgICBzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCA9IHNob3VsZFVucmVnaXN0ZXJcclxuICAgICAgICAgICAgPyB7fVxyXG4gICAgICAgICAgICA6IGNsb25lT2JqZWN0KHZhbHVlcywgaXNXZWIpIHx8IHt9O1xyXG4gICAgICAgIHJlc2V0UmVmcyhvbWl0UmVzZXRTdGF0ZSk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpc1VuTW91bnQuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIHJlc29sdmVyICYmIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkICYmIHZhbGlkYXRlUmVzb2x2ZXIoKTtcclxuICAgICAgICBvYnNlcnZlclJlZi5jdXJyZW50ID1cclxuICAgICAgICAgICAgb2JzZXJ2ZXJSZWYuY3VycmVudCB8fCAhaXNXZWJcclxuICAgICAgICAgICAgICAgID8gb2JzZXJ2ZXJSZWYuY3VycmVudFxyXG4gICAgICAgICAgICAgICAgOiBvbkRvbVJlbW92ZShmaWVsZHNSZWYsIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lckFuZFJlZik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaXNVbk1vdW50LmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICBvYnNlcnZlclJlZi5jdXJyZW50ICYmIG9ic2VydmVyUmVmLmN1cnJlbnQuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCA9IHt9O1xyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZmllbGRzUmVmLmN1cnJlbnQpLmZvckVhY2goKGZpZWxkKSA9PiByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJBbmRSZWYoZmllbGQsIHRydWUpKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3JlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lckFuZFJlZl0pO1xyXG4gICAgaWYgKCFyZXNvbHZlciAmJiByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCkge1xyXG4gICAgICAgIGZvcm1TdGF0ZS5pc1ZhbGlkID1cclxuICAgICAgICAgICAgZGVlcEVxdWFsKHZhbGlkRmllbGRzUmVmLmN1cnJlbnQsIGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQpICYmXHJcbiAgICAgICAgICAgICAgICBpc0VtcHR5T2JqZWN0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb21tb25Qcm9wcyA9IHtcclxuICAgICAgICB0cmlnZ2VyLFxyXG4gICAgICAgIHNldFZhbHVlOiB1c2VDYWxsYmFjayhzZXRWYWx1ZSwgW3NldEludGVybmFsVmFsdWUsIHRyaWdnZXJdKSxcclxuICAgICAgICBnZXRWYWx1ZXM6IHVzZUNhbGxiYWNrKGdldFZhbHVlcywgW10pLFxyXG4gICAgICAgIHJlZ2lzdGVyOiB1c2VDYWxsYmFjayhyZWdpc3RlciwgW2RlZmF1bHRWYWx1ZXNSZWYuY3VycmVudF0pLFxyXG4gICAgICAgIHVucmVnaXN0ZXI6IHVzZUNhbGxiYWNrKHVucmVnaXN0ZXIsIFtdKSxcclxuICAgIH07XHJcbiAgICBjb25zdCBjb250cm9sID0gT2JqZWN0LmFzc2lnbih7IHVwZGF0ZVdhdGNoZWRWYWx1ZSxcclxuICAgICAgICBzaG91bGRVbnJlZ2lzdGVyLFxyXG4gICAgICAgIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lcixcclxuICAgICAgICB3YXRjaEludGVybmFsLCBtb2RlOiBtb2RlUmVmLmN1cnJlbnQsIHJlVmFsaWRhdGVNb2RlOiB7XHJcbiAgICAgICAgICAgIGlzUmVWYWxpZGF0ZU9uQmx1cixcclxuICAgICAgICAgICAgaXNSZVZhbGlkYXRlT25DaGFuZ2UsXHJcbiAgICAgICAgfSwgZmllbGRzUmVmLFxyXG4gICAgICAgIHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLFxyXG4gICAgICAgIHVzZVdhdGNoRmllbGRzUmVmLFxyXG4gICAgICAgIHVzZVdhdGNoUmVuZGVyRnVuY3Rpb25zUmVmLFxyXG4gICAgICAgIGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLFxyXG4gICAgICAgIHZhbGlkRmllbGRzUmVmLFxyXG4gICAgICAgIGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLFxyXG4gICAgICAgIGZpZWxkQXJyYXlOYW1lc1JlZixcclxuICAgICAgICByZWFkRm9ybVN0YXRlUmVmLFxyXG4gICAgICAgIGZvcm1TdGF0ZVJlZixcclxuICAgICAgICBkZWZhdWx0VmFsdWVzUmVmLFxyXG4gICAgICAgIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZixcclxuICAgICAgICB1cGRhdGVGb3JtU3RhdGUsIHZhbGlkYXRlUmVzb2x2ZXI6IHJlc29sdmVyID8gdmFsaWRhdGVSZXNvbHZlciA6IHVuZGVmaW5lZCB9LCBjb21tb25Qcm9wcyk7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHdhdGNoLFxyXG4gICAgICAgIGNvbnRyb2wsIGZvcm1TdGF0ZTogaXNQcm94eUVuYWJsZWRcclxuICAgICAgICAgICAgPyBuZXcgUHJveHkoZm9ybVN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IChvYmosIHByb3ApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gJ2lzVmFsaWQnICYmIGlzT25TdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign8J+TiyBgZm9ybVN0YXRlLmlzVmFsaWRgIGlzIGFwcGxpY2FibGUgd2l0aCBgb25Ub3VjaGVkYCwgYG9uQ2hhbmdlYCBvciBgb25CbHVyYCBtb2RlLiBodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpI2Zvcm1TdGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wIGluIG9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnRbcHJvcF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgOiBmb3JtU3RhdGUsIGhhbmRsZVN1Ym1pdCwgcmVzZXQ6IHVzZUNhbGxiYWNrKHJlc2V0LCBbXSksIGNsZWFyRXJyb3JzOiB1c2VDYWxsYmFjayhjbGVhckVycm9ycywgW10pLCBzZXRFcnJvcjogdXNlQ2FsbGJhY2soc2V0RXJyb3IsIFtdKSwgZXJyb3JzOiBmb3JtU3RhdGUuZXJyb3JzIH0sIGNvbW1vblByb3BzKTtcclxufVxuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XG5cbmNvbnN0IEZvcm1Db250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuRm9ybUNvbnRleHQuZGlzcGxheU5hbWUgPSAnUkhGQ29udGV4dCc7XHJcbmNvbnN0IHVzZUZvcm1Db250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChGb3JtQ29udGV4dCk7XHJcbmNvbnN0IEZvcm1Qcm92aWRlciA9IChfYSkgPT4ge1xyXG4gICAgdmFyIHsgY2hpbGRyZW4gfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2hpbGRyZW5cIl0pO1xyXG4gICAgcmV0dXJuIChjcmVhdGVFbGVtZW50KEZvcm1Db250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykgfSwgY2hpbGRyZW4pKTtcclxufTtcblxudmFyIGdlbmVyYXRlSWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkID0gdHlwZW9mIHBlcmZvcm1hbmNlID09PSBVTkRFRklORUQgPyBEYXRlLm5vdygpIDogcGVyZm9ybWFuY2Uubm93KCkgKiAxMDAwO1xyXG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICBjb25zdCByID0gKE1hdGgucmFuZG9tKCkgKiAxNiArIGQpICUgMTYgfCAwO1xyXG4gICAgICAgIHJldHVybiAoYyA9PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4KS50b1N0cmluZygxNik7XHJcbiAgICB9KTtcclxufTtcblxuY29uc3QgcmVtb3ZlQXQgPSAoZGF0YSwgaW5kZXgpID0+IFtcclxuICAgIC4uLmRhdGEuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgLi4uZGF0YS5zbGljZShpbmRleCArIDEpLFxyXG5dO1xyXG5mdW5jdGlvbiByZW1vdmVBdEluZGV4ZXMoZGF0YSwgaW5kZXgpIHtcclxuICAgIGxldCBrID0gLTE7XHJcbiAgICB3aGlsZSAoKytrIDwgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICBpZiAoaW5kZXguaW5kZXhPZihrKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2tdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb21wYWN0KGRhdGEpO1xyXG59XHJcbnZhciByZW1vdmVBcnJheUF0ID0gKGRhdGEsIGluZGV4KSA9PiBpc1VuZGVmaW5lZChpbmRleClcclxuICAgID8gW11cclxuICAgIDogQXJyYXkuaXNBcnJheShpbmRleClcclxuICAgICAgICA/IHJlbW92ZUF0SW5kZXhlcyhkYXRhLCBpbmRleClcclxuICAgICAgICA6IHJlbW92ZUF0KGRhdGEsIGluZGV4KTtcblxudmFyIG1vdmVBcnJheUF0ID0gKGRhdGEsIGZyb20sIHRvKSA9PiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG4gICAgICAgIGlmIChpc1VuZGVmaW5lZChkYXRhW3RvXSkpIHtcclxuICAgICAgICAgICAgZGF0YVt0b10gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEuc3BsaWNlKHRvLCAwLCBkYXRhLnNwbGljZShmcm9tLCAxKVswXSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn07XG5cbnZhciBzd2FwQXJyYXlBdCA9IChkYXRhLCBpbmRleEEsIGluZGV4QikgPT4ge1xyXG4gICAgY29uc3QgdGVtcCA9IFtkYXRhW2luZGV4Ql0sIGRhdGFbaW5kZXhBXV07XHJcbiAgICBkYXRhW2luZGV4QV0gPSB0ZW1wWzBdO1xyXG4gICAgZGF0YVtpbmRleEJdID0gdGVtcFsxXTtcclxufTtcblxuZnVuY3Rpb24gcHJlcGVuZChkYXRhLCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFsuLi4oQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZSB8fCB1bmRlZmluZWRdKSwgLi4uZGF0YV07XHJcbn1cblxuZnVuY3Rpb24gaW5zZXJ0KGRhdGEsIGluZGV4LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICAuLi5kYXRhLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICAuLi4oQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZSB8fCB1bmRlZmluZWRdKSxcclxuICAgICAgICAuLi5kYXRhLnNsaWNlKGluZGV4KSxcclxuICAgIF07XHJcbn1cblxudmFyIGZpbGxFbXB0eUFycmF5ID0gKHZhbHVlKSA9PiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IEFycmF5KHZhbHVlLmxlbmd0aCkuZmlsbCh1bmRlZmluZWQpIDogdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBtYXBWYWx1ZVRvQm9vbGVhbih2YWx1ZSkge1xyXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgIGNvbnN0IG9iamVjdCA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIG9iamVjdFtrZXldID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtvYmplY3RdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFt0cnVlXTtcclxufVxyXG52YXIgZmlsbEJvb2xlYW5BcnJheSA9ICh2YWx1ZSkgPT4gKEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdKVxyXG4gICAgLm1hcChtYXBWYWx1ZVRvQm9vbGVhbilcclxuICAgIC5mbGF0KCk7XG5cbmNvbnN0IG1hcElkcyA9ICh2YWx1ZXMgPSBbXSwga2V5TmFtZSkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xyXG4gICAgICAgICAgICBpZiAoa2V5TmFtZSBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGDwn5OLIHVzZUZpZWxkQXJyYXkgZmllbGRWYWx1ZXMgY29udGFpbiB0aGUga2V5TmFtZSBcXGAke2tleU5hbWV9XFxgIHdoaWNoIGlzIHJlc2VydmVkIGZvciB1c2UgYnkgdXNlRmllbGRBcnJheS4gaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSN1c2VGaWVsZEFycmF5YCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZXMubWFwKCh2YWx1ZSkgPT4gKE9iamVjdC5hc3NpZ24oeyBba2V5TmFtZV06IGdlbmVyYXRlSWQoKSB9LCB2YWx1ZSkpKTtcclxufTtcclxuY29uc3QgdXNlRmllbGRBcnJheSA9ICh7IGNvbnRyb2wsIG5hbWUsIGtleU5hbWUgPSAnaWQnLCB9KSA9PiB7XHJcbiAgICBjb25zdCBtZXRob2RzID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKCFjb250cm9sICYmICFtZXRob2RzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign8J+TiyB1c2VGaWVsZEFycmF5IGlzIG1pc3NpbmcgYGNvbnRyb2xgIHByb3AuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlRmllbGRBcnJheScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGZvY3VzSW5kZXhSZWYgPSB1c2VSZWYoLTEpO1xyXG4gICAgY29uc3QgeyB1cGRhdGVXYXRjaGVkVmFsdWUsIHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLCBmaWVsZEFycmF5TmFtZXNSZWYsIGZpZWxkc1JlZiwgZGVmYXVsdFZhbHVlc1JlZiwgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyLCBmb3JtU3RhdGVSZWYsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZiwgdXBkYXRlRm9ybVN0YXRlLCByZWFkRm9ybVN0YXRlUmVmLCB2YWxpZEZpZWxkc1JlZiwgZmllbGRzV2l0aFZhbGlkYXRpb25SZWYsIGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLCB2YWxpZGF0ZVJlc29sdmVyLCBnZXRWYWx1ZXMsIHNob3VsZFVucmVnaXN0ZXIsIH0gPSBjb250cm9sIHx8IG1ldGhvZHMuY29udHJvbDtcclxuICAgIGNvbnN0IGZpZWxkQXJyYXlQYXJlbnROYW1lID0gZ2V0RmllbGRBcnJheVBhcmVudE5hbWUobmFtZSk7XHJcbiAgICBjb25zdCBtZW1vaXplZERlZmF1bHRWYWx1ZXMgPSB1c2VSZWYoW1xyXG4gICAgICAgIC4uLihnZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgZmllbGRBcnJheVBhcmVudE5hbWUpXHJcbiAgICAgICAgICAgID8gZ2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUsIFtdKVxyXG4gICAgICAgICAgICA6IGdldChzaG91bGRVbnJlZ2lzdGVyXHJcbiAgICAgICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudFxyXG4gICAgICAgICAgICAgICAgOiBzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSwgW10pKSxcclxuICAgIF0pO1xyXG4gICAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IHVzZVN0YXRlKG1hcElkcyhtZW1vaXplZERlZmF1bHRWYWx1ZXMuY3VycmVudCwga2V5TmFtZSkpO1xyXG4gICAgY29uc3QgYWxsRmllbGRzID0gdXNlUmVmKGZpZWxkcyk7XHJcbiAgICBjb25zdCBnZXRDdXJyZW50RmllbGRzVmFsdWVzID0gKCkgPT4gZ2V0KGdldFZhbHVlcygpLCBuYW1lLCBhbGxGaWVsZHMuY3VycmVudCkubWFwKChpdGVtLCBpbmRleCkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYWxsRmllbGRzLmN1cnJlbnRbaW5kZXhdKSwgaXRlbSkpKTtcclxuICAgIGFsbEZpZWxkcy5jdXJyZW50ID0gZmllbGRzO1xyXG4gICAgZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQuYWRkKG5hbWUpO1xyXG4gICAgaWYgKCFnZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgZmllbGRBcnJheVBhcmVudE5hbWUpKSB7XHJcbiAgICAgICAgc2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIGZpZWxkQXJyYXlQYXJlbnROYW1lLCBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBmaWVsZEFycmF5UGFyZW50TmFtZSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2V0RmllbGRBbmRWYWxpZFN0YXRlID0gKGZpZWxkc1ZhbHVlcykgPT4ge1xyXG4gICAgICAgIHNldEZpZWxkcyhmaWVsZHNWYWx1ZXMpO1xyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCAmJiB2YWxpZGF0ZVJlc29sdmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGdldFZhbHVlcygpO1xyXG4gICAgICAgICAgICBzZXQodmFsdWVzLCBuYW1lLCBmaWVsZHNWYWx1ZXMpO1xyXG4gICAgICAgICAgICB2YWxpZGF0ZVJlc29sdmVyKHZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldElzRGlydHlTdGF0ZSA9IChmbGFnT3JGaWVsZHMpID0+IChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNEaXJ0eSB8fFxyXG4gICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcykgJiZcclxuICAgICAgICAoaXNVbmRlZmluZWQoZmxhZ09yRmllbGRzKSB8fFxyXG4gICAgICAgICAgICAhZGVlcEVxdWFsKGZsYWdPckZpZWxkcy5tYXAoKF9hID0ge30pID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBfYiA9IGtleU5hbWUsIG9taXR0ZWQgPSBfYVtfYl0sIHJlc3QgPSBfX3Jlc3QoX2EsIFt0eXBlb2YgX2IgPT09IFwic3ltYm9sXCIgPyBfYiA6IF9iICsgXCJcIl0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3Q7XHJcbiAgICAgICAgICAgIH0pLCBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBbXSkpKTtcclxuICAgIGNvbnN0IHJlc2V0RmllbGRzID0gKCkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlzTWF0Y2hGaWVsZEFycmF5TmFtZShrZXksIG5hbWUpICYmXHJcbiAgICAgICAgICAgICAgICByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXIoZmllbGRzUmVmLmN1cnJlbnRba2V5XSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNsZWFudXAgPSAocmVmKSA9PiAhY29tcGFjdChnZXQocmVmLCBuYW1lLCBbXSkpLmxlbmd0aCAmJiB1bnNldChyZWYsIG5hbWUpO1xyXG4gICAgY29uc3QgdXBkYXRlRGlydHlGaWVsZHNXaXRoRGVmYXVsdFZhbHVlcyA9ICh1cGRhdGVkRmllbGRBcnJheVZhbHVlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRGaWVsZEFycmF5VmFsdWVzID0gZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSwgW10pO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZURpcnR5RmllbGRzQmFzZU9uRGVmYXVsdFZhbHVlcyA9IChiYXNlLCB0YXJnZXQpID0+IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYmFzZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lcktleSBpbiBiYXNlW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXJLZXkgIT09IGtleU5hbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCF0YXJnZXRba2V5XSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWJhc2Vba2V5XSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVtrZXldW2lubmVyS2V5XSAhPT0gdGFyZ2V0W2tleV1baW5uZXJLZXldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIGAke25hbWV9WyR7a2V5fV1gLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgYCR7bmFtZX1bJHtrZXl9XWAsIHt9KSksIHsgW2lubmVyS2V5XTogdHJ1ZSB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpIHtcclxuICAgICAgICAgICAgdXBkYXRlRGlydHlGaWVsZHNCYXNlT25EZWZhdWx0VmFsdWVzKGRlZmF1bHRGaWVsZEFycmF5VmFsdWVzLCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgICAgIHVwZGF0ZURpcnR5RmllbGRzQmFzZU9uRGVmYXVsdFZhbHVlcyh1cGRhdGVkRmllbGRBcnJheVZhbHVlcywgZGVmYXVsdEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBiYXRjaFN0YXRlVXBkYXRlID0gKG1ldGhvZCwgYXJncywgdXBkYXRlZEZpZWxkVmFsdWVzLCBpc0RpcnR5ID0gdHJ1ZSwgc2hvdWxkU2V0ID0gdHJ1ZSwgc2hvdWxkVXBkYXRlVmFsaWQgPSBmYWxzZSkgPT4ge1xyXG4gICAgICAgIGlmIChnZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IG1ldGhvZChnZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUpLCBhcmdzLmFyZ0EsIGFyZ3MuYXJnQik7XHJcbiAgICAgICAgICAgIHNob3VsZFNldCAmJiBzZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUsIG91dHB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gbWV0aG9kKGdldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKSwgYXJncy5hcmdBLCBhcmdzLmFyZ0IpO1xyXG4gICAgICAgICAgICBzaG91bGRTZXQgJiYgc2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUsIG91dHB1dCk7XHJcbiAgICAgICAgICAgIGNsZWFudXAoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIG5hbWUpKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBtZXRob2QoZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSksIGFyZ3MuYXJnQSwgYXJncy5hcmdCKTtcclxuICAgICAgICAgICAgc2hvdWxkU2V0ICYmIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIG5hbWUsIG91dHB1dCk7XHJcbiAgICAgICAgICAgIGNsZWFudXAoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkICYmXHJcbiAgICAgICAgICAgIGdldChmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkLCBuYW1lKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBtZXRob2QoZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQsIG5hbWUpLCBhcmdzLmFyZ0EsIGFyZ3MuYXJnQik7XHJcbiAgICAgICAgICAgIHNob3VsZFNldCAmJiBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCwgbmFtZSwgb3V0cHV0KTtcclxuICAgICAgICAgICAgY2xlYW51cChmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcyB8fFxyXG4gICAgICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNEaXJ0eSkge1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBtZXRob2QoZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBuYW1lLCBbXSksIGFyZ3MuYXJnQywgYXJncy5hcmdEKTtcclxuICAgICAgICAgICAgc2hvdWxkU2V0ICYmIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgb3V0cHV0KTtcclxuICAgICAgICAgICAgdXBkYXRlRGlydHlGaWVsZHNXaXRoRGVmYXVsdFZhbHVlcyh1cGRhdGVkRmllbGRWYWx1ZXMpO1xyXG4gICAgICAgICAgICBjbGVhbnVwKGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZVZhbGlkICYmXHJcbiAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkICYmXHJcbiAgICAgICAgICAgICF2YWxpZGF0ZVJlc29sdmVyKSB7XHJcbiAgICAgICAgICAgIHNldCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBuYW1lLCBtZXRob2QoZ2V0KHZhbGlkRmllbGRzUmVmLmN1cnJlbnQsIG5hbWUsIFtdKSwgYXJncy5hcmdBKSk7XHJcbiAgICAgICAgICAgIGNsZWFudXAodmFsaWRGaWVsZHNSZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgIHNldChmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LCBuYW1lLCBtZXRob2QoZ2V0KGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQsIG5hbWUsIFtdKSwgYXJncy5hcmdBKSk7XHJcbiAgICAgICAgICAgIGNsZWFudXAoZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgIGVycm9yczogZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLFxyXG4gICAgICAgICAgICBkaXJ0eUZpZWxkczogZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsXHJcbiAgICAgICAgICAgIGlzRGlydHksXHJcbiAgICAgICAgICAgIHRvdWNoZWQ6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgYXBwZW5kID0gKHZhbHVlLCBzaG91bGRGb2N1cyA9IHRydWUpID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVGb3JtVmFsdWVzID0gW1xyXG4gICAgICAgICAgICAuLi5hbGxGaWVsZHMuY3VycmVudCxcclxuICAgICAgICAgICAgLi4ubWFwSWRzKEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdLCBrZXlOYW1lKSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIHNldEZpZWxkQW5kVmFsaWRTdGF0ZSh1cGRhdGVGb3JtVmFsdWVzKTtcclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzIHx8XHJcbiAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5KSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZURpcnR5RmllbGRzV2l0aERlZmF1bHRWYWx1ZXModXBkYXRlRm9ybVZhbHVlcyk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc0RpcnR5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlydHlGaWVsZHM6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgIXNob3VsZFVucmVnaXN0ZXIgJiZcclxuICAgICAgICAgICAgc2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lLCBbXHJcbiAgICAgICAgICAgICAgICAuLi4oc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnRbbmFtZV0gfHwgW10pLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIGZvY3VzSW5kZXhSZWYuY3VycmVudCA9IHNob3VsZEZvY3VzID8gYWxsRmllbGRzLmN1cnJlbnQubGVuZ3RoIDogLTE7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJlcGVuZCQxID0gKHZhbHVlLCBzaG91bGRGb2N1cyA9IHRydWUpID0+IHtcclxuICAgICAgICBjb25zdCBlbXB0eUFycmF5ID0gZmlsbEVtcHR5QXJyYXkodmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzID0gcHJlcGVuZChnZXRDdXJyZW50RmllbGRzVmFsdWVzKCksIG1hcElkcyhBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSwga2V5TmFtZSkpO1xyXG4gICAgICAgIHNldEZpZWxkQW5kVmFsaWRTdGF0ZSh1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgcmVzZXRGaWVsZHMoKTtcclxuICAgICAgICBiYXRjaFN0YXRlVXBkYXRlKHByZXBlbmQsIHtcclxuICAgICAgICAgICAgYXJnQTogZW1wdHlBcnJheSxcclxuICAgICAgICAgICAgYXJnQzogZmlsbEJvb2xlYW5BcnJheSh2YWx1ZSksXHJcbiAgICAgICAgfSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIGZvY3VzSW5kZXhSZWYuY3VycmVudCA9IHNob3VsZEZvY3VzID8gMCA6IC0xO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbW92ZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWVzID0gZ2V0Q3VycmVudEZpZWxkc1ZhbHVlcygpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWVsZFZhbHVlcyA9IHJlbW92ZUFycmF5QXQoZmllbGRWYWx1ZXMsIGluZGV4KTtcclxuICAgICAgICBzZXRGaWVsZEFuZFZhbGlkU3RhdGUodXBkYXRlZEZpZWxkVmFsdWVzKTtcclxuICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgIGJhdGNoU3RhdGVVcGRhdGUocmVtb3ZlQXJyYXlBdCwge1xyXG4gICAgICAgICAgICBhcmdBOiBpbmRleCxcclxuICAgICAgICAgICAgYXJnQzogaW5kZXgsXHJcbiAgICAgICAgfSwgdXBkYXRlZEZpZWxkVmFsdWVzLCBnZXRJc0RpcnR5U3RhdGUocmVtb3ZlQXJyYXlBdChmaWVsZFZhbHVlcywgaW5kZXgpKSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaW5zZXJ0JDEgPSAoaW5kZXgsIHZhbHVlLCBzaG91bGRGb2N1cyA9IHRydWUpID0+IHtcclxuICAgICAgICBjb25zdCBlbXB0eUFycmF5ID0gZmlsbEVtcHR5QXJyYXkodmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWVzID0gZ2V0Q3VycmVudEZpZWxkc1ZhbHVlcygpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzID0gaW5zZXJ0KGZpZWxkVmFsdWVzLCBpbmRleCwgbWFwSWRzKEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdLCBrZXlOYW1lKSk7XHJcbiAgICAgICAgc2V0RmllbGRBbmRWYWxpZFN0YXRlKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgIGJhdGNoU3RhdGVVcGRhdGUoaW5zZXJ0LCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGluZGV4LFxyXG4gICAgICAgICAgICBhcmdCOiBlbXB0eUFycmF5LFxyXG4gICAgICAgICAgICBhcmdDOiBpbmRleCxcclxuICAgICAgICAgICAgYXJnRDogZmlsbEJvb2xlYW5BcnJheSh2YWx1ZSksXHJcbiAgICAgICAgfSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMsIGdldElzRGlydHlTdGF0ZShpbnNlcnQoZmllbGRWYWx1ZXMsIGluZGV4KSkpO1xyXG4gICAgICAgIGZvY3VzSW5kZXhSZWYuY3VycmVudCA9IHNob3VsZEZvY3VzID8gaW5kZXggOiAtMTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzd2FwID0gKGluZGV4QSwgaW5kZXhCKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBnZXRDdXJyZW50RmllbGRzVmFsdWVzKCk7XHJcbiAgICAgICAgc3dhcEFycmF5QXQoZmllbGRWYWx1ZXMsIGluZGV4QSwgaW5kZXhCKTtcclxuICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgIHNldEZpZWxkQW5kVmFsaWRTdGF0ZShbLi4uZmllbGRWYWx1ZXNdKTtcclxuICAgICAgICBiYXRjaFN0YXRlVXBkYXRlKHN3YXBBcnJheUF0LCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGluZGV4QSxcclxuICAgICAgICAgICAgYXJnQjogaW5kZXhCLFxyXG4gICAgICAgICAgICBhcmdDOiBpbmRleEEsXHJcbiAgICAgICAgICAgIGFyZ0Q6IGluZGV4QixcclxuICAgICAgICB9LCB1bmRlZmluZWQsIGdldElzRGlydHlTdGF0ZShmaWVsZFZhbHVlcyksIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBtb3ZlID0gKGZyb20sIHRvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBnZXRDdXJyZW50RmllbGRzVmFsdWVzKCk7XHJcbiAgICAgICAgbW92ZUFycmF5QXQoZmllbGRWYWx1ZXMsIGZyb20sIHRvKTtcclxuICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgIHNldEZpZWxkQW5kVmFsaWRTdGF0ZShbLi4uZmllbGRWYWx1ZXNdKTtcclxuICAgICAgICBiYXRjaFN0YXRlVXBkYXRlKG1vdmVBcnJheUF0LCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGZyb20sXHJcbiAgICAgICAgICAgIGFyZ0I6IHRvLFxyXG4gICAgICAgICAgICBhcmdDOiBmcm9tLFxyXG4gICAgICAgICAgICBhcmdEOiB0byxcclxuICAgICAgICB9LCB1bmRlZmluZWQsIGdldElzRGlydHlTdGF0ZShmaWVsZFZhbHVlcyksIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNldCA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgcmVzZXRGaWVsZHMoKTtcclxuICAgICAgICAhZGF0YSAmJiB1bnNldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICB1bnNldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgbWVtb2l6ZWREZWZhdWx0VmFsdWVzLmN1cnJlbnQgPSBnZXQoZGF0YSB8fCBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgIHNldEZpZWxkcyhtYXBJZHMobWVtb2l6ZWREZWZhdWx0VmFsdWVzLmN1cnJlbnQsIGtleU5hbWUpKTtcclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICghbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCfwn5OLIHVzZUZpZWxkQXJyYXkgaXMgbWlzc2luZyBgbmFtZWAgYXR0cmlidXRlLiBodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpI3VzZUZpZWxkQXJyYXknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWVzID0gZ2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgIGlmIChkZWZhdWx0VmFsdWVzICYmIGZpZWxkcy5sZW5ndGggPCBkZWZhdWx0VmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWVzLnBvcCgpO1xyXG4gICAgICAgICAgICBzZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSwgZGVmYXVsdFZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVwZGF0ZVdhdGNoZWRWYWx1ZShuYW1lKTtcclxuICAgICAgICBpZiAoZm9jdXNJbmRleFJlZi5jdXJyZW50ID4gLTEpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmllbGRzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzUmVmLmN1cnJlbnRba2V5XTtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChgJHtuYW1lfVske2ZvY3VzSW5kZXhSZWYuY3VycmVudH1dYCkgJiZcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5yZWYuZm9jdXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5yZWYuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb2N1c0luZGV4UmVmLmN1cnJlbnQgPSAtMTtcclxuICAgIH0sIFtmaWVsZHMsIG5hbWVdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzZXRGdW5jdGlvbnMgPSByZXNldEZpZWxkQXJyYXlGdW5jdGlvblJlZi5jdXJyZW50O1xyXG4gICAgICAgIGNvbnN0IGZpZWxkQXJyYXlOYW1lcyA9IGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50O1xyXG4gICAgICAgIGlmICghZ2V0RmllbGRBcnJheVBhcmVudE5hbWUobmFtZSkpIHtcclxuICAgICAgICAgICAgcmVzZXRGdW5jdGlvbnNbbmFtZV0gPSByZXNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgcmVzZXRGaWVsZHMoKTtcclxuICAgICAgICAgICAgZGVsZXRlIHJlc2V0RnVuY3Rpb25zW25hbWVdO1xyXG4gICAgICAgICAgICBmaWVsZEFycmF5TmFtZXMuZGVsZXRlKG5hbWUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN3YXA6IHVzZUNhbGxiYWNrKHN3YXAsIFtuYW1lXSksXHJcbiAgICAgICAgbW92ZTogdXNlQ2FsbGJhY2sobW92ZSwgW25hbWVdKSxcclxuICAgICAgICBwcmVwZW5kOiB1c2VDYWxsYmFjayhwcmVwZW5kJDEsIFtuYW1lXSksXHJcbiAgICAgICAgYXBwZW5kOiB1c2VDYWxsYmFjayhhcHBlbmQsIFtuYW1lXSksXHJcbiAgICAgICAgcmVtb3ZlOiB1c2VDYWxsYmFjayhyZW1vdmUsIFtuYW1lXSksXHJcbiAgICAgICAgaW5zZXJ0OiB1c2VDYWxsYmFjayhpbnNlcnQkMSwgW25hbWVdKSxcclxuICAgICAgICBmaWVsZHMsXHJcbiAgICB9O1xyXG59O1xuXG5mdW5jdGlvbiB1c2VXYXRjaCh7IGNvbnRyb2wsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgfSkge1xyXG4gICAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm1Db250ZXh0KCk7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIGlmICghY29udHJvbCAmJiAhbWV0aG9kcykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ/Cfk4sgdXNlV2F0Y2ggaXMgbWlzc2luZyBgY29udHJvbGAgcHJvcC4gaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSN1c2VXYXRjaCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHsgdXNlV2F0Y2hGaWVsZHNSZWYsIHVzZVdhdGNoUmVuZGVyRnVuY3Rpb25zUmVmLCB3YXRjaEludGVybmFsLCBkZWZhdWx0VmFsdWVzUmVmLCB9ID0gY29udHJvbCB8fCBtZXRob2RzLmNvbnRyb2w7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICA/IGlzU3RyaW5nKG5hbWUpXHJcbiAgICAgICAgICAgID8gZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSlcclxuICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KG5hbWUpXHJcbiAgICAgICAgICAgICAgICA/IG5hbWUucmVkdWNlKChwcmV2aW91cywgaW5wdXROYW1lKSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91cyksIHsgW2lucHV0TmFtZV06IGdldChkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIGlucHV0TmFtZSkgfSkpLCB7fSlcclxuICAgICAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50XHJcbiAgICAgICAgOiBkZWZhdWx0VmFsdWUpO1xyXG4gICAgY29uc3QgaWRSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZVJlZiA9IHVzZVJlZihkZWZhdWx0VmFsdWUpO1xyXG4gICAgY29uc3QgdXBkYXRlV2F0Y2hWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHdhdGNoSW50ZXJuYWwobmFtZSwgZGVmYXVsdFZhbHVlUmVmLmN1cnJlbnQsIGlkUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIHNldFZhbHVlKGlzT2JqZWN0KHZhbHVlKVxyXG4gICAgICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIHZhbHVlKSA6IEFycmF5LmlzQXJyYXkodmFsdWUpXHJcbiAgICAgICAgICAgID8gWy4uLnZhbHVlXVxyXG4gICAgICAgICAgICA6IHZhbHVlKTtcclxuICAgIH0sIFtzZXRWYWx1ZSwgd2F0Y2hJbnRlcm5hbCwgZGVmYXVsdFZhbHVlUmVmLCBuYW1lLCBpZFJlZl0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign8J+TiyB1c2VXYXRjaCBpcyBtaXNzaW5nIGBuYW1lYCBhdHRyaWJ1dGUuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlV2F0Y2gnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpZCA9IChpZFJlZi5jdXJyZW50ID0gZ2VuZXJhdGVJZCgpKTtcclxuICAgICAgICBjb25zdCB3YXRjaEZpZWxkc0hvb2tSZW5kZXIgPSB1c2VXYXRjaFJlbmRlckZ1bmN0aW9uc1JlZi5jdXJyZW50O1xyXG4gICAgICAgIGNvbnN0IHdhdGNoRmllbGRzSG9vayA9IHVzZVdhdGNoRmllbGRzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgd2F0Y2hGaWVsZHNIb29rW2lkXSA9IG5ldyBTZXQoKTtcclxuICAgICAgICB3YXRjaEZpZWxkc0hvb2tSZW5kZXJbaWRdID0gdXBkYXRlV2F0Y2hWYWx1ZTtcclxuICAgICAgICB3YXRjaEludGVybmFsKG5hbWUsIGRlZmF1bHRWYWx1ZVJlZi5jdXJyZW50LCBpZCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZGVsZXRlIHdhdGNoRmllbGRzSG9va1tpZF07XHJcbiAgICAgICAgICAgIGRlbGV0ZSB3YXRjaEZpZWxkc0hvb2tSZW5kZXJbaWRdO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICB1cGRhdGVXYXRjaFZhbHVlLFxyXG4gICAgICAgIHVzZVdhdGNoUmVuZGVyRnVuY3Rpb25zUmVmLFxyXG4gICAgICAgIHVzZVdhdGNoRmllbGRzUmVmLFxyXG4gICAgICAgIHdhdGNoSW50ZXJuYWwsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlUmVmLFxyXG4gICAgXSk7XHJcbiAgICByZXR1cm4gKGlzVW5kZWZpbmVkKHZhbHVlKSA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlKTtcclxufVxuXG52YXIgZ2V0SW5wdXRWYWx1ZSA9IChldmVudCkgPT4gaXNQcmltaXRpdmUoZXZlbnQpIHx8XHJcbiAgICAhaXNPYmplY3QoZXZlbnQudGFyZ2V0KSB8fFxyXG4gICAgKGlzT2JqZWN0KGV2ZW50LnRhcmdldCkgJiYgIWV2ZW50LnR5cGUpXHJcbiAgICA/IGV2ZW50XHJcbiAgICA6IGlzVW5kZWZpbmVkKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICA/IGV2ZW50LnRhcmdldC5jaGVja2VkXHJcbiAgICAgICAgOiBldmVudC50YXJnZXQudmFsdWU7XG5cbmNvbnN0IENvbnRyb2xsZXIgPSAoX2EpID0+IHtcclxuICAgIHZhciB7IG5hbWUsIHJ1bGVzLCBhcywgcmVuZGVyLCBkZWZhdWx0VmFsdWUsIGNvbnRyb2wsIG9uRm9jdXMgfSA9IF9hLCByZXN0ID0gX19yZXN0KF9hLCBbXCJuYW1lXCIsIFwicnVsZXNcIiwgXCJhc1wiLCBcInJlbmRlclwiLCBcImRlZmF1bHRWYWx1ZVwiLCBcImNvbnRyb2xcIiwgXCJvbkZvY3VzXCJdKTtcclxuICAgIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtQ29udGV4dCgpO1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICBpZiAoIWNvbnRyb2wgJiYgIW1ldGhvZHMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfwn5OLIENvbnRyb2xsZXIgaXMgbWlzc2luZyBgY29udHJvbGAgcHJvcC4gaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSNDb250cm9sbGVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgeyBkZWZhdWx0VmFsdWVzUmVmLCBzZXRWYWx1ZSwgcmVnaXN0ZXIsIHVucmVnaXN0ZXIsIHRyaWdnZXIsIG1vZGUsIHJlVmFsaWRhdGVNb2RlOiB7IGlzUmVWYWxpZGF0ZU9uQmx1ciwgaXNSZVZhbGlkYXRlT25DaGFuZ2UgfSwgZm9ybVN0YXRlUmVmOiB7IGN1cnJlbnQ6IHsgaXNTdWJtaXR0ZWQsIHRvdWNoZWQgfSwgfSwgdXBkYXRlRm9ybVN0YXRlLCByZWFkRm9ybVN0YXRlUmVmLCBmaWVsZHNSZWYsIGZpZWxkQXJyYXlOYW1lc1JlZiwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLCB9ID0gY29udHJvbCB8fCBtZXRob2RzLmNvbnRyb2w7XHJcbiAgICBjb25zdCBpc05vdEZpZWxkQXJyYXkgPSAhaXNOYW1lSW5GaWVsZEFycmF5KGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgIGNvbnN0IGdldEluaXRpYWxWYWx1ZSA9ICgpID0+ICFpc1VuZGVmaW5lZChnZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUpKSAmJiBpc05vdEZpZWxkQXJyYXlcclxuICAgICAgICA/IGdldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSlcclxuICAgICAgICA6IGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICAgICAgPyBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKVxyXG4gICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0SW5wdXRTdGF0ZVZhbHVlXSA9IHVzZVN0YXRlKGdldEluaXRpYWxWYWx1ZSgpKTtcclxuICAgIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmKHZhbHVlKTtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZih7XHJcbiAgICAgICAgZm9jdXM6ICgpID0+IG51bGwsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG9uRm9jdXNSZWYgPSB1c2VSZWYob25Gb2N1cyB8fCAoKCkgPT4gcmVmLmN1cnJlbnQuZm9jdXMoKSkpO1xyXG4gICAgY29uc3Qgc2hvdWxkVmFsaWRhdGUgPSAoaXNCbHVyRXZlbnQpID0+ICFza2lwVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHsgaXNCbHVyRXZlbnQsXHJcbiAgICAgICAgaXNSZVZhbGlkYXRlT25CbHVyLFxyXG4gICAgICAgIGlzUmVWYWxpZGF0ZU9uQ2hhbmdlLFxyXG4gICAgICAgIGlzU3VibWl0dGVkLCBpc1RvdWNoZWQ6ICEhZ2V0KHRvdWNoZWQsIG5hbWUpIH0sIG1vZGUpKTtcclxuICAgIGNvbnN0IGNvbW1vblRhc2sgPSAoW2V2ZW50XSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXRJbnB1dFZhbHVlKGV2ZW50KTtcclxuICAgICAgICBzZXRJbnB1dFN0YXRlVmFsdWUoZGF0YSk7XHJcbiAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGRhdGE7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVnaXN0ZXJGaWVsZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhbmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKCfwn5OLIEZpZWxkIGlzIG1pc3NpbmcgYG5hbWVgIHByb3AuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjQ29udHJvbGxlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmllbGRzUmVmLmN1cnJlbnRbbmFtZV0pIHtcclxuICAgICAgICAgICAgZmllbGRzUmVmLmN1cnJlbnRbbmFtZV0gPSBPYmplY3QuYXNzaWduKHsgcmVmOiBmaWVsZHNSZWYuY3VycmVudFtuYW1lXS5yZWYgfSwgcnVsZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVnaXN0ZXIoT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBmb2N1czogb25Gb2N1c1JlZi5jdXJyZW50LFxyXG4gICAgICAgICAgICB9LCBWQUxVRSwge1xyXG4gICAgICAgICAgICAgICAgc2V0KGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFN0YXRlVmFsdWUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVJlZi5jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksIHJ1bGVzKTtcclxuICAgICAgICAgICAgaWYgKGlzTm90RmllbGRBcnJheSAmJiAhZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHNldElucHV0U3RhdGVWYWx1ZShnZXRJbml0aWFsVmFsdWUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbcnVsZXMsIG5hbWUsIHJlZ2lzdGVyXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4gKCkgPT4gdW5yZWdpc3RlcihuYW1lKSwgW3VucmVnaXN0ZXIsIG5hbWVdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGDwn5OLICR7bmFtZX0gaXMgbWlzc2luZyBpbiB0aGUgJ2RlZmF1bHRWYWx1ZScgcHJvcCBvZiBlaXRoZXIgaXRzIENvbnRyb2xsZXIgKGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjQ29udHJvbGxlcikgb3IgdXNlRm9ybSAoaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSN1c2VGb3JtKWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgoIWFzICYmICFyZW5kZXIpIHx8IChhcyAmJiByZW5kZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYPCfk4sgJHtuYW1lfSBDb250cm9sbGVyIHNob3VsZCB1c2UgZWl0aGVyIHRoZSAnYXMnIG9yICdyZW5kZXInIHByb3AsIG5vdCBib3RoLiBodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpI0NvbnRyb2xsZXJgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzTm90RmllbGRBcnJheSAmJiBpc1VuZGVmaW5lZChkZWZhdWx0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ/Cfk4sgQ29udHJvbGxlciBpcyBtaXNzaW5nIGBkZWZhdWx0VmFsdWVgIHByb3Agd2hlbiB1c2luZyBgdXNlRmllbGRBcnJheWAuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjQ29udHJvbGxlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlZ2lzdGVyRmllbGQoKTtcclxuICAgIH0sIFtyZWdpc3RlckZpZWxkXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZmllbGRzUmVmLmN1cnJlbnRbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmVnaXN0ZXJGaWVsZCgpO1xyXG4gICAgICAgICAgICBpZiAoaXNOb3RGaWVsZEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJbnB1dFN0YXRlVmFsdWUoZ2V0SW5pdGlhbFZhbHVlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBvbkJsdXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkICYmICFnZXQodG91Y2hlZCwgbmFtZSkpIHtcclxuICAgICAgICAgICAgc2V0KHRvdWNoZWQsIG5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaG91bGRWYWxpZGF0ZSh0cnVlKSkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBvbkNoYW5nZSA9ICguLi5ldmVudCkgPT4gc2V0VmFsdWUobmFtZSwgY29tbW9uVGFzayhldmVudCksIHtcclxuICAgICAgICBzaG91bGRWYWxpZGF0ZTogc2hvdWxkVmFsaWRhdGUoKSxcclxuICAgICAgICBzaG91bGREaXJ0eTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY29tbW9uUHJvcHMgPSB7XHJcbiAgICAgICAgb25DaGFuZ2UsXHJcbiAgICAgICAgb25CbHVyLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgcmVmLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXN0KSwgY29tbW9uUHJvcHMpO1xyXG4gICAgcmV0dXJuIGFzXHJcbiAgICAgICAgPyBpc1ZhbGlkRWxlbWVudChhcylcclxuICAgICAgICAgICAgPyBjbG9uZUVsZW1lbnQoYXMsIHByb3BzKVxyXG4gICAgICAgICAgICA6IGNyZWF0ZUVsZW1lbnQoYXMsIHByb3BzKVxyXG4gICAgICAgIDogcmVuZGVyXHJcbiAgICAgICAgICAgID8gcmVuZGVyKGNvbW1vblByb3BzKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbn07XG5cbmV4cG9ydCB7IENvbnRyb2xsZXIsIEZvcm1Qcm92aWRlciwgYXBwZW5kRXJyb3JzLCBnZXQsIHRyYW5zZm9ybVRvTmVzdE9iamVjdCwgdXNlRmllbGRBcnJheSwgdXNlRm9ybSwgdXNlRm9ybUNvbnRleHQsIHVzZVdhdGNoIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LmpzXCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vY29tcG9uZW50cy9IZXJvL2luZGV4LmpzXCI7IFxuaW1wb3J0IEdhbWVUeXBlcyBmcm9tICcuLi9jb21wb25lbnRzL0dhbWVUeXBlcy9pbmRleC5qcydcbmltcG9ydCBEZXZpY2VzIGZyb20gXCIuLi9jb21wb25lbnRzL0RldmljZXMvaW5kZXguanNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBPdXJUZWFtIGZyb20gXCIuLi9jb21wb25lbnRzL091clRlYW0vaW5kZXguanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzXCI7XG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFjdEZvcm0vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZGlzcGxheT1zd2FwJ1xuICAgICAgICAgIHJlbD0nc3R5bGVzaGVldCdcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICA8SGVybyAvPlxuICAgICAgICA8R2FtZVR5cGVzIC8+XG4gICAgICAgIDxEZXZpY2VzIC8+XG4gICAgICAgIDxPdXJUZWFtIC8+XG4gICAgICAgIDxDb250YWN0Rm9ybSAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9