$(document).ready(function(){
	$('#tab_menu').css('padding-top', $(window).height()/2 - $('#tab_menu').height());
  $('#tab_item_1').css('height', $(window).height()-$('.header').height());
	$('form').progBar();
  $('#list_menu').accordion();

  //dirty code
  $('input[type=file]').bind('change', function() {
    var str = "";
    str = $(this).val();
    $(".file_name").text(str);
}).change();

});

//little plugins
//accordion
(function( $ ) {
  $.fn.accordion = function() {
    var $li = $(this).find('li');
    var $href = $(this).find('a');

    $li.hover(
      function(){
        $(this).css("background-color", "#f1c40f");
      },
      function(){
        $(this).css("background-color", "white");
      }
    );

    $('.tabs').hide();

    $href.bind('click', function(e) {
      $('.tabs:visible').slideUp('slow');
      $(this.hash).slideDown('slow');
      e.preventDefault();
    }).filter(':first').click();
  };
})(jQuery);

//bar
(function( $ ) {
  $.fn.progBar = function() {

      var isChange = false;
      var inner_width = 0;

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
      //reset form and bar
      $(".res_btn").click(function(){
        $("form")[0].reset();
        $(".progres_bar_inner").animate({width: 0});
        inner_width = 15;
        $('form :input').each(function() {
          $(this).data("isChange", false);
      });
    });
  };
})(jQuery);

//add file_name
(function( $ ){
  $.fn.f_name = function() {

  };
})(jQuery);