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
var CaractereMotInductif_1 = require("./CaractereMotInductif");
var Mot_1 = require("../Interface/Mot");
var MotMotInductif = /** @class */ (function (_super) {
    __extends(MotMotInductif, _super);
    function MotMotInductif(gauche, droite) {
        var _this = _super.call(this) || this;
        _this.FAB = MotVideInductif_1.MotVideInductif.SINGLETON;
        _this.gauche = gauche;
        _this.droite = droite;
        return _this;
    }
    MotMotInductif.prototype.creerMotVide = function () {
        return MotVideInductif_1.MotVideInductif.SINGLETON;
    };
    MotMotInductif.prototype.casMotMot = function () {
        return true;
    };
    MotMotInductif.prototype.caractere = function () {
        var i = this.iterateurInductif();
        return i.next();
    };
    MotMotInductif.prototype.reste = function () {
        var i = this.iterateurInductif();
        return i.reste();
    };
    MotMotInductif.prototype.getMotGauche = function () {
        return this.gauche;
    };
    MotMotInductif.prototype.getMotDroite = function () {
        return this.droite;
    };
    MotMotInductif.prototype.creerCaractereMot = function (c) {
        return new CaractereMotInductif_1.CaractereMotInductif(c, this);
    };
    MotMotInductif.prototype.creerMotMot = function (droite) {
        return new MotMotInductif(this, droite);
    };
    return MotMotInductif;
}(Mot_1.Mot));
exports.MotMotInductif = MotMotInductif;
