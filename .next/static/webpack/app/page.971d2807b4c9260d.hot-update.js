"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/Components/NavBar.js":
/*!**********************************!*\
  !*** ./src/Components/NavBar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _asserts_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/asserts/logo.png */ \"(app-pages-browser)/./src/asserts/logo.png\");\n/* harmony import */ var _asserts_dark_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/asserts/dark-logo.png */ \"(app-pages-browser)/./src/asserts/dark-logo.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/gi */ \"(app-pages-browser)/./node_modules/react-icons/gi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _SubNavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubNavBar */ \"(app-pages-browser)/./src/Components/SubNavBar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction NavBar() {\n    _s();\n    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [mobileView, setMobileView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showSubNav, setShowSubNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleBlogHover = ()=>{\n        setShowSubNav(true);\n    };\n    const handleBlogLeave = ()=>{\n        setShowSubNav(false);\n    };\n    const handleMenu = ()=>{\n        setMobileView(!mobileView);\n    };\n    const handleScroll = ()=>{\n        if (window.scrollY > 100) {\n            setScrolled(true);\n        } else {\n            setScrolled(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const navbarClass = scrolled ? \"bg-white shadow-md\" : \"bg-transparent\";\n    const navText = scrolled ? \"text-black\" : \"text-red\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"bg-[#2ED06E] py-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \" text-[#FFF] flex items-center justify-evenly fixed top-0 left-0 right-0 z-10 p-4 transition-all duration-300 \".concat(navbarClass),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between  w-full md:w-[8rem] items-center md:px-0 px-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(mobileView ? \"mt-8\" : \"\"),\n                            children: scrolled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                src: _asserts_dark_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                lineNumber: 53,\n                                columnNumber: 38\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                src: _asserts_logo_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                alt: \"logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                lineNumber: 53,\n                                columnNumber: 78\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"md:hidden \".concat(scrolled ? \"mt-6\" : \"mt-0\"),\n                            children: [\n                                mobileView ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlineClose, {\n                                    className: \"w-[3rem] h-[1.5rem] \".concat(scrolled ? \"text-black\" : \"\"),\n                                    onClick: handleMenu\n                                }, void 0, false, {\n                                    fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 40\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gi__WEBPACK_IMPORTED_MODULE_8__.GiHamburgerMenu, {\n                                    className: \"w-[3rem] h-[1.5rem] \".concat(scrolled ? \"text-black\" : \"\"),\n                                    onClick: handleMenu\n                                }, void 0, false, {\n                                    fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 150\n                                }, this),\n                                mobileView && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"md:hidden flex flex-col absolute top-[4.5rem] right-2 rounded-lg mt-2 space-y-2 bg-white w-[8rem] h-[10rem] px-4 py-2 shadow-lg text-sm text-black \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            href: \"\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            href: \"\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            href: \"\",\n                                            children: \"Pages\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onMouseEnter: handleBlogHover,\n                                            onMouseLeave: handleBlogLeave,\n                                            className: \"relative\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"#\",\n                                                    children: \"Blog\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 33\n                                                }, this),\n                                                showSubNav && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"absolute top-10 right-0 mt-2 space-y-2 bg-white w-[8rem] h-[10rem] px-4 py-2 shadow-lg text-sm text-black\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                            href: \"/category1\",\n                                                            children: \"Category 1\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                                            lineNumber: 70,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                            href: \"/category2\",\n                                                            children: \"Category 2\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                                            lineNumber: 71,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                            href: \"/category3\",\n                                                            children: \"Category 3\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                                            lineNumber: 72,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            href: \"\",\n                                            children: \"Careers\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 41\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden md:flex gap-6 \".concat(navText),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"\",\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"\",\n                            children: \"Pages\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"\",\n                            children: \"Blog4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"\",\n                            children: \"Careers\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden md:flex\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-black bg-white px-4 py-2 rounded-full \".concat(scrolled ? \"bg-green-300\" : \"\", \" \").concat(scrolled ? \"bg-green-600\" : \"text-black\"),\n                        children: \"Try for Free\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                        lineNumber: 89,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                    lineNumber: 88,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n            lineNumber: 50,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s(NavBar, \"W9IyhDs+X6tnJ6/fLhL0zG07+qA=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL05hdkJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDa0Q7QUFDYjtBQUNTO0FBQ2hCO0FBQ0Y7QUFDb0I7QUFDRDtBQUNaO0FBRW5DLFNBQVNVOztJQUNMLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNZLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDYyxZQUFZQyxjQUFjLEdBQUdmLCtDQUFRQSxDQUFDO0lBRzdDLE1BQU1nQixrQkFBa0I7UUFDcEJELGNBQWM7SUFDaEI7SUFFQSxNQUFNRSxrQkFBa0I7UUFDdEJGLGNBQWM7SUFDaEI7SUFHRixNQUFNRyxhQUFhO1FBQ2ZMLGNBQWMsQ0FBQ0Q7SUFDbkI7SUFDQSxNQUFNTyxlQUFlO1FBQ2pCLElBQUlDLE9BQU9DLE9BQU8sR0FBRyxLQUFLO1lBQ3RCVixZQUFZO1FBQ2hCLE9BQU87WUFDSEEsWUFBWTtRQUNoQjtJQUNKO0lBRUFWLGdEQUFTQSxDQUFDO1FBQ05tQixPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUNsQyxPQUFPO1lBQ0hDLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO1FBQ3pDO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUssY0FBY2QsV0FBVyx1QkFBdUI7SUFDdEQsTUFBTWUsVUFBVWYsV0FBVyxlQUFlO0lBRzFDLHFCQUNJLDhEQUFDZ0I7UUFBUUMsV0FBVTtrQkFDZiw0RUFBQ0M7WUFBSUQsV0FBVyxpSEFBNkgsT0FBWkg7OzhCQUM3SCw4REFBQ0s7b0JBQUlGLFdBQVU7O3NDQUNYLDhEQUFDRTs0QkFBSUYsV0FBVyxHQUE0QixPQUF6QmYsYUFBYSxTQUFTO3NDQUNwQ0YseUJBQVksOERBQUNOLG1EQUFLQTtnQ0FBQzBCLEtBQUszQiw4REFBUUE7Z0NBQUU0QixLQUFJOzs7OztxREFBYyw4REFBQzNCLG1EQUFLQTtnQ0FBQzBCLEtBQUs1Qix5REFBSUE7Z0NBQUU2QixLQUFJOzs7Ozs7Ozs7OztzQ0FHL0UsOERBQUNGOzRCQUFJRixXQUFXLGFBQXdDLE9BQTNCakIsV0FBVyxTQUFTOztnQ0FDNUNFLDJCQUFjLDhEQUFDTCwwREFBY0E7b0NBQUNvQixXQUFXLHVCQUFvRCxPQUE3QmpCLFdBQVcsZUFBZTtvQ0FBTXNCLFNBQVNkOzs7Ozt5REFBbUIsOERBQUNaLDJEQUFlQTtvQ0FBQ3FCLFdBQVcsdUJBQW9ELE9BQTdCakIsV0FBVyxlQUFlO29DQUFNc0IsU0FBU2Q7Ozs7OztnQ0FDeE5OLDRCQUFlLDhEQUFDaUI7b0NBQUlGLFdBQVk7O3NEQUM3Qiw4REFBQ3RCLGtEQUFJQTs0Q0FBQzRCLE1BQU07c0RBQUk7Ozs7OztzREFDaEIsOERBQUM1QixrREFBSUE7NENBQUM0QixNQUFNO3NEQUFJOzs7Ozs7c0RBQ2hCLDhEQUFDNUIsa0RBQUlBOzRDQUFDNEIsTUFBTTtzREFBSTs7Ozs7O3NEQUNoQiw4REFBQ0o7NENBQ0dLLGNBQWNsQjs0Q0FDZG1CLGNBQWNsQjs0Q0FDZFUsV0FBVTs7OERBRVYsOERBQUNTO29EQUFFSCxNQUFLOzhEQUFJOzs7Ozs7Z0RBQ1huQiw0QkFDRyw4REFBQ2U7b0RBQUlGLFdBQVU7O3NFQUNYLDhEQUFDdEIsa0RBQUlBOzREQUFDNEIsTUFBSztzRUFBYTs7Ozs7O3NFQUN4Qiw4REFBQzVCLGtEQUFJQTs0REFBQzRCLE1BQUs7c0VBQWE7Ozs7OztzRUFDeEIsOERBQUM1QixrREFBSUE7NERBQUM0QixNQUFLO3NFQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBS3BDLDhEQUFDNUIsa0RBQUlBOzRDQUFDNEIsTUFBTTtzREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUk1Qiw4REFBQ0o7b0JBQUlGLFdBQVcsd0JBQWdDLE9BQVJGOztzQ0FDcEMsOERBQUNwQixrREFBSUE7NEJBQUM0QixNQUFNO3NDQUFJOzs7Ozs7c0NBQ2hCLDhEQUFDNUIsa0RBQUlBOzRCQUFDNEIsTUFBTTtzQ0FBSTs7Ozs7O3NDQUNoQiw4REFBQzVCLGtEQUFJQTs0QkFBQzRCLE1BQU07c0NBQUk7Ozs7OztzQ0FDaEIsOERBQUM1QixrREFBSUE7NEJBQUM0QixNQUFNO3NDQUFJOzs7Ozs7c0NBQ2hCLDhEQUFDNUIsa0RBQUlBOzRCQUFDNEIsTUFBTTtzQ0FBSTs7Ozs7Ozs7Ozs7OzhCQUVwQiw4REFBQ0o7b0JBQUlGLFdBQVU7OEJBQ1gsNEVBQUNVO3dCQUFPVixXQUFXLDhDQUFnRmpCLE9BQWxDQSxXQUFXLGlCQUFpQixJQUFHLEtBQTRDLE9BQXpDQSxXQUFXLGlCQUFpQjtrQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbks7R0FwRlNEO0tBQUFBO0FBc0ZULCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL05hdkJhci5qcz9mOGZkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExvZ28gZnJvbSAnQC9hc3NlcnRzL2xvZ28ucG5nJ1xuaW1wb3J0IExvZ29EYXJrIGZyb20gJ0AvYXNzZXJ0cy9kYXJrLWxvZ28ucG5nJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBHaUhhbWJ1cmdlck1lbnUgfSBmcm9tICdyZWFjdC1pY29ucy9naSdcbmltcG9ydCB7IEFpT3V0bGluZUNsb3NlIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQgU3ViTmF2QmFyIGZyb20gJy4vU3ViTmF2QmFyJ1xuXG5mdW5jdGlvbiBOYXZCYXIoKSB7XG4gICAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW21vYmlsZVZpZXcsIHNldE1vYmlsZVZpZXddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3Nob3dTdWJOYXYsIHNldFNob3dTdWJOYXZdID0gdXNlU3RhdGUodHJ1ZSk7XG5cblxuICAgIGNvbnN0IGhhbmRsZUJsb2dIb3ZlciA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd1N1Yk5hdih0cnVlKTtcbiAgICAgIH07XG4gICAgXG4gICAgICBjb25zdCBoYW5kbGVCbG9nTGVhdmUgPSAoKSA9PiB7XG4gICAgICAgIHNldFNob3dTdWJOYXYoZmFsc2UpO1xuICAgICAgfTtcbiAgICBcblxuICAgIGNvbnN0IGhhbmRsZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIHNldE1vYmlsZVZpZXcoIW1vYmlsZVZpZXcpXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTAwKSB7XG4gICAgICAgICAgICBzZXRTY3JvbGxlZCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFNjcm9sbGVkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IG5hdmJhckNsYXNzID0gc2Nyb2xsZWQgPyAnYmctd2hpdGUgc2hhZG93LW1kJyA6ICdiZy10cmFuc3BhcmVudCc7XG4gICAgY29uc3QgbmF2VGV4dCA9IHNjcm9sbGVkID8gJ3RleHQtYmxhY2snIDogJ3RleHQtcmVkJztcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdiZy1bIzJFRDA2RV0gcHktMTAnPlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2AgdGV4dC1bI0ZGRl0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHkgZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei0xMCBwLTQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7bmF2YmFyQ2xhc3N9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuICB3LWZ1bGwgbWQ6dy1bOHJlbV0gaXRlbXMtY2VudGVyIG1kOnB4LTAgcHgtMic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHttb2JpbGVWaWV3ID8gXCJtdC04XCIgOiBcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Njcm9sbGVkID8gKDxJbWFnZSBzcmM9e0xvZ29EYXJrfSBhbHQ9J2xvZ28nIC8+KSA6ICg8SW1hZ2Ugc3JjPXtMb2dvfSBhbHQ9J2xvZ28nIC8+KX1cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtZDpoaWRkZW4gJHtzY3JvbGxlZCA/IFwibXQtNlwiIDogXCJtdC0wXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9iaWxlVmlldyA/ICg8QWlPdXRsaW5lQ2xvc2UgY2xhc3NOYW1lPXtgdy1bM3JlbV0gaC1bMS41cmVtXSAke3Njcm9sbGVkID8gXCJ0ZXh0LWJsYWNrXCIgOiBcIlwifWB9IG9uQ2xpY2s9e2hhbmRsZU1lbnV9IC8+KSA6ICg8R2lIYW1idXJnZXJNZW51IGNsYXNzTmFtZT17YHctWzNyZW1dIGgtWzEuNXJlbV0gJHtzY3JvbGxlZCA/IFwidGV4dC1ibGFja1wiIDogXCJcIn1gfSBvbkNsaWNrPXtoYW5kbGVNZW51fSAvPil9XG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9iaWxlVmlldyAmJiAoPGRpdiBjbGFzc05hbWU9e2BtZDpoaWRkZW4gZmxleCBmbGV4LWNvbCBhYnNvbHV0ZSB0b3AtWzQuNXJlbV0gcmlnaHQtMiByb3VuZGVkLWxnIG10LTIgc3BhY2UteS0yIGJnLXdoaXRlIHctWzhyZW1dIGgtWzEwcmVtXSBweC00IHB5LTIgc2hhZG93LWxnIHRleHQtc20gdGV4dC1ibGFjayBgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIlwifT5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiXCJ9PkFib3V0PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiXCJ9PlBhZ2VzPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCbG9nSG92ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlQmxvZ0xlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkJsb2c8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93U3ViTmF2ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEwIHJpZ2h0LTAgbXQtMiBzcGFjZS15LTIgYmctd2hpdGUgdy1bOHJlbV0gaC1bMTByZW1dIHB4LTQgcHktMiBzaGFkb3ctbGcgdGV4dC1zbSB0ZXh0LWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXRlZ29yeTFcIj5DYXRlZ29yeSAxPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2F0ZWdvcnkyXCI+Q2F0ZWdvcnkgMjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhdGVnb3J5M1wiPkNhdGVnb3J5IDM8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEFkZCBtb3JlIGNhdGVnb3J5IGxpbmtzIGFzIG5lZWRlZCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiXCJ9PkNhcmVlcnM8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGhpZGRlbiBtZDpmbGV4IGdhcC02ICR7bmF2VGV4dH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCJcIn0+SG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCJcIn0+QWJvdXQ8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiXCJ9PlBhZ2VzPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIlwifT5CbG9nNDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCJcIn0+Q2FyZWVyczwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGlkZGVuIG1kOmZsZXgnPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHRleHQtYmxhY2sgYmctd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtZnVsbCAke3Njcm9sbGVkID8gXCJiZy1ncmVlbi0zMDBcIiA6IFwiXCJ9ICR7c2Nyb2xsZWQgPyBcImJnLWdyZWVuLTYwMFwiIDogXCJ0ZXh0LWJsYWNrXCJ9YH0+VHJ5IGZvciBGcmVlPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxvZ28iLCJMb2dvRGFyayIsIkltYWdlIiwiTGluayIsIkdpSGFtYnVyZ2VyTWVudSIsIkFpT3V0bGluZUNsb3NlIiwiU3ViTmF2QmFyIiwiTmF2QmFyIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsIm1vYmlsZVZpZXciLCJzZXRNb2JpbGVWaWV3Iiwic2hvd1N1Yk5hdiIsInNldFNob3dTdWJOYXYiLCJoYW5kbGVCbG9nSG92ZXIiLCJoYW5kbGVCbG9nTGVhdmUiLCJoYW5kbGVNZW51IiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmF2YmFyQ2xhc3MiLCJuYXZUZXh0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsIm5hdiIsImRpdiIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJocmVmIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/NavBar.js\n"));

/***/ })

});