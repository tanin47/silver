__exports.viewLoaded = function() {
	var self = this;
	
	this.view.backButton.addEventListener('click', function() {
		Fe.popController();
	});
	
	this.view.viewButton.addEventListener('click', function() {
		Fe.pushController(Fe.controllers.webboardView);
	});
	
	this.view.topicTextarea.addEventListener('return', function(e) {
		Fe.popController();
	});
};

__exports.viewDidAppear = function() {
	this.view.topicTextarea.focus();
};

__exports.viewWillDisappear = function() {
	this.view.topicTextarea.blur();
};
