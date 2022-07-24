let numeroIngresado = parseInt(prompt("Ingrese un numero"));

tabla(numeroIngresado);

function tabla(numero) {
  document.write(`<table>
    <tbody>`);

  for (i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.write(`<tr>`);
    
    document.write(`<td> ${resultado} </td>`);
  }
}
document.write(`</tbody>
</table>`);




