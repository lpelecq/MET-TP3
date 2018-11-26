import {CaractereMotInductif} from "./CaractereMotInductif";
import {MotMotInductif} from "./MotMotInductif";
import {Mot} from "../Interface/Mot";

export class MotVideInductif extends Mot {

    public static SINGLETON: MotVideInductif = new MotVideInductif();

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
