(function (module) {

    var pollSvc = function ($http, $timeout, $q, $interval) {
        var getData = function (maxWaitTime, maxPollTime) {
            var deferred = $q.defer();
            var timeEllapsed = 0;
            var delay = 1000;
            var keepPolling = true;

            setTimeout(function () {
                poll(deferred, delay);
            }, 1000);
            //$interval(, 1);

            return deferred.promise;
        }


        var poll = function (deferred) {
            var keepPolling = true;
            
            $timeout(function () {
                $http.get("https://phoenixidentityproviderdev.azurewebsites.net/api/services/assertion/asd/status").then(function (response) {
                    var result = processData(response.data);
                    if (result) {
                        keepPolling = false;
                        deferred.resolve(data);
                        httpCalled = true;
                    }
                    else {
                        httpCalled = true;
                        poll(deferred);
                        deferred.notify();
                    }
                }, function (error) {
                    httpCalled = true;
                    keepPolling = false;
                    deferred.reject(error);
                })
            }, 1000);
        }

        var processData = function (data) {
            return false;
        }

        return {
            getData: getData
        }
    }

    module.factory("pollSvc", pollSvc);

}(angular.module("app")))