var valores = [2,5,7,8,9,3]
/*valores.sort()
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])*/

valores.sort()
console.log(valores)
/*
for (var pos=0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}



/*for (var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
/*
for (var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
