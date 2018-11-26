import {CaractereMotInductif} from "../Inductif/CaractereMotInductif";
import {TailleIteratif} from "../Iteratif/TailleIteratif";
import {RepresentationIteratif} from "../Iteratif/RepresentationIteratif";
import {ToLowerCaseIteratif} from "../Iteratif/ToLowerCaseIteratif";
import {TailleInductif} from "../Inductif/TailleInductif";
import {RepresentationInductif} from "../Inductif/RepresentationInductif";
import {ToLowerCaseInductif} from "../Inductif/ToLowerCaseInducif";
import {CaractereMotIteratif} from "../Iteratif/CaractereMotIteratif";
import {Mot} from "../Interface/Mot";

export class Test {

    public static main() {

        let FAB_induc: Mot = CaractereMotInductif.FAB;

        console.log("###############################");
        console.log("Test implémentation inductive: ");
        console.log();
        Test.test(FAB_induc);

        let FAB_iter: Mot = CaractereMotIteratif.FAB;

        console.log("###############################");
        console.log("Test implémentation itérative: ");
        console.log();
        Test.test(FAB_iter);

    }

    private static test(FAB: Mot) {
        let motsATester = {};

        let motVide_0: Mot = FAB.creerMotVide();
        let mot_0: string = "";
        motsATester[mot_0] = motVide_0;

        let caractereMot_1: Mot = FAB.creerCaractereMot('S').creerCaractereMot('o').creerCaractereMot('C').creerCaractereMot('r').creerCaractereMot('a').creerCaractereMot('N');
        let mot_1: string = "NarCoS";
        motsATester[mot_1] = caractereMot_1;

        let caractereMot_2: Mot = FAB.creerCaractereMot('O').creerCaractereMot('l').creerCaractereMot('B').creerCaractereMot('A').creerCaractereMot('p');
        let mot_2: string = "pABlO";

        let motMot_3: Mot = caractereMot_1.creerMotMot(caractereMot_2);
        let mot_3: string = mot_1 + mot_2;
        motsATester[mot_3] = motMot_3;

        for (var key in motsATester) {
            let mot: string = key;
            let motATester: Mot = motsATester[key];

            console.log("Test itératif: ");

            let tailleMot: number = motATester.accueil(new TailleIteratif());
            console.log(mot.length + " = " + tailleMot + " ? " + (mot.length == tailleMot));

            let repMot: string = motATester.accueil(new RepresentationIteratif());
            console.log("\"" + mot.toString() + "\" = \"" + repMot + "\" ? " + (mot.toString() == repMot));

            let tolowercase: string = motATester.accueil(new ToLowerCaseIteratif());
            console.log("\"" + mot.toLowerCase() + "\" = \"" + tolowercase + "\" ? " + (mot.toLowerCase() == tolowercase));

            console.log();

            console.log("Test récursif: ");

            let tailleMotRec: number = motATester.accueilRecursif(new TailleInductif());
            console.log(mot.length + " = " + tailleMotRec + " ? " + (mot.length == tailleMotRec));

            let repMotRec: string = motATester.accueilRecursif(new RepresentationInductif());
            console.log("\"" + mot.toString() + "\" = \"" + repMotRec + "\" ? " + (mot.toString() == repMotRec));

            let tolowercaseRec: string = motATester.accueilRecursif(new ToLowerCaseInductif());
            console.log("\"" + mot.toLowerCase() + "\" = \"" + tolowercaseRec + "\" ? " + (mot.toLowerCase() == tolowercaseRec));

            console.log();
        }


        console.log();
        console.log();

    }
}

Test.main();




