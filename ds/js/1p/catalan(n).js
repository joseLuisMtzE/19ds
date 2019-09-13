//C(2n,n) / (n+1)

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

function combinacion(n,r){
    denominador= factorial(r)
    numerador= permutacion(n,r)
    resultado=(numerador/denominador)
    return resultado;
}

function catalan(n){
    mul=2*n
    combi = combinacion(mul,n) / (n+1)
    return combi

}

catalan(5)
//252   