// Numeros primos del 1 al 100

let c = 100;
let numPrimos = [];

function primo(n) {

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n !== 1;
}

function imp(num){
  let r=0;
  for (var j = 2; j < c; j++) {

    if (primo(j)) {
      numPrimos.push(j);
    }
  }
  r=numPrimos[num];
  return r;
}

let aux=parseInt(prompt('Ingresa un numero: ',0));
console.log("El "+ aux +"° numero primo es: "+imp(aux-1));