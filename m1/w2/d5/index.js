function aggiungiCifra (bottone){
    document.getElementById('numeri').value += bottone.getAttribute('data-simbolo')
}

function eliminaTutto (){
    document.getElementById('numeri').value = ''
}



function cancella(bottone) {
    let numeri = document.getElementById('numeri')
    numeri.value = eval(numeri.value -1)
  }
  

function aggiungiC ( bottone){
 
    document.getElementById('numeri').value += bottone.getAttribute('data-simbolo')
  
    }


function tot (){
    let numeri = document.getElementById('numeri')
    numeri.value = eval(numeri.value)
} 


  
/*function aggiungiCifra()  {
  document.getElementById('numeri').value += bottone.getAttribute('data-simbolo')
}
switch (numeri){
 case '+' : document.write('vergognati dovresti saperle fare le addizioni ' )
break
case '-' :  document.write('non sai fare manco le sottrazioni?' )
break
case '*' : document.write('' )
break
case '*' : 
}


}
  bottone = '+'
    if (aggiungiC = 2){
    console.log(no)
 */