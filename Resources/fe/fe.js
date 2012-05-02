var Fe = {
	changeControllerDuration: 250
};

Ti.include('/fe/base/all.js');

(function() {
	/*
	 * Initialization code
	 */
	Fe.mainWindow = null;
	Fe.stackOfControllers = [];
	Fe.controllers = {};
	
	Fe.screenWidth = Ti.Platform.displayCaps.platformWidth;
	Fe.screenHeight = Ti.Platform.displayCaps.platformHeight;
	
	Fe.mainWindow = Titanium.UI.createWindow({  
	    title:'Main',
	    //width: Fe.screenWidth,
	    // height: Fe.screenHeight,
	    backgroundColor:'#fff'
	});
		
	Fe.mainOverlay = Titanium.UI.createView({  
	    title:'Overlay',
	    left: 0,
	    top: 0,
	    right: 0,
	    bottom: 0
	}); 

	Fe.mainView = Titanium.UI.createView({  
	    title:'Main',
	    left: 0,
	    top: 0,
	    width: Fe.screenWidth,
	    height: Fe.screenHeight
	});

	Fe.mainView.layouting = function(block) {
		this.startLayout();
		block();
		this.finishLayout();
	};

	Fe.mainWindow.add(Fe.mainView);

	
	Fe.openWindow = function() {
		Ti.API.warn('Open mainWindow');
		Fe.mainWindow.open();
	};
	
	
	Fe.pushController = function(/*Controller*/ controller) {
		var previous = (Fe.stackOfControllers.length == 0) ? null : Fe.stackOfControllers[Fe.stackOfControllers.length - 1];
		Fe.stackOfControllers.push(controller);
		
		controller.view.top = 0;
		
		if (previous === null) {
			controller.view.left = 0;
			Fe.mainView.add(controller.view);
			return;
		}
		
		Fe.mainView.layouting(function() {
			Fe.mainView.width = Fe.screenWidth * 2;
			controller.view.left = Fe.screenWidth;
	
			Fe.mainView.add(controller.view);
			Fe.mainWindow.add(Fe.mainOverlay);
			
			previous.base.viewWillDisappear();
			controller.base.viewWillAppear();
		});
	
		
		Fe.mainView.animate({
			duration: Fe.changeControllerDuration,
			left: Fe.mainView.left - Fe.screenWidth,
			top: 0
		}, function() {
			Fe.mainView.layouting(function() {
				Fe.mainWindow.remove(Fe.mainOverlay);
				Fe.mainView.remove(previous.view);
				
				Fe.mainView.left = 0;
				Fe.mainView.width = Fe.screenWidth;
				
				controller.view.left = 0;
				
				previous.base.viewDidDisappear();
				controller.base.viewDidAppear();
			});
		});
	};
	
	Fe.popController = function() {
		if (Fe.stackOfControllers.length <= 1) return;
		
		var top = Fe.stackOfControllers[Fe.stackOfControllers.length - 1];
		var previous = Fe.stackOfControllers[Fe.stackOfControllers.length - 2];
		Fe.stackOfControllers.pop();
		
		Fe.mainView.layouting(function() {
			Fe.mainView.width = Fe.screenWidth * 2;
			Fe.mainView.left = -Fe.screenWidth;
			top.view.left = Fe.screenWidth;
			
			previous.view.left = 0;
			previous.view.top = 0;

			Fe.mainView.add(previous.view);
			Fe.mainWindow.add(Fe.mainOverlay);
			
			top.base.viewWillDisappear();
			previous.base.viewWillAppear();
		});
		
		
		Fe.mainView.animate({
			duration: Fe.changeControllerDuration,
			left: Fe.mainView.left + Fe.screenWidth,
			top: 0
		}, function() { 
			Fe.mainView.layouting(function() {
				Fe.mainWindow.remove(Fe.mainOverlay);
				Fe.mainView.remove(top.view);
				
				Fe.mainView.left = 0;
				Fe.mainView.width = Fe.screenWidth;
				
				previous.view.left = 0;
				
				top.base.viewDidDisappear();
				previous.base.viewDidAppear();
			});
		});
	}
	
	Fe.setRootController = function(/*Controller*/ controller) {
		Fe.pushController(controller);
	};
	
	Fe.require = function(path) {
		__exports = {};
		Ti.include(path + '.js');
		return __exports;
	};
	
	Fe.includeControllers = function(names) {
		Ti.API.warn('Include all controllers');

		for (var i=0;i<names.length;i++) {
			var controllerName = names[i];
			Fe.controllers[controllerName] = new Fe.Controller(controllerName, Fe.require('/fe/controllers/' + controllerName));
		}
	};
	
	Fe.Controller = function(name, functions) {
		var self = this;
		
		this.base = {};
		this.base.viewLoaded = function() {
			if (self.viewLoaded !== undefined) self.viewLoaded();
		};
		
		this.base.viewWillAppear = function() {
			if (self.viewWillAppear !== undefined) self.viewWillAppear();
		};
		
		this.base.viewDidAppear = function() {
			if (self.viewDidAppear !== undefined) self.viewDidAppear();
		};
		
		this.base.viewWillDisappear = function() {
			if (self.viewWillDisappear !== undefined) self.viewWillDisappear();
		};
		
		this.base.viewDidDisappear = function() {
			if (self.viewDidDisappear !== undefined) self.viewDidDisappear();
		};
		
		Fe.mixin(this, functions);
		
		this.view = Fe.require('/fe/views/' + name);
		
		this.view.left = 0;
		this.view.top = 0;
		this.view.width = Fe.screenWidth;
		this.view.bottom = 0;
		
		this.base.viewLoaded();
		Ti.API.warn(name + ' is loaded');
	};
})();

