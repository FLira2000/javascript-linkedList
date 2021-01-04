import Node_l from "./Node_l.js";

export default class List {
    constructor(head) {
        this.toArray.bind();
        this.append.bind();
        if(typeof(head) == typeof(Node_l))
            this.head = head;
        else
            this.head = new Node_l(head);
    }

    append(item){
        let aux;
        for(aux = this.head; aux.next != null; aux = aux.next);
        aux.next = new Node_l(item);
    }

    toArray() {
        let arr = [];
        let i = 0;
        for (let aux = this.head; aux != null; aux = aux.next)
            arr[i++] = aux.value;

        return arr;
    }
}