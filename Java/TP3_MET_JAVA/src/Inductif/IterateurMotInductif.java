package Inductif;

import Interface.IterateurMot;
import Interface.Mot;

public class IterateurMotInductif implements IterateurMot {

    private Mot m;

    public IterateurMotInductif(Mot m) {
        this.m = m;
    }

    @Override
    public Mot reste() {
        if (!this.m.getMotGauche().casVide())
            return new MotMotInductif(this.m.getMotGauche().reste(), this.m.getMotDroite());
        if (!this.m.getMotDroite().casVide())
            return this.m.getMotDroite().reste();
        throw new UnsupportedOperationException();
    }

    @Override
    public boolean hasNext() {
        return !this.m.casVide();

    }


    @Override
    public Character next() {
        Character c;
        if (m.casCaractereMot()) {
            c = this.m.caractere();
            this.m = MotVideInductif.SINGLETON;
            return c;
        }
        if (m.casMotMot()) {

            if (!m.getMotGauche().casVide()) {
                c = this.m.getMotGauche().caractere();
                this.m = this.m.getMotGauche();
                return c;
            }
            if (!m.getMotDroite().casVide()) {
                c = this.m.getMotDroite().caractere();
                this.m = this.m.getMotDroite();
                return c;
            }
        }
        throw new UnsupportedOperationException();
    }
}
