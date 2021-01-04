import List from "./linked_list/List.js";
import Node_l from "./linked_list/Node_l.js";

let list = new List(['bury', 'the', 'light']);
let list2 = new List();

console.log(list);
console.log(list.count);

list.append('deep');

console.log(list.count);