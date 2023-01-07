// errorMessages.js
// Skrypt definiuje funkcje do dodawania i usuwania komunikatów o błędach.

// Funkcja dodaje komunikat o błędzie.
// Przyjmuje dwa argumenty: identyfikator elementu formularza i komunikat.
function addErrorMessage(id, msg) {
   	'use strict';
    
    // Pobierz referencję do elementu formularza:
    var elem = document.getElementById(id);
    
    // Określ identyfikator elementu span:
    var newId = id + 'Error';
    
    // Sprawdź, czy element span już istnieje:
    var span = document.getElementById(newId);
    if (span) {
        span.firstChild.value = msg; // aktualizacja
    } else { // utwórz nowy
    
        // Utwórz element span:
        span = document.createElement('span');
        span.id = newId;
		span.className = 'error'
        span.appendChild(document.createTextNode(msg));
        
        // Dodaj element do rodzica:
        elem.parentNode.appendChild(span);
        elem.previousSibling.className = 'error';

    } // Koniec instrukcji IF-ELSE.

} // Koniec funkcji addErrorMessage().

// Funkcja usuwa komunikat o błędzie.
// Przyjmuje jeden argument: identyfikator elementu formularza.
function removeErrorMessage(id) {
   	'use strict';

    // Pobierz refernecję do elementu span:
    var span = document.getElementById(id + 'Error');
	if (span) {
    
	    // Usuń klasę z etykiety:
	    span.previousSibling.previousSibling.className = null;
    
	    // Usuń element span:
	    span.parentNode.removeChild(span);

	} // Koniec warunku IF.
    
} // Koniec funkcji removeErrorMessage().