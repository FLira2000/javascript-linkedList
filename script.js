let head = new Node_l(1);

head.setNext(new Node_l(2));
head.next.setNext(new Node_l(3));
console.log(head);

let list = new List(head);
console.log(list.toArray());