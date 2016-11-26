(function (module) {

    var proxy = function($http, $q) {
        var defer = $q.defer();
        return {
            call: function (url) {
                var http = $http.get(url);
                http.success(function(resp) {
                    defer.resolve(resp);
                });
                http.error(function(err) {
                    defer.reject(err);
                });
                //$http.get(url).then(function (response) {
                //    defer.resolve(response.data);
                //}, function (error) {
                //    defer.reject(error);
                //});
                return defer.promise;
            }
        };
    };

    module.factory("proxy", proxy);

}(angular.module("common")));