"use strict";
// enum ci permette di definire un insime di costanti 
// le usiamo per ordinare dei dati oppure per creare una serie di dati 
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["notFound"] = 404] = "notFound";
    StatusCode[StatusCode["succes"] = 200] = "succes";
    StatusCode[StatusCode["accepted"] = 202] = "accepted";
    StatusCode[StatusCode["badRequest"] = 400] = "badRequest";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.notFound);
console.log(StatusCode.succes);
var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection[CardinalDirection["north"] = 0] = "north";
    CardinalDirection[CardinalDirection["east"] = 1] = "east";
    CardinalDirection[CardinalDirection["south"] = 2] = "south";
    CardinalDirection[CardinalDirection["west"] = 3] = "west";
})(CardinalDirection || (CardinalDirection = {}));
let currentDirection = CardinalDirection.east;
console.log(currentDirection);
