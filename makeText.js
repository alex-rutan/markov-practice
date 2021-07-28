"use strict"

const fsP = require('fs/promises');
const axios = require("axios");
const { MarkovMachine } = require("./markov");

/** Command-line tool to generate Markov text. */

async function makeText(){
    
    let args=[];
    let argv = process.argv;
    for(let i=2; i < argv.length; i++){
        args.push(argv[i]);
    }
    
    if(args[0]==="file"){
        let mm = await createMarkovFromFile(args[1]);
        console.log(mm.getText());
    }else{
        let mm = await createMarkovFromSite(args[1]);
        console.log(mm.getText());
    }
    
}

/** Taking in an input path, function returns a Markov Machine
 * with text from the file at the path. */

async function createMarkovFromFile(path){
    
    let content;
    try {
        content = await fsP.readFile(path, "utf8");
    } catch (err) {
        console.log(err);
        console.log("The path is incorrect or file could not be read.");
        process.exit(1);
    }
    let mm = new MarkovMachine(content);
    return mm;
}

/** Taking in an input url, function returns a Markov Machine
 * with text from the content of the url. */

async function createMarkovFromSite(url){
    let content;
    try {
        content = await axios.get(url);
    } catch (err) {
        console.log(err);
        console.log("The url is incorrect or could not be read.");
        process.exit(1);
    }
    let mm = new MarkovMachine(content.data)
    return mm;
}


makeText()