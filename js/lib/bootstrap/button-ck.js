/* ========================================================================
 * Bootstrap: button.js v3.0.3
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function(e){"use strict";var t=function(n,r){this.$element=e(n);this.options=e.extend({},t.DEFAULTS,r);this.isLoading=!1};t.DEFAULTS={loadingText:"loading..."};t.prototype.setState=function(t){var n="disabled",r=this.$element,i=r.is("input")?"val":"html",s=r.data();t+="Text";s.resetText||r.data("resetText",r[i]());r[i](s[t]||this.options[t]);setTimeout(e.proxy(function(){if(t=="loadingText"){this.isLoading=!0;r.addClass(n).attr(n,n)}else if(this.isLoading){this.isLoading=!1;r.removeClass(n).removeAttr(n)}},this),0)};t.prototype.toggle=function(){var e=!0,t=this.$element.closest('[data-toggle="buttons"]');if(t.length){var n=this.$element.find("input");n.prop("type")=="radio"&&(n.prop("checked")&&this.$element.hasClass("active")?e=!1:t.find(".active").removeClass("active"));e&&n.prop("checked",!this.$element.hasClass("active")).trigger("change")}e&&this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("bs.button"),s=typeof n=="object"&&n;i||r.data("bs.button",i=new t(this,s));n=="toggle"?i.toggle():n&&i.setState(n)})};e.fn.button.Constructor=t;e.fn.button.noConflict=function(){e.fn.button=n;return this};e(document).on("click.bs.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn"));n.button("toggle");t.preventDefault()})}(jQuery);