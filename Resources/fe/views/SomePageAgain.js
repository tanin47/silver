__exports = (function() {
	var view = Ti.UI.createView({
		backgroundColor: '#666'
	});
	
	view.backButton = Ti.UI.createButton({
		left: 10,
		top: 10,
		width: 100,
		height: 30,
		title: 'Back'
	});
	view.add(view.backButton);
	

	view.add(Ti.UI.createLabel({
		text: "This is the SomePageAgain page",
		width: 'auto',
		textAlign: 'center',
		color: '#FFF'
	}));
	
	return view;
})();
