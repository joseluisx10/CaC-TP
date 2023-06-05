const cant = document.getElementById("cantidad");
const categoria = document.getElementById("selector");
const formSubmit = document.getElementById("form-submit");
const msjToTalAPAgar = document.getElementById("label-total");
const botonReset = document.getElementById("form-reset");


function calcularTotalAPagar(porcentajeDescuento){
    return (200*cant.value)-((200*cant.value)*porcentajeDescuento/100);
}

botonReset.onclick = function(){
    msjToTalAPAgar.innerHTML = `Total a pagar $`;
}

formSubmit.onclick = function(e)
{
    e.preventDefault()
    let total;
    if(categoria.value === "Estudiante"){
        total = calcularTotalAPagar(80);
    }else if(categoria.value === "Trainee"){
        total = calcularTotalAPagar(50);
    }else{
        total = calcularTotalAPagar(15);
    }

    msjToTalAPAgar.innerHTML = `Total a pagar $<b>${total}</b>`;
}

