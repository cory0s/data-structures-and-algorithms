'use strict';

let Table = require('../../../Data-Structures/hashtable/hashtable.js');

function repeatedWord(str){

  let table = new Table(42);
  let words = str.split(' ');
  let repeatWord = null;
  let counter = 0;

  while(counter < words.length){
    let word = words[counter];
    if(table.contains(word) === true){
      repeatWord = word;
      break;
    } else {
      table.add(word);
    }
    counter++;
  };

  return repeatWord;
}

repeatedWord('This is is loong string string');

module.exports = repeatedWord;