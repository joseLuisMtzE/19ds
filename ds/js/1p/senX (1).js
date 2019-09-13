//10 sen x	 = +x - x^3/3! + x^5/5! - x^7/7! + x^9/9!...



var n=10;//limite
var x=90,resultado=0,fact,pow,cont=0, sumador=0
console.log("Senx = Sen"+x)
function factorial (n) {
    var total = 1; 
    for (i=1; i<=n; i++) {
        total = total * i; 
    }
    return total; 
}

for(let i=1;i<=n;i+=2){
    cont=cont+1
    fact=factorial(i)
    pow= Math.pow(x,i)
    resultado=pow/fact;
    if (cont %2 == 0){
        sumador = sumador - resultado;
    } else {
        sumador = sumador + resultado;
    }

}
console.log("SenX= "+ sumador)