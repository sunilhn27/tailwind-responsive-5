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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _asserts_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/asserts/logo.png */ \"(app-pages-browser)/./src/asserts/logo.png\");\n/* harmony import */ var _asserts_dark_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/asserts/dark-logo.png */ \"(app-pages-browser)/./src/asserts/dark-logo.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/gi */ \"(app-pages-browser)/./node_modules/react-icons/gi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _SubNavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubNavBar */ \"(app-pages-browser)/./src/Components/SubNavBar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction NavBar() {\n    _s();\n    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [mobileView, setMobileView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showSubNav, setShowSubNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const toggleSubNav = ()=>{\n    //setShowSubNav(!showSubNav);\n    };\n    const handleMenu = ()=>{\n        setMobileView(!mobileView);\n    };\n    const handleScroll = ()=>{\n        if (window.scrollY > 100) {\n            setScrolled(true);\n        } else {\n            setScrolled(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const navbarClass = scrolled ? \"bg-white shadow-md\" : \"bg-transparent\";\n    const navText = scrolled ? \"text-black\" : \"text-red\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"bg-[#2ED06E] py-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \" text-[#FFF] flex items-center justify-evenly fixed top-0 left-0 right-0 z-10 p-4 transition-all duration-300 \".concat(navbarClass),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between  w-full md:w-[8rem] items-center md:px-0 px-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(mobileView ? \"mt-8\" : \"\"),\n                            children: scrolled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                src: _asserts_dark_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                lineNumber: 49,\n                                columnNumber: 38\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                src: _asserts_logo_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                alt: \"logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                lineNumber: 49,\n                                columnNumber: 78\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"md:hidden \".concat(scrolled ? \"mt-6\" : \"mt-0\"),\n                            children: [\n                                mobileView ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlineClose, {\n                                    className: \"w-[3rem] h-[1.5rem] \".concat(scrolled ? \"text-black\" : \"\"),\n                                    onClick: handleMenu\n                                }, void 0, false, {\n                                    fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 40\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gi__WEBPACK_IMPORTED_MODULE_8__.GiHamburgerMenu, {\n                                    className: \"w-[3rem] h-[1.5rem] \".concat(scrolled ? \"text-black\" : \"\"),\n                                    onClick: handleMenu\n                                }, void 0, false, {\n                                    fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 150\n                                }, this),\n                                mobileView && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"md:hidden flex flex-col absolute top-[4.5rem] right-2 rounded-lg mt-2 space-y-2 bg-white w-[8rem] h-[10rem] px-4 py-2 shadow-lg text-sm text-black \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            href: \"\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            href: \"\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            href: \"\",\n                                            children: \"Pages\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            onClick: toggleSubNav,\n                                            href: \"\",\n                                            children: [\n                                                \"Blog\",\n                                                showSubNav && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                                    children: \"p\"\n                                                }, void 0, false)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            href: \"\",\n                                            children: \"Careers\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 41\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden md:flex gap-6 \".concat(navText),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"\",\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"\",\n                            children: \"Pages\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"\",\n                            children: \"Blog\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"\",\n                            children: \"Careers\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden md:flex\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-black bg-white px-4 py-2 rounded-full \".concat(scrolled ? \"bg-green-300\" : \"\", \" \").concat(scrolled ? \"bg-green-600\" : \"text-black\"),\n                        children: \"Try for Free\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                        lineNumber: 74,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sunilhn/Documents/Projects/Tailwind-2023/tailwind-responsive-4/src/Components/NavBar.js\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_s(NavBar, \"W9IyhDs+X6tnJ6/fLhL0zG07+qA=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL05hdkJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDa0Q7QUFDYjtBQUNTO0FBQ2hCO0FBQ0Y7QUFDb0I7QUFDRDtBQUNaO0FBRW5DLFNBQVNVOztJQUNMLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNZLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDYyxZQUFZQyxjQUFjLEdBQUdmLCtDQUFRQSxDQUFDO0lBRzdDLE1BQU1nQixlQUFlO0lBQ2pCLDZCQUE2QjtJQUNqQztJQUdBLE1BQU1DLGFBQWE7UUFDZkosY0FBYyxDQUFDRDtJQUNuQjtJQUNBLE1BQU1NLGVBQWU7UUFDakIsSUFBSUMsT0FBT0MsT0FBTyxHQUFHLEtBQUs7WUFDdEJULFlBQVk7UUFDaEIsT0FBTztZQUNIQSxZQUFZO1FBQ2hCO0lBQ0o7SUFFQVYsZ0RBQVNBLENBQUM7UUFDTmtCLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBQ2xDLE9BQU87WUFDSEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDekM7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNSyxjQUFjYixXQUFXLHVCQUF1QjtJQUN0RCxNQUFNYyxVQUFVZCxXQUFXLGVBQWU7SUFHMUMscUJBQ0ksOERBQUNlO1FBQVFDLFdBQVU7a0JBQ2YsNEVBQUNDO1lBQUlELFdBQVcsaUhBQTZILE9BQVpIOzs4QkFDN0gsOERBQUNLO29CQUFJRixXQUFVOztzQ0FDWCw4REFBQ0U7NEJBQUlGLFdBQVcsR0FBNEIsT0FBekJkLGFBQWEsU0FBUztzQ0FDcENGLHlCQUFZLDhEQUFDTixtREFBS0E7Z0NBQUN5QixLQUFLMUIsOERBQVFBO2dDQUFFMkIsS0FBSTs7Ozs7cURBQWMsOERBQUMxQixtREFBS0E7Z0NBQUN5QixLQUFLM0IseURBQUlBO2dDQUFFNEIsS0FBSTs7Ozs7Ozs7Ozs7c0NBRy9FLDhEQUFDRjs0QkFBSUYsV0FBVyxhQUF3QyxPQUEzQmhCLFdBQVcsU0FBUzs7Z0NBQzVDRSwyQkFBYyw4REFBQ0wsMERBQWNBO29DQUFDbUIsV0FBVyx1QkFBb0QsT0FBN0JoQixXQUFXLGVBQWU7b0NBQU1xQixTQUFTZDs7Ozs7eURBQW1CLDhEQUFDWCwyREFBZUE7b0NBQUNvQixXQUFXLHVCQUFvRCxPQUE3QmhCLFdBQVcsZUFBZTtvQ0FBTXFCLFNBQVNkOzs7Ozs7Z0NBQ3hOTCw0QkFBZSw4REFBQ2dCO29DQUFJRixXQUFZOztzREFDN0IsOERBQUNyQixrREFBSUE7NENBQUMyQixNQUFNO3NEQUFJOzs7Ozs7c0RBQ2hCLDhEQUFDM0Isa0RBQUlBOzRDQUFDMkIsTUFBTTtzREFBSTs7Ozs7O3NEQUNoQiw4REFBQzNCLGtEQUFJQTs0Q0FBQzJCLE1BQU07c0RBQUk7Ozs7OztzREFDaEIsOERBQUMzQixrREFBSUE7NENBQUMwQixTQUFTZjs0Q0FBY2dCLE1BQU07O2dEQUFJO2dEQUNsQ2xCLDRCQUNHOzhEQUFFOzs7Ozs7OztzREFFViw4REFBQ1Qsa0RBQUlBOzRDQUFDMkIsTUFBTTtzREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUk1Qiw4REFBQ0o7b0JBQUlGLFdBQVcsd0JBQWdDLE9BQVJGOztzQ0FDcEMsOERBQUNuQixrREFBSUE7NEJBQUMyQixNQUFNO3NDQUFJOzs7Ozs7c0NBQ2hCLDhEQUFDM0Isa0RBQUlBOzRCQUFDMkIsTUFBTTtzQ0FBSTs7Ozs7O3NDQUNoQiw4REFBQzNCLGtEQUFJQTs0QkFBQzJCLE1BQU07c0NBQUk7Ozs7OztzQ0FDaEIsOERBQUMzQixrREFBSUE7NEJBQUMyQixNQUFNO3NDQUFJOzs7Ozs7c0NBQ2hCLDhEQUFDM0Isa0RBQUlBOzRCQUFDMkIsTUFBTTtzQ0FBSTs7Ozs7Ozs7Ozs7OzhCQUVwQiw4REFBQ0o7b0JBQUlGLFdBQVU7OEJBQ1gsNEVBQUNPO3dCQUFPUCxXQUFXLDhDQUFnRmhCLE9BQWxDQSxXQUFXLGlCQUFpQixJQUFHLEtBQTRDLE9BQXpDQSxXQUFXLGlCQUFpQjtrQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbks7R0FyRVNEO0tBQUFBO0FBdUVULCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL05hdkJhci5qcz9mOGZkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExvZ28gZnJvbSAnQC9hc3NlcnRzL2xvZ28ucG5nJ1xuaW1wb3J0IExvZ29EYXJrIGZyb20gJ0AvYXNzZXJ0cy9kYXJrLWxvZ28ucG5nJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBHaUhhbWJ1cmdlck1lbnUgfSBmcm9tICdyZWFjdC1pY29ucy9naSdcbmltcG9ydCB7IEFpT3V0bGluZUNsb3NlIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQgU3ViTmF2QmFyIGZyb20gJy4vU3ViTmF2QmFyJ1xuXG5mdW5jdGlvbiBOYXZCYXIoKSB7XG4gICAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW21vYmlsZVZpZXcsIHNldE1vYmlsZVZpZXddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3Nob3dTdWJOYXYsIHNldFNob3dTdWJOYXZdID0gdXNlU3RhdGUodHJ1ZSk7XG5cblxuICAgIGNvbnN0IHRvZ2dsZVN1Yk5hdiA9ICgpID0+IHtcbiAgICAgICAgLy9zZXRTaG93U3ViTmF2KCFzaG93U3ViTmF2KTtcbiAgICB9O1xuXG5cbiAgICBjb25zdCBoYW5kbGVNZW51ID0gKCkgPT4ge1xuICAgICAgICBzZXRNb2JpbGVWaWV3KCFtb2JpbGVWaWV3KVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDEwMCkge1xuICAgICAgICAgICAgc2V0U2Nyb2xsZWQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRTY3JvbGxlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBuYXZiYXJDbGFzcyA9IHNjcm9sbGVkID8gJ2JnLXdoaXRlIHNoYWRvdy1tZCcgOiAnYmctdHJhbnNwYXJlbnQnO1xuICAgIGNvbnN0IG5hdlRleHQgPSBzY3JvbGxlZCA/ICd0ZXh0LWJsYWNrJyA6ICd0ZXh0LXJlZCc7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYmctWyMyRUQwNkVdIHB5LTEwJz5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtgIHRleHQtWyNGRkZdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5IGZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIHotMTAgcC00IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke25hdmJhckNsYXNzfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiAgdy1mdWxsIG1kOnctWzhyZW1dIGl0ZW1zLWNlbnRlciBtZDpweC0wIHB4LTInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7bW9iaWxlVmlldyA/IFwibXQtOFwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzY3JvbGxlZCA/ICg8SW1hZ2Ugc3JjPXtMb2dvRGFya30gYWx0PSdsb2dvJyAvPikgOiAoPEltYWdlIHNyYz17TG9nb30gYWx0PSdsb2dvJyAvPil9XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWQ6aGlkZGVuICR7c2Nyb2xsZWQgPyBcIm10LTZcIiA6IFwibXQtMFwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge21vYmlsZVZpZXcgPyAoPEFpT3V0bGluZUNsb3NlIGNsYXNzTmFtZT17YHctWzNyZW1dIGgtWzEuNXJlbV0gJHtzY3JvbGxlZCA/IFwidGV4dC1ibGFja1wiIDogXCJcIn1gfSBvbkNsaWNrPXtoYW5kbGVNZW51fSAvPikgOiAoPEdpSGFtYnVyZ2VyTWVudSBjbGFzc05hbWU9e2B3LVszcmVtXSBoLVsxLjVyZW1dICR7c2Nyb2xsZWQgPyBcInRleHQtYmxhY2tcIiA6IFwiXCJ9YH0gb25DbGljaz17aGFuZGxlTWVudX0gLz4pfVxuICAgICAgICAgICAgICAgICAgICAgICAge21vYmlsZVZpZXcgJiYgKDxkaXYgY2xhc3NOYW1lPXtgbWQ6aGlkZGVuIGZsZXggZmxleC1jb2wgYWJzb2x1dGUgdG9wLVs0LjVyZW1dIHJpZ2h0LTIgcm91bmRlZC1sZyBtdC0yIHNwYWNlLXktMiBiZy13aGl0ZSB3LVs4cmVtXSBoLVsxMHJlbV0gcHgtNCBweS0yIHNoYWRvdy1sZyB0ZXh0LXNtIHRleHQtYmxhY2sgYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCJcIn0+SG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIlwifT5BYm91dDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIlwifT5QYWdlczwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBvbkNsaWNrPXt0b2dnbGVTdWJOYXZ9IGhyZWY9e1wiXCJ9PkJsb2dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTdWJOYXYgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5wPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiXCJ9PkNhcmVlcnM8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGhpZGRlbiBtZDpmbGV4IGdhcC02ICR7bmF2VGV4dH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCJcIn0+SG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCJcIn0+QWJvdXQ8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiXCJ9PlBhZ2VzPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIlwifT5CbG9nPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIlwifT5DYXJlZXJzPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaWRkZW4gbWQ6ZmxleCc+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgdGV4dC1ibGFjayBiZy13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1mdWxsICR7c2Nyb2xsZWQgPyBcImJnLWdyZWVuLTMwMFwiIDogXCJcIn0gJHtzY3JvbGxlZCA/IFwiYmctZ3JlZW4tNjAwXCIgOiBcInRleHQtYmxhY2tcIn1gfT5UcnkgZm9yIEZyZWU8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhciJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTG9nbyIsIkxvZ29EYXJrIiwiSW1hZ2UiLCJMaW5rIiwiR2lIYW1idXJnZXJNZW51IiwiQWlPdXRsaW5lQ2xvc2UiLCJTdWJOYXZCYXIiLCJOYXZCYXIiLCJzY3JvbGxlZCIsInNldFNjcm9sbGVkIiwibW9iaWxlVmlldyIsInNldE1vYmlsZVZpZXciLCJzaG93U3ViTmF2Iiwic2V0U2hvd1N1Yk5hdiIsInRvZ2dsZVN1Yk5hdiIsImhhbmRsZU1lbnUiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuYXZiYXJDbGFzcyIsIm5hdlRleHQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibmF2IiwiZGl2Iiwic3JjIiwiYWx0Iiwib25DbGljayIsImhyZWYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/NavBar.js\n"));

/***/ })

});