$(document).ready(function() {

    $('#preview-blog1').load('archief.html #blog-1 #img-blog1, #eerste-p, #date1');
 
        $('#knop-blog-1').on('click', function(){
            window.location.href='detailpagina.html';
        });
    
    $('#huidige-blog').load('archief.html #blog-1');

   $.ajax({
        url: 'detailpagina.html',
        succes: function(data){
            $('#preview-blog2').load('archief.html #blog-2 #img-blog2, #tweede-p , #date2');
                $('#knop-blog-2').on('click', function(){
                    window.location.href='detailpagina.html';
                });
        
        $('#huidige-blog').load('archief.html #blog-2');
        }
        });
    $('#preview-blog3').load('archief.html #blog-3 #img-blog3, #derde-p , #date3');


});
