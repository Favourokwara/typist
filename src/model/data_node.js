class Node {
    constructor(value) { this.next = undefined; this.value = value; }
}

class DoublyNode extends Node {
    constructor() { this.prev = undefined; }
}

export { Node, DoublyNode };