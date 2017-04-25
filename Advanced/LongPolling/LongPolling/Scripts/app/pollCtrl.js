(function (module) {

    var pollController = function ($scope, pollSvc) {

        $scope.startPoll = function () {
            pollSvc.getData(1000, 1000)
                .then(function (data) {
                    alert(data);
                }, function (error) {
                    alert(error);
                });
        }
    }

    module.controller("pollCtrl", pollController);

}(angular.module("app")))