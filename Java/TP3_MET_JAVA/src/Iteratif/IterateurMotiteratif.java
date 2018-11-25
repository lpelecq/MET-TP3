package Iteratif;

import Inductif.MotMotInductif;
import Interface.IterateurMot;
import Interface.Mot;

public class IterateurMotiteratif implements IterateurMot {

    private Mot reste;
    private Character caractere;

    public IterateurMotiteratif(Mot m) {
        this.decomposer(m);
    }

    @Override
    public Mot reste() {
        return reste;
    }

    @Override
    public boolean hasNext() {
        return reste != null;
    }

    private void decomposer(Mot m) {
        while (true) {
            if (m.casVide()) {
                this.reste = null;
                break;
            }
            if (m.casCaractereMot()) {
                this.reste = m.reste();
                this.caractere = m.caractere();
                break;
            }
            if (m.casMotMot()) {
                if (m.getMotGauche().casVide()) {
                    m = m.getMotDroite();
                    continue;
                } else if (m.getMotDroite().casCaractereMot()) {
                    this.reste = new MotMotInductif(m.getMotGauche().reste(), m.getMotDroite());
                    this.caractere = m.getMotGauche().caractere();
                    break;
                } else {
                    //m = new MotMotInductif(m.getMotGauche().getMotGauche(),new MotMotInductif(m.getMotGauche().getMotDroite(),m.getMotDroite()));
                    m = m.getMotGauche().getMotGauche().creerMotMot(m.getMotGauche().getMotDroite().creerMotMot(m.getMotDroite()));
                    continue;
                }
            }
        }
    }

    @Override
    public Character next() {
        if (reste == null)
            throw new UnsupportedOperationException();
        Character r = caractere;
        decomposer(reste);
        return r;
    }
}
