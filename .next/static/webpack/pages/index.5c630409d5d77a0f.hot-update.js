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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_HomeHeader_HomeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HomeHeader/HomeHeader */ \"./components/HomeHeader/HomeHeader.jsx\");\n/* harmony import */ var _components_ProductGrid_ProductGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProductGrid/ProductGrid */ \"./components/ProductGrid/ProductGrid.jsx\");\n/* harmony import */ var _components_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductCard/ProductCard */ \"./components/ProductCard/ProductCard.jsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), productList = ref[0], setProductList = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.fetch(\"api/avo\").then(function(response) {\n            return response.json();\n        }).then(function(param) {\n            var data = param.data, dataLength = param.dataLength;\n            setProductList(data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HomeHeader_HomeHeader__WEBPACK_IMPORTED_MODULE_2__.HomeHeader, {}, void 0, false, {\n                fileName: \"/home/david-negretel/Documentos/CursosNextJS/nextjs/pages/index.jsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductGrid_ProductGrid__WEBPACK_IMPORTED_MODULE_3__.ProductGrid, {\n                children: productList.map(function(product, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_4__.ProductCard, {\n                        cardId: product.id,\n                        cardImg: product.image,\n                        cardTitle: product.name,\n                        cardDescription: \"$\".concat(product.price, \" USD\")\n                    }, product.id, false, {\n                        fileName: \"/home/david-negretel/Documentos/CursosNextJS/nextjs/pages/index.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 25\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/david-negretel/Documentos/CursosNextJS/nextjs/pages/index.jsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O0FBQWlEO0FBQ2M7QUFDSztBQUNBO0FBRXBFLElBQU1NLElBQUksR0FBRyxXQUFNOztJQUNmLElBQXNDSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTNDSyxXQUFXLEdBQW9CTCxHQUFZLEdBQWhDLEVBQUVNLGNBQWMsR0FBSU4sR0FBWSxHQUFoQjtJQUNsQ0QsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pRLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUN0QkMsSUFBSSxDQUFDLFNBQUNDLFFBQVE7bUJBQUtBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO1NBQUEsQ0FBQyxDQUNuQ0YsSUFBSSxDQUFDLGdCQUF3QjtnQkFBdEJHLElBQUksU0FBSkEsSUFBSSxFQUFFQyxVQUFVLFNBQVZBLFVBQVU7WUFDcEJQLGNBQWMsQ0FBQ00sSUFBSSxDQUFDLENBQUM7U0FDeEIsQ0FBQyxDQUFDO0tBQ04sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLHFCQUNJOzswQkFDSSw4REFBQ1gseUVBQVU7Ozs7cUJBQUU7MEJBQ2IsOERBQUNDLDRFQUFXOzBCQUVKRyxXQUFXLENBQUNTLEdBQUcsQ0FBQyxTQUFDQyxPQUFPLEVBQUVDLEtBQUs7eUNBQzNCLDhEQUFDYiw0RUFBVzt3QkFDUmMsTUFBTSxFQUFFRixPQUFPLENBQUNHLEVBQUU7d0JBQ2xCQyxPQUFPLEVBQUVKLE9BQU8sQ0FBQ0ssS0FBSzt3QkFDdEJDLFNBQVMsRUFBRU4sT0FBTyxDQUFDTyxJQUFJO3dCQUN2QkMsZUFBZSxFQUFFLEdBQUUsQ0FBZ0IsTUFBSSxDQUFsQlIsT0FBTyxDQUFDUyxLQUFLLEVBQUMsTUFBSSxDQUFDO3VCQUNuQ1QsT0FBTyxDQUFDRyxFQUFFOzs7OzZCQUNqQjtpQkFDTCxDQUFDOzs7OztxQkFFSTs7b0JBQ2YsQ0FDTDtDQUNMO0dBM0JLZCxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUE2QlYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7SG9tZUhlYWRlcn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZUhlYWRlci9Ib21lSGVhZGVyXCI7XG5pbXBvcnQgeyBQcm9kdWN0R3JpZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RHcmlkL1Byb2R1Y3RHcmlkXCI7XG5pbXBvcnQgeyBQcm9kdWN0Q2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkL1Byb2R1Y3RDYXJkXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LmZldGNoKCdhcGkvYXZvJylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKCh7ZGF0YSwgZGF0YUxlbmd0aH0pID0+IHtcbiAgICAgICAgICAgIHNldFByb2R1Y3RMaXN0KGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIb21lSGVhZGVyLz5cbiAgICAgICAgICAgIDxQcm9kdWN0R3JpZD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0Lm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJZD17cHJvZHVjdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW1nPXtwcm9kdWN0LmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRUaXRsZT17cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbj17YCQke3Byb2R1Y3QucHJpY2V9IFVTRGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1Byb2R1Y3RHcmlkPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsicmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWVIZWFkZXIiLCJQcm9kdWN0R3JpZCIsIlByb2R1Y3RDYXJkIiwiSG9tZSIsInByb2R1Y3RMaXN0Iiwic2V0UHJvZHVjdExpc3QiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZGF0YUxlbmd0aCIsIm1hcCIsInByb2R1Y3QiLCJpbmRleCIsImNhcmRJZCIsImlkIiwiY2FyZEltZyIsImltYWdlIiwiY2FyZFRpdGxlIiwibmFtZSIsImNhcmREZXNjcmlwdGlvbiIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});