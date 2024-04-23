// Scroll suave para as seções
$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
      var target = $($(this).attr('href'));

      if (target.length) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  });
});

// Botão "Marque uma avaliação" leva para a seção de formulário
$('#avaliacao-btn').on('click', function() {
  $('html, body').animate({
      scrollTop: $('#contato').offset().top
  }, 1000);
});
