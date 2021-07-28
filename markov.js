"use strict"
/** Textual markov chain generator */

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {

    this.words = text.split(/[ \r\n]+/);
    this.chains = this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = {};
    
    for(let wordIndex in this.words) {
      wordIndex = Number(wordIndex);
      if (chains[this.words[wordIndex]]) {
        chains[this.words[wordIndex]].push(this.words[wordIndex + 1]);
      } else {
        chains[this.words[wordIndex]] = [this.words[wordIndex + 1]];
      }
    }
    return chains;
  }

  /** return random text from chains */

  getText(numWords = 100) {
    let text = [];
    let keys = Object.keys(this.chains);
    // add .filter to keys to make all keys uppercase
    let currWord = keys[Math.floor(Math.random() * keys.length)];
    
    text.push(currWord);

    while (text.length < numWords) {
      let values = this.chains[currWord];
      let randVal = values[Math.floor(Math.random() * values.length - 1)];
      
      // if (randVal === undefined) {
      //   randVal = keys[Math.floor(Math.random() * keys.length)];
      // }
      // we shouldnt be getting undefined (might have to change length of keys or values above)

      text.push(randVal);
      
      currWord = randVal
    }

    return text.join(" ");
  }
}


module.exports = {
  MarkovMachine
}