jQuery(document).ready(function() {
  $('textarea').keydown(function (){
    var maxLength = 140;
    var length = $(this).val().length;
    var colour = $(this).siblings("span")
    if(maxLength < length) {
      colour.css('color', 'red');
    } else if (maxLength > 0) {
      colour.css('color', 'black');
    }
    length = maxLength - length;
  $(this).siblings("span").text(length);
    });
});