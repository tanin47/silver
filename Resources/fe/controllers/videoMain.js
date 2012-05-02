__exports.viewLoaded = function() {
	this.view.menuButton.addEventListener('click', function() {
		Fe.controllers.frame.toggleMenu();
	});
};