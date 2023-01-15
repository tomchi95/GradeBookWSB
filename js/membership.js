

// membership.js #2
// Ten skrypt ma wiele zastosowań

// Funkcja wywoływana w momencie wysyłania formularza.
// Funkcja wykonuje obliczenia, wyświetla na stronie i zwraca wartość false.

    /*
function calculate(e) {
    'use strict';

    // Pobierz obiekt zdarzenia:
    if (typeof e == 'undefined') e = window.event;

    //Zmienna przechowująca łączny koszt:
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

window.onload = init();

window.onload = function() {
    'use strict';
    U.addEvent(U.$('theForm'), 'submit', calculate);
    U.addEvent(U.$('type'), 'change', calculate);
    U.addEvent(U.$('years'), 'change', calculate);
};

*/
var lista= "Wpisy w dzienniku: ";
var tasks= [];

function downloadcsv() {
    'use strict';

    var student = {
        typeOfStudies: typeOfStudies.value,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        ID: ID.value,
        yearOfStudies: yearOfStudies.value,
        Test1: Test1.value,
        Test2: Test2.value,
        Test3: Test3.value,
        Homework: Homework.value,
        Present: Present.value,
        Average: Average.value,
    };

    const myArray = Object.entries(tasks);
    let csvContent = "data:text/csv;charset=utf-8," + myArray.map(e => e.join(","));

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); // Required for FF
    
    link.click();
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
	var yearOfStudies = U.$('yearOfStudies');
    var Test1 = U.$('Test1');
    var Test2 = U.$('Test2');
    var Test3 = U.$('Test3');
    var Homework = U.$('Homework');
    var Present = U.$('Present');
    var Average= U.$('Average');


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

    

    // Przekształca wartości tekstowe na liczbowe

    
    var t1=parseInt(Test1.value);
    var t2=parseInt(Test2.value);
    var t3=parseInt(Test3.value);
    var h=parseInt(Homework.value);

    var average= (0.8*((t1+t2+t3)/3))+(0.1*(h))+(0.1*(100));
    // Dokonuje obliczenia średniej
    //var avg = (t1+t2+t3+h)/4;

    var avg2f = average.toFixed(2);
    // Wyświetla wyniki na stronie
    document.getElementById('Average').value = avg2f;

    if (avg2f >= 90.00){
        var literka = "A";
    } else if (avg2f < 90.00 && avg2f >= 80.00) {
        var literka = "B";
    } else if (avg2f < 80.00 && avg2f >= 70.00) {
        var literka = "C";
    } else if (avg2f < 80.00 && avg2f >= 70.00) {
        var literka = "D";
    } else { var literka = "F"};

    switch(literka){
        case 'A':
            var czyZdane = "Zdane";
            break;
        case 'B':
            var czyZdane = "Zdane";
            break;
        case 'C':
            var czyZdane = "Zdane";
            break;
        case 'D':
            var czyZdane = "NIE Zdane";
            break;
        case 'F':
            var czyZdane = "NIE Zdane";
            break;
    }
    // Ustalenie wartosci zmiennej studentMessage i wyswietlenie na stronie
    

    // Jeśli wystąpił błąd, zapobiegnij akcji domyślnej:
	if (error) {

		// Zapobiegnij akcji domyślnej:
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }
	} else {
        //włącz przycisk download
        U.$('download').disabled = false;
        output2.innerHTML = lista;
        var studentMessage = "</br>"+" Student studiów ";
        switch (typeOfStudies.value){
            case 'Dzienne':
                studentMessage += "dziennych - ";
                break;
            case 'Wieczorowe':
                studentMessage += "wieczorowych - ";
                break;
            case 'Zaoczne':
                studentMessage += "zaocznych - ";
                break;
        };
        studentMessage += firstName.value + " " + lastName.value + " (" + yearOfStudies.value + ") o ID: " + ID.value
        studentMessage += "otrzymał z testu pierwszego: " + Test1.value + " punktów, z testu drugiego: " + Test2.value + " punktów, z testu trzeciego: "
        studentMessage += Test3.value + " punktów, z prac domowych: " + Homework.value + " punktów - co daje średnią: " + avg2f + " ocena: " + literka + " " + czyZdane;

        //wyswietl student message
        tasks.push(studentMessage);
        for (var j = 0, count = tasks.length; j < count; j++) {
            lista += '<li>' + tasks[j] + '</li>';
        }
        output3.innerHTML = tasks;
    }
    return false;
} // Koniec funkcji validateForm().

// Funkcja wywoływana w momencie zmiany opcji.
// Funkcja włącza lub wyłącza przycisk wysyłki.
function toggleSubmit() {
	'use strict';
    
	// Pobierz referencję do przycisku wysyłki:
	var download = U.$('download');
	
	// Zmień wartość właściwości disabled:
	if (U.$('submit').checked) {
		download.disabled = false;
	} else {
		download.disabled = true;
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
    //document.getElementById('theForm').onsubmit = process;
    document.getElementById('download').onclick = downloadcsv;

	// Funkcja validateForm() obsługuje wysyłkę formularza:
    //U.addEvent(U.$('theForm'), 'submit', validateForm);

    document.getElementById('theForm').onsubmit = validateForm;

	// Wyłącz przycisk pobrania na początku wypełniania:
	U.$('download').disabled = true;

	// Sprawdzaj zmiany pola opcji:
    //U.addEvent(U.$('terms'), 'change', toggleSubmit);

	// Włącz podpowiedź dla pola numeru telefonu:
	//U.enableTooltips('phone');

    
    
};


/*
//confirm('Wyswietla okienko ktore ma 2 przyciski: OK i anuluj')
//      (function(){
            //to jest funkcja ktora wykonuje sie na poczatku strony, anonimowa
//      })


//event listener na wykrycie jaki klawisz zostal wcisniety

window.addEventListener('keydown', function(e){
    this.document.querySelector('p').innerHTML = `'You pressed $(e.key)'`;
});




function doWhichKey(e){
    e = e || window.event;
    let charCode = e.keyCode || e.doWhichKey
    return String.
}

windows.addEventListener('keypress',function(e){
    console.log("You pressed " + doWhichKey(e));
}, false);







zdaje
A <100-90>
B (90-80>
C (80-70>

niezdaje
D (70-60>
F 60-0

//prawym przyciskiem myszy mamy quit i save --- zadanie na 5

*/