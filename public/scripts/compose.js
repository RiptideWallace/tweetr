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
