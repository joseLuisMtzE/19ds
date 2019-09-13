var iter=1;//variable de iterar
var n=10;//limite
var s=0,a=2;

console.log("Σ a^i")
console.log("(variable: 0 con limite: "+n+")")


if(a!=1){//validacion
    for(var i=0;i<=n;i++){
        s=s+Math.pow(a,i);
    }
    
console.log("Σ= "+s);
console.log("Formula Exacta: (a^(n+1)-1)/a-1= "+(Math.pow(a,(n+1))-1/(a-1)));
console.log("Aproximado: (2^i)= "+Math.pow(2,i));
console.log("--------------------------------------");
}else{
    console.log("NoJALA")
}


