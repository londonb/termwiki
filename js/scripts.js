$(document).ready(function() {
  var terms = ["default" , "index"];
      terms.forEach(function(term) {
        $("ul.sidebarMenu").append('<li>'+ '<a href=' + '"'+ term + '.html">' + term + '</a></li>');

      });
});
