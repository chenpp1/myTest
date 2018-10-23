;(function(){
    $.ajax({
        url:"http://localhost/anshigo/data/epro.json",
        type:"GET",
        success:function(res){
            var str = "";
            var str1 = "";
            for(var i = 1;i<3;i++){
                str += `<li>
                            <div class="big-l">
                                <p>${res[i].proName}</p>
                                <span>${res[i].au}</span>
                                <small>${res[i].rmb}</small>
                                <a href="">加入购物车</a>
                            </div>
                            <a href=""><img src="${res[i].url}" alt=""></a>
                        </li>`
            }
            for(var i = 3;i<res.length;i++){
                str1 +=`<li>
                            <a href=""><img src="${res[i].url}" alt=""></a>
                            <div>
                                <p>${res[i].proName}</p>
                                <span>${res[i].au}</span>
                                <small>${res[i].rmb}</small>
                                <a href="">加入购物车</a>
                            </div>
                        </li>`
            }
            $(".m-b-c-l").find("img").attr("src",res[0].url);
            $(".big-pro").html(str);
            $(".small-pro").html(str1)
        }
    })
}
)()