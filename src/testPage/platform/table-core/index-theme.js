(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("react-dom"), require("@platform/template/index"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@platform/api/index", "@platform/base/index", "react-dom", "@platform/template/index"], factory);
	else if(typeof exports === 'object')
		exports["@platform/table-core/index"] = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("react-dom"), require("@platform/template/index"));
	else
		root["@platform/table-core/index"] = factory(root["React"], root["@platform/api/index"], root["@platform/base/index"], root["ReactDOM"], root["@platform/template/index"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__12__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1915);
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

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = sort;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * 参数：prefixCls，默认bee-table,用于设置图标的样式
 * @param {*} Table
 * @param {*} Icon
 */
function sort(Table, Icon) {
  var _class, _temp, _initialiseProps;

  var IconType = [{
    'type': 'flat',
    'icon': 'uf-symlist',
    'order': 'flatscend'
  }, {
    'type': 'up',
    'icon': 'uf-sortup',
    'order': 'ascend'
  }, {
    'type': 'down',
    'icon': 'uf-sortdown',
    'order': 'descend'
  }];

  return _temp = _class = function (_Component) {
    _inherits(SortTable, _Component);

    function SortTable(props) {
      _classCallCheck(this, SortTable);

      var _this2 = _possibleConstructorReturn(this, _Component.call(this, props));

      _initialiseProps.call(_this2);

      var flatColumns = [];
      _this2._toFlatColumn(props.columns, -1, flatColumns);
      _this2.state = { data: _this2.props.data, columns: props.columns, flatColumns: flatColumns };
      _this2._initSort();
      return _this2;
    }

    //默认是前端排序，值为true为后端排序

    SortTable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {

      if (nextProps.columns !== this.props.columns) {
        var flatColumns = [];
        this._toFlatColumn(nextProps.columns, -1, flatColumns);
        this.setState({ columns: nextProps.columns, flatColumns: flatColumns });
      }

      if (nextProps.data !== this.props.data) {
        this.setState({
          data: nextProps.data,
          oldData: nextProps.data.concat()
        }, function () {
          this._initSort(); // 数据更新后需要重新排序
        });
      }
    };

    /**
     *column扁平化处理，适应多表头避免递归操作
     *
     */
    SortTable.prototype._toFlatColumn = function _toFlatColumn(columns) {
      var parentIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var flatColumns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      var _this = this;
      var children = [];
      // const flatColumns = _this.state;
      columns.forEach(function (item, index) {
        item.parentIndex = parentIndex;
        children = item.children;
        flatColumns.push(item);
        if (children) {
          // item.children = [];
          _this._toFlatColumn(children, flatColumns.length - 1, flatColumns);
        }
      });
    };

    /**
     * column 当前的排序的列
     * 当有的列不排序时，将该列的orderNum置为‘’，并动态的修改其他列的orderNum。
     */

    /**
     * 获取排序字段
     */


    /**
     * pre：前一条数据
     * after:后一条数据
     * orderType:升序、降序
     */

    /**
     * 多列排序 先排order为1的，其他的基于已排序的数据排
     */

    //每个column上添加orderNum属性，不排序时为“”。
    //点击时orderNum有值则不重新赋值，如果没有值，则取当前column下的有oderNum的length值。并排序
    //点击置为“”时，动态的设置相关column的orderNum值。并排序


    // 默认的比较函数,即字符串比较函数

    // 数值比较函数


    // 中文比较函数，按拼音排序


    SortTable.prototype._flatToColumn = function _flatToColumn(flatColumns) {
      var colLen = flatColumns.length;
      var parentIndex = void 0,
          rsColumns = [];
      //每次渲染需要将父类的children置空，避免重复
      flatColumns.forEach(function (item) {
        if (item.children) {
          item.children = [];
        }
      });
      for (var i = colLen - 1; i >= 0; i--) {
        parentIndex = flatColumns[i].parentIndex;
        if (parentIndex >= 0) {
          flatColumns[parentIndex].children.unshift(flatColumns[i]);
        }
      }
      rsColumns = flatColumns.filter(function (item) {
        return item.parentIndex == -1;
      });
      return rsColumns;
    };

    SortTable.prototype.render = function render() {
      var columns = this.renderColumnsDropdown(this.state.flatColumns.concat());
      return _react2["default"].createElement(Table, _extends({}, this.props, { columns: columns, data: this.state.data }));
    };

    return SortTable;
  }(_react.Component), _class.defaultProps = { sort: { mode: "single", backSource: false } }, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this._initSort = function () {
      var flatColumns = _this3.state.flatColumns;

      var needSort = false;
      flatColumns.forEach(function (item) {
        if (item.order == 'descend' || item.order == 'ascend') {
          needSort = true;
          return;
        }
      });
      if (needSort) {
        var data = _this3.multiSort(flatColumns);
        _this3.setState({
          data: data
        });
      }
    };

    this.getOrderNum = function () {
      var orderNum = 0;
      //todo 1
      _this3.state.flatColumns.forEach(function (item, index) {
        if (item.order == "ascend" || item.order == "descend") {
          orderNum++;
        }
      });
      return orderNum ? orderNum : 1;
    };

    this.changeOrderNum = function (column) {
      var flatColumns = _this3.state.flatColumns;
      //todo 2

      flatColumns.forEach(function (col) {
        if (col.orderNum > column.orderNum) {
          col.orderNum--;
        }
        if (column.key == col.key) {
          col.orderNum = "";
        }
      });
      _this3.setState({ flatColumns: flatColumns });
    };

    this.getOrderCols = function (columns) {
      var orderCols = [];
      //todo 3
      columns.forEach(function (item) {
        if (item.order == "ascend" || item.order == "descend") {
          orderCols.push({
            order: item.order,
            field: item.dataIndex,
            orderNum: item.orderNum
          });
        }
      });
      return orderCols;
    };

    this._sortBy = function (pre, after, orderCols, orderColslen, currentIndex) {
      var currentCol = orderCols[currentIndex];
      var getMultiSorterValueFunc = currentCol.getMultiSorterValue;
      var preKey = pre[currentCol.key];
      var afterKey = after[currentCol.key];
      if (getMultiSorterValueFunc) {
        preKey = getMultiSorterValueFunc(pre, currentCol);
        afterKey = getMultiSorterValueFunc(after, currentCol);
      }
      var colSortFun = currentCol.sorter;
      if (typeof colSortFun !== 'function') {
        colSortFun = function colSortFun() {
          return preKey - afterKey;
        };
      }
      if (preKey == afterKey && currentIndex + 1 <= orderColslen) {
        return _this3._sortBy(pre, after, orderCols, orderColslen, currentIndex + 1);
      }
      if (currentCol.order == "ascend") {
        return colSortFun(pre, after);
      } else {
        return -colSortFun(pre, after);
      }
    };

    this.multiSort = function (columns) {
      var _state = _this3.state,
          data = _state.data,
          _state$oldData = _state.oldData,
          oldData = _state$oldData === undefined ? [] : _state$oldData;

      var self = _this3;
      var orderCols = {},
          orderColslen = 0;
      //todo 4
      columns.forEach(function (item) {
        if (item.orderNum) {
          orderColslen++;
          orderCols[item.orderNum] = item;
        }
      });
      if (orderColslen > 0) {
        data = data.sort(function (a, b) {
          return self._sortBy(a, b, orderCols, orderColslen, 1);
        });
      } else {
        data = oldData.concat();
      }
      return data;
    };

    this.toggleSortOrder = function (order, column) {
      var _state2 = _this3.state,
          data = _state2.data,
          _state2$oldData = _state2.oldData,
          oldData = _state2$oldData === undefined ? [] : _state2$oldData,
          flatColumns = _state2.flatColumns;
      var sort = _this3.props.sort;

      var seleObj = void 0;
      if (!oldData.length) {
        oldData = data.concat();
      }
      var sortCol = void 0;
      //单列排序，清空其他列的排序
      if (sort.mode == "single") {
        //todo 5
        flatColumns.forEach(function (da) {
          if (da.key == column.key) {
            seleObj = da;
          } else {
            if (da.order) {
              da.order = "flatscend";
            }
          }
        });
        seleObj.order = order;
        sortCol = [{ order: order, field: seleObj.dataIndex }];
        //通过后端请求
        if (sort.backSource && typeof sort.sortFun === "function") {
          //获取排序的字段和方式
          sort.sortFun(sortCol);
        } else {
          if (order === "ascend") {
            data = data.sort(function (a, b) {
              return column.sorter(a, b);
            });
          } else if (order === "descend") {
            data = data.sort(function (a, b) {
              return column.sorter(b, a);
            });
          } else {
            data = oldData.concat();
          }
          typeof sort.sortFun === "function" && sort.sortFun(sortCol, data, oldData);
        }
      } else {
        seleObj = flatColumns.find(function (da) {
          return da.key == column.key;
        });
        seleObj.order = order;
        if (order === "flatscend") {
          _this3.changeOrderNum(column);
        }
        if (!seleObj.orderNum && (order == "ascend" || order == "descend")) {
          seleObj.orderNum = _this3.getOrderNum();
        }
        sortCol = _this3.getOrderCols(flatColumns);
        if (sort.backSource && typeof sort.sortFun === "function") {
          sort.sortFun(sortCol);
        } else {
          data = _this3.multiSort(flatColumns);
          typeof sort.sortFun === "function" && sort.sortFun(sortCol, data, oldData);
        }
      }
      _this3.setState({ data: data, oldData: oldData, flatColumns: flatColumns });
    };

    this.renderColumnsDropdown = function (columns) {
      var tempColumns = [],
          rsColumns = [];
      tempColumns = columns.map(function (originColumn) {
        var column = _extends({}, originColumn);
        return _this3.sortColumn(column);
      });
      rsColumns = _this3._flatToColumn(tempColumns);
      return rsColumns;
    };

    this.sortColumn = function (column) {
      var mode = _this3.props.sort.mode;

      var prefixCls = "bee-table";
      var iconTypeIndex = 0;
      var sorterClass = "flat";

      if (column.order === "ascend") {
        iconTypeIndex = 1;
        sorterClass = "up";
      } else if (column.order === "descend") {
        iconTypeIndex = 2;
        sorterClass = "down";
      }

      var sortButton = void 0;

      // sorter和sortEnable均可触发排序,且sorter优先级更高
      if (column.sorter || column.sortEnable) {
        //大于0说明不是升序就是降序，判断orderNum有没有值，没有值赋值
        if (column.sortEnable && !column.sorter) {
          switch (column.fieldType) {
            case 'number':
              {
                column.sorter = _this3.numberSortFn(column.dataIndex);
                break;
              }
            case 'stringChinese':
              {
                column.sorter = _this3.chineseSortFn(column.dataIndex);
                break;
              }
            default:
              {
                column.sorter = _this3.defaultSortFn(column.dataIndex);
                break;
              }
          }
        }
        if (iconTypeIndex > 0 && !column.orderNum && mode == "multiple") {
          column.orderNum = _this3.getOrderNum();
        }
        sortButton = _react2["default"].createElement(
          'div',
          { className: prefixCls + '-column-sorter' },
          _react2["default"].createElement(
            'span',
            { className: prefixCls + '-column-sorter-' + sorterClass, onClick: function onClick() {
                _this3.toggleSortOrder(IconType[iconTypeIndex == 2 ? 0 : iconTypeIndex + 1].order, column);

                if (column.sorterClick) {
                  column.sorterClick(column, IconType[iconTypeIndex].type);
                }
              } },
            _react2["default"].createElement('i', { className: 'uf ' + IconType[iconTypeIndex].icon }),
            _react2["default"].createElement(
              'span',
              null,
              column.orderNum
            )
          )
        );
      }
      column.title = _react2["default"].createElement(
        'span',
        null,
        column.title,
        sortButton
      );
      return column;
    };

    this.defaultSortFn = function (key) {
      return function (a, b) {
        return a[key] >= b[key] ? 1 : -1;
      };
    };

    this.numberSortFn = function (key) {
      return function (a, b) {
        var numberA = parseFloat(a[key]);
        var numberB = parseFloat(b[key]);
        return numberA >= numberB ? 1 : -1;
      };
    };

    this.chineseSortFn = function (key) {
      return function (a, b) {
        return a[key].localeCompare(b[key], 'zh-Hans-CN', { sensitivity: 'accent' });
      };
    };
  }, _temp;
}
module.exports = exports['default'];

/***/ }),

/***/ 1869:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1870:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1871:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1872:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1873:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1874:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1875:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1876:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1877:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1878:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1879:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1880:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1881:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1882:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1883:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1884:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "lib", function() { return /* reexport */ lib_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "CONFIG", function() { return /* reexport */ tableLibs_config["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "EditTableStore", function() { return /* reexport */ EditTableStore_Store; });
__webpack_require__.d(__webpack_exports__, "utils", function() { return /* reexport */ utils; });
__webpack_require__.d(__webpack_exports__, "TableMeta", function() { return /* reexport */ TableMeta; });
__webpack_require__.d(__webpack_exports__, "TableData", function() { return /* reexport */ TableData; });
__webpack_require__.d(__webpack_exports__, "handleSortcolumns", function() { return /* reexport */ handleSortcolumns; });

// NAMESPACE OBJECT: ./src/platform/components/Table/tableLibs/lib/index.js
var lib_namespaceObject = {};
__webpack_require__.r(lib_namespaceObject);
__webpack_require__.d(lib_namespaceObject, "formatColumn", function() { return formatColumn; });
__webpack_require__.d(lib_namespaceObject, "pagination", function() { return pagination_pagination; });
__webpack_require__.d(lib_namespaceObject, "selectRow", function() { return selectRow_selectRow; });
__webpack_require__.d(lib_namespaceObject, "indexCol", function() { return indexCol_indexCol; });
__webpack_require__.d(lib_namespaceObject, "checkCol", function() { return checkCol_checkCol; });
__webpack_require__.d(lib_namespaceObject, "errorCol", function() { return errorCol; });
__webpack_require__.d(lib_namespaceObject, "selectable", function() { return selectable; });
__webpack_require__.d(lib_namespaceObject, "simpleTableModal", function() { return simpleTableModal_simpleTableModal; });
__webpack_require__.d(lib_namespaceObject, "total", function() { return total_total; });
__webpack_require__.d(lib_namespaceObject, "filter", function() { return filterRow; });
__webpack_require__.d(lib_namespaceObject, "excel", function() { return excel_excel; });
__webpack_require__.d(lib_namespaceObject, "columnSort", function() { return columnSort; });
__webpack_require__.d(lib_namespaceObject, "hotkey", function() { return hotkey_hotkey; });
__webpack_require__.d(lib_namespaceObject, "contextMenu", function() { return contextMenu_contextMenu; });

// EXTERNAL MODULE: external {"root":"React","var":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(0);
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_);

// EXTERNAL MODULE: ./src/platform/components/Table/tableLibs/utils/index.js
var utils = __webpack_require__(8);

// EXTERNAL MODULE: external "@platform/template/index"
var index_ = __webpack_require__(12);

// EXTERNAL MODULE: external "@platform/api/index"
var api_index_ = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(5);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/column/Title.js
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

/*
 * @Descripttion: 标题
 * @version: 
 * @Author: bbq
 * @Date: 2020-06-01 09:53:27
 * @LastEditors: bbq
 * @LastEditTime: 2021-02-02 16:50:02
 */





__webpack_require__(1869);

var defaultColor = ['#111111', '#555555', '#111', '#555'];

var Title_ColumnTitle = /*#__PURE__*/function (_Component) {
  _inherits(ColumnTitle, _Component);

  var _super = _createSuper(ColumnTitle);

  function ColumnTitle(props) {
    _classCallCheck(this, ColumnTitle);

    return _super.call(this, props);
  }

  _createClass(ColumnTitle, [{
    key: "getParentTypeTitle",
    value: function getParentTypeTitle() {
      var _this$props = this.props,
          title = _this$props.title,
          attrcode = _this$props.attrcode,
          isParent = _this$props.isParent,
          itemtype = _this$props.itemtype,
          color = _this$props.color,
          unitActive = _this$props.unitActive;
      color = defaultColor.includes(color) ? '' : color;
      var titleClassName = (unitActive ? 'column-title-actived' : '') + '  column-title-wrapper-bg ';
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Fragment"], null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: classnames_default()("column-title-wrapper", {
          'column-title-actived': unitActive
        }),
        style: {
          color: color
        },
        cellSelectorKey: '__tableHeader__'.concat("@", attrcode)
      }, title), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: titleClassName,
        cellSelectorKey: '__tableHeader__'.concat("@", attrcode)
      }));
    }
  }, {
    key: "getNormalTypeTitle",
    value: function getNormalTypeTitle() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          required = _this$props2.required,
          attrcode = _this$props2.attrcode,
          itemtype = _this$props2.itemtype,
          color = _this$props2.color,
          _this$props2$status = _this$props2.status,
          status = _this$props2$status === void 0 ? "browse" : _this$props2$status,
          unitActive = _this$props2.unitActive,
          titleIcon = _this$props2.titleIcon;
      color = defaultColor.includes(color) ? '' : color;
      var titleClassName = (unitActive ? 'column-title-actived' : '') + '  column-title-wrapper-bg ';
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Fragment"], null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: classnames_default()("column-title-wrapper", {
          'column-title-actived': unitActive
        }),
        cellSelectorKey: '__tableHeader__'.concat("@", attrcode),
        fieldid: Object(api_index_["getSysFieldid"])(attrcode),
        style: itemtype === 'number' ? {
          width: '100%',
          textAlign: 'right',
          color: color
        } : {
          color: color
        }
      }, status == 'edit' && required && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "mark-required"
      }, "*"), Object(utils["isFunction"])(title) ? title(this.props) : title), titleIcon && titleIcon(this.props), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: titleClassName,
        cellSelectorKey: '__tableHeader__'.concat("@", attrcode)
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var isParent = this.props.isParent; // console.log(title, 'column title');

      return isParent ? this.getParentTypeTitle() : this.getNormalTypeTitle();
    }
  }]);

  return ColumnTitle;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);


// EXTERNAL MODULE: ./src/platform/components/Table/tableLibs/lib/column/cellIcon.less
var column_cellIcon = __webpack_require__(1871);

// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/column/CellIcon.js
function CellIcon_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CellIcon_typeof = function _typeof(obj) { return typeof obj; }; } else { CellIcon_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CellIcon_typeof(obj); }

function CellIcon_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CellIcon_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CellIcon_createClass(Constructor, protoProps, staticProps) { if (protoProps) CellIcon_defineProperties(Constructor.prototype, protoProps); if (staticProps) CellIcon_defineProperties(Constructor, staticProps); return Constructor; }

function CellIcon_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CellIcon_setPrototypeOf(subClass, superClass); }

function CellIcon_setPrototypeOf(o, p) { CellIcon_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CellIcon_setPrototypeOf(o, p); }

function CellIcon_createSuper(Derived) { var hasNativeReflectConstruct = CellIcon_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CellIcon_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CellIcon_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CellIcon_possibleConstructorReturn(this, result); }; }

function CellIcon_possibleConstructorReturn(self, call) { if (call && (CellIcon_typeof(call) === "object" || typeof call === "function")) { return call; } return CellIcon_assertThisInitialized(self); }

function CellIcon_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CellIcon_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function CellIcon_getPrototypeOf(o) { CellIcon_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CellIcon_getPrototypeOf(o); }

/*
 * @Descripttion: 
 * @version: 
 * @Author: bbq
 * @Date: 2020-06-04 10:14:58
 * @LastEditors: bbq
 * @LastEditTime: 2021-02-25 19:09:45
 */



var TIME_TYPES = ['datepicker', 'NCTZDatePickerStart', 'NCTZDatePickerEnd', 'timepicker', 'datetimepicker', 'rangepicker', 'datePickerNoTimeZone'];

function isWrong(param) {
  return typeof param === 'undefined' || param === null || param === '';
}

var CellIcon_CellIcon = /*#__PURE__*/function (_Component) {
  CellIcon_inherits(CellIcon, _Component);

  var _super = CellIcon_createSuper(CellIcon);

  function CellIcon(props) {
    CellIcon_classCallCheck(this, CellIcon);

    return _super.call(this, props);
  }
  /**
   * 渲染图标
   */


  CellIcon_createClass(CellIcon, [{
    key: "getIcon",
    value: function getIcon() {
      var _this = this;

      var _this$props = this.props,
          itemtype = _this$props.itemtype,
          disabled = _this$props.disabled,
          value = _this$props.value,
          isSaga_status = _this$props.isSaga_status;

      if (itemtype == 'refer') {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
          className: "refer-icon cell-icon align-right iconfont",
          onClick: function onClick(e) {
            var onClick = _this.props.onClick; // e.stopPropagation();

            onClick && onClick('refer', e); // if (isSaga_status) {
            //     return;
            // }
            // this.mousedown && this.handleClick({ referAutoFocus: true });
            // this.mousedown = false;
          }
        }, "\uE6CE");
      } else if (TIME_TYPES.includes(itemtype)) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
          className: "time-icon cell-icon align-right iconfont",
          style: {
            cursor: 'pointer'
          },
          onClick: function onClick(e) {
            var onClick = _this.props.onClick; // e.stopPropagation();

            onClick && onClick('picker', e); // if (isSaga_status) {
            //     return;
            // }
            // this.mousedown && this.handleClick({ timeAutoFocus: true });
            // this.mousedown = false;
          }
        }, "\uE6CD");
      } else if (itemtype == 'select') {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
          className: "select-icon cell-icon align-right iconfont",
          style: {
            cursor: 'pointer'
          },
          onClick: function onClick(e) {
            var onClick = _this.props.onClick; // e.stopPropagation();

            onClick && onClick('select', e); // if (isSaga_status) {
            //     return;
            // }
            // this.mousedown && this.handleClick({ selectAutoFocus: true });
            // this.mousedown = false;
          }
        }, "\uE683");
      } else if (!isWrong(value)) {
        return null;
      } else {// 
      }
    }
  }, {
    key: "render",
    value: function render() {
      // cellIcon 可以考虑自定义
      var _this$props2 = this.props,
          itemtype = _this$props2.itemtype,
          attrcode = _this$props2.attrcode,
          disabled = _this$props2.disabled,
          value = _this$props2.value,
          isSaga_status = _this$props2.isSaga_status,
          cellIcon = _this$props2.cellIcon;

      if (disabled) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          className: "icon-placeholder"
        });
      } // console.log(value, isWrong(value));
      // attrcode === 'numberTest' && console.log(isWrong(value), value)


      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Fragment"], null, this.getIcon());
    }
  }]);

  return CellIcon;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);


// EXTERNAL MODULE: external "@platform/base/index"
var base_index_ = __webpack_require__(3);

// EXTERNAL MODULE: ./src/platform/components/Table/tableLibs/config.js
var tableLibs_config = __webpack_require__(42);

// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/column/Cell.js
function Cell_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Cell_typeof = function _typeof(obj) { return typeof obj; }; } else { Cell_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Cell_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Cell_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Cell_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Cell_createClass(Constructor, protoProps, staticProps) { if (protoProps) Cell_defineProperties(Constructor.prototype, protoProps); if (staticProps) Cell_defineProperties(Constructor, staticProps); return Constructor; }

function Cell_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Cell_setPrototypeOf(subClass, superClass); }

function Cell_setPrototypeOf(o, p) { Cell_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Cell_setPrototypeOf(o, p); }

function Cell_createSuper(Derived) { var hasNativeReflectConstruct = Cell_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Cell_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Cell_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Cell_possibleConstructorReturn(this, result); }; }

function Cell_possibleConstructorReturn(self, call) { if (call && (Cell_typeof(call) === "object" || typeof call === "function")) { return call; } return Cell_assertThisInitialized(self); }

function Cell_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Cell_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Cell_getPrototypeOf(o) { Cell_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Cell_getPrototypeOf(o); }

/*
 * @Descripttion: 单元格
 * @version:
 * @Author: bbq
 * @Date: 2020-06-01 09:53:27
 * @LastEditors: bbq
 * @LastEditTime: 2021-03-04 18:03:05
 *
 *
 * TODO
 * 1、number 类型居右
 * 2、自定义列
 * 3、表头排序  表头筛选
 * 4、固定列加上maxWidth=宽度
 * 5、tooltip
 *
 */










__webpack_require__(1870);

var Cell_TIME_TYPES = {
  datepicker: true,
  NCTZDatePickerStart: true,
  NCTZDatePickerEnd: true,
  timepicker: true,
  datetimepicker: true,
  rangepicker: true,
  datePickerNoTimeZone: true
}; // get nearest parent element matching selector   origin from stackoverflow  add by bbqin

var Closest = function Closest(el, selector) {
  if (!el) {
    return null;
  }

  var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      break;
    }

    el = el.parentElement;
  }

  return el;
};
/**
 * 处理数据
 * @param {*} langJson 
 * @param {*} itemtype 
 * @param {*} value 
 * @param {*} scale 
 * @param {*} attrcode 
 * @param {*} languageMeta 
 * @param {*} values 
 * @param {*} datatype 
 * @param {*} options 
 * @param {*} multiple 
 */


var Cell_handleCellValue = function handleCellValue() {
  var langJson = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var itemtype = arguments.length > 1 ? arguments[1] : undefined;
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var scale = arguments.length > 3 ? arguments[3] : undefined;
  var attrcode = arguments.length > 4 ? arguments[4] : undefined;
  var languageMeta = arguments.length > 5 ? arguments[5] : undefined;
  var values = arguments.length > 6 ? arguments[6] : undefined;
  var datatype = arguments.length > 7 ? arguments[7] : undefined;
  var options = arguments.length > 8 ? arguments[8] : undefined;
  var multiple = arguments.length > 9 ? arguments[9] : undefined;

  switch (true) {
    case itemtype === "number":
      // 表格浏览态加了四舍五入
      // value.value = formatAcuracy(value, scale);
      break;

    case tableLibs_config["a" /* default */]["boolean"].includes(itemtype):
      value = JSON.parse(JSON.stringify(value || {}));
      value.display = value.value == 'Y' || value.value == true ? langJson && langJson['table_yes'] : langJson && langJson['table_no'];
      value.value = value.value == 'Y' || value.value == true ? true : false;
      break;

    default:
      // isNullOrVoid(value.display) ? value.value : value.display || value.value;
      break;
  }

  return value;
}; // 开启了有些问题，record中的属性没有正确检测到，导致框选之类的操作没有正确生效
// @pureRender()


var Cell_Cell = /*#__PURE__*/function (_Component) {
  Cell_inherits(Cell, _Component);

  var _super = Cell_createSuper(Cell);

  function Cell(_props) {
    var _this;

    Cell_classCallCheck(this, Cell);

    _this = _super.call(this, _props); // 单元格state

    _this.getValue = function (props, attrcode, scale, editable, loginLanguage) {
      var getCellValue = props.getCellValue,
          record = props.record,
          rowKey = props.rowKey,
          rowIndex = props.rowIndex,
          itemtype = props.itemtype,
          languageMeta = props.languageMeta,
          _props$langJson = props.langJson,
          langJson = _props$langJson === void 0 ? {} : _props$langJson; // console.log(langJson);

      var value = {};

      if (getCellValue) {
        // 处理下多语的情况 让item里的计算和这外面的计算一致
        if (loginLanguage && itemtype === "residtxt") {
          var loginValue, mainValue;
          Array.isArray(languageMeta) && languageMeta.map(function (_ref) {
            var index = _ref.index,
                languageCode = _ref.languageCode;

            if (languageCode === loginLanguage) {
              // 登录语言值
              var realCode = index == 1 ? attrcode : attrcode + index;
              loginValue = getCellValue({
                attrcode: realCode,
                rowKey: rowKey,
                rowKeyValue: record[rowKey],
                rowIndex: rowIndex
              });
            }

            if (index == 1 || index == '') {
              // 主语言值
              mainValue = getCellValue({
                attrcode: attrcode,
                rowKey: rowKey,
                rowKeyValue: record[rowKey],
                rowIndex: rowIndex
              });
            }
          });

          if (loginValue && loginValue.value) {
            value = loginValue;
          }

          if (mainValue && mainValue.value) {
            value = mainValue;
          }
        } else {
          value = getCellValue({
            rowKey: rowKey,
            rowKeyValue: record[rowKey],
            rowIndex: rowIndex,
            attrcode: attrcode
          });
        }
      } else {
        !record.values && console.error("无效的record格式");
        value = record.values[attrcode];

        if (!value || value.display === undefined || value.value === undefined) {
          // console.error('无效的values格式');
          !value && (value = {});
        }

        value.display = value.display || value.value || "";
        value.value = value.value || "";
      } // 处理一些特殊值 // 放到了item中


      value = !editable ? Cell_handleCellValue(langJson, itemtype, value, scale) : value;
      return value;
    };

    _this.getCellStatus = function (props) {
      var _props$status = props.status,
          status = _props$status === void 0 ? "browse" : _props$status,
          _props$editType = props.editType,
          editType = _props$editType === void 0 ? "toggle" : _props$editType,
          _props$disabled = props.disabled,
          disabled = _props$disabled === void 0 ? false : _props$disabled,
          _props$visible = props.visible,
          visible = _props$visible === void 0 ? true : _props$visible,
          _props$selected = props.selected,
          selected = _props$selected === void 0 ? false : _props$selected,
          _props$focused = props.focused,
          focused = _props$focused === void 0 ? false : _props$focused,
          _props$actived = props.actived,
          actived = _props$actived === void 0 ? false : _props$actived,
          itemtype = props.itemtype,
          render = props.render,
          cellIcon = props.cellIcon,
          _props$disableEditTyp = props.disableEditType,
          disableEditType = _props$disableEditTyp === void 0 ? false : _props$disableEditTyp,
          _props$renderStatus = props.renderStatus,
          renderStatus = _props$renderStatus === void 0 ? "edit" : _props$renderStatus,
          renderItem = props.renderItem,
          _props$renderItems = props.renderItems,
          renderItems = _props$renderItems === void 0 ? {} : _props$renderItems,
          attrcode = props.attrcode,
          record = props.record; // 行属性

      var _ref2 = record || {},
          _ref2$disabled = _ref2.disabled,
          rowDiabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
          _ref2$visible = _ref2.visible,
          rowVisible = _ref2$visible === void 0 ? true : _ref2$visible,
          _ref2$isEdit = _ref2.isEdit,
          rowIsEdit = _ref2$isEdit === void 0 ? false : _ref2$isEdit,
          _ref2$selected = _ref2.selected,
          rowSelected = _ref2$selected === void 0 ? false : _ref2$selected,
          _ref2$focused = _ref2.focused,
          rowFocused = _ref2$focused === void 0 ? false : _ref2$focused; // values


      var values = record.values || record || {}; // 单元格

      var _ref3 = values[attrcode] || {},
          cellDisabled = _ref3.disabled,
          _ref3$visible = _ref3.visible,
          cellVisible = _ref3$visible === void 0 ? true : _ref3$visible,
          _ref3$isEdit = _ref3.isEdit,
          cellIsEdit = _ref3$isEdit === void 0 ? false : _ref3$isEdit,
          _ref3$selected = _ref3.selected,
          cellSelected = _ref3$selected === void 0 ? false : _ref3$selected,
          _ref3$focused = _ref3.focused,
          cellFocused = _ref3$focused === void 0 ? false : _ref3$focused,
          _ref3$actived = _ref3.actived,
          cellActived = _ref3$actived === void 0 ? false : _ref3$actived,
          _ref3$showDrag = _ref3.showDrag,
          showDrag = _ref3$showDrag === void 0 ? false : _ref3$showDrag,
          _ref3$validated = _ref3.validated,
          validated = _ref3$validated === void 0 ? true : _ref3$validated,
          _ref3$leftLine = _ref3.leftLine,
          leftLine = _ref3$leftLine === void 0 ? false : _ref3$leftLine,
          _ref3$rightLine = _ref3.rightLine,
          rightLine = _ref3$rightLine === void 0 ? false : _ref3$rightLine,
          _ref3$bottomLine = _ref3.bottomLine,
          bottomLine = _ref3$bottomLine === void 0 ? false : _ref3$bottomLine,
          _ref3$topLine = _ref3.topLine,
          topLine = _ref3$topLine === void 0 ? false : _ref3$topLine,
          _ref3$focusToEdit = _ref3.focusToEdit,
          focusToEdit = _ref3$focusToEdit === void 0 ? false : _ref3$focusToEdit,
          autoFocus = _ref3.autoFocus; // 错误行状态


      var isSagaStatus = values && values.saga_status && values.saga_status.value === '1'; // 兼容旧代码 TODO

      var oldCellDisabled = Object(utils["isString"])(cellDisabled) ? cellDisabled === "off" : cellDisabled; // 禁用性 如果最外层禁用了 内层不能启用  (!!render || 不确定有用)

      disabled = Object(utils["isBoolean"])(cellDisabled) ? oldCellDisabled : disabled || oldCellDisabled; // 显示性 如果最外层不显示了 内层 不显示

      visible = visible && rowVisible && cellVisible; // 激活性 用于框选 批改等操作

      actived = actived || cellActived; // 表格编辑性

      var tableEdit = status === "edit"; // 编辑的类型

      editType = editType === "toggle" ? "toggle" : "normal"; // 是否选中

      selected = selected || rowSelected || cellSelected; // 是否聚焦

      focused = rowFocused || cellFocused; // 是否是switch 类型

      var isSwitchType = itemtype === "switch_browse" || itemtype === "checkbox_switch" || itemtype === "switch"; // 是否是switch 类型

      var isCheckboxSwitchType = itemtype === "checkbox_switch"; // 单元格的编辑性

      var editable = itemtype === "switch_browse" ? true : tableEdit && !disabled; // 单元格的编辑状态

      var isEdit = rowIsEdit || cellIsEdit;
      editType = itemtype === "switch_browse" || tableEdit && itemtype === "checkbox_switch" || tableEdit && itemtype === "switch" ? "normal" : "toggle"; // cellIcon

      cellIcon = render && itemtype === "customer" || isSwitchType ? "none" : cellIcon || "hover"; // 是否是右图标类型

      var isCellIconInRight = itemtype === "select" || itemtype === "refer" || Cell_TIME_TYPES[itemtype]; // switch_browse 类型 编辑态禁用  浏览态不禁用

      if (itemtype === "switch_browse") {
        if (tableEdit) {
          disabled = true;
        }
      } // label 类型没有编辑态


      if (itemtype === "label") {
        // disabled = true;
        editable = false;
      } // attachment 类型没有编辑态


      var isAttachment = false,
          disableModify = false;

      if (itemtype === "attachment") {
        editable && (disableModify = true);
        isAttachment = true;
        editable = true;
        editType = 'normal'; // 编辑图标

        cellIcon = 'none';
      } else if (disableEditType) {
        // 给列表用
        editable = false;
        editType = 'toggle';
      } // 记录当前单元格渲染状态


      var renderType = 'normal';
      renderItem = renderItems[attrcode];

      if (renderItem) {
        renderType = 'renderInItem';
      } else if (render && itemtype === "customer") {
        renderType = 'renderInCustomer';
      } else if (render && renderStatus == 'edit') {
        renderType = 'renderInEdit';
      } else if (render && renderStatus == 'browse') {
        renderType = 'renderInBrowse';
      }

      var renderItemInEdit = false;

      if (disableEditType) {
        renderItemInEdit = false;
      } else if (tableEdit && itemtype != 'label' && itemtype != 'customer' || itemtype === "switch_browse") {
        renderItemInEdit = true;
      }

      return {
        disabled: disabled,
        tableEdit: tableEdit,
        isEdit: isEdit,
        editable: editable,
        editType: editType,
        visible: visible,
        selected: selected,
        focused: focused,
        actived: actived,
        showDrag: showDrag,
        cellIcon: cellIcon,
        isAttachment: isAttachment,
        disableModify: disableModify,
        validated: validated,
        leftLine: leftLine,
        rightLine: rightLine,
        bottomLine: bottomLine,
        topLine: topLine,
        focusToEdit: focusToEdit,
        renderType: renderType,
        isSwitchType: isSwitchType,
        isCheckboxSwitchType: isCheckboxSwitchType,
        autoFocus: autoFocus,
        isSagaStatus: isSagaStatus,
        isCellIconInRight: isCellIconInRight,
        renderItemInEdit: renderItemInEdit
      };
    };

    _this.getCellUI = function () {
      var _this$props = _this.props,
          record = _this$props.record,
          rowIndex = _this$props.rowIndex,
          rowKey = _this$props.rowKey,
          attrcode = _this$props.attrcode,
          itemtype = _this$props.itemtype,
          hyperlinkflag = _this$props.hyperlinkflag,
          onCellHyperlinkTo = _this$props.onCellHyperlinkTo,
          _this$props$renderSta = _this$props.renderStatus,
          renderStatus = _this$props$renderSta === void 0 ? "edit" : _this$props$renderSta,
          _renderItem = _this$props.renderItem,
          _this$props$renderIte = _this$props.renderItems,
          renderItems = _this$props$renderIte === void 0 ? {} : _this$props$renderIte,
          whichKeyToDisplay = _this$props.whichKeyToDisplay,
          UIProps = _this$props.UIProps,
          setCellProps = _this$props.setCellProps,
          onTableCellClick = _this$props.onTableCellClick,
          onBeforeEvent = _this$props.onBeforeEvent,
          _onAfterEvent = _this$props.onAfterEvent,
          onCellStatusChange = _this$props.onCellStatusChange,
          setCellValue = _this$props.setCellValue,
          getCellValue = _this$props.getCellValue,
          render = _this$props.render,
          store = _this$props.store,
          scale = _this$props.scale,
          loginLanguage = _this$props.loginLanguage,
          __col = _this$props.__col,
          onEnter = _this$props.onEnter,
          hotKeyWithArrow = _this$props.hotKeyWithArrow,
          className = _this$props.className,
          maxlength = _this$props.maxlength,
          others = _objectWithoutProperties(_this$props, ["record", "rowIndex", "rowKey", "attrcode", "itemtype", "hyperlinkflag", "onCellHyperlinkTo", "renderStatus", "renderItem", "renderItems", "whichKeyToDisplay", "UIProps", "setCellProps", "onTableCellClick", "onBeforeEvent", "onAfterEvent", "onCellStatusChange", "setCellValue", "getCellValue", "render", "store", "scale", "loginLanguage", "__col", "onEnter", "hotKeyWithArrow", "className", "maxlength"]); // 属性


      var _this$cellStatus = _this.cellStatus,
          disabled = _this$cellStatus.disabled,
          tableEdit = _this$cellStatus.tableEdit,
          editType = _this$cellStatus.editType,
          editable = _this$cellStatus.editable,
          disableModify = _this$cellStatus.disableModify,
          validated = _this$cellStatus.validated,
          autoFocus = _this$cellStatus.autoFocus,
          isSagaStatus = _this$cellStatus.isSagaStatus,
          renderItemInEdit = _this$cellStatus.renderItemInEdit,
          isSwitchType = _this$cellStatus.isSwitchType; // 值

      var rowKeyValue = _this.rowKeyValue;
      var cellScale = _this.cellScale;
      var cellValue = _this.cellValue; // 取一下

      _renderItem = renderItems[attrcode]; // console.log(renderItem, renderItems);
      // 自定义单元格

      if (render && itemtype === "customer") {
        // 没有设置单元格状态  比如customer列
        var customRender = render(cellValue, record, rowIndex, store);

        if (!customRender) {
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null);
        }

        if (! /*#__PURE__*/Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["isValidElement"])(customRender)) {
          // 不是标准的react组件
          if (Object(utils["isObject"])(customRender)) {
            console.error('invalid react element', customRender);
            customRender = JSON.stringify(customRender);
          }

          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            className: "add-customer-cell un-react-element"
          }, customRender);
        } // 还有一些事件要合并进来 TODO


        var content = _objectSpread(_objectSpread({}, customRender), {}, {
          props: _objectSpread(_objectSpread({}, customRender.props), {}, {
            renderInTable: true
          })
        });

        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", __col, /*#__PURE__*/Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["cloneElement"])(content));
      } // 超链接


      if (!render && hyperlinkflag && !editable && !tableEdit) {
        // 不在浏览态显示 TODO style 样式去除
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          style: {
            overflow: "hidden",
            display: 'flex',
            width: '100%'
          }
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("a", {
          href: "javascript:;",
          className: "cell-hyper",
          onClick: function onClick(e) {
            e.stopPropagation(); //超链接跳转

            Object(utils["isFunction"])(onCellHyperlinkTo) && onCellHyperlinkTo(record, attrcode, cellValue);
          }
        }, cellValue.display || cellValue.value || ""));
      } // let ppp = {};
      // Array.from(new Array(50)).map((item, i) => { ppp['a' + i] = "a" + i })
      // console.time('jiegou1')
      // let a = <div {...ppp}> </div>;
      // console.timeEnd('jiegou1')


      var autoOpen = _this.state.autoOpen ? {
        open: _this.state.autoOpen,
        autoShow: _this.state.autoOpen
      } : {};
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Item"], _extends({}, others, autoOpen, {
        autoFocus: autoFocus,
        isCheckChinese: !!maxlength,
        maxlength: maxlength,
        renderInTable: true,
        disabled: disabled,
        scale: cellScale,
        browse: !editable || isSagaStatus,
        whichKeyToDisplay: whichKeyToDisplay,
        itemtype: itemtype,
        attrcode: attrcode // tabIndex={!disabled && editable && !isSagaStatus ? 0 : -1}
        ,
        editType: editType,
        disableModify: disableModify,
        onEnter: onEnter,
        hotKeyWithArrow: hotKeyWithArrow,
        setFieldValue: function setFieldValue(_ref4) {
          var attrcode = _ref4.attrcode,
              value = _ref4.value;
          // 这里就是onChange
          return Object(utils["isFunction"])(setCellValue) && setCellValue({
            record: record,
            rowKey: rowKey,
            rowKeyValue: rowKeyValue,
            rowIndex: rowIndex,
            attrcode: attrcode,
            value: value,
            column: _objectSpread(_objectSpread({}, __col), _this.cellStatus),
            triggerType: _this.defaultItemCreator["valueChangePropName"] || "onChange"
          });
        },
        getFieldValue: function getFieldValue(_ref5) {
          var attrcode = _ref5.attrcode;
          return _this.getValue(_this.props, attrcode, _this.cellScale, editable);
        },
        onBeforeEvent: /*#__PURE__*/function () {
          var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref6) {
            var value, event, isContinue;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    value = _ref6.value, event = _ref6.event;
                    store && store.setCellProps(rowKeyValue, attrcode, {
                      validated: true
                    }, false); // 有一些操作要放在这里处理 比如值的转换等等
                    // 清理错误校验的样式

                    validated === false && store && store.setCellProps(rowKeyValue, attrcode, {
                      validated: true
                    }, false);

                    if (!Object(utils["isFunction"])(onBeforeEvent)) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 6;
                    return onBeforeEvent({
                      record: record,
                      rowKey: rowKey,
                      rowKeyValue: rowKeyValue,
                      rowIndex: rowIndex,
                      attrcode: attrcode,
                      value: value,
                      event: event,
                      column: _objectSpread(_objectSpread({}, __col), _this.cellStatus),
                      triggerType: _this.defaultItemCreator["beforeEventTrigger"] || "onFocus",
                      validated: validated
                    });

                  case 6:
                    _context.t0 = _context.sent;
                    isContinue = _context.t0 !== false;
                    return _context.abrupt("return", isContinue);

                  case 9:
                    return _context.abrupt("return", true);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref7.apply(this, arguments);
          };
        }(),
        onAfterEvent: function onAfterEvent(_ref8) {
          var value = _ref8.value,
              oldValue = _ref8.oldValue,
              componentValue = _ref8.componentValue,
              event = _ref8.event;

          _this.setState({
            autoOpen: false
          }); // 有一些操作要放在这里处理 比如值的转换等等


          Object(utils["isFunction"])(_onAfterEvent) && _onAfterEvent({
            record: record,
            rowKey: rowKey,
            rowKeyValue: rowKeyValue,
            rowIndex: rowIndex,
            attrcode: attrcode,
            value: value,
            componentValue: componentValue,
            event: event,
            column: _objectSpread(_objectSpread({}, __col), _this.cellStatus),
            oldValue: oldValue,
            triggerType: _this.defaultItemCreator["afterEventTrigger"] || "onBlur"
          });
        },
        onStatusChange: function onStatusChange(_ref9) {
          var isEdit = _ref9.isEdit;
          store && store.setCellProps(rowKeyValue, attrcode, {
            focusToEdit: isEdit
          }, true);

          _this.setState({
            autoOpen: !isEdit ? false : _this.state.autoOpen,
            showIcon: !isEdit
          });

          if (Object(utils["isFunction"])(onCellStatusChange)) {
            onCellStatusChange({
              isEdit: isEdit,
              column: _objectSpread(_objectSpread({}, __col), _this.cellStatus),
              rowIndex: rowIndex,
              attrcode: attrcode
            });
          }
        },
        path: [rowKeyValue, attrcode] // 自定义单元格
        ,
        renderItem: function renderItem(_ref10) {
          var isEdit = _ref10.isEdit;

          if (render && renderStatus === "customer") {
            var cellEdit = isEdit || isSwitchType;
            return render(cellValue, record, rowIndex, store, renderItemInEdit ? cellEdit ? "edit" : "editBrowse" : "browse");
          } // 如果表格是编辑态


          if (renderItemInEdit) {
            // 单元格编辑态
            var _cellEdit = isEdit || isSwitchType;

            if (_cellEdit && render && renderStatus === "edit") {
              return render(cellValue, record, rowIndex, store);
            }

            if (!_cellEdit && render && renderStatus === "editBrowse") {
              return render(cellValue, record, rowIndex, store);
            } // 单元格编辑态


            if (_cellEdit && _renderItem) {
              return Object(utils["isFunction"])(_renderItem) ? _renderItem.call(null, cellValue, record, rowIndex, store) : _renderItem;
            }
          } else {
            // 如果表格是浏览态
            // 单元格自定义渲染了
            // 如果表格是编辑态 那么label类型和customer类型也可以走这里逻辑
            if (render && renderStatus === "browse") {
              var _customRender = render(cellValue, record, rowIndex, store);

              if (! /*#__PURE__*/Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["isValidElement"])(_customRender)) {
                if (Object(utils["isObject"])(_customRender)) {
                  console.error('invalid react element', _customRender);
                  _customRender = JSON.stringify(_customRender);
                }

                return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
                  className: "add-customer-cell un-react-element"
                }, _customRender);
              }

              return _customRender;
            }
          } // console.log(isEdit, renderItem, render, renderStatus)

        }
      }));
    };

    _this.handleMouseEnter = function () {
      if (_this.cellDom) {
        var showTip = _this.state.showTip;
        var tipNode = null;
        tipNode = _this.cellDom.getElementsByClassName('template-item-wrapper-inner')[0];

        if (tipNode) {
          if ((tipNode.scrollWidth > tipNode.clientWidth || tipNode.offsetHeight > 30) && showTip === false) {
            var tooltipDelay;
            tipNode.scrollWidth > 4000 ? tooltipDelay = false : tooltipDelay = true;

            _this.setState({
              showTip: true,
              tooltipDelay: tooltipDelay
            });
          }
        }
      }
    };

    _this.onCellClick = function (tag, e) {
      if (_this.cellDom) {
        var $focusElement = _this.cellDom.querySelector('.template-item-wrapper.template-item-browse[tabindex="0"]');

        if (tag == 'picker' || tag == 'select' || tag == 'refer') {
          _this.setState({
            autoOpen: true
          });
        }

        if ($focusElement) {
          // 自动增行 触发编辑前事件
          $focusElement.ncExecuteFocus = true; // console.log($focusElement, 'xxx');

          _this.cellDom.contains(e.target) && $focusElement.focus(); // TODO 可能会有内存泄露

          $focusElement.ncExecuteFocus = false;
        }
      }
    };

    _this.state = {
      tipStatus: false,
      autoOpen: false,
      showIcon: true,
      showTip: false
    }; // 获取事件类型

    _this.defaultItemCreator = Object(index_["itemCreator"])({
      itemtype: _props.itemtype
    }) || {}; // 单元格属性 与 props 有关

    _this.cellStatus = _this.getCellStatus(_props); // rowKeyValue

    var _record = _props.record,
        _attrcode = _props.attrcode,
        _scale = _props.scale,
        _rowKey = _props.rowKey,
        _store = _props.store,
        _render = _props.render,
        _itemtype = _props.itemtype,
        _loginLanguage = _props.loginLanguage;
    _this.rowKeyValue = Object(utils["isObject"])(_record[_rowKey]) ? _record[_rowKey].value : _record[_rowKey];

    if (_render && _itemtype === "customer") {
      _this.unregister = _store === null || _store === void 0 ? void 0 : _store.registerField([_this.rowKeyValue, 'sp_col_customer__', _attrcode], Cell_assertThisInitialized(_this));
    } // 精度


    _this.cellScale = _this.getScale(_record, _attrcode, _scale); // 值

    _this.cellValue = _this.getValue(_props, _attrcode, _this.cellScale, _this.cellStatus.editable, _loginLanguage);
    return _this;
  }

  Cell_createClass(Cell, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      // 单元格属性 与 props 有关
      this.cellStatus = this.getCellStatus(nextProps); // rowKeyValue

      var record = nextProps.record,
          attrcode = nextProps.attrcode,
          scale = nextProps.scale,
          rowKey = nextProps.rowKey,
          store = nextProps.store,
          render = nextProps.render,
          itemtype = nextProps.itemtype,
          loginLanguage = nextProps.loginLanguage;
      var rowKeyValue = Object(utils["isObject"])(record[rowKey]) ? record[rowKey].value : record[rowKey];

      if (this.rowKeyValue !== rowKeyValue) {
        if (render && itemtype === "customer") {
          this.unregister(); // 用于setCellValue 等操作 更新自定义列

          this.unregister = store === null || store === void 0 ? void 0 : store.registerField([rowKeyValue, 'sp_col_customer__', attrcode], this);
        }

        this.rowKeyValue = rowKeyValue;
      } // 精度


      this.cellScale = this.getScale(record, attrcode, scale); // 值

      this.cellValue = this.getValue(nextProps, attrcode, this.cellScale, this.cellStatus.editable, loginLanguage);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // 计算状态
      if (this.cellStatus.isEdit) {
        var _this$props2 = this.props,
            attrcode = _this$props2.attrcode,
            store = _this$props2.store;
        var $focusElement = this.cellDom && this.cellDom.querySelector('[tabindex="0"]');

        if ($focusElement && !Closest($focusElement, '.u-table-row-fixed-columns-in-body')) {
          // 自动增行 触发编辑前事件
          $focusElement.ncExecuteFocus = true;
          $focusElement.focus();
          $focusElement.ncExecuteFocus = false;
          store && store.setCellProps(this.rowKeyValue, attrcode, {
            isEdit: undefined
          }, false);
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {// 更新渲染后
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$unregister;

      this.cellDom = null;
      this.defaultItemCreator = null;
      this.rowKeyValue = null;
      this.cellValue = null;
      (_this$unregister = this.unregister) === null || _this$unregister === void 0 ? void 0 : _this$unregister.call(this);
    }
    /**
     * @description: 规范精度
     * @param {type}
     * @return {type}
     */

  }, {
    key: "getScale",
    value: function getScale(record, attrcode, scale) {
      var values = record.values || record || {};
      var value = values[attrcode];
      var valueScale = Object(utils["isObject"])(value) ? value.scale : scale;
      valueScale = !Object(utils["isWrong"])(valueScale) && valueScale != "-1" ? +valueScale : +scale; // console.log(valueScale, attrcode);

      return valueScale || 0;
    }
    /**
     * @description: 处理数据
     * @param {type}
     * @return:
     */

  }, {
    key: "getCellClassName",

    /**
     * @description:
     * @param {type}
     * @return:
     */
    value: function getCellClassName() {
      var _this$props3 = this.props,
          record = _this$props3.record,
          rowIndex = _this$props3.rowIndex,
          attrcode = _this$props3.attrcode,
          cellClassName = _this$props3.cellClassName;
      var cls = " ";

      if (Object(utils["isFunction"])(cellClassName)) {
        cls = cellClassName({
          record: record,
          rowIndex: rowIndex,
          attrcode: attrcode
        });
      } else {
        cls = cellClassName;
      }

      return ' ' + (cls || '') + ' ';
    }
    /**
     * @description: 获取单元格UI
     * @param {type}
     * @return:
     */

  }, {
    key: "render",
    value: function render() {
      var _this$cellValue$value,
          _this2 = this,
          _this$cellValue$value2;

      var cellUI = this.getCellUI();

      if (!cellUI) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null);
      }

      var _this$props4 = this.props,
          record = _this$props4.record,
          rowIndex = _this$props4.rowIndex,
          _this$props4$bodyDisp = _this$props4.bodyDisplayInRow,
          bodyDisplayInRow = _this$props4$bodyDisp === void 0 ? true : _this$props4$bodyDisp,
          attrcode = _this$props4.attrcode,
          itemtype = _this$props4.itemtype,
          onTableCellClick = _this$props4.onTableCellClick,
          onCellKeyDown = _this$props4.onCellKeyDown,
          onCellFocus = _this$props4.onCellFocus,
          onCellMouseDown = _this$props4.onCellMouseDown,
          onEnter = _this$props4.onEnter,
          hotKeyWithArrow = _this$props4.hotKeyWithArrow,
          tableId = _this$props4.tableId,
          __col = _this$props4.__col,
          _this$props4$langJson = _this$props4.langJson,
          langJson = _this$props4$langJson === void 0 ? {} : _this$props4$langJson; // 计算状态

      var _this$cellStatus2 = this.cellStatus,
          disabled = _this$cellStatus2.disabled,
          tableEdit = _this$cellStatus2.tableEdit,
          editable = _this$cellStatus2.editable,
          selected = _this$cellStatus2.selected,
          focused = _this$cellStatus2.focused,
          cellIcon = _this$cellStatus2.cellIcon,
          actived = _this$cellStatus2.actived,
          showDrag = _this$cellStatus2.showDrag,
          validated = _this$cellStatus2.validated,
          focusToEdit = _this$cellStatus2.focusToEdit,
          leftLine = _this$cellStatus2.leftLine,
          rightLine = _this$cellStatus2.rightLine,
          bottomLine = _this$cellStatus2.bottomLine,
          topLine = _this$cellStatus2.topLine,
          renderType = _this$cellStatus2.renderType,
          isCheckboxSwitchType = _this$cellStatus2.isCheckboxSwitchType,
          isSagaStatus = _this$cellStatus2.isSagaStatus,
          isCellIconInRight = _this$cellStatus2.isCellIconInRight; // 单元格className

      var hasCellIcon = tableEdit && this.state.showIcon && cellIcon !== 'none';
      var hasValue = !Object(utils["isWrong"])((_this$cellValue$value = this.cellValue.value) !== null && _this$cellValue$value !== void 0 ? _this$cellValue$value : this.cellValue.display);
      var cellStyle = (tableEdit ? ' table-status-edit' : '') + (actived ? ' table-cell-actived' : '') + (focusToEdit ? ' table-cell-focus-blue' : '') + (focused ? ' table-cell-focused' : '') + (disabled ? ' table-cell-disabled' : '') + (editable ? ' table-cell-edit' : '') + (validated === false ? ' table-cell-valid-failed' : '') + '';
      var cellBgBdClassName = " table-cell-wrapper-bg " + (topLine ? ' table-cell-line-top' : '') + (leftLine ? ' table-cell-line-left' : '') + (rightLine ? ' table-cell-line-right' : '') + (bottomLine ? ' table-cell-line-bottom' : '') + cellStyle;
      var cellClassName = ' table-cell-wrapper ' + this.getCellClassName() + ' cell-icon-' + cellIcon + (selected ? ' table-cell-selected' : '') + cellStyle + (isCheckboxSwitchType ? ' table-cell-checkbox-switch' : '') + (hasCellIcon ? ' table-cell-show-icon' : ''); // (hasCellIcon && hasValue && !isCellIconInRight ? ' table-cell-icon-left ' : ' ');
      // 给框选用

      var cellSelectorKey = this.rowKeyValue + '@' + attrcode; // 给快捷键用 TODO 还有结构要优化一下

      var hotKeyPrefix = tableLibs_config["a" /* default */].hotKeyModuleIdPrefix + '-' + tableId + '-' + attrcode + '-' + rowIndex;
      var autoFocusIdentifier = {};
      autoFocusIdentifier[hotKeyPrefix] = hotKeyPrefix; // cellContentClassName

      var cellContentClassName = " cell-content " + (bodyDisplayInRow ? ' cell-ellipsis' : '') + (editable ? ' cell-edit' : '') + (!bodyDisplayInRow ? ' cell-fold-display' : '') + (itemtype === 'number' ? ' number-right ' : ' ');
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Fragment"], null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", _extends({
        className: cellBgBdClassName,
        cellSelectorKey: cellSelectorKey,
        "data-code": attrcode
      }, autoFocusIdentifier), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "left-line line-line-line"
      }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "right-line line-line-line"
      }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "top-line line-line-line"
      }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "bottom-line line-line-line"
      })), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", _extends({
        fieldid: Object(api_index_["getSysFieldid"])(attrcode)
      }, autoFocusIdentifier, {
        className: cellClassName,
        ref: function ref(dom) {
          _this2.cellDom = dom;
        },
        onMouseEnter: this.handleMouseEnter,
        onClick: function onClick(e) {
          if (isSagaStatus) {
            return;
          } // 这里主要给自动化测试用


          _this2.onCellClick('wrapper', e);

          if (onTableCellClick) {
            onTableCellClick(record, rowIndex, attrcode, __col, e);
          } // setCellStatus && setCellStatus({ rowKey, rowKeyValue, rowIndex, attrcode });

        } // 给框选之类的使用
        ,
        cellSelectorKey: cellSelectorKey,
        "data-type": itemtype,
        "data-code": attrcode,
        "data-renderType": renderType,
        onKeyDown: function onKeyDown(e) {
          // console.log('cell onKeyDow trigger', e);
          if (!focusToEdit && e.key === 'Enter') {
            e.stopPropagation();
            onEnter({
              e: e,
              target: e.target,
              itemType: itemtype
            });
          }

          if (!focusToEdit && Object(api_index_["isArrowKeyDown"])(e)) {
            e.stopPropagation();
            hotKeyWithArrow && hotKeyWithArrow({
              e: e,
              target: e.target,
              itemType: itemtype
            });
          }

          return onCellKeyDown && onCellKeyDown(record, rowIndex, attrcode, __col, e);
        } // 快捷键
        ,
        onMouseDown: function onMouseDown(e) {
          return onCellMouseDown && onCellMouseDown(record, rowIndex, attrcode, __col, e);
        } // 还需 !isEdit
        // tabIndex={!disabled && editable ? '0' : '-1'}
        ,
        onFocus: function onFocus(e) {
          // console.log('onfocus trigger');
          // 添加一个样式
          _this2.cellDom && (_this2.cellDom.className += ' table-cell-focused');
          return onCellFocus && onCellFocus(record, rowIndex, attrcode, __col, e);
        },
        onBlur: function onBlur(e) {
          // console.log('onblur trigger', e);
          _this2.cellDom && (_this2.cellDom.className = _this2.cellDom.className.replace('table-cell-focused', ''));
        }
      }), editable || !this.state.showTip ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: cellContentClassName
      }, cellUI) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tooltip"], {
        placement: "top",
        overlay: Object(utils["handleBrowseData"])(itemtype, this.cellValue.display, this.cellValue.value, this.cellScale, attrcode, __col.languageMeta, record.values || record, __col.datatype, __col.options, __col.multiple, langJson),
        className: "tooltip-word-color high-table-tooltip",
        delay: this.state.tooltipDelay ? 1 : undefined,
        inverse: true
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: cellContentClassName
      }, cellUI)), editable && !isSagaStatus && this.state.showIcon && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(CellIcon_CellIcon, {
        itemtype: itemtype,
        attrcode: attrcode,
        value: (_this$cellValue$value2 = this.cellValue.value) !== null && _this$cellValue$value2 !== void 0 ? _this$cellValue$value2 : this.cellValue.display,
        disabled: disabled,
        cellIcon: cellIcon,
        onClick: this.onCellClick
      })), !disabled && showDrag && !isSagaStatus && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        cellDrag: "on",
        cellSelectorKey: cellSelectorKey,
        className: "table-cell-drag-icon iconfont"
      }));
    }
  }]);

  return Cell;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);

/* harmony default export */ var column_Cell = (Cell_Cell);
// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/column/index.js
function column_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { column_typeof = function _typeof(obj) { return typeof obj; }; } else { column_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return column_typeof(obj); }

function column_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = column_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function column_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function column_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function column_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function column_createClass(Constructor, protoProps, staticProps) { if (protoProps) column_defineProperties(Constructor.prototype, protoProps); if (staticProps) column_defineProperties(Constructor, staticProps); return Constructor; }

function column_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) column_setPrototypeOf(subClass, superClass); }

function column_setPrototypeOf(o, p) { column_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return column_setPrototypeOf(o, p); }

function column_createSuper(Derived) { var hasNativeReflectConstruct = column_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = column_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = column_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return column_possibleConstructorReturn(this, result); }; }

function column_possibleConstructorReturn(self, call) { if (call && (column_typeof(call) === "object" || typeof call === "function")) { return call; } return column_assertThisInitialized(self); }

function column_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function column_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function column_getPrototypeOf(o) { column_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return column_getPrototypeOf(o); }

function column_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function column_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { column_ownKeys(Object(source), true).forEach(function (key) { column_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { column_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function column_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function column_extends() { column_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return column_extends.apply(this, arguments); }

/*
 * @Descripttion: 列创建
 * @version: 
 * @Author: bbq
 * @Date: 2020-06-02 16:29:54
 * @LastEditors: bbq
 * @LastEditTime: 2021-03-08 10:41:54
 */







/**
 * @name: 
 * @test: test font
 * @msg: 创建列属性
 * @param {type} 
 * @return: 
 */

function createColumns(columns, others) {
  // TODO 对columns 数据要进行格式化  可以在放入Store时执行
  // 过滤不可见的列
  columns = Object(utils["filterColumns"])(columns, function (item) {
    !item && console.warn('columns include empty element, please check columns data');
    return item.visible;
  }); // 预处理一些状态和属性，避免单元格渲染时处理耗费大量时间

  var loginLanguage = Object(api_index_["getLangCode"])(); //  返回渲染列

  return columns.map(function (item) {
    if (item.children) {
      return {
        required: false,
        className: (item.className || '') + ' parent-column',
        key: item.attrcode,
        dataIndex: item.dataIndex || item.attrcode,
        title: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Title_ColumnTitle, column_extends({}, item, {
          title: item.title || item.label
        }, others, {
          attrcode: item.attrcode || item.key,
          isParent: true
        })),
        children: createColumns(item.children, others)
      };
    }

    if (Object(utils["isWrong"])(item.width)) {
      if (item.itemtype === 'datetimepicker') {
        item.width = '240px';
      } else if (item.itemtype === 'rangepicker') {
        item.width = '390px';
      } else if (tableLibs_config["a" /* default */].timeTypes.includes(item.itemtype)) {
        item.width = '160px';
      } else {
        item.width = '120px';
      }
    }

    return column_objectSpread(column_objectSpread({}, item), {}, {
      required: false,
      // 列的className
      className: (item.className ? item.className : ' ') + (item.unitActive ? ' column-header-active ' : ' ') + (item.itemtype === 'number' ? ' column-type-number ' : ' '),
      key: item.key || item.attrcode,
      redstar: item.required,
      //给列设置用
      dataIndex: item.dataIndex || item.attrcode,
      title: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Title_ColumnTitle, column_extends({}, item, {
        title: item.title || item.label
      }, others, {
        attrcode: item.attrcode || item.key
      })),
      render: function render(text, record, index) {
        var __col = item;
        item.key = item.key || item.attrcode; // return <div />;

        return {
          children: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(column_Cell, column_extends({}, item, others, {
            loginLanguage: loginLanguage,
            cellIcon: others.cellIcon || item.cellIcon // 合并 renderStatus  避免报错
            ,
            renderStatus: others.renderStatus || item.renderStatus,
            record: record,
            text: text,
            attrcode: item.attrcode || item.key,
            rowIndex: index,
            __col: __col
          })),
          props: Object(utils["isFunction"])(others.mergeCell) ? others.mergeCell({
            record: record,
            index: index,
            attrcode: item.attrcode
          }) : {} // 合并单元格

        };
      }
    });
  });
}
/**
 * 创建标准化表格
 * @param {*} Table 
 */

function formatColumn(Table) {
  if (!Table) {
    console.error('缺少Table组件');
  } // TODO


  Table = Object(index_["ItemProvider"])(Table);
  return /*#__PURE__*/function (_Component) {
    column_inherits(MetaTable, _Component);

    var _super = column_createSuper(MetaTable);

    function MetaTable(props) {
      column_classCallCheck(this, MetaTable);

      return _super.call(this, props);
    }

    column_createClass(MetaTable, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            columns = _this$props.columns,
            langJson = _this$props.langJson,
            getCellProps = _this$props.getCellProps,
            setCellProps = _this$props.setCellProps,
            onTableCellClick = _this$props.onTableCellClick,
            onBeforeEvent = _this$props.onBeforeEvent,
            onAfterEvent = _this$props.onAfterEvent,
            setCellValue = _this$props.setCellValue,
            getCellValue = _this$props.getCellValue,
            onCellStatusChange = _this$props.onCellStatusChange,
            _rowKey = _this$props.rowKey,
            name = _this$props.name,
            tableId = _this$props.tableId,
            status = _this$props.status,
            bodyDisplayInRow = _this$props.bodyDisplayInRow,
            cellClassName = _this$props.cellClassName,
            mergeCell = _this$props.mergeCell,
            store = _this$props.store,
            onCellHyperlinkTo = _this$props.onCellHyperlinkTo,
            cellIcon = _this$props.cellIcon,
            renderItems = _this$props.renderItems,
            renderStatus = _this$props.renderStatus,
            onCellKeyDown = _this$props.onCellKeyDown,
            onCellMouseDown = _this$props.onCellMouseDown,
            onCellFocus = _this$props.onCellFocus,
            disableEditType = _this$props.disableEditType,
            fieldid = _this$props.fieldid,
            hotKeyWithArrow = _this$props.hotKeyWithArrow,
            onEnter = _this$props.onEnter,
            others = column_objectWithoutProperties(_this$props, ["columns", "langJson", "getCellProps", "setCellProps", "onTableCellClick", "onBeforeEvent", "onAfterEvent", "setCellValue", "getCellValue", "onCellStatusChange", "rowKey", "name", "tableId", "status", "bodyDisplayInRow", "cellClassName", "mergeCell", "store", "onCellHyperlinkTo", "cellIcon", "renderItems", "renderStatus", "onCellKeyDown", "onCellMouseDown", "onCellFocus", "disableEditType", "fieldid", "hotKeyWithArrow", "onEnter"]);

        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: "use-column-component",
          fieldid: Object(api_index_["getSysFieldid"])("".concat(fieldid || name, "_table"))
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Table, column_extends({
          rowKey: function rowKey(record) {
            return Object(utils["isObject"])(record[_rowKey]) ? record[_rowKey].value : record[_rowKey];
          },
          bodyDisplayInRow: bodyDisplayInRow,
          columns: createColumns(columns, {
            getCellProps: getCellProps,
            setCellProps: setCellProps,
            onTableCellClick: onTableCellClick,
            onBeforeEvent: onBeforeEvent,
            onAfterEvent: onAfterEvent,
            onCellStatusChange: onCellStatusChange,
            setCellValue: setCellValue,
            getCellValue: getCellValue,
            rowKey: _rowKey,
            status: status,
            bodyDisplayInRow: bodyDisplayInRow,
            cellClassName: cellClassName,
            mergeCell: mergeCell,
            store: store,
            onCellHyperlinkTo: onCellHyperlinkTo,
            cellIcon: cellIcon,
            renderItems: renderItems,
            renderStatus: renderStatus,
            onCellKeyDown: onCellKeyDown,
            onCellMouseDown: onCellMouseDown,
            onCellFocus: onCellFocus,
            tableId: tableId,
            langJson: langJson,
            disableEditType: disableEditType,
            hotKeyWithArrow: hotKeyWithArrow,
            onEnter: onEnter
          }),
          store: store,
          tableId: tableId,
          name: name,
          langJson: langJson,
          hotKeyWithArrow: hotKeyWithArrow,
          onEnter: onEnter // 设置单元格样式
          // getCellClassName={(record, index, column) => {
          //     let { attrcode } = column;
          //     // console.log(record, index, column);
          //     return `-td-${attrcode}-${index}`;
          // }}

        }, others)));
      }
    }]);

    return MetaTable;
  }(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);
}
// EXTERNAL MODULE: external {"root":"ReactDOM","var":"ReactDOM","commonjs":"react-dom","commonjs2":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_ = __webpack_require__(6);
var external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_);

// EXTERNAL MODULE: ./src/platform/components/Table/tableLibs/lib/pagination/index.less
var pagination = __webpack_require__(1872);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/pagination/index.js
function pagination_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pagination_typeof = function _typeof(obj) { return typeof obj; }; } else { pagination_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pagination_typeof(obj); }

function pagination_extends() { pagination_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return pagination_extends.apply(this, arguments); }

function pagination_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pagination_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pagination_ownKeys(Object(source), true).forEach(function (key) { pagination_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pagination_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pagination_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function pagination_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pagination_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pagination_createClass(Constructor, protoProps, staticProps) { if (protoProps) pagination_defineProperties(Constructor.prototype, protoProps); if (staticProps) pagination_defineProperties(Constructor, staticProps); return Constructor; }

function pagination_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pagination_setPrototypeOf(subClass, superClass); }

function pagination_setPrototypeOf(o, p) { pagination_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pagination_setPrototypeOf(o, p); }

function pagination_createSuper(Derived) { var hasNativeReflectConstruct = pagination_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = pagination_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = pagination_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return pagination_possibleConstructorReturn(this, result); }; }

function pagination_possibleConstructorReturn(self, call) { if (call && (pagination_typeof(call) === "object" || typeof call === "function")) { return call; } return pagination_assertThisInitialized(self); }

function pagination_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pagination_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function pagination_getPrototypeOf(o) { pagination_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pagination_getPrototypeOf(o); }





var MAX_BUTTONS = 5;
var Option = base_index_["Select"].Option;


function pagination_pagination(Table) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    pagination_inherits(PaginationWrapper, _Component);

    var _super = pagination_createSuper(PaginationWrapper);

    function PaginationWrapper(props) {
      var _this;

      pagination_classCallCheck(this, PaginationWrapper);

      _this = _super.call(this, props);

      _this.pageIndexChange = function (val) {
        var _this$props = _this.props,
            pageInfoChange = _this$props.pageInfoChange,
            pageInfo = _this$props.pageInfo;
        var total = pageInfo.total,
            pageSize = pageInfo.pageSize; //更新 pageInfo

        var newPageInfo = pagination_objectSpread(pagination_objectSpread({}, pageInfo), {}, {
          pageIndex: val,
          totalPage: Math.ceil(total / pageSize)
        });

        if (typeof pageInfoChange === 'function') {
          pageInfoChange(newPageInfo);
        }
      };

      _this.pageSizeChange = function (val) {
        var _this$props2 = _this.props,
            pageInfoChange = _this$props2.pageInfoChange,
            pageInfo = _this$props2.pageInfo;
        var total = pageInfo.total;

        var newPageInfo = pagination_objectSpread(pagination_objectSpread({}, pageInfo), {}, {
          pageIndex: 1,
          pageSize: +val,
          totalPage: Math.ceil(total / val)
        });

        if (typeof pageInfoChange === 'function') {
          pageInfoChange(newPageInfo);
        }
      };

      _this.state = {
        hideSelectDropdown: false,
        //pageInfo: this.props.pageInfo,
        json: {}
      };
      _this.options = ['10', '20', '50', '100'];
      _this.selectDom = null;
      return _this;
    }

    pagination_createClass(PaginationWrapper, [{
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
          moduleId: 'table_lib_pagination',
          callback: callback
        });
      } //pageIndex事件

    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$state = this.state,
            hideSelectDropdown = _this$state.hideSelectDropdown,
            json = _this$state.json;
        var _this$props3 = this.props,
            pageInfo = _this$props3.pageInfo,
            checkNum = _this$props3.checkNum,
            _this$props3$showPagi = _this$props3.showPagination,
            showPagination = _this$props3$showPagi === void 0 ? false : _this$props3$showPagi;
        var pageSize = pageInfo.pageSize,
            total = pageInfo.total,
            totalPage = pageInfo.totalPage,
            pageIndex = pageInfo.pageIndex; //用户自定义录入得分页条数也显示 '条/页'

        if (!this.options.includes(String(pageSize))) {
          pageSize = pageSize + json['pagination003'] + '/' + json['pagination001'];
        }

        var dropdownStyle = hideSelectDropdown ? {
          dropdownStyle: {
            display: "none"
          }
        } : {};
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.Fragment, null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Table, this.props), showPagination && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: "pagination-wrapper",
          fieldid: Object(api_index_["getSysFieldid"])("pagination-div")
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: "pagination-size"
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Select"], pagination_extends({
          ref: function ref(dom) {
            _this3.selectDom = dom;
          },
          className: "pagination-select",
          dropdownClassName: "pagination-select-dropdown",
          fieldid: "page-size",
          supportSearch: true,
          showSearch: true,
          supportWrite: true,
          showClear: false,
          value: String(pageSize || ''),
          onSelect: this.pageSizeChange,
          onChange: function onChange(val) {
            // 自定义录入每页条数完成后的回调
            if (Array.isArray(val)) {
              if (val[0].length < 500 && /^[1-9]*[1-9][0-9]*$/.test(val[0])) {
                val = val > 5000 ? 5000 : val;

                _this3.pageSizeChange(val);
              }
            }
          },
          onFocus: function onFocus() {
            //获取焦点后显示下拉框
            if (hideSelectDropdown) {
              _this3.setState({
                hideSelectDropdown: false
              });
            }
          },
          onSearch: function onSearch() {
            // 在input录入过程中不显示下拉
            if (!hideSelectDropdown) {
              _this3.setState({
                hideSelectDropdown: true
              });
            }
          },
          onKeyDown: function onKeyDown(e) {
            // 回车键应用自定义值
            if (e.keyCode == 13) {
              _this3.selectDom && external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(_this3.selectDom).querySelector(".pagination-select .u-select-selection--single .u-select-search-field").blur();
            }
          } // 给select下拉框设置显示隐藏

        }, dropdownStyle), this.options.map(function (item, index) {
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Option, {
            key: index,
            value: item,
            className: "pagination-option"
          }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            className: "pagination-size"
          }, "".concat(item).concat(json['pagination003'], "/").concat(json['pagination001'])));
        })), !!+total && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          className: "pagination-total"
        }, json['pagination002'], /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, total), json['pagination003'], checkNum && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          style: {
            marginLeft: '1px'
          }
        }, "\xA0", json['pagination004'], checkNum(), json['pagination003']))), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: "pagination"
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Pagination"], {
          prev: true,
          next: true,
          boundaryLinks: true,
          items: Number(totalPage || 1)
          /*分页器按钮：最多显示7个按钮, 当页数>7时 左侧最多显示5个按钮 等于7时 左侧最多显示6个按钮*/
          ,
          maxButtons: Number(totalPage || 1) === 7 ? 6 : MAX_BUTTONS,
          activePage: Number(pageIndex),
          onSelect: this.pageIndexChange
        }))));
      }
    }]);

    return PaginationWrapper;
  }(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]), _class.defaultProps = {
    pageInfo: {}
  }, _class.propTypes = {
    pageInfo: prop_types_default.a.object,
    pageInfoChange: prop_types_default.a["function"]
  }, _temp;
}
// EXTERNAL MODULE: ./src/platform/components/Table/tableLibs/lib/selectRow/index.less
var selectRow = __webpack_require__(1873);

// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/selectRow/index.js
function selectRow_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { selectRow_typeof = function _typeof(obj) { return typeof obj; }; } else { selectRow_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return selectRow_typeof(obj); }

function selectRow_extends() { selectRow_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return selectRow_extends.apply(this, arguments); }

function selectRow_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = selectRow_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function selectRow_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function selectRow_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function selectRow_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function selectRow_createClass(Constructor, protoProps, staticProps) { if (protoProps) selectRow_defineProperties(Constructor.prototype, protoProps); if (staticProps) selectRow_defineProperties(Constructor, staticProps); return Constructor; }

function selectRow_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) selectRow_setPrototypeOf(subClass, superClass); }

function selectRow_setPrototypeOf(o, p) { selectRow_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return selectRow_setPrototypeOf(o, p); }

function selectRow_createSuper(Derived) { var hasNativeReflectConstruct = selectRow_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = selectRow_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = selectRow_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return selectRow_possibleConstructorReturn(this, result); }; }

function selectRow_possibleConstructorReturn(self, call) { if (call && (selectRow_typeof(call) === "object" || typeof call === "function")) { return call; } return selectRow_assertThisInitialized(self); }

function selectRow_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function selectRow_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function selectRow_getPrototypeOf(o) { selectRow_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return selectRow_getPrototypeOf(o); }

/*
 * @Descripttion: 行选中的逻辑整理
 * @version:
 * @Author: bbq
 * @Date: 2020-06-15 15:30:43
 * @LastEditors: bbq
 * @LastEditTime: 2020-07-30 13:43:55
 */



/**
* 行选中逻辑处理
* @param {*} Table 
*/

function selectRow_selectRow(Table) {
  if (!Table) {
    console.error('缺少Table组件');
  }

  return /*#__PURE__*/function (_Component) {
    selectRow_inherits(MetaTable, _Component);

    var _super = selectRow_createSuper(MetaTable);

    function MetaTable(props) {
      var _this;

      selectRow_classCallCheck(this, MetaTable);

      _this = _super.call(this, props);
      _this.state = {
        selectedIndex: new Set()
      };
      return _this;
    }

    selectRow_createClass(MetaTable, [{
      key: "hasSelected",
      value: function hasSelected(record, rowKey, rowKeyValue, rowIndex) {
        var hasSelected = this.props.hasSelected;

        if (Object(api_index_["isFunction"])(hasSelected)) {
          return hasSelected({
            record: record,
            rowKey: rowKey,
            rowKeyValue: rowKeyValue,
            rowIndex: rowIndex
          });
        } else {
          return this.state.selectedIndex.has(rowKeyValue || rowIndex);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            rowKey = _this$props.rowKey,
            focusIndex = _this$props.focusIndex,
            hasSelected = _this$props.hasSelected,
            setSelectedIndex = _this$props.setSelectedIndex,
            _this$props$rowSelect = _this$props.rowSelectedCls,
            rowSelectedCls = _this$props$rowSelect === void 0 ? ' table-row-selected ' : _this$props$rowSelect,
            _this$props$multiSele = _this$props.multiSelectRow,
            multiSelectRow = _this$props$multiSele === void 0 ? true : _this$props$multiSele,
            _rowClassName = _this$props.rowClassName,
            _onRowClick = _this$props.onRowClick,
            _onRowDoubleClick = _this$props.onRowDoubleClick,
            others = selectRow_objectWithoutProperties(_this$props, ["rowKey", "focusIndex", "hasSelected", "setSelectedIndex", "rowSelectedCls", "multiSelectRow", "rowClassName", "onRowClick", "onRowDoubleClick"]);

        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Table, selectRow_extends({
          rowKey: rowKey,
          currentIndex: focusIndex,
          rowClassName: function rowClassName(record, current) {
            var isSelected = _this2.hasSelected(record, rowKey, record[rowKey], current),
                cls = '';

            isSelected && (cls = rowSelectedCls);
            cls += Object(api_index_["isFunction"])(_rowClassName) ? _rowClassName(record, current) : _rowClassName;
            return cls;
          },
          onRowClick: function onRowClick(record, index, e) {
            if (Object(api_index_["isFunction"])(setSelectedIndex)) {
              setSelectedIndex({
                record: record,
                rowKey: rowKey,
                rowIndex: index
              }, e);
            } else {
              var selectedIndexs = _this2.state.selectedIndex;

              if (selectedIndexs.has(record[rowKey] || index)) {
                selectedIndexs["delete"](record[rowKey] || index);
              } else {
                !multiSelectRow && selectedIndexs.clear();
                selectedIndexs.add(record[rowKey] || index);
              }

              _this2.setState({
                selectedIndex: _this2.state.selectedIndex
              });
            }

            Object(api_index_["isFunction"])(_onRowClick) && _onRowClick(record, index, e);
          },
          onRowDoubleClick: function onRowDoubleClick(record, index, e) {
            if (Object(api_index_["isFunction"])(setSelectedIndex)) {
              setSelectedIndex({
                record: record,
                rowKey: rowKey,
                rowIndex: index
              });
            } else {
              var selectedIndexs = _this2.state.selectedIndex;

              if (selectedIndexs.has(record[rowKey] || index)) {
                selectedIndexs["delete"](record[rowKey] || index);
              } else {
                !multiSelectRow && selectedIndexs.clear();
                selectedIndexs.add(record[rowKey] || index);
              }

              _this2.setState({
                selectedIndex: _this2.state.selectedIndex
              });
            }

            Object(api_index_["isFunction"])(_onRowDoubleClick) && _onRowDoubleClick(record, index, e);
          }
        }, others));
      }
    }]);

    return MetaTable;
  }(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);
}
// EXTERNAL MODULE: ./src/platform/components/Table/tableLibs/lib/indexCol/index.less
var indexCol = __webpack_require__(1874);

// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/indexCol/index.js
function indexCol_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { indexCol_typeof = function _typeof(obj) { return typeof obj; }; } else { indexCol_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return indexCol_typeof(obj); }

function indexCol_extends() { indexCol_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return indexCol_extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function indexCol_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function indexCol_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function indexCol_createClass(Constructor, protoProps, staticProps) { if (protoProps) indexCol_defineProperties(Constructor.prototype, protoProps); if (staticProps) indexCol_defineProperties(Constructor, staticProps); return Constructor; }

function indexCol_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) indexCol_setPrototypeOf(subClass, superClass); }

function indexCol_setPrototypeOf(o, p) { indexCol_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return indexCol_setPrototypeOf(o, p); }

function indexCol_createSuper(Derived) { var hasNativeReflectConstruct = indexCol_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = indexCol_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = indexCol_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return indexCol_possibleConstructorReturn(this, result); }; }

function indexCol_possibleConstructorReturn(self, call) { if (call && (indexCol_typeof(call) === "object" || typeof call === "function")) { return call; } return indexCol_assertThisInitialized(self); }

function indexCol_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function indexCol_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function indexCol_getPrototypeOf(o) { indexCol_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return indexCol_getPrototypeOf(o); }





function indexCol_indexCol(Table) {
  return /*#__PURE__*/function (_Component) {
    indexCol_inherits(ModalTable, _Component);

    var _super = indexCol_createSuper(ModalTable);

    function ModalTable(props) {
      indexCol_classCallCheck(this, ModalTable);

      return _super.call(this, props);
    }

    indexCol_createClass(ModalTable, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            columns = _this$props.columns,
            _this$props$indexColC = _this$props.indexColConfig,
            indexColConfig = _this$props$indexColC === void 0 ? {} : _this$props$indexColC,
            _this$props$checkColC = _this$props.checkColConfig,
            checkColConfig = _this$props$checkColC === void 0 ? {} : _this$props$checkColC,
            _this$props$data = _this$props.data,
            data = _this$props$data === void 0 ? [] : _this$props$data;
        var showIndex = indexColConfig.showIndex,
            langJson = indexColConfig.langJson;
        data.length && data.forEach(function (row, index) {
          //解决业务组 会这样取值 :record.values['numberindex']
          if (Object(utils["isObject"])(row.values)) {
            row.values['numberindex'] = {
              value: "".concat(index + 1)
            };
          } else {
            row['numberindex'] = {
              value: "".concat(index + 1)
            }; //兼容simpletable
          }
        });
        var numberColum = {
          label: langJson['table001'],
          attrcode: 'numberindex',
          dataIndex: 'numberindex',
          className: 'table-index',
          visible: true,
          fixed: 'left',
          itemtype: 'customer',
          width: checkColConfig.showCheck ? '60px' : '70px',
          render: function render(text, record, index) {
            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null, index + 1);
          }
        };

        if (showIndex && Object(utils["isArray"])(columns)) {
          columns = [numberColum].concat(_toConsumableArray(columns));
        }

        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Table, indexCol_extends({}, this.props, {
          columns: columns,
          data: data
        }));
      }
    }]);

    return ModalTable;
  }(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);
}
// EXTERNAL MODULE: ./src/platform/components/Table/tableLibs/lib/checkCol/index.less
var checkCol = __webpack_require__(1875);

// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/checkCol/index.js
function checkCol_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { checkCol_typeof = function _typeof(obj) { return typeof obj; }; } else { checkCol_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return checkCol_typeof(obj); }

function checkCol_extends() { checkCol_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return checkCol_extends.apply(this, arguments); }

function checkCol_toConsumableArray(arr) { return checkCol_arrayWithoutHoles(arr) || checkCol_iterableToArray(arr) || checkCol_unsupportedIterableToArray(arr) || checkCol_nonIterableSpread(); }

function checkCol_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function checkCol_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return checkCol_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return checkCol_arrayLikeToArray(o, minLen); }

function checkCol_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function checkCol_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return checkCol_arrayLikeToArray(arr); }

function checkCol_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function checkCol_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function checkCol_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function checkCol_createClass(Constructor, protoProps, staticProps) { if (protoProps) checkCol_defineProperties(Constructor.prototype, protoProps); if (staticProps) checkCol_defineProperties(Constructor, staticProps); return Constructor; }

function checkCol_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) checkCol_setPrototypeOf(subClass, superClass); }

function checkCol_setPrototypeOf(o, p) { checkCol_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return checkCol_setPrototypeOf(o, p); }

function checkCol_createSuper(Derived) { var hasNativeReflectConstruct = checkCol_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = checkCol_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = checkCol_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return checkCol_possibleConstructorReturn(this, result); }; }

function checkCol_possibleConstructorReturn(self, call) { if (call && (checkCol_typeof(call) === "object" || typeof call === "function")) { return call; } return checkCol_assertThisInitialized(self); }

function checkCol_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function checkCol_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function checkCol_getPrototypeOf(o) { checkCol_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return checkCol_getPrototypeOf(o); }








var Item = base_index_["Menu"].Item;
function checkCol_checkCol(Table) {
  var _temp;

  return _temp = /*#__PURE__*/function (_Component) {
    checkCol_inherits(ModalTable, _Component);

    var _super = checkCol_createSuper(ModalTable);

    function ModalTable(props) {
      var _this;

      checkCol_classCallCheck(this, ModalTable);

      _this = _super.call(this, props);

      _this.onCellClick = function (record, e) {
        var _this$props = _this.props,
            data = _this$props.data,
            onCheckChange = _this$props.onCheckChange,
            rowKey = _this$props.rowKey;
        var disabled = record.disabled; // 禁用不允许点击

        if (disabled && disabled.value) return;
        var rowId = record[rowKey] || record.key;

        if (Object(utils["isObject"])(record[rowKey])) {
          //兼容simpletable
          rowId = record[rowKey].value;
        }

        var index = data.findIndex(function (row) {
          if (Object(utils["isObject"])(row[rowKey])) {
            //兼容simpletable
            return rowId === row[rowKey].value;
          } else {
            return row[rowKey] === rowId;
          }
        });
        Object(api_index_["isFunction"])(onCheckChange) && onCheckChange(record, index); // 阻止冒泡防止行点击触发

        e.stopPropagation();
      };

      _this.chooseStatus = function (_ref) {
        var key = _ref.key;
        var _this$props$checkColC = _this.props.checkColConfig,
            checkColConfig = _this$props$checkColC === void 0 ? {} : _this$props$checkColC;
        var changeCrossSelect = checkColConfig.changeCrossSelect;
        changeCrossSelect(key);
      };

      return _this;
    }

    checkCol_createClass(ModalTable, [{
      key: "componentDidMount",
      value: function componentDidMount() {}
    }, {
      key: "getTitle",
      value: function getTitle() {
        var _this$props2 = this.props,
            _this$props2$checkCol = _this$props2.checkColConfig,
            checkColConfig = _this$props2$checkCol === void 0 ? {} : _this$props2$checkCol,
            _this$props2$checkInf = _this$props2.checkInfo,
            checkInfo = _this$props2$checkInf === void 0 ? {} : _this$props2$checkInf,
            onAllCheckChange = _this$props2.onAllCheckChange;
        var changeCrossSelect = checkColConfig.changeCrossSelect,
            crossPageSelect = checkColConfig.crossPageSelect;
        var langJson = checkColConfig.langJson;
        var menu = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Menu"], {
          onClick: this.chooseStatus
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Item, {
          key: "all"
        }, langJson['table0036'] || '全选'), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Item, {
          key: "reverse"
        }, langJson['table0039'] || '全反选'), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Item, {
          key: "current"
        }, langJson['table0040'] || '仅当前页'));
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          fieldid: Object(api_index_["getSysFieldid"])('firstcol')
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Checkbox"], {
          className: "table-checkbox",
          checked: checkInfo.checkedAll,
          disabled: checkInfo.disabledAll,
          indeterminate: checkInfo.indeterminate,
          tabindex: "-1",
          onChange: function onChange(value) {
            Object(api_index_["isFunction"])(onAllCheckChange) && onAllCheckChange(value);
          }
        }), crossPageSelect && Object(api_index_["isFunction"])(changeCrossSelect) && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Dropdown"], {
          trigger: ['click'],
          overlay: menu,
          overlayClassName: 'select-status',
          animation: "slide-up"
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
          className: "icon-bottom iconfont"
        })));
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            columns = _this$props3.columns,
            _this$props3$checkCol = _this$props3.checkColConfig,
            checkColConfig = _this$props3$checkCol === void 0 ? {} : _this$props3$checkCol,
            onCheckChange = _this$props3.onCheckChange;
        var showCheck = checkColConfig.showCheck;

        if (showCheck) {
          var checkboxColum = {
            title: this.getTitle.bind(this),
            // 这个是列使用的方法  要和  onTableCellClick 我们自己定义的方法区分下
            // 增加单选的触发区域范围
            onCellClick: this.onCellClick,
            // 增加全选的触发区域范围, 禁用不允许点击
            // onHeadCellClick: () => {
            //     let { disabledAll, onAllCheckChange } = this.props
            //     disabledAll || isFunction(onAllCheckChange) && onAllCheckChange()
            // },
            dataIndex: 'checkbox',
            className: 'table-checkbox-class',
            visible: true,
            attrcode: 'checkbox',
            itemtype: 'customer',
            width: '54px',
            //NCC-56167
            fixed: 'left',
            render: function render(text, record, index) {
              var selected = record.selected;
              var disabled = record.disabled;

              if (Object(utils["isObject"])(record.selected)) {
                //兼容simpletable
                selected = record.selected.value;
              }

              if (Object(utils["isObject"])(record.disabled)) {
                //兼容simpletable
                disabled = record.disabled.value;
              }

              return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
                fieldid: Object(api_index_["getSysFieldid"])('firstcol')
              }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Checkbox"], {
                className: "table-checkbox",
                checked: !!selected,
                disabled: !!disabled,
                tabindex: "-1",
                onChange: function onChange() {
                  Object(api_index_["isFunction"])(onCheckChange) && onCheckChange(record, index, selected);
                }
              }));
            }
          }; //     let haveCheckCol = columns.some(item => item.attrcode === 'checkbox')
          //     if (!haveCheckCol) {

          columns = [checkboxColum].concat(checkCol_toConsumableArray(columns)); // }
        }

        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Table, checkCol_extends({}, this.props, {
          columns: columns
        }));
      }
    }]);

    return ModalTable;
  }(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]), _temp;
}
// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/errorCol/index.js
function errorCol_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { errorCol_typeof = function _typeof(obj) { return typeof obj; }; } else { errorCol_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return errorCol_typeof(obj); }

function errorCol_extends() { errorCol_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return errorCol_extends.apply(this, arguments); }

function errorCol_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = errorCol_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function errorCol_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function errorCol_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function errorCol_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function errorCol_createClass(Constructor, protoProps, staticProps) { if (protoProps) errorCol_defineProperties(Constructor.prototype, protoProps); if (staticProps) errorCol_defineProperties(Constructor, staticProps); return Constructor; }

function errorCol_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) errorCol_setPrototypeOf(subClass, superClass); }

function errorCol_setPrototypeOf(o, p) { errorCol_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return errorCol_setPrototypeOf(o, p); }

function errorCol_createSuper(Derived) { var hasNativeReflectConstruct = errorCol_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = errorCol_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = errorCol_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return errorCol_possibleConstructorReturn(this, result); }; }

function errorCol_possibleConstructorReturn(self, call) { if (call && (errorCol_typeof(call) === "object" || typeof call === "function")) { return call; } return errorCol_assertThisInitialized(self); }

function errorCol_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function errorCol_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function errorCol_getPrototypeOf(o) { errorCol_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return errorCol_getPrototypeOf(o); }

/*
 * @Descripttion: 
 * @version: 
 * @Author: bbq
 * @Date: 2020-09-15 15:14:02
 * @LastEditors: bbq
 * @LastEditTime: 2020-11-19 14:12:26
 */



function errorCol(Table) {
  var _temp;

  return _temp = /*#__PURE__*/function (_Component) {
    errorCol_inherits(ModalTable, _Component);

    var _super = errorCol_createSuper(ModalTable);

    function ModalTable(props) {
      var _this;

      errorCol_classCallCheck(this, ModalTable);

      _this = _super.call(this, props);

      _this.changeColumn = function () {
        var _this$props = _this.props,
            columns = _this$props.columns,
            _this$props$indexColC = _this$props.indexColConfig,
            indexColConfig = _this$props$indexColC === void 0 ? {} : _this$props$indexColC,
            _this$props$checkColC = _this$props.checkColConfig,
            checkColConfig = _this$props$checkColC === void 0 ? {} : _this$props$checkColC,
            name = _this$props.name;
        var _indexColConfig$showI = indexColConfig.showIndex,
            showIndex = _indexColConfig$showI === void 0 ? true : _indexColConfig$showI;
        var _checkColConfig$showC = checkColConfig.showCheck,
            showCheck = _checkColConfig$showC === void 0 ? true : _checkColConfig$showC; // 有checkbox 修改checkbox列 ; 无checkbox列，修改numberindex列

        var errorCode = showCheck ? 'checkbox' : showIndex ? 'numberindex' : '';

        if (Array.isArray(columns) && columns.length > 0 && errorCode) {
          var _errorCol = columns.find(function (e) {
            return e.attrcode === errorCode;
          });

          if (_errorCol) {
            var oldRender = _errorCol.render;
            var oldCellClick = _errorCol.onCellClick;

            _errorCol.onCellClick = function (record, e) {
              var _ref = record.values || record,
                  _ref$saga_status = _ref.saga_status,
                  saga_status = _ref$saga_status === void 0 ? {} : _ref$saga_status;

              if (saga_status.value !== "1") {
                oldCellClick && oldCellClick(record, e);
              }
            };

            _errorCol.render = function (text) {
              var record = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              var index = arguments.length > 2 ? arguments[2] : undefined;

              var _ref2 = record.values || record,
                  _ref2$saga_status = _ref2.saga_status,
                  saga_status = _ref2$saga_status === void 0 ? {} : _ref2$saga_status;

              return saga_status.value === "1" ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["ErrorPop"], {
                record: record.values || record,
                name: name
              }) : oldRender(text, record, index);
            };
          }
        }

        return columns;
      };

      _this.rowClick = function (record, index, e) {
        if (!record) return;
        var onRowClick = _this.props.onRowClick;

        var _ref3 = record.values || record,
            _ref3$saga_status = _ref3.saga_status,
            saga_status = _ref3$saga_status === void 0 ? {} : _ref3$saga_status; // 错误行禁用


        if (saga_status.value === "1") return;
        Object(api_index_["isFunction"])(onRowClick) && onRowClick(record, index, e);
      };

      _this.rowRef = function (record) {
        if (!record) return;

        var _ref4 = record.values || record,
            _ref4$saga_status = _ref4.saga_status,
            saga_status = _ref4$saga_status === void 0 ? {} : _ref4$saga_status;

        if (saga_status.value === "1") {
          record.element && record.element.setAttribute("tabindex", "-1");
        }
      };

      return _this;
    } //修改saga行checkbox/numberindex 列


    errorCol_createClass(ModalTable, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            columns = _this$props2.columns,
            onRowClick = _this$props2.onRowClick,
            others = errorCol_objectWithoutProperties(_this$props2, ["columns", "onRowClick"]);

        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Table, errorCol_extends({
          columns: this.changeColumn(),
          onRowClick: this.rowClick,
          rowRef: this.rowRef
        }, others));
      }
    }]);

    return ModalTable;
  }(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]), _temp;
}
// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/simpleTableModal/createRefer.js
function createRefer_extends() { createRefer_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return createRefer_extends.apply(this, arguments); }



function createRefer(refcode) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (refcode) {
    case 'cont':
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Refer"], createRefer_extends({
        refName: '交易类型',
        refCode: 'cont',
        queryGridUrl: '/nccloud/reva/ref/cont.do'
      }, config));

    case 'dept':
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Refer"], createRefer_extends({
        refName: '部门',
        refCode: 'dept',
        refType: 'tree',
        queryTreeUrl: '/nccloud/reva/ref/dept.do'
      }, config));

    case 'finance':
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Refer"], createRefer_extends({
        refName: '财务组织',
        refCode: 'finance',
        refType: 'tree',
        queryTreeUrl: '/nccloud/reva/ref/finance.do'
      }, config));

    case 'materialclass':
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Refer"], createRefer_extends({
        refName: '物料分类',
        refCode: 'materialclass' // refType={'tree'}
        ,
        queryGridUrl: '/nccloud/reva/ref/materialclass.do'
      }, config));

    case 'material':
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Refer"], createRefer_extends({
        refName: '物料',
        refCode: 'material',
        refType: 'gridTree',
        isMultiSelectedEnabled: true,
        queryGridUrl: '/nccloud/reva/ref/material.do',
        queryTreeUrl: '/nccloud/reva/ref/materialclass.do'
      }, config));

    case 'obligation':
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Refer"], createRefer_extends({
        refName: '履约义务档案',
        refCode: 'obligation',
        refType: 'tree',
        queryTreeUrl: '/nccloud/reva/ref/obligation.do'
      }, config));

    default:
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Refer"], createRefer_extends({
        refName: 'test',
        refCode: 'test' // refType={'tree'}
        ,
        queryGridUrl: '/test/test.do'
      }, config));
  }
}
/**
 * 两列布局col取值为6
 * 三列布局col取值为4
 *
 */
// 有label
// const Layout = {
//     3: {
//         label: 1,
//         control: 2,
//     },
//     4: {
//         label: 1,
//         control: 3,
//     },
//     6: {
//         label: 2,
//         control: 4,
//     },
//     12: {
//         label: 1,
//         control: 11,
//     },
// };
// // 无label
// const Layout4 = {
//     3: {
//         label: 0,
//         control: 3,
//     },
//     4: {
//         label: 0,
//         control: 4,
//     },
//     6: {
//         label: 0,
//         control: 6,
//     },
//     12: {
//         label: 0,
//         control: 12,
//     },
// };
// const layouts = {
//     Layout,
//     Layout4,
// };
// const fileType = {
//     IMG: ['jpg', 'jpeg', 'bmp', 'gif'],
//     DOC: [],
//     XLS: [],
// }
// // 总配置项
// export default {
//     allTypes: ['input', 'number', 'textarea', 'datepicker', 'rangepicker', 'switch', 'select', 'checkbox', 'radio', 'refer', 'customer', 'label', 'NCTZDatePickerStart', 'NCTZDatePickerEnd', 'checkbox_switch', 'switch_browse'],
//     displayTypes: ['select', 'radio', 'checkbox', 'refer'],
//     string: ['input', 'textarea', 'datepicker', 'select', 'checkbox', 'radio', 'refer', 'label'],
//     boolean: ['switch', 'checkbox_switch', 'switch_browse'],
//     number: ['number'],
//     valueTypesExceptNumber: ['input', 'textarea'],
//     changeTypes: ['datepicker', 'rangepicker', 'switch', 'select', 'checkbox', 'radio', 'refer', 'NCTZDatePickerStart', 'NCTZDatePickerEnd', 'checkbox_switch', 'switch_browse', 'datePickerNoTimeZone'],
//     blurTypes: ['input', 'number', 'textarea'],
//     // 编辑后在onblur中的类型
//     afterBlurTypes: ['input', 'number', 'textarea', 'residtxt', 'datetimepicker', 'timepicker'],
//     valueTypes: ['input', 'number', 'textarea'],
//     noEditType: ['label', 'customer'],
//     getDisplay: ['select', 'radio', 'checkbox'],
//     status: {  // 表格内数据状态
//         origin: '0',
//         edit: '1',
//         add: '2',
//         delete: '3',
//     },
//     timeTypes: ['datepicker', 'NCTZDatePickerStart', 'NCTZDatePickerEnd', 'timepicker', 'datetimepicker', 'rangepicker', 'datePickerNoTimeZone'],
//     layouts, // 表单布局用
//     beforeFocusTypes: ['residtxt', 'input', 'select', 'number', 'textarea', 'password', 'switch_browse', 'refer'],
//     beforeChangeTypes: ['radio'],
//     beforeClickTypes: ['datepicker', 'timepicker', 'datetimepicker', 'NCTZDatePickerStart', 'NCTZDatePickerEnd', 'rangepicker', 'datePickerNoTimeZone', 'checkbox_switch', 'checkbox'],
//     hotKeyModuleIdPrefix: 'hot-key',
//     defaultColor: ['#111111', '#555555', '#111', '#555'],
//     complete: 'areaChangeComplete',
//     isPageModal: true,  // 为true,top的url放在sessionstorage;否则url不变; 默认值是true
//     isRemoveWorkbench: false, // 为true时,去掉工作桌面打开节点;默认值是false
//     hotKeyDatePicker: 'datePicker',
//     //由于enter键与业务组部分enter键搜索逻辑冲突因此添加标识，如果元素有此样式就不执行平台enter键逻辑
//     stopEnterHotKey: 'stopEnterHotKey',
// };
// EXTERNAL MODULE: ./src/platform/components/Table/tableLibs/lib/simpleTableModal/index.less
var simpleTableModal = __webpack_require__(1878);

// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/simpleTableModal/index.js
function simpleTableModal_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { simpleTableModal_typeof = function _typeof(obj) { return typeof obj; }; } else { simpleTableModal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return simpleTableModal_typeof(obj); }

function simpleTableModal_extends() { simpleTableModal_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return simpleTableModal_extends.apply(this, arguments); }

function simpleTableModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function simpleTableModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { simpleTableModal_ownKeys(Object(source), true).forEach(function (key) { simpleTableModal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { simpleTableModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function simpleTableModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function simpleTableModal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function simpleTableModal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function simpleTableModal_createClass(Constructor, protoProps, staticProps) { if (protoProps) simpleTableModal_defineProperties(Constructor.prototype, protoProps); if (staticProps) simpleTableModal_defineProperties(Constructor, staticProps); return Constructor; }

function simpleTableModal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) simpleTableModal_setPrototypeOf(subClass, superClass); }

function simpleTableModal_setPrototypeOf(o, p) { simpleTableModal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return simpleTableModal_setPrototypeOf(o, p); }

function simpleTableModal_createSuper(Derived) { var hasNativeReflectConstruct = simpleTableModal_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = simpleTableModal_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = simpleTableModal_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return simpleTableModal_possibleConstructorReturn(this, result); }; }

function simpleTableModal_possibleConstructorReturn(self, call) { if (call && (simpleTableModal_typeof(call) === "object" || typeof call === "function")) { return call; } return simpleTableModal_assertThisInitialized(self); }

function simpleTableModal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function simpleTableModal_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function simpleTableModal_getPrototypeOf(o) { simpleTableModal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return simpleTableModal_getPrototypeOf(o); }








var FormItem = base_index_["Form"].FormItem;
var simpleTableModal_Option = base_index_["Select"].Option;
var displayTypes = ['select', 'radio', 'checkbox', 'refer'];
function simpleTableModal_simpleTableModal(Table) {
  var _temp;

  return _temp = /*#__PURE__*/function (_Component) {
    simpleTableModal_inherits(ModalTable, _Component);

    var _super = simpleTableModal_createSuper(ModalTable);

    function ModalTable(props) {
      var _this;

      simpleTableModal_classCallCheck(this, ModalTable);

      _this = _super.call(this, props);

      _this.handleDoSave = function () {
        var _this$props = _this.props,
            store = _this$props.store,
            tableModelConfirm = _this$props.tableModelConfirm;
        var closeModal = store.closeModal,
            getStore = store.getStore;

        var _getStore = getStore(),
            modelDatas = _getStore.modelDatas;

        var operType = modelDatas.operType,
            tableModeldata = modelDatas.record;
        var tempObj = {},
            moduleId = _this.props.name,
            type = operType; // TODO

        modelDatas.modelColumn.forEach(function (item) {
          var key = item.attrcode; // 过滤操作列和序号列

          if (key != 'customer') {
            tempObj[key] = {
              display: Object(api_index_["isObj"])(tableModeldata[key]) ? tableModeldata[key].display || null : null,
              scale: Object(api_index_["isObj"])(tableModeldata[key]) ? _this.handleScale(tableModeldata[key].scale) : '-1',
              value: Object(api_index_["isObj"])(tableModeldata[key]) ? _this.handleValue(key, type, tableModeldata[key].value) : null
            };
          }
        });

        var dist = simpleTableModal_defineProperty({}, moduleId, {
          areaType: 'table',
          pageInfo: {},
          rows: [{
            rowId: modelDatas.rowId,
            status: type == 'add' ? 2 : 1,
            values: simpleTableModal_objectSpread({}, tempObj)
          }]
        });

        Object(utils["isFunction"])(tableModelConfirm) && tableModelConfirm(dist, type);
        closeModal(moduleId);
      };

      _this.handleScale = function (data) {
        if (typeof data == 'undefined' || data == null) {
          return '-1';
        }

        return +data;
      };

      _this.handleValue = function (key, type, data) {
        if (key == 'ts' && type == 'add') {
          return null;
        }

        return typeof data == 'undefined' || data == '' ? null : data;
      };

      _this.handleSubmit = function () {
        var modalConfig = _this.props.modalConfig;
        var langJson = modalConfig.langJson;

        var _this$checkSubmitRule = _this.checkSubmitRule(),
            flag = _this$checkSubmitRule.flag,
            errorTitle = _this$checkSubmitRule.errorTitle,
            errorInfo = _this$checkSubmitRule.errorInfo,
            errorType = _this$checkSubmitRule.errorType,
            max = _this$checkSubmitRule.max;

        if (flag) {
          var content = {
            // "1": `请${errorInfo + errorTitle}`,
            1: "".concat(langJson['table0011'] + errorInfo + errorTitle),
            // "2": `${errorTitle}的最大长度为${max.toString()}`
            2: "".concat(errorTitle + langJson['table0012'] + max.toString())
          };
          Object(api_index_["toast"])({
            content: content[errorType],
            color: 'danger'
          });
        } else {
          // 保存
          _this.handleDoSave();
        }
      };

      _this.HanlderCheckInput = function (n, slected) {
        var value = slected.value;
        var len = String(value).length;

        if (!n && len > 0 || len > 0 && len <= n) {
          return true;
        }

        return false;
      };

      _this.HanlderCheckNumber = function () {
        var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Infinity;
        var slected = arguments.length > 1 ? arguments[1] : undefined;
        var value = slected.value;

        if (value && value <= max) {
          return true;
        }

        return false;
      };

      _this.checkSubmitRule = function () {
        var modalConfig = _this.props.modalConfig;
        var langJson = modalConfig.langJson;
        var _ref = [-1],
            errorIndex = _ref[0],
            errorTitle = _ref[1],
            errorInfo = _ref[2],
            errorType = _ref[3],
            max = _ref[4];

        var _this$props$store$get = _this.props.store.getStore(),
            modelDatas = _this$props$store$get.modelDatas;

        var tableModeldata = modelDatas.record,
            modelColumn = modelDatas.modelColumn; // TODO 区分必输和长度限制

        var distCol = modelColumn.length && modelColumn.filter(function (item) {
          return !!item.itemtype && item.itemtype !== 'label' && item.itemtype !== 'customer' && !!item.required;
        });
        var checkEmpty = distCol.some(function (item, index) {
          errorIndex = index;
          errorTitle = item.label;
          errorInfo = displayTypes.includes(item.itemtype) ? langJson['table0013'] : langJson['table0014'];
          errorType = null;
          max = '';
          var checkData = tableModeldata[item.attrcode] || {};
          var checkVal = checkData.value; // item.value == '' 为空   错误类型1
          // item.maxlength 超出     错误类型2

          if (checkVal == '' || checkVal == null || checkVal == undefined) {
            errorType = '1';
            return true;
          }

          if (item.maxlength && String(checkVal).length > item.maxlength) {
            errorType = '2';
            max = item.maxlength;
            return true;
          }

          return false;
        });

        if (checkEmpty) {
          return {
            flag: true,
            errorIndex: errorIndex,
            errorTitle: errorTitle,
            errorInfo: errorInfo,
            errorType: errorType,
            max: max
          };
        }

        return {
          flag: false
        };
      };

      _this.close = function () {
        _this.props.store.closeModal();
      };

      _this.afterEvent = function (attrcode, changedrows, val, index, record) {
        if (typeof _this.props.afterEvent == 'function') {
          _this.props.afterEvent(_this.props.moduleId, attrcode, changedrows, val, index, record);
        }
      };

      _this.state = {
        json: {}
      };
      return _this;
    } // UNSAFE_componentWillMount() {
    //     // 初始化调用getPlatformLang方法获取多语
    //     let callback = (json, bool, LangData) => {
    //         this.setState({ json, LangData });
    //     };
    //     // moduleId为所需加载json文件夹名称前缀
    //     getMultiLang({ moduleId: 'page_table', callback });
    // }


    simpleTableModal_createClass(ModalTable, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            store = _this$props2.store,
            type = _this$props2.type,
            name = _this$props2.name,
            modalConfig = _this$props2.modalConfig;
        var getStore = store.getStore,
            getCtx = store.getCtx,
            setModalValue = store.setModalValue;
        var modelDatas = getStore('modelDatas');
        var showModal = modelDatas.showModal,
            tableModeldata = modelDatas.record,
            modelColumn = modelDatas.modelColumn;
        var langJson = modalConfig.langJson;
        var title = langJson['table0015'];

        switch (type) {
          case 'add':
            title = langJson['table0016'];
            break;

          case 'edit':
            title = langJson['table0017'];
            break;

          default:
            break;
        }

        var formMeta = modelColumn.length ? modelColumn.filter(function (item) {
          return !!item.itemtype && item.itemtype !== 'label' && item.itemtype !== 'customer';
        }) : [];
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.Fragment, null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Table, this.props), showModal && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Modal"], {
          id: "tableModal",
          show: showModal,
          className: "table-modal",
          backdrop: "static",
          animation: false,
          onHide: this.close
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Modal"].Header, {
          closeButton: true
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Modal"].Title, null, title)), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Modal"].Body, null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Form"], {
          showSubmit: false,
          useRow: true,
          className: "table-modal-form"
        }, formMeta.map(function (item, i) {
          var render = typeof item.render === 'function' ? item.render('', modelDatas.record, modelDatas.index) : null;

          if (render) {
            var val = tableModeldata[item.attrcode] || {};
            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(FormItem, {
              key: i,
              inline: true,
              labelMd: 3,
              md: 9,
              valuePropsName: "value",
              showMast: !!item.required,
              isRequire: !!item.required,
              method: "blur",
              labelName: item.label
            }, simpleTableModal_objectSpread(simpleTableModal_objectSpread({}, render), {}, {
              key: item.attrcode,
              props: simpleTableModal_objectSpread(simpleTableModal_objectSpread(simpleTableModal_objectSpread({}, render), item), {}, {
                foolValue: val,
                disabled: !!item.disabled,
                onChange: function onChange(value) {
                  setModalValue(item.attrcode, value, 'refer');
                  var changedrows = [];
                  changedrows.push({
                    rowid: modelDatas.rowId || String(new Date().getTime()).slice(-5) + Object(api_index_["getSafeRandom"])().toString(12),
                    newvalue: {
                      value: value
                    },
                    oldvalue: {
                      value: 'value'
                    }
                  });

                  _this2.afterEvent(item.attrcode, changedrows, value, modelDatas.index, modelDatas.record);
                }
              })
            }));
          } else if (item.refcode) {// getCtx 方法没有 注意后面需要的话自己加下
            // createScript.call(getCtx(), 'table', name, item.attrcode, item.refcode);
          } else {
            switch (item.itemtype) {
              case 'input':
                return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(FormItem, {
                  key: i,
                  inline: true,
                  labelMd: 3,
                  md: 9,
                  valuePropsName: "value",
                  showMast: !!item.required,
                  isRequire: !!item.required,
                  method: "blur",
                  asyncCheck: _this2.HanlderCheckInput.bind(_this2, item.maxlength),
                  labelName: item.label,
                  errorMessage: item.maxlength ? "".concat(item.label + langJson['table0012'] + item.maxlength.toString()) : "".concat(langJson['table0011'] + langJson['table0014'] + item.label)
                }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Input"], simpleTableModal_extends({
                  placeholder: "".concat(langJson['table0011'] + langJson['table0014'], "+..."),
                  name: item.attrcode,
                  disabled: !!item.disabled
                }, item, {
                  value: tableModeldata[item.attrcode] ? tableModeldata[item.attrcode].value : null,
                  onChange: function onChange(val) {
                    setModalValue(item.attrcode, val);
                  },
                  onBlur: function onBlur(val) {
                    var changedrows = [];
                    changedrows.push({
                      rowid: modelDatas.rowId || String(new Date().getTime()).slice(-5) + Object(api_index_["getSafeRandom"])().toString(12),
                      newvalue: {
                        value: val
                      },
                      oldvalue: {
                        value: 'value'
                      }
                    });

                    _this2.afterEvent(item.attrcode, changedrows, val, modelDatas.index, modelDatas.record);
                  }
                })));

              case 'number':
                return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(FormItem, {
                  key: i,
                  inline: true,
                  labelMd: 3,
                  md: 9,
                  valuePropsName: "value",
                  showMast: !!item.required,
                  isRequire: !!item.required,
                  method: "blur",
                  asyncCheck: _this2.HanlderCheckNumber.bind(_this2, item.max),
                  labelName: item.label,
                  errorMessage: item.max ? "".concat(item.label + langJson['table0018'] + item.max) : "".concat(langJson['table0011'] + langJson['table0014'] + item.label)
                }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["InputNumber"], simpleTableModal_extends({
                  placeholder: "".concat(langJson['table0011'] + langJson['table0014'], "+..."),
                  name: item.attrcode,
                  scale: tableModeldata[item.attrcode] && !Object(api_index_["isWrong"])(tableModeldata[item.attrcode].scale) && tableModeldata[item.attrcode].scale != '-1' ? +tableModeldata[item.attrcode].scale : +item.scale || 0,
                  disabled: !!item.disabled
                }, item, {
                  value: tableModeldata[item.attrcode] ? tableModeldata[item.attrcode].value : null,
                  onChange: function onChange(val) {
                    setModalValue(item.attrcode, val);
                  },
                  onBlur: function onBlur(val) {
                    var changedrows = [];
                    changedrows.push({
                      rowid: modelDatas.rowId || String(new Date().getTime()).slice(-5) + Object(api_index_["getSafeRandom"])().toString(12),
                      newvalue: {
                        value: val
                      },
                      oldvalue: {
                        value: 'value'
                      }
                    });

                    _this2.afterEvent(item.attrcode, changedrows, val, modelDatas.index, modelDatas.record);
                  }
                })));

              case 'refer':
                return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(FormItem, {
                  key: i,
                  inline: true,
                  labelMd: 3,
                  md: 9,
                  valuePropsName: "value",
                  showMast: !!item.required,
                  isRequire: !!item.required,
                  method: "blur",
                  labelName: item.label
                }, createRefer(item.refcode, {
                  disabled: !!item.disabled,
                  foolValue: tableModeldata[item.attrcode] || {},
                  onChange: function onChange(val) {
                    setModalValue(item.attrcode, val, 'refer');
                    var changedrows = [];
                    changedrows.push({
                      rowid: modelDatas.rowId || String(new Date().getTime()).slice(-5) + Object(api_index_["getSafeRandom"])().toString(12),
                      newvalue: {
                        value: val
                      },
                      oldvalue: {
                        value: 'value'
                      }
                    });

                    _this2.afterEvent(item.attrcode, changedrows, val, modelDatas.index, modelDatas.record);
                  }
                }));

              case 'select':
                return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(FormItem, {
                  key: i,
                  inline: true,
                  labelMd: 3,
                  md: 9,
                  method: "blur",
                  showMast: !!item.required,
                  isRequire: !!item.required,
                  labelName: item.label,
                  errorMessage: "".concat(langJson['table0011'] + langJson['table0013'] + item.label)
                }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Select"], simpleTableModal_extends({
                  type: "customer",
                  disabled: !!item.disabled,
                  value: tableModeldata[item.attrcode] ? tableModeldata[item.attrcode].value : ''
                }, item, {
                  onChange: function onChange(val) {
                    setModalValue(item.attrcode, String(val));
                    var changedrows = [];
                    changedrows.push({
                      rowid: modelDatas.rowId || String(new Date().getTime()).slice(-5) + Object(api_index_["getSafeRandom"])().toString(12),
                      newvalue: {
                        value: String(val)
                      },
                      oldvalue: {
                        value: 'value'
                      }
                    });

                    _this2.afterEvent(item.attrcode, changedrows, String(val), modelDatas.index, modelDatas.record);
                  },
                  getPopupContainer: function getPopupContainer() {
                    return document.querySelector('#tableModal');
                  },
                  dropdownStyle: {
                    zIndex: 18000
                  },
                  dropdownClassName: NODE_ENV === 'test' && item.attrcode + '-' + 'select'
                }), item.options.length && item.options.map(function (one, i) {
                  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(simpleTableModal_Option, {
                    value: String(one.value),
                    key: i,
                    title: one.display
                  }, ' ', one.display, ' ');
                })));

              case 'datepicker':
                return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(FormItem, {
                  key: i,
                  inline: true,
                  labelMd: 3,
                  md: 9,
                  showMast: !!item.required,
                  isRequire: !!item.required,
                  labelName: item.label,
                  errorMessage: "".concat(langJson['table0011'] + langJson['table0013'] + item.label)
                }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["DatePicker"], simpleTableModal_extends({
                  type: "customer",
                  format: "YYYY-MM-DD",
                  disabled: !!item.disabled,
                  getCalendarContainer: function getCalendarContainer() {
                    return document.querySelector('#tableModal');
                  },
                  placeholder: "".concat(langJson['table0013'] + langJson['table0019'] + langJson['table0020'])
                }, item, {
                  value: tableModeldata[item.attrcode] ? Object(api_index_["moment"])(tableModeldata[item.attrcode].value) : null,
                  onChange: function onChange(val) {
                    setModalValue(item.attrcode, val);
                    var changedrows = [];
                    changedrows.push({
                      rowid: modelDatas.rowId || String(new Date().getTime()).slice(-5) + Object(api_index_["getSafeRandom"])().toString(12),
                      newvalue: {
                        value: val
                      },
                      oldvalue: {
                        value: 'value'
                      }
                    });

                    _this2.afterEvent(item.attrcode, changedrows, val, modelDatas.index, modelDatas.record);
                  }
                })));

              case 'textarea':
                return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(FormItem, {
                  key: i,
                  inline: true,
                  labelMd: 3,
                  md: 9,
                  showMast: true,
                  labelName: item.label
                }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["TextArea"], simpleTableModal_extends({
                  placeholder: "".concat(langJson['table0011'] + langJson['table0014'], "+..."),
                  disabled: !!item.disabled,
                  name: item.attrcode
                }, item, {
                  value: tableModeldata[item.attrcode] ? tableModeldata[item.attrcode].value : null,
                  onChange: function onChange(val) {
                    setModalValue(item.attrcode, val);
                    var changedrows = [];
                    changedrows.push({
                      rowid: modelDatas.rowId || String(new Date().getTime()).slice(-5) + Object(api_index_["getSafeRandom"])().toString(12),
                      newvalue: {
                        value: val
                      },
                      oldvalue: {
                        value: 'value'
                      }
                    });

                    _this2.afterEvent(item.attrcode, changedrows, val, modelDatas.index, modelDatas.record);
                  }
                })));

              case 'radio':
                return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(FormItem, {
                  key: i,
                  inline: true,
                  labelMd: 3,
                  md: 9,
                  showMast: true,
                  labelName: item.label
                }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Radio"].RadioGroup, simpleTableModal_extends({
                  type: "customer",
                  name: item.attrcode,
                  disabled: !!item.disabled,
                  selectedValue: tableModeldata[item.attrcode] ? String(tableModeldata[item.attrcode].value) : null
                }, item, {
                  onChange: function onChange(val) {
                    setModalValue(item.attrcode, String(val));
                    var changedrows = [];
                    changedrows.push({
                      rowid: modelDatas.rowId || String(new Date().getTime()).slice(-5) + Object(api_index_["getSafeRandom"])().toString(12),
                      newvalue: {
                        value: String(val)
                      },
                      oldvalue: {
                        value: 'value'
                      }
                    });

                    _this2.afterEvent(item.attrcode, changedrows, String(val), modelDatas.index, modelDatas.record);
                  }
                }), item.options.length && item.options.map(function (one, i) {
                  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Radio"], {
                    value: String(one.value),
                    key: i
                  }, ' ', one.display, ' ');
                })));

              case 'switch':
                return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(FormItem, {
                  key: i,
                  inline: true,
                  labelMd: 3,
                  md: 9,
                  showMast: true,
                  labelName: item.label
                }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Switch"], simpleTableModal_extends({
                  checked: tableModeldata[item.attrcode] ? !!tableModeldata[item.attrcode].value : false,
                  disabled: !!item.disabled
                }, item, {
                  onChange: function onChange(val) {
                    setModalValue(item.attrcode, val);
                    var changedrows = [];
                    changedrows.push({
                      rowid: modelDatas.rowId || String(new Date().getTime()).slice(-5) + Object(api_index_["getSafeRandom"])().toString(12),
                      newvalue: {
                        value: val
                      },
                      oldvalue: {
                        value: 'value'
                      }
                    });

                    _this2.afterEvent(item.attrcode, changedrows, val, modelDatas.index, modelDatas.record);
                  }
                })));

              case 'rangepicker':
                return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(FormItem, {
                  key: i,
                  inline: true,
                  labelMd: 3,
                  md: 9,
                  showMast: true,
                  labelName: item.label
                }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null, "rangepicker"));

              default:
                return null;
            }
          }
        }))), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Modal"].Footer, null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Button"], {
          className: "btn-2",
          onClick: this.handleSubmit
        }, langJson['table0021']), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Button"], {
          className: "btn-2 btn-cancel",
          onClick: this.close,
          shape: "border"
        }, langJson['table_cancel']))));
      }
    }]);

    return ModalTable;
  }(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]), _temp;
}
// EXTERNAL MODULE: ./src/platform/components/Table/tableLibs/lib/total/index.less
var lib_total = __webpack_require__(925);

// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/total/util.js
function util_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { util_typeof = function _typeof(obj) { return typeof obj; }; } else { util_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return util_typeof(obj); }






function getTotalData(totalColumns, rows) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var totalScale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var _this = this;

  var totalDataObj = {}; //合计行的数据

  var isTotal = []; //缓存模版中需要合计的列

  totalColumns.forEach(function (eve) {
    var itemtype = eve.itemtype;
    totalDataObj[eve.key] = null; //给合计行数据设置模版上visible===true 的项的attrcode，作为属性

    if (eve.istotal && itemtype === 'number') {
      //收集模版中需要合计的列
      isTotal.push(eve.key);
    }
  });
  var noTotalRows = config.noTotalRows,
      _config$noTotalCol = config.noTotalCol,
      noTotalCol = _config$noTotalCol === void 0 ? [] : _config$noTotalCol,
      showTotal = config.showTotal,
      allowTotalRows = config.allowTotalRows; //  业务组传入设置不需要合计的行和列 和是否展示从左列
  // 将这个不让合计的行的这个提到外面来，减少循环

  var noTotalCode = {};

  if (Object(api_index_["isFunction"])(noTotalRows)) {
    if (Array.isArray(noTotalRows.call(_this)) && noTotalRows.call(_this).length > 0) {
      noTotalRows.call(_this).forEach(function (eve) {
        var code = eve.code,
            indexArr = eve.indexArr; //获取当前前行不需要合计的属性

        noTotalCode[indexArr] = code;
      });
    }
  } // 业务组自己注册进来的需要合计的行提出来，解决效率问题


  var allowTotal = [];

  if (Object(api_index_["isFunction"])(allowTotalRows)) {
    allowTotal = allowTotalRows.call(_this);
  }

  rows.forEach(function (eve, index) {
    /*业务组自己注册进来的需要合计的行*/
    if (Object(api_index_["isFunction"])(allowTotalRows)) {
      if (!allowTotal.includes(index)) {
        return;
      }
    }

    var values = eve.values || eve;
    Object.keys(values).forEach(function (key) {
      var _ref = values[key] || {},
          value = _ref.value,
          scale = _ref.scale;

      if (!Object(api_index_["isWrong"])(value) && !Object(api_index_["isBooleanType"])(value) && !Number.isNaN(Number(value))) {
        if ((Object.keys(noTotalCode).length < 1 || Object.keys(noTotalCode).length > 0 && (!noTotalCode[index] || !noTotalCode[index].includes(key))) && key !== 'numberindex' && !noTotalCol.includes(key)) {
          var finalScale = Number(!Object(api_index_["isWrong"])(scale) && scale != "-1" ? scale : totalScale[key] || 8); // showTotal  意味着要进行外部控制  如果不使用 noTotalCol 控制列 会导致所有列都会计算合计

          if (showTotal) {
            //不是通过模版设置展示合计行时
            totalDataObj[key] = Object(api_index_["sum"])(Object(api_index_["formatDot"])(totalDataObj[key] || 0, finalScale), Object(api_index_["formatDot"])(Object(api_index_["convertNum"])(value), finalScale));
          } else {
            //通过模版设置展示合计行时
            if (isTotal.includes(key)) {
              //判断是否需要合计
              totalDataObj[key] = Object(api_index_["sum"])(Object(api_index_["formatDot"])(totalDataObj[key] || 0, finalScale), Object(api_index_["formatDot"])(Object(api_index_["convertNum"])(value), finalScale));
            }
          }
        }
      }
    });
  });
  return [totalDataObj];
}
function getTotalScale(totalColumns, rows) {
  var totalScaleObj = {}; //收集合计每格精度

  totalColumns.forEach(function (item) {
    //便利合计行所有列
    var scale = 0;
    rows.forEach(function (eve) {
      var values = eve.values || eve; //便利表格所有数据

      var valueItem = values[item.key]; //缓存每格数据

      if (valueItem && !Object(api_index_["isWrong"])(valueItem.value) && !Object(api_index_["isWrong"])(valueItem.scale) && valueItem.scale != -1 && Number(valueItem.scale) > scale) {
        //当数据中的精度大于当前缓存的精度， 覆盖当前缓存精度
        scale = Number(valueItem.scale);
      } else if (valueItem && !Object(api_index_["isWrong"])(valueItem.value) && (Object(api_index_["isWrong"])(valueItem.scale) || valueItem.scale == '-1')) {
        //当数据中没有精度并且模版设置了精度，覆盖当前缓存精度
        var itemScale = item.scale ? Number(item.scale) : 0;

        if (itemScale > scale) {
          scale = itemScale;
        }
      } //模版的精短暂时不判断，有需求在说

    });
    totalScaleObj[item.key] = scale; //存储每格最终精度
  });
  return totalScaleObj;
}
function getFinalTotalData(totalData, totalScale) {
  Object.keys(totalData).forEach(function (eve) {
    //便利合计行数据的属性
    // if (isNumber(totalData[eve])) {
    if (eve != 'checkbox' && eve != 'numberindex') {
      //判断合计行每格数据类型，如果为数字，进行精度转化
      totalData[eve] = Object(api_index_["formatAcuracy"])(totalData[eve], totalScale[eve]); //转换精度重新赋值
    }
  });
  return [totalData];
}
function getTotalColumns(columns) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var visibleColumns = [];
  filterVisible(columns, visibleColumns, config);
  return visibleColumns;
}

function filterVisible(columns, newColumns, config) {
  var numberPd = config.numberPd || 20;
  columns.forEach(function (item) {
    var children = item.children,
        visible = item.visible,
        attrcode = item.attrcode,
        width = item.width,
        fixed = item.fixed,
        istotal = item.istotal,
        scale = item.scale,
        itemtype = item.itemtype,
        islock = item.islock;

    if (!Object(api_index_["isUndefined"])(children) && children.length) {
      if (visible) {
        filterVisible(children, newColumns, config);
      }
    } else {
      var finalFixed = islock && !fixed ? 'left' : fixed;

      if (visible) {
        var colItem = {
          key: attrcode,
          dataIndex: attrcode,
          attrcode: attrcode,
          itemtype: itemtype,
          width: width,
          fixed: finalFixed,
          istotal: istotal,
          scale: scale
        };

        if (attrcode === 'opr' && !width) {
          //如果操作列没有值，则付200px宽度
          colItem.width = 200;
        } //合计行中数字类型，右对齐


        if (attrcode !== 'checkbox' && attrcode !== 'numberindex') {
          colItem.render = function (text, record) {
            // let iWidth = 'calc(100% - 46px)';
            // 三大表与 转单 树表等不一样
            var iWidth = 'calc(100% - ' + numberPd + 'px)';
            var styleObj = {
              textAlign: 'right',
              width: iWidth
            };
            return record[attrcode] ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
              className: "total-row-table-cell",
              style: styleObj,
              fieldid: Object(api_index_["getSysFieldid"])(attrcode)
            }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tooltip"], {
              className: "tooltip-word-color table-pagination-tip",
              placement: "top",
              delay: 1,
              overlay: record[attrcode]
            }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
              className: "ellipsis"
            }, Object(api_index_["formatNumber"])(record[attrcode])))) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, " \xA0");
          };
        }

        newColumns.push(colItem);
      }
    }
  });
} //空白列


var util_addBlankCol = function addBlankCol(tableDom, columns) {
  if (tableDom && columns.length) {
    var mulHeaderFlag = false,
        blankrowFlag = false; //最后一列是操作列，且不是固定列的flag

    var oprNotFixFlag = false;
    var attrcodeArr = columns.map(function (item) {
      if (item.children) {
        mulHeaderFlag = true;
      }

      if (item.attrcode == 'opr' && !item.fixed) {
        oprNotFixFlag = true;
      }

      if (item.attrcode == 'blankrow') {
        blankrowFlag = true;
      }

      return item.attrcode;
    });

    if (!mulHeaderFlag && !oprNotFixFlag && !blankrowFlag) {
      var columnsWidth = 0;
      var isopr = false;

      if (attrcodeArr[attrcodeArr.length - 1] !== 'opr') {
        for (var i = 0; i < columns.length - 1; i++) {
          switch (util_typeof(columns[i].width)) {
            case 'undefined':
              columnsWidth = columnsWidth + 120;
              break;

            case 'number':
              columnsWidth = columnsWidth + columns[i].width;
              break;

            case 'string':
              var a = columns[i].width;
              columnsWidth = Number(a.replace(/px/, '')) + columnsWidth;
              break;
          }
        }
      } else {
        isopr = true;

        for (var j = 0; j < columns.length; j++) {
          if (j !== columns.length - 2) {
            switch (util_typeof(columns[j].width)) {
              case 'undefined':
                columnsWidth = columnsWidth + 120;
                break;

              case 'number':
                columnsWidth = columnsWidth + columns[j].width;
                break;

              case 'string':
                var w = columns[j].width;
                columnsWidth = Number(w.replace(/px/, '')) + columnsWidth;
                break;
            }
          }
        }
      }

      var lastColWidth = tableDom.getBoundingClientRect().width - columnsWidth;

      if (lastColWidth > 300) {
        blankrowFlag = true;
        var obj = {
          title: '',
          key: 'blankrow',
          dataIndex: 'blankrow',
          attrcode: 'blankrow',
          className: 'blankrow',
          visible: true,
          itemtype: 'customer',
          width: 20,
          render: function render() {
            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null);
          }
        };

        if (isopr) {
          columns.splice(columns.length - 1, 0, obj);
        } else {
          columns.push(obj);
        }
      }
    }
  }

  return columns;
};
// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/total/index.js
function total_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { total_typeof = function _typeof(obj) { return typeof obj; }; } else { total_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return total_typeof(obj); }

function total_extends() { total_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return total_extends.apply(this, arguments); }

function total_toConsumableArray(arr) { return total_arrayWithoutHoles(arr) || total_iterableToArray(arr) || total_unsupportedIterableToArray(arr) || total_nonIterableSpread(); }

function total_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function total_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return total_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return total_arrayLikeToArray(o, minLen); }

function total_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function total_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return total_arrayLikeToArray(arr); }

function total_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function total_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function total_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function total_createClass(Constructor, protoProps, staticProps) { if (protoProps) total_defineProperties(Constructor.prototype, protoProps); if (staticProps) total_defineProperties(Constructor, staticProps); return Constructor; }

function total_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) total_setPrototypeOf(subClass, superClass); }

function total_setPrototypeOf(o, p) { total_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return total_setPrototypeOf(o, p); }

function total_createSuper(Derived) { var hasNativeReflectConstruct = total_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = total_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = total_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return total_possibleConstructorReturn(this, result); }; }

function total_possibleConstructorReturn(self, call) { if (call && (total_typeof(call) === "object" || typeof call === "function")) { return call; } return total_assertThisInitialized(self); }

function total_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function total_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function total_getPrototypeOf(o) { total_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return total_getPrototypeOf(o); }








function total_total(HighTable) {
  var _temp;

  return _temp = /*#__PURE__*/function (_Component) {
    total_inherits(ModalTable, _Component);

    var _super = total_createSuper(ModalTable);

    function ModalTable(props) {
      var _this;

      total_classCallCheck(this, ModalTable);

      _this = _super.call(this, props);

      _this.addTotalAreaScrollEvent = function () {
        var totalArea = _this.total && _this.total.querySelector('.u-table-body');

        var bodyArea = _this.table && _this.table.querySelector('.u-table-body .scroll-container');

        var headerArea = _this.table && _this.table.querySelector('.u-table-content .u-table-scroll .u-table-header'); //合计行滚动条事件


        if (totalArea) {
          if (bodyArea) bodyArea.scrollLeft = totalArea.scrollLeft;
          if (headerArea) headerArea.scrollLeft = totalArea.scrollLeft;
        }
      };

      _this.addTotalInnerAreaScrollEvent = function () {
        var totalInnerArea = _this.total && _this.total.querySelector('.u-table-body .scroll-container');

        var bodyArea = _this.table && _this.table.querySelector('.u-table-body .scroll-container');

        var headerArea = _this.table && _this.table.querySelector('.u-table-content .u-table-scroll .u-table-header'); //合计行滚动条事件


        if (totalInnerArea) {
          if (bodyArea) bodyArea.scrollLeft = totalInnerArea.scrollLeft;
          if (headerArea) headerArea.scrollLeft = totalInnerArea.scrollLeft;
        }
      };

      _this.onDropBorder = function () {
        var th = _this.table.querySelectorAll('.nc-table:not(.total-row) >div.u-table-content >div.u-table-scroll >div:nth-child(1) .u-table-body table colgroup col');

        var totalBody = _this.total && _this.total.querySelectorAll('.u-table-scroll .u-table-body colgroup col');

        for (var i = 0, len = th.length; i < len; i++) {
          var newWidth = th[i].style.width;
          totalBody[i].style.width = newWidth;

          if (typeof newWidth === 'string') {
            newWidth = Number(newWidth.match(/\d+/g)[0]);
          }
        }

        var footerBody = _this.total && _this.total.querySelector('.u-table-body');

        footerBody.style.overflowX = 'auto';
      };

      _this.onDraggingBorder = function () {
        var th = _this.table.querySelectorAll('.nc-table:not(.total-row) >div.u-table-content >div.u-table-scroll >div:nth-child(1) .u-table-body table colgroup col');

        var totalBody = _this.total && _this.total.querySelectorAll('.u-table-scroll .u-table-body colgroup col');

        for (var i = 0, len = th.length; i < len; i++) {
          var newWidth = th[i].style.width;
          totalBody[i].style.width = newWidth;

          if (typeof newWidth === 'string') {
            newWidth = Number(newWidth.match(/\d+/g)[0]);
          }
        }

        var footerBody = _this.total && _this.total.querySelector('.u-table-body .scroll-container');

        footerBody.style.overflowX = 'auto';

        _this.hidebodyScrollbar();

        Object(utils["isFunction"])(_this.props.onDraggingBorder) && _this.props.onDraggingBorder();
      };

      _this.haveHorizontalScrollBar = function () {
        var outbody = _this.total && _this.total.querySelector('.u-table-body .scroll-container');

        if (outbody) {
          var innerbody = outbody.querySelector('table');
          return innerbody.offsetWidth > outbody.offsetWidth;
        }
      };

      _this.hidebodyScrollbar = function () {
        if (!_this.total) {
          return;
        }

        var tableFooter = _this.total;

        if (_this.haveHorizontalScrollBar()) {
          if (tableFooter) {
            if (_this.browser === 'Firefox' || _this.browser === 'IE' || _this.browser === 'Edge') {
              tableFooter.style.marginTop = '-17px';
            } else {
              tableFooter.style.marginTop = '-10px';
            }
          } //用于合计行文字上下居中 NCCLOUD-191974


          var totalTd = _this.total.querySelectorAll('td');

          if (totalTd && totalTd.length) {
            for (var i = 0, len = totalTd.length; i < len; i++) {
              if (_this.browser === 'Firefox' || _this.browser === 'IE' || _this.browser === 'Edge') {
                totalTd[i].style.paddingTop = '5px';
              } else {
                totalTd[i].style.paddingTop = '10px';
              }
            }
          }
        } else if (!_this.haveHorizontalScrollBar()) {
          if (tableFooter) {
            tableFooter.style.marginTop = '0px';
            var footerBody = tableFooter.querySelector('.u-table-body .scroll-container');
            footerBody.style.overflowX = 'visible';
          }

          var _totalTd = _this.total.querySelectorAll('td');

          if (_totalTd && _totalTd.length) {
            for (var _i = 0, _len = _totalTd.length; _i < _len; _i++) {
              _totalTd[_i].style.paddingTop = '0px';
            }
          }
        }
      };

      _this.handleFooter = function () {
        var _this$props = _this.props,
            columns = _this$props.columns,
            data = _this$props.data,
            _this$props$totalConf = _this$props.totalConfig,
            totalConfig = _this$props$totalConf === void 0 ? {} : _this$props$totalConf,
            _this$props$checkColC = _this$props.checkColConfig,
            checkColConfig = _this$props$checkColC === void 0 ? {} : _this$props$checkColC,
            inserttableTotalConfig = _this$props.inserttableTotalConfig,
            numberPd = _this$props.numberPd;
        var finalColumns = [];
        var totalData = {};

        if (inserttableTotalConfig) {
          finalColumns = inserttableTotalConfig.totalColumns;
          totalData = inserttableTotalConfig.totalData;
        } else {
          var json = _this.state.json; //获得合计行的 items

          finalColumns = getTotalColumns(columns, {
            numberPd: totalConfig.numberPd
          }); // 获得 每一列的精度

          var totalScale = getTotalScale(finalColumns, data); //合计行的data

          totalData = getTotalData(finalColumns, data, totalConfig, totalScale || {});

          if (totalScale !== null) {
            // 获取合计行进行精度处理后的数据
            totalData = getFinalTotalData(totalData[0], totalScale);
          } //totalData = this.formNumber(totalData);
          //合计文字


          checkColConfig.showCheck ? totalData[0].checkbox = json['table002'] : totalData[0].numberindex = json['table002'];
        }

        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          fieldid: Object(api_index_["getSysFieldid"])('total-row')
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Table"], {
          minColumnWidth: 10,
          height: 35,
          ref: function ref(dom) {
            _this.total = external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(dom);
          },
          className: 'total-row',
          data: totalData,
          columns: total_toConsumableArray(finalColumns),
          rowKey: 'total-row',
          showHeader: false,
          headerScroll: false,
          scroll: {},
          bodyStyle: {
            minHeight: 35,
            overflowX: 'auto'
          }
        }));
      };

      _this.state = {
        json: {}
      };
      _this.browser = Object(api_index_["myBrowser"])();
      return _this;
    }

    total_createClass(ModalTable, [{
      key: "UNSAFE_componentWillMount",
      value: function UNSAFE_componentWillMount() {
        var _this2 = this;

        var callback = function callback(json) {
          _this2.setState({
            json: json
          });
        };

        Object(api_index_["getMultiLang"])({
          moduleId: 'page_table',
          callback: callback
        });
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var isTotal = this.props.isTotal;
        isTotal && this.addScrollEvent();
        isTotal && this.hidebodyScrollbar();
        window.addEventListener('resize', this.hidebodyScrollbar);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var isTotal = this.props.isTotal;
        isTotal && this.addScrollEvent();
        isTotal && this.hidebodyScrollbar();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var isTotal = this.props.isTotal;
        isTotal && this.removeScrollEvent();
      } // 添加滚动事件

    }, {
      key: "addScrollEvent",
      value: function addScrollEvent() {
        //每次重新绑定
        this.removeScrollEvent();
        var totalArea = this.total && this.total.querySelector('.u-table-body');
        var totalInnerArea = this.total && this.total.querySelector('.u-table-body .scroll-container');
        totalArea && totalArea.addEventListener('scroll', this.addTotalAreaScrollEvent);
        totalInnerArea && totalInnerArea.addEventListener('scroll', this.addTotalInnerAreaScrollEvent); // 目的是解决 火狐浏览器下 滚动条事件失效问题 NCCLOUD-163960

        if (Object(api_index_["myBrowser"])() == 'Firefox') {
          requestAnimationFrame(function () {
            totalArea.style.overflowX = 'auto';
            totalArea.style.marginBottom = '0px';
          });
          totalArea.style.marginBottom = '17px';
          totalArea.style.overflowX = 'hidden';
        }
      }
    }, {
      key: "removeScrollEvent",
      // 去除滚动事件
      value: function removeScrollEvent() {
        var totalArea = this.total && this.total.querySelector('.u-table-body');
        var totalInnerArea = this.total && this.total.querySelector('.u-table-body .scroll-container');
        totalArea && totalArea.removeEventListener('scroll', this.addTotalAreaScrollEvent);
        totalInnerArea && totalInnerArea.removeEventListener('scroll', this.addTotalInnerAreaScrollEvent);
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var isTotal = this.props.isTotal;

        if (isTotal) {
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(HighTable, total_extends({}, this.props, {
            footer: this.handleFooter,
            setCellValue: function setCellValue(params) {
              _this3.forceUpdate();

              Object(utils["isFunction"])(_this3.props.setCellValue) && _this3.props.setCellValue(params);
            },
            ref: function ref(dom) {
              _this3.table = external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(dom);
            },
            onDraggingBorder: function onDraggingBorder() {
              _this3.onDraggingBorder();
            }
          }));
        } else {
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(HighTable, this.props);
        }
      }
    }]);

    return ModalTable;
  }(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]), _temp;
}
// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/filter/panel.js
var panel_this = undefined;

function panel_toConsumableArray(arr) { return panel_arrayWithoutHoles(arr) || panel_iterableToArray(arr) || panel_unsupportedIterableToArray(arr) || panel_nonIterableSpread(); }

function panel_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function panel_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function panel_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return panel_arrayLikeToArray(arr); }

function panel_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function panel_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { panel_ownKeys(Object(source), true).forEach(function (key) { panel_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { panel_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function panel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || panel_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function panel_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return panel_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return panel_arrayLikeToArray(o, minLen); }

function panel_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Descripttion: 过滤
 * @version:
 * @Author: bbq
 * @Date: 2020-08-03 10:17:12
 * @LastEditors: bbq
 * @LastEditTime: 2021-01-15 18:05:08
 */






var ROW_STATUS = tableLibs_config["a" /* default */].ROW_STATUS;
console.log(tableLibs_config["a" /* default */]);



__webpack_require__(1880);

var Header = base_index_["Modal"].Header,
    Title = base_index_["Modal"].Title,
    Body = base_index_["Modal"].Body,
    Footer = base_index_["Modal"].Footer;
var panel_Option = base_index_["Select"].Option;
/**
 * 数据处理
 * @param {*} IType 
 * @param {*} display 
 * @param {*} value 
 * @param {*} scale 
 * @param {*} attrcode 
 * @param {*} languageMeta 
 * @param {*} values 
 * @param {*} datatype 
 * @param {*} options 
 * @param {*} multiple 
 * @param {*} langJson 
 */

var panel_handleBrowse = function handleBrowse(IType, display, value, scale, attrcode, languageMeta, values, datatype, options, multiple, langJson) {
  // TODO 数据格式的转换
  // 特殊处理下逻辑型  枚举类型
  if (datatype === "32" && ["select", "checkbox", "radio"].includes(IType) && Object(utils["isArray"])(options) && !display && value !== null && value !== undefined) {
    if (IType === "checkbox" || multiple) {
      var displayList = options.filter(function (item) {
        return value.includes(item.value);
      }).map(function (option) {
        return option.display;
      });
      return displayList.join(",");
    } else {
      var _ref = options.filter(function (item) {
        return item.value == value;
      })[0] || {},
          _display = _ref.display;

      return _display;
    }
  }

  switch (true) {
    case tableLibs_config["a" /* default */].displayTypes.includes(IType):
      return display || value;

    case tableLibs_config["a" /* default */]["boolean"].includes(IType):
      return value == "Y" || value == true ? langJson["table_yes"] : langJson["table_no"];

    case tableLibs_config["a" /* default */].timeTypes.includes(IType):
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
      return Object(api_index_["formatNumber"])(Object(api_index_["formatAcuracy"])(value, scale), true);

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

    default:
      return Object(api_index_["isNullOrVoid"])(display) ? value : display || value;
  }
};
/**
 * @description: 获取过滤后的数据
 * @param {type} 
 * @return {type} 
 */


var panel_getFilterData = function getFilterData(_ref2) {
  var allRows = _ref2.allRows,
      filterFactor = _ref2.filterFactor,
      customColData = _ref2.customColData,
      rowKey = _ref2.rowKey,
      langJson = _ref2.langJson;
  return filterFactor.reduce(function (currentFactor, factor) {
    var attrcode = factor.attrcode,
        itemtype = factor.itemtype,
        factorValue = factor.factorValue,
        metaScale = factor.scale,
        _factor$languageMeta = factor.languageMeta,
        languageMeta = _factor$languageMeta === void 0 ? [] : _factor$languageMeta,
        itemKey = factor.itemKey,
        datatype = factor.datatype,
        options = factor.options,
        multiple = factor.multiple;

    if (factorValue) {
      var filteredRow = currentFactor.filteredRow,
          filteredRowKeyValues = currentFactor.filteredRowKeyValues,
          filteredColumnKey = currentFactor.filteredColumnKey;
      allRows.forEach(function (row, index) {
        var values = row.values,
            status = row.status;
        var rowKeyValue = row[rowKey]; // console.log(rowKey);

        if (status !== ROW_STATUS["delete"]) {
          var tableItemValue = ''; // 自定义列穿进来的数据判断

          if (customColData && customColData[attrcode]) {
            tableItemValue = customColData[attrcode][rowKeyValue];
          } else {
            // 不是自定义列的情况
            if (values[attrcode]) {
              // 精度判断数据和模版的情况
              // tableItemValue = String(values[attrcode].display || values[attrcode].value);
              tableItemValue = panel_handleBrowse.call(panel_this, itemtype, values[attrcode].display, values[attrcode].value, metaScale, attrcode, languageMeta, values, datatype, options, multiple, langJson); // console.log(tableItemValue, 'sssss', itemtype,
              //     values[attrcode].display,
              //     values[attrcode].value,
              //     metaScale,
              //     attrcode,
              //     languageMeta,
              //     values,
              //     datatype,
              //     options,
              //     multiple, langJson);
            }
          } // 为了不区分大小写统一将字符串转为小写


          Object(utils["isWrong"])(tableItemValue) && (tableItemValue = '');
          var LowerTableItemValue = String(tableItemValue).toLowerCase();
          var LowerFactorValue = String(factorValue).toLowerCase();

          if (tableItemValue && LowerTableItemValue.includes(LowerFactorValue)) {
            !filteredColumnKey.includes(itemKey) && filteredColumnKey.push(itemKey);
            !filteredRowKeyValues.includes(rowKeyValue) && filteredRow.push(row);
            !filteredRowKeyValues.includes(rowKeyValue) && filteredRowKeyValues.push(rowKeyValue);
          }
        }
      });
    }

    return currentFactor;
  }, {
    filteredRow: [],
    filteredRowKeyValues: [],
    filteredColumnKey: []
  });
};
/**
 * 获取列模版的一维结构
 * @param columns 模版结构
 * @param finalFactorList 结果容器
 */


var panel_getFactorList = function getFactorList(_ref3) {
  var columns = _ref3.columns,
      finalFactorList = _ref3.finalFactorList;
  return columns.reduce(function (currentValue, column) {
    // 获取表格列配置
    var children = column.children,
        visible = column.visible;

    if (!Object(utils["isUndefined"])(children)) {
      // 判断和并列的情况
      getFactorList({
        columns: children,
        finalFactorList: currentValue
      });
      return currentValue;
    } else {
      visible && currentValue.push(column);
      return currentValue;
    }
  }, finalFactorList);
};
/**
 * 筛选条件录入项组件
 * @param {*} filterFactors 整体的筛选条件
 * @param {*} itemKey 筛选条件录入项组件标识
 * @param {*} filterItemList 筛选条件录入项组件配置参数列表
 * @param {*} setFilterItemList 筛选条件录入项组件标识列表更新方法
 * @param {*} afterFilterItemList 有效的筛选项列表
 * @param {*} factorList 所有项的筛选条件数据集合
 * @param {*} columns 可以被选择的模版项集合
 * @param {*} currentTable 表格数据实例
 * @param {*} langJson 多语
 */


var panel_FilterItem = function FilterItem(_ref4) {
  var current = _ref4.filterFactors.current,
      itemKey = _ref4.itemKey,
      filterItemList = _ref4.filterItemList,
      setFilterItemList = _ref4.setFilterItemList,
      afterFilterItemList = _ref4.afterFilterItemList,
      factorList = _ref4.factorList,
      columns = _ref4.columns,
      langJson = _ref4.langJson;

  /**
   * 当前筛选项的信息
   */
  var _filterItemList$itemK = filterItemList[itemKey],
      selectedAttr = _filterItemList$itemK.selectedAttr,
      selectFcous = _filterItemList$itemK.selectFcous,
      inputFocus = _filterItemList$itemK.inputFocus;
  /**
   * 当前项的筛选条件
   */

  var echoInputValue = '';
  var currentFactor = current[itemKey];

  if (currentFactor) {
    var factorValue = currentFactor.factorValue;
    factorValue && (echoInputValue = factorValue);
  }

  var _useState = Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["useState"])(echoInputValue),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["useState"])(selectedAttr),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedValue = _useState4[0],
      setSelectedValue = _useState4[1];
  /**
   * select列字段选择回调
   * @param {*} attr 列的字段
   */


  var handleSelectChange = function handleSelectChange(attr) {
    var afterFilterItemListCurrent = afterFilterItemList.current;
    /**
     * 更新select的选项
     */

    filterItemList[itemKey].selectedAttr = attr;
    setSelectedValue(attr);
    /**
     * 设置列字段标题的筛选状态
     */

    var filteringList = Object.values(filterItemList).map(function (filterItem) {
      return filterItem.selectedAttr;
    });
    var filteredList = Object.values(afterFilterItemListCurrent).map(function (afterFilterItem) {
      return afterFilterItem.selectedAttr;
    });
    columns.forEach(function (column) {
      var attrcode = column.attrcode;

      if (filteringList.includes(attrcode)) {
        column.filterStatus = 'filtering';
      } else {
        column.filterStatus = '';
      }

      if (filteredList.includes(attrcode)) {
        column.filterStatus = 'filtered';
      }
    });
    /**
     * 更改表格, 更新筛选标识
     */
    // tableScope.setState({ table: currentTable });

    /**
     * 当选择‘请选择’的时候,将当前筛选条件清空,pselect时请选择的意思
     */

    if (attr === 'pselect') {
      Reflect.deleteProperty(current, itemKey);
      return;
    }
    /**
     * 1.如果当前筛选项已经选择了筛选条件, 此时就将当前筛选条件和之前的筛选条件合并
     */


    if (currentFactor) {
      current[itemKey] = panel_objectSpread(panel_objectSpread({}, currentFactor), factorList[attr]);
    } else {
      /**
       * 1.如果当前筛选项没有筛选条件, 此时就将当前筛选条件当作筛选条件
       */
      current[itemKey] = panel_objectSpread(panel_objectSpread({}, factorList[attr]), {}, {
        factorValue: inputValue,
        itemKey: itemKey
      });
    }
  };
  /**
   * input输入条件内容回调
   * @param {*} value 输入的内容
   */


  var handleInputChange = function handleInputChange(value) {
    /**
     * 1.如果当前筛选项已经选择了筛选条件, 才给条件添加筛选内容
     */
    if (currentFactor) {
      current[itemKey] = panel_objectSpread(panel_objectSpread({}, currentFactor), {}, {
        factorValue: value,
        itemKey: itemKey
      });
      /**
       * 更新input的值
       * 更新筛选项的渲染配置的值
       * pselect时请选择的意思
       */

      setInputValue(value);
    } else if (selectedValue !== 'pselect') {
      /**
       * 1.当前选择的条件不是‘请选择’时, 添加当前项的筛选条件
       */
      current[itemKey] = panel_objectSpread(panel_objectSpread({}, factorList[selectedValue]), {}, {
        factorValue: value,
        itemKey: itemKey
      });
      /**
       * 更新input的值
       * 更新筛选项的渲染配置的值
       */

      setInputValue(value);
    }
  };
  /**
   * 删除按钮回调
   */


  var handleDel = function handleDel() {
    /**
     * 删除当前项
     */
    Reflect.deleteProperty(filterItemList, itemKey);
    /**
     * 删除当前项的筛选条件
     */

    Reflect.deleteProperty(current, itemKey);
    /**
     * 更新筛选标识
     */

    var afterFilterItemListCurrent = afterFilterItemList.current;
    var filteringList = Object.values(filterItemList).map(function (filterItem) {
      return filterItem.selectedAttr;
    });
    var filteredList = Object.values(afterFilterItemListCurrent).map(function (afterFilterItem) {
      return afterFilterItem.selectedAttr;
    });
    columns.forEach(function (column) {
      var attrcode = column.attrcode;

      if (!filteringList.includes(attrcode)) {
        column.filterStatus = '';
      }

      if (filteredList.includes(attrcode)) {
        column.filterStatus = 'filtered';
      }
    });
    /**
     * 更新筛选标识, 和筛选项
     */
    // tableScope.setState({ table: currentTable });

    setFilterItemList(panel_objectSpread({}, filterItemList));
  };

  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    className: "filter-item-container"
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    className: "select-container"
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Select"], {
    showClear: false,
    autoFocus: selectFcous,
    value: selectedValue,
    onChange: handleSelectChange
  }, [{
    attrcode: 'pselect',
    label: langJson['table0026']
  }].concat(panel_toConsumableArray(columns)).map(function (column) {
    var attrcode = column.attrcode,
        label = column.label,
        title = column.title;
    var option = title || label;

    if (Object(utils["isFunction"])(option)) {
      console.warn('the column label is Function , maybe error');
      option = option({});
    }

    return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(panel_Option, {
      key: attrcode,
      value: attrcode
    }, option);
  }))), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Input"], {
    value: inputValue,
    disabled: selectedValue === 'pselect',
    onChange: handleInputChange // maxLength={20}
    ,
    autoFocus: inputFocus
  })), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
    className: "iconfont nc-theme-icon-font-c icon-shanchu",
    onClick: handleDel
  }));
};
/**
 * 筛选面板组件
 * @param {*} tableColumns  表格模版信息
 * @param {*} tableScope 表格实例
 * @param {*} tableName 表格名称
 * @param {*} langJson 多语
 * @param {*} handleResetCallBack 重置后回调
 * @param {*} handleFilterCallBack 筛选后回调
 * 
 */


var panel_FilterPanel = function FilterPanel(_ref5) {
  var tableColumns = _ref5.tableColumns,
      tableScope = _ref5.tableScope,
      filterData = _ref5.filterData,
      customColData = _ref5.customColData,
      rowKey = _ref5.rowKey,
      selectedAttr = _ref5.selectedAttr,
      filterStatus = _ref5.filterStatus,
      isReset = _ref5.isReset,
      handleResetCallBack = _ref5.handleResetCallBack,
      handleFilterCallBack = _ref5.handleFilterCallBack,
      tableName = _ref5.tableName,
      langJson = _ref5.langJson,
      _ref5$open = _ref5.open,
      open = _ref5$open === void 0 ? false : _ref5$open,
      onHide = _ref5.onHide;

  /**
   * FilterPanel的真实dom
   */
  var FilterPanelRef = null;
  /**
   * 保存整体的筛选条件
   */

  var filterFactors = Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["useRef"])({});
  /**
   * 筛选后回显筛选项配置列表
   */

  var afterFilterItemList = Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["useRef"])({});
  /**
   * 筛选后回显筛选项的筛选条件列表
   */

  var afterFilterFactors = Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["useRef"])({});
  /**
   * 筛选条件录入项组件配置参数列表, 通过这个列表渲染录入项组件
   */

  var _useState5 = Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["useState"])({}),
      _useState6 = _slicedToArray(_useState5, 2),
      filterItemList = _useState6[0],
      setFilterItemList = _useState6[1];
  /**
   * 列筛选状态
   */
  // const [columnStatus, setColumnStatus] = useState({});

  /**
   * 当前筛选列
   */


  var _useState7 = Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["useState"])({
    selectedAttr: selectedAttr,
    filterStatus: filterStatus
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      current = _useState8[0],
      setCurrent = _useState8[1];
  /**
   * 模态框的状态, 默认隐藏
   */
  // const [panelStatus, setPanelStatus] = useState(open);
  // 改为始终受控

  /**
   * 模态框的提示
   */


  var _useState9 = Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["useState"])(''),
      _useState10 = _slicedToArray(_useState9, 2),
      filterTips = _useState10[0],
      setFilterTips = _useState10[1];
  /**
   * 将模版处理成一维的
   */


  var columns = Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["useMemo"])(function () {
    return panel_getFactorList({
      columns: tableColumns,
      finalFactorList: []
    });
  }, [tableColumns]);
  /**
   * 将模版数据处理,整理为每种类型的的筛选条件
   */

  var factorList = Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["useMemo"])(function () {
    return columns.reduce(function (currentValue, column) {
      var attrcode = column.attrcode,
          itemtype = column.itemtype,
          languageMeta = column.languageMeta,
          scale = column.scale,
          datatype = column.datatype,
          options = column.options,
          multiple = column.multiple;
      currentValue[attrcode] = {
        attrcode: attrcode,
        itemtype: itemtype,
        languageMeta: languageMeta,
        scale: scale,
        datatype: datatype,
        options: options,
        multiple: multiple
      };
      return currentValue;
    }, {});
  }, [columns]);
  /**
   * 每次弹开重新渲染
   * 关闭弹窗回调
   */

  var handleHide = function handleHide() {
    // 设置选择项
    filterFactors.current = {}; // 清除不符合的过滤项

    setFilterItemList({}); // 不清空 减少更新
    // 清空提示信息

    filterTips.length && setFilterTips(''); // 这里更新状态的顺序会导致  弹窗可能不能正确销毁

    setTimeout(function () {
      // 关闭弹窗
      onHide && onHide({
        filterItemList: filterItemList,
        afterFilterItemList: afterFilterItemList,
        arrColumns: columns
      });
    }, 20);
  };
  /**
   * 以前是可以在外部直接调用的  现在不允许 外部的条件要传入尽量才行 然后执行默认筛选
   * 筛选按钮回调
   * @filterFactor 筛选条件 用于在卡片返回列表时重新筛选使用
   * @filterResultItem 是筛选结果项
   */


  var handleFilter = function handleFilter(filterFactor, filterResultItem) {
    // 如果传入筛选条件,那就使用传入的
    filterFactor && (filterFactors.current = filterFactor);
    filterFactor && (afterFilterFactors.current = filterFactor);
    filterResultItem && (afterFilterItemList.current = filterResultItem);
    var filterFactorsCurrent = filterFactors.current;
    var afterFilterItemListCurrent = afterFilterItemList.current;
    var afterFilterFactorsCurrent = afterFilterFactors.current; // 筛选并更新表格显示数据

    var _getFilterData = panel_getFilterData({
      // 筛选原数据, 去除筛选api可能添加的filterindex
      allRows: filterData.map(function (row) {
        if (row.filterIndex) {
          delete row.filterIndex;
        }

        return row;
      }),
      // 筛选条件
      filterFactor: Object.values(filterFactorsCurrent),
      // 自定义列传入数据
      customColData: customColData,
      rowKey: rowKey,
      langJson: langJson
    }),
        filteredRow = _getFilterData.filteredRow,
        filteredRowKeyValues = _getFilterData.filteredRowKeyValues,
        filteredColumnKey = _getFilterData.filteredColumnKey; // 判断筛选结果


    console.log(filteredRow, filteredRowKeyValues, filteredColumnKey);

    if (filteredRow.length) {
      // 清空提示
      setFilterTips(''); // 存储有效的筛选项和筛选条件列表

      var _filteredColumnKey$re = filteredColumnKey.reduce(function (currentValue, attr) {
        var newAfterFilterItemListCurrent = currentValue.newAfterFilterItemListCurrent,
            newAfterFilterFactorsCurrent = currentValue.newAfterFilterFactorsCurrent;

        if (afterFilterItemListCurrent[attr]) {
          newAfterFilterItemListCurrent[attr] = afterFilterItemListCurrent[attr];
          newAfterFilterFactorsCurrent[attr] = afterFilterFactorsCurrent[attr];
        } else {
          newAfterFilterItemListCurrent[attr] = filterItemList[attr];
          newAfterFilterFactorsCurrent[attr] = filterFactorsCurrent[attr];
        }

        return currentValue;
      }, {
        newAfterFilterFactorsCurrent: {},
        newAfterFilterItemListCurrent: {}
      }),
          newAfterFilterItemListCurrent = _filteredColumnKey$re.newAfterFilterItemListCurrent,
          newAfterFilterFactorsCurrent = _filteredColumnKey$re.newAfterFilterFactorsCurrent; // 缓存筛选条件


      afterFilterItemList.current = newAfterFilterItemListCurrent;
      afterFilterFactors.current = newAfterFilterFactorsCurrent; // 修改列上面的状态

      var filteringList = Object.values(filterItemList).map(function (filterItem) {
        return filterItem.selectedAttr;
      });
      var filteredList = Object.values(newAfterFilterItemListCurrent).map(function (afterFilterItem) {
        return afterFilterItem.selectedAttr;
      });
      columns.forEach(function (column) {
        var attrcode = column.attrcode;

        if (filteredList.includes(attrcode)) {
          column.filterStatus = 'filtered';
        } else if (!filteringList.includes(attrcode)) {
          column.filterStatus = '';
        }
      }); // 设置列状态
      // 设置行状态
      // 处理已选等逻辑

      handleFilterCallBack && handleFilterCallBack({
        filteredRow: filteredRow,
        filterItemList: filterItemList,
        filteredRowKeyValues: filteredRowKeyValues,
        afterFilterItemList: newAfterFilterItemListCurrent,
        afterFilterFactors: newAfterFilterFactorsCurrent,
        arrColumns: columns
      }); // 关闭弹窗

      handleHide();
    } else {
      // '没有找到，换个词试一试'
      setFilterTips(langJson['table0027']);
    }
  };
  /**
   * enter执行筛选的快捷键
   */


  var enterCallBack = function enterCallBack(e) {
    if (e && e.keyCode == 13) {
      // enter 键
      handleFilter();
    }
  };
  /**
   * 模态框打开结束时回调
   */


  var handleEntered = function handleEntered() {
    FilterPanelRef.childNodes[1].querySelector('.modal-content-parent,.modal-content-resizeWrap-parent').addEventListener('keydown', enterCallBack);
    setFilterItemList(panel_objectSpread({}, filterItemList));
  };
  /**
   * 模态框关闭结束时回调
   */


  var handleExited = function handleExited() {
    FilterPanelRef.childNodes[1].querySelector('.modal-content-parent,.modal-content-resizeWrap-parent').removeEventListener('keydown', enterCallBack);
  };
  /**
   * 添加按钮回调
   */


  var handleAdd = function handleAdd() {
    /**
     * 新增筛选条件录入项组件的标识, 新增筛选项
     */
    var key = Object(utils["getRandom"])();
    Object.values(filterItemList).forEach(function (filterItem) {
      filterItem.selectFcous = false;
      filterItem.inputFocus = false;
    });
    filterItemList[key] = {
      key: key,
      selectedAttr: 'pselect',
      selectFcous: true,
      inputFocus: false
    };
    setFilterItemList(panel_objectSpread({}, filterItemList));
  };
  /**
   * 清空按钮回调
   */


  var handleClear = function handleClear() {
    // 清空筛选项
    var key = Object(utils["getRandom"])();
    setFilterItemList(panel_defineProperty({}, key, {
      key: key,
      selectedAttr: 'pselect',
      selectFcous: true,
      inputFocus: false
    })); // 清空筛选条件

    filterFactors.current = {}; // 设置表格筛选图标

    var filteringList = Object.values(filterItemList).map(function (filterItem) {
      return filterItem.selectedAttr;
    });
    columns.forEach(function (column) {
      var attrcode = column.attrcode;

      if (filteringList.includes(attrcode)) {
        column.filterStatus === 'filtering' && (column.filterStatus = '');
      }
    }); // 不更新表格
    // tableScope.setState({ table: currentTable });
  };
  /**
   * 清空表格筛选的标识
   */


  var handleClearFilterStatus = function handleClearFilterStatus() {
    columns.forEach(function (column) {
      column.filterStatus = '';
    });
    tableScope.filterData = null;
    afterFilterItemList.current = {};
    afterFilterFactors.current = {}; // 去除 其他逻辑放到外部 store去处理
    // handleResetCallBack && handleResetCallBack({
    //     filterItemList,
    //     arrColumns: columns,
    // });
  };
  /**
   * 重置按钮回调
   */


  var handleReset = function handleReset() {
    /**
     * 清空筛选后回显筛选项配置列表
     */
    afterFilterItemList.current = {};
    /**
     * 清空筛选后回显筛选项的筛选条件列表
     */

    afterFilterFactors.current = {}; // 设置表格筛选图标, 重置时将筛选图标全部清空

    columns.forEach(function (column) {
      column.filterStatus = '';
    });
    handleResetCallBack && handleResetCallBack({
      filterItemList: filterItemList,
      arrColumns: columns
    });
    /**
     * 关闭弹窗
     */

    handleHide();
  };
  /**
   * CtrlF打开弹窗回调
   */


  var handleCtrlFOpen = function handleCtrlFOpen() {
    var finalFilterItemList = null;
    var afterFilterFactorsCurrent = afterFilterFactors.current;
    var afterFilterItemListCurrent = afterFilterItemList.current;

    if (Object.keys(afterFilterItemListCurrent).length) {
      /**
       * 渲染缓存的有效的筛选项和筛选条件
       */
      filterFactors.current = afterFilterFactorsCurrent;
      finalFilterItemList = afterFilterItemListCurrent;
      setFilterItemList(finalFilterItemList);
    } else {
      /**
       * 当没有有效的筛选项和筛选条件时
       */
      var key = Object(utils["getRandom"])();
      Object.values(filterItemList).forEach(function (filterItem) {
        filterItem.selectFcous = false;
        filterItem.inputFocus = false;
      });
      filterItemList[key] = {
        key: key,
        selectedAttr: 'pselect',
        selectFcous: true,
        inputFocus: false
      };
    }
  };
  /**
   * 点击表头打开弹窗回调
   * 这里包含三种情况, 
   * 1.直接点击表头,弹出筛选框增一个筛选条件
   * 2.筛选成功点击成功图标,重新筛选, 如果只筛选了一项那个进行重置
   * 3.筛选成功, 点击表头其他区域, 弹出筛选框
   * 
   * @param selectedAttr 当前列
   * @param filterStatus 筛选状态
   */


  var handleHeaderOpen = function handleHeaderOpen(_ref6) {
    var selectedAttr = _ref6.selectedAttr,
        filterStatus = _ref6.filterStatus;
    var key = Object(utils["getRandom"])();
    var finalFilterItemList = null;
    var filterFactorsCurrent = filterFactors.current;
    var afterFilterFactorsCurrent = afterFilterFactors.current;
    var afterFilterItemListCurrent = afterFilterItemList.current;

    if (Object.keys(afterFilterItemListCurrent).length) {
      /**
       * 已经筛选过的情况下, 点击表头不点击筛选图标, 只是弹出筛选框,
       * 并且保存原有筛选项, 不增加筛选项
       */
      if (filterStatus === 'filtered') {
        handleCtrlFOpen();
        return;
      }
      /**
       * 具有有效的筛选项, 已经筛选出结果
       */


      var allocationSelectedAttrs = Object.values(afterFilterItemListCurrent).filter(function (filterItem) {
        filterItem.selectFcous = false;
        filterItem.inputFocus = false;
        return filterItem.selectedAttr === selectedAttr;
      });

      if (allocationSelectedAttrs.length) {
        /**
         * 当前点击列,为有效的筛选项, 将当前项筛选条件去掉重新筛选,
         * 如果去掉当前筛选条件后没有了筛选条件,执行重置操作
         */
        allocationSelectedAttrs.forEach(function (filterItem) {
          var key = filterItem.key;
          Reflect.deleteProperty(filterItemList, key);
          Reflect.deleteProperty(filterFactorsCurrent, key);
          Reflect.deleteProperty(afterFilterFactorsCurrent, key);
          Reflect.deleteProperty(afterFilterItemListCurrent, key);
        });
        filterFactors.current = afterFilterFactorsCurrent;
        finalFilterItemList = afterFilterItemListCurrent;

        if (Object.values(afterFilterItemListCurrent).length) {
          // 再次进行筛选
          handleFilter();
          return;
        } else {
          // 进行重置
          handleReset();
          return;
        }
      } else {
        /**
         * 当前点击列,不是有效的筛选项, 增加一个空筛选项
         */
        filterFactors.current = afterFilterFactorsCurrent;
        finalFilterItemList = panel_objectSpread(panel_objectSpread({}, afterFilterItemListCurrent), {}, panel_defineProperty({}, key, {
          key: key,
          selectedAttr: selectedAttr,
          selectFcous: false,
          inputFocus: true
        }));
        /**
         * 设置表格筛选图标
         */

        columns.forEach(function (column) {
          var attrcode = column.attrcode;

          if (selectedAttr === attrcode) {
            // 解决  多页签情况下  列缓存被清除的问题
            column.filterStatus = column.filterStatus || 'filtering';
          }
        });
      }

      setFilterItemList(panel_objectSpread({}, finalFilterItemList));
    } else {
      /**
       * 没有有有效的筛选项, 没有筛选出结果, 增加一个空筛选项
       */
      Object.values(filterItemList).forEach(function (filterItem) {
        filterItem.selectFcous = false;
        filterItem.inputFocus = false;
      });
      filterItemList[key] = {
        key: key,
        selectedAttr: selectedAttr,
        selectFcous: false,
        inputFocus: true
      };
      /**
       * 设置表格筛选图标
       */

      columns.forEach(function (column) {
        var attrcode = column.attrcode;

        if (selectedAttr === attrcode) {
          // 解决  多页签情况下  列缓存被清除的问题
          column.filterStatus = column.filterStatus || 'filtering';
        }
      });
    }
    /**
     * 1.打开弹窗
     */
    // setPanelStatus(true);

  }; // 更新下


  Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["useEffect"])(function () {
    console.log(isReset, 'isReset');
    isReset && handleClearFilterStatus();
  }, [isReset]); // 更新下

  Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["useEffect"])(function () {
    console.log(selectedAttr, filterStatus, 'currentFilter');
    selectedAttr && handleHeaderOpen({
      selectedAttr: selectedAttr,
      filterStatus: filterStatus
    });
  }, [selectedAttr, filterStatus]); // 给筛选按钮事件, 设置默认值, 解决报错

  var handleFilterClick = handleFilter.bind(null, null, null);
  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Modal"], {
    ref: function ref(dom) {
      FilterPanelRef = external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(dom);
    },
    size: "lg",
    zIndex: 800,
    show: open,
    backdrop: true //是否展示遮罩层
    ,
    onHide: handleHide.bind(null),
    backdropClosable: true,
    onEntered: handleEntered,
    onExited: handleExited,
    draggable: true,
    resizable: true,
    className: "filterPanel-modal",
    fieldid: "filterPanel"
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Header, {
    closeButton: true
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Title, {
    fieldid: "".concat(langJson['table0028']).concat(tableName || '')
  }, "".concat(langJson['table0028']).concat(tableName || '', ":"), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
    className: filterTips ? 'table-filter-tips' : 'filter-tips-hidden'
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
    className: "iconfont icon icon-gantanhao"
  }), filterTips))), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Body, null, Object.values(filterItemList).map(function (value) {
    var key = value.key;
    return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(panel_FilterItem, {
      key: Object(utils["getRandom"])(),
      itemKey: key,
      afterFilterItemList: afterFilterItemList,
      filterFactors: filterFactors,
      filterItemList: filterItemList,
      factorList: factorList,
      columns: columns,
      tableScope: tableScope,
      currentTable: {},
      setFilterItemList: setFilterItemList,
      langJson: langJson
    });
  }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    className: "add-btn-container"
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    className: "add-btn",
    fieldid: Object(api_index_["getSysFieldid"])('add_btn'),
    onClick: handleAdd
  }, "+".concat(langJson['table0029'])), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Button"], {
    onClick: handleClear,
    fieldid: "clear"
  }, langJson['table0030']))), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Footer, null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["ButtonGroup"], null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Button"], {
    className: "filter-btn",
    fieldid: "filter",
    colors: "primary",
    onClick: handleFilterClick
  }, langJson['table0028']), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Button"], {
    className: "reset-btn",
    fieldid: "reset",
    onClick: handleReset
  }, langJson['table0031'])), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Button"], {
    onClick: handleHide.bind(null),
    fieldid: "cancel"
  }, langJson['table_cancel'])));
};

/* harmony default export */ var panel = (panel_FilterPanel);
// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/filter/index.js
function filter_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { filter_typeof = function _typeof(obj) { return typeof obj; }; } else { filter_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return filter_typeof(obj); }

function filter_extends() { filter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return filter_extends.apply(this, arguments); }

function filter_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = filter_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function filter_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function filter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function filter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function filter_createClass(Constructor, protoProps, staticProps) { if (protoProps) filter_defineProperties(Constructor.prototype, protoProps); if (staticProps) filter_defineProperties(Constructor, staticProps); return Constructor; }

function filter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) filter_setPrototypeOf(subClass, superClass); }

function filter_setPrototypeOf(o, p) { filter_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return filter_setPrototypeOf(o, p); }

function filter_createSuper(Derived) { var hasNativeReflectConstruct = filter_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = filter_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = filter_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return filter_possibleConstructorReturn(this, result); }; }

function filter_possibleConstructorReturn(self, call) { if (call && (filter_typeof(call) === "object" || typeof call === "function")) { return call; } return filter_assertThisInitialized(self); }

function filter_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function filter_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function filter_getPrototypeOf(o) { filter_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return filter_getPrototypeOf(o); }

function filter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function filter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { filter_ownKeys(Object(source), true).forEach(function (key) { filter_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { filter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function filter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Descripttion: 过滤
 * @version:
 * @Author: bbq
 * @Date: 2020-08-03 10:17:12
 * @LastEditors: bbq
 * @LastEditTime: 2021-01-14 14:49:53
 */






__webpack_require__(1879);
/**
 * @description: 创建列上面的属性
 * @param {type} 
 * @return {type} 
 */


var filter_createFilterTitle = function createFilterTitle(columns) {
  var nonFilterable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var onTitleClick = arguments.length > 2 ? arguments[2] : undefined;
  // 过滤不可见的列
  // columns = filterColumns(columns, 'visible', false);
  //  返回渲染列
  return columns.map(function (item) {
    if (item.children) {
      return filter_objectSpread(filter_objectSpread({}, item), {}, {
        children: createFilterTitle(item.children, nonFilterable, onTitleClick)
      });
    }

    var className = item.className,
        filterStatus = item.filterStatus; // label 是为了兼容旧版
    // headerClick 是为了兼容旧版 TODO  props 属性的传递

    return filter_objectSpread(filter_objectSpread({}, item), {}, {
      className: classnames_default()(className, 'filterable-column'),
      titleIcon: function titleIcon() {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Fragment"], null, !nonFilterable.includes(item.attrcode) && filterStatus !== 'filtered' && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
          className: "iconfont th-filter icon-lieguolv",
          onClick: function onClick(e) {
            onTitleClick && onTitleClick(item);
          }
        }), !nonFilterable.includes(item.attrcode) && filterStatus === 'filtered' && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
          className: "iconfont th-filter icon-lieshaixuanx filtered",
          onClick: function onClick(e) {
            /**
             * 点击筛选图标, 只有当前被筛选时,直接重置,
             * 还有其他列同时被筛选时, 去除当前列筛选条件重新筛选
             */
            e.stopPropagation();
            onTitleClick && onTitleClick(item, true); // this.FilterPanelCallBack.current.handleHeaderOpen({ selectedAttr: attrcode });
          }
        }));
      }
    });
  });
};
/**
 * 创建过滤行
 * @param {*} Table 
 */


function filterRow(Table) {
  if (!Table) {
    console.error('缺少Table组件');
  } // TODO


  return /*#__PURE__*/function (_Component) {
    filter_inherits(MetaTable, _Component);

    var _super = filter_createSuper(MetaTable);

    function MetaTable(props) {
      var _this;

      filter_classCallCheck(this, MetaTable);

      _this = _super.call(this, props);
      _this.onTitleClick = _this.onTitleClick.bind(filter_assertThisInitialized(_this));
      _this.state = {
        open: false,
        filterColumns: []
      };
      _this.uuid = Object(utils["uuidv4"])();
      return _this;
    }
    /**
     * @description: 获取panel中要使用的  模板数据
     * @param {type} 
     * @return {type} 
     */


    filter_createClass(MetaTable, [{
      key: "getFilterPanelItems",
      value: function getFilterPanelItems() {
        var _this$props = this.props,
            columns = _this$props.columns,
            _this$props$nonFilter = _this$props.nonFilterable,
            nonFilterable = _this$props$nonFilter === void 0 ? ['numberindex', 'opr', 'checkbox'] : _this$props$nonFilter;
        return Object(utils["filterColumns"])(columns, function (column) {
          var attrcode = column.attrcode,
              visible = column.visible;
          return !nonFilterable.includes(attrcode) && visible;
        });
      }
      /**
       * @description: 头部点击事件
       * @param {type} 
       * @return {type} 
       */

    }, {
      key: "onTitleClick",
      value: function onTitleClick(column, icon) {
        var _this$props2 = this.props,
            arrColumns = _this$props2.arrColumns,
            _this$props2$nonFilte = _this$props2.nonFilterable,
            nonFilterable = _this$props2$nonFilte === void 0 ? ['numberindex', 'opr', 'checkbox'] : _this$props2$nonFilte; // console.log(column);

        var attrcode = column.attrcode,
            filterStatus = column.filterStatus;
        !nonFilterable.includes(attrcode) && this.setState(filter_objectSpread({
          open: icon ? false : true,
          selectedAttr: attrcode
        }, icon ? {} : {
          filterStatus: filterStatus
        })); // { selectedAttr: attrcode, filterStatus }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props3 = this.props,
            columns = _this$props3.columns,
            _this$props3$high_fil = _this$props3.high_filter,
            high_filter = _this$props3$high_fil === void 0 ? {} : _this$props3$high_fil,
            others = filter_objectWithoutProperties(_this$props3, ["columns", "high_filter"]);

        var _high_filter$langJson = high_filter.langJson,
            langJson = _high_filter$langJson === void 0 ? {} : _high_filter$langJson,
            _high_filter$alloweFi = high_filter.alloweFilter,
            alloweFilter = _high_filter$alloweFi === void 0 ? true : _high_filter$alloweFi,
            _high_filter$nonFilte = high_filter.nonFilterable,
            nonFilterable = _high_filter$nonFilte === void 0 ? ['numberindex', 'opr', 'checkbox'] : _high_filter$nonFilte,
            _handleResetCallBack = high_filter.handleResetCallBack,
            _handleFilterCallBack = high_filter.handleFilterCallBack,
            _onHide = high_filter.onHide,
            _high_filter$isReset = high_filter.isReset,
            isReset = _high_filter$isReset === void 0 ? false : _high_filter$isReset,
            panelTitle = high_filter.panelTitle,
            _high_filter$filterDa = high_filter.filterData,
            filterData = _high_filter$filterDa === void 0 ? [] : _high_filter$filterDa,
            customColData = high_filter.customColData,
            rowKey = high_filter.rowKey; // console.log(alloweFilter);

        var _this$state = this.state,
            open = _this$state.open,
            selectedAttr = _this$state.selectedAttr,
            filterStatus = _this$state.filterStatus;

        if (alloweFilter) {
          // 处理筛选时的表头
          columns = filter_createFilterTitle(columns, nonFilterable, this.onTitleClick);
        } // console.log('this column is', this.getFilterPanelItems());
        // console.log('langJson', langJson);
        // TODO 快捷键功能 CTRL + F


        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Fragment"], null, alloweFilter && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(panel, {
          tableColumns: this.getFilterPanelItems(),
          filterData: filterData,
          customColData: customColData,
          rowKey: rowKey,
          open: open,
          isReset: isReset,
          selectedAttr: selectedAttr,
          filterStatus: filterStatus,
          onHide: function onHide(params) {
            var arrColumns = params.arrColumns;
            var columnStatus = {}; // 设置表格筛选图标, 在正常关闭时, 只将filtering状态的图标清空

            arrColumns.forEach(function (column) {
              var attrcode = column.attrcode,
                  filterStatus = column.filterStatus;

              if (filterStatus === 'filtering') {
                column.filterStatus = '';
                columnStatus[attrcode] = {
                  filterStatus: ''
                };
              }
            });
            _onHide && _onHide(filter_objectSpread(filter_objectSpread({}, params), {
              columnStatus: columnStatus
            })); // 清掉当前的选择项

            _this2.setState({
              open: false,
              selectedAttr: '',
              filterStatus: ''
            });
          },
          tableScope: this,
          tableName: panelTitle // 筛选后的回调
          ,
          handleFilterCallBack: function handleFilterCallBack(params) {
            var filterItemList = params.filterItemList,
                afterFilterItemList = params.afterFilterItemList,
                arrColumns = params.arrColumns; // 记录要变话状态的列

            var columnStatus = {};
            var filteringList = Object.values(filterItemList).map(function (filterItem) {
              return filterItem.selectedAttr;
            });
            var filteredList = Object.values(afterFilterItemList).map(function (afterFilterItem) {
              return afterFilterItem.selectedAttr;
            }); // 改引用不太稳定

            arrColumns.forEach(function (column) {
              var attrcode = column.attrcode;

              if (filteredList.includes(attrcode)) {
                columnStatus[attrcode] = {
                  filterStatus: 'filtered'
                };
              } else if (!filteringList.includes(attrcode)) {
                columnStatus[attrcode] = {
                  filterStatus: ''
                };
              }
            }); // console.log(arrColumns, columnStatus);

            _handleFilterCallBack && _handleFilterCallBack(filter_objectSpread(filter_objectSpread({}, params), {
              columnStatus: columnStatus
            }));
          } // 筛选重置后的回调
          ,
          handleResetCallBack: function handleResetCallBack(params) {
            var arrColumns = params.arrColumns;
            var columnStatus = {}; // 设置表格筛选图标, 重置时将筛选图标全部清空

            arrColumns.forEach(function (column) {
              columnStatus[column.attrcode] = {
                filterStatus: ''
              };
            }); // console.log(columnStatus);

            _handleResetCallBack && _handleResetCallBack(filter_objectSpread(filter_objectSpread({}, params), {
              columnStatus: columnStatus
            }));
          },
          langJson: langJson
        }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Table, filter_extends({
          columns: columns
        }, others)));
      }
    }]);

    return MetaTable;
  }(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);
}
// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/selectable/Selector/index.js
function Selector_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Selector_typeof = function _typeof(obj) { return typeof obj; }; } else { Selector_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Selector_typeof(obj); }

function Selector_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Selector_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Selector_ownKeys(Object(source), true).forEach(function (key) { Selector_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Selector_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Selector_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Selector_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Selector_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Selector_createClass(Constructor, protoProps, staticProps) { if (protoProps) Selector_defineProperties(Constructor.prototype, protoProps); if (staticProps) Selector_defineProperties(Constructor, staticProps); return Constructor; }

function Selector_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Selector_setPrototypeOf(subClass, superClass); }

function Selector_setPrototypeOf(o, p) { Selector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Selector_setPrototypeOf(o, p); }

function Selector_createSuper(Derived) { var hasNativeReflectConstruct = Selector_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Selector_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Selector_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Selector_possibleConstructorReturn(this, result); }; }

function Selector_possibleConstructorReturn(self, call) { if (call && (Selector_typeof(call) === "object" || typeof call === "function")) { return call; } return Selector_assertThisInitialized(self); }

function Selector_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Selector_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Selector_getPrototypeOf(o) { Selector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Selector_getPrototypeOf(o); }

/*
 * @Descripttion: 
 * @version: 
 * @Author: bbq
 * @Date: 2020-08-07 16:24:53
 * @LastEditors: bbq
 * @LastEditTime: 2021-03-03 16:39:20
 */


__webpack_require__(1877);

var OFFSET = {
  x: 2,
  y: 2
}; // 获取px

function getPx(value) {
  return Math.abs(value) + 'px';
} // get nearest parent element matching selector   origin from stackoverflow  add by bbqin


var Selector_Closest = function Closest(el, selector) {
  if (!el) {
    return null;
  }

  var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      break;
    }

    el = el.parentElement;
  }

  return el;
};
/**
 * 获取父级可以滚动的元素 特指y轴
 * @param {DOM} el 
 */


var getScrollParentDOM = function getScrollParentDOM(el) {
  if (!el) {
    return null;
  }

  while (el) {
    if (el.style.overflowY === 'scroll' || el === document.body) {
      break;
    }

    el = el.parentElement;
  }

  return el;
};
/**
 * 设置样式
 * @param {DOM} $dom 
 * @param {Object} style 
 */


var setStyle = function setStyle($dom) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var key in style) {
    if (style.hasOwnProperty(key)) {
      $dom.style[key] = style[key];
    }
  }
};

var isHasClass = function isHasClass($dom, name) {
  return $dom && name && $dom.className.indexOf(name) !== -1;
}; // 添加class


var addClass = function addClass($dom, name) {
  !isHasClass($dom, name) && ($dom.className += " ".concat(name));
}; // 移除class


var removeClass = function removeClass($dom, name) {
  $dom && ($dom.className = $dom.className.replace(name, ''));
};

var isDomShow = function isDomShow($dom) {
  return $dom.style.display !== 'none';
};

var mouseButton = 0; // 鼠标左键

/**
 * 已知BUG 
 * 点击checkbox时  ctrl选中难以生效 猜测 可能是checkbox 自己的选中事件和本事件出现了冲突
 */

var Selectable = /*#__PURE__*/function (_React$Component) {
  Selector_inherits(Selectable, _React$Component);

  var _super = Selector_createSuper(Selectable);

  function Selectable(props) {
    var _this;

    Selector_classCallCheck(this, Selectable);

    _this = _super.call(this, props); // 框选响应遮罩

    _this.onMouseDown = function (e) {
      var canvas = _this.props.canvas; // 目标容器画布

      var $canvas = document.querySelector("".concat(canvas)); // console.log('onMouseDown', e);

      var ele = e.target;
      var $sideBox = $canvas && $canvas.querySelector('.edit-table-modal'); // mac 平台右键是使用control + 触摸板点击触发的  会有问题

      if (/Mac|iPod|iPhone|iPad/.test(navigator.platform) && (e.keyCode === '17' || e.key === 'Control' || e.code === 'ControlLeft') && e.button === mouseButton) {
        return;
      }

      if (e.button !== mouseButton || !$canvas || !$canvas.contains(ele) || !_this.getEnabled() || !ele || ele.className.indexOf('u-table-thead-th-drag-gap') !== -1 || $sideBox && $sideBox.contains(ele) || ele.parentElement.className.indexOf('u-table-thead-th-drag-gap') !== -1) {
        _this.hotkey = null;
        _this.drag = false;

        if ($sideBox && $sideBox.contains(ele)) {
          // 此时不能clearData 否则可能有问题
          return true;
        }

        var $setColumnMenu = document.querySelector('#nc-table-setColumnMenu');

        if ($canvas && !$canvas.contains(ele) && !($setColumnMenu && $setColumnMenu.contains(ele))) {
          var isSelect = $canvas.querySelector('.column-title-actived, .table-cell-actived'); // TODO 是否需要判断页面是否选中了内容

          isSelect && _this.clearData({
            isSelect: isSelect
          }, _this.hotkey);
        }

        return true;
      } // 注意顺序 


      _this.clearShape(); // 上面的方法会清空所有状态


      _this.startPoint = {
        x: e.clientX,
        y: e.clientY
      }; // 不同的键位判断

      if ((e.ctrlKey || e.metaKey) && e.shiftKey && _this.getEnabled('ctrl') && _this.getEnabled('shift')) {
        _this.hotkey = 'ctrl&shift';
      } else if ((e.ctrlKey || e.metaKey) && _this.getEnabled('ctrl')) {
        // e.metaKey 修复 mac commend 键
        // console.log(this.getItem(ele));
        _this.hotkey = 'ctrl'; // 将上一次选中的获取并转换

        var hasSelectorItem = _this.props.hasSelectorItem;

        var key = _this.getItemKey(_this.getItem(ele));

        var _isSelect = false; // 外部方法处理

        if (hasSelectorItem) {
          _isSelect = hasSelectorItem(_this.hotkey, key);
        } // 选中获取反选


        if (_this.selectorItem[key] || _isSelect) {
          // 移除
          delete _this.selectorItem[key]; // this.selectorItem[key] = false;
        } else {
          _this.selectorItem[key] = true;
          _this.startItem = key;
        }
      } else if (e.shiftKey && _this.getEnabled('shift')) {
        _this.hotkey = 'shift';
      } else {
        _this.hotkey = 'down';

        if (ele.getAttribute('cellDrag') && _this.getEnabled('drag')) {
          // 触发拖拽事件
          _this.drag = true;
          _this.hotkey = 'drag';
        } else {
          // 清理数据
          var _isSelect2 = $canvas && $canvas.querySelector('.column-title-actived, .table-cell-actived');

          _this.clearData({
            isSelect: _isSelect2
          }, _this.hotkey);
        } // 记录一下点击时的值


        var _key = _this.getItemKey(_this.getItem(ele));

        _this.startItem = _key;
      }
    };

    _this.onMouseOver = function (e) {
      _this.endItem = _this.getItemKey(_this.getItem(e.target)) || _this.endItem;
    };

    _this.onMouseMove = function (e) {
      var canvas = _this.props.canvas; // 目标容器画布

      var $canvas = document.querySelector("".concat(canvas));
      var response = _this.props.response; // 禁用了

      if (!_this.getEnabled('slide') || !$canvas || !$canvas.contains(e.target) && _this.$selectableShape !== e.target) {
        return false;
      } // console.log('onMouseMove');


      if (e.button == mouseButton && _this.hotkey && !_this.drag) {
        // 初始位置
        var X = _this.startPoint.x,
            Y = _this.startPoint.y,
            // 当前视口
        clientX = e.clientX,
            clientY = e.clientY,
            // 当前页面
        pageX = e.pageX,
            pageY = e.pageY,
            // 滚动条偏移量
        offsetY = pageY - clientY,
            offsetX = pageX - clientX,
            // width = document.body.clientWidth,
        // height = document.body.clientHeight,
        // 应该用窗口高度
        width = window.innerWidth,
            height = window.innerHeight,
            style = _this.$selectableShape.style; // 如果响应距离不够或者  响应遮罩未显示 就不进行遮罩的选择  以及是否是可用的功能

        if (Math.abs(clientY - Y) < response && Math.abs(clientX - X) < response || _this.endItem === _this.startItem) {
          return false;
        }

        addClass($canvas, 'pointer-events-none');
        _this.hotkey = 'slide'; // 位置计算

        style.right = 'auto';
        style.bottom = 'auto'; // 框框的绘制

        if (clientX >= X && clientY >= Y) {
          style.top = getPx(offsetY + Y - OFFSET.y);
          style.left = getPx(offsetX + X - OFFSET.x);
        } else if (clientX < X && clientY >= Y) {
          style.top = getPx(offsetY + Y - OFFSET.y);
          style.left = getPx(offsetX + clientX + OFFSET.x);
        } else if (clientX >= X && clientY < Y) {
          style.top = getPx(offsetY + clientY + OFFSET.y);
          style.left = getPx(offsetX + X - OFFSET.x);
        } else {
          style.top = getPx(offsetY + clientY + OFFSET.y);
          style.left = getPx(offsetX + clientX + OFFSET.x);
        } // 初始化宽度


        style.width = getPx(clientX - OFFSET.x - X);
        style.height = getPx(clientY - OFFSET.y - Y); // 滚动框选

        _this.moveToScroll(e.target, clientY < Y);
      } // 拖拽


      if (e.button == mouseButton && _this.hotkey && _this.drag) {
        var _this$props = _this.props,
            onSelect = _this$props.onSelect,
            _response = _this$props.response;
        _this.endItem = _this.getItemKey(_this.getItem(e.target)) || _this.endItem;
        onSelect && onSelect(_this.selectorItem, _this.hotkey, {
          currentKey: _this.endItem,
          startKey: _this.startItem
        }); // 回调中给出操作类型
      }
    };

    _this.onMouseUp = function (e) {
      var canvas = _this.props.canvas; // 目标容器画布

      var $canvas = document.querySelector("".concat(canvas));
      var _this$props2 = _this.props,
          onSelect = _this$props2.onSelect,
          response = _this$props2.response,
          single = _this$props2.single,
          clearData = _this$props2.clearData;

      if (e.button !== mouseButton || !_this.hotkey || !$canvas || !$canvas.contains(e.target)) {
        _this.clearShape();
      } else {
        _this.endItem = _this.getItemKey(_this.getItem(e.target)) || _this.endItem; // console.log(this.endItem, 'this.endItem');

        var direction = 'down';

        if (_this.hotkey === 'drag' && _this.endItem === _this.startItem) {
          _this.hotkey = null;
          _this.drag = false;
          return;
        }

        switch (_this.hotkey) {
          case 'ctrl':
          case 'ctrl&shift':
          case 'shift':
            break;

          case 'slide':
          case 'drag':
            // 这种情况 只记录开始和结束
            var startY = _this.startPoint.y,
                endY = e.clientY,
                startX = _this.startPoint.x,
                endX = e.clientX;

            if (endY - startY < 0) {
              direction = 'up';
            }

            _this.clearShape();

            if (Math.abs(endY - startY) < response && Math.abs(endX - startX) < response || _this.endItem === _this.startItem) {
              _this.hotkey = null;
              _this.drag = false;
              return;
            }

            break;

          default:
            // console.log('空空如也', this.hotkey, this.selectorItem, this.endItem);
            break;
        } // 清理一下无效数据


        delete _this.selectorItem[null]; // down的情况 由外部的rowClick来进行处理 否则就需要去除外部的逻辑

        if (_this.hotkey && _this.hotkey !== 'down') {
          onSelect && onSelect(_this.selectorItem, _this.hotkey, {
            currentKey: _this.endItem,
            startKey: _this.startItem,
            dragEnd: _this.drag,
            direction: direction
          }); // 回调中给出操作类型
        }

        if (_this.hotkey && _this.hotkey === 'down' && single) {
          onSelect && onSelect(_this.selectorItem, _this.hotkey, {
            currentKey: _this.endItem,
            startKey: _this.startItem
          });
        } // console.log('onMouseUp', this.hotkey, this.selectorItem, this.endItem);

      }

      _this.hotkey = null;
      _this.drag = false;
    };

    _this.createSelectableShape(); // 事件指定


    _this.onMouseDown = _this.onMouseDown.bind(Selector_assertThisInitialized(_this));
    _this.onMouseMove = _this.onMouseMove.bind(Selector_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(Selector_assertThisInitialized(_this)); // 当前组件的键位状态

    _this.hotkey = null;
    _this.drag = null; // 鼠标初始位置的记录

    _this.startPoint = {
      x: 0,
      y: 0
    }; // receive 的初始值

    _this.receiveItem = props.startItem; // 记录起始行和最终行

    _this.startItem = props.startItem;
    _this.endItem = null; // 记录当前选中的数据 针对方案一

    _this.selectorItem = {}; // 或者框选的行目前有两种方案 
    // 方案一  给cavans 上的tr都注册mouseEnter  mouseLeave 事件 实时记录经过的行
    // 方案二  渲染好框之后 计算位置 落在坐标之内的行记录下来

    return _this;
  }
  /**
   * 创建框选遮罩
   */


  Selector_createClass(Selectable, [{
    key: "createSelectableShape",
    value: function createSelectableShape() {
      var shapeCls = 'mouse-selectable-shape';
      this.$selectableShape = document.querySelector(".".concat(shapeCls));

      if (this.$selectableShape) {
        return null;
      }

      var fragment = document.createDocumentFragment();
      var $selectableShape = document.createElement('div');
      $selectableShape.className = shapeCls; // 合并样式

      setStyle($selectableShape, this.props.style);
      fragment.appendChild($selectableShape);
      document.body.appendChild(fragment);
      this.$selectableShape = document.querySelector(".".concat(shapeCls));
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      // 如果传入的初始位置不为空  那么重新设置初始位置
      if (this.receiveItem != nextProps.startItem && nextProps.startItem) {
        this.startItem = nextProps.startItem;
      }

      this.props = Selector_objectSpread(Selector_objectSpread({}, this.props), nextProps);
      var _this$props3 = this.props,
          userSelect = _this$props3.userSelect,
          canvas = _this$props3.canvas;
      var $canvas = document.querySelector("".concat(canvas)); // 禁用鼠标选中 文字

      !userSelect && $canvas && this.getEnabled('slide') && addClass($canvas, 'user-unselect');
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props,
          canvas = _this$props4.canvas,
          selector = _this$props4.selector,
          userSelect = _this$props4.userSelect; // 目标容器画布

      var $canvas = document.querySelector("".concat(canvas)); // specialCanvas  用来越过tr的mouseDown 封锁

      document.body.addEventListener('mousedown', this.onMouseDown);
      document.body.addEventListener('mousemove', this.onMouseMove);
      document.body.addEventListener('mouseover', this.onMouseOver);
      document.body.addEventListener('mouseup', this.onMouseUp); // 禁用鼠标选中 文字

      !userSelect && $canvas && this.getEnabled('slide') && addClass($canvas, 'user-unselect');

      if (!$canvas) {
        // console.log('特殊情况，初始化时没有找到对应dom');
        return;
      }

      var $item = $canvas.querySelector(selector);

      if ($item) {
        this.startItem = this.getItemKey($item);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 清理事件 
      document.body.removeEventListener('mousedown', this.onMouseDown);
      document.body.removeEventListener('mousemove', this.onMouseMove);
      document.body.removeEventListener('mouseover', this.onMouseOver);
      document.body.removeEventListener('mouseup', this.onMouseUp); // 清理dom

      this.$selectableShape = null;
    }
    /**
     * 根据关键子获取禁用状态
     * @param {String} key 
     */

  }, {
    key: "getEnabled",
    value: function getEnabled(key) {
      var disabled = this.props.disabled;

      if (Object.prototype.toString.call(disabled) !== "[object Array]") {
        disabled = [disabled];
      }

      return !disabled.includes(key || true);
    }
    /**
     * 获取选中项的 值
     * @param {DOM} $item 
     */

  }, {
    key: "getItemKey",
    value: function getItemKey($item) {
      if (!$item) {
        return null;
      }

      return $item.getAttribute('cellSelectorKey');
    }
    /**
     * 获取当前的 选中项dom
     * @param {DOM} $target 
     */

  }, {
    key: "getItem",
    value: function getItem($target) {
      // 如果点到tbody
      if (!$target || $target.querySelector('tr')) {
        return null;
      }

      if ($target.tagName === 'TD') {
        return $target.querySelector(this.props.selector);
      } // 如果往下找  找到了


      return Selector_Closest($target, this.props.selector + ', tr');
    }
    /**
     * 鼠标按下事件
     */

  }, {
    key: "moveToScroll",
    // getScrollParentDOM

    /**
     * 最后一个元素时  移动并滚动
     * @param {DOM} $last 
     */
    value: function moveToScroll($last, reverse) {
      if (!$last) {
        return;
      }

      var $scroll = getScrollParentDOM($last),
          sh = $scroll.offsetHeight,
          step = $last.offsetHeight,
          lt = $last.getBoundingClientRect().top,
          st = $scroll.getBoundingClientRect().top;

      if (reverse && step * 2 > lt - st) {
        $scroll.scrollTop -= step;
        return;
      }

      if (step * 2 > sh + st - lt) {
        // 剩余接近两行时
        $scroll.scrollTop += step;
      }
    }
    /**
     * 记录最后一次
     * @param {*} e 
     */

  }, {
    key: "clearData",

    /**
     * 清理数据
     */
    value: function clearData(info, hotkey) {
      var clearData = this.props.clearData; // 记录当前选中的数据 针对方案一

      this.selectorItem = {};
      clearData && clearData(info, hotkey);
    }
    /**
     * 主要给框选用
     * 清理框选遮罩样式
     */

  }, {
    key: "clearShape",
    value: function clearShape() {
      var canvas = this.props.canvas; // 目标容器画布

      var $canvas = document.querySelector("".concat(canvas));
      removeClass($canvas, 'pointer-events-none');

      if (this.$selectableShape) {
        this.$selectableShape.style.width = '0';
        this.$selectableShape.style.height = '0';
        this.$selectableShape.style.top = 'auto';
        this.$selectableShape.style.right = 'auto';
        this.$selectableShape.style.bottom = 'auto';
        this.$selectableShape.style.left = 'auto';
        this.$selectableShape.style.display = 'block';
        this.$selectableShape.style.border = 'none';
      } // 清除初始位置


      this.startPoint = {
        x: 0,
        y: 0
      };
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Selectable;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.Component);

Selectable.defaultProps = {
  unitKey: 'key',
  // 行关键字 rowid
  canvas: '',
  // 绘制区域  默认是body
  onSelect: null,
  // 选中回调
  selector: 'tr',
  // 行选择器
  response: 15,
  // 响应距离
  disabled: false,
  // 可选值 true false 'shift' 'ctrl' 'slide'
  userSelect: false,
  // 启用用户文字选中
  single: false // shif启用内置单选

};

// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/selectable/index.js
function selectable_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { selectable_typeof = function _typeof(obj) { return typeof obj; }; } else { selectable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return selectable_typeof(obj); }

function selectable_extends() { selectable_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return selectable_extends.apply(this, arguments); }

function selectable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function selectable_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = selectable_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function selectable_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function selectable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function selectable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function selectable_createClass(Constructor, protoProps, staticProps) { if (protoProps) selectable_defineProperties(Constructor.prototype, protoProps); if (staticProps) selectable_defineProperties(Constructor, staticProps); return Constructor; }

function selectable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) selectable_setPrototypeOf(subClass, superClass); }

function selectable_setPrototypeOf(o, p) { selectable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return selectable_setPrototypeOf(o, p); }

function selectable_createSuper(Derived) { var hasNativeReflectConstruct = selectable_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = selectable_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = selectable_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return selectable_possibleConstructorReturn(this, result); }; }

function selectable_possibleConstructorReturn(self, call) { if (call && (selectable_typeof(call) === "object" || typeof call === "function")) { return call; } return selectable_assertThisInitialized(self); }

function selectable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function selectable_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function selectable_getPrototypeOf(o) { selectable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return selectable_getPrototypeOf(o); }

/*
 * @Descripttion: 框选
 * @version:
 * @Author: bbq
 * @Date: 2020-08-03 10:16:50
 * @LastEditors: bbq
 * @LastEditTime: 2021-03-08 15:54:04
 */



 // import { Selectable as Selector } from '@platform/base';



__webpack_require__(1876); // 导出


selectable.Selector = Selectable;
var SPECIAL_KEY = '__tableHeader__'; // 是否是ie浏览器

var inIEClassName = Object(utils["isIE"])() ? ' table-cell-wrapper-ie ' : '';
/**
 * 解析选择项
 * @param {*} item 
 */

var parseSelectItem = function parseSelectItem() {
  var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var keys = item.split('@');

  if (keys.length < 2) {
    console.warn('缺少一部分key');
    return {};
  }

  return {
    rowKeyValue: keys[0],
    attrcode: keys[1]
  };
};
/**
 * 获取列集合
 * @param {*} arrColumns 
 * @param {*} startAttrcode 
 * @param {*} endAttrcode 
 * @param {*} disabledColumn 
 */


var getColumnSection = function getColumnSection(arrColumns, startAttrcode, endAttrcode, disabledColumn, disabledColType) {
  // console.log(arrColumns, 'arrColumns'); // 包含了父级
  var columnObjSection = [];
  var columnCodeSection = [];

  if (startAttrcode === endAttrcode) {
    arrColumns.some(function (column) {
      if (column['attrcode'] === startAttrcode) {
        columnObjSection = [{
          attrcode: startAttrcode,
          label: column['label']
        }];
        !column.children && (columnCodeSection = [startAttrcode]);
        return true;
      }
    });
  } else {
    arrColumns.some(function (column) {
      if (column['attrcode'] === startAttrcode || column['attrcode'] === endAttrcode) {
        // 第二次进入这个逻辑
        if (columnObjSection.length > 0) {
          columnObjSection.push({
            attrcode: column['attrcode'],
            label: column['label']
          });
          !column.children && columnCodeSection.push(column['attrcode']);
          return true;
        } // 第一次


        !column.children && columnCodeSection.push(column['attrcode']);
        columnObjSection.push({
          attrcode: column['attrcode'],
          label: column['label']
        });
      } else {
        // 第一次之后
        !column.children && columnCodeSection.length > 0 && columnCodeSection.push(column['attrcode']);
        columnCodeSection.length > 0 && columnObjSection.push({
          attrcode: column['attrcode'],
          label: column['label']
        });
      }
    });
  } // 去除禁止的列  为啥不在上面做


  columnCodeSection = columnCodeSection.filter(function (item) {
    return !disabledColumn.includes(item);
  });
  columnObjSection = columnObjSection.filter(function (item) {
    return !disabledColumn.includes(item.attrcode);
  });
  return {
    columnObjSection: columnObjSection,
    columnCodeSection: columnCodeSection
  };
};
/**
 * 特殊类型
 * @description: 
 * @param {type} 
 * @return {type} 
 */


var handleSpecialItem = function handleSpecialItem() {
  var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var rowKey = arguments.length > 2 ? arguments[2] : undefined;
  var rowKeyValue = item.rowKeyValue,
      attrcode = item.attrcode;
  var normalItem = item; // 表头上的数据

  if (rowKeyValue === SPECIAL_KEY) {
    var row = data[0];

    if (!row) {
      return {
        normalItem: {
          attrcode: attrcode
        },
        specialItem: item
      };
    }

    return {
      normalItem: {
        rowKeyValue: row[rowKey],
        attrcode: attrcode
      },
      specialItem: item
    };
  }

  return {
    normalItem: normalItem,
    specialItem: null
  };
};
/**
 * 创建标准化表格
 * @param {*} Table 
 */


function selectable(Table) {
  if (!Table) {
    console.error('缺少Table组件');
  } // TODO


  return /*#__PURE__*/function (_Component) {
    selectable_inherits(MetaTable, _Component);

    var _super = selectable_createSuper(MetaTable);

    function MetaTable(props) {
      var _this;

      selectable_classCallCheck(this, MetaTable);

      _this = _super.call(this, props);
      _this.uuid = Object(utils["uuidv4"])();
      return _this;
    } // 处理选中的数据 返回一个二维数组


    selectable_createClass(MetaTable, [{
      key: "getSelectorData",
      value: function getSelectorData(selectItems, hotkey, _ref) {
        var currentKey = _ref.currentKey,
            startKey = _ref.startKey,
            dragEnd = _ref.dragEnd,
            direction = _ref.direction;
        var _this$props$high_sele = this.props.high_selectable,
            high_selectable = _this$props$high_sele === void 0 ? {} : _this$props$high_sele;
        var activeCells = {};
        var activeSpecialCells = [];
        var data = high_selectable.data,
            arrColumns = high_selectable.arrColumns,
            rowKey = high_selectable.rowKey,
            onBatchChange = high_selectable.onBatchChange,
            _high_selectable$disa = high_selectable.disabledColType,
            disabledColType = _high_selectable$disa === void 0 ? ['customer'] : _high_selectable$disa,
            _high_selectable$disa2 = high_selectable.disabledColumn,
            disabledColumn = _high_selectable$disa2 === void 0 ? ['numberindex', 'opr', 'checkbox'] : _high_selectable$disa2,
            _high_selectable$disa3 = high_selectable.disabledBatchColumn,
            disabledBatchColumn = _high_selectable$disa3 === void 0 ? ['numberindex', 'opr', 'checkbox'] : _high_selectable$disa3; // 区间型

        if (hotkey === 'shift' || hotkey === 'ctrl&shift' || hotkey === 'slide' || hotkey === 'drag') {
          // let items = Object.keys(selectItems);
          if (!startKey || !currentKey) {
            console.warn(hotkey + ' invalid select section must start and end');
            return {};
          } // 开始项


          var startItem = parseSelectItem(startKey); // 区分表头

          var _handleSpecialItem = handleSpecialItem(startItem, data, rowKey),
              startNormalItem = _handleSpecialItem.normalItem,
              startSpecialItem = _handleSpecialItem.specialItem;

          var startRowKeyValue = startNormalItem.rowKeyValue,
              startAttrcode = startNormalItem.attrcode; // 结束项

          var endItem = parseSelectItem(currentKey); // 区分表头

          var _handleSpecialItem2 = handleSpecialItem(endItem, data, rowKey),
              endNormalItem = _handleSpecialItem2.normalItem,
              endSpecialItem = _handleSpecialItem2.specialItem;

          var endRowKeyValue = endNormalItem.rowKeyValue,
              endAttrcode = endNormalItem.attrcode; // 判断rowKeyValue 同列的才能批改

          if (startAttrcode !== endAttrcode && hotkey === 'drag') {
            console.warn('column patch must single !');
            return {};
          } // 计算列区间


          var _getColumnSection = getColumnSection(arrColumns, startAttrcode, endAttrcode, disabledColumn, disabledColType),
              columnCodeSection = _getColumnSection.columnCodeSection,
              columnObjSection = _getColumnSection.columnObjSection;

          console.log(columnCodeSection, columnObjSection, '已经选中的单元格'); // 区分表头

          if (startSpecialItem && endSpecialItem) {
            activeSpecialCells = columnObjSection;
            console.log(startSpecialItem, endSpecialItem, activeSpecialCells);
            return {
              activeSpecialCells: activeSpecialCells,
              activeCells: activeCells
            };
          }

          if (startSpecialItem || endSpecialItem) {
            activeSpecialCells = columnObjSection;
            console.log(startSpecialItem, endSpecialItem, activeSpecialCells);
          } // 后置 让头选择可以进行


          if (!startRowKeyValue || !endRowKeyValue) {
            return {};
          } // 行区间开始和结束的标识


          var inSection = false; // 行区间

          data.some(function (row) {
            var rowKeyValue = row[rowKey]; // 不知道开始行 先匹配，先记录

            if (rowKeyValue === startRowKeyValue || rowKeyValue === endRowKeyValue) {
              activeCells[rowKeyValue] = columnCodeSection; // 最后一次匹配 退出

              if (inSection || startRowKeyValue === endRowKeyValue) {
                return true;
              } // 第一次匹配 记录


              inSection = true;
            } else {
              // 在第一次和最后一次之间时 匹配
              if (inSection) {
                activeCells[rowKeyValue] = columnCodeSection;
              }
            }
          });
        } // 分散型


        if (hotkey === 'ctrl') {
          for (var key in selectItems) {
            var _parseSelectItem = parseSelectItem(key),
                rowKeyValue = _parseSelectItem.rowKeyValue,
                attrcode = _parseSelectItem.attrcode;

            if (!rowKeyValue) {
              return {};
            } // 去除禁用的


            if (!disabledColumn.includes(attrcode) && rowKeyValue !== SPECIAL_KEY) {
              activeCells[rowKeyValue] = activeCells[rowKeyValue] || [];
              activeCells[rowKeyValue].push(attrcode);
            }
          }
        } // 单点


        if (hotkey === 'down' && currentKey) {
          var _parseSelectItem2 = parseSelectItem(currentKey),
              _rowKeyValue = _parseSelectItem2.rowKeyValue,
              _attrcode = _parseSelectItem2.attrcode;

          if (!_rowKeyValue) {
            return {};
          }

          if (!disabledColumn.includes(_attrcode) && !disabledBatchColumn.includes(_attrcode) && _rowKeyValue !== SPECIAL_KEY) {
            activeCells[_rowKeyValue] = activeCells[_rowKeyValue] || [];

            activeCells[_rowKeyValue].push(_attrcode);
          }
        } // 批改触发


        if (hotkey === 'drag' && dragEnd) {
          var activeCell = parseSelectItem(startKey);

          if (!activeCell.rowKeyValue) {
            return {};
          }

          activeCell.direction = direction;
          !disabledBatchColumn.includes(activeCell.attrcode) && Object(utils["isFunction"])(onBatchChange) && onBatchChange(activeCell, activeCells, direction);
        }

        return {
          activeSpecialCells: activeSpecialCells,
          activeCells: activeCells
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            _this$props$high_sele2 = _this$props.high_selectable,
            high_selectable = _this$props$high_sele2 === void 0 ? {} : _this$props$high_sele2,
            others = selectable_objectWithoutProperties(_this$props, ["high_selectable"]);

        var uniqueSelector = "selectable-".concat(this.uuid);
        var langJson = high_selectable.langJson,
            _high_selectable$sele = high_selectable.selector,
            selector = _high_selectable$sele === void 0 ? " tbody tr .table-cell-wrapper, thead tr .column-title-wrapper, thead tr .column-title-wrapper-bg, tbody tr .table-cell-wrapper-bg, tbody tr .table-cell-drag-icon" : _high_selectable$sele,
            _high_selectable$canv = high_selectable.canvas,
            canvas = _high_selectable$canv === void 0 ? '.' + uniqueSelector : _high_selectable$canv,
            _high_selectable$disa4 = high_selectable.disabled,
            disabled = _high_selectable$disa4 === void 0 ? false : _high_selectable$disa4,
            _high_selectable$user = high_selectable.userSelect,
            userSelect = _high_selectable$user === void 0 ? false : _high_selectable$user,
            _high_selectable$enab = high_selectable.enable,
            enable = _high_selectable$enab === void 0 ? false : _high_selectable$enab,
            _high_selectable$sing = high_selectable.single,
            single = _high_selectable$sing === void 0 ? true : _high_selectable$sing,
            _high_selectable$sele2 = high_selectable.selectCell,
            selectCell = _high_selectable$sele2 === void 0 ? true : _high_selectable$sele2,
            _high_selectable$star = high_selectable.startItem,
            startItem = _high_selectable$star === void 0 ? '' : _high_selectable$star,
            _onSelect = high_selectable.onSelect,
            onDeSelect = high_selectable.onDeSelect,
            onClearData = high_selectable.onClearData,
            getPrevSelector = high_selectable.getPrevSelector,
            store = high_selectable.store,
            _high_selectable$disa5 = high_selectable.disabledBatchColumn,
            disabledBatchColumn = _high_selectable$disa5 === void 0 ? ['numberindex', 'opr', 'checkbox'] : _high_selectable$disa5;
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: classnames_default()(uniqueSelector, 'selectable-canvas', {
            'selectable-canvas-enabled': enable,
            'table-cell-wrapper-ie': inIEClassName // 'user-unselect': enable,

          })
        }, enable && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Selectable, {
          canvas: canvas,
          hasSelectorItem: function hasSelectorItem(hotkey, key) {
            if (hotkey === 'ctrl') {
              var prevSelector = getPrevSelector && getPrevSelector(key, hotkey);

              var _parseSelectItem3 = parseSelectItem(key),
                  currentRowKeyValue = _parseSelectItem3.rowKeyValue,
                  attrcode = _parseSelectItem3.attrcode; // 选中获取反选


              if (!selectCell && prevSelector) {
                var isSelect = false;

                for (var item in prevSelector) {
                  var _parseSelectItem4 = parseSelectItem(item),
                      rowKeyValue = _parseSelectItem4.rowKeyValue; // 清除已选


                  if (currentRowKeyValue === rowKeyValue && prevSelector[item]) {
                    isSelect = true;
                    onDeSelect && onDeSelect(selectable_defineProperty({}, currentRowKeyValue, [attrcode]), hotkey);
                  }
                }

                return isSelect;
              } else if (prevSelector[key]) {
                // 移除
                onDeSelect && onDeSelect(selectable_defineProperty({}, currentRowKeyValue, [attrcode]), hotkey);
                return true;
              } else {
                prevSelector[key] = true;
                return false;
              }
            }
          },
          single: single,
          selector: selector,
          disabled: disabled // 可选值 true false 'shift' 'ctrl' 'slide'
          ,
          userSelect: userSelect // 启用用户文字选中
          // 开始项  主要配合外部的 单选事件处理
          ,
          startItem: startItem,
          onSelect: function onSelect(selectItems, hotkey, _ref2) {
            var currentKey = _ref2.currentKey,
                startKey = _ref2.startKey,
                dragEnd = _ref2.dragEnd,
                direction = _ref2.direction;

            var _this2$getSelectorDat = _this2.getSelectorData(selectItems, hotkey, {
              currentKey: currentKey,
              startKey: startKey,
              dragEnd: dragEnd,
              direction: direction
            }),
                activeCells = _this2$getSelectorDat.activeCells,
                activeSpecialCells = _this2$getSelectorDat.activeSpecialCells; // shift 的逻辑处理


            if (hotkey === 'shift' || hotkey === 'ctrl&shift') {
              if (_this2.prevActiveCells && _this2.prevStartKey && startKey === _this2.prevStartKey && currentKey !== _this2.prevCurrentKey) {
                onDeSelect && onDeSelect(_this2.prevActiveCells, hotkey);
              } // 记录数据  为了清除数据


              _this2.prevActiveCells = activeCells;
              _this2.prevStartKey = startKey;
              _this2.prevCurrentKey = currentKey;
            } // console.log(activeCells);


            if (!activeCells) {
              return;
            }

            var current = {};

            if (currentKey) {
              current = parseSelectItem(currentKey);

              if (!current.rowKeyValue) {
                return;
              } // 放到后面  onSelect代码逻辑还是要走的


              if (current.rowKeyValue === SPECIAL_KEY || disabledBatchColumn.includes(current.attrcode)) {
                current = {};
              }
            } // console.log(selectItems, activeCells, activeSpecialCells);


            var isBatch = hotkey === 'ctrl' || hotkey === 'shift' || hotkey === 'ctrl&shift' || hotkey === 'slide' || hotkey === 'drag';
            _onSelect && _onSelect(activeCells, activeSpecialCells, hotkey, {
              current: current,
              isBatch: isBatch
            });
          },
          clearData: function clearData(info, hotkey) {
            onClearData && onClearData(info.isSelect, hotkey);
          }
        }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Table, selectable_extends({
          headerEventNoStop: true
        }, others)));
      }
    }]);

    return MetaTable;
  }(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);
}
// EXTERNAL MODULE: ./src/platform/components/Table/tableLibs/lib/excel/index.less
var excel = __webpack_require__(1881);

// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/excel/index.js
function excel_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { excel_typeof = function _typeof(obj) { return typeof obj; }; } else { excel_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return excel_typeof(obj); }

function excel_extends() { excel_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return excel_extends.apply(this, arguments); }

function excel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function excel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function excel_createClass(Constructor, protoProps, staticProps) { if (protoProps) excel_defineProperties(Constructor.prototype, protoProps); if (staticProps) excel_defineProperties(Constructor, staticProps); return Constructor; }

function excel_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) excel_setPrototypeOf(subClass, superClass); }

function excel_setPrototypeOf(o, p) { excel_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return excel_setPrototypeOf(o, p); }

function excel_createSuper(Derived) { var hasNativeReflectConstruct = excel_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = excel_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = excel_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return excel_possibleConstructorReturn(this, result); }; }

function excel_possibleConstructorReturn(self, call) { if (call && (excel_typeof(call) === "object" || typeof call === "function")) { return call; } return excel_assertThisInitialized(self); }

function excel_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function excel_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function excel_getPrototypeOf(o) { excel_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return excel_getPrototypeOf(o); }

/*
 * @Descripttion: 
 * @version: 
 * @Author: bbq
 * @Date: 2020-08-23 16:13:06
 * @LastEditors: bbq
 * @LastEditTime: 2020-08-24 15:30:46
 */





function excel_excel(Table) {
  var _temp;

  return _temp = /*#__PURE__*/function (_Component) {
    excel_inherits(Excel, _Component);

    var _super = excel_createSuper(Excel);

    function Excel(props) {
      var _this;

      excel_classCallCheck(this, Excel);

      _this = _super.call(this, props);

      _this.getPasteData = function () {
        return new Promise(function (resolve) {
          // 异步处理
          //IE浏览器
          if (window.clipboardData) {
            var pasteContent = window.clipboardData.getData('Text');
            resolve(pasteContent); //其他浏览器
          } else if (navigator.clipboard) {
            navigator.clipboard.readText().then(function (res) {
              var pasteContent = res;
              resolve(pasteContent);
            });
          }
        });
      };

      _this.formatPasteData = function (pasteContent) {
        var excelConfig = _this.props.excelConfig;
        var langJson = excelConfig.langJson;

        if (pasteContent.length > 2) {
          var endStr = pasteContent.substr(pasteContent.length - 1, pasteContent.length);

          if (endStr === '\n') {
            pasteContent = pasteContent.substr(0, pasteContent.length - 1);
          }
        } //判断是否多列


        var reg = /\t/;
        var text = [];

        if (reg.test(pasteContent)) {
          var rows = pasteContent.split('\n') || [];
          Object(api_index_["toast"])({
            color: 'danger',
            title: langJson['table_tips'],
            content: "\u53EA\u80FD\u7C98\u8D34\u4E00\u5217\u6570\u636E"
          });
          rows.forEach(function (row) {
            var cells = row.split('\t') || [];
            var firstCell = cells[0];
            text.push(firstCell);
          });
        } else {
          text = pasteContent.split('\n');
        }

        return text;
      };

      _this.listenCrtlV = function () {
        var _this$props = _this.props,
            store = _this$props.store,
            excelConfig = _this$props.excelConfig;
        var onBatchChange = excelConfig.onBatchChange,
            langJson = excelConfig.langJson;

        var pasteRange = _this.tableDom.querySelector('.u-table-body table');

        pasteRange.addEventListener('paste', function (e) {
          var getActiveCell = store.getActiveCell;
          var tableId = excelConfig.tableId;
          var activeCell = getActiveCell();

          var text = _this.formatPasteData(e.clipboardData.getData('text/plain'));

          console.log(text.length, text.length <= 1);
          var flag = pasteRange.contains(e.target) && activeCell && text.length > 1;

          if (flag) {
            document.body.focus();
            var rows = store.getData();
            var param = {
              pasteContent: text,
              activeCell: activeCell,
              langJson: langJson,
              rows: rows,
              getRowOldValue: store.getRowOldValue,
              tableId: tableId
            };
            var data = Object(utils["excelPackageData"])(param);

            if (!data) {
              return;
            }

            Object(utils["isFunction"])(onBatchChange) && onBatchChange(data);
            e.preventDefault(); // 表格数据  是否包含删除的数据 这里要斟酌下
            // let rows = store.getViewData('filter');
          }
        });
        document.addEventListener('keydown', function (e) {
          if ((e.metaKey || e.ctrlKey) && e.keyCode === 86) {
            _this.getPasteData().then(function (pasteContent) {
              var getActiveCell = store.getActiveCell;
              var activeCell = getActiveCell();

              if (pasteContent && activeCell) {
                var tableId = excelConfig.tableId;
                var column = activeCell.column;
                var itemtype = column.itemtype;
                var booleanType = ['switch', 'checkbox_switch'];

                var text = _this.formatPasteData(pasteContent);

                var flag = activeCell && text.length > 1;

                if (flag && booleanType.includes(itemtype)) {
                  document.body.focus();
                  var rows = store.getData();
                  var param = {
                    pasteContent: text,
                    activeCell: activeCell,
                    langJson: langJson,
                    rows: rows,
                    getRowOldValue: store.getRowOldValue,
                    tableId: tableId
                  };
                  var data = Object(utils["excelPackageData"])(param);

                  if (!data) {
                    return;
                  }

                  Object(utils["isFunction"])(onBatchChange) && onBatchChange(data);
                  e.preventDefault();
                }
              }
            });
          }
        });
      };

      _this.state = {
        json: {}
      };
      return _this;
    }

    excel_createClass(Excel, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var excelConfig = this.props.excelConfig;
        var onBatchChange = excelConfig.onBatchChange; //配置 禁用excel粘贴功能

        if (onBatchChange) {
          // 监听crtl v
          this.listenCrtlV();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Table, excel_extends({}, this.props, {
          ref: function ref(dom) {
            _this2.tableDom = external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(dom);
          }
        }));
      }
    }]);

    return Excel;
  }(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]), _temp;
}
// EXTERNAL MODULE: ./node_modules/bee-table/build/lib/sort.js
var lib_sort = __webpack_require__(182);
var sort_default = /*#__PURE__*/__webpack_require__.n(lib_sort);

// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/sort/sort.js



/**
 * 处理多表头
 * @param {object} column 
 */

function handleMeta(column) {
  if (column.children) {
    column.children.map(function (child) {
      if (child.children) {
        return handleMeta(child);
      }

      return handleChildMeta(child);
    });
  } else {
    return handleChildMeta(column);
  }
}
/**
 * 给meta添加sorter
 * @param {object} item 
 */

function handleChildMeta(item) {
  var ICode = item.attrcode,
      IType = item.itemtype,
      _item$isSort = item.isSort,
      isSort = _item$isSort === void 0 ? true : _item$isSort,
      Isorter = item.sorter;

  if (isSort && !Object(utils["isFunction"])(Isorter)) {
    switch (true) {
      case IType === 'number':
        item.sorter = function (front, behind) {
          var prev = front.values || front;
          var next = behind.values || behind;
          var frontValue = String(prev[ICode] ? prev[ICode].value || '0' : '0');
          var behindValue = String(next[ICode] ? next[ICode].value || '0' : '0');
          return Object(api_index_["Subtr"])(Number(frontValue.replace(/,/g, '')), Number(behindValue.replace(/,/g, '')));
        };

        break;

      case tableLibs_config["a" /* default */].timeTypes.includes(IType):
        item.sorter = function (front, behind) {
          var prev = front.values || front;
          var next = behind.values || behind;
          var frontValue = prev[ICode] ? prev[ICode].value || '' : '';
          var behindValue = next[ICode] ? next[ICode].value || '' : '';
          return frontValue.localeCompare(behindValue);
        };

        break;

      case tableLibs_config["a" /* default */].displayTypes.includes(IType):
        item.sorter = function (front, behind) {
          var prev = front.values || front;
          var next = behind.values || behind;
          var frontValue = String(prev[ICode] ? prev[ICode].display || '' : '');
          var behindValue = String(next[ICode] ? next[ICode].display || '' : '');
          return frontValue.localeCompare(behindValue);
        };

        break;

      case IType === 'label':
        item.sorter = function (front, behind) {
          var prev = front.values || front;
          var next = behind.values || behind;
          var fvalue = prev[ICode] ? prev[ICode].value || '' : '';
          var fdisplay = prev[ICode] ? prev[ICode].display : '';
          var bvalue = next[ICode] ? next[ICode].value || '' : '';
          var bdisplay = next[ICode] ? next[ICode].display : '';
          var frontValue = String(Object(api_index_["isNullOrVoid"])(fdisplay) ? fvalue : fdisplay);
          var behindValue = String(Object(api_index_["isNullOrVoid"])(bdisplay) ? bvalue : bdisplay);
          return frontValue.localeCompare(behindValue);
        };

        break;

      case ICode !== 'numberindex' && ICode !== 'opr' && ICode !== 'checkbox' && ICode !== 'blankrow':
        item.sorter = function (front, behind) {
          var prev = front.values || front;
          var next = behind.values || behind;
          var frontValue = String(prev[ICode] ? prev[ICode].value || '' : '');
          var behindValue = String(next[ICode] ? next[ICode].value || '' : '');
          return frontValue.localeCompare(behindValue);
        };

        break;
    }
  }
} // 处理多头排序标识


function handleSortcolumns(_ref) {
  var columns = _ref.columns,
      sortObj = _ref.sortObj;
  columns.forEach(function (eve) {
    //获取合计行的列配置
    var children = eve.children;

    if (!Object(utils["isUndefined"])(children)) {
      //判断和并列的情况
      handleSortcolumns({
        columns: children,
        sortObj: sortObj
      });
    } else {
      columns.forEach(function (item) {
        //保存返回的column状态，没有则终止order状态
        if (sortObj[item.attrcode]) {
          item.order = sortObj[item.attrcode].order;
          item.orderNum = sortObj[item.attrcode].orderNum;
        } else {
          item.order = 'flatscend';
          item.orderNum = '';
        }
      });
    }
  });
}
// EXTERNAL MODULE: ./src/platform/components/Table/tableLibs/lib/sort/index.less
var tableLibs_lib_sort = __webpack_require__(1882);

// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/sort/index.js
function sort_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sort_typeof = function _typeof(obj) { return typeof obj; }; } else { sort_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sort_typeof(obj); }

function sort_extends() { sort_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return sort_extends.apply(this, arguments); }

function sort_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sort_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sort_createClass(Constructor, protoProps, staticProps) { if (protoProps) sort_defineProperties(Constructor.prototype, protoProps); if (staticProps) sort_defineProperties(Constructor, staticProps); return Constructor; }

function sort_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) sort_setPrototypeOf(subClass, superClass); }

function sort_setPrototypeOf(o, p) { sort_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return sort_setPrototypeOf(o, p); }

function sort_createSuper(Derived) { var hasNativeReflectConstruct = sort_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = sort_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = sort_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return sort_possibleConstructorReturn(this, result); }; }

function sort_possibleConstructorReturn(self, call) { if (call && (sort_typeof(call) === "object" || typeof call === "function")) { return call; } return sort_assertThisInitialized(self); }

function sort_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function sort_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function sort_getPrototypeOf(o) { sort_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return sort_getPrototypeOf(o); }






function columnSort(Table) {
  var ComplexTable = sort_default()(Table, base_index_["Icon"]);
  return /*#__PURE__*/function (_Component) {
    sort_inherits(_class, _Component);

    var _super = sort_createSuper(_class);

    function _class(props) {
      sort_classCallCheck(this, _class);

      return _super.call(this, props);
    }

    sort_createClass(_class, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            columns = _this$props.columns,
            backSort = _this$props.backSort,
            sortChange = _this$props.sortChange,
            _this$props$isSort = _this$props.isSort,
            isSort = _this$props$isSort === void 0 ? true : _this$props$isSort;

        if (!isSort) {
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Table, this.props);
        } // 后端排序和前端排序, 不传config.sort就走前端排序的sort逻辑


        var sort = backSort || {
          mode: "single",
          backSource: false,
          sortFun: function sortFun(sortParam, sortData) {
            // console.log(sortParam); // 对象{[field: "contact",order: "ascend",orderNum: 1]}
            // console.log(sortData); // 对象{[每一行参与排序的数据]}  没有values的
            sortChange(sortParam, sortData);
          }
        };
        columns.forEach(function (item) {
          handleMeta(item);
        });
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ComplexTable, sort_extends({}, this.props, {
          sort: sort
        }));
      }
    }]);

    return _class;
  }(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);
}
// EXTERNAL MODULE: ./src/platform/components/Table/tableLibs/lib/contextMenu/index.less
var contextMenu = __webpack_require__(1884);

// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/contextMenu/index.js
function contextMenu_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { contextMenu_typeof = function _typeof(obj) { return typeof obj; }; } else { contextMenu_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return contextMenu_typeof(obj); }

function contextMenu_extends() { contextMenu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return contextMenu_extends.apply(this, arguments); }

function contextMenu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = contextMenu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function contextMenu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function contextMenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function contextMenu_toConsumableArray(arr) { return contextMenu_arrayWithoutHoles(arr) || contextMenu_iterableToArray(arr) || contextMenu_unsupportedIterableToArray(arr) || contextMenu_nonIterableSpread(); }

function contextMenu_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function contextMenu_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return contextMenu_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return contextMenu_arrayLikeToArray(o, minLen); }

function contextMenu_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function contextMenu_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return contextMenu_arrayLikeToArray(arr); }

function contextMenu_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function contextMenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function contextMenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function contextMenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) contextMenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) contextMenu_defineProperties(Constructor, staticProps); return Constructor; }

function contextMenu_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) contextMenu_setPrototypeOf(subClass, superClass); }

function contextMenu_setPrototypeOf(o, p) { contextMenu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return contextMenu_setPrototypeOf(o, p); }

function contextMenu_createSuper(Derived) { var hasNativeReflectConstruct = contextMenu_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = contextMenu_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = contextMenu_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return contextMenu_possibleConstructorReturn(this, result); }; }

function contextMenu_possibleConstructorReturn(self, call) { if (call && (contextMenu_typeof(call) === "object" || typeof call === "function")) { return call; } return contextMenu_assertThisInitialized(self); }

function contextMenu_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function contextMenu_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function contextMenu_getPrototypeOf(o) { contextMenu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return contextMenu_getPrototypeOf(o); }







function contextMenu_contextMenu(Table) {
  var _temp;

  return _temp = /*#__PURE__*/function (_Component) {
    contextMenu_inherits(ContextRightMenu, _Component);

    var _super = contextMenu_createSuper(ContextRightMenu);

    function ContextRightMenu(props) {
      var _this;

      contextMenu_classCallCheck(this, ContextRightMenu);

      _this = _super.call(this, props);

      _this.execCommandCopy = function (btnCode, activeHeads, currentMeta, activedCells, selectedRows, arrayMeta) {
        var copyText = _this.getTableContent(btnCode, activeHeads, currentMeta, activedCells, selectedRows, arrayMeta); //执行复制事件


        if (_this.wrapper) {
          var textElement = external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_default.a.findDOMNode(_this.wrapper).querySelector("#table-copy-element");
          textElement.value = copyText; // 修改文本框的内容

          textElement.select(); // 选中文本

          document.execCommand("copy"); // 执行浏览器复制命令 
        }
      };

      _this.getTableContent = function (btnCode, activeHeads, currentMeta, activedCells, selectedRows, arrayMeta) {
        //复制选中内容
        var copyContent = ''; //选中表头

        if (activeHeads && activeHeads.length) {
          //多表头也是一个数组
          copyContent = copyContent + _this.getHeadContent(activeHeads, currentMeta, btnCode, arrayMeta);
        } //选中表体


        if (activedCells) {
          var rowKeyValues = Object.keys(activedCells);

          if (rowKeyValues && rowKeyValues.length) {
            //此处 activedCells必须是数组，因为需要按照行的顺序复制
            copyContent = copyContent + _this.getBodyContent(selectedRows, activedCells, btnCode, arrayMeta);
          }
        }

        return copyContent;
      };

      _this.getHeadContent = function (activeHeads, currentMeta, btnCode) {
        //activeHeads: [{attrcode1,lable1},{attrcode2,label2}]
        //arrayMeta拉平数据
        var copyContent = '';
        var array = [];
        var start = 0;
        var maxLength = 0;
        var uniqueFlag = {};
        var arrayMeta = [];
        TraverNode(currentMeta, []);

        var _loop = function _loop(i) {
          var item = arrayMeta[i];
          var parentNode = item.parentNode;
          if (!item.visible) return "continue"; //判断叶子节点

          var hasSel = false;

          if (btnCode === 'copy' || btnCode === 'copy-column') {
            var index = activeHeads.findIndex(function (e) {
              return e.attrcode === item.attrcode;
            }); //选中节点包含叶子节点

            if (index !== -1) {
              array[start] = [item];
              hasSel = true; //判断父节点

              if (parentNode && parentNode.length) {
                //若为复制 需要判断是否选中
                if (btnCode === 'copy') {
                  var _loop2 = function _loop2(_j) {
                    var index = activeHeads.findIndex(function (e) {
                      return e.attrcode === parentNode[_j].attrcode;
                    });

                    if (index !== -1) {
                      if (!array[start]) array[start] = [];

                      if (!uniqueFlag[activeHeads[index].attrcode]) {
                        uniqueFlag[activeHeads[index].attrcode] = true;
                        array[start].push(activeHeads[index]);
                      } else {
                        array[start].push(' ');
                      }

                      hasSel = true;
                    }
                  };

                  for (var _j = parentNode.length - 1; _j >= 0; _j--) {
                    _loop2(_j);
                  } //若为复制列 不需要判断，直接所有父元素全部复制

                } else if (btnCode === 'copy-column') {
                  if (!array[start]) array[start] = [];

                  for (var _j2 = parentNode.length - 1; _j2 >= 0; _j2--) {
                    if (!uniqueFlag[parentNode[_j2].attrcode]) {
                      uniqueFlag[parentNode[_j2].attrcode] = true;
                      array[start].push(parentNode[_j2]);
                    } else {
                      array[start].push('');
                    }
                  }

                  hasSel = true;
                }
              } //选中节点不含叶子节点

            } else {
              //判断是否含父节点
              if (parentNode && parentNode.length) {
                //记录第一个被选中的父节点
                var firstIndex = -1;

                var _loop3 = function _loop3(_j3) {
                  var index = activeHeads.findIndex(function (e) {
                    return e.attrcode === parentNode[_j3].attrcode;
                  });

                  if (index !== -1) {
                    hasSel = true;

                    if (btnCode === 'copy') {
                      if (!array[start]) array[start] = [];

                      if (!uniqueFlag[activeHeads[index].attrcode]) {
                        uniqueFlag[activeHeads[index].attrcode] = true;
                        array[start].push(activeHeads[index]);
                      } else {
                        array[start].push('');
                      }

                      if (_j3 < parentNode.length - 1 && firstIndex !== -1) {
                        var _array$start;

                        firstIndex = parentNode.length - 1 - _j3; // 填充叶子节点

                        (_array$start = array[start]).unshift.apply(_array$start, contextMenu_toConsumableArray(Array(firstIndex).fill('')));
                      }
                    }
                  }
                };

                for (var _j3 = parentNode.length - 1; _j3 >= 0; _j3--) {
                  _loop3(_j3);
                }

                if (hasSel && btnCode === 'copy-column') {
                  array[start] = [item];

                  for (var _j4 = parentNode.length - 1; _j4 >= 0; _j4--) {
                    if (!uniqueFlag[parentNode[_j4].attrcode]) {
                      uniqueFlag[parentNode[_j4].attrcode] = true;
                      array[start].push(parentNode[_j4]);
                    } else {
                      array[start].push('');
                    }
                  }
                }
              }
            } //复制行，则为复制整个表头区域

          } else if (btnCode === 'copy-row') {
            hasSel = true;
            array[start] = [item];

            if (parentNode && parentNode.length) {
              for (var _j5 = parentNode.length - 1; _j5 >= 0; _j5--) {
                if (!uniqueFlag[parentNode[_j5].attrcode]) {
                  uniqueFlag[parentNode[_j5].attrcode] = true;
                  array[start].push(parentNode[_j5]);
                } else {
                  array[start].push('');
                }
              }
            }
          }

          if (hasSel) {
            //记录树最大深度
            array[start] = array[start].reverse();
            maxLength = Math.max(array[start].length, maxLength);
            start++;
          }
        };

        for (var i = 0; i < arrayMeta.length; i++) {
          var _ret = _loop(i);

          if (_ret === "continue") continue;
        } //处理表头选中内容


        for (var _i = 0; _i < array[0].length; _i++) {
          for (var j = 0; j < array.length; j++) {
            //填充多表头
            if (array[j].length < maxLength) {
              var _array$j;

              (_array$j = array[j]).push.apply(_array$j, contextMenu_toConsumableArray(Array(maxLength - array[j].length).fill('')));
            } //获取label


            var tdContent = typeof array[j][_i] === 'string' ? array[j][_i] : array[j][_i].label;
            copyContent = copyContent + tdContent + "\t";
          }

          copyContent = copyContent + "\n";
        }

        return copyContent;

        function TraverNode(nodes) {
          var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

          if (Object(utils["isArray"])(nodes)) {
            nodes.map(function (item) {
              item.parentNode = parentNode; //只存叶子节点

              if (item.visible && !Object(utils["isArray"])(item.children) || Object(utils["isArray"])(item.children) && item.children.length < 1) {
                arrayMeta.push(item);
              }

              TraverNode(item.children, [].concat(contextMenu_toConsumableArray(parentNode), [item]));
            });
          }
        }
      };

      _this.sortActiveColumn = function (visibleColumns, activedCells) {
        var activeColumn = {}; //获取所有选中列编码

        for (var rowid in activedCells) {
          var rowActiveCells = activedCells[rowid];
          rowActiveCells.forEach(function (code) {
            if (!activeColumn[code]) {
              activeColumn[code] = true;
            }
          });
        } //对选中列编码 根据模板顺序排序


        var sortedColumn = [];
        visibleColumns.forEach(function (item) {
          var code = item.attrcode;

          if (activeColumn[code]) {
            sortedColumn.push(item);
          }
        });
        return sortedColumn;
      };

      _this.getBodyContent = function (selectedRows, activedCells, btnCode, arrayMeta) {
        var visibleColumns = arrayMeta.filter(function (e) {
          return e.visible === true;
        });

        var sortedActiveColumn = _this.sortActiveColumn(visibleColumns, activedCells);

        var copyContent = ''; //复制整行

        if (btnCode === 'copy-row') {
          selectedRows.forEach(function (selectedRow, rowIndex) {
            var values = selectedRow.values; //根据模板顺序 获取显示的数据

            visibleColumns.forEach(function (item, index) {
              var cellValue = values[item.attrcode] || {};
              copyContent = copyContent + (_this.getDisplay(item, cellValue, values) || '');

              if (index < visibleColumns.length - 1) {
                copyContent = copyContent + "\t";
              }
            });

            if (rowIndex < selectedRows.length - 1) {
              copyContent = copyContent + "\n";
            }
          });
        } //复制整列


        if (btnCode === 'copy-column') {
          selectedRows.forEach(function (selectedRow, rowIndex) {
            var values = selectedRow.values; //根据模板顺序 获取显示的数据

            sortedActiveColumn.forEach(function (item, index) {
              var code = item.attrcode;
              var cellValue = values[code] || {};
              copyContent = copyContent + (_this.getDisplay(item, cellValue, values) || '');

              if (index < sortedActiveColumn.length - 1) {
                copyContent = copyContent + "\t";
              }
            });

            if (rowIndex < selectedRows.length - 1) {
              copyContent = copyContent + "\n";
            }
          });
        } //复制单元格


        if (btnCode === 'copy') {
          selectedRows.forEach(function (selectedRow, rowIndex) {
            var rowid = selectedRow.rowid || selectedRow.rowId;
            var avtiveCodes = activedCells[rowid];
            var values = selectedRow.values; //根据模板顺序 获取显示的数据

            sortedActiveColumn.forEach(function (item, index) {
              var code = item.attrcode;

              if (avtiveCodes.includes(code)) {
                var cellValue = values[code] || {};
                copyContent = copyContent + (_this.getDisplay(item, cellValue, values) || '');
              }

              if (index < sortedActiveColumn.length - 1) {
                copyContent = copyContent + "\t";
              }
            });

            if (rowIndex < selectedRows.length - 1) {
              copyContent = copyContent + "\n";
            }
          });
        }

        return copyContent;
      };

      _this.getDisplay = function (item, cellValue, values) {
        var _this$props$contextMe = _this.props.contextMenuConfig.langJson,
            langJson = _this$props$contextMe === void 0 ? {} : _this$props$contextMe;
        return Object(utils["handleBrowseData"])(item.itemtype, cellValue.display, cellValue.value, cellValue.scale, item.attrcode, item.languageMeta, values, item.datatype, item.options, item.multiple, langJson);
      };

      _this.getPasteData = function () {
        return new Promise(function (resolve) {
          // 异步处理
          //IE浏览器
          if (window.clipboardData) {
            var pasteContent = _this.handlePasteContent(window.clipboardData.getData('Text'));

            resolve(pasteContent); //其他浏览器
          } else if (navigator.clipboard) {
            navigator.clipboard.readText().then(function (res) {
              var pasteContent = _this.handlePasteContent(res);

              resolve(pasteContent);
            });
          }
        });
      };

      _this.handlePasteContent = function (pasteContent) {
        if (pasteContent.length > 2) {
          var endStr = pasteContent.substr(pasteContent.length - 1, pasteContent.length);

          if (endStr === '\n') {
            pasteContent = pasteContent.substr(0, pasteContent.length - 1);
          }
        }

        pasteContent = pasteContent.split('\n');
        return pasteContent;
      };

      _this.createContextMenu = function () {
        var _this$props$contextMe2 = _this.props.contextMenuConfig,
            contextMenuClick = _this$props$contextMe2.contextMenuClick,
            showBusinessBtn = _this$props$contextMe2.showBusinessBtn,
            status = _this$props$contextMe2.status,
            _this$props$contextMe3 = _this$props$contextMe2.langJson,
            langJson = _this$props$contextMe3 === void 0 ? {} : _this$props$contextMe3,
            showPasteBtn = _this$props$contextMe2.showPasteBtn,
            extendRightMenu = _this$props$contextMe2.extendRightMenu;
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Fragment"], null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("li", {
          className: 'table-extend-right-menu copy',
          onClick: function onClick() {
            contextMenuClick('copy', function (activeHeads, currentMeta, activedCells, selectedRows, arrayMeta) {
              _this.execCommandCopy('copy', activeHeads, currentMeta, activedCells, selectedRows, arrayMeta);
            });
          }
        }, langJson['table_copy']), _this.copyMenu.map(function (code) {
          var _classnames;

          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("li", {
            className: classnames_default()((_classnames = {
              'table-extend-right-menu': true
            }, contextMenu_defineProperty(_classnames, code, true), contextMenu_defineProperty(_classnames, 'table-menus-sep', code === 'copy-column'), _classnames)),
            onClick: function onClick() {
              contextMenuClick(code, function (activeHeads, currentMeta, activedCells, selectedRows, arrayMeta) {
                _this.execCommandCopy(code, activeHeads, currentMeta, activedCells, selectedRows, arrayMeta);
              });
            }
          }, langJson['table_' + code]);
        }), status === 'edit' && showBusinessBtn && _this.editBussMenu.map(function (code) {
          var _classnames2;

          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("li", {
            //className={'table-extend-right-menu insert ' + code}
            className: classnames_default()((_classnames2 = {
              'table-extend-right-menu insert': true
            }, contextMenu_defineProperty(_classnames2, code, true), contextMenu_defineProperty(_classnames2, 'table-menus-sep', code === 'insert_down' || code === 'delete'), _classnames2)),
            onClick: function onClick() {
              contextMenuClick(code, null, null, _this[code], _this.pasteCell.rowIndex);
            }
          }, langJson['table_' + code], (code === 'insert_up' || code === 'insert_down') && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["NumberInput"], {
            className: "insert_number",
            onClick: function onClick(e) {
              e.stopPropagation();
            },
            onChange: function onChange(value) {
              _this[code] = value;
            }
          }));
        }), Object(utils["isFunction"])(extendRightMenu) && extendRightMenu());
      };

      _this.onCellMouseDown = function (record, rowIndex, attrcode, __col, e) {
        _this.pasteCell.rowIndex = rowIndex;
        _this.pasteCell.attrcode = attrcode;
        _this.pasteCell.column = __col;
        var _this$props = _this.props,
            onCellMouseDown = _this$props.onCellMouseDown,
            store = _this$props.store,
            rowKey = _this$props.rowKey; //记录当前单元格

        if (e && e.button === 2) {
          var activedCells = store.getCache('activedCells');
          var rowId = record[rowKey].value || record[rowKey];

          if (activedCells) {
            var currentRowCell = activedCells[rowId];

            if (Array.isArray(currentRowCell) && currentRowCell.includes(attrcode)) {
              return;
            }

            var _loop4 = function _loop4(rowKeyValue) {
              (activedCells[rowKeyValue] || []).forEach(function (attrcode) {
                store.setCellProps(rowKeyValue, attrcode, {
                  actived: false,
                  leftLine: false,
                  rightLine: false,
                  topLine: false,
                  bottomLine: false
                }, false);
              });
            };

            for (var rowKeyValue in activedCells) {
              _loop4(rowKeyValue);
            }
          }

          store.setCellProps(rowId, attrcode, {
            actived: true,
            leftLine: true,
            rightLine: true,
            topLine: true,
            bottomLine: true
          }, true);
          activedCells = contextMenu_defineProperty({}, rowId, [attrcode]);
          store.setCache("activedCells", activedCells);
        }

        Object(utils["isFunction"])(onCellMouseDown) && onCellMouseDown(record, rowIndex, attrcode, __col, e);
      };

      _this.pasteCell = {
        rowIndex: -1,
        attrcode: '',
        column: {}
      }; //需要业务适配点击事件

      _this.editBussMenu = ['insert_up', 'insert_down', 'delete'];
      _this.copyMenu = ['copy-row', 'copy-column'];
      _this.insert_up = 0;
      _this.insert_down = 0;
      _this.wrapper = null;
      return _this;
    } //执行复制


    contextMenu_createClass(ContextRightMenu, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            contextMenuConfig = _this$props2.contextMenuConfig,
            onCellMouseDown = _this$props2.onCellMouseDown,
            others = contextMenu_objectWithoutProperties(_this$props2, ["contextMenuConfig", "onCellMouseDown"]);

        var enable = contextMenuConfig.enable,
            extendRightMenu = contextMenuConfig.extendRightMenu,
            contextMenuClick = contextMenuConfig.contextMenuClick;
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          ref: function ref(dom) {
            _this2.wrapper = dom;
          }
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["HotKeys"], {
          keyMap: {
            copyHandler: ['ctrl+c']
          },
          handlers: {
            copyHandler: function copyHandler() {
              contextMenuClick('copy', function (activeHeads, currentMeta, activedCells, selectedRows, arrayMeta) {
                _this2.execCommandCopy('copy', activeHeads, currentMeta, activedCells, selectedRows, arrayMeta);
              }, undefined, undefined, undefined, true);
            }
          },
          className: "copy-hotkeys-wrapper",
          focused: true,
          attach: false
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("textarea", {
          id: "table-copy-element"
        }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Table, contextMenu_extends({}, others, {
          //记录右键菜单触发行
          onCellMouseDown: this.onCellMouseDown //注册右键菜单
          ,
          extendRightMenu: enable ? this.createContextMenu() : Object(utils["isFunction"])(extendRightMenu) ? extendRightMenu() : null
        }))));
      }
    }]);

    return ContextRightMenu;
  }(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]), _temp;
}
// EXTERNAL MODULE: ./src/platform/components/WithKeyboardChange/EditTableWithKeyboardChange.js
var EditTableWithKeyboardChange = __webpack_require__(743);

// EXTERNAL MODULE: ./src/platform/components/WithKeyboardChange/TableWithKeyboardChange.js
var TableWithKeyboardChange = __webpack_require__(744);

// EXTERNAL MODULE: ./src/platform/components/WithAutoFocus/TableWithAutoFocus.js
var TableWithAutoFocus = __webpack_require__(742);

// EXTERNAL MODULE: ./src/platform/components/Table/tableLibs/lib/hotkey/index.less
var lib_hotkey = __webpack_require__(1883);

// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/hotkey/index.js
function hotkey_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { hotkey_typeof = function _typeof(obj) { return typeof obj; }; } else { hotkey_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return hotkey_typeof(obj); }

function hotkey_extends() { hotkey_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return hotkey_extends.apply(this, arguments); }

function hotkey_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = hotkey_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function hotkey_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function hotkey_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function hotkey_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function hotkey_createClass(Constructor, protoProps, staticProps) { if (protoProps) hotkey_defineProperties(Constructor.prototype, protoProps); if (staticProps) hotkey_defineProperties(Constructor, staticProps); return Constructor; }

function hotkey_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) hotkey_setPrototypeOf(subClass, superClass); }

function hotkey_setPrototypeOf(o, p) { hotkey_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return hotkey_setPrototypeOf(o, p); }

function hotkey_createSuper(Derived) { var hasNativeReflectConstruct = hotkey_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = hotkey_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = hotkey_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return hotkey_possibleConstructorReturn(this, result); }; }

function hotkey_possibleConstructorReturn(self, call) { if (call && (hotkey_typeof(call) === "object" || typeof call === "function")) { return call; } return hotkey_assertThisInitialized(self); }

function hotkey_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function hotkey_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function hotkey_getPrototypeOf(o) { hotkey_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return hotkey_getPrototypeOf(o); }

/*
 * @Descripttion: 表格的tab键 enter键 上下左右键
 * @version: 
 * @Author: bbq
 * @Date: 2020-09-05 09:49:57
 * @LastEditors: bbq
 * @LastEditTime: 2020-12-22 14:31:59
 */






/**
* 快捷键逻辑处理
* @param {*} Table 
*/

function hotkey_hotkey(Table, componentParams) {
  if (!Table) {
    console.error('缺少Table组件');
  }

  var MetaTable = /*#__PURE__*/function (_Component) {
    hotkey_inherits(MetaTable, _Component);

    var _super = hotkey_createSuper(MetaTable);

    function MetaTable(props) {
      hotkey_classCallCheck(this, MetaTable);

      return _super.call(this, props);
    } // click


    hotkey_createClass(MetaTable, [{
      key: "handleTableCellClick",
      value: function handleTableCellClick(record, index, attrcode, col, e) {
        this.mousedown = false;
      } // cell 点击时

    }, {
      key: "handleCellMouseDown",
      value: function handleCellMouseDown(record, index, attrcode, col, e) {
        this.mousedown = true;
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        var _this$props = this.props,
            rowKey = _this$props.rowKey,
            _onCellMouseDown = _this$props.onCellMouseDown,
            _onCellFocus = _this$props.onCellFocus,
            _onCellKeyDown = _this$props.onCellKeyDown,
            _onTableCellClick = _this$props.onTableCellClick,
            onEnter = _this$props.onEnter,
            _hotKeyWithArrow = _this$props.hotKeyWithArrow,
            hotKeyWithEnter = _this$props.hotKeyWithEnter,
            high_hotkey = _this$props.high_hotkey,
            others = hotkey_objectWithoutProperties(_this$props, ["rowKey", "onCellMouseDown", "onCellFocus", "onCellKeyDown", "onTableCellClick", "onEnter", "hotKeyWithArrow", "hotKeyWithEnter", "high_hotkey"]);

        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Table, hotkey_extends({
          onCellMouseDown: function onCellMouseDown(record, index, attrcode, col, e) {
            var res = _onCellMouseDown ? _onCellMouseDown(record, index, attrcode, col, e) : true;
            return res !== false && _this.handleCellMouseDown(record, index, attrcode, col, e);
          },
          onCellFocus: function onCellFocus(record, index, attrcode, col, e) {
            var res = _onCellFocus ? _onCellFocus(record, index, attrcode, col, e) : true;
          },
          onCellKeyDown: function onCellKeyDown(record, index, attrcode, col, e) {
            var res = _onCellKeyDown ? _onCellKeyDown(record, index, attrcode, col, e) : true;
          },
          onTableCellClick: function onTableCellClick(record, index, attrcode, col, e) {
            var res = _onTableCellClick ? _onTableCellClick(record, index, attrcode, col, e) : true;
            return res !== false && _this.handleTableCellClick(record, index, attrcode, col, e);
          },
          onEnter: function onEnter(_ref) {
            var e = _ref.e,
                _ref$target = _ref.target,
                target = _ref$target === void 0 ? undefined : _ref$target,
                itemType = _ref.itemType;
            var tableId = high_hotkey.tableId;
            hotKeyWithEnter({
              e: e,
              ViewModel: api_index_["ViewModel"],
              moduleId: tableId,
              target: target,
              itemType: itemType
            });
          },
          hotKeyWithArrow: function hotKeyWithArrow(_ref2) {
            var e = _ref2.e,
                _ref2$target = _ref2.target,
                target = _ref2$target === void 0 ? undefined : _ref2$target,
                itemType = _ref2.itemType;
            var tableId = high_hotkey.tableId;

            _hotKeyWithArrow({
              e: e,
              ViewModel: api_index_["ViewModel"],
              moduleId: tableId,
              target: target,
              itemType: itemType
            });
          },
          rowKey: rowKey
        }, others));
      }
    }]);

    return MetaTable;
  }(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]); // 自动聚焦
  // MetaTable = TableWithAutoFocus(MetaTable);
  // 上下键 enter键
  // console.log(componentParams);


  var name = componentParams.name,
      type = componentParams.type,
      user = componentParams.user;
  return Object(TableWithAutoFocus["a" /* default */])(name === 'editTable' ? Object(EditTableWithKeyboardChange["a" /* default */])(MetaTable) : Object(TableWithKeyboardChange["a" /* default */])(MetaTable));
}
// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/lib/index.js
/*
 * @Descripttion: 高阶组件导出
 * @version: 
 * @Author: renyjk
 * @Date: 2020-07-17 14:13:11
 * @LastEditors: bbq
 * @LastEditTime: 2020-09-05 09:50:52
 */















// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/EditTableStore.js
function EditTableStore_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditTableStore_typeof = function _typeof(obj) { return typeof obj; }; } else { EditTableStore_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditTableStore_typeof(obj); }

function EditTableStore_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function EditTableStore_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { EditTableStore_ownKeys(Object(source), true).forEach(function (key) { EditTableStore_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { EditTableStore_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function EditTableStore_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function EditTableStore_toConsumableArray(arr) { return EditTableStore_arrayWithoutHoles(arr) || EditTableStore_iterableToArray(arr) || EditTableStore_unsupportedIterableToArray(arr) || EditTableStore_nonIterableSpread(); }

function EditTableStore_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function EditTableStore_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return EditTableStore_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return EditTableStore_arrayLikeToArray(o, minLen); }

function EditTableStore_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function EditTableStore_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return EditTableStore_arrayLikeToArray(arr); }

function EditTableStore_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function EditTableStore_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditTableStore_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditTableStore_createClass(Constructor, protoProps, staticProps) { if (protoProps) EditTableStore_defineProperties(Constructor.prototype, protoProps); if (staticProps) EditTableStore_defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = EditTableStore_getPrototypeOf(object); if (object === null) break; } return object; }

function EditTableStore_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EditTableStore_setPrototypeOf(subClass, superClass); }

function EditTableStore_setPrototypeOf(o, p) { EditTableStore_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EditTableStore_setPrototypeOf(o, p); }

function EditTableStore_createSuper(Derived) { var hasNativeReflectConstruct = EditTableStore_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EditTableStore_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EditTableStore_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EditTableStore_possibleConstructorReturn(this, result); }; }

function EditTableStore_possibleConstructorReturn(self, call) { if (call && (EditTableStore_typeof(call) === "object" || typeof call === "function")) { return call; } return EditTableStore_assertThisInitialized(self); }

function EditTableStore_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EditTableStore_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EditTableStore_getPrototypeOf(o) { EditTableStore_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EditTableStore_getPrototypeOf(o); }

/*
 * @Descripttion: 数据源  状态
 * @version:
 * @Author: renyjk
 * @Date: 2020-05-29 10:59:26
 * @LastEditors: bbq
 * @LastEditTime: 2021-03-08 15:48:28
 */

/**
 * 一些原则的说明
 * 1、所有index  应该是指当前可见的数据 不包含被过滤的和假删除的
 * 2、所有表格内部的操作  应尽量使用 rowKey 来完成
 * 3、内部的api也尽量用  rowKey来操作
 * 4、getTrueRowIndex 方法里的这个index  应该是指
 * 5、getTrueRowIndexOfFilter过滤之前的index 所有涉及的API 都需要调整下 TODO
 *
 *
 *
 */




var EditTableStore_ROW_STATUS = tableLibs_config["a" /* default */].ROW_STATUS; // 表格数据类型

function TableData(data) {
  var keyPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "rowid";
  return new index_["ArrayData"](data, keyPath);
} // 表格META类型

/**
 *
 *  meta={
 *  'body1':{
 *      name: "分组一",
 *      code: "body1",
 *      items:[],
 *  },
 * 'body2':{
 *      name: "分组一",
 *      code: "body1",
 *      items:[],
 *  },
 *  gridrelation:{
 *  },
 * }
 *
 */

function TableMeta(data) {
  var keyPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "attrcode";

  for (var _i = 0, _Object$keys = Object.keys(data); _i < _Object$keys.length; _i++) {
    var areacode = _Object$keys[_i];

    if (Object(utils["isObject"])(data[areacode]) && Object(utils["isArray"])(data[areacode].items) && data[areacode].moduletype === "table") {
      //业务组修改模板, 增加新列, treeData中没有 导致treeData的query方法获取不到新列
      data[areacode].items.isArrayData = false;
      data[areacode].items = new index_["TreeData"](data[areacode].items, keyPath);
    }
  }

  return data;
}
/**
 * 不要删 后面可以用来测试效率
 * @description: info打印
 * @param {type}
 * @return:
 */
//

var infoLog = function infoLog(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function () {
    console.time("Function ".concat(name, " is call, time "));
    var res = oldValue.apply(this, arguments);
    console.timeEnd("Function ".concat(name, " is call, time "));
    return res;
  };

  return descriptor;
};
/**
 *  使用轩轩的  itemCreator 来获取类型的初始值
 *  如果初始值出问题  找轩轩讨论
 * @description: 暂时保留
 * @param {type}
 * @return:
 */
//


function typeFormat(origin, type) {
  var isVoid = utils["isWrong"].call(null, origin);

  switch (true) {
    // 'input', 'textarea', 'datepicker', 'select', 'checkbox', 'radio', 'refer', 'label' 和 number的空value处理
    case ["input", "textarea", "datepicker", "select", "checkbox", "radio", "refer", "label", "number"].includes(type) && isVoid:
      return "";
    // switch 的空value处理为boolean值

    case ["switch", "checkbox_switch", "switch_browse"].includes(type) && isVoid:
      return !!origin;

    default:
      return origin;
  }
}

var EditTableStore_Store = /*#__PURE__*/function (_BaseStore) {
  EditTableStore_inherits(Store, _BaseStore);

  var _super = EditTableStore_createSuper(Store);

  function Store(props) {
    var _this;

    EditTableStore_classCallCheck(this, Store);

    _this = _super.call(this, props);
    _this.store = {
      // 表格数据
      data: new TableData([], "rowid"),
      // 列模板
      meta: {},
      // 表格属性
      props: {
        rowKey: "rowid",
        status: "browse",
        // 需要聚焦的目标行
        focusIndex: -1,
        // 当前正在操作的行
        currentIndex: -1,
        currentInfo: {}
      },
      // 已选行
      selectedIndex: new Set(),
      // 所有pk
      allpks: [],
      // checkbox选中
      checkInfo: {
        checkedAll: false,
        //全选标志
        indeterminate: false,
        //半选标志
        selectIndex: [],
        //选中行
        disabledAll: false,
        crossPageSelectIndex: new Set() //跨页选择

      },
      config: {},
      //业务组传进来的config
      sortParam: undefined,
      //存储新的排序信息
      key: 1
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

    _this.getMeta = function () {
      var meta = _this.getStore("meta"),
          res = {};

      for (var _i2 = 0, _Object$keys2 = Object.keys(meta); _i2 < _Object$keys2.length; _i2++) {
        var key = _Object$keys2[_i2];
        // 去除一下浅拷贝 避免JSON.parse报错
        res[key] = meta[key]; // JSON.parse(JSON.stringify(meta[key]));

        if (Object(utils["isObject"])(meta[key]) && meta[key].items) {
          if (meta[key].moduletype === "table") {
            res[key].items = meta[key].items.get ? meta[key].items.get() : meta[key].items; // getArrayData
          } else if (meta[key].moduletype === "form") {
            res[key].items = meta[key].items;
          }
        }
      } // console.log(res);


      return res;
    };

    _this.generateRowKey = function () {
      return String(new Date().getTime()).slice(-5) + Object(api_index_["getSafeRandom"])().toString(12);
    };

    _this.setCrossPage = function (rows, pkname, isSelect) {
      var _this$getCheckInfo = _this.getCheckInfo(),
          crossPageSelectIndex = _this$getCheckInfo.crossPageSelectIndex;

      var allpks = _this.getStore(["allpks"]) || [];
      var rowsArr = Object(utils["isArray"])(rows) ? rows : [rows];
      rowsArr.forEach(function (row) {
        var pk = row.values[pkname].value;
        var values = row.values || row;
        var unSaga = !values['saga_status'] || values['saga_status'].value !== '1';
        var disabled = row.disabled;

        if (isSelect && unSaga && !disabled) {
          crossPageSelectIndex.add(pk);
        } else {
          crossPageSelectIndex["delete"](pk);
        }
      });
      var checkedAllpage = allpks.length === crossPageSelectIndex.size;

      _this.setStore(["checkInfo", "checkedAllpage"], checkedAllpage, false);
    };

    _this._setSelect = function (rowIdArr) {
      var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "set";
      var shouldForceUpdate = arguments.length > 2 ? arguments[2] : undefined;

      var selectIndex = _this.getStore(["selectedIndex"]);

      var indeterminate = false,
          checkedAll = false;

      if (pattern === "set") {
        selectIndex.clear();
        rowIdArr.forEach(function (rowId) {
          selectIndex.add(rowId);
        });
      }

      if (pattern === "clear") {
        selectIndex.clear();
      }

      if (pattern === "all" || pattern === "allpage") {
        _this.setRowsSelected({}, true, false);
      } else if (pattern === "reverse") {
        _this.reverseRowsSelected(false);
      } else if (pattern === "clear") {
        _this.setRowsSelected({}, false, false);
      } else {
        _this.setRowsSelected({
          rowKeyValues: EditTableStore_toConsumableArray(selectIndex)
        }, true, false);
      }

      var rows = _this.getData();

      var rowsLength = rows.length;
      var selectSize = selectIndex.size;

      if (selectSize === 0) {
        indeterminate = false;
        checkedAll = false;
      } else if (selectSize > 0 && selectSize < rowsLength) {
        indeterminate = true;
        checkedAll = false;
      } else if (selectSize === rowsLength) {
        indeterminate = false;
        checkedAll = true;
      }

      var checkInfo = _this.getStore("checkInfo");

      checkInfo.indeterminate = indeterminate;
      checkInfo.checkedAll = checkedAll;
      checkInfo.selectIndex = selectIndex;

      if (pattern === "allpage") {
        checkInfo.checkedAllpage = true;
      } else {
        checkInfo.checkedAllpage = false;
      }

      _this.setStore(["checkInfo"], checkInfo, shouldForceUpdate);
    };

    _this.getConfig = function () {
      return _this.getStore(["config"]);
    };

    _this.setConfig = function (config) {
      _this.setStore(["config"], config, false);
    };

    _this._updateAndAddRows = function (_ref) {
      var _ref$rows = _ref.rows,
          rows = _ref$rows === void 0 ? [] : _ref$rows,
          _ref$shouldForceUpdat = _ref.shouldForceUpdate,
          shouldForceUpdate = _ref$shouldForceUpdat === void 0 ? true : _ref$shouldForceUpdat;
      console.log('_updateAndAddRows', rows);

      var rowKey = _this.getTableProps("rowKey");

      var data = _this.getStore("data");

      var lastRowIndex = data.length;
      var newRows = [];
      var insertRows = [];
      rows.forEach(function (item) {
        var rowKeyValue = item[rowKey],
            row = data.query(item[rowKey]);

        if (Object(utils["isObject"])(row)) {
          data.update(rowKeyValue, function (oldRow) {
            //  Update values status ==
            var values = Object.assign({}, oldRow["values"], item["values"] || {}); // 合并状态等其他属性

            oldRow = Object.assign({}, oldRow, item || {}); // 赋值

            oldRow.values = values;
            var newRow = JSON.parse(JSON.stringify(oldRow));
            newRows.push(newRow);
            return newRow;
          });
        } else {
          insertRows.push(item);
        }
      });

      _this._insertRows({
        rows: insertRows,
        rowIndex: lastRowIndex,
        isGenerateRowKey: false,
        shouldForceUpdate: false
      });

      shouldForceUpdate && _this.forceUpdate();
      return newRows;
    };

    _this.getExcelReferAjaxData = function (ajaxData, refer, con, queryCondition, TreeRefActionExt, GridRefActionExt, extraCondition, extraAjaxParam) {
      var query = {};

      if (Object(utils["isFunction"])(queryCondition)) {
        query = Object.assign({}, queryCondition(refer.props), con); //先是组件的模板上的condition，被业务组注册进来的condition覆盖
      } else if (Object(utils["isObject"])(queryCondition)) {
        query = Object.assign({}, queryCondition, con);
      } else if (Object(utils["isUndefined"])(queryCondition)) {
        query = Object.assign({}, con);
      }

      if (Object(utils["isString"])(query.TreeRefActionExt)) {
        if (query.TreeRefActionExt) {
          TreeRefActionExt = query.TreeRefActionExt + "," + TreeRefActionExt;
        }
      }

      if (Object(utils["isString"])(query.GridRefActionExt)) {
        if (query.GridRefActionExt) {
          GridRefActionExt = query.GridRefActionExt + "," + GridRefActionExt;
        }
      }

      delete query.TreeRefActionExt;
      delete query.GridRefActionExt;
      return EditTableStore_objectSpread({
        pageInfo: {
          pageSize: 50,
          pageIndex: -1
        },
        keyword: "",
        pid: "",
        defineItems: [],
        queryCondition: EditTableStore_objectSpread(EditTableStore_objectSpread({
          batchQueryByName: JSON.stringify({
            names: ajaxData
          }),
          TreeRefActionExt: TreeRefActionExt,
          GridRefActionExt: GridRefActionExt
        }, extraCondition), query)
      }, extraAjaxParam);
    };

    _this.sendExcelReferMergeAjax = function (reqData, otherParams) {
      return new Promise(function (resolve, reject) {
        Object(api_index_["ajax"])({
          url: '/nccloud/platform/pub/mergerequest.do',
          data: reqData,
          success: function success(res) {
            var param = EditTableStore_objectSpread({
              res: res
            }, otherParams);

            var data = _this.excelReferMergeAjaxSuccess(param);

            resolve(data);
          },
          error: function error(_error) {
            console.error(_error);
            reject(_error);
          }
        });
      });
    };

    _this.sendExcelReferNomalAjax = function (ajaxdata, url, otherParams) {
      return new Promise(function (resolve, reject) {
        Object(api_index_["ajax"])({
          url: url,
          async: false,
          data: EditTableStore_objectSpread({}, ajaxdata),
          success: function success(res) {
            var param = EditTableStore_objectSpread({
              res: res
            }, otherParams);

            var data = _this.excelReferNomalAjaxSuccess(param);

            resolve(data);
          },
          error: function error(_error2) {
            console.error(_error2);
            reject(_error2);
          }
        });
      });
    };

    _this.excelReferMergeAjaxSuccess = function (param) {
      var res = param.res,
          queryValue = param.queryValue,
          attrcode = param.attrcode,
          fieldValued = param.fieldValued,
          fieldDisplayed = param.fieldDisplayed,
          indexs = param.indexs;

      if (res.data) {
        var newChangedRows = [];
        var ajaxValues = [];
        Object.keys(res.data).forEach(function (index) {
          var resValue = res.data[index];
          var row = queryValue[index];

          if (resValue.rows.length) {
            var cell = row.values[attrcode].value;
            var finalVal = "";
            var finalDis = "";
            var flag = false;

            for (var i = 0; i < resValue.rows.length; i++) {
              var item = resValue.rows[i]; //助记码

              var rememberCode = item.values && item.values.materialmnecode && item.values.materialmnecode.value;

              if (cell == item['refcode'] || cell == item['refname'] || cell == rememberCode) {
                finalVal += item[fieldValued];
                finalDis += item[fieldDisplayed];
                flag = true;
                break;
              }
            }

            var initVal = _this.getRowOldValue(row.rowid, attrcode);

            var _getValue = function _getValue(init) {
              return Object(utils["isObject"])(init) ? init.refpk : init;
            };

            var isRefpk = _getValue(initVal);

            if (flag) {
              var theValue = {
                display: finalDis,
                value: finalVal
              };
              newChangedRows.push({
                rowid: row.rowid,
                newvalue: {
                  value: theValue.value || ""
                },
                oldvalue: {
                  value: isRefpk || ""
                }
              }); //把最终值赋给queryvalue

              row.values[attrcode].value = finalVal;
              row.values[attrcode].display = finalDis;
              ajaxValues.push(row);
            } else {
              var _initVal = _this.getRowOldValue(row.rowid, attrcode);

              var _getValue2 = function _getValue2(init) {
                return Object(utils["isObject"])(init) ? init.refpk : init;
              };

              var _isRefpk = _getValue2(_initVal);

              newChangedRows.push({
                rowid: row.rowid,
                newvalue: {
                  value: ""
                },
                oldvalue: {
                  value: _isRefpk || ""
                }
              });
              row.values[attrcode].value = "";
              row.values[attrcode].display = "";
              ajaxValues.push(row);
            }
          } else {
            var _initVal2 = _this.getRowOldValue(row.rowid, attrcode);

            var _getValue3 = function _getValue3(init) {
              return Object(utils["isObject"])(init) ? init.refpk : init;
            };

            var _isRefpk2 = _getValue3(_initVal2);

            newChangedRows.push({
              rowid: row.rowid,
              newvalue: {
                value: ""
              },
              oldvalue: {
                value: _isRefpk2 || ""
              }
            });
            row.values[attrcode].value = "";
            row.values[attrcode].display = "";
            ajaxValues.push(row);
          }
        });
        console.log(123, 'excelReferMergeAjaxSuccess', res, ajaxValues);
        return {
          indexs: indexs,
          finalValues: ajaxValues,
          changedrows: newChangedRows
        };
      }
    };

    _this.excelReferNomalAjaxSuccess = function (param) {
      var res = param.res,
          queryValue = param.queryValue,
          attrcode = param.attrcode,
          fieldValued = param.fieldValued,
          fieldDisplayed = param.fieldDisplayed,
          indexs = param.indexs;

      if (res.data.rows.length) {
        var newChangedRows = [];
        var ajaxValues = [];
        queryValue.map(function (row) {
          var cell = row.values[attrcode].value;
          var finalVal = "";
          var finalDis = "";
          var flag = false;

          for (var i = 0; i < res.data.rows.length; i++) {
            var item = res.data.rows[i]; //助记码

            var rememberCode = item.values && item.values.materialmnecode && item.values.materialmnecode.value;

            if (cell == item['refcode'] || cell == item['refname'] || cell == rememberCode) {
              finalVal += item[fieldValued];
              finalDis += item[fieldDisplayed];
              flag = true;
              break;
            }
          }

          var initVal = _this.getRowOldValue(row.rowid, attrcode);

          var _getValue = function _getValue(init) {
            return Object(utils["isObject"])(init) ? init.refpk : init;
          };

          var isRefpk = _getValue(initVal);

          if (flag) {
            var theValue = {
              display: finalDis,
              value: finalVal
            };
            newChangedRows.push({
              rowid: row.rowid,
              newvalue: {
                value: theValue.value || ""
              },
              oldvalue: {
                value: isRefpk || ""
              }
            }); //把最终值赋给queryvalue

            row.values[attrcode].value = finalVal;
            row.values[attrcode].display = finalDis;
            ajaxValues.push(row);
          } else {
            newChangedRows.push({
              rowid: row.rowid,
              newvalue: {
                value: ""
              },
              oldvalue: {
                value: isRefpk || ""
              }
            });
            row.values[attrcode].value = "";
            row.values[attrcode].display = "";
            ajaxValues.push(row);
            console.error(cell, "参照过滤没有匹配数据");
          }
        });
        console.log(4561, 'excelReferNomalAjaxSuccess', res, ajaxValues, newChangedRows);
        return {
          indexs: indexs,
          finalValues: ajaxValues,
          changedrows: newChangedRows
        };
      } else {
        var _newChangedRows = [];
        var _ajaxValues = [];
        queryValue.map(function (row) {
          var initVal = _this.getRowOldValue(row.rowid, attrcode);

          var _getValue = function _getValue(init) {
            return Object(utils["isObject"])(init) ? init.refpk : init;
          };

          var isRefpk = _getValue(initVal);

          _newChangedRows.push({
            rowid: row.rowid,
            newvalue: {
              value: ""
            },
            oldvalue: {
              value: isRefpk || ""
            }
          });

          row.values[attrcode].value = "";
          row.values[attrcode].display = "";

          _ajaxValues.push(row);
        });
        console.error("参照过滤后返回的数组是空数组，没有查询到");
        console.log(4562, 'excelReferNomalAjaxSuccess', res, _ajaxValues, _newChangedRows);
        return {
          indexs: indexs,
          finalValues: _ajaxValues,
          changedrows: _newChangedRows
        };
      }
    };

    _this.updateAfterBatchChange = function (pageScope, param) {
      var areaCode = param.areaCode,
          column = param.column,
          indexs = param.indexs,
          queryValue = param.queryValue,
          changedrows = param.changedrows,
          pasteData = param.pasteData,
          customQueryCondition = param.queryCondition,
          isManyCondition = param.isManyCondition,
          _param$extraAjaxParam = param.extraAjaxParam,
          extraAjaxParam = _param$extraAjaxParam === void 0 ? {} : _param$extraAjaxParam; // console.log('updateafterbatchchange param', param)

      var attrcode = column.attrcode,
          itemtype = column.itemtype,
          editAfterFlag = column.editAfterFlag,
          refcode = column.refcode,
          _column$fieldDisplaye = column.fieldDisplayed,
          fieldDisplayed = _column$fieldDisplaye === void 0 ? "refname" : _column$fieldDisplaye,
          _column$fieldValued = column.fieldValued,
          fieldValued = _column$fieldValued === void 0 ? "refpk" : _column$fieldValued,
          queryCondition = column.queryCondition,
          pk_defdoclist = column.pk_defdoclist,
          dataPowerOperationCode = column.dataPowerOperationCode,
          isDataPowerEnable = column.isDataPowerEnable,
          loadSelectedData = column.loadSelectedData;

      if (itemtype === "refer") {
        if (/.js/.test(refcode)) {
          refcode = refcode.replace(".js", "");
        }

        if (!refcode || !window[refcode]) {
          console.error("window\u4E2D\u6CA1\u6709refcode:".concat(refcode));
        }

        var refer = window[refcode]["default"]();
        var url = refer.props.queryGridUrl || refer.props.queryTreeUrl;
        var referProps = refer.props;
        var checkStrictly = referProps.checkStrictly;

        if (checkStrictly === false) {
          //摘要走这里
          return new Promise(function (resolve) {
            console.error('非严格参照，比如摘要');
            var newChangedRows = [];
            queryValue.forEach(function (row) {
              var initVal = _this.getRowOldValue(row.rowid, attrcode);

              var _getValue = function _getValue(init) {
                return Object(utils["isObject"])(init) ? init.refpk : init;
              }; //摘要这样的参照 value和display都一样


              var isRefpk = _getValue(initVal);

              var theValue = {
                display: row.values[attrcode].value,
                value: row.values[attrcode].value
              };
              row.values[attrcode].display = row.values[attrcode].value;
              newChangedRows.push({
                rowid: row.rowid,
                newvalue: {
                  value: theValue.value || ""
                },
                oldvalue: {
                  value: isRefpk || ""
                }
              });
            });

            _this._updateAndAddRows({
              rows: queryValue
            }); //给表格赋值


            resolve({
              props: pageScope,
              indexs: indexs,
              key: attrcode,
              changedrows: newChangedRows
            });
          });
        }

        var TreeRefActionExt = "nccloud.web.uap.refer.BatchQueryByNameSqlBuilder";
        var GridRefActionExt = "nccloud.web.uap.refer.BatchQueryByNameSqlBuilder"; // 模板上会返回下面几个属性

        var extraCondition = {};
        pk_defdoclist !== undefined && (extraCondition.pk_defdoclist = pk_defdoclist);
        dataPowerOperationCode !== undefined && (extraCondition.DataPowerOperationCode = dataPowerOperationCode);
        isDataPowerEnable !== undefined && (extraCondition.isDataPowerEnable = isDataPowerEnable);
        loadSelectedData && (extraCondition.loadSelectedData = true);
        var referFilter;
        var otherParams = {
          queryValue: queryValue,
          attrcode: attrcode,
          fieldValued: fieldValued,
          fieldDisplayed: fieldDisplayed,
          indexs: indexs
        };

        if (isManyCondition) {
          console.warn('manycondition');
          var mergeAjaxData = [];
          queryValue.forEach(function (row, index) {
            var ajaxData = [row.values[attrcode].value];
            var con = row.queryCondition;

            var datajson = _this.getExcelReferAjaxData(ajaxData, refer, con, queryCondition, TreeRefActionExt, GridRefActionExt, extraCondition, extraAjaxParam);

            var data = {
              rqUrl: url,
              rqJson: JSON.stringify(datajson),
              rqCode: String(index)
            };
            mergeAjaxData.push(data);
          });
          referFilter = _this.sendExcelReferMergeAjax(mergeAjaxData, otherParams);
        } else {
          var ajaxData = pasteData;
          var con = customQueryCondition;

          var data = _this.getExcelReferAjaxData(ajaxData, refer, con, queryCondition, TreeRefActionExt, GridRefActionExt, extraCondition, extraAjaxParam);

          referFilter = _this.sendExcelReferNomalAjax(data, url, otherParams);
        }

        return referFilter.then(function (res) {
          var changedrows = res.changedrows;
          var finalValues = res.finalValues;
          var indexs = res.indexs;

          if (editAfterFlag) {
            console.log('参照关联项');
            pageScope.handleRelationItems({
              type: "table",
              areaCode: areaCode,
              key: attrcode,
              changedrows: changedrows,
              rows: finalValues
            });
          } else {
            console.log('无关联项');

            _this._updateAndAddRows({
              rows: finalValues
            }); //给表格赋值

          }

          return {
            props: pageScope,
            key: attrcode,
            changedrows: changedrows,
            indexs: indexs
          };
        });
      } else {
        //除了參照以外类型的编辑关联项的处理
        if (editAfterFlag) {
          return new Promise(function (resolve) {
            pageScope.handleRelationItems({
              type: "table",
              areaCode: areaCode,
              key: attrcode,
              changedrows: changedrows,
              isMul: true,
              rows: queryValue
            });
            resolve({
              props: pageScope,
              changedrows: changedrows,
              key: attrcode,
              indexs: indexs
            });
          });
        } else {
          return new Promise(function (resolve) {
            console.log(123);
            console.log(queryValue);

            _this._updateAndAddRows({
              rows: queryValue
            }); //给表格赋值


            resolve({
              props: pageScope,
              changedrows: changedrows,
              key: attrcode,
              indexs: indexs
            });
          });
        }
      }
    };

    _this.anoterTable = function () {
      var key = _this.getStore(["key"]);

      _this.setStore('key', key + 1);
    };

    _this.getTableHooks = function () {
      // console.log('当前的对象', this);
      // 这样处理的一下 才能报错  方法内部的this 永远指向 实例  否则会指向下面的 {} 对象
      _this.getMeta = _this.getMeta.bind(EditTableStore_assertThisInitialized(_this));
      _this.setMeta = _this.setMeta.bind(EditTableStore_assertThisInitialized(_this)); // return this;

      return {
        // 这个是给公共层提供 组件在使用baseComponent 是可以正常运行
        setRef: _this.setRef,
        getRef: _this.getRef,
        removeRef: _this.removeRef,
        // 刷新 更新
        refresh: _this.refresh,
        //更新table的key（给业务组刷新table使用）
        anoterTable: _this.anoterTable,
        // 按路径索引 给内部使用
        getStore: _this.getStore.bind(EditTableStore_assertThisInitialized(_this)),
        setStore: _this.setStore.bind(EditTableStore_assertThisInitialized(_this)),

        /*-------------------上面的部分------------------*/
        //模板
        getMeta: _this.getMeta.bind(EditTableStore_assertThisInitialized(_this)),
        setMeta: _this.setMeta.bind(EditTableStore_assertThisInitialized(_this)),
        getViewMeta: _this.getViewMeta.bind(EditTableStore_assertThisInitialized(_this)),
        getArrayMeta: _this.getArrayMeta.bind(EditTableStore_assertThisInitialized(_this)),
        getColumn: _this.getColumn.bind(EditTableStore_assertThisInitialized(_this)),
        setColumn: _this.setColumn.bind(EditTableStore_assertThisInitialized(_this)),
        // 也可以考虑加两个批操作
        // 缓存
        getCache: _this.getCache.bind(EditTableStore_assertThisInitialized(_this)),
        setCache: _this.setCache.bind(EditTableStore_assertThisInitialized(_this)),
        // 行
        getTrueRowIndex: _this.getTrueRowIndex.bind(EditTableStore_assertThisInitialized(_this)),
        getRows: _this.getRows.bind(EditTableStore_assertThisInitialized(_this)),
        setRows: _this.setRows.bind(EditTableStore_assertThisInitialized(_this)),
        setRowProps: _this.setRowProps.bind(EditTableStore_assertThisInitialized(_this)),
        getRowProps: _this.getRowProps.bind(EditTableStore_assertThisInitialized(_this)),
        setRowsProps: _this.setRowsProps.bind(EditTableStore_assertThisInitialized(_this)),
        setRowsCellPropsByKey: _this.setRowsCellPropsByKey.bind(EditTableStore_assertThisInitialized(_this)),
        setRowsCellPropsByIndex: _this.setRowsCellPropsByIndex.bind(EditTableStore_assertThisInitialized(_this)),
        insertRowsAfterIndex: _this.insertRowsAfterIndex.bind(EditTableStore_assertThisInitialized(_this)),
        moveRow: _this.moveRow.bind(EditTableStore_assertThisInitialized(_this)),
        // 这些方法  可以考虑去除了 用getRows + filter 或者 getViewData + filter 实现
        removeEmptyRows: _this.removeEmptyRows.bind(EditTableStore_assertThisInitialized(_this)),
        hasSelected: _this.hasSelected.bind(EditTableStore_assertThisInitialized(_this)),
        setSelectedIndex: _this.setSelectedIndex.bind(EditTableStore_assertThisInitialized(_this)),
        // 单元格
        getCellProps: _this.getCellProps.bind(EditTableStore_assertThisInitialized(_this)),
        setCellProps: _this.setCellProps.bind(EditTableStore_assertThisInitialized(_this)),
        setCellValue: _this.setCellValue.bind(EditTableStore_assertThisInitialized(_this)),
        getCellValue: _this.getCellValue.bind(EditTableStore_assertThisInitialized(_this)),
        setCellsProps: _this.setCellsProps.bind(EditTableStore_assertThisInitialized(_this)),
        // 不可取两个批操作 getCells  setCells  参数为二维数组
        // 表格
        formatData: _this.formatData.bind(EditTableStore_assertThisInitialized(_this)),
        getTableProps: _this.getTableProps.bind(EditTableStore_assertThisInitialized(_this)),
        setTableProps: _this.setTableProps.bind(EditTableStore_assertThisInitialized(_this)),
        setData: _this.setData.bind(EditTableStore_assertThisInitialized(_this)),
        getData: _this.getData.bind(EditTableStore_assertThisInitialized(_this)),
        getViewData: _this.getViewData.bind(EditTableStore_assertThisInitialized(_this)),
        // 业务
        setRowPosition: _this.setRowPosition.bind(EditTableStore_assertThisInitialized(_this)),
        saveRowOldValue: _this.saveRowOldValue.bind(EditTableStore_assertThisInitialized(_this)),
        getRowOldValue: _this.getRowOldValue.bind(EditTableStore_assertThisInitialized(_this)),
        deleteRowOldValue: _this.deleteRowOldValue.bind(EditTableStore_assertThisInitialized(_this)),
        saveRowsOldValue: _this.saveRowsOldValue.bind(EditTableStore_assertThisInitialized(_this)),
        clearRowsOldValue: _this._clearRowsOldValue.bind(EditTableStore_assertThisInitialized(_this)),
        getAllRows: _this.getAllRows.bind(EditTableStore_assertThisInitialized(_this)),
        getVisibleRows: _this.getVisibleRows.bind(EditTableStore_assertThisInitialized(_this)),
        getChangedRows: _this.getChangedRows.bind(EditTableStore_assertThisInitialized(_this)),
        addTableRow: _this.addTableRow.bind(EditTableStore_assertThisInitialized(_this)),
        deleteTableRows: _this.deleteTableRows.bind(EditTableStore_assertThisInitialized(_this)),
        setValByKeyAndIndex: _this.setValByKeyAndIndex.bind(EditTableStore_assertThisInitialized(_this)),
        setValByKeyAndRowId: _this.setValByKeyAndRowId.bind(EditTableStore_assertThisInitialized(_this)),
        updateTableData: _this.updateTableData.bind(EditTableStore_assertThisInitialized(_this)),
        updateTableDataByIndexs: _this.updateTableDataByIndexs.bind(EditTableStore_assertThisInitialized(_this)),
        updateTableDataByRowId: _this.updateTableDataByRowId.bind(EditTableStore_assertThisInitialized(_this)),
        setTableData: _this.setTableData.bind(EditTableStore_assertThisInitialized(_this)),
        setTableStatus: _this.setTableStatus.bind(EditTableStore_assertThisInitialized(_this)),
        getValByKeyAndIndex: _this.getValByKeyAndIndex.bind(EditTableStore_assertThisInitialized(_this)),
        getValByKeyAndRowKey: _this.getValByKeyAndRowKey.bind(EditTableStore_assertThisInitialized(_this)),
        pasteRow: _this.pasteRow.bind(EditTableStore_assertThisInitialized(_this)),
        getSelectedRows: _this.getSelectedRows.bind(EditTableStore_assertThisInitialized(_this)),
        setRowsSelected: _this.setRowsSelected.bind(EditTableStore_assertThisInitialized(_this)),
        setRowsSelectedByIndexs: _this.setRowsSelectedByIndexs.bind(EditTableStore_assertThisInitialized(_this)),
        setRowsSelectedByRowKey: _this.setRowsSelectedByRowKey.bind(EditTableStore_assertThisInitialized(_this)),
        setAllRowsSelected: _this.setAllRowsSelected.bind(EditTableStore_assertThisInitialized(_this)),
        reverseRowsSelected: _this.reverseRowsSelected.bind(EditTableStore_assertThisInitialized(_this)),
        getAllRowsRemoveKeys: _this.getAllRowsRemoveKeys.bind(EditTableStore_assertThisInitialized(_this)),
        getFilterRows: _this.getFilterRows.bind(EditTableStore_assertThisInitialized(_this)),
        setFiltrateTableData: _this.setFiltrateTableData.bind(EditTableStore_assertThisInitialized(_this)),
        batchChangeTableData: _this.batchChangeTableData.bind(EditTableStore_assertThisInitialized(_this)),
        insertDataByIndexs: _this.insertDataByIndexs.bind(EditTableStore_assertThisInitialized(_this)),
        setRowStatusByIndexs: _this.setRowStatusByIndexs.bind(EditTableStore_assertThisInitialized(_this)),
        setRowsCellValue: _this.setRowsCellValue.bind(EditTableStore_assertThisInitialized(_this)),
        updateRows: _this.updateRows.bind(EditTableStore_assertThisInitialized(_this)),
        updateRowsProps: _this.updateRowsProps.bind(EditTableStore_assertThisInitialized(_this)),
        resetTableCaches: _this.resetTableCaches.bind(EditTableStore_assertThisInitialized(_this)),
        // 高阶组件
        getCheckInfo: _this.getCheckInfo.bind(EditTableStore_assertThisInitialized(_this)),
        setCheckInfo: _this.setCheckInfo.bind(EditTableStore_assertThisInitialized(_this)),
        // 聚焦
        focusItem: _this.focusItem.bind(EditTableStore_assertThisInitialized(_this)),
        // 工具
        generateRowKey: _this.generateRowKey,
        //liuming 跨页选择
        setCrossPage: _this.setCrossPage,
        getConfig: _this.getConfig,
        setConfig: _this.setConfig,
        _setSelect: _this._setSelect,
        _updateAndAddRows: _this._updateAndAddRows,
        //liuming excel
        updateAfterBatchChange: _this.updateAfterBatchChange
      };
    };

    _this.name = "PublicStore";
    _this.refresh = _this.refresh.bind(EditTableStore_assertThisInitialized(_this));
    return _this;
  } // 数据源


  EditTableStore_createClass(Store, [{
    key: "getStore",

    /**
     * @description: 复写
     * @param {type}
     * @return:
     */
    value: function getStore(paths) {
      return _get(EditTableStore_getPrototypeOf(Store.prototype), "get", this).call(this, paths);
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

      var res = _get(EditTableStore_getPrototypeOf(Store.prototype), "set", this).call(this, paths, value);

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

      if (!Object(utils["isArray"])(path)) {
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
      if (Object(utils["isUndefined"])(paths)) {
        console.warn("invalid params <paths> to setting");
        return;
      }

      if (!Object(utils["isArray"])(paths)) {
        paths = [paths];
      }

      var current = this.cache;
      paths.some(function (item) {
        if (Object(utils["isUndefined"])(item) || Object(utils["isNullOrVoid"])(current)) {
          Object(utils["isUndefined"])(item) && console.warn("paths has empty item[%s]", paths);
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

      this.setStore(["meta"], new TableMeta(meta), shouldForceUpdate); // console.log(this._setColInitialValue);
      // 设置列里面的初始值  如果这时候 没有name 则下面在获取初始值是需要重新计算

      this._setColInitialValue();
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

      if (!id || !Object(utils["isObject"])(meta[id]) || !meta[id].items) {
        return null;
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
      var viewMeta = this._hasMeta(id); // getTreeData


      viewMeta = viewMeta && Object(utils["isFunction"])(viewMeta.get) ? viewMeta.get() : []; // console.log(viewMeta);

      return viewMeta;
    }
    /**
     * filterParentColumn 代表是否去除父级元素
     * @description: 获取id所在视图的meta
     * @param {type}
     * @return:
     */

  }, {
    key: "getArrayMeta",
    value: function getArrayMeta(id) {
      var filterParentColumn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (Object(utils["isUndefined"])(id)) {
        id = this.getStore("name");
        !id && console.warn("not find current meta name");
      }

      var viewMeta = this._hasMeta(id);

      if (viewMeta && !viewMeta.getArrayData) {
        console.warn('viewMeta not init, please setMeta');
      } // getArrayData


      viewMeta = viewMeta ? viewMeta.getArrayData ? viewMeta.getArrayData() : viewMeta : []; // console.log(viewMeta);

      return viewMeta.filter(function (item) {
        var children = item.children;
        var condition = !children || !(filterParentColumn && Object(utils["isArray"])(children) && children.length >= 0);
        return condition;
      });
    }
    /**
     * @description: 获取列字段属性
     * @param {type}
     * @return:
     */

  }, {
    key: "getColumn",
    value: function getColumn(id, code) {
      var viewMeta = this._hasMeta(id);

      if (!viewMeta) {
        console.warn("can't find meta id, please check meta & id", id);
        return {};
      }

      var item = viewMeta.query(code);
      !item && console.warn("can't find code, please check meta & id", viewMeta, code);
      return item || {};
    }
    /**
     * @description: 设置列数据
     * @param column: { [attrcode]: { visible: false } }
     * @return:
     */

  }, {
    key: "setColumn",
    value: function setColumn(id) {
      var column = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var pattern = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "merge";

      for (var attrcode in column) {
        var item = this.getColumn(id, attrcode);
        var value = column[attrcode];

        if (pattern === "merge") {
          // TODO 合并数据
          for (var key in value) {
            item[key] = value[key];
          }
        } else {
          // TODO: 替换数据
          item = value;
        }
      }

      shouldForceUpdate && this.forceUpdate();
    }
    /**
     * 生成列的初始值
     * @description:
     * @param {type}
     * @return:
     */

  }, {
    key: "_generateColInitialValue",
    value: function _generateColInitialValue() {
      var _this2 = this;

      var values = {};
      var name = this.getStore("name");
      var allMeta = this.getMeta();
      var tabRelation = allMeta.gridrelation && allMeta.gridrelation[name] && allMeta.gridrelation[name].tabRelation;

      if (Object(utils["isArray"])(tabRelation)) {
        tabRelation.forEach(function (itemCode) {
          // 这里有个隐患  可能获取不到对应code的meta
          _this2._generateItemValue(itemCode, values);
        });
      } else {
        this._generateItemValue(name, values);
      } // console.log('初始值 ', values);


      return JSON.parse(JSON.stringify(values));
    }
  }, {
    key: "_generateItemValue",
    value: function _generateItemValue(itemCode, values) {
      var meta = this.getArrayMeta(itemCode);

      if (!meta.length) {
        console.warn("meta is empty array");
      }

      meta.forEach(function (item) {
        if (!item.children) {
          // 有children 说明是父级节点
          // 不进行else判断 为了避免下面校验时   不存在合并行字段报错
          var defaultCreator = Object(index_["itemCreator"])({
            itemtype: item.itemtype
          }) || {}; // console.log(defaultCreator);
          // console.log(defaultCreator.defaultValue);
          // TODO:

          values[item.attrcode] = EditTableStore_objectSpread(EditTableStore_objectSpread({
            scale: null,
            display: "",
            value: ""
          }, defaultCreator.defaultValue || {}), item.initialvalue || {});
        }
      });
    }
    /**
     * @description: 更新设置列的默认值
     * @param {type}
     * @return:
     */

  }, {
    key: "_setColInitialValue",
    value: function _setColInitialValue() {
      var values = this._generateColInitialValue();

      this.setCache("colInitialValue", values); // console.log(this);
    }
    /**
     * @description: 获取列的默认值
     * @param {type}
     * @return:
     */

  }, {
    key: "_getColInitialValue",
    value: function _getColInitialValue() {
      var values = this.getCache("colInitialValue");

      if (!values || !Object.keys(values).length) {
        values = this._generateColInitialValue();
        this.setCache("colInitialValue", values);
      }

      return JSON.parse(JSON.stringify(values));
    }
    /*-------------单元格-------------*/

    /**
     * @description: 获取单元格values
     * @param {type}
     * @return:
     */

  }, {
    key: "_getCellValue",
    value: function _getCellValue() {
      var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var attrcode = arguments.length > 1 ? arguments[1] : undefined;
      return (row["values"] || {})[attrcode] || {};
    }
    /**
     * @description: 设置单元格values
     * @param {type}
     * @return:
     */

  }, {
    key: "_setCellValue",
    value: function _setCellValue(row, attrcode, value) {
      row["values"] = row["values"] || {};
      return row["values"][attrcode] = value;
    }
    /**
     * rowIndex 可视数据index
     * @description: 设置单元格数据
     * @param {type}
     * @return:
     */

  }, {
    key: "setCellValue",
    value: function setCellValue() {
      var _this3 = this;

      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          rowIndex = _ref2.rowIndex,
          rowKeyValue = _ref2.rowKeyValue,
          attrcode = _ref2.attrcode,
          _ref2$value = _ref2.value,
          value = _ref2$value === void 0 ? {} : _ref2$value,
          _ref2$pattern = _ref2.pattern,
          pattern = _ref2$pattern === void 0 ? "merge" : _ref2$pattern,
          _ref2$shouldForceUpda = _ref2.shouldForceUpdate,
          shouldForceUpdate = _ref2$shouldForceUpda === void 0 ? true : _ref2$shouldForceUpda,
          callback = _ref2.callback;

      if (!rowKeyValue && rowIndex === -1) {
        console.warn("rowIndex is -1");
        return;
      } // console.log(this.itemGraph);
      // 获取真实的rowIndex


      !rowKeyValue && (rowKeyValue = this._getRowKeyValue({
        rowIndex: rowIndex
      }));
      var data = this.getStore("data");

      if (!data.query(rowKeyValue || rowIndex)) {
        return console.warn('not find row data!');
      }

      var row = data.update(rowKeyValue || rowIndex, function (oldRow) {
        var props = _this3._getCellValue(oldRow, attrcode);

        if (pattern == "merge") {
          value = EditTableStore_objectSpread(EditTableStore_objectSpread({}, props), value);
        } // 一旦设置 清理掉 validated


        callback && callback(props, value, rowKeyValue, attrcode); // TODO:

        if (!callback && props && value.validated === false && (Object(utils["isWrong"])(props.value) && !Object(utils["isWrong"])(value.value) || Object(utils["isWrong"])(props.display) && !Object(utils["isWrong"])(props.display))) {
          delete value.validated;
        } // console.log(value);


        _this3._setCellValue(oldRow, attrcode, value);

        return oldRow;
      });
      shouldForceUpdate && this.updateItem([rowKeyValue, attrcode]);
      shouldForceUpdate && this.updateItem([rowKeyValue, 'sp_col_customer__']); // shouldForceUpdate && this.forceUpdate();

      return row;
    }
    /**
     * rowIndex 可视数据index
     * @description: 获取单元格数据
     * @param {type}
     * @return:
     */

  }, {
    key: "getCellValue",
    value: function getCellValue() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          rowIndex = _ref3.rowIndex,
          rowKeyValue = _ref3.rowKeyValue,
          attrcode = _ref3.attrcode;

      if (!rowKeyValue && rowIndex === -1) {
        console.warn("rowIndex is -1");
        return;
      } // 获取真实的rowIndex


      !rowKeyValue && (rowKeyValue = this._getRowKeyValue({
        rowIndex: rowIndex
      }));
      var row = this.getStore("data").query(rowKeyValue || rowIndex);
      return this._getCellValue(row, attrcode);
    }
    /**
     * rowIndex 可视数据index
     * @description: 设置单元格属性
     * @param {type}
     * @return:
     */

  }, {
    key: "setCellProps",
    value: function setCellProps(rowKeyValue, attrcode) {
      var _this4 = this;

      var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var shouldForceUpdate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var pattern = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "merge";

      if (Object(utils["isUndefined"])(rowKeyValue)) {
        console.warn("invalid params");
        return;
      } // rowKeyValue = this._getRowKeyValue({ rowKeyValue });
      // get(this.valueGraph, [rowKeyValue, attrcode]).forceUpdate();


      var data = this.getStore("data");

      if (!data.query(rowKeyValue)) {
        return console.warn('not find row data!');
      }

      var row = data.update(rowKeyValue, function (oldRow) {
        var props = _this4._getCellValue(oldRow, attrcode);

        if (pattern == "merge") {
          value = EditTableStore_objectSpread(EditTableStore_objectSpread({}, props), value);
        } // console.log(value);


        _this4._setCellValue(oldRow, attrcode, value);

        return oldRow;
      });
      shouldForceUpdate && this.forceUpdate(); // 这里需要优化
      // shouldForceUpdate && this.updateItem([rowKeyValue, attrcode]);
      // shouldForceUpdate && this.updateItem([rowKeyValue, 'sp_col_customer__']);

      return row;
    }
    /**
     * rowIndex 可视数据index
     * @description: 获取单元格属性
     * @param {type}
     * @return:
     */

  }, {
    key: "getCellProps",
    value: function getCellProps() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          rowIndex = _ref4.rowIndex,
          attrcode = _ref4.attrcode,
          rowKeyValue = _ref4.rowKeyValue;

      if (!rowKeyValue && rowIndex === -1) {
        console.warn("rowIndex is -1");
        return;
      } // 获取真实的rowIndex


      !rowKeyValue && (rowKeyValue = this._getRowKeyValue({
        rowIndex: rowIndex
      }));
      var row = this.getStore("data").query(rowKeyValue || rowIndex);
      return this._getCellValue(row, attrcode);
    }
    /*-------------行-------------*/

    /**
     * TODO 看看能不能优化下
     * 获取真实的rowIndex  不建议频繁使用
     * view 目前有 normal sort delete filter
     * @description: 获取行的index
     * @param {type}
     * @return:
     */

  }, {
    key: "getTrueRowIndex",
    value: function getTrueRowIndex() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          rowKeyValue = _ref5.rowKeyValue,
          rowIndex = _ref5.rowIndex;

      var view = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "normal";

      if (Object(utils["isUndefined"])(rowKeyValue) && Object(utils["isUndefined"])(rowIndex)) {
        console.warn("invalid params");
        return -1;
      }

      var rowKey = this.getTableProps("rowKey");
      var data = this.getStore("data");
      var len = data.length; // 只传index 的情况

      if (Object(utils["isUndefined"])(rowKeyValue)) {
        var row = this.getViewData(view)[rowIndex];

        if (!row) {
          console.warn("not find row, maybe row overflow");
          return -1;
        }

        rowKeyValue = row[rowKey];
      } // 可以some 优化下


      data.some(function (item, index) {
        if (item[rowKey] === rowKeyValue) {
          rowIndex = index;
        }

        return item[rowKey] === rowKeyValue;
      });
      rowIndex = rowIndex >= 0 && rowIndex < len ? rowIndex : -1;
      rowIndex === -1 && console.warn("rowIndex 为 -1，可能会导致后面报错");
      return rowIndex;
    }
    /**
     * @description: 获取行的index
     * @param {type}
     * @return:
     */

  }, {
    key: "_getRowKeyValue",
    value: function _getRowKeyValue(_ref6) {
      var rowKeyValue = _ref6.rowKeyValue,
          rowIndex = _ref6.rowIndex;

      if (Object(utils["isUndefined"])(rowKeyValue) && Object(utils["isUndefined"])(rowIndex)) {
        console.warn("invalid params _getRowKeyValue");
        return;
      } // 检测 rowKeyValue


      if (rowKeyValue) {
        return rowKeyValue;
      }

      var rowKey = this.getTableProps("rowKey");
      var viewData = this.getViewData();
      var len = viewData.length;
      var row = viewData[rowIndex];

      if (row && row[rowKey]) {
        rowKeyValue = row[rowKey];
      } else {
        console.warn("rowIndex overflow rowIndex: %s, len: %s", rowKeyValue, len);
      }

      return rowKeyValue;
    }
    /**
     * 如果rowKeyValues里有数字  则转换一下
     * @description: 获取行的rowKeyValues
     * @param {type}
     * @return:
     */

  }, {
    key: "_getRowKeyValues",
    value: function _getRowKeyValues(_ref7) {
      var rowKeyValues = _ref7.rowKeyValues,
          rowIndexs = _ref7.rowIndexs,
          _ref7$defaultAll = _ref7.defaultAll,
          defaultAll = _ref7$defaultAll === void 0 ? false : _ref7$defaultAll;

      if (Object(utils["isUndefined"])(rowKeyValues) && Object(utils["isUndefined"])(rowIndexs)) {
        !defaultAll && console.warn("invalid params ".concat(rowKeyValues));

        if (defaultAll) {
          var data = this.getStore("data");

          var _rowKey = this.getTableProps("rowKey"); // data.getKeys()


          return data.order || data.map(function (row) {
            return row[_rowKey];
          });
        }

        return [];
      } // 检测 rowKeyValues 的类型


      if (rowKeyValues) {
        // 转数组
        rowKeyValues = Object(utils["isArray"])(rowKeyValues) ? rowKeyValues : [rowKeyValues];
        return rowKeyValues;
      } // 转数组


      rowIndexs = Object(utils["isArray"])(rowIndexs) ? rowIndexs : [rowIndexs];
      var viewData = this.getViewData();
      var rowKey = this.getTableProps("rowKey");
      var len = viewData.length;
      var finalRowKeyValues = []; // 避免外部没判断报错

      rowIndexs.forEach(function (rowIndex) {
        var row = viewData[rowIndex];

        if (row && row[rowKey]) {
          finalRowKeyValues.push(row[rowKey]);
        } else {
          console.warn("rowIndex overflow rowIndex: %d, len: %d", rowIndex, len);
        }
      }); // console.log("rowKeyValues", finalRowKeyValues);

      return finalRowKeyValues || [];
    }
    /**
     * rowIndex 可视数据index
     * @description: 获取行属性
     * @param {type}
     * @return:
     */

  }, {
    key: "getRowProps",
    value: function getRowProps(_ref8, name) {
      var rowKeyValue = _ref8.rowKeyValue,
          rowIndex = _ref8.rowIndex;
      // 获取 rowKeyValue
      rowKeyValue = this._getRowKeyValue({
        rowKeyValue: rowKeyValue,
        rowIndex: rowIndex
      });
      var data = this.getStore("data"),
          row = data.query(rowKeyValue);
      return row[name];
    }
    /**
     * rowKeyValue 可以是 index 也可以是 key
     * @description: 设置行属性
     * @param {type}
     * @return:
     */

  }, {
    key: "setRowProps",
    value: function setRowProps() {
      var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          rowKeyValue = _ref9.rowKeyValue,
          rowIndex = _ref9.rowIndex;

      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var pattern = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "merge";
      // 获取rowKeyValue
      rowKeyValue = this._getRowKeyValue({
        rowKeyValue: rowKeyValue,
        rowIndex: rowIndex
      });
      var data = this.getStore("data");
      data.update(rowKeyValue, function (oldRow) {
        oldRow = Object.assign({}, oldRow, value);
        return oldRow;
      });
      shouldForceUpdate && this.forceUpdate();
    }
    /**
     * 这个方法和上面一个是否合并为一个 要考虑下
     * rowKeyValues 可以是 index 也可以是 key
     * @description: 设置行属性
     * @param {type}
     * @return:
     */

  }, {
    key: "setRowsProps",
    value: function setRowsProps() {
      var _this5 = this;

      var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          rowKeyValues = _ref10.rowKeyValues,
          rowIndexs = _ref10.rowIndexs,
          _ref10$defaultAll = _ref10.defaultAll,
          defaultAll = _ref10$defaultAll === void 0 ? true : _ref10$defaultAll;

      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      // 获取rowKeyValue
      rowKeyValues = this._getRowKeyValues({
        rowKeyValues: rowKeyValues,
        rowIndexs: rowIndexs,
        defaultAll: defaultAll
      });
      rowKeyValues.forEach(function (rowKeyValue) {
        _this5.setRowProps({
          rowKeyValue: rowKeyValue
        }, value, false);
      });
      shouldForceUpdate && this.forceUpdate();
    }
    /**
     * @description: 设置行属性
     * @param {type}
     * @return:
     */

  }, {
    key: "setRowsCellPropsByKey",
    value: function setRowsCellPropsByKey(rowKeyValues) {
      var _this6 = this;

      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var defaultAll = arguments.length > 3 ? arguments[3] : undefined;
      rowKeyValues = this._getRowKeyValues({
        rowKeyValues: rowKeyValues,
        defaultAll: defaultAll
      });
      rowKeyValues.forEach(function (rowKeyValue) {
        var data = _this6.getStore("data"),
            row = data.query(rowKeyValue);

        if (Object(utils["isObject"])(row)) {
          // Update
          for (var attrcode in row.values) {
            _this6.setCellProps(rowKeyValue, attrcode, value, false);
          }
        } else {
          console.warn("can't find row data", rowKeyValue);
        }
      });
      shouldForceUpdate && this.forceUpdate();
    }
    /**
     * @description: 设置行属性
     * @param {type}
     * @return:
     */

  }, {
    key: "setRowsCellPropsByIndex",
    value: function setRowsCellPropsByIndex(rowIndexs) {
      var _this7 = this;

      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var defaultAll = arguments.length > 3 ? arguments[3] : undefined;

      // 获取rowKeyValue
      var rowKeyValues = this._getRowKeyValues({
        rowIndexs: rowIndexs,
        defaultAll: defaultAll
      });

      rowKeyValues.forEach(function (rowKeyValue) {
        var data = _this7.getStore("data"),
            row = data.query(rowKeyValue);

        if (Object(utils["isObject"])(row)) {
          // Update
          for (var attrcode in row.values) {
            _this7.setCellProps(rowKeyValue, attrcode, value, false);
          }
        } else {
          console.warn("can't find row data", rowKeyValue);
        }
      });
      shouldForceUpdate && this.forceUpdate();
    }
    /**
     * @description: 根据规则来获取数据
     * // 可以设计为字符串或者数组
     * @param {rule: '!disabled && !selected || value > 1' }
     * @return:
     */

  }, {
    key: "_getDataByRules",
    value: function _getDataByRules(data) {
      // TODO 规则解析
      return data;
    }
    /**
     * rowIndexs 是当前视图的
     * @description: 获取多行的数据
       * @return: 
     */

  }, {
    key: "getRows",
    value: function getRows() {
      var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          rowIndexs = _ref11.rowIndexs,
          rowKeyValues = _ref11.rowKeyValues,
          filter = _ref11.filter;

      var data = this.getStore("data"),
          rows = [];

      if (filter) {
        return this._getDataByRules(data, filter);
      } // 获取rowKeyValues


      rowKeyValues = this._getRowKeyValues({
        rowKeyValues: rowKeyValues,
        rowIndexs: rowIndexs
      });
      (rowKeyValues || rowIndexs || []).forEach(function (item) {
        var row = data.query(item);
        !row && console.warn("not find row data");
        rows.push(row);
      });
      return rows;
    }
    /**
     * rowIndex 是当前视图的
     * @description: 设置行数据  主要用于更新
     * @param {type}
     * @return:
     */

  }, {
    key: "setRows",
    value: function setRows() {
      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref12$rows = _ref12.rows,
          rows = _ref12$rows === void 0 ? [] : _ref12$rows,
          _ref12$shouldForceUpd = _ref12.shouldForceUpdate,
          shouldForceUpdate = _ref12$shouldForceUpd === void 0 ? true : _ref12$shouldForceUpd;

      var rowKey = this.getTableProps("rowKey");
      var data = this.getStore("data"); // 更新不需要默认值
      // let initialValue = this._getColInitialValue();

      var newRows = [];
      rows.forEach(function (item) {
        var rowKeyValue = item[rowKey],
            row = data.query(item[rowKey]);

        if (Object(utils["isObject"])(row)) {
          data.update(rowKeyValue, function (oldRow) {
            //  Update values status ==
            var values = Object.assign({}, // 合并里面的状态
            oldRow.values || {}, // 合并默认值
            item.values || {}); // 深度合并拷贝一下 (先合并 values层  再合并values内部)

            for (var key in values) {
              values[key] = values[key] || {};
              values[key] = Object.assign({}, // 合并默认状态
              (oldRow.values || {})[key], // 合并默认值  实际上应该从itemCreate中取出默认值  这里可以偷个懒
              {
                display: !Object(utils["isUndefined"])(values[key].display) ? values[key].display : null,
                value: !Object(utils["isUndefined"])(values[key].value) ? values[key].value : null,
                scale: !Object(utils["isUndefined"])(values[key].scale) ? values[key].scale : -1
              } // values[key],
              ); // TODO 清除 错误状态

              if (values[key].validated === false && !Object(utils["isWrong"])(values[key].value || values[key].display)) {
                delete values[key].validated;
                delete oldRow.values[key].validated;
              }
            } // 合并状态等其他属性


            oldRow = Object.assign({}, oldRow, item || {}); // 赋值

            oldRow.values = values; // for (let key in oldRow) {
            //     if (isObject(oldRow[key])) {
            //         oldRow[key] = Object.assign({}, oldRow[key], item[key] || {});
            //     } else {
            //         oldRow[key] = item[key];
            //     }
            // }

            var newRow = JSON.parse(JSON.stringify(oldRow));
            newRows.push(newRow);
            return newRow;
          });
        } else {
          console.warn("can't find row data", rowKey);
        }
      });
      shouldForceUpdate && this.forceUpdate();
      return newRows;
    }
    /**
     * @description: 移动行
     * @param {type}
     * @return {type}
     */

  }, {
    key: "moveRow",
    value: function moveRow(current, next) {
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var data = this.getStore("data");

      if (Object(utils["isUndefined"])(current) || Object(utils["isUndefined"])(next) || current === next || current < 0 || next > data.length) {
        return console.warn("invalid index");
      } // 交换数据索引


      var rows = this.getViewData("filter");
      var rowKey = this.getTableProps("rowKey");
      var start = rows[current];
      var end = rows[next]; // 重新计算索引

      data.forEach(function (row, index) {
        if (start && start[rowKey] === row[rowKey]) {
          current = index;
        }

        if (end && end[rowKey] === row[rowKey]) {
          next = index;
        }
      });
      data[next] = start;
      data[current] = end;
      this.setData({
        data: data,
        shouldForceUpdate: shouldForceUpdate
      });
    }
    /**
     * @description: 给行换个索引
     * @param {type}
     * @return {type}
     */

  }, {
    key: "setRowPosition",
    value: function setRowPosition(indexStart, position) {
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      // 交换数据索引
      var rows = this.getViewData("filter");

      if (indexStart < 0 || Object(utils["isUndefined"])(indexStart) || indexStart > rows.length) {
        return console.warn("invalid index");
      }

      indexStart = this.getTrueRowIndex({
        rowIndex: indexStart
      }, "filter");
      var data = this.getStore("data"); // 更新位置

      if (position === "up") {
        var delItem = data.splice(indexStart, 1);
        data.unshift(delItem[0]);
      } else if (position === "down") {
        var _delItem = data.splice(indexStart, 1);

        data.push(_delItem[0]);
      }

      this.setData({
        data: data,
        shouldForceUpdate: shouldForceUpdate
      });
    }
    /**
     * rowKeyValue
     * @description: 是否选中行
     * @param {type}
     * @return:
     */

  }, {
    key: "hasSelected",
    value: function hasSelected(rowKeyValue) {
      // 获取 rowKeyValue
      rowKeyValue = this._getRowKeyValue({
        rowKeyValue: rowKeyValue
      });
      var selectedIndex = this.getStore(["selectedIndex"]);
      return selectedIndex.has(rowKeyValue);
    }
    /**
     * value 里放的是rowKeyValue
     * @description: 设置选中行
     * @param {type}
     * @return:
     */

  }, {
    key: "setSelectedIndex",
    value: function setSelectedIndex(value) {
      var _this8 = this;

      var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "add";
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var selectedIndex = this.getStore(["selectedIndex"]);

      if (pattern === "clear") {
        selectedIndex.clear();
        this.setTableProps("focusIndex", -1, false);
      } // 值的转换


      value = Object(utils["isArray"])(value) ? value : [Object(utils["isObject"])(value) ? value : {
        rowKeyValue: value
      }];
      value.forEach(function (item) {
        var rowKeyValue = item.rowKeyValue,
            rowIndex = item.rowIndex,
            _item$pattern = item.pattern,
            pattern = _item$pattern === void 0 ? "add" : _item$pattern; // 值的转换

        rowKeyValue = _this8._getRowKeyValue({
          rowKeyValue: rowKeyValue,
          rowIndex: rowIndex
        });

        if (pattern === "add") {
          selectedIndex.add(rowKeyValue);
        }

        if (pattern === "reverse") {
          selectedIndex.has(rowKeyValue) ? selectedIndex["delete"](rowKeyValue) : selectedIndex.add(rowKeyValue);
        }

        if (pattern === "delete") {
          selectedIndex["delete"](rowKeyValue);
        }
      });
      this.setStore(["selectedIndex"], selectedIndex, shouldForceUpdate);
    }
    /**
     * rowIndex 是真实的index
     * @description: 删除行
     * @param {type}
     * @return:
     */
    // @infoLog

  }, {
    key: "_deleteRow",
    value: function _deleteRow(rowIndex, rowKeyValue, thorough) {
      var data = this.getStore("data"),
          len = data.length;

      if (rowIndex > len || rowIndex < 0) {
        console.warn("rowIndex overflow");
        return;
      }

      var delItem = data[rowIndex];
      var status = delItem.status; // status != ROW_STATUS.delete 要剔除 假删除 否则 连续两次假删除 就会真删除

      if (thorough || status != EditTableStore_ROW_STATUS["delete"] && status != EditTableStore_ROW_STATUS.origin && status != EditTableStore_ROW_STATUS.edit) {
        // 彻底删除
        delItem = data.splice(rowIndex, 1);
      } else {
        this.setRowProps({
          rowKeyValue: rowKeyValue
        }, {
          status: EditTableStore_ROW_STATUS["delete"]
        }, false);
      }

      return delItem;
    }
    /**
     * rowIndex 可视数据index
     * 增行是否要扩展一个参数 可以插入到某个行之前 ？
     * 可以考虑扩展为 插入行
     * 插入行 没有取到index  不进行插入  增行 没有取到 默认最后
     * @description: 新增行
     * @param {type}
     * @return:
     */
    // @infoLog

  }, {
    key: "_insertRow",
    value: function _insertRow(_ref13) {
      var _newRow;

      var _ref13$rowValues = _ref13.rowValues,
          rowValues = _ref13$rowValues === void 0 ? {} : _ref13$rowValues,
          rowIndex = _ref13.rowIndex,
          _ref13$shouldForceUpd = _ref13.shouldForceUpdate,
          shouldForceUpdate = _ref13$shouldForceUpd === void 0 ? true : _ref13$shouldForceUpd,
          _ref13$type = _ref13.type,
          type = _ref13$type === void 0 ? "insert" : _ref13$type,
          _ref13$isMergeInitVal = _ref13.isMergeInitValue,
          isMergeInitValue = _ref13$isMergeInitVal === void 0 ? true : _ref13$isMergeInitVal,
          callback = _ref13.callback;
      // 这个方法比较特殊
      !Object(utils["isUndefined"])(rowIndex) && (rowIndex = this.getTrueRowIndex({
        rowIndex: rowIndex
      }));
      var data = this.getStore("data"),
          len = data.length,
          initialValue = isMergeInitValue ? this._getColInitialValue() : {};
      var rowKey = this.getTableProps("rowKey"); // 合并数据哟  深度合并 一些不规范的值  做下转换

      Object.keys(rowValues).forEach(function (key) {
        var oldValue = Object(utils["isObject"])(rowValues[key]) ? rowValues[key] : {};
        var newValue = {}; // 清理oldValue里乱七八糟的状态

        !Object(utils["isUndefined"])(oldValue.display) && (newValue.display = oldValue.display);
        !Object(utils["isUndefined"])(oldValue.value) && (newValue.value = oldValue.value);
        !Object(utils["isUndefined"])(oldValue.scale) && (newValue.scale = oldValue.scale);
        !Object(utils["isUndefined"])(oldValue.isEdit) && (newValue.isEdit = oldValue.isEdit); // 清理一下原来行数据里的状态

        initialValue[key] = EditTableStore_objectSpread(EditTableStore_objectSpread({}, initialValue[key]), newValue);
      }); // TODO 对默认值和checkbox_switch勾选框值转化的操作
      // 插入行 没有取到index  不进行插入  增行 没有取到 默认最后

      if (type === "insert" && (Object(utils["isUndefined"])(rowIndex) || rowIndex == -1)) {
        rowIndex = len;
      }

      if (type === "add" && (Object(utils["isUndefined"])(rowIndex) || rowIndex == -1)) {
        rowIndex = len;
      }

      var newRow = (_newRow = {}, EditTableStore_defineProperty(_newRow, rowKey, this.generateRowKey()), EditTableStore_defineProperty(_newRow, "status", EditTableStore_ROW_STATUS.add), EditTableStore_defineProperty(_newRow, "values", initialValue), _newRow); // 新增行

      data.splice(rowIndex, 0, newRow);
      shouldForceUpdate && this.forceUpdate(callback);
      return newRow;
    }
    /**
     * @description: 插入行
     * @param {type}
     * @return {type}
     */

  }, {
    key: "_insertRows",
    value: function _insertRows(_ref14) {
      var _this9 = this;

      var _ref14$rows = _ref14.rows,
          rows = _ref14$rows === void 0 ? [] : _ref14$rows,
          rowIndex = _ref14.rowIndex,
          isGenerateRowKey = _ref14.isGenerateRowKey,
          _ref14$shouldForceUpd = _ref14.shouldForceUpdate,
          shouldForceUpdate = _ref14$shouldForceUpd === void 0 ? true : _ref14$shouldForceUpd;

      if (!Object(utils["isArray"])(rows)) {
        console.warn("rows params not array");
        rows = [rows];
      } // 这个方法比较特殊


      rowIndex && (rowIndex = this.getTrueRowIndex({
        rowIndex: rowIndex
      }));

      var data = this.getStore("data"),
          len = data.length,
          initialValue = this._getColInitialValue(); // 注意插入最后一行index的情况的判断
      // 没有取插到最后


      if (Object(utils["isUndefined"])(rowIndex) || rowIndex === -1) {
        rowIndex = len;
      } // rowIndex > len ||  // 插入是可以超出界限的


      if (rowIndex > len || rowIndex < 0) {
        console.warn("rowIndex overflow");
        return;
      }

      var rowKey = this.getTableProps("rowKey");
      rows = rows.map(function (row) {
        var _ref15;

        var rowValues = row.values; // 合并数据哟  深度合并 一些不规范的值  做下转换

        Object.keys(rowValues).forEach(function (key) {
          rowValues[key] = EditTableStore_objectSpread(EditTableStore_objectSpread({}, initialValue[key]), Object(utils["isObject"])(rowValues[key]) ? rowValues[key] : {});
        });
        rowValues = EditTableStore_objectSpread(EditTableStore_objectSpread({}, initialValue), rowValues); // TODO 对默认值和checkbox_switch勾选框值转化的操作
        // console.log(initialValue);

        var rowKeyValue = _this9.generateRowKey();

        return _ref15 = {}, EditTableStore_defineProperty(_ref15, rowKey, isGenerateRowKey ? rowKeyValue : row[rowKey] || rowKeyValue), EditTableStore_defineProperty(_ref15, "status", EditTableStore_ROW_STATUS.add), EditTableStore_defineProperty(_ref15, "values", JSON.parse(JSON.stringify(rowValues))), _ref15;
      }); // 变换为编辑态

      this.setTableProps("status", "edit", false); // 新增行

      data.splice.apply(data, [rowIndex, 0].concat(EditTableStore_toConsumableArray(rows))); // 设置 旧值

      this.saveRowsOldValue({
        rows: rows
      });
      shouldForceUpdate && this.forceUpdate();
      return rows;
    }
    /*-------------表格-------------*/

    /**
     * @description: 格式化数据
     * @param {type}
     * @return:
     */

  }, {
    key: "formatData",
    value: function formatData() {
      var _this10 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var rule = arguments.length > 1 ? arguments[1] : undefined;
      var rowKey = this.getTableProps("rowKey");
      data = Object(utils["isArray"])(data) ? data : [data];
      data = data.map(function (item) {
        item[rowKey] = item[rowKey] || _this10.generateRowKey();
        item["status"] = item["status"] || EditTableStore_ROW_STATUS.origin;

        if (rule === 'clearSelect') {
          delete item["selected"];
        }

        return item;
      });
      return data;
    }
    /**
     * @description: 设置数据
     * @param {type}
     * @return:
     */

  }, {
    key: "setData",
    value: function setData(_ref16) {
      var _ref16$data = _ref16.data,
          data = _ref16$data === void 0 ? [] : _ref16$data,
          _ref16$shouldForceUpd = _ref16.shouldForceUpdate,
          shouldForceUpdate = _ref16$shouldForceUpd === void 0 ? true : _ref16$shouldForceUpd,
          callback = _ref16.callback;
      var rowKey = this.getTableProps("rowKey"); // rowid

      var res = Object(utils["isArray"])(data) ? new TableData(data, rowKey) : this.getData(); // console.log(res);
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
      // 添加规则什么的  比如删除 比如过滤 TODO 过滤要考虑不能放在status中  这样会影响原来的业务侧的代码

      data = data.filter(function (item) {
        if (Object(utils["isFunction"])(regexp)) {
          return regexp(item, EditTableStore_ROW_STATUS);
        }

        if (regexp.includes(EditTableStore_ROW_STATUS.filter)) {
          return !regexp.includes(item.status) && !item.filter;
        }

        return !regexp.includes(item.status);
      });
      return data || [];
    }
    /**
     * 目前是简单规则 后面可以想个规则解析器
     * @description: 获取当前视图的data
     * @param {type}
     * @return:
     */

  }, {
    key: "getViewData",
    value: function getViewData() {
      var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "normal";
      var regexp = view;

      if (view === "normal") {
        regexp = [EditTableStore_ROW_STATUS.filter, EditTableStore_ROW_STATUS["delete"]];
      }

      if (view === "filter") {
        regexp = [EditTableStore_ROW_STATUS["delete"]];
      }

      if (view === "all") {
        regexp = [];
      }

      if (view == 'invisible') {
        regexp = [EditTableStore_ROW_STATUS.filter, EditTableStore_ROW_STATUS.origin, EditTableStore_ROW_STATUS.edit, EditTableStore_ROW_STATUS.add];
      }

      var data = this.getData(regexp);
      return data;
    }
    /**
     * @description: 获取表格属性
     * @param {type}
     * @return:
     */

  }, {
    key: "getTableProps",
    value: function getTableProps(key) {
      var props = this.getStore(["props", key]); // console.log(props);

      return props;
    }
    /**
     * @description: 设置表格属性
     * @param {type}
     * @return:
     */

  }, {
    key: "setTableProps",
    value: function setTableProps(key, value) {
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var callback = arguments.length > 3 ? arguments[3] : undefined;
      this.setStore(["props", key], value, shouldForceUpdate, callback);
    }
    /*-------------高阶组件-------------*/

    /**
     * @description: 获取分页信息
     * @param {type}
     * @return:
     */

  }, {
    key: "getPageInfo",
    value: function getPageInfo() {
      // console.log(this.getStore(['pageInfo']));
      return this.getStore(["pageInfo"]);
    }
    /**
     * @description: 設置分页信息
     * @param {type}
     * @return:
     */

  }, {
    key: "setPageInfo",
    value: function setPageInfo(_ref17) {
      var _ref17$shouldForceUpd = _ref17.shouldForceUpdate,
          shouldForceUpdate = _ref17$shouldForceUpd === void 0 ? true : _ref17$shouldForceUpd,
          _ref17$pageInfo = _ref17.pageInfo,
          pageInfo = _ref17$pageInfo === void 0 ? {} : _ref17$pageInfo;
      var prevPageInfo = this.getStore(["pageInfo"]) || {};
      prevPageInfo = EditTableStore_objectSpread(EditTableStore_objectSpread({}, prevPageInfo), pageInfo); // console.log(prevPageInfo);

      return this.setStore(["pageInfo"], prevPageInfo);
    }
    /**
     * @description: 获取checked信息
     * @param {type}
     * @return:
     */

  }, {
    key: "getCheckInfo",
    value: function getCheckInfo() {
      var info = this.getStore(["checkInfo"]);
      return info || {};
    }
    /**
     * @description: 设置checked信息
     * @param {type}
     * @return:
     */

  }, {
    key: "setCheckInfo",
    value: function setCheckInfo(_ref18) {
      var checkInfo = _ref18.checkInfo,
          _ref18$shouldForceUpd = _ref18.shouldForceUpdate,
          shouldForceUpdate = _ref18$shouldForceUpd === void 0 ? true : _ref18$shouldForceUpd;
      this.setStore(["checkInfo"], checkInfo, shouldForceUpdate);
    }
    /**
     * @description: 设置某些行选中状态
     * @param {type}
     * @return:
     */

  }, {
    key: "setRowsSelected",
    value: function setRowsSelected(_ref19, selected) {
      var _this11 = this;

      var rowKeyValues = _ref19.rowKeyValues,
          rowIndexs = _ref19.rowIndexs;
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var _ref20 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
          pattern = _ref20.pattern,
          _ref20$defaultAll = _ref20.defaultAll,
          defaultAll = _ref20$defaultAll === void 0 ? true : _ref20$defaultAll,
          callback = _ref20.callback;

      rowKeyValues = this._getRowKeyValues({
        rowKeyValues: rowKeyValues,
        rowIndexs: rowIndexs,
        defaultAll: defaultAll
      });
      var data = this.getViewData("filter"); // 设置选中行模式

      pattern = pattern || (selected ? "add" : "delete");
      var selectedIndex = rowKeyValues.map(function (rowKeyValue) {
        var row = _this11.getRows({
          rowKeyValues: [rowKeyValue]
        })[0] || {};
        var values = row.values || row;
        var unSaga = !values['saga_status'] || values['saga_status'].value !== '1'; // 非禁用  模式是新增时  不允许选中  但是允许删除

        var disabled = pattern == "add" ? row.disabled : false;
        unSaga && !disabled && _this11.setRowProps({
          rowKeyValue: rowKeyValue
        }, {
          selected: selected
        }, false);
        return {
          rowKeyValue: rowKeyValue,
          pattern: pattern
        };
      });
      var checkInfo = this.getCheckInfo();

      if (data && data.length) {
        checkInfo.indeterminate = data.some(function (item) {
          var values = item.values || item;
          var unSaga = !values['saga_status'] || values['saga_status'].value !== '1'; // 非禁用  模式是新增时  不允许选中  但是允许删除

          var disabled = pattern == "add" ? item.disabled : false;
          return unSaga && !disabled && item.selected;
        });
        checkInfo.checkedAll = data.every(function (item) {
          var values = item.values || item;
          var unSaga = !values['saga_status'] || values['saga_status'].value !== '1'; // 非禁用  模式是新增时  不允许选中  但是允许删除

          var disabled = pattern == "add" ? item.disabled : false;
          return !unSaga || disabled || item.selected;
        });
      } else {
        checkInfo.indeterminate = false;
        checkInfo.checkedAll = false;
      }

      this.setSelectedIndex(selectedIndex || [], "", false);
      this.setStore(["checkInfo"], checkInfo, shouldForceUpdate, callback);
    }
    /**
     * @description: 选中所有行
     * @param {type}
     * @return:
     */

  }, {
    key: "setAllRowsSelected",
    value: function setAllRowsSelected(selected) {
      var shouldForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      this.setRowsSelected({}, selected, shouldForceUpdate, {
        defaultAll: true,
        callback: callback
      });
    }
    /**
     * @description: 设置某些行选中状态
     * @param {type}
     * @return:
     */

  }, {
    key: "setRowsSelectedByIndexs",
    value: function setRowsSelectedByIndexs(rowIndexs, selected) {
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var _ref21 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
          pattern = _ref21.pattern,
          _ref21$defaultAll = _ref21.defaultAll,
          defaultAll = _ref21$defaultAll === void 0 ? true : _ref21$defaultAll;

      this.setRowsSelected({
        rowIndexs: rowIndexs
      }, selected, shouldForceUpdate, {
        pattern: pattern,
        defaultAll: defaultAll
      });
    }
    /**
     * @description: 设置某些行选中状态
     * @param {type}
     * @return:
     */

  }, {
    key: "setRowsSelectedByRowKey",
    value: function setRowsSelectedByRowKey(rowKeyValues, selected) {
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var _ref22 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
          pattern = _ref22.pattern,
          _ref22$defaultAll = _ref22.defaultAll,
          defaultAll = _ref22$defaultAll === void 0 ? true : _ref22$defaultAll;

      this.setRowsSelected({
        rowKeyValues: rowKeyValues
      }, selected, shouldForceUpdate, {
        pattern: pattern,
        defaultAll: defaultAll
      });
    }
    /**
     * 反选某些行或者所有行
     * @description:
     * @param {type}
     * @return:
     */

  }, {
    key: "reverseRowsSelected",
    value: function reverseRowsSelected(shouldForceUpdate) {
      var _this12 = this;

      var data = this.getStore("data");
      var rowKey = this.getTableProps("rowKey");
      var selectedIndex = [];
      data.forEach(function (item) {
        var selected = item.selected;

        _this12.setRowProps({
          rowKeyValue: item[rowKey]
        }, {
          selected: !selected
        }, false);

        !selected && selectedIndex.push({
          rowKeyValue: item[rowKey],
          pattern: "add"
        });
      });
      var checkInfo = this.getCheckInfo();
      checkInfo.indeterminate = data.some(function (item) {
        return item.selected && item.status !== EditTableStore_ROW_STATUS["delete"];
      });
      checkInfo.checkedAll = data.every(function (item) {
        return !!item.selected;
      });
      this.setSelectedIndex([], "clear", false);
      this.setSelectedIndex(selectedIndex || [], "", shouldForceUpdate);
    }
    /*-------------包含业务的方法-------------*/

    /**
     * @description: 设置行的旧值
     * @param {type}
     * @return:
     */

  }, {
    key: "saveRowOldValue",
    value: function saveRowOldValue(rowKeyvalue, attrcode, value) {
      this.setCache(["oldRows", rowKeyvalue, attrcode], value);
    }
    /**
     * @description: 获取行的旧值
     * @param {type}
     * @return:
     */

  }, {
    key: "getRowOldValue",
    value: function getRowOldValue(rowKeyvalue, attrcode) {
      // console.log(this.getCache(['oldRows', rowKeyvalue, attrcode]));
      return this.getCache(["oldRows", rowKeyvalue, attrcode]);
    }
    /**
     * @description: 清楚行的旧值
     * @param {type}
     * @return:
     */

  }, {
    key: "deleteRowOldValue",
    value: function deleteRowOldValue(rowKeyvalue, attrcode) {
      this.setCache(["oldRows", rowKeyvalue, attrcode], null);
    }
    /**
     * @description: 移除没有输入内容，所有的空行
     * @param {type}
     * @return:
     */

  }, {
    key: "removeEmptyRows",
    value: function removeEmptyRows(_ref23) {
      var _this13 = this;

      var data = _ref23.data,
          keys = _ref23.keys,
          _ref23$rule = _ref23.rule,
          rule = _ref23$rule === void 0 ? "except" : _ref23$rule,
          _ref23$shouldForceUpd = _ref23.shouldForceUpdate,
          shouldForceUpdate = _ref23$shouldForceUpd === void 0 ? true : _ref23$shouldForceUpd;
      data = data || this.getStore("data");
      var rowKey = this.getTableProps("rowKey");
      var newData = [];
      data.forEach(function (item, index) {
        var values = item.values; // TODO 这里的一段代码后面可以优化下

        var valueKeys = Object.keys(values).filter(function (item) {
          return item != "numberindex";
        });

        if (Object(utils["isArray"])(keys) && (rule == "except" || rule == "include")) {
          valueKeys = valueKeys.filter(function (val) {
            return rule == "except" ? keys.every(function (key) {
              return val !== key;
            }) : keys.includes(val);
          });
        } else {
          console.warn("Invalid params ", rule, keys);
        }

        var flag = valueKeys.every(function (one) {
          return Object(utils["isWrongFalse"])(values[one].value);
        });

        if (flag) {
          // TODO 关闭侧拉
          //  myCardTable.modelIndex === index ? (myCardTable.model = 'close') : '';
          // TODO 清空
          // delChangedRowsOldValue.call(this, tableId, rows[index].rowid);
          // 为啥不用index  因为index不一定准确
          var trueIndex = _this13.getTrueRowIndex({
            rowKeyValue: item[rowKey]
          });

          if (trueIndex === -1) {
            // 不进行删除
            newData.push(item);
            return;
          } // 这个移除会导致索引不正确
          //  this._deleteRow(trueIndex, item[rowKey], true);

        } else {
          newData.push(item);
        }
      }); // console.log(newData);
      // 这种方式 更新了正表

      this.setData({
        data: newData,
        shouldForceUpdate: shouldForceUpdate
      });
    }
    /**
     * @description: 存旧值方法 为了适配筛选功能将旧值标识, 改成通过rowid, 原来是index
     * @param {type}
     * @return:
     */

  }, {
    key: "saveRowsOldValue",
    value: function saveRowsOldValue(_ref24) {
      var _this14 = this;

      var rows = _ref24.rows;
      var rowKey = this.getTableProps("rowKey"); // 过滤假删除数据

      rows.filter(function (row) {
        return row.status != EditTableStore_ROW_STATUS["delete"];
      }).map(function (item) {
        var values = item.values,
            rowid = item[rowKey];

        for (var keys in values) {
          var OldVal = values[keys] ? values[keys].value : null;

          _this14.saveRowOldValue(rowid, keys, OldVal);
        }
      });
    }
    /**
     * @description: 清理旧值方法 为了适配筛选功能将旧值标识, 改成通过rowid, 原来是index
     * @param {type}
     * @return:
     */

  }, {
    key: "_clearRowsOldValue",
    value: function _clearRowsOldValue(_ref25) {
      var _this15 = this;

      var rows = _ref25.rows;
      var rowKey = this.getTableProps("rowKey"); // 过滤假删除数据

      rows.map(function (item) {
        var values = item.values,
            rowid = item[rowKey];

        for (var keys in values) {
          _this15.saveRowOldValue(rowid, keys, null);
        }
      });
    } // 清空排序

  }, {
    key: "clearSortStatus",
    value: function clearSortStatus(_ref26) {
      var _this16 = this;

      var columns = _ref26.columns;
      columns.forEach(function (eve) {
        //获取表格列配置
        var children = eve.children;

        if (!Object(utils["isUndefined"])(children)) {
          //判断和并列的情况
          _this16.clearSortStatus({
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
     * @description: 设置表格数据
     * @param {type}
     * @return:
     */

  }, {
    key: "setTableData",
    value: function setTableData() {
      var _this17 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref27 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref27$isCache = _ref27.isCache,
          isCache = _ref27$isCache === void 0 ? true : _ref27$isCache,
          _ref27$isTop = _ref27.isTop,
          isTop = _ref27$isTop === void 0 ? false : _ref27$isTop,
          _ref27$shouldForceUpd = _ref27.shouldForceUpdate,
          shouldForceUpdate = _ref27$shouldForceUpd === void 0 ? true : _ref27$shouldForceUpd;

      if (!data.rows) {
        return console.warn("invalid data rows");
      } // 格式化数据


      data.rows = this.formatData(data.rows, 'clearSelect'); // 将排序标记清空 

      var columns = this.getArrayMeta();

      if (columns) {
        this.clearSortStatus({
          columns: columns
        });
      } // 改变一下这里的缓存值的位置，这样的话缓存的，只是业务组传给我们的值，而没有我们的其他内部控制字段，这样不会污染我们的数据
      // 每次重新设值内部字段都是取当前表格的，业务组不回给我们传我们内部的控制段，所以这样存储源值更合理


      if (isCache) {
        // 为了让表格可以进行单一的渲染，然后添加了这个判断条件，不进行缓存，只为表格设置数据 zhanghengh
        this.setCache(["base"], JSON.parse(JSON.stringify(data)));
        this.setCache(["all"], null);
        this.setCache(["afterDel"], null);
      }
      /**
       * 处理筛选状态下的情况
       * 清空的表格筛选标志
       * 清空筛选状态下的表格全数据
       * 退出筛选状态
       */
      // TODO 筛选


      this.setStore('filterReset', true, false, function () {
        _this17.setStore('filterReset', false, false);
      });
      this.resetFilter(undefined); // console.log(this.getStore('filterReset'));
      // 将之前表格上的状态更新到新数据上进行同步
      // 将多选框的全选恢复成不勾选

      var crossPageSelectIndex = this.getStore(["checkInfo", "crossPageSelectIndex"]);
      var checkedAllpage = this.getStore(["checkInfo", "checkedAllpage"]);

      if (crossPageSelectIndex.size === 0) {
        checkedAllpage = false;
      }

      var allpks = this.getStore('allpks') || [];

      if (data.allpks) {
        allpks = data.allpks;
      } else if (data.rows && data.rows.length == 0) {
        checkedAllpage = false;
        crossPageSelectIndex = new Set();
        allpks = [];
      }

      this.setStore('allpks', allpks, false);
      var checkInfo = {
        checkedAll: false,
        //全选标志
        indeterminate: false,
        //半选标志
        selectIndex: [],
        //选中行
        disabledAll: false,
        checkedAllpage: checkedAllpage,
        crossPageSelectIndex: crossPageSelectIndex //跨页选择

      };
      this.setCheckInfo({
        checkInfo: checkInfo,
        shouldForceUpdate: false
      }); // 清空之前点击存的数据 TODO

      this.setTableProps("currentInfo", null, false);
      this.setTableProps("currentIndex", -1, false); // 将选中行去掉
      // 清理行选中态  删除自动选中到下一个行的逻辑 , 与快捷键的的删除逻辑冲突

      this.setSelectedIndex([], "clear", false); // 重新设置数据模版滚动条定位到顶部

      this.setTableProps("focusIndex", isTop ? 0 : -1, false);
      var oldData = this.getData(); // 清理旧值

      this._clearRowsOldValue({
        rows: oldData
      }); // 设置数据


      this.setData({
        data: data.rows,
        shouldForceUpdate: shouldForceUpdate,
        callback: function callback() {
          _this17.setStore('filterReset', false, false);

          _this17.setTableProps("focusIndex", -1, false);
        }
      }); // 设置值之后  存旧值

      var newData = this.getData();
      this.saveRowsOldValue({
        rows: newData
      }); // 跨页全选

      var config = this.getConfig();
      var crossPageSelect = config.crossPageSelect,
          pkname = config.pkname;

      if (crossPageSelect && pkname) {
        var _this$getCheckInfo2 = this.getCheckInfo(),
            _crossPageSelectIndex = _this$getCheckInfo2.crossPageSelectIndex; //如果传了pk 并且所传pk和上一次不一样则清空所有跨页全选的数据


        if (data.allpks && data.allpks.length) {
          if (data.allpks.length !== allpks.length || data.allpks[0] !== allpks[0]) {
            checkedAllpage = false;

            _crossPageSelectIndex.clear();

            checkInfo.checkedAllpage = false;
            checkInfo.crossPageSelectIndex = _crossPageSelectIndex;
            this.setCheckInfo({
              checkInfo: checkInfo,
              shouldForceUpdate: false
            });
          }
        }

        if (checkedAllpage) {
          this._setSelect(undefined, "allpage");
        } else {
          var rows = this.getData();
          var rowKey = this.getTableProps("rowKey");
          var rowIdArr = [];
          rows.forEach(function (row) {
            if (!row.values[pkname]) {
              console.error("\u884C\u6570\u636E\u4E2D\u6CA1\u6709pkname\u4E3A".concat(pkname, "\u7684value"));
              console.log(row);
              return;
            }

            var pk = row.values[pkname].value;

            if (_crossPageSelectIndex.has(pk)) {
              rowIdArr.push(row[rowKey]);
            }
          });

          this._setSelect(rowIdArr, "set", true);
        }
      }

      return data;
    }
    /**
     * @description: 更新表格数据
     * @param {type}
     * @return:
     */

  }, {
    key: "updateTableData",
    value: function updateTableData(data) {
      var isCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!data.rows) {
        return console.warn("invalid data rows");
      } // let rowKey = this.getTableProps('rowKey');
      // 格式化数据


      data.rows = this.formatData(data.rows) || [];
      var newRows = this.setRows({
        rows: data.rows,
        shouldForceUpdate: shouldForceUpdate
      });

      if (isCache) {
        var allRows = this.getData(); // 设置缓存

        this.setCache(["base"], {
          rows: JSON.parse(JSON.stringify(allRows))
        });
        this.setCache(["afterDel"], null);
        this.setCache(["all"], null);
      } // 设置旧值


      this.saveRowsOldValue({
        rows: newRows
      });
    }
    /**
     * 拆分更新方法
     * @param {*} data 
     * @param {*} shouldForceUpdate 
     * @returns 
     */

  }, {
    key: "updateRows",
    value: function updateRows(data) {
      var _this18 = this;

      var shouldForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!data) {
        return console.warn("invalid data params");
      }

      var rowKey = this.getTableProps("rowKey");

      if (data.rows) {
        data.rows.map(function (row) {
          var _row = row,
              values = _row.values,
              status = _row.status;
          var rowKeyValue = row[rowKey]; // 格式化数据

          row = (_this18.formatData([row]) || [row])[0]; // 同步 rowKeyValue

          row[rowKey] = rowKeyValue; // 根据 rowKeyValue 来设置

          row.status = Object(utils["isUndefined"])(status) || status == EditTableStore_ROW_STATUS.origin ? EditTableStore_ROW_STATUS.edit : status;

          _this18.setRows({
            rows: [row],
            shouldForceUpdate: false
          });
        });
      }

      if (Object(utils["isArray"])(data)) {
        data.map(function (item) {
          var index = item.index,
              row = item.data;

          var rowKeyValue = _this18._getRowKeyValue({
            rowIndex: index
          }); // 格式化数据


          row = (_this18.formatData([row]) || [row])[0]; // 根据 rowKeyValue 来设置

          row.status = Object(utils["isUndefined"])(row.status) || row.status == EditTableStore_ROW_STATUS.origin ? EditTableStore_ROW_STATUS.edit : row.status; // 同步 rowKeyValue

          row[rowKey] = rowKeyValue; // 根据 rowKeyValue 来设置

          _this18.setRows({
            rows: [row],
            shouldForceUpdate: false
          });
        });
      }

      shouldForceUpdate && this.forceUpdate();
    }
    /**
     * 更新行属性
     * @param {*} data 
     * @param {*} shouldForceUpdate 
     */

  }, {
    key: "updateRowsProps",
    value: function updateRowsProps(data) {
      var _this19 = this;

      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!data) {
        return console.warn("invalid data params");
      }

      if (data.rows) {
        data.rows.map(function (row) {
          row = EditTableStore_objectSpread(EditTableStore_objectSpread({}, row), props);

          _this19.setRows({
            rows: [row],
            shouldForceUpdate: false
          });
        });
      }

      if (Object(utils["isArray"])(data)) {
        data.map(function (item) {
          var row = item.data;
          row = EditTableStore_objectSpread(EditTableStore_objectSpread({}, row), props);

          _this19.setRows({
            rows: [row],
            shouldForceUpdate: false
          });
        });
      }

      shouldForceUpdate && this.forceUpdate();
    }
    /**
     * 更新表格缓存
     * @param {*} data 
     * @param {*} shouldForceUpdate 
     */

  }, {
    key: "resetTableCaches",
    value: function resetTableCaches() {
      var shouldForceUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var rows = this.getData();
      this.setCache(["base"], {
        rows: JSON.parse(JSON.stringify(rows))
      });
      this.setCache(["afterDel"], null);
      this.setCache(["all"], null); // 设置旧值

      this.saveRowsOldValue({
        rows: rows
      });
      shouldForceUpdate && this.forceUpdate();
    }
    /**
     * @description: 根据index 更新表格数据
     * @param {type}
     * @return:
     */

  }, {
    key: "updateTableDataByIndexs",
    value: function updateTableDataByIndexs(data, flag) {
      var _this20 = this;

      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!Object(utils["isArray"])(data)) {
        return console.warn("invalid data params");
      }

      var rowKey = this.getTableProps("rowKey");
      var rows = this.getData();
      data.map(function (item) {
        var index = item.index,
            row = item.data;

        var rowKeyValue = _this20._getRowKeyValue({
          rowIndex: index
        }); // 格式化数据


        row = (_this20.formatData([row]) || [row])[0]; // 根据 rowKeyValue 来设置

        row.status = Object(utils["isUndefined"])(row.status) || row.status == EditTableStore_ROW_STATUS.origin ? EditTableStore_ROW_STATUS.edit : row.status; // 同步 rowKeyValue

        row[rowKey] = rowKeyValue; // 根据 rowKeyValue 来设置

        _this20.setRows({
          rows: [row],
          shouldForceUpdate: false
        });
      }); // TODO
      // changeCheckboxSwitch
      // 设置缓存

      if (flag) {
        this.setCache(["base"], {
          rows: JSON.parse(JSON.stringify(rows))
        });
        this.setCache(["afterDel"], null);
        this.setCache(["all"], null);
      } // 设置旧值


      this.saveRowsOldValue({
        rows: rows
      });
      shouldForceUpdate && this.forceUpdate();
    }
    /**
     * @description: 根据rowId 更新表格数据
     * @param {type}
     * @return:
     */

  }, {
    key: "updateTableDataByRowId",
    value: function updateTableDataByRowId(data, isCache) {
      var _this21 = this;

      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var isDel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (!data || !Object(utils["isArray"])(data.rows)) {
        return console.warn("invalid data params");
      }

      var rowKey = this.getTableProps("rowKey");
      data.rows.map(function (row) {
        var _row2 = row,
            values = _row2.values,
            status = _row2.status;
        var rowKeyValue = row[rowKey]; // 格式化数据

        row = (_this21.formatData([row]) || [row])[0]; // 同步 rowKeyValue

        row[rowKey] = rowKeyValue; // 根据 rowKeyValue 来设置

        row.status = Object(utils["isUndefined"])(status) || status == EditTableStore_ROW_STATUS.origin ? EditTableStore_ROW_STATUS.edit : status;

        _this21.setRows({
          rows: [row],
          shouldForceUpdate: false
        });
      }); // TODO
      // changeCheckboxSwitch

      var rows = this.getData(isDel ? [EditTableStore_ROW_STATUS["delete"]] : []); // 设置缓存

      if (isCache) {
        this.setCache(["base"], {
          rows: JSON.parse(JSON.stringify(rows))
        });
        this.setCache(["afterDel"], null);
        this.setCache(["all"], null);
      } // 设置旧值


      this.saveRowsOldValue({
        rows: rows
      }); // 设置数据

      this.setData({
        data: rows,
        shouldForceUpdate: shouldForceUpdate
      });
    }
    /**
     * @description: 设置表格状态
     * @param {type}
     * @return:
     */

  }, {
    key: "setTableStatus",
    value: function setTableStatus(status) {
      var _ref28 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref28$shouldForceUpd = _ref28.shouldForceUpdate,
          shouldForceUpdate = _ref28$shouldForceUpd === void 0 ? true : _ref28$shouldForceUpd;

      if (!["edit", "browse"].includes(status)) {
        return console.warn("unknown status: ".concat(status, ", status should be 'edit' or 'browse'"));
      } // 切换成浏览态的时候把所有的toast清掉


      if (this.getTableProps("status") !== "browse" && status == "browse") {// clearOneTypeToast('danger'); // TODO
      } //变为浏览台将批改数据清空


      if (status === "browse") {
        this.setCache("oldBatchData", null);
      }

      this.setTableProps("status", status, shouldForceUpdate);
    }
    /**
     * @description: 获取所有的行
     * @param {type}
     * @return:
     */

  }, {
    key: "getAllRows",
    value: function getAllRows() {
      var isDeepCopy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // 好像不需要 取缓存了
      // let cacheAllData = this.getCache(['all']);
      var rows = this.getData() || [];
      var res = isDeepCopy ? JSON.parse(JSON.stringify(rows)) : rows;
      var noDeleteData = [];
      var deleteData = [];
      res.forEach(function (row) {
        if (row.status === EditTableStore_ROW_STATUS["delete"]) {
          deleteData.push(row);
        } else {
          noDeleteData.push(row);
        }
      });
      res = noDeleteData.concat(deleteData); // rows = (cacheAllData ? cacheAllData.rows : rows) || [];

      return res;
    }
    /**
     * @description: 获取可见的行
     * @param {type}
     * @return:
     */

  }, {
    key: "getVisibleRows",
    value: function getVisibleRows() {
      var isDeepCopy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var isFilter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var rows = this.getData(isFilter ? [EditTableStore_ROW_STATUS["delete"], EditTableStore_ROW_STATUS.filter] : [EditTableStore_ROW_STATUS["delete"]]); // 不带过滤的数据

      return isDeepCopy ? JSON.parse(JSON.stringify(rows)) : rows;
    }
    /**
     * @description: 获取已经变化的数据
     * @param {type}
     * @return:
     */

  }, {
    key: "getChangedRows",
    value: function getChangedRows() {
      var rows = this.getData([EditTableStore_ROW_STATUS.origin]);
      return JSON.parse(JSON.stringify(rows));
    }
  }, {
    key: "focusItem",
    value: function focusItem(rowKeyValue, shouldForceUpdate) {
      var metaItems = this.getArrayMeta();

      for (var i = 0; i < metaItems.length; i++) {
        if (!metaItems[i].children && metaItems[i].attrcode != 'numberindex' && (typeof metaItems[i].disabled == 'undefined' || metaItems[i].disabled == false) && typeof metaItems[i].visible != 'undefined' && metaItems[i].visible == true) {
          var attrcode = metaItems[i].attrcode; // console.log(rowKeyValue, attrcode);

          this.setCellProps(rowKeyValue, attrcode, {
            isEdit: true,
            autoFocus: true
          }, shouldForceUpdate);
          break;
        }
      }
    }
    /**
     * @description: 添加一行
     * @param {type}
     * @return:
     */

  }, {
    key: "addTableRow",
    value: function addTableRow(index) {
      var _this22 = this;

      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var _ref29 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
          _ref29$autoFocus = _ref29.autoFocus,
          autoFocus = _ref29$autoFocus === void 0 ? false : _ref29$autoFocus,
          isAutoAddRow = _ref29.isAutoAddRow,
          callback = _ref29.callback;

      // 方法锁  解决点击自动增行 点击增行导致  增两行问题
      if (this.__addRowLock && !isAutoAddRow) {
        return;
      }

      this.__addRowLock = true; // setTimeout(() => { this.__addRowLock = false; });

      var rowKey = this.getTableProps("rowKey"); // 控制增行后的行定位

      var unFilterData = this.getViewData(),
          last = unFilterData.length;
      var trueIndex = !Object(utils["isUndefined"])(index) ? this.getTrueRowIndex({
        rowIndex: index
      }) : last;
      var focusIndex = trueIndex === -1 ? last : trueIndex;
      this.setTableProps("focusIndex", focusIndex === 0 ? focusIndex : focusIndex + 1, false); // 变换为编辑态

      this.setTableProps("status", "edit", false);
      /**
       * 延迟增行执行，解决表格出现纵向滚动条时，在最后一行，录入数据
       * 在点击最后一行其他单元格，进行自动增行后，被点击的单元格没有切换到可编辑状态
       * 导致这个问题的原因是，当初出现纵向滚动条后，设置myCardTable.focusIndex之后，更新表格
       * 导致我们无法点上，我们所点的div，导致对应的onclick事件没有执行
       */
      //  setTimeout(() => {

      if (Object(utils["isPromise"])(defaultValue) === "Promise") {
        defaultValue.then(function (result) {
          var newRow = _this22._insertRow({
            rowValues: result,
            rowIndex: index,
            shouldForceUpdate: false,
            type: "add",
            callback: null
          }); // 存旧值


          _this22.saveRowsOldValue({
            rows: [newRow]
          }); // 自动聚焦


          autoFocus && _this22.focusItem(newRow[rowKey], false);
          shouldForceUpdate && _this22.forceUpdate(function () {
            // 控制增行后的行定位
            _this22.setTableProps("focusIndex", -1, false);

            callback && callback(newRow);
          });
          _this22.__addRowLock = false;
          return newRow;
        });
      } else {
        // 执行一下方法
        if (Object(utils["isFunction"])(defaultValue)) {
          defaultValue = defaultValue() || {};
        }

        var newRow = this._insertRow({
          rowValues: defaultValue,
          rowIndex: index,
          shouldForceUpdate: false,
          type: "add",
          callback: null
        }); // 存旧值


        this.saveRowsOldValue({
          rows: [newRow]
        }); // 自动聚焦

        autoFocus && this.focusItem(newRow[rowKey], false); // 控制表格单元格的渲染顺序 避免不能执行cell里的聚焦操作

        shouldForceUpdate && this.forceUpdate(function () {
          // 控制增行后的行定位
          _this22.setTableProps("focusIndex", -1, false);

          callback && callback(newRow);
        });
        this.__addRowLock = false;
        return newRow;
      } // }, 27);

    }
    /**
     * rowKeyValues 即可以是rowids 也可以是rowIndexs
     * @description: 删除表格行
     * @param {type}
     * @return:
     */

  }, {
    key: "deleteTableRows",
    value: function deleteTableRows(_ref30, thorough) {
      var _this23 = this;

      var rowKeyValues = _ref30.rowKeyValues,
          rowIndexs = _ref30.rowIndexs;
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var callback = arguments.length > 3 ? arguments[3] : undefined;
      // 获取rowKeyValues
      rowKeyValues = this._getRowKeyValues({
        rowKeyValues: rowKeyValues,
        rowIndexs: rowIndexs
      });
      var delItems = [];
      var rowKey = this.getTableProps("rowKey");
      var data = this.getData();
      var currentInfo = this.getTableProps("currentInfo") || {};
      var currentIndex = this.getTableProps("currentIndex");
      var currentRowKeyValue = this.getViewData('filter')[currentIndex];
      var includeCurrentRow = false;
      rowKeyValues.forEach(function (item) {
        var trueIndex = _this23.getTrueRowIndex({
          rowKeyValue: item
        });

        if (trueIndex === -1) {
          return;
        } // includeCurrentRow


        if (!includeCurrentRow) {
          includeCurrentRow = data[trueIndex][rowKey] === currentInfo[rowKey] || data[trueIndex][rowKey] === currentRowKeyValue;
        } // 新加删除旧值


        _this23.deleteRowOldValue(data[trueIndex][rowKey], {}); //若被删除行已选中,则重置复选框状态


        _this23.setRowsSelected({
          rowKeyValues: [item],
          rowIndexs: rowIndexs
        }, false, false);

        var delItem = _this23._deleteRow(trueIndex, item, thorough);

        delItems.push(delItem);
      }); // 判断是否彻底删除，不缓存在前端

      thorough && this.setCache(["afterDel"], EditTableStore_objectSpread(EditTableStore_objectSpread({}, this.getStore([]) || {}), {}, {
        data: data
      })); // 清理行选中态  删除自动选中到下一个行的逻辑 , 与快捷键的的删除逻辑冲突

      if (includeCurrentRow) {
        this.setTableProps("currentInfo", null, false);
        this.setTableProps("focusIndex", -1, false);
        this.setTableProps("currentIndex", -1, false);
      }

      shouldForceUpdate && this.forceUpdate(callback);
      return delItems;
    }
    /**
     * @description: 设置某一行的值
     * @param {type}
     * @return:
     */

  }, {
    key: "setValByKeyAndIndex",
    value: function setValByKeyAndIndex(rowIndex, key) {
      var cellValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _ref31 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
          _ref31$isSetEdit = _ref31.isSetEdit,
          isSetEdit = _ref31$isSetEdit === void 0 ? true : _ref31$isSetEdit,
          _ref31$isUpdateBatch = _ref31.isUpdateBatch,
          isUpdateBatch = _ref31$isUpdateBatch === void 0 ? false : _ref31$isUpdateBatch,
          _ref31$shouldForceUpd = _ref31.shouldForceUpdate,
          shouldForceUpdate = _ref31$shouldForceUpd === void 0 ? true : _ref31$shouldForceUpd;

      var value = cellValue.value,
          display = cellValue.display; // let rowIndex = this.getTrueRowIndex({ rowIndex: index });

      var row = this.getRows({
        rowIndexs: [rowIndex]
      })[0];
      var rowKey = this.getTableProps("rowKey");

      if (!row) {
        return console.warn("unknown row data");
      }

      row.status == EditTableStore_ROW_STATUS.origin && isSetEdit && this.setRowProps({
        rowIndex: rowIndex
      }, {
        status: EditTableStore_ROW_STATUS.edit
      }, false); //新加了存旧值

      if (!Object(utils["isUndefined"])(value)) {
        //将批改数据重新缓存
        this.saveRowOldValue(row[rowKey], key, value);
      }

      if (isUpdateBatch && (!Object(utils["isUndefined"])(value) || !Object(utils["isUndefined"])(display))) {
        this.setCache("oldBatchData", {
          batchChangeIndex: Number(rowIndex),
          batchChangeKey: key,
          batchChangeValue: !Object(utils["isUndefined"])(value) ? value : null,
          batchChangeDisplay: !Object(utils["isUndefined"])(display) ? display : null
        });
      }

      this.setCellValue({
        rowIndex: rowIndex,
        attrcode: key,
        value: cellValue,
        shouldForceUpdate: shouldForceUpdate
      });
    }
    /**
     * @description: 设置某一行的值
     * @param {type}
     * @return:
     */

  }, {
    key: "setValByKeyAndRowId",
    value: function setValByKeyAndRowId(rowKeyValue, key) {
      var cellValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _ref32 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
          _ref32$isSetEdit = _ref32.isSetEdit,
          isSetEdit = _ref32$isSetEdit === void 0 ? true : _ref32$isSetEdit,
          _ref32$isUpdateBatch = _ref32.isUpdateBatch,
          isUpdateBatch = _ref32$isUpdateBatch === void 0 ? false : _ref32$isUpdateBatch,
          _ref32$shouldForceUpd = _ref32.shouldForceUpdate,
          shouldForceUpdate = _ref32$shouldForceUpd === void 0 ? true : _ref32$shouldForceUpd;

      var value = cellValue.value,
          display = cellValue.display;
      var row = this.getRows({
        rowKeyValues: [rowKeyValue]
      })[0];
      var rowKey = this.getTableProps("rowKey");
      isSetEdit && row.status == EditTableStore_ROW_STATUS.origin && this.setRowProps({
        rowKeyValue: rowKeyValue
      }, {
        status: EditTableStore_ROW_STATUS.edit
      }, false); //新加了存旧值

      if (!Object(utils["isUndefined"])(value)) {
        this.saveRowOldValue(row[rowKey], key, value);
      } // 将批改数据重新缓存


      if (isUpdateBatch && (!Object(utils["isUndefined"])(value) || !Object(utils["isUndefined"])(display))) {
        var viewData = this.getViewData("filter");
        var rowIndex = -1;
        viewData.forEach(function (row, index) {
          if (row[rowKey] == rowKeyValue) {
            rowIndex = index;
          }
        });

        if (rowIndex !== -1) {
          // 可以考虑放到 cache中
          this.setCache("oldBatchData", {
            batchChangeIndex: Number(rowIndex),
            batchChangeKey: key,
            batchChangeValue: !Object(utils["isUndefined"])(value) ? value : null,
            batchChangeDisplay: !Object(utils["isUndefined"])(display) ? display : null
          });
        }
      }

      this.setCellValue({
        rowKeyValue: rowKeyValue,
        attrcode: key,
        value: cellValue,
        shouldForceUpdate: shouldForceUpdate
      });
    }
    /**
     * @description: 获取某一行的值
     * @param {type}
     * @return:
     */

  }, {
    key: "getValByKeyAndIndex",
    value: function getValByKeyAndIndex(index, attrcode) {
      // 获取真实的 index
      // let rowIndex = this.getTrueRowIndex({ rowIndex: index });
      var value = this.getCellValue({
        rowIndex: index,
        attrcode: attrcode
      });
      (!value || Object(utils["isUndefined"])(value.value)) && console.warn("empty cell value ");
      return JSON.parse(JSON.stringify(value || {}));
    }
    /**
     * @description: 获取某一行的值
     * @param {type}
     * @return:
     */

  }, {
    key: "getValByKeyAndRowKey",
    value: function getValByKeyAndRowKey(rowKeyValue, attrcode) {
      // 获取真实的 index
      var value = this.getCellValue({
        rowKeyValue: rowKeyValue,
        attrcode: attrcode
      });
      (!value || Object(utils["isUndefined"])(value.value)) && console.warn("empty cell value ");
      return JSON.parse(JSON.stringify(value || {}));
    }
    /**
     * @description: 根据KEYS批量设置行属性
     * @param {type}
     * @return:
     */

  }, {
    key: "setCellsProps",
    value: function setCellsProps() {
      var _this24 = this;

      var _ref33 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          rowIndexs = _ref33.rowIndexs,
          rowKeyValues = _ref33.rowKeyValues,
          attrcodes = _ref33.attrcodes,
          _ref33$value = _ref33.value,
          value = _ref33$value === void 0 ? {} : _ref33$value,
          _ref33$shouldForceUpd = _ref33.shouldForceUpdate,
          shouldForceUpdate = _ref33$shouldForceUpd === void 0 ? true : _ref33$shouldForceUpd;

      // 转换为rowKeyValues
      !rowKeyValues && (rowKeyValues = this._getRowKeyValues({
        rowKeyValues: rowKeyValues,
        rowIndexs: rowIndexs
      }));
      rowKeyValues = Object(utils["isArray"])(rowKeyValues) ? rowKeyValues : [rowKeyValues]; // 为啥要做转换呢！！！

      value.disabled = Object(utils["isBoolean"])(value.disabled) ? value.disabled : value.disabled === "on"; // 如果没有传入codes 设置整行 TODO ?

      if (!attrcodes) {
        // return this.setRowsProps({
        //     rowIndexs,
        //     rowKeyValues,
        //     attrcodes,
        //     value,
        //     shouldForceUpdate,
        // });
        var data = this.getStore("data");
        rowKeyValues.forEach(function (rowKeyValue) {
          var row = data.query(rowKeyValue);

          if (Object(utils["isObject"])(row)) {
            // Update
            for (var attrcode in row.values) {
              _this24.setCellProps(rowKeyValue, attrcode, value, false);
            }
          }
        });
      } else {
        attrcodes = Object(utils["isArray"])(attrcodes) ? attrcodes : [attrcodes];
        rowKeyValues.forEach(function (rowKeyValue) {
          attrcodes.forEach(function (attrcode) {
            _this24.setCellProps(rowKeyValue, attrcode, value, false);
          });
        });
      }

      shouldForceUpdate && this.forceUpdate();
    }
    /**
     * CardTable 与 EditTable 不太一样
     * 粘贴行 相当于增行
     * @description: pasteRow
     * @param {type}
     * @return:
     */

  }, {
    key: "pasteRow",
    value: function pasteRow() {
      var _ref34 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref34$copyRow = _ref34.copyRow,
          copyRow = _ref34$copyRow === void 0 ? {} : _ref34$copyRow,
          index = _ref34.index,
          excludeKeys = _ref34.excludeKeys,
          _ref34$shouldForceUpd = _ref34.shouldForceUpdate,
          shouldForceUpdate = _ref34$shouldForceUpd === void 0 ? true : _ref34$shouldForceUpd;

      var newRow = JSON.parse(JSON.stringify(copyRow));
      var values = newRow.values || {};

      if (Object(utils["isArray"])(excludeKeys)) {
        excludeKeys.map(function (key) {
          values[key] && delete values[key];
        });
      } // 复制拷贝的值


      newRow.values = values;
      return this._insertRows({
        rows: [newRow],
        rowIndex: index,
        isGenerateRowKey: true,
        shouldForceUpdate: shouldForceUpdate
      });
    }
    /**
     * 返回的数据格式比较特殊
     * @description: 获取选中的行
     * @param {type}
     * @return:
     */

  }, {
    key: "getSelectedRows",
    value: function getSelectedRows(isDeepCopy) {
      var data = this.getStore("data");
      var checkRows = [];
      var config = this.getConfig();
      var crossPageSelect = config.crossPageSelect,
          pkname = config.pkname; //跨页选择

      if (crossPageSelect && pkname) {
        var _this$getStore = this.getStore(["checkInfo"]),
            crossPageSelectIndex = _this$getStore.crossPageSelectIndex;

        var allpks = this.getStore(["allpks"]);
        var alltss = this.getStore(["alltss"]);
        var pageInfo = this.getPageInfo();
        var pageSize = pageInfo.pageSize;
        pageSize = Number(pageSize); // pageIndex = Number(pageIndex);
        // let currentPageStartIndex = pageSize * pageIndex - pageSize;
        // let currentPageEndIndex = pageSize * pageIndex - 1;
        // allpks.forEach((pk, index) => {
        //     let row;
        //     let currentIndex = index - (pageIndex - 1) * pageSize;
        //     if (crossPageSelectIndex.has(pk)) {
        //         if (
        //             index >= currentPageStartIndex &&
        //             index <= currentPageEndIndex
        //         ) {
        //             row = {
        //                 data: data[currentIndex],
        //                 index: currentIndex,
        //                 pageIndex: Math.floor(index / pageSize),
        //             };
        //         } else {
        //             row = {
        //                 data: { pk: allpks[index], ts: alltss[index] },
        //                 index: index % pageSize,
        //                 pageIndex: Math.floor(index / pageSize),
        //             };
        //         }
        //         checkRows.push(row);
        //     }
        // });

        var currentPagePkArr = [];
        data.forEach(function (row) {
          var pk = row.values[pkname].value;
          currentPagePkArr.push(pk);
        });
        crossPageSelectIndex.forEach(function (item) {
          var row;
          var rowIndex = currentPagePkArr.indexOf(item);

          if (rowIndex !== -1) {
            var pkIndex = allpks.indexOf(item);
            row = {
              data: data[rowIndex],
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

          if (row) {
            checkRows.push(row);
          }
        });
        return isDeepCopy ? JSON.parse(JSON.stringify(checkRows)) : checkRows;
      } else {
        // 取当前视图的数据来进行删除 
        var viewData = this.getViewData('normal');
        viewData.map(function (item, index) {
          if (item.selected) {
            checkRows.push({
              data: item,
              index: index
            });
          }
        });
        return isDeepCopy ? JSON.parse(JSON.stringify(checkRows)) : checkRows;
      }
    }
    /**
     * @description: 获取所有删除了的项
     * @param {type}
     * @return:
     */

  }, {
    key: "getAllRowsRemoveKeys",
    value: function getAllRowsRemoveKeys(keys) {
      var data = this.getStore("data");
      var _ref35 = [typeof keys === "string", Array.isArray(keys)],
          isStr = _ref35[0],
          isArr = _ref35[1];

      if (keys == undefined || isStr || isArr) {
        // 是字符串或者是数组 或者是undefined
        data.map(function (elem) {
          var values = elem.values;

          for (var key in values) {
            if (isStr && key === keys || isArr && keys.includes(key)) {
              delete values[key];
            }
          }
        });
        return data.filter(function (e) {
          return e.status != EditTableStore_ROW_STATUS["delete"];
        });
      }
    }
    /**
     * TODO 有些奇怪 共用一套数据 不应该再有模板区分
     * @description: 获取混合了所有页签的 表行的值
     * @param {type}
     * @return:
     */

  }, {
    key: "getMixinMetaOfData",
    value: function getMixinMetaOfData() {
      var _initValues = this._getColInitialValue();

      var rowKey = this.getTableProps("rowKey"); // console.log(_initValues);

      var data = this.getStore("data");
      var res = data.map(function (item) {
        item.values = EditTableStore_objectSpread(EditTableStore_objectSpread({}, item.values), _initValues[item[rowKey]]);
        return item;
      });
      return res;
    }
    /**
     * @description: 获取过滤的行
     * @param {type}
     * @return:
     */

  }, {
    key: "_getFilterRows",
    value: function _getFilterRows(key, value, langCode) {
      // 不修改原始数据
      var data = JSON.parse(JSON.stringify(this.getStore("data") || []));
      var rows = [];

      if (Object(utils["isString"])(key)) {
        key = [key];
      }

      var filterData = this.getViewData("filter"); // 先清理 后匹配

      data = data.map(function (row) {
        if (row.filter) {
          delete row.filter;
          delete row.filterIndex;
        }

        return row;
      }); // 没有value

      if (Object(utils["isUndefined"])(value) || value === "") {
        data = data.map(function (row, index) {
          row.filter = false;
          row.filterIndex = index;
          return row;
        });
        return {
          // 筛选后数据
          filterRows: data,
          // 更改状态的数据
          allRows: data
        };
      } //多语适配start


      var metaItems = this.getArrayMeta();

      if (metaItems) {
        metaItems.forEach(function (item) {
          if (item.itemtype === "residtxt") {
            key = key.map(function (k) {
              if (k == item.attrcode) {
                item.languageMeta.forEach(function (i) {
                  if (i.languageCode == langCode) {
                    k = k + i.index;
                  }
                });
              }

              return k;
            });
          }
        });
      }

      data.filter(function (row, index) {
        var values = row.values,
            status = row.status;

        if (status != EditTableStore_ROW_STATUS["delete"]) {
          if (key.length) {
            row.filter = true;
            delete row.filterIndex;
          } //当key时数组时


          key.forEach(function (keyItem) {
            if (values[keyItem]) {
              if (values[keyItem].display && values[keyItem].display.includes(value) || values[keyItem].value && values[keyItem].value.includes(value)) {
                row.filter = false;
                row.filterIndex = index;
              }
            } // 像是处理多语言的代码


            var newKeyItem = keyItem.slice(0, keyItem.length - 1);

            if (values[newKeyItem]) {
              if (values[newKeyItem].display && values[newKeyItem].display.includes(value) || values[newKeyItem].value && values[newKeyItem].value.includes(value)) {
                row.filter = false;
                row.filterIndex = index;
              }
            }
          });
        }
      });
      return {
        // 筛选后数据
        filterRows: rows,
        // 更改状态的数据
        allRows: data
      };
    }
    /**
     * @description: 获取过滤的行
     * @param {type}
     * @return:
     */

  }, {
    key: "getFilterRows",
    value: function getFilterRows(key, value, langCode) {
      var _this$_getFilterRows = this._getFilterRows(key, value, langCode),
          filterRows = _this$_getFilterRows.filterRows,
          allRows = _this$_getFilterRows.allRows;

      return {
        //筛选后数据
        areaType: "table",
        rows: filterRows,
        areacode: null
      };
    }
    /**
     * 重置过滤器
     */

  }, {
    key: "resetFilter",
    value: function resetFilter(tableId) {
      tableId = tableId || this.getStore("name");

      if (!tableId) {
        return console.warn('invalid resetFilter tableId note find');
      }

      var arrColumns = this.getArrayMeta(tableId, true);
      var columnStatus = {}; // 设置表格筛选图标, 重置时将筛选图标全部清空

      arrColumns.forEach(function (column) {
        columnStatus[column.attrcode] = {
          filterStatus: ''
        };
      }); // 设置行状态

      var data = this.getData() || [];
      data.forEach(function (row) {
        row.filter = false;
        delete row.filterIndex;
      }); // 处理已选等逻辑

      var checkInfo = this.getCheckInfo();
      var viewData = this.getViewData();

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

      this.setStore(["checkInfo"], checkInfo, false); // 更新 所有的更新放到弹窗关闭(onHide)时

      this.setData({
        data: data,
        shouldForceUpdate: false
      }); // 列状态

      this.setColumn(tableId, columnStatus, false);
    }
    /**
     * @description: 设置搜索后表格数据的方法
     * @param {type}
     * @return:
     */

  }, {
    key: "setFiltrateTableData",
    value: function setFiltrateTableData(key, value, isShowAll, langCode, tableId) {
      var _this25 = this;

      // 清空筛选标识, 清空filterAllData
      this.setStore('filterReset', true, false);
      this.resetFilter(tableId);

      var _this$_getFilterRows2 = this._getFilterRows(key, value, langCode),
          filterRows = _this$_getFilterRows2.filterRows,
          allRows = _this$_getFilterRows2.allRows; // TODO


      if (isShowAll && filterRows.rows.length === 0) {
        allRows = allRows.map(function (row) {
          if (row.filter) {
            delete row.filter;
            delete row.filterIndex;
          }

          return row;
        }); // 处理已选等逻辑

        var checkInfo = this.getCheckInfo();
        var viewData = this.getViewData();

        if (viewData && viewData.length) {
          checkInfo.indeterminate = viewData.some(function (item) {
            var values = item.values || item;
            var unSaga = !values['saga_status'] || values['saga_status'].value !== '1';
            var disabled = item.disabled;
            return unSaga && !disabled && item.selected;
          });
          checkInfo.checkedAll = viewData.every(function (item) {
            var values = item.values || item;
            var unSaga = !values['saga_status'] || values['saga_status'].value !== '1';
            var disabled = item.disabled;
            return !unSaga || disabled || item.selected;
          });
        }

        this.setStore(["checkInfo"], checkInfo, false);
      } // 更新表格数据


      this.setData({
        data: allRows,
        callback: function callback() {
          _this25.setStore('filterReset', false, false);
        }
      });
    }
    /**
     * @description: 批改
     * @param {type}
     * @return:
     */

  }, {
    key: "batchChangeTableData",
    value: function batchChangeTableData() {
      var batchData = this.getCache("oldBatchData");
      var data = this.getData();

      if (!Object(utils["isArray"])(data) || data.length <= 0 || !batchData || !batchData.batchChangeKey) {
        return null;
      } //将之前缓存的表格列的key，批量修改成，之前onBulr的那个输入框了的值


      data.forEach(function (row) {
        var values = row.values,
            status = row.status;

        if (status != EditTableStore_ROW_STATUS["delete"]) {
          row.status == EditTableStore_ROW_STATUS.origin && (row.status = EditTableStore_ROW_STATUS.edit); //删除的数据不改变

          if (Object(utils["isObject"])(batchData.batchChangeValue)) {
            // 对多语文本进进行特殊处理
            var value = batchData.batchChangeValue;
            Object.keys(value).forEach(function (key) {
              if (values[key]) {
                values[key] = EditTableStore_objectSpread(EditTableStore_objectSpread({}, values[key]), value[key]);
              } else {
                values[key] = value[key];
              }
            });
          } else {
            // Object.keys(values).forEach(item => {
            //     if (item === batchData.batchChangeKey) {
            //         values[item].value = batchData.batchChangeValue;
            //         values[item].display = batchData.batchChangeDisplay;
            //     }
            // });
            // 部分列初始值是空的  没有对应的单元格数据
            values[batchData.batchChangeKey] = values[batchData.batchChangeKey] || {};
            values[batchData.batchChangeKey].value = batchData.batchChangeValue;
            values[batchData.batchChangeKey].display = batchData.batchChangeDisplay;
          }
        }
      });
      this.saveRowsOldValue({
        rows: data
      }); // this.refresh();

      this.setData({
        data: data
      });
      return {
        code: batchData.batchChangeKey,
        value: batchData.batchChangeValue,
        display: batchData.batchChangeDisplay
      };
    }
    /**
     * @description: 插入行
     * @param {type}
     * @return:
     */

  }, {
    key: "insertDataByIndexs",
    value: function insertDataByIndexs(data) {
      var _this26 = this;

      var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!Object(utils["isArray"])(data)) {
        return console.warn("invalid data params");
      } // 变换为编辑态


      this.setTableProps("status", "edit", false);
      data.map(function (item) {
        var index = item.index,
            row = item.data;

        _this26._insertRow({
          rowValues: row.values,
          rowIndex: index,
          type: "add",
          shouldForceUpdate: false,
          isMergeInitValue: flag
        });
      }); // TODO
      // changeCheckboxSwitch

      var rows = this.getData(); // 设置旧值

      this.saveRowsOldValue({
        rows: rows
      });
      shouldForceUpdate && this.forceUpdate();
    }
    /**
     * @description: 更新行的状态
     * @param {type}
     * @return:
     */

  }, {
    key: "setRowStatusByIndexs",
    value: function setRowStatusByIndexs(data) {
      var _this27 = this;

      var shouldForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var rows = this.getData();
      var rowKey = this.getTableProps("rowKey");
      data.map(function (item) {
        var index = item.index,
            status = item.status;

        var trueIndex = _this27.getTrueRowIndex({
          rowIndex: index
        });

        var STATUS = Object.values(EditTableStore_ROW_STATUS);

        if (!STATUS.includes(String(status))) {
          return console.warn("status必须是0到3的数字或者字符串");
        }

        _this27.setRowProps({
          rowIndex: index
        }, {
          status: status
        }, false); // 要先 处理状态  在重新设置id  目前不支持更新id


        rows[trueIndex][rowKey] = _this27.generateRowKey();
      });
      this.setData({
        data: rows,
        shouldForceUpdate: shouldForceUpdate
      });
    }
    /**
     * @description: 行数据插入到index行后
     * @param {type}
     * @return:
     */

  }, {
    key: "insertRowsAfterIndex",
    value: function insertRowsAfterIndex(data, index) {
      var shouldForceUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      index = Object(utils["isUndefined"])(index) ? 0 : ++index;

      this._insertRows({
        rows: data,
        rowIndex: index,
        isGenerateRowKey: true,
        shouldForceUpdate: shouldForceUpdate
      });
    }
    /**
     * rowIndex 可视数据index
     * @description: 设置单元格数据
     * @param {type}
     * @return:
     */

  }, {
    key: "setRowsCellValue",
    value: function setRowsCellValue() {
      var _this28 = this;

      var _ref36 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          rows = _ref36.rows,
          _ref36$pattern = _ref36.pattern,
          pattern = _ref36$pattern === void 0 ? "replace" : _ref36$pattern,
          _ref36$shouldForceUpd = _ref36.shouldForceUpdate,
          shouldForceUpdate = _ref36$shouldForceUpd === void 0 ? true : _ref36$shouldForceUpd;

      if (!rows) {
        return;
      }

      rows = Object(utils["isArray"])(rows) ? rows : [rows];
      var rowKey = this.getTableProps("rowKey");
      var data = this.getStore("data");
      rows.forEach(function (item) {
        var rowKeyValue = item[rowKey],
            row = data.query(rowKeyValue);

        if (Object(utils["isObject"])(row)) {
          // TODO Update
          for (var attrcode in item.values) {
            _this28.setCellValue({
              rowKeyValue: rowKeyValue,
              attrcode: attrcode,
              value: item.values[attrcode],
              shouldForceUpdate: false
            });
          }

          row.status == EditTableStore_ROW_STATUS.origin && (row.status = EditTableStore_ROW_STATUS.edit);
        } else {
          console.warn("can't find row data", rowKey);
        }
      });
      shouldForceUpdate && this.forceUpdate();
      return rows;
    } // 生成rowid

  }, {
    key: "refresh",
    // 刷新整个绑定对象
    value: function refresh() {
      this.forceUpdate && this.forceUpdate();
    } //liuming 跨页全选的crossPage

  }]);

  return Store;
}(index_["BaseStore"]);


// CONCATENATED MODULE: ./src/platform/components/Table/tableLibs/index.js
/*
 * @Descripttion: 
 * @version: 
 * @Author: renyjk
 * @Date: 2020-07-15 21:13:42
 * @LastEditors: bbq
 * @LastEditTime: 2020-07-16 14:09:03
 */







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

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(117);
} else {}


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {}

module.exports = warning;


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

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ keyDownOfShiftUp; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ handleArrowKeyDown; });

// EXTERNAL MODULE: ./src/platform/components/WithKeyboardChange/createKeyMap.js + 1 modules
var createKeyMap = __webpack_require__(9);

// EXTERNAL MODULE: ./src/platform/components/WithKeyboardChange/config/moduleType.js
var moduleType = __webpack_require__(15);

// EXTERNAL MODULE: external "@platform/api/index"
var index_ = __webpack_require__(1);

// EXTERNAL MODULE: ./src/platform/components/WithKeyboardChange/util/findNextFocusItemInTable.js
var findNextFocusItemInTable = __webpack_require__(20);

// EXTERNAL MODULE: ./src/platform/components/WithKeyboardChange/util/getCellIdentity.js
var getCellIdentity = __webpack_require__(18);

// EXTERNAL MODULE: ./src/platform/components/WithKeyboardChange/util/handleSpecialCase.js
var handleSpecialCase = __webpack_require__(37);

// EXTERNAL MODULE: ./src/platform/components/WithKeyboardChange/util/findNextFocusItemInForm.js
var findNextFocusItemInForm = __webpack_require__(54);

// CONCATENATED MODULE: ./src/platform/components/WithKeyboardChange/util/findPrevFoucsItemInTable.js








/**
 * @desc 查找下一个可聚焦元素
 * @param target {dom} 事件源
 * @param ViewModel {object} 全局变量
 * @param moduleId {string} 当前区域Id
 * @param orderOfHotKey {array} 区域显示顺序配置
 */

function findPrevFocusItemInTable(_ref) {
  var eventTarget = _ref.eventTarget,
      ViewModel = _ref.ViewModel,
      moduleId = _ref.moduleId,
      orderOfHotKey = _ref.orderOfHotKey;
  var parentTd = eventTarget.tagName === 'TD' ? eventTarget : Object(index_["findParentTd"])(eventTarget);

  if (!parentTd) {
    // 这里报错的原因是因为某些事件（下拉的keydown）执行了两次
    console.warn('not find parentTd, prev hotkey invalid');
    return;
  }

  var prevTd = parentTd.previousElementSibling;
  var currentTr = parentTd.parentElement;
  var firstTd = findFirstTdInRow(currentTr);
  var div = prevTd && prevTd.querySelector('[tabindex="0"]'); //如果是第一一个元素就需要判断跳到上一行还是跳到上一个区域

  if (firstTd === parentTd) {
    var lastTr = currentTr.parentElement.lastElementChild;
    currentTr === lastTr ? perceptionHotKeyConfig({
      currentModuleId: moduleId,
      ViewModel: ViewModel,
      orderOfHotKey: orderOfHotKey
    }) : findPrevRowTd({
      tr: currentTr,
      ViewModel: ViewModel,
      moduleId: moduleId,
      orderOfHotKey: orderOfHotKey
    });
    return;
  } // 如果下一个元素没有找到就继续查找


  if (div === null || Object(handleSpecialCase["a" /* checkboxInTable */])(div)) {
    findPrevSiblings({
      td: prevTd,
      ViewModel: ViewModel,
      moduleId: moduleId,
      orderOfHotKey: orderOfHotKey
    });
    return;
  } // 解决table 设值后重新渲染导致焦点缺失的问题,在这里保留一下id


  var cellIdentity = Object(getCellIdentity["a" /* default */])(prevTd);
  cellIdentity ? ViewModel.enterTriggerCellId = cellIdentity : '';
  Object(findNextFocusItemInTable["a" /* executeAutoFocus */])({
    div: div,
    ViewModel: ViewModel
  });
}
/**
 * @desc 查找当前行里的第一个td，需要排除操作列
 * @param tr {dom}
 * @return td {dom}
 */


function findFirstTdInRow(tr) {
  var tds = tr.querySelectorAll('td');
  var td = Array.prototype.find.call(tds, function (td) {
    return !td.className.includes('fixed');
  });
  return td;
}
/**
 * @desc 判断业务组是否配置快捷键，如果没有就在本区域内循环 反之根据orderOfHotKey跳转上个区域
 * @param currentModuleId {string} 当前的区域ID
 * @param ViewModel 全局变量
 * @param orderOfHotKey {array} 区域展示顺序
 */


function perceptionHotKeyConfig(_ref2) {
  var currentModuleId = _ref2.currentModuleId,
      ViewModel = _ref2.ViewModel,
      orderOfHotKey = _ref2.orderOfHotKey;

  if (orderOfHotKey && orderOfHotKey.length === 0) {
    findLastFocusItemInCurrentModule({
      currentModuleId: currentModuleId,
      ViewModel: ViewModel
    });
  } else {
    orderOfHotKey && jumpToPrevModuleFocusItem({
      currentModuleId: currentModuleId,
      ViewModel: ViewModel,
      orderOfHotKey: orderOfHotKey
    });
  }
}

function findLastFocusItemInCurrentModule(_ref3) {
  var currentModuleId = _ref3.currentModuleId,
      ViewModel = _ref3.ViewModel;
  var id = "".concat(index_["config"].hotKeyModuleIdPrefix, "-").concat(currentModuleId);
  var tableTr = document.querySelectorAll("#".concat(id, " table tbody tr.u-table-row"));
  var lastOneIndex = tableTr[tableTr.length - 1];
  var tds = tableTr[lastOneIndex].querySelectorAll('td');
  var lastFocusItem = findLastChild(tds);
  var cellIdentity = Object(getCellIdentity["a" /* default */])(lastFocusItem);
  cellIdentity ? ViewModel.enterTriggerCellId = cellIdentity : '';
  var div = lastFocusItem.querySelector('[tabindex="0"]');
  div && Object(findNextFocusItemInTable["a" /* executeAutoFocus */])({
    div: div,
    ViewModel: ViewModel
  });
}
/**
 * @desc 寻找最后一个可编辑啊元素
 * @param tds {nodeList}
 */


function findLastChild(tds) {
  // eslint-disable-next-line no-empty
  for (var i = tds.length; i > -1; i--) {
    if (tds[i].querySelector('[tabindex="0"]') !== null) {
      return tds[i];
    }
  }
}

function jumpToPrevModuleFocusItem(_ref4) {
  var currentModuleId = _ref4.currentModuleId,
      ViewModel = _ref4.ViewModel,
      orderOfHotKey = _ref4.orderOfHotKey;
  var prevModuleId = calculatePrevModuleId(currentModuleId, orderOfHotKey);
  var prevModuleKeyMap = createKeyMap["d" /* keyByModuleId */][prevModuleId];
  if (prevModuleKeyMap === undefined) return;
  var type = prevModuleKeyMap.type;

  if (type === moduleType["a" /* MODULE_TYPE */].cardTable || type === moduleType["a" /* MODULE_TYPE */].editTable) {
    //如果是table类型就获取当前table显示的页签
    var activeTableKeyMap = createKeyMap["d" /* keyByModuleId */][prevModuleKeyMap.activeTable];
    var lastItemDom = document.querySelector("div[".concat(activeTableKeyMap.lastItem, "]"));
    var div = lastItemDom.querySelector('[tabindex="0"]');

    if (div === null) {
      var td = lastItemDom.parentElement;
      findPrevSiblings({
        td: td,
        ViewModel: ViewModel,
        moduleId: activeTableKeyMap.moduleId,
        orderOfHotKey: orderOfHotKey
      });
    } else {
      var _td = Object(index_["findParentTd"])(div);
      /**
       * @desc 表格编辑后会导致页面重新渲染导致聚焦状态丢失，因此enter键跳转的需要在全局记录一下，为操作的连续性渲染完成后重新聚焦做标识
       * @type {string}
       */


      var cellIdentity = Object(getCellIdentity["a" /* default */])(_td);
      cellIdentity ? ViewModel.enterTriggerCellId = cellIdentity : '';
      Object(findNextFocusItemInTable["a" /* executeAutoFocus */])({
        div: div,
        ViewModel: ViewModel
      });
    }
  } else {
    Object(findNextFocusItemInForm["a" /* findLastFocusItemInForm */])(prevModuleKeyMap, prevModuleId);
  }
}
/**
 * @desc 递归查找上一个可聚焦元素
 * @param td {dom} 前一个td
 * @param ViewModel {object} 全局变量
 * @param moduleId {string} 当前区域的Id
 * @param orderOfHotKey
 */


function findPrevSiblings(_ref5) {
  var td = _ref5.td,
      ViewModel = _ref5.ViewModel,
      moduleId = _ref5.moduleId,
      orderOfHotKey = _ref5.orderOfHotKey;
  var prevTd = td.previousElementSibling;
  var currentTr = prevTd && prevTd.parentElement;
  var firstTd = currentTr && findFirstTdInRow(currentTr);
  var currentDiv = td.querySelector('[tabindex="0"]');
  var div = prevTd && prevTd.querySelector('[tabindex="0"]'); //如果下个需要聚焦的单元格与最后一个单元相同并且没有可聚焦元素就在下一行查找

  if (firstTd === prevTd && div === null || firstTd === td && currentDiv === null) {
    findPrevRowTd({
      tr: currentTr,
      ViewModel: ViewModel,
      moduleId: moduleId,
      orderOfHotKey: orderOfHotKey
    });
    return;
  }

  if (div === null || Object(handleSpecialCase["a" /* checkboxInTable */])(div)) {
    findPrevSiblings({
      td: prevTd,
      ViewModel: ViewModel,
      moduleId: moduleId,
      orderOfHotKey: orderOfHotKey
    });
    return;
  }

  var cellIdentity = Object(getCellIdentity["a" /* default */])(prevTd);
  cellIdentity ? ViewModel.enterTriggerCellId = cellIdentity : '';
  Object(findNextFocusItemInTable["a" /* executeAutoFocus */])({
    div: div,
    ViewModel: ViewModel
  });
}

function calculatePrevModuleId(currentModuleId, orderOfHotKey) {
  var orderOfHotKeyLen = orderOfHotKey.length;
  var currentModuleIndex = orderOfHotKey.indexOf(currentModuleId);
  var prevModuleIndex = currentModuleIndex - 1 < -1 ? orderOfHotKey[orderOfHotKeyLen - 1] : currentModuleIndex - 1;
  return orderOfHotKey[prevModuleIndex];
} //查找上一行可聚焦元素


function findPrevRowTd(_ref6) {
  var tr = _ref6.tr,
      ViewModel = _ref6.ViewModel,
      moduleId = _ref6.moduleId,
      orderOfHotKey = _ref6.orderOfHotKey;
  var prevTr = tr && tr.previousElementSibling; //如果是最后一行就查找下个区域的第一个可聚焦元素

  if (prevTr === null) {
    orderOfHotKey && jumpToPrevModuleFocusItem({
      currentModuleId: moduleId,
      ViewModel: ViewModel,
      orderOfHotKey: orderOfHotKey
    });
    return;
  }

  if (prevTr.getAttribute('tabindex') === '-1') {
    findPrevRowTd({
      tr: prevTr,
      ViewModel: ViewModel,
      moduleId: moduleId,
      orderOfHotKey: orderOfHotKey
    });
    return;
  }

  var divs = prevTr.querySelectorAll('td [tabindex="0"]');
  var lastDiv = divs[divs.length - 1];
  var td = Object(index_["findParentTd"])(lastDiv);
  var cellIdentity = Object(getCellIdentity["a" /* default */])(td);
  cellIdentity ? ViewModel.enterTriggerCellId = cellIdentity : '';
  Object(findNextFocusItemInTable["a" /* executeAutoFocus */])({
    div: lastDiv,
    ViewModel: ViewModel
  });
}


// EXTERNAL MODULE: ./src/platform/components/WithKeyboardChange/util/calculateNeedJumpTimes.js
var calculateNeedJumpTimes = __webpack_require__(55);

// CONCATENATED MODULE: ./src/platform/components/WithKeyboardChange/util/findUpStairsFocusItemInTable.js
/*
 * @Descripttion: 
 * @version: 
 * @Author: bbq
 * @Date: 2020-08-17 09:56:43
 * @LastEditors: bbq
 * @LastEditTime: 2021-02-20 09:37:22
 */




/**
 * @desc 查找上一行元素
 * @param target {dom} 事件源
 * @param ViewModel {object} 全局变量
 * @param moduleId {string} 当前区域Id
 * @param orderOfHotKey {array} 区域显示顺序配置
 */

function findUpStairsFocusItemInTable(_ref) {
  var eventTarget = _ref.eventTarget,
      ViewModel = _ref.ViewModel,
      moduleId = _ref.moduleId,
      orderOfHotKey = _ref.orderOfHotKey;
  var parentTd = eventTarget.tagName === 'TD' ? eventTarget : Object(index_["findParentTd"])(eventTarget);
  var upStairTr = parentTd.parentElement.previousElementSibling;
  var jumpedLines = 1; //向上跳跃的行数

  if (upStairTr === null) return;

  if (upStairTr.getAttribute('tabindex') === '-1') {
    jumpedLines = Object(calculateNeedJumpTimes["a" /* default */])(upStairTr, jumpedLines, 'up');
  }

  var cellIdentity = Object(getCellIdentity["a" /* default */])(parentTd);

  if (!cellIdentity) {
    return console.warn('not find cell identity!');
  }

  var cellIdentityArray = cellIdentity && cellIdentity.split('-');
  var upStairsLine = Number(cellIdentityArray.pop()) - jumpedLines;

  if (upStairsLine > -1) {
    cellIdentityArray.push(upStairsLine);
    var upStairsCellIdentity = cellIdentityArray.join('-');
    ViewModel.upStairsCellIdentity = cellIdentityArray;
    var div = document.querySelector("div[".concat(upStairsCellIdentity, "=\"").concat(upStairsCellIdentity, "\"] [tabindex=\"0\"], div[").concat(upStairsCellIdentity, "=\"").concat(upStairsCellIdentity, "\"][tabindex=\"0\"]"));
    Object(findNextFocusItemInTable["a" /* executeAutoFocus */])({
      div: div,
      ViewModel: ViewModel
    });
  }
}


// CONCATENATED MODULE: ./src/platform/components/WithKeyboardChange/util/findDownStairsFocusItemInTable.js
/*
 * @Author: liyxt
 * @Date: 2020-05-19 15:47:39
 * @LastEditors: bbq
 * @LastEditTime: 2021-02-20 09:37:12
 * @Description: file content
 */





/**
 * @desc 查找上一行元素
 * @param target {dom} 事件源
 * @param ViewModel {object} 全局变量
 * @param moduleId {string} 当前区域Id
 * @param orderOfHotKey {array} 区域显示顺序配置
 */

function findDownStairsFocusItemInTable(_ref) {
  var eventTarget = _ref.eventTarget,
      ViewModel = _ref.ViewModel,
      moduleId = _ref.moduleId;
  // debugger;
  var parentTd = eventTarget.tagName === 'TD' ? eventTarget : Object(index_["findParentTd"])(eventTarget);
  var downStairTr = parentTd.parentElement.nextElementSibling;
  var jumpedLines = 1; //向下跳跃的行数

  if (downStairTr === null) return;

  if (downStairTr.getAttribute('tabindex') === '-1') {
    jumpedLines = Object(calculateNeedJumpTimes["a" /* default */])(downStairTr, jumpedLines, 'down');
  }

  var cellIdentity = Object(getCellIdentity["a" /* default */])(parentTd);

  if (!cellIdentity) {
    return console.warn('not find cell identity!');
  }

  var cellIdentityArray = cellIdentity && cellIdentity.split('-');
  var downStairsLine = Number(cellIdentityArray.pop()) + jumpedLines;
  var id = "".concat(index_["config"].hotKeyModuleIdPrefix, "-").concat(moduleId); // let tableTr = document.querySelectorAll(`#${id} table tbody tr.u-table-row`);
  // if (downStairsLine < tableTr.length) {

  cellIdentityArray.push(downStairsLine);
  var upStairsCellIdentity = cellIdentityArray.join('-');
  ViewModel.upStairsCellIdentity = upStairsCellIdentity;
  var div = document.querySelector("div[".concat(upStairsCellIdentity, "=\"").concat(upStairsCellIdentity, "\"] [tabindex=\"0\"], div[").concat(upStairsCellIdentity, "=\"").concat(upStairsCellIdentity, "\"][tabindex=\"0\"]"));
  Object(findNextFocusItemInTable["a" /* executeAutoFocus */])({
    div: div,
    ViewModel: ViewModel
  }); // }
}


// CONCATENATED MODULE: ./src/platform/components/WithKeyboardChange/handleKeyDown.js







var ARROW_KEY = {
  37: handleLeftArrow,
  38: handleUpArrow,
  39: handleRightArrow,
  40: handleDownArrow
};
/**
 *
 * @param moduleId { String } 事件触发时得到的当前moduleId
 * @param e { Object } 事件源
 * @param key  { String } 触发的按钮
 */

function keyDownOfShiftUp(moduleId, e, key) {
  var nextFocus = key === 'shift+down' ? +1 : -1;
  var nextFocusModuleIdIndex = createKeyMap["e" /* orderOfHotKey */].indexOf(moduleId) + nextFocus;
  var nextFocusModuleId = createKeyMap["e" /* orderOfHotKey */][nextFocusModuleIdIndex];

  if (e.target) {
    // 逻辑修正
    var code = null; // item 根本没有item
    // if (keyByModuleId[moduleId][item]) {
    //     code = keyByModuleId[moduleId][item];
    // }

    if (!isLastModule(nextFocusModuleId) && createKeyMap["d" /* keyByModuleId */][nextFocusModuleId].firstItem) {
      code = createKeyMap["d" /* keyByModuleId */][nextFocusModuleId].firstItem;
    }

    var wrapperDom = document.querySelector("div[field=".concat(code, "]"));

    if (!wrapperDom || !(wrapperDom && wrapperDom.contains(e.target))) {
      e.target.blur();
    }
  }

  if (isLastModule(nextFocusModuleId)) {
    focusInSelfModule({
      key: key,
      moduleId: moduleId
    });
    return;
  } //如果下一个聚焦区域没有数据就跳过


  if (nextItemNotHaveData(this.props, moduleId, nextFocusModuleId)) {
    keyDownOfShiftUp.call(this, nextFocusModuleId, e, key);
    return;
  }

  index_["PubSub"].publish('autoFocus', {
    data: createKeyMap["d" /* keyByModuleId */][nextFocusModuleId].firstItem,
    moduleId: moduleId
  });
}
/**
 * @desc 如果在keyByModuleId中没有找到 nextFocusModuleId 就在当前moduleId中来回跳，从第一个可聚焦点跳到最后一个可聚焦点
 * @param nextFocusModuleId {string}
 * @return {boolean}
 */


function isLastModule(nextFocusModuleId) {
  return createKeyMap["d" /* keyByModuleId */][nextFocusModuleId] === undefined;
}

function focusInSelfModule(_ref) {
  var key = _ref.key,
      moduleId = _ref.moduleId;
  var item = key === 'shift+down' ? 'lastItem' : 'firstItem'; //判断是否有关联tab标签

  if (hasTabRelation(moduleId)) {
    activeItemFocus(moduleId, item);
    return;
  }

  index_["PubSub"].publish('autoFocus', {
    data: createKeyMap["d" /* keyByModuleId */][moduleId][item],
    moduleId: moduleId
  });
} // 判断是否有关联表


function hasTabRelation(moduleId) {
  var moduleInfo = createKeyMap["d" /* keyByModuleId */][moduleId];
  return moduleInfo && (moduleInfo.parent || moduleInfo.children);
}
/**
 * @desc: 当前活跃的标签获取焦点
 * @param: moduleId {string} 当前区域Id
 * @param: item {string} 表格里的聚焦项
 */


function activeItemFocus(moduleId, item) {
  //如果当前活跃的标签是undefined 就用区域ID
  var activeKey = index_["ViewModel"].tableActiveKey || moduleId;
  index_["PubSub"].publish('autoFocus', {
    data: createKeyMap["d" /* keyByModuleId */][activeKey][item],
    moduleId: moduleId
  });
}
/**
 * @desc 判断下一个需要聚焦的moduleId是否有数据,如果没有就再次keyDownOfShiftUp,
 * @param props {object}
 * @param currentModuleId {string} 当前聚焦的区域ID
 * @param nextModuleId {string} 下个聚焦的区域ID
 */


function nextItemNotHaveData(props, currentModuleId, nextModuleId) {
  var currentModuleType = createKeyMap["d" /* keyByModuleId */][currentModuleId].type;
  var nextModuleType = createKeyMap["d" /* keyByModuleId */][nextModuleId].type;
  var data = []; //type: {form, cardTable, editTable}

  if (currentModuleType === moduleType["a" /* MODULE_TYPE */].form) {
    data = getDataByFormDataStructure(props, nextModuleType, nextModuleId);
  } else if (currentModuleType === moduleType["a" /* MODULE_TYPE */].cardTable) {
    data = getDataByCardTableDataStructure(props, nextModuleType, nextModuleId);
  } else if (currentModuleType === moduleType["a" /* MODULE_TYPE */].editTable) {
    data = getDataByCardTableDataStructure(props, nextModuleType, nextModuleId);
  }

  return data.length === 0;
}
/**
 * 
 * TODO
 * @desc 由于form, table 类型的数据存放于不同的地方
 * @param props
 * @param nextModuleType
 * @param nextModuleId
 */


function getDataByFormDataStructure(props, nextModuleType, nextModuleId) {
  var data;
  var myTable = props._this.myTable;

  if (nextModuleType === moduleType["a" /* MODULE_TYPE */].cardTable) {
    data = myTable[nextModuleId].state.table.rows;
  } else if (nextModuleType === moduleType["a" /* MODULE_TYPE */].editTable) {
    data = myTable.myEditTable[nextModuleId].state.table.rows;
  } else {
    data = props._this.state.meta[nextModuleId].items;
  }

  return data;
} // TODO


function getDataByCardTableDataStructure(props, nextModuleType, nextModuleId) {
  var data;
  var myTable = props.pageScope.myTable;

  if (nextModuleType === moduleType["a" /* MODULE_TYPE */].cardTable) {
    data = myTable[nextModuleId].state.table.rows;
  } else if (nextModuleType === moduleType["a" /* MODULE_TYPE */].editTable) {
    data = myTable.myEditTable[nextModuleId].state.table.rows;
  } else {
    data = props.pageScope.state.meta[nextModuleId].items;
  }

  return data;
}
/**
 * @desc: 处理上下左右键
 * @param eventTarget {dom} 事件源
 * @param ViewModel {object} 全局变量
 * @param moduleId {string} 区域ID
 * @param orderOfHotKey {array} 区域显示顺序
 * @param itemType {string} 基础组件类型 input/datePicker
 * @param keyCode {number} 按键号
 */


function handleArrowKeyDown(_ref2) {
  var eventTarget = _ref2.eventTarget,
      ViewModel = _ref2.ViewModel,
      moduleId = _ref2.moduleId,
      orderOfHotKey = _ref2.orderOfHotKey,
      itemType = _ref2.itemType,
      keyCode = _ref2.keyCode;
  ARROW_KEY[keyCode]({
    eventTarget: eventTarget,
    ViewModel: ViewModel,
    moduleId: moduleId,
    orderOfHotKey: orderOfHotKey,
    itemType: itemType
  });
}
/**
 * @desc 处理按左方向键
 * @param eventTarget
 * @param ViewModel
 * @param moduleId
 * @param orderOfHotKey
 * @param itemType
 */


function handleLeftArrow(_ref3) {
  var eventTarget = _ref3.eventTarget,
      ViewModel = _ref3.ViewModel,
      moduleId = _ref3.moduleId,
      orderOfHotKey = _ref3.orderOfHotKey,
      itemType = _ref3.itemType;

  //日期类型延迟执行时eventTarget已被移出document导致寻找不到父元素td,所以日期类型立即执行
  if (itemType === index_["config"].hotKeyDatePicker) {
    findPrevFocusItemInTable({
      eventTarget: eventTarget,
      ViewModel: ViewModel,
      moduleId: moduleId,
      orderOfHotKey: orderOfHotKey
    });
    return;
  } //CLOUD-147579 中文输入法下会带进冒号空格等符号，原因是因为输入法的enter比我们的enter后执行导致


  var timer = setTimeout(function () {
    findPrevFocusItemInTable({
      eventTarget: eventTarget,
      ViewModel: ViewModel,
      moduleId: moduleId
    });
    clearTimeout(timer);
  });
}

function handleUpArrow(_ref4) {
  var eventTarget = _ref4.eventTarget,
      ViewModel = _ref4.ViewModel,
      moduleId = _ref4.moduleId,
      orderOfHotKey = _ref4.orderOfHotKey,
      itemType = _ref4.itemType;

  //日期类型延迟执行时eventTarget已被移出document导致寻找不到父元素td,所以日期类型立即执行
  if (itemType === index_["config"].hotKeyDatePicker) {
    findUpStairsFocusItemInTable({
      eventTarget: eventTarget,
      ViewModel: ViewModel,
      moduleId: moduleId,
      orderOfHotKey: orderOfHotKey
    });
    return;
  } //CLOUD-147579 中文输入法下会带进冒号空格等符号，原因是因为输入法的enter比我们的enter后执行导致


  var timer = setTimeout(function () {
    findUpStairsFocusItemInTable({
      eventTarget: eventTarget,
      ViewModel: ViewModel,
      moduleId: moduleId,
      orderOfHotKey: orderOfHotKey
    });
    clearTimeout(timer);
  });
}

function handleRightArrow(_ref5) {
  var eventTarget = _ref5.eventTarget,
      ViewModel = _ref5.ViewModel,
      moduleId = _ref5.moduleId,
      orderOfHotKey = _ref5.orderOfHotKey,
      itemType = _ref5.itemType;

  //日期类型延迟执行时eventTarget已被移出document导致寻找不到父元素td,所以日期类型立即执行
  if (itemType === index_["config"].hotKeyDatePicker) {
    Object(findNextFocusItemInTable["b" /* findNextFocusItemInTable */])({
      eventTarget: eventTarget,
      ViewModel: ViewModel,
      moduleId: moduleId,
      orderOfHotKey: orderOfHotKey
    });
    return;
  } //CLOUD-147579 中文输入法下会带进冒号空格等符号，原因是因为输入法的enter比我们的enter后执行导致


  var timer = setTimeout(function () {
    Object(findNextFocusItemInTable["b" /* findNextFocusItemInTable */])({
      eventTarget: eventTarget,
      ViewModel: ViewModel,
      moduleId: moduleId
    });
    clearTimeout(timer);
  });
}

function handleDownArrow(_ref6) {
  var eventTarget = _ref6.eventTarget,
      ViewModel = _ref6.ViewModel,
      moduleId = _ref6.moduleId,
      orderOfHotKey = _ref6.orderOfHotKey,
      itemType = _ref6.itemType;

  //日期类型延迟执行时eventTarget已被移出document导致寻找不到父元素td,所以日期类型立即执行
  if (itemType === index_["config"].hotKeyDatePicker) {
    findDownStairsFocusItemInTable({
      eventTarget: eventTarget,
      ViewModel: ViewModel,
      moduleId: moduleId,
      orderOfHotKey: orderOfHotKey
    });
    return;
  } //CLOUD-147579 中文输入法下会带进冒号空格等符号，原因是因为输入法的enter比我们的enter后执行导致


  var timer = setTimeout(function () {
    findDownStairsFocusItemInTable({
      eventTarget: eventTarget,
      ViewModel: ViewModel,
      moduleId: moduleId,
      orderOfHotKey: orderOfHotKey
    });
    clearTimeout(timer);
  });
}



/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * @Descripttion: 
 * @version: 
 * @Author: bbq
 * @Date: 2020-08-17 09:56:42
 * @LastEditors: bbq
 * @LastEditTime: 2020-09-22 10:47:22
 */
// 总配置项
/* harmony default export */ __webpack_exports__["a"] = ({
  allTypes: ['input', 'number', 'textarea', 'datepicker', 'rangepicker', 'switch', 'select', 'checkbox', 'radio', 'refer', 'customer', 'label', 'NCTZDatePickerStart', 'NCTZDatePickerEnd', 'checkbox_switch', 'switch_browse'],
  displayTypes: ['select', 'radio', 'checkbox', 'refer'],
  string: ['input', 'textarea', 'datepicker', 'select', 'checkbox', 'radio', 'refer', 'label'],
  "boolean": ['switch', 'checkbox_switch', 'switch_browse'],
  number: ['number'],
  valueTypesExceptNumber: ['input', 'textarea'],
  changeTypes: ['datepicker', 'rangepicker', 'switch', 'select', 'checkbox', 'radio', 'refer', 'NCTZDatePickerStart', 'NCTZDatePickerEnd', 'checkbox_switch', 'switch_browse', 'datePickerNoTimeZone'],
  blurTypes: ['input', 'number', 'textarea'],
  // 编辑后在onblur中的类型
  afterBlurTypes: ['input', 'number', 'textarea', 'residtxt', 'datetimepicker', 'timepicker'],
  valueTypes: ['input', 'number', 'textarea'],
  noEditType: ['label', 'customer'],
  getDisplay: ['select', 'radio', 'checkbox'],
  ROW_STATUS: {
    origin: '0',
    edit: '1',
    add: '2',
    "delete": '3',
    // 新增状态  不表现在status这个后台数据中  只为做判断
    filter: "9"
  },
  timeTypes: ['datepicker', 'NCTZDatePickerStart', 'NCTZDatePickerEnd', 'timepicker', 'datetimepicker', 'rangepicker', 'datePickerNoTimeZone'],
  beforeFocusTypes: ['residtxt', 'input', 'select', 'number', 'textarea', 'password', 'switch_browse', 'refer'],
  beforeChangeTypes: ['radio'],
  beforeClickTypes: ['datepicker', 'timepicker', 'datetimepicker', 'NCTZDatePickerStart', 'NCTZDatePickerEnd', 'rangepicker', 'datePickerNoTimeZone', 'checkbox_switch', 'checkbox'],
  hotKeyModuleIdPrefix: 'hot-key',
  defaultColor: ['#111111', '#555555', '#111', '#555'],
  complete: 'areaChangeComplete',
  //isPageModal: true,  // 为true,top的url放在sessionstorage;否则url不变; 默认值是true
  //isRemoveWorkbench: false, // 为true时,去掉工作桌面打开节点;默认值是false
  hotKeyDatePicker: 'datePicker',
  //由于enter键与业务组部分enter键搜索逻辑冲突因此添加标识，如果元素有此样式就不执行平台enter键逻辑
  stopEnterHotKey: 'stopEnterHotKey'
});

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return stopFormHotKeyChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stopCardTableHotKeyChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return stopEditTableHotKeyChange; });
/*
 * @Descripttion: 
 * @version: 
 * @Author: jinfjk
 * @Date: 2020-08-17 09:56:43
 * @LastEditors: bbq
 * @LastEditTime: 2020-09-28 15:34:56
 */
var FORM_BROWSE = 'browse';
/**
 * @desc 如果以下条件只要有一个不满足就停止执行下面的代码
 * @param props {object}
 * @param autoFocusDeferred {boolean} true -> 不执行， false -> 执行
 * @param status {string} 此状态是form内部的状态，如果此状态不为空优先读取此状态
 * @returns {boolean}
 */

function stopFormHotKeyChange(_ref) {
  var props = _ref.props,
      autoFocusDeferred = _ref.autoFocusDeferred,
      status = _ref.status;
  var name = props.name;

  var _ref2 = props.getHotKeyConfig ? props.getHotKeyConfig() : {},
      withHotKeyChange = _ref2.withHotKeyChange,
      meta = _ref2.meta;

  if (!props.getHotKeyConfig) {
    return console.warn('some form hotkey invalid');
  }

  var moduleType = meta[name] && meta[name]['moduletype'];
  var formStatus;

  if (status) {
    formStatus = status;
  } else {
    //首先判断meta中是否存在name ？ (如果有就去取meta里的值，如果meta里没有设置status默认设值浏览态) ：（meta中不存在name默认设值浏览态）
    formStatus = meta[name] ? meta[name].status || FORM_BROWSE : FORM_BROWSE;
  }

  if (name === undefined || withHotKeyChange === false || moduleType === undefined || autoFocusDeferred || formStatus === FORM_BROWSE) {
    return true;
  }

  return false;
}

function stopCardTableHotKeyChange(props) {
  var name = props.name,
      high_hotkey = props.high_hotkey,
      getHotKeyConfig = props.getHotKeyConfig; // console.log(high_hotkey, getHotKeyConfig)

  var _ref3 = props.getHotKeyConfig ? props.getHotKeyConfig() : {},
      withHotKeyChange = _ref3.withHotKeyChange,
      meta = _ref3.meta;

  if (!props.getHotKeyConfig) {
    return console.warn('some form hotkey invalid');
  }

  var store = high_hotkey.store,
      tableId = high_hotkey.tableId;
  if (!store) return true;
  var notEditStatus = store.getTableProps('status') !== 'edit';
  var rows = store.getData();
  var columns = meta[name] && meta[name].items;
  rows = rows === undefined ? [] : rows; //状态不是编辑状态，无rows数据, 业务组设置withHotKeyChange->false时停止生成keyMap

  return notEditStatus || rows.length === 0 || !withHotKeyChange || columns === undefined;
}

function stopEditTableHotKeyChange(props, autoFocusDeferred) {
  var name = props.name,
      high_hotkey = props.high_hotkey,
      getHotKeyConfig = props.getHotKeyConfig; // console.log(high_hotkey, getHotKeyConfig)

  var _ref4 = props.getHotKeyConfig ? props.getHotKeyConfig() : {},
      withHotKeyChange = _ref4.withHotKeyChange,
      meta = _ref4.meta;

  if (!props.getHotKeyConfig) {
    return console.warn('some form hotkey invalid');
  }

  var store = high_hotkey.store,
      tableId = high_hotkey.tableId;
  if (!store) return true;
  var notEditStatus = store.getTableProps('status') !== 'edit';
  var rows = store.getData();
  var columns = meta[name] && meta[name].items;
  rows = rows === undefined ? [] : rows; //autoFocusDeferred == true || 状态不是编辑状态，rows无数据 并且业务组设置withHotKeyChange->false时才停止生成keyMap

  return autoFocusDeferred || notEditStatus || rows.length === 0 || !withHotKeyChange || columns === undefined;
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

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return keyMap; });
/**
 *
 * 
 *  shiftUp: {sequence: string, action: string}, 让下一个Table的第一个元素聚焦
 *  shiftDown: {sequence: string, action: string} 让上一个Table的第一个元素聚焦
 *
 * 
 */
var keyMap = {
  shiftUp: {
    sequence: 'shift+up',
    action: 'keydown'
  },
  shiftDown: {
    sequence: 'shift+down',
    action: 'keydown'
  },
  tab: {
    sequence: 'tab',
    action: 'keydown'
  }
};


/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_platform_api__WEBPACK_IMPORTED_MODULE_1__);
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

/*
 * @Descripttion: 
 * @version: 
 * @Author: bbq
 * @Date: 2020-08-17 09:56:43
 * @LastEditors: bbq
 * @LastEditTime: 2021-01-13 13:40:50
 */



function TableWithAutoFocus(WrappedComponent) {
  return /*#__PURE__*/function (_Component) {
    _inherits(WithAutoFocus, _Component);

    var _super = _createSuper(WithAutoFocus);

    function WithAutoFocus() {
      _classCallCheck(this, WithAutoFocus);

      return _super.apply(this, arguments);
    }

    _createClass(WithAutoFocus, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var store = this.props.store;
        this.autoFocusToken = _platform_api__WEBPACK_IMPORTED_MODULE_1__["PubSub"].subscribe('autoFocus', function (msg, _ref) {
          var data = _ref.data,
              moduleId = _ref.moduleId,
              force = _ref.force;
          var el = document.querySelector("div[".concat(data, "=\"").concat(data, "\"] [tabindex=\"0\"]"));
          var activeEl = document.activeElement;
          var tableId = "".concat(_platform_api__WEBPACK_IMPORTED_MODULE_1__["config"].hotKeyModuleIdPrefix, "-").concat(moduleId);
          console.log(tableId, activeEl, store);

          if (WithAutoFocus.judgeFocus(el, activeEl, tableId, force)) {
            _platform_api__WEBPACK_IMPORTED_MODULE_1__["ViewModel"].shouldAutoFocus = true;
            el.ncExecuteFocus = true; // 设置一个属性

            var cellselectorkey = el.getAttribute('cellselectorkey') || '';
            cellselectorkey = cellselectorkey.split('@') || [];
            store && cellselectorkey[0] && cellselectorkey[1] && store.setCellProps(cellselectorkey[0], cellselectorkey[1], {
              autoFocus: true
            }, false); //如果当点聚焦元素与需要聚焦的元素相同就不执行；

            !el.contains(activeEl) && el.focus();
            delete el.ncExecuteFocus; // 直接执行  ie下会有顺序问题

            setTimeout(function () {
              _platform_api__WEBPACK_IMPORTED_MODULE_1__["ViewModel"].shouldAutoFocus = false;
            }, 100);
          }
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.autoFocusToken && _platform_api__WEBPACK_IMPORTED_MODULE_1__["PubSub"].subscribe(this.autoFocusToken);
      }
      /**
       * @desc: 业务中存在新增行时先调用addRow后调用setStatus的方法导致焦点在table的第一个可编辑字段，
       *        而不在新增行的第一个可编辑字段上。
       * @resolve: 聚集时判断table是否包含当前活跃元素且活跃元素的tabIndex不等于-1，如果包含就不去执行autoFocus
       *           当前活跃元素可能是table里的操作列，全选功能里的input元素，如果是这些元素就依旧执行focus方法
       * @param el 需要聚焦的元素
       * @param activeEl 当前活跃的元素
       * @param tableId 区域Id
       * @param force true -> 强制执行
       * @return {boolean}
       */

    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "".concat(_platform_api__WEBPACK_IMPORTED_MODULE_1__["config"].hotKeyModuleIdPrefix, "-").concat(this.props.tableId || this.props.name)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, this.props));
      }
    }], [{
      key: "judgeFocus",
      value: function judgeFocus(el, activeEl, tableId, force) {
        var tableEL = document.getElementById(tableId);

        if (el) {
          return activeEl.tabIndex !== -1 && tableEL && !tableEL.contains(activeEl) || force;
        }
      }
    }]);

    return WithAutoFocus;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
}

/* harmony default export */ __webpack_exports__["a"] = (TableWithAutoFocus);

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_platform_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hotkeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var react_hotkeys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hotkeys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_tableKeyboardMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);
/* harmony import */ var _createKeyMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _handleKeyDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
/* harmony import */ var _config_stopHotKeyChange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47);
/* harmony import */ var _util_findNextFocusItemInTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
 * @Date: 2020-08-17 09:56:43
 * @LastEditors: bbq
 * @LastEditTime: 2021-01-27 09:49:43
 */









function EditTableWithKeyboardChange(WrappedComponent) {
  var _temp;

  return _temp = /*#__PURE__*/function (_Component) {
    _inherits(WithKeyboardChange, _Component);

    var _super = _createSuper(WithKeyboardChange);

    function WithKeyboardChange(props) {
      var _this;

      _classCallCheck(this, WithKeyboardChange);

      _this = _super.call(this, props);

      _this.hotKeyWithArrow = function (_ref) {
        var e = _ref.e,
            ViewModel = _ref.ViewModel,
            moduleId = _ref.moduleId,
            itemType = _ref.itemType,
            target = _ref.target;
        var eventTarget = target || e.target;

        var _ref2 = _this.props.getHotKeyConfig ? _this.props.getHotKeyConfig() : {},
            orderOfHotKey = _ref2.orderOfHotKey;

        if (!orderOfHotKey) {
          console.warn('not find orderOfHotKey in getHotKeyConfig');
          return;
        }

        Object(_handleKeyDown__WEBPACK_IMPORTED_MODULE_5__[/* handleArrowKeyDown */ "a"])({
          eventTarget: eventTarget,
          ViewModel: ViewModel,
          moduleId: moduleId,
          orderOfHotKey: orderOfHotKey,
          itemType: itemType,
          keyCode: e.keyCode
        });
      };

      _this.hotKeyWithEnter = _this.hotKeyWithEnter.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(WithKeyboardChange, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var _ref3 = this.props.getHotKeyConfig ? this.props.getHotKeyConfig() : {},
            autoFocusDeferred = _ref3.autoFocusDeferred;

        if (Object(_config_stopHotKeyChange__WEBPACK_IMPORTED_MODULE_6__[/* stopEditTableHotKeyChange */ "b"])(this.props, autoFocusDeferred)) {
          return;
        }

        _createKeyMap__WEBPACK_IMPORTED_MODULE_4__[/* createByModuleType */ "a"]['editTable'](this.props);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.autoFocusToken = _platform_api__WEBPACK_IMPORTED_MODULE_1__["PubSub"].subscribe('autoFocus-IoC', function () {
          if (Object(_config_stopHotKeyChange__WEBPACK_IMPORTED_MODULE_6__[/* stopEditTableHotKeyChange */ "b"])(_this2.props, false)) {
            return;
          }

          _createKeyMap__WEBPACK_IMPORTED_MODULE_4__[/* createByModuleType */ "a"]['editTable'](_this2.props, true);
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.autoFocusToken && _platform_api__WEBPACK_IMPORTED_MODULE_1__["PubSub"].subscribe(this.autoFocusToken);
      }
    }, {
      key: "hotKeyWithEnter",
      value: function hotKeyWithEnter(_ref4) {
        var e = _ref4.e,
            ViewModel = _ref4.ViewModel,
            moduleId = _ref4.moduleId,
            target = _ref4.target;
        //阻止冒泡会影响Page/index 下的keydown 事件
        //e.stopPropagation();
        var eventTarget = target || e.target;

        var _ref5 = this.props.getHotKeyConfig ? this.props.getHotKeyConfig() : {},
            orderOfHotKey = _ref5.orderOfHotKey;

        if (!orderOfHotKey) {
          console.warn('not find orderOfHotKey in getHotKeyConfig');
          return;
        }

        var timer = setTimeout(function () {
          Object(_util_findNextFocusItemInTable__WEBPACK_IMPORTED_MODULE_7__[/* findNextFocusItemInTable */ "b"])({
            eventTarget: eventTarget,
            ViewModel: ViewModel,
            moduleId: moduleId,
            orderOfHotKey: orderOfHotKey
          });
          clearTimeout(timer);
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hotkeys__WEBPACK_IMPORTED_MODULE_2__["HotKeys"], {
          keyMap: _config_tableKeyboardMap__WEBPACK_IMPORTED_MODULE_3__[/* keyMap */ "a"],
          handlers: {
            shiftUp: _handleKeyDown__WEBPACK_IMPORTED_MODULE_5__[/* keyDownOfShiftUp */ "b"].bind(this, this.props.moduleId),
            shiftDown: _handleKeyDown__WEBPACK_IMPORTED_MODULE_5__[/* keyDownOfShiftUp */ "b"].bind(this, this.props.moduleId)
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
          tableStatusChanged: WithKeyboardChange.tableStatusChanged,
          hotKeyWithEnter: this.hotKeyWithEnter,
          hotKeyWithArrow: this.hotKeyWithArrow
        }, this.props)));
      }
    }]);

    return WithKeyboardChange;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _temp;
}

/* harmony default export */ __webpack_exports__["a"] = (EditTableWithKeyboardChange);

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hotkeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var react_hotkeys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hotkeys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_tableKeyboardMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);
/* harmony import */ var _createKeyMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _handleKeyDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var _config_stopHotKeyChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);
/* harmony import */ var _util_findNextFocusItemInTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
 * @Date: 2020-08-17 09:56:43
 * @LastEditors: bbq
 * @LastEditTime: 2021-02-01 14:05:45
 */








function TableWithKeyboardChange(WrappedComponent) {
  var _temp;

  return _temp = /*#__PURE__*/function (_Component) {
    _inherits(WithKeyboardChange, _Component);

    var _super = _createSuper(WithKeyboardChange);

    function WithKeyboardChange(props) {
      var _this;

      _classCallCheck(this, WithKeyboardChange);

      _this = _super.call(this, props);

      _this.hotKeyWithEnter = function (_ref) {
        var e = _ref.e,
            ViewModel = _ref.ViewModel,
            moduleId = _ref.moduleId,
            target = _ref.target,
            itemType = _ref.itemType;
        var eventTarget = target || e.target;

        var _ref2 = _this.props.getHotKeyConfig ? _this.props.getHotKeyConfig() : {},
            orderOfHotKey = _ref2.orderOfHotKey;

        if (!orderOfHotKey) {
          console.warn('not find orderOfHotKey in getHotKeyConfig');
          return;
        } //日期类型延迟执行时eventTarget已被移出document导致寻找不到父元素td,所以日期类型立即执行


        if (itemType === 'datePicker') {
          Object(_util_findNextFocusItemInTable__WEBPACK_IMPORTED_MODULE_6__[/* findNextFocusItemInTable */ "b"])({
            eventTarget: eventTarget,
            ViewModel: ViewModel,
            moduleId: moduleId,
            orderOfHotKey: orderOfHotKey
          });
          return;
        } //CLOUD-147579 中文输入法下会带进冒号空格等符号，原因是因为输入法的enter比我们的enter后执行导致


        var timer = setTimeout(function () {
          Object(_util_findNextFocusItemInTable__WEBPACK_IMPORTED_MODULE_6__[/* findNextFocusItemInTable */ "b"])({
            eventTarget: eventTarget,
            ViewModel: ViewModel,
            moduleId: moduleId,
            orderOfHotKey: orderOfHotKey
          });
          clearTimeout(timer);
        });
      };

      _this.hotKeyWithArrow = function (_ref3) {
        var e = _ref3.e,
            ViewModel = _ref3.ViewModel,
            moduleId = _ref3.moduleId,
            itemType = _ref3.itemType,
            target = _ref3.target;
        var eventTarget = target || e.target;

        var _ref4 = _this.props.getHotKeyConfig ? _this.props.getHotKeyConfig() : {},
            orderOfHotKey = _ref4.orderOfHotKey;

        if (!orderOfHotKey) {
          console.warn('not find orderOfHotKey in getHotKeyConfig');
          return;
        }

        Object(_handleKeyDown__WEBPACK_IMPORTED_MODULE_4__[/* handleArrowKeyDown */ "a"])({
          eventTarget: eventTarget,
          ViewModel: ViewModel,
          moduleId: moduleId,
          orderOfHotKey: orderOfHotKey,
          itemType: itemType,
          keyCode: e.keyCode
        });
      };

      return _this;
    }

    _createClass(WithKeyboardChange, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (Object(_config_stopHotKeyChange__WEBPACK_IMPORTED_MODULE_5__[/* stopCardTableHotKeyChange */ "a"])(this.props)) {
          return;
        }

        _createKeyMap__WEBPACK_IMPORTED_MODULE_3__[/* createByModuleType */ "a"]['table'](this.props);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // 部分情况下KeyByModuleId 没有清除  导致创建不能直接聚焦
        Object(_createKeyMap__WEBPACK_IMPORTED_MODULE_3__[/* deleteKeyByModuleId */ "b"])(this.props.moduleId || this.props.name);
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hotkeys__WEBPACK_IMPORTED_MODULE_1__["HotKeys"], {
          keyMap: _config_tableKeyboardMap__WEBPACK_IMPORTED_MODULE_2__[/* keyMap */ "a"],
          handlers: {
            shiftUp: _handleKeyDown__WEBPACK_IMPORTED_MODULE_4__[/* keyDownOfShiftUp */ "b"].bind(this, this.props.moduleId),
            shiftDown: _handleKeyDown__WEBPACK_IMPORTED_MODULE_4__[/* keyDownOfShiftUp */ "b"].bind(this, this.props.moduleId)
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({}, this.props, {
          tableStatusChanged: WithKeyboardChange.tableStatusChanged,
          hotKeyWithEnter: this.hotKeyWithEnter,
          hotKeyWithArrow: this.hotKeyWithArrow
        })));
      }
    }], [{
      key: "tableStatusChanged",
      value: function tableStatusChanged(_ref5) {
        var props = _ref5.props,
            status = _ref5.status;

        if (status === 'edit' && !Object(_config_stopHotKeyChange__WEBPACK_IMPORTED_MODULE_5__[/* stopCardTableHotKeyChange */ "a"])(props)) {
          _createKeyMap__WEBPACK_IMPORTED_MODULE_3__[/* createByModuleType */ "a"]['table'](props);
        } else {
          Object(_createKeyMap__WEBPACK_IMPORTED_MODULE_3__[/* deleteKeyByModuleId */ "b"])(props.moduleId);
        }
      }
    }]);

    return WithKeyboardChange;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _temp;
}

/* harmony default export */ __webpack_exports__["a"] = (TableWithKeyboardChange);

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

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningOnce", function() { return warningOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWrong", function() { return isWrong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrVoid", function() { return isNullOrVoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWrongFalse", function() { return isWrongFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyValue", function() { return isEmptyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounds", function() { return debounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setElementFocusInIE", function() { return setElementFocusInIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrowKeyDown", function() { return isArrowKeyDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ctrlKeyWithUpDown", function() { return ctrlKeyWithUpDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnterKeyDown", function() { return isEnterKeyDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuidv4", function() { return uuidv4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polymerizeComponents", function() { return polymerizeComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandom", function() { return getRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTime", function() { return changeTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomPassword", function() { return getRandomPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAcuracy", function() { return formatAcuracy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ncRounding", function() { return ncRounding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterColumns", function() { return filterColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetaIsTotal", function() { return getMetaIsTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "excelPackageData", function() { return excelPackageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPageSizeStorage", function() { return setPageSizeStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageSizeStorage", function() { return getPageSizeStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleBrowseData", function() { return handleBrowseData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return isIE; });
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_platform_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Descripttion: 
 * @version: 
 * @Author: pub
 * @Date: 2020-06-22 09:46:52
 * @LastEditors: bbq
 * @LastEditTime: 2021-01-27 14:46:28
 */

 //import {DongbaToLocalTime} from './timer.js';



var warned = {};
/**
 * 错误警告，只警告一次
 * @param {*} condition 
 * @param {*} format 
 * @param {*} arg 
 */

function warningOnce(condition, format, arg) {
  if (!warned[format]) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(condition, format, arg);
    warned[format] = true;
  }
}

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
} // 判断各类型blur的时候value是否是空值

function isEmptyValue(value, itemtype) {
  if (itemtype === 'residtxt') {
    return !Object.keys(value).some(function (attr) {
      return !isWrong(value[attr].value);
    });
  } else if (itemtype === 'refer') {
    if (Array.isArray(value)) {
      if (value.length > 1) {
        return false;
      } else if (value.length === 0) {
        return true;
      } else {
        return isWrong(value[0].refpk);
      }
    } else {
      return isWrong(value.refpk);
    }
  } else {
    return isWrong(value);
  }
}
/*
 * @method   防抖方法
 * @author   add by xuyangt @19/03/08
 * @params
 *     callback     {fun}      回调函数
 *     interval     {number}   触发间隔时间
 * @return   {fun}
 * @demo
 */

function debounds(callback) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var timeout = null;
  return function () {
    var that = this;
    var param = arguments;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      typeof callback === 'function' && callback.apply(that, param);
    }, delay);
  };
}
/*
 * @method   节流方法
 * @author   add by xuyangt @19/03/08
 * @params
 *     callback     {fun}      回调函数
 *     delay     {number}   延时执行时间
 * @return   {fun}
 * @demo
 */

function throttle(callback) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var last = 0;
  return function () {
    var param = arguments;
    var that = this;
    var now = +new Date();

    if (now - last >= interval) {
      last = now;
      typeof callback === 'function' && callback.apply(that, param);
    }
  };
}
/*==============================快捷键相关===============================*/

/**
 * issue: https://stackoverflow.com/questions/2600186/focus-doesnt-work-in-ie, For IE you need to use a setTimeout function due to it being lazy
 */

function setElementFocusInIE(dom) {
  var timer = setTimeout(function () {
    dom && dom.focus();
    clearTimeout(timer);
  }, 100);
}
/**
 * @desc 判断是否按下了方向键
 * @param e {obj} 事件源
 * @param wantedKeys {array} 想要监听的按钮
 */

function isArrowKeyDown(e, wantedKeys) {
  if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return false;
  var keys = wantedKeys || [37, 38, 39, 40];
  return keys.includes(e.keyCode);
}
/**
 * @desc 判断 control + 上下 方向键
 * @param e {object}
 */

function ctrlKeyWithUpDown(e) {
  return (e.ctrlKey || e.metaKey) && [38, 40].includes(e.keyCode);
}
/**
 * @desc 判断 enter 事件
 * @param e {object} 事件源
 * @return {BooleanConstructor}
 */

function isEnterKeyDown(e) {
  //中文输入法下按的enter keyCode 都返回 229
  return e.key === 'Enter' && e.keyCode !== 229 && e.ctrlKey === false && e.altKey === false && e.metaKey === false;
}
/**
 * 生成唯一标识
 */

function uuidv4() {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["getSafeRandom"])() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
/**
 * @description: 高阶组件的聚合，可在本方法里判断组件是否存在
 * @param {type} 
 * @return: 
 */

function polymerizeComponents(base) {
  var components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var params = arguments.length > 2 ? arguments[2] : undefined;
  var component = base;
  components.forEach(function (item) {
    component = item(component, params);
  });
  return component;
} // 产生随机key值

function getRandom() {
  return String(new Date().getTime()).slice(-5) + Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["getSafeRandom"])().toString(12);
} // 转换东八区为当地时间

/**
 * 
 * @param {*string} time 
 * @param {*string} format 
 */

function changeTime(time) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';

  if (time) {
    var newTime = Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["DongbaToLocalTime"])(Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["moment"])(time));
    return newTime.format(format);
  }
}
function getRandomPassword() {
  var min = 6;
  var max = 12;
  min = Math.ceil(min);
  max = Math.floor(max);
  var a = Math.floor(Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["getSafeRandom"])() * (max - min + 1)) + min;
  return Array(a).fill('*').join('');
} //精度 + 补0 + 千分位综合处理

function formatAcuracy(value) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (value === null || value === undefined || String(value).endsWith('必输项')) {
    return value;
  } // 将科学计数法转成数字字符串


  value = convertNum(value);
  return commafy(addZero(formatDot(value, len), len));
} // 四舍五入 by wangyang

function ncRounding(value, scale) {
  // 如果没有精度，不需要处理四舍五入
  if (!scale) return value;
  var _value = value,
      _scale = scale;
  if (!Object.prototype.toString.call(scale) !== "[object Number]" && !isNaN(Number(scale))) _scale = Number(scale); // 校验参数

  if (Object.prototype.toString.call(value) !== "[object String]") _value = String(value);
  var re = /^(\-|\+)?(\d+)?\.?(\d+)?$/;

  if (_value.length < 500 && !re.test(_value)) {
    //console.warn("处理参数异常");
    return value;
  } // 分割value


  var _value$split = _value.split("."),
      _value$split2 = _slicedToArray(_value$split, 2),
      afterPoint = _value$split2[1]; // 有小数位数


  if (afterPoint && afterPoint !== "") {
    // 判断小数位数与精度的关系
    if (afterPoint.length > _scale) {
      _value = Number(_value); // 进行四舍五入操作

      _value = Number(_value.toFixed(_scale + 1));
      _value = _value * Math.pow(10, _scale);
      _value = Math.round(_value);
      _value = _value / Math.pow(10, _scale);
    }
  }

  return _value;
}

function convertNum(num_str) {
  //参数必须为 字符串
  //科学计数法字符 转换 为数字字符， 突破正数21位和负数7位的Number自动转换
  // 兼容 小数点左边有多位数的情况，即 a×10^b（aEb），a非标准范围（1≤|a|<10）下的情况。如 3453.54E-6 or 3453.54E6
  var resValue = '',
      power = '',
      result = null,
      dotIndex = 0,
      resArr = [],
      sym = '';
  var numStr = String(num_str);

  if (!/e/i.test(numStr)) {
    return numStr;
  }

  if (numStr[0] == '-') {
    // 如果为负数，转成正数处理，先去掉‘-’号，并保存‘-’.
    numStr = numStr.substr(1);
    sym = '-';
  }

  var regExp = new RegExp('^(((\\d+.?\\d+)|(\\d+))[Ee]{1}((-(\\d+))|(\\d+)))$', 'ig');

  if (numStr.length < 500) {
    result = regExp.exec(numStr);
  }

  if (result != null) {
    resValue = result[2];
    power = result[5];
    result = null;
  }

  if (!resValue && !power) {
    return false;
  }

  dotIndex = resValue.indexOf('.');
  resValue = resValue.replace('.', '');
  resArr = resValue.split('');

  if (Number(power) >= 0) {
    var subres = resValue.substr(dotIndex);
    power = Number(power); //幂数大于小数点后面的数字位数时，后面加0

    for (var i = 0; i < power - subres.length; i++) {
      resArr.push('0');
    }

    if (power - subres.length < 0) {
      resArr.splice(dotIndex + power, 0, '.');
    }
  } else {
    power = power.replace('-', '');
    power = Number(power); //幂数大于等于 小数点的index位置, 前面加0

    for (var _i2 = 0; _i2 <= power - 1; _i2++) {
      resArr.unshift('0');
    }

    var n = power - dotIndex >= 0 ? 1 : -(power - dotIndex);
    resArr.splice(n, 0, '.');
  }

  resValue = resArr.join('');
  return sym + resValue;
} //数字转换成千分位 格式


function commafy(num) {
  var pointIndex, intPart, pointPart;

  if (num === '-') {
    return '-';
  }

  if (Number.isNaN(+(num + '').split(',').join(''))) {
    //这里暂时就处理一下千分位的逗号
    return '';
  }

  num = num + '';

  if (num.length < 500 && /^.*\..*$/.test(num)) {
    pointIndex = num.lastIndexOf('.');
    intPart = num.substring(0, pointIndex);
    pointPart = num.substring(pointIndex + 1, num.length);
    intPart = intPart + '';
    var re = /(-?\d+)(\d{3})/;

    while (intPart.length < 500 && re.test(intPart)) {
      intPart = intPart.replace(re, '$1,$2');
    }

    num = intPart + '.' + pointPart;
  } else {
    num = num + '';
    var _re = /(-?\d+)(\d{3})/;

    while (num.length < 500 && _re.test(num)) {
      num = num.replace(_re, '$1,$2');
    }
  }

  return num;
} // 精度处理


function formatDot(value) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var formatVal, dotSplit, val;
  val = (value || 0).toString();
  dotSplit = val.split('.');

  if (dotSplit.length > 2 || !value) {
    return value;
  }

  if (val.indexOf('.') > -1) {
    if (len == 0) {
      formatVal = dotSplit[0];
    } else {
      formatVal = val.substring(0, val.indexOf('.') + len + 1);
    }
  } else {
    formatVal = val;
  }

  return formatVal;
}

function addZero(num, scale) {
  if (num === '' || num === undefined || num === null) {
    return '';
  }

  if (scale > 0) {
    var start = String(num).split('.')[0];
    var end = String(num).split('.')[1];

    if (!end) {
      end = '';
    }

    var len = end.length;

    if (len < scale) {
      end = end.padEnd(scale, '0');
    }

    return start + '.' + end;
  } else {
    return num;
  }
}
/**
 * @description: 过滤掉符合某个属性值的数据
 * @param {type} 
 * @return: 
 */


function filterColumns() {
  var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var filterCondition = arguments.length > 1 ? arguments[1] : undefined;

  if (!filterCondition) {
    return columns;
  }

  return columns.filter(function (item) {
    var result = filterCondition(item);

    if (item.children && result) {
      item.children = filterColumns(item.children, filterCondition);
      return item.children.length;
    }

    return result;
  });
} //判断模板是否显示合计行

function getMetaIsTotal() {
  var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var isTotal = false; //模版是否配置可合计列

  Array.isArray(columns) && columns.forEach(function (item) {
    //便利判断模版中是否设置可合计列
    if (item.istotal) {
      isTotal = true;
    }
  });
  return isTotal;
} //用于excel 粘贴，批改整理数据

var excelPackageData = function excelPackageData(param) {
  var pasteContent = param.pasteContent,
      activeCell = param.activeCell,
      langJson = param.langJson,
      rows = param.rows,
      getRowOldValue = param.getRowOldValue,
      tableId = param.tableId;
  var rowIndex = activeCell.rowIndex,
      attrcode = activeCell.attrcode,
      column = activeCell.column,
      _activeCell$direction = activeCell.direction,
      direction = _activeCell$direction === void 0 ? 'down' : _activeCell$direction;
  var itemtype = column.itemtype,
      options = column.options,
      languageMeta = column.languageMeta,
      maxlength = column.maxlength,
      scale = column.scale;
  var changedrows = [];
  var newValue = [];
  var pasteData = [];
  var pasteLength = pasteContent.length;

  var _loop = function _loop(cellIndex) {
    var cell = pasteContent[cellIndex];

    if (isString(cell)) {
      cell = cell.trim();
    }

    if (isUndefined(cell)) {
      cell = '';
    }

    if (maxlength && cell.length > maxlength) {
      Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["toast"])({
        color: 'danger',
        title: langJson['table_tips'],
        content: "".concat(langJson['table_tips_content']).concat(maxlength)
      });
      return {
        v: void 0
      };
    }

    var currentRow = rows[direction === 'up' ? rowIndex - cellIndex : rowIndex + cellIndex];

    if (!currentRow) {
      currentRow = {
        rowid: String(new Date().getTime()).slice(-5) + Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["getSafeRandom"])().toString(12),
        status: 2,
        values: {}
      };
    }

    var row = JSON.parse(JSON.stringify(currentRow));
    var val = cell;

    if (!row.values[attrcode]) {
      row.values[attrcode] = {};
    } //当前单元格各项属性 value display...


    var cellprops = row.values[attrcode];
    var checkTimeTypes = ['datepicker', 'NCTZDatePickerStart', 'NCTZDatePickerEnd'];

    switch (true) {
      //switch switch_browser checkbox_switch
      case _config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]["boolean"].includes(itemtype):
        if (cell === 'Y' || cell === true) {
          val = true;
          cellprops.value = true;
        } else {
          val = false;
          cellprops.value = false;
        }

        break;

      case itemtype === 'timepicker':
        if (val && val.format) {
          val = val.format('hh:mm:ss');
          cellprops.value = val;
        }

        break;

      case itemtype === 'number':
        //todo校验字符串
        if (isString(cell)) {
          cell = cell.replace(/,/g, '');
        } // 当数值类型只输入一个'-'的时候就将它赋值成0


        if (cell === '-') {
          val = 0;
          cell = 0;
        }

        cellprops.value = cell;
        var reg = /^(-?\d+)(\.\d+)?$/; //数字，正数，负数，0，小数

        if (isString(cell) && isString(cell).length < 500 && !reg.test(cell)) {
          Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["toast"])({
            color: 'danger',
            title: langJson['table_tips'],
            content: "\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u8F93\u5165\u6B63\u786E\u6570\u5B57"
          });
          return {
            v: void 0
          };
        }

        break;

      case checkTimeTypes.includes(itemtype):
        // ctrl value  合法性校验
        if (Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["moment"])(val, 'YYYY-MM-DD').isValid() || Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["moment"])(val, 'YYYY-MM-DD HH:mm:ss').isValid()) {
          var temp = null;

          switch (itemtype) {
            case 'datepicker':
              // 普通日期 添加 当前时分秒
              temp = Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["moment"])(val, 'YYYY-MM-DD HH:mm:ss', true).isValid() ? val : "".concat(val, " ").concat(Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["moment"])().format('HH:mm:ss'));
              break;

            case 'NCTZDatePickerStart':
              // start add 00:00:00
              temp = Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["moment"])(val, 'YYYY-MM-DD HH:mm:ss', true).isValid() ? val : "".concat(val, " 00:00:00");
              break;

            case 'NCTZDatePickerEnd':
              // end add 23:59:59
              temp = Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["moment"])(val, 'YYYY-MM-DD HH:mm:ss', true).isValid() ? val : "".concat(val, " 23:59:59");
              break;
          }

          if (Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["isDongba"])()) {
            cell = val = temp;
          } else {
            cell = val = Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["LocalToDongbaTime"])(temp);
          }

          cellprops.value = cell;
        } else {
          // ctrl  日期不合法 
          Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["toast"])({
            color: 'danger',
            title: langJson['table_tips'],
            content: " \u7C98\u8D34\u503C ".concat(val, " \u65E5\u671F\u683C\u5F0F\u4E0D\u5408\u6CD5")
          });
          return {
            v: void 0
          };
        }

        break;

      case itemtype === 'select':
        options.map(function (option) {
          if (option.display == cell) {
            cellprops.value = option.value;
            cellprops.display = cell;
            val = option.value;
          }
        });
        break;

      case itemtype === 'residtxt':
        var LangCode = Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["getLangCode"])();
        var loginLang = languageMeta.filter(function (i) {
          return i.languageCode == LangCode;
        });
        var mul = loginLang[0].index === '1' ? '' : loginLang[0].index;

        if (!row.values[attrcode + mul]) {
          row.values[attrcode + mul] = {};
        }

        row.values[attrcode + mul].value = cell;
        row.values[attrcode + mul].index = mul;
        break;

      case itemtype === 'refer':
        cellprops.value = val;
        cellprops.display = '';
        break;

      default:
        cellprops.value = cell;
    } //把行状态改为修改


    if (row.status == '0') {
      row.status = '1';
    }

    pasteData.push(val);
    var oldValue = getRowOldValue ? getRowOldValue(row.rowid, attrcode) : null;
    var scaleData = cellprops.scale || scale || -1;
    changedrows.push({
      rowid: row.rowid,
      newvalue: {
        value: val
      },
      oldvalue: {
        value: oldValue ? itemtype === 'number' ? formatAcuracy(oldValue, scaleData) : oldValue : ''
      }
    });
    newValue.push(row);
  };

  for (var cellIndex = 0; cellIndex < pasteLength; cellIndex++) {
    var _ret = _loop(cellIndex);

    if (_typeof(_ret) === "object") return _ret.v;
  }

  return {
    areaCode: tableId,
    column: column,
    changedrows: changedrows,
    newValue: newValue,
    pasteData: pasteData,
    currentIndex: rowIndex,
    allData: rows
  };
}; //用于缓存分页数据

function setPageSizeStorage(meta, moduleId, num) {
  var pageSizeStore = Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["getGlobalStorage"])('localStorage', '_ncc_pagesize_store');

  if (pageSizeStore) {
    pageSizeStore = JSON.parse(pageSizeStore);
  } else {
    pageSizeStore = {};
  }

  var currentKey = getPageSizeStoreKey(meta, moduleId);

  if (currentKey) {
    pageSizeStore[currentKey] = num;
    Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["setGlobalStorage"])('localStorage', '_ncc_pagesize_store', JSON.stringify(pageSizeStore));
  }
}
function getPageSizeStorage(meta, moduleId) {
  var currentKey = getPageSizeStoreKey(meta, moduleId);

  if (currentKey) {
    var pageSizeStore = Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["getGlobalStorage"])('localStorage', '_ncc_pagesize_store');

    if (pageSizeStore) {
      pageSizeStore = JSON.parse(pageSizeStore);
      return pageSizeStore[currentKey] || '100';
    }
  }

  return '100';
}

function getPageSizeStoreKey(meta, moduleId) {
  var key = '';

  if (meta && meta[moduleId]) {
    var appcode = meta[moduleId].appcode || _platform_api__WEBPACK_IMPORTED_MODULE_1__["pageTo"].getAppCode();
    var pagecode = meta[moduleId].pagecode || _platform_api__WEBPACK_IMPORTED_MODULE_1__["pageTo"].getPageCode();
    var pageid = meta[moduleId].pageid || meta.pageid;
    var userDataJSON = Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["getGlobalStorage"])('localStorage', "STOREFORINFODATA");
    var userData = userDataJSON && JSON.parse(userDataJSON);
    var userid = userData && userData.userId;

    if (appcode && pagecode && pageid && userid) {
      key = appcode + '-' + pagecode + '-' + pageid + '-' + userid;
    }
  }

  return key;
}
/**
 * 数据处理
 * @param {*} IType 
 * @param {*} display 
 * @param {*} value 
 * @param {*} scale 
 * @param {*} attrcode 
 * @param {*} languageMeta 
 * @param {*} values 
 * @param {*} datatype 
 * @param {*} options 
 * @param {*} multiple 
 * @param {*} langJson 
 */


function handleBrowseData(IType, display, value, scale, attrcode, languageMeta, values, datatype, options, multiple, langJson) {
  // TODO 数据格式的转换
  // 特殊处理下逻辑型  枚举类型
  if (datatype === "32" && ["select", "checkbox", "radio"].includes(IType) && isArray(options) && !display && value !== null && value !== undefined) {
    if (IType === "checkbox" || multiple) {
      var displayList = options.filter(function (item) {
        return value.includes(item.value);
      }).map(function (option) {
        return option.display;
      });
      return displayList.join(",");
    } else {
      var _ref = options.filter(function (item) {
        return item.value == value;
      })[0] || {},
          _display = _ref.display;

      return _display;
    }
  }

  switch (true) {
    case _config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].displayTypes.includes(IType):
      return display || value;

    case _config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]["boolean"].includes(IType):
      return value == "Y" || value == true ? langJson["table_yes"] : langJson["table_no"];

    case _config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].timeTypes.includes(IType):
      if (IType === "datetimepicker") {
        return Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["formatDatetime"])(changeTime(value, "YYYY-MM-DD HH:mm:ss"), 'datetime');
      } else if (IType === "timepicker") {
        return Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["formatDatetime"])(value, 'time');
      } else if (IType === "datePickerNoTimeZone") {
        return Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["formatDatetime"])(value, 'date');
      }

      return Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["formatDatetime"])(changeTime(value), 'date');

    case IType === "label":
      return isNullOrVoid(display) ? value : display || value;

    case IType === "number":
      // 表格浏览态加了四舍五入
      return Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["formatNumber"])(formatAcuracy(value, scale), true);

    case IType === "password":
      // 密码框浏览态显示***
      return value && getRandomPassword();

    case IType === "residtxt":
      // 对多语的处理
      var LangCode = Object(_platform_api__WEBPACK_IMPORTED_MODULE_1__["getLangCode"])();
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

    default:
      return isNullOrVoid(display) ? value : display || value;
  }
}
/*
 * @method   检测浏览器是否是IE浏览器
 */

function isIE() {
  if (!!window.ActiveXObject || "ActiveXObject" in window) return true;else return false;
}

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


/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

/******/ });
});