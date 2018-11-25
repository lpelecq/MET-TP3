package Interface;

public interface VisiteurMot<T> {

    T casVide();

    T casCaractereMot(Character c, T m);
}
