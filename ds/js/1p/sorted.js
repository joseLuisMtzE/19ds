//O(n^2)
let vector = [3,2,1],
    vecAux = 0;
console.log(vector)

for (let i = 0; i < vector.length; i++) {
    for (let k = 0; k < vector.length - 1; k++) {
        if (vector[i + 1] <= vector[k]) {
            vecAux = vector[i + 1];
            vector[i + 1] = vector[k]
            vector[k] = vecAux
        }
    }
}

console.log(vector)