import {IterateurMot} from "../Interface/IterateurMot";
import {MotVideInductif} from "./MotVideInductif";
import {CaractereMotInductif} from "./CaractereMotInductif";
import {Mot} from "../Interface/Mot";

export class MotMotInductif extends Mot {

    public FAB: Mot = MotVideInductif.SINGLETON;

    private gauche: Mot;
    private droite: Mot;

    public constructor(gauche: Mot, droite: Mot) {
        super();
        this.gauche = gauche;
        this.droite = droite;
    }

    public creerMotVide(): Mot {
        return MotVideInductif.SINGLETON;
    }

    public casMotMot(): boolean {
        return true;
    }

    public caractere(): string {
        let i: IterateurMot = this.iterateurInductif();
        return i.next();
    }

    public reste(): Mot {
        let i: IterateurMot = this.iterateurInductif();
        return i.reste();
    }

    public getMotGauche(): Mot {
        return this.gauche;
    }

    public getMotDroite(): Mot {
        return this.droite;
    }

    public creerCaractereMot(c: string): Mot {
        return new CaractereMotInductif(c, this);
    }

    public creerMotMot(droite: Mot): Mot {
        return new MotMotInductif(this, droite);
    }
}
