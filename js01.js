function menor(){
    if(adivinado) return;
    adivinanza = document.getElementById("num");
    respuesta= document.getElementById("respuesta");
    numero = parseInt( document.getElementById("num").textContent );
    high = numero - 1;
    low = min;
    max = high;
    numero = parseInt( low + parseInt((high - low)/2) );
    adivinanza.textContent = numero;
}

function mayor(){
    if(adivinado) return;
    adivinanza = document.getElementById("num");
    respuesta= document.getElementById("respuesta");
    numero = parseInt( document.getElementById("num").textContent );
    low = numero + 1;
    high = max;
    min = low;
    numero = parseInt( low + (high - low)/2 );
    adivinanza.textContent = numero;
}

function correcto(){
    alert("Tu número es el "+numero+" excelente decision");
    respuesta.textContent = "Tu número es el "+numero+" excelente decision";
    adivinado = true;
}

function reiniciar(){
    adivinanza = document.getElementById("num");
    respuesta= document.getElementById("respuesta");
    max = 100;
    min = 1;
    low = min;
    high = max;
    numero = 1;
    numero = parseInt( low + parseInt((high - low)/2) );
    adivinado = false;
    
    respuesta.innerHTML = "¿Tu número es: <span id='num'>"+numero+"</span>?";
}

let adivinanza = document.getElementById("num");
let respuesta= document.getElementById("respuesta");
let max = 100;
let min = 1;
let low = min, high = max;
let numero = 1;

numero = parseInt( low + (high - low)/2 );

let adivinado = false;

adivinanza.textContent = numero ;