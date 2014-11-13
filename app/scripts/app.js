'use strict';

/**
 * @ngdoc overview
 * @name firefoxoseventsApp
 * @description
 * # firefoxoseventsApp
 *
 * Main module of the application.
 */
angular
  .module('firefoxoseventsApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
