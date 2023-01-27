//--- Main functions for Graid Book ----

// Zmienne
var lista= "Wpisy w dzienniku: ";
var tasks= [];

// Functions
function quit(){
    window.location.reload();
} // Koniec funkcji quit().


function clear(){
    document.getElementById("theForm").reset();
} // Koniec funkcji clear().


function doWhichKey(e){
    e = e || window.event;
    let charCode = e.keyCode || e.doWhichKey
    if (charCode == 13)
        return "Enter"
    else if (charCode == 32)
        return "Space"
    else if (charCode == 8 || charCode == 46)
        return "Backspace/Delete"
    else if (charCode === "Backspace")
    return "Backspace/Delete"
    else 
    return String.fromCharCode(e.charCode);
    
} // Koniec funkcji doWhichKey().


function downloadcsv() {
    // Funkcja służąca do pobrania listy w postaci pliku csv.
    'use strict';
    
    if (confirm('Jeśli chcesz pobrać dane naciśnij przycisk "OK", w przeciwnym przypadku przycisk "Anuluj".') == true) {
        const myArray = Object.entries(tasks);
        let csvContent = "data:text/csv;charset=utf-8," + myArray.map(e => e.join(",")).join("\n");
    
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "my_data.csv");
        document.body.appendChild(link); // Required for FF
        
        link.click();
    } else {  
    }
} // Koniec funkcji downloadcsv().


function validateForm(e) {
    // Funkcja służąca do validacji formularze i wyświetlania informacji na stronie
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
        U.$('RCdownload').disabled = false;
        document.getElementById('RCdownload').onclick = downloadcsv;

        // Ustalenie wartosci zmiennej studentMessage i wyswietlenie na stronie
        var studentMessage = "Student studiów ";
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
        studentMessage += " otrzymał z testu pierwszego: " + Test1.value + " punktów, z testu drugiego: " + Test2.value + " punktów, z testu trzeciego: "
        studentMessage += Test3.value + " punktów, z prac domowych: " + Homework.value + " punktów - co daje średnią: " + avg2f + " ocena: " + literka + " " + czyZdane;
        
        lista = "Wpisy w dzienniku: ";
        //wyswietl student message
        tasks.push(studentMessage);
        for (var j = 0, count = tasks.length; j < count; j++) {
            lista += '<li>' + tasks[j] + '</li>';
        }
        output2.innerHTML = lista;
    }
    return false;
} // Koniec funkcji validateForm().


function toggleSubmit() {
    // Funkcja włącza lub wyłącza przycisk download.
	'use strict';
    
	// Pobierz referencję do przycisku wysyłki:
	var download = U.$('download');
    var download2 = U.$('RCdownload');
	
	// Zmień wartość właściwości disabled:
	if (U.$('submit').checked) {
		download.disabled = false;
        download2.disabled = false;
	} else {
		download.disabled = true;
        download2.disabled = true;
	}
	
} // Koniec funkcji toggleSubmit().


function DateTimeToday() {
    //Funkcja wprowadza aktualną datę i godzinę w polu "Dzień wystawienia oceny"
    'use strict';
    
    var today = new Date();
    var message = today.toLocaleDateString() + ' ' + today.getHours() + ':' + today.getMinutes();

    // Uaktulnij kod strony:
    document.getElementById('dateToday').value = message;
} // Koniec funkcji DateTimeToday()


window.onload = function() {
    // Dodaj funkcjinalność po wczytaniu strony WWW:
    'use strict';

    //wywołaj funkcję DateTimeToday po załadowaniu strony
    DateTimeToday();
    
    // Po kliknięciu w przycisk download wywołuje funkcję downloadcsv().
    document.getElementById('download').onclick = downloadcsv;

    // Po kliknięciu w przycisk prześlij wywołuje funkcję validateForm().
    document.getElementById('theForm').onsubmit = validateForm;

	// Wyłącz przycisk pobrania na początku wypełniania:
	U.$('download').disabled = true;
    U.$('RCdownload').disabled = true;

	// Włącz podpowiedzi dla pól:
    U.enableTooltips('firstName');
    U.enableTooltips('lastName');
    U.enableTooltips('email');
    U.enableTooltips('ID');

    // Po naciśnięciu klawiszy wywołuje funkcję doWhichKey(e).
    addEventListener('keypress', function(e){
        console.log("You pressed " + doWhichKey(e));
    }, false);
    
    // Po puszczeniu przycisku Backspace wywołuje wypisuje w konsoli napis You pressed Backspace
    addEventListener('keyup', function(e){
        const key = e.key;
        if (key === "Backspace") {
            console.log("You pressed Backspace");
        }
    }, false);

    // Wywołanie funkcji po naciśnięciu przycisku z menu kontekstowego
    document.getElementById('quit').onclick = quit;
    document.getElementById('clear').onclick = clear;
    
};
