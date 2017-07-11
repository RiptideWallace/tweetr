jQuery(document).ready(function() {
  $('textarea').keyup(function (){
    var maxLength = 140;
    var length = $(this).val().length;
    var colour = $(this).siblings("span")
    if(maxLength < length) {
      colour.css('color', 'red');
    } else {
      colour.css('color', null);
    }
    length = maxLength - length;
  $(this).siblings("span").text(length);
    });
});