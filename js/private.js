
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
	$('.slide-preview').slick({
		autoplay:false,
		arrow:true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<a href="javascript:void(0)" class="arr-right"><img src="images/arr-right.png" class="img-fluid" alt=""></a>',
		prevArrow: '<a href="javascript:void(0)" class="arr-left"><img src="images/arr-left.png" class="img-fluid" alt=""></a>',
	});
})