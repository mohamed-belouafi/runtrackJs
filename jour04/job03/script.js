function filterPokemon() {
    const id = document.getElementById("idInput").value.trim();
    const name = document.getElementById("nameInput").value.trim();
    const type = document.getElementById("typeSelect").value.trim();

    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            const filteredPokemon = data.filter(pokemon => {
                if (id && pokemon.id !== id) return false;
                if (name && !pokemon.name.toLowerCase().includes(name.toLowerCase())) return false;
                if (type && !pokemon.type.includes(type)) return false;
                return true;
            });

            displayPokemon(filteredPokemon);
        })
        .catch(error => console.error('Erreur lors du chargement des données :', error));
}

function displayPokemon(pokemonList) {
    const pokemonListDiv = document.getElementById("pokemonList");
    pokemonListDiv.innerHTML = ""; // Clear previous results

    if (pokemonList.length === 0) {
        pokemonListDiv.textContent = "Aucun Pokémon trouvé.";
        return;
    }

    const ul = document.createElement("ul");
    pokemonList.forEach(pokemon => {
        const li = document.createElement("li");
        li.textContent = `ID: ${pokemon.id}, Nom: ${pokemon.name.french}, Type: ${pokemon.type.join(", ")}`;
        ul.appendChild(li);
    });
    pokemonListDiv.appendChild(ul);
}
