"use strict";
exports.__esModule = true;
var MotMotInductif_1 = require("./MotMotInductif");
var MotVideInductif_1 = require("./MotVideInductif");
var IterateurMotInductif = /** @class */ (function () {
    function IterateurMotInductif(m) {
        this.m = m;
    }
    IterateurMotInductif.prototype.reste = function () {
        if (!this.m.getMotGauche().casVide())
            return new MotMotInductif_1.MotMotInductif(this.m.getMotGauche().reste(), this.m.getMotDroite());
        if (!this.m.getMotDroite().casVide())
            return this.m.getMotDroite().reste();
        throw new Error("Erreur");
    };
    IterateurMotInductif.prototype.hasNext = function () {
        return !this.m.casVide();
    };
    IterateurMotInductif.prototype.next = function () {
        var c;
        if (this.m.casCaractereMot()) {
            c = this.m.caractere();
            this.m = MotVideInductif_1.MotVideInductif.SINGLETON;
            return c;
        }
        if (this.m.casMotMot()) {
            if (!this.m.getMotGauche().casVide()) {
                c = this.m.getMotGauche().caractere();
                this.m = this.m.getMotGauche();
                return c;
            }
            if (!this.m.getMotDroite().casVide()) {
                c = this.m.getMotDroite().caractere();
                this.m = this.m.getMotDroite();
                return c;
            }
        }
        throw new Error("Erreur");
    };
    return IterateurMotInductif;
}());
exports.IterateurMotInductif = IterateurMotInductif;
