import {IterateurMot} from "../Interface/IterateurMot";
import Mot from "../Interface/Mot";
import {MotMotInductif} from "../Inductif/MotMotInductif";

export class IterateurMotiteratif implements IterateurMot {


    private _reste: Mot;
    private caractere: string;

    public constructor(m: Mot) {
        this.decomposer(m);
    }

    public reste(): Mot {
        return this._reste;
    }

    public hasNext(): boolean {
        return this._reste != null;
    }

    public next(): string {
        if (this._reste == null)
            throw new Error("Erreur");
        let r: string = this.caractere;
        this.decomposer(this._reste);
        return r;
    }

    private decomposer(m: Mot) {
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
                } else if (m.getMotDroite().casCaractereMot()) {
                    this._reste = new MotMotInductif(m.getMotGauche().reste(), m.getMotDroite());
                    this.caractere = m.getMotGauche().caractere();
                    break;
                } else {
                    //m = new MotMotInductif(m.getMotGauche().getMotGauche(),new MotMotInductif(m.getMotGauche().getMotDroite(),m.getMotDroite()));
                    m = m.getMotGauche().getMotGauche().creerMotMot(m.getMotGauche().getMotDroite().creerMotMot(m.getMotDroite()));
                    continue;
                }
            }
        }
    }
}
