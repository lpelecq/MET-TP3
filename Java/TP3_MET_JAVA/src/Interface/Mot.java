package Interface;

import Inductif.IterateurMotInductif;
import Inductif.VisiteurMotInductif;
import Iteratif.IterateurMotiteratif;
import Iteratif.VisiteurMotIteratif;

import java.util.Iterator;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Supplier;

public interface Mot extends Iterable<Character> {

    // Sélecteurs
    default boolean casVide() {
        return false;
    }


    default boolean casCaractereMot() {
        return false;
    }

    default boolean casMotMot() {
        return false;
    }

    Character caractere();

    Mot reste();
    /*
    default Character caractere() {
        throw new UnsupportedOperationException();
    }

    default Mot reste() {
        throw new UnsupportedOperationException();
    }*/

    default Mot getMotGauche() {
        throw new UnsupportedOperationException();
    }

    default Mot getMotDroite() {
        throw new UnsupportedOperationException();
    }

    Mot creerMotVide();


    Mot creerCaractereMot(char c);


    Mot creerMotMot(Mot droite);

    default IterateurMot iterateurInductif() {
        return new IterateurMotInductif(this);
    }

    default IterateurMot iterateurIteratif() {
        return new IterateurMotiteratif(this);
    }

    @Override
    default Iterator<Character> iterator() {
        return this.iterateurIteratif();
    }

    // Visiteur recursif
    default <T> T accueilRecursif(VisiteurMotInductif<T> v) {
        if (this.casVide()) {
            return v.casVide();
        }
        return v.casCaractereMot(this.caractere(), this.reste().accueilRecursif(v));
    }

    // Visiteur itératif
    default <T> T accueil(VisiteurMotIteratif<T> v) {
        T r = v.casVide();
        for (Character x : this) {
            r = v.casCaractereMot(x, r);
        }
        return r;
    }

    // Visiteur récursif primitif analogue du filtrage par cas (pattern matching),
    // programmé récursivement
    default <T> T filtrageRécursif(Supplier<T> casVide, BiFunction<Character, Mot, T> casCaractereMot) {
        if (this.casVide()) {
            return casVide.get();
        }
        return casCaractereMot.apply(this.caractere(), this.reste());
    }

    // Visiteur récursif primitif analogue du filtrage par cas (pattern matching),
    // programmé itérativement
    default <T> T filtrage(Supplier<T> casVide, BiFunction<Character, Mot, Function<T, T>> casCaractereMot) {
        T r = casVide.get();
        Mot arg = this.creerMotVide();
        Mot courant = this;
        while (!courant.casVide()) {
            Character e = courant.caractere();
            r = casCaractereMot.apply(e, arg).apply(r);
            arg = arg.creerCaractereMot(e);
            courant = courant.reste();
        }
        return r;
    }


}
