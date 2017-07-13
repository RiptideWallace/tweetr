// Code to change the character counter as input to submitted into the text area
jQuery(document).ready(function() {
  $('textarea').keydown(function (){
    let maxLength = 140;
    let length = $(this).val().length;
    let colour = $(this).siblings("span");
    if (maxLength < length) {
      colour.css('color', 'red');
    } else if (maxLength > 0) {
      colour.css('color', 'black');
    }
    length = maxLength - length;
  $(this).siblings("span").text(length);
  });
});
