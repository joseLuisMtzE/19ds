//PUT
class Node{
    constructor(d){
        this.data=d
        this.next=null
    }
}
class List{
    constructor(a,d){
        this.head=a
        this.tail=d
        this.head.next=this.tail
        this.size=2
    }   
    insertHead(a){
        a.next=this.head
        this.head=a
       this.size++
    }
    insertTail(a){
        this.tail.next=a
        this.tail=a
        this.size++
    }
    size(){
        return this.size
    }
    deleteHead(){
        let variable=0
        variable=this.head.next
        this.head.next=null
        this.head=variable
        size--
    }
    deleteTail(){
        let nex=this.head
        for (var i=0;i<(this.size-2);i++){
            nex=nex.next
            console.log(nex)
        }
        this.tail=nex
        size--
    }
    toString(){
        let a=[]
        let th=this.head
        for(var i=0;i<this.size;i++){
            a.push(th.data)
            th=th.next
        }
        return a;
    }
}


var n1= new Node(1);
var n2= new Node(2);
var n3= new Node(3);
var n4= new Node(4);
var l= new List(n1,n2);

console.log(l.insertHead(5))
console.log(l.insertTail(9))
console.log(l.size())
console.log(l.deleteHead())
console.log(l.deleteTail())
console.log(toString())
