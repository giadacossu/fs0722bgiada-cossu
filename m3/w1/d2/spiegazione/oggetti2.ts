

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
    Nome :string;
    Cognome:string;
    constructor(Nome:string, Cognome:string){
        this.Nome = Nome;
        this.Cognome = Cognome;
    }
    static concatena(a:string, b: string,){
        return a + ''+ b;
    }
}
console.log(Persona.concatena("mario" , "rossi"));


//extends -> estendo una clase 
class shape {
    Area :number
constructor(a:number){
    this.Area = a
}
}
class Circle extends shape { // la classe figlia eredita dalla classe genitore 
    disp():void{
        console.log("area of the circle "+ this.Area )
    }
}

var Obj = new Circle (223);
Obj.disp();

// extends multilivello 
class Root {
    strin:string
}
 class Child extends Root{}
 class Leaf extends Child{} // eredita indirettamente da root
 var obje = new Leaf ();
obje.strin = "hello ";
console.log(obje.strin)


