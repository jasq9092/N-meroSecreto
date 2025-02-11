/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';*/

let numeroSecreto = 0; //generandoNumeroSecreto();
let intentos = 0;
let listaNumerosSorteados = [];
let cantidadLimite = 10;

function verificandoIntento(){
    let numeroDeUsuario = parseInt (document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElement('p', `Acertaste el número en ${intentos} ${(intentos ===1 ? 'intento' : 'intentos')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElement('p', 'El numero es menor');

        }
        else{
            asignarTextoElement('p', 'El numero es mayor');

        }
        intentos++;
        

        limpiarCaja();

       
    }
    return;


}

function asignarTextoElement(elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;

}

function generandoNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*cantidadLimite)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == cantidadLimite){
        asignarTextoElement(`p`,`Ya se sortearon todos los numero posibles`);

    }
    
    else{
    // Si el numero esta en la lista genera otro.
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generandoNumeroSecreto();
    }
    else{
        listaNumerosSorteados.push(numeroGenerado)
        return numeroGenerado;
    }
    }
    
}

function limpiarCaja() {
    //document.querySelector('#valorUsuario').value ='';
    document.getElementById('valorUsuario').value = '';
    
    
}

function reiniciarJuego() {
    //LImpiar Caja.
    limpiarCaja();
    //indicar mensaje de inicio.
    // Inicializar numeros de intentos
     //Generar numero aleatorio.
    valoresIniciales();
    //Deshabilitar boton de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
    
}

function valoresIniciales() {
    asignarTextoElement("h1", "Juego del número secreto");
    asignarTextoElement(`p`, `Indica un número del 1 al ${cantidadLimite}`);    
    numeroSecreto = generandoNumeroSecreto();
    intentos =1;
}
valoresIniciales();


