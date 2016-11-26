(function (module) {

    var requestCounter = function($q) {

        var requests = 0;

        var request = function(config) {
            requests += 1;
            return $q.when(config);
        };

        var requestError = function(error) {
            requests -= 1;
            return $q.reject(error);
        };

        var response = function (resp) {
            requests -= 1;
            return $q.when(resp);
        };

        var responseError = function(error) {
            requests -= 1;
            return $q.reject(error);
        };

        var getRequestCount = function() {
            return requests;
        };

        return {
            request: request,
            requestError: requestError,
            response: response,
            responseError: responseError,
            getRequestCount: getRequestCount
        }
    };

    module.factory("requestCounter", requestCounter);

    module.config(function($httpProvider) {
        $httpProvider.interceptors.push("requestCounter");
    });

}(angular.module("common")));