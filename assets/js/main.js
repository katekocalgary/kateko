/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// count animation

$('.count').each(function () {
	$(this).prop('Counter',0).animate({
			Counter: $(this).text()
	}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
					$(this).text(Math.ceil(now));
			}
	});
});

// navication for mobile

	(function($) {
	
			// Play initial animations on page load.
		
			var	$window = $(window);

		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

		// Toggle.

		$body = $('body');
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});


			// Event: Toggle.
			$body.on('click', 'a[href="#' + id + '"]', function(event) {

				event.preventDefault();
				event.stopPropagation();

				config.target.toggleClass(config.visibleClass);

			});

})(jQuery);

