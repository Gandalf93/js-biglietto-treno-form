var submit = document.getElementById('genera');

submit.addEventListener('click', function(){

   var valore = document.getElementById('nome').value;
   console.log('nome'); 

   var km = document.getElementById('km').value;
   console.log('km');

   var age = document.getElementById('fascia-eta').value;
   console.log('età');

   var prezzo = km * 0.21
   console.log('totale senza sconto', prezzo)

   var prezzoMinorenni = prezzo - prezzo * 20 / 100
   console.log('prezzo scontato minorenni', prezzoMinorenni)

   var prezzoOver65 = prezzo - prezzo * 40 / 100
   console.log('prezzo scontato over 65', prezzoOver65)

   var outcome = prezzo

   if (age == 'minorenne') {
    var outcome = prezzoMinorenni
    console.log('prezzo scontato minorenni');
   } else if (age == 'over65') { 
    var outcome = prezzoOver65
    console.log('prezzo scontato over 65');
   }

   var outcome = outcome.toFixed(2)

})
   
