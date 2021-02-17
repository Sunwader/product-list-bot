/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _urban_bot_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @urban-bot/core */ \"@urban-bot/core\");\n/* harmony import */ var _urban_bot_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_urban_bot_core__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst DELETE_PRODUCTS_MODE = 'DELETE_PRODUCTS_MODE';\nconst COMPLETE_PRODUCTS_MODE = 'COMPLETE_PRODUCTS_MODE';\n\nfunction ProductList() {\n  const [mode, setMode] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(COMPLETE_PRODUCTS_MODE);\n  const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n\n  function addProduct(text) {\n    const newProduct = {\n      text,\n      id: Math.random(),\n      isCompleted: false\n    };\n    setProducts([...products, newProduct]);\n  }\n\n  function deleteProduct(deletedId) {\n    const newProducts = products.filter(({\n      id\n    }) => id !== deletedId);\n    setProducts(newProducts);\n  }\n\n  function toggleProduct(toggledId) {\n    const newProducts = products.map(product => {\n      if (product.id === toggledId) {\n        return { ...product,\n          isCompleted: !product.isCompleted\n        };\n      }\n\n      return product;\n    });\n    setProducts(newProducts);\n  }\n\n  function toggleMode() {\n    setMode(mode === DELETE_PRODUCTS_MODE ? COMPLETE_PRODUCTS_MODE : DELETE_PRODUCTS_MODE);\n  }\n\n  function clickProduct(id) {\n    if (mode === DELETE_PRODUCTS_MODE) {\n      deleteProduct(id);\n    } else {\n      toggleProduct(id);\n    }\n  }\n\n  (0,_urban_bot_core__WEBPACK_IMPORTED_MODULE_1__.useText)(({\n    text\n  }) => {\n    addProduct(text);\n  });\n\n  if (products.length === 0) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_urban_bot_core__WEBPACK_IMPORTED_MODULE_1__.Text, null, \"\\u0422\\u0432\\u043E\\u0439 \\u0441\\u043F\\u0438\\u0441\\u043E\\u043A \\u043F\\u043E\\u043A\\u0443\\u043F\\u043E\\u043A \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441 \\u043F\\u0443\\u0441\\u0442\");\n  }\n\n  const title = products.map(product => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, product.isCompleted ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"s\", null, product.text) : product.text, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null)));\n  const productsButtons = products.map(({\n    text,\n    id\n  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_urban_bot_core__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    key: id,\n    onClick: () => clickProduct(id)\n  }, text));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_urban_bot_core__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {\n    isResizedKeyboard: true,\n    title: title,\n    maxColumns: 1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_urban_bot_core__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    key: mode,\n    onClick: toggleMode\n  }, mode === DELETE_PRODUCTS_MODE ? 'Режим удаления' : 'Режим выполнения'), productsButtons);\n}\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_urban_bot_core__WEBPACK_IMPORTED_MODULE_1__.Text, null, \"\\u041F\\u0440\\u0438\\u0432\\u0435\\u0442! \\u0414\\u043E\\u0431\\u0430\\u0432\\u044C \\u043F\\u0435\\u0440\\u0432\\u044B\\u0439 \\u044D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442 \\u0441\\u043F\\u0438\\u0441\\u043A\\u0430\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProductList, null));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHVyYmFuLWJvdC9zdGFydGVyLWphdmFzY3JpcHQvLi9zcmMvQXBwLmpzP2JlOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVGV4dCwgQnV0dG9uLCBCdXR0b25Hcm91cCwgVGV4dCB9IGZyb20gJ0B1cmJhbi1ib3QvY29yZSc7XG5cbmNvbnN0IERFTEVURV9QUk9EVUNUU19NT0RFID0gJ0RFTEVURV9QUk9EVUNUU19NT0RFJztcbmNvbnN0IENPTVBMRVRFX1BST0RVQ1RTX01PREUgPSAnQ09NUExFVEVfUFJPRFVDVFNfTU9ERSc7XG5cbmZ1bmN0aW9uIFByb2R1Y3RMaXN0KCkge1xuICAgIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IFJlYWN0LnVzZVN0YXRlKENPTVBMRVRFX1BST0RVQ1RTX01PREUpO1xuICAgIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgZnVuY3Rpb24gYWRkUHJvZHVjdCh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSB7IHRleHQsIGlkOiBNYXRoLnJhbmRvbSgpLCBpc0NvbXBsZXRlZDogZmFsc2UgfTtcblxuICAgICAgICBzZXRQcm9kdWN0cyhbLi4ucHJvZHVjdHMsIG5ld1Byb2R1Y3RdKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KGRlbGV0ZWRJZCkge1xuICAgICAgICBjb25zdCBuZXdQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcigoeyBpZCB9KSA9PiBpZCAhPT0gZGVsZXRlZElkKTtcblxuICAgICAgICBzZXRQcm9kdWN0cyhuZXdQcm9kdWN0cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlUHJvZHVjdCh0b2dnbGVkSWQpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvZHVjdHMgPSBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LmlkID09PSB0b2dnbGVkSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5wcm9kdWN0LFxuICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlZDogIXByb2R1Y3QuaXNDb21wbGV0ZWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3Q7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFByb2R1Y3RzKG5ld1Byb2R1Y3RzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVNb2RlKCkge1xuICAgICAgICBzZXRNb2RlKG1vZGUgPT09IERFTEVURV9QUk9EVUNUU19NT0RFID8gQ09NUExFVEVfUFJPRFVDVFNfTU9ERSA6IERFTEVURV9QUk9EVUNUU19NT0RFKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGlja1Byb2R1Y3QoaWQpIHtcbiAgICAgICAgaWYgKG1vZGUgPT09IERFTEVURV9QUk9EVUNUU19NT0RFKSB7XG4gICAgICAgICAgICBkZWxldGVQcm9kdWN0KGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvZ2dsZVByb2R1Y3QoaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlVGV4dCgoeyB0ZXh0IH0pID0+IHtcbiAgICAgICAgYWRkUHJvZHVjdCh0ZXh0KTtcbiAgICB9KTtcblxuICAgIGlmIChwcm9kdWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDxUZXh0PtCi0LLQvtC5INGB0L/QuNGB0L7QuiDQv9C+0LrRg9C/0L7QuiDRgdC10LnRh9Cw0YEg0L/Rg9GB0YI8L1RleHQ+O1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7cHJvZHVjdC5pc0NvbXBsZXRlZCA/IDxzPntwcm9kdWN0LnRleHR9PC9zPiA6IHByb2R1Y3QudGV4dH1cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICA8Lz5cbiAgICApKTtcblxuICAgIGNvbnN0IHByb2R1Y3RzQnV0dG9ucyA9IHByb2R1Y3RzLm1hcCgoeyB0ZXh0LCBpZCB9KSA9PiAoXG4gICAgICAgIDxCdXR0b24ga2V5PXtpZH0gb25DbGljaz17KCkgPT4gY2xpY2tQcm9kdWN0KGlkKX0+XG4gICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QnV0dG9uR3JvdXAgaXNSZXNpemVkS2V5Ym9hcmQgdGl0bGU9e3RpdGxlfSBtYXhDb2x1bW5zPXsxfT5cbiAgICAgICAgICAgIDxCdXR0b24ga2V5PXttb2RlfSBvbkNsaWNrPXt0b2dnbGVNb2RlfT5cbiAgICAgICAgICAgICAgICB7bW9kZSA9PT0gREVMRVRFX1BST0RVQ1RTX01PREUgPyAn0KDQtdC20LjQvCDRg9C00LDQu9C10L3QuNGPJyA6ICfQoNC10LbQuNC8INCy0YvQv9C+0LvQvdC10L3QuNGPJ31cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAge3Byb2R1Y3RzQnV0dG9uc31cbiAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8VGV4dD7Qn9GA0LjQstC10YIhINCU0L7QsdCw0LLRjCDQv9C10YDQstGL0Lkg0Y3Qu9C10LzQtdC90YIg0YHQv9C40YHQutCwPC9UZXh0PlxuICAgICAgICAgICAgPFByb2R1Y3RMaXN0IC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _urban_bot_telegram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @urban-bot/telegram */ \"@urban-bot/telegram\");\n/* harmony import */ var _urban_bot_telegram__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_urban_bot_telegram__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _urban_bot_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @urban-bot/core */ \"@urban-bot/core\");\n/* harmony import */ var _urban_bot_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_urban_bot_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_3___default().config();\nconst {\n  TELEGRAM_TOKEN,\n  PORT\n} = process.env;\n\nif (!TELEGRAM_TOKEN) {\n  throw new Error('Provide TELEGRAM_TOKEN to .env https://core.telegram.org/bots#6-botfather');\n}\n\nconst urbanBotTelegram = new _urban_bot_telegram__WEBPACK_IMPORTED_MODULE_1__.UrbanBotTelegram({\n  token: TELEGRAM_TOKEN,\n  isPolling: true\n});\n(0,_urban_bot_core__WEBPACK_IMPORTED_MODULE_2__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_urban_bot_core__WEBPACK_IMPORTED_MODULE_2__.Root, {\n  bot: urbanBotTelegram,\n  port: PORT ? Number(PORT) : undefined,\n  isNewMessageEveryRender: false\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_4__.App, null)), () => console.log('telegram bot has started'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdXJiYW4tYm90L3N0YXJ0ZXItamF2YXNjcmlwdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBVcmJhbkJvdFRlbGVncmFtIH0gZnJvbSAnQHVyYmFuLWJvdC90ZWxlZ3JhbSc7XG5pbXBvcnQgeyByZW5kZXIsIFJvb3QgfSBmcm9tICdAdXJiYW4tYm90L2NvcmUnO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9BcHAnO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IHsgVEVMRUdSQU1fVE9LRU4sIFBPUlQgfSA9IHByb2Nlc3MuZW52O1xuXG5pZiAoIVRFTEVHUkFNX1RPS0VOKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQcm92aWRlIFRFTEVHUkFNX1RPS0VOIHRvIC5lbnYgaHR0cHM6Ly9jb3JlLnRlbGVncmFtLm9yZy9ib3RzIzYtYm90ZmF0aGVyJyk7XG59XG5cbmNvbnN0IHVyYmFuQm90VGVsZWdyYW0gPSBuZXcgVXJiYW5Cb3RUZWxlZ3JhbSh7XG4gICAgdG9rZW46IFRFTEVHUkFNX1RPS0VOLFxuICAgIGlzUG9sbGluZzogdHJ1ZSxcbn0pO1xuXG5yZW5kZXIoXG4gICAgPFJvb3QgYm90PXt1cmJhbkJvdFRlbGVncmFtfSBwb3J0PXtQT1JUID8gTnVtYmVyKFBPUlQpIDogdW5kZWZpbmVkfSBpc05ld01lc3NhZ2VFdmVyeVJlbmRlcj17ZmFsc2V9PlxuICAgICAgICA8QXBwIC8+XG4gICAgPC9Sb290PixcbiAgICAoKSA9PiBjb25zb2xlLmxvZygndGVsZWdyYW0gYm90IGhhcyBzdGFydGVkJyksXG4pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "@urban-bot/core":
/*!**********************************!*\
  !*** external "@urban-bot/core" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@urban-bot/core");;

/***/ }),

/***/ "@urban-bot/telegram":
/*!**************************************!*\
  !*** external "@urban-bot/telegram" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@urban-bot/telegram");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;