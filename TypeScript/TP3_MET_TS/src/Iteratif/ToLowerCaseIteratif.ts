import {VisiteurMotIteratif} from "./VisiteurMotIteratif";

export class ToLowerCaseIteratif implements VisiteurMotIteratif<string> {

    public casVide(): string {
        return "";
    }

    public casCaractereMot(c: string, m: string): string {
        return m + c.toLowerCase();
    }
}
