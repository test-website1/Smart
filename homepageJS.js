let button = document.getElementById("menu-button-id");
let menuToggle = document.getElementById("menu-nav-mobile");

button.onclick = function() {
	menuToggle.classList.toggle("show-mobile-menu");
}


$(document).ready(() => {
	$("#slider-container .slick").slick({
		dots: true,
		speed: 1000,
		autoplay: true,
		prevArrow: document.querySelector(".prevButton"),
		nextArrow: document.querySelector(".nextButton"),
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},

			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}
		]
	});
});