;(function(){
    $.ajax(
        {
            url:"http://localhost/anshigo/data/pro.json",
            type:"GET",
            success:function(res){
                var str = "";
                var str1 = "";
                for(var i = 0;i<5;i++){
                    str += `<li>
                                <a href="hotpro.html?${res[i].goodsId}"><img src="${res[i].url}" alt=""></a>
                                <p>${res[i].proName}</p>
                                <div index="${res[i].goodsId}">
                                    <p>
                                        <span>${res[i].au}</span></br>
                                        <small>${res[i].rmb}</small> 
                                    </p>
                                    <a href="javascript:void(0);" class="shoppro">加入购物车</a>
                                </div>
                            </li>`
                }
                for(var i = 0;i<res.length;i++){
                    str1 += `<li>
                                <a href="hotpro.html?${res[i].goodsId}"><img src="${res[i].url}" alt=""></a>
                                <p>${res[i].proName}</p>
                                <div index="${res[i].goodsId}">
                                    <p>
                                        <span>${res[i].au}</span></br>
                                        <small>${res[i].rmb}</small> 
                                    </p>
                                    <a href="javascript:void(0);" class="shoppro">加入购物车</a>
                                </div>
                            </li>`
                }
                $(".hot-week").find("ul").html(str);
                $("#hot-pro").find("ul").html(str1);
                $("#new-pro").find("ul").html(str1);
            }
        }
    )
    
})();