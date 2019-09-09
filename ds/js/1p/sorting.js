// ordenamientos

var arr=[2,6,7,4,8]
console.log("Array sin ordenar: \n" + arr)
var max=arr[0],min=arr[0], contador=[], aux=[]

for(i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log(max,min)

var x=min
for(i=0;i<=max-min;i++){
   aux[i]=x++ 
}console.log(aux)
for(i=0;i<aux.length;i++){
    contador[i]=0
}console.log(contador)











// console.log(arr.sort())
// for(i=0;i<arr.length;i++){
//     aux[i]=arr[i]

// }
