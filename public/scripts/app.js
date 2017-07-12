/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

jQuery(document).ready(function() {

  function createTweetElement(tweet) {
    var $tweet = $('<article>').addClass('tweet')
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
    return $tweet;
  }

  function renderTweets(tweets) {
    tweets.forEach(function(tweet){
      $(".container").append(createTweetElement(tweet));
    });
  }
    renderTweets(data);

  function loadTweets() {
    $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'GET',
      success: function(renderTweets) {
        console.log('Success:', renderTweets);
      }
    });
  }
  loadTweets();
});


