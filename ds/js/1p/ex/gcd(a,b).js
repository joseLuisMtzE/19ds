
//complejidad O(n)
console.log("MCD (Maximo Comun Divisor)")

  function gcd(a,b){
      console.log('Calculando...')
      var r=0;
      while(a%b != 0){//
          r = a%b;
          a=b;
          b=r;
      }
      return console.log('Maximo Comun Divisor= '+b);
  }
  gcd(59,1856)
  gcd(36,6)

  