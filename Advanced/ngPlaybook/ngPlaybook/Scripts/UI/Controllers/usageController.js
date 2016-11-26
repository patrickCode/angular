(function (module) {

    var createChart = function () {
        var chart = {};
        chart.type = "PieChart";

        chart.data = [
            ["Type", "Percent"],
            ["Search", 34],
            ["Download", 12],
            ["Details", 20],
            ["Filter", 23],
            ["Datasheet", 12]
        ];

        chart.options = {
            height: 300,
            width: 600,
            backgroundColor: "#222222",
            legend: { textStyle: { color: "white", fontSize: 16 } },
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
        }
    };

    var costController = function ($timeout) {
        var self = this;
        self.chart = createChart();
        $timeout(function () {
            self.showChart = true;
            addData(self.chart);
        }, 750);
    };

    module.controller("usageController", costController);

}(angular.module("ui")));
