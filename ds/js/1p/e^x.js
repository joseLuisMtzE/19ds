
console.log("e^x")
var iter=0;//variable de iterar
var n=9;//limite
var x=1,s=0,fact;

function factorial (v) { //Funcion Factorial
    var total = 1; 
    for (i=1; i<=v; i++) {
        total = total * i; 
    }
    return total; 
}

//x^i/i!
for(let i=0;i<=n;i++){
    fact=factorial(i)
    s=s+(Math.pow(x,i)/fact);
    console.log(s)
}
