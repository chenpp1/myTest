;(function(){
    document.onscroll = function(){
        var top = document.documentElement.scrollTop;
        if(top>400){
            $(".navlouceng").css({position:"fixed",top:270});$(".rightlou").css({display:"block"});
            if(top>1000){
                $("#oneli").addClass("active").siblings().removeClass();
                if(top>1400){
                    $("#twoli").addClass("active").siblings().removeClass();
                    if(top>1800){
                    $("#threeli").addClass("active").siblings().removeClass();
                        if(top>2400){
                        $("#fourli").addClass("active").siblings().removeClass();
                            if(top>3000){
                            $("#fiveli").addClass("active").siblings().removeClass();
                                if(top>3600){
                                    $("#sixli").addClass("active").siblings().removeClass();
                                        if(top>4100){
                                            $("#sevenli").addClass("active").siblings().removeClass();
                                            if(top>4500){
                                                $("#eightli").addClass("active").siblings().removeClass();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                }
            }
        }else{
            $(".navlouceng").css({position:"absolute",top:650});$(".rightlou").css({display:"none"});
        }
        $(".navlouceng").on("click","span",function(){
            $(this).parent().addClass("active").siblings().removeClass();
            switch($(this).parent().index()){
                case 0:$("html").stop().animate({scrollTop:1001},300);break;
                case 1:$("html").stop().animate({scrollTop:1401},300);break;
                case 2:$("html").stop().animate({scrollTop:1801},300);break;
                case 3:$("html").stop().animate({scrollTop:2401},300);break;
                case 4:$("html").stop().animate({scrollTop:3001},300);break;
                case 5:$("html").stop().animate({scrollTop:3601},300);break;
                case 6:$("html").stop().animate({scrollTop:4101},300);break;
                case 7:$("html").stop().animate({scrollTop:4501},300);break;
            }
        })
       
    };
    
})();