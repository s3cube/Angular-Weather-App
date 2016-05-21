angular.module("sharedDataModule",[])
.service('sharedDataService', function ($state) {
        this.weatherReport = [];

        this.setData = function (data) {
            this.weatherReport = [];

            console.log("set Data called");
            this.weatherReport.push(data);
        };

        this.getData = function () {
            return this.weatherReport[0];
        };

    })