angular.module("serviceCallModule", [])
    .factory("APICallFactory", function ($http, $state, sharedDataService) {

        return {

            fireAPI: function (text) {
                if (text != "") {
                    $http({
                        method: 'GET',
                        url: 'http://api.openweathermap.org/data/2.5/weather?',
                        params: {
                            "q": text,
                            "appid": "#APIKEY#"
                        }
                    }).then(function successCallback(response) {
                        /*console.log(response.data);*/

                        sharedDataService.setData(response.data);
                        $state.go('displayState', {
                            cityName: response.data.name
                        });
                        return response;
                    }, function errorCallback(response) {
                        /*console.log(response);*/
                        return response;
                    });
                } else
                    alert("Enter a city");



            }
        }

    })
