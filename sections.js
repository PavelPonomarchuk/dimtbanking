'use strict';

$('.content__container-structure-plan-part-link').click(function() {
	$('.is-active').removeClass('is-active');
	$(this).addClass('is-active');
	var number = $(this).data('number');
	$('.is-active-section').removeClass('is-active-section');
	if (number == '1') {	
		$('#1').addClass('is-active-section');
	} else if (number == '2') {		
		$('#2').addClass('is-active-section');
	} else if (number == '3') {		
		$('#3').addClass('is-active-section');
	} else if (number == '4') {		
		$('#4').addClass('is-active-section');
	}
});