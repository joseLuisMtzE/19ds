
 //P(n,r) = n! / (n-r)!
function factorial (n) {
    var total = 1; 
    for (i=1; i<=n; i++) {
        total = total * i; 
    }
    return total; 
}

function permutacion(n,r){
    fact= factorial(n)
    resta= n-r
    resultado=(fact/factorial(resta))
    return resultado;
}

permutacion(8,5)
    