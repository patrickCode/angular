(function(module) {

    var profileController = function(user, $location) {
        this.user = user;

        this.submit = function() {
            $location.path("/results");
        };
    };

    module.controller("profileController", profileController);

}(angular.module("forms")));