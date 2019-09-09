
var n=10;//limite
var s=0
console.log("Σ i")
console.log("(variable: 1 con limite: "+n+")")


for(let i=1;i<=n;i++){
    s=s+i;
}
console.log("Σ= "+s)
console.log("Formula Exacta: n*(n+1)/2= "+(n*(n+1)/2));
console.log("Aproximado: 1/2*(n^2)= "+((1/2)*(n*n)));
console.log("--------------------------------------");
