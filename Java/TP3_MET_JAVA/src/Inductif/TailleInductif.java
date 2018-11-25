package Inductif;

public class TailleInductif implements VisiteurMotInductif<Integer> {

    @Override
    public Integer casVide() {
        return 0;
    }

    @Override
    public Integer casCaractereMot(Character c, Integer m) {
        return m + 1;
    }
}
