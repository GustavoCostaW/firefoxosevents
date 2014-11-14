'use strict';

angular.module('firefoxoseventsApp')
    .controller('EventosController', function ($scope,Events) {
        $scope.events;
        
        Events.getEvents(function(data) {
            $scope.events = data.results;
        });
    }).controller('EventoController', function ($scope,$routeParams,$filter,Events) {
        var myfilter = $filter;
        Events.getEvents(function(data) {
            //filter passando data me retornar o objeto no json com o id da rota
            $scope.event = myfilter('filter')(data.results, {
                id: $routeParams.id
            })[0];
        });
    }).controller('MapsController', function ($scope,$routeParams,$filter,Events) {
        var evento = {id:$routeParams.id};
        $scope.evento = evento;
        var myfilter = $filter;
        Events.getEvents(function(data) {
            //filter passando data me retornar o objeto no json com o id da rota
            $scope.event = myfilter('filter')(data.results, {
                id: $routeParams.id
            })[0];
            
            $scope.full_address = $scope.event.address.street + " " +$scope.event.address.city; 
            
        });
    
        $scope.$emit('openLoading');
    }).factory('Events', function($http) {
        var events;
        var obj = {};

        obj = {
            getEvents: function(callback) {
                if (events) {
                    callback(events);
                    return false;
                } else {

                $http({
                    method: 'GET',
                    url: 'http://eventify.marcussaad.com/api/event/?format=json'
                }).success(function(data) {
                    // erros
                    obj.saveEvents(data);
                    callback(data);

                }).
                error(function() {
                    //error
                });
            }
        },
        saveEvents: function(data) {
            events = data;
        }
    }

    return obj;
});