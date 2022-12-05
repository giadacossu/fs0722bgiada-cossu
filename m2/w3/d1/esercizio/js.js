function utente() {
  this.nome = "";
  this.cognome = "";
  this.dataNascita = "";
}

let nome = document.querySelector("#nome");
let cognome = document.querySelector("#cognome");
let data = document.querySelector("#data");
let bottone= document.querySelector('#invio_btn')
let cella = document.querySelector('#cella')
let cella2 = document.querySelector('#cella2')
let cella3 = document.querySelector('#cella3')
let oggi = new Date ()
oggi.getFullYear()
let anno = oggi.getFullYear()
console.log(anno)

let compleanno = anno  - utente.dataNascita 
console.log(compleanno)

bottone.addEventListener('click', invio)

function invio (){
 utente.nome =  nome.value
 utente.cognome = cognome.value
 utente.dataNascita = data.value
cella.innerHTML = utente.nome
cella2.innerHTML = utente.cognome



 cella3.innerHTML = compleanno


}

 

