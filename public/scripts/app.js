/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

jQuery(document).ready(function() {
  loadTweets();
});
//Function to apply css rules to tweets when they are loaded
function createTweetElement(tweet) {
  var tweet = $('<article>').addClass('tweet')
    .append($('<header class="tweet-header">')
      .append($('<img class="avatar">').attr("src", tweet.user.avatars.small))
      .append($('<h2 class="name">').text(tweet.user.name))
      .append($('<p class="username">').text(tweet.user.handle))
    )

    .append($('<p class="tweet-content">').text(tweet.content.text))

    .append($('<footer class="tweet-footer">')
      .append($('<input class="flag" type="image" alt="submit">').attr("src", "/images/flag.png"))
      .append($('<input class="RT" type="image" alt="submit">').attr("src", "/images/rt.png"))
      .append($('<input class="heart" type="image" alt="submit" >').attr("src", "/images/heart.png"))
      .append($('<p class="time-stamp">').text(timeSince(tweet.created_at)))

    )
  return tweet;
}

//Function to render the tweets once css rules are applied
function renderTweets(tweets) {
  tweets.forEach(function(tweet){
    $("#printed-tweets").append(createTweetElement(tweet));
  });
}

//Function to load all the tweets on page render
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
//Function to change the time ago from milliseconds to the time ago
//a tweet was posted
function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);
  if (interval > 0) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 0) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 0) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 0) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 0) {
    return interval + " minutes ago";
  }
    return Math.floor(seconds) + " seconds ago";
}




