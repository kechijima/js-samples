(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let s,a,n;function m(){s=new google.maps.Map(document.getElementById("map"),{zoom:11,center:{lat:35.6894,lng:139.692},mapTypeId:"hybrid"}),n=new google.maps.InfoWindow,a=new google.maps.MaxZoomService,s.addListener("click",d)}function d(r){a.getMaxZoomAtLatLng(r.latLng,o=>{o.status!=="OK"?n.setContent("Error in MaxZoomService"):n.setContent("The maximum zoom at this location is: "+o.zoom),n.setPosition(r.latLng),n.open(s)})}window.initMap=m;
