let visitados =
    [
        {
            id: "1",
            name: "Cafetera Moulinex",
            descuento: 40,
            price: 6770,
            image: "images/img-cafetera-moulinex.jpg"


        },

        {
            id: "2",
            name: "MacBook Pro 2019",
            descuento: 20,
            price: 230000,
            image: "images/img-macbook-pro-2019.jpg"
        },


        {
            id: "3",
            name: "Samsung Galaxy S10",
            descuento: 10,
            price: 70500,
            image: "images/img-samsung-galaxy-s10.jpg"
        },

        {
            id: "4",
            name: "SmartTv Samsung 43",
            descuento: 10,
            price: 23000,
            image: "images/img-tv-samsung-smart.jpg"
        }
    ]

//iterando sobre el array
    console.log(visitados )
    visitados.forEach(function(visita){
        console.log(visita.name)
    })
//buscando valores dentro del array
    visitados.forEach(function(producto){
        if (producto.name === 'Samsung Galaxy S10'){
            console.log('encontrado')
        }
    })
//aplicando el metodo filter tienen la particuladridad junto con map de devolver siempre con return 
let precioMayor = visitados.filter(function(visita){
return visita.price > 20000
})

console.log(precioMayor)

