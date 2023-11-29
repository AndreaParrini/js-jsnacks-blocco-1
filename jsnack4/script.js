/* 
                        Snack 4:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa
*/



const invited = [
    'Andrea',
    'Marco',
    'Sara',
    'Elisa',
    'Luca',
    'Massimiliano',
    'Giulio',
    'Maddalena'
]

console.log(invited);

const userName = prompt('Inserisci il tuo nome per verificare se puoi partecipare.');

console.log(userName);

let controlInvited = false;

for (let i = 0; i < invited.length; i++) {

    const nameInvited = invited[i];

    if(userName === invited[i]){
        controlInvited = true
    }
    
}

if(controlInvited === true){

    alert(`Ciao ${userName} puoi partecipare alla festa`)
    console.log(`Ciao ${userName} puoi partecipare alla festa`);

}else{
    alert(`Mi dispiace ${userName} non puoi partecipare alla festa`)
    console.log(`Mi dispiace ${userName} non puoi partecipare alla festa`);
}

