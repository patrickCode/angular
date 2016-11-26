(function (module) {

    var errorProneController = function (alerting, $http, $window, proxy) {

        $window.onerror = function (message, url, lineNumber) {
            alerting.addAlert("danger", message + " at " + lineNumber);
        }

        var model = this;
        model.alertTypes = alerting.alertTypes;
        model.alertType = model.alertTypes[0];
        model.alertMessage = "";
        model.possiblexss = "<script>alert('hey!!');</script>";

        model.createAlert = function () {
            alerting.addAlert(model.alertType, model.alertMessage);
            model.alertMessage = "";
            model.alertType = "";
            model.alertType = model.alertTypes[0];
        };

        model.throwException = function () {
            throw new Error("Exeption in Controller!");
        };

        var errorHandler = function (error) {
            alerting.addError("handler: " + error);
            //alerting.Addasd();  //Something Wrong
        };

        proxy.call("http://offerings-search-api-dev.azurewebsites.net/api/Services/Search?searchText=Sharepoint")
            .then(function(data) {
                alerting.addInfoormation("Successfully got search results");
            })
            .catch(function(error) {
                var e = error;
                alerting.addError(error);
            });


    };

    module.controller("errorProneController", errorProneController);

}(angular.module("diagnostics")))