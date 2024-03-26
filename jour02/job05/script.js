// Fonction pour mettre à jour la couleur du footer en fonction du pourcentage de scrolling
window.addEventListener("scroll", function() {
    let footer = document.getElementById("footer");
    let contentHeight = document.getElementById("content").offsetHeight;
    let scrollPercentage = (window.scrollY / (contentHeight - window.innerHeight)) * 100;

    // Détermine la couleur en fonction du pourcentage de scrolling
    let color = getColorForPercentage(scrollPercentage);

    // Met à jour la couleur du footer
    footer.style.backgroundColor = color;
});

// Fonction pour déterminer la couleur en fonction du pourcentage
function getColorForPercentage(percentage) {
    let hue = percentage * 1.2; // Réglage de la teinte en fonction du pourcentage (0-120)
    return "hsl(" + hue + ", 100%, 50%)"; // Utilisation de l'espace colorimétrique HSL pour définir la couleur
}