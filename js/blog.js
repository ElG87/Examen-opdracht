$(document).ready(function(){

    let divBlog1 = document.getElementById("preview-blog1");

    let divBlog2 = document.getElementById("preview-blog2")

    let divBlog3 = document.getElementById("preview-blog3")

$('#knop-blog-1').on('click', function(){
$('divBlog1').load('html/archief.html #blog-1');    
$('divBlog2').load('archief.html #blog-2'); 
$('divBlog3').load('archief.html #blog-3'); 
});
});
