(function(module) {
    
    var createChart = function() {
        var chart = {};
        chart.type = "Gauge";

        chart.data = [
            ["Api", "Milliiseconds"],
            ["Catalog Search", 0],
            ["Catalog Fetch", 0],
            ["Catalog Edit", 0],
            ["Catalog Save", 0],
            ["Catalog Bulk Upload", 0],
            ["Catalog Bul Download", 0]
        ];

        chart.option = {
            width: 600,
            height: 400,
            min: 0,
            max: 15,
            redFrom: 90,
            redTo: 10000,
            yellowFrom: 75,
            yellowTo: 9000,
            minorTicks: 5,
            animation: {
                duration: 2000,
                easing: "out"
            }
        };
        return chart;
    }

    var addData = function(chart) {
        var apiResponseTime = [723, 1218, 1345, 2133, 13036, 7345];
        
        for (var i = 1; i < chart.data.length; i++) {
            chart.data[i][1] = apiResponseTime[i - 1]/1000;
        }
    };

    var perfController = function($timeout) {
        var self = this;
        self.chart = createChart();
        $timeout(function() {
            self.showChart = true;
            addData(self.chart);
        }, 750);
    };

    module.controller("perfController", perfController);

}(angular.module("ui")))