"use strict"

const { MarkovMachine } = require("./markov");

describe("MarkovMachine class", function() {

    test("constructor splits text into words", function() {
        let text = "the cat in the hat";
        let mm = new MarkovMachine(text);
        expect(mm.words).toEqual(["the", "cat", "in", "the", "hat"]);
    });

    test("constructor makes chains object from the words using makeChains correctly", function () {
        let text = "the cat in the hat";
        let mm = new MarkovMachine(text);
        expect(mm.chains).toEqual({ "the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [undefined] });
    });

    test("getText creates correct number of words from Markov chain  ", function () {
        let text = "the cat in the hat";
        let mm = new MarkovMachine(text);
        expect(mm.getText().split(" ").length).toEqual(100);
        expect(mm.getText(10).split(" ").length).toEqual(10);
    });

})