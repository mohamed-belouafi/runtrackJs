$(document).ready(function() {
    const $rainbowContainer = $('#rainbow-container');
    const $shuffleBtn = $('#shuffle-btn');
    const $messageDiv = $('#message');
  
    // Activer le glisser-déposer pour les images
    $rainbowContainer.on('dragstart', '.rainbow-item', function(event) {
      $(this).addClass('dragging');
    });
  
    $rainbowContainer.on('dragend', '.rainbow-item', function(event) {
      $(this).removeClass('dragging');
    });
  
    $rainbowContainer.on('dragover', function(event) {
      event.preventDefault();
    });
  
    $rainbowContainer.on('drop', function(event) {
      const $draggedImg = $('.dragging');
      const $target = $(event.target).closest('.rainbow-item');
      if ($target.length) {
        $draggedImg.insertBefore($target);
      } else {
        $rainbowContainer.append($draggedImg);
      }
      $draggedImg.removeClass('dragging');
      event.preventDefault();
    });
  
    // Fonction pour mélanger les images
    function shuffleRainbow() {
      const $rainbowImages = $('.rainbow-item');
      $rainbowImages.sort(() => Math.random() - 0.5);
      $rainbowImages.detach().appendTo($rainbowContainer);
      $messageDiv.text('');
    }
  
    // Fonction pour vérifier si les images sont dans le bon ordre
    function checkOrder() {
      const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
      const $rainbowImages = $('.rainbow-item');
      const ordered = $rainbowImages.toArray().every((img, index) => $(img).attr('alt').toLowerCase() === colors[index]);
      if (ordered) {
        $messageDiv.text("Vous avez gagné").css("color", "green");
      } else {
        $messageDiv.text("Vous avez perdu").css("color", "red");
      }
    }
  
    // Écouteur d'événement pour le bouton de mélange
    $shuffleBtn.on('click', shuffleRainbow);
  
    // Écouteur d'événement pour chaque image
    $rainbowContainer.on('click', '.rainbow-item', checkOrder);
  });
  
  