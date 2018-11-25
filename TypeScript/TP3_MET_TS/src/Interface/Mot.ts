import {IterateurMot} from "./IterateurMot";
import {VisiteurMot} from "./VisiteurMot";
import {IterateurMotInductif} from "../Inductif/IterateurMotInductif";
import {IterateurMotiteratif} from "../Iteratif/IterateurMotiteratif";

export default abstract class Mot implements Iterable<string> {

    // Sélecteurs
    casVide(): boolean {
        return false;
    }

    casCaractereMot(): boolean {
        return false;
    }

    casMotMot(): boolean {
        return false;
    }

    caractere(): string {
        throw new Error();
    }

    reste(): Mot {
        throw new Error();
    }

    getMotGauche(): Mot {
        throw new Error("Erreur");
    }

    getMotDroite(): Mot {
        throw new Error("Erreur");
    }

    abstract creerMotVide(): Mot;

    abstract creerCaractereMot(c: string): Mot;

    abstract creerMotMot(droite: Mot): Mot;

    iterateurInductif(): IterateurMot {
        return new IterateurMotInductif(this);
    }

    iterateurIteratif(): IterateurMot {
        return new IterateurMotiteratif(this);
    }

    iterator(): Iterator<string> {
        return this.iterateurIteratif();
    }

    // Visiteur itératif (programmé récursivement puis itérativement)
    accueilRecursif<T>(v: VisiteurMot<T>): T {
        if (this.casVide()) {
            return v.casVide();
        }
        return v.casCaractereMot(this.caractere(), this.reste().accueilRecursif(v));
    }

    accueil<T>(v: VisiteurMot<T>): T {
        let r: T = v.casVide();
        for (let x in this) {
            r = v.casCaractereMot(x, r);
        }
        return r;
    }

    // Visiteur récursif primitif analogue du filtrage par cas (pattern matching),
    // programmé récursivement
    filtrageRécursif<T>(casVide: () => number, casCaractereMot: (c: string, m: Mot) => (t: T) => T) {
        if (this.casVide()) {
            return casVide.apply;
        }
        return casCaractereMot.apply(this.caractere(), this.reste());
    }

    // Visiteur récursif primitif analogue du filtrage par cas (pattern matching),
    // programmé récursivement
    filtrage<T>(casVide: () => T, casCaractereMot: (c: string, m: Mot) => (t: T) => T) {
        let r: T = casVide();
        let arg: Mot = this.creerMotVide();
        let courant: Mot = this;
        while (!courant.casVide()) {
            let e: string = courant.caractere();
            r = casCaractereMot(e, arg)(r);
            arg = arg.creerCaractereMot(e);
            courant = courant.reste();
        }
        return r;
    }
}


