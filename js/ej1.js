let meses =  ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
document.write(`<h3> Los meses son: </h3>`)
document.write(`<ul>`)

for(let cantMeses = 0; cantMeses< meses.length; cantMeses++){
    document.write(`<li>${meses[cantMeses]} </li>`)
}

document.write(`</ul>`)