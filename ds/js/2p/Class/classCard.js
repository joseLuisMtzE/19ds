class Cartas {
    constructor() {
        this.arr = new Array(14)
        this.cont = 0
        for (var i = 0; i < 14; i++) {
            this.arr[i] = new Array(4)
            for (var c = 0; c < 4; c++) {
                if (i == 0) {
                    if (c == 0) {
                        this.arr[i][c] = 'Trebol'
                    }
                    if (c == 1) {
                        this.arr[i][c] = 'Diamantes'
                    }
                    if (c == 2) {
                        this.arr[i][c] = 'Corazones'
                    }
                    if (c == 3) {
                        this.arr[i][c] = 'Picas'
                    }
                } else {
                    this.arr[i][c] = this.cont
                }
            }
            this.cont++
        }
    }
    printNumero(n, u) {
        let v = 0
        if (n == 'Trebol') {
            v = 0
        }
        if (n == 'Diamantes') {
            v = 1
        }
        if (n == 'Corazones') {
            v = 2
        }
        if (n == 'Picas') {
            v = 3
        }
        let s = 1

        for (var i = 1; i < 14; i++) {
            for (var c = 0; c < 4; c++) {
                if (c == v && this.arr[i][c] == u) {
                    return s
                }
                s++
            }
        }
    }
    printCard(cont) {
        let s = 0
        let v = 0
        let a = new Array
        for (var i = 1; i < 14; i++) {
            for (var c = 0; c < 4; c++) {
                s++
                if (s == cont) {
                    a.push(this.arr[i][c])
                    if (c == 0) {
                        v = 'Trebol'
                    }
                    if (c == 1) {
                        v = 'Dimanates'
                    }
                    if (c == 2) {
                        v = 'Corazones'
                    }
                    if (c == 3) {
                        v = 'Picas'
                    }
                    a.push(v)
                }
            }
        }
        return a
    }
    threeOfAKind() {
        return ((54912) / (fact(52) / (fact(47) * fact(5)))) * 100 + '%'

        function fact(z) {
            if (z <= 1) {
                return 1
            } else {

                return z * fact(--z)
            }
        }
    }
    getArr() {
        return this.arr
    }
}
let card = new Cartas()
console.log(card.getArr())
console.log(card.printNumero('Corazones', 3))
console.log(card.printCard(49))
console.log(card.threeOfAKind())