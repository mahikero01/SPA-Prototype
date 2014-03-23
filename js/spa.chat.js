/*jslint 		browser : true, continue : true,
devel : true, 	indent : 2, maxerr : 50,
newcap : true, 	nomen : true, plusplus : true,
regexp : true,	sloppy : true, vars : false,
white : true
*/
/*global $, spa*/

spa.chat = function () {
//module scope variable
var
	configMap = {
		main_html : String()
			+ '<div style="padding:1em; color:#fff;">'
			+ 'Say hello to chat'
			+ '</div>',
		settable_map : {} 
	},
	sateMap = {
		$ontainer : null
	},
	jqueryMap = {},
	setJqueryMap,
	configModule,
	initModule;
};

//DOM methods
setJqueryMap = function () {
	var
		$container = stateMap.$container;
		jqueryMap = { $container : $container };
};
