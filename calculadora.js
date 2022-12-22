window.addEventListener('load',  ()=> {             // aca esperamos a que el html cargue antes que el js para evitar errores

    // creamos dos constantes, una para buscar el display y otra los botones
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    //creamos otra constante para convertir el HTMLCollection a Array
    const keypadButtonsArray = Array.from(keypadButtons);

    
    //Iteramos por nuestro nuevo array de botones
    keypadButtonsArray.forEach((button) =>{

        //A cada boton le agregamos un listener
        button.addEventListener( 'click', ()=>{
            calculadora(button, display)
        } )
    })
} )

function calculadora(button, display){
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;
        
        case '=':
            calcular(display);
            break;
        
        default:
            actualizar(display, button);
            break;

    }
}

function calcular(display){
    display.innerHTML = eval(display.innerHTML) // Esto toma el string del display, lo resuelve y lo guarda en el innerHTML 
}

function actualizar(display, button){
    if(display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display){
    display.innerHTML = 0;
}