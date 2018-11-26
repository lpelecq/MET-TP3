
import {MotVideIteratif} from "./MotVideIteratif";
import {CaractereMotIteratif} from "./CaractereMotIteratif";
import {Mot} from "../Interface/Mot";

export class MotMotIteratif extends Mot {

    public static FAB: Mot = MotVideIteratif.SINGLETON;

    private gauche: Mot;
    private droite: Mot;

    public constructor(gauche: Mot, droite: Mot) {
        super();
        this.gauche = gauche;
        this.droite = droite;
    }


    public caractere(): string {
        if (!this.gauche.casVide()) {
            return this.gauche.caractere();
        }
        if (!this.droite.casVide()) {
            return this.droite.caractere();
        }
        throw new Error("Erreur");
    }

    public reste(): Mot {
        if (!this.gauche.casVide()) {
            return this.gauche.reste().creerMotMot(this.droite);
        }
        if (!this.droite.casVide()) {
            return this.droite.reste();
        }
        throw new Error("Erreur");
    }

    public casMotMot(): boolean {
        return true;
    }

    public getMotGauche(): Mot {
        return this.gauche;
    }

    public getMotDroite(): Mot {
        return this.droite;
    }

    public creerMotVide(): Mot {
        return MotVideIteratif.SINGLETON;
    }

    public creerCaractereMot(c: string): Mot {
        return new CaractereMotIteratif(c, this);
    }

    public creerMotMot(droite: Mot): Mot {
        return new MotMotIteratif(this, droite);
    }
}
