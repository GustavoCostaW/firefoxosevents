'use strict';

angular.module('firefoxoseventsApp')
    .controller('EventosController', function ($scope) {
        
        
    }).controller('EventoController', function ($scope) {

    }).controller('MapsController', function ($scope,$routeParams) {
        var evento = {id:$routeParams.id};
        $scope.evento = evento;
    
        $scope.$emit('openLoading');
    });