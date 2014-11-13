'use strict';

/**
 * @ngdoc overview
 * @name firefoxoseventsApp
 * @description
 * # firefoxoseventsApp
 *
 * Main module of the application.
 */
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
            })
            .otherwise({
                redirectTo: '/eventos'
            });
    });