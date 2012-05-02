__exports = (function() {
	var view = Ti.UI.createView({ 
		backgroundColor: '#999',
		backgroundImage: 'images/background.jpg' 
	});
	
	view.menuButton = Ti.UI.createButton({
		left: 10,
		top: 10,
		width: 100,
		height: 30,
		title: 'Menu'
	});
	view.add(view.menuButton);
	
	return view;
})();
