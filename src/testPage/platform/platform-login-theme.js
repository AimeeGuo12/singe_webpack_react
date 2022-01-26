(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("@platform/table-core/index"), require("@platform/components/index"), require("@platform/form/index"), require("@platform/card-table/index"), require("@platform/simple-table/index"), require("@platform/edit-table/index"), require("@platform/transfer-table/index"), require("@platform/tree-table/index"), require("babel-polyfill"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@platform/api/index", "@platform/base/index", "@platform/table-core/index", "@platform/components/index", "@platform/form/index", "@platform/card-table/index", "@platform/simple-table/index", "@platform/edit-table/index", "@platform/transfer-table/index", "@platform/tree-table/index", "babel-polyfill"], factory);
	else if(typeof exports === 'object')
		exports["@platform/platform-login"] = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("@platform/table-core/index"), require("@platform/components/index"), require("@platform/form/index"), require("@platform/card-table/index"), require("@platform/simple-table/index"), require("@platform/edit-table/index"), require("@platform/transfer-table/index"), require("@platform/tree-table/index"), require("babel-polyfill"));
	else
		root["@platform/platform-login"] = factory(root["React"], root["@platform/api/index"], root["@platform/base/index"], root["@platform/table-core/index"], root["@platform/components/index"], root["@platform/form/index"], root["@platform/card-table/index"], root["@platform/simple-table/index"], root["@platform/edit-table/index"], root["@platform/transfer-table/index"], root["@platform/tree-table/index"], root["babel-polyfill"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__24__, __WEBPACK_EXTERNAL_MODULE__48__, __WEBPACK_EXTERNAL_MODULE__56__, __WEBPACK_EXTERNAL_MODULE__57__, __WEBPACK_EXTERNAL_MODULE__129__, __WEBPACK_EXTERNAL_MODULE__130__, __WEBPACK_EXTERNAL_MODULE__376__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 375);
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__(95);

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = util.assign(
    {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        }
    },
    Format
);


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// NAMESPACE OBJECT: ./src/platform/components/Form/compatible.js
var compatible_namespaceObject = {};
__webpack_require__.r(compatible_namespaceObject);
__webpack_require__.d(compatible_namespaceObject, "createForm", function() { return createForm; });
__webpack_require__.d(compatible_namespaceObject, "getAllFormValue", function() { return getAllFormValue; });
__webpack_require__.d(compatible_namespaceObject, "setAllFormValue", function() { return setAllFormValue; });
__webpack_require__.d(compatible_namespaceObject, "getFormItemsValue", function() { return getFormItemsValue; });
__webpack_require__.d(compatible_namespaceObject, "setFormItemsValue", function() { return setFormItemsValue; });
__webpack_require__.d(compatible_namespaceObject, "getFormItemsDisabled", function() { return getFormItemsDisabled; });
__webpack_require__.d(compatible_namespaceObject, "setFormItemsDisabled", function() { return setFormItemsDisabled; });
__webpack_require__.d(compatible_namespaceObject, "setFormItemsRequired", function() { return setFormItemsRequired; });
__webpack_require__.d(compatible_namespaceObject, "getFormItemsRequired", function() { return getFormItemsRequired; });
__webpack_require__.d(compatible_namespaceObject, "getFormItemsVisible", function() { return getFormItemsVisible; });
__webpack_require__.d(compatible_namespaceObject, "setFormItemsVisible", function() { return setFormItemsVisible; });
__webpack_require__.d(compatible_namespaceObject, "setFormItemsVerify", function() { return setFormItemsVerify; });
__webpack_require__.d(compatible_namespaceObject, "getFormItemsVerify", function() { return getFormItemsVerify; });
__webpack_require__.d(compatible_namespaceObject, "EmptyAllFormValue", function() { return EmptyAllFormValue; });
__webpack_require__.d(compatible_namespaceObject, "isCheckNow", function() { return isCheckNow; });
__webpack_require__.d(compatible_namespaceObject, "openArea", function() { return openArea; });
__webpack_require__.d(compatible_namespaceObject, "closeArea", function() { return closeArea; });
__webpack_require__.d(compatible_namespaceObject, "setAreaVisible", function() { return setAreaVisible; });
__webpack_require__.d(compatible_namespaceObject, "getAreaVisible", function() { return getAreaVisible; });
__webpack_require__.d(compatible_namespaceObject, "setActiveTab", function() { return setActiveTab; });
__webpack_require__.d(compatible_namespaceObject, "getActiveTab", function() { return getActiveTab; });
__webpack_require__.d(compatible_namespaceObject, "cancel", function() { return cancel; });
__webpack_require__.d(compatible_namespaceObject, "setFormStatus", function() { return setFormStatus; });
__webpack_require__.d(compatible_namespaceObject, "getFormStatus", function() { return getFormStatus; });
__webpack_require__.d(compatible_namespaceObject, "checkRequired", function() { return checkRequired; });
__webpack_require__.d(compatible_namespaceObject, "resetItemWidth", function() { return resetItemWidth; });
__webpack_require__.d(compatible_namespaceObject, "setFormItemAutoFocus", function() { return setFormItemAutoFocus; });
__webpack_require__.d(compatible_namespaceObject, "updateForm", function() { return updateForm; });
__webpack_require__.d(compatible_namespaceObject, "getAllFormValueSimple", function() { return getAllFormValueSimple; });
__webpack_require__.d(compatible_namespaceObject, "setItemsVisible", function() { return setItemsVisible; });
__webpack_require__.d(compatible_namespaceObject, "getResidtxtLang", function() { return getResidtxtLang; });
__webpack_require__.d(compatible_namespaceObject, "setFormPopConfirmSwitchTips", function() { return setFormPopConfirmSwitchTips; });
__webpack_require__.d(compatible_namespaceObject, "setFormItemFocus", function() { return setFormItemFocus; });
__webpack_require__.d(compatible_namespaceObject, "focusFormItem", function() { return focusFormItem; });
__webpack_require__.d(compatible_namespaceObject, "focusFormNextItem", function() { return focusFormNextItem; });
__webpack_require__.d(compatible_namespaceObject, "updateDataByRefresh", function() { return updateDataByRefresh; });
__webpack_require__.d(compatible_namespaceObject, "clearFormVerify", function() { return clearFormVerify; });

// NAMESPACE OBJECT: ./src/platform/components/Table/appTable/CardTable/compatible.js
var CardTable_compatible_namespaceObject = {};
__webpack_require__.r(CardTable_compatible_namespaceObject);
__webpack_require__.d(CardTable_compatible_namespaceObject, "createCardTable", function() { return createCardTable; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setLayout", function() { return setLayout; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setTabsTableData", function() { return setTabsTableData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "resetTabsTableData", function() { return resetTabsTableData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getTabsTableData", function() { return getTabsTableData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setTabsTableStatus", function() { return setTabsTableStatus; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setTabsTableShow", function() { return setTabsTableShow; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setTabsTableActive", function() { return setTabsTableActive; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getTabsTableActive", function() { return getTabsTableActive; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "checkAllTabsRequire", function() { return checkAllTabsRequire; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "saveChangedRowsOldValue", function() { return saveChangedRowsOldValue; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getChangedRowsOldValue", function() { return getChangedRowsOldValue; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "delChangedRowsOldValue", function() { return delChangedRowsOldValue; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setTableData", function() { return setTableData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getStatus", function() { return getStatus; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "clearRequiredStatus", function() { return clearRequiredStatus; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setStatus", function() { return setStatus; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getAllRows", function() { return getAllRows; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getVisibleRows", function() { return getVisibleRows; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getChangedRows", function() { return getChangedRows; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getNumberOfRows", function() { return getNumberOfRows; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getAllData", function() { return getAllData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "toggleRowView", function() { return toggleRowView; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "addRow", function() { return addRow; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "delRowByRowId", function() { return delRowByRowId; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "delRowsByIndex", function() { return delRowsByIndex; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setValByKeyAndIndex", function() { return setValByKeyAndIndex; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setValByKeyAndRowId", function() { return setValByKeyAndRowId; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "resetTableData", function() { return resetTableData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "updateTableData", function() { return updateTableData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getValByKeyAndIndex", function() { return getValByKeyAndIndex; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getValByKeyAndRowId", function() { return getValByKeyAndRowId; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setEditableByRowId", function() { return setEditableByRowId; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setEditableByIndex", function() { return setEditableByIndex; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "pasteRow", function() { return pasteRow; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getCheckedRows", function() { return getCheckedRows; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "selectAllRows", function() { return selectAllRows; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "selectRowsByIndex", function() { return selectRowsByIndex; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "unSelectRowsByIndex", function() { return unSelectRowsByIndex; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "reverseSelected", function() { return reverseSelected; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "filterEmptyRows", function() { return filterEmptyRows; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "filterEmptyGrandRows", function() { return filterEmptyGrandRows; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getAllRowsRemoveKeys", function() { return getAllRowsRemoveKeys; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "closeExpandedRow", function() { return closeExpandedRow; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getCacheData", function() { return getCacheData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "focusRowByIndex", function() { return focusRowByIndex; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getMixinMetaData", function() { return getMixinMetaData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getFilterRows", function() { return getFilterRows; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setFiltrateTableData", function() { return setFiltrateTableData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "batchChangeTableData", function() { return batchChangeTableData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "updateDataByIndexs", function() { return updateDataByIndexs; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "insertDataByIndexs", function() { return insertDataByIndexs; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setRowStatusByIndexs", function() { return setRowStatusByIndexs; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "insertRowsAfterIndex", function() { return insertRowsAfterIndex; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setTdEditByIndex", function() { return setTdEditByIndex; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setValByKeysAndIndex", function() { return setValByKeysAndIndex; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setAllCheckboxAble", function() { return setAllCheckboxAble; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setMulTablesData", function() { return setMulTablesData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getRowsByIndexs", function() { return getRowsByIndexs; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getAllTableRequire", function() { return getAllTableRequire; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getTableItemData", function() { return getTableItemData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setColScale", function() { return setColScale; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "checkVisible", function() { return checkVisible; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getChildTableRequired", function() { return getChildTableRequired; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "checkChildTableRequired", function() { return checkChildTableRequired; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "checkTableRequired", function() { return checkTableRequired; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setAllKeysVal", function() { return setAllKeysVal; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setClickRowIndex", function() { return setClickRowIndex; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getClickRowIndex", function() { return getClickRowIndex; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setSaveData", function() { return setSaveData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getDataByIndex", function() { return getDataByIndex; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "updateDataByRowId", function() { return updateDataByRowId; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getRowStatus", function() { return getRowStatus; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getCurrentIndex", function() { return getCurrentIndex; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "updateDiffDataByRowId", function() { return updateDiffDataByRowId; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "moveRow", function() { return moveRow; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setRowEditByIndex", function() { return setRowEditByIndex; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setModelEdit", function() { return setModelEdit; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setColVisibleByKey", function() { return setColVisibleByKey; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setColsValue", function() { return setColsValue; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "openModel", function() { return openModel; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "closeModel", function() { return closeModel; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "hideColByKey", function() { return hideColByKey; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setColumn", function() { return setColumn; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "showColByKey", function() { return showColByKey; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getColValue", function() { return getColValue; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setColValue", function() { return setColValue; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "openListView", function() { return openListView; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "openMaxTable", function() { return openMaxTable; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "isMaxView", function() { return isMaxView; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getMetaValByKey", function() { return getMetaValByKey; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setColEditableByKey", function() { return setColEditableByKey; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "updateTableHeight", function() { return updateTableHeight; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getModalDataByIndex", function() { return getModalDataByIndex; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "showEditAreaKey", function() { return showEditAreaKey; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "toggleCardTable", function() { return toggleCardTable; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setQueryCondition", function() { return setQueryCondition; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "setGrandTableData", function() { return setGrandTableData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getAllGrandData", function() { return getAllGrandData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getViewGrandData", function() { return getViewGrandData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "delCacheGrandData", function() { return delCacheGrandData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getRowIdFromPkcode", function() { return getRowIdFromPkcode; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "saveFilterCustomColData", function() { return saveFilterCustomColData; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "getSideParentCurrentIndex", function() { return getSideParentCurrentIndex; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "updateTable", function() { return updateTable; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "updateAfterBatchChange", function() { return updateAfterBatchChange; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "updateAndAddRows", function() { return updateAndAddRows; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "updateDataByRefresh", function() { return compatible_updateDataByRefresh; });
__webpack_require__.d(CardTable_compatible_namespaceObject, "refresh", function() { return refresh; });

// NAMESPACE OBJECT: ./src/platform/components/Table/appTable/SimpleTable/compatible.js
var SimpleTable_compatible_namespaceObject = {};
__webpack_require__.r(SimpleTable_compatible_namespaceObject);
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "createSimpleTable", function() { return createSimpleTable; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "setAllTableData", function() { return setAllTableData; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "getTablePageInfo", function() { return getTablePageInfo; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "openModel", function() { return compatible_openModel; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "closeModal", function() { return closeModal; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "setTableRender", function() { return setTableRender; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "setColScale", function() { return compatible_setColScale; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "checkVisible", function() { return compatible_checkVisible; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "getAllTableData", function() { return getAllTableData; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "setTableValueByKeyAndRecord", function() { return setTableValueByKeyAndRecord; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "hideColByKey", function() { return compatible_hideColByKey; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "showColByKey", function() { return compatible_showColByKey; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "getCheckedRows", function() { return compatible_getCheckedRows; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "selectAllRows", function() { return compatible_selectAllRows; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "reverseSelected", function() { return compatible_reverseSelected; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "deleteTableRowsByIndex", function() { return deleteTableRowsByIndex; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "deleteTableRowsByRowId", function() { return deleteTableRowsByRowId; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "addRow", function() { return compatible_addRow; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "setTableValueBykey", function() { return setTableValueBykey; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "setTableValueDisabled", function() { return setTableValueDisabled; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "setTableValueRequired", function() { return setTableValueRequired; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "focusRowByIndex", function() { return compatible_focusRowByIndex; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "updateDataByIndexs", function() { return compatible_updateDataByIndexs; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "setValByKeyAndRowId", function() { return compatible_setValByKeyAndRowId; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "selectTableRows", function() { return selectTableRows; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "getPks", function() { return getPks; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "hasCacheData", function() { return hasCacheData; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "deleteCacheId", function() { return deleteCacheId; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "addCacheId", function() { return addCacheId; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "updateTableData", function() { return compatible_updateTableData; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "setClickRowIndex", function() { return compatible_setClickRowIndex; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "getClickRowIndex", function() { return compatible_getClickRowIndex; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "setValByKeyAndIndex", function() { return compatible_setValByKeyAndIndex; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "updateDiffDataByIndex", function() { return updateDiffDataByIndex; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "updateTableHeight", function() { return compatible_updateTableHeight; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "beforeAreaChangeHeight", function() { return beforeAreaChangeHeight; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "getSortParam", function() { return getSortParam; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "updateDataByRefresh", function() { return SimpleTable_compatible_updateDataByRefresh; });
__webpack_require__.d(SimpleTable_compatible_namespaceObject, "saveFilterCustomColData", function() { return compatible_saveFilterCustomColData; });

// NAMESPACE OBJECT: ./src/platform/components/Table/appTable/EditTable/compatible.js
var EditTable_compatible_namespaceObject = {};
__webpack_require__.r(EditTable_compatible_namespaceObject);
__webpack_require__.d(EditTable_compatible_namespaceObject, "saveChangedRowsOldValue", function() { return compatible_saveChangedRowsOldValue; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getChangedRowsOldValue", function() { return compatible_getChangedRowsOldValue; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "delChangedRowsOldValue", function() { return compatible_delChangedRowsOldValue; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "createEditTable", function() { return createEditTable; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "delRow", function() { return delRow; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "deleteTableRowsByIndex", function() { return compatible_deleteTableRowsByIndex; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "deleteTableRowsByRowId", function() { return compatible_deleteTableRowsByRowId; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getAllRows", function() { return compatible_getAllRows; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getVisibleRows", function() { return compatible_getVisibleRows; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getNumberOfRows", function() { return compatible_getNumberOfRows; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getAllData", function() { return compatible_getAllData; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getViewData", function() { return getViewData; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getAllRowsRemoveKeys", function() { return compatible_getAllRowsRemoveKeys; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "addRow", function() { return EditTable_compatible_addRow; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "filterEmptyRows", function() { return compatible_filterEmptyRows; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getCurrentRecord", function() { return getCurrentRecord; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "focusRowByIndex", function() { return EditTable_compatible_focusRowByIndex; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setRowByIndex", function() { return setRowByIndex; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setEditableRowByRowId", function() { return setEditableRowByRowId; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setEditableRowByIndex", function() { return setEditableRowByIndex; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setEditableRowKeyByRowId", function() { return setEditableRowKeyByRowId; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getFilterRows", function() { return compatible_getFilterRows; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setFiltrateTableData", function() { return compatible_setFiltrateTableData; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "moveRow", function() { return compatible_moveRow; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setRowStatus", function() { return setRowStatus; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getRowStatus", function() { return compatible_getRowStatus; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getClickRowIndex", function() { return EditTable_compatible_getClickRowIndex; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setClickRowIndex", function() { return EditTable_compatible_setClickRowIndex; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setRowPosition", function() { return setRowPosition; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "insertRowsAfterIndex", function() { return compatible_insertRowsAfterIndex; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "insertDataByIndexs", function() { return compatible_insertDataByIndexs; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "updateRows", function() { return updateRows; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "updateRowsProps", function() { return updateRowsProps; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "resetTableCaches", function() { return resetTableCaches; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "updateDataByIndexs", function() { return EditTable_compatible_updateDataByIndexs; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getColValue", function() { return compatible_getColValue; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setColValue", function() { return compatible_setColValue; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setColScale", function() { return EditTable_compatible_setColScale; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "hideColByKey", function() { return EditTable_compatible_hideColByKey; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "showColByKey", function() { return EditTable_compatible_showColByKey; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setValByKeyAndIndex", function() { return EditTable_compatible_setValByKeyAndIndex; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setValByKeyAndRowId", function() { return EditTable_compatible_setValByKeyAndRowId; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getValByKeyAndIndex", function() { return compatible_getValByKeyAndIndex; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getValByKeyAndRowId", function() { return compatible_getValByKeyAndRowId; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setEditableByKey", function() { return setEditableByKey; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setEditableRowKeyByIndex", function() { return setEditableRowKeyByIndex; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "checkVisible", function() { return EditTable_compatible_checkVisible; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setTableData", function() { return compatible_setTableData; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "cancelEdit", function() { return cancelEdit; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "clearRequiredStatus", function() { return compatible_clearRequiredStatus; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setStatus", function() { return compatible_setStatus; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getStatus", function() { return compatible_getStatus; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getChangedRows", function() { return compatible_getChangedRows; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "pasteRow", function() { return compatible_pasteRow; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getCacheDataById", function() { return getCacheDataById; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getCacheForEditModal", function() { return getCacheForEditModal; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setColEditableByKey", function() { return compatible_setColEditableByKey; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "updateTableData", function() { return EditTable_compatible_updateTableData; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "checkRequired", function() { return compatible_checkRequired; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "updateDifference", function() { return updateDifference; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "updateTable", function() { return compatible_updateTable; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setEditableKeyEdit", function() { return setEditableKeyEdit; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "updateTableHeight", function() { return EditTable_compatible_updateTableHeight; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "updateDataByRowId", function() { return compatible_updateDataByRowId; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getCheckedRows", function() { return EditTable_compatible_getCheckedRows; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "selectAllRows", function() { return EditTable_compatible_selectAllRows; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "reverseSelected", function() { return EditTable_compatible_reverseSelected; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "openModel", function() { return EditTable_compatible_openModel; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "closeModel", function() { return compatible_closeModel; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "batchChangeTableData", function() { return compatible_batchChangeTableData; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setCheckboxDisabled", function() { return setCheckboxDisabled; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setAllCheckboxAble", function() { return compatible_setAllCheckboxAble; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "selectTableRows", function() { return compatible_selectTableRows; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getTableItemData", function() { return compatible_getTableItemData; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getTablePageInfo", function() { return compatible_getTablePageInfo; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "setCheckboxFix", function() { return setCheckboxFix; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "getSortParam", function() { return compatible_getSortParam; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "updateDataByRefresh", function() { return EditTable_compatible_updateDataByRefresh; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "saveFilterCustomColData", function() { return EditTable_compatible_saveFilterCustomColData; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "updateAfterBatchChange", function() { return compatible_updateAfterBatchChange; });
__webpack_require__.d(EditTable_compatible_namespaceObject, "updateAndAddRows", function() { return compatible_updateAndAddRows; });

// EXTERNAL MODULE: external {"root":"React","var":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(0);
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_);

// EXTERNAL MODULE: external "@platform/form/index"
var index_ = __webpack_require__(24);
var index_default = /*#__PURE__*/__webpack_require__.n(index_);

// EXTERNAL MODULE: external "@platform/api/index"
var api_index_ = __webpack_require__(1);

// EXTERNAL MODULE: ./src/platform/FastExtend/utils.js
var utils = __webpack_require__(13);

// CONCATENATED MODULE: ./src/platform/components/Form/compatible.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Author: your name
 * @Date: 2020-07-16 11:10:16
 * @LastEditTime: 2020-11-17 09:56:49
 * @LastEditors: bbq
 * @Description: In User Settings Edit
 * @FilePath: /Platform_Front/src/platform/components/Form/compatible.js
 */




/**
 * @description: 获取当前form的Store 
 * @param {type} 
 * @return: 
 */

function getStore(moduleId) {
  if (this.formDataSource && this.formDataSource[moduleId]) {
    return this.formDataSource[moduleId];
  } else {
    // console.warn('不存在formDataSource');
    // return null
    // 暂时通过error 提醒业务组、 稳定后可去掉
    throw Error("\u6B63\u5728\u8C03\u7528formID\u4E3A".concat(moduleId, "\u7684\u8868\u5355\u7684API, \u4F46\u6B64\u8868\u5355\u8FD8\u672A\u901A\u8FC7use.form\u6CE8\u518C,\u8BF7\u5148\u6CE8\u518C\u6B64ID\uFF0C\u624D\u80FD\u6B63\u5E38\u8C03\u7528API"));
  }
}
/**
 * @description: 获取page、兼容处理编辑前编辑后等回调函数的第一个参数
 * @param {type} 
 * @return: 
 */


function getContext() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var newConfig = _objectSpread({}, config);

  newConfig.onBeforeEvent = function () {
    for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    var fxParams = {
      areaId: rest[0],
      itemId: rest[1],
      methods: context.output,
      form: rest[3],
      item: rest[2]
    }; // console.log('beforeAndAfter before', fxParams);

    return Object(utils["a" /* beforeAndAfter */])(context, {
      moduleId: rest[0],
      attrcode: rest[1],
      fxType: 'onFormBeforeEvent',
      fxParams: fxParams
    }, function () {
      if (typeof config.onBeforeEvent === 'function') {
        var _config$onBeforeEvent;

        return (_config$onBeforeEvent = config.onBeforeEvent).call.apply(_config$onBeforeEvent, [context, _objectSpread(_objectSpread({}, context.props), context.output)].concat(rest));
      }

      return true;
    });
  };

  newConfig.onAfterEvent = function (rest) {
    var areaId = rest.areaId,
        attrcode = rest.attrcode,
        curMetaItem = rest.curMetaItem,
        value = rest.value,
        oldValue = rest.oldValue,
        componentValue = rest.componentValue,
        allValue = rest.allValue,
        singleFormCode = rest.singleFormCode; // 暂时处理编辑关联项

    if (curMetaItem.editAfterFlag && Object(api_index_["isFunction"])(context.handleRelationItems)) {
      context.handleRelationItems({
        type: 'form',
        areaCode: areaId,
        formMetaCode: singleFormCode,
        key: attrcode,
        value: value,
        callback: function callback() {
          var fxParams = {
            areaId: areaId,
            itemId: attrcode,
            methods: context.output,
            form: allValue,
            finalValue: value,
            oldValue: oldValue,
            val: componentValue
          };
          Object(utils["a" /* beforeAndAfter */])(context, {
            moduleId: areaId,
            attrcode: attrcode,
            fxType: 'onFormAfterEvent',
            fxParams: fxParams
          }, function () {
            typeof config.onAfterEvent === 'function' && config.onAfterEvent.call(context, _objectSpread(_objectSpread({}, context.props), context.output), areaId, attrcode, value, oldValue, componentValue, allValue);
          });
        }
      });
    } else {
      var fxParams = {
        areaId: areaId,
        itemId: attrcode,
        methods: context.output,
        form: allValue,
        finalValue: value,
        oldValue: oldValue,
        val: componentValue
      }; // console.log('beforeAndAfter after', fxParams);

      Object(utils["a" /* beforeAndAfter */])(context, {
        moduleId: areaId,
        attrcode: attrcode,
        fxType: 'onFormAfterEvent',
        fxParams: fxParams
      }, function () {
        typeof config.onAfterEvent === 'function' && config.onAfterEvent.call(context, _objectSpread(_objectSpread({}, context.props), context.output), areaId, attrcode, value, oldValue, componentValue, allValue);
      });
    }
  };

  return newConfig;
}
/**
 * @description: 创建表单
 * @param {type} moduleId 主表ID
 * @param {type} config Object 表单配置项
 * @return: 
 */


function createForm(moduleId) {
  var _this = this;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var currentStore = getStore.call(this, moduleId);
  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_default.a, {
    key: moduleId,
    store: currentStore,
    name: moduleId,
    formComponentUpdate: function formComponentUpdate(form) {
      // console.log('getCheckedExtendMethod', form);
      Object(utils["c" /* getCheckedExtendMethod */])(_this, 'updateForm')({
        form: form,
        moduleId: moduleId,
        page: _this,
        useOn: 'create'
      });
    },
    config: getContext(config, this) // 快捷键 解耦
    ,
    getHotKeyConfig: function getHotKeyConfig() {
      return {
        autoFocusDeferred: _this.autoFocusDeferred,
        meta: _this.state.meta,
        withHotKeyChange: _this.withHotKeyChange,
        orderOfHotKey: _this.orderOfHotKey,
        onLastFormEnter: config.onLastFormEnter
      };
    }
  });
}
/**
 * @description: 设置表单全部数据
 * @param {Object, Boolean, Boolean, Array, Function} 
 * @return: 
 */


function setAllFormValue(formDataObj) {
  var copyFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var emptyOldVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var setOldValueExceptKey = arguments.length > 3 ? arguments[3] : undefined;
  var callback = arguments.length > 4 ? arguments[4] : undefined;

  for (var _i = 0, _Object$keys = Object.keys(formDataObj); _i < _Object$keys.length; _i++) {
    var moduleId = _Object$keys[_i];
    var newData = formDataObj[moduleId].rows[0].values,
        currentStore = getStore.call(this, moduleId);
    currentStore.setAllFormValue(newData, copyFlag, emptyOldVal, setOldValueExceptKey, callback);
  }
}
/**
 * @description: 获取表单所有数据
 * @param {String/Array}   
 * @return: Object
 */


function getAllFormValue(moduleIds) {
  if (Array.isArray(moduleIds)) {
    var allFormData = {};

    var _iterator = _createForOfIteratorHelper(moduleIds),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var moduleId = _step.value;
        allFormData[moduleId] = getSingleData.call(this, moduleId);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return allFormData;
  } else {
    return getSingleData.call(this, moduleIds);
  }
}
/**
 * @description: 获取单个表数据
 * @param {type} 
 * @return: 
 */


function getSingleData(moduleId) {
  var isSimple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var currentStore = getStore.call(this, moduleId);
  var formData = isSimple ? setReferValueSimple(moduleId, currentStore.getAllFormValue()) : setReferValue(moduleId, currentStore.getAllFormValue());
  var data = {
    values: formData
  };
  var status = currentStore.getStatus();

  if (status == 'add') {
    data.status = '2';
  } else if (status == 'edit') {
    data.status = '1';
  }

  return {
    areaType: 'form',
    rows: [data]
  };
}
/**
 * @description: 获取表单中某个字段的值
 * @param {String, Array} 
 * @return: 
 */


function getFormItemsValue(moduleId, data) {
  var currentStore = getStore.call(this, moduleId);

  if (currentStore) {
    if (Array.isArray(data)) {
      var newData = [];
      newData = data.map(function (item) {
        var result = null;
        result = currentStore.getItemValue(item);
        return result;
      });
      return newData;
    } else {
      var _newData = currentStore.getItemValue(data, true);

      return _newData;
    }
  } else {
    if (Array.isArray(data)) {
      var _newData2 = [];
      _newData2 = data.map(function () {
        return {
          display: null,
          value: null
        };
      });
      return _newData2;
    } else {
      return {
        display: null,
        value: null
      };
    }
  }
}
/**
 * @description: 设置表单中某个字段的值
 * @param {String, Object, Boolean} 
 * @return: 
 */


function setFormItemsValue(moduleId) {
  var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var cancel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var currentStore = getStore.call(this, moduleId);
  var hasNumberField = false;

  for (var _i2 = 0, _Object$keys2 = Object.keys(values); _i2 < _Object$keys2.length; _i2++) {
    var key = _Object$keys2[_i2];
    var itemtype = currentStore.getItemAttribute(key, 'itemtype');

    if (itemtype === 'number') {
      hasNumberField = true;
    }

    currentStore.setItemValue(key, _objectSpread({}, values[key]), {
      cancel: cancel
    });
  } // number的value值里有scale，属于props，需要整表更新；


  hasNumberField && currentStore.forceUpdate();
}
/**
 * @description: 获取表单某个或某些字段的编辑性
 * @param {String, String/Array} 
 * @return: 
 */


function getFormItemsDisabled(moduleId, keys) {
  var currentStore = getStore.call(this, moduleId);

  if (Array.isArray(keys)) {
    var res = [];
    res = keys.map(function (item) {
      return !!currentStore.getItemAttribute(item, 'disabled');
    });
    return res;
  } else {
    return !!currentStore.getItemAttribute(keys, 'disabled');
  }
}
/**
 * @description: 设置表单编辑性
 * @param {String, Object} 
 * @return: 
 */


function setFormItemsDisabled(moduleId, values) {
  var currentStore = getStore.call(this, moduleId);
  currentStore.setItemAttribute('disabled', values);
}
/**
 * @description: 设置表单某些字段的必输性
 * @param {String,Obejct} 
 * @return: 
 */


function setFormItemsRequired(moduleId, values) {
  var currentStore = getStore.call(this, moduleId);
  currentStore.setItemAttribute('required', values);
}
/**
 * @description: 获取表单某些字段的必输性
 * @param {String,String} 
 * @return: 
 */


function getFormItemsRequired(moduleId, keys) {
  var currentStore = getStore.call(this, moduleId);

  if (Array.isArray(keys)) {
    var res = [];
    res = keys.map(function (item) {
      return !!currentStore.getItemAttribute(item, 'required');
    });
    return res;
  } else {
    return !!currentStore.getItemAttribute(keys, 'required');
  }
}
/**
 * @description: 设置表单某些字段的显隐性
 * @param {type} 
 * @return: 
 */


function getFormItemsVisible(moduleId, keys) {
  var currentStore = getStore.call(this, moduleId);

  if (Array.isArray(keys)) {
    var res = [];
    res = keys.map(function (item) {
      return !!currentStore.getItemAttribute(item, 'visible');
    });
    return res;
  } else {
    return !!currentStore.getItemAttribute(keys, 'visible');
  }
}
/**
 * @description: 设置表单某些字段的显隐性
 * @param {type} 
 * @return: 
 */


function setFormItemsVisible(moduleId, values) {
  var currentStore = getStore.call(this, moduleId);
  currentStore.setItemAttribute('visible', values);
}
/**
 * @description: 设置表单某些字段的校验规则
 * @param {type} 
 * @return: 
 */


function setFormItemsVerify(moduleId, keys) {
  // TODO: 2005版没对这个方法做实现
  var currentStore = getStore.call(this, moduleId);

  if (Array.isArray(keys)) {
    var res = [];
    res = keys.map(function (item) {
      return !!currentStore.getItemAttribute(item, 'verify');
    });
    return res;
  } else {
    return !!currentStore.getItemAttribute(keys, 'verify');
  }
}
/**
 * @description: 设置表单某些字段的校验规则
 * @param {type} 
 * @return: 
 */


function getFormItemsVerify(moduleId, values) {
  // TODO: 这里逻辑有问题，2005版没对这个方法做实现
  var currentStore = getStore.call(this, moduleId);
  currentStore.setItemAttribute('verify', values);
}
/**
 * @description: 清空表单所有数据
 * @param {String, Array, Boolean} 
 * @return: 
 */


function EmptyAllFormValue(moduleId, exceptArr) {
  var cancel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var currentStore = getStore.call(this, moduleId);
  currentStore.emptyAllFormValue(exceptArr, cancel);
}
/** 
 * @description: 表单检验(必填,正则校验)
 * @param {String, String} 
 * @return: Boolean 
 */


function isCheckNow(moduleId) {
  var _this2 = this;

  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'danger';
  var requiredItems = [],
      regItems = [],
      maxItems = [],
      flag = true,
      toastStore;

  if (Array.isArray(moduleId)) {
    moduleId.forEach(function (item, index) {
      var currentStore = getStore.call(_this2, item);
      if (index === 0) toastStore = currentStore;
      var res = currentStore.isCheckNow();
      requiredItems = requiredItems.concat(res.requiredItems);
      regItems = regItems.concat(res.regItems);
      maxItems = maxItems.concat(res.maxItems);
    });
  } else {
    var currentStore = getStore.call(this, moduleId);
    toastStore = currentStore;

    var _currentStore$isCheck = currentStore.isCheckNow();

    requiredItems = _currentStore$isCheck.requiredItems;
    regItems = _currentStore$isCheck.regItems;
    maxItems = _currentStore$isCheck.maxItems;
  }

  if (requiredItems.length || regItems.length || maxItems.length) {
    flag = false;
    var json = toastStore.getInnerHooks().getJson();
    var toastContent = '';

    if (requiredItems.length) {
      toastContent += "".concat(json['page-form-0001'], "\uFF1A").concat(requiredItems.join(', '), "\n");
    }

    if (regItems.length) {
      toastContent += "".concat(json['page-form-0002'], "\uFF1A").concat(regItems.join(', '), "\n");
    }

    if (maxItems.length) {
      toastContent += "".concat(json['page-form-0010'], "\uFF1A").concat(maxItems.join(', '));
    }

    Object(api_index_["toast"])({
      mark: 'form_isCheckNow',
      color: type,
      title: json['page-form-0009'],
      content: toastContent
    });
  }

  return flag;
}
/**
 * @description: 展开表单某个区域
 * @param {String} 主表ID  和  分组ID
 * @return: 
 */


function openArea(moduleId, groupId) {
  var currentStore = getStore.call(this, moduleId);
  currentStore && currentStore.openArea(groupId);
}
/**
 * @description: 收起表单某个区域
 * @param {String}  主表ID  和  分组ID
 * @return: 
 */


function closeArea(moduleId, groupId) {
  var currentStore = getStore.call(this, moduleId);
  currentStore && currentStore.closeArea(groupId);
}

function setAreaVisible(moduleId, groupId, visible) {
  var currentStore = getStore.call(this, moduleId);
  currentStore && currentStore.setAreaVisible(groupId, visible);
}

function getAreaVisible(moduleId, groupId, visible) {
  var currentStore = getStore.call(this, moduleId);
  currentStore && currentStore.getAreaVisible(groupId, visible);
}

function setActiveTab(moduleId, activeTabCode) {
  var currentStore = getStore.call(this, moduleId);
  currentStore && currentStore.getInnerHooks().setFormTabs(activeTabCode);
}

function getActiveTab(moduleId) {
  var currentStore = getStore.call(this, moduleId);
  currentStore && currentStore.getInnerHooks().getFormTabs();
}
/**
 * @description: 表单取消方法
 * @param {String/Array} 
 * @return: 
 */


function cancel(moduleIds) {
  if (Array.isArray(moduleIds)) {
    var _iterator2 = _createForOfIteratorHelper(moduleIds),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var moduleId = _step2.value;
        var currentStore = getStore.call(this, moduleId);
        currentStore.cancel();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  } else {
    var _currentStore = getStore.call(this, moduleIds);

    _currentStore.cancel();
  }
}
/**
 * @description: 设置表单status
 * @param {String, String} 
 * @return: 
 */


function setFormStatus(moduleId, status) {
  var currentStore = getStore.call(this, moduleId);
  currentStore.setStatus(status);
}
/**
 * @description: 获取表单status
 * @param {String} 
 * @return: 
 */


function getFormStatus(moduleId) {
  var currentStore = getStore.call(this, moduleId);
  return currentStore.getStatus();
}
/**
 * @description: 检验是否必填 没看出来有什么用处
 * @param {String} 
 * @return: Boolean
 */


function checkRequired() {
  return false;
}
/**
 * @description: 表单从新计算
 * @param {String} 
 * @return: 
 */


function resetItemWidth(moduleId) {
  var currentStore = getStore.call(this, moduleId);
  currentStore.countFormWidth();
}
/**
 * @description: 自动获取焦点API
 * @param {String,String} 
 * @return: 
 */


function setFormItemAutoFocus(moduleId, attrcode) {
  var currentStore = getStore.call(this, moduleId);
  console.log(moduleId);
  currentStore.getInnerHooks().setStore('autoFocusFormItem', attrcode);
}
/**
 * @description: 更新表单
 * @param {String/Array} 
 * @return: 
 */


function updateForm(moduleId) {
  console.log(moduleId);
}
/**
 * @description: 获取表单所有简化版数据
 * @param {String, Array} 
 * @return: Array
 */


function getAllFormValueSimple(moduleIds) {
  if (Array.isArray(moduleIds)) {
    var allFormData = {};

    var _iterator3 = _createForOfIteratorHelper(moduleIds),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var moduleId = _step3.value;
        allFormData[moduleId] = getSingleData.call(this, moduleId, true);
        return allFormData;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  } else {
    return getSingleData.call(this, moduleIds, true);
  }
}
/**
 * @description: 简化表单每一项数据
 * @param {String, Object} 
 * @return: Object
 */


function setReferValueSimple(moduleId) {
  var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var newData = {}; // Object.keys(formData).forEach(pop => {
  //     if (!isEmpty(formData[pop].value)) {
  //         newData[pop] = { value: formData[pop].value };
  //     } else {
  //         newData[pop] = {};
  //     }
  // })

  for (var pop in formData) {
    if (!isEmpty(formData[pop].value)) {
      newData[pop] = {
        value: formData[pop].value
      };
    } else {
      newData[pop] = {};
    }
  }

  return newData;
}
/**
 * @description: 判断第一个参数是否为空，后面可以传其他【认为是空值】的参数
 * @param {} 
 * @return: Boolean
 */


function isEmpty(val) {
  for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    rest[_key2 - 1] = arguments[_key2];
  }

  if (val === null || val === undefined || rest.find(function (e) {
    return e == val;
  })) {
    return true;
  }

  return false;
}
/**
 * @description: 设置显隐性
 * @param {type} 
 * @return: 
 */


function setItemsVisible(moduleId, values) {
  setFormItemsVisible.call(this, moduleId, values);
}
/**
 * @description: attrcode 获取 当前登录语言的 attrcode 
* @param  moduleId String  form的id号 
 * @param  attrcode String 字段
 * @return: 
 */


function getResidtxtLang(moduleId, attrcode) {
  return attrcode;
}

function setFormPopConfirmSwitchTips(moduleId) {}
/**
 * @description: 设置表单某项获取焦点
 * @param {String,String} 
 * @return: 
 */


function setFormItemFocus(moduleId, attrcode) {
  if (moduleId && attrcode) {
    api_index_["PubSub"].publish('autoFocus', {
      data: attrcode
    });
  }
}

function focusFormItem(moduleId) {}

function focusFormNextItem(moduleId) {}

function updateDataByRefresh(moduleId, newData, pkname) {
  var currentStore = getStore.call(this, moduleId);

  if (currentStore && newData) {
    var FormData = getAllFormValue.call(this, moduleId);
    FormData = FormData.rows ? FormData.rows[0] : {};
    FormData = FormData.values ? FormData.values : {}; //let newData = refreshData[0];

    var pknameValue = FormData[pkname] ? FormData[pkname].value || FormData[pkname].display || FormData[pkname] : ''; // 根据pkname进行更新 

    if (pkname && pknameValue == newData[pkname]) {
      for (var pop in newData) {
        FormData[pop] = _objectSpread(_objectSpread({}, FormData[pop]), {}, {
          value: newData[pop]
        });
      }

      currentStore.setAllFormValue(FormData);
    }

    console.log('update form data by pkname:', pkname);
  }
}

function clearFormVerify(moduleId) {}
/**
 * @description: 设置参照值
 * @param {String, Object} 
 * @return: 
 */


function setReferValue(moduleId, formData) {
  var newResData = {}; //新加--提高效率

  for (var pop in formData) {
    var result = null;

    if (formData[pop]) {
      if (Object.prototype.toString.call(formData[pop].value).slice(8, -1) === 'String') {
        formData[pop].value = formData[pop].value.trim();
      }

      result = {
        display: formData[pop].display,
        value: formData[pop].value
      };

      if (formData[pop].hasOwnProperty('scale')) {
        result.scale = formData[pop].scale;
      }
    } //formData[pop] = result;


    newResData[pop] = result; //新加--提高效率
  }

  return newResData;
}

function compatible_reset(moduleId) {
  var currentStore = getStore.call(this, moduleId);
  currentStore.reset('visible');
}


// CONCATENATED MODULE: ./src/platform/components/Form/output.js
function output_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function output_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { output_ownKeys(Object(source), true).forEach(function (key) { output_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { output_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function output_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Author: wanglongx
 * @Date: 2020-07-16 11:07:43
 * @LastEditTime: 2020-07-16 20:17:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Platform_Front/src/platform/components/Form/output.js
 */


/**
 * @param {string} mainCode 
 * @param {object} config 
 */

function formCompatible() {
  this.register("form");
  return output_objectSpread({
    store: index_default.a.useForm
  }, apiBindPage.call(this, compatible_namespaceObject));
}

function apiBindPage(formAPI) {
  var res = {};

  for (var _i = 0, _Object$keys = Object.keys(formAPI); _i < _Object$keys.length; _i++) {
    var pop = _Object$keys[_i];
    res[pop] = formAPI[pop].bind(this);
  }

  return res;
}

formCompatible.component = index_default.a;
formCompatible.displayName = "Form";
formCompatible.unfinished = [];
// EXTERNAL MODULE: external "@platform/card-table/index"
var card_table_index_ = __webpack_require__(48);
var card_table_index_default = /*#__PURE__*/__webpack_require__.n(card_table_index_);

// EXTERNAL MODULE: external "@platform/table-core/index"
var table_core_index_ = __webpack_require__(7);

// CONCATENATED MODULE: ./src/platform/components/Table/appTable/CardTable/compatible.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || compatible_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return compatible_arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || compatible_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function compatible_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return compatible_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return compatible_arrayLikeToArray(o, minLen); }

function compatible_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function compatible_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function compatible_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { compatible_ownKeys(Object(source), true).forEach(function (key) { compatible_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { compatible_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function compatible_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var isFunction = table_core_index_["utils"].isFunction,
    isArray = table_core_index_["utils"].isArray,
    isObject = table_core_index_["utils"].isObject,
    warningOnce = table_core_index_["utils"].warningOnce,
    isString = table_core_index_["utils"].isString,
    isUndefined = table_core_index_["utils"].isUndefined,
    isWrong = table_core_index_["utils"].isWrong;

var useCardTable = card_table_index_default.a.useCardTable,
    TabsTableStore = card_table_index_default.a.TabsTableStore; // console.log(useCardTable, TabsTableStore);

var ROW_STATUS = table_core_index_["CONFIG"].ROW_STATUS; // 页面其他区域变化表格重新计算标识

var OTHERCOMPLETE = 'otherComplete';
var HEIGHTTOSCROLL = 'heightToScroll'; // console.log(beforeAndAfter, getCheckedExtendMethod);

/**
 *  cardTable 关键功能：
 * *
 *  1.  编辑后事件：需要维护一份旧值，编辑后事件需要给业务新值和旧值
 *
 *  2.  新增行时，需要取模板 initialValue 数据 给单元格赋默认值
 *
 *  3.  孙表领域调用API测试
 * 
 *
 * *
 */

/**
 *     ***********      方 法 目 录    ************
 *
 *     PS： 按习惯和常用性排序，新增方法请追加
 *
 *     序号      	英文名称              	 作用
 * 		1     	setTableData       		  设置表格数据
 * 		2     	getStatus          		  获取表格的状态
 * 		3     	setStatus          		  设置表格的状态
 * 		4     	getAllRows     	 		    获得表格所有数据
 * 		5     	getVisibleRows     		  获得表格可见数据
 * 		6     	getChangedRows     		  获得表格修改后数据
 * 		7     	getNumberOfRows    	  	获得表格总数(可见/全部)
 * 		8     	getAllData        		  获取表格被包装的数据
 *      9     	addRow             	  	新增行(通过index值)
 * 		10    	delRowByRowId      	  	删除行通过（rowId）
 * 		11    	delRowsByIndex     		  删除行通过（index或者indexs）
 * 
 *      12    	setValByKeyAndIndex     设置值(通过键key和index)
 *      13      setValByKeyAndRowId     设置值(通过键key和rowId)
 *      14      resetTableData          重置表格数据(回到上次缓存)
 * 		15      updateTableData         修正表格数据
 * 		18      getValByKeyAndIndex     获取值(通过键key和index)
 * 		19      getValByKeyAndRowId     获取值(通过键key和rowId)
 *      22      setEditableByRowId      设置字段编辑性(通过rowId)
 * 		23		  setEditableByIndex      设置字段编辑性(通过Index)
 * 
 *		24		  pasteRow 				        复制粘贴行
 * 		27		  getCheckedRows          获取选中行数据
 * 		28		  selectAllRows           选中全部行
 * 		29		  selectRowsByIndex       选中某些行(通过index)
 * 		30		  unSelectRowsByIndex     取消选中某些行(通过index)
 * 		31      reverseSelected         反选
 * 		32      filterEmptyRows         移除空行
 * 		33      getAllRowsRemoveKeys    通过传入的键过滤不想要的数据
 * 		34		  toggleRowView           切换视图
 * 		36      getCacheData            获取缓存数据
 *      37      focusRowByIndex         设置选中行(通过index)
 *      38      getMixinMetaData        以模板为基准获取全数据    TODO
 *      40      getFilterRows           筛选表格中指定数据的方法
 *      41      setFiltrateTableData    设置筛选后的表格数据
 *      42      batchChangeTableData    批量修改
 * 		45		  updateDataByIndexs      更新多行的数据（根据index值）
 * 		46      insertDataByIndexs      更新多行的数据（根据index值）    !!!仅供编辑后使用
 * 		47      setRowStatusByIndexs    设置行数据的状态(根据index)
 * 		50		  insertRowsAfterIndex    多行数据插入到index行后
 * 		51      setTdEditByIndex        设置某个单元格为编辑态
 * 		52      setValByKeysAndIndex    设置多个值(通过键key和index)
 *      53      setAllCheckboxAble      设置所有左侧复选禁/启用
 * 		57      setMulTablesData        设置多个表格数据
 *      58      getRowsByIndexs         根据index获取行数据
 *      59      checkTableRequired      根据id检测必输性
 *      61      setAllKeysVal           给表格所用单元格设值
 *      62      setClickRowIndex        设置当前点击行
 *      63      getClickRowIndex        获取当前点击行
 *      64      setSaveData             给表格所用单元格设值
 *      65      getDataByIndex          获取表格中一行的数据(根据index)
 *      66      updateDataByRowId       通过传入的行数据更新数据
 *      70      getCurrentIndex         获得当前行
 *      71      updateDiffDataByRowId   郭祉祺差异更新
 *      72      moveRow                 移动行方法
 *      73      setRowEditByIndex       设置行编辑态
 *   //任亚军整理
 *      69      setModelEdit            设置行侧拉编辑性
 *      68      setColVisibleByKey      设置列显示隐藏
 *      67      setColsValue            设置列数据
 * *    16      openModel               打开侧拉窗
 *      17      closeModel              关闭侧拉窗
 * *    20      hideColByKey            隐藏列(根据key)
 * 		21      showColByKey            显示列(根据key)
 * *    25		  getColValue             获取列数据
 *      26		  setColValue             设置列数据
 * *    39      closeExpandedRow        关闭任何的展开视图
 * *    43      openListView            最大化多表中表体卡片列表
 * 		44 		  openMaxTable            最大化多表体表格
 * * 	48      getMetaValByKey         根据key键获取模板中数据
 * 		49      setColEditableByKey     设置某一列的编辑性
 * *    54		  getModalDataByIndex     获取侧拉数据(根据index)
 * 		55		  showEditAreaKey 		    设置侧拉某控件显隐
 * 		56      toggleCardTable         控制主表的收起展开
 * *    60      setQueryCondition       统一给表体和侧拉添加参照顾虑
 *
 *
 */

function _setGrandTableStore(pageScope, store, config) {
  var grandGroup = config.grandGroup;
  var grandTableIds = [];

  if (isArray(grandGroup) && store) {
    grandGroup.forEach(function (item) {
      grandTableIds.push(item.grandTableId);

      if (!pageScope.cardTableDataSource[item.grandTableId]) {
        var grandTableStore = store.getStore('grandTableStore');
        grandTableStore[item.grandTableId] = TabsTableStore();
        pageScope.cardTableDataSource[item.grandTableId] = grandTableStore[item.grandTableId];
        store.setStore('grandTableStore', grandTableStore, false);
      }

      store.setStore('grandTableIds', grandTableIds, false);
    });
  }
} // store.statusChange = statusChange;
// store.selectedChange = selectedChange;
// store.tableStatusChanged = tableStatusChanged;


function __handleEventsCallBack(name, func, currentStore) {
  var pageScope = this; // 点击事件回调

  if (name === 'onRowClick') {
    return function (moduleId, record, outputIndex, e) {
      return func.call(pageScope, compatible_objectSpread(compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, record, outputIndex, e);
    };
  } // 点击事件回调


  if (name === 'onRowDoubleClick') {
    return function (record, outputIndex, e) {
      return func.call(pageScope, compatible_objectSpread(compatible_objectSpread({}, pageScope.props), pageScope.output), record, outputIndex, e);
    };
  } //侧拉回调


  if (name === 'modelSave') {
    return function (index) {
      return func.call(pageScope, compatible_objectSpread(compatible_objectSpread({}, pageScope.props), pageScope.output), index);
    };
  }

  if (name === 'modelClose') {
    return function () {
      return func.call(pageScope, compatible_objectSpread(compatible_objectSpread({}, pageScope.props), pageScope.output));
    };
  }

  if (name === 'modelFooter' || name === 'modelDelRowBefore' || name === 'modelAddRow') {
    return function (moduleId, index, record) {
      return func.call(pageScope, compatible_objectSpread(compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, index, record);
    };
  }

  if (name === 'modelDelRow' || name === 'modelAddRowBefore') {
    return function (moduleId, beforeObj) {
      return func.call(pageScope, compatible_objectSpread(compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, beforeObj);
    };
  } //编辑事件回调,


  if (name === 'onAfterEvent') {
    return function (params, currentStore) {
      var currentName = params.currentName,
          moduleId = params.moduleId,
          record = params.record,
          rowKey = params.rowKey,
          rowKeyValue = params.rowKeyValue,
          rowIndex = params.rowIndex,
          attrcode = params.attrcode,
          column = params.column,
          _params$value = params.value,
          value = _params$value === void 0 ? {} : _params$value,
          _params$oldValue = params.oldValue,
          oldValue = _params$oldValue === void 0 ? {} : _params$oldValue,
          componentValue = params.componentValue,
          event = params.event,
          _params$triggerType = params.triggerType,
          triggerType = _params$triggerType === void 0 ? 'onChange' : _params$triggerType,
          _params$isTriggerModa = params.isTriggerModal,
          isTriggerModal = _params$isTriggerModa === void 0 ? false : _params$isTriggerModa,
          activeCode = params.activeCode;

      if (!currentStore) {
        console.warn('not find current currentStore !!!');
      }

      var val = value.value; // 为郭祉祺加的针对input类型时,这两个字段的特殊校验,换算率

      if (column.itemtype === 'input' && ['vchangerate', 'vqtunitrate'].includes(attrcode)) {
        var reg = /^([1-9][0-9]*|0)(\.\d{1,})?(\/)(([1-9][0-9]*)(\.\d{1,})?|(\d\.\d{1,}))$/;

        if (val && val.length < 1000 && !reg.test(val)) {
          if (!isTriggerModal) {
            currentStore.setCellProps(rowKeyValue, attrcode, {
              isEdit: false
            });
          }

          currentStore.setCellProps(rowKeyValue, attrcode, {
            value: null
          }); // toast({
          //     content: `${json['table0025']}'1/2'!`,
          //     color: 'danger',
          //     groupOperation: true,
          //     isNode: true,
          //     TextArr: [json['table0022'], json['table0023'], json['table0024']]
          // });

          return;
        }
      }

      var changedRows = []; // editItem.props.hasOwnProperty('isMultiSelectedEnabled') && (isMul = editItem.props.isMultiSelectedEnabled);

      var isMulti = column.isMultiSelectedEnabled;

      if (column.refcode) {
        var refcode = column.refcode.replace('.js', '');
        if (refcode.startsWith('/')) refcode = refcode.substring(1);
        var refer = window[refcode] && window[refcode]["default"]();

        if (refer && refer.props && refer.props.isMultiSelectedEnabled) {
          isMulti = refer.props.isMultiSelectedEnabled;
        }
      } // 多选参照的判断


      var valueArr = [];

      if (isMulti && oldValue) {
        var oldValArr = isString(oldValue.value) ? oldValue.value.split(',') : isArray(oldValue.value) ? oldValue.value : [oldValue.value];

        var _valueArr = isString(value.value) ? value.value.split(',') : isArray(value.value) ? value.value : [value.value];

        _valueArr.forEach(function (val, i) {
          changedRows.push({
            rowid: record.rowid,
            newvalue: {
              value: val || ''
            },
            oldvalue: {
              value: oldValArr[0] || ''
            }
          });
        });
      } else {
        changedRows.push({
          rowid: record[rowKey],
          newvalue: {
            value: val || ''
          },
          oldvalue: {
            value: oldValue.value || ''
          }
        });
      }

      currentStore.saveRowOldValue(record[rowKey], attrcode, valueArr.length > 0 ? valueArr[0] : val); // !isValEqual(changedrows[0].newvalue.value, changedrows[0].oldvalue.value)

      if (column.editAfterFlag && pageScope.handleRelationItems) {
        pageScope.handleRelationItems({
          type: 'table',
          areaCode: moduleId,
          key: attrcode,
          changedrows: changedRows,
          index: rowIndex,
          rowid: record[rowKey],
          record: record,
          tableMetaCode: activeCode,
          column: column,
          callback: function callback() {
            var fxParams = {
              moduleId: moduleId,
              record: record,
              attrcode: attrcode,
              methods: pageScope.output,
              rows: currentStore.getViewData(),
              index: rowIndex,
              val: column.itemtype === 'refer' || column.itemtype === 'residtxt' ? componentValue : value.value,
              changedRows: changedRows,
              actionTag: triggerType === 'onBlur' ? 'blur' : 'change'
            }; // 客开先不加了

            Object(utils["a" /* beforeAndAfter */])(pageScope, {
              moduleId: moduleId,
              attrcode: attrcode,
              fxType: 'onCardTableAfterEvent',
              fxParams: fxParams
            }, function () {
              return func(compatible_objectSpread(compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, attrcode, column.itemtype === 'refer' || column.itemtype === 'residtxt' ? componentValue : value.value, changedRows, rowIndex, record, isTriggerModal ? 'model' : 'line', triggerType === 'onBlur' ? 'blur' : 'change', currentStore.getViewData(), event);
            });
          }
        });
      } else {
        var fxParams = {
          moduleId: moduleId,
          record: record,
          attrcode: attrcode,
          methods: pageScope.output,
          rows: currentStore.getViewData(),
          index: rowIndex,
          val: column.itemtype === 'refer' || column.itemtype === 'residtxt' ? componentValue : value.value,
          changedRows: changedRows,
          actionTag: triggerType === 'onBlur' ? 'blur' : 'change'
        };
        Object(utils["a" /* beforeAndAfter */])(pageScope, {
          moduleId: moduleId,
          attrcode: attrcode,
          fxType: 'onCardTableAfterEvent',
          fxParams: fxParams
        }, function () {
          // console.log('beforeAndAfter  编辑后');
          return func(compatible_objectSpread(compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, attrcode, column.itemtype === 'refer' || column.itemtype === 'residtxt' ? componentValue : value.value, changedRows, rowIndex, record, isTriggerModal ? 'model' : 'line', triggerType === 'onBlur' ? 'blur' : 'change', currentStore.getViewData(), event);
        });
      }
    };
  }

  if (name === 'onBeforeEvent') {
    return /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        var moduleId, record, rowKey, rowKeyValue, rowIndex, attrcode, column, _params$value2, value, event, _params$triggerType2, triggerType, _params$isTriggerModa2, isTriggerModal, fxParams;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                moduleId = params.moduleId, record = params.record, rowKey = params.rowKey, rowKeyValue = params.rowKeyValue, rowIndex = params.rowIndex, attrcode = params.attrcode, column = params.column, _params$value2 = params.value, value = _params$value2 === void 0 ? {} : _params$value2, event = params.event, _params$triggerType2 = params.triggerType, triggerType = _params$triggerType2 === void 0 ? 'onChange' : _params$triggerType2, _params$isTriggerModa2 = params.isTriggerModal, isTriggerModal = _params$isTriggerModa2 === void 0 ? false : _params$isTriggerModa2;
                console.log(record, attrcode, '编辑前');
                /***
                  * 二开的编辑后事件 --qinbb
                  */

                fxParams = {
                  moduleId: moduleId,
                  record: record,
                  attrcode: attrcode,
                  methods: pageScope.output,
                  val: record.values[attrcode],
                  index: rowIndex,
                  areaTag: isTriggerModal ? 'model' : 'line'
                };
                _context.next = 5;
                return Object(utils["a" /* beforeAndAfter */])(pageScope, {
                  moduleId: moduleId,
                  attrcode: attrcode,
                  fxType: 'onCardTableBeforeEvent',
                  fxParams: fxParams
                }, function () {
                  // 触发编辑前
                  return func(compatible_objectSpread(compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, attrcode, record.values[attrcode], rowIndex, record, isTriggerModal ? 'model' : 'line');
                });

              case 5:
                _context.t0 = _context.sent;
                return _context.abrupt("return", _context.t0 !== false);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  } //复选框选中回调


  if (name === 'onSelected') {
    return function (moduleId, record, index, selected) {
      return func.call(pageScope, compatible_objectSpread(compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, record, index, selected);
    };
  }

  if (name === 'onCellKeyDown') {
    return function (moduleId, record, index, attrcode, column, e) {
      return func.call(pageScope, compatible_objectSpread(compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, record, index, attrcode, column, e);
    };
  } //复选框选中回调


  if (name === 'onBatchSelected') {
    return function (moduleId, rows) {
      return func.call(pageScope, compatible_objectSpread(compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, rows);
    };
  }

  if (name === 'onSelectedAll' || name === 'selectedChange') {
    if (currentStore && name === 'selectedChange') {
      currentStore.selectedChange = func;
    }

    return function (moduleId, checked, len) {
      return func.call(pageScope, compatible_objectSpread(compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, checked, len);
    };
  } //页签改变、表格展开收起事件


  if (name === 'onTabChange' || name === 'onHeadAngleToggle') {
    if (currentStore && name === 'onHeadAngleToggle') {
      currentStore.onHeadAngleToggle = func;
    }

    return function (moduleId, item) {
      return func.call(pageScope, compatible_objectSpread(compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, item);
    };
  } // 这几个有坑  放在这个store上限制太大  由于store 难先生成  必须的话  就需要业务自己use了


  if (name === 'statusChange') {
    currentStore.statusChange = func;
  }

  if (name === 'tableStatusChanged') {
    currentStore.tableStatusChanged = func;
  }

  if (name === 'onBodyScroll') {
    return function () {
      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      return func.call.apply(func, [pageScope, compatible_objectSpread(compatible_objectSpread({}, pageScope.props), pageScope.output)].concat(params));
    };
  }

  return func;
}
/**
 * @description: 转换和添加一些属性
 * @param {type} 
 * @return: 
 */


function __handleProps(item, name) {
  if (name === 'moduleId') {
    item.name = item.moduleId;
  }

  if (name === 'isAddRow') {
    item.autoAddRow.enabled = item.isAddRow;
  }

  if (name === 'addRowCallback') {
    item.autoAddRow.callback = item.addRowCallback.bind(this);
  }

  if (name === 'addRowDefaultValue') {
    item.autoAddRow.defaultValue = item.addRowDefaultValue;
  }

  if (name === 'rowClassList') {
    item.rowClassnName = item.rowClassList;
  }

  if (name === 'height') {
    item.bodyStyle = {
      minHeight: item.height || 300
    };
    item.scroll = {
      x: true,
      y: item.height || 300
    }; // 避免行高的传递

    delete item.height;
  }

  if (name === 'setCellClass') {
    item.cellClassName = function (record, rowIndex, attrcode) {
      return isFunction(item.setCellClass) && item.setCellClass(rowIndex, record, attrcode);
    };
  }

  if (name === 'alloweFilter') {
    item.high_filter = {
      alloweFilter: item.alloweFilter
    };
  }
}
/**
 * @description: 添加一些默认方法和参数
 * @param {type} 
 * @return: 
 */


function __addDefautProps(item) {
  var _this2 = this;

  // 添加事件
  item.onChange = function (_ref2) {
    var rowKey = _ref2.rowKey,
        rowKeyValue = _ref2.rowKeyValue,
        rowIndex = _ref2.rowIndex,
        attrcode = _ref2.attrcode,
        value = _ref2.value,
        column = _ref2.column,
        e = _ref2.e;

    // 为郭祉琪加的针对input类型时,这两个字段的特殊校验,换算率
    if (column.itemtype === 'input' && ['vchangerate', 'vqtunitrate'].includes(column.attrcode)) {
      // eslint-disable-next-line no-useless-escape
      var reg = /^[0-9\/\.]+$/;

      if (value && !reg.test(value)) {
        //只能输入数字和/
        return;
      }
    } //胡杰李忠博加


    if (isFunction(item.inputChange)) {
      var callbackValue = item.inputChange.call(_this2, {
        index: rowIndex,
        item: column,
        valueChange: value.value
      });

      if (!callbackValue) {
        return;
      }
    }
  }; // 自动增行的参数


  item.autoAddRow = item.autoAddRow || {}; // 给 onAfterEvent 事件设置一个默认值  
  // 因为 onAfterEvent 里处理了默认逻辑 避免业务没有传参数时不调用

  item.onAfterEvent = item.onAfterEvent || function () {};

  item.onBeforeEvent = item.onBeforeEvent || function () {};
}
/**
 * config: {key: config}
 * @description: 统一处理一下所有的方法回调
 * @param {type} 
 * @return: 
 */


function handleEventsCallBack() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var stores = arguments.length > 1 ? arguments[1] : undefined;
  var moduleId = arguments.length > 2 ? arguments[2] : undefined;
  var pageScope = this;

  for (var key in config) {
    var item = config[key]; // 获取所有表配置项

    if (isObject(item)) {
      // onAfterEvent  autoAddRow  onChange
      __addDefautProps.call(pageScope, item);

      for (var ikey in item) {
        // 获取所有方法的
        //孙表
        if (ikey === 'grandGroup' && isArray(item[ikey])) {
          item[ikey].forEach(function (elem) {
            var grandConfig = elem.grandTableConfig;
            var moduleId = elem.grandTableId;
            handleEventsCallBack.call(pageScope, compatible_defineProperty({}, moduleId, grandConfig), {}, moduleId);
          });
        } // 先处理一些属性转换


        __handleProps.call(pageScope, item, ikey);

        if (isFunction(item[ikey])) {
          item[ikey] = __handleEventsCallBack.call(pageScope, ikey, item[ikey], stores[key], moduleId);
        }
      }
    }
  }

  return config;
}

function createCardTable(moduleId) {
  var _this3 = this;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var pageScope = this,
      store = pageScope.cardTableDataSource[moduleId];
  var newConfig = Object.assign({}, config);

  if (!store) {
    store = useCardTable();
    pageScope.cardTableDataSource[moduleId] = store; // 如果有缓存值 则做一下  Store 的赋值操作  把setTableData里的else操作提到这里了  估计可以去除

    if (pageScope.myTableData[moduleId]) {
      store.setTableData(pageScope.myTableData[moduleId]); // TODO 验证

      store.setTableProps('focusIndex', -1, false);
      delete pageScope.myTableData[moduleId];
    }
  } // console.log('cardTableStore', store);
  // 解析事件


  if (isObject(newConfig.multiConfig)) {
    for (var name in newConfig.multiConfig) {
      pageScope.cardTableDataSource[name] = pageScope.cardTableDataSource[name] || useCardTable();
      store.addTabStore(name, pageScope.cardTableDataSource[name]);
    } // 可以放到事件解析里做


    var stores = store.getTabsStores(); // 这里meta 不一定有所以 不一定有Store

    newConfig.multiConfig = handleEventsCallBack.call(pageScope, newConfig.multiConfig, stores, moduleId);
  }

  if (isObject(newConfig.multiConfig) && !newConfig.multiConfig[moduleId]) {
    newConfig.multiConfig[moduleId] = newConfig;
  } // 解析事件 不要放在else 里  可以单多来源都兼容


  newConfig = handleEventsCallBack.call(pageScope, compatible_defineProperty({}, moduleId, newConfig), compatible_defineProperty({}, moduleId, store), moduleId)[moduleId] || newConfig; // 挂载孙表store

  _setGrandTableStore(pageScope, store, !isObject(newConfig.multiConfig) || !newConfig.multiConfig[moduleId] ? newConfig : newConfig.multiConfig[moduleId]); //console.log(config, config.multiConfig);
  // renderItem 适配  TODO 多来源时是否需要区分id


  var renderItems = {};

  if (pageScope.state.renderItem && pageScope.state.renderItem.table) {
    renderItems = pageScope.state.renderItem.table || {};
  }

  store.setConfig(newConfig); // console.log(newConfig);

  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(card_table_index_default.a // 多语加载完成事件
  , {
    afterLangload: function afterLangload(json, store) {
      // console.log(this, json);
      pageScope.cardTableDataSource._langJson = json || {};
    },
    onCellHyperlinkTo: function onCellHyperlinkTo(record, attrcode, value, tableId) {
      Object(api_index_["linkTo"])(pageScope.state.meta.pageid, tableId, attrcode, value.value);
    },
    name: moduleId,
    store: store,
    config: newConfig,
    multiConfig: newConfig.multiConfig || {},
    renderItems: renderItems,
    mountChildrenStore: function mountChildrenStore(id, callback) {
      // 挂载多页签的 store
      pageScope.cardTableDataSource[id] = callback(pageScope.cardTableDataSource[id]); // 挂载孙表store

      newConfig.multiConfig && newConfig.multiConfig[id] && _setGrandTableStore(pageScope, pageScope.cardTableDataSource[id], newConfig.multiConfig[id]);
    },
    cardTableComponentUpdate: function cardTableComponentUpdate(props, data) {
      // console.log('cardTableComponentUpdate', props, data);
      Object(utils["c" /* getCheckedExtendMethod */])(pageScope, 'updateEditTable')({
        pageScope: pageScope,
        data: data,
        props: props,
        useOn: 'create'
      });
    } // 快捷键 解耦
    ,
    getHotKeyConfig: function getHotKeyConfig() {
      return {
        autoFocusDeferred: _this3.autoFocusDeferred,
        meta: _this3.state.meta,
        withHotKeyChange: _this3.withHotKeyChange,
        orderOfHotKey: _this3.orderOfHotKey,
        onLastFormEnter: config.onLastFormEnter
      };
    }
  });
}
/**
 * bbq
 * 检测组件对象是否存在
 * @param {*} id
 */

var existenceCheck = function existenceCheck(id) {
  var cardTableStore = this.cardTableDataSource[id];

  if (!cardTableStore) {
    warningOnce(false, "\u6240\u64CD\u4F5C\u7684\u8868\u683C\u4E2D\u65E0ID\u4E3A".concat(id, "\u7684\u6570\u636E"));
    return;
  }

  return cardTableStore;
};
/**
 * bbq
 * 检测行的index是否存在
 * @param {*} id
 */


var indexCheck = function indexCheck(id, index, rowid) {
  var cardTableStore = existenceCheck.call(this, id);

  if (!cardTableStore) {
    return;
  }

  var viewData = cardTableStore.getData([ROW_STATUS["delete"], ROW_STATUS.filter]);

  if (isNaN(index) || index > viewData.length || index < 0) {
    warningOnce(index, '传入的第二个参数为行index值，须为大于等于0且小于等于总行数减一的整数');
    return -1;
  }

  return index;
}; // 多来源 设置布局方式


function setLayout(moduleId, layout) {
  var store = existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.setLayout(layout);
} // 多来源 获取布局方式
// export function getLayout(moduleId) {
//     let store = existenceCheck.call(this, moduleId);
//     if (!store) {
//         return;
//     }
//     return store.getLayout(moduleId);
// }
// 多来源 设置全部数据

/**
 * 1、设置表格数据
 * @param  moduleId      表格id
 * @param  data         数据
 * @param  callback     设置后回调,
 * 这里注意设置值的时候,表格如果没有数据,也要设置默认值 { rows: [] }
 * data数据格式 例如: {
 * revecont_b: { rows:[{values: { num: {value: 1111}, fconfirmpoint: {value: 1, display: '人工'} }}] },
 * material: { rows:[{values: { num: {value: 1111}, fconfirmpoint: {value: 1, display: '人工'} }}] }
 * }
 */

function setTabsTableData(moduleId, data) {
  var store = existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.setTabsTableData(data, true, moduleId);
}
/**
 * 3、取消所有页签数据
 * @param  moduleId  表格id
 */

function resetTabsTableData(moduleId) {
  var store = existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.resetTabsTableData(false, moduleId);
}
/**
 * 2、获取所有表格数据
 * @param  moduleId  表格id
 */

function getTabsTableData(moduleId) {
  var store = existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  return store.getTabsTableData(moduleId);
}
/**
 * 4、设置多个主表状态
 * @param  status tableId和表格状态组成的对象
 * { revecont_b: 'edit', revecont_b1: 'browse' }
 */

function setTabsTableStatus(moduleId) {
  var _this4 = this;

  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var store = existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var _this = this;

  return store.setTabsTableStatus(status, false, moduleId, function (tableId, mainStore, oldStatus) {
    // 切换成浏览态的时候把所有的toast清掉
    if (oldStatus !== 'browse' && status[tableId] == 'browse') {
      Object(api_index_["clearOneTypeToast"])('danger');
      clearRequiredStatus.call(_this || _this4, tableId);
    }
  });
} //设置页签显示隐藏

function setTabsTableShow(mainId, flagObj) {
  var store = existenceCheck.call(this, mainId);

  if (!store) {
    return;
  }

  return store.setTabsTableShow(mainId, flagObj, !this.isUpdatePage);
} //设置页签激活

function setTabsTableActive(mainId, childId) {
  var store = existenceCheck.call(this, mainId);

  if (!store) {
    return;
  }

  return store.setTabsTableActive(mainId, childId, !this.isUpdatePage);
} //获取当前激活页签

function getTabsTableActive(mainId) {
  var store = existenceCheck.call(this, mainId);

  if (!store) {
    return;
  }

  return store.getTabsTableActive(mainId);
}
/**
 * 工具api 区域
 */

/**
 * 校验页签的数据 他是一个工具函数
 * @param {*} items 单个页签的模版
 * @param {*} rows 单个页签的行数据
 * @param {*} allToast 当个页签检验结果的容器
 */

function checkTabRequired(_ref3) {
  var items = _ref3.items,
      rows = _ref3.rows,
      allToast = _ref3.allToast,
      rowKey = _ref3.rowKey;
  var validateFailed = {},
      firstValidateFaild = [];
  items.forEach(function (item) {
    //将数据中没有的列附上空对象，保证校验的准确性
    var attrcode = item.attrcode;
    rows.forEach(function (row) {
      var values = row.values;

      if (isUndefined(values[attrcode])) {
        values[attrcode] = {};
      }
    });
  });
  rows.forEach(function (row, index) {
    var rowToast = []; //保存每行的检验提示信息

    var values = row.values; //便利校验是否没有输入必输项

    Object.entries(values).forEach(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          colKey = _ref5[0],
          colValue = _ref5[1];

      var value = colValue.value;

      if (isString(value)) {
        value = value.trim();
      }

      if (isWrong(value)) {
        items.forEach(function (item) {
          var attrcode = item.attrcode,
              required = item.required,
              label = item.label;

          if (required && attrcode === colKey) {
            rowToast.push(label); // 有就是有没有就是没有  给页签上判断用

            validateFailed[row[rowKey]] = validateFailed[row[rowKey]] || {};
            validateFailed[row[rowKey]][item.attrcode] = item.attrcode;

            if (!firstValidateFaild.length) {
              firstValidateFaild = [row[rowKey], item.attrcode];
            }
          }
        });
      }
    });

    if (rowToast.length > 0) {
      allToast["\u7B2C".concat(index + 1, "\u884C")] = rowToast;
    }
  });
  return {
    tabToast: allToast,
    validateFailed: validateFailed,
    firstValidateFaild: firstValidateFaild
  };
}
/**
 * TODO
 * 5、校验多页签表格
 * @param {*} moduleId 表格id
 */


function checkAllTabsRequire(moduleId) {
  var _this5 = this;

  var autoFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var store = existenceCheck.call(this, moduleId);

  if (!store) {
    return false;
  }

  var meta = store.getMeta() || this.state.meta;
  var json = this.cardTableDataSource._langJson || {};
  var gridrelation = meta.gridrelation,
      containerrelation = meta.containerrelation; // 校验

  var allValidateFailed = {};
  var allFirstValidateFaild = {};
  /**
   * 必输项不全的页签
   */

  var errorTabIds = [];
  /**
   * 提示信息集合
   */

  var label = {};
  /**
   * 多页签所有的主表列表
   */

  var metaTabs = containerrelation[moduleId];
  var tabs = [];

  if (Array.isArray(metaTabs) && metaTabs.length) {
    metaTabs.forEach(function (item) {
      tabs.push.apply(tabs, _toConsumableArray(item));
    });
  }
  /**
   * 构造用校验的数据结构
   */


  var checkedMusters = tabs.reduce(function (checkedMuster, tabId) {
    var currentRelation = gridrelation[tabId];
    var currentStore = existenceCheck.call(_this5, tabId);

    if (!currentStore || !currentRelation) {
      return checkedMuster;
    }

    var rows = currentStore.getViewData('filter');
    var tabRelation = currentRelation.initialTabRelation || currentRelation.tabRelation;
    var tabRelationMuster = tabRelation.reduce(function (metaConfig, tabId) {
      var name = meta[tabId].name;
      var items = currentStore.getArrayMeta(tabId) || [];
      items = items.filter(function (item) {
        return item.visible;
      });
      metaConfig[tabId] = {
        name: name,
        items: items
      };
      return metaConfig;
    }, {});
    checkedMuster[tabId] = {
      tabRelationMuster: tabRelationMuster,
      rows: rows
    };
    return checkedMuster;
  }, {});

  var _loop = function _loop(tableId) {
    var tabItem = checkedMusters[tableId];
    var store = existenceCheck.call(_this5, tableId);
    var rowKey = store ? store.getTableProps('rowKey') : 'rowid';
    allValidateFailed[tableId] = allValidateFailed[tableId] || {};
    allFirstValidateFaild[tableId] = allFirstValidateFaild[tableId] || [];
    var tabRelationMuster = tabItem.tabRelationMuster,
        rows = tabItem.rows;
    Object.entries(tabRelationMuster).forEach(function (_ref10) {
      var _ref11 = _slicedToArray(_ref10, 2),
          tabId = _ref11[0],
          config = _ref11[1];

      var name = config.name,
          items = config.items;

      var _checkTabRequired = checkTabRequired({
        items: items,
        rows: rows,
        allToast: {},
        rowKey: rowKey
      }),
          tabToast = _checkTabRequired.tabToast,
          validateFailed = _checkTabRequired.validateFailed,
          firstValidateFaild = _checkTabRequired.firstValidateFaild;

      allValidateFailed[tableId][tabId] = allValidateFailed[tableId][tabId] || {};

      if (Object.keys(tabToast).length) {
        allValidateFailed[tableId][tabId] = validateFailed; // console.log(validateFailed, firstValidateFaild);

        if (!allFirstValidateFaild[tableId].length) {
          allFirstValidateFaild[tableId] = [tabId].concat(_toConsumableArray(firstValidateFaild));
        }

        errorTabIds.push(tabId);
        label["".concat(name, "(\u9875\u7B7E)")] = tabToast;
      }
    });
  };

  for (var tableId in checkedMusters) {
    _loop(tableId);
  }

  if (errorTabIds.length) {
    // validateFailed, firstValidateFaild // 四层数据
    console.log(allValidateFailed, allFirstValidateFaild);

    for (var _tableId in allValidateFailed) {
      var _store = existenceCheck.call(this, _tableId);

      var table = allValidateFailed[_tableId];
      var isRefresh = false;

      if (_store && table) {
        console.log(_store); // 缓存状态

        _store.setCache('validateFailed', allValidateFailed);

        _store.setCache('firstValidateFaild', allFirstValidateFaild);

        for (var tabId in table) {
          var rows = table[tabId];

          if (rows) {
            for (var rowKeyValue in rows) {
              if (rowKeyValue) {
                var row = rows[rowKeyValue];

                if (row) {
                  for (var attrcode in row) {
                    _store.setCellProps(rowKeyValue, attrcode, {
                      validated: false
                    }, false);
                  }
                }

                isRefresh = true;
              }
            }
          }
        }

        isRefresh && _store.refresh();
      }
    } // 自动聚焦到首个


    if (allFirstValidateFaild && autoFocus) {
      var tableIdList = tabs ? isArray(tabs) ? tabs : [tabs] : tabs || this.orderOfHotKey;
      var tabSelector = null,
          cellSelector = null; // 找到第一个

      tableIdList.some(function (tableId) {
        var cellInfo = allFirstValidateFaild[tableId];

        if (cellInfo && cellInfo.length > 0) {
          tabSelector = "#js_lightTabs_header_".concat(tableId, " [name=\"").concat(cellInfo[0], "\"] a");
          cellSelector = ".table-cell-wrapper[cellselectorkey=\"".concat(cellInfo[1], "@").concat(cellInfo[2], "\"] [tabindex=\"0\"]");
          return true;
        }
      });
      var tabElement = document.querySelector(tabSelector);
      tabElement && tabElement.click();
      setTimeout(function () {
        var cellElement = document.querySelector(cellSelector);

        if (cellElement) {
          cellElement.ncExecuteFocus = true;
          cellElement.focus();
          cellElement.ncExecuteFocus = false;
        }
      }, 300);
      console.log(tableIdList, allFirstValidateFaild, tabSelector, cellSelector);
    }

    var errorContent = Object.entries(label).reduce(function (errorContent, _ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
          tabName = _ref7[0],
          rowsToast = _ref7[1];

      errorContent.push("".concat(tabName, " :"));
      Object.entries(rowsToast).forEach(function (_ref8) {
        var _ref9 = _slicedToArray(_ref8, 2),
            rowName = _ref9[0],
            rowToast = _ref9[1];

        errorContent.push("".concat(rowName, ": ").concat(rowToast.join(', ')));
      });
      return errorContent;
    }, []);
    Object(api_index_["toast"])({
      content: "".concat(json && json['table_no_empty'], "\uFF1A"),
      color: 'danger',
      TextArr: [json['table0022'], json['table0023'], json['table0024']],
      groupOperation: true,
      groupOperationMsg: errorContent,
      mark: 'edit-table-toastx'
    });
    store.setStore('errorTabIds', errorTabIds);
    errorContent && errorContent.length > 0 && store.setCache('errorContent', errorContent);
    return false;
  } else {
    store.setStore('errorTabIds', []);
    store.setCache('errorContent', []);
    return true;
  }
} // 处理旧值函数 bbq

function saveChangedRowsOldValue(moduleId, rowid, attrcode, value) {
  var metaStore = existenceCheck.call(this, moduleId);

  if (!metaStore) {
    return;
  }

  metaStore.saveRowOldValue(rowid, attrcode, value);
}
/**
 * bbq
 * 对旧值处理的函数, 这原来是标识是index,但是增加筛选后,
 * 对筛选结果进行编辑,使用index作为标识存取新旧值,会导致存取值错误,
 * 所以改成现在rowid为标识, 但是对旧值处理的方法,已经对外暴露,如果出现问题,需要业务组配合修改,
 * 将对新旧值的处理换成rowid为标识
 * */

function getChangedRowsOldValue(moduleId, rowid, attrcode) {
  var metaStore = existenceCheck.call(this, moduleId);

  if (!metaStore) {
    return;
  }

  return metaStore.getRowOldValue(rowid, attrcode);
} // 删除旧值函数 bbq

function delChangedRowsOldValue(moduleId, rowid, attrcode) {
  var metaStore = existenceCheck.call(this, moduleId);

  if (!metaStore) {
    return;
  }

  metaStore.deleteRowOldValue(rowid, attrcode);
}
/**
 * bbq
 * 设置表格数据，同时缓存数据，缓存数据用于取消时调用
 * @param  tableId   表格主区域编码
 * @param  data      传入的data数据
 * @param  isCache   是否缓存  默认缓存
 * @param  isTop     是否回到顶部
 * @param  autoFocus 表格重新渲染后是否需要聚焦到之前聚焦的元素 主要解决快捷键连续性操作的问题
 * @param  resetSort 重置主表的排序标记
 */

function setTableData(tableId, data, callback) {
  var isCache = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var isTop = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var autoFocus = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  if (!data || !data.rows || !isArray(data.rows)) {
    warningOnce(data, '传入的第二个参数为所设置的数据，数据格式是对象，且有个rows属性，rows的内容是数组');
    return;
  }

  var store = existenceCheck.call(this, tableId);

  if (!store) {
    // 控制设值定位后将参数至成默认值
    this.myTableData[tableId] = data;
    isFunction(callback) && callback.call(this, compatible_objectSpread(compatible_objectSpread({}, this.props), this.output), tableId, data);
    return;
  } // 设置表格数据


  data = store.setTableData(data, {
    isCache: isCache,
    isTop: isTop,
    shouldForceUpdate: !this.isUpdatePage
  }); // 调用selectedChange事件

  isFunction(store.selectedChange) && store.selectedChange(compatible_objectSpread(compatible_objectSpread({}, this.props), this.output), tableId, 0); //将回调打开，看看有没有问题 zhanghengh  18/7/30

  isFunction(callback) && callback.call(this, compatible_objectSpread(compatible_objectSpread({}, this.props), this.output), tableId, data);
}
/**
 * bbq
 * 2、获取表格状态
 * @param  tableId   meta的id号
 */

function getStatus(tableId) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  return store.getTableProps('status');
} //  清除校验状态

function clearRequiredStatus(tableId) {
  var includeAllArea = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var validateFailed = store.getCache('validateFailed') || {};

  for (var _tableId2 in validateFailed) {
    var mainStore = existenceCheck.call(this, _tableId2);
    var table = validateFailed[_tableId2]; // let isRefresh = false;

    if (mainStore && table) {
      // console.log(mainStore);
      // 缓存状态
      // mainStore.setCache('validateFailed', allValidateFailed);
      // mainStore.setCache('firstValidateFaild', allFirstValidateFaild);
      for (var tabId in table) {
        var rows = table[tabId];

        if (rows) {
          for (var rowKeyValue in rows) {
            if (rowKeyValue) {
              var row = rows[rowKeyValue];

              if (row) {
                for (var attrcode in row) {
                  mainStore.setCellProps(rowKeyValue, attrcode, {
                    validated: true
                  }, false);
                }
              } // isRefresh = true;

            }
          }
        }
      } // isRefresh && mainStore.refresh();


      mainStore.setCache('validateFailed', null);
      mainStore.setCache('firstValidateFaild', null);
    } // 去除校验状态


    store.setCache('validateFailed', null);
    store.setCache('firstValidateFaild', null);
  }

  if (includeAllArea && store) {
    // 孙表的
    var grandTableStore = store.getStore('grandTableStore') || {};
    var grandValidateFailed = store.getCache('grandValidateFailed') || {};

    for (var grandTableId in grandTableStore) {
      var grandStore = grandTableStore[grandTableId];

      for (var rowid in grandValidateFailed) {
        // 记录校验状态
        var _validateFailed = grandValidateFailed[rowid];

        if (grandStore && _validateFailed) {
          // for (let tableId in validateFailed) {
          var _table = _validateFailed[grandTableId]; // let isRefresh = false;

          if (_table) {
            for (var _tabId in _table) {
              var _rows = _table[_tabId];

              if (_rows) {
                for (var _rowKeyValue in _rows) {
                  if (_rowKeyValue) {
                    var _row = _rows[_rowKeyValue];

                    if (_row) {
                      for (var _attrcode in _row) {
                        // debugger;
                        grandStore.setCellProps(_rowKeyValue, _attrcode, {
                          validated: true
                        }, false);
                      }
                    } // isRefresh = true;

                  }
                }
              }
            } // 缓存状态


            grandStore.setCache('validateFailed', null); // isRefresh && mainStore.refresh();
          } // }

        }
      }
    }

    store.setCache('grandValidateFailed', null);
  }
}
/**
 * bbq
 * 3、设置表格状态
 * @param  tableId   meta的id号
 * @param  status    表格状态：edit,browse其一
 */

function setStatus(tableId, status) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var oldStatus = store.getTableProps('status') || 'browse'; // 切换成浏览态的时候把所有的toast清掉

  if (oldStatus !== 'browse' && status == 'browse') {
    Object(api_index_["clearOneTypeToast"])('danger');
    clearRequiredStatus.call(this, tableId);
  }

  if (status === 'edit') {
    store.setStore('expandedRowKeys', [], !this.isUpdatePage);
  }

  store.setTableStatus(status, {
    shouldForceUpdate: !this.isUpdatePage
  }); // TODO props 传递有些问题

  isFunction(store.tableStatusChanged) && store.tableStatusChanged(tableId, {
    props: store,
    status: status
  });
}
/**
 * bbq
 * 4、获取表格内所有行数据（包含删除项目）
 * @param  tableId   meta的id号
 * @return []/false  返回数组或者false
 * @warn   // TODO   校验可能存在风险，规则不全
 * mofify by zhanghengh @18/05/05  在内部判断筛选后和没有筛选获得全数据等的情况
 * mofify by zhanghengh @18/05/16  对之前的逻辑进行修改，减少了不必要的代码
 */

function getAllRows(tableId) {
  var isDeepCopy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.getAllRows(isDeepCopy);
}
/**
 * bbq
 * 5、获取表格内可见列表数据 （排除删除项目）
 * @param  tableId   meta的id号
 * @return []/false  返回数组或者false
 */

function getVisibleRows(tableId) {
  var isDeepCopy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.getVisibleRows(isDeepCopy);
}
/**
 * bbq
 * 6、获取表格修改后数据 （排除删除项目）
 * @param  tableId   meta的id号
 * @return []/false  返回数组或者false
 */

function getChangedRows(tableId) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.getChangedRows();
}
/**
 * bbq
 * 7、根据id获取表格中所有(可见)的行的数量
 * @param  tableId   meta的id号
 * @param  flag      flag为true包含删除项目  flag不传或者false不包含删除项目
 */

function getNumberOfRows(tableId, flag) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return 0;
  }

  return flag ? getAllRows.call(this, tableId, false).length : getVisibleRows.call(this, tableId, false).length;
} // bbq

function getAllData(tableId) {
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var rows = getAllRows.call(this, tableId, flag);
  var data = {
    areaType: 'table',
    rows: rows,
    areacode: null
  };
  return data;
}
/**
 * bbq
 * 控制行展开收起
 * @param  tableId   meta的id号
 * @param  record    行data
 */

function toggleRowView(tableId, record) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.toggleRowView(record);
}
/**
 * bbq
 * 9、新增行(通过index值)
 * @param  tableId   meta的id号
 * @param  index     增加行的位置index   0为行首 不传为和len为行尾部
 * @param  defaultValue      新增的默认defaultValue 格式：{key: {display: '', scale: 0, value: ''}, key2: {display: '', scale: 0, value: ''}}
 * mofify by zhanghengh  增加flag标识位，判断是否为多表头，默认是false，不是多表头
 */

function addRow(tableId, index, defaultValue) {
  var _this6 = this;

  var autoFocus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  var _callback = arguments.length > 4 ? arguments[4] : undefined;

  var flag = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var isAutoAddRow = arguments.length > 6 ? arguments[6] : undefined;
  var shouldForceUpdate = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  } //判断index是否存在


  index = isUndefined(index) ? getNumberOfRows.call(this, tableId, false) : index;
  if (!defaultValue) defaultValue = {}; // flag 暂时没有用 内部会处理多表头

  store.addTableRow(index, defaultValue, !this.isUpdatePage && shouldForceUpdate, {
    autoFocus: autoFocus,
    isAutoAddRow: isAutoAddRow,
    callback: function callback() {
      /*
       * 如果table第一次加载时数据是空，业务组调用addRow Api生成时没有在KeyByModuleId中生成数据
       * 所以再此手动调用 createByModuleType 方法
       * TODO 快捷键相关
       * */
      // if (keyByModuleId[tableId] === undefined) {
      //     createByModuleType['table'](myCardScope.props);
      // }
      // 给每个控件赋初始值   TODO  好多地方需要这个 比如  reset的时候  TODO
      // const myCardTable = this.myTable[tableId].state.table;
      //const myCardTable = store;
      isFunction(_callback) && _callback.call(_this6, tableId, index, {
        rows: store.getViewData()
      }); // TODO 快捷键
      // clearOtherTableRowSelectedStatus({ pageScope: this, moduleId: tableId });
      // TODO 全局事件

      api_index_["PubSub"].publish(HEIGHTTOSCROLL, true);
    }
  }); // isFunction(store.statusChange) && store.statusChange(status);
}
/**
 * bbq
 * 10、根据rowId的删除行方法
 * 规则：1、当state == ‘2’    新增        这时候直接删除数组就可以了
 *      2、当state == ‘0/1’  原始/修改   这时候数组的内容不能删除，把state置位3
 *      3、当state == ‘3’    已删除      这时候数组的内容不会显示，所以没删除功能
 * 解决思路： 把不是新增的 置位3 并push到结尾，其余的按index删除即可。 控制index的最大取值。
 * 注意点：   _selectedChangeFn方法调用
 * @param  tableId   meta的id号
 * @param  rowid     删除的行rowId
 */

function delRowByRowId(tableId, rowid, callback, isDeepDel) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.deleteTableRows({
    rowKeyValues: rowid
  }, isDeepDel, false); // 清理一下错误状态

  store.clearValidated(); // this.myTable[tableId].state.table  store.getStore() // TODO

  isFunction(callback) && callback.call(this, tableId, rowid, store.getStore());
  api_index_["PubSub"].publish(HEIGHTTOSCROLL, true); // TODO
}
/**
 * bbq
 * 11、根据index的删除行方法
 * @param  tableId   meta的id号
 * @param  Index     删除的行号-1
 */

function delRowsByIndex(tableId, index, callback, isDeepDel) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var delRowidList = store.deleteTableRows({
    rowIndexs: index
  }, isDeepDel, false); // 清理一下错误状态

  store.clearValidated(); // TODO  store.getStore()   this.myTable[tableId].state.table  store.getStore()

  isFunction(callback) && callback.call(this, tableId, index, store.getStore(), delRowidList);
  api_index_["PubSub"].publish(HEIGHTTOSCROLL, true); // TODO
}
/**
 * bbq
 * 12、根据index设置表格某行某个字段值  0代表第一行  行序号可有可没有
 * @param  tableId   meta的id号
 * @param  index     行序号-1，从0开始
 * @param  key       columns的键值
 * @param  value     需要设置的value值
 * @param  display   需要设置的display值
 * @param  scale     需要设置的scale值
 * mofify by zhanghengh  增加flag标识位，判断是否为多表头，默认是false，不是多表头
 * mofify by zhanghengh 这里现在只进行了重新赋值，没有进行更新页面，借助其他的更新一起更新，有问题的话，提供统一更新方法
 * mofify by zhanghengh 将批改数据重新缓存
 *
 *
 */

function setValByKeyAndIndex(tableId, index, key, cellValue, callback) {
  var flag = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var isUpdateBatch = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var allRows = store.getData();

  if (!allRows.length) {
    console.warn('empty data cant setting value');
    return;
  } // flag 没用了 多表头在内部处理


  store.setValByKeyAndIndex(index, key, cellValue, {
    isSetEdit: true,
    isUpdateBatch: isUpdateBatch,
    shouldForceUpdate: !this.isUpdatePage
  });
}
/**
 * bbq
 * 13、根据rowId设置表格某行某个字段值
 * @param  tableId   meta的id号
 * @param  rowid     行rowId
 * @param  key       columns的键值？？
 * @param  value     需要设置的value值
 * @param  display   需要设置的display值
 * @param  scale     需要设置的scale值
 * mofify by zhanghengh  增加flag标识位，判断是否为多表头，默认是false，不是多表头
 * mofify by zhanghengh 这里现在只进行了重新赋值，没有进行更新页面，借助其他的更新一起更新，有问题的话，提供统一更新方法
 * mofify by zhanghengh 将批改数据重新缓存
 */

function setValByKeyAndRowId(tableId, rowid, key, cellValue, callback) {
  var flag = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var isUpdateBatch = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  } // flag 没用了 多表头在内部处理


  store.setValByKeyAndRowId(rowid, key, cellValue, {
    isUpdateBatch: isUpdateBatch,
    shouldForceUpdate: false
  });
}
/**
 * bbq
 * 14、取消编辑，回到上次状态
 * @param  tableId   meta的id号
 * change zhanghengh 18/5/5 更改取消方式
 * change zhanghengh 18/5/16 将取消回原来的代码，并将ALL_DATA指为null
 */

function resetTableData(tableId, callback) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  Object(api_index_["clearOneTypeToast"])('danger');
  store.resetTableData({
    shouldForceUpdate: !this.isUpdatePage
  }); // TODO
  // callback && typeof callback === 'function' && callback.call(this, tableId, this.myTable[tableId].state.table);
}
/**
 * bbq
 * 15、更新表格数据
 * @param  tableId   meta的id号
 * @param  data      后台返回的data 需要有rowId 删除的数据不要返回
 */

function updateTableData(tableId, data, callback) {
  var isCache = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (!isObject(data) || !isArray(data.rows)) {
    warningOnce(data, '传入的第二个参数为所设置的数据，数据格式是对象，且有个rows属性，rows的内容是数组');
    return;
  }

  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.updateTableData(data, isCache, !this.isUpdatePage); // 调用selectedChange事件

  if (store.selectedChange) {
    store.selectedChange(compatible_objectSpread(compatible_objectSpread({}, this.props), this.output), tableId, 0);
  }
}
/**
 * bbq
 * 18、根据index获取表格某行某个字段值  0代表第一行  行序号可有可没有
 * @param  tableId   meta的id号
 * @param  index     行序号-1，从0开始
 * @param  key       columns的键值
 * mofify by zhanghengh  增加flag标识位，判断是否为多表头，默认是false，不是多表头
 */

function getValByKeyAndIndex(tableId, index, key) {
  var flag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  return store.getValByKeyAndIndex(index, key);
}
/**
 * bbq
 * 19、根据rowId设置获取某行某个字段值
 * @param  tableId   meta的id号
 * @param  rowid     行rowId
 * @param  key       columns的键值
 * @param  value     需要设置的value值
 * @param  display   需要设置的display值
 * @param  scale     需要设置的scale值
 * mofify by zhanghengh  增加flag标识位，判断是否为多表头，默认是false，不是多表头
 */

function getValByKeyAndRowId(tableId, rowid, key) {
  var flag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  return store.getValByKeyAndRowKey(rowid, key);
}
/**
 * bbq
这个有方法用edittable的相同方法替换他了
 * 22、通过rowId和键设置表格某行某个字段编辑性
 * @param  tableId   meta的id号
 * @param  rowid     rowid
 * @param  key       columns的键值
 * @param  flag      开关true/false
 * mofify by zhanghengh  增加flag标识位，判断是否为多表头，默认是false，不是多表头
 */

function setEditableByRowId(tableId, rowid, key) {
  var flag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.setCellsProps({
    rowKeyValues: [rowid],
    attrcodes: key === 0 ? undefined : key,
    value: {
      disabled: !flag
    },
    shouldForceUpdate: !this.isUpdatePage
  });
}
/**
 * bbq
 * 23、通过Index和键设置表格某行某个字段编辑性
 * @param  tableId   meta的id号
 * @param  index     行序号-1
 * @param  key       columns的键值
 * @param  flag      开关true/false
 * mofify by zhanghengh  增加flag标识位，判断是否为多表头，默认是false，不是多表头
 */

function setEditableByIndex(tableId, index, key) {
  var flag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.setCellsProps({
    rowIndexs: index,
    attrcodes: key === 0 ? undefined : key,
    // z支持数组
    value: {
      disabled: !flag
    },
    shouldForceUpdate: !this.isUpdatePage
  });
}
/**
 * bbq
 * 24、复制粘贴行，默认粘贴到该行下方
 * @param  tableId   meta的id号
 * @param  index     行序号index
 * @param  keys      不去复制的键值
 */

function pasteRow(tableId, index, keys) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var copy = store.getRows({
    rowIndexs: [index]
  })[0];
  index = index === undefined ? 0 : index + 1;
  store.pasteRow({
    copyRow: copy,
    index: index,
    excludeKeys: keys
  });
}
/**
 * bbq
 * 27、获取选中行数据
 * @param  tableId   meta的id号
 */

function getCheckedRows(tableId) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.getSelectedRows();
}
/**
 * TODO
 * 28、选中所有行
 * @param  tableId   meta的id号
 * @param  checked   开关
 */

function selectAllRows(tableId, checked) {
  var _this7 = this;

  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.setAllRowsSelected(checked, !this.isUpdatePage, function () {
    var newLen = store.getSelectedRows().length;
    isFunction(store.selectedChange) && store.selectedChange(compatible_objectSpread(compatible_objectSpread({}, _this7.props), _this7.output), tableId, newLen);
  });
}
/**
 * bbq
 * 29、选中某些行(通过index)
 * @param  tableId   meta的id号
 * @param  index     行序号index
 */

function selectRowsByIndex(tableId, index) {
  // TODO  加入index的极限值判断
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.setRowsSelected({
    rowIndexs: index
  }, true);
  var newLen = store.getSelectedRows().length;
  isFunction(store.selectedChange) && store.selectedChange(compatible_objectSpread(compatible_objectSpread({}, this.props), this.output), tableId, newLen);
}
/**
 * bbq
 * 30、取消选中某些行(通过index)
 * @param  tableId   meta的id号
 * @param  index     行序号index
 */

function unSelectRowsByIndex(tableId, index) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.setRowsSelected(index, false);
  var newLen = store.getSelectedRows().length;
  isFunction(store.selectedChange) && store.selectedChange(compatible_objectSpread(compatible_objectSpread({}, this.props), this.output), tableId, newLen);
}
/**
 * bbq
 * 31、反选
 * @param  tableId   meta的id号
 */

function reverseSelected(tableId) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.reverseRowsSelected(!this.isUpdatePage);
  var newLen = store.getSelectedRows().length;
  isFunction(store.selectedChange) && store.selectedChange(compatible_objectSpread(compatible_objectSpread({}, this.props), this.output), tableId, newLen);
}
/**
 * qbb
 * 32、移除没有输入内容，所有的空行
 * @param  tableId   meta的id号
 * @param  key       data的键值
 * @param  rule      对keys的修饰, rule == ‘except’/'include'
 * @modify
 * 			1、  增加了rule规则                             yanggqm      @18/05/18
 */

function filterEmptyRows(tableId, keys) {
  var rule = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'except';
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.removeEmptyRows({
    keys: keys,
    rule: rule
  });
}
/**
 * 过滤孙表数据
 * @param {string} tableId  子表id
 * @param {object} grandTableConfig  
 
 * grandTableConfig:
 * 
 *  { 
 *      grandTableCode1: { keys:[], rule='except' },
 *      grandTableCode2: { keys:[], rule='except' },
 *  }
 */

function filterEmptyGrandRows(tableId, grandTableConfig) {
  var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.filterEmptyGrandRows(grandTableConfig, shouldForceUpdate);
}
/**
 * bbq
 * 33、通过传入的键过滤不想要的数据
 * @param  tableId   meta的id号
 * @param  keys      排除的项（根据columns里） 可数组可字符串也可不传
 */

function getAllRowsRemoveKeys(tableId, keys) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  return store.getAllRowsRemoveKeys(keys);
}
/**
 * 关闭所有行展开
 * @param  tableId   meta的id号
 */

function closeExpandedRow(tableId) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  store.setStore('expandedRowKeys', []);
}
/*
 * bbq
 * 36、获取缓存数据
 * @param  tableId   meta的id号
 * mofify by zhanghengh @18/05/05
 * mofify by zhanghengh @18/05/15 将初始值该会 ACHE_ORIGIN_DATA
 */

function getCacheData(tableId) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return JSON.parse(JSON.stringify(store.getCache(['base'])));
}
/*
 * bbq
 * 37、把index行设置为选中行
 * @param  tableId   meta的id号
 * @param  index     index 行序号-1
 */

function focusRowByIndex(tableId, index) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  } // index = store.getTrueRowIndex({ rowIndex: index });
  // TODO setCurrnetInfo


  store.setTableProps('focusIndex', index, false);
  store.setTableProps('currentIndex', index, true, function () {
    store.setTableProps('focusIndex', -1, false);
  });
}
/**
 * TODO
 * 38、获取以模板数据为基准的全数组数据
 * @param  tableId   meta的id号
 * mofify by zhanghengh  增加flag标识位，判断是否为多表头，默认是false，不是多表头
 */

function getMixinMetaData(tableId) {
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.getMixinMetaOfData();
}
/**
 * bbq
 * 40、搜索表格中特定数据的方法，
 * @param {*} tableId 表格id
 * @param {*} key 所要搜索表格数据中的key 字符串或字符串数组
 * @param {*} value 所要搜索表格数据中的value 字符串
 * return  返回值是搜索到的表格数据  object
 * mofify by zhanghengh @18/05/116 修改之前的逻辑，改为每次从全数据筛选
 */

function getFilterRows(tableId, key, value, allRows) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  var langCode = Object(api_index_["getCookie"])('langCode') || 'simpchn';
  return store.getFilterRows(key, value, langCode);
}
/**
 * bbq
 * 41、搜索设置搜索后表格数据的方法，
 * @param {*} tableId 表格id
 * @param {*} key 所要搜索表格数据中的key 字符串或字符串数组
 * @param {*} value 所要搜索表格数据中的value 字符串
 * @param {*}  isShowAll 筛选不到是否展示全数据  true 或false
 * mofify by zhanghengh @18/05/16 修改之前的逻辑，每次筛选，保存当前全数据
 */

function setFiltrateTableData(tableId, key, value, isShowAll) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  var langCode = Object(api_index_["getCookie"])('langCode') || 'simpchn';
  return store.setFiltrateTableData(key, value, isShowAll, langCode, tableId);
}
/**
 * TODO
 * 批量更改表格数据42
 * add by zhangheng 18/5/4
 * @param {*} tableId 表格id
 */

function batchChangeTableData(tableId) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return null;
  }

  return store.batchChangeTableData();
}
/**
 * bbq
 * add by yanggqm @18/05/15
 * 45、更新多行的数据（根据index值）
 * @param  tableId   meta的id号
 * @param  record    插入的数据数组
 * @param  flag      是否缓存新加入的数据
 * @param  autoFocus 表格重新渲染后是否需要聚焦到之前聚焦的元素 主要解决快捷键连续性操作的问题
 */

function updateDataByIndexs(tableId, record) {
  var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var autoFocus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  store.updateTableDataByIndexs(record, flag, !this.isUpdatePage);
  store.clearValidated(); // TODO
  //     let cell = autoFocus && getCellDom(tableId);
  //   let cellIdentity = cell && getCellIdentity(cell);
}
/**
 * bbq
 * add by yanggqm @18/05/15
 * 46、插入多行的数据（根据index值）
 * @param  tableId   meta的id号
 * @param  record    插入的数据数组
 * @param  autoFocus 表格重新渲染后是否需要聚焦到之前聚焦的元素 主要解决快捷键连续性操作的问题

 */

function insertDataByIndexs(tableId, record) {
  var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var autoFocus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  } // 由于内部是true  所以这里默认要为false


  store.insertDataByIndexs(record, flag, !this.isUpdatePage); // TODO
  //     let cell = autoFocus && getCellDom(tableId);
  //   let cellIdentity = cell && getCellIdentity(cell);

  return {
    // ...myCardScope.state.table,
    rows: store.getData()
  };
}
/**
 * bbq
 * add by yanggqm @18/05/15
 * 47、根据index设置行数据的状态
 * @param  tableId   meta的id号
 * @param  record    插入的数据数组
 */

function setRowStatusByIndexs(tableId, record) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  store.setRowStatusByIndexs(record, true);
}
/**
 * bbq
 * add by yanggqm @18/06/07
 * 51、 多行数据插入到index行后
 * @param  tableId   meta的id号
 * @param  data      多行为数组。
 * @param  index     行序号-1 index
 */

function insertRowsAfterIndex(tableId, data, index) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  store.insertRowsAfterIndex(data, index);
}
/**
 * bbq
 * add by yanggqm @18/05/29
 * 50、 设置单元格为编辑态（同时光标定位）
 * @param  tableId   meta的id号
 * @param  index     行序号-1 index
 * @param  key       键值
 * @param  flag      编辑性 默认为true  为编辑态
 */

function setTdEditByIndex(tableId, index, key) {
  var flag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var isUpdate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  store.setCellProps({
    attrcode: key,
    rowIndex: index,
    shouldForceUpdate: isUpdate,
    value: {
      isEdit: flag
    }
  });
}
/**
 * bbq
 * add by yanggqm @18/06/08
 * 52、根据index设置表格某行某个字段值
 * @param  tableId   meta的id号
 * @param  index     行序号-1，从0开始
 * @param  origin    多键组成的对象，例如： {key1: {display: '', value: ''}, key2: {display: ''}}, key2: {display: '', value: '', scale: ''}}
 * motify zhanghengh 将批改数据重新缓存
 */

function setValByKeysAndIndex(tableId, index) {
  var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  var row = store.getRows({
    rowIndexs: [index]
  })[0];
  var rowKey = store.getTableProps('rowKey');

  if (!row) {
    return console.warn('unknow row data');
  }

  row.status == ROW_STATUS.origin && store.setRowProps({
    rowIndex: index
  }, {
    status: ROW_STATUS.edit
  }, false);

  for (var key in origin) {
    store.setCellValue({
      attrcode: key,
      rowIndex: index,
      shouldForceUpdate: false,
      value: origin[key]
    }); // 将批改数据重新缓存 有问题看一下 TODO
    // if (!isUndefined(origin[key].value) || !isUndefined(origin[key].display)) {
    //     this.batchData[tableId] = {
    //       batchChangeIndex: index,
    //       batchChangeKey: key,
    //       batchChangeValue: !isUndefined(origin[key].value) ? origin[key].value : null,
    //       batchChangeDisplay: !isUndefined(origin[key].display) ? origin[key].display : null
    //     };
    //   }
  }

  if (!this.isUpdatePage) {
    store.refresh();
  }
}
/**
 * TODO
 * add by yanggqm @18/06/09
 * 53、设置所有左侧复选禁/启用
 * @param  tableId     表格id
 * @param  flag        是否禁用 true 或false
 */

function setAllCheckboxAble(tableId) {
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var checkInfo = store.getCheckInfo();
  checkInfo.disabledAll = !flag;
  store.setCheckInfo({
    checkInfo: checkInfo,
    shouldForceUpdate: false
  });
  var data = store.getData();
  var rowKey = store.getTableProps('rowKey'); // TODO
  // add by bbqin 禁用所有checkbox时  先判断是否是聚焦的 聚焦就将焦点 移动一下
  // let activeEl = document && document.activeElement;
  // let container = document.getElementById(`hot-key-${tableId}`);
  // if (
  //     container &&
  //     container.contains(activeEl) &&
  //     activeEl.type === "checkbox"
  // ) {
  //     document.body.focus();
  // }

  data.forEach(function (item) {
    store.setRowProps({
      rowKeyValue: item[rowKey]
    }, {
      disabled: !flag
    }, false);
  }); //  更新

  if (!this.isUpdatePage) {
    store.refresh();
  }
}
/**
 * bbq
 * add by yanggqm @18/06/26
 * 57、设置多个表格数据
 * @param  tableId   meta的id号
 * @param  data      传入的data数据
 * 解决思路：
 * 		1、给不同的tableId配对应的data
 * 		2、不论第几次给tableId对应table来setTableData，都要把最新的data存下来
 *      3、date的数据结构为 {rows: []}
 */

function setMulTablesData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var callback = arguments.length > 1 ? arguments[1] : undefined;

  for (var key in data) {
    var store = existenceCheck.call(this, key);

    if (!store) {
      return [];
    }

    var originData = JSON.parse(JSON.stringify(data[key]));
    originData.rows = store.formatData(originData.rows);
    store.setCache(['base'], JSON.parse(JSON.stringify(originData)));
    store.setCache(['all'], null);
    var oldData = store.getData(); // 清理旧值

    store.clearRowsOldValue({
      rows: oldData
    }); // 设置数据

    store.setData({
      data: originData.rows,
      shouldForceUpdate: true
    }); // 设置值之后  存旧值

    var newData = store.getData();
    store.saveRowsOldValue({
      rows: newData
    });
    isFunction(callback) && callback(); // if (!this.myTable[key]) {
    //     // 给每个控件赋初始值
    //     let rows = originData.rows;
    //     _saveOldValue.call(this, { rows, tableId: key });
    //     this.myTableData[key] = originData;
    //     isFunction(callback) && callback.call(this, { ...this.output }, data);
    //     _saveOriginCache(key, originData);
    //     _saveAllData(key, null); // TODO 缓存表格初始全数据 zh
    // }
  }
}
/**
 * bbq
 * add by yanggqm @18/07/05
 * 58、根据index获取行数据
 * @param  tableId   meta的id号
 * @param  index     index值 行序号-1
 */

function getRowsByIndexs(tableId, index) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.getRows({
    rowIndexs: index
  });
} // TODO

function getAllTableRequire(tableIds) {
  var _this8 = this;

  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var errorInfo = {
    key: {},
    label: {},
    ids: []
  };

  if (!isArray(tableIds) && !isString(tableIds) && !isUndefined(tableIds)) {
    warningOnce(!isArray(tableIds) && !isString(tableIds) && !isUndefined(tableIds), '不传检测所有表，传入字符串检测当前表，传入数组检测数组中的每一项，其他格式错误');
    return errorInfo;
  }

  var json = this.cardTableDataSource._langJson || {};
  var meta = this.state.meta;
  var gridrelation = meta.gridrelation,
      containerrelation = meta.containerrelation;

  if (containerrelation) {
    console.log('current meta include mutil containerrelation');
  }

  tableIds = !isUndefined(tableIds) ? isArray(tableIds) ? tableIds : [tableIds] : null; // 校验

  var validateFailed = {};
  var firstValidateFaild = {};

  var _loop2 = function _loop2(tableId) {
    var idInfo = gridrelation[tableId];
    errorInfo.key[tableId] = {};
    var tableName = meta[tableId]['name'] || json['table0010']; //  校验

    validateFailed[tableId] = validateFailed[tableId] || {};
    firstValidateFaild[tableId] = firstValidateFaild[tableId] || [];
    var store = existenceCheck.call(_this8, tableId);
    var rowKey = store ? store.getTableProps('rowKey') : 'rowid';

    if (!tableIds) {
      errorInfo.ids.push(tableName);
    } else {
      tableIds.includes(tableId) && errorInfo.ids.push(tableName);
    }

    var tableLabel = "".concat(json['table007'], "_") + tableName + ' > ';
    errorInfo.label[tableLabel] = {}; // 筛选之前的代码
    // const tableData =
    //   this.myTable[tableId] && this.myTable[tableId].state ? this.myTable[tableId].state.table : { rows: [] };

    var rows = getAllRows.call(_this8, tableId);
    var tableDataRows = rows.filter(function (item) {
      return item.status != ROW_STATUS["delete"];
    }); // destEditAreaCode是侧拉项  tabRelation为页签项

    var _idInfo$tabRelation = idInfo.tabRelation,
        tabRelation = _idInfo$tabRelation === void 0 ? [] : _idInfo$tabRelation;

    if (tabRelation.length) {
      tabRelation.forEach(function (idMain) {
        var tabId = idMain + '_TAB';
        var tabName = meta[idMain]['name'] || json['table009'];
        var tabLabel = "".concat(tabName, "(").concat(json['table008'], ")") + ' ： ';
        errorInfo.key[tableId][tabId] = {};
        errorInfo.label[tableLabel][tabLabel] = {};
        validateFailed[tableId][idMain] = {}; // idMain 为主表内的不同页签  itemsMain可能会多表头

        var itemsMain = isObject(meta[idMain]) ? meta[idMain].items : [];

        if (flag) {
          itemsMain = itemsMain.getArrayData ? itemsMain.getArrayData() : _getAllItem(itemsMain); // 处理侧拉多表头
        } // itemsMain  兼容


        itemsMain = itemsMain.getArrayData ? itemsMain.getArrayData() : itemsMain;
        itemsMain.forEach(function (item) {
          if (!!item.required && !!item.visible && tableDataRows.length > 0) {
            tableDataRows.forEach(function (val, index) {
              var cellLabel = "".concat(json['table_first']).concat(index + 1).concat(json['table_row'], "\uFF1A");
              errorInfo.key[tableId][tabId][index] = errorInfo.key[tableId][tabId][index] || {};
              errorInfo.label[tableLabel][tabLabel][cellLabel] = errorInfo.label[tableLabel][tabLabel][cellLabel] || {};

              if (val.values[item.attrcode]) {
                var checkedValue = val.values[item.attrcode].value;

                if (isWrong(checkedValue)) {
                  errorInfo.key[tableId][tabId][index][item.attrcode] = item.label;
                  errorInfo.label[tableLabel][tabLabel][cellLabel][item.label] = ' 为空'; // 有就是有没有就是没有  给页签上判断用

                  validateFailed[tableId][idMain][val[rowKey]] = validateFailed[tableId][idMain][val[rowKey]] || {};
                  validateFailed[tableId][idMain][val[rowKey]][item.attrcode] = item.attrcode;

                  if (!firstValidateFaild[tableId].length) {
                    firstValidateFaild[tableId] = [idMain, val[rowKey], item.attrcode];
                  }
                }
              } else {
                errorInfo.key[tableId][tabId][index][item.attrcode] = item.label;
                errorInfo.label[tableLabel][tabLabel][cellLabel][item.label] = ' 为空'; // 有就是有没有就是没有  给页签上判断用

                validateFailed[tableId][idMain][val[rowKey]] = validateFailed[tableId][idMain][val[rowKey]] || {};
                validateFailed[tableId][idMain][val[rowKey]][item.attrcode] = item.attrcode;

                if (!firstValidateFaild[tableId].length) {
                  firstValidateFaild[tableId] = [idMain, val[rowKey], item.attrcode];
                }
              }
            });
          }
        });
      });
    }
  };

  for (var tableId in gridrelation) {
    _loop2(tableId);
  } //console.log(errorInfo);


  errorInfo.validateFailed = validateFailed;
  errorInfo.firstValidateFaild = firstValidateFaild;
  return errorInfo;
}
/**52
 * 返回手动选中过的的单元格信息
 * add by  zhangheng 18/07/22
 */

function getTableItemData(tableId) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  } // {
  //     batchChangeIndex,
  //     batchChangeKey,
  //     batchChangeValue,
  //     batchChangeDisplay,
  // }


  return store.getCache('oldBatchData');
}
/**53
 * add zhanghengh 18/7/30
 * 设置某些表格，某些列的精度
 * add by  zhangheng 18/07/22  这个结构是根据崔松杰的方法返回的，又问题可以问问他。。。
 * list数据结构   [{areacode: 'tableid', filedcode: 'colkey', scale: "2"}, ....]
 */

function setColScale(list) {
  var _this9 = this;

  list.forEach(function (eve) {
    var areacode = eve.areacode,
        fieldcode = eve.fieldcode,
        scale = eve.scale;

    _this9.state.meta[areacode].items.forEach(function (item) {
      if (item.attrcode === fieldcode) {
        item.scale = scale;
      }
    });
  });
  /**重新设置模版精度*/

  this.meta.setMeta(this.state.meta);
}
/**55
 * add zhanghengh 18/8/2
 * 判断哪列隐藏
 * tableId
 * colKey  所有检测的列字段
 */

function checkVisible(tableId, colKey) {
  var isVisible = false;
  this.state.meta[tableId].items.forEach(function (eve) {
    //获取合计行的列配置
    var visible = eve.visible,
        attrcode = eve.attrcode,
        children = eve.children;

    if (!isUndefined(children)) {
      //判断和并列的情况
      children.forEach(function (item) {
        var visible = item.visible;

        if (colKey === attrcode && visible) {
          isVisible = true;
        }
      });
    } else if (colKey === attrcode && visible) {
      isVisible = true;
    }
  });
  return isVisible;
} // 校验孙表
// tableId: {parentId: []}

function getChildTableRequired() {
  var _this10 = this;

  var parentIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var childRowKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rowid';

  if (!parentIds) {
    console.log('not get tableId');
  }

  var json = this.cardTableDataSource._langJson || {};
  var meta = this.state.meta;
  var gridrelation = meta.gridrelation,
      containerrelation = meta.containerrelation;

  if (containerrelation) {
    console.log('current meta include mutil containerrelation');
  } // 整表校验


  var allErrorInfo = []; // 可能会有效率问题

  var _loop3 = function _loop3(parentId) {
    var childIds = parentIds[parentId] || [];
    var parentStore = existenceCheck.call(_this10, parentId); // 所有子表行

    var parentData = parentStore && parentStore.getViewData('filter');

    if (parentData) {
      // 所有孙表数据
      var grandTableDatas = parentStore.getStore('grandTable') || {}; // console.log(grandTableData, parentData);

      var parentRowKey = parentStore.getTableProps('rowKey') || 'rowid'; // 当前表

      var parentErrorInfo = [];
      parentData.forEach(function (prow, pindex) {
        var grandTableData = grandTableDatas[prow[parentRowKey]] || {};

        if (grandTableData) {
          // 校验缓存
          var errorInfo = {
            key: {},
            label: {},
            ids: []
          };
          var validateFailed = {};
          var firstValidateFaild = {};
          childIds.forEach(function (tableId) {
            var idInfo = gridrelation[tableId] || {};
            errorInfo.key[tableId] = {};
            var tableName = meta[tableId]['name'] || json['table0010']; //  校验

            validateFailed[tableId] = validateFailed[tableId] || {};
            firstValidateFaild[tableId] = firstValidateFaild[tableId] || {}; // 获取孙表的rowKey

            var store = existenceCheck.call(_this10, tableId);
            var childRowKey = store ? store.getTableProps('rowKey') : childRowKey;
            errorInfo.ids.push(tableName);
            var tableLabel = "".concat(json['table007'], "_") + tableName + ' > ';
            errorInfo.label[tableLabel] = {}; // 筛选之前的代码

            var rows = (grandTableData[tableId] || {}).rows || [];
            var tableDataRows = rows.filter(function (item) {
              return item.status != ROW_STATUS["delete"];
            }); // destEditAreaCode是侧拉项  tabRelation为页签项

            var _idInfo$tabRelation2 = idInfo.tabRelation,
                tabRelation = _idInfo$tabRelation2 === void 0 ? [tableId] : _idInfo$tabRelation2; // 共享页签

            if (tabRelation.length) {
              tabRelation.forEach(function (idMain) {
                var tabId = idMain + '_TAB';
                var tabName = meta[idMain]['name'] || json['table009'];
                var tabLabel = "".concat(tabName, "(").concat(json['table008'], ")") + ' ： ';
                errorInfo.key[tableId][tabId] = {};
                errorInfo.label[tableLabel][tabLabel] = {};
                validateFailed[tableId][idMain] = {}; // idMain 为主表内的不同页签  itemsMain可能会多表头

                var itemsMain = isObject(meta[idMain]) ? meta[idMain].items : [];
                itemsMain = itemsMain.getArrayData ? itemsMain.getArrayData() : _getAllItem(itemsMain); // 处理侧拉多表头
                // itemsMain  兼容

                itemsMain = itemsMain.getArrayData ? itemsMain.getArrayData() : itemsMain;
                itemsMain.forEach(function (item) {
                  if (!!item.required && !!item.visible && tableDataRows.length > 0) {
                    tableDataRows.forEach(function (val, index) {
                      var cellLabel = "".concat(json['table_first']).concat(index + 1).concat(json['table_row'], "\uFF1A");
                      errorInfo.key[tableId][tabId][index] = errorInfo.key[tableId][tabId][index] || {};
                      errorInfo.label[tableLabel][tabLabel][cellLabel] = errorInfo.label[tableLabel][tabLabel][cellLabel] || {};

                      if (val.values[item.attrcode]) {
                        var checkedValue = val.values[item.attrcode].value;

                        if (isWrong(checkedValue)) {
                          errorInfo.key[tableId][tabId][index][item.attrcode] = item.label;
                          errorInfo.label[tableLabel][tabLabel][cellLabel][item.label] = ' 为空'; // 有就是有没有就是没有  给页签上判断用

                          validateFailed[tableId][idMain][val[childRowKey]] = validateFailed[tableId][idMain][val[childRowKey]] || {};
                          validateFailed[tableId][idMain][val[childRowKey]][item.attrcode] = item.attrcode;

                          if (!Object.keys(firstValidateFaild[tableId]).length) {
                            firstValidateFaild[tableId][idMain] = {};
                            firstValidateFaild[tableId][idMain][val[childRowKey]] = item.attrcode;
                          }
                        }
                      } else {
                        errorInfo.key[tableId][tabId][index][item.attrcode] = item.label;
                        errorInfo.label[tableLabel][tabLabel][cellLabel][item.label] = ' 为空'; // 有就是有没有就是没有  给页签上判断用

                        validateFailed[tableId][idMain][val[childRowKey]] = validateFailed[tableId][idMain][val[childRowKey]] || {};
                        validateFailed[tableId][idMain][val[childRowKey]][item.attrcode] = item.attrcode;

                        if (!Object.keys(firstValidateFaild[tableId]).length) {
                          firstValidateFaild[tableId][idMain] = {};
                          firstValidateFaild[tableId][idMain][val[childRowKey]] = item.attrcode;
                        }
                      }
                    });
                  }
                });
              });
            }
          });
          errorInfo.validateFailed = validateFailed;
          errorInfo.firstValidateFaild = firstValidateFaild; // 行信息

          parentErrorInfo.push({
            index: pindex,
            rowKeyValue: prow[parentRowKey],
            info: "".concat(json['table_first']).concat(pindex + 1).concat(json['table_row'], "\uFF1A"),
            errorInfo: errorInfo
          });
        }
      }); // 表信息

      allErrorInfo.push({
        id: parentId,
        info: meta[parentId]['name'] || json['table0010'],
        row: parentErrorInfo
      });
    }
  };

  for (var parentId in parentIds) {
    _loop3(parentId);
  }

  return allErrorInfo;
}
function checkChildTableRequired() {
  var _this11 = this;

  var parentIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isReturnBool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var childRowKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'rowid';
  var allErrorInfo = getChildTableRequired.call(this, parentIds, childRowKey); // console.log(allErrorInfo, 'allErrorInfoallErrorInfoallErrorInfo');

  var json = this.cardTableDataSource._langJson || {};
  var isRequired = false; // 校验信息

  var toastMessage = []; // 被检验住的行

  var requiredRows = {
    isNoRequired: false
  }; // 校验信息

  allErrorInfo.forEach(function (pinfo) {
    requiredRows[pinfo.id] = {};

    if (pinfo.row) {
      // 缓存记录
      var grandValidateFailed = {};
      pinfo.row.forEach(function (rowInfo) {
        var parentLabel = pinfo.info + rowInfo.info; // 父表

        toastMessage.push('>>> ' + parentLabel);
        var _rowInfo$errorInfo = rowInfo.errorInfo,
            label = _rowInfo$errorInfo.label,
            ids = _rowInfo$errorInfo.ids,
            _rowInfo$errorInfo$va = _rowInfo$errorInfo.validateFailed,
            validateFailed = _rowInfo$errorInfo$va === void 0 ? {} : _rowInfo$errorInfo$va,
            _rowInfo$errorInfo$fi = _rowInfo$errorInfo.firstValidateFaild,
            firstValidateFaild = _rowInfo$errorInfo$fi === void 0 ? {} : _rowInfo$errorInfo$fi; // 记录

        grandValidateFailed[rowInfo.rowKeyValue] = validateFailed; // 被检验住的行

        var childRequiredRows = {
          isNoRequired: false
        };
        var messageWrong = []; //需要校验的表格

        messageWrong = Object.keys(label).filter(function (item) {
          return ids.some(function (item1) {
            return item.startsWith("".concat(json['table007'], "_").concat(item1));
          });
        });
        messageWrong.forEach(function (eve) {
          var labelItem = label[eve];
          childRequiredRows[eve] = {};
          Object.keys(labelItem).forEach(function (key) {
            childRequiredRows[eve][key] = {
              childRequiredRows: []
            };
            var labelItemChild = labelItem[key];
            var pagelabel = '';

            if (Object.keys(labelItemChild).length > 0 && Object.keys(labelItemChild).filter(function (key) {
              return Object.keys(labelItemChild[key]).length;
            }).length) {
              pagelabel = key;
            }

            toastMessage.push(pagelabel);
            Object.keys(labelItemChild).forEach(function (cont, index) {
              if (Object.keys(labelItemChild[cont]).length > 0) {
                childRequiredRows[eve][key]['childRequiredRows'].push(index);
                isRequired = true; //对输出的校验内容进行格式转化

                var str = cont + "".concat(Object.keys(labelItemChild[cont]).map(function (ele) {
                  return "[".concat(ele, "]");
                }).join('，'), "\uFF1B");
                toastMessage.push(str);
              }
            });
          });
        }); // 记录结果

        requiredRows[pinfo.id][rowInfo.index] = childRequiredRows;
      });

      if (isRequired) {
        // console.log(pinfo.id, grandValidateFailed);
        var store = existenceCheck.call(_this11, pinfo.id);
        store && store.setCache('grandValidateFailed', grandValidateFailed);
      }
    }
  }); // 如果没通过

  if (isRequired) {
    Object(api_index_["toast"])({
      content: json['table_no_empty'] + '：',
      color: 'danger',
      groupOperation: true,
      isNode: true,
      TextArr: [json['table0022'], json['table0023'], json['table0024']],
      groupOperationMsg: toastMessage.filter(function (message) {
        return message;
      }),
      mark: 'card-table-toastx'
    });
    return isReturnBool ? !isReturnBool : requiredRows;
  }

  return true;
}
/**
 * TODO
 * 59、根据id检测必输性
 * 要考虑 多表头 和 侧拉分组 和 多页签 这极端情况。
 * mofify by zhanghengh  增加flag标识位，判断是否为多表头，默认是false，不是多表头
 */

function checkTableRequired(tableIds) {
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var isReturnBool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var autoFocus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var json = this.cardTableDataSource._langJson || {};

  var _getAllTableRequire$c = getAllTableRequire.call(this, tableIds, flag),
      label = _getAllTableRequire$c.label,
      ids = _getAllTableRequire$c.ids,
      _getAllTableRequire$c2 = _getAllTableRequire$c.validateFailed,
      validateFailed = _getAllTableRequire$c2 === void 0 ? {} : _getAllTableRequire$c2,
      _getAllTableRequire$c3 = _getAllTableRequire$c.firstValidateFaild,
      firstValidateFaild = _getAllTableRequire$c3 === void 0 ? {} : _getAllTableRequire$c3;

  var messageWrong = []; //需要校验的表格

  var isRequired = false;
  var toastMessage = []; // 被检验住的行

  var requiredRows = {
    isNoRequired: false
  };
  messageWrong = Object.keys(label).filter(function (item) {
    return ids.some(function (item1) {
      return item.startsWith("".concat(json['table007'], "_").concat(item1));
    });
  });
  messageWrong.forEach(function (eve) {
    var labelItem = label[eve];
    requiredRows[eve] = {};
    Object.keys(labelItem).forEach(function (key) {
      requiredRows[eve][key] = {
        requiredRows: []
      };
      var labelItemChild = labelItem[key];
      var pagelabel = '';

      if (Object.keys(labelItemChild).length > 0 && Object.keys(labelItemChild).filter(function (key) {
        return Object.keys(labelItemChild[key]).length;
      }).length) {
        pagelabel = key;
      }

      toastMessage.push(pagelabel);
      Object.keys(labelItemChild).forEach(function (cont, index) {
        if (Object.keys(labelItemChild[cont]).length > 0) {
          requiredRows[eve][key]['requiredRows'].push(index);
          isRequired = true; //对输出的校验内容进行格式转化

          var str = cont + "".concat(Object.keys(labelItemChild[cont]).map(function (ele) {
            return "[".concat(ele, "]");
          }).join('，'), "\uFF1B");
          toastMessage.push(str);
        }
      });
    });
  });

  if (isRequired) {
    // validateFailed, firstValidateFaild // 四层数据
    console.log(validateFailed);

    for (var tableId in validateFailed) {
      var store = existenceCheck.call(this, tableId);
      var table = validateFailed[tableId];
      var isRefresh = false;

      if (store && table) {
        // 缓存状态
        store.setCache('validateFailed', validateFailed);
        store.setCache('firstValidateFaild', firstValidateFaild);

        for (var tabId in table) {
          var rows = table[tabId];

          if (rows) {
            for (var rowKeyValue in rows) {
              if (rowKeyValue) {
                var row = rows[rowKeyValue];

                if (row) {
                  for (var attrcode in row) {
                    store.setCellProps(rowKeyValue, attrcode, {
                      validated: false
                    }, false);
                  }
                }

                isRefresh = true;
              }
            }
          }
        }

        isRefresh && store.refresh();
      }
    } // 自动聚焦到首个


    if (firstValidateFaild && autoFocus) {
      var tableIdList = tableIds ? isArray(tableIds) ? tableIds : [tableIds] : tableIds || this.orderOfHotKey;
      var tabSelector = null,
          cellSelector = null; // 找到第一个

      tableIdList.some(function (tableId) {
        var cellInfo = firstValidateFaild[tableId];

        if (cellInfo && cellInfo.length > 0) {
          tabSelector = "#js_lightTabs_header_".concat(tableId, " [name=\"").concat(cellInfo[0], "\"] a");
          cellSelector = ".table-cell-wrapper[cellselectorkey=\"".concat(cellInfo[1], "@").concat(cellInfo[2], "\"] [tabindex=\"0\"]");
          return true;
        }
      });
      var tabElement = document.querySelector(tabSelector);
      tabElement && tabElement.click();
      setTimeout(function () {
        var cellElement = document.querySelector(cellSelector);

        if (cellElement) {
          cellElement.ncExecuteFocus = true;
          cellElement.focus();
          cellElement.ncExecuteFocus = false;
        }
      }, 300);
      console.log(tableIdList, firstValidateFaild, tabSelector, cellSelector);
    }

    Object(api_index_["toast"])({
      content: json['table_no_empty'] + '：',
      color: 'danger',
      groupOperation: true,
      isNode: true,
      TextArr: [json['table0022'], json['table0023'], json['table0024']],
      groupOperationMsg: toastMessage.filter(function (message) {
        return message;
      }),
      mark: 'card-table-toastx'
    });
    return isReturnBool ? !isReturnBool : requiredRows;
  }

  return true;
}
/**
 * bbq
 * add by zhanghengh @18/09/01  到时候让业务组试一下有问题在改
 * 61、给表格所用单元格设值
 * 通过传入的数据给单元格重新设值
 * rows 就是正常表格数据的格式  [{ status:v '1', rowid: '111111', values: { name: { value: 1, dispaly: 1, scale: '1' } }}]
 */

function setAllKeysVal(tableId, rows) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.setRowsCellValue({
    rows: rows,
    shouldForceUpdate: !this.isUpdatePage
  });
}
/**62
 * bbq
 * 设置当前点击行
 * add by  zhangheng 18/07/04
 * @param {*} tableId 表格id
 * index  索引
 */

function setClickRowIndex(tableId, data) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  store.setTableProps("currentInfo", data, false);
}
/**63
 * bbq
 * 获取当前点击行
 * add by  zhangheng 18/07/04
 * @param {*} tableId 表格id
 */

function getClickRowIndex(tableId) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.getTableProps("currentInfo");
}
/**
 * bbq
 * add by zhanghengh @18/09/12  到时候让业务组试一下有问题在改
 * 64、给表格所用单元格设值
 * 通过传入的数据给单元格重新设值
 * rows 就是正常表格数据的格式  [{ status:v '1', rowid: '111111', values: { name: { value: 1, dispaly: 1, scale: '1' } }}]
 */

function setSaveData(tableId, data) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  store.setRowsCellValue({
    rows: data.rows,
    shouldForceUpdate: !this.isUpdatePage
  });
  store.setCache(['base'], {
    rows: data.rows
  });
  store.setCache(['all'], null); // TODO 缓存表格初始全数据 zh
}
/**
 * bbq
 * 65、根据index获取某行数据
 */
//

function getDataByIndex(tableId, index) {
  if (!tableId || typeof index == 'undefined') {
    return;
  }

  var arrRows = getAllRows.call(this, tableId); // TODO 这里也可以用index取找真实index  然后再取值

  return arrRows[index];
}
/**
 * 66、根据传入数据更新表格数据  后台返回差异的结果的时候使用，配套使用，其他场景不能使用
 * data 格式{rows：[{ status:v '1', rowid: '111111', values: { name: { value: 1, dispaly: 1, scale: '1' } }}]}
 */
//

function updateDataByRowId(tableId, data) {
  var isDel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isCache = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  store.updateTableDataByRowId(data, isCache, !this.isUpdatePage, isDel);
  store.clearValidated();
  return {
    // ...this.myTable[tableId].state.table, // TODO
    rows: store.getData()
  };
}
/**67
 * 获取行的状态
 * add by  zhangheng 18/06/21
 * @param {*} tableId 表格id
 * @param {*} index 行索引   数组或者数字
 */

function getRowStatus(tableId, index) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.getRowProps({
    rowIndex: index
  }, 'status');
}
/****70 获得当前行****/

function getCurrentIndex(tableId) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.getTableProps('currentIndex');
}
/****
 * TODO
 * 71 差异更新Rowid 郭祉祺加  （各业务组后台返回数据应该相同，如果有需要应该可以暴露给业务组）   这个方法是基于后台数据完整的情况下，进行差异更新，与updatebyrowid 的逻辑相反，需要后台配合，谨慎使用
 * 在筛选模式下,调这个api直接更新总数据,然后取消掉筛选状态,先这样处理,如有问题在进行调整
 */

function updateDiffDataByRowId(tableId, data) {
  var isCache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isDel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var isAddStatus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  var rowKey = store.getTableProps('rowKey');

  if (Array.isArray(data.rows)) {
    // let rows = table.rows;
    var rows = getAllRows.call(this, tableId);
    var rowidMap = {};
    var deleteRow = [];
    rows.map(function (row) {
      rowidMap[row[rowKey]] = row;

      if (row.status == ROW_STATUS["delete"]) {
        deleteRow.push(row);
      }
    });
    data.rows.map(function (record, index) {
      var row = data.rows[index];
      var values = row.values;
      var rowid = record[rowKey];

      if (rowid && rowidMap[rowid]) {
        var rowStatus = row.status;
        var status = typeof rowStatus == 'undefined' || rowStatus == ROW_STATUS.origin ? ROW_STATUS.edit : rowStatus;
        Object.keys(values).forEach(function (key) {
          values[key] = compatible_objectSpread(compatible_objectSpread(compatible_objectSpread({}, rowidMap[rowid].values[key]), {
            display: null,
            value: null,
            scale: -1
          }), values[key]);
        });
        data.rows[index] = compatible_objectSpread(compatible_objectSpread({}, rowidMap[rowid]), row);
        data.rows[index].values = compatible_objectSpread(compatible_objectSpread({}, rowidMap[rowid].values), values);
        data.rows[index].status = status;
      } else {
        row.rowid = store.generateRowKey();

        if (isAddStatus) {
          row.status = ROW_STATUS.add; // 模版上设置了默认值时,给这里没有值的新增行设置上默认值
          // let sumItems = _sumItemsCode.call(this, tableId, false);

          var sumItems = store.getArrayMeta(tableId);
          sumItems.forEach(function (item) {
            var initialvalue = item.initialvalue,
                attrcode = item.attrcode;
            var hasInit = isObject(initialvalue);
            var cellValue = row.values[attrcode];

            if (cellValue && hasInit) {
              var display = cellValue.display,
                  scale = cellValue.scale,
                  value = cellValue.value;
              var initialCellValue = {
                display: display || initialvalue.display,
                scale: scale || initialvalue.scale,
                value: value || initialvalue.value
              };
              Object.assign(cellValue, initialCellValue);
            }
          });
        }
      }
    }); // 如果是更新，需要就删除行留下来，保存则不需要

    if (isDel) {
      data.rows = data.rows.concat(deleteRow);
    }

    store.setTableData(data, {
      isCache: false,
      isDel: true,
      shouldForceUpdate: !this.isUpdatePage
    }); // 清理一下数据  如果有问题  再和业务对一下

    var storeData = store.getStore(); // 郭祉祺让加的

    return {
      rows: storeData.data,
      checkInfo: storeData.checkInfo
    };
  }
}
/**72
 * TODO
 * 移动行的方法
 * add by  zhangheng 19/03/5
 * @param {*} tableId 表格id
 * @param {*} indexStart 开始索引位置
 * @param {*} indexEnd 结束索引位置
 */

function moveRow(tableId, indexStart, indexEnd) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.moveRow(indexStart, indexEnd);
}
/**73
 * TODO
 * 王策加
 * 通过Index设置表格某些行的编辑性
 * @param  tableId   meta的id号
 * @param  index     行序号-1 （数字数组或者数字）
 * @param  flag      开关true/false
 */

function setRowEditByIndex(_ref12) {
  var tableId = _ref12.tableId,
      index = _ref12.index,
      flag = _ref12.flag;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.setRowsCellPropsByIndex(index, {
    disabled: !flag
  });
}
/**
 *   //任亚军整理
 *      69      setModelEdit            设置行侧拉编辑性
 *      68      setColVisibleByKey      设置列显示隐藏
 *      67      setColsValue            设置列数据
 * *    16      openModel               打开侧拉窗
 *      17      closeModel              关闭侧拉窗
 * *    20      hideColByKey            隐藏列(根据key)
 * 		21      showColByKey            显示列(根据key)
 * *    25		  getColValue             获取列数据
 *      26		  setColValue             设置列数据
 * *    39      closeExpandedRow        关闭任何的展开视图
 * *    43      openListView            最大化多表中表体卡片列表
 * 		44 		  openMaxTable            最大化多表体表格
 * * 	48      getMetaValByKey         根据key键获取模板中数据
 * 		49      setColEditableByKey     设置某一列的编辑性
 * *    54		  getModalDataByIndex     获取侧拉数据(根据index)
 * 		55		  showEditAreaKey 		    设置侧拉某控件显隐
 * 		56      toggleCardTable         控制主表的收起展开
 * *    60      setQueryCondition       统一给表体和侧拉添加参照顾虑
 */

/**
 *  设置行侧拉编辑性
 * @author renyjk
 * @param  {string} tableId   meta的id号
 * @param  {string || array} key    字段编码
 * @param  {boolean}  flag      是否可编辑
 */

function setModelEdit(tableId, key, flag) {
  var _this12 = this;

  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  if (isString(key)) key = [key];
  var meta = store.getMeta();

  if (meta && meta.gridrelation && meta.gridrelation[tableId]) {
    var destEditAreaCode = meta.gridrelation[tableId].destEditAreaCode;

    if (isArray(destEditAreaCode)) {
      destEditAreaCode.forEach(function (editcode) {
        isArray(key) && key.forEach(function (code) {
          meta = setDestBrowseProps.call(_this12, editcode, meta, code, {
            disabled: !flag
          });
        });
      });
    }
  }

  store.setStore(['meta'], meta);
}

function setDestBrowseProps(destBrowseAreaCode, meta, code, props) {
  var items = meta[destBrowseAreaCode] && meta[destBrowseAreaCode].items;

  if (isArray(items)) {
    var itemIndex = items.findIndex(function (ele) {
      return ele.attrcode === code;
    });

    if (itemIndex !== -1) {
      items[itemIndex] = compatible_objectSpread(compatible_objectSpread({}, items[itemIndex]), props);
    }
  }

  return meta;
}
/**
 * 设置列的显示性
 * @author renyjk
 * @param {string} tableId
 * @param {object} data
 */


function setColVisibleByKey(tableId, data) {
  var _this13 = this;

  var store = existenceCheck.call(this, tableId);
  if (!store) return;

  if (isObject(data)) {
    var hideKeys = data.hideKeys;
    var showKeys = data.showKeys;
    var meta = store.getMeta(); //let mainAreaMeta = meta[tableId];

    var destBrowseAreaCode = '';
    var destEditAreaCode = [];

    if (meta.gridrelation && meta.gridrelation[tableId]) {
      //下拉模板
      destBrowseAreaCode = meta.gridrelation[tableId].destBrowseAreaCode; //侧拉模板

      destEditAreaCode = meta.gridrelation[tableId].destEditAreaCode;
    } //设置隐藏


    if (isArray(hideKeys) && hideKeys.length) {
      hideKeys.forEach(function (code) {
        store.setColumn(tableId, compatible_defineProperty({}, code, {
          visible: false
        }), false);

        if (destBrowseAreaCode) {
          meta = setDestBrowseProps.call(_this13, destBrowseAreaCode, meta, code, {
            visible: false
          });
        }

        if (isArray(destEditAreaCode) && destEditAreaCode.length) {
          destEditAreaCode.forEach(function (editcode) {
            meta = setDestBrowseProps.call(_this13, editcode, meta, code, {
              visible: false
            });
          });
        }
      });
    } //设置显示


    if (isArray(showKeys) && showKeys.length > 0) {
      showKeys.forEach(function (code) {
        store.setColumn(tableId, compatible_defineProperty({}, code, {
          visible: true
        }), false);

        if (destBrowseAreaCode) {
          meta = setDestBrowseProps.call(_this13, destBrowseAreaCode, meta, code, {
            visible: true
          });
        }

        if (isArray(destEditAreaCode) && destEditAreaCode.length > 0) {
          destEditAreaCode.forEach(function (editcode) {
            meta = setDestBrowseProps.call(_this13, editcode, meta, code, {
              visible: true
            });
          });
        }
      });
    } // 统一更新表格


    store.setStore(['meta'], meta);
  }
}
/**
 * 批量修改某列数据
 * @author renyjk
 * @param {string} tableId
 * @param {array} colArr
 */

function setColsValue(tableId, colArr) {
  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  var rows = getAllRows.call(this, tableId);

  if (rows.length) {
    rows = rows.map(function (item) {
      if (item.status === ROW_STATUS.origin) item.status = ROW_STATUS.edit;
      return item;
    });

    if (isArray(colArr) && colArr.length) {
      colArr.forEach(function (item) {
        var key = item.key,
            _item$data = item.data,
            data = _item$data === void 0 ? {} : _item$data;
        store.setColumn(tableId, compatible_defineProperty({}, key, data), false);
      });
    }
  }

  store.refresh();
}
/**
 * 打开侧拉
 * @author renyjk
 * @param {string} tableId
 * @param {string} type
 * @param {object} record
 * @param {number} index
 * @param {function} callback
 * @param {boolean} flag
 */

function openModel(tableId) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'browse';
  var record = arguments.length > 2 ? arguments[2] : undefined;
  var index = arguments.length > 3 ? arguments[3] : undefined;
  var callback = arguments.length > 4 ? arguments[4] : undefined;
  var flag = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  var meta = store.getMeta();
  var destEditAreaCode = [];

  if (meta.gridrelation && meta.gridrelation[tableId]) {
    destEditAreaCode = meta.gridrelation[tableId].destEditAreaCode;
  }

  var hideModel = destEditAreaCode.every(function (editAreaCode) {
    return !meta[editAreaCode].areaVisible;
  });

  if (hideModel) {
    //TODO
    Object(api_index_["toast"])({
      color: 'danger',
      groupOperation: true,
      isNode: true,
      //TextArr: [json['table0022'], json['table0023'], json['table0024']],
      // 无内容，模板中该内容已被隐藏
      // groupOperationMsg: [json['table0032']],
      mark: 'card-table-toastx'
    });
    return;
  }

  store.showSideBox(type, record, index);
  isFunction(callback) && callback(); //定位到当前编辑行
  //focusRowByIndex(tableId, index)
}
/**
 * 关闭侧拉
 * @author renyjk
 * @param {string} tableId
 */

function closeModel(tableId) {
  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  store.closeSideBox();
}
/**隐藏列
 * @author renyjk
 * @param {string} tableId
 * @param {string || array} key
 */

function hideColByKey(tableId, key) {
  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  if (isString(key)) key = [key];
  key.forEach(function (code) {
    store.setColumn(tableId, compatible_defineProperty({}, code, {
      visible: false
    }), false);
  }); // 统一更新一次

  store.refresh();
}
/**设置列属性
 * @author renyjk
 * @param {string} tableId
 */

function setColumn(tableId, value, isShouldUpdate) {
  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  store.setColumn(tableId, value, isShouldUpdate); // store.setColumn(tableId, { [code]: { visible: false } }, false);
}
/**显示列
 * @author renyjk
 * @param {string} tableId
 * @param {string || array} key
 */

function showColByKey(tableId, key) {
  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  if (isString(key)) key = [key];
  key.forEach(function (code) {
    store.setColumn(tableId, compatible_defineProperty({}, code, {
      visible: true
    }), false);
  }); // 统一更新一次

  store.refresh();
}
/**获取表格某列数据
 * @author renyjk
 * @param {string} tableId
 * @param {string} key
 * @param {boolean} flag  增加flag标识位，判断是否为多表头，默认是false，不是多表头
 *
 * flag参数好像没有用 ?? TODO
 *
 * @param {boolean} isDel  是否获得删除行的数据
 */

function getColValue(tableId, key) {
  var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isDel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  var rows = getAllRows.call(this, tableId);
  var newData = [];
  rows.forEach(function (item) {
    if (!isDel) {
      if (item.status !== ROW_STATUS["delete"]) {
        newData.push(item.values[key]);
      }
    } else {
      newData.push(item.values[key]);
    }
  });
  return JSON.parse(JSON.stringify(newData));
}
/**
 * 设置表格某列为同一个数据
 * @author renyjk
 * @param {string} tableId
 * @param {string} key
 * @param {object} obj
 */

function setColValue(tableId, key, _ref13) {
  var _this14 = this;

  var display = _ref13.display,
      value = _ref13.value,
      scale = _ref13.scale;
  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  var rows = getAllRows.call(this, tableId);
  rows = rows.map(function (item) {
    var rowid = item.rowid,
        status = item.status; // 已经被删除的行不处理

    if (status == ROW_STATUS["delete"]) {
      return item;
    }

    if (status == ROW_STATUS.origin) {
      item.status = ROW_STATUS.edit;
    }

    if (!isObject(item.values[key])) {
      item.values[key] = {};
    }

    if (!isUndefined(value)) {
      item.values[key].value = value; // 给新复制的行存旧值

      saveChangedRowsOldValue.call(_this14, tableId, rowid, key, value);
    }

    !isUndefined(display) && (item.values[key].display = display);
    !isUndefined(scale) && (item.values[key].scale = scale);
    return item;
  });
  store.setData({
    data: rows
  });
}
/**
 * TODO expandedRowKeys待处理
 * 最大化多表中表体卡片列表
 * @author renyjk
 * @param {string} tableId
 * @param {boolean} flag
 * @param {array} expandedRowKeys
 */

function openListView(tableId, flag, expandedRowKeys) {
  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  store.openListView(flag);
}
/**
 * 最大化多表中表格
 * @author renyjk
 * @param {string} tableId
 * @param {boolean} flag
 */

function openMaxTable(tableId, flag) {
  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  store.openMaxView(flag);
}
/**
 * 获取表格的最大化状态
 * @author renyjk
 * @param {string} tableId
 */

function isMaxView(tableId) {
  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  return store.isMaxView();
}
/**
  根据key键获取模板中数据
 * @author renyjk
 * @param {string} tableId
 * @param {string} key
 * @param {boolean} flag 增加flag标识位，判断是否为多表头，默认是false，不是多表头
 */

function getMetaValByKey(tableId, key) {
  var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  var items = store.getMeta()[tableId].items;

  if (isArray(items)) {
    var temp = [];

    if (flag) {
      temp = _getAllItem(items).filter(function (item) {
        return item.attrcode === key;
      });
    } else {
      temp = items.filter(function (item) {
        return item.attrcode === key;
      });
    }

    return temp.length > 0 ? temp[0] : null;
  }

  return null;
}
/**
  根据key键获取模板中数据
 * @author renyjk
 * @param {string} tableId
 * @param {string} key
 * @param {boolean} flag 增加flag标识位，判断是否为多表头，默认是false，不是多表头
 */

function setColEditableByKey(tableId, key) {
  var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  var meta = store.getMeta();
  var items = meta && meta[tableId] && meta[tableId].items;
  var destEditAreaCode = meta.gridrelation && meta.gridrelation[tableId] && meta.gridrelation[tableId].destEditAreaCode;

  if (isArray(items)) {
    // 处理多表头
    var fn = function fn(items, key) {
      items.map(function (item) {
        if (item.children) {
          fn(item.children, key);
        }

        if (item.attrcode === key || key.includes(item.attrcode)) {
          item.disabled = flag;
          /*兼容设置侧拉框同字段的编辑性start 米明天试试，看看好使不 之后在来完善先注释掉*/

          if (destEditAreaCode) {
            destEditAreaCode.forEach(function (eve) {
              //便利侧拉模版数组里的每项，所对应的模版
              meta[eve].items.forEach(function (formItem) {
                if (formItem.attrcode === item.attrcode) {
                  formItem.disabled = flag;
                }
              });
            });
          }
          /*兼容设置侧拉框同字段的编辑性end*/

        }
      });
    };

    fn(items, key);
    store.setMeta(meta);
  }
}
/**32
 * 共享  郭扬让加的，他们现在再用
 * 刷新表格高度  这是特殊场景使用，一般是表格上方部分，高度变化，表格需要不断适应时使用
 */

function updateTableHeight() {
  api_index_["PubSub"].publish(OTHERCOMPLETE, true);
}
/**
 * 根据index获取侧拉数据
 * @param  tableId   meta的id号
 * @param  index     行序号-1，从0开始
 */

function getModalDataByIndex(tableId, index) {
  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  var allRows = getAllRows.call(this, tableId);

  var editRows = _getEditRows(store, tableId);

  var editRowsCode = editRows.map(function (item) {
    return item.attrcode;
  });
  var result = {};

  if (allRows[index] && allRows[index].values) {
    var values = allRows[index].values;

    for (var key in values) {
      if (editRowsCode.includes(key)) {
        result[key] = values[key];
      }
    }
  }

  return result;
}
/**
 * 设置侧拉某控件显隐
 * @author renyjk
 * @param {string} tableId
 * @param {string} key
 * @param {boolean} flag
 */

function showEditAreaKey(tableId, key) {
  var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  var meta = store.getMeta();

  var editRows = _getEditRows(store, tableId);

  var _ref14 = [typeof key === 'string', isArray(key)],
      isStr = _ref14[0],
      isArr = _ref14[1];

  if (editRows && (isStr || isArr)) {
    editRows.map(function (elem) {
      if (isStr && elem.attrcode === key) {
        elem.visible = flag;
      }

      if (isArr && key.includes(elem.attrcode)) {
        elem.visible = flag;
      }
    });
    store.setMeta(meta);
  }
}
/**
 * 控制主表的收起展开
 * @author renyjk
 * @param {string} tableId
 * @param {boolean} flag
 */

function toggleCardTable(tableId) {
  var _this15 = this;

  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  tableId = isArray(tableId) ? tableId : [tableId];
  tableId.forEach(function (item) {
    var store = existenceCheck.call(_this15, item);

    if (store) {
      var tableVisible = store.getStore("tableSwitch").tableVisible;
      store.toggleTableShow(flag);

      if (tableVisible !== flag) {
        isFunction(store.onHeadAngleToggle) && store.onHeadAngleToggle(compatible_objectSpread(compatible_objectSpread({}, _this15.props), _this15.output), item, flag);
      }
    }
  });
}
/**
   统一给表体和侧拉添加参照顾虑
 * @author renyjk
 * @param {string} tableId
 * @param {object} data
 * data 就是要添加参照过滤的字段和对应参照过滤的数据格式 { name: QueryCondition, age: QueryCondition }
 */

function setQueryCondition(tableId, data) {
  var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var keys = Object.keys(data); //所要设置参照过滤的字段数组

  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  var meta = store.getMeta();
  var gridrelation = meta.gridrelation[tableId]; //模版配置项

  gridrelation.tabRelation.forEach(function (tabItem) {
    //遍历tab页的每个表体的对应字段的参照过滤
    meta[tabItem].items.forEach(function (item) {
      keys.forEach(function (key) {
        var attrcode = item.attrcode,
            children = item.children;

        if (!isUndefined(children)) {
          //判断和并列的情况
          children.forEach(function (child) {
            var attrcode = child.attrcode;

            if (key === attrcode) {
              item.queryCondition = data[key];
            }
          });
        } else {
          if (key === attrcode) {
            item.queryCondition = data[key];
          }
        }
      });
    });
  });

  if (isArray(gridrelation.destEditAreaCode)) {
    gridrelation.destEditAreaCode.forEach(function (formItem) {
      //遍历侧拉的每个部分的对应字段的参照过滤
      meta[formItem].items.forEach(function (item) {
        keys.forEach(function (key) {
          if (key === item.attrcode) {
            item.queryCondition = data[key];
          }
        });
      });
    });
  }

  store.setMeta(meta, tableId, shouldForceUpdate && !this.isUpdatePage);
} //---------------- 孙表API ----------------//

/**
 * 设置孙表数据
 * @author renyjk
 */

function setGrandTableData(_ref15) {
  var rowid = _ref15.rowid,
      parentId = _ref15.parentId,
      tableId = _ref15.tableId,
      data = _ref15.data,
      shouldForceUpdate = _ref15.shouldForceUpdate,
      callback = _ref15.callback,
      _ref15$isCache = _ref15.isCache,
      isCache = _ref15$isCache === void 0 ? true : _ref15$isCache,
      _ref15$isTop = _ref15.isTop,
      isTop = _ref15$isTop === void 0 ? false : _ref15$isTop,
      _ref15$isDiffUpdate = _ref15.isDiffUpdate,
      isDiffUpdate = _ref15$isDiffUpdate === void 0 ? false : _ref15$isDiffUpdate;
  var childStore = existenceCheck.call(this, tableId);
  if (!childStore) return;
  var parentStore = existenceCheck.call(this, parentId);
  if (!parentStore) return;
  parentStore.setGrandTableData({
    tableId: tableId,
    rowid: rowid,
    data: data,
    isCache: isCache,
    shouldForceUpdate: shouldForceUpdate,
    isDiffUpdate: isDiffUpdate
  });
  isFunction(callback) && callback(compatible_objectSpread(compatible_objectSpread({}, this.props), this.output), tableId);
}
/**
 * 获取全部孙表数据
 * @author renyjk
 */

function getAllGrandData(_ref16) {
  var parentId = _ref16.parentId,
      isDeepCopy = _ref16.isDeepCopy;
  var parentStore = existenceCheck.call(this, parentId);
  if (!parentStore) return;
  return parentStore.getAllGrandData(isDeepCopy);
}
function getViewGrandData(_ref17) {
  var parentId = _ref17.parentId,
      view = _ref17.view;
  var parentStore = existenceCheck.call(this, parentId);
  if (!parentStore) return;
  return parentStore.getViewGrandData(view);
}
/**
 * 删除完整的孙表数据中的数据
 * @author renyjk
 * parentId 父表id
 * rowidList rowid数组
 * delAll 是否全部删除
 */

function delCacheGrandData(_ref18) {
  var parentId = _ref18.parentId,
      _ref18$rowidList = _ref18.rowidList,
      rowidList = _ref18$rowidList === void 0 ? [] : _ref18$rowidList,
      _ref18$delAll = _ref18.delAll,
      delAll = _ref18$delAll === void 0 ? false : _ref18$delAll;
  var parentStore = existenceCheck.call(this, parentId);
  if (!parentStore) return;
  parentStore.deleteGrandData({
    rowidList: rowidList,
    delAll: delAll
  });
}
/**
 * 通过pkcode获取子表对应的rowid
 * @author renyjk
 */

function getRowIdFromPkcode(_ref19) {
  var parentId = _ref19.parentId,
      plcodeValue = _ref19.plcodeValue;
  var parentStore = existenceCheck.call(this, parentId);
  if (!parentStore) return;
  var pkcode = parentStore.getStore('cardTable_pkcode');
  var data = getAllRows.call(this, parentId);
  var rowid = '';

  if (data) {
    data.forEach(function (row) {
      if (row.values[pkcode] && row.values[pkcode].value === plcodeValue) {
        rowid = row.rowid;
      }
    });
  }

  return rowid;
} //-------------------- 内部方法--------------------//

/**
 * 拆解item项中有children的元素
 * @param  {Array}  items  传入的meta中items数组
 */

function _getAllItem(items) {
  if (!isArray(items)) return [];
  var list = [];

  var process = function process(tree) {
    tree.forEach(function (item) {
      var children = item.children,
          title = item.title,
          temp = _objectWithoutProperties(item, ["children", "title"]);

      if (!children) {
        list.push(temp);
      }

      children && process(children);
    });
  };

  process(items);
  return list;
}
/**
 * 侧拉表单分组获取所有相关的items
 */


function _getEditRows(store, tableId) {
  var meta = store.getMeta();
  var editTableId = meta.gridrelation.hasOwnProperty(tableId) ? meta.gridrelation[tableId].destEditAreaCode ? meta.gridrelation[tableId].destEditAreaCode : [] : []; // wangyang 强转数组

  if (Object.prototype.toString.call(editTableId) !== '[object Array]') {
    editTableId = Array(editTableId);
  }

  return editTableId.reduce(function (prev, editId) {
    var item = meta[editId] ? meta[editId].items : [];
    prev = [].concat(_toConsumableArray(prev), _toConsumableArray(item));
    return prev;
  }, []);
}
/**
 * 存储自定义的数据, 用于自定义列的筛选
 */


function saveFilterCustomColData(tableId, _ref20) {
  var attrcode = _ref20.attrcode,
      rowId = _ref20.rowId,
      value = _ref20.value;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.setCache(['customColData', attrcode, rowId], value);
}
/****74 获得当前行****/

function getSideParentCurrentIndex(tableId) {
  var store = existenceCheck.call(this, tableId);
  if (!store) return;
  return store.getStore(['tableSideBox', 'index']);
}
/**68
 * 获取行的状态
 * add by  zhangheng 18/06/21
 * @param {*} tableId 表格id
 * @param {*} index 行索引   数组或者数字
 */

function updateTable(tableIds, autoFocus) {
  var _this16 = this;

  tableIds = Array.isArray(tableIds) ? tableIds : [tableIds];
  tableIds.forEach(function (tableId) {
    //   let cell = autoFocus && getCellDom(tableId);
    //   let cellIdentity = cell && getCellIdentity(cell);
    var store = existenceCheck.call(_this16, tableId);

    if (!store) {
      return;
    } //store.setTableProps('focusIndex', -1, false);


    var data = store.getData();
    store.saveRowsOldValue({
      rows: data
    });
    var activeTableCode = store.getStore('activeTableCode'); //若是多页签表格 只更新当前激活页签对应table 组件

    if (activeTableCode === tableId) {
      store.refresh();
    } // lastCellItemFocus(cellIdentity);

  });
} // liuming excel 新方法

function updateAfterBatchChange(param) {
  var areaCode = param.areaCode;
  var store = existenceCheck.call(this, areaCode);

  if (!store) {
    return;
  }

  return store.updateAfterBatchChange(this, param);
} //内部使用，不让业务组用

function updateAndAddRows(param) {
  var tableId = param.tableId;
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  return store._updateAndAddRows(param);
}
/**
 *  根据wensocket推送值，更新表格数据
 * refreshData
 */

function compatible_updateDataByRefresh(tableId, pkname, refreshData, saga_errormesg) {
  var store = existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  if (Array.isArray(refreshData)) {
    var data = getAllRows.call(this, tableId, false);
    var refreshLen = refreshData.length;
    data.map(function (item, index) {
      var values = item.values;

      for (var i = 0; i < refreshLen; i++) {
        //找到相应行,更新对应字段的value
        if (values[pkname] && values[pkname].value === refreshData[i][pkname]) {
          for (var pop in refreshData[i]) {
            if (values[pop]) {
              values[pop].value = refreshData[i][pop];
            } else {
              values[pop] = {
                value: refreshData[i][pop]
              };
            } //有错误信息时，将错误信息数据放表格行


            if (pop === 'saga_status' && refreshData[i][pop] === '1' && saga_errormesg) {
              values.saga_errormesg = saga_errormesg;
            }
          }

          break;
        }
      }

      return item;
    });
    store.setData({
      data: data
    });
  }
}
function refresh(tableId) {
  var store = existenceCheck.call(this, tableId);

  if (store) {
    store.anoterTable();
  }
}
// CONCATENATED MODULE: ./src/platform/components/Table/appTable/CardTable/output.js
function CardTable_output_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CardTable_output_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CardTable_output_ownKeys(Object(source), true).forEach(function (key) { CardTable_output_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CardTable_output_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CardTable_output_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Descripttion: 
 * @version: 
 * @Author: bbq
 * @Date: 2020-07-15 20:27:32
 * @LastEditors: bbq
 * @LastEditTime: 2020-08-01 15:29:29
 */

 //console.log('CardTable----------------:', CardTable)
//const useCardTable = CardTable.useCardTable;

/**
 * 兼容旧版本创建表格方法
 * @param {string} mainCode 表格主区域编码
 * @param {object} config 表格业务配置
 */

function cardTableCompatible() {
  this.register("cardTable"); // 生成 this.cardTableDataSource[id]

  return CardTable_output_objectSpread({}, output_apiBindPage.call(this, CardTable_compatible_namespaceObject));
}

function output_apiBindPage(cardTableAPI) {
  var res = {};

  for (var _i = 0, _Object$keys = Object.keys(cardTableAPI); _i < _Object$keys.length; _i++) {
    var pop = _Object$keys[_i];
    res[pop] = cardTableAPI[pop].bind(this);
  }

  return res;
}

cardTableCompatible.component = card_table_index_default.a;
cardTableCompatible.displayName = "CardTable";
cardTableCompatible.unfinished = ["updateTable", "getTableItemData", "checkTableRequired"];
// EXTERNAL MODULE: external "@platform/simple-table/index"
var simple_table_index_ = __webpack_require__(56);
var simple_table_index_default = /*#__PURE__*/__webpack_require__.n(simple_table_index_);

// CONCATENATED MODULE: ./src/platform/components/Table/appTable/SimpleTable/compatible.js
function compatible_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = SimpleTable_compatible_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function SimpleTable_compatible_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SimpleTable_compatible_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SimpleTable_compatible_arrayLikeToArray(o, minLen); }

function SimpleTable_compatible_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SimpleTable_compatible_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SimpleTable_compatible_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SimpleTable_compatible_ownKeys(Object(source), true).forEach(function (key) { SimpleTable_compatible_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SimpleTable_compatible_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SimpleTable_compatible_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function compatible_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = compatible_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function compatible_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var useSimpleTable = simple_table_index_default.a.useSimpleTable;
var compatible_isObject = table_core_index_["utils"].isObject,
    compatible_warningOnce = table_core_index_["utils"].warningOnce,
    compatible_isUndefined = table_core_index_["utils"].isUndefined,
    compatible_isWrong = table_core_index_["utils"].isWrong,
    getPageSizeStorage = table_core_index_["utils"].getPageSizeStorage; // 页面其他区域变化表格重新计算标识

var compatible_OTHERCOMPLETE = 'otherComplete';
var BEFORECOMPLETE = 'beforeAreaChangeComplete';
/** 3   getTablePageInfo    获取分页信息**/

/** 4   openModel    显示录入表单**/

/** 5   closeModel    关闭录入表单**/

/** 6   setTableRender    设置某一列的render**/

/**7    setColScale 设置列精度******************
这个结构是根据崔松杰的方法返回的，又问题可以问问他。。。
 list数据结构   [{areacode: 'tableid', filedcode: 'colkey', scale: "2"}, ....]**/

/**8    checkVisible 检查显示******************/

/** 9   getAllTableData    获取表格全数据方法**/

/** 10   setTableValueByKeyAndRecord    设置表格数据**/

/** 11   hideColByKey    隐藏列**/

/** 12   showColByKey    显示列**/

/** 13   getCheckedRows    获取选中行**/

/** 14   selectAllRows    选中所有行**/

/** 15   reverseSelected    反转所有行的选中状态**/

/** 16   deleteTableRowsByIndex    通过行index删除行**/

/** 17   deleteTableRowsByRowId    通过行RowId删除行**/

/** 18   addTableRow    通过index新增行**/

/** 19   setTableValueBykey    通过key设置单元格的值**/

/** 20   setTableValueDisabled    通过key设置表格列的编辑性**/

/** 21   setTableValueRequired    通过key设置列是否必输**/

/** 22   focusTableRowByIndex    通过index聚焦行**/

/** 23   updateDataByIndexs    通过index更新多行的数据**/

/** 24   setValByKeyAndRowId    根据rowid设置表格某行某个字段值**/

/** 25   selectTableRows    设置某些行的选中状态**/

/** 26   getPks    获取某页的pks**/

/** 27   hasCacheData    判断列表是否有缓存数据**/

/** 28   deleteCacheId    删除 allpks**/

/** 29   addCacheId    新增 allpks**/

/** 30   updateTableData     通过rowid更新表格行数据**/

/** 31   setClickRowIndex     设置当前点击行**/

/** 32   getClickRowIndex     获取当前点击行**/

/** 33   setValByKeyAndIndex     根据index设置表格某行某个字段值**/

/** 34   updateDiffDataByIndex     差异更新（王策）**/

/** 35   updateTableHeight      共享  郭扬让加的，他们现在再用
 * 刷新表格高度  这是特殊场景使用，一般是表格上方部分，高度变化，表格需要不断适应时使用）**/

/** 36   getSortParam     获取当前表格,排序信息包括当前是多列还是单列排序, 排序的字段,和排序顺序
 * 这是产品李聪慧让加的, 为了解决单据打印时，列表对中字段排序产生的问题**/

/** 37   updateDataByRefresh      根据wensocket推送值，更新表格数据**/

function compatible_existenceCheck(id) {
  var metaStore = this.tableDataSource[id];

  if (!metaStore) {
    compatible_warningOnce(false, "\u6240\u64CD\u4F5C\u7684\u8868\u683C\u4E2D\u65E0ID\u4E3A".concat(id, "\u7684\u6570\u636E"));
    return;
  }

  return metaStore;
}
/** 1   createsimpleTable    创建表格**/


function createSimpleTable(moduleId) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var pageScope = this,
      store = pageScope.tableDataSource[moduleId];

  if (!store) {
    store = useSimpleTable(); // 如果有缓存值 则做一下  Store 的赋值操作  把setTableData里的else操作提到这里了

    if (pageScope.myTableData[moduleId]) {
      // store.setTableData(pageScope.myTableData[moduleId]); // TODO Check
      store.setTableProps('focusIndex', -1, false);
      delete pageScope.myTableData[moduleId];
    }
  }

  var _onRowClick = config.onRowClick,
      _onRowDoubleClick = config.onRowDoubleClick,
      _selectedChange = config.selectedChange,
      _onSelected = config.onSelected,
      _onSelectedAll = config.onSelectedAll,
      handlePageInfoChange = config.handlePageInfoChange,
      onBatchSelected = config.onBatchSelected,
      _tableModelConfirm = config.tableModelConfirm,
      others = compatible_objectWithoutProperties(config, ["onRowClick", "onRowDoubleClick", "selectedChange", "onSelected", "onSelectedAll", "handlePageInfoChange", "onBatchSelected", "tableModelConfirm"]);

  others.onBatchSelected = !onBatchSelected ? false : function (rows) {
    return onBatchSelected && onBatchSelected(SimpleTable_compatible_objectSpread(SimpleTable_compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, rows);
  }; //modelDatas

  var meta = store.getMeta(moduleId);

  if (meta) {
    store.setStore(['modelDatas', 'modelColumn'], meta);
  }

  others.high_filter = others.high_filter || {
    alloweFilter: others.alloweFilter
  }; // console.log(config);

  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(simple_table_index_default.a, {
    store: store,
    name: moduleId,
    output: pageScope.output,
    afterLangload: function afterLangload(json) {
      // console.log(this, json);
      pageScope.tableDataSource._langJson = json || {};
    },
    onRowClick: function onRowClick(record, outputIndex, e) {
      if (_onRowClick) {
        return _onRowClick.call(pageScope, SimpleTable_compatible_objectSpread(SimpleTable_compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, record, outputIndex, e);
      }
    },
    onRowDoubleClick: function onRowDoubleClick(record, outputIndex, e) {
      if (_onRowDoubleClick) {
        return _onRowDoubleClick.call(pageScope, record, outputIndex, SimpleTable_compatible_objectSpread(SimpleTable_compatible_objectSpread({}, pageScope.props), pageScope.output), e);
      }
    },
    onSelected: function onSelected(tableId, record, outputIndex, selected) {
      if (_onSelected) {
        _onSelected.call(pageScope, SimpleTable_compatible_objectSpread(SimpleTable_compatible_objectSpread({}, pageScope.props), pageScope.output), tableId, record, outputIndex, //outputIndex
        selected);
      }
    },
    selectedChange: function selectedChange(tableId, newLen, oldLen) {
      if (_selectedChange) {
        _selectedChange.call(pageScope, SimpleTable_compatible_objectSpread(SimpleTable_compatible_objectSpread({}, pageScope.props), pageScope.output), tableId, newLen, oldLen);
      }
    },
    onSelectedAll: function onSelectedAll(tableId, checkedAll, len) {
      if (_onSelectedAll) {
        _onSelectedAll.call(pageScope, SimpleTable_compatible_objectSpread(SimpleTable_compatible_objectSpread({}, pageScope.props), pageScope.output), tableId, checkedAll, len);
      }
    },
    onPageInfoChange: function onPageInfoChange(pks, total) {
      if (handlePageInfoChange) {
        handlePageInfoChange(SimpleTable_compatible_objectSpread(SimpleTable_compatible_objectSpread({}, pageScope.props), pageScope.output), config, pks, total);
      }
    },
    tableModelConfirm: function tableModelConfirm(data, type) {
      if (_tableModelConfirm) {
        _tableModelConfirm(SimpleTable_compatible_objectSpread(SimpleTable_compatible_objectSpread({}, pageScope.props), pageScope.output), data, type);
      }
    },
    onCellHyperlinkTo: function onCellHyperlinkTo(record, attrcode, value, tableId) {
      Object(api_index_["linkTo"])(pageScope.state.meta.pageid, tableId, attrcode, value.value);
    },
    config: others
  });
}
/** 2   setAllTableData    给表格设置所有数据**/

function setAllTableData(moduleId, data) {
  var isTop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var store = compatible_existenceCheck.call(this, moduleId);
  var prePageSize = getPageSizeStorage(this.state.meta, moduleId);

  if (!store) {
    this.myTableData[moduleId] = data;
    return;
  }
  /**
   * 处理筛选状态下的情况
   * 清空的表格筛选标志
   * 清空筛选状态下的表格全数据
   * 退出筛选状态
   */
  // TODO 筛选


  store.setStore('filterReset', true, false, function () {
    store.setStore('filterReset', false, false);
  });
  store.resetFilter(moduleId, false);
  var allpks = store.getStore(['allpks']),
      alltss = store.getStore(['alltss']),
      rows = [],
      pageInfo = store.getStore(['pageInfo']); //pageinfo

  if (data.hasOwnProperty('pageInfo') && !compatible_isWrong(data.pageInfo)) {
    // 前端重置后端返回的页码，初次为0，应该改为1，有问题在看看
    pageInfo = data.pageInfo;
    pageInfo.pageIndex = Number(data.pageInfo.pageIndex) + 1;
  } else if (data.rows && data.rows.length == 0) {
    pageInfo = {
      pageSize: prePageSize,
      pageIndex: 1,
      total: 0,
      totalPage: 1
    };
  } else if (!(allpks.length > 0)) {
    pageInfo = {
      pageSize: prePageSize,
      pageIndex: 1
    };
  }

  store.setStore('pageInfo', pageInfo, false); //allpks

  if (data.allpks) {
    allpks = data.allpks;
  } else if (data.rows && data.rows.length == 0) {
    allpks = [];
  }

  store.setStore('allpks', allpks, false); //alltss

  if (data.alltss) {
    alltss = data.alltss;
  }

  store.setStore('alltss', alltss, false); //props

  if (isTop) {
    var props = store.getStore('props');
    props.focusIndex = 0;
    store.setStore('props', props, false);
  } //   checkinfo 


  var crossPageSelectIndex = store.getStore(['checkInfo', 'crossPageSelectIndex']);
  var checkedAllpage = store.getStore(['checkInfo', 'checkedAllpage']);

  if (crossPageSelectIndex.size) {
    var selectPk = new Set(crossPageSelectIndex);
    var newIndex = new Set();
    selectPk.forEach(function (pk) {
      if (allpks.indexOf(pk) !== -1) {
        newIndex.add(pk);
      }
    });
    crossPageSelectIndex = newIndex;
  }

  var checkInfo = {
    checkedAll: false,
    //当前页全选标志
    indeterminate: false,
    //半选标志
    selectIndex: new Set(),
    //选中行
    disabledAll: false,
    checkedAllpage: checkedAllpage,
    //所有页全选
    crossPageSelectIndex: crossPageSelectIndex
  };
  store.setStore(['checkInfo'], checkInfo, false); //排序待写 清空排序

  var arrayColumns = store.getArrayMeta(moduleId);
  arrayColumns && store.clearSortStatus({
    columns: arrayColumns
  }); //筛选待写
  //rows

  rows = data.rows.map(function (e) {
    e.rowId = e.rowId || String(new Date().getTime()).slice(-5) + Object(api_index_["getSafeRandom"])().toString(12);
    return e;
  });
  store.setData(rows, true, function () {
    // 聚焦完成之后重置 避免一更新  直接跳到第一行
    store.setTableProps('focusIndex', -1, false);
    store.setStore('filterReset', false, false);
  }); // 跨页全选

  var config = store.getConfig();
  var crossPageSelect = config.crossPageSelect,
      pkname = config.pkname;

  if (crossPageSelect && pkname) {
    if (checkedAllpage) {
      store.setSelect(undefined, 'allpage');
    } else {
      var _rows = store.getData();

      var rowIdArr = [];

      _rows.forEach(function (row) {
        if (!row.values[pkname]) {
          console.error("\u884C\u6570\u636E\u4E2D\u6CA1\u6709pkname\u4E3A".concat(pkname, "\u7684value"));
          console.log(row);
          return;
        }

        var pk = row.values[pkname].value;

        if (crossPageSelectIndex.has(pk)) {
          rowIdArr.push(row['rowId']);
        }
      });

      store.setSelect(rowIdArr, 'set');
    }
  }
}
/** 3   getTablePageInfo    获取分页信息**/

function getTablePageInfo(moduleId) {
  var store = compatible_existenceCheck.call(this, moduleId);
  var prePageSize = getPageSizeStorage(this.state.meta, moduleId);

  if (!store) {
    return {
      pageIndex: 0,
      pageSize: prePageSize
    };
  }

  var pageInfo = store.getStore('pageInfo');
  var _pageInfo$pageIndex = pageInfo.pageIndex,
      pageIndex = _pageInfo$pageIndex === void 0 ? 0 : _pageInfo$pageIndex,
      _pageInfo$pageSize = pageInfo.pageSize,
      pageSize = _pageInfo$pageSize === void 0 ? prePageSize : _pageInfo$pageSize;
  pageSize = Number(pageSize);
  return {
    pageIndex: pageIndex > 0 ? pageIndex - 1 : 0,
    pageSize: pageSize
  };
}
/** 4   openModel    显示录入表单**/

function compatible_openModel(moduleId, type, record, index) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.openModal(type, record, index);
}
/** 5   closeModel    关闭录入表单**/

function closeModal(moduleId) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.closeModel();
}
/** 6   setTableRender    设置某一列的render**/

function setTableRender(moduleId, key, render) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.setColumn(moduleId, key, {
    render: render
  });
}
/**7    setColScale 设置列精度******************
这个结构是根据崔松杰的方法返回的，又问题可以问问他。。。
 list数据结构   [{areacode: 'tableid', filedcode: 'colkey', scale: "2"}, ....]**/

function compatible_setColScale(list) {
  var _this = this;

  list.forEach(function (eve) {
    var areacode = eve.areacode,
        fieldcode = eve.fieldcode,
        scale = eve.scale;
    var store = compatible_existenceCheck.call(_this, areacode);

    if (!store) {
      return;
    }

    var meta = store.getMeta();
    meta[areacode].items.forEach(function (item) {
      if (item.attrcode === fieldcode) {
        item.scale = scale;
      }
    });
    store.setMeta(meta);
  });
}
/**8    checkVisible 检查显示******************/

function compatible_checkVisible(moduleId, colKey) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var isVisible = false;
  var items = store.getMeta(moduleId);
  items.forEach(function (eve) {
    //获取合计行的列配置
    var visible = eve.visible,
        attrcode = eve.attrcode,
        children = eve.children;

    if (!compatible_isUndefined(children)) {
      //判断和并列的情况
      children.forEach(function (item) {
        var visible = item.visible;

        if (colKey === attrcode && visible) {
          isVisible = true;
        }
      });
    } else if (colKey === attrcode && visible) {
      isVisible = true;
    }
  });
  return isVisible;
}
/** 9   getAllTableData    获取表格全数据方法**/

function getAllTableData(moduleId) {
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var data = {
    pageInfo: store.getStore('pageInfo'),
    rows: store.getStore('rows'),
    model: store.getStore('modelDatas', 'showModal'),
    operType: store.getStore('modelDatas', 'operType'),
    checkedAll: store.getStore('checkInfo', 'checkedAll'),
    allpks: store.getStore('allpks')
  };
  return flag ? JSON.parse(JSON.stringify(data)) : data;
}
/** 10   setTableValueByKeyAndRecord    设置表格数据**/
//这个方法好像没有暴露出去，不知道有什么用，报错再说

function setTableValueByKeyAndRecord(moduleId, record, dist) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var newRecord = SimpleTable_compatible_objectSpread(SimpleTable_compatible_objectSpread({}, record), dist);

  var id = record.attrcode.value;
  var rows = store.getStore('rows');
  rows.map(function (item) {
    if (item.values.attrcode && id == item.values.attrcode.value) {
      item.values = SimpleTable_compatible_objectSpread({}, newRecord);
    }
  });
  store.setData(rows);
}
/** 11   hideColByKey    隐藏列**/

function compatible_hideColByKey(moduleId, key) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.showColumn(moduleId, key, false);
}
/** 12   showColByKey    显示列**/

function compatible_showColByKey(moduleId, key) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.showColumn(moduleId, key, true);
}
/** 13   getCheckedRows    获取选中行**/

function compatible_getCheckedRows(moduleId) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var selectIndex = store.getStore(['checkInfo', 'selectIndex']);
  var rows = store.getStore(['rows']); //兼容修改数据selected true的情况

  if (selectIndex.size === 0 && rows.length) {
    rows.forEach(function (row) {
      if (row.selected) {
        selectIndex.add(row.rowId);
      }
    });
  }

  var checkRows = [];
  var config = store.getConfig();
  var crossPageSelect = config.crossPageSelect,
      pkname = config.pkname;

  if (crossPageSelect && pkname) {
    var crossPageSelectIndex = store.getStore(['checkInfo', 'crossPageSelectIndex']);
    var pageInfo = store.getStore(['pageInfo']);
    var pageSize = pageInfo.pageSize;
    pageSize = Number(pageSize); // pageIndex = Number(pageIndex);
    // let currentPageStartIndex = pageSize * pageIndex - pageSize;
    // let currentPageEndIndex = pageSize * pageIndex - 1;

    var allpks = store.getStore(['allpks']);
    var alltss = store.getStore(['alltss']);
    var currentPagePkArr = [];
    rows.forEach(function (row) {
      var pk = row.values[pkname].value;
      currentPagePkArr.push(pk);
    });
    crossPageSelectIndex.forEach(function (item) {
      var row;
      var rowIndex = currentPagePkArr.indexOf(item);

      if (rowIndex !== -1) {
        var pkIndex = allpks.indexOf(item);
        row = {
          data: rows[rowIndex],
          index: pkIndex % pageSize,
          pageIndex: Math.floor(pkIndex / pageSize)
        };
      } else {
        var _pkIndex = allpks.indexOf(item);

        if (_pkIndex !== -1) {
          row = {
            data: {
              pk: allpks[_pkIndex],
              ts: alltss[_pkIndex]
            },
            index: _pkIndex % pageSize,
            pageIndex: Math.floor(_pkIndex / pageSize)
          };
        }
      }

      checkRows.push(row);
    });
  } else {
    // 取过滤之后视图的数据来做操作
    var data = store.getFilterData();
    data.forEach(function (row, index) {
      if (selectIndex.has(row.rowId)) {
        var checkRow = {
          data: row,
          index: index
        };
        checkRows.push(checkRow);
      }
    });
  }

  return checkRows;
}
/** 14   selectAllRows    选中所有行**/

function compatible_selectAllRows(moduleId, checked) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  } //跨页全选


  var config = store.getConfig();
  var crossPageSelect = config.crossPageSelect,
      pkname = config.pkname;

  if (crossPageSelect && pkname) {
    if (checked) {
      var allpks = store.getStore('allpks');
      store.setStore(['checkInfo', 'crossPageSelectIndex'], new Set(allpks), false);
    } else {
      store.setStore(['checkInfo', 'crossPageSelectIndex'], new Set(), false);
    }
  }

  if (checked) {
    store.setSelect(undefined, 'all');
  } else {
    store.setSelect(undefined, 'clear');
  }
}
/** 15   reverseSelected    反转所有行的选中状态**/

function compatible_reverseSelected(moduleId) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.setSelect(undefined, 'reverse');
}
/** 16   deleteTableRowsByIndex    通过行index删除行**/

function deleteTableRowsByIndex(moduleId, index) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.deleteTableRows(index);
}
/** 17   deleteTableRowsByRowId    通过行RowId删除行**/

function deleteTableRowsByRowId(moduleId, rowId) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.deleteTableRows(rowId, 'rowId');
}
/** 18   addRow    通过index新增行**/

function compatible_addRow(moduleId, data, index) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.addTableRows(data.rows, index);
}
/** 19   setTableValueBykey    通过key设置单元格的值**/

function setTableValueBykey(moduleId, key, data, type) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  if (type == 'refer') {
    store.setStore(['modelDatas', 'record', key], {
      display: data.refname,
      value: data.refpk
    }, true);
  } else {
    store.setStore(['modelDatas', 'record', key], {
      value: data,
      display: null
    }, true);
  }
}
/** 20   setTableValueDisabled    通过key设置表格列的编辑性**/

function setTableValueDisabled(moduleId, key, flag) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.setColumn(moduleId, key, {
    disabled: flag
  });
}
/** 21   setTableValueRequired    通过key设置列是否必输**/

function setTableValueRequired(moduleId, key, flag) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.setColumn(moduleId, key, {
    required: flag
  });
}
/** 22   focusRowByIndex    通过index聚焦行**/

function compatible_focusRowByIndex(moduleId, index) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.setTableProps('focusIndex', index, false);
  store.setTableProps('currentIndex', index, true, function () {
    store.setTableProps('focusIndex', -1, false);
  });
}
/** 23   updateDataByIndexs    通过index更新多行的数据**/

function compatible_updateDataByIndexs(moduleId, record) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var testDataType = Array.isArray(record);

  if (testDataType) {
    var tableData = store.getData();
    var rowidArr = [];
    record.forEach(function (item) {
      var index = item.index,
          data = item.data;

      if (index < 0) {
        console.error("index =".concat(index, ",\u5C0F\u4E8E0"));
        return;
      }

      if (compatible_isObject(data)) {
        var row = tableData[index];
        tableData[index] = Object.assign(row, data);
        rowidArr.push(tableData[index].rowId);
      }
    }); //判断勾选

    store.setData(tableData, false);
    store.setSelect(rowidArr, 'delete'); //解决NCC-41690

    return false;
  }
}
/** 24   setValByKeyAndRowId    根据rowid设置表格某行某个字段值**/

function compatible_setValByKeyAndRowId(moduleId, rowid, key, value) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.setCellValue({
    value: value,
    rowId: rowid,
    attrcode: key
  });
  return false;
}
/** 25   selectTableRows    设置某些行的选中状态**/

function selectTableRows(moduleId, index, flag) {
  var isCallBack = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var param = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var indexArr = Array.isArray(index) ? index : [index];

  var rowIdArr = _getRowIdByIndex.call(this, moduleId, indexArr);

  var pattern = param.pattern;

  if (flag) {
    store.setSelect(rowIdArr, pattern ? pattern : 'set');
  } else {
    store.setSelect(rowIdArr, 'delete');
  } // let config = store.getConfig()


  isCallBack && compatible_warningOnce(false, "\u8FD8\u6CA1\u5199");
}
/** 26   getPks    获取某页的pks**/

function getPks(moduleId, pageIndex, pageSize) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var pageInfo = store.getStore(['pageInfo']);
  var allpks = store.getStore(['allpks']);
  var currentPageIndex = pageInfo.pageIndex,
      currentPageSize = pageInfo.pageSize;
  var pks = [];
  var index = Number(compatible_isUndefined(pageIndex) ? currentPageIndex : pageIndex);
  var size = Number(compatible_isUndefined(pageSize) ? currentPageSize : pageSize);
  var start = (index - 1) * size;

  for (var i = start; i < start + size; i++) {
    if (allpks[i]) {
      pks.push(allpks[i]);
    } else {
      break;
    }
  }

  return pks;
}
/** 27   hasCacheData    判断列表是否有缓存数据**/

function hasCacheData(dataSource) {
  if (dataSource) {
    var mcData = api_index_["ViewModel"].getData(dataSource);

    if (mcData && mcData.simpleTable && mcData.simpleTable.rows && mcData.simpleTable.rows.length) {
      return true;
    }
  }

  return false;
}
/** 28   deleteCacheId    删除 allpks**/

function deleteCacheId(moduleId, pkvalue) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var allpks = store.getStore(['allpks']);

  if (Array.isArray(allpks) && allpks.length) {
    if (typeof pkvalue === 'string') {
      allpks = allpks.filter(function (item) {
        return item != pkvalue;
      });
    }

    if (Array.isArray(pkvalue) && pkvalue.length) {
      allpks = allpks.filter(function (item) {
        return !pkvalue.includes(item);
      });
    }

    store.setStore(['allpks'], allpks);
  }
}
/** 29   addCacheId    新增 allpks**/

function addCacheId(moduleId, pkvalue) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var allpks = store.getStore(['allpks']);

  if (Array.isArray(allpks)) {
    if (!allpks.includes(pkvalue)) {
      allpks.push(pkvalue);
    }

    store.setStore(['allpks'], allpks);
  }
}
/** 30   updateTableData     通过rowid更新表格行数据**/

function compatible_updateTableData(moduleId, data) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var checkData = compatible_isObject(data) && Array.isArray(data.rows);

  if (checkData) {
    // 处理rowId
    var allRows = store.getData();
    allRows.forEach(function (item) {
      var _iterator = compatible_createForOfIteratorHelper(data.rows),
          _step;

      try {
        var _loop = function _loop() {
          var row = _step.value;

          if (item.rowId == row.rowId) {
            // 状态为 1，2用返回的0代替
            Object.keys(item).forEach(function (key) {
              if (!compatible_isUndefined(row[key])) {
                item[key] = row[key];
              } else {
                delete item[key];
              }
            });
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });

    _setHeadCheckbox.call(this, moduleId, allRows, true);

    store.setData(allRows, false);
  }
}
/** 31   setClickRowIndex     设置当前点击行**/

function compatible_setClickRowIndex(moduleId, data) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.setTableProps("currentInfo", data);
}
/** 32   getClickRowIndex     获取当前点击行**/

function compatible_getClickRowIndex(moduleId) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  return store.getTableProps("currentInfo");
}
/** 33   setValByKeyAndIndex     根据index设置表格某行某个字段值**/

function compatible_setValByKeyAndIndex(moduleId, index, key, value) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.setCellValue({
    value: value,
    index: index,
    attrcode: key
  });
  return false;
}
/** 34   updateDiffDataByIndex     差异更新（王策）**/

function updateDiffDataByIndex(moduleId, data) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  var rows = store.getData();
  var testDataType = Array.isArray(data);

  if (testDataType) {
    data.forEach(function (item) {
      var index = item.index,
          values = item.values;

      if (compatible_isObject(values)) {
        Object.keys(values).forEach(function (key) {
          rows[index].values[key] = SimpleTable_compatible_objectSpread(SimpleTable_compatible_objectSpread({}, rows[index].values[key]), values[key]);
        });
      }
    });
    store.setData(rows);
  }
}
/** 35   updateTableHeight      共享  郭扬让加的，他们现在再用
 * 刷新表格高度  这是特殊场景使用，一般是表格上方部分，高度变化，表格需要不断适应时使用）**/

function compatible_updateTableHeight() {
  api_index_["PubSub"].publish(compatible_OTHERCOMPLETE, true);
}
function beforeAreaChangeHeight() {
  api_index_["PubSub"].publishSync(BEFORECOMPLETE, true);
}
/** 36   getSortParam     获取当前表格,排序信息包括当前是多列还是单列排序, 排序的字段,和排序顺序
 * 这是产品李聪慧让加的, 为了解决单据打印时，列表对中字段排序产生的问题**/

function getSortParam(moduleId) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  return store.getStore(['sortParam']);
}
/** 37   updateDataByRefresh      根据wensocket推送值，更新表格数据**/

function SimpleTable_compatible_updateDataByRefresh(moduleId, pkname, refreshData, saga_errormesg) {
  var store = compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  if (Array.isArray(refreshData)) {
    // let table = myTable.state.table;
    var rows = store.getData();
    var refreshLen = refreshData.length;
    var data = rows.map(function (item) {
      var values = item.values;

      for (var i = 0; i < refreshLen; i++) {
        //找到相应行,更新对应字段的value
        if (values[pkname] && values[pkname].value === refreshData[i][pkname]) {
          //console.log("simpletable数据对比")
          for (var pop in refreshData[i]) {
            if (values[pop]) {
              values[pop].value = refreshData[i][pop];
            } else {
              values[pop] = {
                value: refreshData[i][pop]
              };
            } //有错误信息时，将错误信息数据放表格行


            if (pop === 'saga_status' && refreshData[i][pop] === '1' && saga_errormesg) {
              values.saga_errormesg = saga_errormesg;
            }
          }

          break;
        }
      }

      return item;
    });
    store.setData({
      data: data
    });
  }
}
/** 38   saveFilterCustomColData       存储自定义的数据, 用于自定义列的筛选**/

function compatible_saveFilterCustomColData(tableId, _ref) {
  var attrcode = _ref.attrcode,
      rowId = _ref.rowId,
      value = _ref.value;
  var store = compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.setCache(['customColData', attrcode, rowId], value);
} //内部方法
// 设置全选半选或者无状态

function _setHeadCheckbox(moduleId, data) {
  var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var store = compatible_existenceCheck.call(this, moduleId);
  var selectArr = new Set();
  var indeterminate = false,
      checkedAll = false;
  data.forEach(function (row, index) {
    if (row.selected) {
      selectArr.add(index);
    }
  });
  var selectArrLen = selectArr.size;
  var dataLen = data.length;

  if (selectArrLen) {
    if (selectArrLen === dataLen) {
      checkedAll = true;
    } else if (selectArrLen < dataLen) {
      indeterminate = true;
    }
  }

  store.setStore(['checkInfo', 'indeterminate'], indeterminate, false);
  store.setStore(['checkInfo', 'checkedAll'], checkedAll, shouldForceUpdate);
} //通过index获得rowid


function _getRowIdByIndex(moduleId, indexArr) {
  var store = compatible_existenceCheck.call(this, moduleId);
  var rows = store.getData();
  var rowIdArr = [];
  rows.forEach(function (row, index) {
    if (indexArr.includes(index)) {
      rowIdArr.push(row.rowId);
    }
  });
  return rowIdArr;
}
// CONCATENATED MODULE: ./src/platform/components/Table/appTable/SimpleTable/output.js
function SimpleTable_output_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SimpleTable_output_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SimpleTable_output_ownKeys(Object(source), true).forEach(function (key) { SimpleTable_output_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SimpleTable_output_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SimpleTable_output_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * 兼容旧版本创建表格方法
 * @param {string} mainCode 表格主区域编码
 * @param {object} config 表格业务配置
 */

function simpleTableCompatible() {
  this.register("table"); // 生成 this.cardTableDataSource[id]

  return SimpleTable_output_objectSpread({}, SimpleTable_output_apiBindPage.call(this, SimpleTable_compatible_namespaceObject));
}

function SimpleTable_output_apiBindPage(simpleTableAPI) {
  var res = {};

  for (var _i = 0, _Object$keys = Object.keys(simpleTableAPI); _i < _Object$keys.length; _i++) {
    var pop = _Object$keys[_i];
    res[pop] = simpleTableAPI[pop].bind(this);
  }

  return res;
}

simpleTableCompatible.component = simple_table_index_default.a;
simpleTableCompatible.displayName = "SimpleTable";
simpleTableCompatible.unfinished = ["simpleTableUnFinishedApi"];
// EXTERNAL MODULE: external "@platform/edit-table/index"
var edit_table_index_ = __webpack_require__(57);
var edit_table_index_default = /*#__PURE__*/__webpack_require__.n(edit_table_index_);

// CONCATENATED MODULE: ./src/platform/components/Table/appTable/EditTable/compatible.js
function compatible_toConsumableArray(arr) { return compatible_arrayWithoutHoles(arr) || compatible_iterableToArray(arr) || EditTable_compatible_unsupportedIterableToArray(arr) || compatible_nonIterableSpread(); }

function compatible_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function EditTable_compatible_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return EditTable_compatible_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return EditTable_compatible_arrayLikeToArray(o, minLen); }

function compatible_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function compatible_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return EditTable_compatible_arrayLikeToArray(arr); }

function EditTable_compatible_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function compatible_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function compatible_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { compatible_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { compatible_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function EditTable_compatible_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function EditTable_compatible_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { EditTable_compatible_ownKeys(Object(source), true).forEach(function (key) { EditTable_compatible_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { EditTable_compatible_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function EditTable_compatible_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function EditTable_compatible_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = EditTable_compatible_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function EditTable_compatible_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Descripttion: 兼容老的模式
 * @version: 
 * @Author: bbq
 * @Date: 2020-06-08 16:27:19
 * @LastEditors: bbq
 * @LastEditTime: 2021-01-15 14:20:42
 */





var useEditTable = edit_table_index_default.a.useEditTable;
var compatible_isFunction = table_core_index_["utils"].isFunction,
    compatible_isArray = table_core_index_["utils"].isArray,
    EditTable_compatible_isObject = table_core_index_["utils"].isObject,
    EditTable_compatible_warningOnce = table_core_index_["utils"].warningOnce,
    compatible_isString = table_core_index_["utils"].isString,
    EditTable_compatible_isUndefined = table_core_index_["utils"].isUndefined,
    isPromise = table_core_index_["utils"].isPromise,
    EditTable_compatible_isWrong = table_core_index_["utils"].isWrong,
    isNumber = table_core_index_["utils"].isNumber,
    compatible_getPageSizeStorage = table_core_index_["utils"].getPageSizeStorage;
var compatible_ROW_STATUS = table_core_index_["CONFIG"].ROW_STATUS; // 页面其他区域变化表格重新计算标识

var EditTable_compatible_OTHERCOMPLETE = 'otherComplete';
/**
 *     ***********      方 法 目 录    ************
 *
 *     PS： 按习惯和常用性排序，新增方法请追加
 *
 *     序号      	英文名称              	 作用
 * 		1     	delRow       	        根据index的删除行方法
 * 		2     	getNumberOfRows        根据id获取表格中所有的行的数量
 * 		3     	getAllRows             获取表格内所有行数据（包含删除项目）
 * 		4     	getAllData     	 	   获取表格内全数据（包含删除项目）
 * 		5     	getAllRowsRemoveKeys   通过传入的键过滤不想要的数据
 * 		6     	addRow     		       通过index值新增行
 * 		7     	hideEditTableColByKey  根据id和column的key隐藏某列
 * 		8     	showEditTableColByKey  根据id和column的key显示某列
 *      9     	setValByKeyAndIndex    根据行序号设置表格某行某个字段值
 *      10      setTableData           设置表格数据，同时缓存数据，取消时调用
 * 		11    	cancelEdit      	   取消编辑
 * 		12   	setStatus     		   设置表格状态
 *      14      getCurrentStatus       获取表格状态
 * 		16      getChangedRows         获取变化行信息
 *      17      pasteRow               复制粘贴行，默认粘贴到该行下方
 *      18      setValByKeyAndRowId    根据rowid设置表格某行某个字段值
 * 		19      getValByKeyAndIndex    根据index获取表格某行某个字段值  0代表第一行  行序号可有可没有
 * 		20      getValByKeyAndRowId    根据rowId设置获取某行某个字段值
 * 		21      setEditableByKey       通过rowid和键设置表格某行某个字段编辑性
 * 		22      getColValue            获取表格某列数据
 * 		23      setColValue            设置表格某列数据
 *      24      getEditTableCacheDataById     获取表格初始数据
 *      25      filterEmptyRows               保存时 移除没有输入内容 所有的空行
 *      26      getTableCheckedRows           获取表格选中行
 *      27      selectAllTableRows            选中表格所有行
 *      28      reverseTableSelected          反转表格选中
 *      29      deleteTableRowsByIndex             通过index删除行
 *      30      deleteRowsByRowId             通过rowid删除行
 *      31      openEditModel                 打开编辑弹窗回调
 *      32      closeModel                关闭编辑弹窗回调
 *      33      focusRowByIndex               保存选中的行index
 *      34      setRowByIndex                 设置一行数据通过index
 *      35      getFilterRows                 搜索表格中特定数据的方法，
 *      36      setFiltrateTableData          搜索设置搜索后表格数据的方法，
 *      37      batchChangeTableData          批量更改表格数据
 *      38      setEditableRowByRowId         通过rowId设置表格某些行的编辑性
 *      39      setEditableRowByIndex         通过Index设置表格某些行的编辑性
 *      40      setEditableRowKeyByRowId      通过rowId设置表格某些行的某些字段编辑性
 *      41       setCheckboxDisabled            设置每行第一个Checkbox是否禁用
 *      42       setAllCheckboxAble         设置设置所有多选框禁用和启用的方法
 *      43       selectTableRows                设置某些行的选中状态
 *      44       setEditableRowKeyByIndex        通过index设置表格某些行的某些字段编辑性
 *      45       moveRow                         移动行的方法
 *      46       setRowStatus                    设置行的状态
 *      47       getRowStatus                    获取行的状态
 *      48       getClickRowIndex                获取点击行
 *      49       setClickRowIndex                设置点击行
 *      50       updateTableData                 通过rowid更新表格数据
 *      51       setRowPosition                  设置行位置
 *      52       getTableItemData                获得手动选中过的单元格信息
 *      53       setColScale                     设置某些表格某些列的精度
 *      54       checkRequired                   检验必输项的方法, 检验输入的行
 *      55       checkVisible                    检测某列是否隐藏的方法
 *      58       getTablePageInfo                获取分页信息包括pageindex  pagesize
 *      59       insertRowsAfterIndex            多行数据插入到index行后
 *      66       setEditableKeyEdit              批量设置表格的单元格的编辑性性
 */
// 订阅查询区变化常量

var COMPLETE = 'areaChangeComplete';
/**
 * 检测组件对象是否存在 bbq
 * @param {*} id 
 */

var EditTable_compatible_existenceCheck = function existenceCheck(id) {
  var store = this.editTableDataSource[id];

  if (!store) {
    EditTable_compatible_warningOnce(false, "\u6240\u64CD\u4F5C\u7684\u8868\u683C\u4E2D\u65E0ID\u4E3A".concat(id, "\u7684\u6570\u636E"));
    return;
  }

  return store;
};
/**
 * 检测行的index是否存在 bbq
 * @param {*} id 
 */


var compatible_indexCheck = function indexCheck(id, index, rowid) {
  var store = EditTable_compatible_existenceCheck.call(this, id);

  if (!store) {
    return;
  }

  var viewData = store.getData([compatible_ROW_STATUS["delete"], compatible_ROW_STATUS.filter]);

  if (isNaN(index) || index > viewData.length || index < 0) {
    EditTable_compatible_warningOnce(index, '传入的第二个参数为行index值，须为大于等于0且小于等于总行数减一的整数');
    return -1;
  }

  return index;
}; // 处理旧值函数  bbq


function compatible_saveChangedRowsOldValue(moduleId, rowid, attrcode, value) {
  var store = EditTable_compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.saveRowOldValue(rowid, attrcode, value);
}
/**
 * bbq
 * 对旧值处理的函数, 这原来是标识是index,但是增加筛选后,
 * 对筛选结果进行编辑,使用index作为标识存取新旧值,会导致存取值错误,
 * 所以改成现在rowid为标识, 但是对旧值处理的方法,已经对外暴露,如果出现问题,需要业务组配合修改,
 * 将对新旧值的处理换成rowid为标识
 * */

function compatible_getChangedRowsOldValue(moduleId, rowid, attrcode) {
  var store = EditTable_compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  return store.getRowOldValue(rowid, attrcode);
} // 删除旧值函数 bbq

function compatible_delChangedRowsOldValue(moduleId, rowid, attrcode) {
  var store = EditTable_compatible_existenceCheck.call(this, moduleId);

  if (!store) {
    return;
  }

  store.deleteRowOldValue(rowid, attrcode);
}
/**
 * bbq
 * @name:  创建表格
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return: 
 */

function createEditTable(moduleId) {
  var _this = this;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // return <EditTableContainer moduleId={moduleId} pageScope={this} config={config} />;
  var pageScope = this,
      store = pageScope.editTableDataSource[moduleId];

  if (!store) {
    store = useEditTable();
    pageScope.editTableDataSource[moduleId] = store;
    console.warn('没有store 请检查下  use方法'); // 如果有缓存值 则做一下  Store 的赋值操作  把setTableData里的else操作提到这里了

    pageScope.editTableDataSource.myEditData = pageScope.editTableDataSource.myEditData || {};

    if (pageScope.editTableDataSource.myEditData[moduleId]) {
      store.setTableData(pageScope.editTableDataSource.myEditData[moduleId]); // TODO Check 

      store.setTableProps('focusIndex', -1, false);
      delete pageScope.editTableDataSource.myEditData[moduleId];
    }
  } // console.log('editTableStore', store);
  // TODO config 转化  moduleId 转化


  var _onRowClick = config.onRowClick,
      _onRowDoubleClick = config.onRowDoubleClick,
      statusChange = config.statusChange,
      _onSelected = config.onSelected,
      _onSelectedAll = config.onSelectedAll,
      _selectedChange = config.selectedChange,
      onBeforeEvent = config.onBeforeEvent,
      _onAfterEvent = config.onAfterEvent,
      inputChange = config.inputChange,
      rowClassList = config.rowClassList,
      isAddRow = config.isAddRow,
      addRowCallback = config.addRowCallback,
      addRowDefaultValue = config.addRowDefaultValue,
      showPagination = config.showPagination,
      handlePageInfoChange = config.handlePageInfoChange,
      height = config.height,
      adaptionHeight = config.adaptionHeight,
      setCellClass = config.setCellClass,
      onBatchSelected = config.onBatchSelected,
      alloweFilter = config.alloweFilter,
      _onCloseModel = config.onCloseModel,
      _tableModelConfirm = config.tableModelConfirm,
      fieldid = config.fieldid,
      others = EditTable_compatible_objectWithoutProperties(config, ["onRowClick", "onRowDoubleClick", "statusChange", "onSelected", "onSelectedAll", "selectedChange", "onBeforeEvent", "onAfterEvent", "inputChange", "rowClassList", "isAddRow", "addRowCallback", "addRowDefaultValue", "showPagination", "handlePageInfoChange", "height", "adaptionHeight", "setCellClass", "onBatchSelected", "alloweFilter", "onCloseModel", "tableModelConfirm", "fieldid"]);

  store.setConfig(config); //把config放到store里
  // 挂载方法  不一定bind

  compatible_isFunction(statusChange) && (store.statusChange = config.statusChange = statusChange.bind(this));
  compatible_isFunction(_selectedChange) && (store.selectedChange = config.selectedChange = _selectedChange.bind(this));
  compatible_isFunction(_onSelected) && (store.onSelected = config.onSelected = _onSelected.bind(this)); // renderItem 适配

  var renderItems = {};

  if (pageScope.state.renderItem && pageScope.state.renderItem.table) {
    renderItems = (pageScope.state.renderItem.table || {})[moduleId] || {};
  } // 表格是否自适应高度


  var adaption = !!(EditTable_compatible_isUndefined(height) && adaptionHeight);
  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(edit_table_index_default.a, _extends({
    onCloseModel: function onCloseModel(data) {
      compatible_isFunction(_onCloseModel) && _onCloseModel.call(pageScope, EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, data);
    },
    tableModelConfirm: function tableModelConfirm(data) {
      compatible_isFunction(_tableModelConfirm) && _tableModelConfirm.call(pageScope, EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, data);
    },
    fieldid: fieldid,
    cellClassName: function cellClassName(_ref) {
      var record = _ref.record,
          rowIndex = _ref.rowIndex,
          attrcode = _ref.attrcode;
      return compatible_isFunction(setCellClass) && setCellClass(rowIndex, record, attrcode);
    },
    onRowClick: function onRowClick(record, outputIndex, e) {
      return compatible_isFunction(_onRowClick) && _onRowClick.call(pageScope, EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, record, outputIndex, e);
    },
    onRowDoubleClick: function onRowDoubleClick(record, outputIndex, e) {
      return compatible_isFunction(_onRowDoubleClick) && _onRowDoubleClick.call(pageScope, record, outputIndex, EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, pageScope.props), pageScope.output), e);
    },
    onSelected: function onSelected(tableId, record, selected, outputIndex, isUnique) {
      compatible_isFunction(_onSelected) && _onSelected.call(pageScope, EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, pageScope.props), pageScope.output), tableId, record, outputIndex, selected, isUnique);
    },
    selectedChange: function selectedChange(tableId, newLen, oldLen) {
      compatible_isFunction(_selectedChange) && _selectedChange.call(pageScope, EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, pageScope.props), pageScope.output), tableId, newLen, oldLen);
    },
    onSelectedAll: function onSelectedAll(tableId, checkedAll, len) {
      compatible_isFunction(_onSelectedAll) && _onSelectedAll.call(pageScope, EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, pageScope.props), pageScope.output), tableId, checkedAll, len);
    },
    autoAddRow: {
      enabled: isAddRow,
      callback: function callback(newRow) {
        addRowCallback && addRowCallback(moduleId, newRow);
      },
      defaultValue: addRowDefaultValue
    },
    onChange: function onChange(_ref2) {
      var rowKey = _ref2.rowKey,
          rowKeyValue = _ref2.rowKeyValue,
          rowIndex = _ref2.rowIndex,
          attrcode = _ref2.attrcode,
          value = _ref2.value,
          column = _ref2.column,
          e = _ref2.e;

      // 为郭祉琪加的针对input类型时,这两个字段的特殊校验,换算率
      if (column.itemtype === 'input' && ['vchangerate', 'vqtunitrate'].includes(column.attrcode)) {
        // eslint-disable-next-line no-useless-escape
        var reg = /^[0-9\/\.]+$/;

        if (value && !reg.test(value)) {
          //只能输入数字和/
          return;
        }
      } //胡杰李忠博加


      if (compatible_isFunction(config.inputChange)) {
        var callbackValue = config.inputChange({
          index: rowIndex,
          item: column,
          valueChange: value.value
        });

        if (!callbackValue) {
          return;
        }
      }
    },
    onBeforeEvent: /*#__PURE__*/function () {
      var _ref3 = compatible_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        var record, rowKey, rowKeyValue, rowIndex, attrcode, column, _params$value, value, event, _params$triggerType, triggerType, _params$isTriggerModa, isTriggerModal, fxParams;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                record = params.record, rowKey = params.rowKey, rowKeyValue = params.rowKeyValue, rowIndex = params.rowIndex, attrcode = params.attrcode, column = params.column, _params$value = params.value, value = _params$value === void 0 ? {} : _params$value, event = params.event, _params$triggerType = params.triggerType, triggerType = _params$triggerType === void 0 ? 'onChange' : _params$triggerType, _params$isTriggerModa = params.isTriggerModal, isTriggerModal = _params$isTriggerModa === void 0 ? false : _params$isTriggerModa;
                fxParams = {
                  moduleId: moduleId,
                  record: record,
                  attrcode: attrcode,
                  methods: pageScope.output,
                  column: column,
                  index: rowIndex,
                  val: record.values[attrcode]
                };
                _context.next = 4;
                return Object(utils["a" /* beforeAndAfter */])(pageScope, {
                  moduleId: moduleId,
                  attrcode: attrcode,
                  fxType: 'onEditTableBeforeEvent',
                  fxParams: fxParams
                }, function () {
                  // console.log('onBeforeEvent', 'ssssssssssss')
                  return compatible_isFunction(onBeforeEvent) ? onBeforeEvent(EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, column, rowIndex, value, record) : true;
                });

              case 4:
                _context.t0 = _context.sent;
                return _context.abrupt("return", _context.t0 !== false);

              case 6:
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
          _params$value2 = params.value,
          value = _params$value2 === void 0 ? {} : _params$value2,
          _params$oldValue = params.oldValue,
          oldValue = _params$oldValue === void 0 ? {} : _params$oldValue,
          componentValue = params.componentValue,
          event = params.event,
          _params$triggerType2 = params.triggerType,
          triggerType = _params$triggerType2 === void 0 ? 'onChange' : _params$triggerType2,
          _params$isTriggerModa2 = params.isTriggerModal,
          isTriggerModal = _params$isTriggerModa2 === void 0 ? false : _params$isTriggerModa2;
      var val = value.value; // 为郭祉祺加的针对input类型时,这两个字段的特殊校验,换算率

      if (column.itemtype === 'input' && ['vchangerate', 'vqtunitrate'].includes(attrcode)) {
        var reg = /^([1-9][0-9]*|0)(\.\d{1,})?(\/)(([1-9][0-9]*)(\.\d{1,})?|(\d\.\d{1,}))$/;

        if (val && val.length < 1000 && !reg.test(val)) {
          if (!isTriggerModal) {
            store.setCellProps(rowKeyValue, attrcode, {
              isEdit: false
            });
          }

          store.setCellProps(rowKeyValue, attrcode, {
            value: null
          }); // toast({
          //     content: `${json['table0025']}'1/2'!`,
          //     color: 'danger',
          //     groupOperation: true,
          //     isNode: true,
          //     TextArr: [json['table0022'], json['table0023'], json['table0024']]
          // });

          return;
        }
      }

      var changedRows = []; // editItem.props.hasOwnProperty('isMultiSelectedEnabled') && (isMul = editItem.props.isMultiSelectedEnabled);

      var isMulti = column.isMultiSelectedEnabled;

      if (column.refcode) {
        var refcode = column.refcode.replace('.js', '');
        if (refcode.startsWith('/')) refcode = refcode.substring(1);
        var refer = window[refcode] && window[refcode]["default"]();

        if (refer && refer.props && refer.props.isMultiSelectedEnabled) {
          isMulti = refer.props.isMultiSelectedEnabled;
        }
      } // 多选参照的判断


      var valueArr = [];

      if (isMulti && oldValue) {
        var oldValArr = compatible_isString(oldValue.value) ? oldValue.value.split(',') : compatible_isArray(oldValue.value) ? oldValue.value : [oldValue.value];
        valueArr = compatible_isString(value.value) ? value.value.split(',') : compatible_isArray(value.value) ? value.value : [value.value];
        valueArr.forEach(function (val, i) {
          changedRows.push({
            rowid: record.rowid,
            newvalue: {
              value: val || ''
            },
            oldvalue: {
              value: oldValArr[0] || ''
            }
          });
        });
      } else {
        changedRows.push({
          rowid: record[rowKey],
          newvalue: {
            value: val || ''
          },
          oldvalue: {
            value: oldValue.value || ''
          }
        });
      }

      store.saveRowOldValue(record[rowKey], attrcode, valueArr.length > 0 ? valueArr[0] : val);

      if (column.editAfterFlag && pageScope.handleRelationItems) {
        pageScope.handleRelationItems({
          type: 'table',
          areaCode: moduleId,
          key: attrcode,
          changedrows: changedRows,
          index: rowIndex,
          rowid: record[rowKey],
          record: record,
          column: column,
          callback: function callback() {
            var fxParams = {
              moduleId: moduleId,
              record: record,
              attrcode: attrcode,
              methods: pageScope.output,
              val: column.itemtype === 'refer' || column.itemtype === 'residtxt' ? componentValue : value.value,
              changedRows: changedRows,
              index: rowIndex,
              type: 'table',
              actionTag: triggerType === 'onBlur' ? 'blur' : 'change'
            };
            Object(utils["a" /* beforeAndAfter */])(pageScope, {
              moduleId: moduleId,
              attrcode: attrcode,
              fxType: 'onEditTableAfterEvent',
              fxParams: fxParams
            }, function () {
              // 客开先不加了
              compatible_isFunction(_onAfterEvent) && _onAfterEvent(EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, attrcode, // 特殊类型值的返回
              column.itemtype === 'refer' || column.itemtype === 'residtxt' ? componentValue : value.value, changedRows, rowIndex, record, isTriggerModal ? 'modal' : 'line', triggerType === 'onBlur' ? 'blur' : 'change', event);
            });
          }
        });
      } else {
        var fxParams = {
          moduleId: moduleId,
          record: record,
          attrcode: attrcode,
          methods: pageScope.output,
          val: column.itemtype === 'refer' || column.itemtype === 'residtxt' ? componentValue : value.value,
          changedRows: changedRows,
          index: rowIndex,
          type: 'table',
          actionTag: triggerType === 'onBlur' ? 'blur' : 'change'
        };
        Object(utils["a" /* beforeAndAfter */])(pageScope, {
          moduleId: moduleId,
          attrcode: attrcode,
          fxType: 'onEditTableAfterEvent',
          fxParams: fxParams
        }, function () {
          console.log('onAfterEvent', 'onAfterEventonAfterEventonAfterEventonAfterEventonAfterEvent');
          compatible_isFunction(_onAfterEvent) && _onAfterEvent(EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, attrcode, // 特殊类型值的返回
          column.itemtype === 'refer' || column.itemtype === 'residtxt' ? componentValue : value.value, changedRows, rowIndex, record, isTriggerModal ? 'modal' : 'line', triggerType === 'onBlur' ? 'blur' : 'change', event);
        });
      }
    },
    rowClassName: rowClassList,
    store: store,
    editTableComponentUpdate: function editTableComponentUpdate(props) {
      // console.log('editTableComponentUpdate', props);
      Object(utils["c" /* getCheckedExtendMethod */])(pageScope, 'updateEditTable')({
        pageScope: pageScope,
        data: store.getViewData(),
        props: props,
        useOn: 'create'
      });
    },
    afterLangload: function afterLangload(json, store) {
      // console.log(this, json);
      pageScope.editTableDataSource._langJson = json || {};
    },
    onBatchSelected: !onBatchSelected ? false : function (rows) {
      return onBatchSelected && onBatchSelected(EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, pageScope.props), pageScope.output), moduleId, rows);
    },
    showPagination: showPagination,
    onPageInfoChange: function onPageInfoChange(pks, total) {
      compatible_isFunction(handlePageInfoChange) && handlePageInfoChange(EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, pageScope.props), pageScope.output), config, pks, total);
    },
    tableId: moduleId,
    bodyStyle: {
      minHeight: config.height || 300
    },
    useFixedHeader: true,
    scroll: {
      x: true,
      y: config.height || 300
    },
    adaptionHeight: adaption,
    onCellHyperlinkTo: function onCellHyperlinkTo(record, attrcode, value, tableId) {
      Object(api_index_["linkTo"])(pageScope.state.meta.pageid, tableId, attrcode, value.value);
    },
    renderItems: renderItems,
    high_filter: {
      alloweFilter: alloweFilter
    } // 快捷键 解耦
    ,
    getHotKeyConfig: function getHotKeyConfig() {
      return {
        autoFocusDeferred: _this.autoFocusDeferred,
        meta: _this.state.meta,
        withHotKeyChange: _this.withHotKeyChange,
        orderOfHotKey: _this.orderOfHotKey,
        onLastFormEnter: config.onLastFormEnter
      };
    }
  }, others));
}
/*-------------------当前--------------------*/

/*-------------------工具--------------------*/

/*-------------------行--------------------*/

/**
 * bbq
 * @description: 
 * @param {type} 
 * @return: 
 */

function delRow(tableId, index, isDeepDel) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.deleteTableRows({
    rowIndexs: index
  }, isDeepDel);
} // bbq

function compatible_deleteTableRowsByIndex(tableId, index, isDeepDel, callback) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.deleteTableRows({
    rowIndexs: index
  }, isDeepDel);
  var newLen = store.getSelectedRows().length;
  compatible_isFunction(store.selectedChange) && store.selectedChange(EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, this.props), this.output), tableId, newLen);
  compatible_isFunction(callback) && callback();
} // bbq

function compatible_deleteTableRowsByRowId(tableId, rowid, isDeepDel) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.deleteTableRows({
    rowKeyValues: rowid
  }, isDeepDel);
  var newLen = store.getSelectedRows().length;
  compatible_isFunction(store.selectedChange) && store.selectedChange(EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, this.props), this.output), tableId, newLen);
} // bbq

function compatible_getAllRows(tableId) {
  var isDeepCopy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return this.editTableDataSource.myEditData[tableId] ? this.editTableDataSource.myEditData[tableId].rows : [];
  }

  return store.getAllRows(isDeepCopy);
} // bbq

function compatible_getVisibleRows(tableId) {
  var isDeepCopy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var isFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.getVisibleRows(isDeepCopy, isFilter);
} // bbq

function compatible_getNumberOfRows(tableId, flag) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return 0;
  }

  return flag ? compatible_getAllRows.call(this, tableId, false).length : compatible_getVisibleRows.call(this, tableId, false).length;
} // bbq

function compatible_getAllData(tableId) {
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var rows = compatible_getAllRows.call(this, tableId, flag);
  var data = {
    areaType: 'table',
    rows: rows,
    areacode: null
  };
  return data;
} // 获取某个视图的数据

function getViewData(tableId) {
  var view = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'normal';
  var isDeepCopy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return 0;
  }

  var data = store.getViewData(view);
  return data;
} // bbq

function compatible_getAllRowsRemoveKeys(tableId, keys) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  return store.getAllRowsRemoveKeys(keys);
} // bbq

function EditTable_compatible_addRow(tableId, index) {
  var _this2 = this;

  var autoFocus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var defaultValue = arguments.length > 3 ? arguments[3] : undefined;

  var _callback = arguments.length > 4 ? arguments[4] : undefined;

  var isAutoAddRow = arguments.length > 5 ? arguments[5] : undefined;
  var shouldForceUpdate = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  if (!defaultValue) defaultValue = {};
  store.addTableRow(index, defaultValue, !this.isUpdatePage && shouldForceUpdate, {
    autoFocus: autoFocus,
    isAutoAddRow: isAutoAddRow,
    callback: function callback() {
      _callback && _callback.call(_this2, tableId);
    }
  });
  compatible_isFunction(store.statusChange) && store.statusChange(store.getTableProps('status'));
} // bbq

function compatible_filterEmptyRows(tableId, keys) {
  var rule = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'except';
  var isDeepDel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.removeEmptyRows({
    keys: keys,
    rule: rule,
    shouldForceUpdate: !this.isUpdatePage
  });
} // TODO

function getCurrentRecord(tableId) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var rows = compatible_getAllRows.call(this, tableId);
  var currentIndex = store.getTableProps('currentIndex');
  var currentRecord = rows[currentIndex];
  return currentRecord;
} // TODO

function EditTable_compatible_focusRowByIndex(tableId, index, callback) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  } // TODO setCurrnetInfo 
  // TODO 设置选中行 和 聚焦行


  var rowKey = store.getTableProps('rowKey');
  store.setSelectedIndex([], 'clear');
  store.setSelectedIndex([{
    rowKey: rowKey,
    rowIndex: index,
    pattern: 'add'
  }]);
  store.setTableProps('focusIndex', index, false);
  index = store.getTrueRowIndex({
    rowIndex: index
  });
  store.setTableProps('currentIndex', index, true, function () {
    store.setTableProps('focusIndex', -1, false);
    compatible_isFunction(callback) && callback();
  });
} // bbq

function setRowByIndex(tableId, record, index) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.updateTableDataByIndexs([{
    index: index,
    data: record
  }]);
} // bbq

function setEditableRowByRowId(tableId, rowid, flag) {
  var shouldForceUpdate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.setRowsCellPropsByKey(rowid, {
    disabled: !flag
  }, !this.isUpdatePage && shouldForceUpdate);
} // bbq

function setEditableRowByIndex(tableId, index, flag) {
  var shouldForceUpdate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.setRowsCellPropsByIndex(index, {
    disabled: !flag
  }, !this.isUpdatePage && shouldForceUpdate);
} // bbq

function setEditableRowKeyByRowId(tableId, rowid, key, flag) {
  var shouldForceUpdate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.setCellsProps({
    rowKeyValues: rowid,
    attrcodes: key,
    value: {
      disabled: !flag
    },
    shouldForceUpdate: !this.isUpdatePage && shouldForceUpdate
  });
} // bbq

function compatible_getFilterRows(tableId, key, value) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var langCode = Object(api_index_["getCookie"])('langCode') || 'simpchn';
  return store.getFilterRows(key, value, langCode);
} // bbq

function compatible_setFiltrateTableData(tableId, key, value, isShowAll) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  var langCode = Object(api_index_["getCookie"])('langCode') || 'simpchn';
  return store.setFiltrateTableData(key, value, isShowAll, langCode, tableId);
} // bbq

function compatible_moveRow(tableId, indexStart, indexEnd) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.moveRow(indexStart, indexEnd);
} // bbq

function setRowStatus(tableId, index, flag) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  store.setRowsProps({
    rowIndexs: index
  }, {
    status: flag
  }, !this.isUpdatePage);
} // bbq

function compatible_getRowStatus(tableId, index) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.getRowProps({
    rowIndex: index
  }, 'status');
} // bbq

function EditTable_compatible_getClickRowIndex(tableId) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.getTableProps("currentInfo");
} // bbq

function EditTable_compatible_setClickRowIndex(tableId, data) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.setTableProps("currentInfo", data, false);
} // TODO

function setRowPosition(tableId, indexStart, position) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.setRowPosition(indexStart, position);
} // bbq

function compatible_insertRowsAfterIndex(tableId, data, index) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  store.insertRowsAfterIndex(data, index);
} // bbq

function compatible_insertDataByIndexs(tableId, record) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  store.insertDataByIndexs(record, false, true); // TODO
  //     let cell = autoFocus && getCellDom(tableId);
  //   let cellIdentity = cell && getCellIdentity(cell);

  return {
    // ...myCardScope.state.table,
    rows: store.getData()
  };
} // bbq

function updateRows(tableId, data) {
  var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  store.updateRows(data, shouldForceUpdate);
} // bbq

function updateRowsProps(tableId, data) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var shouldForceUpdate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  store.updateRowsProps(data, props, shouldForceUpdate);
} // bbq

function resetTableCaches(tableId) {
  var shouldForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  store.resetTableCaches(shouldForceUpdate);
} // bbq

function EditTable_compatible_updateDataByIndexs(tableId, record) {
  var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isDel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  } // if (isDel) {
  //     // 过滤点当前删除状态的数据
  //     !myEditScope.filterAllData && (myEditTable.rows = tableData.filter(item => {
  //       return item.status !== '3';
  //     }));
  //     myEditScope.filterAllData && (myEditScope.filterAllData = tableData.filter(item => {
  //       return item.status !== '3';
  //     }));
  //   }


  store.updateTableDataByIndexs(record, flag, true);
}
/*-------------------列--------------------*/
// bbq

function compatible_getColValue(tableId, key) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var rows = store.getData(); // 因为筛选而加的代码

  var newData = {
    value: [],
    display: []
  };
  rows.find(function (item) {
    newData.value.push(item.values[key].value);

    if (item.values[key].display) {
      newData.display.push(item.values[key].display);
    }
  });
  return newData;
} // bbq

function compatible_setColValue(tableId, key, _ref4) {
  var _this3 = this;

  var display = _ref4.display,
      value = _ref4.value,
      scale = _ref4.scale;
  var isSetEdit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var rows = store.getData();
  rows.find(function (item) {
    var status = item.status,
        rowid = item.rowid; // 已经被删除的行不处理

    if (status == compatible_ROW_STATUS["delete"]) {
      return;
    }

    if (status == compatible_ROW_STATUS.origin && isSetEdit) {
      item.status = compatible_ROW_STATUS.edit;
    }

    if (!EditTable_compatible_isObject(item.values[key])) {
      item.values[key] = {};
    }

    if (!EditTable_compatible_isUndefined(value)) {
      item.values[key].value = value; // 给新复制的行存旧值

      compatible_saveChangedRowsOldValue.call(_this3, tableId, rowid, key, value);
    }

    !EditTable_compatible_isUndefined(display) && (item.values[key].display = display);
    !EditTable_compatible_isUndefined(scale) && (item.values[key].scale = scale);
  });
  store.setData({
    data: rows
  });
} // TODO  这个方法态暴力

function EditTable_compatible_setColScale(list) {
  var _this4 = this;

  list.forEach(function (eve) {
    var areacode = eve.areacode,
        fieldcode = eve.fieldcode,
        scale = eve.scale;

    _this4.state.meta[areacode].items.forEach(function (item) {
      if (item.attrcode === fieldcode) {
        item.scale = scale;
      }
    });
  });
  /**重新设置模版精度*/

  this.meta.setMeta(this.state.meta);
}
/**隐藏列
 * @author renyjk
 * @param {string} tableId
 * @param {string || array} key
 */

function EditTable_compatible_hideColByKey(tableId, key) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);
  if (!store) return;
  if (compatible_isString(key)) key = [key];
  key.forEach(function (code) {
    store.setColumn(tableId, EditTable_compatible_defineProperty({}, code, {
      visible: false
    }), false);
  }); // 统一更新一次

  store.refresh();
}
/**显示列
 * @author renyjk
 * @param {string} tableId
 * @param {string || array} key
 */

function EditTable_compatible_showColByKey(tableId, key) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);
  if (!store) return;
  if (compatible_isString(key)) key = [key];
  key.forEach(function (code) {
    store.setColumn(tableId, EditTable_compatible_defineProperty({}, code, {
      visible: true
    }), false);
  }); // 统一更新一次

  store.refresh();
}
/*-------------------单元格--------------------*/
// bbq

function EditTable_compatible_setValByKeyAndIndex(tableId, index, key, cellValue) {
  var isSetEdit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var isUpdateBatch = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.setValByKeyAndIndex(index, key, cellValue, {
    isSetEdit: isSetEdit,
    isUpdateBatch: isUpdateBatch,
    shouldForceUpdate: !this.isUpdatePage
  });
} // bbq

function EditTable_compatible_setValByKeyAndRowId(tableId, rowid, key, cellValue) {
  var isSetEdit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var isUpdateBatch = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  if (!rowid) {
    return;
  }

  var row = store.getRows({
    rowKeyValues: rowid
  })[0];

  if (!row) {
    return;
  }

  store.setValByKeyAndRowId(rowid, key, cellValue, {
    isSetEdit: isSetEdit,
    isUpdateBatch: isUpdateBatch,
    shouldForceUpdate: !this.isUpdatePage
  });
} // bbq

function compatible_getValByKeyAndIndex(tableId, index, key) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var len = store.getData().length;

  if (len === 0) {
    console.log('无数据');
    return;
  }

  index = compatible_indexCheck.call(this, tableId, index);

  if (index === -1) {
    return;
  }

  return store.getValByKeyAndIndex(index, key);
} // bbq

function compatible_getValByKeyAndRowId(tableId, rowid, key) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  if (!rowid) {
    return;
  }

  return store.getValByKeyAndRowKey(rowid, key);
} // bbq

function setEditableByKey(tableId, rowid, key, flag) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.setCellProps(rowid, key, {
    disabled: !flag
  }, !this.isUpdatePage);
} // bbq

function setEditableRowKeyByIndex(tableId, index, key, flag) {
  var shouldForceUpdate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.setCellsProps({
    rowIndexs: index,
    attrcodes: key,
    value: {
      disabled: !flag
    },
    shouldForceUpdate: !this.isUpdatePage && shouldForceUpdate
  });
} // TODO  父级禁用  子集是否禁用

function EditTable_compatible_checkVisible(tableId, colKey) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var column = store.getColumn(tableId, colKey) || {};
  return column.visible;
}
/*-------------------表格--------------------*/
// bbq

function compatible_setTableData(tableId, data) {
  var isCache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var isTop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!data || !data.rows || !Array.isArray(data.rows)) {
    EditTable_compatible_warningOnce(data, '传入的第二个参数为所设置的数据，数据格式是对象，且有个rows属性，rows的内容是数组');
    return;
  }

  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    this.editTableDataSource.myEditData = this.editTableDataSource.myEditData || {};
    this.editTableDataSource.myEditData[tableId] = data; // 设置值的逻辑  迁移到 createEditTable 方法里

    return;
  } // 设置表格数据


  data = store.setTableData(data, {
    isCache: isCache,
    isTop: isTop
  }); // 解决组件销毁后，再次赋值，赋到了原来缓存的组件上，导致新的组件没有值的问题

  this.editTableDataSource.myEditData = this.editTableDataSource.myEditData || {};
  this.editTableDataSource.myEditData[tableId] = data; // 调用selectedChange事件

  compatible_isFunction(store.selectedChange) && store.selectedChange(EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, this.props), this.output), tableId, 0);
} // bbq

function cancelEdit(tableId, callback) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.setTableProps('status', 'browse', false);
  Object(api_index_["clearOneTypeToast"])('danger');
  compatible_clearRequiredStatus.call(this, tableId);
  compatible_setTableData.call(this, tableId, JSON.parse(JSON.stringify(store.getCache(['afterDel']) || store.getCache(['base']) || {
    rows: []
  }))); // 重新计算表格高度

  api_index_["PubSub"].publish(COMPLETE, true);
  callback && callback.call(this);
} //  清除校验状态

function compatible_clearRequiredStatus(tableId) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var validateFailed = store.getCache('validateFailed') || {};

  var _loop = function _loop(rowKeyValue) {
    (validateFailed[rowKeyValue] || []).forEach(function (attrcode) {
      store.setCellProps(rowKeyValue, attrcode, {
        validated: true
      }, false);
    });
  };

  for (var rowKeyValue in validateFailed) {
    _loop(rowKeyValue);
  } // 去除校验状态


  store.setCache('validateFailed', null);
  store.setCache('firstValidateFaild', null);
} // bbq

function compatible_setStatus(tableId, status, callback) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var oldStatus = store.getTableProps('status') || 'browse'; // 切换成浏览态的时候把所有的toast清掉

  if (oldStatus !== 'browse' && status == 'browse') {
    Object(api_index_["clearOneTypeToast"])('danger');
    compatible_clearRequiredStatus.call(this, tableId);
  }

  store.setTableStatus(status, {
    shouldForceUpdate: !this.isUpdatePage
  });
  compatible_isFunction(store.statusChange) && store.statusChange(status);
  compatible_isFunction(callback) && callback.call(this, tableId, status, JSON.parse(JSON.stringify(store.getCache(['base']))), store // this.editTableDataSource[tableId].state.table,  // 这个不知道业务有没有用过
  );
} // bbq

function compatible_getStatus(tableId) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  return store.getTableProps('status') || 'browse';
} // bbq

function compatible_getChangedRows(tableId) {
  //判断修改的行，值是否和改之前一样，如果一样，把status设为0
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.getChangedRows();
} // bbq

function compatible_pasteRow(tableId, data, index) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  index = index === undefined ? 0 : index + 1;
  store.pasteRow({
    copyRow: data,
    index: index
  });
} // bbq

function getCacheDataById(tableId) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var data = store.getCache(['base']) || {};
  return JSON.parse(JSON.stringify(data));
} // bbq

function getCacheForEditModal(tableId) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var data = store.getCache(['beforeEdit']) || {};
  return JSON.parse(JSON.stringify(data));
}
/**
  根据key键获取模板中数据
 * @author renyjk
 * @param {string} tableId
 * @param {string} key
 * @param {boolean} flag 增加flag标识位，判断是否为多表头，默认是false，不是多表头
 */

function compatible_setColEditableByKey(tableId, key) {
  var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);
  if (!store) return;
  var meta = store.getMeta();
  var items = meta && meta[tableId] && meta[tableId].items;
  var destEditAreaCode = meta.gridrelation && meta.gridrelation[tableId] && meta.gridrelation[tableId].destEditAreaCode;

  if (compatible_isArray(items)) {
    // 处理多表头
    var fn = function fn(items, key) {
      items.map(function (item) {
        if (item.children) {
          fn(item.children, key);
        }

        if (item.attrcode === key || key.includes(item.attrcode)) {
          item.disabled = flag;
          /*兼容设置侧拉框同字段的编辑性start 米明天试试，看看好使不 之后在来完善先注释掉*/

          if (destEditAreaCode) {
            destEditAreaCode.forEach(function (eve) {
              //便利侧拉模版数组里的每项，所对应的模版
              meta[eve].items.forEach(function (formItem) {
                if (formItem.attrcode === item.attrcode) {
                  formItem.disabled = flag;
                }
              });
            });
          }
          /*兼容设置侧拉框同字段的编辑性end*/

        }
      });
    };

    fn(items, key);
    store.setMeta(meta);
  }
} // bbq

function EditTable_compatible_updateTableData(tableId, data, callback) {
  var isCache = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (!EditTable_compatible_isObject(data) || !compatible_isArray(data.rows)) {
    EditTable_compatible_warningOnce(data, '传入的第二个参数为所设置的数据，数据格式是对象，且有个rows属性，rows的内容是数组');
    return;
  }

  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.updateTableData(data, isCache);
  compatible_isFunction(callback) && callback();
}
/**
 * bbq
 * @description: 表格校验
 * @param {type} 
 * @return: 
 */

function compatible_checkRequired(tableId, rows) {
  var autoFocus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var json = store.getCache('langJson');
  var metaItems = store.getArrayMeta(tableId);

  if (!metaItems) {
    EditTable_compatible_warningOnce(false, "\u6240\u64CD\u4F5C\u7684\u8868\u683C\u4E2D\u65E0ID\u4E3A".concat(tableId, "\u7684meta"));
    return false;
  }

  if (compatible_isArray(rows)) {
    var allToast = {}; //保存所有检验提示信息
    // 校验

    var validateFailed = {};
    var firstValidateFaild = null;
    var rowKey = store.getTableProps('rowKey'); // 过滤不可见

    metaItems = metaItems.filter(function (e) {
      return e.visible;
    });
    metaItems.forEach(function (item) {
      //将数据中没有的列附上空对象，保证校验的准确性
      var attrcode = item.attrcode,
          required = item.required,
          label = item.label;

      if (required) {
        rows.forEach(function (row, index) {
          var status = row.status,
              _row$values = row.values,
              values = _row$values === void 0 ? {} : _row$values;

          if (status !== compatible_ROW_STATUS["delete"]) {
            // 去除假删除的
            if (EditTable_compatible_isUndefined(values[attrcode])) {
              values[attrcode] = {};
            }

            var value = values[attrcode].value;

            if (EditTable_compatible_isWrong(value) || compatible_isArray(value) && value.length === 0) {
              // 记录需要提示的值
              allToast[index] = allToast[index] || [];
              allToast[index].push("[".concat(label, "]"));

              if (!firstValidateFaild) {
                firstValidateFaild = [row[rowKey], attrcode];
              } // 设置校验状态


              validateFailed[row[rowKey]] = validateFailed[row[rowKey]] || [];
              validateFailed[row[rowKey]].push(attrcode);
              store.setCache('validateFailed', validateFailed);
              store.setCellProps(row[rowKey], attrcode, {
                validated: false
              }, false);
            }
          }
        });
      }
    });

    if (Object.keys(allToast).length > 0) {
      var finalContent = ''; //最后展示的content

      console.log(store, validateFailed, firstValidateFaild, 'validateFailed');
      validateFailed && store.refresh(); // 聚焦到首个

      if (firstValidateFaild && autoFocus) {
        // cellselectorkey="hhghg-34343m43-434343wws@single1"
        var cellFocusElement = document.querySelector(".table-cell-wrapper[cellselectorkey=\"".concat(firstValidateFaild[0], "@").concat(firstValidateFaild[1], "\"] [tabindex=\"0\"]"));

        if (cellFocusElement) {
          cellFocusElement.ncExecuteFocus = true;
          cellFocusElement.focus();
          cellFocusElement.ncExecuteFocus = false;
        }
      }

      Object.keys(allToast).forEach(function (item) {
        //对输出的校验内容进行格式转化
        finalContent += "".concat(json && json['table_first']).concat(+item + 1, " ").concat(json && json['table_row'], ": ").concat(allToast[item].join('，'), "\uFF1B");
      });
      Object(api_index_["toast"])({
        content: "".concat(json && json['table_no_empty'], "\uFF1A"),
        color: 'danger',
        TextArr: [json['table0022'], json['table0023'], json['table0024']],
        groupOperation: true,
        groupOperationMsg: finalContent.split('；').map(function (item) {
          return item ? item + '；' : item;
        }),
        mark: 'edit-table-toastx'
      });
      return false;
    } else {
      // 清理错误消息
      // let validateFailed = store.getCache('validateFailed');
      // if (validateFailed) {
      //     for (let rowKeyValue in validateFailed) {
      //         if (validateFailed[rowKeyValue]) {
      //             validateFailed[rowKeyValue].forEach(attrcode => {
      //                 store.setCellProps(rowKeyValue, attrcode, { validated: true }, false);
      //             })
      //         }
      //     }
      //     store.refresh();
      // }
      return true;
    }
  } else {
    EditTable_compatible_warningOnce(false, '所传入的第二个参数rows应是数组，请传入数组');
    return false;
  }
} // TODO 未检验

function updateDifference(tableId, data) {
  var _this5 = this;

  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var testDataType = Array.isArray(data.rows);

  if (testDataType) {
    var tableData = compatible_getAllRows.call(this, tableId, false);
    data.rows.map(function (item) {
      var rowid = item.rowid,
          values = item.values,
          rowStatus = item.status;

      if (EditTable_compatible_isObject(values)) {
        // 此处同时修改了数据状态为 ‘1’
        var status = typeof rowStatus == 'undefined' || rowStatus == compatible_ROW_STATUS.origin ? compatible_ROW_STATUS.edit : rowStatus;
        tableData.map(function (i) {
          if (i.rowid == rowid) {
            i.status = status;
            Object.keys(values).forEach(function (key) {
              i.values[key] = values[key];
            }); // 优化存旧值

            var vals = i.values,
                _rowid = i.rowid;

            for (var keys in vals) {
              var OldVal = vals[keys] ? vals[keys].value : null;
              compatible_saveChangedRowsOldValue.call(_this5, tableId, _rowid, keys, OldVal);
            }
          }
        });
      }
    }); // 更新

    store.refresh();
  }
} // bbq

function compatible_updateTable(tableId) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.setTableProps('focusIndex', -1, false);
  var data = store.getData();
  store.saveRowsOldValue({
    rows: data
  });
  store.refresh();
} // bbq

function setEditableKeyEdit(tableId, data) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var rows = store.getData();

  if (!rows.length || !data.length) {
    return console.log('empty data');
  }

  var rowKey = store.getTableProps('rowKey');
  rows.forEach(function (item, rowsIndex) {
    data.forEach(function (eve) {
      var index = eve.index,
          keys = eve.keys; // 改为 rowKey 来判断

      if (eve[rowKey] === item[rowKey]) {
        var values = item.values;
        Object.keys(keys).forEach(function (key) {
          var _isObj = EditTable_compatible_isObject(values[key]);

          if (!_isObj) {
            values[key] = {};
          }

          var disabledValue = !keys[key] ? 'on' : 'off'; //获得编辑状态

          values[key].disabled = disabledValue;
        });
      }
    });
  });
  store.setData({
    data: rows,
    shouldForceUpdate: !this.isUpdatePage
  });
}
/**32
 * bbq
 * 共享  郭扬让加的，他们现在再用
 * 刷新表格高度  这是特殊场景使用，一般是表格上方部分，高度变化，表格需要不断适应时使用
 */

function EditTable_compatible_updateTableHeight() {
  api_index_["PubSub"].publish(EditTable_compatible_OTHERCOMPLETE, true);
} // bbq

function compatible_updateDataByRowId(tableId, data) {
  var isCache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isDel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  store.updateTableDataByRowId(data, isCache, !this.isUpdatePage, isDel);
}
/*-------------------高阶组件--------------------*/
// bbq

function EditTable_compatible_getCheckedRows(tableId) {
  var isDeepCopy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  return store.getSelectedRows(isDeepCopy);
} // bbq

function EditTable_compatible_selectAllRows(tableId, checked) {
  var _this6 = this;

  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  var config = store.getConfig();
  var crossPageSelect = config.crossPageSelect,
      pkname = config.pkname;

  if (crossPageSelect && pkname) {
    if (checked) {
      var allpks = store.getStore('allpks');
      store.setStore(['checkInfo', 'crossPageSelectIndex'], new Set(allpks), false);
      store.setStore(['checkInfo', 'checkedAllpage'], true, false);
    } else {
      store.setStore(['checkInfo', 'crossPageSelectIndex'], new Set(), false);
      store.setStore(['checkInfo', 'checkedAllpage'], false, false);
    }
  }

  return store.setAllRowsSelected(checked, !this.isUpdatePage, function () {
    var newLen = store.getSelectedRows().length;
    compatible_isFunction(store.selectedChange) && store.selectedChange(EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, _this6.props), _this6.output), tableId, newLen);
  });
} // bbq

function EditTable_compatible_reverseSelected(tableId) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return [];
  }

  store.reverseRowsSelected(!this.isUpdatePage);
  var newLen = store.getSelectedRows().length;
  compatible_isFunction(store.selectedChange) && store.selectedChange(EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, this.props), this.output), tableId, newLen);
} // TODO  弹窗

function EditTable_compatible_openModel(tableId, type) {
  var record = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var index = arguments.length > 3 ? arguments[3] : undefined;
  var autoFocus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var sideBoxConfig = store.getStore('sideBoxConfig') || {};
  sideBoxConfig = EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, sideBoxConfig), {}, {
    show: true
  }); //弹出之后，禁止后面的滚动事件

  var html = document.getElementsByTagName('html');
  html[0].style.overflow = 'hidden';

  if (type == 'edit') {
    sideBoxConfig.record = record;
    sideBoxConfig.index = index;
    sideBoxConfig.operateType = type;
    sideBoxConfig.status = 'open';
    var data = store.getViewData();
    store.setCache(['beforeEdit'], JSON.parse(JSON.stringify({
      rows: data
    })));
  } else if (type == 'add') {
    sideBoxConfig.operateType = type;
    sideBoxConfig.status = 'open';
    var addIndex = compatible_getVisibleRows.call(this, tableId, false, false).length;

    var _record = store.addTableRow(addIndex, {}, false, {
      autoFocus: autoFocus
    });

    sideBoxConfig.record = _record; // 自动聚焦
    // if (autoFocus) {
    //     let items = store.getArrayMeta(tableId);
    //     for (let i = 0; i < items.length; i++) {
    //         if (
    //             items[i].attrcode != 'numberindex' &&
    //             (typeof items[i].disabled == 'undefined' || items[i].disabled == false) &&
    //             (typeof items[i].visible != 'undefined' && items[i].visible == true)
    //         ) {
    //             rows[addIndex].values[items[i].attrcode].isEdit = true;
    //             break;
    //         }
    //     }
    // }
  }

  store.setStore('sideBoxConfig', sideBoxConfig);
} // TODO 弹窗

function compatible_closeModel(tableId) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var sideBoxConfig = store.getStore('sideBoxConfig') || {};
  sideBoxConfig = EditTable_compatible_objectSpread(EditTable_compatible_objectSpread({}, sideBoxConfig), {}, {
    show: false,
    status: 'close'
  });
  store.setStore('sideBoxConfig', sideBoxConfig); //弹出之后，禁止后面的滚动事件

  var html = document.getElementsByTagName('html');
  html[0].style.overflow = '';
  return false;
} //  批改

function compatible_batchChangeTableData(tableId) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return null;
  }

  return store.batchChangeTableData();
} // bbq

function setCheckboxDisabled(tableId, index, flag) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  } // let rows = getAllRows.call(this, tableId, false);
  // 不包含假删除的数据


  var visibleRows = store.getViewData('filter');

  if (Array.isArray(index)) {
    var isFlag = true;
    index.forEach(function (eve) {
      if (visibleRows.length - 1 >= eve && eve >= 0) {
        // rows[eve].disabled = !flag;
        store.setRowProps({
          rowIndex: eve
        }, {
          disabled: !flag
        }, false);
      } else {
        isFlag = false;
        EditTable_compatible_warningOnce(false, '所传入的数组中，数值不符合要求');
      }
    });

    if (isFlag) {
      if (compatible_toConsumableArray(new Set(index)).length === visibleRows.length) {
        var checkInfo = store.getCheckInfo();
        checkInfo.disabledAll = !flag;
        store.setCheckInfo({
          checkInfo: checkInfo,
          shouldForceUpdate: false
        });
      }

      store.refresh();
      return true;
    } else {
      return false;
    }
  } else if (visibleRows.length - 1 >= index && index >= 0) {
    // rows[index].disabled = !flag;
    store.setRowProps({
      rowIndex: index
    }, {
      disabled: !flag
    }, true);
    return true;
  }
} // bbq

function compatible_setAllCheckboxAble(tableId, flag) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var checkInfo = store.getCheckInfo();
  checkInfo.disabledAll = !flag;
  store.setCheckInfo({
    checkInfo: checkInfo,
    shouldForceUpdate: false
  });
  var data = store.getData();
  var rowKey = store.getTableProps('rowKey');
  data.forEach(function (item) {
    store.setRowProps({
      rowKeyValue: item[rowKey]
    }, {
      disabled: !flag
    }, false);
  }); //  更新

  store.refresh();
} // TODO

function compatible_selectTableRows(tableId, index, flag) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.setRowsSelected({
    rowIndexs: index
  }, flag);
} // TODO  批改

function compatible_getTableItemData(tableId) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  } // {
  //     batchChangeIndex,
  //     batchChangeKey,
  //     batchChangeValue,
  //     batchChangeDisplay,
  // }


  return store.getCache('oldBatchData');
} // bbq

function compatible_getTablePageInfo(tableId) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  var prePageSize = compatible_getPageSizeStorage(this.state.meta, tableId);

  var _store$getPageInfo = store.getPageInfo(),
      _store$getPageInfo$pa = _store$getPageInfo.pageIndex,
      pageIndex = _store$getPageInfo$pa === void 0 ? 0 : _store$getPageInfo$pa,
      _store$getPageInfo$pa2 = _store$getPageInfo.pageSize,
      pageSize = _store$getPageInfo$pa2 === void 0 ? prePageSize : _store$getPageInfo$pa2;

  return {
    pageIndex: pageIndex > 0 ? pageIndex - 1 : 0,
    pageSize: pageSize
  };
} // TODO 不明用途的api
// 这个要找刘铭 确认下如何处理

function setCheckboxFix(tableId, flag) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  } // myEditTable.checkboxFix = flag;


  store.refresh();
} // TODO 排序

function compatible_getSortParam(tableId) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  return store.getStore(['sortParam']);
} // TODO  云原生

function EditTable_compatible_updateDataByRefresh(tableId, pkname, refreshData, saga_errormesg) {
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  if (Array.isArray(refreshData)) {
    var data = compatible_getAllRows.call(this, tableId, false);
    var refreshLen = refreshData.length;
    data.map(function (item, index) {
      var values = item.values;

      for (var i = 0; i < refreshLen; i++) {
        //找到相应行,更新对应字段的value
        if (values[pkname] && values[pkname].value === refreshData[i][pkname]) {
          for (var pop in refreshData[i]) {
            if (values[pop]) {
              values[pop].value = refreshData[i][pop];
            } else {
              values[pop] = {
                value: refreshData[i][pop]
              };
            } //有错误信息时，将错误信息数据放表格行


            if (pop === 'saga_status' && refreshData[i][pop] === '1' && saga_errormesg) {
              values.saga_errormesg = saga_errormesg;
            }
          }

          break;
        }
      }

      return item;
    });
    store.setData({
      data: data
    });
  }
} // TODO 过滤

function EditTable_compatible_saveFilterCustomColData(tableId, _ref5) {
  var attrcode = _ref5.attrcode,
      rowId = _ref5.rowId,
      value = _ref5.value;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  store.setCache(['customColData', attrcode, rowId], value); // const tableScope = this.editTableDataSource[tableId];
  // if (!tableScope) {
  //     warningOnce(false, '当前操作表格实例不存在');
  // }
  // let { filterCustomColData } = tableScope;
  // if (filterCustomColData) {
  //     if (filterCustomColData[attrcode]) {
  //         if (filterCustomColData[attrcode][rowId] !== value) {
  //             // 相同的值不重复赋值
  //             filterCustomColData[attrcode][rowId] = value;
  //         }
  //     } else {
  //         filterCustomColData[attrcode] = {};
  //         filterCustomColData[attrcode][rowId] = value;
  //     }
  // } else {
  //     tableScope['filterCustomColData'] = {};
  //     tableScope['filterCustomColData'][attrcode] = {};
  //     tableScope['filterCustomColData'][attrcode][rowId] = value;
  // }
} // liuming excel 新方法

function compatible_updateAfterBatchChange(param) {
  var areaCode = param.areaCode;
  var store = EditTable_compatible_existenceCheck.call(this, areaCode);

  if (!store) {
    return;
  }

  return store.updateAfterBatchChange(this, param);
} //liuming excel 内部使用，不让业务组用

function compatible_updateAndAddRows(param) {
  var tableId = param.tableId;
  var store = EditTable_compatible_existenceCheck.call(this, tableId);

  if (!store) {
    return;
  }

  return store._updateAndAddRows(param);
}
// CONCATENATED MODULE: ./src/platform/components/Table/appTable/EditTable/output.js
function EditTable_output_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function EditTable_output_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { EditTable_output_ownKeys(Object(source), true).forEach(function (key) { EditTable_output_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { EditTable_output_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function EditTable_output_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //const useEditTable = EditTable.useEditTable;
// TODO

function editTableCompatible() {
  this.register('editTable'); // 生成 this.editTableDataSource[id]

  return EditTable_output_objectSpread({}, EditTable_output_apiBindPage.call(this, EditTable_compatible_namespaceObject));
}

function EditTable_output_apiBindPage(editTableAPI) {
  var res = {};

  for (var key in editTableAPI) {
    res[key] = editTableAPI[key].bind(this);
  }

  return res;
}

editTableCompatible.component = edit_table_index_default.a;
editTableCompatible.displayName = 'EditTable';
editTableCompatible.unfinished = ['editTableUnFinishedApi'];
// EXTERNAL MODULE: external "@platform/transfer-table/index"
var transfer_table_index_ = __webpack_require__(129);
var transfer_table_index_default = /*#__PURE__*/__webpack_require__.n(transfer_table_index_);

// EXTERNAL MODULE: external "@platform/tree-table/index"
var tree_table_index_ = __webpack_require__(130);
var tree_table_index_default = /*#__PURE__*/__webpack_require__.n(tree_table_index_);

// EXTERNAL MODULE: ./src/platform/FastExtend/const.js
var FastExtend_const = __webpack_require__(19);

// CONCATENATED MODULE: ./src/platform/FastExtend/methodsModel.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 使用方法回调的方式进行扩展

 // 这个东西呢  有三种做法  i.变量（get set）  ii.静态变量（static）  iii.全局变量

var ExtendModuleName = 'NCCExtend';

var srcriptAlreadyExist = function srcriptAlreadyExist(src) {
  var allScript = document.getElementsByTagName('script');
  var srcriptUrl = Array.from(allScript).map(function (element) {
    return element.getAttribute('src');
  });
  var index = srcriptUrl.findIndex(function (val) {
    return val === src;
  });
  return index !== -1;
}; //liuming CONFIG引用修改


var isPageModal = true;
/**
 * 查找resources加载的文件路径里某一层级的文件名
 * n:Number 在resources的第几层
 */

function getUrlPathName(n) {
  // hash 示例
  // "ifr=/nccloud/resources/price/price/adjustprice/main/index.html#/list&c=403000800&p=403000800_list&ar=0001Z81000000003QAX4&n=价格调整单&b1=供应链&b2=销售价格&b3=销售调价"
  var hash = '';

  if (isPageModal) {
    var pageStore = Object(api_index_["getAppUrl"])().pageurl;
    hash = decodeURIComponent(decodeURIComponent(pageStore));
  } else {
    hash = decodeURIComponent(decodeURIComponent(window.top.location.hash));
  }

  var matchStr = hash.match(/ifr=\/nccloud\/resources\/(\S*).html/) || hash.match(/ifr=\/(\S*).html/);
  var urlPathArr = matchStr && matchStr[1] && matchStr[1].split('/') || ['none+', 'none+'];
  return urlPathArr[n];
}
/**
 * 获取扩展路径
 */


function getExtendUrl() {
  var billinfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  console.log(billinfo, '页面基础信息');
  var domainCode = getUrlPathName(0),
      moduleCode = getUrlPathName(1),
      appcode = billinfo.appcode || api_index_["pageTo"].getAppCode(),
      pagecode = billinfo.pagecode || api_index_["pageTo"].getPageCode(); // console.log(domainCode, moduleCode, appcode, pagecode);

  return domainCode && moduleCode && appcode && pagecode ? "extend_".concat(domainCode, "/").concat(moduleCode, "/").concat(appcode, "/").concat(pagecode) : null;
}

var methodsModel_MethodsModel = /*#__PURE__*/function () {
  function MethodsModel() {// TODO  暂不处理

    _classCallCheck(this, MethodsModel);
  } // 加载文件 mutativeLoadScrip


  _createClass(MethodsModel, [{
    key: "install",
    value: function install(callback, _ref) {
      var billinfo = _ref.billinfo;

      if (!FastExtend_const["enable"]) {
        console.log('本页面禁止加载二开文件~');
        return false;
      } // 缓存数据


      this.billinfo = billinfo; //加载二开的文件--liuxis

      var extendUrl = getExtendUrl(billinfo);

      if (extendUrl) {
        var src = "../../../../".concat(ExtendModuleName, "/").concat(extendUrl, "/index.js");
        var extendPath = "".concat(ExtendModuleName, "/").concat(extendUrl, "/index");
        console.log(src);
        var NCCExtendAlreadyExist = srcriptAlreadyExist(src);

        if (!NCCExtendAlreadyExist) {
          var readStateChange = function readStateChange() {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              script.removeEventListener('readstatechange', readStateChange);
            }
          };

          var onError = function onError() {
            // document.body.removeChild(script);
            console.log('file load error NCCExtend ' + src);
          };

          var saveMethods = function saveMethods() {
            var allMethods = null; // 二开注册对象 export default 输出

            if (window[extendPath] instanceof Object && window[extendPath]["default"] instanceof Object) {
              allMethods = window[extendPath]["default"];
            } else if (window[ExtendModuleName] instanceof Object) {
              //二开注册对象挂在 window.NCCExtend
              allMethods = window[ExtendModuleName];
            } // if (window[ExtendModuleName] instanceof Object) {


            if (allMethods) {
              // 提供两个方法给  模板加载和数据加载使用
              if (allMethods.dataAlreadyLoaded && typeof allMethods.dataAlreadyLoaded === 'function') {
                api_index_["ViewModel"].dataAlreadyLoaded = allMethods.dataAlreadyLoaded;
              }

              if (allMethods.templateAlreadyLoaded && typeof allMethods.templateAlreadyLoaded === 'function') {
                api_index_["ViewModel"].templateAlreadyLoaded = allMethods.templateAlreadyLoaded;
              }

              if (allMethods.beforeAjaxSend && typeof allMethods.beforeAjaxSend === 'function') {
                api_index_["ViewModel"].beforeAjaxSend = allMethods.beforeAjaxSend;
              }

              if (allMethods.localExtendRouter && typeof allMethods.localExtendRouter === 'function') {
                api_index_["ViewModel"].localExtendRouter = allMethods.localExtendRouter;
              }

              callback(allMethods);
            }
          };

          //如果一个页面使用多个createPage，只加载一次二开文件
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = src;
          /**readyStaprefer/refer.te:
           *  uninitialized: 默认状态
              loading: 开始加载
              loaded: 加载完成
              interactive: 加载完成但尚不可用
              complete: 所有数据已经准备好
           */

          if (script.readyState) {
            script.addEventListener('readstatechange', readStateChange);
          } else {
            script.addEventListener('load', saveMethods);
          }

          script.addEventListener('error', onError);

          try {
            document.body && document.body.appendChild(script); // script = null;
          } catch (e) {
            console.log('script load error , not found src');
          }
        }
      }
    } // 移除文件

  }, {
    key: "removeScript",
    value: function removeScript(src) {
      var $script = document.querySelector("[src=\"".concat(src, "\"]"));
      $script && document.body.removeChild($script);
    } // 卸载文件

  }, {
    key: "unstall",
    value: function unstall() {
      // TODO 卸载二开文件
      //销毁二开绑定在window上的事件
      var extendUrl = getExtendUrl(this.billinfo);

      if (extendUrl) {
        // let name = `NCCExtend${appcode}_${pagecode}`;
        if (window[ExtendModuleName]) window[ExtendModuleName] = null;
        this.removeScript("../../../../".concat(ExtendModuleName, "/").concat(extendUrl, "/index.js"));
      }
    }
  }]);

  return MethodsModel;
}();

/* harmony default export */ var methodsModel = (methodsModel_MethodsModel);
// CONCATENATED MODULE: ./src/platform/FastExtend/index.js
// 用于二次开发的快速扩展封装

var fastExtend = new methodsModel();
/* harmony default export */ var FastExtend = (fastExtend); // demo 在价格调整单
// EXTERNAL MODULE: external "@platform/components/index"
var components_index_ = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(98);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/platform/components/createPage.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function createPage_extends() { createPage_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return createPage_extends.apply(this, arguments); }

function createPage_slicedToArray(arr, i) { return createPage_arrayWithHoles(arr) || createPage_iterableToArrayLimit(arr, i) || createPage_unsupportedIterableToArray(arr, i) || createPage_nonIterableRest(); }

function createPage_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function createPage_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function createPage_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function createPage_toConsumableArray(arr) { return createPage_arrayWithoutHoles(arr) || createPage_iterableToArray(arr) || createPage_unsupportedIterableToArray(arr) || createPage_nonIterableSpread(); }

function createPage_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function createPage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return createPage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return createPage_arrayLikeToArray(o, minLen); }

function createPage_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function createPage_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return createPage_arrayLikeToArray(arr); }

function createPage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createPage_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function createPage_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { createPage_ownKeys(Object(source), true).forEach(function (key) { createPage_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { createPage_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function createPage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createPage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createPage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function createPage_createClass(Constructor, protoProps, staticProps) { if (protoProps) createPage_defineProperties(Constructor.prototype, protoProps); if (staticProps) createPage_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







 // import searchCompatible from './Search/output';







function outputWrapper(name, EXPORTS) {
  var _this = this;

  var output = {};
  !Array.isArray(EXPORTS) && (EXPORTS = [EXPORTS]);
  EXPORTS.forEach(function (EXPORT) {
    if (EXPORT) {
      Object.keys(EXPORT).forEach(function (key) {
        output[key] = EXPORT[key].bind(_this);
      });
    } else {
      console.warn("".concat(name, "\u7EC4\u4EF6\u6CA1\u6709\u52A0\u8F7D"));
    }
  });
  return output;
}

/* harmony default export */ var createPage = __webpack_exports__["a"] = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      initTemplate = _ref.initTemplate,
      mutiLangCode = _ref.mutiLangCode,
      billinfo = _ref.billinfo,
      domainName = _ref.domainName,
      hashChangeCallBack = _ref.hashChangeCallBack,
      relationAfterEventCallBack = _ref.relationAfterEventCallBack,
      orderOfHotKey = _ref.orderOfHotKey,
      appAutoFocus = _ref.appAutoFocus,
      historyBack = _ref.historyBack;

  return function (App) {
    var Page = /*#__PURE__*/function (_Component) {
      _inherits(Page, _Component);

      var _super = _createSuper(Page);

      // 数据
      function Page(props) {
        var _this2;

        createPage_classCallCheck(this, Page);

        _this2 = _super.call(this, props);
        _this2.use = {
          search: function search() {}
        };
        _this2.componentNames = [];

        _this2.register = function (name, store) {
          _this2.componentNames.push(name);

          _this2.use[name] = _this2.use[name] || function () {
            for (var _len = arguments.length, ids = new Array(_len), _key = 0; _key < _len; _key++) {
              ids[_key] = arguments[_key];
            }

            ids.forEach(function (id) {
              _this2[name + 'DataSource'] = _this2[name + 'DataSource'] || {};
              _this2[name + 'DataSource'][id] = _this2[name + 'DataSource'][id] || (store || _this2[name]._store)();
            });
          };
        };

        _this2.formDataSource = {};
        _this2.simpleTableDataSource = {};
        _this2.editTableDataSource = {};
        _this2.cardTableDataSource = {};
        _this2.searchDataSource = {};
        _this2.treeTableDataSource = {};
        _this2.metaData = {};

        _this2.beforeUpdatePage = function () {
          _this2.isUpdatePage = true;
        };

        _this2.updatePage = function (formid, tableid, buttonAreas, editid) {
          var autoFocus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          _this2.isUpdatePage = false;

          if (buttonAreas && Array.isArray(buttonAreas)) {// this.button.updateButtons(buttonAreas) // 按钮组更新
          }

          if (formid) {
            _this2.form.updateForm(formid);
          }

          if (tableid) {
            _this2.cardTable.updateTable(tableid, autoFocus);
          }

          if (editid) {
            _this2.editTable.updateTable(editid, autoFocus);
          }
        };

        _this2.keyDownHandle = function (e) {
          var isTab = [e.keyCode, e.which, e.charCode].find(function (e) {
            return e === 9 || e === 13;
          });
          isTab && (api_index_["ViewModel"].shouldAutoFocus = true);
          setTimeout(function () {
            api_index_["ViewModel"].shouldAutoFocus = false;
          }, 300);
        };

        _this2.disableHistory = function () {
          history.pushState(null, null, document.URL);
        };

        _this2.isIE = function () {
          var userAgent = navigator.userAgent,
              isIE = false; //判断是否IE浏览器

          if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
            isIE = true;
          } //判断是否Edge浏览器


          if (userAgent.indexOf("Trident") > -1) {
            isIE = true;
          }

          return isIE;
        };

        _this2.startPerMonitor = function () {
          //渲染监控 --chendch
          console.log("sprBegin---");
          _this2.listenSprNum = 1;

          if (window.top.sys_monitor) {
            var _that = _assertThisInitialized(_this2);

            window.top.addEventListener('modifySPR', _this2.handleModifySPR, false); //处理单页跳转情况

            if (window.top.sys_monitor.getbMonitor && window.top.sys_monitor.getbMonitor() && !_this2.isIE()) window.top.sys_monitor.initMonitor(_that, false);
          }
        };

        _this2.handleModifySPR = function (obj) {
          console.log("111--", obj.data, _this2.listenSprNum);

          if (obj.data.spr && _this2.listenSprNum == 1 && window.top.sys_monitor) {
            window.top.sys_monitor.startMonitor();
            debugger;
            var isOpenMonitor = window.top.sys_monitor.getbMonitor();
            debugger;

            if (isOpenMonitor) {
              _this2.listenSprNum += 1;
              debugger;
              window.top.sys_monitor.initMonitor(that);
            }
          } else {
            _this2.listenSprNum = 1;
          }
        };

        _this2.setPageStatus = function (type, id) {
          if (['edit', 'add', 'browse'].includes(type)) {
            //改变页面url
            var hash = window.location.hash.split('?'),
                query = lib_default.a.parse(hash[1]);
            query = createPage_objectSpread(createPage_objectSpread({}, query), {}, {
              type: type,
              id: id
            });
            hash[1] = lib_default.a.stringify(query);
            window.location.hash = hash.join('?'); // 改变页面状态

            _this2.setState({
              status: type
            }, function () {//console.log(this.state.status);
            });
          }
        };

        _this2.getPageStatus = function () {
          return _this2.state.status;
        };

        _this2.endMonitor = function () {
          if (window.top.sys_monitor && window.top.sys_monitor.endMonitor) {
            window.top.sys_monitor.endMonitor();
          }
        };

        _this2.myState = {
          oprationIndex: -1,
          // 存注册后的按钮数据
          buttonsComponent: {},
          buttonsLangJson: {
            lang: null,
            intl: null
          },
          stopOprationBtnsRenderAreas: {},
          // 存放禁止操作列render的区域
          oprationButtons: {},
          appButtons: {},
          buttons: [],
          // 存注册后的按钮数据
          btnInfo: {},
          // 存放按钮的显示隐藏，禁用状态，主要次要，弹窗提示等信息
          transferTable: {
            totalTemplateKeys: {
              columns: [],
              bodyColumn: [],
              fullColumns: []
            }
          },
          status: {
            totalStatusOfTransferTable: false,
            headTotalStatusOfTransferTable: false,
            fullTotalStatusOfTransferTable: false,
            bodyTotalStatusOfTransferTable: false,
            traversalStatus: false // 遍历状态

          },
          intl: {},
          // 放置多语
          jsonIntl: {},
          // 放置多语
          transferList: {},
          // 下游转单
          search: {
            keySessionS: []
          }
        }; //存储表单组件this

        _this2.myForm = {}; //云原生--出错时渲染按钮区

        _this2.myCrossServiceBtn = {}; //云原生--暂时按钮状态值

        _this2.myCrossServiceState = {}; //云原生--错误单据交互，存单据整体信息

        _this2.nativeSocketBillInfo = {};
        _this2.syncTreeDataSource = {};
        _this2.asyncTreeDataSource = {}; //全局的pagecode参数

        _this2.globalPageCode = '';

        if (billinfo && billinfo.pagecode) {
          _this2.globalPageCode = billinfo.pagecode;
        } // 业务组在进行页面跳转时候传递的hash参数


        _this2.hashChangeCallBack = hashChangeCallBack; //注册平台编辑后回调

        _this2.relationAfterEventCallBack = relationAfterEventCallBack; //存储翻页组件this

        _this2.myCardPagination;
        _this2.myTable = {
          myEditTable: {},
          myMulTable: {}
        }; //用来存储表格中，tableId 对应的 表格组件 

        _this2.myTableData = {
          myEditData: {},
          myMulData: {}
        }; //用来存储表格当没有获取ref时的表格数据的
        // 多组件间的信息交流控制器

        _this2.infoExchangeController = createPage_objectSpread({
          // 这个方法无用了  嗯 别问我为什么不删  大概是回忆吧
          // 里面存放一些组件之间的通信信息  这个目前用于  查询区组件和表格之类的组件进行沟通
          onHeightChange: function onHeightChange(area) {
            if (!area) {
              // area 包括 'search' 'page' table 等
              return false;
            }
          }
        }, api_index_["PubSub"]);
        /**
             *
             * @type {{
             *  orderOfHotKey: type Array, 用于排列tabChange的顺序
             *  withHotKeyChange: type Boolean 是否使用hotKey的开关
             *  }}
             */

        _this2.orderOfHotKey = orderOfHotKey || [];
        _this2.withHotKeyChange = _this2.orderOfHotKey.length > 0; // add by bbqin 当前页面是否自动聚焦

        _this2.appAutoFocus = appAutoFocus !== false; //业务组控制执行自动聚焦的时机 false -> 平台控制， true -> 业务组控制

        _this2.autoFocusDeferred = false;
        _this2.state = {
          status: status,
          meta: {},
          form: {},
          cardPagination: {},
          formBack: {},
          formGroupData: {},
          showFormIcon: {},
          groupsId: [],
          button: {},
          // 存createButton 创建的按钮
          buttons: [],
          // 存注册后的按钮数据
          btnInfo: {},
          // 存放按钮的显示隐藏，禁用状态，主要次要，弹窗提示等信息
          table: {},
          anchorNav: {},
          dragDown: {},
          insertTable: {},
          //嵌套类型表格
          transferTable: {},
          //转单表格
          transferList: {},
          //转单列表
          renderItem: {},
          treeData: {},
          modal: {},
          tableModeldata: {},
          treeTableCol: {},
          referItem: {},
          intl: {},
          formItemWidth: {},
          autoFocusFormItem: {},
          // uploader: {}, // 上传组件
          tabOrder: [],
          tab: '',
          tabData: {}
        };
        _this2.billinfo = billinfo;
        _this2.currentBill = {};
        _this2.context = {};
        _this2.formItemAttrFlag = {}; //以下是提供给业务组的方法

        _this2.meta = {
          getMeta: function getMeta() {
            // 兼容一下数据被引用导致的错误  by bbqin
            var meta = _this2.state.meta,
                res = {};

            var _loop = function _loop() {
              var key = _Object$keys[_i];
              // res[key] = JSON.parse(JSON.stringify(meta[key]));
              res[key] = meta[key];

              if (meta[key] && meta[key].items) {
                if (meta[key].moduletype === 'table') {
                  res[key].items = meta[key].items.get ? meta[key].items.get() : meta[key].items; // getArrayData
                } // 表单处理 因为区分主子表 所以 逻辑有问题 暂时先不处理


                if (meta[key].moduletype === 'form') {
                  var DataSource = _this2['formDataSource'] || {},
                      currentSource = {}; // 当前store是否存在 是否为主表ID 

                  if (DataSource[key]) {
                    currentSource = DataSource[key];
                  } else {
                    // 不存在时 判断是否为子表ID, 找到子表ID对应的主表ID;
                    var formrelation = meta && meta.formrelation || {};
                    Object.keys(formrelation).forEach(function (item) {
                      if (Array.isArray(formrelation[item]) && formrelation[item].includes(key) && DataSource[item]) {
                        currentSource = DataSource[item];
                      } else {
                        // 暂时先移除 页签字段 todo
                        // 多页签数据处理 假如不是子表时  需进行判断是否为多页签子表 
                        var formassociatedrelation = meta && meta.formassociatedrelation || {};
                        Object.keys(formassociatedrelation).forEach(function (tabsID) {
                          if (Array.isArray(formassociatedrelation[tabsID].formtabs) && formassociatedrelation[tabsID].formtabs.includes(item)) {
                            currentSource = DataSource[tabsID];
                          }
                        });
                      }
                    });
                  } // 初始化之后才进行 根据store 取值 为初始化  还是根据meta 自身状态


                  if (currentSource && typeof currentSource.getMetaItems == 'function') {
                    var currentItems = currentSource.getMetaItems(key) || [];

                    if (currentItems.length !== 0) {
                      // 能取到items 再把items复值给items 取不到就使用原有meta数据
                      res[key].items = currentItems;
                    }
                  } else {
                    res[key].items = meta[key].items;
                  }
                }
              }
            };

            for (var _i = 0, _Object$keys = Object.keys(meta); _i < _Object$keys.length; _i++) {
              _loop();
            }

            return res;
          },
          setMeta: function setMeta(meta, callback) {
            Object.keys(meta).forEach(function (id) {
              if (meta[id] && meta[id].moduletype) {
                _this2.componentNames.find(function (name) {
                  var dataSources = _this2[name + 'DataSource'];

                  if (dataSources && dataSources[id]) {
                    // 使用use方法注册过的话，会有dataSource[id]
                    // TODO:meta的格式
                    dataSources[id].setMeta(meta, id, false, _this2.app_context);
                    return true;
                  }
                });
              }
            });

            _this2.setState({
              meta: meta
            }, function () {
              callback && callback();
            });
          },
          addMeta: function addMeta(meta, callback) {
            // 如果是属性 gridrelation / formrelation 要合并而不是覆盖
            if (meta.gridrelation && _this2.state.meta.gridrelation) {
              for (var pop in _this2.state.meta.gridrelation) {
                if (!meta.gridrelation[pop]) {
                  meta.gridrelation[pop] = _this2.state.meta.gridrelation[pop];
                }
              }
            }

            if (meta.formrelation && _this2.state.meta.formrelation) {
              for (var _pop in _this2.state.meta.formrelation) {
                if (!meta.formrelation[_pop]) {
                  meta.formrelation[_pop] = _this2.state.meta.formrelation[_pop];
                }
              }
            }

            if (meta.containerrelation && _this2.state.meta.containerrelation) {
              for (var _pop2 in _this2.state.meta.containerrelation) {
                if (!meta.containerrelation[_pop2]) {
                  meta.containerrelation[_pop2] = _this2.state.meta.containerrelation[_pop2];
                }
              }
            } // 表单多页签关联关系  要合并而不是覆盖


            if (meta.formassociatedrelation && _this2.state.meta.formassociatedrelation) {
              for (var _pop3 in _this2.state.meta.formassociatedrelation) {
                if (!meta.formassociatedrelation[_pop3]) {
                  meta.formassociatedrelation[_pop3] = _this2.state.meta.formassociatedrelation[_pop3];
                }
              }
            }

            _this2.meta.setMeta(Object.assign(_this2.state.meta, meta), callback);
          },
          removeMeta: function removeMeta(meta) {
            if (_this2.state.meta.hasOwnProperty(meta)) {
              delete _this2.state.meta[meta];

              _this2.setState({
                meta: _this2.state.meta
              });
            }
          },
          // 上面这个预留 多表头将来会写到meta中使用
          multipleMeta: function multipleMeta(data) {
            var gridMultiple = data.gridMultiple;

            if (gridMultiple) {
              var tempArr = Object.keys(gridMultiple);

              if (tempArr.length) {
                tempArr.forEach(function (item) {
                  // item为每个键id  如 revecont_b
                  var mulArrItem = data.gridMultiple[item];
                  mulArrItem.map(function (one) {
                    var d = {
                      label: one.name,
                      attrcode: one.code,
                      visible: true,
                      children: []
                    };
                    var flag = {};
                    one.children.map(function (everyOne) {
                      // everyOne 为数组的每个元素
                      data[item].items.map(function (meta, index) {
                        if (meta.attrcode == everyOne) {
                          d.children.push(meta);

                          if (!flag[item]) {
                            data[item].items.splice(index, 1, d);
                          } else {
                            data[item].items.splice(index, 1);
                          }

                          flag[item] = true;
                        }
                      });
                    });
                  });
                });
              }
            }

            return data;
          },
          // 多表头结构处理
          handleMultiple: function handleMultiple(data, relation) {
            if (relation) {
              var tempArr = Object.keys(relation);

              if (tempArr.length) {
                tempArr.forEach(function (item) {
                  // item为每个键id  如 revecont_b
                  var mulArrItem = relation[item];
                  mulArrItem.map(function (one) {
                    _this2.meta.handleChildMultiple(data, item, one);
                  });
                });
              }
            }

            return data;
          },
          // 多表头递归处理多级表头 zhanghengh
          handleChildMultiple: function handleChildMultiple(data, item, one) {
            var first = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
            var visible = Object(api_index_["isUndefined"])(one.visible) ? true : !!one.visible;
            var d = {
              label: one.name,
              attrcode: one.code,
              visible: visible,
              children: []
            };
            var flag = {};
            one.children.map(function (everyOne) {
              data[item].items.map(function (meta, index) {
                if (meta.attrcode == everyOne) {
                  d.children.push(meta);

                  if (first && !flag[item]) {
                    data[item].items.splice(index, 1, d);
                  } else {
                    data[item].items.splice(index, 1);
                  }

                  flag[item] = true;
                } else if (Object(api_index_["isObj"])(everyOne) && everyOne.hasOwnProperty('children')) {
                  var multipleItem = _this2.meta.handleChildMultiple(data, item, everyOne, false);

                  if (multipleItem.children.length > 0) {
                    d.children.push(multipleItem);
                  }
                }
              });
            });
            return d;
          },
          // 以下是wangtaos为司库云-C添加，误删
          renderTabs: function renderTabs(meta, tabOrder, showTab, callback) {
            showTab = showTab && Array.isArray(showTab) ? showTab : tabOrder;
            meta.gridrelation[tabOrder && tabOrder[0] || 'tab'].tabRelation = createPage_toConsumableArray(showTab);
            meta.gridrelation['extra_&&&'] = createPage_objectSpread({}, meta.gridrelation[tabOrder && tabOrder[0] || 'tab']);
            meta['extra_&&&'] = {
              items: []
            };

            _this2.setState({
              meta: meta,
              tabOrder: tabOrder,
              tab: showTab[0]
            }, function () {
              callback && callback();
            });
          }
        };
        _this2.primordialTable = {}; //用来存储通过ref获取到的原生table

        _this2.batchData = {}; //用来存储批量修改的每个表格的数据

        _this2.editTableInitValue = {};
        _this2.tableChangedRowsOldValue = {}; // 以id划分对象

        _this2.formOldValues = {};
        _this2.formItemAttrFlag = {};
        _this2.formStatusFlag = {};
        _this2.formSetFormValues = {};
        _this2.formsetFormVisible = {};
        _this2.setFormVisibleByForm = {};
        _this2.copyMetaBeforePkorg = {}; // 方法

        _this2.form = getCompatibleApi.call(_assertThisInitialized(_this2), formCompatible);
        _this2.table = getCompatibleApi.call(_assertThisInitialized(_this2), simpleTableCompatible);
        _this2.editTable = getCompatibleApi.call(_assertThisInitialized(_this2), editTableCompatible);
        _this2.cardTable = getCompatibleApi.call(_assertThisInitialized(_this2), cardTableCompatible); // this.search = getCompatibleApi.call(this, searchCompatible)
        //	树状表组件
        // this.treeTableManyCol = outputWrapper.call(this, 'treeTableManyCol', treeTableCompatible);

        _this2.treeTableManyCol = getCompatibleApi.call(_assertThisInitialized(_this2), tree_table_index_default.a);
        _this2.search = outputWrapper.call(_assertThisInitialized(_this2), 'search', components_index_["CreateSearch"]);
        _this2.cardPagination = outputWrapper.call(_assertThisInitialized(_this2), 'cardPagination', components_index_["CardPagination"]);
        _this2.BillHeadInfo = outputWrapper.call(_assertThisInitialized(_this2), 'BillHeadInfo', components_index_["BillHeadInfo"]);
        _this2.socket = outputWrapper.call(_assertThisInitialized(_this2), 'socket', components_index_["Socket"]);
        _this2.button = outputWrapper.call(_assertThisInitialized(_this2), 'button', [components_index_["CrossServiceBtns"], components_index_["Button"], components_index_["ButtonApp"]]); // 上传下载
        // this.Uploader = Uploader.bind(this);
        // 可拖拽宽度的dom盒子组件

        _this2.DragWidthCom = components_index_["DragWidthCom"]; //简单搜索
        //内置新增，refer及其他条件查询
        //嵌套类型表格

        _this2.insertTable = outputWrapper.call(_assertThisInitialized(_this2), 'insertTable', components_index_["InsertTable"]); //拉单-已选列表

        _this2.transferTable = outputWrapper.call(_assertThisInitialized(_this2), 'transferTable', transfer_table_index_default.a); //创建异步树组件

        _this2.asyncTree = outputWrapper.call(_assertThisInitialized(_this2), 'asyncTree', components_index_["AsyncTree"]); //创建同步树组件

        _this2.syncTree = outputWrapper.call(_assertThisInitialized(_this2), 'syncTree', components_index_["SyncTree"]); // 下载组件

        _this2.downLoad = function (_ref2) {
          var data = _ref2.data,
              url = _ref2.url;
          Object(api_index_["formDownload"])({
            params: data,
            url: url,
            enctype: 1
          });
        }; // 审批流程图组件
        // this.approveDetail = { create: approveDetail.bind(this) };
        //简单提示框组件


        _this2.modal = outputWrapper.call(_assertThisInitialized(_this2), 'modal', components_index_["CreateModal"]); // 带四种提示符框组件

        _this2.NCmodal = outputWrapper.call(_assertThisInitialized(_this2), 'NCmodal', components_index_["CreateNCModal"]); // 用自定义组件替换表单组件

        _this2.renderItem = function (moduletype, moduleId, id, newItem) {
          // 暂时先处理表单
          if (moduletype === 'form') {
            var DataSource = _this2[moduletype + 'DataSource'] || {},
                currentSource = {}; // 当前store是否存在 是否为主表ID 

            if (DataSource[moduleId]) {
              currentSource = DataSource[moduleId];
            } else {
              // 不存在时 判断是否为子表ID, 找到子表ID对应的主表ID;
              var formrelation = _this2.state.meta && _this2.state.meta.formrelation;
              formrelation && Object.keys(formrelation || {}).forEach(function (item) {
                if (Array.isArray(formrelation[item]) && formrelation[item].includes(moduleId) && DataSource[item]) {
                  currentSource = DataSource[item];
                }
              });
            } // let dataSources = this[moduletype + 'DataSource'][moduleId] || { replaceItem: () => { } };


            typeof currentSource.replaceItem == 'function' && currentSource.replaceItem(id, newItem);
          } else {
            var renderItem = _this2.state.renderItem;
            _this2.state.renderItem[moduletype] = _this2.state.renderItem[moduletype] || {};
            _this2.state.renderItem[moduletype][moduleId] = _this2.state.renderItem[moduletype][moduleId] || {};
            _this2.state.renderItem[moduletype][moduleId][id] = newItem;

            _this2.setState({
              renderItem: renderItem
            });
          }
        }; //得到页面所有数据


        _this2.getPageDataByMeta = function () {
          var metaObj = _this2.meta.getMeta();

          var saveData = {};

          for (var id in metaObj) {
            if (metaObj[id].moduletype && metaObj[id].moduletype === 'form') {
              saveData[id] = _this2.form.getAllFormValue(id);
            } else if (metaObj[id].moduletype && metaObj[id].moduletype === 'table') {
              saveData[id] = _this2.editTable.getAllRows(id);
            }
          }

          return saveData;
        }; //创建主子表数据


        _this2.createMasterChildData = function (pageid, head_code, body_code, tabletype, rows) {
          var saveData = {
            pageid: pageid,
            head: {},
            body: {}
          };

          var metaObj = _this2.meta.getMeta(); //saveData.templetid = metaObj.pageid && metaObj.pageid;


          if (_this2.currentBill && _this2.currentBill.templetid) {
            saveData.templetid = _this2.currentBill.templetid;
          } else {
            saveData.templetid = metaObj.pageid && metaObj.pageid;
          }

          if (metaObj[head_code] && metaObj[head_code].moduletype && metaObj[head_code].moduletype === 'form') {
            saveData.head[head_code] = _this2.form.getAllFormValue(head_code);
            saveData.head[head_code].areacode = head_code;
          }

          if (metaObj[body_code] && metaObj[body_code].moduletype && metaObj[body_code].moduletype === 'table') {
            if (rows) {
              saveData.body[body_code] = {
                areaType: 'table',
                rows: rows,
                areacode: null
              };
            } else {
              if (tabletype && tabletype === 'editTable') {
                saveData.body[body_code] = _this2.editTable.getAllData(body_code);
              } else {
                saveData.body[body_code] = _this2.cardTable.getAllData(body_code);
              }
            }

            saveData.body[body_code].areacode = body_code;
          }

          return saveData;
        }; //sikuyun创建主子表数据,wangtaos添加


        _this2.createTabsMasterChildData = function (pageid, head_code, body_code) {
          var saveData = {
            pageid: pageid,
            head: {},
            body: {}
          };

          var metaObj = _this2.meta.getMeta();

          saveData.templetid = metaObj.pageid && metaObj.pageid;

          if (metaObj[head_code] && metaObj[head_code].moduletype && metaObj[head_code].moduletype === 'form') {
            saveData.head[head_code] = _this2.form.getAllFormValue(head_code);
            saveData.head[head_code].areacode = head_code;
          }

          if (metaObj[body_code] && metaObj[body_code].moduletype && metaObj[body_code].moduletype === 'table') {
            saveData.body[body_code] = _this2.cardTable.getAllTabsData(body_code);
            saveData.body[body_code].areacode = body_code;
          }

          return saveData;
        }; //创建主子表简化数据


        _this2.createMasterChildDataSimple = function (pageid, head_code, body_code, tabletype) {
          var isDeleteEmptyItem = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          var saveData = {
            pageid: pageid,
            head: {},
            body: {}
          };

          var metaObj = _this2.meta.getMeta(); //saveData.templetid = metaObj.pageid && metaObj.pageid;


          if (_this2.currentBill && _this2.currentBill.templetid) {
            saveData.templetid = _this2.currentBill.templetid;
          } else {
            saveData.templetid = metaObj.pageid && metaObj.pageid;
          }

          if (metaObj[head_code] && metaObj[head_code].moduletype && metaObj[head_code].moduletype === 'form') {
            //saveData.head[head_code] = deleteEmptyData(this.form.getAllFormValue(head_code));
            saveData.head[head_code] = _this2.form.getAllFormValueSimple(head_code);
            saveData.head[head_code].areacode = head_code;
          }

          if (metaObj[body_code] && metaObj[body_code].moduletype && metaObj[body_code].moduletype === 'table') {
            if (tabletype && tabletype === 'editTable') {
              // inner_use 为平台内部使用方案，否则为资产使用方案(叶勋)
              saveData.body[body_code] = Object(api_index_["delEmptyData"])(_this2.editTable.getAllData(body_code), 'inner_use', isDeleteEmptyItem);
            } else {
              saveData.body[body_code] = Object(api_index_["delEmptyData"])(_this2.cardTable.getAllData(body_code), 'inner_use', isDeleteEmptyItem);
            }

            saveData.body[body_code].areacode = body_code;
          }

          return saveData;
        };

        _this2.requestMeta = function (data, appcode, pagecode, callback, ssc_templetid) {
          var isCache = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
          var urlAppcode = arguments.length > 6 ? arguments[6] : undefined;
          //更新pagecode，createUIDOM传过来的pagecode优先级高于billinfo
          _this2.globalPageCode = pagecode;
          var reqData = [{
            rqUrl: '/platform/templet/querypage.do',
            rqJson: "{\n  \"pagecode\": \"".concat(pagecode, "\",\n  \"appcode\": \"").concat(appcode, "\"\n}"),
            rqCode: 'template'
          }, {
            rqUrl: '/platform/appregister/queryallbtns.do',
            rqJson: "{\n  \"pagecode\": \"".concat(pagecode, "\",\n  \"appcode\": \"").concat(appcode, "\"\n}"),
            rqCode: 'button'
          }, {
            rqUrl: '/platform/appregister/queryappcontext.do',
            rqJson: "{\n  \"appcode\": \"".concat(urlAppcode || appcode, "\"}"),
            rqCode: 'context'
          }];

          if (ssc_templetid) {
            reqData[0] = {
              rqUrl: '/platform/templet/querypage.do',
              rqJson: "{\n  \"pagecode\": \"".concat(pagecode, "\",\n  \"appcode\": \"").concat(appcode, "\",\n  \"templetid\": \"").concat(ssc_templetid, "\"\n}"),
              rqCode: 'template'
            };
          }

          if (data && data.reqDataQuerypage) {
            reqData[0] = data.reqDataQuerypage;
          }

          if (data && data.reqDataQueryallbtns) {
            reqData[1] = data.reqDataQueryallbtns;
          } //querypage: compareTs: true时,模板改变时，会返回模板数据，否则返回 false


          var storeCipher = localStorage.getItem('storeCipher') != '0'; //let keySessionS = 'appTempletStorage_' + appcode + '_' + pagecode;

          var keySessionS = Object(api_index_["getMetaKey"])(appcode, pagecode);
          var g = new api_index_["gzip"]();

          _this2.myState.search.keySessionS.push(keySessionS);

          var meta = {}; //先判断有无缓存，有缓存，再查一下模板是不是被改过，改过更新缓存，没改什么也不做；若无缓存，不带走ts发请求查询

          if (isCache) {
            //业务需要缓存
            meta = Object(api_index_["getGlobalStorage"])('localStorage', keySessionS); //先解密后 解压

            if (storeCipher) {
              //meta = meta && decrypt(meta, aeskey)
              meta = meta && g.unzip(meta);
            } else {
              meta = meta && JSON.parse(meta);
            }

            if (meta) {
              //有缓存
              //查看是否需要更新缓存：
              var ts = '';

              if (meta.template && meta.template.ts) {
                ts = meta.template.ts;
              } //先将meta给业务组使用，若
              // //抛给业务组使用，待更新模板更新后，再调用一次业务处理meta方法
              // // 二开回调
              // getCheckedExtendMethod(this, 'templateAlreadyLoaded')(meta);
              // if (meta.template && typeof callback == 'function') {
              //     callback(meta);  //业务组回调中做了提示，会导致业务组的回调调用多次 提示可以            
              // }
              //加载断层问题，暂时先更新一次meta; 待后台ts不同时 不再返回button和context再优化
              //if (meta.template) {
              // let storeMeta = JSON.parse(JSON.stringify(meta));
              // //使用 addMeta 防止业务之前有setMeta
              // this.app_context = storeMeta.context;
              // this.meta.setMeta(storeMeta.template);

              /**
               * 直接setMeta 不调用业务回调会引起的问题：
               * setMeta后，会调用createForm 表单会取一次status 
               * 判断完ts后再执行 业务回调，业务代码修改了区域的status，不会再生效
               * 解决方案：1. 表单获取meta status的时候 做判断，有该属性，且没有使用API setStatus时，再去meta的status
               * 2.业务统一用法：所有组件改变状态都使用组件的API进行更新
               */
              //}


              reqData[0].rqJson = "{\n  \"pagecode\": \"".concat(pagecode, "\",\n  \"appcode\": \"").concat(appcode, "\"\n, \n  \"compareTs\":true\n, \n  \"ts\":\"").concat(ts, "\"\n}");

              _this2.refreshMeta(g, meta, reqData, callback, storeCipher, keySessionS, appcode, pagecode, true);
            } else {
              //无缓存，不带ts发请求，查询模板数据
              _this2.refreshMeta(g, {}, reqData, callback, storeCipher, keySessionS, appcode, pagecode, false);
            }
          } else {
            //业务不要缓存
            _this2.refreshMeta(g, {}, reqData, callback, storeCipher, keySessionS, appcode, pagecode, false);
          }
        };

        _this2.refreshMeta = function (gzip, cacheMeta, reqData, callback, storeCipher, keySessionS, appcode, pagecode, isExeCacheMeta) {
          Object(api_index_["ajax"])({
            url: '/nccloud/platform/pub/mergerequest.do',
            data: reqData,
            sysAppcode: appcode,
            success: function success(res) {
              if (res.data) {
                var jsonMeta = '';
                _this2.app_context = res.data.context;
                cacheMeta.context = res.data.context; //更新按钮

                cacheMeta.button = res.data.button;

                if (res.data.template) {
                  var meta = res.data; //将 appcode 和 pagecode 挂在区域上

                  var MetaTemp = meta.template;

                  for (var _i2 = 0, _Object$keys2 = Object.keys(MetaTemp); _i2 < _Object$keys2.length; _i2++) {
                    var MetaItem = _Object$keys2[_i2];

                    if (MetaTemp[MetaItem].moduletype && MetaTemp[MetaItem].moduletype === 'table') {
                      MetaTemp[MetaItem].appcode = appcode;
                      MetaTemp[MetaItem].pagecode = pagecode;
                      MetaTemp[MetaItem].templateCode = MetaTemp.code;
                      MetaTemp[MetaItem].pageid = MetaTemp.pageid;
                    }
                  }

                  jsonMeta = JSON.stringify(meta); // 二开回调

                  Object(utils["c" /* getCheckedExtendMethod */])(_assertThisInitialized(_this2), 'templateAlreadyLoaded')(meta); //抛给业务组使用

                  if (callback && typeof callback == 'function') {
                    callback(meta);
                  }
                } else {
                  //这里还是要执行业务数据，因为context和button也是每次都可能更新的
                  jsonMeta = JSON.stringify(cacheMeta); // 二开回调

                  Object(utils["c" /* getCheckedExtendMethod */])(_assertThisInitialized(_this2), 'templateAlreadyLoaded')(cacheMeta);

                  if (callback && typeof callback == 'function') {
                    callback(cacheMeta);
                  }
                } //-----------------加密缓存，并对缓存数据更新-----------------//
                //先压缩，后加密


                var newMeta = jsonMeta;

                if (storeCipher) {
                  var gmeta = jsonMeta && gzip.zip(jsonMeta); // newMeta = gmeta && encrypt(gmeta, aeskey);

                  newMeta = gmeta;
                }

                try {
                  Object(api_index_["setGlobalStorage"])('localStorage', keySessionS, newMeta);
                } catch (e) {
                  Object.keys(localStorage).forEach(function (item) {
                    if (item.includes('appTempletStorage_')) {
                      delete localStorage[item];
                    }
                  });
                  Object(api_index_["setGlobalStorage"])('localStorage', keySessionS, newMeta);
                }
              } else {
                // 二开回调
                if (!isExeCacheMeta) {
                  Object(utils["c" /* getCheckedExtendMethod */])(_assertThisInitialized(_this2), 'templateAlreadyLoaded')(cacheMeta);

                  if (callback && typeof callback == 'function') {
                    callback(cacheMeta);
                  }
                }
              }
            }
          });
        }; //绘制页面


        _this2.createUIDom = function (data, callback, isCache) {
          window.actionName = '合并请求';

          if (data.billtype) {
            //根据billtype查appcode
            var sencetype = '1';
            Object(api_index_["ajax"])({
              url: '/nccloud/platform/pub/getappurl.do',
              method: 'post',
              data: {
                billpk: null,
                billtypecode: data.billtype,
                pagecode: data.pagecode || null,
                sence: data.sence || sencetype
              },
              success: function success(result) {
                //查询成功后请求模板
                if (result.success && result.data && result.data.appPageVO) {
                  var appcode = result.data.appcode;
                  var pagecode = data.pagecode || result.data.appPageVO.pagecode;

                  _this2.requestMeta(data, appcode, pagecode, callback, null, isCache);
                }
              }
            });
          } else {
            var appReqParam = Object(api_index_["getAppReqParam"])();
            var code = appReqParam.appcode;
            var page = appReqParam.pagecode;
            var ssc_templetid = appReqParam.ssc_templetid;
            var pagecode = data.pagecode || page;
            var appcode = data.appcode || code;

            _this2.requestMeta(data, appcode, pagecode, callback, ssc_templetid, isCache, code);
          }
        }; //创建一主多子简化数据


        _this2.createExtCardDataSimple = function (pageid, head_code, bodys_code) {
          var isDeleteEmptyItem = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var saveData = {
            pageid: pageid,
            head: {},
            bodys: {}
          };

          var metaObj = _this2.meta.getMeta(); //saveData.templetid = metaObj.pageid && metaObj.pageid;


          if (_this2.currentBill && _this2.currentBill.templetid) {
            saveData.templetid = _this2.currentBill.templetid;
          } else {
            saveData.templetid = metaObj.pageid && metaObj.pageid;
          }

          if (metaObj[head_code] && metaObj[head_code].moduletype && metaObj[head_code].moduletype === 'form') {
            saveData.head[head_code] = _this2.form.getAllFormValueSimple(head_code);
            saveData.head[head_code].areacode = head_code;
          }

          if (bodys_code && bodys_code instanceof Array && bodys_code.length > 0) {
            bodys_code.forEach(function (body_code) {
              if (metaObj[body_code] && metaObj[body_code].moduletype && metaObj[body_code].moduletype === 'table') {
                saveData.bodys[body_code] = Object(api_index_["delEmptyData"])(_this2.cardTable.getAllData(body_code), 'inner_use', isDeleteEmptyItem);
                saveData.bodys[body_code].areacode = body_code;
              }
            });
          }

          return saveData;
        }; //创建一主多子数据


        _this2.createExtCardData = function (pageid, head_code, bodys_code, rows) {
          var saveData = {
            pageid: pageid,
            head: {},
            bodys: {}
          };

          var metaObj = _this2.meta.getMeta(); //saveData.templetid = metaObj.pageid && metaObj.pageid;


          if (_this2.currentBill && _this2.currentBill.templetid) {
            saveData.templetid = _this2.currentBill.templetid;
          } else {
            saveData.templetid = metaObj.pageid && metaObj.pageid;
          }

          if (metaObj[head_code] && metaObj[head_code].moduletype && metaObj[head_code].moduletype === 'form') {
            saveData.head[head_code] = _this2.form.getAllFormValue(head_code);
            saveData.head[head_code].areacode = head_code;
          }

          if (bodys_code && bodys_code instanceof Array && bodys_code.length > 0) {
            bodys_code.forEach(function (body_code) {
              if (metaObj[body_code] && metaObj[body_code].moduletype && metaObj[body_code].moduletype === 'table') {
                if (rows) {
                  saveData.bodys[body_code] = {
                    areaType: 'table',
                    rows: rows,
                    areacode: null
                  };
                } else {
                  saveData.bodys[body_code] = _this2.cardTable.getAllData(body_code);
                }

                saveData.bodys[body_code].areacode = body_code;
              }
            });
          }

          return saveData;
        }; //wangtaos添加，司库云-C专属使用


        _this2.createTabsCardData = function (pageid, head_code, bodys_code) {
          var saveData = {
            pageid: pageid,
            head: {},
            bodys: {}
          };
          var _this2$state = _this2.state,
              tabData = _this2$state.tabData,
              tabOrder = _this2$state.tabOrder,
              tab = _this2$state.tab;
          var moduleId = tabOrder[0];
          var table = _this2.myTable[moduleId].state.table;

          var metaObj = _this2.meta.getMeta();

          if (metaObj[head_code] && metaObj[head_code].moduletype && metaObj[head_code].moduletype === 'form') {
            saveData.head[head_code] = _this2.form.getAllFormValue(head_code);
            saveData.head[head_code].areacode = head_code;
          }

          if (bodys_code && bodys_code instanceof Array && bodys_code.length > 0) {
            bodys_code.forEach(function (body_code) {
              if (metaObj[body_code] && metaObj[body_code].moduletype && metaObj[body_code].moduletype === 'table') {
                saveData.bodys[body_code] = {
                  rows: JSON.parse(JSON.stringify(body_code === tab ? table.rows : tabData[body_code].rows)),
                  areaType: 'table',
                  areacode: body_code
                };
              }
            });
          }

          return saveData;
        };

        _this2.getSearchParam = function (pop) {
          return api_index_["pageTo"].getSearchParam(pop);
        }; //路由组件


        _this2.pushTo = function (page, params) {
          api_index_["pageTo"].pushTo(page, params, _this2.hashChangeCallBack);
        }; //跳转页面


        _this2.linkTo = function (page, params) {
          api_index_["pageTo"].linkTo(page, params, _this2.hashChangeCallBack);
        };

        _this2.openTo = function (page, params, parentParam) {
          api_index_["pageTo"].openTo(page, params, parentParam);
        };

        _this2.specialOpenTo = function (page, params, getWinObj, parentParam) {
          api_index_["pageTo"].specialOpenTo(page, params, getWinObj, parentParam);
        }; // 业务组用来在组件某些地方自行设置hashChangeCallback的方法


        _this2.setHashChangeCallback = function (callback) {
          if (callback && typeof callback === 'function') {
            _this2.hashChangeCallBack = callback;
          }
        }; //共享-编辑关联项执行完的回调


        _this2.setRelationAfterEventCallBack = function (callback) {
          if (callback && typeof callback === 'function') {
            _this2.relationAfterEventCallBack = callback;
          }
        }; //业务组在非createPage时机，通过调用API传递过来的 billinfo


        _this2.setRelationItemBillinfo = function (billinfo) {
          if (billinfo) {
            _this2.billinfo = billinfo;
          }
        }; //返回跳转


        _this2.linkBack = function () {
          api_index_["pageTo"].linkBack();
        }; //打开nccloud以外的应用


        _this2.openOut = function (page) {
          api_index_["pageTo"].openOut(page);
        }; //获取页面参数


        _this2.getUrlParam = function (pop) {
          return api_index_["pageTo"].getUrlParam.call(_assertThisInitialized(_this2), pop);
        }; //重置浏览器id地址


        _this2.setUrlParam = function (params) {
          api_index_["pageTo"].setUrlParam(params, _this2.hashChangeCallBack);
        }; //删除url参数


        _this2.delUrlParam = function (str) {
          api_index_["pageTo"].delUrlParam(str, _this2.hashChangeCallBack);
        }; //新增浏览器参数


        _this2.addUrlParam = function (popObj) {
          api_index_["pageTo"].addUrlParam(popObj, _this2.hashChangeCallBack);
        }; //获取小应用编码


        _this2.getAppCode = function () {
          return api_index_["pageTo"].getAppCode();
        }; //获取页面编码


        _this2.getPageCode = function () {
          return api_index_["pageTo"].getPageCode();
        }; //得到单个表单的编辑后数据


        _this2.createFormAfterEventData = function (pageid, form_code, moduleId, key, value, formMetaCode) {
          var formData = {
            pageid: pageid
          };

          var metaObj = _this2.meta.getMeta(); //formData.templetid = metaObj.pageid && metaObj.pageid;


          if (_this2.currentBill && _this2.currentBill.templetid) {
            formData.templetid = _this2.currentBill.templetid;
          } else {
            formData.templetid = metaObj.pageid && metaObj.pageid;
          }

          if (metaObj && metaObj[form_code] && metaObj[form_code].moduletype && metaObj[form_code].moduletype === 'form') {
            formData[form_code] = _this2.form.getAllFormValue(form_code);
            formData[form_code].areacode = form_code;
          }

          var result = {
            attrcode: key,
            newvalue: value,
            oldvalue: _this2.formDataSource[moduleId] ? _this2.formDataSource[moduleId].getOldValue(key) : null,
            form: formData
          };

          if (formMetaCode) {
            result.areacode = formMetaCode;
          }

          return result;
        }; //得到表头编辑后结构:一主一子 和 一主多子


        _this2.createHeadAfterEventData = function (pageid, head_code, body_code, moduleId, key, value, formMetaCode, tabletype) {
          var cardData = {};

          if (typeof body_code === 'string') {
            cardData = _this2.createMasterChildData(pageid, head_code, body_code, tabletype); //cardData = this.createMasterChildDataSimple(pageid, head_code, body_code, tabletype);
          } else if (body_code instanceof Array) {
            cardData = _this2.createExtCardData(pageid, head_code, body_code); //cardData = this.createExtCardDataSimple(pageid, head_code, body_code);
          }

          var result = {
            attrcode: key,
            newvalue: value,
            // 需要从表单api中取值 后面让wanglong优化
            // oldvalue: this.formOldValues[moduleId] ? this.formOldValues[moduleId][key] : null,
            oldvalue: _this2.formDataSource[moduleId] ? _this2.formDataSource[moduleId].getOldValue(key) : null,
            card: cardData
          };

          if (formMetaCode) {
            result.areacode = formMetaCode;
          }

          return result;
        }; //改写createHeadAfterEventData，一主多子，wangtaos为司库云提供


        _this2.createTabsAfterEventData = function (pageid, head_code, body_code, moduleId, key, value, formMetaCode, tabletype) {
          var cardData = {};

          if (typeof body_code === 'string') {
            cardData = _this2.createMasterChildData(pageid, head_code, body_code, tabletype);
          } else if (body_code instanceof Array) {
            cardData = _this2.createTabsCardData(pageid, head_code, body_code);
          }

          var result = {
            attrcode: key,
            newvalue: value,
            oldvalue: _this2.formDataSource[moduleId] ? _this2.formDataSource[moduleId].getOldValue(key) : null,
            card: cardData
          };

          if (formMetaCode) {
            result.areacode = formMetaCode;
          }

          return result;
        }; //得到单个表格的编辑后数据


        _this2.createGridAfterEventData = function (pageid, grid_code, moduleId, key, changedrows, index, tabletype, rows, tableMetaCode) {
          var gridData = {
            pageid: pageid
          };

          var metaObj = _this2.meta.getMeta(); //gridData.templetid = metaObj.pageid && metaObj.pageid;


          if (_this2.currentBill && _this2.currentBill.templetid) {
            gridData.templetid = _this2.currentBill.templetid;
          } else {
            gridData.templetid = metaObj.pageid && metaObj.pageid;
          }

          if (metaObj && metaObj[grid_code] && metaObj[grid_code].moduletype && metaObj[grid_code].moduletype === 'table') {
            if (rows) {
              gridData[grid_code] = {
                areaType: 'table',
                rows: rows,
                areacode: null
              };
            } else {
              if (tabletype && tabletype === 'cardTable') {
                gridData[grid_code] = _this2.cardTable.getAllData(grid_code);
              } else {
                gridData[grid_code] = _this2.editTable.getAllData(grid_code);
              }
            }

            gridData[grid_code].areacode = tableMetaCode ? tableMetaCode : grid_code;
          }

          return {
            attrcode: key,
            changedrows: changedrows,
            grid: gridData,
            index: index
          };
        }; //得到表体编辑后结构:一主一子 和 一主多子
        // pageid, head_code, body_code 自己传入
        // moduleId 为 moduleId
        // key 为 item.attrcode
        // rowid ?
        // newvalue


        _this2.createBodyAfterEventData = function (pageid, head_code, body_code, moduleId, key, changedrows, index, tabletype, rows, tableMetaCode) {
          var cardData = {};

          if (typeof body_code === 'string') {
            cardData = _this2.createMasterChildData(pageid, head_code, body_code, tabletype, rows); //cardData = this.createMasterChildDataSimple(pageid, head_code, body_code, tabletype);

            return {
              attrcode: key,
              changedrows: changedrows,
              card: cardData,
              index: index
            };
          } else if (body_code instanceof Array) {
            cardData = _this2.createExtCardData(pageid, head_code, body_code, rows); //cardData = this.createExtCardDataSimple(pageid, head_code, body_code);

            return {
              areacode: tableMetaCode ? tableMetaCode : moduleId,
              attrcode: key,
              changedrows: changedrows,
              card: cardData,
              index: index
            };
          }
        }; // 改写平台createBodyAfterEventData，为sikuyun专属使用，wangtaos添加


        _this2.createTabsBodyAfterEventData = function (pageid, head_code, body_code, moduleId, key, changedrows, index, tabletype) {
          var cardData = {};

          if (typeof body_code === 'string') {
            cardData = _this2.createTabsMasterChildData(pageid, head_code, body_code, tabletype);
            return {
              attrcode: key,
              changedrows: changedrows,
              card: cardData,
              index: index
            };
          } else if (body_code instanceof Array) {
            cardData = _this2.createTabsCardData(pageid, head_code, body_code);
            return {
              areacode: _this2.state.tab,
              attrcode: key,
              changedrows: changedrows,
              card: cardData,
              index: index
            };
          }
        };
        /*
            * 获取表头和表格当前行数据
            */


        _this2.createCurrentRowAfterEventData = function (pageid, head_code, body_code, moduleId, key, changedrows, index) {
          var saveData = {
            pageid: pageid,
            head: {}
          };
          var body = {};

          var metaObj = _this2.meta.getMeta(); //获取表头数据


          if (metaObj[head_code] && metaObj[head_code].moduletype && metaObj[head_code].moduletype === 'form') {
            saveData.head[head_code] = _this2.form.getAllFormValue(head_code);
            saveData.head[head_code].areacode = head_code;
          } //获取表格数据


          if (metaObj[moduleId] && metaObj[moduleId].moduletype && metaObj[moduleId].moduletype === 'table') {
            body[moduleId] = _this2.cardTable.getDataByIndex(moduleId, index);
            body[moduleId].areacode = moduleId;
          }

          if (typeof body_code === 'string') {
            saveData['body'] = body;
          }

          if (Array.isArray(body_code)) {
            saveData['bodys'] = body;
          }

          return {
            areacode: moduleId,
            attrcode: key,
            changedrows: changedrows,
            card: saveData,
            index: index
          };
        }; //获取关联项


        _this2.getrelationItems = function (MetaItem) {
          if (MetaItem && MetaItem instanceof Array) {
            var relationItems = [];
            MetaItem.forEach(function (item) {
              if (item.editAfterFlag && item.editAfterFlag === true) {
                relationItems.push(item.attrcode);
              }
            }); //console.log(relationItems);

            return relationItems;
          }
        }; //得到单个表格的编辑后数据--只取当前编辑行


        _this2.createGridAfterEventRecord = function (pageid, grid_code, moduleId, key, changedrows, record, tableMetaCode) {
          var gridData = {
            pageid: pageid
          };

          var metaObj = _this2.meta.getMeta(); //gridData.templetid = metaObj.pageid && metaObj.pageid;


          if (_this2.currentBill && _this2.currentBill.templetid) {
            gridData.templetid = _this2.currentBill.templetid;
          } else {
            gridData.templetid = metaObj.pageid && metaObj.pageid;
          }

          if (metaObj && metaObj[grid_code] && metaObj[grid_code].moduletype && metaObj[grid_code].moduletype === 'table') {
            gridData[grid_code] = {
              rows: [record]
            };
            gridData[grid_code].areacode = tableMetaCode ? tableMetaCode : grid_code;
          }

          return {
            attrcode: key,
            changedrows: changedrows,
            grid: gridData,
            index: 0
          };
        }; //得到表头编辑后结构:一主一子 和 一主多子---只取表头数据


        _this2.createHeadAfterEventRecord = function (pageid, head_code, body_code, moduleId, key, value, formMetaCode) {
          var cardData = {
            pageid: pageid,
            head: {}
          };

          var metaObj = _this2.meta.getMeta();

          if (_this2.currentBill && _this2.currentBill.templetid) {
            cardData.templetid = _this2.currentBill.templetid;
          } else {
            cardData.templetid = metaObj.pageid && metaObj.pageid;
          }

          if (metaObj[head_code] && metaObj[head_code].moduletype && metaObj[head_code].moduletype === 'form') {
            cardData.head[head_code] = _this2.form.getAllFormValue(head_code);
            cardData.head[head_code].areacode = head_code;
          }

          if (typeof body_code === 'string') {
            cardData.body = {};

            if (metaObj[body_code] && metaObj[body_code].moduletype && metaObj[body_code].moduletype === 'table') {
              cardData.body[body_code] = {
                rows: []
              };
              cardData.body[body_code].areacode = body_code;
            }
          } else if (body_code instanceof Array) {
            cardData.bodys = {};

            if (body_code && body_code instanceof Array && body_code.length > 0) {
              body_code.forEach(function (code) {
                if (metaObj[code] && metaObj[code].moduletype && metaObj[code].moduletype === 'table') {
                  cardData.bodys[code] = {
                    rows: []
                  };
                  cardData.bodys[code].areacode = code;
                }
              });
            } //cardData = this.createExtCardDataSimple(pageid, head_code, body_code);

          }

          var result = {
            attrcode: key,
            newvalue: value,
            oldvalue: _this2.formDataSource[moduleId] ? _this2.formDataSource[moduleId].getOldValue(key) : null,
            card: cardData
          };

          if (formMetaCode) {
            result.areacode = formMetaCode;
          }

          return result;
        }; //得到卡片的编辑后数据:一主一子 和 一主多子--只取当前编辑行


        _this2.createBodyAfterEventRecord = function (pageid, head_code, body_code, moduleId, key, changedrows, record, tableMetaCode) {
          var cardData = {
            pageid: pageid,
            head: {}
          };

          var metaObj = _this2.meta.getMeta();

          if (_this2.currentBill && _this2.currentBill.templetid) {
            cardData.templetid = _this2.currentBill.templetid;
          } else {
            cardData.templetid = metaObj.pageid && metaObj.pageid;
          }

          if (metaObj[head_code] && metaObj[head_code].moduletype && metaObj[head_code].moduletype === 'form') {
            cardData.head[head_code] = _this2.form.getAllFormValue(head_code);
            cardData.head[head_code].areacode = head_code;
          }

          if (typeof body_code === 'string') {
            cardData.body = {};

            if (metaObj[body_code] && metaObj[body_code].moduletype && metaObj[body_code].moduletype === 'table') {
              cardData.body[body_code] = {
                rows: [record]
              };
              cardData.body[body_code].areacode = tableMetaCode || body_code;
            }

            return {
              attrcode: key,
              changedrows: changedrows,
              card: cardData,
              index: 0
            };
          } else if (body_code instanceof Array) {
            cardData.bodys = {};

            if (body_code && body_code instanceof Array && body_code.length > 0) {
              body_code.forEach(function (code) {
                if (metaObj[code] && metaObj[code].moduletype && metaObj[code].moduletype === 'table') {
                  if (code == moduleId) {
                    cardData.bodys[code] = {
                      rows: [record]
                    };
                  } else {
                    cardData.bodys[code] = {
                      rows: []
                    };
                  }

                  cardData.bodys[code].areacode = code == moduleId ? tableMetaCode || code : code;
                }
              });
            }

            return {
              areacode: tableMetaCode ? tableMetaCode : moduleId,
              attrcode: key,
              changedrows: changedrows,
              card: cardData,
              index: 0
            };
          }
        };

        _this2.handleSumChildCol = function (editformula, tabletype) {
          //  可能有多个公式,使用分号隔开
          var formula = editformula.split('->sumchildcol');
          var masterInfo = formula[0];
          var childInfo = formula[1].split('(')[1].split(')')[0];

          var _masterInfo$split = masterInfo.split('.'),
              _masterInfo$split2 = createPage_slicedToArray(_masterInfo$split, 2),
              formAreaCode = _masterInfo$split2[0],
              formAttrcode = _masterInfo$split2[1];

          var _childInfo$split = childInfo.split('.'),
              _childInfo$split2 = createPage_slicedToArray(_childInfo$split, 2),
              tableAreaCode = _childInfo$split2[0],
              tableAttrcode = _childInfo$split2[1];

          var sums = 0;

          if (tabletype === 'editTable') {
            //获取表格当前列数据，合计到表头
            var colValues = _this2.editTable.getColValue(tableAreaCode, tableAttrcode);

            if (colValues && Array.isArray(colValues.value)) {
              var vals = colValues.value;
              vals.forEach(function (val) {
                sums = Object(api_index_["sum"])(sums, val);
              });
            }
          } else {
            //获取表格当前列数据，合计到表头
            var _colValues = _this2.cardTable.getColValue(tableAreaCode, tableAttrcode);

            if (_colValues && Array.isArray(_colValues)) {
              _colValues.forEach(function (item) {
                if (item && item.value) {
                  sums = Object(api_index_["sum"])(sums, item.value);
                }
              });
            }
          } //合计数值显示到表头


          _this2.form.setFormItemsValue(formAreaCode, createPage_defineProperty({}, formAttrcode, {
            value: sums
          }));
        }; //编辑关联项---编辑公式
        //合计公式 前端处理：editformula: 主表区域编码.主表字段code->sumchildcol(子表区域编码.子表字段code)


        _this2.handleRelationItems = function (afterData) {
          var _afterData$type = afterData.type,
              type = _afterData$type === void 0 ? 'table' : _afterData$type,
              areaCode = afterData.areaCode,
              key = afterData.key,
              value = afterData.value,
              callback = afterData.callback,
              changedrows = afterData.changedrows,
              index = afterData.index,
              rowid = afterData.rowid,
              formMetaCode = afterData.formMetaCode,
              record = afterData.record,
              tableMetaCode = afterData.tableMetaCode,
              rows = afterData.rows,
              column = afterData.column;

          if (_this2.billinfo) {
            _this2.currentBill = JSON.parse(JSON.stringify(_this2.billinfo)); //档案：一个节点多个卡片,多个表单、或者多个表格，判断当前是哪个界面

            if (_this2.billinfo instanceof Array && _this2.billinfo.length) {
              for (var i = 0; i < _this2.billinfo.length; i++) {
                if (type === 'form') {
                  if (areaCode === _this2.billinfo[i].headcode) {
                    _this2.currentBill = _this2.billinfo[i];
                    break;
                  }
                }

                if (type === 'table') {
                  var billBodyCode = _this2.billinfo[i].bodycode;

                  if (typeof billBodyCode === 'string' && areaCode === billBodyCode) {
                    _this2.currentBill = _this2.billinfo[i];
                    break;
                  }

                  if (billBodyCode instanceof Array && billBodyCode.includes(areaCode)) {
                    _this2.currentBill = _this2.billinfo[i];
                    break;
                  }
                }
              }
            }

            var _this2$currentBill = _this2.currentBill,
                billtype = _this2$currentBill.billtype,
                pagecode = _this2$currentBill.pagecode,
                headcode = _this2$currentBill.headcode,
                bodycode = _this2$currentBill.bodycode,
                _this2$currentBill$ta = _this2$currentBill.tabletype,
                tabletype = _this2$currentBill$ta === void 0 ? '' : _this2$currentBill$ta,
                _this2$currentBill$ta2 = _this2$currentBill.tabs,
                tabs = _this2$currentBill$ta2 === void 0 ? false : _this2$currentBill$ta2; //资金多页表格编辑关联项

            if (tabs) {
              _this2.handleTabRelationItems(afterData);

              return;
            } //共享服务领域适配表格


            if (bodycode === 'findByRelation') {
              var meta = _this2.meta.getMeta();

              if (meta && meta.gridrelation) {
                bodycode = Object.keys(meta.gridrelation);
              }
            }

            if (!pagecode) {
              pagecode = _this2.getSearchParam('p');
            } // eslint-disable-next-line one-var-declaration-per-line


            var url, data, success; //单个表单 或 单个表格

            if (billtype === 'form' || billtype === 'grid') {
              if (type === 'form') {
                url = '/nccloud/platform/pub/formafteredit.do';
                data = _this2.createFormAfterEventData(pagecode, areaCode, areaCode, key, value, formMetaCode);
              } else if (type === 'table') {
                url = '/nccloud/platform/pub/gridafteredit.do'; //data = this.createGridAfterEventData(pagecode, areaCode, areaCode, key, changedrows, index, tabletype);

                if (record) {
                  //新增功能---差异化处理
                  var newRecord = JSON.parse(JSON.stringify(record || {}));
                  data = _this2.createGridAfterEventRecord(pagecode, areaCode, areaCode, key, changedrows, newRecord, tableMetaCode);
                } else {
                  data = _this2.createGridAfterEventData(pagecode, areaCode, areaCode, key, changedrows, index, tabletype, rows, tableMetaCode);
                }
              }
            } //单据


            if (billtype === 'card' || billtype === 'extcard') {
              var tablecode;

              if (Object.prototype.toString.call(bodycode) === '[object Object]') {
                tablecode = Object.keys(bodycode);

                if (tablecode.length == 1) {
                  tablecode = tablecode[0];
                }
              } else {
                tablecode = bodycode;
              }

              if (type === 'form') {
                //编辑表头
                url = '/nccloud/platform/pub/cardheadafteredit.do';

                if (billtype === 'extcard') {
                  url = '/nccloud/platform/pub/extcardheadafteredit.do';
                } //优化：只取表头数据


                data = _this2.createHeadAfterEventRecord(pagecode, headcode, tablecode, areaCode, key, value, formMetaCode);
              } else if (type === 'table') {
                //编辑表格的合计公式:editformula: 主表区域编码.主表字段code->sumchildcol(子表区域编码.子表字段code) 
                if (column && column.editformula && typeof column.editformula === 'string') {
                  var editformula = column.editformula;

                  if (editformula.length < 1000 && /\S+.\S+->sumchildcol(\S+.\S+)\S+/.test(editformula)) {
                    if (editformula.includes(';')) {
                      var editformulaArr = editformula.split(';');
                      var sumformulaLen = 0;
                      editformulaArr.forEach(function (singleformula) {
                        if (singleformula.length < 1000 && /\S+.\S+->sumchildcol(\S+.\S+)\S+/.test(singleformula)) {
                          sumformulaLen++;

                          _this2.handleSumChildCol(singleformula, tabletype);
                        }
                      });

                      if (sumformulaLen === editformulaArr.length) {
                        //只配置了合计公式，则不需要走后台
                        return;
                      }
                    } else {
                      _this2.handleSumChildCol(editformula, tabletype); //只配置了合计公式，则不需要走后台


                      return;
                    }
                  }
                } //其他公式：
                // 编辑表格


                url = '/nccloud/platform/pub/cardbodyafteredit.do';

                if (billtype === 'extcard') {
                  url = '/nccloud/platform/pub/extcardbodyafteredit.do';
                }

                if (record) {
                  //差异化处理--只取当前行
                  var _newRecord = JSON.parse(JSON.stringify(record || {}));

                  data = _this2.createBodyAfterEventRecord(pagecode, headcode, tablecode, areaCode, key, changedrows, _newRecord, tableMetaCode);
                } else {
                  data = _this2.createBodyAfterEventData(pagecode, headcode, tablecode, areaCode, key, changedrows, index, tabletype, rows, tableMetaCode);
                }
              }
            } //请求成功的回调函数


            success = function success(res) {
              var tableTypeObj = {}; //单个表单

              if (billtype === 'form' && type === 'form') {
                if (res.data && res.data && res.data[areaCode]) {
                  _this2.form.setAllFormValue(createPage_defineProperty({}, areaCode, res.data[areaCode]), false, false, key);
                }
              } //单个表格


              if (billtype === 'grid' && type === 'table') {
                if (res.data && res.data && res.data[areaCode]) {
                  if (tabletype && tabletype === 'cardTable') {
                    //this.cardTable.setTableData(areaCode, res.data[areaCode], null, false);
                    // this.cardTable.updateDataByIndexs(areaCode, [{
                    //     index: index,
                    //     data: res.data[areaCode].rows[index]
                    // }]);
                    //新增功能---差异化处理
                    if (rows) {
                      _this2.cardTable.updateAndAddRows({
                        rows: res.data[areaCode].rows,
                        tableId: areaCode
                      });
                    } else {
                      _this2.cardTable.updateDataByRowId(areaCode, res.data[areaCode], false, false);
                    }

                    tableTypeObj[areaCode] = 'cardTable';
                  } else {
                    //this.editTable.setTableData(areaCode, res.data[areaCode], false);
                    //新增功能---差异化处理
                    _this2.editTable.updateDataByRowId(areaCode, res.data[areaCode], false, false);

                    tableTypeObj[areaCode] = 'editTable';
                  }
                }
              } //单据


              if (billtype === 'card' || billtype === 'extcard') {
                //表头赋值
                if (res.data && res.data.head && res.data.head[headcode]) {
                  _this2.form.setAllFormValue(createPage_defineProperty({}, headcode, res.data.head[headcode]), false, false, key);
                }

                if (type === 'table') {
                  var _tablecode;

                  if (Object.prototype.toString.call(bodycode) === '[object Object]') {
                    _tablecode = Object.keys(bodycode);

                    if (_tablecode.length == 1) {
                      _tablecode = _tablecode[0];
                    }
                  } else {
                    _tablecode = bodycode;
                  }

                  if (typeof _tablecode === 'string') {
                    if (res.data && res.data.body && res.data.body) {
                      if (tabletype && tabletype === 'editTable' && res.data.body[_tablecode]) {
                        tableTypeObj[_tablecode] = 'editTable'; //this.editTable.setTableData(bodycode, res.data.body[bodycode], false);
                        //新增功能---差异化处理

                        _this2.editTable.updateDataByRowId(_tablecode, res.data.body[_tablecode], false, false);
                      } else {
                        tableTypeObj[_tablecode] = 'cardTable'; //this.cardTable.setTableData(bodycode, res.data.body[bodycode], null, false);
                        //新增功能---差异化处理

                        if (tableMetaCode && res.data.body[tableMetaCode] && !res.data.body[_tablecode]) {
                          res.data.body[_tablecode] = res.data.body[tableMetaCode];
                        }

                        if (rows) {
                          _this2.cardTable.updateAndAddRows({
                            rows: res.data.body[_tablecode].rows,
                            tableId: _tablecode
                          });
                        } else {
                          _this2.cardTable.updateDataByRowId(_tablecode, res.data.body[_tablecode], false, false);
                        }
                      }
                    }
                  } else if (_tablecode instanceof Array) {
                    _tablecode.forEach(function (code) {
                      if (res.data && res.data.bodys) {
                        if (tabletype && tabletype === 'editTable' && res.data.bodys[code]) {
                          tableTypeObj[code] = 'editTable'; //this.editTable.setTableData(code, res.data.bodys[code], false);
                          //新增功能---差异化处理

                          _this2.editTable.updateDataByRowId(code, res.data.bodys[code], false, false);
                        } else {
                          tableTypeObj[code] = 'cardTable'; //this.cardTable.setTableData(code, res.data.bodys[code], null, false);
                          //新增功能---差异化处理

                          if (tableMetaCode && res.data.bodys[tableMetaCode] && !res.data.bodys[code]) {
                            res.data.bodys[code] = res.data.bodys[tableMetaCode];
                          }

                          if (rows && code === areaCode) {
                            _this2.cardTable.updateAndAddRows({
                              rows: res.data.bodys[code].rows,
                              tableId: code
                            });
                          } else {
                            _this2.cardTable.updateDataByRowId(code, res.data.bodys[code], false, false);
                          }
                        }
                      }
                    });
                  }
                }
              }

              if (res.formulamsg && res.formulamsg instanceof Array && res.formulamsg.length > 0) {
                _this2.dealFormulamsg(res.formulamsg, tableTypeObj, null, null, index);
              }

              Object(api_index_["isFunction"])(callback) && callback(_assertThisInitialized(_this2));

              if (res && typeof _this2.relationAfterEventCallBack === 'function') {
                _this2.relationAfterEventCallBack(_this2.output, key, areaCode, data, res.data, index, rowid); //表体行新旧值

              }
            }; //发送查询关联项事件


            if (url && data && success) {
              Object(api_index_["ajax"])({
                url: url,
                method: 'post',
                async: false,
                data: data,
                success: success
              });
            }
          } else {
            Object(api_index_["isFunction"])(callback) && callback(_assertThisInitialized(_this2));
          }
        }; //验证公式,显示公式


        _this2.dealFormulamsg = function (formulamsg, tableTypeObj, callback, data, currentIndex) {
          if (!tableTypeObj) {
            var bodycode = _this2.billinfo.bodycode;

            if (Object.prototype.toString.call(bodycode) === '[object Object]') {
              tableTypeObj = bodycode;
            }
          }

          if (formulamsg && formulamsg instanceof Array && formulamsg.length > 0) {
            var outPromptByArr = function outPromptByArr(Arr, index) {
              if (index < Arr.length) {
                Object(components_index_["promptBox"])({
                  title: Arr[index].title,
                  color: Arr[index].color,
                  content: Arr[index].content,
                  noCancelBtn: Arr[index].noCancelBtn,
                  beSureBtnClick: function beSureBtnClick() {
                    if (Arr[index].type === '0') {
                      m++;

                      if (m === n) {
                        if (callback && data) {
                          callback(data);
                        }
                      }
                    }

                    outPromptByArr(Arr, ++index);
                  },
                  cancelBtnClick: function cancelBtnClick() {
                    if (Arr[index].type === '0') {
                      m > 0 ? m-- : m;
                    }

                    outPromptByArr(Arr, ++index);
                  }
                });
              }
            };

            var mesArr = [];
            var n = 0;
            var m = 0;
            formulamsg.forEach(function (item) {
              if (item.type === '5') {
                var meta = _this2.meta.getMeta();

                if (item.render && meta[item.render.areacode]) {
                  var index = meta[item.render.areacode].items.findIndex(function (ele) {
                    return ele.attrcode === item.render.attrcode;
                  });

                  if (index !== -1 && item.render && item.render.color) {
                    meta[item.render.areacode].items[index].color = item.render.color;

                    _this2.meta.setMeta(meta);
                  }
                }
              }

              if (item.type === '3' || item.type === '4') {
                var _meta = _this2.meta.getMeta();

                if (item.render && _meta[item.render.areacode]) {
                  var _index = _meta[item.render.areacode].items.findIndex(function (ele) {
                    return ele.attrcode === item.render.attrcode;
                  });

                  if (_index != -1) {
                    if (_meta[item.render.areacode].moduletype === 'form') {
                      var currentcode = item.render.areacode;
                      var maincode = _meta[currentcode].relationcode ? _meta[currentcode].relationcode : currentcode;

                      _this2.form.setFormItemsDisabled(maincode, createPage_defineProperty({}, item.render.attrcode, !item.render.editflag));
                    } else if (_meta[item.render.areacode].moduletype === 'table' && tableTypeObj && tableTypeObj[item.render.areacode]) {
                      if (tableTypeObj[item.render.areacode] === 'editTable') {
                        _this2.editTable.setEditableRowKeyByIndex(item.render.areacode, //+item.render.rownum,
                        typeof currentIndex === 'undefined' ? +item.render.rownum : currentIndex, item.render.attrcode, item.render.editflag);
                      }

                      if (tableTypeObj[item.render.areacode] === 'cardTable') {
                        _this2.cardTable.setEditableByIndex(item.render.areacode, //+item.render.rownum,
                        typeof currentIndex === 'undefined' ? +item.render.rownum : currentIndex, item.render.attrcode, item.render.editflag);
                      }
                    }
                  }
                }
              }

              if (item.type === '1') {
                if (item.message) {
                  mesArr.push({
                    title: '提示',
                    color: 'info',
                    content: item.message,
                    noCancelBtn: true,
                    type: '1'
                  });
                }
              } // type为2说明配置了error类型的验证公式，公式不满足，后台抛异常，ajax会走error
              // 公式满足，直接保存，前端不需要处理
              // if (item.type === '2') {
              //     if (item.message) {
              //         mesArr.push({
              //             title: '错误',
              //             color: 'danger',
              //             content: item.message,
              //             noCancelBtn: true,
              //             type: '2',
              //         });
              //     }
              // }
              // type为0说明配置了确认类型的验证公式，只有用户点击确定按钮后，才走error


              if (item.type === '0') {
                if (item.message) {
                  n++;
                  mesArr.push({
                    title: '确认',
                    color: 'success',
                    content: item.message,
                    noCancelBtn: false,
                    type: '0'
                  });
                }
              }
            });

            if (n === 0 && typeof callback === 'function' && data) {
              callback(data);
            }

            outPromptByArr(mesArr, 0);
          }
        };
        /**表格点击保存按钮 弹出确认框点击确认再进行保存
             * data 单据数据
             * tableTypeObj 界面上所有表格的类型 非必输
             * billType 单据类型 非必输
             * callback 点击确认的时候执行的自定义回调
             */


        _this2.validateToSave = function (data, callback, tableTypeObj, billType) {
          if (!billType) {
            billType = _this2.billinfo.billtype;
          }

          var meta = _this2.meta.getMeta();

          if (meta && meta.validateFlag) {
            var resData = new Promise(function (resolve) {
              Object(api_index_["ajax"])({
                url: '/nccloud/platform/formula/validate.do',
                data: {
                  type: billType,
                  userJson: JSON.stringify(data)
                },
                success: function success(res) {
                  if (res.success) {
                    resolve(res.formulamsg);
                  }
                }
              });
            });
            resData.then(function (formulamsg) {
              if (formulamsg && formulamsg !== {}) {
                _this2.dealFormulamsg.call(_assertThisInitialized(_this2), formulamsg, tableTypeObj, callback, data);
              } else {
                callback(data);
              }
            });
          } else {
            callback(data);
          }
        }; //复写handleRelationItems，司库云多页签使用，wangtaos添加


        _this2.handleTabRelationItems = function (afterData) {
          var _afterData$type2 = afterData.type,
              type = _afterData$type2 === void 0 ? 'table' : _afterData$type2,
              areaCode = afterData.areaCode,
              key = afterData.key,
              value = afterData.value,
              callback = afterData.callback,
              changedrows = afterData.changedrows,
              index = afterData.index,
              rowid = afterData.rowid,
              formMetaCode = afterData.formMetaCode,
              record = afterData.record;

          if (_this2.billinfo) {
            var _this2$billinfo = _this2.billinfo,
                billtype = _this2$billinfo.billtype,
                pagecode = _this2$billinfo.pagecode,
                headcode = _this2$billinfo.headcode,
                bodycode = _this2$billinfo.bodycode,
                _this2$billinfo$table = _this2$billinfo.tabletype,
                tabletype = _this2$billinfo$table === void 0 ? '' : _this2$billinfo$table;

            if (bodycode === 'findByRelation') {
              var meta = _this2.meta.getMeta();

              if (meta && meta.gridrelation) {
                bodycode = Object.keys(meta.gridrelation);
              }
            }

            if (!pagecode) {
              pagecode = _this2.getSearchParam('p');
            } // eslint-disable-next-line one-var-declaration-per-line


            var url, data, success; //单个表单 或 单个表格

            if (billtype === 'form' || billtype === 'grid') {
              if (type === 'form') {
                url = '/nccloud/platform/pub/formafteredit.do';
                data = _this2.createFormAfterEventData(pagecode, areaCode, areaCode, key, value);
              } else if (type === 'table') {
                url = '/nccloud/platform/pub/gridafteredit.do';
                data = _this2.createGridAfterEventData(pagecode, areaCode, areaCode, key, changedrows, index, tabletype);
              }
            } //单据


            if (billtype === 'card' || billtype === 'extcard') {
              var tablecode;

              if (Object.prototype.toString.call(bodycode) === '[object Object]') {
                tablecode = Object.keys(bodycode);

                if (tablecode.length == 1) {
                  tablecode = tablecode[0];
                }
              } else {
                tablecode = bodycode;
              }

              if (type === 'form') {
                url = '/nccloud/platform/pub/cardheadafteredit.do';

                if (billtype === 'extcard') {
                  url = '/nccloud/platform/pub/extcardheadafteredit.do';
                }

                data = _this2.createTabsAfterEventData(pagecode, headcode, tablecode, areaCode, key, value, formMetaCode, tabletype);

                if (billtype === 'card') {
                  //新增功能---差异化处理
                  for (var pop in data.card.body) {
                    data.card.body[pop] = createPage_objectSpread(createPage_objectSpread({}, data.card.body[pop]), {}, {
                      rows: []
                    });
                  }
                }
              } else if (type === 'table') {
                url = '/nccloud/platform/pub/cardbodyafteredit.do';

                if (billtype === 'extcard') {
                  url = '/nccloud/platform/pub/extcardbodyafteredit.do';
                }

                data = _this2.createTabsBodyAfterEventData(pagecode, headcode, tablecode, areaCode, key, changedrows, index, tabletype);

                if (billtype === 'card' && record && tabletype != 'editTable') {
                  //新增功能---差异化处理
                  data.card.body[tablecode] = createPage_objectSpread(createPage_objectSpread({}, data.card.body[tablecode]), {}, {
                    rows: [record]
                  });
                  data.index = 0;
                }
              }
            } //请求成功的回调函数


            success = function success(res) {
              var tableTypeObj = {}; //单个表单

              if (billtype === 'form' && type === 'form') {
                if (res.data && res.data && res.data[areaCode]) {
                  _this2.form.setAllFormValue(createPage_defineProperty({}, areaCode, res.data[areaCode]), false, false, key);
                }
              } //单个表格


              if (billtype === 'grid' && type === 'table') {
                if (res.data && res.data && res.data[areaCode]) {
                  if (tabletype && tabletype === 'cardTable') {
                    _this2.cardTable.updateTabDataByIndexs(areaCode, [{
                      index: index,
                      data: res.data[areaCode].rows[index]
                    }]);

                    tableTypeObj[areaCode] = 'cardTable';
                  }
                }
              } //单据


              if (billtype === 'card' || billtype === 'extcard') {
                //表头赋值
                if (res.data && res.data.head && res.data.head[headcode]) {
                  _this2.form.setAllFormValue(createPage_defineProperty({}, headcode, res.data.head[headcode]), false, false, key);
                } //表体赋值


                if (type === 'table') {
                  if (typeof bodycode === 'string') {
                    if (res.data && res.data.body && res.data.body[bodycode]) {
                      if (tabletype && tabletype === 'cardTable') {
                        tableTypeObj[bodycode] = 'cardTable'; //新增功能---差异化处理
                        //this.cardTable.updateTabDataByRowId(bodycode, res.data.body[bodycode]);

                        _this2.cardTable.updateTabDataByIndexs(bodycode, [{
                          index: index,
                          data: res.data.body[bodycode].rows[0]
                        }]);
                      }
                    }
                  } else if (bodycode instanceof Array) {
                    bodycode.forEach(function (code) {
                      if (res.data && res.data.bodys && res.data.bodys[code]) {
                        if (tabletype && tabletype === 'cardTable') {
                          tableTypeObj[code] = 'cardTable'; //this.cardTable.setTableData(code, res.data.bodys[code], null, false);

                          _this2.cardTable.updateTabDataByIndexs(code, [{
                            index: index,
                            data: res.data.bodys[code].rows[index] //data: JSON.parse(JSON.stringify(res.data.bodys[code].rows[index]))

                          }]);
                        }
                      }
                    });
                  } else if (Object.prototype.toString.call(bodycode) === '[object Object]') {
                    if (Object.keys(bodycode).length > 1) {
                      Object.keys(bodycode).forEach(function (code) {
                        if (res.data && res.data.bodys && res.data.bodys[code]) {
                          if (tabletype && tabletype === 'cardTable') {
                            tableTypeObj[code] = 'cardTable'; //this.cardTable.setTableData(code, res.data.bodys[code], null, false);

                            _this2.cardTable.updateTabDataByIndexs(code, [{
                              index: index,
                              //data: JSON.parse(JSON.stringify(res.data.bodys[code].rows[index]))
                              data: res.data.bodys[code].rows[index]
                            }]);
                          }
                        }
                      });
                    } else if (Object.keys(bodycode).length == 1) {
                      var code = Object.keys(bodycode)[0];

                      if (res.data && res.data.body && res.data.body[code]) {
                        if (tabletype && tabletype === 'cardTable') {
                          tableTypeObj[code] = 'cardTable'; //this.cardTable.setTableData(code, res.data.body[code], null, false);
                          //新增功能---差异化处理
                          //this.cardTable.updateTabDataByRowId(code, res.data.body[code]);

                          _this2.cardTable.updateTabDataByIndexs(code, [{
                            index: index,
                            data: res.data.body[code].rows[0]
                          }]);
                        }
                      }
                    }
                  }
                }
              }

              if (res.formulamsg && res.formulamsg instanceof Array && res.formulamsg.length > 0) {
                _this2.dealTabFormulamsg(res.formulamsg, tableTypeObj);
              }

              callback();

              if (res && typeof _this2.relationAfterEventCallBack === 'function') {
                _this2.relationAfterEventCallBack(_this2.output, key, areaCode, data, res.data, index, rowid); //表体行新旧值

              }
            }; //发送查询关联项事件


            if (url && data && success) {
              Object(api_index_["ajax"])({
                url: url,
                method: 'post',
                async: false,
                data: data,
                success: success
              });
            }
          } else {
            callback();
          }
        }; //复写dealFormulamsg，司库云多页签使用，wangtaos添加


        _this2.dealTabFormulamsg = function (formulamsg, tableTypeObj, callback, data) {
          if (!tableTypeObj) {
            var bodycode = _this2.billinfo.bodycode;

            if (Object.prototype.toString.call(bodycode) === '[object Object]') {
              tableTypeObj = bodycode;
            }
          }

          if (formulamsg && formulamsg instanceof Array && formulamsg.length > 0) {
            var outPromptByArr = function outPromptByArr(Arr, index) {
              if (index < Arr.length) {
                Object(components_index_["promptBox"])({
                  title: Arr[index].title,
                  color: Arr[index].color,
                  content: Arr[index].content,
                  noCancelBtn: Arr[index].noCancelBtn,
                  beSureBtnClick: function beSureBtnClick() {
                    if (Arr[index].type === '0') {
                      m++;

                      if (m === n) {
                        if (callback && data) {
                          callback(data);
                        }
                      }
                    }

                    outPromptByArr(Arr, ++index);
                  },
                  cancelBtnClick: function cancelBtnClick() {
                    if (Arr[index].type === '0') {
                      m > 0 ? m-- : m;
                    }

                    outPromptByArr(Arr, ++index);
                  }
                });
              }
            };

            var mesArr = [];
            var n = 0;
            var m = 0;
            formulamsg.forEach(function (item) {
              if (item.type === '5') {
                var meta = _this2.meta.getMeta();

                if (item.render && meta[item.render.areacode]) {
                  var index = meta[item.render.areacode].items.findIndex(function (ele) {
                    return ele.attrcode === item.render.attrcode;
                  });

                  if (index !== -1 && item.render && item.render.color) {
                    meta[item.render.areacode].items[index].color = item.render.color;

                    _this2.meta.setMeta(meta);
                  }
                }
              }

              if (item.type === '3' || item.type === '4') {
                var _meta2 = _this2.meta.getMeta();

                if (item.render && _meta2[item.render.areacode]) {
                  var _index2 = _meta2[item.render.areacode].items.findIndex(function (ele) {
                    return ele.attrcode === item.render.attrcode;
                  });

                  if (_index2 != -1) {
                    if (_meta2[item.render.areacode].moduletype === 'form') {
                      _this2.form.setFormItemsDisabled(item.render.areacode, createPage_defineProperty({}, item.render.attrcode, !item.render.editflag));
                    } else if (_meta2[item.render.areacode].moduletype === 'table' && tableTypeObj && tableTypeObj[item.render.areacode]) {
                      if (tableTypeObj[item.render.areacode] === 'editTable') {
                        _this2.editTable.setEditableRowKeyByIndex(item.render.areacode, +item.render.rownum, item.render.attrcode, item.render.editflag);
                      }

                      if (tableTypeObj[item.render.areacode] === 'cardTable') {
                        _this2.cardTable.setTabTdEditByIndex(item.render.areacode, +item.render.rownum, item.render.attrcode, item.render.editflag);
                      }
                    }
                  }
                }
              }

              if (item.type === '1') {
                if (item.message) {
                  mesArr.push({
                    title: '提示',
                    color: 'info',
                    content: item.message,
                    noCancelBtn: true,
                    type: '1'
                  });

                  if (callback && data) {
                    callback(data);
                  }
                }
              }

              if (item.type === '2') {
                if (item.message) {
                  mesArr.push({
                    title: '错误',
                    color: 'danger',
                    content: item.message,
                    noCancelBtn: true,
                    type: '2'
                  });
                }
              }

              if (item.type === '0') {
                if (item.message) {
                  n++;
                  mesArr.push({
                    title: '确认',
                    color: 'success',
                    content: item.message,
                    noCancelBtn: false,
                    type: '0'
                  });
                }
              }
            });

            if (n === 0 && callback && typeof callback === 'function' && data) {
              callback(data);
            }

            outPromptByArr(mesArr, 0);
          }
        }; // 复写validateToSave，司库云多页签使用，wangtaos添加


        _this2.validateToTabSave = function (data, callback, tableTypeObj, billType) {
          if (!billType) {
            billType = _this2.billinfo.billtype;
          }

          var meta = _this2.meta.getMeta();

          if (meta && meta.validateFlag) {
            var resData = new Promise(function (resolve) {
              Object(api_index_["ajax"])({
                url: '/nccloud/platform/formula/validate.do',
                data: {
                  type: billType,
                  userJson: JSON.stringify(data)
                },
                success: function success(res) {
                  if (res.success) {
                    resolve(res.formulamsg);
                  }
                }
              });
            });
            resData.then(function (formulamsg) {
              if (formulamsg && formulamsg !== {}) {
                _this2.dealTabFormulamsg.call(_assertThisInitialized(_this2), formulamsg, tableTypeObj, callback, data);
              } else {
                callback(data);
              }
            });
          } else {
            callback(data);
          }
        }; //如单据有主组织，新增时,将meta其他字段设置为不可编辑


        _this2.initMetaByPkorg = function () {
          var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pk_org';

          var metaObj = _this2.meta.getMeta();

          if (Object.keys(metaObj).length) {
            var _loop2 = function _loop2(id) {
              if (id !== 'formrelation' && id !== 'gridrelation' && metaObj[id] && metaObj[id].items && metaObj[id].items instanceof Array) {
                var isTableForm = _this2.isTableEditForm(id, metaObj);

                _this2.copyMetaBeforePkorg[id] = _this2.copyMetaBeforePkorg[id] || {};
                metaObj[id].items.map(function (e) {
                  var _disabled = e.disabled;

                  if (e.attrcode && e.attrcode !== key) {
                    if (metaObj[id].moduletype != 'form' || isTableForm) {
                      e.disabled = true;
                    }
                  } // 把meta上的disabled存起来


                  _this2.copyMetaBeforePkorg[id][e.attrcode] = _disabled;
                });

                if (metaObj[id].moduletype === 'form' && !isTableForm) {
                  if (_this2.formDataSource[id]) {
                    // 把所有关联区域的字段都禁用，不修改meta
                    var items = _this2.formDataSource[id].getInnerHooks().getAllFormItem();

                    var disabled = Object.keys(items).reduce(function (o, attrcode) {
                      if (attrcode !== key) {
                        o[attrcode] = true;
                      } else {
                        var _items$attrcode, _items$attrcode$__ori;

                        // 取模板原始值
                        o[attrcode] = !!((_items$attrcode = items[attrcode]) !== null && _items$attrcode !== void 0 && (_items$attrcode$__ori = _items$attrcode['__origin__']) !== null && _items$attrcode$__ori !== void 0 && _items$attrcode$__ori.disabled);
                      }

                      return o;
                    }, {});

                    _this2.formDataSource[id].setItemAttribute('disabled', disabled);
                  }
                }
              }
            };

            for (var id in metaObj) {
              _loop2(id);
            }
          }

          _this2.meta.setMeta(metaObj);
        };

        _this2.isTableEditForm = function (moduleId, metaObj) {
          var result = false;

          if (metaObj['gridrelation'] && Object.keys(metaObj['gridrelation']).length) {
            for (var pop in metaObj['gridrelation']) {
              if (metaObj['gridrelation'][pop].destEditAreaCode && Array.isArray(metaObj['gridrelation'][pop].destEditAreaCode) && metaObj['gridrelation'][pop].destEditAreaCode.includes(moduleId)) {
                result = true;
                break;
              }
            }
          }

          return result;
        }; // 资金在用


        _this2.MutiInit = outputWrapper.call(_assertThisInitialized(_this2), 'MutiInit', components_index_["mutiInit"]);
        _this2.MultiInit = outputWrapper.call(_assertThisInitialized(_this2), 'MultiInit', {
          getMultiLang: api_index_["getMultiLang"]
        });
        _this2.ViewModel = api_index_["ViewModel"]; //选择主组织以后，恢复模板，恢复其他字段的编辑性

        _this2.resMetaAfterPkorgEdit = function () {
          var meta = _this2.meta.getMeta();

          if (meta) {
            var _loop3 = function _loop3(id) {
              if (id !== 'formrelation' && id !== 'gridrelation' && meta[id] && meta[id].items && meta[id].items instanceof Array) {
                if (meta[id].moduletype === 'form' && !_this2.isTableEditForm(id, meta)) {
                  if (_this2.formDataSource[id]) {
                    // 取上一次存的meta值，设到表单上，不改变meta
                    var formList = _this2.formDataSource[id].getInnerHooks().getFormList();

                    var disabled = formList.reduce(function (o, moduleId) {
                      Object.assign(o, _this2.copyMetaBeforePkorg[moduleId]);
                      return o;
                    }, {});

                    _this2.formDataSource[id].setItemAttribute('disabled', disabled);
                  }
                } else {
                  //表格
                  meta[id].items = meta[id].items.map(function (item) {
                    if (_this2.copyMetaBeforePkorg[id] && _this2.copyMetaBeforePkorg[id].hasOwnProperty(item.attrcode)) {
                      item.disabled = !!_this2.copyMetaBeforePkorg[id][item.attrcode];
                    }

                    return item;
                  }); // meta[id].items = meta[id].items.map((item, index) => {
                  // 	if (this.copyMetaBeforePkorg[id] && this.copyMetaBeforePkorg[id].items[index]) {
                  // 		item.disabled = !!this.copyMetaBeforePkorg[id].items[index].disabled;
                  // 	}
                  // 	return item;
                  // });
                }
              }
            };

            for (var id in meta) {
              _loop3(id);
            }

            _this2.meta.setMeta(meta);
          }
        }; //二开的方法


        _this2[utils["b" /* feConfigName */]] = {}; // 统一输出给业务组使用的api

        _this2.output = {
          use: _this2.use,
          cardPagination: _this2.cardPagination,
          editTable: _this2.editTable,
          form: _this2.form,
          table: _this2.table,
          search: _this2.search,
          button: _this2.button,
          meta: _this2.meta,
          insertTable: _this2.insertTable,
          transferTable: _this2.transferTable,
          asyncTree: _this2.asyncTree,
          syncTree: _this2.syncTree,
          modal: _this2.modal,
          ncmodal: _this2.modal,
          setPageStatus: _this2.setPageStatus,
          getPageStatus: _this2.getPageStatus,
          renderItem: _this2.renderItem,
          getPageDataByMeta: _this2.getPageDataByMeta,
          createTabsMasterChildData: _this2.createTabsMasterChildData,
          createMasterChildData: _this2.createMasterChildData,
          createMasterChildDataSimple: _this2.createMasterChildDataSimple,
          createExtCardDataSimple: _this2.createExtCardDataSimple,
          createUIDom: _this2.createUIDom,
          createFormAfterEventData: _this2.createFormAfterEventData,
          createGridAfterEventData: _this2.createGridAfterEventData,
          createHeadAfterEventData: _this2.createHeadAfterEventData,
          createTabsAfterEventData: _this2.createTabsAfterEventData,
          createBodyAfterEventData: _this2.createBodyAfterEventData,
          createTabsBodyAfterEventData: _this2.createTabsBodyAfterEventData,
          createExtCardData: _this2.createExtCardData,
          createTabsCardData: _this2.createTabsCardData,
          createCurrentRowAfterEventData: _this2.createCurrentRowAfterEventData,
          linkTo: _this2.linkTo,
          openTo: _this2.openTo,
          specialOpenTo: _this2.specialOpenTo,
          setHashChangeCallback: _this2.setHashChangeCallback,
          setRelationAfterEventCallBack: _this2.setRelationAfterEventCallBack,
          getUrlParam: _this2.getUrlParam,
          setUrlParam: _this2.setUrlParam,
          addUrlParam: _this2.addUrlParam,
          delUrlParam: _this2.delUrlParam,
          // approveDetail: this.approveDetail,
          treeTableManyCol: _this2.treeTableManyCol,
          initMetaByPkorg: _this2.initMetaByPkorg,
          resMetaAfterPkorgEdit: _this2.resMetaAfterPkorgEdit,
          // Uploader: this.Uploader,
          downLoad: _this2.downLoad,
          cardTable: _this2.cardTable,
          MutiInit: _this2.MutiInit,
          MultiInit: _this2.MultiInit,
          DragWidthCom: _this2.DragWidthCom,
          getSearchParam: _this2.getSearchParam,
          checkNode: _this2.checkNode,
          dealFormulamsg: _this2.dealFormulamsg,
          validateToSave: _this2.validateToSave,
          dealTabFormulamsg: _this2.dealTabFormulamsg,
          validateToTabSave: _this2.validateToTabSave,
          linkBack: _this2.linkBack,
          openOut: _this2.openOut,
          ViewModel: _this2.ViewModel,
          pushTo: _this2.pushTo,
          // ncUploader: this.Uploader,
          handleRelationItems: _this2.handleRelationItems,
          handleTabRelationItems: _this2.handleTabRelationItems,
          getAppCode: _this2.getAppCode,
          getPageCode: _this2.getPageCode,
          beforeUpdatePage: _this2.beforeUpdatePage,
          updatePage: _this2.updatePage,
          BillHeadInfo: _this2.BillHeadInfo,
          setRelationItemBillinfo: _this2.setRelationItemBillinfo,
          findFocusModuleId: api_index_["findFocusModuleId"].bind(_assertThisInitialized(_this2)),
          controlAutoFocus: api_index_["controlAutoFocus"].bind(_assertThisInitialized(_this2)),
          executeAutoFocus: api_index_["executeAutoFocus"],
          getFocusRowIndex: api_index_["getFocusRowIndex"],
          getAuthorityOfNotification: api_index_["getAuthorityOfNotification"],
          noticeToUser: api_index_["noticeToUser"],
          PubSub: api_index_["PubSub"],
          multiCardTable: _this2.multiCardTable,
          socket: _this2.socket
        };
        return _this2;
      }

      createPage_createClass(Page, [{
        key: "UNSAFE_componentWillMount",
        value: function UNSAFE_componentWillMount() {
          var _this3 = this;

          //关闭浏览器时给出提示
          // window.onbeforeunload = function() {
          // 	return '确定要离开吗？'
          // };
          //window.onbeforeunload = null;
          //select、datepicker、number、input、textarea
          //radio、checkbox、switch,label
          //初始化模板，调用业务组初始化模板的方法
          // if (initTemplate && typeof initTemplate === 'function') {
          // 	initTemplate({ ...this.props, ...this.output });
          // }
          // 初始设置语言

          /*if (mutiLangCode) {
                  this.MutiInits.init(mutiLangCode);
              }*/
          var callback = function callback() {
            if (initTemplate && typeof initTemplate === 'function') {
              initTemplate(createPage_objectSpread(createPage_objectSpread({}, _this3.props), _this3.output));
            }
          }; // 初始设置语言


          if (mutiLangCode) {
            if (!this.MutiInit) {
              this.MutiInit = outputWrapper.call(this, 'MutiInit', components_index_["mutiInit"]);
            }

            this.MutiInit.init(mutiLangCode, callback, domainName);
          } else {
            callback();
          }
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this4 = this;

          this.startPerMonitor(); //禁用浏览器后退按钮

          if (window !== top && !historyBack) {
            this.disableHistory();
            window.addEventListener('popstate', this.disableHistory);
          } //加载二开的文件--liuxis


          FastExtend.install(function (allMethods) {
            // console.log(allMethods, this);
            _this4[utils["b" /* feConfigName */]] = Object.assign({}, allMethods);
            Object(utils["d" /* getCheckedMethod */])(allMethods, 'UIExtend')(_this4.output);
            Object(utils["d" /* getCheckedMethod */])(allMethods, 'currentPageDidMount')(_this4.output);
          }, {
            billinfo: this.billinfo
          }); // 如果父级有iframe 让焦点聚焦到子窗口 bbqin

          if (document && document.body) {
            // 方案一
            document.body.tabindex = '0';
            document.body.setAttribute('tabindex', 0); // this.appAutoFocus && document.body.focus();
            // 方案二
            // let adom = document.createElement('input');
            // adom.style.position = 'absolute';
            // adom.style.top = '-1000px';
            // document.body.insertBefore(adom, document.querySelector('#app'));
            // this.appAutoFocus && adom.focus();
            // 方案三

            var appDom = document.querySelector('#app');

            if (appDom && Object(api_index_["isIE"])()) {
              appDom.tabindex = '0';
              appDom.setAttribute('tabindex', 0);
              this.appAutoFocus && appDom.focus();
              setTimeout(function () {
                appDom.tabindex = '-1';
                appDom.setAttribute('tabindex', -1);
              }, 500);
            } else {
              this.appAutoFocus && document.body.focus();
            }
          } // 添加  onkeydown 全局事件 by bbqin


          if (document) {
            document.addEventListener('keydown', this.keyDownHandle);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          Object(utils["c" /* getCheckedExtendMethod */])(this, 'beforeUnMountEvent')(this.output); // 放到组件里单独注销了 避免一个页面有多个createPage导致其他pubsub不生效的问题
          // 注销订阅事件
          // PubSub.unsubscribe('autoFocus');
          // PubSub.unsubscribe('autoFocus-IoC');
          // 清除所有
          // PubSub.clearAllSubscriptions();
          // 清理
          // this.infoExchangeController = null;
          //销毁二开绑定在window上的事件

          FastExtend.unstall();

          if (document) {
            document.removeEventListener('keydown', this.keyDownHandle);
          }

          if (window !== top) {
            window.removeEventListener('popstate', this.disableHistory);
          }

          if (window.top.sys_monitor) {
            window.top.removeEventListener('modifySPR', this.handleModifySPR, false);
          }
        }
      }, {
        key: "render",
        value: function render() {
          //warning: ref='monitorpage' 仅作为端性能监控使用，release版本将会去除!!!
          //add by chendch@yonyou.com
          var isOpenMonitor = true; //false;

          if (window.top.sys_monitor && !this.isIE()) {
            if (window.top.sys_monitor.getbMonitor && api_index_["isIE"]) {
              isOpenMonitor = window.top.sys_monitor.getbMonitor();
            }
          }

          if (isOpenMonitor) {
            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(App, createPage_extends({}, this.props, this.output, {
              endMonitor: this.endMonitor,
              ref: "monitorpage"
            }));
          } else {
            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(App, createPage_extends({}, this.props, this.output));
          }
        }
      }]);

      return Page;
    }(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);

    return Page;
  };
});

function getCompatibleApi(func) {
  var component = func.component,
      displayName = func.displayName,
      unfinished = func.unfinished;
  var api = func.call(this);
  var unfinishedApi = {};

  if (!component) {
    var notLoadedApi = {};
    Object.keys(api).forEach(function (name) {
      notLoadedApi[name] = function () {
        console.warn("".concat(displayName, "\u7EC4\u4EF6\u6CA1\u6709\u88AB\u52A0\u8F7D\uFF0C\u5F53\u524D\u8C03\u7528\u7684api\u662F").concat(name));
      };
    });
    api = notLoadedApi;
  }

  if (Array.isArray(unfinished)) {
    unfinished.forEach(function (name) {
      unfinishedApi[name] = function () {
        console.warn("".concat(displayName, "\u7EC4\u4EF6\u7684").concat(name, "\u65B9\u6CD5\u8FD8\u6CA1\u6709\u5B8C\u6210"));
      };
    });
  }

  api._store = component && component['use' + displayName] || function () {};

  return Object.assign(unfinishedApi, api);
}

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__129__;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return feConfigName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCheckedMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCheckedExtendMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return beforeAndAfter; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var feConfigName = _const__WEBPACK_IMPORTED_MODULE_0__["name"];
var getCheckedMethod = function getCheckedMethod(obj, name, defaultf) {
  return obj && typeof obj[name] === 'function' ? obj[name] : defaultf || _const__WEBPACK_IMPORTED_MODULE_0__["emptyf"];
};
var getCheckedExtendMethod = function getCheckedExtendMethod(obj, name, defaultf) {
  // console.log('二开相关回调方法', config, name);
  if (name === 'templateAlreadyLoaded') {
    console.log('二开相关回调方法', _const__WEBPACK_IMPORTED_MODULE_0__, name);
  } // 有些特殊情况 取不到this对象上的方法


  if (obj && (!obj[_const__WEBPACK_IMPORTED_MODULE_0__["name"]] || JSON.stringify(obj[_const__WEBPACK_IMPORTED_MODULE_0__["name"]]) === '{}')) {
    obj = window;
  }

  return obj && obj[_const__WEBPACK_IMPORTED_MODULE_0__["name"]] ? getCheckedMethod(obj[_const__WEBPACK_IMPORTED_MODULE_0__["name"]], name, defaultf) : defaultf || _const__WEBPACK_IMPORTED_MODULE_0__["emptyf"];
}; // export const decoratorZ = function (target, name, descriptor) {
// 	var oldValue = descriptor.value;
// 	descriptor.value = function () {
// 		console.log(`before ${name}`, this);
// 		let res = oldValue.apply(this, arguments);
// 		console.log(`after ${name}`);
// 		return res;
// 	};
// 	return descriptor;
// };

var defaultFxConfig = {
  onAfterEvent: 'after',
  // after before replace remian
  onBeforeEvent: 'before',
  onEditTableAfterEvent: 'after',
  // after before replace remian
  onEditTableBeforeEvent: 'before',
  onFormAfterEvent: 'after',
  // after before replace remian
  onFormBeforeEvent: 'before',
  onCardTableAfterEvent: 'after',
  // after before replace remian
  onCardTableBeforeEvent: 'before'
};

function testType(origin) {
  return Object.prototype.toString.call(origin).slice(8, -1);
}

var beforeAndAfter = function beforeAndAfter(pageScope) {
  var info = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fy = arguments.length > 2 ? arguments[2] : undefined;
  var fx = arguments.length > 3 ? arguments[3] : undefined;

  //有些特殊情况 取不到this对象上的方法
  if (JSON.stringify(pageScope[_const__WEBPACK_IMPORTED_MODULE_0__["name"]]) === '{}') {
    pageScope = window;
  } // console.log('二开相关回调方法', info);


  if (!pageScope[_const__WEBPACK_IMPORTED_MODULE_0__["name"]] || !info || !info['attrcode'] || !info['fxType']) {
    return fy();
  }

  var attrcode = info.attrcode,
      _info$moduleId = info.moduleId,
      moduleId = _info$moduleId === void 0 ? '' : _info$moduleId,
      _info$fxType = info.fxType,
      fxType = _info$fxType === void 0 ? 'onAfterEvent' : _info$fxType,
      _info$fxParams = info.fxParams,
      fxParams = _info$fxParams === void 0 ? {} : _info$fxParams,
      fe = pageScope[_const__WEBPACK_IMPORTED_MODULE_0__["name"]],
      fxConfig = _objectSpread(_objectSpread(_objectSpread({}, defaultFxConfig), fe['defaultFxConfig'] || {}), fe[moduleId + '-' + attrcode] || {}); // 获取对应的回调方法


  fx = fx || getCheckedExtendMethod(pageScope, fxType); // console.log(fxConfig, info, fe['defaultFxConfig']);

  if (fxConfig[fxType] === 'mixin') {
    return fx(fxParams, fy);
  } else if (fxConfig[fxType] === 'replace') {
    return fx(fxParams);
  } else if (fxConfig[fxType] === 'before') {
    var orderResult = fx(fxParams); // 可以考虑添加异步处理

    if (testType(orderResult) === 'AsyncFunction') {
      return new Promise(function (resolve) {
        orderResult().then(function (data) {
          fy();
          resolve(data);
        });
      });
    } else if (testType(orderResult) === 'Promise') {
      return new Promise(function (resolve) {
        orderResult.then(function (data) {
          fy(); // 这里也可能是异步关系

          resolve(data);
        });
      });
    } else {
      return fy();
    }
  } else {
    var _orderResult = fy(); // 可以考虑添加异步处理


    if (testType(_orderResult) === 'AsyncFunction') {
      return new Promise(function (resolve) {
        _orderResult().then(function (data) {
          fx(fxParams);
          resolve(data);
        });
      });
    } else if (testType(_orderResult) === 'Promise') {
      return new Promise(function (resolve) {
        _orderResult.then(function (data) {
          fx(fxParams); // 这里也可能是异步关系

          resolve(data);
        });
      });
    } else {
      return fx(fxParams);
    }
  }
};
/* unused harmony default export */ var _unused_webpack_default_export = ({
  getCheckedExtendMethod: getCheckedExtendMethod,
  getCheckedMethod: getCheckedMethod,
  beforeAndAfter: beforeAndAfter,
  feConfigName: feConfigName
});

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__130__;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyf", function() { return emptyf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enable", function() { return enable; });
var name = 'NCCExtend';
var emptyf = function emptyf() {};
var enable = window.NCCExtendEable || true;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: name,
  emptyf: emptyf,
  enable: enable
});

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__24__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return oldbase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableTotal", function() { return tableTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragWithCom", function() { return DragWithCom; });
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(376);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_createPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(127);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPage", function() { return _components_createPage_js__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _platform_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _platform_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_platform_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "promptBox", function() { return _platform_components__WEBPACK_IMPORTED_MODULE_2__["promptBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "print", function() { return _platform_components__WEBPACK_IMPORTED_MODULE_2__["print"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printer", function() { return _platform_components__WEBPACK_IMPORTED_MODULE_2__["printer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectSocket", function() { return _platform_components__WEBPACK_IMPORTED_MODULE_2__["ConnectSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "output", function() { return _platform_components__WEBPACK_IMPORTED_MODULE_2__["output"]; });

/* harmony import */ var _platform_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _platform_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_platform_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "high", function() { return _platform_components__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_platform_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _platform_api__WEBPACK_IMPORTED_MODULE_4__) if(["default","createPage","base","high","promptBox","print","printer","ConnectSocket","output","tableTotal","DragWithCom","useJS"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _platform_api__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var core_api_useJS_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useJS", function() { return core_api_useJS_js__WEBPACK_IMPORTED_MODULE_5__["a"]; });

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Descripttion: 
 * @version: 
 * @Author: liyxt
 * @Date: 2020-07-28 14:12:36
 * @LastEditors: bbq
 * @LastEditTime: 2020-08-24 10:57:52
 */
if (NODE_ENV !== 'development') {
  // eslint-disable-next-line no-undef
  console.log("%c platform was built from ".concat(BRANCH, " at: ").concat(PLATFORM_VERSION, " "), 'background:#222;color:#bada55');
}







_platform_components__WEBPACK_IMPORTED_MODULE_2__["Refer"] = _platform_base__WEBPACK_IMPORTED_MODULE_3__["Refer"];
_platform_components__WEBPACK_IMPORTED_MODULE_2__["BillTrack"] = _platform_base__WEBPACK_IMPORTED_MODULE_3__["BillTrack"];
_platform_components__WEBPACK_IMPORTED_MODULE_2__["DagreChart"] = _platform_base__WEBPACK_IMPORTED_MODULE_3__["DagreChart"];
_platform_components__WEBPACK_IMPORTED_MODULE_2__["BillErrorTrack"] = _platform_base__WEBPACK_IMPORTED_MODULE_3__["BillErrorTrack"];
var DragWithCom = _platform_components__WEBPACK_IMPORTED_MODULE_2__["DragWidthCom"];
var oldbase = {};
var importMap = {
  Breadcrumb: {
    NCBreadcrumbItem: 'Item'
  },
  Checkbox: {
    CheckboxGroup: 'CheckboxGroup'
  },
  Dnd: {
    GridLayout: 'GridLayout'
  },
  Form: {
    NCFormItem: 'FormItem'
  },
  Menu: {
    NCSubMenu: 'SubMenu',
    NCMenuItemGroup: 'ItemGroup',
    NCDivider: 'Divider',
    Item: 'Item'
  },
  Select: {
    NCOption: 'Option'
  },
  Step: {
    NCSteps: 'Steps'
  },
  Tabs: {
    NCTabPane: 'TabPane'
  },
  Tree: {
    NCTreeNode: 'TreeNode'
  },
  Upload: {
    Dragger: 'Dragger'
  },
  ButtonGroup: {
    NCButton: 'Button'
  },
  Modal: {
    Header: 'Header',
    Title: 'Title',
    Body: 'Body',
    Footer: 'Footer'
  },
  MultiLangText: {
    MultiOption: 'MultiOption'
  },
  Radio: {
    NCRadioGroup: 'RadioGroup',
    NCRadioButton: 'RadioButton'
  }
};

function bindNC(entries, output) {
  Object.keys(entries).forEach(function (key) {
    output['NC' + key] = entries[key];

    if (importMap[key]) {
      Object.keys(importMap[key]).forEach(function (subkey) {
        output['NC' + key][subkey] = entries[key][importMap[key][subkey]];
      });
    }
  });
}

bindNC(_platform_base__WEBPACK_IMPORTED_MODULE_3__, oldbase);
oldbase.NCScrollElement = _platform_base__WEBPACK_IMPORTED_MODULE_3__["Anchor"].ScrollElement;
oldbase.NCScrollLink = _platform_base__WEBPACK_IMPORTED_MODULE_3__["Anchor"].ScrollLink;
oldbase.NCFormControl = _platform_base__WEBPACK_IMPORTED_MODULE_3__["Input"];
oldbase.EmptyAreaTip = _platform_base__WEBPACK_IMPORTED_MODULE_3__["EmptyAreaTip"];
oldbase.NCNumber = _platform_base__WEBPACK_IMPORTED_MODULE_3__["NumberInput"];
oldbase.NCDatePicker.NCRangePicker = _platform_base__WEBPACK_IMPORTED_MODULE_3__["RangePicker"];
oldbase.NCDatePicker.NCYearPicker = _platform_base__WEBPACK_IMPORTED_MODULE_3__["YearPicker"];
var USUAL_KEYS = {};
Object.entries(oldbase.NCHotKeys.USUAL_KEYS).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];

  USUAL_KEYS['NC_' + key] = value;
});
oldbase.NCHotKeys.USUAL_KEYS = _objectSpread(_objectSpread({}, oldbase.NCHotKeys.USUAL_KEYS || {}), USUAL_KEYS);

__webpack_require__(377); //添加标准单据样式


__webpack_require__(378); // 添加给业务组的主题


__webpack_require__(379);

var themeTypes = ['default', 'red', 'green', 'black', 'blue', 'yellow']; // setTheme({ themeType: 'red', themeTypes, baseName: 'nc-lightapp-front' });
// setTheme({ themeType: 'green', themeTypes, baseName: 'nc-lightapp-front' });

Object(_platform_api__WEBPACK_IMPORTED_MODULE_4__["getTheme"])().then(function (themeType) {
  Object(_platform_api__WEBPACK_IMPORTED_MODULE_4__["setTheme"])({
    themeType: themeType,
    themeTypes: themeTypes,
    baseName: 'nc-lightapp-front'
  });
  Object(_platform_api__WEBPACK_IMPORTED_MODULE_4__["addFontClass"])();
});
var tableTotal = _platform_base__WEBPACK_IMPORTED_MODULE_3__["Table"];
 // export * from 'core';




/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__376__;

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(95);
var formats = __webpack_require__(126);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        }).join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        var value = obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly,
            charset
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(95);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj; // eslint-disable-line no-param-reassign
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__48__;

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__56__;

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__57__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return unLoadJS; });
var scriptMap = {};
function loadJS(url, onload) {
  var onerror = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (err) {
    throw err;
  };
  var script;

  if (scriptMap[url] && scriptMap[url].script) {
    if (scriptMap[url].loaded) {
      onload();
      return;
    } else {
      script = scriptMap[url].script;
    }
  } else {
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.body.appendChild(script);
    scriptMap[url] = script;
  }

  script.addEventListener('load', function () {
    onload();
    scriptMap[url].loaded = true;
  });
  script.addEventListener('error', function () {
    onerror();
    scriptMap[url].loaded = true;
  });
}
function unLoadJS(url) {
  if (scriptMap[url]) {
    document.head.removeChild(scriptMap[url]);
    delete scriptMap[url];
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useJS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loadJS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var config = {};

function setConfig(nextConfig) {
  config = _objectSpread(_objectSpread({}, config), nextConfig);
}

var useJS = function useJS(useList, func) {
  return /*#__PURE__*/function (_Component) {
    _inherits(Wrapper, _Component);

    var _super = _createSuper(Wrapper);

    function Wrapper(props) {
      var _this;

      _classCallCheck(this, Wrapper);

      _this = _super.call(this, props);
      _this.state = {
        loaded: false,
        args: []
      };
      return _this;
    }

    _createClass(Wrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        if (Array.isArray(useList)) {
          Promise.all(useList.map(function (dep) {
            var path, component;

            if (config[dep]) {
              path = config[dep];
              component = dep;
            } else if (/\.js$/.test(dep)) {
              path = dep;
              component = dep.substr(0, dep.length - 3);
            } else {
              path = dep + '.js';
              component = dep;
            }

            return new Promise(function (resolve) {
              Object(_loadJS__WEBPACK_IMPORTED_MODULE_1__[/* loadJS */ "a"])(path, function () {
                var res = null;

                try {
                  res = window[component]["default"];
                } catch (e) {}

                resolve(res);
              }, function () {
                resolve(null);
              });
            });
          })).then(function (args) {
            _this2.setState({
              loaded: true,
              App: func.apply(void 0, _toConsumableArray(args))
            });
          });
        } else {
          this.setState({
            loaded: true,
            App: func()
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            loaded = _this$state.loaded,
            App = _this$state.App;

        if (loaded) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, this.props);
        } else {
          return null;
        }
      }
    }]);

    return Wrapper;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
};
useJS.setConfig = setConfig;

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(380);
var parse = __webpack_require__(381);
var formats = __webpack_require__(126);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ })

/******/ });
});