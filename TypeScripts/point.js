"use strict";
exports.__esModule = true;
//Module example
var PointerModule = /** @class */ (function () {
    function PointerModule(x, y) {
        this.x = x;
        //automatically initializes. So there is no need for this and initialize it again
    }
    Object.defineProperty(PointerModule.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new console.error('Value cannot be less that 0');
            else
                this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    return PointerModule;
}());
exports.PointerModule = PointerModule;
