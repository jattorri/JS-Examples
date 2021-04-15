let micallback = function(){
    console.log('viejo trolo')
}


let micallbackFlecha = () => console.log('viejo trolo en fleacha')


setTimeout(micallback, 2000)
setTimeout(function(){console.log('hola puta')}, 4000)