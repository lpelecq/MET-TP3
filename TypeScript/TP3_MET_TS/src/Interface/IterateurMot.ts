import {Mot} from "./Mot";


export interface IterateurMot extends Iterator<string> {

    reste(): Mot;

    hasNext(): boolean;

    next(): string;
}
