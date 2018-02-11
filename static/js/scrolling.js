$(document).ready(function() {
  $(".page-scroll").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 300, function(){
    });

  });

// navbar collapse
  $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
      $(this).collapse('hide');
    }
  });

  //scrollreveal
  window.sr = ScrollReveal({duration: 2000});
  sr.reveal(document.querySelectorAll('.row'));
  sr.reveal(document.querySelectorAll('.tool-item'),80);
  sr.reveal(document.querySelectorAll('.intro'),80);
  sr.reveal(document.querySelectorAll('.tool-item'),80);
  sr.reveal(document.querySelectorAll('.social-item'),80);
});
