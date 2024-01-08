/*
BST - Insertion and PreOrder Traversal
Description
Given a BST initialized by NULL. Perform a sequence of operations on a BST including:
insert k: insert a key k into the BST (do not insert if the key k exists)
Input
•Each line contains command under the form: “insert k”
•The input is terminated by a line containing #
Output
•Write the sequence of keys of nodes visited by the pre-order traversal (separated by a SPACE character)
Example
Input
insert 20
insert 10
insert 26
insert 7
insert 15
insert 23
insert 30
insert 3
insert 8
#
Output
20 10 7 3 8 15 26 23 30
*/
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) {
        return;
      }
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  preOrderTraversal(node = this.root) {
    if (!node) {
      return '';
    }
    return `${node.value} ${this.preOrderTraversal(node.left)}${this.preOrderTraversal(node.right)}`;
  }
}

const bst = new BST();
const input = `insert 20
insert 10
insert 26
insert 7
insert 15
insert 23
insert 30
insert 3
insert 8
#`;
function preOrder(input) {
  const commands = input.split('\n');
for (let i = 0; i < commands.length; i++) {
  const command = commands[i];
  if (command === '#') {
    break;
  }
  const value = parseInt(command.split(' ')[1]);
  bst.insert(value);
}
return(bst.preOrderTraversal().trim());
}
console.log(preOrder(input))