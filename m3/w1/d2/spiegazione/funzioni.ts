//definizione di una funzione 
function function_name(){

}
//anonima 
//function(){

//}

//chiamare una funzione
function test(){
    console.log("testato")

}

test()
//restituizione di una funzione
function greet():string{ // dico che la funzione restituisce una stringa
    return"hello world"
}

function caller(){
    var msg = greet() // funzione greet invocata dentro caller
    console.log(msg)
}
//inovke function
caller()

//funzioni con parametri opzionali  ->gli argomenti  non passati obbligatoriamente  
function display_details(id:number,name:string, email_id?:string){// l'email se c'e3 la stampi altrimentino ma se c'è è una stringa
    console.log("id", id)
    console.log("name" , name);
  if(email_id !=undefined){
    console.log("email id ", email_id)
  }
}
display_details(123, "jonh")
display_details(113, "mary", "email_protection")

//parametri rest .. in typescript _> devono essere tutti dello stesso tipo

function addNumbers(... nums:number[]){
    var i
    var sum : number = 0 
    for (i=0;i<nums.length; i++){
        sum= sum + nums[i]
    }
console.log("sum of the numbers"+ sum)
}
addNumbers(1,2,3)
addNumbers(10,10,10,10,10)


//parametri predefiniti 
//esempio che calcola un presso che ha uno sconto 
function calcolaDiscount (price:number, rate:number = 0.50){
var discount = price * rate;
console.log("discount amount", discount)
}
calcolaDiscount(1000)
calcolaDiscount(1000, 0.30)

// funzioni anonime 
var msg = function(){
    return "hello world"
}
console.log(msg())
// funzioni anonime con parametri 
var res = function(a : number, b:number){
    return a+b
}
console.log(12,2)
//anche Typescript supporta il costruttore function

var myFunction = new Function("a","b","return a*b");
var l = myFunction(4,3);
console.log(l)

