import List from "./linked_list/list.js";
import Node_l from "./linked_list/node_l.js";

let head = new Node_l(1);

head.setNext(new Node_l(2));
head.next.setNext(new Node_l(3));
console.log(head);

let list = new List(head);
console.log(list.toArray());
list.append('anyText');
console.log(list.toArray());