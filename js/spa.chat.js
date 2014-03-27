/*jslint 		browser : true, continue : true,
devel : true, 	indent : 2, maxerr : 50,
newcap : true, 	nomen : true, plusplus : true,
regexp : true,	sloppy : true, vars : false,
white : true
*/
/*global $, spa, getComputedStyle */


spa.chat = (function () {
//module scope variable
	var
		configMap = {
			main_html : String()
				+ '<div class="spa-chat">'
					+ '<div class="spa-chat-head">'
						+ '<div class="spa-chat-head-toggle">+</div>'
						+ '<div class="spa-chat-head-title">chat</div>'
					+ '</div>'
					+ '<div class="spa-chat-closer">'
					+ '<div class="spa-chat-sizer">'
						+ '<div class="spa-chat-msgs"></div>'
						+ '<div class="spa-chat-box">'
							+ '<input type="text" />'
							+ '<div>send</div>'
						+ '</div>'
					+ '</div>'
				+ '</div>',
					
			settable_map : {
				slider_open_time: true,
				slider_close_time: true,
				slider_opened_em: true,
				slider_closed_em: true,
				slider_opened_title: true,
				slider_closed_title: true,
				
				chat_model: true,
				people_model: true,
				set_chat_anchor: true
			},
			
			slider_open_time: 250,
			slider_close_time: 250,
			slider_opened_em: 16, 
			slider_closed_em: 2,
			slider_opened_title: 'click to close', 
			slider_closed_title: 'click to open', 
			
			chat_model: null,
			people_model: null,
			set_chat_anchor: null		
		},
		stateMap = {
     	$append_target: null,
     	position_type: 'closed',
     	px_per_em: 0,
     	slider_hidden_px: 0,
     	slider_closed_px: 0,
     	slider_opened_px: 0
		},
		jqueryMap = {},
		setJqueryMap,
    	getEmSize,
    	setPxSizes,
    	setSliderPosition,
    	onClickToggle,
		configModule,
		initModule;
	
 	//utility
 	getEmSize = function ( elem ) {
   		return Number(
       		getComputedStyle( elem, '' ).fontSize.match(/\d*\.?\d*/) [0]
    	);
 	};
 
	//DOM methods
	setJqueryMap = function () {
		var
     		$append_target = stateMap.$append_target,
     		$slider = $append_target.find( '.spa-chat' );
	
			jqueryMap = { 
        		$slider: $slider,
        		$head: $slider.find( '.spa-chat-head' ),
        		$toggle: $slider.find( '.spa-chat-head-toggle' ),
        		$toggle: $slider.find( '.spa-chat-head-toggle' ),
     };
	};

	//public methods
	configModule = function ( input_map ) {
		spa.util.setConfigMap({
			input_map : input_map,
			settable_map : configMap.settable_map,
			config_map : configMap
		});
		return true;
	};


	initModule = function ( $container ) {
		$container.html( configMap.main_html );
		stateMap.$container = $container;
		setJqueryMap();
		return true;
	};
	
	return {
		configModule : configModule,
		initModule : initModule
	};
	
	
}());


