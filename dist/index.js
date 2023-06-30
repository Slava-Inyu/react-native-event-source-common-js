"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _EventSource = _interopRequireDefault(require("./EventSource"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // @ts-nocheck
var RNEventSource = /*#__PURE__*/function () {
  function RNEventSource(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, RNEventSource);
    this.url = url;
    this.options = options;
    this.eventSource = new _EventSource["default"](url, options);
    this.listeners = [];
  }
  _createClass(RNEventSource, [{
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      var _this = this;
      this.eventSource.addEventListener(type, listener);
      var remove = function remove() {
        _this.removeListener(type, listener);
      };
      this.listeners.push({
        remove: remove,
        type: type,
        listener: listener
      });
      return this.listeners[this.listeners.length - 1];
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      this.listeners.map(function (listener) {
        listener.remove();
      });
    }
  }, {
    key: "removeListener",
    value: function removeListener(type, listener) {
      this.eventSource.removeEventListener(type, listener);
    }
  }, {
    key: "close",
    value: function close() {
      this.eventSource.close();
    }
  }]);
  return RNEventSource;
}();
var _default = RNEventSource;
exports["default"] = _default;