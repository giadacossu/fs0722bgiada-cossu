// interface -> definisce dei tipi personalizzati  in typescript 
//interface ->è una sorta di vincolo di contratto che stailsce come un oggetto puo interagire con un'altro oggetto 
// interface -> definisce i membri  che una classe deve avere cosi che gli oggetti che devono interagire sanno che proprietà/ metodi chiamare 
interface IPersona{
    nome:string;
    cognome:string;
    visualizzaNomeCognome():string;
}

//una classe che vuole interagire con l'interfacccia deve 'aderire al contratto'
// e ciioè che avere nome, cognome, visualizzaNomeCognome e questi proprietà/ metodi devono essere string 
class Persona implements  IPersona{
    nome: string;
    cognome:string;
constructor (nome:string, cognome:string ){
    this.nome = nome;
    this.cognome = cognome;

}
visualizzaNomeCognome(){
    return this.nome + ' ' +this.cognome
}
}
// implemento una proprieta non prevista da un'interfaccia 
 enum Materie {storia, informatica, matematica, html,css,javascript };
 /*class Studente implements IPersona{
    nome: string;
    cognome:string;
    materie:Materie[];
    constructor (nome:string, cognome:string){
        this.nome = nome;
        this.cognome= cognome;
        this.materie= []
    }
    visualizzaNomeCognome() {
        return this.nome +''+ this.cognome
    }
 }*/
 // posso implementare più interfacce contemporaneamente 

 interface IStudio{
materie : Materie[];
 }
 class Studente implements IPersona, IStudio{
    nome: string;
    cognome:string;
    materie:Materie [];
    constructor(nome:string, cognome:string){
        this.nome = nome;
        this.cognome= cognome;
        this.materie= []
    }
    visualizzaNomeCognome(): string {
        return this.nome + ''+ this.cognome
    }
 }

 //typescript prevede l'estendibilità delle interfacce -> definiamo una nuova interfaccia eriditante le caratteristiche in un'altra interfaccia 



 interface IStudente extends IPersona {
    materie :Materie[];
 }