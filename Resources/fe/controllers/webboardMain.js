__exports.viewLoaded = function() {
	this.view.addButton.addEventListener('click', function() {
		Fe.pushController(Fe.controllers.webboardAdd);
	});
	
	this.view.menuButton.addEventListener('click', function() {
		Fe.controllers.frame.toggleMenu();
	});
};
