(function (module) {

    var shellController = function ($scope) {
        $scope.title = "My Custom Store";
    }

    module.controller("shellCtrl", shellController);

}(angular.module("app")))