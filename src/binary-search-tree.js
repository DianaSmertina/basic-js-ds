const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addMain(data, this.rootNode);

    function addMain (data, node) {
      if (node === null) {
        return new Node(data);
      } else if (data === node.data) {
        return node;
      } else if (data > node.data) {
        node.right = addMain(data, node.right);
      } else {
        node.left = addMain(data, node.left);
      }
      return node;
    }
  }

  has(data) {
    function hasMain(data, node) {
      if (node === null) {
        return false;
      } else if (data === node.data) {
        return true;
      } else if (data > node.data) {
        return hasMain(data, node.right);
      } else {
        return hasMain(data, node.left);
      }
    }
    return hasMain(data, this.rootNode);
  }

  find(data) {
    function findMain(data, node) {
      if (node === null) {
        return null;
      } else if (data === node.data) {
        return node;
      } else if (data > node.data) {
        return findMain(data, node.right);
      } else {
        return findMain(data, node.left);
      }
    }
    return findMain(data, this.rootNode);
  }

  remove(data) {
    
    function removeMain (data, node) {
      if (node === null) {
        return 0;
      } else if (data > node.data) {
          node.right = removeMain(data, node.right);
          return node;
        } else if (data < node.data) {
          node.left = removeMain(data, node.left);
          return node;
        } else {
          if (node.left === null && node.right === null) {
              return null;
            } else if (node.left === null) {
              node = node.right;
              return node;
            } else if (node.right === null) {
              node = node.left;
              return node;
            } else {
              let rightChild = node.right;
              console.log(node, rightChild)
              while (rightChild.left !== null) {
                      rightChild = rightChild.left;
                  }
              node.data = rightChild.data;
              node.right = removeMain(rightChild.data, node.right);
              return node;
            }
        }
    }
    this.rootNode = removeMain(data, this.rootNode);
  }

  min() {
    return mainMin(this.rootNode);
    function mainMin (node) {
      if (node.left !== null) {
        return mainMin(node.left);
      } else {
        return node.data;
      }
    }
  }

  max() {
    return mainMax(this.rootNode);
    function mainMax (node) {
      if (node.right !== null) {
        return mainMax(node.right);
      } else {
        return node.data;
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};