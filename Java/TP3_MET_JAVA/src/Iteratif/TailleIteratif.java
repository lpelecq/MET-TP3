package Iteratif;

public class TailleIteratif implements VisiteurMotIteratif<Integer> {

    @Override
    public Integer casVide() {
        return 0;
    }

    @Override
    public Integer casCaractereMot(Character c, Integer m) {
        return m + 1;
    }
}
