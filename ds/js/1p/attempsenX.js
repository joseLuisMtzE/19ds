
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
for(let i=1;i<=n;i++){//

    if(i%2==1){
        console.log("impar= "+ i)    
        cont=cont+1;//2
        if(cont==1){
            sumador=x
        }
        if(cont == 3||5){
            console.log('suma')
            resultado= (Math.pow(x,i)/factorial(i))
            console.log("resultado-suma "+resultado)
            sumador=sumador+resultado
            console.log("sumador- suma "+sumador)
        }if(cont == 2||4){
            console.log('resta')
            resultado= Math.pow(x,i)/factorial(i)
            sumador=sumador-resultado
            console.log("resultado-resta= "+ resultado)
            console.log("sumador-resta= "+ sumador)
        }
        //console.log(cont)
        

    }
    
    //console.log(cont)
    /*else{
        console.log("par")
    }*/
}console.log("SenX= "+sumador)