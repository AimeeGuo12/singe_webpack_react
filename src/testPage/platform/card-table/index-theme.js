(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("react-dom"), require("@platform/table-core/index"), require("@platform/template/index"), require("@platform/form/index"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@platform/api/index", "@platform/base/index", "react-dom", "@platform/table-core/index", "@platform/template/index", "@platform/form/index"], factory);
	else if(typeof exports === 'object')
		exports["@platform/card-table/index"] = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("react-dom"), require("@platform/table-core/index"), require("@platform/template/index"), require("@platform/form/index"));
	else
		root["@platform/card-table/index"] = factory(root["React"], root["@platform/api/index"], root["@platform/base/index"], root["ReactDOM"], root["@platform/table-core/index"], root["@platform/template/index"], root["@platform/form/index"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__24__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1917);
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

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotKeys", function() { return HotKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withHotKeys", function() { return withHotKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotKeyMapMixin", function() { return HotKeyMapMixin; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isboolean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69);
/* harmony import */ var lodash_isboolean__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isboolean__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isobject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70);
/* harmony import */ var lodash_isobject__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isobject__WEBPACK_IMPORTED_MODULE_5__);
/**
 * ISC License
 *
 * Copyright (c) 2018, Aleck Greenham
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

var classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},objectWithoutProperties=function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},FocusTrap=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,react__WEBPACK_IMPORTED_MODULE_1__["Component"]),createClass(t,[{key:"render",value:function(){var e=this.props,t=e.component,o=e.children,n=objectWithoutProperties(e,["component","children"]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(t,_extends({tabIndex:"-1"},n),o)}}]),t}();function sequencesFromKeyMap(e,t){var o=e[t];return o?Array.isArray(o)?o:[o]:[t]}function hasChanged(e,t){return!lodash_isequal__WEBPACK_IMPORTED_MODULE_2___default()(e,t)}FocusTrap.propTypes={onFocus:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,onBlur:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,component:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),children:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node},FocusTrap.defaultProps={component:"div"};var HotKeys=function(e){function t(e,o){classCallCheck(this,t);var n=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o));return n.onFocus=n.onFocus.bind(n),n.onBlur=n.onBlur.bind(n),n}return inherits(t,react__WEBPACK_IMPORTED_MODULE_1__["Component"]),createClass(t,[{key:"getChildContext",value:function(){return{hotKeyParent:this,hotKeyMap:this.__hotKeyMap__}}},{key:"componentWillMount",value:function(){this.updateMap()}},{key:"updateMap",value:function(){var e=this.buildMap();return!lodash_isequal__WEBPACK_IMPORTED_MODULE_2___default()(e,this.__hotKeyMap__)&&(this.__hotKeyMap__=e,!0)}},{key:"buildMap",value:function(){var e=this.context.hotKeyMap||{},t=this.props.keyMap||{};return _extends({},e,t)}},{key:"getMap",value:function(){return this.__hotKeyMap__}},{key:"componentDidMount",value:function(){var e=__webpack_require__(118);this.__mousetrap__=new e(this.props.attach||react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.findDOMNode(this)),this.updateHotKeys(!0)}},{key:"componentDidUpdate",value:function(e){this.updateHotKeys(!1,e)}},{key:"componentWillUnmount",value:function(){this.context.hotKeyParent&&this.context.hotKeyParent.childHandledSequence(null),this.__mousetrap__&&this.__mousetrap__.reset()}},{key:"updateHotKeys",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=this.props.handlers,n=void 0===o?{}:o,r=t.handlers,s=void 0===r?n:r,a=this.updateMap();(e||a||hasChanged(n,s))&&(this.context.hotKeyParent&&this.context.hotKeyParent.childHandledSequence(null),this.syncHandlersToMousetrap())}},{key:"syncHandlersToMousetrap",value:function(){var e=this,t=this.props.handlers,o=void 0===t?{}:t,n=this.getMap(),r=[],s=this.__mousetrap__;Object.keys(o).forEach(function(t){var s=o[t];sequencesFromKeyMap(n,t).forEach(function(t){var o=void 0;lodash_isobject__WEBPACK_IMPORTED_MODULE_5___default()(t)&&(o=t.action,t=t.sequence),r.push({callback:function(t,o){if((lodash_isboolean__WEBPACK_IMPORTED_MODULE_4___default()(e.props.focused)?e.props.focused:e.__isFocused__)&&o!==e.__lastChildSequence__)return e.context.hotKeyParent&&e.context.hotKeyParent.childHandledSequence(o),s(t,o)},action:o,sequence:t})})}),s.reset(),r.forEach(function(e){var t=e.sequence,o=e.callback,n=e.action;return s.bind(t,o,n)})}},{key:"childHandledSequence",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.__lastChildSequence__=e,this.context.hotKeyParent&&this.context.hotKeyParent.childHandledSequence(e)}},{key:"render",value:function(){var e=this.props,t=(e.keyMap,e.handlers,e.focused,e.attach,e.children),o=objectWithoutProperties(e,["keyMap","handlers","focused","attach","children"]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FocusTrap,_extends({},o,{onFocus:this.onFocus,onBlur:this.onBlur}),t)}},{key:"onFocus",value:function(){var e;(this.__isFocused__=!0,this.props.onFocus)&&(e=this.props).onFocus.apply(e,arguments)}},{key:"onBlur",value:function(){var e;(this.__isFocused__=!1,this.props.onBlur)&&(e=this.props).onBlur.apply(e,arguments);this.context.hotKeyParent&&this.context.hotKeyParent.childHandledSequence(null)}}]),t}();HotKeys.propTypes={keyMap:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,handlers:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,focused:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,attach:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,children:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,onFocus:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,onBlur:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func},HotKeys.childContextTypes={hotKeyParent:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,hotKeyMap:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object},HotKeys.contextTypes={hotKeyParent:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,hotKeyMap:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object};var withHotKeys=function(e){return function(t){return function(o){function n(e){classCallCheck(this,n);var t=possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._setRef=t._setRef.bind(t),t.state={handlers:{}},t}return inherits(n,react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]),createClass(n,[{key:"componentDidMount",value:function(){this.setState({handlers:this._ref.hotKeyHandlers})}},{key:"_setRef",value:function(e){this._ref=e}},{key:"render",value:function(){var o=this.state.handlers;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HotKeys,{component:"document-fragment",keyMap:e,handlers:o},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(t,_extends({ref:this._setRef},this.props)))}}]),n}()}};function HotKeyMapMixin(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{contextTypes:{hotKeyMap:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object},childContextTypes:{hotKeyMap:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object},getChildContext:function(){return{hotKeyMap:this.__hotKeyMap__}},componentWillMount:function(){this.updateMap()},updateMap:function(){var e=this.buildMap();return!lodash_isequal__WEBPACK_IMPORTED_MODULE_2___default()(e,this.__hotKeyMap__)&&(this.__hotKeyMap__=e,!0)},buildMap:function(){var t=this.context.hotKeyMap||{},o=this.props.keyMap||{};return _extends({},t,e,o)},getMap:function(){return this.__hotKeyMap__}}}


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.5
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // Events originating from a shadow DOM are re-targetted and `e.target` is the shadow host,
        // not the initial event target in the shadow tree. Note that not all events cross the
        // shadow boundary.
        // For shadow trees with `mode: 'open'`, the initial event target is the first element in
        // the event’s composed path. For shadow trees with `mode: 'closed'`, the initial event
        // target cannot be obtained.
        if ('composedPath' in e && typeof e.composedPath === 'function') {
            // For open shadow trees, update `element` so that the following check works.
            var initialEventTarget = e.composedPath()[0];
            if (initialEventTarget !== e.target) {
                element = initialEventTarget;
            }
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if ( true && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return Mousetrap;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);


/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULE_TYPE; });
var MODULE_TYPE = {
  form: 'form',
  cardTable: 'cardTable',
  editTable: 'editTable'
};


/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCellIdentity; });
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_platform_api__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @desc 获得单元格的唯一Id
 * @param td {dom}
 */

function getCellIdentity(td) {
  var div = td.querySelector('div');

  if (div && div.attributes) {
    var attributesArray = Object.values(div.attributes);
    var cellIdentity = attributesArray.find(function (item) {
      if (item && item.value.startsWith(_platform_api__WEBPACK_IMPORTED_MODULE_0__["config"].hotKeyModuleIdPrefix)) {
        return item;
      }
    });
    return cellIdentity && cellIdentity.value;
  }
}

/***/ }),

/***/ 1885:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1886:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1887:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1888:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","var":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(0);
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_);

// EXTERNAL MODULE: external "@platform/template/index"
var index_ = __webpack_require__(12);

// EXTERNAL MODULE: external "@platform/table-core/index"
var table_core_index_ = __webpack_require__(7);

// CONCATENATED MODULE: ./src/platform/components/Table/appTable/CardTable/components/TabsTable/store.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * @Descripttion: 
 * @version: 
 * @Author: bbq
 * @Date: 2020-09-05 14:33:22
 * @LastEditors: bbq
 * @LastEditTime: 2021-02-21 14:57:42
 */
//import EditTableStore from "../../../EditTableStore";



var TabsStore = /*#__PURE__*/function (_EditTableStore) {
  _inherits(TabsStore, _EditTableStore);

  var _super = _createSuper(TabsStore);

  function TabsStore(props) {
    var _this;

    _classCallCheck(this, TabsStore);

    _this = _super.call(this, props); // 合并一下属性  不然会导致  get 方法取不到值 by bbqin

    _this.toggleTableShow = function (flag) {
      _this.setStore(['tableSwitch', 'tableVisible'], flag);
    };

    _this.store = _objectSpread(_objectSpread({}, _this.store), {}, {
      //最大化
      tableSwitch: {
        maxVisible: false
      },
      activeCell: null,
      //控制页签显隐性 
      hideTabsCode: {}
    });
    return _this;
  }
  /*** 最大化控制 */


  _createClass(TabsStore, [{
    key: "openMaxView",
    value: function openMaxView(isShow) {
      this.setStore(['tableSwitch', 'maxVisible'], isShow);
    }
  }, {
    key: "isMaxView",
    value: function isMaxView() {
      return this.getStore(['tableSwitch', 'maxVisible']);
    }
    /** 隐藏表格 */

  }, {
    key: "getActiveCell",
    // liuming
    value: function getActiveCell() {
      return this.getStore(['activeCell']);
    } // liuming

  }, {
    key: "setActiveCell",
    value: function setActiveCell(param) {
      var shouldForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.setStore(['activeCell'], param, shouldForceUpdate);
    } // 清理validated

  }, {
    key: "clearValidated",
    value: function clearValidated() {
      var shouldForceUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var validateFailed = this.getCache(['validateFailed']);

      if (validateFailed) {
        for (var tableId in validateFailed) {
          if (validateFailed[tableId]) {
            for (var tabId in validateFailed[tableId]) {
              if (validateFailed[tableId][tabId]) {
                for (var rowKeyValue in validateFailed[tableId][tabId]) {
                  if (validateFailed[tableId][tabId][rowKeyValue]) {
                    // 先判断一下行
                    var data = this.getStore('data');
                    var row = data && data.query(rowKeyValue);

                    if (!row) {
                      delete validateFailed[tableId][tabId][rowKeyValue];
                    } else {
                      for (var attrcode in validateFailed[tableId][tabId][rowKeyValue]) {
                        if (attrcode) {
                          var cellProps = this.getCellProps({
                            rowKeyValue: rowKeyValue,
                            attrcode: attrcode
                          });
                          cellProps.validated !== false && delete validateFailed[tableId][tabId][rowKeyValue][attrcode];
                        }
                      }

                      if (Object.keys(validateFailed[tableId][tabId][rowKeyValue]).length === 0) {
                        delete validateFailed[tableId][tabId][rowKeyValue];
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      shouldForceUpdate && this.refresh();
    }
  }, {
    key: "getHooks",
    value: function getHooks() {
      return _objectSpread(_objectSpread({}, this.getTableHooks()), {}, {
        openMaxView: this.openMaxView.bind(this),
        isMaxView: this.isMaxView.bind(this),
        toggleTableShow: this.toggleTableShow.bind(this),
        getActiveCell: this.getActiveCell.bind(this),
        setActiveCell: this.setActiveCell.bind(this),
        clearValidated: this.clearValidated.bind(this)
      });
    }
  }]);

  return TabsStore;
}(table_core_index_["EditTableStore"]);
/* harmony default export */ var TabsTable_store = (Object(index_["hookFactory"])(TabsStore));
// CONCATENATED MODULE: ./src/platform/components/Table/appTable/CardTable/components/SingleCardTable/store.js
function store_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { store_typeof = function _typeof(obj) { return typeof obj; }; } else { store_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return store_typeof(obj); }

function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 * @Descripttion: CardTable表格的store
 * @version: 
 * @Author: renyjk
 * @Date: 2020-06-29 13:41:41
 * @LastEditors: bbq
 * @LastEditTime: 2021-01-15 14:11:38
 */



var isArray = table_core_index_["utils"].isArray,
    isWrongFalse = table_core_index_["utils"].isWrongFalse,
    isObject = table_core_index_["utils"].isObject;
var ROW_STATUS = table_core_index_["CONFIG"].ROW_STATUS; //-----------行操作API-----------//
//---- cardTable 所有修改数据的 API, 在修改数据前，都要对store进行缓存，因为单据都有取消按钮

/******
设置缓存数据的时机: 
    setSaveData 没有判断  直接缓存
    updateTableData： 没有判断 直接缓存
    //设置完所有数据后，就对数据进行了缓存
    //更新数据时，领域判断是否同步缓存
    setTableData： 根据条件判断
    updateDataByRowId  根据条件判断
    updateDataByIndexs  根据条件判断
    updateDiffDataByRowId 根据条件判断

重置缓存数据时，将数据还原   
    //取消时，领域调用api重置数据
    resetTableData
*****/

var MetaStore = /*#__PURE__*/function (_TabsStore) {
  store_inherits(MetaStore, _TabsStore);

  var _super = store_createSuper(MetaStore);

  function MetaStore(props) {
    var _this;

    store_classCallCheck(this, MetaStore);

    _this = _super.call(this, props); // 合并一下属性  不然会导致  get 方法取不到值 by bbqin

    _this.toggleRowView = function (record) {
      //let cardTableStore = this.TableStore[tableId];
      var expandedRowKeys = _this.getStore('expandedRowKeys'); //console.log("expandedRowKeys:---", expandedRowKeys)


      var indexNum = expandedRowKeys.indexOf(String(record.rowid));

      if (indexNum != -1) {
        expandedRowKeys.splice(indexNum, 1);
        record.expandRowStatus = false;
      } else {
        expandedRowKeys.push(String(record.rowid));
        record.expandRowStatus = true;
      }

      if (expandedRowKeys.length > 0) {//this.myTable[tableId].state.table.showXScroll = false;
      } else {//this.myTable[tableId].state.table.showXScroll = true;
        } //console.log('expandedRowKeys', expandedRowKeys)


      _this.setStore('expandedRowKeys', expandedRowKeys, true);
    };

    _this.showSideBox = function (status, record, index) {
      //console.log("tableSideBox---执行---")
      if (status === 'add') {
        record = _this.addTableRow(index); //存旧值逻辑应该放 addTableRow 方法内部
        //this.saveRowsOldValue([record]);

        index = _this.getVisibleRows().length - 1;
      }

      status = status === 'browse' ? 'browse' : 'edit';

      _this.setStore('tableSideBox', store_objectSpread(store_objectSpread({}, _this.tableSideBox), {}, {
        status: status,
        record: record,
        index: index,
        sideBoxVisible: true
      }));
    };

    _this.closeSideBox = function () {
      _this.setStore('tableSideBox', store_objectSpread(store_objectSpread({}, _this.tableSideBox), {}, {
        sideBoxVisible: false
      }));
    };

    _this.openListView = function (isShow) {
      _this.setStore(['tableSwitch', 'ListViewVisible'], isShow);
    };

    _this.setGrandTableData = function (_ref) {
      var rowid = _ref.rowid,
          tableId = _ref.tableId,
          data = _ref.data,
          _ref$shouldForceUpdat = _ref.shouldForceUpdate,
          shouldForceUpdate = _ref$shouldForceUpdat === void 0 ? true : _ref$shouldForceUpdat,
          _ref$isCache = _ref.isCache,
          isCache = _ref$isCache === void 0 ? true : _ref$isCache,
          _ref$isDiffUpdate = _ref.isDiffUpdate,
          isDiffUpdate = _ref$isDiffUpdate === void 0 ? false : _ref$isDiffUpdate;

      var tableSideBoxRecord = _this.getStore(['tableSideBox', 'record']);

      var grandTableStore = _this.getStore('grandTableStore');

      var grandTable = _this.get('grandTable');

      if (!grandTable[rowid]) grandTable[rowid] = {};
      if (!grandTable[rowid][tableId]) grandTable[rowid][tableId] = {}; //全量更新时，补全rowid

      if (data && isArray(data.rows) && !isDiffUpdate) {
        data.rows = data.rows.map(function (item) {
          item.rowid = item.rowid || _this.generateRowKey();
          return item;
        });
      } // 如果业务侧传了data  但是没传rows 会导致切换数据不正确


      if (data && !data.rows) {
        console.warn('not get data.rows, maybe grandTableData error');
        data.rows = [];
      } //若为差异更新，则


      if (isDiffUpdate) {
        //根据rowid 对比更新孙表数据
        var oldData = grandTable[rowid][tableId].rows || [];
        data.rows = data.rows.map(function (newRow) {
          // 若该行数据，旧值中已存在，则合并新行和旧行
          if (newRow.rowid) {
            var index = oldData.findIndex(function (e) {
              return e.rowid === newRow.rowid;
            });

            if (index !== -1) {
              newRow.values = store_objectSpread(store_objectSpread({}, oldData[index].values), newRow.values);
            } //否则为新增行，生成rowid

          } else {
            newRow.rowid = _this.generateRowKey();
          }

          return newRow;
        });
        grandTable[rowid][tableId].rows = data.rows;
      } else {
        //全量更新数据
        grandTable[rowid][tableId] = data;
      } //同步侧拉数据


      if (tableSideBoxRecord && tableSideBoxRecord.rowid === rowid && grandTableStore[tableId]) {
        grandTableStore[tableId].setData({
          data: grandTable[rowid][tableId].rows,
          shouldForceUpdate: false
        });
      }

      _this.setStore('grandTable', grandTable, shouldForceUpdate);

      if (isCache) {
        var grandTableData = _this.getCache(["grandTableData"]);

        if (!grandTableData) grandTableData = {};
        if (!grandTableData[rowid]) grandTableData[rowid] = {};
        grandTableData[rowid][tableId] = JSON.parse(JSON.stringify(data));

        _this.setCache(["grandTableData"], grandTableData); //_saveAllData(tableId, null); // TODO 缓存表格初始全数据 zh

      }
    };

    _this.getAllGrandData = function (isDeepCopy) {
      var grandTableIds = _this.get('grandTableIds');

      var grandTableStore = _this.get('grandTableStore');

      var cacheGrandTable = _this.get('grandTable');

      var editRecord = _this.get('tableSideBox').record;

      var editRowid = editRecord && editRecord.rowid;

      if (editRowid) {
        var _ret = function () {
          var currentGrandTable = {};

          var _loop = function _loop(rowid) {
            if (rowid === editRowid) {
              currentGrandTable[rowid] = {};
              grandTableIds.forEach(function (grandCode) {
                currentGrandTable[rowid][grandCode] = {
                  rows: grandTableStore[grandCode].getAllRows(isDeepCopy)
                };
              });
            } else {
              currentGrandTable[rowid] = cacheGrandTable[rowid];
            }
          };

          for (var rowid in cacheGrandTable) {
            _loop(rowid);
          }

          return {
            v: currentGrandTable
          };
        }();

        if (store_typeof(_ret) === "object") return _ret.v;
      } else {
        return cacheGrandTable;
      }
    };

    _this.getViewGrandData = function (view) {
      var grandTableIds = _this.get('grandTableIds');

      var grandTableStore = _this.get('grandTableStore');

      var cacheGrandTable = _this.get('grandTable');

      var editRecord = _this.get('tableSideBox').record;

      var editRowid = editRecord && editRecord.rowid;

      if (editRowid) {
        var _ret2 = function () {
          var currentGrandTable = {};

          var _loop2 = function _loop2(rowid) {
            if (rowid === editRowid) {
              currentGrandTable[rowid] = {};
              grandTableIds.forEach(function (grandCode) {
                currentGrandTable[rowid][grandCode] = {
                  rows: grandTableStore[grandCode].getViewData(view)
                };
              });
            } else {
              currentGrandTable[rowid] = cacheGrandTable[rowid];
            }
          };

          for (var rowid in cacheGrandTable) {
            _loop2(rowid);
          }

          return {
            v: currentGrandTable
          };
        }();

        if (store_typeof(_ret2) === "object") return _ret2.v;
      } else {
        return cacheGrandTable;
      }
    };

    _this.filterEmptyGrandRows = function () {
      var granTableConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var shouldForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      //孙表所有数据
      var cacheGrandTable = _this.get('grandTable');

      var newGrandData = {};

      for (var rowid in cacheGrandTable) {
        var currentRowGrandData = cacheGrandTable[rowid];
        newGrandData[rowid] = {};

        var _loop3 = function _loop3(tableCode) {
          var keys = null;
          var rule = 'except';

          if (granTableConfig[tableCode]) {
            if (isArray(granTableConfig[tableCode].keys)) {
              keys = granTableConfig[tableCode].keys;
            }

            if (isArray(granTableConfig[tableCode].rule)) {
              rule = granTableConfig[tableCode].rule;
            }
          }

          var grandTableRows = currentRowGrandData[tableCode].rows;
          newGrandData[rowid][tableCode] = {
            rows: []
          };

          if (isArray(grandTableRows)) {
            var newRows = [];
            grandTableRows.forEach(function (item, index) {
              var values = item.values;
              var valueKeys = Object.keys(values).filter(function (item) {
                return item != "numberindex";
              });

              if (isArray(keys) && (rule == "except" || rule == "include")) {
                valueKeys = valueKeys.filter(function (val) {
                  return rule == "except" ? keys.every(function (key) {
                    return val !== key;
                  }) : keys.includes(val);
                });
              } else {
                console.warn("Invalid params ", rule, keys);
              }

              var flag = valueKeys.every(function (one) {
                return isWrongFalse(values[one].value);
              });

              if (!flag) {
                newRows.push(item);
              }
            });
            newGrandData[rowid][tableCode].rows = newRows;
          }
        };

        for (var tableCode in currentRowGrandData) {
          _loop3(tableCode);
        }
      }

      _this.setStore('grandTable', newGrandData, shouldForceUpdate);
    };

    _this.deleteGrandData = function (_ref2) {
      var rowidList = _ref2.rowidList,
          delAll = _ref2.delAll;

      if (delAll) {
        //全部删除
        _this.setStore('grandTable', {});

        return;
      } //根据rowidList删除数据


      if (isArray(rowidList)) {
        var grandTable = _this.get('grandTable');

        rowidList.forEach(function (rowid) {
          delete grandTable[rowid];
        });

        _this.setStore('grandTable', grandTable);
      }
    };

    _this.store = store_objectSpread(store_objectSpread({}, _this.store), {}, {
      tableSwitch: store_objectSpread(store_objectSpread({}, _this.store.tableSwitch), {}, {
        ListViewVisible: false //行展开

      }),
      //记录当前激活状态表格的区域编码
      activeTableCode: '',
      //行展开
      expandedRowKeys: [],
      //侧拉
      tableSideBox: {
        sideBoxVisible: false,
        status: 'edit',
        index: -1,
        record: null
      },
      //全部展开收起
      //孙表数据
      // eslint-disable-next-line object-curly-newline
      grandTable: {// rowid1: {
        //     code1:{ rows:[] },
        //     code2:{ rows:[] },
        //     code3:{ rows:[] }
        // },
        // rowid2:{
        //     code1:{ rows:[] },
        //     code2:{ rows:[] },
        // }
      },
      //存孙表store引用
      grandTableStore: {},
      grandTableIds: []
    }); // console.log(this.store, this.tableSwitch);

    return _this;
  }
  /**
   * 行展开视图控制
   * @param {*} record  行数据
   */


  store_createClass(MetaStore, [{
    key: "setTableData",

    /**
     * @description: 复写设置表格数据
     * @param {type} 
     * @return: 
     */
    value: function setTableData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$isCache = _ref3.isCache,
          isCache = _ref3$isCache === void 0 ? true : _ref3$isCache,
          _ref3$isTop = _ref3.isTop,
          isTop = _ref3$isTop === void 0 ? false : _ref3$isTop,
          _ref3$shouldForceUpda = _ref3.shouldForceUpdate,
          shouldForceUpdate = _ref3$shouldForceUpda === void 0 ? true : _ref3$shouldForceUpda;

      // 将表格全展开重置成false
      // tempData.showListView = false; // TODO
      _get(store_getPrototypeOf(MetaStore.prototype), "setTableData", this).call(this, data, {
        isCache: isCache,
        isTop: isTop,
        shouldForceUpdate: shouldForceUpdate
      }); // TODO 单元格聚焦问题
      // let cell = autoFocus && getCellDom(tableId);
      //     let cellIdentity = cell && getCellIdentity(cell);
      // lastCellItemFocus(cellIdentity);

    }
    /**
     * @description: 设置表格状态
     * @param {type} 
     * @return: 
     */

  }, {
    key: "setTableStatus",
    value: function setTableStatus(status) {
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref4$shouldForceUpda = _ref4.shouldForceUpdate,
          shouldForceUpdate = _ref4$shouldForceUpda === void 0 ? true : _ref4$shouldForceUpda;

      if (status === 'edit') {//编辑态时，收回所有展开行  // TODO
        // closeExpandedRow.call(this, tableId);
      }

      _get(store_getPrototypeOf(MetaStore.prototype), "setTableStatus", this).call(this, status, {
        shouldForceUpdate: shouldForceUpdate
      });
    }
    /**
     * @description: 卡片表格的和普通编辑表的 有细微区别
     * @param {type} 
     * @return: 
     */

  }, {
    key: "addTableRow",
    value: function addTableRow(index) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var _ref5 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
          _ref5$autoFocus = _ref5.autoFocus,
          autoFocus = _ref5$autoFocus === void 0 ? false : _ref5$autoFocus,
          isAutoAddRow = _ref5.isAutoAddRow,
          callback = _ref5.callback;

      this.setStore(['tableSwitch', 'ListViewVisible'], false, false);
      return _get(store_getPrototypeOf(MetaStore.prototype), "addTableRow", this).call(this, index, defaultValue, shouldForceUpdate, {
        autoFocus: autoFocus,
        isAutoAddRow: isAutoAddRow,
        callback: callback
      }); // TODO  自动聚焦部分  也可在更底层做
    }
    /**
     * @description: 取消编辑  回到上次状态
     * @param {type} 
     * @return: 
     */

  }, {
    key: "resetTableData",
    value: function resetTableData() {
      var _this2 = this;

      var data = this.getCache(['afterDel']) || this.getCache(['base']) || {
        rows: []
      }; // TODO  清理一些全局提示
      // clearOneTypeToast('danger');

      this.setTableStatus('browse', {
        shouldForceUpdate: false
      });
      this.setTableData(data, {
        isCache: true,
        isTop: true,
        shouldForceUpdate: !this.isUpdatePage
      }); // TODO  更新孙表
      // 有孙表的情况

      var grandTableIds = this.get('grandTableIds');

      if (isArray(grandTableIds) && grandTableIds.length > 0) {
        var grandTableCacheData = this.getCache(["grandTableData"]);

        if (isObject(grandTableCacheData)) {
          Object.keys(grandTableCacheData).forEach(function (rowid) {
            Object.keys(grandTableCacheData[rowid]).forEach(function (grandId) {
              _this2.setGrandTableData({
                rowid: rowid,
                tableId: grandId,
                data: grandTableCacheData[rowid][grandId],
                shouldForceUpdate: false
              });
            });
          });
        }
      }
    }
    /**
     * @description: 钩子
     * @param {type} 
     * @return: 
     */

  }, {
    key: "getHooks",
    value: function getHooks() {
      return store_objectSpread(store_objectSpread({}, _get(store_getPrototypeOf(MetaStore.prototype), "getHooks", this).call(this)), {}, {
        toggleRowView: this.toggleRowView.bind(this),
        showSideBox: this.showSideBox.bind(this),
        closeSideBox: this.closeSideBox.bind(this),
        setGrandTableData: this.setGrandTableData.bind(this),
        getAllGrandData: this.getAllGrandData.bind(this),
        getViewGrandData: this.getViewGrandData.bind(this),
        //getRowIdFromPkcode: this.getRowIdFromPkcode,
        deleteGrandData: this.deleteGrandData.bind(this),
        openListView: this.openListView.bind(this),
        openMaxView: this.openMaxView.bind(this),
        setTableData: this.setTableData.bind(this),
        setTableStatus: this.setTableStatus.bind(this),
        addTableRow: this.addTableRow.bind(this),
        resetTableData: this.resetTableData.bind(this),
        filterEmptyGrandRows: this.filterEmptyGrandRows.bind(this)
      });
    }
  }]);

  return MetaStore;
}(TabsStore);
var MetaCardTableStore = Object(index_["hookFactory"])(MetaStore);
/* harmony default export */ var SingleCardTable_store = (MetaCardTableStore);
// CONCATENATED MODULE: ./src/platform/components/Table/appTable/CardTable/store.js
function CardTable_store_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CardTable_store_typeof = function _typeof(obj) { return typeof obj; }; } else { CardTable_store_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CardTable_store_typeof(obj); }

function CardTable_store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CardTable_store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CardTable_store_ownKeys(Object(source), true).forEach(function (key) { CardTable_store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CardTable_store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CardTable_store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CardTable_store_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CardTable_store_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CardTable_store_createClass(Constructor, protoProps, staticProps) { if (protoProps) CardTable_store_defineProperties(Constructor.prototype, protoProps); if (staticProps) CardTable_store_defineProperties(Constructor, staticProps); return Constructor; }

function store_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { store_get = Reflect.get; } else { store_get = function _get(target, property, receiver) { var base = store_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return store_get(target, property, receiver || target); }

function store_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = CardTable_store_getPrototypeOf(object); if (object === null) break; } return object; }

function CardTable_store_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CardTable_store_setPrototypeOf(subClass, superClass); }

function CardTable_store_setPrototypeOf(o, p) { CardTable_store_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CardTable_store_setPrototypeOf(o, p); }

function CardTable_store_createSuper(Derived) { var hasNativeReflectConstruct = CardTable_store_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CardTable_store_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CardTable_store_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CardTable_store_possibleConstructorReturn(this, result); }; }

function CardTable_store_possibleConstructorReturn(self, call) { if (call && (CardTable_store_typeof(call) === "object" || typeof call === "function")) { return call; } return CardTable_store_assertThisInitialized(self); }

function CardTable_store_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CardTable_store_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function CardTable_store_getPrototypeOf(o) { CardTable_store_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CardTable_store_getPrototypeOf(o); }

/*
 * @Descripttion: CardTable的 Store
 * @version: 
 * @Author: bbq
 * @Date: 2020-06-28 13:37:53
 * @LastEditors: bbq
 * @LastEditTime: 2021-02-21 14:37:50
 */



var store_isArray = table_core_index_["utils"].isArray;

var TableStore = /*#__PURE__*/function (_MetaStore) {
  CardTable_store_inherits(TableStore, _MetaStore);

  var _super = CardTable_store_createSuper(TableStore);

  function TableStore() {
    var _this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    CardTable_store_classCallCheck(this, TableStore);

    _this = _super.call(this, props); // 合并一下属性  不然会导致  get 方法取不到值 by bbqin

    _this.store = CardTable_store_objectSpread(CardTable_store_objectSpread({}, _this.store), {}, {
      // moduleId
      name: props.name || '',
      // 所有CardTable的store  （目前是指cardTable的store）
      tableStores: {},
      // 所有CardTable的数据 
      // tableDatas: {}, // 不备份了
      // 初始模板
      meta: {},
      // 所有页签的数据 按照页签id区分
      // allTabsData: {}, // 不备份了
      // 所有表格的状态数据
      // allTabsStatus: {},  // 不备份了
      // 多语
      json: {},
      // 当前缺少项的页签集合
      errorTabIds: [],
      // 布局
      layout: 'horizontal',
      currentTab: {
        // 当前状态
        status: 'browse',
        // 当前操作页签
        tabId: '',
        tableId: '' // ...

      }
    }); //console.log('12131', this.getHooks());

    return _this;
  }
  /**
   * @description: 复写
   * @param {type} 
   * @return: 
   */


  CardTable_store_createClass(TableStore, [{
    key: "getStore",
    value: function getStore(paths) {
      return store_get(CardTable_store_getPrototypeOf(TableStore.prototype), "get", this).call(this, paths);
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

      var res = store_get(CardTable_store_getPrototypeOf(TableStore.prototype), "set", this).call(this, paths, value);

      shouldForceUpdate && this.forceUpdate(callback);
      return res;
    } // 多来源页签的布局

  }, {
    key: "setLayout",
    value: function setLayout(layout) {
      var shouldForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      layout = layout || this.getStore(['currentTab', 'layout']);
      this.setStore(['currentTab', 'layout'], layout === 'vertical' ? 'vertical' : 'horizontal', shouldForceUpdate);
    }
    /**
     * @description: 获取模板的属性
     * @param {type} 
     * @return: 
     */

  }, {
    key: "_getMetaRelation",
    value: function _getMetaRelation() {
      var _this$getMeta = this.getMeta(),
          _this$getMeta$gridrel = _this$getMeta.gridrelation,
          gridrelation = _this$getMeta$gridrel === void 0 ? {} : _this$getMeta$gridrel,
          _this$getMeta$contain = _this$getMeta.containerrelation,
          containerrelation = _this$getMeta$contain === void 0 ? {} : _this$getMeta$contain;

      return {
        gridrelation: gridrelation,
        containerrelation: containerrelation
      };
    }
    /**
     * @description: 获取所有的tabs
     * @param {type} 
     * @return: 
     */

  }, {
    key: "_getTabs",
    value: function _getTabs(name) {
      name = name || this.getStore('name');

      var _this$_getMetaRelatio = this._getMetaRelation(),
          containerrelation = _this$_getMetaRelatio.containerrelation;

      return containerrelation[name] || [];
    }
    /**
     * @description: 批量操作子表
     * @param {type} 
     * @return: 
     */

  }, {
    key: "_batchTabsTable",
    value: function _batchTabsTable(func, name) {
      var _this2 = this;

      name = name || this.getStore('name');

      if (!name) {
        console.warn('not find name[%s] tableStore ');
      }

      var _this$_getMetaRelatio2 = this._getMetaRelation(),
          gridrelation = _this$_getMetaRelatio2.gridrelation,
          containerrelation = _this$_getMetaRelatio2.containerrelation;

      var tabs = this._getTabs(name); //let layout = this.getLayout(name);


      var stores = this.getStore('tableStores');
      console.log(name, tabs, gridrelation, containerrelation, stores); // 先简单处理下
      // if (layout === 'horizontal' && isArray(tabs[0])) {
      //     tabs = [tabs[0]]; // 设置全部也不是不行 并不行  data 还没有初始化  如果初始化了 应该可以
      // }

      var res = tabs.map(function (ids) {
        ids.map(function (id) {
          if (!id) {
            return console.warn('invalid id');
          }

          var currentStore = stores[id];

          if (name && id === name) {
            currentStore = _this2;
          }

          if (!currentStore) {
            console.warn("tableId \u4E3A".concat(id, " \u8868\u683C\uFF0C\u6CA1\u6709\u521D\u59CB\u5316\u5BF9\u5E94\u7684Store\uFF0C\u8BF7\u4E0D\u8981\u8FDB\u884C\u6279\u64CD\u4F5C\u3002"));
          }

          return currentStore && func(currentStore, id, name, tabs);
        });
      });
      return res;
    } // 设置多来源的所有数据

  }, {
    key: "setTabsTableData",
    value: function setTabsTableData(data) {
      var shouldForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var name = arguments.length > 2 ? arguments[2] : undefined;

      if (!data) {
        data = {};
      }

      this._batchTabsTable(function (store, id) {
        if (!data[id]) {
          console.warn("not find id[%s] data", id);
        }

        if (data[id]) {
          //let activeTableCode = store.getStore('activeTableCode');
          store.setTableData(data[id], {
            //shouldForceUpdate: shouldForceUpdate //&& id === activeTableCode && //初始化更新时，业务数字无法更新
            shouldForceUpdate: false
          });
        }
      }, name);

      shouldForceUpdate && this.forceUpdate();
    } // 重置所有页签的数据

  }, {
    key: "resetTabsTableData",
    value: function resetTabsTableData() {
      var shouldForceUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var name = arguments.length > 1 ? arguments[1] : undefined;

      this._batchTabsTable(function (store, id) {
        if (store) {
          store.resetTableData();
        }
      }, name);

      shouldForceUpdate && this.forceUpdate();
    } // 获取所有行的数据

  }, {
    key: "getTabsTableData",
    value: function getTabsTableData(name) {
      var res = {};

      this._batchTabsTable(function (store, id) {
        if (store) {
          var data = store.getData();
          res[id] = {
            rows: data
          };
        }
      }, name);

      console.log(res);
      return res;
    } // 设置所有页签（cardTable）的状态

  }, {
    key: "setTabsTableStatus",
    value: function setTabsTableStatus() {
      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var shouldForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var name = arguments.length > 2 ? arguments[2] : undefined;
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      this._batchTabsTable(function (store, id) {
        if (status[id]) {
          var activeTableCode = store.getStore('activeTableCode');
          var oldStatus = store.getTableProps('status') || 'browse';
          store.setTableStatus(status[id], {
            shouldForceUpdate: activeTableCode === id && shouldForceUpdate
          });
          callback && callback(id, store, oldStatus);
        }
      }, name); // shouldForceUpdate && this.forceUpdate();

    } // 获取多页签所有的 stores

  }, {
    key: "getTabsStores",
    value: function getTabsStores(id, name) {
      name = name || this.getStore('name');

      if (!name) {
        console.warn('not find name[%s] tableStore ', name);
      }

      var res = Object.assign({}, CardTable_store_defineProperty({}, name, this), this.getStore('tableStores'));
      return id ? res[id] : res;
    } // 添加stores 缓存数据中

  }, {
    key: "addTabStore",
    value: function addTabStore(id, store, pattern) {
      var shouldForceUpdate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var tableStores = this.getStore('tableStores');
      tableStores[id] = store;
      this.setStore('tableStores', tableStores, shouldForceUpdate);
    } //设置页签显示隐藏

  }, {
    key: "setTabsTableShow",
    value: function setTabsTableShow(mainId, flagObj) {
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var tabs = this._getTabs(mainId);

      var stores = this.getStore('tableStores');

      if (store_isArray(tabs)) {
        tabs.forEach(function (item) {
          //tabs每一项是一个垂直排列的表格
          var mainCode = item[0];

          if (stores[mainCode]) {
            var hideTabsCode = stores[mainCode].getStore('hideTabsCode');

            for (var code in flagObj) {
              if (item.includes(code)) {
                hideTabsCode[code] = !flagObj[code];
              }
            }

            stores[mainCode].setStore('hideTabsCode', hideTabsCode, shouldForceUpdate);
          }
        });
      }
    } //设置当前激活页签

  }, {
    key: "setTabsTableActive",
    value: function setTabsTableActive(mainId, activeCode) {
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var tabs = this._getTabs(mainId);

      var stores = this.getStore('tableStores');

      if (store_isArray(tabs)) {
        tabs.forEach(function (item) {
          if (item.includes(activeCode)) {
            var mainCode = item[0];
            var tableSwitch = stores[mainCode].getStore('tableSwitch');
            tableSwitch.activeCode = activeCode;
            stores[mainCode] && stores[mainCode].setStore('tableSwitch', tableSwitch, shouldForceUpdate);
          }
        });
      }
    } //获取当前激活页签

  }, {
    key: "getTabsTableActive",
    value: function getTabsTableActive(mainId) {
      var tabs = this._getTabs(mainId);

      var stores = this.getStore('tableStores');

      if (store_isArray(tabs)) {
        return tabs.map(function (item) {
          var mainCode = item[0];

          if (stores[mainCode]) {
            return stores[mainCode].getStore('tableSwitch').activeCode;
          }
        });
      }

      return [];
    }
  }, {
    key: "getHooks",
    value: function getHooks() {
      return CardTable_store_objectSpread(CardTable_store_objectSpread({}, store_get(CardTable_store_getPrototypeOf(TableStore.prototype), "getHooks", this).call(this)), {}, {
        //模板
        // // all
        getStore: this.getStore.bind(this),
        setStore: this.setStore.bind(this),
        setLayout: this.setLayout.bind(this),
        // getLayout: this.getLayout.bind(this),
        setTabsTableData: this.setTabsTableData.bind(this),
        resetTabsTableData: this.resetTabsTableData.bind(this),
        getTabsTableData: this.getTabsTableData.bind(this),
        setTabsTableStatus: this.setTabsTableStatus.bind(this),
        getTabsStores: this.getTabsStores.bind(this),
        addTabStore: this.addTabStore.bind(this),
        setTabsTableShow: this.setTabsTableShow.bind(this),
        setTabsTableActive: this.setTabsTableActive.bind(this),
        getTabsTableActive: this.getTabsTableActive.bind(this)
      });
    }
  }]);

  return TableStore;
}(MetaStore);

/* harmony default export */ var CardTable_store = (Object(index_["hookFactory"])(TableStore));
// EXTERNAL MODULE: external "@platform/api/index"
var api_index_ = __webpack_require__(1);

// EXTERNAL MODULE: ./src/platform/components/Table/appTable/CardTable/components/SingleRowExpand/index.less
var components_SingleRowExpand = __webpack_require__(1887);

// CONCATENATED MODULE: ./src/platform/components/Table/appTable/CardTable/components/SingleRowExpand/index.js
function SingleRowExpand_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SingleRowExpand_typeof = function _typeof(obj) { return typeof obj; }; } else { SingleRowExpand_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SingleRowExpand_typeof(obj); }

function SingleRowExpand_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SingleRowExpand_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SingleRowExpand_createClass(Constructor, protoProps, staticProps) { if (protoProps) SingleRowExpand_defineProperties(Constructor.prototype, protoProps); if (staticProps) SingleRowExpand_defineProperties(Constructor, staticProps); return Constructor; }

function SingleRowExpand_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SingleRowExpand_setPrototypeOf(subClass, superClass); }

function SingleRowExpand_setPrototypeOf(o, p) { SingleRowExpand_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SingleRowExpand_setPrototypeOf(o, p); }

function SingleRowExpand_createSuper(Derived) { var hasNativeReflectConstruct = SingleRowExpand_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SingleRowExpand_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SingleRowExpand_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SingleRowExpand_possibleConstructorReturn(this, result); }; }

function SingleRowExpand_possibleConstructorReturn(self, call) { if (call && (SingleRowExpand_typeof(call) === "object" || typeof call === "function")) { return call; } return SingleRowExpand_assertThisInitialized(self); }

function SingleRowExpand_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SingleRowExpand_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function SingleRowExpand_getPrototypeOf(o) { SingleRowExpand_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SingleRowExpand_getPrototypeOf(o); }






var defaultColor = table_core_index_["CONFIG"].defaultColor;
var isWrong = table_core_index_["utils"].isWrong,
    SingleRowExpand_isObject = table_core_index_["utils"].isObject,
    SingleRowExpand_isArray = table_core_index_["utils"].isArray,
    isNullOrVoid = table_core_index_["utils"].isNullOrVoid,
    changeTime = table_core_index_["utils"].changeTime,
    getRandomPassword = table_core_index_["utils"].getRandomPassword,
    formatAcuracy = table_core_index_["utils"].formatAcuracy;

var SingleRowExpand_SingleRowExpand = /*#__PURE__*/function (_Component) {
  SingleRowExpand_inherits(SingleRowExpand, _Component);

  var _super = SingleRowExpand_createSuper(SingleRowExpand);

  function SingleRowExpand(props) {
    var _this;

    SingleRowExpand_classCallCheck(this, SingleRowExpand);

    _this = _super.call(this, props);

    _this.content = function (metaItems, width, record) {
      //展开区域高度动态计算，解决操作列固定，展开行时出现位置错乱问题
      var expandStyleData = _this.expandLayout(width);

      var itemWidth = expandStyleData.expandItemWidth;
      var col = expandStyleData.col;
      var gridNum = 0;
      return metaItems.map(function (item, index) {
        var ICode = item.attrcode,
            IType = item.itemtype,
            IScale = item.scale,
            LanguageMeta = item.languageMeta,
            color = item.color;
        var _ref = [record.values],
            values = _ref[0],
            value = _ref[1],
            display = _ref[2],
            scale = _ref[3]; // 如果有这个键取这个键的value值，否则为null

        value = SingleRowExpand_isObject(values[ICode]) && values[ICode].value;
        display = SingleRowExpand_isObject(values[ICode]) ? values[ICode].display : null;
        scale = SingleRowExpand_isObject(values[ICode]) ? !isWrong(values[ICode].scale) && values[ICode].scale != "-1" ? +values[ICode].scale : +IScale || 0 : +IScale || 0; // 浏览态全展开的label颜色

        color = defaultColor.includes(color) ? "" : color;
        var isLast = index + 1 === metaItems.length;

        if (index != 0 && item.isnextrow) {
          var currentrowBlankGrid = col - gridNum % col;
          gridNum += currentrowBlankGrid;
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            className: "expanded-row-item",
            style: {
              "float": "left",
              width: "".concat(itemWidth * currentrowBlankGrid, "%"),
              height: "28px"
            }
          });
        }

        var newWidth = itemWidth;

        if (item.colnum && item.colnum > 1) {
          if (item.colnum >= col) {
            newWidth *= col;
            gridNum += col;
          } else {
            var num = Number(item.colnum);
            newWidth *= num;
            gridNum += num;
          }
        } else {
          gridNum++;
        }

        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          fieldid: Object(api_index_["getSysFieldid"])(item.attrcode),
          className: "expanded-row-item",
          key: index,
          style: {
            "float": "left",
            width: "".concat(newWidth, "%"),
            marginBottom: isLast && "5px"
          }
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          style: {
            color: color
          },
          className: "expanded-row-item-label"
        }, "".concat(item.label, ":"), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          className: "expanded-row-item-label-colon"
        })), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: "expanded-row-item-control"
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: "expanded-row-item-control-wrapper"
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, _this.handleBrowse(IType, display, value, scale, ICode, LanguageMeta, values, item && item.datatype, item && item.options, item && item.multiple, record)))));
      });
    };

    _this.handleBrowse = function (IType, display, value, scale, attrcode, languageMeta, values, datatype, options, multiple, record) {
      var json = _this.state.json;
      var _this$props = _this.props,
          mainCode = _this$props.mainCode,
          tabsStore = _this$props.tabsStore,
          rowIndex = _this$props.rowIndex;
      var mainStore = tabsStore[mainCode];
      var initSwitch = mainStore.getStore("tableSwitch");
      var activeCode = initSwitch.activeCode;
      var currentMainCode = activeCode;
      var currentStore = tabsStore[currentMainCode]; // 特殊处理下逻辑型  枚举类型

      if (datatype === "32" && ["select", "checkbox", "radio"].includes(IType) && SingleRowExpand_isArray(options) && !display && value !== null && value !== undefined) {
        if (IType === "checkbox" || multiple) {
          var dispalyList = options.filter(function (item) {
            return value.includes(item.value);
          }).map(function (option) {
            return option.display;
          });
          return dispalyList.join(",");
        } else {
          var _ref2 = options.filter(function (item) {
            return item.value == value;
          })[0] || {},
              _display = _ref2.display;

          return _display;
        }
      }

      switch (true) {
        case table_core_index_["CONFIG"].displayTypes.includes(IType):
          return display || value;

        case table_core_index_["CONFIG"]["boolean"].includes(IType):
          return value == "Y" || value == true ? json["cardTable001"] : json["cardTable002"];

        case table_core_index_["CONFIG"].timeTypes.includes(IType):
          if (IType === "datetimepicker") {
            return Object(api_index_["formatDatetime"])(changeTime(value, "YYYY-MM-DD HH:mm:ss"), 'datetime');
          } else if (IType === "timepicker") {
            return Object(api_index_["formatDatetime"])(value, 'time');
          } else if (IType === "datePickerNoTimeZone") {
            return Object(api_index_["formatDatetime"])(value, 'date');
          }

          return Object(api_index_["formatDatetime"])(changeTime(value), 'date');

        case IType === "label":
          return isNullOrVoid(display) ? value : display || value;

        case IType === "number":
          // 表格浏览态加了四舍五入
          return Object(api_index_["formatNumber"])(formatAcuracy(value, scale));

        case IType === "password":
          // 密码框浏览态显示***
          return value && getRandomPassword();

        case IType === "residtxt":
          // 对多语的处理
          var LangCode = Object(api_index_["getLangCode"])();
          var loginLang = languageMeta.filter(function (i) {
            return i.languageCode == LangCode;
          });

          if (loginLang.length > 0) {
            loginLang[0].index === "1" ? loginLang[0].index = "" : "";

            if (values[attrcode + loginLang[0].index] && values[attrcode + loginLang[0].index].value) {
              value = values[attrcode + loginLang[0].index].value;
              return value;
            }

            return value;
          }

          return value;

        case IType === "attachment":
          // 对多语的处理
          var rowKeyValue = record.rowid;
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Item"], {
            browse: false,
            itemtype: IType,
            attrcode: attrcode,
            setFieldValue: function setFieldValue(_ref3) {
              var val = _ref3.value;
              return currentStore.setCellValue({
                rowKey: 'rowid',
                rowKeyValue: rowKeyValue,
                rowIndex: rowIndex,
                attrcode: attrcode,
                value: val
              });
            },
            getFieldValue: function getFieldValue() {
              return currentStore.getCellValue({
                rowKey: 'rowid',
                rowKeyValue: rowKeyValue,
                rowIndex: rowIndex,
                attrcode: attrcode
              });
            },
            path: [rowKeyValue, attrcode, 'single']
          });

        default:
          return isNullOrVoid(display) ? value : display || value;
      }
    };

    _this.expandLayout = function (width) {
      var expandItemWidth = 33.333333;
      var col = 3;

      if (width) {
        if (width < 600) {
          expandItemWidth = 100;
          col = 1;
        }

        if (width >= 600 && width < 900) {
          expandItemWidth = 50;
          col = 2;
        }

        if (width >= 900 && width < 1230) {
          expandItemWidth = 33.333333;
          col = 3;
        }

        if (width >= 1230 && width < 1820) {
          expandItemWidth = 25;
          col = 4;
        }

        if (width >= 1820) {
          expandItemWidth = 20;
          col = 5;
        }
      }

      return {
        expandItemWidth: expandItemWidth,
        col: col
      };
    };

    _this.state = {
      json: {}
    };
    return _this;
  }

  SingleRowExpand_createClass(SingleRowExpand, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this2 = this;

      //加载多语
      var callback = function callback(json) {
        _this2.setState({
          json: json
        });
      };

      Object(api_index_["getMultiLang"])({
        moduleId: "table_cardTable",
        callback: callback
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          moduleId = _this$props2.moduleId,
          mainCode = _this$props2.mainCode,
          record = _this$props2.record,
          meta = _this$props2.meta;

      if (!meta.gridrelation || !meta.gridrelation[moduleId] || !meta.gridrelation[moduleId].destBrowseAreaCode) {
        console.error("\u6CA1\u6709\u914D\u7F6E\u6A21\u677F\uFF0Cmeta.gridrelation.".concat(moduleId, ".destBrowseAreaCode\u503C\u662Fundefined"));
        return;
      }

      var viewId = meta.gridrelation[moduleId].destBrowseAreaCode; //字段是否显示可配置

      var metaItems = meta[viewId].items.filter(function (item) {
        return !!item.visible;
      });
      var b = document.querySelector("#js_cardTable_".concat(mainCode, " .u-table-scroll .u-table-body"));
      var width = 0;

      if (b) {
        //兼容dom不存在
        width = b.getBoundingClientRect().width;
        this.tableBodyWidth = width;
      } else {
        width = this.tableBodyWidth || 0;
      }

      return (//宽度动态计算：表格宽度-固定列宽度
        viewId ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("article", {
          style: {
            width: "".concat(width - 35, "px"),
            position: "relative",
            zIndex: 2
          } //fieldid="expand-area"
          ,
          className: "cardTable-view-item"
        }, this.content(metaItems, width, record)) : null
      );
    }
  }]);

  return SingleRowExpand;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);


// EXTERNAL MODULE: external {"root":"ReactDOM","var":"ReactDOM","commonjs":"react-dom","commonjs2":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_ = __webpack_require__(6);
var external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_);

// EXTERNAL MODULE: external "@platform/base/index"
var base_index_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(5);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./src/platform/components/Table/appTable/CardTable/components/AllRowsExpand/index.less
var components_AllRowsExpand = __webpack_require__(1886);

// CONCATENATED MODULE: ./src/platform/components/Table/appTable/CardTable/components/AllRowsExpand/index.js
function AllRowsExpand_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AllRowsExpand_typeof = function _typeof(obj) { return typeof obj; }; } else { AllRowsExpand_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AllRowsExpand_typeof(obj); }

var _class, _temp;

function AllRowsExpand_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AllRowsExpand_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AllRowsExpand_createClass(Constructor, protoProps, staticProps) { if (protoProps) AllRowsExpand_defineProperties(Constructor.prototype, protoProps); if (staticProps) AllRowsExpand_defineProperties(Constructor, staticProps); return Constructor; }

function AllRowsExpand_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AllRowsExpand_setPrototypeOf(subClass, superClass); }

function AllRowsExpand_setPrototypeOf(o, p) { AllRowsExpand_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AllRowsExpand_setPrototypeOf(o, p); }

function AllRowsExpand_createSuper(Derived) { var hasNativeReflectConstruct = AllRowsExpand_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = AllRowsExpand_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = AllRowsExpand_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return AllRowsExpand_possibleConstructorReturn(this, result); }; }

function AllRowsExpand_possibleConstructorReturn(self, call) { if (call && (AllRowsExpand_typeof(call) === "object" || typeof call === "function")) { return call; } return AllRowsExpand_assertThisInitialized(self); }

function AllRowsExpand_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AllRowsExpand_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function AllRowsExpand_getPrototypeOf(o) { AllRowsExpand_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AllRowsExpand_getPrototypeOf(o); }







var AllRowsExpand_defaultColor = table_core_index_["CONFIG"].defaultColor;

var expandLayout = function expandLayout(width) {
  var expandItemWidth = 33.333333;
  var col = 3;

  if (width) {
    if (width < 600) {
      expandItemWidth = 100;
      col = 1;
    }

    if (width >= 600 && width < 900) {
      expandItemWidth = 50;
      col = 2;
    }

    if (width >= 900 && width < 1230) {
      expandItemWidth = 33.333333;
      col = 3;
    }

    if (width >= 1230 && width < 1820) {
      expandItemWidth = 25;
      col = 4;
    }

    if (width >= 1820) {
      expandItemWidth = 20;
      col = 5;
    }
  }

  return {
    expandItemWidth: expandItemWidth,
    col: col
  };
};

var AllRowsExpand_AllRowsExpand = Object(index_["ItemProvider"])(_class = (_temp = /*#__PURE__*/function (_Component) {
  AllRowsExpand_inherits(AllRowsExpand, _Component);

  var _super = AllRowsExpand_createSuper(AllRowsExpand);

  function AllRowsExpand(_props) {
    var _this;

    AllRowsExpand_classCallCheck(this, AllRowsExpand);

    _this = _super.call(this, _props);

    _this.setTableAreaHeight = function () {
      var windowHeight = document.body.clientHeight;

      if (!windowHeight) {
        return;
      }

      var header = document.querySelector('.cardTable-tabs');

      if (!header) {
        return;
      }

      var headerHeight = header.clientHeight;
      var tableAreaHeight = windowHeight - headerHeight - 24;

      if (_this.state.tableAreaHeight !== tableAreaHeight) {
        _this.setState({
          tableAreaHeight: tableAreaHeight
        });
      }
    };

    _this.handleScroll = function (e) {
      e.stopPropagation();
      var viewStartIndex = _this.state.viewStartIndex;

      var _this$getViewIndex = _this.getViewIndex(),
          currentViewStartIndex = _this$getViewIndex.viewStartIndex;

      if (viewStartIndex !== currentViewStartIndex) {
        _this.calculate(_this.props);
      }
    };

    _this.getViewIndex = function () {
      var height = _this.lineHeight;
      var scrollHeight = _this.scrollHeight;

      var DOM = _this.getThisDOM();

      var viewStartIndex = Math.floor(DOM.scrollTop / height),
          pageSize = Math.ceil(scrollHeight / height),
          viewEndIndex = viewStartIndex + pageSize - 1;
      return {
        viewStartIndex: viewStartIndex,
        viewEndIndex: viewEndIndex,
        pageSize: pageSize
      };
    };

    _this.getThisDOM = function () {
      return external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(AllRowsExpand_assertThisInitialized(_this)) || {
        scrollTop: 0
      };
    };

    _this.calculate = function (props) {
      var DOM = _this.getThisDOM(),
          _this$getViewIndex2 = _this.getViewIndex(),
          viewStartIndex = _this$getViewIndex2.viewStartIndex,
          viewEndIndex = _this$getViewIndex2.viewEndIndex,
          pageSize = _this$getViewIndex2.pageSize,
          _this$getDOMIndex = _this.getDOMIndex(viewStartIndex, viewEndIndex, props),
          DOMStartIndex = _this$getDOMIndex.DOMStartIndex,
          DOMEndIndex = _this$getDOMIndex.DOMEndIndex,
          _this$getHeightOfFirs = _this.getHeightOfFirstAndLastLineByDOMIndex(DOMStartIndex, DOMEndIndex, props),
          heightOfFirstLine = _this$getHeightOfFirs.heightOfFirstLine,
          heightOfLastLine = _this$getHeightOfFirs.heightOfLastLine;

      var prevScrollTop = DOM.scrollTop;

      _this.setState({
        pageSize: pageSize,
        viewStartIndex: viewStartIndex,
        viewEndIndex: viewEndIndex,
        DOMStartIndex: DOMStartIndex,
        DOMEndIndex: DOMEndIndex,
        heightOfFirstLine: heightOfFirstLine,
        heightOfLastLine: heightOfLastLine
      }, function () {
        DOM.scrollTop = prevScrollTop;
      });
    };

    _this.getHeightOfFirstAndLastLineByDOMIndex = function (viewStartIndex, viewEndIndex, props) {
      var height = _this.lineHeight;
      var data = props.data.filter(function (item) {
        return item.status !== '3';
      });
      var heightOfFirstLine = viewStartIndex * height,
          heightOfLastLine = (data.length - viewEndIndex - 1) * height;
      return {
        heightOfFirstLine: heightOfFirstLine,
        heightOfLastLine: heightOfLastLine
      };
    };

    _this.getDOMIndex = function (viewStartIndex, viewEndIndex, props) {
      var data = props.data.filter(function (item) {
        return item.status !== '3';
      });
      var DOMStartIndex = viewStartIndex - _this._OFFSET,
          DOMEndIndex = viewEndIndex + _this._OFFSET;
      DOMStartIndex < 0 && (DOMStartIndex = 0);
      DOMEndIndex > data.length - 1 && (DOMEndIndex = data.length - 1);
      return {
        DOMStartIndex: DOMStartIndex,
        DOMEndIndex: DOMEndIndex
      };
    };

    _this.handleBrowse = function (IType, display, value, scale, attrcode, languageMeta, values, datatype, options, multiple, record, rowIndex) {
      var json = _this.props.langJson;
      var _this$props = _this.props,
          getCellValue = _this$props.getCellValue,
          setCellValue = _this$props.setCellValue; // 特殊处理下逻辑型  枚举类型

      if (datatype === "32" && ["select", "checkbox", "radio"].includes(IType) && Object(api_index_["isArray"])(options) && !display && value !== null && value !== undefined) {
        if (IType === "checkbox" || multiple) {
          var dispalyList = options.filter(function (item) {
            return value.includes(item.value);
          }).map(function (option) {
            return option.display;
          });
          return dispalyList.join(",");
        } else {
          var _ref = options.filter(function (item) {
            return item.value == value;
          })[0] || {},
              _display = _ref.display;

          return _display;
        }
      }

      switch (true) {
        case table_core_index_["CONFIG"].displayTypes.includes(IType):
          return display || value;

        case table_core_index_["CONFIG"]["boolean"].includes(IType):
          return value == "Y" || value == true ? json["table_yes"] : json["table_no"];

        case table_core_index_["CONFIG"].timeTypes.includes(IType):
          if (IType === "datetimepicker") {
            return Object(api_index_["formatDatetime"])(Object(api_index_["changeTime"])(value, "YYYY-MM-DD HH:mm:ss"), 'datetime');
          } else if (IType === "timepicker") {
            return Object(api_index_["formatDatetime"])(value, 'time');
          } else if (IType === "datePickerNoTimeZone") {
            return Object(api_index_["formatDatetime"])(value, 'date');
          }

          return Object(api_index_["formatDatetime"])(Object(api_index_["changeTime"])(value), 'date');

        case IType === "label":
          return Object(api_index_["isNullOrVoid"])(display) ? value : display || value;

        case IType === "number":
          // 表格浏览态加了四舍五入
          return Object(api_index_["formatNumber"])(Object(api_index_["formatAcuracy"])(value, scale));

        case IType === "password":
          // 密码框浏览态显示***
          return value && Object(api_index_["getRandomPassword"])();

        case IType === "residtxt":
          // 对多语的处理
          var LangCode = Object(api_index_["getLangCode"])();
          var loginLang = languageMeta.filter(function (i) {
            return i.languageCode == LangCode;
          });

          if (loginLang.length > 0) {
            loginLang[0].index === "1" ? loginLang[0].index = "" : "";

            if (values[attrcode + loginLang[0].index] && values[attrcode + loginLang[0].index].value) {
              value = values[attrcode + loginLang[0].index].value;
              return value;
            }

            return value;
          }

          return value;

        case IType === "attachment":
          // 对多语的处理
          var rowKeyValue = record.rowid;
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Item"], {
            browse: false,
            itemtype: IType,
            attrcode: attrcode,
            setFieldValue: function setFieldValue(_ref2) {
              var val = _ref2.value;
              return setCellValue({
                rowKey: 'rowid',
                rowKeyValue: rowKeyValue,
                rowIndex: rowIndex,
                attrcode: attrcode,
                value: val
              });
            },
            getFieldValue: function getFieldValue() {
              return getCellValue({
                rowKey: 'rowid',
                rowKeyValue: rowKeyValue,
                rowIndex: rowIndex,
                attrcode: attrcode
              });
            },
            path: [rowKeyValue, attrcode, 'all']
          });

        default:
          return Object(api_index_["isNullOrVoid"])(display) ? value : display || value;
      }
    };

    _this.expandedList = function (record, index) {
      var tableDom = _this.props.tableDom;

      if (_this.viewId) {
        var width = tableDom.offsetWidth;
        var itemWidth = expandLayout(width).expandItemWidth;
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: "card-table-expand-list cf",
          fieldid: Object(api_index_["getSysFieldid"])('list-item'),
          num: index
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null, _this.metaItems.map(function (item) {
          var ICode = item.attrcode,
              IType = item.itemtype,
              IScale = item.scale,
              LanguageMeta = item.languageMeta,
              color = item.color;
          var _ref3 = [record.values],
              values = _ref3[0],
              value = _ref3[1],
              display = _ref3[2],
              scale = _ref3[3]; // 如果有这个键取这个键的value值，否则为null

          value = Object(api_index_["isObj"])(values[ICode]) ? Object(api_index_["typeFormat"])(values[ICode].value, IType) : null;
          display = Object(api_index_["isObj"])(values[ICode]) ? values[ICode].display : null;
          scale = Object(api_index_["isObj"])(values[ICode]) ? !Object(api_index_["isWrong"])(values[ICode].scale) && values[ICode].scale != '-1' ? +values[ICode].scale : +IScale || 0 : +IScale || 0; // 浏览态全展开的label颜色

          color = AllRowsExpand_defaultColor.includes(color) ? '' : color;
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            className: "expanded-list-item",
            fieldid: Object(api_index_["getSysFieldid"])(item.attrcode),
            style: {
              "float": 'left',
              width: "".concat(itemWidth, "%")
            },
            key: ICode
          }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            style: {
              color: color
            },
            className: "expanded-list-item-label"
          }, "".concat(item.label, ":"), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            className: "expanded-list-item-label-colon"
          })), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            className: "expanded-list-item-control"
          }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            className: "expanded-list-item-control-wrapper"
          }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, _this.handleBrowse(IType, display, value, scale, ICode, LanguageMeta, values, item && item.datatype, item && item.options, item && item.multiple, record, index)))));
        })));
      }
    };

    _this.state = {
      pageSize: 0,
      viewStartIndex: 0,
      viewEndIndex: 0,
      DOMStartIndex: 0,
      DOMEndIndex: 0,
      heightOfFirstLine: 0,
      heightOfLastLine: 0,
      json: {}
    };
    var _this$props2 = _this.props,
        meta = _this$props2.meta,
        mainCode = _this$props2.mainCode,
        _tableDom = _this$props2.tableDom;

    if (!meta.gridrelation || !meta.gridrelation[mainCode] || !meta.gridrelation[mainCode].destBrowseAreaCode) {
      console.error("\u6CA1\u6709\u914D\u7F6E\u6A21\u677F\uFF0Cmeta.gridrelation.".concat(mainCode, ".destBrowseAreaCode\u503C\u662Fundefined"));
      return AllRowsExpand_possibleConstructorReturn(_this);
    } // id


    _this.viewId = meta.gridrelation[mainCode].destBrowseAreaCode; //模板

    _this.metaItems = meta[_this.viewId].items.filter(function (item) {
      return !!item.visible;
    });
    var _width = _tableDom.clientWidth;
    var col = expandLayout(_width).col; // 每一行行高

    _this.lineHeight = Math.ceil(_this.metaItems.length / col) * 36 + 25; // 需要渲染的数据源

    _this.scrollHeight = 300;
    _this._OFFSET = 10;
    return _this;
  }

  AllRowsExpand_createClass(AllRowsExpand, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.calculate(this.props);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.mainCode !== this.props.mainCode) {
        var meta = nextProps.meta,
            mainCode = nextProps.mainCode,
            tableDom = nextProps.tableDom;

        if (!meta.gridrelation || !meta.gridrelation[mainCode] || !meta.gridrelation[mainCode].destBrowseAreaCode) {
          console.error("\u6CA1\u6709\u914D\u7F6E\u6A21\u677F\uFF0Cmeta.gridrelation.".concat(mainCode, ".destBrowseAreaCode\u503C\u662Fundefined"));
          return;
        } // id


        this.viewId = meta.gridrelation[mainCode].destBrowseAreaCode; //模板

        this.metaItems = meta[this.viewId].items.filter(function (item) {
          return !!item.visible;
        });
        var width = tableDom.clientWidth;
        var col = expandLayout(width).col; // 每一行行高

        this.lineHeight = Math.ceil(this.metaItems.length / col) * 36 + 25;
        this.calculate(nextProps);
        this.setTableAreaHeight();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setTableAreaHeight();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          config = _this$props3.config,
          langJson = _this$props3.langJson,
          name = _this$props3.name,
          maxVisible = _this$props3.maxVisible,
          tableDom = _this$props3.tableDom,
          adaptionHeight = _this$props3.adaptionHeight,
          _this$props3$otherAre = _this$props3.otherAreaHeight,
          otherAreaHeight = _this$props3$otherAre === void 0 ? 0 : _this$props3$otherAre;
      var _this$state = this.state,
          DOMStartIndex = _this$state.DOMStartIndex,
          DOMEndIndex = _this$state.DOMEndIndex,
          heightOfFirstLine = _this$state.heightOfFirstLine,
          heightOfLastLine = _this$state.heightOfLastLine;
      var tableHeight = tableDom.offsetHeight;
      var visibleRows = this.props.data.filter(function (item) {
        return item.status !== '3';
      });
      var styleObj = {};

      if (maxVisible) {
        styleObj.height = this.state.tableAreaHeight || '93%';
      } else if (adaptionHeight) {
        var windowHeight = document.body.clientHeight;
        var cardTableArea = document.querySelector('.cardTable-table-area');
        styleObj.maxHeight = 300;
        styleObj.height = 300;

        if (cardTableArea) {
          var top = cardTableArea.getBoundingClientRect().top;
          var expandHeight = windowHeight - top - 8 - otherAreaHeight;

          if (expandHeight < 210) {
            expandHeight = 210;
          }

          styleObj.maxHeight = expandHeight;
          styleObj.height = expandHeight;
        }
      } else {
        styleObj.maxHeight = "".concat(tableHeight > 300 ? tableHeight : 300, "px");
        styleObj.minHeight = "".concat(tableHeight > 300 ? tableHeight : 300, "px");
      }

      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "lightapp-component-cardTable-view",
        style: styleObj,
        onScroll: this.handleScroll
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "card-table-expand-wraps",
        fieldid: Object(api_index_["getSysFieldid"])("".concat(config && config.fieldid || name, "_list-area"))
      }, visibleRows.length ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        style: {
          height: heightOfFirstLine
        }
      }), visibleRows.slice(DOMStartIndex, DOMEndIndex + 1).map(function (item, index) {
        return _this2.expandedList(item, DOMStartIndex + index);
      }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        style: {
          height: heightOfLastLine
        }
      })) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "no-data-li"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "no-data-placeholder"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
        className: "no-data"
      }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "no-data-title"
      }, langJson['table0033'])))));
    }
  }]);

  return AllRowsExpand;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]), _temp)) || _class;


// EXTERNAL MODULE: ./node_modules/react-hotkeys/index.es.js
var index_es = __webpack_require__(25);

// EXTERNAL MODULE: ./src/platform/components/WithKeyboardChange/createKeyMap.js + 1 modules
var createKeyMap = __webpack_require__(9);

// EXTERNAL MODULE: ./src/platform/components/WithKeyboardChange/util/findNextFocusItemInTable.js
var findNextFocusItemInTable = __webpack_require__(20);

// CONCATENATED MODULE: ./src/platform/components/WithKeyboardChange/config/stopEnterHotKey.js

/**
 *
 * @param element 元素
 * @return boolean
 */

function stopEnterHotKey(element) {
  return element.className && element.className.includes(api_index_["config"].stopEnterHotKey);
}
// EXTERNAL MODULE: ./src/platform/components/WithKeyboardChange/util/calculateNeedJumpTimes.js
var calculateNeedJumpTimes = __webpack_require__(55);

// CONCATENATED MODULE: ./src/platform/components/Table/appTable/CardTable/components/TabHotkey/index.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function findParentTd(el) {
  while (el.parentElement) {
    el = el.parentElement;

    if (el.tagName === 'TD') {
      return el;
    }
  }

  return null;
}

var keyMap = {
  nextTabHandler: ['right', 'down'],
  nextTabUSRHandler: ['shift+right'],
  prevTabHandler: ['left', 'up'],
  prevTabUSLHandler: ['shift+left'],
  expand: ['space'],
  enter: ['enter']
};
/**
 * @author bbqin
 * @param {*} props
 * @description  tab页签的hotkey逻辑
 * @return {null}
 */

function TabHotKey(props) {
  var _ref = props || {},
      _ref$hotKeyboard = _ref.hotKeyboard,
      hotKeyboard = _ref$hotKeyboard === void 0 ? true : _ref$hotKeyboard,
      wrapperId = _ref.wrapperId,
      headerId = _ref.headerId,
      activeKey = _ref.activeKey,
      moduleId = _ref.moduleId,
      others = _objectWithoutProperties(_ref, ["hotKeyboard", "wrapperId", "headerId", "activeKey", "moduleId"]);
  /**
   * @description 获取活跃元素
   * @param {*} comboKey
   */


  function getActiveTabElement(comboKey) {
    var wrapper = document.querySelector("#".concat(wrapperId));
    var activeTabTitle = document.querySelector("#".concat(headerId, " li.active"));

    if (!activeTabTitle) {
      return null;
    }

    if (!comboKey && activeTabTitle.firstElementChild === document.activeElement) {
      return activeTabTitle;
    }

    if (comboKey && wrapper && wrapper.contains(document.activeElement)) {
      return activeTabTitle;
    }

    return null;
  }
  /**
   * @description 获取将要聚焦的元素
   * @param {*} dir
   * @param {*} comboKey
   */


  function getWillActiveTabElement(dir) {
    var activeTabTitle = document.querySelector("#".concat(headerId, " li.tabs-item.active")),
        // first = document.querySelector(`#${headerId} li.tabs-item:first-child`),
    // last = document.querySelector(`#${headerId} li.tabs-item:last-child`),
    $li = document.querySelector("#".concat(headerId, " li.tabs-item")) || [],
        lilen = $li.length,
        first = $li[0],
        last = $li[lilen - 1],
        willActiveElement = activeTabTitle;

    if (dir === 'prev' && activeTabTitle.previousElementSibling) {
      willActiveElement = activeTabTitle.previousElementSibling;
    }

    if (dir === 'prev' && !activeTabTitle.previousElementSibling) {
      willActiveElement = last;
    }

    if (dir === 'next' && activeTabTitle.nextElementSibling) {
      willActiveElement = activeTabTitle.nextElementSibling;
    }

    if (dir === 'next' && !activeTabTitle.nextElementSibling) {
      willActiveElement = first;
    }

    return willActiveElement;
  }

  Object(createKeyMap["f" /* setValueOfActiveTable */])({
    moduleId: moduleId,
    activeKey: activeKey
  });
  return hotKeyboard ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_es["HotKeys"], _extends({
    keyMap: keyMap,
    handlers: {
      nextTabHandler: function nextTabHandler() {
        var activeTabTitle = getActiveTabElement(false); // console.log(e, document.activeElement, activeTabTitle);
        // 如果当前focus元素在页签下

        if (activeTabTitle) {
          // console.log("next tab");
          var next = getWillActiveTabElement('next');
          next.firstElementChild.focus();
          next.click(); // e.preventDefault();
        }
      },
      nextTabUSRHandler: function nextTabUSRHandler(e) {
        var activeTabTitle = getActiveTabElement(e.shiftKey); // 如果当前focus元素在页签下

        if (activeTabTitle) {
          // console.log("next tab");
          var next = getWillActiveTabElement('next'); // next.firstElementChild.className += ' focused';

          next.firstElementChild.focus();
          next.click(); // e.preventDefault();
        }
      },
      prevTabHandler: function prevTabHandler() {
        var activeTabTitle = getActiveTabElement(false); // 如果当前focus元素在页签下

        if (activeTabTitle) {
          // console.log('prev tab');
          var prev = getWillActiveTabElement('prev');
          prev.firstElementChild.focus();
          prev.click(); // e.preventDefault();
        }
      },
      prevTabUSLHandler: function prevTabUSLHandler(e) {
        var activeTabTitle = getActiveTabElement(e.shiftKey); // 如果当前focus元素在页签下

        if (activeTabTitle) {
          // console.log('prev tab');
          var prev = getWillActiveTabElement('prev');
          prev.firstElementChild.focus();
          prev.click(); // e.preventDefault();
        }
      },
      expand: function expand(e) {
        // let wrapper = document.querySelector(`#${wrapperId}`);
        var activeTabTitle = document.querySelector("#".concat(headerId)); // 如果当前focus元素在页签下

        if (activeTabTitle.contains(document.activeElement)) {
          e.preventDefault();
          console.log('sapce trigger!'); // e.preventDefault();

          activeTabTitle.querySelector('i').click();
        }
      },
      enter: function enter(e) {
        var target = e.target;
        if (stopEnterHotKey(e.target)) return;
        var container = document.getElementById(headerId);
        var item = Object(createKeyMap["c" /* getFirstItem */])(activeKey);

        if (item && container.contains(target)) {
          var div = document.querySelector("div[".concat(item, "] [tabindex=\"0\"]")); //判断当前行是否可以编辑

          var nextFocusTd = div && findParentTd(div);
          var nextFocusTr = nextFocusTd && nextFocusTd.parentElement;

          if (nextFocusTr && nextFocusTr.getAttribute('tabindex') === '-1') {
            var needJumpTimes = 0;
            needJumpTimes = Object(calculateNeedJumpTimes["a" /* default */])(nextFocusTr, needJumpTimes, 'down');
            var needJumpItemCode = item.replace(/\d+$/, needJumpTimes);
            div = document.querySelector("div[".concat(needJumpItemCode, "] [tabindex=\"0\"]"));
          }

          Object(findNextFocusItemInTable["a" /* executeAutoFocus */])({
            div: div,
            ViewModel: api_index_["ViewModel"]
          });
          div = null;
        }
      }
    },
    className: "tabs-hotkeys-wrapper",
    focused: true,
    attach: document.body
  }, others), props.children) : null;
}
/* harmony default export */ var TabHotkey = (TabHotKey);
// EXTERNAL MODULE: ./src/platform/components/Table/appTable/CardTable/components/TabsTable/index.less
var components_TabsTable = __webpack_require__(1885);

// CONCATENATED MODULE: ./src/platform/components/Table/appTable/CardTable/components/TabsTable/index.js
function TabsTable_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TabsTable_typeof = function _typeof(obj) { return typeof obj; }; } else { TabsTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TabsTable_typeof(obj); }

function TabsTable_extends() { TabsTable_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TabsTable_extends.apply(this, arguments); }

function TabsTable_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TabsTable_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function TabsTable_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function TabsTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TabsTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TabsTable_ownKeys(Object(source), true).forEach(function (key) { TabsTable_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TabsTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TabsTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function TabsTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TabsTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TabsTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) TabsTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) TabsTable_defineProperties(Constructor, staticProps); return Constructor; }

function TabsTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TabsTable_setPrototypeOf(subClass, superClass); }

function TabsTable_setPrototypeOf(o, p) { TabsTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TabsTable_setPrototypeOf(o, p); }

function TabsTable_createSuper(Derived) { var hasNativeReflectConstruct = TabsTable_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = TabsTable_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = TabsTable_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return TabsTable_possibleConstructorReturn(this, result); }; }

function TabsTable_possibleConstructorReturn(self, call) { if (call && (TabsTable_typeof(call) === "object" || typeof call === "function")) { return call; } return TabsTable_assertThisInitialized(self); }

function TabsTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TabsTable_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function TabsTable_getPrototypeOf(o) { TabsTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TabsTable_getPrototypeOf(o); }









var Item = base_index_["Menu"].Item;

var formatColumn = table_core_index_["lib"].formatColumn,
    hotkey = table_core_index_["lib"].hotkey,
    selectRow = table_core_index_["lib"].selectRow,
    checkCol = table_core_index_["lib"].checkCol,
    indexCol = table_core_index_["lib"].indexCol,
    errorCol = table_core_index_["lib"].errorCol,
    selectable = table_core_index_["lib"].selectable,
    excel = table_core_index_["lib"].excel,
    total = table_core_index_["lib"].total,
    columnSort = table_core_index_["lib"].columnSort,
    contextMenu = table_core_index_["lib"].contextMenu,
    filter = table_core_index_["lib"].filter;
var uuidv4 = table_core_index_["utils"].uuidv4,
    excelPackageData = table_core_index_["utils"].excelPackageData,
    polymerizeComponents = table_core_index_["utils"].polymerizeComponents,
    isFunction = table_core_index_["utils"].isFunction,
    TabsTable_isArray = table_core_index_["utils"].isArray,
    isString = table_core_index_["utils"].isString,
    isNumber = table_core_index_["utils"].isNumber,
    isEmptyValue = table_core_index_["utils"].isEmptyValue,
    TabsTable_isObject = table_core_index_["utils"].isObject,
    isUndefined = table_core_index_["utils"].isUndefined,
    getMetaIsTotal = table_core_index_["utils"].getMetaIsTotal,
    TabsTable_isWrong = table_core_index_["utils"].isWrong;
var MetaTable = polymerizeComponents(base_index_["Table"], [columnSort, formatColumn, selectRow, errorCol, total, checkCol, indexCol, filter, selectable, excel, hotkey, contextMenu], {
  name: 'cardTable',
  type: 'hoc',
  user: 'platform'
});
var TabsTable_ROW_STATUS = table_core_index_["CONFIG"].ROW_STATUS;

var TabsTable_TabsTable = /*#__PURE__*/function (_Component) {
  TabsTable_inherits(TabsTable, _Component);

  var _super = TabsTable_createSuper(TabsTable);

  function TabsTable(_props) {
    var _this;

    TabsTable_classCallCheck(this, TabsTable);

    _this = _super.call(this, _props);

    _this.tabChange = function (code) {
      // 当前激活页签状态存在主区域store
      var initSwitch = _this.mainStore.getStore("tableSwitch");

      var activeCode = initSwitch.activeCode; //API调用导致页签改变，视图不变时，不更新

      if (activeCode === code) {
        return;
      }

      initSwitch.activeCode = code;
      var _this$props = _this.props,
          tabsStore = _this$props.tabsStore,
          tabsConfig = _this$props.tabsConfig;

      var meta = _this.currentStore.getStore("meta");

      var config = {};
      var mainAreaCode = '';
      var currentCode = code; //获取当前激活Store

      if (meta) {
        mainAreaCode = _this.getMainCode(meta, code);
        _this.currentMainCode = mainAreaCode;
        _this.currentStore = tabsStore[mainAreaCode];
        config = tabsConfig[mainAreaCode] || {};
      } else {
        _this.currentStore = tabsStore[code];
        _this.currentMainCode = code; // 可以没有配置参数

        config = tabsConfig[code] || {};
        mainAreaCode = code;
      } // 调整下更新顺序 避免下面会调离取不到值


      _this.currentStore.setStore("activeTableCode", _this.currentMainCode, false);

      _this.mainStore.setStore("tableSwitch", initSwitch, true);

      var _config = config,
          onTabChange = _config.onTabChange;
      isFunction(onTabChange) && onTabChange(mainAreaCode, currentCode);
    };

    _this.tabsAngleToggle = function () {
      //显示隐藏属性存主Store
      // console.log(this.currentMainCode, this.props.mainCode)
      var _this$props2 = _this.props,
          tabsStore = _this$props2.tabsStore,
          mainCode = _this$props2.mainCode,
          tabsConfig = _this$props2.tabsConfig,
          metaTabs = _this$props2.metaTabs;
      var _tabsStore$mainCode = tabsStore[mainCode],
          getStore = _tabsStore$mainCode.getStore,
          setStore = _tabsStore$mainCode.setStore;
      var tableSwitch = getStore("tableSwitch");
      tableSwitch.tableVisible = !tableSwitch.tableVisible;
      setStore("tableSwitch", tableSwitch, true); //监听当前页签组的全部事件

      var _iterator = _createForOfIteratorHelper(metaTabs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var code = _step.value;
          var onHeadAngleToggle = tabsConfig[code].onHeadAngleToggle;
          isFunction(onHeadAngleToggle) && onHeadAngleToggle(code, tableSwitch.tableVisible);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    _this.onAllCheckChange = function () {
      var tabsConfig = _this.props.tabsConfig;

      var _ref = tabsConfig[_this.currentMainCode] || {},
          selectedChange = _ref.selectedChange,
          onSelectedAll = _ref.onSelectedAll;

      var _this$currentStore = _this.currentStore,
          setRowsSelected = _this$currentStore.setRowsSelected,
          getSelectedRows = _this$currentStore.getSelectedRows,
          getCheckInfo = _this$currentStore.getCheckInfo,
          getData = _this$currentStore.getData;

      var _ref2 = getCheckInfo() || {},
          checkedAll = _ref2.checkedAll;

      var oldLen = getSelectedRows().length;
      checkedAll = !checkedAll;
      setRowsSelected({}, checkedAll, true);
      var newLen = getSelectedRows().length;
      isFunction(onSelectedAll) && onSelectedAll(_this.currentMainCode, checkedAll, getData().length);
      isFunction(selectedChange) && selectedChange(_this.currentMainCode, newLen, oldLen);
    };

    _this.onCheckChange = function (record, index) {
      var isUnique = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var tabsConfig = _this.props.tabsConfig;

      var _ref3 = tabsConfig[_this.currentMainCode] || {},
          selectedChange = _ref3.selectedChange,
          onSelected = _ref3.onSelected;

      var _this$currentStore2 = _this.currentStore,
          getTableProps = _this$currentStore2.getTableProps,
          setRowsSelected = _this$currentStore2.setRowsSelected,
          getRowProps = _this$currentStore2.getRowProps,
          getSelectedRows = _this$currentStore2.getSelectedRows,
          getTrueRowIndex = _this$currentStore2.getTrueRowIndex,
          setTableProps = _this$currentStore2.setTableProps;
      var rowKey = getTableProps("rowKey");
      var rowKeyValue = record[rowKey];
      var selected = !getRowProps({
        rowKeyValue: rowKeyValue
      }, "selected");
      var oldLen = getSelectedRows().length;

      if (isUnique) {
        // 清理所有
        setRowsSelected({}, false, false);
      } // 特殊情况 如果当前选择 选择行时 依然选中


      if (!selected && isUnique && oldLen > 1) {
        selected = true;
      }

      setRowsSelected({
        rowKeyValues: rowKeyValue
      }, selected);
      setTableProps("currentIndex", selected ? getTrueRowIndex({
        rowIndex: index
      }) : -1, false);
      var newLen = getSelectedRows().length; // 选中选项的回调函数

      isFunction(onSelected) && onSelected(_this.currentMainCode, record, index, selected);
      isFunction(selectedChange) && selectedChange(_this.currentMainCode, newLen, oldLen);
    };

    _this.sortChange = function (sortParam, sortData) {
      var sortObj = {};

      var _this$mainStore$getSt = _this.mainStore.getStore("tableSwitch"),
          activeCode = _this$mainStore$getSt.activeCode;

      var meta = _this.getCurrentMeta(activeCode);

      sortParam.forEach(function (item) {
        sortObj[item.field] = item;
      }); // 处理排序多表头

      Object(table_core_index_["handleSortcolumns"])({
        columns: meta,
        sortObj: sortObj
      });
      var invisibleData = _this.currentStore.getViewData('invisible') || [];

      _this.currentStore.setData({
        data: [].concat(_toConsumableArray(sortData), _toConsumableArray(invisibleData))
      });
    };

    _this.contextMenuClick = function (btnCode, execCommandCopy, param, insertNum, rowIndex) {
      var isHotKey = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var _this$currentStore3 = _this.currentStore,
          getData = _this$currentStore3.getData,
          getRowOldValue = _this$currentStore3.getRowOldValue,
          insertRowsAfterIndex = _this$currentStore3.insertRowsAfterIndex,
          deleteTableRows = _this$currentStore3.deleteTableRows,
          getCache = _this$currentStore3.getCache,
          getArrayMeta = _this$currentStore3.getArrayMeta,
          getRows = _this$currentStore3.getRows;
      var _this$currentConfig = _this.currentConfig,
          rightMenuClick = _this$currentConfig.rightMenuClick,
          onBatchChange = _this$currentConfig.onBatchChange;
      var editCode = ["delete", 'insert_up', 'insert_down'];
      var copyCode = ["copy", "copy-row", "copy-column"];

      switch (true) {
        case editCode.includes(btnCode):
          if (isFunction(rightMenuClick)) {
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
          var activeHeads = getCache('activeSpecialCells'); //console.log("表头选中信息：", activeHeads)

          var arrayMeta = getArrayMeta(_this.currentMainCode);
          console.log("模板数据arrayMeta", arrayMeta);

          var _this$mainStore$getSt2 = _this.mainStore.getStore("tableSwitch"),
              activeCode = _this$mainStore$getSt2.activeCode;

          var currentMeta = _this.getCurrentMeta(activeCode);

          var activedCells = getCache("activedCells");

          if (isHotKey && !activedCells && !activeHeads) {
            return;
          }

          var selectedRows = [];

          if (btnCode === 'copy' || btnCode === 'copy-row') {
            selectedRows = activedCells && getRows({
              rowKeyValues: Object.keys(activedCells)
            });
          } else if (btnCode === 'copy-column') {
            selectedRows = getData([TabsTable_ROW_STATUS["delete"], TabsTable_ROW_STATUS.filter]);
          }

          isFunction(execCommandCopy) && execCommandCopy(activeHeads, currentMeta, activedCells, selectedRows, arrayMeta);
          break;

        case btnCode === "paste":
          //调用复制粘贴回调事件
          if (isFunction(onBatchChange)) {
            param = TabsTable_objectSpread(TabsTable_objectSpread({}, param), {}, {
              langJson: _this.props.langJson,
              rows: getData(),
              getRowOldValue: getRowOldValue,
              tableId: _this.currentMainCode
            });
            var data = excelPackageData(param);
            onBatchChange(data);
          }

          break;

        case btnCode === "insert_paste":
          //插行并粘贴
          if (isFunction(onBatchChange)) {
            var _rows2 = Array(insertNum).fill({
              values: {}
            });

            insertRowsAfterIndex(_rows2, rowIndex); //插入空行

            param = TabsTable_objectSpread(TabsTable_objectSpread({}, param), {}, {
              langJson: _this.props.langJson,
              rows: getData(),
              getRowOldValue: getRowOldValue,
              tableId: _this.currentMainCode
            });

            var _data = excelPackageData(param);

            onBatchChange(_data);
          }

          break;
      }
    };

    _this.getCurrentMeta = function (activeCode) {
      var tableMeta = _this.currentStore.getStore("meta");

      if (tableMeta && tableMeta[activeCode]) {
        return tableMeta[activeCode].items.get();
      }

      return [];
    };

    _this.getMainCode = function (meta, activeCode) {
      var metaTabs = _this.props.metaTabs;
      var mainCode = activeCode;

      var _iterator2 = _createForOfIteratorHelper(metaTabs),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var code = _step2.value;

          if (meta.gridrelation && meta.gridrelation[code]) {
            var relation = meta.gridrelation[code].tabRelation;

            if (TabsTable_isArray(relation) && relation.includes(activeCode)) {
              mainCode = code;
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return mainCode;
    };

    _this.getCurrentModel = function () {
      var _this$props3 = _this.props,
          mainCode = _this$props3.mainCode,
          tabsStore = _this$props3.tabsStore,
          tabsConfig = _this$props3.tabsConfig; //最大化、激活页签、表格显示等页签级功能 状态存 主区域Store

      var initSwitch = _this.mainStore.getStore("tableSwitch");

      var activeCode = initSwitch.activeCode;
      _this.currentMainCode = activeCode;
      var meta = tabsStore[mainCode].getStore("meta");

      if (meta) {
        _this.currentMainCode = _this.getMainCode(meta, activeCode);

        tabsStore[_this.currentMainCode].setStore("activeTableCode", _this.currentMainCode, false);

        _this.mainStore.setStore("tableSwitch", initSwitch, false);
      } //当前激活页签主区域store和config


      return {
        store: tabsStore[_this.currentMainCode],
        config: tabsConfig[_this.currentMainCode] || {}
      };
    };

    _this.getTabs = function (meta, activeCode) {
      var tabs = [];
      var moreTabs = [];
      var activeName = "";

      if (meta) {
        var metaTabs = _this.props.metaTabs;

        var hideTabsCode = _this.mainStore.getStore("hideTabsCode");

        metaTabs && metaTabs.forEach(function (item) {
          var relation = meta.gridrelation && meta.gridrelation[item];

          if (relation && relation.tabRelation) {
            //亚军回来再看看改的对不对
            var tabRelation = relation.tabRelation;
            tabRelation && tabRelation.forEach(function (elem) {
              if (!hideTabsCode[meta[elem].code] && meta[elem].areaVisible !== false) {
                // if (tabs.length === 4) {
                //     moreTabs.push({
                //         name: meta[elem].name,
                //         code: meta[elem].code,
                //     });
                //     if (meta[elem].code === activeCode)
                //         activeName = meta[elem].name;
                // } else {
                _this.isAllTabsHide = false;
                tabs.push({
                  name: meta[elem].name,
                  code: meta[elem].code
                }); // }
              }
            });
          } else {
            if (meta[item] && !hideTabsCode[meta[item].code] && meta[item].areaVisible !== false) {
              // if (tabs.length === 4) {
              //     moreTabs.push({
              //         name: meta[item].name,
              //         code: meta[item].code,
              //     });
              //     if (meta[item].code === activeCode)
              //         activeName = meta[item].name;
              // } else {
              _this.isAllTabsHide = false;
              tabs.push({
                name: meta[item].name,
                code: meta[item].code
              }); // }
            }
          }
        }); // 没有页签时隐藏表格

        if (tabs.length === 0) {
          _this.isAllTabsHide = true;
        }

        return {
          tabs: tabs,
          moreTabs: moreTabs,
          activeName: activeName
        };
      }
    };

    _this.getMoreTabsItem = function (moreTabs, activeCode, maincode) {
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Menu"], {
        onSelect: function onSelect(_ref4) {
          var key = _ref4.key;

          _this.tabChange(key);
        }
      }, moreTabs.map(function (item) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Item, {
          key: item.code,
          className: classnames_default()("tabs-item", {
            active: item.code === activeCode
          }),
          onClick: _this.tabChange.bind(TabsTable_assertThisInitialized(_this), item.code)
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("a", {
          tabIndex: 0
        }, item.name, _this.getValidateFailed(maincode, item.code) && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
          className: "iconfont icon-djgantanhao"
        })), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          className: "active-line"
        }));
      }));
    };

    _this.isAreaEditable = function (code, meta) {
      var isEditable = false;

      if (meta && meta[code] && meta[code].items) {
        if (meta[code].items.get().find(function (e) {
          return e.disabled !== true && e.visible === true;
        })) {
          isEditable = true;
        }
      }

      return isEditable;
    };

    _this.createTableTabs = function () {
      var _this$props4 = _this.props,
          mainCode = _this$props4.mainCode,
          tabsStore = _this$props4.tabsStore,
          langJson = _this$props4.langJson; //当前激活页签主区域store和config

      var getStore = _this.currentStore.getStore; // 页签按钮、行展开、全部展开收起 存当前激活 Store

      var _this$currentConfig2 = _this.currentConfig,
          tableHeadLeft = _this$currentConfig2.tableHeadLeft,
          tableHead = _this$currentConfig2.tableHead,
          hideSwitch = _this$currentConfig2.hideSwitch,
          _this$currentConfig2$ = _this$currentConfig2.hideMaxBtn,
          hideMaxBtn = _this$currentConfig2$ === void 0 ? false : _this$currentConfig2$,
          showCheck = _this$currentConfig2.showCheck,
          hideBrowseCheckbox = _this$currentConfig2.hideBrowseCheckbox,
          _this$currentConfig2$2 = _this$currentConfig2.showEditIcon,
          showEditIcon = _this$currentConfig2$2 === void 0 ? true : _this$currentConfig2$2,
          _this$currentConfig2$3 = _this$currentConfig2.showTotalNum,
          showTotalNum = _this$currentConfig2$3 === void 0 ? true : _this$currentConfig2$3,
          _this$currentConfig2$4 = _this$currentConfig2.initShowTotalNum,
          initShowTotalNum = _this$currentConfig2$4 === void 0 ? true : _this$currentConfig2$4,
          _this$currentConfig2$5 = _this$currentConfig2.showSelectedNum,
          showSelectedNum = _this$currentConfig2$5 === void 0 ? true : _this$currentConfig2$5,
          _this$currentConfig2$6 = _this$currentConfig2.showToggleAngle,
          showToggleAngle = _this$currentConfig2$6 === void 0 ? true : _this$currentConfig2$6;
      showCheck = isUndefined(hideBrowseCheckbox) ? showCheck : status === "browse" ? !hideBrowseCheckbox[activeCode] : showCheck;

      var _getStore = getStore("props"),
          _getStore$status = _getStore.status,
          status = _getStore$status === void 0 ? "browse" : _getStore$status; //获取模板页签配置


      var meta = getStore("meta"); //最大化、激活页签、表格显示等页签级功能 状态存 主区域Store

      var tableSwitch = _this.mainStore.getStore("tableSwitch");

      var activeCode = tableSwitch.activeCode,
          tableVisible = tableSwitch.tableVisible,
          maxVisible = tableSwitch.maxVisible,
          ListViewVisible = tableSwitch.ListViewVisible;

      if (isUndefined(tableVisible) && meta && meta[mainCode]) {
        var _meta$mainCode$isunfo = meta[mainCode].isunfold,
            isunfold = _meta$mainCode$isunfo === void 0 ? true : _meta$mainCode$isunfo;
        tableVisible = isunfold;
        tableSwitch.tableVisible = tableVisible;

        _this.mainStore.setStore("tableSwitch", tableSwitch, false);
      }

      var _this$getTabs = _this.getTabs(meta, activeCode),
          _this$getTabs$tabs = _this$getTabs.tabs,
          tabs = _this$getTabs$tabs === void 0 ? [] : _this$getTabs$tabs,
          moreTabs = _this$getTabs.moreTabs,
          activeName = _this$getTabs.activeName; // tabs 数目来设置样式 UE要求


      var isSingleTab = tabs.length <= 1; //let thiscode = this.getMainCode(meta, activeCode);
      //let checkNum = tabsStore[thiscode].getStore('selectedIndex').size;

      var checkNum = TabsTable_isArray(_this.currentData) ? _this.currentData.filter(function (e) {
        return e.selected === true;
      }).length : 0;
      return !_this.isAllTabsHide && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: classnames_default()("cardTable-tabs", {
          "hide-cardTable": !tableVisible,
          "show-cardTable": tableVisible,
          "tabs-toggle-angle": showToggleAngle
        }),
        fieldid: Object(api_index_["getSysFieldid"])("tabs-area")
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(TabHotkey, {
        tabs: tabs,
        activeKey: activeCode,
        wrapperId: "js_cardTable_" + mainCode,
        headerId: "js_lightTabs_header_" + mainCode,
        moduleId: mainCode
      }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: classnames_default()("tabs-area", {
          "single-tabs-area": isSingleTab
        }),
        id: "js_lightTabs_header_".concat(mainCode)
      }, showToggleAngle && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
        className: "cardTable-tabs-angle",
        onClick: _this.tabsAngleToggle
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tooltip"], {
        placement: "top",
        overlay: tableVisible ? langJson['table-tabs-close'] : langJson['table-tabs-expand'],
        delayHide: 1,
        delayShow: 1000
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: classnames_default()("iconfont icon table-tabs-icon", {
          "icon-right": !tableVisible,
          "icon-bottom": tableVisible
        })
      }))), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("ul", {
        className: classnames_default()("tabs-wrapper", {
          "single-tab": tabs.length <= 1
        })
      }, tabs.map(function (item, index) {
        // 以item.code找到mainCode，，在根据mainCode找到store
        var maincode = _this.getMainCode(meta, item.code);

        var totalNum = 0;

        if (!tabsStore || !tabsStore[maincode]) {
          console.warn("not find tabsStore", tabsStore, mainCode);
        } else if (showTotalNum) {
          totalNum = tabsStore[maincode].getViewData("filter").length;
        }

        var showErrorIcon = _this.getValidateFailed(maincode, item.code);

        var editIconFlag = !isSingleTab && showEditIcon && status === 'edit' && _this.isAreaEditable(item.code, meta);

        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("li", {
          key: item.code,
          className: classnames_default()("tabs-item", {
            "single-tab": isSingleTab,
            "active": !isSingleTab && item.code === activeCode,
            "has-edit-icon": editIconFlag,
            "has-error-icon": showErrorIcon
          }),
          onClick: _this.tabChange.bind(TabsTable_assertThisInitialized(_this), item.code)
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["ScrollElement"], {
          name: item.code
        }, editIconFlag && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
          className: "icon iconfont icon-yebj edit-icon"
        }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("a", {
          tabIndex: 0
        }, item.name, showTotalNum && totalNum === 0 && initShowTotalNum || showTotalNum && totalNum !== 0 && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, '(' + totalNum + ')'), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          className: "active-line"
        })), showErrorIcon && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
          className: "iconfont icon-djgantanhao error-icon"
        }), index !== tabs.length - 1 && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          className: "item-tap"
        })));
      }), showCheck && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("li", {
        key: 'selectedNum',
        className: "tabs-item-selected-num"
      }, showSelectedNum && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, langJson && langJson['table0034'], checkNum, langJson && langJson['table0035'])), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "cardTable-head-left"
      }, typeof tableHeadLeft === "function" && tableHeadLeft()), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("li", {
        key: 'tabsSpace',
        className: "tabs-item-space-super"
      }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("li", {
        key: 'button',
        className: "tabs-item-button-area"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: classnames_default()("btns-area", {
          "hide-btns": !tableVisible
        })
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "cardTable-btns"
      }, status === "edit" || isFunction(hideSwitch) && !hideSwitch() || /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tooltip"], {
        placement: "top",
        overlay: ListViewVisible ? langJson['table-view-list'] : langJson['table-view-card'],
        delayHide: 1,
        delayShow: 1000
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: classnames_default()("icon iconfont head-icon", {
          "icon-shituqiehuan": ListViewVisible,
          "icon-shituliebiaoqiehuan": !ListViewVisible
        }),
        onClick: function onClick() {
          var openListView = _this.mainStore.openListView;
          openListView(!ListViewVisible);
        }
      })), !hideMaxBtn && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tooltip"], {
        placement: "top",
        overlay: maxVisible ? langJson['table-zoom-normal'] : langJson['table-zoom-max'],
        delayHide: 1,
        delayShow: 1000
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: classnames_default()("icon iconfont head-icon", {
          "icon-zuixiaohua": maxVisible,
          "icon-zuidahua": !maxVisible
        }),
        onClick: function onClick() {
          var openMaxView = _this.mainStore.openMaxView;
          openMaxView(!maxVisible);
        }
      }))), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "cardTable-head"
      }, typeof tableHead === "function" && tableHead()))))));
    };

    _this.getColSettiongParam = function (activeCode) {
      var mainCode = _this.props.mainCode;
      var _this$currentStore4 = _this.currentStore,
          getStore = _this$currentStore4.getStore,
          getConfig = _this$currentStore4.getConfig;
      var meta = getStore('meta');

      if (meta && meta[mainCode]) {
        var currentMeta = meta[mainCode];
        var config = getConfig();
        return {
          appcode: currentMeta.appcode || api_index_["pageTo"].getAppCode(),
          pagecode: currentMeta.pagecode || api_index_["pageTo"].getPageCode(),
          code: currentMeta.templateCode || meta.code,
          pageid: currentMeta.pageid || meta.pageid,
          areaCode: mainCode,
          areaId: currentMeta.oid,
          noColSetClass: config.noColSetClass,
          colSetCallback: config.colSetCallback,
          tableType: 'cardtable',
          tabName: activeCode
        };
      } else {
        return {};
      }
    };

    _this.updateColumnAfterSetting = function (newColumn, areaCode) {
      var _this$currentStore5 = _this.currentStore,
          setMeta = _this$currentStore5.setMeta,
          getStore = _this$currentStore5.getStore,
          setStore = _this$currentStore5.setStore;
      var meta = getStore("meta");
      var key = getStore("key");

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
        setStore('key', key + 1);
      }
    };

    _this.onBeforeEvent = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        var currentModel, onBeforeEvent, _this$currentStore6, getTrueRowIndex, setTableProps, record, rowKey, rowKeyValue, rowIndex, attrcode, column, _params$value, value, validated, event, triggerType, name, activeCode, validateFailed, oldLen, _column$languageMeta$, loginCode, loginIndex, loginValue;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //当前激活页签主区域store和config
                currentModel = _this.getCurrentModel();
                _this.currentStore = currentModel.store;
                _this.currentConfig = currentModel.config;
                onBeforeEvent = _this.currentConfig.onBeforeEvent;
                _this$currentStore6 = _this.currentStore, getTrueRowIndex = _this$currentStore6.getTrueRowIndex, setTableProps = _this$currentStore6.setTableProps;
                record = params.record, rowKey = params.rowKey, rowKeyValue = params.rowKeyValue, rowIndex = params.rowIndex, attrcode = params.attrcode, column = params.column, _params$value = params.value, value = _params$value === void 0 ? {} : _params$value, validated = params.validated, event = params.event, triggerType = params.triggerType; // 用于解决点击前赋值不上的问题

                setTableProps("currentIndex", getTrueRowIndex({
                  rowIndex: rowIndex
                }), false);
                setTableProps("currentInfo", {
                  record: record,
                  index: rowIndex
                }, false); // 处理校验状态

                if (validated === false) {
                  name = _this.currentStore.getStore("name");
                  activeCode = _this.mainStore.getStore(['tableSwitch', 'activeCode']);
                  validateFailed = _this.mainStore.getCache(['validateFailed', name, activeCode]);

                  if (validateFailed && validateFailed[rowKeyValue]) {
                    oldLen = Object.keys(validateFailed).length;
                    delete validateFailed[rowKeyValue][attrcode];

                    if (oldLen > 0 && Object.keys(validateFailed[rowKeyValue]).length === 0) {
                      delete validateFailed[rowKeyValue];

                      _this.mainStore.refresh();
                    }
                  }
                } // 检验输入字符长度


                if (triggerType === "onFocus" && column.maxlength) {
                  event.target.isFlag = false;
                  event.target.addEventListener("compositionstart", function (e) {
                    e.target.isFlag = true;
                  }, false);
                  event.target.addEventListener("compositionend", function (e) {
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


                if (column.itemtype !== "residtxt") {
                  // onFocus 和value  用于批量更改   zhanghengh 18/6/29 先注释，以后可能有用
                  _this.currentStore.setCache("oldBatchData", {
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

                  _this.currentStore.setCache("oldBatchData", {
                    batchChangeIndex: rowIndex,
                    batchChangeKey: column.attrcode,
                    batchChangeValue: loginValue.value,
                    batchChangeDisplay: null
                  });
                } // 有一些操作要放在这里处理 设置行状态等等


                if (!isFunction(onBeforeEvent)) {
                  _context.next = 16;
                  break;
                }

                _context.next = 14;
                return onBeforeEvent(TabsTable_objectSpread(TabsTable_objectSpread({}, params), {}, {
                  moduleId: _this.currentMainCode
                }));

              case 14:
                _context.t0 = _context.sent;
                return _context.abrupt("return", _context.t0 !== false);

              case 16:
                return _context.abrupt("return", true);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref5.apply(this, arguments);
      };
    }();

    _this.onAfterEvent = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
        var currentModel, _this$currentConfig3, _this$currentConfig3$, autoAddRow, onAfterEvent, _this$currentStore7, getTableProps, setCellValue, record, rowKey, rowKeyValue, rowIndex, attrcode, column, _params$value2, value, _params$oldValue, oldValue, componentValue, event, _params$triggerType, triggerType, _params$isTriggerModa, isTriggerModal, activeCode, key, _record$values$attrco, _column$languageMeta$2, loginCode, loginIndex, loginValue, next, _key, viewLen, isSwitch_browseDisabled, validValue, isEmpty, tableStatus;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //当前激活页签主区域store和config
                currentModel = _this.getCurrentModel();
                _this.currentStore = currentModel.store;
                _this.currentConfig = currentModel.config;
                _this$currentConfig3 = _this.currentConfig, _this$currentConfig3$ = _this$currentConfig3.autoAddRow, autoAddRow = _this$currentConfig3$ === void 0 ? {} : _this$currentConfig3$, onAfterEvent = _this$currentConfig3.onAfterEvent;
                _this$currentStore7 = _this.currentStore, getTableProps = _this$currentStore7.getTableProps, setCellValue = _this$currentStore7.setCellValue;
                record = params.record, rowKey = params.rowKey, rowKeyValue = params.rowKeyValue, rowIndex = params.rowIndex, attrcode = params.attrcode, column = params.column, _params$value2 = params.value, value = _params$value2 === void 0 ? {} : _params$value2, _params$oldValue = params.oldValue, oldValue = _params$oldValue === void 0 ? {} : _params$oldValue, componentValue = params.componentValue, event = params.event, _params$triggerType = params.triggerType, triggerType = _params$triggerType === void 0 ? "onChange" : _params$triggerType, _params$isTriggerModa = params.isTriggerModal, isTriggerModal = _params$isTriggerModa === void 0 ? false : _params$isTriggerModa;
                activeCode = _this.mainStore.getStore(['tableSwitch', 'activeCode']); // 多语 获取当前的code

                if (column.itemtype === "residtxt" && TabsTable_isObject(componentValue)) {
                  for (key in componentValue) {
                    if (componentValue[key].current) {// value.value = componentValue[key];
                      // oldValue.value = store.getRowOldValue(record[rowKey], key);
                    }
                  }
                } // 新旧值


                oldValue.value = oldValue.value || _this.currentStore.getRowOldValue(record[rowKey], attrcode);

                if (triggerType === "onBlur") {
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


                  if (column.itemtype === "number" && value.value === "-") {
                    value.value = 0;

                    _this.currentStore.setCellValue({
                      rowKeyValue: rowKeyValue,
                      attrcode: attrcode,
                      value: value
                    });
                  } // 侧拉里面的状态


                  if (column.itemtype === "select" && isTriggerModal) {
                    _this.currentStore.setCellProps(rowKeyValue, attrcode, {
                      open: false
                    });
                  }

                  if (column.itemtype === "residtxt") {
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
                      loginCode = Object(api_index_["getLangCode"])(), loginIndex = ((_column$languageMeta$2 = column.languageMeta.find(function (e) {
                        return e.languageCode === loginCode;
                      })) === null || _column$languageMeta$2 === void 0 ? void 0 : _column$languageMeta$2.index) || '', loginValue = componentValue[attrcode + loginIndex] || componentValue[attrcode];
                      setCellValue({
                        rowKey: rowKey,
                        rowKeyValue: rowKeyValue,
                        rowIndex: rowIndex,
                        attrcode: attrcode,
                        value: loginValue
                      });
                    }
                  } // 多语控件都不走这里


                  if (column.itemtype !== "residtxt") {// 在onblur时缓存列数据的key 和value  用于批量更改   zhanghengh 18/6/29
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


                _this.currentStore.setCellProps(rowKeyValue, attrcode, {
                  isEdit: false
                }); // 有一些操作要放在这里处理 设置行状态等等


                next = isFunction(onAfterEvent) && onAfterEvent(TabsTable_objectSpread(TabsTable_objectSpread({}, params), {}, {
                  moduleId: _this.currentMainCode,
                  activeCode: activeCode
                }), _this.currentStore) !== false; // 多语 获取当前的code

                if (column.itemtype === "residtxt" && TabsTable_isObject(componentValue)) {
                  for (_key in componentValue) {
                    _this.currentStore.saveRowOldValue(record[rowKey], _key, componentValue[_key].value);
                  }
                } else {
                  _this.currentStore.saveRowOldValue(record[rowKey], attrcode, value.value);
                }

                if (next) {
                  _context2.next = 16;
                  break;
                }

                console.log("not next to run");
                return _context2.abrupt("return", false);

              case 16:
                /**
                 * 自动增行
                 * 增一行的条件：
                 * 1、最后一行
                 * 2、isAddRow 为true
                 * 3、当前单元格值不为空
                 */
                viewLen = _this.currentStore.getVisibleRows(false, true).length;
                isSwitch_browseDisabled = column.itemtype === "switch_browse" && column.disabled; // 开关且不可编辑

                validValue = column.itemtype === 'residtxt' ? value : value.value;
                validValue = column.itemtype === 'refer' ? componentValue : value;
                isEmpty = isEmptyValue(validValue, column.itemtype);
                tableStatus = getTableProps('status');

                if (viewLen == rowIndex + 1 && autoAddRow.enabled && !isSwitch_browseDisabled && !isEmpty && tableStatus === "edit") {
                  // 添加自动增行后的回调
                  _this.currentStore.addTableRow(undefined, autoAddRow.defaultValue, true, {
                    callback: function callback(newRow) {
                      autoAddRow.callback && autoAddRow.callback(_this.currentMainCode, newRow);
                    },
                    isAutoAddRow: true
                  });
                }

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref6.apply(this, arguments);
      };
    }();

    _this.createContent = function () {
      var _this$props5 = _this.props,
          mainCode = _this$props5.mainCode,
          expandedRowKeys = _this$props5.expandedRowKeys,
          expandedRowRender = _this$props5.expandedRowRender,
          langJson = _this$props5.langJson,
          renderItems = _this$props5.renderItems,
          getHotKeyConfig = _this$props5.getHotKeyConfig,
          _onCellHyperlinkTo = _this$props5.onCellHyperlinkTo,
          isHorizontal = _this$props5.isHorizontal,
          isGrandson = _this$props5.isGrandson; //当前激活页签主区域store和config

      var currentModel = _this.getCurrentModel();

      _this.currentStore = currentModel.store;
      _this.currentConfig = currentModel.config;

      var _this$currentConfig4 = _this.currentConfig,
          fieldid = _this$currentConfig4.fieldid,
          _this$currentConfig4$ = _this$currentConfig4.autoAddRow,
          autoAddRow = _this$currentConfig4$ === void 0 ? {} : _this$currentConfig4$,
          onChange = _this$currentConfig4.onChange,
          onBeforeEvent = _this$currentConfig4.onBeforeEvent,
          onAfterEvent = _this$currentConfig4.onAfterEvent,
          onBodyScroll = _this$currentConfig4.onBodyScroll,
          _this$currentConfig4$2 = _this$currentConfig4.lazyload,
          lazyload = _this$currentConfig4$2 === void 0 ? true : _this$currentConfig4$2,
          _onRowClick = _this$currentConfig4.onRowClick,
          _onRowDoubleClick = _this$currentConfig4.onRowDoubleClick,
          _rowClassName = _this$currentConfig4.rowClassName,
          _cellClassName = _this$currentConfig4.cellClassName,
          hideBrowseCheckbox = _this$currentConfig4.hideBrowseCheckbox,
          _onBatchChange = _this$currentConfig4.onBatchChange,
          onBatchSelected = _this$currentConfig4.onBatchSelected,
          _this$currentConfig4$3 = _this$currentConfig4.high_selectable,
          high_selectable = _this$currentConfig4$3 === void 0 ? {} : _this$currentConfig4$3,
          _this$currentConfig4$4 = _this$currentConfig4.high_filter,
          high_filter = _this$currentConfig4$4 === void 0 ? {} : _this$currentConfig4$4,
          _handleFilterCallBack = _this$currentConfig4.handleFilterCallBack,
          _handleResetCallBack = _this$currentConfig4.handleResetCallBack,
          _this$currentConfig4$5 = _this$currentConfig4.hideTableTabs,
          hideTableTabs = _this$currentConfig4$5 === void 0 ? false : _this$currentConfig4$5,
          _onCellKeyDown = _this$currentConfig4.onCellKeyDown,
          multipleRowCell = _this$currentConfig4.multipleRowCell,
          _this$currentConfig4$6 = _this$currentConfig4.cancelCustomRightMenu,
          cancelCustomRightMenu = _this$currentConfig4$6 === void 0 ? false : _this$currentConfig4$6,
          _this$currentConfig4$7 = _this$currentConfig4.showWidthAndHeightConfig,
          showWidthAndHeightConfig = _this$currentConfig4$7 === void 0 ? true : _this$currentConfig4$7,
          addBlankCol = _this$currentConfig4.addBlankCol,
          sort = _this$currentConfig4.sort,
          otherAreaHeight = _this$currentConfig4.otherAreaHeight,
          adaptionHeight = _this$currentConfig4.adaptionHeight,
          watchSeachHeight = _this$currentConfig4.watchSeachHeight,
          height = _this$currentConfig4.height,
          rightMenuClick = _this$currentConfig4.rightMenuClick,
          _this$currentConfig4$8 = _this$currentConfig4.customTabs,
          customTabs = _this$currentConfig4$8 === void 0 ? {} : _this$currentConfig4$8,
          focusIndex = _this$currentConfig4.focusIndex,
          foldCacheId = _this$currentConfig4.foldCacheId,
          _this$currentConfig4$9 = _this$currentConfig4.hideRightMenu,
          hideRightMenu = _this$currentConfig4$9 === void 0 ? false : _this$currentConfig4$9,
          othersConfig = TabsTable_objectWithoutProperties(_this$currentConfig4, ["fieldid", "autoAddRow", "onChange", "onBeforeEvent", "onAfterEvent", "onBodyScroll", "lazyload", "onRowClick", "onRowDoubleClick", "rowClassName", "cellClassName", "hideBrowseCheckbox", "onBatchChange", "onBatchSelected", "high_selectable", "high_filter", "handleFilterCallBack", "handleResetCallBack", "hideTableTabs", "onCellKeyDown", "multipleRowCell", "cancelCustomRightMenu", "showWidthAndHeightConfig", "addBlankCol", "sort", "otherAreaHeight", "adaptionHeight", "watchSeachHeight", "height", "rightMenuClick", "customTabs", "focusIndex", "foldCacheId", "hideRightMenu"]);

      var _this$currentStore8 = _this.currentStore,
          getTableProps = _this$currentStore8.getTableProps,
          _setCellValue = _this$currentStore8.setCellValue,
          getCellValue = _this$currentStore8.getCellValue,
          getCellProps = _this$currentStore8.getCellProps,
          getStore = _this$currentStore8.getStore,
          setStore = _this$currentStore8.setStore,
          getData = _this$currentStore8.getData,
          getCheckInfo = _this$currentStore8.getCheckInfo,
          _hasSelected = _this$currentStore8.hasSelected,
          getTrueRowIndex = _this$currentStore8.getTrueRowIndex,
          setActiveCell = _this$currentStore8.setActiveCell,
          getActiveCell = _this$currentStore8.getActiveCell,
          setTableProps = _this$currentStore8.setTableProps,
          _setSelectedIndex = _this$currentStore8.setSelectedIndex;

      if (hideRightMenu) {
        cancelCustomRightMenu = true;
        high_selectable.enable = false;
        showWidthAndHeightConfig = false;
      }

      var tableSwitch = _this.mainStore.getStore("tableSwitch");

      var activeCode = tableSwitch.activeCode,
          tableVisible = tableSwitch.tableVisible,
          maxVisible = tableSwitch.maxVisible,
          ListViewVisible = tableSwitch.ListViewVisible;
      var meta = getStore('meta');

      if (isUndefined(tableVisible) && meta && meta[mainCode]) {
        var _meta$mainCode$isunfo2 = meta[mainCode].isunfold,
            isunfold = _meta$mainCode$isunfo2 === void 0 ? true : _meta$mainCode$isunfo2;
        tableVisible = isunfold;
        tableSwitch.tableVisible = tableVisible;

        _this.mainStore.setStore("tableSwitch", tableSwitch, false);
      }

      var _getStore2 = getStore("props"),
          _getStore2$status = _getStore2.status,
          status = _getStore2$status === void 0 ? "browse" : _getStore2$status,
          rowKey = _getStore2.rowKey;

      _this.currentData = getData([TabsTable_ROW_STATUS["delete"], TabsTable_ROW_STATUS.filter]); // arrcolumns

      var arrColumns = _this.currentStore.getArrayMeta(activeCode);

      var colSettingParam = _this.getColSettiongParam(activeCode);

      var isTotal = _this.currentConfig.showTotal || getMetaIsTotal(_this.currentStore.getArrayMeta(activeCode, false));
      var extraAreaHeight = isNumber(otherAreaHeight) && !Number.isNaN(otherAreaHeight) ? otherAreaHeight : 0;
      var adaption = maxVisible || !!(isUndefined(height) && !maxVisible && isHorizontal && adaptionHeight);
      var tableMaxHeight = !maxVisible && _this.currentConfig.height ? _this.currentConfig.height : 300; //cardtable默认高度

      var tableHight = !maxVisible && _this.currentConfig.height ? {
        minHeight: _this.currentConfig.height
      } : {
        minHeight: '60px'
      }; //cardtable设置自定义高度的

      var showTableArea = tableVisible;

      if (status === 'browse') {
        showTableArea = showTableArea && !ListViewVisible;
      } //没有表格，不能全展开，会报错


      if (!_this.table) {
        ListViewVisible = false;
      } // focusInex


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
      var haveMeta = _this.getCurrentMeta(activeCode).length ? true : false;
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: classnames_default()("cardTable-wrapper", {
          "cardTable-close": !tableVisible
        }),
        id: "js_cardTable_" + mainCode,
        fieldid: Object(api_index_["getSysFieldid"])("".concat(fieldid || mainCode, "_table-area")),
        "data-uuid": _this.uuid
      }, !hideTableTabs && _this.createTableTabs(), isFunction(customTabs[activeCode]) ?
      /*支持自定义页签内容*/
      customTabs[activeCode](activeCode) :
      /*表格区域  hideTableTabs 隐藏是要显示表体内容  不然表格不展示了*/
      (hideTableTabs || !_this.isAllTabsHide) && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "cardTable-table-area",
        ref: function ref(dom) {
          _this.table = external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(dom);
        }
      }, showTableArea && haveMeta && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(MetaTable, TabsTable_extends({
        ref: function ref(dom) {
          _this.tableDom = external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(dom);
        },
        focusIndex: focusIndex,
        fieldid: fieldid,
        onBodyScroll: onBodyScroll,
        lazyload: lazyload,
        columns: _this.getCurrentMeta(activeCode),
        onCellHyperlinkTo: function onCellHyperlinkTo(record, attrcode, value) {
          _onCellHyperlinkTo && _onCellHyperlinkTo(record, attrcode, value, _this.currentMainCode);
        },
        scroll: {
          x: true,
          y: tableMaxHeight
        } // 表格body高度设置
        ,
        bodyStyle: TabsTable_objectSpread({}, tableHight),
        langJson: langJson // 给单元格用
        ,
        data: _this.currentData,
        name: _this.currentMainCode,
        rowKey: rowKey,
        status: status,
        isTotal: isTotal,
        renderItems: renderItems[_this.currentMainCode],
        getHotKeyConfig: getHotKeyConfig,
        sortBack: sort,
        sortChange: function sortChange(sortParam, sortData) {
          return _this.sortChange(sortParam, sortData);
        } //排序的回调
        ,
        setCellValue: function setCellValue(params) {
          var rowKey = params.rowKey,
              rowKeyValue = params.rowKeyValue,
              rowIndex = params.rowIndex,
              attrcode = params.attrcode,
              column = params.column,
              _params$value3 = params.value,
              value = _params$value3 === void 0 ? {} : _params$value3,
              triggerType = params.triggerType; // 因为timepicker的value特殊，所以特殊转换一下start，有问题在看一下

          if (column.itemtype === "timepicker") {
            if (value.value && value.value.format) {
              value.value = value.value.format("hh:mm:ss");
            }
          } // 适配多语 //这是最新适配的多语  也可以放在 setCellValue 里  TODO


          _setCellValue({
            rowKey: rowKey,
            rowKeyValue: rowKeyValue,
            rowIndex: rowIndex,
            attrcode: attrcode,
            value: value,
            callback: function callback(props, value, rowKeyValue, attrcode) {
              if (props && value.validated === false && (TabsTable_isWrong(props.value) && !TabsTable_isWrong(value.value) || TabsTable_isWrong(props.display) && !TabsTable_isWrong(props.display))) {
                delete value.validated; // activeCode
                // name

                var name = _this.currentStore.getStore("name");

                var _activeCode = _this.mainStore.getStore(['tableSwitch', 'activeCode']);

                var validateFailed = _this.mainStore.getCache(['validateFailed', name, _activeCode]);

                if (validateFailed && validateFailed[rowKeyValue]) {
                  var oldLen = Object.keys(validateFailed).length;
                  delete validateFailed[rowKeyValue][attrcode];

                  if (oldLen > 0 && Object.keys(validateFailed[rowKeyValue]).length === 0) {
                    delete validateFailed[rowKeyValue];

                    _this.mainStore.refresh();
                  }
                }
              }
            }
          }); // 这里就是onChange 和 onBlur 的集合


          var next = isFunction(onChange) && onChange(params) !== false;

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


          if (column.itemtype !== "residtxt") {
            var isMulti = column.isMultiSelectedEnabled;

            _this.currentStore.setCache("oldBatchData", {
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
            _this.currentStore.setCache("oldBatchData", {
              batchChangeIndex: rowIndex,
              batchChangeKey: column.attrcode,
              batchChangeValue: value.value,
              batchChangeDisplay: null
            });
          } // 编辑关联项  放在 onAfterEvent 中
          // 把status置为1，标识修改     状态不为1的不动 (比如用户自己set但是状态为2的)


          var rowStatus = _this.currentStore.getRowProps({
            rowKeyValue: rowKeyValue
          }, "status");

          if (rowStatus == TabsTable_ROW_STATUS.origin) {
            _this.currentStore.setRowProps({
              rowKeyValue: rowKeyValue
            }, {
              status: TabsTable_ROW_STATUS.edit
            });
          }
        },
        getCellProps: getCellProps,
        getCellValue: getCellValue,
        tableId: _this.currentMainCode,
        store: _this.currentStore,
        expandedRowKeys: expandedRowKeys || [],
        expandedRowRender: expandedRowRender //复选框
        ,
        checkInfo: getCheckInfo(),
        onAllCheckChange: _this.onAllCheckChange,
        onCheckChange: function onCheckChange(record, index) {
          return _this.onCheckChange(record, index);
        },
        hasSelected: function hasSelected(_ref7) {
          var rowKey = _ref7.rowKey,
              rowKeyValue = _ref7.rowKeyValue,
              rowIndex = _ref7.rowIndex;
          return _hasSelected(rowKeyValue);
        },
        setSelectedIndex: function setSelectedIndex(_ref8, e) {
          var record = _ref8.record,
              rowKey = _ref8.rowKey,
              rowIndex = _ref8.rowIndex;

          // 为了避免和新开发的行框选点选区域选事件冲突
          if (high_selectable && high_selectable.enable && e && (e.ctrlKey || e.shiftKey || e.metaKey)) {
            return;
          }

          var rowKeyValue = record[rowKey];
          var values = record.values || record; // 错误行禁用

          if (values && values.saga_status && values.saga_status.value === '1') {
            return;
          } //点击行即勾选复选框


          if (status !== 'edit' && (isUndefined(hideBrowseCheckbox) ? _this.currentConfig.showCheck : status === "browse" ? !hideBrowseCheckbox[activeCode] : _this.currentConfig.showCheck) && !record.disabled) {
            _this.onCheckChange(record, rowIndex, true);
          } else {
            var isSelected = _hasSelected(rowKeyValue);

            !isSelected && _setSelectedIndex([], 'clear');
            !isSelected && _setSelectedIndex([{
              rowKey: rowKey,
              rowKeyValue: rowKeyValue,
              rowIndex: rowIndex,
              pattern: 'add'
            }]);
          }
        } //业务事件
        ,
        onCellKeyDown: function onCellKeyDown(record, index, attrcode, column, e) {
          _onCellKeyDown && _onCellKeyDown(_this.currentMainCode, record, index, attrcode, column, e);
        },
        onBeforeEvent: _this.onBeforeEvent,
        onAfterEvent: _this.onAfterEvent,
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
          }

          isFunction(_onRowClick) && _onRowClick(_this.currentMainCode, record, index, e);
        },
        onRowDoubleClick: function onRowDoubleClick(record, index, e) {
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
          }

          isFunction(_onRowDoubleClick) && _onRowDoubleClick(record, index, e);
        },
        rowClassName: function rowClassName(record, current) {
          var currentCls = [];

          if (TabsTable_isArray(_rowClassName)) {
            currentCls = _rowClassName.filter(function (item) {
              if (!TabsTable_isArray(item.index)) {
                item.index = [item.index];
              }

              return item.index.includes(current);
            });
            _rowClassName = currentCls.reduce(function (total, item) {
              return total + " " + item.className;
            }, "");
          } // console.log(currentCls);


          return isFunction(_rowClassName) ? _rowClassName(record, current) : _rowClassName;
        },
        cellClassName: function cellClassName(_ref9) {
          var record = _ref9.record,
              rowIndex = _ref9.rowIndex,
              attrcode = _ref9.attrcode;
          return isFunction(_cellClassName) && _cellClassName(record, rowIndex, attrcode);
        },
        checkColConfig: {
          showCheck: isUndefined(hideBrowseCheckbox) ? _this.currentConfig.showCheck : status === "browse" ? !hideBrowseCheckbox[activeCode] : _this.currentConfig.showCheck,
          langJson: _this.props.langJson
        },
        indexColConfig: {
          showIndex: _this.currentConfig.showIndex,
          langJson: _this.props.langJson
        },
        totalConfig: {
          showTotal: _this.currentConfig.showTotal,
          noTotalRows: _this.currentConfig.noTotalRows,
          noTotalCol: _this.currentConfig.noTotalCol,
          allowTotalRows: _this.currentConfig.allowTotalRows,
          numberPd: 7
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
        excelConfig: {
          tableId: _this.currentMainCode,
          onBatchChange: _this.currentConfig.onBatchChange,
          langJson: _this.props.langJson
        },
        high_selectable: TabsTable_objectSpread({
          store: _this.currentStore,
          onSelect: function onSelect() {
            var activedCells = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var activeSpecialCells = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var hotkey = arguments.length > 2 ? arguments[2] : undefined;

            var _ref10 = arguments.length > 3 ? arguments[3] : undefined,
                current = _ref10.current,
                isBatch = _ref10.isBatch;

            // console.log(activedCells, hotkey, current);
            var pervActivedCells = _this.currentStore.getCache('activedCells') || {};

            for (var rowKeyValue in activedCells) {
              pervActivedCells[rowKeyValue] = pervActivedCells[rowKeyValue] || [];

              var _iterator3 = _createForOfIteratorHelper(activedCells[rowKeyValue]),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var attrcode = _step3.value;
                  pervActivedCells[rowKeyValue].push(attrcode);
                  isBatchSelect && _this.currentStore.setCellProps(rowKeyValue, attrcode, {
                    actived: true,
                    leftLine: false,
                    rightLine: false,
                    topLine: false,
                    bottomLine: false
                  }, false);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            } // 重新赋值


            activedCells = pervActivedCells;

            if (isBatch) {
              var rows = [];

              for (var _rowKeyValue in activedCells) {
                // TODO
                rows.push(getStore("data").query(_rowKeyValue));
              }

              if (onBatchSelected) {
                _this.onBatchSelected(rows, hotkey);
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

            hotkey === "down" && current && current.rowKeyValue && status === "edit" && _this.currentStore.setCellProps(current.rowKeyValue, current.attrcode, {
              showDrag: true
            }, false); // 缓存已选

            _this.currentStore.setCache("activedCells", activedCells);

            _this.currentStore.setCache("activedCell", current);

            if (!isBatchSelect) {
              _this.currentStore.refresh();

              return;
            } // 选中表头


            var oldActiveSpecialCells = _this.currentStore.getCache('activeSpecialCells') || [];

            if (activeSpecialCells.length > 0 || activeSpecialCells.length === 0 && oldActiveSpecialCells.length !== 0) {
              oldActiveSpecialCells.forEach(function (item) {
                // 不能用actived 会有冲突
                _this.currentStore.setColumn(activeCode, TabsTable_defineProperty({}, item.attrcode, {
                  unitActive: false
                }), false);
              });
              activeSpecialCells.forEach(function (item) {
                // 不能用actived 会有冲突
                _this.currentStore.setColumn(activeCode, TabsTable_defineProperty({}, item.attrcode, {
                  unitActive: true
                }), false);
              });

              _this.currentStore.setCache('activeSpecialCells', activeSpecialCells);
            } // 修正边框


            if (activedCells || activeSpecialCells) {
              var arrayMeta = _this.currentStore.getArrayMeta(activeCode, true),
                  arrayMetaLen = arrayMeta.length;

              var viewData = _this.currentStore.getViewData('filter');

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


            _this.currentStore.refresh();
          },
          getPrevSelector: function getPrevSelector(key) {
            var activedCells = _this.currentStore.getCache('activedCells') || {},
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
            var prevActiveCells = _this.currentStore.getCache('activedCells') || {};
            var prevActiveCellsObj = {};
            var prevActiveCellsArr = {}; // 转对象

            for (var rowKeyValue in prevActiveCells) {
              prevActiveCellsObj[rowKeyValue] = {};

              var _iterator4 = _createForOfIteratorHelper(prevActiveCells[rowKeyValue]),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var attrcode = _step4.value;
                  prevActiveCellsObj[rowKeyValue][attrcode] = true;
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            } // 清理数据


            for (var _rowKeyValue2 in deActiveCells) {
              var _iterator5 = _createForOfIteratorHelper(deActiveCells[_rowKeyValue2]),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _attrcode2 = _step5.value;

                  if (prevActiveCellsObj[_rowKeyValue2][_attrcode2]) {
                    delete prevActiveCellsObj[_rowKeyValue2][_attrcode2]; // setCellProps(rowKeyValue, attrcode, { showDrag: false }, false);

                    _this.currentStore.setCellProps(_rowKeyValue2, _attrcode2, {
                      actived: false,
                      leftLine: false,
                      rightLine: false,
                      topLine: false,
                      bottomLine: false
                    }, false);
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            } // 转数组


            for (var _rowKeyValue3 in prevActiveCellsObj) {
              prevActiveCellsArr[_rowKeyValue3] = [];

              for (var _attrcode3 in prevActiveCellsObj[_rowKeyValue3]) {
                prevActiveCellsArr[_rowKeyValue3].push(_attrcode3);
              }
            } // 重新赋值


            _this.currentStore.setCache('activedCells', prevActiveCellsArr);
          },
          onClearData: function onClearData() {
            var shouldForceUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var hotkey = arguments.length > 1 ? arguments[1] : undefined;

            _this.currentStore.setCache('activedCells', {});

            _this.currentStore.setCache('activeSpecialCells', []);

            if (!isBatchSelect) {
              return;
            } //let activedCells = this.currentStore.getCache('activedCells') || {};
            //let activedCell = this.currentStore.getCache('activedCell');


            var data = _this.currentStore.getData() || [];

            var rowKey = _this.currentStore.getTableProps("rowKey");

            data.forEach(function (row) {
              var values = row.values || row || {};
              var rowKeyValue = row[rowKey];

              for (var attrcode in values) {
                values[attrcode].showDrag && _this.currentStore.setCellProps(rowKeyValue, attrcode, {
                  showDrag: false
                }, false);
                values[attrcode].actived && _this.currentStore.setCellProps(rowKeyValue, attrcode, {
                  actived: false,
                  leftLine: false,
                  rightLine: false,
                  topLine: false,
                  bottomLine: false
                }, false);
              }
            });
            var columns = _this.currentStore.getArrayMeta(activeCode, false) || [];
            columns.forEach(function (item) {
              item.unitActive && _this.currentStore.setColumn(activeCode, TabsTable_defineProperty({}, item.attrcode, {
                unitActive: false
              }), false);
            }); // 不更新表格

            shouldForceUpdate && _this.currentStore.refresh();
          },
          arrColumns: _this.currentStore.getArrayMeta(activeCode, false),
          data: _this.currentData,
          rowKey: rowKey,
          onBatchChange: function onBatchChange() {
            var activeCell = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var activeCells = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (!isBatchSelect) {
              return;
            } // activeCell = {}, activeCells = {}
            // 开始  批改以下所有


            activeCell = TabsTable_objectSpread(TabsTable_objectSpread({}, activeCell), {}, {
              rowIndex: _this.currentStore.getTrueRowIndex({
                rowKeyValue: activeCell.rowKeyValue
              }),
              attrcode: activeCell.attrcode,
              column: _this.currentStore.getColumn(activeCode, activeCell.attrcode)
            }); // 表格数据  是否包含删除的数据 这里要斟酌下
            // let rows = store.getViewData('filter');

            var rows = _this.currentStore.getData();

            var pasteContent = [];
            var activeCellValue = getCellValue({
              rowKeyValue: activeCell.rowKeyValue,
              attrcode: activeCell.attrcode
            }) || {};

            for (var rowKeyValue in activeCells) {
              var attrcode = activeCells[rowKeyValue][0];
              var isRefer = activeCell.column.itemtype === "refer";
              attrcode && pasteContent.push(isRefer ? activeCellValue.display : activeCellValue.value);
            } // console.log('onBatchChange trigger', activeCell, activeCells);


            var param = {
              pasteContent: pasteContent,
              activeCell: activeCell,
              langJson: langJson,
              rows: rows,
              getRowOldValue: _this.currentStore.getRowOldValue,
              tableId: _this.currentMainCode
            };
            var data = excelPackageData(param);
            _onBatchChange && _onBatchChange(data);
          },
          isBatchSelect: isBatchSelect
        }, high_selectable),
        high_filter: TabsTable_objectSpread({
          alloweFilter: true,
          langJson: langJson,
          panelTitle: _this.currentStore.getStore(['meta', _this.currentMainCode, 'name']) || '',
          filterData: _this.currentStore.getViewData('filter'),
          customColData: _this.currentStore.getCache('customColData'),
          rowKey: rowKey,
          isReset: _this.currentStore.getStore('filterReset'),
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

            _this.currentStore.setStore('filterReset', false, false); // 设置列状态  设置表格筛选图标


            _this.currentStore.setColumn(_this.currentMainCode, columnStatus, false); // 设置行状态


            var data = _this.currentStore.getData() || [];
            data.forEach(function (row) {
              if (filteredRowKeyValues.includes(row[rowKey])) {
                row.filter = false;
              } else {
                row.filter = true;
              }
            }); // 处理已选等逻辑

            var checkInfo = _this.currentStore.getCheckInfo();

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

            _this.currentStore.setStore(["checkInfo"], checkInfo, false); // 更新 所有的更新放到弹窗关闭(onHide)时


            _this.currentStore.setData({
              data: data,
              shouldForceUpdate: false
            });

            _handleFilterCallBack && _handleFilterCallBack();
          },
          handleResetCallBack: function handleResetCallBack(params) {
            var filterItemList = params.filterItemList,
                columnStatus = params.columnStatus; // 更新重置状态

            _this.currentStore.setStore('filterReset', false, false); // 设置行状态


            var data = _this.currentStore.getData() || [];
            data.forEach(function (row) {
              row.filter = false;
              delete row.filterIndex;
            }); // 处理已选等逻辑

            var checkInfo = _this.currentStore.getCheckInfo();

            var viewData = _this.currentStore.getViewData();

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

            _this.currentStore.setStore(["checkInfo"], checkInfo, false); // 更新 所有的更新放到弹窗关闭(onHide)时


            _this.currentStore.setData({
              data: data,
              shouldForceUpdate: false
            }); // 列状态


            _this.currentStore.setColumn(_this.currentMainCode, columnStatus, false);

            _handleResetCallBack && _handleResetCallBack();
          },
          onHide: function onHide(params) {
            var filterItemList = params.filterItemList,
                columnStatus = params.columnStatus;

            _this.currentStore.setColumn(_this.currentMainCode, columnStatus, true); // console.log(params);

          }
        }, high_filter),
        contextMenuConfig: {
          enable: high_selectable && high_selectable.enable && isBatchSelect,
          status: status,
          contextMenuClick: _this.contextMenuClick,
          showBusinessBtn: isFunction(rightMenuClick),
          showPasteBtn: isFunction(_onBatchChange),
          langJson: _this.props.langJson
        },
        high_hotkey: {
          tableId: _this.currentMainCode,
          enable: true,
          store: _this.currentStore
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
        } //自适应高度
        ,
        adaptionHeight: adaption,
        cardType: "card",
        otherAreaHeight: maxVisible ? 0 : extraAreaHeight //孙表不加悬浮滚动条
        ,
        addAffixScroll: !isGrandson //折行回调
        ,
        foldingRowChange: function foldingRowChange(isEllipsis) {
          _this.setState({
            isEllipsis: isEllipsis
          });
        },
        foldCacheId: foldCacheId,
        bodyDisplayInRow: isUndefined(multipleRowCell) ? _this.state.isEllipsis : !multipleRowCell //滚动条悬浮
        ,
        autoAffixScroll: true //——————————操作列————————————
        ,
        colsSettingParam: colSettingParam,
        cancelCustomRightMenu: cancelCustomRightMenu,
        showWidthAndHeightConfig: showWidthAndHeightConfig,
        updateColumnHandle: _this.updateColumnAfterSetting,
        key: _this.currentStore.getStore('key') //——————————操作列end————————————
        //空白列
        ,
        addBlankCol: addBlankCol
      }, othersConfig)), status === "browse" && tableVisible && ListViewVisible ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(AllRowsExpand_AllRowsExpand, {
        tableDom: _this.table,
        maxVisible: maxVisible,
        adaptionHeight: adaption,
        otherAreaHeight: extraAreaHeight,
        mainCode: _this.currentMainCode,
        store: _this.currentStore,
        meta: getStore("meta"),
        data: _this.currentData,
        config: _this.currentConfig,
        langJson: langJson,
        setCellValue: _setCellValue,
        getCellValue: getCellValue
      }) : null));
    };

    _this.state = {
      isEllipsis: true
    }; //当前激活页签

    _this.currentMainCode = _this.props.mainCode; //页签主区域Store

    _this.mainStore = _this.props.tabsStore[_this.props.mainCode]; // 当前激活页签状态存在主区域store

    var oldSwitch = _this.mainStore.getStore("tableSwitch");

    var _initSwitch = TabsTable_objectSpread(TabsTable_objectSpread({}, oldSwitch), {}, {
      //activeCode: this.props.mainCode,
      activeCode: oldSwitch.activeCode ? oldSwitch.activeCode : _this.props.mainCode
    });

    _this.mainStore.setStore("tableSwitch", _initSwitch, false); //当前单来源表格Store


    _this.currentStore = _this.mainStore;

    _this.currentStore.setStore("activeTableCode", _this.currentMainCode, false);

    _this.currentConfig = _this.props.tabsConfig[_this.currentMainCode] || {}; // 孙表使用的是TabsTable

    if (_this.props.isGrandTable) {
      var _iterator6 = _createForOfIteratorHelper(_this.props.metaTabs),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var source = _step6.value;

          // if (!props.tabsStore[source].getRef().length) {
          _props.tabsStore[source].setRef(TabsTable_assertThisInitialized(_this)); // }

        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    } //是否所有页签都隐藏


    _this.isAllTabsHide = true;
    _this.currentData = [];
    _this.uuid = uuidv4();
    (typeof window === "undefined" ? "undefined" : TabsTable_typeof(window)) === 'object' && (window[_this.uuid] = _this.props.tabsStore);
    return _this;
  }

  TabsTable_createClass(TabsTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var grandComponentDidMount = this.currentConfig.grandComponentDidMount;
      isFunction(grandComponentDidMount) && grandComponentDidMount();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.isGrandTable) {
        var _iterator7 = _createForOfIteratorHelper(this.props.metaTabs),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var source = _step7.value;
            this.props.tabsStore[source].removeRef(this);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps, nextState) {
      var cardTableComponentUpdate = this.props.cardTableComponentUpdate;
      var getData = this.currentStore.getData;
      var data = getData([TabsTable_ROW_STATUS["delete"], TabsTable_ROW_STATUS.filter]);
      cardTableComponentUpdate && cardTableComponentUpdate(this.props, data);
    } //页签切换

  }, {
    key: "onBatchSelected",
    // 框选等操作
    value: function onBatchSelected() {
      var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var hotkey = arguments.length > 1 ? arguments[1] : undefined;
      var tabsConfig = this.props.tabsConfig;

      var _ref11 = tabsConfig[this.currentMainCode] || {},
          onBatchSelected = _ref11.onBatchSelected;

      var _this$currentStore9 = this.currentStore,
          getTableProps = _this$currentStore9.getTableProps,
          setRowsSelected = _this$currentStore9.setRowsSelected,
          getRowProps = _this$currentStore9.getRowProps,
          getTrueRowIndex = _this$currentStore9.getTrueRowIndex,
          setTableProps = _this$currentStore9.setTableProps;
      var rowKey = getTableProps("rowKey"); // 清空所有

      setRowsSelected({}, false, false);
      rows.forEach(function (row) {
        var rowKeyValue = row[rowKey];
        var selected = !getRowProps({
          rowKeyValue: rowKeyValue
        }, "selected");
        var values = row.values || row,
            isSagaStatus = values && values.saga_status && values.saga_status.value === '1'; // 错误行禁用

        if (isSagaStatus) {
          return;
        }

        setRowsSelected({
          rowKeyValues: rowKeyValue
        }, selected, false); // setTableProps("currentIndex", getTrueRowIndex({ rowKeyValue }), false);
      }); // 更新

      this.forceUpdate && this.forceUpdate();
      console.log(rows);
      onBatchSelected && onBatchSelected(this.currentMainCode, rows);
    }
  }, {
    key: "getValidateFailed",
    value: function getValidateFailed(mainCode, code) {
      var validateFailed = this.currentStore.getCache(['validateFailed', mainCode, code]); // console.log(this.currentStore, validateFailed);

      return validateFailed && Object.keys(validateFailed).length > 0;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$mainStore$getSt3 = this.mainStore.getStore("tableSwitch"),
          maxVisible = _this$mainStore$getSt3.maxVisible;

      var isGrandson = this.props.isGrandson;

      if (maxVisible) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["MaxBox"], {
          zIndex: isGrandson ? 240 : 210,
          content: this.createContent()
        });
      } else {
        return this.createContent();
      }
    }
  }]);

  return TabsTable;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);


// EXTERNAL MODULE: external "@platform/form/index"
var form_index_ = __webpack_require__(24);
var form_index_default = /*#__PURE__*/__webpack_require__.n(form_index_);

// CONCATENATED MODULE: ./src/platform/components/Table/appTable/CardTable/components/SideBox/MultiTabsTable.js
function MultiTabsTable_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MultiTabsTable_typeof = function _typeof(obj) { return typeof obj; }; } else { MultiTabsTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MultiTabsTable_typeof(obj); }

function MultiTabsTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MultiTabsTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MultiTabsTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MultiTabsTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) MultiTabsTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) MultiTabsTable_defineProperties(Constructor, staticProps); return Constructor; }

function MultiTabsTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MultiTabsTable_setPrototypeOf(subClass, superClass); }

function MultiTabsTable_setPrototypeOf(o, p) { MultiTabsTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MultiTabsTable_setPrototypeOf(o, p); }

function MultiTabsTable_createSuper(Derived) { var hasNativeReflectConstruct = MultiTabsTable_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = MultiTabsTable_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = MultiTabsTable_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MultiTabsTable_possibleConstructorReturn(this, result); }; }

function MultiTabsTable_possibleConstructorReturn(self, call) { if (call && (MultiTabsTable_typeof(call) === "object" || typeof call === "function")) { return call; } return MultiTabsTable_assertThisInitialized(self); }

function MultiTabsTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MultiTabsTable_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function MultiTabsTable_getPrototypeOf(o) { MultiTabsTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MultiTabsTable_getPrototypeOf(o); }

/*
 * @Descripttion: 
 * @version: 
 * @Author: bbq
 * @Date: 2020-07-31 18:00:00
 * @LastEditors: bbq
 * @LastEditTime: 2020-10-15 13:52:04
 */




var AREACHANGECOMPLETE = 'areaChangeComplete';

var MultiTabsTable_MultiTabsTable = /*#__PURE__*/function (_Component) {
  MultiTabsTable_inherits(MultiTabsTable, _Component);

  var _super = MultiTabsTable_createSuper(MultiTabsTable);

  function MultiTabsTable(props) {
    var _this;

    MultiTabsTable_classCallCheck(this, MultiTabsTable);

    _this = _super.call(this, props); //模板

    _this.handlePubSub = function () {
      _this.calcGrandTableHeight();
    };

    _this.calcGrandTableHeight = function () {
      if (_this.adaptionHeight && _this.props.isCalcHeight) {
        var _ReactDOM$findDOMNode;

        //currentTop计算不准确
        var currentTop = (_ReactDOM$findDOMNode = external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(_this.grandTable)) === null || _ReactDOM$findDOMNode === void 0 ? void 0 : _ReactDOM$findDOMNode.getBoundingClientRect().top;
        var grandTableHeight = document.body.offsetHeight - currentTop - 80 - 8;
        _this.isCalcHeight = true;

        _this.setState({
          grandTableHeight: grandTableHeight
        });
      }
    };

    _this.getMultiMeta = function () {
      var _this$props = _this.props,
          meta = _this$props.meta,
          grandTableMainId = _this$props.grandTableMainId; //孙表横向多页签的主表区域编码

      var containerrelation = meta.containerrelation;

      if (grandTableMainId && containerrelation && Array.isArray(containerrelation[grandTableMainId])) {
        _this.multiCodeArr = containerrelation[grandTableMainId];
      }
    };

    _this.multiCodeArr = null;
    _this.adaptionHeight = false;
    _this.isCalcHeight = false;
    _this.grandTable = null;
    _this.pubsub_token = null;
    _this.state = {
      grandTableHeight: ''
    };
    return _this;
  }

  MultiTabsTable_createClass(MultiTabsTable, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.getMultiMeta();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          grandTableMainId = _this$props2.grandTableMainId,
          grandGroup = _this$props2.grandGroup;

      if (grandTableMainId && Array.isArray(this.multiCodeArr) && this.multiCodeArr.length === 1) {
        this.adaptionHeight = true;
      } else if (Array.isArray(grandGroup) && grandGroup.length === 1) {
        this.adaptionHeight = true;
      }

      this.pubsub_token = api_index_["PubSub"].subscribe(AREACHANGECOMPLETE, this.handlePubSub);
      window.addEventListener("resize", this.calcGrandTableHeight);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.isCalcHeight && this.grandTable) {
        this.isCalcHeight = true;
        this.calcGrandTableHeight();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      api_index_["PubSub"].unsubscribe(this.pubsub_token);
      window.removeEventListener("resize", this.calcGrandTableHeight);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          grandTableStore = _this$props3.grandTableStore,
          grandTableMainId = _this$props3.grandTableMainId,
          grandGroup = _this$props3.grandGroup,
          grandTableConfig = _this$props3.grandTableConfig,
          renderItems = _this$props3.renderItems,
          getHotKeyConfig = _this$props3.getHotKeyConfig,
          cardTableComponentUpdate = _this$props3.cardTableComponentUpdate,
          langJson = _this$props3.langJson;
      var grandTableHeight = this.state.grandTableHeight;

      if (this.adaptionHeight && grandTableHeight) {
        for (var grandId in grandTableConfig) {
          if (!grandTableConfig[grandId]) grandTableConfig[grandId] = {};
          grandTableConfig[grandId].height = grandTableHeight;
        }
      }

      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "grandTable-wrapper",
        ref: function ref(dom) {
          return _this2.grandTable = dom;
        }
      }, grandTableMainId && Array.isArray(this.multiCodeArr) ? this.multiCodeArr.map(function (item, index) {
        var mainCode = item[0];
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(TabsTable_TabsTable, {
          key: index //单来源页签属性
          ,
          mainCode: mainCode,
          renderItems: renderItems,
          getHotKeyConfig: getHotKeyConfig,
          cardTableComponentUpdate: cardTableComponentUpdate //多页签store及多页签config
          ,
          tabsStore: grandTableStore,
          tabsConfig: grandTableConfig,
          metaTabs: item,
          isGrandTable: true,
          langJson: langJson //孙表标志
          ,
          isGrandson: true
        });
      }) : grandGroup.map(function (item, index) {
        var moduleId = item.grandTableId;
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(TabsTable_TabsTable, {
          key: index //单来源页签属性
          ,
          mainCode: moduleId,
          renderItems: renderItems,
          getHotKeyConfig: getHotKeyConfig,
          cardTableComponentUpdate: cardTableComponentUpdate //多页签store及多页签config
          ,
          tabsStore: MultiTabsTable_defineProperty({}, moduleId, grandTableStore[moduleId]),
          tabsConfig: MultiTabsTable_defineProperty({}, moduleId, grandTableConfig[moduleId]),
          metaTabs: [moduleId],
          isGrandTable: true,
          langJson: langJson //孙表标志
          ,
          isGrandson: true
        });
      }));
    }
  }]);

  return MultiTabsTable;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);


// EXTERNAL MODULE: ./src/platform/components/Table/appTable/CardTable/components/SideBox/index.less
var SideBox = __webpack_require__(1888);

// CONCATENATED MODULE: ./src/platform/components/Table/appTable/CardTable/components/SideBox/index.js
function SideBox_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SideBox_typeof = function _typeof(obj) { return typeof obj; }; } else { SideBox_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SideBox_typeof(obj); }

function SideBox_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function SideBox_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { SideBox_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { SideBox_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function SideBox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SideBox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SideBox_ownKeys(Object(source), true).forEach(function (key) { SideBox_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SideBox_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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








var SideBox_isFunction = table_core_index_["utils"].isFunction,
    SideBox_isArray = table_core_index_["utils"].isArray,
    SideBox_isObject = table_core_index_["utils"].isObject,
    isBoolean = table_core_index_["utils"].isBoolean;
var SideBox_ROW_STATUS = table_core_index_["CONFIG"].ROW_STATUS;


var SideBox_TableSideBox = /*#__PURE__*/function (_Component) {
  SideBox_inherits(TableSideBox, _Component);

  var _super = SideBox_createSuper(TableSideBox);

  function TableSideBox(props) {
    var _this;

    SideBox_classCallCheck(this, TableSideBox);

    _this = _super.call(this, props);

    _this.calcSideBoxWidth = function () {
      _this.setState({
        clientWidth: document.body.clientWidth
      });
    };

    _this.setFormMeta = function () {
      var _this$props = _this.props,
          status = _this$props.status,
          mainCode = _this$props.mainCode,
          store = _this$props.store;
      var meta = store.getStore('meta');
      var destEditAreaCode = meta && meta.gridrelation && meta.gridrelation[mainCode].destEditAreaCode;
      var formMainCode = '';
      var formMeta = {
        formrelation: {}
      };

      if (SideBox_isArray(destEditAreaCode)) {
        formMainCode = destEditAreaCode[0];
        formMeta.formrelation[formMainCode] = [];
        destEditAreaCode.forEach(function (item, index) {
          formMeta[item] = SideBox_objectSpread(SideBox_objectSpread({}, meta[item]), {}, {
            items: []
          });

          if (index !== 0) {
            formMeta.formrelation[formMainCode].push(item);
          }

          var newItems = [];
          meta[item].items.forEach(function (element) {
            var newItem = Object.assign({}, element);

            if (SideBox_isFunction(element.render)) {
              var oldRender = element.render;

              if (!newItem.renderStatus) {
                newItem.renderStatus = 'edit';
              }

              ;
              var isEditRender = newItem.renderStatus === 'edit' && status === 'edit';
              var isBrowseRender = newItem.renderStatus === 'browse' && status === 'browse'; // 判断显示render状态

              if (isEditRender || isBrowseRender) {
                newItem.render = function (attrcode, values) {
                  return oldRender(values[attrcode], {
                    rowid: _this.record.rowid,
                    status: _this.record.status,
                    values: values
                  }, _this.index);
                };
              } else {
                newItem.render = null;
              }
            }

            newItems.push(newItem);
          });
          formMeta[item].items = newItems;
        });
      }

      _this.formMeta = formMeta;
      _this.formMainCode = formMainCode;

      if (_this.formMainCode) {
        _this.formStore.setMeta(_this.formMeta, _this.formMainCode);
      }
    };

    _this.handleAdd = function () {
      var _this$props2 = _this.props,
          config = _this$props2.config,
          mainCode = _this$props2.mainCode,
          store = _this$props2.store;
      var modelAddRow = config.modelAddRow,
          modelAddDefaultValue = config.modelAddDefaultValue; //增行之前同步孙表数据

      _this.saveGrandTableData(); // 侧拉增行默认值


      var defaultValue = SideBox_isFunction(modelAddDefaultValue) && modelAddDefaultValue();
      store.addTableRow({
        defaultValue: defaultValue
      });
      var tableRows = store.getViewData();
      var length = tableRows.length;
      _this.index = length - 1;
      _this.record = tableRows[_this.index] || {}; //defaultValue

      _this.updateSideBox(false, length); // 侧拉增行后的回掉  index 2005给业务组的是上一行的index


      SideBox_isFunction(modelAddRow) && modelAddRow(mainCode, _this.index - 1, {
        afterAddRowid: _this.record.rowid
      });
    };

    _this.handleDel = function () {
      var _this$props3 = _this.props,
          config = _this$props3.config,
          mainCode = _this$props3.mainCode,
          store = _this$props3.store;
      var modelDelRow = config.modelDelRow,
          grandGroup = config.grandGroup;
      var tableRows = store.getViewData();
      var length = tableRows.length; // 兼容筛选时的侧拉
      // tableScope.filterAllData &&
      //     (currentModelIndex = rows.findIndex(
      //         (row) =>
      //             row.rowid === tableScope.filterAllData[modelIndex].rowid
      //     ));
      // 删除前，当前位置的行的rowid

      var beforeDelRowid = tableRows[_this.index].rowid;

      if (length === 1) {
        //若只有一行，则关闭侧拉
        store.closeSideBox();
      } else {
        //若为最后一行，删除后侧拉显示上一行; 否则显示下一行
        if (_this.index === length - 1) {
          _this.index = length - 2;
        } else {//this.index ++;
        }

        _this.record = tableRows[_this.index] || {}; //更新侧拉数据

        _this.updateSideBox(false, length - 1);
      } //删除表格行


      store.deleteTableRows({
        rowKeyValues: beforeDelRowid
      }); //删除孙表数据
      // if (isArray(grandGroup)) {
      //     this.deleteGrandTableByRowid(beforeDelRowid);
      // }

      SideBox_isFunction(modelDelRow) && modelDelRow(mainCode, {
        beforeDelRowid: beforeDelRowid
      });
    };

    _this.pageButtonClick = function (name) {
      var _this$props4 = _this.props,
          store = _this$props4.store,
          config = _this$props4.config;
      var tableData = store.getViewData();
      var sideRowChange = config.sideRowChange;
      var length = tableData.length;

      switch (name) {
        case 'first':
          if (_this.index !== 0) {
            _this.index = 0;
          }

          break;

        case 'prev':
          if (_this.index !== 0) {
            _this.index = _this.index - 1;
          }

          break;

        case 'next':
          if (_this.index !== length - 1) {
            _this.index = _this.index + 1;
          }

          break;

        case 'end':
          if (_this.index !== length - 1) {
            _this.index = length - 1;
          }

          break;
      } //数据同步到孙表数据结构中


      _this.saveGrandTableData();

      _this.record = tableData[_this.index] || {};

      _this.updateSideBox(false, length);

      SideBox_isFunction(sideRowChange) && sideRowChange(_this.record);
    };

    _this.saveGrandTableData = function () {
      var _this$props5 = _this.props,
          config = _this$props5.config,
          store = _this$props5.store;
      var grandGroup = config.grandGroup;
      var rowid = _this.record.rowid;
      var grandTableData = store.getStore('grandTable');
      var grandTableStore = store.getStore('grandTableStore');
      var grandValidateFailed = store.getCache('grandValidateFailed') || {};
      SideBox_isArray(grandGroup) && grandGroup.forEach(function (item) {
        var currentStore = grandTableStore[item.grandTableId];
        var grandData = currentStore.getData();
        if (!grandTableData[rowid]) grandTableData[rowid] = {};
        grandTableData[rowid][item.grandTableId] = {
          rows: grandData
        }; // 同步信息

        var validateFailed = grandValidateFailed[rowid] || {};
        grandValidateFailed[rowid] = JSON.parse(JSON.stringify(currentStore.getCache('validateFailed') || {}));
      }); // console.log(grandValidateFailed);

      store.setCache('grandValidateFailed', grandValidateFailed);
      store.setStore('grandTable', grandTableData, false);
    };

    _this.deleteGrandTableByRowid = function (rowid) {
      var _this$props6 = _this.props,
          config = _this$props6.config,
          store = _this$props6.store;
      var grandGroup = config.grandGroup;
      var grandTableData = store.getStore('grandTable');
      SideBox_isArray(grandGroup) && grandGroup.forEach(function (item) {
        delete grandTableData[rowid][item.grandTableId];

        if (Object.keys(grandTableData[rowid]).length === 0) {
          delete grandTableData[rowid];
        }
      });
      store.setStore('grandTable', grandTableData, false);
    };

    _this.updateSideBox = function (initMeta, length, notUpdateTable) {
      var _this$props7 = _this.props,
          status = _this$props7.status,
          config = _this$props7.config,
          store = _this$props7.store;
      var grandGroup = config.grandGroup;
      var buttonDisabled = _this.state.buttonDisabled;

      if (length === 1) {
        buttonDisabled = new Array(true, true, true, true);
      } else if (_this.index === length - 1) {
        buttonDisabled = new Array(false, false, true, true);
      } else if (_this.index === 0) {
        buttonDisabled = new Array(true, true, false, false);
      } else {
        buttonDisabled = new Array(false, false, false, false);
      } //更新标题


      _this.setState({
        index: _this.index,
        buttonDisabled: buttonDisabled
      });

      store.setTableProps('currentIndex', _this.index, false);
      store.setStore(['tableSideBox', 'index'], _this.index, false);
      store.setStore(['tableSideBox', 'record'], _this.record, false); //设置表单数据
      //formStore.reset();

      var formValue = _this.record.values; // disabled等属性的重置

      var formMetaItemsObj = {};
      (_this.formStore.getMetaItems(_this.formMainCode) || []).forEach(function (item) {
        item && _this.formStore.setItemAttribute(item.attrcode, 'disabled', !!item.disabled, false);
      }); // 先清空所有的值  再重新设置 避免切换页签时 值出现缓存情况 --bbq

      _this.formStore.emptyAllFormValue();

      _this.formStore.setAllFormValue(formValue); // 处理一下disabled等属性


      for (var key in formValue) {
        var formItem = formValue[key];
        SideBox_isObject(formItem) && isBoolean(formItem.disabled) && _this.formStore.setItemAttribute(key, 'disabled', formItem.disabled, false);
      }

      _this.formStore.setStatus(status); //设置孙表数据


      var rowid = _this.record.rowid;
      var grandTableData = store.getStore('grandTable');
      var grandTableStore = store.getStore('grandTableStore');
      var grandValidateFailed = store.getCache('grandValidateFailed') || {}; // console.log(grandValidateFailed, 'grandValidateFailedgrandValidateFailedgrandValidateFailed');

      SideBox_isArray(grandGroup) && grandGroup.forEach(function (item) {
        var grandStore = grandTableStore[item.grandTableId];

        if (!notUpdateTable) {
          if (grandTableData[rowid] && grandTableData[rowid][item.grandTableId]) {
            var grandData = grandTableData[rowid][item.grandTableId];
            if (grandData && grandData.rows) grandStore.setData({
              data: grandData.rows
            });
          } else {
            //不存在该孙表数据，为新增行
            grandStore.setData({
              data: []
            });
            if (!grandTableData[rowid]) grandTableData[rowid] = {};
            grandTableData[rowid][item.grandTableId] = {
              rows: []
            };
          }
        } // 记录校验状态


        var validateFailed = grandValidateFailed[rowid];

        if (grandStore && validateFailed) {
          // for (let tableId in validateFailed) {
          var table = validateFailed[item.grandTableId]; // let isRefresh = false;

          if (table) {
            // 缓存状态
            grandStore.setCache('validateFailed', validateFailed);

            for (var tabId in table) {
              var rows = table[tabId];

              if (rows) {
                for (var rowKeyValue in rows) {
                  if (rowKeyValue) {
                    var row = rows[rowKeyValue];

                    if (row) {
                      for (var attrcode in row) {
                        // debugger;
                        grandStore.setCellProps(rowKeyValue, attrcode, {
                          validated: false
                        }, false);
                      }
                    } // isRefresh = true;

                  }
                }
              }
            } // isRefresh && store.refresh();

          } // }

        }

        initMeta && grandStore.setStore('meta', store.getStore('meta'));
      });
    };

    _this.getButtons = function () {
      var _this$props8 = _this.props,
          store = _this$props8.store,
          index = _this$props8.index,
          data = _this$props8.data,
          _this$props8$config = _this$props8.config,
          config = _this$props8$config === void 0 ? {} : _this$props8$config,
          mainCode = _this$props8.mainCode,
          status = _this$props8.status;
      var modelFooter = config.modelFooter,
          hideModelSave = config.hideModelSave,
          modelSave = config.modelSave,
          hideAdd = config.hideAdd,
          modelAddRowBefore = config.modelAddRowBefore,
          hideDel = config.hideDel,
          modelDelRowBefore = config.modelDelRowBefore;
      var json = _this.state.json;
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "card-table-modal-header-btns"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "card-table-modal-header-customer"
      }, SideBox_isFunction(modelFooter) && modelFooter(mainCode, _this.index, store, _this.record)), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Button"], {
        fieldid: "tableModel-save",
        style: {
          display: hideModelSave || status === 'browse' ? 'none' : 'inline-block'
        },
        className: "btn-save btn-card-table-model",
        onClick: function onClick() {
          SideBox_isFunction(modelSave) && modelSave(_this.index);
        }
      }, json['cardTable003']), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Button"], {
        fieldid: "tableModel-add",
        className: "btn-add btn-card-table-model",
        style: {
          display: hideAdd || status === 'browse' ? 'none' : 'inline-block'
        },
        onClick: /*#__PURE__*/SideBox_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var isContinue;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!SideBox_isFunction(modelAddRowBefore)) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 3;
                  return modelAddRowBefore(mainCode, _this.index);

                case 3:
                  isContinue = _context.sent;

                  if (isContinue) {
                    _this.handleAdd();
                  }

                  _context.next = 8;
                  break;

                case 7:
                  _this.handleAdd();

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))
      }, json['cardTable004']), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Button"], {
        fieldid: "tableModel-del",
        className: "btn-del btn-card-table-model",
        style: {
          display: hideDel || status === 'browse' ? 'none' : 'inline-block'
        },
        onClick: /*#__PURE__*/SideBox_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var isContinue;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!SideBox_isFunction(modelDelRowBefore)) {
                    _context2.next = 7;
                    break;
                  }

                  _context2.next = 3;
                  return modelDelRowBefore(mainCode, _this.index, _this.record);

                case 3:
                  isContinue = _context2.sent;

                  if (isContinue) {
                    _this.handleDel();
                  }

                  _context2.next = 8;
                  break;

                case 7:
                  _this.handleDel();

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))
      }, json['cardTable005']));
    };

    _this.sideBoxClose = function () {
      var _this$props9 = _this.props,
          onClose = _this$props9.onClose,
          config = _this$props9.config,
          store = _this$props9.store;
      var modelClose = config.modelClose;

      _this.saveGrandTableData(); // store.setTableProps('currentIndex', this.index, false);


      store.setStore(['tableSideBox', 'index'], -1, false);
      store.setStore(['tableSideBox', 'record'], null, false);
      SideBox_isFunction(onClose) && onClose();
      SideBox_isFunction(modelClose) && modelClose();
    };

    _this.formAfterEvent = function (prams) {
      var areaId = prams.areaId,
          attrcode = prams.attrcode,
          curMetaItem = prams.curMetaItem,
          value = prams.value,
          oldValue = prams.oldValue,
          allValue = prams.allValue,
          singleFormCode = prams.singleFormCode,
          componentValue = prams.componentValue;
      var _this$props10 = _this.props,
          config = _this$props10.config,
          mainCode = _this$props10.mainCode,
          store = _this$props10.store;
      var onAfterEvent = config.onAfterEvent;
      _this.record.values = allValue;

      if (_this.record.status === SideBox_ROW_STATUS.origin) {
        _this.record.status = SideBox_ROW_STATUS.edit;
      } // 根据rowid 更新表格数据


      var rows = store.setRows({
        rows: [_this.record]
      });
      _this.record = _this.record || (rows ? rows[0] : {});
      SideBox_isFunction(onAfterEvent) && onAfterEvent({
        moduleId: mainCode,
        record: _this.record,
        rowKey: 'rowid',
        rowKeyValue: _this.record.rowid,
        rowIndex: _this.index,
        attrcode: attrcode,
        value: value,
        oldValue: oldValue,
        componentValue: componentValue,
        isTriggerModal: true,
        //event,
        column: curMetaItem //triggerType

      }, store);
    };

    _this.formBeforeEvent = /*#__PURE__*/function () {
      var _ref3 = SideBox_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(moduleId, attrcode, value, values, column) {
        var _this$props11, config, mainCode, onBeforeEvent;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this$props11 = _this.props, config = _this$props11.config, mainCode = _this$props11.mainCode;
                onBeforeEvent = config.onBeforeEvent;

                if (!SideBox_isFunction(onBeforeEvent)) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 5;
                return onBeforeEvent({
                  moduleId: mainCode,
                  record: _this.record,
                  rowKey: 'rowid',
                  rowKeyValue: _this.record.rowid,
                  rowIndex: _this.index,
                  attrcode: attrcode,
                  value: value,
                  isTriggerModal: true,
                  //event,
                  column: column //triggerType

                });

              case 5:
                _context3.t0 = _context3.sent;
                return _context3.abrupt("return", _context3.t0 !== false);

              case 9:
                return _context3.abrupt("return", true);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x, _x2, _x3, _x4, _x5) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.state = {
      json: {},
      index: _this.props.index,
      buttonDisabled: [],
      clientWidth: 0
    };
    _this.formStore = form_index_default.a.useForm(); //当前index

    _this.index = _this.props.index; //当前

    _this.record = _this.props.data;
    _this.grandTableConfig = {};

    if (_this.props.config && SideBox_isArray(_this.props.config.grandGroup)) {
      _this.props.config.grandGroup.forEach(function (item) {
        _this.grandTableConfig[item.grandTableId] = item.grandTableConfig;
      });
    }

    _this.props.store.setTableProps('currentIndex', _this.index, false);

    _this.props.store.setStore(['tableSideBox', 'index'], _this.index, false);

    _this.props.store.setStore(['tableSideBox', 'record'], _this.record, false);

    return _this;
  }

  SideBox_createClass(TableSideBox, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this2 = this;

      //加载多语
      var callback = function callback(json) {
        _this2.setState({
          json: json
        });
      };

      Object(api_index_["getMultiLang"])({
        moduleId: 'table_cardTable',
        callback: callback
      });
      this.setState({
        clientWidth: document.body.clientWidth
      });
      var tableData = this.props.store.getViewData();
      var length = tableData.length;
      this.setFormMeta();
      this.updateSideBox(true, length);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.calcSideBoxWidth);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var onClose = nextProps.onClose,
          store = nextProps.store,
          index = nextProps.index;
      var tableRows = store.getViewData(); // 删除到最后一行时避免报错

      if (!tableRows[index]) {
        console.warn('not find data, please check!');
        this.record = {};
        store.setTableProps('currentIndex', -1, false);
        store.setStore(['tableSideBox', 'index'], -1, false);
        store.setStore(['tableSideBox', 'record'], null, false);
        SideBox_isFunction(onClose) && onClose();
        return;
      } else {
        this.index = index;
        this.record = tableRows[index];
      } //如何准备判读是否需要更新？----待优化
      //--- 1.业务组setMeta 会更新meta; 
      //----2.业务调用表格API 会更新record
      //----3.业务修改孙表 会更新孙表数据
      // 更新下模板 有个问题是 给侧拉设置setQueryCondition
      // 业务组依靠修改引用 修改了meta
      // this.formStore.setMeta(this.formMeta, this.formMainCode);
      //将外部更新的数据 同步到孙表中
      //this.saveGrandTableData();
      //将外部更新数据 同步到表格表格中


      this.setFormMeta();
      this.updateSideBox(false, tableRows.length, true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 清理内存
      this.formStore = null;
      window.removeEventListener("resize", this.calcSideBoxWidth);
    } //设置表单模板

  }, {
    key: "render",
    value: function render() {
      var _this$props12 = this.props,
          show = _this$props12.show,
          config = _this$props12.config,
          store = _this$props12.store,
          mainCode = _this$props12.mainCode,
          renderItems = _this$props12.renderItems,
          getHotKeyConfig = _this$props12.getHotKeyConfig,
          cardTableComponentUpdate = _this$props12.cardTableComponentUpdate,
          _this$props12$langJso = _this$props12.langJson,
          langJson = _this$props12$langJso === void 0 ? {} : _this$props12$langJso;
      var sideTitle = config.sideTitle,
          grandGroup = config.grandGroup,
          _config$grandTableMai = config.grandTableMainId,
          grandTableMainId = _config$grandTableMai === void 0 ? '' : _config$grandTableMai,
          modalCustomerArea = config.modalCustomerArea;
      var _this$state = this.state,
          json = _this$state.json,
          clientWidth = _this$state.clientWidth;
      var title = SideBox_isFunction(sideTitle) ? sideTitle(this.state.index) : "".concat(json['cardTable006'], " ").concat(this.state.index + 1);
      var grandTableStore = store.getStore('grandTableStore');
      console.log('clientWidth:', clientWidth);
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Sidebox"], {
        className: 'card-table-sidebox',
        mask: true,
        show: show,
        title: title,
        showButton: true,
        buttonDisabled: this.state.buttonDisabled,
        onClose: this.sideBoxClose,
        maskClose: this.sideBoxClose,
        buttonClick: this.pageButtonClick //propContainer={}
        ,
        width: clientWidth > 1100 ? '1100px' : clientWidth + 'px',
        getHeaderBtns: this.getButtons
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        fieldid: Object(api_index_["getSysFieldid"])("".concat(mainCode, "_form-area"))
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(form_index_default.a //meta={this.formMeta}
      , {
        name: this.formMainCode //status={status}
        ,
        config: {
          onAfterEvent: this.formAfterEvent,
          onBeforeEvent: this.formBeforeEvent
        },
        store: this.formStore //init={}

      })), SideBox_isArray(grandGroup) && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(MultiTabsTable_MultiTabsTable, {
        grandGroup: grandGroup,
        meta: store.getStore('meta') // 传递孙表的多语
        ,
        langJson: langJson,
        grandTableMainId: grandTableMainId,
        grandTableStore: grandTableStore,
        grandTableConfig: this.grandTableConfig,
        renderItems: renderItems,
        getHotKeyConfig: getHotKeyConfig,
        cardTableComponentUpdate: cardTableComponentUpdate,
        isCalcHeight: SideBox_isFunction(modalCustomerArea) ? false : true
      }), SideBox_isFunction(modalCustomerArea) && modalCustomerArea());
    }
  }]);

  return TableSideBox;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);


// CONCATENATED MODULE: ./src/platform/components/Table/appTable/CardTable/components/SingleCardTable/index.js
function SingleCardTable_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SingleCardTable_typeof = function _typeof(obj) { return typeof obj; }; } else { SingleCardTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SingleCardTable_typeof(obj); }

function SingleCardTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SingleCardTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SingleCardTable_ownKeys(Object(source), true).forEach(function (key) { SingleCardTable_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SingleCardTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SingleCardTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SingleCardTable_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function SingleCardTable_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { SingleCardTable_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { SingleCardTable_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function SingleCardTable_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = SingleCardTable_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function SingleCardTable_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SingleCardTable_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SingleCardTable_arrayLikeToArray(o, minLen); }

function SingleCardTable_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SingleCardTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SingleCardTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SingleCardTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) SingleCardTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) SingleCardTable_defineProperties(Constructor, staticProps); return Constructor; }

function SingleCardTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SingleCardTable_setPrototypeOf(subClass, superClass); }

function SingleCardTable_setPrototypeOf(o, p) { SingleCardTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SingleCardTable_setPrototypeOf(o, p); }

function SingleCardTable_createSuper(Derived) { var hasNativeReflectConstruct = SingleCardTable_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SingleCardTable_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SingleCardTable_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SingleCardTable_possibleConstructorReturn(this, result); }; }

function SingleCardTable_possibleConstructorReturn(self, call) { if (call && (SingleCardTable_typeof(call) === "object" || typeof call === "function")) { return call; } return SingleCardTable_assertThisInitialized(self); }

function SingleCardTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SingleCardTable_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function SingleCardTable_getPrototypeOf(o) { SingleCardTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SingleCardTable_getPrototypeOf(o); }

/*
 * @Descripttion: CardTable表格
 * @version:
 * @Author: bbq
 * @Date: 2020-07-21 10:13:18
 * @LastEditors: bbq
 * @LastEditTime: 2021-01-11 19:38:56
 */





var SingleCardTable_isArray = table_core_index_["utils"].isArray,
    SingleCardTable_isFunction = table_core_index_["utils"].isFunction,
    SingleCardTable_isObject = table_core_index_["utils"].isObject,
    SingleCardTable_isString = table_core_index_["utils"].isString,
    SingleCardTable_isEmptyValue = table_core_index_["utils"].isEmptyValue;

var SingleCardTable_CardTable = /*#__PURE__*/function (_Component) {
  SingleCardTable_inherits(CardTable, _Component);

  var _super = SingleCardTable_createSuper(CardTable);

  function CardTable(props) {
    var _this;

    SingleCardTable_classCallCheck(this, CardTable);

    _this = _super.call(this, props);

    _this.getMainCode = function (meta, activeCode) {
      var metaTabs = _this.props.metaTabs;
      var mainCode = activeCode;

      var _iterator = SingleCardTable_createForOfIteratorHelper(metaTabs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var code = _step.value;

          if (meta.gridrelation && meta.gridrelation[code]) {
            var relation = meta.gridrelation[code].tabRelation;

            if (SingleCardTable_isArray(relation) && relation.includes(activeCode)) {
              mainCode = code;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return mainCode;
    };

    _this.getCurrentProps = function () {
      // debugger;
      var _this$props = _this.props,
          name = _this$props.name,
          tabsStore = _this$props.tabsStore,
          tabsConfig = _this$props.tabsConfig;

      var _this$mainSource$getS = _this.mainSource.getStore('tableSwitch'),
          activeCode = _this$mainSource$getS.activeCode;

      var currentMainCode = activeCode;
      var meta = tabsStore[name].getStore('meta');

      if (meta[activeCode]) {
        currentMainCode = _this.getMainCode(meta, activeCode);
      } //当前激活页签主区域store和config


      return {
        currentSource: tabsStore[currentMainCode],
        currentConfig: tabsConfig[currentMainCode] || {},
        currentMainCode: currentMainCode
      };
    };

    _this.onBeforeEvent = /*#__PURE__*/function () {
      var _ref = SingleCardTable_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        var _this$getCurrentProps, currentSource, currentConfig, currentMainCode, onBeforeEvent, getTrueRowIndex, setTableProps, record, rowKey, rowKeyValue, rowIndex, attrcode, column, _params$value, value, validated, event, triggerType, name, activeCode, validateFailed, oldLen;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //当前激活页签主区域store和config
                _this$getCurrentProps = _this.getCurrentProps(), currentSource = _this$getCurrentProps.currentSource, currentConfig = _this$getCurrentProps.currentConfig, currentMainCode = _this$getCurrentProps.currentMainCode;
                onBeforeEvent = currentConfig.onBeforeEvent;
                getTrueRowIndex = currentSource.getTrueRowIndex, setTableProps = currentSource.setTableProps;
                record = params.record, rowKey = params.rowKey, rowKeyValue = params.rowKeyValue, rowIndex = params.rowIndex, attrcode = params.attrcode, column = params.column, _params$value = params.value, value = _params$value === void 0 ? {} : _params$value, validated = params.validated, event = params.event, triggerType = params.triggerType; // 用于解决点击前赋值不上的问题

                setTableProps("currentIndex", getTrueRowIndex({
                  rowIndex: rowIndex
                }), false);
                setTableProps("currentInfo", {
                  record: record,
                  index: rowIndex
                }, false); // 处理校验状态

                if (validated === false) {
                  name = currentSource.getStore("name");
                  activeCode = _this.mainSource.getStore(['tableSwitch', 'activeCode']);
                  validateFailed = _this.mainSource.getCache(['validateFailed', name, activeCode]);

                  if (validateFailed && validateFailed[rowKeyValue]) {
                    oldLen = Object.keys(validateFailed).length;
                    delete validateFailed[rowKeyValue][attrcode];

                    if (oldLen > 0 && Object.keys(validateFailed[rowKeyValue]).length === 0) {
                      delete validateFailed[rowKeyValue];

                      _this.mainSource.refresh();
                    }
                  }
                } // 检验输入字符长度


                if (triggerType === "onFocus" && column.maxlength) {
                  event.target.isFlag = false;
                  event.target.addEventListener("compositionstart", function (e) {
                    e.target.isFlag = true;
                  }, false);
                  event.target.addEventListener("compositionend", function (e) {
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


                if (column.itemtype !== "residtxt") {
                  // onFocus 和value  用于批量更改   zhanghengh 18/6/29 先注释，以后可能有用
                  currentSource.setCache("oldBatchData", {
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
                  currentSource.setCache("oldBatchData", {
                    batchChangeIndex: rowIndex,
                    batchChangeKey: column.attrcode,
                    batchChangeValue: value.value,
                    batchChangeDisplay: null
                  });
                } // 有一些操作要放在这里处理 设置行状态等等


                if (!SingleCardTable_isFunction(onBeforeEvent)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 12;
                return onBeforeEvent(SingleCardTable_objectSpread(SingleCardTable_objectSpread({}, params), {}, {
                  moduleId: currentMainCode
                }));

              case 12:
                _context.t0 = _context.sent;
                return _context.abrupt("return", _context.t0 !== false);

              case 14:
                return _context.abrupt("return", true);

              case 15:
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

    _this.onAfterEvent = /*#__PURE__*/function () {
      var _ref2 = SingleCardTable_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
        var _this$getCurrentProps2, currentSource, currentConfig, currentMainCode, _currentConfig$autoAd, autoAddRow, onAfterEvent, getTableProps, setCellValue, record, rowKey, rowKeyValue, rowIndex, attrcode, column, _params$value2, value, _params$oldValue, oldValue, componentValue, event, _params$triggerType, triggerType, _params$isTriggerModa, isTriggerModal, key, _record$values$attrco, _column$languageMeta$, loginCode, loginIndex, loginValue, next, _key, viewLen, isSwitch_browseDisabled, validValue, isEmpty, tableStatus;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //当前激活页签主区域store和config
                //当前激活页签主区域store和config
                _this$getCurrentProps2 = _this.getCurrentProps(), currentSource = _this$getCurrentProps2.currentSource, currentConfig = _this$getCurrentProps2.currentConfig, currentMainCode = _this$getCurrentProps2.currentMainCode;
                _currentConfig$autoAd = currentConfig.autoAddRow, autoAddRow = _currentConfig$autoAd === void 0 ? {} : _currentConfig$autoAd, onAfterEvent = currentConfig.onAfterEvent;
                getTableProps = currentSource.getTableProps, setCellValue = currentSource.setCellValue;
                record = params.record, rowKey = params.rowKey, rowKeyValue = params.rowKeyValue, rowIndex = params.rowIndex, attrcode = params.attrcode, column = params.column, _params$value2 = params.value, value = _params$value2 === void 0 ? {} : _params$value2, _params$oldValue = params.oldValue, oldValue = _params$oldValue === void 0 ? {} : _params$oldValue, componentValue = params.componentValue, event = params.event, _params$triggerType = params.triggerType, triggerType = _params$triggerType === void 0 ? "onChange" : _params$triggerType, _params$isTriggerModa = params.isTriggerModal, isTriggerModal = _params$isTriggerModa === void 0 ? false : _params$isTriggerModa; // 多语 获取当前的code

                if (column.itemtype === "residtxt" && SingleCardTable_isObject(componentValue)) {
                  for (key in componentValue) {
                    if (componentValue[key].current) {// value.value = componentValue[key];
                      // oldValue.value = store.getRowOldValue(record[rowKey], key);
                    }
                  }
                } // 新旧值


                oldValue.value = oldValue.value || currentSource.getRowOldValue(record[rowKey], attrcode);

                if (triggerType === "onBlur") {
                  /*
                  * onBlur编辑后 和 切换控件状态
                  * 1、input类型    line   编辑后 + 切状态
                  *                model  编辑后
                  * 2、uninput类型  line   切状态
                  *                model  无编辑后  无切状态
                  */
                  // 这一段可以考虑去除  输入 类型
                  if (SingleCardTable_isString(value.value)) {
                    value.value = value.value.trim();
                  } // 当数值类型只输入一个'-'的时候就将它赋值成0


                  if (column.itemtype === "number" && value.value === "-") {
                    value.value = 0;
                    currentSource.setCellValue({
                      rowKeyValue: rowKeyValue,
                      attrcode: attrcode,
                      value: value
                    });
                  } // 侧拉里面的状态


                  if (column.itemtype === "select" && isTriggerModal) {
                    currentSource.setCellProps(rowKeyValue, attrcode, {
                      open: false
                    });
                  }

                  if (column.itemtype === "residtxt") {
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
                      loginCode = getLangCode(), loginIndex = ((_column$languageMeta$ = column.languageMeta.find(function (e) {
                        return e.languageCode === loginCode;
                      })) === null || _column$languageMeta$ === void 0 ? void 0 : _column$languageMeta$.index) || '', loginValue = componentValue[attrcode + loginIndex] || componentValue[attrcode];
                      setCellValue({
                        rowKey: rowKey,
                        rowKeyValue: rowKeyValue,
                        rowIndex: rowIndex,
                        attrcode: attrcode,
                        value: loginValue
                      });
                    }
                  } // 多语控件都不走这里


                  if (column.itemtype !== "residtxt") {// 在onblur时缓存列数据的key 和value  用于批量更改   zhanghengh 18/6/29
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


                currentSource.setCellProps(rowKeyValue, attrcode, {
                  isEdit: false
                }); // 有一些操作要放在这里处理 设置行状态等等

                next = SingleCardTable_isFunction(onAfterEvent) && onAfterEvent(SingleCardTable_objectSpread(SingleCardTable_objectSpread({}, params), {}, {
                  moduleId: currentMainCode
                }), currentSource) !== false; // 多语 获取当前的code

                if (column.itemtype === "residtxt" && SingleCardTable_isObject(componentValue)) {
                  for (_key in componentValue) {
                    currentSource.saveRowOldValue(record[rowKey], _key, componentValue[_key].value);
                  }
                } else {
                  currentSource.saveRowOldValue(record[rowKey], attrcode, value.value);
                }

                if (next) {
                  _context2.next = 13;
                  break;
                }

                console.log("not next to run");
                return _context2.abrupt("return", false);

              case 13:
                /**
                 * 自动增行
                 * 增一行的条件：
                 * 1、最后一行
                 * 2、isAddRow 为true
                 * 3、当前单元格值不为空
                 */
                viewLen = currentSource.getVisibleRows(false, true).length;
                isSwitch_browseDisabled = column.itemtype === "switch_browse" && column.disabled; // 开关且不可编辑

                validValue = column.itemtype === 'residtxt' ? value : value.value;
                validValue = column.itemtype === 'refer' ? componentValue : value;
                isEmpty = SingleCardTable_isEmptyValue(validValue, column.itemtype);
                tableStatus = getTableProps('status');

                if (viewLen == rowIndex + 1 && autoAddRow.enabled && !isSwitch_browseDisabled && !isEmpty && tableStatus === "edit") {
                  // 添加自动增行后的回调
                  currentSource.addTableRow(undefined, autoAddRow.defaultValue, true, {
                    callback: autoAddRow.callback,
                    isAutoAddRow: true
                  });
                }

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.mainSource = _this.props.tabsStore[_this.props.name]; // 当前激活页签状态存在主区域store

    var oldSwitch = _this.mainSource.getStore('tableSwitch');

    _this.initSwitch = SingleCardTable_objectSpread(SingleCardTable_objectSpread({}, oldSwitch), {}, {
      activeCode: oldSwitch.activeCode ? oldSwitch.activeCode : _this.props.name
    });

    _this.mainSource.setStore('tableSwitch', _this.initSwitch, false); // 给每一个数据源设置一个 name  用于做initialvalue的解析


    _this.mainSource.setStore('name', _this.props.name, false); //子表使用的是 singleCardTable


    var _iterator2 = SingleCardTable_createForOfIteratorHelper(_this.props.metaTabs),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var source = _step2.value;
        // if (!props.tabsStore[source].getRef().length) {
        props.tabsStore[source].setRef(SingleCardTable_assertThisInitialized(_this)); // }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return _this;
  }

  SingleCardTable_createClass(CardTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //this.props.store._initCellPropsByMeta(this.props.name, this.props.meta);
      var _this$props2 = this.props,
          name = _this$props2.name,
          tabsConfig = _this$props2.tabsConfig;

      if (tabsConfig[name]) {
        var pkcode = tabsConfig[name].pkcode;
        this.mainSource.setStore('cardTable_pkcode', pkcode, false);
      }
    } // componentWillUnmount(){
    //     for (let source of this.props.metaTabs) {
    //         props.tabsStore[source].removeRef(this);
    //     }
    // }

  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          name = _this$props3.name,
          tabsStore = _this$props3.tabsStore,
          tabsConfig = _this$props3.tabsConfig,
          metaTabs = _this$props3.metaTabs,
          _this$props3$langJson = _this$props3.langJson,
          langJson = _this$props3$langJson === void 0 ? {} : _this$props3$langJson,
          renderItems = _this$props3.renderItems,
          getHotKeyConfig = _this$props3.getHotKeyConfig,
          cardTableComponentUpdate = _this$props3.cardTableComponentUpdate,
          onCellHyperlinkTo = _this$props3.onCellHyperlinkTo;

      var _this$getCurrentProps3 = this.getCurrentProps(),
          currentSource = _this$getCurrentProps3.currentSource,
          currentConfig = _this$getCurrentProps3.currentConfig,
          currentMainCode = _this$getCurrentProps3.currentMainCode;

      var getStore = currentSource.getStore,
          closeSideBox = currentSource.closeSideBox;

      var _getStore = getStore('tableSideBox'),
          record = _getStore.record,
          index = _getStore.index,
          sideBoxVisible = _getStore.sideBoxVisible,
          status = _getStore.status;

      var meta = getStore('meta');
      var expandedRowKeys = getStore('expandedRowKeys'); // console.log('tabsConfig', tabsConfig);  // 点击行时会调用 10多次 有些问题TODO

      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(TabsTable_TabsTable, {
        mainCode: name,
        isMultiTab: true,
        tabsStore: tabsStore,
        tabsConfig: tabsConfig,
        metaTabs: metaTabs,
        langJson: langJson,
        renderItems: renderItems,
        getHotKeyConfig: getHotKeyConfig,
        cardTableComponentUpdate: cardTableComponentUpdate,
        onCellHyperlinkTo: onCellHyperlinkTo,
        isHorizontal: this.props.isHorizontal //行展开
        ,
        haveExpandIcon: function haveExpandIcon() {
          return true;
        },
        expandedRowKeys: expandedRowKeys,
        expandedRowRender: function expandedRowRender(record, index) {
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(SingleRowExpand_SingleRowExpand, {
            moduleId: currentMainCode,
            mainCode: name,
            tabsStore: tabsStore,
            record: record,
            rowIndex: index,
            meta: meta
          });
        }
      }), sideBoxVisible && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(SideBox_TableSideBox, {
        mainCode: currentMainCode,
        store: currentSource,
        config: SingleCardTable_objectSpread(SingleCardTable_objectSpread({}, currentConfig), {}, {
          onAfterEvent: this.onAfterEvent,
          onBeforeEvent: this.onBeforeEvent
        }),
        renderItems: renderItems,
        getHotKeyConfig: getHotKeyConfig,
        cardTableComponentUpdate: cardTableComponentUpdate // 传递多语
        ,
        langJson: langJson,
        show: sideBoxVisible,
        status: status,
        data: record,
        index: index,
        onClose: closeSideBox
      }));
    }
  }]);

  return CardTable;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);

/* harmony default export */ var SingleCardTable = (SingleCardTable_CardTable);
// CONCATENATED MODULE: ./src/platform/components/Table/appTable/CardTable/components/MultiCardTable/index.js
function MultiCardTable_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MultiCardTable_typeof = function _typeof(obj) { return typeof obj; }; } else { MultiCardTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MultiCardTable_typeof(obj); }

function MultiCardTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MultiCardTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MultiCardTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MultiCardTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) MultiCardTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) MultiCardTable_defineProperties(Constructor, staticProps); return Constructor; }

function MultiCardTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MultiCardTable_setPrototypeOf(subClass, superClass); }

function MultiCardTable_setPrototypeOf(o, p) { MultiCardTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MultiCardTable_setPrototypeOf(o, p); }

function MultiCardTable_createSuper(Derived) { var hasNativeReflectConstruct = MultiCardTable_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = MultiCardTable_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = MultiCardTable_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MultiCardTable_possibleConstructorReturn(this, result); }; }

function MultiCardTable_possibleConstructorReturn(self, call) { if (call && (MultiCardTable_typeof(call) === "object" || typeof call === "function")) { return call; } return MultiCardTable_assertThisInitialized(self); }

function MultiCardTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MultiCardTable_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function MultiCardTable_getPrototypeOf(o) { MultiCardTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MultiCardTable_getPrototypeOf(o); }

/*
 * @Descripttion: 
 * @version: 
 * @Author: bbq
 * @Date: 2020-07-22 17:59:16
 * @LastEditors: bbq
 * @LastEditTime: 2021-01-11 19:39:13
 */




var MultiCardTable_isFunction = table_core_index_["utils"].isFunction,
    MultiCardTable_isArray = table_core_index_["utils"].isArray;

var MultiCardTable_MultiCardTable = /*#__PURE__*/function (_Component) {
  MultiCardTable_inherits(MultiCardTable, _Component);

  var _super = MultiCardTable_createSuper(MultiCardTable);

  function MultiCardTable(props) {
    var _this;

    MultiCardTable_classCallCheck(this, MultiCardTable);

    _this = _super.call(this, props); //模板

    _this.getMultiCodeArr = function () {
      var _this$props = _this.props,
          store = _this$props.store,
          name = _this$props.name;
      var meta = store.getStore('meta'); //孙表横向多页签的主表区域编码

      var containerrelation = meta.containerrelation;

      if (containerrelation && Array.isArray(containerrelation[name])) {
        _this.multiCodeArr = containerrelation[name];

        _this.setTabsStore(meta);
      }
    };

    _this.setTabsStore = function (meta) {
      var _this$props2 = _this.props,
          name = _this$props2.name,
          store = _this$props2.store,
          mountChildrenStore = _this$props2.mountChildrenStore;
      var tableStores = store.getStore('tableStores'); //为多页签其它主区域创建Store, 并挂到Page中

      Array.isArray(_this.multiCodeArr) && _this.multiCodeArr.forEach(function (item) {
        item.forEach(function (ele) {
          if (ele !== name) {
            var currentMainCode = ele; // if (meta[ele]) {
            //     currentMainCode = this.getMainCode(meta, ele);
            // }

            if (MultiCardTable_isFunction(mountChildrenStore)) {
              //待优化:---this绑定到cardTable
              // this.tabsStore[currentMainCode].setRef(this);
              // 外部先去取 然后再挂载  把pageScope 上的合并过来
              mountChildrenStore(currentMainCode, function (mountedStore) {
                // 是否挂载了 Store
                _this.tabsStore[currentMainCode] = mountedStore || _this.tabsStore[currentMainCode] || SingleCardTable_store();

                _this.tabsStore[currentMainCode].setStore('meta', meta, false);

                return _this.tabsStore[currentMainCode];
              });
            } else {
              _this.tabsStore[currentMainCode] = _this.tabsStore[currentMainCode] || SingleCardTable_store();

              _this.tabsStore[currentMainCode].setStore('meta', meta, false);
            } // 存储一下 所有cardTable的数据源


            store.setStore('tableStores', _this.tabsStore, false);
          }
        });
      });
    };

    _this.multiCodeArr = null; // 存一下id 这个导致 一个store 只能 绑定一个对象
    // 但是没有id 难解决 多来源 主表和多来源本身的共用一个对象的问题

    props.store && props.store.setStore('name', props.name, false); //孙表配置

    _this.tabsStore = MultiCardTable_defineProperty({}, _this.props.name, _this.props.store); // 如果要实现 可以通过meta控制 布局 那么 最外层的store 应该绑定在Wrapper层
    // if (!props.store.getRef().length) {

    _this.props.store.setRef && _this.props.store.setRef(MultiCardTable_assertThisInitialized(_this)); // }

    return _this;
  }

  MultiCardTable_createClass(MultiCardTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      this.getMultiCodeArr();
      var _this$props3 = this.props,
          renderItems = _this$props3.renderItems,
          onCellHyperlinkTo = _this$props3.onCellHyperlinkTo,
          getHotKeyConfig = _this$props3.getHotKeyConfig,
          cardTableComponentUpdate = _this$props3.cardTableComponentUpdate;
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "multi-cardTable"
      }, Array.isArray(this.multiCodeArr) && this.multiCodeArr.map(function (item, index) {
        var mainCode = item[0];
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(SingleCardTable, {
          key: index,
          onCellHyperlinkTo: onCellHyperlinkTo //单来源页签属性
          ,
          name: mainCode,
          langJson: _this2.props.langJson,
          renderItems: renderItems,
          getHotKeyConfig: getHotKeyConfig,
          cardTableComponentUpdate: cardTableComponentUpdate //多页签store及多页签config
          ,
          tabsStore: _this2.tabsStore //全部水平排列的横向多页签
          ,
          isHorizontal: _this2.multiCodeArr.length === 1,
          tabsConfig: _this2.props.multiConfig,
          metaTabs: item
        });
      }));
    }
  }]);

  return MultiCardTable;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);


// CONCATENATED MODULE: ./src/platform/components/Table/appTable/CardTable/index.js
function CardTable_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CardTable_typeof = function _typeof(obj) { return typeof obj; }; } else { CardTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CardTable_typeof(obj); }

function CardTable_extends() { CardTable_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardTable_extends.apply(this, arguments); }

function CardTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CardTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CardTable_ownKeys(Object(source), true).forEach(function (key) { CardTable_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CardTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CardTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CardTable_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardTable_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardTable_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CardTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CardTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CardTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) CardTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) CardTable_defineProperties(Constructor, staticProps); return Constructor; }

function CardTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CardTable_setPrototypeOf(subClass, superClass); }

function CardTable_setPrototypeOf(o, p) { CardTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CardTable_setPrototypeOf(o, p); }

function CardTable_createSuper(Derived) { var hasNativeReflectConstruct = CardTable_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CardTable_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CardTable_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CardTable_possibleConstructorReturn(this, result); }; }

function CardTable_possibleConstructorReturn(self, call) { if (call && (CardTable_typeof(call) === "object" || typeof call === "function")) { return call; } return CardTable_assertThisInitialized(self); }

function CardTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CardTable_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function CardTable_getPrototypeOf(o) { CardTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CardTable_getPrototypeOf(o); }

/*
 * @Descripttion: 分发单来源 与 多来源
 * @version: 
 * @Author: bbq
 * @Date: 2020-07-07 13:53:43
 * @LastEditors: bbq
 * @LastEditTime: 2020-09-05 13:57:05
 */







var CardTable_CardTableWrapper = /*#__PURE__*/function (_Component) {
  CardTable_inherits(CardTableWrapper, _Component);

  var _super = CardTable_createSuper(CardTableWrapper);

  function CardTableWrapper(props) {
    var _this;

    CardTable_classCallCheck(this, CardTableWrapper);

    _this = _super.call(this, props);

    _this.getCardTableProps = function (isMulti) {
      var _this$props = _this.props,
          name = _this$props.name,
          store = _this$props.store,
          config = _this$props.config,
          other = CardTable_objectWithoutProperties(_this$props, ["name", "store", "config"]);

      if (!isMulti) {
        return CardTable_objectSpread({
          tabsStore: CardTable_defineProperty({}, name, store),
          tabsConfig: CardTable_defineProperty({}, name, config),
          metaTabs: [name],
          name: name
        }, other);
      }
    };

    props.store.setRef && props.store.setRef(CardTable_assertThisInitialized(_this)); // console.log(props.store, ' props.store');
    // 为了主表和多来源总数据 共用对象时使用

    props.store.setStore('name', props.name, false);
    return _this;
  }

  CardTable_createClass(CardTableWrapper, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this2 = this;

      var _this$props2 = this.props,
          store = _this$props2.store,
          afterLangload = _this$props2.afterLangload; //加载多语

      var callback = function callback(json) {
        // this.setState({ json });
        store.setCache('langJson', json || {}); // console.log(store.getCache('langJson'))
        // 备份一份到全局

        afterLangload && afterLangload(json, store);

        _this2.forceUpdate();
      };

      Object(api_index_["getMultiLang"])({
        moduleId: "page_table",
        callback: callback
      });
    }
  }, {
    key: "isMulti",
    value: function isMulti() {
      var _this$props3 = this.props,
          name = _this$props3.name,
          store = _this$props3.store;
      var meta = store.getStore('meta'); //孙表横向多页签的主表区域编码

      var containerrelation = meta.containerrelation;

      if (containerrelation && Array.isArray(containerrelation[name])) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var isMulti = this.isMulti();
      var cardTableProps = this.getCardTableProps();
      var store = this.props.store;

      if (!store || !store.getViewMeta()) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: "unknow-store"
        });
      }

      var langJson = store.getCache('langJson') || {};
      return isMulti ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(MultiCardTable_MultiCardTable, CardTable_extends({}, this.props, {
        langJson: langJson
      })) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(SingleCardTable, CardTable_extends({}, cardTableProps, {
        langJson: langJson,
        isHorizontal: true
      }));
    }
  }]);

  return CardTableWrapper;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);

CardTable_CardTableWrapper.displayName = 'CardTable';
CardTable_CardTableWrapper.useCardTable = CardTable_store;
CardTable_CardTableWrapper.TabsTableStore = TabsTable_store;
/* harmony default export */ var appTable_CardTable = __webpack_exports__["default"] = (CardTable_CardTableWrapper);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(75)();
}


/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return findNextFocusItemInTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return executeAutoFocus; });
/* harmony import */ var _getCellIdentity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _findNextFocusItemInForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var _handleSpecialCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var _createKeyMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _config_moduleType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_platform_api__WEBPACK_IMPORTED_MODULE_5__);






/**
 * @desc 查找下一个可聚焦元素
 * @param target {dom} 事件源
 * @param ViewModel {object} 全局变量
 * @param moduleId {string} 当前区域Id
 * @param orderOfHotKey {array} 区域显示顺序配置
 */

function findNextFocusItemInTable(_ref) {
  var eventTarget = _ref.eventTarget,
      ViewModel = _ref.ViewModel,
      moduleId = _ref.moduleId,
      orderOfHotKey = _ref.orderOfHotKey;
  var parentTd = eventTarget.tagName === 'TD' ? eventTarget : findParentTd(eventTarget);

  if (!parentTd) {
    // 这里报错的原因是因为某些事件（下拉的keydown）执行了两次
    console.warn('not find parentTd, next hotkey invalid');
    return;
  }

  var nextTd = parentTd.nextElementSibling;
  var currentTr = parentTd.parentElement;
  var lastTd = findLastTdInRow(currentTr);
  var div = nextTd && nextTd.querySelector('[tabindex="0"]'); //如果是最后一个元素就需要判断跳到下一行还是跳到下一个区域

  if (lastTd === parentTd) {
    var lastTr = currentTr.parentElement.lastElementChild;
    currentTr === lastTr ? perceptionHotKeyConfig({
      currentModuleId: moduleId,
      ViewModel: ViewModel,
      orderOfHotKey: orderOfHotKey
    }) : findNextRowTd({
      tr: currentTr,
      ViewModel: ViewModel,
      moduleId: moduleId,
      orderOfHotKey: orderOfHotKey
    });
    return;
  } // 如果下一个元素没有找到就继续查找


  if (div === null || Object(_handleSpecialCase__WEBPACK_IMPORTED_MODULE_2__[/* checkboxInTable */ "a"])(div)) {
    findNextSiblings({
      td: nextTd,
      ViewModel: ViewModel,
      moduleId: moduleId,
      orderOfHotKey: orderOfHotKey
    });
    return;
  } // 解决table 设值后重新渲染导致焦点缺失的问题,在这里保留一下id


  var cellIdentity = Object(_getCellIdentity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nextTd);
  cellIdentity ? ViewModel.enterTriggerCellId = cellIdentity : '';
  executeAutoFocus({
    div: div,
    ViewModel: ViewModel
  });
}

function findParentTd(el) {
  while (el.parentElement) {
    el = el.parentElement;

    if (el.tagName === 'TD') {
      return el;
    }
  }

  return null;
}
/**
 * @desc 查找当前行里的最后一个td，需要排除操作列
 * @param tr {dom}
 * @return td {dom}
 */


function findLastTdInRow(tr) {
  var td = tr.lastElementChild.className.includes('fixed') ? tr.lastElementChild.previousElementSibling : tr.lastElementChild;
  return td;
}
/**
 * @desc 递归查找下一个可聚焦元素
 * @param td {dom} 上一个td
 * @param ViewModel {object} 全局变量
 * @param moduleId {string} 当前区域的Id
 * @param orderOfHotKey
 */


function findNextSiblings(_ref2) {
  var td = _ref2.td,
      ViewModel = _ref2.ViewModel,
      moduleId = _ref2.moduleId,
      orderOfHotKey = _ref2.orderOfHotKey;
  var nextTd = td.nextElementSibling;
  var currentTr = nextTd && nextTd.parentElement;
  var lastTd = currentTr && findLastTdInRow(currentTr);
  var currentDiv = td.querySelector('[tabindex="0"]');
  var div = nextTd && nextTd.querySelector('[tabindex="0"]'); //如果下个需要聚焦的单元格与最后一个单元相同并且没有可聚焦元素就在下一行查找

  if (lastTd === nextTd && div === null || lastTd === td && currentDiv === null) {
    findNextRowTd({
      tr: currentTr,
      ViewModel: ViewModel,
      moduleId: moduleId,
      orderOfHotKey: orderOfHotKey
    });
    return;
  }

  if (div === null || Object(_handleSpecialCase__WEBPACK_IMPORTED_MODULE_2__[/* checkboxInTable */ "a"])(div)) {
    findNextSiblings({
      td: nextTd,
      ViewModel: ViewModel,
      moduleId: moduleId,
      orderOfHotKey: orderOfHotKey
    });
    return;
  }

  var cellIdentity = Object(_getCellIdentity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nextTd);
  cellIdentity ? ViewModel.enterTriggerCellId = cellIdentity : '';
  executeAutoFocus({
    div: div,
    ViewModel: ViewModel
  });
} //查找下一行可聚焦元素


function findNextRowTd(_ref3) {
  var tr = _ref3.tr,
      ViewModel = _ref3.ViewModel,
      moduleId = _ref3.moduleId,
      orderOfHotKey = _ref3.orderOfHotKey;
  var nextTr = tr && tr.nextElementSibling; //如果是最后一行就查找下个区域的第一个可聚焦元素

  if (nextTr === null) {
    orderOfHotKey && jumpToNextModuleFocusItem({
      currentModuleId: moduleId,
      ViewModel: ViewModel,
      orderOfHotKey: orderOfHotKey
    });
    return;
  }

  if (nextTr.getAttribute('tabindex') === '-1') {
    findNextRowTd({
      tr: nextTr,
      ViewModel: ViewModel,
      moduleId: moduleId,
      orderOfHotKey: orderOfHotKey
    });
    return;
  }

  var div = nextTr.querySelector('td [tabindex="0"]');
  var td = findParentTd(div);
  var cellIdentity = Object(_getCellIdentity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(td);
  cellIdentity ? ViewModel.enterTriggerCellId = cellIdentity : '';
  executeAutoFocus({
    div: div,
    ViewModel: ViewModel
  });
}
/**
 * @desc 判断业务组是否配置快捷键，如果没有就在本区域内循环 反之根据orderOfHotKey跳转下个区域
 * @param currentModuleId {string} 当前的区域ID
 * @param ViewModel 全局变量
 * @param orderOfHotKey {array} 区域展示顺序
 */


function perceptionHotKeyConfig(_ref4) {
  var currentModuleId = _ref4.currentModuleId,
      ViewModel = _ref4.ViewModel,
      orderOfHotKey = _ref4.orderOfHotKey;

  if (orderOfHotKey && orderOfHotKey.length === 0) {
    findFirstFocusItemInCurrentModule({
      currentModuleId: currentModuleId,
      ViewModel: ViewModel
    });
  } else {
    orderOfHotKey && jumpToNextModuleFocusItem({
      currentModuleId: currentModuleId,
      ViewModel: ViewModel,
      orderOfHotKey: orderOfHotKey
    });
  }
}

function findFirstFocusItemInCurrentModule(_ref5) {
  var currentModuleId = _ref5.currentModuleId,
      ViewModel = _ref5.ViewModel;
  var id = "".concat(_platform_api__WEBPACK_IMPORTED_MODULE_5__["config"].hotKeyModuleIdPrefix, "-").concat(currentModuleId);
  var tableTr = document.querySelector("#".concat(id, " table tbody tr"));
  var tds = tableTr.querySelectorAll('td');
  var firstFocusItem = Array.prototype.find.call(tds, function (td) {
    return td.querySelector('[tabindex="0"]') !== null;
  });
  var cellIdentity = Object(_getCellIdentity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(firstFocusItem);
  cellIdentity ? ViewModel.enterTriggerCellId = cellIdentity : '';
  var div = firstFocusItem.querySelector('[tabindex="0"]');
  div && executeAutoFocus({
    div: div,
    ViewModel: ViewModel
  });
}

function jumpToNextModuleFocusItem(_ref6) {
  var currentModuleId = _ref6.currentModuleId,
      ViewModel = _ref6.ViewModel,
      orderOfHotKey = _ref6.orderOfHotKey;
  var nextModuleId = calculateNextModuleId(currentModuleId, orderOfHotKey);
  var nextModuleKeyMap = _createKeyMap__WEBPACK_IMPORTED_MODULE_3__[/* keyByModuleId */ "d"][nextModuleId];
  if (nextModuleKeyMap === undefined) return;
  var type = nextModuleKeyMap.type;

  if (type === _config_moduleType__WEBPACK_IMPORTED_MODULE_4__[/* MODULE_TYPE */ "a"].cardTable || type === _config_moduleType__WEBPACK_IMPORTED_MODULE_4__[/* MODULE_TYPE */ "a"].editTable) {
    //如果是table类型就获取当前table显示的页签
    var activeTableKeyMap = _createKeyMap__WEBPACK_IMPORTED_MODULE_3__[/* keyByModuleId */ "d"][nextModuleKeyMap.activeTable];
    var firstItemDom = document.querySelector("div[".concat(activeTableKeyMap.firstItem, "]"));
    var div = firstItemDom.querySelector('[tabindex="0"]');

    if (div === null) {
      var td = firstItemDom.parentElement;
      findNextSiblings({
        td: td,
        ViewModel: ViewModel,
        moduleId: activeTableKeyMap.moduleId,
        orderOfHotKey: orderOfHotKey
      });
    } else {
      var _td = findParentTd(div);
      /**
      * @desc 表格编辑后会导致页面重新渲染导致聚焦状态丢失，因此enter键跳转的需要在全局记录一下，为操作的连续性渲染完成后重新聚焦做标识
      * @type {string}
      */


      var cellIdentity = Object(_getCellIdentity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_td);
      cellIdentity ? ViewModel.enterTriggerCellId = cellIdentity : '';
      executeAutoFocus({
        div: div,
        ViewModel: ViewModel
      });
    }
  } else {
    Object(_findNextFocusItemInForm__WEBPACK_IMPORTED_MODULE_1__[/* findNextFocusItemInForm */ "b"])(nextModuleKeyMap, nextModuleId);
  }
}

function calculateNextModuleId(currentModuleId, orderOfHotKey) {
  var orderOfHotKeyLen = orderOfHotKey.length;
  var nextModuleIndex = orderOfHotKey.indexOf(currentModuleId) + 1 === orderOfHotKeyLen ? 0 : orderOfHotKey.indexOf(currentModuleId) + 1;
  return orderOfHotKey[nextModuleIndex];
}

function executeAutoFocus(_ref7) {
  var div = _ref7.div,
      ViewModel = _ref7.ViewModel;

  if (div !== null) {
    ViewModel.shouldAutoFocus = true;
    div.ncExecuteFocus = true;
    div.focus();
    delete div.ncExecuteFocus;
  }
}



/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return matchItemFocus; });
/* unused harmony export cellFocusAfterTabChange */
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_platform_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WithKeyboardChange_createKeyMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);



/**
 * @desc 根据不同的formItem类型获取可聚焦的input元素
 * @types {
 *     1: refer,
 *     2: input, select, timepicker, dateTimePicker, datePicker, number,
 *     3: textarea
 * }
 * @matchItemFocus{
 *     refer: func
 * }
 */

var matchItemFocus = {
  refer: setReferItemFocus,
  input: setNormalItemFocus,
  textarea: setTextAreaFocus,
  select: setSelectItemFocus,
  "switch": setSwitchItemFocus,
  switch_browse: setSwitchItemFocus,
  normal: setNormalItemFocus
};

function setReferItemFocus(selector) {
  // let dom = ReactDOM.findDOMNode(component);
  var dom = selector && document.querySelector(selector);
  var inputEl = dom && dom.querySelector("input[tabindex='0']");
  var spanEl = dom && dom.querySelector("span[tabindex='0']");

  if (inputEl) {
    //元素存在就让它聚焦
    inputEl.focus();
    dom = null;
  } else if (spanEl) {
    spanEl.focus();
    dom = null;
  } else {
    dom && dom.addEventListener('DOMSubtreeModified', //autoFocusInTricky.bind(null, dom)
    function wrap(e) {
      autoFocusInTricky(dom, wrap, e);
    });
  } // dom = null;


  inputEl = null;
  spanEl = null;
}
/**
 * todo: 由于refer组件是异步加载，input获取焦点时无法得到dom元素，因此在这儿监听dom更改事件, 希望在refer内部触发一个告诉外部，组件一渲染完成
 */


function autoFocusInTricky(dom, fn, e) {
  var inputEl = e.target.querySelector("input[tabindex='0']"); // inputEl = null

  if (inputEl) {
    setTimeout(function () {
      inputEl.focus();
      dom && dom.removeEventListener('DOMSubtreeModified', fn);
      inputEl = null;
      dom = null;
    });
  }
}

function setNormalItemFocus(selector) {
  // let dom = ReactDOM.findDOMNode(component);
  var dom = selector && document.querySelector(selector);
  var inputEl = dom && dom.querySelector('input');
  inputEl && inputEl.focus();
  dom = null;
  inputEl = null;
}

function setTextAreaFocus(selector) {
  // let dom = ReactDOM.findDOMNode(component);
  var dom = selector && document.querySelector(selector);
  var textEl = dom && dom.querySelector('textarea');
  textEl && textEl.focus();
  dom = null;
  textEl = null;
}

function setSelectItemFocus(selector) {
  // let dom = ReactDOM.findDOMNode(component);
  var dom = selector && document.querySelector(selector);
  var focusDom = dom && dom.querySelector('.u-select-selection[tabindex]') || dom.querySelector('input');
  focusDom && focusDom.focus();
  dom = null;
  focusDom = null;
}

function setSwitchItemFocus(selector) {
  // let dom = ReactDOM.findDOMNode(component);
  var dom = selector && document.querySelector(selector);
  var switchEl = dom && dom.querySelector('span[tabindex]');
  switchEl && switchEl.focus();
  dom = null;
  switchEl = null;
} //标签切换时首个自动聚焦


function cellFocusAfterTabChange(item) {
  if (_WithKeyboardChange_createKeyMap__WEBPACK_IMPORTED_MODULE_2__[/* keyByModuleId */ "d"][item]) {
    var focusItem = _WithKeyboardChange_createKeyMap__WEBPACK_IMPORTED_MODULE_2__[/* keyByModuleId */ "d"][item].firstItem;
    var moduleId = _WithKeyboardChange_createKeyMap__WEBPACK_IMPORTED_MODULE_2__[/* keyByModuleId */ "d"][item] && _WithKeyboardChange_createKeyMap__WEBPACK_IMPORTED_MODULE_2__[/* keyByModuleId */ "d"][item]['parent'] ? _WithKeyboardChange_createKeyMap__WEBPACK_IMPORTED_MODULE_2__[/* keyByModuleId */ "d"][item]['parent'] : item;
    focusItem && _platform_api__WEBPACK_IMPORTED_MODULE_0__["PubSub"].publish('autoFocus', {
      data: focusItem,
      force: true,
      moduleId: moduleId
    });
  }
}



/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36), __webpack_require__(52)(module)))

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__24__;

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(117);
} else {}


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkboxInTable; });
/**
 * @desc 表格可编辑的状态下checkbox类型的单元格没有浏览态与编辑态之分, 因此需要在checkbox的属性上去判断此单元格是否可编辑
 */
function checkboxInTable(dom) {
  if (dom.tagName !== 'INPUT') return false; //如果是不可编辑的checkbox就继续查找下一个可聚焦元素

  if (dom && dom.disabled === true) {
    return true;
  }
}

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

/***/ 52:
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return findNextFocusItemInForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findLastFocusItemInForm; });
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_platform_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WithAutoFocus_executeAutoFocus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);



function findNextFocusItemInForm(nextModuleKeyMap, nextModuleId) {
  var wrapper = document.querySelector("#".concat(_platform_api__WEBPACK_IMPORTED_MODULE_0__["config"].hotKeyModuleIdPrefix, "-").concat(nextModuleId));
  var formItem = wrapper.querySelector(".".concat(nextModuleKeyMap.firstItem));
  var type = getFormType(formItem);
  _WithAutoFocus_executeAutoFocus__WEBPACK_IMPORTED_MODULE_1__[/* matchItemFocus */ "a"][type] === undefined ? _WithAutoFocus_executeAutoFocus__WEBPACK_IMPORTED_MODULE_1__[/* matchItemFocus */ "a"]['normal'](wrapper) : _WithAutoFocus_executeAutoFocus__WEBPACK_IMPORTED_MODULE_1__[/* matchItemFocus */ "a"][type](wrapper);
}

function findLastFocusItemInForm(nextModuleKeyMap, nextModuleId) {}

function getFormType(formItem) {
  return Array.prototype.find.call(formItem.classList, function (item) {
    return item.startsWith('js-type');
  }).split('-').pop();
}



/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calculateNeedJumpTimes; });
/**
 * @desc：有些行整行不可编辑，添加了标示tabindex = -1,一直循环找到可编辑的行数
 * @param tr {node} 当前行不可编辑的行
 * @param needJumpTimes {number} 向上/下查找的行数
 * @param direction {string}  'down'/ 'up' 向上或向下查找
 * @return 返回需要向上/下查找的行数
 */
function calculateNeedJumpTimes(tr, needJumpTimes, direction) {
  var tempTr = tr;
  var tempNeedJumpTimes = needJumpTimes;

  while (tempTr !== null && tempTr.getAttribute('tabindex') === '-1') {
    tempNeedJumpTimes += 1;
    tempTr = direction === 'up' ? tempTr.previousElementSibling : tempTr.nextElementSibling;
  }

  return tempNeedJumpTimes;
}

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && objectToString.call(value) == boolTag);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isBoolean;


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(76);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createByModuleType; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ keyByModuleId; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ createKeyMap_orderOfHotKey; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ deleteKeyByModuleId; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ getFirstItem; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ setValueOfActiveTable; });

// UNUSED EXPORTS: setFormDisableAttrCode, editTableFieldEditable

// CONCATENATED MODULE: ./src/platform/components/WithKeyboardChange/config/availableItems.js
var availableFormItems = ['input', 'textarea', 'number', 'refer', 'datepicker', 'datetimepicker', 'timepicker', 'select', 'switch', 'residtxt', 'checkbox_switch'];
var availableTableItems = ['refer', 'datepicker', 'input', 'datetimepicker', 'timepicker', 'select', 'number', 'residtxt', 'checkbox_switch', 'rangepicker', 'datePickerNoTimeZone', 'TZDatePickerStart', 'TZDatePickerStart', 'switch'];

// EXTERNAL MODULE: ./src/platform/components/WithKeyboardChange/config/moduleType.js
var moduleType = __webpack_require__(15);

// EXTERNAL MODULE: external "@platform/api/index"
var index_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/platform/components/WithKeyboardChange/createKeyMap.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * 我们要生成的数据格式
 *
 * @keyByModuleId = {
 *     moduleId1: {
 *         firstItem: 'attrCode1',
 *         lastItem: 'attrCode2',
 *         type: 'form'
 *     },
 *     moduleId2: {
 *         firstItem: 'attrCode3',
 *         lastItem: 'attrCode4',
 *         type: 'table',
 *         children: ['moduleId3', 'moduleId4'] // 表示此表格的关联表有哪些
 *     },
 *     moduleId3: {
 *         firstItem: 'attrCode3',
 *         lastItem: 'attrCode4',
 *         type: 'table',
 *         parent: 'moduleId3', // 表示此表格的主表是哪个，
 *         activeTable: 'moduleId3' //对于多页签的表格添加此字段表示当显示的是哪个页签，第一次渲染默认展示主
 *                                    表
 *     }
 * }
 *
 * @formDisableAttrCode = {
 *     moduleId: {
 *         attrCode1: true,
 *         attrCode2: false
 *     }
 * }
 */

var keyByModuleId = {};
var formDisableAttrCode = {};
var tableDisabledAttrCode = {};
var createKeyMap_orderOfHotKey = [];
var hotKeyPrefix = index_["config"].hotKeyModuleIdPrefix;
/**
 * @desc 实现上面所描述的数据格式
 * @param props
 * @param force 是否强制执行，如果是通过业务组调用executeAutoFocus方法执行，就强制执行聚焦方法， 默认false
 */

function keyMapOfForm(props) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var name = props.name;

  var _ref = props.getHotKeyConfig ? props.getHotKeyConfig() : {},
      meta = _ref.meta,
      newOrderOfHotKey = _ref.orderOfHotKey; // 可以考虑加个参数控制整个快捷键  TOOD


  if (!props.getHotKeyConfig) {
    return console.warn('some form hotkey invalid');
  }

  var formItems = meta[name]['items'];
  createKeyMap_orderOfHotKey = newOrderOfHotKey;
  var itemsAttrCode = formItems.filter(function (item) {
    return isAvailableFormItem(item, name);
  }).map(function (item) {
    return item.attrcode;
  });

  if (formAutoFocusJudgement(name, force)) {
    keyByModuleId[name] = {
      firstItem: itemsAttrCode[0],
      type: moduleType["a" /* MODULE_TYPE */].form
    };
    var firstItemKey = itemsAttrCode[0];
    index_["PubSub"].publish('autoFocus', {
      data: firstItemKey
    });
  }
}
/**
 * @desc：keyMapOfForm方法会根据form的状态执行多次。
 * 现象：只要meta里面的数据一更改就会重新聚焦到第一个可编辑元素上。
 * 解决：keyByModuleId里是否存在此moduleId作为标示，
 */


function formAutoFocusJudgement(name, force) {
  return keyByModuleId[name] === undefined && createKeyMap_orderOfHotKey[0] === name || force;
}
/**
 * @desc 判断此item是否需要在按tab键获得焦点
 * @param item
 * @param name
 * @returns {boolean}
 */


function isAvailableFormItem(item, name) {
  var metaRes = availableFormItems.includes(item.itemtype) && item.disabled !== true && item.visible !== false;
  var itemDisabled = !!(formDisableAttrCode[name] && formDisableAttrCode[name][item.attrcode] === true);
  return metaRes && !itemDisabled;
}
/**
 *
 * @param props
 * @param force {Boolean} 是否强制执行
 */


function keyMapOfTable(props) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var name = props.name,
      high_hotkey = props.high_hotkey,
      getHotKeyConfig = props.getHotKeyConfig; // console.log(high_hotkey, getHotKeyConfig)

  var _ref2 = props.getHotKeyConfig ? props.getHotKeyConfig() : {},
      withHotKeyChange = _ref2.withHotKeyChange,
      meta = _ref2.meta,
      newOrderOfHotKey = _ref2.orderOfHotKey;

  if (!props.getHotKeyConfig || !newOrderOfHotKey) {
    return console.warn('some form hotkey invalid');
  }

  createKeyMap_orderOfHotKey = newOrderOfHotKey;
  var store = high_hotkey.store,
      tableId = high_hotkey.tableId;
  var columns = meta[tableId] && meta[tableId].items;
  var rows = store.getData();
  var lastRowIndex = rows.length - 1;
  var availableItems = columns && iteratorTableColumns(tableId, columns, []);
  if (rows && rows.length === 0) return;
  processKeyMapOfTable({
    tableId: tableId,
    availableItems: availableItems,
    lastRowIndex: lastRowIndex,
    moduleType: moduleType["a" /* MODULE_TYPE */].cardTable,
    force: force
  });

  if (hasTabRelation(props, tableId) && keyByModuleId[tableId]) {
    createTabRelationKeyMap(props, tableId, lastRowIndex); //设置关联表

    keyByModuleId[tableId].children = meta.gridrelation[tableId].tabRelation;
  }
}

function keyMapOfEditTable(props) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var name = props.name,
      high_hotkey = props.high_hotkey,
      getHotKeyConfig = props.getHotKeyConfig; // console.log(high_hotkey, getHotKeyConfig)

  var _ref3 = props.getHotKeyConfig ? props.getHotKeyConfig() : {},
      withHotKeyChange = _ref3.withHotKeyChange,
      meta = _ref3.meta,
      newOrderOfHotKey = _ref3.orderOfHotKey;

  if (!props.getHotKeyConfig || !newOrderOfHotKey) {
    return console.warn('some form hotkey invalid');
  }

  createKeyMap_orderOfHotKey = newOrderOfHotKey;
  var store = high_hotkey.store,
      tableId = high_hotkey.tableId;
  var columns = meta[tableId] && meta[tableId].items;
  var rows = store.getData();
  var lastRowIndex = rows.length - 1;
  var availableItems = columns && iteratorTableColumns(tableId, columns, []);
  if (rows && rows.length === 0) return;
  processKeyMapOfTable({
    tableId: tableId,
    availableItems: availableItems,
    lastRowIndex: lastRowIndex,
    moduleType: moduleType["a" /* MODULE_TYPE */].editTable,
    force: force
  });
}

function iteratorTableColumns(tableId, iterable, pool) {
  return iterable.reduce(function (pre, next) {
    if (next.children) {
      iteratorTableColumns(tableId, next.children, pre);
    } else {
      isAvailableTableItem(tableId, next) ? pre.push(next.attrcode) : pre;
    }

    return pre;
  }, pool);
}

function isAvailableTableItem(moduleId, item) {
  //如果业务组通过table的api修改可编辑性，就根据业务组的设置的只返回，不去读meta里面的值
  if (tableDisabledAttrCode[moduleId]) {
    if (tableDisabledAttrCode[moduleId][item.attrcode] === false) {
      return false;
    }

    if (tableDisabledAttrCode[moduleId][item.attrcode] === true) {
      return true;
    }
  }

  return availableTableItems.includes(item.itemtype) && item.visible !== false && item.disabled !== true && item.attrcode !== undefined;
}

function processKeyMapOfTable(_ref4) {
  var moduleId = _ref4.moduleId,
      availableItems = _ref4.availableItems,
      lastRowIndex = _ref4.lastRowIndex,
      moduleType = _ref4.moduleType,
      force = _ref4.force;
  var firstItem = "".concat(hotKeyPrefix, "-").concat(moduleId, "-").concat(availableItems[0], "-0");
  var lastAvailableItem = availableItems.length - 1;
  var lastItem = "".concat(hotKeyPrefix, "-").concat(moduleId, "-").concat(availableItems[lastAvailableItem], "-").concat(lastRowIndex);
  publishFocusItem({
    orderOfHotKey: createKeyMap_orderOfHotKey,
    moduleId: moduleId,
    firstItem: firstItem,
    force: force
  });
  keyByModuleId[moduleId] = {
    firstItem: firstItem,
    lastItem: lastItem,
    type: moduleType,
    activeTable: moduleId
  };
}
/**
 * @desc    原因：此方法是在componentDidUpdate生命周期里调用的。
 *          现象：只要meta里面的数据一更改就会重新聚焦到第一个可编辑元素上。
 *          解决：keyByModuleId里是否存在此moduleId作为标示
 *
 * @param orderOfHotKey
 * @param moduleId
 * @param firstItem
 * @param force 是否强制执行，如果是业务组通过executeAutoFocus api 执行的，就强制执行
 */


function publishFocusItem(_ref5) {
  var orderOfHotKey = _ref5.orderOfHotKey,
      moduleId = _ref5.moduleId,
      firstItem = _ref5.firstItem,
      force = _ref5.force;

  if (tableAutoFocusJudgement({
    orderOfHotKey: orderOfHotKey,
    moduleId: moduleId,
    force: force
  })) {
    index_["PubSub"].publish('autoFocus', {
      data: firstItem,
      moduleId: moduleId
    });
  }
}

function tableAutoFocusJudgement(_ref6) {
  var _ref6$orderOfHotKey = _ref6.orderOfHotKey,
      orderOfHotKey = _ref6$orderOfHotKey === void 0 ? [] : _ref6$orderOfHotKey,
      moduleId = _ref6.moduleId,
      force = _ref6.force;
  return orderOfHotKey[0] === moduleId && keyByModuleId[moduleId] === undefined || force;
}
/**
 * @desc 判断此table是否有tabRelation
 * @param props {object}
 * @param moduleId {string}
 */


function hasTabRelation(props, moduleId) {
  // console.log(high_hotkey, getHotKeyConfig)
  var _ref7 = props.getHotKeyConfig ? props.getHotKeyConfig() : {},
      meta = _ref7.meta;

  if (!props.getHotKeyConfig) {
    return console.warn('some form hotkey invalid');
  }

  var tabRelation = meta.gridrelation && meta.gridrelation[moduleId].tabRelation;
  return !!(tabRelation && tabRelation.length > 1);
}

function createTabRelationKeyMap(props, moduleId, lastRowIndex) {
  var _ref8 = props.getHotKeyConfig ? props.getHotKeyConfig() : {},
      meta = _ref8.meta;

  if (!props.getHotKeyConfig) {
    return console.warn('some form hotkey invalid');
  }

  var tabRelation = meta.gridrelation[moduleId].tabRelation;
  tabRelation.forEach(function (item) {
    //因为主表keyMap已经生成不需要重复执行
    if (item !== moduleId) {
      var columns = meta[item] && meta[item].items;
      var availableItems = columns && iteratorTableColumns(moduleId, columns, []);
      var code = meta[item].code;
      var firstItem = "".concat(hotKeyPrefix, "-").concat(moduleId, "-").concat(availableItems[0], "-0");
      var lastAvailableItem = availableItems[availableItems.length - 1];
      var lastItem = "".concat(hotKeyPrefix, "-").concat(moduleId, "-").concat(lastAvailableItem, "-").concat(lastRowIndex);
      /**
       * @type {{parent: string}} 表明此此标签页属于哪个区域ID
       */

      keyByModuleId[code] = {
        firstItem: firstItem,
        lastItem: lastItem,
        type: moduleType["a" /* MODULE_TYPE */].cardTable,
        parent: moduleId
      };
    }
  });
}

function deleteKeyByModuleId(moduleId) {
  delete keyByModuleId[moduleId];
}

function setFormDisableAttrCode(moduleId, values) {
  formDisableAttrCode[moduleId] = values;
}
/**
 *
 * @param disabledValue {boolean} 是否可编辑 true -> 可编辑 false -> 不可编辑
 * @param moduleId  {string}
 * @param attrcode {string}
 */


function editTableFieldEditable(disabledValue, moduleId, attrcode) {
  if (tableDisabledAttrCode[moduleId] === undefined) {
    tableDisabledAttrCode[moduleId] = _defineProperty({}, attrcode, disabledValue);
  } else {
    tableDisabledAttrCode[moduleId][attrcode] = disabledValue;
  }
}

function getFirstItem(moduleId) {
  return keyByModuleId[moduleId] && keyByModuleId[moduleId].firstItem;
}

function setValueOfActiveTable(_ref9) {
  var moduleId = _ref9.moduleId,
      activeKey = _ref9.activeKey;
  var moduleInfo = keyByModuleId[moduleId];

  if (moduleInfo) {
    moduleInfo.activeTable = activeKey;
  }
}

var createByModuleType = {
  form: keyMapOfForm,
  table: keyMapOfTable,
  editTable: keyMapOfEditTable
};


/***/ })

/******/ });
});