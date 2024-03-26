document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("button");
    let compteur = document.getElementById("compteur");
    let nombreClics = 0;

    if (button && compteur) {
        button.addEventListener("click", function() {
            nombreClics++;
            compteur.textContent = nombreClics;
        });
    } else {
        console.log("Les éléments nécessaires n'ont pas été trouvés.");
    }
});
