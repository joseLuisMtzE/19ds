function factorial (n) {
    var total = 1; 
    for (i=1; i<=n; i++) {
        total = total * i; 
    }
    return total; 
}

factorial(parseInt(prompt("Ingresa numero para aplicar funcion factorial:")))