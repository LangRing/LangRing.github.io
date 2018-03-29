(function($) {
	"use strict";
	/*-----------------------------------------------------*/
  	/* 菜单栏
   ------------------------------------------------------ */  
	var toggleButton = $('.menu-toggle'),
		nav = $('.main-navigation');

	toggleButton.on('click', function(e) {
		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();
	});

	nav.find('li a').on("click", function() {   		
	    toggleButton.toggleClass('is-clicked'); 
		nav.fadeOut();   			
	});
	/*---------------------------------------------------- */
  	/* 滚动
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});

	});
	/*----------------------------------------------------*/
	/*	图片弹出框
	------------------------------------------------------*/
	$('.item-wrap a').magnificPopup({
		type:'inline',
		fixedContentPos: false,
		removalDelay: 300,
		showCloseBtn: false,
		mainClass: 'mfp-fade'
  
	 });
	 $(document).on('click', '.popup-modal-dismiss', function (e) {
		 e.preventDefault();
		 $.magnificPopup.close();
	 });
 	/*----------------------------------------------------- */
  	/* 返回顶部
   ------------------------------------------------------- */ 
	var pxShow = 300;
	var fadeInTime = 400;
	var fadeOutTime = 400;
	var scrollSpeed = 300;
	jQuery(window).scroll(function() {
		if (!( $("#header-search").hasClass('is-visible'))) {
			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}
		}		
	});		
})(jQuery);