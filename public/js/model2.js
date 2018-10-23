;(function($){
	"use strict";
	$.fn.hottop=function(options){
		this.LOCAL={
			index:0,
			iPrev:options.items.length-1
		};
		this.LOCAL.items=options.items;
		this.LOCAL.autoPlay=options.autoPlay===false?false:true;
		this.LOCAL.moveTime=options.moveTime||300;
		this.LOCAL.delayTime=options.delayTime||2000;
		this.LOCAL.moveColor=options.moveColor;
		this.LOCAL.outColor=options.outColor;
//		this.LOCAL.listOff=false;
		var that=this;
		if(options!=undefined&&options.list.length>0){
//			this.LOCAL.listOff=true;
			options.list.eq(0).css(that.LOCAL.moveColor).siblings().css(that.LOCAL.outColor)
			options.list.on("click",function(){
				if(that.LOCAL.index<$(this).index()){
					that.LOCAL.listMove($(this).index(),1);
				};
				if(that.LOCAL.index>$(this).index()){
					that.LOCAL.listMove($(this).index(),-1);
					
				};
				that.LOCAL.index=$(this).index();
				
				options.list.eq(that.LOCAL.index).css(that.LOCAL.moveColor).siblings().css(that.LOCAL.outColor)
			})
		}
		this.LOCAL.listMove=function(index,i){
			options.items.eq(this.index).css({
				left:0
			}).stop().animate({
				left:-options.items.eq(0).width()*i
			},this.moveTime).end().eq(index).css({
				left:options.items.eq(0).width()*i
			}).stop().animate({
				left:0
			},this.moveTime)
		}
		if(options.left!=undefined&&options.right!=undefined&&options.left.length>0&&options.right.length>0){
			options.left.on("click",function(){
				if(that.LOCAL.index==0){
						that.LOCAL.index=options.items.length-1;
						that.LOCAL.iPrev=0;
					}else{
						that.LOCAL.index--;
						that.LOCAL.iPrev=that.LOCAL.index+1;
					}
					that.LOCAL.iPrevMove(1)
			})
			options.right.on("click",function(){
				that.LOCAL.rightBtn()
			})
		}
		this.LOCAL.rightBtn=function(){
			if(that.LOCAL.index==options.items.length-1){
				that.LOCAL.index=0;
				that.LOCAL.iPrev=options.items.length-1;
			}else{
				that.LOCAL.index++;
				that.LOCAL.iPrev=that.LOCAL.index-1;
			}
			that.LOCAL.iPrevMove(-1)
		}
		this.LOCAL.iPrevMove=function(i){
			options.items.eq(this.index).css({
				left:-options.items.eq(0).width()*i
			}).stop().animate({
				left:0
			},this.moveTime).end().eq(this.iPrev).css({
				left:0
			}).stop().animate({
				left:options.items.eq(0).width()*i
			},this.moveTime)
			options.list.eq(this.index).css(this.moveColor).siblings().css(this.outColor)
		}
		if(this.LOCAL.autoPlay){
			this.LOCAL.timer=setInterval(function(){
				that.LOCAL.rightBtn()
			},this.LOCAL.delayTime)
			this.hover(function(){
				clearInterval(that.LOCAL.timer)
			},function(){
				that.LOCAL.timer=setInterval(function(){
				that.LOCAL.rightBtn()
			},that.LOCAL.delayTime)
			})
		}
	}
})(jQuery);