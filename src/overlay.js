/* 
 * overlay.js v1.1.0
 * Copyright 2014 Joah Gerstenberg (www.joahg.com)
 */
(function(window) { 
  
  var Utils = {
        
    find: function(selector){
      return Array.prototype.slice.call(document.querySelectorAll(selector));
    },
    addEventListener: function(el, eventName, handler){
      if(Array.isArray(el)){
        for (var i = el.length-1; i >= 0; i--)
          this.addEventListener(el[i], eventName, handler);
      } else {
        if (el.addEventListener)
          el.addEventListener(eventName, handler);
        else
          el.attachEvent('on' + eventName, function(){
            handler.call(el);
          });  
      }
    },
    hasClass: function(el, className){
      if (el.classList)
        el.classList.contains(className);
      else
        new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    },
    addClass: function(el, className){
      if (el.classList)
        el.classList.add(className);
      else
        el.className += ' ' + className;
    },
    removeClass: function(el, className){
      if (el.classList)
        el.classList.remove(className);
      else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    },
    triggerEvent: function(el, eventName){
      var event;
      if (window.CustomEvent) {
        event = new CustomEvent(eventName);
      } else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true);
      }
      
      if(Array.isArray(el))
        for (var i = el.length-1; i >= 0; i--)
          el[i].dispatchEvent(event);
      else
        el.dispatchEvent(event);
    },
    delayHide: function(el){
      setTimeout(function(){
        el.style.visibility = 'hidden';
      }, 325);
    }
  };
  
  var Overlay = {
    getOverlays: function(id){
      return Utils.find((id && id != null && id != '' ? '#'+id : '') + '.overlay');
    },
    onTransitionEnd: function(e){
      if (!Utils.hasClass(this, 'shown')) return this.style.visibility =  'hidden';
    },
    onShow: function(){
      this.style.visibility = 'visible';
      Utils.addClass(this, 'shown')
      return true;
    },
    onHide: function(){
      Utils.removeClass(this, 'shown');
      Utils.delayHide(this);
      return true;
    },
    onClick: function(e){
      if (e.target.className === this.getAttribute('class')) return Utils.triggerEvent(this, 'hide');
    },
    bindEventListeners: function(){
      var overlays = this.getOverlays();
      
      Utils.addEventListener(overlays, 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', this.onTransitionEnd);
      Utils.addEventListener(overlays, 'show', this.onShow);
      Utils.addEventListener(overlays, 'hide', this.onHide);
      Utils.addEventListener(overlays, 'click', this.onClick);
      
    },
    init: function(){
      
      this.bindEventListeners();
      
      var _self = this;
      
      Array.prototype.forEach.call(Utils.find('a[data-overlay-trigger]'), function(el, i){
        Utils.addEventListener(el, 'click', function(e){
          Utils.triggerEvent(
            _self.getOverlays(e.target.getAttribute('data-overlay-trigger')),
            'show'
          );
          e.preventDefault();
          return false;  
        });
      });
      
      Array.prototype.forEach.call(Utils.find('a[data-overlay-close]'), function(el, i){
        Utils.addEventListener(el, 'click', function(e){
          Utils.triggerEvent(
            _self.getOverlays(e.target.getAttribute('data-overlay-close')),
            'hide'
          );
          e.preventDefault();
          return false;  
        });
      });
    }
  };
  
  if(window.jQuery != null)
    window.jQuery.fn.overlay = function(){ Overlay.init(); };
    
  window.Overlay = Overlay;

})(window);