angular.module('queryModule', ['ui.router'])
    .controller('queryCtrl', function ($scope, APICallFactory, $state, sharedDataService) {

        $scope.cityName = "";
        $scope.res = "";
        $scope.fireQuery = function (cityName) {
            $scope.res = APICallFactory.fireAPI(cityName);
        };


    });
