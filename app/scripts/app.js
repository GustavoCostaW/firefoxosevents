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
            })
            .otherwise({
                redirectTo: '/eventos'
            });
    });