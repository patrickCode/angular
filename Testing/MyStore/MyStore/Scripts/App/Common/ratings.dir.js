(function (module) {

    var ratings = function () {
        return {
            restrict: "A/E",
            scope: {
                rate: "=",
                object: "=",
                changed: "&"
            },
            templateUrl: "Templates/ratings.html",
            link: function (scope) {
                scope.click = function (newRate) {
                    scope.rate = newRate;
                    scope.changed({ obj: scope.object, value: scope.rate });
                }
            }
        }
    }

    module.directive("starRating", ratings);

}(angular.module("common")))