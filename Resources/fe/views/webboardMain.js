__exports = (function() {
	var view = Ti.UI.createView({
		backgroundColor: '#CCC',
		backgroundImage: 'images/background.jpg'
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
		scrollable: true
	});
	
	view.add(view.table);
	
	(function() {
		view.table.addEventListener('click', function(e){
			Ti.API.warn(e.index);
			//ui.controller.view.open({ animated: true });
		});
		
		var header = Ti.UI.createTableViewRow({
			height: 100,
			touchEnabled: false
		});
		
		var thumbnail = Ti.UI.createImageView({
			url: 'images/whitecollar.jpg',
			top: 5,
			left: 5,
			width: 120,
			height: 90,
			backgroundColor: '#CCC'
		});
		header.add(thumbnail);
		
		var nameLabel = Ti.UI.createLabel({
			text: 'White Collar',
			top: 5,
			left: 135,
			width: 'auto',
			height: 20
		})
		header.add(nameLabel);
		
		var subNameLabel = Ti.UI.createLabel({
			text: 'Season 3 Episode 14',
			top: 20,
			left: 135,
			width: 'auto',
			height: 20
		})
		header.add(subNameLabel);
		
		var peopleIcon = Ti.UI.createImageView({
			top: 70,
			left: 135,
			width: 20,
			height: 20,
			backgroundColor: '#CCC'
		});
		header.add(peopleIcon);
		
		var peopleLabel = Ti.UI.createLabel({
			text: '13122',
			top: 70,
			left: 160,
			width: 40,
			height: 20
		})
		header.add(peopleLabel);
		
		var likeIcon = Ti.UI.createImageView({
			top: 70,
			left: 210,
			width: 20,
			height: 20,
			backgroundColor: '#CCC'
		});
		header.add(likeIcon);
		
		var likeLabel = Ti.UI.createLabel({
			text: '5',
			top: 70,
			left: 235,
			width: 40,
			height: 20
		})
		header.add(likeLabel);
		
		
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
