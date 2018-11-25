package Test;

import Inductif.CaractereMotInductif;
import Inductif.RepresentationInductif;
import Inductif.TailleInductif;
import Inductif.ToLowerCaseInductif;
import Interface.Mot;
import Iteratif.CaractereMotIteratif;
import Iteratif.RepresentationIteratif;
import Iteratif.TailleIteratif;
import Iteratif.ToLowerCaseIteratif;

import java.util.HashMap;
import java.util.Map;

public class Test {

    public static void main(String[] args) {

        Mot FAB_induc = CaractereMotInductif.FAB;

        System.out.println("###############################");
        System.out.println("Test implémentation inductive: ");
        System.out.println();
        test(FAB_induc);

        Mot FAB_iter = CaractereMotIteratif.FAB;

        System.out.println("###############################");
        System.out.println("Test implémentation itérative: ");
        System.out.println();
        test(FAB_iter);

    }

    private static void test(Mot FAB) {
        HashMap<String, Mot> motsATester = new HashMap<>();

        Mot motVide_0 = FAB.creerMotVide();
        String mot_0 = "";
        motsATester.put(mot_0, motVide_0);

        Mot caractereMot_1 = FAB.creerCaractereMot('S').creerCaractereMot('o').creerCaractereMot('C').creerCaractereMot('r').creerCaractereMot('a').creerCaractereMot('N');
        String mot_1 = "NarCoS";
        motsATester.put(mot_1, caractereMot_1);

        Mot caractereMot_2 = FAB.creerCaractereMot('O').creerCaractereMot('l').creerCaractereMot('B').creerCaractereMot('A').creerCaractereMot('p');
        String mot_2 = "pABlO";

        Mot motMot_3 = caractereMot_1.creerMotMot(caractereMot_2);
        String mot_3 = mot_1 + mot_2;
        motsATester.put(mot_3, motMot_3);

        for (Map.Entry<String, Mot> entry : motsATester.entrySet()) {
            String mot = entry.getKey();
            Mot motATester = entry.getValue();

            System.out.println("Test itératif: ");

            int tailleMot = motATester.accueil(new TailleIteratif());
            System.out.println(mot.length() + " = " + tailleMot + " ? " + (mot.length() == tailleMot));

            String repMot = motATester.accueil(new RepresentationIteratif());
            System.out.println("\"" + mot.toString() + "\" = \"" + repMot + "\" ? " + (mot.toString().equals(repMot)));

            String tolowercase = motATester.accueil(new ToLowerCaseIteratif());
            System.out.println("\"" + mot.toLowerCase() + "\" = \"" + tolowercase + "\" ? " + (mot.toLowerCase().equals(tolowercase)));

            System.out.println();

            System.out.println("Test récursif: ");

            int tailleMotRec = motATester.accueilRecursif(new TailleInductif());
            System.out.println(mot.length() + " = " + tailleMotRec + " ? " + (mot.length() == tailleMotRec));

            String repMotRec = motATester.accueilRecursif(new RepresentationInductif());
            System.out.println("\"" + mot.toString() + "\" = \"" + repMotRec + "\" ? " + (mot.toString().equals(repMotRec)));

            String tolowercaseRec = motATester.accueilRecursif(new ToLowerCaseInductif());
            System.out.println("\"" + mot.toLowerCase() + "\" = \"" + tolowercaseRec + "\" ? " + (mot.toLowerCase().equals(tolowercaseRec)));

            System.out.println();
        }

        System.out.println();
        System.out.println();

    }
}






