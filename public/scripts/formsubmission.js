jQuery(document).ready(function(){
  $('.tweet-button').on('click', function(){
    let maxLength = 140;
    let length = $('textarea').val().length;
    if(length == 0) {
      alert("Please Input Text to Submit");
      return false;
    } else if (length > maxLength) {
      alert("Your Tweet is Too Long");
      return false;
    } else {
      return true;
    }
  });
});


