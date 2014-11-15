'use strict';

angular.module('firefoxoseventsApp', [
    'ngRoute','ngAnimate'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/events', {
                templateUrl: 'views/events.html',
                controller: 'EventosController'
            }).when('/event/:id', {
                templateUrl: 'views/event.html',
                controller: 'EventoController'
            }).when('/maps/:id', {
                templateUrl: 'views/maps.html',
                controller: 'MapsController'
            })
            .otherwise({
                redirectTo: '/events'
            });
    });