
$(document).ready (function(){
	$('.question').click(function(){

		$(this).parent('.faq-outer').find('.answer').slideToggle(400, function(){
			if ($(this).is(':visible')) {
				$(this).parent('.faq-outer').find('.question').addClass('arrow-up');
			}

			if ($(this).is(':hidden')) {
				$(this).parent('.faq-outer').find('.question').removeClass('arrow-up');
			}
		});
	});
});
