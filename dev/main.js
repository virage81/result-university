/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./styles/index.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./styles/index.scss ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.scss */ "../node_modules/css-loader/dist/cjs.js!./styles/reset.scss");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./fonts.scss */ "../node_modules/css-loader/dist/cjs.js!./styles/fonts.scss");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__);
// Imports





var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/summer-bg.jpg */ "./assets/summer-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_scss__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body {
  min-height: 100dvh;
}

body {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
}

.sounds {
  min-height: 100dvh;
  padding: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}
.sounds__title {
  color: orange;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
}
.sounds__image {
  position: absolute;
  z-index: -1;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/cover no-repeat fixed;
}
.sounds__wrapper {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
}
.sounds__item {
  cursor: pointer;
  background: #989898;
  display: flex;
  align-content: center;
  justify-content: center;
  place-content: center;
  padding: 4rem;
  border-radius: 1rem;
  border: 1px solid #fff;
}
.sounds__item-icon {
  width: 2rem;
  height: auto;
}
.sounds__controls {
  margin: 0 auto;
  display: inline-block;
  width: 150px;
  height: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
       appearance: none;
  background: transparent;
  cursor: pointer;
  --value: 50;
}
.sounds__controls::-webkit-slider-runnable-track {
  height: 4px;
  background: linear-gradient(to right, #007bff 0%, #007bff calc(var(--value) * 1%), #ffffff calc(var(--value) * 1%), #ffffff 100%);
  border-radius: 2px;
}
.sounds__controls::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background: #007bff;
  border-radius: 50%;
  margin-top: -6px;
  cursor: pointer;
}
.sounds__controls::-moz-range-track {
  height: 4px;
  background: linear-gradient(to right, #007bff 0%, #007bff calc(var(--value) * 1%), #ffffff calc(var(--value) * 1%), #ffffff 100%);
  border-radius: 2px;
}
.sounds__controls::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: #007bff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
}
.sounds__controls::-ms-track {
  height: 4px;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
.sounds__controls::-ms-fill-lower {
  background: #007bff;
  border-radius: 2px;
}
.sounds__controls::-ms-fill-upper {
  background: #ffffff;
  border-radius: 2px;
}
.sounds__controls::-ms-thumb {
  width: 16px;
  height: 16px;
  background: #007bff;
  border-radius: 50%;
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./styles/index.scss"],"names":[],"mappings":"AAGA;;EAEC,kBAAA;AAAD;;AAGA;EACC,iCAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AAAD;;AAGA;EACC,kBAAA;EACA,aAAA;EACA,kBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,SAAA;AAFD;AAIC;EACC,aAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EAEA,mBAAA;AAHF;AAMC;EACC,kBAAA;EACA,WAAA;EACA,QAAA;EAAA,UAAA;EAAA,WAAA;EAAA,SAAA;EAEA,iBAAA;EACA,yBAAA;EACA,gFAAA;AALF;AAQC;EAEC,aAAA;EACA,uBAAA;EACA,YAAA;AAPF;AAUC;EACC,eAAA;EAEA,mBAAA;EAEA,aAAA;EACA,qBAAA;EAAA,uBAAA;EAAA,qBAAA;EAEA,aAAA;EAEA,mBAAA;EACA,sBAAA;AAZF;AAcE;EACC,WAAA;EACA,YAAA;AAZH;AAgBC;EACC,cAAA;EACA,qBAAA;EACA,YAAA;EACA,YAAA;EAEA,wBAAA;EACA,qBAAA;OAAA,gBAAA;EACA,uBAAA;EACA,eAAA;EAEA,WAAA;AAhBF;AAkBE;EACC,WAAA;EACA,iIAAA;EAKA,kBAAA;AApBH;AAuBE;EACC,wBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;AArBH;AAwBE;EACC,WAAA;EACA,iIAAA;EAKA,kBAAA;AA1BH;AA6BE;EACC,WAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,eAAA;AA3BH;AA8BE;EACC,WAAA;EACA,uBAAA;EACA,yBAAA;EACA,kBAAA;AA5BH;AA+BE;EACC,mBAAA;EACA,kBAAA;AA7BH;AAgCE;EACC,mBAAA;EACA,kBAAA;AA9BH;AAiCE;EACC,WAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;AA/BH","sourcesContent":["@import url('./reset.scss');\n@import url('./fonts.scss');\n\nhtml,\nbody {\n\tmin-height: 100dvh;\n}\n\nbody {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-weight: 400;\n\tfont-size: 16px;\n\tline-height: 1.5;\n}\n\n.sounds {\n\tmin-height: 100dvh;\n\tpadding: 40px;\n\tposition: relative;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\tgap: 3rem;\n\n\t&__title {\n\t\tcolor: orange;\n\t\tfont-size: 3rem;\n\t\tfont-weight: 700;\n\t\ttext-align: center;\n\n\t\tmargin-bottom: 2rem;\n\t}\n\n\t&__image {\n\t\tposition: absolute;\n\t\tz-index: -1;\n\t\tinset: 0px;\n\n\t\tfilter: blur(5px);\n\t\t-webkit-filter: blur(5px);\n\t\tbackground: url('../assets/summer-bg.jpg') center/cover no-repeat fixed;\n\t}\n\n\t&__wrapper {\n\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tgap: 0.75rem;\n\t}\n\n\t&__item {\n\t\tcursor: pointer;\n\n\t\tbackground: #989898;\n\n\t\tdisplay: flex;\n\t\tplace-content: center;\n\n\t\tpadding: 4rem;\n\n\t\tborder-radius: 1rem;\n\t\tborder: 1px solid #fff;\n\n\t\t&-icon {\n\t\t\twidth: 2rem;\n\t\t\theight: auto;\n\t\t}\n\t}\n\n\t&__controls {\n\t\tmargin: 0 auto;\n\t\tdisplay: inline-block;\n\t\twidth: 150px;\n\t\theight: 20px;\n\n\t\t-webkit-appearance: none;\n\t\tappearance: none;\n\t\tbackground: transparent;\n\t\tcursor: pointer;\n\n\t\t--value: 50;\n\n\t\t&::-webkit-slider-runnable-track {\n\t\t\theight: 4px;\n\t\t\tbackground: linear-gradient(to right,\n\t\t\t\t\t#007bff 0%,\n\t\t\t\t\t#007bff calc(var(--value) * 1%),\n\t\t\t\t\t#ffffff calc(var(--value) * 1%),\n\t\t\t\t\t#ffffff 100%);\n\t\t\tborder-radius: 2px;\n\t\t}\n\n\t\t&::-webkit-slider-thumb {\n\t\t\t-webkit-appearance: none;\n\t\t\tappearance: none;\n\t\t\twidth: 16px;\n\t\t\theight: 16px;\n\t\t\tbackground: #007bff;\n\t\t\tborder-radius: 50%;\n\t\t\tmargin-top: -6px;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t&::-moz-range-track {\n\t\t\theight: 4px;\n\t\t\tbackground: linear-gradient(to right,\n\t\t\t\t\t#007bff 0%,\n\t\t\t\t\t#007bff calc(var(--value) * 1%),\n\t\t\t\t\t#ffffff calc(var(--value) * 1%),\n\t\t\t\t\t#ffffff 100%);\n\t\t\tborder-radius: 2px;\n\t\t}\n\n\t\t&::-moz-range-thumb {\n\t\t\twidth: 16px;\n\t\t\theight: 16px;\n\t\t\tbackground: #007bff;\n\t\t\tborder-radius: 50%;\n\t\t\tborder: none;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t&::-ms-track {\n\t\t\theight: 4px;\n\t\t\tbackground: transparent;\n\t\t\tborder-color: transparent;\n\t\t\tcolor: transparent;\n\t\t}\n\n\t\t&::-ms-fill-lower {\n\t\t\tbackground: #007bff;\n\t\t\tborder-radius: 2px;\n\t\t}\n\n\t\t&::-ms-fill-upper {\n\t\t\tbackground: #ffffff;\n\t\t\tborder-radius: 2px;\n\t\t}\n\n\t\t&::-ms-thumb {\n\t\t\twidth: 16px;\n\t\t\theight: 16px;\n\t\t\tbackground: #007bff;\n\t\t\tborder-radius: 50%;\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/fonts.scss":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/fonts.scss ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Thin.ttf */ "./fonts/Roboto-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Light.ttf */ "./fonts/Roboto-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Regular.ttf */ "./fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Medium.ttf */ "./fonts/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Bold.ttf */ "./fonts/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Black.ttf */ "./fonts/Roboto-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Italic.ttf */ "./fonts/Roboto-Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-LightItalic.ttf */ "./fonts/Roboto-LightItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-MediumItalic.ttf */ "./fonts/Roboto-MediumItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-BoldItalic.ttf */ "./fonts/Roboto-BoldItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-BlackItalic.ttf */ "./fonts/Roboto-BlackItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
	font-family: 'Roboto';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
	font-weight: 100;
	font-style: normal;
}

@font-face {
	font-family: 'Roboto';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
	font-weight: 300;
	font-style: normal;
}

@font-face {
	font-family: 'Roboto';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype');
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: 'Roboto';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('truetype');
	font-weight: 500;
	font-style: normal;
}

@font-face {
	font-family: 'Roboto';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('truetype');
	font-weight: 700;
	font-style: normal;
}

@font-face {
	font-family: 'Roboto';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('truetype');
	font-weight: 900;
	font-style: normal;
}

@font-face {
	font-family: 'Roboto';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format('truetype');
	font-weight: 400;
	font-style: italic;
}

@font-face {
	font-family: 'Roboto';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format('truetype');
	font-weight: 300;
	font-style: italic;
}

@font-face {
	font-family: 'Roboto';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_8___}) format('truetype');
	font-weight: 500;
	font-style: italic;
}

@font-face {
	font-family: 'Roboto';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_9___}) format('truetype');
	font-weight: 700;
	font-style: italic;
}

@font-face {
	font-family: 'Roboto';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_10___}) format('truetype');
	font-weight: 900;
	font-style: italic;
}`, "",{"version":3,"sources":["webpack://./styles/fonts.scss"],"names":[],"mappings":"AAAA;CACC,qBAAqB;CACrB,+DAAuD;CACvD,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB,+DAAwD;CACxD,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB,+DAA0D;CAC1D,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB,+DAAyD;CACzD,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB,+DAAuD;CACvD,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB,+DAAwD;CACxD,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB,+DAAyD;CACzD,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB,+DAA8D;CAC9D,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB,+DAA+D;CAC/D,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB,+DAA6D;CAC7D,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB,gEAA8D;CAC9D,gBAAgB;CAChB,kBAAkB;AACnB","sourcesContent":["@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url('../fonts/Roboto-Thin.ttf') format('truetype');\n\tfont-weight: 100;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url('../fonts/Roboto-Light.ttf') format('truetype');\n\tfont-weight: 300;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url('../fonts/Roboto-Regular.ttf') format('truetype');\n\tfont-weight: 400;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url('../fonts/Roboto-Medium.ttf') format('truetype');\n\tfont-weight: 500;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url('../fonts/Roboto-Bold.ttf') format('truetype');\n\tfont-weight: 700;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url('../fonts/Roboto-Black.ttf') format('truetype');\n\tfont-weight: 900;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url('../fonts/Roboto-Italic.ttf') format('truetype');\n\tfont-weight: 400;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url('../fonts/Roboto-LightItalic.ttf') format('truetype');\n\tfont-weight: 300;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url('../fonts/Roboto-MediumItalic.ttf') format('truetype');\n\tfont-weight: 500;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url('../fonts/Roboto-BoldItalic.ttf') format('truetype');\n\tfont-weight: 700;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url('../fonts/Roboto-BlackItalic.ttf') format('truetype');\n\tfont-weight: 900;\n\tfont-style: italic;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/reset.scss":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/reset.scss ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*:before,
*:after {
	box-sizing: border-box;
}

html,
body,
div,
span,
object,
iframe,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
code,
em,
img,
small,
strike,
strong,
sub,
sup,
tt,
b,
u,
i,
ol,
ul,
li,
fieldset,
form,
label,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
main,
canvas,
embed,
footer,
header,
nav,
section,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	text-size-adjust: none;
}

footer,
header,
nav,
section,
main {
	display: block;
}

body {
	line-height: 1;
}

ol,
ul {
	list-style: none;
}

blockquote,
q {
	quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

input {
	-webkit-appearance: none;
	border-radius: 0;
}`, "",{"version":3,"sources":["webpack://./styles/reset.scss"],"names":[],"mappings":"AAAA;;;CAGC,sBAAsB;AACvB;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;CAmDC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;CACxB,kCAAkC;CAClC,mCAAmC;CACnC,sBAAsB;AACvB;;AAEA;;;;;CAKC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;;CAEC,gBAAgB;AACjB;;AAEA;;CAEC,YAAY;AACb;;AAEA;;;;CAIC,WAAW;CACX,aAAa;AACd;;AAEA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;CACC,wBAAwB;CACxB,gBAAgB;AACjB","sourcesContent":["*,\n*:before,\n*:after {\n\tbox-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nfigure,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\ncode,\nem,\nimg,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\nmain,\ncanvas,\nembed,\nfooter,\nheader,\nnav,\nsection,\nvideo {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n\ttext-rendering: optimizeLegibility;\n\t-webkit-font-smoothing: antialiased;\n\ttext-size-adjust: none;\n}\n\nfooter,\nheader,\nnav,\nsection,\nmain {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n}\n\nol,\nul {\n\tlist-style: none;\n}\n\nblockquote,\nq {\n\tquotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n\tcontent: '';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput {\n\t-webkit-appearance: none;\n\tborder-radius: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
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

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
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

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
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

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
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

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
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

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
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

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
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

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
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

/***/ "./assets/summer-bg.jpg":
/*!******************************!*\
  !*** ./assets/summer-bg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a318dfda9223c9b6bcc1.jpg";

/***/ }),

/***/ "./fonts/Roboto-Black.ttf":
/*!********************************!*\
  !*** ./fonts/Roboto-Black.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Roboto-Black.ttf";

/***/ }),

/***/ "./fonts/Roboto-BlackItalic.ttf":
/*!**************************************!*\
  !*** ./fonts/Roboto-BlackItalic.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Roboto-BlackItalic.ttf";

/***/ }),

/***/ "./fonts/Roboto-Bold.ttf":
/*!*******************************!*\
  !*** ./fonts/Roboto-Bold.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Roboto-Bold.ttf";

/***/ }),

/***/ "./fonts/Roboto-BoldItalic.ttf":
/*!*************************************!*\
  !*** ./fonts/Roboto-BoldItalic.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Roboto-BoldItalic.ttf";

/***/ }),

/***/ "./fonts/Roboto-Italic.ttf":
/*!*********************************!*\
  !*** ./fonts/Roboto-Italic.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Roboto-Italic.ttf";

/***/ }),

/***/ "./fonts/Roboto-Light.ttf":
/*!********************************!*\
  !*** ./fonts/Roboto-Light.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Roboto-Light.ttf";

/***/ }),

/***/ "./fonts/Roboto-LightItalic.ttf":
/*!**************************************!*\
  !*** ./fonts/Roboto-LightItalic.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Roboto-LightItalic.ttf";

/***/ }),

/***/ "./fonts/Roboto-Medium.ttf":
/*!*********************************!*\
  !*** ./fonts/Roboto-Medium.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Roboto-Medium.ttf";

/***/ }),

/***/ "./fonts/Roboto-MediumItalic.ttf":
/*!***************************************!*\
  !*** ./fonts/Roboto-MediumItalic.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Roboto-MediumItalic.ttf";

/***/ }),

/***/ "./fonts/Roboto-Regular.ttf":
/*!**********************************!*\
  !*** ./fonts/Roboto-Regular.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Roboto-Regular.ttf";

/***/ }),

/***/ "./fonts/Roboto-Thin.ttf":
/*!*******************************!*\
  !*** ./fonts/Roboto-Thin.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Roboto-Thin.ttf";

/***/ }),

/***/ "./sounds.js":
/*!*******************!*\
  !*** ./sounds.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
	{
		id: 1,
		icon: "./assets/icons/sun.svg",
		background: "./assets/summer-bg.jpg",
		sound: "./assets/sounds/summer.mp3",
	},
	{
		id: 2,
		icon: "./assets/icons/cloud-rain.svg",
		background: "./assets/rainy-bg.jpg",
		sound: "./assets/sounds/rain.mp3",
	},
	{
		id: 3,
		icon: "./assets/icons/cloud-snow.svg",
		background: "./assets/winter-bg.jpg",
		sound: "./assets/sounds/winter.mp3",
	},
]);


/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
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
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _sounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sounds */ "./sounds.js");



// State for tracking playback
let isPlaying = false;
let playingId = null;

function createSoundItem(sound, soundsImageBg, soundOutput) {
	const div = document.createElement("div");
	div.className = "sounds__item";
	div.style.background = `url(${sound.background}) center/cover no-repeat`;

	const img = document.createElement("img");
	img.id = `sounds-item-img-${sound.id}`;
	img.src = sound.icon;
	img.alt = `Sound ${sound.id}`;
	img.className = "sounds__item-icon";

	div.appendChild(img);

	// Handle click to play/pause sound and update background
	div.addEventListener("click", () => {
		// Reset all icons to their default state
		document.querySelectorAll(".sounds__item-icon").forEach((icon, idx) => {
			icon.src = _sounds__WEBPACK_IMPORTED_MODULE_1__["default"][idx].icon;
		});

		// Update background
		soundsImageBg.style.background = `url(${sound.background}) center/cover no-repeat`;

		// Toggle play/pause
		if (isPlaying && playingId === sound.id) {
			img.src = "./assets/icons/pause.svg";
			soundOutput.pause();
			isPlaying = false;
			playingId = null;
		} else {
			img.src = sound.icon;
			soundOutput.src = sound.sound;
			soundOutput.play().catch((error) => {
				console.error("Failed to play sound:", error);
			});
			isPlaying = true;
			playingId = sound.id;
		}
	});

	return div;
}

document.addEventListener("DOMContentLoaded", () => {
	// Query DOM elements once
	const container = document.querySelector("#sounds-container");
	const soundOutput = document.querySelector("#sound-output");
	const soundsImageBg = document.querySelector("#sounds-image-bg");
	const volumeInput = document.querySelector("#volume-input");

	// Validate elements
	if (!container || !soundOutput || !soundsImageBg || !volumeInput) {
		console.error("Required DOM elements not found");
		return;
	}
	if (!_sounds__WEBPACK_IMPORTED_MODULE_1__["default"] || _sounds__WEBPACK_IMPORTED_MODULE_1__["default"].length === 0) {
		console.error("Sounds array is empty or undefined");
		return;
	}

	// Render sound items
	container.innerHTML = "";
	_sounds__WEBPACK_IMPORTED_MODULE_1__["default"].forEach((sound) => {
		container.appendChild(createSoundItem(sound, soundsImageBg, soundOutput));
	});

	// Initialize volume and track fill
	soundOutput.volume = volumeInput.value / 100;
	volumeInput.style.setProperty("--value", volumeInput.value);

	// Volume control
	volumeInput.addEventListener("input", (e) => {
		const value = e.target.value;
		soundOutput.volume = value / 100;
		volumeInput.style.setProperty("--value", value);
	});
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ0M7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUJBQWlCOztBQUVoRDtBQUNBLDZCQUE2QixTQUFTO0FBQ3RDO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLCtDQUFNO0FBQ3BCLEdBQUc7O0FBRUg7QUFDQSwwQ0FBMEMsaUJBQWlCOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrQ0FBTSxJQUFJLCtDQUFNO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQywrQ0FBTTtBQUNQO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2ZvbnRzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3Jlc2V0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc291bmRzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9pbmRleC5zY3NzPzhlYjkiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5zY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9udHMuc2Nzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvc3VtbWVyLWJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCxcbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDBkdmg7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uc291bmRzIHtcbiAgbWluLWhlaWdodDogMTAwZHZoO1xuICBwYWRkaW5nOiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogM3JlbTtcbn1cbi5zb3VuZHNfX3RpdGxlIHtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uc291bmRzX19pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGNlbnRlci9jb3ZlciBuby1yZXBlYXQgZml4ZWQ7XG59XG4uc291bmRzX193cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC43NXJlbTtcbn1cbi5zb3VuZHNfX2l0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICM5ODk4OTg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cbi5zb3VuZHNfX2l0ZW0taWNvbiB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uc291bmRzX19jb250cm9scyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtLXZhbHVlOiA1MDtcbn1cbi5zb3VuZHNfX2NvbnRyb2xzOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDdiZmYgMCUsICMwMDdiZmYgY2FsYyh2YXIoLS12YWx1ZSkgKiAxJSksICNmZmZmZmYgY2FsYyh2YXIoLS12YWx1ZSkgKiAxJSksICNmZmZmZmYgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5zb3VuZHNfX2NvbnRyb2xzOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiAtNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc291bmRzX19jb250cm9sczo6LW1vei1yYW5nZS10cmFjayB7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDdiZmYgMCUsICMwMDdiZmYgY2FsYyh2YXIoLS12YWx1ZSkgKiAxJSksICNmZmZmZmYgY2FsYyh2YXIoLS12YWx1ZSkgKiAxJSksICNmZmZmZmYgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5zb3VuZHNfX2NvbnRyb2xzOjotbW96LXJhbmdlLXRodW1iIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zb3VuZHNfX2NvbnRyb2xzOjotbXMtdHJhY2sge1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5zb3VuZHNfX2NvbnRyb2xzOjotbXMtZmlsbC1sb3dlciB7XG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5zb3VuZHNfX2NvbnRyb2xzOjotbXMtZmlsbC11cHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5zb3VuZHNfX2NvbnRyb2xzOjotbXMtdGh1bWIge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlcy9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOztFQUVDLGtCQUFBO0FBQUQ7O0FBR0E7RUFDQyxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUQ7O0FBR0E7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsU0FBQTtBQUZEO0FBSUM7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtBQUhGO0FBTUM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQUEsVUFBQTtFQUFBLFdBQUE7RUFBQSxTQUFBO0VBRUEsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdGQUFBO0FBTEY7QUFRQztFQUVDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFQRjtBQVVDO0VBQ0MsZUFBQTtFQUVBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHFCQUFBO0VBQUEsdUJBQUE7RUFBQSxxQkFBQTtFQUVBLGFBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0FBWkY7QUFjRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FBWkg7QUFnQkM7RUFDQyxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLHdCQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUVBLFdBQUE7QUFoQkY7QUFrQkU7RUFDQyxXQUFBO0VBQ0EsaUlBQUE7RUFLQSxrQkFBQTtBQXBCSDtBQXVCRTtFQUNDLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFyQkg7QUF3QkU7RUFDQyxXQUFBO0VBQ0EsaUlBQUE7RUFLQSxrQkFBQTtBQTFCSDtBQTZCRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBM0JIO0FBOEJFO0VBQ0MsV0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQTVCSDtBQStCRTtFQUNDLG1CQUFBO0VBQ0Esa0JBQUE7QUE3Qkg7QUFnQ0U7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0FBOUJIO0FBaUNFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQS9CSFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnLi9yZXNldC5zY3NzJyk7XFxuQGltcG9ydCB1cmwoJy4vZm9udHMuc2NzcycpO1xcblxcbmh0bWwsXFxuYm9keSB7XFxuXFx0bWluLWhlaWdodDogMTAwZHZoO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLnNvdW5kcyB7XFxuXFx0bWluLWhlaWdodDogMTAwZHZoO1xcblxcdHBhZGRpbmc6IDQwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdGdhcDogM3JlbTtcXG5cXG5cXHQmX190aXRsZSB7XFxuXFx0XFx0Y29sb3I6IG9yYW5nZTtcXG5cXHRcXHRmb250LXNpemU6IDNyZW07XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXG5cXHR9XFxuXFxuXFx0Jl9faW1hZ2Uge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHR6LWluZGV4OiAtMTtcXG5cXHRcXHRpbnNldDogMHB4O1xcblxcblxcdFxcdGZpbHRlcjogYmx1cig1cHgpO1xcblxcdFxcdC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7XFxuXFx0XFx0YmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvc3VtbWVyLWJnLmpwZycpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQgZml4ZWQ7XFxuXFx0fVxcblxcblxcdCZfX3dyYXBwZXIge1xcblxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0Z2FwOiAwLjc1cmVtO1xcblxcdH1cXG5cXG5cXHQmX19pdGVtIHtcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFxuXFx0XFx0YmFja2dyb3VuZDogIzk4OTg5ODtcXG5cXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRcXHRwYWRkaW5nOiA0cmVtO1xcblxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG5cXG5cXHRcXHQmLWljb24ge1xcblxcdFxcdFxcdHdpZHRoOiAycmVtO1xcblxcdFxcdFxcdGhlaWdodDogYXV0bztcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCZfX2NvbnRyb2xzIHtcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0XFx0d2lkdGg6IDE1MHB4O1xcblxcdFxcdGhlaWdodDogMjBweDtcXG5cXG5cXHRcXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0XFx0YXBwZWFyYW5jZTogbm9uZTtcXG5cXHRcXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFxuXFx0XFx0LS12YWx1ZTogNTA7XFxuXFxuXFx0XFx0Jjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcblxcdFxcdFxcdGhlaWdodDogNHB4O1xcblxcdFxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxcXG5cXHRcXHRcXHRcXHRcXHQjMDA3YmZmIDAlLFxcblxcdFxcdFxcdFxcdFxcdCMwMDdiZmYgY2FsYyh2YXIoLS12YWx1ZSkgKiAxJSksXFxuXFx0XFx0XFx0XFx0XFx0I2ZmZmZmZiBjYWxjKHZhcigtLXZhbHVlKSAqIDElKSxcXG5cXHRcXHRcXHRcXHRcXHQjZmZmZmZmIDEwMCUpO1xcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDJweDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Jjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcblxcdFxcdFxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRcXHRcXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdFxcdFxcdHdpZHRoOiAxNnB4O1xcblxcdFxcdFxcdGhlaWdodDogMTZweDtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiAjMDA3YmZmO1xcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiAtNnB4O1xcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Jjo6LW1vei1yYW5nZS10cmFjayB7XFxuXFx0XFx0XFx0aGVpZ2h0OiA0cHg7XFxuXFx0XFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LFxcblxcdFxcdFxcdFxcdFxcdCMwMDdiZmYgMCUsXFxuXFx0XFx0XFx0XFx0XFx0IzAwN2JmZiBjYWxjKHZhcigtLXZhbHVlKSAqIDElKSxcXG5cXHRcXHRcXHRcXHRcXHQjZmZmZmZmIGNhbGModmFyKC0tdmFsdWUpICogMSUpLFxcblxcdFxcdFxcdFxcdFxcdCNmZmZmZmYgMTAwJSk7XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmOjotbW96LXJhbmdlLXRodW1iIHtcXG5cXHRcXHRcXHR3aWR0aDogMTZweDtcXG5cXHRcXHRcXHRoZWlnaHQ6IDE2cHg7XFxuXFx0XFx0XFx0YmFja2dyb3VuZDogIzAwN2JmZjtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0XFx0XFx0Ym9yZGVyOiBub25lO1xcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Jjo6LW1zLXRyYWNrIHtcXG5cXHRcXHRcXHRoZWlnaHQ6IDRweDtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG5cXHRcXHRcXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdFxcdFxcdGNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Jjo6LW1zLWZpbGwtbG93ZXIge1xcblxcdFxcdFxcdGJhY2tncm91bmQ6ICMwMDdiZmY7XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmOjotbXMtZmlsbC11cHBlciB7XFxuXFx0XFx0XFx0YmFja2dyb3VuZDogI2ZmZmZmZjtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiAycHg7XFxuXFx0XFx0fVxcblxcblxcdFxcdCY6Oi1tcy10aHVtYiB7XFxuXFx0XFx0XFx0d2lkdGg6IDE2cHg7XFxuXFx0XFx0XFx0aGVpZ2h0OiAxNnB4O1xcblxcdFxcdFxcdGJhY2tncm91bmQ6ICMwMDdiZmY7XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1JvYm90by1UaGluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1JvYm90by1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Sb2JvdG8tTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1JvYm90by1CbGFjay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Sb2JvdG8tSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1JvYm90by1MaWdodEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Sb2JvdG8tTWVkaXVtSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1JvYm90by1Cb2xkSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Sb2JvdG8tQmxhY2tJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdGZvbnQtd2VpZ2h0OiAxMDA7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ1JvYm90byc7XG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ1JvYm90byc7XG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ1JvYm90byc7XG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3R5bGVzL2ZvbnRzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxxQkFBcUI7Q0FDckIsK0RBQXVEO0NBQ3ZELGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsK0RBQXdEO0NBQ3hELGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsK0RBQTBEO0NBQzFELGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsK0RBQXlEO0NBQ3pELGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsK0RBQXVEO0NBQ3ZELGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsK0RBQXdEO0NBQ3hELGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsK0RBQXlEO0NBQ3pELGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsK0RBQThEO0NBQzlELGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsK0RBQStEO0NBQy9ELGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsK0RBQTZEO0NBQzdELGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsZ0VBQThEO0NBQzlELGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcblxcdHNyYzogdXJsKCcuLi9mb250cy9Sb2JvdG8tVGhpbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuXFx0Zm9udC13ZWlnaHQ6IDEwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG5cXHRzcmM6IHVybCgnLi4vZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG5cXHRmb250LXdlaWdodDogMzAwO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcblxcdHNyYzogdXJsKCcuLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG5cXHRzcmM6IHVybCgnLi4vZm9udHMvUm9ib3RvLU1lZGl1bS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG5cXHRzcmM6IHVybCgnLi4vZm9udHMvUm9ib3RvLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90byc7XFxuXFx0c3JjOiB1cmwoJy4uL2ZvbnRzL1JvYm90by1CbGFjay50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG5cXHRzcmM6IHVybCgnLi4vZm9udHMvUm9ib3RvLUl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG5cXHRzcmM6IHVybCgnLi4vZm9udHMvUm9ib3RvLUxpZ2h0SXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG5cXHRmb250LXdlaWdodDogMzAwO1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcblxcdHNyYzogdXJsKCcuLi9mb250cy9Sb2JvdG8tTWVkaXVtSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcblxcdHNyYzogdXJsKCcuLi9mb250cy9Sb2JvdG8tQm9sZEl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG5cXHRzcmM6IHVybCgnLi4vZm9udHMvUm9ib3RvLUJsYWNrSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG5cXHRmb250LXdlaWdodDogOTAwO1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxub2JqZWN0LFxuaWZyYW1lLFxuZmlndXJlLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuY29kZSxcbmVtLFxuaW1nLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbmIsXG51LFxuaSxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxubWFpbixcbmNhbnZhcyxcbmVtYmVkLFxuZm9vdGVyLFxuaGVhZGVyLFxubmF2LFxuc2VjdGlvbixcbnZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuXHR0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0dGV4dC1zaXplLWFkanVzdDogbm9uZTtcbn1cblxuZm9vdGVyLFxuaGVhZGVyLFxubmF2LFxuc2VjdGlvbixcbm1haW4ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCxcbnVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSxcbnEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5pbnB1dCB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlcy9yZXNldC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQyxzQkFBc0I7QUFDdkI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW1EQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtDQUN4QixrQ0FBa0M7Q0FDbEMsbUNBQW1DO0NBQ25DLHNCQUFzQjtBQUN2Qjs7QUFFQTs7Ozs7Q0FLQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7O0NBRUMsZ0JBQWdCO0FBQ2pCOztBQUVBOztDQUVDLFlBQVk7QUFDYjs7QUFFQTs7OztDQUlDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLGdCQUFnQjtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmZpZ3VyZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuY29kZSxcXG5lbSxcXG5pbWcsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbmIsXFxudSxcXG5pLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5tYWluLFxcbmNhbnZhcyxcXG5lbWJlZCxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbm5hdixcXG5zZWN0aW9uLFxcbnZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcblxcdHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuXFx0dGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG59XFxuXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5uYXYsXFxuc2VjdGlvbixcXG5tYWluIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IFtcblx0e1xuXHRcdGlkOiAxLFxuXHRcdGljb246IFwiLi9hc3NldHMvaWNvbnMvc3VuLnN2Z1wiLFxuXHRcdGJhY2tncm91bmQ6IFwiLi9hc3NldHMvc3VtbWVyLWJnLmpwZ1wiLFxuXHRcdHNvdW5kOiBcIi4vYXNzZXRzL3NvdW5kcy9zdW1tZXIubXAzXCIsXG5cdH0sXG5cdHtcblx0XHRpZDogMixcblx0XHRpY29uOiBcIi4vYXNzZXRzL2ljb25zL2Nsb3VkLXJhaW4uc3ZnXCIsXG5cdFx0YmFja2dyb3VuZDogXCIuL2Fzc2V0cy9yYWlueS1iZy5qcGdcIixcblx0XHRzb3VuZDogXCIuL2Fzc2V0cy9zb3VuZHMvcmFpbi5tcDNcIixcblx0fSxcblx0e1xuXHRcdGlkOiAzLFxuXHRcdGljb246IFwiLi9hc3NldHMvaWNvbnMvY2xvdWQtc25vdy5zdmdcIixcblx0XHRiYWNrZ3JvdW5kOiBcIi4vYXNzZXRzL3dpbnRlci1iZy5qcGdcIixcblx0XHRzb3VuZDogXCIuL2Fzc2V0cy9zb3VuZHMvd2ludGVyLm1wM1wiLFxuXHR9LFxuXTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHNvdW5kcyBmcm9tIFwiLi9zb3VuZHNcIjtcblxuLy8gU3RhdGUgZm9yIHRyYWNraW5nIHBsYXliYWNrXG5sZXQgaXNQbGF5aW5nID0gZmFsc2U7XG5sZXQgcGxheWluZ0lkID0gbnVsbDtcblxuZnVuY3Rpb24gY3JlYXRlU291bmRJdGVtKHNvdW5kLCBzb3VuZHNJbWFnZUJnLCBzb3VuZE91dHB1dCkge1xuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkaXYuY2xhc3NOYW1lID0gXCJzb3VuZHNfX2l0ZW1cIjtcblx0ZGl2LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7c291bmQuYmFja2dyb3VuZH0pIGNlbnRlci9jb3ZlciBuby1yZXBlYXRgO1xuXG5cdGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGltZy5pZCA9IGBzb3VuZHMtaXRlbS1pbWctJHtzb3VuZC5pZH1gO1xuXHRpbWcuc3JjID0gc291bmQuaWNvbjtcblx0aW1nLmFsdCA9IGBTb3VuZCAke3NvdW5kLmlkfWA7XG5cdGltZy5jbGFzc05hbWUgPSBcInNvdW5kc19faXRlbS1pY29uXCI7XG5cblx0ZGl2LmFwcGVuZENoaWxkKGltZyk7XG5cblx0Ly8gSGFuZGxlIGNsaWNrIHRvIHBsYXkvcGF1c2Ugc291bmQgYW5kIHVwZGF0ZSBiYWNrZ3JvdW5kXG5cdGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdC8vIFJlc2V0IGFsbCBpY29ucyB0byB0aGVpciBkZWZhdWx0IHN0YXRlXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zb3VuZHNfX2l0ZW0taWNvblwiKS5mb3JFYWNoKChpY29uLCBpZHgpID0+IHtcblx0XHRcdGljb24uc3JjID0gc291bmRzW2lkeF0uaWNvbjtcblx0XHR9KTtcblxuXHRcdC8vIFVwZGF0ZSBiYWNrZ3JvdW5kXG5cdFx0c291bmRzSW1hZ2VCZy5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke3NvdW5kLmJhY2tncm91bmR9KSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0YDtcblxuXHRcdC8vIFRvZ2dsZSBwbGF5L3BhdXNlXG5cdFx0aWYgKGlzUGxheWluZyAmJiBwbGF5aW5nSWQgPT09IHNvdW5kLmlkKSB7XG5cdFx0XHRpbWcuc3JjID0gXCIuL2Fzc2V0cy9pY29ucy9wYXVzZS5zdmdcIjtcblx0XHRcdHNvdW5kT3V0cHV0LnBhdXNlKCk7XG5cdFx0XHRpc1BsYXlpbmcgPSBmYWxzZTtcblx0XHRcdHBsYXlpbmdJZCA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGltZy5zcmMgPSBzb3VuZC5pY29uO1xuXHRcdFx0c291bmRPdXRwdXQuc3JjID0gc291bmQuc291bmQ7XG5cdFx0XHRzb3VuZE91dHB1dC5wbGF5KCkuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcGxheSBzb3VuZDpcIiwgZXJyb3IpO1xuXHRcdFx0fSk7XG5cdFx0XHRpc1BsYXlpbmcgPSB0cnVlO1xuXHRcdFx0cGxheWluZ0lkID0gc291bmQuaWQ7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gZGl2O1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cdC8vIFF1ZXJ5IERPTSBlbGVtZW50cyBvbmNlXG5cdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc291bmRzLWNvbnRhaW5lclwiKTtcblx0Y29uc3Qgc291bmRPdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NvdW5kLW91dHB1dFwiKTtcblx0Y29uc3Qgc291bmRzSW1hZ2VCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc291bmRzLWltYWdlLWJnXCIpO1xuXHRjb25zdCB2b2x1bWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdm9sdW1lLWlucHV0XCIpO1xuXG5cdC8vIFZhbGlkYXRlIGVsZW1lbnRzXG5cdGlmICghY29udGFpbmVyIHx8ICFzb3VuZE91dHB1dCB8fCAhc291bmRzSW1hZ2VCZyB8fCAhdm9sdW1lSW5wdXQpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiUmVxdWlyZWQgRE9NIGVsZW1lbnRzIG5vdCBmb3VuZFwiKTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKCFzb3VuZHMgfHwgc291bmRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJTb3VuZHMgYXJyYXkgaXMgZW1wdHkgb3IgdW5kZWZpbmVkXCIpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFJlbmRlciBzb3VuZCBpdGVtc1xuXHRjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblx0c291bmRzLmZvckVhY2goKHNvdW5kKSA9PiB7XG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNvdW5kSXRlbShzb3VuZCwgc291bmRzSW1hZ2VCZywgc291bmRPdXRwdXQpKTtcblx0fSk7XG5cblx0Ly8gSW5pdGlhbGl6ZSB2b2x1bWUgYW5kIHRyYWNrIGZpbGxcblx0c291bmRPdXRwdXQudm9sdW1lID0gdm9sdW1lSW5wdXQudmFsdWUgLyAxMDA7XG5cdHZvbHVtZUlucHV0LnN0eWxlLnNldFByb3BlcnR5KFwiLS12YWx1ZVwiLCB2b2x1bWVJbnB1dC52YWx1ZSk7XG5cblx0Ly8gVm9sdW1lIGNvbnRyb2xcblx0dm9sdW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG5cdFx0Y29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblx0XHRzb3VuZE91dHB1dC52b2x1bWUgPSB2YWx1ZSAvIDEwMDtcblx0XHR2b2x1bWVJbnB1dC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdmFsdWVcIiwgdmFsdWUpO1xuXHR9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9