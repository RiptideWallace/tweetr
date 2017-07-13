// Code that brings up error messages for when a tweet has no, or too much, content
jQuery(document).ready(function(){
  $('.tweet-button').on('click', function(event){
    const maxLength = 140;
    const length = $('textarea').val().length;
    event.preventDefault();
    if (length > maxLength) {
      alert("Your Tweet is Too Long");
      $('textarea').val("");
      $('.counter').text('140').css('color', 'black');
    } else if (length === 0) {
      alert("Please Input Text to Submit");
    } else {
// Code to automatically load tweets when they are submitted, instead of having to refresh the page
      $.ajax({
        url: 'http://localhost:8080/tweets',
        data: $('textarea').serialize(),
        method: 'POST',
        success: function() {
          $('textarea').val("");
          $('#printed-tweets').empty();
          loadTweets();
          $('.counter').text('140');
        }
      });
    }
  });
});
