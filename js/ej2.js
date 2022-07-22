let sumaPais = [];

while (confirm("¿Quiere ingresar un pais?")) {
  let pais = [prompt("Ingresa el nombre de un Pais")];
  sumaPais.push(pais);
  document.write(`<ul>`);

  for (cantPais = 0; cantPais < pais.length; cantPais++) {
    document.write(`<li> ${pais[cantPais]} </li>`);
  }
  document.write(`</ul>`);
}
document.write(`<h4> Longitud del arreglo  </h4>`);
document.write(sumaPais.length);

document.write(
  `<h4> Items de la primera tercera y ultima posicion del arreglo</h4>`
);


document.write(sumaPais[0] + "-");
document.write(sumaPais[2] + "-");
document.write(sumaPais[sumaPais.length - 1]);

document.write(
  `<h4> Agregar un Items nuevo al final del arreglo "Paris"</h4>`
);

let nuevo = sumaPais.push ("Paris")
document.write(`<ul>`)
for (cantPais = 0; cantPais < sumaPais.length; cantPais++) {
  document.write(`<li> ${sumaPais[cantPais]} </li>`);
}

document.write(`</ul>`)

document.write(
  `<h4> Elemento que ocupa la segunda posicion</h4>`
);

document.write(sumaPais[1])

document.write(
  `<h4>Sustituyo el elemento de la segunda posicion por Barcelona</h4>`
);

sumaPais.splice(1,1,"Barcelona")
document.write(`<ul>`)
for (cantPais = 0; cantPais < sumaPais.length; cantPais++) {
  document.write(`<li> ${sumaPais[cantPais]} </li>`);
}

document.write(`</ul>`)



