import {VisiteurMotIteratif} from "./VisiteurMotIteratif";

export class TailleIteratif implements VisiteurMotIteratif<number> {

    public casVide(): number {
        return 0;
    }

    public casCaractereMot(c: string, m: number): number {
        return m + 1;
    }
}
