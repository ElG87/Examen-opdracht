$(document).ready(function() {
    $('#knop-blog1').on('click', function () {
        $('#preview-blog1').load('archief.html #blog-1',() =>{
                    $('#divResult').html('Blog 1 succesvol geladen');
                    if('#divResult' = success){
                        alert('succesvol')
                    };
        });
    });
});