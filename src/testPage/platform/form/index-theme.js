(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("react-dom"), require("@platform/template/index"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@platform/api/index", "@platform/base/index", "react-dom", "@platform/template/index"], factory);
	else if(typeof exports === 'object')
		exports["@platform/form/index"] = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("react-dom"), require("@platform/template/index"));
	else
		root["@platform/form/index"] = factory(root["React"], root["@platform/api/index"], root["@platform/base/index"], root["ReactDOM"], root["@platform/template/index"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1920);
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

/***/ 1803:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","var":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(0);
var external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(5);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external "@platform/template/index"
var index_ = __webpack_require__(12);

// CONCATENATED MODULE: ./src/platform/components/Form/store.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



function merge(target) {
  return target;
}

function setInitialProperty(target, prop, value) {
  !target && (target = {});

  if (!target.hasOwnProperty(prop)) {
    target[prop] = value;
  }

  return value;
}

var FormStore = /*#__PURE__*/function (_BaseStore) {
  _inherits(FormStore, _BaseStore);

  var _super = _createSuper(FormStore);

  function FormStore() {
    var _this;

    _classCallCheck(this, FormStore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.store = {};
    _this.items = '_FORM_ITEMS_';
    _this.layout = Symbol('form layout');
    _this.status = Symbol('form status');

    _this.getHooks = function () {
      return {
        getItemValue: _this.getItemValue,
        getAllFormValue: _this.getAllFormValue,
        setItemValue: _this.setItemValue,
        setAllFormValue: _this.setAllFormValue,
        setCtx: _this.setCtx,
        reset: _this.reset,
        setWrapper: _this.setWrapper,
        getStatus: _this.getStatus,
        setStatus: _this.setStatus,
        closeArea: _this.closeArea,
        openArea: _this.openArea,
        emptyAllFormValue: _this.emptyAllFormValue,
        setMeta: _this.setMeta,
        cancel: _this.cancel,
        countFormWidth: _this.countFormWidth,
        setItemAttribute: _this.setItemAttribute,
        getItemAttribute: _this.getItemAttribute,
        isCheckNow: _this.isCheckNow,
        replaceItem: _this.replaceItem,
        getMetaItems: _this.getMetaItems,
        getOldValue: _this.getOldValue,
        setOldValue: _this.setOldValue,
        forceUpdate: _this.forceUpdate,
        setAreaVisible: _this.setAreaVisible,
        getAreaVisible: _this.getAreaVisible,
        // 内部使用方法
        getInnerHooks: _this.getInnerHooks
      };
    };

    _this.getInnerHooks = function () {
      return {
        setInitialValues: _this.setInitialValues,
        getItem: _this.getItem,
        getStore: _this.getStore,
        setStore: _this.setStore,
        getSingleForm: _this.getSingleForm,
        getFormItem: _this.getFormItem,
        getAllFormItem: _this.getAllFormItem,
        getFormRelations: _this.getFormRelations,
        getFormList: _this.getFormList,
        getLayout: _this.getLayout,
        setLayout: _this.setLayout,
        getFormTabs: _this.getFormTabs,
        setFormTabs: _this.setFormTabs,
        countFormWidth: _this.countFormWidth,
        setJson: _this.setJson,
        getJson: _this.getJson,
        getReplaceItem: _this.getReplaceItem,
        initMeta: _this.initMeta
      };
    };

    _this.getStore = function (path) {
      return _this.get(path);
    };

    _this.setStore = function (path, value) {
      var shouldUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var newValue = _this.set(path, value);

      shouldUpdate && _this.forceUpdate();
      return newValue;
    };

    _this.setInitialValues = function (meta, formId) {
      // await Promise.resolve(() => {});
      if (!meta || Object.keys(meta).length === 0) return;
      var formrelation = meta.formrelation,
          formassociatedrelation = meta.formassociatedrelation,
          pageid = meta.pageid;
      var isTabsForm = false;
      var arr = [formId],
          tabsId = [formId],
          formRelation = {},
          formitems = {},
          store = {}; // 存在多页签表单时  进行页签数据合并

      if (formassociatedrelation && formassociatedrelation.hasOwnProperty(formId) && Array.isArray(formassociatedrelation[formId].formtabs)) {
        tabsId = formassociatedrelation[formId].formtabs;
        arr = tabsId;
        isTabsForm = true;
      } // 存在子表时 进行子表数据合并


      if (formrelation) {
        if (isTabsForm) {
          var result = []; // 遍历主表，找子表

          arr.map(function (item) {
            result.push(item);

            if (Array.isArray(formrelation[item])) {
              result = result.concat(formrelation[item]);
              formRelation[item] = formrelation[item];
            }
          });
          arr = result;
        } else {
          if (Array.isArray(formrelation[formId])) {
            arr = arr.concat(formrelation[formId]);
          }
        }
      }

      arr.forEach(function (item) {
        // 判断 moduletype 为 form 再进行数据转换
        if (meta[item].moduletype === 'form') {
          var _this$getStore, _this$getStore2;

          var _meta$item = meta[item],
              items = _meta$item.items,
              status = _meta$item.status,
              isunfold = _meta$item.isunfold,
              areaVisible = _meta$item.areaVisible,
              others = _objectWithoutProperties(_meta$item, ["items", "status", "isunfold", "areaVisible"]); // 初始化 status


          if (formId === item) {
            // 已经用过API设置 status 不再取meta上status状态
            if (!store[_this.status]) {
              store[_this.status] = _this.getStore([_this.status]) || status || 'browse';
            }
          }

          store[item] = _objectSpread(_objectSpread({}, others), {}, {
            items: [],
            // isunfold、areaVisible也可以通过api设值
            isunfold: (_this$getStore = _this.getStore([item, '__dirty__'])) !== null && _this$getStore !== void 0 && _this$getStore.hasOwnProperty('isunfold') ? _this.getStore([item, 'isunfold']) : isunfold,
            areaVisible: (_this$getStore2 = _this.getStore([item, '__dirty__'])) !== null && _this$getStore2 !== void 0 && _this$getStore2.hasOwnProperty('areaVisible') ? _this.getStore([item, 'areaVisible']) : areaVisible,
            __dirty__: _this.getStore([item, '__dirty__'])
          });

          var itemsFromStore = _this.getStore([_this.items]);

          items.forEach(function (formItem) {
            formItem['belongTo'] = item; // 如果已经进行过出初始化 从新setMeta 不会初始化value 其他属性根据meta生成
            // 兼容情况 已经存在fieldvalue 说明已经在上次setmeta时进行了fieldvalue初始化、为了兼容不在进行初始化、正常情况应该业务组每次setmeta都根据meta生成初始值fieldvalue

            if (!_this.getStore([_this.items, formItem.attrcode, 'fieldValue'])) {
              //设置默认值
              var initialvalue = null;

              if (store[_this.status] === 'add') {
                initialvalue = formItem.initialvalue || null;
              }

              if (formItem.itemtype === 'checkbox_switch' || formItem.itemtype === 'switch') {
                initialvalue = initialvalue || {
                  display: (_this.getStore(['json']) || {})['page-form-0004'],
                  value: false
                };
              } else if (formItem.itemtype === 'switch_browse') {
                initialvalue = initialvalue || {
                  value: false
                };
              } else {
                initialvalue = initialvalue || {
                  display: null,
                  value: null
                };
              }

              formItem['fieldValue'] = initialvalue;
              formItem['formOldValues'] = initialvalue.value ? {
                value: initialvalue.value
              } : {
                value: null
              };
              formItem['formBack'] = initialvalue; //多语字段初始化

              if (formItem.itemtype === 'residtxt' && Array.isArray(formItem.languageMeta)) {
                formItem.languageMeta.map(function (i) {
                  var index = i.index == '1' ? '' : i.index;
                  return formItem.attrcode + index;
                }).forEach(function (i) {
                  if (i !== formItem.attrcode) {
                    formitems[i] = {
                      fieldValue: {
                        display: '',
                        value: ''
                      }
                    };
                  }
                });
              }
            } else {
              //字段存在 不需要重新初始fieldvalue 
              formItem['fieldValue'] = _this.getStore([_this.items])[formItem.attrcode] && _this.getStore([_this.items])[formItem.attrcode]['fieldValue'];
            } // disabled visible required verify要通过api设值。


            var disabled = formItem.disabled,
                visible = formItem.visible,
                required = formItem.required,
                verify = formItem.verify,
                propsToPass = _objectWithoutProperties(formItem, ["disabled", "visible", "required", "verify"]);

            formitems[formItem.attrcode] = _objectSpread(_objectSpread({
              __origin__: {}
            }, itemsFromStore === null || itemsFromStore === void 0 ? void 0 : itemsFromStore[formItem.attrcode]), propsToPass);
            ['disabled', 'visible', 'required', 'verify'].forEach(function (attribute) {
              if (_this.getStore([_this.items, formItem.attrcode, '__dirty__', attribute])) {
                var _itemsFromStore$formI;

                // 取store
                formitems[formItem.attrcode][attribute] = itemsFromStore === null || itemsFromStore === void 0 ? void 0 : (_itemsFromStore$formI = itemsFromStore[formItem.attrcode]) === null || _itemsFromStore$formI === void 0 ? void 0 : _itemsFromStore$formI[attribute];
              } else {
                // 取meta
                formitems[formItem.attrcode][attribute] = formItem[attribute];
              }

              formitems[formItem.attrcode]['__origin__'][attribute] = formItem[attribute];
            }); // 校验字段

            formItem['verify'] = true;
            store[item].items.push(formItem.attrcode);
          });
        }
      }); // 保存上次容器存值 假如存在就替换

      store[_this.items] = _objectSpread(_objectSpread({}, _this.getStore([_this.items]) || {}), formitems);
      store[_this.layout] = _this.getStore([_this.layout]) || {
        width: 50,
        column: 2
      }; // 所有表ID

      store.formList = arr; // 页签表ID

      store.tabsId = tabsId; // 主表ID

      store.mainId = formId; // 主子表关系

      store.formRelation = formRelation; // 页签选中

      store.activeTab = tabsId[0]; // 是否多页签表单

      store.isTabsForm = isTabsForm; // pageid

      store.pageid = pageid;
      _this.store = Object.assign(_this.store, store);
      _this.hasRender = true;
      console.log("Form ".concat(formId, "'s store: "), _this.store);
    };

    _this.getStatus = function () {
      return _this.get([_this.status]);
    };

    _this.setStatus = function (value) {
      var status = _this.setStore([_this.status], value);

      return status;
    };

    _this.getLayout = function () {
      return _this.get([_this.layout]);
    };

    _this.setLayout = function (value) {
      var layout = _this.setStore([_this.layout], value);

      return layout;
    };

    _this.getSingleForm = function (id) {
      return _this.get([id, 'items']);
    };

    _this.getFormItem = function (name) {
      return _this.get([_this.items, name]);
    };

    _this.getAllFormItem = function () {
      return _this.get([_this.items]);
    };

    _this.getFormRelations = function () {
      return _this.get('formRelation');
    };

    _this.getFormList = function () {
      return _this.get('formList');
    };

    _this.setFormTabs = function (id) {
      var activeTab = _this.setStore(['activeTab'], id);

      return activeTab;
    };

    _this.getFormTabs = function () {
      return _this.get(['activeTab']);
    };

    _this.countFormWidth = function (e, width) {
      if (!width) {
        var name = _this.get(['mainId']);

        var ele = document.getElementById(name);

        if (ele) {
          width = ele.offsetWidth;
        }
      } //优化效率：默认是4列，宽度在4列范围内不再渲染


      var formItemInfo = {
        width: 50,
        column: 2
      };

      if (width) {
        var formItemWidth = 50;
        var column = 2;

        if (width < 600) {
          formItemWidth = 100;
          column = 1;
        }

        if (width >= 600 && width < 900) {
          formItemWidth = 50;
          column = 2;
        }

        if (width >= 900 && width < 1230) {
          formItemWidth = 33.333333;
          column = 3;
        }

        if (width >= 1230 && width < 1820) {
          formItemWidth = 25;
          column = 4;
        }

        if (width >= 1820) {
          formItemWidth = 20;
          column = 5;
        }

        formItemInfo.width = formItemWidth;
        formItemInfo.column = column;

        _this.setLayout(formItemInfo);
      }
    };

    _this.setJson = function (json) {
      _this.setStore(['json'], json);
    };

    _this.getJson = function () {
      return _this.get(['json']) || {};
    };

    _this.getItemValue = function (name, type) {
      var value; // 兼容处理多语字段

      if (type) {
        var languageMeta = _this.get([_this.items, name, 'languageMeta']); // 多语字段 兼容提供对象


        if (languageMeta) {
          value = {};
          languageMeta.forEach(function (item) {
            var index = item.index === '1' ? '' : item.index;
            value[name + index] = _this.get([_this.items, name + index, 'fieldValue']) || {
              display: null,
              value: null
            };
          });
        } else {
          value = _this.get([_this.items, name, 'fieldValue']) || {
            display: null,
            value: null
          };
        }
      } else {
        value = _this.get([_this.items, name, 'fieldValue']) || {
          display: null,
          value: null
        };
      }

      return value;
    };

    _this.setItemValue = function (name, value) {
      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          cancel = _ref.cancel,
          _ref$inner = _ref.inner,
          inner = _ref$inner === void 0 ? false : _ref$inner;

      // const prevStore = this.store;
      // this.prevStore = prevStore;
      var oldValue = _this.getStore([_this.items, name, 'fieldValue']);

      var newStore = _this.setStore([_this.items, name, 'fieldValue'], value, false);

      if (!inner) {
        _this.setOldValue(name, oldValue);

        if (!cancel) {
          _this.setStore([_this.items, name, 'formBack'], value, false);
        }
      }

      _this.updateItem([name]);

      return newStore;
    };

    _this.getOldValue = function (name) {
      return _this.getStore([_this.items, name, 'formOldValues']);
    };

    _this.setOldValue = function (name, oldValue) {
      _this.setStore([_this.items, name, 'formOldValues'], oldValue, false);
    };

    _this.setItemAttribute = function (name, attribute, value) {
      var shouldUpdate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (attribute && _typeof(attribute) === 'object') {
        // 批量设置
        var values = attribute;
        attribute = name;

        for (var _i = 0, _Object$keys = Object.keys(values); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];

          _this.setItemAttribute(key, attribute, values[key], false);
        }
      } else {
        // 设置单个字段
        if (_this.get([_this.items, name])) {
          _this.setStore([_this.items, name, attribute], value, false);

          _this.setStore([_this.items, name, '__dirty__', attribute], true, false);
        } else {
          console.warn('form' + name + '不存在');
        }
      }

      shouldUpdate && _this.forceUpdate();
    };

    _this.getItemAttribute = function (name, attribute) {
      return _this.get([_this.items, name, attribute]);
    };

    _this.setAllFormValue = function (data, copyFlag, emptyOldVal, setOldValueExceptKey, callback) {
      for (var _i2 = 0, _Object$entries = Object.entries(data); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            attrcode = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        // 编辑关联项用setOldValueExceptKey，这个字段不设旧值
        _this.setItemValue(attrcode, value, {
          cancel: false,
          inner: attrcode === setOldValueExceptKey
        }); // const prevStore = this.store;
        // this.prevStore = prevStore;
        // this.setStore([this.items, attrcode, 'fieldValue'], value, false);

      }

      _this.forceUpdate(callback);
    };

    _this.getAllFormValue = function () {
      var res = {};

      for (var _i3 = 0, _Object$entries2 = Object.entries(_this.get([_this.items]) || {}); _i3 < _Object$entries2.length; _i3++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
            attrcode = _Object$entries2$_i[0],
            obj = _Object$entries2$_i[1];

        if (attrcode) {
          res[attrcode] = obj['fieldValue'] || {
            display: null,
            value: null
          };
        }
      }

      return res;
    };

    _this.openArea = function (name) {
      var shouldUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var newValue = _this.setStore([name, 'isunfold'], true, shouldUpdate);

      _this.setStore([name, '__dirty__', 'isunfold'], true, false);

      return newValue;
    };

    _this.closeArea = function (name) {
      var shouldUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var newValue = _this.setStore([name, 'isunfold'], false, shouldUpdate);

      _this.setStore([name, '__dirty__', 'isunfold'], false, false);

      return newValue;
    };

    _this.setAreaVisible = function (moduleId, visible) {
      _this.setStore([moduleId, 'areaVisible'], visible, true);

      _this.setStore([moduleId, '__dirty__', 'areaVisible'], true, false);
    };

    _this.getAreaVisible = function (moduleId) {
      return _this.getStore([moduleId, 'areaVisible']) !== false;
    };

    _this.isCheckNow = function () {
      var firstErrorModuleId = '',
          firstErrorTab = '',
          tabsId = _this.getStore('tabsId'),
          formRelation = _this.getStore('formRelation'),
          itemsMap = _this.getStore([_this.items]),
          requiredItems = [],
          regItems = [],
          maxItems = [],
          switchfalse = ['switch', 'switch_browse', 'radio', 'checkbox_switch'],
          lengthTypes = ['input', 'number', 'textarea'],
          isCheckNowItems = [],
          errorGroup = new Set(),
          hasError = false; // 变量items 校验 不根据meta校验 meta中字段存在问题


      (_this.getStore(['formList']) || []).forEach(function (formId) {
        if (_this.getAreaVisible(formId)) {
          isCheckNowItems = isCheckNowItems.concat(_this.getStore([formId])['items'] || []);
        }
      });
      isCheckNowItems.forEach(function (item) {
        var currentItem = itemsMap[item];
        var label = currentItem.label,
            required = currentItem.required,
            visible = currentItem.visible,
            belongTo = currentItem.belongTo,
            reg = currentItem.reg,
            fieldValue = currentItem.fieldValue,
            itemtype = currentItem.itemtype,
            maxlength = currentItem.maxlength;

        if (visible) {
          var value = fieldValue === null || fieldValue === void 0 ? void 0 : fieldValue.value;
          var error = false;

          if (required && [null, undefined, ''].includes(value) && !switchfalse.includes(itemtype)) {
            error = true;
            requiredItems.push(label);
          }

          if (value && reg && !reg.test(value)) {
            error = true;
            regItems.push(label);
          }

          if (maxlength && lengthTypes.includes(itemtype) && value && String(value).length > maxlength) {
            error = true;
            maxItems.push(label);
          }

          _this.setStore([_this.items, item, 'verify'], !error, false);

          if (error) {
            // 展开有错误的分组，并定位到第一个含有错误字段的页签
            if (!firstErrorModuleId) {
              firstErrorModuleId = belongTo;
            }

            errorGroup.add(belongTo);
          }
        }
      }); // 找到第一个含有错误字段的页签

      if (tabsId.includes(firstErrorModuleId)) {
        firstErrorTab = firstErrorModuleId;
      } else {
        firstErrorTab = tabsId.find(function (tabId) {
          return Array.isArray(formRelation[tabId]) && formRelation[tabId].includes(firstErrorModuleId);
        });
      }

      _toConsumableArray(errorGroup).forEach(function (moduleId) {
        hasError = true;

        _this.openArea(moduleId, false);
      });

      firstErrorTab && _this.setStore('activeTab', firstErrorTab, false);

      _this.forceUpdate();

      return {
        requiredItems: requiredItems,
        regItems: regItems,
        maxItems: maxItems,
        hasError: hasError
      };
    };

    _this.cancel = function () {
      var items = _this.get([_this.items]) || {};

      for (var _i4 = 0, _Object$keys2 = Object.keys(items); _i4 < _Object$keys2.length; _i4++) {
        var key = _Object$keys2[_i4];

        _this.setStore([_this.items, key, 'fieldValue'], _this.get([_this.items, key, 'formBack']), false);

        _this.setStore([_this.items, key, 'verify'], true, false);
      }

      _this.setStore([_this.status], 'browse', false);

      _this.forceUpdate();
    };

    _this.emptyAllFormValue = function () {
      var exceptArr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var cancel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var switchFalse = ['switch', 'switch_browse', 'checkbox_switch'];

      var itemsMap = _this.get([_this.items]);

      itemsMap && Object.keys(itemsMap).forEach(function (item) {
        var initialvalue = _this.getStore([_this.items, item, 'initialvalue']);

        if (!exceptArr.includes(item)) {
          if (switchFalse.includes(itemsMap[item].itemtype)) {
            _this.setStore([_this.items, item, 'fieldValue'], initialvalue ? initialvalue : {
              value: false,
              display: '否'
            }, false);
          } else {
            // if(itemsMap[item].itemtype == 'residtxt'){
            //     this.setStore([this.items, item, 'fieldValue'], {
            //         value: {},
            //         display: null,
            //     }, false);
            // }else {
            _this.setStore([_this.items, item, 'fieldValue'], initialvalue ? initialvalue : {
              value: null,
              display: null
            }, false); // }

          }

          if (cancel) {
            _this.setStore([_this.items, item, 'formBack'], {
              value: null,
              display: null
            }, false);
          }
        }
      });

      _this.forceUpdate(); // console.log(this.store, this)

    };

    _this.reset = function () {
      _this.store = {}; // this.wrapper && this.wrapper.refresh();
    };

    _this.getCtx = function () {};

    _this.setCtx = function (ctx) {
      _this.ctx = ctx;
    };

    _this.setMeta = function (meta, id) {
      var shouldUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      console.log("Form ".concat(id, "'s meta: "), meta); // this.setStore(['meta'], meta, false)

      var currentID = id || _this.getStore('mainId');

      _this.setInitialValues(meta, currentID);

      shouldUpdate && _this.forceUpdate();
    };

    _this.replaceItem = function (attrcode, itemDom) {
      _this.setStore(['replaceItem', attrcode], itemDom);
    };

    _this.getReplaceItem = function (attrcode) {
      return _this.getStore(['replaceItem', attrcode]);
    };

    _this.setWrapper = function (ctx) {
      _this.wrapper = ctx;
    };

    _this.getMetaItems = function (id) {
      var items = _this.getStore([id]) && _this.getStore([id])['items'] || [];
      var res = items.map(function (item) {
        var _this$getStore3 = _this.getStore([_this.items, item]),
            __dirty__ = _this$getStore3.__dirty__,
            __origin__ = _this$getStore3.__origin__,
            itemFromStore = _objectWithoutProperties(_this$getStore3, ["__dirty__", "__origin__"]);

        var itemFromOrigin = ['disabled', 'visible', 'required', 'verify'].reduce(function (o, attribute) {
          o[attribute] = _this.getStore([_this.items, item, '__origin__', attribute]);
          return o;
        }, {});
        return _objectSpread(_objectSpread({}, itemFromStore), itemFromOrigin);
      });
      return res;
    };

    _this.initMeta = function () {
      // 暂时这样处理
      _this.store = {};

      _this.forceUpdate();
    };

    return _this;
  }

  return FormStore;
}(index_["BaseStore"]);

var useForm = Object(index_["hookFactory"])(FormStore);
// CONCATENATED MODULE: ./src/platform/components/Form/wrapper.js
function wrapper_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { wrapper_typeof = function _typeof(obj) { return typeof obj; }; } else { wrapper_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return wrapper_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function wrapper_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function wrapper_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) wrapper_setPrototypeOf(subClass, superClass); }

function wrapper_setPrototypeOf(o, p) { wrapper_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return wrapper_setPrototypeOf(o, p); }

function wrapper_createSuper(Derived) { var hasNativeReflectConstruct = wrapper_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = wrapper_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = wrapper_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return wrapper_possibleConstructorReturn(this, result); }; }

function wrapper_possibleConstructorReturn(self, call) { if (call && (wrapper_typeof(call) === "object" || typeof call === "function")) { return call; } return wrapper_assertThisInitialized(self); }

function wrapper_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function wrapper_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function wrapper_getPrototypeOf(o) { wrapper_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return wrapper_getPrototypeOf(o); }



function wrapperComponent(C) {
  var WrapperComponent = /*#__PURE__*/function (_Component) {
    wrapper_inherits(WrapperComponent, _Component);

    var _super = wrapper_createSuper(WrapperComponent);

    function WrapperComponent(props) {
      var _this;

      wrapper_classCallCheck(this, WrapperComponent);

      _this = _super.call(this, props);

      _this.refresh = function () {
        _this.setState(function (_ref) {
          var resetCount = _ref.resetCount;
          return {
            resetCount: resetCount + 1
          };
        });
      };

      _this.state = {
        resetCount: 0
      };

      if (_this.props.store === null) {
        // 暂时通过error 提醒业务组、 稳定后可去掉
        throw Error("\u6B63\u5728\u521B\u5EFAformID\u4E3A".concat(_this.props.name, "\u7684\u8868\u5355, \u8FD8\u672A\u901A\u8FC7use.form\u6CE8\u518C,\u8BF7\u5148\u6CE8\u518C\u6B64ID"));
      } else {
        _this.props.store.setWrapper(wrapper_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(WrapperComponent, [{
      key: "render",
      value: function render() {
        var resetCount = this.state.resetCount;
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(C, _extends({}, this.props, {
          key: resetCount
        }));
      }
    }]);

    return WrapperComponent;
  }(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);

  return WrapperComponent;
}

/* harmony default export */ var wrapper = (wrapperComponent);
// EXTERNAL MODULE: external {"root":"ReactDOM","var":"ReactDOM","commonjs":"react-dom","commonjs2":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_ = __webpack_require__(6);

// CONCATENATED MODULE: ./src/platform/components/Form/formContent.js

var FormContent = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["createContext"]();
/* harmony default export */ var formContent = (FormContent);
// EXTERNAL MODULE: external "@platform/base/index"
var base_index_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/platform/components/Form/utils.js
/*
 * @Descripttion: 
 * @version: 
 * @Author: bbq
 * @Date: 2020-08-23 16:13:06
 * @LastEditors: bbq
 * @LastEditTime: 2020-09-01 20:31:12
 */

/**
 *  enterkey使用
 * @desc 现在attrCode 名称中有 xxx.xx 的情况导致 查询dom 元素时 找不到的情况
 * @resolve 如果attrCode中存在.  xxx.xx -> xxx_xx
 * @param name
 * @return name
 */
function processCodeClassName(name) {
  return name.indexOf('.') === -1 ? name : name.replace(/\./g, '_');
} //在form组件的state中获取元素是否可见 enterkey使用

function getVisibleStatusInStates(_ref) {
  var visibleState = _ref.visibleState,
      moduleId = _ref.moduleId,
      attrCode = _ref.attrCode;

  if (visibleState[moduleId]) {
    return visibleState[moduleId][attrCode] === false;
  } else {
    return visibleState[attrCode] === false;
  }
} //  enterkey使用

function itemIsDisable(disableState, item) {
  var attrcode = item.attrcode;
  if (disableState[attrcode] !== true) return false;
  return disableState[attrcode] === true || item.disabled === true;
} //  enterkey使用

function itemIsVisible(visibleState, item, moduleId) {
  var attrcode = item.attrcode;
  return getVisibleStatusInStates({
    visibleState: visibleState,
    moduleId: moduleId,
    attrCode: attrcode
  }) || item.visible === false;
}
/**
 * 给编辑前使用
 * @param fields {array} 所有字段
 * @param disableFields {object} 不可聚焦啊字段
 * @param currentItem {object} 当前字段
 * @return {object}
 */

function findFocusItem(fields, disableFields, currentItem) {
  var next = '',
      prev = '';
  fields.forEach(function (item, index) {
    if (item == currentItem.attrcode) {
      var nextField = fields[index + 1];
      var prevField = fields[index - 1];
      next = disableFields[nextField] === true ? findNextFocusItem(fields.slice(index + 1), disableFields) : nextField;
      prev = disableFields[prevField] === true ? findPrevFocusItem(fields.slice(0, index - 1), disableFields) : prevField;
    }
  });
  return {
    next: next,
    prev: prev
  };
}

function findNextFocusItem(fields, disableFields) {
  return fields.find(function (item) {
    return disableFields[item] !== true;
  });
}

function findPrevFocusItem(fields, disableFields) {
  return fields.reverse().find(function (item) {
    return disableFields[item] !== true;
  });
}
// EXTERNAL MODULE: external "@platform/api/index"
var api_index_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/platform/components/Form/field.js
function field_extends() { field_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return field_extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function field_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function field_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { field_ownKeys(Object(source), true).forEach(function (key) { field_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { field_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function field_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function field_toConsumableArray(arr) { return field_arrayWithoutHoles(arr) || field_iterableToArray(arr) || field_unsupportedIterableToArray(arr) || field_nonIterableSpread(); }

function field_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function field_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return field_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return field_arrayLikeToArray(o, minLen); }

function field_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function field_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return field_arrayLikeToArray(arr); }

function field_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 * @Descripttion: 
 * @version: 
 * @Author: wanglongx
 * @Date: 2020-06-05 09:35:24
 * @LastEditors: bbq
 * @LastEditTime: 2021-02-20 10:24:20
 */






 // IM refer refpath

var IMpath = ['uap/refer/riart/userDefaultRefer/index', 'uapbd/refer/psninfo/PsndocRiartTreeGridRef/index', 'uap/refer/riart/userAllTableRef/index', 'uapbd/refer/psninfo/PsndocTreeGridRef/index'];

function Filed(props) {
  var label = props.label,
      attrcode = props.attrcode,
      width = props.width,
      leftSpaceCol = props.leftSpaceCol,
      isnextrow = props.isnextrow,
      singleWidth = props.singleWidth,
      required = props.required,
      itemtype = props.itemtype,
      verify = props.verify,
      errorMsg = props.errorMsg,
      errormessage = props.errormessage,
      languageMeta = props.languageMeta,
      singleFormCode = props.singleFormCode,
      hyperlinkflag = props.hyperlinkflag,
      renderStatus = props.renderStatus,
      refpath = props.refpath,
      color = props.color,
      render = props.render,
      fastToNext = props.fastToNext,
      canBeEditedWhenBrowse = props.canBeEditedWhenBrowse,
      maxlength = props.maxlength;

  var _useContext = Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["useContext"])(formContent),
      areaId = _useContext.areaId,
      form = _useContext.form,
      _onAfterEvent = _useContext.onAfterEvent,
      onBeforeEvent = _useContext.onBeforeEvent,
      _useContext$config = _useContext.config,
      config = _useContext$config === void 0 ? {} : _useContext$config;

  var getItemValue = form.getItemValue,
      setItemValue = form.setItemValue,
      getStatus = form.getStatus,
      getInnerHooks = form.getInnerHooks,
      getAllFormValue = form.getAllFormValue,
      setOldValue = form.setOldValue;

  var _getInnerHooks = getInnerHooks(),
      getJson = _getInnerHooks.getJson,
      getReplaceItem = _getInnerHooks.getReplaceItem,
      getStore = _getInnerHooks.getStore;

  var status = getStatus();
  var json = getJson();
  var realBrowse = !['switch_browse', 'attachment'].includes(itemtype) && status === 'browse' && !canBeEditedWhenBrowse;
  var leftWidth = 0;

  if (isnextrow) {
    // 折行
    leftWidth = Number(leftSpaceCol) * singleWidth;
  }

  var colon = '';

  if (label && realBrowse) {
    colon = ':';
  }

  if (verify === false) {
    if (realBrowse) {
      errorMsg = null;
    } else {
      var checkModalVerify = field_toConsumableArray(document.querySelectorAll('.refer-pop-window ')).filter(function (e) {
        return e.style.display === 'flex';
      });

      if (checkModalVerify.length == 0) {
        //弹出参照时不校验
        errorMsg = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          style: {
            color: 'red',
            fontSize: '10px'
          },
          className: "input-error-message"
        }, errormessage || json['page-form-0008']);
      }
    }
  } // 替换组件 


  props.renderItem = function (_ref) {
    var isEdit = _ref.isEdit;

    if (isEdit) {
      var customRender; // 表格用

      if (renderStatus === 'edit' && typeof render === 'function') {
        customRender = render(getItemValue(attrcode), getAllFormValue());
      } else {
        customRender = getReplaceItem(attrcode);
      }

      if (customRender) {
        return customRender;
      }
    }
  }; // switch_browse 特殊处理


  if (itemtype === 'switch_browse') {
    var _config = getStore(['FormInstance', 'props', 'config']);

    props.cancelPSwitch = _config.cancelPSwitch;
    props.disabled = _config.editSwitch ? props.disabled : status === 'browse' ? props.disabled : true;
  }

  if (itemtype === 'attachment') {
    props.disableModify = status === 'browse' ? props.disabled : true;
  }

  var content = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    className: "form-item-errormsg"
  }, errorMsg); // refer IM

  var IMreferFlag = false;

  if (itemtype === 'refer' && (getItemValue(attrcode) || {}).value && window.top.ImTool) {
    if (IMpath.includes(refpath)) {
      IMreferFlag = true;
    }
  } // 精度处理


  var scale;

  if (itemtype === 'number') {
    scale = (getItemValue(attrcode) || {}).scale;

    if (scale === undefined || scale === null || scale == '-1' || scale == -1) {
      scale = props.scale;
    }

    if (scale === undefined || scale === null || scale == '-1' || scale == -1) {
      scale = 0;
    }

    props.scale = Number(scale);
  }

  var itemDom = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Item"], field_extends({}, props, {
    useTitle: true,
    placeholder: '',
    browse: realBrowse,
    maxlength: maxlength,
    isCheckChinese: !!maxlength // key={attrcode}
    ,
    setFieldValue: function setFieldValue(_ref2) {
      var value = _ref2.value,
          attrcode = _ref2.attrcode,
          componentValue = _ref2.componentValue;
      var filedValue; // 处理参照值 

      if (props.itemtype === 'refer') {
        filedValue = field_objectSpread(field_objectSpread({}, value), componentValue);
      } else {
        filedValue = value;
      } // 供应链换算率 建议移除 不应该加载组件内部


      if (itemtype === 'input' && ['vchangerate', 'vqtunitrate'].includes(attrcode)) {
        var _filedValue;

        var reg = /^[0-9\/\.]+$/;

        if ((_filedValue = filedValue) !== null && _filedValue !== void 0 && _filedValue.value && !reg.test(filedValue.value)) {
          //只能输入数字和/
          return;
        }
      }

      setItemValue(attrcode, filedValue, {
        inner: true
      });
    },
    getFieldValue: function getFieldValue(_ref3) {
      var attrcode = _ref3.attrcode;
      var currentValue = getItemValue(attrcode);

      if (['checkbox_switch', 'switch', 'switch_browse'].includes(itemtype) && realBrowse) {
        currentValue.display = currentValue.value ? json["page-form-0007"] : json["page-form-0004"];
      }

      return currentValue;
    },
    onBeforeEvent: /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref4) {
        var value, event;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                value = _ref4.value, event = _ref4.event;

                if (!(typeof onBeforeEvent == 'function')) {
                  _context.next = 8;
                  break;
                }

                _context.next = 4;
                return onBeforeEvent(areaId, attrcode, value, getAllFormValue(), props, event);

              case 4:
                _context.t0 = _context.sent;
                return _context.abrupt("return", _context.t0 !== false);

              case 8:
                return _context.abrupt("return", true);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref5.apply(this, arguments);
      };
    }(),
    onAfterEvent: function onAfterEvent(_ref6) {
      var value = _ref6.value,
          oldValue = _ref6.oldValue,
          componentValue = _ref6.componentValue;

      if (itemtype === 'residtxt') {
        var _value$attrcode;

        // 主语言没值时，取登录语言的值
        if (!((_value$attrcode = value[attrcode]) !== null && _value$attrcode !== void 0 && _value$attrcode.value)) {
          var _languageMeta$find;

          var loginCode = Object(api_index_["getLangCode"])(),
              loginIndex = ((_languageMeta$find = languageMeta.find(function (e) {
            return e.languageCode === loginCode;
          })) === null || _languageMeta$find === void 0 ? void 0 : _languageMeta$find.index) || '',
              loginValue = componentValue[attrcode + loginIndex];
          setItemValue(attrcode, loginValue);
        }
      } else if (itemtype === 'input' && ['vchangerate', 'vqtunitrate'].includes(attrcode)) {
        var _value;

        var reg = /^([1-9][0-9]*|0)(\.\d{1,})?(\/)(([1-9][0-9]*)(\.\d{1,})?|(\d\.\d{1,}))$/;

        if ((_value = value) !== null && _value !== void 0 && _value.value && !reg.test(value.value)) {
          //只能输入数字和/或.
          value = {
            value: ''
          };
          var titleTip = json['page-form-0009'];
          var contentTip = json['page-form-0011'];
          Object(api_index_["toast"])({
            mark: 'form_onBlur',
            color: 'danger',
            title: titleTip,
            content: " ".concat(contentTip, "\"1/2\"")
          });
          setItemValue(attrcode, value, {
            inner: true
          });
          return;
        }
      }

      setOldValue(attrcode, oldValue);

      if (typeof _onAfterEvent == 'function') {
        _onAfterEvent({
          areaId: areaId,
          attrcode: attrcode,
          curMetaItem: props,
          value: props.itemtype == 'refer' ? field_objectSpread(field_objectSpread({}, value), componentValue) : value,
          oldValue: oldValue,
          componentValue: componentValue,
          allValue: getAllFormValue(),
          singleFormCode: singleFormCode
        });
      }
    },
    onEnter: function onEnter(_ref7) {
      var e = _ref7.e;

      // 防止重复
      if (window.triggerOnEnter) {
        return;
      }

      console.log('formitem enter trigger@baseComponent'); // 只触发一次

      window.triggerOnEnter = true;
      setTimeout(function () {
        var result = fastToNext(attrcode);
        window.triggerOnEnter = false;
      }, 20);
    },
    path: [attrcode] // whichKeyToDisplay={(getItemValue(attrcode) || {}).display ? 'display' : 'value'}

  }));

  if (realBrowse && typeof render === 'function') {
    itemDom = render(getItemValue(attrcode), getAllFormValue());
  } // if (status === "browse") {
  //     itemDom = <React.Fragment><BrowseBool bool={itemValue.value} type={itemtype}/>{children}</React.Fragment>
  // }


  var attrClassName = processCodeClassName(attrcode);
  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.Fragment, null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    style: {
      width: String(leftWidth) + '%'
    },
    className: "leftspace form-item"
  }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    style: {
      width: String(width) + '%'
    },
    className: "".concat(attrClassName, " js-type-").concat(itemtype, " form-item"),
    fieldid: Object(api_index_["getSysFieldid"])(attrcode),
    hotkeytag: "".concat(singleFormCode, "-").concat(attrcode)
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    className: "form-item-label",
    style: {
      color: color
    },
    title: label
  }, !realBrowse && required && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
    className: "u-mast"
  }, "*"), label, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
    className: "form-item-colon"
  }, colon)), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tooltip"], {
    placement: "top",
    inverse: true,
    overlay: content,
    trigger: ['hover', 'focus'],
    id: "top",
    className: "".concat(verify === false && !realBrowse ? 'form-item-show-tip' : 'form-item-hide-tip')
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    className: "form-item-control ".concat(verify === false ? 'verify-error' : '')
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    className: "form-component-item-wrapper ".concat(itemtype, "-wrapper ").concat(status),
    onKeyDown: function onKeyDown(e) {
      // console.log('cell onKeyDow trigger', e);
      if (e.key === 'Enter') {
        // 防止重复
        if (window.triggerOnEnter) {
          return;
        }

        window.triggerOnEnter = true;
        e.stopPropagation();
        console.log('formitem enter trigger@itemSpan');
        setTimeout(function () {
          var result = fastToNext(attrcode);
          window.triggerOnEnter = false;
        }, 20);
      }
    }
  }, realBrowse ? hyperlinkflag ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("a", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return handleClick(hyperlinkflag, attrcode, status, getStore(['pageid']), singleFormCode, (getItemValue(attrcode) || {}).value);
    }
  }, itemDom) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
    className: "form-item-pre"
  }, itemDom) : itemDom, realBrowse ? IMreferFlag ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
    className: "iconfont icon-renyuan imrefer",
    onClick: function onClick() {
      return handleIMrefer((getItemValue(attrcode) || {}).value, json);
    }
  }) : null : null)))));
} // 超链接处理


function handleClick(hyperlinkflag, name, pagestatus, pageId, areaCode, dataId) {
  if (hyperlinkflag && pagestatus === 'browse') {
    Object(api_index_["linkTo"])(pageId, areaCode, name, dataId);
  }
} // im处理 


function handleIMrefer(dataId, json) {
  Object(api_index_["ajax"])({
    url: '/nccloud/platform/login/openim.do',
    data: {
      userid: dataId
    },
    success: function success(res) {
      if (res && res.data) {
        // IM window
        window.top.ImTool && window.top.ImTool.dispatch('switchChatTo', {
          yht_id: res.data,
          type: 'chat'
        }); // IM 存在 不再点击

        if (window.top.document.getElementById('ykj-frame') && window.top.document.getElementById('ykj-frame').style.display == 'none') {
          var imBtnForNcc = window.top.document.getElementById('imBtnForNcc');
          imBtnForNcc && imBtnForNcc.click();
        }
      } else {
        if (res.success && !res.data) {
          Object(api_index_["toast"])({
            mark: 'userim-wraning',
            color: 'danger',
            title: json['page-form-0009'],
            content: json['page-form-0012']
          });
        }
      }
    },
    error: function error() {
      console.log('IM');
    }
  });
}

/* harmony default export */ var field = (Filed);
// EXTERNAL MODULE: ./src/platform/components/WithAutoFocus/FormWithAutoFocus.js
var FormWithAutoFocus = __webpack_require__(384);

// CONCATENATED MODULE: ./src/platform/components/Form/singleForm.js
function singleForm_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { singleForm_typeof = function _typeof(obj) { return typeof obj; }; } else { singleForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return singleForm_typeof(obj); }

var _class, _temp;

function singleForm_extends() { singleForm_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return singleForm_extends.apply(this, arguments); }

function singleForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function singleForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function singleForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) singleForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) singleForm_defineProperties(Constructor, staticProps); return Constructor; }

function singleForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) singleForm_setPrototypeOf(subClass, superClass); }

function singleForm_setPrototypeOf(o, p) { singleForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return singleForm_setPrototypeOf(o, p); }

function singleForm_createSuper(Derived) { var hasNativeReflectConstruct = singleForm_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = singleForm_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = singleForm_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return singleForm_possibleConstructorReturn(this, result); }; }

function singleForm_possibleConstructorReturn(self, call) { if (call && (singleForm_typeof(call) === "object" || typeof call === "function")) { return call; } return singleForm_assertThisInitialized(self); }

function singleForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function singleForm_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function singleForm_getPrototypeOf(o) { singleForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return singleForm_getPrototypeOf(o); }

/*
 * @Descripttion: 
 * @version: 
 * @Author: wanglongx
 * @Date: 2020-08-24 13:53:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-20 16:58:52
 */


 // import { WithAutoFocus } from '@platform/components';


 // form变化,表格重新计算标识

var BEFOREFORMCOMPLETE = 'beforeAreaChangeComplete';
var FORMCOMPLETE = 'areaChangeComplete';

function debounce(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var timer = null;
  return function () {
    var _this = this;

    for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(function () {
      fn.apply(_this, rest);
    }, wait);
  };
} // 创建单个form区域


var singleForm_SingleForm = Object(FormWithAutoFocus["a" /* default */])(_class = (_temp = /*#__PURE__*/function (_Component) {
  singleForm_inherits(SingleForm, _Component);

  var _super = singleForm_createSuper(SingleForm);

  function SingleForm(props) {
    var _this2;

    singleForm_classCallCheck(this, SingleForm);

    _this2 = _super.call(this, props);

    _this2.calcWidth = function () {
      var _findDOMNode;

      var prevWidth = _this2.state.prevWidth;
      var width = (_findDOMNode = Object(external_root_ReactDOM_var_ReactDOM_commonjs_react_dom_commonjs2_react_dom_amd_react_dom_["findDOMNode"])(singleForm_assertThisInitialized(_this2))) === null || _findDOMNode === void 0 ? void 0 : _findDOMNode.offsetWidth; // 列数需要根据组件宽度得到，而以下数值是UE给的分辨率
      // 组件宽度 + 32 = 分辨率
      // 加30缓冲区（如：滚动条）

      width = width + 32 + 30;

      if (prevWidth !== width) {
        api_index_["PubSub"].publishSync(BEFOREFORMCOMPLETE, true); //优化效率：默认是4列，宽度在4列范围内不再渲染

        var layout = {
          width: 50,
          column: 2
        };

        if (width) {
          var formItemWidth = 50;
          var column = 2;

          if (width < 600) {
            formItemWidth = 100;
            column = 1;
          }

          if (width >= 600 && width <= 1024) {
            formItemWidth = 50;
            column = 2;
          }

          if (width >= 1025 && width <= 1439) {
            formItemWidth = 33.333333;
            column = 3;
          }

          if (width >= 1440 && width <= 1919) {
            formItemWidth = 25;
            column = 4;
          }

          if (width >= 1920) {
            formItemWidth = 20;
            column = 5;
          }

          layout.width = formItemWidth;
          layout.column = column;

          _this2.setState({
            layout: layout
          });
        }

        _this2.setState({
          prevWidth: width
        }, function () {
          api_index_["PubSub"].publish(FORMCOMPLETE, true);
        });
      }
    };

    _this2.renderSingle = function () {
      var _this2$props = _this2.props,
          form = _this2$props.form,
          _this2$props$list = _this2$props.list,
          list = _this2$props$list === void 0 ? [] : _this2$props$list,
          name = _this2$props.name,
          fastToNext = _this2$props.fastToNext,
          getHotKeyConfig = _this2$props.getHotKeyConfig;

      var _form$getInnerHooks = form.getInnerHooks(),
          getFormItem = _form$getInnerHooks.getFormItem,
          getLayout = _form$getInnerHooks.getLayout;

      var layout = _this2.state.layout; // 宽度计算

      var colTotalNum = 0;
      var leftSpaceCol = 0;
      var rightSpaceCol = 0;
      list = list.filter(function (item) {
        return getFormItem(item)['visible'] == true;
      });
      return list.map(function (itemCode, index) {
        var item = getFormItem(itemCode);
        var column = layout.column;
        var currentColNum = 1;

        if (item.colnum && Number(item.colnum) > 1) {
          if (item.colnum < column) {
            currentColNum = Number(item.colnum);
          } else {
            currentColNum = column;
          }
        }

        if (index === 0) {
          rightSpaceCol = column - currentColNum;
          colTotalNum = currentColNum;
        } else {
          leftSpaceCol = rightSpaceCol; //上个字段的右空白,用于折行控制

          colTotalNum = colTotalNum + currentColNum;

          if (currentColNum > rightSpaceCol || item.isnextrow) {
            //自动换行
            colTotalNum = colTotalNum + rightSpaceCol;
            rightSpaceCol = column - currentColNum;
          } else {
            //继续放在当前行
            var remain = colTotalNum % column;
            rightSpaceCol = 0;

            if (remain != 0) {
              rightSpaceCol = column - remain;
            }
          }
        }

        var width = currentColNum * layout.width;
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(field, singleForm_extends({}, item, {
          key: item.attrcode,
          width: width,
          leftSpaceCol: leftSpaceCol,
          singleWidth: layout.width,
          singleFormCode: name,
          fastToNext: fastToNext // 通過formContent 传递
          // getHotKeyConfig={getHotKeyConfig}

        }));
      });
    };

    _this2.state = {
      layout: {
        width: 50,
        column: 2
      }
    };
    return _this2;
  }

  singleForm_createClass(SingleForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.calcWidth();
      window.addEventListener('resize', debounce(this.calcWidth));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.calcWidth();
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "group-form-item lightapp-component-form ".concat(className)
      }, this.renderSingle());
    }
  }]);

  return SingleForm;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]), _temp)) || _class;

/* harmony default export */ var singleForm = (singleForm_SingleForm);
// EXTERNAL MODULE: ./src/platform/components/WithKeyboardChange/FormWithKeyboardChange.js
var FormWithKeyboardChange = __webpack_require__(383);

// EXTERNAL MODULE: ./src/platform/components/WithKeyboardChange/createKeyMap.js + 1 modules
var createKeyMap = __webpack_require__(9);

// CONCATENATED MODULE: ./src/platform/components/Form/enterkey.js



var matchItemFocus = {
  refer: setReferItemFocus,
  input: setNormalItemFocus,
  textarea: setTextAreaFocus,
  select: setSelectItemFocus,
  // radio checkbox 类型统一改为了下拉
  radio: setSelectItemFocus,
  checkbox: setSelectItemFocus,
  "switch": setSwitchItemFocus,
  switch_browse: setSwitchItemFocus,
  normal: setNormalItemFocus
};
var firstItemNum = 0; // 不可用单元组件的判断

var enterkey_unusableUnit = function unusableUnit(item, states, moduleId) {
  // 这个方法是使用Meta数据来进行跳转的  可能会有隐患  因为组件内部数据是 自己的状态 visiable 和disabled 可能会改变
  var disabledItem = states.disabled || {},
      visibleItem = states.visible || {},
      allForm = states.form,
      attrCode = item.attrcode;
  if (item.itemtype === 'label') return true;
  return itemIsDisable(disabledItem, item) || !allForm[attrCode] || itemIsVisible(visibleItem, item, moduleId);
}; // 聚焦到表单后的下个元素


var enterkey_focusToFormNext = function focusToFormNext(areaList, moduleId) {
  var currentIndex = areaList.indexOf(moduleId);

  if (currentIndex === -1 || currentIndex === areaList.length - 1) {
    // 没有 或者最后一个 退出
    return null;
  } // keyByModuleId  这一段逻辑或许也要循环  TODO


  var nextIndex = currentIndex === areaList.length - 1 ? 0 : currentIndex + 1,
      nextAreaId = areaList[nextIndex];
  var activeTable = createKeyMap["d" /* keyByModuleId */][nextAreaId];

  if (!activeTable || !activeTable['activeTable']) {
    // 不存在 table
    return focusToFormNext(areaList, nextAreaId);
  }

  var childTabId = activeTable['activeTable']; // 活跃的子表格
  // 要聚焦的子表格

  var targetTable = createKeyMap["d" /* keyByModuleId */][childTabId]; // 卡片表格

  if (activeTable['type'] && activeTable['type'] === 'cardTable' && childTabId) {
    // 由于表格之类的 还有多页签情况  所以对多页签处理
    var activeTabDom = document.querySelector("#hot-key-".concat(nextAreaId, " #js_cardTable_").concat(nextAreaId, " #js_lightTabs_header_").concat(nextAreaId, " .active a")) || document.querySelector("#hot-key-".concat(nextAreaId, " .active a")); // TODO  这里用id来查找  一旦发送变动  很可能找不到

    if (activeTabDom) {
      activeTabDom.focus();
      return {
        type: 'table',
        id: nextAreaId
      };
    } else {
      // 递归查找
      return focusToFormNext(areaList, nextAreaId);
    }
  } // 普通表格 或者 编辑表格  跳转到具体的单元格


  var targetTableUnitId = targetTable['firstItem'];
  var firstItemDom = document.querySelector("div[".concat(targetTableUnitId, "] div[tabindex=\"0\"]"));

  if (firstItemDom) {
    api_index_["ViewModel"].shouldAutoFocus = true;
    firstItemDom.ncExecuteFocus = true;
    firstItemDom.focus();
    delete firstItemDom.ncExecuteFocus; // 直接执行  ie下会有顺序问题

    setTimeout(function () {
      api_index_["ViewModel"].shouldAutoFocus = false;
    }, 100);
    return {
      type: 'table',
      id: nextAreaId
    };
  } else {
    // 递归查找
    return focusToFormNext(areaList, nextAreaId);
  }
}; // 获取meta中 moudule首项


var getMetaModuleFirstItem = function getMetaModuleFirstItem(meta, moduleId, states) {
  return meta[moduleId].items.find(function (ite, index) {
    if (!enterkey_unusableUnit(ite, states, moduleId)) {
      return ite;
    }

    return false;
  });
}; // 聚焦到表单下一项


var enterkey_focusNextItem = function focusNextItem(item, formId) {
  var attrCode = processCodeClassName(item.attrcode);
  matchItemFocus[item.itemtype] === undefined ? matchItemFocus['normal'](formId, attrCode) : matchItemFocus[item.itemtype](formId, attrCode);
}; // 聚焦到页面第一个表单位置


var focusToFirstForm = function focusToFirstForm(formId, meta, states) {
  var target = getMetaModuleFirstItem(meta, formId, states);
  target && enterkey_focusNextItem(target, formId);
  return target;
};

function setReferItemFocus(formId, unitCode) {
  var $form = document.getElementById("form_".concat(formId));
  var dom = $form && $form.querySelector(".".concat(unitCode, ".form-item"));
  var inputEl = dom && dom.querySelector("input[tabindex='0']");
  var spanEl = dom && dom.querySelector("span[tabindex='0']");
  var wrapper = dom && dom.querySelector(".template-item-wrapper[tabindex='0']");

  if (wrapper) {
    //元素存在就让它聚焦
    wrapper.fromProgram = true;
    wrapper.focus();
    dom = null;
  } else if (inputEl) {
    //元素存在就让它聚焦
    inputEl.fromProgram = true;
    inputEl.focus();
    dom = null;
  } else if (spanEl) {
    spanEl.fromProgram = true;
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
      inputEl.fromProgram = true;
      inputEl.focus();
      dom && dom.removeEventListener('DOMSubtreeModified', fn);
      inputEl = null;
      dom = null;
    });
  }
}

function setNormalItemFocus(formId, unitCode) {
  var $form = document.getElementById("form_".concat(formId)); // let inputEl = $form && $form.querySelector(`.${unitCode}.form-item input`);

  var inputEl = $form && $form.querySelector(".".concat(unitCode, ".form-item .template-item-wrapper[tabindex='0']"));

  if (inputEl) {
    inputEl.fromProgram = true;
    inputEl.focus();
  }

  inputEl = null;
}

function setTextAreaFocus(formId, unitCode) {
  var $form = document.getElementById("form_".concat(formId));
  var textEl = $form && $form.querySelector(".".concat(unitCode, ".form-item .template-item-wrapper[tabindex='0']"));

  if (textEl) {
    textEl.fromProgram = true;
    textEl.focus();
  }

  textEl = null;
}

function setSelectItemFocus(formId, unitCode) {
  var $form = document.getElementById("form_".concat(formId));
  var dom = $form && $form.querySelector(".".concat(unitCode, ".form-item"));
  var focusDom = dom && dom.querySelector(".template-item-wrapper[tabindex='0']") || dom.querySelector('input');

  if (focusDom) {
    focusDom.fromProgram = true;
    focusDom.focus();
  }

  dom = null;
  focusDom = null;
}

function setSwitchItemFocus(formId, unitCode) {
  var $form = document.getElementById("form_".concat(formId));
  var switchEl = $form && $form.querySelector(".".concat(unitCode, ".form-item .template-item-wrapper[tabindex='0']"));

  if (switchEl) {
    switchEl.fromProgram = true;
    switchEl.focus();
  }

  switchEl = null;
} // 获取表单的下个可聚焦元素


var enterkey_getFormNextFocuser = function getFormNextFocuser(_ref) {
  var states = _ref.states,
      meta = _ref.meta,
      moduleId = _ref.moduleId,
      attrcode = _ref.attrcode;
  var currentNext = null,
      tagIndex = 99999,
      fitems = meta[moduleId].items,
      fitemsLen = fitems.length,
      disabledState = (states || {}).disabled || {},
      visibleState = (states || {}).visible || {};
  fitems.find(function (ite, index) {
    if (fitemsLen === index + 1) {
      return false;
    }

    if (ite.attrcode == attrcode || index === tagIndex) {
      currentNext = fitems[index + 1]; // 这里要处理下 如果后面设置了状态 meta中的数据就无效了

      if (enterkey_unusableUnit(currentNext, states, moduleId) || currentNext.itemtype === 'label' || currentNext.visible === false && getVisibleStatusInStates({
        visibleState: visibleState,
        moduleId: moduleId,
        attrCode: currentNext.attrcode
      }) || currentNext.disabled === true && disabledState[currentNext.attrcode] !== false) {
        tagIndex = index + 1;
        currentNext = null;
      } else {
        return true;
      }
    }

    return false;
  });
  return currentNext;
}; // 获取下个可聚焦元素


var getNextFocuser = function getNextFocuser(_ref2) {
  var states = _ref2.states,
      meta = _ref2.meta,
      moduleId = _ref2.moduleId,
      attrcode = _ref2.attrcode,
      head = _ref2.head,
      _ref2$formrelation = _ref2.formrelation,
      formrelation = _ref2$formrelation === void 0 ? [] : _ref2$formrelation,
      _ref2$orderOfHotKey = _ref2.orderOfHotKey,
      orderOfHotKey = _ref2$orderOfHotKey === void 0 ? [] : _ref2$orderOfHotKey,
      opened = _ref2.opened;

  if (!states || !meta) {
    // 超级例外情况
    return {
      type: 'other',
      id: moduleId
    };
  }

  var formNextItem = null; // icon 的情况

  if (!attrcode && opened !== undefined) {
    var nextIindex = moduleId === head ? 0 : formrelation.indexOf(moduleId) + 1,
        nextFormId = formrelation[nextIindex]; // 下个表的位置

    if (opened === true) {
      // 展开 聚焦到当前表单第一元素
      formNextItem = getMetaModuleFirstItem(meta, moduleId, states); // 有首项元素  跳转到首项

      if (formNextItem) {
        return {
          type: 'form',
          item: formNextItem,
          last: true,
          id: moduleId
        };
      } else {
        // 有可能整个 区域都没有可编辑元素  那么就直接跳转到下个分组的icon上  或者nextFormId没有直接跳转到表格  又或者跳转到表格
        return getNextFocuser({
          states: states,
          meta: meta,
          moduleId: moduleId,
          attrcode: attrcode,
          head: head,
          formrelation: formrelation,
          orderOfHotKey: orderOfHotKey,
          opened: false
        });
      }
    } // 当前未展开 跳到下个分组


    if (nextFormId && opened !== true) {
      return {
        type: 'icon',
        // icon table other
        id: nextFormId
      };
    } // 最后一个表单 未展开


    if (!nextFormId && opened !== true) {
      var formSibling = enterkey_focusToFormNext(orderOfHotKey, head);
      formNextItem = getMetaModuleFirstItem(meta, head, states); // 如果表格不是编辑态   循环？？？

      if (!formSibling && formNextItem) {
        return {
          type: 'form',
          last: true,
          item: formNextItem,
          id: head
        };
      }

      return formSibling || getNextFocuser({});
    }
  } // 获取formNextItem  当前表单内部跳转


  formNextItem = enterkey_getFormNextFocuser({
    states: states,
    meta: meta,
    moduleId: moduleId,
    attrcode: attrcode
  });

  if (formNextItem) {
    return {
      type: 'form',
      item: formNextItem,
      id: moduleId
    };
  } // 定义


  var flength = formrelation.length,
      noTableArea = orderOfHotKey.length === 0 || orderOfHotKey.length === 1 && orderOfHotKey[0] === head,
      noFormChild = flength === 0; // 表单循环 可能会引起独立表单的  循环

  if (head === moduleId && noFormChild && noTableArea || formrelation[flength - 1] === moduleId && noTableArea) {
    console.log('只有单表 没有分组和表格 或者 没有表格 当前为最后一个表单分组， 跳转到首个表单！！');
    formNextItem = getMetaModuleFirstItem(meta, head, states);

    if (formNextItem) {
      return {
        type: 'form',
        last: true,
        item: formNextItem,
        id: head
      };
    } else {
      // 连当前表单都禁用了  没辙了  不 可以考虑dom查找
      return {} || getNextFocuser({});
    }
  } //  有表格区


  if (noFormChild && !noTableArea || formrelation[flength - 1] === moduleId && !noTableArea) {
    console.log('当前主表单  并且没有子表单分组  有表格区 或者 最后一个子表单 有表格区域, 跳转到表格区');

    var _formSibling = enterkey_focusToFormNext(orderOfHotKey, head);

    formNextItem = getMetaModuleFirstItem(meta, head, states); // 如果表格不是编辑态   循环？？？

    if (!_formSibling && formNextItem) {
      return {
        type: 'form',
        last: true,
        item: formNextItem,
        id: head
      };
    }

    return _formSibling || getNextFocuser({});
  } // 当前为表单区域  并且不是最后一个子表单


  if (flength > 0 && formrelation.indexOf(moduleId) !== flength - 1) {
    var _nextIindex = 0,
        _nextFormId = null,
        currentModuleId = moduleId; // 直接跳到  下个元素的展开按钮上

    _nextIindex = currentModuleId === head ? 0 : formrelation.indexOf(currentModuleId) + 1;
    _nextFormId = formrelation[_nextIindex]; // 下个表的位置

    if (_nextFormId) {
      //
      return {
        type: 'icon',
        // icon table other
        id: _nextFormId
      };
    } else {
      return {} || getNextFocuser({});
    }
  }

  return null;
};

var tabindexSearch = function tabindexSearch(currentDom) {
  if (!currentDom) {
    return false;
  }

  var tabindexDom = currentDom.querySelector('input,a,textarea,[tabindex]:not([tabindex="-1"]');

  if (!tabindexDom) {
    return tabindexSearch(tabindexDom.nextElementSibling || tabindexDom.parentElement);
  } else {
    // 这里其实还有很多判断  我偷懒就先不写了
    // 包括 tabindex = -1, diabled readonly visible hidden等
    tabindexDom.focus();
  }
};

var focusToNext = function focusToNext(_ref3) {
  var states = _ref3.states,
      meta = _ref3.meta,
      moduleId = _ref3.moduleId,
      attrcode = _ref3.attrcode,
      head = _ref3.head,
      _ref3$formrelation = _ref3.formrelation,
      formrelation = _ref3$formrelation === void 0 ? [] : _ref3$formrelation,
      _ref3$orderOfHotKey = _ref3.orderOfHotKey,
      orderOfHotKey = _ref3$orderOfHotKey === void 0 ? [] : _ref3$orderOfHotKey,
      opened = _ref3.opened,
      onLastFormEnter = _ref3.onLastFormEnter;
  var nextFocuser = getNextFocuser({
    states: states,
    meta: meta,
    moduleId: moduleId,
    attrcode: attrcode,
    head: head,
    formrelation: formrelation,
    orderOfHotKey: orderOfHotKey,
    opened: opened
  }); // console.log(nextFocuser);

  if (!nextFocuser) {
    return null;
  }

  if (nextFocuser.last === true && onLastFormEnter) {
    console.log('form last', nextFocuser); // focusNextItem(nextFocuser.item, nextFocuser.id);
    // if (typeof onLastFormEnter == 'function' && onLastFormEnter() === false) {
    //     return;
    // }

    return onLastFormEnter == 'function' && onLastFormEnter() === false;
  }

  if (nextFocuser.type === 'form') {
    console.log('form', nextFocuser);

    if (firstItemNum === 8) {
      document.activeElement.blur();
      console.log(firstItemNum);
      setTimeout(function () {
        return firstItemNum = 0;
      }, 500);
      return;
    }

    enterkey_focusNextItem(nextFocuser.item, nextFocuser.id);
    preventInfiniteLoop(nextFocuser);
  }

  if (nextFocuser.type === 'icon') {
    console.log('icon', nextFocuser);
    var toggleIcon = document.querySelector("#toggleIcon2".concat(nextFocuser.id)); // console.log(toggleIcon);

    toggleIcon && toggleIcon.focus();
  }

  if (nextFocuser.type === 'other') {
    // DOM查找
    tabindexSearch(document.activeElement);
  }

  return nextFocuser;
};

function preventInfiniteLoop(nextFocuser) {
  if (createKeyMap["d" /* keyByModuleId */][nextFocuser.id] && createKeyMap["d" /* keyByModuleId */][nextFocuser.id].firstItem === nextFocuser.item.attrcode) {
    firstItemNum++;
  }
}


// CONCATENATED MODULE: ./src/platform/components/Form/index.js
function Form_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Form_typeof = function _typeof(obj) { return typeof obj; }; } else { Form_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Form_typeof(obj); }

var Form_class, Form_temp;

function Form_toConsumableArray(arr) { return Form_arrayWithoutHoles(arr) || Form_iterableToArray(arr) || Form_unsupportedIterableToArray(arr) || Form_nonIterableSpread(); }

function Form_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Form_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Form_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Form_arrayLikeToArray(o, minLen); }

function Form_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function Form_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Form_arrayLikeToArray(arr); }

function Form_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Form_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Form_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Form_createClass(Constructor, protoProps, staticProps) { if (protoProps) Form_defineProperties(Constructor.prototype, protoProps); if (staticProps) Form_defineProperties(Constructor, staticProps); return Constructor; }

function Form_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Form_setPrototypeOf(subClass, superClass); }

function Form_setPrototypeOf(o, p) { Form_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Form_setPrototypeOf(o, p); }

function Form_createSuper(Derived) { var hasNativeReflectConstruct = Form_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Form_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Form_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Form_possibleConstructorReturn(this, result); }; }

function Form_possibleConstructorReturn(self, call) { if (call && (Form_typeof(call) === "object" || typeof call === "function")) { return call; } return Form_assertThisInitialized(self); }

function Form_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Form_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Form_getPrototypeOf(o) { Form_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Form_getPrototypeOf(o); }










 // import { WithKeyboardChange } from '@platform/components'; // 引用陷阱
// const { FormWithKeyboardChange } = WithKeyboardChange;




__webpack_require__(1803);

var TabPane = base_index_["Tabs"].TabPane;
var keyMap = {
  nextTabHandler: ['shift+right'],
  prevTabHandler: ['shift+left']
}; // form变化,表格重新计算标识

var Form_BEFOREFORMCOMPLETE = 'beforeAreaChangeComplete';
var Form_FORMCOMPLETE = 'areaChangeComplete';

function uuidv4() {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Object(api_index_["getSafeRandom"])() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

var Form_Form = Object(index_["ItemProvider"])(Form_class = wrapper(Form_class = Object(FormWithKeyboardChange["a" /* default */])(Form_class = (Form_temp = /*#__PURE__*/function (_BaseComponent) {
  Form_inherits(Form, _BaseComponent);

  var _super = Form_createSuper(Form);

  function Form(props) {
    var _this;

    Form_classCallCheck(this, Form);

    _this = _super.call(this, props);

    _this.fastToNext = function (store, moduleId, attrcode, opened) {
      var _this$props$getHotKey = _this.props.getHotKeyConfig,
          getHotKeyConfig = _this$props$getHotKey === void 0 ? function () {} : _this$props$getHotKey;

      var _ref = getHotKeyConfig() || {},
          meta = _ref.meta,
          orderOfHotKey = _ref.orderOfHotKey,
          onLastFormEnter = _ref.onLastFormEnter;

      var _store$getInnerHooks = store.getInnerHooks(),
          getStore = _store$getInnerHooks.getStore,
          getAllFormItem = _store$getInnerHooks.getAllFormItem;

      var mainFormId = getStore('mainId'); // 處理states 數據 TODO 後面可以考慮優化下

      var items = getAllFormItem() || {};
      var states = {
        disabled: {},
        visible: {},
        form: {}
      };

      for (var key in items) {
        var item = items[key];
        states.disabled[item.attrcode] = !!item.disabled;
        states.visible[item.attrcode] = !!item.visible;
        states.form[item.attrcode] = item;
      } // console.log(mainFormId, states, moduleId, attrcode, meta, orderOfHotKey, onLastFormEnter, form);


      var params = {
        states: states,
        meta: meta,
        moduleId: moduleId,
        attrcode: attrcode,
        head: mainFormId || moduleId,
        formrelation: meta && meta.formrelation ? meta.formrelation[mainFormId || moduleId] : [mainFormId || moduleId],
        orderOfHotKey: orderOfHotKey,
        onLastFormEnter: onLastFormEnter,
        opened: opened
      };
      focusToNext(params);
    };

    _this.toggleArea = function (name, value) {
      var _this$props$store = _this.props.store,
          openArea = _this$props$store.openArea,
          closeArea = _this$props$store.closeArea;
      api_index_["PubSub"].publishSync(Form_BEFOREFORMCOMPLETE, true);

      if (value) {
        closeArea(name);
      } else {
        openArea(name);
      }

      setTimeout(function () {
        api_index_["PubSub"].publish(Form_FORMCOMPLETE, true);
      }, 0);
    };

    _this.renderForm = function (tabsId) {
      var _this$props = _this.props,
          store = _this$props.store,
          name = _this$props.name,
          config = _this$props.config,
          getHotKeyConfig = _this$props.getHotKeyConfig;

      var _store$getInnerHooks2 = store.getInnerHooks(),
          getStore = _store$getInnerHooks2.getStore,
          getJson = _store$getInnerHooks2.getJson,
          getSingleForm = _store$getInnerHooks2.getSingleForm,
          getFormItem = _store$getInnerHooks2.getFormItem;

      var isTabsForm = getStore(['isTabsForm']);
      var langJson = getJson();
      var list = [];
      var mainId = tabsId || name;

      if (tabsId) {
        var groupIds = getStore(['formRelation'])[tabsId];

        if (Array.isArray(groupIds)) {
          list = [tabsId].concat(groupIds);
        } else {
          list = [tabsId];
        }
      } else {
        // ids
        list = getStore(['formList']) || [];
      }

      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "group-form-wrapper"
      }, list.map(function (item) {
        // items
        var list = getSingleForm(item) || []; // 过滤 单表是否所有字段都不显示

        list = list.filter(function (e) {
          return (getFormItem(e) || {}).visible == true;
        });
        var areaVisible = getStore([item, 'areaVisible']);
        areaVisible = areaVisible === undefined ? true : areaVisible;

        if (areaVisible && list.length !== 0) {
          var isunfold = getStore([item, 'isunfold']); // 兼容页签主表 isunfold false情况

          if ((getStore(['tabsId']) || []).includes(item)) {
            isunfold = true;
          } else {
            isunfold = isunfold === undefined ? true : isunfold;
          }

          var groupFormClass = classnames_default()({
            'show-form': isunfold,
            'hide-form': !isunfold
          });
          var rightClassName = classnames_default()({
            rightForm: item == name && config && config.headLeftArea && typeof config.headLeftArea === 'function'
          });
          var Wrapper = isTabsForm && mainId === item ? external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.Fragment : base_index_["ScrollElement"];
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.Fragment, null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Wrapper, {
            name: item
          }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            className: "group-form-wrapper cf" // 给快捷键用 如果要改 注意下
            ,
            id: "form_".concat(item)
          }, item == name && config && config.headLeftArea && typeof config.headLeftArea === 'function' && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            className: "left-defined-area"
          }, config.headLeftArea()), mainId !== item && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            className: "group-form-name"
          }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            className: "operator",
            fieldid: Object(api_index_["getSysFieldid"])("".concat(mainId && item, "_group")),
            tabIndex: 0,
            id: "toggleIcon2".concat(item),
            onClick: _this.toggleArea.bind(Form_assertThisInitialized(_this), item, isunfold),
            onKeyDown: function onKeyDown(e) {
              if (e.keyCode === 32) {
                // space
                e.preventDefault();
                e.target.click();
              }

              if (e.keyCode === 13) {
                // enter
                e.preventDefault();

                _this.fastToNext(store, item, null, isunfold);
              }
            }
          }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tooltip"], {
            placement: "top",
            overlay: isunfold ? langJson['form-group-close'] : langJson['form-group-expand'],
            delayHide: 1,
            delayShow: 1000
          }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            className: "name"
          }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            className: "name-icon"
          }, isunfold ? '-' : '+'), getStore([item, 'name']))), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            className: "line-wrap"
          }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
            className: "line"
          })))), isunfold && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            className: "group-form-item ".concat(groupFormClass, " ").concat(rightClassName)
          }, item == name && config && config.headTopArea && typeof config.headTopArea === 'function' && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
            className: "top-defined-area"
          }, config.headTopArea()), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(singleForm, {
            form: store,
            name: item,
            className: groupFormClass,
            list: list // 快捷键逻辑
            ,
            fastToNext: function fastToNext(attrcode) {
              _this.fastToNext(store, item, attrcode);
            } // 快捷键
            ,
            getHotKeyConfig: getHotKeyConfig
          })))));
        }
      }));
    };

    _this.renderTabForm = function () {
      var store = _this.props.store;

      var _store$getInnerHooks3 = store.getInnerHooks(),
          getStore = _store$getInnerHooks3.getStore,
          getFormTabs = _store$getInnerHooks3.getFormTabs,
          setFormTabs = _store$getInnerHooks3.setFormTabs,
          getSingleForm = _store$getInnerHooks3.getSingleForm,
          getFormItem = _store$getInnerHooks3.getFormItem,
          getFormRelations = _store$getInnerHooks3.getFormRelations;

      var tabsList = getStore(['tabsId']),
          currentKey = getFormTabs(),
          formRelations = getFormRelations(),
          status = store.getStatus();
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["HotKeys"], {
        keyMap: keyMap,
        handlers: {
          // 切换下一个页签
          nextTabHandler: function nextTabHandler() {
            var index = tabsList.indexOf(currentKey);
            var nextIndex = index + 1;

            if (nextIndex > tabsList.length - 1) {
              nextIndex = 0;
            }

            setFormTabs(tabsList[nextIndex]);
          },
          //  切换上一个页签
          prevTabHandler: function prevTabHandler() {
            var index = tabsList.indexOf(currentKey);
            var prevIndex = index - 1;

            if (prevIndex < 0) {
              prevIndex = tabsList.length - 1;
            }

            setFormTabs(tabsList[prevIndex]);
          }
        }
      }, tabsList.reduce(function (child, tabName) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["ScrollElement"], {
          name: tabName,
          id: tabName
        }, child);
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tabs"], {
        activeKey: currentKey,
        onChange: function onChange(i) {
          return setFormTabs(i);
        }
      }, tabsList.map(function (item) {
        var groups = formRelations[item] || [];
        var hasEditableField = false,
            hasErrorField = false;
        status !== 'browse' && [item].concat(Form_toConsumableArray(groups)).some(function (moduleId) {
          return getSingleForm(moduleId).some(function (attrcode) {
            var itemInfo = getFormItem(attrcode);

            if (itemInfo.visible && !itemInfo.disabled) {
              hasEditableField = true;
            }

            if (itemInfo.verify === false) {
              hasErrorField = true;
            }

            return hasEditableField && hasErrorField;
          });
        });
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(TabPane, {
          key: item,
          tab: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null, hasEditableField && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
            className: "iconfont icon-yebj"
          }), getStore([item])['name'], hasErrorField && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
            className: "iconfont icon-djgantanhao"
          }))
        }, _this.renderForm(item));
      }))));
    };

    _this.renderDom = function () {
      var store = _this.props.store;

      var _store$getInnerHooks4 = store.getInnerHooks(),
          getStore = _store$getInnerHooks4.getStore;

      if (getStore(['isTabsForm'])) {
        return _this.renderTabForm();
      } else {
        return _this.renderForm();
      }
    };

    var _store = props.store,
        _config = props.config,
        _name = props.name; // 实例化时 已知表单查询区ID 缓存ID和config

    if (_name && _store) {
      var _store$getInnerHooks5 = _store.getInnerHooks(),
          setStore = _store$getInnerHooks5.setStore;

      setStore(['mainId'], _name, false);
      setStore(['FormInstance'], Form_assertThisInitialized(_this), false);
    }

    _this.prevFormHeight = 0; // this.renderFlag = false;

    _this.state = {
      prevWidth: ''
    };
    _this.uniqueKey = uuidv4();
    window[_this.uniqueKey] = _store.getInstance();
    return _this;
  } // 判断初始化meta


  Form_createClass(Form, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var store = this.props.store;

      var _store$getInnerHooks6 = store.getInnerHooks(),
          setJson = _store$getInnerHooks6.setJson; // 初始化多语加载 


      Object(api_index_["getMultiLang"])({
        moduleId: "page_form",
        callback: setJson
      });
    } // //还原之前逻辑
    // componentDidMount() {
    //     const { store, name } = this.props;
    //     const { countFormWidth } = store.getInnerHooks()
    //     let form = document.getElementById(`form_${name}`);
    //     let formWidth;
    //     if (form) {
    //         formWidth = form.offsetWidth;
    //     }
    //     if (formWidth) {
    //         countFormWidth()
    //         window.addEventListener('resize', throttle(countFormWidth, 17));
    //         this.setState({ prevWidth: formWidth }, () => {
    //             // 触发cardtable高度重新计算
    //             PubSub.publish(FORMCOMPLETE, true);
    //         });
    //     }
    // }
    // componentDidUpdate(nextProps, nextState) {
    //     const { store, formComponentUpdate } = this.props;
    //     const { countFormWidth, getStore } = store.getInnerHooks()
    //     // 宽度发生变化时，再重新计算
    //     // if (!this.renderFlag) {
    //     let form = document.getElementById(`form_${nextProps.name}`);
    //     if (form) { // 优化效率：先判断Form是否存在，再计算form.offsetWidth
    //         let formWidth = form.offsetWidth;
    //         let formHeight = form.offsetHeight;
    //         if (formWidth && (formWidth != nextState.prevWidth || formHeight != this.prevFormHeight)) {
    //             countFormWidth('', formWidth);
    //             this.prevFormHeight = formHeight
    //             this.setState({ prevWidth: formWidth }, () => {
    //                 // 触发cardtable高度重新计算
    //                 PubSub.publish(FORMCOMPLETE, true);
    //                 // this.renderFlag = true;
    //             });
    //             window.addEventListener('resize', countFormWidth);
    //         }
    //         // 内存释放
    //         // form = null
    //     }
    //     // }
    //     if(typeof formComponentUpdate === 'function'){
    //         formComponentUpdate({ ...this.state, ...getStore() });
    //     } 
    //     // 快捷键逻辑
    //     nextProps.formStatusChanged(nextProps, store.getStatus());
    // }

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps, nextState) {
      var store = this.props.store; // 快捷键逻辑

      nextProps.formStatusChanged(nextProps, store.getStatus());
    } // componentWillUnmount() {
    //     const { store } = this.props;
    //     const { countFormWidth } = store.getInnerHooks();
    //     window.removeEventListener('resize', countFormWidth);
    //     // 组件销毁时 是否需要重置store 这个需要考虑处理下 
    //     // initMeta()
    // }

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      delete window[this.uniqueKey];
    } // 快捷键跳到下一个元素逻辑处理

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          store = _this$props2.store,
          config = _this$props2.config,
          name = _this$props2.name;
      var onAfterEvent = config.onAfterEvent,
          onBeforeEvent = config.onBeforeEvent;
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(formContent.Provider, {
        value: {
          areaId: name,
          form: store,
          onAfterEvent: onAfterEvent,
          onBeforeEvent: onBeforeEvent,
          config: config
        }
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        id: "form_".concat(name),
        fieldid: Object(api_index_["getSysFieldid"])("".concat(config && config.fieldid || name, "_form-area")),
        className: "platform-component-form",
        uniqueKey: this.uniqueKey
      }, this.renderDom()));
    }
  }]);

  return Form;
}(index_["BaseComponent"]), Form_temp)) || Form_class) || Form_class) || Form_class;

Form_Form.displayName = 'Form';
Form_Form.useForm = useForm;
/* harmony default export */ var components_Form = __webpack_exports__["default"] = (Form_Form);

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

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hotkeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var react_hotkeys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hotkeys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _createKeyMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _config_stopHotKeyChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _handleKeyDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var _config_tableKeyboardMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72);
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_platform_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hotKey_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(722);
/* harmony import */ var _hotKey_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_hotKey_less__WEBPACK_IMPORTED_MODULE_7__);
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
 * @Author: jinfjk
 * @Date: 2020-08-17 09:56:43
 * @LastEditors: bbq
 * @LastEditTime: 2021-02-01 14:04:57
 */









function FormWithKeyboardChange(WrappedComponent) {
  return /*#__PURE__*/function (_Component) {
    _inherits(WithHotKey, _Component);

    var _super = _createSuper(WithHotKey);

    function WithHotKey(props) {
      var _this;

      _classCallCheck(this, WithHotKey);

      _this = _super.call(this, props);
      _this.formStatusChanged = _this.formStatusChanged.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(WithHotKey, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        //监听业务组手动执行的聚焦事件
        this.autoFocusToken = _platform_api__WEBPACK_IMPORTED_MODULE_6__["PubSub"].subscribe('autoFocus-IoC', function () {
          //form的状态， 浏览态， add, edit
          var status = _this2.props.store.getStatus(); //如果是业务组控制执行 autoFocusDeferred 设为false；


          var autoFocusDeferred = false;
          if (Object(_config_stopHotKeyChange__WEBPACK_IMPORTED_MODULE_3__[/* stopFormHotKeyChange */ "c"])({
            props: _this2.props,
            autoFocusDeferred: autoFocusDeferred,
            status: status
          }) || status === 'browse') return;
          _createKeyMap__WEBPACK_IMPORTED_MODULE_2__[/* createByModuleType */ "a"]['form'](_this2.props, true);
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // 部分情况下KeyByModuleId 没有清除  导致创建不能直接聚焦
        Object(_createKeyMap__WEBPACK_IMPORTED_MODULE_2__[/* deleteKeyByModuleId */ "b"])(this.props.moduleId || this.props.name);
        this.autoFocusToken && _platform_api__WEBPACK_IMPORTED_MODULE_6__["PubSub"].subscribe(this.autoFocusToken);
      }
    }, {
      key: "formStatusChanged",
      value: function formStatusChanged(props, status) {
        if (status === 'browse') {
          Object(_createKeyMap__WEBPACK_IMPORTED_MODULE_2__[/* deleteKeyByModuleId */ "b"])(props.moduleId || props.name);
        } else {
          this.judgeCreateKeyMap(props, status);
        }
      }
    }, {
      key: "judgeCreateKeyMap",
      value: function judgeCreateKeyMap(props, status) {
        var _ref = props.getHotKeyConfig ? props.getHotKeyConfig() : {},
            _ref$autoFocusDeferre = _ref.autoFocusDeferred,
            autoFocusDeferred = _ref$autoFocusDeferre === void 0 ? false : _ref$autoFocusDeferre;

        if (Object(_config_stopHotKeyChange__WEBPACK_IMPORTED_MODULE_3__[/* stopFormHotKeyChange */ "c"])({
          props: props,
          autoFocusDeferred: autoFocusDeferred,
          status: status
        })) return;
        _createKeyMap__WEBPACK_IMPORTED_MODULE_2__[/* createByModuleType */ "a"]['form'](props);
      }
    }, {
      key: "render",
      value: function render() {
        var moduleId = this.props.name;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hotkeys__WEBPACK_IMPORTED_MODULE_1__["HotKeys"], {
          keyMap: _config_tableKeyboardMap__WEBPACK_IMPORTED_MODULE_5__[/* keyMap */ "a"],
          handlers: {
            shiftUp: _handleKeyDown__WEBPACK_IMPORTED_MODULE_4__[/* keyDownOfShiftUp */ "b"].bind(this, moduleId),
            shiftDown: _handleKeyDown__WEBPACK_IMPORTED_MODULE_4__[/* keyDownOfShiftUp */ "b"].bind(this, moduleId)
          },
          id: "".concat(_platform_api__WEBPACK_IMPORTED_MODULE_6__["config"].hotKeyModuleIdPrefix, "-").concat(moduleId)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({}, this.props, {
          formStatusChanged: this.formStatusChanged
        })));
      }
    }]);

    return WithHotKey;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
}

/* harmony default export */ __webpack_exports__["a"] = (FormWithKeyboardChange);

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _platform_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_platform_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _executeAutoFocus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
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
 * @Author: jinfjk
 * @Date: 2020-08-17 09:56:43
 * @LastEditors: bbq
 * @LastEditTime: 2021-01-25 19:25:48
 */




function FormWithAutoFocus(WrappedComponent) {
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
        var _this$props = this.props,
            name = _this$props.name,
            form = _this$props.form;
        this.autoFocusToken = _platform_api__WEBPACK_IMPORTED_MODULE_1__["PubSub"].subscribe('autoFocus', function (msg, _ref) {
          var data = _ref.data,
              id = _ref.id;
          var selector = "[hotkeytag=\"".concat(name, "-").concat(data, "\"]");
          var itemtype = 'normal';

          if (form && data) {
            form.setItemAttribute(data, 'autoFocus', true);
            itemtype = form.getItemAttribute(data, 'itemtype');
          }

          console.log(selector, form, id, data, itemtype); // 表单

          if (id) {
            if (name === id) {
              console.log(id); // 如果没有获取到对应的itemtype 就统一用normal来处理， 如果碰到特殊的就在往matchItemFocus里加

              _executeAutoFocus__WEBPACK_IMPORTED_MODULE_2__[/* matchItemFocus */ "a"][itemtype] === undefined ? _executeAutoFocus__WEBPACK_IMPORTED_MODULE_2__[/* matchItemFocus */ "a"]['normal'](selector) : _executeAutoFocus__WEBPACK_IMPORTED_MODULE_2__[/* matchItemFocus */ "a"][itemtype](selector);
            }
          } else {
            if (data) {
              // 如果没有获取到对应的itemtype 就统一用normal来处理， 如果碰到特殊的就在往matchItemFocus里加
              _executeAutoFocus__WEBPACK_IMPORTED_MODULE_2__[/* matchItemFocus */ "a"][itemtype] === undefined ? _executeAutoFocus__WEBPACK_IMPORTED_MODULE_2__[/* matchItemFocus */ "a"]['normal'](selector) : _executeAutoFocus__WEBPACK_IMPORTED_MODULE_2__[/* matchItemFocus */ "a"][itemtype](selector);
            }
          }
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // this.dom = null;
        this.autoFocusToken && _platform_api__WEBPACK_IMPORTED_MODULE_1__["PubSub"].subscribe(this.autoFocusToken);
      }
    }, {
      key: "render",
      value: function render() {
        // console.log(this.props.children);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent // ref={dom => {
        //     console.log(dom);
        //     this.dom = dom;
        // }}
        , this.props);
      }
    }]);

    return WithAutoFocus;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
}

/* harmony default export */ __webpack_exports__["a"] = (FormWithAutoFocus);

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

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

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