package Iteratif;

import Interface.Mot;

public enum MotVideIteratif implements Mot {

    SINGLETON;

    public boolean casVide() {
        return true;
    }

    public Character caractere() {
        throw new UnsupportedOperationException();
    }

    public Mot reste() {
        throw new UnsupportedOperationException();
    }

    @Override
    public Mot creerMotVide() {
        return MotVideIteratif.SINGLETON;
    }

    @Override
    public Mot creerCaractereMot(char c) {
        return new CaractereMotIteratif(c, this);
    }

    @Override
    public Mot creerMotMot(Mot droite) {
        return new MotMotIteratif(this, droite);
    }
}
