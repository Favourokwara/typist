import { Node, DoublyNode } from "./data_node.js"

class LinkedList {
    constructor() { this.head = this.tail = undefined; this.count = 0; }


    /**
     * Appends a new item to the end of th linked list.
     * @param {any} item New item to add to the list.
     */
    push(item) {
        const node = new Node(item);

        if (this.head === undefined) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next != null) {
                current = current.next;
            }

            current.next = node;
        }
        this.count++
    }

    /**
     * Returns an item from the linked lit by the provided index.
     * @param {Number} index Index of the item to be returned.
     */
    getElementAt(index) {
        // checks if the specified index is valid
        if (index >= 0 && index <= this.count) {
            let node = this.head;

            for (let i = 0; i < index && node != null; i++) {
                node = node.next;                
            }

            return node;
        }
        return undefined;
    }

    /**
     * Removes an item from the linked list by its index.
     * @param {Number} index Index of the item to be removed.
     * @returns The value of the item removed from the list.
     */
    removeAt(index) {
        // checks if the specified index is valid
        if (index >= 0 && index <= this.count) {
            let current = this.head;

            if (index === 0) {
                this.head = current.next;
            } else {
                let previous = this.getElementAt(index - 1);

                current = previous.next;
                previous.next = current.next;
            }
            this.count++
            return current.value;
        }
        return current;
    }

    /**
     * Adds a new item at the start of the specified index. 
     * @param {any} item New item to be inserted into list.
     * @param {Number} index Index to append item in front of.
     * @returns Boolean representing the insertion's success.
     */
    insert(item, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(item);

            if (index === 0) {
                const current = this.head;

                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;

                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    /**
     * Returns the index of the specified item.
     * @param {any} item The item for which to return its index.
     */
    indexOf(item) {
        let node = this.head;

        for (let i = 0; i < this.count && node != null; i++) {
            if (item === node.item) return i;
            node = node.next;
        }
        return -1;
    }

    /**
     * Removes the specified item from the linked listed.
     * @param {any} element The item to be removed from the linked list.
     * @returns The item that was removed from the linked list.
     */
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    /**
     * Returns the number of items iniside of the linked list.
     */
    size() {
        return this.count;
    }

    /**
     * Checks whether the linked list is empty.
     */
    isEmpty() {
        return this.size() === 0;
    }

    /**
     * Return the head of the linked list.
     */
    getHead() {
        return this.head;
    }

    /**
     * Returns the string version of the given linked list.
     */
    toString() {
        if (this.head == undefined) return ""

        let result = `${this.head.value}`;
        let current = this.head.next;

        for (let i = 0; i < this.size() && current != null; i++) {
            result += `, ${current.value}`;
            current = current.next;
        }
        return result;
    }
}

class DoublyLinkedList extends LinkedList {
    constructor() { this.tail = undefined; }

    /**
     * Appends a new item to the end of th linked list.
     * @param {any} item New item to add to the list.
     */
    push(item) {
        const node = new Node(item);
        
        // checks whether linked list is empty
        if (this.head === undefined) {
            this.head = node;
        } else {
            let current = this.head;
            
            while (current.next != undefined) {
                current = current.next;
            }

            current.next = node; // append node to end
            node.prev = current;
        }
        this.count++
    }

    /**
     * Adds a new item at the start of the specified index. 
     * @param {any} item New item to be inserted into list.
     * @param {Number} index Index to append item in front of.
     * @returns Boolean representing the insertion's success.
     */
    insert(item, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(item);
            let current = this.head;

            if (index === 0) {
                if (this.head == null) {
                    this.head = this.tail = node;
                } else {
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }
            } else if (index === this.count) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this.count++;
            return true;
        }
        return false;
    }

    /**
     * Removes an item from the linked list by its index.
     * @param {Number} index Index of the item to be removed.
     * @returns The value of the item removed from the list.
     */
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
                
                // if there's only one item, update the tail
                if (this.count === 1) this.tail = undefined;
                else this.head.prev = undefined;

            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                // link previous with current's next 
                previous.next = current.next;
                current.next.prev = previous;
                console.log(this.getElementAt(1));
            }
            this.count--;
            return current.value
        }
        return undefined;
    }
}

export { LinkedList };