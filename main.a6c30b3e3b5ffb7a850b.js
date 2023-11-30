/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/style.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tborder: 0 none;\r\n\tbox-sizing: border-box;\r\n\toverflow: hidden;\r\n}\r\n\r\nbody {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\theight: 100vh;\r\n\tbackground: black;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\tuser-select: none;\r\n}\r\n\r\n.grid {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(3, auto);\r\n\tgrid-template-rows: repeat(3, auto);\r\n\tpadding: 0.6vh;\r\n\tgap: 0.6vh;\r\n\tborder-radius: 0.6vh;\r\n\tbackground-color: white;\r\n}\r\n\r\n.grid>div {\r\n\t--cel-size: min(22vh, 25vw);\r\n\theight: var(--cel-size);\r\n\twidth: var(--cel-size);\r\n\tbackground-color: rgba(73, 74, 77, 0.2);\r\n\tborder-radius:0.3rem;\r\n\tcolor: transparent;\r\n\r\n\t&:hover {\r\n\t\tbackground-color: rgba(255, 255, 255, 0.8);\r\n\t}\r\n}\r\n\r\n.grid>div>img {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tdisplay: none;\r\n\tobject-fit: cover;\r\n}\r\n\r\n.header{\r\n\tposition: absolute;\r\n\ttop: 1rem;\r\n}\r\n\r\n.btn_restart{\r\n\tpadding: 6px;\r\n\tborder-radius: 6rem;\r\n\tbackground-color: white;\r\n\twidth: 10rem;\r\n\theight: 4rem;\r\n\tfont-size: 18px;\r\n\tfont-weight: 600;\r\n\r\n\t&:hover {\r\n\t\tbackground-color: rgba(255, 255, 255, 0.8);\r\n\t\tcursor: pointer;\r\n\t}\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lo-wb/./styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://lo-wb/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://lo-wb/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://lo-wb/./styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://lo-wb/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://lo-wb/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://lo-wb/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://lo-wb/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://lo-wb/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://lo-wb/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/CrossAndMarcs.js":
/*!******************************!*\
  !*** ./src/CrossAndMarcs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CAM: () => (/* binding */ CAM)\n/* harmony export */ });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n\r\n\r\nclass CAM {\r\n\tconstructor() {\r\n\t\tthis.playground;\r\n\t\tthis.init();\r\n\t\tthis.player = 1;\r\n\t\tthis.gameOver = false;\r\n\t\tthis.cells;\r\n\t\tthis.playerWinner;\r\n\t}\r\n\r\n\tinit() {\r\n\t\tthis.generatePlayField();\r\n\t\tthis.onClick = this.onClick.bind(this);\r\n\t\tthis.checkDiagonal = this.checkDiagonal.bind(this);\r\n\t\tthis.checkForThree = this.checkForThree.bind(this);\r\n\t}\r\n\r\n\tgeneratePlayField() {\r\n\t\tthis.playground = new Array(_variables__WEBPACK_IMPORTED_MODULE_0__.PLAYFIELD_ROWS).fill()\r\n\t\t\t.map(() => new Array(_variables__WEBPACK_IMPORTED_MODULE_0__.PLAYFIELD_COLUMNS).fill(0))\r\n\t}\r\n\r\n\tonClick(e) {\r\n\t\tswitch (e.target.classList.value) {\r\n\t\t\tcase '1':\r\n\t\t\t\tthis.playground[0][0] = this.player;\r\n\t\t\t\tthis.getRotatePlayer();\r\n\t\t\t\tthis.checkForThree();\r\n\t\t\t\tbreak;\r\n\t\t\tcase '2':\r\n\t\t\t\tthis.playground[0][1] = this.player;\r\n\t\t\t\tthis.getRotatePlayer();\r\n\t\t\t\tthis.checkForThree();\r\n\t\t\t\tbreak;\r\n\t\t\tcase '3':\r\n\t\t\t\tthis.playground[0][2] = this.player;\r\n\t\t\t\tthis.getRotatePlayer();\r\n\t\t\t\tthis.checkForThree();\r\n\t\t\t\tbreak;\r\n\t\t\tcase '4':\r\n\t\t\t\tthis.playground[1][0] = this.player;\r\n\t\t\t\tthis.getRotatePlayer();\r\n\t\t\t\tthis.checkForThree();\r\n\t\t\t\tbreak;\r\n\t\t\tcase '5':\r\n\t\t\t\tthis.playground[1][1] = this.player;\r\n\t\t\t\tthis.getRotatePlayer();\r\n\t\t\t\tthis.checkForThree();\r\n\t\t\t\tbreak;\r\n\t\t\tcase '6':\r\n\t\t\t\tthis.playground[1][2] = this.player;\r\n\t\t\t\tthis.getRotatePlayer();\r\n\t\t\t\tthis.checkForThree();\r\n\t\t\t\tbreak;\r\n\t\t\tcase '7':\r\n\t\t\t\tthis.playground[2][0] = this.player;\r\n\t\t\t\tthis.getRotatePlayer();\r\n\t\t\t\tthis.checkForThree();\r\n\t\t\t\tbreak;\r\n\t\t\tcase '8':\r\n\t\t\t\tthis.playground[2][1] = this.player;\r\n\t\t\t\tthis.getRotatePlayer();\r\n\t\t\t\tthis.checkForThree();\r\n\t\t\t\tbreak;\r\n\t\t\tcase '9':\r\n\t\t\t\tthis.playground[2][2] = this.player;\r\n\t\t\t\tthis.getRotatePlayer();\r\n\t\t\t\tthis.checkForThree();\r\n\t\t\t\tbreak;\r\n\r\n\t\t\tdefault:\r\n\t\t\t\tconsole.log('ошибка ввода');\r\n\t\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n\r\n\tgetRotatePlayer() {\r\n\t\tif (this.player === 1) {\r\n\t\t\tthis.player = 2;\r\n\t\t} else {\r\n\t\t\tthis.player = 1;\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n\tcheckForThree() {\r\n\t\tlocalStorage.setItem('map',JSON.stringify(this.playground));\r\n\t\tlocalStorage.setItem('player',JSON.stringify(this.player));\r\n\t\tfor (let row = 0; row < _variables__WEBPACK_IMPORTED_MODULE_0__.PLAYFIELD_ROWS; row++) {\r\n\t\t\tlet first = 0;\r\n\t\t\tlet second = 0;\r\n\t\t\tif (this.playground[row].every(cell => cell == 1)) {\r\n\t\t\t\tthis.gameOver = true;\r\n\r\n\t\t\t}\r\n\t\t\tif (this.playground[row].every(cell => cell == 2)) {\r\n\t\t\t\tthis.gameOver = true;\r\n\r\n\t\t\t}\r\n\t\t\tfor (let col = 0; col < _variables__WEBPACK_IMPORTED_MODULE_0__.PLAYFIELD_COLUMNS; col++) {\r\n\t\t\t\tif (this.playground[col][row] == 1) {\r\n\t\t\t\t\tfirst++;\r\n\t\t\t\t}\r\n\t\t\t\tif (first == 3) {\r\n\t\t\t\t\tthis.gameOver = true;\r\n\t\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (this.playground[col][row] == 2) {\r\n\t\t\t\t\tsecond++;\r\n\t\t\t\t}\r\n\t\t\t\tif (second == 3) {\r\n\t\t\t\t\tthis.gameOver = true;\r\n\t\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t}\r\n\t\tthis.checkDiagonal(this.playground);\r\n\t}\r\n\r\n\tcheckDiagonal(matrix) {\r\n\t\tconst indices1 = [[0, 0], [1, 1], [2, 2]];\r\n\t\tconst indices2 = [[0, 2], [1, 1], [2, 0]];\r\n\t  \r\n\t\tconst values1 = indices1.map(([row, col]) => matrix[row][col]);\r\n\t\tconst values2 = indices2.map(([row, col]) => matrix[row][col]);\r\n\t  \r\n\t\tif (values1.every(value => value === 1)) {\r\n\t\t\tthis.gameOver = true;\r\n\t\t} else if (values1.every(value => value === 2)) {\r\n\t\t\tthis.gameOver = true;\r\n\t\t} else if (values2.every(value => value === 1)) {\r\n\t\t\tthis.gameOver = true;\r\n\t\t} else if (values2.every(value => value === 2)) {\r\n\t\t\tthis.gameOver = true;\r\n\t\t}\r\n\t}\r\n\t  \r\n\r\n\tgetWinner () {\r\n\t\tthis.playerWinner = this.player;\r\n\t\tif(this.playerWinner == 2) alert('Выйграли Крестики!');\r\n\t\tif(this.playerWinner == 1) alert('Выйграли Нолики!');\r\n\t\tthis.gameOver = false;\r\n\t}\r\n\r\n}\n\n//# sourceURL=webpack://lo-wb/./src/CrossAndMarcs.js?");

/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _CrossAndMarcs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CrossAndMarcs */ \"./src/CrossAndMarcs.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n\r\n\r\n\r\n\r\nconst game = new _CrossAndMarcs__WEBPACK_IMPORTED_MODULE_1__.CAM();\r\nconst cells = document.querySelectorAll('.grid>div');\r\ngame.cells = cells;\r\n\r\ninitPlayGround();\r\n\r\ndocument.querySelector('.btn_restart').addEventListener('click', () => {\r\n\tgame.generatePlayField();\r\n\tcells.forEach(ceil => {\r\n\t\tceil.childNodes[0].src = '';\r\n\t\tceil.childNodes[0].style.display = 'none';\r\n\t})\r\n\tgame.player = 1;\r\n\tlocalStorage.removeItem('map');\r\n\tcells.forEach(ceil => ceil.addEventListener('click', game.onClick));\r\n\tinterval = setInterval(()=> {\r\n\t\tif (game.gameOver) {\r\n\t\t\tcells.forEach(ceil => ceil.removeEventListener('click', game.onClick));\r\n\t\t\tclearInterval(interval);\r\n\t\t\tgame.getWinner();\r\n\t\t\tlocalStorage.removeItem('map');\r\n\t\t}\r\n\t}, 1)\r\n})\r\n\r\nlet interval = setInterval(()=> {\r\n\tif (game.gameOver) {\r\n\t\tcells.forEach(ceil => ceil.removeEventListener('click', game.onClick));\r\n\t\tconsole.log('remove click listeners');\r\n\t\tclearInterval(interval);\r\n\t\tgame.getWinner();\r\n\t\tlocalStorage.removeItem('map');\r\n\t}\r\n}, 1)\r\n\r\n\r\nfunction initPlayGround() {\r\n\tif(localStorage.getItem('map')) {\r\n\t\tgame.playground = JSON.parse(localStorage.getItem('map'));\r\n\t\tgame.player = JSON.parse(localStorage.getItem('player'));\r\n\t\tFillPlayGroundRefresh();\r\n\t}\r\n\tcells.forEach(ceil => ceil.addEventListener('click', game.onClick));\r\n\tdocument.querySelector('body').addEventListener('click', () => {\r\n\t\tFillPlayGround();\r\n\t});\r\n\r\n}\r\n\r\n\r\nfunction ConverToCEil (row, col) {\r\n\tif(row === 2) {\r\n\t\trow += 3;\r\n\t\tcol += 1;\r\n\t};\r\n\tif(row === 1) {\r\n\t\trow += 1\r\n\t\tcol += 1;\r\n\t};\r\n\treturn ((row ) + (col));\r\n}\r\n\r\nfunction FillPlayGround () {\r\n\tfor(let row = 0; row < _variables__WEBPACK_IMPORTED_MODULE_2__.PLAYFIELD_ROWS; row++) {\r\n\t\tfor(let col = 0; col < _variables__WEBPACK_IMPORTED_MODULE_2__.PLAYFIELD_COLUMNS; col++) {\r\n\t\t\tif(game.playground[row][col] == 0) continue;\r\n\t\t\tconst ceil = cells[ConverToCEil(row,col)];\r\n\t\t\tconsole.log(ceil.children[0].src);\r\n\t\t\tif(ceil.children[0].src === 'https://xxantonyy.github.io/WBL2_tic_tac_toe/') {\r\n\t\t\t\tif(game.player === 2) {\r\n\t\t\t\t\tceil.children[0].src = 'https://cdn-icons-png.flaticon.com/512/7420/7420933.png';\r\n\t\t\t\t\tceil.children[0].style.display = 'block';\r\n\t\t\t\t}\r\n\t\t\t\tif(game.player === 1) {\r\n\t\t\t\t\tceil.children[0].src= 'https://cdn-icons-png.flaticon.com/512/32/32463.png';\r\n\t\t\t\t\tceil.children[0].style.display = 'block';\r\n\t\t\t\t}\r\n\t\t\t};\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction FillPlayGroundRefresh () {\r\n\tfor(let row = 0; row < _variables__WEBPACK_IMPORTED_MODULE_2__.PLAYFIELD_ROWS; row++) {\r\n\t\tfor(let col = 0; col < _variables__WEBPACK_IMPORTED_MODULE_2__.PLAYFIELD_COLUMNS; col++) {\r\n\t\t\tif(game.playground[row][col] == 0) continue;\r\n\t\t\tconst ceil = cells[ConverToCEil(row,col)];\r\n\t\t\tif(ceil.children[0].src === 'https://xxantonyy.github.io/WBL2_tic_tac_toe/') {\r\n\t\t\t\tif(game.playground[row][col] === 1) {\r\n\t\t\t\t\tceil.children[0].src = 'https://cdn-icons-png.flaticon.com/512/7420/7420933.png';\r\n\t\t\t\t\tceil.children[0].style.display = 'block';\r\n\t\t\t\t}\r\n\t\t\t\tif(game.playground[row][col] === 2) {\r\n\t\t\t\t\tceil.children[0].src= 'https://cdn-icons-png.flaticon.com/512/32/32463.png';\r\n\t\t\t\t\tceil.children[0].style.display = 'block';\r\n\t\t\t\t}\r\n\t\t\t};\r\n\t\t}\r\n\t}\r\n}\r\n\r\n\n\n//# sourceURL=webpack://lo-wb/./src/scripts.js?");

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PLAYFIELD_COLUMNS: () => (/* binding */ PLAYFIELD_COLUMNS),\n/* harmony export */   PLAYFIELD_ROWS: () => (/* binding */ PLAYFIELD_ROWS)\n/* harmony export */ });\nconst PLAYFIELD_COLUMNS = 3;\r\nconst PLAYFIELD_ROWS = 3;\r\n\n\n//# sourceURL=webpack://lo-wb/./src/variables.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts.js");
/******/ 	
/******/ })()
;