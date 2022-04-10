jQuery(document).ready(function(){ 

	// Mobile menu
	$('.nav-icon').click(function () {
		$('.mobile_menu').toggleClass('canvas-menu');
		return false;
	});
	
	
	// Home owlCarousel
	jQuery('.contac_box_slider').owlCarousel({
		loop:true,
		margin:25,
		nav:true,
		autoplay:false,
		dots:true,
		responsive:{
			0:{
				items:1,
			},
			576:{
				items:2,
			
			},
			768:{
				items:2,
			},
			1200:{
				items:3,
			}
		}
	});
	

	

});