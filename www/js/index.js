<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate",function(){
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});                       

	$('#taptext').on("tap",function(){
    	$(this).css('color', 'red');
 	}); 

    
    $('#pageone').on("swipe",function(){
        if($.event.special.swipe.start.origin == $('#swipetext')){
            $('#swipetext').on("swiperight",function(){
    	       $(this).css('color', 'blue');
            });
            
            $('#swipetext').on("swipeleft",function(){
               $(this).css('color', 'green');
            });
        }
        
        else{
            $.mobile.navigate( "#pagetwo" );
        }
    });
    
    $('#pagetwo').on("swipe",function(){
        if($.event.special.swipe.start.origin == $('#swipetext')){
            $('#swipetext').on("swiperight",function(){
    	       $(this).css('color', 'blue');
            });
            
            $('#swipetext').on("swipeleft",function(){
               $(this).css('color', 'green');
            });
        }
        
        else{
            $.mobile.navigate( "#pageone" );
        }
    });

});