(function (module) {

    var createChart = function () {
        var chart = {};
        chart.type = "ColumnChart";

        chart.data = [
            ["Errors", "Count", { role: "style" }],
            ["Database Errors", 0, ""],
            ["Azure Search Errors", 0, ""],
            ["API Failure", 0, ""],
            ["Angular Errors", 0, ""],
            ["Deployment Errors", 0, ""],
            ["IIS Errors", 0, ""],
            ["Service Down", 0, ""]
        ];

        chart.options = {
            hAxis: { textStyle: { color: "#000000" } },
            vAxis: { title: "Error Count", textStyle: { color: "#000000" } },
            height: 400,
            backgroundColor: "#ffffff",
            legend: { textStyle: { color: "black", fontSize: 16 } },
            animation: {
                duration: 500,
                easing: "out"
            }
        };
        return chart;
    };

    var addData = function (chart) {
        for (var i = 1; i < chart.data.length; i++) {
            chart.data[i][1] = Math.round(Math.random() * 50) + 5;
            if (chart.data[i][1] > 40) {
                chart.data[i][2] = "red";
            }
        }
    };

    var errorsController = function ($timeout) {
        var self = this;
        self.chart = createChart();
        $timeout(function () {
            self.showChart = true;
            addData(self.chart);
        }, 750);
    };

    module.controller("errorsController", errorsController);

}(angular.module("ui")));
