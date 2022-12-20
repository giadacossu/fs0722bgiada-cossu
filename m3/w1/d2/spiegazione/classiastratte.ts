//abstract-> classi basi che non possono essere istanziate 
//devono avere almeno un metodo su cui farò la dichiarazione senza implementarlo 
abstract class Veicolo {
private colore:string; 
protected modello:string; // accessibile dalla classe e dalle aceesi della clase
protected marca:string;


constructor(marca:string, modello:string,colore:string){
this.marca=marca;
this.modello=modello;
this.colore=colore;
}
public vernicial(colore:string):void{
    this.colore=colore
}
public coloreCorrente():string{
    return this.colore
}
public dettagliVeicolo():string
}
class Automobile extends Veicolo{
    constructor(marca:string, modello:string, colore:string){
        super(marca,modello,colore)
    }
    public dettagliVeicolo():string{
        return `${this.marca}- ${this.modello}`
    }
}
//const veicolo = new Veicolo('jaguar', 'f-type','nero') non si puo frae 

const Jaguar = new Automobile ('jaguar', 'f-type', 'nero')
console.log(Jaguar.dettagliVeicolo)
console.log(Jaguar.coloreCorrente())