
const cantidadEntradas = document.getElementById('cantidadEntradas');

const btnResumen = document.getElementById('cantidadEntradas');

const categoria = document.getElementById('selectCatgoria');

const TotalAPagar = document.getElementById('TotalAPagar');

function selectCatgoria(){
    const tarifa = document.getElementById("selectCatgoria").value; 
    alert(tarifa); 
}
function resumen() {
    console.log(categoria.value);

    console.log(cantidadEntradas.value);

    cantidadEntradas.value;
    
switch(categoria.value) {
    case "Estudiante":
        TotalAPagar.innerHTML=cantidadEntradas.value * 1.8;
        break;
    case "Trainee":
        TotalAPagar.innerHTML=cantidadEntradas.value * 1.5;
        break;
    case "Junior":
        TotalAPagar.innerHTML=cantidadEntradas.value * 1.15;
        break;
    default:
        console.log("Debe seleccionar una categoría.");
}

    //totalCompra.style.display="block";

    

}

function descuento() {

}

btnResumen.onclick = resumen;