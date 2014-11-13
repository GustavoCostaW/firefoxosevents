'use strict';

angular.module('firefoxoseventsApp', [
    'ngRoute'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/eventos', {
                templateUrl: 'app/views/eventos.html',
                controller: 'EventosController'
            }).when('/evento', {
                templateUrl: 'app/views/evento.html',
                controller: 'EventoController'
            }).when('/maps/:id', {
                templateUrl: 'app/views/maps.html',
                controller: 'MapsController'
            })
            .otherwise({
                redirectTo: '/eventos'
            });
    });