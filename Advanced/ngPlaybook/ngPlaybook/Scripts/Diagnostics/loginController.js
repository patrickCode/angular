(function (module) {

    var loginController = function (oauth, currentUser, alerting) {
        var model = this;

        model.username = "";
        model.password = "";
        model.user = currentUser.profile;

        model.login = function (form) {
            if (form.$valid) {
                oauth.login(model.username, model.password)
                    .catch(alerting.errorHandler("Could Not Login"));
                model.password = model.username = "";
                form.$setUntouched();
            }
        }
    };

    model.controller("loginController", loginController);
}(angular.module("security")));