

while(confirm("¿Quiere ingresar un pais?")){

    let pais = [prompt("Ingresa el nombre de un Pais")];

    document.write(`<ul>`);
    for (cantPais = 0; cantPais < pais.length; cantPais++) {
      document.write(`<li>${pais[cantPais]} </li>`);
    
    }
    
    document.write(`</ul>`);


}


document.write (`<h3> Longitud arreglo </h3>`)
