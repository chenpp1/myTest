;(function(){
    $.ajax({
        url:"http://localhost/anshigo/data/act-pro.json",
        type:"GET",
        success:function(res){
            var str = "";
            var str1 = "";
            var arr = [];
            for(var i=0;i<res.length-1;i++){
                str += `<dd>
                            <p class="pro-img"><a href=""><img src="${res[i].url}" alt=""></a></p>
                            <p class="pro-txt">${res[i].proName}</p>
                            <p class="pro-au">${res[i].au}</p>
                            <p class="pro-rmb">${res[i].rmb}</p>
                            <span>墨尔本仓</span>
                            <div class="ho">
                                <a href="" class="btn-left"><span>喜欢</span></a>
                                <a href="" class="btn-right"><span>加入购物车</span></a>
                            </div>
                        </dd>`
            }
            for(var i in res[res.length-1]){
                str1 +=`<li><a href=""><img src="${res[res.length-1][i]}" alt=""></a></li>`
            }
            $(".act-last").find("ul").html(str1);
            $(".hot-pro").find("dl").html(str);
        }
    })
    $(".hot-pro").on("mousemove","dd",function(){
        $(this).find(".ho").css({display:"block"})
    })
    $(".hot-pro").on("mouseout","dd",function(){
        $(this).find(".ho").css({display:"none"})
    })
}
)();