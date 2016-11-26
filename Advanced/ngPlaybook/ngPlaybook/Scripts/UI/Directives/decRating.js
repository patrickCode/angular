(function(module) {

    var ratingCtrl = function ($scope) {
        this.initialize = function (min, max) { //This is exposed to the directive and all other directives
            $scope.stars = new Array(max - min + 1);
            $scope.preview = -1;
        }

        $scope.click = function ($index) { //This is exposed only to the calling directive
            $scope.value = $index + 1;
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

    module.controller("empRatinggController", ratingCtrl);

    var empRating = function() {
        return {
            scope: {
                value: "="
            },
            require: "empRatingg",
            templateUrl: "Templates/rating.html",
            controller: "empRatinggController",
            link: function(scope, element, attributes, controller) {
                var min = parseInt(attributes.min || "1");
                var max = parseInt(attributes.max || "5");

                controller.initialize(min, max); //Access to the public API of the controller
            }
        }
    };

    
    module.directive("empRatingg", empRating);

}(angular.module("ui")));