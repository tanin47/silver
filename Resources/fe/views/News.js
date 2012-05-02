__exports = (function() {
	var view = Ti.UI.createView({
		backgroundColor: '#111'
	});
	
	view.addButton = Ti.UI.createButton({
		right: 10,
		top: 10,
		width: 100,
		height: 30,
		title: 'Add'
	});
	view.add(view.addButton);
	
	view.menuButton = Ti.UI.createButton({
		left: 10,
		top: 10,
		width: 100,
		height: 30,
		title: 'Menu'
	});
	view.add(view.menuButton);
	
	view.table = Ti.UI.createTableView({
		top: 42,
		left: 0,
		right: 0,
		bottom: 0,
		scrollable: true,
		color: '#FFF'
	});
	
	view.add(view.table);
	
	(function() {
		var data = [];
		
		for (var i=0;i<30;i++) {
			data.push({ title: ('News #' + i) });
		}
	
		view.table.setData(data);
	})();
	
	return view;
})();
