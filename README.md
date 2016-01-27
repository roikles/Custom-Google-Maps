Custom-Google-Maps
==================

A simple script using the Google Maps API to serve custom maps.

Extremely simple to edit to create an 'on brand' map.

###Setup

First go to Google developers to setup a new Google Maps API app and generate an API Key.

Include both maps.js and a link to the Google Maps API js making sure to replace `YOUR_API_KEY_HERE` with an actual API Key.

```js
<script type="text/javascript" src="maps.js"></script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&callback=customGoogleMap"></script>
```

you will also need to define a html element to contain the map. The HTML element must contain data attributes called `data-latitude` and `data-longitude` with values corresponding to the latitude and longitude of the place you want to mark.

```js
<div class="map" id="map_canvas" data-latitude="12345678" data-longitude="87654321"></div>
```
