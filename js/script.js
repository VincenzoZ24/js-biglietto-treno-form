let kmDaFare = document.getElementById("km");
let submit = document.getElementById("invia");
let eta = document.getElementById("age");
let nome = document.getElementById("nome");

submit.addEventListener("click", function biglietto() {
    let kmDaFare = document.getElementById("km");
    let eta = document.getElementById("age");
    let nome = document.getElementById("nome");
     document.getElementById("nome_cognome").innerHTML = nome.value;
     let randomVagone = Math.floor(Math.random() * 360);
     document.getElementById("n_vagone").innerHTML = randomVagone;

    let prezzoBiglietto = kmDaFare.value * "0.21";
    
    document.getElementById("prezzo").innerHTML = `${prezzoBiglietto}€`;
    document.querySelector(".tipo_biglietto").innerHTML = "biglietto standard";
    if (eta.value < 18) {
        let sconto1 = (prezzoBiglietto * 0.2);
        let prezzo1 = (prezzoBiglietto - sconto1);
        let prezzoScontato1 = prezzo1.toFixed(2);
       
        document.getElementById("prezzo").innerHTML = prezzoScontato1 + "€";
        document.querySelector(".tipo_biglietto").innerHTML = "Sconto minorenni";
    }
    else if (eta.value > 65) {
        let sconto2 = (prezzoBiglietto * 0.4);
        let prezzo2 = (prezzoBiglietto - sconto2);
        let prezzoScontato2 = prezzo2.toFixed(2);
        document.getElementById("prezzo").innerHTML = prezzoScontato2 + "€";
        document.querySelector(".tipo_biglietto").innerHTML = "Sconto over 65";
    }

   let eleBiglietto = document.querySelector(".il_tuo_biglietto");
   eleBiglietto.className = eleBiglietto.className  + " show";
   
});