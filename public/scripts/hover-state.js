jQuery(document).ready(function() {
  $(".tweet-footer").find(":image").hide();
    $('.tweet-footer').mouseenter(function() {
      $(this).find(":image").show()
  }).on('mouseleave', this, function () {
      $(this).find(":image").hide();
  });
});
