(function (module) {

    var ratings = function () {
        return {
            restrict: "A/E",
            scope: {
                skillType: "@",
                currentRate: "=",
                changed: "&"
            },
            templateUrl: "scripts/directives/ratings.html",
            link: function (scope, element) {
                scope.click = function (value) {
                    scope.currentRate = value;
                    scope.changed({type: scope.skillType, data: scope.currentRate});
                }
            }
        }
    }

    module.directive("ratings", ratings);

}(angular.module("app")))