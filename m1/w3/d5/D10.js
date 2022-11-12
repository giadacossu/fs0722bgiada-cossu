
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let a = 10 //creo una variabile 
let b = 20 
let sum = a + b // sommo le variabili 
 console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random()* 20 )// creo una variabile e ottengo un numero casuale tra 0 e 20 
console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
 let me = { //creo un'oggettoe gli do le proprieta
  name : 'giada',
  surname : 'cossu ',
  age : '22',
  skills: []
 }
 console.log ( me)



/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age // uso delete per rimuovere age 
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

let array = ['javascript','css']// creo un'array 
me['skills'].push(array)//aggiungo l'array a skills

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".*/


array.push('html')
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
array.pop()
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice (){// creo la funzione 
let numero = Math.ceil(Math.random()*6)// creo una variabile e uso math per cercare un numero random tra 1 e 6 
console.log (numero)
}
dice()
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger() {
  let a = 14  //creo una variabile 
  let b = 8
  if (a> b){// faccio una cmparazione tra le due e se a è maggiore di b allora :
console.log ( a, 'è piu grande di ', b)
  }else {
    console.log(b, 'è piu grande di  ' ,a)
  }
  
}
whoIsBigger()

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe() {// creo la funzione 
  let stringa = 'ciao come stai '// creo la stringa
  let array = stringa.split('')//uso split che scompone la stringa in array 
  console.log (array)
  
}
splitMe()

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne (){
  let b = true 
  let string = 'javascript'
  if (b === true ){// 
  let t = string.slice(1,10)
console.log(t)
  } else{
  let s = string.slice(0,9)
console.log( s)
  }
}
deleteOne()



/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters (){
  let str = 'ci4o c0m3 st41 '
  let noNumbers = str.replace(/[0-9]/g, '')
  console.log ( noNumbers)
}
onlyLetters()
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.*/

function isThisAnEmail (){
let a = new RegExp('[a-z0-9]+-[a-z](2,3)')
let b = ['giadacossu100@gmail.com']
b.forEach((indirizzo) => {
  console.log(a.test(indirizzo))
  
});
}
isThisAnEmail()

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt (){
  let data =  new Date()

console.log (data.getDay() )
}
whatDayIsIt()

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(val){
let a =[]
let b = []
for ( let i = 0  ; i < val; i++)
b.push(dice())
a.value = b 
a.sun= eval (b.join('+'))
console.log(a)

}
rollTheDices()
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.*/

  let oldData = new Date(2022 -9-30)
 let data = new Date(2022-10- 11)


 let differenza = data.getTime() -oldData.getTime()
 
 let diff = differenza / (1000 * 60 * 60 * 24)
 
 console.log(diff)



/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(){
let mybirthday = ( 2000-10-25)// creo la variabile 
let today = new Date ()// creo la variabile con la data attuale 
if (mybirthday==today){// se la data attuale è uguale alla prima data allora 
console.log( true)
}else {
  console.log( false)
}

}
isTodayMyBirthday()
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.*/


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function (movies) {
  let nuovoFilm = movies[0]
  let annoM = movies[0].Year
  for (let film of movies) {
    if (film.Year > annoM) {
      nuovoFilm = film
    }
  }
  return nuovoFilm
}

console.log(newestMovie(movies))

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.*/

  function countMovies(){
  const countMovies = function (array) {// chiamo la funzione 
    return array.length// ottengo la lunghezza dell'array
  }
  
  console.log(countMovies(movies))
}
countMovies()

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears (array){
  let filmAnno = []; // creo un array
  for (let year of array) { // lo ciclo 
    filmAnno.push(year.Year);// faccio un push
  }
  return filmAnno;
}

console.log(onlyTheYears(movies))



/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
  
*/ function onlyInLastMillennium (array) {
  let arr = []// creo un array
  for (let film of array) {
    if (film.Year < 2000) {
      arr.push(film)
    }
  }
  return arr
  }

console.log(onlyInLastMillennium(movies))


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/ 
const sumAllTheYears = function (arr) {
  let sum = 0
  for (let elemento of arr) {
    sum += Number(elemento.Year)
  }
  return sum
}

console.log(sumAllTheYears(movies))

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(){
  let ave = 'avengers' 
  for (let film of array){


  }

}

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/ function es20 () {
  let select = document.getElementById ('container')
}



/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/ function es21(){
  let td = document.querySelectorAll('td')
}
es21()

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function es22 (){

  for (let i = 0 ; i < td.length; i++){// ciclo i td e dentro ognuno di essi scrivo 
    td[i].textContent = 'non so '

  }
}
es22()

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function es23 (){
  let link = document.querySelectorAll('a')//seleziono i link
  for (let i = 0 ; i < link.length; i++){// li ciclo per prenderli tutti 
 link[i].classList.add('link')// ad ognuno di loro do la classe link 
 
}}
es23()


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function es24(){
let lista = document.querySelector('ul')//seleziono la lista 
let item = document.createElement('li')//ceo l'elemento 
item.textContent = 'quarto'//assegno il testo 
lista.appendChild(item)
}
es24()




/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function es25(){
  document.getElementById('myList')//seleziono la lista 
  myList.textContent = ''// ne elimino il contenuto 

}
es25()

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function es26(){
  let tr = document.querySelectorAll('tr')// seleziono ll'elemento 
  for (let i = 0 ; i< tr.length; i++){//lo ciclo
    tr[i].classList.add('test')// e a ognuno di essi aggiungo la classe

  }

}es26()

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

