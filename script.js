let head = new Node(1);

head.setNext(new Node(2));
head.next.setNext(new Node(3));
console.log(head);

let list = new List(head);
console.log(list.toArray());