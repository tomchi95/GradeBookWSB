// utilities.js
// Skrypt definiuje obiekt z kilkoma przydatnymi funkcjami.

var U = {

    // Pobiera referencję do elementu na podstawie jego identyfikatora:
    $: function(id) {
        'use strict';
        if (typeof id == 'string') {
            return document.getElementById(id);
        }
    }, // Koniec funkcji $().

    // Funkcja ustawiająca tekst elementu:
    setText: function(id, message) {
        'use strict';
        if ( (typeof id == 'string')
        && (typeof message == 'string') ) {
    
            // Pobierz referencję do elementu:
            var output = this.$(id);
            if (!output) return false;
        
            // Ustaw tekst:
            if (output.textContent !== undefined) {
                output.textContent = message;
            } else {
                output.innerText = message;
            }
            return true;
        } // Koniec IF.
    }, // Koniec funkcji setText().
    
    // Funkcja przypisująca procedurę obsługi:
    addEvent: function(obj, type, fn) {
        'use strict';
        if (obj && obj.addEventListener) { // W3C
            obj.addEventListener(type, fn, false);
        } else if (obj && obj.attachEvent) { // starsze IE
            obj.attachEvent('on' + type, fn);
        }
    }, // Koniec funkcji addEvent().
    
    // Funkcja usuwająca procedurę obsługi:
    removeEvent: function(obj, type, fn) {
        'use strict';
        if (obj && obj.removeEventListener) { // W3C
            obj.removeEventListener(type, fn, false);
        } else if (obj && obj.detachEvent) { // starsze IE
            obj.detachEvent('on' + type, fn);
        }
    }, // Koniec funkcji removeEvent().

	enableTooltips: function(id) {
	    'use strict';
	
		// Pobierz referencję do elementu:
		var elem = this.$(id);

		// Dodaj do elementu cztery procedury obsługi zdarzeń:
		this.addEvent(elem, 'focus', this.showTooltip);
	    this.addEvent(elem, 'mouseover', this.showTooltip);
	    this.addEvent(elem, 'blur', this.hideTooltip);
	    this.addEvent(elem, 'mouseout', this.hideTooltip);
	
	}, // Koniec funkcji enableTooltips().

	showTooltip: function(e) {
	    'use strict';
	
		// Pobierz obiekt zdarzenia:
		if (typeof e == 'undefined') var e = window.event;

		// Pobierz źródło zdarzenia:
		var target = e.target || e.srcElement;
		target.previousSibling.lastChild.style.visibility = 'visible';

	}, // Koniec funkcji showTooltip().

	hideTooltip: function(e) {
	    'use strict';
	
		// Pobierz obiekt zdarzenia:
		if (typeof e == 'undefined') var e = window.event;

		// Pobierz źródło zdarzenia:
		var target = e.target || e.srcElement;
		target.previousSibling.lastChild.style.visibility = 'hidden';

	} // Koniec funkcji hideTooltip().

}; // Koniec deklaracji U.