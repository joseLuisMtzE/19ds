class Vector {
    constructor(a) { //utilizar el vector de get row, get col
        this.a = a
        this.result=[]
    }
    sum(b) { //se sumara con el vector del constructor
        console.log("Suma terminada...")
        this.b = b
        for (var i = 0; i < this.a.length; i++) {
            this.result[i] = this.a[i] + this.b[i]
        }
        return this.result
    }
    subt(b) {
        console.log("Resta terminada...")
        this.b = b
        for (var i = 0; i < this.a.length; i++) {
            this.result[i] = this.a[i] - this.b[i]
        }
        return this.result
    }
    mul(b) {
        console.log("Multiplicacion terminada...")
        this.b = b
        for (var i = 0; i < this.a.length; i++) {
            this.result[i] = this.a[i] * this.b[i]
        }
        return this.result
    }
    getVec(){
        return this.result
    }
}

var vec = new Vector([1, 2, 3, 4])
//vec.sum([1, 1, 1, 1])
//vec.subt([1,1,1,1])
//vec.mul([2,2,2,2])