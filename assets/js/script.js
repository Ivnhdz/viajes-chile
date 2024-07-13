
// hago que mi navbar con id navbar tenga un background transparente //
document.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    navbar.style.backgroundColor = "transparent";
});

// al dar click a algun link del menu de navbar se desplazará suavemente //
$(document).ready(function() {
    $('a.scrollSuave').on('click', function(event) {
      let target = this.hash;
      if (target) {
        event.preventDefault();
        let $target = $(target);
        $('html, body').animate({
          scrollTop: $target.offset().top
        }, 800, function() {
          window.location.hash = target;
        });
      }
    });
  });


// funcion necesaria para el funcionamiento de los tooltip //
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });