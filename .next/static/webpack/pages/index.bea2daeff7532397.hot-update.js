"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ProductCard/ProductCard.jsx":
/*!************************************************!*\
  !*** ./components/ProductCard/ProductCard.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductCard\": function() { return /* binding */ ProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProductCard_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard.styled */ \"./components/ProductCard/ProductCard.styled.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar ProductCard = function(param) {\n    var cardId = param.cardId, cardImg = param.cardImg, cardTitle = param.cardTitle, cardDescription = param.cardDescription;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/product/[id]\",\n        as: \"/product/\".concat(cardId),\n        passHref: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductCard_styled__WEBPACK_IMPORTED_MODULE_2__.Card, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductCard_styled__WEBPACK_IMPORTED_MODULE_2__.CardImage, {\n                    src: cardImg\n                }, void 0, false, {\n                    fileName: \"/home/david-negretel/Documentos/CursosNextJS/nextjs/components/ProductCard/ProductCard.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductCard_styled__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                    children: cardTitle\n                }, void 0, false, {\n                    fileName: \"/home/david-negretel/Documentos/CursosNextJS/nextjs/components/ProductCard/ProductCard.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductCard_styled__WEBPACK_IMPORTED_MODULE_2__.CardDescription, {\n                    children: cardDescription\n                }, void 0, false, {\n                    fileName: \"/home/david-negretel/Documentos/CursosNextJS/nextjs/components/ProductCard/ProductCard.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/david-negretel/Documentos/CursosNextJS/nextjs/components/ProductCard/ProductCard.jsx\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/david-negretel/Documentos/CursosNextJS/nextjs/components/ProductCard/ProductCard.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, _this);\n};\n_c = ProductCard;\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkL1Byb2R1Y3RDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNxQjtBQUNsQjtBQUV0QixJQUFNRyxXQUFXLEdBQUcsZ0JBQW1EO1FBQWpEQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxlQUFlLFNBQWZBLGVBQWU7SUFDcEUscUJBQ0ksOERBQUNMLGtEQUFJO1FBQUNNLElBQUksRUFBQyxlQUFlO1FBQUNDLEVBQUUsRUFBRSxXQUFVLENBQVMsT0FBUEwsTUFBTSxDQUFFO1FBQUVNLFFBQVE7a0JBQ3pELDRFQUFDVCxxREFBVzs7OEJBQ1IsOERBQUNBLDBEQUFnQjtvQkFBQ1ksR0FBRyxFQUFFUixPQUFPOzs7Ozt5QkFBRzs4QkFDakMsOERBQUNKLDBEQUFnQjs4QkFDWkssU0FBUzs7Ozs7eUJBQ0s7OEJBQ25CLDhEQUFDTCxnRUFBc0I7OEJBQ2xCTSxlQUFlOzs7Ozt5QkFDSzs7Ozs7O2lCQUNmOzs7OzthQUNYLENBQ1Q7Q0FDTCxDQUFDO0FBZFdKLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC9Qcm9kdWN0Q2FyZC5qc3g/NWUwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9Qcm9kdWN0Q2FyZC5zdHlsZWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RDYXJkID0gKHtjYXJkSWQsIGNhcmRJbWcsIGNhcmRUaXRsZSwgY2FyZERlc2NyaXB0aW9ufSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdC9baWRdXCIgYXM9e2AvcHJvZHVjdC8ke2NhcmRJZH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxTdHlsZWQuQ2FyZD5cbiAgICAgICAgICAgICAgICA8U3R5bGVkLkNhcmRJbWFnZSBzcmM9e2NhcmRJbWd9Lz5cbiAgICAgICAgICAgICAgICA8U3R5bGVkLkNhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAge2NhcmRUaXRsZX1cbiAgICAgICAgICAgICAgICA8L1N0eWxlZC5DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgPFN0eWxlZC5DYXJkRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIHtjYXJkRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9TdHlsZWQuQ2FyZERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPC9TdHlsZWQuQ2FyZD5cbiAgICAgICAgPC9MaW5rPlxuICAgICk7XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0eWxlZCIsIkxpbmsiLCJQcm9kdWN0Q2FyZCIsImNhcmRJZCIsImNhcmRJbWciLCJjYXJkVGl0bGUiLCJjYXJkRGVzY3JpcHRpb24iLCJocmVmIiwiYXMiLCJwYXNzSHJlZiIsIkNhcmQiLCJDYXJkSW1hZ2UiLCJzcmMiLCJDYXJkVGl0bGUiLCJDYXJkRGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductCard/ProductCard.jsx\n"));

/***/ })

});