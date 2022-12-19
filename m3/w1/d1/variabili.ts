//let nome :string = 'mary' la variabile memorizza un tipo di dato stringa 
//


let nome :string = 'john'
let score1:number = 50 ;
let score2:number = 42.50
let sm = score1 + score2
console.log('name '+ nome);
console.log('first score' + score1)
console.log('second score '+ score2)
console.log('sum of the scores: ' +sm )



// type asertion 
let code :any = 123;
let employeeCode= <number> code;
console.log(typeof(employeeCode))

var global_num =12         // variabile globale
class Numbers{
    num_val = 10;          //class variable
    static sval =10;       //static field
storeNum():void {
    var local_num =14     //local vareiable
} 
}

console.log('global num ' + global_num)
console.log(Numbers.sval)
