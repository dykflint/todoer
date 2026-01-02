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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,UAAU;IACV,SAAS;AACb;AACA;IACI,aAAa;IACb,0BAA0B;IAC1B,0CAA0C;IAC1C,kBAAkB;IAClB;0BACsB;IACtB,aAAa;IACb,YAAY;AAChB;AACA,YAAY;AACZ;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,iBAAiB;IACjB,8BAA8B;IAC9B,iCAAiC;AACrC;AACA;IACI,qBAAqB;IACrB,aAAa;IACb,sCAAsC;IACtC,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,eAAe;IACf,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,4BAA4B;IAC5B,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA,eAAe;AACf;IACI,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,cAAc;IACd,iBAAiB;IACjB,gBAAgB;IAChB,2BAA2B;IAC3B,mBAAmB;IACnB,0BAA0B;IAC1B,gBAAgB;IAChB,wCAAwC;AAC5C;AACA;IACI,8BAA8B;IAC9B,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;AACrB;AACA;;IAEI,kBAAkB;AACtB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,qCAAqC;AACzC;AACA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;AACA,wCAAwC;AACxC;IACI,kBAAkB;AACtB;AACA;IACI,cAAc;AAClB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,gCAAgC;IAChC,WAAW;AACf;AACA,iCAAiC;AACjC;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,qBAAqB;AACzB;;;AAGA,kBAAkB;AAClB;IACI,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,kCAAkC;IAClC,SAAS;IACT,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,8BAA8B;IAC9B,iBAAiB;IACjB,+BAA+B;IAC/B,wCAAwC;AAC5C;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,4BAA4B;IAC5B,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,WAAW;IACX,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,QAAQ;IACR,0BAA0B;AAC9B;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,QAAQ;IACR,0BAA0B;AAC9B;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,kCAAkC;AACtC;AACA;;;IAGI,aAAa;IACb,0BAA0B;IAC1B,SAAS;IACT,kBAAkB;AACtB;AACA;;IAEI,0BAA0B;AAC9B;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,QAAQ;IACR,0BAA0B;AAC9B;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,0BAA0B;IAC1B,YAAY;AAChB;AACA;IACI,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,mBAAmB;AACvB;AACA;;IAEI,eAAe;IACf,4BAA4B;IAC5B,YAAY;AAChB;AACA;IACI,eAAe;IACf,YAAY;AAChB;AACA,iDAAiD;AACjD;IACI,YAAY;AAChB;AACA;IACI,wBAAwB;AAC5B","sourcesContent":[":root {\n    --green: #009879;\n    --red: #BC5332;\n}\n* {\n    padding: 0;\n    margin: 0;\n}\nbody {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 100px max-content auto;\n    position: relative;\n    /* justify-content: center;\n    align-items: center; */\n    height: 100vh;\n    width: 100vw;\n}\n/* Sidebar */\n#sidebar {\n    display: grid;\n    justify-content: space-between;\n    margin: auto;\n    grid-area: 2/1/3/2;\n    padding: 1rem 0.5rem;\n    margin: 1rem auto;\n    border: 3px solid var(--green);\n    box-shadow: 10px -10px var(--red);\n}\n#list-of-projects {\n    list-style-type: none;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-auto-flow: row;\n    gap: 15px;\n}\n#list-of-projects li {\n    cursor: pointer;\n    padding: 5px;\n    text-align: center;\n}\n#list-of-projects li:hover {\n    background-color: var(--red);\n    color: white;\n}\n#header {\n    grid-area: 1/1/2/2;\n    display: grid;\n    justify-content: center;\n    align-items: center;\n}\n/* Task table */\n#table-div {\n    grid-area: 3/1/4/2;\n    position: relative;\n    width: max-content;\n    margin: auto;\n    margin-top: 0;\n}\n#task-table {\n    border-collapse: collapse;\n    margin: 25px 0;\n    font-size: 0.9rem;\n    min-width: 400px;\n    max-width: min(200ch, 50vw);\n    height: max-content;\n    border-radius: 5px 5px 0 0;\n    overflow: hidden;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n}\n#task-table thead tr {\n    background-color: var(--green);\n    color: white;\n    text-align: left;\n    font-weight: bold;\n}\n#task-table th,\n#task-table td {\n    padding: 12px 15px;\n}\n#task-table tbody tr {\n    border-bottom: 1px solid #dddddd;\n}\n#task-table tbody tr:nth-of-type(even) {\n    background-color: #f3f3f3;\n}\n#task-table tbody tr:last-of-type {\n    border-bottom: 2px solid var(--green);\n}\n#task-table tbody tr.active-row {\n    font-weight: bold; \n    color: var(--green);\n}\n/* Add strike through ability to table */\ntd {\n    position: relative; \n}\ntr.strikeout {\n    color: #dddddd;\n}\ntr.strikeout td:before {\n    content: \" \";\n    position: absolute;\n    top: 50%;\n    left: 0;\n    border-bottom: 1px solid #dddddd;\n    width: 100%;\n}\n/* Align checkbox in the center */\ninput[type=\"checkbox\"] {\n    display: flex;\n    justify-content: center;\n}\ninput[type=\"checkbox\"]:checked {\n    accent-color: #dddddd;\n}\ninput[type=\"checkbox\"]:checked:hover {\n    accent-color: #009879;\n}\n\n\n/* add task form */\n#add-task-form, #edit-task-form{\n    background-color: var(--green);\n    color: white;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(3, 1fr);\n    gap: 15px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1.5rem;\n    border: 2px solid #666;\n    border-radius: 25px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border: 5px solid var(--green);\n    font-weight: bold;\n    /* dim everything around form */\n    box-shadow: 0 0 0 2000px rgba(0,0,0,0.5);\n}\n#toggle-task-form {\n    position: absolute;\n    font-size: 2.5rem;\n    border: none;\n    background-color: var(--red);\n    /* padding: 15px; */\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    display: grid; \n    justify-content: center;\n    align-items: center;\n    color: var(--green);\n    right: -20%;\n    top: 20px;\n}\n#task-title, #edit-task-title {\n    grid-area: 1/1/2/2;\n    display: grid;\n    gap: 5px;\n    grid-template-columns: 1fr;\n}\n#due-date, #edit-due-date {\n    grid-area: 1/2/2/3;\n    display: grid;\n    gap: 5px;\n    grid-template-columns: 1fr;\n}\n#prio, #edit-prio {\n    grid-area: 2/1/3/2;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n#low-prio-container, #mid-prio-container, \n#high-prio-container, #edit-low-prio-container, \n#edit-mid-prio-container, #edit-high-prio-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 10px;\n    text-align: center;\n}\n#low-prio, #mid-prio, #high-prio,\n#edit-low-prio, #edit-mid-prio, #edit-high-prio {\n    accent-color: var(--green);\n}\n#project, #edit-project {\n    grid-area: 2/2/3/3;\n    display: grid;\n    gap: 5px;\n    grid-template-columns: 1fr;\n}\n#form-buttons, #edit-form-buttons {\n    grid-area: 3/1/4/3;\n    display: grid;\n    grid-template-columns: 1fr;\n    margin: auto;\n}\n#submit-task, #edit-task, #remove-task {\n    border: none;\n    background-color: white;\n    color: var(--green);\n    font-size: 1rem;\n    font-weight: bold;\n    padding: 15px;\n    border-radius: 15px;\n}\n#submit-task:hover, #edit-task:hover, \n#remove-task:hover {\n    cursor: pointer;\n    background-color: var(--red);\n    color: white;\n}\n#toggle-task-form:hover {\n    cursor: pointer;\n    color: white;\n}\n/* disable resizing of textarea for description */\ntextarea {\n    resize: none;\n}\n.hide {\n    display: none !important;\n}"],"sourceRoot":""}]);
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
    element._eventListeners[event].forEach((callback) => {
      element.removeEventListener(event, callback);
    });
    element._eventListeners[event] = [];
  }
}

// Check task and grey out the task
// Give each checkbox an event listener
function activateCheckboxEvents() {
  const taskCheckboxes = document.querySelectorAll('input[type="checkbox"]');

  taskCheckboxes.forEach((task) => {
    // Remove all previous event listeners and refresh with new ones
    removeAllEventListeners(task, "click");
    addEventListenerWithTracking(task, "click", () => {
      task.closest("tr").classList.toggle("strikeout");
    });
  });
}
// create task
function CreateToDo(title, dueDate, priority, project) {
  // give default project if not project is chosen
  if (project == "") {
    project = "unassigned";
  }
  return {
    title,
    dueDate,
    priority,
    project,
  };
}
const taskTable = document.querySelector("#task-table");
// Add tasks event listener
const addTaskButton = document.querySelector("#submit-task");
addTaskButton.addEventListener("click", (event) => {
  event.preventDefault();
  addTask(addTaskButton);
});

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
const addTaskForm = document.querySelector("#add-task-form");
addTaskForm.addEventListener("click", (event) => event.stopPropagation());
const toggleFormButton = document.querySelector("#toggle-task-form");
function toggleAddForm() {
  addTaskForm.classList.toggle("hide");
}
toggleFormButton.addEventListener("click", () => {
  toggleAddForm();
});

// add click event to each row of the table
function activateRowEditEvents(table) {
  const taskTableTbody = table.getElementsByTagName("tbody")[0];
  for (const row of taskTableTbody.rows) {
    const rowTds = row.getElementsByTagName("td");
    Array.from(rowTds).forEach((td, index) => {
      if (index > 0) {
        removeAllEventListeners(td, "click");
        addEventListenerWithTracking(td, "click", () => {
          fillEditForm(taskTableTbody, td.closest("tr"));
        });
      }
    });
  }
}
// Edit tasks
const editForm = document.querySelector("#edit-task-form");
const closeEditForm = document.querySelector("#close-edit-form");
closeEditForm.addEventListener("click", () => {
  editForm.classList.add("hide");
  activateRowEditEvents(taskTable);
});
function fillEditForm(tableBody, tr) {
  // Chosen row elements
  const chosenRow = Array.from(tr.getElementsByTagName("td"));
  const chosenRowIndex = tr.getAttribute("data-index");
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
  const rowIndex = document.querySelector("#chosen-row-index");
  rowIndex.innerHTML = chosenRowIndex;
  // Remove all click events from the table while the edit form is active
  for (const row of tableBody.rows) {
    const rowTds = row.getElementsByTagName("td");
    Array.from(rowTds).forEach((td, index) => {
      removeAllEventListeners(td, "click");
    });
  }
  editForm.classList.remove("hide");
  removeAllEventListeners(removeButton, "click");
  addEventListenerWithTracking(removeButton, "click", (event) => {
    event.preventDefault();
    removeTask(chosenRowIndex);
  });
}
const editButton = document.querySelector("#edit-task");
editButton.addEventListener("click", (event) => {
  event.preventDefault();
  editTask(taskTable);
});

function editTask(table) {
  const tBodyRows = table
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr");
  const changedTitle = document.querySelector('[name="edit-task-title"]').value;
  // Date format is YYYY-MM-DD
  const changedDueDate = document.querySelector('[name="edit-due-date"]').value;
  const changedPrio = document.querySelector(
    '[name="edit-prio"]:checked',
  ).value;
  const changedProject = document.querySelector('[name="edit-project"]').value;
  const rowIndex = document.querySelector("#chosen-row-index").innerHTML;
  const chosenRow = Array.from(
    tBodyRows[rowIndex - 1].getElementsByTagName("td"),
  );
  // Set new values into the table
  chosenRow[1].innerHTML = changedTitle;
  chosenRow[2].innerHTML = changedDueDate;
  chosenRow[3].innerHTML = changedPrio;
  chosenRow[4].innerHTML = changedProject;
  tableToJson(taskTable);
}
// function that removes a row from a table
const removeButton = document.querySelector("#remove-task");
function removeTask(dataIndex) {
  taskTable.deleteRow(dataIndex);
  // Close edit form
  editForm.classList.add("hide");
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
    newTaskRow.insertCell(4).innerHTML =
      task.project.length > 0 ? task.project : "";
  } else {
    const taskTableTbody = document
      .querySelector("#task-table")
      .getElementsByTagName("tbody")[0];
    const TbodyFirstRow = taskTableTbody.insertRow(-1);
    TbodyFirstRow.insertCell(0).innerHTML = '<input type="checkbox">';
    TbodyFirstRow.insertCell(1).innerHTML = task.title;
    TbodyFirstRow.insertCell(2).innerHTML = task.dueDate;
    TbodyFirstRow.insertCell(3).innerHTML = task.priority;
    TbodyFirstRow.insertCell(4).innerHTML =
      task.project.length > 0 ? task.project : "";
  }
}
// Parse through the table and set a data-index to each row
function setTableIds(table) {
  // Loop through all rows and give each row an index in ascending order
  // Index 0 is thead tr
  Array.from(taskTable.rows).forEach((row, index) => {
    taskTable.rows[index].setAttribute("data-index", index);
  });
  activateCheckboxEvents();
}
const listOfProjects = ["show all", "unassigned"];
function collectProjects(table) {
  Array.from(taskTable.rows).forEach((row, index) => {
    if (index > 0) {
      // Transform row from htmlcollection to array
      row = Array.from(row.getElementsByTagName("td"));
      const project = row[row.length - 1].innerHTML;
      if (!listOfProjects.includes(project) && project != "") {
        listOfProjects.push(project);
      }
    }
  });
  projectsToSidebar(listOfProjects);
}
// Add projects to sidebar
const sidebarProjectList = document.querySelector("#list-of-projects");
function projectsToSidebar(projects) {
  sidebarProjectList.innerHTML = "";
  projects.forEach((project) => {
    const li = document.createElement("li");
    removeAllEventListeners(li, "click");
    addEventListenerWithTracking(li, "click", () => {
      showProjectView(taskTable, project);
    });
    li.append(project);
    sidebarProjectList.append(li);
  });
}
// show only project view in the table
function showProjectView(table, project) {
  Array.from(table.rows).forEach((row, index) => {
    if (index > 0) {
      row.classList.remove("hide");
      const rowTds = Array.from(row.getElementsByTagName("td"));
      if (rowTds[rowTds.length - 1].innerHTML == project) {
      } else if (project == "show all") {
      } else {
        row.classList.add("hide");
      }
    }
  });
}
// Add each row of a table to a tasks json file on local storage
// Parse through table and update local storage with all current tasks
let tasks = {
  tasks: [],
};
function tableToJson(table) {
  tasks = {
    tasks: [],
  };
  Array.from(taskTable.rows).forEach((row, index) => {
    if (index > 0) {
      const title = row.getElementsByTagName("td")[1].innerHTML;
      const dueDate = row.getElementsByTagName("td")[2].innerHTML;
      const prio = row.getElementsByTagName("td")[3].innerHTML;
      const project = row.getElementsByTagName("td")[4].innerHTML;
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
    taskTable.getElementsByTagName("tbody").innerHTML = "";
    for (const storedTask of tasks.tasks) {
      const task = CreateToDo(
        storedTask.title,
        storedTask.dueDate,
        storedTask.prio,
        storedTask.project,
      );
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
  if (
    !event.target.matches("#add-task-form") &&
    !event.target.matches("#toggle-task-form")
  ) {
    if (!addTaskForm.classList.contains("hide")) {
      addTaskForm.classList.add("hide");
    }
  }
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGtFQUFrRTtBQUNuSDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxLQUFLLFlBQVksTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksUUFBUSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksaUNBQWlDLHVCQUF1QixxQkFBcUIsR0FBRyxLQUFLLGlCQUFpQixnQkFBZ0IsR0FBRyxRQUFRLG9CQUFvQixpQ0FBaUMsaURBQWlELHlCQUF5QixpQ0FBaUMsMkJBQTJCLHNCQUFzQixtQkFBbUIsR0FBRywyQkFBMkIsb0JBQW9CLHFDQUFxQyxtQkFBbUIseUJBQXlCLDJCQUEyQix3QkFBd0IscUNBQXFDLHdDQUF3QyxHQUFHLHFCQUFxQiw0QkFBNEIsb0JBQW9CLDZDQUE2QywwQkFBMEIsZ0JBQWdCLEdBQUcsd0JBQXdCLHNCQUFzQixtQkFBbUIseUJBQXlCLEdBQUcsOEJBQThCLG1DQUFtQyxtQkFBbUIsR0FBRyxXQUFXLHlCQUF5QixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLGdDQUFnQyx5QkFBeUIseUJBQXlCLHlCQUF5QixtQkFBbUIsb0JBQW9CLEdBQUcsZUFBZSxnQ0FBZ0MscUJBQXFCLHdCQUF3Qix1QkFBdUIsa0NBQWtDLDBCQUEwQixpQ0FBaUMsdUJBQXVCLCtDQUErQyxHQUFHLHdCQUF3QixxQ0FBcUMsbUJBQW1CLHVCQUF1Qix3QkFBd0IsR0FBRyxtQ0FBbUMseUJBQXlCLEdBQUcsd0JBQXdCLHVDQUF1QyxHQUFHLDBDQUEwQyxnQ0FBZ0MsR0FBRyxxQ0FBcUMsNENBQTRDLEdBQUcsbUNBQW1DLHlCQUF5QiwwQkFBMEIsR0FBRyxpREFBaUQsMEJBQTBCLEdBQUcsZ0JBQWdCLHFCQUFxQixHQUFHLDBCQUEwQixxQkFBcUIseUJBQXlCLGVBQWUsY0FBYyx1Q0FBdUMsa0JBQWtCLEdBQUcsZ0VBQWdFLG9CQUFvQiw4QkFBOEIsR0FBRyxvQ0FBb0MsNEJBQTRCLEdBQUcsMENBQTBDLDRCQUE0QixHQUFHLDJEQUEyRCxxQ0FBcUMsbUJBQW1CLG9CQUFvQixxQ0FBcUMseUNBQXlDLGdCQUFnQiw2QkFBNkIsOEJBQThCLDBCQUEwQixzQkFBc0IsNkJBQTZCLDBCQUEwQix5QkFBeUIsZUFBZSxnQkFBZ0IsdUNBQXVDLHFDQUFxQyx3QkFBd0IscUZBQXFGLEdBQUcscUJBQXFCLHlCQUF5Qix3QkFBd0IsbUJBQW1CLG1DQUFtQyx3QkFBd0IscUJBQXFCLGtCQUFrQix5QkFBeUIscUJBQXFCLDhCQUE4QiwwQkFBMEIsMEJBQTBCLGtCQUFrQixnQkFBZ0IsR0FBRyxpQ0FBaUMseUJBQXlCLG9CQUFvQixlQUFlLGlDQUFpQyxHQUFHLDZCQUE2Qix5QkFBeUIsb0JBQW9CLGVBQWUsaUNBQWlDLEdBQUcscUJBQXFCLHlCQUF5QixvQkFBb0IseUNBQXlDLEdBQUcscUpBQXFKLG9CQUFvQixpQ0FBaUMsZ0JBQWdCLHlCQUF5QixHQUFHLHNGQUFzRixpQ0FBaUMsR0FBRywyQkFBMkIseUJBQXlCLG9CQUFvQixlQUFlLGlDQUFpQyxHQUFHLHFDQUFxQyx5QkFBeUIsb0JBQW9CLGlDQUFpQyxtQkFBbUIsR0FBRywwQ0FBMEMsbUJBQW1CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLHdCQUF3QixvQkFBb0IsMEJBQTBCLEdBQUcsOERBQThELHNCQUFzQixtQ0FBbUMsbUJBQW1CLEdBQUcsMkJBQTJCLHNCQUFzQixtQkFBbUIsR0FBRyxnRUFBZ0UsbUJBQW1CLEdBQUcsU0FBUywrQkFBK0IsR0FBRyxtQkFBbUI7QUFDNW5PO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDek8xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx5RkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHlGQUFPLElBQUkseUZBQU8sVUFBVSx5RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCNEM7QUFDNUM7QUFDQTtBQUNBLGtCQUFrQiwrQ0FBUztBQUMzQjs7QUFFQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O1VDTnJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0c7QUFDRTtBQUM0QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELFdBQVc7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9jaGVja2JveC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NoZWNrYm94LmNzcz9hOTZkIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY2hlY2tMb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaGVhZGVySW1hZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWdyZWVuOiAjMDA5ODc5O1xuICAgIC0tcmVkOiAjQkM1MzMyO1xufVxuKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggbWF4LWNvbnRlbnQgYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cbi8qIFNpZGViYXIgKi9cbiNzaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xuICAgIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWdyZWVuKTtcbiAgICBib3gtc2hhZG93OiAxMHB4IC0xMHB4IHZhcigtLXJlZCk7XG59XG4jbGlzdC1vZi1wcm9qZWN0cyB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgICBnYXA6IDE1cHg7XG59XG4jbGlzdC1vZi1wcm9qZWN0cyBsaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jbGlzdC1vZi1wcm9qZWN0cyBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jaGVhZGVyIHtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLyogVGFzayB0YWJsZSAqL1xuI3RhYmxlLWRpdiB7XG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG4jdGFzay10YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBtYXJnaW46IDI1cHggMDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIG1heC13aWR0aDogbWluKDIwMGNoLCA1MHZ3KTtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbiN0YXNrLXRhYmxlIHRoZWFkIHRyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jdGFzay10YWJsZSB0aCxcbiN0YXNrLXRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG59XG4jdGFzay10YWJsZSB0Ym9keSB0ciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG59XG4jdGFzay10YWJsZSB0Ym9keSB0cjpudGgtb2YtdHlwZShldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbn1cbiN0YXNrLXRhYmxlIHRib2R5IHRyOmxhc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWdyZWVuKTtcbn1cbiN0YXNrLXRhYmxlIHRib2R5IHRyLmFjdGl2ZS1yb3cge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xufVxuLyogQWRkIHN0cmlrZSB0aHJvdWdoIGFiaWxpdHkgdG8gdGFibGUgKi9cbnRkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxufVxudHIuc3RyaWtlb3V0IHtcbiAgICBjb2xvcjogI2RkZGRkZDtcbn1cbnRyLnN0cmlrZW91dCB0ZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLyogQWxpZ24gY2hlY2tib3ggaW4gdGhlIGNlbnRlciAqL1xuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xuICAgIGFjY2VudC1jb2xvcjogI2RkZGRkZDtcbn1cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkOmhvdmVyIHtcbiAgICBhY2NlbnQtY29sb3I6ICMwMDk4Nzk7XG59XG5cblxuLyogYWRkIHRhc2sgZm9ybSAqL1xuI2FkZC10YXNrLWZvcm0sICNlZGl0LXRhc2stZm9ybXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgIzY2NjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tZ3JlZW4pO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8qIGRpbSBldmVyeXRoaW5nIGFyb3VuZCBmb3JtICovXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMjAwMHB4IHJnYmEoMCwwLDAsMC41KTtcbn1cbiN0b2dnbGUtdGFzay1mb3JtIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XG4gICAgLyogcGFkZGluZzogMTVweDsgKi9cbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7IFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgICByaWdodDogLTIwJTtcbiAgICB0b3A6IDIwcHg7XG59XG4jdGFzay10aXRsZSwgI2VkaXQtdGFzay10aXRsZSB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiA1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG59XG4jZHVlLWRhdGUsICNlZGl0LWR1ZS1kYXRlIHtcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDVweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbn1cbiNwcmlvLCAjZWRpdC1wcmlvIHtcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xufVxuI2xvdy1wcmlvLWNvbnRhaW5lciwgI21pZC1wcmlvLWNvbnRhaW5lciwgXG4jaGlnaC1wcmlvLWNvbnRhaW5lciwgI2VkaXQtbG93LXByaW8tY29udGFpbmVyLCBcbiNlZGl0LW1pZC1wcmlvLWNvbnRhaW5lciwgI2VkaXQtaGlnaC1wcmlvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2xvdy1wcmlvLCAjbWlkLXByaW8sICNoaWdoLXByaW8sXG4jZWRpdC1sb3ctcHJpbywgI2VkaXQtbWlkLXByaW8sICNlZGl0LWhpZ2gtcHJpbyB7XG4gICAgYWNjZW50LWNvbG9yOiB2YXIoLS1ncmVlbik7XG59XG4jcHJvamVjdCwgI2VkaXQtcHJvamVjdCB7XG4gICAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiA1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG59XG4jZm9ybS1idXR0b25zLCAjZWRpdC1mb3JtLWJ1dHRvbnMge1xuICAgIGdyaWQtYXJlYTogMy8xLzQvMztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbiNzdWJtaXQtdGFzaywgI2VkaXQtdGFzaywgI3JlbW92ZS10YXNrIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuI3N1Ym1pdC10YXNrOmhvdmVyLCAjZWRpdC10YXNrOmhvdmVyLCBcbiNyZW1vdmUtdGFzazpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI3RvZ2dsZS10YXNrLWZvcm06aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4vKiBkaXNhYmxlIHJlc2l6aW5nIG9mIHRleHRhcmVhIGZvciBkZXNjcmlwdGlvbiAqL1xudGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQjswQkFDc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQSxZQUFZO0FBQ1o7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBLGVBQWU7QUFDZjtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0Esd0NBQXdDO0FBQ3hDO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1AsZ0NBQWdDO0lBQ2hDLFdBQVc7QUFDZjtBQUNBLGlDQUFpQztBQUNqQztJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFHQSxrQkFBa0I7QUFDbEI7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0NBQWtDO0lBQ2xDLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0Isd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7SUFDUiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7QUFDQTs7O0lBR0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7SUFDUiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQSxpREFBaUQ7QUFDakQ7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWdyZWVuOiAjMDA5ODc5O1xcbiAgICAtLXJlZDogI0JDNTMzMjtcXG59XFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IG1heC1jb250ZW50IGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuLyogU2lkZWJhciAqL1xcbiNzaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggLTEwcHggdmFyKC0tcmVkKTtcXG59XFxuI2xpc3Qtb2YtcHJvamVjdHMge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcbiNsaXN0LW9mLXByb2plY3RzIGxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2xpc3Qtb2YtcHJvamVjdHMgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiNoZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4vKiBUYXNrIHRhYmxlICovXFxuI3RhYmxlLWRpdiB7XFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuI3Rhc2stdGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBtYXJnaW46IDI1cHggMDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIG1heC13aWR0aDogbWluKDIwMGNoLCA1MHZ3KTtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcbiN0YXNrLXRhYmxlIHRoZWFkIHRyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jdGFzay10YWJsZSB0aCxcXG4jdGFzay10YWJsZSB0ZCB7XFxuICAgIHBhZGRpbmc6IDEycHggMTVweDtcXG59XFxuI3Rhc2stdGFibGUgdGJvZHkgdHIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcXG59XFxuI3Rhc2stdGFibGUgdGJvZHkgdHI6bnRoLW9mLXR5cGUoZXZlbikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcbn1cXG4jdGFzay10YWJsZSB0Ym9keSB0cjpsYXN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZ3JlZW4pO1xcbn1cXG4jdGFzay10YWJsZSB0Ym9keSB0ci5hY3RpdmUtcm93IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG4vKiBBZGQgc3RyaWtlIHRocm91Z2ggYWJpbGl0eSB0byB0YWJsZSAqL1xcbnRkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG59XFxudHIuc3RyaWtlb3V0IHtcXG4gICAgY29sb3I6ICNkZGRkZGQ7XFxufVxcbnRyLnN0cmlrZW91dCB0ZDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLyogQWxpZ24gY2hlY2tib3ggaW4gdGhlIGNlbnRlciAqL1xcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIHtcXG4gICAgYWNjZW50LWNvbG9yOiAjZGRkZGRkO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6aG92ZXIge1xcbiAgICBhY2NlbnQtY29sb3I6ICMwMDk4Nzk7XFxufVxcblxcblxcbi8qIGFkZCB0YXNrIGZvcm0gKi9cXG4jYWRkLXRhc2stZm9ybSwgI2VkaXQtdGFzay1mb3Jte1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2NjY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIC8qIGRpbSBldmVyeXRoaW5nIGFyb3VuZCBmb3JtICovXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDIwMDBweCByZ2JhKDAsMCwwLDAuNSk7XFxufVxcbiN0b2dnbGUtdGFzay1mb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICAvKiBwYWRkaW5nOiAxNXB4OyAqL1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgcmlnaHQ6IC0yMCU7XFxuICAgIHRvcDogMjBweDtcXG59XFxuI3Rhc2stdGl0bGUsICNlZGl0LXRhc2stdGl0bGUge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuI2R1ZS1kYXRlLCAjZWRpdC1kdWUtZGF0ZSB7XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG4jcHJpbywgI2VkaXQtcHJpbyB7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG59XFxuI2xvdy1wcmlvLWNvbnRhaW5lciwgI21pZC1wcmlvLWNvbnRhaW5lciwgXFxuI2hpZ2gtcHJpby1jb250YWluZXIsICNlZGl0LWxvdy1wcmlvLWNvbnRhaW5lciwgXFxuI2VkaXQtbWlkLXByaW8tY29udGFpbmVyLCAjZWRpdC1oaWdoLXByaW8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jbG93LXByaW8sICNtaWQtcHJpbywgI2hpZ2gtcHJpbyxcXG4jZWRpdC1sb3ctcHJpbywgI2VkaXQtbWlkLXByaW8sICNlZGl0LWhpZ2gtcHJpbyB7XFxuICAgIGFjY2VudC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG4jcHJvamVjdCwgI2VkaXQtcHJvamVjdCB7XFxuICAgIGdyaWQtYXJlYTogMi8yLzMvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG4jZm9ybS1idXR0b25zLCAjZWRpdC1mb3JtLWJ1dHRvbnMge1xcbiAgICBncmlkLWFyZWE6IDMvMS80LzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcbiNzdWJtaXQtdGFzaywgI2VkaXQtdGFzaywgI3JlbW92ZS10YXNrIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuI3N1Ym1pdC10YXNrOmhvdmVyLCAjZWRpdC10YXNrOmhvdmVyLCBcXG4jcmVtb3ZlLXRhc2s6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI3RvZ2dsZS10YXNrLWZvcm06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLyogZGlzYWJsZSByZXNpemluZyBvZiB0ZXh0YXJlYSBmb3IgZGVzY3JpcHRpb24gKi9cXG50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoZWNrYm94LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hlY2tib3guY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICBzdG9yYWdlICYmXG4gICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgICApO1xuICAgIH1cbiAgfVxuICAiLCJpbXBvcnQgVG9kb2VyU1ZHIGZyb20gJy4vaW1hZ2VzL1RvZG9lci5wbmcnO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xuY29uc3QgaGVhZGVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbmhlYWRlckltYWdlLnNyYyA9IFRvZG9lclNWRztcbmhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJJbWFnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vY2hlY2tib3guY3NzXCI7XG5pbXBvcnQgXCIuL2hlYWRlckltYWdlLmpzXCI7XG5pbXBvcnQgc3RvcmFnZUF2YWlsYWJsZSBmcm9tIFwiLi9jaGVja0xvY2FsU3RvcmFnZS5qc1wiO1xuLy8gRnVuY3Rpb24gdG8gYWRkIGV2ZW50IGxpc3RlbmVyXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyV2l0aFRyYWNraW5nKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaykge1xuICBpZiAoIWVsZW1lbnQuX2V2ZW50TGlzdGVuZXJzKSB7XG4gICAgZWxlbWVudC5fZXZlbnRMaXN0ZW5lcnMgPSB7fTtcbiAgfVxuICBpZiAoIWVsZW1lbnQuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XSkge1xuICAgIGVsZW1lbnQuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICB9XG4gIGVsZW1lbnQuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG59XG4vLyBGdW5jdGlvbiB0byByZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVyc1xuZnVuY3Rpb24gcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMoZWxlbWVudCwgZXZlbnQpIHtcbiAgaWYgKGVsZW1lbnQuX2V2ZW50TGlzdGVuZXJzICYmIGVsZW1lbnQuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XSkge1xuICAgIGVsZW1lbnQuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgfSk7XG4gICAgZWxlbWVudC5fZXZlbnRMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gIH1cbn1cblxuLy8gQ2hlY2sgdGFzayBhbmQgZ3JleSBvdXQgdGhlIHRhc2tcbi8vIEdpdmUgZWFjaCBjaGVja2JveCBhbiBldmVudCBsaXN0ZW5lclxuZnVuY3Rpb24gYWN0aXZhdGVDaGVja2JveEV2ZW50cygpIHtcbiAgY29uc3QgdGFza0NoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcblxuICB0YXNrQ2hlY2tib3hlcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgLy8gUmVtb3ZlIGFsbCBwcmV2aW91cyBldmVudCBsaXN0ZW5lcnMgYW5kIHJlZnJlc2ggd2l0aCBuZXcgb25lc1xuICAgIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzKHRhc2ssIFwiY2xpY2tcIik7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcldpdGhUcmFja2luZyh0YXNrLCBcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRhc2suY2xvc2VzdChcInRyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzdHJpa2VvdXRcIik7XG4gICAgfSk7XG4gIH0pO1xufVxuLy8gY3JlYXRlIHRhc2tcbmZ1bmN0aW9uIENyZWF0ZVRvRG8odGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gIC8vIGdpdmUgZGVmYXVsdCBwcm9qZWN0IGlmIG5vdCBwcm9qZWN0IGlzIGNob3NlblxuICBpZiAocHJvamVjdCA9PSBcIlwiKSB7XG4gICAgcHJvamVjdCA9IFwidW5hc3NpZ25lZFwiO1xuICB9XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBwcm9qZWN0LFxuICB9O1xufVxuY29uc3QgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRhYmxlXCIpO1xuLy8gQWRkIHRhc2tzIGV2ZW50IGxpc3RlbmVyXG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXQtdGFza1wiKTtcbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBhZGRUYXNrKGFkZFRhc2tCdXR0b24pO1xufSk7XG5cbi8vIEFkZCBUYXNrIChvbmx5IERPTSBtYW5pcHVsYXRpb24pXG5mdW5jdGlvbiBhZGRUYXNrKGJ1dHRvbikge1xuICAvLyBleHRyYWN0IHRoZSB2YWx1ZXMgYW5kIGVudGVyIHRoZW0gaW50byBhIG5ldyByb3cgYXQgdGhlIGVuZCBvZiB0aGUgdGFibGVcbiAgLy8gYWxzbzogcmVzZXQgYW55IHByZXZpb3VzIHRhc2sgdmFsdWVzXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0YXNrLXRpdGxlXCJdJykudmFsdWU7XG4gIC8vIERhdGUgZm9ybWF0IGlzIFlZWVktTU0tRERcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZHVlLWRhdGVcIl0nKS52YWx1ZTtcbiAgY29uc3QgcHJpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicHJpb1wiXTpjaGVja2VkJykudmFsdWU7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInByb2plY3RcIl0nKS52YWx1ZTtcbiAgLy8gY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsdWU7XG4gIGNvbnN0IHRhc2sgPSBDcmVhdGVUb0RvKHRpdGxlLCBkdWVEYXRlLCBwcmlvLCBwcm9qZWN0KTtcbiAgLy8gY2hlY2sgaWYgdGhlcmUgYXJlIGFueSB0Ym9keSByb3dzXG4gIGNvbnNvbGUubG9nKHRhc2spO1xuICBwb3B1bGF0ZVRhYmxlKHRhc2spO1xuICAvLyBSdW4gc2V0VGFibGVJZHMgdG8gcmVzZXQgYWxsIGRhdGEtaW5kZXggdmFsdWVzIGFuZCBhY3RpdmF0ZSBjaGVja2JveCBldmVudCBsaXN0ZW5lcnNcbiAgc2V0VGFibGVJZHModGFza1RhYmxlKTtcbiAgYWN0aXZhdGVDaGVja2JveEV2ZW50cygpO1xuICB0YWJsZVRvSnNvbih0YXNrVGFibGUpO1xuICBjb2xsZWN0UHJvamVjdHMoKTtcbiAgdG9nZ2xlQWRkRm9ybSgpO1xuICBhY3RpdmF0ZVJvd0VkaXRFdmVudHModGFza1RhYmxlKTtcbn1cbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1mb3JtXCIpO1xuYWRkVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkpO1xuY29uc3QgdG9nZ2xlRm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLXRhc2stZm9ybVwiKTtcbmZ1bmN0aW9uIHRvZ2dsZUFkZEZvcm0oKSB7XG4gIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xufVxudG9nZ2xlRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB0b2dnbGVBZGRGb3JtKCk7XG59KTtcblxuLy8gYWRkIGNsaWNrIGV2ZW50IHRvIGVhY2ggcm93IG9mIHRoZSB0YWJsZVxuZnVuY3Rpb24gYWN0aXZhdGVSb3dFZGl0RXZlbnRzKHRhYmxlKSB7XG4gIGNvbnN0IHRhc2tUYWJsZVRib2R5ID0gdGFibGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKVswXTtcbiAgZm9yIChjb25zdCByb3cgb2YgdGFza1RhYmxlVGJvZHkucm93cykge1xuICAgIGNvbnN0IHJvd1RkcyA9IHJvdy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRkXCIpO1xuICAgIEFycmF5LmZyb20ocm93VGRzKS5mb3JFYWNoKCh0ZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnModGQsIFwiY2xpY2tcIik7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJXaXRoVHJhY2tpbmcodGQsIFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGZpbGxFZGl0Rm9ybSh0YXNrVGFibGVUYm9keSwgdGQuY2xvc2VzdChcInRyXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbi8vIEVkaXQgdGFza3NcbmNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stZm9ybVwiKTtcbmNvbnN0IGNsb3NlRWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWVkaXQtZm9ybVwiKTtcbmNsb3NlRWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIGFjdGl2YXRlUm93RWRpdEV2ZW50cyh0YXNrVGFibGUpO1xufSk7XG5mdW5jdGlvbiBmaWxsRWRpdEZvcm0odGFibGVCb2R5LCB0cikge1xuICAvLyBDaG9zZW4gcm93IGVsZW1lbnRzXG4gIGNvbnN0IGNob3NlblJvdyA9IEFycmF5LmZyb20odHIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZFwiKSk7XG4gIGNvbnN0IGNob3NlblJvd0luZGV4ID0gdHIuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKTtcbiAgY29uc3QgY2hvc2VuVGl0bGUgPSBjaG9zZW5Sb3dbMV0uaW5uZXJIVE1MO1xuICBjb25zdCBjaG9zZW5EdWVEYXRlID0gY2hvc2VuUm93WzJdLmlubmVySFRNTDtcbiAgY29uc3QgY2hvc2VuUHJpbyA9IGNob3NlblJvd1szXS5pbm5lckhUTUw7XG4gIGNvbnN0IGNob3NlblByb2plY3QgPSBjaG9zZW5Sb3dbNF0uaW5uZXJIVE1MO1xuICAvLyBGaWxsIGluIHRoZSBmb2xsb3dpbmcgZWRpdCBmb3JtIGVsZW1lbnRzXG4gIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZWRpdC10YXNrLXRpdGxlXCInKTtcbiAgaW5wdXRUaXRsZS52YWx1ZSA9IGNob3NlblRpdGxlO1xuICBjb25zdCBpbnB1dER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZWRpdC1kdWUtZGF0ZVwiJyk7XG4gIGlucHV0RHVlRGF0ZS52YWx1ZSA9IGNob3NlbkR1ZURhdGU7XG4gIGNvbnN0IGlucHV0UHJpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3ZhbHVlPSR7Y2hvc2VuUHJpb31dYCk7XG4gIGlucHV0UHJpby52YWx1ZSA9IGNob3NlblByaW87XG4gIGNvbnN0IGlucHV0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJlZGl0LXByb2plY3RcIicpO1xuICBpbnB1dFByb2plY3QudmFsdWUgPSBjaG9zZW5Qcm9qZWN0O1xuICAvLyBTZXQgY2hvc2VuIHJvdyBpbmRleCB0byBtYW5pcHVsYXRlIHRoZSB0YXNrIGxhdGVyIHdpdGggZWRpVGFza1xuICBjb25zdCByb3dJbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hvc2VuLXJvdy1pbmRleFwiKTtcbiAgcm93SW5kZXguaW5uZXJIVE1MID0gY2hvc2VuUm93SW5kZXg7XG4gIC8vIFJlbW92ZSBhbGwgY2xpY2sgZXZlbnRzIGZyb20gdGhlIHRhYmxlIHdoaWxlIHRoZSBlZGl0IGZvcm0gaXMgYWN0aXZlXG4gIGZvciAoY29uc3Qgcm93IG9mIHRhYmxlQm9keS5yb3dzKSB7XG4gICAgY29uc3Qgcm93VGRzID0gcm93LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGRcIik7XG4gICAgQXJyYXkuZnJvbShyb3dUZHMpLmZvckVhY2goKHRkLCBpbmRleCkgPT4ge1xuICAgICAgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnModGQsIFwiY2xpY2tcIik7XG4gICAgfSk7XG4gIH1cbiAgZWRpdEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzKHJlbW92ZUJ1dHRvbiwgXCJjbGlja1wiKTtcbiAgYWRkRXZlbnRMaXN0ZW5lcldpdGhUcmFja2luZyhyZW1vdmVCdXR0b24sIFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZW1vdmVUYXNrKGNob3NlblJvd0luZGV4KTtcbiAgfSk7XG59XG5jb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2tcIik7XG5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZWRpdFRhc2sodGFza1RhYmxlKTtcbn0pO1xuXG5mdW5jdGlvbiBlZGl0VGFzayh0YWJsZSkge1xuICBjb25zdCB0Qm9keVJvd3MgPSB0YWJsZVxuICAgIC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRib2R5XCIpWzBdXG4gICAgLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidHJcIik7XG4gIGNvbnN0IGNoYW5nZWRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZWRpdC10YXNrLXRpdGxlXCJdJykudmFsdWU7XG4gIC8vIERhdGUgZm9ybWF0IGlzIFlZWVktTU0tRERcbiAgY29uc3QgY2hhbmdlZER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImVkaXQtZHVlLWRhdGVcIl0nKS52YWx1ZTtcbiAgY29uc3QgY2hhbmdlZFByaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdbbmFtZT1cImVkaXQtcHJpb1wiXTpjaGVja2VkJyxcbiAgKS52YWx1ZTtcbiAgY29uc3QgY2hhbmdlZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImVkaXQtcHJvamVjdFwiXScpLnZhbHVlO1xuICBjb25zdCByb3dJbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hvc2VuLXJvdy1pbmRleFwiKS5pbm5lckhUTUw7XG4gIGNvbnN0IGNob3NlblJvdyA9IEFycmF5LmZyb20oXG4gICAgdEJvZHlSb3dzW3Jvd0luZGV4IC0gMV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZFwiKSxcbiAgKTtcbiAgLy8gU2V0IG5ldyB2YWx1ZXMgaW50byB0aGUgdGFibGVcbiAgY2hvc2VuUm93WzFdLmlubmVySFRNTCA9IGNoYW5nZWRUaXRsZTtcbiAgY2hvc2VuUm93WzJdLmlubmVySFRNTCA9IGNoYW5nZWREdWVEYXRlO1xuICBjaG9zZW5Sb3dbM10uaW5uZXJIVE1MID0gY2hhbmdlZFByaW87XG4gIGNob3NlblJvd1s0XS5pbm5lckhUTUwgPSBjaGFuZ2VkUHJvamVjdDtcbiAgdGFibGVUb0pzb24odGFza1RhYmxlKTtcbn1cbi8vIGZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyBhIHJvdyBmcm9tIGEgdGFibGVcbmNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVtb3ZlLXRhc2tcIik7XG5mdW5jdGlvbiByZW1vdmVUYXNrKGRhdGFJbmRleCkge1xuICB0YXNrVGFibGUuZGVsZXRlUm93KGRhdGFJbmRleCk7XG4gIC8vIENsb3NlIGVkaXQgZm9ybVxuICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgYWN0aXZhdGVSb3dFZGl0RXZlbnRzKHRhc2tUYWJsZSk7XG4gIHNldFRhYmxlSWRzKHRhc2tUYWJsZSk7XG4gIHRhYmxlVG9Kc29uKHRhc2tUYWJsZSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlVGFibGUodGFzaykge1xuICBpZiAodGFza1RhYmxlLnJvd3MubGVuZ3RoID4gMSkge1xuICAgIGNvbnN0IG5ld1Rhc2tSb3cgPSB0YXNrVGFibGUuaW5zZXJ0Um93KC0xKTtcbiAgICBuZXdUYXNrUm93Lmluc2VydENlbGwoMCkuaW5uZXJIVE1MID0gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj4nO1xuICAgIG5ld1Rhc2tSb3cuaW5zZXJ0Q2VsbCgxKS5pbm5lckhUTUwgPSB0YXNrLnRpdGxlO1xuICAgIG5ld1Rhc2tSb3cuaW5zZXJ0Q2VsbCgyKS5pbm5lckhUTUwgPSB0YXNrLmR1ZURhdGU7XG4gICAgbmV3VGFza1Jvdy5pbnNlcnRDZWxsKDMpLmlubmVySFRNTCA9IHRhc2sucHJpb3JpdHk7XG4gICAgbmV3VGFza1Jvdy5pbnNlcnRDZWxsKDQpLmlubmVySFRNTCA9XG4gICAgICB0YXNrLnByb2plY3QubGVuZ3RoID4gMCA/IHRhc2sucHJvamVjdCA6IFwiXCI7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGFza1RhYmxlVGJvZHkgPSBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10YWJsZVwiKVxuICAgICAgLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIilbMF07XG4gICAgY29uc3QgVGJvZHlGaXJzdFJvdyA9IHRhc2tUYWJsZVRib2R5Lmluc2VydFJvdygtMSk7XG4gICAgVGJvZHlGaXJzdFJvdy5pbnNlcnRDZWxsKDApLmlubmVySFRNTCA9ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+JztcbiAgICBUYm9keUZpcnN0Um93Lmluc2VydENlbGwoMSkuaW5uZXJIVE1MID0gdGFzay50aXRsZTtcbiAgICBUYm9keUZpcnN0Um93Lmluc2VydENlbGwoMikuaW5uZXJIVE1MID0gdGFzay5kdWVEYXRlO1xuICAgIFRib2R5Rmlyc3RSb3cuaW5zZXJ0Q2VsbCgzKS5pbm5lckhUTUwgPSB0YXNrLnByaW9yaXR5O1xuICAgIFRib2R5Rmlyc3RSb3cuaW5zZXJ0Q2VsbCg0KS5pbm5lckhUTUwgPVxuICAgICAgdGFzay5wcm9qZWN0Lmxlbmd0aCA+IDAgPyB0YXNrLnByb2plY3QgOiBcIlwiO1xuICB9XG59XG4vLyBQYXJzZSB0aHJvdWdoIHRoZSB0YWJsZSBhbmQgc2V0IGEgZGF0YS1pbmRleCB0byBlYWNoIHJvd1xuZnVuY3Rpb24gc2V0VGFibGVJZHModGFibGUpIHtcbiAgLy8gTG9vcCB0aHJvdWdoIGFsbCByb3dzIGFuZCBnaXZlIGVhY2ggcm93IGFuIGluZGV4IGluIGFzY2VuZGluZyBvcmRlclxuICAvLyBJbmRleCAwIGlzIHRoZWFkIHRyXG4gIEFycmF5LmZyb20odGFza1RhYmxlLnJvd3MpLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICB0YXNrVGFibGUucm93c1tpbmRleF0uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpbmRleCk7XG4gIH0pO1xuICBhY3RpdmF0ZUNoZWNrYm94RXZlbnRzKCk7XG59XG5jb25zdCBsaXN0T2ZQcm9qZWN0cyA9IFtcInNob3cgYWxsXCIsIFwidW5hc3NpZ25lZFwiXTtcbmZ1bmN0aW9uIGNvbGxlY3RQcm9qZWN0cyh0YWJsZSkge1xuICBBcnJheS5mcm9tKHRhc2tUYWJsZS5yb3dzKS5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgLy8gVHJhbnNmb3JtIHJvdyBmcm9tIGh0bWxjb2xsZWN0aW9uIHRvIGFycmF5XG4gICAgICByb3cgPSBBcnJheS5mcm9tKHJvdy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRkXCIpKTtcbiAgICAgIGNvbnN0IHByb2plY3QgPSByb3dbcm93Lmxlbmd0aCAtIDFdLmlubmVySFRNTDtcbiAgICAgIGlmICghbGlzdE9mUHJvamVjdHMuaW5jbHVkZXMocHJvamVjdCkgJiYgcHJvamVjdCAhPSBcIlwiKSB7XG4gICAgICAgIGxpc3RPZlByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcHJvamVjdHNUb1NpZGViYXIobGlzdE9mUHJvamVjdHMpO1xufVxuLy8gQWRkIHByb2plY3RzIHRvIHNpZGViYXJcbmNvbnN0IHNpZGViYXJQcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdC1vZi1wcm9qZWN0c1wiKTtcbmZ1bmN0aW9uIHByb2plY3RzVG9TaWRlYmFyKHByb2plY3RzKSB7XG4gIHNpZGViYXJQcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMobGksIFwiY2xpY2tcIik7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcldpdGhUcmFja2luZyhsaSwgXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzaG93UHJvamVjdFZpZXcodGFza1RhYmxlLCBwcm9qZWN0KTtcbiAgICB9KTtcbiAgICBsaS5hcHBlbmQocHJvamVjdCk7XG4gICAgc2lkZWJhclByb2plY3RMaXN0LmFwcGVuZChsaSk7XG4gIH0pO1xufVxuLy8gc2hvdyBvbmx5IHByb2plY3QgdmlldyBpbiB0aGUgdGFibGVcbmZ1bmN0aW9uIHNob3dQcm9qZWN0Vmlldyh0YWJsZSwgcHJvamVjdCkge1xuICBBcnJheS5mcm9tKHRhYmxlLnJvd3MpLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICByb3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICBjb25zdCByb3dUZHMgPSBBcnJheS5mcm9tKHJvdy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRkXCIpKTtcbiAgICAgIGlmIChyb3dUZHNbcm93VGRzLmxlbmd0aCAtIDFdLmlubmVySFRNTCA9PSBwcm9qZWN0KSB7XG4gICAgICB9IGVsc2UgaWYgKHByb2plY3QgPT0gXCJzaG93IGFsbFwiKSB7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbi8vIEFkZCBlYWNoIHJvdyBvZiBhIHRhYmxlIHRvIGEgdGFza3MganNvbiBmaWxlIG9uIGxvY2FsIHN0b3JhZ2Vcbi8vIFBhcnNlIHRocm91Z2ggdGFibGUgYW5kIHVwZGF0ZSBsb2NhbCBzdG9yYWdlIHdpdGggYWxsIGN1cnJlbnQgdGFza3NcbmxldCB0YXNrcyA9IHtcbiAgdGFza3M6IFtdLFxufTtcbmZ1bmN0aW9uIHRhYmxlVG9Kc29uKHRhYmxlKSB7XG4gIHRhc2tzID0ge1xuICAgIHRhc2tzOiBbXSxcbiAgfTtcbiAgQXJyYXkuZnJvbSh0YXNrVGFibGUucm93cykuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgIGNvbnN0IHRpdGxlID0gcm93LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGRcIilbMV0uaW5uZXJIVE1MO1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IHJvdy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRkXCIpWzJdLmlubmVySFRNTDtcbiAgICAgIGNvbnN0IHByaW8gPSByb3cuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZFwiKVszXS5pbm5lckhUTUw7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gcm93LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGRcIilbNF0uaW5uZXJIVE1MO1xuICAgICAgdGFza3MudGFza3NbaW5kZXggLSAxXSA9IHt9O1xuICAgICAgdGFza3MudGFza3NbaW5kZXggLSAxXS50aXRsZSA9IHRpdGxlO1xuICAgICAgdGFza3MudGFza3NbaW5kZXggLSAxXS5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgIHRhc2tzLnRhc2tzW2luZGV4IC0gMV0ucHJpbyA9IHByaW87XG4gICAgICB0YXNrcy50YXNrc1tpbmRleCAtIDFdLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn1cbi8vIFBvcHVsYXRlIHRhc2tzIHdpdGggbG9jYWxTdG9yYWdlIGlmIHRhc2tzIGFyZSBhdmFpbGFibGUgb24gbG9hZFxuZnVuY3Rpb24gcG9wdWxhdGVUYXNrcygpIHtcbiAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICBpZiAoIXRhc2tzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChPYmplY3Qua2V5cyh0YXNrcy50YXNrcykubGVuZ3RoID4gMCkge1xuICAgIHRhc2tUYWJsZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRib2R5XCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChjb25zdCBzdG9yZWRUYXNrIG9mIHRhc2tzLnRhc2tzKSB7XG4gICAgICBjb25zdCB0YXNrID0gQ3JlYXRlVG9EbyhcbiAgICAgICAgc3RvcmVkVGFzay50aXRsZSxcbiAgICAgICAgc3RvcmVkVGFzay5kdWVEYXRlLFxuICAgICAgICBzdG9yZWRUYXNrLnByaW8sXG4gICAgICAgIHN0b3JlZFRhc2sucHJvamVjdCxcbiAgICAgICk7XG4gICAgICBwb3B1bGF0ZVRhYmxlKHRhc2spO1xuICAgIH1cbiAgfVxufVxuXG4vLyBmdW5jdGlvbiBvbkNsaWNrT3V0c2lkZShlbGUsIGNiKSB7XG4vLyAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4vLyAgICAgICAgIGlmICghZWxlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIGNiKCk7XG4vLyAgICAgfSk7XG4vLyB9O1xuXG5wb3B1bGF0ZVRhc2tzKCk7XG4vLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpKTtcbnRhYmxlVG9Kc29uKHRhc2tUYWJsZSk7XG5zZXRUYWJsZUlkcygpO1xuY29sbGVjdFByb2plY3RzKCk7XG5wcm9qZWN0c1RvU2lkZWJhcihsaXN0T2ZQcm9qZWN0cyk7XG5hY3RpdmF0ZVJvd0VkaXRFdmVudHModGFza1RhYmxlKTtcbi8vIENsb3NlIHRoZSBhZGQgdGFzayBmb3JtIHdoZW4gY2xpY2tlZCBvdXRzaWRlIG9mIGl0XG53aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICBpZiAoXG4gICAgIWV2ZW50LnRhcmdldC5tYXRjaGVzKFwiI2FkZC10YXNrLWZvcm1cIikgJiZcbiAgICAhZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIjdG9nZ2xlLXRhc2stZm9ybVwiKVxuICApIHtcbiAgICBpZiAoIWFkZFRhc2tGb3JtLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcbiAgICAgIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIH1cbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==