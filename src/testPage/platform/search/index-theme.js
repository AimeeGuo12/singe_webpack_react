(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("@platform/template/index"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@platform/api/index", "@platform/base/index", "@platform/template/index"], factory);
	else if(typeof exports === 'object')
		exports["@platform/search/index"] = factory(require("react"), require("@platform/api/index"), require("@platform/base/index"), require("@platform/template/index"));
	else
		root["@platform/search/index"] = factory(root["React"], root["@platform/api/index"], root["@platform/base/index"], root["@platform/template/index"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__12__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1916);
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

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(93),
    getRawTag = __webpack_require__(328),
    objectToString = __webpack_require__(329);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

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

module.exports = baseGetTag;


/***/ }),

/***/ 110:
/***/ (function(module, exports) {

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

module.exports = eq;


/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DragDropContext = __webpack_require__(911);

Object.defineProperty(exports, 'DragDropContext', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragDropContext).default;
  }
});

var _DragDropContextProvider = __webpack_require__(1831);

Object.defineProperty(exports, 'DragDropContextProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragDropContextProvider).default;
  }
});

var _DragLayer = __webpack_require__(1832);

Object.defineProperty(exports, 'DragLayer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragLayer).default;
  }
});

var _DragSource = __webpack_require__(1833);

Object.defineProperty(exports, 'DragSource', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragSource).default;
  }
});

var _DropTarget = __webpack_require__(1843);

Object.defineProperty(exports, 'DropTarget', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DropTarget).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(107),
    isObject = __webpack_require__(87);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

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

module.exports = isFunction;


/***/ }),

/***/ 147:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(107),
    getPrototype = __webpack_require__(1809),
    isObjectLike = __webpack_require__(94);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(372),
    overRest = __webpack_require__(729),
    setToString = __webpack_require__(731);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36)))

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(330),
    mapCacheDelete = __webpack_require__(349),
    mapCacheGet = __webpack_require__(351),
    mapCacheHas = __webpack_require__(352),
    mapCacheSet = __webpack_require__(353);

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

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(373),
    isObjectLike = __webpack_require__(94);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ 1804:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1805:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1806:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DragDropManager = __webpack_require__(1807);

Object.defineProperty(exports, 'DragDropManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragDropManager).default;
  }
});

var _DragSource = __webpack_require__(1828);

Object.defineProperty(exports, 'DragSource', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragSource).default;
  }
});

var _DropTarget = __webpack_require__(1829);

Object.defineProperty(exports, 'DropTarget', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DropTarget).default;
  }
});

var _createTestBackend = __webpack_require__(1830);

Object.defineProperty(exports, 'createTestBackend', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createTestBackend).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 1807:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createStore = __webpack_require__(1808);

var _createStore2 = _interopRequireDefault(_createStore);

var _reducers = __webpack_require__(1811);

var _reducers2 = _interopRequireDefault(_reducers);

var _dragDrop = __webpack_require__(414);

var dragDropActions = _interopRequireWildcard(_dragDrop);

var _DragDropMonitor = __webpack_require__(1823);

var _DragDropMonitor2 = _interopRequireDefault(_DragDropMonitor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DragDropManager = function () {
	function DragDropManager(createBackend) {
		var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, DragDropManager);

		var store = (0, _createStore2.default)(_reducers2.default);
		this.context = context;
		this.store = store;
		this.monitor = new _DragDropMonitor2.default(store);
		this.registry = this.monitor.registry;
		this.backend = createBackend(this);

		store.subscribe(this.handleRefCountChange.bind(this));
	}

	_createClass(DragDropManager, [{
		key: 'handleRefCountChange',
		value: function handleRefCountChange() {
			var shouldSetUp = this.store.getState().refCount > 0;
			if (shouldSetUp && !this.isSetUp) {
				this.backend.setup();
				this.isSetUp = true;
			} else if (!shouldSetUp && this.isSetUp) {
				this.backend.teardown();
				this.isSetUp = false;
			}
		}
	}, {
		key: 'getContext',
		value: function getContext() {
			return this.context;
		}
	}, {
		key: 'getMonitor',
		value: function getMonitor() {
			return this.monitor;
		}
	}, {
		key: 'getBackend',
		value: function getBackend() {
			return this.backend;
		}
	}, {
		key: 'getRegistry',
		value: function getRegistry() {
			return this.registry;
		}
	}, {
		key: 'getActions',
		value: function getActions() {
			var manager = this;
			var dispatch = this.store.dispatch;


			function bindActionCreator(actionCreator) {
				return function () {
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
					}

					var action = actionCreator.apply(manager, args);
					if (typeof action !== 'undefined') {
						dispatch(action);
					}
				};
			}

			return Object.keys(dragDropActions).filter(function (key) {
				return typeof dragDropActions[key] === 'function';
			}).reduce(function (boundActions, key) {
				var action = dragDropActions[key];
				boundActions[key] = bindActionCreator(action); // eslint-disable-line no-param-reassign
				return boundActions;
			}, {});
		}
	}]);

	return DragDropManager;
}();

exports.default = DragDropManager;

/***/ }),

/***/ 1808:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ActionTypes = undefined;
exports['default'] = createStore;

var _isPlainObject = __webpack_require__(153);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(88);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2['default'])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2['default']] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
}

/***/ }),

/***/ 1809:
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(1810);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 1810:
/***/ (function(module, exports) {

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

module.exports = overArg;


/***/ }),

/***/ 1811:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = reduce;

var _dragOffset = __webpack_require__(912);

var _dragOffset2 = _interopRequireDefault(_dragOffset);

var _dragOperation = __webpack_require__(1812);

var _dragOperation2 = _interopRequireDefault(_dragOperation);

var _refCount = __webpack_require__(1813);

var _refCount2 = _interopRequireDefault(_refCount);

var _dirtyHandlerIds = __webpack_require__(915);

var _dirtyHandlerIds2 = _interopRequireDefault(_dirtyHandlerIds);

var _stateId = __webpack_require__(1822);

var _stateId2 = _interopRequireDefault(_stateId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reduce() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	return {
		dirtyHandlerIds: (0, _dirtyHandlerIds2.default)(state.dirtyHandlerIds, action, state.dragOperation),
		dragOffset: (0, _dragOffset2.default)(state.dragOffset, action),
		refCount: (0, _refCount2.default)(state.refCount, action),
		dragOperation: (0, _dragOperation2.default)(state.dragOperation, action),
		stateId: (0, _stateId2.default)(state.stateId)
	};
}

/***/ }),

/***/ 1812:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = dragOperation;

var _without = __webpack_require__(914);

var _without2 = _interopRequireDefault(_without);

var _dragDrop = __webpack_require__(414);

var _registry = __webpack_require__(417);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	itemType: null,
	item: null,
	sourceId: null,
	targetIds: [],
	dropResult: null,
	didDrop: false,
	isSourcePublic: null
};

function dragOperation() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case _dragDrop.BEGIN_DRAG:
			return _extends({}, state, {
				itemType: action.itemType,
				item: action.item,
				sourceId: action.sourceId,
				isSourcePublic: action.isSourcePublic,
				dropResult: null,
				didDrop: false
			});
		case _dragDrop.PUBLISH_DRAG_SOURCE:
			return _extends({}, state, {
				isSourcePublic: true
			});
		case _dragDrop.HOVER:
			return _extends({}, state, {
				targetIds: action.targetIds
			});
		case _registry.REMOVE_TARGET:
			if (state.targetIds.indexOf(action.targetId) === -1) {
				return state;
			}
			return _extends({}, state, {
				targetIds: (0, _without2.default)(state.targetIds, action.targetId)
			});
		case _dragDrop.DROP:
			return _extends({}, state, {
				dropResult: action.dropResult,
				didDrop: true,
				targetIds: []
			});
		case _dragDrop.END_DRAG:
			return _extends({}, state, {
				itemType: null,
				item: null,
				sourceId: null,
				dropResult: null,
				didDrop: false,
				isSourcePublic: null,
				targetIds: []
			});
		default:
			return state;
	}
}

/***/ }),

/***/ 1813:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = refCount;

var _registry = __webpack_require__(417);

function refCount() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	var action = arguments[1];

	switch (action.type) {
		case _registry.ADD_SOURCE:
		case _registry.ADD_TARGET:
			return state + 1;
		case _registry.REMOVE_SOURCE:
		case _registry.REMOVE_TARGET:
			return state - 1;
		default:
			return state;
	}
}

/***/ }),

/***/ 1814:
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(1815),
    baseRest = __webpack_require__(154),
    baseXor = __webpack_require__(1816),
    isArrayLikeObject = __webpack_require__(178);

/**
 * Creates an array of unique values that is the
 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
 * of the given arrays. The order of result values is determined by the order
 * they occur in the arrays.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.without
 * @example
 *
 * _.xor([2, 1], [2, 3]);
 * // => [1, 3]
 */
var xor = baseRest(function(arrays) {
  return baseXor(arrayFilter(arrays, isArrayLikeObject));
});

module.exports = xor;


/***/ }),

/***/ 1815:
/***/ (function(module, exports) {

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

module.exports = arrayFilter;


/***/ }),

/***/ 1816:
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(415),
    baseFlatten = __webpack_require__(418),
    baseUniq = __webpack_require__(916);

/**
 * The base implementation of methods like `_.xor`, without support for
 * iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of values.
 */
function baseXor(arrays, iteratee, comparator) {
  var length = arrays.length;
  if (length < 2) {
    return length ? baseUniq(arrays[0]) : [];
  }
  var index = -1,
      result = Array(length);

  while (++index < length) {
    var array = arrays[index],
        othIndex = -1;

    while (++othIndex < length) {
      if (othIndex != index) {
        result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
      }
    }
  }
  return baseUniq(baseFlatten(result, 1), iteratee, comparator);
}

module.exports = baseXor;


/***/ }),

/***/ 1817:
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(1818),
    noop = __webpack_require__(917),
    setToArray = __webpack_require__(918);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ 1818:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(86),
    root = __webpack_require__(64);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 1819:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(147),
    baseIntersection = __webpack_require__(1820),
    baseRest = __webpack_require__(154),
    castArrayLikeObject = __webpack_require__(1821);

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function(arrays) {
  var mapped = arrayMap(arrays, castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : [];
});

module.exports = intersection;


/***/ }),

/***/ 1820:
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(367),
    arrayIncludes = __webpack_require__(368),
    arrayIncludesWith = __webpack_require__(369),
    arrayMap = __webpack_require__(147),
    baseUnary = __webpack_require__(370),
    cacheHas = __webpack_require__(371);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersection;


/***/ }),

/***/ 1821:
/***/ (function(module, exports, __webpack_require__) {

var isArrayLikeObject = __webpack_require__(178);

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

module.exports = castArrayLikeObject;


/***/ }),

/***/ 1822:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = stateId;
function stateId() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	return state + 1;
}

/***/ }),

/***/ 1823:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _invariant = __webpack_require__(32);

var _invariant2 = _interopRequireDefault(_invariant);

var _isArray = __webpack_require__(78);

var _isArray2 = _interopRequireDefault(_isArray);

var _matchesType = __webpack_require__(913);

var _matchesType2 = _interopRequireDefault(_matchesType);

var _HandlerRegistry = __webpack_require__(1824);

var _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry);

var _dragOffset = __webpack_require__(912);

var _dirtyHandlerIds = __webpack_require__(915);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DragDropMonitor = function () {
	function DragDropMonitor(store) {
		_classCallCheck(this, DragDropMonitor);

		this.store = store;
		this.registry = new _HandlerRegistry2.default(store);
	}

	_createClass(DragDropMonitor, [{
		key: 'subscribeToStateChange',
		value: function subscribeToStateChange(listener) {
			var _this = this;

			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var handlerIds = options.handlerIds;

			(0, _invariant2.default)(typeof listener === 'function', 'listener must be a function.');
			(0, _invariant2.default)(typeof handlerIds === 'undefined' || (0, _isArray2.default)(handlerIds), 'handlerIds, when specified, must be an array of strings.');

			var prevStateId = this.store.getState().stateId;
			var handleChange = function handleChange() {
				var state = _this.store.getState();
				var currentStateId = state.stateId;
				try {
					var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !(0, _dirtyHandlerIds.areDirty)(state.dirtyHandlerIds, handlerIds);

					if (!canSkipListener) {
						listener();
					}
				} finally {
					prevStateId = currentStateId;
				}
			};

			return this.store.subscribe(handleChange);
		}
	}, {
		key: 'subscribeToOffsetChange',
		value: function subscribeToOffsetChange(listener) {
			var _this2 = this;

			(0, _invariant2.default)(typeof listener === 'function', 'listener must be a function.');

			var previousState = this.store.getState().dragOffset;
			var handleChange = function handleChange() {
				var nextState = _this2.store.getState().dragOffset;
				if (nextState === previousState) {
					return;
				}

				previousState = nextState;
				listener();
			};

			return this.store.subscribe(handleChange);
		}
	}, {
		key: 'canDragSource',
		value: function canDragSource(sourceId) {
			var source = this.registry.getSource(sourceId);
			(0, _invariant2.default)(source, 'Expected to find a valid source.');

			if (this.isDragging()) {
				return false;
			}

			return source.canDrag(this, sourceId);
		}
	}, {
		key: 'canDropOnTarget',
		value: function canDropOnTarget(targetId) {
			var target = this.registry.getTarget(targetId);
			(0, _invariant2.default)(target, 'Expected to find a valid target.');

			if (!this.isDragging() || this.didDrop()) {
				return false;
			}

			var targetType = this.registry.getTargetType(targetId);
			var draggedItemType = this.getItemType();
			return (0, _matchesType2.default)(targetType, draggedItemType) && target.canDrop(this, targetId);
		}
	}, {
		key: 'isDragging',
		value: function isDragging() {
			return Boolean(this.getItemType());
		}
	}, {
		key: 'isDraggingSource',
		value: function isDraggingSource(sourceId) {
			var source = this.registry.getSource(sourceId, true);
			(0, _invariant2.default)(source, 'Expected to find a valid source.');

			if (!this.isDragging() || !this.isSourcePublic()) {
				return false;
			}

			var sourceType = this.registry.getSourceType(sourceId);
			var draggedItemType = this.getItemType();
			if (sourceType !== draggedItemType) {
				return false;
			}

			return source.isDragging(this, sourceId);
		}
	}, {
		key: 'isOverTarget',
		value: function isOverTarget(targetId) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { shallow: false };
			var shallow = options.shallow;

			if (!this.isDragging()) {
				return false;
			}

			var targetType = this.registry.getTargetType(targetId);
			var draggedItemType = this.getItemType();
			if (!(0, _matchesType2.default)(targetType, draggedItemType)) {
				return false;
			}

			var targetIds = this.getTargetIds();
			if (!targetIds.length) {
				return false;
			}

			var index = targetIds.indexOf(targetId);
			if (shallow) {
				return index === targetIds.length - 1;
			} else {
				return index > -1;
			}
		}
	}, {
		key: 'getItemType',
		value: function getItemType() {
			return this.store.getState().dragOperation.itemType;
		}
	}, {
		key: 'getItem',
		value: function getItem() {
			return this.store.getState().dragOperation.item;
		}
	}, {
		key: 'getSourceId',
		value: function getSourceId() {
			return this.store.getState().dragOperation.sourceId;
		}
	}, {
		key: 'getTargetIds',
		value: function getTargetIds() {
			return this.store.getState().dragOperation.targetIds;
		}
	}, {
		key: 'getDropResult',
		value: function getDropResult() {
			return this.store.getState().dragOperation.dropResult;
		}
	}, {
		key: 'didDrop',
		value: function didDrop() {
			return this.store.getState().dragOperation.didDrop;
		}
	}, {
		key: 'isSourcePublic',
		value: function isSourcePublic() {
			return this.store.getState().dragOperation.isSourcePublic;
		}
	}, {
		key: 'getInitialClientOffset',
		value: function getInitialClientOffset() {
			return this.store.getState().dragOffset.initialClientOffset;
		}
	}, {
		key: 'getInitialSourceClientOffset',
		value: function getInitialSourceClientOffset() {
			return this.store.getState().dragOffset.initialSourceClientOffset;
		}
	}, {
		key: 'getClientOffset',
		value: function getClientOffset() {
			return this.store.getState().dragOffset.clientOffset;
		}
	}, {
		key: 'getSourceClientOffset',
		value: function getSourceClientOffset() {
			return (0, _dragOffset.getSourceClientOffset)(this.store.getState().dragOffset);
		}
	}, {
		key: 'getDifferenceFromInitialOffset',
		value: function getDifferenceFromInitialOffset() {
			return (0, _dragOffset.getDifferenceFromInitialOffset)(this.store.getState().dragOffset);
		}
	}]);

	return DragDropMonitor;
}();

exports.default = DragDropMonitor;

/***/ }),

/***/ 1824:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _invariant = __webpack_require__(32);

var _invariant2 = _interopRequireDefault(_invariant);

var _isArray = __webpack_require__(78);

var _isArray2 = _interopRequireDefault(_isArray);

var _asap = __webpack_require__(1825);

var _asap2 = _interopRequireDefault(_asap);

var _registry = __webpack_require__(417);

var _getNextUniqueId = __webpack_require__(1827);

var _getNextUniqueId2 = _interopRequireDefault(_getNextUniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HandlerRoles = {
	SOURCE: 'SOURCE',
	TARGET: 'TARGET'
};

function validateSourceContract(source) {
	(0, _invariant2.default)(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
	(0, _invariant2.default)(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
	(0, _invariant2.default)(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}

function validateTargetContract(target) {
	(0, _invariant2.default)(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
	(0, _invariant2.default)(typeof target.hover === 'function', 'Expected hover to be a function.');
	(0, _invariant2.default)(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}

function validateType(type, allowArray) {
	if (allowArray && (0, _isArray2.default)(type)) {
		type.forEach(function (t) {
			return validateType(t, false);
		});
		return;
	}

	(0, _invariant2.default)(typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}

function getNextHandlerId(role) {
	var id = (0, _getNextUniqueId2.default)().toString();
	switch (role) {
		case HandlerRoles.SOURCE:
			return 'S' + id;
		case HandlerRoles.TARGET:
			return 'T' + id;
		default:
			(0, _invariant2.default)(false, 'Unknown role: ' + role);
	}
}

function parseRoleFromHandlerId(handlerId) {
	switch (handlerId[0]) {
		case 'S':
			return HandlerRoles.SOURCE;
		case 'T':
			return HandlerRoles.TARGET;
		default:
			(0, _invariant2.default)(false, 'Cannot parse handler ID: ' + handlerId);
	}
}

var HandlerRegistry = function () {
	function HandlerRegistry(store) {
		_classCallCheck(this, HandlerRegistry);

		this.store = store;

		this.types = {};
		this.handlers = {};

		this.pinnedSourceId = null;
		this.pinnedSource = null;
	}

	_createClass(HandlerRegistry, [{
		key: 'addSource',
		value: function addSource(type, source) {
			validateType(type);
			validateSourceContract(source);

			var sourceId = this.addHandler(HandlerRoles.SOURCE, type, source);
			this.store.dispatch((0, _registry.addSource)(sourceId));
			return sourceId;
		}
	}, {
		key: 'addTarget',
		value: function addTarget(type, target) {
			validateType(type, true);
			validateTargetContract(target);

			var targetId = this.addHandler(HandlerRoles.TARGET, type, target);
			this.store.dispatch((0, _registry.addTarget)(targetId));
			return targetId;
		}
	}, {
		key: 'addHandler',
		value: function addHandler(role, type, handler) {
			var id = getNextHandlerId(role);
			this.types[id] = type;
			this.handlers[id] = handler;

			return id;
		}
	}, {
		key: 'containsHandler',
		value: function containsHandler(handler) {
			var _this = this;

			return Object.keys(this.handlers).some(function (key) {
				return _this.handlers[key] === handler;
			});
		}
	}, {
		key: 'getSource',
		value: function getSource(sourceId, includePinned) {
			(0, _invariant2.default)(this.isSourceId(sourceId), 'Expected a valid source ID.');

			var isPinned = includePinned && sourceId === this.pinnedSourceId;
			var source = isPinned ? this.pinnedSource : this.handlers[sourceId];

			return source;
		}
	}, {
		key: 'getTarget',
		value: function getTarget(targetId) {
			(0, _invariant2.default)(this.isTargetId(targetId), 'Expected a valid target ID.');
			return this.handlers[targetId];
		}
	}, {
		key: 'getSourceType',
		value: function getSourceType(sourceId) {
			(0, _invariant2.default)(this.isSourceId(sourceId), 'Expected a valid source ID.');
			return this.types[sourceId];
		}
	}, {
		key: 'getTargetType',
		value: function getTargetType(targetId) {
			(0, _invariant2.default)(this.isTargetId(targetId), 'Expected a valid target ID.');
			return this.types[targetId];
		}
	}, {
		key: 'isSourceId',
		value: function isSourceId(handlerId) {
			var role = parseRoleFromHandlerId(handlerId);
			return role === HandlerRoles.SOURCE;
		}
	}, {
		key: 'isTargetId',
		value: function isTargetId(handlerId) {
			var role = parseRoleFromHandlerId(handlerId);
			return role === HandlerRoles.TARGET;
		}
	}, {
		key: 'removeSource',
		value: function removeSource(sourceId) {
			var _this2 = this;

			(0, _invariant2.default)(this.getSource(sourceId), 'Expected an existing source.');
			this.store.dispatch((0, _registry.removeSource)(sourceId));

			(0, _asap2.default)(function () {
				delete _this2.handlers[sourceId];
				delete _this2.types[sourceId];
			});
		}
	}, {
		key: 'removeTarget',
		value: function removeTarget(targetId) {
			var _this3 = this;

			(0, _invariant2.default)(this.getTarget(targetId), 'Expected an existing target.');
			this.store.dispatch((0, _registry.removeTarget)(targetId));

			(0, _asap2.default)(function () {
				delete _this3.handlers[targetId];
				delete _this3.types[targetId];
			});
		}
	}, {
		key: 'pinSource',
		value: function pinSource(sourceId) {
			var source = this.getSource(sourceId);
			(0, _invariant2.default)(source, 'Expected an existing source.');

			this.pinnedSourceId = sourceId;
			this.pinnedSource = source;
		}
	}, {
		key: 'unpinSource',
		value: function unpinSource() {
			(0, _invariant2.default)(this.pinnedSource, 'No source is pinned at the time.');

			this.pinnedSourceId = null;
			this.pinnedSource = null;
		}
	}]);

	return HandlerRegistry;
}();

exports.default = HandlerRegistry;

/***/ }),

/***/ 1825:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// rawAsap provides everything we need except exception management.
var rawAsap = __webpack_require__(1826);
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};


/***/ }),

/***/ 1826:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36)))

/***/ }),

/***/ 1827:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getNextUniqueId;
var nextUniqueId = 0;

function getNextUniqueId() {
	return nextUniqueId++;
}

/***/ }),

/***/ 1828:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DragSource = function () {
	function DragSource() {
		_classCallCheck(this, DragSource);
	}

	_createClass(DragSource, [{
		key: "canDrag",
		value: function canDrag() {
			return true;
		}
	}, {
		key: "isDragging",
		value: function isDragging(monitor, handle) {
			return handle === monitor.getSourceId();
		}
	}, {
		key: "endDrag",
		value: function endDrag() {}
	}]);

	return DragSource;
}();

exports.default = DragSource;

/***/ }),

/***/ 1829:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DropTarget = function () {
	function DropTarget() {
		_classCallCheck(this, DropTarget);
	}

	_createClass(DropTarget, [{
		key: "canDrop",
		value: function canDrop() {
			return true;
		}
	}, {
		key: "hover",
		value: function hover() {}
	}, {
		key: "drop",
		value: function drop() {}
	}]);

	return DropTarget;
}();

exports.default = DropTarget;

/***/ }),

/***/ 1830:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createBackend;

var _noop = __webpack_require__(917);

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestBackend = function () {
	function TestBackend(manager) {
		_classCallCheck(this, TestBackend);

		this.actions = manager.getActions();
	}

	_createClass(TestBackend, [{
		key: 'setup',
		value: function setup() {
			this.didCallSetup = true;
		}
	}, {
		key: 'teardown',
		value: function teardown() {
			this.didCallTeardown = true;
		}
	}, {
		key: 'connectDragSource',
		value: function connectDragSource() {
			return _noop2.default;
		}
	}, {
		key: 'connectDragPreview',
		value: function connectDragPreview() {
			return _noop2.default;
		}
	}, {
		key: 'connectDropTarget',
		value: function connectDropTarget() {
			return _noop2.default;
		}
	}, {
		key: 'simulateBeginDrag',
		value: function simulateBeginDrag(sourceIds, options) {
			this.actions.beginDrag(sourceIds, options);
		}
	}, {
		key: 'simulatePublishDragSource',
		value: function simulatePublishDragSource() {
			this.actions.publishDragSource();
		}
	}, {
		key: 'simulateHover',
		value: function simulateHover(targetIds, options) {
			this.actions.hover(targetIds, options);
		}
	}, {
		key: 'simulateDrop',
		value: function simulateDrop() {
			this.actions.drop();
		}
	}, {
		key: 'simulateEndDrag',
		value: function simulateEndDrag() {
			this.actions.endDrag();
		}
	}]);

	return TestBackend;
}();

function createBackend(manager) {
	return new TestBackend(manager);
}

/***/ }),

/***/ 1831:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DragDropContext = __webpack_require__(911);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class is a React-Component based version of the DragDropContext.
 * This is an alternative to decorating an application component with an ES7 decorator.
 */
var DragDropContextProvider = (_temp = _class = function (_Component) {
	_inherits(DragDropContextProvider, _Component);

	function DragDropContextProvider(props, context) {
		_classCallCheck(this, DragDropContextProvider);

		/**
   * This property determines which window global to use for creating the DragDropManager.
   * If a window has been injected explicitly via props, that is used first. If it is available
   * as a context value, then use that, otherwise use the browser global.
   */
		var _this = _possibleConstructorReturn(this, (DragDropContextProvider.__proto__ || Object.getPrototypeOf(DragDropContextProvider)).call(this, props, context));

		var getWindow = function getWindow() {
			if (props && props.window) {
				return props.window;
			} else if (context && context.window) {
				return context.window;
			} else if (typeof window !== 'undefined') {
				return window;
			}
			return undefined;
		};

		_this.backend = (0, _DragDropContext.unpackBackendForEs5Users)(props.backend);
		_this.childContext = (0, _DragDropContext.createChildContext)(_this.backend, {
			window: getWindow()
		});
		return _this;
	}

	_createClass(DragDropContextProvider, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.backend !== this.props.backend || nextProps.window !== this.props.window) {
				throw new Error('DragDropContextProvider backend and window props must not change.');
			}
		}
	}, {
		key: 'getChildContext',
		value: function getChildContext() {
			return this.childContext;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react.Children.only(this.props.children);
		}
	}]);

	return DragDropContextProvider;
}(_react.Component), _class.propTypes = {
	backend: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]).isRequired,
	children: _propTypes2.default.element.isRequired,
	window: _propTypes2.default.object // eslint-disable-line react/forbid-prop-types
}, _class.defaultProps = {
	window: undefined
}, _class.childContextTypes = _DragDropContext.CHILD_CONTEXT_TYPES, _class.displayName = 'DragDropContextProvider', _class.contextTypes = {
	window: _propTypes2.default.object
}, _temp);
exports.default = DragDropContextProvider;

/***/ }),

/***/ 1832:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = DragLayer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(738);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _isPlainObject = __webpack_require__(153);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _invariant = __webpack_require__(32);

var _invariant2 = _interopRequireDefault(_invariant);

var _shallowEqual = __webpack_require__(739);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _shallowEqualScalar = __webpack_require__(919);

var _shallowEqualScalar2 = _interopRequireDefault(_shallowEqualScalar);

var _checkDecoratorArguments = __webpack_require__(420);

var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function DragLayer(collect) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	_checkDecoratorArguments2.default.apply(undefined, ['DragLayer', 'collect[, options]'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params
	(0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ', 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', collect);
	(0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. ' + 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', options);

	return function decorateLayer(DecoratedComponent) {
		var _class, _temp;

		var _options$arePropsEqua = options.arePropsEqual,
		    arePropsEqual = _options$arePropsEqua === undefined ? _shallowEqualScalar2.default : _options$arePropsEqua;

		var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

		var DragLayerContainer = (_temp = _class = function (_Component) {
			_inherits(DragLayerContainer, _Component);

			_createClass(DragLayerContainer, [{
				key: 'getDecoratedComponentInstance',
				value: function getDecoratedComponentInstance() {
					(0, _invariant2.default)(this.child, 'In order to access an instance of the decorated component it can not be a stateless component.');
					return this.child;
				}
			}, {
				key: 'shouldComponentUpdate',
				value: function shouldComponentUpdate(nextProps, nextState) {
					return !arePropsEqual(nextProps, this.props) || !(0, _shallowEqual2.default)(nextState, this.state);
				}
			}]);

			function DragLayerContainer(props, context) {
				_classCallCheck(this, DragLayerContainer);

				var _this = _possibleConstructorReturn(this, (DragLayerContainer.__proto__ || Object.getPrototypeOf(DragLayerContainer)).call(this, props));

				_this.handleChange = _this.handleChange.bind(_this);

				_this.manager = context.dragDropManager;
				(0, _invariant2.default)(_typeof(_this.manager) === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

				_this.state = _this.getCurrentState();
				return _this;
			}

			_createClass(DragLayerContainer, [{
				key: 'componentDidMount',
				value: function componentDidMount() {
					this.isCurrentlyMounted = true;

					var monitor = this.manager.getMonitor();
					this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
					this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);

					this.handleChange();
				}
			}, {
				key: 'componentWillUnmount',
				value: function componentWillUnmount() {
					this.isCurrentlyMounted = false;

					this.unsubscribeFromOffsetChange();
					this.unsubscribeFromStateChange();
				}
			}, {
				key: 'handleChange',
				value: function handleChange() {
					if (!this.isCurrentlyMounted) {
						return;
					}

					var nextState = this.getCurrentState();
					if (!(0, _shallowEqual2.default)(nextState, this.state)) {
						this.setState(nextState);
					}
				}
			}, {
				key: 'getCurrentState',
				value: function getCurrentState() {
					var monitor = this.manager.getMonitor();
					return collect(monitor, this.props);
				}
			}, {
				key: 'render',
				value: function render() {
					var _this2 = this;

					return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, this.state, {
						ref: function ref(child) {
							_this2.child = child;
						}
					}));
				}
			}]);

			return DragLayerContainer;
		}(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = 'DragLayer(' + displayName + ')', _class.contextTypes = {
			dragDropManager: _propTypes2.default.object.isRequired
		}, _temp);


		return (0, _hoistNonReactStatics2.default)(DragLayerContainer, DecoratedComponent);
	};
}

/***/ }),

/***/ 1833:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = DragSource;

var _invariant = __webpack_require__(32);

var _invariant2 = _interopRequireDefault(_invariant);

var _isPlainObject = __webpack_require__(153);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _checkDecoratorArguments = __webpack_require__(420);

var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

var _decorateHandler = __webpack_require__(920);

var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

var _registerSource = __webpack_require__(1838);

var _registerSource2 = _interopRequireDefault(_registerSource);

var _createSourceFactory = __webpack_require__(1839);

var _createSourceFactory2 = _interopRequireDefault(_createSourceFactory);

var _createSourceMonitor = __webpack_require__(1840);

var _createSourceMonitor2 = _interopRequireDefault(_createSourceMonitor);

var _createSourceConnector = __webpack_require__(1841);

var _createSourceConnector2 = _interopRequireDefault(_createSourceConnector);

var _isValidType = __webpack_require__(923);

var _isValidType2 = _interopRequireDefault(_isValidType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DragSource(type, spec, collect) {
	var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	_checkDecoratorArguments2.default.apply(undefined, ['DragSource', 'type, spec, collect[, options]'].concat(Array.prototype.slice.call(arguments)));
	var getType = type;
	if (typeof type !== 'function') {
		(0, _invariant2.default)((0, _isValidType2.default)(type), 'Expected "type" provided as the first argument to DragSource to be ' + 'a string, or a function that returns a string given the current props. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', type);
		getType = function getType() {
			return type;
		};
	}
	(0, _invariant2.default)((0, _isPlainObject2.default)(spec), 'Expected "spec" provided as the second argument to DragSource to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', spec);
	var createSource = (0, _createSourceFactory2.default)(spec);
	(0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);
	(0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the fourth argument to DragSource to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);

	return function decorateSource(DecoratedComponent) {
		return (0, _decorateHandler2.default)({
			connectBackend: function connectBackend(backend, sourceId) {
				return backend.connectDragSource(sourceId);
			},
			containerDisplayName: 'DragSource',
			createHandler: createSource,
			registerHandler: _registerSource2.default,
			createMonitor: _createSourceMonitor2.default,
			createConnector: _createSourceConnector2.default,
			DecoratedComponent: DecoratedComponent,
			getType: getType,
			collect: collect,
			options: options
		});
	};
}

/***/ }),

/***/ 1834:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _isDisposable2 = __webpack_require__(740);

var _isDisposable3 = _interopRequireDefault(_isDisposable2);

exports.isDisposable = _isDisposable3['default'];

var _Disposable2 = __webpack_require__(1835);

var _Disposable3 = _interopRequireDefault(_Disposable2);

exports.Disposable = _Disposable3['default'];

var _CompositeDisposable2 = __webpack_require__(1836);

var _CompositeDisposable3 = _interopRequireDefault(_CompositeDisposable2);

exports.CompositeDisposable = _CompositeDisposable3['default'];

var _SerialDisposable2 = __webpack_require__(1837);

var _SerialDisposable3 = _interopRequireDefault(_SerialDisposable2);

exports.SerialDisposable = _SerialDisposable3['default'];

/***/ }),

/***/ 1835:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var noop = function noop() {};

/**
 * The basic disposable.
 */

var Disposable = (function () {
  _createClass(Disposable, null, [{
    key: "empty",
    value: { dispose: noop },
    enumerable: true
  }]);

  function Disposable(action) {
    _classCallCheck(this, Disposable);

    this.isDisposed = false;
    this.action = action || noop;
  }

  Disposable.prototype.dispose = function dispose() {
    if (!this.isDisposed) {
      this.action.call(null);
      this.isDisposed = true;
    }
  };

  return Disposable;
})();

exports["default"] = Disposable;
module.exports = exports["default"];

/***/ }),

/***/ 1836:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _isDisposable = __webpack_require__(740);

var _isDisposable2 = _interopRequireDefault(_isDisposable);

/**
 * Represents a group of disposable resources that are disposed together.
 */

var CompositeDisposable = (function () {
  function CompositeDisposable() {
    for (var _len = arguments.length, disposables = Array(_len), _key = 0; _key < _len; _key++) {
      disposables[_key] = arguments[_key];
    }

    _classCallCheck(this, CompositeDisposable);

    if (Array.isArray(disposables[0]) && disposables.length === 1) {
      disposables = disposables[0];
    }

    for (var i = 0; i < disposables.length; i++) {
      if (!_isDisposable2['default'](disposables[i])) {
        throw new Error('Expected a disposable');
      }
    }

    this.disposables = disposables;
    this.isDisposed = false;
  }

  /**
   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
   * @param {Disposable} item Disposable to add.
   */

  CompositeDisposable.prototype.add = function add(item) {
    if (this.isDisposed) {
      item.dispose();
    } else {
      this.disposables.push(item);
    }
  };

  /**
   * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
   * @param {Disposable} item Disposable to remove.
   * @returns {Boolean} true if found; false otherwise.
   */

  CompositeDisposable.prototype.remove = function remove(item) {
    if (this.isDisposed) {
      return false;
    }

    var index = this.disposables.indexOf(item);
    if (index === -1) {
      return false;
    }

    this.disposables.splice(index, 1);
    item.dispose();
    return true;
  };

  /**
   * Disposes all disposables in the group and removes them from the group.
   */

  CompositeDisposable.prototype.dispose = function dispose() {
    if (this.isDisposed) {
      return;
    }

    var len = this.disposables.length;
    var currentDisposables = new Array(len);
    for (var i = 0; i < len; i++) {
      currentDisposables[i] = this.disposables[i];
    }

    this.isDisposed = true;
    this.disposables = [];
    this.length = 0;

    for (var i = 0; i < len; i++) {
      currentDisposables[i].dispose();
    }
  };

  return CompositeDisposable;
})();

exports['default'] = CompositeDisposable;
module.exports = exports['default'];

/***/ }),

/***/ 1837:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _isDisposable = __webpack_require__(740);

var _isDisposable2 = _interopRequireDefault(_isDisposable);

var SerialDisposable = (function () {
  function SerialDisposable() {
    _classCallCheck(this, SerialDisposable);

    this.isDisposed = false;
    this.current = null;
  }

  /**
   * Gets the underlying disposable.
   * @return The underlying disposable.
   */

  SerialDisposable.prototype.getDisposable = function getDisposable() {
    return this.current;
  };

  /**
   * Sets the underlying disposable.
   * @param {Disposable} value The new underlying disposable.
   */

  SerialDisposable.prototype.setDisposable = function setDisposable() {
    var value = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

    if (value != null && !_isDisposable2['default'](value)) {
      throw new Error('Expected either an empty value or a valid disposable');
    }

    var isDisposed = this.isDisposed;
    var previous = undefined;

    if (!isDisposed) {
      previous = this.current;
      this.current = value;
    }

    if (previous) {
      previous.dispose();
    }

    if (isDisposed && value) {
      value.dispose();
    }
  };

  /**
   * Disposes the underlying disposable as well as all future replacements.
   */

  SerialDisposable.prototype.dispose = function dispose() {
    if (this.isDisposed) {
      return;
    }

    this.isDisposed = true;
    var previous = this.current;
    this.current = null;

    if (previous) {
      previous.dispose();
    }
  };

  return SerialDisposable;
})();

exports['default'] = SerialDisposable;
module.exports = exports['default'];

/***/ }),

/***/ 1838:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = registerSource;
function registerSource(type, source, manager) {
	var registry = manager.getRegistry();
	var sourceId = registry.addSource(type, source);

	function unregisterSource() {
		registry.removeSource(sourceId);
	}

	return {
		handlerId: sourceId,
		unregister: unregisterSource
	};
}

/***/ }),

/***/ 1839:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createSourceFactory;

var _invariant = __webpack_require__(32);

var _invariant2 = _interopRequireDefault(_invariant);

var _isPlainObject = __webpack_require__(153);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'];
var REQUIRED_SPEC_METHODS = ['beginDrag'];

function createSourceFactory(spec) {
	Object.keys(spec).forEach(function (key) {
		(0, _invariant2.default)(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(', '), key);
		(0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
	});
	REQUIRED_SPEC_METHODS.forEach(function (key) {
		(0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
	});

	var Source = function () {
		function Source(monitor) {
			_classCallCheck(this, Source);

			this.monitor = monitor;
			this.props = null;
			this.component = null;
		}

		_createClass(Source, [{
			key: 'receiveProps',
			value: function receiveProps(props) {
				this.props = props;
			}
		}, {
			key: 'receiveComponent',
			value: function receiveComponent(component) {
				this.component = component;
			}
		}, {
			key: 'canDrag',
			value: function canDrag() {
				if (!spec.canDrag) {
					return true;
				}

				return spec.canDrag(this.props, this.monitor);
			}
		}, {
			key: 'isDragging',
			value: function isDragging(globalMonitor, sourceId) {
				if (!spec.isDragging) {
					return sourceId === globalMonitor.getSourceId();
				}

				return spec.isDragging(this.props, this.monitor);
			}
		}, {
			key: 'beginDrag',
			value: function beginDrag() {
				var item = spec.beginDrag(this.props, this.monitor, this.component);
				if (false) {}
				return item;
			}
		}, {
			key: 'endDrag',
			value: function endDrag() {
				if (!spec.endDrag) {
					return;
				}

				spec.endDrag(this.props, this.monitor, this.component);
			}
		}]);

		return Source;
	}();

	return function createSource(monitor) {
		return new Source(monitor);
	};
}

/***/ }),

/***/ 1840:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createSourceMonitor;

var _invariant = __webpack_require__(32);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isCallingCanDrag = false;
var isCallingIsDragging = false;

var SourceMonitor = function () {
	function SourceMonitor(manager) {
		_classCallCheck(this, SourceMonitor);

		this.internalMonitor = manager.getMonitor();
	}

	_createClass(SourceMonitor, [{
		key: 'receiveHandlerId',
		value: function receiveHandlerId(sourceId) {
			this.sourceId = sourceId;
		}
	}, {
		key: 'canDrag',
		value: function canDrag() {
			(0, _invariant2.default)(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');

			try {
				isCallingCanDrag = true;
				return this.internalMonitor.canDragSource(this.sourceId);
			} finally {
				isCallingCanDrag = false;
			}
		}
	}, {
		key: 'isDragging',
		value: function isDragging() {
			(0, _invariant2.default)(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');

			try {
				isCallingIsDragging = true;
				return this.internalMonitor.isDraggingSource(this.sourceId);
			} finally {
				isCallingIsDragging = false;
			}
		}
	}, {
		key: 'getItemType',
		value: function getItemType() {
			return this.internalMonitor.getItemType();
		}
	}, {
		key: 'getItem',
		value: function getItem() {
			return this.internalMonitor.getItem();
		}
	}, {
		key: 'getDropResult',
		value: function getDropResult() {
			return this.internalMonitor.getDropResult();
		}
	}, {
		key: 'didDrop',
		value: function didDrop() {
			return this.internalMonitor.didDrop();
		}
	}, {
		key: 'getInitialClientOffset',
		value: function getInitialClientOffset() {
			return this.internalMonitor.getInitialClientOffset();
		}
	}, {
		key: 'getInitialSourceClientOffset',
		value: function getInitialSourceClientOffset() {
			return this.internalMonitor.getInitialSourceClientOffset();
		}
	}, {
		key: 'getSourceClientOffset',
		value: function getSourceClientOffset() {
			return this.internalMonitor.getSourceClientOffset();
		}
	}, {
		key: 'getClientOffset',
		value: function getClientOffset() {
			return this.internalMonitor.getClientOffset();
		}
	}, {
		key: 'getDifferenceFromInitialOffset',
		value: function getDifferenceFromInitialOffset() {
			return this.internalMonitor.getDifferenceFromInitialOffset();
		}
	}]);

	return SourceMonitor;
}();

function createSourceMonitor(manager) {
	return new SourceMonitor(manager);
}

/***/ }),

/***/ 1841:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = createSourceConnector;

var _wrapConnectorHooks = __webpack_require__(921);

var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

var _areOptionsEqual = __webpack_require__(922);

var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createSourceConnector(backend) {
	var currentHandlerId = void 0;

	var currentDragSourceNode = void 0;
	var currentDragSourceOptions = void 0;
	var disconnectCurrentDragSource = void 0;

	var currentDragPreviewNode = void 0;
	var currentDragPreviewOptions = void 0;
	var disconnectCurrentDragPreview = void 0;

	function reconnectDragSource() {
		if (disconnectCurrentDragSource) {
			disconnectCurrentDragSource();
			disconnectCurrentDragSource = null;
		}

		if (currentHandlerId && currentDragSourceNode) {
			disconnectCurrentDragSource = backend.connectDragSource(currentHandlerId, currentDragSourceNode, currentDragSourceOptions);
		}
	}

	function reconnectDragPreview() {
		if (disconnectCurrentDragPreview) {
			disconnectCurrentDragPreview();
			disconnectCurrentDragPreview = null;
		}

		if (currentHandlerId && currentDragPreviewNode) {
			disconnectCurrentDragPreview = backend.connectDragPreview(currentHandlerId, currentDragPreviewNode, currentDragPreviewOptions);
		}
	}

	function receiveHandlerId(handlerId) {
		if (handlerId === currentHandlerId) {
			return;
		}

		currentHandlerId = handlerId;
		reconnectDragSource();
		reconnectDragPreview();
	}

	var hooks = (0, _wrapConnectorHooks2.default)({
		dragSource: function connectDragSource(node, options) {
			if (node === currentDragSourceNode && (0, _areOptionsEqual2.default)(options, currentDragSourceOptions)) {
				return;
			}

			currentDragSourceNode = node;
			currentDragSourceOptions = options;

			reconnectDragSource();
		},

		dragPreview: function connectDragPreview(node, options) {
			if (node === currentDragPreviewNode && (0, _areOptionsEqual2.default)(options, currentDragPreviewOptions)) {
				return;
			}

			currentDragPreviewNode = node;
			currentDragPreviewOptions = options;

			reconnectDragPreview();
		}
	});

	return {
		receiveHandlerId: receiveHandlerId,
		hooks: hooks
	};
}

/***/ }),

/***/ 1842:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = cloneWithRef;

var _invariant = __webpack_require__(32);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cloneWithRef(element, newRef) {
	var previousRef = element.ref;
	(0, _invariant2.default)(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');

	if (!previousRef) {
		// When there is no ref on the element, use the new ref directly
		return (0, _react.cloneElement)(element, {
			ref: newRef
		});
	}

	return (0, _react.cloneElement)(element, {
		ref: function ref(node) {
			newRef(node);

			if (previousRef) {
				previousRef(node);
			}
		}
	});
}

/***/ }),

/***/ 1843:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = DropTarget;

var _invariant = __webpack_require__(32);

var _invariant2 = _interopRequireDefault(_invariant);

var _isPlainObject = __webpack_require__(153);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _checkDecoratorArguments = __webpack_require__(420);

var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

var _decorateHandler = __webpack_require__(920);

var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

var _registerTarget = __webpack_require__(1844);

var _registerTarget2 = _interopRequireDefault(_registerTarget);

var _createTargetFactory = __webpack_require__(1845);

var _createTargetFactory2 = _interopRequireDefault(_createTargetFactory);

var _createTargetMonitor = __webpack_require__(1846);

var _createTargetMonitor2 = _interopRequireDefault(_createTargetMonitor);

var _createTargetConnector = __webpack_require__(1847);

var _createTargetConnector2 = _interopRequireDefault(_createTargetConnector);

var _isValidType = __webpack_require__(923);

var _isValidType2 = _interopRequireDefault(_isValidType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DropTarget(type, spec, collect) {
	var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	_checkDecoratorArguments2.default.apply(undefined, ['DropTarget', 'type, spec, collect[, options]'].concat(Array.prototype.slice.call(arguments)));
	var getType = type;
	if (typeof type !== 'function') {
		(0, _invariant2.default)((0, _isValidType2.default)(type, true), 'Expected "type" provided as the first argument to DropTarget to be ' + 'a string, an array of strings, or a function that returns either given ' + 'the current props. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', type);
		getType = function getType() {
			return type;
		};
	}
	(0, _invariant2.default)((0, _isPlainObject2.default)(spec), 'Expected "spec" provided as the second argument to DropTarget to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', spec);
	var createTarget = (0, _createTargetFactory2.default)(spec);
	(0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);
	(0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the fourth argument to DropTarget to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);

	return function decorateTarget(DecoratedComponent) {
		return (0, _decorateHandler2.default)({
			connectBackend: function connectBackend(backend, targetId) {
				return backend.connectDropTarget(targetId);
			},
			containerDisplayName: 'DropTarget',
			createHandler: createTarget,
			registerHandler: _registerTarget2.default,
			createMonitor: _createTargetMonitor2.default,
			createConnector: _createTargetConnector2.default,
			DecoratedComponent: DecoratedComponent,
			getType: getType,
			collect: collect,
			options: options
		});
	};
}

/***/ }),

/***/ 1844:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = registerTarget;
function registerTarget(type, target, manager) {
	var registry = manager.getRegistry();
	var targetId = registry.addTarget(type, target);

	function unregisterTarget() {
		registry.removeTarget(targetId);
	}

	return {
		handlerId: targetId,
		unregister: unregisterTarget
	};
}

/***/ }),

/***/ 1845:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createTargetFactory;

var _invariant = __webpack_require__(32);

var _invariant2 = _interopRequireDefault(_invariant);

var _isPlainObject = __webpack_require__(153);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];

function createTargetFactory(spec) {
	Object.keys(spec).forEach(function (key) {
		(0, _invariant2.default)(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', ALLOWED_SPEC_METHODS.join(', '), key);
		(0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', key, key, spec[key]);
	});

	var Target = function () {
		function Target(monitor) {
			_classCallCheck(this, Target);

			this.monitor = monitor;
			this.props = null;
			this.component = null;
		}

		_createClass(Target, [{
			key: 'receiveProps',
			value: function receiveProps(props) {
				this.props = props;
			}
		}, {
			key: 'receiveMonitor',
			value: function receiveMonitor(monitor) {
				this.monitor = monitor;
			}
		}, {
			key: 'receiveComponent',
			value: function receiveComponent(component) {
				this.component = component;
			}
		}, {
			key: 'canDrop',
			value: function canDrop() {
				if (!spec.canDrop) {
					return true;
				}

				return spec.canDrop(this.props, this.monitor);
			}
		}, {
			key: 'hover',
			value: function hover() {
				if (!spec.hover) {
					return;
				}

				spec.hover(this.props, this.monitor, this.component);
			}
		}, {
			key: 'drop',
			value: function drop() {
				if (!spec.drop) {
					return undefined;
				}

				var dropResult = spec.drop(this.props, this.monitor, this.component);
				if (false) {}
				return dropResult;
			}
		}]);

		return Target;
	}();

	return function createTarget(monitor) {
		return new Target(monitor);
	};
}

/***/ }),

/***/ 1846:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createTargetMonitor;

var _invariant = __webpack_require__(32);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isCallingCanDrop = false;

var TargetMonitor = function () {
	function TargetMonitor(manager) {
		_classCallCheck(this, TargetMonitor);

		this.internalMonitor = manager.getMonitor();
	}

	_createClass(TargetMonitor, [{
		key: 'receiveHandlerId',
		value: function receiveHandlerId(targetId) {
			this.targetId = targetId;
		}
	}, {
		key: 'canDrop',
		value: function canDrop() {
			(0, _invariant2.default)(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target-monitor.html');

			try {
				isCallingCanDrop = true;
				return this.internalMonitor.canDropOnTarget(this.targetId);
			} finally {
				isCallingCanDrop = false;
			}
		}
	}, {
		key: 'isOver',
		value: function isOver(options) {
			return this.internalMonitor.isOverTarget(this.targetId, options);
		}
	}, {
		key: 'getItemType',
		value: function getItemType() {
			return this.internalMonitor.getItemType();
		}
	}, {
		key: 'getItem',
		value: function getItem() {
			return this.internalMonitor.getItem();
		}
	}, {
		key: 'getDropResult',
		value: function getDropResult() {
			return this.internalMonitor.getDropResult();
		}
	}, {
		key: 'didDrop',
		value: function didDrop() {
			return this.internalMonitor.didDrop();
		}
	}, {
		key: 'getInitialClientOffset',
		value: function getInitialClientOffset() {
			return this.internalMonitor.getInitialClientOffset();
		}
	}, {
		key: 'getInitialSourceClientOffset',
		value: function getInitialSourceClientOffset() {
			return this.internalMonitor.getInitialSourceClientOffset();
		}
	}, {
		key: 'getSourceClientOffset',
		value: function getSourceClientOffset() {
			return this.internalMonitor.getSourceClientOffset();
		}
	}, {
		key: 'getClientOffset',
		value: function getClientOffset() {
			return this.internalMonitor.getClientOffset();
		}
	}, {
		key: 'getDifferenceFromInitialOffset',
		value: function getDifferenceFromInitialOffset() {
			return this.internalMonitor.getDifferenceFromInitialOffset();
		}
	}]);

	return TargetMonitor;
}();

function createTargetMonitor(manager) {
	return new TargetMonitor(manager);
}

/***/ }),

/***/ 1847:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = createTargetConnector;

var _wrapConnectorHooks = __webpack_require__(921);

var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

var _areOptionsEqual = __webpack_require__(922);

var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createTargetConnector(backend) {
	var currentHandlerId = void 0;

	var currentDropTargetNode = void 0;
	var currentDropTargetOptions = void 0;
	var disconnectCurrentDropTarget = void 0;

	function reconnectDropTarget() {
		if (disconnectCurrentDropTarget) {
			disconnectCurrentDropTarget();
			disconnectCurrentDropTarget = null;
		}

		if (currentHandlerId && currentDropTargetNode) {
			disconnectCurrentDropTarget = backend.connectDropTarget(currentHandlerId, currentDropTargetNode, currentDropTargetOptions);
		}
	}

	function receiveHandlerId(handlerId) {
		if (handlerId === currentHandlerId) {
			return;
		}

		currentHandlerId = handlerId;
		reconnectDropTarget();
	}

	var hooks = (0, _wrapConnectorHooks2.default)({
		dropTarget: function connectDropTarget(node, options) {
			if (node === currentDropTargetNode && (0, _areOptionsEqual2.default)(options, currentDropTargetOptions)) {
				return;
			}

			currentDropTargetNode = node;
			currentDropTargetOptions = options;

			reconnectDropTarget();
		}
	});

	return {
		receiveHandlerId: receiveHandlerId,
		hooks: hooks
	};
}

/***/ }),

/***/ 1848:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable no-underscore-dangle */


var _defaults = __webpack_require__(1849);

var _defaults2 = _interopRequireDefault(_defaults);

var _shallowEqual = __webpack_require__(1862);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _EnterLeaveCounter = __webpack_require__(1863);

var _EnterLeaveCounter2 = _interopRequireDefault(_EnterLeaveCounter);

var _BrowserDetector = __webpack_require__(924);

var _OffsetUtils = __webpack_require__(1865);

var _NativeDragSources = __webpack_require__(1867);

var _NativeTypes = __webpack_require__(741);

var NativeTypes = _interopRequireWildcard(_NativeTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HTML5Backend = function () {
	function HTML5Backend(manager) {
		_classCallCheck(this, HTML5Backend);

		this.actions = manager.getActions();
		this.monitor = manager.getMonitor();
		this.registry = manager.getRegistry();
		this.context = manager.getContext();

		this.sourcePreviewNodes = {};
		this.sourcePreviewNodeOptions = {};
		this.sourceNodes = {};
		this.sourceNodeOptions = {};
		this.enterLeaveCounter = new _EnterLeaveCounter2.default();

		this.dragStartSourceIds = [];
		this.dropTargetIds = [];
		this.dragEnterTargetIds = [];
		this.currentNativeSource = null;
		this.currentNativeHandle = null;
		this.currentDragSourceNode = null;
		this.currentDragSourceNodeOffset = null;
		this.currentDragSourceNodeOffsetChanged = false;
		this.altKeyPressed = false;
		this.mouseMoveTimeoutTimer = null;

		this.getSourceClientOffset = this.getSourceClientOffset.bind(this);
		this.handleTopDragStart = this.handleTopDragStart.bind(this);
		this.handleTopDragStartCapture = this.handleTopDragStartCapture.bind(this);
		this.handleTopDragEndCapture = this.handleTopDragEndCapture.bind(this);
		this.handleTopDragEnter = this.handleTopDragEnter.bind(this);
		this.handleTopDragEnterCapture = this.handleTopDragEnterCapture.bind(this);
		this.handleTopDragLeaveCapture = this.handleTopDragLeaveCapture.bind(this);
		this.handleTopDragOver = this.handleTopDragOver.bind(this);
		this.handleTopDragOverCapture = this.handleTopDragOverCapture.bind(this);
		this.handleTopDrop = this.handleTopDrop.bind(this);
		this.handleTopDropCapture = this.handleTopDropCapture.bind(this);
		this.handleSelectStart = this.handleSelectStart.bind(this);
		this.endDragIfSourceWasRemovedFromDOM = this.endDragIfSourceWasRemovedFromDOM.bind(this);
		this.endDragNativeItem = this.endDragNativeItem.bind(this);
		this.asyncEndDragNativeItem = this.asyncEndDragNativeItem.bind(this);
		this.isNodeInDocument = this.isNodeInDocument.bind(this);
	}

	_createClass(HTML5Backend, [{
		key: 'setup',
		value: function setup() {
			if (this.window === undefined) {
				return;
			}

			if (this.window.__isReactDndBackendSetUp) {
				throw new Error('Cannot have two HTML5 backends at the same time.');
			}
			this.window.__isReactDndBackendSetUp = true;
			this.addEventListeners(this.window);
		}
	}, {
		key: 'teardown',
		value: function teardown() {
			if (this.window === undefined) {
				return;
			}

			this.window.__isReactDndBackendSetUp = false;
			this.removeEventListeners(this.window);
			this.clearCurrentDragSourceNode();
			if (this.asyncEndDragFrameId) {
				this.window.cancelAnimationFrame(this.asyncEndDragFrameId);
			}
		}
	}, {
		key: 'addEventListeners',
		value: function addEventListeners(target) {
			// SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
			if (!target.addEventListener) {
				return;
			}
			target.addEventListener('dragstart', this.handleTopDragStart);
			target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
			target.addEventListener('dragend', this.handleTopDragEndCapture, true);
			target.addEventListener('dragenter', this.handleTopDragEnter);
			target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
			target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
			target.addEventListener('dragover', this.handleTopDragOver);
			target.addEventListener('dragover', this.handleTopDragOverCapture, true);
			target.addEventListener('drop', this.handleTopDrop);
			target.addEventListener('drop', this.handleTopDropCapture, true);
		}
	}, {
		key: 'removeEventListeners',
		value: function removeEventListeners(target) {
			// SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
			if (!target.removeEventListener) {
				return;
			}
			target.removeEventListener('dragstart', this.handleTopDragStart);
			target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
			target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
			target.removeEventListener('dragenter', this.handleTopDragEnter);
			target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
			target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
			target.removeEventListener('dragover', this.handleTopDragOver);
			target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
			target.removeEventListener('drop', this.handleTopDrop);
			target.removeEventListener('drop', this.handleTopDropCapture, true);
		}
	}, {
		key: 'connectDragPreview',
		value: function connectDragPreview(sourceId, node, options) {
			var _this = this;

			this.sourcePreviewNodeOptions[sourceId] = options;
			this.sourcePreviewNodes[sourceId] = node;

			return function () {
				delete _this.sourcePreviewNodes[sourceId];
				delete _this.sourcePreviewNodeOptions[sourceId];
			};
		}
	}, {
		key: 'connectDragSource',
		value: function connectDragSource(sourceId, node, options) {
			var _this2 = this;

			this.sourceNodes[sourceId] = node;
			this.sourceNodeOptions[sourceId] = options;

			var handleDragStart = function handleDragStart(e) {
				return _this2.handleDragStart(e, sourceId);
			};
			var handleSelectStart = function handleSelectStart(e) {
				return _this2.handleSelectStart(e, sourceId);
			};

			node.setAttribute('draggable', true);
			node.addEventListener('dragstart', handleDragStart);
			node.addEventListener('selectstart', handleSelectStart);

			return function () {
				delete _this2.sourceNodes[sourceId];
				delete _this2.sourceNodeOptions[sourceId];

				node.removeEventListener('dragstart', handleDragStart);
				node.removeEventListener('selectstart', handleSelectStart);
				node.setAttribute('draggable', false);
			};
		}
	}, {
		key: 'connectDropTarget',
		value: function connectDropTarget(targetId, node) {
			var _this3 = this;

			var handleDragEnter = function handleDragEnter(e) {
				return _this3.handleDragEnter(e, targetId);
			};
			var handleDragOver = function handleDragOver(e) {
				return _this3.handleDragOver(e, targetId);
			};
			var handleDrop = function handleDrop(e) {
				return _this3.handleDrop(e, targetId);
			};

			node.addEventListener('dragenter', handleDragEnter);
			node.addEventListener('dragover', handleDragOver);
			node.addEventListener('drop', handleDrop);

			return function () {
				node.removeEventListener('dragenter', handleDragEnter);
				node.removeEventListener('dragover', handleDragOver);
				node.removeEventListener('drop', handleDrop);
			};
		}
	}, {
		key: 'getCurrentSourceNodeOptions',
		value: function getCurrentSourceNodeOptions() {
			var sourceId = this.monitor.getSourceId();
			var sourceNodeOptions = this.sourceNodeOptions[sourceId];

			return (0, _defaults2.default)(sourceNodeOptions || {}, {
				dropEffect: this.altKeyPressed ? 'copy' : 'move'
			});
		}
	}, {
		key: 'getCurrentDropEffect',
		value: function getCurrentDropEffect() {
			if (this.isDraggingNativeItem()) {
				// It makes more sense to default to 'copy' for native resources
				return 'copy';
			}

			return this.getCurrentSourceNodeOptions().dropEffect;
		}
	}, {
		key: 'getCurrentSourcePreviewNodeOptions',
		value: function getCurrentSourcePreviewNodeOptions() {
			var sourceId = this.monitor.getSourceId();
			var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions[sourceId];

			return (0, _defaults2.default)(sourcePreviewNodeOptions || {}, {
				anchorX: 0.5,
				anchorY: 0.5,
				captureDraggingState: false
			});
		}
	}, {
		key: 'getSourceClientOffset',
		value: function getSourceClientOffset(sourceId) {
			return (0, _OffsetUtils.getNodeClientOffset)(this.sourceNodes[sourceId]);
		}
	}, {
		key: 'isDraggingNativeItem',
		value: function isDraggingNativeItem() {
			var itemType = this.monitor.getItemType();
			return Object.keys(NativeTypes).some(function (key) {
				return NativeTypes[key] === itemType;
			});
		}
	}, {
		key: 'beginDragNativeItem',
		value: function beginDragNativeItem(type) {
			this.clearCurrentDragSourceNode();

			var SourceType = (0, _NativeDragSources.createNativeDragSource)(type);
			this.currentNativeSource = new SourceType();
			this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
			this.actions.beginDrag([this.currentNativeHandle]);
		}
	}, {
		key: 'asyncEndDragNativeItem',
		value: function asyncEndDragNativeItem() {
			this.asyncEndDragFrameId = this.window.requestAnimationFrame(this.endDragNativeItem);
		}
	}, {
		key: 'endDragNativeItem',
		value: function endDragNativeItem() {
			if (!this.isDraggingNativeItem()) {
				return;
			}

			this.actions.endDrag();
			this.registry.removeSource(this.currentNativeHandle);
			this.currentNativeHandle = null;
			this.currentNativeSource = null;
		}
	}, {
		key: 'isNodeInDocument',
		value: function isNodeInDocument(node) {
			// Check the node either in the main document or in the current context
			return document.body.contains(node) || this.window ? this.window.document.body.contains(node) : false;
		}
	}, {
		key: 'endDragIfSourceWasRemovedFromDOM',
		value: function endDragIfSourceWasRemovedFromDOM() {
			var node = this.currentDragSourceNode;
			if (this.isNodeInDocument(node)) {
				return;
			}

			if (this.clearCurrentDragSourceNode()) {
				this.actions.endDrag();
			}
		}
	}, {
		key: 'setCurrentDragSourceNode',
		value: function setCurrentDragSourceNode(node) {
			var _this4 = this;

			this.clearCurrentDragSourceNode();
			this.currentDragSourceNode = node;
			this.currentDragSourceNodeOffset = (0, _OffsetUtils.getNodeClientOffset)(node);
			this.currentDragSourceNodeOffsetChanged = false;

			// A timeout of > 0 is necessary to resolve Firefox issue referenced
			// See:
			//   * https://github.com/react-dnd/react-dnd/pull/928
			//   * https://github.com/react-dnd/react-dnd/issues/869
			var MOUSE_MOVE_TIMEOUT = 1000;

			// Receiving a mouse event in the middle of a dragging operation
			// means it has ended and the drag source node disappeared from DOM,
			// so the browser didn't dispatch the dragend event.
			//
			// We need to wait before we start listening for mousemove events.
			// This is needed because the drag preview needs to be drawn or else it fires an 'mousemove' event
			// immediately in some browsers.
			//
			// See:
			//   * https://github.com/react-dnd/react-dnd/pull/928
			//   * https://github.com/react-dnd/react-dnd/issues/869
			//
			this.mouseMoveTimeoutTimer = setTimeout(function () {
				_this4.mouseMoveTimeoutId = null;
				return _this4.window.addEventListener('mousemove', _this4.endDragIfSourceWasRemovedFromDOM, true);
			}, MOUSE_MOVE_TIMEOUT);
		}
	}, {
		key: 'clearCurrentDragSourceNode',
		value: function clearCurrentDragSourceNode() {
			if (this.currentDragSourceNode) {
				this.currentDragSourceNode = null;
				this.currentDragSourceNodeOffset = null;
				this.currentDragSourceNodeOffsetChanged = false;
				this.window.clearTimeout(this.mouseMoveTimeoutTimer);
				this.window.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
				this.mouseMoveTimeoutTimer = null;
				return true;
			}

			return false;
		}
	}, {
		key: 'checkIfCurrentDragSourceRectChanged',
		value: function checkIfCurrentDragSourceRectChanged() {
			var node = this.currentDragSourceNode;
			if (!node) {
				return false;
			}

			if (this.currentDragSourceNodeOffsetChanged) {
				return true;
			}

			this.currentDragSourceNodeOffsetChanged = !(0, _shallowEqual2.default)((0, _OffsetUtils.getNodeClientOffset)(node), this.currentDragSourceNodeOffset);

			return this.currentDragSourceNodeOffsetChanged;
		}
	}, {
		key: 'handleTopDragStartCapture',
		value: function handleTopDragStartCapture() {
			this.clearCurrentDragSourceNode();
			this.dragStartSourceIds = [];
		}
	}, {
		key: 'handleDragStart',
		value: function handleDragStart(e, sourceId) {
			this.dragStartSourceIds.unshift(sourceId);
		}
	}, {
		key: 'handleTopDragStart',
		value: function handleTopDragStart(e) {
			var _this5 = this;

			var dragStartSourceIds = this.dragStartSourceIds;

			this.dragStartSourceIds = null;

			var clientOffset = (0, _OffsetUtils.getEventClientOffset)(e);

			// Avoid crashing if we missed a drop event or our previous drag died
			if (this.monitor.isDragging()) {
				this.actions.endDrag();
			}

			// Don't publish the source just yet (see why below)
			this.actions.beginDrag(dragStartSourceIds, {
				publishSource: false,
				getSourceClientOffset: this.getSourceClientOffset,
				clientOffset: clientOffset
			});

			var dataTransfer = e.dataTransfer;

			var nativeType = (0, _NativeDragSources.matchNativeItemType)(dataTransfer);

			if (this.monitor.isDragging()) {
				if (typeof dataTransfer.setDragImage === 'function') {
					// Use custom drag image if user specifies it.
					// If child drag source refuses drag but parent agrees,
					// use parent's node as drag image. Neither works in IE though.
					var sourceId = this.monitor.getSourceId();
					var sourceNode = this.sourceNodes[sourceId];
					var dragPreview = this.sourcePreviewNodes[sourceId] || sourceNode;

					var _getCurrentSourcePrev = this.getCurrentSourcePreviewNodeOptions(),
					    anchorX = _getCurrentSourcePrev.anchorX,
					    anchorY = _getCurrentSourcePrev.anchorY,
					    offsetX = _getCurrentSourcePrev.offsetX,
					    offsetY = _getCurrentSourcePrev.offsetY;

					var anchorPoint = { anchorX: anchorX, anchorY: anchorY };
					var offsetPoint = { offsetX: offsetX, offsetY: offsetY };
					var dragPreviewOffset = (0, _OffsetUtils.getDragPreviewOffset)(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);

					dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
				}

				try {
					// Firefox won't drag without setting data
					dataTransfer.setData('application/json', {});
				} catch (err) {}
				// IE doesn't support MIME types in setData


				// Store drag source node so we can check whether
				// it is removed from DOM and trigger endDrag manually.
				this.setCurrentDragSourceNode(e.target);

				// Now we are ready to publish the drag source.. or are we not?

				var _getCurrentSourcePrev2 = this.getCurrentSourcePreviewNodeOptions(),
				    captureDraggingState = _getCurrentSourcePrev2.captureDraggingState;

				if (!captureDraggingState) {
					// Usually we want to publish it in the next tick so that browser
					// is able to screenshot the current (not yet dragging) state.
					//
					// It also neatly avoids a situation where render() returns null
					// in the same tick for the source element, and browser freaks out.
					setTimeout(function () {
						return _this5.actions.publishDragSource();
					});
				} else {
					// In some cases the user may want to override this behavior, e.g.
					// to work around IE not supporting custom drag previews.
					//
					// When using a custom drag layer, the only way to prevent
					// the default drag preview from drawing in IE is to screenshot
					// the dragging state in which the node itself has zero opacity
					// and height. In this case, though, returning null from render()
					// will abruptly end the dragging, which is not obvious.
					//
					// This is the reason such behavior is strictly opt-in.
					this.actions.publishDragSource();
				}
			} else if (nativeType) {
				// A native item (such as URL) dragged from inside the document
				this.beginDragNativeItem(nativeType);
			} else if (!dataTransfer.types && (!e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
				// Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
				// Just let it drag. It's a native type (URL or text) and will be picked up in
				// dragenter handler.
				return; // eslint-disable-line no-useless-return
			} else {
				// If by this time no drag source reacted, tell browser not to drag.
				e.preventDefault();
			}
		}
	}, {
		key: 'handleTopDragEndCapture',
		value: function handleTopDragEndCapture() {
			if (this.clearCurrentDragSourceNode()) {
				// Firefox can dispatch this event in an infinite loop
				// if dragend handler does something like showing an alert.
				// Only proceed if we have not handled it already.
				this.actions.endDrag();
			}
		}
	}, {
		key: 'handleTopDragEnterCapture',
		value: function handleTopDragEnterCapture(e) {
			this.dragEnterTargetIds = [];

			var isFirstEnter = this.enterLeaveCounter.enter(e.target);
			if (!isFirstEnter || this.monitor.isDragging()) {
				return;
			}

			var dataTransfer = e.dataTransfer;

			var nativeType = (0, _NativeDragSources.matchNativeItemType)(dataTransfer);

			if (nativeType) {
				// A native item (such as file or URL) dragged from outside the document
				this.beginDragNativeItem(nativeType);
			}
		}
	}, {
		key: 'handleDragEnter',
		value: function handleDragEnter(e, targetId) {
			this.dragEnterTargetIds.unshift(targetId);
		}
	}, {
		key: 'handleTopDragEnter',
		value: function handleTopDragEnter(e) {
			var _this6 = this;

			var dragEnterTargetIds = this.dragEnterTargetIds;

			this.dragEnterTargetIds = [];

			if (!this.monitor.isDragging()) {
				// This is probably a native item type we don't understand.
				return;
			}

			this.altKeyPressed = e.altKey;

			if (!(0, _BrowserDetector.isFirefox)()) {
				// Don't emit hover in `dragenter` on Firefox due to an edge case.
				// If the target changes position as the result of `dragenter`, Firefox
				// will still happily dispatch `dragover` despite target being no longer
				// there. The easy solution is to only fire `hover` in `dragover` on FF.
				this.actions.hover(dragEnterTargetIds, {
					clientOffset: (0, _OffsetUtils.getEventClientOffset)(e)
				});
			}

			var canDrop = dragEnterTargetIds.some(function (targetId) {
				return _this6.monitor.canDropOnTarget(targetId);
			});

			if (canDrop) {
				// IE requires this to fire dragover events
				e.preventDefault();
				e.dataTransfer.dropEffect = this.getCurrentDropEffect();
			}
		}
	}, {
		key: 'handleTopDragOverCapture',
		value: function handleTopDragOverCapture() {
			this.dragOverTargetIds = [];
		}
	}, {
		key: 'handleDragOver',
		value: function handleDragOver(e, targetId) {
			this.dragOverTargetIds.unshift(targetId);
		}
	}, {
		key: 'handleTopDragOver',
		value: function handleTopDragOver(e) {
			var _this7 = this;

			var dragOverTargetIds = this.dragOverTargetIds;

			this.dragOverTargetIds = [];

			if (!this.monitor.isDragging()) {
				// This is probably a native item type we don't understand.
				// Prevent default "drop and blow away the whole document" action.
				e.preventDefault();
				e.dataTransfer.dropEffect = 'none';
				return;
			}

			this.altKeyPressed = e.altKey;

			this.actions.hover(dragOverTargetIds, {
				clientOffset: (0, _OffsetUtils.getEventClientOffset)(e)
			});

			var canDrop = dragOverTargetIds.some(function (targetId) {
				return _this7.monitor.canDropOnTarget(targetId);
			});

			if (canDrop) {
				// Show user-specified drop effect.
				e.preventDefault();
				e.dataTransfer.dropEffect = this.getCurrentDropEffect();
			} else if (this.isDraggingNativeItem()) {
				// Don't show a nice cursor but still prevent default
				// "drop and blow away the whole document" action.
				e.preventDefault();
				e.dataTransfer.dropEffect = 'none';
			} else if (this.checkIfCurrentDragSourceRectChanged()) {
				// Prevent animating to incorrect position.
				// Drop effect must be other than 'none' to prevent animation.
				e.preventDefault();
				e.dataTransfer.dropEffect = 'move';
			}
		}
	}, {
		key: 'handleTopDragLeaveCapture',
		value: function handleTopDragLeaveCapture(e) {
			if (this.isDraggingNativeItem()) {
				e.preventDefault();
			}

			var isLastLeave = this.enterLeaveCounter.leave(e.target);
			if (!isLastLeave) {
				return;
			}

			if (this.isDraggingNativeItem()) {
				this.endDragNativeItem();
			}
		}
	}, {
		key: 'handleTopDropCapture',
		value: function handleTopDropCapture(e) {
			this.dropTargetIds = [];
			e.preventDefault();

			if (this.isDraggingNativeItem()) {
				this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer);
			}

			this.enterLeaveCounter.reset();
		}
	}, {
		key: 'handleDrop',
		value: function handleDrop(e, targetId) {
			this.dropTargetIds.unshift(targetId);
		}
	}, {
		key: 'handleTopDrop',
		value: function handleTopDrop(e) {
			var dropTargetIds = this.dropTargetIds;

			this.dropTargetIds = [];

			this.actions.hover(dropTargetIds, {
				clientOffset: (0, _OffsetUtils.getEventClientOffset)(e)
			});
			this.actions.drop({ dropEffect: this.getCurrentDropEffect() });

			if (this.isDraggingNativeItem()) {
				this.endDragNativeItem();
			} else {
				this.endDragIfSourceWasRemovedFromDOM();
			}
		}
	}, {
		key: 'handleSelectStart',
		value: function handleSelectStart(e) {
			var target = e.target;

			// Only IE requires us to explicitly say
			// we want drag drop operation to start

			if (typeof target.dragDrop !== 'function') {
				return;
			}

			// Inputs and textareas should be selectable
			if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
				return;
			}

			// For other targets, ask IE
			// to enable drag and drop
			e.preventDefault();
			target.dragDrop();
		}
	}, {
		key: 'window',
		get: function get() {
			if (this.context && this.context.window) {
				return this.context.window;
			} else if (typeof window !== 'undefined') {
				return window;
			}
			return undefined;
		}
	}]);

	return HTML5Backend;
}();

exports.default = HTML5Backend;

/***/ }),

/***/ 1849:
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(154),
    eq = __webpack_require__(110),
    isIterateeCall = __webpack_require__(1850),
    keysIn = __webpack_require__(1851);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),

/***/ 1850:
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(110),
    isArrayLike = __webpack_require__(373),
    isIndex = __webpack_require__(400),
    isObject = __webpack_require__(87);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ 1851:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(1852),
    baseKeysIn = __webpack_require__(1859),
    isArrayLike = __webpack_require__(373);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
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
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ 1852:
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(1853),
    isArguments = __webpack_require__(419),
    isArray = __webpack_require__(78),
    isBuffer = __webpack_require__(1854),
    isIndex = __webpack_require__(400),
    isTypedArray = __webpack_require__(1856);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

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

module.exports = arrayLikeKeys;


/***/ }),

/***/ 1853:
/***/ (function(module, exports) {

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

module.exports = baseTimes;


/***/ }),

/***/ 1854:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(64),
    stubFalse = __webpack_require__(1855);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

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

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(52)(module)))

/***/ }),

/***/ 1855:
/***/ (function(module, exports) {

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

module.exports = stubFalse;


/***/ }),

/***/ 1856:
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(1857),
    baseUnary = __webpack_require__(370),
    nodeUtil = __webpack_require__(1858);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

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

module.exports = isTypedArray;


/***/ }),

/***/ 1857:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(107),
    isLength = __webpack_require__(416),
    isObjectLike = __webpack_require__(94);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
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

module.exports = baseIsTypedArray;


/***/ }),

/***/ 1858:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(170);

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
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(52)(module)))

/***/ }),

/***/ 1859:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(87),
    isPrototype = __webpack_require__(1860),
    nativeKeysIn = __webpack_require__(1861);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ 1860:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

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

module.exports = isPrototype;


/***/ }),

/***/ 1861:
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 1862:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = shallowEqual;
function shallowEqual(objA, objB) {
	if (objA === objB) {
		return true;
	}

	var keysA = Object.keys(objA);
	var keysB = Object.keys(objB);

	if (keysA.length !== keysB.length) {
		return false;
	}

	// Test for A's keys different from B.
	var hasOwn = Object.prototype.hasOwnProperty;
	for (var i = 0; i < keysA.length; i += 1) {
		if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
			return false;
		}

		var valA = objA[keysA[i]];
		var valB = objB[keysA[i]];

		if (valA !== valB) {
			return false;
		}
	}

	return true;
}

/***/ }),

/***/ 1863:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _union = __webpack_require__(1864);

var _union2 = _interopRequireDefault(_union);

var _without = __webpack_require__(914);

var _without2 = _interopRequireDefault(_without);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EnterLeaveCounter = function () {
	function EnterLeaveCounter() {
		_classCallCheck(this, EnterLeaveCounter);

		this.entered = [];
	}

	_createClass(EnterLeaveCounter, [{
		key: 'enter',
		value: function enter(enteringNode) {
			var previousLength = this.entered.length;

			var isNodeEntered = function isNodeEntered(node) {
				return document.documentElement.contains(node) && (!node.contains || node.contains(enteringNode));
			};

			this.entered = (0, _union2.default)(this.entered.filter(isNodeEntered), [enteringNode]);

			return previousLength === 0 && this.entered.length > 0;
		}
	}, {
		key: 'leave',
		value: function leave(leavingNode) {
			var previousLength = this.entered.length;

			this.entered = (0, _without2.default)(this.entered.filter(function (node) {
				return document.documentElement.contains(node);
			}), leavingNode);

			return previousLength > 0 && this.entered.length === 0;
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.entered = [];
		}
	}]);

	return EnterLeaveCounter;
}();

exports.default = EnterLeaveCounter;

/***/ }),

/***/ 1864:
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(418),
    baseRest = __webpack_require__(154),
    baseUniq = __webpack_require__(916),
    isArrayLikeObject = __webpack_require__(178);

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ }),

/***/ 1865:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getNodeClientOffset = getNodeClientOffset;
exports.getEventClientOffset = getEventClientOffset;
exports.getDragPreviewOffset = getDragPreviewOffset;

var _BrowserDetector = __webpack_require__(924);

var _MonotonicInterpolant = __webpack_require__(1866);

var _MonotonicInterpolant2 = _interopRequireDefault(_MonotonicInterpolant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint
   no-mixed-operators: off
*/
var ELEMENT_NODE = 1;

function getNodeClientOffset(node) {
	var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;

	if (!el) {
		return null;
	}

	var _el$getBoundingClient = el.getBoundingClientRect(),
	    top = _el$getBoundingClient.top,
	    left = _el$getBoundingClient.left;

	return { x: left, y: top };
}

function getEventClientOffset(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}

function isImageNode(node) {
	return node.nodeName === 'IMG' && ((0, _BrowserDetector.isFirefox)() || !document.documentElement.contains(node));
}

function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
	var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
	var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;

	// Work around @2x coordinate discrepancies in browsers
	if ((0, _BrowserDetector.isSafari)() && isImage) {
		dragPreviewHeight /= window.devicePixelRatio;
		dragPreviewWidth /= window.devicePixelRatio;
	}
	return { dragPreviewWidth: dragPreviewWidth, dragPreviewHeight: dragPreviewHeight };
}

function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
	// The browsers will use the image intrinsic size under different conditions.
	// Firefox only cares if it's an image, but WebKit also wants it to be detached.
	var isImage = isImageNode(dragPreview);
	var dragPreviewNode = isImage ? sourceNode : dragPreview;
	var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
	var offsetFromDragPreview = {
		x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
		y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
	};
	var sourceWidth = sourceNode.offsetWidth,
	    sourceHeight = sourceNode.offsetHeight;
	var anchorX = anchorPoint.anchorX,
	    anchorY = anchorPoint.anchorY;

	var _getDragPreviewSize = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight),
	    dragPreviewWidth = _getDragPreviewSize.dragPreviewWidth,
	    dragPreviewHeight = _getDragPreviewSize.dragPreviewHeight;

	var calculateYOffset = function calculateYOffset() {
		var interpolantY = new _MonotonicInterpolant2.default([0, 0.5, 1], [
		// Dock to the top
		offsetFromDragPreview.y,
		// Align at the center
		offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
		// Dock to the bottom
		offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
		var y = interpolantY.interpolate(anchorY);
		// Work around Safari 8 positioning bug
		if ((0, _BrowserDetector.isSafari)() && isImage) {
			// We'll have to wait for @3x to see if this is entirely correct
			y += (window.devicePixelRatio - 1) * dragPreviewHeight;
		}
		return y;
	};

	var calculateXOffset = function calculateXOffset() {
		// Interpolate coordinates depending on anchor point
		// If you know a simpler way to do this, let me know
		var interpolantX = new _MonotonicInterpolant2.default([0, 0.5, 1], [
		// Dock to the left
		offsetFromDragPreview.x,
		// Align at the center
		offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
		// Dock to the right
		offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
		return interpolantX.interpolate(anchorX);
	};

	// Force offsets if specified in the options.
	var offsetX = offsetPoint.offsetX,
	    offsetY = offsetPoint.offsetY;

	var isManualOffsetX = offsetX === 0 || offsetX;
	var isManualOffsetY = offsetY === 0 || offsetY;
	return {
		x: isManualOffsetX ? offsetX : calculateXOffset(),
		y: isManualOffsetY ? offsetY : calculateYOffset()
	};
}

/***/ }),

/***/ 1866:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint
   no-plusplus: off,
   no-mixed-operators: off
*/
var MonotonicInterpolant = function () {
	function MonotonicInterpolant(xs, ys) {
		_classCallCheck(this, MonotonicInterpolant);

		var length = xs.length;

		// Rearrange xs and ys so that xs is sorted
		var indexes = [];
		for (var i = 0; i < length; i++) {
			indexes.push(i);
		}
		indexes.sort(function (a, b) {
			return xs[a] < xs[b] ? -1 : 1;
		});

		// Get consecutive differences and slopes
		var dys = [];
		var dxs = [];
		var ms = [];
		var dx = void 0;
		var dy = void 0;
		for (var _i = 0; _i < length - 1; _i++) {
			dx = xs[_i + 1] - xs[_i];
			dy = ys[_i + 1] - ys[_i];
			dxs.push(dx);
			dys.push(dy);
			ms.push(dy / dx);
		}

		// Get degree-1 coefficients
		var c1s = [ms[0]];
		for (var _i2 = 0; _i2 < dxs.length - 1; _i2++) {
			var _m = ms[_i2];
			var mNext = ms[_i2 + 1];
			if (_m * mNext <= 0) {
				c1s.push(0);
			} else {
				dx = dxs[_i2];
				var dxNext = dxs[_i2 + 1];
				var common = dx + dxNext;
				c1s.push(3 * common / ((common + dxNext) / _m + (common + dx) / mNext));
			}
		}
		c1s.push(ms[ms.length - 1]);

		// Get degree-2 and degree-3 coefficients
		var c2s = [];
		var c3s = [];
		var m = void 0;
		for (var _i3 = 0; _i3 < c1s.length - 1; _i3++) {
			m = ms[_i3];
			var c1 = c1s[_i3];
			var invDx = 1 / dxs[_i3];
			var _common = c1 + c1s[_i3 + 1] - m - m;
			c2s.push((m - c1 - _common) * invDx);
			c3s.push(_common * invDx * invDx);
		}

		this.xs = xs;
		this.ys = ys;
		this.c1s = c1s;
		this.c2s = c2s;
		this.c3s = c3s;
	}

	_createClass(MonotonicInterpolant, [{
		key: "interpolate",
		value: function interpolate(x) {
			var xs = this.xs,
			    ys = this.ys,
			    c1s = this.c1s,
			    c2s = this.c2s,
			    c3s = this.c3s;

			// The rightmost point in the dataset should give an exact result

			var i = xs.length - 1;
			if (x === xs[i]) {
				return ys[i];
			}

			// Search for the interval x is in, returning the corresponding y if x is one of the original xs
			var low = 0;
			var high = c3s.length - 1;
			var mid = void 0;
			while (low <= high) {
				mid = Math.floor(0.5 * (low + high));
				var xHere = xs[mid];
				if (xHere < x) {
					low = mid + 1;
				} else if (xHere > x) {
					high = mid - 1;
				} else {
					return ys[mid];
				}
			}
			i = Math.max(0, high);

			// Interpolate
			var diff = x - xs[i];
			var diffSq = diff * diff;
			return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
		}
	}]);

	return MonotonicInterpolant;
}();

exports.default = MonotonicInterpolant;

/***/ }),

/***/ 1867:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nativeTypesConfig;

exports.createNativeDragSource = createNativeDragSource;
exports.matchNativeItemType = matchNativeItemType;

var _NativeTypes = __webpack_require__(741);

var NativeTypes = _interopRequireWildcard(_NativeTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
	var result = typesToTry.reduce(function (resultSoFar, typeToTry) {
		return resultSoFar || dataTransfer.getData(typeToTry);
	}, null);

	return result != null // eslint-disable-line eqeqeq
	? result : defaultValue;
}

var nativeTypesConfig = (_nativeTypesConfig = {}, _defineProperty(_nativeTypesConfig, NativeTypes.FILE, {
	exposeProperty: 'files',
	matchesTypes: ['Files'],
	getData: function getData(dataTransfer) {
		return Array.prototype.slice.call(dataTransfer.files);
	}
}), _defineProperty(_nativeTypesConfig, NativeTypes.URL, {
	exposeProperty: 'urls',
	matchesTypes: ['Url', 'text/uri-list'],
	getData: function getData(dataTransfer, matchesTypes) {
		return getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n');
	}
}), _defineProperty(_nativeTypesConfig, NativeTypes.TEXT, {
	exposeProperty: 'text',
	matchesTypes: ['Text', 'text/plain'],
	getData: function getData(dataTransfer, matchesTypes) {
		return getDataFromDataTransfer(dataTransfer, matchesTypes, '');
	}
}), _nativeTypesConfig);

function createNativeDragSource(type) {
	var _nativeTypesConfig$ty = nativeTypesConfig[type],
	    exposeProperty = _nativeTypesConfig$ty.exposeProperty,
	    matchesTypes = _nativeTypesConfig$ty.matchesTypes,
	    getData = _nativeTypesConfig$ty.getData;


	return function () {
		function NativeDragSource() {
			var _item, _mutatorMap;

			_classCallCheck(this, NativeDragSource);

			this.item = (_item = {}, _mutatorMap = {}, _mutatorMap[exposeProperty] = _mutatorMap[exposeProperty] || {}, _mutatorMap[exposeProperty].get = function () {
				// eslint-disable-next-line no-console
				console.warn('Browser doesn\'t allow reading "' + exposeProperty + '" until the drop event.');
				return null;
			}, _defineEnumerableProperties(_item, _mutatorMap), _item);
		}

		_createClass(NativeDragSource, [{
			key: 'mutateItemByReadingDataTransfer',
			value: function mutateItemByReadingDataTransfer(dataTransfer) {
				delete this.item[exposeProperty];
				this.item[exposeProperty] = getData(dataTransfer, matchesTypes);
			}
		}, {
			key: 'canDrag',
			value: function canDrag() {
				return true;
			}
		}, {
			key: 'beginDrag',
			value: function beginDrag() {
				return this.item;
			}
		}, {
			key: 'isDragging',
			value: function isDragging(monitor, handle) {
				return handle === monitor.getSourceId();
			}
		}, {
			key: 'endDrag',
			value: function endDrag() {}
		}]);

		return NativeDragSource;
	}();
}

function matchNativeItemType(dataTransfer) {
	var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);

	return Object.keys(nativeTypesConfig).filter(function (nativeItemType) {
		var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;

		return matchesTypes.some(function (t) {
			return dataTransferTypes.indexOf(t) > -1;
		});
	})[0] || null;
}

/***/ }),

/***/ 1868:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getEmptyImage;
var emptyImage = void 0;
function getEmptyImage() {
	if (!emptyImage) {
		emptyImage = new Image();
		emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
	}

	return emptyImage;
}

/***/ }),

/***/ 1916:
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

// CONCATENATED MODULE: ./src/platform/components/Search/utils.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Author: wanglongz
 * @Date: 2020-06-29 15:32:34
 * @LastEditTime: 2020-08-12 10:52:47
 * @LastEditors: wanglongx
 * @Description: search 内部API使用方法处理特殊数据结构
 * @FilePath: /Platform_Front/src/platform/components/Search/utils.js
 */



/**
 * @description: 操作符
 * @param {type} 
 * @return: 
 */

var OperationOptions = [];
function setOperationOptionsMultiLang(_multiLang) {
  var multiLang = _multiLang;

  if (Object(api_index_["isEmpty"])(OperationOptions)) {
    OperationOptions = [{
      display: multiLang['page-search-0047'],
      value: '='
    }, {
      display: multiLang['page-search-0047'],
      value: '=='
    }, {
      display: multiLang['page-search-0048'],
      value: '>'
    }, {
      display: multiLang['page-search-0049'],
      value: '<'
    }, {
      display: multiLang['page-search-0050'],
      value: 'between'
    }, {
      display: multiLang['page-search-0051'],
      value: '>='
    }, {
      display: multiLang['page-search-0052'],
      value: '<='
    }, {
      display: multiLang['page-search-0053'],
      value: '<>'
    }, {
      display: multiLang['page-search-0054'],
      value: 'like'
    }, {
      display: multiLang['page-search-0055'],
      value: 'left like'
    }, {
      display: multiLang['page-search-0056'],
      value: 'right like'
    }, {
      display: multiLang['page-search-0057'],
      value: 'is null'
    }, {
      display: multiLang['page-search-0084'],
      value: 'not like'
    }, {
      display: multiLang['page-search-0085'],
      value: 'is not null'
    }];
  }
}
/**
 * @description: 建议删除
 * @param {type} 
 * @return: 
 */

function _clone(obj) {
  return JSON.parse(JSON.stringify(obj === undefined ? '' : obj));
}
/**
 * @description: 从缓存中获取函数翻译值
 * @param {type} 
 * @return: 
 */

function getFunctionValueFromViewModal(VALUE) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var reslut = _clone(VALUE);

  var obj = {
    '#mainorg#': {
      // 默认主组织
      display: context.org_Name || '',
      value: context.pk_org || ''
    },
    '#DefaultCostRegion#': {
      // 默认成本域
      display: context.defaultCostRegionName || '',
      value: context.defaultCostRegionPk || ''
    },
    '#DefaultCreditCtlRegion#': {
      //默认信用域
      display: context.defaultCreditCtlRegionName || '',
      value: context.defaultCreditCtlRegionPk || ''
    },
    '#accountingbook#': {
      //默认账簿
      display: context.defaultAccbookName || '',
      value: context.defaultAccbookPk || ''
    },
    '#operator#': {
      //当前操作员
      display: context.userName || '',
      value: context.userId || ''
    },
    '#currentgroup#': {
      //当前集团
      display: context.groupName || '',
      value: context.groupId || ''
    }
  };

  if (Array.isArray(reslut)) {
    reslut.map(function (item) {
      if (item.value && item.value.indexOf('#') !== -1) {
        item = obj[item.value] || item;
      }

      return item;
    });
  } else {
    if (reslut.value && reslut.value.indexOf('#') !== -1) {
      reslut = obj[reslut.value] || reslut;
    }
  }

  return reslut;
}
/**
 * @description: 为提供默认的 条件组的初始值
 * @param {type} 
 * @return: 
 */

function initDefaultSnapshot(items, context, isTemplateOrder) {
  var _this2 = this;

  function getValue(item) {
    var initialvalue = {
      display: '',
      value: ''
    };

    if (item.itemtype === 'checkbox_switch') {
      initialvalue.value = false;
    } else if (item.itemtype === 'refer' && item.initialvalue) {
      var refervalue = getFunctionValueFromViewModal(item.initialvalue, context);
      item.initialvalue.display = refervalue.display || item.initialvalue.display;
    } else if (item.itemtype === 'residtxt') {
      var index = item.languageMeta.filter(function (val) {
        return val.languageCode == api_index_["localeLang"];
      })[0].index;
      initialvalue.index = index;

      if (item.initialvalue && !item.initialvalue.hasOwnProperty('index')) {
        item.initialvalue.index = index;
      }
    }

    return item.initialvalue && (!Object(api_index_["isEmpty"])(item.initialvalue.value) || item.initialvalue.index) ? item.initialvalue : initialvalue;
  }

  var result = [];

  if (Object(api_index_["isArray"])(items)) {
    var snapshotList = items.filter(function (item) {
      return (item.visible || item.isfixedcondition) && item.isdrag;
    });
    var requireList = [];
    var fiexedList = [];
    var otherList = [];
    snapshotList.forEach(function (item, index) {
      if (!(Number(item.visibleposition) > 0)) {
        item.visibleposition = 99999 + index;
      }

      if (item.isfixedcondition) {
        fiexedList.push(item);
      } else if (item.required) {
        requireList.push(item);
      } else {
        otherList.push(item);
      }
    });
    fiexedList.sort(function (v1, v2) {
      return Number(v1.visibleposition) - Number(v2.visibleposition);
    });

    if (isTemplateOrder) {
      var notFixed = requireList.concat(otherList).sort(function (v1, v2) {
        return Number(v1.visibleposition) - Number(v2.visibleposition);
      });
      snapshotList = fiexedList.concat(notFixed);
    } else {
      requireList.sort(function (v1, v2) {
        return Number(v1.visibleposition) - Number(v2.visibleposition);
      });
      otherList.sort(function (v1, v2) {
        return Number(v1.visibleposition) - Number(v2.visibleposition);
      });
      snapshotList = fiexedList.concat(requireList).concat(otherList);
    } // snapshotList.sort((v1, v2) => Number(v1.visibleposition) - Number(v2.visibleposition));


    snapshotList.forEach(function (item) {
      var value = getValue.call(_this2, item);
      var obj = {
        attrcode: item.attrcode,
        initialvalue: value,
        operationSign: item.queryOperateType ? item.queryOperateType.split('@')[0] : '',
        operationOptions: createOperation(item.queryOperateType),
        remove: item.required != true && item.isfixedcondition != true,
        // label 查询区收起时需要 add by wanglongx
        label: item.label,
        isfixedcondition: !!item.isfixedcondition,
        isExtend: !!item.isfixedcondition,
        visible: true,
        uniqueKey: generateKey(),
        fieldValue: _objectSpread({}, value)
      };

      if (item.itemtype === 'residtxt') {
        obj.valueMap = {};

        if (value.index == '1') {
          obj.valueMap[item.attrcode] = {
            value: value.value
          };
        } else {
          obj.valueMap[item.attrcode + value.index] = {
            value: value.value
          };
        }
      }

      result.push(obj);
    });
  }

  return result;
}
/**
 * @description: 处理运算符
 * @param {type} 
 * @return: 
 */

function createOperation(data) {
  data = data || '';
  data = data.replace(/^@+|@$/g, '');
  var o = data.split('@');
  var newArr = [];
  o.forEach(function (item) {
    for (var i = 0; i < OperationOptions.length; i++) {
      if (item === OperationOptions[i].value) {
        newArr.push(OperationOptions[i]);
        break;
      }
    }
  });
  return newArr;
}
/**
 * @description: 处理自然时间转多时区和起终点 time 是时间 flage：start 当天0点，end当天24点 假就是不处理
 * @param {type} 
 * @return: 
 */

function naturalTimeHandler(time, flag) {
  var format = '';

  switch (flag) {
    case 'start':
      format = 'YYYY-MM-DD HH:mm:ss';
      break;

    case 'end':
      format = 'YYYY-MM-DD HH:mm:ss';
      break;
  }

  var loc = Object(api_index_["DongbaToLocalTime"])(Object(api_index_["moment"])(time)).format(format);
  var dong8 = Object(api_index_["LocalToDongbaTime"])(Object(api_index_["moment"])(loc)).format('YYYY-MM-DD HH:mm:ss');
  return dong8;
} //树结构转数组

function tree2Array(data) {
  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (Array.isArray(data)) {
    data.forEach(function (item) {
      if (item.children) {
        tree2Array(item.children, result);
      } else {
        result.push(item);
      }
    });
  }

  return result;
} //方案平铺

function planExtend(itemsMap, items, context) {
  var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var level = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  if (Array.isArray(items)) {
    items.forEach(function (item) {
      if (item.children) {
        planExtend(itemsMap, item.children, context, result, ++level);
      } else {
        var initialvalue = {
          display: '',
          value: ''
        };
        item.initialvalue = item.initialvalue || item.value;
        var tempItem = itemsMap.query(item.attrcode);

        if (tempItem) {
          if (tempItem.itemtype === 'checkbox_switch') {
            initialvalue.value = false;
          } else if (tempItem.itemtype === 'refer' && item.initialvalue) {
            var refervalue = getFunctionValueFromViewModal.call(item.initialvalue, context);
            item.initialvalue.display = refervalue.display || item.initialvalue.display;
          } else if (tempItem.itemtype === 'residtxt') {
            var index = tempItem.languageMeta.filter(function (val) {
              return val.languageCode == api_index_["localeLang"];
            })[0].index;
            initialvalue.index = index;

            if (item.initialvalue && !item.initialvalue.hasOwnProperty('index')) {
              item.initialvalue.index = index;
            }
          }

          var obj = {
            attrcode: item.attrcode,
            refpk: item.attrcode,
            initialvalue: item.initialvalue && (item.initialvalue.value || item.initialvalue.value === false || item.initialvalue.display || item.initialvalue.index) ? item.initialvalue : initialvalue,
            //此处initialvalue判空可能有问题，调试的时候再改 xuyang
            operationSign: item.operationSign || item.queryOperateType.split('@')[0] || '',
            remove: item.hasOwnProperty('remove') ? item.remove : tempItem.required != true && tempItem.isfixedcondition != true,
            visible: true,
            uniqueKey: generateKey(),
            fieldValue: item.initialvalue && (item.initialvalue.value || item.initialvalue.value === false || item.initialvalue.display || item.initialvalue.index) ? item.initialvalue : initialvalue
          };

          if (tempItem.itemtype === 'refer') {
            obj.runWithChildren = !!item.runWithChildren;
            obj.refurl = item.refurl || '';
          } else if (tempItem.itemtype === 'residtxt') {
            obj.valueMap = {};

            if (!item.hasOwnProperty('valueMap') && obj.initialvalue.value) {
              obj.valueMap[item.attrcode + obj.initialvalue.index] = {
                value: obj.initialvalue.value
              };
            } else if (item.hasOwnProperty('valueMap')) {
              obj.valueMap = item.valueMap;
            }
          }

          if (tempItem.isfixedcondition && level < 2) {
            obj.visible = false;
          }

          result.push(obj);
        }
      }
    });
  }

  return result;
} // 将查询方案转换成 snapshot

function plan2snapshotTranslate(itemsMap, items, context) {
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (Array.isArray(items)) {
    items.forEach(function (item) {
      if (item.children) {
        plan2snapshotTranslate(itemsMap, item.children, context, ++level);
      } else {
        var initialvalue = {
          display: '',
          value: ''
        };
        item.initialvalue = item.initialvalue || item.value;
        var tempItem = itemsMap.query(item.attrcode);

        if (tempItem) {
          if (tempItem.itemtype === 'checkbox_switch') {
            initialvalue.value = false;
          } else if (item.itemtype === 'refer' && item.initialvalue) {
            var refervalue = getFunctionValueFromViewModal.call(item.initialvalue, context);
            item.initialvalue.display = refervalue.display || item.initialvalue.display;
          } else if (item.itemtype === 'residtxt') {
            var index = item.languageMeta.filter(function (val) {
              return val.languageCode == api_index_["localeLang"];
            })[0].index;
            initialvalue.index = index;

            if (item.initialvalue && !item.initialvalue.hasOwnProperty('index')) {
              item.initialvalue.index = index;
            }
          }

          item.uniqueKey = generateKey();
          item.refpk = item.attrcode;
          item.initialvalue = item.initialvalue && (item.initialvalue.value || item.initialvalue.value === false || item.initialvalue.display || item.initialvalue.index) ? item.initialvalue : initialvalue; //此处initialvalue判空可能有问题，调试的时候再改 xuyang

          item.operationSign = item.operationSign || item.queryOperateType.split('@')[0] || '';
          item.operationOptions = createOperation(tempItem.queryOperateType);
          item.remove = item.hasOwnProperty('remove') ? item.remove : tempItem.required != true && tempItem.isfixedcondition != true;

          if (tempItem.itemtype === 'residtxt' && !item.hasOwnProperty('valueMap') && item.initialvalue.value) {
            item.valueMap = {};
            item.valueMap[item.attrcode + item.initialvalue.index] = {
              value: item.initialvalue.value
            };
          }

          item.visible = !(!item.isfixedcondition && tempItem.isfixedcondition && level < 2);
        }
      }
    });
  }

  return items;
}
/**
 * @description: 查询区收起时是否显示
 * @param {type} item {} 当前项
 * @return: Boolean
 */

function checkIsVisible(item) {
  if (item.operationSign == 'is null' || item.operationSign == 'is not null') {
    return true;
  } else if (!Object(api_index_["isEmpty"])(item.initialvalue.value) && item.type != 'refer') {
    return true;
  } else if (!Object(api_index_["isEmpty"])(item.initialvalue.value) && item.type == 'refer' && !isDateFunction(item.initialvalue.value)) {
    return true;
  } else {
    return false;
  }
}
/**
 * @description: 是否时间函数
 * @param {type} 
 * @return: 
 */

function isDateFunction(value) {
  value = String(value);
  return value.indexOf('#') !== -1;
}
/**
 * @description: 时间比较函数
 * @param {type} 
 * @return: 
 */

function CompareDate(d1, d2) {
  // console.log(d1, d2);
  return new Date(d1.replace(/-/g, '/')) > new Date(d2.replace(/-/g, '/'));
}
/* 获取查询区 所有数据 */

function utils_getAllSearchDataEve(id, flag) {
  var _this3 = this;

  var logic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'and';
  var callBackMeta = [];
  var searchInfo = this.state.searchInfo;
  var snapshot = this.currentPlanMap; // 必填校验时 把所有必填校验未通过都标红 	

  var requiredArr = []; // 这个for 循环的逻辑太复杂了 没办法 必须把 校验逻辑抽出来

  var _loop = function _loop(i) {
    if (snapshot[i].children && Array.isArray(snapshot[i].children)) {
      callBackMeta.push(utils_getAllSearchDataEve.call(_this3, id, snapshot[i].children, flag, snapshot[i].operationSign));
      return "continue";
    }

    var attrcode = snapshot[i].attrcode;
    var val = searchInfo.itemsMap[attrcode];
    var VALUE = snapshot[i].initialvalue;
    var displayVal = VALUE.display || '';
    var optSign = snapshot[i].operationSign;
    var isIncludeSub = snapshot[i].runWithChildren || false;
    var refurl = snapshot[i].refurl || '';
    var timeFunction = '';

    if (displayVal && snapshot[i].runWithChildren) {
      displayVal = displayVal + multiLang['page-search-0044'];
    }

    var data = {
      firstvalue: '',
      secondvalue: ''
    };

    if (val.required && flag && snapshot[i].visible) {
      var isKong = false;

      if (Object(api_index_["isEmpty"])(VALUE.value) || Array.isArray(VALUE.value) && !ArrayHas2Value(VALUE.value)) {
        if (optSign != 'is null' && optSign != 'is not null') {
          isKong = true;
        }
      }

      if (isKong) {
        callBackMeta = [];
        requiredArr.push(val.attrcode);
      }
    }

    if ((val.itemtype === 'rangepicker' || (val.itemtype === 'datepicker' || val.itemtype === 'NCTZDatePickerEnd' || val.itemtype === 'NCTZDatePickerStart' || val.itemtype === 'datetimepicker') && optSign === 'between') && VALUE) {
      var vals = VALUE.value;

      if (vals && !Object(api_index_["isArray"])(vals)) {
        vals = vals.split(',');
      } //给报表平台加的逻辑，如果是函数，则将函数直接传给后台


      if (isDateFunction(vals[0])) {
        timeFunction = vals.join(',');
      }

      if (vals && Object(api_index_["isArray"])(vals)) {
        if (vals.length > 0 && vals[0] && vals[0].format) {
          // 多时区转化
          var start = vals[0].format('YYYY-MM-DD');
          var end = vals[1].format('YYYY-MM-DD'); // 1 开始时间

          var currentZoneStartTime = Object(api_index_["moment"])(start).startOf('day').toDate();
          var currentZoneStartHours = currentZoneStartTime.getHours();
          var offsetZone = currentZoneStartTime.getTimezoneOffset() / 60; // 2 结束时间

          var currentZoneEndTime = Object(api_index_["moment"])(end).endOf('day').toDate();
          var currentZoneEndHours = currentZoneEndTime.getHours(); // 当地时间转换为东八区时间

          offsetZone = offsetZone + 8;
          currentZoneStartTime.setHours(currentZoneStartHours + offsetZone);
          currentZoneEndTime.setHours(currentZoneEndHours + offsetZone); //   newData.firstvalue = moment(currentZoneStartTime).format('YYYY-MM-DD HH:mm:ss');
          //   newData.secondvalue = moment(currentZoneEndTime).format('YYYY-MM-DD HH:mm:ss');

          data.firstvalue = Object(api_index_["moment"])(currentZoneStartTime).format('YYYY-MM-DD HH:mm:ss');
          data.secondvalue = Object(api_index_["moment"])(currentZoneEndTime).format('YYYY-MM-DD HH:mm:ss'); // newVal.push(value.format('YYYY-MM-DD'));
        } else if (vals.length > 0 && vals[0] && !vals[0].format) {
          data.firstvalue = vals[0];
          data.secondvalue = vals[1];
        } else if (vals.length === 0) {
          data.firstvalue = '';
          data.secondvalue = '';
        }
      }
    } else if (val.itemtype === 'refer') {
      VALUE = getFunctionValueFromViewModal(VALUE, _this3.props.context); //参照函数翻译完成之后 有可能 出现翻译不出来的情况 ，翻译不出来 再次做一次必填校验吧

      if (val.required && flag && snapshot[i].visible) {
        if (!VALUE.value && VALUE.value !== 0) {
          callBackMeta = [];
          if (!requiredArr.includes(val.attrcode)) requiredArr.push(val.attrcode);
        }
      }

      if (optSign === 'between') {
        data.firstvalue = (VALUE.value || [])[0] || '';
        data.secondvalue = (VALUE.value || [])[1] || '';
        displayVal = (VALUE.display || []).join(',');
      } else {
        displayVal = VALUE.display;
        data.firstvalue = VALUE.value;
      }
    } else if ((val.itemtype === 'select' || val.itemtype === 'number' || val.itemtype === 'datetimepicker' || val.itemtype === 'NCTZDatePickerEnd' || val.itemtype === 'NCTZDatePickerStart') && optSign === 'between') {
      data.firstvalue = (VALUE.value || [])[0];
      data.secondvalue = (VALUE.value || [])[1];
      displayVal = (VALUE.display || [])[0] + '~' + (VALUE.display || [])[1];
    } else {
      data.firstvalue = VALUE.value;
    }

    var timeItemList = ['datepicker', 'datetimepicker', 'rangepicker', 'NCTZDatePickerStart', 'NCTZDatePickerEnd', 'NCTZDatePickClientTime', 'NCTZDatePickClientHourTime', 'NCTZDatePickerRangeDay', 'datePickerNoTimeZone']; // 需要从东八区时间处理当地时间，然后计算0点和24点，按照当地时间得0点和24点分别转为东八区时间

    var localToEast = ['datepicker', 'datetimepicker', 'NCTZDatePickClientTime', 'NCTZDatePickClientHourTime']; // 开始 和结束时间是时间戳概念  操作符为 = 时不需要进行扩充为日期范围

    var timeStampType = ['NCTZDatePickerStart', 'NCTZDatePickerEnd', 'datetimepicker'];

    if (timeItemList.some(function (item) {
      return item === val.itemtype;
    }) && !Object(api_index_["isEmpty"])(VALUE.value)) {
      //xuyangt 需要优化此处逻辑 很混乱
      var firstvalue = '',
          secondvalue = '';

      if (isDateFunction(data.firstvalue) && !data.secondvalue) {
        timeFunction = data.firstvalue;
      }

      if (isDateFunction(data.firstvalue) || isDateFunction(data.secondvalue)) {
        if (optSign == '=' || optSign == '<>') {
          // start 取开始时间戳 end时 取结束时间戳
          if (timeStampType.includes(val.itemtype)) {
            if (val.itemtype === 'NCTZDatePickerEnd') {
              firstvalue = Object(api_index_["timeFunctionTranslater"])(data.firstvalue, {
                flag: false
              });
            } else {
              firstvalue = Object(api_index_["timeFunctionTranslater"])(data.firstvalue);
            }
          } else {
            firstvalue = Object(api_index_["timeFunctionTranslater"])(data.firstvalue);
            secondvalue = Object(api_index_["timeFunctionTranslater"])(data.firstvalue, {
              flag: false
            });
          }
        } else if (optSign == '<' || optSign == '>=') {
          firstvalue = Object(api_index_["timeFunctionTranslater"])(data.firstvalue);
        } else if (optSign == '>' || optSign == '<=') {
          firstvalue = Object(api_index_["timeFunctionTranslater"])(data.firstvalue, {
            flag: false
          });
        } else if (optSign == 'between') {
          if (!Object(api_index_["isEmpty"])(data.firstvalue)) {
            firstvalue = Object(api_index_["timeFunctionTranslater"])(data.firstvalue);
          }

          if (!Object(api_index_["isEmpty"])(data.secondvalue)) {
            secondvalue = Object(api_index_["timeFunctionTranslater"])(data.secondvalue, {
              flag: false
            });
          }
        }
      } else {
        if (optSign == '=' || optSign == '<>') {
          if (!timeStampType.includes(val.itemtype)) {
            // datepicker datepicker 需要处理时区从东八区时间转换为当地时间 计算当天时间[00:00:00, 23:59:59]在转换为东八区时间
            if (localToEast.includes(val.itemtype) && !isDateFunction(data.firstvalue)) {
              firstvalue = Object(api_index_["DongbaToLocalTime"])(Object(api_index_["moment"])(data.firstvalue)).format('YYYY-MM-DD 00:00:00');
              secondvalue = Object(api_index_["moment"])(firstvalue).format('YYYY-MM-DD 23:59:59'); // 转为东八区时间 

              firstvalue = Object(api_index_["LocalToDongbaTime"])(Object(api_index_["moment"])(firstvalue)).format('YYYY-MM-DD HH:mm:ss');
              secondvalue = Object(api_index_["LocalToDongbaTime"])(Object(api_index_["moment"])(secondvalue)).format('YYYY-MM-DD HH:mm:ss');
            } else {
              // start end 类型暂未处理
              firstvalue = Object(api_index_["moment"])(data.firstvalue).format('YYYY-MM-DD 00:00:00');
              secondvalue = Object(api_index_["timeFunctionTranslater"])(Object(api_index_["moment"])(data.firstvalue).format('YYYY-MM-DD 23:59:59'));
            }
          } else {
            firstvalue = data.firstvalue;
            secondvalue = firstvalue;
          }
        } else if (optSign == '<' || optSign == '>=') {
          firstvalue = naturalTimeHandler(data.firstvalue, 'start');
        } else if (optSign == '>' || optSign == '<=') {
          firstvalue = naturalTimeHandler(data.firstvalue, 'end');
        } else if (optSign == 'between') {
          if (!Object(api_index_["isEmpty"])(data.firstvalue)) {
            firstvalue = naturalTimeHandler(data.firstvalue, 'start');
          }

          if (!Object(api_index_["isEmpty"])(data.secondvalue)) {
            secondvalue = naturalTimeHandler(data.secondvalue, 'end');
          }
        } //如果存在两个值，做一下端点值大小的判断和调整


        if (firstvalue && secondvalue && CompareDate(firstvalue, secondvalue)) {
          firstvalue = Object(api_index_["timeFunctionTranslater"])(secondvalue);
          secondvalue = Object(api_index_["timeFunctionTranslater"])(firstvalue, {
            flag: false
          });
        }
      }

      if (optSign == '=') {
        optSign = 'between';
      }

      data.firstvalue = firstvalue;
      data.secondvalue = secondvalue;
    }

    if (!val.hasOwnProperty('queryOperateType')) {
      val.queryOperateType = '';
      console.error("\u67E5\u8BE2\u6A21\u677F\u4E2D\u5FC5\u987B\u8981\u6709queryOperateType\u5B57\u6BB5\uFF0C\u8BF7\u68C0\u67E5\u6A21\u677F\u4E2D".concat(val.attrcode, "\u5B57\u6BB5"));
    } //增加去除前后空格的逻辑 目前 ‘ ’作为例外情况处理


    if (data.firstvalue && typeof data.firstvalue === 'string' && data.firstvalue !== ' ') {
      data.firstvalue = data.firstvalue.trim();
    }

    if (data.secondvalue && typeof data.firstvalue === 'string' && data.secondvalue !== ' ') {
      data.secondvalue = data.secondvalue.trim();
    }

    var Obj = {
      field: attrcode,
      value: data,
      oprtype: optSign,
      display: String(displayVal || '').replace(/~/, ','),
      isIncludeSub: isIncludeSub,
      refurl: refurl,
      datatype: val.datatype || '',
      timeFunction: timeFunction
    };

    if (val.itemtype === 'residtxt') {
      Obj.langSeq = VALUE.index;
    }

    if (!Object(api_index_["isEmpty"])(Obj.value.firstvalue) || !Object(api_index_["isEmpty"])(Obj.value.secondvalue) || optSign == 'is null' || optSign == 'is not null') {
      snapshot[i].visible && callBackMeta.push(Obj);
    }
  };

  for (var i = 0; i < snapshot.length; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  } // if (requiredArr.length !== 0) {
  //     {
  //         toast({ content: multiLang['page-search-0045'], color: 'warning' });
  //     }
  //     return false;
  // }


  return {
    logic: logic,
    conditions: callBackMeta
  };
}
/* 获取查询区所有数据 */

function getAllSearchData(moduleId) {
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var f = checkModuleId.call(this, moduleId);
  if (!f) return;
  var _this = this.myState.search["searchArea_".concat(moduleId)];
  var searchInfo = _this.state.searchInfo;
  var snapshot = searchInfo.snapshotMap[searchInfo.status];
  return utils_getAllSearchDataEve.call(_this, moduleId, snapshot, flag);
}
function utils_getQueryInfo(moduleId) {
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  // let _this = this.myState.search[`searchArea_${moduleId}`];
  if (Object(api_index_["isEmpty"])(this.state.meta[moduleId])) {
    toast({
      content: multiLang['page-search-0046'],
      color: 'warning'
    });
    return {};
  } else {
    var data = getAllSearchData.call(this, moduleId, flag);

    if (data) {
      return {
        queryAreaCode: moduleId,
        oid: this.state.meta[moduleId].oid,
        querytype: 'tree',
        querycondition: data,
        nctz: getTimezoneOffset()
      };
    } else {
      return {};
    }
  }
}
function ArrayHas2Value(value) {
  var result = true;
  if (!Array.isArray(value) || value.length != 2 || Object(api_index_["isEmpty"])(value[0]) || Object(api_index_["isEmpty"])(value[1])) result = false;
  return result;
}
function getTimezoneOffset() {
  return -1 * new Date().getTimezoneOffset() / 60;
}
/**
 * @description: 生成随机key
 * @param {type} 
 * @return: 
 */

function generateKey() {
  return String(new Date().getTime()).slice(-5) + Object(api_index_["getSafeRandom"])().toString(12);
}
/**
 * @description: 
 * @param {type} 
 * @return: 
 */

function utils_setValue(list, field, temp) {
  list.forEach(function (val) {
    if (val.children && Array.isArray(val.children)) {
      utils_setValue(val.children, field, temp);
    } else if (val.attrcode === field) {
      val.initialvalue = temp;
    }
  });
} //根据快照 过滤模板

function templateFilter(itemsMap, snapshot) {
  var result = [];

  if (Object(api_index_["isArray"])(snapshot)) {
    snapshot.forEach(function (item) {
      if (itemsMap.query(item.attrcode)) {
        result.push(itemsMap.query(item.attrcode));
      }
    });
  }

  return result;
}
/**
 * @description: 清空当前所有数据
 * @param {type} 
 * @return: 
 */

function clearAllValueEve(treeData, itemsMap) {
  var len = treeData.length;

  var _loop2 = function _loop2() {
    var item = treeData[len];

    if (item.children && Array.isArray(item.children)) {
      clearAllValueEve(item.children, itemsMap);
    } else {
      var tempItem = itemsMap.query(item.attrcode);

      if (!tempItem.disabled) {
        if (tempItem.itemtype === 'residtxt') {
          item.initialvalue.value = '';
          item.initialvalue.display = '';

          if (item.valueMap) {
            Object.keys(item.valueMap).forEach(function (key) {
              item.valueMap[key].value = '';
            });
          }
        } else {
          item.initialvalue = {
            value: '',
            display: ''
          };
        }
      }
    }
  };

  while (len--) {
    _loop2();
  }
}
/**
 * @description: 添加节点
 * @param {type} 
 * @return {type} 
 */

function _addData(_items, status, callback, isTemplateOrder) {
  var searchInfo = this.state.searchInfo;
  var advancedData = searchInfo.snapshotMap[status];
  var result = [];

  if (Object(api_index_["isObj"])(_items)) {
    // 对象代表拖拽添加元素
    //if (_items.isfixedcondition) return;
    var data = initData(_items, true);
    data.isExtend = false;
    addDataEve.call(this, advancedData, data, '', status);
  }

  return result;
}
/* 初始化数据 */

function initData(item) {
  var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var snapshotItem = {
    attrcode: item.attrcode,
    remove: remove,
    visible: true,
    isExtend: !!item.isfixedcondition,
    uniqueKey: generateKey()
  };

  if (item.queryOperateType) {
    // 查询条件，设置操作符，初始化数据
    snapshotItem.operationSign = item.queryOperateType.split('@')[0];
    snapshotItem.refpk = snapshotItem.key = item.attrcode;

    if (snapshotItem.operationSign === 'between') {
      //似乎 between是 不设置默认值的  xuyang 此处得问问
      if (item.itemtype === 'refer') {
        snapshotItem.initialvalue = item.initialvalue || {
          value: [],
          display: []
        };
      } else {
        snapshotItem.initialvalue = item.initialvalue || {
          value: [],
          display: ''
        };
      }
    } else {
      if (item.itemtype === 'checkbox_switch') {
        snapshotItem.initialvalue = {
          value: item.initialvalue && item.initialvalue.value || false,
          display: ''
        };
      } else {
        snapshotItem.initialvalue = item.initialvalue || {
          value: '',
          display: ''
        };

        if (item.itemtype === 'residtxt') {
          snapshotItem.initialvalue.index = item.languageMeta.filter(function (val) {
            return val.languageCode == api_index_["localeLang"];
          })[0].index;
          snapshotItem.valueMap = {};
          snapshotItem.valueMap[snapshotItem.attrcode + snapshotItem.initialvalue.index] = {
            value: snapshotItem.initialvalue.value
          };
        }
      }
    }

    snapshotItem.operationOptions = createOperation(item.queryOperateType);
  } else {
    //逻辑关系，默认‘并且’
    snapshotItem.operationOptions = createOperation('=');
    snapshotItem.operationSign = '=';
    snapshotItem.initialvalue = item.initialvalue || {
      value: '',
      display: ''
    };
  }

  return snapshotItem;
}
/*
*   添加拖拽数据
*   @data: 要添加的数据
*   @targetPk: 拖拽的目标节点pk
*   @flag: 高级/普通  （super/normal）
*
* */


function addDataEve(treeData, data, targetPk, flag) {
  if (typeof targetPk === 'string' && targetPk !== 'root') {
    //有目标节点pk，并且不是根节点时
    var len = treeData.length;

    while (len--) {
      var item = treeData[len]; // 目标节点如果是逻辑符节点，添加到逻辑符节点的children内

      if (targetPk.split('@')[1] === 'root') {
        if (item.refpk === targetPk) {
          if (Array.isArray(item.children)) {
            var newTime = new Date().getTime();
            data.refpk = newTime + data.refpk; // !item.children.find(v => v.attrcode === data.attrcode) &&

            item.children.push(data);
          } else {
            item.children = [data];
          }

          return true;
        }
      } else {
        // 目标节点是查询条件节点时， 创建一个逻辑符根节点 ，节点的子节点为拖拽的节点和目标节点，并删除原目标节点
        if (item.refpk === targetPk && data.refpk !== item.refpk) {
          //必填字段不能合并？ xuyang
          if (item.advrequired) {
            return;
          } // 生成新节点，拖拽节点和目标节点的refpk都需要重新赋值，以免重复


          var _newTime = new Date().getTime();

          var newPk = _newTime + '@' + 'root';
          item.refpk = _newTime + item.refpk;
          data.refpk = _newTime + data.refpk;
          var newTree = {
            attrcode: newPk,
            refpk: newPk,
            operationSign: 'and',
            children: [item, data],
            visible: true
          }; //删除原节点 把新的节点插入到原有结构队尾
          // treeData.splice(len, 1);
          // treeData.push(newTree);
          //替换源节点

          treeData[len] = newTree;
          return true;
        }
      }

      if (Array.isArray(item.children)) {
        var res = addDataEve.call(this, item.children, data, targetPk);

        if (res) {
          return false;
        }
      }
    }
  } else {
    if (flag === 'super') {
      //高级区域需要加入到根节点的children中

      /* 疑问：逻辑符为并且时，是否可以在同一级中拖拽多个相同的查询条件？？？——wangshhj */
      // !treeData[0].children.find(item => item.refpk === data.refpk) &&
      var _newTime2 = new Date().getTime();

      data.refpk = _newTime2 + data.refpk;
      treeData[0].children.push(data);
    } else {
      //普通区域直接放到数组中
      //暂时去掉 普通查询中不能拖入重复条件的限制
      //!treeData.find((item) => item.refpk === data.refpk) && treeData.push(data);
      treeData.push(data);
    }
  }
}
/**
 * @description: 初始化预置方案高级
 * @param {type} 
 * @return {type} 
 */


function utils_initSuperData(_items) {
  var isTemplateOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var searchInfo;

  if (Object(api_index_["isArray"])(_items)) {
    //数组，代表初始化区域
    var items = _items.filter(function (item, index) {
      if (!(Number(item.visibleposition) > 0)) {
        item.visibleposition = 99999 + index;
      }

      return (item.visible || item.isfixedcondition) && item.isdrag;
    });

    var requireList = [];
    var fiexedList = [];
    var otherList = [];
    items.forEach(function (item, index) {
      if (!(Number(item.visibleposition) > 0)) {
        item.visibleposition = 99999 + index;
      }

      if (item.isfixedcondition) {
        fiexedList.push(item);
      } else if (item.required) {
        requireList.push(item);
      } else {
        otherList.push(item);
      }
    });
    fiexedList.sort(function (v1, v2) {
      return Number(v1.visibleposition) - Number(v2.visibleposition);
    });

    if (isTemplateOrder) {
      var notFixed = requireList.concat(otherList).sort(function (v1, v2) {
        return Number(v1.visibleposition) - Number(v2.visibleposition);
      });
      items = fiexedList.concat(notFixed);
    } else {
      requireList.sort(function (v1, v2) {
        return Number(v1.visibleposition) - Number(v2.visibleposition);
      });
      otherList.sort(function (v1, v2) {
        return Number(v1.visibleposition) - Number(v2.visibleposition);
      });
      items = fiexedList.concat(requireList).concat(otherList);
    }

    var data = items.map(function (item) {
      var remove = item.required != true && item.isfixedcondition != true;
      return initData(item, remove);
    });

    if (data.length > 0 && data[0].refpk !== 'root') {
      //高级区域
      // 如果新增的数据是数组，并且是高级区域,外层没有根节点时，需要在外层添加一个逻辑运算符根节点，且不可移除。
      searchInfo = [{
        attrcode: 'root',
        refpk: 'root',
        key: 'root',
        operationSign: 'and',
        noRemove: true,
        //不可移除
        children: data,
        visible: true
      }];
    }
  }

  return searchInfo;
}
// CONCATENATED MODULE: ./src/platform/components/Search/store.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/*
 * @Author: wanglongx
 * @Date: 2020-06-05 10:08:31
 * @LastEditTime: 2020-08-13 14:56:05
 * @LastEditors: wanglongx
 * @Description: In User Settings Edit
 * @FilePath: /Platform_Front/src/platform/components/Search/store.js
 */

/**
 * search 
 * 
 * meta 是否保存初始结构 
 * 
 * pk : 方案唯一标志符
 * 
 * // 初始化查询条件
 * searchCondition: [ map 
 *      {
 *          
 *      }
 * ],
 * // 固定条件 字段  每次方案都需要合成
 * fixedConditionGroup: [
 *      {
 * 
 *      }
 * ]
 * // 查询方案 
 * searchScheme: [
 *      {
 *          attrcode: 'a'
 *      }
 * ]
 * 
 * // 方案缓存 编辑当前一份方案
 * currentEditScheme:
 * 
 * // 方案切换不保存值  恢复原始值  区分filedValue 和 initialvalue 
 * 
 * // 内外层值同步问题 外层实时同步内部 内部查询时同步外部值
 * 
 * // UI方案 
 * UIScheme: [
 * 
 * ]
 * 
 * 方案排序规则
 *      预置方案排序规则：查询模板中字段的排序分为“默认显示字段排序”、查询区域字段顺序、必填项顺序、固定条件顺序
        排序规则：固定条件顺序>必填项顺序>默认显示字段排序中设置的顺序>查询区域字段顺序
        举例：1.当一个字段设置了“默认显示字段排序”为10，在查询区域中字段显示在第12个，则在查询模板中此字段显示在第10的位置；
             2.当一个字段设置了“默认显示字段排序”为10，在查询区域中字段显示在第8个，又设置了固定条件，则此字段在查询模板中显示在第1位；	 
 * 
 */






var store_SearchStore = /*#__PURE__*/function (_BaseStore) {
  _inherits(SearchStore, _BaseStore);

  var _super = _createSuper(SearchStore);

  function SearchStore() {
    var _this;

    _classCallCheck(this, SearchStore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.store = {};
    _this.meta = {};
    _this.hasRender = false;
    _this.presetScheme = 'preset';

    _this.getHooks = function () {
      return {
        getInnerHooks: _this.getInnerHooks,
        getItemValue: _this.getItemValue,
        setItemValue: _this.setItemValue,
        setMeta: _this.setMeta,
        getAllSearchData: _this.getAllSearchData,
        getQueryInfo: _this.getQueryInfo,
        setSearchValByField: _this.setSearchValByField,
        setItemsAttribute: _this.setItemsAttribute,
        getItemsAttribute: _this.getItemsAttribute,
        setSearchValue: _this.setSearchValue,
        getSearchValByField: _this.getSearchValByField,
        setDisabledByField: _this.setDisabledByField,
        closeSearchPlanArea: _this.closeSearchPlanArea,
        openAdvSearch: _this.openAdvSearch,
        setDisabled: _this.setDisabled,
        clearSearchArea: _this.clearSearchArea,
        getOprtypeByField: _this.getOprtypeByField,
        changeItemVisibleByField: _this.changeItemVisibleByField,
        setRequiredByField: _this.setRequiredByField,
        setTemlateByField: _this.setTemlateByField,
        getStore: _this.getStore
      };
    };

    _this.getInnerHooks = function () {
      return {
        getCtx: _this.getCtx,
        setCtx: _this.setCtx,
        setInitialValues: _this.setInitialValues,
        getSearchItemDom: _this.getSearchItemDom,
        getCurrentPlan: _this.getCurrentPlan,
        setCurrentPlan: _this.setCurrentPlan,
        countUIScheme: _this.countUIScheme,
        setJson: _this.setJson,
        getJson: _this.getJson,
        setStore: _this.setStore,
        getStore: _this.getStore,
        setPanelShow: _this.setPanelShow,
        getLeftActiveTab: _this.getLeftActiveTab,
        setLeftActiveTab: _this.setLeftActiveTab,
        getRightActiveTab: _this.getRightActiveTab,
        setRightActiveTab: _this.setRightActiveTab,
        getHighPanelStatus: _this.getHighPanelStatus,
        setHighPanelStatus: _this.setHighPanelStatus,
        getCurrentHighPlan: _this.getCurrentHighPlan,
        setCurrentHighPlan: _this.setCurrentHighPlan,
        setShowSearchItems: _this.setShowSearchItems,
        countHighUIScheme: _this.countHighUIScheme,
        getAllSearchDataEve: _this.getAllSearchDataEve,
        clearAllValueEve: _this.clearAllValueEve,
        setItemOperationSign: _this.setItemOperationSign,
        initSuperData: _this.initSuperData
      };
    };

    _this.getCtx = function () {
      return _this.ctx;
    };

    _this.setCtx = function (ctx) {
      _this.ctx = ctx;
      return true;
    };

    _this.setStore = function (path, value) {
      var shouldUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var newValue = _this.set(path, value);

      shouldUpdate && _this.forceUpdate();
      return newValue;
    };

    _this.getStore = function (path) {
      return _this.get(path);
    };

    _this.setPanelShow = function (value, pk) {
      _this.setStore(['showHighPanel'], value, false);

      _this.setStore(['activeLeftTab'], '2', false);

      _this.setStore(['currentHighPlan'], pk || _this.get(['currentPlan']), false);

      _this.setCurrentHighPlan(pk || _this.get(['currentPlan']), false);

      if (value && (!pk || pk == _this.get(['currentPlan']))) {
        (function () {
          var currentPlanList = _this.get(['currentPlanMap']); // uniqueKey 内外层不一致 使用 index 覆盖


          var _loop = function _loop(i) {
            _this.get(['currentHighPlanMap']).update(i, function (res) {
              res['initialvalue'] = Array.isArray(currentPlanList[i]['initialvalue']) ? _toConsumableArray(currentPlanList[i]['initialvalue']) : store_objectSpread({}, currentPlanList[i]['initialvalue']);
              return res;
            });
          };

          for (var i = 0; i < currentPlanList.length; i++) {
            _loop(i);
          }
        })();
      }

      _this.forceUpdate();
    };

    _this.setJson = function (json) {
      _this.setStore(['json'], json);

      setOperationOptionsMultiLang(json);
    };

    _this.getJson = function () {
      return _this.get(['json']) || {};
    };

    _this.getLeftActiveTab = function () {
      return _this.get(['activeLeftTab']);
    };

    _this.setLeftActiveTab = function (value) {
      _this.setStore(['activeLeftTab'], value);
    };

    _this.getRightActiveTab = function () {
      return _this.get(['activeRightTab']);
    };

    _this.setRightActiveTab = function (value) {
      _this.setStore(['activeRightTab'], value);
    };

    _this.getHighPanelStatus = function () {
      return _this.get(['highPanelStatus']);
    };

    _this.setHighPanelStatus = function (value) {
      _this.setStore(['highPanelStatus'], value);
    };

    _this.countUIScheme = function () {
      return _this.get(['currentPlanMap']);
    };

    _this.getCurrentPlan = function () {
      return _this.get(['currentPlan']);
    };

    _this.setCurrentPlan = function (pk) {
      var currentList = [];

      var querySchemes = _this.get(['querySchemes']).query(pk);

      currentList = querySchemes['renderobj4web'];

      if (pk !== 'preset') {
        currentList = new index_["ArrayData"](_this.get(['fixedConditionGroup']).concat(planExtend(_this.get(['items']), currentList, _this.get(['context']))), 'uniqueKey');
      } else {
        currentList = new index_["ArrayData"](initDefaultSnapshot(_this.get(['items']), _this.get(['context']), _this.get(['isTemplateOrder'])), 'uniqueKey');
      }

      _this.setStore(['currentPlan'], pk, false);

      _this.setStore(['currentPlanMap'], currentList);
    };

    _this.getCurrentHighPlan = function () {
      return _this.get(['currentHighPlan']);
    };

    _this.setCurrentHighPlan = function (pk) {
      // this.setStore(['currentHighPlan'], value)
      var currentList = [];

      var querySchemes = _this.get(['querySchemes']).query(pk);

      currentList = querySchemes['renderobj4web'];

      if (pk !== 'preset') {
        currentList = new index_["ArrayData"](_this.get(['fixedConditionGroup']).concat(plan2snapshotTranslate(_this.get(['items']), currentList, _this.get(['context']))), 'uniqueKey');
      } else {
        currentList = new index_["ArrayData"](initDefaultSnapshot(_this.get(['items']), _this.get(['context']), _this.get(['isTemplateOrder'])), 'uniqueKey');
      }

      _this.setStore(['currentHighPlan'], pk, false);

      _this.setStore(['currentHighPlanMap'], currentList);

      _this.initSuperData();

      console.log(_this.store);
    };

    _this.countHighUIScheme = function () {
      if (_this.get(['highPanelStatus']) === 'normal') {
        return _this.get(['currentHighPlanMap']);
      } else {
        return _this.get(['currentHighPlanSuperMap']);
      }
    };

    _this.setInitialValues = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(meta, searchId, app_context) {
        var _meta$searchId, _meta$searchId$items, items, oid, _meta$searchId$querys, queryschemes, moduletype, config, store, presetScheme, fixedConditionGroup, context, propsContext, isTemplateOrder, currentPlanMap;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.resolve(function () {});

              case 2:
                if (!(!meta || Object.keys(meta).length === 0)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _meta$searchId = meta[searchId], _meta$searchId$items = _meta$searchId.items, items = _meta$searchId$items === void 0 ? [] : _meta$searchId$items, oid = _meta$searchId.oid, _meta$searchId$querys = _meta$searchId.queryschemes, queryschemes = _meta$searchId$querys === void 0 ? [] : _meta$searchId$querys, moduletype = _meta$searchId.moduletype;
                config = _this.ctx[0] && _this.ctx[0].props.config || {};
                store = {}, presetScheme = {
                  isquickqs: false,
                  isDefault: true,
                  isMyPlan: true,
                  name: '预置方案',
                  type: true,
                  renderobj4web: [],
                  pk_ncc_queryscheme: _this.presetScheme
                }, fixedConditionGroup = {}, context = {}, propsContext = config.context || '', isTemplateOrder = config.isTemplateOrder || false, currentPlanMap = [];

                if (moduletype === 'search') {
                  // 初始化context 
                  context = store_objectSpread(store_objectSpread({}, api_index_["ViewModel"].getContext()), propsContext || app_context);
                  currentPlanMap = new index_["ArrayData"](initDefaultSnapshot(items, context, isTemplateOrder), 'uniqueKey');
                  presetScheme.renderobj4web = currentPlanMap;
                  fixedConditionGroup = currentPlanMap.filter(function (item) {
                    return item.isExtend;
                  }) || []; // 生成预置方案 不需要合并固定条件

                  queryschemes.unshift(presetScheme);
                  store['items'] = new index_["ArrayData"](items, 'attrcode');
                  store['querySchemes'] = new index_["ArrayData"](queryschemes, 'pk_ncc_queryscheme');
                  store['fixedConditionGroup'] = fixedConditionGroup;
                  store['currentPlan'] = queryschemes.find(function (item) {
                    return item.isquickqs == true;
                  }) ? queryschemes.find(function (item) {
                    return item.isquickqs == true;
                  })['pk_ncc_queryscheme'] : _this.presetScheme; // store['currentPlanMap'] = currentPlanMap;

                  store['showHighPanel'] = false;
                  store['activeLeftTab'] = '2';
                  store['activeRightTab'] = '0';
                  store['highPanelStatus'] = 'normal'; // store['currentHighPlan'] = this.presetScheme;
                  // store['currentHighPlanMap'] = currentPlanMap;

                  store['context'] = context;
                  store['oid'] = oid;
                  store['showSearchItems'] = false;
                  store['isTemplateOrder'] = isTemplateOrder;
                  store['searchId'] = searchId;
                }

                _this.store = Object.assign(_this.store, store);

                _this.setCurrentPlan(_this.getStore(['currentPlan'])); // this.initSuperData();
                // this.setCurrentHighPlan(this.getStore(['currentHighPlan']))


                console.log(_this.store);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.getSearchItemDom = function (key) {
      return _this.get(['items']).query(key);
    };

    _this.setShowSearchItems = function (status) {
      _this.setStore(['showSearchItems'], status);
    };

    _this.initSuperData = function (status) {
      var items = _this.getStore(['items']);

      var newItems = [];
      /* 过滤默认显示项 */

      var filterMeta = function filterMeta(data) {
        data.map(function (item) {
          if (Array.isArray(item.children)) {
            filterMeta(item.children);
          }

          if (item.visible || item.isfixedcondition) {
            //item.advrequired = !!item.required;
            newItems.push(item);
          }
        });
      };

      filterMeta(items);
      var superData = utils_initSuperData(newItems);
      console.log(superData);

      _this.setStore(['currentHighPlanSuperMap'], superData);
    };

    _this.getItemValue = function (planName, uniqueKey) {
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'initialvalue';
      if (planName == 'currentHighPlanSuperMap') return {
        value: '',
        display: ''
      };
      return _this.get([planName]).query(uniqueKey)[key];
    };

    _this.setItemValue = function (planName, uniqueKey, value, attrcode) {
      var attribute = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'initialvalue';
      if (planName == 'currentHighPlanSuperMap') return {
        value: '',
        display: ''
      };

      _this.get([planName]).update(uniqueKey, function (res) {
        if (attrcode) {
          res['valueMap'][attrcode] = store_objectSpread({}, value);
          res[attribute] = store_objectSpread({}, value);
        } else {
          res[attribute] = store_objectSpread({}, value);
        }

        return res;
      });

      _this.updateItem([uniqueKey]);

      console.log(_this.get([planName]).query(uniqueKey));
    };

    _this.setItemOperationSign = function (planName, uniqueKey, value, oldValue) {
      _this.get([planName]).update(uniqueKey, function (res) {
        if (value !== 'between' && oldValue === 'between') {
          res.initialvalue.value = '';
          res.initialvalue.display = '';
        } else if (value === 'between' && oldValue !== 'between') {
          res.initialvalue.display = [];
          res.initialvalue.value = [];
        }

        res['operationSign'] = value;
        return res;
      }); // this.updateItem([uniqueKey])


      _this.forceUpdate();

      console.log(_this.get([planName]).query(uniqueKey));
    };

    _this.setMeta = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(meta, id, flag, app_context) {
        var currentID;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // this.setStore(['meta'], meta, false);
                currentID = id || _this.getStore('mainId');
                _context2.next = 3;
                return _this.setInitialValues(meta, currentID, {}, app_context);

              case 3:
                _this.forceUpdate();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x4, _x5, _x6, _x7) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.setItemsAttribute = function (field, attribute, status) {
      _this.getStore(['items']).query(field).update(function (res) {
        res[attribute] = status;
        return res;
      });

      _this.forceUpdate();
    };

    _this.getItemsAttribute = function (field, attribute) {
      var res = _this.getStore(['items']).query(field) || {};
      return res[attribute];
    };

    _this.getAllSearchDataEve = function (snapshot, flag) {
      var logic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'and';
      var callBackMeta = []; // 如果高级面板打开 当前方案就是高级当前方案 没有打开就是外层当前方案
      // let snapshot = this.get(['showHighPanel']) ? this.get(['currentHighPlanMap']) : this.get(['currentPlanMap']);

      var multiLang = _this.getJson(); // 必填校验时 把所有必填校验未通过都标红 	


      var requiredArr = []; // 这个for 循环的逻辑太复杂了 没办法 必须把 校验逻辑抽出来

      var _loop2 = function _loop2(i) {
        if (snapshot[i].children && Array.isArray(snapshot[i].children)) {
          callBackMeta.push(_this.getAllSearchDataEve(snapshot[i].children, flag, snapshot[i].operationSign));
          return "continue";
        }

        var attrcode = snapshot[i].attrcode;

        var val = _this.get(['items']).query(attrcode);

        var VALUE = snapshot[i].initialvalue;
        var displayVal = VALUE.display || '';
        var optSign = snapshot[i].operationSign;
        var isIncludeSub = snapshot[i].runWithChildren || false;
        var refurl = snapshot[i].refurl || '';
        var timeFunction = '';

        if (displayVal && snapshot[i].runWithChildren) {
          displayVal = displayVal + multiLang['page-search-0044'];
        }

        var data = {
          firstvalue: '',
          secondvalue: ''
        };

        if (val.required && flag && snapshot[i].visible) {
          var isKong = false;

          if (Object(api_index_["isEmpty"])(VALUE.value) || Array.isArray(VALUE.value) && !ArrayHas2Value(VALUE.value)) {
            if (optSign != 'is null' && optSign != 'is not null') {
              isKong = true;
            }
          }

          if (isKong) {
            callBackMeta = [];
            requiredArr.push(val.attrcode);
          }
        }

        if ((val.itemtype === 'rangepicker' || (val.itemtype === 'datepicker' || val.itemtype === 'NCTZDatePickerEnd' || val.itemtype === 'NCTZDatePickerStart' || val.itemtype === 'datetimepicker') && optSign === 'between') && VALUE) {
          var vals = VALUE.value;

          if (vals && !Object(api_index_["isArray"])(vals)) {
            vals = vals.split(',');
          } //给报表平台加的逻辑，如果是函数，则将函数直接传给后台


          if (isDateFunction(vals[0])) {
            timeFunction = vals.join(',');
          }

          if (vals && Object(api_index_["isArray"])(vals)) {
            if (vals.length > 0 && vals[0] && vals[0].format) {
              // 多时区转化
              var start = vals[0].format('YYYY-MM-DD');
              var end = vals[1].format('YYYY-MM-DD'); // 1 开始时间

              var currentZoneStartTime = Object(api_index_["moment"])(start).startOf('day').toDate();
              var currentZoneStartHours = currentZoneStartTime.getHours();
              var offsetZone = currentZoneStartTime.getTimezoneOffset() / 60; // 2 结束时间

              var currentZoneEndTime = Object(api_index_["moment"])(end).endOf('day').toDate();
              var currentZoneEndHours = currentZoneEndTime.getHours(); // 当地时间转换为东八区时间

              offsetZone = offsetZone + 8;
              currentZoneStartTime.setHours(currentZoneStartHours + offsetZone);
              currentZoneEndTime.setHours(currentZoneEndHours + offsetZone); //   newData.firstvalue = moment(currentZoneStartTime).format('YYYY-MM-DD HH:mm:ss');
              //   newData.secondvalue = moment(currentZoneEndTime).format('YYYY-MM-DD HH:mm:ss');

              data.firstvalue = Object(api_index_["moment"])(currentZoneStartTime).format('YYYY-MM-DD HH:mm:ss');
              data.secondvalue = Object(api_index_["moment"])(currentZoneEndTime).format('YYYY-MM-DD HH:mm:ss'); // newVal.push(value.format('YYYY-MM-DD'));
            } else if (vals.length > 0 && vals[0] && !vals[0].format) {
              data.firstvalue = vals[0];
              data.secondvalue = vals[1];
            } else if (vals.length === 0) {
              data.firstvalue = '';
              data.secondvalue = '';
            }
          }
        } else if (val.itemtype === 'refer') {
          VALUE = getFunctionValueFromViewModal(VALUE, _this.getStore(['context'])); //参照函数翻译完成之后 有可能 出现翻译不出来的情况 ，翻译不出来 再次做一次必填校验吧

          if (val.required && flag && snapshot[i].visible) {
            if (!VALUE.value && VALUE.value !== 0) {
              callBackMeta = [];
              if (!requiredArr.includes(val.attrcode)) requiredArr.push(val.attrcode);
            }
          }

          if (optSign === 'between') {
            data.firstvalue = (VALUE.value || [])[0] || '';
            data.secondvalue = (VALUE.value || [])[1] || '';
            displayVal = (VALUE.display || []).join(',');
          } else {
            displayVal = VALUE.display;
            data.firstvalue = VALUE.value;
          }
        } else if ((val.itemtype === 'select' || val.itemtype === 'number' || val.itemtype === 'datetimepicker' || val.itemtype === 'NCTZDatePickerEnd' || val.itemtype === 'NCTZDatePickerStart') && optSign === 'between') {
          data.firstvalue = (VALUE.value || [])[0];
          data.secondvalue = (VALUE.value || [])[1];
          displayVal = (VALUE.display || [])[0] + '~' + (VALUE.display || [])[1];
        } else {
          data.firstvalue = VALUE.value;
        }

        var timeItemList = ['datepicker', 'datetimepicker', 'rangepicker', 'NCTZDatePickerStart', 'NCTZDatePickerEnd', 'NCTZDatePickClientTime', 'NCTZDatePickClientHourTime', 'NCTZDatePickerRangeDay', 'datePickerNoTimeZone']; // 需要从东八区时间处理当地时间，然后计算0点和24点，按照当地时间得0点和24点分别转为东八区时间

        var localToEast = ['datepicker', 'datetimepicker', 'NCTZDatePickClientTime', 'NCTZDatePickClientHourTime']; // 开始 和结束时间是时间戳概念  操作符为 = 时不需要进行扩充为日期范围

        var timeStampType = ['NCTZDatePickerStart', 'NCTZDatePickerEnd', 'datetimepicker'];

        if (timeItemList.some(function (item) {
          return item === val.itemtype;
        }) && !Object(api_index_["isEmpty"])(VALUE.value)) {
          //xuyangt 需要优化此处逻辑 很混乱
          var firstvalue = '',
              secondvalue = '';

          if (isDateFunction(data.firstvalue) && !data.secondvalue) {
            timeFunction = data.firstvalue;
          }

          if (isDateFunction(data.firstvalue) || isDateFunction(data.secondvalue)) {
            if (optSign == '=' || optSign == '<>') {
              // start 取开始时间戳 end时 取结束时间戳
              if (timeStampType.includes(val.itemtype)) {
                if (val.itemtype === 'NCTZDatePickerEnd') {
                  firstvalue = Object(api_index_["timeFunctionTranslater"])(data.firstvalue, {
                    flag: false
                  });
                } else {
                  firstvalue = Object(api_index_["timeFunctionTranslater"])(data.firstvalue);
                }
              } else {
                firstvalue = Object(api_index_["timeFunctionTranslater"])(data.firstvalue);
                secondvalue = Object(api_index_["timeFunctionTranslater"])(data.firstvalue, {
                  flag: false
                });
              }
            } else if (optSign == '<' || optSign == '>=') {
              firstvalue = Object(api_index_["timeFunctionTranslater"])(data.firstvalue);
            } else if (optSign == '>' || optSign == '<=') {
              firstvalue = Object(api_index_["timeFunctionTranslater"])(data.firstvalue, {
                flag: false
              });
            } else if (optSign == 'between') {
              if (!Object(api_index_["isEmpty"])(data.firstvalue)) {
                firstvalue = Object(api_index_["timeFunctionTranslater"])(data.firstvalue);
              }

              if (!Object(api_index_["isEmpty"])(data.secondvalue)) {
                secondvalue = Object(api_index_["timeFunctionTranslater"])(data.secondvalue, {
                  flag: false
                });
              }
            }
          } else {
            if (optSign == '=' || optSign == '<>') {
              if (!timeStampType.includes(val.itemtype)) {
                // datepicker datepicker 需要处理时区从东八区时间转换为当地时间 计算当天时间[00:00:00, 23:59:59]在转换为东八区时间
                if (localToEast.includes(val.itemtype) && !isDateFunction(data.firstvalue)) {
                  firstvalue = Object(api_index_["DongbaToLocalTime"])(Object(api_index_["moment"])(data.firstvalue)).format('YYYY-MM-DD 00:00:00');
                  secondvalue = Object(api_index_["moment"])(firstvalue).format('YYYY-MM-DD 23:59:59'); // 转为东八区时间 

                  firstvalue = Object(api_index_["LocalToDongbaTime"])(Object(api_index_["moment"])(firstvalue)).format('YYYY-MM-DD HH:mm:ss');
                  secondvalue = Object(api_index_["LocalToDongbaTime"])(Object(api_index_["moment"])(secondvalue)).format('YYYY-MM-DD HH:mm:ss');
                } else {
                  // start end 类型暂未处理
                  firstvalue = Object(api_index_["moment"])(data.firstvalue).format('YYYY-MM-DD 00:00:00');
                  secondvalue = Object(api_index_["timeFunctionTranslater"])(Object(api_index_["moment"])(data.firstvalue).format('YYYY-MM-DD 23:59:59'));
                }
              } else {
                firstvalue = data.firstvalue;
                secondvalue = firstvalue;
              }
            } else if (optSign == '<' || optSign == '>=') {
              firstvalue = naturalTimeHandler(data.firstvalue, 'start');
            } else if (optSign == '>' || optSign == '<=') {
              firstvalue = naturalTimeHandler(data.firstvalue, 'end');
            } else if (optSign == 'between') {
              if (!Object(api_index_["isEmpty"])(data.firstvalue)) {
                firstvalue = naturalTimeHandler(data.firstvalue, 'start');
              }

              if (!Object(api_index_["isEmpty"])(data.secondvalue)) {
                secondvalue = naturalTimeHandler(data.secondvalue, 'end');
              }
            } //如果存在两个值，做一下端点值大小的判断和调整


            if (firstvalue && secondvalue && CompareDate(firstvalue, secondvalue)) {
              firstvalue = Object(api_index_["timeFunctionTranslater"])(secondvalue);
              secondvalue = Object(api_index_["timeFunctionTranslater"])(firstvalue, {
                flag: false
              });
            }
          }

          if (optSign == '=') {
            optSign = 'between';
          }

          data.firstvalue = firstvalue;
          data.secondvalue = secondvalue;
        }

        if (!val.hasOwnProperty('queryOperateType')) {
          val.queryOperateType = '';
          console.error("\u67E5\u8BE2\u6A21\u677F\u4E2D\u5FC5\u987B\u8981\u6709queryOperateType\u5B57\u6BB5\uFF0C\u8BF7\u68C0\u67E5\u6A21\u677F\u4E2D".concat(val.attrcode, "\u5B57\u6BB5"));
        } //增加去除前后空格的逻辑 目前 ‘ ’作为例外情况处理


        if (data.firstvalue && typeof data.firstvalue === 'string' && data.firstvalue !== ' ') {
          data.firstvalue = data.firstvalue.trim();
        }

        if (data.secondvalue && typeof data.firstvalue === 'string' && data.secondvalue !== ' ') {
          data.secondvalue = data.secondvalue.trim();
        }

        var Obj = {
          field: attrcode,
          value: data,
          oprtype: optSign,
          display: String(displayVal || '').replace(/~/, ','),
          isIncludeSub: isIncludeSub,
          refurl: refurl,
          datatype: val.datatype || '',
          timeFunction: timeFunction
        };

        if (val.itemtype === 'residtxt') {
          Obj.langSeq = VALUE.index;
        }

        if (!Object(api_index_["isEmpty"])(Obj.value.firstvalue) || !Object(api_index_["isEmpty"])(Obj.value.secondvalue) || optSign == 'is null' || optSign == 'is not null') {
          snapshot[i].visible && callBackMeta.push(Obj);
        }
      };

      for (var i = 0; i < snapshot.length; i++) {
        var _ret = _loop2(i);

        if (_ret === "continue") continue;
      } // if (requiredArr.length !== 0) {
      //     {
      //         toast({ content: multiLang['page-search-0045'], color: 'warning' });
      //     }
      //     return false;
      // }


      return {
        logic: logic,
        conditions: callBackMeta
      };
    };

    _this.getAllSearchData = function () {
      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var snapshot = _this.get(['showHighPanel']) ? _this.get(['currentHighPlanMap']) : _this.get(['currentPlanMap']);
      return _this.getAllSearchDataEve(snapshot, flag);
    };

    _this.setSearchValByField = function (field, data, status) {
      // status存在 按照设置进行设值 否则根据当前页面逻辑进行设值
      var currentMap, currentStatus;

      if (status && ['normal', 'super'].includes(status)) {
        if (status === 'normal') {
          currentMap = _this.getStore(['currentPlanMap']);
          currentStatus = 'currentPlanMap';
        } else {
          currentMap = _this.getStore(['currentHighPlanMap']);
          currentStatus = 'currentHighPlanMap';
        }
      } else {
        if (!_this.getStore('showHighPanel')) {
          currentMap = _this.getStore(['currentPlanMap']);
          currentStatus = 'currentPlanMap';
        } else {
          currentMap = _this.getStore(['currentHighPlanMap']);
          currentStatus = 'currentHighPlanMap';
        }
      }

      if (currentMap) {
        if (!data) {
          data = {
            value: '',
            display: ''
          };
        }

        utils_setValue(currentMap, field, data);

        _this.setStore([currentStatus], currentMap);
      }
    };

    _this.setSearchValue = function (data, callback) {
      var currentStatus = _this.getStore(['showHighPanel']) ? 'currentHighPlanMap' : 'currentPlanMap';

      var snapshot = _this.getStore([currentStatus]);

      var items = snapshot;
      var datas = data;

      if (datas.conditions) {
        datas = datas.conditions;
      }

      if (!Object(api_index_["isArray"])(datas)) {
        console.error('setSearchValue方法第二个参数不正确');
        return false;
      }

      var findItem = function findItem(item) {
        var len = items.length;

        while (len--) {
          if (items[len].attrcode === item.field) {
            items[len].initialvalue = items[len].initialvalue || {};

            if (item.oprtype === 'between') {
              items[len].initialvalue.value = [item.value.firstvalue, item.value.secondvalue]; //items[len].initialvalue.display = [item.value.firstvalue, item.value.secondvalue];
            } else {
              items[len].initialvalue.value = item.value.firstvalue;
              items[len].initialvalue.display = item.display;
            } //下面的逻辑是为了处理 反写日期函数时转为具体时间的bug


            if (item.timeFunction) {
              if (item.timeFunction.includes(',')) {
                items[len].initialvalue.value = item.timeFunction.split(',');
              } else {
                items[len].initialvalue.value = item.timeFunction;
                items[len].initialvalue.display = '';
              }
            }

            items[len].operationSign = item.oprtype;
            items[len].runWithChildren = item.isIncludeSub || false;
            items[len].refurl = item.refurl || '';
            break;
          }
        }
      };

      datas.map(function (item) {
        findItem(item);
      });

      _this.setStore([currentStatus], items);

      typeof callback === 'function' && callback();
    };

    _this.getSearchValByField = function (field, status) {
      // status存在 按照status进行取值 否则根据当前页面状态进行取值
      var currentMap;

      if (status && ['normal', 'super'].includes(status)) {
        if (status === 'normal') {
          currentMap = _this.getStore(['currentPlanMap']);
        } else {
          currentMap = _this.getStore(['currentHighPlanMap']);
        }
      } else {
        if (!_this.getStore('showHighPanel')) {
          currentMap = _this.getStore(['currentPlanMap']);
        } else {
          currentMap = _this.getStore(['currentHighPlanMap']);
        }
      }

      var data = _this.getAllSearchDataEve(currentMap, false);

      if (!data) {
        return {
          value: {
            firstvalue: '',
            secondvalue: ''
          },
          display: '',
          oprtype: ''
        };
      }

      var len = data.conditions.length;

      if (len <= 0) {
        return {
          value: {
            firstvalue: '',
            secondvalue: ''
          },
          display: '',
          oprtype: ''
        };
      } // ——————


      var res = {
        value: {
          firstvalue: '',
          secondvalue: ''
        },
        display: '',
        oprtype: ''
      };

      function getvalue(list, field) {
        list.forEach(function (item) {
          if (item.conditions) {
            getvalue(item.conditions, field);
          } else {
            if (item.field === field) {
              res.value = item.value;
              res.display = item.display;
              res.oprtype = item.oprtype;
            }
          }
        });
      }

      getvalue(data.conditions, field);
      return res;
    };

    _this.setDisabledByField = function (field, status) {
      _this.setItemsAttribute(field, 'disabled', status);
    };

    _this.closeSearchPlanArea = function () {
      _this.setStore(['highPanelStatus'], false);
    };

    _this.openAdvSearch = function (status, callback) {
      _this.setStore(['highPanelStatus'], false);

      typeof callback == 'function' && callback();
    };

    _this.setDisabled = function (moduleId, status) {
      var items = _this.getStore(['items']);

      items.forEach(function (item) {
        item['disabled'] = status;
      });

      _this.setStore(['items'], items);
    };

    _this.clearSearchArea = function () {
      var currentMap, currentStatus;

      if (!_this.getStore('showHighPanel')) {
        currentMap = _this.getStore(['currentPlanMap']);
        currentStatus = 'currentPlanMap';
      } else {
        currentMap = _this.getStore(['currentHighPlanMap']);
        currentStatus = 'currentHighPlanMap';
      }

      var len = currentMap.length;

      while (len--) {
        currentMap[len].initialvalue = {
          value: '',
          display: ''
        };
      }

      _this.setStore([currentStatus], currentMap);
    };

    _this.getOprtypeByField = function (field) {
      var currentMap = _this.get(['showHighPanel']) ? _this.get(['currentHighPlanMap']) : _this.get(['currentPlanMap']);

      function getValue(list) {
        var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        list.forEach(function (item) {
          if (item.children) {
            getValue(item.children, result);
          } else {
            if (item.attrcode === field) {
              result.push(item.operationSign);
            }
          }
        });
        return result;
      }

      return getValue(currentMap);
    };

    _this.changeItemVisibleByField = function (field, status) {};

    _this.setRequiredByField = function (field, status) {
      _this.setItemsAttribute(field, 'required', status);
    };

    _this.setTemlateByField = function (field, property, value) {
      _this.setItemsAttribute(field, property, value);
    };

    _this.clearAllValueEve = function () {
      var currentMap = _this.get(['showHighPanel']) ? _this.get(['currentHighPlanMap']) : _this.get(['currentPlanMap']);

      var itemMap = _this.get(['items']);

      clearAllValueEve(currentMap, itemMap);

      _this.forceUpdate();
    };

    return _this;
  }

  _createClass(SearchStore, [{
    key: "getQueryInfo",

    /**
     * @description: 用于获取查询区所有已有值得查询条件，与getAllSearchData功能类似，但返回结果不同
     * @param {type} 
     * @return: 
     */
    value: function getQueryInfo() {
      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var data = this.getAllSearchData(flag);

      if (data) {
        return {
          queryAreaCode: this.getStore(['searchId']),
          oid: this.getStore(['oid']),
          querytype: 'tree',
          querycondition: data,
          nctz: getTimezoneOffset()
        };
      } else {
        return {};
      }
    }
    /**
     * @description: 用于设置查询区具体某个字段数据
     * @param {type} 
     * @return: 
     */

  }]);

  return SearchStore;
}(index_["BaseStore"]);

var useSearch = Object(index_["hookFactory"])(store_SearchStore);
// CONCATENATED MODULE: ./src/platform/components/Search/searchContext.js

var SearchContent = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["createContext"]();
/* harmony default export */ var searchContext = (SearchContent);
// CONCATENATED MODULE: ./src/platform/components/Search/filed.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function filed_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function filed_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { filed_ownKeys(Object(source), true).forEach(function (key) { filed_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { filed_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function filed_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var disabledOperationSign = ['is null', 'is not null']; //获得查询条件的操作符的展示

function getQueryOperateDisplay(queryOperateType) {
  var result = '';

  if (queryOperateType) {
    queryOperateType = queryOperateType.replace(/^@+|@$/g, '');
    var opt = String(queryOperateType).split('@')[0];

    switch (opt) {
      case '<>':
        result = '≠';
        break;

      case '<':
        result = '<';
        break;

      case '>':
        result = '>';
        break;

      case '>=':
        result = '≥';
        break;

      case '<=':
        result = '≤';
        break;
    }
  }

  return result;
}

function Filed(props) {
  var _this = this;

  var label = props.label,
      snapshotItem = props.snapshotItem,
      planName = props.planName,
      disabled = props.disabled,
      itemtype = props.itemtype,
      style = props.style,
      others = _objectWithoutProperties(props, ["label", "snapshotItem", "planName", "disabled", "itemtype", "style"]);

  var _useContext = Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["useContext"])(searchContext),
      search = _useContext.search,
      config = _useContext.config;

  var _onAfterEvent = config.onAfterEvent;
  var getItemValue = search.getItemValue,
      setItemValue = search.setItemValue;

  var _search$getInnerHooks = search.getInnerHooks(),
      getStore = _search$getInnerHooks.getStore,
      getJson = _search$getInnerHooks.getJson;

  var multiLang = getJson();
  var showBetween = true; // 取disabled 判断

  if (disabledOperationSign.some(function (item) {
    return item === snapshotItem.operationSign;
  })) {
    disabled = true;
  } // 特殊类型处理 


  if (snapshotItem.hasOwnProperty('operationSign') && (itemtype === 'datepicker' || itemtype === 'NCTZDatePickerEnd' || itemtype === 'NCTZDatePickerStart')) {
    if (snapshotItem.operationSign === 'between') {
      itemtype = 'rangepicker';
      showBetween = false;
    }
  } else if (itemtype === 'textarea') {
    itemtype = 'input';
  } else if (itemtype === 'radio' || itemtype === 'checkbox') {
    itemtype = 'select';
  }

  if (props.itemtype == 'residtxt') {
    others.onSelect = function (residtxtValue, residtxtIndex) {
      setItemValue(planName, snapshotItem.uniqueKey, {
        value: residtxtValue,
        index: residtxtIndex,
        display: residtxtValue
      });
    };
  }

  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.Fragment, null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    className: "search-item-wrap",
    style: style,
    name: snapshotItem.attrcode,
    fieldid: Object(api_index_["getSysFieldid"])(snapshotItem.attrcode)
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    className: "condition-contant"
  }, props.required ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
    className: "mustFillIn_search"
  }, "*") : null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
    className: "search-dom"
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(index_["Item"], _extends({}, others, {
    itemtype: itemtype,
    disabled: disabled,
    between: snapshotItem.operationSign == 'between' && showBetween,
    placeholder: label,
    key: snapshotItem.uniqueKey,
    setFieldValue: function setFieldValue(_ref) {
      var _ref$value = _ref.value,
          value = _ref$value === void 0 ? {} : _ref$value,
          _ref$componentValue = _ref.componentValue,
          componentValue = _ref$componentValue === void 0 ? {} : _ref$componentValue,
          attrcode = _ref.attrcode;
      var currentValue,
          resFlag = true;

      switch (itemtype) {
        case 'refer':
          var referValue = componentValue;

          if (Array.isArray(referValue)) {
            referValue.forEach(function (vv) {
              var VALUE = getFunctionValueFromViewModal({
                display: vv.refname,
                value: vv.refpk
              }, getStore(['context']));
              vv.refname = VALUE.display;
              vv.refpk = VALUE.value; // referValue.runWithChildren = vv.runWithChildren;
              // referValue.refurl = vv.queryTreeUrl;
            }, _this);
          } else {
            var VALUE = getFunctionValueFromViewModal({
              display: referValue.refname,
              value: referValue.refpk
            }, getStore(['context'])); // referValue.refname = VALUE.display;
            // referValue.refpk = VALUE.value;
          }

          currentValue = filed_objectSpread(filed_objectSpread({}, value), componentValue);
          break;

        case 'residtxt':
          currentValue = value;
          resFlag = false;
          setItemValue(planName, snapshotItem.uniqueKey, currentValue, attrcode);
          break;

        default:
          currentValue = filed_objectSpread({}, value);
          break;
      }

      resFlag && setItemValue(planName, snapshotItem.uniqueKey, currentValue);
      console.log(currentValue);
    },
    getFieldValue: function getFieldValue(_ref2) {
      var attrcode = _ref2.attrcode;
      var tempValue = getItemValue(planName, snapshotItem.uniqueKey),
          refDisplay = ''; // 分发值 逻辑处理

      switch (itemtype) {
        case 'refer':
          if (snapshotItem.hasOwnProperty('operationSign') && snapshotItem.operationSign === 'between') {
            var VALUE = [];
            VALUE = (tempValue.value || []).map(function (v, index) {
              var vv = {
                value: v,
                display: tempValue.display ? tempValue.display[index] : ''
              };
              return getFunctionValueFromViewModal(vv, getStore(['context']));
            });
            refDisplay = VALUE.map(function (v) {
              return v.display;
            }).join('~');
            var vv = {
              value: '',
              display: ''
            };
            tempValue = filed_objectSpread(filed_objectSpread({}, tempValue), Object(api_index_["isEmpty"])(VALUE) ? vv : VALUE[0]);
          } else {
            if (Array.isArray(tempValue.value)) {
              tempValue = {
                value: tempValue.value[0],
                display: tempValue.display[0]
              };
            }

            var _VALUE = getFunctionValueFromViewModal(tempValue, getStore(['context']));

            refDisplay = _VALUE.display;
            tempValue = filed_objectSpread(filed_objectSpread({}, tempValue), _VALUE);
          }

          break;

        case 'select':
          if (!snapshotItem.isMultiSelectedEnabled) {
            if (snapshotItem.operationSign === 'between') {
              if (!Array.isArray(tempValue.value)) {
                tempValue.value = [];
              }
            } else {
              tempValue.value = tempValue.value || '';
            }
          }

          break;

        case 'residtxt':
          var valueMap = getItemValue(planName, snapshotItem.uniqueKey, 'valueMap') || {};
          tempValue = valueMap[attrcode] || {
            display: '',
            value: ''
          };
          break;

        default:
          tempValue.value = (tempValue || {}).value; // || (tempValue || {}).display;

          break;
      }

      if ((itemtype === 'datepicker' || itemtype === 'NCTZDatePickerEnd' || itemtype === 'NCTZDatePickerStart') && snapshotItem.operationSign === '=') {
        if (Array.isArray(tempValue.value)) {
          tempValue.value = tempValue.value[0];
        }
      }

      if (itemtype === 'rangepicker' || (itemtype === 'datetimepicker' || itemtype === 'NCTZDatePickerEnd' || itemtype === 'NCTZDatePickerStart') && snapshotItem.operationSign === 'between') {
        if (!Array.isArray(tempValue.value)) {
          if (tempValue.value) {
            tempValue.value = tempValue.value.split(',');
          } else {
            tempValue.value = [];
          }
        }
      }

      return tempValue;
    } // onBeforeEvent={ (() => true)}
    ,
    onAfterEvent: function onAfterEvent(_ref3) {
      var value = _ref3.value,
          oldValue = _ref3.oldValue,
          componentValue = _ref3.componentValue,
          event = _ref3.event,
          index = _ref3.index;

      if (typeof _onAfterEvent == 'function') {
        if (index === undefined) index = 0;

        _onAfterEvent(snapshotItem.attrcode, value, getStore(['searchId']), snapshotItem.operationSign, index, event);
      }
    },
    path: [snapshotItem.uniqueKey],
    showTimeFunction: true,
    showClear: true,
    showTime: false,
    showToday: false,
    dateInputPlaceholder: [multiLang['page-search-0039'] + '(YYYY-MM-DD)', multiLang['page-search-0040'] + '(YYYY-MM-DD)'] // multiLang={multiLang}

  }))))));
}

/* harmony default export */ var filed = (Filed);
// EXTERNAL MODULE: external "@platform/base/index"
var base_index_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(5);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/platform/components/Search/selectItem.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || selectItem_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function selectItem_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return selectItem_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return selectItem_arrayLikeToArray(o, minLen); }

function selectItem_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Author: wanglongx
 * @Date: 2020-07-01 10:35:12
 * @LastEditTime: 2020-07-14 15:26:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Platform_Front/src/platform/components/Search/selectItem.js
 */




function SelectItem(props) {
  // 确定按钮时 名称重复校验 空校验
  var handleConfirm = function handleConfirm() {};

  var searchAdvBtnClick = function searchAdvBtnClick() {
    props.setPanelShow(true, props.pk_ncc_queryscheme);
  };

  var delSearchPlan = function delSearchPlan() {};

  var _useState = Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["useState"])(props.value),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      showFlag = _useState4[0],
      setShow = _useState4[1];

  var item = props.item,
      _props$multiLang = props.multiLang,
      multiLang = _props$multiLang === void 0 ? {} : _props$multiLang,
      currentPlanPk = props.currentPlanPk,
      currentPlanName = props.currentPlanName,
      setCurrentPlan = props.setCurrentPlan;
  var iconClass = classnames_default()({
    'icon-disable': item.isMyPlan || item.isquickqs
  });
  var itemClass = classnames_default()({
    'item-current': item.pk_ncc_queryscheme == currentPlanPk
  });
  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    className: "query_item ".concat(itemClass)
  }, showFlag ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
    className: "search_planName",
    onClick: function onClick() {
      return setCurrentPlan(item.pk_ncc_queryscheme);
    }
  }, value, "\xA0\xA0", item.pk_ncc_queryscheme == currentPlanPk && item.name == currentPlanName ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
    className: "iconfont icon-shenpitongguo"
  }) : null) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["HotKeys"], {
    keyMap: {
      high: ['enter']
    },
    handlers: {
      high: handleConfirm
    }
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Input"], {
    className: "search_input",
    autoFocus: true,
    value: value,
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    onChange: function onChange(v) {
      setValue(v);
    }
  })), showFlag ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
    className: "search-plan-set"
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
    className: "iconfont icon-cxzhongmingming ".concat(iconClass),
    onClick: function onClick(e) {
      e.stopPropagation();
      if (item.isMyPlan || item.isquickqs) return;
      setShow(!showFlag);
    }
  }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
    className: "iconfont icon-cxxiugai",
    onClick: searchAdvBtnClick
  }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
    className: "iconfont icon-cxshanchu ".concat(iconClass),
    onClick: function onClick(e) {
      e.stopPropagation();
      if (item.isMyPlan || item.isquickqs) return;
      delSearchPlan();
    }
  })) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    className: "search-list-button"
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
    className: "button-item right",
    onClick: handleConfirm
  }, multiLang['page-search-0009']), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
    className: "button-item left",
    onClick: function onClick(e) {
      e.stopPropagation();
      setValue(props.value);
      setShow(true);
    }
  }, multiLang['page-search-0010'])));
}

/* harmony default export */ var selectItem = (SelectItem);
// CONCATENATED MODULE: ./src/platform/components/Search/selectPlan.js
/*
 * @Author: wanglongx
 * @Date: 2020-06-30 10:48:01
 * @LastEditTime: 2020-07-17 14:02:35
 * @LastEditors: wanglongx
 * @Description: 查询区外城层切换方案区域
 * @FilePath: /Platform_Front/src/platform/components/Search/selectPlan.js
 */






function SelectPlan() {
  var _useContext = Object(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["useContext"])(searchContext),
      search = _useContext.search;

  var _search$getInnerHooks = search.getInnerHooks(),
      getCurrentPlan = _search$getInnerHooks.getCurrentPlan,
      setCurrentPlan = _search$getInnerHooks.setCurrentPlan,
      getStore = _search$getInnerHooks.getStore,
      getJson = _search$getInnerHooks.getJson,
      setPanelShow = _search$getInnerHooks.setPanelShow;

  var schemeList = getStore(['querySchemes']);
  var currentPlanPk = getCurrentPlan();
  var currentPlanName = schemeList.query(currentPlanPk)['name'];
  var multiLang = getJson();
  return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    className: "search-edit"
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Dropdown"], {
    trigger: ['click'],
    placement: "bottomLeft",
    overlay: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "query_condo"
    }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("ul", {
      className: "query_content"
    }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "searchPlanBox hideMore"
    }, schemeList.map(function (item) {
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("p", {
        key: typeof item.pk_ncc_queryscheme == 'string' ? item.pk_ncc_queryscheme : '123456',
        className: "searchPlanList",
        fielid: "".concat(item.name, "_sub-btn")
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(selectItem, {
        item: item,
        value: item.name,
        currentPlanPk: currentPlanPk,
        currentPlanName: currentPlanName,
        setCurrentPlan: setCurrentPlan,
        multiLang: multiLang,
        setPanelShow: setPanelShow,
        pk_ncc_queryscheme: item.pk_ncc_queryscheme
      }));
    }))), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "create_new",
      onClick: function onClick() {
        setPanelShow(true, 'preset');
      },
      fieldid: Object(api_index_["getSysFieldid"])('create_new_btn')
    }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
      className: "new_content"
    }, " + ".concat(multiLang['page-search-0080'])))),
    onVisibleChange: function onVisibleChange() {},
    fieldid: "search-plan"
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    className: "search-name-wrapper",
    fieldid: Object(api_index_["getSysFieldid"])('search-plan_btn')
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
    className: "search-plan-name"
  }, currentPlanName), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
    className: "iconfont icon-bottom"
  }))), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tooltip"], {
    delayShow: 800,
    inverse: true,
    overlay: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      style: {
        padding: '10px'
      }
    }, "F3"),
    placement: "top"
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
    className: "search-super",
    onClick: function onClick() {
      return setPanelShow(true);
    }
  }, multiLang['page-search-0003'])));
}

/* harmony default export */ var selectPlan = (SelectPlan);
// CONCATENATED MODULE: ./src/platform/components/Search/searchWrapper.js
function searchWrapper_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { searchWrapper_typeof = function _typeof(obj) { return typeof obj; }; } else { searchWrapper_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return searchWrapper_typeof(obj); }

function searchWrapper_extends() { searchWrapper_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return searchWrapper_extends.apply(this, arguments); }

function searchWrapper_toConsumableArray(arr) { return searchWrapper_arrayWithoutHoles(arr) || searchWrapper_iterableToArray(arr) || searchWrapper_unsupportedIterableToArray(arr) || searchWrapper_nonIterableSpread(); }

function searchWrapper_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function searchWrapper_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return searchWrapper_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return searchWrapper_arrayLikeToArray(o, minLen); }

function searchWrapper_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function searchWrapper_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return searchWrapper_arrayLikeToArray(arr); }

function searchWrapper_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function searchWrapper_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function searchWrapper_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function searchWrapper_createClass(Constructor, protoProps, staticProps) { if (protoProps) searchWrapper_defineProperties(Constructor.prototype, protoProps); if (staticProps) searchWrapper_defineProperties(Constructor, staticProps); return Constructor; }

function searchWrapper_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) searchWrapper_setPrototypeOf(subClass, superClass); }

function searchWrapper_setPrototypeOf(o, p) { searchWrapper_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return searchWrapper_setPrototypeOf(o, p); }

function searchWrapper_createSuper(Derived) { var hasNativeReflectConstruct = searchWrapper_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = searchWrapper_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = searchWrapper_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return searchWrapper_possibleConstructorReturn(this, result); }; }

function searchWrapper_possibleConstructorReturn(self, call) { if (call && (searchWrapper_typeof(call) === "object" || typeof call === "function")) { return call; } return searchWrapper_assertThisInitialized(self); }

function searchWrapper_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function searchWrapper_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function searchWrapper_getPrototypeOf(o) { searchWrapper_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return searchWrapper_getPrototypeOf(o); }

/*
 * @Author: wanglongx
 * @Date: 2020-06-08 13:59:47
 * @LastEditTime: 2020-08-12 16:20:56
 * @LastEditors: wanglongx
 * @Description: 查询区外层查询
 * @FilePath: /Platform_Front/src/platform/components/Search/searchWrapper.js
 */






__webpack_require__(1804);

var searchWrapper_SearchWrapper = /*#__PURE__*/function (_Component) {
  searchWrapper_inherits(SearchWrapper, _Component);

  var _super = searchWrapper_createSuper(SearchWrapper);

  function SearchWrapper(props) {
    var _this;

    searchWrapper_classCallCheck(this, SearchWrapper);

    _this = _super.call(this, props);

    _this.countQueryConditions = function (item, itemsMap) {
      switch (itemsMap.query(item.attrcode).itemtype) {
        case 'refer':
          return item.initialvalue.display;

        case 'select':
          return item.initialvalue.display;

        case 'datepicker':
          return item.initialvalue.display;

        case 'NCTZDatePickerEnd':
          return item.initialvalue.display;

        case 'NCTZDatePickerStart':
          return item.initialvalue.display;

        case 'radio':
          return item.initialvalue.display;

        case 'checkbox':
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Checkbox"], {
            checked: !(item.initialvalue.value === 'N' || item.initialvalue.value === false),
            disabled: true
          });

        case 'checkbox_switch':
          return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Checkbox"], {
            checked: !(item.initialvalue.value === 'N' || item.initialvalue.value === false),
            disabled: true
          });

        case 'rangepicker':
          return item.initialvalue.display;

        case 'datetimepicker':
          return item.initialvalue.display;

        default:
          return item.initialvalue.value;
      }
    };

    _this.createSearchDom = function () {
      var search = _this.props.search;

      var _search$getInnerHooks = search.getInnerHooks(),
          getCurrentPlan = _search$getInnerHooks.getCurrentPlan,
          countUIScheme = _search$getInnerHooks.countUIScheme,
          getStore = _search$getInnerHooks.getStore,
          setShowSearchItems = _search$getInnerHooks.setShowSearchItems,
          getJson = _search$getInnerHooks.getJson,
          currentPlanPk = getCurrentPlan(),
          itemsMap = getStore('items'),
          currentPlanList = countUIScheme(currentPlanPk),
          allItem = [],
          temp = [],
          showSearchItems = getStore(['showSearchItems']),
          multiLang = getJson();

      if (!itemsMap) return null;
      currentPlanList.map(function (item) {
        if (item) {
          temp.push(item);

          if (temp.length === 5) {
            allItem.push(searchWrapper_toConsumableArray(temp));
            temp = [];
          }
        }
      });
      allItem.push(temp);
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["HotKeys"], {
        className: "lightapp-component-search",
        keyMap: {
          query: ['enter'],
          "delete": ['Alt+Del']
        },
        handlers: {
          "delete": function _delete() {},
          query: function query() {}
        },
        attach: false
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "".concat(showSearchItems ? 'search-open-close' : ' ', " search-top")
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(selectPlan, null), showSearchItems && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Dropdown"], {
        trigger: ['hover'],
        overlayClassName: "search-dropdown",
        minOverlayWidthMatchTrigger: false,
        delayShow: 0.8 // overlayClassName="multi-lang-text-collapse"
        ,
        placement: "bottomLeft",
        overlay: currentPlanList.filter(function (item) {
          return item.initialvalue.value;
        }).length && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: "search-condition"
        }, currentPlanList.map(function (item) {
          if (checkIsVisible(item)) {
            return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("p", {
              className: "search-condition-item"
            }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
              className: "item-title"
            }, "".concat(itemsMap.query(item.attrcode).label, ": ")), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
              className: "item-content"
            }, _this.countQueryConditions(item, itemsMap)));
          }
        }))
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "search-conditions-value",
        onClick: function onClick() {
          setShowSearchItems(true);
        }
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, showSearchItems && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", null, multiLang['page-search-0025'], ": (", /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "search-conditions-number"
      }, currentPlanList.filter(function (item) {
        return checkIsVisible(item);
      }).length), ")"), "\xA0\xA0", currentPlanList.map(function (item) {
        if (checkIsVisible(item)) {
          return itemsMap.query(item.attrcode).label + ';';
        }
      })))), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "search-open",
        onClick: function onClick() {
          setShowSearchItems(!showSearchItems);
        }
      }, showSearchItems ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "search-open-icon"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
        className: "label"
      }, multiLang['page-search-0087']), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
        className: "iconfont icon-chaxunmoren"
      })) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "search-open-icon"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
        className: "label"
      }, multiLang['page-search-0088']), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
        className: "down iconfont icon-chaxunmoren"
      })))), !showSearchItems && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "item-contant"
      }, allItem.map(function (item, zindex) {
        if (zindex === 0) item.push('button');
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          key: zindex,
          className: "item-rows"
        }, item.map(function (data, index) {
          return _this.createSearchItem(data, zindex > 0, index === item.length - 1, zindex, currentPlanList, index);
        }));
      })));
    };

    _this.createSearchItem = function (snapshotItem) {
      var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var buttonFlag = arguments.length > 2 ? arguments[2] : undefined;
      var zindex = arguments.length > 3 ? arguments[3] : undefined;
      var currentPlanList = arguments.length > 4 ? arguments[4] : undefined;
      var search = _this.props.search;

      var _search$getInnerHooks2 = search.getInnerHooks(),
          getSearchItemDom = _search$getInnerHooks2.getSearchItemDom,
          getCurrentPlan = _search$getInnerHooks2.getCurrentPlan;

      if (buttonFlag && zindex === 0) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: "search-button"
        }, _this.createButton());
      } // 获取item  


      var currentItem = getSearchItemDom(snapshotItem.attrcode);
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(filed, searchWrapper_extends({}, currentItem, {
        style: {
          marginTop: flag ? '8px' : '0'
        },
        currentPlanPk: getCurrentPlan(),
        snapshotItem: snapshotItem,
        currentPlanList: currentPlanList,
        planName: 'currentPlanMap'
      }));
    };

    _this.clickSearch = function () {
      var _this$props = _this.props,
          _this$props$config = _this$props.config,
          config = _this$props$config === void 0 ? {} : _this$props$config,
          search = _this$props.search;

      var _search$getInnerHooks3 = search.getInnerHooks(),
          getStore = _search$getInnerHooks3.getStore,
          getAllSearchDataEve = _search$getInnerHooks3.getAllSearchDataEve;

      var clickSearchBtn = config.clickSearchBtn;
      setTimeout(function () {
        var snapshot = getStore(['showHighPanel']) ? getStore(['currentHighP`lanMap']) : getStore(['currentPlanMap']);
        var data = getAllSearchDataEve(snapshot, true);

        if (data) {
          var template = templateFilter(getStore(['items']), snapshot);
          var finalData = {
            queryAreaCode: getStore(['searchId']),
            oid: getStore(['oid']),
            querytype: 'tree',
            querycondition: data,
            template: template,
            nctz: getTimezoneOffset()
          };

          if (clickSearchBtn && typeof clickSearchBtn == 'function') {
            clickSearchBtn({
              data: data,
              status: 'simple',
              finalData: finalData
            });
          }
        }
      }, 0);
    };

    _this.clearAllValue = function () {
      var _this$props2 = _this.props,
          _this$props2$config = _this$props2.config,
          config = _this$props2$config === void 0 ? {} : _this$props2$config,
          search = _this$props2.search;

      var _search$getInnerHooks4 = search.getInnerHooks(),
          getStore = _search$getInnerHooks4.getStore,
          clearAllValueEve = _search$getInnerHooks4.clearAllValueEve;

      var advSearchClearEve = config.advSearchClearEve;
      clearAllValueEve();
      typeof advSearchClearEve == 'function' && advSearchClearEve(getStore(['currentPlanMap']));
    };

    _this.createButton = function () {
      var _this$props$config2 = _this.props.config,
          config = _this$props$config2 === void 0 ? {} : _this$props$config2;
      var onlyShowSuperBtn = config.onlyShowSuperBtn,
          searchBtnName = config.searchBtnName,
          replaceSuperBtn = config.replaceSuperBtn;
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "search-component-rowArea"
      }, !onlyShowSuperBtn && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tooltip"], {
        delayShow: 800,
        inverse: true,
        overlay: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null, typeof searchBtnName == 'string' ? searchBtnName : '高级'),
        placement: "top"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: 'search-component-searchBtn',
        onClick: _this.clickSearch
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
        className: "iconfont icon-sousuo"
      }))), !onlyShowSuperBtn && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tooltip"], {
        delayShow: 800,
        inverse: true,
        overlay: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          style: {
            padding: '0'
          }
        }, "(Alt+Del)"),
        placement: "top"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "clearBtn",
        onClick: _this.clearAllValue
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
        className: "iconfont icon-qingkong1"
      }))), onlyShowSuperBtn && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tooltip"], {
        delayShow: 800,
        inverse: true,
        overlay: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null, replaceSuperBtn),
        placement: "top"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Button"], {
        style: {
          maxWidth: onlyShowSuperBtn ? 'initial' : '29%'
        },
        colors: "primary"
      }, replaceSuperBtn)));
    };

    _this.createCheckScheme = function () {
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "search-open",
        onClick: function onClick() {}
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "search-open-icon"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
        className: "label"
      }), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
        className: "iconfont icon-chaxunmoren"
      })));
    };

    _this.state = {};
    return _this;
  }

  searchWrapper_createClass(SearchWrapper, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "search-area-contant"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "NC_CreateSearch"
      }, this.createSearchDom()));
    }
  }]);

  return SearchWrapper;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);

/* harmony default export */ var searchWrapper = (searchWrapper_SearchWrapper);
// EXTERNAL MODULE: ./node_modules/react-dnd/lib/index.js
var lib = __webpack_require__(134);

// CONCATENATED MODULE: ./src/platform/components/Search/dragItem.js
/*
 * @Author: wanglongx
 * @Date: 2020-08-04 15:52:12
 * @LastEditTime: 2020-08-12 15:18:14
 * @LastEditors: wanglongx
 * @Description: 可拖拽项
 * @FilePath: /Platform_Front/src/platform/components/Search/dragItem.js
 */


var dragItemSource = {
  beginDrag: function beginDrag(props) {
    return {
      attrcode: props.items.attrcode
    };
  }
};

var dragItem_DragItem = function DragItem(_ref) {
  var items = _ref.items,
      connectDragSource = _ref.connectDragSource,
      onDragItemClick = _ref.onDragItemClick;
  var attrcode = items.attrcode,
      label = items.label;
  return connectDragSource( /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    className: "drag-item-wrapper",
    key: attrcode,
    onClick: onDragItemClick
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
    className: "drag-item",
    title: label
  }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
    className: "name"
  }, label))));
};

/* harmony default export */ var dragItem = (Object(lib["DragSource"])('area', dragItemSource, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
})(dragItem_DragItem));
// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/lib/index.js
var react_dnd_html5_backend_lib = __webpack_require__(957);
var react_dnd_html5_backend_lib_default = /*#__PURE__*/__webpack_require__.n(react_dnd_html5_backend_lib);

// CONCATENATED MODULE: ./src/platform/components/Search/withDragDropContext.js


/* harmony default export */ var withDragDropContext = (Object(lib["DragDropContext"])(react_dnd_html5_backend_lib_default.a));
// CONCATENATED MODULE: ./src/platform/components/Search/normalItem.js
function normalItem_extends() { normalItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return normalItem_extends.apply(this, arguments); }

/*
 * @Author: wanglongx
 * @Date: 2020-08-10 13:56:54
 * @LastEditTime: 2020-08-13 13:55:09
 * @LastEditors: wanglongx
 * @Description: 高级查询内部每一个item
 * @FilePath: /Platform_Front/src/platform/components/Search/normalItem.js
 */





var Option = base_index_["Select"].Option;

function HighItem(props) {
  var item = props.item,
      data = props.data,
      currentPlanPk = props.currentPlanPk,
      currentPlanList = props.currentPlanList,
      search = props.search;

  var _search$getInnerHooks = search.getInnerHooks(),
      getCurrentHighPlan = _search$getInnerHooks.getCurrentHighPlan,
      getHighPanelStatus = _search$getInnerHooks.getHighPanelStatus,
      getJson = _search$getInnerHooks.getJson,
      setItemOperationSign = _search$getInnerHooks.setItemOperationSign,
      getSearchItemDom = _search$getInnerHooks.getSearchItemDom;

  var currentHighPlan = getCurrentHighPlan();
  var status = getHighPanelStatus();
  var multiLang = getJson();
  var mustFillIn = null;
  var selectDom;

  if (item && item.required) {
    mustFillIn = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "mustFillIn"
    }, "*");
  }

  var logicOptions = {
    and: multiLang['page-search-0035'],
    or: multiLang['page-search-0036']
  };

  if (data.children && data.children.length) {
    selectDom = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "advancedSearchSign"
    }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "advancedSearchChild"
    }, data.attrcode === 'root' ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "advancedSearch_root"
    }, logicOptions[data.operationSign]) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "select-containter"
    }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Select"], {
      className: "NC_logicSign",
      showClear: false,
      value: String(data.operationSign || 'and'),
      onChange: function onChange() {},
      fieldid: data.attrcode
    }, Object.keys(logicOptions).map(function (val, index) {
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Option, {
        key: index,
        value: String(val)
      }, logicOptions[val]);
    })))), !data.noRemove && !data.isfixedcondition && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "searchAdvCom_remove",
      onClick: function onClick() {}
    }, multiLang['page-search-0037']));
  } else {
    if (data.operationOptions) {
      selectDom = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "NC_searchAdvCom",
        field: data.refpk
      }, status === 'super' ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "remove"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "link"
      })) : null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "remove"
      }, data.remove ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "searchAdvCom_remove",
        onClick: function onClick() {}
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
        className: "iconfont icon-qingkong"
      })) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "searchAdvCom_remove"
      }, status === 'super' ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "link"
      }) : null)), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "content"
      }, mustFillIn, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tooltip"], {
        delayShow: 800,
        inverse: true,
        overlay: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null, item.label),
        placement: "top"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "searchAdvCom_name"
      }, item.label)), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "searchAdvCom_select"
      }, data.operationOptions.length > 1 ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Select"], {
        className: "NC_operateSign",
        showClear: false,
        disabled: !!item.disabled,
        value: String(data.operationSign || multiLang['page-search-0035']),
        onChange: function onChange(a, b) {
          return setItemOperationSign('currentHighPlanMap', data.uniqueKey, a, b);
        },
        fieldid: "operateSign"
      }, data.operationOptions.map(function (val, index) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Option, {
          key: index,
          value: String(val.value)
        }, val.display);
      })) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "option-label"
      }, (data.operationOptions[0] || {}).display)), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "searchAdvCom_com"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(filed, normalItem_extends({}, item, {
        key: item.attrcode,
        currentPlanPk: currentPlanPk,
        snapshotItem: data,
        currentPlanList: currentPlanList,
        planName: 'currentHighPlanMap'
      })))));
    }
  }

  if (data.children && data.children.length) {
    var _logicOptions = {
      and: multiLang['page-search-0035'],
      or: multiLang['page-search-0036']
    };
    var children = data.children;
    return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.Fragment, null, selectDom, children.map(function (item, index) {
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(HighItem, {
        item: getSearchItemDom(item.attrcode),
        key: "".concat(item.attrcode).concat(index),
        currentPlanPk: currentHighPlan,
        data: item,
        currentPlanList: children,
        search: search
      });
    }).filter(function (item) {
      return item;
    }));
  }

  return selectDom;
}

/* harmony default export */ var normalItem = (HighItem);
// CONCATENATED MODULE: ./src/platform/components/Search/normalArea.js
function normalArea_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { normalArea_typeof = function _typeof(obj) { return typeof obj; }; } else { normalArea_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return normalArea_typeof(obj); }

var _dec, _class;

function normalArea_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function normalArea_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function normalArea_createClass(Constructor, protoProps, staticProps) { if (protoProps) normalArea_defineProperties(Constructor.prototype, protoProps); if (staticProps) normalArea_defineProperties(Constructor, staticProps); return Constructor; }

function normalArea_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) normalArea_setPrototypeOf(subClass, superClass); }

function normalArea_setPrototypeOf(o, p) { normalArea_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return normalArea_setPrototypeOf(o, p); }

function normalArea_createSuper(Derived) { var hasNativeReflectConstruct = normalArea_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = normalArea_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = normalArea_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return normalArea_possibleConstructorReturn(this, result); }; }

function normalArea_possibleConstructorReturn(self, call) { if (call && (normalArea_typeof(call) === "object" || typeof call === "function")) { return call; } return normalArea_assertThisInitialized(self); }

function normalArea_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function normalArea_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function normalArea_getPrototypeOf(o) { normalArea_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return normalArea_getPrototypeOf(o); }



 // import Filed from './filed';


var areaTarget = {
  drop: function drop(props, monitor, component) {
    var dragItem = monitor.getItem();
    console.log(props, dragItem, component);
  }
}; //DropTarget用于包装接收拖拽元素的组件，使组件能够放置

var normalArea_NormalArea = (_dec = Object(lib["DropTarget"])('area', areaTarget, function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}), _dec(_class = /*#__PURE__*/function (_Component) {
  normalArea_inherits(NormalArea, _Component);

  var _super = normalArea_createSuper(NormalArea);

  function NormalArea() {
    normalArea_classCallCheck(this, NormalArea);

    return _super.apply(this, arguments);
  }

  normalArea_createClass(NormalArea, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          search = _this$props.search,
          connectDropTarget = _this$props.connectDropTarget,
          addAdvBody = _this$props.addAdvBody;

      var _search$getInnerHooks = search.getInnerHooks(),
          getCurrentHighPlan = _search$getInnerHooks.getCurrentHighPlan,
          countHighUIScheme = _search$getInnerHooks.countHighUIScheme,
          getSearchItemDom = _search$getInnerHooks.getSearchItemDom;

      var currentHighPlan = getCurrentHighPlan(),
          currentPlanList = countHighUIScheme();
      return connectDropTarget( /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "normalArea",
        id: "advArea",
        style: {
          height: Object(api_index_["isFunction"])(addAdvBody) ? 'auto' : 'calc(100% - 40px)'
        }
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "NC_searchAdvComBox",
        fieldid: Object(api_index_["getSysFieldid"])('advSearch_tree-area')
      }, currentPlanList.map(function (item, index) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(normalItem, {
          item: getSearchItemDom(item.attrcode),
          key: "".concat(item.attrcode).concat(index),
          currentPlanPk: currentHighPlan,
          data: item,
          currentPlanList: currentPlanList,
          search: search
        });
      }).filter(function (item) {
        return item;
      }))));
    }
  }]);

  return NormalArea;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"])) || _class);
/* harmony default export */ var normalArea = (normalArea_NormalArea);
// CONCATENATED MODULE: ./src/platform/components/Search/superItem.js
function superItem_extends() { superItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return superItem_extends.apply(this, arguments); }

/*
 * @Author: wanglongx
 * @Date: 2020-08-10 13:56:54
 * @LastEditTime: 2020-08-13 14:24:18
 * @LastEditors: wanglongx
 * @Description: 高级查询内部每一个item
 * @FilePath: /Platform_Front/src/platform/components/Search/superItem.js
 */





var superItem_Option = base_index_["Select"].Option;

function superItem_HighItem(props) {
  var item = props.item,
      data = props.data,
      currentPlanPk = props.currentPlanPk,
      currentPlanList = props.currentPlanList,
      search = props.search;

  var _search$getInnerHooks = search.getInnerHooks(),
      getCurrentHighPlan = _search$getInnerHooks.getCurrentHighPlan,
      getHighPanelStatus = _search$getInnerHooks.getHighPanelStatus,
      getJson = _search$getInnerHooks.getJson,
      setItemOperationSign = _search$getInnerHooks.setItemOperationSign,
      getSearchItemDom = _search$getInnerHooks.getSearchItemDom;

  var currentHighPlan = getCurrentHighPlan();
  var status = getHighPanelStatus();
  var multiLang = getJson();
  var mustFillIn = null;
  var selectDom;

  if (item && item.required) {
    mustFillIn = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "mustFillIn"
    }, "*");
  }

  var logicOptions = {
    and: multiLang['page-search-0035'],
    or: multiLang['page-search-0036']
  };

  if (data.children && data.children.length) {
    selectDom = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "advancedSearchSign"
    }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "advancedSearchChild"
    }, data.attrcode === 'root' ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "advancedSearch_root"
    }, logicOptions[data.operationSign]) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "select-containter"
    }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Select"], {
      className: "NC_logicSign",
      showClear: false,
      value: String(data.operationSign || 'and'),
      onChange: function onChange() {},
      fieldid: data.attrcode
    }, Object.keys(logicOptions).map(function (val, index) {
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(superItem_Option, {
        key: index,
        value: String(val)
      }, logicOptions[val]);
    })))), !data.noRemove && !data.isfixedcondition && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "searchAdvCom_remove",
      onClick: function onClick() {}
    }, multiLang['page-search-0037']));
  } else {
    if (data.operationOptions) {
      selectDom = /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "NC_searchAdvCom",
        field: data.refpk
      }, status === 'super' ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "remove"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "link"
      })) : null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "remove"
      }, data.remove ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "searchAdvCom_remove",
        onClick: function onClick() {}
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
        className: "iconfont icon-qingkong"
      })) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "searchAdvCom_remove"
      }, status === 'super' ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "link"
      }) : null)), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "content"
      }, mustFillIn, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tooltip"], {
        delayShow: 800,
        inverse: true,
        overlay: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null, item.label),
        placement: "top"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "searchAdvCom_name"
      }, item.label)), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "searchAdvCom_select"
      }, data.operationOptions.length > 1 ? /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Select"], {
        className: "NC_operateSign",
        showClear: false,
        disabled: !!item.disabled,
        value: String(data.operationSign || multiLang['page-search-0035']),
        onChange: function onChange(a, b) {
          return setItemOperationSign('currentHighPlanMap', data.uniqueKey, a, b);
        },
        fieldid: "operateSign"
      }, data.operationOptions.map(function (val, index) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(superItem_Option, {
          key: index,
          value: String(val.value)
        }, val.display);
      })) : /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "option-label"
      }, (data.operationOptions[0] || {}).display)), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "searchAdvCom_com"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(filed, superItem_extends({}, item, {
        key: item.attrcode,
        currentPlanPk: currentPlanPk,
        snapshotItem: data,
        currentPlanList: currentPlanList,
        planName: 'currentHighPlanSuperMap'
      })))));
    }
  }

  if (data.children && data.children.length) {
    var _logicOptions = {
      and: multiLang['page-search-0035'],
      or: multiLang['page-search-0036']
    };
    var children = data.children;
    return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.Fragment, null, selectDom, children.map(function (item, index) {
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(superItem_HighItem, {
        item: getSearchItemDom(item.attrcode),
        key: "".concat(item.attrcode).concat(index),
        currentPlanPk: currentHighPlan,
        data: item,
        currentPlanList: children,
        search: search
      });
    }).filter(function (item) {
      return item;
    }));
  }

  return selectDom;
}

/* harmony default export */ var superItem = (superItem_HighItem);
// CONCATENATED MODULE: ./src/platform/components/Search/superArea.js
function superArea_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { superArea_typeof = function _typeof(obj) { return typeof obj; }; } else { superArea_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return superArea_typeof(obj); }

var superArea_dec, superArea_class;

function superArea_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function superArea_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function superArea_createClass(Constructor, protoProps, staticProps) { if (protoProps) superArea_defineProperties(Constructor.prototype, protoProps); if (staticProps) superArea_defineProperties(Constructor, staticProps); return Constructor; }

function superArea_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) superArea_setPrototypeOf(subClass, superClass); }

function superArea_setPrototypeOf(o, p) { superArea_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return superArea_setPrototypeOf(o, p); }

function superArea_createSuper(Derived) { var hasNativeReflectConstruct = superArea_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = superArea_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = superArea_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return superArea_possibleConstructorReturn(this, result); }; }

function superArea_possibleConstructorReturn(self, call) { if (call && (superArea_typeof(call) === "object" || typeof call === "function")) { return call; } return superArea_assertThisInitialized(self); }

function superArea_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function superArea_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function superArea_getPrototypeOf(o) { superArea_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return superArea_getPrototypeOf(o); }



 // import Filed from './filed';


var superArea_areaTarget = {
  drop: function drop(props, monitor, component) {
    var dragItem = monitor.getItem();
    console.log(props, dragItem, component);
  }
}; //DropTarget用于包装接收拖拽元素的组件，使组件能够放置

var superArea_SuperArea = (superArea_dec = Object(lib["DropTarget"])('area', superArea_areaTarget, function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}), superArea_dec(superArea_class = /*#__PURE__*/function (_Component) {
  superArea_inherits(SuperArea, _Component);

  var _super = superArea_createSuper(SuperArea);

  function SuperArea() {
    superArea_classCallCheck(this, SuperArea);

    return _super.apply(this, arguments);
  }

  superArea_createClass(SuperArea, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          search = _this$props.search,
          connectDropTarget = _this$props.connectDropTarget,
          addAdvBody = _this$props.addAdvBody;

      var _search$getInnerHooks = search.getInnerHooks(),
          getCurrentHighPlan = _search$getInnerHooks.getCurrentHighPlan,
          countHighUIScheme = _search$getInnerHooks.countHighUIScheme,
          getSearchItemDom = _search$getInnerHooks.getSearchItemDom;

      var currentHighPlan = getCurrentHighPlan(),
          currentPlanList = countHighUIScheme();
      return connectDropTarget( /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "superArea",
        id: "advArea",
        style: {
          height: Object(api_index_["isFunction"])(addAdvBody) ? 'auto' : 'calc(100% - 40px)'
        }
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "NC_searchAdvComBox",
        fieldid: Object(api_index_["getSysFieldid"])('advSearch_tree-area')
      }, currentPlanList.map(function (item, index) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(superItem, {
          item: getSearchItemDom(item.attrcode),
          key: "".concat(item.attrcode).concat(index),
          currentPlanPk: currentHighPlan,
          data: item,
          currentPlanList: currentPlanList,
          search: search
        });
      }).filter(function (item) {
        return item;
      }))));
    }
  }]);

  return SuperArea;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"])) || superArea_class);
/* harmony default export */ var superArea = (superArea_SuperArea);
// CONCATENATED MODULE: ./src/platform/components/Search/highPanel.js
function highPanel_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { highPanel_typeof = function _typeof(obj) { return typeof obj; }; } else { highPanel_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return highPanel_typeof(obj); }

function highPanel_toConsumableArray(arr) { return highPanel_arrayWithoutHoles(arr) || highPanel_iterableToArray(arr) || highPanel_unsupportedIterableToArray(arr) || highPanel_nonIterableSpread(); }

function highPanel_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function highPanel_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return highPanel_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return highPanel_arrayLikeToArray(o, minLen); }

function highPanel_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function highPanel_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return highPanel_arrayLikeToArray(arr); }

function highPanel_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function highPanel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function highPanel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function highPanel_createClass(Constructor, protoProps, staticProps) { if (protoProps) highPanel_defineProperties(Constructor.prototype, protoProps); if (staticProps) highPanel_defineProperties(Constructor, staticProps); return Constructor; }

function highPanel_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) highPanel_setPrototypeOf(subClass, superClass); }

function highPanel_setPrototypeOf(o, p) { highPanel_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return highPanel_setPrototypeOf(o, p); }

function highPanel_createSuper(Derived) { var hasNativeReflectConstruct = highPanel_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = highPanel_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = highPanel_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return highPanel_possibleConstructorReturn(this, result); }; }

function highPanel_possibleConstructorReturn(self, call) { if (call && (highPanel_typeof(call) === "object" || typeof call === "function")) { return call; } return highPanel_assertThisInitialized(self); }

function highPanel_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function highPanel_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function highPanel_getPrototypeOf(o) { highPanel_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return highPanel_getPrototypeOf(o); }

/*
 * @Author: summer
 * @Date: 2020-06-08 13:59:47
 * @LastEditTime: 2020-12-04 16:09:34
 * @LastEditors: bbq
 * @Description: 查询区高级面板
 *      查询区需要兼容处理属性 属性太多了！！！！
 *      clickSearchBtn, // 查询按钮点击事件回调，只返回公共查询条件，不包含自定义查询条件；如果有自定义查询条件，需要业务组在clickPlanEve方法中接收查询方案信息，并保存到业务组的state中，然后在 clickSearchBtn方法中自行合并公共条件和自定义条件。
        searchBtnName = '',
        onAfterEvent, // 编辑后事件
        showSearchBtn = true, // 是否显示查询按钮 ,默认显示
        showAdvBtn = true, // 是否显示高级查询按钮和查询方案按钮 ,默认显示
        showClearBtn = true, // 是否显示清空按钮
        showAdvSearchPlanBtn = true, // 高级面板中是否显示保存方案按钮
        replaceAdvBtnEve, // 业务组替换高级面板 (fun)
        replaceAdvBody, // 业务组替换高级面板中的body (fun)
        addAdvTabs, // 添加高级查询区自定义页签 (fun)
        addAdvBody, // 添加高级查询区自定义查询条件Dom (fun)
        replaceRightBody, // 添加高级查询区右侧区域自定义查询条件Dom (fun)
        hideSearchCondition = false, // 隐藏候选条件
        saveSearchPlan, // 保存查询方案确定按钮事件 ，用于业务组返回自定义的查询条件
        clickPlanEve, // 点击高级面板中的查询方案事件 ,用于业务组为自定义查询区赋值
        clickAdvBtnEve, //单击高级之后的回调方法
        hideBtnArea = false, // 隐藏查询按钮区域，默认false
        advSearchClearEve, // 高级查询面板中的清空按钮 点击事件回调，用于业务组清除自定义查询条件值
        onlyShowSuperBtn = false, // 只显示高级按钮
        replaceSuperBtn = '', // 替换高级按钮
        onOperateTypeChange, // 操作符改变时的回调
        onlyShowAdvArea = false, //在查询区只显示 高级查询部分,
        onlyShowModal = false, //在查询区只显示 模态框,
        renderCompleteEvent, //查询区渲染完成之后的回调事件
        statusChangeEvent, //切换查询区状态时的回调
        context = '', //如果业务组传了上下文进来，就用业务组的数据
        setInitValueEvent, //初始化四状态默认值的时候的回调函数
        useCache = true, //是否启用查询区缓存，默认启用
        isSynInitAdvSearch = false, //是否同步渲染高级查询
        onlyShowModalCancelCallback, // 只渲染modal时 关闭modal 触发的回调
        onlyShowPlan = false, // 只显示方案列表和高级查询
        searchModalTitle = '', // 高级查询 modal title
        currentSearch = true,
        opneBtnClick, //展开收起按钮的单击事件，触发是在面板展开或关闭之后进行的
        isTemplateOrder = false, //默认不是模板顺序，如果是模板顺序，则取消必填项优先的逻辑
        removeQuerConditionEve, //移除查询条件的触发条件，返回ture 则 不能移除
        fieldid
 * 
 * @FilePath: /Platform_Front/src/platform/components/Search/highPanel.js
 */


 // import Filed from './Filed';






var TabPane = base_index_["Tabs"].TabPane;
var TreeNode = base_index_["Tree"].TreeNode;
var RadioGroup = base_index_["Radio"].RadioGroup;

__webpack_require__(1805);

var highPanel_HighPanel = /*#__PURE__*/function (_Component) {
  highPanel_inherits(HighPanel, _Component);

  var _super = highPanel_createSuper(HighPanel);

  function HighPanel() {
    var _this;

    highPanel_classCallCheck(this, HighPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.modalShow = function () {
      var search = _this.props.search;

      var _search$getInnerHooks = search.getInnerHooks(),
          setPanelShow = _search$getInnerHooks.setPanelShow;

      setPanelShow(true);
    };

    _this.modalClose = function () {
      var search = _this.props.search;

      var _search$getInnerHooks2 = search.getInnerHooks(),
          setPanelShow = _search$getInnerHooks2.setPanelShow;

      setPanelShow(false);
    };

    _this.renderLeftContent = function () {};

    _this.renderRightContent = function () {
      var _this$props = _this.props,
          search = _this$props.search,
          _this$props$config = _this$props.config,
          config = _this$props$config === void 0 ? {} : _this$props$config;

      var _search$getInnerHooks3 = search.getInnerHooks(),
          getJson = _search$getInnerHooks3.getJson;

      var addAdvTabs = config.addAdvTabs;
      var multiLang = getJson();
      var def = [{
        name: multiLang['page-search-0025'],
        content: _this.defRightDom()
      }];

      if (Object(api_index_["isFunction"])(addAdvTabs)) {
        def = [].concat(highPanel_toConsumableArray(def), highPanel_toConsumableArray(addAdvTabs()));
      }

      return def;
    };

    _this.defRightDom = function () {
      var _this$props2 = _this.props,
          search = _this$props2.search,
          _this$props2$config = _this$props2.config,
          config = _this$props2$config === void 0 ? {} : _this$props2$config;

      var _search$getInnerHooks4 = search.getInnerHooks(),
          getJson = _search$getInnerHooks4.getJson,
          getHighPanelStatus = _search$getInnerHooks4.getHighPanelStatus,
          setHighPanelStatus = _search$getInnerHooks4.setHighPanelStatus,
          initSuperData = _search$getInnerHooks4.initSuperData;

      var addAdvBody = config.addAdvBody;
      var multiLang = getJson();
      var status = getHighPanelStatus(); // initSuperData()

      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "adv-right-area",
        id: "adv-right-area"
      }, Object(api_index_["isFunction"])(addAdvBody) && addAdvBody(), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(RadioGroup, {
        selectedValue: status,
        onChange: function onChange(item) {
          return setHighPanelStatus(item);
        }
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Radio"], {
        value: "normal"
      }, multiLang['page-search-0006']), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Radio"], {
        value: "super"
      }, multiLang['page-search-0007'])), status === 'normal' && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(normalArea, {
        search: search,
        addAdvBody: addAdvBody
      }), status === 'super' && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(superArea, {
        search: search,
        addAdvBody: addAdvBody
      }) // <div 
      //     id="advArea" 
      //     className="superArea" 
      //     style={{ height: isFunction(addAdvBody) ? 'auto' : 'calc(100% - 40px)' }}
      // >
      //     {this.creatRightCondition()}
      // </div>
      );
    };

    _this.creatRightCondition = function () {
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null, "1234");
    };

    _this.createTree = function () {
      var search = _this.props.search;

      var _search$getInnerHooks5 = search.getInnerHooks(),
          getStore = _search$getInnerHooks5.getStore;

      var items = getStore(['items']);
      if (!items) return null;
      return Object.values(items).map(function (item) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(dragItem, {
          items: item,
          key: item.attrcode
        });
      });
    };

    _this.createSearchPlan = function () {
      var search = _this.props.search;

      var _search$getInnerHooks6 = search.getInnerHooks(),
          getJson = _search$getInnerHooks6.getJson,
          getStore = _search$getInnerHooks6.getStore,
          getCurrentHighPlan = _search$getInnerHooks6.getCurrentHighPlan,
          setCurrentHighPlan = _search$getInnerHooks6.setCurrentHighPlan;

      var multiLang = getJson();
      var querySchemes = getStore(['querySchemes']);
      var currentPlan = getCurrentHighPlan();
      if (!querySchemes) return null;
      return querySchemes.map(function (item) {
        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("li", {
          className: "searchPlanList ".concat(currentPlan == item.pk_ncc_queryscheme ? 'active' : ''),
          key: item.pk_ncc_queryscheme
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          className: "searchPlanName",
          onClick: function onClick() {
            return setCurrentHighPlan(item.pk_ncc_queryscheme);
          }
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tooltip"], {
          delayShow: 800,
          inverse: true,
          overlay: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null, item.name),
          placement: "top"
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", null, item.name))), !item.isquickqs && !item.isMyPlan && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tooltip"], {
          placement: "top",
          overlay: multiLang['page-search-icon-modify']
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          className: "searchPlanEdit",
          onClick: function onClick() {}
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
          className: "iconfont icon-gerenpeizhi"
        }))), !item.isquickqs && !item.isMyPlan && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tooltip"], {
          placement: "top",
          overlay: multiLang['page-search-icon-delete']
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
          className: "searchPlanDel",
          onClick: function onClick() {}
        }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("i", {
          className: "iconfont icon-shanchu"
        }))));
      });
    };

    _this.renderContent = function () {
      var _this$props3 = _this.props,
          search = _this$props3.search,
          _this$props3$config = _this$props3.config,
          config = _this$props3$config === void 0 ? {} : _this$props3$config;

      var _search$getInnerHooks7 = search.getInnerHooks(),
          getLeftActiveTab = _search$getInnerHooks7.getLeftActiveTab,
          setLeftActiveTab = _search$getInnerHooks7.setLeftActiveTab,
          getRightActiveTab = _search$getInnerHooks7.getRightActiveTab,
          setRightActiveTab = _search$getInnerHooks7.setRightActiveTab,
          getJson = _search$getInnerHooks7.getJson;

      var replaceRightBody = config.replaceRightBody;
      var activeTab = getLeftActiveTab();
      var multiLang = getJson();
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "modalBody"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "modalBodyBox"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "leftArea"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tabs"], {
        defaultActiveKey: "1",
        onChange: function onChange(item) {
          return setLeftActiveTab(item);
        },
        activeKey: activeTab,
        tabBarStyle: "noborder",
        className: "searchTabStyle"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(TabPane, {
        tab: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: activeTab == '1' && 'tab-label-in'
        }, multiLang['page-search-0004']),
        key: "1"
      }, _this.createTree()), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(TabPane, {
        tab: /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
          className: activeTab == '2' && 'tab-label-in'
        }, multiLang['page-search-0005']),
        key: "2"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("ul", {
        className: "searchPlanUl"
      }, _this.createSearchPlan())))), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "rightArea"
      }, Object(api_index_["isFunction"])(replaceRightBody) && replaceRightBody(), !Object(api_index_["isFunction"])(replaceRightBody) && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("span", {
        className: "clearData",
        onClick: function onClick() {}
      }, multiLang['page-search-0017']), !Object(api_index_["isFunction"])(replaceRightBody) && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Tabs"], {
        style: {
          height: '100%'
        },
        onChange: function onChange(item) {
          return setRightActiveTab(item);
        },
        activeKey: getRightActiveTab()
      }, _this.renderRightContent().map(function (e, i) {
        if (e.defaultOpen === true && _this.defaultOpen) {
          setRightActiveTab(String(i)); // this.defaultOpen = false;
        }

        return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(TabPane, {
          tab: e.name,
          key: i
        }, e.content);
      }, highPanel_assertThisInitialized(_this))))));
    };

    return _this;
  }

  highPanel_createClass(HighPanel, [{
    key: "render",
    value: function render() {
      var search = this.props.search;

      var _search$getInnerHooks8 = search.getInnerHooks(),
          getStore = _search$getInnerHooks8.getStore,
          getJson = _search$getInnerHooks8.getJson;

      var multiLang = getJson();
      var panelShow = getStore(['showHighPanel']);
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Modal"], {
        show: panelShow,
        onHide: this.modalClose,
        width: 850
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Modal"].Header, {
        closeButton: true
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Modal"].Title, null, multiLang['page-search-0025'])), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Modal"].Body, {
        className: "NC_searchAdvModal"
      }, this.renderContent()), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Modal"].Footer, null, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Button"], {
        onClick: this.savePlanFun,
        shape: "border" //colors="danger"
        ,
        className: "secondary-button secondary-button-wrapper footer-button-left",
        fieldid: "savePlan"
      }, multiLang['page-search-0008']), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Button"], {
        onClick: this.addPlanFun,
        shape: "border" //colors="danger"//
        ,
        className: "secondary-button secondary-button-wrapper footer-button-right",
        fieldid: "addPlan"
      }, multiLang['page-search-0081']), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Button"], {
        onClick: this.modalClose,
        bordered: true
      }, multiLang['page-search-0001']), /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(base_index_["Button"], {
        onClick: this.modalClose,
        colors: "secondary",
        style: {
          marginRight: 8
        }
      }, multiLang['page-search-0010'])));
    }
  }]);

  return HighPanel;
}(external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_["Component"]);

/* harmony default export */ var highPanel = (withDragDropContext(highPanel_HighPanel));
// CONCATENATED MODULE: ./src/platform/components/Search/index.js
function Search_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Search_typeof = function _typeof(obj) { return typeof obj; }; } else { Search_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Search_typeof(obj); }

var Search_class;

function Search_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Search_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Search_createClass(Constructor, protoProps, staticProps) { if (protoProps) Search_defineProperties(Constructor.prototype, protoProps); if (staticProps) Search_defineProperties(Constructor, staticProps); return Constructor; }

function Search_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Search_setPrototypeOf(subClass, superClass); }

function Search_setPrototypeOf(o, p) { Search_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Search_setPrototypeOf(o, p); }

function Search_createSuper(Derived) { var hasNativeReflectConstruct = Search_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Search_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Search_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Search_possibleConstructorReturn(this, result); }; }

function Search_possibleConstructorReturn(self, call) { if (call && (Search_typeof(call) === "object" || typeof call === "function")) { return call; } return Search_assertThisInitialized(self); }

function Search_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Search_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Search_getPrototypeOf(o) { Search_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Search_getPrototypeOf(o); }

/*
 * @Author: wanglongx
 * @Date: 2020-06-05 10:08:39
 * @LastEditTime: 2020-08-11 10:54:02
 * @LastEditors: wanglongx
 * @Description: In User Settings Edit
 * @FilePath: /Platform_Front/src/platform/components/Search/index.js
 */









var Search_Search = Object(index_["ItemProvider"])(Search_class = /*#__PURE__*/function (_BaseComponent) {
  Search_inherits(Search, _BaseComponent);

  var _super = Search_createSuper(Search);

  function Search(props) {
    Search_classCallCheck(this, Search);

    return _super.call(this, props); // const { store, config, name } = props;
    // 实例化时 已知表单查询区ID 缓存ID和config
    // if(name && store) {
    //     const { setStore } = store.getInnerHooks();
    //     setStore(['searchId'], name);
    //     setStore(['propsConfig'], config)
    // }
  }

  Search_createClass(Search, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var store = this.props.store;

      var _store$getInnerHooks = store.getInnerHooks(),
          setJson = _store$getInnerHooks.setJson;

      Object(api_index_["getMultiLang"])({
        moduleId: 'page_search',
        callback: setJson
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          store = _this$props.store,
          _this$props$config = _this$props.config,
          config = _this$props$config === void 0 ? {} : _this$props$config;

      var _store$getInnerHooks2 = store.getInnerHooks(),
          getStore = _store$getInnerHooks2.getStore;

      var panelShow = getStore(['showHighPanel']);
      return /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(searchContext.Provider, {
        value: {
          search: store,
          config: config
        }
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
        className: "search-area"
      }, /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(searchWrapper, {
        search: store,
        config: config
      }), panelShow && /*#__PURE__*/external_root_React_var_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(highPanel, {
        search: store,
        config: config
      })));
    }
  }]);

  return Search;
}(index_["BaseComponent"])) || Search_class;

Search_Search.useSearch = useSearch;
/* harmony default export */ var components_Search = __webpack_exports__["default"] = (Search_Search);

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

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
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
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(93);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

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

module.exports = getRawTag;


/***/ }),

/***/ 329:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

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

module.exports = objectToString;


/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(331),
    ListCache = __webpack_require__(342),
    Map = __webpack_require__(348);

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

module.exports = mapCacheClear;


/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(332),
    hashDelete = __webpack_require__(338),
    hashGet = __webpack_require__(339),
    hashHas = __webpack_require__(340),
    hashSet = __webpack_require__(341);

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

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(65);

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

module.exports = hashClear;


/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(146),
    isMasked = __webpack_require__(334),
    isObject = __webpack_require__(87),
    toSource = __webpack_require__(336);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

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

module.exports = baseIsNative;


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(335);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

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

module.exports = isMasked;


/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(64);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 336:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

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

module.exports = toSource;


/***/ }),

/***/ 337:
/***/ (function(module, exports) {

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

module.exports = getValue;


/***/ }),

/***/ 338:
/***/ (function(module, exports) {

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

module.exports = hashDelete;


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(65);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

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

module.exports = hashGet;


/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(65);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

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

module.exports = hashHas;


/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(65);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

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

module.exports = hashSet;


/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(343),
    listCacheDelete = __webpack_require__(344),
    listCacheGet = __webpack_require__(345),
    listCacheHas = __webpack_require__(346),
    listCacheSet = __webpack_require__(347);

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

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 343:
/***/ (function(module, exports) {

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

module.exports = listCacheClear;


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(66);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

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

module.exports = listCacheDelete;


/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(66);

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

module.exports = listCacheGet;


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(66);

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

module.exports = listCacheHas;


/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(66);

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

module.exports = listCacheSet;


/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(86),
    root = __webpack_require__(64);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(67);

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

module.exports = mapCacheDelete;


/***/ }),

/***/ 350:
/***/ (function(module, exports) {

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

module.exports = isKeyable;


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(67);

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

module.exports = mapCacheGet;


/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(67);

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

module.exports = mapCacheHas;


/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(67);

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

module.exports = mapCacheSet;


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(86);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


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

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(171),
    setCacheAdd = __webpack_require__(723),
    setCacheHas = __webpack_require__(724);

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

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(725);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 369:
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ 370:
/***/ (function(module, exports) {

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

module.exports = baseUnary;


/***/ }),

/***/ 371:
/***/ (function(module, exports) {

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

module.exports = cacheHas;


/***/ }),

/***/ 372:
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(146),
    isLength = __webpack_require__(416);

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

module.exports = isArrayLike;


/***/ }),

/***/ 400:
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.END_DRAG = exports.DROP = exports.HOVER = exports.PUBLISH_DRAG_SOURCE = exports.BEGIN_DRAG = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.beginDrag = beginDrag;
exports.publishDragSource = publishDragSource;
exports.hover = hover;
exports.drop = drop;
exports.endDrag = endDrag;

var _invariant = __webpack_require__(32);

var _invariant2 = _interopRequireDefault(_invariant);

var _isArray = __webpack_require__(78);

var _isArray2 = _interopRequireDefault(_isArray);

var _isObject = __webpack_require__(87);

var _isObject2 = _interopRequireDefault(_isObject);

var _matchesType = __webpack_require__(913);

var _matchesType2 = _interopRequireDefault(_matchesType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BEGIN_DRAG = exports.BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
var PUBLISH_DRAG_SOURCE = exports.PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
var HOVER = exports.HOVER = 'dnd-core/HOVER';
var DROP = exports.DROP = 'dnd-core/DROP';
var END_DRAG = exports.END_DRAG = 'dnd-core/END_DRAG';

function beginDrag(sourceIds) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { publishSource: true, clientOffset: null };
	var publishSource = options.publishSource,
	    clientOffset = options.clientOffset,
	    getSourceClientOffset = options.getSourceClientOffset;

	(0, _invariant2.default)((0, _isArray2.default)(sourceIds), 'Expected sourceIds to be an array.');

	var monitor = this.getMonitor();
	var registry = this.getRegistry();
	(0, _invariant2.default)(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');

	for (var i = 0; i < sourceIds.length; i++) {
		(0, _invariant2.default)(registry.getSource(sourceIds[i]), 'Expected sourceIds to be registered.');
	}

	var sourceId = null;
	for (var _i = sourceIds.length - 1; _i >= 0; _i--) {
		if (monitor.canDragSource(sourceIds[_i])) {
			sourceId = sourceIds[_i];
			break;
		}
	}
	if (sourceId === null) {
		return;
	}

	var sourceClientOffset = null;
	if (clientOffset) {
		(0, _invariant2.default)(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
		sourceClientOffset = getSourceClientOffset(sourceId);
	}

	var source = registry.getSource(sourceId);
	var item = source.beginDrag(monitor, sourceId);
	(0, _invariant2.default)((0, _isObject2.default)(item), 'Item must be an object.');

	registry.pinSource(sourceId);

	var itemType = registry.getSourceType(sourceId);
	return {
		type: BEGIN_DRAG,
		itemType: itemType,
		item: item,
		sourceId: sourceId,
		clientOffset: clientOffset,
		sourceClientOffset: sourceClientOffset,
		isSourcePublic: publishSource
	};
}

function publishDragSource() {
	var monitor = this.getMonitor();
	if (!monitor.isDragging()) {
		return;
	}

	return { type: PUBLISH_DRAG_SOURCE };
}

function hover(targetIdsArg) {
	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$clientOffset = _ref.clientOffset,
	    clientOffset = _ref$clientOffset === undefined ? null : _ref$clientOffset;

	(0, _invariant2.default)((0, _isArray2.default)(targetIdsArg), 'Expected targetIds to be an array.');
	var targetIds = targetIdsArg.slice(0);

	var monitor = this.getMonitor();
	var registry = this.getRegistry();
	(0, _invariant2.default)(monitor.isDragging(), 'Cannot call hover while not dragging.');
	(0, _invariant2.default)(!monitor.didDrop(), 'Cannot call hover after drop.');

	// First check invariants.
	for (var i = 0; i < targetIds.length; i++) {
		var targetId = targetIds[i];
		(0, _invariant2.default)(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');

		var target = registry.getTarget(targetId);
		(0, _invariant2.default)(target, 'Expected targetIds to be registered.');
	}

	var draggedItemType = monitor.getItemType();

	// Remove those targetIds that don't match the targetType.  This
	// fixes shallow isOver which would only be non-shallow because of
	// non-matching targets.
	for (var _i2 = targetIds.length - 1; _i2 >= 0; _i2--) {
		var _targetId = targetIds[_i2];
		var targetType = registry.getTargetType(_targetId);
		if (!(0, _matchesType2.default)(targetType, draggedItemType)) {
			targetIds.splice(_i2, 1);
		}
	}

	// Finally call hover on all matching targets.
	for (var _i3 = 0; _i3 < targetIds.length; _i3++) {
		var _targetId2 = targetIds[_i3];
		var _target = registry.getTarget(_targetId2);
		_target.hover(monitor, _targetId2);
	}

	return {
		type: HOVER,
		targetIds: targetIds,
		clientOffset: clientOffset
	};
}

function drop() {
	var _this = this;

	var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	var monitor = this.getMonitor();
	var registry = this.getRegistry();
	(0, _invariant2.default)(monitor.isDragging(), 'Cannot call drop while not dragging.');
	(0, _invariant2.default)(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');

	var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);

	targetIds.reverse();
	targetIds.forEach(function (targetId, index) {
		var target = registry.getTarget(targetId);

		var dropResult = target.drop(monitor, targetId);
		(0, _invariant2.default)(typeof dropResult === 'undefined' || (0, _isObject2.default)(dropResult), 'Drop result must either be an object or undefined.');
		if (typeof dropResult === 'undefined') {
			dropResult = index === 0 ? {} : monitor.getDropResult();
		}

		_this.store.dispatch({
			type: DROP,
			dropResult: _extends({}, options, dropResult)
		});
	});
}

function endDrag() {
	var monitor = this.getMonitor();
	var registry = this.getRegistry();
	(0, _invariant2.default)(monitor.isDragging(), 'Cannot call endDrag while not dragging.');

	var sourceId = monitor.getSourceId();
	var source = registry.getSource(sourceId, true);
	source.endDrag(monitor, sourceId);

	registry.unpinSource();

	return { type: END_DRAG };
}

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(367),
    arrayIncludes = __webpack_require__(368),
    arrayIncludesWith = __webpack_require__(369),
    arrayMap = __webpack_require__(147),
    baseUnary = __webpack_require__(370),
    cacheHas = __webpack_require__(371);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ 416:
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

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

module.exports = isLength;


/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addSource = addSource;
exports.addTarget = addTarget;
exports.removeSource = removeSource;
exports.removeTarget = removeTarget;
var ADD_SOURCE = exports.ADD_SOURCE = 'dnd-core/ADD_SOURCE';
var ADD_TARGET = exports.ADD_TARGET = 'dnd-core/ADD_TARGET';
var REMOVE_SOURCE = exports.REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
var REMOVE_TARGET = exports.REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';

function addSource(sourceId) {
	return {
		type: ADD_SOURCE,
		sourceId: sourceId
	};
}

function addTarget(targetId) {
	return {
		type: ADD_TARGET,
		targetId: targetId
	};
}

function removeSource(sourceId) {
	return {
		type: REMOVE_SOURCE,
		sourceId: sourceId
	};
}

function removeTarget(targetId) {
	return {
		type: REMOVE_TARGET,
		targetId: targetId
	};
}

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(735),
    isFlattenable = __webpack_require__(736);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(737),
    isObjectLike = __webpack_require__(94);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

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

module.exports = isArguments;


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = checkDecoratorArguments;
function checkDecoratorArguments(functionName, signature) {
	if (false) { var arg, i; }
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

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(170);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(86);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(110);

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

module.exports = assocIndexOf;


/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(171);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(350);

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

module.exports = getMapData;


/***/ }),

/***/ 723:
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

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

module.exports = setCacheAdd;


/***/ }),

/***/ 724:
/***/ (function(module, exports) {

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

module.exports = setCacheHas;


/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(726),
    baseIsNaN = __webpack_require__(727),
    strictIndexOf = __webpack_require__(728);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 726:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ 727:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 728:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(730);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ 730:
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(732),
    shortOut = __webpack_require__(734);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(733),
    defineProperty = __webpack_require__(354),
    identity = __webpack_require__(372);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ 733:
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ 734:
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ 735:
/***/ (function(module, exports) {

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

module.exports = arrayPush;


/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(93),
    isArguments = __webpack_require__(419),
    isArray = __webpack_require__(78);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(107),
    isObjectLike = __webpack_require__(94);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

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

module.exports = baseIsArguments;


/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = shallowEqual;
function shallowEqual(objA, objB) {
	if (objA === objB) {
		return true;
	}

	var keysA = Object.keys(objA);
	var keysB = Object.keys(objB);

	if (keysA.length !== keysB.length) {
		return false;
	}

	// Test for A's keys different from B.
	var hasOwn = Object.prototype.hasOwnProperty;
	for (var i = 0; i < keysA.length; i += 1) {
		if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
			return false;
		}

		var valA = objA[keysA[i]];
		var valB = objB[keysA[i]];

		if (valA !== valB) {
			return false;
		}
	}

	return true;
}

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = isDisposable;

function isDisposable(obj) {
  return Boolean(obj && typeof obj.dispose === 'function');
}

module.exports = exports['default'];

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FILE = exports.FILE = '__NATIVE_FILE__';
var URL = exports.URL = '__NATIVE_URL__';
var TEXT = exports.TEXT = '__NATIVE_TEXT__';

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

/***/ 78:
/***/ (function(module, exports) {

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

module.exports = isArray;


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(333),
    getValue = __webpack_require__(337);

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

module.exports = getNative;


/***/ }),

/***/ 87:
/***/ (function(module, exports) {

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

module.exports = isObject;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36), __webpack_require__(316)(module)))

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.unpackBackendForEs5Users = exports.createChildContext = exports.CHILD_CONTEXT_TYPES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = DragDropContext;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dndCore = __webpack_require__(1806);

var _invariant = __webpack_require__(32);

var _invariant2 = _interopRequireDefault(_invariant);

var _hoistNonReactStatics = __webpack_require__(738);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _checkDecoratorArguments = __webpack_require__(420);

var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CHILD_CONTEXT_TYPES = exports.CHILD_CONTEXT_TYPES = {
	dragDropManager: _propTypes2.default.object.isRequired
};

var createChildContext = exports.createChildContext = function createChildContext(backend, context) {
	return {
		dragDropManager: new _dndCore.DragDropManager(backend, context)
	};
};

var unpackBackendForEs5Users = exports.unpackBackendForEs5Users = function unpackBackendForEs5Users(backendOrModule) {
	// Auto-detect ES6 default export for people still using ES5
	var backend = backendOrModule;
	if ((typeof backend === 'undefined' ? 'undefined' : _typeof(backend)) === 'object' && typeof backend.default === 'function') {
		backend = backend.default;
	}
	(0, _invariant2.default)(typeof backend === 'function', 'Expected the backend to be a function or an ES6 module exporting a default function. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-drop-context.html');
	return backend;
};

function DragDropContext(backendOrModule) {
	_checkDecoratorArguments2.default.apply(undefined, ['DragDropContext', 'backend'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params

	var backend = unpackBackendForEs5Users(backendOrModule);
	var childContext = createChildContext(backend);

	return function decorateContext(DecoratedComponent) {
		var _class, _temp;

		var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

		var DragDropContextContainer = (_temp = _class = function (_Component) {
			_inherits(DragDropContextContainer, _Component);

			function DragDropContextContainer() {
				_classCallCheck(this, DragDropContextContainer);

				return _possibleConstructorReturn(this, (DragDropContextContainer.__proto__ || Object.getPrototypeOf(DragDropContextContainer)).apply(this, arguments));
			}

			_createClass(DragDropContextContainer, [{
				key: 'getDecoratedComponentInstance',
				value: function getDecoratedComponentInstance() {
					(0, _invariant2.default)(this.child, 'In order to access an instance of the decorated component it can not be a stateless component.');
					return this.child;
				}
			}, {
				key: 'getManager',
				value: function getManager() {
					return childContext.dragDropManager;
				}
			}, {
				key: 'getChildContext',
				value: function getChildContext() {
					return childContext;
				}
			}, {
				key: 'render',
				value: function render() {
					var _this2 = this;

					return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, {
						ref: function ref(child) {
							_this2.child = child;
						}
					}));
				}
			}]);

			return DragDropContextContainer;
		}(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = 'DragDropContext(' + displayName + ')', _class.childContextTypes = CHILD_CONTEXT_TYPES, _temp);


		return (0, _hoistNonReactStatics2.default)(DragDropContextContainer, DecoratedComponent);
	};
}

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = dragOffset;
exports.getSourceClientOffset = getSourceClientOffset;
exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;

var _dragDrop = __webpack_require__(414);

var initialState = {
	initialSourceClientOffset: null,
	initialClientOffset: null,
	clientOffset: null
};

function areOffsetsEqual(offsetA, offsetB) {
	if (offsetA === offsetB) {
		return true;
	}
	return offsetA && offsetB && offsetA.x === offsetB.x && offsetA.y === offsetB.y;
}

function dragOffset() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case _dragDrop.BEGIN_DRAG:
			return {
				initialSourceClientOffset: action.sourceClientOffset,
				initialClientOffset: action.clientOffset,
				clientOffset: action.clientOffset
			};
		case _dragDrop.HOVER:
			if (areOffsetsEqual(state.clientOffset, action.clientOffset)) {
				return state;
			}
			return _extends({}, state, {
				clientOffset: action.clientOffset
			});
		case _dragDrop.END_DRAG:
		case _dragDrop.DROP:
			return initialState;
		default:
			return state;
	}
}

function getSourceClientOffset(state) {
	var clientOffset = state.clientOffset,
	    initialClientOffset = state.initialClientOffset,
	    initialSourceClientOffset = state.initialSourceClientOffset;

	if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
		return null;
	}
	return {
		x: clientOffset.x + initialSourceClientOffset.x - initialClientOffset.x,
		y: clientOffset.y + initialSourceClientOffset.y - initialClientOffset.y
	};
}

function getDifferenceFromInitialOffset(state) {
	var clientOffset = state.clientOffset,
	    initialClientOffset = state.initialClientOffset;

	if (!clientOffset || !initialClientOffset) {
		return null;
	}
	return {
		x: clientOffset.x - initialClientOffset.x,
		y: clientOffset.y - initialClientOffset.y
	};
}

/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = matchesType;

var _isArray = __webpack_require__(78);

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matchesType(targetType, draggedItemType) {
	if ((0, _isArray2.default)(targetType)) {
		return targetType.some(function (t) {
			return t === draggedItemType;
		});
	} else {
		return targetType === draggedItemType;
	}
}

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(415),
    baseRest = __webpack_require__(154),
    isArrayLikeObject = __webpack_require__(178);

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = dirtyHandlerIds;
exports.areDirty = areDirty;

var _xor = __webpack_require__(1814);

var _xor2 = _interopRequireDefault(_xor);

var _intersection = __webpack_require__(1819);

var _intersection2 = _interopRequireDefault(_intersection);

var _dragDrop = __webpack_require__(414);

var _registry = __webpack_require__(417);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NONE = [];
var ALL = [];

function dirtyHandlerIds() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NONE;
	var action = arguments[1];
	var dragOperation = arguments[2];

	switch (action.type) {
		case _dragDrop.HOVER:
			break;
		case _registry.ADD_SOURCE:
		case _registry.ADD_TARGET:
		case _registry.REMOVE_TARGET:
		case _registry.REMOVE_SOURCE:
			return NONE;
		case _dragDrop.BEGIN_DRAG:
		case _dragDrop.PUBLISH_DRAG_SOURCE:
		case _dragDrop.END_DRAG:
		case _dragDrop.DROP:
		default:
			return ALL;
	}

	var targetIds = action.targetIds;
	var prevTargetIds = dragOperation.targetIds;

	var result = (0, _xor2.default)(targetIds, prevTargetIds);

	var didChange = false;
	if (result.length === 0) {
		for (var i = 0; i < targetIds.length; i++) {
			if (targetIds[i] !== prevTargetIds[i]) {
				didChange = true;
				break;
			}
		}
	} else {
		didChange = true;
	}

	if (!didChange) {
		return NONE;
	}

	var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
	var innermostTargetId = targetIds[targetIds.length - 1];

	if (prevInnermostTargetId !== innermostTargetId) {
		if (prevInnermostTargetId) {
			result.push(prevInnermostTargetId);
		}
		if (innermostTargetId) {
			result.push(innermostTargetId);
		}
	}

	return result;
}

function areDirty(state, handlerIds) {
	if (state === NONE) {
		return false;
	}

	if (state === ALL || typeof handlerIds === 'undefined') {
		return true;
	}

	return (0, _intersection2.default)(handlerIds, state).length > 0;
}

/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(367),
    arrayIncludes = __webpack_require__(368),
    arrayIncludesWith = __webpack_require__(369),
    cacheHas = __webpack_require__(371),
    createSet = __webpack_require__(1817),
    setToArray = __webpack_require__(918);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ 917:
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ 918:
/***/ (function(module, exports) {

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

module.exports = setToArray;


/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = shallowEqualScalar;
function shallowEqualScalar(objA, objB) {
	if (objA === objB) {
		return true;
	}

	if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
		return false;
	}

	var keysA = Object.keys(objA);
	var keysB = Object.keys(objB);

	if (keysA.length !== keysB.length) {
		return false;
	}

	// Test for A's keys different from B.
	var hasOwn = Object.prototype.hasOwnProperty;
	for (var i = 0; i < keysA.length; i += 1) {
		if (!hasOwn.call(objB, keysA[i])) {
			return false;
		}

		var valA = objA[keysA[i]];
		var valB = objB[keysA[i]];

		if (valA !== valB || (typeof valA === 'undefined' ? 'undefined' : _typeof(valA)) === 'object' || (typeof valB === 'undefined' ? 'undefined' : _typeof(valB)) === 'object') {
			return false;
		}
	}

	return true;
}

/***/ }),

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = decorateHandler;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _disposables = __webpack_require__(1834);

var _isPlainObject = __webpack_require__(153);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _invariant = __webpack_require__(32);

var _invariant2 = _interopRequireDefault(_invariant);

var _hoistNonReactStatics = __webpack_require__(738);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _shallowEqual = __webpack_require__(739);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _shallowEqualScalar = __webpack_require__(919);

var _shallowEqualScalar2 = _interopRequireDefault(_shallowEqualScalar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isClassComponent = function isClassComponent(Comp) {
	return Boolean(Comp && Comp.prototype && typeof Comp.prototype.render === 'function');
};

function decorateHandler(_ref) {
	var _class, _temp;

	var DecoratedComponent = _ref.DecoratedComponent,
	    createHandler = _ref.createHandler,
	    createMonitor = _ref.createMonitor,
	    createConnector = _ref.createConnector,
	    registerHandler = _ref.registerHandler,
	    containerDisplayName = _ref.containerDisplayName,
	    getType = _ref.getType,
	    collect = _ref.collect,
	    options = _ref.options;
	var _options$arePropsEqua = options.arePropsEqual,
	    arePropsEqual = _options$arePropsEqua === undefined ? _shallowEqualScalar2.default : _options$arePropsEqua;

	var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

	var DragDropContainer = (_temp = _class = function (_Component) {
		_inherits(DragDropContainer, _Component);

		_createClass(DragDropContainer, [{
			key: 'getHandlerId',
			value: function getHandlerId() {
				return this.handlerId;
			}
		}, {
			key: 'getDecoratedComponentInstance',
			value: function getDecoratedComponentInstance() {
				return this.decoratedComponentInstance;
			}
		}, {
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps, nextState) {
				return !arePropsEqual(nextProps, this.props) || !(0, _shallowEqual2.default)(nextState, this.state);
			}
		}]);

		function DragDropContainer(props, context) {
			_classCallCheck(this, DragDropContainer);

			var _this = _possibleConstructorReturn(this, (DragDropContainer.__proto__ || Object.getPrototypeOf(DragDropContainer)).call(this, props, context));

			_this.handleChange = _this.handleChange.bind(_this);
			_this.handleChildRef = _this.handleChildRef.bind(_this);

			(0, _invariant2.default)(_typeof(_this.context.dragDropManager) === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

			_this.manager = _this.context.dragDropManager;
			_this.handlerMonitor = createMonitor(_this.manager);
			_this.handlerConnector = createConnector(_this.manager.getBackend());
			_this.handler = createHandler(_this.handlerMonitor);

			_this.disposable = new _disposables.SerialDisposable();
			_this.receiveProps(props);
			_this.state = _this.getCurrentState();
			_this.dispose();
			return _this;
		}

		_createClass(DragDropContainer, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.isCurrentlyMounted = true;
				this.disposable = new _disposables.SerialDisposable();
				this.currentType = null;
				this.receiveProps(this.props);
				this.handleChange();
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				if (!arePropsEqual(nextProps, this.props)) {
					this.receiveProps(nextProps);
					this.handleChange();
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this.dispose();
				this.isCurrentlyMounted = false;
			}
		}, {
			key: 'receiveProps',
			value: function receiveProps(props) {
				this.handler.receiveProps(props);
				this.receiveType(getType(props));
			}
		}, {
			key: 'receiveType',
			value: function receiveType(type) {
				if (type === this.currentType) {
					return;
				}

				this.currentType = type;

				var _registerHandler = registerHandler(type, this.handler, this.manager),
				    handlerId = _registerHandler.handlerId,
				    unregister = _registerHandler.unregister;

				this.handlerId = handlerId;
				this.handlerMonitor.receiveHandlerId(handlerId);
				this.handlerConnector.receiveHandlerId(handlerId);

				var globalMonitor = this.manager.getMonitor();
				var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, { handlerIds: [handlerId] });

				this.disposable.setDisposable(new _disposables.CompositeDisposable(new _disposables.Disposable(unsubscribe), new _disposables.Disposable(unregister)));
			}
		}, {
			key: 'handleChange',
			value: function handleChange() {
				if (!this.isCurrentlyMounted) {
					return;
				}

				var nextState = this.getCurrentState();
				if (!(0, _shallowEqual2.default)(nextState, this.state)) {
					this.setState(nextState);
				}
			}
		}, {
			key: 'dispose',
			value: function dispose() {
				this.disposable.dispose();
				this.handlerConnector.receiveHandlerId(null);
			}
		}, {
			key: 'handleChildRef',
			value: function handleChildRef(component) {
				this.decoratedComponentInstance = component;
				this.handler.receiveComponent(component);
			}
		}, {
			key: 'getCurrentState',
			value: function getCurrentState() {
				var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor);

				if (false) {}

				return nextState;
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, this.state, {
					ref: isClassComponent(DecoratedComponent) ? this.handleChildRef : null
				}));
			}
		}]);

		return DragDropContainer;
	}(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = containerDisplayName + '(' + displayName + ')', _class.contextTypes = {
		dragDropManager: _propTypes2.default.object.isRequired
	}, _temp);


	return (0, _hoistNonReactStatics2.default)(DragDropContainer, DecoratedComponent);
}

/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = wrapConnectorHooks;

var _react = __webpack_require__(0);

var _cloneWithRef = __webpack_require__(1842);

var _cloneWithRef2 = _interopRequireDefault(_cloneWithRef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function throwIfCompositeComponentElement(element) {
	// Custom components can no longer be wrapped directly in React DnD 2.0
	// so that we don't need to depend on findDOMNode() from react-dom.
	if (typeof element.type === 'string') {
		return;
	}

	var displayName = element.type.displayName || element.type.name || 'the component';

	throw new Error('Only native element nodes can now be passed to React DnD connectors.' + ('You can either wrap ' + displayName + ' into a <div>, or turn it into a ') + 'drag source or a drop target itself.');
}

function wrapHookToRecognizeElement(hook) {
	return function () {
		var elementOrNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		// When passed a node, call the hook straight away.
		if (!(0, _react.isValidElement)(elementOrNode)) {
			var node = elementOrNode;
			hook(node, options);
			return undefined;
		}

		// If passed a ReactElement, clone it and attach this function as a ref.
		// This helps us achieve a neat API where user doesn't even know that refs
		// are being used under the hood.
		var element = elementOrNode;
		throwIfCompositeComponentElement(element);

		// When no options are passed, use the hook directly
		var ref = options ? function (node) {
			return hook(node, options);
		} : hook;

		return (0, _cloneWithRef2.default)(element, ref);
	};
}

function wrapConnectorHooks(hooks) {
	var wrappedHooks = {};

	Object.keys(hooks).forEach(function (key) {
		var hook = hooks[key];
		var wrappedHook = wrapHookToRecognizeElement(hook);
		wrappedHooks[key] = function () {
			return wrappedHook;
		};
	});

	return wrappedHooks;
}

/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = areOptionsEqual;

var _shallowEqual = __webpack_require__(739);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function areOptionsEqual(nextOptions, currentOptions) {
	if (currentOptions === nextOptions) {
		return true;
	}

	return currentOptions !== null && nextOptions !== null && (0, _shallowEqual2.default)(currentOptions, nextOptions);
}

/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isValidType;

var _isArray = __webpack_require__(78);

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValidType(type, allowArray) {
	return typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol' || allowArray && (0, _isArray2.default)(type) && type.every(function (t) {
		return isValidType(t, false);
	});
}

/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSafari = exports.isFirefox = undefined;

var _memoize = __webpack_require__(667);

var _memoize2 = _interopRequireDefault(_memoize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFirefox = exports.isFirefox = (0, _memoize2.default)(function () {
  return (/firefox/i.test(navigator.userAgent)
  );
});
var isSafari = exports.isSafari = (0, _memoize2.default)(function () {
  return Boolean(window.safari);
});

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(64);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 94:
/***/ (function(module, exports) {

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

module.exports = isObjectLike;


/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getEmptyImage = exports.NativeTypes = undefined;
exports.default = createHTML5Backend;

var _HTML5Backend = __webpack_require__(1848);

var _HTML5Backend2 = _interopRequireDefault(_HTML5Backend);

var _getEmptyImage = __webpack_require__(1868);

var _getEmptyImage2 = _interopRequireDefault(_getEmptyImage);

var _NativeTypes = __webpack_require__(741);

var NativeTypes = _interopRequireWildcard(_NativeTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.NativeTypes = NativeTypes;
exports.getEmptyImage = _getEmptyImage2.default;
function createHTML5Backend(manager) {
	return new _HTML5Backend2.default(manager);
}

/***/ })

/******/ });
});