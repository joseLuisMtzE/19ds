
var base=prompt("Introduzca la base logaritmica deseada:")
console.log("Log"+base+" X")
for(let i=1;i<=10;i++){
    console.log("Log "+base+" "+i+" = "+ (Math.log(i)/Math.log(base)))
}