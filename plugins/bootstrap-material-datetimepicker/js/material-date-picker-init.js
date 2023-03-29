(function($) {
    "use strict"

    // MAterial Date picker
    $('.date-fr').bootstrapMaterialDatePicker({
        format : 'DD/MM/YYYY HH:mm', 
        lang : 'fr', 
        weekStart : 1, 
        cancelText : 'ANNULER' 
      });
    $('.date-second').bootstrapMaterialDatePicker({ weekStart : 0, time: false });

})(jQuery);