(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@platform/api/index", "@platform/base/index", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["@platform/template/index"] = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("react-dom"));
	else
		root["@platform/template/index"] = factory(root["React"], root["@platform/api/index"], root["@platform/base/index"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../../../../platform/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1918);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(85);
var core = __webpack_require__(58);
var ctx = __webpack_require__(318);
var hide = __webpack_require__(123);
var has = __webpack_require__(105);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(124);
var IE8_DOM_DEFINE = __webpack_require__(395);
var toPrimitive = __webpack_require__(319);
var dP = Object.defineProperty;

exports.f = __webpack_require__(77) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 103:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 104:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 105:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(320);
var defined = __webpack_require__(164);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(102);
var createDesc = __webpack_require__(142);
module.exports = __webpack_require__(77) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(103);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(649);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(397);
var enumBugKeys = __webpack_require__(324);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(164);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 164:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 165:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 167:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 168:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 1918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "itemCreator", function() { return /* reexport */ Item_itemCreator; });
__webpack_require__.d(__webpack_exports__, "ItemContext", function() { return /* reexport */ ItemContext; });
__webpack_require__.d(__webpack_exports__, "ItemProvider", function() { return /* reexport */ ItemProvider; });
__webpack_require__.d(__webpack_exports__, "hookFactory", function() { return /* reexport */ hookFactory; });
__webpack_require__.d(__webpack_exports__, "ArrayData", function() { return /* reexport */ Data_ArrayData; });
__webpack_require__.d(__webpack_exports__, "TreeData", function() { return /* reexport */ Data_TreeData; });
__webpack_require__.d(__webpack_exports__, "NormalMetaData", function() { return /* reexport */ NormalMetaData; });
__webpack_require__.d(__webpack_exports__, "NormalTreeData", function() { return /* reexport */ NormalTreeData; });
__webpack_require__.d(__webpack_exports__, "validate", function() { return /* reexport */ validate; });
__webpack_require__.d(__webpack_exports__, "Item", function() { return /* reexport */ Item_Item; });
__webpack_require__.d(__webpack_exports__, "BaseStore", function() { return /* reexport */ BaseStore_BaseStore; });
__webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return /* reexport */ BaseComponent; });

// EXTERNAL MODULE: external {"root":"React","var":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(0);
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_);

// EXTERNAL MODULE: external {"root":"ReactDOM","var":"ReactDOM","commonjs":"react-dom","commonjs2":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_ = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/omit.js/es/index.js
var es = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(5);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external "@platform/api/index"
var index_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@platform/base/index"
var base_index_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/platform/template/itemCreator.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Author: liyxt
 * @Date: 2020-04-27 16:07:57
 * @LastEditors: bbq
 * @LastEditTime: 2020-10-29 14:13:04
 * @Description: file content
 */




var Option = base_index_["Select"].Option;
var ReferLoader = base_index_["Refer"].ReferLoader;
var loginLanguage = Object(index_["getLangCode"])();

function resolveSelect(props) {
  var options = props.options,
      multiple = props.multiple,
      attrcode = props.attrcode;
  return {
    component: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Select"], {
      multiple: multiple,
      labelInValue: true,
      popData: {
        fieldid: "".concat(attrcode, "_select")
      }
    }, Array.isArray(options) ? options.map(function (_ref, i) {
      var display = _ref.display,
          value = _ref.value;
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Option, {
        value: value,
        key: i,
        title: display
      }, display);
    }) : []),
    componentValueToFieldValue: function componentValueToFieldValue(value) {
      if (multiple) {
        value = value || [];
        return {
          display: value.map(function (e) {
            return e.label;
          }).join(','),
          value: value.map(function (e) {
            return e.key;
          }).join(',')
        };
      } else {
        var _ref2 = value || {},
            key = _ref2.key,
            label = _ref2.label;

        return {
          display: label,
          value: key
        };
      }
    },
    fieldValueToComponentValue: function fieldValueToComponentValue(_ref3) {
      var display = _ref3.display,
          value = _ref3.value;

      if (multiple) {
        var splitValues = value ? value.split(',') : [],
            splitDisplays = display ? display.split(',') : [];
        return splitValues.map(function (value, i) {
          return {
            key: value,
            label: splitDisplays[i]
          };
        });
      } else {
        return {
          key: value,
          label: display
        };
      }
    },
    beforeEventTrigger: 'click',
    afterEventTrigger: multiple ? 'onBlur' : 'onChange',
    getDisplay: getDisplayCreator(props, 'display'),
    focusableElement: multiple ? 'input' : 'div.u-select-selection'
  };
}

function resolveDatepicker(Component, props) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var format = props.format,
      attrcode = props.attrcode,
      itemtype = props.itemtype;
  var _config$beforeEventTr = config.beforeEventTrigger,
      beforeEventTrigger = _config$beforeEventTr === void 0 ? 'click' : _config$beforeEventTr,
      _config$afterEventTri = config.afterEventTrigger,
      afterEventTrigger = _config$afterEventTri === void 0 ? 'onChange' : _config$afterEventTri;
  return {
    component: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Component, {
      format: format,
      fieldid: attrcode,
      autoTriggerChange: false
    }),
    beforeEventTrigger: beforeEventTrigger,
    afterEventTrigger: afterEventTrigger,
    getDisplay: function getDisplay() {
      var value = getDisplayCreator(props, 'value')();

      switch (itemtype) {
        case 'datetimepicker':
        case 'NCTZDatePickClientTime':
          value = Object(index_["changeTime"])(value, 'YYYY-MM-DD HH:mm:ss');
          break;

        case 'NCTZDatePickerStart':
        case 'NCTZDatePickerEnd':
        case 'NCTZDatePickClientHourTime':
        case 'datepicker':
          value = Object(index_["changeTime"])(value, 'YYYY-MM-DD');
          break;
      }

      switch (itemtype) {
        case 'NCTZDatePickerStart':
        case 'NCTZDatePickerEnd':
        case 'NCTZDatePickClientHourTime':
        case 'datePickerNoTimeZone':
        case 'datepicker':
          value = Object(index_["formatDatetime"])(value, 'date');
          break;

        case 'timepicker':
          value = Object(index_["formatDatetime"])(value, 'time');
          break;

        case 'datetimepicker':
        case 'NCTZDatePickClientTime':
          value = Object(index_["formatDatetime"])(value, 'datetime');
          break;
      }

      return value;
    } // focusableElement: 'div.DatePicker',

  };
}

function getDisplayCreator(props, defaultKeyToDisplay) {
  return function getDisplay() {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props,
        _ref4$whichKeyToDispl = _ref4.whichKeyToDisplay,
        whichKeyToDisplay = _ref4$whichKeyToDispl === void 0 ? defaultKeyToDisplay : _ref4$whichKeyToDispl,
        getFieldValue = _ref4.getFieldValue,
        attrcode = _ref4.attrcode;

    var fieldValue = getFieldValue({
      attrcode: attrcode
    });

    if (whichKeyToDisplay === 'auto') {
      return fieldValue.display === undefined || fieldValue.display === null ? fieldValue.value : fieldValue.display;
    } else {
      var _fieldValue$whichKeyT;

      return (_fieldValue$whichKeyT = fieldValue[whichKeyToDisplay]) !== null && _fieldValue$whichKeyT !== void 0 ? _fieldValue$whichKeyT : '';
    }
  };
}

function switchDisplayCreator(props) {
  var _getFieldValue;

  var getFieldValue = props.getFieldValue,
      attrcode = props.attrcode;
  var value = (_getFieldValue = getFieldValue({
    attrcode: attrcode
  })) === null || _getFieldValue === void 0 ? void 0 : _getFieldValue.value;
  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
    style: {
      width: '8px',
      height: '8px',
      display: 'inline-block',
      borderRadius: '4px',
      marginRight: '6px',
      backgroundColor: value ? 'rgba(40,202,66,1)' : 'rgba(255,95,87,1)'
    }
  }), getDisplayCreator(props, 'display')());
}

var configMap = {
  // 无编辑事件类 ————————————————————————————————————————————————————————————————————————————
  label: function label(props) {
    var _props$alwaysEmitBefo;

    return {
      component: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: classnames_default()({
          'label': true,
          'with-border': props.withBorder,
          'disabled': props.disabled
        })
      }),
      valuePropName: 'children',
      fieldValueToComponentValue: function fieldValueToComponentValue() {
        return getDisplayCreator(props, 'auto')();
      },
      getDisplay: getDisplayCreator(props, 'auto'),
      alwaysEmitBeforeEventWhenClick: (_props$alwaysEmitBefo = props.alwaysEmitBeforeEventWhenClick) !== null && _props$alwaysEmitBefo !== void 0 ? _props$alwaysEmitBefo : true
    };
  },
  // 编辑前：onFocus 编辑后：onChange ——————————————————————————————————————————————————————————————————
  input: function input() {
    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref5$alwaysEmitBefor = _ref5.alwaysEmitBeforeEventWhenClick,
        alwaysEmitBeforeEventWhenClick = _ref5$alwaysEmitBefor === void 0 ? true : _ref5$alwaysEmitBefor;

    return {
      component: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Input"], {
        type: "text"
      }),
      beforeEventTrigger: 'focus',
      afterEventTrigger: 'onBlur',
      alwaysEmitBeforeEventWhenClick: alwaysEmitBeforeEventWhenClick
    };
  },
  password: function password() {
    return {
      component: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Input"], {
        type: "password"
      }),
      beforeEventTrigger: 'focus',
      afterEventTrigger: 'onBlur',
      getDisplay: function getDisplay() {
        return '*'.repeat(8);
      } // getDisplay: ({ attrcode }) => (getFieldValue({ attrcode }).value || '').replace(/./g, '*'),

    };
  },
  residtxt: function residtxt(_ref6) {
    var languageMeta = _ref6.languageMeta,
        _getFieldValue2 = _ref6.getFieldValue,
        _setFieldValue = _ref6.setFieldValue,
        attrcode = _ref6.attrcode;
    return {
      component: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["MultiLangText"], null),
      beforeEventTrigger: 'focus',
      afterEventTrigger: 'onBlur',
      componentValueToFieldValue: function componentValueToFieldValue(value) {
        var _languageMeta$find;

        var fieldValue = _objectSpread({}, value);

        var mainIndex = ((_languageMeta$find = languageMeta.find(function (e) {
          return e.index == 1 || e.index == '';
        })) === null || _languageMeta$find === void 0 ? void 0 : _languageMeta$find.index) || '';

        if (!value.hasOwnProperty(attrcode)) {
          fieldValue[attrcode] = fieldValue[attrcode + mainIndex];
          delete fieldValue[attrcode + mainIndex];
        }

        return fieldValue;
      },
      fieldValueToComponentValue: function fieldValueToComponentValue(value) {
        var _languageMeta$find2;

        var componentValue = _objectSpread({}, value);

        var mainIndex = ((_languageMeta$find2 = languageMeta.find(function (e) {
          return e.index == 1 || e.index == '';
        })) === null || _languageMeta$find2 === void 0 ? void 0 : _languageMeta$find2.index) || '';

        if (!value.hasOwnProperty(attrcode + mainIndex)) {
          componentValue[attrcode + mainIndex] = componentValue[attrcode];
          delete componentValue[attrcode];
        }

        return componentValue;
      },
      getFieldValue: function getFieldValue(_ref7) {
        var attrcode = _ref7.attrcode;
        // 根据主attrcode获取其余字段的值
        // index == 1 为主语言， attrcode没有后缀
        var value = {};
        Array.isArray(languageMeta) && (value = languageMeta.reduce(function (value, _ref8) {
          var _getFieldValue3;

          var index = _ref8.index;
          var realCode = index == 1 ? attrcode : attrcode + index;
          value[realCode] = {
            value: ((_getFieldValue3 = _getFieldValue2({
              attrcode: realCode
            })) === null || _getFieldValue3 === void 0 ? void 0 : _getFieldValue3.value) || '',
            index: index
          };
          return value;
        }, value));
        return value;
      },
      setFieldValue: function setFieldValue(_ref9) {
        var attrcode = _ref9.attrcode,
            value = _ref9.value,
            componentValue = _ref9.componentValue;
        // 根据主attrcode设置其余字段的值
        // index == 1 为主语言， attrcode没有后缀
        Array.isArray(languageMeta) && languageMeta.forEach(function (_ref10) {
          var index = _ref10.index;
          var realCode = index == 1 ? attrcode : attrcode + index;

          if (value[realCode].current) {
            var _value$realCode = value[realCode],
                current = _value$realCode.current,
                restValue = _objectWithoutProperties(_value$realCode, ["current"]);

            _setFieldValue({
              attrcode: realCode,
              value: restValue,
              componentValue: componentValue
            });
          }
        });
      },
      equal: function equal(lastValue, newValue) {
        if (Object.keys(lastValue).length === Object.keys(newValue).length) {
          return Object.keys(newValue).every(function (key) {
            return newValue[key].value && lastValue[key].value && newValue[key].value === lastValue[key].value;
          });
        }

        return false;
      },
      getDisplay: function getDisplay() {
        var _loginValue, _mainValue;

        // 优先展示登录语言值，无值时展示主语言值
        var loginValue, mainValue;
        Array.isArray(languageMeta) && languageMeta.map(function (_ref11) {
          var index = _ref11.index,
              languageCode = _ref11.languageCode;

          if (languageCode === loginLanguage) {
            // 登录语言值
            var realCode = index == 1 ? attrcode : attrcode + index;
            loginValue = _getFieldValue2({
              attrcode: realCode
            });
          }

          if (index == 1 || index == '') {
            // 主语言值
            mainValue = _getFieldValue2({
              attrcode: attrcode
            });
          }
        });
        return ((_loginValue = loginValue) === null || _loginValue === void 0 ? void 0 : _loginValue.value) || ((_mainValue = mainValue) === null || _mainValue === void 0 ? void 0 : _mainValue.value) || '';
      }
    };
  },
  number: function number(props) {
    var scale = props.scale;
    return {
      component: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["NumberInput"], null),
      beforeEventTrigger: 'focus',
      afterEventTrigger: 'onBlur',
      componentValueToFieldValue: function componentValueToFieldValue(value) {
        return {
          display: '',
          value: value,
          scale: scale
        };
      },
      getDisplay: function getDisplay() {
        var value = getDisplayCreator(props, 'value')();
        value = Object(index_["formatNumber"])(Object(index_["formatAcuracy"])(value, scale));
        return value;
      }
    };
  },
  textarea: function textarea() {
    return {
      component: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["TextArea"], null),
      beforeEventTrigger: 'focus',
      afterEventTrigger: 'onBlur',
      focusableElement: 'textarea'
    };
  },
  refer: function refer(props) {
    return {
      component: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ReferLoader, null),
      valuePropName: 'foolValue',
      beforeEventTrigger: 'click',
      componentValueToFieldValue: function componentValueToFieldValue(value) {
        return {
          display: value.display,
          value: value.value
        };
      },
      fieldValueToComponentValue: function fieldValueToComponentValue(value) {
        return value;
      },
      normalize: function normalize(value, foolValue) {
        var copyValue;

        if (Array.isArray(value)) {
          copyValue = _toConsumableArray(value);
        } else {
          copyValue = _objectSpread({}, value);
        }

        copyValue.value = foolValue.value;
        copyValue.display = foolValue.display;
        return copyValue;
      },
      getDisplay: getDisplayCreator(props, 'display'),
      focusableElement: 'input.refer-input'
    };
  },
  // 编辑前：onClick 编辑后：onChange ——————————————————————————————————————————————————————————————————
  radio: function radio(props) {
    return resolveSelect(_objectSpread(_objectSpread({}, props), {}, {
      multiple: false
    }));
  },
  checkbox: function checkbox(props) {
    return resolveSelect(_objectSpread(_objectSpread({}, props), {}, {
      multiple: true
    }));
  },
  checkbox_switch: function checkbox_switch(props) {
    var _props$alwaysEmitBefo2;

    return {
      component: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Checkbox"], {
        className: "single-checkbox",
        colors: "primary",
        type: "switch"
      }),
      componentValueToFieldValue: function componentValueToFieldValue(value) {
        return {
          value: value
        };
      },
      fieldValueToComponentValue: function fieldValueToComponentValue(_ref12) {
        var value = _ref12.value;
        return !!value;
      },
      valuePropName: 'checked',
      beforeEventTrigger: 'click',
      defaultValue: {
        value: false
      },
      getDisplay: function getDisplay() {
        return switchDisplayCreator(props);
      },
      alwaysEmitBeforeEventWhenClick: (_props$alwaysEmitBefo2 = props.alwaysEmitBeforeEventWhenClick) !== null && _props$alwaysEmitBefo2 !== void 0 ? _props$alwaysEmitBefo2 : true,
      display: 'inline-block',
      focusableElement: 'label.u-checkbox-label',
      beforeEventMode: 'mousedown'
    };
  },
  "switch": function _switch(props) {
    var _props$alwaysEmitBefo3;

    return {
      component: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Switch"], null),
      componentValueToFieldValue: function componentValueToFieldValue(value) {
        return {
          value: value
        };
      },
      fieldValueToComponentValue: function fieldValueToComponentValue(_ref13) {
        var value = _ref13.value;
        return !!value;
      },
      valuePropName: 'checked',
      beforeEventTrigger: 'click',
      defaultValue: {
        value: false
      },
      getDisplay: function getDisplay() {
        return switchDisplayCreator(props);
      },
      focusableElement: 'span.u-switch',
      alwaysEmitBeforeEventWhenClick: (_props$alwaysEmitBefo3 = props.alwaysEmitBeforeEventWhenClick) !== null && _props$alwaysEmitBefo3 !== void 0 ? _props$alwaysEmitBefo3 : true,
      display: 'inline-block'
    };
  },
  switch_browse: function switch_browse(props) {
    var _props$alwaysEmitBefo4;

    return {
      component: props.cancelPSwitch ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Switch"], null) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["PopconfirmSwitch"], null),
      componentValueToFieldValue: function componentValueToFieldValue(value) {
        return {
          value: value
        };
      },
      fieldValueToComponentValue: function fieldValueToComponentValue(_ref14) {
        var value = _ref14.value;
        return !!value;
      },
      valuePropName: 'checked',
      beforeEventTrigger: 'click',
      defaultValue: {
        value: false
      },
      getDisplay: function getDisplay() {
        return switchDisplayCreator(props);
      },
      focusableElement: 'span.u-switch',
      alwaysEmitBeforeEventWhenClick: (_props$alwaysEmitBefo4 = props.alwaysEmitBeforeEventWhenClick) !== null && _props$alwaysEmitBefo4 !== void 0 ? _props$alwaysEmitBefo4 : true,
      display: 'inline-block'
    };
  },
  NCTZDatePickerStart: function NCTZDatePickerStart(props) {
    return resolveDatepicker(base_index_["TZDatePickerStart"], props);
  },
  NCTZDatePickerRangeDay: function NCTZDatePickerRangeDay(props) {
    return resolveDatepicker(base_index_["TZDatePickerRangeDay"], props);
  },
  // 查询区用
  NCTZDatePickClientHourTime: function NCTZDatePickClientHourTime(props) {
    return resolveDatepicker(base_index_["TZDatePickClientHourTime"], props);
  },
  datetimepicker: function datetimepicker(props) {
    return resolveDatepicker(base_index_["TZDatePickClientTime"], props, {
      afterEventTrigger: 'onClose'
    });
  },
  timepicker: function timepicker(props) {
    return resolveDatepicker(base_index_["Timepicker"], props, {
      afterEventTrigger: 'onClose'
    });
  },
  NCTZDatePickerEnd: function NCTZDatePickerEnd(props) {
    return resolveDatepicker(base_index_["TZDatePickerEnd"], props);
  },
  datePickerNoTimeZone: function datePickerNoTimeZone(props) {
    return resolveDatepicker(base_index_["DatePickerNoTimeZone"], props);
  },
  datepicker: function datepicker(props) {
    return resolveDatepicker(base_index_["TZDatePickClientHourTime"], props);
  },
  rangepicker: function rangepicker(props) {
    return resolveDatepicker(base_index_["RangePickerClient"], props);
  },
  NCTZDatePickClientTime: function NCTZDatePickClientTime(props) {
    return resolveDatepicker(base_index_["TZDatePickClientTime"], props, {
      afterEventTrigger: 'onClose'
    });
  },
  monthpicker: function monthpicker(props) {
    return resolveDatepicker(base_index_["MonthPicker"], props);
  },
  yearpicker: function yearpicker(props) {
    return resolveDatepicker(base_index_["YearPicker"], props);
  },
  select: function select(props) {
    return resolveSelect(props);
  },
  attachment: function attachment() {
    return {
      component: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Attachment"], null),
      valuePropName: 'fieldValue',
      valueChangePropName: 'getCount',
      afterEventTrigger: 'onHide',
      normalize: function normalize(billId, fileList) {
        return fileList + ',' + billId;
      },
      beforeEventTrigger: 'click'
    };
  }
};
/**
 * 元数据解析器
 * @param {*} props 
 */

/* harmony default export */ var template_itemCreator = (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var attrcode = props.attrcode,
      itemtype = props.itemtype,
      getFieldValue = props.getFieldValue,
      setFieldValue = props.setFieldValue,
      alwaysEmitBeforeEventWhenClick = props.alwaysEmitBeforeEventWhenClick,
      defaultConfig = {
    defaultValue: {
      display: '',
      value: ''
    },
    component: null,
    afterEventTrigger: 'onChange',
    // 触发编辑后事件的时机（表示编辑结束的时机）
    beforeEventTrigger: 'focus',
    // 触发编辑前事件的时机（表示编辑开始的时机）
    valuePropName: 'value',
    // 代表组件值的属性
    valueChangePropName: 'onChange',
    // 代表组件值改变的属性
    normalize: function normalize(value) {
      return value;
    },
    // 标准化【字段值变更的回调函数】的参数，使其和【字段值属性】保持一致
    componentValueToFieldValue: function componentValueToFieldValue(value) {
      return {
        display: '',
        value: value
      };
    },
    // 原始值 => 业务值
    fieldValueToComponentValue: function fieldValueToComponentValue(_ref15) {
      var value = _ref15.value;
      return value !== null && value !== void 0 ? value : '';
    },
    // 业务值 => 原始值
    equal: function equal(lastValue, newValue) {
      return lastValue && newValue && lastValue.value === newValue.value;
    },
    // 比较新旧值是否相等的函数
    validateTrigger: 'onChange',
    // 校验时机
    getFieldValue: getFieldValue,
    // 获取字段业务值的方法
    setFieldValue: setFieldValue,
    // 设置字段业务值的方法
    focusableElement: 'input',
    alwaysEmitBeforeEventWhenClick: alwaysEmitBeforeEventWhenClick,
    getDisplay: getDisplayCreator(props, 'value'),
    // displayKey不适用于 password/residtxt/checkbox_switch/switch/switch_browse 类型
    beforeEventMode: 'auto' // 编辑前实现方式：auto-根据浏览器；disabled/mousedown-指定实现方式

  };
  var isValidType = true;

  var itemConfig = (configMap[itemtype] || function (_ref16) {
    var itemtype = _ref16.itemtype;
    console.warn("\u65E0\u6CD5\u89E3\u6790attrcode\u4E3A".concat(attrcode, "\u7684").concat(itemtype, "\u7C7B\u578B"));
    isValidType = false;
  })(props);

  return _objectSpread(_objectSpread(_objectSpread({
    itemtype: itemtype
  }, defaultConfig), itemConfig), {}, {
    isValidType: isValidType
  });
});
// CONCATENATED MODULE: ./src/platform/template/utils/getEventObject.js
/*
 * @Author: liyxt
 * @Date: 2020-04-20 09:44:34
 * @LastEditors: liyxt
 * @LastEditTime: 2020-06-17 10:13:05
 * @Description: file content
 */

/**
 * 获取event对象
 * @param  {...any} rest
 * @returns {event}
 */
function getEventObject() {
  for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  var eventFromArgs = rest.find(function (e) {
    return e && typeof e.preventDefault === 'function';
  }),
      eventFromWindow = window.event,
      defaultEvent = {
    stopPropagation: function stopPropagation() {
      console.warn('未找到Event对象');
    },
    preventDefault: function preventDefault() {
      console.warn('未找到Event对象');
    }
  };
  return eventFromArgs || eventFromWindow || defaultEvent;
}
// CONCATENATED MODULE: ./src/platform/template/Item.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function Item_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Item_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Item_ownKeys(Object(source), true).forEach(function (key) { Item_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Item_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Item_toConsumableArray(arr) { return Item_arrayWithoutHoles(arr) || Item_iterableToArray(arr) || Item_unsupportedIterableToArray(arr) || Item_nonIterableSpread(); }

function Item_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Item_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Item_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Item_arrayLikeToArray(o, minLen); }

function Item_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function Item_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Item_arrayLikeToArray(arr); }

function Item_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function Item_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Item_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Item_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






 // 先放在base引入
// require('./Item.less');

var Item_itemCreator = template_itemCreator; // 组件信息

var ItemContext = /*#__PURE__*/Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["createContext"])();
function ItemProvider(Target) {
  return function (_ref) {
    var _ref$itemCreator = _ref.itemCreator,
        itemCreator = _ref$itemCreator === void 0 ? template_itemCreator : _ref$itemCreator,
        props = Item_objectWithoutProperties(_ref, ["itemCreator"]);

    return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ItemContext.Provider, {
      value: {
        itemCreator: itemCreator,
        store: props.store
      }
    }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Target, props));
  };
} // copy from VUEJS/src/core/util/env.js

/**
 * 判断浏览器类型主要用于区分【编辑前事件】的实现方式
 * - webkit内核浏览器(chrome/safari)利用disabled实现
 *  - 优点：不会阻止默认事件，如：文本选中事件、textarea拖拽事件
 *  - 缺点：要分别处理不同组件的兼容性、禁用时个别交互和非禁用时不同
 * - 其余浏览器利用mousedown阻止事件实现
 *  - 优点：不关注组件实现
 *  - 缺点：会阻止默认事件，如：文本选中事件、textarea拖拽事件
 */

var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isEdge = UA && UA.indexOf('edge/') > 0;
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge; // console.log(isChrome ? 'is chrome' : 'isn\'t chrome');
// 每个图层一个activeItem

var activeItem = new Map(); // 会导致失焦的键：tab/enter

var blurKeyCode = new Set([9]); // 事件是否可信任（是否由用户交互事件触发）

var isTrust = true; // 鼠标状态

var mousedown = false;
document.addEventListener('mousedown', function () {
  mousedown = true;
}, true);
document.addEventListener('mouseup', function () {
  mousedown = false;
}, true);
/**
 * Item状态：
 * - 非激活状态（默认状态，未触发编辑前）
 * - 激活 & 非编辑状态（触发编辑前，但是编辑前返回false）
 * - 激活 & 编辑状态（触发编辑前，编辑前成功）
 * 
 * 如何触发组件激活状态：
 * - 鼠标操作：onClick
 * - 键盘操作：onFocus
 * 
 * 何时触发编辑前事件：
 * - 鼠标操作：每次点击时
 * - 键盘操作：非激活状态的onFocus事件
 * 
 * 如何触发组件失活状态：
 * - 鼠标操作：：其他Item被激活/点击Item以外区域
 * - 键盘操作：其他Item被激活（enter/上下左右）/（tab）
 */

/**
 * 对所有基础组件做兼容的统一包装层
 * 兼容：props差异
 * 兼容：编辑前后事件
 * @param {Function} onAfterEvent 
 * @param {Function} onBeforeEvent 
 * @param {String} attrcode 
 * @param {Function} getFieldValue 从store里取值
 * @param {Function} setFieldValue 向store中设值
 * @param {Boolean} browse 
 * @param {Boolean} editType 编辑态Item类型：normal-直接显示编辑态；toggle-点击时切换为编辑态；
 * @returns {ReactNode}
 */

var Item_SingleItem = /*#__PURE__*/function (_Component) {
  _inherits(SingleItem, _Component);

  var _super = _createSuper(SingleItem);

  _createClass(SingleItem, [{
    key: "isActive",
    get: function get() {
      return activeItem.get(this.getContainer()) === this;
    },
    set: function set(value) {
      if (value) {
        var lastActiveItem = activeItem.get(this.getContainer());

        if (lastActiveItem !== this) {
          setTimeout(function () {
            /**
             * Item的onMouseDown先于组件的onBlur执行
             * 所以要保证先执行onBlur
             * 再使组件失活
             * 解决NCC-84973
             */
            lastActiveItem === null || lastActiveItem === void 0 ? void 0 : lastActiveItem.deactivate();
          }, 0);
        }

        activeItem.set(this.getContainer(), this);
      } else {
        if (activeItem.get(this.getContainer()) == this) {
          activeItem.set(this.getContainer(), null);
        }
      }
    }
  }]);

  function SingleItem(props) {
    var _this;

    _classCallCheck(this, SingleItem);

    _this = _super.call(this, props);
    _this.itemRef = null;
    _this.oldValue = /*#__PURE__*/Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["createRef"])(null);
    _this.componentValue = /*#__PURE__*/Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["createRef"])(null);
    _this.clickOutside = false;

    _this.bindItemRef = function (instance) {
      _this.itemRef = Object(external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_["findDOMNode"])(instance);
    };

    _this.getContainer = function () {
      if (!_this.container) {
        // 绑定状态切换事件
        var lastParent = _this.itemRef,
            parent = null; // 解决模态框中的情况

        while (lastParent) {
          parent = lastParent.parentNode;

          if (parent && parent !== document.body) {
            lastParent = parent;
          } else {
            break;
          }
        }

        _this.container = lastParent;
      }

      return _this.container;
    };

    _this.handleOutSideClick = function () {
      // 只有mousedown & mouseup都在外面时才deactivate；
      // 选择文本时可能mouseup在外面
      var outSideMousedown = function outSideMousedown(e) {
        var _this$itemRef;

        if (e.currentTarget.contains(e.target) && !((_this$itemRef = _this.itemRef) !== null && _this$itemRef !== void 0 && _this$itemRef.contains(e.target))) {
          _this.clickOutside = true;
        }
      };

      var outSideMouseup = function outSideMouseup() {
        if (_this.clickOutside) {
          _this.deactivate();
        }
      };

      var container = _this.getContainer();

      if (container) {
        container.addEventListener('mousedown', outSideMousedown, true);
        container.addEventListener('mouseup', outSideMouseup, true);
        return function () {
          container.removeEventListener('mousedown', outSideMousedown, true);
          container.removeEventListener('mouseup', outSideMouseup, true);
          _this.cancelOutSideClick = null;
        };
      }
    };

    _this.getComponentValue = function () {
      var attrcode = _this.props.attrcode;

      var _this$context$itemCre = _this.context.itemCreator(_this.props),
          fieldValueToComponentValue = _this$context$itemCre.fieldValueToComponentValue,
          getFieldValue = _this$context$itemCre.getFieldValue;

      var fieldValue = getFieldValue({
        attrcode: attrcode
      });
      var componentValue = fieldValueToComponentValue(fieldValue);
      return componentValue;
    };

    _this.beforeEventHandler = function (event) {
      var _this$props = _this.props,
          onBeforeEvent = _this$props.onBeforeEvent,
          attrcode = _this$props.attrcode,
          disabled = _this$props.disabled;

      if (disabled || _this.isEmittingBeforeEvent) {
        return Promise.resolve(false);
      }

      _this.isActive = true;
      _this.isEmittingBeforeEvent = true;

      var _this$context$itemCre2 = _this.context.itemCreator(_this.props),
          getFieldValue = _this$context$itemCre2.getFieldValue;

      if (typeof onBeforeEvent === 'function') {
        var value = getFieldValue({
          attrcode: attrcode
        }),
            isContinue = onBeforeEvent({
          value: value,
          event: event
        });
        return Promise.resolve(isContinue).then(function (isContinue) {
          _this.isContinue = isContinue !== false;
          _this.isEmittingBeforeEvent = false;
          return _this.isContinue;
        });
      } else {
        _this.isContinue = true;
        _this.isEmittingBeforeEvent = false;
        return Promise.resolve(true);
      }
    };

    _this.afterEventHandler = function () {
      var _this$props2 = _this.props,
          attrcode = _this$props2.attrcode,
          onAfterEvent = _this$props2.onAfterEvent;

      var _this$context$itemCre3 = _this.context.itemCreator(_this.props),
          getFieldValue = _this$context$itemCre3.getFieldValue;

      var _assertThisInitialize = _assertThisInitialized(_this),
          oldValue = _assertThisInitialize.oldValue,
          componentValue = _assertThisInitialize.componentValue; // console.log('afterEvent emit', ...rest);


      var event = getEventObject.apply(void 0, arguments),
          value = getFieldValue({
        attrcode: attrcode
      });

      if (_this.dirty) {
        _this.dirty = false;
        onAfterEvent({
          value: value,
          oldValue: oldValue.current,
          componentValue: componentValue.current,
          event: event
        });
        oldValue.current = null;
        componentValue.current = null;
      } // if (validateTrigger === afterEventTrigger) {
      //     // 编辑后校验
      //     this.validate(value, { rules: { length: 3 } });
      // }

    };

    _this.valueChangeEventHandler = function () {
      var attrcode = _this.props.attrcode;

      var _this$context$itemCre4 = _this.context.itemCreator(_this.props),
          afterEventTrigger = _this$context$itemCre4.afterEventTrigger,
          valueChangePropName = _this$context$itemCre4.valueChangePropName,
          normalize = _this$context$itemCre4.normalize,
          componentValueToFieldValue = _this$context$itemCre4.componentValueToFieldValue,
          getFieldValue = _this$context$itemCre4.getFieldValue,
          setFieldValue = _this$context$itemCre4.setFieldValue;

      var _assertThisInitialize2 = _assertThisInitialized(_this),
          oldValue = _assertThisInitialize2.oldValue,
          componentValue = _assertThisInitialize2.componentValue; // console.log('afterEvent emit', ...rest);


      !oldValue.current && (oldValue.current = getFieldValue({
        attrcode: attrcode
      }));
      componentValue.current = normalize.apply(void 0, arguments);
      var value = componentValueToFieldValue(componentValue.current); // Store里存业务值

      _this.dirty = true;
      setFieldValue({
        attrcode: attrcode,
        value: value,
        componentValue: componentValue.current
      });

      if (afterEventTrigger === valueChangePropName) {
        var _this2;

        (_this2 = _this).afterEventHandler.apply(_this2, arguments);
      } // if (validateTrigger === valueChangePropName) {
      //     // 输入时实时校验
      //     this.validate(value, { rules: { length: 3 } });
      // }

    };

    _this.getDisplay = function () {
      var renderItem = _this.props.renderItem;

      var _itemCreator = Item_itemCreator(_this.props),
          getDisplay = _itemCreator.getDisplay;

      var customComponent = typeof renderItem === 'function' ? renderItem({
        isEdit: false
      }) : undefined;

      if (customComponent !== undefined) {
        return customComponent;
      }

      var display = getDisplay();
      return display;
    };

    _this.stopIfNeeded = function (event) {
      var target = event.target,
          currentTarget = event.currentTarget; // 点击区域不在spanWrapper里

      if (!currentTarget.contains(target)) return true;

      if (!_this.state.isEditable) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (_this.isEmittingBeforeEvent) {
        return true;
      }
    };

    _this.activate = function (target) {
      var _this$itemRef2;

      var _this$props3 = _this.props,
          editType = _this$props3.editType,
          onStatusChange = _this$props3.onStatusChange,
          isEditable = _this.state.isEditable;

      if (!isEditable) {
        _this.setState({
          isEditable: true
        });
      } // 依赖isEditable，但由于在异步中执行，所以可以用同步写法


      _this.bindTabIndex();

      var _this$context$itemCre5 = _this.context.itemCreator(_this.props),
          beforeEventTrigger = _this$context$itemCre5.beforeEventTrigger,
          focusableElement = _this$context$itemCre5.focusableElement;

      var ele = (_this$itemRef2 = _this.itemRef) === null || _this$itemRef2 === void 0 ? void 0 : _this$itemRef2.querySelector(focusableElement);
      isTrust = false; // 这里的isEditable是上一次的isEditable

      if (editType === 'toggle' && !isEditable) {
        // 对于不支持autofocus属性的组件，要手动聚焦
        ele === null || ele === void 0 ? void 0 : ele.focus();
        typeof onStatusChange === 'function' && onStatusChange({
          isEdit: true
        });
      } else if (target) {
        // 点击触发
        Item_toConsumableArray(new Set([beforeEventTrigger, 'click'])).forEach(function (eventName) {
          var _target$eventName;

          (_target$eventName = target[eventName]) === null || _target$eventName === void 0 ? void 0 : _target$eventName.call(target);
        });
      } else {
        // focus触发
        ele === null || ele === void 0 ? void 0 : ele.focus();
      }

      isTrust = true;

      if (!_this.cancelOutSideClick) {
        _this.cancelOutSideClick = _this.handleOutSideClick();
      }
    };

    _this.deactivate = function () {
      var _this$props4 = _this.props,
          editType = _this$props4.editType,
          onStatusChange = _this$props4.onStatusChange,
          isEditable = _this.state.isEditable;

      if (isEditable) {
        var _this$cancelOutSideCl, _this3;

        _this.setState({
          isEditable: false
        }, function () {
          _this.bindTabIndex();

          switch (editType) {
            case 'toggle':
              typeof onStatusChange === 'function' && onStatusChange({
                isEdit: false
              });
              break;

            default:
          }
        });

        (_this$cancelOutSideCl = (_this3 = _this).cancelOutSideClick) === null || _this$cancelOutSideCl === void 0 ? void 0 : _this$cancelOutSideCl.call(_this3);
      }

      _this.isActive = false;
    };

    _this.handleClickCapture = function (event) {
      // 阻止用户的点击，只在mousedown中通过代码触发click
      if (isTrust && event.currentTarget.contains(event.target)) {
        event.stopPropagation();
        event.preventDefault();
      }
    };

    _this.handleMouseDownCapture = function (event) {
      var target = event.target,
          currentTarget = event.currentTarget;

      if (currentTarget.contains(target)) {
        _this.clickOutside = false; // 这里阻止本组件获取焦点的同时也会阻止其他组件失焦，故让activeElement失焦

        if (!currentTarget.contains(document.activeElement)) {
          document.activeElement.blur();
        } // chrome下用disabled实现
        // 非chrome下用mousedown实现，需阻止事件


        if (!isChrome || _this.context.itemCreator(_this.props).beforeEventMode === 'mousedown') {
          var shouldStop = _this.stopIfNeeded(event);

          if (shouldStop) return;
        }

        _this.beforeEventHandler(event).then(function (isContinue) {
          // setTimeout fix: IE下要双击才触发事件
          setTimeout(function () {
            if (isContinue && _this.isActive) {
              _this.activate(target);
            }
          }, 0);
        });
      }
    };

    _this.handleFocus = function (event) {
      var target = event.target,
          currentTarget = event.currentTarget;

      if (_this.isActive) {
        event.stopPropagation();
      }

      if (!mousedown && !_this.isActive && target === currentTarget) {
        // onFocus是由自身触发时
        _this.beforeEventHandler(event).then(function (isContinue) {
          if (isContinue && _this.isActive) {
            _this.activate();
          }
        });
      }
    };

    _this.handleBlur = function () {
      if (_this.isPressingTab) {
        _this.deactivate();

        _this.isPressingTab = false;
      }
    };

    _this.handleKeyDown = function (event) {
      if (blurKeyCode.has(event.keyCode || event.which || event.charCode) && event.currentTarget.contains(event.target)) {
        _this.isPressingTab = true;
      }
    };

    _this.addEventListener = function () {
      _this.itemRef.addEventListener('click', _this.handleClickCapture, true); // this.itemRef.addEventListener('mousedown', this.handleMouseDownCapture, true);
      // this.itemRef.addEventListener('focus', this.handleFocus);
      // this.itemRef.addEventListener('blur', this.handleBlur);
      // this.itemRef.addEventListener('keydown', this.handleKeyDown);

    };

    _this.removeEventListener = function () {
      _this.itemRef.removeEventListener('click', _this.handleClickCapture, true); // this.itemRef.removeEventListener('mousedown', this.handleMouseDownCapture, true);
      // this.itemRef.removeEventListener('focus', this.handleFocus);
      // this.itemRef.removeEventListener('blur', this.handleBlur);
      // this.itemRef.removeEventListener('keydown', this.handleKeyDown);

    };

    _this.bindTabIndex = function () {
      var _this$itemRef3;

      var _this$props5 = _this.props,
          tabIndex = _this$props5.tabIndex,
          disabled = _this$props5.disabled,
          isEditable = _this.state.isEditable,
          _this$context$itemCre6 = _this.context.itemCreator(_this.props),
          focusableElement = _this$context$itemCre6.focusableElement;

      var ele = (_this$itemRef3 = _this.itemRef) === null || _this$itemRef3 === void 0 ? void 0 : _this$itemRef3.querySelector(focusableElement);
      ele === null || ele === void 0 ? void 0 : ele.setAttribute('tabindex', isEditable ? tabIndex : -1);

      _this.itemRef.setAttribute('tabindex', disabled ? undefined : isEditable ? -1 : tabIndex);
    };

    _this.state = {
      isEditable: false
    };
    return _this;
  }

  _createClass(SingleItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _store$registerField;

      var _this$props6 = this.props,
          path = _this$props6.path,
          browse = _this$props6.browse;
      var store = this.context.store;
      this.cancelRegister = store === null || store === void 0 ? void 0 : (_store$registerField = store.registerField) === null || _store$registerField === void 0 ? void 0 : _store$registerField.call(store, path, this);
      this.bindTabIndex();
      !browse && this.addEventListener();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevDisabled = _ref2.disabled,
          prevBrowse = _ref2.browse,
          prevTabIndex = _ref2.tabIndex;
      var _this$props7 = this.props,
          disabled = _this$props7.disabled,
          browse = _this$props7.browse,
          tabIndex = _this$props7.tabIndex;

      if (prevDisabled !== disabled || tabIndex !== prevTabIndex) {
        this.bindTabIndex();
      }

      if (prevBrowse !== browse) {
        browse ? this.removeEventListener() : this.addEventListener();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$cancelRegister, _this$cancelOutSideCl2;

      (_this$cancelRegister = this.cancelRegister) === null || _this$cancelRegister === void 0 ? void 0 : _this$cancelRegister.call(this);
      (_this$cancelOutSideCl2 = this.cancelOutSideClick) === null || _this$cancelOutSideCl2 === void 0 ? void 0 : _this$cancelOutSideCl2.call(this);
      this.removeEventListener();
      this.itemRef = null;
    }
  }, {
    key: "render",
    value: function render() {
      var itemCreator = this.context.itemCreator;
      var _this$props8 = this.props,
          _this$props8$browse = _this$props8.browse,
          browse = _this$props8$browse === void 0 ? false : _this$props8$browse,
          _this$props8$editType = _this$props8.editType,
          editType = _this$props8$editType === void 0 ? 'normal' : _this$props8$editType,
          renderItem = _this$props8.renderItem,
          useTitle = _this$props8.useTitle,
          disabled = _this$props8.disabled,
          autoFocus = _this$props8.autoFocus;
      var isEditable = this.state.isEditable;
      var display = this.getDisplay();
      var wrapperSpanProps = {
        style: {
          width: '100%',
          display: 'inline-block',
          verticalAlign: 'middle'
        },
        className: classnames_default()({
          'template-item-wrapper': true,
          'template-item-browse': browse || editType === 'toggle' && !isEditable,
          'template-item-edit': !(browse || editType === 'toggle' && !isEditable),
          'fake-disabled': !disabled && !browse && !isEditable && editType === 'normal'
        }),
        title: useTitle && typeof display === 'string' ? display : undefined
      };

      if (browse) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Item_Wrapper, _extends({
          ref: this.bindItemRef
        }, wrapperSpanProps), display);
      }

      var itemConfig = itemCreator(this.props);
      var afterEventTrigger = itemConfig.afterEventTrigger,
          valueChangePropName = itemConfig.valueChangePropName,
          valuePropName = itemConfig.valuePropName,
          component = itemConfig.component,
          beforeEventMode = itemConfig.beforeEventMode;
      var propsToPass = Object(es["default"])(this.props, ['children', 'onAfterEvent', 'onBeforeEvent', 'getFieldValue', 'setFieldValue', 'tabIndex']);
      wrapperSpanProps = Object.assign(wrapperSpanProps, {
        onMouseDownCapture: this.handleMouseDownCapture,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown // onClickCapture: this.handleClickCapture,

      });

      if (editType === 'toggle' && !isEditable) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Item_Wrapper, _extends({
          ref: this.bindItemRef
        }, wrapperSpanProps), display);
      } else {
        var _objectSpread2;

        var customComponent = typeof renderItem === 'function' ? renderItem({
          isEdit: true
        }) : undefined;
        var renderComponent = customComponent === undefined ? component : customComponent;
        return (
          /*#__PURE__*/

          /**
           * 统一在组件外层包装一层span用来处理编辑前事件
           * [afterEventTrigger]与[valueChangePropName]重名时，在[valueChangePropName]里触发[afterEventTrigger]
           */
          external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Item_Wrapper, _extends({
            ref: this.bindItemRef
          }, wrapperSpanProps), renderComponent && /*#__PURE__*/Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["cloneElement"])(renderComponent, Item_objectSpread(Item_objectSpread({}, propsToPass), {}, (_objectSpread2 = {}, Item_defineProperty(_objectSpread2, afterEventTrigger, this.afterEventHandler), Item_defineProperty(_objectSpread2, valueChangePropName, this.valueChangeEventHandler), Item_defineProperty(_objectSpread2, valuePropName, this.getComponentValue()), Item_defineProperty(_objectSpread2, "autoFocus", autoFocus || editType === 'toggle' && isEditable ? true : undefined), Item_defineProperty(_objectSpread2, "disabled", disabled || (isChrome && beforeEventMode !== 'mousedown' ? !isEditable : undefined)), _objectSpread2))))
        );
      }
    }
  }]);

  return SingleItem;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);

Item_SingleItem.contextType = ItemContext;
Item_SingleItem.defaultProps = {
  editType: 'normal',
  tabIndex: 0
};

var Item_Wrapper = /*#__PURE__*/function (_Component2) {
  _inherits(Wrapper, _Component2);

  var _super2 = _createSuper(Wrapper);

  function Wrapper() {
    _classCallCheck(this, Wrapper);

    return _super2.apply(this, arguments);
  }

  _createClass(Wrapper, [{
    key: "render",
    value: function render() {
      var _this$props9 = this.props,
          children = _this$props9.children,
          others = Item_objectWithoutProperties(_this$props9, ["children"]);

      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", others, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "template-item-wrapper-inner"
      }, children));
    }
  }]);

  return Wrapper;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);

var Item_BetweenItem = /*#__PURE__*/function (_Component3) {
  _inherits(BetweenItem, _Component3);

  var _super3 = _createSuper(BetweenItem);

  function BetweenItem(props) {
    var _this4;

    _classCallCheck(this, BetweenItem);

    _this4 = _super3.call(this, props);

    _this4.transformBetweenValue = function (value) {
      return {
        display: value.map(function (e) {
          return e ? e.display : '';
        }),
        value: value.map(function (e) {
          return e ? e.value : '';
        })
      };
    };

    _this4.getSingleValueByIndex = function (_ref3, index) {
      var attrcode = _ref3.attrcode;
      var getFieldValue = _this4.props.getFieldValue;

      var _getFieldValue = getFieldValue({
        attrcode: attrcode
      }),
          value = _getFieldValue.value,
          display = _getFieldValue.display;

      !Array.isArray(value) && (value = [value]);
      !Array.isArray(display) && (display = [display]);
      var singleValue = {
        display: display[index],
        value: value[index]
      };
      return singleValue;
    };

    _this4.setSingleValueByIndex = function (_ref4, index) {
      var attrcode = _ref4.attrcode,
          value = _ref4.value,
          componentValue = _ref4.componentValue;
      var _this4$props = _this4.props,
          getFieldValue = _this4$props.getFieldValue,
          setFieldValue = _this4$props.setFieldValue;
      var betweenValue = getFieldValue({
        attrcode: attrcode
      });
      !Array.isArray(betweenValue.display) && (betweenValue.display = []);
      !Array.isArray(betweenValue.value) && (betweenValue.value = []);
      betweenValue.display[index] = value.display;
      betweenValue.value[index] = value.value;
      _this4.componentValue[index] = componentValue;
      setFieldValue({
        attrcode: attrcode,
        value: betweenValue,
        componentValue: _this4.componentValue
      });
    };

    _this4.value = [undefined, undefined];
    _this4.componentValue = [undefined, undefined];
    return _this4;
  }

  _createClass(BetweenItem, [{
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props10 = this.props,
          _onBeforeEvent = _this$props10.onBeforeEvent,
          _onAfterEvent = _this$props10.onAfterEvent,
          path = _this$props10.path;
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.Fragment, null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Item_SingleItem, _extends({}, this.props, {
        onBeforeEvent: function onBeforeEvent(_ref5) {
          var value = _ref5.value,
              event = _ref5.event;
          _this5.value[0] = value;

          if (typeof _onBeforeEvent === 'function') {
            return _onBeforeEvent({
              value: _this5.transformBetweenValue(_this5.value),
              event: event
            });
          }

          return true;
        },
        onAfterEvent: function onAfterEvent(_ref6) {
          var value = _ref6.value,
              event = _ref6.event;

          var oldValue = Item_toConsumableArray(_this5.value);

          _this5.value[0] = value;

          if (typeof _onAfterEvent === 'function') {
            return _onAfterEvent({
              value: _this5.transformBetweenValue(_this5.value),
              oldValue: _this5.transformBetweenValue(oldValue),
              event: event,
              componentValue: _this5.componentValue,
              index: 0
            });
          }
        },
        setFieldValue: function setFieldValue(_ref7) {
          var attrcode = _ref7.attrcode,
              value = _ref7.value,
              componentValue = _ref7.componentValue;

          _this5.setSingleValueByIndex({
            attrcode: attrcode,
            value: value,
            componentValue: componentValue
          }, 0);
        },
        getFieldValue: function getFieldValue(_ref8) {
          var attrcode = _ref8.attrcode;
          return _this5.getSingleValueByIndex({
            attrcode: attrcode
          }, 0);
        },
        path: path && path.concat(0)
      })), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "between-item-sep"
      }, "-"), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Item_SingleItem, _extends({}, this.props, {
        onBeforeEvent: function onBeforeEvent(_ref9) {
          var value = _ref9.value,
              event = _ref9.event;
          _this5.value[1] = value;

          if (typeof _onBeforeEvent === 'function') {
            return _onBeforeEvent({
              value: _this5.transformBetweenValue(_this5.value),
              event: event
            });
          }

          return true;
        },
        onAfterEvent: function onAfterEvent(_ref10) {
          var value = _ref10.value,
              event = _ref10.event;

          var oldValue = Item_toConsumableArray(_this5.value);

          _this5.value[1] = value;

          if (typeof _onAfterEvent === 'function') {
            return _onAfterEvent({
              value: _this5.transformBetweenValue(_this5.value),
              oldValue: _this5.transformBetweenValue(oldValue),
              event: event,
              componentValue: _this5.componentValue,
              index: 1
            });
          }
        },
        setFieldValue: function setFieldValue(_ref11) {
          var attrcode = _ref11.attrcode,
              value = _ref11.value,
              componentValue = _ref11.componentValue;

          _this5.setSingleValueByIndex({
            attrcode: attrcode,
            value: value,
            componentValue: componentValue
          }, 1);
        },
        getFieldValue: function getFieldValue(_ref12) {
          var attrcode = _ref12.attrcode;
          return _this5.getSingleValueByIndex({
            attrcode: attrcode
          }, 1);
        },
        path: path && path.concat(1)
      })));
    }
  }]);

  return BetweenItem;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);

var Item_Item = /*#__PURE__*/function (_Component4) {
  _inherits(Item, _Component4);

  var _super4 = _createSuper(Item);

  function Item() {
    _classCallCheck(this, Item);

    return _super4.apply(this, arguments);
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var _this$props11 = this.props,
          between = _this$props11.between,
          others = Item_objectWithoutProperties(_this$props11, ["between"]);

      return between ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Item_BetweenItem, others) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Item_SingleItem, others);
    }
  }]);

  return Item;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);


// CONCATENATED MODULE: ./src/platform/template/utils/get.js
/*
 * @Author: liyxt
 * @Date: 2020-06-05 15:32:32
 * @LastEditors: liyxt
 * @LastEditTime: 2020-06-17 10:15:28
 * @Description: file content
 */

/**
 * 通用的对象取值方法
 * @param {*} paths 设值的key的路径，如：[key1, key2...]
 */
function get_get(entity, path) {
  var current = entity;

  for (var i = 0; i < path.length; i += 1) {
    if (current === null || current === undefined) {
      return undefined;
    }

    current = current[path[i]];
  }

  return current;
}
// CONCATENATED MODULE: ./src/platform/template/utils/set.js
function set_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function set_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { set_ownKeys(Object(source), true).forEach(function (key) { set_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { set_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function set_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function set_toConsumableArray(arr) { return set_arrayWithoutHoles(arr) || set_iterableToArray(arr) || set_unsupportedIterableToArray(arr) || set_nonIterableSpread(); }

function set_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function set_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return set_arrayLikeToArray(arr); }

function _toArray(arr) { return _arrayWithHoles(arr) || set_iterableToArray(arr) || set_unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function set_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return set_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return set_arrayLikeToArray(o, minLen); }

function set_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function set_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Author: liyxt
 * @Date: 2020-06-05 15:32:39
 * @LastEditors: liyxt
 * @LastEditTime: 2020-06-17 10:12:36
 * @Description: file content
 */
// /**
//  * 对象设值方法，配合Data使用
//  * @param {*} entity 原始对象
//  * @param {*} paths 设值的key的路径，如：[key1, key2...]，配合Data使用，可匹配函数
//  * @param {*} value 要设置的值
//  */
// export default function set (entity, paths, value, { pattern = [] } = {}) {
//     if (!paths.length) {
//         return entity;
//     }
//     const [path, ...restPath] = paths;
//     const [part, ...restPart] = pattern;
//     if (restPath.length) {
//         if (part && part[0] === '#' && typeof entity.query === 'function') {
//             // 函数
//             // TODO: 处理query结果为空的情况
//             set(entity.query({ key: path }), restPath, value, { pattern: restPart })
//         } else {
//             if (!entity[path]) {
//                 if (typeof path === 'number') {
//                     entity[path] = [];
//                 } else {
//                     entity[path] = {};
//                 }
//             } 
//             set(entity[path], restPath, value, { pattern: restPart });
//         }
//     } else {
//         if (part && part[0] === '#' && typeof entity.update === 'function') {
//             entity.update({ key: path }, typeof value === 'function' ? value : () => value)
//         } else {
//             entity[path] = typeof value === 'function' ? value(entity[path]) : value;
//         }
//     }
//     return entity;
// }

/**
 * 通用的对象设值方法，不可变
 * @param {*} entity 原始对象
 * @param {*} paths 设值的key的路径，如：[key1, key2...]
 * @param {*} value 要设置的值
 */
function set_set(entity, paths, value) {
  if (!paths.length) {
    return value;
  }

  var _paths = _toArray(paths),
      path = _paths[0],
      restPath = _paths.slice(1);

  var clone;

  if (!entity && typeof path === 'number') {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = set_toConsumableArray(entity);
  } else {
    clone = set_objectSpread({}, entity);
  }

  clone[path] = set_set(clone[path], restPath, value);
  return clone;
}
// CONCATENATED MODULE: ./src/platform/template/utils/toArray.js
/*
 * @Author: liyxt
 * @Date: 2020-06-17 10:12:18
 * @LastEditors: liyxt
 * @LastEditTime: 2020-06-17 10:17:14
 * @Description: file content
 */
function toArray(value) {
  if (value === undefined || value === null) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}
// CONCATENATED MODULE: ./src/platform/template/BaseStore.js
function _construct(Parent, args, Class) { if (BaseStore_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) BaseStore_setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function BaseStore_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function BaseStore_setPrototypeOf(o, p) { BaseStore_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BaseStore_setPrototypeOf(o, p); }

function BaseStore_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function BaseStore_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BaseStore_ownKeys(Object(source), true).forEach(function (key) { BaseStore_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BaseStore_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BaseStore_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BaseStore_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BaseStore_typeof = function _typeof(obj) { return typeof obj; }; } else { BaseStore_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BaseStore_typeof(obj); }

function BaseStore_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BaseStore_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BaseStore_createClass(Constructor, protoProps, staticProps) { if (protoProps) BaseStore_defineProperties(Constructor.prototype, protoProps); if (staticProps) BaseStore_defineProperties(Constructor, staticProps); return Constructor; }

/*
 * @Author: liyxt
 * @Date: 2020-06-05 15:29:13
 * @LastEditors: bbq
 * @LastEditTime: 2020-11-16 15:00:44
 * @Description: file content
 */






function uuidv4() {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Object(index_["getSafeRandom"])() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

var BaseStore_BaseStore = /*#__PURE__*/function () {
  function BaseStore() {
    var _this = this;

    BaseStore_classCallCheck(this, BaseStore);

    this.uuid = uuidv4();
    this.store = {};
    this.ctx = null;
    this.fieldMap = {};
    this.components = {};
    this.updateQueue = [];

    this.updateItem = function (paths) {
      paths = toArray(paths);

      var item = get_get(_this.fieldMap, paths);

      if (Array.isArray(item)) {
        item.forEach(function (item) {
          return item === null || item === void 0 ? void 0 : item.forceUpdate();
        });
      } else if (item && BaseStore_typeof(item) === 'object') {
        Object.keys(item).forEach(function (key) {
          _this.updateItem(paths.concat(key));
        });
      }
    };

    this.findDOMNode = function (paths) {
      paths = toArray(paths);

      var item = get_get(_this.fieldMap, paths);

      return Object(external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_["findDOMNode"])(item);
    };

    this.forceUpdate = function (callback) {
      var _this$ctx;

      // 所有绑定此数据源的实例都需要更新
      (_this$ctx = _this.ctx) === null || _this$ctx === void 0 ? void 0 : _this$ctx.forceUpdate(callback);
    };

    this.setRef = function (ctx) {
      _this.ctx = ctx;
    };

    this.getRef = function () {
      return _this.ctx;
    };

    this.removeRef = function (ctx) {
      if (_this.ctx === ctx) {
        _this.ctx = null;
      }
    };

    this.registerField = function (path, instance) {
      if (!path) {
        return;
      }

      var instances = get_get(_this.fieldMap, path),
          fieldIndex = 0;

      if (instances) {
        fieldIndex = instances.push(instance) - 1;
      } else {
        instances = [instance];
      }

      _this.fieldMap = set_set(_this.fieldMap, path, instances);
      return function () {
        var instances = get_get(_this.fieldMap, path);

        instances[fieldIndex] = null;
        _this.fieldMap = set_set(_this.fieldMap, path, instances);
      };
    };

    this.register = function (id, instance) {
      _this.components[id] = {
        current: instance,
        update: function update() {
          instance.forceUpdate();
        },
        focus: function focus() {
          var _instance$focus;

          (_instance$focus = instance.focus) === null || _instance$focus === void 0 ? void 0 : _instance$focus.call(instance);
        },
        blur: function blur() {
          var _instance$blur;

          (_instance$blur = instance.blur) === null || _instance$blur === void 0 ? void 0 : _instance$blur.call(instance);
        }
      };
    };

    this.unregister = function (id) {
      delete _this.components[id];
    };

    this.getComponent = function (id) {
      return _this.components[id];
    };

    this.updateComponent = function (id) {
      _this.getComponent(id).update();
    };

    this.focusComponent = function (id) {
      _this.getComponent(id).focus();
    };

    this.blurComponent = function (id) {
      _this.getComponent(id).blur();
    };

    this.getAllHooks = function () {
      // times++
      var hooks = _this.getHooks();

      var finalHooks = Object.create(Object.defineProperties({}, {
        registerField: {
          value: _this.registerField,
          enumerable: false,
          configurable: false,
          writable: false
        }
      }));
      finalHooks = Object.assign(finalHooks, BaseStore_objectSpread(BaseStore_objectSpread({}, hooks), {}, {
        setRef: _this.setRef,
        getRef: _this.getRef,
        removeRef: _this.removeRef,
        setMeta: _this.setMeta,
        getMeta: _this.getMeta,
        // 获取store实例，方便内部使用
        getInstance: function getInstance() {
          return _this;
        }
      }));
      return finalHooks;
    };
  }

  BaseStore_createClass(BaseStore, [{
    key: "set",
    // 向store中设值，返回不可变数据
    value: function set(paths, value) {
      paths = toArray(paths);
      this.store = set_set(this.store, paths, value);
      return this.store;
    } // 从store中取值

  }, {
    key: "get",
    value: function get(paths) {
      paths = toArray(paths);

      var value = get_get(this.store, paths);

      return value;
    } // 设置组件实例

  }]);

  return BaseStore;
}();


function hookFactory(Store) {
  return function () {
    for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    var store = _construct(Store, rest);

    return store.getAllHooks();
  };
}
// CONCATENATED MODULE: ./src/platform/template/BaseComponent.js
function BaseComponent_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BaseComponent_typeof = function _typeof(obj) { return typeof obj; }; } else { BaseComponent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BaseComponent_typeof(obj); }

function BaseComponent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BaseComponent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BaseComponent_createClass(Constructor, protoProps, staticProps) { if (protoProps) BaseComponent_defineProperties(Constructor.prototype, protoProps); if (staticProps) BaseComponent_defineProperties(Constructor, staticProps); return Constructor; }

function BaseComponent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BaseComponent_setPrototypeOf(subClass, superClass); }

function BaseComponent_setPrototypeOf(o, p) { BaseComponent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BaseComponent_setPrototypeOf(o, p); }

function BaseComponent_createSuper(Derived) { var hasNativeReflectConstruct = BaseComponent_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = BaseComponent_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = BaseComponent_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return BaseComponent_possibleConstructorReturn(this, result); }; }

function BaseComponent_possibleConstructorReturn(self, call) { if (call && (BaseComponent_typeof(call) === "object" || typeof call === "function")) { return call; } return BaseComponent_assertThisInitialized(self); }

function BaseComponent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BaseComponent_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function BaseComponent_getPrototypeOf(o) { BaseComponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BaseComponent_getPrototypeOf(o); }

/*
 * @Author: liyxt
 * @Date: 2020-06-05 15:48:58
 * @LastEditors: liyxt
 * @LastEditTime: 2020-06-17 15:29:19
 * @Description: file content
 */


var BaseComponent = /*#__PURE__*/function (_Component) {
  BaseComponent_inherits(BaseComponent, _Component);

  var _super = BaseComponent_createSuper(BaseComponent);

  function BaseComponent(props) {
    var _this;

    BaseComponent_classCallCheck(this, BaseComponent);

    _this = _super.call(this, props);
    props.store.setRef(BaseComponent_assertThisInitialized(_this));
    return _this;
  } // eslint-disable-next-line react/require-render-return


  BaseComponent_createClass(BaseComponent, [{
    key: "render",
    value: function render() {
      throw '请复写BaseComponent的render方法！';
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.store.removeRef(this);
    }
  }]);

  return BaseComponent;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);


// CONCATENATED MODULE: ./src/platform/template/Data.js
function Data_toConsumableArray(arr) { return Data_arrayWithoutHoles(arr) || Data_iterableToArray(arr) || Data_unsupportedIterableToArray(arr) || Data_nonIterableSpread(); }

function Data_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Data_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function Data_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Data_arrayLikeToArray(arr); }

function Data_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Data_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Data_ownKeys(Object(source), true).forEach(function (key) { Data_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Data_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Data_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Data_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Data_typeof = function _typeof(obj) { return typeof obj; }; } else { Data_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Data_typeof(obj); }

function _slicedToArray(arr, i) { return Data_arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || Data_unsupportedIterableToArray(arr, i) || Data_nonIterableRest(); }

function Data_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Data_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Data_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Data_arrayLikeToArray(o, minLen); }

function Data_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Data_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Data_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Data_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Data_createClass(Constructor, protoProps, staticProps) { if (protoProps) Data_defineProperties(Constructor.prototype, protoProps); if (staticProps) Data_defineProperties(Constructor, staticProps); return Constructor; }

/*
 * @Author: liyxt
 * @Date: 2020-06-29 09:33:08
 * @LastEditors: bbq
 * @LastEditTime: 2020-11-09 14:12:19
 * @Description: file content
 */



var Data_ArrayData = /*#__PURE__*/function () {
  function ArrayData() {
    var originData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var keyPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    Data_classCallCheck(this, ArrayData);

    this.isArrayData = true;

    if (originData.isArrayData) {
      return originData;
    }

    var _this$dataTranslater = this.dataTranslater(originData, toArray(keyPath)),
        data = _this$dataTranslater.data;

    var newProperties = Object.setPrototypeOf([], Object.getPrototypeOf(originData));
    Object.entries({
      data: data,
      keyPath: toArray(keyPath),
      isArrayData: this.isArrayData,
      query: this.query,
      update: this.update,
      queryIndexByKey: this.queryIndexByKey,
      splice: this.splice,
      pop: this.pop,
      push: this.push,
      shift: this.shift,
      unshift: this.unshift // sort: this.sort,
      // reverse: this.reverse,

    }).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      Object.defineProperty(newProperties, key, {
        value: typeof value === 'function' ? value.bind(originData) : value,
        enumerable: false,
        writable: key === 'isArrayData' ? true : false,
        configurable: false
      });
    });
    Object.defineProperty(newProperties, 'order', {
      get: function get() {
        var _this = this;

        return this.map(function (e) {
          return get_get(e, _this.keyPath);
        });
      },
      enumerable: false,
      configurable: false
    });
    Object.setPrototypeOf(originData, newProperties);
    return originData;
  }
  /**
   * 数据转换器：将数组转换为易【增删改查】的数据结构
   * @param {Array} originData 
   * @param {Array | String} keyPath 
   */


  Data_createClass(ArrayData, [{
    key: "dataTranslater",
    value: function dataTranslater(originData, keyPath) {
      var data = {};

      if (Array.isArray(originData)) {
        originData.map(function (item) {
          var key = get_get(item, keyPath);

          data[key] = item;
          return key;
        });
      }

      return {
        data: data
      };
    }
    /**
     * 
     * @param {Number} param 整数时，按下标查找 
     * @param {String} param 字符串时，按key查找 
     * @param {Object} param 对象时，按精准条件查找 
     */

  }, {
    key: "query",
    value: function query(param) {
      var key, index;

      if (typeof param === 'number') {
        index = param;
      } else if (typeof param === 'string') {
        key = param;
      } else if (param && Data_typeof(param) === 'object') {
        key = param.key;
        index = param.index;
      }

      if (index !== undefined) {
        return this[index];
      } else if (key !== undefined) {
        return this.data[key];
      } else {
        return null;
      }
    }
  }, {
    key: "update",
    value: function update(param, func) {
      var _this2 = this;

      var res = this.query(param);

      var key = get_get(res, this.keyPath);

      var finalValue = func(Data_objectSpread({}, res)); // 保留引用

      Object.keys(this.data[key]).forEach(function (property) {
        delete _this2.data[key][property];
      });
      Object.assign(this.data[key], finalValue); // 同步key

      set_set(this.data[key], this.keyPath, key);
      return this;
    }
  }, {
    key: "queryIndexByKey",
    value: function queryIndexByKey(key) {
      var _this3 = this;

      if (Array.isArray(key)) {
        return key.map(function (k) {
          return _this3.queryIndexByKey(k);
        });
      } else {
        return this.findIndex(function (e) {
          return get_get(e, _this3.keyPath) === key;
        });
      }
    } // 还原数组方法

  }, {
    key: "pop",
    value: function pop() {
      var element = Array.prototype.pop.call(this);

      var key = get_get(element, this.keyPath);

      key !== undefined && delete this.data[key];
      return element;
    }
  }, {
    key: "push",
    value: function push() {
      var _Array$prototype$push,
          _this4 = this;

      for (var _len = arguments.length, elements = new Array(_len), _key = 0; _key < _len; _key++) {
        elements[_key] = arguments[_key];
      }

      var length = (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [this].concat(elements));

      elements.forEach(function (element) {
        var key = get_get(element, _this4.keyPath);

        _this4.data[key] = element;
      });
      return length;
    }
  }, {
    key: "shift",
    value: function shift() {
      var element = Array.prototype.shift.call(this);

      var key = get_get(element, this.keyPath);

      key !== undefined && delete this.data[key];
      return element;
    }
  }, {
    key: "unshift",
    value: function unshift() {
      var _Array$prototype$unsh,
          _this5 = this;

      for (var _len2 = arguments.length, elements = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        elements[_key2] = arguments[_key2];
      }

      var length = (_Array$prototype$unsh = Array.prototype.unshift).call.apply(_Array$prototype$unsh, [this].concat(elements));

      elements.forEach(function (element) {
        var key = get_get(element, _this5.keyPath);

        _this5.data[key] = element;
      });
      return length;
    } // sort() {
    // }
    // reverse() {
    // }

  }, {
    key: "splice",
    value: function splice(index, length) {
      var _Array$prototype$spli,
          _this6 = this;

      for (var _len3 = arguments.length, newData = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        newData[_key3 - 2] = arguments[_key3];
      }

      // 操作原数组
      var deleted = (_Array$prototype$spli = Array.prototype.splice).call.apply(_Array$prototype$spli, [this, index, length].concat(newData)); // 删除


      deleted.forEach(function (element) {
        var key = get_get(element, _this6.keyPath);

        delete _this6.data[key];
      }); // 插入

      newData.forEach(function (element) {
        var key = get_get(element, _this6.keyPath);

        _this6.data[key] = element;
      });
      return deleted;
    }
  }]);

  return ArrayData;
}();
var Data_TreeData = /*#__PURE__*/function () {
  function TreeData() {
    var _this7 = this;

    var originData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var keyPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    Data_classCallCheck(this, TreeData);

    this.isArrayData = true;

    this.query = function (param) {
      var key;

      if (typeof param === 'string') {
        key = param;
      } else if (param && Data_typeof(param) === 'object') {
        key = param.key;
      }

      if (key !== undefined) {
        return _this7.data[key];
      } else {
        return null;
      }
    };

    this.get = function () {
      return _this7.originData;
    };

    this.getArrayData = function () {
      return _this7.arrayData;
    };

    this.dfs = function (callback) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this7.originData;
      data.forEach(function (node) {
        callback(node);

        if (Array.isArray(node.children)) {
          _this7.dfs(callback, node.children);
        }
      });
    };

    this.bfs = function () {};

    this.addNode = function (nodePaths, newNode) {};

    this.deleteNode = function (nodePaths) {};

    this.editNode = function (nodePaths, newNode) {};

    if (originData.isArrayData) {
      return originData;
    }

    this.arrayData = [];
    this.data = {};
    this.dataTranslater(originData, toArray(keyPath));
    var newProperties = Object.setPrototypeOf([], Object.getPrototypeOf(originData));
    Object.entries({
      keyPath: toArray(keyPath),
      isArrayData: this.isArrayData,
      arrayData: this.arrayData,
      query: this.query,
      update: this.update,
      getArrayData: this.getArrayData,
      get: this.get // splice: this.splice,
      // pop: this.pop,
      // push: this.push,
      // shift: this.shift,
      // unshift: this.unshift,
      // sort: this.sort,
      // reverse: this.reverse,
      // dfs
      // dfs
      // addNode
      // deleteNode
      // editNode

    }).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];

      Object.defineProperty(newProperties, key, {
        value: typeof value === 'function' ? value.bind(originData) : value,
        enumerable: false,
        writable: key === 'isArrayData' ? true : false,
        configurable: false
      });
    });
    Object.setPrototypeOf(originData, newProperties);
    this.originData = originData;
    return originData;
  }
  /**
   * ———— 复写父类方法 ————
   * 数据转换器：将树型结构转换为易【增删改查】的数据结构
   * @param {Array} originData 
   * @param {Array | String} keyPath 
   */


  Data_createClass(TreeData, [{
    key: "dataTranslater",
    value: function dataTranslater(data, keyPath) {
      var _this8 = this;

      var parentPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      if (Array.isArray(data)) {
        data.forEach(function (item) {
          var key = get_get(item, keyPath);

          _this8.data[key] = item;

          _this8.arrayData.push(item);

          item._parentPath = parentPath;
          item._level = level;

          _this8.dataTranslater(item.children, keyPath, [].concat(Data_toConsumableArray(parentPath), [key]), level + 1);
        });
      }
    }
    /**
     * 
     * @param {String} param 字符串时，按key查找 
     * @param {Object} param 对象时，按精准条件查找 
     */

  }, {
    key: "update",
    value: function update(param, func) {
      var _this9 = this;

      var res = this.query(param);

      var key = get_get(res, this.keyPath);

      var finalValue = func(Data_objectSpread({}, res)); // 保留引用

      Object.keys(this.data[key]).forEach(function (property) {
        delete _this9.data[key][property];
      });
      Object.assign(this.data[key], finalValue); // 同步key

      set_set(this.data[key], this.keyPath, key);
      return this;
    } // getHooks = () => {
    //     return {
    //         query: this.query,
    //         update: this.update,
    //         get: this.get,
    //         getArrayData: this.getArrayData,
    //         addNode: this.addNode,
    //         deleteNode: this.deleteNode,
    //         editNode: this.editNode,
    //         isTreeData: true,
    //     }
    // }

  }]);

  return TreeData;
}();
function NormalMetaData(data) {
  return new Data_ArrayData(data, 'attrcode');
}
function NormalTreeData(data) {
  return new Data_TreeData(data, 'attrcode');
}
// CONCATENATED MODULE: ./src/platform/template/validate.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = validate_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function validate_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return validate_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return validate_arrayLikeToArray(o, minLen); }

function validate_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * 校验函数
 * @param {any} value 要校验的值
 * @param {rules} options 校验规则
 * @param {stopOnFirstError} options 遇到第一个错误时停止校验
 * @returns {array} 包含错误信息的数组
 */
function validate(value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$rules = options.rules,
      rules = _options$rules === void 0 ? [] : _options$rules,
      _options$stopOnFirstE = options.stopOnFirstError,
      stopOnFirstError = _options$stopOnFirstE === void 0 ? false : _options$stopOnFirstE,
      errors = [];
  !Array.isArray(rules) && (rules = [rules]);

  var _iterator = _createForOfIteratorHelper(rules),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
          _step$value$length = _step$value.length,
          length = _step$value$length === void 0 ? Infinity : _step$value$length,
          required = _step$value.required,
          pattern = _step$value.pattern,
          type = _step$value.type,
          max = _step$value.max,
          min = _step$value.min,
          scale = _step$value.scale,
          validator = _step$value.validator,
          transform = _step$value.transform,
          message = _step$value.message;

      if (required && [undefined, null, ''].includes(value)) {
        errors.push(message);
        if (stopOnFirstError) return errors;
      }

      if (type && Object.prototype.toString.call(value).slice(8, -1).toLowerCase() !== type) {
        errors.push(message);
        if (stopOnFirstError) return errors;
      } else {
        // 类型校验通过
        switch (Object.prototype.toString.call(value).slice(8, -1).toLowerCase()) {
          case 'string':
            if (value.length > Number(length)) {
              errors.push(message);
              if (stopOnFirstError) return errors;
            }

            if (pattern && !pattern.test(value)) {
              errors.push(message);
              if (stopOnFirstError) return errors;
            }

            break;

          case 'number':
            if (max && value > Number(max)) {
              errors.push(message);
              if (stopOnFirstError) return errors;
            } else if (min && value < Number(min)) {
              errors.push(message);
              if (stopOnFirstError) return errors;
            }

            break;

          case 'array':
            if (value.length > Number(length)) {
              errors.push(message);
              if (stopOnFirstError) return errors;
            }

            break;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return errors;
}
// CONCATENATED MODULE: ./src/platform/template/index.js
/*
 * @Author: liyxt
 * @Date: 2020-04-20 09:54:59
 * @LastEditors: liyxt
 * @LastEditTime: 2020-06-29 09:33:30
 * @Description: file content
 */









/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(651);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(103);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(321);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 321:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(323)('keys');
var uid = __webpack_require__(167);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(58);
var global = __webpack_require__(85);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(166) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 324:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 325:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(650);
module.exports = __webpack_require__(58).Object.assign;


/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(77) && !__webpack_require__(104)(function () {
  return Object.defineProperty(__webpack_require__(396)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(103);
var document = __webpack_require__(85).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(105);
var toIObject = __webpack_require__(114);
var arrayIndexOf = __webpack_require__(653)(false);
var IE_PROTO = __webpack_require__(322)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(165);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 58:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);

function omit(obj, fields) {
  var shallowCopy = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, obj);
  for (var i = 0; i < fields.length; i++) {
    var key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}

/* harmony default export */ __webpack_exports__["default"] = (omit);

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(394), __esModule: true };

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(101);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(652) });


/***/ }),

/***/ 651:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(77);
var getKeys = __webpack_require__(143);
var gOPS = __webpack_require__(325);
var pIE = __webpack_require__(168);
var toObject = __webpack_require__(144);
var IObject = __webpack_require__(320);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(104)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(114);
var toLength = __webpack_require__(398);
var toAbsoluteIndex = __webpack_require__(654);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(165);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(104)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 85:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ })

/******/ });
});