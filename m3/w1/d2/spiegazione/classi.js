"use strict";
// typescript supporta l'ereditarieta delle classi 
// la keyword extends estende una classe base 
// nel costruttore della classe derivata useremo super() per invocare il costruttore della classe base 
class Veicle {
    constructor(marca, modello, tipoVeicolo) {
        this.marca = marca;
        this.modello = modello;
        this.tipoveicolo = tipoVeicolo;
    }
    dettagliVeicolo() {
        return `${this.tipoveicolo} - ${this.marca}- ${this.modello}`;
    }
}
class Cars extends Veicle {
    constructor(marca, modello) {
        super(marca, modello, 'auto');
    }
}
class Motorbike extends Veicle {
    constructor(marca, modello) {
        super(marca, modello, 'moto');
    }
}
const jaguar = new Cars('jaguar', 'f-type');
const ducati = new Motorbike('ducati', 'panigale v4');
console.log(jaguar instanceof Cars);
console.log(ducati instanceof Motorbike);
console.log(ducati instanceof Cars);
