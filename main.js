/* FIFO else Queue */
class FIFO {
    constructor() {
        this.queue = []
    }
    add(el){
        this.queue.push(el)
    }
    extract(){
        if(this.queue.length <= 0) return console.log("the queue is empty") 
        let el = this.stack[0]
        this.queue.shift()
        return el
    }
    getSize() {
        return this.stack.length
    }
}
/* LIFO else Stack*/
class LIFO {
    constructor() {
        this.stack = []
    }
    add(el) {
        this.stack.push(el)
    }
    extract() {
        if(this.stack.length < 0) return console.log("the stack is empty")
        let el = this.stack[this.stack.length - 1]
        this.stack.pop()
        return el
    }
    getSize() {
        return this.stack.length - 1
    }
}

/** 
 An example of implementing FIFO and LIFE queues based on an array.
 A better choice for such data structures would be to use a linked list. 
 An example of the implementation is below. 
**/

class Node {
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}
class linkedList {
    constructor(){
        this.head = null
        this.tail = null
    }
    unshift(el){
        let newNode = new Node(el)
        if(this.head === null) { this.head = this.tail = newNode } else {
            let temp = this.head
            this.head.prev = newNode
            this.head = newNode   
            this.head.next = temp 
            this.head.prev = null 
        }
    }
    push(el) {
        let newNode = new Node(el)
        if(this.head === null) { this.head = this.tail = newNode } else {
            let temp = this.tail
            this.tail.next = newNode
            this.tail = newNode
            this.tail.prev = temp
            this.tail.next = null
        }
    }
    pop(){
        if(this.head === null) return console.log("is empty")
        if(this.head.next === null) { 
            this.head = this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }
        
    }    
    shift(){
        if(this.head === null) return console.log("is empty")
        if(this.head.next === null) {
            this.head = this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
        }        
    }
    toArr() {
        let arr = []
        let temp = this.head
        while (temp) {
            arr.push(temp)
            temp = temp.next
        }
        return arr
    }
}


/* Implementation of FIFO and LIFO using a bidirectional linked list. */
class newFIFO extends linkedList{
    add(el){
        super.push(el)
    }
    extract(){
        super.shift()
    }
    get() {        
        return super.toArr()
    }
}
class newLIFO extends linkedList{
    add(el){
        super.push(el)
    }
    extract(){
        super.pop()
    }
    get() {        
        return super.toArr()
    }
}


var longestCommonPrefix = function(strs) {
    if(!strs.length) return ""
    let minStr = strs[0]
    let result = ""
    for(let i = 0; i < strs.length; i++){
        if(strs[i].length < minStr.length) {
            minStr = strs[i]
        }
    }
    console.log(strs[0])
    for(let j = 0; j < strs.length; j++){
        console.log(strs[j])
        // for(let j = 0; j < minStr.lenght; j++){            
        //     if(strs[i][j] == minStr[j]){                
        //         result += strs[i][j]
        //     }
        // }
    }
    return result
};
longestCommonPrefix(["flower","flow","flight"])
