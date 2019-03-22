(function() {
    //maps general
    var roadAtlasStyles = [{
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
            "saturation": -100
        }, {
            "lightness": -8
        }, {
            "gamma": 1.18
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "saturation": -100
        }, {
            "gamma": 1
        }, {
            "lightness": -24
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "saturation": -100
        }]
    }, {
        "featureType": "administrative",
        "stylers": [{
            "saturation": -100
        }]
    }, {
        "featureType": "transit",
        "stylers": [{
            "saturation": -100
        }]
    }, {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
            "saturation": -100
        }]
    }, {
        "featureType": "road",
        "stylers": [{
            "saturation": -100
        }]
    }, {
        "featureType": "administrative",
        "stylers": [{
            "saturation": -100
        }]
    }, {
        "featureType": "landscape",
        "stylers": [{
            "saturation": -100
        }]
    }, {
        "featureType": "poi",
        "stylers": [{
            "saturation": -100
        }]
    }];


    //Map1 (Palo Alto, Castro Street)
    function initialize1() {
        var map_canvas = document.getElementById('map1');
        if(map_canvas != null) {
        var map_options = {
            backgroundColor: '#e6e6e6',
            disableDefaultUI: true,
			scrollwheel: false,
            //center: new google.maps.LatLng(37.3876295,-122.0824246),
            center: new google.maps.LatLng(37.4250,-122.146),
            zoom: 16,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
            }
        }
        var map = new google.maps.Map(map_canvas, map_options);
        var styledMapOptions = {

        };
        var usRoadMapType = new google.maps.StyledMapType(
            roadAtlasStyles, styledMapOptions);

        map.mapTypes.set('usroadatlas', usRoadMapType);
        map.setMapTypeId('usroadatlas');

        var image = Drupal.settings.basePath + Drupal.settings.pathToTheme + '/img/contact-us/marker.png';
        var myPos = new google.maps.LatLng(37.4250,-122.146);
        var myMarker = new google.maps.Marker({
            position: myPos,
            map: map,
            icon: new google.maps.MarkerImage(
                Drupal.settings.basePath + Drupal.settings.pathToTheme + '/img/contact-us/marker.png',
                null,
                null,
                null,
                new google.maps.Size(54, 57)
            )
        });
		google.maps.event.addDomListener(map, 'click', function(event){
			this.setOptions({scrollwheel:true});
        });
		google.maps.event.addDomListener(map, 'mouseout', function(event){
			this.setOptions({scrollwheel:false});  
		});		
        }
    }
    google.maps.event.addDomListener(window, 'load', initialize1);

    //Map2 (New York)

    function initialize2() {
        var map_canvas = document.getElementById('map2');
        if(map_canvas != null) {
        var map_options = {
            backgroundColor: '#e6e6e6',
            disableDefaultUI: true,
			scrollwheel: false,
            center: new google.maps.LatLng(40.7274322,-74.0058709),
            zoom: 16,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
            }
        }
        var map = new google.maps.Map(map_canvas, map_options);
        var styledMapOptions = {

        };
        var usRoadMapType = new google.maps.StyledMapType(
            roadAtlasStyles, styledMapOptions);

        map.mapTypes.set('usroadatlas', usRoadMapType);
        map.setMapTypeId('usroadatlas');

        var image = Drupal.settings.basePath + Drupal.settings.pathToTheme + '/img/contact-us/marker.png';
        var myPos = new google.maps.LatLng(40.7274322,-74.0058709);
        var myMarker = new google.maps.Marker({
            position: myPos,
            map: map,
            icon: new google.maps.MarkerImage(
                Drupal.settings.basePath + Drupal.settings.pathToTheme + '/img/contact-us/marker.png',
                null,
                null,
                null,
                new google.maps.Size(54, 57)
            )
        });
		google.maps.event.addDomListener(map, 'click', function(event){
			this.setOptions({scrollwheel:true});
        });
		google.maps.event.addDomListener(map, 'mouseout', function(event){
			this.setOptions({scrollwheel:false});  
		});	
        }
    }
    google.maps.event.addDomListener(window, 'load', initialize2);

    //Map3 (Tel Aviv)
    function initialize3() {
        var map_canvas = document.getElementById('map3');
        if(map_canvas != null) {
        var map_options = {
            backgroundColor: '#e6e6e6',
            disableDefaultUI: true,
			scrollwheel: false,
            center: new google.maps.LatLng(32.0714,34.7949),
            zoom: 16,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
            }
        }
        var map = new google.maps.Map(map_canvas, map_options);
        var styledMapOptions = {

        };
        var usRoadMapType = new google.maps.StyledMapType(
            roadAtlasStyles, styledMapOptions);

        map.mapTypes.set('usroadatlas', usRoadMapType);
        map.setMapTypeId('usroadatlas');

        var image = Drupal.settings.basePath + Drupal.settings.pathToTheme + '/img/contact-us/marker.png';
        var myPos = new google.maps.LatLng(32.0714,34.7949);
        var myMarker = new google.maps.Marker({
            position: myPos,
            map: map,
            icon: new google.maps.MarkerImage(
                Drupal.settings.basePath + Drupal.settings.pathToTheme + '/img/contact-us/marker.png',
                null,
                null,
                null,
                new google.maps.Size(54, 57)
            )
        });
		google.maps.event.addDomListener(map, 'click', function(event){
			this.setOptions({scrollwheel:true});
        });
		google.maps.event.addDomListener(map, 'mouseout', function(event){
			this.setOptions({scrollwheel:false});  
		});
        }
    }
    google.maps.event.addDomListener(window, 'load', initialize3);
	
	
	

})(jQuery);
