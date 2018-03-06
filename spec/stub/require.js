function require(url){
	if (url.indexOf("script")>=0 ) {
		return Demo;
	}else if (url.indexOf("expect.js")>=0) {
		return expect;
	}
}