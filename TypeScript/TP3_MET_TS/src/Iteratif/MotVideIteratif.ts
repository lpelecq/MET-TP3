import Mot from "../Interface/Mot";
import {CaractereMotIteratif} from "./CaractereMotIteratif";
import {MotMotIteratif} from "./MotMotIteratif";

export class MotVideIteratif extends Mot {

    static SINGLETON: any;

    public casVide(): boolean {
        return true;
    }

    public iterator(): Iterator<string> {
        return this.iterateurIteratif();
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
