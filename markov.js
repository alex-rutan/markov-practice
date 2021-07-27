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
      if (chains[words[wordIndex]]) {
        chains[words[wordIndex]].push(words[wordIndex + 1]);
      } else {
        chains[words[wordIndex]] = [words[wordIndex + 1]];
      }
    }
    return chains;
  }

  /** return random text from chains */

  getText(numWords = 100) {
    let text = [];
    let keys = Object.keys(chains);
    let currWord = keys[Math.floor(Math.random() * keys.length)];
    
    text.push(currWord);

    while (text.length < numWords) {
      let values = Object.values(chains[currWord]);
      let randVal = values[Math.floor(Math.random() * values.length)];
      
      text.push(randVal);
      
      currWord = text[text.length - 1]
    }

    return text.join(" ");
  }
}
