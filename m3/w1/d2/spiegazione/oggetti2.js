"use strict";
/*class Persona {
    nome:string;
    cognome:string;
    private visualizzaNomeCognome(){
 return this.nome +''+ this.cognome
    }
}
var marioRossi = new Persona();
marioRossi.nome = "mario";
marioRossi.cognome ="rossi";
console.log(marioRossi.visualizzaNomeCognome()); */
// static  si usa quando voglio usare un metodo senza installare una classe 
class Persona {
    constructor(Nome, Cognome) {
        this.Nome = Nome;
        this.Cognome = Cognome;
    }
    static concatena(a, b) {
        return a + '' + b;
    }
}
console.log(Persona.concatena("mario", "rossi"));
//extends -> estendo una clase 
class shape {
    constructor(a) {
        this.Area = a;
    }
}
class Circle extends shape {
    disp() {
        console.log("area of the circle " + this.Area);
    }
}
var Obj = new Circle(223);
Obj.disp();
// extends multilivello 
class Root {
}
class Child extends Root {
}
class Leaf extends Child {
} // eredita indirettamente da root
var obje = new Leaf();
obje.strin = "hello ";
console.log(obje.strin);
