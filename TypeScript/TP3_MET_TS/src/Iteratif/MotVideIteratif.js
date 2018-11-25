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
var CaractereMotIteratif_1 = require("./CaractereMotIteratif");
var MotMotIteratif_1 = require("./MotMotIteratif");
var MotVideIteratif = /** @class */ (function (_super) {
    __extends(MotVideIteratif, _super);
    function MotVideIteratif() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotVideIteratif.prototype.casVide = function () {
        return true;
    };
    MotVideIteratif.prototype.iterator = function () {
        return this.iterateurIteratif();
    };
    MotVideIteratif.prototype.creerMotVide = function () {
        return MotVideIteratif.SINGLETON;
    };
    MotVideIteratif.prototype.creerCaractereMot = function (c) {
        return new CaractereMotIteratif_1.CaractereMotIteratif(c, this);
    };
    MotVideIteratif.prototype.creerMotMot = function (droite) {
        return new MotMotIteratif_1.MotMotIteratif(this, droite);
    };
    return MotVideIteratif;
}(Mot_1["default"]));
exports.MotVideIteratif = MotVideIteratif;
