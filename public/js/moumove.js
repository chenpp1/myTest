
    var oSbox = document.getElementById("s_box");
    var oBbox = document.getElementById("b_box");
    var ospan = oSbox.children[1];
    var oimg = oBbox.children[0];
    oSbox.onmouseover = function(){
        ospan.style.display = "block";
		oBbox.style.display = "block";
        oSbox.onmousemove = function(eve){
            var e = eve || window.event
            var l = e.clientX-$("#s_box").offset().left;
            var t = e.clientY-$("#s_box").offset().top+200 ;
            if(l-ospan.offsetWidth/2 < 0){
                l = ospan.offsetWidth/2;
            }
            if(t -ospan.offsetHeight/2< 0){
                t = ospan.offsetHeight/2;
            }
            if(l > oSbox.offsetWidth - ospan.offsetWidth/2 ){
                l = oSbox.offsetWidth - ospan.offsetWidth/2;
            }
            if(t > oSbox.offsetHeight - ospan.offsetHeight/2){
                t = oSbox.offsetHeight - ospan.offsetHeight/2;
            }
            ospan.style.left = l -ospan.offsetWidth/2 +"px";
            ospan.style.top = t - ospan.offsetHeight/2 +"px";
            var biliX = l / (oSbox.offsetWidth - ospan.offsetWidth);
            var biliY = t / (oSbox.offsetHeight - ospan.offsetHeight);
            oimg.style.left = -biliX * (oimg.offsetWidth-oBbox.offsetWidth) + "px";
            oimg.style.top = -biliY * (oimg.offsetHeight-oBbox.offsetHeight) + "px";
        }
        oSbox.onmouseout =function(){
            ospan.style.display = "none";
		    oBbox.style.display = "none";
        }
    }
