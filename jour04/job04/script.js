document.addEventListener("DOMContentLoaded", function() {
    const updateButton = document.getElementById("updateButton");
    const userTableBody = document.getElementById("userTableBody");
  
    // Fonction pour mettre à jour le tableau
    function updateUserTable() {
      // Efface le contenu actuel du tableau
      userTableBody.innerHTML = "";
  
      // Charge les données utilisateur depuis le fichier JSON
      fetch("utilisateurs.json")
        .then(response => response.json())
        .then(data => {
          // Ajoute chaque utilisateur au tableau
          data.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
              <td>${user.id}</td>
              <td>${user.nom}</td>
              <td>${user.prenom}</td>
              <td>${user.email}</td>
            `;
            userTableBody.appendChild(row);
          });
        })
        .catch(error => {
          console.error("Une erreur s'est produite lors de la récupération des données:", error);
        });
    }
  
    // Met à jour le tableau lors du clic sur le bouton
    updateButton.addEventListener("click", updateUserTable);
  
    // Charge le tableau au chargement de la page
    updateUserTable();
  });
  