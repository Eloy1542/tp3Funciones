let parrafo = tipoLetra(prompt("Ingrese un texto"))

// tipoLetra(parrafo)

function tipoLetra(texto){

if(texto === texto.toUpperCase()){
    document.write("El texto esta en MAYUSCULAS")
}else if(texto === texto.toLowerCase()){
    document.write("El texto esta en MINUSCULAS")
}else{
    document.write("El texto tiene MAYUSCULAS Y MINUSCULAS")
}
}