/* 
            Snack 8:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. 
*/

const userNumber = prompt('Inserisci un numero di 4 cifre');

const caractherOfNumber = userNumber.split('');

console.log(userNumber, caractherOfNumber);

let sumOfNumber = 0;
let errorNumber = false;

if(caractherOfNumber.length != 4){

    alert('Non hai inserito un numero di 4 cifre')

}else{

    for (let i = 0; i < caractherOfNumber.length; i++) {

        const element = Number(caractherOfNumber[i]);
        console.log(element);

        if(isNaN(element)){

            errorNumber = true;

        }else{

            sumOfNumber += element;

        }
        
    }

    if(errorNumber === true){

        alert('Attenzione!! Non hai inserito un numero valido.')
    
    } else{
    
        console.log(`La somma è ${sumOfNumber}`);
        alert(`La somma è ${sumOfNumber}`);
    
    }


}


