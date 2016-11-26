(function (module) {

    var oauth = function ($http, formEncode) {

        var login = function (username, password) {

            var config = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }

            var data = formEncode({
                username: username,
                password: password,
                grant_type: "password"
            });

            return $http.post("/login", data, config);
        }

        return {
            login: login
        };
    };

    module.factory("oauth", oauth);
}(angular.module("common")));