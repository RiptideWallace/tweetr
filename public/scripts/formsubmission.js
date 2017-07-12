jQuery(document).ready(function() {
    let maxLength = 140;
    let length = $('textarea').val().length;
  $('.tweet-button').on('click' function(){
      if (length === null) {
        alert("Please Input Text to Submit");
        return false;
      } else if (length > maxlength) {
        alert("Your Tweet Is Too Long");
        return false;
      } else {
        return true;
      }
  });
});

