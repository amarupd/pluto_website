(function ($) {
	"use strict";

	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 4,
		spaceBetween: 20,

		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			360: {
				slidesPerView: 2,
			},
			420: {
				slidesPerView: 3,
			},

			768: {
				slidesPerView: 4,
			},
			1024: {
				slidesPerView: 4,
			},
		},
	});

	//Get the button

	$(window).scroll(function () {
		if ($(this).scrollTop()) {
			$("#scrolltop").fadeIn();
		} else {
			$("#scrolltop").fadeOut();
		}
	});

	$("#scrolltop").click(function () {
		window.scrollTo(0, 0);
	});

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 200) {
			$(".navbar").addClass("fixed-top");
		} else {
			$(".navbar").removeClass("fixed-top");
		}
	});
})(jQuery);
