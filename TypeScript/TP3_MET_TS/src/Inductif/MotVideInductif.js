"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Mot_1 = require("../Interface/Mot");
var CaractereMotInductif_1 = require("./CaractereMotInductif");
var MotMotInductif_1 = require("./MotMotInductif");
var MotVideInductif = /** @class */ (function (_super) {
    __extends(MotVideInductif, _super);
    function MotVideInductif() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotVideInductif.prototype.casVide = function () {
        return true;
    };
    MotVideInductif.prototype.creerCaractereMot = function (c) {
        return new CaractereMotInductif_1.CaractereMotInductif(c, this);
    };
    MotVideInductif.prototype.creerMotMot = function (droite) {
        return new MotMotInductif_1.MotMotInductif(this, droite);
    };
    MotVideInductif.prototype.creerMotVide = function () {
        return MotVideInductif.SINGLETON;
    };
    return MotVideInductif;
}(Mot_1["default"]));
exports.MotVideInductif = MotVideInductif;
