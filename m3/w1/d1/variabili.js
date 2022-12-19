let nome = 'john';
let score1 = 50;
let score2 = 42.50;
let sm = score1 + score2;
console.log('name ' + nome);
console.log('first score' + score1);
console.log('second score ' + score2);
console.log('sum of the scores: ' + sm);
let code = 123;
let employeeCode = code;
console.log(typeof (employeeCode));
var global_num = 12;
class Numbers {
    constructor() {
        this.num_val = 10;
    }
    storeNum() {
        var local_num = 14;
    }
}
Numbers.sval = 10;
console.log('global num ' + global_num);
console.log(Numbers.sval);
