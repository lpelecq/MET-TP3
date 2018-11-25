import {VisiteurMotInductif} from "./VisiteurMotInductif";

export class RepresentationInductif implements VisiteurMotInductif<string> {
    public casVide(): string {
        return "";
    }

    public casCaractereMot(c: string, m: string): string {
        return c + m;
    }
}
