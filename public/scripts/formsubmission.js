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
      $('textarea').val("");
      return true;
    }
  });
  $('.tweet-button').on('click', function (){
    location.reload(true);
  });
});
// debugger
//   $('.tweet-form').submit(function(){
//     console.log("submit");
//       $(".container").append('.tweet-form');
//   });







