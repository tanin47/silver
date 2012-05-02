Fe.mixin = function(/*Object*/ target, /*Object...*/ props){
	var empty = {};
	
	for(var i=1, l=arguments.length; i<l; i++){
		var source = arguments[i];
		
		var s, i;
		for(var name in source){
			s = source[name];
			if(!(name in target) || (target[name] !== s && (!(name in empty) || empty[name] !== s))){
				target[name] = s;
			}
		}
	}
};
