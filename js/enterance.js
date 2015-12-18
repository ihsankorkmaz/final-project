
/** CURVING TEXT */

$(document).ready(function() { 	

    $('.view-menu').arctext({radius: 130});
    $('.services').arctext({radius: 130, dir: -1});
 
 
 
         
//view menu and services buttons

var statuMenu = 0;
hideObjects();  
    
$(document).on("click",".circle-right", function () {
   
   


    if(statuMenu == 0){

       $(".waiter").show();
        $(".water").show();
        $(".bill").show();
            
        $('.waiter').animate({
          left: "740",
          top: "280"  
      }, 200);
        $('.water').animate({
          left: "680",
          top: "495"  
      }, 200);
        $('.bill').animate({
          left: "480",
          top: "600"  
      }, 200);

    
        statuMenu = 1;
    }
    else{
    
        $('.waiter').animate({
          left: "420",
          top: "280"  
      }, 200, function(){
        
            hideObjects();
        
            }
        );
        $('.water').animate({
          left: "420",
          top: "280"  
      }, 200);
        $('.bill').animate({
          left: "420",
          top: "280"  
      }, 200);

        statuMenu = 0;
    
    }


});
    
function hideObjects(){

        $(".waiter").hide();
        $(".water").hide();
        $(".bill").hide();

}    
     
$(document).on("click",".circle-left", function () {
   
    $('.container').fadeOut(400, function () {
        
        window.location.replace("page1.html");
        
    });
      
});


                       
});