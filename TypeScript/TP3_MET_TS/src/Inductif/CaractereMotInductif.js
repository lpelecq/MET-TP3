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
var MotVideInductif_1 = require("./MotVideInductif");
var MotMotInductif_1 = require("./MotMotInductif");
var Mot_1 = require("../Interface/Mot");
var CaractereMotInductif = /** @class */ (function (_super) {
    __extends(CaractereMotInductif, _super);
    function CaractereMotInductif(caractere, reste) {
        var _this = _super.call(this) || this;
        _this._caractere = caractere;
        _this._reste = reste;
        return _this;
    }
    CaractereMotInductif.prototype.caractere = function () {
        return this._caractere;
    };
    CaractereMotInductif.prototype.reste = function () {
        return this._reste;
    };
    CaractereMotInductif.prototype.creerMotVide = function () {
        return MotVideInductif_1.MotVideInductif.SINGLETON;
    };
    CaractereMotInductif.prototype.creerCaractereMot = function (c) {
        return new CaractereMotInductif(c, this);
    };
    CaractereMotInductif.prototype.creerMotMot = function (droite) {
        return new MotMotInductif_1.MotMotInductif(this, droite);
    };
    CaractereMotInductif.prototype.casCaractereMot = function () {
        return true;
    };
    CaractereMotInductif.FAB = MotVideInductif_1.MotVideInductif.SINGLETON;
    return CaractereMotInductif;
}(Mot_1.Mot));
exports.CaractereMotInductif = CaractereMotInductif;
