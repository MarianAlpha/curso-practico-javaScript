/* const precioOriginal = 120;
const descuento = 18;
 */
/* const porcentajePrecioDescuento = 100 - descuento;
const nuevoPrecio = (precioOriginal*porcentajePrecioDescuento)/100; */

function calcularDescuento(precio,descuento) {
    const porcentajePrecioDescuento = 100 - descuento;
    return (precio*porcentajePrecioDescuento)/100;
}

function calcularProductoConDescuento(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount")
    const discountValue = inputDiscount.value;

    const descuento = calcularDescuento(priceValue,discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: " + descuento;
}
/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioDescuento,
    nuevoPrecio,
}); */ 