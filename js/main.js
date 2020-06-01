function ibg(){

	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}

ibg();

$(document).ready(function(){
	$('.icon-menu').click(function(event){
		$('.icon-menu, .menu__body').toggleClass('active')
		$('body').toggleClass('lock')
	})
})

$(document).ready(function(){
	$('.industry__slider').slick({
		speed: 600,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive:[
		{
			breakpoint: 1025,
			settings: {
				arrows: false,
			}
		},
		]
	});
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
	showSlides(slideIndex += 1);
}

function minusSlide() {
	showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("testimonials__slider-item");
	var dots = document.getElementsByClassName("dot");
	var dots2 = document.getElementsByClassName("dot2");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active3", "");
	}
	for (i = 0; i < dots2.length; i++) {
		dots2[i].className = dots2[i].className.replace("active2", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active3";
	dots2[slideIndex - 1].className += " active2";
}

$(function(){
	var header = $("#header"),
	aboutH = $("#about").innerHeight(),
	scrollOffset = $(window).scrollTop();
	checkScroll(scrollOffset); 

	$(window).on("scroll", function(){
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset){

		if (scrollOffset >= aboutH) {
			header.addClass("fixed");
		}else {
			header.removeClass("fixed");
		}
	}
});

$(function() {
	
	$(window).scroll(function() {
		
		if($(this).scrollTop() != 0) {
			
			$('#toTop').fadeIn();
			
		} else {
			
			$('#toTop').fadeOut();
			
		}
		
	});
	
	$('#toTop').click(function() {
		
		$('body,html').animate({scrollTop:0},800);
		
	});
	
});