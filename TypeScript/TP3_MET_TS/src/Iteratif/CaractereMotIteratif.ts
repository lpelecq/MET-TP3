
import {MotMotIteratif} from "./MotMotIteratif";
import {MotVideIteratif} from "./MotVideIteratif";
import {Mot} from "../Interface/Mot";

export class CaractereMotIteratif extends Mot {

    public static FAB: Mot = MotVideIteratif.SINGLETON;

    private _caractere: string;
    private motDroite: Mot;

    public constructor(caractere: string, motDroite: Mot) {
        super();
        this._caractere = caractere;
        this.motDroite = motDroite;
    }

    public caractere(): string {
        return this._caractere;
    }

    public getMotDroite(): Mot {
        return this.motDroite;
    }

    public reste(): Mot {
        return this.motDroite;
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

    public casCaractereMot(): boolean {
        return true;
    }
}
