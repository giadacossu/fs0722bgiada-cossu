/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 4
let y = 7 
if ( x > y ){
  console.log ('il numero piu grande è',x )

}  
else if (x < y ){
  console.log ('il numero piu grande è ', y )
}
else {
  console.log ('i numeri sono uguali')
}



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/




/* SCRIVI QUI LA TUA RISPOSTA */
let n = 5
let m = 6 
if ( n == m ){
  console.log('il numero è uguale a ', n)
} else if ( n != m ) {
console.log( 'not equal', n )
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let c1 = 5
let c2 = (c1 % 5)
if ( c2 == typeof Number ){
    console.log('è divisibile per 5 ')
} else {
    console.log ('non divisibile')
}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a1 = 2
let b = 8
if (a1 == 8 || b == 8 ){
console.log ('almeno uno è uguale a 8')
}else {
  console.log ('nessun numero è uguale a 8 ')
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart =20
let spedizione = 10 
if ( totalShoppingCart > 50 ){
console.log ( 'congratulazioni hai ottenuto la spedizione gratuita ')
} else {
    console.log( 'il tuo totale è ', totalShoppingCart + spedizione )
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


if (totalShoppingCart / 100 * 80 > 50){
  console.log ( 'congratulazioni hai ottenuto la spedizione gratuita ')
} else if(totalShoppingCart / 100 * 80 <= 50){
console.log ('il tuo totale è ', (totalShoppingCart  / 100 * 80) + spedizione )
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let d = 9
let e = 8
let f = 6 
if (d > e && f && e > f  ){
console.log ( d, e, f)
}





/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let z = 'Ciao'
if (typeof test === 'number') {
  console.log('è un numero!')
} else {
  console.log('non è un numero!')
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let g = 4
let risultato = ( g % 2 )
if (risultato == 0 ){
console.log ('è pari ')
}else {
    console.log('non è pari ')
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val > 5) {
      console.log( " maggiore di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */
 
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/


/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  
}
me.city = 'toronto'

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName; 
console.log( me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills;
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var array = []
array.push (1,2,3,4,5,)
console.log (array)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

array.pop()
console.log (array)