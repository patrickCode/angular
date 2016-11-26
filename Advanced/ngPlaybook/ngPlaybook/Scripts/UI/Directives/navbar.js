(function (module) {

    var navbar = function() {
        return {
            templateUrl: "Templates/nav.html"
        };
    };

    module.directive("navbar", navbar);

}(angular.module("ui")));