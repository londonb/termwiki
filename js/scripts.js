$(document).ready(function() {
  $("#jumbo").text('Welcome to the Programming Terms Wiki');
  var terms = ["index", "array", "divspan", "css", "javascript-variables", "javascript-arithmetic", "javascript-methods", "forms"];
      terms.forEach(function(term) {
        $("ul.sidebarMenu").append('<li>'+ '<a href=' + '"'+ term + '.html">' + term + '</a></li>');

      });

      $("#blanks form").submit(function(event){
    var nameInput = $("input#yourName").val();
    var questInput = $("input#yourQuest").val();
    var colorInput = $("input#favColor").val();

    $(".yourName").text(nameInput);
    $(".yourQuest").text(questInput);
    $("#colorized").css('color', colorInput);

    $("#story").show();

    event.preventDefault();
  });
});
