$(function() {
	var push = $('#push');
		menu = $('#navigation ul');
		menuHeight = menu.height();
		$(push).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
		});
		$(window).resize(function(){
	       	var w = $(window).width();
	       	if(w > 320 && menu.is(':hidden')) {
	       	menu.removeAttr('style');
    	}
	});
});
