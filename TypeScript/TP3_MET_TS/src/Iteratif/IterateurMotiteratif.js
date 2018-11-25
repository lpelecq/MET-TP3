"use strict";
exports.__esModule = true;
var MotMotInductif_1 = require("../Inductif/MotMotInductif");
var IterateurMotiteratif = /** @class */ (function () {
    function IterateurMotiteratif(m) {
        this.decomposer(m);
    }
    IterateurMotiteratif.prototype.reste = function () {
        return this._reste;
    };
    IterateurMotiteratif.prototype.hasNext = function () {
        return this._reste != null;
    };
    IterateurMotiteratif.prototype.next = function () {
        if (this._reste == null)
            throw new Error("Erreur");
        var r = this.caractere;
        this.decomposer(this._reste);
        return r;
    };
    IterateurMotiteratif.prototype.decomposer = function (m) {
        while (true) {
            if (m.casVide()) {
                this.reste = null;
                break;
            }
            if (m.casCaractereMot()) {
                this._reste = m.reste();
                this.caractere = m.caractere();
                break;
            }
            if (m.casMotMot()) {
                if (m.getMotGauche().casVide()) {
                    m = m.getMotDroite();
                    continue;
                }
                else if (m.getMotDroite().casCaractereMot()) {
                    this._reste = new MotMotInductif_1.MotMotInductif(m.getMotGauche().reste(), m.getMotDroite());
                    this.caractere = m.getMotGauche().caractere();
                    break;
                }
                else {
                    //m = new MotMotInductif(m.getMotGauche().getMotGauche(),new MotMotInductif(m.getMotGauche().getMotDroite(),m.getMotDroite()));
                    m = m.getMotGauche().getMotGauche().creerMotMot(m.getMotGauche().getMotDroite().creerMotMot(m.getMotDroite()));
                    continue;
                }
            }
        }
    };
    return IterateurMotiteratif;
}());
exports.IterateurMotiteratif = IterateurMotiteratif;
