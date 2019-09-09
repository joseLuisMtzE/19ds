
//complejidad O(n)

  function gcd(a,b){
      var r=0;
      while(a%b != 0){//
          r = a%b;
          a=b;
          b=r;
      }
      return b;
  }
  gcd(20,48)