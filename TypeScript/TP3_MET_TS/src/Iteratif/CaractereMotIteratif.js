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
var MotMotIteratif_1 = require("./MotMotIteratif");
var MotVideIteratif_1 = require("./MotVideIteratif");
var Mot_1 = require("../Interface/Mot");
var CaractereMotIteratif = /** @class */ (function (_super) {
    __extends(CaractereMotIteratif, _super);
    function CaractereMotIteratif(caractere, motDroite) {
        var _this = _super.call(this) || this;
        _this._caractere = caractere;
        _this.motDroite = motDroite;
        return _this;
    }
    CaractereMotIteratif.prototype.caractere = function () {
        return this._caractere;
    };
    CaractereMotIteratif.prototype.getMotDroite = function () {
        return this.motDroite;
    };
    CaractereMotIteratif.prototype.reste = function () {
        return this.motDroite;
    };
    CaractereMotIteratif.prototype.creerMotVide = function () {
        return MotVideIteratif_1.MotVideIteratif.SINGLETON;
    };
    CaractereMotIteratif.prototype.creerCaractereMot = function (c) {
        return new CaractereMotIteratif(c, this);
    };
    CaractereMotIteratif.prototype.creerMotMot = function (droite) {
        return new MotMotIteratif_1.MotMotIteratif(this, droite);
    };
    CaractereMotIteratif.prototype.casCaractereMot = function () {
        return true;
    };
    CaractereMotIteratif.FAB = MotVideIteratif_1.MotVideIteratif.SINGLETON;
    return CaractereMotIteratif;
}(Mot_1.Mot));
exports.CaractereMotIteratif = CaractereMotIteratif;
