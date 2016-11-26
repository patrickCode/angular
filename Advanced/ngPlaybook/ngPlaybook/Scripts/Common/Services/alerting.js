(function (module) {

     var alerting = function ($timeout) {

        var currentAlerts = [];
        var alertType = ["info", "warning", "danger"];

        var addAlert = function (type, message) {
            var alert = { type: type, message: message };
            currentAlerts.push(alert);
            if (type === "info") {
                $timeout(function () {
                    removeAlert(alert);
                }, 5000);
            }
        };

        var addWarning = function (message) {
            addAlert("warning", message);
        };

        var addError = function (message) {
            addAlert("danger", message);
        }

        var addInfo = function (message) {
            addAlert("info", message);
        }

        var removeAlert = function (alert) {
            for (var i = 0; i < currentAlerts.length; i++) {
                if (currentAlerts[i] == alert) {
                    currentAlerts.splice(i, 1);
                    break;
                }
            }
        }

        return {
            addError: addError,
            addWarning: addWarning,
            addInfoormation: addInfo,
            addAlert: addAlert,
            currentAlerts: currentAlerts,    //we are exposing the current alerts, becasue this can act as a model that can be used by controllers, directives, etc
            alertTypes: alertType,
            removeAlert: removeAlert
        };
    };

    module.factory("alerting", alerting);

}(angular.module("common")))    