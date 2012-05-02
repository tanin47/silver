// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

Ti.include('/fe/fe.js');
Fe.includeControllers([
	'News',
	'Profile', 
	'SomePage', 
	'SomePageAgain',
	'Frame'
]);
Fe.setRootController(Fe.controllers.Frame);
Fe.openWindow();


