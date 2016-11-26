(function(module) {

    var ratingCtrl = function ($scope) {
        var ngModel;

        this.initialize = function (min, max, ngModelController) { //This is exposed to the directive and all other directives
            ngModel = ngModelController;
            $scope.$render = this.render();
            $scope.stars = new Array(max - min + 1);
            $scope.preview = -1;
        }

        this.render = function () {
            $scope.value = ngModel.$viewValue;
        }

        $scope.click = function ($index) { //This is exposed only to the calling directive
            $scope.value = $index + 1;
            //ngModel.$setViewValue($index + 1);
            //ngModel.$setTouched();
            //ngModel.$render();
        };

        $scope.mouseover = function ($index) {
            $scope.preview = $index;
        }

        $scope.mouseout = function ($index) {
            $scope.preview = -1;
        }

        $scope.styles = function ($index) {
            return {
                "glyphicon": true,
                "glyphicon-star": $index < $scope.value,
                "glyphicon-star-empty": $index >= $scope.value,
                "starpreview": $index <= $scope.preview
            };
        }
    };

    module.controller("starRatingController", ratingCtrl);

    var empRating = function() {
        return {
            scope: {
            },
            require: ["starRating", "ngModel"],
            //require: "starRating",
            templateUrl: "Templates/rating.html",
            controller: "starRatingController",
            link: function (scope, element, attributes, controllers) {
                var starController = controllers[0];
                var ngModelController = controllers[1];
                var min = parseInt(attributes.min || "1");
                var max = parseInt(attributes.max || "10");

                //starController.initialize(min, max); //Access to the public API of the controller
                starController.initialize(min, max, ngModelController); //Access to the public API of the controller
            }
        }
    };

    
    module.directive("starRating", empRating);

}(angular.module("forms")));