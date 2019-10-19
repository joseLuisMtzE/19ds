    class Matrix {
        constructor(r, c) {
            this.r = r;
            this.c = c;
            this.matriz = [];
            this.init()
        }
        init() {
            for (var i = 0; i < this.r; i++) {
                this.matriz[i] = []
                for (var k = 0; k < this.c; k++) {
                    this.matriz[i][k] = 0
                }
            }
            return this.matriz
        }
        initRandom() { //inicializar matriz con numeros random

            for (var i = 0; i < this.r; i++) {
                this.matriz[i] = []
                for (var k = 0; k < this.c; k++) {
                    this.matriz[i][k] = Math.random()
                }
            }
            return this.matriz

        }
        getRow(numR) { //obtener Renglon/Fila
            this.numR = numR;
            for (var i = 0; i < this.numR; i++) {
                this.row = [this.matriz[i]]
            }
            return this.row
        }
        getCol(numC) { //Obtener Columna
            this.numC = numC;
            let col=[]
            for (var i = 0; i < this.r; i++) {
                col.push([this.matriz[i][this.numC]])
            }
            return col
            /*this.numC=numC;
            for (var i = 0; i < this.r; i++) {
                for (var k = 0; k < numC; k++) {
                this.col=[this.matriz[i][k]]
                }
                
            }*/
            return this.col
        }
        isSquare() { //mismas filas y columnas
            if (this.r == this.c) {
                return true
            } else {
                return false
            }
        }
        isSymetric() { //ver si la posicion 1,0 es igual que 0,1  || debe ser cuadrada
            if (this.isSquare() == true) {
                for (var i = 0; i < this.r; i++) {
                    for (var k = 0; k < this.c; k++) {
                        if (this.matriz[i][k] != this.matriz[k][i]) {
                            return this.isSymetric = true
                        }
                    }
                }
            } else {
                return this.isSymetric = false
            }
        }
        initIdentity(){
            let newArr = new Array(this.r);
            for (let i = 0; i < this.r; i++) {
                newArr[i] = new Array(this.c);
                for (let j = 0; j < this.c; j++) {
                    newArr[i][j] = 0;
                }
            }
            for(let i = 0; i < this.matriz.length; i++){
                newArr[i][i] = 1;
            }
            return newArr;
        }
        isIdentity() { //true, false  || Debe ser cuadrada  ||  
            if(this.isSquare()==true){
                if(this.array == this.initIdentity()){
                    return true;
                } else {
                    return false;
                }
            }else{
                return false
            }
        }
        getMatrix() {
            return this.matriz
        }
    }

    var mat = new Matrix(5, 3)
    var x = new Matrix(3, 3)