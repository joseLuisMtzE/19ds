
function fib(n){
  var a = 1, b = 0, auxiliar;

  for(i=n;n >= 0;n--)
  {
    auxiliar = a; //copia en var aux
    a = a + b;
    b = auxiliar;
  }

  return b;
}
fib(5)

