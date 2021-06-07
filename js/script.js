var submit = document.getElementById('genera');

submit.addEventListener('click', function(){

   var nomePass = document.getElementById('nome').value;
   
   var km = document.getElementById('km').value;
   
   var age = document.getElementById('fascia-eta').value;

   var prezzo = km * 0.21
  
   var prezzoMinorenni = prezzo - prezzo * 20 / 100
  
   var prezzoOver65 = prezzo - prezzo * 40 / 100
   
   var outcome = prezzo

   if (age == 'minorenne') {
    var outcome = prezzoMinorenni
    
   } else if (age == 'over65') { 
    var outcome = prezzoOver65
    
   }

   var outcome = outcome.toFixed(2);
   var carrozza = Math.floor(Math.random() * 9) + 1;
   var codCp = Math.floor(Math.random() * 10000) + 90000;

   document.getElementById('biglietto').className = 'show';
   
   document.getElementById("passeggero").innerHTML = nomePass;
   document.getElementById("offerta").innerHTML = age;
   document.getElementById("carrozza").innerHTML = carrozza;
   document.getElementById("codiceCp").innerHTML = codCp;
   document.getElementById("prezzo").innerHTML = outcome;

})
   
var annulla = document.getElementById('annulla');

annulla.addEventListener('click', function(){
    document.getElementById('nome').value = '';
    document.getElementById('km').value = '';
    document.getElementById('fascia-eta').value = '';

    document.getElementById('passeggero').className = 'hidden';
    document.getElementById('offerta').className = 'hidden';
    document.getElementById('carrozza').className = 'hidden';
    document.getElementById('codiceCp').className = 'hidden';
    document.getElementById('prezzo').className = 'hidden';
})


   
  

   
   

   
