(function(){
	
	 //封装商品元素的类
	 function GoodItem(obj){
	
	     this.des=obj;  //记录商品信息（详情）
	     
	     var space=20;
         var colume=5;
         var width=(1200-space*colume-1)/ colume;
        
        //显示图片   单独的商品信息
	    this.item = $("<div class='good-box'></div>");
        var name = $("<p class='good-name'>"+obj.goods_name
            +"</p>");
        var other = $("<p><img width='"+width+"px' src='"+obj.goods_thumb
                    +"' alt=''></p><h3>￥"+obj.price+"</h3><p>"+obj.goods_desc
                    +"</p>");

        this.item.append(name);
        this.item.append(other);

        
             this.item.css({
            width:width+"px",
            height:"384px",
            border:"2px #ff4411 solid",
            "box-sizing": "border-box",
            float:"left",
            overflow: "hidden",
            position: "relative"
        });

        name.css({
            position: "absolute",
            height: "20px",
            "line-height": "20px",
            display: "none"
        });

        this.item.hover(function () {
            $(this).children().css("display","block");
        },function () {
            $(".good-name").css("display","none");
        });


   
	 }
	 GoodItem.prototype.click=function(callback){
	 	 this.item.on("click",this,callback);  //通过on 绑定事件   
	 	 return this;   //使用链式函数
	 }
	 
	//封装商品的类
	 function Good(url,parm,superView,action){
	 	// function Good(url,parm)
	 	//this.superView=superView;  不传参数
	 	//this.action=action;   不传参数
	 	this.loadDate(url,parm,superView,action);
	 }
	
	Good.prototype.loadDate=function(url,parm,superView,action){
		// function Good(url,parm)
		$.get(url,parm,function(result){
			if (result.code==0) {
				this.showGoodsView(result.data,superView,action)
				//this.showGoodsView(result.data)  不传参数
			}
		}.bind(this));
	};
	
	Good.prototype.showGoodsView=function(goods,superView,action){
		  //console.log(goods)  action触发函数
		//在superView上创建商品列表
		//var self=this;  不传参数
		// function Good(url,parm)
		goods.forEach(function(data){
			//self.superView.append(new GoodItem(data).click(action).item)   不传参数
			superView.append(new GoodItem(data).click(action).item)
		})
	};
	
	window.Good=Good;
})()
