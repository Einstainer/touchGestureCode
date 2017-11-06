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
        a=true;
        $('#swipetext').on("swipeleft",function(){
            $(this).css('color', 'green');
        });
        a=false;
    });

    
    $('#pageone').on("swipeleft",function(){
        if(a== false){
            $('pageone').on("swipeleft",function(){
    	       $.mobile.navigate( "#pagetwo" );
            });
        }
    });
    
    $('#pagetwo').on("swipeleft",function(){
        $('#swipetext').on("swipeleft",function(){
            $(this).css('color', 'green');
        });
    });
    
    $('#pagetwo').on("swiperight",function(){
        if($.event.special.swipe.start.origin == $("#swipetext")){
            $('#swipetext').on("swiperight",function(){
    	       $(this).css('color', 'blue');
            });
        }
        
        else{
            $('pagetwo').on("swiperight",function(){
    	       $.mobile.navigate( "#pageone" );
            });
        }
    });

});