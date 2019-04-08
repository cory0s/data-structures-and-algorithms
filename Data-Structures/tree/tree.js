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

  preOrder(root){
    const output = [];
    output.push(root.value);

    if(root.left){
      preOrder(root.left);
    }
    if(root.right){
      preOrder(root.right);
    }
    return output;
  }

  inOrder(root){    
    const output = [];

    if(root.left){
      inOrder(root.left);
    }

    output.push(root.value);

    if(root.right){
      inOrder(root.right);
    }
    return output;
  }

  postOrder(){
    const output = [];

    if(root.left){
      postOrder(root.left);
    }
    
    if(root.right){
      postOrder(root.right);
    }

    output.push(root.value);

    return output;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  add(value){
    const root = this.root;
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