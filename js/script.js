let kmDaFare = document.getElementById("km_dafare");
let submit = document.getElementById("invia");
submit.addEventListener("click", function biglietto (){
    let kmDaFare = document.getElementById("km_dafare");
    console.log('km_dafare.value');
});


// let eta = prompt("quanti anni hai?");
// console.log("età", eta);
console.log('km_dafare.value');
let prezzoBiglietto = kmDaFare * "0.21";
console.log("prezzo biglietto", prezzoBiglietto , "euro");
if (eta < 18) {
    let sconto1 = (prezzoBiglietto * 0.2);
    let prezzo1 = (prezzoBiglietto - sconto1);
    let prezzoScontato1 = prezzo1.toFixed(2);
    console.log("sconto minorenni ", prezzoScontato1, "euro");
}
else if (eta > 65) {
    let sconto2 = (prezzoBiglietto * 0.4);
    let prezzo2 =(prezzoBiglietto - sconto2);
    let prezzoScontato2 = prezzo2.toFixed(2);
    console.log("sconto over 65", prezzoScontato2, "euro");
    
}