function linkedList() {
    let length = 0;     //list doesn't contain anything yet
    let head = null;

    const Node = function(element) {
        this.element = element;     //defining variables for future use
        this.next = null;           //last node in list is always null, so next currently points to null
    };

    this.size = function() {
        return length;      //gives length of list
    };

    this.head = function() {
        return head;        //gives first node in list
    };

    this.add = function(element) {
        let node = new Node(element);   //pass element into list
        if(head === null) {             //if there are nodes in the linked list
            head = node;                //create new node pointing to head
        }
        else {                          //otherwise, there are elements in the list
            let currentNode = head;     //start at the beginning of list 
            while(currentNode.next) {   //while there is a next node
                currentNode = currentNode.next; //hop to the next node; go through list
            }
            currentNode.next = node; //gets to the last node at the list and add the node to it
        }
        length++;   //increase length of list
    };

    this.remove = function(element) {   //pass element that you want to remove
        let currentNode = head;         //start at the head
        let previousNode;               //must know previous node
        if(currentNode.element === element) {   //if head node is element we're trying to remove
            head = currentNode.next;            //head pointer points to next node, thereby removing head
        }
        else {
            while(currentNode.element !== element) {    //while the node we're on is not the one we want to remove
            previousNode = currentNode;
            currentNode = currentNode.next;             //jump to next node until we find the one we want
        }
            previousNode.next = currentNode.next;       //reset node after previous to be node after next (removes)
        }
        length--;                                       //decrement length
    };

    this.isEmpty = function() {
        return length === 0;        //returns true or false
    };

    this.indexOf = function(element) {
        let currentNode = head;     //start at beginning
        let index = -1;
        while(currentNode) {        //while there is a current node
            index++;                //increment index
            if(currentNode.element === element) { //if first element = element we passed in
            return index;
            }
            currentNode = currentNode.next;      //else move to next node
        }
        return -1;      //return -1 if element passed in is not in list
    };

    this.elementAt = function(index) {      //finding element at an index (opposite of above)
        let currentNode = head;
        let count = 0;
        while(count < index) {              //while we haven't gotten to the index we're searching for
            count++;
            currentNode = currentNode.next; //keep going to each node in the list
        }
        return currentNode.element;         //return element at that index
    };

    this.addAt = function(index, element) {     //add anywhere in list, pass in specified index
        let node = new Node(element);
        let currentNode = head;
        let previousNode;
        let currentIndex = 0;
        if(index > length) {        //passed in index larger than list
            return false;
        }
        if(index === 0) {           //add element to head node
            node.next = currentNode;
            head = node;
        }
        else {
            while(currentIndex < index) {
            currentIndex++;                 //go through each index until we get to the spot we want
            previousNode = currentNode;     //keep track of previous node
            currentNode = currentNode.next;
        }
            node.next = currentNode;
            previousNode.next = node;       //set previous node = node we're passing in
        }
        length++;
    };

    this.removeAt = function(index) {
        let currentNode = head;
        let previousNode;
        let currentIndex = 0;
        if(index < 0 || index >= length) { //cannot remove negative index or index > length of list
            return null;
        }
        if(index === 0) {       //removes head node
            head = currentNode.next;
        }
        else {
            while(currentIndex < index) {   //same as addAt, but removes and decrements length
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
        return currentNode.element;
    }
};

//test cases
let pets = new linkedList();
pets.add('Kitten');
pets.add('Puppy');
pets.add('Dog');
pets.add('Cat');
pets.add('Fish');
console.log(pets.size());
console.log(pets.removeAt(3));
console.log(pets.elementAt(3));
console.log(pets.indexOf('Puppy'));
console.log(pets.size());
