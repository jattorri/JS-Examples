let producto =
{
    id: "4",
    name: "SmartTv Samsung 60",
    descuento: 10,
    price: 23000,
    image: "images/img-tv-samsung-smart.jpg"
}

let { id,descuento} = producto
console.log(id)

let clubesA=['boca', 'tomba', 'viejo choto' ]
let clubesB=['river','boca']

let todos = [...clubesA, ...clubesB]
console.log(todos)


let auto = {
    marca: 'Ford',
    km: 1000,
    anio: 2020
}
let corredorUno = {
    nombre:'Maria',
    edad: 40,
    ...auto
}

let corredorDos ={
    nombre:'Juan',
    edad: 28,
    ...auto
}

console.log(corredorUno.marca)
console.log(corredorUno.km)