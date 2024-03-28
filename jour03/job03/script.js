$(document).ready(function() {
    var emptyTileIndex = 8; // Index de la case vide
    var winningOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // Ordre gagnant
    var isGameWon = false; // État du jeu
  
    // Mélanger les carreaux au chargement de la page
    shuffleTiles();
  
    // Gestionnaire de clic sur les carreaux
    $('.taquin').on('click', function() {
      if (!isGameWon) {
        var currentIndex = $(this).index(); // Index du carreau cliqué
        if (isValidMove(currentIndex)) {
          swapTiles(currentIndex, emptyTileIndex);
          emptyTileIndex = currentIndex;
          checkWin();
        }
      }
    });
  
    // Gestionnaire de clic sur le bouton "Recommencer"
    $('#shuffle-btn').on('click', function() {
      shuffleTiles();
      isGameWon = false;
      $('#message').text('');
    });
  
    // Fonction pour mélanger les carreaux
    function shuffleTiles() {
      var tiles = $('.taquin');
      for (var i = tiles.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        tiles.eq(j).before(tiles.eq(i));
      }
    }
  
    // Fonction pour vérifier si le mouvement est valide
    function isValidMove(tileIndex) {
      var emptyRow = Math.floor(emptyTileIndex / 3);
      var emptyCol = emptyTileIndex % 3;
      var tileRow = Math.floor(tileIndex / 3);
      var tileCol = tileIndex % 3;
      return (Math.abs(emptyRow - tileRow) + Math.abs(emptyCol - tileCol) === 1);
    }
  
    // Fonction pour échanger les carreaux
    function swapTiles(index1, index2) {
      var tiles = $('.taquin');
      var temp = tiles.eq(index1).clone();
      tiles.eq(index1).replaceWith(tiles.eq(index2));
      tiles.eq(index2).replaceWith(temp);
    }
  
    // Fonction pour vérifier si le joueur a gagné
    function checkWin() {
      var currentOrder = [];
      $('.taquin').each(function() {
        currentOrder.push($(this).index());
      });
      if (JSON.stringify(currentOrder) === JSON.stringify(winningOrder)) {
        isGameWon = true;
        $('#message').text('Vous avez gagné').css('color', 'green');
      }
    }
  });
  
  