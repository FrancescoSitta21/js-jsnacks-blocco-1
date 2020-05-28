//snack 1
//L'utente dopo aver inserito due numeri in successione, il software stampa il maggiore

//inizio pormpt per inserimento dei numeri
var numeroUno = prompt('Scrivi il primo numero qui');
console.log(numeroUno);
var numeroDue = prompt('Scrivi il secondo numero qui');
console.log(numeroDue);

if (numeroUno > numeroDue) {
  alert('il numuero più grande è' + numeroUno)
} else if (numeroDue > numeroUno) {
  alert('il numero più grande è' + numeroDue)
} else {
  alert('i numeri sono identici')
};
