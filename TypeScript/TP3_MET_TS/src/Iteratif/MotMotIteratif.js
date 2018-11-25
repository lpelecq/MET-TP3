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
var MotVideIteratif_1 = require("./MotVideIteratif");
var CaractereMotIteratif_1 = require("./CaractereMotIteratif");
var MotMotIteratif = /** @class */ (function (_super) {
    __extends(MotMotIteratif, _super);
    function MotMotIteratif(gauche, droite) {
        var _this = _super.call(this) || this;
        _this.gauche = gauche;
        _this.droite = droite;
        return _this;
    }
    MotMotIteratif.prototype.caractere = function () {
        if (!this.gauche.casVide()) {
            return this.gauche.caractere();
        }
        if (!this.droite.casVide()) {
            return this.droite.caractere();
        }
        throw new Error("Erreur");
    };
    MotMotIteratif.prototype.reste = function () {
        if (!this.gauche.casVide()) {
            return this.gauche.reste().creerMotMot(this.droite);
        }
        if (!this.droite.casVide()) {
            return this.droite.reste();
        }
        throw new Error("Erreur");
    };
    MotMotIteratif.prototype.casMotMot = function () {
        return true;
    };
    MotMotIteratif.prototype.getMotGauche = function () {
        return this.gauche;
    };
    MotMotIteratif.prototype.getMotDroite = function () {
        return this.droite;
    };
    MotMotIteratif.prototype.creerMotVide = function () {
        return MotVideIteratif_1.MotVideIteratif.SINGLETON;
    };
    MotMotIteratif.prototype.creerCaractereMot = function (c) {
        return new CaractereMotIteratif_1.CaractereMotIteratif(c, this);
    };
    MotMotIteratif.prototype.creerMotMot = function (droite) {
        return new MotMotIteratif(this, droite);
    };
    MotMotIteratif.FAB = MotVideIteratif_1.MotVideIteratif.SINGLETON;
    return MotMotIteratif;
}(Mot_1["default"]));
exports.MotMotIteratif = MotMotIteratif;
