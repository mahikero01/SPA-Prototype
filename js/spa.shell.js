/*jslint browser : true, continue : true,
devel : true, indent : 2, maxerr : 50,
newcap : true, nomen : true, plusplus : true,
regexp : true, sloppy : true, vars : false,
white : true
*/
spa.shell = ( function () {
	//Module scope variables
	var
		configMap = {
			main_html : String()
			  + '<div class="spa-shell-head">'
				+ '<div class="spa-shell-head-logo"> </div>'
				+ '<div class="spa-shell-head-acct"> </div>'
				+ '<div class="spa-shell-head-search"> </div>'
				+ '</div>'
				+ '<div class="spa-shell-main">'
				+ '<div class="spa-shell-main-nav"> </div>'
				+ '<div class="spa-shell-main-content"> </div>'
				+ '</div>'
				+ '<div class="spa-shell-foot"> </div>'
				+ '<div class="spa-shell-chat"> </div>'
				+ '<div class="spa-shell-modal"> </div>',
      		chat_extend_time : 1000,
      		chat_retract_time : 300,
      		chat_extend_height : 450,
      		chat_retract_height : 15,
      		chat_extended_title : 'Click to retract',
      		chat_retracted_title : 'Click to extend'
		},
		stateMap = {
			$container : null,
			anchor_map: {},
     		is_chat_retracted : true
		},
		jqueryMap = {
		},
		copyAnchorMap,
		setJqueryMap,
    	toggleChat,
    	changeAnchorPart,
    	onClickChat,
		initModule;
		
		//Utility methods
		copyAnchorMap = function () {
			return $.extend(true, {}, stateMap.anchor_map);
		};
		
		//DOM methods
		setJqueryMap = function () {
			var $container = stateMap.$container;
			jqueryMap = { 
       			$container : $container,
      			$chat : $container.find( '.spa-shell-chat' )
     		};
		};
		
    	toggleChat = function( do_extend, callback) {
        	var
           		px_chat_ht = jqueryMap.$chat.height(),
           		is_open = px_chat_ht === configMap.chat_extend_height,
           		is_closed = px_chat_ht === configMap.chat_retract_height,
           		is_sliding = ! is_open && ! is_closed;
       	
       		if ( is_sliding ) { return false; }   
  
			if ( do_extend ) {
         		jqueryMap.$chat.animate(
              		{ height : configMap.chat_extend_height },
              		configMap.chat_extend_time,
              		function() {
                 		jqueryMap.$chat.attr(
                    		'title', configMap.chat_extended_title
                 		);
                 		stateMap.is_chat_retracted = false;
                  		if ( callback ) {
                     		callback ( jqueryMap.$chat );
                  		}
              		}
           		);
           
           		return true; 
       		}
    
       		jqueryMap.$chat.animate(
            	{ height : configMap.chat_retract_height },
              	configMap.chat_retract_time,
              	function() {
                	jqueryMap.$chat.attr(
                    	'title', configMap.chat_retracted_title
                 	);
                 	stateMap.is_chat_retracted = true;
                  	if ( callback ) {
                    	callback ( jqueryMap.$chat );
                  	}
              	}
       		);
    
       		return true;
    	};
    	
    	changeAnchorPart = function ( arg_map ) {
    		var
    			anchor_map_revised = copyAnchorMap(),
    			bool_return = true,
    			key_name,
    			key_name_dep;
    		
    		KEYVAL:	
    		for ( key_name in arg_map ) {
    			if ( arg_map.hasOwnProperty( key_name ) ){
    				if ( key_name.indexOf( '_' ) === 0 ) {
    					continue KEYVAL;
    				}
    				anchor_map_revised
    			}
    		};
    	};
    
    	//event handlers
    	onClickChat = function(event) {
    		changeAnchorPart({
    			chat: ( stateMap.is_chat_retracted ? 'open' : 'closed' )
    		});
       		return false;
    	};
    
		//public methods
		initModule = function ( $container ) {
			stateMap.$container = $container;
			$container.html( configMap.main_html );
		  	setJqueryMap();
     		stateMap.is_chat_retracted = true;
     		jqueryMap.$chat
        		.attr( 'title', configMap.chat_retracted_title )
        		.click( onClickChat );
		};
		
		return { initModule : initModule };
} ());
