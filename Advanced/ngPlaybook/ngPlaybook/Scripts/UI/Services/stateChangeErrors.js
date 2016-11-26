(function (module) {

    module.run(function($rootScope) {
        $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
            alert("Some error while changing state");
        });
    });

}(angular.module("ui")));