$(document).ready(function() {
	$('.responsive-sidebar-nav')
	.affix({
	  offset: {
	    top: 100
	  }
	})
	// This event fires immediately before the element has been affixed
	.on('affix.bs.affix', function (){
		$(this).addClass('sidebar_scroll');		
	})
	// This event fires immediately before the element has been affixed-top.
	.on('affix-top.bs.affix', function (){
		$(this).removeClass('sidebar_scroll');
		$(this).css('position','absulute');
	});

	//scroll Top
	$(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.scroll_top').fadeIn();
        } else {
            $('.scroll_top').fadeOut();
        }
    });

    $('.scroll_top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});