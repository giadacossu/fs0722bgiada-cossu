"use strict";
//get e set 
class Persona1 {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    get nomeCompleto() {
        return this.nome + '' + this.cognome;
    }
    set nomeCompleto(valore) {
        var parti = valore.toString().split('');
        this.nome = parti[0] || ' ';
        this.cognome = parti[1] || '';
    }
}
var marioRossi = new Persona1("mario", "rossi");
console.log(marioRossi.nomeCompleto);
marioRossi.nomeCompleto = 'giuseppe verdi';
console.log(marioRossi.nomeCompleto);
console.log(marioRossi.nome);
console.log(marioRossi.cognome);
