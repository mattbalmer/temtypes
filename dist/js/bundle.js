/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/@lib/utils/react.ts":
/*!*********************************!*\
  !*** ./lib/@lib/utils/react.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function containerize(component, mapStateToProps, mapDispatchToProps) {
    return react_redux_1.connect(mapStateToProps || (() => ({})), mapDispatchToProps || (() => ({})))(component);
}
exports.containerize = containerize;


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
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

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
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
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
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

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
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
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

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

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/prop-types/node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/prop-types/node_modules/object-assign/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/object-assign/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/*! exports provided: createProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return createProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/PropTypes */ "./node_modules/react-redux/es/utils/PropTypes.js");
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");





var prefixUnsafeLifecycleMethods = typeof react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef !== "undefined";
var didWarnAboutReceivingStore = false;

function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }

  didWarnAboutReceivingStore = true;
  Object(_utils_warning__WEBPACK_IMPORTED_MODULE_4__["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reduxjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider(storeKey) {
  var _Provider$childContex;

  if (storeKey === void 0) {
    storeKey = 'store';
  }

  var subscriptionKey = storeKey + "Subscription";

  var Provider =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Provider, _Component);

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      var _this;

      _this = _Component.call(this, props, context) || this;
      _this[storeKey] = props.store;
      return _this;
    }

    _proto.render = function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children);
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

  if (true) {
    // Use UNSAFE_ event name where supported
    var eventName = prefixUnsafeLifecycleMethods ? 'UNSAFE_componentWillReceiveProps' : 'componentWillReceiveProps';

    Provider.prototype[eventName] = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_3__["storeShape"].isRequired,
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_3__["storeShape"].isRequired, _Provider$childContex[subscriptionKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_3__["subscriptionShape"], _Provider$childContex);
  return Provider;
}
/* harmony default export */ __webpack_exports__["default"] = (createProvider());

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return connectAdvanced; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/PropTypes */ "./node_modules/react-redux/es/utils/PropTypes.js");










var prefixUnsafeLifecycleMethods = typeof react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef !== "undefined";
var hotReloadingVersion = 0;
var dummyState = {};

function noop() {}

function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);

        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };
  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  var _contextTypes, _childContextTypes;

  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      connectOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;
  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_9__["storeShape"], _contextTypes[subscriptionKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_9__["subscriptionShape"], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_9__["subscriptionShape"], _childContextTypes);
  return function wrapWithConnect(WrappedComponent) {
    invariant__WEBPACK_IMPORTED_MODULE_5___default()(Object(react_is__WEBPACK_IMPORTED_MODULE_7__["isValidElementType"])(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent // TODO Actually fix our use of componentWillReceiveProps

      /* eslint-disable react/no-deprecated */

    });

    var Connect =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Connect, _Component);

      function Connect(props, context) {
        var _this;

        _this = _Component.call(this, props, context) || this;
        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)));
        invariant__WEBPACK_IMPORTED_MODULE_5___default()(_this.store, "Could not find \"" + storeKey + "\" in either the context or props of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + ("or explicitly pass \"" + storeKey + "\" as a prop to \"" + displayName + "\"."));

        _this.initSelector();

        _this.initSubscription();

        return _this;
      }

      var _proto = Connect.prototype;

      _proto.getChildContext = function getChildContext() {
        var _ref3;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref3 = {}, _ref3[subscriptionKey] = subscription || this.context[subscriptionKey], _ref3;
      };

      _proto.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return; // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.

        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      }; // Note: this is renamed below to the UNSAFE_ version in React >=16.3.0


      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      _proto.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      _proto.getWrappedInstance = function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_5___default()(withRef, "To access the wrapped instance, you need to specify " + ("{ withRef: true } in the options argument of the " + methodName + "() call."));
        return this.wrappedInstance;
      };

      _proto.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      _proto.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      _proto.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return; // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_8__["default"](this.store, parentSub, this.onStateChange.bind(this)); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.

        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      _proto.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      _proto.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      _proto.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      _proto.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props; // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad

        var withExtras = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props);

        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      _proto.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(react__WEBPACK_IMPORTED_MODULE_6__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

    if (prefixUnsafeLifecycleMethods) {
      // Use UNSAFE_ event name where supported
      Connect.prototype.UNSAFE_componentWillReceiveProps = Connect.prototype.componentWillReceiveProps;
      delete Connect.prototype.componentWillReceiveProps;
    }
    /* eslint-enable react/no-deprecated */


    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (true) {
      // Use UNSAFE_ event name where supported
      var eventName = prefixUnsafeLifecycleMethods ? 'UNSAFE_componentWillUpdate' : 'componentWillUpdate';

      Connect.prototype[eventName] = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector(); // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.

          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }

          this.initSubscription();

          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/*! exports provided: createConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnect", function() { return createConnect; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/*! exports provided: whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsFunction", function() { return whenMapDispatchToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsMissing", function() { return whenMapDispatchToPropsIsMissing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsObject", function() { return whenMapDispatchToPropsIsObject; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsFunc"])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/*! exports provided: whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsFunction", function() { return whenMapStateToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsMissing", function() { return whenMapStateToPropsIsMissing; });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsFunc"])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsConstant"])(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/*! exports provided: defaultMergeProps, wrapMergePropsFunc, whenMergePropsIsFunction, whenMergePropsIsOmitted, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMergeProps", function() { return defaultMergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMergePropsFunc", function() { return wrapMergePropsFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsFunction", function() { return whenMergePropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsOmitted", function() { return whenMergePropsIsOmitted; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/*! exports provided: impureFinalPropsSelectorFactory, pureFinalPropsSelectorFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impureFinalPropsSelectorFactory", function() { return impureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pureFinalPropsSelectorFactory", function() { return pureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return finalPropsSelectorFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifySubselectors; });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/*! exports provided: wrapMapToPropsConstant, getDependsOnOwnProps, wrapMapToPropsFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsConstant", function() { return wrapMapToPropsConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependsOnOwnProps", function() { return getDependsOnOwnProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsFunc", function() { return wrapMapToPropsFunc; });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, createProvider, connectAdvanced, connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["createProvider"]; });

/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect_connect__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/react-redux/es/utils/PropTypes.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/PropTypes.js ***!
  \********************************************************/
/*! exports provided: subscriptionShape, storeShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscriptionShape", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeShape", function() { return storeShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var subscriptionShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  trySubscribe: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  tryUnsubscribe: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  notifyNestedSubs: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isSubscribed: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});
var storeShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  subscribe: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  getState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subscription; });
// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants
var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];
  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;

      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);
      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;
        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub, onStateChange) {
    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowEqual; });
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifyPlainObject; });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    Object(_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):undefined}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

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

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

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
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

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
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

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
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
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
    if (!isPlainObject(action)) {
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

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
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
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
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

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
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

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
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

/***/ "./source/js/actions/ReduxActions.ts":
/*!*******************************************!*\
  !*** ./source/js/actions/ReduxActions.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PREFIX = `@Redux`;
exports.ReduxActionTypes = {
    ON_NEXT: `${exports.PREFIX}:ON_NEXT`,
};
exports.ReduxActions = {
    onNext: (triggerType, callback) => ({
        type: exports.ReduxActionTypes.ON_NEXT,
        triggerType,
        callback,
    }),
};


/***/ }),

/***/ "./source/js/components/AppComponent.tsx":
/*!***********************************************!*\
  !*** ./source/js/components/AppComponent.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! @lib/utils/react */ "./lib/@lib/utils/react.ts");
const TypeChartComponent_1 = __webpack_require__(/*! @client/components/display/TypeChartComponent */ "./source/js/components/display/TypeChartComponent.tsx");
const TemtemTypeaheadComponent_1 = __webpack_require__(/*! @client/components/display/TemtemTypeaheadComponent */ "./source/js/components/display/TemtemTypeaheadComponent.tsx");
exports.AppComponent = react_1.containerize(class extends React.Component {
    constructor(props) {
        super(props);
        this.onSelectTemtem = (selectedTemtem) => {
            this.setState({
                selectedTemtem,
            });
        };
        this.onReset = () => {
            this.setState({
                selectedTemtem: null,
            });
        };
        this.onUnfocusedKeyDown = (e) => {
            if (e.key === 'Backspace' && document.activeElement.tagName !== 'INPUT') {
                e.preventDefault();
                e.stopImmediatePropagation();
                this.onReset();
            }
        };
        this.state = {
            selectedTemtem: null,
        };
    }
    render() {
        const { selectedTemtem } = this.state;
        return (React.createElement(React.Fragment, null,
            React.createElement(TemtemTypeaheadComponent_1.TemtemTypeaheadComponent, { onTemtemSelect: this.onSelectTemtem }),
            React.createElement(TypeChartComponent_1.TypeChartComponent, { allowUserSelection: true, types: selectedTemtem ? selectedTemtem.types : [], onReset: this.onReset })));
    }
    componentDidMount() {
        window.addEventListener('keydown', this.onUnfocusedKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.onUnfocusedKeyDown);
    }
});


/***/ }),

/***/ "./source/js/components/display/TemtemDisplayPlateComponent.tsx":
/*!**********************************************************************!*\
  !*** ./source/js/components/display/TemtemDisplayPlateComponent.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames_1 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
exports.TemtemDisplayPlateComponent = ({ temtem, onClick, selected }) => {
    return React.createElement("div", { className: classnames_1.default({
            "temtem-display-plate": true,
            "temtem-display-plate--is-selected": selected,
        }), onClick: onClick ? () => onClick(temtem) : () => { } },
        React.createElement("div", { className: "temtem-display-plate__portrait-wrapper" },
            React.createElement("img", { className: "temtem-display-plate__portrait", src: temtem.portraitWikiUrl })),
        React.createElement("div", { className: "temtem-display-plate__info" },
            React.createElement("div", { className: "temtem-display-plate__name" }, temtem.name),
            React.createElement("div", { className: "temtem-display-plate__types" }, temtem.types.map(type => React.createElement("span", { key: type, className: `temtem-display-plate__type u-type-badge--${type.toLowerCase()}` }, type)))));
};


/***/ }),

/***/ "./source/js/components/display/TemtemTypeaheadComponent.tsx":
/*!*******************************************************************!*\
  !*** ./source/js/components/display/TemtemTypeaheadComponent.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const temtems_1 = __webpack_require__(/*! @client/data/temtems */ "./source/js/data/temtems.ts");
const TemtemDisplayPlateComponent_1 = __webpack_require__(/*! @client/components/display/TemtemDisplayPlateComponent */ "./source/js/components/display/TemtemDisplayPlateComponent.tsx");
const returnValidTemtems = (temtems, query) => {
    if (!query) {
        return [];
    }
    query = query.toUpperCase();
    return temtems
        .filter(temtem => temtem.name.toUpperCase().includes(query) || temtem.types.some(type => type.includes(query)));
};
class TemtemTypeaheadComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = (e) => {
            e.preventDefault();
        };
        this.onSelect = (temtem) => {
            this.props.onTemtemSelect(temtem);
            this.setState({
                query: '',
                suggestions: returnValidTemtems(temtems_1.default, ''),
                selection: -1,
            });
        };
        this.onInputChange = (e) => {
            const query = e.target.value;
            this.setState({
                query,
                suggestions: returnValidTemtems(temtems_1.default, query),
            });
        };
        this.onFocusedKeyDown = (e) => {
            if (e.key === 'Escape') {
                this.setState({
                    query: '',
                    selection: -1,
                    suggestions: returnValidTemtems(temtems_1.default, ''),
                });
                this.inputRef.current.blur();
            }
            if (e.key === 'ArrowUp') {
                this.setState({
                    selection: Math.max(-1, this.state.selection - 1),
                });
            }
            if (e.key === 'ArrowDown') {
                this.setState({
                    selection: Math.min(this.state.suggestions.length - 1, this.state.selection + 1),
                });
            }
            if (e.key === 'Enter' && this.state.selection > -1) {
                this.onSelect(this.state.suggestions[this.state.selection]);
            }
        };
        this.onUnfocusedKeyDown = (e) => {
            if (e.key === 'Enter') {
                this.inputRef.current.focus();
            }
            if (e.key === 'Escape') {
                this.setState({
                    query: '',
                    selection: -1,
                    suggestions: returnValidTemtems(temtems_1.default, ''),
                });
            }
        };
        this.onFocus = () => {
            window.addEventListener('keydown', this.onFocusedKeyDown);
            window.removeEventListener('keydown', this.onUnfocusedKeyDown);
        };
        this.onBlur = () => {
            window.removeEventListener('keydown', this.onFocusedKeyDown);
            window.addEventListener('keydown', this.onUnfocusedKeyDown);
        };
        this.state = {
            query: '',
            selection: -1,
            suggestions: [],
        };
    }
    componentDidMount() {
        window.addEventListener('keydown', this.onUnfocusedKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.onUnfocusedKeyDown);
    }
    render() {
        this.inputRef = React.createRef();
        const { query, selection } = this.state;
        const suggestions = returnValidTemtems(temtems_1.default, query);
        console.log('render', query, selection);
        return (React.createElement("div", { className: "typeahead" },
            React.createElement("form", { onSubmit: this.onSubmit },
                React.createElement("div", { className: "typeahead__input-wrapper" },
                    React.createElement("input", { type: "text", onChange: this.onInputChange, value: query, ref: this.inputRef, onFocus: this.onFocus, onBlur: this.onBlur }),
                    query ?
                        React.createElement("div", { className: "typeahead__suggestions" },
                            suggestions.slice(0, 5).map((temtem, i) => React.createElement(TemtemDisplayPlateComponent_1.TemtemDisplayPlateComponent, { key: temtem.number, temtem: temtem, onClick: this.onSelect, selected: i === selection })),
                            suggestions.length === 0 ? React.createElement("span", null, "No temtem found") : null,
                            suggestions.length > 5 ? React.createElement("span", null,
                                "+ ",
                                suggestions.length - 5,
                                " more!") : null)
                        : null))));
    }
}
exports.TemtemTypeaheadComponent = TemtemTypeaheadComponent;


/***/ }),

/***/ "./source/js/components/display/TypeChartComponent.tsx":
/*!*************************************************************!*\
  !*** ./source/js/components/display/TypeChartComponent.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames_1 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
const ResetIcon_1 = __webpack_require__(/*! @client/components/icons/ResetIcon */ "./source/js/components/icons/ResetIcon.tsx");
var TYPE;
(function (TYPE) {
    TYPE["NORMAL"] = "NORMAL";
    TYPE["FIRE"] = "FIRE";
    TYPE["WATER"] = "WATER";
    TYPE["NATURE"] = "NATURE";
    TYPE["ELECTRIC"] = "ELECTRIC";
    TYPE["EARTH"] = "EARTH";
    TYPE["MENTAL"] = "MENTAL";
    TYPE["WIND"] = "WIND";
    TYPE["DIGITAL"] = "DIGITAL";
    TYPE["MELEE"] = "MELEE";
    TYPE["CRYSTAL"] = "CRYSTAL";
    TYPE["TOXIC"] = "TOXIC";
})(TYPE || (TYPE = {}));
const TYPTE_LIST = [
    'NORMAL',
    'FIRE',
    'WATER',
    'NATURE',
    'ELECTRIC',
    'EARTH',
    'MENTAL',
    'WIND',
    'DIGITAL',
    'MELEE',
    'CRYSTAL',
    'TOXIC',
];
const EFFECTIVENESS = {
    [TYPE.NORMAL]: {
        [TYPE.MENTAL]: 0.5,
    },
    [TYPE.FIRE]: {
        [TYPE.FIRE]: 0.5,
        [TYPE.WATER]: 0.5,
        [TYPE.NATURE]: 2,
        [TYPE.EARTH]: 0.5,
        [TYPE.CRYSTAL]: 2,
    },
    [TYPE.WATER]: {
        [TYPE.FIRE]: 2,
        [TYPE.WATER]: .5,
        [TYPE.NATURE]: .5,
        [TYPE.EARTH]: 2,
        [TYPE.DIGITAL]: 2,
        [TYPE.TOXIC]: .5,
    },
    [TYPE.NATURE]: {
        [TYPE.FIRE]: .5,
        [TYPE.WATER]: 2,
        [TYPE.NATURE]: .5,
        [TYPE.EARTH]: 2,
        [TYPE.TOXIC]: .5,
    },
    [TYPE.ELECTRIC]: {
        [TYPE.WATER]: 2,
        [TYPE.NATURE]: .5,
        [TYPE.ELECTRIC]: .5,
        [TYPE.EARTH]: .5,
        [TYPE.MENTAL]: 2,
        [TYPE.WIND]: 2,
        [TYPE.DIGITAL]: 2,
        [TYPE.CRYSTAL]: .5,
    },
    [TYPE.EARTH]: {
        [TYPE.FIRE]: 2,
        [TYPE.ELECTRIC]: 2,
        [TYPE.CRYSTAL]: 2,
        [TYPE.WATER]: .5,
        [TYPE.NATURE]: .5,
        [TYPE.WIND]: .5,
    },
    [TYPE.MENTAL]: {
        [TYPE.NORMAL]: 2,
        [TYPE.MELEE]: 2,
        [TYPE.CRYSTAL]: .5,
    },
    [TYPE.WIND]: {
        [TYPE.EARTH]: 2,
        [TYPE.TOXIC]: 2,
        [TYPE.ELECTRIC]: .5,
        [TYPE.WIND]: .5,
    },
    [TYPE.DIGITAL]: {
        [TYPE.MENTAL]: 2,
        [TYPE.DIGITAL]: 2,
        [TYPE.MELEE]: 2,
    },
    [TYPE.MELEE]: {
        [TYPE.EARTH]: 2,
        [TYPE.CRYSTAL]: 2,
        [TYPE.MENTAL]: .5,
        [TYPE.MELEE]: .5,
    },
    [TYPE.CRYSTAL]: {
        [TYPE.MENTAL]: 2,
        [TYPE.ELECTRIC]: 2,
        [TYPE.FIRE]: .5,
        [TYPE.EARTH]: .5,
    },
    [TYPE.TOXIC]: {
        [TYPE.WATER]: 2,
        [TYPE.NATURE]: 2,
        [TYPE.EARTH]: .5,
        [TYPE.DIGITAL]: .5,
        [TYPE.CRYSTAL]: .5,
        [TYPE.TOXIC]: .5,
    },
};
const TypeChartRow = ({ type, selectedTypes }) => {
    const finalEffectiveness = selectedTypes.reduce((effectiveness, selectedType) => {
        return effectiveness * (EFFECTIVENESS[type][selectedType] || 1);
    }, 1);
    return React.createElement("div", { className: "typechart__row" },
        React.createElement("span", { className: classnames_1.default({
                'typechart__heading-cell': true,
                [`u-type-bgicon--${type.toLowerCase()}`]: true,
                'typechart__heading-cell--dimmed': (selectedTypes.length > 0 && (finalEffectiveness === 1))
            }) }, finalEffectiveness !== 1 && false ? React.createElement("span", { className: classnames_1.default({
                'typechart__badge': true,
                'typechart__badge--super-effective': finalEffectiveness > 1,
                'typechart__badge--not-very-effective': finalEffectiveness < 1,
            }) },
            finalEffectiveness,
            "x") : null),
        TYPTE_LIST.map(opposingType => {
            const effectiveness = EFFECTIVENESS[type] && EFFECTIVENESS[type][opposingType] ? EFFECTIVENESS[type][opposingType] : 1;
            const dimmed = selectedTypes.length > 0 && (!selectedTypes.includes(opposingType));
            return React.createElement("span", { className: classnames_1.default({
                    typechart__cell: true,
                    'typechart__cell--super-effective': effectiveness === 2,
                    'typechart__cell--not-very-effective': effectiveness === 0.5,
                    'typechart__cell--extra-super-effective': effectiveness === 4,
                    'typechart__cell--extra-not-very-effective': effectiveness === 0.25,
                    'typechart__cell--dimmed': dimmed,
                }), key: opposingType, "data-row-type": type, "data-col-type": opposingType },
                effectiveness,
                "x");
        }),
        React.createElement("div", { className: classnames_1.default({
                'typechart__joint-cell': true,
                'typechart__heading-cell--dimmed': selectedTypes.length === 0
            }) },
            React.createElement("span", { className: classnames_1.default({
                    'typechart__heading-cell': true,
                    [`u-type-bgicon--${type.toLowerCase()}`]: true,
                    'typechart__heading-cell--dimmed': (selectedTypes.length > 0 && (finalEffectiveness === 1))
                }) }, finalEffectiveness !== 1 && false ? React.createElement("span", { className: classnames_1.default({
                    'typechart__badge': true,
                    'typechart__badge--super-effective': finalEffectiveness > 1,
                    'typechart__badge--not-very-effective': finalEffectiveness < 1,
                }) },
                finalEffectiveness,
                "x") : null),
            React.createElement("span", { className: classnames_1.default({
                    'typechart__cell': true,
                    'typechart__cell--super-effective': finalEffectiveness === 2,
                    'typechart__cell--not-very-effective': finalEffectiveness === .5,
                    'typechart__cell--extra-super-effective': finalEffectiveness === 4,
                    'typechart__cell--extra-not-very-effective': finalEffectiveness === 0.25,
                }) }, selectedTypes.length > 0
                ? `${finalEffectiveness}x`
                : null)));
};
exports.TypeChartComponent = ({ allowUserSelection, types, onReset }) => {
    const [selectedTypes, setSelectedTypes] = (allowUserSelection !== undefined ? (allowUserSelection) : true)
        ? React.useState(types)
        : [types, (...args) => { }];
    React.useEffect(() => {
        setSelectedTypes(types);
    }, [types]);
    return React.createElement("div", { className: "typechart-container" },
        React.createElement("span", { className: "typechart__horizontal-label" }, "Defending Type"),
        React.createElement("div", { className: "typechart__horizontal-row-container" },
            React.createElement("span", { className: "typechart__vertical-label" }, "Attacking Type"),
            React.createElement("div", { className: classnames_1.default({
                    typechart: true,
                    'typechart--has-selected-types': selectedTypes.length > 0,
                }) },
                React.createElement("div", { className: "typechart__row" },
                    React.createElement("span", { className: "typechart__empty-cell" },
                        React.createElement("div", { style: { cursor: selectedTypes.length > 0 ? 'pointer' : 'auto' }, onClick: onReset },
                            React.createElement(ResetIcon_1.ResetIcon, { size: 36, color: selectedTypes.length > 0 ? '#ccc' : '#444' }))),
                    TYPTE_LIST.map(type => React.createElement("span", { key: type, className: classnames_1.default({
                            'typechart__heading-cell': true,
                            [`u-type-bgicon--${type.toLowerCase()}`]: true,
                        }), onClick: () => {
                            if (selectedTypes.includes(type)) {
                                setSelectedTypes(selectedTypes.filter(_ => _ !== type));
                            }
                            else if (selectedTypes.length < 2) {
                                setSelectedTypes([...selectedTypes, type]);
                            }
                        } })),
                    React.createElement("div", { className: 'typechart__joint-cell' },
                        React.createElement("span", { className: "typechart__empty-cell" }),
                        React.createElement("span", { className: "typechart__empty-cell" }))),
                React.createElement("div", null, TYPTE_LIST.map(type => React.createElement(TypeChartRow, { key: type, type: type, selectedTypes: selectedTypes }))))));
};


/***/ }),

/***/ "./source/js/components/icons/ResetIcon.tsx":
/*!**************************************************!*\
  !*** ./source/js/components/icons/ResetIcon.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.ResetIcon = ({ size, color }) => React.createElement("svg", { className: 'icon icon-reset', version: "1.1", viewBox: "0 0 512 512", width: `${size}px`, height: `${size}px` },
    React.createElement("g", { id: "Layer_1" }),
    React.createElement("g", { id: "Layer_2" },
        React.createElement("g", null,
            React.createElement("path", { style: { fill: color }, d: "M274.91,47.78c-97.6,0-179.71,67.5-202.15,158.26L58.79,181.4c-4.36-7.69-14.12-10.39-21.81-6.03    c-7.69,4.36-10.39,14.12-6.03,21.81l37.66,66.44c0,0,0,0.01,0.01,0.01l0.15,0.26c0.19,0.34,0.39,0.66,0.6,0.98    c0.01,0.01,0.02,0.03,0.03,0.04c0.04,0.07,0.09,0.13,0.14,0.19c0.23,0.33,0.46,0.64,0.71,0.95c0.04,0.05,0.07,0.1,0.11,0.15    c0,0,0,0.01,0.01,0.01c0.02,0.02,0.04,0.04,0.06,0.07c0.36,0.44,0.75,0.85,1.15,1.24c0.04,0.04,0.07,0.07,0.11,0.1    c0.25,0.23,0.5,0.46,0.76,0.67c0.05,0.04,0.1,0.08,0.15,0.12c0.35,0.28,0.71,0.55,1.08,0.81c0.03,0.02,0.06,0.04,0.09,0.06    c0.17,0.11,0.35,0.22,0.52,0.33c0.09,0.06,0.18,0.11,0.28,0.17c0.12,0.07,0.25,0.14,0.38,0.21c0.11,0.06,0.22,0.12,0.33,0.17    c0.2,0.1,0.39,0.2,0.59,0.3c0.11,0.05,0.22,0.1,0.33,0.15c0,0,0.01,0,0.01,0.01c0.12,0.05,0.24,0.11,0.36,0.16    c0.33,0.14,0.66,0.26,1,0.37c0.04,0.02,0.09,0.03,0.13,0.04c0.02,0.01,0.03,0.01,0.05,0.02c0.15,0.05,0.31,0.09,0.47,0.14    c0.29,0.09,0.59,0.16,0.89,0.23c0.08,0.02,0.15,0.04,0.23,0.06c0.07,0.02,0.14,0.03,0.22,0.05c0.44,0.09,0.89,0.15,1.33,0.2    c0.04,0,0.07,0.01,0.11,0.02c0.08,0.01,0.15,0.01,0.23,0.02c0.49,0.05,0.98,0.08,1.48,0.08c0.42,0,0.84-0.02,1.26-0.06    c0.07-0.01,0.14-0.01,0.21-0.02c0.01,0,0.03,0,0.04,0c0.06-0.01,0.12-0.01,0.19-0.02c0.28-0.03,0.55-0.07,0.83-0.11    c0.08-0.01,0.16-0.02,0.24-0.04c0.13-0.02,0.25-0.04,0.38-0.07c0.06-0.01,0.12-0.03,0.19-0.04c0.4-0.09,0.81-0.19,1.21-0.31    c0.1-0.03,0.2-0.06,0.3-0.09c0.11-0.03,0.21-0.07,0.32-0.11c0.14-0.05,0.28-0.1,0.42-0.15c0.17-0.06,0.33-0.12,0.5-0.19    c0.1-0.04,0.2-0.09,0.3-0.13c0.13-0.06,0.26-0.12,0.39-0.18c0.19-0.09,0.37-0.19,0.56-0.28c0.13-0.07,0.25-0.13,0.38-0.2    c0.28-0.15,0.55-0.33,0.82-0.5c0.15-0.09,0.3-0.18,0.45-0.28c0.06-0.04,0.11-0.08,0.17-0.12c0.17-0.12,0.34-0.25,0.5-0.38    c0.06-0.04,0.12-0.09,0.18-0.13c0.11-0.09,0.23-0.17,0.34-0.26c0,0,0.01-0.01,0.01-0.01l59.04-48.93    c6.8-5.64,7.75-15.72,2.11-22.53c-5.64-6.8-15.73-7.75-22.53-2.11l-28.84,23.9c17.18-79.28,87.87-138.87,172.22-138.87    c97.17,0,176.22,79.05,176.22,176.22s-79.05,176.22-176.22,176.22c-8.84,0-16,7.16-16,16s7.16,16,16,16    c114.81,0,208.22-93.41,208.22-208.22S389.72,47.78,274.91,47.78z" }),
            React.createElement("path", { style: { fill: color }, d: "M274.91,147.61c-8.84,0-16,7.16-16,16V256c0,8.84,7.16,16,16,16h75.87c8.84,0,16-7.16,16-16s-7.16-16-16-16    h-59.87v-76.39C290.91,154.77,283.74,147.61,274.91,147.61z" }))));


/***/ }),

/***/ "./source/js/data/temtems-raw.ts":
/*!***************************************!*\
  !*** ./source/js/data/temtems-raw.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [{ "number": 2, "name": "Oree", "types": ["Digital"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/9/99/Oree.png/50px-Oree.png", "wikiUrl": "https://temtem.gamepedia.com/Oree", "stats": { "hp": 61, "sta": 74, "spd": 35, "atk": 65, "def": 44, "spatk": 32, "spdef": 31, "total": 342 }, "traits": ["Attack T"], "details": { "height": { "cm": 128, "inches": 50 }, "weight": { "kg": 43, "lbs": 94 } }, "techniques": [{ "name": "Data Burst", "source": "Levelling" }, { "name": "Mechanical Heat", "source": "Levelling" }, { "name": "Overclock", "source": "Levelling" }, { "name": "Cold Breeze", "source": "Levelling" }, { "name": "Tesla Prison", "source": "Levelling" }, { "name": "Heat Up", "source": "Levelling" }, { "name": "Turbo attack", "source": "Levelling" }], "trivia": ["Oree is the starter Temtem for the player’s rival, Max.", "Oree is the first Digital Temtem to appear in the game.", "Oree’s name is derived from orejas (ear in Spanish) and electronic."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 2, "name": "Oree", "stage": 1, "levels": 0 }, { "number": 3, "name": "Zaobian", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/9/99/Oree.png/250px-Oree.png?version=be49bf47c5dd84fff22f85d8154c3ffc", "locations": [{ "location": "?", "island": "Cipanku", "frequency": "?", "level": "?" }], "icon": "/images/portraits/temtem/large/Oree.png" }, { "number": 3, "name": "Zaobian", "types": ["Digital"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/54/Zaobian.png/50px-Zaobian.png", "wikiUrl": "https://temtem.gamepedia.com/Zaobian", "stats": { "hp": 75, "sta": 90, "spd": 51, "atk": 84, "def": 50, "spatk": 42, "spdef": 44, "total": 436 }, "traits": ["Attack T"], "details": { "height": { "cm": 213, "inches": 83 }, "weight": { "kg": 93, "lbs": 205 } }, "techniques": [{ "name": "Firewall", "source": "Levelling" }], "trivia": ["Zaobian's name is derived from zhào (megabyte in Chinese) and túbiàn (mutation in Chinese)."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 2, "name": "Oree", "stage": 1, "levels": 0 }, { "number": 3, "name": "Zaobian", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/54/Zaobian.png/250px-Zaobian.png?version=cc9cfb9398169a6ca15b2b0a5ecb3a78", "locations": [], "icon": "/images/portraits/temtem/large/Zaobian.png" }, { "number": 7, "name": "Platypet", "types": ["Water", "Toxic"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/0/03/Platypet.png/50px-Platypet.png", "wikiUrl": "https://temtem.gamepedia.com/Platypet", "stats": { "hp": 55, "sta": 39, "spd": 65, "atk": 45, "def": 31, "spatk": 67, "spdef": 56, "total": 358 }, "traits": ["Toxic Affinity", "Amphibian"], "details": { "height": { "cm": 85, "inches": 33 }, "weight": { "kg": 48, "lbs": 105 } }, "techniques": [{ "name": "Finbeat", "source": "Levelling" }, { "name": "Water Blade", "source": "Levelling" }, { "name": "Venomous Claws", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Cheer Up", "source": "Levelling" }, { "name": "Aqua Bullet Hell", "source": "Levelling" }, { "name": "Tsunami", "source": "Levelling" }, { "name": "Urushiol", "source": "Breeding" }, { "name": "Antitoxins", "source": "Breeding" }, { "name": "Sharp Rain", "source": "Breeding" }, { "name": "Flood", "source": "Breeding" }, { "name": "Intimidation", "source": "Breeding" }, { "name": "Shrill Voice", "source": "Breeding" }], "trivia": ["Platypet was known as Pettans in early development.", "Platypet was drawn by 50 Shades of Heliolisk, Crema bought the rights to the art.", "Platypet’s name is derived from platypus and pet."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 7, "name": "Platypet", "stage": 1, "levels": 20 }, { "number": 8, "name": "Platox", "stage": 2, "levels": 20 }, { "number": 9, "name": "Platimous", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/0/03/Platypet.png/250px-Platypet.png?version=c67001e7b2c9bc9d51c99a3ada63901b", "locations": [{ "location": "Corrupted Badlands", "island": "Tucma", "frequency": "Rare (30%)", "level": "24-28" }, { "location": "Xolot Reservoir", "island": "Tucma", "frequency": "Uncommon (50%-70%)", "level": "28-32" }, { "location": "Mines of Mictlan", "island": "Tucma", "frequency": "Common", "level": "31-35" }], "icon": "/images/portraits/temtem/large/Platypet.png" }, { "number": 8, "name": "Platox", "types": ["Water", "Toxic"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/7b/Platox.png/50px-Platox.png", "wikiUrl": "https://temtem.gamepedia.com/Platox", "stats": { "hp": 62, "sta": 44, "spd": 74, "atk": 50, "def": 35, "spatk": 76, "spdef": 63, "total": 404 }, "traits": ["Resistant", "Resilient"], "details": { "height": { "cm": 140, "inches": 55 }, "weight": { "kg": 70, "lbs": 154 } }, "techniques": [{ "name": "Finbeat", "source": "Levelling" }, { "name": "Water Blade", "source": "Levelling" }, { "name": "Venomous Claws", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Cheer Up", "source": "Levelling" }, { "name": "Aqua Bullet Hell", "source": "Levelling" }, { "name": "Tsunami", "source": "Levelling" }, { "name": "Toxic Fang", "source": "Levelling" }, { "name": "Paralysing Poison", "source": "Levelling" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }, { "name": "Rend", "source": "TechniqueCourses" }, { "name": "Footwork", "source": "TechniqueCourses" }, { "name": "Held Anger", "source": "TechniqueCourses" }, { "name": "Major Slash", "source": "TechniqueCourses" }, { "name": "Urushiol", "source": "Breeding" }, { "name": "Antitoxins", "source": "Breeding" }, { "name": "Sharp Rain", "source": "Breeding" }, { "name": "Flood", "source": "Breeding" }, { "name": "Intimidation", "source": "Breeding" }, { "name": "Shrill Voice", "source": "Breeding" }], "trivia": ["Platox was drawn by 50 Shades of Heliolisk, Crema bought the rights to the art.", "The artist of Platox tweeting about his design being bought for use.", "Platox' name is derived from platypus and toxic."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 7, "name": "Platypet", "stage": 1, "levels": 20 }, { "number": 8, "name": "Platox", "stage": 2, "levels": 20 }, { "number": 9, "name": "Platimous", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/7b/Platox.png/250px-Platox.png?version=1a591b367bd135a041bff34d1b90c89c", "locations": [], "icon": "/images/portraits/temtem/large/Platox.png" }, { "number": 9, "name": "Platimous", "types": ["Water", "Toxic"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/7f/Platimous.png/50px-Platimous.png", "wikiUrl": "https://temtem.gamepedia.com/Platimous", "stats": { "hp": 71, "sta": 49, "spd": 82, "atk": 56, "def": 39, "spatk": 90, "spdef": 70, "total": 457 }, "traits": ["Zen", "Determined"], "details": { "height": { "cm": 190, "inches": 74 }, "weight": { "kg": 107, "lbs": 235 } }, "techniques": [{ "name": "Finbeat", "source": "Levelling" }, { "name": "Water Blade", "source": "Levelling" }, { "name": "Venomous Claws", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Cheer Up", "source": "Levelling" }, { "name": "Aqua Bullet Hell", "source": "Levelling" }, { "name": "Tsunami", "source": "Levelling" }, { "name": "Toxic Fang", "source": "Levelling" }, { "name": "Paralysing Poison", "source": "Levelling" }, { "name": "Aquatic Whirlwind", "source": "Levelling" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }, { "name": "Rend", "source": "TechniqueCourses" }, { "name": "Footwork", "source": "TechniqueCourses" }, { "name": "Held Anger", "source": "TechniqueCourses" }, { "name": "Major Slash", "source": "TechniqueCourses" }, { "name": "Urushiol", "source": "Breeding" }, { "name": "Antitoxins", "source": "Breeding" }, { "name": "Sharp Rain", "source": "Breeding" }, { "name": "Flood", "source": "Breeding" }, { "name": "Intimidation", "source": "Breeding" }, { "name": "Shrill Voice", "source": "Breeding" }], "trivia": ["Platimous was drawn by 50 Shades of Heliolisk, Crema bought the rights to the art.", "The artist of Platimous tweeting about his design being bought for use.", "Platimous' name is derived from platypus and venomous."], "evolution": { "stage": 3, "evolutionTree": [{ "number": 7, "name": "Platypet", "stage": 1, "levels": 20 }, { "number": 8, "name": "Platox", "stage": 2, "levels": 20 }, { "number": 9, "name": "Platimous", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/7f/Platimous.png/250px-Platimous.png?version=4d26af36afe7f53a1ac87c7bae37c16c", "locations": [], "icon": "/images/portraits/temtem/large/Platimous.png" }, { "number": 10, "name": "Swali", "types": ["Nature"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/8a/Swali.png/50px-Swali.png", "wikiUrl": "https://temtem.gamepedia.com/Swali", "stats": { "hp": 44, "sta": 65, "spd": 35, "atk": 50, "def": 40, "spatk": 55, "spdef": 60, "total": 349 }, "traits": ["Shared Pain", "Mithridatism"], "details": { "height": { "cm": 82, "inches": 32 }, "weight": { "kg": 18, "lbs": 39 } }, "techniques": [{ "name": "Shy Shield", "source": "Levelling" }, { "name": "Tenderness", "source": "Levelling" }, { "name": "Urushiol", "source": "Levelling" }, { "name": "Toxic Spores", "source": "Levelling" }, { "name": "Nimble", "source": "Levelling" }, { "name": "Photosynthesis", "source": "Levelling" }, { "name": "Bark Shield", "source": "Levelling" }, { "name": "Allergic Spread", "source": "Levelling" }, { "name": "Turbo Choreography", "source": "TechniqueCourses" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Spores", "source": "Breeding" }, { "name": "Hypoxia", "source": "Breeding" }], "trivia": ["Swali was shown for the first time on iNinjaHero's 08/08/2018 Twitch stream, during his visit to Crema HQ.", "Swali's description and in-game footage was first shown on the official Temtem Twitter.", "Swali's name is derived from swaddle and ali (wing in Italian)."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 10, "name": "Swali", "stage": 1, "levels": 8 }, { "number": 11, "name": "Loali", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/8a/Swali.png/250px-Swali.png?version=71a390aa66be7f05d1cb833c23e3fc07", "locations": [{ "location": "Prasine Coast", "island": "Deniz", "frequency": "Uncommon (40%)", "level": "2-5" }, { "location": "Thalassian Cliffs", "island": "Deniz", "frequency": "Rare (20%)", "level": "5-8" }], "icon": "/images/portraits/temtem/large/Swali.png" }, { "number": 11, "name": "Loali", "types": ["Nature", "Wind"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/0/0c/Loali.png/50px-Loali.png", "wikiUrl": "https://temtem.gamepedia.com/Loali", "stats": { "hp": 55, "sta": 80, "spd": 80, "atk": 60, "def": 50, "spatk": 70, "spdef": 90, "total": 485 }, "traits": ["Botanist", "Toxic Farewell"], "details": { "height": { "cm": 60, "inches": 23 }, "weight": { "kg": 14, "lbs": 30 } }, "techniques": [{ "name": "Shy Shield", "source": "Levelling" }, { "name": "Tenderness", "source": "Levelling" }, { "name": "Urushiol", "source": "Levelling" }, { "name": "Wind Blade", "source": "Levelling" }, { "name": "Toxic Spores", "source": "Levelling" }, { "name": "Nimble", "source": "Levelling" }, { "name": "Photosynthesis", "source": "Levelling" }, { "name": "Blizzard", "source": "Levelling" }, { "name": "Bark Shield", "source": "Levelling" }, { "name": "Allergic Spread", "source": "Levelling" }, { "name": "Turbo Choreography", "source": "TechniqueCourses" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Spores", "source": "Breeding" }, { "name": "Hypoxia", "source": "Breeding" }], "trivia": ["Loali was recolored many times before the final look was chosen, as depicted in its concept art.", "Loali's name is derived from lot of ali (wing in Italian).", "In Temtem lore, it is the symbol of peace and harmony.", "Loali is given to the player as a part of the main story quest Shipwrecked in Tucma!"], "evolution": { "stage": 2, "evolutionTree": [{ "number": 10, "name": "Swali", "stage": 1, "levels": 8 }, { "number": 11, "name": "Loali", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/0/0c/Loali.png/250px-Loali.png?version=d76dbe38010f6b2366b8632440487857", "locations": [{ "location": "The Canopath", "island": "Omninesia", "frequency": "Rare (20%)", "level": "16-19" }, { "location": "The Flywalk", "island": "Omninesia", "frequency": "Uncommon (50%)", "level": "19-20" }, { "location": "The Hangroad", "island": "Omninesia", "frequency": "Rare (20%)", "level": "15-20" }, { "location": "The Glassyway", "island": "Omninesia", "frequency": "Common (80%)", "level": "19-22<" }], "icon": "/images/portraits/temtem/large/Loali.png" }, { "number": 12, "name": "Tateru", "types": ["Neutral"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/55/Tateru.png/50px-Tateru.png", "wikiUrl": "https://temtem.gamepedia.com/Tateru", "stats": { "hp": 70, "sta": 90, "spd": 60, "atk": 68, "def": 66, "spatk": 54, "spdef": 66, "total": 474 }, "traits": ["Soft Touch", "Resilient"], "details": { "height": { "cm": 145, "inches": 57 }, "weight": { "kg": 61, "lbs": 134 } }, "techniques": [{ "name": "Tenderness", "source": "Levelling" }, { "name": "Scratch", "source": "Levelling" }, { "name": "Nibble", "source": "Levelling" }, { "name": "Heavy Blow", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Rage", "source": "Levelling" }, { "name": "Fierce Claw", "source": "Levelling" }, { "name": "Lullaby", "source": "Levelling" }, { "name": "Stone Ball", "source": "Levelling" }, { "name": "Turbo Choreography", "source": "TechniqueCourses" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }, { "name": "Confiscate", "source": "TechniqueCourses" }, { "name": "Rend", "source": "TechniqueCourses" }, { "name": "Held Anger", "source": "TechniqueCourses" }, { "name": "Major Slash", "source": "TechniqueCourses" }, { "name": "Inner Spirit", "source": "Breeding" }, { "name": "Held Anger", "source": "Breeding" }, { "name": "Perfect Jab", "source": "Breeding" }], "trivia": ["Tateru was first revealed through its color test concept art.", "Tateru was recolored many times before the final look was chosen, as depicted in its concept art.", "Tateru's name comes from the Japanese word for stand/erect: 立てる / tateru.", "Tateru has an emote on the official Temtem Discord. It portrays a police officer."], "evolution": { "evolves": false }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/55/Tateru.png/250px-Tateru.png?version=6bdaab87e5320c9d7836e7f20886cfc1", "locations": [{ "location": "Prasine Coast", "island": "Deniz", "frequency": "Common", "level": "3-6" }, { "location": "Thalassian Cliffs", "island": "Deniz", "frequency": "Common", "level": "4-6" }, { "location": "The Gifted Bridges", "island": "Deniz", "frequency": "Uncommon", "level": "8-10" }, { "location": "Windward Fort", "island": "Deniz", "frequency": "Rare", "level": "12-13" }, { "location": "Aguamarina Caves", "island": "Deniz", "frequency": "Rare", "level": "15-18" }, { "location": "Waterfall floor of Aguamarina Caves", "island": "Deniz", "frequency": "Rare", "level": "18-20" }], "icon": "/images/portraits/temtem/large/Tateru.png" }, { "number": 16, "name": "Paharo", "types": ["Wind"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/1/1c/Paharo.png/50px-Paharo.png", "wikiUrl": "https://temtem.gamepedia.com/Paharo", "stats": { "hp": 48, "sta": 18, "spd": 60, "atk": 40, "def": 40, "spatk": 50, "spdef": 50, "total": 306 }, "traits": ["Hover", "Friendship"], "details": { "height": { "cm": 75, "inches": 29 }, "weight": { "kg": 8, "lbs": 17 } }, "techniques": [{ "name": "Peck", "source": "Levelling" }, { "name": "Stare", "source": "Levelling" }, { "name": "Hypnosis", "source": "Levelling" }, { "name": "Wind Blade", "source": "Levelling" }, { "name": "Wind Burst", "source": "Levelling" }, { "name": "Cheer Up", "source": "Levelling" }, { "name": "Feather Gatling", "source": "Levelling" }, { "name": "Hypoxia", "source": "Levelling" }, { "name": "Tornado", "source": "Levelling" }, { "name": "Turbo Choreography", "source": "TechniqueCourses" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Hyperkinetic Strike", "source": "Breeding" }, { "name": "Humiliating Slap", "source": "Breeding" }], "trivia": ["Paharo was first revealed via Twitter.", "Paharo's name comes from the South Spanish accent for the word bird, Pájaro."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 16, "name": "Paharo", "stage": 1, "levels": 7 }, { "number": 17, "name": "Paharac", "stage": 2, "levels": 16 }, { "number": 18, "name": "Granpah", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/1/1c/Paharo.png/250px-Paharo.png?version=931b16b6679375fd6bee753b8ddaf0d0", "locations": [{ "location": "Prasine Coast", "island": "Deniz", "frequency": "Common", "level": "2-7" }, { "location": "Thalassian Cliffs", "island": "Deniz", "frequency": "Common (90%)", "level": "4-6" }, { "location": "The Gifted Bridges", "island": "Deniz", "frequency": "Common (60%-95%)", "level": "7-10" }], "icon": "/images/portraits/temtem/large/Paharo.png" }, { "number": 17, "name": "Paharac", "types": ["Wind"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/2c/Paharac.png/50px-Paharac.png", "wikiUrl": "https://temtem.gamepedia.com/Paharac", "stats": { "hp": 60, "sta": 30, "spd": 70, "atk": 50, "def": 55, "spatk": 60, "spdef": 60, "total": 385 }, "traits": ["Caffeinated", "Camaraderie"], "details": { "height": { "cm": 125, "inches": 49 }, "weight": { "kg": 24, "lbs": 52 } }, "techniques": [{ "name": "Peck", "source": "Levelling" }, { "name": "Stare", "source": "Levelling" }, { "name": "Hypnosis", "source": "Levelling" }, { "name": "Wind Blade", "source": "Levelling" }, { "name": "Wind Burst", "source": "Levelling" }, { "name": "Cheer Up", "source": "Levelling" }, { "name": "Feather Gatling", "source": "Levelling" }, { "name": "Hypoxia", "source": "Levelling" }, { "name": "Tornado", "source": "Levelling" }, { "name": "Turbo Choreography", "source": "TechniqueCourses" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Hyperkinetic Strike", "source": "Breeding" }, { "name": "Humiliating Slap", "source": "Breeding" }], "trivia": ["Paharac was first seen on the Temtem banners.", "Paharac was first revealed on the 13th June 2018, during a Twitch interview hosted by PokéNinja and the CEO of Crema, Enrique Paños.", "Paharac's name comes from the Spanish word for big bird, pajarraco.", "There's a home in Arissola where a Luma Paharac sits near the other end of the home."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 16, "name": "Paharo", "stage": 1, "levels": 7 }, { "number": 17, "name": "Paharac", "stage": 2, "levels": 16 }, { "number": 18, "name": "Granpah", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/2c/Paharac.png/250px-Paharac.png?version=415ed2494c1c351d7d630c56ed01fc95", "locations": [{ "location": "The Gifted Bridges", "island": "Deniz", "frequency": "Very Rare (5%)", "level": "8-10" }, { "location": "The Canopath", "island": "Omninesia", "frequency": "Rare (20%)", "level": "16-18" }, { "location": "The Flywalk", "island": "Omninesia", "frequency": "Rare (20%)", "level": "18-21" }, { "location": "The Glassyway", "island": "Omninesia", "frequency": "Rare (20%)", "level": "20-22" }], "icon": "/images/portraits/temtem/large/Paharac.png" }, { "number": 18, "name": "Granpah", "types": ["Wind"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/d/d5/Granpah.png/50px-Granpah.png", "wikiUrl": "https://temtem.gamepedia.com/Granpah", "stats": { "hp": 69, "sta": 36, "spd": 78, "atk": 55, "def": 61, "spatk": 72, "spdef": 66, "total": 437 }, "traits": ["Last Rush", "Bully"], "details": { "height": { "cm": 186, "inches": 73 }, "weight": { "kg": 45, "lbs": 99 } }, "techniques": [{ "name": "Peck", "source": "Levelling" }, { "name": "Stare", "source": "Levelling" }, { "name": "Hypnosis", "source": "Levelling" }, { "name": "Wind Blade", "source": "Levelling" }, { "name": "Wind Burst", "source": "Levelling" }, { "name": "Cheer Up", "source": "Levelling" }, { "name": "Feather Gatling", "source": "Levelling" }, { "name": "Hypoxia", "source": "Levelling" }, { "name": "Tornado", "source": "Levelling" }, { "name": "Turbo Choreography", "source": "TechniqueCourses" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Confiscate", "source": "TechniqueCourses" }, { "name": "Hyperkinetic Strike", "source": "Breeding" }, { "name": "Humiliating Slap", "source": "Breeding" }], "trivia": ["Granpah was first seen on a Kickstarter update for types and was later revealed on Twitter.", "Granpah's name is derived from the Spanish phrase Gran Pájaro, meaning Grand Bird. It also sounds like Grandpa, a nickname for Grandfather.", "Prior to the official reveal, clues were given about Granpah's name in the official Temtem Discord. The user who guessed the name correctly was AfroSera#2380."], "evolution": { "stage": 3, "evolutionTree": [{ "number": 16, "name": "Paharo", "stage": 1, "levels": 7 }, { "number": 17, "name": "Paharac", "stage": 2, "levels": 16 }, { "number": 18, "name": "Granpah", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/d/d5/Granpah.png/250px-Granpah.png?version=7145d16ca67fabd7029ce8230ba3a4d0", "locations": [], "icon": "/images/portraits/temtem/large/Granpah.png" }, { "number": 19, "name": "Ampling", "types": ["Electric"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/9/93/Ampling.png/50px-Ampling.png", "wikiUrl": "https://temtem.gamepedia.com/Ampling", "stats": { "hp": 0, "sta": 0, "spd": 0, "atk": 0, "def": 0, "spatk": 0, "spdef": 0, "total": 0 }, "traits": [], "details": { "height": { "cm": 0, "inches": 0 }, "weight": { "kg": 0, "lbs": 0 } }, "techniques": [], "trivia": ["Ampling was originally unnamed #32 on a list of scrapped Temtem that was to be voted to bring back on Kickstarter Update #2.", "Ampling was the winner of the Chose a Temtem backer mini-game. Its name was proposed by a community member ( ItsTomas ) in the Official Discord, and later chosen as the winner during the Choose a Temtem names poll in the 6th update of Temtem's Kickstarter.", "Ampling is a combination of Ampere which is a basic unit of electrical current and -ling from fawnling (a young deer)."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 19, "name": "Ampling", "stage": 1, "levels": 0 }, { "number": 20, "name": "Amphatyr", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/9/93/Ampling.png/250px-Ampling.png?version=82167fd1b9325aec9f8813d1d95dc04b", "locations": [], "icon": "/images/portraits/temtem/large/Ampling.png" }, { "number": 20, "name": "Amphatyr", "types": ["Electric", "Nature"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/a/a8/Amphatyr.png/41px-Amphatyr.png", "wikiUrl": "https://temtem.gamepedia.com/Amphatyr", "stats": { "hp": 0, "sta": 0, "spd": 0, "atk": 0, "def": 0, "spatk": 0, "spdef": 0, "total": 0 }, "traits": [], "details": { "height": { "cm": 0, "inches": 0 }, "weight": { "kg": 0, "lbs": 0 } }, "techniques": [], "trivia": ["Amphatyr is a portmanteau of the words Ampere and satyr. Ampere is a basic unit of electrical current and a satyr is a woodland deity from Greek mythology.", "The name of Amphatyr was proposed by a community member ( ItsTomas ) of the official Discord, and later chosen as the winner during the Choose a Temtem names poll in the 6th update of Temtem's Kickstarter."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 19, "name": "Ampling", "stage": 1, "levels": 0 }, { "number": 20, "name": "Amphatyr", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/a/a8/Amphatyr.png/205px-Amphatyr.png?version=52792cb2a13edbc2ab577f9dc5c58299", "locations": [], "icon": "/images/portraits/temtem/large/Amphatyr.png" }, { "number": 21, "name": "Bunbun", "types": ["Earth", "Crystal"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/3/38/Bunbun.png/50px-Bunbun.png", "wikiUrl": "https://temtem.gamepedia.com/Bunbun", "stats": { "hp": 72, "sta": 40, "spd": 69, "atk": 50, "def": 36, "spatk": 64, "spdef": 43, "total": 374 }, "traits": ["Caffeinated", "Resilient"], "details": { "height": { "cm": 55, "inches": 21 }, "weight": { "kg": 18, "lbs": 39 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Nibble", "source": "Levelling" }, { "name": "Tenderness", "source": "Levelling" }, { "name": "Crystal Dust", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Mud Shower", "source": "Levelling" }, { "name": "Head Ram", "source": "Levelling" }, { "name": "Stone Ball", "source": "Levelling" }, { "name": "Dust Vortex", "source": "Breeding" }, { "name": "Crystal Bite", "source": "Breeding" }], "trivia": ["Bunbun's name is derived from bùn (mud in Vietnamese) and bunny."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 21, "name": "Bunbun", "stage": 1, "levels": 20 }, { "number": 22, "name": "Mudrid", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/3/38/Bunbun.png/250px-Bunbun.png?version=6e93d45b1ecbe30473c8a120ebf43edf", "locations": [{ "location": "Mines of Mictlan", "island": "Tucma", "frequency": "Uncommon (70%)", "level": "31-34" }, { "location": "Kakama Cenote", "island": "Tucma", "frequency": "Uncommon (75%)", "level": "35-39" }], "icon": "/images/portraits/temtem/large/Bunbun.png" }, { "number": 22, "name": "Mudrid", "types": ["Earth", "Crystal"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/f5/Mudrid.png/50px-Mudrid.png", "wikiUrl": "https://temtem.gamepedia.com/Mudrid", "stats": { "hp": 85, "sta": 44, "spd": 95, "atk": 60, "def": 42, "spatk": 75, "spdef": 50, "total": 451 }, "traits": ["Receptive", "Resistant"], "details": { "height": { "cm": 150, "inches": 59 }, "weight": { "kg": 75, "lbs": 165 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Nibble", "source": "Levelling" }, { "name": "Tenderness", "source": "Levelling" }, { "name": "Crystal Dust", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Mud Shower", "source": "Levelling" }, { "name": "Head Ram", "source": "Levelling" }, { "name": "Stone Ball", "source": "Levelling" }, { "name": "Earth Wave", "source": "Levelling" }, { "name": "Rend", "source": "TechniqueCourses" }, { "name": "Footwork", "source": "TechniqueCourses" }, { "name": "Turbo Choreography", "source": "TechniqueCourses" }, { "name": "Dust Vortex", "source": "Breeding" }, { "name": "Crystal Bite", "source": "Breeding" }], "trivia": ["Mudrid's name is derived from mud and leoporid (rabbits family scientific name)."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 21, "name": "Bunbun", "stage": 1, "levels": 20 }, { "number": 22, "name": "Mudrid", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/f5/Mudrid.png/250px-Mudrid.png?version=ac895e6b3e62190ba4d4b351afed1032", "locations": [{ "location": "Mines of Mictlan", "island": "Tucma", "frequency": "Very Rare (5%)", "level": "32-36" }], "icon": "/images/portraits/temtem/large/Mudrid.png" }, { "number": 23, "name": "Hidody", "types": ["Nature"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/1/1a/Hidody.png/50px-Hidody.png", "wikiUrl": "https://temtem.gamepedia.com/Hidody", "stats": { "hp": 49, "sta": 70, "spd": 39, "atk": 42, "def": 39, "spatk": 62, "spdef": 55, "total": 356 }, "traits": ["Electric Synthesize", "Botanist"], "details": { "height": { "cm": 100, "inches": 39 }, "weight": { "kg": 12, "lbs": 26 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Sharp Leaf", "source": "Levelling" }, { "name": "Cheer Up", "source": "Levelling" }, { "name": "Allergic Spread", "source": "Levelling" }, { "name": "Gaia", "source": "Levelling" }, { "name": "Bark Shield", "source": "Levelling" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Antitoxins", "source": "TechniqueCourses" }, { "name": "Cage", "source": "TechniqueCourses" }, { "name": "Relax", "source": "TechniqueCourses" }, { "name": "Spores", "source": "Breeding" }, { "name": "Lullaby", "source": "Breeding" }, { "name": "Water Cutting Lily", "source": "Breeding" }, { "name": "Sacrifice", "source": "Breeding" }, { "name": "Hypoxia", "source": "Breeding" }], "trivia": ["Hidody was first revealed via Twitter.", "Hidody's name comes from the combination of the words hide and body."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 23, "name": "Hidody", "stage": 1, "levels": 15 }, { "number": 24, "name": "Taifu", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/1/1a/Hidody.png/250px-Hidody.png?version=02d1797386953394720f23e14793ae1e", "locations": [{ "location": "The Canopath", "island": "Omninesia", "frequency": "40%", "level": "14-17" }, { "location": "The Glassyway", "island": "Omninesia", "frequency": "Uncommon (50%)", "level": "19-22" }, { "location": "Giant Banyan", "island": "Omninesia", "frequency": "Uncommon (40%)", "level": "23-26" }], "icon": "/images/portraits/temtem/large/Hidody.png" }, { "number": 24, "name": "Taifu", "types": ["Nature"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/3/36/Taifu.png/50px-Taifu.png", "wikiUrl": "https://temtem.gamepedia.com/Taifu", "stats": { "hp": 60, "sta": 87, "spd": 45, "atk": 50, "def": 45, "spatk": 78, "spdef": 78, "total": 443 }, "traits": ["Toxic Farewell", "Resilient"], "details": { "height": { "cm": 180, "inches": 70 }, "weight": { "kg": 72, "lbs": 158 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Sharp Leaf", "source": "Levelling" }, { "name": "Cheer Up", "source": "Levelling" }, { "name": "Allergic Spread", "source": "Levelling" }, { "name": "Gaia", "source": "Levelling" }, { "name": "Bark Shield", "source": "Levelling" }, { "name": "Dust Vortex", "source": "Levelling" }, { "name": "Frond Whip", "source": "Levelling" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Antitoxins", "source": "TechniqueCourses" }, { "name": "Cage", "source": "TechniqueCourses" }, { "name": "Relax", "source": "TechniqueCourses" }, { "name": "Major Slash", "source": "TechniqueCourses" }, { "name": "Spores", "source": "Breeding" }, { "name": "Lullaby", "source": "Breeding" }, { "name": "Water Cutting Lily", "source": "Breeding" }, { "name": "Sacrifice", "source": "Breeding" }, { "name": "Hypoxia", "source": "Breeding" }], "trivia": ["Taifu's name is derived from tofu, a soft Asian food.", "Taifu was first revealed via Twitter."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 23, "name": "Hidody", "stage": 1, "levels": 15 }, { "number": 24, "name": "Taifu", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/3/36/Taifu.png/250px-Taifu.png?version=7f62ea46113407cad16d296efc8d567a", "locations": [{ "location": "The Glassyway", "island": "Omninesia", "frequency": "Rare (25%)", "level": "19-22" }], "icon": "/images/portraits/temtem/large/Taifu.png" }, { "number": 25, "name": "Fomu", "types": ["Water"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/76/Fomu.png/50px-Fomu.png", "wikiUrl": "https://temtem.gamepedia.com/Fomu", "stats": { "hp": 40, "sta": 60, "spd": 40, "atk": 30, "def": 35, "spatk": 65, "spdef": 70, "total": 340 }, "traits": ["Amphibian", "Hydrologist"], "details": { "height": { "cm": 58, "inches": 22 }, "weight": { "kg": 12, "lbs": 26 } }, "techniques": [{ "name": "Bubbles", "source": "Levelling" }, { "name": "Head Charge", "source": "Levelling" }, { "name": "Tenderness", "source": "Levelling" }, { "name": "Ice Cubes", "source": "Levelling" }, { "name": "Drill Impact", "source": "Levelling" }, { "name": "Tsunami", "source": "TechniqueCourses" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }, { "name": "Awful Song", "source": "TechniqueCourses" }, { "name": "Ice Shuriken", "source": "Breeding" }, { "name": "Lullaby", "source": "Breeding" }, { "name": "Sharp Rain", "source": "Breeding" }], "trivia": ["Due to its first appearance as a cropped picture in the competitive set-up screen (top left, under the player avatar), users in the official Discord attempted to draw out the rest of the creature. Among the drawings, a bird with human-like legs became popular, and thus the name \"Legbird\" was coined.", "Fomu's name is derived from foam."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 25, "name": "Fomu", "stage": 1, "levels": 20 }, { "number": 26, "name": "Wiplump", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/76/Fomu.png/250px-Fomu.png?version=f26a576737492e369d78b384d64cd6d8", "locations": [{ "location": "The Gifted Bridges", "island": "Deniz", "frequency": "Common (80%)", "level": "12-15" }, { "location": "Sillaro River", "island": "Deniz", "frequency": "50%-100%", "level": "13-15" }, { "location": "Windward Fort", "island": "Deniz", "frequency": "Rare/Uncommon (10%-50%)", "level": "9-12" }, { "location": "Surfing in Windward Fort Basement", "island": "Deniz", "frequency": "100%", "level": "11-14" }, { "location": "Aguamarina Caves", "island": "Deniz", "frequency": "Common", "level": "" }], "icon": "/images/portraits/temtem/large/Fomu.png" }, { "number": 26, "name": "Wiplump", "types": ["Water", "Wind"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/f7/Wiplump.png/50px-Wiplump.png", "wikiUrl": "https://temtem.gamepedia.com/Wiplump", "stats": { "hp": 66, "sta": 80, "spd": 70, "atk": 40, "def": 50, "spatk": 95, "spdef": 80, "total": 481 }, "traits": ["Plethoric", "Patient"], "details": { "height": { "cm": 125, "inches": 49 }, "weight": { "kg": 28, "lbs": 61 } }, "techniques": [{ "name": "Bubbles", "source": "Levelling" }, { "name": "Head Charge", "source": "Levelling" }, { "name": "Tenderness", "source": "Levelling" }, { "name": "Ice Cubes", "source": "Levelling" }, { "name": "Blizzard", "source": "Levelling" }, { "name": "Cold Breeze", "source": "Levelling" }, { "name": "Drill Impact", "source": "Levelling" }, { "name": "Tornado", "source": "Levelling" }, { "name": "Tsunami", "source": "TechniqueCourses" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }, { "name": "Awful Song", "source": "TechniqueCourses" }, { "name": "Ice Shuriken", "source": "Breeding" }, { "name": "Lullaby", "source": "Breeding" }, { "name": "Sharp Rain", "source": "Breeding" }], "trivia": ["Wiplump's name is derived from wing and plump."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 25, "name": "Fomu", "stage": 1, "levels": 20 }, { "number": 26, "name": "Wiplump", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/f7/Wiplump.png/250px-Wiplump.png?version=2fd95f3d8d3f574bef210d92b559ffc2", "locations": [{ "location": "Sillaro River", "island": "Deniz", "frequency": "Very Rare (5%)", "level": "14-15" }, { "location": "Water in Mines of Mictlan[2]", "island": "Tucma", "frequency": "Very Rare (15%)", "level": "37-40" }, { "location": "Kakama Cenote", "island": "Tucma", "frequency": "Uncommon (40%)", "level": "32-28" }], "icon": "/images/portraits/temtem/large/Wiplump.png" }, { "number": 27, "name": "Skail", "types": ["Neutral"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/77/Skail.png/50px-Skail.png", "wikiUrl": "https://temtem.gamepedia.com/Skail", "stats": { "hp": 57, "sta": 43, "spd": 60, "atk": 45, "def": 50, "spatk": 32, "spdef": 41, "total": 328 }, "traits": ["Furor", "Scavenger"], "details": { "height": { "cm": 80, "inches": 31 }, "weight": { "kg": 26, "lbs": 57 } }, "techniques": [{ "name": "Tail Strike", "source": "Levelling" }, { "name": "Scratch", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Held Anger", "source": "Levelling" }, { "name": "Fierce Claw", "source": "Levelling" }, { "name": "Haito Uchi", "source": "Levelling" }, { "name": "Stone Wall", "source": "TechniqueCourses" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Perfect Jab", "source": "Breeding" }, { "name": "Oshi-Dashi", "source": "Breeding" }], "trivia": ["Skail was first revealed via Twitter.", "Skail's name comes from the combination of the words Skaven and tail."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 27, "name": "Skail", "stage": 1, "levels": 17 }, { "number": 28, "name": "Skunch", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/77/Skail.png/250px-Skail.png?version=1c6d883d20a9324286671868b54eec02", "locations": [{ "location": "Prasine Coast", "island": "Deniz", "frequency": "Common", "level": "4-6" }, { "location": "Thalassian Cliffs", "island": "Deniz", "frequency": "Common", "level": "7-9" }, { "location": "The Gifted Bridges", "island": "Deniz", "frequency": "Common", "level": "" }, { "location": "Windward Fort", "island": "Deniz", "frequency": "Common", "level": "12-14" }, { "location": "Aguamarina Caves", "island": "Deniz", "frequency": "Common", "level": "14-18" }, { "location": "Waterfall floor of Aguamarina Caves", "island": "Deniz", "frequency": "Uncommon", "level": "18-20" }], "icon": "/images/portraits/temtem/large/Skail.png" }, { "number": 28, "name": "Skunch", "types": ["Neutral", "Melee"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/4b/Skunch.png/50px-Skunch.png", "wikiUrl": "https://temtem.gamepedia.com/Skunch", "stats": { "hp": 72, "sta": 62, "spd": 75, "atk": 70, "def": 70, "spatk": 45, "spdef": 60, "total": 454 }, "traits": ["Brawny", "Bully"], "details": { "height": { "cm": 150, "inches": 59 }, "weight": { "kg": 36, "lbs": 79 } }, "techniques": [{ "name": "Tail Strike", "source": "Levelling" }, { "name": "Scratch", "source": "Levelling" }, { "name": "Martial Strike", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Held Anger", "source": "Levelling" }, { "name": "Fierce Claw", "source": "Levelling" }, { "name": "Haito Uchi", "source": "Levelling" }, { "name": "Inner Spirit", "source": "Levelling" }, { "name": "Ninja Jutsu", "source": "Levelling" }, { "name": "Stone Wall", "source": "TechniqueCourses" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Cage", "source": "TechniqueCourses" }, { "name": "Perfect Jab", "source": "Breeding" }, { "name": "Oshi-Dashi", "source": "Breeding" }], "trivia": ["Skunch was first revealed via Twitch in iPokeNinja's Stream on 08/08/2018.", "Skunch's name is derived from squirrel and punch."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 27, "name": "Skail", "stage": 1, "levels": 17 }, { "number": 28, "name": "Skunch", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/4b/Skunch.png/250px-Skunch.png?version=32f8420e59a00039c6cd76f38334b226", "locations": [{ "location": "Aguamarina Caves", "island": "Deniz", "frequency": "Very Rare (5%)", "level": "14-20" }, { "location": "Corrupted Badlands", "island": "Tucma", "frequency": "Rare (20%)", "level": "25-29" }, { "location": "Xolot Reservoir", "island": "Tucma", "frequency": "Uncommon", "level": "26-29" }], "icon": "/images/portraits/temtem/large/Skunch.png" }, { "number": 32, "name": "Houchic", "types": ["Mental"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/a/af/Houchic.png/50px-Houchic.png", "wikiUrl": "https://temtem.gamepedia.com/Houchic", "stats": { "hp": 38, "sta": 44, "spd": 66, "atk": 40, "def": 41, "spatk": 72, "spdef": 52, "total": 353 }, "traits": ["Mental Alliance", "Soft Touch"], "details": { "height": { "cm": 110, "inches": 43 }, "weight": { "kg": 24, "lbs": 52 } }, "techniques": [{ "name": "Hypnosis", "source": "Levelling" }, { "name": "Psy Wave", "source": "Levelling" }, { "name": "Kick", "source": "Levelling" }, { "name": "Tenderness", "source": "Levelling" }, { "name": "Energy Manipulation", "source": "Levelling" }, { "name": "Telekinetic Shrapnel", "source": "Levelling" }, { "name": "Beta Burst", "source": "Levelling" }, { "name": "Psy Surge", "source": "Levelling" }, { "name": "Humiliating Slap", "source": "Levelling" }, { "name": "Lullaby", "source": "Levelling" }], "trivia": ["Houchic's name is derived from houdini and psychic.", "The player remarks that Houchic \"looks like their old art teacher\".", "Houchic's appearence strongly resembles that of salamander larvae, making it one of the several known temtem with this basis.", "Along with Ganki, Houchic has the lowest base HP stat (38) of all Temtem."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 32, "name": "Houchic", "stage": 1, "levels": 29 }, { "number": 33, "name": "Tental", "stage": 2, "levels": 0 }, { "number": -1, "name": "Unknown", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/a/af/Houchic.png/250px-Houchic.png?version=599ba4f08db27a03e9493c73e69605cb", "locations": [{ "location": "?", "island": "Arbury", "frequency": "?", "level": "?" }], "icon": "/images/portraits/temtem/large/Houchic.png" }, { "number": 33, "name": "Tental", "types": ["Mental"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/3/37/Tental.png/50px-Tental.png", "wikiUrl": "https://temtem.gamepedia.com/Tental", "stats": { "hp": 41, "sta": 51, "spd": 76, "atk": 42, "def": 50, "spatk": 81, "spdef": 62, "total": 403 }, "traits": ["Water Affinity", "Avenger"], "details": { "height": { "cm": 160, "inches": 62 }, "weight": { "kg": 58, "lbs": 127 } }, "techniques": [{ "name": "Hypnosis", "source": "Levelling" }, { "name": "Psy Wave", "source": "Levelling" }, { "name": "Kick", "source": "Levelling" }, { "name": "Tenderness", "source": "Levelling" }, { "name": "Energy Manipulation", "source": "Levelling" }, { "name": "Telekinetic Shrapnel", "source": "Levelling" }, { "name": "Beta Burst", "source": "Levelling" }, { "name": "Psy Surge", "source": "Levelling" }, { "name": "Humiliating Slap", "source": "Levelling" }, { "name": "High-pressure Water", "source": "Levelling" }, { "name": "Lullaby", "source": "Levelling" }, { "name": "Ninja Jutsu", "source": "Levelling" }, { "name": "Awful Song", "source": "TechniqueCourses" }, { "name": "Confiscate", "source": "TechniqueCourses" }, { "name": "Block", "source": "TechniqueCourses" }, { "name": "Madness Buff", "source": "TechniqueCourses" }], "trivia": ["Tental's name is derived from tentacle and mental."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 32, "name": "Houchic", "stage": 1, "levels": 29 }, { "number": 33, "name": "Tental", "stage": 2, "levels": 0 }, { "number": -1, "name": "Unknown", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/3/37/Tental.png/250px-Tental.png?version=1eb805a04e3ef2bc672d89cd7ea8d0b6", "locations": [], "icon": "/images/portraits/temtem/large/Tental.png" }, { "number": 35, "name": "Orphyll", "types": ["Nature", "Toxic"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/b/b3/Orphyll.png/50px-Orphyll.png", "wikiUrl": "https://temtem.gamepedia.com/Orphyll", "stats": { "hp": 42, "sta": 48, "spd": 75, "atk": 68, "def": 64, "spatk": 27, "spdef": 40, "total": 364 }, "traits": ["Toxic Affinity", "Apothecary"], "details": { "height": { "cm": 117, "inches": 46 }, "weight": { "kg": 110, "lbs": 242 } }, "techniques": [{ "name": "Nibble", "source": "Levelling" }, { "name": "Hypnosis", "source": "Levelling" }, { "name": "Toxic Fang", "source": "Levelling" }, { "name": "Spores", "source": "Levelling" }, { "name": "Sharp Leaf", "source": "Levelling" }, { "name": "Roots", "source": "Levelling" }, { "name": "Toxic Ink", "source": "Levelling" }, { "name": "Allergic Spread", "source": "Levelling" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Antitoxins", "source": "TechniqueCourses" }, { "name": "Madness Buff", "source": "TechniqueCourses" }, { "name": "Held Anger", "source": "TechniqueCourses" }, { "name": "Narcoleptic Hit", "source": "Breeding" }, { "name": "Photosynthesis", "source": "Breeding" }, { "name": "Bark Shield", "source": "Breeding" }], "trivia": ["Orphyll was one of the scrapped Temtem designs that had a chance to be added into the game during the first \"Choose a Temtem\" mini-game. However, it was not selected in the end.", "Orphyll's design had a second chance to be added into the game during the third \"Choose a Temtem\" mini-game, and ended up winning.\nOrphyll's name comes from the combination of the words ormr (Snake in Old Norse) and chlorophyll. It was submitted by Eggs#8022 during the #035/#036 naming contest, and won with 262 votes.", "Orphyll's name comes from the combination of the words ormr (Snake in Old Norse) and chlorophyll. It was submitted by Eggs#8022 during the #035/#036 naming contest, and won with 262 votes."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 35, "name": "Orphyll", "stage": 1, "levels": 22 }, { "number": 36, "name": "Nidrasil", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/b/b3/Orphyll.png/250px-Orphyll.png?version=80e136c8dff53c85b5cdec0b22ad5051", "locations": [{ "location": "Corrupted Badlands", "island": "Tucma", "frequency": "Uncommon", "level": "24-27" }, { "location": "Xolot Reservoir", "island": "Tucma", "frequency": "Uncommon (50%)", "level": "27-29" }], "icon": "/images/portraits/temtem/large/Orphyll.png" }, { "number": 36, "name": "Nidrasil", "types": ["Nature", "Toxic"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/5b/Nidrasil.png/50px-Nidrasil.png", "wikiUrl": "https://temtem.gamepedia.com/Nidrasil", "stats": { "hp": 77, "sta": 52, "spd": 61, "atk": 88, "def": 80, "spatk": 36, "spdef": 51, "total": 445 }, "traits": ["Toxic Farewell", "Tri-Apothecary"], "details": { "height": { "cm": 178, "inches": 70 }, "weight": { "kg": 330, "lbs": 727 } }, "techniques": [{ "name": "Nibble", "source": "Levelling" }, { "name": "Hypnosis", "source": "Levelling" }, { "name": "Toxic Fang", "source": "Levelling" }, { "name": "Spores", "source": "Levelling" }, { "name": "Sharp Leaf", "source": "Levelling" }, { "name": "Roots", "source": "Levelling" }, { "name": "Toxic Ink", "source": "Levelling" }, { "name": "Allergic Spread", "source": "Levelling" }, { "name": "Hallucination", "source": "Levelling" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Antitoxins", "source": "TechniqueCourses" }, { "name": "Madness Buff", "source": "TechniqueCourses" }, { "name": "Held Anger", "source": "TechniqueCourses" }, { "name": "Narcoleptic Hit", "source": "Breeding" }, { "name": "Photosynthesis", "source": "Breeding" }, { "name": "Bark Shield", "source": "Breeding" }], "trivia": ["Nidrasil's design was revealed during the naming contest for #035 and #036. \nNidrasil's name comes from the combination of the words Níðhöggr (or Nidhogg, a Nordic mythological serpent that means \"He who strikes with malice\" in old Norse) + Yggdrasil (Nordic tree of life that connects the Nine Worlds together). It was the winner name for the #035/#036 naming contest submitted by Eggs#8022 with 262 votes.", "Nidrasil's name comes from the combination of the words Níðhöggr (or Nidhogg, a Nordic mythological serpent that means \"He who strikes with malice\" in old Norse) + Yggdrasil (Nordic tree of life that connects the Nine Worlds together). It was the winner name for the #035/#036 naming contest submitted by Eggs#8022 with 262 votes."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 35, "name": "Orphyll", "stage": 1, "levels": 22 }, { "number": 36, "name": "Nidrasil", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/5b/Nidrasil.png/250px-Nidrasil.png?version=c5fb32d9632c9c202f77d3582f0a18d6", "locations": [], "icon": "/images/portraits/temtem/large/Nidrasil.png" }, { "number": 37, "name": "Banapi", "types": ["Fire"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/27/Banapi.png/50px-Banapi.png", "wikiUrl": "https://temtem.gamepedia.com/Banapi", "stats": { "hp": 42, "sta": 40, "spd": 70, "atk": 50, "def": 50, "spatk": 40, "spdef": 41, "total": 333 }, "traits": ["Pyromaniac", "Settling"], "details": { "height": { "cm": 90, "inches": 35 }, "weight": { "kg": 45, "lbs": 99 } }, "techniques": [{ "name": "Kick", "source": "Levelling" }, { "name": "Heavy Blow", "source": "Levelling" }, { "name": "Warm Cuddle", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Head Ram", "source": "Levelling" }, { "name": "Embers", "source": "Levelling" }, { "name": "Rampage", "source": "Levelling" }, { "name": "Fire Tornado", "source": "Levelling" }, { "name": "Heat Up", "source": "Levelling" }, { "name": "Magma Cannon", "source": "TechniqueCourses" }, { "name": "Block", "source": "TechniqueCourses" }, { "name": "Roar", "source": "Breeding" }], "trivia": ["Banapi's name comes from banteng (bison in Indonesian) and api (fire in Indonesian).", "Banapi's name was determined through a community naming contest. The winner and creator of the name Banapi was smvid4#0118, from the official Temtem Discord."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 37, "name": "Banapi", "stage": 1, "levels": 17 }, { "number": 38, "name": "Capyre", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/27/Banapi.png/250px-Banapi.png?version=185bd91e665278ad4b70a6a4dc4ca42f", "locations": [{ "location": "The Hangroad", "island": "Omninesia", "frequency": "Common", "level": "14-19" }, { "location": "The Glassyway", "island": "Omninesia", "frequency": "Rare", "level": "20-22" }, { "location": "Anak Volcano", "island": "Omninesia", "frequency": "Uncommon", "level": "20-24" }], "icon": "/images/portraits/temtem/large/Banapi.png" }, { "number": 38, "name": "Capyre", "types": ["Fire"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/c/cf/Capyre.png/50px-Capyre.png", "wikiUrl": "https://temtem.gamepedia.com/Capyre", "stats": { "hp": 55, "sta": 55, "spd": 88, "atk": 71, "def": 68, "spatk": 45, "spdef": 47, "total": 429 }, "traits": ["Last Rush", "Resilient"], "details": { "height": { "cm": 150, "inches": 59 }, "weight": { "kg": 67, "lbs": 147 } }, "techniques": [{ "name": "Kick", "source": "Levelling" }, { "name": "Heavy Blow", "source": "Levelling" }, { "name": "Warm Cuddle", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Head Ram", "source": "Levelling" }, { "name": "Embers", "source": "Levelling" }, { "name": "Rampage", "source": "Levelling" }, { "name": "Fire Tornado", "source": "Levelling" }, { "name": "Heat Up", "source": "Levelling" }, { "name": "Extinction", "source": "Levelling" }, { "name": "Magma Cannon", "source": "TechniqueCourses" }, { "name": "Block", "source": "TechniqueCourses" }, { "name": "Roar", "source": "Breeding" }], "trivia": ["Capyre's name is derived from capra (genus for goats) and pyre.", "Capyre's name was determined through a community naming contest. The winners and creators of the name Capyre were Eggs#8022 and Soma Ghost#4762, from the official Temtem Discord."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 37, "name": "Banapi", "stage": 1, "levels": 17 }, { "number": 38, "name": "Capyre", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/c/cf/Capyre.png/250px-Capyre.png?version=d3c0bc298fa2142b5abf324b167193e4", "locations": [], "icon": "/images/portraits/temtem/large/Capyre.png" }, { "number": 39, "name": "Lapinite", "types": ["Crystal"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/6/69/Lapinite.png/50px-Lapinite.png", "wikiUrl": "https://temtem.gamepedia.com/Lapinite", "stats": { "hp": 58, "sta": 31, "spd": 46, "atk": 44, "def": 63, "spatk": 55, "spdef": 56, "total": 353 }, "traits": ["Scavenger", "Electric Synthesize"], "details": { "height": { "cm": 90, "inches": 35 }, "weight": { "kg": 47, "lbs": 103 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Nibble", "source": "Levelling" }, { "name": "Glass Blade", "source": "Levelling" }, { "name": "Tail Strike", "source": "Levelling" }, { "name": "Sharp Stabs", "source": "Levelling" }, { "name": "Crystal Spikes", "source": "Levelling" }, { "name": "Footwork", "source": "TechniqueCourses" }, { "name": "Diamond Fort", "source": "Breeding" }], "trivia": ["Lapinite's design was revealed during the naming contest for #039.\nLapinite's name comes from the combination of the words lapin (French for Bunny) and ite (suffix for minerals). It is also potentially a pun on Laponite - a kind of synthetic clay. It was the winner name for the #39 naming contest submitted by Matthew#7366 with 198 votes.", "Lapinite's name comes from the combination of the words lapin (French for Bunny) and ite (suffix for minerals). It is also potentially a pun on Laponite - a kind of synthetic clay. It was the winner name for the #39 naming contest submitted by Matthew#7366 with 198 votes."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 39, "name": "Lapinite", "stage": 1, "levels": 25 }, { "number": 40, "name": "Azuroc", "stage": 2, "levels": "+Trading Levels" }, { "number": 41, "name": "Zenoreth", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/6/69/Lapinite.png/250px-Lapinite.png?version=a4c5c27584e856fbc34dd0d34829ce06", "locations": [{ "location": "Mines of Mictlan", "island": "Tucma", "frequency": "Common (85%)", "level": "29-34" }], "icon": "/images/portraits/temtem/large/Lapinite.png" }, { "number": 40, "name": "Azuroc", "types": ["Crystal"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/9/9a/Azuroc.png/50px-Azuroc.png", "wikiUrl": "https://temtem.gamepedia.com/Azuroc", "stats": { "hp": 64, "sta": 34, "spd": 50, "atk": 58, "def": 69, "spatk": 60, "spdef": 62, "total": 397 }, "traits": ["Mirroring", "Fainted Curse"], "details": { "height": { "cm": 203, "inches": 79 }, "weight": { "kg": 95, "lbs": 209 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Nibble", "source": "Levelling" }, { "name": "Glass Blade", "source": "Levelling" }, { "name": "Tail Strike", "source": "Levelling" }, { "name": "Sharp Stabs", "source": "Levelling" }, { "name": "Crystal Spikes", "source": "Levelling" }, { "name": "Madness Buff", "source": "Levelling" }, { "name": "Crystal Bite", "source": "Levelling" }, { "name": "Rend", "source": "TechniqueCourses" }, { "name": "Footwork", "source": "TechniqueCourses" }, { "name": "Diamond Fort", "source": "Breeding" }], "trivia": ["Azuroc's name is derived from azure and rock."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 39, "name": "Lapinite", "stage": 1, "levels": 25 }, { "number": 40, "name": "Azuroc", "stage": 2, "levels": "+Trading / 25 Levels" }, { "number": 41, "name": "Zenoreth", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/9/9a/Azuroc.png/250px-Azuroc.png?version=17c1e097ac20a6cffc6789cedf8f8868", "locations": [{ "location": "Mines of Mictlan", "island": "Tucma", "frequency": "5%", "level": "31-37" }], "icon": "/images/portraits/temtem/large/Azuroc.png" }, { "number": 41, "name": "Zenoreth", "types": ["Crystal"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/22/Zenoreth.png/50px-Zenoreth.png", "wikiUrl": "https://temtem.gamepedia.com/Zenoreth", "stats": { "hp": 71, "sta": 35, "spd": 56, "atk": 67, "def": 87, "spatk": 65, "spdef": 69, "total": 450 }, "traits": ["Channeler", "Wrecked Farewell"], "details": { "height": { "cm": 310, "inches": 122 }, "weight": { "kg": 220, "lbs": 485 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Nibble", "source": "Levelling" }, { "name": "Glass Blade", "source": "Levelling" }, { "name": "Tail Strike", "source": "Levelling" }, { "name": "Sharp Stabs", "source": "Levelling" }, { "name": "Crystal Spikes", "source": "Levelling" }, { "name": "Madness Buff", "source": "Levelling" }, { "name": "Crystal Bite", "source": "Levelling" }, { "name": "Rend", "source": "TechniqueCourses" }, { "name": "Footwork", "source": "TechniqueCourses" }, { "name": "Diamond Fort", "source": "Breeding" }], "trivia": ["Zenoreth's design was revealed during the naming contest for #039. \nZenoreth's name comes from the combination of the words zenith and ore. It was the winner name for the #39 naming contest submitted by Matthew#7366 with 198 votes.", "Zenoreth's name comes from the combination of the words zenith and ore. It was the winner name for the #39 naming contest submitted by Matthew#7366 with 198 votes."], "evolution": { "stage": 3, "evolutionTree": [{ "number": 39, "name": "Lapinite", "stage": 1, "levels": 25 }, { "number": 40, "name": "Azuroc", "stage": 2, "levels": "+Trading Levels" }, { "number": 41, "name": "Zenoreth", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/22/Zenoreth.png/250px-Zenoreth.png?version=157e33919d2150667fe8eb471d1b5fee", "locations": [{ "location": "Crystal Shrine in Corrupted Badlands", "island": "Tucma", "frequency": "95%", "level": "50-55" }], "icon": "/images/portraits/temtem/large/Zenoreth.png" }, { "number": 44, "name": "Bigu", "types": ["Nature"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/0/09/Bigu.png/50px-Bigu.png", "wikiUrl": "https://temtem.gamepedia.com/Bigu", "stats": { "hp": 55, "sta": 68, "spd": 20, "atk": 65, "def": 38, "spatk": 41, "spdef": 42, "total": 329 }, "traits": ["Warm-Blooded", "Amphibian"], "details": { "height": { "cm": 113, "inches": 44 }, "weight": { "kg": 113, "lbs": 249 } }, "techniques": [{ "name": "Nibble", "source": "Levelling" }, { "name": "Shy Shield", "source": "Levelling" }, { "name": "Sharp Leaf", "source": "Levelling" }, { "name": "Slime", "source": "Levelling" }, { "name": "Water Cutting Lily", "source": "Levelling" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Antitoxins", "source": "TechniqueCourses" }, { "name": "Bubbles", "source": "Breeding" }, { "name": "Ice Cubes", "source": "Breeding" }, { "name": "Toxic Slime", "source": "Breeding" }], "trivia": ["Bigu's name is derived from Bígaro (winkle in Spanish)."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 44, "name": "Bigu", "stage": 1, "levels": 18 }, { "number": 45, "name": "Babawa", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/0/09/Bigu.png/250px-Bigu.png?version=24e2192d9bb46fc3986c8e7f2134b309", "locations": [], "icon": "/images/portraits/temtem/large/Bigu.png" }, { "number": 45, "name": "Babawa", "types": ["Nature", "Water"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/b/b9/Babawa.png/50px-Babawa.png", "wikiUrl": "https://temtem.gamepedia.com/Babawa", "stats": { "hp": 85, "sta": 92, "spd": 40, "atk": 79, "def": 57, "spatk": 51, "spdef": 44, "total": 448 }, "traits": ["Mucous", "Withdrawal"], "details": { "height": { "cm": 226, "inches": 88 }, "weight": { "kg": 340, "lbs": 749 } }, "techniques": [{ "name": "Nibble", "source": "Levelling" }, { "name": "Shy Shield", "source": "Levelling" }, { "name": "Sharp Leaf", "source": "Levelling" }, { "name": "Slime", "source": "Levelling" }, { "name": "Water Cutting Lily", "source": "Levelling" }, { "name": "Iced Stalactite", "source": "Levelling" }, { "name": "Aqua Stone", "source": "Levelling" }, { "name": "Harmful Lick", "source": "Levelling" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Antitoxins", "source": "TechniqueCourses" }, { "name": "Bubbles", "source": "Breeding" }, { "name": "Ice Cubes", "source": "Breeding" }, { "name": "Toxic Slime", "source": "Breeding" }], "trivia": ["Babawa's name is derived from baba (slime in Spanish) + agua (water in Spanish)."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 44, "name": "Bigu", "stage": 1, "levels": 18 }, { "number": 45, "name": "Babawa", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/b/b9/Babawa.png/250px-Babawa.png?version=cfb16bf66dc7a09067f9ddb088855c11", "locations": [{ "location": "Citerior & Ulterior Omninesia water", "island": "Omninesia", "frequency": "Common", "level": "~19-21" }, { "location": "Citeroir Omninesia grass", "island": "Omninesia", "frequency": "Common", "level": "~18-20" }, { "location": "Kakama Cenote Grass", "island": "Tucma", "frequency": "Uncommon", "level": "~35-39" }], "icon": "/images/portraits/temtem/large/Babawa.png" }, { "number": 48, "name": "Kaku", "types": ["Nature"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/4e/Kaku.png/50px-Kaku.png", "wikiUrl": "https://temtem.gamepedia.com/Kaku", "stats": { "hp": 69, "sta": 48, "spd": 35, "atk": 35, "def": 60, "spatk": 60, "spdef": 50, "total": 357 }, "traits": ["Caffeinated", "Mithridatism"], "details": { "height": { "cm": 54, "inches": 21 }, "weight": { "kg": 29, "lbs": 63 } }, "techniques": [{ "name": "Shy Shield", "source": "Levelling" }, { "name": "Toxic Spores", "source": "Levelling" }, { "name": "Nimble", "source": "Levelling" }, { "name": "Urushiol", "source": "Levelling" }, { "name": "Sharp Leaf", "source": "Levelling" }, { "name": "Wind Burst", "source": "Levelling" }, { "name": "Narcoleptic Hit", "source": "Levelling" }, { "name": "Boomerang", "source": "Levelling" }, { "name": "Allergic Spread", "source": "Levelling" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }, { "name": "Bark Shield", "source": "Breeding" }, { "name": "Lifeful Sap", "source": "Breeding" }], "trivia": ["Kaku was first revealed to the public on Kickstarter update #13.", "Kaku's name comes from the word kakusareta (protected in Japanese).", "Kaku has an emote on the official Temtem Discord."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 48, "name": "Kaku", "stage": 1, "levels": 11 }, { "number": 49, "name": "Saku", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/4e/Kaku.png/250px-Kaku.png?version=621735cf3f014afa71890bbde56ec202", "locations": [{ "location": "Prasine Coast", "island": "Deniz", "frequency": "Uncommon (40%-50%)", "level": "2-5" }, { "location": "Thalassian Cliffs", "island": "Deniz", "frequency": "Common", "level": "6-9" }, { "location": "The Gifted Bridges", "island": "Deniz", "frequency": "Common", "level": "10-11" }, { "location": "The Canopath", "island": "Omninesia", "frequency": "Common (75%)", "level": "16-18" }, { "location": "The Flywalk", "island": "Omninesia", "frequency": "Uncommon (50%)", "level": "18-20" }], "icon": "/images/portraits/temtem/large/Kaku.png" }, { "number": 49, "name": "Saku", "types": ["Nature", "Wind"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/2a/Saku.png/50px-Saku.png", "wikiUrl": "https://temtem.gamepedia.com/Saku", "stats": { "hp": 82, "sta": 60, "spd": 40, "atk": 40, "def": 62, "spatk": 66, "spdef": 70, "total": 420 }, "traits": ["Air Specialist", "Botanist"], "details": { "height": { "cm": 92, "inches": 36 }, "weight": { "kg": 44, "lbs": 97 } }, "techniques": [{ "name": "Shy Shield", "source": "Levelling" }, { "name": "Toxic Spores", "source": "Levelling" }, { "name": "Nimble", "source": "Levelling" }, { "name": "Urushiol", "source": "Levelling" }, { "name": "Sharp Leaf", "source": "Levelling" }, { "name": "Wind Burst", "source": "Levelling" }, { "name": "Narcoleptic Hit", "source": "Levelling" }, { "name": "Boomerang", "source": "Levelling" }, { "name": "Allergic Spread", "source": "Levelling" }, { "name": "Tornado", "source": "Levelling" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }, { "name": "Held Anger", "source": "TechniqueCourses" }, { "name": "Relax", "source": "TechniqueCourses" }, { "name": "Bark Shield", "source": "Breeding" }, { "name": "Lifeful Sap", "source": "Breeding" }], "trivia": ["Saku was first revealed via Twitter.", "Saku's name derives from the Japanese 咲く [saku], which means to bloom.", "Saku has an emote on the official Temtem Discord.", "The Temtem Discord community created “cults” worshipping Saku and Pigepic. The official Twitter account for Temtem later created a tweet pitting the “Sakult” and “Team Porket” against each other. The Sakult is currently the winner."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 48, "name": "Kaku", "stage": 1, "levels": 11 }, { "number": 49, "name": "Saku", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/2a/Saku.png/250px-Saku.png?version=df60d201b6ae8340edea0f7b993e3f1e", "locations": [{ "location": "The Gifted Bridges", "island": "Deniz", "frequency": "Rare", "level": "9-11" }, { "location": "The Canopath", "island": "Omninesia", "frequency": "Rare", "level": "16-18" }, { "location": "The Glassyway", "island": "Omninesia", "frequency": "Rare", "level": "16-18" }, { "location": "Kupeleleza", "island": "Tucma", "frequency": "Uncommon (40%)", "level": "34-37" }], "icon": "/images/portraits/temtem/large/Saku.png" }, { "number": 50, "name": "Valash", "types": ["Neutral", "Crystal"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/80/Valash.png/50px-Valash.png", "wikiUrl": "https://temtem.gamepedia.com/Valash", "stats": { "hp": 58, "sta": 57, "spd": 90, "atk": 74, "def": 56, "spatk": 74, "spdef": 56, "total": 465 }, "traits": ["Scavenger", "Determined"], "details": { "height": { "cm": 185, "inches": 72 }, "weight": { "kg": 84, "lbs": 185 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Glass Blade", "source": "Levelling" }, { "name": "Crystal Dust", "source": "Levelling" }, { "name": "Sharp Stabs", "source": "Levelling" }, { "name": "Crystal Bite", "source": "Levelling" }, { "name": "Crystal Spikes", "source": "Levelling" }, { "name": "Rend", "source": "Levelling" }, { "name": "Held Anger", "source": "Levelling" }, { "name": "Stone Wall", "source": "TechniqueCourses" }, { "name": "Cage", "source": "TechniqueCourses" }, { "name": "Block", "source": "TechniqueCourses" }, { "name": "Madness Buff", "source": "TechniqueCourses" }, { "name": "Footwork", "source": "TechniqueCourses" }, { "name": "Major Slash", "source": "TechniqueCourses" }, { "name": "Clinch", "source": "Breeding" }, { "name": "Ninja Jutsu", "source": "Breeding" }], "trivia": ["Valash's name is derived from vanadite and slash.", "A level 35 Valash is gifted to the player as a part of the main story questline Shipwrecked in Tucma!"], "evolution": { "evolves": false }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/80/Valash.png/250px-Valash.png?version=550813faa5fe91e8e5b84ff03a525083", "locations": [{ "location": "Shipwrecked in Tucma! Quest", "island": "Tucma", "frequency": "One-Time Gift", "level": "35" }, { "location": "Mines of Mictlan", "island": "Tucma", "frequency": "Very Rare", "level": "35-39" }], "icon": "/images/portraits/temtem/large/Valash.png" }, { "number": 53, "name": "Barnshe", "types": ["Mental", "Wind"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/6/6c/Barnshe.png/50px-Barnshe.png", "wikiUrl": "https://temtem.gamepedia.com/Barnshe", "stats": { "hp": 50, "sta": 51, "spd": 65, "atk": 60, "def": 40, "spatk": 75, "spdef": 79, "total": 420 }, "traits": ["Neutrality", "Air Specialist"], "details": { "height": { "cm": 171, "inches": 67 }, "weight": { "kg": 59, "lbs": 130 } }, "techniques": [{ "name": "Peck", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Wind Blade", "source": "Levelling" }, { "name": "Wind Burst", "source": "Levelling" }, { "name": "Bamboozle", "source": "Levelling" }, { "name": "Intimidation", "source": "Levelling" }, { "name": "Hypoxia", "source": "Levelling" }, { "name": "Psy Surge", "source": "Levelling" }, { "name": "Tornado", "source": "Levelling" }, { "name": "Turbo Choreography", "source": "TechniqueCourses" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }, { "name": "Relax", "source": "TechniqueCourses" }, { "name": "Beta Burst", "source": "Breeding" }, { "name": "Lullaby", "source": "Breeding" }, { "name": "Energy Manipulation", "source": "Breeding" }], "trivia": ["Barnshe was first revealed via Twitter.", "Barnshe is a combination of the word barn owl and banshee.", "The first Luma Barnshe was caught by Laknightress (IGN) during Alpha 1, with a 5% encounter rate and 1/4000 Luma chance."], "evolution": { "evolves": false }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/6/6c/Barnshe.png/250px-Barnshe.png?version=50a894010b67adaf7af592db1a31802a", "locations": [{ "location": "Windward Fort (Top floor)", "island": "Deniz", "frequency": "Very Rare", "level": "12-14" }], "icon": "/images/portraits/temtem/large/Barnshe.png" }, { "number": 54, "name": "Gyalis", "types": ["Crystal", "Melee"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/d/d6/Gyalis.png/50px-Gyalis.png", "wikiUrl": "https://temtem.gamepedia.com/Gyalis", "stats": { "hp": 86, "sta": 44, "spd": 100, "atk": 85, "def": 61, "spatk": 23, "spdef": 61, "total": 460 }, "traits": ["Mirroring", "Resistant"], "details": { "height": { "cm": 204, "inches": 80 }, "weight": { "kg": 53, "lbs": 116 } }, "techniques": [{ "name": "Glass Blade", "source": "Levelling" }, { "name": "Kick", "source": "Levelling" }, { "name": "Show Off", "source": "Levelling" }, { "name": "Sharp Stabs", "source": "Levelling" }, { "name": "Footwork", "source": "Levelling" }, { "name": "Block", "source": "Levelling" }, { "name": "Drill Impact", "source": "Levelling" }, { "name": "Crystal Bite", "source": "Levelling" }, { "name": "Ninja Jutsu", "source": "Levelling" }, { "name": "Awful Song", "source": "TechniqueCourses" }, { "name": "Antitoxins", "source": "TechniqueCourses" }, { "name": "Cage", "source": "TechniqueCourses" }, { "name": "Rend", "source": "TechniqueCourses" }, { "name": "Major Slash", "source": "TechniqueCourses" }, { "name": "Crystal Spikes", "source": "Breeding" }, { "name": "Crystallize", "source": "Breeding" }, { "name": "Heat Up", "source": "Breeding" }, { "name": "Earth Wave", "source": "Breeding" }, { "name": "Haito Uchi", "source": "Breeding" }], "trivia": ["Gyalis's name is derived from gyalisméno (polished in Greek) and mantis."], "evolution": { "evolves": false }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/d/d6/Gyalis.png/250px-Gyalis.png?version=77871f88bf39ad1ecbcc3758613262f6", "locations": [{ "location": "Mines of Mictlan", "island": "Tucma", "frequency": "10%", "level": "34-35" }], "icon": "/images/portraits/temtem/large/Gyalis.png" }, { "number": 55, "name": "Occlura", "types": ["Crystal"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/3/38/Occlura.png/50px-Occlura.png", "wikiUrl": "https://temtem.gamepedia.com/Occlura", "stats": { "hp": 50, "sta": 39, "spd": 50, "atk": 45, "def": 43, "spatk": 38, "spdef": 65, "total": 330 }, "traits": ["Warm-Blooded", "Scavenger"], "details": { "height": { "cm": 137, "inches": 53 }, "weight": { "kg": 79, "lbs": 174 } }, "techniques": [{ "name": "Novice Punch", "source": "Levelling" }, { "name": "Glass Blade", "source": "Levelling" }, { "name": "Crystallize", "source": "Levelling" }, { "name": "Heavy Blow", "source": "Levelling" }, { "name": "Energy Manipulation", "source": "Levelling" }, { "name": "Head Ram", "source": "Levelling" }, { "name": "Crystal Bite", "source": "Levelling" }, { "name": "Psy Surge", "source": "Breeding" }, { "name": "Humiliating Slap", "source": "Breeding" }], "trivia": ["Occlura's name is derived from occultatum (hidden in Latin) and lura (mounth in Latin)."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 55, "name": "Occlura", "stage": 1, "levels": 18 }, { "number": 56, "name": "Myx", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/3/38/Occlura.png/250px-Occlura.png?version=5569e7e9cad8354696651f36c589d165", "locations": [{ "location": "Kupeleleza", "island": "Tucma", "frequency": "60%", "level": "31-36" }], "icon": "/images/portraits/temtem/large/Occlura.png" }, { "number": 56, "name": "Myx", "types": ["Crystal", "Mental"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/0/07/Myx.png/50px-Myx.png", "wikiUrl": "https://temtem.gamepedia.com/Myx", "stats": { "hp": 51, "sta": 59, "spd": 65, "atk": 51, "def": 43, "spatk": 94, "spdef": 80, "total": 443 }, "traits": ["Puppet Master", "Rejuvenate"], "details": { "height": { "cm": 243, "inches": 95 }, "weight": { "kg": 145, "lbs": 319 } }, "techniques": [{ "name": "Novice Punch", "source": "Levelling" }, { "name": "Glass Blade", "source": "Levelling" }, { "name": "Crystallize", "source": "Levelling" }, { "name": "Heavy Blow", "source": "Levelling" }, { "name": "Energy Manipulation", "source": "Levelling" }, { "name": "Head Ram", "source": "Levelling" }, { "name": "Crystal Bite", "source": "Levelling" }, { "name": "Clinch", "source": "Levelling" }, { "name": "Hallucination", "source": "Levelling" }, { "name": "Crystal Spikes", "source": "Levelling" }, { "name": "Cage", "source": "TechniqueCourses" }, { "name": "Rend", "source": "TechniqueCourses" }, { "name": "Psy Surge", "source": "Breeding" }, { "name": "Humiliating Slap", "source": "Breeding" }], "trivia": [], "evolution": { "stage": 2, "evolutionTree": [{ "number": 55, "name": "Occlura", "stage": 1, "levels": 18 }, { "number": 56, "name": "Myx", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/0/07/Myx.png/250px-Myx.png?version=9adf2b9fbee40af02a3cb5af3d158878", "locations": [], "icon": "/images/portraits/temtem/large/Myx.png" }, { "number": 57, "name": "Raiber", "types": ["Fire"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/c/c8/Raiber.png/50px-Raiber.png", "wikiUrl": "https://temtem.gamepedia.com/Raiber", "stats": { "hp": 57, "sta": 35, "spd": 42, "atk": 40, "def": 61, "spatk": 59, "spdef": 38, "total": 332 }, "traits": ["Camaraderie", "Rested"], "details": { "height": { "cm": 95, "inches": 37 }, "weight": { "kg": 28, "lbs": 61 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Fire Flame", "source": "Levelling" }, { "name": "Roar", "source": "Levelling" }, { "name": "Fierce Claw", "source": "Levelling" }, { "name": "Embers", "source": "Levelling" }, { "name": "Fire Tornado", "source": "Levelling" }, { "name": "Rampage", "source": "Breeding" }], "trivia": ["Raiber was first revealed as a mention on a Twitter post about Raican.", "Raiber's name comes from the combination of the words raion (Lion in Japanese) and ember."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 57, "name": "Raiber", "stage": 1, "levels": 15 }, { "number": 58, "name": "Raize", "stage": 2, "levels": 25 }, { "number": 59, "name": "Raican", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/c/c8/Raiber.png/250px-Raiber.png?version=bed732746b7818bc495ed76f1ceac907", "locations": [{ "location": "The Glassyway", "island": "Omninesia", "frequency": "Rare (30%)", "level": "20-22" }, { "location": "Anak Volcano", "island": "Omninesia", "frequency": "10%-50%", "level": "17-24" }], "icon": "/images/portraits/temtem/large/Raiber.png" }, { "number": 58, "name": "Raize", "types": ["Fire"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/f4/Raize.png/50px-Raize.png", "wikiUrl": "https://temtem.gamepedia.com/Raize", "stats": { "hp": 66, "sta": 46, "spd": 48, "atk": 46, "def": 74, "spatk": 69, "spdef": 43, "total": 392 }, "traits": ["Furor", "Demoralize"], "details": { "height": { "cm": 160, "inches": 62 }, "weight": { "kg": 70, "lbs": 154 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Fire Flame", "source": "Levelling" }, { "name": "Roar", "source": "Levelling" }, { "name": "Fierce Claw", "source": "Levelling" }, { "name": "Embers", "source": "Levelling" }, { "name": "Fire Tornado", "source": "Levelling" }, { "name": "King's Roar", "source": "Levelling" }, { "name": "Rampage", "source": "Breeding" }], "trivia": ["Raize was first revealed through concept art via Twitter.", "Raize's name comes from the combination of the words raion (Lion in Japanese) + blaze.", "Animations for idle, physical attack, special attack, and one other were shown off on Twitter."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 57, "name": "Raiber", "stage": 1, "levels": 15 }, { "number": 58, "name": "Raize", "stage": 2, "levels": 25 }, { "number": 59, "name": "Raican", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/f4/Raize.png/250px-Raize.png?version=33bf489d7d50a5f631b6e1141989a978", "locations": [], "icon": "/images/portraits/temtem/large/Raize.png" }, { "number": 59, "name": "Raican", "types": ["Fire"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/9/90/Raican.png/50px-Raican.png", "wikiUrl": "https://temtem.gamepedia.com/Raican", "stats": { "hp": 77, "sta": 49, "spd": 60, "atk": 77, "def": 77, "spatk": 51, "spdef": 50, "total": 441 }, "traits": ["Prideful", "Motivator"], "details": { "height": { "cm": 195, "inches": 76 }, "weight": { "kg": 125, "lbs": 275 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Fire Flame", "source": "Levelling" }, { "name": "Roar", "source": "Levelling" }, { "name": "Fierce Claw", "source": "Levelling" }, { "name": "Embers", "source": "Levelling" }, { "name": "Fire Tornado", "source": "Levelling" }, { "name": "King's Roar", "source": "Levelling" }, { "name": "Meteor Swarm", "source": "Levelling" }, { "name": "Held Anger", "source": "TechniqueCourses" }, { "name": "Rampage", "source": "Breeding" }], "trivia": ["Raican was first revealed via Twitter.", "Raican was the first Temtem to be revealed on social media that was directly stated to be a third stage evolution.", "Raican's name comes from the combination of the words raion (Lion in Japanese) + volcan."], "evolution": { "stage": 3, "evolutionTree": [{ "number": 57, "name": "Raiber", "stage": 1, "levels": 15 }, { "number": 58, "name": "Raize", "stage": 2, "levels": 25 }, { "number": 59, "name": "Raican", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/9/90/Raican.png/250px-Raican.png?version=c7889fd0d01ba97db473efae862698ad", "locations": [], "icon": "/images/portraits/temtem/large/Raican.png" }, { "number": 60, "name": "Pewki", "types": ["Water"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/86/Pewki.png/50px-Pewki.png", "wikiUrl": "https://temtem.gamepedia.com/Pewki", "stats": { "hp": 70, "sta": 32, "spd": 33, "atk": 42, "def": 45, "spatk": 31, "spdef": 10, "total": 263 }, "traits": ["Hydrologist", "Rested"], "details": { "height": { "cm": 60, "inches": 23 }, "weight": { "kg": 15, "lbs": 33 } }, "techniques": [{ "name": "Head Charge", "source": "Levelling" }, { "name": "Bubbles", "source": "Levelling" }, { "name": "Finbeat", "source": "Levelling" }, { "name": "Water Blade", "source": "Levelling" }, { "name": "Jaw Strike", "source": "Levelling" }, { "name": "Cheer Up", "source": "Levelling" }, { "name": "Humiliating Slap", "source": "Levelling" }, { "name": "Aquatic Whirlwind", "source": "Levelling" }, { "name": "Tsunami", "source": "TechniqueCourses" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }, { "name": "High-pressure Water", "source": "Breeding" }, { "name": "Flood", "source": "Breeding" }], "trivia": ["Pewki's name comes from the combination of the words pewa (dorsal fin in Hawaiian) and iki (small in Hawaiian)", "Pewki has two emotes on the official Temtem discord, the only other being Pigepic.", "Pewki's total stats (263) is the lowest of all Temtem, and its Special Defense is also the lowest (10)."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 60, "name": "Pewki", "stage": 1, "levels": 13 }, { "number": 61, "name": "Piraniant", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/86/Pewki.png/250px-Pewki.png?version=463f88a7398f1ec5c08aefdfb9473ba9", "locations": [{ "location": "Sillaro River", "island": "Deniz", "frequency": "Rare (30%)", "level": "13-14" }, { "location": "Windward Fort[citation needed]", "island": "Deniz", "frequency": "", "level": "" }, { "location": "The Flywalk", "island": "Omninesia", "frequency": "Common (65%)", "level": "18-20" }, { "location": "The Hangroad", "island": "Omninesia", "frequency": "Common (65%)", "level": "14-18" }], "icon": "/images/portraits/temtem/large/Pewki.png" }, { "number": 61, "name": "Piraniant", "types": ["Water"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/0/01/Piraniant.png/50px-Piraniant.png", "wikiUrl": "https://temtem.gamepedia.com/Piraniant", "stats": { "hp": 80, "sta": 50, "spd": 55, "atk": 77, "def": 85, "spatk": 65, "spdef": 37, "total": 449 }, "traits": ["Patient", "Energy Reserves"], "details": { "height": { "cm": 200, "inches": 78 }, "weight": { "kg": 230, "lbs": 507 } }, "techniques": [{ "name": "Head Charge", "source": "Levelling" }, { "name": "Bubbles", "source": "Levelling" }, { "name": "Finbeat", "source": "Levelling" }, { "name": "Water Blade", "source": "Levelling" }, { "name": "Jaw Strike", "source": "Levelling" }, { "name": "Cheer Up", "source": "Levelling" }, { "name": "Humiliating Slap", "source": "Levelling" }, { "name": "Aquatic Whirlwind", "source": "Levelling" }, { "name": "Rend", "source": "Levelling" }, { "name": "Tsunami", "source": "TechniqueCourses" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }, { "name": "High-pressure Water", "source": "Breeding" }, { "name": "Flood", "source": "Breeding" }], "trivia": ["Piraniant was first revealed via Twitter.", "Piraniant is a combination of piranha, a carnivorous fish, and giant, meaning large in size.", "Piraniant has an emote on the official Temtem discord."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 60, "name": "Pewki", "stage": 1, "levels": 13 }, { "number": 61, "name": "Piraniant", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/0/01/Piraniant.png/250px-Piraniant.png?version=61c78067f3e253e320de3f185d3d5007", "locations": [], "icon": "/images/portraits/temtem/large/Piraniant.png" }, { "number": 69, "name": "Saipat", "types": ["Water", "Melee"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/e/e3/Saipat.png/50px-Saipat.png", "wikiUrl": "https://temtem.gamepedia.com/Saipat", "stats": { "hp": 92, "sta": 42, "spd": 70, "atk": 80, "def": 50, "spatk": 70, "spdef": 40, "total": 444 }, "traits": ["Amphibian", "Toxic Affinity"], "details": { "height": { "cm": 100, "inches": 39 }, "weight": { "kg": 50, "lbs": 110 } }, "techniques": [{ "name": "Martial Strike", "source": "Levelling" }, { "name": "Water Blade", "source": "Levelling" }, { "name": "Rage", "source": "Levelling" }, { "name": "Stare", "source": "Levelling" }, { "name": "Venomous Claws", "source": "Levelling" }, { "name": "High-pressure Water", "source": "Levelling" }, { "name": "Held Anger", "source": "Levelling" }, { "name": "Nicho Sai", "source": "Levelling" }, { "name": "Iced Stalactite", "source": "Levelling" }, { "name": "Ninja Jutsu", "source": "Levelling" }, { "name": "Tsunami", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Toxic Ink", "source": "Breeding" }, { "name": "Ice Shuriken", "source": "Breeding" }], "trivia": ["Saipat first appeared as small pieces of an image that were slowly revealed in the official Discord, until fans guessed its design while creating fan art.", "Saipat's name comes from the combination of the words sai (a prong shaped melee weapon) and pato (duck in Spanish), or platypus (billed mammal)."], "evolution": { "evolves": false }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/e/e3/Saipat.png/250px-Saipat.png?version=228eb2f6dc2edc1f2a8b31f3f301346e", "locations": [{ "location": "Thalassian Cliffs", "island": "Deniz", "frequency": "5%", "level": "7" }, { "location": "The Gifted Bridges", "island": "Deniz", "frequency": "Common", "level": "8-14" }, { "location": "Sillaro River", "island": "Deniz", "frequency": "Uncommon", "level": "13-16" }, { "location": "Aguamarina Caves", "island": "Deniz", "frequency": "Uncommon", "level": "15-18" }, { "location": "Waterfall floor of Aguamarina Caves", "island": "Deniz", "frequency": "Uncommon", "level": "18-20" }, { "location": "Mare Nostrum", "island": "Deniz", "frequency": "Common", "level": "14-20" }, { "location": "Xolot Reservoir", "island": "Tucma", "frequency": "30%-40%", "level": "29-32" }], "icon": "/images/portraits/temtem/large/Saipat.png" }, { "number": 72, "name": "Crystle", "types": ["Crystal"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/a/ac/Crystle.png/50px-Crystle.png", "wikiUrl": "https://temtem.gamepedia.com/Crystle", "stats": { "hp": 60, "sta": 41, "spd": 33, "atk": 61, "def": 69, "spatk": 46, "spdef": 42, "total": 352 }, "traits": ["Amphibian", "Rested"], "details": { "height": { "cm": 60, "inches": 23 }, "weight": { "kg": 48, "lbs": 105 } }, "techniques": [{ "name": "Glass Blade", "source": "Levelling" }, { "name": "Mirror Shell", "source": "Levelling" }, { "name": "Nibble", "source": "Levelling" }, { "name": "Crystal Dust", "source": "Levelling" }, { "name": "Head Ram", "source": "Levelling" }, { "name": "Crystallize", "source": "Levelling" }, { "name": "Crystal Spikes", "source": "Levelling" }, { "name": "Rampage", "source": "Levelling" }, { "name": "Stone Wall", "source": "TechniqueCourses" }], "trivia": ["Crystle's name is derived from crystal and turtle."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 72, "name": "Crystle", "stage": 1, "levels": 30 }, { "number": 73, "name": "Sherald", "stage": 2, "levels": 0 }, { "number": -1, "name": "Unknown", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/a/ac/Crystle.png/250px-Crystle.png?version=7b700e68a21790e67fe5fb6edb5e7019", "locations": [{ "location": "Mines of Mictlan", "island": "Tucma", "frequency": "Very Rare (5%)", "level": "28-30" }, { "location": "Kupeleleza (furthest east island which is covered with grass)", "island": "Tucma", "frequency": "Very Rare (5%)", "level": "24-28" }], "icon": "/images/portraits/temtem/large/Crystle.png" }, { "number": 73, "name": "Sherald", "types": ["Crystal"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/ff/Sherald.png/50px-Sherald.png", "wikiUrl": "https://temtem.gamepedia.com/Sherald", "stats": { "hp": 68, "sta": 45, "spd": 43, "atk": 69, "def": 78, "spatk": 51, "spdef": 48, "total": 402 }, "traits": ["Mirroring", "Provident"], "details": { "height": { "cm": 120, "inches": 47 }, "weight": { "kg": 150, "lbs": 330 } }, "techniques": [{ "name": "Glass Blade", "source": "Levelling" }, { "name": "Mirror Shell", "source": "Levelling" }, { "name": "Nibble", "source": "Levelling" }, { "name": "Crystal Dust", "source": "Levelling" }, { "name": "Head Ram", "source": "Levelling" }, { "name": "Crystallize", "source": "Levelling" }, { "name": "Crystal Spikes", "source": "Levelling" }, { "name": "Rampage", "source": "Levelling" }, { "name": "Diamond Fort", "source": "Levelling" }, { "name": "Stone Wall", "source": "TechniqueCourses" }, { "name": "Cage", "source": "TechniqueCourses" }], "trivia": ["Sherald's name is derived from shell and emerald."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 72, "name": "Crystle", "stage": 1, "levels": 30 }, { "number": 73, "name": "Sherald", "stage": 2, "levels": 0 }, { "number": -1, "name": "Unknown", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/ff/Sherald.png/250px-Sherald.png?version=7c0a388c556a40439425aa43f566358c", "locations": [{ "location": "?", "island": "Tucma", "frequency": "?", "level": "?" }], "icon": "/images/portraits/temtem/large/Sherald.png" }, { "number": 79, "name": "Hocus", "types": ["Mental"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/d/d7/Hocus.png/50px-Hocus.png", "wikiUrl": "https://temtem.gamepedia.com/Hocus", "stats": { "hp": 0, "sta": 0, "spd": 0, "atk": 0, "def": 0, "spatk": 0, "spdef": 0, "total": 0 }, "traits": ["Mirroring"], "details": { "height": { "cm": 115, "inches": 45 }, "weight": { "kg": 31, "lbs": 68 } }, "techniques": [{ "name": "Psychosis", "source": "Levelling" }, { "name": "Beta Burst", "source": "Levelling" }, { "name": "Telekinetic Shrapnel", "source": "Levelling" }], "trivia": ["The term \"Hocus Pocus\" is a common phrase attributed to magicians and witches. Both Hocus and it's evolution are named after the phrase.", "Hocus is Lady Lottie's signature Temtem."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 79, "name": "Hocus", "stage": 1, "levels": 0 }, { "number": 80, "name": "Pocus", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/d/d7/Hocus.png/250px-Hocus.png?version=fef98f08c5fea97385ed36931d5b5635", "locations": [{ "location": "The Gifted Bridges", "island": "Deniz", "frequency": "20%", "level": "25-30" }], "icon": "/images/portraits/temtem/large/Hocus.png" }, { "number": 80, "name": "Pocus", "types": ["Mental"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/fb/Pocus.png/50px-Pocus.png", "wikiUrl": "https://temtem.gamepedia.com/Pocus", "stats": { "hp": 60, "sta": 73, "spd": 78, "atk": 69, "def": 36, "spatk": 77, "spdef": 38, "total": 431 }, "traits": ["Dreaded Alarm", "Rejuvenate"], "details": { "height": { "cm": 190, "inches": 74 }, "weight": { "kg": 82, "lbs": 180 } }, "techniques": [{ "name": "Ninja Jutsu", "source": "Levelling" }], "trivia": ["The term \"Hocus Pocus\" is a common phrase attributed to magicians and witches. Both Pocus and it's predecessor are named after the phrase"], "evolution": { "stage": 2, "evolutionTree": [{ "number": 79, "name": "Hocus", "stage": 1, "levels": 0 }, { "number": 80, "name": "Pocus", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/fb/Pocus.png/250px-Pocus.png?version=7c2ab438239957313985627902ca26ce", "locations": [{ "location": "?", "island": "Arbury", "frequency": "?", "level": "?" }], "icon": "/images/portraits/temtem/large/Pocus.png" }, { "number": 82, "name": "Sparzy", "types": ["Electric"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/80/Sparzy.png/50px-Sparzy.png", "wikiUrl": "https://temtem.gamepedia.com/Sparzy", "stats": { "hp": 70, "sta": 80, "spd": 85, "atk": 85, "def": 46, "spatk": 42, "spdef": 46, "total": 454 }, "traits": ["Last Rush", "Lightning Rod"], "details": { "height": { "cm": 160, "inches": 62 }, "weight": { "kg": 73, "lbs": 160 } }, "techniques": [{ "name": "Novice Punch", "source": "Levelling" }, { "name": "Shrill Voice", "source": "Levelling" }, { "name": "DC Beam", "source": "Levelling" }, { "name": "Held Anger", "source": "Levelling" }, { "name": "Tesla Prison", "source": "Levelling" }, { "name": "Psychosis", "source": "Levelling" }, { "name": "Electric Storm", "source": "Levelling" }], "trivia": ["Sparzy was first revealed unnamed via Twitter.", "\"Sparzy\" name derives from a combination of the word \"spark\" which is a small flash of light that is made from electricity, and the word \"crazy\" which means mad, wild, or overenthusiastic behaviour.", "Sparzy’s name came from Yerin's suggestion on Twitter.", "Sparzy has an emote on the official Temtem discord.", "What might be an earlier evolution-stage of Sparzy can be seen in the official Anime-styled trailer of Temtem. It has a very strong resemblance to Sparzy in both colour scheme and shape."], "evolution": { "evolves": false }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/80/Sparzy.png/250px-Sparzy.png?version=2e48ac98b1c077a9ab73f01b07365152", "locations": [{ "location": "?", "island": "Cipanku", "frequency": "?", "level": "?" }], "icon": "/images/portraits/temtem/large/Sparzy.png" }, { "number": 84, "name": "Mushi", "types": ["Toxic"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/78/Mushi.png/50px-Mushi.png", "wikiUrl": "https://temtem.gamepedia.com/Mushi", "stats": { "hp": 48, "sta": 33, "spd": 68, "atk": 48, "def": 36, "spatk": 48, "spdef": 29, "total": 310 }, "traits": ["Resistant", "Resilient"], "details": { "height": { "cm": 100, "inches": 39 }, "weight": { "kg": 45, "lbs": 99 } }, "techniques": [{ "name": "Nibble", "source": "Levelling" }, { "name": "Tenderness", "source": "Levelling" }, { "name": "Urushiol", "source": "Levelling" }, { "name": "Toxic Spores", "source": "Levelling" }, { "name": "Shrill Voice", "source": "Levelling" }, { "name": "Humiliating Slap", "source": "Levelling" }, { "name": "Paralysing Poison", "source": "Levelling" }, { "name": "Inner Spirit", "source": "Breeding" }], "trivia": ["Mushi's name is derived from mushroom diminutive.", ""], "evolution": { "stage": 1, "evolutionTree": [{ "number": 84, "name": "Mushi", "stage": 1, "levels": 20 }, { "number": 85, "name": "Mushook", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/78/Mushi.png/250px-Mushi.png?version=b14f77181db5677a6e9510bf09f22742", "locations": [{ "location": "Corrupted Badlands", "island": "Tucma", "frequency": "Common", "level": "23-24" }, { "location": "Xolot Reservoir", "island": "Tucma", "frequency": "Common", "level": "28" }], "icon": "/images/portraits/temtem/large/Mushi.png" }, { "number": 85, "name": "Mushook", "types": ["Toxic", "Melee"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/9/90/Mushook.png/50px-Mushook.png", "wikiUrl": "https://temtem.gamepedia.com/Mushook", "stats": { "hp": 67, "sta": 45, "spd": 81, "atk": 81, "def": 80, "spatk": 49, "spdef": 41, "total": 444 }, "traits": ["Parrier", "Tireless"], "details": { "height": { "cm": 210, "inches": 82 }, "weight": { "kg": 95, "lbs": 209 } }, "techniques": [{ "name": "Nibble", "source": "Levelling" }, { "name": "Tenderness", "source": "Levelling" }, { "name": "Urushiol", "source": "Levelling" }, { "name": "Toxic Spores", "source": "Levelling" }, { "name": "Shrill Voice", "source": "Levelling" }, { "name": "Humiliating Slap", "source": "Levelling" }, { "name": "Paralysing Poison", "source": "Levelling" }, { "name": "Perfect Jab", "source": "Levelling" }, { "name": "Uppercut", "source": "Levelling" }, { "name": "Footwork", "source": "Levelling" }, { "name": "Turbo Choreography", "source": "TechniqueCourses" }, { "name": "Confiscate", "source": "TechniqueCourses" }, { "name": "Cage", "source": "TechniqueCourses" }, { "name": "Block", "source": "TechniqueCourses" }, { "name": "Inner Spirit", "source": "Breeding" }], "trivia": ["Mushook's name is derived from mushroom and hook."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 84, "name": "Mushi", "stage": 1, "levels": 20 }, { "number": 85, "name": "Mushook", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/9/90/Mushook.png/250px-Mushook.png?version=ad509c17396ecc5e692f43b3c4ad18aa", "locations": [], "icon": "/images/portraits/temtem/large/Mushook.png" }, { "number": 86, "name": "Magmis", "types": ["Fire"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/5d/Magmis.png/50px-Magmis.png", "wikiUrl": "https://temtem.gamepedia.com/Magmis", "stats": { "hp": 52, "sta": 51, "spd": 37, "atk": 55, "def": 42, "spatk": 45, "spdef": 35, "total": 317 }, "traits": ["Caffeinated", "Thick Skin"], "details": { "height": { "cm": 115, "inches": 45 }, "weight": { "kg": 26, "lbs": 58 } }, "techniques": [{ "name": "Tenderness", "source": "Levelling" }, { "name": "Fire Flame", "source": "Levelling" }, { "name": "Jaw Strike", "source": "Levelling" }, { "name": "Rage", "source": "Levelling" }, { "name": "Warm Cuddle", "source": "Levelling" }, { "name": "Embers", "source": "Levelling" }], "trivia": ["Magmis was first revealed via Twitter.", "Magmis's name is a combination of malleus (Hammer in Latin) and ignis (Fire in Latin).", "Magmis was the first Temtem with a confirmed evolution."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 86, "name": "Magmis", "stage": 1, "levels": 17 }, { "number": 87, "name": "Mastione", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/5d/Magmis.png/250px-Magmis.png?version=87725b0c4699375b069ad5b21af167ad", "locations": [], "icon": "/images/portraits/temtem/large/Magmis.png" }, { "number": 87, "name": "Mastione", "types": ["Fire"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/3/32/Mastione.png/50px-Mastione.png", "wikiUrl": "https://temtem.gamepedia.com/Mastione", "stats": { "hp": 69, "sta": 62, "spd": 52, "atk": 91, "def": 65, "spatk": 62, "spdef": 37, "total": 438 }, "traits": ["Bully", "Pyromaniac"], "details": { "height": { "cm": 240, "inches": 94 }, "weight": { "kg": 180, "lbs": 396 } }, "techniques": [{ "name": "Tenderness", "source": "Levelling" }, { "name": "Fire Flame", "source": "Levelling" }, { "name": "Jaw Strike", "source": "Levelling" }, { "name": "Rage", "source": "Levelling" }, { "name": "Warm Cuddle", "source": "Levelling" }, { "name": "Embers", "source": "Levelling" }, { "name": "Meteor Swarm", "source": "Levelling" }, { "name": "Magma Cannon", "source": "TechniqueCourses" }, { "name": "Cage", "source": "TechniqueCourses" }, { "name": "Rend", "source": "TechniqueCourses" }, { "name": "Block", "source": "TechniqueCourses" }, { "name": "Footwork", "source": "TechniqueCourses" }, { "name": "Major Slash", "source": "TechniqueCourses" }], "trivia": ["Mastione was first revealed via Twitter.", "Mastione's name is derived from malleus (Hammer in Latin) and combustione (Combustion in Latin).", "Mastione was the first Temtem with a confirmed preevolution."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 86, "name": "Magmis", "stage": 1, "levels": 16 }, { "number": 87, "name": "Mastione", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/3/32/Mastione.png/250px-Mastione.png?version=cc14b00d2d3f6ea31961232acc1af16c", "locations": [{ "location": "Anak Volcano", "island": "Omninesia", "frequency": "Rare", "level": "23-26" }], "icon": "/images/portraits/temtem/large/Mastione.png" }, { "number": 88, "name": "Umishi", "types": ["Water"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/4f/Umishi.png/50px-Umishi.png", "wikiUrl": "https://temtem.gamepedia.com/Umishi", "stats": { "hp": 51, "sta": 76, "spd": 80, "atk": 21, "def": 34, "spatk": 63, "spdef": 45, "total": 370 }, "traits": ["Shared Pain", "Caffeinated"], "details": { "height": { "cm": 95, "inches": 37 }, "weight": { "kg": 21, "lbs": 47 } }, "techniques": [{ "name": "Finbeat", "source": "Levelling" }, { "name": "Water Blade", "source": "Levelling" }, { "name": "Nimble", "source": "Levelling" }, { "name": "Cooperation", "source": "Levelling" }, { "name": "Water Cannon", "source": "Levelling" }, { "name": "Sharp Rain", "source": "Levelling" }, { "name": "Aqua Bullet Hell", "source": "Levelling" }, { "name": "Aquatic Whirlwind", "source": "Levelling" }, { "name": "Tsunami", "source": "TechniqueCourses" }, { "name": "Turbo Choreography", "source": "TechniqueCourses" }, { "name": "Flood", "source": "Breeding" }], "trivia": ["Umishi was first seen in iNinjaHero's Twitch stream on 08/08/2018.", "Umishi's name is derived from umi (sea in Japanese) and tenshi (angel in Japanese)."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 88, "name": "Umishi", "stage": 1, "levels": 14 }, { "number": 89, "name": "Ukama", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/4f/Umishi.png/250px-Umishi.png?version=e09799f74fb9f824ad5a7c81bd9fc11b", "locations": [{ "location": "Thalassian Cliffs", "island": "Deniz", "frequency": "Common (50%-90%)", "level": "17-18" }, { "location": "Sillaro River", "island": "Deniz", "frequency": "Rare (30%)", "level": "13-15" }, { "location": "Aguamarina Caves[citation needed]", "island": "Deniz", "frequency": "", "level": "" }], "icon": "/images/portraits/temtem/large/Umishi.png" }, { "number": 89, "name": "Ukama", "types": ["Water"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/75/Ukama.png/50px-Ukama.png", "wikiUrl": "https://temtem.gamepedia.com/Ukama", "stats": { "hp": 68, "sta": 90, "spd": 100, "atk": 34, "def": 51, "spatk": 76, "spdef": 54, "total": 473 }, "traits": ["Hydrologist", "Plethoric"], "details": { "height": { "cm": 140, "inches": 55 }, "weight": { "kg": 27, "lbs": 59 } }, "techniques": [{ "name": "Finbeat", "source": "Levelling" }, { "name": "Water Blade", "source": "Levelling" }, { "name": "Nimble", "source": "Levelling" }, { "name": "Cooperation", "source": "Levelling" }, { "name": "Water Cannon", "source": "Levelling" }, { "name": "Sharp Rain", "source": "Levelling" }, { "name": "Aqua Bullet Hell", "source": "Levelling" }, { "name": "Aquatic Whirlwind", "source": "Levelling" }, { "name": "Blizzard", "source": "Levelling" }, { "name": "Tsunami", "source": "TechniqueCourses" }, { "name": "Turbo Choreography", "source": "TechniqueCourses" }, { "name": "Major Slash", "source": "TechniqueCourses" }, { "name": "Flood", "source": "Breeding" }], "trivia": ["Ukama's name is derived from umi (sea in Japanese) and kama (sickle in Japanese)."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 88, "name": "Umishi", "stage": 1, "levels": 14 }, { "number": 89, "name": "Ukama", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/75/Ukama.png/250px-Ukama.png?version=cd0a61eb461f881292c89a0255e1bdbc", "locations": [{ "location": "Kakama Cenote", "island": "Tucma", "frequency": "Uncommon (55%)", "level": "37-39" }], "icon": "/images/portraits/temtem/large/Ukama.png" }, { "number": 91, "name": "Raignet", "types": ["Unknown"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/50/Raignet.png/50px-Raignet.png", "wikiUrl": "https://temtem.gamepedia.com/Raignet", "stats": { "hp": 0, "sta": 0, "spd": 0, "atk": 0, "def": 0, "spatk": 0, "spdef": 0, "total": 0 }, "traits": [], "details": { "height": { "cm": 0, "inches": 0 }, "weight": { "kg": 0, "lbs": 0 } }, "techniques": [], "trivia": ["Raignet was first revealed via Twitter.", "Raignet's name is a combination of the words 雷 rai (thunder) and magnet (a metallic object that can attract other metals).", "Raignet may not be an Electric Type temtem, but it's design, name and being included in the Electric type examples suggests it almost certainly is."], "evolution": { "stage": 2, "evolutionTree": [{ "number": -1, "name": "Unknown", "stage": 1, "levels": "+ Levels" }, { "number": 91, "name": "Raignet", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/50/Raignet.png/250px-Raignet.png?version=837b1000e7196d236cec536883478778", "locations": [], "icon": "/images/portraits/temtem/large/Raignet.png" }, { "number": 92, "name": "Smazee", "types": ["Melee"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/f7/Smazee.png/50px-Smazee.png", "wikiUrl": "https://temtem.gamepedia.com/Smazee", "stats": { "hp": 49, "sta": 55, "spd": 66, "atk": 69, "def": 44, "spatk": 37, "spdef": 37, "total": 357 }, "traits": ["Fever Rush", "Friendship"], "details": { "height": { "cm": 96, "inches": 37 }, "weight": { "kg": 24, "lbs": 54 } }, "techniques": [{ "name": "Kick", "source": "Levelling" }, { "name": "Martial Strike", "source": "Levelling" }, { "name": "Tail Strike", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Show Off", "source": "Levelling" }, { "name": "Uppercut", "source": "Levelling" }, { "name": "Intimidation", "source": "Levelling" }, { "name": "Perfect Jab", "source": "Levelling" }, { "name": "Heat Up", "source": "Levelling" }, { "name": "Stone Wall", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Earth Wave", "source": "Breeding" }], "trivia": ["Smazee's name is derived trom smack and chimpanzee."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 92, "name": "Smazee", "stage": 1, "levels": 29 }, { "number": 93, "name": "Baboong", "stage": 2, "levels": 0 }, { "number": -1, "name": "Unknown", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/f7/Smazee.png/250px-Smazee.png?version=7935f03519b742cab5db6f412b746f07", "locations": [{ "location": "?", "island": "Arbury", "frequency": "?", "level": "?" }], "icon": "/images/portraits/temtem/large/Smazee.png" }, { "number": 93, "name": "Baboong", "types": ["Melee"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/28/Baboong.png/50px-Baboong.png", "wikiUrl": "https://temtem.gamepedia.com/Baboong", "stats": { "hp": 54, "sta": 61, "spd": 75, "atk": 79, "def": 51, "spatk": 41, "spdef": 41, "total": 402 }, "traits": ["Brawny", "Warm-Blooded"], "details": { "height": { "cm": 160, "inches": 62 }, "weight": { "kg": 53, "lbs": 117 } }, "techniques": [{ "name": "Kick", "source": "Levelling" }, { "name": "Martial Strike", "source": "Levelling" }, { "name": "Tail Strike", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Show Off", "source": "Levelling" }, { "name": "Uppercut", "source": "Levelling" }, { "name": "Intimidation", "source": "Levelling" }, { "name": "Perfect Jab", "source": "Levelling" }, { "name": "Heat Up", "source": "Levelling" }, { "name": "Inner Spirit", "source": "Levelling" }, { "name": "Footwork", "source": "Levelling" }, { "name": "Stone Wall", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Earth Wave", "source": "Breeding" }], "trivia": ["Baboong's name is derived from baboon and young."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 92, "name": "Smazee", "stage": 1, "levels": 29 }, { "number": 93, "name": "Baboong", "stage": 2, "levels": 0 }, { "number": -1, "name": "Unknown", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/28/Baboong.png/250px-Baboong.png?version=3089a006c1697f592a47467468b3a209", "locations": [{ "location": "", "frequency": "", "level": "" }], "icon": "/images/portraits/temtem/large/Baboong.png" }, { "number": 95, "name": "Zizare", "types": ["Earth"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/fe/Zizare.png/50px-Zizare.png", "wikiUrl": "https://temtem.gamepedia.com/Zizare", "stats": { "hp": 0, "sta": 0, "spd": 0, "atk": 0, "def": 0, "spatk": 0, "spdef": 0, "total": 0 }, "traits": [], "details": { "height": { "cm": 0, "inches": 0 }, "weight": { "kg": 0, "lbs": 0 } }, "techniques": [], "trivia": ["Zizare was first seen through the Kickstarter Video then fully revealed on Twitter.", "Zizare is the Basque word for \"earthworm\". Coincidentally, the name could also be a combination of the words \"zig-zag\" and \"bizarre\"."], "evolution": { "evolves": false }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/fe/Zizare.png/250px-Zizare.png?version=9ac8f17d68eec44bf2c6dd677be0cfc8", "locations": [], "icon": "/images/portraits/temtem/large/Zizare.png" }, { "number": 102, "name": "Spriole", "types": ["Nature"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/80/Spriole.png/50px-Spriole.png", "wikiUrl": "https://temtem.gamepedia.com/Spriole", "stats": { "hp": 72, "sta": 38, "spd": 65, "atk": 42, "def": 70, "spatk": 37, "spdef": 31, "total": 355 }, "traits": ["Camaraderie", "Botanist"], "details": { "height": { "cm": 74, "inches": 29 }, "weight": { "kg": 20, "lbs": 44 } }, "techniques": [{ "name": "Shy Shield", "source": "Levelling" }, { "name": "Nibble", "source": "Levelling" }, { "name": "Roots", "source": "Levelling" }, { "name": "Sharp Leaf", "source": "Levelling" }, { "name": "Allergic Spread", "source": "Levelling" }, { "name": "Rampage", "source": "Levelling" }, { "name": "Revitalize", "source": "Levelling" }, { "name": "Spores", "source": "Breeding" }, { "name": "Frond Whip", "source": "Breeding" }], "trivia": ["Spriole's name is derived from sprout and petiole."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 102, "name": "Spriole", "stage": 1, "levels": 12 }, { "number": 103, "name": "Deendre", "stage": 2, "levels": 25 }, { "number": 104, "name": "Cerneaf", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/80/Spriole.png/250px-Spriole.png?version=72b01ba26964c374ecc9b6c9d8274beb", "locations": [{ "location": "The Canopath", "island": "Omninesia", "frequency": "40%", "level": "15-18" }, { "location": "The Hangroad", "island": "Omninesia", "frequency": "Common", "level": "14-18" }, { "location": "The Glassyway", "island": "Omninesia", "frequency": "Common", "level": "19-22" }, { "location": "Giant Banyan", "island": "Omninesia", "frequency": "Common", "level": "23-25" }], "icon": "/images/portraits/temtem/large/Spriole.png" }, { "number": 103, "name": "Deendre", "types": ["Nature"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/42/Deendre.png/50px-Deendre.png", "wikiUrl": "https://temtem.gamepedia.com/Deendre", "stats": { "hp": 80, "sta": 42, "spd": 70, "atk": 48, "def": 74, "spatk": 42, "spdef": 35, "total": 391 }, "traits": ["Mithridatism", "Settling"], "details": { "height": { "cm": 120, "inches": 47 }, "weight": { "kg": 42, "lbs": 92 } }, "techniques": [{ "name": "Shy Shield", "source": "Levelling" }, { "name": "Nibble", "source": "Levelling" }, { "name": "Roots", "source": "Levelling" }, { "name": "Sharp Leaf", "source": "Levelling" }, { "name": "Allergic Spread", "source": "Levelling" }, { "name": "Double Kick", "source": "Levelling" }, { "name": "Rampage", "source": "Levelling" }, { "name": "Revitalize", "source": "Levelling" }, { "name": "Spores", "source": "Breeding" }, { "name": "Frond Whip", "source": "Breeding" }], "trivia": ["Deendre's name is derived from deer and cendre (Ash Tree in French)."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 102, "name": "Spriole", "stage": 1, "levels": 12 }, { "number": 103, "name": "Deendre", "stage": 2, "levels": 25 }, { "number": 104, "name": "Cerneaf", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/42/Deendre.png/250px-Deendre.png?version=d4eb283c5362a2699dae876d76d2394e", "locations": [{ "location": "Giant Banyan", "island": "Omninesia", "frequency": "Common", "level": "?" }, { "location": "Mokupuni Dojo", "island": "Omninesia", "frequency": "Gift", "level": "35" }, { "location": "The Canopath", "island": "Omninesia", "frequency": "?", "level": "?-? (20 spotted)" }, { "location": "The Hangroad", "island": "Omninesia", "frequency": "Rare", "level": "20-?" }], "icon": "/images/portraits/temtem/large/Deendre.png" }, { "number": 104, "name": "Cerneaf", "types": ["Nature"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/fa/Cerneaf.png/50px-Cerneaf.png", "wikiUrl": "https://temtem.gamepedia.com/Cerneaf", "stats": { "hp": 91, "sta": 44, "spd": 79, "atk": 60, "def": 88, "spatk": 43, "spdef": 46, "total": 451 }, "traits": ["Callosity", "Settling"], "details": { "height": { "cm": 210, "inches": 82 }, "weight": { "kg": 94, "lbs": 207 } }, "techniques": [{ "name": "Shy Shield", "source": "Levelling" }, { "name": "Nibble", "source": "Levelling" }, { "name": "Roots", "source": "Levelling" }, { "name": "Sharp Leaf", "source": "Levelling" }, { "name": "Allergic Spread", "source": "Levelling" }, { "name": "Double Kick", "source": "Levelling" }, { "name": "Rampage", "source": "Levelling" }, { "name": "Revitalize", "source": "Levelling" }, { "name": "Water Cutting Lily", "source": "Levelling" }, { "name": "Spores", "source": "Breeding" }, { "name": "Frond Whip", "source": "Breeding" }], "trivia": ["Cerneaf was first revealed via Twitter.", "Cerneaf's name comes from the combination of the words Cernunnos (Celtic deer God) + leaf."], "evolution": { "stage": 3, "evolutionTree": [{ "number": 102, "name": "Spriole", "stage": 1, "levels": 12 }, { "number": 103, "name": "Deendre", "stage": 2, "levels": 25 }, { "number": 104, "name": "Cerneaf", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/fa/Cerneaf.png/250px-Cerneaf.png?version=0eb9476fcb6fe44b4a0d708700dc74ba", "locations": [{ "location": "?", "island": "Omninesia", "frequency": "?", "level": "?" }], "icon": "/images/portraits/temtem/large/Cerneaf.png" }, { "number": 105, "name": "Toxolotl", "types": ["Toxic"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/4e/Toxolotl.png/50px-Toxolotl.png", "wikiUrl": "https://temtem.gamepedia.com/Toxolotl", "stats": { "hp": 59, "sta": 40, "spd": 47, "atk": 50, "def": 64, "spatk": 65, "spdef": 37, "total": 362 }, "traits": ["Power Nap", "Toxic Farewell"], "details": { "height": { "cm": 106, "inches": 41 }, "weight": { "kg": 55, "lbs": 121 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Hypnosis", "source": "Levelling" }, { "name": "Stare", "source": "Levelling" }, { "name": "Venomous Claws", "source": "Levelling" }, { "name": "Toxic Ink", "source": "Levelling" }, { "name": "Tentacle Whip", "source": "Levelling" }, { "name": "Harmful Lick", "source": "Levelling" }, { "name": "Turbo Choreography", "source": "TechniqueCourses" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }, { "name": "Madness Buff", "source": "TechniqueCourses" }, { "name": "Narcoleptic Hit", "source": "Breeding" }], "trivia": ["Toxolotl's name comes from the combination of the words toxic and axolotl."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 105, "name": "Toxolotl", "stage": 1, "levels": 30 }, { "number": 106, "name": "Noxolotl", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/4e/Toxolotl.png/250px-Toxolotl.png?version=efcfdaf33849137624965651a3ef900d", "locations": [{ "location": "Xolot Reservoir", "island": "Tucma", "frequency": "", "level": "27" }], "icon": "/images/portraits/temtem/large/Toxolotl.png" }, { "number": 106, "name": "Noxolotl", "types": ["Toxic"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/55/Noxolotl.png/50px-Noxolotl.png", "wikiUrl": "https://temtem.gamepedia.com/Noxolotl", "stats": { "hp": 72, "sta": 49, "spd": 57, "atk": 61, "def": 78, "spatk": 79, "spdef": 45, "total": 441 }, "traits": ["Trance", "Toxic Farewell"], "details": { "height": { "cm": 177, "inches": 69 }, "weight": { "kg": 122, "lbs": 269 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Hypnosis", "source": "Levelling" }, { "name": "Stare", "source": "Levelling" }, { "name": "Venomous Claws", "source": "Levelling" }, { "name": "Toxic Ink", "source": "Levelling" }, { "name": "Tentacle Whip", "source": "Levelling" }, { "name": "Harmful Lick", "source": "Levelling" }, { "name": "Hallucination", "source": "Levelling" }, { "name": "Turbo Choreography", "source": "TechniqueCourses" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }, { "name": "Madness Buff", "source": "TechniqueCourses" }, { "name": "Narcoleptic Hit", "source": "Breeding" }], "trivia": ["Noxolotl's name comes from the combination of the words noxious and axolotl."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 105, "name": "Toxolotl", "stage": 1, "levels": 30 }, { "number": 106, "name": "Noxolotl", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/55/Noxolotl.png/250px-Noxolotl.png?version=8e3345c350c224df38b1aa079719fa81", "locations": [], "icon": "/images/portraits/temtem/large/Noxolotl.png" }, { "number": 107, "name": "Blooze", "types": ["Toxic"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/ff/Blooze.png/50px-Blooze.png", "wikiUrl": "https://temtem.gamepedia.com/Blooze", "stats": { "hp": 68, "sta": 50, "spd": 33, "atk": 43, "def": 52, "spatk": 46, "spdef": 54, "total": 346 }, "traits": ["Toxic Skin", "Bully"], "details": { "height": { "cm": 178, "inches": 70 }, "weight": { "kg": 180, "lbs": 396 } }, "techniques": [{ "name": "Nibble", "source": "Levelling" }, { "name": "Novice Punch", "source": "Levelling" }, { "name": "Shy Shield", "source": "Levelling" }, { "name": "Heavy Blow", "source": "Levelling" }, { "name": "Toxic Slime", "source": "Levelling" }, { "name": "Toxic Ink", "source": "Levelling" }, { "name": "Antitoxins", "source": "TechniqueCourses" }, { "name": "Confiscate", "source": "TechniqueCourses" }, { "name": "Madness Buff", "source": "TechniqueCourses" }], "trivia": ["Blooze's name comes from the combination of the words blob and ooze."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 107, "name": "Blooze", "stage": 1, "levels": 25 }, { "number": 108, "name": "Goolder", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/ff/Blooze.png/250px-Blooze.png?version=800b800a0899827cd8f5ef022376290e", "locations": [{ "location": "Corrupted Badlands", "island": "Tucma", "frequency": "Rare", "level": "25" }], "icon": "/images/portraits/temtem/large/Blooze.png" }, { "number": 108, "name": "Goolder", "types": ["Toxic"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/26/Goolder.png/50px-Goolder.png", "wikiUrl": "https://temtem.gamepedia.com/Goolder", "stats": { "hp": 120, "sta": 70, "spd": 10, "atk": 64, "def": 56, "spatk": 68, "spdef": 56, "total": 444 }, "traits": ["Strong Liver", "Punching Bag"], "details": { "height": { "cm": 222, "inches": 87 }, "weight": { "kg": 1700, "lbs": 3748 } }, "techniques": [{ "name": "Nibble", "source": "Levelling" }, { "name": "Novice Punch", "source": "Levelling" }, { "name": "Shy Shield", "source": "Levelling" }, { "name": "Heavy Blow", "source": "Levelling" }, { "name": "Toxic Slime", "source": "Levelling" }, { "name": "Toxic Ink", "source": "Levelling" }, { "name": "Bamboozle", "source": "Levelling" }, { "name": "Pollution", "source": "Levelling" }, { "name": "Harmful Lick", "source": "Levelling" }, { "name": "Antitoxins", "source": "TechniqueCourses" }, { "name": "Confiscate", "source": "TechniqueCourses" }, { "name": "Madness Buff", "source": "TechniqueCourses" }], "trivia": ["Goolder's name comes from the combination of the words goo and ooze.", "Goolder is currently the Temtem with the highest HP stat (120)."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 107, "name": "Blooze", "stage": 1, "levels": 25 }, { "number": 108, "name": "Goolder", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/26/Goolder.png/250px-Goolder.png?version=f21bc7b49920b4f0743b39e465a6843b", "locations": [], "icon": "/images/portraits/temtem/large/Goolder.png" }, { "number": 109, "name": "Zephyruff", "types": ["Toxic", "Wind"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/f7/Zephyruff.png/50px-Zephyruff.png", "wikiUrl": "https://temtem.gamepedia.com/Zephyruff", "stats": { "hp": 58, "sta": 34, "spd": 68, "atk": 43, "def": 47, "spatk": 50, "spdef": 51, "total": 351 }, "traits": ["Toxic Affinity", "Air Specialist"], "details": { "height": { "cm": 92, "inches": 36 }, "weight": { "kg": 37, "lbs": 82 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Wind Blade", "source": "Levelling" }, { "name": "Venomous Claws", "source": "Levelling" }, { "name": "Multiple Pecks", "source": "Levelling" }, { "name": "Blizzard", "source": "Levelling" }, { "name": "Toxic Plume", "source": "Levelling" }, { "name": "Tornado", "source": "Levelling" }, { "name": "Feather Gatling", "source": "Breeding" }], "trivia": ["Zephyruff was originally shown on the \"Presenting our first Breeder Temtem\" Kickstarter update.", "Zephyruff is the first of the five lines of Breeder Temtem. Breeder Temtem are special fan-created ones that were available as a Kickstarter Tier for $6,000 USD. This specific line was made by Soma Ghost.", "\"Zephyruff\" is a combination of Zephyr and Ruff. \"Zephyr\" means a gentle breeze or wind along with deriving from Zephyros, the Greek God of the West Wind. \"Ruff\" is a piece of clothing that was popular during the sixteenth and seventeenth century with more modern uses being by Bishops.", "Zephyruff was nicknamed by Manly Fairy. While there was going to be a poll for the name, Soma Ghost decided to pick this name along with Volarend before the polling finished. The name leading the poll at that moment was Entu. The leading name for Volarend was Siotu"], "evolution": { "stage": 1, "evolutionTree": [{ "number": 109, "name": "Zephyruff", "stage": 1, "levels": 22 }, { "number": 110, "name": "Volarend", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/f7/Zephyruff.png/250px-Zephyruff.png?version=420e27d345e6f1e1834c3391443a19b1", "locations": [{ "location": "Corrupted Badlands", "island": "Tucma", "frequency": "Uncommon (60%)", "level": "24-28" }, { "location": "Kupeleleza", "island": "Tucma", "frequency": "Uncommon (35%-60%)", "level": "30-37" }, { "location": "Small island left of Kupeleleza", "island": "Tucma", "frequency": "Common (95%)", "level": "35-37" }], "icon": "/images/portraits/temtem/large/Zephyruff.png" }, { "number": 110, "name": "Volarend", "types": ["Toxic", "Wind"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/87/Volarend.png/50px-Volarend.png", "wikiUrl": "https://temtem.gamepedia.com/Volarend", "stats": { "hp": 69, "sta": 38, "spd": 74, "atk": 51, "def": 61, "spatk": 68, "spdef": 96, "total": 457 }, "traits": ["Aerobic", "Anaerobic"], "details": { "height": { "cm": 205, "inches": 80 }, "weight": { "kg": 92, "lbs": 203 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Wind Blade", "source": "Levelling" }, { "name": "Venomous Claws", "source": "Levelling" }, { "name": "Multiple Pecks", "source": "Levelling" }, { "name": "Blizzard", "source": "Levelling" }, { "name": "Toxic Plume", "source": "Levelling" }, { "name": "Tornado", "source": "Levelling" }, { "name": "Hyperkinetic Strike", "source": "Levelling" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }, { "name": "Rend", "source": "TechniqueCourses" }, { "name": "Feather Gatling", "source": "Breeding" }], "trivia": ["Volarend was originally shown on the \"Presenting our first Breeder Temtem\" Kickstarter update.", "Volarend is the first of the five lines of Breeder Temtem. Breeder Temtem are special fan-created ones that were available as a Kickstarter Tier for $6,000 USD. This specific line was made by Soma Ghost.", "\"Volarend\" is a combination of Volare and Rend. \"Volare\" is a Latin and Italian word, meaning fly or to fly. \"Rend\" is a word, meaning to tear.", "Volarend was nicknamed by Manly Fairy. While there was going to be a poll for the name, Soma Ghost decided to pick this name along with Zephyruff before the polling finished. The name leading the poll at that moment was Siotu. The leading name for Zephyruff was Entu"], "evolution": { "stage": 2, "evolutionTree": [{ "number": 109, "name": "Zephyruff", "stage": 1, "levels": 22 }, { "number": 110, "name": "Volarend", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/87/Volarend.png/250px-Volarend.png?version=c897ec310683c1e52035cbb7fdfbba54", "locations": [{ "location": "Small island left of Kupeleleza main route", "island": "Tucma", "frequency": "Very Rare (5%)", "level": "37-39" }], "icon": "/images/portraits/temtem/large/Volarend.png" }, { "number": 113, "name": "Ganki", "types": ["Electric", "Wind"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/b/bc/Ganki.png/50px-Ganki.png", "wikiUrl": "https://temtem.gamepedia.com/Ganki", "stats": { "hp": 38, "sta": 46, "spd": 61, "atk": 57, "def": 38, "spatk": 62, "spdef": 73, "total": 375 }, "traits": ["Botanophobia", "Cold-Natured"], "details": { "height": { "cm": 105, "inches": 41 }, "weight": { "kg": 14, "lbs": 31 } }, "techniques": [{ "name": "Sparks", "source": "Levelling" }, { "name": "Nimble", "source": "Levelling" }, { "name": "Wind Blade", "source": "Levelling" }, { "name": "DC Beam", "source": "Levelling" }, { "name": "Chain Lightning", "source": "Levelling" }, { "name": "Drill Impact", "source": "Levelling" }, { "name": "Electric Storm", "source": "Levelling" }, { "name": "Turbo Choreography", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }, { "name": "Tesla Prison", "source": "Breeding" }], "trivia": ["Ganki was first revealed via Twitter.", "Ganki is a combination of ga (moth) + denki (electric current), both being Japanese words.", "Ganki has an emote on the official Temtem discord.", "Prior to alpha 0.2.5 Ganki learned hypnosis.", "Along with Houchic, Ganki has the lowest HP stat (38) of all Temtem."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 113, "name": "Ganki", "stage": 1, "levels": 27 }, { "number": 114, "name": "Gazuma", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/b/bc/Ganki.png/250px-Ganki.png?version=d18706728e9cc3706caea19e24063ac4", "locations": [{ "location": "Thalassian Cliffs", "island": "Deniz", "frequency": "Common", "level": "5-8" }, { "location": "The Gifted Bridges", "island": "Deniz", "frequency": "Common", "level": "" }, { "location": "Windward Fort", "island": "Deniz", "frequency": "Common", "level": "12-14" }], "icon": "/images/portraits/temtem/large/Ganki.png" }, { "number": 114, "name": "Gazuma", "types": ["Electric", "Wind"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/5c/Gazuma.png/50px-Gazuma.png", "wikiUrl": "https://temtem.gamepedia.com/Gazuma", "stats": { "hp": 46, "sta": 53, "spd": 67, "atk": 68, "def": 43, "spatk": 81, "spdef": 91, "total": 449 }, "traits": ["Receptive", "Fast Charge"], "details": { "height": { "cm": 145, "inches": 57 }, "weight": { "kg": 28, "lbs": 63 } }, "techniques": [{ "name": "Sparks", "source": "Levelling" }, { "name": "Nimble", "source": "Levelling" }, { "name": "Wind Blade", "source": "Levelling" }, { "name": "DC Beam", "source": "Levelling" }, { "name": "Chain Lightning", "source": "Levelling" }, { "name": "Drill Impact", "source": "Levelling" }, { "name": "Electric Storm", "source": "Levelling" }, { "name": "Turbo Charge", "source": "Levelling" }, { "name": "Turbo Choreography", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }, { "name": "Cage", "source": "TechniqueCourses" }, { "name": "Tesla Prison", "source": "Breeding" }], "trivia": ["Gazuma's name comes from the combination of the words Ga (moth in Japanese) and Inazuma (lightning strike in Japanese).", "Prior to alpha 0.2.5 Gazuma learned hypnosis."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 113, "name": "Ganki", "stage": 1, "levels": 27 }, { "number": 114, "name": "Gazuma", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/5/5c/Gazuma.png/250px-Gazuma.png?version=358b25834f69fa0d65e3fa4fbc276f96", "locations": [], "icon": "/images/portraits/temtem/large/Gazuma.png" }, { "number": 115, "name": "Oceara", "types": ["Water"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/26/Oceara.png/50px-Oceara.png", "wikiUrl": "https://temtem.gamepedia.com/Oceara", "stats": { "hp": 64, "sta": 42, "spd": 100, "atk": 54, "def": 51, "spatk": 110, "spdef": 65, "total": 486 }, "traits": ["Hydrologist", "Mithridatism"], "details": { "height": { "cm": 222, "inches": 87 }, "weight": { "kg": 52, "lbs": 114 } }, "techniques": [{ "name": "Kick", "source": "Levelling" }, { "name": "High-pressure Water", "source": "Levelling" }, { "name": "Tsunami", "source": "Levelling" }, { "name": "Ice Shuriken", "source": "Levelling" }, { "name": "Blizzard", "source": "Levelling" }, { "name": "Flood", "source": "Levelling" }, { "name": "Aquatic Whirlwind", "source": "Levelling" }], "trivia": ["Oceara appeared for the first time in the Mounts Kickstarter update, though little was known about it. Its official name and description were revealed on the official Temtem Twitter on 19/11/2018.", "Oceara's name is derived from ocean and Mearas (breed of wild horses from The Lord of the Rings).", "As of v0.5.8, Oceara has the highest base stat total of all Temtem (486).", "Oceara seems to be based off the Qilin/Kirin, antelopine divine creatures in Chinese and Japanese mythology respectively."], "evolution": { "evolves": false }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/26/Oceara.png/250px-Oceara.png?version=2d39fe51d12d259fe1223416010943db", "locations": [{ "location": "Aguamarina Caves (Waterfall floor)", "island": "Deniz", "frequency": "Very Rare (5%)", "level": "" }], "icon": "/images/portraits/temtem/large/Oceara.png" }, { "number": 122, "name": "Shuine", "types": ["Crystal", "Water"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/d/d9/Shuine.png/50px-Shuine.png", "wikiUrl": "https://temtem.gamepedia.com/Shuine", "stats": { "hp": 43, "sta": 90, "spd": 81, "atk": 67, "def": 49, "spatk": 72, "spdef": 60, "total": 462 }, "traits": ["Immunity", "Guardian"], "details": { "height": { "cm": 250, "inches": 98 }, "weight": { "kg": 68, "lbs": 149 } }, "techniques": [{ "name": "Nibble", "source": "Levelling" }, { "name": "Glass Blade", "source": "Levelling" }, { "name": "Aqua Bullet Hell", "source": "Levelling" }, { "name": "Iced Stalactite", "source": "Levelling" }, { "name": "Flood", "source": "Levelling" }, { "name": "Crystal Bite", "source": "Levelling" }, { "name": "Ninja Jutsu", "source": "Levelling" }, { "name": "Sacrifice", "source": "Levelling" }, { "name": "Antitoxins", "source": "TechniqueCourses" }, { "name": "Confiscate", "source": "TechniqueCourses" }, { "name": "Relax", "source": "TechniqueCourses" }], "trivia": ["Shuine's name derives from the words shui (Water in Chinese) and pristine.", "Shuina is based on the feathered deities of Mesoamerican religions, with western dragon ears."], "evolution": { "evolves": false }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/d/d9/Shuine.png/250px-Shuine.png?version=eaf40b01f6d3abacab71b426f04889ca", "locations": [{ "location": "Kakama Cenote", "island": "Tucma", "frequency": "5%", "level": "37-41" }], "icon": "/images/portraits/temtem/large/Shuine.png" }, { "number": 123, "name": "Nessla", "types": ["Water", "Electric"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/81/Nessla.png/50px-Nessla.png", "wikiUrl": "https://temtem.gamepedia.com/Nessla", "stats": { "hp": 45, "sta": 58, "spd": 66, "atk": 76, "def": 50, "spatk": 70, "spdef": 72, "total": 437 }, "traits": ["Electric Synthesize", "Hydrologist"], "details": { "height": { "cm": 190, "inches": 74 }, "weight": { "kg": 65, "lbs": 144 } }, "techniques": [{ "name": "Bubbles", "source": "Levelling" }, { "name": "Water Blade", "source": "Levelling" }, { "name": "Chain Lightning", "source": "Levelling" }, { "name": "Sparks", "source": "Levelling" }, { "name": "Strangle", "source": "Levelling" }, { "name": "Tesla Prison", "source": "Levelling" }, { "name": "Stare", "source": "Levelling" }, { "name": "Iced Stalactite", "source": "Levelling" }, { "name": "Electric Storm", "source": "Levelling" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Rend", "source": "TechniqueCourses" }], "trivia": ["Nessla was originally unnamed #33 on a list of scrapped Temtem that was to be voted to bring back on Kickstarter Update #2.", "\"Nessla\" is a combination of Nessy and Tesla. Nessy is likely a reference to the Loch Ness Monster whom is affectionately known as \"Nessie\" and Nikola Tesla was a famous scientist who developed the alternating current (AC) electricity supply system.", "Nessla was one of the two winners of the Choose a Temtem backer mini-game during the Kickstarter. Its name was proposed by a community member (JMick) in Official Discord, and later chosen as the winner during the Choose a Temtem names poll in the 6th update of Temtem's Kickstarter.", "Nessla is given to the player as a part of the main story quest Shipwrecked in Tucma!"], "evolution": { "evolves": false }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/8/81/Nessla.png/250px-Nessla.png?version=f3f2884421cc242fa075c15059360426", "locations": [{ "location": "Thalassian Cliffs", "island": "Deniz", "frequency": "Very Rare", "level": "17-18" }, { "location": "Sillaro River (southeastern pool bordering Turquesa)", "island": "Deniz", "frequency": "Very Rare", "level": "14-16" }], "icon": "/images/portraits/temtem/large/Nessla.png" }, { "number": 124, "name": "Valiar", "types": ["Unknown"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/7b/Valiar.png/50px-Valiar.png", "wikiUrl": "https://temtem.gamepedia.com/Valiar", "stats": { "hp": 0, "sta": 0, "spd": 0, "atk": 0, "def": 0, "spatk": 0, "spdef": 0, "total": 0 }, "traits": [], "details": { "height": { "cm": 0, "inches": 0 }, "weight": { "kg": 0, "lbs": 0 } }, "techniques": [], "trivia": ["Valiar's name comes from the combination of the words Vacio (empty in Spanish) + Ampliar (extend in Spanish) in reference to the fact that they use their ear holes to amplify their mental powers.", "Valiar was first revealed through its early concept art via Twitter.", "Valiar looks very different in its concept art compared to its final design. The main colouration is a dark and light purple, and Valiar is generally depicted with a stripe pattern instead of a spot pattern. In addition, some key details like the thick neck tuft are not present. The eyes have a completely different shape and colour compared to the final version.", "Judging by its description and appearance, Valiar will likely be a Mental-type Temtem."], "evolution": { "evolves": false }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/7b/Valiar.png/250px-Valiar.png?version=9e7a48bdc2aa27a198957eefd0b5c3f4", "locations": [], "icon": "/images/portraits/temtem/large/Valiar.png" }, { "number": 127, "name": "Kalazu", "types": ["Water"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/fc/Kalazu.png/50px-Kalazu.png", "wikiUrl": "https://temtem.gamepedia.com/Kalazu", "stats": { "hp": 63, "sta": 24, "spd": 28, "atk": 54, "def": 70, "spatk": 38, "spdef": 44, "total": 321 }, "traits": ["Mithridatism", "Hydrologist"], "details": { "height": { "cm": 114, "inches": 44 }, "weight": { "kg": 52, "lbs": 115 } }, "techniques": [{ "name": "Bubbles", "source": "Levelling" }, { "name": "Tentacle Whip", "source": "Levelling" }, { "name": "Water Blade", "source": "Levelling" }, { "name": "Strangle", "source": "Levelling" }, { "name": "Aqua Stone", "source": "Levelling" }, { "name": "High-pressure Water", "source": "Levelling" }, { "name": "Humiliating Slap", "source": "Levelling" }, { "name": "Tsunami", "source": "TechniqueCourses" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Iced Stalactite", "source": "Breeding" }, { "name": "Toxic Slime", "source": "Breeding" }, { "name": "Clinch", "source": "Breeding" }], "trivia": ["Kalazu was revealed to the public on Kickstarter update #13.", "Kalazu's name is a combination of the words Calamari + Azure.", "Kalazu's name was suggested by the discord user Yobri#7969 in the naming suggestion poll from August 14."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 127, "name": "Kalazu", "stage": 1, "levels": 18 }, { "number": 128, "name": "Kalabyss", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/f/fc/Kalazu.png/250px-Kalazu.png?version=cf1db3bce51a47d2974bb53de228edcb", "locations": [{ "location": "Thalassian Cliffs", "island": "Deniz", "frequency": "Common", "level": "" }, { "location": "Sillaro River", "island": "Deniz", "frequency": "Common", "level": "" }, { "location": "Aguamarina Caves", "island": "Deniz", "frequency": "Common", "level": "" }], "icon": "/images/portraits/temtem/large/Kalazu.png" }, { "number": 128, "name": "Kalabyss", "types": ["Water", "Toxic"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/9/90/Kalabyss.png/50px-Kalabyss.png", "wikiUrl": "https://temtem.gamepedia.com/Kalabyss", "stats": { "hp": 82, "sta": 35, "spd": 37, "atk": 75, "def": 100, "spatk": 65, "spdef": 55, "total": 449 }, "traits": ["Botanophobia", "Loneliness"], "details": { "height": { "cm": 170, "inches": 66 }, "weight": { "kg": 163, "lbs": 359 } }, "techniques": [{ "name": "Bubbles", "source": "Levelling" }, { "name": "Tentacle Whip", "source": "Levelling" }, { "name": "Water Blade", "source": "Levelling" }, { "name": "Strangle", "source": "Levelling" }, { "name": "Aqua Stone", "source": "Levelling" }, { "name": "Toxic Ink", "source": "Levelling" }, { "name": "High-pressure Water", "source": "Levelling" }, { "name": "Humiliating Slap", "source": "Levelling" }, { "name": "Flood", "source": "Levelling" }, { "name": "Tsunami", "source": "TechniqueCourses" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Major Slash", "source": "TechniqueCourses" }, { "name": "Iced Stalactite", "source": "Breeding" }, { "name": "Toxic Slime", "source": "Breeding" }, { "name": "Clinch", "source": "Breeding" }], "trivia": ["Kalabyss was revealed to the public on the official discord and the Kickstarter update #30.", "Kalabyss' name comes from the combination of the words Calamari + Abyss.", "Kalabyss' name (originally Calabyss) was suggested by the discord user lepastro#3547 in the naming suggestion poll from August 14 and was later modified to Kalabyss to better match its pre-evolutions name."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 127, "name": "Kalazu", "stage": 1, "levels": 18 }, { "number": 128, "name": "Kalabyss", "stage": 2 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/9/90/Kalabyss.png/250px-Kalabyss.png?version=f0f8a29fec8bbdfd9401e190524b0719", "locations": [{ "location": "Xolot Reservoir", "island": "Tucma", "frequency": "Rare (10%)", "level": "29-33" }], "icon": "/images/portraits/temtem/large/Kalabyss.png" }, { "number": 129, "name": "Adoroboros", "types": ["Toxic", "Mental"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/26/Adoroboros.png/50px-Adoroboros.png", "wikiUrl": "https://temtem.gamepedia.com/Adoroboros", "stats": { "hp": 66, "sta": 66, "spd": 60, "atk": 29, "def": 42, "spatk": 70, "spdef": 110, "total": 443 }, "traits": ["Synergy Master", "Toxic Skin"], "details": { "height": { "cm": 88, "inches": 34 }, "weight": { "kg": 14, "lbs": 30 } }, "techniques": [{ "name": "Tail Strike", "source": "Levelling" }, { "name": "Energy Manipulation", "source": "Levelling" }, { "name": "Toxic Ink", "source": "Levelling" }, { "name": "Psychic Collaborator", "source": "Levelling" }, { "name": "Beta Burst", "source": "Levelling" }, { "name": "Pollution", "source": "Levelling" }, { "name": "Lullaby", "source": "Levelling" }, { "name": "Sacrifice", "source": "Levelling" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }, { "name": "Antitoxins", "source": "TechniqueCourses" }, { "name": "Confiscate", "source": "TechniqueCourses" }, { "name": "Relax", "source": "TechniqueCourses" }, { "name": "Hypnosis", "source": "Breeding" }, { "name": "Held Anger", "source": "Breeding" }, { "name": "Inner Spirit", "source": "Breeding" }], "trivia": ["Adoroboros was originally shown on the Choose-a-Temtem V3 poll, currently unnamed. It got second place with 554 votes, just 25 votes behind the winner.", "\"Adoroboros\" is a combination of adorable and ouroboros. \"Adorable\" is an English word meaning extremely cute. \"Ouroboros\" is a famous Egyptian symbol depicting a serpent or dragon eating its tail and is notable in its use in alchemy. The term itself derives from Ancient Greek \"οὐροβόρος\" which is split between οὐρο (tail), βορά (food), and βιβρώσκω (I eat).\nAdoroboros was first nicknamed Adoroboros by Temtem Discord community member Husky. The nickname was later put into an official poll for naming the Temtem by the Discord member TMTrainer. It won the poll with 157 votes, becoming the official name of #129.", "Adoroboros was first nicknamed Adoroboros by Temtem Discord community member Husky. The nickname was later put into an official poll for naming the Temtem by the Discord member TMTrainer. It won the poll with 157 votes, becoming the official name of #129."], "evolution": { "evolves": false }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/26/Adoroboros.png/250px-Adoroboros.png?version=b88b44f15eb65ebe8a64356b6ebabfca", "locations": [{ "location": "Xolot Reservoir", "island": "Tucma", "frequency": "35%", "level": "28-31" }], "icon": "/images/portraits/temtem/large/Adoroboros.png" }, { "number": 130, "name": "Tuwai", "types": ["Wind"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/d/db/Tuwai.png/50px-Tuwai.png", "wikiUrl": "https://temtem.gamepedia.com/Tuwai", "stats": { "hp": 54, "sta": 47, "spd": 58, "atk": 62, "def": 45, "spatk": 60, "spdef": 47, "total": 373 }, "traits": ["Spoilsport", "Resilient"], "details": { "height": { "cm": 106, "inches": 41 }, "weight": { "kg": 23, "lbs": 52 } }, "techniques": [{ "name": "Peck", "source": "Levelling" }, { "name": "Wind Blade", "source": "Levelling" }, { "name": "Shrill Voice", "source": "Levelling" }, { "name": "Feather Gatling", "source": "Levelling" }, { "name": "Wind Burst", "source": "Levelling" }, { "name": "Multiple Pecks", "source": "Levelling" }, { "name": "Humiliating Slap", "source": "Levelling" }, { "name": "Tornado", "source": "Levelling" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }], "trivia": ["Tuwai’s name is derived from tukana (toucan in Hawaiian) and wai (juice in Hawaiian)."], "evolution": { "stage": 1, "evolutionTree": [], "evolves": true, "type": "special", "description": "Tuwai can evolve into Tuvine by taking one to the Crystal Shrine, and selecting it. This requires that you beat the Cultist Hunt side-quest." }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/d/db/Tuwai.png/250px-Tuwai.png?version=805a9cfdfcc1eda50fcb2c28b12544bc", "locations": [{ "location": "Crystal Shrine in Corrupted Badlands", "island": "Tucma", "frequency": "5%", "level": "5-10" }], "icon": "/images/portraits/temtem/large/Tuwai.png" }, { "number": 133, "name": "Tuvine", "types": ["Wind", "Crystal"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/7e/Tuvine.png/50px-Tuvine.png", "wikiUrl": "https://temtem.gamepedia.com/Tuvine", "stats": { "hp": 57, "sta": 47, "spd": 65, "atk": 70, "def": 111, "spatk": 60, "spdef": 47, "total": 457 }, "traits": ["Receptive", "Determined"], "details": { "height": { "cm": 172, "inches": 67 }, "weight": { "kg": 87, "lbs": 191 } }, "techniques": [{ "name": "Peck", "source": "Levelling" }, { "name": "Wind Blade", "source": "Levelling" }, { "name": "Shrill Voice", "source": "Levelling" }, { "name": "Feather Gatling", "source": "Levelling" }, { "name": "Wind Burst", "source": "Levelling" }, { "name": "Multiple Pecks", "source": "Levelling" }, { "name": "Humiliating Slap", "source": "Levelling" }, { "name": "Tornado", "source": "Levelling" }, { "name": "Crystal Plume Gatling", "source": "Levelling" }, { "name": "Diamond Fort", "source": "Levelling" }, { "name": "Noxious Bomb", "source": "TechniqueCourses" }], "trivia": ["Tuvine's name derives from the words tukana (Tucan in Hawaian) and olivine (green gem).", "Tuvine is one of the elements that it can evolve into there will be more added in future updates", "Tuvine is currently the Temtem with the highest Defense stat."], "evolution": { "stage": 2, "evolutionTree": [], "evolves": true, "type": "special", "description": "Tuwai can evolve into Tuvine by taking one to the Crystal Shrine, and selecting it. This requires that you beat the Cultist Hunt side-quest." }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/7/7e/Tuvine.png/250px-Tuvine.png?version=2f3b9f3ddfd21caf0e4e7611a5e41407", "locations": [{ "location": "Crystal Shrine", "island": "Tucma", "frequency": "Evolve at shrine with Tuwai", "level": "Any" }], "icon": "/images/portraits/temtem/large/Tuvine.png" }, { "number": 137, "name": "Kinu", "types": ["Nature", "Mental"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/47/Kinu.png/50px-Kinu.png", "wikiUrl": "https://temtem.gamepedia.com/Kinu", "stats": { "hp": 47, "sta": 74, "spd": 74, "atk": 53, "def": 41, "spatk": 69, "spdef": 96, "total": 454 }, "traits": ["Protector", "Benefactor"], "details": { "height": { "cm": 93, "inches": 36 }, "weight": { "kg": 16, "lbs": 37 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Sharp Leaf", "source": "Levelling" }, { "name": "Hypnosis", "source": "Levelling" }, { "name": "Intimidation", "source": "Levelling" }, { "name": "Revitalize", "source": "Levelling" }, { "name": "Beta Burst", "source": "Levelling" }, { "name": "Gaia", "source": "Levelling" }, { "name": "Lifeful Sap", "source": "Levelling" }, { "name": "Sacrifice", "source": "Levelling" }, { "name": "Stone Wall", "source": "TechniqueCourses" }, { "name": "Turbo Choreography", "source": "TechniqueCourses" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Lullaby", "source": "Breeding" }], "trivia": ["Kinu is shown on the thumbnail of the Kickstarter trailer.", "It is also on the Kickstarter exclusive painted statue alongside a Temtem Tamer.", "Kinu's name comes from the word Kinushi (Forest spirits in Japanese culture)"], "evolution": { "evolves": false }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/47/Kinu.png/250px-Kinu.png?version=c95a1071861eff359212a23f041a96ac", "locations": [{ "location": "Giant Banyan", "island": "Omninesia", "frequency": "Very Rare (5%)", "level": "24-28" }], "icon": "/images/portraits/temtem/large/Kinu.png" }, { "number": 138, "name": "Vulvir", "types": ["Fire", "Earth"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/40/Vulvir.png/50px-Vulvir.png", "wikiUrl": "https://temtem.gamepedia.com/Vulvir", "stats": { "hp": 59, "sta": 54, "spd": 57, "atk": 47, "def": 64, "spatk": 47, "spdef": 31, "total": 359 }, "traits": ["Camaraderie", "Caffeinated"], "details": { "height": { "cm": 76, "inches": 29 }, "weight": { "kg": 45, "lbs": 99 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Stare", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Fire Flame", "source": "Levelling" }, { "name": "Head Ram", "source": "Levelling" }, { "name": "Embers", "source": "Levelling" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Magma Cannon", "source": "TechniqueCourses" }, { "name": "Earth Wave", "source": "Breeding" }, { "name": "Extinction", "source": "Breeding" }], "trivia": ["Vulvir's name derives from the words Vulcan (Roman God of fire) and hervir (Boil in Spanish)."], "evolution": { "stage": 1, "evolutionTree": [{ "number": 138, "name": "Vulvir", "stage": 1, "levels": 14 }, { "number": 139, "name": "Vulor", "stage": 2, "levels": 28 }, { "number": 140, "name": "Vulcrane", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/4/40/Vulvir.png/250px-Vulvir.png?version=f5f2e45a794db7f97995c215897efcc4", "locations": [], "icon": "/images/portraits/temtem/large/Vulvir.png" }, { "number": 139, "name": "Vulor", "types": ["Fire", "Earth"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/6/61/Vulor.png/50px-Vulor.png", "wikiUrl": "https://temtem.gamepedia.com/Vulor", "stats": { "hp": 65, "sta": 59, "spd": 63, "atk": 49, "def": 71, "spatk": 49, "spdef": 32, "total": 388 }, "traits": ["Pyromaniac", "Individualist"], "details": { "height": { "cm": 163, "inches": 64 }, "weight": { "kg": 94, "lbs": 208 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Stare", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Fire Flame", "source": "Levelling" }, { "name": "Head Ram", "source": "Levelling" }, { "name": "Embers", "source": "Levelling" }, { "name": "Double Kick", "source": "Levelling" }, { "name": "Stone Ball", "source": "Levelling" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Magma Cannon", "source": "TechniqueCourses" }, { "name": "Rend", "source": "TechniqueCourses" }, { "name": "Earth Wave", "source": "Breeding" }, { "name": "Extinction", "source": "Breeding" }], "trivia": ["Vulor's name derives from the words Vulcano (Roman God of fire) and calor (Heat in Spanish)."], "evolution": { "stage": 2, "evolutionTree": [{ "number": 138, "name": "Vulvir", "stage": 1, "levels": 14 }, { "number": 139, "name": "Vulor", "stage": 2, "levels": 28 }, { "number": 140, "name": "Vulcrane", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/6/61/Vulor.png/250px-Vulor.png?version=90c3f46db61376a05daf98b50056546a", "locations": [{ "location": "Mines of Mictlan", "island": "Tucma", "frequency": "?", "level": "?" }], "icon": "/images/portraits/temtem/large/Vulor.png" }, { "number": 140, "name": "Vulcrane", "types": ["Fire", "Earth"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/b/b3/Vulcrane.png/50px-Vulcrane.png", "wikiUrl": "https://temtem.gamepedia.com/Vulcrane", "stats": { "hp": 76, "sta": 65, "spd": 73, "atk": 74, "def": 86, "spatk": 64, "spdef": 35, "total": 473 }, "traits": ["Receptive", "Vigorous"], "details": { "height": { "cm": 233, "inches": 91 }, "weight": { "kg": 142, "lbs": 313 } }, "techniques": [{ "name": "Scratch", "source": "Levelling" }, { "name": "Stare", "source": "Levelling" }, { "name": "Sand Splatter", "source": "Levelling" }, { "name": "Fire Flame", "source": "Levelling" }, { "name": "Head Ram", "source": "Levelling" }, { "name": "Embers", "source": "Levelling" }, { "name": "Double Kick", "source": "Levelling" }, { "name": "Stone Ball", "source": "Levelling" }, { "name": "Ninja Jutsu", "source": "Levelling" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Magma Cannon", "source": "TechniqueCourses" }, { "name": "Rend", "source": "TechniqueCourses" }, { "name": "Major Slash", "source": "TechniqueCourses" }, { "name": "Earth Wave", "source": "Breeding" }, { "name": "Extinction", "source": "Breeding" }], "trivia": ["Vulcrane's name derives from the words Vulcano (Roman God of fire) and craneo (Cranium in Spanish).", "A Vulcrane is given to the player during the main story quest Shipwrecked in Tucma!"], "evolution": { "stage": 3, "evolutionTree": [{ "number": 138, "name": "Vulvir", "stage": 1, "levels": 14 }, { "number": 139, "name": "Vulor", "stage": 2, "levels": 28 }, { "number": 140, "name": "Vulcrane", "stage": 3 }], "evolves": true, "type": "level" }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/b/b3/Vulcrane.png/250px-Vulcrane.png?version=8f0e791f8cda4fa1c5fb998a830385b4", "locations": [{ "location": "Shipwrecked in Tucma! Quest Reward", "island": "Tucma", "frequency": "One-Time Reward", "level": "33" }], "icon": "/images/portraits/temtem/large/Vulcrane.png" }, { "number": 141, "name": "Pigepic", "types": ["Wind"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/20/Pigepic.png/50px-Pigepic.png", "wikiUrl": "https://temtem.gamepedia.com/Pigepic", "stats": { "hp": 54, "sta": 72, "spd": 58, "atk": 60, "def": 72, "spatk": 45, "spdef": 92, "total": 453 }, "traits": ["Friendship", "Fainted Curse"], "details": { "height": { "cm": 69, "inches": 27 }, "weight": { "kg": 64, "lbs": 141 } }, "techniques": [{ "name": "Bamboozle", "source": "Levelling" }, { "name": "Scratch", "source": "Levelling" }, { "name": "Nibble", "source": "Levelling" }, { "name": "Nimble", "source": "Levelling" }, { "name": "Heavy Blow", "source": "Levelling" }, { "name": "Wind Burst", "source": "Levelling" }, { "name": "Tornado", "source": "Levelling" }, { "name": "Oshi-Dashi", "source": "Levelling" }, { "name": "Stone Wall", "source": "TechniqueCourses" }, { "name": "Turbo Choreography", "source": "TechniqueCourses" }, { "name": "Wake Up", "source": "TechniqueCourses" }, { "name": "Misogi", "source": "TechniqueCourses" }, { "name": "Confiscate", "source": "TechniqueCourses" }, { "name": "Relax", "source": "TechniqueCourses" }, { "name": "Major Slash", "source": "TechniqueCourses" }, { "name": "Hypnosis", "source": "Breeding" }, { "name": "Head Charge", "source": "Breeding" }, { "name": "Sharp Rain", "source": "Breeding" }], "trivia": ["\"Pigepic\" is a portmanteau of \"pig\", an omnivorous mammal often kept in captivity, and \"epic\", a word meaning large or amazing.", "Pigepic's design is likely based on the English phrase, \"when pigs fly\", which is used to describe an impossible situation.", "Despite being Temtem number #141, Pigepic was the first Temtem to be revealed to the public via Twitter.", "Pigepic has two emotes on the official Temtem discord, originally alongside Pewki's single emote.", "The Temtem Discord community created “cults” worshipping Saku and Pigepic. The official Twitter account for Temtem later created a tweet pitting the “Sakult” and “Team Porket” against each other. The Sakult is currently the winner."], "evolution": { "evolves": false }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/2/20/Pigepic.png/250px-Pigepic.png?version=d8e3923974707a3ff5f64a5c62441ba2", "locations": [{ "location": "Prasine Coast", "island": "Deniz", "frequency": "Very Rare (5%)", "level": "4-6" }, { "location": "Thalassian Cliffs", "island": "Deniz", "frequency": "Common (50%-100%)", "level": "5-11" }, { "location": "The Gifted Bridges", "island": "Deniz", "frequency": "Common (85%)", "level": "8-10" }], "icon": "/images/portraits/temtem/large/Pigepic.png" }, { "number": 161, "name": "Anahir", "types": ["Crystal", "Fire"], "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/e/ea/Anahir.png/50px-Anahir.png", "wikiUrl": "https://temtem.gamepedia.com/Anahir", "stats": { "hp": 54, "sta": 36, "spd": 31, "atk": 50, "def": 101, "spatk": 50, "spdef": 101, "total": 423 }, "traits": ["Trauma", "Flawed Crystal"], "details": { "height": { "cm": 152, "inches": 59 }, "weight": { "kg": 172, "lbs": 379 } }, "techniques": [{ "name": "Glass Blade", "source": "Levelling" }, { "name": "Fire Flame", "source": "Levelling" }, { "name": "Head Charge", "source": "Levelling" }, { "name": "Chains Hit", "source": "Levelling" }, { "name": "Meteor Swarm", "source": "Levelling" }, { "name": "Rampage", "source": "Levelling" }, { "name": "Heat Up", "source": "Levelling" }, { "name": "Crystal Bite", "source": "Levelling" }, { "name": "Magma Cannon", "source": "TechniqueCourses" }], "trivia": ["Anahir is the only Fire/Crystal Temtem as of alpha v0.5.5.", "The Anahiryou obtain during the quest Adventure in the Myrisles will always have 50 SVs in both DEF and SPDEF stats.", "Players can decide to not obtain Anahir to save storage, useful for those who value storage for FreeTem. Similarly players can decide to obtain Anahir at a later date."], "evolution": { "evolves": false }, "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/e/ea/Anahir.png/250px-Anahir.png?version=b68cc0007bc9309aadfddf4789691427", "locations": [{ "location": "Anak Volcano", "island": "Omninesia", "frequency": "Gift", "level": "20" }], "icon": "/images/portraits/temtem/large/Anahir.png" }];


/***/ }),

/***/ "./source/js/data/temtems.ts":
/*!***********************************!*\
  !*** ./source/js/data/temtems.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const temtems_raw_1 = __webpack_require__(/*! ./temtems-raw */ "./source/js/data/temtems-raw.ts");
exports.default = temtems_raw_1.default.map(temtem => ({
    number: temtem.number,
    name: temtem.name,
    types: temtem.types.map(_ => _.toUpperCase()),
    portraitWikiUrl: temtem.portraitWikiUrl,
    wikiUrl: temtem.wikiUrl,
}));


/***/ }),

/***/ "./source/js/debug.ts":
/*!****************************!*\
  !*** ./source/js/debug.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./source/js/index.tsx":
/*!*****************************!*\
  !*** ./source/js/index.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./debug */ "./source/js/debug.ts");
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const AppComponent_1 = __webpack_require__(/*! @client/components/AppComponent */ "./source/js/components/AppComponent.tsx");
const store_1 = __webpack_require__(/*! @client/reducers/store */ "./source/js/reducers/store.ts");
ReactDOM.render((React.createElement(react_redux_1.Provider, { store: store_1.store },
    React.createElement(AppComponent_1.AppComponent, null))), document.getElementById('mount'));


/***/ }),

/***/ "./source/js/reducers/ReduxReducer.ts":
/*!********************************************!*\
  !*** ./source/js/reducers/ReduxReducer.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ReduxActions_1 = __webpack_require__(/*! @client/actions/ReduxActions */ "./source/js/actions/ReduxActions.ts");
exports.defaultState = {
    callbacks: [],
};
exports.ReduxReducer = (state = exports.defaultState, action) => {
    switch (action.type) {
        case ReduxActions_1.ReduxActionTypes.ON_NEXT:
            return {
                callbacks: [...state.callbacks, {
                        triggerType: action.triggerType,
                        callback: action.callback,
                    }],
            };
        default:
            return {
                callbacks: state.callbacks.filter(_ => {
                    if (_.triggerType !== action.type) {
                        return true;
                    }
                    else {
                        setTimeout(() => _.callback(action), 1);
                        return false;
                    }
                })
            };
    }
};


/***/ }),

/***/ "./source/js/reducers/index.ts":
/*!*************************************!*\
  !*** ./source/js/reducers/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
const ReduxReducer_1 = __webpack_require__(/*! @client/reducers/ReduxReducer */ "./source/js/reducers/ReduxReducer.ts");
const reducers = redux_1.combineReducers({
    redux: ReduxReducer_1.ReduxReducer,
});
exports.default = reducers;


/***/ }),

/***/ "./source/js/reducers/store.ts":
/*!*************************************!*\
  !*** ./source/js/reducers/store.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
const redux_thunk_1 = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
const redux_logger_1 = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
const reducers_1 = __webpack_require__(/*! @client/reducers */ "./source/js/reducers/index.ts");
exports.store = redux_1.createStore(reducers_1.default, redux_1.applyMiddleware(redux_thunk_1.default, redux_logger_1.createLogger()));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map