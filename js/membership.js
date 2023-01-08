

// membership.js #2
// Ten skrypt wylicza koszt członkostwa.

// Funkcja wywoływana w momencie wysyłania formularza.
// Funkcja wykonuje obliczenia i zwraca wartość false.
/* function setText(elementId, message) {
    'use strict';
    
    var today = new Date();
    var message = today.toLocaleDateString() + ' ' + today.getHours() + ':' + today.getMinutes();


    if ( (typeof elementId == 'string')
    && (typeof message == 'string') ) {
    
        // Pobierz referencję do akapitu:
        var output = document.getElementById('dateToday');
    
        // Uaktualnij właściwość innerText lub textContent akapitu:
		if (output.textContent !== undefined) {
			output.textContent = message;
		} else {
			output.innerText = message;
		}
    
    } // Koniec IF.

}
*/
/*

function init() {
    'use strict';
    
    var today = new Date();
    var message = today.toLocaleDateString() + ' ' + today.getHours() + ':' + today.getMinutes();

    // Uaktulnij kod strony:
    document.getElementById('dateToday').value = message;
    
}
/*
function calculate(e) {
    'use strict';

    // Pobierz obiekt zdarzenia:
    if (typeof e == 'undefined') e = window.event;

    // Zmienna przechowująca łączny koszt:
    var cost;

    // Pobierz referencję do pól formularza:
    var type = U.$('type');
    var years = U.$('years');
    
    // Zamień rok na liczbę:
    if (years && years.value) {
        years = parseInt(years.value);
    }
    
    // Sprawdź poprawność daty:
   if (type && type.value && years && (years > 0) ) {
        
        // Oblicz koszt bazowy:
        switch (type.value) {
            case 'basic':
                cost = 10.00;
                break;
            case 'premium':
                cost = 15.00;
                break;
            case 'gold':
                cost = 20.00;
                break;
            case 'platinum':
                cost = 25.00;
                break;
        } // Koniec instrukcji switch.

        // Weź pod uwagę liczbę lat:
        cost *= years;

        // Zastosuj zniżkę dla składni na więcej niż rok:
        if (years > 1) {
            cost *= .80; // 80%
        }
        
        // Wyświetl łączną kwotę:
        U.$('cost').value = '$' + cost.toFixed(2);
        
    } else { // Wyświetl błąd:
        if (e.type == 'submit') {
           U.$('cost').value = 'Proszę wprowadzić poprawne dane.';
        }
    }

    // Zapobiegnij wysłaniu formularza:
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    return false;
        
} // Koniec funkcji calculate().
*/


/*
window.onload = init();



window.onload = function() {
    'use strict';
    U.addEvent(U.$('theForm'), 'submit', calculate);
    U.addEvent(U.$('type'), 'change', calculate);
    U.addEvent(U.$('years'), 'change', calculate);
};

*/

function process() {
    'use strict';

    var output = document.getElementById('output');

    var student = {
        typeOfStudies: typeOfStudies,
        firstName: firstName,
        lastName: lastName,
        email: email,
        ID: ID,
        yearOfStudies: yearOfStudies,
        Test1: Test1,
        Test2: Test2,
        Test3: Test3,
        Homework: Homework,
        Present: Present,
    };

    var studentMessage = "Student studiów " 

    switch (student.typeOfStudies.value){
        case 'D':
            studentMessage += "dziennych - ";
            break;
        case 'W':
            studentMessage += "wieczorowych - ";
            break;
        case 'Z':
            studentMessage += "zaocznych - ";
            break;
    };
        
    
    studentMessage += student.firstName.value + " " + student.lastName.value + " (" + student.yearOfStudies.value + ") o ID: " + student.ID.value;
    studentMessage += "otrzymał z testu pierwszego: " + student.Test1.value + " punktów, z testu drugiego: " + student.Test2.value + " punktów, z testu trzeciego: ";
    studentMessage += student.Test3.value + " punktów, z prac domowych: " + student.Homework.value + " punktów - co daje średnią: ";

    output.innerHTML = studentMessage;

    }

function validateForm(e) {
    'use strict';

    // Pobierz obiekt zdarzenia:
	if (typeof e == 'undefined') e = window.event;

    // Pobierz referencje do elementów formularza:
    var typeOfStudies = U.$('typeOfStudies');
	var firstName = U.$('firstName');
	var lastName = U.$('lastName');
	var email = U.$('email');
	var ID = U.$('ID');
	//var city = U.$('city');
	var yearOfStudies = U.$('yearOfStudies');
	//var zip = U.$('zip');
	//var terms = U.$('terms');
    var Test1 = U.$('Test1');
    var Test2 = U.$('Test2');
    var Test3 = U.$('Test3');
    var Homework = U.$('Homework');
    var Present = U.$('Present');


    



	// Zmienna błędu:
	var error = false;


    // Sprawdź poprawność rodzaju studiów:
	if (typeOfStudies.selectedIndex != 0) {
		removeErrorMessage('typeOfStudies');
	} else {
		addErrorMessage('typeOfStudies', 'Proszę wybrać rodzaj studiów.');
		error = true;
	}

	// Sprawdź poprawność imienia:
	if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
		removeErrorMessage('firstName');
	} else {
		addErrorMessage('firstName', 'Proszę wpisać imię.');
		error = true;
	}
	
    // Sprawdź poprawność nazwiska:
    if (/^[A-Z \.\-']{2,20}$/i.test(lastName.value)) {
        removeErrorMessage('lastName');
    } else {
        addErrorMessage('lastName', 'Proszę wpisać nazwisko.');
        error = true;
    }

	// Sprawdź poprawność adresu e-mail:
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
		removeErrorMessage('email');
	} else {
		addErrorMessage('email', 'Proszę wpisać poprawny adres e-mail.');
		error = true;
	}
	
	// Sprawdź poprawność numeru ID:
	if (/\d{5}/.test(ID.value)) {
		removeErrorMessage('ID');
	} else {
		addErrorMessage('ID', 'Proszę wpisać poprawny numer identyfikacyjny.');
		error = true;
	}
	
	// Sprawdź poprawność roku studiów:
	if (yearOfStudies.selectedIndex != 0) {
		removeErrorMessage('yearOfStudies');
	} else {
		addErrorMessage('yearOfStudies', 'Proszę wybrać rok studiów.');
		error = true;
	}

    // Sprawdź poprawność punktów z testu pierwszego:
	if (/^[0-9][0-9]?$|^100$/.test(Test1.value)) {
		removeErrorMessage('Test1');
	} else {
		addErrorMessage('Test1', 'Proszę wybrać liczbę punktów od 0 do 100');
		error = true;
	}

    // Sprawdź poprawność punktów z testu drugiego:
	if (/^[0-9][0-9]?$|^100$/.test(Test2.value)) {
		removeErrorMessage('Test2');
	} else {
		addErrorMessage('Test2', 'Proszę wybrać liczbę punktów od 0 do 100');
		error = true;
	}

    // Sprawdź poprawność punktów z testu trzeciego:
	if (/^[0-9][0-9]?$|^100$/.test(Test3.value)) {
		removeErrorMessage('Test3');
	} else {
		addErrorMessage('Test3', 'Proszę wybrać liczbę punktów od 0 do 100');
		error = true;
	}

    // Sprawdź poprawność punktów zadań domowych:
    if (/^[0-9][0-9]?$|^100$/.test(Homework.value)) {
        removeErrorMessage('Homework');
    } else {
        addErrorMessage('Homework', 'Proszę wybrać liczbę punktów od 0 do 100');
        error = true;
    }

    // Sprawdź poprawność obecności:
    if (Present.checked) {
        removeErrorMessage('Present');
    } else {
        addErrorMessage('Present', 'Uczeń ma być obecny');
        error = true;
    }

    // Jeśli wystąpił błąd, zapobiegnij akcji domyślnej:
	if (error) {

		// Zapobiegnij akcji domyślnej:
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }
	    return false;
    
	}
    
} // Koniec funkcji validateForm().

// Funkcja wywoływana w momencie zmiany opcji.
// Funkcja włącza lub wyłącza przycisk wysyłki.
function toggleSubmit() {
	'use strict';
    
	// Pobierz referencję do przycisku wysyłki:
	var submit = U.$('submit');
	
	// Zmień wartość właściwości disabled:
	if (U.$('terms').checked) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
	
} // Koniec funkcji toggleSubmit().

function init() {
    'use strict';
    
    var today = new Date();
    var message = today.toLocaleDateString() + ' ' + today.getHours() + ':' + today.getMinutes();

    // Uaktulnij kod strony:
    document.getElementById('dateToday').value = message;
}

// Dodaj podstawową funkcjinalność po wczytaniu strony WWW:
window.onload = function() {
    'use strict';

    init();
    document.getElementById('theForm').onsubmit = process;

	// Funkcja validateForm() obsługuje wysyłkę formularza:
    U.addEvent(U.$('theForm'), 'submit', validateForm);

    //document.getElementById('theForm').onsubmit = process;

	// Wyłącz przycisk wysyłki na początku wypełniania:
	//U.$('submit').disabled = true;

	// Sprawdzaj zmiany pola opcji:
    U.addEvent(U.$('terms'), 'change', toggleSubmit);

	// Włącz podpowiedź dla pola numeru telefonu:
	//U.enableTooltips('phone');

    
    
};