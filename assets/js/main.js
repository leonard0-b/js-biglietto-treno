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

var prezzoFinale;

console.log(prezzo);

var scontoU18 = prezzo * 20 / 100;

var scontoO65 = prezzo * 40 / 100;

if (eta < 18) {
  prezzoFinale = (prezzo - scontoU18).toFixed(2) + "€";
  console.log((prezzo - scontoU18).toFixed(2) + "€");
} else if (eta >= 65) {
  prezzoFinale = (prezzo - sconto65).toFixed(2) + "€";
  console.log((prezzo - scontoO65).toFixed(2) + "€");
} else {
  prezzoFinale = prezzo - 0 + "€";
}

console.log();

document.getElementById('price').innerHTML = "Il tuo prezzo è" + " " + prezzoFinale;
