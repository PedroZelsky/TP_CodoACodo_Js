
const form = document.getElementById('formulario');
const Cantidad = form.elements['Cantidad'];
const Categoria = form.elements['Categoria'];


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valorentrada=200;
    let descuento=0;
    let CantidadValor = Cantidad.value;
    let CategoriaValor = Categoria.value;
    switch(CategoriaValor){
        case '1':
            descuento=valorentrada*0.8;
            break;
        case '2':
            descuento=valorentrada*0.5;
            break;
        case '3':
            descuento=valorentrada*0.15;
            break;
        default:
            console.log('valor no seleccionado');
    }

    precio=CantidadValor*(valorentrada-descuento);

    document.getElementById('mostrarTotal').innerHTML='Total a Pagar: $'+precio;
});

form.addEventListener('reset', (event) => {
    document.getElementById('mostrarTotal').innerHTML='Total a Pagar: $'+0;
});

