/**
 * Maps
 */

// Map colours

global.customGoogleMap = function () {

    var map,
        mapElement = document.getElementById('map_canvas'),
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
        scrollwheel:  false
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
