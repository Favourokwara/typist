import { LinkedList, DoublyLinkedList } from "../src/model/linked_list.js";

describe('Linked List', () => {
    let linkedlist;

    beforeEach(() => {
        linkedlist = new LinkedList();
    })

    it('Is empty when created', () => {
        expect(linkedlist.head).toBe(undefined)
        expect(linkedlist.isEmpty()).toBe(true)
    })

    it('Can push elements to list', () => {
        linkedlist.push(1)
        linkedlist.push(2)
        linkedlist.push(3)
        linkedlist.push(4)
        linkedlist.push(5)

        expect(linkedlist.getElementAt(0).value).toBe(1)
        expect(linkedlist.getElementAt(2).value).toBe(3)
        expect(linkedlist.getElementAt(4).value).toBe(5)
        expect(linkedlist.getElementAt(5)).toBe(undefined)

    })

    it('Can insert element at index', () => {
        // can insert into empty linked list
        expect(linkedlist.insert(1, 0)).toBe(true)
        expect(linkedlist.head.value).toBe(1)
        
        linkedlist.push(2)
        linkedlist.push(3)
        linkedlist.push(4)
        
        expect(linkedlist.getElementAt(2).value).toBe(3)
        expect(linkedlist.insert(9, 2)).toBe(true)
        expect(linkedlist.getElementAt(2).value).toBe(9)
        expect(linkedlist.getElementAt(3).value).toBe(3)
    })

    it('Can remove elements from list', () => {
        linkedlist.push(1)
        linkedlist.push(2)
        linkedlist.push(3)
        linkedlist.push(4)

        expect(linkedlist.removeAt(2)).toBe(3)
        expect(linkedlist.getElementAt(2).value).toBe(4)
        expect(linkedlist.getElementAt(1).next.value).toBe(4)
    })

    it('Can be converted into string', () => {
        // return an empty string when empty
        expect(linkedlist.toString()).toBe('')

        linkedlist.push(1)
        linkedlist.push(2)
        linkedlist.push(3)
        linkedlist.push(4)
        linkedlist.push(5)
        linkedlist.push(6)

        expect(linkedlist.toString()).toBe('1, 2, 3, 4, 5, 6')
    })

    it('Can return index of an item', () => {
        linkedlist.push(6)
        linkedlist.push(3)
        linkedlist.push(8)
        linkedlist.push(2)
        linkedlist.push(9)

        expect(linkedlist.indexOf(6)).toBe(0)
        expect(linkedlist.indexOf(9)).toBe(4)
        // return -1 when item does'nt exist
        expect(linkedlist.indexOf(4)).toBe(-1)
    })
})

describe('Doubly Linked List', () => {
    let doublyLinkedList;

    beforeEach(() => {
        doublyLinkedList = new DoublyLinkedList();
    })

    it('Is empty when created', () => {
        expect(doublyLinkedList.head).toBe(undefined)
        expect(doublyLinkedList.isEmpty()).toBe(true)
    })

    it('Can push elements to list', () => {
        doublyLinkedList.push(1)
        expect(doublyLinkedList.getElementAt(0).value).toBe(1)
        expect(doublyLinkedList.getElementAt(0).prev).toBe(undefined)

        doublyLinkedList.push(2)
        doublyLinkedList.push(3)
        doublyLinkedList.push(4)
        doublyLinkedList.push(5)

        expect(doublyLinkedList.getElementAt(2).value).toBe(3)
        expect(doublyLinkedList.getElementAt(2).prev.value).toBe(2)

        expect(doublyLinkedList.getElementAt(4).value).toBe(5)
        expect(doublyLinkedList.getElementAt(4).prev.value).toBe(4)
    })

    it('Can insert element at index', () => {
        // can insert into empty linked list
        expect(doublyLinkedList.insert(1, 0)).toBe(true)
        expect(doublyLinkedList.head.value).toBe(1)
        
        doublyLinkedList.push(2)
        doublyLinkedList.push(3)
        doublyLinkedList.push(4)
        
        expect(doublyLinkedList.getElementAt(2).value).toBe(3)
        expect(doublyLinkedList.insert(9, 2)).toBe(true)
        expect(doublyLinkedList.getElementAt(2).value).toBe(9)
        expect(doublyLinkedList.getElementAt(3).value).toBe(3)
    })

    it('Can remove elements from list', () => {
        doublyLinkedList.push(1)
        doublyLinkedList.push(2)
        doublyLinkedList.push(3)
        doublyLinkedList.push(4)

        expect(doublyLinkedList.removeAt(2)).toBe(3)
        expect(doublyLinkedList.getElementAt(2).value).toBe(4)
        expect(doublyLinkedList.getElementAt(1).next.value).toBe(4)
    })

    it('Can be converted into string', () => {
        // return an empty string when empty
        expect(doublyLinkedList.toString()).toBe('')

        doublyLinkedList.push(1)
        doublyLinkedList.push(2)
        doublyLinkedList.push(3)
        doublyLinkedList.push(4)
        doublyLinkedList.push(5)
        doublyLinkedList.push(6)

        expect(doublyLinkedList.toString()).toBe('1, 2, 3, 4, 5, 6')
    })

    it('Can return index of an item', () => {
        doublyLinkedList.push(6)
        doublyLinkedList.push(3)
        doublyLinkedList.push(8)
        doublyLinkedList.push(2)
        doublyLinkedList.push(9)

        expect(doublyLinkedList.indexOf(6)).toBe(0)
        expect(doublyLinkedList.indexOf(9)).toBe(4)
        // return -1 when item does'nt exist
        expect(doublyLinkedList.indexOf(4)).toBe(-1)
    })
})