document.addEventListener("keydown", function(event) {
    let keylogger = document.getElementById("keylogger");
    
    let letter = event.key.toLowerCase(); // Récupère la touche pressée en minuscule

    if ((/^[a-zA-Z]+$/.test('letter'))) { // Vérifie si la touche pressée est une lettre de A à Z
        if (document.activeElement === keylogger) { // Vérifie si le focus est dans le textarea
            keylogger.value += letter; // Ajoute la lettre deux fois dans le textarea
        } else {
            keylogger.value += letter; // Ajoute la lettre une fois dans le textarea
        }
    }
});



