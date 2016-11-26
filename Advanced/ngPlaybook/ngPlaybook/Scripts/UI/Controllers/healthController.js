(function(module) {
    
    var createChart = function () {
        var chart = {};
        chart.type = "LineChart";

        chart.data = [
            ["Data", "Cpu%", "Memory%", "Disk%", "Network%"],
            ["6-20-2015", 0, 0, 0, 0],
            ["6-21-2015", 0, 0, 0, 0],
            ["6-22-2015", 0, 0, 0, 0],
            ["6-23-2015", 0, 0, 0, 0],
            ["6-24-2015", 0, 0, 0, 0],
            ["6-25-2015", 0, 0, 0, 0],
            ["6-26-2015", 0, 0, 0, 0],
            ["6-27-2015", 0, 0, 0, 0],
            ["6-28-2015", 0, 0, 0, 0]
        ];

        chart.options = {
            width: 1000, height: 400,
            redFrom: 90, redTo: 100,
            yellowFrom: 75, yellowTo: 90,
            minorTicks: 5,
            animation: {
                duration: 2000,
                easing: "out"
            }
        };
        return chart;
    };

    var addData = function (chart) {
        var cpuData = [85, 55, 99, 22, 50, 22, 23, 65, 19];
        var memData = [85, 88, 87, 89, 75, 34, 29, 78, 18];
        var diskData = [54, 54, 54, 56, 57, 57, 64, 77, 77];
        var networkData = [94, 93, 82, 23, 78, 89, 74, 46, 95];
        for (var i = 1; i < chart.data.length; i++) {
            chart.data[i][1] = cpuData[i - 1];
            chart.data[i][2] = memData[i - 1];
            chart.data[i][3] = diskData[i - 1];
            chart.data[i][4] = networkData[i - 1];
        }
    };

    var healthController = function ($timeout) {
        var self = this;
        self.chart = createChart();
        $timeout(function () {
            self.showChart = true;
            addData(self.chart);
        }, 750);
    };

    module.controller("healthController", healthController);

}(angular.module("ui")))