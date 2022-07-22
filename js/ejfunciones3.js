let lado1 = parseInt(prompt("Ingrese el valor de un lado del rectangulo"))
let lado2 = parseInt(prompt("Ingrese el valor del segundo lado del rectangulo"))

document.write(perimetro(lado1,lado2))



function perimetro(a,b){

let resultado = 2*(a+b);
return ("El perimetro del rectangulo es :" + resultado)
}