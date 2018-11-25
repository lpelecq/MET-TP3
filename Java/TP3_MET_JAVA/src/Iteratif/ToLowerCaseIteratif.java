package Iteratif;

public class ToLowerCaseIteratif implements VisiteurMotIteratif<String> {

    @Override
    public String casVide() {
        return "";
    }

    @Override
    public String casCaractereMot(Character c, String m) {
        return m + Character.toLowerCase(c);
    }
}
