function init(){
	
	$(".header-top-login").click(function(){
		new Login(function(user) {   //user相当于date.data
	         $(".header-top-menu ul li:first-child").
	    html("<a href='#'>" + user.username + "</a>");
         });
	});
	
	//初始化导航
	new Navigater().createView(PRODUCT_HOST+PRODUCT_TYPE,$(".main-nav-container"),function(event){
		console.log(event);
	})	
	//选择器  图片数组  宽度和高度
	new corouselView.Corouse("#left-course",[{imagePath:"image/header/hot1.jpg"}
	,{imagePath:"image/header/hot2.jpg"}],200,400).putSuperView().createControlButton()
	.startTimer(3*1000);
     
    new corouselView.Corouse("#center-course",[{imagePath:"image/header/TB1BunHRVXXXXagaXXXXXXXXXXX-750-340.jpg"}
	,{imagePath:"image/header/TB1jT3mRVXXXXXnXXXXXXXXXXXX-750-340.jpg"}],752,400).putSuperView()
	.startTimer(2*1000);
	
	new corouselView.Corouse("#right-course",[{imagePath:"image/header/hot1.jpg"}
	,{imagePath:"image/header/hot2.jpg"}],200,400).putSuperView().createControlButton()
	.startTimer(3*1000);
	
	//new Good(url,parm);
		//	cat_id	int	商品分类编号(必须传递)
		//	page	int	商品列表编号
		//	pagesize	int	商品列表中数据数量

	new Good(PRODUCT_HOST+GOODS,null,$(".goods-container"),function(event){
		     console.log(event.data); 

	});
}
    

init();
