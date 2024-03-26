
document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("button");
    if (button) {
        button.addEventListener("click", citation);
    } else {
        console.log("Le bouton n'a pas été trouvé.");
    }
});

function citation() {
    let citationElement = document.getElementById("citation");
    if (citationElement) {
        var citationText = citationElement.textContent;
        console.log(citationText);
    } else {
        console.log("L'élément de citation n'a pas été trouvé.");
    }
}
