var alphas:string[];
alphas =["1", "2", "3","4"]
console.log(alphas[1])


var nums: number []= [1,2,3,]
console.log(nums[0])

// creo usando l'oggetto Array
// argomento -> un valore numerico che rappresenta la dimensione del mio array oppure un elenco di valori 
 var arr_names:number[]= new Array(4)
 for(var i=0;i<arr_names.length;i++){
    arr_names[i]=i*2
console.log(arr_names[i]) 
}

//argomento -> un elenco di valori 
  var names:string[] = new Array("mary", "tom", "jack","jill")
  for(var i = 0; i < names.length; i++){
    console.log(names[i])
  } 

  //metodo pop ->rimuove un elemento e lo restituisce

  var numbers =[1,4,9];
  var element = numbers.pop()
  console.log("element is :" +element )

console.log(numbers)


//metodo push -> aggiunge l'elemnto 
 var num = [1,4,9]
 var length = num.push(10)
 console.log( "new numbers "+ num)

 //destrutturazione di un'array
  var arr:number[ ]= [12,13]
  var [x,y]= arr
  console.log(x)
  console.log(y)
  //attraversare l'array con for 
   var j :any;
   var nums: number []=[1001, 1002, 1003,1004]
   for ( j in nums){
    console.log(nums[j])
   }


   //array multidimenionale 
   // var arr_name:datatype[][] = [[val1, val2, val3], [val,valn]]

   //posso passare un array a una funzione 
   var nomi:string[] = new Array("mary"," tom", "jack")
   function disp ( arr_nomi:string[]){
    for(var i=0; i<arr_nomi.length;i++){
        console.log(nomi[i])
    }
   }
   disp(nomi)