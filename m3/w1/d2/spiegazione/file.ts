// enum ci permette di definire un insime di costanti 
// le usiamo per ordinare dei dati oppure per creare una serie di dati 
enum StatusCode {
    notFound = 404,
    succes = 200,
    accepted = 202,
    badRequest = 400
}

console.log(StatusCode.notFound)
console.log(StatusCode.succes)
enum CardinalDirection {
    north,
    east,
    south,
    west
}

let currentDirection = CardinalDirection.east;
console.log(currentDirection)