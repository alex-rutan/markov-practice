/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    // MORE CODE HERE
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // MORE CODE HERE
    let chains = {};
    
    for(let wordIndex in words){
      chains[words[wordIndex]] = words[wordIndex+1] || 0;
      
    }
    
    return chains;
  }


  /** return random text from chains */

  getText(numWords = 100) {
    // MORE CODE HERE
  }
}
