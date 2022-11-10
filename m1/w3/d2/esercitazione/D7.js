/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function nome (a,b){
  let str1 = a.slice(0,2 )  + b.slice(-3)
  let str2 = str1.toUpperCase()
  return str2
}
console.log (nome('ciao',' come va'))


const concatenate = function (str1,str2){
  let partials = str1.slice(0,2) + str2.slice(str2.lenght -3)
  let finalString = partials.toUpperCase()
  console.log (finalString)
}
concatenate('luca', 'ciao')

function name1 (a,b){
  let stringa = a.slice(0,2) + b.slice(-3)
  let stringa2= stringa.toUpperCase()

return stringa2
}
console.log (name1('hello','buddy'))

/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
 */
 let arr = []
 for (let i= 0; i <100 ; i++){
 if ( i % 2 != 0 ){
 arr.push (i)
 }
 }


  let array1 = []
  for (let i= 0; i < 100 ; i++ ){
    if (i % 2 != 0 ){
array1.push(i)
    }
  }
  console.log ( array1)

/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */
let Arr = []
for ( let i = 0 ; i <= 100; i++){
  if ( i %5 === 0) {
    Arr.push(i)
  }
}
console.log ( Arr)


let array2 = []
for (let i = 0 ; i < 100 ; i++){
if (i % 5 === 0 ){
array2.push(i)
}
}
console.log ( array2)

/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */
let  arrayy = []
for (let i = 0 ; i <10 ; i ++){
arrayy.push (Math.round(Math.random() *100))
}
console.log(arrayy)
let array3 = []
for (let i = 0 ; i < 100 ; i++){
  array3.push (Math.round ( Math.random()*100))
}console.log ( array3)

/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.

  arr = []
 for (let i = 0 ; i <= 100 ; i++){
arr[i] = i 
function ritornaArrayPari(arr){
  return arr.filter((e)=> {
    return e % 2 == 0;
  })
}
 }
*/                                                                                               




const findEvenNumbers = function (arr) {
  let evenArray = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i])
    }
  }
  console.log(evenArray)
}
let array = [34, 67, 35, 85, 100, 4]
findEvenNumbers(array)



/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
 */

function array6 ( ... numeri ){
  return numeri.reduce(function(c,d){return c+ d})
}
let somma = array6( 1,2,3,4,5)

console.log (somma)

/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/
function incrementaArray (arrayDaIncrementare){
for ( let i = 0; i <arrayDaIncrementare.length; i++){
  arrayDaIncrementare[i]++
}
return arrayDaIncrementare

}
console.log(incrementaArray(array))
/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
let animali = ["Adinolfi", "Berlu", "Salvini"];
function strToNumArray(array) {
  let s = [];
  for (let u of array) {
    s.push(u.length);
  }
  return s;
}

console.log (strToNumArray(animali))


/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/

const deleteEven = function (array){
  let counter = 0;
  while (counter !== array.length){
    if (array[counter]% 2 === 0 ){
array.splice (counter, 1 )
    }
  counter++
  }


}

console.log(deleteEven(array))

/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

const createRandomArrayWithoutduplicate = function(){
  let arr =[]
  for ( let i = 0; i < 10 ; i ++ ){
    let added = false 
    while (!added ){// condizione while  che fa ripetere il ciclo finche non viene inserito un elemento
    let numberToAdd = Math.ceil(Math.random()*10) // viene inserita una variabile random tra due e 100
if (! arr.includes(numberToAdd)){// va a controllare se l'array non è presente il numero appena messo
  arr.push(numberToAdd)//se non è presente va ad eseguire un push del numero generato 
added = true //in questo modo esce dal ciclo quando un elemento viene aggiunto all'array e ripete il ciclo for

}
  }
}
return arr
}

console.log(createRandomArrayWithoutduplicate() )

/*function arrayRandom(){//creo la funxione arrayRandom
let array = [] // creo un array vuoto chiamato array
let numeroRandom //creo la variabile nella quale verra memorizzato un numero random (piu avanti nel codice)
let i = 0 // creo l'indice utile per il ciclo while 
while ( i < 10 ){// apro il ciclo while e faccio ciclare finche l'indice non sarà superiore a 10 (una volta chiuso il ciclo creeràun array di di 10 elementi )
numeroRandom = Math.floor(Math.random ()* 11)//alla variabile numeroRandom affido un numero random da 0 a 10 incluso 
if (!array.incledes(numeroRandom )){// avvio un if dove dirò se in utto l'array non esiste il valore presente nella variabile numeroRandom allora verifica la condizione interna che abbiamo scritto 
  array.push(numeroRandom ); // se la condizione sarà verifica nell'if pusho nel nostro array la variabile numeroRandom 
  i++ // aumento il contatore del while (in questo caso solo se la condizione dell'if sarà verificata )
  
}
}
return array//ritorno l'array


}let array3 = arrayRandom()

console.log(array3)


 ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/
let arra4 =[8,9,5,3,]
function inversione(array){
  return array.reverse()
}
console.log(inversione(arra4))

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
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

/* ESERCIZIO 12
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* ESERCIZIO 16
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* ESERCIZIO 18 (EXTRA)
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
