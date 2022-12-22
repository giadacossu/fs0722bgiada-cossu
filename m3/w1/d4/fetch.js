let classe 

fetch  ('abbigliamento.json').then(function (response){
return response.json()
}).then(function(json){
  classe = json;
  console.log('dati', classe)


console.log(classe[1].collezione)
}).catch(function(err){
  console.log('fetch problem' +err.messagge)
  });
