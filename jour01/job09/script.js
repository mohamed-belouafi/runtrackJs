function tri(numbers, order) {
    // Vérification du paramètre order
    if (order !== "asc" && order !== "desc") {
        console.error("Le paramètre order doit être 'asc' ou 'desc'.");
        return;
    }

    // Fonction de comparaison pour le tri
    const comparer = (a, b) => {
        if (order === "asc") {
            return a - b;
        } else {
            return b - a;
        }
    };

    // Tri du tableau en utilisant la fonction de comparaison
    numbers.sort(comparer);

    return numbers;
}

// Exemple d'utilisation :
const nombres = [5, 2, 8, 1, 9];
console.log(tri(nombres, "asc")); // Affichera [1, 2, 5, 8, 9]
console.log(tri(nombres, "desc")); // Affichera [9, 8, 5, 2, 1]
