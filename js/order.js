	new Cart(PRODUCT_HOST+CART);

   
 $("")	
 var url =  PRODUCT_HOST+USER+"?status=add&token="+localStorage.getItem("token");
 var parm = {address_name:" ",consignee:"",country:"",province:"",city:"",district:"",address:"",zip_code:"",mobile:"",email:"",tel:""};
    $.post(url,parm,function (result) {
       // document.write(result.message);
        console.log(result.data);
    });

   
