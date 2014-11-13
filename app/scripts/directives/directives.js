'use strict';

angular.module('firefoxoseventsApp').directive('leaflet', function () {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */

    directive.templateUrl = "scripts/directives/leaflet.html";
    directive.scope =  {
        id: '=id'
    }
    directive.link = function (scope) {
        alert(scope.id);
        var map = L.map('map');

        L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
            maxZoom: 18,
            id: 'examples.map-i875mjb7'
        }).addTo(map);

        function onLocationFound(e) {
            var radius = e.accuracy / 2;

            L.marker(e.latlng).addTo(map);

            L.circle(e.latlng, radius).addTo(map);
        }

        function onLocationError(e) {
            alert(e.message);
        }

        map.on('locationfound', onLocationFound);
        map.on('locationerror', onLocationError);

        map.locate({
            setView: true,
            maxZoom: 16
        });
    }


    return directive;
});