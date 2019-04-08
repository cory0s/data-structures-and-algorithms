'use strict'

class Node {

  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {

  constructor(){
    this.root = null;
  }

  preOrder(root, arr=[]){
    arr.push(root.value);

    if(root.left){
      this.preOrder(root.left, arr);
    }
    if(root.right){
      this.preOrder(root.right, arr);
    }
    return arr;
  }

  inOrder(root, arr=[]){    

    if(root.left){
      this.inOrder(root.left, arr);
    }

    arr.push(root.value);

    if(root.right){
      this.inOrder(root.right, arr);
    }
    return arr;
  }

  postOrder(root, arr=[]){

    if(root.left){
      this.postOrder(root.left, arr);
    }
    
    if(root.right){
      this.postOrder(root.right, arr);
    }

    arr.push(root.value);

    return arr;
  }
}

class BinarySearchTree extends BinaryTree {

  add(value){
    let root = this.root;
    if(root === null){
      this.root = new Node(value);
    } else {

    let currentNode = root;
    let newNode = new Node(value);

    while(currentNode){
      if(value < currentNode.value){
        if(currentNode.left === null){
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if(currentNode.right === null){
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
  }

  contains(value){
    const current = this.root;

    while(current){
      if(value === current.value){
        return true;
      }
      if(value < current.value){
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

module.exports = {BinarySearchTree, Node};