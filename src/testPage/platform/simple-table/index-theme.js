(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("@platform/table-core/index"), require("@platform/template/index"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@platform/api/index", "@platform/base/index", "@platform/table-core/index", "@platform/template/index"], factory);
	else if(typeof exports === 'object')
		exports["@platform/simple-table/index"] = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("@platform/table-core/index"), require("@platform/template/index"));
	else
		root["@platform/simple-table/index"] = factory(root["React"], root["@platform/api/index"], root["@platform/base/index"], root["@platform/table-core/index"], root["@platform/template/index"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__12__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1923);
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

/***/ 1891:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","var":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(0);
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_);

// EXTERNAL MODULE: external "@platform/template/index"
var index_ = __webpack_require__(12);

// EXTERNAL MODULE: external "@platform/api/index"
var api_index_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@platform/table-core/index"
var table_core_index_ = __webpack_require__(7);

// CONCATENATED MODULE: ./src/platform/components/Table/appTable/SimpleTable/store.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

//1排序 2筛选 3checkbox



var isArray = table_core_index_["utils"].isArray,
    isString = table_core_index_["utils"].isString,
    isObject = table_core_index_["utils"].isObject,
    isUndefined = table_core_index_["utils"].isUndefined,
    isNullOrVoid = table_core_index_["utils"].isNullOrVoid,
    getPageSizeStorage = table_core_index_["utils"].getPageSizeStorage; // 表格数据

function TableData(data) {
  var keyPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rowid';
  return new index_["ArrayData"](data, keyPath);
} // 表格模板

function TableMeta(data) {
  var keyPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'attrcode';

  for (var _i = 0, _Object$keys = Object.keys(data); _i < _Object$keys.length; _i++) {
    var areacode = _Object$keys[_i];

    if (isObject(data[areacode]) && isArray(data[areacode].items) && data[areacode].moduletype === 'table') {
      data[areacode].items = new index_["TreeData"](data[areacode].items, keyPath);
    }
  }

  return data;
}

var store_simpleTableStore = /*#__PURE__*/function (_BaseStore) {
  _inherits(simpleTableStore, _BaseStore);

  var _super = _createSuper(simpleTableStore);

  function simpleTableStore() {
    var _thisSuper, _thisSuper2, _this;

    _classCallCheck(this, simpleTableStore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.store = {
      meta: {},
      // 表格模板   
      // store.rows = []// 数据
      rows: [],
      // 数据
      // 表格属性
      props: {
        status: 'browse',
        focusIndex: '-1',
        // （用于跳转）
        rowKey: 'rowId',
        // 当前正在操作的行
        currentIndex: -1,
        currentInfo: null // （选中行）

      },
      pageInfo: {
        // 分页信息
        //pageSize: 0,
        pageIndex: 1,
        total: 0,
        totalPage: 1
      },
      allpks: [],
      alltss: [],
      checkInfo: {
        checkedAll: false,
        //当前页全选标志
        indeterminate: false,
        //半选标志
        selectIndex: new Set(),
        //选中行
        disabledAll: false,
        checkedAllpage: false,
        //所有页全选
        crossPageSelectIndex: new Set()
      },
      modelDatas: {
        //编辑模态框的相关数据
        modelColumn: [],
        record: {},
        index: null,
        rowId: null,
        operType: 'add',
        // 编辑框类型‘add’或者‘edit’
        showModal: false //是否打开编辑框

      },
      sortParam: undefined,
      //存储新的排序信息
      config: {} //业务组传进来的config

    };
    _this.cache = {
      base: null,
      // 不同情况的初始数据
      beforeEdit: null,
      //侧拉展开之前的数据（）
      all: null,
      //初始表格的全数据
      // 进行深度删除后的数据，作为删除后的操作的初始数据 为了在浏览态删除后，编辑态取消不会将删除的数据在显示出来
      afterDel: null,
      // 行的旧值 为数组 既可以存对象 也可以存索引
      oldRows: [],
      // 列初始值
      colInitialValue: {},
      // 多语
      langJson: {},
      // 批改
      oldBatchData: null
    };

    _this.getHooks = function () {
      return {
        getStore: _this.getStore,
        setStore: _this.setStore,
        setData: _this.setData,
        getData: _this.getData,
        getFilterData: _this.getFilterData,
        setRows: _this.setRows,
        getRows: _this.getRows,
        setMeta: _this.setMeta,
        getMeta: _this.getMeta,
        getArrayMeta: _this.getArrayMeta,
        setCellProps: _this.setCellProps,
        setColumn: _this.setColumn,
        setSelect: _this.setSelect,
        openModal: _this.openModal,
        closeModal: _this.closeModal,
        setTableProps: _this.setTableProps,
        getTableProps: _this.getTableProps,
        showColumn: _this.showColumn,
        deleteTableRows: _this.deleteTableRows,
        addTableRows: _this.addTableRows,
        setCellValue: _this.setCellValue,
        setCache: _this.setCache,
        getCache: _this.getCache,
        clearSortStatus: _this.clearSortStatus,
        resetFilter: _this.resetFilter,
        // 内部使用方法
        getClickedRow: _this.getClickedRow,
        setClickedRow: _this.setClickedRow,
        setModalValue: _this.setModalValue,
        getConfig: _this.getConfig,
        setConfig: _this.setConfig,
        setCrossPage: _this.setCrossPage
      };
    };

    _this.resetFilter = function (tableId) {
      var shouldForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      tableId = tableId || _this.getStore("name");

      if (!tableId) {
        return console.warn('invalid resetFilter tableId note find');
      }

      var arrColumns = _this.getArrayMeta(tableId, true);

      var columnStatus = []; // 设置表格筛选图标, 重置时将筛选图标全部清空

      arrColumns.forEach(function (column) {
        columnStatus.push(column.attrcode);
      }); // 设置行状态

      var data = _this.getData() || [];
      data.forEach(function (row) {
        row.filter = false;
        delete row.filterIndex;
      }); // 处理已选等逻辑

      var checkInfo = _this.getStore('checkInfo');

      var viewData = data;

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

      _this.setStore(["checkInfo"], checkInfo, false); // 更新 所有的更新放到弹窗关闭(onHide)时


      _this.setData(data, false); // 列状态


      _this.setColumn(tableId, columnStatus, {
        filterStatus: ''
      }, shouldForceUpdate);
    };

    _this.setCellProps = function (rowKeyValue, attrcode) {
      var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var shouldForceUpdate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var pattern = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'merge';

      if (isUndefined(rowKeyValue) || rowKeyValue === -1) {
        console.log('invalid params');
        return;
      } // get(this.valueGraph, [rowKeyValue, attrcode]).forceUpdate();


      var data = _this.getData();

      var row = data.update(rowKeyValue, function (oldRow) {
        var props = (oldRow['values'] || {})[attrcode] || {};

        if (pattern == 'merge') {
          value = _objectSpread(_objectSpread({}, props), value);
        }

        oldRow["values"] = oldRow["values"] || {};
        oldRow["values"][attrcode] = value;
        return oldRow;
      });
      shouldForceUpdate && _this.forceUpdate(); // 这里需要优化
      // shouldForceUpdate && this.updateItem([rowKeyValue, attrcode]);

      return row;
    };

    _this.getTableProps = function (key) {
      var props = _this.getStore(['props', key]);

      return props;
    };

    _this.setTableProps = function (key, value) {
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      _this.setStore(['props', key], value, shouldForceUpdate, callback);
    };

    _this.setStore = function () {
      var paths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var value = arguments.length > 1 ? arguments[1] : undefined;
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      if (paths.length) {
        _this.store = _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(simpleTableStore.prototype)), "set", _thisSuper).call(_thisSuper, paths, value);
      } else {
        _this.store = value;
      }

      shouldForceUpdate && _this.forceUpdate(callback);
      return _this.store;
    };

    _this.getStore = function () {
      var paths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var value = {};

      if (paths.length) {
        value = _get((_thisSuper2 = _assertThisInitialized(_this), _getPrototypeOf(simpleTableStore.prototype)), "get", _thisSuper2).call(_thisSuper2, paths);
      } else {
        value = _this.store;
      }

      return value;
    };

    _this.setData = function () {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var shouldForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var callback = arguments.length > 2 ? arguments[2] : undefined;

      var rowKey = _this.getTableProps('rowKey'); // rowid
      // 格式化data


      var rows = isArray(data) ? new TableData(data, rowKey) : _this.getData();

      _this.setStore(['rows'], rows, shouldForceUpdate, callback);
    };

    _this.getData = function () {
      var rows = _this.getStore(['rows']); // rows = rows.filter(item => {
      //     return !rule.includes(item.status);
      // })


      return rows || [];
    };

    _this.getFilterData = function () {
      var data = _this.getStore(["rows"]); // 添加规则什么的  比如删除 比如过滤 TODO 过滤要考虑不能放在status中  这样会影响原来的业务侧的代码


      data = data.filter(function (item) {
        return !item.filter;
      });
      return data || [];
    };

    _this.getRows = function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          rowIndexs = _ref.rowIndexs,
          rowKeyValues = _ref.rowKeyValues;

      var rows = _this.getStore(['rows']),
          needRows = [];

      !rowKeyValues && rowIndexs && (rowKeyValues = _this._getRowKeyValues({
        rowIndexs: rowIndexs
      }));
      (rowKeyValues || rowIndexs || []).forEach(function (item) {
        var row = rows.query(item);
        !row && console.warn('not find row data');
        needRows.push(row);
      });
      return needRows;
    };

    _this.setRows = function () {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var shouldForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var rowKey = _this.getTableProps('rowKey');

      var rows = _this.getData();

      data.forEach(function (item) {
        if (!item[rowKey]) {
          console.error('数据中没有rowid');
        }

        rows.update(item[rowKey], function () {
          return item;
        });
      });
      shouldForceUpdate && _this.forceUpdate();
    };

    _this.getClickedRow = function () {
      var currentInfo = _this.getTableProps("currentInfo");

      return currentInfo;
    };

    _this.setClickedRow = function (index) {
      var data = {};

      var rows = _this.getStore(['rows']);

      data.record = rows[index];
      data.index = index;

      _this.setTableProps("currentInfo", data);
    };

    _this.showColumn = function (name, code, isShow) {
      var attrcode = isArray(code) ? code : [code];

      var meta = _this.getMeta();

      if (meta[name]) {
        meta[name].item = meta[name].items.map(function (item) {
          if (attrcode.includes(item.attrcode)) {
            item.visible = isShow;
          }

          return item;
        });
      }

      _this.setMeta(meta);
    };

    _this.setColumn = function (id, attrcodeArr, value) {
      var shouldForceUpdate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      var storeItem = _this.getStore(['meta', id, 'items']);

      if (!storeItem) {
        return;
      }

      var items = storeItem.get(); // let itemLen = items.length

      attrcodeArr = isArray(attrcodeArr) ? attrcodeArr : [attrcodeArr];
      attrcodeArr.forEach(function (attrcode) {
        var item = items.query(attrcode);

        if (item) {
          // TODO 合并数据
          for (var key in value) {
            item[key] = value[key];
          }
        } // for (let i = 0; i < itemLen; i++) {
        //     if (items[i].attrcode === attrcode) {
        //          // 这样就不是引用赋值了
        //         items[i] = { ...items[i], ...value }
        //         break;
        //     }
        // }

      });
      shouldForceUpdate && _this.forceUpdate();
    };

    _this.openModal = function (type, record, index) {
      var modelDatas = _this.getStore(['modelDatas']);

      var data = {};
      data.showModal = true;
      data.operType = type;

      if (type == 'edit') {
        data.record = record || {};
        data.index = index || null;
        data.rowId = record ? record.key : _this._getRandom();
      } else if (type == 'add') {
        data.record = {};
        data.rowIndex = null;
        data.rowId = _this._getRandom();
      }

      modelDatas = _objectSpread(_objectSpread({}, modelDatas), data);

      _this.setStore(['modelDatas'], modelDatas);
    };

    _this.closeModal = function () {
      var modelDatas = _this.getStore(['modelDatas']);

      modelDatas.showModal = false;

      _this.setStore(['modelDatas'], modelDatas);
    };

    _this.setModalValue = function (key, data, type) {
      var modelDatas = _this.getStore(['modelDatas']);

      var record = modelDatas.record;

      if (type == 'refer') {
        record[key] = {
          display: data.refname,
          value: data.refpk
        };
      } else {
        record[key] = {
          value: data,
          display: null
        };
      }

      _this.setStore('modelDatas', modelDatas);
    };

    _this.getMeta = function (id) {
      var meta = _this.getStore('meta'),
          res = {};

      if (!meta) return;

      if (id) {
        var viewMeta = _this._hasMeta({
          id: id
        });

        res = viewMeta ? _toConsumableArray(viewMeta.items.get()) : [];
      } else {
        for (var _i2 = 0, _Object$keys2 = Object.keys(meta); _i2 < _Object$keys2.length; _i2++) {
          var key = _Object$keys2[_i2];
          // 去除一下浅拷贝 避免JSON.parse报错 
          res[key] = meta[key]; // JSON.parse(JSON.stringify(meta[key]));

          if (isObject(meta[key]) && meta[key].items) {
            if (meta[key].moduletype === 'table') {
              res[key].items = meta[key].items.get ? meta[key].items.get() : meta[key].items; // getArrayData
            }
          }
        }
      }

      return res;
    };

    _this.getArrayMeta = function (id) {
      var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (isUndefined(id)) {
        id = _this.getStore('name');
        !id && console.warn('not find current meta name');
      }

      var viewMeta = _this._hasMeta({
        id: id
      }) || []; // getArrayData

      viewMeta = viewMeta && viewMeta.items && viewMeta.items.getArrayData ? viewMeta.items.getArrayData() : viewMeta.items || []; // console.log(viewMeta);

      return viewMeta.filter(function (item) {
        var children = item.children;
        var condition = !children || !(filter && isArray(children) && children.length >= 0);
        return condition;
      });
    };

    _this.setMeta = function (meta) {
      var shouldForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _this.setStore(['meta'], new TableMeta(meta), shouldForceUpdate);

      console.log(_this.getStore('meta'));
    };

    _this.deleteTableRows = function (deleteData) {
      var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'index';
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var delItems = [];

      var rowKey = _this.getTableProps('rowKey'); // 这里应该去取过滤之后的数据


      var rows = _this.getFilterData();

      var currentInfo = _this.getTableProps("currentInfo") || {};
      var pageInfo = _this.getStore(['pageInfo']) || {};
      var includeCurrentRow = false;
      var deleteArr = [];
      var deleteRowIdArr = [];
      var deleteRowPk = [];

      var config = _this.getConfig();

      var crossPageSelect = config.crossPageSelect,
          pkname = config.pkname;
      var deleteNum = 0;
      deleteArr = isArray(deleteData) ? _toConsumableArray(deleteData) : [deleteData];

      if (pattern === 'index') {
        deleteRowIdArr = _this._getRowIdbyIndex(deleteArr);
      } else {
        deleteRowIdArr = deleteArr;
      }

      deleteRowIdArr.forEach(function (item) {
        if (!includeCurrentRow) {
          includeCurrentRow = item === currentInfo[rowKey];
        }

        var len = rows.length;

        for (var i = 0; i < len; i++) {
          if (rows[i][rowKey] === item) {
            crossPageSelect && pkname && deleteRowPk.push(rows[i].values[pkname].value);
            rows.splice(i, 1);
            deleteNum++;
            break;
          }
        }
      }); //更新跨页全选的index

      if (crossPageSelect && pkname) {
        var crossPageSelectIndex = _this.getStore(['checkInfo', 'crossPageSelectIndex']);

        deleteRowPk.forEach(function (pk) {
          crossPageSelectIndex.has(pk) && crossPageSelectIndex["delete"](pk);
        });

        _this.setStore(['checkInfo', 'crossPageSelectIndex'], crossPageSelectIndex, false);
      } // 更新总共条数
      //解决 NCC-44100


      if (pageInfo.total) {
        pageInfo.total -= deleteNum;
      }

      _this.setStore(['pageInfo', pageInfo, false]); // 更新check全选半选状态


      _this.setSelect(deleteRowIdArr, 'delete'); // 删除自动选中到下一个行的逻辑


      if (includeCurrentRow) {
        _this.setTableProps("currentInfo", null, false);

        _this.setTableProps('focusIndex', -1, false);
      } // 更新表格数据——bbq


      _this.setData(rows);

      return delItems;
    };

    _this.addTableRows = function (addData, index) {
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var rows = _this.getStore(['rows']);

      var checkedAll = _this.getStore(['checkInfo', 'checkedAll']);

      var newArr = JSON.parse(JSON.stringify(addData));
      newArr = newArr.map(function (row) {
        row.rowId = row.rowId || _this._getRandom();
        return row;
      });
      index = index || 0;
      rows.splice.apply(rows, [index, 0].concat(_toConsumableArray(newArr))); //更新全选半选状态

      if (checkedAll) {
        _this.setStore(['checkInfo', 'checkedAll'], false, false);

        _this.setStore(['checkInfo', 'indeterminate'], true, false);
      }

      shouldForceUpdate && _this.forceUpdate();
    };

    _this.setSelect = function (value) {
      var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set';
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var selectIndex = _this.getStore(['checkInfo', 'selectIndex']);

      var indeterminate = false,
          checkedAll = false;

      if (!isArray(value)) {
        value = [value];
      }

      if (pattern === 'set') {
        selectIndex.clear();
        value.forEach(function (rowId) {
          selectIndex.add(rowId);
        });
      }

      if (pattern === 'add') {
        value.forEach(function (rowId) {
          selectIndex.add(rowId);
        });
      }

      if (pattern === 'delete') {
        value.forEach(function (rowId) {
          selectIndex["delete"](rowId);
        });
      }

      if (pattern === 'clear') {
        selectIndex.clear();

        _this.setTableProps('focusIndex', -1, false);
      }

      var checkInfo = _this.getStore('checkInfo'); // 获取当前视图


      var rows = _this.getFilterData();

      var rowsLength = rows.length;
      var sagaLen = 0;
      rowsLength && rows.map(function (item) {
        var values = item.values || item;
        var unSaga = !values['saga_status'] || values['saga_status'].value !== '1';
        var disabled = item['disabled'] ? item['disabled'] : values['disabled'] && values['disabled'].value; // 记录一下saga的数目

        !unSaga && sagaLen++;

        if (disabled) {
          if (item.selected) {
            selectIndex.add(item.rowId);
          } else {
            selectIndex["delete"](item.rowId);
          }
        } else if ((pattern === 'all' || pattern === 'allpage') && unSaga) {
          selectIndex.add(item.rowId);
          item.selected = true;
        } else if (pattern === 'reverse') {
          if (selectIndex.has(item.rowId)) {
            selectIndex["delete"](item.rowId);
            item.selected = false;
          } else {
            if (unSaga || !disabled) {
              selectIndex.add(item.rowId);
              item.selected = true;
            }
          }
        } else {
          var isSelect = selectIndex.has(item.rowId);
          isSelect && unSaga ? item.selected = true : item.selected = false;
        }
      });
      var selectSize = selectIndex.size;

      if (selectSize === 0) {
        indeterminate = false;
        checkedAll = false;
      } else if (selectSize > 0 && selectSize + sagaLen < rowsLength) {
        indeterminate = true;
        checkedAll = false;
      } else if (selectSize + sagaLen === rowsLength) {
        indeterminate = false;
        checkedAll = true;
      }

      checkInfo.indeterminate = indeterminate;
      checkInfo.checkedAll = checkedAll;
      checkInfo.selectIndex = selectIndex;

      if (pattern === 'allpage') {
        checkInfo.checkedAllpage = true;
      } else {
        checkInfo.checkedAllpage = false;
      } // this.setData(rows, false);  // 这里不需要更新数据  引用已经更新  如果更新数据  会导致原始数据发生变化


      _this.setStore(['checkInfo'], checkInfo, shouldForceUpdate);
    };

    _this.setCellValue = function (_ref2) {
      var value = _ref2.value,
          rowId = _ref2.rowId,
          index = _ref2.index,
          attrcode = _ref2.attrcode,
          _ref2$shouldForceUpda = _ref2.shouldForceUpdate,
          shouldForceUpdate = _ref2$shouldForceUpda === void 0 ? true : _ref2$shouldForceUpda;
      var id;

      if (!isUndefined(index)) {
        if (isString(index)) {
          index = Number(index);
        }

        id = _this._getRowIdbyIndex([index])[0];
      }

      if (rowId) {
        id = rowId;
      }

      var rows = _this.getStore(['rows']);

      rows.update(id, function (oldRow) {
        oldRow.values[attrcode] = value;
        return oldRow;
      });
      shouldForceUpdate && _this.forceUpdate(); //改成整表更新
    };

    _this.getConfig = function () {
      return _this.getStore(['config']);
    };

    _this.setConfig = function (config) {
      _this.setStore(['config'], config, false);
    };

    _this.setCache = function (path, value) {
      if (!path) {
        console.warn('invalid params <path> to setting');
        return;
      }

      if (!isArray(path)) {
        path = [path];
      }

      var current = _this.cache;
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
    };

    _this.getCache = function (paths) {
      if (isUndefined(paths)) {
        console.warn('invalid params <paths> to setting');
        return;
      }

      if (!isArray(paths)) {
        paths = [paths];
      }

      var current = _this.cache;
      paths.some(function (item) {
        if (isUndefined(item) || isNullOrVoid(current)) {
          isUndefined(item) && console.warn('paths has empty item[%s]', paths);
          return true;
        }

        if (!current[item]) {
          current = null;
          return true;
        }

        current = current[item];
        return false;
      }); // console.log(this.cache);

      return current;
    };

    _this.setCrossPage = function (rows, pkname, isSelect) {
      var _this$getStore = _this.getStore('checkInfo'),
          crossPageSelectIndex = _this$getStore.crossPageSelectIndex;

      var rowsArr = isArray(rows) ? rows : [rows];
      rowsArr.forEach(function (row) {
        var pk;

        if (isObject(row.values)) {
          pk = row.values[pkname].value;
        } else {
          pk = row[pkname].value;
        }

        var values = row.values || row;
        var unSaga = !values['saga_status'] || values['saga_status'].value !== '1';

        if (isSelect && unSaga) {
          crossPageSelectIndex.add(pk);
        } else {
          crossPageSelectIndex["delete"](pk);
        }
      });
    };

    _this._getRowIdbyIndex = function (indexArr) {
      var rows = _this.getData();

      var rowIdArr = [];
      rows.forEach(function (row, index) {
        var strIndex = String(index);

        if (indexArr.includes(index) || indexArr.includes(strIndex)) {
          rowIdArr.push(row.rowId);
        }
      });
      return rowIdArr;
    };

    return _this;
  }

  _createClass(simpleTableStore, [{
    key: "getRowProps",
    value: function getRowProps() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          rowIndex = _ref3.rowIndex,
          rowKeyValue = _ref3.rowKeyValue,
          name = _ref3.name;

      // 获取真实的rowIndex
      !rowKeyValue && rowIndex && (rowKeyValue = this._getRowKeyValues({
        rowIndex: rowIndex
      }));
      var data = this.getStore(['rows']),
          row = data.query(rowKeyValue || rowIndex);
      return row[name];
    }
  }, {
    key: "setRowProps",
    value: function setRowProps() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          rowIndex = _ref4.rowIndex,
          rowKeyValue = _ref4.rowKeyValue,
          _ref4$value = _ref4.value,
          value = _ref4$value === void 0 ? {} : _ref4$value,
          _ref4$shouldForceUpda = _ref4.shouldForceUpdate,
          shouldForceUpdate = _ref4$shouldForceUpda === void 0 ? true : _ref4$shouldForceUpda;

      var rowkey = rowKeyValue || rowIndex; // 获取真实的rowIndex

      !rowKeyValue && rowIndex && (rowKeyValue = this._getRowKeyValues({
        rowIndex: rowIndex
      }));
      var rows = this.getStore(['rows']),
          row = rows.query(rowkey); // TODO Update

      for (var key in value) {
        row[key] = value[key];
      }

      this.setStore(['rows', rowkey], row, shouldForceUpdate);
    }
  }, {
    key: "clearSortStatus",
    // 清空排序
    value: function clearSortStatus(_ref5) {
      var _this2 = this;

      var columns = _ref5.columns;
      columns.forEach(function (eve) {
        //获取表格列配置
        var children = eve.children;

        if (!isUndefined(children)) {
          //判断和并列的情况
          _this2.clearSortStatus({
            columns: children
          });
        } else {
          columns.forEach(function (item) {
            //保存返回的column状态，没有则终止order状态
            item.order = 'flatscend';
            item.orderNum = '';
          });
        }
      });
    }
    /**
    * @description: 设置缓存
    * @param {type} 
    * @return: 
    */

  }, {
    key: "_hasMeta",
    value: function _hasMeta() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          id = _ref6.id;

      var meta = this.getStore('meta') || {};

      if (!id || !isObject(meta[id])) {
        return null;
      }

      return meta[id];
    }
  }, {
    key: "_getRandom",
    value: function _getRandom() {
      return String(new Date().getTime()).slice(-5) + Object(api_index_["getSafeRandom"])().toString(12);
    }
  }]);

  return simpleTableStore;
}(index_["BaseStore"]);

var useSimpleTable = Object(index_["hookFactory"])(store_simpleTableStore);
// EXTERNAL MODULE: external "@platform/base/index"
var base_index_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/platform/components/Table/appTable/SimpleTable/index.js
function SimpleTable_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SimpleTable_typeof = function _typeof(obj) { return typeof obj; }; } else { SimpleTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SimpleTable_typeof(obj); }

var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = SimpleTable_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function SimpleTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SimpleTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SimpleTable_ownKeys(Object(source), true).forEach(function (key) { SimpleTable_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SimpleTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SimpleTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SimpleTable_toConsumableArray(arr) { return SimpleTable_arrayWithoutHoles(arr) || SimpleTable_iterableToArray(arr) || SimpleTable_unsupportedIterableToArray(arr) || SimpleTable_nonIterableSpread(); }

function SimpleTable_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SimpleTable_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SimpleTable_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SimpleTable_arrayLikeToArray(o, minLen); }

function SimpleTable_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function SimpleTable_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return SimpleTable_arrayLikeToArray(arr); }

function SimpleTable_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SimpleTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SimpleTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SimpleTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) SimpleTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) SimpleTable_defineProperties(Constructor, staticProps); return Constructor; }

function SimpleTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SimpleTable_setPrototypeOf(subClass, superClass); }

function SimpleTable_setPrototypeOf(o, p) { SimpleTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SimpleTable_setPrototypeOf(o, p); }

function SimpleTable_createSuper(Derived) { var hasNativeReflectConstruct = SimpleTable_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SimpleTable_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SimpleTable_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SimpleTable_possibleConstructorReturn(this, result); }; }

function SimpleTable_possibleConstructorReturn(self, call) { if (call && (SimpleTable_typeof(call) === "object" || typeof call === "function")) { return call; } return SimpleTable_assertThisInitialized(self); }

function SimpleTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SimpleTable_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function SimpleTable_getPrototypeOf(o) { SimpleTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SimpleTable_getPrototypeOf(o); }

/*
 * @Descripttion: 
 * @version: 
 * @Author: bbq
 * @Date: 2020-06-05 15:28:21
 * @LastEditors: bbq
 * @LastEditTime: 2021-03-05 14:00:33
 */








var SimpleTable_isArray = table_core_index_["utils"].isArray,
    SimpleTable_isObject = table_core_index_["utils"].isObject,
    excelPackageData = table_core_index_["utils"].excelPackageData,
    getMetaIsTotal = table_core_index_["utils"].getMetaIsTotal,
    SimpleTable_isUndefined = table_core_index_["utils"].isUndefined,
    setPageSizeStorage = table_core_index_["utils"].setPageSizeStorage,
    SimpleTable_getPageSizeStorage = table_core_index_["utils"].getPageSizeStorage;
var formatColumn = table_core_index_["lib"].formatColumn,
    pagination = table_core_index_["lib"].pagination,
    selectRow = table_core_index_["lib"].selectRow,
    indexCol = table_core_index_["lib"].indexCol,
    checkCol = table_core_index_["lib"].checkCol,
    errorCol = table_core_index_["lib"].errorCol,
    filter = table_core_index_["lib"].filter,
    selectable = table_core_index_["lib"].selectable,
    simpleTableModal = table_core_index_["lib"].simpleTableModal,
    total = table_core_index_["lib"].total,
    columnSort = table_core_index_["lib"].columnSort,
    contextMenu = table_core_index_["lib"].contextMenu;

__webpack_require__(1891);

var MetaTable = contextMenu(simpleTableModal(pagination(selectable(filter(selectRow(indexCol(checkCol(errorCol(total(formatColumn(columnSort(base_index_["Table"])))))))))))); // 表格数据

function SimpleTable_TableData(data) {
  var keyPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rowid';
  return new index_["ArrayData"](data, keyPath);
}

var SimpleTable_SimpleTable = Object(api_index_["withViewModel"])(_class = (_temp = /*#__PURE__*/function (_BaseComponent) {
  SimpleTable_inherits(SimpleTable, _BaseComponent);

  var _super = SimpleTable_createSuper(SimpleTable);

  function SimpleTable(props) {
    var _this;

    SimpleTable_classCallCheck(this, SimpleTable);

    _this = _super.call(this, props);

    _this.pageInfoChange = function (newPageInfo) {
      var _this$props = _this.props,
          store = _this$props.store,
          onPageInfoChange = _this$props.onPageInfoChange;
      var getStore = store.getStore,
          setStore = store.setStore;
      var allpks = getStore(['allpks']);
      setStore(['pageInfo'], newPageInfo); //存储本次选择的分页条数

      setPageSizeStorage(getStore(['meta']), _this.props.name, newPageInfo.pageSize); // 如果表格没有数据，则不能使用该方法

      if (allpks.length <= 0) return;

      if (onPageInfoChange) {
        onPageInfoChange(_this.splitPks(allpks, newPageInfo.pageIndex, newPageInfo.pageSize), newPageInfo.total);
      }
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
          _this$props2$config = _this$props2.config,
          config = _this$props2$config === void 0 ? {} : _this$props2$config,
          name = _this$props2.name;
      var getStore = store.getStore,
          setStore = store.setStore,
          getData = store.getData,
          setSelect = store.setSelect,
          setCrossPage = store.setCrossPage;
      var checkInfo = getStore(['checkInfo']);
      var selectIndex = checkInfo.selectIndex;
      var rows = getData(); // 跨页全选

      if (config.crossPageSelect && config.pkname) {
        setCrossPage(rows, config.pkname, value);
      }

      var oldLen = selectIndex.size;

      if (value) {
        setSelect(undefined, 'all', false);
        setStore(['checkInfo', 'checkedAll'], true, false);
      } else {
        setSelect(undefined, 'clear', false);
        setStore(['checkInfo', 'checkedAll'], false, false);
      }

      var len = rows.length;
      var newLen = getStore(['checkInfo', 'selectIndex']).size;

      _this.forceUpdate(function () {
        _this.props.onSelectedAll && Object(api_index_["isFunction"])(_this.props.onSelectedAll) && _this.props.onSelectedAll(name, value, len);
        _this.props.selectedChange && Object(api_index_["isFunction"])(_this.props.selectedChange) && _this.props.selectedChange(name, newLen, oldLen);
      });
    };

    _this.onCheckChange = function (record, index) {
      var isUnique = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var _this$props3 = _this.props,
          _this$props3$config = _this$props3.config,
          config = _this$props3$config === void 0 ? {} : _this$props3$config,
          name = _this$props3.name,
          store = _this$props3.store;
      var getStore = store.getStore,
          setSelect = store.setSelect,
          setCrossPage = store.setCrossPage,
          setTableProps = store.setTableProps;
      var value = [record.rowId.value];
      var checkInfo = getStore(['checkInfo']);
      var selectIndex = checkInfo.selectIndex,
          crossPageSelectIndex = checkInfo.crossPageSelectIndex;
      var oldLen = selectIndex.size;
      var selected = record.selected.value; // 跨页选功能
      // 跨页全选

      if (config.crossPageSelect && config.pkname) {
        if (isUnique) {
          crossPageSelectIndex.clear();
        }

        setCrossPage(record, config.pkname, !selected);
      } // 更新当前操作行


      setTableProps('currentIndex', index, false);

      if (isUnique) {
        if (selected && oldLen === 1) {
          setSelect(value, 'delete', false);
          setTableProps('currentIndex', -1, false);
        } else {
          setSelect(value, 'set', false);
        }
      } else {
        if (selected) {
          setSelect(value, 'delete', false);
          setTableProps('currentIndex', -1, false);
        } else {
          setSelect(value, 'add', false);
        }
      }

      var newLen = getStore(['checkInfo', 'selectIndex']).size;

      _this.forceUpdate(function () {}); // // 选中选项的回调函数


      _this.props.onSelected && Object(api_index_["isFunction"])(_this.props.onSelected) && _this.props.onSelected(name, record, index, !selected);
      _this.props.selectedChange && Object(api_index_["isFunction"])(_this.props.selectedChange) && _this.props.selectedChange(name, newLen, oldLen);
    };

    _this.changeCrossSelect = function (value) {
      var _this$props4 = _this.props,
          store = _this$props4.store,
          _this$props4$config = _this$props4.config,
          config = _this$props4$config === void 0 ? {} : _this$props4$config,
          name = _this$props4.name;
      var pkname = config.pkname;
      var getStore = store.getStore,
          setStore = store.setStore,
          setSelect = store.setSelect,
          setCrossPage = store.setCrossPage,
          getData = store.getData;

      var _getStore = getStore(),
          checkInfo = _getStore.checkInfo,
          allpks = _getStore.allpks;

      var crossPageSelectIndex = checkInfo.crossPageSelectIndex;
      var oldLen = crossPageSelectIndex.size;

      if (!pkname) {
        Object(api_index_["warningOnce"])(false, "\u8BF7\u914D\u7F6Epkname");
        return;
      }

      var rows = getData();

      switch (value) {
        case 'current':
          setSelect(undefined, 'all');
          crossPageSelectIndex.clear();
          setCrossPage(rows, pkname, true);
          break;

        case 'all':
          setSelect(undefined, 'allpage');
          crossPageSelectIndex = new Set(allpks);
          break;

        case 'reverse':
          var needSelectRowId = [];
          rows.forEach(function (row) {
            if (!row.selected) {
              needSelectRowId.push(row.rowId);
            }
          });
          setSelect(needSelectRowId, 'set');
          allpks.forEach(function (pk) {
            if (crossPageSelectIndex.has(pk)) {
              crossPageSelectIndex["delete"](pk);
            } else {
              crossPageSelectIndex.add(pk);
            }
          });
      }

      setStore(['checkInfo', 'crossPageSelectIndex'], crossPageSelectIndex, false);
      var newLen = crossPageSelectIndex.size;
      _this.props.selectedChange && Object(api_index_["isFunction"])(_this.props.selectedChange) && _this.props.selectedChange(name, newLen, oldLen);
    };

    _this.sortChange = function (sortParam, sortData) {
      var sortObj = {};
      var sortRows = [];
      var _this$props5 = _this.props,
          store = _this$props5.store,
          name = _this$props5.name;
      var setStore = store.setStore,
          getData = store.getData,
          getMeta = store.getMeta;
      var rows = getData();
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

      Object(table_core_index_["handleSortcolumns"])({
        columns: getMeta(name) || [],
        sortObj: sortObj
      });
      sortData.forEach(function (data) {
        rows.forEach(function (row) {
          if (data.rowId.value === row.rowId) {
            sortRows.push(row);
          }
        });
      });
      store.setData(sortRows, true);
    };

    _this.checkNum = function () {
      var _this$props6 = _this.props,
          _this$props6$config = _this$props6.config,
          config = _this$props6$config === void 0 ? {} : _this$props6$config,
          store = _this$props6.store;
      var num = 0;

      if (config.crossPageSelect && config.pkname) {
        num = store.getStore(['checkInfo', 'crossPageSelectIndex']).size;
      } else {
        num = store.getStore(['checkInfo', 'selectIndex']).size;
      }

      return num;
    };

    _this.updateColumnAfterSetting = function (newColumn, areaCode) {
      var store = _this.props.store;
      var getStore = store.getStore,
          setMeta = store.setMeta;
      var meta = getStore(['meta']);

      if (newColumn.length && areaCode) {
        var finalColumn = SimpleTable_toConsumableArray(meta[areaCode].items);

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
        sortIndexArr.forEach(function (item, index) {
          finalColumn[item] = sortObjArr[index];
        });
        meta[areaCode].items = finalColumn;
        setMeta(meta);

        _this.setState({
          key: _this.state.key + 1
        });
      }
    };

    _this.getColSettiongParam = function (meta, name) {
      if (meta && meta[name]) {
        var currentMeta = meta[name];

        var config = _this.props.store.getConfig();

        return {
          appcode: currentMeta.appcode || api_index_["pageTo"].getAppCode(),
          pagecode: currentMeta.pagecode || api_index_["pageTo"].getPageCode(),
          code: currentMeta.templateCode || meta.code,
          pageid: currentMeta.pageid || meta.pageid,
          areaCode: name,
          areaId: currentMeta.oid,
          noColSetClass: config.noColSetClass,
          colSetCallback: config.colSetCallback
        };
      } else {
        return {};
      }
    };

    _this.contextMenuClick = function (btnCode, execCommandCopy, param, insertNum, rowIndex) {
      var isHotKey = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var _this$props7 = _this.props,
          store = _this$props7.store,
          name = _this$props7.name;
      var getCache = store.getCache,
          getRows = store.getRows,
          getMeta = store.getMeta,
          getArrayMeta = store.getArrayMeta,
          getData = store.getData,
          getFilterData = store.getFilterData;
      var copyCode = ["copy", "copy-row", "copy-column"];

      if (copyCode.includes(btnCode)) {
        //选中表头
        var activeHeads = getCache('activeSpecialCells');
        console.log("表头选中信息：", activeHeads);
        var arrayMeta = getArrayMeta(name);
        var currentMeta = store.getMeta(name);
        var activedCells = getCache("activedCells");

        if (isHotKey && !activedCells && !activeHeads) {
          return;
        }

        var selectedRows = [];

        if (btnCode === 'copy' || btnCode === 'copy-row') {
          selectedRows = getRows({
            rowKeyValues: Object.keys(activedCells)
          });
        } else if (btnCode === 'copy-column') {
          selectedRows = getFilterData();
        }

        Object(api_index_["isFunction"])(execCommandCopy) && execCommandCopy(activeHeads, currentMeta, activedCells, selectedRows, arrayMeta);
      }
    };

    _this.ViewModel = _this.props.ViewModel;
    _this.state = {
      isEllipsis: true,
      key: 1
    };
    return _this;
  }

  SimpleTable_createClass(SimpleTable, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this2 = this;

      //初始化表格的时候,将缓存数据放入表格中
      var _this$props8 = this.props,
          _this$props8$config = _this$props8.config,
          config = _this$props8$config === void 0 ? {} : _this$props8$config,
          store = _this$props8.store,
          afterLangload = _this$props8.afterLangload;

      if (config.dataSource) {
        var data = this.ViewModel.getData(config.dataSource);

        if (data && data.simpleTable) {
          var arr = ['rows', 'pageInfo', 'allpks', 'alltss', 'props', 'modelDatas', 'sortParam', 'config', 'checkInfo'];
          arr.forEach(function (item) {
            if (item === 'rows') {
              var val = SimpleTable_isArray(data.simpleTable.rows) ? new SimpleTable_TableData(data.simpleTable.rows, 'rowId') : store.getData();
              store.setData(val, false);
            } else if (item === 'pageInfo') {
              var _val = data.simpleTable[item] ? data.simpleTable[item] : store.getStore([item]);

              var allpks = data.simpleTable['allpks'] || [];
              var _total = allpks.length;

              if (_total) {
                _val.total = _total;
              } //用于更新卡片跳列表，更新总条数


              store.setStore([item], _val, false);
            } else {
              var _val2 = data.simpleTable[item] ? data.simpleTable[item] : store.getStore([item]);

              if (item === 'checkInfo') {
                store.setStore([item], _val2, true); //true 最后更新store
              } else {
                store.setStore([item], _val2, false);
              }
            }
          }); //执行数据初始化周期函数

          if (Object(api_index_["isFunction"])(config.componentInitFinished)) {
            config.componentInitFinished();
          } // 兼容筛选, 当卡片返回列表时, 重新筛选列表

        }
      }

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
      store.setConfig(config);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props9 = this.props,
          _this$props9$config = _this$props9.config,
          config = _this$props9$config === void 0 ? {} : _this$props9$config,
          store = _this$props9.store;

      if (NODE_ENV === 'development') {
        return;
      }

      var data = this.ViewModel.getData(config.dataSource);

      if (data && data.simpleTable && data.simpleTable.pageInfo) {
        return;
      } // ajax({
      //     url: '/nccloud/platform/templet/pagesize.do',
      //     method: 'post',
      //     data: {},
      //     success: res => {
      //         if (res.data) {
      //             store.setStore(['pageInfo', 'pageSize'], Number(res.data));
      //         }
      //     },
      //     error: err => {
      //         console.log(err)
      //     },
      // });

    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props10 = this.props,
          _this$props10$config = _this$props10.config,
          config = _this$props10$config === void 0 ? {} : _this$props10$config,
          store = _this$props10.store;
      var storeData = store.getStore();
      var rows = storeData.rows,
          allpks = storeData.allpks,
          pageInfo = storeData.pageInfo,
          checkInfo = storeData.checkInfo,
          currentInfo = storeData.currentInfo,
          alltss = storeData.alltss,
          props = storeData.props,
          modelDatas = storeData.modelDatas,
          sortParam = storeData.sortParam; // 兼容筛选 todo

      if (config.dataSource) {
        var currentpks = [];

        if (config.pkname && Array.isArray(rows) && rows.length) {
          rows.forEach(function (item) {
            if (item && item.values && item.values[config.pkname]) {
              if (!currentpks.includes(item.values[config.pkname].value)) {
                currentpks.push(item.values[config.pkname].value);
              }
            }
          });
        } //更新allpks


        var pkLen = currentpks.length;
        var pageIndex = pageInfo.pageIndex,
            pageSize = pageInfo.pageSize;
        var startIndex = (Number(pageIndex) - 1) * Number(pageSize);
        allpks.splice.apply(allpks, [startIndex, pkLen].concat(currentpks));
        var cacheData = {
          allpks: allpks,
          currentpks: currentpks,
          rows: rows,
          pageInfo: pageInfo,
          checkInfo: checkInfo,
          currentInfo: currentInfo,
          alltss: alltss,
          props: props,
          modelDatas: modelDatas,
          sortParam: sortParam,
          config: config
        };
        var data = {
          simpleTable: cacheData
        }; //设置缓存数据--清空卡片的缓存数据

        this.ViewModel.setData(config.dataSource, data);
      } else if (allpks) {
        api_index_["cacheTools"].set("allpks", allpks);
      }
    }
  }, {
    key: "_getRowIdbyIndex",
    value: function _getRowIdbyIndex(indexArr) {
      var store = this.props.store;
      var rows = store.getData();
      var rowIdArr = [];
      rows.forEach(function (row, index) {
        if (indexArr.includes(index)) {
          rowIdArr.push(row.rowId);
        }
      });
      return rowIdArr;
    } // 分割分页id

  }, {
    key: "onBatchSelected",
    // 框选等操作
    value: function onBatchSelected() {
      var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var hotkey = arguments.length > 1 ? arguments[1] : undefined;
      var _this$props11 = this.props,
          _this$props11$config = _this$props11.config,
          config = _this$props11$config === void 0 ? {} : _this$props11$config,
          store = _this$props11.store;
      var setSelect = store.setSelect,
          setCrossPage = store.setCrossPage; // 清空所有

      setSelect(undefined, 'clear', false);
      rows.forEach(function (row) {
        var values = JSON.parse(JSON.stringify(row.values || row));
        values.rowId = values.rowId || {
          value: row.rowId
        };
        values.selected = values.selected || {
          value: row.selected
        };
        var value = [values.rowId.value];
        var selected = values.selected.value; // 错误行禁用

        if (values && values.saga_status && values.saga_status.value === '1') {
          return;
        } // 跨页选功能
        // 跨页全选


        if (config.crossPageSelect && config.pkname) {
          setCrossPage(values, config.pkname, !selected);
        }

        if (selected && hotkey === 'ctrl') {
          setSelect(value, 'delete', false);
        } else {
          setSelect(value, 'add', false);
        }
      }); // 更新

      this.forceUpdate && this.forceUpdate();
      config.onBatchSelected && config.onBatchSelected(rows);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props12 = this.props,
          store = _this$props12.store,
          name = _this$props12.name,
          _this$props12$config = _this$props12.config,
          config = _this$props12$config === void 0 ? {} : _this$props12$config,
          _onCellHyperlinkTo = _this$props12.onCellHyperlinkTo;
      var getStore = store.getStore,
          setStore = store.setStore,
          getData = store.getData,
          getFilterData = store.getFilterData,
          getMeta = store.getMeta,
          setTableProps = store.setTableProps,
          getTableProps = store.getTableProps,
          setClickedRow = store.setClickedRow,
          getArrayMeta = store.getArrayMeta,
          setCellProps = store.setCellProps,
          _setCellValue = store.setCellValue;

      var _getStore2 = getStore(),
          pageInfo = _getStore2.pageInfo,
          checkInfo = _getStore2.checkInfo;

      var foldCacheId = config.foldCacheId,
          _config$cancelCustomR = config.cancelCustomRightMenu,
          cancelCustomRightMenu = _config$cancelCustomR === void 0 ? false : _config$cancelCustomR,
          addBlankCol = config.addBlankCol,
          extendRightMenu = config.extendRightMenu,
          _config$showWidthAndH = config.showWidthAndHeightConfig,
          showWidthAndHeightConfig = _config$showWidthAndH === void 0 ? true : _config$showWidthAndH,
          height = config.height,
          _config$high_selectab = config.high_selectable,
          high_selectable = _config$high_selectab === void 0 ? {} : _config$high_selectab,
          _config$hideRightMenu = config.hideRightMenu,
          hideRightMenu = _config$hideRightMenu === void 0 ? false : _config$hideRightMenu,
          _config$high_filter = config.high_filter,
          high_filter = _config$high_filter === void 0 ? {} : _config$high_filter,
          others = _objectWithoutProperties(config, ["foldCacheId", "cancelCustomRightMenu", "addBlankCol", "extendRightMenu", "showWidthAndHeightConfig", "height", "high_selectable", "hideRightMenu", "high_filter"]);

      if (hideRightMenu) {
        cancelCustomRightMenu = true;
        high_selectable.enable = false;
        showWidthAndHeightConfig = false;
      }

      var items = getMeta(name) || [];
      var focusIndex = getTableProps('focusIndex');
      var meta = getStore(['meta']);
      var showPagination;

      if (meta && meta[name]) {
        showPagination = meta[name].pagination;

        if (!pageInfo.pageSize) {
          var prePageSize = SimpleTable_getPageSizeStorage(meta, name);
          pageInfo.pageSize = prePageSize;
          setStore(['pageInfo'], pageInfo, false);
        }
      }

      var colSettingParam = this.getColSettiongParam(meta, name);
      var otherAreaHeight = Object(api_index_["isNumber"])(config.otherAreaHeight) && !Number.isNaN(config.otherAreaHeight) ? config.otherAreaHeight : 0;
      var adaptionHeight = !!(SimpleTable_isUndefined(config.height) && (config.adaptionHeight || SimpleTable_isUndefined(config.adaptionHeight)));
      var heightObj = {};

      if (height) {
        heightObj.scroll = {
          x: true,
          y: height
        };
        heightObj.bodyStyle = {
          height: height
        };
      } else {
        heightObj.scroll = {
          x: true,
          y: 300
        };
        heightObj.bodyStyle = {
          height: 300
        };
      }

      var data = getFilterData(); //兼容旧版本

      var rows = data.map(function (row) {
        var values = row.values;
        ['status', 'rowId', 'selected', 'isOptimized', 'disabled'].forEach(function (key) {
          if (!SimpleTable_isObject(row[key])) {
            values[key] = {
              value: row[key]
            };
          }
        });
        delete values.values;
        return values;
      }); // arrcolumns

      var arrColumns = getArrayMeta(name); // rowKey

      var rowKey = 'rowId';
      var isTotal = config.showTotal || getMetaIsTotal(items); // 默认开启 框选 high_selectable.enable
      //high_selectable.enable = high_selectable.enable || true;
      // 默认启用快捷键选中 只有快捷键选中行

      if (SimpleTable_isUndefined(high_selectable.enable)) {
        high_selectable.enable = true; // high_selectable.disabled = isUndefined(high_selectable.disabled) ? 'slide' :
        //     (isArray(high_selectable.disabled) ? high_selectable.disabled : [high_selectable.disabled]);
        // high_selectable.single = high_selectable.single || false;
        // // 不开启
        // high_selectable.selectCell = isUndefined(high_selectable.selectCell) ? false : high_selectable.selectCell;
      } // console.log(high_selectable);
      // 是否框选(批选)


      var isBatchSelect = SimpleTable_isUndefined(high_selectable.selectCell) ? true : high_selectable.selectCell;
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.Fragment, null, items.length ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(MetaTable, _extends({}, this.props, {
        columns: items,
        data: rows,
        className: 'simpleTable' //用于识别table
        ,
        rowKey: rowKey,
        status: 'browse',
        disableEditType: true,
        height: 30
      }, heightObj, {
        adaptionHeight: adaptionHeight,
        cardType: "simple",
        otherAreaHeight: showPagination ? 42 + otherAreaHeight : otherAreaHeight,
        renderStatus: "browse",
        bodyDisplayInRow: SimpleTable_isUndefined(config.multipleRowCell) ? this.state.isEllipsis : !config.multipleRowCell,
        pageInfo: pageInfo,
        pageInfoChange: this.pageInfoChange,
        isDrag: config.isDrag,
        lazyload: config.lazyload,
        langJson: store.getCache('langJson') // 给单元格用
        // autoAffixScroll
        ,
        getCellValue: function getCellValue(param) {
          var rowKeyValue = param.rowKeyValue,
              attrcode = param.attrcode;
          var rowId = rowKeyValue.value;
          var rows = getData();

          if (rows.length && Object(api_index_["isFunction"])(rows.query)) {
            var row = rows.query(rowId);
            var cell = row.values[attrcode];

            if (cell && cell.value && SimpleTable_isObject(cell.value)) {
              return {};
            }

            return cell || {};
          }

          return {};
        },
        setCellValue: function setCellValue(params) {
          var rowKeyValue = params.rowKeyValue,
              attrcode = params.attrcode,
              _params$value = params.value,
              value = _params$value === void 0 ? {} : _params$value;

          _setCellValue({
            rowId: rowKeyValue,
            attrcode: attrcode,
            value: value
          }); // 这里就是onChange 和 onBlur 的集合

        },
        onCellHyperlinkTo: function onCellHyperlinkTo(record, attrcode, value) {
          _onCellHyperlinkTo && _onCellHyperlinkTo(record, attrcode, value, name);
        },
        cellClassName: function cellClassName(_ref) {
          var index = _ref.rowIndex,
              record = _ref.record,
              code = _ref.attrcode;
          return Object(api_index_["isFunction"])(config.setCellClass) && config.setCellClass(index, record, code);
        },
        focusIndex: focusIndex //用于聚焦
        ,
        onRowClick: function onRowClick(record, index, e) {
          if (record.disabled && record.disabled.value === true) return; // 为了避免和新开发的行框选点选区域选事件冲突

          if (high_selectable && high_selectable.enable && (e.ctrlKey || e.shiftKey || e.metaKey)) {
            return;
          } //更新当前选中行


          setTableProps('currentIndex', index, false); // 错误行禁用

          var values = record.values || record;

          if (!values || !values.saga_status || values.saga_status.value !== "1") {
            setClickedRow(index);

            if (e.target.localName !== 'a' && e.target.className !== 'code-detail-link' && !config.disableClickRowToSelect) {
              //点击a标签不候选行
              _this3.onCheckChange(record, index, true);
            }
          }

          _this3.props.onRowClick && Object(api_index_["isFunction"])(_this3.props.onRowClick) && _this3.props.onRowClick(record, index, e);
        } // 选中行
        ,
        hasSelected: function hasSelected(_ref2) {
          var _ref2$rowKeyValue = _ref2.rowKeyValue,
              rowKeyValue = _ref2$rowKeyValue === void 0 ? {} : _ref2$rowKeyValue;
          var selectedIndex = getStore(['checkInfo', 'selectIndex']);
          return selectedIndex.has(rowKeyValue.value);
        },
        onRowDoubleClick: function onRowDoubleClick(record, index, e) {
          //------------双击checkbox区域，不跳转 start------
          var className = e.target.className;
          var type = e.target.type;

          if (typeof className === 'string' && className.indexOf('checkbox') != -1) {
            return;
          } else if (typeof className === 'string' && className.indexOf('cell-content') != -1) {
            var parentNodeClass = e.target.parentElement.parentElement.className;

            if (typeof parentNodeClass === 'string' && parentNodeClass.indexOf('checkbox') != -1) {
              return;
            }
          } else if (type === 'checkbox') {
            return;
          } //------------双击checkbox区域，不跳转 end------
          //更新当前选中行


          setTableProps('currentIndex', index, false); // 错误行禁用

          var values = record.values || record;

          if (!values || !values.saga_status || values.saga_status.value !== "1") {
            setClickedRow(index);
          }

          _this3.props.onRowDoubleClick && Object(api_index_["isFunction"])(_this3.props.onRowDoubleClick) && _this3.props.onRowDoubleClick(record, index, e);
        },
        name: name,
        store: store,
        onAllCheckChange: function onAllCheckChange(value) {
          return _this3.onAllCheckChange(value);
        },
        onCheckChange: function onCheckChange(record, index) {
          return _this3.onCheckChange(record, index);
        },
        checkInfo: checkInfo,
        backSort: config.sort,
        sortChange: function sortChange(sortParam, sortData) {
          return _this3.sortChange(sortParam, sortData);
        } //排序的回调
        ,
        checkNum: this.checkNum //显示已选行数
        ,
        showPagination: showPagination,
        checkColConfig: {
          showCheck: config.showCheck || false,
          changeCrossSelect: this.changeCrossSelect,
          crossPageSelect: config.crossPageSelect,
          langJson: store.getCache('langJson')
        },
        indexColConfig: {
          showIndex: config.showIndex || false,
          showCheck: config.showCheck || false,
          langJson: store.getCache('langJson')
        },
        totalConfig: {
          showTotal: config.showTotal,
          noTotalRows: config.noTotalRows,
          noTotalCol: config.noTotalCol,
          allowTotalRows: config.allowTotalRows,
          numberPd: 7
        },
        isTotal: isTotal,
        high_filter: SimpleTable_objectSpread({
          alloweFilter: true,
          langJson: store.getCache('langJson'),
          panelTitle: store.getStore(['meta', name, 'name']) || '',
          filterData: store.getData(),
          customColData: store.getCache('customColData'),
          rowKey: rowKey,
          isReset: store.getStore('filterReset'),
          arrColumns: arrColumns,
          handleFilterCallBack: function handleFilterCallBack() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var filteredRow = params.filteredRow,
                filteredRowKeyValues = params.filteredRowKeyValues,
                _params$columnStatus = params.columnStatus,
                columnStatus = _params$columnStatus === void 0 ? {} : _params$columnStatus; // 更新重置状态

            store.setStore('filterReset', false, false); // 设置列状态  设置表格筛选图标

            store.setColumn(name, columnStatus, false); // 设置行状态

            var data = store.getData() || [];
            data.forEach(function (row) {
              if (filteredRowKeyValues.includes(row[rowKey])) {
                row.filter = false;
              } else {
                row.filter = true;
              }
            }); // 处理已选等逻辑

            var checkInfo = store.getStore('checkInfo');

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
            config.handleFilterCallBack && config.handleFilterCallBack();
          },
          handleResetCallBack: function handleResetCallBack(params) {
            var columnStatus = params.columnStatus; // 更新重置状态

            store.setStore('filterReset', false, false); // 设置行状态

            var data = store.getData() || [];
            data.forEach(function (row) {
              row.filter = false;
              delete row.filterIndex;
            }); // 处理已选等逻辑

            var checkInfo = store.getStore('checkInfo');
            var viewData = data;

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

            store.setColumn(name, columnStatus, false);
            config.handleResetCallBack && config.handleResetCallBack();
          },
          onHide: function onHide(params) {
            var columnStatus = params.columnStatus;
            store.setColumn(name, columnStatus, true);
          }
        }, high_filter || {}),
        high_selectable: SimpleTable_objectSpread(SimpleTable_objectSpread({
          store: store,
          onSelect: function onSelect() {
            var activedCells = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var activeSpecialCells = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var hotkey = arguments.length > 2 ? arguments[2] : undefined;

            var _ref3 = arguments.length > 3 ? arguments[3] : undefined,
                current = _ref3.current,
                isBatch = _ref3.isBatch;

            // console.log(activedCells, hotkey, current);
            var pervActivedCells = store.getCache('activedCells') || {}; // TODO Saga相关的内容

            for (var rowKeyValue in activedCells) {
              pervActivedCells[rowKeyValue] = pervActivedCells[rowKeyValue] || [];

              var _iterator = _createForOfIteratorHelper(activedCells[rowKeyValue]),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var attrcode = _step.value;
                  pervActivedCells[rowKeyValue].push(attrcode); // 解决批改时边线样式不对的问题

                  isBatchSelect && setCellProps(rowKeyValue, attrcode, {
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


            activedCells = pervActivedCells; // 批操作

            if (isBatch) {
              var _rows = [];

              for (var _rowKeyValue in activedCells) {
                // TODO
                var _data = getData();

                if (_data.length && Object(api_index_["isFunction"])(_data.query)) {
                  _rows.push(_data.query(_rowKeyValue));
                }
              }

              if (config.onBatchSelected) {
                _this3.onBatchSelected(_rows, hotkey);
              } else {
                var selectIndex = store.getStore(['checkInfo', 'selectIndex']);
                selectIndex.clear();

                _rows.forEach(function (row) {
                  var rowKeyValue = row[rowKey];
                  var values = row.values || row,
                      isSagaStatus = values && values.saga_status && values.saga_status.value === '1'; // 错误行禁用

                  if (isSagaStatus && row.disabled) {
                    return;
                  }

                  !selectIndex.has(rowKeyValue) && selectIndex.add(rowKeyValue);
                });
              }
            }

            hotkey === 'down' && current && current.rowKeyValue && setCellProps(current.rowKeyValue, current.attrcode, {
              showDrag: true
            }, false); // 缓存已选

            store.setCache('activedCells', activedCells);
            store.setCache('activedCell', current); // 没有选中单元格

            if (!isBatchSelect) {
              _this3.forceUpdate();

              return;
            } // 选中表头


            var oldActiveSpecialCells = store.getCache('activeSpecialCells') || [];

            if (activeSpecialCells.length > 0 || activeSpecialCells.length === 0 && oldActiveSpecialCells.length !== 0) {
              store.setCache('activeSpecialCells', activeSpecialCells); // console.log(store.getCache('activeSpecialCells'), 'activeSpecialCellsactiveSpecialCellsactiveSpecialCellsactiveSpecialCells');

              oldActiveSpecialCells = oldActiveSpecialCells.map(function (item) {
                return item.attrcode;
              });
              activeSpecialCells = activeSpecialCells.map(function (item) {
                return item.attrcode;
              }); // 不能用actived 会有冲突

              store.setColumn(name, oldActiveSpecialCells, {
                unitActive: false
              }, false); // 不能用actived 会有冲突

              store.setColumn(name, activeSpecialCells, {
                unitActive: true
              }, false);
            } // 修正边框


            if (activedCells || activeSpecialCells) {
              var arrayMeta = store.getArrayMeta(name, true),
                  arrayMetaLen = arrayMeta.length;
              var viewData = store.getFilterData();
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
            } // 更新表格 this.forceUpdate &&


            _this3.forceUpdate(); // store.refresh();

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
          onClearData: function onClearData() {
            var shouldForceUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var hotkey = arguments.length > 1 ? arguments[1] : undefined;
            store.setCache('activedCells', {});
            store.setCache('activeSpecialCells', []); // 没有选中单元格

            if (!isBatchSelect) {
              return;
            } // let activedCells = store.getCache('activedCells') || {};
            // let activedCell = store.getCache('activedCell');
            // 全过滤一下


            var data = store.getData() || [];
            data.forEach(function (row) {
              var values = row.values || row || {};
              var rowKeyValue = row.rowId || values.rowId.value;

              for (var attrcode in values) {
                values[attrcode] && values[attrcode].showDrag && setCellProps(rowKeyValue, attrcode, {
                  showDrag: false
                }, false);
                values[attrcode] && values[attrcode].actived && setCellProps(rowKeyValue, attrcode, {
                  actived: false,
                  leftLine: false,
                  rightLine: false,
                  topLine: false,
                  bottomLine: false
                }, false);
              }
            });
            var columns = store.getArrayMeta(name, false) || [];
            columns.forEach(function (item) {
              item.unitActive && store.setColumn(name, [item.attrcode], {
                unitActive: false
              }, false);
            }); // 不更新表格

            shouldForceUpdate && _this3.forceUpdate();
          },
          disabled: 'drag',
          arrColumns: getArrayMeta(name, false),
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


            activeCell = SimpleTable_objectSpread(SimpleTable_objectSpread({}, activeCell), {}, {
              rowIndex: store.getTrueRowIndex({
                rowKeyValue: activeCell.rowKeyValue
              }),
              attrcode: activeCell.attrcode,
              column: store.getColumn(name, activeCell.attrcode) || {}
            }); // 表格数据  是否包含删除的数据 这里要斟酌下
            // let rows = store.getViewData('filter');

            var rows = store.getData();
            var pasteContent = []; // 取值 getCellValue({ rowKeyValue, attrcode })

            var activeCellValue = {};

            if (rows.length && Object(api_index_["isFunction"])(rows.query)) {
              activeCellValue = rows.query(activeCell.rowKeyValue).values[activeCell.attrcode] || {};
            }

            for (var rowKeyValue in activeCells) {
              var attrcode = activeCells[rowKeyValue][0]; // 做过一次radio和checkkbox转换为select 这里可能会有问题 TODO测试

              var isDisplay = activeCell.column.itemtype === 'refer' && activeCell.column.fieldDisplayed === 'refname' || activeCell.column.itemtype === 'select';
              attrcode && pasteContent.push(isDisplay ? activeCellValue.display : activeCellValue.value);
            }

            console.log('onBatchChange trigger', activeCell, activeCells);
            var param = {
              pasteContent: pasteContent,
              activeCell: activeCell,
              // TODO 没有默认加载多语 需要加载多语之后传入
              langJson: store.getCache('langJson') || {},
              rows: rows,
              getRowOldValue: store.getRowOldValue,
              name: name
            };
            var data = excelPackageData(param);
            config.onBatchChange && config.onBatchChange(data);
          },
          isBatchSelect: isBatchSelect
        }, high_selectable), {}, {
          single: false
        }) //折行回调
        ,
        foldingRowChange: function foldingRowChange(isEllipsis) {
          _this3.setState({
            isEllipsis: isEllipsis
          });
        },
        foldCacheId: foldCacheId //右键菜单配置参数
        ,
        contextMenuConfig: {
          enable: high_selectable && high_selectable.enable && isBatchSelect,
          status: "browse",
          contextMenuClick: this.contextMenuClick,
          showBusinessBtn: false,
          showPasteBtn: false,
          langJson: store.getCache('langJson') || {},
          extendRightMenu: extendRightMenu
        } //滚动条悬浮
        ,
        autoAffixScroll: true //——————————操作列————————————
        ,
        colsSettingParam: colSettingParam,
        cancelCustomRightMenu: cancelCustomRightMenu,
        showWidthAndHeightConfig: showWidthAndHeightConfig,
        updateColumnHandle: this.updateColumnAfterSetting,
        key: this.state.key
      }, others, {
        //——————————操作列end————————————
        //空白列
        addBlankCol: addBlankCol,
        modalConfig: {
          langJson: store.getCache('langJson')
        }
      })) : null, Object(api_index_["isFunction"])(config.tableCustomerArea) && config.tableCustomerArea());
    }
  }]);

  return SimpleTable;
}(index_["BaseComponent"]), _temp)) || _class; // SimpleTable.createStroe = createStore;
// export default SimpleTable


SimpleTable_SimpleTable.displayName = 'SimpleTable';
SimpleTable_SimpleTable.useSimpleTable = useSimpleTable;
/* harmony default export */ var appTable_SimpleTable = __webpack_exports__["default"] = (SimpleTable_SimpleTable);

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