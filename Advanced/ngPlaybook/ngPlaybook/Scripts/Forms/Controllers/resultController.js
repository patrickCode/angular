(function (module) {

    var resultsController = function(user) {
        this.user = user;
    }

    module.controller("resultController", resultsController);

}(angular.module("forms")));