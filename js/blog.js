$(document).ready(function(){
$('#preview-blog1').load('archief.html #blog-1');

$('#knop-blog-1').on('click', function(){

$('detailpagina.html #huidige-blog').load('archief.html #blog-1');    
})
});
