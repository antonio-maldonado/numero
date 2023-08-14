const adivinanza = document.getElementById("num");
const respuesta= document.getElementById("respuesta");
let max = 100;
let min = 1;
let low = min, high = max;
let numero = 1;

numero = parseInt( low + (high - low)/2 );

let adivinado = false;

function menor(){
    if(adivinado) return;
    numero = parseInt( document.getElementById("num").textContent );
    high = numero - 1;
    low = min;
    max = high;
    numero = parseInt( low + parseInt((high - low)/2) );
    adivinanza.textContent = numero;
}

function mayor(){
    if(adivinado) return;
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

adivinanza.textContent = numero ;