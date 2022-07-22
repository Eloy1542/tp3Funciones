let pedirNumero = parImpar(parseInt(prompt("Ingrese un numero")))

// parImpar(pedirNumero)

function parImpar(numero){
    if(numero%2 ===0 ){
        document.write("El numero es par")
    }else{
        document.write("El numero es impar")
    }
}