document.querySelector('#salva').addEventListener('click',function(){


    let testo = document.querySelector('#text').value;

    let div = document.createElement('div');
    div.textContent = testo ;//gli dico che dentro div ci sara il testo che scrivono
    div.classList.add('aggiunti')//gli do uno stile

    let fatto = document.createElement('button')
    fatto.textContent = 'fatto'


div.append(fatto)
document.querySelector('#lista').append(div)


})
document.querySelector('')