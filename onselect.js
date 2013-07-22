/**

onSelect - A Simple JQuery plugin to handle 'Select' box change events.

Developer : Veera (veera.k.sundar@gmail.com)
Home page : http://veerasundar.com

*/


(function($){

  $.fn.onSelect = function(callback){

    return this.each(function(){

      if(!$(this).is('select')){
        // this plug-in is only for Select elements.
        return;
      }

      var selectBox = $(this);
      selectBox.data('previousValue', selectBox.val());
      
      selectBox.on('keyup', function(event){
        if(event.which === 13){
          selectBox.blur();
        }
      });

      selectBox.on('click blur', function(event){
        if(selectBox.data('previousValue') != selectBox.val()){
          selectBox.data('previousValue', selectBox.val());
          callback.call(selectBox, event);
        }
        return false;
      });

    });

  };

}(jQuery));
