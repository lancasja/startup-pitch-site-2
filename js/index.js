(function() {
	$(document).ready(function() {
		
		$('#secondary').waypoint(function(direction) {

			var sectionCopy = $('#secondary .section-copy');

			if (direction === 'down') {
				sectionCopy
					.css('display', 'block')
					.addClass('fadeIn');

				$('nav').addClass('bg-on');
			}
			else if (direction === 'up') {
				sectionCopy
					
					.removeClass('fadeIn')
					
					.animate({opacity: 0}, function() {
						$(this).css({
							display: 'none',
							opacity: 1
						});
					});

				$('nav').removeClass('bg-on');
			}
		}, { offset: 300 });

		$('#learnMore').waypoint(function(direction) {

		var sectionCopy = $('#learnMore .section-copy');

		if (direction === 'down') {
			sectionCopy
				.css('display', 'block')
				.addClass('fadeIn');
		}
		else if (direction === 'up') {
			sectionCopy
				.removeClass('fadeIn')
				.animate({opacity: 0}, function() {
					$(this).css({
						display: 'none',
						opacity: 1
					});
				});
			}
		}, { offset: 300 });

		$('#locations').waypoint(function(direction) {

		var sectionCopy = $('#locations .location-copy');

		if (direction === 'down') {
			sectionCopy
				.css('display', 'block')
				.addClass('fadeInLeftBig');
		}
		else if (direction === 'up') {
			sectionCopy
				.removeClass('fadeInLeftBig')
				.animate({opacity: 0}, function() {
					$(this).css({
						display: 'none',
						opacity: 1
					});
				});
			}
		}, { offset: 500 });

	});
})();