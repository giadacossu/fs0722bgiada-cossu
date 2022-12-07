salvaIlDato = function (info_da_salvare){
    localStorage.ultimo_pensiero = info_da_salvare;
    alert('memorizzazzione effettuata');
      


};

recuperaIlDato = function (elemento){
    if(confirm('sostituire il contenuto attuale ')){
        elemento.value = localStorag.ultimo_pensiero;
    }
}