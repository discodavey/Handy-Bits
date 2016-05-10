// Mobile Menu Assets

  $('.hamburger-menu').click(function() {
        $('.menu-layout').slideToggle();
  });
  
  
  // Screen Detection changes for Main Navigation
  
  if (window.matchMedia) {
	var mq = window.matchMedia("(min-width: 601px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}

function WidthChange(mq) {

	if (mq.matches) {
		$('.menu-layout').show();
    $('.hamburger-menu').hide();
	}
	else {
		$('.menu-layout').hide();
    $('.hamburger-menu').show();
	}

}