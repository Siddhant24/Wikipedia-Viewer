$("#search").on("click", function(){
  var input_text = $("#input-text").val();
  $.getJSON(`https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${input_text}&utf8=&format=json&srlimit=50`,function(json){
    var html = "";
    json.query.search.forEach(function(val){
      var link = val.title.split(" ").join("_");
      html += "<li>" + "<a href="+`https://en.wikipedia.org/wiki/${link}` + " target=" + "_blank" + ">" + val.title + "</a>: " + val.snippet + "</li>";
    });
    $("#search-list").html(html);
  });
});