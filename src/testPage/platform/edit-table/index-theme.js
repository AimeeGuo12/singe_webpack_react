(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("@platform/table-core/index"), require("@platform/template/index"), require("@platform/form/index"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@platform/api/index", "@platform/base/index", "@platform/table-core/index", "@platform/template/index", "@platform/form/index"], factory);
	else if(typeof exports === 'object')
		exports["@platform/edit-table/index"] = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("@platform/table-core/index"), require("@platform/template/index"), require("@platform/form/index"));
	else
		root["@platform/edit-table/index"] = factory(root["React"], root["@platform/api/index"], root["@platform/base/index"], root["@platform/table-core/index"], root["@platform/template/index"], root["@platform/form/index"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__24__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1922);
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

/***/ 1889:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1890:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ EditTable_EditTable; });

// EXTERNAL MODULE: external {"root":"React","var":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(0);
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_);

// EXTERNAL MODULE: external "@platform/table-core/index"
var index_ = __webpack_require__(7);

// EXTERNAL MODULE: external "@platform/template/index"
var template_index_ = __webpack_require__(12);

// CONCATENATED MODULE: ./src/platform/components/Table/appTable/EditTable/store.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * @Descripttion: 数据源  状态
 * @version: 
 * @Author: bbq
 * @Date: 2020-05-29 10:59:26
 * @LastEditors: bbq
 * @LastEditTime: 2021-01-29 12:29:15
 */


var uuidv4 = index_["utils"].uuidv4,
    isWrong = index_["utils"].isWrong,
    getPageSizeStorage = index_["utils"].getPageSizeStorage;

var MetaStore = /*#__PURE__*/function (_EditTableStore) {
  _inherits(MetaStore, _EditTableStore);

  var _super = _createSuper(MetaStore);

  function MetaStore(props) {
    var _this;

    _classCallCheck(this, MetaStore);

    _this = _super.call(this, props);

    _this.getActiveCell = function () {
      return _this.getStore(['activeCell']);
    };

    _this.setActiveCell = function (param) {
      var shouldForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _this.setStore(['activeCell'], param, shouldForceUpdate);
    };

    _this.getHooks = function () {
      // console.log(this, super.getHooks());
      // console.log(this);
      return _objectSpread(_objectSpread({}, _this.getTableHooks()), {}, {
        getPageInfo: _this.getPageInfo.bind(_assertThisInitialized(_this)),
        setPageInfo: _this.setPageInfo.bind(_assertThisInitialized(_this)),
        setTableData: _this.setTableData.bind(_assertThisInitialized(_this)),
        setTableStatus: _this.setTableStatus.bind(_assertThisInitialized(_this)),
        deleteTableRows: _this.deleteTableRows.bind(_assertThisInitialized(_this)),
        getActiveCell: _this.getActiveCell.bind(_assertThisInitialized(_this)),
        setActiveCell: _this.setActiveCell.bind(_assertThisInitialized(_this)),
        setTableProps: _this.setTableProps.bind(_assertThisInitialized(_this)) // TODO

      });
    };

    _this.uuid = uuidv4(); // this.name = 'EditTableStore';
    // 合并一下属性  不然会导致  get 方法取不到值 by bbqin

    _this.store = _objectSpread(_objectSpread({}, _this.store), {}, {
      allpks: [],
      alltss: [],
      sideBoxConfig: {
        show: false,
        // 就是行的record
        record: {},
        operateType: 'add'
      },
      pageInfo: {
        //pageSize: '10',
        pageIndex: '1',
        total: '0',
        totalPage: '1'
      },
      activeCell: null
    });
    return _this;
  }
  /*-------------列-------------*/

  /**
  * @description: 设置所有meta
  * @param {type} 
  * @return: 
  */


  _createClass(MetaStore, [{
    key: "setMeta",
    value: function setMeta(meta, id) {
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      id = id || this.getStore('name');
      var status = this.getTableProps('status'); // meta上的状态值更新一次 后面都用内部的状态 但是这样也是有BUG的

      if (meta[id] && meta[id].status && !this.isUpdateMetaStatus) {
        status = meta[id].status || status || 'borwse';
        this.isUpdateMetaStatus = true;
      }

      this.setTableProps('status', status, false); // console.log('setMeta');

      _get(_getPrototypeOf(MetaStore.prototype), "setMeta", this).call(this, meta, id, shouldForceUpdate);
    }
  }, {
    key: "setTableProps",
    value: function setTableProps(key, value) {
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      // 如果meta上的状态  还没有设置  setTableProps 已经执行  则设置已经更新
      if (key === 'status' && !this.isUpdateMetaStatus) {
        this.tableStatusIsUpdate = true;
      } // 拦截处理下特殊情况


      _get(_getPrototypeOf(MetaStore.prototype), "setTableProps", this).call(this, key, value, shouldForceUpdate, callback);
    }
    /*-------------缓存-------------*/

    /*-------------私有-------------*/

    /*-------------列-------------*/

    /*-------------单元格-------------*/

    /*-------------行-------------*/

    /*-------------表格-------------*/

    /*-------------高阶组件-------------*/

    /**
     * @description: 获取分页信息
     * @param {type} 
     * @return: 
     */

  }, {
    key: "getPageInfo",
    value: function getPageInfo() {
      // console.log(this.get(['pageInfo']));
      var prePageSize = getPageSizeStorage(this.getStore(['meta']), this.getStore('name'));
      var pageInfo = this.getStore(['pageInfo']);

      if (!pageInfo.pageSize) {
        pageInfo.pageSize = prePageSize;
      }

      return pageInfo;
    }
    /**
     * @description: 設置分页信息
     * @param {type} 
     * @return: 
     */

  }, {
    key: "setPageInfo",
    value: function setPageInfo(_ref) {
      var _ref$shouldForceUpdat = _ref.shouldForceUpdate,
          shouldForceUpdate = _ref$shouldForceUpdat === void 0 ? true : _ref$shouldForceUpdat,
          _ref$pageInfo = _ref.pageInfo,
          pageInfo = _ref$pageInfo === void 0 ? {} : _ref$pageInfo;
      var prevPageInfo = this.get(['pageInfo']) || {};
      prevPageInfo = _objectSpread(_objectSpread({}, prevPageInfo), pageInfo); // console.log(prevPageInfo);

      return this.setStore(['pageInfo'], prevPageInfo, shouldForceUpdate);
    }
    /**
     * @description: 设置表格数据
     * @param {type} 
     * @return: 
     */

  }, {
    key: "setTableData",
    value: function setTableData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$isCache = _ref2.isCache,
          isCache = _ref2$isCache === void 0 ? true : _ref2$isCache,
          _ref2$isTop = _ref2.isTop,
          isTop = _ref2$isTop === void 0 ? false : _ref2$isTop,
          _ref2$shouldForceUpda = _ref2.shouldForceUpdate,
          shouldForceUpdate = _ref2$shouldForceUpda === void 0 ? true : _ref2$shouldForceUpda;

      var prePageSize = getPageSizeStorage(this.getStore(['meta']), this.getStore('name')); // TODO pageInfo

      var allpks = this.getStore(['allpks']);
      var alltss = this.getStore(['alltss']); // 设置分页相关数据

      if (data.hasOwnProperty('pageInfo') && !isWrong(data.pageInfo)) {
        // 前端重置后端返回的页码，初次为0，应该改为1，有问题在看看
        data.pageInfo.pageIndex === '0' ? data.pageInfo.pageIndex = '1' : '';
      } else if (data.rows.length === 0) {
        data.pageInfo = {
          pageSize: prePageSize,
          pageIndex: '1',
          total: '0',
          totalPage: '1'
        };
      } else {
        if (this && Array.isArray(allpks) && allpks.length > 0) {
          data.pageInfo = this.getPageInfo();
        } else {
          data.pageInfo = {
            pageSize: prePageSize,
            pageIndex: '1'
          };
        }
      } // 设置分页


      this.setPageInfo({
        shouldForceUpdate: false,
        pageInfo: data.pageInfo
      }); // 设置分页的allpks

      if (data.hasOwnProperty('allpks')) {
        this.setStore(['allpks'], data.allpks || allpks || [], false);
      } else if (data.rows.length === 0) {
        this.setStore(['allpks'], [], false);
      } else {
        this.setStore(['allpks'], allpks || [], false);
      }

      if (data.hasOwnProperty('alltss')) {
        this.setStore(['alltss'], data.alltss || alltss || [], false);
      } else if (data.rows.length === 0) {
        this.setStore(['alltss'], [], false);
      } else {
        this.setStore(['alltss'], alltss || [], false);
      }

      data = _get(_getPrototypeOf(MetaStore.prototype), "setTableData", this).call(this, data, {
        isCache: isCache,
        isTop: isTop,
        shouldForceUpdate: shouldForceUpdate
      });
      return data;
    }
    /**
     * @description: 设置表格状态
     * @param {type} 
     * @return: 
     */

  }, {
    key: "setTableStatus",
    value: function setTableStatus(status) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$shouldForceUpda = _ref3.shouldForceUpdate,
          shouldForceUpdate = _ref3$shouldForceUpda === void 0 ? true : _ref3$shouldForceUpda;

      _get(_getPrototypeOf(MetaStore.prototype), "setTableStatus", this).call(this, status, {
        shouldForceUpdate: shouldForceUpdate
      });
    }
    /**
     * @description: 删除表格行
     * @param {type} 
     * @return: 
     */

  }, {
    key: "deleteTableRows",
    value: function deleteTableRows(_ref4, thorough, shouldForceUpdate) {
      var rowKeyValues = _ref4.rowKeyValues,
          rowIndexs = _ref4.rowIndexs;

      var delItems = _get(_getPrototypeOf(MetaStore.prototype), "deleteTableRows", this).call(this, {
        rowKeyValues: rowKeyValues,
        rowIndexs: rowIndexs
      }, thorough, shouldForceUpdate);

      var pageInfo = this.getPageInfo(); // 这里为了过滤delete之后

      pageInfo && (pageInfo.total -= delItems.length);
      this.setPageInfo({
        shouldForceUpdate: false,
        pageInfo: pageInfo
      }); // 处理删除后的勾选逻辑

      var visibleRows = this.getViewData();
      var checkInfo = this.getCheckInfo() || {};

      if (!visibleRows.length) {
        checkInfo.checkedAll = false;
        checkInfo.indeterminate = false;
      } else {
        checkInfo.indeterminate = visibleRows.some(function (item) {
          return !!item.selected;
        });
        checkInfo.checkedAll = visibleRows.every(function (item) {
          return !!item.selected;
        });
      } // 更新


      this.setCheckInfo({
        checkInfo: checkInfo,
        shouldForceUpdate: shouldForceUpdate
      });
      return delItems;
    } // liumings

  }]);

  return MetaStore;
}(index_["EditTableStore"]);

/* harmony default export */ var EditTable_store = (Object(template_index_["hookFactory"])(MetaStore));
// EXTERNAL MODULE: external "@platform/api/index"
var api_index_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@platform/base/index"
var base_index_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@platform/form/index"
var form_index_ = __webpack_require__(24);
var form_index_default = /*#__PURE__*/__webpack_require__.n(form_index_);

// CONCATENATED MODULE: ./src/platform/components/Table/appTable/EditTable/components/SideBox/index.js
function SideBox_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SideBox_typeof = function _typeof(obj) { return typeof obj; }; } else { SideBox_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SideBox_typeof(obj); }

function SideBox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SideBox_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SideBox_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SideBox_createClass(Constructor, protoProps, staticProps) { if (protoProps) SideBox_defineProperties(Constructor.prototype, protoProps); if (staticProps) SideBox_defineProperties(Constructor, staticProps); return Constructor; }

function SideBox_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SideBox_setPrototypeOf(subClass, superClass); }

function SideBox_setPrototypeOf(o, p) { SideBox_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SideBox_setPrototypeOf(o, p); }

function SideBox_createSuper(Derived) { var hasNativeReflectConstruct = SideBox_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SideBox_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SideBox_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SideBox_possibleConstructorReturn(this, result); }; }

function SideBox_possibleConstructorReturn(self, call) { if (call && (SideBox_typeof(call) === "object" || typeof call === "function")) { return call; } return SideBox_assertThisInitialized(self); }

function SideBox_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SideBox_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function SideBox_getPrototypeOf(o) { SideBox_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SideBox_getPrototypeOf(o); }






var isFunction = index_["utils"].isFunction,
    isArray = index_["utils"].isArray,
    isObject = index_["utils"].isObject,
    isBoolean = index_["utils"].isBoolean,
    SideBox_uuidv4 = index_["utils"].uuidv4;

__webpack_require__(1889);

var SideBox_TableSideBox = /*#__PURE__*/function (_Component) {
  SideBox_inherits(TableSideBox, _Component);

  var _super = SideBox_createSuper(TableSideBox);

  function TableSideBox(props) {
    var _this;

    SideBox_classCallCheck(this, TableSideBox);

    _this = _super.call(this, props);
    _this.uuid = SideBox_uuidv4() || 'editTableSideBox';
    _this.state = {
      index: _this.props.index,
      buttonDisabled: []
    };
    _this.formStore = form_index_default.a.useForm();
    return _this;
  }

  SideBox_createClass(TableSideBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          _this$props$columns = _this$props.columns,
          columns = _this$props$columns === void 0 ? [] : _this$props$columns,
          operateType = _this$props.operateType,
          record = _this$props.record,
          _this$props$renderIte = _this$props.renderItems,
          renderItems = _this$props$renderIte === void 0 ? {} : _this$props$renderIte;
      columns = columns.filter(function (column) {
        // 默认设置下renderStatus
        if (column.render && column.itemtype !== 'customer') {
          column.renderStatus = column.renderStatus || 'edit';
        }

        return column.itemtype !== 'customer';
      }); // console.log(columns);

      var meta = SideBox_defineProperty({}, this.uuid, {
        status: operateType === 'edit' || operateType === 'add' ? 'edit' : 'browse',
        items: columns,
        moduletype: "form",
        //"status":"edit",
        code: "head",
        name: "侧拉表单",
        isunfold: false
      });

      this.formStore.setMeta(meta, this.uuid);

      for (var key in renderItems) {
        this.formStore.replaceItem(key, renderItems[key]);
      }

      var formValue = record.values || {};
      this.formStore.setStatus(operateType === 'edit' || operateType === 'add' ? 'edit' : 'browse');
      this.formStore.setAllFormValue(formValue);
      console.log(this.formStore, renderItems, formValue);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var operateType = nextProps.operateType,
          record = nextProps.record;
      var formValue = record.values || {};
      this.formStore.setStatus(operateType === 'edit' || operateType === 'add' ? 'edit' : 'browse');
      this.formStore.setAllFormValue(formValue);
      console.log(this.formStore, formValue);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$langJson = _this$props2.langJson,
          langJson = _this$props2$langJson === void 0 ? {} : _this$props2$langJson,
          onClose = _this$props2.onClose,
          _this$props2$status = _this$props2.status,
          status = _this$props2$status === void 0 ? false : _this$props2$status,
          fieldid = _this$props2.fieldid,
          operateType = _this$props2.operateType,
          onCancel = _this$props2.onCancel,
          onSure = _this$props2.onSure,
          onAdd = _this$props2.onAdd,
          tableId = _this$props2.tableId,
          record = _this$props2.record,
          onBeforeEvent = _this$props2.onBeforeEvent,
          onAfterEvent = _this$props2.onAfterEvent,
          model = _this$props2.model,
          origin = _this$props2.origin,
          renderItems = _this$props2.renderItems,
          pageScope = _this$props2.pageScope,
          value = _this$props2.value,
          scale = _this$props2.scale,
          _this$props2$tableSco = _this$props2.tableScope,
          tableScope = _this$props2$tableSco === void 0 ? {} : _this$props2$tableSco,
          modelIndex = _this$props2.modelIndex,
          diabled = _this$props2.diabled,
          edittable_dom = _this$props2.edittable_dom;

      var animation = function (status) {
        var usual = {
          mask: 'edit-table-modal-mask ',
          dialog: 'edit-table-modal-dialog '
        };

        switch (status) {
          case 'origin':
            return usual;

          case 'open':
            usual.mask += ' fadeIn';
            usual.dialog += ' slideInRight';
            break;

          case 'close':
            usual.mask += ' fadeOut';
            usual.dialog += ' slideOutRight';
            break;

          default:
            break;
        }

        return usual;
      }(status);

      var mask = animation.mask;
      var dialog = animation.dialog;
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("section", {
        className: "edit-table-modal disabled-bg-btn",
        fieldid: Object(api_index_["getSysFieldid"])("".concat(fieldid || tableId, "_modal-area"))
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: mask,
        onClick: function onClick(e) {
          onClose && onClose(e);
        }
      }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: dialog
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "edit-table-modal-header cf disabled-bg-btn"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "fl u-modal-title",
        fieldid: Object(api_index_["getSysFieldid"])("".concat(operateType === 'add' ? langJson['table_add'] : langJson['table_change'], "_title"))
      }, ' ', operateType === 'add' ? langJson['table_add'] : langJson['table_change']), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "icon iconfont icon-you icon-celashouqi fr",
        onClick: function onClick(e) {
          onClose && onClose(e);
        }
      })), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "edit-table-modal-body",
        fieldid: Object(api_index_["getSysFieldid"])("".concat(fieldid || tableId, "_form-area")),
        id: "tableModal"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        fieldid: Object(api_index_["getSysFieldid"])("".concat(tableId, "_form-area"))
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(form_index_default.a // meta={this.formMeta}
      , {
        name: this.uuid //status={status}
        ,
        config: {
          onAfterEvent: onAfterEvent,
          onBeforeEvent: onBeforeEvent
        },
        store: this.formStore //init={}

      }))), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "edit-table-modal-footer cf",
        fieldid: Object(api_index_["getSysFieldid"])('bottom-area')
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Button"], {
        className: " fr",
        onClick: function onClick(e) {
          onCancel && onCancel(e);
        } // shape="border"

      }, langJson['table_cancel']), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Button"], {
        className: "u-button-primary fr",
        onClick: function onClick(e) {
          onSure && onSure(e);
        }
      }, langJson['table_ok']), operateType === 'add' && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Button"], {
        className: "u-button-primary fr",
        onClick: function onClick(e) {
          onAdd && onAdd(e);
        }
      }, langJson['table_save_add']))));
    }
  }]);

  return TableSideBox;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);


// CONCATENATED MODULE: ./src/platform/components/Table/appTable/EditTable/components/SideBox/hoc.js
function hoc_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { hoc_typeof = function _typeof(obj) { return typeof obj; }; } else { hoc_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return hoc_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function hoc_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function hoc_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { hoc_ownKeys(Object(source), true).forEach(function (key) { hoc_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { hoc_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hoc_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function hoc_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function hoc_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function hoc_createClass(Constructor, protoProps, staticProps) { if (protoProps) hoc_defineProperties(Constructor.prototype, protoProps); if (staticProps) hoc_defineProperties(Constructor, staticProps); return Constructor; }

function hoc_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) hoc_setPrototypeOf(subClass, superClass); }

function hoc_setPrototypeOf(o, p) { hoc_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return hoc_setPrototypeOf(o, p); }

function hoc_createSuper(Derived) { var hasNativeReflectConstruct = hoc_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = hoc_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = hoc_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return hoc_possibleConstructorReturn(this, result); }; }

function hoc_possibleConstructorReturn(self, call) { if (call && (hoc_typeof(call) === "object" || typeof call === "function")) { return call; } return hoc_assertThisInitialized(self); }

function hoc_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function hoc_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function hoc_getPrototypeOf(o) { hoc_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return hoc_getPrototypeOf(o); }

/*
 * @Descripttion: 侧拉弹窗
 * @version: 
 * @Author: bbq
 * @Date: 2020-09-15 16:32:08
 * @LastEditors: bbq
 * @LastEditTime: 2020-12-02 16:55:24
 */


var hoc_isFunction = index_["utils"].isFunction;

var ROW_STATUS = index_["CONFIG"].ROW_STATUS;
/**
* 弹窗逻辑处理
* @param {*} Table 
*/

function hotkey(Table) {
  var _temp;

  if (!Table) {
    console.error('缺少Table组件');
  }

  return _temp = /*#__PURE__*/function (_Component) {
    hoc_inherits(MetaTable, _Component);

    var _super = hoc_createSuper(MetaTable);

    function MetaTable(props) {
      var _this;

      hoc_classCallCheck(this, MetaTable);

      _this = _super.call(this, props); // this.state = { show: false };

      _this.onAfterEvent = function (prams) {
        var attrcode = prams.attrcode,
            curMetaItem = prams.curMetaItem,
            value = prams.value,
            oldValue = prams.oldValue,
            allValue = prams.allValue,
            componentValue = prams.componentValue;
        var _this$props = _this.props,
            high_sidebox = _this$props.high_sidebox,
            onAfterEvent = _this$props.onAfterEvent,
            tableId = _this$props.tableId,
            rowKey = _this$props.rowKey;
        var store = high_sidebox.store;
        var sideBoxConfig = store.getStore('sideBoxConfig') || {};
        var _sideBoxConfig = sideBoxConfig,
            index = _sideBoxConfig.index,
            _sideBoxConfig$record = _sideBoxConfig.record,
            record = _sideBoxConfig$record === void 0 ? {} : _sideBoxConfig$record;
        record.values = allValue;
        sideBoxConfig = hoc_objectSpread({}, sideBoxConfig);
        store.setStore('sideBoxConfig', sideBoxConfig, false); // 更新下行状态

        if (curMetaItem.itemtype !== 'residtxt') {
          // let isMulti = curMetaItem.isMultiSelectedEnabled;
          store.setCache('oldBatchData', {
            // TODO  转换为过滤后的index
            // 在onchange时缓存列数据的key 和value  用于批量更改   zhanghengh 18/6/29
            batchChangeIndex: sideBoxConfig.index,
            batchChangeKey: curMetaItem.attrcode,
            batchChangeValue: value.value,
            batchChangeDisplay: value.display // batchChangeValue: isMulti ? theValue : theValue.value,
            // batchChangeDisplay: isMulti ? null : theValue.display

          });
        } else {
          // 多语批改
          store.setCache('oldBatchData', {
            batchChangeIndex: sideBoxConfig.index,
            batchChangeKey: curMetaItem.attrcode,
            batchChangeValue: value.value,
            batchChangeDisplay: null
          });
        } // 编辑关联项  放在 onAfterEvent 中
        // 把status置为1，标识修改     状态不为1的不动 (比如用户自己set但是状态为2的)


        var rowKeyValue = record[rowKey];
        var rowStatus = store.getRowProps({
          rowKeyValue: rowKeyValue
        }, 'status');

        if (rowStatus == ROW_STATUS.origin) {
          store.setRowProps({
            rowKeyValue: rowKeyValue
          }, {
            status: ROW_STATUS.edit
          }, false);
        } // 根据rowid 更新表格数据


        store.setRows({
          rows: [record]
        });
        hoc_isFunction(onAfterEvent) && onAfterEvent({
          tableId: tableId,
          record: record,
          rowKey: rowKey,
          rowKeyValue: rowKeyValue,
          rowIndex: index,
          attrcode: attrcode,
          value: value,
          oldValue: oldValue,
          componentValue: componentValue,
          //event,
          column: curMetaItem,
          //triggerType
          isTriggerModal: true
        }, store);
      };

      _this.onBeforeEvent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(moudleId, attrcode, value, values, column, event) {
          var _this$props2, high_sidebox, tableId, onBeforeEvent, rowKey, store, sideBoxConfig, index, _sideBoxConfig$record2, record;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this$props2 = _this.props, high_sidebox = _this$props2.high_sidebox, tableId = _this$props2.tableId, onBeforeEvent = _this$props2.onBeforeEvent, rowKey = _this$props2.rowKey;
                  store = high_sidebox.store;
                  sideBoxConfig = store.getStore('sideBoxConfig') || {};
                  index = sideBoxConfig.index, _sideBoxConfig$record2 = sideBoxConfig.record, record = _sideBoxConfig$record2 === void 0 ? {} : _sideBoxConfig$record2; // 越过hotkey 组件里的逻辑
                  // event.target.ncExecuteFocus = true;

                  if (!hoc_isFunction(onBeforeEvent)) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 7;
                  return onBeforeEvent({
                    tableId: tableId,
                    record: record,
                    rowKey: rowKey,
                    rowKeyValue: record[rowKey],
                    rowIndex: index,
                    attrcode: attrcode,
                    value: value,
                    event: event,
                    column: column,
                    //triggerType
                    isTriggerModal: true
                  });

                case 7:
                  _context.t0 = _context.sent;
                  return _context.abrupt("return", _context.t0 !== false);

                case 11:
                  return _context.abrupt("return", true);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2, _x3, _x4, _x5, _x6) {
          return _ref.apply(this, arguments);
        };
      }();

      return _this;
    } //表单编辑后，保存表单数据到子表行


    hoc_createClass(MetaTable, [{
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            high_sidebox = _this$props3.high_sidebox,
            selectedChange = _this$props3.selectedChange,
            rowKey = _this$props3.rowKey,
            renderItems = _this$props3.renderItems;
        var langJson = high_sidebox.langJson,
            _high_sidebox$sideBox = high_sidebox.sideBoxConfig,
            sideBoxConfig = _high_sidebox$sideBox === void 0 ? {} : _high_sidebox$sideBox,
            tableId = high_sidebox.tableId,
            arrColumns = high_sidebox.arrColumns,
            fieldid = high_sidebox.fieldid,
            onCloseModel = high_sidebox.onCloseModel,
            tableModelConfirm = high_sidebox.tableModelConfirm,
            store = high_sidebox.store;
        var index = sideBoxConfig.index,
            operateType = sideBoxConfig.operateType,
            record = sideBoxConfig.record,
            _sideBoxConfig$show = sideBoxConfig.show,
            show = _sideBoxConfig$show === void 0 ? false : _sideBoxConfig$show; // console.log(sideBoxConfig);

        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Fragment"], null, show && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(SideBox_TableSideBox, _extends({
          langJson: langJson,
          rowKey: rowKey,
          fieldid: fieldid,
          columns: arrColumns,
          renderItems: renderItems,
          tableId: tableId,
          onBeforeEvent: this.onBeforeEvent,
          onAfterEvent: this.onAfterEvent,
          onClose: function onClose(e) {
            // console.log('close');
            var sideBoxConfig = store.getStore('sideBoxConfig') || {};
            sideBoxConfig = hoc_objectSpread(hoc_objectSpread({}, sideBoxConfig), {}, {
              show: false
            });
            store.setStore('sideBoxConfig', sideBoxConfig);
          },
          onCancel: function onCancel(e) {
            if (operateType === 'add') {
              var oldLen = store.getSelectedRows().length;
              store.deleteTableRows({
                rowIndexs: index
              });
              var newLen = store.getSelectedRows().length;
              hoc_isFunction(selectedChange) && selectedChange(tableId, newLen, oldLen);
            } else if (operateType === 'edit') {
              var data = store.getCache(['beforeEdit']) || {
                rows: []
              };

              var _record = data.rows[index] || {};

              store.updateTableDataByIndexs([{
                index: index,
                data: _record
              }]);
            } // 关闭弹窗


            var sideBoxConfig = store.getStore('sideBoxConfig') || {};
            sideBoxConfig = hoc_objectSpread(hoc_objectSpread({}, sideBoxConfig), {}, {
              show: false,
              status: 'close'
            });
            store.setStore('sideBoxConfig', sideBoxConfig); //弹出之后，禁止后面的滚动事件

            var html = document.getElementsByTagName('html');
            html[0].style.overflow = ''; // record 就是record

            hoc_isFunction(onCloseModel) ? onCloseModel(record) : function () {
              console.warn('请传入关闭窗口函数');
              return false;
            };
          },
          onSure: function onSure(e) {
            // 关闭弹窗
            var sideBoxConfig = store.getStore('sideBoxConfig') || {};
            sideBoxConfig = hoc_objectSpread(hoc_objectSpread({}, sideBoxConfig), {}, {
              show: false,
              status: 'close'
            });
            store.setStore('sideBoxConfig', sideBoxConfig); //弹出之后，禁止后面的滚动事件

            var html = document.getElementsByTagName('html');
            html[0].style.overflow = ''; // record 就是record

            hoc_isFunction(tableModelConfirm) ? tableModelConfirm(record) : console.warn('请传入关闭窗口函数');
          },
          onAdd: function onAdd(e) {
            store.removeEmptyRows({
              keys: []
            });
            var sideBoxConfig = store.getStore('sideBoxConfig') || {};
            sideBoxConfig = hoc_objectSpread(hoc_objectSpread({}, sideBoxConfig), {}, {
              show: true
            });
            sideBoxConfig.operateType = 'add';
            sideBoxConfig.status = 'open';
            var addIndex = store.getVisibleRows(false, false).length;
            var record = store.addTableRow(addIndex, {}, false);
            sideBoxConfig.record = record; //         // 自动聚焦
            //         if (autoFocus == true) {
            //             let items = this.state.meta[tableId].items;
            //             for (let i = 0; i < items.length; i++) {
            //                 if (
            //                     items[i].attrcode != 'numberindex' &&
            //                     (typeof items[i].disabled == 'undefined' || items[i].disabled == false) &&
            //                     (typeof items[i].visible != 'undefined' && items[i].visible == true)
            //                 ) {
            //                     rows[addIndex].values[items[i].attrcode].isEdit = true;
            //                     break;
            //                 }
            //             }
            //         }

            store.setStore('sideBoxConfig', sideBoxConfig);
          }
        }, sideBoxConfig)), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Table, this.props));
      }
    }]);

    return MetaTable;
  }(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]), _temp;
}
// CONCATENATED MODULE: ./src/platform/components/Table/appTable/EditTable/index.js
function EditTable_extends() { EditTable_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return EditTable_extends.apply(this, arguments); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function EditTable_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function EditTable_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { EditTable_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { EditTable_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function EditTable_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditTable_typeof = function _typeof(obj) { return typeof obj; }; } else { EditTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditTable_typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function EditTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function EditTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { EditTable_ownKeys(Object(source), true).forEach(function (key) { EditTable_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { EditTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function EditTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function EditTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) EditTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) EditTable_defineProperties(Constructor, staticProps); return Constructor; }

function EditTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EditTable_setPrototypeOf(subClass, superClass); }

function EditTable_setPrototypeOf(o, p) { EditTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EditTable_setPrototypeOf(o, p); }

function EditTable_createSuper(Derived) { var hasNativeReflectConstruct = EditTable_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EditTable_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EditTable_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EditTable_possibleConstructorReturn(this, result); }; }

function EditTable_possibleConstructorReturn(self, call) { if (call && (EditTable_typeof(call) === "object" || typeof call === "function")) { return call; } return EditTable_assertThisInitialized(self); }

function EditTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EditTable_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EditTable_getPrototypeOf(o) { EditTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EditTable_getPrototypeOf(o); }

/*
 * @Descripttion: 
 * @version: 0.0
 * @Author: bbq
 * @Date: 2020-05-29 11:00:29
 * @LastEditors: bbq
 * @LastEditTime: 2021-03-05 13:58:48
 */







var formatColumn = index_["lib"].formatColumn,
    EditTable_hotkey = index_["lib"].hotkey,
    pagination = index_["lib"].pagination,
    selectRow = index_["lib"].selectRow,
    indexCol = index_["lib"].indexCol,
    checkCol = index_["lib"].checkCol,
    errorCol = index_["lib"].errorCol,
    filter = index_["lib"].filter,
    selectable = index_["lib"].selectable,
    excel = index_["lib"].excel,
    total = index_["lib"].total,
    columnSort = index_["lib"].columnSort,
    contextMenu = index_["lib"].contextMenu;
var EditTable_uuidv4 = index_["utils"].uuidv4,
    excelPackageData = index_["utils"].excelPackageData,
    isString = index_["utils"].isString,
    EditTable_isFunction = index_["utils"].isFunction,
    EditTable_isArray = index_["utils"].isArray,
    EditTable_isObject = index_["utils"].isObject,
    isEmptyValue = index_["utils"].isEmptyValue,
    polymerizeComponents = index_["utils"].polymerizeComponents,
    isUndefined = index_["utils"].isUndefined,
    warningOnce = index_["utils"].warningOnce,
    getMetaIsTotal = index_["utils"].getMetaIsTotal,
    setPageSizeStorage = index_["utils"].setPageSizeStorage;
var EditTable_ROW_STATUS = index_["CONFIG"].ROW_STATUS; // selectRow(pagination(formatColumn(Table)))

var EditTable_MetaTable = polymerizeComponents(base_index_["Table"], // 高阶组件是有顺序的
[columnSort, formatColumn, // 不然操作列  checkbox 列会显示在侧拉内部
hotkey, total, pagination, selectRow, errorCol, checkCol, indexCol, filter, selectable, excel, EditTable_hotkey, contextMenu], {
  name: 'editTable',
  type: 'hoc',
  user: 'platform'
});

__webpack_require__(1890);

var EditTable_EditTable = /*#__PURE__*/function (_BaseComponent) {
  EditTable_inherits(EditTable, _BaseComponent);

  var _super = EditTable_createSuper(EditTable);

  function EditTable(props) {
    var _this;

    EditTable_classCallCheck(this, EditTable);

    _this = _super.call(this, props);

    _this.pageInfoChange = function (value) {
      var _this$props = _this.props,
          onPageInfoChange = _this$props.onPageInfoChange,
          store = _this$props.store,
          pkname = _this$props.pkname,
          crossPageSelect = _this$props.crossPageSelect,
          tableId = _this$props.tableId;
      var pageInfo = store.getPageInfo();
      pageInfo = EditTable_objectSpread(EditTable_objectSpread({}, pageInfo), value || {});
      var allpks = store.getStore(['allpks']);
      setPageSizeStorage(store.getStore(['meta']), tableId, pageInfo.pageSize);
      store.setPageInfo({
        pageInfo: pageInfo
      });

      var pks = _this.splitPks(allpks, pageInfo.pageIndex, pageInfo.pageSize);

      console.log(pks, value);
      EditTable_isFunction(onPageInfoChange) && onPageInfoChange(pks, pageInfo.total);
    };

    _this.splitPks = function (data, pageIndex, pageSize) {
      if (data.length <= pageSize) {
        // 这里暂时解决问题，后续在进行优化
        return data;
      }

      var pks = [];
      var index = Number(pageIndex);
      var size = Number(pageSize);
      var start = (index - 1) * size;

      for (var i = start; i < start + size; i++) {
        if (data[i]) {
          pks.push(data[i]);
        } else {
          break;
        }
      }

      return pks;
    };

    _this.onAllCheckChange = function (value) {
      var _this$props2 = _this.props,
          store = _this$props2.store,
          selectedChange = _this$props2.selectedChange,
          onSelectedAll = _this$props2.onSelectedAll,
          tableId = _this$props2.tableId,
          crossPageSelect = _this$props2.crossPageSelect,
          pkname = _this$props2.pkname;
      var setRowsSelected = store.setRowsSelected,
          getSelectedRows = store.getSelectedRows,
          getCheckInfo = store.getCheckInfo,
          getData = store.getData,
          setCrossPage = store.setCrossPage;

      var _ref = getCheckInfo() || {},
          checkedAll = _ref.checkedAll;

      var oldLen = getSelectedRows().length;
      checkedAll = !checkedAll;
      setRowsSelected({}, checkedAll, true); // 跨页全选

      if (crossPageSelect && pkname) {
        var rows = getData();
        setCrossPage(rows, pkname, value);
      }

      var newLen = getSelectedRows().length;
      EditTable_isFunction(onSelectedAll) && onSelectedAll(tableId, checkedAll, getData().length);
      EditTable_isFunction(selectedChange) && selectedChange(tableId, newLen, oldLen);
    };

    _this.onCheckChange = function (record, index) {
      var isUnique = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var _this$props3 = _this.props,
          selectedChange = _this$props3.selectedChange,
          onSelected = _this$props3.onSelected,
          tableId = _this$props3.tableId,
          store = _this$props3.store,
          crossPageSelect = _this$props3.crossPageSelect,
          pkname = _this$props3.pkname;
      var getTableProps = store.getTableProps,
          setRowsSelected = store.setRowsSelected,
          getRowProps = store.getRowProps,
          getSelectedRows = store.getSelectedRows,
          setTableProps = store.setTableProps,
          getTrueRowIndex = store.getTrueRowIndex,
          setCrossPage = store.setCrossPage,
          getStore = store.getStore;

      var _getStore = getStore(),
          checkInfo = _getStore.checkInfo;

      var crossPageSelectIndex = checkInfo.crossPageSelectIndex;
      var rowKey = getTableProps('rowKey');
      var rowKeyValue = record[rowKey];
      var selected = !getRowProps({
        rowKeyValue: rowKeyValue
      }, 'selected');
      var oldLen = getSelectedRows().length; // 跨页全选

      if (crossPageSelect && pkname) {
        if (isUnique) {
          crossPageSelectIndex.clear();
        }

        setCrossPage(record, pkname, selected);
      }

      if (isUnique) {
        // 清理所有
        setRowsSelected({}, false, false); // 跨页全选会影响这里 TODO
      } // 特殊情况 如果当前选择 选择行时 依然选中


      if (!selected && isUnique && oldLen > 1) {
        selected = true;
      }

      setRowsSelected({
        rowKeyValues: rowKeyValue
      }, selected);
      setTableProps('currentIndex', selected ? getTrueRowIndex({
        rowIndex: index
      }) : -1, false);
      var newLen = getSelectedRows().length; // 选中选项的回调函数

      EditTable_isFunction(onSelected) && onSelected(tableId, record, selected, index, isUnique);
      EditTable_isFunction(selectedChange) && selectedChange(tableId, newLen, oldLen);
    };

    _this.changeCrossSelect = function (value) {
      var _this$props4 = _this.props,
          store = _this$props4.store,
          pkname = _this$props4.pkname,
          selectedChange = _this$props4.selectedChange,
          tableId = _this$props4.tableId;
      var getStore = store.getStore,
          setStore = store.setStore,
          getData = store.getData,
          _setSelect = store._setSelect,
          setCrossPage = store.setCrossPage;

      var _getStore2 = getStore(),
          checkInfo = _getStore2.checkInfo,
          allpks = _getStore2.allpks;

      var crossPageSelectIndex = checkInfo.crossPageSelectIndex;

      if (!pkname) {
        warningOnce(false, "\u8BF7\u914D\u7F6Epkname");
        return;
      }

      var oldLen = crossPageSelectIndex.size;
      var rows = getData();

      switch (value) {
        case 'current':
          _setSelect(undefined, 'all');

          crossPageSelectIndex.clear();
          setCrossPage(rows, pkname, true);
          break;

        case 'all':
          _setSelect(undefined, 'allpage');

          crossPageSelectIndex = new Set(allpks);
          break;

        case 'reverse':
          _setSelect(undefined, 'reverse');

          allpks.forEach(function (pk) {
            if (crossPageSelectIndex.has(pk)) {
              crossPageSelectIndex["delete"](pk);
            } else {
              crossPageSelectIndex.add(pk);
            }
          });
      }

      setStore(['checkInfo', 'crossPageSelectIndex'], crossPageSelectIndex);
      var newLen = crossPageSelectIndex.size;
      EditTable_isFunction(selectedChange) && selectedChange(tableId, newLen, oldLen);
    };

    _this.sortChange = function (sortParam, sortData) {
      var sortObj = {};
      var _this$props5 = _this.props,
          store = _this$props5.store,
          tableId = _this$props5.tableId;
      var setStore = store.setStore,
          getViewMeta = store.getViewMeta;
      /**
       * 每次排序都存储新的排序信息
       * 这是产品李聪慧让加的, 为了解决单据打印时，列表对中字段排序产生的问题
       */

      setStore(['sortParam'], {
        mode: "single",
        sortParam: sortParam
      }, false);
      sortParam.forEach(function (item) {
        sortObj[item.field] = item;
      }); // 处理排序多表头

      Object(index_["handleSortcolumns"])({
        columns: getViewMeta(tableId),
        sortObj: sortObj
      });
      var invisibleData = store.getViewData('invisible') || []; // console.log(invisibleData, 'invisibleDatainvisibleDatainvisibleDatainvisibleDatainvisibleDatainvisibleDatainvisibleData');

      store.setData({
        data: [].concat(_toConsumableArray(sortData), _toConsumableArray(invisibleData))
      });
    };

    _this.getColSettiongParam = function () {
      var _this$props6 = _this.props,
          store = _this$props6.store,
          tableId = _this$props6.tableId;
      var meta = store.getMeta();

      if (meta && meta[tableId]) {
        var currentMeta = meta[tableId];
        var config = store.getConfig();
        return {
          appcode: currentMeta.appcode || api_index_["pageTo"].getAppCode(),
          pagecode: currentMeta.pagecode || api_index_["pageTo"].getPageCode(),
          code: currentMeta.templateCode || meta.code,
          pageid: currentMeta.pageid || meta.pageid,
          areaCode: tableId,
          areaId: currentMeta.oid,
          noColSetClass: config.noColSetClass,
          colSetCallback: config.colSetCallback,
          hiddenLeftItem: config.hiddenLeftItem
        };
      } else {
        return {};
      }
    };

    _this.updateColumnAfterSetting = function (newColumn, areaCode) {
      var store = _this.props.store;
      var setMeta = store.setMeta,
          getMeta = store.getMeta;
      var meta = getMeta();

      if (newColumn.length && areaCode) {
        var finalColumn = _toConsumableArray(meta[areaCode].items);

        var sortIndexArr = [];
        var sortObjArr = [];
        newColumn.map(function (newItem) {
          meta[areaCode].items.map(function (oldItem, index) {
            if (newItem.attrcode === oldItem.attrcode) {
              oldItem.width = newItem.width;
              oldItem.islock = newItem.islock;
              oldItem.visible = newItem.visible;
              sortIndexArr.push(index);
              sortObjArr.push(oldItem);
            }
          });
        });
        sortIndexArr.sort(function (a, b) {
          return a - b;
        });
        sortIndexArr.map(function (item, index) {
          finalColumn[item] = sortObjArr[index];
        });
        meta[areaCode].items = finalColumn;
        setMeta(meta, areaCode);

        _this.setState({
          key: _this.state.key + 1
        });
      }
    };

    _this.contextMenuClick = function (btnCode, execCommandCopy, param, insertNum, rowIndex) {
      var isHotKey = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var _this$props7 = _this.props,
          store = _this$props7.store,
          rightMenuClick = _this$props7.rightMenuClick,
          onBatchChange = _this$props7.onBatchChange,
          langJson = _this$props7.langJson,
          tableId = _this$props7.tableId;
      var getData = store.getData,
          getRowOldValue = store.getRowOldValue,
          insertRowsAfterIndex = store.insertRowsAfterIndex,
          deleteTableRows = store.deleteTableRows;
      var editCode = ["delete", 'insert_up', 'insert_down'];
      var copyCode = ["copy", "copy-row", "copy-column"];

      switch (true) {
        case editCode.includes(btnCode):
          if (EditTable_isFunction(rightMenuClick)) {
            //删行、插行、插行并粘贴等右键按钮需要业务适配
            if (btnCode === 'insert_up') {
              var rows = Array(insertNum).fill({
                values: {}
              });
              insertRowsAfterIndex(rows, rowIndex - 1);
            }

            if (btnCode === 'insert_down') {
              var _rows = Array(insertNum).fill({
                values: {}
              });

              insertRowsAfterIndex(_rows, rowIndex);
            }

            if (btnCode === 'delete') {
              deleteTableRows({
                rowIndexs: rowIndex
              });
            }

            rightMenuClick(btnCode, insertNum, rowIndex);
          }

          break;

        case copyCode.includes(btnCode):
          //选中表头
          var activeHeads = store.getCache('activeSpecialCells');
          console.log("表头选中信息：", activeHeads);
          var arrayMeta = store.getArrayMeta(tableId);
          var currentMeta = store.getViewMeta(tableId);
          var activedCells = store.getCache("activedCells"); // console.log(activedCells, activeHeads);

          if (isHotKey && !activedCells && !activeHeads) {
            return;
          }

          var selectedRows = [];

          if (btnCode === 'copy' || btnCode === 'copy-row') {
            selectedRows = store.getRows({
              rowKeyValues: Object.keys(activedCells)
            });
          } else if (btnCode === 'copy-column') {
            selectedRows = store.getData([EditTable_ROW_STATUS["delete"], EditTable_ROW_STATUS.filter]);
          }

          EditTable_isFunction(execCommandCopy) && execCommandCopy(activeHeads, currentMeta, activedCells, selectedRows, arrayMeta);
          break;

        case btnCode === "paste":
          //调用复制粘贴回调事件
          if (EditTable_isFunction(onBatchChange)) {
            param = EditTable_objectSpread(EditTable_objectSpread({}, param), {}, {
              langJson: langJson,
              rows: getData(),
              getRowOldValue: getRowOldValue,
              tableId: tableId
            });
            var data = excelPackageData(param);
            onBatchChange(data);
          }

          break;

        case btnCode === "insert_paste":
          //插行并粘贴
          if (EditTable_isFunction(onBatchChange)) {
            var _rows2 = Array(insertNum).fill({
              values: {}
            });

            insertRowsAfterIndex(_rows2, rowIndex); //插入空行

            param = EditTable_objectSpread(EditTable_objectSpread({}, param), {}, {
              langJson: _this.props.langJson,
              rows: getData(),
              getRowOldValue: getRowOldValue,
              tableId: tableId
            });

            var _data = excelPackageData(param);

            onBatchChange(_data);
          }

          break;
      }
    };

    var _store = props.store,
        _tableId = props.tableId,
        _props$rowKey = props.rowKey,
        _rowKey = _props$rowKey === void 0 ? 'rowid' : _props$rowKey,
        status = props.status;

    _this.state = {
      isEllipsis: true,
      key: 1
    }; // 设置一些属性

    _store.setTableProps('rowKey', _rowKey, false); // rowKey 更新之后要更新  数据不然会导致数据报错
    // store.setData(store.getData(), false);


    _store.setTableProps('status', status || _store.getTableProps('status') || 'browse', false);

    _store.setStore('name', _tableId, false);

    _this.uuid = EditTable_uuidv4();
    (typeof window === "undefined" ? "undefined" : EditTable_typeof(window)) === 'object' && (window[_this.uuid] = _store);
    return _this;
  }

  EditTable_createClass(EditTable, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this2 = this;

      var _this$props8 = this.props,
          store = _this$props8.store,
          afterLangload = _this$props8.afterLangload;
      var setCache = store.setCache; //加载多语

      var callback = function callback(json) {
        // this.setState({ json });
        setCache('langJson', json || {}); // console.log(store.getCache('langJson'))
        // 备份一份到全局

        afterLangload && afterLangload(json, store); // 强制更新一次

        _this2.forceUpdate();
      };

      Object(api_index_["getMultiLang"])({
        moduleId: "page_table",
        callback: callback
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps, nextState) {
      var editTableComponentUpdate = this.props.editTableComponentUpdate;
      editTableComponentUpdate && editTableComponentUpdate(this.props);
    }
  }, {
    key: "onBatchSelected",
    // 框选等操作
    value: function onBatchSelected() {
      var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var hotkey = arguments.length > 1 ? arguments[1] : undefined;
      var _this$props9 = this.props,
          onBatchSelected = _this$props9.onBatchSelected,
          store = _this$props9.store,
          crossPageSelect = _this$props9.crossPageSelect,
          pkname = _this$props9.pkname;
      var getTableProps = store.getTableProps,
          setRowsSelected = store.setRowsSelected,
          getRowProps = store.getRowProps,
          getSelectedRows = store.getSelectedRows,
          setTableProps = store.setTableProps,
          getTrueRowIndex = store.getTrueRowIndex,
          setCrossPage = store.setCrossPage;
      var rowKey = getTableProps('rowKey'); // 清空所有

      setRowsSelected({}, false, false);
      rows.forEach(function (row) {
        var rowKeyValue = row[rowKey];
        var selected = !getRowProps({
          rowKeyValue: rowKeyValue
        }, 'selected');
        var values = row.values || row,
            isSagaStatus = values && values.saga_status && values.saga_status.value === '1'; // 错误行禁用

        if (isSagaStatus) {
          return;
        } // 跨页全选


        if (crossPageSelect && pkname) {
          setCrossPage(row, pkname, selected);
        }

        setRowsSelected({
          rowKeyValues: rowKeyValue
        }, selected, false); // setTableProps('currentIndex', getTrueRowIndex({ rowKeyValue }), false);
      }); // 更新

      this.forceUpdate && this.forceUpdate(); // console.log(rows);

      onBatchSelected && onBatchSelected(rows);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props10 = this.props,
          rowKey = _this$props10.rowKey,
          store = _this$props10.store,
          status = _this$props10.status,
          editType = _this$props10.editType,
          _this$props10$langJso = _this$props10.langJson,
          langJson = _this$props10$langJso === void 0 ? {} : _this$props10$langJso,
          _this$props10$autoAdd = _this$props10.autoAddRow,
          autoAddRow = _this$props10$autoAdd === void 0 ? {} : _this$props10$autoAdd,
          tableId = _this$props10.tableId,
          bodyDisplayInRow = _this$props10.bodyDisplayInRow,
          _this$props10$lazyloa = _this$props10.lazyload,
          lazyload = _this$props10$lazyloa === void 0 ? true : _this$props10$lazyloa,
          columns = _this$props10.columns,
          _rowClassName = _this$props10.rowClassName,
          hideBrowseCheckbox = _this$props10.hideBrowseCheckbox,
          showCheck = _this$props10.showCheck,
          showIndex = _this$props10.showIndex,
          crossPageSelect = _this$props10.crossPageSelect,
          _this$props10$high_fi = _this$props10.high_filter,
          high_filter = _this$props10$high_fi === void 0 ? {} : _this$props10$high_fi,
          _handleFilterCallBack = _this$props10.handleFilterCallBack,
          _handleResetCallBack = _this$props10.handleResetCallBack,
          _this$props10$high_se = _this$props10.high_selectable,
          high_selectable = _this$props10$high_se === void 0 ? {} : _this$props10$high_se,
          onBatchSelected = _this$props10.onBatchSelected,
          showPagination = _this$props10.showPagination,
          _onRowClick = _this$props10.onRowClick,
          onBeforeEvent = _this$props10.onBeforeEvent,
          _onAfterEvent = _this$props10.onAfterEvent,
          onChange = _this$props10.onChange,
          _onRowDoubleClick = _this$props10.onRowDoubleClick,
          onCloseModel = _this$props10.onCloseModel,
          fieldid = _this$props10.fieldid,
          tableModelConfirm = _this$props10.tableModelConfirm,
          _onCellHyperlinkTo = _this$props10.onCellHyperlinkTo,
          showTotal = _this$props10.showTotal,
          noTotalRows = _this$props10.noTotalRows,
          noTotalCol = _this$props10.noTotalCol,
          allowTotalRows = _this$props10.allowTotalRows,
          _onBatchChange = _this$props10.onBatchChange,
          noColSetClass = _this$props10.noColSetClass,
          colSetCallback = _this$props10.colSetCallback,
          _this$props10$cancelC = _this$props10.cancelCustomRightMenu,
          cancelCustomRightMenu = _this$props10$cancelC === void 0 ? false : _this$props10$cancelC,
          addBlankCol = _this$props10.addBlankCol,
          _this$props10$showWid = _this$props10.showWidthAndHeightConfig,
          showWidthAndHeightConfig = _this$props10$showWid === void 0 ? true : _this$props10$showWid,
          multipleRowCell = _this$props10.multipleRowCell,
          _this$props10$otherAr = _this$props10.otherAreaHeight,
          otherAreaHeight = _this$props10$otherAr === void 0 ? 0 : _this$props10$otherAr,
          rightMenuClick = _this$props10.rightMenuClick,
          focusIndex = _this$props10.focusIndex,
          foldCacheId = _this$props10.foldCacheId,
          _this$props10$hideRig = _this$props10.hideRightMenu,
          hideRightMenu = _this$props10$hideRig === void 0 ? false : _this$props10$hideRig,
          _this$props10$isSort = _this$props10.isSort,
          isSort = _this$props10$isSort === void 0 ? true : _this$props10$isSort,
          others = _objectWithoutProperties(_this$props10, ["rowKey", "store", "status", "editType", "langJson", "autoAddRow", "tableId", "bodyDisplayInRow", "lazyload", "columns", "rowClassName", "hideBrowseCheckbox", "showCheck", "showIndex", "crossPageSelect", "high_filter", "handleFilterCallBack", "handleResetCallBack", "high_selectable", "onBatchSelected", "showPagination", "onRowClick", "onBeforeEvent", "onAfterEvent", "onChange", "onRowDoubleClick", "onCloseModel", "fieldid", "tableModelConfirm", "onCellHyperlinkTo", "showTotal", "noTotalRows", "noTotalCol", "allowTotalRows", "onBatchChange", "noColSetClass", "colSetCallback", "cancelCustomRightMenu", "addBlankCol", "showWidthAndHeightConfig", "multipleRowCell", "otherAreaHeight", "rightMenuClick", "focusIndex", "foldCacheId", "hideRightMenu", "isSort"]);

      var getMeta = store.getMeta,
          getViewMeta = store.getViewMeta,
          getCache = store.getCache,
          getStore = store.getStore,
          getData = store.getData,
          getTableProps = store.getTableProps,
          getViewData = store.getViewData,
          setTableProps = store.setTableProps,
          getTrueRowIndex = store.getTrueRowIndex,
          getRowKeyValue = store.getRowKeyValue,
          _setSelectedIndex = store.setSelectedIndex,
          _hasSelected = store.hasSelected,
          _getCellProps = store.getCellProps,
          setCellProps = store.setCellProps,
          _setCellValue = store.setCellValue,
          getCellValue = store.getCellValue,
          getPageInfo = store.getPageInfo,
          getCheckInfo = store.getCheckInfo,
          getActiveCell = store.getActiveCell,
          setActiveCell = store.setActiveCell;

      if (hideRightMenu) {
        cancelCustomRightMenu = true;
        high_selectable.enable = false;
        showWidthAndHeightConfig = false;
      } // 表格状态


      status = getTableProps('status'); // 多语

      langJson = getCache('langJson'); // console.log(langJson, 'langJsonlangJsonlangJsonlangJsonlangJson');
      // rowKey

      rowKey = getTableProps('rowKey'); // columns

      columns = getViewMeta(tableId) || columns;

      if (!columns || !columns.length) {
        return null;
      } // arrcolumns


      var arrColumns = store.getArrayMeta(tableId); // data

      var data = getData([EditTable_ROW_STATUS["delete"], EditTable_ROW_STATUS.filter]); // filterData

      var filterData = getViewData('filter'); // 

      var customColData = getCache('customColData'); // metaName

      var metaName = getStore(['meta', tableId, 'name']); // console.log(metaName, getCheckInfo());

      var backSort = store.getConfig().sort; // console.log(getTableProps('rowKey'))
      // 合计

      var isTotal = showTotal || getMetaIsTotal(arrColumns); // 列设置参数

      var colSettingParam = this.getColSettiongParam(); // sidebox

      var sideBoxConfig = getStore('sideBoxConfig') || {}; // focusInex

      focusIndex = focusIndex || getTableProps('focusIndex'); // 默认开启 框选 high_selectable.enable
      //high_selectable.enable = high_selectable.enable || true;
      // 默认启用快捷键选中 只有快捷键选中行

      if (isUndefined(high_selectable.enable)) {
        high_selectable.enable = true; // high_selectable.disabled = isUndefined(high_selectable.disabled) ? 'slide' :
        //     (isArray(high_selectable.disabled) ? high_selectable.disabled : [high_selectable.disabled]);
        // high_selectable.single = high_selectable.single || false;
        // // 不开启
        // high_selectable.selectCell = isUndefined(high_selectable.selectCell) ? false : high_selectable.selectCell;
      } // console.log(high_selectable);
      // 是否框选(批选)


      var isBatchSelect = isUndefined(high_selectable.selectCell) ? true : high_selectable.selectCell;
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "meta-table-wrapper edittable lightapp-component-editTable",
        "data-uuid": this.uuid // fieldid={getSysFieldid(`${fieldid || tableId}_table`)}
        // ref="table"

      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(EditTable_MetaTable, EditTable_extends({
        lazyload: lazyload,
        focusIndex: focusIndex,
        rowKey: rowKey,
        status: status,
        editType: editType,
        columns: columns,
        fieldid: fieldid,
        bodyDisplayInRow: isUndefined(multipleRowCell) ? this.state.isEllipsis : !multipleRowCell // 单元格是否多行显示
        ,
        data: data,
        store: store,
        isTotal: isTotal,
        getCellValue: getCellValue,
        showPagination: status !== 'edit' && showPagination,
        otherAreaHeight: showPagination && status !== 'edit' ? 42 + otherAreaHeight : otherAreaHeight,
        cardType: "edit",
        onCellHyperlinkTo: function onCellHyperlinkTo(record, attrcode, value) {
          _onCellHyperlinkTo && _onCellHyperlinkTo(record, attrcode, value, tableId);
        } //是否需要排序
        ,
        isSort: isSort,
        backSort: backSort,
        sortChange: function sortChange(sortParam, sortData) {
          return _this3.sortChange(sortParam, sortData);
        } //排序的回调
        ,
        setCellValue: function setCellValue(params) {
          var rowKey = params.rowKey,
              rowKeyValue = params.rowKeyValue,
              rowIndex = params.rowIndex,
              attrcode = params.attrcode,
              column = params.column,
              _params$value = params.value,
              value = _params$value === void 0 ? {} : _params$value,
              triggerType = params.triggerType; // 因为timepicker的value特殊，所以特殊转换一下start，有问题在看一下

          if (column.itemtype === 'timepicker') {
            if (value.value && value.value.format) {
              value.value = value.value.format('hh:mm:ss');
            }
          } // 适配多语 //这是最新适配的多语  也可以放在 setCellValue 里  TODO


          _setCellValue({
            rowKey: rowKey,
            rowKeyValue: rowKeyValue,
            rowIndex: rowIndex,
            attrcode: attrcode,
            value: value
          }); // 这里就是onChange 和 onBlur 的集合


          var next = EditTable_isFunction(onChange) && onChange(params) !== false;

          if (!next) {
            return;
          } // 数值类型的实时校验 TODO 需要找轩轩进行适配
          // let flag = isInputType
          //     ? item.itemtype !== 'number'
          //         ? foolValue.target
          //             ? foolValue.target.isFlag
          //             : false
          //         : false
          //     : false;
          // if (!flag && item.maxlength && isInputType && valueChange && foolValue) {
          //     if (!flag && valueChange.length > item.maxlength) {
          //         valueChange = rows[index].values[item.attrcode].value;
          //         toast({
          //             color: 'danger',
          //             title: `${json && json['table_tips']}`,
          //             // content: `${json && json['table_tips_content']}${item.maxlength / 2}${json && json['table_maxlength_unit']}`
          //             content: `${json && json['table_tips_content']}${item.maxlength}${json && json['table_maxlength_unit']}`
          //         });
          //         foolValue.target && foolValue.target.blur();
          //     }
          //     rows[index].values[item.attrcode].value = valueChange;
          // }
          // 老版的批改 TODO  分为多语和非多语两种情况
          // 处理单元格变化的数据zhnghengh
          // let theValue = handleChangeData(item.itemtype === 'refer', foolValue, valueChange, item);


          if (column.itemtype !== 'residtxt') {
            var isMulti = column.isMultiSelectedEnabled;
            store.setCache('oldBatchData', {
              // TODO  转换为过滤后的index
              // 在onchange时缓存列数据的key 和value  用于批量更改   zhanghengh 18/6/29
              batchChangeIndex: rowIndex,
              batchChangeKey: column.attrcode,
              batchChangeValue: value.value,
              batchChangeDisplay: value.display // batchChangeValue: isMulti ? theValue : theValue.value,
              // batchChangeDisplay: isMulti ? null : theValue.display

            });
          } else {
            // 多语批改
            store.setCache('oldBatchData', {
              batchChangeIndex: rowIndex,
              batchChangeKey: column.attrcode,
              batchChangeValue: value.value,
              batchChangeDisplay: null
            });
          } // 编辑关联项  放在 onAfterEvent 中
          // 把status置为1，标识修改     状态不为1的不动 (比如用户自己set但是状态为2的)


          var rowStatus = store.getRowProps({
            rowKeyValue: rowKeyValue
          }, 'status');

          if (rowStatus == EditTable_ROW_STATUS.origin) {
            store.setRowProps({
              rowKeyValue: rowKeyValue
            }, {
              status: EditTable_ROW_STATUS.edit
            });
          }
        },
        getCellProps: function getCellProps(_ref2) {
          var rowKey = _ref2.rowKey,
              rowKeyValue = _ref2.rowKeyValue,
              rowIndex = _ref2.rowIndex,
              attrcode = _ref2.attrcode;
          return _getCellProps({
            rowKey: rowKey,
            rowKeyValue: rowKeyValue,
            rowIndex: rowIndex,
            attrcode: attrcode
          });
        } // 给自动话用以及给底层cell快捷键等组件用
        ,
        name: tableId,
        tableId: tableId,
        onBeforeEvent: /*#__PURE__*/function () {
          var _ref3 = EditTable_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
            var record, rowKey, rowKeyValue, rowIndex, attrcode, column, _params$value2, value, event, triggerType, _column$languageMeta$, loginCode, loginIndex, loginValue;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    record = params.record, rowKey = params.rowKey, rowKeyValue = params.rowKeyValue, rowIndex = params.rowIndex, attrcode = params.attrcode, column = params.column, _params$value2 = params.value, value = _params$value2 === void 0 ? {} : _params$value2, event = params.event, triggerType = params.triggerType; // 用于解决点击前赋值不上的问题

                    setTableProps("currentIndex", getTrueRowIndex({
                      rowIndex: rowIndex
                    }), false);
                    setTableProps("currentInfo", {
                      record: record,
                      index: rowIndex
                    }, false); // 检验输入字符长度

                    if (triggerType === 'onFocus' && column.maxlength) {
                      event.target.isFlag = false;
                      event.target.addEventListener('compositionstart', function (e) {
                        e.target.isFlag = true;
                      }, false);
                      event.target.addEventListener('compositionend', function (e) {
                        e.target.isFlag = false;
                        var flag = e.target.isFlag;
                        var val = e.target.defaultValue; // if (!flag && val.length > item.maxlength) {
                        //     // val = val.substring(0, count);
                        //     val = val.substring(0, item.maxlength);
                        //     rows[index].values[item.attrcode].value = val;
                        //     toast({
                        //         color: 'danger',
                        //         title: `${json && json['table_tips']}`,
                        //         // content: `${json && json['table_tips_content']}${item.maxlength / 2}${json && json['table_maxlength_unit']}`
                        //         content: `${json && json['table_tips_content']}${item.maxlength}${json && json['table_maxlength_unit']}`
                        //     });
                        //     e.target && e.target.blur();
                        // }
                      }, false); // TODO this.setState({ table: this.state.table });
                    } // 多语控件都不走这里


                    if (column.itemtype !== 'residtxt') {
                      // onFocus 和value  用于批量更改   zhanghengh 18/6/29 先注释，以后可能有用
                      store.setCache('oldBatchData', {
                        // TODO  转换为过滤后的index
                        // 在onchange时缓存列数据的key 和value  用于批量更改   zhanghengh 18/6/29
                        batchChangeIndex: rowIndex,
                        batchChangeKey: column.attrcode,
                        batchChangeValue: value.value,
                        batchChangeDisplay: value.display // batchChangeValue: isMulti ? theValue : theValue.value,
                        // batchChangeDisplay: isMulti ? null : theValue.display

                      });
                    } else {
                      // 这里批改多语存值可能没用，之后在看一下，先留着
                      // 多语批改
                      // 这里是多语文本的编辑显示逻辑
                      // attrcode字段对应的value是主语言
                      // 显示规则是有登陆语言显示登陆语言，登陆语言通过getLangCode获得，没有登陆语言显示主语言，attrcode字段对应的value，主语言语言在没有，就什么也不显示
                      // index为1比较特殊 取value[attrcode]
                      loginCode = Object(api_index_["getLangCode"])(), loginIndex = ((_column$languageMeta$ = column.languageMeta.find(function (e) {
                        return e.languageCode === loginCode;
                      })) === null || _column$languageMeta$ === void 0 ? void 0 : _column$languageMeta$.index) || '', loginValue = value[attrcode + loginIndex] || value[attrcode] || value;
                      store.setCache('oldBatchData', {
                        batchChangeIndex: rowIndex,
                        batchChangeKey: column.attrcode,
                        batchChangeValue: loginValue.value,
                        batchChangeDisplay: null
                      });
                    } // 有一些操作要放在这里处理 设置行状态等等


                    if (!EditTable_isFunction(onBeforeEvent)) {
                      _context.next = 10;
                      break;
                    }

                    _context.next = 8;
                    return onBeforeEvent(params);

                  case 8:
                    _context.t0 = _context.sent;
                    return _context.abrupt("return", _context.t0 !== false);

                  case 10:
                    return _context.abrupt("return", true);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref3.apply(this, arguments);
          };
        }(),
        onAfterEvent: function onAfterEvent(params) {
          var record = params.record,
              rowKey = params.rowKey,
              rowKeyValue = params.rowKeyValue,
              rowIndex = params.rowIndex,
              attrcode = params.attrcode,
              column = params.column,
              _params$value3 = params.value,
              value = _params$value3 === void 0 ? {} : _params$value3,
              _params$oldValue = params.oldValue,
              oldValue = _params$oldValue === void 0 ? {} : _params$oldValue,
              componentValue = params.componentValue,
              event = params.event,
              _params$triggerType = params.triggerType,
              triggerType = _params$triggerType === void 0 ? 'onChange' : _params$triggerType,
              _params$isTriggerModa = params.isTriggerModal,
              isTriggerModal = _params$isTriggerModa === void 0 ? false : _params$isTriggerModa; // console.log('onAfterEvent trigger')
          // 多语 获取当前的code

          if (column.itemtype === 'residtxt' && EditTable_isObject(componentValue)) {
            for (var key in componentValue) {
              if (componentValue[key].current) {// value.value = componentValue[key];
                // oldValue.value = store.getRowOldValue(record[rowKey], key);
              }
            }
          } // 新旧值


          oldValue.value = oldValue.value || store.getRowOldValue(record[rowKey], attrcode);

          if (triggerType === 'onBlur') {
            /*
            * onBlur编辑后 和 切换控件状态
            * 1、input类型    line   编辑后 + 切状态
            *                model  编辑后
            * 2、uninput类型  line   切状态
            *                model  无编辑后  无切状态
            */
            // 这一段可以考虑去除  输入 类型
            if (isString(value.value)) {
              value.value = value.value.trim();
            } // 当数值类型只输入一个'-'的时候就将它赋值成0


            if (column.itemtype === 'number' && value.value === '-') {
              value.value = 0;
              store.setCellValue({
                rowKeyValue: rowKeyValue,
                attrcode: attrcode,
                value: value
              });
            } // 侧拉里面的状态


            if (column.itemtype === 'select' && isTriggerModal) {
              store.setCellProps(rowKeyValue, attrcode, {
                open: false
              });
            }

            if (column.itemtype === 'residtxt') {
              var _record$values$attrco;

              if (isTriggerModal) {// 当侧拉的情况下
                // 多语  登陆语言值 赋值给主语言
                // tableModeldata.values[item.attrcode] = {
                //     ...tableModeldata.values[item.attrcode],
                //     value: val[item.attrcode].value
                // };
              } else {// 当表体的情况下
                } // 多语  登陆语言值 赋值给主语言
              // 主语言没值时，取登录语言的值


              if (!((_record$values$attrco = record.values[attrcode]) !== null && _record$values$attrco !== void 0 && _record$values$attrco.value)) {
                var _column$languageMeta$2;

                var loginCode = Object(api_index_["getLangCode"])(),
                    loginIndex = ((_column$languageMeta$2 = column.languageMeta.find(function (e) {
                  return e.languageCode === loginCode;
                })) === null || _column$languageMeta$2 === void 0 ? void 0 : _column$languageMeta$2.index) || '',
                    loginValue = componentValue[attrcode + loginIndex] || componentValue[attrcode];

                _setCellValue({
                  rowKey: rowKey,
                  rowKeyValue: rowKeyValue,
                  rowIndex: rowIndex,
                  attrcode: attrcode,
                  value: loginValue
                });
              }
            } // 多语控件都不走这里


            if (column.itemtype !== 'residtxt') {// 在onblur时缓存列数据的key 和value  用于批量更改   zhanghengh 18/6/29
              // pageScope.batchData[moduleId] = {
              //     batchChangeIndex: outputIndex,
              //     batchChangeKey: item.attrcode,
              //     batchChangeValue: record.values[item.attrcode] ? record.values[item.attrcode].value : '',
              //     batchChangeDisplay: record.values[item.attrcode] ? record.values[item.attrcode].display : ''
              // };
            } else {// 多语批改
                // 这里是多语文本的编辑显示逻辑
                // attrcode字段对应的value是主语言
                // 显示规则是有登陆语言显示登陆语言，登陆语言通过getLangCode获得，没有登陆语言显示主语言，attrcode字段对应的value，主语言语言在没有，就什么也不显示
                // const cellData = record.values[item.attrcode];
                // let value = isObj(cellData) ? (cellData.value ? cellData.value : null) : null;
                // const LangCode = getLangCode();
                // const loginLang = item.languageMeta.filter(i => i.languageCode == LangCode);
                // if (loginLang.length > 0) {
                //     loginLang[0].index === '1' ? (loginLang[0].index = '') : '';
                //     if (
                //         record.values[item.attrcode + loginLang[0].index] &&
                //         record.values[item.attrcode + loginLang[0].index].value
                //     ) {
                //         value = record.values[item.attrcode + loginLang[0].index].value;
                //     }
                // }
                // pageScope.batchData[moduleId] = {
                //     batchChangeIndex: outputIndex,
                //     batchChangeKey: item.attrcode,
                //     batchChangeValue: value,
                //     batchChangeDisplay: null
                // };
              }
          } // 设置状态  放在  onAfterEvent 事件之前 避免onAfterEvent 修改record报错


          store.setCellProps(rowKeyValue, attrcode, {
            isEdit: false
          }); // 有一些操作要放在这里处理 设置行状态等等

          var next = EditTable_isFunction(_onAfterEvent) && _onAfterEvent(params) !== false; // 多语 获取当前的code

          if (column.itemtype === 'residtxt' && EditTable_isObject(componentValue)) {
            for (var _key in componentValue) {
              store.saveRowOldValue(record[rowKey], _key, componentValue[_key].value);
            }
          } else {
            store.saveRowOldValue(record[rowKey], attrcode, value.value);
          }

          if (!next) {
            console.log('not next to run');
            return false;
          }
          /**
           * 自动增行
           * 增一行的条件：
           * 1、最后一行
           * 2、isAddRow 为true
           * 3、当前单元格值不为空
           */


          var viewLen = store.getVisibleRows(false, true).length;
          var isSwitch_browseDisabled = column.itemtype === 'switch_browse' && column.disabled; // 开关且不可编辑

          var validValue = column.itemtype === 'residtxt' ? value : value.value;
          validValue = column.itemtype === 'refer' ? componentValue : value;
          var isEmpty = isEmptyValue(validValue, column.itemtype);
          var tableStatus = getTableProps('status');

          if (viewLen == rowIndex + 1 && autoAddRow.enabled && !isSwitch_browseDisabled && !isEmpty && tableStatus === 'edit') {
            // 添加自动增行后的回调
            store.addTableRow(undefined, autoAddRow.defaultValue, true, {
              callback: autoAddRow.callback,
              isAutoAddRow: true
            });
          }
        } // 点击单元格，单元格的浏览态编辑态切换时的回调
        ,
        onCellStatusChange: function onCellStatusChange(params) {
          var isEdit = params.isEdit,
              column = params.column;

          if (isEdit) {
            setActiveCell(params);
          } else {
            var cell = getActiveCell();

            if (cell) {
              var _cell$oldColumn = cell.oldColumn,
                  oldColumn = _cell$oldColumn === void 0 ? {} : _cell$oldColumn;

              if (column.attrcode === oldColumn.attrcode) {
                setActiveCell(null);
              }
            }
          }
        },
        onCellMouseDown: function onCellMouseDown(record, rowIndex, attrcode, column) {
          var booleanType = ['switch', 'checkbox_switch'];

          if (status === 'edit' && booleanType.includes(attrcode)) {
            var params = {
              column: column,
              rowIndex: rowIndex,
              attrcode: attrcode
            };
            setActiveCell(params);
          }
        },
        rowClassName: function rowClassName(record, current) {
          var currentCls = [];

          if (EditTable_isArray(_rowClassName)) {
            currentCls = _rowClassName.filter(function (item) {
              if (!EditTable_isArray(item.index)) {
                item.index = [item.index];
              }

              return item.index.includes(current);
            });
            _rowClassName = currentCls.reduce(function (total, item) {
              return total + ' ' + item.className;
            }, '');
          } // console.log(currentCls);


          return EditTable_isFunction(_rowClassName) ? _rowClassName(record, current) : _rowClassName;
        },
        hasSelected: function hasSelected(_ref4) {
          var rowKey = _ref4.rowKey,
              rowKeyValue = _ref4.rowKeyValue,
              rowIndex = _ref4.rowIndex;
          return _hasSelected(rowKeyValue);
        },
        setSelectedIndex: function setSelectedIndex(_ref5, e) {
          var record = _ref5.record,
              rowKey = _ref5.rowKey,
              rowIndex = _ref5.rowIndex;

          // 为了避免和新开发的行框选点选区域选事件冲突
          if (high_selectable && high_selectable.enable && e && (e.ctrlKey || e.shiftKey || e.metaKey)) {
            return;
          }

          var rowKeyValue = record[rowKey];
          var values = record.values || record; // 错误行禁用

          if (values && values.saga_status && values.saga_status.value === '1') {
            return;
          } //点击行即勾选复选框


          if (status !== 'edit' && showCheck && !record.disabled) {
            _this3.onCheckChange(record, rowIndex, true);
          } else {
            var isSelected = _hasSelected(rowKeyValue);

            !isSelected && _setSelectedIndex([], 'clear', false);
            !isSelected && _setSelectedIndex([{
              rowKey: rowKey,
              rowKeyValue: rowKeyValue,
              rowIndex: rowIndex,
              pattern: 'add'
            }]);
          }
        },
        pageInfo: getPageInfo(),
        pageInfoChange: this.pageInfoChange,
        onRowClick: function onRowClick(record, index, e) {
          // 为了避免和新开发的行框选点选区域选事件冲突
          if (high_selectable && high_selectable.enable && e && (e.ctrlKey || e.shiftKey || e.metaKey)) {
            return;
          } // 错误行禁用


          var values = record.values || record;

          if (!values || !values.saga_status || values.saga_status.value !== "1") {
            setTableProps("currentIndex", getTrueRowIndex({
              rowIndex: index
            }), false);
            setTableProps("currentInfo", {
              record: record,
              index: index
            }, false);
          } // console.log(store);


          EditTable_isFunction(_onRowClick) && _onRowClick(record, index, e);
        },
        onRowDoubleClick: function onRowDoubleClick(record, index, e) {
          // 兼容筛选
          // let outputIndex = index;
          // this.filterAllData && (outputIndex = this.filterAllData.findIndex(row => row.rowid === record.rowid));
          // 错误行禁用
          var values = record.values || record;

          if (!values || !values.saga_status || values.saga_status.value !== "1") {
            setTableProps("currentIndex", getTrueRowIndex({
              rowIndex: index
            }), false);
            setTableProps("currentInfo", {
              record: record,
              index: index
            }, false);
          } // 行双击的方法 判断配置文件是否有，并且config.onRowDoubleClick是否是函数  zhanghengh 18/5/8


          EditTable_isFunction(_onRowDoubleClick) && _onRowDoubleClick(record, index, e);
        },
        checkColConfig: {
          showCheck: isUndefined(hideBrowseCheckbox) ? showCheck : status === 'browse' ? !hideBrowseCheckbox : showCheck,
          crossPageSelect: crossPageSelect,
          changeCrossSelect: this.changeCrossSelect,
          langJson: langJson
        },
        totalConfig: {
          showTotal: showTotal,
          noTotalRows: noTotalRows,
          noTotalCol: noTotalCol,
          allowTotalRows: allowTotalRows,
          numberPd: 7
        },
        indexColConfig: {
          showIndex: showIndex || false,
          langJson: langJson
        },
        onAllCheckChange: function onAllCheckChange(value) {
          return _this3.onAllCheckChange(value);
        },
        onCheckChange: function onCheckChange(record, index) {
          return _this3.onCheckChange(record, index);
        },
        checkInfo: getCheckInfo(),
        langJson: langJson,
        high_filter: EditTable_objectSpread({
          alloweFilter: true,
          langJson: langJson,
          panelTitle: metaName || '',
          filterData: filterData,
          customColData: customColData,
          rowKey: rowKey,
          isReset: store.getStore('filterReset'),
          arrColumns: arrColumns,
          handleFilterCallBack: function handleFilterCallBack() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var filteredRow = params.filteredRow,
                filteredRowKeyValues = params.filteredRowKeyValues,
                _params$columnStatus = params.columnStatus,
                columnStatus = _params$columnStatus === void 0 ? {} : _params$columnStatus,
                filterItemList = params.filterItemList,
                afterFilterItemList = params.afterFilterItemList,
                afterFilterFactors = params.afterFilterFactors; // console.log(params);
            // 更新重置状态

            store.setStore('filterReset', false, false); // 设置列状态  设置表格筛选图标

            store.setColumn(tableId, columnStatus, false); // 设置行状态

            var data = store.getData() || [];
            data.forEach(function (row) {
              if (filteredRowKeyValues.includes(row[rowKey])) {
                row.filter = false;
              } else {
                row.filter = true;
              }
            }); // 处理已选等逻辑

            var checkInfo = store.getCheckInfo();

            if (filteredRow && filteredRow.length) {
              checkInfo.indeterminate = filteredRow.some(function (item) {
                var values = item.values || item;
                var unSaga = !values['saga_status'] || values['saga_status'].value !== '1';
                return unSaga && item.selected;
              });
              checkInfo.checkedAll = filteredRow.every(function (item) {
                var values = item.values || item;
                var unSaga = !values['saga_status'] || values['saga_status'].value !== '1';
                return !unSaga || item.selected;
              });
            }

            store.setStore(["checkInfo"], checkInfo, false); // 更新 所有的更新放到弹窗关闭(onHide)时

            store.setData({
              data: data,
              shouldForceUpdate: false
            });
            _handleFilterCallBack && _handleFilterCallBack();
          },
          handleResetCallBack: function handleResetCallBack(params) {
            var filterItemList = params.filterItemList,
                columnStatus = params.columnStatus; // 更新重置状态

            store.setStore('filterReset', false, false); // 设置行状态

            var data = store.getData() || [];
            data.forEach(function (row) {
              row.filter = false;
              delete row.filterIndex;
            }); // 处理已选等逻辑

            var checkInfo = store.getCheckInfo();
            var viewData = store.getViewData();

            if (viewData && viewData.length) {
              checkInfo.indeterminate = viewData.some(function (item) {
                var values = item.values || item;
                var unSaga = !values['saga_status'] || values['saga_status'].value !== '1';
                return unSaga && item.selected;
              });
              checkInfo.checkedAll = viewData.every(function (item) {
                var values = item.values || item;
                var unSaga = !values['saga_status'] || values['saga_status'].value !== '1';
                return !unSaga || item.selected;
              });
            }

            store.setStore(["checkInfo"], checkInfo, false); // 更新 所有的更新放到弹窗关闭(onHide)时

            store.setData({
              data: data,
              shouldForceUpdate: false
            }); // 列状态

            store.setColumn(tableId, columnStatus, false);
            _handleResetCallBack && _handleResetCallBack();
          },
          onHide: function onHide(params) {
            var filterItemList = params.filterItemList,
                columnStatus = params.columnStatus;
            store.setColumn(tableId, columnStatus, true); // console.log(params);
          }
        }, high_filter),
        high_selectable: EditTable_objectSpread({
          store: store,
          onSelect: function onSelect() {
            var activedCells = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var activeSpecialCells = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var hotkey = arguments.length > 2 ? arguments[2] : undefined;

            var _ref6 = arguments.length > 3 ? arguments[3] : undefined,
                current = _ref6.current,
                isBatch = _ref6.isBatch;

            // console.log(activedCells, hotkey, current);
            var pervActivedCells = store.getCache('activedCells') || {};

            for (var rowKeyValue in activedCells) {
              pervActivedCells[rowKeyValue] = pervActivedCells[rowKeyValue] || [];

              var _iterator = _createForOfIteratorHelper(activedCells[rowKeyValue]),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var attrcode = _step.value;
                  pervActivedCells[rowKeyValue].push(attrcode); // 解决批改时边线样式不对的问题

                  isBatchSelect && store.setCellProps(rowKeyValue, attrcode, {
                    showDrag: false,
                    actived: true,
                    leftLine: false,
                    rightLine: false,
                    topLine: false,
                    bottomLine: false
                  }, false);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } // 重新赋值


            activedCells = pervActivedCells;

            if (isBatch) {
              var rows = [];

              for (var _rowKeyValue in activedCells) {
                var _data2 = getStore('data'); // TODO


                activedCells[_rowKeyValue].length > 0 && rows.push(_data2.query(_rowKeyValue));
              }

              if (onBatchSelected) {
                _this3.onBatchSelected(rows, hotkey);
              } else {
                _setSelectedIndex([], 'clear', false);

                rows.forEach(function (row) {
                  var rowKeyValue = row[rowKey];
                  var values = row.values || row,
                      isSagaStatus = values && values.saga_status && values.saga_status.value === '1'; // 错误行禁用

                  if (isSagaStatus && row.disabled) {
                    return;
                  }

                  var isSelected = _hasSelected(rowKeyValue);

                  !isSelected && _setSelectedIndex([{
                    rowKey: rowKey,
                    rowKeyValue: rowKeyValue,
                    pattern: 'add'
                  }], 'add', false);
                });
              }
            }

            hotkey === 'down' && current && current.rowKeyValue && status == 'edit' && store.setCellProps(current.rowKeyValue, current.attrcode, {
              showDrag: true
            }, false); // 缓存已选

            store.setCache('activedCells', activedCells);
            store.setCache('activedCell', current); // 没有选中单元格

            if (!isBatchSelect) {
              store.refresh();
              return;
            } // 选中表头


            var oldActiveSpecialCells = store.getCache('activeSpecialCells') || [];

            if (activeSpecialCells.length > 0 || activeSpecialCells.length === 0 && oldActiveSpecialCells.length !== 0) {
              oldActiveSpecialCells.forEach(function (item) {
                // 不能用actived 会有冲突
                store.setColumn(tableId, EditTable_defineProperty({}, item.attrcode, {
                  unitActive: false
                }), false);
              });
              activeSpecialCells.forEach(function (item) {
                // 不能用actived 会有冲突
                store.setColumn(tableId, EditTable_defineProperty({}, item.attrcode, {
                  unitActive: true
                }), false);
              });
              store.setCache('activeSpecialCells', activeSpecialCells); // console.log(store.getCache('activeSpecialCells'), 'sssssssssssactiveSpecialCells');
            } // 修正边框


            if (activedCells || activeSpecialCells) {
              var arrayMeta = store.getArrayMeta(tableId, true),
                  arrayMetaLen = arrayMeta.length;
              var viewData = store.getViewData('filter');
              var linkObjMeta = arrayMeta.reduce(function (result, item, i, arr) {
                var next = arr[i + 1] || {};
                var prev = arr[i - 1] || {};

                if (item.visible) {
                  result[item.attrcode] = {
                    prev: prev.attrcode,
                    current: item.attrcode,
                    next: next.attrcode
                  };
                }

                return result;
              }, {});
              viewData.forEach(function (row, i) {
                var values = row.values;
                var prevRowValues = (viewData[i - 1] || {}).values || {};
                var nextRowValues = (viewData[i + 1] || {}).values || {};

                for (var _attrcode in values) {
                  var cell = values[_attrcode];

                  if (cell['actived']) {
                    var prevCol = linkObjMeta[_attrcode] && linkObjMeta[_attrcode].prev;
                    var nextCol = linkObjMeta[_attrcode] && linkObjMeta[_attrcode].next;
                    cell['leftLine'] = !prevCol || !values[prevCol] || !values[prevCol]['actived'];
                    cell['rightLine'] = !nextCol || !values[nextCol] || !values[nextCol]['actived'];
                    cell['topLine'] = prevRowValues && (!prevRowValues[_attrcode] || !prevRowValues[_attrcode]['actived']);
                    cell['bottomLine'] = nextRowValues && (!nextRowValues[_attrcode] || !nextRowValues[_attrcode]['actived']);
                  }
                }
              }); // console.log(linkObjMeta, viewData);
            } // 更新表格


            store.refresh();
          },
          onDeSelect: function onDeSelect(deActiveCells, hotkey) {
            var prevActiveCells = store.getCache('activedCells') || {};
            var prevActiveCellsObj = {};
            var prevActiveCellsArr = {}; // 转对象

            for (var rowKeyValue in prevActiveCells) {
              prevActiveCellsObj[rowKeyValue] = {};

              var _iterator2 = _createForOfIteratorHelper(prevActiveCells[rowKeyValue]),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var attrcode = _step2.value;
                  prevActiveCellsObj[rowKeyValue][attrcode] = true;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            } // 清理数据


            for (var _rowKeyValue2 in deActiveCells) {
              var _iterator3 = _createForOfIteratorHelper(deActiveCells[_rowKeyValue2]),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _attrcode2 = _step3.value;

                  if (prevActiveCellsObj[_rowKeyValue2][_attrcode2]) {
                    delete prevActiveCellsObj[_rowKeyValue2][_attrcode2]; // setCellProps(rowKeyValue, attrcode, { showDrag: false }, false);

                    setCellProps(_rowKeyValue2, _attrcode2, {
                      actived: false,
                      leftLine: false,
                      rightLine: false,
                      topLine: false,
                      bottomLine: false
                    }, false);
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            } // 转数组


            for (var _rowKeyValue3 in prevActiveCellsObj) {
              prevActiveCellsArr[_rowKeyValue3] = [];

              for (var _attrcode3 in prevActiveCellsObj[_rowKeyValue3]) {
                prevActiveCellsArr[_rowKeyValue3].push(_attrcode3);
              }
            } // 重新赋值


            store.setCache('activedCells', prevActiveCellsArr);
          },
          getPrevSelector: function getPrevSelector(key) {
            var activedCells = store.getCache('activedCells') || {},
                prevSelector = {};

            var _loop = function _loop(rowKeyValue) {
              (activedCells[rowKeyValue] || []).forEach(function (attrcode) {
                prevSelector["".concat(rowKeyValue, "@").concat(attrcode)] = true;
              });
            };

            for (var rowKeyValue in activedCells) {
              _loop(rowKeyValue);
            } // console.log(activedCells, prevSelector, 'prevSelector');


            return prevSelector;
          },
          onClearData: function onClearData() {
            var shouldForceUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var hotkey = arguments.length > 1 ? arguments[1] : undefined;
            store.setCache('activedCells', {});
            store.setCache('activeSpecialCells', []); // 没有选中单元格

            if (!isBatchSelect) {
              return;
            } // 这个方法说不定比较频繁 后面优化下
            // let activedCells = store.getCache('activedCells') || {};
            // let activedCell = store.getCache('activedCell');


            var data = store.getData() || [];
            var rowKey = store.getTableProps('rowKey');
            data.forEach(function (row) {
              var values = row.values || row || {};
              var rowKeyValue = row[rowKey];

              for (var attrcode in values) {
                values[attrcode].showDrag && setCellProps(rowKeyValue, attrcode, {
                  showDrag: false
                }, false);
                values[attrcode].actived && setCellProps(rowKeyValue, attrcode, {
                  actived: false,
                  leftLine: false,
                  rightLine: false,
                  topLine: false,
                  bottomLine: false
                }, false);
              }
            });
            var columns = store.getArrayMeta(tableId, false) || [];
            columns.forEach(function (item) {
              item.unitActive && store.setColumn(tableId, EditTable_defineProperty({}, item.attrcode, {
                unitActive: false
              }), false);
            });
            shouldForceUpdate && store.refresh();
          },
          arrColumns: store.getArrayMeta(tableId, false),
          data: data,
          rowKey: rowKey,
          onBatchChange: function onBatchChange() {
            var activeCell = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var activeCells = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            // 没有选中单元格
            if (!isBatchSelect) {
              return;
            } // activeCell = {}, activeCells = {}
            // 开始  批改以下所有


            activeCell = EditTable_objectSpread(EditTable_objectSpread({}, activeCell), {}, {
              rowIndex: store.getTrueRowIndex({
                rowKeyValue: activeCell.rowKeyValue
              }),
              attrcode: activeCell.attrcode,
              column: store.getColumn(tableId, activeCell.attrcode)
            });
            setCellProps(activeCell.rowKeyValue, activeCell.attrcode, {
              showDrag: false
            }, true); // 表格数据  是否包含删除的数据 这里要斟酌下
            // let rows = store.getViewData('filter');

            var rows = store.getData();
            var pasteContent = [];
            var activeCellValue = getCellValue({
              rowKeyValue: activeCell.rowKeyValue,
              attrcode: activeCell.attrcode
            }) || {};

            for (var rowKeyValue in activeCells) {
              var attrcode = activeCells[rowKeyValue][0]; // 做过一次radio和checkkbox转换为select 这里可能会有问题 TODO测试

              var isDisplay = activeCell.column.itemtype === 'refer' && activeCell.column.fieldDisplayed === 'refname' || activeCell.column.itemtype === 'select';
              attrcode && pasteContent.push(isDisplay ? activeCellValue.display : activeCellValue.value);
            }

            console.log('onBatchChange trigger', activeCell, activeCells);
            var param = {
              pasteContent: pasteContent,
              activeCell: activeCell,
              langJson: langJson,
              rows: rows,
              getRowOldValue: store.getRowOldValue,
              tableId: tableId
            };
            var data = excelPackageData(param);
            _onBatchChange && _onBatchChange(data);
          },
          isBatchSelect: isBatchSelect
        }, high_selectable),
        high_sidebox: {
          langJson: langJson,
          arrColumns: arrColumns,
          tableId: tableId,
          fieldid: fieldid,
          onCloseModel: onCloseModel,
          tableModelConfirm: tableModelConfirm,
          store: store,
          sideBoxConfig: sideBoxConfig
        },
        high_hotkey: {
          tableId: tableId,
          store: store,
          enable: true
        },
        excelConfig: {
          tableId: tableId,
          onBatchChange: _onBatchChange,
          langJson: langJson
        } //折行回调
        ,
        foldingRowChange: function foldingRowChange(isEllipsis) {
          _this3.setState({
            isEllipsis: isEllipsis
          });
        },
        foldCacheId: foldCacheId //对于没有appcode，pagecode..的表格，做折行缓存的标志
        //右键菜单配置参数
        ,
        contextMenuConfig: {
          enable: isBatchSelect,
          status: status,
          contextMenuClick: this.contextMenuClick,
          showBusinessBtn: EditTable_isFunction(rightMenuClick),
          showPasteBtn: EditTable_isFunction(_onBatchChange),
          langJson: langJson
        } //滚动条悬浮
        ,
        autoAffixScroll: true //——————————操作列————————————
        ,
        colsSettingParam: colSettingParam,
        cancelCustomRightMenu: cancelCustomRightMenu,
        showWidthAndHeightConfig: showWidthAndHeightConfig,
        updateColumnHandle: this.updateColumnAfterSetting,
        key: this.state.key //——————————操作列end————————————
        //空白列
        ,
        addBlankCol: addBlankCol
      }, others)));
    }
  }]);

  return EditTable;
}(template_index_["BaseComponent"]);


EditTable_EditTable.displayName = 'EditTable';
EditTable_EditTable.useEditTable = EditTable_store;

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__24__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ })

/******/ });
});