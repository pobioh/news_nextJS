"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(content)/news/page",{

/***/ "(app-pages-browser)/./app/(content)/news/page.js":
/*!************************************!*\
  !*** ./app/(content)/news/page.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _component_news_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/component/news-list */ \"(app-pages-browser)/./component/news-list.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction NewsPage() {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [news, setNews] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function fetchNews() {\n            const response = await fetch(\"http://localhost:8080/news\");\n            if (!response.ok) {\n                setError(\"Failed to fetch news\");\n                setIsLoading(false);\n            }\n            const news = await response.json();\n            setIsLoading(false);\n            setNews(news);\n        }\n        fetchNews();\n    }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading\"\n        }, void 0, false, {\n            fileName: \"/home/princexrae/Downloads/01-starting-project/app/(content)/news/page.js\",\n            lineNumber: 28,\n            columnNumber: 16\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: error\n        }, void 0, false, {\n            fileName: \"/home/princexrae/Downloads/01-starting-project/app/(content)/news/page.js\",\n            lineNumber: 30,\n            columnNumber: 16\n        }, this);\n    }\n    let newsContent;\n    if (news) {\n        newsContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_news_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            news: news\n        }, void 0, false, {\n            fileName: \"/home/princexrae/Downloads/01-starting-project/app/(content)/news/page.js\",\n            lineNumber: 36,\n            columnNumber: 23\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"News Page\"\n            }, void 0, false, {\n                fileName: \"/home/princexrae/Downloads/01-starting-project/app/(content)/news/page.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            newsContent\n        ]\n    }, void 0, true);\n}\n_s(NewsPage, \"vIipdctoWQP+QFhvSDoCL4vAacA=\");\n_c = NewsPage;\nvar _c;\n$RefreshReg$(_c, \"NewsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oY29udGVudCkvbmV3cy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNkM7QUFDRDtBQUU3QixTQUFTRzs7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdILCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUE7SUFDaEMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQTtJQUV0Q0QsZ0RBQVNBLENBQUM7UUFDTixlQUFlUztZQUNaLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUU3QixJQUFHLENBQUNELFNBQVNFLEVBQUUsRUFBQztnQkFDZkosU0FBUztnQkFDVEosYUFBYTtZQUNkO1lBRUEsTUFBTUMsT0FBTyxNQUFNSyxTQUFTRyxJQUFJO1lBQ2hDVCxhQUFhO1lBQ2JFLFFBQVFEO1FBQ1g7UUFFQUk7SUFDSixHQUFHLEVBQUU7SUFFRCxJQUFHTixXQUFVO1FBQ1QscUJBQU8sOERBQUNXO3NCQUFFOzs7Ozs7SUFDZDtJQUFDLElBQUdQLE9BQU07UUFDTixxQkFBTyw4REFBQ087c0JBQUdQOzs7Ozs7SUFDZjtJQUVBLElBQUlRO0lBRUosSUFBR1YsTUFBSztRQUNKVSw0QkFBYyw4REFBQ2hCLDREQUFRQTtZQUFDTSxNQUFNQTs7Ozs7O0lBQ2xDO0lBQ0EscUJBQ0k7OzBCQUNBLDhEQUFDVzswQkFBRzs7Ozs7O1lBQ0hEOzs7QUFHVDtHQXZDd0JiO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oY29udGVudCkvbmV3cy9wYWdlLmpzP2MxOTciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgTmV3c0xpc3QgZnJvbSBcIkAvY29tcG9uZW50L25ld3MtbGlzdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzUGFnZSgpe1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW25ld3MsIHNldE5ld3NdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCk7XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hOZXdzKCl7XG4gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL25ld3MnKTtcblxuICAgICAgIGlmKCFyZXNwb25zZS5vayl7XG4gICAgICAgIHNldEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggbmV3cycpXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgICB9XG4gICAgICAgIFxuICAgICAgIGNvbnN0IG5ld3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgIHNldE5ld3MobmV3cylcbiAgICB9XG5cbiAgICBmZXRjaE5ld3MoKVxufSwgW10pO1xuXG4gICAgaWYoaXNMb2FkaW5nKXtcbiAgICAgICAgcmV0dXJuIDxwPkxvYWRpbmc8L3A+XG4gICAgfWlmKGVycm9yKXtcbiAgICAgICAgcmV0dXJuIDxwPntlcnJvcn08L3A+XG4gICAgfVxuXG4gICAgbGV0IG5ld3NDb250ZW50O1xuXG4gICAgaWYobmV3cyl7XG4gICAgICAgIG5ld3NDb250ZW50ID0gPE5ld3NMaXN0IG5ld3M9e25ld3N9IC8+XG4gICAgfVxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgPGgxPk5ld3MgUGFnZTwvaDE+XG4gICAgICAgIHtuZXdzQ29udGVudH1cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJOZXdzTGlzdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmV3c1BhZ2UiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJuZXdzIiwic2V0TmV3cyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaE5ld3MiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJqc29uIiwicCIsIm5ld3NDb250ZW50IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(content)/news/page.js\n"));

/***/ })

});