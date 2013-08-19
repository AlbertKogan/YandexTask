'use strict';
$(document).ready(function(){
	$('#tab_menu').css('padding-top', $(window).height()/2 - $('#tab_menu').height()/2);
  $('.tabs').css({'height': $(window).height()-$('.header').outerHeight(true), 'margin-top': 50});
  $('form').progBar();
  $('#list_menu').accordion();
  $('input').f_name();
  $('#submit_btn').sbt_form();
  $(':input').checker();
});

//little plugins
//accordion
(function( $ ) {
  $.fn.accordion = function() {
    var $li = $(this).find('li');
    var $href = $(this).find('a');
    var selected = false;

    $li.hover(
      function(){
        $(this).toggleClass('li_hover');
      },
      function(){
        $(this).toggleClass('li_hover');
      });
    
    //set flags to tabs
    $href.each(function() {
     $(this).data('selected', false);
   });

    $('.tabs').hide();
    $href.on('click', function() {      
      if ($(this).data().selected == false) {
        $('.tabs:visible').slideUp('slow');
        $(this.hash).slideDown('slow');
        $href.each(function() {
         $(this).data('selected', false)
       });
        return $(this).data().selected = true;    
      } else 
      if ($(this).data().selected == true) {
       return ($(this).data().selected == true);
     };    
   }).filter(':first').click();
  };
})(jQuery);

//bar
(function( $ ) {
  $.fn.progBar = function() {

    var isChange = false,
    items = $(':input').length,
    filesInputs = $(':file').length,
    progBarWidth = $('.progres_bar').width(),
    buttons = $(':button').length,
    barStep = Math.ceil(progBarWidth/(items - filesInputs - buttons)),
    innerWidth = barStep;

    $(':input').each(function() {
     $(this).data('isChange', false);
   });

    $(':input').on('change', function() {
      if ($(this).data().isChange == false) {
        $(this).data().isChange = true;
        $('.progres_bar_inner').animate({width: innerWidth});
        innerWidth += barStep;
      };
    });
      //reset form and bar
      $('.res_btn').click(function(){
        $('form')[0].reset();
        $('.ok, .notOk').replaceWith('<span></span>')
        $('.progres_bar_inner').animate({width: 0});
        innerWidth = barStep;
        $(':input').each(function() {
          $(this).data('isChange', false);
        });
      });
    };
  })(jQuery);

//add file_name
(function( $ ){
  $.fn.f_name = function() {
    //dirty code
    var browser = navigator.appName;
    if (browser == 'Microsoft Internet Explorer') {
      $('.file_btn, .file_name').remove();
      $(':file').css({'opacity': 1, 'margin-left': 0});
    } else { 
      $(':file').change(function() {
        var str = '';
        str = $(this).val();
        console.log(str);
        $(this).next('.file_name').text(str);
      });
    }
  };
})(jQuery);

//submit form
(function( $ ){
  $.fn.sbt_form = function(){
    $('#submit_btn').on('click', function() {
      var data = $(':input').serializeArray(),
      serialData = {},
      jsonData = {};
      $.map(data, function(i){
        serialData[i.name] = i.value;
      });
      jsonData = JSON.stringify(serialData);
      $('.show_data').html(jsonData);
      console.log(jsonData);
      return jsonData;
    });
  }
})(jQuery);

//check values
(function( $ ){
  $.fn.checker = function(){
    //regexp
    //name
    var checkThisValue,
    elementName,
    elementType,
    $that;
    var checkers = {
      city: /^[A-z-\s]{3,25}|[А-я-\s]{3,25}$/,
      name: /^([A-z\s]+|[А-я\s]+)$/,
      number: /^[0-9]+$/,
      telephone: /^[0-9-\s+()]+$/,
      mail: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
      url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/ 
    };

    $(this).filter('.check_this').after('<span></span>');
    $(this).filter('.check_this').on('blur', function(){
      $that = $(this);
      checkThisValue = $(this).val();
      elementName = $(this).attr('name');
      elementType = $(this).attr('type');
      console.log(elementName);
      jQuery.each(checkers, function(key, value){
        if ((elementName == key) || (elementType==key)) {
          if (value.test(checkThisValue)) {
            $that.next().replaceWith('<span class="ok">OK</span>');
          } else {
            $that.next().replaceWith('<span class="notOk">not OK</span>');
          };//end second if
        };//end first if
      });//end each
    });//end  filter
  };
})(jQuery);