// Este es el codigo del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
};
//console.log("El perimetro del cuadrado es de: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
};
console.log("El area del cuadrado es de: " + areaCuadrado + "cm^2");

console.groupEnd();

// Este es el codigo del triangulo

console.group("Triangulo");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Lados del triangulo miden " 
    + ladoTriangulo1 + "cm,"
    + ladoTriangulo2 + "cm," 
    + baseTriangulo+"cm"); */

function perimetroTiangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
}
console.log("El perimetro del Triangulo de: " + perimetroTiangulo + "cm");

function altura(lado1,lado2,base){
    return Math.sqrt(lado2**2-(base/2)**2);
}
console.log("La altura del triangulo es de: " + altura + "cm");


function areaTiangulo(base,altura){
    return (base * altura)/2;
}; 
console.log("El area del triangulo es de: " + areaTiangulo + "cm^2");

console.groupEnd();

// Este es el codigo del Circulo
console.group("Circulo");

function perimetroCirculo(radio) {
    const pi = Math.PI;
    return 2*pi*radio;
}; 
console.log("El perimetro del Circulo es de: " + perimetroCirculo + "cm");

function areaCirculo(radio) {
    const pi = Math.PI;
    return pi*(radio**2);
} 
console.log("El area del Circulo es de: " + areaCirculo + "cm^2");

console.groupEnd();


// Aqui interactuamos con el html
function calcularPerimertroCuadrado(){
    const input = document.getElementById("ImputCuadrado");
    const value = input.value;                               //Llamar el valor que escribieron los usuarios en la pg

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado(){
    const input = document.getElementById("ImputCuadrado");
    const value = input.value;                               //Llamar el valor que escribieron los usuarios en la pg
    
    const area = areaCuadrado(value);
    alert(area);
}

function valorInput(input){
    const value = input.value;                               //Llamar el valor que escribieron los usuarios en la pg
    return value;
}

function calcularAlturaTriangulo() {
    
    const input = document.getElementById("inputLado1");
    const valorLado1 = valorInput(input);
        
    const input1 = document.getElementById("inputLado2");
    const valorLado2 = valorInput(input1);

    const input2 = document.getElementById("inputBase");
    const valorBase = valorInput(input2);
    
    if(valorLado1 == valorLado2 && valorLado1 == valorBase && valorLado2==valorBase) {
        const alt = altura(valorLado1, valorLado2, valorBase);
        alert(alt);
    }
    else {
        alert(valorLado1)
        alert("Ingrese un triangulo isoceles");
    }
}