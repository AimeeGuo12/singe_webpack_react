(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("react-dom"), require("@platform/template/index"), require("@platform/form/index"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@platform/api/index", "@platform/base/index", "react-dom", "@platform/template/index", "@platform/form/index"], factory);
	else if(typeof exports === 'object')
		exports["@platform/tree-table/index"] = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("react-dom"), require("@platform/template/index"), require("@platform/form/index"));
	else
		root["@platform/tree-table/index"] = factory(root["React"], root["@platform/api/index"], root["@platform/base/index"], root["ReactDOM"], root["@platform/template/index"], root["@platform/form/index"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__24__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 422);
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

/***/ 12:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__24__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ treeTableCompatible; });

// EXTERNAL MODULE: external {"root":"React","var":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(0);
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_);

// EXTERNAL MODULE: external {"root":"ReactDOM","var":"ReactDOM","commonjs":"react-dom","commonjs2":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_ = __webpack_require__(6);
var external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(5);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external "@platform/base/index"
var index_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@platform/api/index"
var api_index_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/platform/components/TreeTable/Cell.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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







var Cell_Cell = /*#__PURE__*/function (_Component) {
  _inherits(Cell, _Component);

  var _super = _createSuper(Cell);

  function Cell(props) {
    var _this;

    _classCallCheck(this, Cell);

    _this = _super.call(this, props);

    _this.handleMouseOver = function () {
      if (_this.cellDom) {
        var tipStatus = _this.state.tipStatus;

        var firstCol = _this.cellDom.parentNode.getAttribute('class').includes('first-col');

        var tipNode = null;
        var cellParent = _this.cellDom.parentNode;

        var realNode = _this.cellDom.querySelector('.cell-context');

        if (cellParent) {
          tipNode = firstCol ? cellParent.parentNode && cellParent.parentNode.parentNode : cellParent;
        }

        if (tipNode) {
          if (realNode.offsetWidth > tipNode.clientWidth && tipStatus === false) {
            _this.setState({
              tipStatus: true
            });
          }

          if (realNode.offsetWidth <= tipNode.clientWidth && tipStatus === true) {
            _this.setState({
              tipStatus: false
            });
          }
        }
      }
    };

    _this.state = {
      tipStatus: false
    };
    return _this;
  }

  _createClass(Cell, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cellDom = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          item = _this$props.item,
          fixedStyle = _this$props.fixedStyle,
          context = _this$props.context,
          multipleRowCell = _this$props.multipleRowCell,
          searchValue = _this$props.searchValue,
          beforeStr = _this$props.beforeStr,
          index = _this$props.index,
          afterStr = _this$props.afterStr,
          record = _this$props.record,
          onCellMouseDown = _this$props.onCellMouseDown,
          isEllipsis = _this$props.isEllipsis;
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        fieldid: Object(api_index_["getSysFieldid"])(item.attrcode),
        className: classnames_default()('dobule-text', {
          'dobule-text-fixed': !!(item.fixed && item.fixed === 'left')
        }),
        style: fixedStyle,
        ref: function ref(dom) {
          _this2.cellDom = external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(dom);
        },
        onMouseOver: this.handleMouseOver,
        onMouseDown: function onMouseDown(e) {
          onCellMouseDown && onCellMouseDown(record, index, item.attrcode, item, e);
        }
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Tooltip"], {
        placement: "top",
        overlay: this.state.tipStatus ? context : '',
        className: "tooltip-word-color",
        delay: 1,
        inverse: true
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: classnames_default()({
          'single-line-and-ellipsis': !multipleRowCell && isEllipsis,
          'three-line-and-ellipsis': !isEllipsis
        })
      }, beforeStr || afterStr || searchValue ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "cell-context"
      }, beforeStr, index !== -1 && !!searchValue ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "u-table-searchable-filter"
      }, searchValue) : '', afterStr) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "cell-context"
      }, "\xA0"), "  ")));
    }
  }]);

  return Cell;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);

/* harmony default export */ var TreeTable_Cell = (Cell_Cell);
// CONCATENATED MODULE: ./src/platform/components/TreeTable/containers.js
var SAVE_MULTI = {};
var STOP_CHECK_ELEMENT = 'stop-check-element';
var STOP_CHECK_OPERATION_ELEMENT = 'stop-check-operation-element';
// EXTERNAL MODULE: external "@platform/template/index"
var template_index_ = __webpack_require__(12);

// EXTERNAL MODULE: external "@platform/form/index"
var form_index_ = __webpack_require__(24);
var form_index_default = /*#__PURE__*/__webpack_require__.n(form_index_);

// CONCATENATED MODULE: ./src/platform/components/TreeTable/utils.js


/*
 * @Descripttion:
 * @version:
 * @Author: bbq
 * @Date: 2020-12-08 16:04:10
 * @LastEditors: bbq
 * @LastEditTime: 2020-12-11 14:38:00
 */

var getVarType = function getVarType(v) {
  return Object.prototype.toString.call(v).slice(8, -1);
};
/**
 * 判断是否为对象
 * @param {*object} obj 
 */


function isObject(obj) {
  return getVarType(obj) === 'Object';
}
/* 检测类型是否为数组 */

function isArray(param) {
  return getVarType(param) === 'Array' || Array.isArray(param);
}
/* 检测类型是否为字符串 */

function isString(param) {
  return getVarType(param) === 'String';
}
/* 检测类型是否为方法 */

function isFunction(param) {
  return getVarType(param) === 'Function';
}
/* 检测类型是否为Promise对象 */

function isPromise(param) {
  return getVarType(param) === 'Promise';
}
/* 检测类型是否为数字 */

function isNumber(param) {
  return getVarType(param) === 'Number' && !Number.isNaN(param);
}
/*
 * @method   检测是否是需要是boolean类型
 */

function isBoolean(param) {
  return getVarType(param) === 'Boolean';
}
/*
 * @method   是否是undefined
 */

function isUndefined(origin) {
  return typeof origin === 'undefined' || origin === void 0;
}
/*
 * @method   if条件下为false   除去NaN、0、-0、false   剩余undefined、null、""
 */

function isWrong(param) {
  return typeof param === 'undefined' || param === null || param === '';
}
function isNullOrVoid(param) {
  return typeof param === 'undefined' || param === null;
}
/*
 * @method   if条件下为false   除去NaN、0、-0、false   剩余undefined、null、""
 */

function isWrongFalse(param) {
  return typeof param === 'undefined' || param === null || param === '' || param === false;
}
/**
 * 生成唯一标识
 */

function uuidv4() {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Object(api_index_["getSafeRandom"])() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
function getLists(source) {
  var lists = [];

  var handleLists = function handleLists(node) {
    lists.push(node);

    if (node.children) {
      node.children.map(function (n, i) {
        handleLists(n);
      });
    } else {
      return;
    }
  };

  source.map(function (node) {
    return handleLists(node);
  });
  return lists;
} //   获取最深树层级 数

function countDeep(source) {
  if (!source) return; // 铺平数据

  var lists = getLists(source); // 找到孙子  没有自己的儿子的都是孙子  所以我要加油找女朋友

  var sunLists = [];
  lists.map(function (v, i) {
    if (!v.children || v.children.length == 0) sunLists.push(v);
  }); // 现在查找孙子的层级

  var count = function count(node) {
    var count = 0;

    var findFather = function findFather(child) {
      count++;
      lists.map(function (node) {
        if (node.key === child.pid) {
          findFather(node);
        } else {
          return;
        }
      });
    };

    findFather(node);
    return count;
  };

  var saveCount = [];
  sunLists.forEach(function (node) {
    saveCount.push(count(node));
  }); // 获取数组最大值 得到最深树层数

  if (saveCount.length === 0) {
    return 0;
  } else {
    return Math.max.apply(null, saveCount);
  }
}

function findParentTd(el) {
  while (el.parentElement) {
    el = el.parentElement;

    if (el.tagName === "TD") {
      return el;
    }
  }

  return null;
}
/**
 * @desc 如果点击的是操作列，展开图标，文本夹图标就不执行选中事件。 选中文本时也不执行
 * @param e {object} 事件源
 * @param checkOnRowClick {boolean} 配置是否需要勾选功能
 */


function stopCheckBoxChange(e, checkOnRowClick) {
  //业务组配置不需要勾选功能
  if (checkOnRowClick === false) {
    return true;
  } //点击的是展开图标


  if (e.target.className.includes("u-table-row-expand-icon")) {
    return true;
  } //点击阻止选中按钮元素（文本夹图）


  if (e.target.className.includes(STOP_CHECK_ELEMENT)) {
    return true;
  } //点击操作列元素


  var td = findParentTd(e.target);

  if (td) {
    var operationContainer = td.querySelector(".".concat(STOP_CHECK_OPERATION_ELEMENT));

    if (operationContainer && operationContainer.contains(e.target)) {
      td = operationContainer = null;
      return true;
    }
  } //选中文本后触发click事件


  if (document.getSelection().toString()) {
    return true;
  }
}
function getChildren(data, parentKey) {
  if (data == null || data.length == 0) return false;
  var children = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i].key == parentKey) {
      return data[i].children;
    } else if (Array.isArray(data[i].children) && data[i].children.length > 0) {
      children = children.concat(data[i].children);
    }
  }

  return getChildren(children, parentKey);
}
// CONCATENATED MODULE: ./src/platform/components/TreeTable/store.js
function store_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { store_typeof = function _typeof(obj) { return typeof obj; }; } else { store_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return store_typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function store_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function store_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function store_createClass(Constructor, protoProps, staticProps) { if (protoProps) store_defineProperties(Constructor.prototype, protoProps); if (staticProps) store_defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = store_getPrototypeOf(object); if (object === null) break; } return object; }

function store_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) store_setPrototypeOf(subClass, superClass); }

function store_setPrototypeOf(o, p) { store_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return store_setPrototypeOf(o, p); }

function store_createSuper(Derived) { var hasNativeReflectConstruct = store_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = store_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = store_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return store_possibleConstructorReturn(this, result); }; }

function store_possibleConstructorReturn(self, call) { if (call && (store_typeof(call) === "object" || typeof call === "function")) { return call; } return store_assertThisInitialized(self); }

function store_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function store_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function store_getPrototypeOf(o) { store_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return store_getPrototypeOf(o); }

/*
 * @Descripttion:
 * @version:
 * @Author: bbq
 * @Date: 2020-12-08 14:51:21
 * @LastEditors: bbq
 * @LastEditTime: 2020-12-24 15:08:59
 */




var store_Store = /*#__PURE__*/function (_BaseStore) {
  store_inherits(Store, _BaseStore);

  var _super = store_createSuper(Store);

  function Store(props) {
    var _this;

    store_classCallCheck(this, Store);

    _this = _super.call(this, props);
    _this.store = {
      // 表单组件对象
      formStore: form_index_default.a.useForm(),
      // 表格数据
      data: [],
      // 对象模式数据
      fullDataObject: {},
      // 列模板
      meta: {},
      // 表格属性
      async: false,
      rowId: 'rowId',
      // 是否子
      isCheckedHasChild: false,
      // 展开项
      expandedKeys: [],
      // 选中项
      checkedKeys: {},
      // 半选
      indeterminateKeys: {},
      currentSelectedRow: null,
      currentRow: null,
      // 弹窗类型
      modalType: null,
      // 折行
      isEllipsis: true,
      // 搜索结果
      searchValue: ''
    };
    _this.cache = {
      cacheData: [],
      langJson: {}
    };

    _this.getMeta = function () {
      var meta = _this.getStore("meta");

      return meta;
    };

    _this.getHooks = function () {
      // 这样处理的一下 才能报错  方法内部的this 永远指向 实例  否则会指向下面的 {} 对象
      _this.getMeta = _this.getMeta.bind(store_assertThisInitialized(_this));
      _this.setMeta = _this.setMeta.bind(store_assertThisInitialized(_this));
      return {
        // 按路径索引 给内部使用
        getStore: _this.getStore.bind(store_assertThisInitialized(_this)),
        setStore: _this.setStore.bind(store_assertThisInitialized(_this)),

        /*-------------------上面的部分------------------*/
        //模板
        getMeta: _this.getMeta.bind(store_assertThisInitialized(_this)),
        setMeta: _this.setMeta.bind(store_assertThisInitialized(_this)),
        getViewMeta: _this.getViewMeta.bind(store_assertThisInitialized(_this)),
        // 缓存
        getCache: _this.getCache.bind(store_assertThisInitialized(_this)),
        setCache: _this.setCache.bind(store_assertThisInitialized(_this)),
        //
        setData: _this.setData.bind(store_assertThisInitialized(_this)),
        getData: _this.getData.bind(store_assertThisInitialized(_this)),
        // 刷新
        refresh: _this.refresh
      };
    };

    _this.name = "treeTableStore";
    _this.refresh = _this.refresh.bind(store_assertThisInitialized(_this));
    _this.uuid = _this.store.uuid = uuidv4();
    return _this;
  } // 数据源


  store_createClass(Store, [{
    key: "getStore",

    /**
     * @description: 复写
     * @param {type}
     * @return:
     */
    value: function getStore(paths) {
      return _get(store_getPrototypeOf(Store.prototype), "get", this).call(this, paths);
    }
    /**
     * @description: 复写
     * @param {type}
     * @return:
     */

  }, {
    key: "setStore",
    value: function setStore(paths, value) {
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      var res = _get(store_getPrototypeOf(Store.prototype), "set", this).call(this, paths, value);

      shouldForceUpdate && this.forceUpdate(callback);
      return res;
    }
    /*-------------缓存-------------*/

    /**
     * @description: 设置缓存
     * @param {type}
     * @return:
     */

  }, {
    key: "setCache",
    value: function setCache(path, value) {
      if (!path) {
        console.warn("invalid params <path> to setting");
        return;
      }

      if (!isArray(path)) {
        path = [path];
      }

      var current = this.cache;
      var len = path.length;
      path.forEach(function (item, index) {
        if (!current[item]) {
          current[item] = {};
        }

        if (index === len - 1) {
          current[item] = value;
        } else {
          current = current[item];
        }
      });
    }
    /**
     * @description: 获取缓存
     * @param {type}
     * @return:
     */

  }, {
    key: "getCache",
    value: function getCache(paths) {
      if (isUndefined(paths)) {
        console.warn("invalid params <paths> to setting");
        return;
      }

      if (!isArray(paths)) {
        paths = [paths];
      }

      var current = this.cache;
      paths.some(function (item) {
        if (isUndefined(item) || isNullOrVoid(current)) {
          isUndefined(item) && console.warn("paths has empty item[%s]", paths);
          return;
        }

        if (!current[item]) {
          current = null;
          return;
        }

        current = current[item];
        return true;
      }); // console.log(this.cache);

      return current;
    }
    /*-------------私有-------------*/

    /*-------------列-------------*/

    /**
     * @description: 设置所有meta
     * @param {type}
     * @return:
     */

  }, {
    key: "setMeta",
    value: function setMeta(meta, id) {
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var name = this.getStore("name");
      id && this.setStore("name", id || name, false); // 我觉得这里应该 考虑page上的meta更新

      this.setStore("meta", meta, shouldForceUpdate); // 更新表单的meta

      var formStore = this.getStore('formStore');

      if (formStore && meta[id] && isArray(meta[id].items)) {
        var formColumns = [];
        meta[id].items.map(function (item) {
          if (item.itemtype !== 'customer') {
            // item 内部东西太复杂 直接给会导致一些问题
            var nItem = JSON.parse(JSON.stringify(item || {}, function (key, value) {
              if (key == 'render' || key == 'title') {
                // title 和 value 是react对象  会导致问题
                return undefined;
              }

              return value;
            }));
            delete nItem.render;
            delete nItem.title;
            formColumns.push(nItem);
          }
        });
        console.log(formColumns);
        formStore.setMeta(_defineProperty({}, this.uuid, {
          status: 'edit',
          items: formColumns,
          moduletype: "form",
          isunfold: false
        }), this.uuid);
      }
    }
    /**
     * @description: 获取所有meta
     * @param {type}
     * @return:
     */

  }, {
    key: "_hasMeta",

    /**
     * @description: 是否包含当前meta
     * @param {type}
     * @return:
     */
    value: function _hasMeta(id) {
      var meta = this.getStore("meta") || {};

      if (!id || !isObject(meta[id]) || !meta[id].items) {
        console.warn('not find meta');
        return [];
      }

      return meta[id].items;
    }
    /**
     * @description: 获取id所在视图的meta
     * @param {type}
     * @return:
     */

  }, {
    key: "getViewMeta",
    value: function getViewMeta(id) {
      var viewMeta = this._hasMeta(id);

      return viewMeta;
    }
    /**
     * @description: 设置数据
     * @param {type}
     * @return:
     */

  }, {
    key: "setData",
    value: function setData(_ref) {
      var _ref$data = _ref.data,
          data = _ref$data === void 0 ? [] : _ref$data,
          _ref$shouldForceUpdat = _ref.shouldForceUpdate,
          shouldForceUpdate = _ref$shouldForceUpdat === void 0 ? true : _ref$shouldForceUpdat,
          callback = _ref.callback;
      var res = isArray(data) ? data : this.getData(); // console.log(res);
      // 格式化data

      this.setStore(["data"], res, shouldForceUpdate, callback);
    }
    /**
     * regexp 可以是方法 也可以是参数
     * @description: 获取数据
     * @param {type}
     * @return:
     */
    // @infoLog

  }, {
    key: "getData",
    value: function getData() {
      var regexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var data = this.getStore("data"); // console.log(data);
      // 添加规则什么的  比如删除 

      data = data.filter(function (item) {
        return !regexp.includes(item.status);
      });
      return data || [];
    } // 刷新整个绑定对象

  }, {
    key: "refresh",
    value: function refresh(callback) {
      this.forceUpdate && this.forceUpdate(callback);
    }
  }]);

  return Store;
}(template_index_["BaseStore"]);

/* harmony default export */ var TreeTable_store = (Object(template_index_["hookFactory"])(store_Store));
// CONCATENATED MODULE: ./src/platform/components/TreeTable/treeTable.js
function treeTable_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { treeTable_typeof = function _typeof(obj) { return typeof obj; }; } else { treeTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return treeTable_typeof(obj); }

function treeTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function treeTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function treeTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function treeTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) treeTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) treeTable_defineProperties(Constructor, staticProps); return Constructor; }

function treeTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) treeTable_setPrototypeOf(subClass, superClass); }

function treeTable_setPrototypeOf(o, p) { treeTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return treeTable_setPrototypeOf(o, p); }

function treeTable_createSuper(Derived) { var hasNativeReflectConstruct = treeTable_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = treeTable_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = treeTable_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return treeTable_possibleConstructorReturn(this, result); }; }

function treeTable_possibleConstructorReturn(self, call) { if (call && (treeTable_typeof(call) === "object" || typeof call === "function")) { return call; } return treeTable_assertThisInitialized(self); }

function treeTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function treeTable_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function treeTable_getPrototypeOf(o) { treeTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return treeTable_getPrototypeOf(o); }

/*
 * @Descripttion:树状表组件
 * @version:
 * @Author: bbq
 * @Date: 2020-12-07 17:01:56
 * @LastEditors: bbq
 * @LastEditTime: 2021-02-26 14:01:42
 */












__webpack_require__(374);

var defaultColor = ['#111111', '#555555', '#111', '#555'];

var treeTable_TreeTable = /*#__PURE__*/function (_BaseComponent) {
  treeTable_inherits(TreeTable, _BaseComponent);

  var _super = treeTable_createSuper(TreeTable);

  function TreeTable(props) {
    var _this;

    treeTable_classCallCheck(this, TreeTable);

    _this = _super.call(this, props);

    _this.setStateEve = function () {
      _this.forceUpdate();
    };

    _this.checkDataType = function (field) {
      var _this$props = _this.props,
          store = _this$props.store,
          id = _this$props.id;
      var meta = store.getMeta();
      var columns = meta[id];
      var data = columns.items.find(function (item) {
        return item.attrcode === field;
      });

      if (data) {
        return data.itemtype;
      }
    };

    _this.createNewData = function (data) {
      var fullDataObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var childKeyRecord = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var dataSource = data.map(function (item, index) {
        item.key = item.rowId; // 记录一下行顺序给 框选使用

        item.rowIndex = index;
        fullDataObject[item.key] = fullDataObject[item.key] || {};

        if (item.values.pid) {
          item.pid = item.values.pid.value;
        }

        if (Array.isArray(item.children)) {
          var childrenKeys = [];

          _this.createNewData(item.children, fullDataObject, childrenKeys);

          fullDataObject[item.key].childrenKeys = childrenKeys;
        }

        fullDataObject[item.key].item = item; // 取值给父级

        childKeyRecord.push(item.key);
        return item;
      });
      return dataSource;
    };

    _this.itemCheckBoxChange = function (data, key) {
      var _this$props2 = _this.props,
          store = _this$props2.store,
          showContextMenu = _this$props2.showContextMenu;
      var checkedKeys = store.getStore('checkedKeys');
      var indeterminateKeys = store.getStore('indeterminateKeys');
      checkedKeys[key] = !checkedKeys[key];
      var isCheckedHasChild = store.getStore('isCheckedHasChild');

      function setChecked(children) {
        if (Array.isArray(children)) {
          children.forEach(function (item) {
            checkedKeys[item.key] = checkedKeys[key];

            if (Array.isArray(item.children)) {
              setChecked(item.children);
            }
          });
        }
      } //包含下级时，全部选中


      if (isCheckedHasChild && showContextMenu) {
        var children = getChildren(data, key);
        console.log("设置children选中:  children", children);
        setChecked(children);
      } //只有在勾选下级选中情况下才会设置半选状态


      if (isCheckedHasChild) {
        var setPidCheckedStatus = function setPidCheckedStatus(pid) {
          function getAllChilrenList() {
            var children = getChildren([fullDataObject[pid].item], pid);
            var treeToList = getLists(children);
            return treeToList;
          }

          var allChilrenList = getAllChilrenList();
          var allLength = allChilrenList.length;
          var checkedLength = allChilrenList.filter(function (x) {
            return checkedKeys[x.key];
          }).length;

          if (allLength === checkedLength) {
            checkedKeys[pid] = true;
            indeterminateKeys[pid] = false;
          } else if (checkedLength) {
            checkedKeys[pid] = false;
            indeterminateKeys[pid] = true;
          } else {
            checkedKeys[pid] = false;
            indeterminateKeys[pid] = false;
          }
        };

        //设置半选状态
        indeterminateKeys[key] = false;
        var fullDataObject = store.getStore('fullDataObject') || {};
        var pid = fullDataObject[key] && fullDataObject[key].item.pid;

        while (pid) {
          //indeterminateKeys[pid] = true;
          if (fullDataObject[pid] && fullDataObject[pid].item) {
            setPidCheckedStatus(pid);
          }

          pid = fullDataObject[pid] && fullDataObject[pid].item && fullDataObject[pid].item.pid;
        }
        /*  let OriginFullDataObj = {...fullDataObject};
        delete OriginFullDataObj["all"];
        let OriginCheckedKeys = {...checkedKeys};
        delete OriginCheckedKeys["all"];
        let allKeysCount = Object.keys(OriginFullDataObj).length;
        let checkedCount = Object.values(OriginCheckedKeys).filter(x=>x).length;
        if(allKeysCount === checkedCount){
            checkedKeys["all"] = true;
            indeterminateKeys["all"] = false;
        }else if(checkedCount){
            checkedKeys["all"] = false;
            indeterminateKeys["all"] = true;
        }else{
            checkedKeys["all"] = false;
            indeterminateKeys["all"] = false;
        } */

      }

      store.setStore('checkedKeys', checkedKeys, false);
      store.setStore('indeterminateKeys', indeterminateKeys, true);
    };

    _this.selectAllChange = function (checked) {
      /*  let { store } = this.props;
      const fullDataObject = store.getStore('fullDataObject') || {};
      let checkedKeys = store.getStore('checkedKeys');
      let indeterminateKeys = store.getStore('indeterminateKeys');
      let allKeys = Object.keys(fullDataObject);
      checkedKeys["all"] = checked;
      indeterminateKeys["all"] = false;
      for (let key of allKeys) {
          checkedKeys[key] = checked;
          indeterminateKeys[key] = false;
      }
      store.setStore('checkedKeys', checkedKeys, false);
      store.setStore('indeterminateKeys', indeterminateKeys, true); */
    };

    _this.checkBoxChange_radio = function (data, key) {
      var store = _this.props.store;
      var checkedKeys = store.getStore('checkedKeys');

      if (checkedKeys[key]) {
        checkedKeys = {};
      } else {
        checkedKeys = treeTable_defineProperty({}, key, true);
      }

      store.setStore('checkedKeys', checkedKeys, false);
    };

    _this.onCheckboxChangeChild = function (text, record, index, e) {
      var _this$props3 = _this.props,
          store = _this$props3.store,
          checkboxChange = _this$props3.checkboxChange,
          checkedType = _this$props3.checkedType;
      var data = store.getData();
      e.stopPropagation();

      if (checkedType === 'radio') {
        //单选
        _this.checkBoxChange_radio(data, record.key);
      } else {
        //多选
        _this.itemCheckBoxChange(data, record.key);
      }

      if (Object(api_index_["isFunction"])(checkboxChange)) {
        checkboxChange(record, index, e);
      } // 更新


      _this.forceUpdate();
    };

    _this.findItem = function (data, key) {
      var res = null;

      var f = function f(data) {
        data.map(function (item) {
          if (item.rowId === key) {
            res = item;
            return true;
          } else if (Array.isArray(item.values.children)) {
            var r = f(item.values.children);

            if (r) {
              return false;
            }
          }
        });
      };

      f(data);
      return res;
    };

    _this.createNewCol = function (data, maxDeep) {
      var _this$props4 = _this.props,
          showCheckBox = _this$props4.showCheckBox,
          onCellMouseDown = _this$props4.onCellMouseDown,
          store = _this$props4.store,
          multipleRowCell = _this$props4.multipleRowCell;
      var langJson = _this.state.langJson;
      var expandedKeys = store.getStore('expandedKeys');
      var checkedKeys = store.getStore('checkedKeys');
      var indeterminateKeys = store.getStore('indeterminateKeys');
      var oldSearchValue = store.getStore('searchValue');
      var multiYes = langJson && langJson['insert-tree-table-009'];
      var multiNo = langJson && langJson['insert-tree-table-010'];
      var newArr = [];

      if (!Object(api_index_["isArray"])(data) || data.length < 1) {
        return [];
      }

      data.forEach(function (item) {
        if (item.visible) {
          item._width = item._width || item.width || 120;
          item.width = item.width || 120;
          item.title = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            fieldid: Object(api_index_["getSysFieldid"])(item.attrcode || 'opr'),
            style: {
              color: defaultColor.includes(item.color) ? '' : item.color
            }
          }, ' ', item.label, ' ');
          item.dataIndex = item.attrcode;

          if (item.itemtype !== 'customer' && item.itemtype !== 'numberindex') {
            if (!item.hasOwnProperty('render')) {
              item.render = function (text, record, index) {
                if (record && record.values.hasOwnProperty(item.attrcode)) {
                  if (item.itemtype === 'switch') {
                    return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
                      fieldid: Object(api_index_["getSysFieldid"])(item.attrcode),
                      onMouseDown: function onMouseDown(e) {
                        onCellMouseDown && onCellMouseDown(record, index, item.attrcode, item, e);
                      }
                    }, record.values[item.attrcode].value ? multiYes : multiNo);
                  } else {
                    var langIndex;
                    var langAttrCode;
                    var context = '';

                    if (item.itemtype === 'residtxt') {
                      var LangCode = Object(api_index_["getLangCode"])();
                      var loginLang = item.languageMeta.filter(function (i) {
                        return i.languageCode == LangCode;
                      });

                      if (loginLang[0]) {
                        langIndex = loginLang[0].index == '1' ? '' : loginLang[0].index;
                        langAttrCode = item.attrcode + langIndex;
                      }
                    }

                    if (langAttrCode && record.values[langAttrCode] && (record.values[langAttrCode].display || record.values[langAttrCode].value)) {
                      context = record.values[langAttrCode].display || record.values[langAttrCode].value || '';
                    } else {
                      context = record.values[item.attrcode].display || record.values[item.attrcode].value || '';
                    } //格式化时间格式


                    switch (item.itemtype) {
                      case 'datetimepicker':
                      case 'NCTZDatePickClientTime':
                        context = Object(api_index_["changeTime"])(context, 'YYYY-MM-DD HH:mm:ss');
                        break;

                      case 'NCTZDatePickerStart':
                      case 'NCTZDatePickerEnd':
                      case 'NCTZDatePickClientHourTime':
                      case 'datepicker':
                        context = Object(api_index_["changeTime"])(context, 'YYYY-MM-DD');
                        break;
                    }

                    switch (item.itemtype) {
                      case 'NCTZDatePickerStart':
                      case 'NCTZDatePickerEnd':
                      case 'NCTZDatePickClientHourTime':
                      case 'datePickerNoTimeZone':
                      case 'datepicker':
                        context = Object(api_index_["formatDatetime"])(context, 'date');
                        break;

                      case 'timepicker':
                        context = Object(api_index_["formatDatetime"])(context, 'time');
                        break;

                      case 'datetimepicker':
                      case 'NCTZDatePickClientTime':
                        context = Object(api_index_["formatDatetime"])(context, 'datetime');
                        break;
                    }

                    var fixedStyle = {
                      display: ''
                    };

                    if (item.fixed && item.fixed === 'left') {
                      if (item.width) {
                        var _width = String(item.width).replace('px', '');

                        if (_width != '120' && showCheckBox) {
                          fixedStyle.width = item.width;
                        }
                      }
                    }

                    if (typeof context != 'string') {
                      context += '';
                    } // 添加高亮 by bbqin


                    var searchValue = oldSearchValue || '';
                    var searchValueLow = searchValue.toLocaleLowerCase();
                    var contextLow = context.toLocaleLowerCase();
                    var beforeStr = '';
                    var afterStr = context;

                    var _index = contextLow.indexOf(searchValueLow);

                    if (searchValue && _index !== -1) {
                      beforeStr = context.substr(0, _index);
                      afterStr = context.substr(_index + searchValue.length);
                      searchValue = context.substr(_index, searchValue.length);
                    }

                    var isEllipsis = _this.props.store.getStore('isEllipsis');

                    return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(TreeTable_Cell, {
                      item: item,
                      beforeStr: beforeStr,
                      afterStr: afterStr,
                      searchValue: searchValue,
                      fixedStyle: fixedStyle,
                      context: context,
                      isEllipsis: isEllipsis,
                      multipleRowCell: multipleRowCell,
                      index: _index,
                      record: record,
                      onCellMouseDown: onCellMouseDown
                    });
                  }
                } else {
                  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
                    style: {
                      width: '100%',
                      height: '100%',
                      display: 'inline-block'
                    },
                    onMouseDown: function onMouseDown(e) {
                      onCellMouseDown && onCellMouseDown(record, index, item.attrcode, item, e);
                    }
                  });
                }
              };
            }
          } else if (item.itemtype === 'customer' && item.hasOwnProperty('render') && item.alreadyAssignment === undefined) {
            var Irender = item.render;
            item.alreadyAssignment = true;

            item.render = function (text, record, index) {
              return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
                fieldid: Object(api_index_["getSysFieldid"])('opr'),
                className: STOP_CHECK_OPERATION_ELEMENT,
                onMouseDown: function onMouseDown(e) {
                  onCellMouseDown && onCellMouseDown(record, index, item.attrcode, item, e);
                }
              }, Irender(text, record, index));
            };
          }

          newArr.push(item);
        }
      });
      var defaultColumns = [{
        title: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          fieldid: Object(api_index_["getSysFieldid"])('firstcol')
        }),

        /*   title: showCheckBox ? (<Checkbox className="table-checkbox" fieldid={getSysFieldid('firstcol')}
            onChange={this.selectAllChange} checked={checkedKeys["all"]}
            indeterminate={indeterminateKeys["all"]} />) : <span fieldid={getSysFieldid('firstcol')} />, */
        attrcode: 'checkbox',
        dataIndex: 'checkbox',
        itemtype: 'customer',
        width: '100px',
        _width: '100px',
        render: function render(text, record, index) {
          // console.log(record, index);
          if (showCheckBox) {
            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Checkbox"], {
              onMouseDown: function onMouseDown(e) {
                onCellMouseDown && onCellMouseDown(record, index, 'checkbox', {
                  attrcode: 'checkbox',
                  itemtype: 'customer'
                }, e);
              },
              className: "table-checkbox",
              checked: checkedKeys[record.key],
              indeterminate: indeterminateKeys[record.key],
              onClick: _this.onCheckboxChangeChild.bind(treeTable_assertThisInitialized(_this), text, record, index)
            });
          }
        }
      }];

      if (newArr[0].fixed && newArr[0].fixed == 'left') {
        defaultColumns[0].fixed = 'left';
      }

      var resArr = showCheckBox ? defaultColumns.concat(newArr) : newArr; // 给第一行增加图标

      var oldFirstColRender = resArr[0].render;
      resArr[0].render = null;

      resArr[0].render = function (text, record, index) {
        var expendSwich;

        if (Object.prototype.toString.call(record.isLeaf) == '[object Boolean]' && !record.isLeaf || Object.prototype.toString.call(record.isleaf) == '[object Boolean]' && !record.isleaf) {
          expendSwich = expandedKeys.includes(record.key) ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
            className: "icon iconfont  icon-wenjianjiadakai tree-wenjian treeTableIcon ".concat(STOP_CHECK_ELEMENT)
          }) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
            className: "icon iconfont  icon-wenjianjia tree-wenjian treeTableIcon ".concat(STOP_CHECK_ELEMENT)
          });
        } else {
          expendSwich = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
            className: "dian",
            style: {
              display: 'none'
            }
          });
        }

        var res = oldFirstColRender(text, record, index);

        if (res && res.props && res.props.children && res.props.children[0] && res.props.children[0].props && res.props.children[0].props.className === 'expend-switch') {
          return res;
        }

        if (res && res.props && res.props.className === 'table-checkbox') {
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            fieldid: Object(api_index_["getSysFieldid"])('firstcol'),
            onMouseDown: function onMouseDown(e) {
              onCellMouseDown && onCellMouseDown(record, index, 'checkbox', {
                attrcode: 'checkbox',
                itemtype: 'customer'
              }, e);
            }
          }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            className: "first-col"
          }, res), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            className: "expend-switch"
          }, expendSwich));
        }

        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          fieldid: Object(api_index_["getSysFieldid"])('firstcol'),
          onMouseDown: function onMouseDown(e) {
            onCellMouseDown && onCellMouseDown(record, index, 'checkbox', {
              attrcode: 'checkbox',
              itemtype: 'customer'
            }, e);
          },
          className: classnames_default()({
            zaiyihang: showCheckBox
          })
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          className: "expend-switch"
        }, expendSwich), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          className: "first-col"
        }, res));
      }; // 给第一列追加宽度


      var width = resArr[0]._width;

      if (width) {
        if (typeof width === 'string') {
          if (width.includes('px')) {
            width = width.replace('px', '');
          }

          width = Number(width);
        }

        width += countDeep(maxDeep) * 16;
      }

      resArr[0].width = width;
      return resArr;
    };

    _this.onExpand = function (status, item, e) {
      var _this$props5 = _this.props,
          store = _this$props5.store,
          expandEve = _this$props5.expandEve,
          collapandEve = _this$props5.collapandEve;
      var isCheckedHasChild = store.getStore('isCheckedHasChild');

      if (status) {
        if (expandEve && typeof expandEve === 'function') {
          store.setStore('currentRow', item, false);
          expandEve(item, isCheckedHasChild);
        }
      } else {
        if (Object(api_index_["isFunction"])(collapandEve)) {
          collapandEve(item);
        }
      } // 更新


      _this.forceUpdate();
    };

    _this.modalContent = function () {
      var _this$props6 = _this.props,
          store = _this$props6.store,
          onAfterEvent = _this$props6.onAfterEvent,
          onBeforeEvent = _this$props6.onBeforeEvent;
      var formStore = store.getStore('formStore'); // console.log(this.uuid);

      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "addModal"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(form_index_default.a, {
        name: _this.uuid,
        config: {
          onAfterEvent: onAfterEvent,
          onBeforeEvent: onBeforeEvent
        },
        store: formStore
      }));
    };

    _this.delNodeEve = function () {
      var delNodeCallBack = _this.props.delNodeCallBack;

      if (Object(api_index_["isFunction"])(delNodeCallBack)) {
        delNodeCallBack(_this.uuid);
      }
    };

    _this.beSureBtnClick = function () {
      var _this$props7 = _this.props,
          modal = _this$props7.modal,
          store = _this$props7.store,
          addNodeCallBack = _this$props7.addNodeCallBack,
          editNodeCallBack = _this$props7.editNodeCallBack;
      var modalType = store.getStore('modalType');
      var currentRow = store.getStore('currentRow');
      var formStore = store.getStore('formStore');
      var isValid = formStore.isCheckNow(); // console.log(isValid); TODO

      if (!isValid) {
        return false;
      }

      var data = {
        values: JSON.parse(JSON.stringify(formStore.getAllFormValue()))
      };

      if (modalType === 'add') {
        data.status = 2;

        if (Object(api_index_["isFunction"])(addNodeCallBack)) {
          addNodeCallBack(data, currentRow);
        }
      } else if (modalType === 'edit') {
        if (Object(api_index_["isFunction"])(editNodeCallBack)) {
          editNodeCallBack(data, currentRow);
        }
      }

      modal.close('treeTableManyColModal');
    };

    _this.onRowDoubleClick = function (record, index, event) {
      var ncOnRowDoubleClick = _this.props.ncOnRowDoubleClick;

      if (Object(api_index_["isFunction"])(ncOnRowDoubleClick)) {
        ncOnRowDoubleClick(record, index, event);
      }
    };

    _this.onRowClick = function (row, index, e) {
      var _this$props8 = _this.props,
          store = _this$props8.store,
          checkOnRowClick = _this$props8.checkOnRowClick,
          showCheckBox = _this$props8.showCheckBox,
          onRowClickEve = _this$props8.onRowClickEve;
      store.setStore('currentSelectedRow', row, false); // 为了避免和新开发的行框选点选区域选事件冲突

      if (e.ctrlKey || e.shiftKey || e.metaKey) {
        return;
      }

      if (showCheckBox && stopCheckBoxChange(e, checkOnRowClick)) return;

      if (Object(api_index_["isFunction"])(onRowClickEve)) {
        onRowClickEve(row, index, e);
      }

      _this.onCheckboxChangeChild(null, row, index, e);
    };

    _this.rowClassName = function (record, current) {
      var store = _this.props.store;
      var currentSelectedRow = store.getStore('currentSelectedRow');

      if (currentSelectedRow && currentSelectedRow.key == record.key) {
        return 'tree-table-col-selected';
      } else {
        return '';
      }
    };

    _this.createContextMenu = function () {
      var _this$props9 = _this.props,
          store = _this$props9.store,
          closeAllEve = _this$props9.closeAllEve,
          hideExpandAll = _this$props9.hideExpandAll,
          expandAllEve = _this$props9.expandAllEve,
          hideIncludeChild = _this$props9.hideIncludeChild,
          extendRightMenu = _this$props9.extendRightMenu;
      var langJson = _this.state.langJson;
      var data = store.getData();
      var isCheckedHasChild = store.getStore('isCheckedHasChild');
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Fragment"], null, !hideExpandAll && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("li", {
        className: classnames_default()({
          'menu expand-all': true
        }),
        onClick: function onClick() {
          var expandedKeys = [];

          function getAllExpandKeys(data) {
            data.forEach(function (item) {
              expandedKeys.push(item.key);

              if (Array.isArray(item.children)) {
                getAllExpandKeys(item.children);
              }
            });
          }

          getAllExpandKeys(data); // 带更新

          store.setStore('expandedKeys', expandedKeys); //若为异步，调用业务全部展开回调

          Object(api_index_["isFunction"])(expandAllEve) && expandAllEve();
        }
      }, langJson['insert-tree-table-0013'] || '全部展开'), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("li", {
        className: classnames_default()({
          'menu close-all': true
        }),
        onClick: function onClick() {
          // 更新
          store.setStore('expandedKeys', []); //业务全部收起的回调

          Object(api_index_["isFunction"])(closeAllEve) && closeAllEve();
        }
      }, langJson['insert-tree-table-0014'] || '全部收起'), !hideIncludeChild && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("li", {
        className: classnames_default()({
          'menu include-child': true
        }),
        onClick: function onClick() {
          // 带更新
          store.setStore('isCheckedHasChild', !isCheckedHasChild);
        }
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Checkbox"], {
        className: 'include-child-checkbox',
        checked: isCheckedHasChild,
        onChange: function onChange() {
          store.setStore('isCheckedHasChild', !isCheckedHasChild);
        }
      }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: classnames_default()({
          'include-child-selected': isCheckedHasChild
        })
      }, " ", langJson['insert-tree-table-0015'] || '包含下级')), Object(api_index_["isFunction"])(extendRightMenu) && extendRightMenu());
    };

    _this.getColSetConfig = function () {
      //---by liuxis 鼠标不做列设置
      var _this$props10 = _this.props,
          id = _this$props10.id,
          store = _this$props10.store;
      var getMeta = store.getMeta;
      var meta = getMeta();
      var appcode = meta.appcode || meta.code || api_index_["pageTo"].getAppCode();
      var pagecode = meta.pagecode || api_index_["pageTo"].getPageCode();
      var areaCode = id; // return { appcode: '1', pagecode: '2', areaCode: '3' };

      return {
        appcode: appcode,
        pagecode: pagecode,
        areaCode: areaCode
      };
    };

    _this.state = {
      langJson: {},
      _: ''
    };
    var _store = props.store,
        _id = props.id,
        _isCheckedHasChild = props.isCheckedHasChild,
        async = props.async;

    _store.setStore('name', _id, false); // 表单


    _this.uuid = _store.getStore('uuid'); // 计算主表表体高度

    var tableHeight = 0;
    var screenHeight = window.screen.width;

    if (screenHeight <= 1919 > 1440) {
      tableHeight = 48 * 10 + 'px';
    } else if (screenHeight > 1919) {
      tableHeight = 56 * 10 + 'px';
    } else {
      tableHeight = 40 * 10 + 'px';
    }

    _store.setStore('tableHeight', tableHeight, false);

    _store.setStore('isCheckedHasChild', _isCheckedHasChild, false);

    _store.setStore('async', async, false);

    return _this;
  }

  treeTable_createClass(TreeTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this2 = this;

      var store = this.props.store;
      var setCache = store.setCache; //加载多语

      var callback = function callback(json) {
        // this.setState({ json });
        setCache('langJson', json || {});

        _this2.setState({
          langJson: json
        });
      };

      Object(api_index_["getMultiLang"])({
        moduleId: "containers_insert_tree_table",
        callback: callback
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var store = nextProps.store,
          isCheckedHasChild = nextProps.isCheckedHasChild,
          async = nextProps.async;
      Object(api_index_["isUndefined"])(isCheckedHasChild) && store.setStore('isCheckedHasChild', isCheckedHasChild, false);
      store.setStore('async', async, false);
    }
  }, {
    key: "componentWillUnMount",
    value: function componentWillUnMount() {}
    /* setState */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props11 = this.props,
          modal = _this$props11.modal,
          id = _this$props11.id,
          store = _this$props11.store,
          _this$props11$showChe = _this$props11.showCheckBox,
          showCheckBox = _this$props11$showChe === void 0 ? false : _this$props11$showChe,
          _this$props11$checked = _this$props11.checkedType,
          checkedType = _this$props11$checked === void 0 ? 'checkbox' : _this$props11$checked,
          checkboxChange = _this$props11.checkboxChange,
          scrollConfig = _this$props11.scrollConfig,
          _this$props11$isDrag = _this$props11.isDrag,
          isDrag = _this$props11$isDrag === void 0 ? true : _this$props11$isDrag,
          _this$props11$adaptio = _this$props11.adaptionHeight,
          adaptionHeight = _this$props11$adaptio === void 0 ? true : _this$props11$adaptio,
          otherAreaHeight = _this$props11.otherAreaHeight,
          _this$props11$inModal = _this$props11.inModal,
          inModal = _this$props11$inModal === void 0 ? false : _this$props11$inModal,
          fieldid = _this$props11.fieldid,
          _this$props11$isLazyl = _this$props11.isLazyload,
          isLazyload = _this$props11$isLazyl === void 0 ? true : _this$props11$isLazyl,
          _this$props11$addBlan = _this$props11.addBlankCol,
          addBlankCol = _this$props11$addBlan === void 0 ? true : _this$props11$addBlan,
          _this$props11$showCon = _this$props11.showContextMenu,
          showContextMenu = _this$props11$showCon === void 0 ? false : _this$props11$showCon,
          extendRightMenu = _this$props11.extendRightMenu,
          _this$props11$showWid = _this$props11.showWidthAndHeightConfig,
          showWidthAndHeightConfig = _this$props11$showWid === void 0 ? true : _this$props11$showWid;
      var langJson = this.state.langJson;
      var getStore = store.getStore,
          getViewMeta = store.getViewMeta,
          getData = store.getData,
          setStore = store.setStore; // 模板

      var columns = getViewMeta(id); // 全数据对象

      var fullDataObject = {}; // 数据   this.createNewDataRes

      var data = getData();

      if (!columns || columns.length === 0 || !data) {
        // 没有列模板就不渲染  避免特殊情况导致 操作列等列显示展开符号
        return null;
      }

      var treeData = this.createNewData(data, fullDataObject); // 记录下给 checkbox 渲染用 用于渲染checkbox 父子集关系
      // console.log(fullDataObject);

      store.setStore('fullDataObject', fullDataObject, false); // 最大深度

      var maxDeep = JSON.parse(JSON.stringify(treeData)); // 展开项

      var expandedKeys = getStore('expandedKeys'); // 表格高度

      var tableHeight = getStore('tableHeight'); // console.log(store, columns);

      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        id: id,
        className: "treeTableManyCol",
        fieldid: Object(api_index_["getSysFieldid"])("".concat(fieldid || id, "_table"))
      }, showCheckBox && checkedType !== 'radio' && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Selectable"], {
        canvas: "#".concat(id) // 注意可以加下前后空格
        ,
        selector: " tbody tr ",
        unitKey: "key",
        disabled: checkedType === 'radio' || 'slide' // 可选值 true false 'shift' 'ctrl' 'slide'
        ,
        userSelect: true // 启用用户文字选中
        // unitsData={fullDataObject}  // 用dom做shift 操作 数据的问题是目前顺序不对 // 数组改为对象 给下面使用
        // 开始项  主要配合外部的 单选事件处理
        ,
        startItem: "",
        onSelect: function onSelect(selectedRowKeys, hotkey, _ref) {
          var currentKey = _ref.currentKey;
          // 树状数据不太好处理 需要一个拉平数据
          var rowLen = Object.keys(selectedRowKeys).length;

          if (rowLen > 0) {
            if (hotkey === 'ctrl') {
              setStore(['checkedKeys', currentKey], selectedRowKeys[currentKey], true, function () {
                var selectedRecord = fullDataObject[currentKey].item;
                console.log(fullDataObject, currentKey, selectedRecord, '数据的问题处理');

                if (Object(api_index_["isFunction"])(checkboxChange) && selectedRecord) {
                  checkboxChange(selectedRecord, selectedRecord.rowIndex, {});
                }
              });
            } else {
              setStore('checkedKeys', {});

              for (var key in selectedRowKeys) {
                if (selectedRowKeys.hasOwnProperty(key)) {
                  setStore(['checkedKeys', key], selectedRowKeys[key], false);
                }
              } // 更新


              store.refresh(function () {
                // TODO 先使用循环调用时间 如果不行的话  后面需要单独加一个回调
                for (var _key in selectedRowKeys) {
                  if (selectedRowKeys.hasOwnProperty(_key) && Object(api_index_["isFunction"])(checkboxChange)) {
                    var selectedRecord = fullDataObject[_key];
                    selectedRowKeys[_key] && checkboxChange(selectedRecord, selectedRecord.rowIndex, {});
                  }
                }
              });
            }
          }
        }
      }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Table"], {
        lazyload: isLazyload,
        className: classnames_default()("tree-table-manyCol-container", {
          'firstcol-ellipsis': this.props.store.getStore('isEllipsis')
        }),
        expandedRowKeys: expandedKeys //搜索节点关键字后要展开的父节点
        ,
        columns: this.createNewCol(columns, maxDeep),
        columnKey: "attrcode",
        data: treeData,
        onExpand: this.onExpand,
        onExpandedRowsChange: function onExpandedRowsChange(expandedRowKeys) {
          // 更新
          store.setStore('expandedKeys', expandedRowKeys);
        },
        bodyDisplayInRow: false //折行回调
        ,
        foldingRowChange: function foldingRowChange(isEllipsis) {
          store.setStore('isEllipsis', isEllipsis);
        },
        scroll: scrollConfig || {
          y: tableHeight
        },
        bodyStyle: {
          minHeight: scrollConfig && scrollConfig.y ? scrollConfig.y : 60
        },
        onRowDoubleClick: this.onRowDoubleClick,
        adaptionHeight: adaptionHeight,
        otherAreaHeight: otherAreaHeight,
        inModal: inModal,
        onRowClick: this.onRowClick,
        isDrag: isDrag,
        ref: function ref(dom) {
          _this3.dom = external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(dom);
        },
        rowClassName: this.rowClassName,
        addBlankCol: addBlankCol,
        extendRightMenu: showContextMenu ? this.createContextMenu() : Object(api_index_["isFunction"])(extendRightMenu) ? extendRightMenu() : null,
        cancelCustomRightMenu: true,
        colsSettingParam: this.getColSetConfig(),
        showWidthAndHeightConfig: showWidthAndHeightConfig
      }), langJson ? modal.createModal('delNode', {
        title: langJson['insert-tree-table-001'],
        content: langJson['insert-tree-table-002'],
        beSureBtnClick: this.delNodeEve.bind(this),
        backdrop: 'static'
      }) : null, modal.createModal('treeTableManyColModal', {
        content: this.modalContent.call(this),
        beSureBtnClick: this.beSureBtnClick.bind(this),
        cancelBtnClick: function cancelBtnClick() {
          modal.close('treeTableManyColModal');
        },
        size: 'lg',
        userControl: true,
        backdrop: 'static'
      }));
    }
  }]);

  return TreeTable;
}(template_index_["BaseComponent"]);

treeTable_TreeTable.displayName = 'TreeTable';
treeTable_TreeTable.useTreeTable = TreeTable_store;
/* harmony default export */ var treeTable = (treeTable_TreeTable);
// CONCATENATED MODULE: ./src/platform/components/TreeTable/methods.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { methods_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function methods_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 *   create by wangshhj
 * */





var MODALNAME = {
  add: "新增节点",
  edit: "编辑节点"
};
/**
 * @desc 保存列的宽度
 * @type {{
 *   'attrCode': Number
 * }}
 */

var cellWidth = {};
var PID = "root";
/**
 * 检测组件对象是否存在 bbq
 * @param {*} id 
 */

var methods_existenceCheck = function existenceCheck(id) {
  var store = this.treeTableDataSource[id];

  if (!store) {
    store = TreeTable_store();
    this.treeTableDataSource[id] = store; // 同步模板

    store.setMeta(this.meta.getMeta());
    console.warn("\u6240\u64CD\u4F5C\u7684\u8868\u683C\u4E2D\u65E0ID\u4E3A".concat(id, "\u7684\u6570\u636E"));
    return;
  }

  return store;
}; // 创建组件


function treeTableCol(moduleId) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // this.register("treeTable"); // 生成 this.treeTableDataSource[id]
  var pageScope = this,
      store = pageScope.treeTableDataSource[moduleId];

  if (!store) {
    store = TreeTable_store();
    pageScope.treeTableDataSource[moduleId] = store; // 同步模板

    store.setMeta(pageScope.meta.getMeta(), moduleId, false);
    console.log(pageScope);
  }

  var async = config.async,
      others = _objectWithoutProperties(config, ["async"]);

  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(treeTable, _extends({
    async: async,
    store: store,
    id: moduleId,
    modal: this.modal
  }, others));
}
/*
 *    插入子节点数据
 *    @ child 子表数据
 *    @ parent 当前行信息
 * */

function setChildNodeEve(tableData, child, parent) {
  var checkedKeys = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var expandedKeys = arguments.length > 4 ? arguments[4] : undefined;
  var isCheckedHasChild = arguments.length > 5 ? arguments[5] : undefined;
  child = JSON.parse(JSON.stringify(child)); // 清理 并拷贝对象

  var parentKey = parent.key;
  var len = tableData.length;

  for (var i = 0; i < len; i++) {
    var item = tableData[i];

    if (item.rowId === parentKey) {
      if (expandedKeys && expandedKeys.length) {
        clearExpandedKeys(tableData[i].children, expandedKeys);
      }

      tableData[i].children = child; //父级勾选 包含下级时，勾选所有子级

      if (isCheckedHasChild && checkedKeys[item.rowId]) {
        methods_setChecked(child, checkedKeys);
      }

      return true;
    } else if (Array.isArray(item.children)) {
      var res = setChildNodeEve(item.children, child, parent, checkedKeys, expandedKeys, isCheckedHasChild);

      if (res) {
        return false;
      }
    }
  }
}
/*
 *   添加rowId;
 *   field: rowId字段
 * */


function addRowId(data, field, expandedKeys) {
  if (!Array.isArray(data)) {
    console.warn("addRowId方法，第一个参数应为数组");
    return false;
  }

  if (data.length > 0 && !data[0].values[field]) {
    console.warn("addRowId\u65B9\u6CD5\uFF0C\u6CA1\u6709\u627E\u5230\u53C2\u6570".concat(field));
    return false;
  }

  data.forEach(function (item) {
    item.key = item.rowId = item.values[field].value;
    expandedKeys && expandedKeys.push(item.values[field].value);

    if (Array.isArray(item.children)) {
      addRowId(item.children, field, expandedKeys);
    }
  });
}
/*
 *   根据isleaf 添加children
 * */


function addChildren(data) {
  data.forEach(function (item) {
    if (item.hasOwnProperty("isleaf") && !item.isleaf) {
      item.children = item.children || [];
    }
  });
}
/*
 *   编辑行事件
 * */


function editRow(tableData, newItem) {
  newItem = JSON.parse(JSON.stringify(newItem));
  var i = tableData.length;

  while (i--) {
    var item = tableData[i];

    if (item.rowId === newItem.rowId) {
      tableData[i] = _objectSpread(_objectSpread({}, tableData[i]), newItem);
      return true;
    } else {
      if (Array.isArray(item.children)) {
        var res = editRow(item.children, newItem);

        if (res) {
          return false;
        }
      }
    }
  }
}
/*
 *   增加子节点事件
 * */


function addChildNode(tableData, newItem, parent, syncAddNode) {
  newItem = JSON.parse(JSON.stringify(newItem)); // 清理 并拷贝对象

  var pk = null;

  if (!parent) {
    if (!newItem.values.pid) {
      console.error("树状表添加子节点的方法没找到pid");
      return false;
    }

    pk = newItem.values.pid.value;
  } else {
    pk = parent.key;
  }

  var i = tableData.length;

  while (i--) {
    var item = tableData[i];

    if (item.rowId === pk) {
      if (!newItem.values.pid) {
        newItem.values.pid = {
          value: pk
        };
      } // addChildRowEve 补丁


      if (tableData[i] && syncAddNode) tableData[i].isleaf = false;

      if (Array.isArray(tableData[i].children)) {
        tableData[i].children.push(newItem);
      } else {
        if (syncAddNode) tableData[i].isleaf = false;
        tableData[i].children = [newItem];
      }

      return true;
    } else {
      if (Array.isArray(item.children)) {
        var res = addChildNode(item.children, newItem, parent, syncAddNode);

        if (res) {
          return false;
        }
      }
    }
  }
}
/*
 *   增加兄弟节点事件
 * */


function addBrother(tableData, newItem, brother) {
  newItem = JSON.parse(JSON.stringify(newItem)); // 清理 并拷贝对象

  var pk = brother.key;
  var len = tableData.length;

  for (var i = 0; i < len; i++) {
    var item = tableData[i];

    if (item.rowId === pk) {
      tableData.splice(i + 1, 0, newItem);
      return true;
    } else {
      if (Array.isArray(item.children)) {
        var res = addBrother(item.children, newItem, brother);

        if (res) {
          return false;
        }
      }
    }
  }
}
/*
 *   删除行
 * */


function delRow(tableData, key) {
  var len = tableData.length;

  for (var i = 0; i < len; i++) {
    var item = tableData[i];

    if (item.rowId === key) {
      tableData.splice(i, 1);
      return true;
    } else {
      if (Array.isArray(item.children)) {
        var res = delRow(item.children, key);

        if (res) {
          return false;
        }
      }
    }
  }
}
/*
 *   删除后检测节点是否还有子节点，若没有，删除children 。 只检测删除行的父元素
 * */


function checkHasChildren(tableData, parentRowId) {
  var i = tableData.length;

  while (i--) {
    var item = tableData[i];

    if (item.rowId === parentRowId) {
      if (Array.isArray(item.children) && item.children.length === 0) {
        delete item.children;
      }

      return true;
    } else {
      if (Array.isArray(item.children)) {
        var res = checkHasChildren(item.children);

        if (res) {
          return false;
        }
      }
    }
  }
}
/**
 * 根据rowid获取当前行数据
 */


function getValueByRowIdEve(tableData, rowId) {
  var i = tableData.length;

  while (i--) {
    var item = tableData[i];

    if (item.rowId === rowId) {
      return item;
    } else {
      if (Array.isArray(item.children)) {
        var res = getValueByRowIdEve(item.children, rowId);

        if (res) {
          return res;
        }
      }
    }
  }
}
/*  获取勾选项 */


function getSelectedRowEve(data, store) {
  var checkedKeys = store.getStore('checkedKeys');
  var res = [];

  var G = function G(data) {
    data.map(function (item) {
      if (checkedKeys[item.key]) {
        res.push(item);
      }

      if (Array.isArray(item.children)) {
        G(item.children);
      }
    });
  };

  G(data);
  return res;
}
/**
 * 设置勾选项
 * @param {*} moduleId
 * @param {*} checkedKeys
 * @param {*} merge
 */


function setCheckedKeys(moduleId, checkedKeys, merge) {
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var oldCheckedKeys = store.getStore('checkedKeys');

  if (merge) {
    checkedKeys = Object.assign(oldCheckedKeys, checkedKeys);
  } else {
    checkedKeys = Object.assign({}, checkedKeys);
  }

  store.setStore('checkedKeys', checkedKeys);
}
/**
 * 是否包含下级---未导出
 * @param {string} moduleId
 */

function isCheckHasChild(moduleId) {
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  return store.getStore('isCheckedHasChild');
}
/**
 * 设置选中行
 * @param {*} moduleId
 * @param {*} record
 */

function setSelectedRow(moduleId, record) {
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.setStore('currentSelectedRow', record);
}
/*==================================================================================*/

/*
 *   初始化树状表数据
 *   @ data 数据
 *   @ rowId  表示行id的字段名
 *   @ 默认展开所有行 defaultExpandAllRows
 * */

function initTreeTableData(moduleId, data, rowId, defaultExpandAllRows, expandedRowKeys) {
  if (rowId === undefined) {
    console.warn("树状表addRowId方法，第三个参数需要传表示行rowid 的字段");
    return false;
  }

  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var _store$getStore = store.getStore(),
      async = _store$getStore.async,
      isCheckedHasChild = _store$getStore.isCheckedHasChild,
      checkedKeys = _store$getStore.checkedKeys;

  if (async) {
    //异步时，需要添加children字段。
    addChildren(data);
  }

  var res,
      expandedKeys = [];

  if (defaultExpandAllRows) {
    res = addRowId(data, rowId, expandedKeys);

    if (isCheckedHasChild && checkedKeys) {
      data.map(function (item) {
        if (checkedKeys[item.key] && Array.isArray(item.children)) {
          methods_setChecked(item.children, checkedKeys);
        }
      });
    }
  } else {
    res = addRowId(data, rowId);
    expandedRowKeys && store.setStore('expandedKeys', expandedRowKeys, false);
  }

  if (res === false) {
    console.warn("\u6811\u72B6\u8868addRowId\u65B9\u6CD5\uFF0C\u6CA1\u6709\u627E\u5230\u8868\u793ArowId\u7684\u5B57\u6BB5\uFF0C\u8BF7\u68C0\u67E5\u6570\u636E\u4E2D\u662F\u5426\u5B58\u5728".concat(rowId, "\u5B57\u6BB5"));
    return false;
  }

  store.setData({
    data: data,
    shouldForceUpdate: false
  });
  store.setStore('rowId', rowId, false);
  isCheckedHasChild && store.setStore('checkedKeys', checkedKeys, false);
  defaultExpandAllRows && store.setStore('expandedKeys', expandedKeys, false); // 缓存数据以用于  前端查找 --bbqin

  store.setCache('cacheData', JSON.parse(JSON.stringify(data)));
  store.setStore('searchValue', null, true);
} //设置子数据勾选

function methods_setChecked(children, checkedKeys) {
  if (Array.isArray(children)) {
    children.forEach(function (item) {
      checkedKeys[item.key] = true;

      if (Array.isArray(item.children)) {
        methods_setChecked(item.children);
      }
    });
  }
} //设置子数据勾选


function clearExpandedKeys(children, expandedKeys) {
  if (Array.isArray(children)) {
    children.forEach(function (item) {
      var index = expandedKeys.indexOf(item.key);

      if (index !== -1) {
        expandedKeys.splice(index, 1);
      }

      if (Array.isArray(item.children)) {
        clearExpandedKeys(item.children, expandedKeys);
      }
    });
  }
}

function updataDataSource(moduleId, callBack) {
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var data = store.getData();

  if (callBack) {
    var newDataSource = callBack(JSON.parse(JSON.stringify(data)));

    if (Array.isArray(newDataSource)) {
      store.setCache('cacheData', newDataSource); // 更新

      store.setData({
        data: newDataSource
      });
    }
  } else {
    console.warn("请传回调参数，并且返回新的数据源");
  }
}
/**
 * 查询树表
 * @param {String} moduleId 模块Id
 * @param {String} searchValue 查詢字符串
 * @param {Array} filters 过滤关键字
 */

function searchTreeTable(_ref) {
  var moduleId = _ref.moduleId,
      searchValue = _ref.searchValue,
      _ref$filters = _ref.filters,
      filters = _ref$filters === void 0 ? [] : _ref$filters,
      _ref$expanded = _ref.expanded,
      expanded = _ref$expanded === void 0 ? true : _ref$expanded,
      _ref$defaultExpandAll = _ref.defaultExpandAllRows,
      defaultExpandAllRows = _ref$defaultExpandAll === void 0 ? false : _ref$defaultExpandAll;
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  if (Object.prototype.toString.call(filters) !== "[object Array]") {
    // 如果不是数组
    filters = [String(filters)];
  } // 确定是不是检索所有字段


  var data = store.getCache('cacheData') || store.getData(),
      expandedKeys = [],
      expectData = []; // 清空 数据

  store.setStore('expandedKeys', [], false);
  var searchResult = findDataByValueFilters({
    data: data,
    searchValue: searchValue,
    filters: filters,
    expandedKeys: expandedKeys,
    expanded: expanded,
    defaultExpandAllRows: defaultExpandAllRows,
    expectData: expectData
  }); // 展开的键 expandedKeys 检索后是否展开 理论上被检索到的行应该展开

  store.setData({
    data: searchResult,
    shouldForceUpdate: false
  });
  console.log(data); // 记录一下关键字 用于做替换

  store.setStore('searchValue', searchValue, false);
  store.setStore('expandedKeys', expandedKeys, false);
  store.refresh(function () {// store.setStore('searchValue', null, false);
  });
}
/**
 * 遍历  并且查询  符合要求的数据
 * @param {*} param0
 */

function findDataByValueFilters(_ref2) {
  var data = _ref2.data,
      expandedKeys = _ref2.expandedKeys,
      searchValue = _ref2.searchValue,
      filters = _ref2.filters,
      expanded = _ref2.expanded,
      defaultExpandAllRows = _ref2.defaultExpandAllRows,
      _ref2$expectData = _ref2.expectData,
      expectData = _ref2$expectData === void 0 ? [] : _ref2$expectData;

  if (!searchValue || data.length === 0) {
    return data || [];
  }

  var needFilters = false,
      filtersLength = filters.length; // 不区分大小写

  searchValue = searchValue.toLocaleLowerCase();
  data.map(function (item) {
    var isMatch = false,
        values = item.values,
        value;
    var expectItem = JSON.parse(JSON.stringify(item, function (k, v) {
      if (k === "children" && Object.prototype.toString.call(v) === "[object Array]") {
        return null;
      }

      return v;
    })); // 数据拷贝
    // console.log(expectItem);

    for (var vi in values) {
      // 该字段是否需要过滤
      needFilters = filtersLength === 0 ? true : filters.indexOf(vi) !== -1; // 不区分大小写

      value = String(values[vi]["display"] || values[vi]["value"]).toLocaleLowerCase();

      if (needFilters && value && value.indexOf(searchValue) !== -1) {
        // 匹配到行
        isMatch = true;
        break;
      }
    }

    if (Array.isArray(item.children)) {
      // 子循环
      expectItem.children = findDataByValueFilters({
        data: item.children,
        expandedKeys: expandedKeys,
        searchValue: searchValue,
        filters: filters,
        expanded: expanded,
        defaultExpandAllRows: defaultExpandAllRows,
        expectData: []
      });
      expectItem.children.length === 0 && (expectItem.children = null);
    }

    (isMatch || expectItem.children && expectItem.children.length > 0) && expectData.push(expectItem);

    if ((isMatch || expectItem.children && expectItem.children.length > 0) && (expanded || defaultExpandAllRows)) {
      // 默认展开 或者全部展开
      expandedKeys.push(item.key || item.rowId);
    }
  });
  return expectData;
}
/*
 *   异步加载时，设置子表数据
 *    @ child 子表数据
 *    @ parent 点击的当前行数据
 * */


function setChildNode(moduleId, child, parent, isCheckedHasChild) {
  if (!moduleId || !child || !parent) {
    console.warn("树状表setChildNode 方法参数不正确");
    return false;
  }

  if (!Array.isArray(child)) {
    console.warn("树状表setChildNode 方法,第二个参数应为数组");
    return false;
  }

  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var rowId = store.getStore('rowId');
  var async = store.getStore('async');
  var checkedKeys = store.getStore('checkedKeys');
  var expandedKeys = store.getStore('expandedKeys');
  var data = store.getData();
  var cacheData = store.getCache('cacheData');
  isCheckedHasChild = isCheckedHasChild || store.getStore('isCheckedHasChild');

  if (async) {
    addChildren(child);
    addRowId(child, rowId);
    setChildNodeEve(data, child, parent, checkedKeys, expandedKeys, isCheckedHasChild); // 更新缓存数据以用于查找 by bbqin

    setChildNodeEve(cacheData, child, parent, checkedKeys, expandedKeys, isCheckedHasChild); // 更新

    store.setStore('searchValue', null);
  } else {
    console.warn("setChildNode方法只能异步加载时调用");
  }
}
function methods_getChildren(data, parentKey) {
  return getChildren(data, parentKey);
}
/*
 *   编辑行
 * */

function editRowEve(moduleId, newData) {
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var rowId = store.getStore('rowId');
  var data = store.getData();
  var cacheData = store.getCache('cacheData');

  if (!newData.values[rowId]) {
    console.warn && console.warn("\u6811\u72B6\u8868editRowEve \u65B9\u6CD5,\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E2D\u6CA1\u6709\u627E\u5230\u8868\u793ARowId\u7684\u5B57\u6BB5\uFF0C\u8BF7\u68C0\u67E5\u6570\u636E\u4E2D\u662F\u5426\u6709".concat(rowId, "\u5B57\u6BB5"));
    return false;
  }

  newData.rowId = newData.values[rowId].value;
  addChildren([newData]);
  editRow(data, newData); // 更新缓存数据以用于查找 by bbqin

  editRow(cacheData, newData); // 更新

  store.setStore('searchValue', null);
}
/*
 *   增加子节点
 * */

function addChildRowEve(moduleId, newData) {
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var rowId = store.getStore('rowId');
  var currentRow = store.getStore('currentRow');
  var data = store.getData();
  var cacheData = store.getCache('cacheData');
  console.log(newData, currentRow, data, cacheData);

  var runThis = function runThis(item) {
    var kValue = item.values[rowId];
    item.values[rowId] = kValue && kValue.value !== undefined && kValue.value !== null ? kValue : {
      value: Object(api_index_["getSafeRandom"])()
    }; // if (!item.values[rowId]) {
    // 	console.warn(`树状表editRowEve 方法,第二个参数中没有找到表示RowId的字段，请检查数据中是否有${rowId}字段`);
    // 	return false;
    // }

    item.key = item.rowId = item.values[rowId].value;
    addChildren([item]);
    addChildNode(data, item, currentRow, true); // 更新缓存数据以用于查找 by bbqin

    addChildNode(cacheData, item, currentRow, true);
    store.setStore('searchValue', null, false);
  };

  if (Array.isArray(newData)) {
    newData.forEach(function (items) {
      runThis(items);
    });
  } else {
    runThis(newData);
  } // 更新


  store.refresh();
}
/*
 *   更新全部子节点
 * */

function updateChildRow(moduleId, newData, parentRow) {
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var rowId = store.getStore('rowId');
  var currentRow = store.getStore('currentRow');
  var data = store.getData();
  var newDataArr = [];
  var pk = "root";
  if (currentRow) pk = currentRow.key;
  if (parentRow) pk = parentRow.key;

  if (Array.isArray(newData)) {
    newDataArr = newData;
  } else {
    newDataArr = [newDataArr];
  }

  var loop = function loop(data, pk) {
    if (!data.length) return;
    data.map(function (item) {
      var kValue = item.values[rowId];
      item.values[rowId] = kValue && kValue.value !== undefined ? kValue : {
        value: Object(api_index_["getSafeRandom"])()
      };
      item.key = item.rowId = item.values[rowId].value;

      if (!item.values.pid) {
        item.values.pid = {
          value: pk
        };
      }

      if (item.hasOwnProperty("isleaf") && !item.isleaf) {
        item.children = item.children || [];
        loop(item.children, item.key);
      }
    });
  };

  var updateRowByRowId = function updateRowByRowId(tableData, rowId) {
    var i = tableData.length;

    while (i--) {
      var item = tableData[i];

      if (item.rowId === rowId) {
        tableData[i].children = newDataArr;
        tableData[i].isleaf = false;
        return true;
      } else {
        if (Array.isArray(item.children)) {
          var res = updateRowByRowId(item.children, rowId);
          if (res) return true;
        }
      }
    }
  };

  loop(newDataArr, pk); // 处理节点数据，检查key，rowId，children

  if (!updateRowByRowId(data, pk)) {
    data = newDataArr;
  } // 更新


  store.setStore('searchValue', null);
}
/*
 *   增加兄弟节点
 * */

function addBrotherRow(moduleId, newData) {
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var rowId = store.getStore('rowId');
  var currentRow = store.getStore('currentRow');
  var data = store.getData();
  var cacheData = store.getCache('cacheData');

  if (!newData.values[rowId]) {
    console.warn("\u6811\u72B6\u8868addBrotherRow \u65B9\u6CD5,\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E2D\u6CA1\u6709\u627E\u5230\u8868\u793ARowId\u7684\u5B57\u6BB5\uFF0C\u8BF7\u68C0\u67E5\u6570\u636E\u4E2D\u662F\u5426\u6709".concat(rowId, "\u5B57\u6BB5"));
    return false;
  }

  newData.rowId = newData.values[rowId].value;
  addChildren([newData]);
  addBrother(data, newData, currentRow); // 更新缓存数据以用于查找 by bbqin

  addBrother(cacheData, newData, currentRow); // 更新

  store.setStore('searchValue', null);
}
/*
 *   删除节点
 * */

function delRowByPk(moduleId, record) {
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var data = store.getData();
  var cacheData = store.getCache('cacheData');
  var key = record.key;
  delRow(data, key); // 更新缓存数据以用于查找 by bbqin

  delRow(cacheData, key);

  if (record.pid) {
    checkHasChildren(data, record.pid); // 更新缓存数据以用于查找 by bbqin

    checkHasChildren(cacheData, record.pid);
  } // 更新数据


  store.setData({
    data: data,
    shouldForceUpdate: false
  });
  store.setCache('cacheData', cacheData); // 更新

  store.setStore('searchValue', null);
}
/*
 *   同步时，组装树状表所需要的数据结构
 * */

function methods_createNewData(data) {
  if (!Array.isArray(data)) {
    console.warn("createTreeData方法，参数应该为数组");
    return false;
  }

  var group = new Map();
  data.forEach(function (e) {
    if (!(e.values.pid && e.values.pid.value)) {
      e.values.pid = {
        value: PID
      };
    }

    group.get(e.values.pid.value) ? group.get(e.values.pid.value).push(e) : group.set(e.values.pid.value, [e]);
  });

  function makeDOM(pid) {
    if (group.get(pid)) {
      return group.get(pid).map(function (e) {
        e.children = makeDOM(e.values.refpk.value);
        return e;
      });
    } else {
      return null;
    }
  }

  var newData = makeDOM(PID) || [];
  /* 添加isleaf字段 */

  var addIsLeaf = function addIsLeaf(data) {
    data.forEach(function (item) {
      if (item.checked) {
        item.checked = true;
      } else {
        item.checked = false;
      }

      if (Array.isArray(item.children)) {
        item.isleaf = false;
        addIsLeaf(item.children);
      } else {
        item.isleaf = true;
      }
    });
  };

  addIsLeaf(newData);
  return newData;
}
/*
 *   获取当前表格所有数据
 * */

function getAllValue(moduleId) {
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  return store.getData();
}
function getExpandedRowKeys(moduleId) {
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  return store.getStore('expandedKeys');
}
/*
 *   获取当前表格某行数据 byId
 * */

function getValueByRowId(moduleId, rowId) {
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var data = store.getData();
  return getValueByRowIdEve(data, rowId);
}
/*
 *   弹出框  (要改)
 * */

function showModal(moduleId, record, modalType) {
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var langJson = store.getCache('langJson');
  var formStore = store.getStore('formStore');
  var uuid = store.getStore('uuid');
  MODALNAME.add = langJson["insert-tree-table-012"];
  MODALNAME.edit = langJson["insert-tree-table-011"];
  store.setStore('currentRow', record, false); // this.state.form[moduleId + 'form'] = modalType === 'edit' ? record.values : {};

  var formValues = JSON.parse(JSON.stringify(modalType === "edit" ? record.values : {}));
  console.log(formValues, formStore);
  formStore.emptyAllFormValue();
  formStore.setAllFormValue(formValues);
  store.setStore('modalType', modalType, true);
  this.modal.show("treeTableManyColModal", {
    title: "".concat(MODALNAME[modalType])
  });
}
/* 清空表格 */

function emptyAllData(moduleId) {
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.setData({
    data: [],
    shouldForceUpdate: false
  });
  store.setCache('cacheData', []); // 更新缓存数据以用于查找 by bbqin

  store.setStore('searchValue', null);
}
/* 展开节点*/

function openRow(moduleId, key) {
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var expandedKeys = store.getStore('expandedKeys');
  !expandedKeys.find(function (i) {
    return i === key;
  }) && expandedKeys.push(key);
  store.refresh();
}
/* 收起节点*/

function closeRow(moduleId, key) {
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var expandedKeys = store.getStore('expandedKeys');
  var index = expandedKeys.findIndex(function (i) {
    return i === key;
  });
  expandedKeys.splice(index, 1);
  store.refresh();
}
/* 获取选中行数据 */

function getSelectedRow(moduleId) {
  var store = methods_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var data = store.getData();
  var expandedKeys = store.getStore('expandedKeys');
  var isCheckedHasChild = store.getStore('isCheckedHasChild');
  var selectedRows = getSelectedRowEve(data, store);
  var res = JSON.parse(JSON.stringify(selectedRows));
  res = res.map(function (item) {
    var children = item.children,
        others = _objectWithoutProperties(item, ["children"]); //勾选节点未展开, 且children不存在


    if (!expandedKeys.includes(item.key) && (!children || Array.isArray(children) && children.length === 0)) {
      //若勾选项不是叶子节点，且设置了isCheckHasChild:true
      if (item.isleaf !== false && isCheckedHasChild) {
        others.isCheckHasChild = true;
      }
    }

    return others;
  });
  return res;
} // /* 获取选中行数据 */
// export function getSelectedRow(moduleId) {
// }
//   获取最深树层级 数

function methods_countDeep(source) {
  return countDeep(source);
}
/**
 * @desc 如果点击的是操作列，展开图标，文本夹图标就不执行选中事件。 选中文本时也不执行
 * @param e {object} 事件源
 * @param checkOnRowClick {boolean} 配置是否需要勾选功能
 */

function methods_stopCheckBoxChange(e, checkOnRowClick) {
  return stopCheckBoxChange(e, checkOnRowClick);
}
/**
 * @desc 判断此单元格是否需要显示tooltip
 * @param cellDom {object} 单元格dom
 * @param attrCode {string}
 * @param fixed {string} 锁定列表
 * @return {boolean} true -> 显示tooltip, false -> 不显示
 */

function perceptionTooltip(_ref3) {
  var cellDom = _ref3.cellDom,
      attrCode = _ref3.attrCode,
      fixed = _ref3.fixed;
  var PRE_FIX = "nc_tree";
  var id = "".concat(PRE_FIX, "_").concat(attrCode);
  var cloneDom = document.getElementById(id);

  if (cloneDom) {
    cloneDom.innerText = cellDom.innerText;
    return cloneDom.offsetWidth > cellWidth[attrCode];
  } else if (fixed === "left") {
    var fixedDom = document.querySelectorAll(".u-table-fixed-left span[fieldid=\"".concat(attrCode, "\"] span"))[0];
    if (fixedDom === null) return false;
    cloneDom = createCloneDomAndSetAttribute({
      id: id,
      attrCode: attrCode,
      cellWidth: cellWidth,
      originDom: fixedDom
    });
    return cloneDom.offsetWidth > fixedDom.offsetWidth;
  } else {
    cloneDom = createCloneDomAndSetAttribute({
      id: id,
      attrCode: attrCode,
      cellWidth: cellWidth,
      originDom: cellDom
    });
    return cloneDom.offsetWidth > cellDom.offsetWidthh;
  }
}

function createCloneDomAndSetAttribute(_ref4) {
  var originDom = _ref4.originDom,
      id = _ref4.id,
      attrCode = _ref4.attrCode,
      cellWidth = _ref4.cellWidth;
  var cloneDom = originDom.cloneNode();
  cloneDom.className = "u-cell-hidden";
  cloneDom.id = id;
  document.body.appendChild(cloneDom);
  cloneDom.innerText = originDom.innerText;
  cloneDom.height = "0px";
  cellWidth[attrCode] = originDom.offsetWidth;
  return cloneDom;
}
// CONCATENATED MODULE: ./src/platform/components/TreeTable/treeTableManyCol.js
function treeTableManyCol_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Author: liyxt
 * @Date: 2019-10-21 14:15:59
 * @LastEditors: bbq
 * @LastEditTime: 2020-08-07 14:28:12
 * @Description: file content
 */

/*
 *  	树状表组件
 * */









var treeTableManyCol_defaultColor = ['#111111', '#555555', '#111', '#555'];

__webpack_require__(374);

var isMultilingual = false; // 计算主表表体高度

var treeTableManyCol_tableHeight = 0;
var treeTableManyCol_screenHeight = window.screen.width;

if (treeTableManyCol_screenHeight <= 1919 > 1440) {
  treeTableManyCol_tableHeight = 48 * 10 + 'px';
} else if (treeTableManyCol_screenHeight > 1919) {
  treeTableManyCol_tableHeight = 56 * 10 + 'px';
} else {
  treeTableManyCol_tableHeight = 40 * 10 + 'px';
}

var formId = null;

function TreeTableManyCol(id) {
  var _this = this;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      expandEve = _ref.expandEve,
      collapandEve = _ref.collapandEve,
      async = _ref.async,
      editNodeCallBack = _ref.editNodeCallBack,
      addNodeCallBack = _ref.addNodeCallBack,
      delNodeCallBack = _ref.delNodeCallBack,
      onAfterEvent = _ref.onAfterEvent,
      _ref$showCheckBox = _ref.showCheckBox,
      showCheckBox = _ref$showCheckBox === void 0 ? false : _ref$showCheckBox,
      _ref$checkedType = _ref.checkedType,
      checkedType = _ref$checkedType === void 0 ? 'checkbox' : _ref$checkedType,
      checkboxChange = _ref.checkboxChange,
      scrollConfig = _ref.scrollConfig,
      ncOnRowDoubleClick = _ref.ncOnRowDoubleClick,
      _ref$isDrag = _ref.isDrag,
      isDrag = _ref$isDrag === void 0 ? true : _ref$isDrag,
      _ref$multipleRowCell = _ref.multipleRowCell,
      multipleRowCell = _ref$multipleRowCell === void 0 ? false : _ref$multipleRowCell,
      _ref$adaptionHeight = _ref.adaptionHeight,
      adaptionHeight = _ref$adaptionHeight === void 0 ? true : _ref$adaptionHeight,
      _ref$inModal = _ref.inModal,
      inModal = _ref$inModal === void 0 ? false : _ref$inModal,
      _ref$checkOnRowClick = _ref.checkOnRowClick,
      checkOnRowClick = _ref$checkOnRowClick === void 0 ? true : _ref$checkOnRowClick,
      fieldid = _ref.fieldid,
      onRowClickEve = _ref.onRowClickEve,
      _ref$isLazyload = _ref.isLazyload,
      isLazyload = _ref$isLazyload === void 0 ? true : _ref$isLazyload,
      _ref$addBlankCol = _ref.addBlankCol,
      addBlankCol = _ref$addBlankCol === void 0 ? true : _ref$addBlankCol,
      _ref$showContextMenu = _ref.showContextMenu,
      showContextMenu = _ref$showContextMenu === void 0 ? false : _ref$showContextMenu,
      expandAllEve = _ref.expandAllEve,
      closeAllEve = _ref.closeAllEve,
      _ref$hideExpandAll = _ref.hideExpandAll,
      hideExpandAll = _ref$hideExpandAll === void 0 ? false : _ref$hideExpandAll,
      _ref$hideIncludeChild = _ref.hideIncludeChild,
      hideIncludeChild = _ref$hideIncludeChild === void 0 ? false : _ref$hideIncludeChild,
      onCellMouseDown = _ref.onCellMouseDown,
      extendRightMenu = _ref.extendRightMenu,
      _ref$isCheckedHasChil = _ref.isCheckedHasChild,
      isCheckedHasChild = _ref$isCheckedHasChil === void 0 ? false : _ref$isCheckedHasChil;

  var flag = false;
  var that = this;

  if (!this.state.treeTableCol.hasOwnProperty(id)) {
    this.state.treeTableCol[id] = {
      firstTime: true,
      async: async,
      expandedKeys: [],
      checkedKeys: {},
      tableHeight: treeTableManyCol_tableHeight,
      isEllipsis: true
    };
  }

  var columns = this.state.meta[id];

  if (!columns) {
    return;
  }

  if (!this.state.treeTableCol[id].data) {
    return; // this.state.treeTableCol[id].data = [];
  }

  var thisTable = this.state.treeTableCol[id];

  if (typeof thisTable.isCheckedHasChild === "undefined") {
    thisTable.isCheckedHasChild = isCheckedHasChild;
  }

  var treeData = thisTable.data;
  var defTreeData = JSON.parse(JSON.stringify(treeData));
  var defCol = Object(api_index_["cloneObj"])(columns); //调用多语

  var callback = function callback(json, bool, LangData) {
    if (isMultilingual) return;
    thisTable.multilingual = json;
    SAVE_MULTI.lang = json;
    that.setState({
      treeTableCol: that.state.treeTableCol
    }, function () {
      isMultilingual = true;
    });
  };

  Object(api_index_["getMultiLang"])({
    moduleId: 'containers_insert_tree_table',
    callback: callback
  }); //	第一次渲染，处理数据，并设置编辑弹出模态框模板

  if (thisTable.firstTime) {
    formId = id + 'form';
    var formItem = [];

    if (!Object(api_index_["isArray"])(defCol.items)) {
      console.error('树状表模板中，items应为数组,请参考文档');
      return;
    }

    defCol.items.map(function (item) {
      if (item.itemtype !== 'customer') {
        // item 内部东西太复杂 直接给会导致一些问题
        var nItem = JSON.parse(JSON.stringify(item || {}, function (key, value) {
          if (key == 'render' || key == 'title') {
            // title 和 value 是react对象  会导致问题
            return undefined;
          }

          return value;
        }));
        delete nItem.render;
        delete nItem.title;
        formItem.push(nItem);
      }
    });
    this.state.meta[formId] = {
      moduletype: 'form',
      items: formItem,
      status: 'edit'
    };
    this.use.form(formId);
    this.formDataSource[formId].setMeta(this.state.meta, formId);
    thisTable.firstTime = false;
  }
  /* setState */


  var setStateEve = function setStateEve() {
    _this.setState({
      treeTableCol: _this.state.treeTableCol
    });
  }; // 查找数据类型，并返回


  var checkDataType = function checkDataType(field) {
    var data = columns.items.find(function (item) {
      return item.attrcode === field;
    });

    if (data) {
      return data.itemtype;
    }
  }; // 设置一个拉平数据 给框选用  超大数据量时不知道有没有性能问题 by bbqin
  // 由于框选需要数据顺序 现在取出来的顺序不对 后面再调整


  var fullDataArray = {}; //  处理数据格式

  var createNewData = function createNewData(data) {
    var dataSource = data.map(function (item, index) {
      item.key = item.rowId; // 记录一下行顺序给 框选使用

      item.rowIndex = index;

      if (item.values.pid) {
        item.pid = item.values.pid.value;
      }

      if (Array.isArray(item.children)) {
        createNewData(item.children);
      }

      fullDataArray[item.key] = item;
      return item;
    });
    return dataSource;
  };

  var createNewDataRes = createNewData(defTreeData);
  var cp = JSON.parse(JSON.stringify(createNewDataRes)); //   获取到最深层级
  //   countDeep(cp)

  /* 复选框change事件(多选) */

  var itemCheckBoxChange = function itemCheckBoxChange(data, key) {
    thisTable.checkedKeys[key] = !thisTable.checkedKeys[key]; //包含下级时，全部选中

    if (thisTable.isCheckedHasChild && showContextMenu) {
      var setChecked = function setChecked(children) {
        if (Array.isArray(children)) {
          children.forEach(function (item) {
            thisTable.checkedKeys[item.key] = thisTable.checkedKeys[key];

            if (Array.isArray(item.children)) {
              setChecked(item.children);
            }
          });
        }
      };

      var children = methods_getChildren(data, key);
      console.log("设置children选中:  children", children);
      setChecked(children);
    }
  };
  /* 复选框change事件(单选) */


  var checkBoxChange_radio = function checkBoxChange_radio(data, key) {
    if (thisTable.checkedKeys[key]) {
      thisTable.checkedKeys = {};
    } else {
      thisTable.checkedKeys = treeTableManyCol_defineProperty({}, key, true);
    } // thisTable.isCheckedHasChild

  };
  /* 复选框选中事件 */


  var onCheckboxChangeChild = function onCheckboxChangeChild(text, record, index, e) {
    e.stopPropagation();

    if (checkedType === 'radio') {
      //单选
      checkBoxChange_radio(thisTable.data, record.key);
    } else {
      //多选
      itemCheckBoxChange(thisTable.data, record.key);
    }

    if (Object(api_index_["isFunction"])(checkboxChange)) {
      checkboxChange(record, index, e);
    }

    setStateEve();
  };
  /* 查找对应的行数据 */


  var findItem = function findItem(data, key) {
    var res = null;

    var f = function f(data) {
      data.map(function (item) {
        if (item.rowId === key) {
          res = item;
          return true;
        } else if (Array.isArray(item.values.children)) {
          var r = f(item.values.children);

          if (r) {
            return false;
          }
        }
      });
    };

    f(data);
    return res;
  }; // 处理模板


  var createNewCol = function createNewCol(data) {
    var multiYes = thisTable.multilingual && thisTable.multilingual['insert-tree-table-009'];
    var multiNo = thisTable.multilingual && thisTable.multilingual['insert-tree-table-010'];
    var newArr = [];
    data.forEach(function (item) {
      if (item.visible) {
        item._width = item._width || item.width || 120;
        item.width = item.width || 120;
        item.title = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          fieldid: Object(api_index_["getSysFieldid"])(item.attrcode || 'opr'),
          style: {
            color: treeTableManyCol_defaultColor.includes(item.color) ? '' : item.color
          }
        }, ' ', item.label, ' ');
        item.dataIndex = item.attrcode;

        if (item.itemtype !== 'customer' && item.itemtype !== 'numberindex') {
          if (!item.hasOwnProperty('render')) {
            item.render = function (text, record, index) {
              if (record && record.values.hasOwnProperty(item.attrcode)) {
                if (item.itemtype === 'switch') {
                  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
                    fieldid: Object(api_index_["getSysFieldid"])(item.attrcode),
                    onMouseDown: function onMouseDown(e) {
                      onCellMouseDown && onCellMouseDown(record, index, item.attrcode, item, e);
                    }
                  }, record.values[item.attrcode].value ? multiYes : multiNo);
                } else {
                  var langIndex;
                  var langAttrCode;
                  var context = '';

                  if (item.itemtype === 'residtxt') {
                    var LangCode = Object(api_index_["getLangCode"])();
                    var loginLang = item.languageMeta.filter(function (i) {
                      return i.languageCode == LangCode;
                    });

                    if (loginLang[0]) {
                      langIndex = loginLang[0].index == '1' ? '' : loginLang[0].index;
                      langAttrCode = item.attrcode + langIndex;
                    }
                  }

                  if (langAttrCode && (record.values[langAttrCode].display || record.values[langAttrCode].value)) {
                    context = record.values[langAttrCode].display || record.values[langAttrCode].value || '';
                  } else {
                    context = record.values[item.attrcode].display || record.values[item.attrcode].value || '';
                  }

                  var fixedStyle = {
                    display: ''
                  };

                  if (item.fixed && item.fixed === 'left') {
                    if (item.width) {
                      var _width = String(item.width).replace('px', '');

                      if (_width != '120' && showCheckBox) {
                        fixedStyle.width = item.width;
                      }
                    }
                  }

                  if (typeof context != 'string') {
                    context += '';
                  } // 添加高亮 by bbqin


                  var searchValue = thisTable.searchValue || '';
                  var searchValueLow = searchValue.toLocaleLowerCase();
                  var contextLow = context.toLocaleLowerCase();
                  var beforeStr = '';
                  var afterStr = context;

                  var _index = contextLow.indexOf(searchValueLow);

                  if (searchValue && _index !== -1) {
                    beforeStr = context.substr(0, _index);
                    afterStr = context.substr(_index + searchValue.length);
                    searchValue = context.substr(_index, searchValue.length);
                  }

                  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(TreeTable_Cell, {
                    item: item,
                    beforeStr: beforeStr,
                    afterStr: afterStr,
                    searchValue: searchValue,
                    fixedStyle: fixedStyle,
                    context: context,
                    isEllipsis: thisTable.isEllipsis,
                    multipleRowCell: multipleRowCell,
                    index: _index,
                    record: record,
                    onCellMouseDown: onCellMouseDown
                  });
                }
              } else {
                return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
                  style: {
                    width: '100%',
                    height: '100%',
                    display: 'inline-block'
                  },
                  onMouseDown: function onMouseDown(e) {
                    onCellMouseDown && onCellMouseDown(record, index, item.attrcode, item, e);
                  }
                });
              }
            };
          }
        } else if (item.itemtype === 'customer' && item.hasOwnProperty('render') && item.alreadyAssignment === undefined) {
          var Irender = item.render;
          item.alreadyAssignment = true;

          item.render = function (text, record, index) {
            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
              fieldid: Object(api_index_["getSysFieldid"])('opr'),
              className: STOP_CHECK_OPERATION_ELEMENT,
              onMouseDown: function onMouseDown(e) {
                onCellMouseDown && onCellMouseDown(record, index, item.attrcode, item, e);
              }
            }, Irender(text, record, index));
          };
        }

        newArr.push(item);
      }
    });
    var defaultColumns = [{
      title: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        fieldid: Object(api_index_["getSysFieldid"])('firstcol')
      }),
      attrcode: 'checkbox',
      dataIndex: 'checkbox',
      itemtype: 'customer',
      width: '100px',
      _width: '100px',
      render: function render(text, record, index) {
        // let item = findItem( thisTable.data, record.key);
        // console.log(record, index);
        if (showCheckBox) {
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Checkbox"], {
            onMouseDown: function onMouseDown(e) {
              onCellMouseDown && onCellMouseDown(record, index, 'checkbox', {
                attrcode: 'checkbox',
                itemtype: 'customer'
              }, e);
            },
            className: "table-checkbox",
            checked: thisTable.checkedKeys[record.key],
            onClick: onCheckboxChangeChild.bind(_this, text, record, index)
          });
        }
      }
    }];

    if (newArr[0].fixed && newArr[0].fixed == 'left') {
      defaultColumns[0].fixed = 'left';
    }

    var resArr = showCheckBox ? defaultColumns.concat(newArr) : newArr; // 给第一行增加图标

    var oldFirstColRender = resArr[0].render;
    resArr[0].render = null;

    resArr[0].render = function (text, record, index) {
      var expendSwich;

      if (Object.prototype.toString.call(record.isLeaf) == '[object Boolean]' && !record.isLeaf || Object.prototype.toString.call(record.isleaf) == '[object Boolean]' && !record.isleaf) {
        expendSwich = thisTable.expandedKeys.includes(record.key) ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
          className: "icon iconfont  icon-wenjianjiadakai tree-wenjian treeTableIcon ".concat(STOP_CHECK_ELEMENT)
        }) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
          className: "icon iconfont  icon-wenjianjia tree-wenjian treeTableIcon ".concat(STOP_CHECK_ELEMENT)
        });
      } else {
        expendSwich = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
          className: "dian",
          style: {
            display: 'none'
          }
        });
      }

      var res = oldFirstColRender(text, record, index);

      if (res && res.props && res.props.children && res.props.children[0] && res.props.children[0].props && res.props.children[0].props.className === 'expend-switch') {
        return res;
      }

      if (res && res.props && res.props.className === 'table-checkbox') {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          fieldid: Object(api_index_["getSysFieldid"])('firstcol'),
          onMouseDown: function onMouseDown(e) {
            onCellMouseDown && onCellMouseDown(record, index, 'checkbox', {
              attrcode: 'checkbox',
              itemtype: 'customer'
            }, e);
          }
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          className: "first-col"
        }, res), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          className: "expend-switch"
        }, expendSwich));
      }

      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        fieldid: Object(api_index_["getSysFieldid"])('firstcol'),
        onMouseDown: function onMouseDown(e) {
          onCellMouseDown && onCellMouseDown(record, index, 'checkbox', {
            attrcode: 'checkbox',
            itemtype: 'customer'
          }, e);
        },
        className: classnames_default()({
          zaiyihang: showCheckBox
        })
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "expend-switch"
      }, expendSwich), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "first-col"
      }, res));
    }; // 给第一列追加宽度


    var width = resArr[0]._width;

    if (!flag && width) {
      if (typeof width === 'string') {
        if (width.includes('px')) {
          width = width.replace('px', '');
        }

        width = Number(width);
      }

      width += methods_countDeep(cp) * 16;
      flag = true;
    }

    resArr[0].width = width;
    return resArr;
  }; //	展开行


  var onExpand = function onExpand(status, item, e) {
    if (status) {
      if (expandEve && typeof expandEve === 'function') {
        thisTable.currentRow = item;
        expandEve(item, thisTable.isCheckedHasChild);
      }
    } else {
      if (Object(api_index_["isFunction"])(collapandEve)) {
        collapandEve(item);
      }
    }

    setStateEve();
  }; // 新增节点弹出框内容


  var modalContent = function modalContent() {
    return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "addModal"
    }, _this.form.createForm(formId, {
      onAfterEvent: onAfterEvent
    }));
  }; // 删除 事件回调


  var delNodeEve = function delNodeEve() {
    if (Object(api_index_["isFunction"])(delNodeCallBack)) {
      delNodeCallBack(formId);
    }
  }; // 模态框确定按钮事件回调


  var beSureBtnClick = function beSureBtnClick() {
    var isValid = _this.form.isCheckNow(formId);

    if (!isValid) {
      return false;
    }

    var data = _this.form.getAllFormValue(formId).rows[0];

    if (thisTable.modalType === 'add') {
      data.status = 2;

      if (Object(api_index_["isFunction"])(addNodeCallBack)) {
        addNodeCallBack(data, thisTable.currentRow);
      }
    } else if (thisTable.modalType === 'edit') {
      if (Object(api_index_["isFunction"])(editNodeCallBack)) {
        editNodeCallBack(data, thisTable.currentRow);
      }
    }

    _this.modal.close('treeTableManyColModal');
  };

  var onRowDoubleClick = function onRowDoubleClick(record, index, event) {
    if (Object(api_index_["isFunction"])(ncOnRowDoubleClick)) {
      ncOnRowDoubleClick(record, index, event);
    }
  }; // const getColSetConfig = () => { //---by liuxis 鼠标不做列设置
  //   const appcode = pageTo.getAppCode();
  //   const pagecode = pageTo.getPageCode();
  //   const areaCode = id;
  //   const areaId = this.state.meta[areaCode] && this.state.meta[areaCode].oid;
  //   const code = this.state.meta.code;
  //   const pageId = this.state.meta.pageid;
  //   return { appcode, pagecode, areaCode, areaId, code, pageId };
  // };

  /**
  * @param row 行数据
  * @param index 行数
  * @param e 事件源
  */


  var onRowClick = function onRowClick(row, index, e) {
    thisTable.currentSelectedRow = row; // 为了避免和新开发的行框选点选区域选事件冲突

    if (e.ctrlKey || e.shiftKey || e.metaKey) {
      return;
    }

    if (showCheckBox && methods_stopCheckBoxChange(e, checkOnRowClick)) return;

    if (Object(api_index_["isFunction"])(onRowClickEve)) {
      onRowClickEve(row, index, e);
    }

    onCheckboxChangeChild(null, row, index, e);
  };

  var rowClassName = function rowClassName(record, current) {
    if (thisTable.currentSelectedRow && thisTable.currentSelectedRow.key == record.key) {
      return 'tree-table-col-selected';
    } else {
      return '';
    }
  };

  var createContextMenu = function createContextMenu() {
    var multilingual = thisTable.multilingual || {};
    return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Fragment"], null, !hideExpandAll && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("li", {
      className: classnames_default()({
        'menu expand-all': true
      }),
      onClick: function onClick() {
        var expandedKeys = [];
        getAllExpandKeys(thisTable.data);
        thisTable.expandedKeys = expandedKeys;
        setStateEve();

        function getAllExpandKeys(data) {
          data.forEach(function (item) {
            expandedKeys.push(item.key);

            if (Array.isArray(item.children)) {
              getAllExpandKeys(item.children);
            }
          });
        } //若为异步，调用业务全部展开回调


        Object(api_index_["isFunction"])(expandAllEve) && expandAllEve();
      }
    }, multilingual['insert-tree-table-0013'] || '全部展开'), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("li", {
      className: classnames_default()({
        'menu close-all': true
      }),
      onClick: function onClick() {
        thisTable.expandedKeys = [];
        setStateEve(); //业务全部收起的回调

        Object(api_index_["isFunction"])(closeAllEve) && closeAllEve();
      }
    }, multilingual['insert-tree-table-0014'] || '全部收起'), !hideIncludeChild && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("li", {
      className: classnames_default()({
        'menu include-child': true
      }),
      onClick: function onClick() {
        thisTable.isCheckedHasChild = !thisTable.isCheckedHasChild;
        setStateEve();
      }
    }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Checkbox"], {
      className: 'include-child-checkbox',
      checked: thisTable.isCheckedHasChild,
      onChange: function onChange() {
        thisTable.isCheckedHasChild = !thisTable.isCheckedHasChild;
        setStateEve();
      }
    }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
      className: classnames_default()({
        'include-child-selected': thisTable.isCheckedHasChild
      })
    }, " ", multilingual['insert-tree-table-0015'] || '包含下级')), Object(api_index_["isFunction"])(extendRightMenu) && extendRightMenu());
  };

  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    id: id,
    className: "treeTableManyCol",
    fieldid: Object(api_index_["getSysFieldid"])("".concat(fieldid || id, "_table"))
  }, showCheckBox && checkedType !== 'radio' ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Selectable"], {
    canvas: "#".concat(id) // 注意可以加下前后空格
    ,
    selector: " tbody tr ",
    unitKey: "key",
    disabled: checkedType === 'radio' || 'slide' // 可选值 true false 'shift' 'ctrl' 'slide'
    ,
    userSelect: true // 启用用户文字选中
    // unitsData={fullDataArray}  // 用dom做shift 操作 数据的问题是目前顺序不对 // 数组改为对象 给下面使用
    // 开始项  主要配合外部的 单选事件处理
    ,
    startItem: "",
    onSelect: function onSelect(selectedRowKeys, hotkey, _ref2) {
      var currentKey = _ref2.currentKey;
      // 树状数据不太好处理 需要一个拉平数据
      var rowLen = thisTable.data.length;

      if (rowLen > 0) {
        if (hotkey === 'ctrl') {
          thisTable.checkedKeys[currentKey] = selectedRowKeys[currentKey]; // thisTable.isCheckedHasChild

          _this.setState({
            treeTableCol: _this.state.treeTableCol
          }, function () {
            var selectedRecord = fullDataArray[currentKey]; // console.log(fullDataArray, currentKey, selectedRecord, '数据的问题处理');

            if (Object(api_index_["isFunction"])(checkboxChange) && selectedRecord) {
              checkboxChange(selectedRecord, selectedRecord.rowIndex, {});
            }
          });
        } else {
          thisTable.checkedKeys = {};

          for (var key in selectedRowKeys) {
            if (selectedRowKeys.hasOwnProperty(key)) {
              thisTable.checkedKeys[key] = selectedRowKeys[key]; // thisTable.isCheckedHasChild
            }
          } // TODO 先使用循环调用时间 如果不行的话  后面需要单独加一个回调


          _this.setState({
            treeTableCol: _this.state.treeTableCol
          }, function () {
            for (var _key in selectedRowKeys) {
              if (selectedRowKeys.hasOwnProperty(_key) && Object(api_index_["isFunction"])(checkboxChange)) {
                var selectedRecord = fullDataArray[_key];
                selectedRowKeys[_key] && checkboxChange(selectedRecord, selectedRecord.rowIndex, {});
              }
            }
          });
        }
      }
    }
  }) : '', /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Table"], {
    lazyload: isLazyload,
    className: "tree-table-manyCol-container",
    expandedRowKeys: thisTable.expandedKeys //搜索节点关键字后要展开的父节点
    ,
    columns: createNewCol(columns.items),
    columnKey: "attrcode",
    data: createNewDataRes,
    onExpand: onExpand.bind(this),
    onExpandedRowsChange: function onExpandedRowsChange(expandedRowKeys) {
      thisTable.expandedKeys = expandedRowKeys;
      setStateEve();
    },
    bodyDisplayInRow: false //折行回调
    ,
    foldingRowChange: function foldingRowChange(isEllipsis) {
      thisTable.isEllipsis = isEllipsis;
      setStateEve();
    },
    scroll: scrollConfig || {
      x: true,
      y: this.state.treeTableCol[id].tableHeight
    },
    onRowDoubleClick: onRowDoubleClick,
    adaptionHeight: adaptionHeight,
    inModal: inModal,
    onRowClick: onRowClick,
    isDrag: isDrag,
    ref: function ref(dom) {
      _this.dom = external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(dom);
    },
    rowClassName: rowClassName,
    addBlankCol: addBlankCol,
    extendRightMenu: showContextMenu ? createContextMenu() : Object(api_index_["isFunction"])(extendRightMenu) ? extendRightMenu() : null,
    cancelCustomRightMenu: true //bodyStyle={{ height: this.state.treeTableCol[id].tableHeight }}
    // colsSettingParam={getColSetConfig()}

  }), thisTable.multilingual ? this.modal.createModal('delNode', {
    title: thisTable.multilingual['insert-tree-table-001'],
    content: thisTable.multilingual['insert-tree-table-002'],
    beSureBtnClick: delNodeEve.bind(this),
    backdrop: 'static'
  }) : null, this.modal.createModal('treeTableManyColModal', {
    content: modalContent.call(this),
    beSureBtnClick: beSureBtnClick.bind(this),
    cancelBtnClick: function cancelBtnClick() {
      _this.modal.close('treeTableManyColModal');
    },
    size: 'lg',
    userControl: true,
    backdrop: 'static'
  }));
}

/* harmony default export */ var treeTableManyCol = (TreeTableManyCol);
// CONCATENATED MODULE: ./src/platform/components/TreeTable/index.js
function TreeTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TreeTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TreeTable_ownKeys(Object(source), true).forEach(function (key) { TreeTable_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TreeTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TreeTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Descripttion: 
 * @version: 
 * @Author: bbq
 * @Date: 2020-12-11 11:25:40
 * @LastEditors: bbq
 * @LastEditTime: 2021-01-14 11:08:05
 */




var TreeTableAPI = {
  TreeTableManyCol: treeTableManyCol,
  treeTableCol: treeTableCol,
  initTreeTableData: initTreeTableData,
  setChildNode: setChildNode,
  editRowEve: editRowEve,
  addChildRowEve: addChildRowEve,
  addBrotherRow: addBrotherRow,
  delRowByPk: delRowByPk,
  createNewData: methods_createNewData,
  getAllValue: getAllValue,
  getValueByRowId: getValueByRowId,
  getExpandedRowKeys: getExpandedRowKeys,
  showModal: showModal,
  emptyAllData: emptyAllData,
  openRow: openRow,
  closeRow: closeRow,
  getSelectedRow: getSelectedRow,
  searchTreeTable: searchTreeTable,
  updataDataSource: updataDataSource,
  setCheckedKeys: setCheckedKeys,
  setSelectedRow: setSelectedRow,
  updateChildRow: updateChildRow
};
/**
 * 兼容旧版本创建表格方法
 * @param {string} mainCode 表格主区域编码
 * @param {object} config 表格业务配置
 */

function treeTableCompatible() {
  this.register("treeTable", TreeTable_store); // 生成 this.treeTableDataSource[id]

  return TreeTable_objectSpread({}, apiBindPage.call(this, TreeTableAPI));
}

function apiBindPage(simpleTableAPI) {
  var res = {};

  for (var _i = 0, _Object$keys = Object.keys(simpleTableAPI); _i < _Object$keys.length; _i++) {
    var pop = _Object$keys[_i];
    res[pop] = simpleTableAPI[pop].bind(this);
  }

  return res;
}

treeTableCompatible.component = treeTable;
treeTableCompatible.displayName = "TreeTable";
treeTableCompatible.unfinished = ["treeTableUnFinishedApi"];

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

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ })

/******/ });
});