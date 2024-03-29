document.getElementById('button').addEventListener('click', function() {
    fetch('expression.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de récupération du fichier.');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('expression').innerText = data;
        })
        .catch(error => {
            console.error('Une erreur s\'est produite:', error);
        });
});


