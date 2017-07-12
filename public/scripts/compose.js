jQuery(document).ready(function(){
  $('.compose-button').mouseenter(function(){
    $(this).css('background-color', 'white');
  }).on('mouseleave', this, function() {
    $(this).css('background-color', 'lightgrey');
  });
  $('.compose-button').on('click', function(){
    $('.new-tweet').slideToggle("slow", function(){
      });
  });
  $('.compose-button').on('click', function(){
    $('textarea').select();
  });
});
