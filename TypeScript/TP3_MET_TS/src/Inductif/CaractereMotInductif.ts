import Mot from "../Interface/Mot";
import {MotVideInductif} from "./MotVideInductif";
import {MotMotInductif} from "./MotMotInductif";


export class CaractereMotInductif extends Mot {

    public static FAB: Mot = MotVideInductif.SINGLETON;

    private _caractere: string;
    private _reste: Mot;

    public constructor(caractere: string, reste: Mot) {
        super();
        this._caractere = caractere;
        this._reste = reste;
    }

    public caractere(): string {
        return this._caractere;
    }

    public reste(): Mot {
        return this._reste;
    }

    public creerMotVide(): Mot {
        return MotVideInductif.SINGLETON;
    }

    public creerCaractereMot(c: string): Mot {
        return new CaractereMotInductif(c, this);
    }

    public creerMotMot(droite: Mot): Mot {
        return new MotMotInductif(this, droite);
    }


    public casCaractereMot(): boolean {
        return true;
    }

}
