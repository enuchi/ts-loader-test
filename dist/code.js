var global = this;
function __esModule() {
}
function openDialog() {
}
function onOpen() {
}/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.openDialog = exports.onOpen = void 0;
var onOpen = function () {
    var menu = SpreadsheetApp.getUi()
        .createMenu('Test menu')
        .addItem('Test Item', 'openDialog');
    menu.addToUi();
};
exports.onOpen = onOpen;
var openDialog = function () {
    var html = HtmlService.createHtmlOutputFromFile('dialog-demo')
        .setWidth(600)
        .setHeight(600);
    SpreadsheetApp.getUi().showModalDialog(html, 'Test dialog');
};
exports.openDialog = openDialog;


/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

exports.__esModule = true;
exports.openDialog = exports.onOpen = void 0;
var functions_1 = __webpack_require__(1);
exports.onOpen = functions_1.onOpen;
exports.openDialog = functions_1.global.__esModule = exports.__esModule;
global.openDialog = exports.openDialog;
global.onOpen = exports.onOpen;openDialog;

})();

/******/ })()
;