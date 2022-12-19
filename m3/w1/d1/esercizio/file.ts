/*let user1 = document.getElementById('user1')
let user2 = document.getElementById('user2')
let numero1:any = document.getElementById('primop')
let numero2 = document.getElementById('secondop')


let bottone1 = document.getElementById('bottone1')
let bottone2 = document.getElementById('bottone2')*/

let utente1 = {
  nome: "marco ",
  numero: 26,
};
console.log(utente1.nome + utente1.numero);

let utente2 = {
  nome: "piero ",
  numero: 77,
};
console.log(utente2.nome + utente2.numero);

function calcolo(){
  let random = Math.floor(Math.random() * 100);

console.log("numero vincente " + random);

let primoRisultato = Math.abs(random - utente1.numero);
let secondoRisultato = Math.abs(random - utente2.numero);

console.log(primoRisultato);

if (random === utente1.numero) {
  console.log(utente1.nome + "hai vinto ");
} else if (random === utente2.numero) {
  console.log(utente2.nome + "hai vinto ");
} else if (primoRisultato < secondoRisultato) {
  console.log("non avete vinto ma " + utente1.nome + "è arrivato più vicino ");
} else if (primoRisultato > secondoRisultato) {
  console.log("non avete vinto ma " + utente2.nome + "è arrivato più vicino ");
}

}
calcolo()