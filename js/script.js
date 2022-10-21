let kmDaFare = document.getElementById("km_dafare");
let submit = document.getElementById("invia");
let eta = document.getElementById("eta");

submit.addEventListener("click", function biglietto() {
    let kmDaFare = document.getElementById("km_dafare");
    let eta = document.getElementById("eta");


    
    let prezzoBiglietto = kmDaFare * "0.21";
    // document.getElementById("prezzo").innerHTML;
    
    if (eta < 18) {
        let sconto1 = (prezzoBiglietto * 0.2);
        let prezzo1 = (prezzoBiglietto - sconto1);
        let prezzoScontato1 = prezzo1.toFixed(2);
        
    }
    else if (eta > 65) {
        let sconto2 = (prezzoBiglietto * 0.4);
        let prezzo2 = (prezzoBiglietto - sconto2);
        let prezzoScontato2 = prezzo2.toFixed(2);
       

    }

   
    
});