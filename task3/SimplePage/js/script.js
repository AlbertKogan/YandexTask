$(document).ready(function(){
	$('#tab_menu').css('padding-top', $(window).height()/2 - $('#tab_menu').height());

	$('#list_menu li').hover(
		function(){
			$(this).css("background-color", "#acdc99");
		},
		function(){
			$(this).css("background-color", "white");
		}
	);
	$('form').progBar();
  $('#list_menu').accordion();

});

//little plugins
//accordion
(function( $ ) {
  $.fn.accordion = function() {
    var $href = $(this).find('a');
    $('.tabs').hide();
    $href.bind('click', function(e) {
      $('.tabs:visible').hide();
      //$(this.hash).show('slow');
      $(this.hash).slideDown();
     // $(this.hash).animate({ "left": "+=100px" }, "slow",function(){$(this).show();} );
      e.preventDefault();
    }).filter(':first').click();
  };
})(jQuery);

//bar
(function( $ ) {
  $.fn.progBar = function() {

      var isChange = false;
      var inner_width = 15;

      $('form :input').each(function() {
      	$(this).data("isChange", false);
      });

      $("form :input").change(function() {
        if ($(this).data().isChange == false) {
          $(this).data().isChange = true;
          $(".progres_bar_inner").animate({width: inner_width});
          inner_width += 15;
        };
      });
  };
})(jQuery);