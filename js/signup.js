(function() {

	var accessBtn = $('#closing .learn-more a.btn');
	var signupModal = $('#closing .signup-modal');
	var closeBtn = $('#closing .modal-content .close');
	var submitBtn = $('#mc-embedded-subscribe');

	accessBtn.click(function(event) {
		event.preventDefault();
		signupModal.addClass('show');
	});

	closeBtn.click(function() {
		signupModal.removeClass('show');
	});

	submitBtn.click(function() {
		signupModal.removeClass('show');
	});

})();