$(document).ready(function() {
  $("button").click(function() {
    $("#pageTwo").show();
});

  $("#test").submit(function(event){
    var appAnswer = $("input:radio[name=app]:checked").val();
    var easyHardAnswer = $("input:radio[name=easyHard]:checked").val();
    var teachAnswer = $("input:radio[name=teach]:checked").val();

    if (appAnswer === "appJava" && easyHardAnswer ==="easyPython" && teachAnswer ==="teachPython"){
      var trackResults = "track1"
    }
    else if (appAnswer === "appRuby" && easyHardAnswer === "hardJava" && teachAnswer === "noTeachJava"){
      var trackResult = "track2"
    }
    if (appAnswer && easyHardAnswer && teachAnswer) {
  $("#track").empty().append(trackResults);
  $("#result").show();
  }

    event.preventDefault();
  });
});
