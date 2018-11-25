export interface VisiteurMot<T> {

    casVide(): T;

    casCaractereMot(c: string, m: T): T;
}
