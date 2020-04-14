let pintas = ['espada', 'trebol', 'corazon', 'diamante'];
let cartas = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let carta = Math.floor(Math.random()*cartas.length);
let pinta = Math.floor(Math.random()*pintas.length);

document.getElementById("numero").innerHTML = cartas[carta];
document.getElementById("numero").classList.add(pintas[pinta]);