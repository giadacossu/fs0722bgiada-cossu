interface Capi {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa:number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
    getsaldocapo():void
    getacquistocapo():void
}
 
    class Capo implements Capi{
      id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa:number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
      constructor(  id: number,codprod: number, collezione: string,capo: string,modello: number,quantita: number,colore: string,prezzoivaesclusa:number,prezzoivainclusa: number,disponibile: string,saldo: number) {
      (this.id = id),
        (this.codprod = codprod),
        (this.collezione = collezione),
        (this.capo = capo),
        (this.modello = modello),
        (this.quantita = quantita),
        (this.colore = colore),
        (this.prezzoivaesclusa=    prezzoivaesclusa),
        (this.prezzoivainclusa = prezzoivainclusa),
        (this.disponibile = disponibile),
        (this.saldo = saldo);
    }
    getsaldocapo():number{
      
return this.saldo 
    }
    getacquistocapo():number{

     return  Math.floor(this.prezzoivainclusa -((this.prezzoivainclusa/100) * this.saldo))
       
       }
    }
  

  
  /*let Maglietta = new Capo(1, 10, 'primavera', 'maglietta', 5, 2, 'rosso', 23, 'si',10);

  console.log(Maglietta)*/


 let classe 
  fetch('abbigliamento.json').then(function (response) {
      return response.json();
  }).then(function (json) {
      classe = json;
      console.log('dati', classe);
      console.log(classe[1].collezione);

     /* for(let i=0; i<classe.length; i++){
        let capo1 = classe[i]
let capo2= classe[i]
console.log(capo2)
          capo1 = new Capo (classe[i].id,classe[i].codprod,classe[i].collezione,classe[i].capo,classe[i].modello,classe[i].quantita,classe[i].colore,classe[i].prezzoivainclusa,classe[i].prezzoivaesclusa,classe[i].disponibile,classe[i].saldo)
          console.log(capo1.getsaldocapo());
          console.log(capo1.getacquistocapo());
       

        }});*/

     
let cardigan =classe[0]
cardigan = new Capo (cardigan.id,cardigan.codprod,cardigan.capo,cardigan.capo,cardigan.modello,cardigan.quantita,cardigan.colore,cardigan.prezzoivaesclusa,cardigan.prezzoivainclusa,cardigan.disponibile,cardigan.saldo)
console.log(cardigan)
console.log(cardigan.getsaldocapo())
console.log(cardigan.getacquistocapo())
   let titolo1= (<HTMLTitleElement>document.getElementById('titolo')).innerHTML= cardigan.capo
   let primop =(<HTMLElement>document.getElementById('collezione')).innerHTML = cardigan.collezione
   let pre =(<HTMLElement>document.getElementById('pre-sconto')).innerHTML= 'il prezzo era ' + cardigan.prezzoivainclusa
   let prezzo =(<HTMLElement>document.getElementById('prezzo')).innerHTML= 'il prezzo scontato è ' + cardigan.getacquistocapo();



let maglietta = classe[1]
maglietta = new Capo (maglietta.id,maglietta.codprod,maglietta.capo,maglietta.capo,maglietta.modello,maglietta.quantita,maglietta.colore,maglietta.prezzoivaesclusa,maglietta.prezzoivainclusa,maglietta.disponibile,maglietta.saldo)

let titolo2= (<HTMLTitleElement>document.getElementById('titolo2')).innerHTML= maglietta.capo
let secondp = (<HTMLElement>document.getElementById('collezione2')).innerHTML = maglietta.collezione
let pre2 =(<HTMLElement>document.getElementById('pre-sconto2')).innerHTML= 'il prezzo era ' + maglietta.prezzoivainclusa
let prezzo2 =(<HTMLElement>document.getElementById('prezzo2')).innerHTML= 'il prezzo scontato è ' + maglietta.getacquistocapo();

let felpa =  classe[2]
felpa = new Capo (felpa.id,felpa.codprod,felpa.capo,felpa.capo,felpa.modello,felpa.quantita,felpa.colore,felpa.prezzoivaesclusa,felpa.prezzoivainclusa,felpa.disponibile,felpa.saldo)
let titolo3= (<HTMLTitleElement>document.getElementById('titolo3')).innerHTML= felpa.capo
let p3 = (<HTMLElement>document.getElementById('collezione3')).innerHTML = felpa.collezione
let pre3 =(<HTMLElement>document.getElementById('pre-sconto3')).innerHTML= 'il prezzo era ' + felpa.prezzoivainclusa
let prezzo3 =(<HTMLElement>document.getElementById('prezzo3')).innerHTML= 'il prezzo scontato è ' + felpa.getacquistocapo();

let maglione =  classe[3]
maglione = new Capo (maglione.id,maglione.codprod,maglione.capo,maglione.capo,maglione.modello,maglione.quantita,maglione.colore,maglione.prezzoivaesclusa,maglione.prezzoivainclusa,maglione.disponibile,maglione.saldo)
let titolo4= (<HTMLTitleElement>document.getElementById('titolo4')).innerHTML= maglione.capo
let p4 = (<HTMLElement>document.getElementById('collezione4')).innerHTML = maglione.collezione
let pre4 =(<HTMLElement>document.getElementById('pre-sconto4')).innerHTML= 'il prezzo era ' + maglione.prezzoivainclusa
let prezzo4 =(<HTMLElement>document.getElementById('prezzo4')).innerHTML= 'il prezzo scontato è ' + maglione.getacquistocapo();
    })