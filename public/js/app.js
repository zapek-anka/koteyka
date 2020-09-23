/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Koteyka = /*#__PURE__*/function () {
  function Koteyka() {
    var _this = this;

    _classCallCheck(this, Koteyka);

    this.cards = _toConsumableArray(document.querySelectorAll('.js-card'));
    this.applyBtn = document.querySelector('.js-apply');
    this.dropBtn = document.querySelector('.js-drop');
    this.applyBtn.addEventListener('click', this.applyFilters.bind(this));
    this.dropBtn.addEventListener('click', this.dropFilters.bind(this));
    this.sortingProps = _toConsumableArray(document.querySelectorAll('.js-sort'));
    this.sortingProps.forEach(function (prop) {
      return prop.addEventListener('click', _this.sortCards.bind(_this));
    }); // console.log(this.cards);
  }

  _createClass(Koteyka, [{
    key: "applyFilters",
    value: function applyFilters() {
      var _this2 = this;

      this.fromCost = document.querySelector('.js-from').value;
      this.toCost = document.querySelector('.js-to').value;
      var costed = [];
      var sized = [];
      var complected = [];
      this.areas = _toConsumableArray(document.querySelectorAll('.js-area:checked'));
      this.items = _toConsumableArray(document.querySelectorAll('.js-item:checked'));
      this.cards.forEach(function (card) {
        card.classList.remove('m-hidden');

        if (card.dataset.cost >= parseInt(_this2.fromCost) && card.dataset.cost <= parseInt(_this2.toCost)) {
          costed.push(card);
        } // else {
        //     card.classList.add('m-hidden');
        // }

      });
      costed.forEach(function (card) {
        _this2.areas.forEach(function (item) {
          if (card.dataset.area == item.value) {
            sized.push(card); // card.classList.remove('m-hidden');
          }
        });
      });
      console.log(sized);
      sized.forEach(function (card) {
        _this2.items.forEach(function (item) {
          if (card.dataset.area == item.value) {
            complected.push(card);
          }
        });
      });
    }
  }, {
    key: "dropFilters",
    value: function dropFilters() {
      this.fromCost = '';
      this.toCost = '';
      console.log(this.fromCost);
      this.dropBtn.classList.add('m-hidden');
    }
  }, {
    key: "sortCards",
    value: function sortCards(evt) {
      switch (evt.target.dataset.sort) {
        case 'cost-up':
          this.cards.sort(function (a, b) {
            if (a.dataset.cost > b.dataset.cost) {
              return 1;
            }

            if (a.dataset.cost < b.dataset.cost) {
              return -1;
            }

            return 0;
          });
          break;

        case 'cost-down':
          this.cards.sort(function (a, b) {
            if (a.dataset.cost < b.dataset.cost) {
              return 1;
            }

            if (a.dataset.cost > b.dataset.cost) {
              return -1;
            }

            return 0;
          });
          break;

        case 'area-up':
          this.cards.sort(function (a, b) {
            if (a.dataset.area > b.dataset.area) {
              return 1;
            }

            if (a.dataset.area < b.dataset.area) {
              return -1;
            }

            return 0;
          });
          break;

        case 'area-down':
          this.cards.sort(function (a, b) {
            if (a.dataset.area < b.dataset.area) {
              return 1;
            }

            if (a.dataset.area > b.dataset.area) {
              return -1;
            }

            return 0;
          });
          break;

        default:
          this.cards.sort(function (a, b) {
            if (a.dataset.cost > b.dataset.cost) {
              return 1;
            }

            if (a.dataset.cost < b.dataset.cost) {
              return -1;
            }

            return 0;
          });
          break;
      }

      console.log(this.cards); // let cardsWrap = document.querySelector('.js-content');
      // cardsWrap.innerHTML = '';
      // this.cards.forEach((card) => {
      //     cardsWrap.insertAdjacentHTML('beforeend', card);
      // })
    }
  }]);

  return Koteyka;
}();

new Koteyka();

/***/ }),

/***/ "./resources/scss/style.scss":
/*!***********************************!*\
  !*** ./resources/scss/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/scss/style.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/koteyka/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /var/www/koteyka/resources/scss/style.scss */"./resources/scss/style.scss");


/***/ })

/******/ });