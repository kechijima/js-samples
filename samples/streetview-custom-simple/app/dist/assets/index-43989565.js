(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function a(){new google.maps.StreetViewPanorama(document.getElementById("map"),{pano:"reception",visible:!0}).registerPanoProvider(l)}function c(r,o,i,n){return"https://developers.google.com/maps/documentation/javascript/examples/full/images/panoReception1024-"+o+"-"+i+"-"+n+".jpg"}function l(r){return r==="reception"?{location:{pano:"reception",description:"Google Sydney - Reception"},links:[],copyright:"Imagery (c) 2010 Google",tiles:{tileSize:new google.maps.Size(1024,512),worldSize:new google.maps.Size(2048,1024),centerHeading:105,getTileUrl:c}}:null}window.initPano=a;
