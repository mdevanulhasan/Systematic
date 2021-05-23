// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
// Our Custom Javascript or jQuery Codes is given below.
$(document).ready(function(){
	// BX Slider
	$('.slider_area').bxSlider({
		//mode: 'fade',
		//mode: 'horizontal',
		//preventDefaultSwipeX: true,
		// slideWidth: 1000,
		mode: 'vertical',
		preventDefaultSwipeY: true,
		pager: true,
		speed: 500,
		startSlide: 1,
		keyboardEnabled: true,
		auto: true,
		autoDirection: 'prev',
		autoHover: true
	});
	// Mean Menu
	$('#main_menu').meanmenu({
		meanMenuContainer: "#mobile_menu",
		meanScreenWidth: 991,
	});
});