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
	
	
	view.mainMenu.webboardButton = Ti.UI.createButton({
		left: Fe.screenWidth/2 + 10,
		top: 10,
		width: 130,
		height: 30,
		title: 'Webboard'
	});
	
	view.mainMenu.add(view.mainMenu.webboardButton);
	

	view.mainMenu.videoButton = Ti.UI.createButton({
		left: Fe.screenWidth/2 + 10,
		top: 50,
		width: 130,
		height: 30,
		title: 'Video'
	});
	
	view.mainMenu.add(view.mainMenu.videoButton);
	
	return view;
})();
