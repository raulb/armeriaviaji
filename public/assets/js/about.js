$(document).ready(function(){
  $('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: false
		},
		zoom: {
			enabled: false
		}
	});
});
