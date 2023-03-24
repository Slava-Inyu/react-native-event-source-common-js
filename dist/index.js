"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var EventSource_1 = require("./EventSource");
var RNEventSource = /** @class */ (function () {
    function RNEventSource(url, options) {
        if (options === void 0) { options = {}; }
        this.url = url;
        this.options = options;
        this.eventSource = new EventSource_1.default(url, options);
        this.listeners = [];
    }
    RNEventSource.prototype.addEventListener = function (type, listener) {
        var _this = this;
        this.eventSource.addEventListener(type, listener);
        var remove = function () {
            _this.removeListener(type, listener);
        };
        this.listeners.push({
            remove: remove,
            type: type,
            listener: listener,
        });
        return this.listeners[this.listeners.length - 1];
    };
    RNEventSource.prototype.removeAllListeners = function () {
        this.listeners.map(function (listener) {
            listener.remove();
        });
    };
    RNEventSource.prototype.removeListener = function (type, listener) {
        this.eventSource.removeEventListener(type, listener);
    };
    RNEventSource.prototype.close = function () {
        this.eventSource.close();
    };
    return RNEventSource;
}());
exports.default = RNEventSource;
