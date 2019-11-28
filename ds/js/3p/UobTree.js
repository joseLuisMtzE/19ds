class Node {
    constructor(d) {
      this.data = d
      this.left = null
      this.right = null
    }
  }

class uobTree{
    constructor(tree){
        this.tree=tree
    }
    insert(n){
        if(n.data>this.tree.data){
            this.tree.right= n;
        } else{
            this.tree.left = n;
        }
    }
    remove(n){
        n.data=null
        n.left=null
        n.right=null
    }
    postOrder(tree=this.tree){//traversal LRN       
        if(tree.left){
            this.postOrder(tree.left)
        }
        if(tree.right){
            this.postOrder(tree.right)
        }
        if(tree.data){
            console.log(tree.data)
        }
    }
    bft(tree = this.tree){//breadth-first
        console.log(tree.data)
        if(tree.left)
        this.bft(tree.left)
        if(tree.right)
        this.bft(tree.right)
    }
} /*  ARBOL DE MANERA GRAFICA
          A
        /   \
       B     C
      / \   / \
     D   E F  
*/
//CREACION DE NODOS
var a = new Node("a")                   
    var b = new Node("b")
        var d = new Node("d")
        var e = new Node("e")

    var c = new Node("c")
        var f = new Node("f")
  

//CONEXIONES DE NODOS
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
//c.right = g;

var tree= new uobTree(a)

console.log("------- UOB Tree -------")
console.log(tree) //VER ARBOL

/*console.log("Se borrara el nodo f...")
console.log(tree.remove(f)) //BORRAR NODO F
console.log(tree)*/

console.log(tree)
console.log("PostOrder antes de borrar D...")
tree.postOrder(a) //POST ORDER
console.log("Se eliminara el nodo D")
tree.remove(d)  //BORRAR NODO D
console.log(tree)
console.log("PostOrder despues de borrar D...")
tree.postOrder(a) //POST ORDER
console.log("----BreathFirst----")
console.log(tree.bft(a)) //BREATH FIRST
