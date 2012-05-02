Silver(Fe) - A MVC Framework for Titanium SDK
------------------------------------------

An MVC framework that gives you a Facebook-alike app on both iOS and Android.

It's incomplete, but it's very nice.

This project consists of the framework's files, which are ```fe.js``` and ```/Resources/fe/base/*```. It's very lightweighted.

The example project here shows you how to build navigate betweens pages (with animation), and how to build Facebook-alike menu.

It works on both iOS and Android. I hope you like it!

Version: 0.0.1


How to setup a controller
----------------

Your controller must be in ```/Resources/fe/controller```, and the corresponding view must be in ```Resources/fe/views```.

A controller and its corresponding view should have identical name.

For example:

```
/Resources/fe/controllers/News.js
/Resources/fe/controllers/News.js
```

Moreover, you need to add the controller's name into ```Fe.includeControllers(...)```. Life's not perfect.


In app.js, it should look like this:

```
Fe.includeControllers([
	'News',
	'Profile', 
	'SomePage', 
	'SomePageAgain',
	'Frame'
]);
```

At the main entry point, you also need to specify the first controller with:

```
Fe.setRootController(Fe.controllers.Frame);
Fe.openWindow();
```

And call ```Fe.openWindow()``` to open the window.



How to write a controller
-------------------------------

please refer to the object ```__exports```.

If you declare ```__exports.some_function```, then the controller will have ```some_function``` method.

We also have a life-cycle for a controller, you can declare these methods:

```
__exports.viewLoaded = function() { ... };

__exports.viewWillAppear = function() { ... };
__exports.viewDidAppear = function() { ... };
__exports.viewWillDisappear = function() { ... };
__exports.viewDidDisappear = function() { ... };
```

The methods' names are self-explanatory.


How to switch between controllers
------------------------------------

You can call ```Fe.pushController(Fe.controllers.SomePage)``` in order to switch to the ```SomePage``` controller.

Or you can call ```Fe.popController()``` in order to switch back to the previous controller.


Tips
-----------

* ```Fe``` is a global variable
* ```Fe.controllers``` is an object that contains the instances of controllers. For example, you can refer to the News controller using ```Fe.controllers.News```


Advice
-----------

This is a very young framework. You need to study its source code in order to use it.

Just don't be lazy, ok?


Author
----------
Tanin Na Nakorn - In an attempt of helping ChatterBox build the first prototype


