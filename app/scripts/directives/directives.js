'use strict';

angular.module('firefoxoseventsApp').directive('leaflet', function () {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */

    directive.templateUrl = "scripts/directives/leaflet.html";
    directive.scope = {
        id: '=id'
    }
    directive.link = function (scope) {
        ///alert(scope.id);
        //lightbox mapa

        var dir = MQ.routing.directions();

        var lat;
        var lng;
        navigator.geolocation.getCurrentPosition(showPosition);

        function showPosition(position) {
            lat = position.coords.latitude;
            lng = position.coords.longitude;

            var map = L.map('map', {
                layers: MQ.mapLayer(),
                zoom: 17,
                center: [position.coords.latitude, position.coords.longitude],
            });
            dir = MQ.routing.directions();
            console.log(lat,lng);
            dir.route({
                locations: [{
                    latLng: {
                        lat: lat,
                        lng: lng
                    }
    }, 'Centro de convenções maceió alagoas']
            });

            var CustomRouteLayer = MQ.Routing.RouteLayer.extend({
                createStopMarker: function (location, stopNumber) {

                    var custom_icon,
                        marker;

                    if (stopNumber == 1) {
                        marker = L.marker(location.latLng).addTo(map).bindPopup('Você está aqui').openPopup();
                    } else {
                        marker = L.marker(location.latLng).addTo(map).bindPopup('Front in Maceió');
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

    }

    return directive;
});