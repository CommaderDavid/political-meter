$(document).ready(function() {
  $("form#meter").submit(function(e) {
    var choice = $("#choice").val();
    var war = $("#war").val();
    var imma = $("#imma").val();

    if (choice === "thier" && war === "yes" && imma === "them") {
      var result = "Moderate"

      $("#show").empty().append(result);
      $("#hidden").show();
    } else if (choice === "no" && imma === "no") {
      var result = "Conservative"

      $("#show").empty().append(result);
      $("#hidden").show();
    } else if (choice === "yes" && war === "no" && imma === "yes") {
      var result = "Liberal"

      $("#show").empty().append(result);
      $("#hidden").show();
    } else {
      alert("We can't match your Political Belief. Please try again.")
    }

    e.preventDefault();
  });
});
