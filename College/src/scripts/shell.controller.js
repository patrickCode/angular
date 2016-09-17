(function (module) {

    var shellController = function ($scope) {
        $scope.title = "My College";
    }

    module.controller("shellController", shellController);

}(angular.module("college")))