/**
 * @author Gilles Coomans <gilles.coomans@gmail.com> 
 * @contributors Philippe Delabye <phil@chemicalrules.net>
 */
require.config({
	baseUrl: "./libs",
	catchError: true
});

define([
	"require"
	,"deepjs/deep"
	,"deep-swig/index"
	,"jStorage/jstorage.min"
	,"deep-browser/index"
	,"deep-jquery/ajax/json"
	// ,"deep-local-storage/index"
], function(require, deep, jq, sw, jst) {

	deep.jquery.set($);
	deep.Swig.init();
	deep.Swig();
	//deep.jquery.JSON.create();
	//deep.store.jstorage.Object.create("appdata")

	deep.route.deepLink({ /* config */ });

	var routes = {
		// myFirstView : deep.View({
		// 	route : "/$",
		// 	how:'<div>hello</div>',
		// 	where:'dom.appendTo::'
		// })
	};

	deep.route(routes)
	.done(function (routes) {
		routes.init();
	});
});