var GREET = (function(module) {
	
	module.DoIt = function(name, resultObj) {
		resultObj.prepend("Hello " + name + "! It's now " + Date());
	};
	
	return module;
	
}(GREET || {}));
