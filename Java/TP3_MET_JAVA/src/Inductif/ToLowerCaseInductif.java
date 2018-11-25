package Inductif;

public class ToLowerCaseInductif implements VisiteurMotInductif<String> {

    @Override
    public String casVide() {
        return "";
    }

    @Override
    public String casCaractereMot(Character c, String m) {
        return Character.toLowerCase(c) + m;
    }
}
