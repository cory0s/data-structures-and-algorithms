'use strict';
let Table = require('../../../Data-Structures/hashtable/hashtable.js');


function leftJoin(ht1, ht2) {
    if(ht1 === null || ht2 === null){
        return null;
    }

    let combinedTable = ht1;
    
    ht2.buckets.forEach(bucket => {
        if(ht1.contains(bucket[0])){
            console.log(bucket);
            combinedTable[ht2.hash(bucket[0])].push(bucket[1]);
        }
    });

    return combinedTable;
}

module.exports = leftJoin;