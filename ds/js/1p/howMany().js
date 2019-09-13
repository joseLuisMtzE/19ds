let vec1 = [80, 8, 90, 80, 90]

function repetidos(vec1) {
    vec2 = vec1;
    let valorRepetido = [],
        repetidos = [],
        index1 = [],
        index2 = [];
    for (let i = 0; i < vec1.length; i++) {
        contador = 0;
        for (let k = 0; k < vec2.length; k++) {
            if (vec1[i] == vec2[k] && i != k && index2[i] != i && index1[k] != k) {
                contador++;
                index1[i] = i
                index2[k] = k
            }
        }
        valorRepetido.push(vec1[i])
        repetidos.push(contador)
    }
    let matriz = []
    for (let t = 0; t < valorRepetido.length; t++) {
        if (repetidos[t] != 0 && !isNaN(repetidos[t]) && typeof repetidos[t] === 'number') {
            matriz.push(valorRepetido[t])
        }
    }
    return matriz;
}
console.log(repetidos(vec1))