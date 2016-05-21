angular.module('buildApp', ['ui.router','queryModule','displayModule','serviceCallModule','sharedDataModule'])   .config(function ($stateProvider, $urlRouterProvider) {
  
        $urlRouterProvider.otherwise("/");
   
        $stateProvider
            .state('queryState', {
                url: "/",
                templateUrl: "js/landingScreen/query.html",
                controller: "queryCtrl"
            }).state('displayState', {
                url: '/',
                paras: {
                    cityName: null
                },
                templateUrl: "js/displayScreen/showWeather.html",
                controller: "displayCtrl"
            });
    });
/*
    .controller('mainCtrl', function ($scope) {
    


    })*/