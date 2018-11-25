package Interface;

import java.util.Iterator;

public interface IterateurMot extends Iterator {

    Mot reste();

    boolean hasNext();

    Character next();
}
