/* 
            Snack 5:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const listOfOddNumber = [];

for(let i = 0; i < 6; i++){
    
    const userNumber = Number(prompt('inserisci un numero'));
    console.log(userNumber);

    if(isNaN(userNumber)){
        alert('Attenzione, assicurati di aver inserito un numero, non sono ammesse parole.')
    } else if(userNumber%2 != 0){
        listOfOddNumber.push(userNumber);
    }

}

console.log(listOfOddNumber);