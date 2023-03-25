(function(){/*
captionplus mouse-over image caption engine
@author  Levente Hunyadi
@version 1.5.0
@remarks Copyright (C) 2009-2014 Levente Hunyadi
@see     https://hunyadi.info.hu/projects/
*/
'use strict';var h={download:!0,overlay:!0,position:"bottom",visibility:"mouseover",horzalign:"center",vertalign:"center"};
function k(d,c){function e(a,b){return a&&a.hasAttribute(b)?a.getAttribute(b):null}var b=function(a,b){a=a||{};for(var c in JSON.parse(JSON.stringify(b)))Object.prototype.hasOwnProperty.call(a,c)||(a[c]=b[c]);return a}(c,h);if(!d.querySelector(".captionplus")){var a=d.querySelector("img");if(a){c=d.querySelector("a");a=e(c,"data-title")||a.alt;var g;b.download&&(g=e(c,"data-download"));if(a||g){c=document.createElement("div");c.classList.add("captionplus-align");c.classList.add("captionplus-horizontal-"+
b.horzalign);c.classList.add("captionplus-vertical-"+b.vertalign);if(a){var f=document.createElement("div");f.innerHTML=a;c.appendChild(f)}a=document.createElement("div");a.classList.add(b.overlay?"captionplus-overlay":"captionplus-outside");a.classList.add("captionplus-"+b.position);a.classList.add("captionplus-"+b.visibility);a.appendChild(c);b=document.createElement("div");b.classList.add("captionplus");for(f=0;f<d.children.length;f++)b.appendChild(d.children[f]);b.appendChild(a);g&&(a=document.createElement("a"),
a.classList.add("captionplus-button"),a.classList.add("captionplus-download"),a.href=g,c.appendChild(a));d.appendChild(b)}}}}k.bind=function(d,c){if(d)for(var e=0;e<d.children.length;e++){var b=d.children[e];"li"==b.tagName.toLowerCase()&&new k(b,c)}};window.CaptionPlus=k;}).call(this);
