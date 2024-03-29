function jsonValueKey(jsonString, key) {
    // Parsing de la chaîne JSON en objet JavaScript
    const jsonObject = JSON.parse(jsonString);

    // Vérification si la clé existe dans l'objet JSON
    if (jsonObject.hasOwnProperty(key)) {
        return jsonObject[key]; // Retourne la valeur associée à la clé
    } else {
        return "Clé non trouvée"; // Si la clé n'existe pas
    }
}

// Exemple d'utilisation
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const key = "age";
console.log(jsonValueKey(jsonString, key)); // Affichera 30
