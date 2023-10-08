class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */

    insert(val) {
        if (this.root === null) {
            this.root = new Node(val);
            return this;
        }
        let inserted = false;
        let curNode = this.root;
        while (!inserted) {
            if (val < curNode.val) {
                if (curNode.left === null) {
                    curNode.left = new Node(val);
                    inserted = true;
                } else {
                    curNode = curNode.left;
                }
            } else if (val > curNode.val) {
                if (curNode.right === null) {
                    curNode.right = new Node(val);
                    inserted = true;
                } else {
                    curNode = curNode.right;
                }
            }
        }
        return this;
    }

    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */

    insertRecursively(val, curNode = this.root) {
        if (this.root === null) {
            this.root = new Node(val);
            return this;
        }

        if (val < curNode.val) {
            if (curNode.left === null) {
                curNode.left = new Node(val);
                return this;
            } else {
                return this.insertRecursively(val, curNode.left); // calling internal class function
            }
        } else if (val > curNode.val) {
            if (curNode.right === null) {
                curNode.right = new Node(val);
                return this;
            } else {
                return this.insertRecursively(val, curNode.right);
            }
        }
    }

    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */

    find(val) {}

    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */

    findRecursively(val) {}

    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */

    dfsPreOrder() {}

    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */

    dfsInOrder() {}

    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */

    dfsPostOrder() {}

    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */

    bfs() {}
}
module.exports = BinarySearchTree;
