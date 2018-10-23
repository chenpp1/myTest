;(function leftMove(){
    $(".s1").on("click",function(){
        $(this).parent().parent().next().stop().animate({left:0},300);
        $(this).siblings().css({background:"#999"}).end().css({background:"#3678d2"})
    })
    $(".s2").on("click",function(){
        $(this).parent().parent().next().stop().animate({left:-1200},300)
        $(this).siblings().css({background:"#999"}).end().css({background:"#3678d2"})
    })
})();