(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("react-dom"), require("@platform/table-core/index"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@platform/api/index", "@platform/base/index", "react-dom", "@platform/table-core/index"], factory);
	else if(typeof exports === 'object')
		exports["@platform/transfer-table/index"] = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("react-dom"), require("@platform/table-core/index"));
	else
		root["@platform/transfer-table/index"] = factory(root["React"], root["@platform/api/index"], root["@platform/base/index"], root["ReactDOM"], root["@platform/table-core/index"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1919);
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

/***/ 1919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","var":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(0);
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_);

// EXTERNAL MODULE: external {"root":"ReactDOM","var":"ReactDOM","commonjs":"react-dom","commonjs2":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_ = __webpack_require__(6);
var external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_);

// EXTERNAL MODULE: external "@platform/base/index"
var index_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@platform/api/index"
var api_index_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/platform/components/TransferTable/ellipsisToTooltip.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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





var ellipsisToTooltip_EllipsisToTooltip = /*#__PURE__*/function (_Component) {
  _inherits(EllipsisToTooltip, _Component);

  var _super = _createSuper(EllipsisToTooltip);

  function EllipsisToTooltip(props) {
    var _this;

    _classCallCheck(this, EllipsisToTooltip);

    _this = _super.call(this, props);
    _this.state = {
      visible: props.visible || false
    };
    return _this;
  }

  _createClass(EllipsisToTooltip, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      var selfDom = external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(this);
      var wrapperDom = selfDom && (selfDom.parentNode || selfDom.parentElement || selfDom);

      if (wrapperDom && wrapperDom.clientWidth < wrapperDom.scrollWidth || this.props.noEllipsis) {
        this.setState({
          visible: true
        });
      } else {
        this.setState({
          visible: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          other = _objectWithoutProperties(_this$props, ["children"]);

      return this.state.visible ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Tooltip"], _extends({}, other, {
        placement: "left",
        delay: 1
      }), children) : children;
    }
  }]);

  return EllipsisToTooltip;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);


// CONCATENATED MODULE: ./src/platform/components/TransferTable/methods.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function methods_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { methods_typeof = function _typeof(obj) { return typeof obj; }; } else { methods_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return methods_typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function methods_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = methods_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function methods_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var timeTypes = ['datepicker', 'NCTZDatePickerStart', 'NCTZDatePickerEnd', 'timepicker', 'datetimepicker', 'rangepicker', 'datePickerNoTimeZone'];
var displayTypes = ['select', 'radio', 'checkbox', 'refer'];

function flat(arr) {
  var ret = [];
  var dirty = false;
  arr.forEach(function (item) {
    if (Array.isArray(item)) {
      dirty = true;
      ret.push.apply(ret, _toConsumableArray(item));
    } else {
      ret.push(item);
    }
  });
  return dirty ? flat(ret) : ret;
} // 控制非选中行表格单元格的显示状态的复选框的勾选状态


function checkboxSwitchValue(value, editStatus, json) {
  if (editStatus) {
    var bool = !!(value === 'true' || value === 'Y' || value === true);
    return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Checkbox"], {
      disabled: true,
      checked: bool
    });
  } else {
    var _bool = value === 'true' || value === 'Y' || value === true ? json && json['page-transferTable-0020'] || '是' : json && json['page-transferTable-0021'] || '否';

    return _bool;
  }
} //转单页面，在修改查询条件查询的时候，已选数据放在已选页面，不请空，一下逻辑是对比已选数据是否存在于当前数据中，控制表头全选按钮的状态

function iscludeCurrentData(transferTable, headTableId) {
  console.time('测试用时');
  var selected = transferTable.selected,
      outerData = transferTable[headTableId].outerData,
      bodyData = transferTable[headTableId].bodyData,
      childSelData = selected.selectedData.childSelData,
      masterCheckedId = selected.masterCheckedId,
      isSelectAll = false,
      // 是否全选
  isIndeterminate = false; // 是否半选

  if (!outerData || !bodyData || !outerData.length) {
    return {
      isSelectAll: isSelectAll,
      isIndeterminate: isIndeterminate
    };
  }

  bodyData = bodyData.data; // 子表数据对象

  var unSelectAll = false; // 不是全选
  // 主子表计数

  var _iterator = _createForOfIteratorHelper(outerData),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var hValues = item.values || item;

      if (hValues.saga_status && hValues.saga_status.value === '1') {
        // eslint-disable-next-line no-continue
        continue;
      } // 子表计数  获取所有子表数据


      var key = item.rowId,
          bdc = childSelData[key] || {},
          bd = bodyData[key] || {
        rows: []
      },
          bdl = bd.rows.length,
          ioc = 0,
          // 当前主表下子表选中的数目
      sagaCount = 0;

      var _iterator2 = _createForOfIteratorHelper(bd.rows),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var i = _step2.value;
          var values = i.values || i;

          if (values.saga_status && values.saga_status.value === '1') {
            sagaCount++; // eslint-disable-next-line no-continue

            continue;
          }

          if (bdc[i.childId]) {
            // 如果有子表选中就是半选
            isIndeterminate = true; // 如果有已选数据  就计数
            // 每个主表下子表的已选数目

            ioc++;
          }
        } // 是否有主表数据选中

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (masterCheckedId.includes(key)) {
        // 已选的数据长度
        if (bdl === 0) {
          // 如果有条数据没有子表 且选中了
          isIndeterminate = true;
        } // 表格中已选子表数据与主表是否匹配


        if (bdl > 0 && ioc !== bdl - sagaCount) {
          // 有子表 但是子表没有全部选中 不能全选
          unSelectAll = true;
        }
      } else {
        // 如果主表没有选中
        if (bdl === 0) {
          // 而且没有子表  不能全选
          unSelectAll = true;
        } else {
          if (ioc !== bdl) {
            // 有子表 但是子表没有全部选中 不能全选
            unSelectAll = true;
          }
        }
      }
    } // 是否全选

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  isSelectAll = !unSelectAll;
  console.timeEnd('测试用时');
  console.log(isIndeterminate, isSelectAll);
  return {
    isSelectAll: isSelectAll,
    isIndeterminate: isIndeterminate
  };
}
/**
 * 根据表格行数动态计算表格的高度
 * @param {*Array} data 渲染转单表格的数据
 */

function getExpandTableHeight(data, isTotal, wrapper) {
  var tableBody = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  wrapper = wrapper || document;
  var expandTableHeight = 0;

  if (data && data.length) {
    var tableHead = wrapper.querySelector('.u-table-thead');
    var tbody = wrapper.querySelector('.u-table-tbody');
    var tableRow = tbody && tbody.querySelectorAll('.u-table-row')[0];
    var theadHeight = tableHead && tableHead.getBoundingClientRect().height;
    var trowHeight = tableRow && tableRow.getBoundingClientRect().height;
    var TotalRowHeight = isTotal ? 30 : 0; //合计行高度  合計行高度改爲了30

    var BodyMinHeight = 30; //UE定的表体最小高度为30

    var paddingHeight = 4 * 2; //上下padding为 2

    var scrollBarHeight = isTotal ? 16 : 8; // 预留滚动条高度

    var b = Object(api_index_["myBrowser"])();
    scrollBarHeight = b === 'Firefox' || b === 'IE' ? isTotal ? 14 * 2 : 14 : scrollBarHeight; // console.log(isTotal, scrollBarHeight);

    if (tableRow && theadHeight) {
      var baseHeight = theadHeight + paddingHeight + TotalRowHeight + scrollBarHeight; // let baseHeight = theadHeight + TotalRowHeight;

      if (data.length < 11) {
        //最多展示10行
        if (data.length * trowHeight < BodyMinHeight) {
          expandTableHeight = BodyMinHeight + baseHeight;
        } else {
          expandTableHeight = data.length * trowHeight + baseHeight;
        }
      } else {
        expandTableHeight = 10 * trowHeight + baseHeight;
      }

      if (tableBody) {
        return data.length > 9 ? expandTableHeight - baseHeight : '';
      }

      return expandTableHeight;
    } else {
      return 0;
    }
  }
}
/**
 * 列设置后更新模板
 * @param {*Array} newColumn 列设置后的模板
 * @param {*} areaCode 表格的区域id
 */

function updateColumnAfterSetting(newColumn, areaCode) {
  var _this;

  if (this.state.meta) {
    _this = this;
  } else if (this.props && this.props._this) {
    _this = this.props._this;
  }

  var meta = _this.state.meta;

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
    sortIndexArr.forEach(function (item, index) {
      finalColumn[item] = sortObjArr[index];
    });
    meta[areaCode].items = finalColumn;

    _this.setState({
      meta: meta
    });
  }
}
/**
* 获取表格底层列设置需要的模板参数

* @param {*String} areaCode 主表/拉平表 的区域编码
*/

function getcolsSettingParam(meta, areaCode) {
  var areaCodeMeta = meta && meta[areaCode] || {};
  return {
    //appcode: pageTo.getAppCode(), //应用编码
    //pagecode: pageTo.getPageCode(), //页面编码
    appcode: areaCodeMeta.appcode || api_index_["pageTo"].getAppCode(),
    pagecode: areaCodeMeta.pagecode || api_index_["pageTo"].getPageCode(),
    //页面编码
    code: areaCodeMeta.templateCode || meta && meta.code,
    //模板编码
    pageid: areaCodeMeta.pageid || meta && meta.pageid,
    //模板主键   
    areaCode: areaCode,
    //主表/拉平表 的区域编码
    areaId: areaCodeMeta.oid //区域主键

  };
}
/**
 * 保存排序状态
 */

function saveSortStatus(transferTable, headTableId, sortInfoObj, sortData) {
  var currentTransferTable = transferTable[headTableId],
      currentTable = currentTransferTable[headTableId],
      selectedTable = currentTransferTable.selected,
      allSelectedTable = transferTable.allSelected;
  var parentRowId = sortData[0].parentRowId;
  currentTransferTable.sortInfoObj = sortInfoObj; // 判断表格类型 判断表格状态

  if (selectedTable.selectedShow || allSelectedTable.selectedShow) {
    if (currentTable.showFullTable || allSelectedTable.showFullTable) {
      selectedTable.fullSortInfoObj = sortInfoObj;
    } else if (parentRowId) {
      selectedTable[parentRowId] = {};
      selectedTable[parentRowId].childSortInfoObj = sortInfoObj;
    } else {
      selectedTable.mainSortInfoObj = sortInfoObj;
    }
  } else {
    if (currentTable.showFullTable || allSelectedTable.showFullTable) {
      currentTable.fullSortInfoObj = sortInfoObj;
    } else if (parentRowId) {
      currentTable[parentRowId] = {};
      currentTable[parentRowId].childSortInfoObj = sortInfoObj;
    } else {
      currentTable.mainSortInfoObj = sortInfoObj;
    }
  }
} // 排序转单表 主子表数据


function sortTransferData(sortData, headTableId, _this, sortInfoObj) {
  var transferTable = Object.assign({}, _this.state.transferTable); // 这里是浅拷贝 所以才可以导致下面可以被静默更新

  var currentTransferTable = transferTable[headTableId][headTableId],
      outerData = currentTransferTable.outerData,
      bodyData = currentTransferTable.bodyData.data,
      showFullTable = currentTransferTable.showFullTable;
  var newOuterData = [],
      parentRowId = sortData[0].parentRowId,
      newBodyData = {}; // 拉平时略微复杂  进行内外两层排序

  if (showFullTable) {
    if (outerData.length) {
      // let outerDataSign = {},
      //     bodyDataSign = {};
      // sortData.map(item => {
      //     // 没有子集
      //     if (!item.parentRowId || item.key === item.headKey) {
      //         // 这个find的方式去找  非常的不合适
      //         !outerDataSign[item.key] && newOuterData.push(outerData.find(v => { return v.rowId === item.key; }));
      //         outerDataSign[item.key] = item.key;
      //         !newBodyData[item.key] && (newBodyData[item.key] = { rows: [] });
      //     } else {
      //         // 这个find的方式去找  非常的不合适
      //         !outerDataSign[item.parentRowId] && newOuterData.push(outerData.find(v => { return v.rowId === item.parentRowId; }));
      //         outerDataSign[item.parentRowId] = item.parentRowId;
      //         !newBodyData[item.parentRowId] && (newBodyData[item.parentRowId] = { rows: [] });
      //         // 这个find的方式去找  非常的不合适
      //         if (!bodyDataSign[item.key]) {
      //             // 先搭好架子
      //             !bodyDataSign[item.key] && newBodyData[item.parentRowId].rows.push(bodyData[item.parentRowId].rows.find(v => { return v.childId === item.key; }));
      //             bodyDataSign[item.key] = item.key;
      //         }
      //     }
      // });
      // currentTransferTable.outerData = newOuterData;
      // currentTransferTable.bodyData.data = newBodyData;
      // console.log(newBodyData, newOuterData);
      currentTransferTable.fullSortData = sortData;

      _this.setState({
        transferTable: transferTable
      });
    }

    return newOuterData;
  } //当主子表排序之后,就初始化拉平表的排序信息


  delete currentTransferTable.fullSortData;
  delete currentTransferTable.fullSortInfoObj; //用parentRowId判断点击的是主表的数据还是子表的数据，有parentRowId说明排序子表

  if (parentRowId) {
    // 主子表  子表排序
    newBodyData = Object.assign({}, bodyData);

    if (bodyData) {
      var attrs = Object.keys(bodyData);
      var sortChanged = false;
      attrs.forEach(function (key) {
        if (key === parentRowId) {
          sortChanged = true;
        }
      });

      if (sortChanged) {
        newBodyData[parentRowId].rows = sortData.map(function (val) {
          var value = {
            status: 0,
            values: val,
            childId: val.key
          };
          return value;
        });
        currentTransferTable.bodyData.data = newBodyData;

        _this.setState({
          transferTable: transferTable
        });
      }
    }
  } else {
    if (outerData.length) {
      // 主子表  主表排序
      var isSort = sortData.some(function (val, index) {
        if (outerData[index].values.key !== val.key) {
          return true;
        }
      });

      if (isSort) {
        newOuterData = sortData.map(function (val) {
          var value = {
            status: '0',
            values: val,
            rowId: val.key
          };
          return value;
        });
        currentTransferTable.outerData = newOuterData; // 这里不能直接更新 会导致 排序图标状态出错  如果要更新就要参考cardtable 动态设置排序状态

        _this.setState({
          transferTable: transferTable
        });
      }
    }
  }
} // 排序转单已选列表 主子表数据


function sortTransferSelectedData(sortData, headTableId, _this, sortInfoObj) {
  var transferTable = Object.assign({}, _this.state.transferTable); // 这里是浅拷贝 所以才可以导致下面可以被静默更新

  var currentTransferTable = transferTable[headTableId][headTableId],
      outerData = currentTransferTable.outerData,
      bodyData = currentTransferTable.bodyData.data,
      showFullTable = currentTransferTable.showFullTable,
      selectedTable = transferTable[headTableId].selected,
      allSelectedTable = transferTable.allSelected;
  var newOuterData = [],
      parentRowId = sortData[0].parentRowId,
      newBodyData = {},
      selectedData = [];

  if (selectedTable.selectedShow) {
    selectedData = transferTable[headTableId].selected; // console.log('单选列表排序', selectedData, sortData);
  }

  if (allSelectedTable.selectedShow) {
    selectedData = transferTable.allSelected; // console.log('全选列表排序', selectedData, sortData);
  }
}
/**
 * 点击排序之后把排序后的数据重新放在state上
 * @param {*} sortData 排序之后底层返回的数据
 */


function updateTransferDataAfterSort(sortData, headTableId, _this, sortInfoObj) {
  var transferTable = _this.state.transferTable,
      currentTransferTable = transferTable[headTableId],
      // currentTable = currentTransferTable[headTableId],
  selectedTable = currentTransferTable.selected,
      allSelectedTable = transferTable.allSelected;

  if (!sortData || !sortData.length || !sortInfoObj) {
    return false;
  } // 保存排序状态


  saveSortStatus(transferTable, headTableId, sortInfoObj, sortData); // 判断表格类型 判断表格状态

  if (selectedTable.selectedShow || allSelectedTable.selectedShow) {
    // 已选列表
    sortTransferSelectedData(sortData, headTableId, _this, sortInfoObj); // console.log(selectedTable, allSelectedTable);
  } else {
    // 主转单表
    sortTransferData(sortData, headTableId, _this, sortInfoObj);
  }
}
/**
 * 获取body的clientHeight值
 * 备注：转单内部使用
 */

function getScrollTop() {
  var scrollTop = 0;

  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.clientHeight;
  } else if (document.body) {
    scrollTop = document.body.clientHeight;
  }

  return scrollTop;
}
/**
 *  设置转单组件自适应宽高
 * @param {*Boolean} isIntl 页面是否初始化 （didMount的时候会设置为true）
 * @param {*Boolean} windowResize 窗口是否在变化宽高
 * @param {*Boolean} selectedShow 已选列表显示状态
 * @param {*Number} transferTableTop 转单外层容器距在可视区的top值
 * @param {*Number} windowHeight 页面可视区的高度clientHeight
 * 备注：转单内部使用
 */

function resizeEvent(isIntl, windowResize, selectedShow, transferTableTop, windowHeight, that) {
  if (isIntl || windowResize) {
    // 初始化或者窗口缩小的时候重新计算
    that.setSelectListHeightIsDone = false;
    that.setListHeightIsDone = false;
    that.setModalHeightIsDone = false;
  }

  that.setTimeIndex = setTimeout(function () {
    if (that.doing) that.transferTableIsInModal(); // 判断转单组件是否存在于弹框之内

    if (that.transfertableMainIsModalSChild) {
      // 如果在弹框中的时候 需要先设置弹框的body高度 再设置转单的高度
      if (!that.setModalHeightIsDone) {
        var modalBodySelector = document.querySelector('.u-modal-body'); // 先给modal设置高度

        if (modalBodySelector) {
          modalBodySelector.style.padding = '0 15px';
          modalBodySelector.style.height = windowHeight - 70 * 2 + 'px'; // 模态框header和足部的高度，以及距离屏幕顶部底部的距离 总共140
          // 解决ie下  弹窗不计算的问题 by bbqin

          var dialogDom = modalBodySelector.parentElement && modalBodySelector.parentElement.parentElement; //(u-modal-dialog)

          dialogDom.style.overflow = 'auto';
        }

        that.setState({
          modalBodyHeight: windowHeight - 70 * 2
        }, function () {
          that.setModalHeightIsDone = true; // 因modal中转单会有个过渡间断才能在dom中的位置固定， 所以需要初始化的时候加个延迟

          if (isIntl) {
            that.showTransferTableTimer = setTimeout(function () {
              that.setModalTransferTableHeight();
            }, 200);
          } else {
            that.setModalTransferTableHeight();
          }
        });
      } else {
        that.setModalTransferTableHeight();
      }
    } else {
      var transferTableHeight = 0; // 判断是设置全部列表的高度还是设置已选列表的高度

      if (selectedShow) {
        if (!that.setSelectListHeightIsDone) {
          transferTableHeight = windowHeight - transferTableTop;
          that.setState({
            transferTableHeight: transferTableHeight,
            selectedListHeight: transferTableHeight
          }, function () {
            that.setSelectListHeightIsDone = true;
          });
        }
      } else {
        if (!that.setListHeightIsDone) {
          transferTableHeight = windowHeight - transferTableTop;
          that.setState({
            transferTableHeight: transferTableHeight,
            listHeight: transferTableHeight
          }, function () {
            that.setListHeightIsDone = true;
          });
        }
      }
    }
  });
}
/**
 * 多来源有全部页签共用底部灰条的时候，监听多来源子的window.onresize后灰条计算的宽度
 * width:多来源的子的父级容器的宽度 Number
 * isMultiChild：转单是否为多来源的子 Boolean
 * 备注：转单内部使用
 */

function methods_getMultiChildChangeWidth(width, isMultiChild) {
  if (isMultiChild && width) {
    this.setState({
      fixedWidth: width
    });
  }
}
/**
 * 点击表头部排序图标排序对列进行排序
 * @param {*} val 被排序的每一行的详细数据
 * @param {*Object} sortType: 
 *         { mode:'single', backSource:false ,sortFun:(a)=> {console.log(a)}}
*                   mode：值为multiple'(多列排序) 或'single'(单列排序)
                   backSource：false是前端排序，值为true为后端排序,默认false
                   sortFun：后端排序的回调函数
 * @param {*Function} customSortRule 自定义排序规则
* 备注：转单内部使用
 */

function sortColumn(val, sortType, customSortRule) {
  var attrcode = val.attrcode,
      valType = val.itemtype;

  if (!Object(api_index_["isFunction"])(customSortRule)) {
    switch (true) {
      case valType === 'number':
        val.sorter = function (front, behind) {
          var frontValue = front[attrcode] ? front[attrcode].value || '0' : '0';
          var behindValue = behind[attrcode] ? behind[attrcode].value || '0' : '0';
          return Number(frontValue) - Number(behindValue);
        };

        break;

      case timeTypes.includes(valType):
        val.sorter = function (front, behind) {
          var frontValue = front[attrcode] ? front[attrcode].value || '0' : '0';
          var behindValue = behind[attrcode] ? behind[attrcode].value || '0' : '0';
          return Number(new Date(frontValue).getTime()) - Number(new Date(behindValue).getTime());
        };

        break;

      case displayTypes.includes(valType):
        val.sorter = function (front, behind) {
          var frontValue = String(front[attrcode] ? front[attrcode].display || '' : '');
          var behindValue = String(behind[attrcode] ? behind[attrcode].display || '' : ''); // if (behindValue > frontValue) {
          //     return -1;
          // } else if (behindValue < frontValue) {
          //     return 1;
          // } else {
          //     return 0;
          // }

          return frontValue.localeCompare(behindValue);
        };

        break;

      case valType === 'label':
        val.sorter = function (front, behind) {
          var fvalue = front[attrcode] ? front[attrcode].value || '' : '';
          var fdisplay = front[attrcode] ? front[attrcode].display : '';
          var bvalue = behind[attrcode] ? behind[attrcode].value || '' : '';
          var bdisplay = behind[attrcode] ? behind[attrcode].display : '';
          var frontValue = String(Object(api_index_["isNullOrVoid"])(fdisplay) ? fvalue : fdisplay);
          var behindValue = String(Object(api_index_["isNullOrVoid"])(bdisplay) ? bvalue : bdisplay); // if (behindValue > frontValue) {
          //     return -1;
          // } else if (behindValue < frontValue) {
          //     return 1;
          // } else {
          //     return 0;
          // }

          return frontValue.localeCompare(behindValue);
        };

        break;

      case attrcode !== 'numberindex' && attrcode !== 'opr':
        val.sorter = function (front, behind) {
          var frontValue = String(front[attrcode] ? front[attrcode].value || '' : '');
          var behindValue = String(behind[attrcode] ? behind[attrcode].value || '' : ''); // if (behindValue > frontValue) {
          //     return -1;
          // } else if (behindValue < frontValue) {
          //     return 1;
          // } else {
          //     return 0;
          // }

          return frontValue.localeCompare(behindValue);
        };

        break;
    }
  } else {
    customSortRule(val);
  }
  /**
   * columnInfo:排序的列的模板信息
   * type:排序的类型
   */


  val.sorterClick = function (columnInfo, type) {
    //排序的回调函数
    if (sortType && sortType.backSource === true && Object(api_index_["isFunction"])(sortType.sortFun)) {
      //后端排序
      sortType.sortFun(columnInfo, type);
    }
  };
}
/**
 * 把字数加千分位逗号或者去逗号
 * @param {*Number or String} val 传入需要转化的为带千分号逗号的字符串 或者需要转为数字的为带千分号逗号的字符串
 * @param {*Number or String} needType 转出的类型
 * 备注：转单内部使用
 */

function thounsandTransfer(val, needType) {
  var newvalN, newvalS;

  if (val && val !== 'NaN' && val !== 'undefined' && val !== 'null') {
    //传入的值存在
    if (needType === 'number' || needType === 'string') {
      if (String(val).length > 4) {
        if (typeof val === 'number' && needType === 'string') {
          //数字转字符串
          val = String(val);
          var MTthounsand = val.slice(0, 3),
              LTthounsand = val.slice(3, val.length);
          newvalS = "".concat(MTthounsand, ",").concat(LTthounsand);
          return newvalS;
        } else if (typeof val === 'string' && needType === 'number') {
          //字符串转数字
          newvalN = Number(String(val).split(',').join(''));
          return newvalN;
        } else {
          return val;
        }
      } else {
        return val;
      }
    } else {
      //需要转为的不是数字或者字符串类型
      return null;
    }
  } else {
    //传入的值不存在
    if (needType === 'number') {
      return 0;
    } else if (needType === 'string') {
      return '';
    } else {
      //需要转为的不是数字或者字符串类型
      return null;
    }
  }
}
/**
 * 获取当前页签转单表格所有数据
 * @param {*String} id 当前页签转单的主表ID 【创建时候配置的headTableId】
 */

function getTransferTableValue(id) {
  if (id) {
    return this.state.transferTable[id];
  } else {
    return this.state.transferTable;
  }
}
/**
 * 获取表格所有勾选数据
 * @param {*String} dataSource 缓存ID (如果传了dataSource则会先从缓存取获取表格所有勾选数据)
 * @param {*Boolean} isDeepClone 是否深克隆
 */

function getTransferTableSelectedValue(dataSource) {
  var isDeepClone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var dataCache = null;
  var transferTable = null;

  if (dataSource) {
    dataCache = api_index_["ViewModel"].getData(dataSource);
    transferTable = dataCache ? dataCache.transferTable : null;
  }

  var _this$state$transferT = this.state.transferTable,
      allSelected = _this$state$transferT.allSelected,
      transfers = methods_objectWithoutProperties(_this$state$transferT, ["allSelected"]);

  if (transferTable) {
    transfers = transferTable;
  }

  if (!transfers) {
    if (!dataSource) {
      return console.error('未传dataSource');
    }

    var _ViewModel$getData = api_index_["ViewModel"].getData(dataSource),
        _allSelected = _ViewModel$getData.allSelected,
        transfers1 = methods_objectWithoutProperties(_ViewModel$getData, ["allSelected"]);

    var result = {};

    for (var _i = 0, _Object$keys = Object.keys(transfers1); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];

      if (!result.hasOwnProperty(key)) {
        result[key] = [];
      }

      var masterSelData = transfers1[key].selected.selectedData.masterSelData;
      var childSelData = transfers1[key].selected.selectedData.childSelData;
      var bodyTableId = transfers1[key][key].bodyTableId;

      if (transfers1[key][key].tableType === 'simple') {
        // 单表
        for (var _i2 = 0, _Object$keys2 = Object.keys(masterSelData); _i2 < _Object$keys2.length; _i2++) {
          var id = _Object$keys2[_i2];
          result[key].push(masterSelData[id].data);
        }
      } else {
        var _loop = function _loop() {
          var headKey = _Object$keys3[_i3];
          var headArr = [],
              bodyArr = [];

          if (headArr.length == 0) {
            headArr.push({
              values: masterSelData[headKey].data
            });
          }

          Object.values(childSelData[headKey]).forEach(function (item) {
            var val = item.data.values || item.data;
            bodyArr.push({
              values: val
            });
          });
          result[key].push({
            head: _defineProperty({}, key, {
              rows: headArr
            }),
            body: _defineProperty({}, bodyTableId, {
              rows: bodyArr
            })
          });
        };

        //主子表
        for (var _i3 = 0, _Object$keys3 = Object.keys(childSelData); _i3 < _Object$keys3.length; _i3++) {
          _loop();
        }
      }
    }

    return JSON.parse(JSON.stringify(result));
  } else {
    var _result = {};

    for (var _i4 = 0, _Object$keys4 = Object.keys(transfers); _i4 < _Object$keys4.length; _i4++) {
      var _key = _Object$keys4[_i4];

      if (_key !== 'allSelected') {
        if (!_result.hasOwnProperty(_key)) {
          _result[_key] = [];
        }

        var _masterSelData = transfers[_key].selected.selectedData.masterSelData;
        var _childSelData = transfers[_key].selected.selectedData.childSelData;
        var _bodyTableId = transfers[_key][_key].bodyTableId;

        if (transfers[_key][_key].tableType === 'simple') {
          // 单表
          for (var _i5 = 0, _Object$keys5 = Object.keys(_masterSelData); _i5 < _Object$keys5.length; _i5++) {
            var _id = _Object$keys5[_i5];

            _result[_key].push(_masterSelData[_id].data);
          }
        } else {
          var _loop2 = function _loop2() {
            var headKey = _Object$keys6[_i6];
            var headArr = [],
                bodyArr = [];

            if (headArr.length == 0) {
              headArr.push({
                values: _masterSelData[headKey].data
              });
            }

            Object.values(_childSelData[headKey]).forEach(function (item) {
              var val = item.data.values || item.data;
              bodyArr.push({
                values: val
              });
            });

            _result[_key].push({
              head: _defineProperty({}, _key, {
                rows: headArr
              }),
              body: _defineProperty({}, _bodyTableId, {
                rows: bodyArr
              })
            });
          };

          //主子表
          for (var _i6 = 0, _Object$keys6 = Object.keys(_childSelData); _i6 < _Object$keys6.length; _i6++) {
            _loop2();
          }
        }
      }
    }

    return isDeepClone ? JSON.parse(JSON.stringify(_result)) : _result;
  }
}
/**
 * 设置转单表格数据
 * @param {*String} id         转单缓存数据的key
 * @param {*String} childCode 子表ID
 * @param {*Array} newData    转单原数据 [{},{},...]
 * @param {*String/Array} rowId     主表主键字段 如果是全部多来源需要传数组，其他页签主表主键放到数组中
 * @param {*String/Array} childId   子表主键字段 如果是全部多来源需要传数组，其他页签子表主键放到数组中
 * @param {*Function} callback 
 */

function setTransferTableValue(id, childCode, newData, rowId, childId, callback) {
  // this.state.transferTable[id].selected = {
  //     selectedShow: false,
  //     masterAmount: 0, //主表已选数量
  //     bodyAmount: 0, //子表已选数量
  //     masterCheckedId: [], //存放已选主表id，用于复选框半选
  //     selectedData: {
  //         selAll: false,
  //         masterSelData: {},
  //         childSelData: {}
  //     }
  // };
  this.state.transferTable[id].selected.selectedData.selAll = false;

  if (!this.state.transferTable.hasOwnProperty('allSelected')) {
    // let tabActiveIndex = this.state.transferTable['allSelected'].activeTab
    this.state.transferTable['allSelected'] = {
      activeTab: '0',
      //当前高亮tab
      selectedShow: false,
      //显示已选列表
      masterAmount: 0,
      //主表已选数量
      bodyAmount: 0,
      //子表已选数量
      masterCheckedId: [],
      //存放已选主表id，用于复选框半选
      selIds: {},
      //存放其他页签的主子表id
      showFullTable: false,
      //已选列表中是否显示主子拉平
      selectedData: {
        selAll: false,
        masterSelData: {},
        childSelData: {}
      }
    };
  } // 取已选数据进行对比操作


  var childSelData = this.state.transferTable[id].selected.selectedData.childSelData || {};
  var masterSelData = this.state.transferTable[id].selected.selectedData.masterSelData || {};
  var allChildSelData = this.state.transferTable.allSelected.selectedData.childSelData || {};
  var allMasterSelData = this.state.transferTable.allSelected.selectedData.masterSelData || {};
  var outerData = [];
  var bodyData = {};
  var rowKey, childKey;
  var relationship = {}; // 记录行数据是表头还是表体或者单表的某条数据， 方便以后通过接口设置勾选数据等操作

  if (typeof rowId === 'string' && typeof childId === 'string') {
    rowKey = rowId;
    childKey = childId;
  } //表格类型为单表


  if (this.state.transferTable[id][id].tableType === 'simple') {
    if (newData.rows && newData.rows.length > 0) {
      newData.rows.map(function (item, index) {
        item.rowId = item.values[rowKey].value;
        item.values.key = item.rowId;
        item.values.rowIndex = index;
        relationship[item.rowId] = 'simple';
        outerData.push(item); // 数据同步到已选  bbqin

        if (masterSelData[item.rowId] && masterSelData[item.rowId]['data']) {
          item.values.headTs = item.values.ts; // 其实应该使用合并数据的 但是这里判断太麻烦

          masterSelData[item.rowId]['data'] = JSON.parse(JSON.stringify(item.values || {}));
        }

        if (allMasterSelData[item.rowId] && allMasterSelData[item.rowId]['data']) {
          item.values.headTs = item.values.ts; // 其实应该使用合并数据的 但是这里判断太麻烦

          allMasterSelData[item.rowId]['data'] = JSON.parse(JSON.stringify(item.values || {}));
        }
      });
    }
  } else {
    if (newData && newData.length > 0) {
      newData.forEach(function (item, index) {
        var val = item.head[id].rows[0]; //全部多来源主键字段不唯一，需要传入其他页签主键字段

        if (Array.isArray(rowId)) {
          rowId.map(function (id) {
            if (Object.keys(val.values).includes(id)) {
              rowKey = id;
            }
          });
        }

        if (!val.rowId && val.rowId !== 0) {
          if (!val.values[rowKey]) {
            console.error('setTransferTableValue方法中，主表Id没找到');
            return false;
          }

          val.rowId = val.values[rowKey].value;
        }

        val.values.key = val.rowId;
        val.values.rowIndex = index;
        relationship[val.rowId] = 'head';
        outerData.push(val); // 数据同步到已选  bbqin

        if (masterSelData[val.rowId] && masterSelData[val.rowId]['data']) {
          val.values.headTs = val.values.ts; // 该死的ts  其实应该使用合并数据的 但是这里判断太麻烦

          masterSelData[val.rowId]['data'] = JSON.parse(JSON.stringify(val.values || {}));
        }

        if (allMasterSelData[val.rowId] && allMasterSelData[val.rowId]['data']) {
          val.values.headTs = val.values.ts; // 该死的ts 其实应该使用合并数据的 但是这里判断太麻烦

          allMasterSelData[val.rowId]['data'] = JSON.parse(JSON.stringify(val.values || {}));
        }

        var bodyDataRows = item.body[childCode].rows.map(function (elem, ii) {
          //全部多来源主键字段不唯一，需要传入其他页签子表主键字段
          if (Array.isArray(childId)) {
            childId.map(function (cid) {
              if (Object.keys(elem.values).includes(cid)) {
                childKey = cid;
              }
            });
          }

          if (!elem.childId && elem.childId !== 0) {
            if (!elem.values[childKey]) {
              console.error('setTransferTableValue方法中，子表Id没找到'); //return false
            }

            elem.childId = elem.values[childKey] && elem.values[childKey].value;
          }

          elem.values.key = elem.childId;
          elem.values.rowIndex = ii;
          elem.values.parentRowId = val.rowId; //根据索引设置行数据的api要用到

          relationship[elem.childId] = 'body'; // 数据同步到已选  bbqin

          if (childSelData[val.rowId] && childSelData[val.rowId][elem.childId] && childSelData[val.rowId][elem.childId]['data']) {
            var od = childSelData[val.rowId][elem.childId]['data'] || {};
            childSelData[val.rowId][elem.childId]['data'] = JSON.parse(JSON.stringify(od.values ? elem : elem.values));
          }

          if (allChildSelData[val.rowId] && allChildSelData[val.rowId][elem.childId] && allChildSelData[val.rowId][elem.childId]['data']) {
            var aod = allChildSelData[val.rowId][elem.childId]['data'] || {};
            allChildSelData[val.rowId][elem.childId]['data'] = JSON.parse(JSON.stringify(aod.values ? elem : elem.values));
          }

          return elem;
        });
        bodyData[val.rowId] = {
          rows: bodyDataRows
        };
      });
    }
  } //保存服务端原始数据，用于afterEvent最后一个参数
  // this.serverOuterData = {
  //     ...this.serverOuterData,
  //     [id]: JSON.parse(JSON.stringify(outerData))
  // };
  // this.serverBodyData = {
  //     ...this.serverBodyData,
  //     [id]: JSON.parse(JSON.stringify(bodyData))
  // };


  this.state.transferTable[id][id].masterId = rowKey;
  this.state.transferTable[id][id].childId = childId;
  this.state.transferTable[id][id].outerData = outerData;
  this.state.transferTable[id][id].bodyData = {
    data: bodyData
  };
  linkage.call(this, id);

  if (this.transferTableDataSource) {
    api_index_["ViewModel"].setData("".concat(this.transferTableDataSource, "_ID"), {
      headPk: rowId,
      bodyPk: childId
    });
  }

  this.myState.transferTableRelationship = relationship; // 记录行数据是表头还是表体或者单表的某条数据， 方便以后通过接口设置勾选数据等操作

  this.setState({
    transferTable: this.state.transferTable
  }, function () {
    callback && callback();
  });
}
/*
"refreshData": [{
  "saga_status": "1",
  "mny": "123",
  "cbillid": "123124",
  "ts": "2019-10-28 12:23:23"
 }, {
  "saga_status": "1",
  "mny": "444",
  "cbillid": "44444",
  "ts": "2019-10-28 12:23:23"
 }]
 */

/**34
 *  根据wensocket推送值，更新表格数据
 * refreshData
 */

function updateDataByRefresh(tableId, pkname, refreshData, saga_errormesg) {
  var _this2 = this;

  var myTable = this.state.transferTable[tableId][tableId];

  if (typeof tableId == 'string' && myTable && Array.isArray(refreshData)) {
    var _ret = function () {
      var outerData = myTable.outerData,
          bodyData = myTable.bodyData,
          oLen = outerData.length,
          refreshLen = refreshData.length,
          bLen = bodyData && bodyData.data && Object.keys(bodyData.data),
          RD = {};
      if (!oLen || !refreshLen) return {
        v: void 0
      }; // 数据转型

      refreshData.forEach(function (item, index) {
        var obj = {};

        for (var key in item) {
          if (item.hasOwnProperty(key)) {
            var val = item[key];
            obj[key] = {
              value: val.value || val,
              display: val.display || val
            };
          }
        }

        RD[item[pkname]] = obj;
      }); // 外层数据 过滤

      outerData.forEach(function (item, index) {
        var values = item.values,
            pkn = values[pkname],
            pkv = pkn && pkn.value,
            rd = RD[pkv];

        if (rd && pkn) {
          // 合并數據
          values = Object.assign(values, rd); //有错误信息时，将错误信息数据放表格行

          rd['saga_status'] === '1' && (values.saga_errormesg = saga_errormesg);
        }
      }); // 内存数据过滤

      if (bLen) {
        bodyData = bodyData.data;

        for (var key in bodyData) {
          if (bodyData.hasOwnProperty(key)) {
            var element = bodyData[key];
            element.rows.forEach(function (item, index) {
              var values = item.values,
                  pkn = values[pkname],
                  pkv = pkn && pkn.value,
                  rd = RD[pkv];

              if (rd && pkn) {
                // 合并數據
                values = Object.assign(values, rd); //有错误信息时，将错误信息数据放表格行

                rd['saga_status'] === '1' && (values.saga_errormesg = saga_errormesg);
              }
            });
          }
        }
      }

      _this2.setState({
        transferTable: _this2.state.transferTable
      });
    }();

    if (methods_typeof(_ret) === "object") return _ret.v;
  }
}
/**
 * 更新转单表格数据
 * @param {*String} id 转单主表ID
 * @param {*String} childCode 子表ID
 * @param {*Object} newData 转单原数据
 * @param {*String/Array} rowId 主表主键字段 如果是全部多来源需要传数组，其他页签主表主键放到数组中
 * @param {*String/Array} childId 子表主键字段 如果是全部多来源需要传数组，其他页签子表主键放到数组中
 */

function updateTransferTableValue(id, childCode, newData, rowId, childId) {
  var bodyAmount = this.state.transferTable[id].selected.bodyAmount;
  var childSelData = this.state.transferTable[id].selected.selectedData.childSelData;
  var bodyData = this.state.transferTable[id][id].bodyData.data;

  for (var _i7 = 0, _Object$entries = Object.entries(newData); _i7 < _Object$entries.length; _i7++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i7], 2),
        key = _Object$entries$_i[0],
        values = _Object$entries$_i[1];

    if (bodyData.hasOwnProperty(key)) {
      var res = bodyData[key].rows.reduce(function (total, nowItem, index) {
        total[nowItem.childId] = index;
        return total;
      }, {});
      var arr = Object.keys(res);

      for (var _i8 = 0, _Object$keys7 = Object.keys(values); _i8 < _Object$keys7.length; _i8++) {
        var item = _Object$keys7[_i8];

        if (arr.includes(item)) {
          var index = res[item];
          bodyData[key].rows[index].values = _objectSpread(_objectSpread({}, bodyData[key].rows[index].values), values[item]);
        } else {
          bodyData[key].rows.push({
            status: 0,
            values: _objectSpread({
              headKey: key,
              key: item
            }, values[item]),
            childId: item
          });
        }
      }
    }

    if (childSelData.hasOwnProperty(key)) {
      for (var _i9 = 0, _Object$keys8 = Object.keys(values); _i9 < _Object$keys8.length; _i9++) {
        var _item = _Object$keys8[_i9];

        if (childSelData[key].hasOwnProperty(_item)) {
          childSelData[key][_item].data = {
            status: 0,
            values: _objectSpread(_objectSpread({}, childSelData[key][_item].data.values), newData[key][_item]),
            childId: _item
          };
        } else {
          childSelData[key][_item] = {
            data: {
              status: 0,
              values: _objectSpread({
                headKey: key,
                key: _item
              }, newData[key][_item]),
              childId: _item
            },
            sel: true
          };
          this.state.transferTable[id].selected.bodyAmount = bodyAmount + 1;
        }
      }
    }
  }

  this.setState({
    transferTable: this.state.transferTable
  });
}
/**
 * 插入转单表格数据
 * [{rowId: "1001B110000000006RS1", status: "0", values: {}, children: [{ childId: "1001B110000000006RS1", status: "0", values: {} }] }]
 * @param {*String} outerTableId 转单主表ID
 * @param {*String} bodyTableId 子表ID
 * @param {*Object} newData 转单原数据 []
 * @param {*String/Array} outerRowId 主表主键字段 如果是全部多来源需要传数组，其他页签主表主键放到数组中
 * @param {*String/Array} childId 子表主键字段 如果是全部多来源需要传数组，其他页签子表主键放到数组中
 */

function insertTransferTableValue(outerTableId, bodyTableId) {
  var newData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var outerRowId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'rowId';
  var bodyId = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'childId';

  if (Object.prototype.toString.call(newData) !== "[object Array]") {
    return console.warn('invalid data, please check');
  }

  var transferTable = this.state.transferTable;
  var bodyData = this.state.transferTable[outerTableId][outerTableId].bodyData.data; // 兼容多来源数据格式

  if (!bodyData) {
    this.state.transferTable[outerTableId][outerTableId].bodyData = {
      data: {}
    };
    bodyData = this.state.transferTable[outerTableId][outerTableId].bodyData.data;
  }

  var outerData = this.state.transferTable[outerTableId][outerTableId].outerData; // 取已选数据进行对比操作

  var childSelData = this.state.transferTable[outerTableId].selected.selectedData.childSelData || {};
  var masterSelData = this.state.transferTable[outerTableId].selected.selectedData.masterSelData || {};
  var allChildSelData = this.state.transferTable.allSelected.selectedData.childSelData || {};
  var allMasterSelData = this.state.transferTable.allSelected.selectedData.masterSelData || {}; // 主表拉成obj

  var outerDataObj = outerData.reduce(function (prevResult, current) {
    var values = current.values,
        rowId = current.rowId,
        newOuterRowId = rowId || (values[outerRowId] || {}).value;
    prevResult[newOuterRowId] = current;
    return prevResult;
  }, {});
  console.log(newData, transferTable, bodyData, outerData, outerDataObj); // 插入数据

  newData.forEach(function (outerRow) {
    var rowId = outerRow.rowId,
        values = outerRow.values,
        index = outerRow.index,
        children = outerRow.children,
        newOuterRowId = rowId || (values[outerRowId] || {}).value; // 父级不存在 放置父级 存在 是否要更新

    if (!outerDataObj[newOuterRowId]) {
      var newOuterRow = JSON.parse(JSON.stringify(outerRow));
      newOuterRow.rowId = newOuterRowId;
      delete newOuterRow.children;
      newOuterRow.values.key = newOuterRowId;
      newOuterRow.values.rowIndex = index || outerData.length;
      newOuterRow.values.headKey = newOuterRowId; // newOuterRow.values.headTs = newOuterRow.values.ts;

      outerData.push(newOuterRow);
    } // 放置子集


    if (children && children.length > 0) {
      // 没有就先初始化下
      if (!bodyData[newOuterRowId]) {
        bodyData[newOuterRowId] = {};
        bodyData[newOuterRowId].rows = [];
      }

      var bodyRows = bodyData[newOuterRowId].rows; // 主表拉成obj

      var bodyRowsObj = bodyRows.reduce(function (prevResult, current) {
        var values = current.values,
            childId = current.childId,
            newBodyRowId = childId || (values[bodyId] || {}).value;
        prevResult[newBodyRowId] = current;
        return prevResult;
      }, {});
      console.log('bodyRowsObjbodyRowsObj', bodyRowsObj);
      children.forEach(function (bodyRow) {
        var childId = bodyRow.childId,
            values = bodyRow.values,
            index = bodyRow.index,
            newBodyRowId = childId || (values[bodyId] || {}).value; // 没有这一项  有这一项  需不需要更新

        if (!bodyRowsObj[newBodyRowId]) {
          bodyRow.values.key = newBodyRowId;
          bodyRow.values.rowIndex = index;
          bodyRow.values.headKey = newOuterRowId;
          bodyRow.values.parentRowId = newOuterRowId;
          bodyRow.childId = newBodyRowId;
          bodyRows.push(bodyRow);
        } // TODO

      });
    }
  }); // 先更新主表 子表数据
  // 再处理已选数据
  // 先处理单来源
  // 再处理多来源
  // 在处理已选状态  合计   统计
  // 再处理排序
  // 缓存

  this.setState({
    transferTable: this.state.transferTable
  });
}
/**
 * 设置展开的子表数据
 * @param {*} id 转单主表ID
 * @param {*Object} record 主表当前行信息
 * @param {*Array/Object} datas 子表数据
 * @param {*String} rowId 子表行 主键字段
 */

function setChildTransferTableData(id, record, datas, rowId) {
  var _this3 = this;

  var key = record.key;
  datas.rows.map(function (val, index) {
    if (!val.rowId && val.rowId !== 0) {
      if (!val.values[rowId]) {
        console.error('传入数据中没有找到子表Id');
        return false;
      }

      val.rowId = val.values[rowId].value;
    }

    val.values.key = val.rowId;
  });

  if (this.state.transferTable[id].selected.selectedData.masterSelData[key]) {
    this.state.transferTable[id].selected.selectedData.childSelData[key] = {};
    datas.rows.map(function (item, index) {
      _this3.state.transferTable[id].selected.selectedData.childSelData[key][item.values.key] = {
        sel: true,
        data: item
      };
    });
  }

  this.setState({
    transferTable: this.state.transferTable
  });
}
/**
 * 为实现多页签联动需要调用此方法
 * @param {*String} headID 主表ID
 */

function linkage(headID) {
  var _this4 = this;

  if (this.state.transferTable.allSelected) {
    var selIds = this.state.transferTable.allSelected.selIds || {};
    var allMasterCheckedId = this.state.transferTable.allSelected.masterCheckedId || [];
    var bodyIDsValues = Object.values(selIds) || [];
    var bodyIDS = flat(bodyIDsValues);
    var activeTabData = this.state.transferTable[headID];
    var selectedData = activeTabData.selected;
    var masterCheckedId = selectedData.masterCheckedId;
    var tableType = activeTabData[headID].tableType;
    var bodyData = activeTabData[headID].bodyData.data;
    var outerData = activeTabData[headID].outerData || [];
    var masterSelData = selectedData.selectedData.masterSelData || {};
    var childSelData = selectedData.selectedData.childSelData || {}; // ---------从这里开始将总体选中数据中在本页签未选中的时候选中，将本页签中选中全部页签未选中的数据去除 -----

    if (outerData.length) {
      var _loop3 = function _loop3() {
        var key = _Object$keys9[_i10];
        var activeIndex = null;
        outerData.forEach(function (item, index) {
          if (item.rowId === key) {
            activeIndex = index;
          }
        });

        if (activeIndex !== null) {
          var bodyIds = selIds[key];

          if (!masterSelData.hasOwnProperty(key)) {
            masterSelData[key] = {
              data: outerData[activeIndex].values,
              sel: true
            };
          }

          if (activeTabData[headID].tableType !== 'simple') {
            var bodyList = bodyData[key].rows; // 当前页签表头的表体数据
            // 判断当前页签每一个表体数据是否存在于allSelected

            var _iterator3 = _createForOfIteratorHelper(bodyIds),
                _step3;

            try {
              var _loop4 = function _loop4() {
                var i = _step3.value;
                var bodyActiveIndex = null;
                bodyList.map(function (item, index) {
                  if (item.childId === i) {
                    bodyActiveIndex = index;
                  }
                });

                if (bodyActiveIndex !== null) {
                  var data = bodyList[bodyActiveIndex].values;

                  if (!childSelData[key]) {
                    childSelData[key] = _defineProperty({}, i, {
                      sel: true,
                      data: {
                        childId: i,
                        values: data
                      }
                    });
                  }

                  if (childSelData[key] && !childSelData[key][i]) {
                    childSelData[key][i] = {
                      sel: true,
                      data: {
                        childId: i,
                        values: data
                      }
                    };
                  }
                }
              };

              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                _loop4();
              } // 特殊的主子表 是尚未处理  TODO  by bbqin
              // if (childSelData[key]&&Object.keys(childSelData[key]).length === bodyList.length) {

            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            if (!masterCheckedId.includes(key)) masterCheckedId.push(key); // }
          } else {
            if (!masterCheckedId.includes(key)) masterCheckedId.push(key);
          }
        }
      };

      for (var _i10 = 0, _Object$keys9 = Object.keys(selIds); _i10 < _Object$keys9.length; _i10++) {
        _loop3();
      } // 移除表体多余选中的数据


      if (Object.keys(childSelData).length) {
        var _loop5 = function _loop5() {
          var key = _Object$keys10[_i11];

          for (var _i12 = 0, _Object$keys11 = Object.keys(childSelData[key]); _i12 < _Object$keys11.length; _i12++) {
            var item = _Object$keys11[_i12];

            if (!bodyIDS.includes(item)) {
              delete childSelData[key][item];
              _this4.state.transferTable[headID].selected.selectedData.selAll = false;
              _this4.state.transferTable[headID].selected.masterCheckedId = _this4.state.transferTable[headID].selected.masterCheckedId.filter(function (item) {
                return item !== key;
              });

              if (!Object.keys(childSelData[key]).length) {
                delete childSelData[key];
              }
            }
          }
        };

        for (var _i11 = 0, _Object$keys10 = Object.keys(childSelData); _i11 < _Object$keys10.length; _i11++) {
          _loop5();
        }
      } // 移除多余表头的数据


      var _loop6 = function _loop6() {
        var key = _Object$keys12[_i13];

        if (!selIds.hasOwnProperty(key) && tableType !== 'simple') {
          delete masterSelData[key];

          if (childSelData.hasOwnProperty(key)) {
            delete childSelData[key];
          }

          _this4.state.transferTable[headID].selected.selectedData.selAll = false;
          _this4.state.transferTable[headID].selected.masterCheckedId = _this4.state.transferTable[headID].selected.masterCheckedId.filter(function (item) {
            return item !== key;
          });
        } else if (!allMasterCheckedId.includes(key) && tableType === 'simple') {
          delete masterSelData[key];
          _this4.state.transferTable[headID].selected.selectedData.selAll = false;
          _this4.state.transferTable[headID].selected.masterCheckedId = _this4.state.transferTable[headID].selected.masterCheckedId.filter(function (item) {
            return item !== key;
          });
        }
      };

      for (var _i13 = 0, _Object$keys12 = Object.keys(masterSelData); _i13 < _Object$keys12.length; _i13++) {
        _loop6();
      }

      var _iscludeCurrentData = iscludeCurrentData(this.state.transferTable[headID], headID),
          isCheckedOutData = _iscludeCurrentData.isCheckedOutData,
          isCheckedBodyData = _iscludeCurrentData.isCheckedBodyData,
          isAllOutData = _iscludeCurrentData.isAllOutData,
          isAllBodyData = _iscludeCurrentData.isAllBodyData; // 这里的判断有问题


      if (isCheckedOutData && isCheckedBodyData && isAllOutData && isAllBodyData) {
        selectedData.selectedData.selAll = true;
      }

      selectedData.bodyAmount = 0;

      for (var _i14 = 0, _Object$values = Object.values(selectedData.selectedData.childSelData); _i14 < _Object$values.length; _i14++) {
        var item = _Object$values[_i14];
        // 有个数据没有子数据  但是应该也算一行数据
        selectedData.bodyAmount += Object.keys(item).length || 1;
      }

      selectedData.masterAmount = Object.keys(selectedData.selectedData.masterSelData).length; // ---------从这里结束将总体选中数据中在本页签未选中的时候选中 -----
    }
  }
}
/**
 * 切换视图
 * 备注：转单内部使用
 */

function changeViewType() {
  var transferTable = this.state.transferTable;

  for (var _i15 = 0, _Object$keys13 = Object.keys(transferTable); _i15 < _Object$keys13.length; _i15++) {
    var key = _Object$keys13[_i15];

    if (key !== 'allSelected') {
      transferTable[key][key].showFullTable = !transferTable[key][key].showFullTable;
    } else {
      transferTable[key].showFullTable = !transferTable[key].showFullTable;
    }
  }

  this.setState({
    transferTable: this.state.transferTable
  });
}
/**
 * 获取状态
 * @param {状态名称} name 
 * @param {表格id} tableId 
 */

function getCurrentTransferTableStatus(name, tableId, dataSource) {
  var transferTable = this.state.transferTable;

  if (dataSource) {
    var data = this.ViewModel.getData(dataSource);
    transferTable = data && data.transferTable ? data.transferTable : transferTable;
  }

  if (name === 'activeTab') {
    return transferTable.allSelected.activeTab;
  }

  if (name === 'showFullTable') {
    return tableId && transferTable[tableId] && transferTable[tableId][tableId].showFullTable;
  }

  return null;
}
/**
 * 下游卡片切换的时候需要专门处理滚动条，当选中的卡片不在当前视口（被隐藏了），则需要将当前卡片显示出来 
 * 备注：转单内部使用
 */

function changeScroll() {
  var windowHeight = document.clientHeight || document.body.clientHeight;
  var listSelector = document.querySelector('.transfer-list-main-wrapper');
  var activeSelector = document.querySelector('.active-transfer-list-item');

  if (listSelector && activeSelector) {
    var listTop = listSelector.getBoundingClientRect().top;
    var top = activeSelector.getBoundingClientRect().top;
    var offsetTop = activeSelector.offsetTop;
    var bottom = activeSelector.getBoundingClientRect().bottom;
    var height = bottom - top;

    if (offsetTop + height > windowHeight - listTop - 48) {
      var nowHeight = listSelector.scrollTop;

      if (typeof listSelector.scrollTo === 'function') {
        listSelector.scrollTo(0, bottom - windowHeight + nowHeight + 60);
      }
    } else {
      if (typeof listSelector.scrollTo === 'function') {
        listSelector.scrollTo(0, 0);
      }
    }
  }
}
/**
 * 获取已选列表显示状态
 * @param {*String} id 上游转单主表ID
 */


function getSelectedListDisplay(id) {
  if (id === 'all') {
    //全部多来源已选列表
    return this.state.transferTable.allSelected && this.state.transferTable.allSelected.selectedShow;
  } else if (this.state.transferTable[id] && this.state.transferTable[id].selected) {
    return this.state.transferTable[id].selected.selectedShow;
  }
}
/**
 * 有全部页签的多来源设置已选列表的数据
 * @param {*String} headId 主表模板id
 * @param {*} bodyId 子表模板id
 * @param {*Array/Object} data 后台返回渲染转单表格的数据
 * @param {*String} rowId 主表主键
 * @param {*String} childId 子表主键
 */

function setMultiSelectedValue(headId, bodyId, data, rowId, childId) {
  var _this$state$transferT2 = this.state.transferTable.allSelected.selectedData,
      masterSelData = _this$state$transferT2.masterSelData,
      childSelData = _this$state$transferT2.childSelData;
  data.map(function (item) {
    var headVal = item.head[headId].rows[0].values;
    var headIdVal;

    if (Array.isArray(rowId)) {
      rowId.map(function (id) {
        if (headVal.hasOwnProperty(id)) {
          headIdVal = headVal[id].value;
          headVal.key = headIdVal;
        }
      });
    }

    masterSelData[headIdVal] = {
      data: JSON.parse(JSON.stringify(headVal)),
      sel: true
    };
    item.body[bodyId].rows.map(function (bodys) {
      var bodyIdVal;

      if (Array.isArray(childId)) {
        childId.map(function (bid) {
          if (bodys.values.hasOwnProperty(bid)) {
            bodyIdVal = bodys.values[bid] && bodys.values[bid].value;
            bodys.childId = bodyIdVal;
            bodys.values.key = bodyIdVal;
          }
        });
      }

      if (!childSelData.hasOwnProperty([headIdVal])) {
        childSelData[headIdVal] = _defineProperty({}, bodyIdVal, {
          data: JSON.parse(JSON.stringify(bodys)),
          sel: true
        });
      } else {
        childSelData[headIdVal][bodyIdVal] = {
          data: JSON.parse(JSON.stringify(bodys)),
          sel: true
        };
      }
    });
  });
  this.setState({
    transferTable: this.state.transferTable
  });
}
/**
 * 业务组判断上游转单数据缓存是否存在
 * @param {*String} dataSource 转单缓存数据的id
 */

function hasCache(dataSource) {
  var bool = false;
  var data = api_index_["ViewModel"].getData(dataSource);

  if (data) {
    if (data.transferTable) {
      bool = !!Object.keys(data.transferTable).length;
    }
  }

  return bool;
}
/**
 * 根据行索引设置行数据
 * 根据record.parentRowId来判断更新head还是body。
 * @param {*String} HeadTableAreaId 转单主表ID
 * @param {*Object} record 描述要设置的表格行的一个对象
 * @param {*Number} rowIndex 定位表格行的位置的索引
 */

function setRowDataByIndex(HeadTableAreaId, record, rowIndex) {
  var transferTable = this.state.transferTable;

  if (HeadTableAreaId && rowIndex != null && record) {
    if (record.parentRowId) {
      var bodyKey = record.key;
      var headKey = record.parentRowId;
      transferTable[HeadTableAreaId][HeadTableAreaId].bodyData.data[record.parentRowId].rows[rowIndex].values = record;
      var selectedChildData = transferTable[HeadTableAreaId].selected.selectedData.childSelData;
      var allSelectedChildData = transferTable.allSelected.selectedData.childSelData;

      if (allSelectedChildData[headKey] && allSelectedChildData[headKey][bodyKey] && allSelectedChildData[headKey][bodyKey].data && allSelectedChildData[headKey][bodyKey].data.values) {
        allSelectedChildData[headKey][bodyKey].data.values = record;
      } else {
        if (allSelectedChildData[headKey] && allSelectedChildData[headKey][bodyKey]) allSelectedChildData[headKey][bodyKey].data = record;
      }

      if (selectedChildData[headKey] && selectedChildData[headKey][bodyKey] && selectedChildData[headKey][bodyKey].data && selectedChildData[headKey][bodyKey].data.values) {
        selectedChildData[headKey][bodyKey].data.values = record;
      } else {
        if (selectedChildData[headKey] && selectedChildData[headKey][bodyKey]) selectedChildData[headKey][bodyKey].data = record;
      }
    } else {
      var _headKey = record.headKey || record.key;

      transferTable[HeadTableAreaId][HeadTableAreaId].outerData[rowIndex].values = record;
      var selectedMasterData = transferTable[HeadTableAreaId].selected.selectedData.masterSelData;
      var allSelectedMasterData = transferTable.allSelected.selectedData.masterSelData;

      if (selectedMasterData[_headKey] && selectedMasterData[_headKey].data.values) {
        selectedMasterData[_headKey].data.values = record;
      } else {
        if (selectedMasterData[_headKey]) selectedMasterData[_headKey].data = record;
      }

      if (allSelectedMasterData[_headKey] && allSelectedMasterData[_headKey].data.values) {
        allSelectedMasterData[_headKey].data.values = record;
      } else {
        if (allSelectedMasterData[_headKey]) allSelectedMasterData[_headKey].data = record;
      }
    }

    this.setState({
      transferTable: transferTable
    });
  } else {
    console.error('setRowDataByIndex方法缺失参数');
  }
}
/*
 * 根据pk设置选中的行
 * @param {*String} headTableId  转单主表ID
 * @param {*Array} pks  子表主键集合
 */

function setTheCheckRows(headTableId, pks) {
  var transferTable = this.state.transferTable,
      allSelectedData = transferTable.allSelected,
      selectedData = transferTable[headTableId].selected,
      data = transferTable[headTableId][headTableId],
      outerData = data.outerData,
      bodyData = data.bodyData.data,
      tableType = data.tableType,
      outerDataLength = outerData.length,
      allSelectedChildData = allSelectedData.selectedData.childSelData,
      selectedChildData = selectedData.selectedData.childSelData,
      selectedMasterData = selectedData.selectedData.masterSelData,
      allSelectedMasterData = allSelectedData.selectedData.masterSelData;

  if (tableType === 'nest' || tableType === 'full') {
    var masterLen = 0;

    var _loop7 = function _loop7() {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i16], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];

      var length = value.rows.length;
      var bodyLen = 0;

      var _iterator4 = _createForOfIteratorHelper(value.rows),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var item = _step4.value;

          if (pks.includes(item.childId)) {
            if (!selectedChildData[key]) selectedChildData[key] = {};
            if (!allSelectedChildData[key]) allSelectedChildData[key] = {};
            if (!allSelectedData.selIds[key]) allSelectedData.selIds[key] = [];
            if (!allSelectedData.selIds[key].includes(item.childId)) allSelectedData.selIds[key].push(item.childId);
            var masterData = outerData.filter(function (item) {
              return item.rowId === key;
            })[0];
            selectedChildData[key][item.childId] = {
              data: {
                childId: item.childId,
                values: item.values
              },
              sel: true
            };
            allSelectedChildData[key][item.childId] = {
              data: {
                childId: item.childId,
                values: item.values
              },
              sel: true
            };
            selectedData.bodyAmount += 1;
            allSelectedData.bodyAmount += 1;
            bodyLen += 1;

            if (!selectedMasterData[key]) {
              selectedData.masterAmount += 1;
              masterLen += 1;
              selectedMasterData[key] = {
                sel: true,
                data: _objectSpread({}, masterData.values)
              };
            }

            if (!allSelectedMasterData[key]) {
              allSelectedData.masterAmount += 1;
              allSelectedMasterData[key] = {
                sel: true,
                data: {
                  values: masterData.values
                }
              };
            }
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      if (length === bodyLen && !selectedData.masterCheckedId.includes(key)) selectedData.masterCheckedId.push(key);
      if (length === bodyLen && !allSelectedData.masterCheckedId.includes(key)) allSelectedData.masterCheckedId.push(key);
    };

    for (var _i16 = 0, _Object$entries2 = Object.entries(bodyData); _i16 < _Object$entries2.length; _i16++) {
      _loop7();
    }

    if (outerDataLength === masterLen) {
      selectedData.selectedData.selAll = true;
    }
  } else {
    var _masterLen = 0;

    var _iterator5 = _createForOfIteratorHelper(outerData),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var item = _step5.value;
        var key = item.rowId;

        if (pks.includes(key)) {
          if (!selectedChildData[key]) selectedChildData[key] = {};
          if (!allSelectedChildData[key]) selectedChildData[key] = {};
          if (!allSelectedData.selIds[key]) allSelectedData.selIds[key] = [];

          if (!selectedMasterData[key]) {
            selectedData.masterAmount += 1;
            _masterLen += 1;
            selectedMasterData[key] = {
              sel: true,
              data: _objectSpread({}, item.values)
            };
          }

          if (!allSelectedMasterData[key]) {
            allSelectedData.masterAmount += 1;
            allSelectedMasterData[key] = {
              sel: true,
              data: {
                values: item.values
              }
            };
          }

          if (!selectedData.masterCheckedId.includes(key)) selectedData.masterCheckedId.push(key);
          if (!allSelectedData.masterCheckedId.includes(key)) allSelectedData.masterCheckedId.push(key);
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    if (_masterLen === outerDataLength.length) selectedData.selectedData.selAll = true;
  }

  var selAll = outerData.every(function (val) {
    return allSelectedData.masterCheckedId.includes(val.rowId);
  });
  allSelectedData.selectedData.selAll = selAll;
  this.setState({
    transferTable: transferTable
  });
}
/*根据pk取消选中行的选中状态
 * @param {*String} headTableId 创建转单配置的headTableId，转单主表ID
 * @param {*Array} pks 传入要取消选中的主表ID
 */

function cancelRowsChecked(headTableId, pks) {
  var transferTable = this.state.transferTable,
      allSelectedData = transferTable.allSelected,
      selectedData = transferTable[headTableId].selected,
      allSelectedChildData = allSelectedData.selectedData.childSelData,
      allSelectedMasterData = allSelectedData.selectedData.masterSelData,
      selectedChildData = selectedData.selectedData.childSelData,
      selectedMasterData = selectedData.selectedData.masterSelData;

  if (pks.length) {
    // selAll 是存在  selectData中的
    selectedData.selectedData.selAll = false;
    allSelectedData.selectedData.selAll = false;
    selectedData.masterAmount = selectedData.masterAmount - pks.length;
    selectedData.masterCheckedId = selectedData.masterCheckedId.filter(function (id) {
      return !pks.includes(id);
    });
    allSelectedData.masterCheckedId = selectedData.masterCheckedId.filter(function (id) {
      return !pks.includes(id);
    });
    allSelectedData.masterAmount = allSelectedData.masterAmount - pks.length;

    for (var attr in selectedChildData) {
      //删除selected里存的已选子表的数据
      if (pks.includes(attr)) {
        var childAmount = Object.keys(selectedChildData[attr]).length; //被取消选中的某条主表对应的子表数量

        selectedData.bodyAmount = selectedData.bodyAmount - childAmount;
        allSelectedData.bodyAmount = allSelectedData.bodyAmount - childAmount;

        for (var key in allSelectedData.selIds) {
          console.log(allSelectedData.selIds);

          if (pks.includes(key)) {
            if (allSelectedData.selIds) delete allSelectedData.selIds[key];
          }
        }

        if (allSelectedChildData[attr]) delete allSelectedChildData[attr];
        delete selectedChildData[attr];
      }
    }

    for (var _attr in selectedMasterData) {
      //删除selected里存的已选主表的数据
      if (pks.includes(_attr)) {
        if (allSelectedMasterData[_attr]) delete allSelectedMasterData[_attr];
        delete selectedMasterData[_attr];
      }
    }
  }

  this.setState({
    transferTable: transferTable
  });
}
/*
 * 根据headKey或者parentRowId设置表头数据
 *
 * @param HeadTableAreaId： String 转单主表ID
 * @param record：Object 新的表头行数据
 * @param headKey/parentRowId：String 需要更新的表头行唯一标识
 * */

function updateHeadRowByKey(HeadTableAreaId, record, headKey) {
  var transferTable = this.state.transferTable;

  if (HeadTableAreaId && headKey != null && record) {
    var outerData = transferTable[HeadTableAreaId][HeadTableAreaId].outerData;
    var masterSelData = this.state.transferTable[HeadTableAreaId]['selected']['selectedData']['masterSelData'];
    var allSelected = transferTable['allSelected'];
    this.state.transferTable[HeadTableAreaId][HeadTableAreaId].outerData = outerData.map(function (item) {
      if (item.rowId === headKey) {
        item.values = _objectSpread(_objectSpread({}, item.values), record);
        return item;
      } else {
        return item;
      }
    });

    if (masterSelData[headKey]) {
      this.state.transferTable[HeadTableAreaId]['selected']['selectedData']['masterSelData'][headKey].data = _objectSpread(_objectSpread({}, masterSelData[headKey].data), record);
    }

    if (allSelected) {
      var _masterSelData2 = allSelected['selectedData']['masterSelData'];

      if (_masterSelData2[headKey]) {
        this.state.transferTable['allSelected']['selectedData']['masterSelData'][headKey].data = _objectSpread(_objectSpread({}, _masterSelData2[headKey].data), record);
      }
    }

    this.setState({
      transferTable: this.state.transferTable
    });
  } else {
    console.error('setRowDataByIndex方法缺失参数');
  }
}
/*
 * 获取转单缓存数据
 * @param dataSource
 * */

function getTransferTableCache(dataSource) {
  var data = api_index_["ViewModel"].getData(dataSource);
  return data ? data.transferTable : null;
}
/*
 * 根据pk删除单据数据
 * @param pk：String 下游单据保存后存在缓存中的pk值
 * */

function deleteItems(pk) {
  var transferTable = this.state.transferTable;

  if (Array.isArray(pk)) {
    for (var _i17 = 0, _Object$keys14 = Object.keys(transferTable); _i17 < _Object$keys14.length; _i17++) {
      var values = _Object$keys14[_i17];

      if (values !== 'allSelected') {
        for (var _i18 = 0, _Object$keys15 = Object.keys(transferTable[values]); _i18 < _Object$keys15.length; _i18++) {
          var key = _Object$keys15[_i18];

          if (key !== 'selected' && key !== 'transformForm') {
            var value = transferTable[values][key]; // value 可能未sortObj 会导致问题

            var bodyData = value.bodyData && Object.keys(value.bodyData).length ? value.bodyData.data : null;
            var outerData = value.outerData && value.outerData.length ? value.outerData : null;

            if (outerData) {
              transferTable[values][key].outerData = outerData.filter(function (item) {
                return !pk.includes(item.rowId);
              });
            }

            if (bodyData) {
              var _iterator6 = _createForOfIteratorHelper(pk),
                  _step6;

              try {
                var _loop8 = function _loop8() {
                  var i = _step6.value;

                  if (bodyData.hasOwnProperty(i)) {
                    delete bodyData[i];
                  } else {
                    var _loop9 = function _loop9() {
                      var ke = _Object$keys16[_i19];
                      bodyData[ke].rows = bodyData[ke].rows.filter(function (item) {
                        return i !== item.childId;
                      });

                      if (!bodyData[ke].rows.length) {
                        delete bodyData[ke];
                        transferTable[values][key].outerData = outerData.filter(function (item) {
                          return item.rowId !== ke;
                        }); // delete bodyData[ke].rows
                      }
                    };

                    for (var _i19 = 0, _Object$keys16 = Object.keys(bodyData); _i19 < _Object$keys16.length; _i19++) {
                      _loop9();
                    }
                  }
                };

                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  _loop8();
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
          } else if (key === 'selected') {
            var _value = transferTable[values][key];
            var masterCheckedId = _value.masterCheckedId;
            var selectedData = _value.selectedData;
            var childSelData = selectedData.childSelData;
            var masterSelData = selectedData.masterSelData; // let bodyAmount = selectedData.bodyAmount;
            // let masterAmount = selectedData.masterAmount;

            masterCheckedId = masterCheckedId.filter(function (item) {
              return !pk.includes(item);
            });

            for (var _i20 = 0, _Object$keys17 = Object.keys(masterSelData); _i20 < _Object$keys17.length; _i20++) {
              var ke = _Object$keys17[_i20];

              if (pk.includes(ke)) {
                // selectedData.masterAmount -= 1
                delete masterSelData[ke];
              }
            }

            var _loop10 = function _loop10() {
              var ke = _Object$keys18[_i21];

              if (pk.includes(ke)) {
                delete childSelData[ke];
              } else {
                for (var _i22 = 0, _Object$keys19 = Object.keys(childSelData[ke]); _i22 < _Object$keys19.length; _i22++) {
                  var item = _Object$keys19[_i22];

                  if (pk.includes(item)) {
                    // selectedData.bodyAmount -= 1
                    delete childSelData[ke][item];

                    if (!Object.keys(childSelData[ke]).length) {
                      delete childSelData[ke];

                      if (masterSelData[ke]) {
                        delete masterSelData[ke];
                      }

                      transferTable[values][key].masterCheckedId = masterCheckedId.filter(function (item) {
                        return item !== ke;
                      });
                    }
                  }
                }
              }
            };

            for (var _i21 = 0, _Object$keys18 = Object.keys(childSelData); _i21 < _Object$keys18.length; _i21++) {
              _loop10();
            }

            transferTable[values][key].masterAmount = masterCheckedId.length;
            var a = 0;

            var _iterator7 = _createForOfIteratorHelper(masterCheckedId),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var item = _step7.value;

                if (childSelData) {
                  if (childSelData[item]) {
                    a += Object.keys(childSelData[item]).length;
                  }
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            transferTable[values][key].bodyAmount = a;
          }
        }
      } else {
        var selIds = transferTable[values].selIds;
        var bodyAmount = transferTable[values].bodyAmount;
        var masterAmount = transferTable[values].masterAmount;

        for (var _i23 = 0, _Object$keys20 = Object.keys(selIds); _i23 < _Object$keys20.length; _i23++) {
          var _value2 = _Object$keys20[_i23];
          var len = selIds[_value2].length;
          selIds[_value2] = selIds[_value2].filter(function (item) {
            return !pk.includes(item);
          });

          if (!selIds[_value2].length) {
            delete selIds[_value2];
            bodyAmount -= len;
            masterAmount -= 1;
          }
        }
      }
    }
  }

  this.setState({
    transferTable: transferTable
  });
} //----------------------------------转单左侧列表相关API---------------------------//

/*
*   设置下游单据卡片数据
*   @id: String 下游单据卡片ID
*   @ data： Array/Object 转单卡片列表数据
* */

function setTransferListValue(id, data, callback) {
  var _this5 = this;

  var transformForm = this.myState.transferList[id].transformForm;
  var transferListComponent = this.myState.transferListComponent;
  var lists = [],
      completeArr = [];
  transformForm.listData.data = data && data;
  if (data.length) transformForm.show = true;
  data && data.map(function (item) {
    lists.push({
      complete: false,
      //是否已处理
      data: item,
      browseData: {
        head: {},
        body: {},
        grandSons: {}
      }
    });
    completeArr.push(false);
  });
  transformForm.list = lists;
  transformForm.completeArr = completeArr;
  transformForm.activeIndex = 0;
  transferListComponent && transferListComponent.setState({
    transformForm: transformForm
  }, function () {
    var status = !transformForm.list[0].complete ? 'add' : transformForm.list[0].formStatus;
    _this5.onTransferItemSelected && _this5.onTransferItemSelected(transformForm.list[0].data, transformForm.list[0].complete, transformForm.activeIndex, status);

    if (_this5.transferListCardHeadCode) {
      _this5.form.resetItemWidth(_this5.transferListCardHeadCode);
    }
  });
}
/*
*   获取下游单据卡片数据
*   @id: String 下游单据卡片ID
* */

function getTransferListValue(id) {
  return this.myState.transferList[id];
}
/*
*   更新下游单据卡片数据
*   @id: String 下游单据卡片ID
*   @ data： Array/Object 要更新的转单卡片列表数据
* */

function updateTransferListValue(id, data) {
  var _this6 = this;

  var transformForm = data.transformForm;
  var transferListComponent = this.myState.transferListComponent;
  this.myState.transferList[id] = data;
  transferListComponent && transferListComponent.setState({
    transferList: this.myState.transferList
  }, function () {
    var status = !transformForm.list[0].complete ? 'add' : transformForm.list[0].formStatus;
    _this6.onTransferItemSelected && _this6.onTransferItemSelected(transformForm.list[0].data, transformForm.list[0].complete, transformForm.activeIndex, status);

    if (_this6.transferListCardHeadCode) {
      _this6.form.resetItemWidth(_this6.transferListCardHeadCode);
    }
  });
}
/*
*   获取转单卡片显示状态 （当卡片数量只有一个的时候隐藏，当卡片数量大于等于二的时候显示）
*   @id: String 下游单据卡片ID
* */

function getTransformFormDisplay(id) {
  if (this.myState.transferList[id] && this.myState.transferList[id].transformForm) {
    return this.myState.transferList[id] && this.myState.transferList[id].transformForm && this.myState.transferList[id].transformForm.show;
  }
}
/*
*   获取转单列表数量
*   @id: String 下游单据卡片ID
* */

function getTransformFormAmount(id) {
  return this.myState.transferList[id] && this.myState.transferList[id].transformForm.list.length;
} //获取单来源转单已选的主子表id（存放在ViewModel里的transferIds）

function getTransferTableSelectedId() {
  var result = api_index_["ViewModel"].getData('transferIds');
  return result;
} //由于可能有操作没有  通过转单下游按钮 所以可能需要手动存取一次数据（存放在ViewModel里的transferIds）

function setTransferTableSelectedId(headTableId, _ref) {
  var _this7 = this;

  var isMultiChild = _ref.isMultiChild,
      cacheItem = _ref.cacheItem,
      generateKeys = _ref.generateKeys,
      bodyPkIds = _ref.bodyPkIds,
      headPkIds = _ref.headPkIds;
  //总的转单的数据
  var transferTable = this.state.transferTable[headTableId];
  var selIds = [];
  var selId = [];

  if (!isMultiChild) {
    (function () {
      // 转单不是多来源的子
      //获取已选列表主子表id
      var masterData = transferTable.selected.selectedData.masterSelData;
      var childSelData = transferTable.selected.selectedData.childSelData;

      if (masterData) {
        var _loop11 = function _loop11() {
          var key = _Object$keys21[_i24];
          var bodys = [];
          var head = {};

          if (childSelData) {
            var childData = transferTable.selected.selectedData.childSelData[key];

            if (childData) {
              var _loop12 = function _loop12() {
                var id = _Object$keys22[_i25];
                var values = childData[id].data.values || childData[id].data;
                var itemsJson = {};

                if (cacheItem) {
                  cacheItem.forEach(function (item) {
                    var itemValue = values[item];

                    if (itemValue) {
                      //选中的子表数据里有要缓存的字段，
                      itemsJson[item] = itemValue;
                    } else {
                      //选中的子表数据里有要缓存的字段就从主表数据里找
                      var masterSelData = transferTable.selected.selectedData.masterSelData[key];
                      var masterSelDataVal = masterSelData.data.values || masterSelData.data;
                      var masterItemValue = masterSelDataVal[item];
                      masterItemValue && (itemsJson[item] = masterItemValue);
                    }
                  });
                }

                if (generateKeys && generateKeys.body && generateKeys.body.length > 0) {
                  var bodyKeyVal = {};

                  var _iterator8 = _createForOfIteratorHelper(generateKeys.body),
                      _step8;

                  try {
                    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                      var val = _step8.value;
                      bodyKeyVal[val] = values[val] && values[val].value;
                    }
                  } catch (err) {
                    _iterator8.e(err);
                  } finally {
                    _iterator8.f();
                  }

                  bodys.push(_objectSpread({
                    bodyKeyVal: bodyKeyVal
                  }, itemsJson));
                } else {
                  bodys.push(_objectSpread({
                    pk: id,
                    ts: values.ts && values.ts.value
                  }, itemsJson));
                }
              };

              for (var _i25 = 0, _Object$keys22 = Object.keys(childData); _i25 < _Object$keys22.length; _i25++) {
                _loop12();
              }
            }
          }

          if (generateKeys && generateKeys.head && generateKeys.head.length > 0) {
            var _iterator9 = _createForOfIteratorHelper(generateKeys.head),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var val = _step9.value;
                head[val] = masterData[key].data[val] && masterData[key].data[val].value;
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          } else {
            head = {
              pk: key,
              ts: masterData[key].data.headTs ? masterData[key].data.headTs.value : masterData[key].ts
            };
          }

          var itemsJson = {};

          if (cacheItem) {
            cacheItem.forEach(function (item) {
              var itemValue = masterData[key].data[item];
              itemValue && (itemsJson[item] = itemValue);
            });
          }

          selIds.push(_objectSpread({
            head: head,
            bodys: bodys
          }, itemsJson));
        };

        for (var _i24 = 0, _Object$keys21 = Object.keys(masterData); _i24 < _Object$keys21.length; _i24++) {
          _loop11();
        }
      }

      api_index_["ViewModel"].setData('transferIds', selIds);
    })();
  } else {
    (function () {
      // 转单是多来源的子
      var allTranferTableData = _this7.state.transferTable;
      var selfMasterData = transferTable.selected.selectedData.masterSelData;
      var selfChildData = transferTable.selected.selectedData.childSelData;

      for (var _i26 = 0, _Object$keys23 = Object.keys(allTranferTableData); _i26 < _Object$keys23.length; _i26++) {
        var ID = _Object$keys23[_i26];

        if (ID === 'allSelected') {
          (function () {
            var selected = allTranferTableData.allSelected;
            var masterData = JSON.parse(JSON.stringify(selected.selectedData.masterSelData));
            var childData = JSON.parse(JSON.stringify(selected.selectedData.childSelData));
            var bodys = [];
            var selfBodys = [];

            var _loop13 = function _loop13() {
              var key = _Object$keys24[_i27];

              if (childData[key]) {
                var _loop14 = function _loop14() {
                  var id = _Object$keys25[_i28];
                  var values = childData[key][id].data.values || childData[key][id].data;
                  bodyPkIds && bodyPkIds.map(function (pk) {
                    var cData = childData[key][id].data.values || childData[key][id].data;

                    if (cData.hasOwnProperty(pk)) {
                      var _bodys$push;

                      bodys.push((_bodys$push = {}, _defineProperty(_bodys$push, pk, id), _defineProperty(_bodys$push, "pk", id), _defineProperty(_bodys$push, "ts", values.ts && values.ts.value), _bodys$push));
                    }
                  });
                };

                for (var _i28 = 0, _Object$keys25 = Object.keys(childData[key]); _i28 < _Object$keys25.length; _i28++) {
                  _loop14();
                }
              }

              if (selfChildData[key]) {
                var _loop15 = function _loop15() {
                  var id = _Object$keys26[_i29];
                  var values = selfChildData[key][id].data.values || selfChildData[key][id].data;
                  bodyPkIds && bodyPkIds.map(function (pk) {
                    var cData = selfChildData[key][id].data.values || selfChildData[key][id].data;

                    if (cData.hasOwnProperty(pk)) {
                      var _selfBodys$push;

                      selfBodys.push((_selfBodys$push = {}, _defineProperty(_selfBodys$push, pk, id), _defineProperty(_selfBodys$push, "pk", id), _defineProperty(_selfBodys$push, "ts", values.ts && values.ts.value), _selfBodys$push));
                    }
                  });
                };

                for (var _i29 = 0, _Object$keys26 = Object.keys(selfChildData[key]); _i29 < _Object$keys26.length; _i29++) {
                  _loop15();
                }
              }

              headPkIds && headPkIds.map(function (pk) {
                if (masterData[key].data.hasOwnProperty(pk)) {
                  var _head3;

                  selIds.push({
                    head: (_head3 = {}, _defineProperty(_head3, pk, key), _defineProperty(_head3, "pk", key), _defineProperty(_head3, "ts", masterData[key].data.ts.value), _head3),
                    bodys: bodys
                  });
                }

                if (selfMasterData[key] && selfMasterData[key].data.hasOwnProperty(pk)) {
                  var _head4;

                  selId.push({
                    head: (_head4 = {}, _defineProperty(_head4, pk, key), _defineProperty(_head4, "pk", key), _defineProperty(_head4, "ts", selfMasterData[key].data.ts.value), _head4),
                    bodys: selfBodys
                  });
                }
              });
              bodys = [];
            };

            for (var _i27 = 0, _Object$keys24 = Object.keys(masterData); _i27 < _Object$keys24.length; _i27++) {
              _loop13();
            }
          })();
        }
      }

      api_index_["ViewModel"].setData('multiTransferIds', selIds);
      api_index_["ViewModel"].setData('transferIds', selId);
    })();
  }
}
/*
*   获取多来源所有选中的数据的主子表主键对应的集合
*   @dataSource: String 缓存ID
* */

function getTransferTableAllSelectedId(dataSource) {
  var dataCache = null;
  var transferTable = null;

  if (dataSource) {
    dataCache = api_index_["ViewModel"].getData(dataSource);
    transferTable = dataCache ? dataCache.transferTable : null;
  }

  var _this$state$transferT3 = this.state.transferTable,
      allSelected = _this$state$transferT3.allSelected,
      transfers = methods_objectWithoutProperties(_this$state$transferT3, ["allSelected"]);

  if (transferTable) {
    transfers = transferTable;
  }

  var ids = {};

  for (var _i30 = 0, _Object$keys27 = Object.keys(transfers); _i30 < _Object$keys27.length; _i30++) {
    var items = _Object$keys27[_i30];

    if (items !== 'allSelected') {
      var selectedData = transfers[items].selected.selectedData;
      var childSelData = selectedData.childSelData;
      var masterSelData = selectedData.masterSelData;
      ids[items] = {
        head: Object.keys(masterSelData),
        body: {}
      };

      for (var _i31 = 0, _Object$keys28 = Object.keys(childSelData); _i31 < _Object$keys28.length; _i31++) {
        var item = _Object$keys28[_i31];
        ids[items].body[item] = Object.keys(childSelData[item]);
      }
    }
  }

  return ids;
} //获取多来源已选的主子表id（存放在ViewModel里的multiTransferIds）

function getTransferTableMultiSelectedId() {
  var result = api_index_["ViewModel"].getData('multiTransferIds');
  return result;
}
/*
*   获取下游转单卡片列表当前选中的卡片处理状态
*   @id: String 下游转单卡片列表ID
*   @index: Number/String 非必须 要查看卡片的index
* */

function getTransformFormCompleteStatus(id, index) {
  var actIndex = index || this.myState.transferList[id].transformForm.activeIndex;

  if (this.myState.transferList && this.myState.transferList[id] && this.myState.transferList[id].transformForm.list && this.myState.transferList[id].transformForm && this.myState.transferList[id].transformForm.list && this.myState.transferList[id].transformForm.list[actIndex]) {
    return this.myState.transferList[id].transformForm.list[actIndex].complete;
  } else {
    return false;
  }
}
/* 
*   返回下游转单卡片列表待选列表
*   @id: String 下游转单卡片列表ID
* */

function returnTransferTableList(id) {
  var transferList = this.myState.transferList;
  var transferListComponent = this.myState.transferListComponent;
  if (transferList[id].selected) transferList[id].selected.selectedShow = false;
  transferList[id].transformForm.show = false;
  transferListComponent && transferListComponent.setState({
    transferList: transferList
  }, function () {});
}
/*
*  获取转单列表是否存在未处理过的卡片
*   @headTableId: String 转单列表id
* */

function getTransformFormStatus(Id, index) {
  if (typeof Id === 'undefined') {
    return false;
  }

  var transferList = this.myState.transferList[Id];
  var _transferList$transfo = transferList.transformForm,
      activeIndex = _transferList$transfo.activeIndex,
      list = _transferList$transfo.list;
  var status = true;

  var _iterator10 = _createForOfIteratorHelper(list),
      _step10;

  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var item = _step10.value;

      if (item.complete === false) {
        status = false;
      }
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }

  return status;
}
/* 
*   改变转单列表卡片处理状态
*   @status 转单状态 true:状态变为已转单 false:从转单列表移除该条数据
*   @headTableId: String  转单列表id
*   @childId: String  子表主键字段名
*   @index: String  当前操作数据的index
*   @onChange: String  操作成功后的回调函数
* */

function setTransformFormStatus(headTableId, params) {
  var status = params.status,
      index = params.index,
      onChange = params.onChange,
      _params$isNext = params.isNext,
      isNext = _params$isNext === void 0 ? true : _params$isNext,
      _params$isTriggerSele = params.isTriggerSelected,
      isTriggerSelected = _params$isTriggerSele === void 0 ? true : _params$isTriggerSele;
  var _this$myState$transfe = this.myState.transferListAreas,
      headcode = _this$myState$transfe.headcode,
      bodycode = _this$myState$transfe.bodycode;

  if (typeof status === 'undefined' || typeof headTableId === 'undefined') {
    return false;
  }

  var transferList = this.myState.transferList[headTableId];
  var _transferList$transfo2 = transferList.transformForm,
      activeIndex = _transferList$transfo2.activeIndex,
      list = _transferList$transfo2.list,
      completeArr = _transferList$transfo2.completeArr;
  var transformIndex = index || activeIndex; //不传index默认为当前操作的index

  if (bodycode) updateLastActiveFormData.call(this, headTableId, headcode, bodycode, status);

  if (status) {
    //状态变为已转单
    if (list[transformIndex]) {
      list[transformIndex].complete = true;
      completeArr[transformIndex] = true;
      transferList.transformForm.currentData = list[transformIndex].data; //当前操作的数据
    }
  } else {
    //取消
    if (list.length > 0) {
      transferList.transformForm.currentData = list.splice(transformIndex, 1)[0].data; //取消的那条数据

      completeArr.splice(transformIndex, 1);
    }
  }

  if (list.length > 0) {
    this.transferTable.changeNextTransformForm(headTableId, status, onChange, isNext, headcode, list.length, isTriggerSelected);
  } else {
    //当前只有一条数据则返回列表
    this.transferTable.returnTransferTableList(headTableId, isNext);
  }
}
/**
 * 更新孙表的数据
 * @param {*} transferListId 
 * @param {*} data 
 * @param {*} status 
 * @param {*} index 
 */

function updateActiveGrandsonData(transferListId, grandsonsData, status, index) {
  var transformForm = this.myState.transferList[transferListId].transformForm;
  var activeIndex = transformForm.activeIndex;
  var formStatus = status === true ? 'browse' : 'edit';
  var data = transformForm.list[index || activeIndex].data;

  if (data) {
    data.grandSons = JSON.parse(JSON.stringify(grandsonsData));

    if (formStatus === 'browse') {
      transformForm.list[activeIndex].browseData.grandSons = JSON.parse(JSON.stringify(grandsonsData));
    }
  }
}
/*
*   切换卡片的时候更新上次卡片的数据
*   @transferListId: String  转单列表id
*   @headcode: String  表头Form区域编码
*   @bodycode: String  表体表格区域编码
*   @status: Boolean  要处理的卡片的状态
* */

function updateLastActiveFormData(transferListId, headcode, bodycode, status, onUpdateLastActiveFormData) {
  var transformForm = this.myState.transferList[transferListId].transformForm;
  var activeIndex = transformForm.activeIndex;
  var data = transformForm.list[activeIndex].data;
  var formStatus = status === true ? 'browse' : 'edit';
  var headData = this.form.getAllFormValue(headcode); // 获取form区域数据用于更新左侧head数据

  if (data && data.head && data.head[headcode]) {
    data.head[headcode].rows = headData.rows;
    transformForm.list[activeIndex].formStatus = formStatus;

    if (formStatus === 'browse') {
      transformForm.list[activeIndex].browseData.head = _defineProperty({}, headcode, {
        // rows: JSON.parse(JSON.stringify(headData.rows)) 
        rows: headData.rows // 为了万行 暂时不拷贝

      });
    }
  }

  if (typeof bodycode === 'string') {
    if (!transformForm.list[activeIndex].browseData.body) transformForm.list[activeIndex].browseData.body = {};
    var bodyData = (this.cardTable || this.props.cardTable).getAllRows(bodycode); // 获取table区域数据用于更新左侧body数据

    if (data && data.body && data.body[bodycode]) {
      data.body[bodycode].rows = bodyData;

      if (formStatus === 'browse') {
        transformForm.list[activeIndex].browseData.body[bodycode] = {
          // rows: JSON.parse(JSON.stringify(bodyData))
          rows: bodyData // 为了万行 暂时不拷贝

        };
      }
    }
  } else if (Array.isArray(bodycode)) {
    // 报错问题的兼容
    if (data && data.body && !transformForm.list[activeIndex].browseData.body) transformForm.list[activeIndex].browseData.body = {}; // 改了四次才改全

    if (data && data.bodys && !transformForm.list[activeIndex].browseData.bodys) transformForm.list[activeIndex].browseData.bodys = {}; // 郭祉祺  丛可  
    // 后端数据的模型是bodys 我们一开始的设计方案是body 
    // 后来夏慧给我提要兼容 一主一子 一主多子
    // 然后导致以前的节点报错 所以这里先做下兼容 后面需要拉着所有转单的适配业务侧主题讨论下 

    var _iterator11 = _createForOfIteratorHelper(bodycode),
        _step11;

    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var item = _step11.value;

        var _bodyData = (this.cardTable || this.props.cardTable).getAllRows(item) || [];

        if (data && data.bodys && data.bodys[item]) {
          data.bodys[item].rows = _bodyData;

          if (formStatus === 'browse') {
            transformForm.list[activeIndex].browseData.bodys[item] = {
              // rows: JSON.parse(JSON.stringify(bodyData))
              rows: _bodyData // 为了万行 暂时不拷贝

            };
          }
        } // 令人恶心的兼容


        if (data && data.body && data.body[item] && data.body[item].rows) {
          data.body[item].rows = _bodyData;

          if (formStatus === 'browse') {
            transformForm.list[activeIndex].browseData.body[item] = {
              // rows: JSON.parse(JSON.stringify(bodyData))
              rows: _bodyData // 为了万行 暂时不拷贝

            };
          }
        }
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
  }

  if (typeof onUpdateLastActiveFormData == 'function') {
    onUpdateLastActiveFormData(transformForm, headcode, bodycode);
  }
}
/*
*   取消的时候需要获取上次保存的表单表格区域的数据
*   @transferListId: String  转单列表id
*   @activeIndex: Number/String  上次保存状态的卡片数据
* */

function getTheTransferListDataSavedLastTime(transferListId, activeIndex) {
  var transformForm = this.myState.transferList[transferListId].transformForm;
  var index = transformForm.activeIndex || activeIndex;
  var browseData = transformForm.list[index].browseData;
  return browseData;
}
/*
*   改变转单列表某个卡片的处理状态
*   @status 转单状态 true:状态变为已转单 false:从转单列表移除该条数据
*   @headTableId 主表id
*   @params Object {
*      status: Boolean, // 需要改变的卡片的状态
*      index: Number/String, // 需要改变的卡片的下标
*   }
* */

function updateTransformFormStatus(headTableId, params) {
  var status = params.status,
      index = params.index;

  if (typeof status === 'undefined' || typeof headTableId === 'undefined') {
    return false;
  }

  var transferList = this.myState.transferList[headTableId];
  var _transferList$transfo3 = transferList.transformForm,
      activeIndex = _transferList$transfo3.activeIndex,
      list = _transferList$transfo3.list,
      completeArr = _transferList$transfo3.completeArr;
  var transformIndex = index || activeIndex; //不传index默认为当前操作的index

  if (status) {
    //状态变为已转单
    if (list[transformIndex]) {
      list[transformIndex].complete = true;
      list[transformIndex].formStatus = 'browse';
      completeArr[transformIndex] = true;
    }
  } else {
    //取消
    if (list.length > 0) {
      list[transformIndex].complete = false;
      list[transformIndex].formStatus = 'edit';
      completeArr[transformIndex] = false;
    }
  }
}
/* 
*   批量改变转单列表卡片状态
*   @headTableId：String 转单列表id
*   @status: Boolean 转单状态 true:状态变为已转单 false:从转单列表移除该条数据
*   @selId： Array 选中数据的id
*   @success 操作成功后的回调函数
* */

function setMultiTransformFormStatus(headTableId, params) {
  var status = params.status,
      selId = params.selId,
      success = params.success;

  if (typeof status === 'undefined' || typeof headTableId === 'undefined' || typeof selId === 'undefined') {
    return false;
  }

  var transferTable = this.state.transferTable[headTableId];
  var table = transferTable[headTableId];
  var transformForm = transferTable.transformForm;
  var _transferTable$select = transferTable.selected,
      selectedData = _transferTable$select.selectedData,
      masterCheckedId = _transferTable$select.masterCheckedId;
  var activeIndex = transformForm.activeIndex,
      list = transformForm.list,
      completeArr = transformForm.completeArr;
  var oBodyData = table.bodyData.data; //批量保存

  if (Array.isArray(selId)) {
    selId.forEach(function (id) {
      if (status) {
        var _loop16 = function _loop16() {
          var key = _Object$keys29[_i32];
          oBodyData[key].rows.map(function (item, i, array) {
            if (item.rowId === id) {
              array.splice(i, 1);
            }
          }); //子表无数据时删除主表

          if (oBodyData[key].rows.length === 0) {
            table.outerData.map(function (val, i, array) {
              if (val.rowId === key) {
                array.splice(i, 1);
              }
            });
          }
        };

        //保存后删除待选/已选列表对应数据
        for (var _i32 = 0, _Object$keys29 = Object.keys(oBodyData); _i32 < _Object$keys29.length; _i32++) {
          _loop16();
        }
      } else {
        //取消时删掉对应已选主表id
        for (var _i33 = 0, _Object$keys30 = Object.keys(selectedData.childSelData); _i33 < _Object$keys30.length; _i33++) {
          var key = _Object$keys30[_i33];
          var curHeadId = Object.keys(selectedData.childSelData[key]).includes(id) ? key : null;

          if (masterCheckedId.indexOf(key) !== -1 && curHeadId === key) {
            masterCheckedId.splice(masterCheckedId.indexOf(key), 1);
          }
        }
      } //取消勾选状态


      for (var _i34 = 0, _Object$keys31 = Object.keys(selectedData.childSelData); _i34 < _Object$keys31.length; _i34++) {
        var _key2 = _Object$keys31[_i34];
        delete selectedData.childSelData[_key2][id];

        if (JSON.stringify(selectedData.childSelData[_key2]) === '{}') {
          delete selectedData.childSelData[_key2]; //子表没有勾选数据时 取消主表勾选状态

          delete selectedData.masterSelData[_key2];
        }
      }
    });
  }

  if (typeof success === 'function') {
    success();
  }
}
/* 
*   切换到（isNext控制是否切换到下一条）下一条转单钩子函数 在setTransformFormStatus方法内调用
*   @headTableId：String 转单列表ID
*   @status: Boolean 转单状态 true:状态变为已转单 false:从转单列表移除该条数据
*   @isNext: Boolean 是否要切换到下一条
*   @callback: Function 切换后的回调函数
*   @headcode 表头ID 
*   @flag 当前项
 */

function changeNextTransformForm(headTableId, status, callback, isNext, headcode, flag, isTriggerSelected) {
  var _this8 = this;

  var transferList = this.myState.transferList[headTableId];
  var transferListComponent = this.myState.transferListComponent;
  var transformForm = transferList.transformForm;
  var activeIndex = transformForm.activeIndex,
      completeArr = transformForm.completeArr;
  var currentIndex = activeIndex;
  var nextNotCompleteIndex = completeArr.indexOf(false, activeIndex); //下一个待处理转单

  var nextActiveIndex = nextNotCompleteIndex < 0 ? activeIndex : nextNotCompleteIndex;

  if (nextNotCompleteIndex < 0) {
    nextNotCompleteIndex = completeArr.indexOf(false);
    nextActiveIndex = completeArr.indexOf(completeArr[completeArr.findIndex(function (v, index) {
      return index === activeIndex + 1;
    })], activeIndex);
  } //没有待处理单据


  if (completeArr.every(function (item) {
    return item;
  })) {
    //保存时保留在当前数据
    if (status) {
      nextActiveIndex = activeIndex;
    } else {
      //取消时没有待处理单据跳到第一条
      nextActiveIndex = 0;
    }
  } else {
    //有待处理数据时
    nextActiveIndex = nextNotCompleteIndex;
  } //如果找不到数组项 index设为数组的长度


  if (!transformForm.list[currentIndex]) {
    currentIndex = transformForm.list.length - 1;
  }

  nextActiveIndex = !isNext ? activeIndex : nextActiveIndex;
  transformForm.activeIndex = nextActiveIndex;
  transferListComponent && transferListComponent.setState({
    transferList: this.myState.transferList
  }, function () {
    var curData = transformForm.currentData && transformForm.currentData;
    var nextData = transformForm.list[nextActiveIndex] && transformForm.list[nextActiveIndex].data;
    var nextStatus = transformForm.list[nextActiveIndex] && transformForm.list[nextActiveIndex].complete;

    if (callback) {
      callback(curData, nextData, activeIndex);
    }

    var len = _this8.myState.transferList[headTableId].transformForm.activeIndex >= transformForm.list.length ? activeIndex : _this8.myState.transferList[headTableId].transformForm.activeIndex;
    changeScroll();
    var formStatus = !transformForm.list[nextActiveIndex].complete ? 'add' : transformForm.list[nextActiveIndex].formStatus;
    isTriggerSelected && _this8.onTransferItemSelected && _this8.onTransferItemSelected(nextData, nextStatus, len, formStatus); // 转单表单重新计算列宽 add by wanglongx

    flag == 1 && _this8.form.resetItemWidth && _this8.form.resetItemWidth(headcode);
  });
}
/* 
*   根据index设置转单列表左侧卡片数据
*   @id： String 列表Id  data:要更新的数据
*   @data： Object 要更新的数据
*   @index： String/Number 要更新数据的index
* */

function setTransferListValueByIndex(id, data, index, isEdit) {
  var transferListComponent = this.myState.transferListComponent;
  this.myState.transferList[id].transformForm.list[index].data = data;
  transferListComponent && transferListComponent.setState({
    transferList: this.myState.transferList
  });
}
/**
 * 更新transferList
 * @param {*} id 
 */

function updateTransferList(id) {
  var transferListComponent = this.myState.transferListComponent;

  if (!id) {
    transferListComponent && transferListComponent.setState({
      transferList: this.myState.transferList
    });
    console.log('自助更新');
  } else {
    var transformForm = this.myState.transferList[id].transformForm; //  TODO
  }
}
/*
*   根据index更新转单列表左侧卡片数据
*   @id： String 列表Id  data:要更新的数据
*   @data： Object 要更新的数据
*   @index： String/Number 要更新数据的index
* */

function updateTransferListValueByIndex(id, data, index, isEdit) {
  var _this9 = this;

  var isNext = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var transformForm = this.myState.transferList[id].transformForm;
  var transferListComponent = this.myState.transferListComponent;
  var head = this.myState.transferList[id].transformForm.list[index].data.head; // let body = JSON.parse(JSON.stringify(this.myState.transferList[id].transformForm.list[index].data.body));

  var body = this.myState.transferList[id].transformForm.list[index].data.body; // 为了万行 暂不拷贝

  var newHead = data.head;
  var newBody = data.body;

  for (var _i35 = 0, _Object$keys32 = Object.keys(newHead); _i35 < _Object$keys32.length; _i35++) {
    var items = _Object$keys32[_i35];

    if (newHead[items]) {
      if (head.hasOwnProperty(newHead[items].areacode)) {
        var _iterator12 = _createForOfIteratorHelper(head[items].rows),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var item = _step12.value;

            var _iterator13 = _createForOfIteratorHelper(newHead[items].rows),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var ite = _step13.value;
                item.values = Object.assign(item.values, ite.values);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }
    }
  }

  for (var _i36 = 0, _Object$keys33 = Object.keys(newBody); _i36 < _Object$keys33.length; _i36++) {
    var _items = _Object$keys33[_i36];

    if (newBody[_items]) {
      if (body.hasOwnProperty(newBody[_items].areacode)) {
        var _iterator14 = _createForOfIteratorHelper(body[_items].rows),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _item2 = _step14.value;
            var len = newBody[_items].rows.length;

            for (var i = 0; i < len; i++) {
              var _ite = newBody[_items].rows[i];

              if (_item2.rowid === _ite.rowid) {
                newBody[_items].rows[i].values = Object.assign(_item2.values, _ite.values);
              }
            }
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }

        this.myState.transferList[id].transformForm.list[index].data.body[_items].rows = newBody[_items].rows;
      }
    }
  }

  transferListComponent && transferListComponent.setState({
    transferList: this.myState.transferList
  }, function () {
    var list = _this9.myState.transferList[id].transformForm.list;
    var len = list.reduce(function (total, item) {
      return total += item.complete ? 1 : 0;
    }, 0);

    if (_this9.myState.transferList[id].transformForm.list.length === 1) {
      _this9.onTransferItemSelected && _this9.onTransferItemSelected(_this9.myState.transferList[id].transformForm.list[0].data, _this9.myState.transferList[id].transformForm.list[0].complete, _this9.myState.transferList[id].transformForm.activeIndex, isEdit || 'browse');
    } else if (len === list.length) {
      _this9.onTransferItemSelected && _this9.onTransferItemSelected(_this9.myState.transferList[id].transformForm.list[transformForm.activeIndex].data, _this9.myState.transferList[id].transformForm.list[transformForm.activeIndex].complete, _this9.myState.transferList[id].transformForm.activeIndex, isEdit || 'browse');
    }
  });
  return this.myState.transferList[id].transformForm.list[index].data;
}
/*
* 清除选择数据事件*
* onClearAll： Function  全部消除后的回调函数
* */

function methods_clearAllSelectedData(onClearAll) {
  var transferTable = this.state.transferTable;
  transferTable.allSelected.selectedData.masterSelData = {};
  transferTable.allSelected.selectedData.childSelData = {};
  transferTable.allSelected.selIds = {};
  transferTable.allSelected.masterCheckedId = []; //清空已选主表id

  transferTable.allSelected.masterAmount = 0;
  transferTable.allSelected.bodyAmount = 0;

  for (var _i37 = 0, _Object$keys34 = Object.keys(transferTable); _i37 < _Object$keys34.length; _i37++) {
    var key = _Object$keys34[_i37];

    if (key !== 'allSelected') {
      transferTable[key].selected.masterCheckedId = []; //清空已选主表id

      transferTable[key].selected.selectedData.selAll = false; //取消全选

      transferTable[key].selected.selectedData.masterSelData = {};
      transferTable[key].selected.selectedData.childSelData = {};
      transferTable[key].selected.masterAmount = 0;
      transferTable[key].selected.bodyAmount = 0;
    }
  }

  this.setState({
    transferTable: transferTable
  }, function () {
    onClearAll && onClearAll();
  });
} //----------------------------------下游转单相关API---------------------------//

/*
*   下游单据保存操作后，将保存过的卡片PK存在缓存中方便返回上游的时候去除
*   @pk 要删除的单据pk  tableType：单据表类型
*/

function setSavedTransferTableDataPk(pk, DedataSource) {
  var dataSource = DedataSource || this.transferTableDataSource;
  var key = api_index_["ViewModel"].getData("".concat(dataSource, "_PK")) || [];

  var dataType = methods_typeof(pk);

  if (dataType === 'string') {
    if (!key.includes(pk)) {
      key.push(pk);
      api_index_["ViewModel"].setData("".concat(dataSource, "_PK"), key);
    }
  } else {
    var _iterator15 = _createForOfIteratorHelper(pk),
        _step15;

    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var i = _step15.value;

        if (!key.includes(i)) {
          key.push(i);
        }
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }

    api_index_["ViewModel"].setData("".concat(dataSource, "_PK"), key);
  }
}
/**
 * 刷新多来源没有全部页签的转单--提供给供应链的刘奇使用 节点：补货安排
 * 转单上下游不是在一个单页的时候，下游保存单据操作后，上游要移除那条数据，需要内部刷新转单，做到不显示移除的那条数据
 */

function refreshTransferTable(type) {
  if (type === 'multi') {
    this.setState({
      multiDelete: true
    });
  }

  if (type === 'single') {
    this.setState({
      singleDelete: true
    });
  }
}
/**
* 转单上下游是多页
* 调转的时候做上游卸载的同操作 --提供给供应链的刘奇使用 节点：补货安排
 * @param {*} dataSource 转单缓存数据的key string
 */

function whenTransferTableUnmount(dataSource, isMultiChild) {
  if (dataSource) {
    // let data = {
    //     transferTable: JSON.parse(JSON.stringify(this.state.transferTable)),
    // };
    var data = {
      transferTable: this.state.transferTable
    }; // console.log(data);
    // 设置缓存数据

    this.ViewModel.setData(dataSource, data);

    if (!isMultiChild) {
      this.ViewModel.setData("".concat(dataSource, "_PK"), []);
    }
  }
}
/*
 * 业务组删除缓存
 * dataSource： String 缓存ID
 * */

function deleteCache(dataSource) {
  api_index_["ViewModel"].setData(dataSource, null); // ViewModel.setData(---没有看到转单代码哪里有用到，不是转单内部用的
  //     `${dataSource}_clearStatus`
  //     , true)
}
/**
 * 在转单下游卡片如果没有使用createTransferList方法 则调用此方法缓存 执行保存过得单据pk
 * @param dataSource
 * @param pk
 */

function savePk(dataSource, pk) {
  var key = api_index_["ViewModel"].getData("".concat(dataSource, "_PK")) || [];

  var dataType = methods_typeof(pk);

  if (dataType === 'string') {
    if (!key.includes(pk)) {
      key.push(pk);
      api_index_["ViewModel"].setData("".concat(dataSource, "_PK"), key);
    }
  } else {
    var _iterator16 = _createForOfIteratorHelper(pk),
        _step16;

    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var i = _step16.value;

        if (!key.includes(i)) {
          key.push(i);
        }
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }

    api_index_["ViewModel"].setData("".concat(dataSource, "_PK"), key);
  }
}
/*
 * 获取下游转单执行保存过得单据pk
 * @param dataSource： String 缓存ID
 * */

function getPkCache(dataSource) {
  return api_index_["ViewModel"].getData("".concat(dataSource, "_PK"));
} // 千分位处理

/*
* num： String/Number 需要进行千分位处理的数值
* */

function numberDispose(num) {
  var str = String(num);
  if (str === null || str === undefined) return '';
  var arr = str.split('.');
  var len = 0;
  if (arr.length > 1) len = arr[1].length;
  return Object(api_index_["formatAcuracy"])(str, len);
}
/*
 * 精度处理
 * value： String/Number 需要进行精度处理的数值
 * scale: String/Number 精度
 * */

function formatDot(value, scale) {
  var dotSplit, val;

  if (value === true || value === false) {
    return value;
  }

  if (value === 'null') {
    return '';
  }

  if (!value) {
    return '';
  }

  scale = String(scale);

  if (!scale || scale === '-1') {
    return value;
  }

  val = (value || 0).toString();
  dotSplit = val.split('.');

  if (scale === '0') {
    return dotSplit[0];
  }

  if (dotSplit.length === 2) {
    if (dotSplit[1].length > scale) {
      dotSplit[1] = dotSplit[1].slice(0, Number(scale));
      return dotSplit.join('.');
    } else if (dotSplit[1].length === Number(scale)) {
      return value;
    } else {
      dotSplit[1] = dotSplit[1].padEnd(Number(scale), '0');
      return dotSplit.join('.');
    }
  } else {
    if (scale !== '0') {
      var start = value + '.';
      return start + ''.padEnd(Number(scale), '0');
    } else {
      return value;
    }
  }
}
/*
 * 获取value1和value2两个值精度较长的精度
 * value1： String/Number
 * value2: String/Number
 * */

function getLongScale(value1, value2) {
  var arr1, arr2, len1, len2;
  arr1 = String(value1).split('.');
  arr2 = String(value2).split('.');
  len1 = arr1.length;
  len2 = arr2.length;

  if (len2 === 1 && len1 === 1) {
    return String(-1);
  } else if (len2 === 1 && len1 === 2) {
    return String(arr1[1].length);
  } else if (len1 === 1 && len2 === 2) {
    return String(arr2[1].length);
  } else if (len1 === 2 && len2 === 2) {
    var le1 = arr1[1].length;
    var le2 = arr2[1].length;

    if (le1 > le2) {
      return String(arr1[1].length);
    } else if (le1 <= le2) {
      return String(arr2[1].length);
    }
  }
}
function getMaxLengthData(data, maxLength) {
  if (!data && data !== '0' && data !== 0) {
    return '';
  } else if (data === '0' || data === 0) {
    return data;
  }

  var result = String(data);

  if (typeof maxLength === 'number') {
    if (maxLength === -1) {
      return result;
    }

    if (result.length > maxLength) {
      return result.substr(0, maxLength) + '...';
    } else {
      return result;
    }
  } else if (typeof maxLength === 'string') {
    var len = Number.isNaN(Number(maxLength)) ? -1 : Number(maxLength);

    if (len > 0) {
      if (result.length > len) {
        return result.substr(0, len) + '...';
      } else {
        return result;
      }
    } else {
      return result;
    }
  } else {
    return result;
  }
}
// EXTERNAL MODULE: external "@platform/table-core/index"
var table_core_index_ = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(5);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/platform/components/TransferTable/CreateTranferTable.js
var _class, _temp;

function CreateTranferTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CreateTranferTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CreateTranferTable_ownKeys(Object(source), true).forEach(function (key) { CreateTranferTable_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CreateTranferTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CreateTranferTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CreateTranferTable_toConsumableArray(arr) { return CreateTranferTable_arrayWithoutHoles(arr) || CreateTranferTable_iterableToArray(arr) || CreateTranferTable_unsupportedIterableToArray(arr) || CreateTranferTable_nonIterableSpread(); }

function CreateTranferTable_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function CreateTranferTable_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function CreateTranferTable_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return CreateTranferTable_arrayLikeToArray(arr); }

function CreateTranferTable_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CreateTranferTable_typeof = function _typeof(obj) { return typeof obj; }; } else { CreateTranferTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CreateTranferTable_typeof(obj); }

function CreateTranferTable_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = CreateTranferTable_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function CreateTranferTable_slicedToArray(arr, i) { return CreateTranferTable_arrayWithHoles(arr) || CreateTranferTable_iterableToArrayLimit(arr, i) || CreateTranferTable_unsupportedIterableToArray(arr, i) || CreateTranferTable_nonIterableRest(); }

function CreateTranferTable_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function CreateTranferTable_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CreateTranferTable_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CreateTranferTable_arrayLikeToArray(o, minLen); }

function CreateTranferTable_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CreateTranferTable_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function CreateTranferTable_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function CreateTranferTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CreateTranferTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CreateTranferTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) CreateTranferTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) CreateTranferTable_defineProperties(Constructor, staticProps); return Constructor; }

function CreateTranferTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CreateTranferTable_setPrototypeOf(subClass, superClass); }

function CreateTranferTable_setPrototypeOf(o, p) { CreateTranferTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CreateTranferTable_setPrototypeOf(o, p); }

function CreateTranferTable_createSuper(Derived) { var hasNativeReflectConstruct = CreateTranferTable_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CreateTranferTable_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CreateTranferTable_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CreateTranferTable_possibleConstructorReturn(this, result); }; }

function CreateTranferTable_possibleConstructorReturn(self, call) { if (call && (CreateTranferTable_typeof(call) === "object" || typeof call === "function")) { return call; } return CreateTranferTable_assertThisInitialized(self); }

function CreateTranferTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CreateTranferTable_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function CreateTranferTable_getPrototypeOf(o) { CreateTranferTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CreateTranferTable_getPrototypeOf(o); }









var total = table_core_index_["lib"].total;
var ComplexTable = total(index_["Table"].SortTable);

var CreateTranferTable_CreateTranferTable = Object(api_index_["withViewModel"])(_class = (_temp = /*#__PURE__*/function (_Component) {
  CreateTranferTable_inherits(CreateTranferTable, _Component);

  var _super = CreateTranferTable_createSuper(CreateTranferTable);

  function CreateTranferTable(props) {
    var _this2;

    CreateTranferTable_classCallCheck(this, CreateTranferTable);

    _this2 = _super.call(this, props);

    _this2.dealDataFromTransferListBack = function () {
      var isWillMount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var _this2$props = _this2.props,
          _this = _this2$props._this,
          dataSource = _this2$props.dataSource,
          componentInitFinished = _this2$props.componentInitFinished,
          headTableId = _this2$props.headTableId;

      if (dataSource) {
        var data = _this2.ViewModel.getData(dataSource); // 转单数据缓存还原


        if (data && data.transferTable && Object.keys(data.transferTable).length) {
          var pk = _this2.ViewModel.getData("".concat(dataSource, "_PK")) || []; // 下有转单保存的pk， 需要在缓存中删除
          // let ID = this.ViewModel.getData(`${dataSource}_ID`) || {}; // 主表子表每条数据的的key， 删除缓存中保存过的单据要用

          _this2.processingData(data.transferTable, pk, headTableId);

          _this.setState({
            transferTable: data.transferTable
          }, function () {
            // 清除一下
            // this.ViewModel.setData(dataSource, null);
            //执行数据初始化周期函数
            if (isWillMount && typeof componentInitFinished == 'function') {
              componentInitFinished();
            }
          });
        }
      }
    };

    _this2.setModalTransferTableHeight = function () {
      var _this2$props2 = _this2.props,
          transferTable = _this2$props2.transferTable,
          showSeletedArea = _this2$props2.showSeletedArea,
          selectedShow = transferTable.selected.selectedShow && showSeletedArea,
          modalBodySelector = document.querySelector('.u-modal-body'),
          modalBodyNowClient = modalBodySelector ? modalBodySelector.getBoundingClientRect() : null,
          transferTableTop = _this2.transfertableMain && _this2.transfertableMain.current && _this2.transfertableMain.current.getBoundingClientRect && _this2.transfertableMain.current.getBoundingClientRect().top,
          transferTableHeight = 0; // 判断是设置全部列表的高度还是设置已选列表的高度


      if (selectedShow) {
        if (!_this2.setSelectListHeightIsDone) {
          transferTableHeight = modalBodyNowClient.bottom - transferTableTop; // 15 是modal的paddingBottom

          _this2.setState({
            transferTableHeight: transferTableHeight,
            selectedListHeight: transferTableHeight
          }, function () {
            _this2.setSelectListHeightIsDone = true;
            _this2.showTransferTableTimer = null;
          });
        }
      } else {
        if (!_this2.setListHeightIsDone) {
          transferTableHeight = modalBodyNowClient.bottom - transferTableTop; // 15 是modal的paddingBottom

          _this2.setState({
            transferTableHeight: transferTableHeight,
            listHeight: transferTableHeight
          }, function () {
            _this2.setListHeightIsDone = true;
            _this2.showTransferTableTimer = null;
          });
        }
      }
    };

    _this2.transferTableIsInModal = function () {
      var modalSelector = document.querySelector('.u-modal-body');
      var transfertableNowCurrent = _this2.transfertableMain.current;
      var result = [];
      var father = transfertableNowCurrent && transfertableNowCurrent.parentNode;

      while (father && father.tagName != 'BODY') {
        result.push(father);
        father = father.parentNode;
      }

      _this2.doing = false;
      _this2.transfertableMainIsModalSChild = result.includes(modalSelector);
    };

    _this2.onresizeEvents = function (_ref) {
      var isIntl = _ref.isIntl,
          windowResize = _ref.windowResize;
      var _this2$props3 = _this2.props,
          transferTable = _this2$props3.transferTable,
          showSeletedArea = _this2$props3.showSeletedArea;
      var selectedShow = transferTable.selected.selectedShow && showSeletedArea;
      var windowHeight = getScrollTop();

      var transferTableTop = _this2.transfertableMain && _this2.transfertableMain.current && _this2.transfertableMain.current.getBoundingClientRect && _this2.transfertableMain.current.getBoundingClientRect().top;

      resizeEvent(isIntl, windowResize, selectedShow, transferTableTop, windowHeight, CreateTranferTable_assertThisInitialized(_this2));
    };

    _this2.switchSelectedAndAll = function () {
      var _this2$props4 = _this2.props,
          _this = _this2$props4._this,
          transferTable = _this2$props4.transferTable,
          headTableId = _this2$props4.headTableId;
      var oldSelectedShow = transferTable.selected.selectedShow;

      if (!oldSelectedShow) {
        //to查看已选列表
        transferTable.selected.selectedShow = true;
      } else {
        //to关闭已选列表
        transferTable.selected.selectedShow = false;
        _this.state.transferTable[headTableId] = transferTable;
      }

      _this.setState({
        transferTable: _this.state.transferTable
      }, function () {
        _this2.onresizeEvents({
          isIntl: false,
          windowResize: false
        });
      });
    };

    _this2.getSelectedAmount = function () {
      var _this = _this2.props._this;
      var transferTable = _this.state.transferTable;
      var bodyAmount = 0,
          masterAmount = 0;

      for (var _i = 0, _Object$keys = Object.keys(transferTable); _i < _Object$keys.length; _i++) {
        var item = _Object$keys[_i];

        if (item !== 'allSelected') {
          var selected = transferTable[item].selected;
          masterAmount += selected.masterAmount ? Number(selected.masterAmount) : 0;
          bodyAmount += selected.bodyAmount ? Number(selected.bodyAmount) : 0;
        }
      }

      return {
        masterAmount: masterAmount,
        bodyAmount: bodyAmount
      };
    };

    _this2.customAggregate = function () {
      var _this2$props5 = _this2.props,
          _this = _this2$props5._this,
          totalKey = _this2$props5.totalKey,
          getTheLongestPrecision = _this2$props5.getTheLongestPrecision,
          totalTitle = _this2$props5.totalTitle,
          transferTable = _this2$props5.transferTable;
      var allSelected = transferTable['selected'].selectedData;
      var masterSelData = allSelected.masterSelData;
      var childSelData = allSelected.childSelData;
      var data = [];
      var values = totalKey.reduce(function (total, now) {
        total[now] = 0;
        return total;
      }, {});

      for (var _i2 = 0, _Object$entries = Object.entries(masterSelData); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = CreateTranferTable_slicedToArray(_Object$entries[_i2], 2),
            name = _Object$entries$_i[0],
            item = _Object$entries$_i[1];

        var masterValue = item.data;

        var _iterator = CreateTranferTable_createForOfIteratorHelper(totalKey),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _key = _step.value;

            if (masterValue.hasOwnProperty(_key)) {
              values[_key] = getTheLongestPrecision(String(masterValue[_key].value), String(values[_key]));
              values[_key] = numberDispose(values[_key]);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (childSelData.hasOwnProperty(name)) {
          for (var _i3 = 0, _Object$entries2 = Object.entries(childSelData[name]); _i3 < _Object$entries2.length; _i3++) {
            var _Object$entries2$_i = CreateTranferTable_slicedToArray(_Object$entries2[_i3], 2),
                na = _Object$entries2$_i[0],
                it = _Object$entries2$_i[1];

            var childValue = it.data.values ? it.data.values : it.data;

            var _iterator2 = CreateTranferTable_createForOfIteratorHelper(totalKey),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var key = _step2.value;

                if (childValue.hasOwnProperty(key)) {
                  values[key] = getTheLongestPrecision(String(childValue[key].value), String(values[key]));
                  values[key] = numberDispose(values[key]);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
      }

      totalKey.map(function (item, index) {
        data.push({
          title: totalTitle[index],
          value: values[item],
          key: item
        });
      }); // 我墮落了

      return data.length ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        style: {
          display: 'inline-block'
        }
      }, data.map(function (item) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          key: item.key,
          style: {
            display: 'inline-block',
            marginRight: '20px'
          }
        }, "".concat(item.title, ": ").concat(item.value));
      })) : '';
    };

    _this2.bodyTableDataIsSelected = function (rowData, item) {
      return rowData && rowData.rows && rowData.rows.some(function (ritem) {
        return ritem.childId === item;
      });
    };

    _this2.processingTotalData = function (selected, tableType, column, showFullTable, currentTable) {
      var getScaleData = _this2.props.getScaleData;
      var outerData = {};
      var totalKey = [];
      var totalScale = {};
      var childSelData = selected.selectedData.childSelData;
      var masterSelData = selected.selectedData.masterSelData;
      var masterTableData = currentTable ? currentTable.outerData : Object.keys(masterSelData);
      var bodyTableData = currentTable && currentTable.bodyData && currentTable.bodyData.data;

      var _iterator3 = CreateTranferTable_createForOfIteratorHelper(column),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _item = _step3.value;
          outerData[_item['attrcode']] = {
            value: '',
            display: ''
          };

          if (_item.istotal) {
            totalKey.push(_item.attrcode);
            totalScale[_item.attrcode] = _item.scale;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (!showFullTable || tableType === 'simple') {
        //  应该依赖outData 进行计算
        var _iterator4 = CreateTranferTable_createForOfIteratorHelper(masterTableData),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var items = _step4.value;
            items = items.rowId ? items.rowId : items;

            if (masterSelData[items]) {
              // outData 存在  已选不存在的  不计算
              var values = masterSelData[items].data;

              var _iterator5 = CreateTranferTable_createForOfIteratorHelper(totalKey),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var i = _step5.value;

                  if (values[i] && CreateTranferTable_typeof(values[i]) === 'object') {
                    var value = values[i] ? values[i].value : 0;
                    var scale = values[i].scale ? values[i].scale : totalScale[i];

                    if (!outerData[i].value) {
                      outerData[i].scale = scale;
                      outerData[i].value = getScaleData(String(value), outerData[i].scale);
                    } else {
                      var totalData = Object(api_index_["sum"])(Number.parseFloat(value), Number.parseFloat(outerData[i].value.replace(/,/g, '')));
                      outerData[i].scale = scale > outerData[i].scale ? scale : outerData[i].scale;
                      outerData[i].value = getScaleData(String(totalData), outerData[i].scale);
                    }
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } else if (showFullTable && tableType !== 'simple') {
        if (childSelData) {
          for (var _i4 = 0, _Object$keys2 = Object.keys(childSelData); _i4 < _Object$keys2.length; _i4++) {
            var _items = _Object$keys2[_i4];

            for (var _i5 = 0, _Object$keys3 = Object.keys(childSelData[_items]); _i5 < _Object$keys3.length; _i5++) {
              var item = _Object$keys3[_i5];

              if (!bodyTableData || bodyTableData && _this2.bodyTableDataIsSelected(bodyTableData[_items], item)) {
                // 做一下判断当前表格中是否有对应已选的数据
                var _iterator6 = CreateTranferTable_createForOfIteratorHelper(totalKey),
                    _step6;

                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var _i6 = _step6.value;

                    if (childSelData[_items][item].data.values ? childSelData[_items][item].data.values.hasOwnProperty(_i6) : childSelData[_items][item].data.hasOwnProperty(_i6)) {
                      var _values = childSelData[_items][item].data.values || childSelData[_items][item].data;

                      if (_values[_i6] && CreateTranferTable_typeof(_values[_i6]) === 'object') {
                        var _value = _values[_i6] ? _values[_i6].value : 0;

                        var _scale = _values[_i6].scale ? _values[_i6].scale : totalScale[_i6];

                        if (!outerData[_i6].value) {
                          outerData[_i6].scale = _scale;
                          outerData[_i6].value = getScaleData(String(_value), outerData[_i6].scale);
                        } else {
                          var _totalData = Object(api_index_["sum"])(Number.parseFloat(_value), Number.parseFloat(outerData[_i6].value.replace(/,/g, '')));

                          outerData[_i6].scale = _scale > outerData[_i6].scale ? _scale : outerData[_i6].scale;
                          outerData[_i6].value = getScaleData(String(_totalData), outerData[_i6].scale);
                        }
                      }
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
              }
            }
          }
        } //  应该依赖outData 进行计算


        var _iterator7 = CreateTranferTable_createForOfIteratorHelper(masterTableData),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _items2 = _step7.value;
            _items2 = _items2.rowId ? _items2.rowId : _items2;

            if (masterSelData[_items2]) {
              // outData 存在  已选不存在的  不计算
              var _values2 = masterSelData[_items2].data.values || masterSelData[_items2].data;

              var _iterator8 = CreateTranferTable_createForOfIteratorHelper(totalKey),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _i7 = _step8.value;

                  if (_values2.hasOwnProperty(_i7)) {
                    if (_values2[_i7] && CreateTranferTable_typeof(_values2[_i7]) === 'object') {
                      var _value2 = _values2[_i7] ? _values2[_i7].value : '0';

                      var _scale2 = _values2[_i7].scale ? _values2[_i7].scale : totalScale[_i7];

                      if (!outerData[_i7].value) {
                        outerData[_i7].scale = _scale2;
                        outerData[_i7].value = getScaleData(String(_value2), _scale2);
                      } else {
                        var _totalData2 = Object(api_index_["sum"])(Number.parseFloat(_value2), Number.parseFloat(outerData[_i7].value.replace(/,/g, '')));

                        outerData[_i7].scale = _scale2 > outerData[_i7].scale ? _scale2 : outerData[_i7].scale;
                        outerData[_i7].value = getScaleData(String(_totalData2), outerData[_i7].scale);
                      }
                    }
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }

      return [outerData];
    };

    _this2.processingTotalDataChild = function (data, column, record) {
      var getScaleData = _this2.props.getScaleData;
      var key = record.key;
      var childData = data[key];
      var outerData = {};
      var totalKey = [];
      var totalScale = {};

      var _iterator9 = CreateTranferTable_createForOfIteratorHelper(column),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var item = _step9.value;
          outerData[item['attrcode']] = {
            value: '',
            display: ''
          };

          if (item.istotal) {
            totalKey.push(item.attrcode);
            totalScale[item.attrcode] = item.scale;
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      if (childData) {
        for (var _i8 = 0, _Object$keys4 = Object.keys(childData); _i8 < _Object$keys4.length; _i8++) {
          var items = _Object$keys4[_i8];
          var values = childData[items].data.values ? childData[items].data.values : childData[items].data;

          var _iterator10 = CreateTranferTable_createForOfIteratorHelper(totalKey),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var i = _step10.value;

              if (values[i] && CreateTranferTable_typeof(values[i]) === 'object') {
                var scale = values[i].scale ? values[i].scale : totalScale[i];
                var value = values[i] ? values[i].value : 0;

                if (!outerData[i].value) {
                  outerData[i].scale = scale;
                  outerData[i].value = getScaleData(String(value), scale);
                } else {
                  var totalData = Object(api_index_["sum"])(Number.parseFloat(value), Number.parseFloat(outerData[i].value.replace(/,/g, '')));
                  outerData[i].scale = scale > outerData[i].scale ? scale : outerData[i].scale;
                  outerData[i].value = getScaleData(String(totalData), outerData[i].scale);
                }
              }
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }
      }

      return [outerData];
    };

    _this2.expandedRowRender = function (record, index) {
      var _this2$props6 = _this2.props,
          bodyColumn = _this2$props6.bodyColumn,
          isBodyTotal = _this2$props6.isBodyTotal,
          _this = _this2$props6._this,
          currentTable = _this2$props6.currentTable,
          createNewData = _this2$props6.createNewData,
          transferTable = _this2$props6.transferTable,
          setSelectedColumns = _this2$props6.setSelectedColumns,
          createNewCol = _this2$props6.createNewCol,
          isDrag = _this2$props6.isDrag,
          showChildIndex = _this2$props6.showChildIndex,
          comType = _this2$props6.comType,
          sortType = _this2$props6.sortType,
          bodyTableId = _this2$props6.bodyTableId,
          headTableId = _this2$props6.headTableId,
          meta = _this2$props6.meta,
          cancelCustomRightMenu = _this2$props6.cancelCustomRightMenu; // socket 错误消息

      var socketErrorClass = '',
          values = record.values || record;

      if (values && values.saga_status && values.saga_status.value === '1') {
        socketErrorClass = ' socket-error-class';
      }

      var newColumn = bodyColumn;
      var curKey = record.headKey || record.key;

      var TotalDataChild = _this2.processingTotalDataChild(transferTable.selected.selectedData.childSelData, newColumn, record);

      var colsSettingParam = getcolsSettingParam.call(_this, meta, bodyTableId);

      if (newColumn instanceof Array && newColumn.length > 0) {
        newColumn = _this2.renderColumnsMultiSelectChild.call(_this, newColumn, record, index, comType);

        if (currentTable.bodyData && Object.keys(currentTable.bodyData).length && currentTable.bodyData.data.hasOwnProperty(curKey) || transferTable && transferTable.selected && transferTable.selected.selectedData && comType === 'selectedList') {
          var data = null;
          var expandTableHeight = 0; //展开子表的高度

          var expandTableBodyHeight = 0; //展开子表表体的高度
          //已选列表的子表移除时需要删除行数据

          if (comType === 'selectedList') {
            data = createNewData(Object.values(transferTable.selected.selectedData.childSelData[curKey] || {}).map(function (item) {
              return item.data;
            }));
          } else {
            var intlData = currentTable.bodyData.data[record.key].rows || currentTable.bodyData.data[record.key];
            data = createNewData(intlData);
            expandTableHeight = getExpandTableHeight(data, isBodyTotal, external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(CreateTranferTable_assertThisInitialized(_this2)));
            expandTableBodyHeight = getExpandTableHeight(data, isBodyTotal, external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(CreateTranferTable_assertThisInitialized(_this2)), true);
          } // console.log(expandTableHeight, `selected-list-${index}_table`, ReactDOM.findDOMNode(this));


          var selectedStatus = transferTable.selected.selectedShow;

          if (selectedStatus) {
            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
              className: "u-col-md-12 u-col-sm-12 u-col-xs-12 transfertable-expand-wraper ".concat(socketErrorClass),
              fieldid: Object(api_index_["getSysFieldid"])("selected-list-".concat(index, "_table")),
              style: {
                height: "".concat(expandTableHeight, "px")
              }
            }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ComplexTable, {
              className: "".concat(isBodyTotal ? 'expand-table expand-table-total' : 'expand-table'),
              columns: setSelectedColumns(createNewCol({
                column: newColumn,
                outerRecordKey: curKey,
                columnType: 'child',
                json: _this2.state.json
              })),
              data: data,
              lazyload: true,
              isDrag: isDrag,
              isTotal: isBodyTotal,
              totalBodyHeight: 30,
              totalData: TotalDataChild,
              totalColumns: _this2.createClumus(newColumn, showChildIndex, false, 45, true),
              scroll: {
                x: true,
                y: expandTableBodyHeight || 450
              },
              sort: sortType,
              updateColumnHandle: updateColumnAfterSetting.bind(CreateTranferTable_assertThisInitialized(_this2)),
              bodyStyle: {
                minHeight: '30px'
              },
              tableType: "transfer" //折行回调
              ,
              foldingRowChange: function foldingRowChange(isEllipsis) {
                _this.state.transferTable[headTableId]['isEllipsis'] = isEllipsis;

                _this.setState({
                  transferTable: _this.state.transferTable
                });
              },
              bodyDisplayInRow: _this.state.transferTable[headTableId]['isEllipsis'],
              cancelCustomRightMenu: cancelCustomRightMenu,
              colsSettingParam: colsSettingParam
            }));
          }

          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            className: "u-col-md-12 u-col-sm-12 u-col-xs-12 transfertable-expand-wraper ".concat(socketErrorClass),
            fieldid: Object(api_index_["getSysFieldid"])("transfer-".concat(index, "_table")),
            style: {
              height: "".concat(expandTableHeight, "px")
            }
          }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ComplexTable, {
            className: "".concat(isBodyTotal ? 'expand-table expand-table-total' : 'expand-table'),
            columns: createNewCol({
              column: newColumn,
              outerRecordKey: curKey,
              columnType: 'child',
              json: _this2.state.json
            }),
            data: data,
            isDrag: isDrag,
            scroll: {
              x: true,
              y: expandTableBodyHeight || 450
            },
            lazyload: true,
            isTotal: isBodyTotal,
            totalData: TotalDataChild,
            totalBodyHeight: 30,
            totalColumns: _this2.createClumus(newColumn, showChildIndex, false, 45, true),
            sort: sortType,
            updateColumnHandle: updateColumnAfterSetting.bind(CreateTranferTable_assertThisInitialized(_this2)),
            bodyStyle: {
              minHeight: '30px'
            },
            tableType: "transfer" //折行回调
            ,
            foldingRowChange: function foldingRowChange(isEllipsis) {
              _this.state.transferTable[headTableId]['isEllipsis'] = isEllipsis;

              _this.setState({
                transferTable: _this.state.transferTable
              });
            },
            bodyDisplayInRow: _this.state.transferTable[headTableId]['isEllipsis'],
            colsSettingParam: colsSettingParam,
            cancelCustomRightMenu: cancelCustomRightMenu
          }));
        }
      } else {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null);
      }
    };

    _this2.haveExpandIcon = function (headTableId, isSelected, record, index) {
      var _this2$props7 = _this2.props,
          bodyColumn = _this2$props7.bodyColumn,
          currentTable = _this2$props7.currentTable,
          transferTable = _this2$props7.transferTable;
      var haveBodyData, haveBodyColumn;

      if (isSelected) {
        var childSelData = transferTable.selected.selectedData.childSelData;
        var childSelDatalen = Object.keys(childSelData) && Object.keys(childSelData).length;

        if (childSelDatalen) {
          haveBodyData = true;
        }
      } else {
        if (transferTable && transferTable[headTableId] && transferTable[headTableId].outerData) {
          // 这里要修正下 因为滚动加载导致 index返回值并不正确
          // let rowId = transferTable[headTableId].outerData[index].rowId;
          var rowId = record.key || record.headKey;

          if (currentTable && currentTable.bodyData && currentTable.bodyData.data && currentTable.bodyData.data[rowId]) {
            if (currentTable.bodyData.data[rowId].rows.length > 0) {
              haveBodyData = true;
            }
          }
        }
      }

      if (bodyColumn instanceof Array && bodyColumn.length > 0) {
        haveBodyColumn = true;
      }

      if (haveBodyData && haveBodyColumn) {
        return false;
      } else {
        return true;
      }
    };

    _this2.processingData = function (transferTable, pk, headTableId) {
      // 有些数据可能没清掉 导致BUG NCCLOUD-172457
      var _this2$props8 = _this2.props,
          onCheckedChange = _this2$props8.onCheckedChange,
          tableType = _this2$props8.tableType;

      if (pk.length) {
        for (var _i9 = 0, _Object$keys5 = Object.keys(transferTable); _i9 < _Object$keys5.length; _i9++) {
          var items = _Object$keys5[_i9];

          if (items === headTableId) {
            (function () {
              var data = transferTable[items][headTableId]['bodyData'].hasOwnProperty('data') ? transferTable[items][headTableId]['bodyData']['data'] : null;
              var outerData = transferTable[items][headTableId]['outerData'];
              var selected = transferTable[items]['selected']['selectedData'];
              var masterCheckedId = transferTable[items]['selected'] && transferTable[items]['selected'].masterCheckedId;
              var childSelect = selected && selected.childSelData;
              var masterSelect = selected && selected.masterSelData;
              var selectedShow = transferTable[items]['selected'].selectedShow;
              var bodyAmountLen = 0; // 上游选择了多子数据
              // 如果下游只保存了一个数据 这里就有问题了 
              // transferTable[items][headTableId]['outerData'] = outerData.length ? outerData.filter(item => {
              //     return !pk.includes(item.rowId) && !masterCheckedId.includes(item.rowId);
              // }) : [];
              // 先清理主 再清理子

              masterCheckedId = masterCheckedId.filter(function (item) {
                return !pk.includes(item);
              });
              transferTable[items][headTableId]['outerData'] = outerData.length ? outerData.filter(function (item) {
                if (pk.includes(item.rowId)) {
                  return false;
                }

                if (data && Object.keys(data).length && data[item.rowId] && data[item.rowId].rows) {
                  // 这里需要先记录下 初始数据  不然会导致没有子级的数据返回时被删除
                  var originLength = data[item.rowId].rows.length;
                  data[item.rowId].rows = data[item.rowId].rows.filter(function (citem) {
                    return !pk.includes(citem.childId);
                  }); // 如果子集都没有了 父级也不需要了？？？ 这里注意 一定要一开始有子集 然后才能移除父级

                  if (originLength && data[item.rowId].rows.length === 0) {
                    return false;
                  }
                }

                return true;
              }) : []; // 还有一个全选的状态也需要处理下  TODO

              if (pk && pk.length > 0) {
                selected && (selected.selAll = false);
              } // 根据保存时缓存的pk删除之前保存过的单据


              if (data && Object.keys(data).length) {
                for (var _i10 = 0, _Object$keys6 = Object.keys(data); _i10 < _Object$keys6.length; _i10++) {
                  var val = _Object$keys6[_i10];

                  if (pk.includes(val)) {
                    delete data[val];
                  } else {
                    data[val].rows = data[val].rows.filter(function (item) {
                      return !pk.includes(item.childId);
                    });
                  }
                }
              } // 删表体数据


              if (childSelect && Object.keys(childSelect).length) {
                var _loop = function _loop() {
                  var itemm = _Object$keys7[_i11];
                  var onChecked = {
                    body: [],
                    head: {}
                  };
                  var headIndex = Object.keys(data).indexOf(itemm);

                  if (pk.includes(itemm)) {
                    delete childSelect[itemm];
                  } else {
                    for (var _i12 = 0, _Object$keys8 = Object.keys(childSelect[itemm]); _i12 < _Object$keys8.length; _i12++) {
                      var item = _Object$keys8[_i12];

                      if (pk.includes(item)) {
                        delete childSelect[itemm][item];

                        if (!Object.keys(childSelect[itemm]).length) {
                          delete childSelect[itemm];
                          delete masterSelect[itemm];
                          transferTable[items]['selected'].masterCheckedId = masterCheckedId.filter(function (it) {
                            return it !== itemm;
                          });
                          transferTable.allSelected.masterCheckedId = masterCheckedId.filter(function (it) {
                            return it !== itemm;
                          });
                        }
                      } else {
                        onChecked.body.push(childSelect[itemm][item].data.values ? childSelect[itemm][item].data.values : childSelect[itemm][item].data);
                      }
                    }
                  }

                  if (masterSelect.hasOwnProperty(itemm)) {
                    onChecked.head = masterSelect[itemm].data;
                  }

                  if (Object.keys(onChecked.head).length) {
                    if (typeof onCheckedChange === 'function') {
                      onCheckedChange(true, JSON.parse(JSON.stringify(onChecked.head)), headIndex, JSON.parse(JSON.stringify(onChecked.body)));
                    }
                  }
                };

                for (var _i11 = 0, _Object$keys7 = Object.keys(childSelect); _i11 < _Object$keys7.length; _i11++) {
                  _loop();
                }
              } // 删表头数据


              if (masterSelect && Object.keys(masterSelect).length) {
                for (var _i13 = 0, _Object$keys9 = Object.keys(masterSelect); _i13 < _Object$keys9.length; _i13++) {
                  var _items3 = _Object$keys9[_i13];
                  var onChecked = {
                    body: [],
                    head: {}
                  };

                  if (masterSelect.hasOwnProperty(_items3)) {
                    onChecked.head = masterSelect[_items3].data;
                  }

                  var headIndex = Object.keys(masterSelect).indexOf(_items3);

                  if (pk.includes(_items3)) {
                    delete masterSelect[_items3];
                  } else if (tableType === 'simple') {
                    if (Object.keys(onChecked.head).length) {
                      if (typeof onCheckedChange === 'function') {
                        onCheckedChange(true, JSON.parse(JSON.stringify(onChecked.head)), headIndex, JSON.parse(JSON.stringify(onChecked.body)));
                      }
                    }
                  }
                }
              }

              if (childSelect && Object.keys(childSelect).length) {
                for (var _i14 = 0, _Object$keys10 = Object.keys(childSelect); _i14 < _Object$keys10.length; _i14++) {
                  var item = _Object$keys10[_i14];
                  // 有个数据没有子数据  但是应该也算一行数据
                  bodyAmountLen += Object.keys(childSelect[item]).length || 1;
                }
              }

              transferTable[items]['selected'].selectedShow = selectedShow;
              transferTable[items]['selected'].bodyAmount = bodyAmountLen;
              transferTable[items]['selected'].masterAmount = Object.keys(masterSelect).length;
              transferTable[items]['selected'] && (transferTable[items]['selected'].masterCheckedId = masterCheckedId);
            })();
          } // 如果不清理 allSelected 会导致问题


          if (items == 'allSelected') {
            var selIds = transferTable.allSelected ? transferTable.allSelected.selIds : null;
            var selectedData = transferTable.allSelected.selectedData;
            var childSelData = selectedData.childSelData;
            var masterSelData = selectedData.masterSelData;
            var masterCheckedId = transferTable.allSelected.masterCheckedId || [];
            var bodyAmount = 0;

            if (selIds) {
              var _loop2 = function _loop2() {
                var item = _Object$keys11[_i15];
                transferTable.allSelected.selIds[item] = selIds[item].filter(function (i) {
                  return !pk.includes(i);
                });

                if (!selIds[item].length) {
                  masterCheckedId = masterCheckedId.filter(function (i) {
                    return i !== item;
                  });
                  delete selIds[item];
                }
              };

              for (var _i15 = 0, _Object$keys11 = Object.keys(selIds); _i15 < _Object$keys11.length; _i15++) {
                _loop2();
              }

              var _loop3 = function _loop3() {
                var item = _Object$keys12[_i16];

                for (var _i17 = 0, _Object$keys13 = Object.keys(childSelData[item]); _i17 < _Object$keys13.length; _i17++) {
                  var i = _Object$keys13[_i17];

                  if (pk.includes(i)) {
                    delete childSelData[item][i];
                  }
                }

                if (!Object.keys(childSelData[item]).length) {
                  masterCheckedId = masterCheckedId.filter(function (masterItems) {
                    return masterItems !== item;
                  });
                  delete masterSelData[item];
                  delete childSelData[item];
                }
              };

              for (var _i16 = 0, _Object$keys12 = Object.keys(childSelData); _i16 < _Object$keys12.length; _i16++) {
                _loop3();
              }

              for (var _i18 = 0, _Object$keys14 = Object.keys(selIds); _i18 < _Object$keys14.length; _i18++) {
                var item = _Object$keys14[_i18];

                if (selIds[item]) {
                  // 有个数据没有子数据  但是应该也算一行数据
                  bodyAmount += selIds[item].length || 1;
                }
              }

              transferTable.allSelected.masterCheckedId = masterCheckedId;
              transferTable.allSelected.masterAmount = Object.keys(selIds).length;
              transferTable.allSelected.bodyAmount = bodyAmount;
            }
          }
        } // 后续可以优化下
        // 由于刘奇那边有个统计  所以这里触发一下onCheckedChange  NCCLOUD-158999

      } else if (_this2.props.onCheckedChange) {
        for (var _i19 = 0, _Object$keys15 = Object.keys(transferTable); _i19 < _Object$keys15.length; _i19++) {
          var _items4 = _Object$keys15[_i19];

          if (_items4 === headTableId) {
            var dataKeys = Object.keys(transferTable[_items4][headTableId]['bodyData'].hasOwnProperty('data') ? transferTable[_items4][headTableId]['bodyData']['data'] : {}),
                selected = transferTable[_items4]['selected']['selectedData'],
                childSelect = selected && selected.childSelData,
                childSelectKeys = Object.keys(childSelect),
                masterSelect = selected && selected.masterSelData,
                masterSelectKeys = Object.keys(masterSelect);

            if (childSelect && childSelectKeys.length) {
              var _iterator11 = CreateTranferTable_createForOfIteratorHelper(childSelectKeys),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var citems = _step11.value;
                  var onChecked = {
                    body: [],
                    head: masterSelect[citems] ? masterSelect[citems].data : {}
                  };
                  var childSelectItem = childSelect[citems],
                      childSelectItemsKeys = Object.keys(childSelectItem);

                  for (var _i20 = 0, _childSelectItemsKeys = childSelectItemsKeys; _i20 < _childSelectItemsKeys.length; _i20++) {
                    var _item2 = _childSelectItemsKeys[_i20];
                    onChecked.body.push(childSelectItem[_item2].data.values ? childSelectItem[_item2].data.values : childSelectItem[_item2].data);
                  }

                  if (Object.keys(onChecked.head).length && typeof onCheckedChange === 'function') {
                    var headIndex = dataKeys.indexOf(citems);
                    onCheckedChange(true, JSON.parse(JSON.stringify(onChecked.head)), headIndex, JSON.parse(JSON.stringify(onChecked.body)));
                  }
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
            }

            if (masterSelectKeys.length && tableType === 'simple') {
              var _iterator12 = CreateTranferTable_createForOfIteratorHelper(masterSelectKeys),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var mitems = _step12.value;

                  if (!pk.includes(mitems)) {
                    if (typeof onCheckedChange === 'function') {
                      var _headIndex = masterSelectKeys.indexOf(mitems);

                      onCheckedChange(true, JSON.parse(JSON.stringify(masterSelect[mitems].data)), _headIndex, masterSelectKeys.indexOf(mitems), []);
                    }
                  }
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            }
          }
        }
      } else {
        console.log('么得数据！么得PK！');
      }
    };

    _this2.renderColumnsMultiSelectChild = function (columns, records, indexs, comType) {
      var json = _this2.state.json;
      var _this2$props9 = _this2.props,
          _this = _this2$props9._this,
          defaultProps = _this2$props9.defaultProps,
          showChildIndex = _this2$props9.showChildIndex,
          onSelectedItemRemove = _this2$props9.onSelectedItemRemove,
          transferTable = _this2$props9.transferTable,
          onCheckboxChangeChild = _this2$props9.onCheckboxChangeChild,
          currentTable = _this2$props9.currentTable;
      var multiSelect = defaultProps.multiSelect;
      var indexCol = [{
        label: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          style: {
            display: 'block',
            textAlign: 'left'
          },
          bbq: "\u5B50\u8868\u5E8F\u53F7"
        }, json['page-transferTable-0007'] || '序号-1'),
        attrcode: 'numberindex',
        itemtype: 'customer',
        dataIndex: 'numberindex',
        visible: true,
        width: comType == 'hasCheckBox_child' ? 45 : 55,
        className: 'col-customer-numberindex',
        render: function render(text, record2, index) {
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            style: {
              display: 'block',
              textAlign: 'left'
            }
          }, index + 1);
        }
      }]; // 添加序号列

      var newColumn = [].concat(columns);

      if (showChildIndex) {
        newColumn = indexCol.concat(newColumn);
      }

      var oprationLabel = json['page-transferTable-0006'] ? json['page-transferTable-0006'] : '操作-2';
      /*国际化处理 操作*/
      //  根据组件类型，判断是否带复选框

      if (comType == 'hasCheckBox_child') {
        if (multiSelect && multiSelect.type === 'checkbox') {
          var parId = transferTable.selected.selectedData.childSelData[records.key]; // 主表有状态 那么子表就不需要状态 saga

          var pValues = records.values || records;
          var pSaga_status = pValues && pValues.saga_status && pValues.saga_status.value === '1';
          var defaultColumns = [{
            label: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
              bbq: "\u5B50\u8868\u590D\u9009\u6846"
            }),
            attrcode: 'checkbox',
            itemtype: 'customer',
            fixed: 'left',
            dataIndex: 'checkbox',
            width: 70,
            visible: true,
            className: 'col-customer-checkbox',
            onCellClick: function onCellClick(record, e) {
              var ck = record.key;
              var values = record.values || record;
              var index = -1;
              var bodyData = ((currentTable.bodyData.data || {})[records.key] || {}).rows || [];
              bodyData.some(function (item, i) {
                var values = item.values || item;

                if (values.key === ck) {
                  index = i;
                  return true;
                }
              }); // console.log(bodyData, index, 'xxxxx');

              if (index == -1 || pSaga_status || values && values.saga_status && values.saga_status.value === '1') {
                return;
              }

              onCheckboxChangeChild.call(CreateTranferTable_assertThisInitialized(_this2), '', record, index, records, indexs);
            },
            render: function render(text, record, index) {
              // Socket改造
              // let { billpkname, billtype, errorViewType } = _this.nativeSocketBillInfo;
              var values = record.values || record;
              return values && values.saga_status && values.saga_status.value === '1' || pSaga_status ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["ErrorPop"], {
                record: record
              }) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Checkbox"], {
                className: "table-checkbox",
                checked: !!(parId && parId[record.key]),
                onChange: onCheckboxChangeChild.bind(_this, text, record, index, records, indexs)
              });
            }
          }];
          newColumn = defaultColumns.concat(newColumn);
        }
      } else if (comType == 'selectedList') {
        //已选列表增加操作列
        var oprColumn = {
          label: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, oprationLabel),
          attrcode: 'operate',
          itemtype: 'customer',
          dataIndex: 'operate',
          width: 100,
          fixed: 'right',
          visible: true,
          render: function render(text, record, index) {
            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
              className: "row-remove",
              bbq: "\u5B50\u8868\u79FB\u9664",
              onClick: function onClick() {
                //移除子表
                onSelectedItemRemove && onSelectedItemRemove(record);
                onCheckboxChangeChild(text, record, index, records, index, true);
              }
            }, _this2.state.json['page-transferTable-0001']);
          }
        };
        newColumn = [].concat(CreateTranferTable_toConsumableArray(newColumn), [oprColumn]);
      }

      return newColumn;
    };

    _this2.expandedRowRenderSelect = function (record, index) {
      var expandedRowRender = _this2.props.expandedRowRender;
      return expandedRowRender(record, index, 'selectedList', _this2.state.json);
    };

    _this2.createClumus = function (column, showIndex) {
      var bool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var indexWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 80;
      var isChild = arguments.length > 4 ? arguments[4] : undefined;
      var json = _this2.state.json;
      var result = [];
      var _this2$props10 = _this2.props,
          comType = _this2$props10.comType,
          headTableId = _this2$props10.headTableId;
      var multiLangTotal = json['page-transferTable-0010'];
      var oprationLabel = json['page-transferTable-0006'] ? json['page-transferTable-0006'] : '操作-1';
      /*国际化处理 操作*/

      if ((comType == 'hasCheckBox' || comType == 'hasCheckBox_child') && multiLangTotal) {
        result.push({
          label: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            style: {
              display: 'block',
              textAlign: 'left'
            }
          }, json['page-transferTable-0007'] || '序号-1'),
          attrcode: 'checkbox',
          itemtype: 'customer',
          dataIndex: 'checkbox',
          visible: true,
          fixed: 'left',
          width: isChild ? 70 : 80,
          className: 'col-customer-checkbox col-customer-total',
          render: function render(text, record, index) {
            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
              bbq: "\u666E\u901A\u8868\u4E3B\u5408\u8BA1",
              title: multiLangTotal || '合计-4',
              style: {
                display: 'block',
                textAlign: 'left',
                paddingRight: '13px'
              }
            }, multiLangTotal || '合计-4');
          }
        });
      }

      if (showIndex && (!isChild || isChild && comType == 'hasCheckBox_child')) {
        result.push({
          label: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            style: {
              display: 'block',
              textAlign: 'left'
            }
          }, json['page-transferTable-0007'] || '序号-1'),
          attrcode: 'numberindex',
          itemtype: 'customer',
          dataIndex: 'numberindex',
          visible: true,
          width: indexWidth,
          className: 'col-customer-numberindex',
          render: function render(text, record, index) {
            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
              style: {}
            });
          }
        });
      }

      column.map(function (item) {
        var width = item.width;

        if (!width) {
          width = 120;
        }

        var render = null;

        if (item.itemtype !== 'customer' && item.visible && !item.render) {
          render = function render(text, record, index) {
            if (record[item.attrcode]) {
              var display = record[item.attrcode].display;
              var value = record[item.attrcode].value;
              var dom = '';

              if (display || display === 0) {
                dom = display;
              } else {
                dom = value;
              }

              if (Object(api_index_["isTimeType"])(item.itemtype)) {
                if (item.itemtype == 'datetimepicker') {
                  dom = Object(api_index_["changeTime"])(value, 'YYYY-MM-DD HH:mm:ss');
                  dom = Object(api_index_["formatDatetime"])(dom, 'datetime');
                } else if (item.itemtype == 'timepicker') {
                  dom = value;
                  dom = Object(api_index_["formatDatetime"])(dom, 'time');
                } else {
                  dom = Object(api_index_["changeTime"])(value);
                  dom = Object(api_index_["formatDatetime"])(dom, 'date');
                }
              } // 多语处理


              if (item.itemtype === "residtxt") {
                var langCode = Object(api_index_["getLangCode"])();
                var loginLang = (item.languageMeta || []).filter(function (i) {
                  return i.languageCode == langCode;
                });

                if (loginLang.length > 0) {
                  loginLang[0].index === "1" ? loginLang[0].index = "" : "";

                  if (record[item.attrcode + loginLang[0].index] && record[item.attrcode + loginLang[0].index].value) {
                    dom = record[item.attrcode + loginLang[0].index].value;
                  }
                }
              }

              if (item.itemtype === 'number') {
                dom = Object(api_index_["formatNumber"])(dom);
              }

              return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
                className: "".concat(item.itemtype === 'number' ? 'number-td-span-wrapper' : '')
              }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ellipsisToTooltip_EllipsisToTooltip, {
                overlay: dom
              }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
                className: classnames_default()({
                  'single-line-and-ellipsis': _this2.state.transferTable[headTableId]['isEllipsis'],
                  'three-line-and-ellipsis': !_this2.state.transferTable[headTableId]['isEllipsis']
                })
              }, dom)));
            }
          };
        } else {
          if (item.itemtype === 'customer') {
            render = item.render;
          } else {
            render = function render(text, record, index) {
              return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ellipsisToTooltip_EllipsisToTooltip, {
                className: "tooltip-word-color",
                overlay: item.render.call(null, text, record, index)
              }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
                className: classnames_default()('col-customer-render-unit', {
                  'single-line-and-ellipsis': _this2.state.transferTable[headTableId]['isEllipsis'],
                  'three-line-and-ellipsis': !_this2.state.transferTable[headTableId]['isEllipsis']
                })
              }, item.render.call(null, text, record, index)));
            };
          }
        }

        if (item.visible && item.attrcode !== 'checkbox' && item.attrcode !== 'numberindex') {
          result.push(CreateTranferTable_objectSpread(CreateTranferTable_objectSpread({}, item), {}, {
            render: render,
            width: width,
            key: item.attrcode,
            title: item.label
          }));
        }
      });
      bool && result.push({
        label: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, oprationLabel),
        attrcode: 'operate',
        itemtype: 'customer',
        dataIndex: 'operate',
        visible: true,
        width: 100,
        render: function render(text, record, index) {
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null);
        }
      });
      return result;
    };

    _this2.createSelectColumns = function (column, showIndex) {
      var indexWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 80;
      var json = _this2.state.json;
      var result = [];
      var _this2$props11 = _this2.props,
          comType = _this2$props11.comType,
          headTableId = _this2$props11.headTableId;
      var oprationLabel = json['page-transferTable-0006'] || '操作-1'; // 这里如果用let render方法里接收不到对应的变量  会出现显示错误  写这里也不行  必须写到里面
      // var multiLangTotal = this.state.json["page-transferTable-0010"] || '合计-5';

      /*国际化处理 操作*/

      if (comType == 'hasCheckBox' || comType == 'hasCheckBox_child') {
        result.push({
          label: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null),
          attrcode: 'checkbox',
          itemtype: 'customer',
          dataIndex: 'checkbox',
          visible: true,
          fixed: 'left',
          width: indexWidth,
          className: 'col-customer-checkbox col-customer-total',
          render: function render(text, record, index) {
            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
              title: _this2.state.json['page-transferTable-0010'] || '合计-5'
            }, _this2.state.json['page-transferTable-0010'] || '合计-5');
          }
        });
      }

      column.map(function (item) {
        var width = item.width;

        if (!width) {
          width = 120;
        }

        var render = null;

        if (item.itemtype !== 'customer' && item.visible && !item.render) {
          render = function render(text, record, index) {
            if (record[item.attrcode]) {
              var display = record[item.attrcode].display;
              var value = record[item.attrcode].value;
              var dom = '';

              if (display || display === 0) {
                dom = display;
              } else {
                dom = value;
              }

              if (Object(api_index_["isTimeType"])(item.itemtype)) {
                if (item.itemtype == 'datetimepicker') {
                  dom = Object(api_index_["changeTime"])(value, 'YYYY-MM-DD HH:mm:ss');
                  dom = Object(api_index_["formatDatetime"])(dom, 'datetime');
                } else if (item.itemtype == 'timepicker') {
                  dom = value;
                  dom = Object(api_index_["formatDatetime"])(dom, 'time');
                } else {
                  dom = Object(api_index_["changeTime"])(value);
                  dom = Object(api_index_["formatDatetime"])(dom, 'date');
                }
              } // 多语处理


              if (item.itemtype === "residtxt") {
                var langCode = Object(api_index_["getLangCode"])();
                var loginLang = (item.languageMeta || []).filter(function (i) {
                  return i.languageCode == langCode;
                });

                if (loginLang.length > 0) {
                  loginLang[0].index === "1" ? loginLang[0].index = "" : "";

                  if (record[item.attrcode + loginLang[0].index] && record[item.attrcode + loginLang[0].index].value) {
                    dom = record[item.attrcode + loginLang[0].index].value;
                  }
                }
              }

              if (item.itemtype === 'number') {
                dom = Object(api_index_["formatNumber"])(dom);
              }

              return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
                className: "".concat(item.itemtype === 'number' ? 'number-td-span-wrapper' : '')
              }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ellipsisToTooltip_EllipsisToTooltip, {
                overlay: dom
              }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
                className: classnames_default()({
                  'single-line-and-ellipsis': _this2.state.transferTable[headTableId]['isEllipsis'],
                  'three-line-and-ellipsis': !_this2.state.transferTable[headTableId]['isEllipsis']
                })
              }, dom)));
            }
          };
        } else {
          if (item.itemtype === 'customer') {
            render = item.render;
          } else {
            render = function render(text, record, index) {
              return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ellipsisToTooltip_EllipsisToTooltip, {
                className: "tooltip-word-color",
                overlay: item.render.call(null, text, record, index),
                noEllipsis: true
              }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
                className: classnames_default()('col-customer-render-unit', {
                  'single-line-and-ellipsis': _this2.state.transferTable[headTableId]['isEllipsis'],
                  'three-line-and-ellipsis': !_this2.state.transferTable[headTableId]['isEllipsis']
                })
              }, item.render.call(null, text, record, index)));
            };
          }
        }

        if (item.visible && item.attrcode !== 'checkbox' && item.attrcode !== 'numberindex') {
          result.push(CreateTranferTable_objectSpread(CreateTranferTable_objectSpread({}, item), {}, {
            render: render,
            width: width,
            key: item.attrcode,
            title: item.label
          }));
        }
      });
      result.push({
        label: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, oprationLabel),
        attrcode: 'operate',
        itemtype: 'customer',
        dataIndex: 'operate',
        visible: true,
        width: 100,
        render: function render(text, record, index) {
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null);
        }
      });
      return result;
    };

    _this2.ViewModel = _this2.props.ViewModel;
    _this2.expandArrId = _this2.props.events && _this2.props.events.expandArr;
    _this2.state = {
      switchViewState: 'evenUp',
      top: 0,
      height: 0,
      selectedTop: 0,
      selectedHeight: 0,
      json: {},
      LangData: null,
      modalBodyHeight: 0,
      windowHeight: 0,
      transferTableHeight: 0,
      selectedTransferTableHeight: 0,
      selectedListBoxHeight: 0,
      boundingClientRect: {},
      listHeight: 0,
      //
      selectedListHeight: 0
    };
    _this2.main = {};
    _this2.setTimeIndex = null;
    _this2.selsectMain = null;
    _this2.bodyDom = null;
    _this2.transfertableMain = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createRef();
    _this2.transfertableSelectedList = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createRef();
    _this2.transfertableMainIsModalSChild = false; // 转单实例是否是欠在NCMODAL弹框里面的
    // ---------

    _this2.transferTableClient = null;
    _this2.isTransferTableSetHeight = false;
    _this2.isSelectedListSetHeight = false;
    _this2.transferTableHeight = null;
    _this2.modalBodyClient = null;
    _this2.modalBodyHeight = 0; // ---------

    _this2.total = null;
    _this2.doing = true; // 用来阻止事件的

    _this2.setListHeightIsDone = false; // 用来阻止事件的

    _this2.setSelectListHeightIsDone = false; // 用来阻止事件的

    _this2.setModalHeightIsDone = false; // 用来阻止事件的

    /***获取当前浏览器类型*/

    _this2.myBrowser = Object(api_index_["myBrowser"])();
    return _this2;
  }

  CreateTranferTable_createClass(CreateTranferTable, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this3 = this;

      var callback = function callback(json, bool, LangData) {
        _this3.setState({
          json: json,
          LangData: LangData
        }, function () {
          var _this3$props = _this3.props,
              _this = _this3$props._this,
              dataSource = _this3$props.dataSource,
              componentInitFinished = _this3$props.componentInitFinished,
              headTableId = _this3$props.headTableId;

          if (dataSource) {
            var data = _this3.ViewModel.getData(dataSource); // 转单数据缓存还原


            if (data && data.transferTable && Object.keys(data.transferTable).length) {
              var pk = _this3.ViewModel.getData("".concat(dataSource, "_PK")) || []; // 下有转单保存的pk， 需要在缓存中删除
              // let ID = this.ViewModel.getData(`${dataSource}_ID`) || {}; // 主表子表每条数据的的key， 删除缓存中保存过的单据要用

              _this3.processingData(data.transferTable, pk, headTableId);

              _this.setState({
                transferTable: data.transferTable
              }, function () {
                // 清除一下
                // this.ViewModel.setData(dataSource, null);
                //执行数据初始化周期函数
                if (typeof componentInitFinished == 'function') {
                  componentInitFinished();
                }
              });
            }
          }
        });
      };

      Object(api_index_["getMultiLang"])({
        moduleId: 'page-transferTable',
        callback: callback
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      setTimeout(function () {
        _this4.onresizeEvents({
          isIntl: true
        });
      }, 200);

      window.onresize = function () {
        var _this4$props = _this4.props,
            getMultiChildChangeWidth = _this4$props.getMultiChildChangeWidth,
            isMultiChild = _this4$props.isMultiChild,
            containerSelector = _this4$props.containerSelector; //外层容器宽度

        var containerWidth = containerSelector && document.querySelector(containerSelector) && document.querySelector(containerSelector).clientWidth;

        if (isMultiChild && typeof getMultiChildChangeWidth === 'function') {
          getMultiChildChangeWidth(containerWidth, isMultiChild);
        }

        _this4.onresizeEvents({
          windowResize: true
        });
      }; // 设置一个接收装置 接收父级page所传递的信息


      var _this = this.props._this; // 查询区

      _this.infoExchangeController.subscribe('heightChange', function (name, _ref2) {
        var area = _ref2.area;

        if (area === 'searchArea' || area === _this4.props.headTableId) {
          console.log("\u4FA6\u6D4B\u5230".concat(area, "\u9AD8\u5EA6\u53D8\u5316\uFF0C\u8FDB\u884C\u9AD8\u5EA6\u6BC1\u706D\u6253\u51FB\uFF01"));
          setTimeout(function () {
            _this4.onresizeEvents({
              windowResize: true
            });
          }, 20);
        } else {
          console.log(area);
        }
      }); // 弹窗resize


      _this.infoExchangeController.subscribe('modelResizeEnd', function (name, _ref3) {
        var indexInfo = _ref3.indexInfo,
            className = _ref3.className,
            id = _ref3.id;
        console.log('侦测到弹窗resize变化，随风起舞吧！', indexInfo, className, id, name);
        setTimeout(function () {
          _this4.onresizeEvents({
            windowResize: true
          });
        }, 20);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props = this.props,
          _this = _this$props._this,
          dataSource = _this$props.dataSource,
          isMultiChild = _this$props.isMultiChild;
      whenTransferTableUnmount.call(_this, dataSource, isMultiChild); // 可能需要清理 这里清理了 别人就不能用了  可以考虑 topic模式

      _this.infoExchangeController && _this.infoExchangeController.unsubscribe('heightChange');
      _this.infoExchangeController && _this.infoExchangeController.unsubscribe('modelResizeEnd');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this = this.props._this;

      if (_this.state.singleDelete) {
        //供应链刘奇的转单上下游是多页，下游保存单据后，上游需要更新删除保存后的数据
        this.dealDataFromTransferListBack(false);
        _this.state.singleDelete = false;
      }
    }
    /**
     * 转单下游回到上游以后，检测保存过的数据，然后删除
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classByType = _this$props2.classByType,
          column = _this$props2.column,
          columns = _this$props2.columns,
          comType = _this$props2.comType,
          isHeadTotal = _this$props2.isHeadTotal,
          isFullTotal = _this$props2.isFullTotal,
          createNewCol = _this$props2.createNewCol,
          createFullData = _this$props2.createFullData,
          createNewData = _this$props2.createNewData,
          currentTable = _this$props2.currentTable,
          customAreaOfSelectedHead = _this$props2.customAreaOfSelectedHead,
          fullColumns = _this$props2.fullColumns,
          getMasterData = _this$props2.getMasterData,
          getSelectedFullData = _this$props2.getSelectedFullData,
          handleClearAllSelected = _this$props2.handleClearAllSelected,
          handleChangeView = _this$props2.handleChangeView,
          showChangeViewBtn = _this$props2.showChangeViewBtn,
          handleGenerateClick = _this$props2.handleGenerateClick,
          renderColumnsMultiSelect = _this$props2.renderColumnsMultiSelect,
          selectArea = _this$props2.selectArea,
          setSelectedColumns = _this$props2.setSelectedColumns,
          showMasterIndex = _this$props2.showMasterIndex,
          showChildIndex = _this$props2.showChildIndex,
          showSeletedArea = _this$props2.showSeletedArea,
          showSeletedBtn = _this$props2.showSeletedBtn,
          showGenerateBtn = _this$props2.showGenerateBtn,
          tableType = _this$props2.tableType,
          transferBtnText = _this$props2.transferBtnText,
          transferTable = _this$props2.transferTable,
          totalKey = _this$props2.totalKey,
          totalTitle = _this$props2.totalTitle,
          isDrag = _this$props2.isDrag,
          headTableId = _this$props2.headTableId,
          fullTableId = _this$props2.fullTableId,
          bodyTableId = _this$props2.bodyTableId,
          sortType = _this$props2.sortType,
          containerSelector = _this$props2.containerSelector,
          onExpandedRowsChange = _this$props2.onExpandedRowsChange,
          meta = _this$props2.meta,
          fieldid = _this$props2.fieldid,
          _this = _this$props2._this,
          cancelCustomRightMenu = _this$props2.cancelCustomRightMenu,
          autoHeight = _this$props2.autoHeight,
          fieldId = _this$props2.fieldId;
      var selectedAmount = this.getSelectedAmount();
      var _this$state = this.state,
          json = _this$state.json,
          LangData = _this$state.LangData,
          listHeight = _this$state.listHeight,
          selectedListHeight = _this$state.selectedListHeight;
      var showFullTable = currentTable.showFullTable;
      var c = !showFullTable ? columns : fullColumns;
      var isTotal = false,
          colsSettingParam = {};

      if (tableType === 'simple') {
        isTotal = isHeadTotal;
        colsSettingParam = getcolsSettingParam.call(_this, meta, headTableId);
      } else {
        if (!showFullTable) {
          isTotal = isHeadTotal;
          colsSettingParam = getcolsSettingParam.call(_this, meta, headTableId);
        } else {
          isTotal = isFullTotal;
          colsSettingParam = getcolsSettingParam.call(_this, meta, fullTableId);
        }
      }

      var showSelectedListCSS = !showSeletedArea || showSeletedArea && !transferTable.selected.selectedShow ? '' : 'showSelectedList'; // 已选列表转单css

      var indexWidthC = 80;

      if (!showSelectedListCSS) {
        indexWidthC = 45;
      }

      if (showSelectedListCSS && showFullTable) {
        indexWidthC = 60;
      } // 单来源 表头固定字段设置


      if (comType == 'hasCheckBox' || comType == 'hasCheckBox_child') {
        column = renderColumnsMultiSelect(columns, json, indexWidthC, !showFullTable && showSelectedListCSS ? 'selectedAndExpand' : '');
        fullColumns = renderColumnsMultiSelect(fullColumns, json, indexWidthC);
        classByType = 'hasCheckBox';
      }

      var totalColumn = this.createClumus(c, showMasterIndex, false, indexWidthC);
      var totalSelectedColumn = this.createSelectColumns(c, showMasterIndex, indexWidthC);
      selectedListHeight = autoHeight ? selectedListHeight : 400;
      listHeight = autoHeight ? listHeight : 400;
      var transferTableMainHeight = showSeletedArea && transferTable.selected.selectedShow ? selectedListHeight : listHeight; //外层容器宽度

      var containerWidth = document.querySelector(containerSelector) && document.querySelector(containerSelector).clientWidth; // 转单下方固定灰条的css
      // let fixedCss = this.transfertableMainIsModalSChild ? { position: 'absolute', bottom: 0, width: '100%' } : { width: containerWidth },
      //     // 全部列表css样式
      //     allListCSS = transferTable.selected.selectedShow ? {
      //         height: 0,
      //         width: 0,
      //         opacity: 0
      //     } : {};
      // 为啥要计算样式

      var fixedCss = this.transfertableMainIsModalSChild ? {
        position: 'absolute',
        bottom: 0,
        width: 'auto',
        left: '0',
        right: '0'
      } : {
        width: 'auto',
        left: '15px',
        right: '15px'
      },
          // 全部列表css样式
      allListCSS = transferTable.selected.selectedShow ? {
        height: 0,
        width: 0,
        opacity: 0
      } : {}; // 浏览器修正 滚动条多8px

      var browserDiff = this.myBrowser === 'Firefox' || this.myBrowser === 'IE' ? 8 : 0; // 有合计行的表格scroll高度

      var totalTableScrollYHeight = listHeight - 35 - 45 - 42 - browserDiff * 2,
          // 35表头高度 45合计行高度 10预留滚动条的高度 42 底部灰条的高度
      // 无合计行的表格scroll高度
      noTotalTableScrollYheight = listHeight - 35 - 42 - browserDiff,
          // 已选列表有合计行表格的scroll高度
      selectedTotalTableScrollYHeight = selectedListHeight - 35 - 45 - 42 - 54 - browserDiff * 2,
          // 54 是已选列表界面头部按钮区域的高度
      // 已选列表无合计行表格的scroll高度
      selectedNoTotalTableScrollYHeight = selectedListHeight - 35 - 42 - 54 - browserDiff; // let tableBodyDefaultHeight =  - 35 - 45 - 42, // 35表头高度 45合计行高度 10预留滚动条的高度 42 底部灰条的高度

      /*
          表格三种：
              单表、
              主子表【主表是子表公共信息的抽取、子表可以展开收起】、
              主子拉平【完整显示一行不做抽取】
       */

      var showExpandRender = function showExpandRender() {
        if (_this.state.transferTable['allSelected'] && _this.state.transferTable['allSelected'].params) {
          var allSelected = _this.state.transferTable['allSelected'];
          var params = allSelected.params;

          if (!params.length) {
            return false;
          }

          var activeIndex = allSelected.activeTab;

          if (params[activeIndex].bodyTableId === bodyTableId) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      };

      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "transfertable-main transfertable-main-".concat(this.myBrowser || 'chrome', "  ").concat(isTotal ? 'transfertable-main-total-wrapper' : ''),
        style: {
          width: '100%',
          height: "".concat(transferTableMainHeight ? transferTableMainHeight + 'px' : 'auto'),
          position: 'relative' // overflow: 'hidden'

        },
        ref: this.transfertableMain
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: ['insertTable', classByType].join(' ')
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        style: allListCSS
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        fieldid: Object(api_index_["getSysFieldid"])("".concat(fieldid || headTableId, "_table"))
      }, !showFullTable ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ComplexTable, {
        columns: createNewCol({
          column: column,
          json: this.state.json
        }) //模板
        ,
        data: createNewData(currentTable.outerData) //渲染表格的行的数据
        ,
        expandedRowRender: (tableType === 'nest' || tableType === 'full') && showExpandRender() ? this.expandedRowRender : undefined //嵌套子表
        ,
        haveExpandIcon: tableType === 'nest' || tableType === 'full' ? this.haveExpandIcon.bind(this, headTableId, false) : undefined //是否有展开子表的icon
        ,
        onExpandedRowsChange: onExpandedRowsChange //点击展开子表icon的回调
        ,
        scroll: {
          x: true,
          y: isHeadTotal ? totalTableScrollYHeight : noTotalTableScrollYheight
        } //lazyload={false}//是否开启滑动加载
        ,
        isDrag: isDrag //否是拖拽列
        // totalConfig={{ showTotal: true }}
        ,
        isTotal: isHeadTotal //是否合计
        ,
        totalData: isHeadTotal ? this.processingTotalData( //合计的数据
        transferTable.selected, tableType, c, showFullTable, currentTable) : undefined,
        totalColumns: isHeadTotal ? totalColumn : undefined //合计行的模板
        ,
        bodyStyle: {
          height: isHeadTotal ? totalTableScrollYHeight : noTotalTableScrollYheight
        },
        sort: sortType //排序
        ,
        updateColumnHandle: updateColumnAfterSetting.bind(this) //列设置更新模板的方法
        ,
        tableType: "transfer" //折行回调
        ,
        foldingRowChange: function foldingRowChange(isEllipsis) {
          _this.state.transferTable[headTableId]['isEllipsis'] = isEllipsis;

          _this.setState({
            transferTable: _this.state.transferTable
          });
        },
        bodyDisplayInRow: _this.state.transferTable[headTableId]['isEllipsis'],
        colsSettingParam: colsSettingParam //列设置需要的参数
        ,
        cancelCustomRightMenu: cancelCustomRightMenu
      }) :
      /*#__PURE__*/
      // 显示主子拉平
      external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ComplexTable, {
        columns: createNewCol({
          column: fullColumns,
          bool: true,
          columnType: 'full',
          json: this.state.json
        }),
        data: createFullData(currentTable),
        scroll: {
          x: true,
          y: isFullTotal ? totalTableScrollYHeight : noTotalTableScrollYheight
        },
        isTotal: isFullTotal,
        totalData: isFullTotal ? this.processingTotalData(transferTable.selected, tableType, c, showFullTable, currentTable) : undefined,
        lazyload: true,
        isDrag: isDrag,
        bodyStyle: {
          height: isFullTotal ? totalTableScrollYHeight : noTotalTableScrollYheight
        },
        totalColumns: isFullTotal ? totalColumn : undefined,
        sort: sortType,
        updateColumnHandle: updateColumnAfterSetting.bind(this),
        tableType: "transfer" //折行回调
        ,
        foldingRowChange: function foldingRowChange(isEllipsis) {
          _this.state.transferTable[headTableId]['isEllipsis'] = isEllipsis;

          _this.setState({
            transferTable: _this.state.transferTable
          });
        },
        bodyDisplayInRow: _this.state.transferTable[headTableId]['isEllipsis'],
        cancelCustomRightMenu: cancelCustomRightMenu,
        colsSettingParam: colsSettingParam
      }))), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "".concat(showSelectedListCSS, " selected-list-wrapper")
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "selected-list"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "header-area"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "selected-icon-back-btn"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["BackBtn"], {
        onClick: this.switchSelectedAndAll,
        className: "back-transfer-list"
      })), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "header-title"
      }, this.state.json['page-transferTable-0002']), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "header-right"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "header-right-inner"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "header-right-change-view-area"
      }, showChangeViewBtn === true && tableType !== 'simple' ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["ToggleViewBtn"], {
        tooltips: [json['page-transferTable-0023'], json['page-transferTable-0022']],
        className: "selected-toggle-view",
        expand: !!showFullTable,
        onClick: handleChangeView.bind(this)
      }) : ''), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "header-right-custom-area"
      }, customAreaOfSelectedHead && customAreaOfSelectedHead()), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "clear-selected-item-btn"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Button"], {
        className: "item",
        fieldid: "clearAll",
        onClick: handleClearAllSelected.bind(this)
      }, json['page-transferTable-0013'] || '清空'))))), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "content-area",
        ref: this.transfertableSelectedList
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        fieldid: Object(api_index_["getSysFieldid"])('selected-list_table')
      }, !showFullTable ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ComplexTable, {
        className: "insertTable transfer-table-selected-wrapper",
        columns: setSelectedColumns(createNewCol({
          column: column,
          bool: tableType === 'simple',
          json: this.state.json
        }), this.state.json),
        data: getMasterData(transferTable.selected.selectedData),
        expandedRowRender: tableType === 'nest' && showExpandRender() ? this.expandedRowRenderSelect : undefined,
        haveExpandIcon: tableType === 'nest' ? this.haveExpandIcon.bind(this, headTableId, true) : undefined,
        onExpandedRowsChange: onExpandedRowsChange,
        rowKey: function rowKey(record) {
          return record.key;
        },
        isTotal: isHeadTotal // lazyload={false}
        ,
        isDrag: isDrag,
        totalData: isHeadTotal ? this.processingTotalData(transferTable.selected, tableType, c, showFullTable) : undefined,
        totalColumns: isHeadTotal ? totalSelectedColumn : undefined,
        scroll: {
          x: true,
          y: isHeadTotal ? selectedTotalTableScrollYHeight : selectedNoTotalTableScrollYHeight
        },
        bodyStyle: {
          height: isHeadTotal ? selectedTotalTableScrollYHeight : selectedNoTotalTableScrollYHeight
        },
        sort: sortType,
        updateColumnHandle: updateColumnAfterSetting.bind(this),
        tableType: "transfer" //折行回调
        ,
        foldingRowChange: function foldingRowChange(isEllipsis) {
          _this.state.transferTable[headTableId]['isEllipsis'] = isEllipsis;

          _this.setState({
            transferTable: _this.state.transferTable
          });
        },
        bodyDisplayInRow: _this.state.transferTable[headTableId]['isEllipsis'],
        colsSettingParam: colsSettingParam,
        cancelCustomRightMenu: cancelCustomRightMenu
      }) :
      /*#__PURE__*/
      // 主子拉平
      external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ComplexTable, {
        className: "insertTable transfer-table-selected-wrapper",
        lazyload: true,
        isDrag: isDrag,
        columns: setSelectedColumns(createNewCol({
          column: fullColumns,
          bool: true,
          columnType: 'full',
          json: this.state.json
        }), this.state.json, true),
        data: getSelectedFullData(transferTable.selected.selectedData),
        scroll: {
          x: true,
          y: isFullTotal ? selectedTotalTableScrollYHeight : selectedNoTotalTableScrollYHeight
        },
        bodyStyle: {
          height: isFullTotal ? selectedTotalTableScrollYHeight : selectedNoTotalTableScrollYHeight
        },
        isTotal: isFullTotal,
        totalData: isFullTotal ? this.processingTotalData(transferTable.selected, tableType, c, showFullTable) : undefined,
        totalColumns: isFullTotal ? totalSelectedColumn : undefined,
        sort: sortType,
        updateColumnHandle: updateColumnAfterSetting.bind(this),
        tableType: "transfer" //折行回调
        ,
        foldingRowChange: function foldingRowChange(isEllipsis) {
          _this.state.transferTable[headTableId]['isEllipsis'] = isEllipsis;

          _this.setState({
            transferTable: _this.state.transferTable
          });
        },
        bodyDisplayInRow: _this.state.transferTable[headTableId]['isEllipsis'],
        colsSettingParam: colsSettingParam,
        cancelCustomRightMenu: cancelCustomRightMenu
      })))))), showSeletedArea ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "fixed-bottom-outer",
        style: fixedCss
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "fixed-bottom-container bottom-area-container",
        fieldid: Object(api_index_["getSysFieldid"])('bottom-area')
      }, //普通多来源不显示查看已选按钮
      showSeletedBtn ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "area-left"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Button"], {
        className: "middle-btn",
        fieldid: transferTable.selected.selectedShow ? 'alllist' : 'selected',
        onClick: this.switchSelectedAndAll
      }, transferTable.selected.selectedShow ? this.state.json['page-transferTable-0003'] || '全部列表-1' : this.state.json['page-transferTable-0004'] || '查看已选-1')) : '', /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "area-center"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, this.state.json['page-transferTable-0010'], ":", /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, selectedAmount.masterAmount), this.state.json['page-transferTable-0017']), tableType !== 'simple' ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        style: {
          marginLeft: 8
        }
      }, this.state.json['page-transferTable-0018'], ":", /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, selectedAmount.bodyAmount), this.state.json['page-transferTable-0019']) : '')), selectArea ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "area-custom"
      }, selectArea && typeof selectArea == 'function' && selectArea()) : '', totalKey.length && totalTitle.length ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, this.customAggregate()) : '', showGenerateBtn ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "area-right"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Button"], {
        fieldid: fieldId || "generate",
        className: "main-button button-component large-btn",
        onClick: handleGenerateClick.bind(this),
        disabled: JSON.stringify(transferTable.selected.selectedData.masterSelData) === '{}'
      }, transferBtnText)) : '')) : '');
    }
  }]);

  return CreateTranferTable;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]), _temp)) || _class;


// CONCATENATED MODULE: ./src/platform/components/TransferTable/CreateTranferList.js
function CreateTranferList_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CreateTranferList_typeof = function _typeof(obj) { return typeof obj; }; } else { CreateTranferList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CreateTranferList_typeof(obj); }

var CreateTranferList_class, CreateTranferList_temp;

function CreateTranferList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CreateTranferList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CreateTranferList_createClass(Constructor, protoProps, staticProps) { if (protoProps) CreateTranferList_defineProperties(Constructor.prototype, protoProps); if (staticProps) CreateTranferList_defineProperties(Constructor, staticProps); return Constructor; }

function CreateTranferList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CreateTranferList_setPrototypeOf(subClass, superClass); }

function CreateTranferList_setPrototypeOf(o, p) { CreateTranferList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CreateTranferList_setPrototypeOf(o, p); }

function CreateTranferList_createSuper(Derived) { var hasNativeReflectConstruct = CreateTranferList_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CreateTranferList_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CreateTranferList_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CreateTranferList_possibleConstructorReturn(this, result); }; }

function CreateTranferList_possibleConstructorReturn(self, call) { if (call && (CreateTranferList_typeof(call) === "object" || typeof call === "function")) { return call; } return CreateTranferList_assertThisInitialized(self); }

function CreateTranferList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CreateTranferList_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function CreateTranferList_getPrototypeOf(o) { CreateTranferList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CreateTranferList_getPrototypeOf(o); }






var CreateTranferList_CreateTranferList = Object(api_index_["withViewModel"])(CreateTranferList_class = (CreateTranferList_temp = /*#__PURE__*/function (_Component) {
  CreateTranferList_inherits(CreateTranferList, _Component);

  var _super = CreateTranferList_createSuper(CreateTranferList);

  function CreateTranferList(props) {
    var _this2;

    CreateTranferList_classCallCheck(this, CreateTranferList);

    _this2 = _super.call(this, props);

    _this2.onresizeEvent = function () {
      var selector = document.querySelector('.transfer-list-main-wrapper');

      if (selector) {
        _this2.setState({
          top: selector.offsetTop,
          height: getScrollTop() - selector.offsetTop
        });
      }
    };

    _this2.getTransferListDom = function () {
      var _this2$props = _this2.props,
          _this = _this2$props._this,
          dataAreaCode = _this2$props.dataAreaCode,
          handleTransformListClick = _this2$props.handleTransformListClick,
          transformForm = _this2$props.transformForm,
          transferListId = _this2$props.transferListId;

      if (!_this.state.meta) {
        return false;
      }

      if (!_this.state.meta[transferListId] || !_this.myState.transferList[transferListId]) {
        return false;
      } //转单模板信息


      var transformListMeta = _this.state.meta[transferListId].items;
      var _this2$state = _this2.state,
          height = _this2$state.height,
          json = _this2$state.json,
          LangData = _this2$state.LangData;
      var flag = transformForm.show && transformForm.list && transformForm.list.length > 1;
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "transfer-list-main-wrapper ".concat(flag ? 'show-tranferList' : 'hide-tranferList', " "),
        style: {
          height: height - 16,
          overflow: 'hidden'
        }
      }, flag ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "transformtable-main",
        style: {
          height: height - 8,
          overflow: 'auto'
        }
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "transform-list"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("ul", {
        style: {
          paddingBottom: '48px'
        }
      }, transformForm.list && transformForm.list.map(function (item, index) {
        return (
          /*#__PURE__*/
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("li", {
            className: "".concat(index === transformForm.activeIndex ? 'item active-transfer-list-item' : 'item', " ").concat(item.complete && 'complete'),
            onClick: function onClick() {
              handleTransformListClick.call(CreateTranferList_assertThisInitialized(_this2), item.data, index);
              _this.myState.stopSetScroll = false;
            }
          }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            className: "status".concat(item.complete ? ' complete' : '')
          }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            className: "content"
          }, transformListMeta.map(function (val, index) {
            var itemVal = item.data.head[dataAreaCode].rows[0].values[val.attrcode] || {
              value: '',
              display: ''
            }; // 处理一下数据为空的情况

            itemVal.display = itemVal.display || '';
            itemVal.value = itemVal.value || '';

            if (val.itemtype !== 'datepicker' && val.itemtype !== 'datetimepicker') {
              var finalVal = itemVal && (itemVal.display || itemVal.value || '') || '';

              if (val.itemtype === 'number') {
                finalVal = Object(api_index_["formatNumber"])(finalVal);
              }

              return val.visible && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
                className: "item-inner"
              }, "".concat(val.label, "\uFF1A"), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
                style: {
                  paddingLeft: 8
                }
              }, finalVal));
            } else {
              var format = val.itemtype === 'datepicker' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm:ss';
              var dateFlag = val.itemtype === 'datepicker' ? 'date' : 'datetime';
              return val.visible && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
                className: "item-inner"
              }, "".concat(val.label, "\uFF1A"), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
                style: {
                  paddingLeft: 8
                }
              }, "".concat((itemVal && itemVal.display ? Object(api_index_["formatDatetime"])(Object(api_index_["DongbaToLocalTime"])(Object(api_index_["moment"])(itemVal.display)).format(format), dateFlag) : Object(api_index_["formatDatetime"])(Object(api_index_["DongbaToLocalTime"])(Object(api_index_["moment"])(itemVal.value)).format(format), dateFlag)) || '')));
            }
          })), item.complete && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            className: "saved-mark"
          }, json["page-transferTable-0016"] || "已处理"))
        );
      })), transformForm.list[0] ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "total-area",
        style: {
          bottom: '7px'
        }
      }, json['page-transferTable-0014'] || '共计-1', "\uFF1A", /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "active"
      }, LangData ? LangData.get('page-transferTable-0012', {
        n: transformForm.list.length
      }) : transformForm.list.length + '条')) : '')) : '');
    };

    _this2.ViewModel = _this2.props.ViewModel;
    _this2.expandArrId = _this2.props.events && _this2.props.events.expandArr;
    _this2.state = {
      switchViewState: 'evenUp',
      transferList: null,
      transformForm: null,
      top: 0,
      json: {},
      LangData: null,
      height: 0
    };
    _this2.props._this.myState.transferListComponent = CreateTranferList_assertThisInitialized(_this2);
    return _this2;
  }

  CreateTranferList_createClass(CreateTranferList, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this3 = this;

      var callback = function callback(json, bool, LangData) {
        var _this3$props = _this3.props,
            _this = _this3$props._this,
            dataSource = _this3$props.dataSource,
            componentInitFinished = _this3$props.componentInitFinished;

        _this3.setState({
          json: json,
          LangData: LangData
        });

        if (dataSource) {
          var data = _this3.ViewModel.getData(dataSource); // let data = { transferTable: {} };
          // console.log("获取缓存pk数据", dataPk);


          if (data && data.transferTable) {
            _this.setState({
              transferTable: data.transferTable
            }, function () {
              //执行数据初始化周期函数
              if (typeof componentInitFinished == 'function') {
                componentInitFinished();
              }
            });
          }
        }
      };

      Object(api_index_["getMultiLang"])({
        moduleId: 'page-transferTable',
        callback: callback
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      this.onresizeEvent();

      window.onresize = function () {
        _this4.onresizeEvent();
      };
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this5 = this;

      // 更新高度
      this.setState({
        resize: new Date().getTime()
      }, function () {
        // console.log("渲染次数", nextProps);
        _this5.onresizeEvent();
      });
    }
    /*
    * 下游转单卡片自适应
    * */

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, this.getTransferListDom());
    }
  }]);

  return CreateTranferList;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]), CreateTranferList_temp)) || CreateTranferList_class;


// CONCATENATED MODULE: ./src/platform/components/TransferTable/util.js
function getTableWidth(classname) {
  var table = document.querySelector(".".concat(classname, " .u-table-scroll .u-table-body"));
  var width = table ? table.getBoundingClientRect().width : undefined;
  return width;
}
// CONCATENATED MODULE: ./src/platform/components/TransferTable/create.js
function create_toConsumableArray(arr) { return create_arrayWithoutHoles(arr) || create_iterableToArray(arr) || create_unsupportedIterableToArray(arr) || create_nonIterableSpread(); }

function create_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function create_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function create_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return create_arrayLikeToArray(arr); }

function create_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { create_typeof = function _typeof(obj) { return typeof obj; }; } else { create_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return create_typeof(obj); }

function create_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function create_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_ownKeys(Object(source), true).forEach(function (key) { create_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = create_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function create_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return create_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return create_arrayLikeToArray(o, minLen); }

function create_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function create_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by wangshhj on 2018/1/16.
 */







 // 精度





__webpack_require__(926);

var create_total = table_core_index_["lib"].total;
var create_ComplexTable = create_total(index_["Table"].SortTable); // 页面级别配置项
// const _DEFAULT = {
//     test_env: NODE_ENV === 'test', // node执行环境是否是test
// };

var create_defaultProps = {
  //复选框
  prefixCls: 'bee-table',
  multiSelect: {
    type: 'checkbox',
    param: 'key'
  }
};

var hasObjProperty = function hasObjProperty(obj) {
  return !!(obj && Object.values(obj).length);
};

var defaultColor = ['#111111', '#555555', '#111', '#555']; //创建转单

function createTransferTable(_ref) {
  var _this = this;

  var dataSource = _ref.dataSource,
      headTableId = _ref.headTableId,
      bodyTableId = _ref.bodyTableId,
      fullTableId = _ref.fullTableId,
      _ref$editStatus = _ref.editStatus,
      editStatus = _ref$editStatus === void 0 ? false : _ref$editStatus,
      _ref$isMultiChild = _ref.isMultiChild,
      isMultiChild = _ref$isMultiChild === void 0 ? false : _ref$isMultiChild,
      _ref$comType = _ref.comType,
      comType = _ref$comType === void 0 ? 'hasCheckBox_child' : _ref$comType,
      _ref$showMasterIndex = _ref.showMasterIndex,
      showMasterIndex = _ref$showMasterIndex === void 0 ? true : _ref$showMasterIndex,
      _ref$showChildIndex = _ref.showChildIndex,
      showChildIndex = _ref$showChildIndex === void 0 ? true : _ref$showChildIndex,
      _ref$transferBtnText = _ref.transferBtnText,
      transferBtnText = _ref$transferBtnText === void 0 ? '转单' : _ref$transferBtnText,
      onTransferBtnClick = _ref.onTransferBtnClick,
      containerSelector = _ref.containerSelector,
      componentInitFinished = _ref.componentInitFinished,
      onChangeViewClick = _ref.onChangeViewClick,
      _ref$showChangeViewBt = _ref.showChangeViewBtn,
      showChangeViewBtn = _ref$showChangeViewBt === void 0 ? true : _ref$showChangeViewBt,
      _ref$showSeletedArea = _ref.showSeletedArea,
      showSeletedArea = _ref$showSeletedArea === void 0 ? true : _ref$showSeletedArea,
      _ref$showSeletedBtn = _ref.showSeletedBtn,
      showSeletedBtn = _ref$showSeletedBtn === void 0 ? true : _ref$showSeletedBtn,
      _ref$showGenerateBtn = _ref.showGenerateBtn,
      showGenerateBtn = _ref$showGenerateBtn === void 0 ? true : _ref$showGenerateBtn,
      _ref$tableType = _ref.tableType,
      tableType = _ref$tableType === void 0 ? 'nest' : _ref$tableType,
      selectArea = _ref.selectArea,
      onCheckedChange = _ref.onCheckedChange,
      onClearAll = _ref.onClearAll,
      onSelectedItemRemove = _ref.onSelectedItemRemove,
      generateKeys = _ref.generateKeys,
      customAreaOfSelectedHead = _ref.customAreaOfSelectedHead,
      headPkIds = _ref.headPkIds,
      bodyPkIds = _ref.bodyPkIds,
      cacheItem = _ref.cacheItem,
      editableItem = _ref.editableItem,
      afterEvent = _ref.afterEvent,
      _ref$totalKey = _ref.totalKey,
      totalKey = _ref$totalKey === void 0 ? [] : _ref$totalKey,
      _ref$totalTitle = _ref.totalTitle,
      totalTitle = _ref$totalTitle === void 0 ? [] : _ref$totalTitle,
      isDrag = _ref.isDrag,
      _ref$sortType = _ref.sortType,
      sortType = _ref$sortType === void 0 ? {
    //排序的类型 Object
    mode: 'single',
    //'multiple'(多列排序) 或'single'(单列排序)(如果前端排序的时候想多列排序，对象里就穿这个字段就可以了),
    backSource: false,
    //false是前端排序，值为true为后端排序,默认false
    sortFun: function sortFun(sortInfoObj, sortData) {
      //sortInfoObj:{field:是模板的dataIndex,order:"ascend"升序/"descend"降序} , sortData:[]排序后的数据
      updateTransferDataAfterSort(sortData, headTableId, _this, sortInfoObj);
    }
  } : _ref$sortType,
      onExpandedChange = _ref.onExpandedChange,
      customSortRule = _ref.customSortRule,
      getMultiChildChangeWidth = _ref.getMultiChildChangeWidth,
      fieldid = _ref.fieldid,
      fieldId = _ref.fieldId,
      _ref$defaultOperateCo = _ref.defaultOperateColumnHidden,
      defaultOperateColumnHidden = _ref$defaultOperateCo === void 0 ? false : _ref$defaultOperateCo,
      currentPageId = _ref.currentPageId,
      _ref$cancelCustomRigh = _ref.cancelCustomRightMenu,
      cancelCustomRightMenu = _ref$cancelCustomRigh === void 0 ? false : _ref$cancelCustomRigh,
      _ref$autoHeight = _ref.autoHeight,
      autoHeight = _ref$autoHeight === void 0 ? true : _ref$autoHeight,
      _ref$fullDataRule = _ref.fullDataRule,
      fullDataRule = _ref$fullDataRule === void 0 ? 'mainbody' : _ref$fullDataRule;

  if (dataSource) {
    this.transferTableDataSource = dataSource;
  }
  /**
   * this.state.transferTable Object
   * {
          allSelected:{} 被选中的单据信息
          转单主表1 id:{
              转单主表id1:{}
              selected:{//当前表单选中的数据
                }
          }
          转单主表1 id:{
              转单主表id1:{}
          }
   * }
   */


  if (!this.state.transferTable.hasOwnProperty('allSelected')) {
    this.state.transferTable['allSelected'] = {
      activeTab: '0',
      //当前高亮tab
      selectedShow: false,
      //显示已选列表
      masterAmount: 0,
      //主表已选数量
      bodyAmount: 0,
      //子表已选数量
      masterCheckedId: [],
      //存放已选主表id，用于复选框半选
      selIds: {},
      //存放其他页签的主子表id
      showFullTable: false,
      //已选列表中是否显示主子拉平
      selectedData: {
        selAll: false,
        masterSelData: {},
        childSelData: {}
      }
    };
  }

  if (!this.state.transferTable.hasOwnProperty(headTableId)) {
    var _this$state$transferT;

    this.state.transferTable[headTableId] = (_this$state$transferT = {}, create_defineProperty(_this$state$transferT, headTableId, {
      tableType: tableType,
      bodyData: {},
      outerData: [],
      showFullTable: tableType === 'full',
      firstTime: true,
      bodyTableId: bodyTableId
    }), create_defineProperty(_this$state$transferT, "selected", {
      selectedShow: false,
      masterAmount: 0,
      //主表已选数量
      bodyAmount: 0,
      //子表已选数量
      masterCheckedId: [],
      //存放已选主表id，用于复选框半选
      selectedData: {
        selAll: false,
        masterSelData: {},
        childSelData: {}
      }
    }), _this$state$transferT);
  }

  if (!this.state.meta) {
    //拿到模板数据之后才做渲染
    return false;
  } //总的转单的数据


  var transferTable = this.state.transferTable[headTableId];

  if (!transferTable.hasOwnProperty('isEllipsis')) {
    transferTable['isEllipsis'] = true;
  } //当前要渲染的转单的全部列表 数据


  var currentTable = this.state.transferTable[headTableId][headTableId];

  if (currentTable.showFullTable) {
    //是否要拉平展示
    if (!this.state.meta[fullTableId]) {
      //模板里是否有配置拉平的字段
      return false;
    } //headTableId = fullTableId;

  } else {
    if (!this.state.meta.hasOwnProperty(headTableId) || !this.state.meta[headTableId]) {
      return false;
    }
  }
  /**
   * currentTable.outerData 主表的数据 [{},{},...]  
   * data:Array
   */


  var data = currentTable.outerData.map(function (item) {
    item.values.headKey = item.values.key;
    item.values.headTs = item.values.ts;
    return item;
  }); // let transformForm = this.state.transferTable[headTableId].transformForm;

  this.onTransferBtnClick = onTransferBtnClick; //转单按钮回调函数--生成采购单按钮

  this.onChangeViewClick = onChangeViewClick; //切换视图回调函数 ---切换按钮

  this.onCheckedChange = onCheckedChange; //复选框勾选回调函数 

  this.onClearAll = onClearAll; //已选列表清空回调函数
  //表格的列模板信息
  //主表模板

  var columns = this.state.meta[headTableId] && this.state.meta[headTableId].items.map(function (val, index) {
    sortColumn(val, sortType, customSortRule); // 清理required 属性  不然会导致表头错行

    if (val && val.required) {
      delete val.required;
    }

    return val;
  }); //子表模板

  var bodyColumn = bodyTableId && this.state.meta[bodyTableId] ? this.state.meta[bodyTableId].items.map(function (val, index) {
    sortColumn(val, sortType, customSortRule); // 清理required 属性  不然会导致表头错行

    if (val && val.required) {
      delete val.required;
    }

    return val;
  }) : []; //主子拉平模板

  var fullColumns = fullTableId && this.state.meta[fullTableId] ? this.state.meta[fullTableId].items.map(function (val, index) {
    sortColumn(val, sortType, customSortRule); // 清理required 属性  不然会导致表头错行

    if (val && val.required) {
      delete val.required;
    }

    return val;
  }) : []; // 是否遍历模板的状态 Boolean  查找是否有配合计字段istotal为true的，遍历到就为true

  var traversalStatus = this.myState.status.traversalStatus; //选择主/子表时记录主表id id:主表id flag:选中/取消选中

  var setMasterId = function setMasterId(id, flag) {
    var _transferTable$select = transferTable.selected,
        masterCheckedId = _transferTable$select.masterCheckedId,
        selectedData = _transferTable$select.selectedData;

    if (!masterCheckedId.includes(id) && flag) {
      masterCheckedId.push(id);
    } else if (masterCheckedId.indexOf(id) !== -1 && !selectedData.selAll) {
      masterCheckedId.splice(masterCheckedId.indexOf(id), 1);
    }
  }; //判断合计行是否显示


  var traversalColumns = function traversalColumns(columns) {
    var _iterator = create_createForOfIteratorHelper(columns),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var items = _step.value;

        if (items.istotal) {
          //是都 要显示合计行
          _this.myState.status.totalStatusOfTransferTable = true; //判断合计行是否显示

          _this.myState.status.traversalStatus = true;
        } else if (items.data) {
          var _iterator2 = create_createForOfIteratorHelper(items.data),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var item = _step2.value;

              if (item.istotal) {
                _this.myState.status.totalStatusOfTransferTable = true;
                _this.myState.status.traversalStatus = true;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        if (_this.myState.status.traversalStatus) {
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    traversalColumn.call(_this, columns[0].data, 'head');
    traversalColumn.call(_this, columns[1].data, 'full');
    traversalColumn.call(_this, columns[2].data, 'body');
  }; //设置主表、子表、拉平表的合计行是否显示


  var traversalColumn = function traversalColumn(column, key) {
    if (column) {
      var _iterator3 = create_createForOfIteratorHelper(column),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var items = _step3.value;

          if (items.istotal) {
            _this.myState.status["".concat(key, "TotalStatusOfTransferTable")] = true;
            _this.myState.status["".concat(key, "traversalStatus")] = true;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }; //查看是否遍历了合计状态
  // 去除  部分情况下  模板发生了变化  但是合计并没有更新
  // if (!traversalStatus) {


  var columnsArr = [{
    data: columns,
    title: 'columns'
  }, {
    data: fullColumns,
    title: 'columns'
  }, {
    data: bodyColumn,
    title: 'columns'
  }];
  traversalColumns.bind(this, columnsArr)(); // }
  //判断子表是否全选

  var isChildCheckAll = function isChildCheckAll(parents) {
    var innerDataLen = currentTable.bodyData.data[parents.key].rows.length;
    var childSelLen = Object.keys(transferTable.selected.selectedData.childSelData[parents.key]).length;

    if (innerDataLen === childSelLen) {
      return true;
    }

    return false;
  }; //判断主表是否全选


  var isMasterCheckAll = function isMasterCheckAll() {
    // let outerDataLen = currentTable.outerData.length;
    // let bodyDataLen = Object.keys(currentTable.bodyData.data).reduce((total, next, item) => {
    //     return total += currentTable.bodyData.data[next].rows.length;
    // }, 0);
    // let masterSelLen = transferTable.selected.masterCheckedId.length;
    // let bodySelLen = Object.keys(transferTable.selected.selectedData.childSelData).reduce((total, next, item) => {
    //     return total += Object.keys(transferTable.selected.selectedData.childSelData[next]).length;
    // }, 0);
    // if (tableType === 'simple') {
    //     if (outerDataLen === masterSelLen) {
    //         return true;
    //     }
    // } else if (bodyDataLen >= 0 && bodyDataLen <= bodySelLen) {
    //     return true;
    // } else if (bodyDataLen === 0 && bodyDataLen === bodySelLen) {
    //     if (outerDataLen === masterSelLen) {
    //         return true;
    //     }
    // }
    // return false;
    var _iscludeCurrentData = iscludeCurrentData(transferTable, headTableId),
        isSelectAll = _iscludeCurrentData.isSelectAll;

    return isSelectAll;
  };
  /**
   * 主子表显示状态  切换子表的复选框的时候设置 allSelected、childSelData、masterSelData 里的选中数据
   *切换选中状态行的数据 record：{} 
   * 被选中子表的主表的数据 parents：{} 为了取key去作为属性去保存选中的数据信息
   * 是否选中 flag：Boolean 
   * 看是主表还是子表选中 type：String  body/head
   */


  var setAllSelectedValue = function setAllSelectedValue(_ref2) {
    var record = _ref2.record,
        parents = _ref2.parents,
        flag = _ref2.flag,
        type = _ref2.type;
    var parent = parents;
    var allSelected = _this.state.transferTable.allSelected;
    var childSelData = allSelected.selectedData.childSelData;
    var masterSelData = allSelected.selectedData.masterSelData;

    if (type === 'body') {
      if (flag) {
        if (!allSelected.masterCheckedId.includes(parent.key)) allSelected.masterCheckedId.push(parent.key);

        if (!allSelected.selIds.hasOwnProperty(parent.key)) {
          allSelected.selIds[parent.key] = [record.key];
        } else {
          if (!allSelected.selIds[parent.key].includes(record.key)) allSelected.selIds[parent.key].push(record.key);
        }

        masterSelData[parent.key] = {
          sel: true,
          data: parent
        };

        if (!childSelData.hasOwnProperty(parent.key)) {
          childSelData[parent.key] = create_defineProperty({}, record.key, {
            sel: true,
            data: {
              childId: record.key,
              values: record
            }
          });
        } else {
          if (!childSelData[parent.key].hasOwnProperty(record.key)) {
            childSelData[parent.key][record.key] = {
              sel: true,
              data: {
                childId: record.key,
                values: record
              }
            };
          }
        }
      } else {
        allSelected.selIds[parent.key] = allSelected.selIds[parent.key].filter(function (item) {
          return item !== record.key;
        });
        if (!allSelected.selIds[parent.key].length) delete allSelected.selIds[parent.key];
        if (childSelData[parent.key].hasOwnProperty(record.key)) delete childSelData[parent.key][record.key];

        if (!Object.keys(childSelData[parent.key]).length) {
          delete childSelData[parents.key];
          delete childSelData[parents.key];
          allSelected.masterCheckedId = allSelected.masterCheckedId.filter(function (item) {
            return item !== parents.key;
          });
        }
      }
    } else if (type === 'head') {
      var curKey = record.headKey || record.key; //主子拉平取主表id

      if (flag) {
        var bodyData = transferTable[headTableId].bodyData.data;
        var selectedBodyData = {};
        var selIdsBodyData = {};
        if (!allSelected.masterCheckedId.includes(curKey)) allSelected.masterCheckedId.push(curKey);
        masterSelData[curKey] = {
          sel: true,
          data: record
        };

        for (var _i = 0, _Object$keys = Object.keys(bodyData); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];
          var itemBodyData = {};
          var itemSelIdsData = [];

          if (key === curKey) {
            var _iterator4 = create_createForOfIteratorHelper(bodyData[key].rows),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var item = _step4.value;
                itemBodyData[item.childId] = {
                  sel: true,
                  data: {
                    childId: item.childId,
                    values: item.values
                  }
                };
                if (!itemSelIdsData.includes(item.childId)) itemSelIdsData.push(item.childId);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            selectedBodyData[key] = itemBodyData;
            selIdsBodyData[key] = itemSelIdsData;
          }
        }

        allSelected.selectedData.childSelData = create_objectSpread(create_objectSpread({}, childSelData), selectedBodyData);
        allSelected.selIds = create_objectSpread(create_objectSpread({}, allSelected.selIds), selIdsBodyData);
      } else {
        allSelected.masterCheckedId = allSelected.masterCheckedId.filter(function (item) {
          return item !== curKey;
        });
        delete masterSelData[curKey];
        delete childSelData[curKey];
        delete allSelected.selIds[curKey];
      }
    } // 有个数据没有子数据  但是应该也算一行数据


    allSelected.bodyAmount = Object.values(allSelected.selIds).reduce(function (total, now) {
      return total += now.length || 1;
    }, 0);
    allSelected.masterAmount = allSelected.masterCheckedId.length;
  }; //===========================子表添加复选框===========================================
  //所有选中的子表条数总合 所有主表的条数总合 的处理
  //transferTable Object


  var getAmount = function getAmount(transferTable) {
    var selected = transferTable.selected;
    var selectedData = selected.selectedData;
    var bodyAmount = 0; //所有选中的子表条数总合

    for (var _i2 = 0, _Object$keys2 = Object.keys(selectedData.childSelData); _i2 < _Object$keys2.length; _i2++) {
      var item = _Object$keys2[_i2];
      // 有个数据没有子数据  但是应该也算一行数据
      bodyAmount += Object.keys(selectedData.childSelData[item]).length || 1;
    }

    return {
      bodyAmount: bodyAmount,
      masterAmount: Object.keys(selectedData.masterSelData).length //所有主表的条数总合

    };
  };
  /*
   * 子表复选框单个勾选 修改数据里的allSelected、和selected里的一些选中信息
   * @param {*} text  
   * @param {Object} record 当前行的数据 
   * @param {Number} index 索引
   * @param {Object} parents 取名应该为parent，是选中子表的主表数据
   * @param {Number} parentsIndex  索引
   * @param {Boolean} bool 
   * @param {Boolean} isOnCheckedChange 
   * bool和isOnCheckedChange都是为了控制不给业务组复选框切换 传两次数据的  修复条件
   */


  var onCheckboxChangeChild = function onCheckboxChangeChild(text, record, index, parents, parentsIndex) {
    var bool = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var isOnCheckedChange = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
    var selected = transferTable.selected;
    var selectedData = selected.selectedData;
    var master = selectedData.childSelData[parents.key];
    var flag = true;

    if (!master) {
      selectedData.childSelData[parents.key] = create_defineProperty({}, record.key, {
        sel: true,
        data: record // masterData: parents

      });
      selectedData.masterSelData[parents.key] = {
        sel: true,
        data: parents
      };
      setAllSelectedValue({
        record: record,
        parents: parents,
        flag: true,
        type: 'body'
      }); // 为多来源转单设置选中数据
      // setAllSelVal('body', true, parents.key, record.key); //多来源有全部页签需要单独统计已选数据
      // //判断主表是否全选

      if (isMasterCheckAll()) {
        selectedData.selAll = true;
      }

      if (isChildCheckAll(parents)) {
        setMasterId(parents.key, true);
      }
    } else {
      var child = master[record.key];
      flag = !child;

      if (!child) {
        selectedData.childSelData[parents.key][record.key] = {
          sel: true,
          data: record // masterData: parents

        };
        selectedData.masterSelData[parents.key] = {
          sel: true,
          data: parents
        };
        setAllSelectedValue({
          record: record,
          parents: parents,
          flag: true,
          type: 'body'
        }); // 为多来源转单设置选中数据

        setAllSelVal('body', true, parents.key, record.key); //多来源有全部页签需要单独统计已选数据
        // //判断子表数据是否全选

        if (isChildCheckAll(parents)) {
          setMasterId(parents.key, true);
        } //判断主表是否全选


        if (isMasterCheckAll()) {
          selectedData.selAll = true;
        }
      } else {
        delete selectedData.childSelData[parents.key][record.key];
        var childAll = selectedData.childSelData[parents.key];

        if (Object.keys(childAll).length === 0) {
          delete selectedData.childSelData[parents.key];
          delete selectedData.masterSelData[parents.key];
        }

        setAllSelectedValue({
          record: record,
          parents: parents,
          flag: false,
          type: 'body'
        }); // 为多来源转单设置选中数据
        // setAllSelVal('body', false, parents.key, record.key); //多来源有全部页签需要单独统计已选数据

        selectedData.selAll = false;
        setMasterId(parents.key, false);
      }
    }

    var amountData = getAmount.call(_this, transferTable);
    selected.bodyAmount = amountData.bodyAmount;
    selected.masterAmount = amountData.masterAmount;
    _this.state.transferTable[headTableId] = transferTable;

    _this.setState({
      transferTable: _this.state.transferTable
    }, function () {
      if (typeof bool === 'boolean') {
        isOnCheckedChange && onCheckedChange && onCheckedChange(flag, JSON.parse(JSON.stringify(record)), index, null, parentsIndex);
      }
    });
  };
  /*多来源有全部页签需要单独统计已选数据 切换选中状态的时候对selIds进行更改
   * 
   * @param {String} type head/body 被勾选的类型是主表还是子表
   * @param {Boolean} status  选中状态
   * @param {String} headId 主表id
   * @param {String} bodyId 子表id
   */


  var setAllSelVal = function setAllSelVal(type, status, headId, bodyId) {
    window.transferTable = _this.state.transferTable;
    var allSelected = _this.state.transferTable.allSelected;

    if (allSelected) {
      if (status) {
        if (!allSelected.selIds[headId]) {
          if (type === 'head') {
            //主表勾选
            allSelected.selIds[headId] = [];
          } else {
            //子表勾选
            allSelected.selIds[headId] = [bodyId];
          }
        } else if (bodyId && !allSelected.selIds[headId].includes(bodyId)) {
          //子表勾选
          allSelected.selIds[headId].push(bodyId);
        }
      } else {
        if (type === 'head') {
          //主表取消勾选
          delete allSelected.selIds[headId];
        } else {
          //子表取消勾选
          var selIds = allSelected.selIds;

          if (selIds[headId]) {
            selIds[headId].splice(selIds[headId].indexOf(bodyId), 1);

            if (selIds[headId].length === 0) {
              delete selIds[headId];
            }
          }
        }
      }
    }
  }; //判断主表或子表是否有选中项


  var isHaveCheck = function isHaveCheck() {
    var masterCheckFlag = false;
    var childCheckFlag = false;
    var masterChecklen = Object.keys(transferTable.selected.selectedData.masterSelData).length;
    var datalen = currentTable.outerData.length;

    if (masterChecklen > 0 && masterChecklen < datalen) {
      masterCheckFlag = true; //主表有选中项,且非全选
    }

    var childChecklen = Object.keys(transferTable.selected.selectedData.childSelData).length;

    if (childChecklen > 0) {
      childCheckFlag = true;
    }

    if (masterCheckFlag || childCheckFlag) {
      return true;
    }

    return false;
  }; //将当前页所有数据加入/取消已选择 flag: Boolean


  var selectAllMaster = function selectAllMaster(flag) {
    var outerData = currentTable.outerData;
    outerData.map(function (item, index) {
      var hValues = item.values || item;

      if (!hValues.saga_status || hValues.saga_status.value !== '1') {
        // socket 错误数据过滤
        switchMasterChecked(flag, item.values, item.values, index, true);
      }
    });
  }; //============================================主表添加复选框==================================
  //主表复选框全选点击事件 selAll: Boolean true为全部选中，false为全部取消


  var onAllCheckChange = function onAllCheckChange(selAll) {
    transferTable.selected.selectedData.selAll = selAll;
    selectAllMaster(selAll);
    _this.state.transferTable[headTableId] = transferTable;

    _this.setState({
      transferTable: _this.state.transferTable
    });
  };
  /*主表复选框单个勾选
   * @param {text} 暂时未发现用处，可console.log看看
   * @param {record} Object  选中或取消当前行的数据
   * @param {index} Number 选中或取消当前行的下标
   * @param {bool} Boolean 控制回调函数是否执行
   *
   * */


  var onCheckboxChange = function onCheckboxChange(text, record, index, bool) {
    var curKey = record.headKey || record.key; //主子拉平取主表id

    switchMasterChecked(!transferTable.selected.selectedData.masterSelData[curKey], text, record, index, bool);
  }; //主表切换勾选状态 flag:开关状态，默认选中


  var switchMasterChecked = function switchMasterChecked() {
    var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var text = arguments.length > 1 ? arguments[1] : undefined;
    var record = arguments.length > 2 ? arguments[2] : undefined;
    var index = arguments.length > 3 ? arguments[3] : undefined;
    var bool = arguments.length > 4 ? arguments[4] : undefined;
    var selected = transferTable.selected;
    var selectedData = transferTable.selected.selectedData;
    var bodyData = currentTable.bodyData.data;
    var curKey = record.headKey || record.key; //主子拉平取主表id

    var delBodyData; //选中

    if (flag) {
      selectedData.masterSelData[curKey] = {
        sel: true,
        data: record
      }; // setAllSelVal('head', true, curKey); //多来源有全部页签需要单独统计已选数据

      setAllSelectedValue({
        record: record,
        parents: curKey,
        flag: true,
        type: 'head'
      });
      var innerData = bodyData[curKey];

      if (innerData) {
        selectedData.childSelData[curKey] = {};
        innerData.rows.map(function (item, index) {
          selectedData.childSelData[curKey][item.values.key] = {
            sel: true,
            data: item
          }; // setAllSelVal('body', true, curKey, item.values.key);
        });
      }

      setMasterId(curKey, true); //选择主表时记录主表id
      //判断主表是否全选

      if (isMasterCheckAll()) {
        selectedData.selAll = true;
      }
    } else {
      //移除
      selectedData.selAll = false;
      setMasterId(curKey, false); // setAllSelVal('head', false, curKey); //多来源有全部页签需要单独统计已选数据

      setAllSelectedValue({
        record: record,
        flag: false,
        type: 'head'
      });

      if (selectedData.masterSelData[curKey]) {
        delete selectedData.masterSelData[curKey];
      }

      if (selectedData.childSelData[curKey]) {
        delBodyData = selectedData.childSelData[curKey]; //记录被删除的子表数据

        delete selectedData.childSelData[curKey];
      }
    }

    var amountData = getAmount.call(_this, transferTable);
    selected.bodyAmount = amountData.bodyAmount;
    selected.masterAmount = amountData.masterAmount;
    _this.state.transferTable[headTableId] = transferTable;

    _this.setState({
      transferTable: _this.state.transferTable
    }, function () {
      if (create_typeof(bool) === 'object' || bool === true) {
        // 控制回调方法是否执行 为了改已选列表移除的问题 NCCLOUD-163594
        var bdata = flag ? selectedData.childSelData[curKey] : delBodyData;
        var bodySelData = bdata ? Object.values(bdata).map(function (item) {
          return item.data.values || item.data;
        }) : []; //勾选主表获取子表数据

        onCheckedChange && onCheckedChange(flag, JSON.parse(JSON.stringify(record)), index, JSON.parse(JSON.stringify(bodySelData)));
      }
    });
  };
  /**
   * 表格行选中状态获取
   * @param {Array} childSelData 
   * @param {Array} masterSelData 
   * @param {Array} recordKey 
   * @param {Array} isFull  拉平
   */


  var getCheckedStatus = function getCheckedStatus() {
    var childSelData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var masterSelData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var recordKey = arguments.length > 2 ? arguments[2] : undefined;
    var isFull = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var bodyData = transferTable[headTableId].bodyData.data[recordKey],
        // 所有的body数据
    status = 'empty'; // console.log(masterSelData, childSelData, bodyData, recordKey);
    // 拉平时以子表为主 只有全选和不选

    if (isFull) {
      var ifff = childSelData[recordKey] || masterSelData && masterSelData[recordKey];
      return ifff ? 'full' : status;
    } // 主表是否存在这条数据


    var res = masterSelData && masterSelData[recordKey]; // 子表是否存在这条数据

    if (bodyData) {
      var _iterator5 = create_createForOfIteratorHelper(bodyData.rows),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var item = _step5.value;

          if (childSelData[item.childId]) {
            status = 'indeterminate';
          } else {
            res = false;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }

    return res ? 'full' : status;
  }; //主子拉平切换勾选状态


  var onCheckboxChangeFull = function onCheckboxChangeFull(text, record, index) {
    var selected = transferTable.selected;
    var selectedData = transferTable.selected.selectedData;
    var master = selectedData.childSelData[record.headKey]; // selectedData.childSelData[record.headKey][record.key] // 这个没有值
    // master = master[record.key] ? master : null;

    var outerData = transferTable[headTableId].outerData;
    var bodyData = transferTable[headTableId].bodyData;
    var nowItem = bodyData.data[record.headKey].rows.filter(function (item) {
      return item.childId === record.key;
    });
    var masterVal = {};

    var _iterator6 = create_createForOfIteratorHelper(outerData),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var item = _step6.value;

        if (item.rowId === record.headKey) {
          masterVal = item.values;
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    var allSelected = _this.state.transferTable.allSelected && _this.state.transferTable.allSelected.selectedData;
    var flag = true; // 1、如果bodyData找到当前数据 代表是子表的数据 并且 selected中找不到对应的childData 
    // 1、如果bodyData找不到当前数据 代表是无子表的数据 并且 selected 中找不到对应的masterSelData

    var shouldChecked = nowItem && nowItem[0] && (!master || !master[record.key]) || (!nowItem || !nowItem[0]) && !selectedData.masterSelData[record.headKey];

    if (shouldChecked) {
      // 处理一下不存在的问题
      selectedData.childSelData[record.headKey] = selectedData.childSelData[record.headKey] || {};
      nowItem && nowItem[0] && nowItem[0].values && (selectedData.childSelData[record.headKey][record.key] = {
        sel: true,
        data: nowItem[0].values
      });
      selectedData.masterSelData[record.headKey] = {
        sel: true,
        data: masterVal
      }; //记录全部多来源主子拉平的勾选数据

      if (allSelected) {
        // 处理一下不存在的问题
        allSelected.childSelData[record.headKey] = allSelected.childSelData[record.headKey] || {};
        nowItem && nowItem[0] && nowItem[0].values && (allSelected.childSelData[record.headKey][record.key] = {
          sel: true,
          data: nowItem[0].values
        });
        allSelected.masterSelData[record.headKey] = {
          sel: true,
          data: masterVal
        }; // 同步一下数据到 selectedData
        // selectedData.childSelData[record.headKey] = allSelected.childSelData[record.headKey];
        // selectedData.masterSelData[record.headKey] = allSelected.masterSelData[record.headKey];
      }

      setAllSelVal('body', true, record.headKey, record.key); // 两种情况  要设置masterId

      if (!master || bodyData.data[record.headKey].rows.length === Object.keys(selectedData.childSelData[record.headKey]).length) {
        setMasterId && setMasterId(record.headKey, true);
      } //判断主表是否全选


      if (isMasterCheckAll()) {
        selectedData.selAll = true;

        if (allSelected) {
          allSelected.selAll = true;
        }
      }
    } else {
      flag = false;
      delete selectedData.childSelData[record.headKey][record.key];
      var childAll = selectedData.childSelData[record.headKey];

      if (Object.keys(childAll).length === 0) {
        delete selectedData.childSelData[record.headKey];
        delete selectedData.masterSelData[record.headKey];
      }

      selectedData.selAll = false; //删除全部多来源主子拉平的勾选数据

      if (allSelected) {
        delete allSelected.childSelData[record.headKey][record.key];
        var _childAll = allSelected.childSelData[record.headKey];

        if (Object.keys(_childAll).length === 0) {
          delete allSelected.childSelData[record.headKey];
          delete allSelected.masterSelData[record.headKey];
        }

        allSelected.selAll = false;
      }

      setMasterId(record.headKey, false);
      setAllSelVal('body', false, record.headKey, record.key);
    }

    var amountData = getAmount.call(_this, transferTable);
    selected.bodyAmount = amountData.bodyAmount;
    selected.masterAmount = amountData.masterAmount;
    _this.state.transferTable[headTableId] = transferTable;

    _this.setState({
      transferTable: _this.state.transferTable
    }, function () {
      onCheckedChange && onCheckedChange(flag, JSON.parse(JSON.stringify(record)), index);
    });
  };
  /**
   * 获取数据
   * @param {Array} outerData 
   * @param {Array} bodyData 
   */


  var getTableData = function getTableData(outerData, bodyData) {
    var head = [],
        body = [];

    var _iterator7 = create_createForOfIteratorHelper(outerData),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var od = _step7.value;
        var hValues = od.values || od;

        if (hValues.saga_status && hValues.saga_status.value == '1') {
          // socket 错误数据过滤
          continue;
        }

        head.push(od.values || od);

        if (bodyData.data && bodyData.data[od.rowId] && bodyData.data[od.rowId].rows) {
          var _iterator8 = create_createForOfIteratorHelper(bodyData.data[od.rowId].rows),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var item = _step8.value;
              var bValues = item.values || item;

              if (bValues.saga_status && bValues.saga_status.value == '1') {
                // socket 错误数据过滤
                continue;
              }

              body.push(item.values || item);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    return {
      body: body,
      head: head
    };
  };
  /**
   * 转单表格表头和表体主表添加复选框列
   * @param {*} columns 
   * @param {*Object} json 多语
   */


  var renderColumnsMultiSelect = function renderColumnsMultiSelect(columns, json) {
    var indexColWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 80;
    var tableType = arguments.length > 3 ? arguments[3] : undefined;
    var multiSelect = create_defaultProps.multiSelect;
    var showFullTable = transferTable[headTableId].showFullTable;
    var headTableType = transferTable[headTableId].tableType; // 添加的序号列

    var indexCol = [{
      label: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        style: {
          display: 'block',
          textAlign: 'left'
        }
      }, json['page-transferTable-0007'] || '序号-3'),
      attrcode: 'numberindex',
      itemtype: 'customer',
      dataIndex: 'numberindex',
      visible: true,
      width: showFullTable || headTableType === 'simple' ? 45 : indexColWidth,
      className: 'col-customer-numberindex',
      render: function render(text, record, index) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          style: {
            display: 'block',
            textAlign: 'left'
          }
        }, index + 1);
      }
    }];
    var newColumn = [].concat(columns);
    var checkboxDisabled = !transferTable[headTableId].outerData.length;

    if (showMasterIndex) {
      // 已选列表时 不设置序号列  可能会有 展开的问题
      newColumn = indexCol.concat(newColumn);
    }

    if (!showMasterIndex && tableType === 'selectedAndExpand') {
      // 已选列表 不设置序号 但是要设置 空列 放置展开按钮
      newColumn = [{
        label: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          style: {
            display: 'block',
            textAlign: 'left'
          }
        }),
        attrcode: 'numberindex',
        itemtype: 'customer',
        dataIndex: 'numberindex',
        visible: true,
        width: 30,
        className: 'col-customer-noindexcol',
        render: function render(text, record, index) {
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            style: {
              display: 'block',
              textAlign: 'left'
            }
          });
        }
      }].concat(newColumn);
    }

    if (multiSelect && multiSelect.type === 'checkbox') {
      var _iscludeCurrentData2 = iscludeCurrentData(transferTable, headTableId),
          selAll = _iscludeCurrentData2.isSelectAll,
          indeterminate = _iscludeCurrentData2.isIndeterminate; // (transferTable.selected.selectedData.selAll && Object.keys(transferTable.selected.selectedData.masterSelData).length
      // console.log(indeterminate);
      //复选框模板[{}]


      newColumn.unshift({
        /* 表头复选框*/
        label: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Checkbox"], {
          className: "table-checkbox",
          disabled: checkboxDisabled,
          checked: selAll // indeterminate={indeterminate && !selAll}
          ,
          indeterminate: indeterminate //半选
          ,
          onChange: function onChange() {
            onAllCheckChange.call(_this, !selAll);

            if (!selAll) {
              //全选事件
              var _getTableData = getTableData(currentTable.outerData, currentTable.bodyData),
                  headData = _getTableData.head,
                  bodyData = _getTableData.body;

              onCheckedChange && onCheckedChange(!selAll, JSON.parse(JSON.stringify(headData)), 'all', JSON.parse(JSON.stringify(bodyData)));
            } else {
              //全消钩子函数
              if (typeof onClearAll === 'function') {
                onClearAll();
              }
            }
          }
        }),
        onCellClick: function onCellClick(record, e) {
          var ck = record.key || record.headKey;
          var values = record.values || record;
          var index = -1;
          (currentTable.outerData || []).some(function (item, i) {
            var values = item.values || item;

            if ((values.key || values.headKey) === ck) {
              index = i;
              return true;
            }
          });

          if (index == -1 || values && values.saga_status && values.saga_status.value === '1') {
            return;
          } // console.log(index, 'xxxxx');


          showFullTable ? onCheckboxChangeFull.call(_this, '', record, index) : onCheckboxChange.call(_this, '', record, index);
        },
        attrcode: 'checkbox',
        itemtype: 'customer',
        dataIndex: 'checkbox',
        visible: true,
        width: showFullTable || headTableType === 'simple' ? 54 : 80,
        fixed: 'left',
        className: 'col-customer-checkbox',
        render: function render(text, record, index) {
          //表体主表复选框
          var ck = record.key || record.headKey,
              // 当前的key  拉平的时候子表的主键为主
          childSelData = transferTable.selected.selectedData.childSelData,
              masterSelData = transferTable.selected.selectedData.masterSelData,
              checkedStatus = getCheckedStatus(childSelData[record.headKey || record.key], masterSelData, ck, showFullTable); // console.log(record, childSelData, masterSelData);
          // Socket改造
          // let { billpkname, billtype, errorViewType } = this.nativeSocketBillInfo;

          var values = record.values || record;
          return values && values.saga_status && values.saga_status.value === '1' ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["ErrorPop"], {
            record: record
          }) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Checkbox"], {
            className: "table-checkbox",
            checked: checkedStatus === 'full',
            indeterminate: checkedStatus === 'indeterminate',
            onClick: showFullTable ? onCheckboxChangeFull.bind(_this, text, record, index) : onCheckboxChange.bind(_this, text, record, index)
          });
        }
      });
    }

    return newColumn;
  };
  /*
   * 子表添加复选框列和序号
   * @param {Array} columns 渲染子表的每一列的属性数据 [{},{},...] 
   * @param {*} records 
   * @param {*} indexs 
   * @param {*} comType 
   * @param {*} json 
   */


  var renderColumnsMultiSelectChild = function renderColumnsMultiSelectChild(columns, records, indexs, comType, json) {
    var multiSelect = create_defaultProps.multiSelect;
    var indexCol = [{
      label: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        bbq: "\u5DF2\u9009\u5C55\u5F00\u5217\u5E8F\u53F7",
        style: {
          display: 'block',
          textAlign: 'left'
        }
      }, json['page-transferTable-0007'] || '序号-2'),
      attrcode: 'numberindex',
      itemtype: 'customer',
      dataIndex: 'numberindex',
      visible: true,
      width: 70,
      className: 'col-customer-numberindex',
      render: function render(text, record2, index) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          style: {
            display: 'block',
            textAlign: 'left'
          }
        }, index + 1);
      }
    }]; // 添加序号列

    var newColumn = columns;
    var oprationLabel = json['page-transferTable-0006'] ? json['page-transferTable-0006'] : '操作-4';
    /*国际化处理 操作*/

    if (showChildIndex) {
      newColumn = indexCol.concat(newColumn);
    } //  根据组件类型，判断是否带复选框  // 按逻辑看 这里永远不会走


    if (comType == 'hasCheckBox_child') {
      if (multiSelect && multiSelect.type === 'checkbox') {
        var parId = transferTable.selected.selectedData.childSelData[records.key]; // 主表有状态 那么子表就不需要状态 saga

        var pValues = records.values || records;
        var pSaga_status = pValues && pValues.saga_status && pValues.saga_status.value === '1';
        var defaultColumns = [{
          label: '',
          attrcode: 'checkbox',
          itemtype: 'customer',
          dataIndex: 'checkbox',
          width: 40,
          className: 'col-customer-checkbox',
          fixed: 'left',
          visible: true,
          onCellClick: function onCellClick(record, e) {
            var ck = record.key;
            var values = record.values || record;
            var index = -1;
            var bodyData = ((currentTable.bodyData.data || {})[records.key] || {}).rows || [];
            bodyData.some(function (item, i) {
              var values = item.values || item;

              if (values.key === ck) {
                index = i;
                return true;
              }
            }); // console.log(bodyData, index, 'xxxxx');

            if (index == -1 || pSaga_status || values && values.saga_status && values.saga_status.value === '1') {
              return;
            }

            onCheckboxChangeChild.call(_this, '', record, index, records, indexs);
          },
          render: function render(text, record, index) {
            // Socket改造
            //let { billpkname, billtype, errorViewType } = this.nativeSocketBillInfo;
            var values = record.values || record;
            return values && values.saga_status && values.saga_status.value === '1' || pSaga_status ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["ErrorPop"], {
              record: record
            }) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Checkbox"], {
              className: "table-checkbox",
              checked: !!(parId && parId[record.key]),
              onChange: onCheckboxChangeChild.bind(_this, text, record, index, records, indexs)
            });
          }
        }];
        newColumn = defaultColumns.concat(newColumn);
      }
    } else if (comType == 'selectedList' && defaultOperateColumnHidden !== true) {
      // 部分情况下  用户期望移除子表操作列
      //已选列表增加操作列
      var oprColumn = {
        label: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, " ", oprationLabel, " "),
        attrcode: 'operate',
        itemtype: 'customer',
        dataIndex: 'operate',
        width: 100,
        //fixed: "right",
        visible: true,
        render: function render(text, record, index) {
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            className: "row-remove",
            bbq: "\u5B50\u8868\u79FB\u9664",
            onClick: function onClick() {
              //移除子表
              onSelectedItemRemove && onSelectedItemRemove(record);
              onCheckboxChangeChild(text, record, index, records, index, true, false);
            }
          }, json['page-transferTable-0001'] || '移除');
        }
      };
      newColumn = [].concat(create_toConsumableArray(newColumn), [oprColumn]);
    }

    return newColumn;
  }; //已选列表主子拉平移除


  var clearSelectedFullData = function clearSelectedFullData(text, record, index, bool) {
    var selected = transferTable.selected;
    var selectedData = transferTable.selected.selectedData;
    var childId = _this.state.transferTable[headTableId][headTableId].childId;
    var headId = record.headKey; //转单主表id

    var bodyId = record[childId].value; //转单子表id

    delete selectedData.childSelData[headId][bodyId];
    var childAll = selectedData.childSelData[headId];

    if (Object.keys(childAll).length === 0) {
      delete selectedData.childSelData[headId];
      delete selectedData.masterSelData[headId];
    }

    setAllSelVal('body', false, headId, bodyId); //多来源有全部页签需要单独统计已选数据

    selectedData.selAll = false;
    setMasterId(headId, false);
    _this.state.transferTable[headTableId] = transferTable;
    var amountData = getAmount.call(_this, transferTable);
    selected.bodyAmount = amountData.bodyAmount;
    selected.masterAmount = amountData.masterAmount;

    _this.setState({
      transferTable: _this.state.transferTable
    });
  }; //已选列表清空事件


  var handleClearAllSelected = function handleClearAllSelected() {
    var allSelected = _this.state.transferTable.allSelected;

    if (allSelected) {
      allSelected.masterCheckedId = []; //清空已选主表id

      allSelected.selectedData.selAll = false; //取消全选

      allSelected.selectedData.masterSelData = {};
      allSelected.selectedData.childSelData = {};
      allSelected.masterAmount = 0;
      allSelected.bodyAmount = 0;
      allSelected.selIds = {};
    }

    transferTable.selected.masterCheckedId = []; //清空已选主表id

    transferTable.selected.selectedData.selAll = false; //取消全选

    transferTable.selected.selectedData.masterSelData = {};
    transferTable.selected.selectedData.childSelData = {};
    transferTable.selected.masterAmount = 0;
    transferTable.selected.bodyAmount = 0;

    _this.setState({
      transferTable: _this.state.transferTable
    }, function () {
      onClearAll && onClearAll();
    });
  };

  if (data && currentTable.firstTime) {
    currentTable.firstTime = false;
  } //  根据组件类型，判断是否带复选框


  var column = columns;
  var classByType = null;

  if (comType == 'hasCheckBox' || comType == 'hasCheckBox_child') {
    classByType = 'hasCheckBox';
  }
  /**
   * 陈顺风  还款单
   * @param {*} item 
   * @param {*} value 
   * @param {*} index 
   * @param {*} outerRecordKey 
   * @param {*Object} record  被编辑行的全部数据
   * @param {*} scale 精度
   */


  var editableJSX = function editableJSX(item, value, index, outerRecordKey, record, scale) {
    switch (item.itemtype) {
      case 'number':
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["NumberInput"], {
          value: value,
          scale: scale,
          autoFocus: true,
          onChange: function onChange(newValue) {
            // 因为需要在onblur的时候传输入框初始值给业务组，所以需判断初始值是否被保存过，如果没有保存过，则将初始值保存
            if (!_this.myState.transferTableEditOldValueIsSaved) {
              _this.myState.transferTableEditOldValueIsSaved = true;
              _this.myState.transferTableEditOldValue = value;
            } // 实时更新数据， 以防鼠标滑动导致表格重新渲染的时候输入框的值还原回去


            var transferTable = _this.state.transferTable;
            var itemValueObj = null;

            if (outerRecordKey) {
              itemValueObj = transferTable[headTableId][headTableId].bodyData.data[outerRecordKey].rows[index].values[item.attrcode];
            } else {
              itemValueObj = transferTable[headTableId][headTableId].outerData[index].values[item.attrcode];
            }

            itemValueObj.value = newValue;
          },
          onBlur: function onBlur(newValue) {
            // 在鼠标脱焦后 将输入框的值保存状态初始化为false，以待下次编辑的时候出发onChange使用
            _this.myState.transferTableEditOldValueIsSaved = false;
            var transferTable = _this.state.transferTable;
            var itemValueObj = null;

            if (outerRecordKey) {
              itemValueObj = transferTable[headTableId][headTableId].bodyData.data[outerRecordKey].rows[index].values[item.attrcode];
            } else {
              itemValueObj = transferTable[headTableId][headTableId].outerData[index].values[item.attrcode];
            }

            var oldValue = _this.myState.transferTableEditOldValue;
            itemValueObj.isEdit = false;
            itemValueObj.value = formatDot(newValue, scale);
            record[item.attrcode].value = newValue;

            if (transferTable && headTableId && transferTable[headTableId] && transferTable[headTableId].selected && transferTable[headTableId].selected.selectedData && transferTable[headTableId].selected.selectedData.childSelData && record && record.key && record.parentRowId && transferTable[headTableId].selected.selectedData.childSelData[record.parentRowId] && transferTable[headTableId].selected.selectedData.childSelData[record.parentRowId][record.key] && transferTable[headTableId].selected.selectedData.childSelData[record.parentRowId][record.key].data && item && item.attrcode && transferTable[headTableId].selected.selectedData.childSelData[record.parentRowId][record.key].data[item.attrcode]) {
              transferTable[headTableId].selected.selectedData.childSelData[record.parentRowId][record.key].data[item.attrcode].value = newValue;
            }

            record[item.attrcode].isEdit = false;

            if (typeof afterEvent === 'function') {
              afterEvent(item.attrcode, newValue, record, index, oldValue);
            }

            _this.setState({
              transferTable: transferTable
            });
          }
        });
        break;

      default:
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, value);
        break;
    }
  }; // 'switch' 根据value显示 ’是‘或 ’否‘


  var switchValue = function switchValue(value, json) {
    if (value) {
      return json && json['page-transferTable-0020'] || '是';
    } else {
      return json && json['page-transferTable-0021'] || '否';
    }
  }; // 用来处理number类型的值的精度的 data是值， scal为精度


  var getScaleData = function getScaleData(data, scal) {
    var value = String(data).replace(/,/g, '');
    var scale = Number(scal);

    if (value) {
      var len = scale >= 0 ? value.split('.')[0].length + scale + 1 : value.split('.')[0].length;

      if (value.indexOf('.') !== -1) {
        var arr = value.split('.');

        if (!Number.isNaN(scale) && scale !== -1) {
          if (scale === 0) {
            value = String(value).split('.')[0];
          } else {
            value = String(value).padEnd(len, '0');
          }
        }
      } else {
        if (!Number.isNaN(scale) && scale !== -1) {
          if (scale === 0) {
            value = String(value);
          } else {
            var str = value + '.';
            value = str.padEnd(Number(len), '0');
          }
        }
      }
    } else {
      return 0;
    }

    return Object(api_index_["commafy"])(value);
  }; // 获取 表格的排序状态


  var getColumnsSortStatus = function getColumnsSortStatus(column, outerRecordKey) {
    var transferTable = _this.state.transferTable,
        currentTransferTable = transferTable[headTableId],
        currentTable = currentTransferTable[headTableId],
        selectedTable = currentTransferTable.selected,
        allSelectedTable = transferTable.allSelected,
        sortParam = [],
        res = {
      order: 'flatscend',
      orderNum: ''
    }; // 判断表格类型 判断表格状态

    if (selectedTable.selectedShow || allSelectedTable.selectedShow) {
      if (currentTable.showFullTable || allSelectedTable.showFullTable) {
        sortParam = selectedTable.fullSortInfoObj || currentTransferTable.sortInfoObj || [];
      } else if (outerRecordKey) {
        sortParam = selectedTable[outerRecordKey] && selectedTable[outerRecordKey].childSortInfoObj || [];
      } else {
        sortParam = selectedTable.mainSortInfoObj || currentTransferTable.sortInfoObj || [];
      }
    } else {
      if (currentTable.showFullTable || allSelectedTable.showFullTable) {
        sortParam = currentTable.fullSortInfoObj || currentTransferTable.sortInfoObj || [];
      } else if (outerRecordKey) {
        sortParam = currentTable[outerRecordKey] && currentTable[outerRecordKey].childSortInfoObj || [];
      } else {
        sortParam = currentTable.mainSortInfoObj || currentTransferTable.sortInfoObj || [];
      }
    }

    sortParam.forEach(function (item) {
      if (column.attrcode === item.field) {
        res.order = item.order;
        res.orderNum = item.orderNum;
        res.field = item.field;
        res.isSort = true;
      }
    }); // res.isSort && console.log(res, sortParam);

    return res;
  }; // 处理模板 在模板数据上加checkbox、序号或者操作列

  /*
  * column： 原模板数据
  * outerRecordKey： 主表 行数据的的主键
  * expander： 最后一行是否要固定
  * json： 多语资源
  *
  * */


  var createNewCol = function createNewCol(_ref3) {
    var column = _ref3.column,
        outerRecordKey = _ref3.outerRecordKey,
        bool = _ref3.bool,
        expander = _ref3.expander,
        columnType = _ref3.columnType,
        json = _ref3.json;
    var result = [];
    var pageId = currentPageId || _this.state && _this.state.meta.pageid;

    if (expander && column.length && column[column.length - 1].attrcode === 'operate') {
      column[column.length - 1].fixed = 'right';
    }

    column.map(function (item) {
      var width = item.width;

      if (!width) {
        width = 120;
      }

      var orderStatus = getColumnsSortStatus(item, outerRecordKey);

      if (orderStatus.order) {
        item.order = orderStatus.order;
        item.orderNum = orderStatus.orderNum;
      }

      var render = null;

      if (item.itemtype !== 'customer' && item.visible && !item.render) {
        item.dataIndex = item.attrcode;

        render = function render(text, record, index) {
          var hyperlinkflag = item.hyperlinkflag;

          if (record[item.attrcode]) {
            var display = record[item.attrcode].display;
            var value = record[item.attrcode].value;
            var recordScale = record[item.attrcode].scale ? record[item.attrcode].scale : item.scale ? item.scale : 0;
            var dom = '';

            if (display || display === 0) {
              dom = display;
            } else {
              dom = value;
            }

            if (Object(api_index_["isTimeType"])(item.itemtype)) {
              //时区类型的控件
              if (item.itemtype == 'datetimepicker') {
                dom = Object(api_index_["changeTime"])(value, 'YYYY-MM-DD HH:mm:ss');
                dom = Object(api_index_["formatDatetime"])(dom, 'datetime');
              } else if (item.itemtype == 'timepicker') {
                dom = value;
                dom = Object(api_index_["formatDatetime"])(dom, 'time');
              } else {
                dom = Object(api_index_["changeTime"])(value);
                dom = Object(api_index_["formatDatetime"])(dom, 'date');
              }
            } // 多语处理


            if (item.itemtype === "residtxt") {
              var langCode = Object(api_index_["getLangCode"])();
              var loginLang = (item.languageMeta || []).filter(function (i) {
                return i.languageCode == langCode;
              });

              if (loginLang.length > 0) {
                loginLang[0].index === "1" ? loginLang[0].index = "" : "";

                if (record[item.attrcode + loginLang[0].index] && record[item.attrcode + loginLang[0].index].value) {
                  dom = record[item.attrcode + loginLang[0].index].value;
                }
              }
            }

            if (item.itemtype == 'switch') {
              dom = switchValue(value, json);
            } else if (item.itemtype == 'checkbox_switch') {
              dom = checkboxSwitchValue(value, editStatus, json);
            }

            var isEdit = record[item.attrcode].isEdit;
            var disabled = item.disabled;
            var realScale = recordScale;

            if (recordScale === '-1' && dom) {
              var arr = String(dom).split('.');
              if (arr.length && arr[1]) realScale = arr[1].length;
            }

            if (editStatus) {
              var domShow = dom;

              if (item.itemtype === 'number') {
                var val = formatDot(dom, recordScale);
                domShow = Object(api_index_["formatAcuracy"])(val, realScale);
                domShow = Object(api_index_["formatNumber"])(domShow);
              }

              return isEdit && !disabled ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
                fieldid: Object(api_index_["getSysFieldid"])(item.attrcode),
                className: "".concat(item.itemtype === 'number' ? 'number-td-span-wrapper' : '')
              }, editableJSX(item, dom, index, outerRecordKey, record, realScale)) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
                className: classnames_default()({
                  'number-td-span-wrapper editor-td-span-wrapper': item.itemtype === 'number',
                  'single-line-and-ellipsis': _this.state.transferTable[headTableId]['isEllipsis'],
                  'three-line-and-ellipsis': !_this.state.transferTable[headTableId]['isEllipsis']
                }),
                fieldid: Object(api_index_["getSysFieldid"])(item.attrcode) // 会导致行高不是标准30
                // style={{ display: 'inline-block', width: '100%', height: '28px', lineHeight: '28px' }}
                ,
                onClick: function onClick() {
                  if (editableItem && !editableItem.includes(item.attrcode)) {
                    return;
                  }

                  var transferTable = _this.state.transferTable;

                  if (outerRecordKey) {
                    transferTable[headTableId][headTableId].bodyData.data[outerRecordKey].rows[index].values[item.attrcode].isEdit = true;
                  } else {
                    transferTable[headTableId][headTableId].outerData[index].values[item.attrcode].isEdit = true;
                  }

                  _this.setState({
                    transferTable: transferTable
                  });
                }
              }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ellipsisToTooltip_EllipsisToTooltip, {
                overlay: domShow
              }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, domShow)));
            } else {
              if (item.itemtype === 'number') {
                dom = formatDot(dom, recordScale);
                dom = Object(api_index_["formatAcuracy"])(dom, realScale);
                dom = Object(api_index_["formatNumber"])(dom);
              }

              return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
                className: classnames_default()({
                  'number-td-span-wrapper': item.itemtype === 'number',
                  'single-line-and-ellipsis': _this.state.transferTable[headTableId]['isEllipsis'],
                  'three-line-and-ellipsis': !_this.state.transferTable[headTableId]['isEllipsis']
                }),
                fieldid: Object(api_index_["getSysFieldid"])(item.attrcode)
              }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ellipsisToTooltip_EllipsisToTooltip, {
                overlay: dom
              }, hyperlinkflag && dom ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("a", {
                href: "javascript:;",
                className: 'hyper-link',
                onClick: function onClick(e) {
                  e.stopPropagation();
                  var moduleId = columnType === 'child' ? bodyTableId : columnType === 'full' ? fullTableId : headTableId;
                  var metaAreaPageId = pageId;

                  if (_this.state && _this.state.meta && _this.state.meta[moduleId] && _this.state.meta[moduleId].pageid) {
                    metaAreaPageId = _this.state.meta[moduleId].pageid;
                  }

                  Object(api_index_["linkTo"])(metaAreaPageId, moduleId, item.attrcode, value || dom);
                }
              }, dom) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, dom, "\xA0")));
            }
          }
        };
      } else {
        if (item.itemtype === 'customer') {
          render = item.render;
        } else {
          render = function render(text, record, index) {
            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ellipsisToTooltip_EllipsisToTooltip, {
              className: "tooltip-word-color",
              overlay: item.render.call(null, text, record, index),
              noEllipsis: true
            }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
              className: classnames_default()('col-customer-render-unit', {
                'single-line-and-ellipsis': _this.state.transferTable[headTableId]['isEllipsis'],
                'three-line-and-ellipsis': !_this.state.transferTable[headTableId]['isEllipsis']
              })
            }, item.render.call(null, text, record, index)));
          };
        }
      }

      if (item.visible) {
        result.push(create_objectSpread(create_objectSpread({}, item), {}, {
          render: render,
          width: width,
          key: item.attrcode,
          dataIndex: item.dataIndex || item.attrcode,
          title: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            className: "".concat(item.itemtype === 'number' ? 'number-td-span-wrapper' : 'text-td-span-wrapper'),
            style: {
              color: defaultColor.includes(item.color) ? '' : item.color
            },
            fieldid: Object(api_index_["getSysFieldid"])(item.attrcode)
          }, item.label)
        }));
      }
    });
    return result;
  }; // 设置数据


  var createNewData = function createNewData(data, columns) {
    var datas = [];
    data.map(function (val, index) {
      val = val.values || val;

      for (var _i3 = 0, _Object$keys3 = Object.keys(val); _i3 < _Object$keys3.length; _i3++) {
        var item = _Object$keys3[_i3];
        var itemData = val[item];

        if (itemData && create_typeof(itemData) === 'object' && itemData.hasOwnProperty('scale')) {
          val[item].value = formatDot(itemData.value, val[item].scale);
        }
      } // datas.push(JSON.parse(JSON.stringify(val)));


      datas.push(val);
    });
    return datas;
  }; // 保留合计的最长小数位精度 nowVal: 当前要加的值， totalVal： 之前合计好的值


  var getTheLongestPrecision = function getTheLongestPrecision(nowVal, totalVal) {
    if (nowVal === '' || nowVal === null || nowVal === 'null') {
      return totalVal;
    }

    var nowValArr = String(nowVal).split('.');
    var totalValArr = String(totalVal).split('.');
    var nowValLen = nowValArr.length >= 2 ? String(nowValArr[1]).length : 0;
    var totalValLen = totalValArr.length >= 2 ? String(totalValArr[1]).length : 0;
    var addVal = Number.parseFloat(totalVal);

    if (typeof Number(nowVal) === 'number' && !Number.isNaN(Number(nowVal))) {
      nowVal = thounsandTransfer(nowVal, 'number');
      totalVal = thounsandTransfer(totalVal, 'number');
      addVal = Number.parseFloat(nowVal) + Number.parseFloat(Number(totalVal));
    } else {
      return totalVal;
    }

    var addValArr = String(addVal).split('.');
    var addValLen = addValArr.length >= 2 ? String(addValArr[1]).length : 0;

    if (totalValLen >= nowValLen) {
      var zeroO = '';

      for (var i = 0; i < totalValLen - addValLen; i++) {
        zeroO += '0';
      }

      var bool = String(addVal).includes('.') ? "".concat(addVal).concat(zeroO) : "".concat(addVal, ".").concat(zeroO);
      return Number(bool).toFixed(totalValLen);
    } else {
      var _zeroO = '';

      for (var _i4 = 0; _i4 < nowValLen - addValLen; _i4++) {
        _zeroO += '0';
      }

      var _bool = String(addVal).includes('.') ? "".concat(addVal).concat(_zeroO) : "".concat(addVal, ".").concat(_zeroO);

      return Number(_bool).toFixed(nowValLen);
    }
  };
  /*
  * 创建合计行表格的模板
  * column： 模板数据
  * showIndex： 是否显示序号
  * json： 多语json
  * */


  var createSelectColumns = function createSelectColumns(column, showIndex, json, isChild) {
    var result = [];
    result.push({
      label: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null),
      attrcode: 'checkbox',
      itemtype: 'customer',
      fixed: 'left',
      dataIndex: 'checkbox',
      visible: true,
      width: isChild ? 70 : 80,
      className: 'col-customer-checkbox col-customer-total',
      render: function render(text, record, index) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          title: json['page-transferTable-0010'] || '合计-1'
        }, json['page-transferTable-0010'] || '合计-1');
      }
    });
    column.map(function (item) {
      var width = item.width;

      if (!width) {
        width = 120;
      }

      var render = null;

      if (item.itemtype !== 'customer' && item.visible && !item.render) {
        render = function render(text, record, index) {
          if (record[item.attrcode]) {
            var display = record[item.attrcode].display;
            var value = record[item.attrcode].value;
            var dom = '';

            if (display || display === 0) {
              dom = display;
            } else {
              dom = value;
            }

            if (Object(api_index_["isTimeType"])(item.itemtype)) {
              if (item.itemtype == 'datetimepicker') {
                dom = Object(api_index_["changeTime"])(value, 'YYYY-MM-DD HH:mm:ss');
                dom = Object(api_index_["formatDatetime"])(dom, 'datetime');
              } else if (item.itemtype == 'timepicker') {
                dom = value;
                dom = Object(api_index_["formatDatetime"])(dom, 'time');
              } else {
                dom = Object(api_index_["changeTime"])(value);
                dom = Object(api_index_["formatDatetime"])(dom, 'date');
              }
            } // 多语处理


            if (item.itemtype === "residtxt") {
              var langCode = Object(api_index_["getLangCode"])();
              var loginLang = (item.languageMeta || []).filter(function (i) {
                return i.languageCode == langCode;
              });

              if (loginLang.length > 0) {
                loginLang[0].index === "1" ? loginLang[0].index = "" : "";

                if (record[item.attrcode + loginLang[0].index] && record[item.attrcode + loginLang[0].index].value) {
                  dom = record[item.attrcode + loginLang[0].index].value;
                }
              }
            }

            if (item.itemtype === 'number') {
              dom = Object(api_index_["formatNumber"])(dom);
            }

            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
              className: "".concat(item.itemtype === 'number' ? 'number-td-span-wrapper' : '')
            }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ellipsisToTooltip_EllipsisToTooltip, {
              overlay: dom
            }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
              className: classnames_default()({
                'single-line-and-ellipsis': _this.state.transferTable[headTableId]['isEllipsis'],
                'three-line-and-ellipsis': !_this.state.transferTable[headTableId]['isEllipsis']
              })
            }, dom, "\xA0")));
          }
        };
      } else {
        if (item.itemtype === 'customer') {
          render = item.render;
        } else {
          render = function render(text, record, index) {
            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ellipsisToTooltip_EllipsisToTooltip, {
              className: "tooltip-word-color",
              inverse: true,
              overlay: item.render.call(null, text, record, index),
              noEllipsis: true
            }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
              className: classnames_default()('col-customer-render-unit', {
                'single-line-and-ellipsis': _this.state.transferTable[headTableId]['isEllipsis'],
                'three-line-and-ellipsis': !_this.state.transferTable[headTableId]['isEllipsis']
              })
            }, item.render.call(null, text, record, index)));
          };
        }
      }

      if (item.visible && item.attrcode !== 'checkbox' && item.attrcode !== 'numberindex') {
        result.push(create_objectSpread(create_objectSpread({}, item), {}, {
          render: render,
          width: width,
          key: item.attrcode,
          title: item.label
        }));
      }
    });

    if (result[1] && !showIndex) {// result[1].width =  result[1].width -20
    }

    if (defaultOperateColumnHidden !== true) {
      result.push({
        label: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, json['page-transferTable-0006'] || '操作-2'),

        /*国际化处理 操作*/
        attrcode: 'operate',
        itemtype: 'customer',
        fixed: 'right',
        dataIndex: 'operate',
        visible: true,
        width: 100,
        render: function render(text, record, index) {
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, "\xA0");
        }
      });
    }

    return result;
  };
  /*
  * 计算合计数据
  * data 选中的整体数据
  * column： 模板数据
  * record： 展开行的主表数据
  * */


  var processingTotalDataChild = function processingTotalDataChild(data, column, record) {
    var key = record.key;
    var childData = data[key];
    var outerData = {};
    var totalKey = [];
    var totalScale = {};

    var _iterator9 = create_createForOfIteratorHelper(column),
        _step9;

    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var item = _step9.value;
        outerData[item['attrcode']] = {
          value: '',
          display: ''
        };

        if (item.istotal && item.itemtype === 'number') {
          totalKey.push(item.attrcode);
          totalScale[item.attrcode] = item.scale;
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }

    if (childData) {
      for (var _i5 = 0, _Object$keys4 = Object.keys(childData); _i5 < _Object$keys4.length; _i5++) {
        var items = _Object$keys4[_i5];
        var values = childData[items].data.values || childData[items].data;

        var _iterator10 = create_createForOfIteratorHelper(totalKey),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var i = _step10.value;

            if (values[i] && create_typeof(values[i]) === 'object') {
              var scale = values[i].scale ? values[i].scale : totalScale[i];
              var value = values[i] ? String(values[i].value) ? String(values[i].value).replace(/,/g, '') : 0 : 0;

              if (!outerData[i].value) {
                outerData[i].scale = scale;
                outerData[i].value = getScaleData(value, scale);
              } else {
                var totalData = Object(api_index_["sum"])(Number.parseFloat(value), Number.parseFloat(String(outerData[i].value).replace(/,/g, '')));
                outerData[i].scale = scale > outerData[i].scale ? scale : outerData[i].scale;
                outerData[i].value = getScaleData(String(totalData), outerData[i].scale);
              }
            }
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
    }

    return [outerData];
  }; //表格展开显示的内容
  //渲染子表表格数据及复选框


  var expandedRowRender = function expandedRowRender(record, index, comType, json) {
    var newColumn = bodyColumn;
    var _this$props = _this.props,
        showChildIndex = _this$props.showChildIndex,
        sortType = _this$props.sortType;
    var isTotal = _this.myState.status.bodyTotalStatusOfTransferTable;
    var curKey = record.headKey || record.key;
    var TotalDataChild = processingTotalDataChild.call(_this, transferTable.selected.selectedData.childSelData, newColumn, record);

    if (newColumn instanceof Array && newColumn.length > 0) {
      newColumn = renderColumnsMultiSelectChild.call(_this, newColumn, record, index, comType, json);

      if (currentTable.bodyData && Object.keys(currentTable.bodyData).length && currentTable.bodyData.data.hasOwnProperty(curKey) || transferTable && transferTable.selected && transferTable.selected.selectedData && comType === 'selectedList') {
        var _data = null,
            expandTableHeight = 0,
            $thisDom = external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(_this);
        var expandTableBodyHeight = 0; //展开子表表体的高度
        //已选列表的子表移除时需要删除行数据

        if (comType === 'selectedList') {
          _data = createNewData(Object.values(transferTable.selected.selectedData.childSelData[curKey] || {}).map(function (item) {
            return item.data;
          }));
          $thisDom = $thisDom.querySelector('.selected-list-wrapper') || $thisDom;
        } else {
          _data = createNewData(currentTable.bodyData.data[record.key].rows || currentTable.bodyData.data[record.key]);
        }

        expandTableHeight = getExpandTableHeight(_data, isTotal, $thisDom);
        expandTableBodyHeight = getExpandTableHeight(_data, isTotal, $thisDom, true);
        var width = getTableWidth('selected-list');
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: "transfertable-expand-wraper",
          style: {
            height: "".concat(expandTableHeight, "px"),
            width: '100%'
          }
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(create_ComplexTable, {
          columns: createNewCol({
            column: newColumn,
            outerRecordKey: curKey,
            expander: true,
            columnType: 'child',
            json: json
          }),
          data: _data,
          isTotal: isTotal,
          isDrag: isDrag,
          lazyload: true,
          totalBodyHeight: 30,
          totalData: TotalDataChild,
          totalColumns: createSelectColumns.call(_this, bodyColumn, showChildIndex, json, true),
          scroll: {
            x: true,
            y: expandTableBodyHeight || 300
          },
          sort: sortType,
          updateColumnHandle: updateColumnAfterSetting.bind(_this),
          bodyStyle: {
            minHeight: '30px'
          },
          tableType: "transfer" //折行回调
          ,
          foldingRowChange: function foldingRowChange(isEllipsis) {
            _this.state.transferTable[headTableId]['isEllipsis'] = isEllipsis;

            _this.setState({
              transferTable: _this.state.transferTable
            });
          },
          bodyDisplayInRow: _this.state.transferTable[headTableId]['isEllipsis'],
          colsSettingParam: getcolsSettingParam.call(_this, _this.state.meta, bodyTableId),
          cancelCustomRightMenu: cancelCustomRightMenu
        }));
      }
    }

    console.log('没有找到子表数据呀！！');
    return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null);
  }; //设置已选列表columns

  /*
  * json: 多语
  * isFull：判断已选列表的表格是否是主子拉平表
  * */


  var setSelectedColumns = function setSelectedColumns(columns) {
    var json = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var isFull = arguments.length > 2 ? arguments[2] : undefined;
    var result = [];
    var bool = currentTable.showFullTable || tableType === 'simple';
    var label = json['page-transferTable-0006'] ? json['page-transferTable-0006'] : '操作-3';
    /*国际化处理 操作*/

    var operateColumn = bool ? {
      title: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, label),
      attrcode: 'operate',
      itemtype: 'customer',
      dataIndex: 'operate',
      width: 100,
      fixed: 'right',
      visible: true,
      render: function render(text, record, index) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: "row-remove",
          onClick: function onClick() {
            //移除主表
            var selData = _this.state.transferTable[headTableId].selected.selectedData;
            var tableType = _this.state.transferTable[headTableId][headTableId].tableType;
            var childSelData = selData.childSelData[record.key] || selData.childSelData[record.headKey];
            var bodys = [];

            if (childSelData) {
              for (var _i6 = 0, _Object$keys5 = Object.keys(childSelData); _i6 < _Object$keys5.length; _i6++) {
                var headKey = _Object$keys5[_i6];
                // liuyjv修改解决返回数据不一致bug
                bodys.push(childSelData[headKey].data.values ? childSelData[headKey].data.values : childSelData[headKey].data);
              }
            }

            onSelectedItemRemove && onSelectedItemRemove(record, isFull ? [] : bodys);
            !currentTable.showFullTable ? onCheckboxChange(text, record, index, true) : clearSelectedFullData(text, record, index, true);
          }
        }, json['page-transferTable-0001'] || '移除');
      }
    } : {
      title: label,
      attrcode: 'operate',
      itemtype: 'customer',
      dataIndex: 'operate',
      width: 100,
      visible: true,
      render: function render(text, record, index) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: "row-remove" // href="javascript:viod(0);"  // a 标签
          ,
          onClick: function onClick() {
            //移除主表
            var selData = _this.state.transferTable[headTableId].selected.selectedData;
            var tableType = _this.state.transferTable[headTableId][headTableId].tableType;
            var childSelData = selData.childSelData[record.key] || selData.childSelData[record.headKey];
            var bodys = [];

            if (childSelData) {
              for (var _i7 = 0, _Object$keys6 = Object.keys(childSelData); _i7 < _Object$keys6.length; _i7++) {
                var headKey = _Object$keys6[_i7];
                // liuyjv修改解决返回数据不一致bug
                bodys.push(childSelData[headKey].data.values ? childSelData[headKey].data.values : childSelData[headKey].data);
              }
            }

            onSelectedItemRemove && onSelectedItemRemove(record, bodys);
            !currentTable.showFullTable ? onCheckboxChange(text, record, index, true) : clearSelectedFullData(text, record, index, true);
          }
        }, json['page-transferTable-0001'] || '移除');
      }
    };
    columns && columns.map(function (item) {
      if (item.attrcode !== 'checkbox' && item.label !== label) {
        result.push(item);
      }
    });
    return [].concat(result, [operateColumn]);
  }; //统计已选列表数量


  var getSelectedAmount = function getSelectedAmount() {
    var transferTable = _this.state.transferTable;
    var bodyAmount = 0,
        masterAmount = 0;

    for (var _i8 = 0, _Object$keys7 = Object.keys(transferTable); _i8 < _Object$keys7.length; _i8++) {
      var item = _Object$keys7[_i8];

      if (item !== 'allSelected') {
        var selected = transferTable[item].selected;
        masterAmount += selected.masterAmount ? Number(selected.masterAmount) : 0;
        bodyAmount += selected.bodyAmount ? Number(selected.bodyAmount) : 0;
      }
    }

    return {
      masterAmount: masterAmount,
      bodyAmount: bodyAmount
    };
  }; //获取已选列表主表数据


  var getMasterData = function getMasterData(data) {
    var masterSelData = Object.values(data.masterSelData),
        selected = transferTable.selected,
        mainSortInfoObj = selected.mainSortInfoObj;
    masterSelData = masterSelData.map(function (item) {
      return item.data;
    });
    return masterSelData;
  }; //获取已选列表主子拉平数据


  var getSelectedFullData = function getSelectedFullData(data) {
    var masterSelData = data.masterSelData,
        childSelData = data.childSelData;
    var result = [];

    var _loop = function _loop() {
      var key = _Object$keys8[_i9];

      // 存在 没有子表元素的主表数据
      if (hasObjProperty(childSelData[key])) {
        Object.values(childSelData[key]).forEach(function (item) {
          // let childVal = JSON.parse(JSON.stringify(item.data.values || item.data || {}));
          // let headData = JSON.parse(JSON.stringify(masterSelData[key].data || {}));
          // 为了万行
          var childVal = Object.assign({}, item.data.values || item.data || {});
          var headData = Object.assign({}, masterSelData[key].data || {});
          childVal.headKey = headData.key || headData.headKey; // delete headData.headKey;
          // delete headData.key;

          var newData = Object.assign({}, childVal, headData); //合并后的主子拉平数据

          if (newData.headKey) newData.headKey = key;
          newData.key = childVal.key;
          result.push(newData);
        });
      } else {
        // 没有就取主表数据
        // let newData = JSON.parse(JSON.stringify(masterSelData[key].data));
        // 为了万行
        var newData = masterSelData[key].data;
        newData.headKey = key;
        newData.key = key;
        result.push(newData);
      }
    };

    for (var _i9 = 0, _Object$keys8 = Object.keys(childSelData); _i9 < _Object$keys8.length; _i9++) {
      _loop();
    }

    return result;
  }; //点击生成转单去下游转单的按钮


  var handleGenerateClick = function handleGenerateClick() {
    var selIds = [];
    var selId = [];

    if (!isMultiChild) {
      (function () {
        // 转单不是多来源的子
        //获取已选列表主子表id
        var masterData = transferTable.selected.selectedData.masterSelData;
        var childSelData = transferTable.selected.selectedData.childSelData;

        if (masterData) {
          var _loop2 = function _loop2() {
            var key = _Object$keys9[_i10];
            var hValues = masterData[key].data;

            if (hValues.saga_status && hValues.saga_status.value === '1') {
              // eslint-disable-next-line no-continue
              return "continue";
            }

            var bodys = [];
            var head = {};

            if (childSelData) {
              var childData = transferTable.selected.selectedData.childSelData[key];

              if (childData) {
                var _loop3 = function _loop3() {
                  var id = _Object$keys10[_i11];
                  var values = childData[id].data.values || childData[id].data;

                  if (values.saga_status && values.saga_status.value === '1') {
                    // eslint-disable-next-line no-continue
                    return "continue";
                  }

                  var itemsJson = {};

                  if (cacheItem) {
                    cacheItem.forEach(function (item) {
                      var itemValue = values[item];

                      if (itemValue) {
                        //选中的子表数据里有要缓存的字段，
                        itemsJson[item] = itemValue;
                      } else {
                        //选中的子表数据里有要缓存的字段就从主表数据里找
                        var masterSelData = transferTable.selected.selectedData.masterSelData[key];
                        var masterSelDataVal = masterSelData.data.values || masterSelData.data;
                        var masterItemValue = masterSelDataVal[item];
                        masterItemValue && (itemsJson[item] = masterItemValue);
                      }
                    });
                  }

                  if (generateKeys && generateKeys.body && generateKeys.body.length > 0) {
                    var bodyKeyVal = {};

                    var _iterator11 = create_createForOfIteratorHelper(generateKeys.body),
                        _step11;

                    try {
                      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                        var val = _step11.value;
                        bodyKeyVal[val] = values[val] && values[val].value;
                      }
                    } catch (err) {
                      _iterator11.e(err);
                    } finally {
                      _iterator11.f();
                    }

                    bodys.push(create_objectSpread({
                      bodyKeyVal: bodyKeyVal
                    }, itemsJson));
                  } else {
                    bodys.push(create_objectSpread({
                      pk: id,
                      ts: values.ts && values.ts.value
                    }, itemsJson));
                  }
                };

                for (var _i11 = 0, _Object$keys10 = Object.keys(childData); _i11 < _Object$keys10.length; _i11++) {
                  var _ret2 = _loop3();

                  if (_ret2 === "continue") continue;
                }
              }
            }

            if (generateKeys && generateKeys.head && generateKeys.head.length > 0) {
              var _iterator12 = create_createForOfIteratorHelper(generateKeys.head),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var val = _step12.value;
                  head[val] = masterData[key].data[val] && masterData[key].data[val].value;
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            } else {
              // 兼容一下特殊情况的判断
              var headTs = masterData[key].ts ? masterData[key].ts : masterData[key].data && masterData[key].data.ts && masterData[key].data.ts.value;
              headTs = masterData[key].data.headTs ? masterData[key].data.headTs.value : headTs;
              head = {
                pk: key,
                ts: headTs
              };
            }

            var itemsJson = {};

            if (cacheItem) {
              cacheItem.forEach(function (item) {
                // if(childSelData && childSelData[key] && childSelData[key].data && childSelData[key].data[item]){
                //     let itemValue = childSelData[key].data[item];
                //     itemValue && (itemsJson[item] = itemValue);
                // }
                var itemValue = masterData[key].data[item];
                itemValue && (itemsJson[item] = itemValue);
              });
            }

            selIds.push(create_objectSpread({
              head: head,
              bodys: bodys
            }, itemsJson));
          };

          for (var _i10 = 0, _Object$keys9 = Object.keys(masterData); _i10 < _Object$keys9.length; _i10++) {
            var _ret = _loop2();

            if (_ret === "continue") continue;
          }
        }

        api_index_["ViewModel"].setData('transferIds', selIds);
        _this.state.transferTable[headTableId] = transferTable;
      })();
    } else {
      (function () {
        // 转单是多来源的子
        var allTranferTableData = _this.state.transferTable;
        var selfMasterData = transferTable.selected.selectedData.masterSelData;
        var selfChildData = transferTable.selected.selectedData.childSelData;

        for (var _i12 = 0, _Object$keys11 = Object.keys(allTranferTableData); _i12 < _Object$keys11.length; _i12++) {
          var ID = _Object$keys11[_i12];

          if (ID === 'allSelected') {
            (function () {
              var selected = allTranferTableData.allSelected;
              var masterData = JSON.parse(JSON.stringify(selected.selectedData.masterSelData));
              var childData = JSON.parse(JSON.stringify(selected.selectedData.childSelData));
              var bodys = [];
              var selfBodys = [];

              var _loop4 = function _loop4() {
                var key = _Object$keys12[_i13];
                var hValues = masterData[key].data;

                if (hValues.saga_status && hValues.saga_status.value === '1') {
                  // eslint-disable-next-line no-continue
                  return "continue";
                }

                if (childData[key]) {
                  var _loop5 = function _loop5() {
                    var id = _Object$keys13[_i14];
                    var values = childData[key][id].data.values || childData[key][id].data;

                    if (values.saga_status && values.saga_status.value === '1') {
                      // eslint-disable-next-line no-continue
                      return "continue";
                    }

                    bodyPkIds && bodyPkIds.map(function (pk) {
                      var cData = childData[key][id].data.values || childData[key][id].data;

                      if (cData.hasOwnProperty(pk)) {
                        var _bodys$push;

                        bodys.push((_bodys$push = {}, create_defineProperty(_bodys$push, pk, id), create_defineProperty(_bodys$push, "pk", id), create_defineProperty(_bodys$push, "ts", values.ts && values.ts.value), _bodys$push));
                      }
                    });
                  };

                  for (var _i14 = 0, _Object$keys13 = Object.keys(childData[key]); _i14 < _Object$keys13.length; _i14++) {
                    var _ret4 = _loop5();

                    if (_ret4 === "continue") continue;
                  }
                }

                if (selfChildData[key]) {
                  var _loop6 = function _loop6() {
                    var id = _Object$keys14[_i15];
                    var values = selfChildData[key][id].data.values || selfChildData[key][id].data;

                    if (values.saga_status && values.saga_status.value === '1') {
                      // eslint-disable-next-line no-continue
                      return "continue";
                    }

                    bodyPkIds && bodyPkIds.map(function (pk) {
                      var cData = selfChildData[key][id].data.values || selfChildData[key][id].data;

                      if (cData.hasOwnProperty(pk)) {
                        var _selfBodys$push;

                        selfBodys.push((_selfBodys$push = {}, create_defineProperty(_selfBodys$push, pk, id), create_defineProperty(_selfBodys$push, "pk", id), create_defineProperty(_selfBodys$push, "ts", values.ts && values.ts.value), _selfBodys$push));
                      }
                    });
                  };

                  for (var _i15 = 0, _Object$keys14 = Object.keys(selfChildData[key]); _i15 < _Object$keys14.length; _i15++) {
                    var _ret5 = _loop6();

                    if (_ret5 === "continue") continue;
                  }
                }

                headPkIds && headPkIds.map(function (pk) {
                  if (masterData[key].data.hasOwnProperty(pk)) {
                    var _head;

                    selIds.push({
                      head: (_head = {}, create_defineProperty(_head, pk, key), create_defineProperty(_head, "pk", key), create_defineProperty(_head, "ts", masterData[key].data.ts && masterData[key].data.ts.value), _head),
                      bodys: bodys
                    });
                  }

                  if (selfMasterData[key] && selfMasterData[key].data.hasOwnProperty(pk)) {
                    var _head2;

                    selId.push({
                      head: (_head2 = {}, create_defineProperty(_head2, pk, key), create_defineProperty(_head2, "pk", key), create_defineProperty(_head2, "ts", selfMasterData[key].data.ts && selfMasterData[key].data.ts.value), _head2),
                      bodys: selfBodys
                    });
                  }
                });
                bodys = [];
              };

              for (var _i13 = 0, _Object$keys12 = Object.keys(masterData); _i13 < _Object$keys12.length; _i13++) {
                var _ret3 = _loop4();

                if (_ret3 === "continue") continue;
              }
            })();
          }
        }

        api_index_["ViewModel"].setData('multiTransferIds', selIds);
        api_index_["ViewModel"].setData('transferIds', selId);
      })();
    }

    if (typeof onTransferBtnClick === 'function') {
      // 用来创建下游转单卡片的时候判断是否创建ref
      api_index_["ViewModel"].setData('isCreateTransferList', true);
      onTransferBtnClick(selIds);
    }
  }; //点击切换视图


  var handleChangeView = function handleChangeView() {
    if (typeof onChangeViewClick === 'function') {
      onChangeViewClick();
    }
  }; //将主子表数据拼成主子拉平数据


  var createFullData = function createFullData(data) {
    var outerData = data.outerData,
        bodyData = data.bodyData,
        fullSortData = data.fullSortData;
    var result = [];
    var headData = {};
    var CurrentFullDataRule = fullDataRule || 'mainbody';

    if (fullSortData) {
      return fullSortData;
    }

    if (bodyData && bodyData.data) {
      // 为了排序  我豁出去了 以外层数据为标准  可以排序数据
      if (Array.isArray(outerData)) {
        outerData.forEach(function (oitem) {
          var key = oitem.rowId; // headData[key] = JSON.parse(JSON.stringify(oitem.values));
          // 不进行拷贝了  不然大数据内存增长较大

          headData[key] = oitem.values; //子表有数据时，拉平

          if (bodyData.data[key] && bodyData.data[key].rows && bodyData.data[key].rows.length) {
            bodyData.data[key].rows.map(function (item) {
              var newData = Object.assign( // JSON.parse(JSON.stringify(item.values)),
              // 不进行拷贝了  不然大数据内存增长较大
              // JSON.parse(JSON.stringify(item.values)),
              // JSON.parse(JSON.stringify(headData[key])),
              {}, item.values, headData[key]); //合并后的主子拉平数据

              if (Object.prototype.toString.call(CurrentFullDataRule) == '[object Function]') {
                // console.log(CurrentFullDataRule);
                newData = CurrentFullDataRule(headData[key], item.values) || {};
              }

              if (CurrentFullDataRule === 'bodymain') {
                // console.log(CurrentFullDataRule);
                newData = Object.assign({}, headData[key], item.values);
              }

              if (CurrentFullDataRule === 'body') {
                // console.log(CurrentFullDataRule);
                newData = Object.assign({}, item.values);
                newData.headKey = key;
              }

              if (CurrentFullDataRule === 'main') {
                // console.log(CurrentFullDataRule);
                newData = Object.assign({}, headData[key]);
              }

              if (!newData.headKey) newData.headKey = key;
              newData.key = item.values.key;
              newData.headTs = headData[key]['ts'];
              result.push(newData);
            }); //子表无数据时，只去主表数据作为拉平数据
          } else {
            var newData = headData[key];
            newData.headKey = key;
            newData.key = key;
            newData.headTs = headData[key]['ts'];
            result.push(newData);
          }
        });
      }
    }

    for (var _i16 = 0, _result = result; _i16 < _result.length; _i16++) {
      var val = _result[_i16];

      for (var _i17 = 0, _Object$keys15 = Object.keys(val); _i17 < _Object$keys15.length; _i17++) {
        var item = _Object$keys15[_i17];
        var itemData = val[item];

        if (itemData && itemData.hasOwnProperty('scale')) {
          val[item].value = formatDot(itemData.value, val[item].scale);
        }
      }
    }

    return result;
  };
  /* 主子表展开收起按钮的回调
   * @param {*Array} expandedPks 当前转单展开的所有主表的pk
   */


  var onExpandedRowsChange = function onExpandedRowsChange(expandedPks) {
    // console.log('展开收起回调',expandedPks)
    if (typeof onExpandedChange === 'function') onExpandedChange(expandedPks);
  };

  var selectedAmount = getSelectedAmount(); //已选数据数量
  // //==================转单部分========================

  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(CreateTranferTable_CreateTranferTable, {
    _this: this // bodyAmount={bodyAmount}
    ,
    bodyColumn: bodyColumn,
    classByType: classByType,
    column: column,
    columns: columns,
    comType: comType,
    componentInitFinished: componentInitFinished,
    createNewCol: createNewCol,
    createFullData: createFullData,
    createNewData: createNewData,
    currentTable: currentTable,
    customAreaOfSelectedHead: customAreaOfSelectedHead,
    renderColumnsMultiSelect: renderColumnsMultiSelect,
    dataSource: dataSource,
    defaultProps: create_defaultProps,
    expandedRowRender: expandedRowRender,
    fullColumns: fullColumns,
    getMasterData: getMasterData,
    getSelectedFullData: getSelectedFullData,
    getScaleData: getScaleData,
    getTheLongestPrecision: getTheLongestPrecision,
    handleClearAllSelected: handleClearAllSelected,
    handleChangeView: handleChangeView,
    showChangeViewBtn: showChangeViewBtn,
    handleGenerateClick: handleGenerateClick,
    isTotal: this.myState.status.totalStatusOfTransferTable //是否显示合计行 具体用到拿个要细查代码决定
    ,
    isHeadTotal: this.myState.status.headTotalStatusOfTransferTable //否显示合计行 具体用到拿个要细查代码决定 主表是否合计
    ,
    isBodyTotal: this.myState.status.bodyTotalStatusOfTransferTable //否显示合计行 具体用到拿个要细查代码决定 子表是否合计
    ,
    isFullTotal: this.myState.status.fullTotalStatusOfTransferTable //否显示合计行 具体用到拿个要细查代码决定 拉平表是否合计
    ,
    isMultiChild: isMultiChild,
    onCheckedChange: onCheckedChange,
    onCheckboxChangeChild: onCheckboxChangeChild,
    selectArea: selectArea,
    selectedAmount: selectedAmount,
    setSelectedColumns: setSelectedColumns,
    showChildIndex: showChildIndex,
    showSeletedArea: showSeletedArea,
    showSeletedBtn: showSeletedBtn,
    showGenerateBtn: showGenerateBtn,
    showMasterIndex: showMasterIndex,
    tableType: tableType,
    transferBtnText: transferBtnText,
    transferTable: transferTable,
    totalKey: totalKey,
    totalTitle: totalTitle,
    isDrag: isDrag,
    sortType: sortType,
    containerSelector: containerSelector,
    getMultiChildChangeWidth: getMultiChildChangeWidth,
    onExpandedRowsChange: onExpandedRowsChange,
    meta: this.state.meta,
    headTableId: headTableId,
    bodyTableId: bodyTableId,
    fullTableId: fullTableId,
    defaultOperateColumnHidden: defaultOperateColumnHidden,
    autoHeight: autoHeight,
    cancelCustomRightMenu: cancelCustomRightMenu,
    fieldId: fieldId
  });
} //创建卡片型转单列表

function createTransferList(_ref4) {
  var _this2 = this;

  var headcode = _ref4.headcode,
      bodycode = _ref4.bodycode,
      transferListId = _ref4.transferListId,
      dataSource = _ref4.dataSource,
      componentInitFinished = _ref4.componentInitFinished,
      onTransferItemClick = _ref4.onTransferItemClick,
      onTransferItemSelected = _ref4.onTransferItemSelected,
      onUpdateLastActiveFormData = _ref4.onUpdateLastActiveFormData,
      onGrandSonsDataUpdate = _ref4.onGrandSonsDataUpdate;

  if (dataSource) {
    this.transferTableDataSource = dataSource;
  }

  if (headcode) {
    this.transferListCardHeadCode = headcode;
  }

  this.myState.transferListAreas = {
    headcode: headcode,
    bodycode: bodycode
  };

  if (!this.myState.transferList.hasOwnProperty(transferListId)) {
    this.myState.transferList[transferListId] = {
      // selected: {
      //     selectedShow: false,
      //     masterAmount: 0, //主表已选数量
      //     bodyAmount: 0, //子表已选数量
      //     masterCheckedId: [], //存放已选主表id，用于复选框半选
      //     selectedData: {
      //         selAll: false,
      //         masterSelData: {},
      //         childSelData: {}
      //     }
      // },
      transformForm: {
        //转单列表
        activeIndex: 0,
        show: true,
        //是否显示转单视图
        listData: {},
        //转单列表数据
        list: [],
        first: 0 //记录页面第几次进入的

      }
    };
  } // if (!this.state.meta) {
  //     return false;
  // }
  // if (!this.state.meta[transferListId] || !this.myState.transferList[transferListId]) {
  //     return false;
  // }
  // //转单模板信息
  // let transformListMeta = this.state.meta[transferListId].items;


  var transferList = this.myState.transferList;
  var transformForm = transferList[transferListId].transformForm;
  var dataAreaCode = headcode;
  this.onTransferItemClick = onTransferItemClick;
  this.onTransferItemSelected = onTransferItemSelected;

  var _pageScope = this; //默认选中第一条转单


  if (transformForm.first === 0) {
    transformForm.first++;
  } else if (transformForm.first === 1) {
    transformForm.list[0] && onTransferItemSelected && onTransferItemSelected(transformForm.list[0].data, transformForm.list[0].complete, transformForm.activeIndex, 'edit');
    transformForm.first++;
  } //点击缩略显示区


  var handleTransformListClick = function handleTransformListClick(v, index) {
    var formStatus = _pageScope.form.getFormStatus(headcode); // 孙表的更新回调


    onGrandSonsDataUpdate && onGrandSonsDataUpdate(transferListId, formStatus === 'browse');
    if (headcode && bodycode) updateLastActiveFormData.call(_this2, transferListId, headcode, bodycode, formStatus === 'browse', onUpdateLastActiveFormData);
    transformForm.activeIndex = index;

    _this2.setState({
      transformForm: transformForm
    }, function () {
      if (typeof onTransferItemSelected === 'function') {
        var status = !transformForm.list[index].complete ? 'edit' : transformForm.list[index].formStatus;
        onTransferItemSelected(v, transformForm.list[index].complete, index, status);
      }
    });
  };

  var flag = transformForm.show && transformForm.list && transformForm.list.length > 1;
  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(CreateTranferList_CreateTranferList // ref={(dom) => {this.myState.transferListRef = dom}}
  , {
    _this: this,
    dataAreaCode: dataAreaCode,
    dataSource: dataSource,
    componentInitFinished: componentInitFinished,
    flag: flag,
    handleTransformListClick: handleTransformListClick,
    transformForm: transformForm,
    transferListId: transferListId //transformListMeta={transformListMeta}

  });
}
// CONCATENATED MODULE: ./src/platform/components/TransferTable/CreateMultiTransferTable.js
var CreateMultiTransferTable_class, CreateMultiTransferTable_temp;

function CreateMultiTransferTable_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CreateMultiTransferTable_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CreateMultiTransferTable_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CreateMultiTransferTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CreateMultiTransferTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CreateMultiTransferTable_ownKeys(Object(source), true).forEach(function (key) { CreateMultiTransferTable_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CreateMultiTransferTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CreateMultiTransferTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CreateMultiTransferTable_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CreateMultiTransferTable_typeof = function _typeof(obj) { return typeof obj; }; } else { CreateMultiTransferTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CreateMultiTransferTable_typeof(obj); }

function CreateMultiTransferTable_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = CreateMultiTransferTable_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function CreateMultiTransferTable_slicedToArray(arr, i) { return CreateMultiTransferTable_arrayWithHoles(arr) || CreateMultiTransferTable_iterableToArrayLimit(arr, i) || CreateMultiTransferTable_unsupportedIterableToArray(arr, i) || CreateMultiTransferTable_nonIterableRest(); }

function CreateMultiTransferTable_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function CreateMultiTransferTable_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CreateMultiTransferTable_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CreateMultiTransferTable_arrayLikeToArray(o, minLen); }

function CreateMultiTransferTable_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CreateMultiTransferTable_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function CreateMultiTransferTable_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function CreateMultiTransferTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CreateMultiTransferTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CreateMultiTransferTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) CreateMultiTransferTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) CreateMultiTransferTable_defineProperties(Constructor, staticProps); return Constructor; }

function CreateMultiTransferTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CreateMultiTransferTable_setPrototypeOf(subClass, superClass); }

function CreateMultiTransferTable_setPrototypeOf(o, p) { CreateMultiTransferTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CreateMultiTransferTable_setPrototypeOf(o, p); }

function CreateMultiTransferTable_createSuper(Derived) { var hasNativeReflectConstruct = CreateMultiTransferTable_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CreateMultiTransferTable_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CreateMultiTransferTable_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CreateMultiTransferTable_possibleConstructorReturn(this, result); }; }

function CreateMultiTransferTable_possibleConstructorReturn(self, call) { if (call && (CreateMultiTransferTable_typeof(call) === "object" || typeof call === "function")) { return call; } return CreateMultiTransferTable_assertThisInitialized(self); }

function CreateMultiTransferTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CreateMultiTransferTable_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function CreateMultiTransferTable_getPrototypeOf(o) { CreateMultiTransferTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CreateMultiTransferTable_getPrototypeOf(o); }








var CreateMultiTransferTable_total = table_core_index_["lib"].total;
var CreateMultiTransferTable_ComplexTable = CreateMultiTransferTable_total(index_["Table"].SortTable); // 已选列表 来一个唯一标识 用作js样式计算  // 为啥要计算高度  ！！！！！！！！

var CreateMultiTransferTable_uniqueTagCls = 'unique-tag' + new Date().getTime();
var NCTabPane = index_["Tabs"].TabPane;
var CreateMultiTransferTable_defaultColor = ['#111111', '#555555', '#111', '#555'];

var CreateMultiTransferTable_CreateMultiTransferTable = Object(api_index_["withViewModel"])(CreateMultiTransferTable_class = (CreateMultiTransferTable_temp = /*#__PURE__*/function (_Component) {
  CreateMultiTransferTable_inherits(CreateMultiTransferTable, _Component);

  var _super = CreateMultiTransferTable_createSuper(CreateMultiTransferTable);

  function CreateMultiTransferTable(props) {
    var _this2;

    CreateMultiTransferTable_classCallCheck(this, CreateMultiTransferTable);

    _this2 = _super.call(this, props);

    _this2.dealDataFromTransferListBack = function () {
      var isWillMount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var _this2$props = _this2.props,
          _this = _this2$props._this,
          dataSource = _this2$props.dataSource,
          componentInitFinished = _this2$props.componentInitFinished,
          tabActiveIndex = _this2$props.tabActiveIndex,
          onTabClick = _this2$props.onTabClick;

      if (onTabClick && typeof onTabClick === 'function' && tabActiveIndex) {
        onTabClick(tabActiveIndex);

        _this.setState({
          transferTable: data.transferTable
        });
      }

      if (dataSource) {
        var _data = _this2.ViewModel.getData(dataSource);

        if (_data && _data.transferTable && Object.keys(_data.transferTable).length) {
          if (onTabClick && typeof onTabClick === 'function') {
            if (_data.transferTable.allSelected && _data.transferTable.allSelected.activeTab) {
              _this2.activeTab = tabActiveIndex || _data.transferTable.allSelected.activeTab;
              onTabClick(tabActiveIndex || _data.transferTable.allSelected.activeTab);
            }
          }

          var pk = _this2.ViewModel.getData("".concat(dataSource, "_PK")) || []; // 下有转单保存的pk， 需要在缓存中删除

          var ID = _this2.ViewModel.getData("".concat(dataSource, "_ID")) || {}; // 主表子表每条数据的的key， 删除缓存中保存过的单据要用

          var transferTableRelation = _data.transferTableRelation; // 单据关系 子表key对应得主表key

          _this2.processingData(_data.transferTable, pk, transferTableRelation, ID);

          _this.setState({
            transferTable: _data.transferTable
          }, function () {
            // 清除一下
            // this.ViewModel.setData(dataSource, null);
            //执行数据初始化周期函数
            if (isWillMount && typeof componentInitFinished == 'function') {
              componentInitFinished();
            }
          });
        }
      }
    };

    _this2.setModalTransferTableHeight = function () {
      var _this2$props2 = _this2.props,
          transferTable = _this2$props2.transferTable,
          showAll = _this2$props2.showAll;
      var selectedShow = showAll && transferTable.allSelected.selectedShow;
      var modalBodySelector = document.querySelector('.u-modal-body');
      var modalBodyNowClient = modalBodySelector ? modalBodySelector.getBoundingClientRect() : null;

      var transferTableTop = _this2.multiTransfertableMain && _this2.multiTransfertableMain.current && _this2.multiTransfertableMain.current.getBoundingClientRect && _this2.multiTransfertableMain.current.getBoundingClientRect().top;

      var transferTableHeight = 0; // 判断是设置全部列表的高度还是设置已选列表的高度

      if (selectedShow) {
        if (!_this2.setSelectListHeightIsDone) {
          transferTableHeight = modalBodyNowClient.bottom - transferTableTop; // 15 是modal的paddingBottom

          _this2.setState({
            transferTableHeight: transferTableHeight,
            selectedListHeight: transferTableHeight
          }, function () {
            _this2.setSelectListHeightIsDone = true;
            _this2.showTransferTableTimer = null;
          });
        }
      } else {
        if (!_this2.setListHeightIsDone) {
          transferTableHeight = modalBodyNowClient.bottom - transferTableTop; // 15 是modal的paddingBottom 

          _this2.setState({
            transferTableHeight: transferTableHeight,
            listHeight: transferTableHeight
          }, function () {
            _this2.setListHeightIsDone = true;
            _this2.showTransferTableTimer = null;
          });
        }
      }
    };

    _this2.transferTableIsInModal = function () {
      var modalSelector = document.querySelector('.u-modal-body');
      var transfertableNowCurrent = _this2.multiTransfertableMain.current,
          result = [],
          father = transfertableNowCurrent.parentNode;

      while (father && father.tagName != 'BODY') {
        result.push(father);
        father = father.parentNode;
      }

      _this2.doing = false;
      _this2.transfertableMainIsModalSChild = result.includes(modalSelector);
    };

    _this2.onresizeEvents = function (_ref) {
      var isIntl = _ref.isIntl,
          windowResize = _ref.windowResize;
      var _this2$props3 = _this2.props,
          showAll = _this2$props3.showAll,
          transferTable = _this2$props3.transferTable;
      var selectedShow = transferTable.allSelected.selectedShow && showAll;
      var windowHeight = getScrollTop();

      var transferTableTop = _this2.multiTransfertableMain && _this2.multiTransfertableMain.current && _this2.multiTransfertableMain.current.getBoundingClientRect && _this2.multiTransfertableMain.current.getBoundingClientRect().top;

      resizeEvent(isIntl, windowResize, selectedShow, transferTableTop, windowHeight, CreateMultiTransferTable_assertThisInitialized(_this2));
    };

    _this2.customAggregate = function () {
      var _this2$props4 = _this2.props,
          totalKey = _this2$props4.totalKey,
          totalTitle = _this2$props4.totalTitle,
          getTheLongestPrecision = _this2$props4.getTheLongestPrecision,
          transferTable = _this2$props4.transferTable;
      var allSelected = transferTable['allSelected'].selectedData;
      var masterSelData = allSelected.masterSelData;
      var childSelData = allSelected.childSelData;
      var data = [];
      var values = totalKey.reduce(function (total, now) {
        total[now.join('_')] = 0;
        return total;
      }, {});

      for (var _i = 0, _Object$entries = Object.entries(masterSelData); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = CreateMultiTransferTable_slicedToArray(_Object$entries[_i], 2),
            name = _Object$entries$_i[0],
            item = _Object$entries$_i[1];

        var masterValue = item.data;

        var _iterator = CreateMultiTransferTable_createForOfIteratorHelper(totalKey),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _item2 = _step.value;

            var _outKey = _item2.join('_');

            var _iterator4 = CreateMultiTransferTable_createForOfIteratorHelper(_item2),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _key = _step4.value;

                if (masterValue.hasOwnProperty(_key)) {
                  values[_outKey] = getTheLongestPrecision(String(masterValue[_key].value), String(values[_outKey]));
                  values[_outKey] = numberDispose(values[_outKey]);
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (childSelData.hasOwnProperty(name)) {
          for (var _i2 = 0, _Object$entries2 = Object.entries(childSelData[name]); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = CreateMultiTransferTable_slicedToArray(_Object$entries2[_i2], 2),
                na = _Object$entries2$_i[0],
                it = _Object$entries2$_i[1];

            var childValue = it.data.values ? it.data.values : it.data;

            var _iterator2 = CreateMultiTransferTable_createForOfIteratorHelper(totalKey),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _item = _step2.value;

                var outKey = _item.join('_');

                var _iterator3 = CreateMultiTransferTable_createForOfIteratorHelper(_item),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var key = _step3.value;

                    if (childValue.hasOwnProperty(key)) {
                      values[outKey] = getTheLongestPrecision(String(childValue[key].value), String(values[outKey]));
                      values[outKey] = numberDispose(values[outKey]);
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
      }

      totalKey.map(function (item, index) {
        var key = item.join('_');
        data.push({
          title: totalTitle[index],
          value: values[key],
          key: key
        });
      });
      return data.length ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        style: {
          display: 'inline-block'
        }
      }, data.map(function (item) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          style: {
            display: 'inline-block',
            marginRight: '20px'
          },
          key: item.key
        }, "".concat(item.title, ": ").concat(item.value));
      })) : '';
    };

    _this2.closeSelectedList = function () {
      var _this2$props5 = _this2.props,
          _this = _this2$props5._this,
          showAllList = _this2$props5.showAllList;
      _this.state.transferTable.allSelected.selectedShow = false;

      _this.setState({
        transferTable: _this.state.transferTable
      }, function () {
        _this2.onresizeEvents({
          isIntl: true,
          windowResize: false
        });

        showAllList && showAllList();
      });
    };

    _this2.viewSelectedList = function () {
      var _this2$props6 = _this2.props,
          _this = _this2$props6._this,
          showAll = _this2$props6.showAll,
          transferTable = _this2$props6.transferTable,
          allHeadId = _this2$props6.allHeadId,
          getAllSelectedData = _this2$props6.getAllSelectedData,
          onSelectedBtnClick = _this2$props6.onSelectedBtnClick;

      if (!showAll) {
        getAllSelectedData(); //获取多来源转单已选数据
      } else {
        var _transferTable = JSON.parse(JSON.stringify(_this.state.transferTable));

        var allSelected = JSON.parse(JSON.stringify(_this.state.transferTable.allSelected));

        for (var _i3 = 0, _Object$keys = Object.keys(_transferTable); _i3 < _Object$keys.length; _i3++) {
          var items = _Object$keys[_i3];

          if (items !== 'allSelected') {
            var selected = _transferTable[items].selected;
            var childS = selected.selectedData.childSelData;
            var masterS = selected.selectedData.masterSelData;

            for (var _i4 = 0, _Object$keys2 = Object.keys(masterS); _i4 < _Object$keys2.length; _i4++) {
              var item = _Object$keys2[_i4];

              if (Object.keys(masterS).length) {
                if (!allSelected.selectedData.masterSelData.hasOwnProperty(item)) {
                  allSelected.masterCheckedId.push(item);
                  allSelected.selIds[item] = [];
                  allSelected.selectedData.masterSelData[item] = masterS[item];
                }
              }
            }

            for (var _i5 = 0, _Object$keys3 = Object.keys(childS); _i5 < _Object$keys3.length; _i5++) {
              var _item3 = _Object$keys3[_i5];

              if (Object.keys(childS).length) {
                if (!allSelected.selectedData.childSelData.hasOwnProperty(_item3)) {
                  allSelected.selectedData.childSelData[_item3] = childS[_item3];

                  for (var _i6 = 0, _Object$keys4 = Object.keys(childS[_item3]); _i6 < _Object$keys4.length; _i6++) {
                    var ite = _Object$keys4[_i6];

                    allSelected.selIds[_item3].push(ite);
                  }
                } else {
                  for (var _i7 = 0, _Object$keys5 = Object.keys(childS[_item3]); _i7 < _Object$keys5.length; _i7++) {
                    var _ite = _Object$keys5[_i7];

                    if (!allSelected.selectedData.childSelData[_item3].hasOwnProperty(_ite)) {
                      allSelected.selectedData.childSelData[_item3][_ite] = childS[_item3][_ite];

                      allSelected.selIds[_item3].push(_ite);
                    }
                  }
                }
              }
            }

            allSelected.masterAmount = allSelected.masterCheckedId.length;

            for (var _i8 = 0, _Object$keys6 = Object.keys(allSelected.selIds); _i8 < _Object$keys6.length; _i8++) {
              var _item4 = _Object$keys6[_i8];
              // 有个数据没有子数据  但是应该也算一行数据
              allSelected.bodyAmount += allSelected.selIds[_item4].length || 1;
            }
          }
        }

        _this.state.transferTable.allSelected = allSelected;
      }

      if (!_this.state.meta[allHeadId]) {
        console.error('没有加载全部页签模板');
        return false;
      }

      transferTable.allSelected.selectedShow = !transferTable.allSelected.selectedShow; //已选列表弹窗显示状态

      _this.setState({
        transferTable: _this.state.transferTable
      }, function () {
        _this2.onresizeEvents({
          isIntl: false,
          windowResize: false
        });

        if (typeof onSelectedBtnClick === 'function') {
          onSelectedBtnClick();
        }
      });
    };

    _this2.processingTotalData = function (selected, tableType, column, showFullTable) {
      var _this2$props7 = _this2.props,
          getTheLongestPrecision = _this2$props7.getTheLongestPrecision,
          getScaleData = _this2$props7.getScaleData;
      var outerData = {};
      var totalKey = [];
      var totalScale = {};

      var _iterator5 = CreateMultiTransferTable_createForOfIteratorHelper(column),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _item5 = _step5.value;
          outerData[_item5['attrcode']] = {
            value: '',
            display: ''
          };

          if (_item5.istotal && _item5.itemtype === 'number') {
            totalKey.push(_item5.attrcode);
            totalScale[_item5.attrcode] = _item5.scale;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      if (tableType === 'master') {
        for (var _i9 = 0, _Object$keys7 = Object.keys(selected.masterSelData); _i9 < _Object$keys7.length; _i9++) {
          var items = _Object$keys7[_i9];
          var values = selected.masterSelData[items].data;

          var _iterator6 = CreateMultiTransferTable_createForOfIteratorHelper(totalKey),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var i = _step6.value;

              if (values[i] && CreateMultiTransferTable_typeof(values[i]) === 'object') {
                if (values[i] && CreateMultiTransferTable_typeof(values[i]) === 'object') {
                  if (!outerData[i].value) {
                    outerData[i].scale = values[i].scale;
                    outerData[i].value = values[i].value;
                  } else {
                    outerData[i].scale = getLongScale(values[i].value, outerData[i].value);
                    outerData[i].value = getTheLongestPrecision(values[i].value, outerData[i].value);
                  }
                }
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      } else if (showFullTable && tableType === 'full') {
        var childSelData = selected.childSelData;
        var masterSelData = selected.masterSelData;

        if (childSelData) {
          for (var _i10 = 0, _Object$keys8 = Object.keys(childSelData); _i10 < _Object$keys8.length; _i10++) {
            var _items = _Object$keys8[_i10];

            for (var _i11 = 0, _Object$keys9 = Object.keys(childSelData[_items]); _i11 < _Object$keys9.length; _i11++) {
              var item = _Object$keys9[_i11];

              var _iterator7 = CreateMultiTransferTable_createForOfIteratorHelper(totalKey),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _i12 = _step7.value;

                  if (childSelData[_items][item].data.values ? childSelData[_items][item].data.values.hasOwnProperty(_i12) : childSelData[_items][item].data.hasOwnProperty(_i12)) {
                    var _values = childSelData[_items][item].data.values || childSelData[_items][item].data;

                    if (_values[_i12] && CreateMultiTransferTable_typeof(_values[_i12]) === 'object') {
                      if (_values[_i12] && CreateMultiTransferTable_typeof(_values[_i12]) === 'object') {
                        if (!outerData[_i12].value) {
                          outerData[_i12].scale = _values[_i12].scale;
                          outerData[_i12].value = _values[_i12].value;
                        } else {
                          outerData[_i12].scale = getLongScale(_values[_i12].value, outerData[_i12].value);
                          outerData[_i12].value = getTheLongestPrecision(_values[_i12].value, outerData[_i12].value);
                        }
                      }
                    }
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          }
        }

        for (var _i13 = 0, _Object$keys10 = Object.keys(masterSelData); _i13 < _Object$keys10.length; _i13++) {
          var _items2 = _Object$keys10[_i13];

          var _values2 = masterSelData[_items2].data.values || masterSelData[_items2].data;

          var _iterator8 = CreateMultiTransferTable_createForOfIteratorHelper(totalKey),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _i14 = _step8.value;

              if (_values2.hasOwnProperty(_i14)) {
                if (_values2[_i14] && CreateMultiTransferTable_typeof(_values2[_i14]) === 'object') {
                  var scale = _values2[_i14].scale ? _values2[_i14].scale : totalScale[_i14];
                  var value = _values2[_i14] ? _values2[_i14].value : 0;

                  if (!outerData[_i14].value) {
                    outerData[_i14].scale = scale;
                    outerData[_i14].value = getScaleData(value, scale);
                  } else {
                    var totalData = Object(api_index_["sum"])(Number.parseFloat(value), Number.parseFloat(outerData[_i14].value.replace(/,/g, '')));
                    outerData[_i14].scale = scale > outerData[_i14].scale ? scale : outerData[_i14].scale;
                    outerData[_i14].value = getScaleData(String(totalData), outerData[_i14].scale);
                  }
                }
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      }

      return [outerData];
    };

    _this2.createSelectColumns = function (column, showIndex) {
      var result = [];
      var headTableId = _this2.props.headTableId;
      result.push({
        label: _this2.state.json['page-transferTable-0007'] || '序号-5',
        attrcode: 'numberindex',
        itemtype: 'customer',
        dataIndex: 'numberindex',
        fixed: 'left',
        visible: true,
        width: 80,
        className: 'col-customer-numberindex',
        render: function render(text, record2, index) {
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            title: _this2.state.json['page-transferTable-0010'] || '合计-2'
          }, _this2.state.json['page-transferTable-0010'] || '合计-2');
        }
      });
      column.map(function (item) {
        var width = item.width;

        if (!width) {
          width = 120;
        }

        var render = null;

        if (item.itemtype !== 'customer' && item.visible && !item.render) {
          render = function render(text, record, index) {
            if (record[item.attrcode]) {
              var display = record[item.attrcode].display;
              var value = record[item.attrcode].value;
              var dom = '';

              if (display || display === 0) {
                dom = display;
              } else {
                dom = value;
              }

              if (Object(api_index_["isTimeType"])(item.itemtype)) {
                if (item.itemtype == 'datetimepicker') {
                  dom = Object(api_index_["changeTime"])(value, 'YYYY-MM-DD HH:mm:ss');
                  dom = Object(api_index_["formatDatetime"])(dom, 'datetime');
                } else if (item.itemtype == 'timepicker') {
                  dom = value;
                  dom = Object(api_index_["formatDatetime"])(dom, 'time');
                } else {
                  dom = Object(api_index_["changeTime"])(value);
                  dom = Object(api_index_["formatDatetime"])(dom, 'date');
                }
              } // 多语处理


              if (item.itemtype === "residtxt") {
                var langCode = Object(api_index_["getLangCode"])();
                var loginLang = (item.languageMeta || []).filter(function (i) {
                  return i.languageCode == langCode;
                });

                if (loginLang.length > 0) {
                  loginLang[0].index === "1" ? loginLang[0].index = "" : "";

                  if (record[item.attrcode + loginLang[0].index] && record[item.attrcode + loginLang[0].index].value) {
                    dom = record[item.attrcode + loginLang[0].index].value;
                  }
                }
              }

              if (item.itemtype === 'number') {
                dom = Object(api_index_["formatNumber"])(dom);
              }

              return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
                className: "".concat(item.itemtype === 'number' ? 'number-td-span-wrapper' : '')
              }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ellipsisToTooltip_EllipsisToTooltip, {
                overlay: dom
              }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
                className: classnames_default()({
                  'single-line-and-ellipsis': _this2.state.transferTable['allSelected']['isEllipsis'],
                  'three-line-and-ellipsis': !_this2.state.transferTable['allSelected']['isEllipsis']
                })
              }, dom)));
            }
          };
        } else {
          if (item.itemtype === 'customer') {
            render = item.render;
          } else {
            render = function render(text, record, index) {
              return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ellipsisToTooltip_EllipsisToTooltip, {
                className: "tooltip-word-color",
                overlay: item.render.call(null, text, record, index),
                noEllipsis: true
              }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
                className: classnames_default()('col-customer-render-unit', {
                  'single-line-and-ellipsis': _this2.state.transferTable['allSelected']['isEllipsis'],
                  'three-line-and-ellipsis': !_this2.state.transferTable['allSelected']['isEllipsis']
                })
              }, item.render.call(null, text, record, index)));
            };
          }
        }

        if (item.visible && item.attrcode !== 'checkbox' && item.attrcode !== 'numberindex') {
          result.push(CreateMultiTransferTable_objectSpread(CreateMultiTransferTable_objectSpread({}, item), {}, {
            render: render,
            width: width,
            key: item.attrcode,
            title: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
              className: "".concat(item.itemtype === 'number' ? 'number-td-span-wrapper' : ''),
              style: {
                color: CreateMultiTransferTable_defaultColor.includes(item.color) ? '' : item.color
              }
            }, item.label)
          }));
        }
      }); // if (result[1] && !showIndex) {
      // }

      if (result.length) {
        result[result.length - 1].render = function () {
          /*#__PURE__*/
          external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null);
        };
      }

      return result;
    };

    _this2.processingData = function (transferTable, pk, relation, ID) {
      var params = _this2.props.params;

      if (pk.length) {
        for (var _i15 = 0, _Object$keys11 = Object.keys(transferTable); _i15 < _Object$keys11.length; _i15++) {
          var items = _Object$keys11[_i15];
          var headTableId = '';
          var onCheckedChange = null;

          var _iterator9 = CreateMultiTransferTable_createForOfIteratorHelper(params),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var headId = _step9.value;

              if (items === headId.headTableId) {
                headTableId = headId.headTableId;
                onCheckedChange = headId.onCheckedChange;
                break;
              }
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          if (items !== 'allSelected') {
            if (transferTable.hasOwnProperty(headTableId)) {
              (function () {
                var data = Object.keys(transferTable[items][headTableId]['bodyData']).length ? transferTable[items][headTableId]['bodyData']['data'] : {};
                var outerData = transferTable[items][headTableId]['outerData'];
                var selected = transferTable[items]['selected']['selectedData'];
                var masterCheckedId = transferTable[items]['selected'] && transferTable[items]['selected'].masterCheckedId;
                var childSelect = selected && selected.childSelData;
                var masterSelect = selected && selected.masterSelData; // 上游选择了多子数据
                // 如果下游只保存了一个数据 这里就有问题了 
                // transferTable[items][headTableId]['outerData'] = transferTable[items][headTableId]['outerData'].filter(it => {
                //     return !pk.includes(it.rowId) && !masterCheckedId.includes(it.rowId)
                // });

                transferTable[items][headTableId]['outerData'] = outerData.length ? outerData.filter(function (item) {
                  if (pk.includes(item.rowId)) {
                    return false;
                  }

                  if (data && Object.keys(data).length && data[item.rowId] && data[item.rowId].rows) {
                    // 这里需要先记录下 初始数据  不然会导致没有子级的数据返回时被删除
                    var originLength = data[item.rowId].rows.length;
                    data[item.rowId].rows = data[item.rowId].rows.filter(function (citem) {
                      return !pk.includes(citem.childId);
                    }); // 如果子集都没有了 父级也不需要了？？？  这里注意 一定要一开始有子集  然后才能移除父级

                    if (originLength && data[item.rowId].rows.length === 0) {
                      return false;
                    }
                  }

                  return true;
                }) : []; // 还有一个全选的状态也需要处理下  TODO

                if (pk && pk.length > 0) {
                  selected && (selected.selAll = false);
                }

                if (Object.keys(childSelect).length) {
                  var _loop = function _loop() {
                    var items = _Object$keys12[_i16];
                    var onChecked = {
                      body: [],
                      head: {}
                    };
                    var headIndex = Object.keys(data).indexOf(items);

                    for (var _i17 = 0, _Object$keys13 = Object.keys(childSelect[items]); _i17 < _Object$keys13.length; _i17++) {
                      var val = _Object$keys13[_i17];

                      if (pk.includes(val)) {
                        delete childSelect[items][val];
                      } else {
                        onChecked.body.push(childSelect[items][val].data.values ? childSelect[items][val].data.values : childSelect[items][val].data);
                      }
                    }

                    if (!Object.keys(childSelect[items]).length) {
                      masterCheckedId = masterCheckedId.filter(function (masterItems) {
                        return masterItems !== items;
                      });
                      delete childSelect[items];
                      delete masterSelect[items];
                    }

                    if (masterSelect.hasOwnProperty(items)) {
                      onChecked.head = masterSelect[items].data;
                    }

                    if (Object.keys(onChecked.head).length && typeof onCheckedChange === 'function') {
                      onCheckedChange(true, onChecked.head, headIndex, onChecked.body);
                    }
                  };

                  for (var _i16 = 0, _Object$keys12 = Object.keys(childSelect); _i16 < _Object$keys12.length; _i16++) {
                    _loop();
                  }

                  for (var _i18 = 0, _Object$keys14 = Object.keys(data); _i18 < _Object$keys14.length; _i18++) {
                    var val = _Object$keys14[_i18];
                    data[val].rows = data[val].rows.filter(function (it) {
                      return !pk.includes(it.childId);
                    });
                  }
                } else if (!Object.keys(childSelect).length && Object.keys(masterSelect).length) {
                  var arr = [];

                  var _loop2 = function _loop2() {
                    var items = _Object$keys15[_i19];

                    if (pk.includes(items)) {
                      arr.push(items);
                      masterCheckedId = masterCheckedId.filter(function (i) {
                        return i !== items;
                      });
                    } else {
                      if (typeof onCheckedChange === 'function') {
                        onCheckedChange(true, masterSelect[items].data, Object.keys(masterSelect).indexOf(items), []);
                      }
                    }
                  };

                  for (var _i19 = 0, _Object$keys15 = Object.keys(masterSelect); _i19 < _Object$keys15.length; _i19++) {
                    _loop2();
                  }

                  for (var _i20 = 0, _arr2 = arr; _i20 < _arr2.length; _i20++) {
                    var item = _arr2[_i20];
                    delete masterSelect[item];
                  }

                  var outD = transferTable[items][headTableId].outerData;
                  transferTable[items][headTableId].outerData = outD.filter(function (item, index) {
                    return !arr.includes(item.rowId);
                  });
                } // 赋值哟


                transferTable[items]['selected'] && (transferTable[items]['selected'].masterCheckedId = masterCheckedId);
                transferTable[items]['selected'].bodyAmount = Object.keys(selected.childSelData).reduce(function (total, item) {
                  // 有个数据没有子数据  但是应该也算一行数据
                  return total += Object.keys(selected.childSelData[item]).length || 1;
                }, 0);
                transferTable[items]['selected'].masterAmount = Object.keys(selected.masterSelData).length;

                if (data) {
                  for (var _i21 = 0, _Object$keys16 = Object.keys(data); _i21 < _Object$keys16.length; _i21++) {
                    var _item6 = _Object$keys16[_i21];
                    var rows = [];
                    var itemRows = data[_item6]['rows'] || data[_item6];

                    for (var i = 0; i < itemRows.length; i++) {
                      if (!pk.includes(itemRows[i]['childId'])) {
                        rows.push(itemRows[i]);
                      }
                    }

                    data[_item6].rows = rows;
                  }
                }
              })();
            }
          } else {
            var selIds = transferTable.allSelected ? transferTable.allSelected.selIds : null;
            var selectedData = transferTable.allSelected.selectedData;
            var childSelData = selectedData.childSelData;
            var masterSelData = selectedData.masterSelData;
            var masterCheckedId = transferTable.allSelected.masterCheckedId || [];
            var bodyAmount = 0;

            if (selIds) {
              var _loop3 = function _loop3() {
                var item = _Object$keys17[_i22];
                transferTable.allSelected.selIds[item] = selIds[item].filter(function (i) {
                  return !pk.includes(i);
                });

                if (!selIds[item].length) {
                  masterCheckedId = masterCheckedId.filter(function (i) {
                    return i !== item;
                  });
                  delete selIds[item];
                }
              };

              for (var _i22 = 0, _Object$keys17 = Object.keys(selIds); _i22 < _Object$keys17.length; _i22++) {
                _loop3();
              }

              var _loop4 = function _loop4() {
                var item = _Object$keys18[_i23];

                for (var _i24 = 0, _Object$keys19 = Object.keys(childSelData[item]); _i24 < _Object$keys19.length; _i24++) {
                  var i = _Object$keys19[_i24];

                  if (pk.includes(i)) {
                    delete childSelData[item][i];
                  }
                }

                if (!Object.keys(childSelData[item]).length) {
                  masterCheckedId = masterCheckedId.filter(function (masterItems) {
                    return masterItems !== item;
                  });
                  delete masterSelData[item];
                  delete childSelData[item];
                }
              };

              for (var _i23 = 0, _Object$keys18 = Object.keys(childSelData); _i23 < _Object$keys18.length; _i23++) {
                _loop4();
              }

              for (var _i25 = 0, _Object$keys20 = Object.keys(selIds); _i25 < _Object$keys20.length; _i25++) {
                var item = _Object$keys20[_i25];

                if (selIds[item]) {
                  // 有个数据没有子数据  但是应该也算一行数据
                  bodyAmount += selIds[item].length || 1;
                }
              }

              transferTable.allSelected.masterCheckedId = masterCheckedId;
              transferTable.allSelected.masterAmount = Object.keys(selIds).length;
              transferTable.allSelected.bodyAmount = bodyAmount;
            }
          }
        } // 后续可以优化下
        // 由于刘奇那边有个统计  所以这里触发一下onCheckedChange  NCCLOUD-158999

      } else if (_this2.props.onCheckedChange) {
        for (var _i26 = 0, _Object$keys21 = Object.keys(transferTable); _i26 < _Object$keys21.length; _i26++) {
          var _items3 = _Object$keys21[_i26];
          var _onCheckedChange = null,
              _headTableId = '';

          var _iterator10 = CreateMultiTransferTable_createForOfIteratorHelper(params),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var _headId = _step10.value;

              if (_items3 === _headId.headTableId) {
                _headTableId = _headId.headTableId;
                _onCheckedChange = _headId.onCheckedChange;
                break;
              }
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }

          if (_items3 !== 'allSelected' && transferTable.hasOwnProperty(_headTableId)) {
            var dataKeys = Object.keys(Object.keys(transferTable[_items3][_headTableId]['bodyData']).length ? transferTable[_items3][_headTableId]['bodyData']['data'] : {}),
                selected = transferTable[_items3]['selected']['selectedData'],
                childSelect = selected && selected.childSelData,
                childSelectKeys = Object.keys(childSelect),
                masterSelect = selected && selected.masterSelData,
                masterSelectKeys = Object.keys(masterSelect);

            if (childSelectKeys.length) {
              var _iterator11 = CreateMultiTransferTable_createForOfIteratorHelper(childSelectKeys),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var citems = _step11.value;
                  var onChecked = {
                    body: [],
                    head: masterSelect[citems] ? masterSelect[citems].data : {}
                  };
                  var childSelectItem = childSelect[citems],
                      childSelectItemsKeys = Object.keys(childSelectItem);

                  for (var _i27 = 0, _childSelectItemsKeys = childSelectItemsKeys; _i27 < _childSelectItemsKeys.length; _i27++) {
                    var _item7 = _childSelectItemsKeys[_i27];
                    onChecked.body.push(childSelectItem[_item7].data.values ? childSelectItem[_item7].data.values : childSelectItem[_item7].data);
                  }

                  if (Object.keys(onChecked.head).length && typeof _onCheckedChange === 'function') {
                    var headIndex = dataKeys.indexOf(citems);

                    _onCheckedChange(true, JSON.parse(JSON.stringify(onChecked.head)), headIndex, JSON.parse(JSON.stringify(onChecked.body)));
                  }
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
            } else if (masterSelectKeys.length) {
              var _iterator12 = CreateMultiTransferTable_createForOfIteratorHelper(masterSelectKeys),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var mitems = _step12.value;

                  if (!pk.includes(mitems)) {
                    if (typeof _onCheckedChange === 'function') {
                      _onCheckedChange(true, JSON.parse(JSON.stringify(masterSelect[mitems].data)), masterSelectKeys.indexOf(mitems), []);
                    }
                  }
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            }
          }
        }
      } else {
        console.log('么得数据！么得PK！');
      }
    };

    _this2.haveExpandIcon = function (headTableId, isSelected, record, index) {
      var _this2$props8 = _this2.props,
          bodyColumn = _this2$props8.bodyColumn,
          currentTable = _this2$props8.currentTable,
          transferTable = _this2$props8.transferTable,
          haveBodyData; // console.log(bodyColumn);

      if (isSelected) {
        var childSelData = transferTable.allSelected.selectedData.childSelData,
            expand = childSelData ? childSelData[record.key] || {} : {},
            childSelDatalen = Object.keys(expand) && Object.keys(expand).length;
        return !childSelDatalen;
      } else {
        if (transferTable && transferTable[headTableId] && transferTable[headTableId].outerData) {
          // 为了解决滑动加载index不正确问题  不能使用index了
          // let rowId = transferTable[headTableId].outerData[index].rowId;
          var rowId = record.key || record.headKey;

          if (currentTable && currentTable.bodyData && currentTable.bodyData.data && currentTable.bodyData.data[rowId]) {
            if (currentTable.bodyData.data[rowId].rows.length > 0) {
              haveBodyData = true; // TODO 无用代码 待清理
            }
          }
        }

        return true;
      }
    };

    _this2.ViewModel = _this2.props.ViewModel, _this2.expandArrId = _this2.props.events && _this2.props.events.expandArr;
    _this2.state = {
      switchViewState: 'evenUp',
      selectedTop: 0,
      multiTransfertableHeight: 0,
      // 多来源转单高度容器
      selectedHeight: 0,
      top: 0,
      height: 0,
      json: {},
      LangData: null,
      transferTableHeight: 0,
      selectedListBoxHeight: 0,
      listHeight: 0,
      //
      selectedListHeight: 0,
      fixedWidth: 0 //多来源有全部页签共用的底部灰条的宽度

    };
    _this2.activeTab = '';
    _this2.multiTransfertableMain = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createRef();
    _this2.multiTransfertableSelectedList = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createRef(); // ---------

    _this2.setTimeIndex = null;
    _this2.transferTableClient = null;
    _this2.isTransferTableSetHeight = false;
    _this2.isSelectedListSetHeight = false;
    _this2.transferTableHeight = null;
    _this2.modalBodyClient = null;
    _this2.modalBodyHeight = 0; // ---------

    _this2.transfertableMainIsModalSChild = false;
    _this2.total = null;
    _this2.doing = true; // 用来阻止事件的

    _this2.setListHeightIsDone = false; // 用来阻止事件的

    _this2.setSelectListHeightIsDone = false; // 用来阻止事件的

    _this2.setModalHeightIsDone = false; // 用来阻止事件的

    /***获取当前浏览器类型*/

    _this2.myBrowser = Object(api_index_["myBrowser"])();
    return _this2;
  }

  CreateMultiTransferTable_createClass(CreateMultiTransferTable, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this3 = this;

      var showAll = this.props.showAll;

      if (showAll) {
        var callback = function callback(json, bool, LangData) {
          _this3.setState({
            json: json,
            LangData: LangData
          }, function () {
            _this3.dealDataFromTransferListBack();
          });
        };

        Object(api_index_["getMultiLang"])({
          moduleId: 'page-transferTable',
          callback: callback
        });
      } else {
        this.dealDataFromTransferListBack();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      setTimeout(function () {
        _this4.onresizeEvents({
          isIntl: true
        });
      }, 200);

      window.onresize = function () {
        _this4.onresizeEvents({
          windowResize: true
        });
      }; // 设置一个接收装置 接收父级page所传递的信息


      var _this = this.props._this; // 查询区

      _this.infoExchangeController.subscribe('heightChange', function (name, _ref2) {
        var area = _ref2.area;

        if (area === 'searchArea') {
          console.log('侦测到查询区变化，进行高度毁灭打击！');
          setTimeout(function () {
            _this4.onresizeEvents({
              windowResize: true
            });
          }, 20);
        } else {
          console.log(area);
        }
      }); // 弹窗resize


      _this.infoExchangeController.subscribe('modelResizeEnd', function (name, _ref3) {
        var indexInfo = _ref3.indexInfo,
            className = _ref3.className,
            id = _ref3.id;
        console.log('侦测到弹窗resize变化，随风起舞吧！');
        setTimeout(function () {
          _this4.onresizeEvents({
            windowResize: true
          });
        }, 20);
      }); // console.log(_this);

    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this = this.props._this;

      if (_this.state.multiDelete) {
        //供应链刘奇的转单上下游是多页，下游保存单据后，上游需要更新删除保存后的数据
        this.dealDataFromTransferListBack(false);
        _this.state.multiDelete = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.onresize = null;
      var _this$props = this.props,
          _this = _this$props._this,
          dataSource = _this$props.dataSource;
      whenTransferTableUnmount.call(_this, dataSource); // 可能需要清理 这里清理了 别人就不能用了  可以考虑 topic模式

      _this.infoExchangeController && _this.infoExchangeController.unsubscribe('heightChange');
      _this.infoExchangeController && _this.infoExchangeController.unsubscribe('modelResizeEnd');
    }
    /**
     * 转单下游回到上游以后，检测保存过的数据，然后删除
     */

  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props2 = this.props,
          _this = _this$props2._this,
          clearAllSelectedData = _this$props2.clearAllSelectedData,
          createNewCol = _this$props2.createNewCol,
          cutParams = _this$props2.cutParams,
          isHeadTotal = _this$props2.isHeadTotal,
          isFullTotal = _this$props2.isFullTotal,
          params = _this$props2.params,
          _expandedRowRender = _this$props2.expandedRowRender,
          fullColumns = _this$props2.fullColumns,
          getMasterData = _this$props2.getMasterData,
          headPkIds = _this$props2.headPkIds,
          bodyPkIds = _this$props2.bodyPkIds,
          getSelectedFullData = _this$props2.getSelectedFullData,
          handleChangeView = _this$props2.handleChangeView,
          showChangeViewBtn = _this$props2.showChangeViewBtn,
          handleGenerateClick = _this$props2.handleGenerateClick,
          handleTabClick = _this$props2.handleTabClick,
          showAll = _this$props2.showAll,
          showSeletedBtn = _this$props2.showSeletedBtn,
          showGenerateBtn = _this$props2.showGenerateBtn,
          isDrag = _this$props2.isDrag,
          selectArea = _this$props2.selectArea,
          selectedHeaderRender = _this$props2.selectedHeaderRender,
          selectedAmount = _this$props2.selectedAmount,
          setSelectedColumns = _this$props2.setSelectedColumns,
          transferBtnText = _this$props2.transferBtnText,
          transferTable = _this$props2.transferTable,
          totalKey = _this$props2.totalKey,
          totalTitle = _this$props2.totalTitle,
          containerSelector = _this$props2.containerSelector,
          sortType = _this$props2.sortType,
          onExpandedChange = _this$props2.onExpandedChange,
          meta = _this$props2.meta,
          allHeadId = _this$props2.allHeadId,
          allFullTableId = _this$props2.allFullTableId,
          cancelCustomRightMenu = _this$props2.cancelCustomRightMenu,
          isShowBodyAmount = _this$props2.isShowBodyAmount,
          autoHeight = _this$props2.autoHeight,
          headTableId = _this$props2.headTableId;
      var _this$state = this.state,
          json = _this$state.json,
          LangData = _this$state.LangData,
          listHeight = _this$state.listHeight,
          selectedListHeight = _this$state.selectedListHeight,
          fixedWidth = _this$state.fixedWidth; //外层容器宽度

      var containerWidth = document.querySelector(containerSelector) && document.querySelector(containerSelector).clientWidth;
      var fixedCss = this.transfertableMainIsModalSChild ? {
        position: 'absolute',
        bottom: 0,
        width: 'auto',
        left: '0',
        right: '0'
      } : {
        width: 'auto',
        left: '15px',
        right: '15px'
      };
      var allListCSS = !showAll || showAll && !transferTable.allSelected.selectedShow ? {} : {
        height: 0,
        width: 0,
        opacity: 0
      };
      var allListCSScls = !showAll || showAll && !transferTable.allSelected.selectedShow ? 'showAllListCssCls' : ''; // 已选列表转单css

      var showSelectedListCSS = showAll && transferTable.allSelected.selectedShow ? 'showSelectedList' : '';
      var selectedColumn = createNewCol(undefined, this.state.json);
      var selectedFullColumn = createNewCol(fullColumns, this.state.json, 'full');
      var selectNestTotalColumns = this.createSelectColumns(setSelectedColumns(createNewCol(undefined, this.state.json), this.state.json), true, this.state.json);
      var selectFullTotalColumns = this.createSelectColumns(setSelectedColumns(selectedFullColumn, this.state.json), true, this.state.json);
      selectedListHeight = autoHeight ? selectedListHeight : 400;
      listHeight = autoHeight ? listHeight : 400;
      var transferTableMainHeight = showAll && transferTable.allSelected.selectedShow ? selectedListHeight : listHeight; // 浏览器修正 滚动条多8px

      var browserDiff = this.myBrowser === 'Firefox' || this.myBrowser === 'IE' ? 8 : 0; // 有合计行的表格scroll高度

      var selectedTotalTableScrollYHeight = selectedListHeight - 35 - 45 - 42 - 54 - browserDiff * 2,
          // 54 是已选列表界面头部按钮区域的高度
      // 已选列表无合计行表格的scroll高度
      selectedNoTotalTableScrollYHeight = selectedListHeight - 35 - 42 - 54 - browserDiff;

      var getCurrentFieldId = function getCurrentFieldId() {
        if (Array.isArray(params)) {
          var activeIndex = _this5.activeTab || 0;
          return params[activeIndex].fieldId;
        }
      };

      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "multitransfer-container multi-transfertable-main transfertable-main-".concat(this.myBrowser || 'chrome'),
        ref: this.multiTransfertableMain,
        style: {
          // 这个高度 在页面resize的时候 不能重新计算
          height: "".concat(transferTableMainHeight ? transferTableMainHeight + 'px' : 'auto'),
          position: 'relative',
          overflow: 'hidden'
        }
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        style: allListCSS,
        className: allListCSScls
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Tabs"], {
        activeKey: String(_this.state.transferTable.allSelected.activeTab),
        onChange: function onChange(key) {
          _this5.activeTab = key;
          handleTabClick(key); // 这里加这个方法是可以解决切换页签不计算的问题  但是也会导致多渲染一次  bbqin

          _this5.onresizeEvents({
            windowResize: true
          });
        },
        animated: false
      }, params && params.map(function (item, index) {
        var tabName = item.tabName,
            searchArea = item.searchArea,
            onTabClick = item.onTabClick,
            containerSelector = item.containerSelector,
            transferParams = CreateMultiTransferTable_objectWithoutProperties(item, ["tabName", "searchArea", "onTabClick", "containerSelector"]);

        transferParams.showSeletedArea = !showAll; //有全部页签的多来源不显示单个已选列表

        transferParams.showSeletedBtn = showAll; //普通多来源不显示查看已选按钮

        transferParams.showGenerateBtn = showGenerateBtn; //普通多来源不显示查看已选按钮

        return cutParams.includes(index) ? '' : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(NCTabPane, {
          tab: item.tabName,
          key: index
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: "multi-transfer-container"
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: "".concat(searchArea ? 'transfer-search-container' : 'transfer-search-container-space')
        }, searchArea && searchArea()), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null, _this.transferTable.createTransferTable(CreateMultiTransferTable_objectSpread(CreateMultiTransferTable_objectSpread({}, transferParams), {}, {
          isMultiChild: true,
          headPkIds: headPkIds,
          bodyPkIds: bodyPkIds,
          containerSelector: containerSelector,
          showChangeViewBtn: showChangeViewBtn,
          getMultiChildChangeWidth: methods_getMultiChildChangeWidth.bind(_this5),
          onExpandedChange: onExpandedChange,
          meta: meta
        })))));
      }))), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "".concat(showSelectedListCSS, " selected-list-wrapper")
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "selected-list"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "header-area"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "selected-icon-back-btn"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["BackBtn"], {
        onClick: this.closeSelectedList,
        className: "back-transfer-list"
      })), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "header-title"
      }, json['page-transferTable-0002'] || '已选列表'), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "header-right"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "header-right-inner"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "header-right-change-view-area"
      }, showChangeViewBtn === true && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["ToggleViewBtn"], {
        tooltips: [json['page-transferTable-0023'], json['page-transferTable-0022']],
        className: "selected-toggle-view",
        expand: !!transferTable.allSelected.showFullTable,
        onClick: handleChangeView.bind(this)
      })), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "clear-selected-item-view-btn"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Button"], {
        className: "item",
        onClick: clearAllSelectedData.bind(this),
        fieldid: "clearAll"
      }, json['page-transferTable-0013'] || '清空')), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "header-right-custom-area"
      }, selectedHeaderRender && selectedHeaderRender())))), showAll ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "content-area",
        ref: this.multiTransfertableSelectedList
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        fieldid: Object(api_index_["getSysFieldid"])('selected-list_table'),
        className: "".concat(CreateMultiTransferTable_uniqueTagCls)
      }, !transferTable.allSelected.showFullTable ? //主子/单表
      isHeadTotal && selectedColumn ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(CreateMultiTransferTable_ComplexTable, {
        className: "insertTable multi-transfer-selected-wrapper multi-transfertable-total-selected-wrapper" // createNewCol 处理所有的列使其符合规范  createNewCol() 默认生成非固定列的主体部分
        ,
        columns: setSelectedColumns(selectedColumn, this.state.json),
        sort: sortType,
        data: getMasterData(transferTable.allSelected.selectedData, params),
        expandedRowRender: function expandedRowRender(record, index) {
          return _expandedRowRender(record, index, _this5.state.json, CreateMultiTransferTable_uniqueTagCls);
        },
        haveExpandIcon: this.haveExpandIcon.bind(this, allHeadId, true) || undefined,
        rowKey: function rowKey(record) {
          return record.key;
        },
        scroll: {
          x: true,
          y: selectedTotalTableScrollYHeight
        },
        isTotal: true // lazyload={false}
        ,
        isDrag: isDrag,
        bodyStyle: {
          height: selectedTotalTableScrollYHeight
        },
        totalData: this.processingTotalData(transferTable.allSelected.selectedData, 'master', selectedColumn, false),
        totalColumns: selectNestTotalColumns //合计行表格的模板数据
        ,
        updateColumnHandle: updateColumnAfterSetting.bind(this),
        tableType: "transfer",
        foldingRowChange: function foldingRowChange(isEllipsis) {
          _this.state.transferTable['allSelected']['isEllipsis'] = isEllipsis;

          _this.setState({
            transferTable: _this.state.transferTable
          });
        },
        bodyDisplayInRow: _this.state.transferTable['allSelected']['isEllipsis'],
        cancelCustomRightMenu: cancelCustomRightMenu,
        colsSettingParam: getcolsSettingParam.call(_this, meta, allHeadId)
      }) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(CreateMultiTransferTable_ComplexTable, {
        className: "insertTable multi-transfer-selected-wrapper",
        columns: setSelectedColumns(selectedColumn, this.state.json),
        sort: sortType,
        data: getMasterData(transferTable.allSelected.selectedData, params),
        expandedRowRender: function expandedRowRender(record, index) {
          return _expandedRowRender(record, index, _this5.state.json, CreateMultiTransferTable_uniqueTagCls);
        },
        haveExpandIcon: this.haveExpandIcon.bind(this, allHeadId, true) || undefined,
        rowKey: function rowKey(record) {
          return record.key;
        },
        scroll: {
          x: true,
          y: selectedNoTotalTableScrollYHeight
        } // lazyload={false}
        ,
        isDrag: isDrag,
        bodyStyle: {
          height: selectedNoTotalTableScrollYHeight
        },
        updateColumnHandle: updateColumnAfterSetting.bind(this),
        tableType: "transfer" //折行回调
        ,
        foldingRowChange: function foldingRowChange(isEllipsis) {
          _this.state.transferTable['allSelected']['isEllipsis'] = isEllipsis;

          _this.setState({
            transferTable: _this.state.transferTable
          });
        },
        bodyDisplayInRow: _this.state.transferTable['allSelected']['isEllipsis'],
        colsSettingParam: getcolsSettingParam.call(_this, meta, allHeadId),
        cancelCustomRightMenu: cancelCustomRightMenu
      }) : //拉平
      isFullTotal && selectedFullColumn ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(CreateMultiTransferTable_ComplexTable, {
        className: "insertTable total-table-wrapper multi-transfer-selected-wrapper",
        lazyload: true,
        isDrag: isDrag,
        columns: setSelectedColumns(selectedFullColumn, this.state.json),
        sort: sortType,
        data: getSelectedFullData(transferTable.allSelected.selectedData, params),
        scroll: {
          x: true,
          y: selectedTotalTableScrollYHeight
        },
        isTotal: true,
        totalData: this.processingTotalData(transferTable.allSelected.selectedData, 'full', setSelectedColumns(selectedFullColumn, this.state.json), true),
        totalColumns: selectFullTotalColumns,
        bodyStyle: {
          height: selectedTotalTableScrollYHeight
        },
        updateColumnHandle: updateColumnAfterSetting.bind(this),
        tableType: "transfer" //折行回调
        ,
        foldingRowChange: function foldingRowChange(isEllipsis) {
          _this.state.transferTable['allSelected']['isEllipsis'] = isEllipsis;

          _this.setState({
            transferTable: _this.state.transferTable
          });
        },
        bodyDisplayInRow: _this.state.transferTable['allSelected']['isEllipsis'],
        colsSettingParam: getcolsSettingParam.call(_this, meta, allFullTableId),
        cancelCustomRightMenu: cancelCustomRightMenu
      }) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(CreateMultiTransferTable_ComplexTable, {
        className: "insertTable multi-transfer-selected-wrapper",
        lazyload: true,
        isDrag: isDrag,
        columns: setSelectedColumns(createNewCol(fullColumns, this.state.json, 'full'), this.state.json),
        sort: sortType,
        data: getSelectedFullData(transferTable.allSelected.selectedData, params),
        scroll: {
          x: true,
          y: selectedNoTotalTableScrollYHeight
        },
        bodyStyle: {
          height: selectedNoTotalTableScrollYHeight
        },
        updateColumnHandle: updateColumnAfterSetting.bind(this),
        tableType: "transfer" //折行回调
        ,
        foldingRowChange: function foldingRowChange(isEllipsis) {
          _this.state.transferTable['allSelected']['isEllipsis'] = isEllipsis;

          _this.setState({
            transferTable: _this.state.transferTable
          });
        },
        bodyDisplayInRow: _this.state.transferTable['allSelected']['isEllipsis'],
        colsSettingParam: getcolsSettingParam.call(_this, meta, allFullTableId),
        cancelCustomRightMenu: cancelCustomRightMenu
      }))) : '')), // 有全部页签----底部固定灰条
      showAll ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "fixed-bottom-outer",
        style: fixedCss,
        fieldid: Object(api_index_["getSysFieldid"])('bottom-area')
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "fixed-bottom-container bottom-area-container"
      }, showSeletedBtn && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "area-left"
      }, _this.state.transferTable.allSelected.selectedShow ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Button"], {
        className: "middle-btn",
        onClick: this.closeSelectedList,
        fieldid: "alllist"
      }, this.state.json['page-transferTable-0003'] || '全部列表-2', " ") : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Button"], {
        className: "middle-btn",
        fieldid: "selected",
        onClick: this.viewSelectedList // disabled={selectedAmount.bodyAmount == 0}

      }, this.state.json['page-transferTable-0004'] || '查看已选-2', " ")), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "area-center"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, this.state.json['page-transferTable-0010'], ":", /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, selectedAmount.masterAmount), this.state.json['page-transferTable-0017']), isShowBodyAmount && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        style: {
          marginLeft: 8
        }
      }, this.state.json['page-transferTable-0018'], ":", /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, selectedAmount.bodyAmount), this.state.json['page-transferTable-0019']))), selectArea ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "area-custom"
      }, selectArea && typeof selectArea == 'function' && selectArea()) : '', totalKey.length && totalTitle.length ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, this.customAggregate()) : '', cutParams.map(function (item, index) {
        var hideHtml = {};

        if (index != transferTable.allSelected.activeTab) {
          hideHtml = {
            display: 'none'
          };
        }

        return item.selectArea && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: "area-custom",
          style: hideHtml
        }, typeof item.selectArea == 'function' && item.selectArea());
      }), showGenerateBtn && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "area-right"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Button"] //fieldid="generate"
      , {
        fieldid: getCurrentFieldId() || "generate",
        className: "main-button large-btn",
        onClick: handleGenerateClick.bind(this),
        disabled: isShowBodyAmount ? selectedAmount.bodyAmount === 0 && selectedAmount.masterAmount === 0 : selectedAmount.masterAmount === 0
      }, transferBtnText)))) : '');
    }
  }]);

  return CreateMultiTransferTable;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]), CreateMultiTransferTable_temp)) || CreateMultiTransferTable_class;


CreateMultiTransferTable_CreateMultiTransferTable.defaultProps = {
  isTotal: true
};
// CONCATENATED MODULE: ./src/platform/components/TransferTable/multi.js
function multi_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { multi_typeof = function _typeof(obj) { return typeof obj; }; } else { multi_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return multi_typeof(obj); }

function multi_toConsumableArray(arr) { return multi_arrayWithoutHoles(arr) || multi_iterableToArray(arr) || multi_unsupportedIterableToArray(arr) || multi_nonIterableSpread(); }

function multi_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function multi_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function multi_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return multi_arrayLikeToArray(arr); }

function multi_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function multi_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { multi_ownKeys(Object(source), true).forEach(function (key) { multi_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { multi_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function multi_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function multi_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = multi_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function multi_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return multi_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return multi_arrayLikeToArray(o, minLen); }

function multi_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * 多来源转单
 * Created by liyaoh on 2018/5/22.
 */










__webpack_require__(926);

var multi_total = table_core_index_["lib"].total;
var multi_ComplexTable = multi_total(index_["Table"].SortTable);
var multi_defaultColor = ['#111111', '#555555', '#111', '#555'];

var multi_hasObjProperty = function hasObjProperty(obj) {
  return !!(obj && Object.values(obj).length);
}; //创建转单 params:单来源转单参数


function createMultiTransferTable(_ref, params) //Array 多个页签的转单参数 具体参数可以参考create.js里createTransferTable的参数
{
  var _this2 = this;

  var _ref$showAll = _ref.showAll,
      showAll = _ref$showAll === void 0 ? false : _ref$showAll,
      allHeadId = _ref.allHeadId,
      allBodyId = _ref.allBodyId,
      allFullTableId = _ref.allFullTableId,
      dataSource = _ref.dataSource,
      headPkIds = _ref.headPkIds,
      bodyPkIds = _ref.bodyPkIds,
      containerSelector = _ref.containerSelector,
      componentInitFinished = _ref.componentInitFinished,
      transferBtnText = _ref.transferBtnText,
      _ref$showSeletedBtn = _ref.showSeletedBtn,
      showSeletedBtn = _ref$showSeletedBtn === void 0 ? true : _ref$showSeletedBtn,
      _ref$showGenerateBtn = _ref.showGenerateBtn,
      showGenerateBtn = _ref$showGenerateBtn === void 0 ? true : _ref$showGenerateBtn,
      onTransferBtnClick = _ref.onTransferBtnClick,
      onCheckedChange = _ref.onCheckedChange,
      onSelectedBtnClick = _ref.onSelectedBtnClick,
      onChangeViewClick = _ref.onChangeViewClick,
      _ref$showChangeViewBt = _ref.showChangeViewBtn,
      showChangeViewBtn = _ref$showChangeViewBt === void 0 ? true : _ref$showChangeViewBt,
      showAllList = _ref.showAllList,
      onTabClick = _ref.onTabClick,
      selectArea = _ref.selectArea,
      selectedHeaderRender = _ref.selectedHeaderRender,
      onClearAll = _ref.onClearAll,
      onSelectedItemRemove = _ref.onSelectedItemRemove,
      tabActiveIndex = _ref.tabActiveIndex,
      hideTabs = _ref.hideTabs,
      _ref$totalKey = _ref.totalKey,
      totalKey = _ref$totalKey === void 0 ? [] : _ref$totalKey,
      _ref$totalTitle = _ref.totalTitle,
      totalTitle = _ref$totalTitle === void 0 ? [] : _ref$totalTitle,
      _ref$isDrag = _ref.isDrag,
      isDrag = _ref$isDrag === void 0 ? false : _ref$isDrag,
      _ref$sortType = _ref.sortType,
      sortType = _ref$sortType === void 0 ? {
    mode: 'single',
    //'multiple'(多列排序) 或'single'(单列排序)(如果前端排序的时候想多列排序，对象里就穿这个字段就可以了),
    backSource: false,
    //false是前端排序，值为true为后端排序,默认false
    sortFun: function sortFun(sortInfoObj, sortData) {
      //sortInfoObj:{field:是模板的dataIndex,order:"ascend"升序/"descend"降序} , sortData:[]排序后的数据
      updateTransferDataAfterSort(sortData, allHeadId, _this2, sortInfoObj);
    }
  } : _ref$sortType,
      _ref$cancelCustomRigh = _ref.cancelCustomRightMenu,
      cancelCustomRightMenu = _ref$cancelCustomRigh === void 0 ? false : _ref$cancelCustomRigh,
      onExpandedChange = _ref.onExpandedChange,
      customSortRule = _ref.customSortRule,
      fieldid = _ref.fieldid,
      currentPageId = _ref.currentPageId,
      _ref$isShowBodyAmount = _ref.isShowBodyAmount,
      isShowBodyAmount = _ref$isShowBodyAmount === void 0 ? true : _ref$isShowBodyAmount,
      _ref$autoHeight = _ref.autoHeight,
      autoHeight = _ref$autoHeight === void 0 ? true : _ref$autoHeight;

  if (dataSource) {
    this.transferTableDataSource = dataSource;
  }

  if (!this.state.transferTable.hasOwnProperty('allSelected')) {
    this.state.transferTable['allSelected'] = {
      activeTab: tabActiveIndex || '0',
      //当前高亮tab
      selectedShow: false,
      //显示已选列表
      masterAmount: 0,
      //主表已选数量
      bodyAmount: 0,
      //子表已选数量
      masterCheckedId: [],
      //存放已选主表id，用于复选框半选
      selIds: {},
      //存放其他页签的主子表id
      showFullTable: false,
      //已选列表中是否显示主子拉平
      isEllipsis: true,
      selectedData: {
        selAll: false,
        masterSelData: {},
        childSelData: {}
      }
    };

    if (tabActiveIndex) {
      onTabClick && onTabClick(tabActiveIndex);
    }
  }

  this.state.transferTable['allSelected']['params'] = Array.isArray(params) ? params.map(function (item) {
    return {
      bodyTableId: item.bodyTableId,
      headTableId: item.headTableId,
      fullTableId: item.fullTableId,
      fieldId: item.fieldId
    };
  }) : [];

  var _this = this;

  var bodyColumns = allBodyId && this.state.meta[allBodyId] ? this.state.meta[allBodyId].items.map(function (val, index) {
    sortColumn(val, sortType, customSortRule); // 清理required 属性  不然会导致表头错行

    if (val && val.required) {
      delete val.required;
    }

    return val;
  }) : [];
  var headColumns = allHeadId && this.state.meta[allHeadId] ? this.state.meta[allHeadId].items.map(function (val, index) {
    sortColumn(val, sortType, customSortRule); // 清理required 属性  不然会导致表头错行

    if (val && val.required) {
      delete val.required;
    }

    return val;
  }) : [];
  var fullColumns = allFullTableId && this.state.meta[allFullTableId] ? this.state.meta[allFullTableId].items.map(function (val, index) {
    sortColumn(val, sortType, customSortRule); // 清理required 属性  不然会导致表头错行

    if (val && val.required) {
      delete val.required;
    }

    return val;
  }) : []; //主子拉平模板

  var transferTable = this.state.transferTable;
  var traversalStatus = this.myState.status.traversalStatus; // 是否遍历模板的状态
  // 根据表单类型从模板中判断表格是否是有合计的表格
  //判断合计行是否显示

  var traversalColumns = function traversalColumns(columns) {
    var _iterator = multi_createForOfIteratorHelper(columns),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var items = _step.value;

        if (items.istotal) {
          _this2.myState.status.totalStatusOfTransferTable = true;
          _this2.myState.status.traversalStatus = true;
        } else if (items.data) {
          var _iterator2 = multi_createForOfIteratorHelper(items.data),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var item = _step2.value;

              if (item.istotal) {
                _this2.myState.status.totalStatusOfTransferTable = true;
                _this2.myState.status.traversalStatus = true;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        if (_this2.myState.status.traversalStatus) {
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    traversalColumn.call(_this2, columns[0].data, 'head');
    traversalColumn.call(_this2, columns[1].data, 'full');
    traversalColumn.call(_this2, columns[2].data, 'body');
  }; //设置主表、子表、拉平表的合计行是否显示


  var traversalColumn = function traversalColumn(column, key) {
    if (column) {
      var _iterator3 = multi_createForOfIteratorHelper(column),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var items = _step3.value;

          if (items.istotal) {
            _this2.myState.status["".concat(key, "TotalStatusOfTransferTable")] = true;
            _this2.myState.status["".concat(key, "traversalStatus")] = true;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }; //查看是否遍历了合计状态


  if (!traversalStatus) {
    var columnsArr = [{
      data: headColumns,
      title: 'columns'
    }, {
      data: fullColumns,
      title: 'columns'
    }, {
      data: bodyColumns,
      title: 'columns'
    }];
    traversalColumns.bind(this, columnsArr)();
  }

  this.onTabClick = onTabClick;
  this.onClearAll = onClearAll;
  this.onSelectedItemRemove = onSelectedItemRemove; //已选列表清除回调
  // 设置默认隐藏后的剩余params

  var cutParams = [];
  var paramsLength = params.length;

  if (hideTabs) {
    for (var i = 0; i < paramsLength; i++) {
      if (hideTabs.includes(i)) {
        cutParams.push(i);
      }
    }
  } else {
    cutParams = params;
  }

  var switchValue = function switchValue(value, json) {
    if (value) {
      return json && json['page-transferTable-0020'] || '是';
    } else {
      return json && json['page-transferTable-0021'] || '否';
    }
  }; // 处理模板


  var createNewCol = function createNewCol(column, json, columnType) {
    var result = [];
    var pageId = currentPageId || _this2.state && _this2.state.meta.pageid;

    if (!_this2.state.meta[allHeadId] && !column) {
      // return false 会导致报错
      return [];
    }

    var columnData = column || _this2.state.meta[allHeadId].items;
    columnData.map(function (item) {
      var width = item.width;

      if (!width) {
        width = 120;
      }

      var render = null;

      if (item.itemtype !== 'customer' && item.visible && !item.render) {
        render = function render(text, record, index) {
          if (record[item.attrcode]) {
            var display = record[item.attrcode].display;
            var value = record[item.attrcode].value;
            var scale = record[item.attrcode].scale;
            var dom = '';

            if (display || display === 0) {
              dom = display;
            } else {
              dom = value;
            }

            if (Object(api_index_["isTimeType"])(item.itemtype)) {
              if (item.itemtype == 'datetimepicker') {
                dom = Object(api_index_["changeTime"])(value, 'YYYY-MM-DD HH:mm:ss');
                dom = Object(api_index_["formatDatetime"])(dom, 'datetime');
              } else if (item.itemtype == 'timepicker') {
                dom = value;
                dom = Object(api_index_["formatDatetime"])(dom, 'time');
              } else {
                dom = Object(api_index_["changeTime"])(value);
                dom = Object(api_index_["formatDatetime"])(dom, 'date');
              }
            } // 多语处理


            if (item.itemtype === "residtxt") {
              var langCode = Object(api_index_["getLangCode"])();
              var loginLang = (item.languageMeta || []).filter(function (i) {
                return i.languageCode == langCode;
              });

              if (loginLang.length > 0) {
                loginLang[0].index === "1" ? loginLang[0].index = "" : "";

                if (record[item.attrcode + loginLang[0].index] && record[item.attrcode + loginLang[0].index].value) {
                  dom = record[item.attrcode + loginLang[0].index].value;
                }
              }
            }

            if (item.itemtype == 'switch') {
              dom = switchValue(value, json);
            } else if (item.itemtype == 'checkbox_switch') {
              dom = checkboxSwitchValue(value, false, json);
            }

            if (item.itemtype == 'number') {
              var recordScale = scale || (item.scale ? item.scale : '-1');
              dom = formatDot(dom, recordScale);
              dom = Object(api_index_["formatAcuracy"])(dom, recordScale);
              dom = Object(api_index_["formatNumber"])(dom);
            }

            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
              className: "".concat(item.itemtype === 'number' ? 'number-td-span-wrapper' : '')
            }, dom ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ellipsisToTooltip_EllipsisToTooltip, {
              overlay: dom
            }, item.hyperlinkflag && dom ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("a", {
              href: "javascript:;",
              className: "hyper-link",
              onClick: function onClick(e) {
                e.stopPropagation();
                var moduleId = columnType === 'child' ? allBodyId : columnType === 'full' ? allFullTableId : allHeadId;
                Object(api_index_["linkTo"])(pageId, moduleId, item.attrcode, value || dom);
              }
            }, dom) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, dom, "\xA0")) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, dom, "\xA0"));
          }
        };
      } else {
        if (item.itemtype === 'customer') {
          render = item.render;
        } else {
          render = function render(text, record, index) {
            return record[item.attrcode] ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ellipsisToTooltip_EllipsisToTooltip, {
              className: "tooltip-word-color",
              overlay: item.render.call(null, text, record, index),
              noEllipsis: true
            }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
              className: classnames_default()('col-customer-render-unit', {
                'single-line-and-ellipsis': _this2.state.transferTable['allSelected']['isEllipsis'],
                'three-line-and-ellipsis': !_this2.state.transferTable['allSelected']['isEllipsis']
              })
            }, item.render.call(null, text, record, index))) : record[item.attrcode];
          };
        }
      }

      if (item.visible) {
        result.push(multi_objectSpread(multi_objectSpread({}, item), {}, {
          width: width,
          render: render,
          key: item.attrcode,
          dataIndex: item.dataIndex || item.attrcode,
          title: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            className: "".concat(item.itemtype === 'number' ? 'number-td-span-wrapper' : 'text-td-span-wrapper', "  ").concat(item.className || ''),
            style: {
              color: multi_defaultColor.includes(item.color) ? '' : item.color
            }
          }, " ", item.label)
        }));
      }
    });
    console.log('子表模板数据', result);
    return result;
  }; // 保留合计的最长小数位精度 nowVal: 当前要加的值， totalVal： 之前合计好的值


  var getTheLongestPrecision = function getTheLongestPrecision(nowVal, totalVal) {
    if (nowVal === '' || nowVal === null || nowVal === 'null') {
      return totalVal;
    }

    var nowValArr = String(nowVal).split('.');
    var totalValArr = String(totalVal).split('.');
    var nowValLen = nowValArr.length >= 2 ? String(nowValArr[1]).length : 0;
    var totalValLen = totalValArr.length >= 2 ? String(totalValArr[1]).length : 0; // let addVal = Number.parseFloat(nowVal) + Number.parseFloat(totalVal);

    nowVal = thounsandTransfer(nowVal, 'number');
    totalVal = thounsandTransfer(totalVal, 'number');
    var addVal = accAdd(Number.parseFloat(nowVal), Number.parseFloat(Number(totalVal)));
    var addValArr = String(addVal).split('.');
    var addValLen = addValArr.length >= 2 ? String(addValArr[1]).length : 0;

    if (totalValLen >= nowValLen) {
      var zeroO = '';

      for (var _i = 0; _i < totalValLen - addValLen; _i++) {
        zeroO += '0';
      }

      var bool = String(addVal).includes('.') ? "".concat(addVal).concat(zeroO) : "".concat(addVal, ".").concat(zeroO);
      return Number(bool).toFixed(totalValLen);
    } else {
      var _zeroO = '';

      for (var _i2 = 0; _i2 < nowValLen - addValLen; _i2++) {
        _zeroO += '0';
      }

      var _bool = String(addVal).includes('.') ? "".concat(addVal).concat(_zeroO) : "".concat(addVal, ".").concat(_zeroO);

      return Number(_bool).toFixed(nowValLen);
    }
  };
  /*子表添加复选框列和序号
   *
   * @param {Array} columns 渲染子表的每一列的属性数据 [{},{},...]
   * @param {*} records
   * @param {*} indexs
   * @param {*} comType
   * @param {*} json
   */


  var renderColumnsMultiSelectChild = function renderColumnsMultiSelectChild(columns, records, indexs, json) {
    var indexCol = {
      label: json && json['page-transferTable-0007'] || '序号-8',
      itemtype: 'customer',
      attrcode: 'numberindex',
      dataIndex: 'numberindex',
      visible: true,
      width: 60,
      className: 'col-customer-numberindex',
      render: function render(text, record2, index) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, index + 1);
      }
    }; // 添加序号列

    var oprColumn = {
      label: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, json['page-transferTable-0006'] || '操作-6'),
      attrcode: 'operate',
      itemtype: 'customer',
      dataIndex: 'operate',
      width: 100,
      fixed: 'right',
      visible: true,
      className: 'col-customer-operate',
      render: function render(text, record, index) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: "row-remove",
          onClick: clearSelectedData.bind(_this2, 'body', records.key, record.key, record, true)
        }, json && json['page-transferTable-0001'] || '移除-1');
      }
    };
    return [indexCol].concat(multi_toConsumableArray(columns), [oprColumn]);
  }; //统计已选列表数量


  var getSelectedAmount = function getSelectedAmount() {
    var allSelected = _this2.state.transferTable.allSelected; //多来源转单全部页签
    //多来源有全部时统计全部页签的勾选重量

    if (allSelected) {
      var bodys = 0;
      Object.values(allSelected.selIds).forEach(function (item) {
        // 有个数据没有子数据  但是应该也算一行数据
        bodys += item.length || 1;
      });
      var masterAmount = Object.keys(allSelected.selIds).length || allSelected.masterCheckedId && allSelected.masterCheckedId.length;
      var bodyAmount = bodys;
      allSelected.masterAmount = masterAmount;
      allSelected.bodyAmount = bodyAmount;
      return {
        masterAmount: masterAmount,
        bodyAmount: bodyAmount
      };
    }
  };

  var selectedAmount = getSelectedAmount(); //已选数据数量
  //选择主/子表时记录主表id key:转单id headId:主表id flag:选中/取消选中

  var setMasterId = function setMasterId(key, headId, flag) {
    var _transferTable$key$se = transferTable[key].selected,
        masterCheckedId = _transferTable$key$se.masterCheckedId,
        selectedData = _transferTable$key$se.selectedData;

    if (!masterCheckedId.includes(headId) && flag) {
      masterCheckedId.push(headId);
    } else if (masterCheckedId.indexOf(headId) !== -1 && !selectedData.selAll) {
      masterCheckedId.splice(masterCheckedId.indexOf(headId), 1);
    }
  };
  /*
  *  清除已选列表对应主/子表数据
  * type： String （nest/body）判断移除的是主表还是子表或者主子拉平的参数
  * headId： String 主表ID
  * bodyId： String 子表ID
  * record： Object 移除的当前行的数据
  * isFull： Boolean 是否是主子拉平
  *
  * */


  var clearSelectedData = function clearSelectedData(type, headId, bodyId, record, isFull) {
    var delBodyData;

    for (var _i3 = 0, _Object$keys = Object.keys(transferTable); _i3 < _Object$keys.length; _i3++) {
      var key = _Object$keys[_i3];
      var selectedData = key !== 'allSelected' ? transferTable[key].selected.selectedData : transferTable[key].selectedData;
      var masterSelData = selectedData.masterSelData;
      var childSelData = selectedData.childSelData;
      selectedData.selAll = false;

      if (type === 'head') {
        if (key === 'allSelected') {
          delBodyData = childSelData[headId] && childSelData[headId]; //记录被删除的子表数据
        }

        delete masterSelData[headId];
        delete childSelData[headId];
        delete transferTable.allSelected.selIds[headId]; //删除全部已选中对应主表id

        delete transferTable.allSelected.selectedData.masterSelData[headId];
      } else if (type === 'body') {
        if (childSelData[headId]) {
          var childSelDataKeys = Object.keys(childSelData[headId]);

          if (childSelDataKeys.length) {
            var _iterator4 = multi_createForOfIteratorHelper(childSelDataKeys),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var val = _step4.value;
                var selHeadId = transferTable.allSelected.selIds[headId];

                if (selHeadId && val === bodyId && selHeadId.includes(val)) {
                  //删除全部已选中对应子表id
                  selHeadId.splice(selHeadId.indexOf(val), 1);
                }

                if (val === bodyId) {
                  //删除相应页签子表id
                  delete childSelData[headId][val];
                } // 没有子集就清理父级


                if (Object.keys(childSelData[headId] || {}).length === 0) {
                  delete childSelData[headId];
                  delete masterSelData[headId];
                  delete transferTable.allSelected.selIds[headId];
                  delete transferTable.allSelected.selectedData.masterSelData[headId];
                  delete transferTable.allSelected.selectedData.childSelData[headId];
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }

          if (!Object.keys(childSelData[headId] || {}).length && masterSelData[headId]) {
            // 如果没有子集  这里父子级都需要清理下
            delete childSelData[headId];
            delete masterSelData[headId];
            delete transferTable.allSelected.selIds[headId];
            delete transferTable.allSelected.selectedData.masterSelData[headId];
            delete transferTable.allSelected.selectedData.childSelData[headId];
          }
        }
      }

      if (key !== 'allSelected') setMasterId(key, headId, false);
    } // allSelected setMasterId 同步下 避免 统计数据时出现错误


    transferTable.allSelected.masterCheckedId = Object.keys(transferTable.allSelected.selIds || {});

    _this2.setState({
      transferTable: transferTable
    }, function () {
      var bodySelData = delBodyData ? Object.values(delBodyData).map(function (item) {
        return item.data.values || item.data;
      }) : [];
      onSelectedItemRemove && onSelectedItemRemove(record, isFull ? [] : bodySelData);
    });
  }; //清空全部选中数据


  var clearAllSelectedData = function clearAllSelectedData() {
    transferTable.allSelected.selectedData.masterSelData = {};
    transferTable.allSelected.selectedData.childSelData = {};
    transferTable.allSelected.selIds = {};
    transferTable.allSelected.masterAmount = 0;
    transferTable.allSelected.bodyAmount = 0;
    transferTable.allSelected.masterCheckedId = [];

    for (var _i4 = 0, _Object$keys2 = Object.keys(transferTable); _i4 < _Object$keys2.length; _i4++) {
      var key = _Object$keys2[_i4];

      if (key !== 'allSelected') {
        transferTable[key].selected.masterCheckedId = []; //清空已选主表id

        transferTable[key].selected.selectedData.selAll = false; //取消全选

        transferTable[key].selected.selectedData.masterSelData = {};
        transferTable[key].selected.selectedData.childSelData = {};
      }
    }

    _this2.setState({
      transferTable: transferTable
    }, function () {
      onClearAll && onClearAll();
    });
  };
  /*
  * 设置已选列表columns
  * columns： Array  已选列表界面表格模板
  * json： Object 多语资源
  * */


  var setSelectedColumns = function setSelectedColumns() {
    var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var json = arguments.length > 1 ? arguments[1] : undefined;
    // 添加序号列
    var indexCol = {
      label: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, json['page-transferTable-0007'] || '序号-9'),
      title: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, json['page-transferTable-0007'] || '序号-9'),
      attrcode: 'numberindex',
      itemtype: 'customer',
      dataIndex: 'numberindex',
      visible: true,
      width: 80,
      className: 'col-customer-selected-numberindex',
      render: function render(text, record2, index) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, index + 1);
      }
    };
    var operateColumn = {};

    if (transferTable.allSelected.showFullTable) {
      operateColumn = {
        title: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          bbq: "\u5DF2\u9009\u62C9\u5E73\u79FB\u9664"
        }, json['page-transferTable-0006'] || '操作-7'),
        attrcode: 'operate',
        itemtype: 'customer',
        dataIndex: 'operate',
        width: 81,
        visible: true,
        fixed: 'right',
        className: 'col-customer-operate',
        render: function render(text, record, index) {
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            className: "row-remove",
            onClick: !transferTable.allSelected.showFullTable ? clearSelectedData.bind(_this2, 'head', record.key, '', record, false) : clearSelectedData.bind(_this2, 'body', record.headKey, record.key, record, true)
          }, json && json['page-transferTable-0001'] || '移除-6');
        }
      };
    } else {
      operateColumn = {
        title: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          bbq: "\u5DF2\u9009\u975E\u62C9\u5E73\u79FB\u9664"
        }, json['page-transferTable-0006'] || '操作-9'),
        attrcode: 'operate',
        itemtype: 'customer',
        dataIndex: 'operate',
        // fixed: 'right',
        width: 81,
        visible: true,
        className: 'col-customer-operate',
        render: function render(text, record, index) {
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            className: "row-remove",
            onClick: !transferTable.allSelected.showFullTable ? clearSelectedData.bind(_this2, 'head', record.key, '', record, false) : clearSelectedData.bind(_this2, 'body', record.headKey, record.key, record)
          }, json && json['page-transferTable-0001'] || '移除-3');
        }
      };
    }

    return [indexCol].concat(multi_toConsumableArray(columns), [operateColumn]);
  }; //  处理数据


  var createNewData = function createNewData(data) {
    var datas = [];
    data.map(function (val, index) {
      val = val.values || val;
      datas.push(val);
    });
    return datas;
  };
  /*
  * 将当前项arg1和之前的合计项arg2相加，并将结果进行精度千分位处理
  * arg1： String/Number 当前项
  * arg2： String/Number 之前的合计项
  * */


  var accAdd = function accAdd(arg1, arg2) {
    var r1, r2, m;

    try {
      r1 = arg1.toString().split('.')[1].length;
    } catch (e) {
      r1 = 0;
    }

    try {
      r2 = arg2.toString().split('.')[1].length;
    } catch (e) {
      r2 = 0;
    }

    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
  };
  /*
  * 处理合计数据
  * selected: Object 计算合计选中的数据
  * tableType：String 判断主子表结构、主子拉平结构或者单表结构 （nest/full/simple）
  * column：Array 合计行的模板数据
  * showFullTable：Boolean 判断是表示是否为拉平显示
  * */


  var processingTotalData = function processingTotalData(selected, tableType, column, showFullTable, record) {
    var _this = _this2.props._this;
    var headkey = '';
    var outerData = {};
    var totalKey = [];
    var totalScale = {};

    var _iterator5 = multi_createForOfIteratorHelper(column),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _item = _step5.value;
        outerData[_item['attrcode']] = {
          value: '',
          display: ''
        };

        if (_item.istotal && _item.itemtype === 'number') {
          totalKey.push(_item.attrcode);
          totalScale[_item.attrcode] = _item.scale;
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    if (tableType === 'body') {
      headkey = record.headKey || record.key;
      var bodyData = selected.childSelData[headkey];

      if (bodyData) {
        for (var _i5 = 0, _Object$keys3 = Object.keys(bodyData); _i5 < _Object$keys3.length; _i5++) {
          var item = _Object$keys3[_i5];

          var _iterator6 = multi_createForOfIteratorHelper(totalKey),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _i6 = _step6.value;

              if (bodyData[item].data.values ? bodyData[item].data.values.hasOwnProperty(_i6) : bodyData[item].data.hasOwnProperty(_i6)) {
                var values = bodyData[item].data.values || bodyData[item].data;

                if (values[_i6] && multi_typeof(values[_i6]) === 'object') {
                  var scale = values[_i6].scale ? values[_i6].scale : totalScale[_i6];
                  var value = values[_i6] ? values[_i6].value : 0;

                  if (!outerData[_i6].value) {
                    outerData[_i6].scale = scale;
                    outerData[_i6].value = getScaleData(value, scale);
                  } else {
                    var totalData = Object(api_index_["sum"])(Number.parseFloat(value), Number.parseFloat(outerData[_i6].value.replace(/,/g, '')));
                    outerData[_i6].scale = scale > outerData[_i6].scale ? scale : outerData[_i6].scale;
                    outerData[_i6].value = getScaleData(String(totalData), outerData[_i6].scale);
                  }
                }
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      }
    }

    return [outerData];
  };
  /*
  * 根据精度获取数据
  * data：String/Number 要获取精度的具体值
  * scal：String/Number 精度
  * */


  var getScaleData = function getScaleData(data, scal) {
    var value = String(data).replace(/,/g, '');
    var scale = Number(scal);

    if (value) {
      var len = scale >= 0 ? value.split('.')[0].length + scale + 1 : value.split('.')[0].length;

      if (value.indexOf('.') !== -1) {
        var arr = value.split('.');

        if (!Number.isNaN(scale) && scale !== -1) {
          if (scale === 0) {
            value = String(value).split('.')[0];
          } else {
            value = String(value).padEnd(len, '0');
          }
        }
      } else {
        if (!Number.isNaN(scale) && scale !== -1) {
          if (scale === 0) {
            value = String(value);
          } else {
            var str = value + '.';
            value = str.padEnd(Number(len), '0');
          }
        }
      }
    } else {
      return 0;
    }

    return Object(api_index_["commafy"])(value);
  };
  /*
  * 为已选列表的模板添加操作列
  * column：Array 需要处理的已选列表表格的模板
  * showIndex：Object 是否要为模板添加序号列
  * json：Object 多语资源
  * */


  var createSelectColumns = function createSelectColumns(column, showIndex, json) {
    var result = [];
    result.push({
      label: json['page-transferTable-0007'] || '序号-6',
      attrcode: 'numberindex',
      itemtype: 'customer',
      dataIndex: 'numberindex',
      visible: true,
      width: 60,
      // 这里要和序号列同宽
      className: 'col-customer-numberindex',
      render: function render(text, record2, index) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          title: json['page-transferTable-0010'] || '合计-7'
        }, json['page-transferTable-0010'] || '合计-7');
      }
    });
    column.map(function (item) {
      var width = item.width;

      if (!width) {
        width = 120;
      }

      var render = null;

      if (item.itemtype !== 'customer' && item.visible && !item.render) {
        render = function render(text, record, index) {
          if (record[item.attrcode]) {
            var display = record[item.attrcode].display;
            var value = record[item.attrcode].value;
            var dom = '';

            if (display || display === 0) {
              dom = display;
            } else {
              dom = value;
            }

            if (Object(api_index_["isTimeType"])(item.itemtype)) {
              if (item.itemtype == 'datetimepicker') {
                dom = Object(api_index_["changeTime"])(value, 'YYYY-MM-DD HH:mm:ss');
                dom = Object(api_index_["formatDatetime"])(dom, 'datetime');
              } else if (item.itemtype == 'timepicker') {
                dom = value;
                dom = Object(api_index_["formatDatetime"])(dom, 'time');
              } else {
                dom = Object(api_index_["changeTime"])(value);
                dom = Object(api_index_["formatDatetime"])(dom, 'date');
              }
            } // 多语处理


            if (item.itemtype === "residtxt") {
              var langCode = Object(api_index_["getLangCode"])();
              var loginLang = (item.languageMeta || []).filter(function (i) {
                return i.languageCode == langCode;
              });

              if (loginLang.length > 0) {
                loginLang[0].index === "1" ? loginLang[0].index = "" : "";

                if (record[item.attrcode + loginLang[0].index] && record[item.attrcode + loginLang[0].index].value) {
                  dom = record[item.attrcode + loginLang[0].index].value;
                }
              }
            }

            if (item.itemtype === 'number') {
              dom = Object(api_index_["formatNumber"])(dom);
            }

            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
              className: "".concat(item.itemtype === 'number' ? 'number-td-span-wrapper' : '')
            }, dom ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ellipsisToTooltip_EllipsisToTooltip, {
              overlay: dom
            }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, dom)) : dom);
          }
        };
      } else {
        if (item.itemtype === 'customer') {
          render = item.render;
        } else {
          render = function render(text, record, index) {
            return record[item.attrcode] ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ellipsisToTooltip_EllipsisToTooltip, {
              className: "tooltip-word-color",
              placement: 'left',
              delay: 1,
              overlay: item.render.call(null, text, record, index),
              noEllipsis: true
            }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
              className: classnames_default()('col-customer-render-unit', {
                'single-line-and-ellipsis': _this2.state.transferTable['allSelected']['isEllipsis'],
                'three-line-and-ellipsis': !_this2.state.transferTable['allSelected']['isEllipsis']
              })
            }, item.render.call(null, text, record, index))) : record[item.attrcode];
          };
        }
      }

      if (item.visible && item.attrcode !== 'checkbox' && item.attrcode !== 'numberindex') {
        result.push(multi_objectSpread(multi_objectSpread({}, item), {}, {
          render: render,
          width: width,
          key: item.attrcode,
          title: item.label
        }));
      }
    });

    if (result.length) {
      result[result.length - 1].render = function () {
        /*#__PURE__*/
        external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null);
      };
    }

    return result;
  };
  /*
  * 渲染子表表格数据
  * record：Object 主表展开行所属行的数据
  * index：Number 主表展开行所属行的下标
  * json：Object 多语资源
  * */


  var expandedRowRender = function expandedRowRender(record, index, json, uniqueTagCls) {
    var activeIndex = _this2.state.transferTable.allSelected.activeTab;
    var currentBodyId = params[activeIndex].bodyTableId; // let bodyColumn = this.state.meta[allBodyId].items; //子表模板

    if (!_this2.state.meta[currentBodyId] || !_this2.state.meta[currentBodyId].items) {
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null);
    }

    var bodyColumn = _this2.state.meta[currentBodyId].items; //子表模板

    var newColumn = bodyColumn;
    var sortType = _this2.props.sortType;

    if (newColumn instanceof Array && newColumn.length > 0) {
      newColumn = renderColumnsMultiSelectChild.call(_this2, newColumn, record, index, json);
      var data = null,
          expandTableHeight = 0;
      var expandTableBodyHeight = 0; //展开子表表体的高度
      //已选列表的子表移除时需要删除行数据

      data = createNewData(Object.values(transferTable.allSelected.selectedData.childSelData[record.key] || {}).map(function (item) {
        return item.data;
      }));
      var isTotal = _this2.myState.status.bodyTotalStatusOfTransferTable;
      var $uniqueTagCls = document && document.querySelector(".".concat(uniqueTagCls));
      expandTableHeight = getExpandTableHeight(data, isTotal, $uniqueTagCls || external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(_this2));
      expandTableBodyHeight = getExpandTableHeight(data, isTotal, $uniqueTagCls || external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(_this2), true); // console.log(uniqueTagCls, $uniqueTagCls, expandTableHeight);

      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        style: {
          height: "".concat(expandTableHeight, "px")
        },
        className: "transfertable-expand-wraper",
        fieldid: Object(api_index_["getSysFieldid"])("selected-list-".concat(index, "_table"))
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(multi_ComplexTable, {
        columns: createNewCol(newColumn, json, 'child'),
        sort: sortType,
        data: data,
        lazyload: true,
        isDrag: isDrag,
        scroll: {
          x: true,
          y: expandTableBodyHeight || 450
        },
        isTotal: isTotal,
        totalBodyHeight: 30,
        totalData: processingTotalData(transferTable.allSelected.selectedData, 'body', createNewCol(newColumn, json), false, record),
        totalColumns: createSelectColumns(createNewCol(newColumn, json), true, json),
        updateColumnHandle: updateColumnAfterSetting.bind(_this2),
        bodyStyle: {
          minHeight: '30px'
        },
        tableType: "transfer" //折行回调
        ,
        foldingRowChange: function foldingRowChange(isEllipsis) {
          _this2.state.transferTable['allSelected']['isEllipsis'] = isEllipsis;

          _this2.setState({
            transferTable: _this2.state.transferTable
          });
        },
        bodyDisplayInRow: _this2.state.transferTable['allSelected']['isEllipsis'],
        cancelCustomRightMenu: cancelCustomRightMenu,
        colsSettingParam: getcolsSettingParam.call(_this2, _this2.state.meta, allBodyId)
      }));
    } else {
      return;
    }
  };
  /*
  * 提取已选列表主表数据
  * data：已选的原数据
  * */


  var getMasterData = function getMasterData(data) {
    return Object.values(data.masterSelData).map(function (item) {
      return item.data;
    });
  };
  /*
  * 点击页签
  * key：String 所点击的页签的唯一标识
  * */


  var handleTabClick = function handleTabClick(key) {
    if (_this2.state.transferTable.allSelected) {
      var headID = params[key].headTableId; // 当前页签的headId

      linkage.call(_this2, headID); // 多来源联动页签已选数据的更换
      // 改变当前页签下标

      _this2.state.transferTable.allSelected.activeTab = key;
    }

    _this2.setState({
      transferTable: _this2.state.transferTable
    }, function () {
      // 更新子表高度  by 这里的做法贼恶心 优秀的做法是  将计算高度放到render中
      _this2.infoExchangeController && _this2.infoExchangeController.publish('heightChange', {
        area: params[key].headTableId
      });

      if (typeof onTabClick === 'function') {
        onTabClick(key);
      }
    });
  }; //点击切换视图


  var handleChangeView = function handleChangeView() {
    if (typeof onChangeViewClick === 'function') {
      onChangeViewClick();
    }
  };
  /*
  * 处理并获取已选列表主子拉平数据 （为已选的主子拉平数据增加headKey属性：将来点击生成按钮的时候提取pk需要用到）
  * data：已选的原数据
  * */


  var getSelectedFullData = function getSelectedFullData(data) {
    var masterSelData = data.masterSelData,
        childSelData = data.childSelData;
    var result = [];

    var _loop = function _loop() {
      var key = _Object$keys4[_i7];

      // 存在 没有子表元素的主表数据
      if (multi_hasObjProperty(childSelData[key])) {
        Object.values(childSelData[key]).forEach(function (item) {
          // let childVal = JSON.parse(JSON.stringify(item.data.values || item.data || {}));
          // let headData = JSON.parse(JSON.stringify(masterSelData[key].data || {}));
          // 为了万行
          var childVal = Object.assign({}, item.data.values || item.data || {});
          var headData = Object.assign({}, masterSelData[key].data || {});
          childVal.headKey = headData.key || headData.headKey; // delete headData.headKey;
          // delete headData.key;

          var newData = Object.assign({}, childVal, headData); //合并后的主子拉平数据

          if (newData.headKey) newData.headKey = key;
          newData.key = childVal.key;
          result.push(newData);
        });
      } else {
        // 没有就取主表数据
        // let newData = JSON.parse(JSON.stringify(masterSelData[key].data));
        // 为了万行
        var newData = masterSelData[key].data;
        newData.headKey = key;
        newData.key = key;
        result.push(newData);
      }
    };

    for (var _i7 = 0, _Object$keys4 = Object.keys(childSelData); _i7 < _Object$keys4.length; _i7++) {
      _loop();
    }

    return result;
  }; //获取多来源转单已选数据


  var getAllSelectedData = function getAllSelectedData() {
    var transferTable = _this2.state.transferTable;
    var allSelected = _this2.state.transferTable.allSelected;

    for (var _i8 = 0, _Object$keys5 = Object.keys(transferTable); _i8 < _Object$keys5.length; _i8++) {
      var items = _Object$keys5[_i8];

      if (items !== 'allSelected') {
        var selected = transferTable[items].selected;
        var childS = selected.selectedData.childSelData;
        var masterS = selected.selectedData.masterSelData;

        for (var _i9 = 0, _Object$keys6 = Object.keys(masterS); _i9 < _Object$keys6.length; _i9++) {
          var item = _Object$keys6[_i9];

          if (Object.keys(masterS).length) {
            if (!allSelected.selectedData.masterSelData.hasOwnProperty(item)) {
              allSelected.masterCheckedId.push(item);
              allSelected.selIds[item] = [];
              allSelected.selectedData.masterSelData[item] = masterS[item];
            }
          }
        }

        for (var _i10 = 0, _Object$keys7 = Object.keys(childS); _i10 < _Object$keys7.length; _i10++) {
          var _item2 = _Object$keys7[_i10];

          if (Object.keys(childS).length) {
            if (!allSelected.selectedData.childSelData.hasOwnProperty(_item2)) {
              allSelected.selectedData.childSelData[_item2] = childS[_item2];

              for (var _i11 = 0, _Object$keys8 = Object.keys(childS[_item2]); _i11 < _Object$keys8.length; _i11++) {
                var ite = _Object$keys8[_i11];

                allSelected.selIds[_item2].push(ite);
              }
            } else {
              for (var _i12 = 0, _Object$keys9 = Object.keys(childS[_item2]); _i12 < _Object$keys9.length; _i12++) {
                var _ite = _Object$keys9[_i12];

                if (!allSelected.selectedData.childSelData[_item2].hasOwnProperty(_ite)) {
                  allSelected.selectedData.childSelData[_item2][_ite] = childS[_item2][_ite];

                  allSelected.selIds[_item2].push(_ite);
                }
              }
            }
          }
        }

        allSelected.masterAmount = allSelected.masterCheckedId.length;

        for (var _i13 = 0, _Object$keys10 = Object.keys(allSelected.selIds); _i13 < _Object$keys10.length; _i13++) {
          var _item3 = _Object$keys10[_i13];
          // 有个数据没有子数据  但是应该也算一行数据
          allSelected.bodyAmount += allSelected.selIds[_item3].length || 1;
        }
      }
    }

    _this2.state.transferTable.allSelected = allSelected;
  }; //点击生成按钮


  var handleGenerateClick = function handleGenerateClick() {
    var selIds = []; // getAllSelectedData();
    //获取已选列表主子表id

    if (!headPkIds || !bodyPkIds) {
      console.error('没有传主表或子表主键字段');
    }

    for (var _i14 = 0, _Object$keys11 = Object.keys(transferTable); _i14 < _Object$keys11.length; _i14++) {
      var ID = _Object$keys11[_i14];

      if (ID !== 'allSelected') {
        (function () {
          var selected = transferTable[ID].selected;
          var masterData = JSON.parse(JSON.stringify(selected.selectedData.masterSelData));
          var childData = JSON.parse(JSON.stringify(selected.selectedData.childSelData));
          var bodys = [];

          var _loop2 = function _loop2() {
            var key = _Object$keys12[_i15];
            var hValues = masterData[key].data;

            if (hValues.saga_status && hValues.saga_status.value === '1') {
              // eslint-disable-next-line no-continue
              return "continue";
            }

            if (childData[key]) {
              var _loop3 = function _loop3() {
                var id = _Object$keys13[_i16];
                var values = childData[key][id].data.values || childData[key][id].data;

                if (values.saga_status && values.saga_status.value === '1') {
                  // eslint-disable-next-line no-continue
                  return "continue";
                }

                bodyPkIds && bodyPkIds.map(function (pk) {
                  var cData = childData[key][id].data.values || childData[key][id].data;

                  if (cData.hasOwnProperty(pk)) {
                    var _bodys$push;

                    bodys.push((_bodys$push = {}, multi_defineProperty(_bodys$push, pk, id), multi_defineProperty(_bodys$push, "ts", values.ts && values.ts.value), _bodys$push));
                  }
                });
              };

              for (var _i16 = 0, _Object$keys13 = Object.keys(childData[key]); _i16 < _Object$keys13.length; _i16++) {
                var _ret2 = _loop3();

                if (_ret2 === "continue") continue;
              }
            }

            headPkIds && headPkIds.map(function (pk) {
              if (masterData[key].data.hasOwnProperty(pk)) {
                var _head;

                selIds.push({
                  head: (_head = {}, multi_defineProperty(_head, pk, key), multi_defineProperty(_head, "ts", masterData[key].data.ts && masterData[key].data.ts.value), _head),
                  bodys: bodys
                });
              }
            });
            bodys = [];
          };

          for (var _i15 = 0, _Object$keys12 = Object.keys(masterData); _i15 < _Object$keys12.length; _i15++) {
            var _ret = _loop2();

            if (_ret === "continue") continue;
          }
        })();
      }
    }

    api_index_["ViewModel"].setData('multiTransferIds', selIds); //避免无效渲染导致性能所以把setState去掉

    if (typeof onTransferBtnClick === 'function') {
      onTransferBtnClick(selIds);
    }
    /*this.setState(
        {
            transferTable: this.state.transferTable
        },
        () => {
            if (typeof onTransferBtnClick === 'function') {
                onTransferBtnClick(selIds);
            }
        }
    );*/

  };

  if (Array.isArray(cutParams)) {
    return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(CreateMultiTransferTable_CreateMultiTransferTable, {
      _this: this,
      allHeadId: allHeadId,
      headPkIds: headPkIds,
      showAllList: showAllList,
      onSelectedBtnClick: onSelectedBtnClick,
      getAllSelectedData: getAllSelectedData,
      bodyPkIds: bodyPkIds,
      clearAllSelectedData: clearAllSelectedData,
      componentInitFinished: componentInitFinished,
      createNewCol: createNewCol,
      cutParams: cutParams,
      dataSource: dataSource,
      expandedRowRender: expandedRowRender,
      fullColumns: fullColumns,
      getMasterData: getMasterData,
      getScaleData: getScaleData,
      getSelectedFullData: getSelectedFullData,
      getTheLongestPrecision: getTheLongestPrecision,
      handleChangeView: handleChangeView,
      showChangeViewBtn: showChangeViewBtn,
      handleGenerateClick: handleGenerateClick,
      handleTabClick: handleTabClick,
      isTotal: this.myState.status.totalStatusOfTransferTable,
      isHeadTotal: this.myState.status.headTotalStatusOfTransferTable,
      isBodyTotal: this.myState.status.bodyTotalStatusOfTransferTable,
      isFullTotal: this.myState.status.fullTotalStatusOfTransferTable,
      params: params,
      showAll: showAll,
      onTabClick: this.onTabClick,
      onCheckedChange: onCheckedChange,
      showSeletedBtn: showSeletedBtn,
      showGenerateBtn: showGenerateBtn // searchArea={searchArea}
      ,
      selectArea: selectArea,
      selectedHeaderRender: selectedHeaderRender,
      selectedAmount: selectedAmount,
      isShowBodyAmount: isShowBodyAmount,
      setSelectedColumns: setSelectedColumns,
      transferBtnText: transferBtnText,
      transferTable: transferTable,
      totalKey: totalKey,
      totalTitle: totalTitle,
      containerSelector: containerSelector,
      sortType: sortType,
      onExpandedChange: onExpandedChange,
      meta: this.state.meta,
      allBodyId: allBodyId,
      allFullTableId: allFullTableId,
      autoHeight: autoHeight
    });
  }
}
// CONCATENATED MODULE: ./src/platform/components/TransferTable/index.js
/*
 * Created by wangshhj on 2018/1/16.
 */



/* harmony default export */ var TransferTable = __webpack_exports__["default"] = ({
  createTransferTable: createTransferTable,
  createTransferList: createTransferList,
  createMultiTransferTable: createMultiTransferTable,
  getTransferTableValue: getTransferTableValue,
  setTransferTableValue: setTransferTableValue,
  insertTransferTableValue: insertTransferTableValue,
  setChildTransferTableData: setChildTransferTableData,
  getTransferTableSelectedValue: getTransferTableSelectedValue,
  setTransferListValue: setTransferListValue,
  getSelectedListDisplay: getSelectedListDisplay,
  getTransformFormDisplay: getTransformFormDisplay,
  setTransformFormStatus: setTransformFormStatus,
  getTransformFormStatus: getTransformFormStatus,
  changeNextTransformForm: changeNextTransformForm,
  returnTransferTableList: returnTransferTableList,
  getTransformFormAmount: getTransformFormAmount,
  setMultiTransformFormStatus: setMultiTransformFormStatus,
  changeViewType: changeViewType,
  getTransferTableSelectedId: getTransferTableSelectedId,
  getTransferTableAllSelectedId: getTransferTableAllSelectedId,
  getTransferTableMultiSelectedId: getTransferTableMultiSelectedId,
  getTransformFormCompleteStatus: getTransformFormCompleteStatus,
  setTransferListValueByIndex: setTransferListValueByIndex,
  setMultiSelectedValue: setMultiSelectedValue,
  setSavedTransferTableDataPk: setSavedTransferTableDataPk,
  clearAllSelectedData: methods_clearAllSelectedData,
  hasCache: hasCache,
  deleteCache: deleteCache,
  setRowDataByIndex: setRowDataByIndex,
  savePk: savePk,
  getPkCache: getPkCache,
  getTransferListValue: getTransferListValue,
  updateTransferListValue: updateTransferListValue,
  updateTransferList: updateTransferList,
  getTransferTableCache: getTransferTableCache,
  deleteItems: deleteItems,
  updateTransferTableValue: updateTransferTableValue,
  updateTransferListValueByIndex: updateTransferListValueByIndex,
  updateTransformFormStatus: updateTransformFormStatus,
  updateActiveGrandsonData: updateActiveGrandsonData,
  getTheTransferListDataSavedLastTime: getTheTransferListDataSavedLastTime,
  setTheCheckRows: setTheCheckRows,
  updateHeadRowByKey: updateHeadRowByKey,
  cancelRowsChecked: cancelRowsChecked,
  refreshTransferTable: refreshTransferTable,
  whenTransferTableUnmount: whenTransferTableUnmount,
  getCurrentTransferTableStatus: getCurrentTransferTableStatus,
  setTransferTableSelectedId: setTransferTableSelectedId,
  updateDataByRefresh: updateDataByRefresh
});

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

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

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

/******/ });
});