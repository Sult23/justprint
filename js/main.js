//scroll-arrow
$(function () {
	$('.scrollup').on('click', function () {
		$('html, body').animate({
			scrollTop: 0,
		})
	})
})
$(window).on('scroll', function () {
	if ($(this).scrollTop() > 200) {
		$('.scrollup').fadeIn()
	} else {
		$('.scrollup').fadeOut()
	}
})

//slider
$(function () {
	$('.slider__inner').slick({
		dots: true,
		arrows: false,
		speed: 300,
		slidesToShow: 3,
		autoPlay: true,
	})
})

//reserve-popup
$('.header__btn').on('click', function () {
	$('.popup').toggleClass('popup--active')
	$('body').css('overflow', 'hidden')
})
$('.popup__btn--close').on('click', function () {
	$('.popup').removeClass('popup--active')
	$('body').css('overflow', 'visible')
})
