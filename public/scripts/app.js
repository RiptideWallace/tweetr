/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

jQuery(document).ready(function() {

  function createTweetElement(tweet) {
    var tweet = $('<article>').addClass('tweet')
      .append($('<header class="tweet-header">')
        .append($('<img class="avatar">').attr("src", tweet.user.avatars.small))
        .append($('<h2 class="name">').text(tweet.user.name))
        .append($('<p class="username">').text(tweet.user.handle))
      )

      .append($('<p class="tweet-content">').text(tweet.content.text))

      .append($('<footer class="tweet-footer">')
        .append($('<p class="time-stamp">').text(tweet.created_at))
        .append($('<input class="flag" type="image" alt="submit">').attr("src", "/images/flag.png"))
        .append($('<input class="RT" type="image" alt="submit">').attr("src", "/images/rt.png"))
        .append($('<input class="heart" type="image" alt="submit" >').attr("src", "/images/heart.png"))
      )
    return tweet;
  }

  function renderTweets(tweets) {
    tweets.forEach(function(tweet){
      $(".container").append(createTweetElement(tweet));
    });
  }

  function loadTweets() {
    $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'GET',
      success: function(data) {
        data.reverse();
        renderTweets(data);
      },
    });
  }
  loadTweets();
});



