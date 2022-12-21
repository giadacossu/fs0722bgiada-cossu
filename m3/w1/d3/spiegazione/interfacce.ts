
/* il type sistem è di tipo strutturale (structural type)
il compiler quando fa il controllo/ la comparazione dei tipi di dato si basa sulla struttura/ forma
*/ 


function inviaMessaggio (msg{email:string, messaggio:string}){
    //il parametro indica che viene accettato un oggetto che ha almeno le proprietà email e messaggio 
    mialSender.sendTo(msg.email, msg.messaggio)
    //al netto che non creo un oggetto mailsender
    var mioMessaggio = {EMAIL:'MARIO.ROSSI@EPICODE.IT', messaggio:'buongiorno'}
    inviaMessaggio(mioMessaggio); // questa chiamata è corretta perche ci sono i parametri attesi

    var mioMessaggio ={messaggio: 'buongiorno'}
    inviaMessaggio(mioMessaggio);
    //questa da errore perche quando compilo l'oggetto non contiene la proprieta email
}
    // una volta che dichiaro una satruttura per il parametro della funzione ts verfica che  effettivamente venga passato un oggetto con quella struttura
    //-> tupescript consente lòa definizione di una interfaccia che definisce la struttura del nostro parametro 

interface Messaggio {
    email:string;
    messaggio:string;
 }   //interface consente di definire il tipo di dato (messaggio nel nostro caso ), typescript quando compila verficala struttura 
    //in questo modo potremmo utilizzare messaggio come se fosse un tipo di dato predefinito 

    function inviaMessaggio (msg:Messaggio){
        mailSender.sendTo(msg.email, msg.messaggio)
    }
    //la struttura  dichiarata dall'interfaccia rappresenta gli elementi minimi  che un oggetto deve avere 
    var mioMessaggio ={
        emial:'mario.rossi@epicode.it',
        messaggio:'buongiorno',
        data:new Date()
    }; // il fatto che la proprieta data non è prevista non pregiudica la compatibilita dell'oggetto col tipo previsto 
    inviaMessaggio(mioMessaggio);
    //->possiamo dentro interface definire una struttura con degli elemnti opzionali 
    interface Messaggio{
        email:string;
        nomeDestinatario?:string; //elementi opzionali -> sono accettati se sono presenti , ma non da errore se sono assenti 
        oggetto?:string 
        messaggio:string
    }

    //le interfacce non descrivono solo oggetti ma anche altri elementi del linguaggio 
    // ad esempio definisco una funzione numerica che opera sui valori numerici 
    interface FunzioneNumeri{
        (x:number, y:number):number // prendo due valori numeirci come parametro e restituisco un numero 

    }
    // faccio una funzione del tipo appena dichiarato 
    var somma :FunzioneNumeri;
    somma=function(a:number, b:number){// dichiarare il tipo non ci obbliga a usare gli stessi nomi dei parametri 
        return a+b                     // l'unica cosa importante è che i tipi dei parametri siano corrispondenti 


    }
    // possiamo anbche dichiarare delle interfacce che descrivono gli array 
    interface ArrayDiStringhe{
        [index:number]:string   // definisco il tipo dell'indice (number ) e il tipo di ciascun elemnto (string)

    }

    var x : ArrayDiStringhe = ['uno','due','tre',]

    //per l'indice dell'array oltre al tipo di numberr è pèrevisto anche il tipo string

    interface Dizionario {
        [index:string]:string
    }

    var x :Dizionario;
    x['chiave1']= 'valore1';
    y['chiave2']='valore2';
    //per l'indice i tipi di dati possibili sono solo number e string, per gli elemnti dell'array possiamo usare qualsiasi tipo 
    //esempio array oggetti 
    interface ArrayDiOggetti {
        [index:number]:{ id:number; label:string}
    }
    var x : ArrayDiOggetti = [
        {id1, label:'aaa'},
        {id2, label:'sss'}
]