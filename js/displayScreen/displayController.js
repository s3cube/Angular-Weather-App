angular.module('displayModule', ['ui.router'])
    .controller('displayCtrl', function ($scope, $state, $stateParams, sharedDataService) {
        $scope.weather = sharedDataService.getData();
        $scope.temperature = Math.round($scope.weather.main.temp - 273);
    });
