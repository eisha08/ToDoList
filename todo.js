$(document).ready(function(){
$('#input').change(function(){
    var input=$(this).val()
    $('ul').append('<li>'+input+ '<img id="img" src="tick.jpg"/>'+'<img id="img1" src="delete.png"/>' +'</li>')
    $(this).val('');
})
})
$('ul').on('click','#img1',function(){
    $(this).parent('li').fadeOut(200);
})
$('ul').on('click','#img',function(){
    $(this).parent('li').addClass("line").fadeOut(1000);
})