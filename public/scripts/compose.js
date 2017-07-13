// Code to change colour of the compose button when it is hovered over
// Code to slide toggle the compose tweet form when the compose button is pressed
jQuery(document).ready(function(){
  $('.compose-button').mouseenter(function(){
    $(this).css('background-color', 'lightblue');
  }).on('mouseleave', this, function() {
      $(this).css('background-color', '#00a087');
    });
  $('.compose-button').on('click', function(){
    $('.new-tweet').slideToggle("slow", function(){
    });
  });
  $('.compose-button').on('click', function(){
    $('textarea').select();
  });
});
