import List from "./linked_list/List.js";
import Node_l from "./linked_list/Node_l.js";

let list = new List("bury the light");
let head = new Node_l(1);

head.setNext(new Node_l(2));
head.next.setNext(new Node_l(3));
console.log(head);


console.log(list.toArray());
list.append('anyText');
console.log(list.toArray());