
$(document).ready(function(){
	if($(window).innerWidth() < 1024){
		$('.list-service .row').slick({
			autoplay:false,
			arrow:false,
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: false,
			nextArrow: '',
			prevArrow: '',
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						dots: true,
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
					}
				},
			],
		});
	};
	$('.slide-line').slick({
		autoplay:false,
		arrow:false,
		autoplaySpeed: 0,
		speed: 8000,
		slidesToShow: 6,
		slidesToScroll: 1,
		dots: false,
		centerMode: true,
		nextArrow: '',
		prevArrow: '',
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				}
			},
		],
	});
	$('.slide-gall').slick({
		autoplay:false,
		arrow:false,
		slidesToShow: 5,
		slidesToScroll: 1,
		nextArrow: '',
		prevArrow: '',
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				}
			},
		],
	});
})