// Chiedi eta
var eta = parseInt(prompt("Quanti anni ha il passeggero?"));

console.log(eta);

document.getElementById('eta').innerHTML = "Il passeggero ha" + " " + eta + "anni";

// Chiedi distanza
var km = parseFloat(prompt("Quanti chilometri deve percorrere?"));

console.log(km);

document.getElementById('km').innerHTML = "Il passeggero deve percorrere" + " " + km + " " + "km";

// calcolo prezzo
var prezzo = km * 0.21;

console.log(prezzo);

var sconto18 = prezzo * 20 / 100;

var sconto65 = prezzo * 40 / 100;

if (eta < 18) {
  alert("Il prezzo del suo biglietto è:" + (prezzo - sconto18).toFixed(2) + "€");
  console.log("Il prezzo del suo biglietto è:" + (prezzo - sconto18).toFixed(2) + "€");
} else if (eta >= 65) {
  alert("Il prezzo del suo biglietto è:" + (prezzo - sconto65).toFixed(2) + "€");
  console.log("Il prezzo del suo biglietto è:" + (prezzo - sconto65).toFixed(2) + "€");
} else {
  prezzo;
}

console.log();
