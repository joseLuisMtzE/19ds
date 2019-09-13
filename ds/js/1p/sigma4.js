console.log("Σ i^k")
console.log("(variable: 1 con limite: "+n+")")

var iter=1;//variable de iterar
var n=10;//limite
var s=0,k=3;


for(let i=1;i<=n;i++){
    s=s+Math.pow(i,k);
}

console.log("Σ= "+s);
console.log("Formula Exacta: ");
console.log("Aproximado: (1/k+1)*(n^(k+1))= "+((1/(k+1))*Math.pow(n,(k+1))));
console.log("--------------------------------------");
