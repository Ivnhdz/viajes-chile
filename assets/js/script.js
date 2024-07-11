
// hago que mi navbar con id navbar tenga un background transparente //
document.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    navbar.style.backgroundColor = "transparent";
});

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


$(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });