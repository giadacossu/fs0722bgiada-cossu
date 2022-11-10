document.querySelector('#salva').addEventListener('click',function(){

if( testo = document.querySelector('#text').value != ''){
    let testo = document.querySelector('#text').value;

    let div = document.createElement('div');
    div.textContent = testo ;
    div.classList.add('aggiunti')

    let fatto = document.createElement('button')
    fatto.textContent = 'fatto'
  fatto.classList.add('aggiuntibottone')

  let remove = document.createElement('button')
  remove.textContent = 'remove'
  remove.classList.add('aggiuntibottone')


  div.append(fatto)
div.append(remove)

document.querySelector('#lista').append(div)


fatto.addEventListener('click', function(){
    div.classList.add('Agreen') 
 })
   
 
 remove.addEventListener('click', function(){
        div.remove().value

})
testo = document.querySelector('#text').value = ''
    }
   
})


