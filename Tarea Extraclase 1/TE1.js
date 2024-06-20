class PedidoBase {
    constructor(cliente, fecha){
        this.cliente = cliente;
        this.fecha = fecha;
    }
}

class Pedido extends PedidoBase {
    constructor(cliente, fecha, plato, cantidad){
        super(cliente, fecha);
        this.plato = plato;
        this.cantidad = cantidad;
    }
}

let listaDePedidos = [];

function realizarPedido(){
    let cliente = prompt("Introduzca el nombre del cliente:");

    let fecha = new Date();

    let plato = prompt("Introduzca el nombre del plato:");

    let cantidad = Number(prompt("Introduzca la cantidad:"));
    while(!Number.isInteger(cantidad)){
        alert("La cantidad debe ser un número entero");
        cantidad = Number(prompt("Introduzca la cantidad:"));
    }

    const pedido = new Pedido(cliente, fecha, plato, cantidad);
    listaDePedidos.push(pedido);
    alert("Pedido realizado con éxito.");
}

function cancelarPedido(){
    if(listaDePedidos.length === 0)
        alert("No hay pedidos.");
    else { 
        let indice = prompt("Introduzca el número del pedido:");

        if(indice >= 0 && indice < listaDePedidos.length){
            listaDePedidos.splice(indice, 1);
            alert("Pedido eliminado con éxito.");
        }    
        else
            alert("Número de pedido incorrecto.");
    }    
   
}

function mostrarPedidos(){
    if(listaDePedidos.length === 0)
        alert("No hay pedidos.");
    else {
        listaDePedidos.forEach((pedido, indice) => {
            console.log("Pedido: " + indice);
            console.log("Cliente: " + pedido.cliente);
            console.log("Fecha: " + pedido.fecha);
            console.log("Plato: " + pedido.plato);
            console.log("Cantidad: " + pedido.cantidad);
        });
    }  
}

let opcion = '0';

while (opcion !== '4') {  
    opcion = prompt("Introduzca una opción:\n1 Realizar un pedido.\n2 Cancelar un pedido.\n3 Mostrar todos los pedidos\n4 Salir.");
    switch (opcion) {
        case '1':
            realizarPedido();
            console.clear();
            break;
        case '2':    
            cancelarPedido();
            console.clear();
            break;
        case '3':
            console.clear();
            mostrarPedidos();
            break;
        case '4':
            break;
        default:
            alert("Valor de opción inadmisible.");
            break;
    }
}



