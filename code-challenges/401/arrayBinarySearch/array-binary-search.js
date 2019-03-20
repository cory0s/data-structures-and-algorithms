'use strict';
module.exports = exports = {};

exports.BinarySearch = function(arr, val) {
    // validityCheck(arr, val);
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] != 'number'){ return null; }
        if(arr[i]<arr[i-1]){ return null; }
    }
    if(typeof val != 'number'){ return null; }

    let high = arr.length-1;
    let low = 0;
    let mid = 0;
  
    while(low <= high){
      mid = Math.floor((high+low)/2);
      if(val === arr[mid]){
        return mid;
      } else if(val > arr[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1;
}

let validityCheck = function(arr, val){
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] != 'number'){ return null; }
    }
    if(typeof val != 'number'){ return null; }
}