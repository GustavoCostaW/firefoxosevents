'use strict';

angular.module('firefoxoseventsApp', [
    'ngRoute',
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/eventos', {
                templateUrl: 'views/eventos.html',
                controller: 'EventosController'
            }).when('/evento', {
                templateUrl: 'views/evento.html',
                controller: 'EventoController'
            }).when('/maps/:id', {
                templateUrl: 'views/maps.html',
                controller: 'MapsController'
            })
            .otherwise({
                redirectTo: '/eventos'
            });
    });