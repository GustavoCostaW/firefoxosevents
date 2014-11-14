'use strict';

angular.module('firefoxoseventsApp').directive('leaflet', function () {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */

    directive.templateUrl = "scripts/directives/leaflet.html";
    directive.scope =  {
        id: '=id'
    }
    directive.link = function (scope) {
        ///alert(scope.id);
            //lightbox mapa
            var map = L.map('map', {
                layers: MQ.mapLayer(),
                zoom: 17,
                center: [-9.6576721,-35.711516],
            });

            var dir = MQ.routing.directions();

        function onLocationFound(e) {
            var radius = e.accuracy / 2;
            L.marker(e.latlng).addTo(map);
            L.circle(e.latlng, radius).addTo(map);
            console.log(e.latLng);
        }

    
            dir = MQ.routing.directions();

            dir.route({
                locations: [{
                    latLng: {
                        lat: -9.6576721,
                        lng: -35.711516
                    }
    }, {
                    latLng: {
                        lat:  -9.2576721,
                        lng: -35.511516
                    }
    }]
            });
        console.log(123)

            var CustomRouteLayer = MQ.Routing.RouteLayer.extend({
                createStopMarker: function (location, stopNumber) {

                    var custom_icon,
                        marker;

                    if (stopNumber == 1) {
                        marker = L.marker(location.latLng).addTo(map).bindPopup('Você está aqui').openPopup();
                    } else {
                        marker = L.marker(location.latLng).addTo(map).bindPopup('Hey').openPopup();
                    }

                    return marker;
                }
            });

            map.addLayer(new CustomRouteLayer({
                directions: dir,
                fitBounds: true,
                draggable: false,
            }));
    }

    return directive;
});