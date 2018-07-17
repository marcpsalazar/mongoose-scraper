// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
  }
});

$("#scraper").on("click", function() {
    $.ajax({
        method: "GET",
        url: "/scrape",
    }).done(function(data) {
        console.log(data)
        window.location = "/"
    })
});

$(document).on("click", ".addNote", function() {
  


  var thisId = $(this).attr("data-id");

  $.ajax({
        method: "POST",
        url: "/notes/:id" + thisId,
        data: {
          text: $("#noteText" + thisId).val()
        }
      }).done(function(data) {
          // Log the response
          console.log(data);
          // Empty the notes section
          $("#noteText" + thisId).val("");
          window.location = "/saved"
      });
  });
