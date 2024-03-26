document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("button");
    let articleAdded = false;

    button.addEventListener("click", showhide);

    function showhide() {
        let article = document.getElementById("article");

        if (!articleAdded) {
            // Créer l'article
            article = document.createElement("article");
            article.id = "article";
            article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
            document.body.appendChild(article);
            articleAdded = true;
            button.textContent = "Cacher l'article";
        } else {
            // Supprimer l'article
            article.parentNode.removeChild(article);
            articleAdded = false;
            button.textContent = "Afficher l'article";
        }
    }
});
