//Charging mas

//DEFINIMOS LA VARIABLE PARA TRAER EL SELECTOR DE CARGAR MAS 
//Y DEFINIMOS LA VARIABLE CURRET CON 4 PORQUE SERA EL LIMITE DE CARGA

let loadMoreBtn = document.querySelector('#load-more') 
let currentItem = 4;
/**La funcion flecha nos dice que cada que demos click en el boton loadmore */
loadMoreBtn.onclick = () =>{

    let boxes = [...document.querySelectorAll('.box-container .box')]; //Se selecciona de la clase box-cotainer y box en la variable boxes
    for(var i =  currentItem;i<currentItem+4;i++){                     // Con el for recorremos los elementos de boxes condicionando que currentItem + 4. Esto significa que se mostrarán cuatro elementos adicionales en cada clic en el botón. 

        boxes[i].style.display = 'inline-block';                        //estas seran almancenadas en fila o linea
    }

    currentItem += 4;                                                   //ahora validamos si la variable current intem es mayo o igual a 4 
    if(currentItem>=boxes.length){
        loadMoreBtn.style.display = 'none'                              //entonces ocultaremos el boton de load more porque ya no habra mas que cargar

    }
}


//carrito de compras


const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){
    elementos1.addEventListener('click',comprarElemento);
    carrito.addEventListener('click',eliminarElemento);
    vaciarCarritoBtn.addEventListener('click',vaciarCarrito);


}

function comprarElemento(e){
    e.preventDefault();
    if (e.target.classList.contains('Agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);

    }


}