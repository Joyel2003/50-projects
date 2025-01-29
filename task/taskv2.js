class Element {
    constructor(data) {
        this.data = data; 
        this.next = null; 
    }
}

class Collection {
    constructor() {
        this.head = null; 
        this.newlyAddedNumbers = []; 
    }
    add(data) {
        const newElement = new Element(data);
        newElement.next = this.head;
        this.head = newElement; 
        this.newlyAddedNumbers.push(data); 
    }

    search(data) {
        let currentElement = this.head; 
        while (currentElement) { 
            if (currentElement.data === data) { 
                return currentElement;
            }
            currentElement = currentElement.next; 
        }
        return "No numbers are found"; 
    }

    display() {
        console.log("Newly added numbers: " + this.newlyAddedNumbers.join(" -> "));

        let current = this.head; 
        const values = []; 
        while (current) { 
            values.push(current.data);
            current = current.next; 
        }
        console.log("Existing numbers: " + values.join(" -> ") + " -> null");
    }
}

let list = new Collection(); 
const myNumbers = new Array();

for (let i = 0; i < 8; i++) { 
    myNumbers[i] = i; 
    list.add(i); 
}


list.add(11); 


list.display(); 


console.log(list.search(6)); 
console.log(list.search(2)); 

 
