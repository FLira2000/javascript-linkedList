class Node{
    constructor(valor){
        this.value = valor;
        this.next = null;
        this.setNext.bind();
    }

    setNext(newNode){
        if(newNode == null) return;
        this.next = newNode;
    }
}

class List{
    constructor(head){
        this.head = head;
        this.toArray.bind();
    }

    toArray(){
        let arr = [];
        let i = 0;
        for(let aux = head; aux != null; aux = aux.next)
            arr[i++] = aux.value;

        return arr;
    }
}

let head = new Node(1);

head.setNext(new Node(2));
head.next.setNext(new Node(3));
console.log(head);

let list = new List(head);
console.log(list.toArray());