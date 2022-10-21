let kmDaFare = document.getElementById("km");
let submit = document.getElementById("invia");
let eta = document.getElementById("eta");

submit.addEventListener("click", function biglietto() {
    let kmDaFare = document.getElementById("km");
    let eta = document.getElementById("age");

    
    let prezzoBiglietto = kmDaFare.value * "0.21";
   
    document.getElementById("prezzo").innerHTML = prezzoBiglietto + "€";
    if (eta.value < 18) {
        let sconto1 = (prezzoBiglietto * 0.2);
        let prezzo1 = (prezzoBiglietto - sconto1);
        let prezzoScontato1 = prezzo1.toFixed(2);
       
        document.getElementById("prezzo").innerHTML = prezzoScontato1 + "€";
    }
    else if (eta.value > 65) {
        let sconto2 = (prezzoBiglietto * 0.4);
        let prezzo2 = (prezzoBiglietto - sconto2);
        let prezzoScontato2 = prezzo2.toFixed(2);
        document.getElementById("prezzo").innerHTML = prezzoScontato2 + "€";
    }

   
   
});