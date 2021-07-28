"use strict"
/** Command-line tool to generate Markov text. */
const fsP = require('fs/promises');
const axios = require("axios");
const { MarkovMachine } = require("./markov");

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