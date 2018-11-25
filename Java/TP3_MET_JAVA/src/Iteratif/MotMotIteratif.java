package Iteratif;

import Interface.Mot;

public class MotMotIteratif implements Mot {

    public static final Mot FAB = MotVideIteratif.SINGLETON;

    private Mot gauche;
    private Mot droite;

    public MotMotIteratif(Mot gauche, Mot droite) {
        this.gauche = gauche;
        this.droite = droite;
    }


    public Character caractere() {
        if (!gauche.casVide()) {
            return gauche.caractere();
        }
        if (!droite.casVide()) {
            return droite.caractere();
        }
        throw new UnsupportedOperationException();
    }

    public Mot reste() {
        if (!gauche.casVide()) {
            return gauche.reste().creerMotMot(droite);
        }
        if (!droite.casVide()) {
            return droite.reste();
        }
        throw new UnsupportedOperationException();
    }

    @Override
    public boolean casMotMot() {
        return true;
    }

    @Override
    public Mot getMotGauche() {
        return this.gauche;
    }

    @Override
    public Mot getMotDroite() {
        return this.droite;
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
