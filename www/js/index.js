<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate",function(){
    
    var a=false;
    
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});                       

	$('#taptext').on("tap",function(){
    	$(this).css('color', 'red');
 	}); 
    
    $('#pageone').on("swiperight",function(){
        $('#swipetext').on("swiperight",function(){
            $(this).css('color', 'blue');
        });
    });
    
    $('#pageone').on("swipeleft",function(){
        $('#swipetext').on("swipeleft",function(){
            a=true;
            $(this).css('color', 'green');
        });
        if(a == false){
    	       $.mobile.navigate( "#pagetwo" );
        }
        a=false;
    });
    
    $('#pagetwo').on("swipeleft",function(){
        $('#swipetext').on("swipeleft",function(){
            $(this).css('color', 'green');
        });
    });
    
    $('#pagetwo').on("swiperight",function(){
        $('#swipetext').on("swiperight",function(){
            a=true;
            $(this).css('color', 'blue');
        });
        if(a == false){
    	       $.mobile.navigate( "#pageone" );
        }
        a=false;
    });
});