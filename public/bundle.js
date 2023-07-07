/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createDisplayData.js":
/*!**********************************!*\
  !*** ./src/createDisplayData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDisplayData: () => (/* binding */ createDisplayData)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");

var createDisplayData = function createDisplayData(polyfillName, polyfillResult, polyfillFn) {
  var displayWrapper = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", {
    id: "array-".concat(polyfillName, "-wrapper"),
    classes: ""
  });
  var displayHeading = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createEl)("h2", {
    id: "array-".concat(polyfillName, "-heading"),
    classes: "ml-1 my-1"
  }, "Array.".concat(polyfillName));
  var displayCodeSubHeading = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createEl)("h3", {
    id: "array-".concat(polyfillName, "-code-sub-heading"),
    classes: "ml-2 my-1"
  }, "Code");
  var displayPre = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createEl)("pre", {
    id: "array-".concat(polyfillName, "-pre"),
    classes: "ml-2"
  });
  var displayCode = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createEl)("code", {
    id: "array-".concat(polyfillName, "-code"),
    classes: "language-javascript"
  }, polyfillFn);
  var displayResultSubHeading = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createEl)("h3", {
    id: "array-".concat(polyfillName, "-result-sub-heading"),
    classes: "ml-2 my-1"
  }, "Result");
  var displayResultPre = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createEl)("pre", {
    id: "array-".concat(polyfillName, "-result-pre"),
    classes: "ml-2"
  });
  var displayResultCode = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createEl)("code", {
    id: "array-".concat(polyfillName, "-result-code"),
    classes: "language-javascript"
  }, polyfillResult);
  var lineBreak = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createEl)("hr", {
    id: "",
    classes: "hr my-2"
  });
  (0,_util__WEBPACK_IMPORTED_MODULE_0__.attachEl)(displayPre, displayCode);
  (0,_util__WEBPACK_IMPORTED_MODULE_0__.attachEl)(displayResultPre, displayResultCode);
  (0,_util__WEBPACK_IMPORTED_MODULE_0__.attachEl)(displayWrapper, displayHeading);
  (0,_util__WEBPACK_IMPORTED_MODULE_0__.attachEl)(displayWrapper, displayCodeSubHeading);
  (0,_util__WEBPACK_IMPORTED_MODULE_0__.attachEl)(displayWrapper, displayPre);
  (0,_util__WEBPACK_IMPORTED_MODULE_0__.attachEl)(displayWrapper, displayResultSubHeading);
  (0,_util__WEBPACK_IMPORTED_MODULE_0__.attachEl)(displayWrapper, displayResultPre);
  (0,_util__WEBPACK_IMPORTED_MODULE_0__.attachEl)("#array-polyfills", displayWrapper);
  (0,_util__WEBPACK_IMPORTED_MODULE_0__.attachEl)("#array-polyfills", lineBreak);
};

/***/ }),

/***/ "./src/customFilter/customFilter.js":
/*!******************************************!*\
  !*** ./src/customFilter/customFilter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterFn: () => (/* binding */ filterFn)
/* harmony export */ });
var filterFn = function filterFn(cb) {
  var resultArr = [];
  if (typeof cb !== "function") throw Error("A function would be needed for this polyfill to work");
  for (var i = 0; i < this.length; i++) {
    var filterItem = cb(this[i], i, this); // will take the item, index and the array as args.
    if (filterItem) resultArr.push(this[i]);
  }
  return resultArr;
};

/***/ }),

/***/ "./src/customFilter/customFilterTest.js":
/*!**********************************************!*\
  !*** ./src/customFilter/customFilterTest.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterResultCode: () => (/* binding */ filterResultCode)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");

var filterResultCode = function filterResultCode() {
  var someArr = [1, 2, 3, 4, 5];
  var someArrItemsFilteredUsingFilter = someArr.filter(function (item) {
    return item % 2 === 0;
  });
  var someArrItemsFilteredUsingCustomFilter = someArr.customFilter(function (item) {
    return item % 2 === 0;
  });
  var result = (0,_util__WEBPACK_IMPORTED_MODULE_0__.areResultsSame)(someArrItemsFilteredUsingFilter, someArrItemsFilteredUsingCustomFilter);
  console.log(result); // true
  return result;
};

/***/ }),

/***/ "./src/customMap/customMap.js":
/*!************************************!*\
  !*** ./src/customMap/customMap.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapperFn: () => (/* binding */ mapperFn)
/* harmony export */ });
var mapperFn = function mapperFn(cb) {
  var resultArr = [];
  if (typeof cb !== "function") throw Error("A function would be needed for this polyfill to work");
  for (var i = 0; i < this.length; i++) {
    var mappedItem = cb(this[i], i, this); // will take the item, index and the array as args.
    resultArr.push(mappedItem);
  }
  return resultArr;
};

/***/ }),

/***/ "./src/customMap/customMapTest.js":
/*!****************************************!*\
  !*** ./src/customMap/customMapTest.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapResultCode: () => (/* binding */ mapResultCode)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");

var mapResultCode = function mapResultCode() {
  var someArr = [1, 2, 3, 4, 5];
  var someArrItemsMappedUsingMap = someArr.map(function (item) {
    return item + 1;
  });
  var someArrItemsMappedUsingCustomMap = someArr.customMap(function (item) {
    return item + 1;
  });
  var result = (0,_util__WEBPACK_IMPORTED_MODULE_0__.areResultsSame)(someArrItemsMappedUsingMap, someArrItemsMappedUsingCustomMap);
  console.log(result); // true
  return result;
};

/***/ }),

/***/ "./src/customReduce/customReduce.js":
/*!******************************************!*\
  !*** ./src/customReduce/customReduce.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reduceFn: () => (/* binding */ reduceFn)
/* harmony export */ });
var reduceFn = function reduceFn(cb, initialVal) {
  var accumulator,
    firstIndex = 0;
  accumulator = initialVal;
  for (var i = firstIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i);
  }
  return accumulator;
};

/***/ }),

/***/ "./src/customReduce/customReduceTest.js":
/*!**********************************************!*\
  !*** ./src/customReduce/customReduceTest.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reduceResultCode: () => (/* binding */ reduceResultCode)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");

var reduceResultCode = function reduceResultCode() {
  var someArr = [1, 2, 3, 4, 5];
  var someArrItemsReducedUsingReduce = someArr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  var someArrItemsReduceedUsingCustomReduce = someArr.customReduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  var result = (0,_util__WEBPACK_IMPORTED_MODULE_0__.areResultsSame)(someArrItemsReducedUsingReduce, someArrItemsReduceedUsingCustomReduce);
  console.log(result); // true
  return result;
};

/***/ }),

/***/ "./src/polyfills.js":
/*!**************************!*\
  !*** ./src/polyfills.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customFilter_customFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customFilter/customFilter */ "./src/customFilter/customFilter.js");
/* harmony import */ var _customMap_customMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customMap/customMap */ "./src/customMap/customMap.js");
/* harmony import */ var _customReduce_customReduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customReduce/customReduce */ "./src/customReduce/customReduce.js");



Array.prototype.customMap = _customMap_customMap__WEBPACK_IMPORTED_MODULE_1__.mapperFn;
Array.prototype.customFilter = _customFilter_customFilter__WEBPACK_IMPORTED_MODULE_0__.filterFn;
Array.prototype.customReduce = _customReduce_customReduce__WEBPACK_IMPORTED_MODULE_2__.reduceFn;

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areResultsSame: () => (/* binding */ areResultsSame),
/* harmony export */   attachEl: () => (/* binding */ attachEl),
/* harmony export */   createEl: () => (/* binding */ createEl)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var createEl = function createEl(elTag, attr, nodeData) {
  var id = attr.id,
    classes = attr.classes;
  var el = document.createElement(elTag);
  el.setAttribute("id", id);
  if (classes) el.setAttribute("class", classes);
  if (nodeData) el.innerHTML = nodeData;
  return el;
};
var attachEl = function attachEl(parent, child) {
  if (typeof parent === "string") document.querySelector(parent).appendChild(child);else parent.appendChild(child);
};
var areResultsSame = function areResultsSame(res1, res2) {
  if (_typeof(res1) === _typeof(res2)) {
    return Array.isArray(res1) ? res1.length === res2.length && res1.every(function (val) {
      return res2.includes(val);
    }) : res1 === res2;
  }
  return false;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createDisplayData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDisplayData */ "./src/createDisplayData.js");
/* harmony import */ var _customMap_customMapTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customMap/customMapTest */ "./src/customMap/customMapTest.js");
/* harmony import */ var _customFilter_customFilterTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customFilter/customFilterTest */ "./src/customFilter/customFilterTest.js");
/* harmony import */ var _customReduce_customReduceTest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customReduce/customReduceTest */ "./src/customReduce/customReduceTest.js");
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polyfills */ "./src/polyfills.js");





(0,_createDisplayData__WEBPACK_IMPORTED_MODULE_0__.createDisplayData)('map', _customMap_customMapTest__WEBPACK_IMPORTED_MODULE_1__.mapResultCode, Array.prototype.customMap);
(0,_createDisplayData__WEBPACK_IMPORTED_MODULE_0__.createDisplayData)('filter', _customFilter_customFilterTest__WEBPACK_IMPORTED_MODULE_2__.filterResultCode, Array.prototype.customFilter);
(0,_createDisplayData__WEBPACK_IMPORTED_MODULE_0__.createDisplayData)('reduce', _customReduce_customReduceTest__WEBPACK_IMPORTED_MODULE_3__.reduceResultCode, Array.prototype.customReduce);
hljs.highlightAll();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map