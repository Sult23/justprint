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

//arrow-down
$(function () {
	$('.goto').on('click', function () {
		$('html, body').animate({
			scrollTop: 850,
		})
	})
})

//slider
$(function () {
	$('.slider__inner').slick({
		dots: true,
		arrows: false,
		autoPlay: true,
		speed: 200,
		slidesToShow: 3,
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
