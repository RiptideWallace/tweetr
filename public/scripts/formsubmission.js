jQuery(document).ready(function(){
  $('.tweet-button').on('click', function(event){
    let maxLength = 140;
    let length = $('textarea').val().length;
    event.preventDefault();
    if (length > maxLength) {
      alert("Your Tweet is Too Long");
      $('textarea').val("");
      $('.counter').text('140').css('color', 'black');
    } else if(length == 0) {
      alert("Please Input Text to Submit");
    } else {
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








