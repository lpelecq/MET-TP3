"use strict";
exports.__esModule = true;
var IterateurMotInductif_1 = require("../Inductif/IterateurMotInductif");
var IterateurMotiteratif_1 = require("../Iteratif/IterateurMotiteratif");
var Mot = /** @class */ (function () {
    function Mot() {
    }
    // Sélecteurs
    Mot.prototype.casVide = function () {
        return false;
    };
    Mot.prototype.casCaractereMot = function () {
        return false;
    };
    Mot.prototype.casMotMot = function () {
        return false;
    };
    Mot.prototype.caractere = function () {
        throw new Error();
    };
    Mot.prototype.reste = function () {
        throw new Error();
    };
    Mot.prototype.getMotGauche = function () {
        throw new Error("Erreur");
    };
    Mot.prototype.getMotDroite = function () {
        throw new Error("Erreur");
    };
    Mot.prototype.iterateurInductif = function () {
        return new IterateurMotInductif_1.IterateurMotInductif(this);
    };
    Mot.prototype.iterateurIteratif = function () {
        return new IterateurMotiteratif_1.IterateurMotiteratif(this);
    };
    Mot.prototype.iterator = function () {
        return this.iterateurIteratif();
    };
    // Visiteur itératif (programmé récursivement puis itérativement)
    Mot.prototype.accueilRecursif = function (v) {
        if (this.casVide()) {
            return v.casVide();
        }
        return v.casCaractereMot(this.caractere(), this.reste().accueilRecursif(v));
    };
    Mot.prototype.accueil = function (v) {
        var r = v.casVide();
        for (var x in this) {
            r = v.casCaractereMot(x, r);
        }
        return r;
    };
    // Visiteur récursif primitif analogue du filtrage par cas (pattern matching),
    // programmé récursivement
    Mot.prototype.filtrageRécursif = function (casVide, casCaractereMot) {
        if (this.casVide()) {
            return casVide.apply;
        }
        return casCaractereMot.apply(this.caractere(), this.reste());
    };
    // Visiteur récursif primitif analogue du filtrage par cas (pattern matching),
    // programmé récursivement
    Mot.prototype.filtrage = function (casVide, casCaractereMot) {
        var r = casVide();
        var arg = this.creerMotVide();
        var courant = this;
        while (!courant.casVide()) {
            var e = courant.caractere();
            r = casCaractereMot(e, arg)(r);
            arg = arg.creerCaractereMot(e);
            courant = courant.reste();
        }
        return r;
    };
    return Mot;
}());
exports.Mot = Mot;
