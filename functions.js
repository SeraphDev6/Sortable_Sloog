$(document).ready(function(){
    var arr=[]
    for(var i=0;i<100;i++){
        arr.push(i);
    }
    arr=arr.sort(()=>Math.round(Math.random())-0.5);
    for(var i=0;i<100;i++){
        var x=("000"+arr[i]).substr(-3);
        $("#grid-div").append(`<div><img class="a" id="a${x}" src="img/tile${x}.png" alt="${x}"></div>`);
    }
    $("#grid-div").sortable();
    $("#grid-div").disableSelection();
})