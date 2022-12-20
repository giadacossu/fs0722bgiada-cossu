"use strict";
//abstract-> classi basi che non possono essere istanziate 
//devono avere almeno un metodo su cui farò la dichiarazione senza implementarlo 
class Veicolo {
    constructor(marca, modello, colore) {
        this.marca = marca;
        this.modello = modello;
        this.colore = colore;
    }
    vernicial(colore) {
        this.colore = colore;
    }
    coloreCorrente() {
        return this.colore;
    }
}
class Automobile extends Veicolo {
    constructor(marca, modello, colore) {
        super(marca, modello, colore);
    }
    dettagliVeicolo() {
        return `${this.marca}- ${this.modello}`;
    }
}
//const veicolo = new Veicolo('jaguar', 'f-type','nero') non si puo frae 
const Jaguar = new Automobile('jaguar', 'f-type', 'nero');
console.log(Jaguar.dettagliVeicolo);
console.log(Jaguar.coloreCorrente());
