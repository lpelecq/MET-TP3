package Iteratif;

public class RepresentationIteratif implements VisiteurMotIteratif<String> {

    @Override
    public String casVide() {
        return "";
    }

    @Override
    public String casCaractereMot(Character c, String m) {
        return m + c;
    }
}
