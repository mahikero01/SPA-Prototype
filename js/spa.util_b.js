/*jslint 		browser : true, continue : true,
devel : true, 	indent : 2, maxerr : 50,
newcap : true, 	nomen : true, plusplus : true,
regexp : true,	sloppy : true, vars : false,
white : true
*/
/*global $, spa*/


spa.util_b = (function () { 
	'use strict';

	//scope var
	var
		configMap = {
			regex_encode_html : /[&"'><]/g,
			regex_encode_noamp : /["'><]/g,
			html_encode_map : {
				'&' : '&#38;',
				'"' : '&#34;',
				"'" : '&#39;',
				'>' : '&#62;',
				'<' : '&#60;'
			}
		},
		decodeHtml,
		encodeHtml,
		getEmSize;
		
	configMap.encode_noamp_map = $.extend(
		{}, configMap.html_encode_map
	);
	delete configMap.encode_noamp_map['&'];
	
	//utility methods
	decodeHtml = function ( str ) {
		return $('<div/>').html(str || '').text();
	};
	
	encodeHtml = function ( input_arg_str, exclude_amp ) {
		var
			input_str = String( input_arg_str ),
			regex, 
			lookup_map;
		
		if ( exclude_amp ) {
			lookup_map = configMap.encode_noamp_map;
			regex = configMap.regex_encode_noamp;
		} else {
			lookup_map = configMap.html_encode_map;
			regex = configMap.regex_encode_html;
		}
	};
	return{}; 
}());
