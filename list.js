class List {
    constructor(head) {
        this.head = head;
        this.toArray.bind();
    }

    toArray() {
        let arr = [];
        let i = 0;
        for (let aux = head; aux != null; aux = aux.next)
            arr[i++] = aux.value;

        return arr;
    }
}