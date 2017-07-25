
var $=jQuery.noConflict();
(function(){
	
	//NavigaterItem  现在导航栏上的每一个按钮  (按钮的名字、按钮的id)
	
	function NavigaterItem(obj){
		var obj=obj||{};
		this.name=obj.cat_name;
		this.id=obj.cat_id;
		this.item=$("<li>"+this.name+"</li>");
	
	}
	
	//itemclick> NavigaterItem  上面的itemclick
	NavigaterItem.prototype.itemclick=function(callback){
		//click -> 是this.item调用的   是jquery对象里面的click
		//callback 函数中的形参
		this.item.on("click",this,callback);
		
		return this;
	};
	
	window.NavigaterItem=NavigaterItem  //外部可以调用
//	new NavigaterItem().click(function(){
//		调用
//	)}
	function Navigater(){
		
		
	}
	
	// 点击导航按钮的时候   需要知道  点击按钮的商品类型id
	Navigater.prototype.createView=function(url,superView,callback){
		$.get(url,function(result){
			
			//console.log(result)
			if (result.code==0) {
				result.data.forEach(function(obj){
					// 创建导航列表
					superView.append(new NavigaterItem(obj).itemclick(callback).item)
				})
			}
		})
		return this;  //之后可以使用链式函数去调用
	};
	
	window.Navigater=Navigater;
})();
