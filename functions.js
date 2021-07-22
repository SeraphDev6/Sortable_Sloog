$(document).ready(function(){
    for(var i=0;i<100;i++){
        var x=("000"+i).substr(-3);
        $("#grid-div").append(`<div><img class="a" id="a${x}" src="imga/tile${x}.png" alt="" orig-src="imga/tile${x}.png" alt-src="imgb/tile${x}.png"></div>`);
    }
    $(".b").fadeOut(0);
    $(".a").hover(function(){
        $(this).attr("src",$(this).attr("alt-src"));
    },function(){
        $(this).attr("src",$(this).attr("orig-src"));
    });
})