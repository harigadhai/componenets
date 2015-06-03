/*(function($){
	var myColor = 'red';
	$.fn.greenify = function(options){

		 var settings = $.extend({
			// These are the defaults.
			color: "#fff",
			backgroundColor: "green"
			}, options );

		 return this.css({
			color: settings.color,
			backgroundColor: settings.backgroundColor
		});
	}	
})(jQuery);*/

(function($){
	$.fn.check = function(options){
		
		var opt = $.extend({
			color: "#fff"

		},$.fn.check.defaults,options);

		return this.css({
			color: opt.color,
			backgroundColor: opt.backgroundColor
		});

		$.fn.check.defaults = {
			backgroundColor : "yellow"
		}

	}
})(jQuery);