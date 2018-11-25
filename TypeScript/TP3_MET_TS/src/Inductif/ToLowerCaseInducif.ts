import {VisiteurMotInductif} from "./VisiteurMotInductif";

export class ToLowerCaseInductif implements VisiteurMotInductif<string> {

    public casVide(): string {
        return "";
    }

    public casCaractereMot(c: string, m: string): string {
        return c.toLowerCase() + m;
    }
}
