class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }

  removeNodes(x) {
    while (this.head !== null && this.head.data > x) {
      this.head = this.head.next;
    }

    let current = this.head;
    while (current !== null && current.next !== null) {
      if (current.next.data > x) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }

  printList() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();
const values = [10, 5, 12, 7, 3, 9, 10];
values.forEach((value) => list.addNode(value));

// list.printList();

list.removeNodes(7);
list.printList();
