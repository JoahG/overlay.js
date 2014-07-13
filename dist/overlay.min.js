/* 
 * overlay.js v1.0.0
 * Copyright 2014 Joah Gerstenberg (www.joahg.com)
 */
!function(a){a.fn.overlay=function(){overlay=a(this),overlay.ready(function(){overlay.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){overlay.hasClass("shown")||overlay.css("visibility","hidden")}),overlay.on("show",function(){return overlay.css("visibility","visible"),overlay.addClass("shown"),!0}),overlay.on("hide",function(){return overlay.removeClass("shown"),!0}),overlay.on("click",function(a){return a.target.className===overlay.attr("class")?overlay.trigger("hide"):!1}),a("a[data-overlay-trigger]").on("click",function(){overlay.trigger("show")})})}}(jQuery);