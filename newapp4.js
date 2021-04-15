let numeros = [2,4,6]

//REDUCE tiene dos valores 
let nuevoValor= numeros.reduce(function(acum,num){return acum + num})

console.log(nuevoValor)
//funcionMAP
let double = numeros.map(function(num){
    return num * 2
})

console.log(double)



