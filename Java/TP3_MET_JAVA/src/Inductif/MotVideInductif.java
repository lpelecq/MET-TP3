package Inductif;

import Interface.Mot;

public enum MotVideInductif implements Mot {

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
    public Mot creerCaractereMot(char c) {
        return new CaractereMotInductif(c, this);
    }

    @Override
    public Mot creerMotMot(Mot droite) {
        return new MotMotInductif(this, droite);
    }

    @Override
    public Mot creerMotVide() {
        return MotVideInductif.SINGLETON;
    }
}
