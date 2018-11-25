package Iteratif;

import Interface.Mot;

public class CaractereMotIteratif implements Mot {

    public static final Mot FAB = MotVideIteratif.SINGLETON;

    private Character caractere;
    private Mot motDroite;

    public CaractereMotIteratif(Character caractere, Mot motDroite) {
        this.caractere = caractere;
        this.motDroite = motDroite;
    }

    public Character caractere() {
        return caractere;
    }

    public Mot getMotDroite() {
        return motDroite;
    }

    @Override
    public Mot reste() {
        return motDroite;
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

    public boolean casCaractereMot() {
        return true;
    }

}
