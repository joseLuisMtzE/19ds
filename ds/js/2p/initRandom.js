/*class matrix{
constructor(r,c){
    this.r = r;
    this.c=c;
}

var matrix = []
} */

//------ 





function initRandom(r, c) {
    var matrix = new Array(r);

    for (i = 0; i < r; i++) {
        matrix[i] = new Array(r)
        for (k = 0; k < c; k++) {
            matrix[i][k] = Math.random()
        }
    }
    return matrix
}
console.log(initRandom(4, 4))
