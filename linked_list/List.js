import Node_l from "./Node_l.js";

export default class List {
    constructor(arr) {
        this.toArray.bind();
        this.append.bind();
        this.head = null;

        if(arr === undefined) return;

        try {
            arr.forEach(e => this.append(e));
        } catch (e) {
            throw new Error("Initializer object must be and Array");
        }

        this.count;
    }

    _count(){
        let aux;
        let i = 0;
        for(aux = this.head; aux != null; aux = aux.next)
            i++;
        
        return i;
    }

    get count(){
        return this._count();
    }

    append(item){
        let aux = this.head;

        if(aux == null){
            this.head = new Node_l(item);
            return; 
        }

        for(aux; aux.next != null; aux = aux.next);
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