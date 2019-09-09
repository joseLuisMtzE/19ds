
console.log("Senx")

var n=10;//limite
var x=2,s=0,fact;

function factorial (v) { //Funcion Factorial
    var total = 1; 
    for (i=1; i<=v; i++) {
        total = total * i; 
    }
    return total; 
}
/*function alt(i){
    if(i%2===0) return 1;
    else return -1;
}
for(let i=0;i<10;i++){
    console.log(alt(i))
}*/

//x^i/i!
for(let i=1;i<=n;i+=2){
    fact=factorial(i)
    pot= Math.pow(x,i)
    s=s+(pot/fact);
    //console.log(pot, fact, s)
    if(i==(i%1)){
        res= s*-1;
        console.log("-")
        console.log(res);
    }
    else{
        res= s*1;
        console.log(res);
    }
    
}
