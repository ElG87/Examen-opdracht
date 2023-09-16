$(document).ready(function() {
function validateForm() {
    var titel = $("#titel").val();
    var auteur = $("#auteur").val();
    var datum = $("#datum").val();
    var inhoud = $("#inhoud").val();
    
    if (titel === "" || auteur === "" || datum === "" || inhoud === "") {
      alert("Alle velden zijn verplicht!");
      return false;
    }
    
    var datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(datum)) {
      alert("Ongeldige datum! Gebruik het formaat YYYY-MM-DD");
      return false;
    }
    
    return true;
  }
  
  $(document).ready(function() {
    $("#submit").click(function(event) {
      event.preventDefault();
      if (validateForm()) {
        const titel = $("#titel").val();
        const auteur = $("#auteur").val();
        const datum = $("#datum").val();
        const inhoud = $("#inhoud").val();
        
        const article = "<div class='blog-post'><h2 class='titel'>" + titel + "</h2><p class='auteur'>" + auteur + "</p><p class='datum'>" + datum + "</p><p class='inhoud'>" + inhoud + "</p></div>";
        
        $.ajax({

          error: function() {
            alert("Er is een fout opgetreden. Het artikel kon niet worden toegevoegd.");
          }
        });
      }
    });
  });
});
