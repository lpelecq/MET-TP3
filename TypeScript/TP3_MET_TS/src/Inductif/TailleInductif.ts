import {VisiteurMotInductif} from "./VisiteurMotInductif";

export class TailleInductif implements VisiteurMotInductif<number> {

    public casVide(): number {
        return 0;
    }

    public casCaractereMot(c: string, m: number): number {
        return m + 1;
    }
}
