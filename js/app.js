/* CODE BY @GUSTAVOCOSTAW */

var app = angular.module('myApp', ['ngRoute']).config(
    function($routeProvider) {
        /*ROTAS*/
        /*$routeProvider
            .when('/speakers', {
                templateUrl: 'templates/speakers.html',
                controller: 'Speakers'
            })
            .when('/speaker/:id', {
                templateUrl: 'templates/speaker.html',
                controller: 'Speaker'
            })
            .when('/agenda', {
                templateUrl: 'templates/agenda.html',
                controller: 'Agenda'
            }).otherwise({
                redirectTo: '/agenda'
            });*/

    }).run(function() {
    //remove 300ms delay touch
    FastClick.attach(document.body);
    
    console.log(123);
});


/*app.controller('Speakers', function($scope, $routeParams, Speakers) {

    $scope.speakers = {};

    //factory obter speakers
    Speakers.getSpeakers(function(data) {
        $scope.speakers = data;
    });

});
app.controller('Speaker', function($scope, $filter, $routeParams, $window, Speakers) {

    var myfilter = $filter;
    Speakers.getSpeakers(function(data) {
        //filter passando data me retornar o objeto no json com o id da rota
        $scope.speaker = myfilter('filter')(data, {
            id: $routeParams.id
        })[0];
        
    });

    $scope.test = function(){
        alert("dev fest!");
    }

    //função do botão chamado pelo ng-click para voltar no navegador.
    $scope.backApp = function() {
        $window.history.back();
    }
});
app.controller('Agenda', function($scope, Agenda) {

    $scope.agenda = {};

    //factory obter agenda
    Agenda.getAgenda(function(data) {
        $scope.agenda = data;
    });

});

app.factory('Agenda', function($http) {
    var agendaList;
    var obj = {};

    obj = {
        getAgenda: function(callback) {
            //se já tiver os dados retornar
            if (agendaList) {
                callback(agendaList);
                return false;
            } else {
                
                $http({
                    method: 'GET',
                    url: 'data/agenda.json'
                }).success(function(data) {
                    // erros
                    obj.saveAgenda(data);
                    callback(data);

                }).
                error(function() {
                    //error
                });
            }
        },
        saveAgenda: function(data) {
            agendaList = data;
        }
    }

    return obj;
})

app.factory('Speakers', function($http) {
        var speakerList;
        var obj = {};

        obj = {
            getSpeakers: function(callback) {
                if (speakerList) {
                    callback(speakerList);
                    return false;
                } else {

                $http({
                    method: 'GET',
                    url: 'data/speakers.json'
                }).success(function(data) {
                    // erros
                    obj.saveSpeakers(data);
                    callback(data);

                }).
                error(function() {
                    //error
                });
            }
        },
        saveSpeakers: function(data) {
            speakerList = data;
        }
    }

    return obj;
});*/