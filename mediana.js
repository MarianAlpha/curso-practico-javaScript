function esPar(numero) {
    if (numero%2 === 0) {
        return true;
    } else {
        return false;
    }
};

function calcularMediana(lista1) {
       
    lista1.sort((a,b) => a-b);
    console.log(lista1);
    const mitadLista = parseInt(lista1.length/2); //ParseInt convierte a entero
    let mediana;
    if (esPar(lista1.length)) {
        const elemento1 = lista1[mitadLista-1];
        const elemento2 = lista1[mitadLista];
        return (elemento1+elemento2)/2
    } else {
        return lista1[mitadLista];
    };
}

const lista1 = [
    4000000,
    100,
    500,
    200,
];

mediana = calcularMediana(lista1);
console.log(mediana);