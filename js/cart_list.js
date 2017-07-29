 function Cart(url){
 	this.showCart(url);
 }
 Cart.prototype.showCart = function(url){
 	 var parm = {token:localStorage.getItem("token")};
    
	  $.get(url,parm,function (result) {
	
	    //console.log(result.data);
	
	    var container = $("<ul></ul>");
	    result.data.forEach(function (item) {
	    	
	    	
	    
	    //var li = $("<li><h3>"+item.goods_name+"</h3><img class='image' src='"+item.goods_thumb+"' alt=''><h4>"+item.goods_number+"</h4><p>"+item.goods_price+"</p><button class='btn'>删除</button></li>");
	        var li =$("<li></li>");       
	        var li1=$(" <input type='checkbox'  >")
	        var li2=$("<img class='image' src='"+item.goods_thumb+"' alt=''>")
	        var li3=$("<p>"+item.goods_name+"</p>")
	        var li4=$("<h3>"+item.goods_number+"</h3>")
	        var li5=$("<h3>"+item.goods_price+"</h3>")
	        var li6=$("<h3>"+item.goods_price*item.goods_number+"</h3>")
	        var li7=$("<button class='btn' data-id='"+item.goods_id+"'>删除</button>")
	      
	        li.append(li1) 
	        li.append(li2)
	        li.append(li3)
	        li.append(li4)
	        li.append(li5)
	        li.append(li6)
	        li.append(li7)
	        li.css({
	         	"list-style":"none",
	            float:"left",
	            width: "1200px",
	            height: "200px",
	           
	        });
	        li1.css({
	        	 float:"left",
	        })
	        li2.css({
	        	width: "60px",
	            height: "60px",
	            float:"left"
	        })
	        li3.css({
	            float:"left",
	            "padding-left":"40px"
	        })
	         
	         li4.css({
	            float:"left",
	             "padding-left":"40px"
	        })
	             
	         li5.css({
	            float:"left",
	             "padding-left":"30px"
	        })
	         li6.css({
	            float:"left",
	             "padding-left":"50px"
	        })
	          li7.css({
	            float:"right",
	            "right":"30px"
	            
	        })
	        container.append(li);
	     
	    });
	
	    $(".cart-container").append(container);
	});
 }   


$(document).on('click','.btn',function(){
	var gid = $(this).data('id');
	var url = PRODUCT_HOST+CART+"?token="+localStorage.getItem("token");
    var parm = {goods_id:gid,number:0};
    $.post(url,parm,function (result) {
//      alert(result.message);
        if(result.code==0){
        	$(this).parent().remove();
        }
        //location.href="cart_list.html";
    }.bind(this));
});
