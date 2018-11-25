package Inductif;

import Interface.IterateurMot;
import Interface.Mot;

public class MotMotInductif implements Mot {

    public static final Mot FAB = MotVideInductif.SINGLETON;

    private Mot gauche;
    private Mot droite;

    public MotMotInductif(Mot gauche, Mot droite) {
        this.gauche = gauche;
        this.droite = droite;
    }

    @Override
    public Mot creerMotVide() {
        return MotVideInductif.SINGLETON;
    }

    @Override
    public boolean casMotMot() {
        return true;
    }

    @Override
    public Character caractere() {
        IterateurMot i = this.iterateurInductif();
        return i.next();
    }

    @Override
    public Mot reste() {
        IterateurMot i = this.iterateurInductif();
        return i.reste();
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
    public Mot creerCaractereMot(char c) {
        return new CaractereMotInductif(c, this);
    }

    @Override
    public Mot creerMotMot(Mot droite) {
        return new MotMotInductif(this, droite);
    }

}
