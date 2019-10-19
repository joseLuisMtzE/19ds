class Factorial {
    constructor(n) {
        this.n = n
        this.cont = 0
    }

    getValue(n) { //valor del fac
        this.cont++
        if (n == 0) {
            return 1
        } else {

            return n * this.getValue(n - 1);

        }
    }

    /*var total = 1;        
        for (var i=1; i<=n; i++) {
            total = total * i; 
        }    
    return total*/

    getCost(n) { //numero de llamadas recursivas
        this.cont = 0
        this.getValue(n)
        return this.cont
    }
    getSuccession(n) { //array con cada fact
        //imprimir sucesion de factorial
        var total = 1;
        let arr = []
        for (var i = 1; i <= n; i++) {
            total = total * i;
            arr.push([total])
            //console.log(total)
        }
        return arr

    }
    getTable(n) { //array con costo y valor
        //imprimir sucesion de factorial
/*
        let tab = ["Costo", "Valor"]
        for (var i = 1; i < n; i++) {
            tab[i]=this.getCost(i)
            for (var k = 1; k < n; k++) {
                tab[i][k]=this.getSuccession(i)
            }
        }
        return tab
*/
        var total = 1,cost=0;
        console.log("Costo || Valor \n");        
            for (var i=1; i<=n; i++) {
                cost=this.getCost(i-1)
                total = total * i; 
                console.log(cost +" || "+total);
            }
        return "Done..."

    }
}

var fact = new Factorial()

fact.getValue(5)
//fact.getCost(5)
//fact.getSuccession(5)
//fact.getTable(5)