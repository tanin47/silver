__exports.viewLoaded = function() {
	this.view.addButton.addEventListener('click', function() {
		Fe.pushController(Fe.controllers.SomePage);
	});
	
	this.view.menuButton.addEventListener('click', function() {
		Fe.controllers.Frame.toggleMenu();
	});
};

__exports.viewWillAppear = function() { 
	Ti.API.warn("News will appear");
};

__exports.viewDidAppear = function() {
	Ti.API.warn("News did appear");
};

__exports.viewWillDisappear = function() {
	Ti.API.warn("News will disappear");
};

__exports.viewDidDisappear = function() {
	Ti.API.warn("News did disappear");
};
