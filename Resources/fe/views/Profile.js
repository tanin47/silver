__exports = (function() {
	var view = Ti.UI.createView({ 
		backgroundColor: '#666'
	});
	
	view.menuButton = Ti.UI.createButton({
		left: 10,
		top: 10,
		width: 100,
		height: 30,
		title: 'Menu'
	});
	view.add(view.menuButton);
	
	view.add(Ti.UI.createLabel({
		text: "This is the Profile page",
		width: 'auto',
		textAlign: 'center',
		color: '#FFF'
	}));
	
	return view;
})();
