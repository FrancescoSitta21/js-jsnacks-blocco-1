//snack 1

//L'utente dopo aver inserito due numeri in successione, il software stampa il maggiore

//inizio pormpt per inserimento dei numeri
var messaggioIniziale = alert('QUESTO E\' IL PRIMO ESERCIZIO!');
var numeroUno = prompt('Scrivi il primo numero qui');
console.log(numeroUno);
var numeroDue = prompt('Scrivi il secondo numero qui');
console.log(numeroDue);


if (numeroUno > numeroDue) {
  alert('il numuero più grande è ' + numeroUno)
} else if (numeroDue > numeroUno) {
  alert('il numero più grande è ' + numeroDue)
} else {
  alert('i numeri sono identici')
};

//snack 2

//L'utente dopo avere inserito due parole in successione, il software stampa prima la parola più corta e poi la parola più lunga

//richciesta delle parole
var messaggioIniziale = alert('QUESTO E\' IL SECONDO ESERCIZIO!');
var primaParola = prompt('Scrivi la prima parola!');
console.log(primaParola);
var secondaParola = prompt('Scrivi qui la seconda parola!');
console.log(secondaParola);

if (primaParola.length > secondaParola.length) {
  alert('La parola più lunga è ' + primaParola);
} else if (secondaParola.length > primaParola.length) {
  alert('La parola più lunga è ' + secondaParola);
} else {
  var primaParola = prompt('Scrivi la prima parola!');
  var secondaParola = prompt('Scrivi qui la seconda parola!');
};

//snack 3
