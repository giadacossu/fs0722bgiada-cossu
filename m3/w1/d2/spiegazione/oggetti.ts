var person = {
    firstName:"federico",
    lastName : "de ambrosis",
sayHello: function(){}//type template
}
console.log(person.firstName)
console.log(person.lastName)
person.sayHello = function() {// restituisce errore perche non ho definito un tipo 
console.log("hello " + person.firstName)    
} 
person.sayHello()
//oggetti con parametri di funzioni 
/*var person = {
    firstName:"federico",
    lastName : "de ambrosis",
};
var invokeperson = function(obj: {firstname:string, lastname:string}){
    console.log("first name :" + obj.firstname)
    console.log("last name :" +obj.lastname)
}
invokeperson(person)

//classi
class Persona {
    nome:string;
    cognome:string;
    constructor(nome:string, cosgnome:string){
        this.nome = nome;
        this.cognome = cognome;

}
visualizzaNomeCognome(){
    return this.nome +''+ this.cognome
}
}*/
class Car {
    //field 
    engine:string;
    
    //constructor -> una funzione di class che serve a iniziallizare le variabili -> è una funzione quindi può avere parametri 
    constructor(engine:string){
        this.engine = engine
    }
    //function
    disp():void{
        console.log("engine is :" + this.engine)
    }
}
// creat an object 
var obj = new Car ('xxsy1')

//access fiel 
console.log("leggo l'attributo del valore di engine "+ obj.engine)

//access function 
obj.disp()