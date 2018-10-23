;(function(){
    $.ajax({
        url:"http://localhost/anshigo/data/tab.json",
        type:"GET",
        success:function(res){
            var str = "";
            for(var i=1;i<res.length;i++){
                str += `<li>
                            <a href=""><img src="${res[i].url}" alt=""></a>
                            <div>
                                <p>${res[i].proName}</p>
                                <span>${res[i].au}</span>
                                <small>${res[i].rmb}</small>
                                <a href="">加入购物车</a>
                            </div>
                        </li>`
            }
            $(".tab-b").find("img").attr("src",res[0].url)
            $(".tab-b").find("ul").html(str);
        }
    })
    $(".tab-b").parent().parent().children().first().children().on("click",function(){
        $(this).parent().next().children().eq($(this).index()).css({display:"block"}).siblings().css({display:"none"})
        $(this).css({"border-bottom":"solid 2px #343434"}).siblings().css({border:"none"})
    })
})()