package Inductif;

import Interface.Mot;

public class CaractereMotInductif implements Mot {


    public static final Mot FAB = MotVideInductif.SINGLETON;

    private Character caractere;
    private Mot reste;

    public CaractereMotInductif(Character caractere, Mot reste) {
        this.caractere = caractere;
        this.reste = reste;
    }

    public Character caractere() {
        return caractere;
    }

    @Override
    public Mot reste() {
        return reste;
    }

    @Override
    public Mot creerMotVide() {
        return MotVideInductif.SINGLETON;
    }

    @Override
    public Mot creerCaractereMot(char c) {
        return new CaractereMotInductif(c, this);
    }

    @Override
    public Mot creerMotMot(Mot droite) {
        return new MotMotInductif(this, droite);
    }


    public boolean casCaractereMot() {
        return true;
    }

}
