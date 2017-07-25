
//为了防止其他的插件与jquery重名，可以通过noConflict找到jquery对象，重新更改表示jquery对象的符号
var $=jQuery.noConflict();

(function(){
	
	function Login(success){
		this.showLogin(success);
	};
	Login.prototype.showLogin=function(success){
		var loginContainer=$("<div class=' loginContainer'></div>");
		var closeButton=$("<button>关闭</button>");
	    var usernameInput=$("<p><input type='text' placeholder='用户名'></p>");
	    var passnameInput=$("<p><input type='password' placeholder='密码'></p>");
	    var Loginbutton=$("<p><button>登陆</button></P>");
	    
	    loginContainer.css({
	    	width:"400px",
	    	height:"300px",
	    	"background-color":"#912020",
	    	border:"5px solid #ffd42c",
	    	position:"absolute",
	    	top:"50%",
	    	left:"50%",
	    	"box-sizing":"border-box",  //重新设置盒子的尺寸
	    	margin:"-150px -200px 0 0"  //上 左
	    });
	    
	    var inputCss={
	    	padding:"20px 0",
	    	width:"300px",
	    	margin:"0 auto",
	    	"text-align":"center"
	    };

//	    usernameInput.css({
//	    	padding:"20px 0",
//	    	width:"300px",
//	    	margin:"0 auto",
//	    	"text-align":"center"
//	    });
	    
	    usernameInput.css(inputCss);
	    passnameInput.css(inputCss);
	    Loginbutton.css(inputCss);
	    
	    closeButton.css({
	    	float:"right",
	    	color:"white",
	    	padding:"5px"
	    });
	    
//	     closeButton.click(function(){
//	     	 loginContainer.remove();
//	     });
	    
	    closeButton.click(function(){
	    	
	     	 loginContainer.fadeOut("swing",function(){  //slideUp  animate
	     	 	 loginContainer.remove();
	     	 });
	     });
       
       Loginbutton.click(function(){
       	  
        	$.post(PRODUCT_HOST+LOGIN,{status:"login",
        	 username:usernameInput.children().val()
        	 ,password:usernameInput.children().val()},function(data){
        			//alert("login success");
        			//console.log(data);
        			if(data.code==0){   //登陆成功，输入框移除
        				loginContainer.slideUp(500,function(){
        					loginContainer.remove();
        					
        					//执行外面传入的方法
        					console.log(data)
        					success(data.data);  //success传入进来的函数(回调函数)    data服务端传进来的信息
        					
        				});
        			}else{
        				alert(data.message);
        			}
        		}
        	);
        });
	   
	   
	   
	    loginContainer.append(closeButton);
	    loginContainer.append(usernameInput);
	    loginContainer.append(passnameInput);
	    loginContainer.append(Loginbutton);
	    
	    $(document.body).append(loginContainer);
	};
	


   window.Login=Login;
})();
