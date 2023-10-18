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

    find(val) {
        if (this.root === null) return undefined;

        let curNode = this.root;

        while (true) {
            if (val === curNode.val) return curNode;

            if (val > curNode.val) {
                if (curNode.right === null) return undefined;
                if (val === curNode.right.val) {
                    return curNode.right;
                } else {
                    curNode = curNode.right;
                }
            }

            if (val < curNode.val) {
                if (curNode.left === null) return undefined;
                if (val === curNode.left.val) {
                    return curNode.left;
                } else {
                    curNode = curNode.left;
                }
            }
        }
    }

    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */

    findRecursively(val, curNode = this.root) {
        if (this.root === null) return undefined;

        if (val === curNode.val) return curNode;

        if (val > curNode.val) {
            if (curNode.right === null) return undefined;
            if (val === curNode.right.val) {
                return curNode.right;
            } else {
                return this.findRecursively(val, curNode.right);
            }
        }

        if (val < curNode.val) {
            if (curNode.left === null) return undefined;
            if (val === curNode.left.val) {
                return curNode.left;
            } else {
                return this.findRecursively(val, curNode.left);
            }
        }
    }

    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */

    dfsPreOrder() {
        let nodeArr = [];

        if (this.root === null) return undefined;

        function traverse(curNode) {
            nodeArr.push(curNode.val);
            if (curNode.left !== null) {
                traverse(curNode.left);
            }
            if (curNode.right !== null) {
                traverse(curNode.right);
            }
        }

        traverse(this.root);
        return nodeArr;
    }

    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */

    dfsInOrder() {
        let nodeArr = [];

        if (this.root === null) return undefined;

        function traverse(curNode) {
            if (curNode.left !== null) {
                traverse(curNode.left);
            }
            nodeArr.push(curNode.val);
            if (curNode.right !== null) {
                traverse(curNode.right);
            }
        }

        traverse(this.root);
        return nodeArr;
    }

    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */

    dfsPostOrder() {
        let nodeArr = [];

        if (this.root === null) return undefined;

        function traverse(curNode) {
            if (curNode.left !== null) {
                traverse(curNode.left);
            }

            if (curNode.right !== null) {
                traverse(curNode.right);
            }

            nodeArr.push(curNode.val);
        }

        traverse(this.root);
        return nodeArr;
    }

    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */

    bfs() {
        let curNode = this.root;
        let valArr = [];
        let nodeArr = [];

        nodeArr.push(curNode);

        while (nodeArr.length > 0) {
            curNode = nodeArr.shift();
            valArr.push(curNode.val);
            if (curNode.left !== null) {
                nodeArr.push(curNode.left);
            }
            if (curNode.right !== null) {
                nodeArr.push(curNode.right);
            }
        }
        return valArr;
    }
}
module.exports = BinarySearchTree;
