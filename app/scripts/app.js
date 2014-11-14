'use strict';

angular.module('firefoxoseventsApp', [
    'ngRoute','ngAnimate'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/eventos', {
                templateUrl: 'views/eventos.html',
                controller: 'EventosController'
            }).when('/evento/:id', {
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