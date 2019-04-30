'use strict';

class Hashtable {

    constructor(size){
      this.buckets = new Array(size);
      this.size = size;
    }

    add(key, value){
      let idx = this.hash(key);

      if(!this.buckets[idx]){
        this.buckets[idx] = [];
      }
      this.buckets[idx].push([key, value]);

      return idx;
    }

    get(key){
      let idx = this.hash(key);

      if(!this.buckets[idx]) { return null; }

      this.buckets[idx].forEach(bucket => {
        if(bucket[0] === key){
          return bucket[1];
        }
      });
    }

    contains(key){
      let idx = this.hash(key);
      if(this.buckets[idx]){
        return true;
      } else {
        return false;
      }
    }

    hash(key){
      return key.length % this.size;
    }
}

module.exports = Hashtable;