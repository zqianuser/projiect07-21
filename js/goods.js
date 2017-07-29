(function(){
	
	 //封装商品元素的类
	 function GoodItem(obj){
	
	     this.des=obj;  //记录商品信息（详情）
	     
	     var space=20;
         var colume=5;
         var width=(1200-space*colume-1)/ colume;
         this.gid = obj.goods_id;
        
        //显示图片   单独的商品信息
	    this.item = $("<div class='good-box' data-gid='"+obj.goods_id+"'></div>");
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
	  $('.good-box').click(function () {
	  	    var gid = $(this).data('gid');
	  	    localStorage.setItem('gid',gid)
			var i=this.firstChild;
			var i1=this.firstChild.nextSibling;
			var i2=this.firstChild.nextSibling.nextSibling;	
			
			var i3=this.firstChild.nextSibling.nextSibling.nextSibling;
		    var i4=$("<div class='btn'></div>");
		    var i5=$("<button class='buy'>立即购买</button>")
		    var i6=$("<button class='join'>加入购物车</button>")
		  
			console.log(i2.innerHTML)
			console.log(this.firstChild.innerText)
			console.log(this.firstChild.nextSibling)
			console.log(this.firstChild.nextSibling.nextSibling)
			$(".replace").html(i);
			$(".replace").append(i1);
			$(".replace").append(i2);
			$(".replace").append(i3);
			$(i4).append($("<button class='btn1'>-</button>"),$("<input type='text' value='1' class='wenben'/>"),$("<button class='btn2'>+</button>"))
		    $(".replace").append(i4)
		    $(".replace").append(i5)
		    $(".replace").append(i6)
             i.className="goodsname";
             i1.className="pic";
             i2.className="pri";
             i3.className="pric";
            
            
           $(".btn").css({
           	position:"absolute",
            top:"400px",
            left:"300px"
          })   
          $(".btn1").css({
          
          	width:"50px",
          	height:"50px",
          	top:"500px"
          })
           $(".wenben").css({
          	width:"50px",
          	height:"47px",
          	"text-align":"center"
          })
           $(".btn2").css({
          	width:"50px",
          	height:"50px"
          })     
          
			//加的效果
			$(".btn2").click(function(){
			var n=$(this).prev().val();
			n++;
			
			$(this).prev().val(n);
			
			});
			//减的效果
			$(".btn1").click(function(){
			var n=$(this).next().val();
			n--;
			n==0?n=1:n=n;
			$(this).next().val(n);
			
		   });
		
			$(".join").click(function(){
				console.log($('.wenben'));
				var url = PRODUCT_HOST+CART+"?token="+localStorage.getItem("token");
			    var parm = {goods_id:localStorage.getItem('gid'),number:$('.wenben').val()};
			    $.post(url,parm,function (result) {
			        alert(result.message);
			        location.href="cart_list.html";
			    });
			
			}.bind(this))
           $(".buy").click(function(){
				console.log($('.wenben'));
				var url = PRODUCT_HOST+CART+"?token="+localStorage.getItem("token");
			    var parm = {goods_id:localStorage.getItem('gid'),number:$('.wenben').val()};
			    $.post(url,parm,function (result) {
			        //alert(result.message);
			        location.href="order.html";
			    });
			
			}.bind(this))
	     
	  
	  })
	  
		
	};
	    
	
	
	window.Good=Good;
})()
