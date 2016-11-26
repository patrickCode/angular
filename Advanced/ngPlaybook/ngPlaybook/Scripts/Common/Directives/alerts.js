(function (module) {

    var alerts = function (alerting) {
        return {
            restrict: "AE",
            templateUrl: "/Scripts/Common/Templates/alert.html",
            scope: true,    //New Scope object (cannot share the scope with parent)
            controller: function ($scope) {
                $scope.removeAlert = function (alert) {
                    alerting.removeAlert(alert);
                }
            },
            link: function (scope) {
                scope.currentAlerts = alerting.currentAlerts;
            }
        }
    }

    module.directive("alerts", alerts);

}(angular.module("common")))