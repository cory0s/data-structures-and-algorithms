const Hash = require('./hashtable.js');

function repeatedWord(str){
    let table = new Hash(42);
    table.add('dog', 'sheeba');
    console.log(table.get('dog'));
    console.log(str);
    console.log(table['dog']);
}

repeatedWord('word');