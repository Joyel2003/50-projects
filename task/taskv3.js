class Element{
    constructor(value){
        this.value = value;
        this.nextElement = null;
    }
}

class NumberCollection{
    constructor(){
        this.firstElement = null;
        this.addedNumbers =[];
    }
    addNumber(value){
       const newElement = new Element(value);
       newElement.nextElement = this.firstElement;
       this.firstElement = newElement;
       this.addedNumbers.push(value);
    }

    findNumber(value){
        let currentElement = this.firstElement;
        while(currentElement) {
            if(currentElement.value === value){
                return currentElement;
            }
            currentElement = currentElement.nextElement;
        }
        return "Number is not found";
    }

    removeNumber(value) {
        let currentElement = this.firstElement; 
        let previousElement = null; 

        while (currentElement) { 
            if (currentElement.value === value) { 
                if (previousElement) {
                    previousElement.nextElement = currentElement.nextElement;
                } else {
                    this.firstElement = currentElement.nextElement;
                }
                this.addedNumbers = this.addedNumbers.filter(num => num !== value);
                return `Number ${value} removed successfully.`;
            }
            previousElement = currentElement; 
            currentElement = currentElement.nextElement; 
        }
        return "Number not found"; 
    }
             showNumbers(){
            console.log("Recently added numbers: " + this.addedNumbers.join(">"));
            let currentElement = this.firstElement;
            const numbers = [];
            while(currentElement){
                numbers.push(currentElement.value);
                currentElement = currentElement.nextElement;
            }
            console.log("numbers in the collection:" + numbers.join(">") + "> null");
         }
}

let myCollection = new NumberCollection();
for(let i = 0; i < 8; i++){
    myCollection.addNumber(i);
}

myCollection.addNumber(9);

 myCollection.showNumbers();

console.log(myCollection.findNumber(6));
console.log(myCollection.findNumber(7));
 console.log(myCollection.removeNumber(1));
 myCollection.showNumbers();

console.log(myCollection.findNumber(55));
 myCollection.showNumbers();



