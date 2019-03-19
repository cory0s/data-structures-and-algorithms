'use strict';

module.exports = exports = {};

exports.insertShiftArray = function(arr, val){
  if (!arr || !val || !Array.isArray(arr)) return null;
  let newArr = [];
  newArr.length = arr.length + 1;
  const midPoint = Math.ceil(arr.length/2);

  for(let i=0; i<midPoint; i++){
    newArr[i]=arr[i];
  }

  newArr[midPoint]=val;

  for(let i=midPoint+1; i<newArr.length; i++){
    newArr[i] = arr[i-1];
  }
  return newArr;
}