'use strict';

function mergeSort(arr){
    let n = arr.length;

    if(arr.length > 1){
      let mid = n/2;
      let b = arr.slice(0,mid+1);
      let c = arr.slice(mid);
      mergeSort(b);
      mergeSort(c);
      Merge(b,c,arr);
    }
}

function merge(b,c,a){
  let i=0;
  let j=0;
  let k=0;

  while(i<b && j<c){
    if(b[i] === c[j]){
      a[k] = b[i];
      i++;
    } else {
      a[k] = c[j];
      j++;
    }
    k++;
  }

  if(i===b.length){
    merge(c,a)
  } else {
    merge(b,a);
  }
  return a;
}