"use strict";
class Capo {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        (this.id = id),
            (this.codprod = codprod),
            (this.collezione = collezione),
            (this.capo = capo),
            (this.modello = modello),
            (this.quantita = quantita),
            (this.colore = colore),
            (this.prezzoivaesclusa = prezzoivaesclusa),
            (this.prezzoivainclusa = prezzoivainclusa),
            (this.disponibile = disponibile),
            (this.saldo = saldo);
    }
    getsaldocapo() {
        return this.saldo;
    }
    getacquistocapo() {
        return Math.floor(this.prezzoivainclusa - ((this.prezzoivainclusa / 100) * this.saldo));
    }
}
/*let Maglietta = new Capo(1, 10, 'primavera', 'maglietta', 5, 2, 'rosso', 23, 'si',10);

console.log(Maglietta)*/
let classe;
fetch('abbigliamento.json').then(function (response) {
    return response.json();
}).then(function (json) {
    classe = json;
    console.log('dati', classe);
    console.log(classe[1].collezione);
    /* for(let i=0; i<classe.length; i++){
       let capo1 = classe[i]
let capo2= classe[i]
console.log(capo2)
         capo1 = new Capo (classe[i].id,classe[i].codprod,classe[i].collezione,classe[i].capo,classe[i].modello,classe[i].quantita,classe[i].colore,classe[i].prezzoivainclusa,classe[i].prezzoivaesclusa,classe[i].disponibile,classe[i].saldo)
         console.log(capo1.getsaldocapo());
         console.log(capo1.getacquistocapo());
      

       }});*/
    let cardigan = classe[0];
    cardigan = new Capo(cardigan.id, cardigan.codprod, cardigan.capo, cardigan.capo, cardigan.modello, cardigan.quantita, cardigan.colore, cardigan.prezzoivaesclusa, cardigan.prezzoivainclusa, cardigan.disponibile, cardigan.saldo);
    console.log(cardigan);
    console.log(cardigan.getsaldocapo());
    console.log(cardigan.getacquistocapo());
    let titolo1 = document.getElementById('titolo').innerHTML = cardigan.capo;
    let primop = document.getElementById('collezione').innerHTML = cardigan.collezione;
    let pre = document.getElementById('pre-sconto').innerHTML = 'il prezzo era ' + cardigan.prezzoivainclusa;
    let prezzo = document.getElementById('prezzo').innerHTML = 'il prezzo scontato è ' + cardigan.getacquistocapo();
    let maglietta = classe[1];
    maglietta = new Capo(maglietta.id, maglietta.codprod, maglietta.capo, maglietta.capo, maglietta.modello, maglietta.quantita, maglietta.colore, maglietta.prezzoivaesclusa, maglietta.prezzoivainclusa, maglietta.disponibile, maglietta.saldo);
    let titolo2 = document.getElementById('titolo2').innerHTML = maglietta.capo;
    let secondp = document.getElementById('collezione2').innerHTML = maglietta.collezione;
    let pre2 = document.getElementById('pre-sconto2').innerHTML = 'il prezzo era ' + maglietta.prezzoivainclusa;
    let prezzo2 = document.getElementById('prezzo2').innerHTML = 'il prezzo scontato è ' + maglietta.getacquistocapo();
    let felpa = classe[2];
    felpa = new Capo(felpa.id, felpa.codprod, felpa.capo, felpa.capo, felpa.modello, felpa.quantita, felpa.colore, felpa.prezzoivaesclusa, felpa.prezzoivainclusa, felpa.disponibile, felpa.saldo);
    let titolo3 = document.getElementById('titolo3').innerHTML = felpa.capo;
    let p3 = document.getElementById('collezione3').innerHTML = felpa.collezione;
    let pre3 = document.getElementById('pre-sconto3').innerHTML = 'il prezzo era ' + felpa.prezzoivainclusa;
    let prezzo3 = document.getElementById('prezzo3').innerHTML = 'il prezzo scontato è ' + felpa.getacquistocapo();
    let maglione = classe[3];
    maglione = new Capo(maglione.id, maglione.codprod, maglione.capo, maglione.capo, maglione.modello, maglione.quantita, maglione.colore, maglione.prezzoivaesclusa, maglione.prezzoivainclusa, maglione.disponibile, maglione.saldo);
    let titolo4 = document.getElementById('titolo4').innerHTML = maglione.capo;
    let p4 = document.getElementById('collezione4').innerHTML = maglione.collezione;
    let pre4 = document.getElementById('pre-sconto4').innerHTML = 'il prezzo era ' + maglione.prezzoivainclusa;
    let prezzo4 = document.getElementById('prezzo4').innerHTML = 'il prezzo scontato è ' + maglione.getacquistocapo();
});
