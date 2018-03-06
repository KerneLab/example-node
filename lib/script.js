/*! Copyright (C) hey*/
(function(){
	
	function Demo(){
	}
	
	Demo.math = function(a){
    var b = (a==1) ? true : false;
    var c = (a==1) ? true
                   : false;
    var d = (a==1) ? true : (a==2) ? null : false;
    if (a === 1) {
        return true;
    } else if (a === 2) {
        return null;
    } else {
        return false;
    }
	};

var ROOT = (typeof global === "object" && global) || this;

if (typeof exports !== "undefined")
	{
		if (typeof module !== "undefined" && module.exports)
		{
			module.exports = Demo;
		}
		else
		{
			exports = Demo;
		}
	}
	else
	{
		ROOT.Demo = Demo;
	}

}.call(this));