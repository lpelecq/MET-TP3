"use strict";
exports.__esModule = true;
var CaractereMotInductif_1 = require("../Inductif/CaractereMotInductif");
var TailleIteratif_1 = require("../Iteratif/TailleIteratif");
var RepresentationIteratif_1 = require("../Iteratif/RepresentationIteratif");
var ToLowerCaseIteratif_1 = require("../Iteratif/ToLowerCaseIteratif");
var TailleInductif_1 = require("../Inductif/TailleInductif");
var RepresentationInductif_1 = require("../Inductif/RepresentationInductif");
var ToLowerCaseInducif_1 = require("../Inductif/ToLowerCaseInducif");
var CaractereMotIteratif_1 = require("../Iteratif/CaractereMotIteratif");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.main = function () {
        var FAB_induc = CaractereMotInductif_1.CaractereMotInductif.FAB;
        console.log("###############################");
        console.log("Test implémentation inductive: ");
        console.log();
        Test.test(FAB_induc);
        var FAB_iter = CaractereMotIteratif_1.CaractereMotIteratif.FAB;
        console.log("###############################");
        console.log("Test implémentation itérative: ");
        console.log();
        Test.test(FAB_iter);
    };
    Test.test = function (FAB) {
        var motsATester = {};
        var motVide_0 = FAB.creerMotVide();
        var mot_0 = "";
        motsATester[mot_0] = motVide_0;
        var caractereMot_1 = FAB.creerCaractereMot('S').creerCaractereMot('o').creerCaractereMot('C').creerCaractereMot('r').creerCaractereMot('a').creerCaractereMot('N');
        var mot_1 = "NarCoS";
        motsATester[mot_1] = caractereMot_1;
        var caractereMot_2 = FAB.creerCaractereMot('O').creerCaractereMot('l').creerCaractereMot('B').creerCaractereMot('A').creerCaractereMot('p');
        var mot_2 = "pABlO";
        var motMot_3 = caractereMot_1.creerMotMot(caractereMot_2);
        var mot_3 = mot_1 + mot_2;
        motsATester[mot_3] = motMot_3;
        for (var key in motsATester) {
            var mot = key;
            var motATester = motsATester[key];
            console.log("Test itératif: ");
            var tailleMot = motATester.accueil(new TailleIteratif_1.TailleIteratif());
            console.log(mot.length + " = " + tailleMot + " ? " + (mot.length == tailleMot));
            var repMot = motATester.accueil(new RepresentationIteratif_1.RepresentationIteratif());
            console.log("\"" + mot.toString() + "\" = \"" + repMot + "\" ? " + (mot.toString() == repMot));
            var tolowercase = motATester.accueil(new ToLowerCaseIteratif_1.ToLowerCaseIteratif());
            console.log("\"" + mot.toLowerCase() + "\" = \"" + tolowercase + "\" ? " + (mot.toLowerCase() == tolowercase));
            console.log();
            console.log("Test récursif: ");
            var tailleMotRec = motATester.accueilRecursif(new TailleInductif_1.TailleInductif());
            console.log(mot.length + " = " + tailleMotRec + " ? " + (mot.length == tailleMotRec));
            var repMotRec = motATester.accueilRecursif(new RepresentationInductif_1.RepresentationInductif());
            console.log("\"" + mot.toString() + "\" = \"" + repMotRec + "\" ? " + (mot.toString() == repMotRec));
            var tolowercaseRec = motATester.accueilRecursif(new ToLowerCaseInducif_1.ToLowerCaseInductif());
            console.log("\"" + mot.toLowerCase() + "\" = \"" + tolowercaseRec + "\" ? " + (mot.toLowerCase() == tolowercaseRec));
            console.log();
        }
        console.log();
        console.log();
    };
    return Test;
}());
exports.Test = Test;
