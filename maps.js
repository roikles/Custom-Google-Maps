/**
 * Maps
 */

// Map colours

global.customGoogleMap = function () {

    var map,
        mapElement = document.getElementById('map_canvas'),
        clrFillLabelText        = '#ee5065',
        clrStrokeLabelText      = '',
        clrFillHighway          = '#4b6578',
        clrFillMediumRoad       = '#78a9cc',
        clr_light_gray          = '#f3f5f5',
        clrFillLocalRoad        = '#ffffff',
        clrStrokeLocalRoad      = '#ccdae4',
        clrFillWater            = '#79a8be',
        latLong = {
            lat: parseFloat(mapElement.getAttribute('data-latitude')), 
            lng: parseFloat(mapElement.getAttribute('data-longitude'))
        };
    /**
    * Setup some default vars
    * ParseInt makes sure the data is definitely a string
    */

    map = new google.maps.Map(mapElement, {
        center: latLong,
        zoom: 13,
        disableDefaultUI: false,
        scrollwheel:  false,
        styles: [{
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                { "color": clrFillHighway }
            ]
        },{
            // Motorway stroke colour
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                { "visibility": "off" }
            ]
        },{
            // Medium sized road colour
            "featureType": "road.arterial",
            "stylers": [
                { "color": clrFillMediumRoad }
            ]
        },{
            // Local road fill colour
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                { "color": clrFillLocalRoad }
            ]
        },{
            // Local road stroke colour
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                { "color": clrStrokeLocalRoad }
            ]
        },{
            // Label text colour
            "elementType": "labels.text.fill",
            "stylers": [
                { "color": clrFillLabelText }
            ]
        },{
            // Label text stroke
            "elementType": "labels.text.stroke",
            "stylers": [
                { "color": clrStrokeLabelText }
            ]
        },{
            // Places of interest
            "featureType": "poi",
            "stylers": [
                { "visibility": "off" }
            ]
        },{
            // Water
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                { "color": clrFillWater }
            ]
        }]
    });

    google.maps.event.addListener(map, 'click', function(event){
        this.setOptions({scrollwheel:true});
    });

    var marker = new google.maps.Marker({
        position: latLong,
        map: map,
        title: 'My Map'
      });
};
