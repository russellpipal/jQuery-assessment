
//Russ Pipal jQuery assessment

$(function(){
  generateCounter = 0;

  //content to be added with jQuery
  jDeleteButton = "<button id=\"deleteButton\">Delete</button>"
  jChangeButton = "<button id=\"changeButton\">Change</button>"
  jCount = "Times Pressed: <span id=\"countSpan\">0</span>"

  $("#generateButton").on("click", function(){
    generateCounter++;
    // Checks to see if container has been made yet
    if ($("#container").length == 0) {
      $("body").append("<div id=\"container\">" + jDeleteButton + jChangeButton + jCount + "</div>");
    }

    $("#countSpan").text(generateCounter.toString());
  });

  $("body").on("click", "#deleteButton", function(){
    $(this).parent().remove();
  });

  $("body").on("click", "#changeButton", function(){
    $("#container").toggleClass("change");
  });
  
});
