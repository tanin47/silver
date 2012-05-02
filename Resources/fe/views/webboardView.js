__exports = (function() {
	var view = Ti.UI.createView({
		backgroundColor: '#333',
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
	

	view.table = Titanium.UI.createTableView({
		top: 42,
		left: 0,
		right: 0,
		bottom: 0,
		scrollable: true
	});
	view.add(view.table);
	
	(function() {
		view.table.addEventListener('click', function(e){
			Ti.API.warn(e.index);
		});
		
		var header = Ti.UI.createTableViewRow({
			height: 60,
			touchEnabled: false
		});
		
		var topicLabel = Ti.UI.createLabel({
			text: 'What happened to Peter?',
			top: 5,
			left: 5,
			width: 'auto',
			height: 30,
			font: { fontSize: 20, fontFamily: 'Helvetica Neue' }
		})
		header.add(topicLabel);
		
		var subLabel = Ti.UI.createLabel({
			text: 'Submitted 3 hours ago by Test',
			top: 30,
			left: 10,
			width: 'auto',
			height: 20,
			font: { fontSize: 10, fontFamily: 'Helvetica Neue' }
		})
		header.add(subLabel);
		
		
		var data = [
			header,
			{ title: 'What happened to Peter?' },
			{ title: 'Who is your favourite character?' },
			{ title: 'What do you think about season finale?' },
			{ title: 'What happened to Peter?' },
			{ title: 'Who is your favourite character?' },
			{ title: 'What do you think about season finale?' },
			{ title: 'What happened to Peter?' },
			{ title: 'Who is your favourite character?' },
			{ title: 'What do you think about season finale?' },
			{ title: 'What happened to Peter?' },
			{ title: 'Who is your favourite character?' },
			{ title: 'What do you think about season finale?' }
		];
	
		view.table.setData(data);
	})();
	
	return view;
})();
