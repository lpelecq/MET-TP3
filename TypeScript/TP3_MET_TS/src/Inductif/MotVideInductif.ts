import Mot from "../Interface/Mot";
import {CaractereMotInductif} from "./CaractereMotInductif";
import {MotMotInductif} from "./MotMotInductif";

export class MotVideInductif extends Mot {

    static SINGLETON: any;

    public casVide(): boolean {
        return true;
    }

    public creerCaractereMot(c: string): Mot {
        return new CaractereMotInductif(c, this);
    }

    public creerMotMot(droite: Mot): Mot {
        return new MotMotInductif(this, droite);
    }

    public creerMotVide(): Mot {
        return MotVideInductif.SINGLETON;
    }
}
