class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head =null;
    }
    isEmpty(){
        return this.head === null;
    }
    add(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    find(data){
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.data === data){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null; 
    }
    display(){
        let current = this.head;
        const values = [];
        while(current){
            values.push(current.data);
            current = current.next;
        }
        console.log(values.join("->"));
    }
}

const list = new LinkedList();
list.add(0)
list.add(1)
list.add(2)

list.display()
list.display();




