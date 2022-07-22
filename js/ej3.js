// usar match random para obtener los numeros aleatorios.


let sumas = [];

for(let i=0; i<50 ; i++){
    let dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let resultado = dado1 + dado2;
    sumas.push(resultado)
}

document.write(sumas)