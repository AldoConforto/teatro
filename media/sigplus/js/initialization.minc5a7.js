(function(){/*
sigplus client-side initialization script
@author  Levente Hunyadi
@version 1.5.0
@remarks Copyright (C) 2011-2017 Levente Hunyadi
@remarks Licensed under GNU/GPLv3, see https://www.gnu.org/licenses/gpl-3.0.html
@see     https://hunyadi.info.hu/projects/sigplus
*/
'use strict';var h=window.sigplus||{};window.sigplus=h;h.lightbox=h.lightbox||{};
window.__sigplusInitialize=function(c){window.CSS&&window.CSS.escape&&(c=window.CSS.escape(c));var e=document.querySelector("#"+c+".sigplus-gallery");e&&([].forEach.call(e.querySelectorAll("noscript"),function(a){var b=document.createElement("div");b.innerHTML=a.innerText;a.parentNode.replaceChild(b.firstChild===b.lastChild?b.firstChild:b,a)}),[].forEach.call(e.querySelectorAll("a"),function(a){var b=a.querySelector("img");b&&a.setAttribute("title",b.getAttribute("alt"));if(b=a.parentNode){var d=
b.querySelector(".sigplus-summary");if(d){a.setAttribute("title",d.innerText);var c=d.innerHTML;c&&a.setAttribute("data-summary",c);if(c=d.querySelector("a"))a.setAttribute("data-href",c.href),a.setAttribute("data-target",c.target);d.parentNode.removeChild(d)}if(d=b.querySelector(".sigplus-download"))a.setAttribute("data-download",d.href),d.parentNode.removeChild(d);if(b=b.querySelector(".sigplus-title"))(d=b.innerHTML)&&a.setAttribute("data-title",d),b.parentNode.removeChild(b)}}));[].forEach.call(document.querySelectorAll("#"+
c+".sigplus-lightbox-none a.sigplus-image"),function(a){var b=a.getAttribute("data-href");b?(a.href=b,a.target=a.getAttribute("data-target"),a.removeAttribute("data-href"),a.removeAttribute("data-target")):a.addEventListener("click",function(a){a.preventDefault()})})};
window.__sigplusCaption=function(c,e,a){function b(a){if(0==a)return"0 B";var b=Math.log(a)/Math.log(1E3)|0;return(a/Math.pow(1E3,b)).toPrecision(3)+" "+["B","KB","MB","GB","TB"][b]}function d(a,b){return(a=b.exec(a))?a[1]:""}window.CSS&&window.CSS.escape&&(c=window.CSS.escape(c));var k=document.querySelectorAll("#"+c+" a.sigplus-image");e=e||"{$text}";a=a||"{$text}";[].forEach.call(k,function(c,l){function m(a,c){var e=decodeURIComponent(f.getAttribute("data-image-file-name")||f.pathname||""),g=
{text:c||"",name:d(e,/([^\/]+?)(\.[^.\/]+)?$/),filename:d(e,/([^\/]+)$/),filesize:b(parseInt(f.getAttribute("data-image-file-size"),10)),current:l+1,total:k.length};return a.replace(/\\?\{\$([^{}]+)\}/g,function(a,b){return g[b]})}function g(a,b,c){a.setAttribute(b,m(c,a.getAttribute(b)))}var f=c;g(f,"data-summary",a);g(f,"title",a);(c=f.querySelector("img"))&&g(c,"alt",e)})};}).call(this);
