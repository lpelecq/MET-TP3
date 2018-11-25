package Inductif;

public class RepresentationInductif implements VisiteurMotInductif<String> {

    @Override
    public String casVide() {
        return "";
    }

    @Override
    public String casCaractereMot(Character c, String m) {
        return c + m;
    }
}
