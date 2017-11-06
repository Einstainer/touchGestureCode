<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});                       

	$('#taptext').on("tap",function(){
    	$(this).css('color', 'red');
 	}); 

    
    $('#swipetext').on("swiperight",function(){
    	$(this).css('color', 'blue');
  	});
    
    $('#pageone').on("swipeleft",function(){
        if($.event.special.swipe.start.origin == $('#swipetext')){
            $(this).css('color', 'green');
        }
        
        else{
            $.mobile.navigate( "#pagetwo" );
        }
    });
});

$(document).on("pagecreate","#pagetwo",function(){
  
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});                       

	$('#taptext').on("tap",function(){
    	$(this).css('color', 'red');
 	}); 

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
  	});

    
    $('#pageone').on("swiperight",function(){
        if($.event.special.swipe.start.origin == $('#swipetext')){
            $(this).css('color', 'green');
        }
        
        else{
            $.mobile.navigate( "#pageone" );
        }
    });


});