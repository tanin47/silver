__exports = (function() {
	var view = Ti.UI.createView({ 
		backgroundColor: '#000' 
	});
	
	view.mainFrame = Titanium.UI.createView({
		left: -Fe.screenWidth,
		top: 0,
		width: Fe.screenWidth * 2,
		height: Fe.screenHeight
	});
	
	view.add(view.mainFrame);
	
	
	view.mainMenu = Titanium.UI.createView({
	    title:'Menu',
	    left: 0,
	    top: 0,
	    width: Fe.screenWidth,
	    height: Fe.screenHeight,
	    backgroundColor: '#FFCCAA'
	});
	
	view.mainFrame.add(view.mainMenu);
	
	
	view.mainMenu.newsButton = Ti.UI.createButton({
		left: Fe.screenWidth/2 + 10,
		top: 10,
		width: 130,
		height: 30,
		title: 'News'
	});
	
	view.mainMenu.add(view.mainMenu.newsButton);
	

	view.mainMenu.profileButton = Ti.UI.createButton({
		left: Fe.screenWidth/2 + 10,
		top: 50,
		width: 130,
		height: 30,
		title: 'Profile'
	});
	
	view.mainMenu.add(view.mainMenu.profileButton);
	
	return view;
})();
