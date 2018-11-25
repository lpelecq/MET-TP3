"use strict";
exports.__esModule = true;
var ToLowerCaseInductif = /** @class */ (function () {
    function ToLowerCaseInductif() {
    }
    ToLowerCaseInductif.prototype.casVide = function () {
        return "";
    };
    ToLowerCaseInductif.prototype.casCaractereMot = function (c, m) {
        return c.toLowerCase() + m;
    };
    return ToLowerCaseInductif;
}());
exports.ToLowerCaseInductif = ToLowerCaseInductif;
