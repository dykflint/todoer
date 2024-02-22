/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/checkbox.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/checkbox.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --green: #009879;
    --red: #BC5332;
}
* {
    padding: 0;
    margin: 0;
}
body {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px max-content auto;
    position: relative;
    /* justify-content: center;
    align-items: center; */
    height: 100vh;
    width: 100vw;
}
/* Sidebar */
#sidebar {
    display: grid;
    justify-content: space-between;
    margin: auto;
    grid-area: 2/1/3/2;
    padding: 1rem 0.5rem;
    margin: 1rem auto;
    border: 3px solid var(--green);
    box-shadow: 10px -10px var(--red);
}
#list-of-projects {
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-flow: row;
    gap: 15px;
}
#list-of-projects li {
    cursor: pointer;
    padding: 5px;
    text-align: center;
}
#list-of-projects li:hover {
    background-color: var(--red);
    color: white;
}
#header {
    grid-area: 1/1/2/2;
    display: grid;
    justify-content: center;
    align-items: center;
}
/* Task table */
#table-div {
    grid-area: 3/1/4/2;
    position: relative;
    width: max-content;
    margin: auto;
    margin-top: 0;
}
#task-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9rem;
    min-width: 400px;
    max-width: min(200ch, 50vw);
    height: max-content;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
#task-table thead tr {
    background-color: var(--green);
    color: white;
    text-align: left;
    font-weight: bold;
}
#task-table th,
#task-table td {
    padding: 12px 15px;
}
#task-table tbody tr {
    border-bottom: 1px solid #dddddd;
}
#task-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}
#task-table tbody tr:last-of-type {
    border-bottom: 2px solid var(--green);
}
#task-table tbody tr.active-row {
    font-weight: bold; 
    color: var(--green);
}
/* Add strike through ability to table */
td {
    position: relative; 
}
tr.strikeout {
    color: #dddddd;
}
tr.strikeout td:before {
    content: " ";
    position: absolute;
    top: 50%;
    left: 0;
    border-bottom: 1px solid #dddddd;
    width: 100%;
}
/* Align checkbox in the center */
input[type="checkbox"] {
    display: flex;
    justify-content: center;
}
input[type="checkbox"]:checked {
    accent-color: #dddddd;
}
input[type="checkbox"]:checked:hover {
    accent-color: #009879;
}


/* add task form */
#add-task-form, #edit-task-form{
    background-color: var(--green);
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    border: 2px solid #666;
    border-radius: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid var(--green);
    font-weight: bold;
    /* dim everything around form */
    box-shadow: 0 0 0 2000px rgba(0,0,0,0.5);
}
#toggle-task-form {
    position: absolute;
    font-size: 2.5rem;
    border: none;
    background-color: var(--red);
    /* padding: 15px; */
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: grid; 
    justify-content: center;
    align-items: center;
    color: var(--green);
    right: -20%;
    top: 20px;
}
#task-title, #edit-task-title {
    grid-area: 1/1/2/2;
    display: grid;
    gap: 5px;
    grid-template-columns: 1fr;
}
#due-date, #edit-due-date {
    grid-area: 1/2/2/3;
    display: grid;
    gap: 5px;
    grid-template-columns: 1fr;
}
#prio, #edit-prio {
    grid-area: 2/1/3/2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
#low-prio-container, #mid-prio-container, 
#high-prio-container, #edit-low-prio-container, 
#edit-mid-prio-container, #edit-high-prio-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    text-align: center;
}
#low-prio, #mid-prio, #high-prio,
#edit-low-prio, #edit-mid-prio, #edit-high-prio {
    accent-color: var(--green);
}
#project, #edit-project {
    grid-area: 2/2/3/3;
    display: grid;
    gap: 5px;
    grid-template-columns: 1fr;
}
#form-buttons, #edit-form-buttons {
    grid-area: 3/1/4/3;
    display: grid;
    grid-template-columns: 1fr;
    margin: auto;
}
#submit-task, #edit-task, #remove-task {
    border: none;
    background-color: white;
    color: var(--green);
    font-size: 1rem;
    font-weight: bold;
    padding: 15px;
    border-radius: 15px;
}
#submit-task:hover, #edit-task:hover, 
#remove-task:hover {
    cursor: pointer;
    background-color: var(--red);
    color: white;
}
#toggle-task-form:hover {
    cursor: pointer;
    color: white;
}
/* disable resizing of textarea for description */
textarea {
    resize: none;
}
.hide {
    display: none !important;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --green: #009879;\n    --red: #BC5332;\n}\n* {\n    padding: 0;\n    margin: 0;\n}\nbody {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 100px max-content auto;\n    position: relative;\n    /* justify-content: center;\n    align-items: center; */\n    height: 100vh;\n    width: 100vw;\n}\n/* Sidebar */\n#sidebar {\n    display: grid;\n    justify-content: space-between;\n    margin: auto;\n    grid-area: 2/1/3/2;\n    padding: 1rem 0.5rem;\n    margin: 1rem auto;\n    border: 3px solid var(--green);\n    box-shadow: 10px -10px var(--red);\n}\n#list-of-projects {\n    list-style-type: none;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-auto-flow: row;\n    gap: 15px;\n}\n#list-of-projects li {\n    cursor: pointer;\n    padding: 5px;\n    text-align: center;\n}\n#list-of-projects li:hover {\n    background-color: var(--red);\n    color: white;\n}\n#header {\n    grid-area: 1/1/2/2;\n    display: grid;\n    justify-content: center;\n    align-items: center;\n}\n/* Task table */\n#table-div {\n    grid-area: 3/1/4/2;\n    position: relative;\n    width: max-content;\n    margin: auto;\n    margin-top: 0;\n}\n#task-table {\n    border-collapse: collapse;\n    margin: 25px 0;\n    font-size: 0.9rem;\n    min-width: 400px;\n    max-width: min(200ch, 50vw);\n    height: max-content;\n    border-radius: 5px 5px 0 0;\n    overflow: hidden;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n}\n#task-table thead tr {\n    background-color: var(--green);\n    color: white;\n    text-align: left;\n    font-weight: bold;\n}\n#task-table th,\n#task-table td {\n    padding: 12px 15px;\n}\n#task-table tbody tr {\n    border-bottom: 1px solid #dddddd;\n}\n#task-table tbody tr:nth-of-type(even) {\n    background-color: #f3f3f3;\n}\n#task-table tbody tr:last-of-type {\n    border-bottom: 2px solid var(--green);\n}\n#task-table tbody tr.active-row {\n    font-weight: bold; \n    color: var(--green);\n}\n/* Add strike through ability to table */\ntd {\n    position: relative; \n}\ntr.strikeout {\n    color: #dddddd;\n}\ntr.strikeout td:before {\n    content: \" \";\n    position: absolute;\n    top: 50%;\n    left: 0;\n    border-bottom: 1px solid #dddddd;\n    width: 100%;\n}\n/* Align checkbox in the center */\ninput[type=\"checkbox\"] {\n    display: flex;\n    justify-content: center;\n}\ninput[type=\"checkbox\"]:checked {\n    accent-color: #dddddd;\n}\ninput[type=\"checkbox\"]:checked:hover {\n    accent-color: #009879;\n}\n\n\n/* add task form */\n#add-task-form, #edit-task-form{\n    background-color: var(--green);\n    color: white;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(3, 1fr);\n    gap: 15px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1.5rem;\n    border: 2px solid #666;\n    border-radius: 25px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border: 5px solid var(--green);\n    font-weight: bold;\n    /* dim everything around form */\n    box-shadow: 0 0 0 2000px rgba(0,0,0,0.5);\n}\n#toggle-task-form {\n    position: absolute;\n    font-size: 2.5rem;\n    border: none;\n    background-color: var(--red);\n    /* padding: 15px; */\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    display: grid; \n    justify-content: center;\n    align-items: center;\n    color: var(--green);\n    right: -20%;\n    top: 20px;\n}\n#task-title, #edit-task-title {\n    grid-area: 1/1/2/2;\n    display: grid;\n    gap: 5px;\n    grid-template-columns: 1fr;\n}\n#due-date, #edit-due-date {\n    grid-area: 1/2/2/3;\n    display: grid;\n    gap: 5px;\n    grid-template-columns: 1fr;\n}\n#prio, #edit-prio {\n    grid-area: 2/1/3/2;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n#low-prio-container, #mid-prio-container, \n#high-prio-container, #edit-low-prio-container, \n#edit-mid-prio-container, #edit-high-prio-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 10px;\n    text-align: center;\n}\n#low-prio, #mid-prio, #high-prio,\n#edit-low-prio, #edit-mid-prio, #edit-high-prio {\n    accent-color: var(--green);\n}\n#project, #edit-project {\n    grid-area: 2/2/3/3;\n    display: grid;\n    gap: 5px;\n    grid-template-columns: 1fr;\n}\n#form-buttons, #edit-form-buttons {\n    grid-area: 3/1/4/3;\n    display: grid;\n    grid-template-columns: 1fr;\n    margin: auto;\n}\n#submit-task, #edit-task, #remove-task {\n    border: none;\n    background-color: white;\n    color: var(--green);\n    font-size: 1rem;\n    font-weight: bold;\n    padding: 15px;\n    border-radius: 15px;\n}\n#submit-task:hover, #edit-task:hover, \n#remove-task:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: white;\n}\n#toggle-task-form:hover {\n    cursor: pointer;\n    color: white;\n}\n/* disable resizing of textarea for description */\ntextarea {\n    resize: none;\n}\n.hide {\n    display: none !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/checkbox.css":
/*!**************************!*\
  !*** ./src/checkbox.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./checkbox.css */ "./node_modules/css-loader/dist/cjs.js!./src/checkbox.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/checkLocalStorage.js":
/*!**********************************!*\
  !*** ./src/checkLocalStorage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ storageAvailable)
/* harmony export */ });
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
  

/***/ }),

/***/ "./src/headerImage.js":
/*!****************************!*\
  !*** ./src/headerImage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_Todoer_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Todoer.png */ "./src/images/Todoer.png");

const header = document.querySelector('#header');
const headerImage = new Image();
headerImage.src = _images_Todoer_png__WEBPACK_IMPORTED_MODULE_0__;
header.appendChild(headerImage);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./src/images/Todoer.png":
/*!*******************************!*\
  !*** ./src/images/Todoer.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bc0685e5e5a065bfd0d.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _checkbox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox.css */ "./src/checkbox.css");
/* harmony import */ var _headerImage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headerImage.js */ "./src/headerImage.js");
/* harmony import */ var _checkLocalStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkLocalStorage.js */ "./src/checkLocalStorage.js");




// Function to add event listener
function addEventListenerWithTracking(element, event, callback) {
    if (!element._eventListeners) {
        element._eventListeners = {};
    }
    if (!element._eventListeners[event]) {
        element._eventListeners[event] = [];
    }
    element._eventListeners[event].push(callback);
    element.addEventListener(event, callback);
}

// Function to remove all event listeners
function removeAllEventListeners(element, event) {
    if (element._eventListeners && element._eventListeners[event]) {
        element._eventListeners[event].forEach(callback => {
            element.removeEventListener(event, callback);
        });
        element._eventListeners[event] = [];
    }
}
// Check task and grey out the task
// Give each checkbox an event listener 
function activateCheckboxEvents() {
    const taskCheckboxes = document.querySelectorAll('input[type="checkbox"]');

    taskCheckboxes.forEach(task => {
        // Remove all previous event listeners and refresh with new ones
        removeAllEventListeners(task, "click");
        addEventListenerWithTracking(task, "click", () => {
            task.closest('tr').classList.toggle('strikeout');
        })
    });
};
// create task
function CreateToDo(title, dueDate, priority, project) {
    // give default project if not project is chosen
    if(project == "") {
        project = "unassigned";
    }
    return {
        title,
        dueDate,
        priority,
        project
    }
};
const taskTable = document.querySelector('#task-table');
// Add tasks event listener
const addTaskButton = document.querySelector('#submit-task');
addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(addTaskButton);
}
);

// Add Task (only DOM manipulation)
function addTask(button) {
    // extract the values and enter them into a new row at the end of the table
    // also: reset any previous task values 
    const title = document.querySelector('[name="task-title"]').value;
    // Date format is YYYY-MM-DD
    const dueDate = document.querySelector('[name="due-date"]').value;
    const prio = document.querySelector('[name="prio"]:checked').value;
    const project = document.querySelector('[name="project"]').value;
    // const description = document.querySelector('[name="description"]').value;
    const task = CreateToDo(title, dueDate, prio, project);
    // check if there are any tbody rows
    console.log(task);
    populateTable(task);
    // Run setTableIds to reset all data-index values and activate checkbox event listeners 
    setTableIds(taskTable);
    activateCheckboxEvents();
    tableToJson(taskTable);
    collectProjects();
    toggleAddForm();
    activateRowEditEvents(taskTable);
}
const addTaskForm = document.querySelector('#add-task-form');
addTaskForm.addEventListener("click", event => event.stopPropagation());
const toggleFormButton = document.querySelector('#toggle-task-form');
function toggleAddForm() {
    addTaskForm.classList.toggle('hide');
}
toggleFormButton.addEventListener("click", () => {
    toggleAddForm();
})


// add click event to each row of the table 
function activateRowEditEvents(table) {
    const taskTableTbody = table.getElementsByTagName('tbody')[0];
    for (const row of taskTableTbody.rows) {
        const rowTds = row.getElementsByTagName('td');
        Array.from(rowTds).forEach((td, index) => {
            if (index > 0) {
                removeAllEventListeners(td, "click");
                addEventListenerWithTracking(td, "click", () => {
                    fillEditForm(taskTableTbody, td.closest('tr'));
                })
            }
        })
    }
}
// Edit tasks
const editForm = document.querySelector('#edit-task-form');
const closeEditForm = document.querySelector('#close-edit-form');
closeEditForm.addEventListener("click", () => {
    editForm.classList.add('hide');
    activateRowEditEvents(taskTable);
})
function fillEditForm(tableBody, tr) {
    // Chosen row elements
    const chosenRow = Array.from(tr.getElementsByTagName('td'));
    const chosenRowIndex = tr.getAttribute('data-index');
    const chosenTitle = chosenRow[1].innerHTML;
    const chosenDueDate = chosenRow[2].innerHTML;
    const chosenPrio = chosenRow[3].innerHTML;
    const chosenProject = chosenRow[4].innerHTML;
    // Fill in the following edit form elements 
    const inputTitle = document.querySelector('input[name="edit-task-title"');
    inputTitle.value = chosenTitle;
    const inputDueDate = document.querySelector('input[name="edit-due-date"');
    inputDueDate.value = chosenDueDate;
    const inputPrio = document.querySelector(`input[value=${chosenPrio}]`);
    inputPrio.value = chosenPrio;
    const inputProject = document.querySelector('input[name="edit-project"');
    inputProject.value = chosenProject;
    // Set chosen row index to manipulate the task later with ediTask
    const rowIndex = document.querySelector('#chosen-row-index');
    rowIndex.innerHTML = chosenRowIndex;
    // Remove all click events from the table while the edit form is active
    for(const row of tableBody.rows) {
        const rowTds = row.getElementsByTagName('td');
        Array.from(rowTds).forEach((td, index) => {
            removeAllEventListeners(td, "click");
        })
    }
    editForm.classList.remove('hide');
    removeAllEventListeners(removeButton, "click");
    addEventListenerWithTracking(removeButton, "click", (event) => {
        event.preventDefault();
        removeTask(chosenRowIndex);
    })
}
const editButton = document.querySelector('#edit-task');
editButton.addEventListener("click", (event) => {
    event.preventDefault();
    editTask(taskTable);
})

function editTask(table) {
    const tBodyRows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    const changedTitle = document.querySelector('[name="edit-task-title"]').value;
    // Date format is YYYY-MM-DD
    const changedDueDate = document.querySelector('[name="edit-due-date"]').value;
    const changedPrio = document.querySelector('[name="edit-prio"]:checked').value;
    const changedProject = document.querySelector('[name="edit-project"]').value;
    const rowIndex = document.querySelector('#chosen-row-index').innerHTML;
    const chosenRow = Array.from(tBodyRows[rowIndex - 1].getElementsByTagName('td'));
    // Set new values into the table 
    chosenRow[1].innerHTML = changedTitle;
    chosenRow[2].innerHTML = changedDueDate;
    chosenRow[3].innerHTML = changedPrio;
    chosenRow[4].innerHTML = changedProject;
    tableToJson(taskTable);
}
// function that removes a row from a table
const removeButton = document.querySelector('#remove-task');
function removeTask(dataIndex) {
    taskTable.deleteRow(dataIndex);
    // Close edit form 
    editForm.classList.add('hide');
    activateRowEditEvents(taskTable);
    setTableIds(taskTable);
    tableToJson(taskTable);
}

function populateTable(task) {
    if (taskTable.rows.length > 1) {
        const newTaskRow = taskTable.insertRow(-1);
        newTaskRow.insertCell(0).innerHTML = '<input type="checkbox">';
        newTaskRow.insertCell(1).innerHTML = task.title;
        newTaskRow.insertCell(2).innerHTML = task.dueDate;
        newTaskRow.insertCell(3).innerHTML = task.priority;
        newTaskRow.insertCell(4).innerHTML = task.project.length > 0 ? task.project : '';
    } else {
        const taskTableTbody = document.querySelector('#task-table').getElementsByTagName('tbody')[0];
        const TbodyFirstRow = taskTableTbody.insertRow(-1);
        TbodyFirstRow.insertCell(0).innerHTML = '<input type="checkbox">';
        TbodyFirstRow.insertCell(1).innerHTML = task.title;
        TbodyFirstRow.insertCell(2).innerHTML = task.dueDate;
        TbodyFirstRow.insertCell(3).innerHTML = task.priority;
        TbodyFirstRow.insertCell(4).innerHTML = task.project.length > 0 ? task.project : '';
    }
}
// Parse through the table and set a data-index to each row
function setTableIds(table) {
    // Loop through all rows and give each row an index in ascending order
    // Index 0 is thead tr
    Array.from(taskTable.rows).forEach((row, index) => {
        taskTable.rows[index].setAttribute('data-index', index);
    })
    activateCheckboxEvents();
}
const listOfProjects = ["show all","unassigned"];
function collectProjects(table) {
    Array.from(taskTable.rows).forEach((row, index) => {
        if (index > 0) {
            // Transform row from htmlcollection to array
            row = Array.from(row.getElementsByTagName('td'));
            const project = row[row.length - 1].innerHTML;
            if (!listOfProjects.includes(project) && project != "") {
                listOfProjects.push(project);
            }
        }
    });
    projectsToSidebar(listOfProjects);
}
// Add projects to sidebar
const sidebarProjectList = document.querySelector('#list-of-projects');
function projectsToSidebar(projects) {
    sidebarProjectList.innerHTML = "";
    projects.forEach(project => {
        const li = document.createElement('li');
        removeAllEventListeners(li, "click");
        addEventListenerWithTracking(li, "click", () => {
            showProjectView(taskTable, project);
        });
        li.append(project);
        sidebarProjectList.append(li);
    })
}
// TODO: show only project view in the table
function showProjectView(table, project) {
    Array.from(table.rows).forEach((row, index) => {
        if(index > 0){
            row.classList.remove('hide');
            const rowTds = Array.from(row.getElementsByTagName('td'));
            if(rowTds[rowTds.length - 1].innerHTML == project) {
            } else if (project == "show all") {
            } else {
                row.classList.add('hide');
            }
        }
    });
}
// Add each row of a table to a tasks json file on local storage
// Parse through table and update local storage with all current tasks 
let tasks = {
    tasks: []
};
function tableToJson(table) {
    tasks = {
        tasks: []
    };
    Array.from(taskTable.rows).forEach((row, index) => {
        if (index > 0) {
            const title = row.getElementsByTagName('td')[1].innerHTML;
            const dueDate = row.getElementsByTagName('td')[2].innerHTML;
            const prio = row.getElementsByTagName('td')[3].innerHTML;
            const project = row.getElementsByTagName('td')[4].innerHTML;
            tasks.tasks[index - 1] = {};
            tasks.tasks[index - 1].title = title;
            tasks.tasks[index - 1].dueDate = dueDate;
            tasks.tasks[index - 1].prio = prio;
            tasks.tasks[index - 1].project = project;
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Populate tasks with localStorage if tasks are available on load
function populateTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
        return;
    }
    if (Object.keys(tasks.tasks).length > 0) {
        taskTable.getElementsByTagName('tbody').innerHTML = "";
        for (const storedTask of tasks.tasks) {
            const task = CreateToDo(storedTask.title, storedTask.dueDate,
                storedTask.prio, storedTask.project);
            populateTable(task);
        }
    }
}



// function onClickOutside(ele, cb) {
//     document.addEventListener('click', event => {
//         if (!ele.contains(event.target)) cb();
//     });
// };

populateTasks();
// console.log(JSON.parse(localStorage.getItem("tasks")));
tableToJson(taskTable);
setTableIds();
collectProjects();
projectsToSidebar(listOfProjects);
activateRowEditEvents(taskTable);
// Close the add task form when clicked outside of it
window.onclick = (event) => {
    if (!event.target.matches('#add-task-form') && !event.target.matches('#toggle-task-form')) {
        if (!addTaskForm.classList.contains('hide')) {
            console.log("hello");
            addTaskForm.classList.add('hide');
        }
    }
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGtFQUFrRTtBQUNuSDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFB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QTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0c7QUFDRTtBQUM0QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxXQUFXO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY2hlY2tib3guY3NzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jaGVja2JveC5jc3M/YTk2ZCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NoZWNrTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2hlYWRlckltYWdlLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1ncmVlbjogIzAwOTg3OTtcbiAgICAtLXJlZDogI0JDNTMzMjtcbn1cbioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IG1heC1jb250ZW50IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG59XG4vKiBTaWRlYmFyICovXG4jc2lkZWJhciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcbiAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ncmVlbik7XG4gICAgYm94LXNoYWRvdzogMTBweCAtMTBweCB2YXIoLS1yZWQpO1xufVxuI2xpc3Qtb2YtcHJvamVjdHMge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAgZ2FwOiAxNXB4O1xufVxuI2xpc3Qtb2YtcHJvamVjdHMgbGkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2xpc3Qtb2YtcHJvamVjdHMgbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2hlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi8qIFRhc2sgdGFibGUgKi9cbiN0YWJsZS1kaXYge1xuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuI3Rhc2stdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWFyZ2luOiAyNXB4IDA7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBtYXgtd2lkdGg6IG1pbigyMDBjaCwgNTB2dyk7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4jdGFzay10YWJsZSB0aGVhZCB0ciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI3Rhc2stdGFibGUgdGgsXG4jdGFzay10YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xufVxuI3Rhc2stdGFibGUgdGJvZHkgdHIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuI3Rhc2stdGFibGUgdGJvZHkgdHI6bnRoLW9mLXR5cGUoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG59XG4jdGFzay10YWJsZSB0Ym9keSB0cjpsYXN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ncmVlbik7XG59XG4jdGFzay10YWJsZSB0Ym9keSB0ci5hY3RpdmUtcm93IHtcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcbn1cbi8qIEFkZCBzdHJpa2UgdGhyb3VnaCBhYmlsaXR5IHRvIHRhYmxlICovXG50ZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbn1cbnRyLnN0cmlrZW91dCB7XG4gICAgY29sb3I6ICNkZGRkZGQ7XG59XG50ci5zdHJpa2VvdXQgdGQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi8qIEFsaWduIGNoZWNrYm94IGluIHRoZSBjZW50ZXIgKi9cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcbiAgICBhY2NlbnQtY29sb3I6ICNkZGRkZGQ7XG59XG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZDpob3ZlciB7XG4gICAgYWNjZW50LWNvbG9yOiAjMDA5ODc5O1xufVxuXG5cbi8qIGFkZCB0YXNrIGZvcm0gKi9cbiNhZGQtdGFzay1mb3JtLCAjZWRpdC10YXNrLWZvcm17XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdhcDogMTVweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2NjY7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWdyZWVuKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvKiBkaW0gZXZlcnl0aGluZyBhcm91bmQgZm9ybSAqL1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDIwMDBweCByZ2JhKDAsMCwwLDAuNSk7XG59XG4jdG9nZ2xlLXRhc2stZm9ybSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xuICAgIC8qIHBhZGRpbmc6IDE1cHg7ICovXG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBncmlkOyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XG4gICAgcmlnaHQ6IC0yMCU7XG4gICAgdG9wOiAyMHB4O1xufVxuI3Rhc2stdGl0bGUsICNlZGl0LXRhc2stdGl0bGUge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xufVxuI2R1ZS1kYXRlLCAjZWRpdC1kdWUtZGF0ZSB7XG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiA1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG59XG4jcHJpbywgI2VkaXQtcHJpbyB7XG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbn1cbiNsb3ctcHJpby1jb250YWluZXIsICNtaWQtcHJpby1jb250YWluZXIsIFxuI2hpZ2gtcHJpby1jb250YWluZXIsICNlZGl0LWxvdy1wcmlvLWNvbnRhaW5lciwgXG4jZWRpdC1taWQtcHJpby1jb250YWluZXIsICNlZGl0LWhpZ2gtcHJpby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNsb3ctcHJpbywgI21pZC1wcmlvLCAjaGlnaC1wcmlvLFxuI2VkaXQtbG93LXByaW8sICNlZGl0LW1pZC1wcmlvLCAjZWRpdC1oaWdoLXByaW8ge1xuICAgIGFjY2VudC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xufVxuI3Byb2plY3QsICNlZGl0LXByb2plY3Qge1xuICAgIGdyaWQtYXJlYTogMi8yLzMvMztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xufVxuI2Zvcm0tYnV0dG9ucywgI2VkaXQtZm9ybS1idXR0b25zIHtcbiAgICBncmlkLWFyZWE6IDMvMS80LzM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBtYXJnaW46IGF1dG87XG59XG4jc3VibWl0LXRhc2ssICNlZGl0LXRhc2ssICNyZW1vdmUtdGFzayB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbiNzdWJtaXQtdGFzazpob3ZlciwgI2VkaXQtdGFzazpob3ZlciwgXG4jcmVtb3ZlLXRhc2s6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiN0b2dnbGUtdGFzay1mb3JtOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLyogZGlzYWJsZSByZXNpemluZyBvZiB0ZXh0YXJlYSBmb3IgZGVzY3JpcHRpb24gKi9cbnRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG59XG4uaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5h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QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixRQUFRO0lBQ1IsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0EsaURBQWlEO0FBQ2pEO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1ncmVlbjogIzAwOTg3OTtcXG4gICAgLS1yZWQ6ICNCQzUzMzI7XFxufVxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBtYXgtY29udGVudCBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcbi8qIFNpZGViYXIgKi9cXG4jc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICAgIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tZ3JlZW4pO1xcbiAgICBib3gtc2hhZG93OiAxMHB4IC0xMHB4IHZhcigtLXJlZCk7XFxufVxcbiNsaXN0LW9mLXByb2plY3RzIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG4jbGlzdC1vZi1wcm9qZWN0cyBsaSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNsaXN0LW9mLXByb2plY3RzIGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLyogVGFzayB0YWJsZSAqL1xcbiN0YWJsZS1kaXYge1xcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcbiN0YXNrLXRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgbWFyZ2luOiAyNXB4IDA7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICBtYXgtd2lkdGg6IG1pbigyMDBjaCwgNTB2dyk7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4jdGFzay10YWJsZSB0aGVhZCB0ciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI3Rhc2stdGFibGUgdGgsXFxuI3Rhc2stdGFibGUgdGQge1xcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxufVxcbiN0YXNrLXRhYmxlIHRib2R5IHRyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XFxufVxcbiN0YXNrLXRhYmxlIHRib2R5IHRyOm50aC1vZi10eXBlKGV2ZW4pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcXG59XFxuI3Rhc2stdGFibGUgdGJvZHkgdHI6bGFzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXG59XFxuI3Rhc2stdGFibGUgdGJvZHkgdHIuYWN0aXZlLXJvdyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuLyogQWRkIHN0cmlrZSB0aHJvdWdoIGFiaWxpdHkgdG8gdGFibGUgKi9cXG50ZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxufVxcbnRyLnN0cmlrZW91dCB7XFxuICAgIGNvbG9yOiAjZGRkZGRkO1xcbn1cXG50ci5zdHJpa2VvdXQgdGQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi8qIEFsaWduIGNoZWNrYm94IGluIHRoZSBjZW50ZXIgKi9cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICAgIGFjY2VudC1jb2xvcjogI2RkZGRkZDtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOmhvdmVyIHtcXG4gICAgYWNjZW50LWNvbG9yOiAjMDA5ODc5O1xcbn1cXG5cXG5cXG4vKiBhZGQgdGFzayBmb3JtICovXFxuI2FkZC10YXNrLWZvcm0sICNlZGl0LXRhc2stZm9ybXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNjY2O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAvKiBkaW0gZXZlcnl0aGluZyBhcm91bmQgZm9ybSAqL1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAyMDAwcHggcmdiYSgwLDAsMCwwLjUpO1xcbn1cXG4jdG9nZ2xlLXRhc2stZm9ybSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgLyogcGFkZGluZzogMTVweDsgKi9cXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBncmlkOyBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIHJpZ2h0OiAtMjAlO1xcbiAgICB0b3A6IDIwcHg7XFxufVxcbiN0YXNrLXRpdGxlLCAjZWRpdC10YXNrLXRpdGxlIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcbiNkdWUtZGF0ZSwgI2VkaXQtZHVlLWRhdGUge1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuI3ByaW8sICNlZGl0LXByaW8ge1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxufVxcbiNsb3ctcHJpby1jb250YWluZXIsICNtaWQtcHJpby1jb250YWluZXIsIFxcbiNoaWdoLXByaW8tY29udGFpbmVyLCAjZWRpdC1sb3ctcHJpby1jb250YWluZXIsIFxcbiNlZGl0LW1pZC1wcmlvLWNvbnRhaW5lciwgI2VkaXQtaGlnaC1wcmlvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2xvdy1wcmlvLCAjbWlkLXByaW8sICNoaWdoLXByaW8sXFxuI2VkaXQtbG93LXByaW8sICNlZGl0LW1pZC1wcmlvLCAjZWRpdC1oaWdoLXByaW8ge1xcbiAgICBhY2NlbnQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuI3Byb2plY3QsICNlZGl0LXByb2plY3Qge1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuI2Zvcm0tYnV0dG9ucywgI2VkaXQtZm9ybS1idXR0b25zIHtcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG4jc3VibWl0LXRhc2ssICNlZGl0LXRhc2ssICNyZW1vdmUtdGFzayB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcbiNzdWJtaXQtdGFzazpob3ZlciwgI2VkaXQtdGFzazpob3ZlciwgXFxuI3JlbW92ZS10YXNrOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiN0b2dnbGUtdGFzay1mb3JtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi8qIGRpc2FibGUgcmVzaXppbmcgb2YgdGV4dGFyZWEgZm9yIGRlc2NyaXB0aW9uICovXFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jaGVja2JveC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoZWNrYm94LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgc3RvcmFnZSAmJlxuICAgICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgIiwiaW1wb3J0IFRvZG9lclNWRyBmcm9tICcuL2ltYWdlcy9Ub2RvZXIucG5nJztcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcbmNvbnN0IGhlYWRlckltYWdlID0gbmV3IEltYWdlKCk7XG5oZWFkZXJJbWFnZS5zcmMgPSBUb2RvZXJTVkc7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVySW1hZ2UpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2NoZWNrYm94LmNzcyc7XG5pbXBvcnQgJy4vaGVhZGVySW1hZ2UuanMnO1xuaW1wb3J0IHN0b3JhZ2VBdmFpbGFibGUgZnJvbSAnLi9jaGVja0xvY2FsU3RvcmFnZS5qcyc7XG4vLyBGdW5jdGlvbiB0byBhZGQgZXZlbnQgbGlzdGVuZXJcbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJXaXRoVHJhY2tpbmcoZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFlbGVtZW50Ll9ldmVudExpc3RlbmVycykge1xuICAgICAgICBlbGVtZW50Ll9ldmVudExpc3RlbmVycyA9IHt9O1xuICAgIH1cbiAgICBpZiAoIWVsZW1lbnQuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICBlbGVtZW50Ll9ldmVudExpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICB9XG4gICAgZWxlbWVudC5fZXZlbnRMaXN0ZW5lcnNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xufVxuXG4vLyBGdW5jdGlvbiB0byByZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVyc1xuZnVuY3Rpb24gcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMoZWxlbWVudCwgZXZlbnQpIHtcbiAgICBpZiAoZWxlbWVudC5fZXZlbnRMaXN0ZW5lcnMgJiYgZWxlbWVudC5fZXZlbnRMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgIGVsZW1lbnQuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGNhbGxiYWNrID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5fZXZlbnRMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgfVxufVxuLy8gQ2hlY2sgdGFzayBhbmQgZ3JleSBvdXQgdGhlIHRhc2tcbi8vIEdpdmUgZWFjaCBjaGVja2JveCBhbiBldmVudCBsaXN0ZW5lciBcbmZ1bmN0aW9uIGFjdGl2YXRlQ2hlY2tib3hFdmVudHMoKSB7XG4gICAgY29uc3QgdGFza0NoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcblxuICAgIHRhc2tDaGVja2JveGVzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSBhbGwgcHJldmlvdXMgZXZlbnQgbGlzdGVuZXJzIGFuZCByZWZyZXNoIHdpdGggbmV3IG9uZXNcbiAgICAgICAgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnModGFzaywgXCJjbGlja1wiKTtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcldpdGhUcmFja2luZyh0YXNrLCBcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRhc2suY2xvc2VzdCgndHInKS5jbGFzc0xpc3QudG9nZ2xlKCdzdHJpa2VvdXQnKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbn07XG4vLyBjcmVhdGUgdGFza1xuZnVuY3Rpb24gQ3JlYXRlVG9Ebyh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICAvLyBnaXZlIGRlZmF1bHQgcHJvamVjdCBpZiBub3QgcHJvamVjdCBpcyBjaG9zZW5cbiAgICBpZihwcm9qZWN0ID09IFwiXCIpIHtcbiAgICAgICAgcHJvamVjdCA9IFwidW5hc3NpZ25lZFwiO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIHByb2plY3RcbiAgICB9XG59O1xuY29uc3QgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGFibGUnKTtcbi8vIEFkZCB0YXNrcyBldmVudCBsaXN0ZW5lclxuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtdGFzaycpO1xuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRUYXNrKGFkZFRhc2tCdXR0b24pO1xufVxuKTtcblxuLy8gQWRkIFRhc2sgKG9ubHkgRE9NIG1hbmlwdWxhdGlvbilcbmZ1bmN0aW9uIGFkZFRhc2soYnV0dG9uKSB7XG4gICAgLy8gZXh0cmFjdCB0aGUgdmFsdWVzIGFuZCBlbnRlciB0aGVtIGludG8gYSBuZXcgcm93IGF0IHRoZSBlbmQgb2YgdGhlIHRhYmxlXG4gICAgLy8gYWxzbzogcmVzZXQgYW55IHByZXZpb3VzIHRhc2sgdmFsdWVzIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0YXNrLXRpdGxlXCJdJykudmFsdWU7XG4gICAgLy8gRGF0ZSBmb3JtYXQgaXMgWVlZWS1NTS1ERFxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImR1ZS1kYXRlXCJdJykudmFsdWU7XG4gICAgY29uc3QgcHJpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicHJpb1wiXTpjaGVja2VkJykudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicHJvamVjdFwiXScpLnZhbHVlO1xuICAgIC8vIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJkZXNjcmlwdGlvblwiXScpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2sgPSBDcmVhdGVUb0RvKHRpdGxlLCBkdWVEYXRlLCBwcmlvLCBwcm9qZWN0KTtcbiAgICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgYW55IHRib2R5IHJvd3NcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICBwb3B1bGF0ZVRhYmxlKHRhc2spO1xuICAgIC8vIFJ1biBzZXRUYWJsZUlkcyB0byByZXNldCBhbGwgZGF0YS1pbmRleCB2YWx1ZXMgYW5kIGFjdGl2YXRlIGNoZWNrYm94IGV2ZW50IGxpc3RlbmVycyBcbiAgICBzZXRUYWJsZUlkcyh0YXNrVGFibGUpO1xuICAgIGFjdGl2YXRlQ2hlY2tib3hFdmVudHMoKTtcbiAgICB0YWJsZVRvSnNvbih0YXNrVGFibGUpO1xuICAgIGNvbGxlY3RQcm9qZWN0cygpO1xuICAgIHRvZ2dsZUFkZEZvcm0oKTtcbiAgICBhY3RpdmF0ZVJvd0VkaXRFdmVudHModGFza1RhYmxlKTtcbn1cbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWZvcm0nKTtcbmFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKSk7XG5jb25zdCB0b2dnbGVGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZS10YXNrLWZvcm0nKTtcbmZ1bmN0aW9uIHRvZ2dsZUFkZEZvcm0oKSB7XG4gICAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufVxudG9nZ2xlRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZ2dsZUFkZEZvcm0oKTtcbn0pXG5cblxuLy8gYWRkIGNsaWNrIGV2ZW50IHRvIGVhY2ggcm93IG9mIHRoZSB0YWJsZSBcbmZ1bmN0aW9uIGFjdGl2YXRlUm93RWRpdEV2ZW50cyh0YWJsZSkge1xuICAgIGNvbnN0IHRhc2tUYWJsZVRib2R5ID0gdGFibGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rib2R5JylbMF07XG4gICAgZm9yIChjb25zdCByb3cgb2YgdGFza1RhYmxlVGJvZHkucm93cykge1xuICAgICAgICBjb25zdCByb3dUZHMgPSByb3cuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RkJyk7XG4gICAgICAgIEFycmF5LmZyb20ocm93VGRzKS5mb3JFYWNoKCh0ZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICByZW1vdmVBbGxFdmVudExpc3RlbmVycyh0ZCwgXCJjbGlja1wiKTtcbiAgICAgICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyV2l0aFRyYWNraW5nKHRkLCBcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbEVkaXRGb3JtKHRhc2tUYWJsZVRib2R5LCB0ZC5jbG9zZXN0KCd0cicpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbi8vIEVkaXQgdGFza3NcbmNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1mb3JtJyk7XG5jb25zdCBjbG9zZUVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWVkaXQtZm9ybScpO1xuY2xvc2VFZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBhY3RpdmF0ZVJvd0VkaXRFdmVudHModGFza1RhYmxlKTtcbn0pXG5mdW5jdGlvbiBmaWxsRWRpdEZvcm0odGFibGVCb2R5LCB0cikge1xuICAgIC8vIENob3NlbiByb3cgZWxlbWVudHNcbiAgICBjb25zdCBjaG9zZW5Sb3cgPSBBcnJheS5mcm9tKHRyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZCcpKTtcbiAgICBjb25zdCBjaG9zZW5Sb3dJbmRleCA9IHRyLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuICAgIGNvbnN0IGNob3NlblRpdGxlID0gY2hvc2VuUm93WzFdLmlubmVySFRNTDtcbiAgICBjb25zdCBjaG9zZW5EdWVEYXRlID0gY2hvc2VuUm93WzJdLmlubmVySFRNTDtcbiAgICBjb25zdCBjaG9zZW5QcmlvID0gY2hvc2VuUm93WzNdLmlubmVySFRNTDtcbiAgICBjb25zdCBjaG9zZW5Qcm9qZWN0ID0gY2hvc2VuUm93WzRdLmlubmVySFRNTDtcbiAgICAvLyBGaWxsIGluIHRoZSBmb2xsb3dpbmcgZWRpdCBmb3JtIGVsZW1lbnRzIFxuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZWRpdC10YXNrLXRpdGxlXCInKTtcbiAgICBpbnB1dFRpdGxlLnZhbHVlID0gY2hvc2VuVGl0bGU7XG4gICAgY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImVkaXQtZHVlLWRhdGVcIicpO1xuICAgIGlucHV0RHVlRGF0ZS52YWx1ZSA9IGNob3NlbkR1ZURhdGU7XG4gICAgY29uc3QgaW5wdXRQcmlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdmFsdWU9JHtjaG9zZW5QcmlvfV1gKTtcbiAgICBpbnB1dFByaW8udmFsdWUgPSBjaG9zZW5QcmlvO1xuICAgIGNvbnN0IGlucHV0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJlZGl0LXByb2plY3RcIicpO1xuICAgIGlucHV0UHJvamVjdC52YWx1ZSA9IGNob3NlblByb2plY3Q7XG4gICAgLy8gU2V0IGNob3NlbiByb3cgaW5kZXggdG8gbWFuaXB1bGF0ZSB0aGUgdGFzayBsYXRlciB3aXRoIGVkaVRhc2tcbiAgICBjb25zdCByb3dJbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaG9zZW4tcm93LWluZGV4Jyk7XG4gICAgcm93SW5kZXguaW5uZXJIVE1MID0gY2hvc2VuUm93SW5kZXg7XG4gICAgLy8gUmVtb3ZlIGFsbCBjbGljayBldmVudHMgZnJvbSB0aGUgdGFibGUgd2hpbGUgdGhlIGVkaXQgZm9ybSBpcyBhY3RpdmVcbiAgICBmb3IoY29uc3Qgcm93IG9mIHRhYmxlQm9keS5yb3dzKSB7XG4gICAgICAgIGNvbnN0IHJvd1RkcyA9IHJvdy5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGQnKTtcbiAgICAgICAgQXJyYXkuZnJvbShyb3dUZHMpLmZvckVhY2goKHRkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnModGQsIFwiY2xpY2tcIik7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICByZW1vdmVBbGxFdmVudExpc3RlbmVycyhyZW1vdmVCdXR0b24sIFwiY2xpY2tcIik7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcldpdGhUcmFja2luZyhyZW1vdmVCdXR0b24sIFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJlbW92ZVRhc2soY2hvc2VuUm93SW5kZXgpO1xuICAgIH0pXG59XG5jb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzaycpO1xuZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBlZGl0VGFzayh0YXNrVGFibGUpO1xufSlcblxuZnVuY3Rpb24gZWRpdFRhc2sodGFibGUpIHtcbiAgICBjb25zdCB0Qm9keVJvd3MgPSB0YWJsZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGJvZHknKVswXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndHInKTtcbiAgICBjb25zdCBjaGFuZ2VkVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImVkaXQtdGFzay10aXRsZVwiXScpLnZhbHVlO1xuICAgIC8vIERhdGUgZm9ybWF0IGlzIFlZWVktTU0tRERcbiAgICBjb25zdCBjaGFuZ2VkRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZWRpdC1kdWUtZGF0ZVwiXScpLnZhbHVlO1xuICAgIGNvbnN0IGNoYW5nZWRQcmlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJlZGl0LXByaW9cIl06Y2hlY2tlZCcpLnZhbHVlO1xuICAgIGNvbnN0IGNoYW5nZWRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJlZGl0LXByb2plY3RcIl0nKS52YWx1ZTtcbiAgICBjb25zdCByb3dJbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaG9zZW4tcm93LWluZGV4JykuaW5uZXJIVE1MO1xuICAgIGNvbnN0IGNob3NlblJvdyA9IEFycmF5LmZyb20odEJvZHlSb3dzW3Jvd0luZGV4IC0gMV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RkJykpO1xuICAgIC8vIFNldCBuZXcgdmFsdWVzIGludG8gdGhlIHRhYmxlIFxuICAgIGNob3NlblJvd1sxXS5pbm5lckhUTUwgPSBjaGFuZ2VkVGl0bGU7XG4gICAgY2hvc2VuUm93WzJdLmlubmVySFRNTCA9IGNoYW5nZWREdWVEYXRlO1xuICAgIGNob3NlblJvd1szXS5pbm5lckhUTUwgPSBjaGFuZ2VkUHJpbztcbiAgICBjaG9zZW5Sb3dbNF0uaW5uZXJIVE1MID0gY2hhbmdlZFByb2plY3Q7XG4gICAgdGFibGVUb0pzb24odGFza1RhYmxlKTtcbn1cbi8vIGZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyBhIHJvdyBmcm9tIGEgdGFibGVcbmNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmUtdGFzaycpO1xuZnVuY3Rpb24gcmVtb3ZlVGFzayhkYXRhSW5kZXgpIHtcbiAgICB0YXNrVGFibGUuZGVsZXRlUm93KGRhdGFJbmRleCk7XG4gICAgLy8gQ2xvc2UgZWRpdCBmb3JtIFxuICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBhY3RpdmF0ZVJvd0VkaXRFdmVudHModGFza1RhYmxlKTtcbiAgICBzZXRUYWJsZUlkcyh0YXNrVGFibGUpO1xuICAgIHRhYmxlVG9Kc29uKHRhc2tUYWJsZSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlVGFibGUodGFzaykge1xuICAgIGlmICh0YXNrVGFibGUucm93cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tSb3cgPSB0YXNrVGFibGUuaW5zZXJ0Um93KC0xKTtcbiAgICAgICAgbmV3VGFza1Jvdy5pbnNlcnRDZWxsKDApLmlubmVySFRNTCA9ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+JztcbiAgICAgICAgbmV3VGFza1Jvdy5pbnNlcnRDZWxsKDEpLmlubmVySFRNTCA9IHRhc2sudGl0bGU7XG4gICAgICAgIG5ld1Rhc2tSb3cuaW5zZXJ0Q2VsbCgyKS5pbm5lckhUTUwgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIG5ld1Rhc2tSb3cuaW5zZXJ0Q2VsbCgzKS5pbm5lckhUTUwgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICBuZXdUYXNrUm93Lmluc2VydENlbGwoNCkuaW5uZXJIVE1MID0gdGFzay5wcm9qZWN0Lmxlbmd0aCA+IDAgPyB0YXNrLnByb2plY3QgOiAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0YXNrVGFibGVUYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRhYmxlJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rib2R5JylbMF07XG4gICAgICAgIGNvbnN0IFRib2R5Rmlyc3RSb3cgPSB0YXNrVGFibGVUYm9keS5pbnNlcnRSb3coLTEpO1xuICAgICAgICBUYm9keUZpcnN0Um93Lmluc2VydENlbGwoMCkuaW5uZXJIVE1MID0gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj4nO1xuICAgICAgICBUYm9keUZpcnN0Um93Lmluc2VydENlbGwoMSkuaW5uZXJIVE1MID0gdGFzay50aXRsZTtcbiAgICAgICAgVGJvZHlGaXJzdFJvdy5pbnNlcnRDZWxsKDIpLmlubmVySFRNTCA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgVGJvZHlGaXJzdFJvdy5pbnNlcnRDZWxsKDMpLmlubmVySFRNTCA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgIFRib2R5Rmlyc3RSb3cuaW5zZXJ0Q2VsbCg0KS5pbm5lckhUTUwgPSB0YXNrLnByb2plY3QubGVuZ3RoID4gMCA/IHRhc2sucHJvamVjdCA6ICcnO1xuICAgIH1cbn1cbi8vIFBhcnNlIHRocm91Z2ggdGhlIHRhYmxlIGFuZCBzZXQgYSBkYXRhLWluZGV4IHRvIGVhY2ggcm93XG5mdW5jdGlvbiBzZXRUYWJsZUlkcyh0YWJsZSkge1xuICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgcm93cyBhbmQgZ2l2ZSBlYWNoIHJvdyBhbiBpbmRleCBpbiBhc2NlbmRpbmcgb3JkZXJcbiAgICAvLyBJbmRleCAwIGlzIHRoZWFkIHRyXG4gICAgQXJyYXkuZnJvbSh0YXNrVGFibGUucm93cykuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICB0YXNrVGFibGUucm93c1tpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xuICAgIH0pXG4gICAgYWN0aXZhdGVDaGVja2JveEV2ZW50cygpO1xufVxuY29uc3QgbGlzdE9mUHJvamVjdHMgPSBbXCJzaG93IGFsbFwiLFwidW5hc3NpZ25lZFwiXTtcbmZ1bmN0aW9uIGNvbGxlY3RQcm9qZWN0cyh0YWJsZSkge1xuICAgIEFycmF5LmZyb20odGFza1RhYmxlLnJvd3MpLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgLy8gVHJhbnNmb3JtIHJvdyBmcm9tIGh0bWxjb2xsZWN0aW9uIHRvIGFycmF5XG4gICAgICAgICAgICByb3cgPSBBcnJheS5mcm9tKHJvdy5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGQnKSk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gcm93W3Jvdy5sZW5ndGggLSAxXS5pbm5lckhUTUw7XG4gICAgICAgICAgICBpZiAoIWxpc3RPZlByb2plY3RzLmluY2x1ZGVzKHByb2plY3QpICYmIHByb2plY3QgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGxpc3RPZlByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBwcm9qZWN0c1RvU2lkZWJhcihsaXN0T2ZQcm9qZWN0cyk7XG59XG4vLyBBZGQgcHJvamVjdHMgdG8gc2lkZWJhclxuY29uc3Qgc2lkZWJhclByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3Qtb2YtcHJvamVjdHMnKTtcbmZ1bmN0aW9uIHByb2plY3RzVG9TaWRlYmFyKHByb2plY3RzKSB7XG4gICAgc2lkZWJhclByb2plY3RMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICByZW1vdmVBbGxFdmVudExpc3RlbmVycyhsaSwgXCJjbGlja1wiKTtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcldpdGhUcmFja2luZyhsaSwgXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzaG93UHJvamVjdFZpZXcodGFza1RhYmxlLCBwcm9qZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxpLmFwcGVuZChwcm9qZWN0KTtcbiAgICAgICAgc2lkZWJhclByb2plY3RMaXN0LmFwcGVuZChsaSk7XG4gICAgfSlcbn1cbi8vIFRPRE86IHNob3cgb25seSBwcm9qZWN0IHZpZXcgaW4gdGhlIHRhYmxlXG5mdW5jdGlvbiBzaG93UHJvamVjdFZpZXcodGFibGUsIHByb2plY3QpIHtcbiAgICBBcnJheS5mcm9tKHRhYmxlLnJvd3MpLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYoaW5kZXggPiAwKXtcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICBjb25zdCByb3dUZHMgPSBBcnJheS5mcm9tKHJvdy5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGQnKSk7XG4gICAgICAgICAgICBpZihyb3dUZHNbcm93VGRzLmxlbmd0aCAtIDFdLmlubmVySFRNTCA9PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb2plY3QgPT0gXCJzaG93IGFsbFwiKSB7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIEFkZCBlYWNoIHJvdyBvZiBhIHRhYmxlIHRvIGEgdGFza3MganNvbiBmaWxlIG9uIGxvY2FsIHN0b3JhZ2Vcbi8vIFBhcnNlIHRocm91Z2ggdGFibGUgYW5kIHVwZGF0ZSBsb2NhbCBzdG9yYWdlIHdpdGggYWxsIGN1cnJlbnQgdGFza3MgXG5sZXQgdGFza3MgPSB7XG4gICAgdGFza3M6IFtdXG59O1xuZnVuY3Rpb24gdGFibGVUb0pzb24odGFibGUpIHtcbiAgICB0YXNrcyA9IHtcbiAgICAgICAgdGFza3M6IFtdXG4gICAgfTtcbiAgICBBcnJheS5mcm9tKHRhc2tUYWJsZS5yb3dzKS5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gcm93LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZCcpWzFdLmlubmVySFRNTDtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSByb3cuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RkJylbMl0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgY29uc3QgcHJpbyA9IHJvdy5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGQnKVszXS5pbm5lckhUTUw7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gcm93LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZCcpWzRdLmlubmVySFRNTDtcbiAgICAgICAgICAgIHRhc2tzLnRhc2tzW2luZGV4IC0gMV0gPSB7fTtcbiAgICAgICAgICAgIHRhc2tzLnRhc2tzW2luZGV4IC0gMV0udGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIHRhc2tzLnRhc2tzW2luZGV4IC0gMV0uZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgICAgICB0YXNrcy50YXNrc1tpbmRleCAtIDFdLnByaW8gPSBwcmlvO1xuICAgICAgICAgICAgdGFza3MudGFza3NbaW5kZXggLSAxXS5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn1cbi8vIFBvcHVsYXRlIHRhc2tzIHdpdGggbG9jYWxTdG9yYWdlIGlmIHRhc2tzIGFyZSBhdmFpbGFibGUgb24gbG9hZFxuZnVuY3Rpb24gcG9wdWxhdGVUYXNrcygpIHtcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG4gICAgaWYgKCF0YXNrcykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyh0YXNrcy50YXNrcykubGVuZ3RoID4gMCkge1xuICAgICAgICB0YXNrVGFibGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rib2R5JykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgZm9yIChjb25zdCBzdG9yZWRUYXNrIG9mIHRhc2tzLnRhc2tzKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gQ3JlYXRlVG9EbyhzdG9yZWRUYXNrLnRpdGxlLCBzdG9yZWRUYXNrLmR1ZURhdGUsXG4gICAgICAgICAgICAgICAgc3RvcmVkVGFzay5wcmlvLCBzdG9yZWRUYXNrLnByb2plY3QpO1xuICAgICAgICAgICAgcG9wdWxhdGVUYWJsZSh0YXNrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIGZ1bmN0aW9uIG9uQ2xpY2tPdXRzaWRlKGVsZSwgY2IpIHtcbi8vICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbi8vICAgICAgICAgaWYgKCFlbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkgY2IoKTtcbi8vICAgICB9KTtcbi8vIH07XG5cbnBvcHVsYXRlVGFza3MoKTtcbi8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkpO1xudGFibGVUb0pzb24odGFza1RhYmxlKTtcbnNldFRhYmxlSWRzKCk7XG5jb2xsZWN0UHJvamVjdHMoKTtcbnByb2plY3RzVG9TaWRlYmFyKGxpc3RPZlByb2plY3RzKTtcbmFjdGl2YXRlUm93RWRpdEV2ZW50cyh0YXNrVGFibGUpO1xuLy8gQ2xvc2UgdGhlIGFkZCB0YXNrIGZvcm0gd2hlbiBjbGlja2VkIG91dHNpZGUgb2YgaXRcbndpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcygnI2FkZC10YXNrLWZvcm0nKSAmJiAhZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJyN0b2dnbGUtdGFzay1mb3JtJykpIHtcbiAgICAgICAgaWYgKCFhZGRUYXNrRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbiAgICAgICAgICAgIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9