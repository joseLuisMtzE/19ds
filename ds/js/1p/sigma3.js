console.log("Σ i^2")
console.log("(variable: 1 con limite: "+n+")")

var iter=1;//variable de iterar
var n=10;//limite
var s=0

for(let i=1;i<=n;i++){
    s=s+Math.pow(i,2);
}

console.log("Σ= "+s);
console.log("Formula Exacta: n(n+1)(2n+1)/6= "+(n*(n+1)*((2*n)+1)/6));
console.log("Aproximado: 1/3*(n^3)= "+((1/3)*(Math.pow(n,3))));
console.log("--------------------------------------");
