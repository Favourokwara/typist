class Node {
    constructor(value) { this.next = undefined; this.value = value; }
}

class DoublyNode extends Node {
    constructor(value) { super(value); this.prev = undefined; }
}

export { Node, DoublyNode };