class Fibonacci {
    constructor(n) {
        this.n = n;
        this.contador=0
    }
    getValue(n) {
        this.contador++
            if (n < 2) {
                return n;
            } else {
                return this.getValue(n - 1) + this.getValue(n - 2);
            }
    }
    getCost(n) {
        this.contador=0;
        this.getValue(n);
        return this.contador;
    }
    getSuccession() {
        let sucesion = [];
        for (let i = 1; i <= this.n; i++) {
            sucesion.push(this.getValue(i));
        }
        return sucesion;
    }
    getTable() {
        console.log(" f(n)  - Costo - Valor ");
        for (let i = 0; i <= this.n; i++) {
            console.log("f(" + i + ") - " + this.getCost(i) + " - " + this.getValue(i));
        }
    }
}
var f = new Fibonacci(5)
console.log(f.getValue(5)) //5
console.log(f.getCost(5))  //15
console.log(f.getSuccession()) //[ 1, 1, 2, 3, 5 ]
console.log(f.getTable()) // Tabla