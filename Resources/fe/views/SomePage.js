__exports = (function() {
	var view = Ti.UI.createView({ 
		backgroundColor: '#333'
	});
	
	view.backButton = Ti.UI.createButton({
		left: 10,
		top: 10,
		width: 100,
		height: 30,
		title: 'Back'
	});
	view.add(view.backButton);
	
	
	view.nextButton = Ti.UI.createButton({
		right: 10,
		top: 10,
		width: 100,
		height: 30,
		title: 'Next'
	});
	view.add(view.nextButton);
	

	view.add(Ti.UI.createLabel({
		text: "This is the SomePage page",
		width: 'auto',
		textAlign: 'center',
		color: '#FFF'
	}));
	
	
	return view;
})();
