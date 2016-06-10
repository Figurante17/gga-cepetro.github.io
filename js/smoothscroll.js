jQuery(document).ready(function($) { 
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({
			scrollTop:$(this.hash).offset().top
		}, {
			duration: 1100
		});
	});
});

$( window ).scroll(function() {
    if(document.body.scrollTop > 650){
         $(".seta").fadeIn(2000);
         $( ".seta" ).css( "display", "block" );
    }else{          
         $(".seta" ).css( "display", "none" );
    }
});