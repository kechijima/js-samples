(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function l(){const i=new google.maps.Map(document.getElementById("map"),{center:{lat:0,lng:0},zoom:1,streetViewControl:!1,mapTypeControlOptions:{mapTypeIds:["moon"]}}),n=new google.maps.ImageMapType({getTileUrl:function(r,o){const e=a(r,o);if(!e)return"";const t=Math.pow(2,o);return"https://mw1.google.com/mw-planetary/lunar/lunarmaps_v1/clem_bw/"+o+"/"+e.x+"/"+(t-e.y-1)+".jpg"},tileSize:new google.maps.Size(256,256),maxZoom:9,minZoom:0,radius:1738e3,name:"Moon"});i.mapTypes.set("moon",n),i.setMapTypeId("moon")}function a(i,n){const r=i.y;let o=i.x;const e=1<<n;return r<0||r>=e?null:((o<0||o>=e)&&(o=(o%e+e)%e),{x:o,y:r})}window.initMap=l;
