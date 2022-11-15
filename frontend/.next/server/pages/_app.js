/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./hooks/index.ts":
/*!************************!*\
  !*** ./hooks/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useIsMounted\": () => (/* reexport safe */ _useIsMounted__WEBPACK_IMPORTED_MODULE_0__.useIsMounted)\n/* harmony export */ });\n/* harmony import */ var _useIsMounted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useIsMounted */ \"./hooks/useIsMounted.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QyIsInNvdXJjZXMiOlsid2VicGFjazovL0BjcmVhdGUtd2ViMy9mcm9udGVuZC8uL2hvb2tzL2luZGV4LnRzPzViMjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgdXNlSXNNb3VudGVkIH0gZnJvbSAnLi91c2VJc01vdW50ZWQnO1xyXG4iXSwibmFtZXMiOlsidXNlSXNNb3VudGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/index.ts\n");

/***/ }),

/***/ "./hooks/useIsMounted.ts":
/*!*******************************!*\
  !*** ./hooks/useIsMounted.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useIsMounted\": () => (/* binding */ useIsMounted)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useIsMounted = ()=>{\n    const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>setMounted(true), []);\n    return mounted;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VJc01vdW50ZWQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRXhCLE1BQU1DLFlBQVksR0FBRyxJQUFNO0lBQ2hDLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR0gsMkNBQWMsQ0FBQyxLQUFLLENBQUM7SUFFbkRBLDRDQUFlLENBQUMsSUFBTUcsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRTVDLE9BQU9ELE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY3JlYXRlLXdlYjMvZnJvbnRlbmQvLi9ob29rcy91c2VJc01vdW50ZWQudHM/NDA5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlSXNNb3VudGVkID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHNldE1vdW50ZWQodHJ1ZSksIFtdKTtcclxuXHJcbiAgcmV0dXJuIG1vdW50ZWQ7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUlzTW91bnRlZCIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useIsMounted.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks */ \"./hooks/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// Imports\n\n\n\n\n\n\n// Get environment variables\nconst alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;\n// const infuraId = process.env.NEXT_PUBLIC_INFURA_ID as string;\nconst hardhatChain = {\n    id: 31337,\n    name: \"Hardhat\",\n    nativeCurrency: {\n        decimals: 18,\n        name: \"Hardhat\",\n        symbol: \"HARD\"\n    },\n    network: \"hardhat\",\n    rpcUrls: {\n        default: \"http://127.0.0.1:8545\"\n    },\n    testnet: true\n};\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.mainnet,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.polygon,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.optimism,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.arbitrum,\n    hardhatChain\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__.alchemyProvider)({\n        apiKey: alchemyId\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.getDefaultWallets)({\n    appName: \"create-web3\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst App = ({ Component , pageProps  })=>{\n    const isMounted = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useIsMounted)();\n    if (!isMounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.RainbowKitProvider, {\n            coolMode: true,\n            chains: chains,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Epic NFTs\"\n                    }, void 0, false, {\n                        fileName: \"/Users/xian/epic-nfts/frontend/pages/_app.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/xian/epic-nfts/frontend/pages/_app.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/xian/epic-nfts/frontend/pages/_app.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/xian/epic-nfts/frontend/pages/_app.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/xian/epic-nfts/frontend/pages/_app.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBRUU7QUFDRjtBQUUvQixVQUFVO0FBQ2dFO0FBQ2hCO0FBQ0Y7QUFFYjtBQUtYO0FBRVE7QUFFeEMsNEJBQTRCO0FBQzVCLE1BQU1XLFNBQVMsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLHNCQUFzQjtBQUNwRCxnRUFBZ0U7QUFFaEUsTUFBTUMsWUFBWSxHQUFVO0lBQzFCQyxFQUFFLEVBQUUsS0FBSztJQUNUQyxJQUFJLEVBQUUsU0FBUztJQUNmQyxjQUFjLEVBQUU7UUFDZEMsUUFBUSxFQUFFLEVBQUU7UUFDWkYsSUFBSSxFQUFFLFNBQVM7UUFDZkcsTUFBTSxFQUFFLE1BQU07S0FDZjtJQUNEQyxPQUFPLEVBQUUsU0FBUztJQUNsQkMsT0FBTyxFQUFFO1FBQ1BDLE9BQU8sRUFBRSx1QkFBdUI7S0FDakM7SUFDREMsT0FBTyxFQUFFLElBQUk7Q0FDZDtBQUVELE1BQU0sRUFBRUMsTUFBTSxHQUFFQyxRQUFRLEdBQUUsR0FBR3JCLHNEQUFlLENBQzFDO0lBQUNILGdEQUFhO0lBQUVBLGdEQUFhO0lBQUVBLGlEQUFjO0lBQUVBLGlEQUFjO0lBQUVhLFlBQVk7Q0FBQyxFQUM1RTtJQUFDVCx3RUFBZSxDQUFDO1FBQUV5QixNQUFNLEVBQUVwQixTQUFTO0tBQUUsQ0FBQztJQUFFSixzRUFBYyxFQUFFO0NBQUMsQ0FDM0Q7QUFFRCxNQUFNLEVBQUV5QixVQUFVLEdBQUUsR0FBR3hCLHlFQUFpQixDQUFDO0lBQ3ZDeUIsT0FBTyxFQUFFLGFBQWE7SUFDdEJSLE1BQU07Q0FDUCxDQUFDO0FBRUYsTUFBTVMsV0FBVyxHQUFHL0IsbURBQVksQ0FBQztJQUMvQmdDLFdBQVcsRUFBRSxJQUFJO0lBQ2pCSCxVQUFVO0lBQ1ZOLFFBQVE7Q0FDVCxDQUFDO0FBRUYsTUFBTVUsR0FBRyxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksR0FBSztJQUNsRCxNQUFNQyxTQUFTLEdBQUc3QixvREFBWSxFQUFFO0lBRWhDLElBQUksQ0FBQzZCLFNBQVMsRUFBRSxPQUFPLElBQUksQ0FBQztJQUM1QixxQkFDRSw4REFBQ25DLDhDQUFXO1FBQUNvQyxNQUFNLEVBQUVOLFdBQVc7a0JBQzlCLDRFQUFDekIsc0VBQWtCO1lBQUNnQyxRQUFRO1lBQUNoQixNQUFNLEVBQUVBLE1BQU07OzhCQUN6Qyw4REFBQ3hCLGtEQUFROzhCQUNQLDRFQUFDeUMsT0FBSztrQ0FBQyxXQUFTOzs7OztpQ0FBUTs7Ozs7NkJBQ2Y7OEJBQ1gsOERBQUNMLFNBQVM7b0JBQUUsR0FBR0MsU0FBUzs7Ozs7NkJBQUk7Ozs7OztxQkFDVDs7Ozs7aUJBQ1QsQ0FDZDtBQUNKLENBQUM7QUFFRCxpRUFBZUYsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGNyZWF0ZS13ZWIzL2Zyb250ZW5kLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IE5leHRIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5cbi8vIEltcG9ydHNcbmltcG9ydCB7IGNoYWluLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnLCBjb25maWd1cmVDaGFpbnMgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgeyBhbGNoZW15UHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvYWxjaGVteSc7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9wdWJsaWMnO1xuXG5pbXBvcnQgJ0ByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzcyc7XG5pbXBvcnQge1xuICBnZXREZWZhdWx0V2FsbGV0cyxcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxuICBDaGFpbixcbn0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XG5cbmltcG9ydCB7IHVzZUlzTW91bnRlZCB9IGZyb20gJy4uL2hvb2tzJztcblxuLy8gR2V0IGVudmlyb25tZW50IHZhcmlhYmxlc1xuY29uc3QgYWxjaGVteUlkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUxDSEVNWV9JRCBhcyBzdHJpbmc7XG4vLyBjb25zdCBpbmZ1cmFJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lORlVSQV9JRCBhcyBzdHJpbmc7XG5cbmNvbnN0IGhhcmRoYXRDaGFpbjogQ2hhaW4gPSB7XG4gIGlkOiAzMTMzNyxcbiAgbmFtZTogJ0hhcmRoYXQnLFxuICBuYXRpdmVDdXJyZW5jeToge1xuICAgIGRlY2ltYWxzOiAxOCxcbiAgICBuYW1lOiAnSGFyZGhhdCcsXG4gICAgc3ltYm9sOiAnSEFSRCcsXG4gIH0sXG4gIG5ldHdvcms6ICdoYXJkaGF0JyxcbiAgcnBjVXJsczoge1xuICAgIGRlZmF1bHQ6ICdodHRwOi8vMTI3LjAuMC4xOjg1NDUnLFxuICB9LFxuICB0ZXN0bmV0OiB0cnVlLFxufTtcblxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG4gIFtjaGFpbi5tYWlubmV0LCBjaGFpbi5wb2x5Z29uLCBjaGFpbi5vcHRpbWlzbSwgY2hhaW4uYXJiaXRydW0sIGhhcmRoYXRDaGFpbl0sXG4gIFthbGNoZW15UHJvdmlkZXIoeyBhcGlLZXk6IGFsY2hlbXlJZCB9KSwgcHVibGljUHJvdmlkZXIoKV1cbik7XG5cbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuICBhcHBOYW1lOiAnY3JlYXRlLXdlYjMnLFxuICBjaGFpbnMsXG59KTtcblxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHJvdmlkZXIsXG59KTtcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcbiAgY29uc3QgaXNNb3VudGVkID0gdXNlSXNNb3VudGVkKCk7XG5cbiAgaWYgKCFpc01vdW50ZWQpIHJldHVybiBudWxsO1xuICByZXR1cm4gKFxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY29vbE1vZGUgY2hhaW5zPXtjaGFpbnN9PlxuICAgICAgICA8TmV4dEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkVwaWMgTkZUczwvdGl0bGU+XG4gICAgICAgIDwvTmV4dEhlYWQ+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgIDwvV2FnbWlDb25maWc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJOZXh0SGVhZCIsImNoYWluIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJjb25maWd1cmVDaGFpbnMiLCJhbGNoZW15UHJvdmlkZXIiLCJwdWJsaWNQcm92aWRlciIsImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwidXNlSXNNb3VudGVkIiwiYWxjaGVteUlkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FMQ0hFTVlfSUQiLCJoYXJkaGF0Q2hhaW4iLCJpZCIsIm5hbWUiLCJuYXRpdmVDdXJyZW5jeSIsImRlY2ltYWxzIiwic3ltYm9sIiwibmV0d29yayIsInJwY1VybHMiLCJkZWZhdWx0IiwidGVzdG5ldCIsImNoYWlucyIsInByb3ZpZGVyIiwibWFpbm5ldCIsInBvbHlnb24iLCJvcHRpbWlzbSIsImFyYml0cnVtIiwiYXBpS2V5IiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNNb3VudGVkIiwiY2xpZW50IiwiY29vbE1vZGUiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/alchemy");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();