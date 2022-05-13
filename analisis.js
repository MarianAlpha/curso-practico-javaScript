// Helpers

function esPar(numerito) {
    return (numerito%2 === 0);
}


// Mediana General

const salariosCol = colombia.map(
    function(personita) {
        return personita.salary
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA,salaryB) {
        return salaryA-salaryB;
    }
);


function medianaSalarios(lista) {
    const mitad = parseInt(lista.length/2);

    if(esPar(lista.length)) {
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];

        return ((personaMitad1+personaMitad2)/2);
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana top 10%

const spliceStart = (salariosColSorted.length * 90)/100;
const spliceCount = (salariosColSorted.length - spliceStart);

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount); //Cortar inicio - tajadas

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});