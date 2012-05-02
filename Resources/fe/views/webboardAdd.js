__exports = (function() {
	var view = Ti.UI.createView({ 
		backgroundColor: '#999',
		backgroundImage: 'images/background.jpg' 
	});
	
	view.backButton = Ti.UI.createButton({
		left: 10,
		top: 10,
		width: 100,
		height: 30,
		title: 'Back'
	});
	view.add(view.backButton);
	
	
	view.topicTextarea = Titanium.UI.createTextArea({
		top: 42,
		left: 1,
		right: 1,
		bottom: 0,
		editable: true
	});
	
	view.add(view.topicTextarea);
	
	return view;
})();
