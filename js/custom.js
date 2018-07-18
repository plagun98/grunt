// JavaScript Document
jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';

	var slid = jQuery('#my_new_slider');
		
	slid.owlCarousel({
		items: 7,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: true,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: false
			},
			479:{
				items: 3,
				dots: true,
				mouseDrag: true,
				autoplay: false
			},
			767:{
				items: 4,
				mouseDrag: true,
				dots: true,
				autoplay: false
			},
			991:{
				items: 5,
				mouseDrag: true
			},
			1099:{
				items: 7,
				mouseDrag: true
			}
		}
	});
	});