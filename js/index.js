<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});
    
    $('#bringbacktaphold').on("tap",function(){
       $('#tapholdtext').show(); 
    });

	$('#taptext').on("tap",function(){
    	alert("Stop tapping!");
        $(this).css('color', 'red');
 	}); 

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
        
  	});   
    
    $('#swipetext').on("swiperight",function(){
        $(this).css('color', 'blue');
            
    });

});