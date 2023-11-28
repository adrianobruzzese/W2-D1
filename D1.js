/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
//tipo stringa --> dato che prevede un insieme di caratteri alfanumerici, dal puro valore testuale. Deve essere compreso tra due apici singoli o doppi
let stringa = 'Hello World'
//tipo booleano --> dato che prevede soltanto due valori possibili, e cioè ="true" oppure ="false"
let boolean = true;
//tipo numerico --> dato che prevede qualsiasi valore di tipo numerico. NON deve avere apici di nessun tipo per essere definito
let y = 2;
//tipo array --> dato che prevede la memorizzazione in una sequenza ordinata di dati di vario tipo. I dati vanno contenuti all'intero di parentesi quadre
let array =[]
//tipo oggetto --> dato che può contenere un intero oggetto. Per essere definito i valori devono essere compresi tra due parentesi graffe
let object ={}
// tipo null --> dato usato per definire l'assenza esplicita e volontaria di dati
//tipo undefined --> dato usato per settare il valore di una variabile non ancora definita o inesistente

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = 'Adriano';
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 12;
let num2 = 20;

console.log(num1 + num2);

// oppure banalmente

console.log(12+20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let myName2 = 'Bruzzese';
const mySurname = myName2;
console.log(mySurname)
// let myName = 'Adriano'
// non commentando let myName = 'Adriano' da come errore Uncaught SyntaxError: Identifier 'myName' has already been declared


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(4 - x)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = 'john'
let name2 = 'John'
console.log(name1 === name2)
console.log(name1.toLowerCase === name2.toLowerCase)
