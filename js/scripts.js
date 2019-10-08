$(document).ready(function() {
  $("form#meter").submit(function(e) {
    var choice = $("#choice").val();
    var war = $("#war").val();
    var imma = $("#imma").val();

    if (choice === "thier" && war === "yes" && imma === "them") {
      var result = "Moderate"

      $("#show").empty().append(result);
      $("#hidden").show();
    }

    e.preventDefault();
  });
});
