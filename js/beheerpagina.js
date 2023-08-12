function validateForm() {
    var title = $("#title").val();
    var author = $("#author").val();
    var date = $("#date").val();
    var content = $("#content").val();
    
    if (title === "" || author === "" || date === "" || content === "") {
      alert("Alle velden zijn verplicht!");
      return false;
    }
    
    var datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
      alert("Ongeldige datum! Gebruik het formaat YYYY-MM-DD");
      return false;
    }
    
    return true;
  }
  
  $(document).ready(function() {
    $("#submit").click(function(event) {
      event.preventDefault();
      if (validateForm()) {
        const title = $("#title").val();
        const author = $("#author").val();
        const date = $("#date").val();
        const content = $("#content").val();
        
        const article = "<div class='blog-post'><h2 class='title'>" + title + "</h2><p class='author'>" + author + "</p><p class='date'>" + date + "</p><p class='content'>" + content + "</p></div>";
        
        $.ajax({
          url: "html/archief.html",
          type: "GET",
          dataType: "html",
          success: function(data) {
            var articles = $(data).find(".blog-post");
            $(articles[0]).before(article);
            alert("Het artikel is toegevoegd!");
            $("#title").val("");
            $("#author").val("");
            $("#date").val("");
            $("#content").val("");
          },
          error: function() {
            alert("Er is een fout opgetreden. Het artikel kon niet worden toegevoegd.");
          }
        });
      }
    });
  });