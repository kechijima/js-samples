(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=d(e);fetch(e.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let r,i,g,c;function u(){const t=new google.maps.Map(document.getElementById("map"),{zoom:4,center:{lat:34,lng:-40.605}});t.controls[google.maps.ControlPosition.TOP_CENTER].push(document.getElementById("info")),r=new google.maps.Marker({map:t,draggable:!0,position:{lat:40.714,lng:-74.006}}),i=new google.maps.Marker({map:t,draggable:!0,position:{lat:48.857,lng:2.352}});const n=new google.maps.LatLngBounds(r.getPosition(),i.getPosition());t.fitBounds(n),google.maps.event.addListener(r,"position_changed",l),google.maps.event.addListener(i,"position_changed",l),g=new google.maps.Polyline({strokeColor:"#FF0000",strokeOpacity:1,strokeWeight:3,map:t}),c=new google.maps.Polyline({strokeColor:"#CC0099",strokeOpacity:1,strokeWeight:3,geodesic:!0,map:t}),l()}function l(){const t=[r.getPosition(),i.getPosition()];g.setPath(t),c.setPath(t);const n=google.maps.geometry.spherical.computeHeading(t[0],t[1]);document.getElementById("heading").value=String(n),document.getElementById("origin").value=String(t[0]),document.getElementById("destination").value=String(t[1])}window.initMap=u;
