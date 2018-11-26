import {IterateurMot} from "../Interface/IterateurMot";
import {MotMotInductif} from "./MotMotInductif";
import {MotVideInductif} from "./MotVideInductif";
import {Mot} from "../Interface/Mot";

export class IterateurMotInductif implements IterateurMot {

    private m: Mot;

    public constructor(m: Mot) {
        this.m = m;
    }

    public reste(): Mot {
        if (!this.m.getMotGauche().casVide())
            return new MotMotInductif(this.m.getMotGauche().reste(), this.m.getMotDroite());
        if (!this.m.getMotDroite().casVide())
            return this.m.getMotDroite().reste();
        throw new Error("Erreur");
    }

    public hasNext(): boolean {
        return !this.m.casVide();

    }


    public next(): string {
        let c: string;
        if (this.m.casCaractereMot()) {
            c = this.m.caractere();
            this.m = MotVideInductif.SINGLETON;
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
    }
}
