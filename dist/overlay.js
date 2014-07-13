/* 
 * overlay.js v1.0.0
 * Copyright 2014 Joah Gerstenberg (www.joahg.com)
 */
(function($) { 
  $.fn.overlay = function() {
    overlay = $(this);

    overlay.ready(function() {
      overlay.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
        if (!overlay.hasClass('shown')) {
          overlay.css('visibility', 'hidden');
        }
      });

      overlay.on('show', function() {
        overlay.css('visibility', 'visible');
        overlay.addClass('shown');
        return true;
      });

      overlay.on('hide', function() {
        overlay.removeClass('shown');
        return true;
      });

      overlay.on('click', function(e) {
        if (e.target.className === overlay.attr('class')) {
          return overlay.trigger('hide');
        } else {
          return false;
        }
      })

      $('a[data-overlay-trigger]').on('click', function() {
        overlay.trigger('show');
      });
    })
  };
})(jQuery);