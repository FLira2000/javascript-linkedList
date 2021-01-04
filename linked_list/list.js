export default class List {
    constructor(head) {
        this.toArray.bind();
        this.append.bind();
        this.head = head;
    }

    append(item){
        let aux;
        for(aux = head; aux != null; aux = aux.next);
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