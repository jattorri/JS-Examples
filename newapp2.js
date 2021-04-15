let colores =['rojo', 'verde', 'amarillo']
let miProducto ={
    id: "1",
    name: "Cafeteria viejoChoto",
    descuento: 40,
    precio: 200,
    image: "rutadelaimagen"

}

console.log(colores)
//USO FOREACH 
//sin iterador
colores.forEach(function(){})
//con iterador 
colores.forEach(function(color){console.log(color)})
//condicional dentro del foreach
colores.forEach(function(color){
    if(color === 'rojo'){
        console.log('encontrado')
    }
})

console.log(miProducto)

console.log(miProducto.id)

