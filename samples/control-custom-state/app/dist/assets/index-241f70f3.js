(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let d;const a={lat:41.85,lng:-87.65};class p{constructor(r,s,i){this.map_=s,this.center_=new google.maps.LatLng(i),r.style.clear="both";const e=document.createElement("button");e.id="goCenterUI",e.title="Click to recenter the map",r.appendChild(e);const t=document.createElement("div");t.id="goCenterText",t.innerHTML="Center Map",e.appendChild(t);const n=document.createElement("button");n.id="setCenterUI",n.title="Click to change the center of the map",r.appendChild(n);const l=document.createElement("div");l.id="setCenterText",l.innerHTML="Set Center",n.appendChild(l),e.addEventListener("click",()=>{const c=this.center_;this.map_.setCenter(c)}),n.addEventListener("click",()=>{const c=this.map_.getCenter();c&&(this.center_=c)})}}function u(){d=new google.maps.Map(document.getElementById("map"),{zoom:12,center:a});const o=document.createElement("div");new p(o,d,a),o.index=1,o.style.paddingTop="10px",d.controls[google.maps.ControlPosition.TOP_CENTER].push(o)}window.initMap=u;
